import { derived, writable } from "svelte/store";
import { parsePath } from "./path";

export const pathname = writable(
  typeof window !== "undefined" ? window.location.pathname : "/en",
);

export const route = derived(pathname, (p) => parsePath(p));

export function navigate(url: string, replace = false): void {
  if (typeof window === "undefined") return;
  if (replace) {
    history.replaceState(null, "", url);
  } else {
    history.pushState(null, "", url);
  }
  pathname.set(window.location.pathname);
}

function handleDocumentClick(e: MouseEvent): void {
  if (e.defaultPrevented || e.button !== 0) return;
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

  const target = e.target;
  if (!(target instanceof Element)) return;
  const anchor = target.closest("a");
  if (!anchor || !anchor.href) return;
  if (anchor.target === "_blank" || anchor.download) return;

  const hrefAttr = anchor.getAttribute("href");
  if (!hrefAttr || hrefAttr.startsWith("#")) return;

  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return;
  if (url.protocol === "mailto:" || url.protocol === "tel:") return;

  e.preventDefault();
  navigate(url.pathname + url.search + url.hash);
}

export function initRouter(): void {
  if (typeof window === "undefined") return;
  window.addEventListener("popstate", () => {
    pathname.set(window.location.pathname);
  });
  document.addEventListener("click", handleDocumentClick, true);
}
