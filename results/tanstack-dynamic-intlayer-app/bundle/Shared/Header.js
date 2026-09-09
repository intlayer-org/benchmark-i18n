var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var en_exports$1 = __exportAll({
	content: () => content$1,
	default: () => en_default$1,
	key: () => key$1
});
var key$1 = "header";
var content$1 = {
	"g": "Home",
	"i": "Methodology",
	"j": "Mock Pages",
	"l": "Products",
	"k": "Pricing",
	"n": "Team",
	"a": "Blog",
	"b": "Careers",
	"d": "FAQ",
	"c": "Contact",
	"m": "Settings",
	"e": "Go to GitHub",
	"f": "Header",
	"h": "i18n Bench"
};
var en_default$1 = {
	key: key$1,
	content: content$1
};
var en_exports = __exportAll({
	content: () => content,
	default: () => en_default,
	key: () => key
});
var key = "theme-toggle";
var content = {
	"d": "Theme mode: auto (system). Click to switch to light mode.",
	"a": "Theme: Auto",
	"b": "Theme: Dark",
	"c": "Theme: Light",
	"g": {
		"fields": ["mode"],
		"nodeType": "insertion",
		"insertion": "Theme mode: {{mode}}. Click to switch mode."
	}
};
var en_default = {
	key,
	content
};
export { en_exports$1 as n, en_exports as t };
