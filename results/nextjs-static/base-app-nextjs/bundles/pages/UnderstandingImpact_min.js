import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region components/pages/home/UnderstandingImpact.tsx
function n() {
	return t("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			e("h2", {
				className: "text-2xl font-bold text-foreground",
				children: "Understanding the Impact"
			}),
			t("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					e("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: "Why a single large JSON can hurt performance"
					}),
					e("p", {
						className: "text-sm text-muted-foreground",
						children: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:"
					}),
					t("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							e("li", { children: "The JSON must be parsed on every page load — blocking the main thread." }),
							e("li", { children: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change." }),
							e("li", { children: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated." })
						]
					})
				]
			}),
			t("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					e("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: "The trade-offs of dynamic loading"
					}),
					e("p", {
						className: "text-sm text-muted-foreground",
						children: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:"
					}),
					t("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							t("li", { children: [e("strong", {
								className: "text-foreground",
								children: "Waterfall requests:"
							}), " the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."] }),
							t("li", { children: [
								e("strong", {
									className: "text-foreground",
									children: "Flash of untranslated content (FOUC):"
								}),
								" ",
								"users may briefly see translation keys or a fallback language before the chunk arrives."
							] }),
							t("li", { children: [
								e("strong", {
									className: "text-foreground",
									children: "Cache invalidation:"
								}),
								" ",
								"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
							] })
						]
					})
				]
			}),
			t("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [e("h3", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: "What this benchmark measures"
				}), e("p", {
					className: "text-sm text-muted-foreground",
					children: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
				})]
			})
		]
	});
}
//#endregion
export { n as default };
