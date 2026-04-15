"use client";
import { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, { get: (a, b) => (typeof require !== "undefined" ? require : a)[b] }) : x)(function(x) {
	if (typeof require !== "undefined") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + x + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
//#endregion
//#region ../../node_modules/.bun/react-i18next@17.0.2+e79e2198a3ad32db/node_modules/react-i18next/dist/es/utils.js
var warn = (i18n, code, msg, rest) => {
	const args = [msg, {
		code,
		...rest || {}
	}];
	if (i18n?.services?.logger?.forward) return i18n.services.logger.forward(args, "warn", "react-i18next::", true);
	if (isString(args[0])) args[0] = `react-i18next:: ${args[0]}`;
	if (i18n?.services?.logger?.warn) i18n.services.logger.warn(...args);
	else if (console?.warn) console.warn(...args);
};
var alreadyWarned = {};
var warnOnce = (i18n, code, msg, rest) => {
	if (isString(msg) && alreadyWarned[msg]) return;
	if (isString(msg)) alreadyWarned[msg] = /* @__PURE__ */ new Date();
	warn(i18n, code, msg, rest);
};
var loadedClb = (i18n, cb) => () => {
	if (i18n.isInitialized) cb();
	else {
		const initialized = () => {
			setTimeout(() => {
				i18n.off("initialized", initialized);
			}, 0);
			cb();
		};
		i18n.on("initialized", initialized);
	}
};
var loadNamespaces = (i18n, ns, cb) => {
	i18n.loadNamespaces(ns, loadedClb(i18n, cb));
};
var loadLanguages = (i18n, lng, ns, cb) => {
	if (isString(ns)) ns = [ns];
	if (i18n.options.preload && i18n.options.preload.indexOf(lng) > -1) return loadNamespaces(i18n, ns, cb);
	ns.forEach((n) => {
		if (i18n.options.ns.indexOf(n) < 0) i18n.options.ns.push(n);
	});
	i18n.loadLanguages(lng, loadedClb(i18n, cb));
};
var hasLoadedNamespace = (ns, i18n, options = {}) => {
	if (!i18n.languages || !i18n.languages.length) {
		warnOnce(i18n, "NO_LANGUAGES", "i18n.languages were undefined or empty", { languages: i18n.languages });
		return true;
	}
	return i18n.hasLoadedNamespace(ns, {
		lng: options.lng,
		precheck: (i18nInstance, loadNotPending) => {
			if (options.bindI18n && options.bindI18n.indexOf("languageChanging") > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
		}
	});
};
var isString = (obj) => typeof obj === "string";
var isObject = (obj) => typeof obj === "object" && obj !== null;
//#endregion
//#region ../../node_modules/.bun/react-i18next@17.0.2+e79e2198a3ad32db/node_modules/react-i18next/dist/es/unescape.js
var matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
var htmlEntities = {
	"&amp;": "&",
	"&#38;": "&",
	"&lt;": "<",
	"&#60;": "<",
	"&gt;": ">",
	"&#62;": ">",
	"&apos;": "'",
	"&#39;": "'",
	"&quot;": "\"",
	"&#34;": "\"",
	"&nbsp;": " ",
	"&#160;": " ",
	"&copy;": "©",
	"&#169;": "©",
	"&reg;": "®",
	"&#174;": "®",
	"&hellip;": "…",
	"&#8230;": "…",
	"&#x2F;": "/",
	"&#47;": "/"
};
var unescapeHtmlEntity = (m) => htmlEntities[m];
var unescape = (text) => text.replace(matchHtmlEntity, unescapeHtmlEntity);
//#endregion
//#region ../../node_modules/.bun/react-i18next@17.0.2+e79e2198a3ad32db/node_modules/react-i18next/dist/es/defaults.js
var defaultOptions = {
	bindI18n: "languageChanged",
	bindI18nStore: "",
	transEmptyNodeValue: "",
	transSupportBasicHtmlNodes: true,
	transWrapTextNodes: "",
	transKeepBasicHtmlNodesFor: [
		"br",
		"strong",
		"i",
		"p"
	],
	useSuspense: true,
	unescape,
	transDefaultProps: void 0
};
var getDefaults = () => defaultOptions;
//#endregion
//#region ../../node_modules/.bun/react-i18next@17.0.2+e79e2198a3ad32db/node_modules/react-i18next/dist/es/i18nInstance.js
var i18nInstance;
var getI18n = () => i18nInstance;
//#endregion
//#region ../../node_modules/.bun/react-i18next@17.0.2+e79e2198a3ad32db/node_modules/react-i18next/dist/es/context.js
var I18nContext = createContext();
var ReportNamespaces = class {
	constructor() {
		this.usedNamespaces = {};
	}
	addUsedNamespaces(namespaces) {
		namespaces.forEach((ns) => {
			if (!this.usedNamespaces[ns]) this.usedNamespaces[ns] = true;
		});
	}
	getUsedNamespaces() {
		return Object.keys(this.usedNamespaces);
	}
};
//#endregion
//#region ../../node_modules/.bun/use-sync-external-store@1.6.0+b1ab299f0a400331/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_use_sync_external_store_shim_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = __require("react");
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue;
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
//#endregion
//#region ../../node_modules/.bun/use-sync-external-store@1.6.0+b1ab299f0a400331/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
/**
* @license React
* use-sync-external-store-shim.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_use_sync_external_store_shim_development = /* @__PURE__ */ __commonJSMin(((exports) => {
	"production" !== process.env.NODE_ENV && (function() {
		function is(x, y) {
			return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
		}
		function useSyncExternalStore$2(subscribe, getSnapshot) {
			didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
			var value = getSnapshot();
			if (!didWarnUncachedGetSnapshot) {
				var cachedValue = getSnapshot();
				objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
			}
			cachedValue = useState({ inst: {
				value,
				getSnapshot
			} });
			var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
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
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var React = __require("react"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
		exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
}));
//#endregion
//#region ../../node_modules/.bun/react-i18next@17.0.2+e79e2198a3ad32db/node_modules/react-i18next/dist/es/useTranslation.js
var import_shim = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	if (process.env.NODE_ENV === "production") module.exports = require_use_sync_external_store_shim_production();
	else module.exports = require_use_sync_external_store_shim_development();
})))();
var notReadyT = (k, optsOrDefaultValue) => {
	if (isString(optsOrDefaultValue)) return optsOrDefaultValue;
	if (isObject(optsOrDefaultValue) && isString(optsOrDefaultValue.defaultValue)) return optsOrDefaultValue.defaultValue;
	if (typeof k === "function") return "";
	if (Array.isArray(k)) {
		const last = k[k.length - 1];
		return typeof last === "function" ? "" : last;
	}
	return k;
};
var notReadySnapshot = {
	t: notReadyT,
	ready: false
};
var dummySubscribe = () => () => {};
var useTranslation = (ns, props = {}) => {
	const { i18n: i18nFromProps } = props;
	const { i18n: i18nFromContext, defaultNS: defaultNSFromContext } = useContext(I18nContext) || {};
	const i18n = i18nFromProps || i18nFromContext || getI18n();
	if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces();
	if (!i18n) warnOnce(i18n, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
	const i18nOptions = useMemo(() => ({
		...getDefaults(),
		...i18n?.options?.react,
		...props
	}), [i18n, props]);
	const { useSuspense, keyPrefix } = i18nOptions;
	const nsOrContext = ns || defaultNSFromContext || i18n?.options?.defaultNS;
	const unstableNamespaces = isString(nsOrContext) ? [nsOrContext] : nsOrContext || ["translation"];
	const namespaces = useMemo(() => unstableNamespaces, unstableNamespaces);
	i18n?.reportNamespaces?.addUsedNamespaces?.(namespaces);
	const revisionRef = useRef(0);
	const subscribe = useCallback((callback) => {
		if (!i18n) return dummySubscribe;
		const { bindI18n, bindI18nStore } = i18nOptions;
		const wrappedCallback = () => {
			revisionRef.current += 1;
			callback();
		};
		if (bindI18n) i18n.on(bindI18n, wrappedCallback);
		if (bindI18nStore) i18n.store.on(bindI18nStore, wrappedCallback);
		return () => {
			if (bindI18n) bindI18n.split(" ").forEach((e) => i18n.off(e, wrappedCallback));
			if (bindI18nStore) bindI18nStore.split(" ").forEach((e) => i18n.store.off(e, wrappedCallback));
		};
	}, [i18n, i18nOptions]);
	const snapshotRef = useRef();
	const getSnapshot = useCallback(() => {
		if (!i18n) return notReadySnapshot;
		const calculatedReady = !!(i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every((n) => hasLoadedNamespace(n, i18n, i18nOptions));
		const currentLng = props.lng || i18n.language;
		const currentRevision = revisionRef.current;
		const lastSnapshot = snapshotRef.current;
		if (lastSnapshot && lastSnapshot.ready === calculatedReady && lastSnapshot.lng === currentLng && lastSnapshot.keyPrefix === keyPrefix && lastSnapshot.revision === currentRevision) return lastSnapshot;
		const newSnapshot = {
			t: i18n.getFixedT(currentLng, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix),
			ready: calculatedReady,
			lng: currentLng,
			keyPrefix,
			revision: currentRevision
		};
		snapshotRef.current = newSnapshot;
		return newSnapshot;
	}, [
		i18n,
		namespaces,
		keyPrefix,
		i18nOptions,
		props.lng
	]);
	const [loadCount, setLoadCount] = useState(0);
	const { t, ready } = (0, import_shim.useSyncExternalStore)(subscribe, getSnapshot, getSnapshot);
	useEffect(() => {
		if (i18n && !ready && !useSuspense) {
			const onLoaded = () => setLoadCount((c) => c + 1);
			if (props.lng) loadLanguages(i18n, props.lng, namespaces, onLoaded);
			else loadNamespaces(i18n, namespaces, onLoaded);
		}
	}, [
		i18n,
		props.lng,
		namespaces,
		ready,
		useSuspense,
		loadCount
	]);
	const finalI18n = i18n || {};
	const wrapperRef = useRef(null);
	const wrapperLangRef = useRef();
	const createI18nWrapper = (original) => {
		const descriptors = Object.getOwnPropertyDescriptors(original);
		if (descriptors.__original) delete descriptors.__original;
		const wrapper = Object.create(Object.getPrototypeOf(original), descriptors);
		if (!Object.prototype.hasOwnProperty.call(wrapper, "__original")) try {
			Object.defineProperty(wrapper, "__original", {
				value: original,
				writable: false,
				enumerable: false,
				configurable: false
			});
		} catch (_) {}
		return wrapper;
	};
	const ret = useMemo(() => {
		const original = finalI18n;
		const lang = original?.language;
		let i18nWrapper = original;
		if (original) if (wrapperRef.current && wrapperRef.current.__original === original) if (wrapperLangRef.current !== lang) {
			i18nWrapper = createI18nWrapper(original);
			wrapperRef.current = i18nWrapper;
			wrapperLangRef.current = lang;
		} else i18nWrapper = wrapperRef.current;
		else {
			i18nWrapper = createI18nWrapper(original);
			wrapperRef.current = i18nWrapper;
			wrapperLangRef.current = lang;
		}
		const effectiveT = !ready && !useSuspense ? (...args) => {
			warnOnce(i18n, "USE_T_BEFORE_READY", "useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t.");
			return t(...args);
		} : t;
		const arr = [
			effectiveT,
			i18nWrapper,
			ready
		];
		arr.t = effectiveT;
		arr.i18n = i18nWrapper;
		arr.ready = ready;
		return arr;
	}, [
		t,
		finalI18n,
		ready,
		finalI18n.resolvedLanguage,
		finalI18n.language,
		finalI18n.languages
	]);
	if (i18n && useSuspense && !ready) throw new Promise((resolve) => {
		const onLoaded = () => resolve();
		if (props.lng) loadLanguages(i18n, props.lng, namespaces, onLoaded);
		else loadNamespaces(i18n, namespaces, onLoaded);
	});
	return ret;
};
//#endregion
//#region components/pages/settings/ApiAccessSection.tsx
function ApiAccessSection() {
	const { t } = useTranslation();
	const apiKeyId = useId();
	return /* @__PURE__ */ jsxs("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: t("settings.apiAccessSection.apiAccess")
		}), /* @__PURE__ */ jsxs("div", { children: [
			/* @__PURE__ */ jsx("label", {
				htmlFor: apiKeyId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: t("settings.apiAccessSection.apiKey")
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ jsx("input", {
					id: apiKeyId,
					readOnly: true,
					defaultValue: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
					className: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: t("settings.apiAccessSection.copy")
				})]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: t("settings.apiAccessSection.useThisKeyTo")
			})
		] })]
	});
}
//#endregion
export { ApiAccessSection as default };
