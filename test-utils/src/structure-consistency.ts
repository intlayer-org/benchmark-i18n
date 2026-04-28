/** Canonical attribute order so React vs Solid (etc.) string compare matches. */
function sortOpeningTagAttributes(html: string, tagName: string): string {
  const re = new RegExp(`<${tagName}\\b([^>]*)>`, "gi");
  return html.replace(re, (_full, attrBlob: string) => {
    const pairs: [string, string][] = [];
    const attrRe = /([\w:-]+)="([^"]*)"/g;
    let m: RegExpExecArray | null;
    while ((m = attrRe.exec(attrBlob)) !== null) {
      pairs.push([m[1], m[2]]);
    }
    pairs.sort(([a], [b]) => a.localeCompare(b));
    const inner = pairs.map(([k, v]) => `${k}="${v}"`).join(" ");
    return `<${tagName}${inner ? ` ${inner}` : ""}>`;
  });
}

export function getStructuralBlueprint(html: string): string {
  try {
    let blueprint: string = html
      // 1. Remove scripts and styles
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
      // Bundler-specific preload/stylesheet links (React vs Svelte chunk names differ)
      .replace(/<link\b[^>]*>/gi, "")
      // Head differs by framework / bundler; body DOM is what we compare
      .replace(/<head\b[\s\S]*?<\/head>/gi, "<head></head>")
      // Svelte (and others) may emit HTML comments in the template output
      .replace(/<!--[\s\S]*?-->/g, "")

      // 2. Remove HTML comments (Fixed syntax - no more format errors)
      .replace(/\//g, "")

      // 3. Remove all text nodes between tags
      .replace(/>[^<]+</g, "><")

      // 4. Normalize locale-specific attributes
      .replace(/lang="(en|fr)"/g, 'lang="locale"')
      // Normalize hrefs (e.g., href="en/about" -> href="locale/about")
      .replace(/href="\/?[ef][nr]([^"]*)"/g, 'href="locale$1"')

      // Collapse <svg …> (xmlns / attribute order differs by framework)
      .replace(/<svg\b[^>]*>/gi, "<svg>")

      // Solid Router <A> uses link="" and active/inactive classes
      .replace(/\slink=""/gi, "")
      .replace(/<a\b([^>]*)>/gi, (_full, attrs: string) => {
        const href = /href="([^"]*)"/.exec(attrs)?.[1] ?? "";
        const classStr = /class="([^"]*)"/.exec(attrs)?.[1] ?? "";
        const classes = classStr
          .split(/\s+/)
          .filter(Boolean)
          .filter(
            (c) =>
              ![
                "active",
                "inactive",
                "router-link-active",
                "is-active",
              ].includes(c),
          )
          .sort()
          .join(" ");
        const classAttr = classes ? ` class="${classes}"` : "";
        return `<a href="${href}"${classAttr}>`;
      })

      // Solid may set value= on locale <select>
      .replace(/<select\b([^>]*)>/gi, (_full, inner: string) => {
        const rest = inner.replace(/\svalue="[^"]*"/gi, "").trim();
        return `<select${rest ? ` ${rest}` : ""}>`;
      })

      // 5. Strip translated text from interactive attributes
      .replace(/(aria-label|title|placeholder)="[^"]*"/g, '$1="normalized"')

      // 6. Remove 'selected' attribute (it moves based on locale in switchers)
      .replace(/\s?selected="[^"]*"/g, "")

      // React Router / framework-specific attributes not present in other stacks
      .replace(/\s*data-discover="[^"]*"/gi, "")

      // Vite+React uses #root; Vite+Svelte often uses #app
      .replace(/<div id="(root|app)"/g, '<div id="mount"')

      // 7. Strip hydration blobs (Next.js, TanStack, etc.)
      .replace(
        /id="(?:__NEXT_DATA__|__TSR_DEHYDRATED__)"[\s\S]*?>/g,
        'id="framework-data">',
      )

      // Sort class tokens so Tailwind order differences across stacks match
      .replace(/class="([^"]*)"/g, (_m, cls: string) => {
        const sorted = cls
          .split(/\s+/)
          .filter(Boolean)
          .sort()
          .join(" ");
        return sorted ? `class="${sorted}"` : "";
      })

      // 8. Cleanup whitespace
      .replace(/>\s+</g, "><")
      .trim();

    blueprint = blueprint
      .replace(/\s(id|for)="[^"]*"/g, "")
      .replace(/<input\b([^>]*)>/gi, (_, attrs: string) => {
        const rest = attrs
          .replace(/\s(value|defaultvalue)="[^"]*"/gi, "")
          .trim();
        return `<input ${rest}>`;
      })
      .replace(/<textarea\b([^>]*)>/gi, (_, attrs: string) => {
        const rest = attrs
          .replace(/\s(value|defaultvalue)="[^"]*"/gi, "")
          .trim();
        return `<textarea ${rest}>`;
      });

    for (const tag of ["button", "select", "label", "input", "textarea"]) {
      blueprint = sortOpeningTagAttributes(blueprint, tag);
    }

    return blueprint;
  } catch (err) {
    console.error("getStructuralBlueprint failed:", err);
    return "";
  }
}