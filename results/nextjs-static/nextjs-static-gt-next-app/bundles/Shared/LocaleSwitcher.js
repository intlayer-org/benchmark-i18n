"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import { jsx } from "react/jsx-runtime";
//#region gt.config.json
var locales = [
	"en",
	"fr",
	"es",
	"de",
	"it",
	"pt",
	"zh",
	"ja",
	"ko",
	"ru"
];
//#endregion
//#region components/LocaleSwitcher.tsx
function LocaleSwitcher() {
	const locale = useParams().locale ?? "en";
	const router = useRouter();
	const pathname = usePathname();
	const getLocaleName = (l) => {
		try {
			const name = new Intl.DisplayNames([l], { type: "language" }).of(l);
			return name ? name.charAt(0).toUpperCase() + name.slice(1) : l;
		} catch (e) {
			return l.toUpperCase();
		}
	};
	const handleLocaleChange = (newLocale) => {
		const segments = pathname.split("/");
		segments[1] = newLocale;
		const newPathname = segments.join("/");
		router.push(newPathname);
	};
	return /* @__PURE__ */ jsx("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ jsx("select", {
			value: locale,
			onChange: (e) => handleLocaleChange(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: locales.map((localeItem) => /* @__PURE__ */ jsx("option", {
				value: localeItem,
				children: getLocaleName(localeItem)
			}, localeItem))
		})
	});
}
//#endregion
export { LocaleSwitcher as default };
