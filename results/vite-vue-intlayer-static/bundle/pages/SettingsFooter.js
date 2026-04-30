import { computed, createElementBlock, createElementVNode, defineComponent, getCurrentInstance, h, inject, isRef, markRaw, openBlock, ref, shallowRef, toDisplayString, toValue, watch } from "vue";
var settings_footer_default = {
	key: "settings-footer",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"a": "Cancel",
				"b": "Save Changes"
			},
			"fr": {
				"a": "Annuler",
				"b": "Enregistrer"
			},
			"es": {
				"a": "Cancelar",
				"b": "Guardar cambios"
			},
			"de": {
				"a": "Abbrechen",
				"b": "Änderungen speichern"
			},
			"it": {
				"a": "Annulla",
				"b": "Salva modifiche"
			},
			"pt": {
				"a": "Cancelar",
				"b": "Salvar alterações"
			},
			"zh": {
				"a": "取消",
				"b": "保存更改"
			},
			"ja": {
				"a": "キャンセル",
				"b": "変更を保存"
			},
			"ko": {
				"a": "취소",
				"b": "변경 사항 저장"
			},
			"ru": {
				"a": "Отмена",
				"b": "Сохранить изменения"
			}
		}
	}
};
var n$1 = ({ value: r, children: i, additionalProps: a = {} }) => {
	let o = ref(r), s = typeof i == "function" ? (e) => i(e) : () => i, c = (e) => (o.value, s(e)), l = ((e) => c(e));
	return Object.setPrototypeOf(l, String.prototype), Object.assign(l, {
		render: c,
		toString: () => String(o.value ?? ""),
		valueOf: () => o.value,
		[Symbol.toPrimitive]: () => o.value,
		toJSON: () => o.value,
		get raw() {
			return o.value;
		},
		set raw(e) {
			o.value = e;
		},
		get value() {
			return o.value;
		},
		use(e) {
			return n$1({
				value: o.value,
				children: () => s(e),
				additionalProps: a
			});
		},
		__update(e) {
			s = e.render, this.raw = e.raw;
		},
		...a
	}), markRaw(l);
};
var TRANSLATION = "translation";
var OBJECT = "object";
var ARRAY = "array";
var deepTransformNode = (node, props) => {
	for (const plugin of props.plugins ?? []) if (plugin.canHandle(node)) return plugin.transform(node, props, (node, props) => deepTransformNode(node, props));
	if (node === null || typeof node !== "object") return node;
	if (node.$$typeof !== void 0 || node.__v_isVNode !== void 0 || node._isVNode !== void 0 || node.isJSX !== void 0 || typeof node === "function") return node;
	if (Array.isArray(node)) return node.map((child, index) => {
		return deepTransformNode(child, {
			...props,
			children: child,
			keyPath: [...props.keyPath, {
				type: ARRAY,
				key: index
			}]
		});
	});
	const result = {};
	for (const key in node) Object.defineProperty(result, key, {
		enumerable: true,
		configurable: true,
		get: function() {
			const childProps = {
				...props,
				children: node[key],
				keyPath: [...props.keyPath, {
					type: OBJECT,
					key
				}]
			};
			const transformed = deepTransformNode(node[key], childProps);
			Object.defineProperty(this, key, {
				value: transformed,
				enumerable: true,
				configurable: true
			});
			return transformed;
		}
	});
	return result;
};
var internationalization = {
	"locales": [
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
	],
	"requiredLocales": [
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
	],
	"strictMode": "inclusive",
	"defaultLocale": "en"
};
var isPlainObject = (value) => {
	if (value === null || typeof value !== "object") return false;
	if (typeof value.then === "function") return false;
	if (value.$$typeof !== void 0 || value.__v_isVNode !== void 0 || value._isVNode !== void 0 || value.isJSX !== void 0) return false;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null || Array.isArray(value);
};
var deepMerge = (target, source) => {
	if (target === void 0) return source;
	if (source === void 0) return target;
	if (Array.isArray(target)) return target;
	if (isPlainObject(target) && isPlainObject(source)) {
		const result = { ...target };
		for (const key of Object.keys(source)) {
			if (key === "__proto__" || key === "constructor" || source[key] === void 0) continue;
			result[key] = target[key] !== void 0 ? deepMerge(target[key], source[key]) : source[key];
		}
		return result;
	}
	return target;
};
var getTranslation = (languageContent, locale, fallback) => {
	const get = (loc) => languageContent[loc];
	const seen = /* @__PURE__ */ new Set();
	const locales = [];
	const addLocale = (loc) => {
		if (loc && !seen.has(loc)) {
			seen.add(loc);
			locales.push(loc);
		}
	};
	addLocale(locale);
	if (locale.includes("-")) addLocale(locale.split("-")[0]);
	addLocale(fallback);
	if (fallback?.includes("-")) addLocale(fallback.split("-")[0]);
	const results = [];
	for (const loc of locales) {
		const val = get(loc);
		if (val === void 0) continue;
		if (typeof val === "string") {
			if (results.length === 0) return val;
			continue;
		}
		results.push(val);
	}
	if (results.length === 0) return void 0;
	if (results.length === 1) return results[0];
	if (Array.isArray(results[0])) return results[0];
	return results.reduce((acc, curr) => deepMerge(acc, curr));
};
var TREE_SHAKE_TRANSLATION = process.env["INTLAYER_NODE_TYPE_TRANSLATION"] === "false";
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var translationPlugin = (locale, fallback) => TREE_SHAKE_TRANSLATION ? fallbackPlugin : {
	id: "translation-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
	transform: (node, props, deepTransformNode) => {
		const original = node["translation"] ?? {};
		const result = {};
		for (const key in original) {
			const childProps = {
				...props,
				children: original[key],
				keyPath: [...props.keyPath, {
					type: TRANSLATION,
					key
				}]
			};
			result[key] = deepTransformNode(original[key], childProps);
		}
		return getTranslation(result, locale, fallback);
	}
};
var enumerationPlugin = fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
}), getDictionary = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
}, b$1 = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (t, { children: n, ...r }) => {
		let i = (t) => n$1({
			...r,
			value: t,
			children: t
		}), s = i(n);
		if (typeof n != "function") return s;
		let c = (...e) => i(n(...e));
		Object.setPrototypeOf(c, Object.getPrototypeOf(s));
		for (let e of Object.getOwnPropertyNames(s)) {
			let t = Object.getOwnPropertyDescriptor(s, e);
			t && Object.defineProperty(c, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(s)) {
			let t = Object.getOwnPropertyDescriptor(s, e);
			t && Object.defineProperty(c, e, t);
		}
		return markRaw(c);
	}
}, S = fallbackPlugin, w = fallbackPlugin, T = fallbackPlugin, E = /* @__PURE__ */ new Map(), D = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (E.has(n)) return E.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		b$1,
		S,
		w,
		T
	];
	return E.set(n, r), r;
}, n = (n, r) => getDictionary(n, r, D(r)), i = Symbol("intlayer");
var m = (e, t) => t.reduce((e, t) => e?.[t], e), h$1 = (e) => typeof e == "object" && !!e, g = (e) => typeof e == "function" || h$1(e) && ("render" in e || "setup" in e), _ = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, v = (e) => markRaw(defineComponent({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : g(t) ? h(t) : Array.isArray(t) ? h("span", t) : t;
		};
	}
})), y = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return v(() => e.value);
		if (r == null) return n === Symbol.toPrimitive || n === "toString" ? () => "" : void 0;
		let i = r[n];
		return typeof i == "function" ? i.bind(r) : i;
	},
	ownKeys() {
		let t = e.value;
		return typeof t == "object" && t ? Reflect.ownKeys(t) : [];
	},
	getOwnPropertyDescriptor() {
		return {
			enumerable: !0,
			configurable: !0
		};
	}
}), b = (r, a) => {
	let c = getCurrentInstance() ? inject(i) : void 0, b = isRef(c?.locale) ? c.locale : ref(c?.locale ?? internationalization.defaultLocale), x = computed(() => (a === void 0 ? void 0 : toValue(a)) ?? b.value), S = shallowRef({});
	watch([() => toValue(r), () => x.value], ([t, n$2]) => {
		S.value = n(t, n$2);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let C = (e) => new Proxy({}, {
		get(t, r, i) {
			if (r === "__v_isRef") return !0;
			let a = computed(() => m(S.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return v(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), s = m(S.value, o);
			if (s === void 0 || h$1(s) && !g(s)) return C(o);
			if (_(s)) return y(computed(() => m(S.value, o)));
			let c = computed(() => m(S.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = m(S.value, e);
			return h$1(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return C([]);
};
var SettingsFooter_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "SettingsFooter",
	setup(__props, { expose: __expose }) {
		__expose();
		const { a: cancel, b: saveChanges } = b(settings_footer_default);
		const __returned__ = {
			cancel,
			saveChanges
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _hoisted_1 = { class: "flex justify-end gap-3" };
var _hoisted_2 = {
	type: "button",
	class: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
};
var _hoisted_3 = {
	type: "submit",
	class: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("button", _hoisted_2, toDisplayString($setup.cancel), 1), createElementVNode("button", _hoisted_3, toDisplayString($setup.saveChanges), 1)]);
}
var SettingsFooter_default = _plugin_vue_export_helper_default(SettingsFooter_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/settings/SettingsFooter.vue"]]);
export { SettingsFooter_default as default };
