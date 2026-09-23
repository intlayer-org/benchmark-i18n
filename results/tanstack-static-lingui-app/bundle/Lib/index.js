import { createContext, useContext, useMemo } from "react";
import { jsx } from "react/jsx-runtime";
import { messages } from "../src/locales/en/messages.mjs";
import { messages as messages$1 } from "../src/locales/fr/messages.mjs";
import { messages as messages$2 } from "../src/locales/es/messages.mjs";
import { messages as messages$3 } from "../src/locales/de/messages.mjs";
import { messages as messages$4 } from "../src/locales/it/messages.mjs";
import { messages as messages$5 } from "../src/locales/pt/messages.mjs";
import { messages as messages$6 } from "../src/locales/zh/messages.mjs";
import { messages as messages$7 } from "../src/locales/ja/messages.mjs";
import { messages as messages$8 } from "../src/locales/ko/messages.mjs";
import { messages as messages$9 } from "../src/locales/ru/messages.mjs";
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __require = ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, { get: (a, b) => (typeof require !== "undefined" ? require : a)[b] }) : x)(function(x) {
	if (typeof require !== "undefined") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + x + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
var isString = (s) => typeof s === "string";
var isFunction = (f) => typeof f === "function";
var cache = /* @__PURE__ */ new Map();
var defaultLocale$1 = "en";
function normalizeLocales(locales) {
	return [...Array.isArray(locales) ? locales : [locales], defaultLocale$1];
}
function date(locales, value, format) {
	const _locales = normalizeLocales(locales);
	if (!format) format = "default";
	let o;
	if (typeof format === "string") {
		o = {
			day: "numeric",
			month: "short",
			year: "numeric"
		};
		switch (format) {
			case "full": o.weekday = "long";
			case "long":
				o.month = "long";
				break;
			case "short": o.month = "numeric";
		}
	} else o = format;
	return getMemoized(() => cacheKey("date", _locales, format), () => new Intl.DateTimeFormat(_locales, o)).format(isString(value) ? new Date(value) : value);
}
function time(locales, value, format) {
	let o;
	if (!format) format = "default";
	if (typeof format === "string") {
		o = {
			second: "numeric",
			minute: "numeric",
			hour: "numeric"
		};
		switch (format) {
			case "full":
			case "long":
				o.timeZoneName = "short";
				break;
			case "short": delete o.second;
		}
	} else o = format;
	return date(locales, value, o);
}
function number(locales, value, format) {
	const _locales = normalizeLocales(locales);
	return getMemoized(() => cacheKey("number", _locales, format), () => new Intl.NumberFormat(_locales, format)).format(value);
}
function plural(locales, ordinal, value, { offset = 0, ...rules }) {
	const _locales = normalizeLocales(locales);
	const plurals = ordinal ? getMemoized(() => cacheKey("plural-ordinal", _locales), () => new Intl.PluralRules(_locales, { type: "ordinal" })) : getMemoized(() => cacheKey("plural-cardinal", _locales), () => new Intl.PluralRules(_locales, { type: "cardinal" }));
	return rules[value] ?? rules[plurals.select(value - offset)] ?? rules.other;
}
function getMemoized(getKey, construct) {
	const key = getKey();
	let formatter = cache.get(key);
	if (!formatter) {
		formatter = construct();
		cache.set(key, formatter);
	}
	return formatter;
}
function cacheKey(type, locales, options) {
	return `${type}-${locales.join("-")}-${JSON.stringify(options)}`;
}
var ESCAPE_SEQUENCE_REGEX = /\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/;
var decodeEscapeSequences = (str) => {
	return str.replace(/\\u([a-fA-F0-9]{4})|\\x([a-fA-F0-9]{2})/g, (_, unicode, hex) => {
		if (unicode) {
			const codePoint = parseInt(unicode, 16);
			return String.fromCharCode(codePoint);
		} else {
			const codePoint = parseInt(hex, 16);
			return String.fromCharCode(codePoint);
		}
	});
};
var OCTOTHORPE_PH = "%__lingui_octothorpe__%";
var getDefaultFormats = (locale, passedLocales, formats = {}) => {
	const locales = passedLocales || locale;
	const style = (format) => {
		if (typeof format === "object") return format;
		return formats[format];
	};
	const replaceOctothorpe = (value, message) => {
		const numberFormat = Object.keys(formats).length ? style("number") : void 0;
		const valueStr = number(locales, value, numberFormat);
		return message.replace(new RegExp(OCTOTHORPE_PH, "g"), valueStr);
	};
	return {
		plural: (value, cases) => {
			const { offset = 0 } = cases;
			const message = plural(locales, false, value, cases);
			return replaceOctothorpe(value - offset, message);
		},
		selectordinal: (value, cases) => {
			const { offset = 0 } = cases;
			const message = plural(locales, true, value, cases);
			return replaceOctothorpe(value - offset, message);
		},
		select: selectFormatter,
		number: (value, format) => number(locales, value, style(format) || { style: format }),
		date: (value, format) => date(locales, value, style(format) || format),
		time: (value, format) => time(locales, value, style(format) || format)
	};
};
var selectFormatter = (value, rules) => rules[value] ?? rules.other;
function interpolate(translation, locale, locales) {
	return (values = {}, formats) => {
		const formatters = getDefaultFormats(locale, locales, formats);
		const formatMessage = (tokens, replaceOctothorpe = false) => {
			if (!Array.isArray(tokens)) return tokens;
			return tokens.reduce((message, token) => {
				if (token === "#" && replaceOctothorpe) return message + OCTOTHORPE_PH;
				if (isString(token)) return message + token;
				const [name, type, format] = token;
				let interpolatedFormat = {};
				if (type === "plural" || type === "selectordinal" || type === "select") Object.entries(format).forEach(([key, value2]) => {
					interpolatedFormat[key] = formatMessage(value2, type === "plural" || type === "selectordinal");
				});
				else interpolatedFormat = format;
				let value;
				if (type) {
					const formatter = formatters[type];
					value = formatter(values[name], interpolatedFormat);
				} else value = values[name];
				if (value == null) return message;
				return message + value;
			}, "");
		};
		const result = formatMessage(translation);
		if (isString(result) && ESCAPE_SEQUENCE_REGEX.test(result)) return decodeEscapeSequences(result);
		if (isString(result)) return result;
		return result ? String(result) : "";
	};
}
var EventEmitter = class {
	_events = {};
	on(event, listener) {
		this._events[event] ??= /* @__PURE__ */ new Set();
		this._events[event].add(listener);
		return () => this.removeListener(event, listener);
	}
	removeListener(event, listener) {
		const listeners = this._events[event];
		listeners?.delete(listener);
		if (listeners?.size === 0) delete this._events[event];
	}
	emit(event, ...args) {
		const listeners = this._events[event];
		if (!listeners) return;
		for (const listener of [...listeners]) listener.apply(this, args);
	}
};
var I18n = class extends EventEmitter {
	_locale = "";
	_locales;
	_messages = {};
	_missing;
	_messageCompiler;
	constructor(params) {
		super();
		if (params.missing != null) this._missing = params.missing;
		if (params.messages != null) this.load(params.messages);
		if (typeof params.locale === "string" || params.locales) this.activate(params.locale ?? defaultLocale$1, params.locales);
	}
	get locale() {
		return this._locale;
	}
	get locales() {
		return this._locales;
	}
	get messages() {
		return this._messages[this._locale] ?? {};
	}
	setMessagesCompiler(compiler) {
		this._messageCompiler = compiler;
		return this;
	}
	_load(locale, messages) {
		const maybeMessages = this._messages[locale];
		if (!maybeMessages) this._messages[locale] = messages;
		else Object.assign(maybeMessages, messages);
	}
	load(localeOrMessages, messages) {
		if (typeof localeOrMessages == "string" && typeof messages === "object") this._load(localeOrMessages, messages);
		else Object.entries(localeOrMessages).forEach(([locale, messages2]) => this._load(locale, messages2));
		this.emit("change");
	}
	loadAndActivate({ locale, locales, messages }) {
		this._locale = locale;
		this._locales = locales || void 0;
		this._messages[this._locale] = messages;
		this.emit("change");
	}
	activate(locale, locales) {
		this._locale = locale;
		this._locales = locales;
		this.emit("change");
	}
	_(id, values, options) {
		if (!this.locale) throw new Error("Lingui: Attempted to call a translation function without setting a locale.\nMake sure to call `i18n.activate(locale)` before using Lingui functions.\nThis issue may also occur due to a race condition in your initialization logic.");
		let message = options?.message;
		if (!id) id = "";
		if (!isString(id)) {
			values = id.values || values;
			message = id.message;
			id = id.id;
		}
		const messageForId = this.messages[id];
		const messageMissing = messageForId === void 0;
		const missing = this._missing;
		if (missing && messageMissing) return isFunction(missing) ? missing(this._locale, id) : missing;
		if (messageMissing) this.emit("missing", {
			id,
			locale: this._locale
		});
		let translation = messageForId || message || id;
		if (isString(translation)) {
			if (this._messageCompiler) translation = this._messageCompiler(translation);
			else console.warn(`Uncompiled message detected! Message:

> ${translation}

That means you use raw catalog or your catalog doesn't have a translation for the message and fallback was used.
ICU features such as interpolation and plurals will not work properly for that message.

Please compile your catalog first.
`);
		}
		if (isString(translation) && ESCAPE_SEQUENCE_REGEX.test(translation)) return decodeEscapeSequences(translation);
		if (isString(translation)) return translation;
		return interpolate(translation, this._locale, this._locales)(values, options?.formats);
	}
	t = this._.bind(this);
	date(value, format) {
		return date(this._locales || this._locale, value, format);
	}
	number(value, format) {
		return number(this._locales || this._locale, value, format);
	}
};
function setupI18n(params = {}) {
	return new I18n(params);
}
setupI18n();
var require_use_sync_external_store_shim_production = __commonJSMin(((exports) => {
	var React = __require("react");
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is;
	var useState = React.useState;
	var useEffect = React.useEffect;
	var useLayoutEffect = React.useLayoutEffect;
	var useDebugValue = React.useDebugValue;
	function useSyncExternalStore$2(subscribe, getSnapshot) {
		var value = getSnapshot(), _useState = useState({ inst: {
			value,
			getSnapshot
		} }), inst = _useState[0].inst, forceUpdate = _useState[1];
		useLayoutEffect(function() {
			inst.value = value;
			inst.getSnapshot = getSnapshot;
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
		}, [
			subscribe,
			value,
			getSnapshot
		]);
		useEffect(function() {
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			return subscribe(function() {
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			});
		}, [subscribe]);
		useDebugValue(value);
		return value;
	}
	function checkIfSnapshotChanged(inst) {
		var latestGetSnapshot = inst.getSnapshot;
		inst = inst.value;
		try {
			var nextValue = latestGetSnapshot();
			return !objectIs(inst, nextValue);
		} catch (error) {
			return !0;
		}
	}
	function useSyncExternalStore$1(subscribe, getSnapshot) {
		return getSnapshot();
	}
	var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
	exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
}));
var import_shim = __commonJSMin(((exports, module) => {
	module.exports = require_use_sync_external_store_shim_production();
}))();
var LinguiContext = createContext(null);
var useLinguiInternal = (devErrorMessage) => {
	return useContext(LinguiContext);
};
function useLingui() {
	return useLinguiInternal();
}
var getI18nContext = (i18n, defaultComponent) => ({
	i18n: new Proxy(i18n, {}),
	defaultComponent,
	_: i18n.t.bind(i18n)
});
var createI18nStore = (i18n, defaultComponent) => {
	let latestLocale = i18n.locale;
	let context = getI18nContext(i18n, defaultComponent);
	const updateContext = () => {
		latestLocale = i18n.locale;
		context = getI18nContext(i18n, defaultComponent);
	};
	const getSnapshot = () => {
		if (latestLocale !== i18n.locale) updateContext();
		return context;
	};
	const subscribe = (onStoreChange) => i18n.on("change", () => {
		updateContext();
		onStoreChange();
	});
	return {
		getSnapshot,
		subscribe
	};
};
var I18nProvider = ({ i18n, defaultComponent, children }) => {
	const store = useMemo(() => createI18nStore(i18n, defaultComponent), [i18n, defaultComponent]);
	const context = (0, import_shim.useSyncExternalStore)(store.subscribe, store.getSnapshot, store.getSnapshot);
	if (!context.i18n.locale) return null;
	return jsx(LinguiContext.Provider, {
		value: context,
		children
	});
};
var i18n = setupI18n();
i18n.load("en", {});
i18n.activate("en");
var TestComponent = () => {
	const { _, i18n } = useLingui();
	i18n.locale;
	return null;
};
function EmptyComponent() {
	return jsx(I18nProvider, {
		i18n,
		children: jsx(TestComponent, {})
	});
}
var messageModules = {
	en: messages,
	fr: messages$1,
	es: messages$2,
	de: messages$3,
	it: messages$4,
	pt: messages$5,
	zh: messages$6,
	ja: messages$7,
	ko: messages$8,
	ru: messages$9
};
function getMessages(locale) {
	return messageModules[locale] || messageModules["en"];
}
function initLingui(locale, messages) {
	const lingui = setupI18n();
	lingui.load(locale, messages);
	lingui.activate(locale);
	return lingui;
}
function Wrapper({ children }) {
	const messages = useMemo(() => getMessages("en"), []);
	const i18n = useMemo(() => initLingui("en", messages), [messages]);
	return jsx(I18nProvider, {
		i18n,
		children
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(EmptyComponent, {}) });
}
export { Wrapped as default };
