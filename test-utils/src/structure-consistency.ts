
export function getStructuralBlueprint(html: string): string {
  let blueprint: string = html
    // 1. Remove scripts and styles
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    
    // 2. Remove HTML comments (Fixed syntax - no more format errors)
    .replace(/\//g, '')
    
    // 3. Remove all text nodes between tags
    .replace(/>[^<]+</g, '><')
    
    // 4. Normalize locale-specific attributes
    .replace(/lang="(en|fr)"/g, 'lang="locale"')
    // Normalize hrefs (e.g., href="en/about" -> href="locale/about")
    .replace(/href="\/?[ef][nr]([^"]*)"/g, 'href="locale$1"')
    
    // 5. Strip translated text from interactive attributes
    .replace(/(aria-label|title|placeholder)="[^"]*"/g, '$1="normalized"')
    
    // 6. Remove 'selected' attribute (it moves based on locale in switchers)
    .replace(/\s?selected="[^"]*"/g, '')
    
    // 7. Strip hydration blobs (Next.js, TanStack, etc.)
    .replace(/id="(?:__NEXT_DATA__|__TSR_DEHYDRATED__)"[\s\S]*?>/g, 'id="framework-data">')
    
    // 8. Cleanup whitespace
    .replace(/>\s+</g, '><')
    .trim();

  return blueprint;
}