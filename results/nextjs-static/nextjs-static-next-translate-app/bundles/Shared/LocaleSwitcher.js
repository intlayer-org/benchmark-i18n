"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import { jsx } from "react/jsx-runtime";
//#region i18n/config.ts
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
var getLocaleName = (locale) => {
	try {
		const name = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
		return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
	} catch (e) {
		return locale.toUpperCase();
	}
};
//#endregion
//#region components/LocaleSwitcher.tsx
function LocaleSwitcher() {
	const locale = useParams().lang ?? "en";
	const pathname = usePathname();
	const router = useRouter();
	const handleLocaleChange = (newLocale) => {
		const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
		router.push(newPath);
	};
	return /* @__PURE__ */ jsx("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ jsx("select", {
			value: locale,
			onChange: (e) => handleLocaleChange(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: locales.map((localeEl) => /* @__PURE__ */ jsx("option", {
				value: localeEl,
				children: getLocaleName(localeEl)
			}, localeEl))
		})
	});
}
//#endregion
export { LocaleSwitcher as default };
