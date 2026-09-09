import { createComponent, effect, insert, template } from "solid-js/web";
import { useLocation, useNavigate, useParams } from "@solidjs/router";
import { For } from "solid-js";
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
	} catch {
		return locale.toUpperCase();
	}
};
var _tmpl$ = template(`<div class="flex items-center gap-2"><select class="h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primary">`);
var _tmpl$2 = template(`<option>`);
function LocaleSwitcher() {
	const params = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const handleLocaleChange = (newLocale) => {
		const newPath = location.pathname.replace(/^\/[^/]+/, `/${newLocale}`);
		navigate(`${newPath}${location.search}${location.hash}`);
	};
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild;
		_el$2.addEventListener("change", (e) => handleLocaleChange(e.currentTarget.value));
		insert(_el$2, createComponent(For, {
			each: locales,
			children: (localeItem) => (() => {
				var _el$3 = _tmpl$2();
				_el$3.value = localeItem;
				insert(_el$3, () => getLocaleName(localeItem));
				return _el$3;
			})()
		}));
		effect(() => _el$2.value = params.locale ?? "en");
		return _el$;
	})();
}
export { LocaleSwitcher as default };
