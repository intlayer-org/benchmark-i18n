import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
var root = $.from_html(`<section class="mx-auto mb-16 max-w-3xl space-y-6"><h2 class="text-2xl font-bold text-foreground">Understanding the Impact</h2> <div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground">Why a single large JSON can hurt performance</h3> <p class="text-sm text-muted-foreground">Many i18n libraries store translations in a single JSON object provided via
      React context. When this object is large (thousands of keys), every
      component that consumes translations holds a reference to the entire
      dictionary. This means:</p> <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground"><li>The JSON must be parsed on every page load — blocking the main thread.</li> <li>Context-based architectures can cause cascading re-renders when the
        locale changes, because every consumer is notified even if their
        specific keys didn't change.</li> <li>During server-side rendering, the full dictionary is serialized into the
        HTML payload, increasing the document size that must be downloaded and
        hydrated.</li></ul></div> <div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground">The trade-offs of dynamic loading</h3> <p class="text-sm text-muted-foreground">Splitting translations into per-route or per-namespace chunks can
      dramatically reduce the initial payload. But it introduces new
      challenges:</p> <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground"><li><strong class="text-foreground">Waterfall requests:</strong> the app
        must first load, determine the locale, then fetch the right chunk —
        adding network round-trips.</li> <li><strong class="text-foreground">Flash of untranslated content (FOUC):</strong> users may briefly see translation keys or a fallback language before the
        chunk arrives.</li> <li><strong class="text-foreground">Cache invalidation:</strong> updating translations requires cache-busting strategies to ensure users
        get fresh content without re-downloading unchanged chunks.</li></ul></div> <div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground">What this benchmark measures</h3> <p class="text-sm text-muted-foreground">This test app provides a controlled environment — 10 pages with realistic
      content — to compare i18n libraries across three axes: the weight they add
      to your JavaScript bundle, the time spent parsing and rendering translated
      content, and the effectiveness of their code-splitting and lazy-loading
      strategies. Each library is integrated into the same app so results are
      directly comparable.</p></div></section>`);
function UnderstandingImpact($$anchor) {
	var section = root();
	$.append($$anchor, section);
}
export { UnderstandingImpact as default };
