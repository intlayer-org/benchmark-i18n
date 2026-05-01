import { createComponent, memo } from "solid-js/web";
import { createSignal } from "solid-js";
var isDict = (value) => value != null && (value = Object.getPrototypeOf(value), value === Array.prototype || value === Object.prototype);
function visitDict(flat_dict, dict, path) {
	for (const [key, value] of Object.entries(dict)) {
		const key_path = `${path}.${key}`;
		flat_dict[key_path] = value;
		isDict(value) && visitDict(flat_dict, value, key_path);
	}
}
function flatten(dict) {
	const flat_dict = { ...dict };
	for (const [key, value] of Object.entries(dict)) isDict(value) && visitDict(flat_dict, value, key);
	return flat_dict;
}
var resolveTemplate = (string, args) => {
	if (args) for (const [key, value] of Object.entries(args)) string = string.replace(new RegExp(`{{\\s*${key}\\s*}}`, "g"), value);
	return string;
};
var identityResolveTemplate = ((v) => v);
function translator(dict, resolveTemplate = identityResolveTemplate) {
	return (path, ...args) => {
		if (path[0] === ".") path = path.slice(1);
		const value = dict()?.[path];
		switch (typeof value) {
			case "function": return value(...args);
			case "string": return resolveTemplate(value, args[0]);
			default: return value;
		}
	};
}
var dicts = { en: flatten({ header: { home: "Home" } }) };
var [locale$1] = createSignal("en");
var t$1 = translator(() => dicts[locale$1()], resolveTemplate);
function EmptyComponent() {
	t$1("header.home");
	return null;
}
var dict = flatten({ header: { home: "Home" } });
var [locale] = createSignal("en");
var t = translator(() => dict, resolveTemplate);
function LibWrapper(props) {
	t("header.home");
	return memo(() => props.children);
}
function Wrapped() {
	return createComponent(LibWrapper, { get children() {
		return createComponent(EmptyComponent, {});
	} });
}
export { Wrapped as default };
