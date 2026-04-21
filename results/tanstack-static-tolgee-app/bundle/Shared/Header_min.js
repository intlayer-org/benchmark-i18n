import e, { Suspense as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useRef as s, useState as c } from "react";
import { Link as l, useNavigate as u, useParams as d } from "@tanstack/react-router";
import { ChevronDown as f } from "lucide-react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
import h from "../i18n/locales/de.json";
import g from "../i18n/locales/es.json";
import _ from "../i18n/locales/fr.json";
import v from "../i18n/locales/it.json";
import y from "../i18n/locales/ja.json";
import b from "../i18n/locales/ko.json";
import x from "../i18n/locales/pt.json";
import S from "../i18n/locales/ru.json";
import C from "../i18n/locales/zh.json";
var ee = Object.defineProperty, w = Object.getOwnPropertySymbols, te = Object.prototype.hasOwnProperty, T = Object.prototype.propertyIsEnumerable, E = (e, t, n) => t in e ? ee(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, ne = (e, t) => {
	for (var n in t ||= {}) te.call(t, n) && E(e, n, t[n]);
	if (w) for (var n of w(t)) T.call(t, n) && E(e, n, t[n]);
	return e;
}, re;
function ie(e, t) {
	for (var n = 0; n < t.length; n++) {
		let r = t[n];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (let t in r) if (t !== "default" && !(t in e)) {
				let n = Object.getOwnPropertyDescriptor(r, t);
				n && Object.defineProperty(e, t, n.get ? n : {
					enumerable: !0,
					get: () => r[t]
				});
			}
		}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function D(e) {
	return !!(e && typeof e.then == "function");
}
function O(e, t) {
	return D(e) ? Promise.resolve(e).then(t) : t(e);
}
function k(e, t, n) {
	function r(n) {
		let r = t(n);
		throw e.emit(r), console.error(r), r;
	}
	try {
		let e = n();
		return D(e) ? e.catch(r) : e;
	} catch (e) {
		r(e);
	}
}
function A(e) {
	let t = (Array.isArray(e) ? e : [e]).map((e) => `'${e}'`), n = t.slice(-2).join(" or ");
	return `Tolgee: You need to specify ${[...t.slice(0, -2), n].join(", ")} option`;
}
function ae(e) {
	return typeof e == "object" && !Array.isArray(e) && e !== null;
}
function oe(e) {
	if (typeof e == "string") return [e];
	if (Array.isArray(e)) return e;
}
function j(e) {
	return oe(e) || [];
}
function se(e, t) {
	return ae(t) ? j(t?.[e]) : j(t);
}
function M(e) {
	return Array.from(new Set(e));
}
function ce(e) {
	return e && e.replace(/\/+$/, "");
}
function le(e) {
	if (typeof e == "string") return e;
	if (typeof e?.message == "string") return e.message;
}
var ue = (e, t) => fetch(e, t);
function de(e) {
	return Object.fromEntries(new Headers(e).entries());
}
var fe = (e = ue) => (t, n) => {
	let r = de(n?.headers);
	return r["x-api-key"] && (r = Object.assign({
		"x-tolgee-sdk-type": "JS",
		"x-tolgee-sdk-version": "prerelease"
	}, r)), e(t, Object.assign(Object.assign({}, n), { headers: r }));
}, N = (e, t) => {
	let n = [];
	return {
		listen(e) {
			let t = (t) => {
				e(t);
			};
			return n.push(t), { unsubscribe() {
				n = n.filter((e) => t !== e);
			} };
		},
		emit(r) {
			t() && n.forEach((t) => t({
				type: e,
				value: r
			}));
		}
	};
};
function pe(e) {
	let t = [], n = [];
	function r() {
		if (n.length === 0) return;
		let e = n;
		n = [], t.forEach((t) => {
			t(e);
		});
	}
	return Object.freeze({
		listen(e) {
			let n = (t) => {
				e(t);
			};
			return t.push(n), { unsubscribe() {
				t = t.filter((e) => n !== e);
			} };
		},
		emit(t, i) {
			e() && e() && (n.push(t), i ? setTimeout(r, 0) : r());
		}
	});
}
function me() {
	let e = !0;
	function t() {
		return e;
	}
	let n = Object.freeze({
		onPendingLanguageChange: N("pendingLanguage", t),
		onLanguageChange: N("language", t),
		onLoadingChange: N("loading", t),
		onFetchingChange: N("fetching", t),
		onInitialLoaded: N("initialLoad", t),
		onRunningChange: N("running", t),
		onCacheChange: N("cache", t),
		onPermanentChange: N("permanentChange", t),
		onError: N("error", t),
		onUpdate: pe(t),
		setEmitterActive(t) {
			e = t;
		},
		on: (e, t) => {
			switch (e) {
				case "pendingLanguage": return n.onPendingLanguageChange.listen(t);
				case "language": return n.onLanguageChange.listen(t);
				case "loading": return n.onLoadingChange.listen(t);
				case "fetching": return n.onFetchingChange.listen(t);
				case "initialLoad": return n.onInitialLoaded.listen(t);
				case "running": return n.onRunningChange.listen(t);
				case "cache": return n.onCacheChange.listen(t);
				case "update": return n.onUpdate.listen(t);
				case "permanentChange": return n.onPermanentChange.listen(t);
				case "error": return n.onError.listen(t);
			}
		}
	});
	return n.onInitialLoaded.listen((e) => n.onUpdate.emit(e, !1)), n.onLanguageChange.listen((e) => n.onUpdate.emit(e, !1)), n.onCacheChange.listen((e) => n.onUpdate.emit(e, !0)), n;
}
var P = class extends Error {
	constructor(e, t, n = !1) {
		let { language: r, namespace: i } = e;
		super(`Tolgee: Failed to fetch record for "${r}"${i && ` and "${i}"`}`), this.cause = t, this.isDev = n, this.name = "RecordFetchError", this.language = r, this.namespace = i;
	}
}, he = class extends Error {
	constructor(e, t) {
		super(e), this.cause = t, this.name = "LanguageDetectorError";
	}
}, ge = class extends Error {
	constructor(e, t) {
		super(e), this.cause = t, this.name = "LanguageStorageError";
	}
}, _e = (e) => {
	let t = /* @__PURE__ */ new Map();
	return Object.entries(e).forEach(([e, n]) => {
		if (n != null) {
			if (typeof n == "object") {
				_e(n).forEach((n, r) => {
					t.set(e + "." + r, n);
				});
				return;
			}
			t.set(e, n);
		}
	}), t;
}, F = (e) => Object.fromEntries(_e(e).entries()), I = (e) => {
	let [t, ...n] = e.split(":");
	return {
		language: t,
		namespace: n.join(":") || ""
	};
}, L = ({ language: e, namespace: t }) => t ? `${e}:${t}` : e;
function ve(e, t, n, r, i, a, o) {
	let s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = {}, u = 0;
	function d(t, n, r) {
		let i = L(t);
		c.set(i, {
			data: F(n),
			version: r
		}), e.onCacheChange.emit(I(i));
	}
	async function f(n) {
		function r(t) {
			let r = new P(n, t);
			throw e.onError.emit(r), console.error(r), r;
		}
		let i = t(n);
		if (D(i)) {
			let e = await i.catch(r);
			if (e !== void 0) return e;
		}
		let a = l[L(n)];
		if (typeof a == "function") try {
			return await a();
		} catch (e) {
			r(e);
		}
		else return a;
	}
	async function p(t, r) {
		let i;
		if (r) try {
			i = await n(t);
		} catch (n) {
			let r = new P(t, n, !0);
			e.onError.emit(r), console.warn(r);
		}
		return i ||= await f(t), i;
	}
	let m = Object.freeze({
		addStaticData(e) {
			if (Array.isArray(e)) for (let t of e) {
				let e = L(t), n = c.get(e);
				(!n || n.version === 0) && d(t, F(t.data), 0);
			}
			else e && (l = Object.assign(Object.assign({}, l), e), Object.entries(e).forEach(([e, t]) => {
				if (typeof t != "function") {
					let n = I(e), r = c.get(e);
					(!r || r.version === 0) && d(n, F(t), 0);
				}
			}));
		},
		invalidate() {
			s.clear(), u += 1;
		},
		addRecord(e, t) {
			d(e, F(t), u);
		},
		exists(e, t = !1) {
			let n = c.get(L(e));
			return n && t ? n.version === u : !!n;
		},
		getRecord(e) {
			let t = r(e), n = L(t), i = c.get(n);
			if (i) return Object.assign(Object.assign({}, t), {
				cacheKey: n,
				data: i.data
			});
		},
		getAllRecords() {
			return Array.from(c.entries()).map(([e]) => m.getRecord(I(e)));
		},
		getTranslation(e, t) {
			return c.get(L(e))?.data[t];
		},
		getTranslationNs(e, t, n) {
			for (let r of e) for (let e of t) if (c.get(L({
				language: e,
				namespace: r
			}))?.data[n] != null) return [r];
			return M(e);
		},
		getTranslationFallback(e, t, n) {
			for (let r of e) for (let e of t) {
				let t = c.get(L({
					language: e,
					namespace: r
				}))?.data[n];
				if (t != null) return t;
			}
		},
		changeTranslation(t, n, r) {
			let i = c.get(L(t))?.data;
			i && (i[n] = r, e.onCacheChange.emit(Object.assign(Object.assign({}, t), { key: n })));
		},
		isFetching(e) {
			if (i()) return !0;
			if (e === void 0) return s.size > 0;
			let t = j(e);
			return !!Array.from(s.keys()).find((e) => t.includes(I(e).namespace));
		},
		isLoading(e, t) {
			let n = j(t);
			return i() ? !0 : !!Array.from(s.keys()).find((t) => {
				let r = I(t);
				return (!n.length || n.includes(r.namespace)) && !m.exists({
					namespace: r.namespace,
					language: e
				});
			});
		},
		async loadRecords(e, t) {
			let n = e.map((e) => {
				let n = r(e), i = L(n);
				if (t?.useCache && m.exists(n, !0)) return Object.assign(Object.assign({}, n), {
					new: !1,
					cacheKey: i,
					data: m.getRecord(n).data
				});
				let a = s.get(i);
				if (a) return Object.assign(Object.assign({}, n), {
					new: !1,
					promise: a,
					cacheKey: i
				});
				let o = p(n, !t?.noDev) || Promise.resolve(void 0);
				return s.set(i, o), Object.assign(Object.assign({}, n), {
					new: !0,
					promise: o,
					cacheKey: i
				});
			});
			a.notify(), o.notify();
			let i = n.map((e) => e.promise).filter(Boolean), c = await Promise.all(i);
			return n.forEach((e) => {
				e.promise && (e.data = F(c[0] ?? {}), c.shift());
				let t = s.get(e.cacheKey) !== e.promise;
				e.new && !t && (s.delete(e.cacheKey), e.data ? m.addRecord(e, e.data) : m.getRecord(e) || m.addRecord(e, {}));
			}), a.notify(), o.notify(), n.map((e) => ({
				language: e.language,
				namespace: e.namespace,
				data: e.data ?? {},
				cacheKey: e.cacheKey
			}));
		}
	});
	return m;
}
function ye(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
var be = {
	tagAttributes: {
		textarea: ["placeholder"],
		input: ["value", "placeholder"],
		img: ["alt"],
		"*": ["aria-label", "title"]
	},
	restrictedElements: ["script", "style"],
	highlightKeys: ["Alt"],
	highlightColor: "rgb(255, 0, 0)",
	highlightWidth: 5,
	inputPrefix: "%-%tolgee:",
	inputSuffix: "%-%",
	passToParent: ["option", "optgroup"],
	fullKeyEncode: !1
}, R = "invalid", xe = {
	observerOptions: be,
	observerType: "invisible",
	onFormatError: R,
	apiUrl: "https://app.tolgee.io",
	autoLoadRequiredData: !0,
	fetch: fe(),
	onTranslationMissing: ({ key: e }) => e
}, z = (...e) => {
	let t = {};
	return e.forEach((e) => {
		t = Object.assign(Object.assign(Object.assign({}, t), e), { observerOptions: Object.assign(Object.assign({}, t.observerOptions), e?.observerOptions) });
	}), t;
};
function Se(e, t) {
	let n = z(xe, t?.initialOptions, e);
	return n.apiUrl = ce(n.apiUrl), e?.fetch && (n.fetch = fe(e.fetch)), {
		initialOptions: n,
		activeNamespaces: t?.activeNamespaces || /* @__PURE__ */ new Map(),
		language: t?.language,
		pendingLanguage: t?.language,
		isInitialLoading: !1,
		isRunning: !1
	};
}
function Ce(e, t, n, r, i, a, o, s) {
	let c = { ui: void 0 }, l = {
		formatters: [],
		finalFormatter: void 0,
		observer: void 0,
		devBackend: void 0,
		backends: [],
		ui: void 0,
		languageDetector: void 0,
		languageStorage: void 0
	}, u = async ({ keysAndDefaults: e, target: t }) => {
		var n;
		let o = e.map(({ key: e, ns: t, defaultValue: n }) => ({
			key: e,
			defaultValue: n,
			fallbackNamespaces: r(t),
			namespace: i({
				key: e,
				ns: t
			})[0],
			translation: a({
				key: e,
				ns: t
			})
		}));
		(n = l.ui) == null || n.handleElementClick(o, t);
	}, d = (e, t) => l.observer?.findPositions(e, t) || [];
	function f(e) {
		let t = a({
			key: e.key,
			ns: e.ns
		});
		return T.formatTranslation(Object.assign(Object.assign({}, e), {
			translation: t,
			formatEnabled: !0
		}));
	}
	function p() {
		return { fetch: t().fetch };
	}
	function m(e) {
		l.observer = e?.();
	}
	function h() {
		return !!l.observer;
	}
	function g(e) {
		e && l.formatters.push(e);
	}
	function _(e) {
		l.finalFormatter = e;
	}
	function v(e) {
		c.ui = e;
	}
	function y() {
		return !!c.ui;
	}
	function b(e) {
		l.languageStorage = e;
	}
	function x(e) {
		l.languageDetector = e;
	}
	function S() {
		return k(s.onError, (e) => new ge("Tolgee: Failed to load language", e), () => l.languageStorage?.getLanguage(p()));
	}
	function C() {
		if (!l.languageDetector) return;
		let e = n();
		return k(s.onError, (e) => new he("Tolgee: Failed to detect language", e), () => l.languageDetector?.getLanguage(Object.assign({ availableLanguages: e }, p())));
	}
	function ee(e) {
		e && l.backends.push(e);
	}
	function w(e) {
		l.devBackend = e;
	}
	function te(e, t) {
		t(e, Object.freeze({
			setFinalFormatter: _,
			addFormatter: g,
			setObserver: m,
			hasObserver: h,
			setUi: v,
			hasUi: y,
			setDevBackend: w,
			addBackend: ee,
			setLanguageDetector: x,
			setLanguageStorage: b
		}));
	}
	let T = Object.freeze({
		addPlugin: te,
		findPositions: d,
		run() {
			var e;
			let { apiKey: n, apiUrl: r, projectId: i, branch: a, observerOptions: p, tagNewKeys: m, filterTag: h } = t();
			l.ui = c.ui?.call(c, {
				apiKey: n,
				apiUrl: r,
				projectId: i,
				branch: a,
				highlight: T.highlight,
				changeTranslation: o,
				findPositions: d,
				onPermanentChange: (e) => s.onPermanentChange.emit(e),
				tagNewKeys: m,
				filterTag: h
			}), (e = l.observer) == null || e.run({
				mouseHighlight: !!l.ui,
				options: p,
				translate: f,
				onClick: u
			});
		},
		stop() {
			var e;
			l.ui = void 0, (e = l.observer) == null || e.stop();
		},
		getLanguageStorage() {
			return l.languageStorage;
		},
		getInitialLanguage() {
			let e = n();
			return O(S(), (t) => (!e || e.includes(t)) && t ? t : C());
		},
		setStoredLanguage(e) {
			return k(s.onError, (e) => new ge("Tolgee: Failed to store language", e), () => l.languageStorage?.setLanguage(e, p()));
		},
		getDevBackend() {
			return l.devBackend;
		},
		getBackendRecord: async ({ language: e, namespace: t }) => {
			for (let n of l.backends) {
				let r = await n.getRecord(Object.assign({
					language: e,
					namespace: t
				}, p()));
				if (r !== void 0) return r;
			}
		},
		getBackendDevRecord: async ({ language: e, namespace: n }) => {
			let { apiKey: r, apiUrl: i, projectId: a, branch: o, filterTag: s } = t();
			if (!(!r || !i || !T.hasDevBackend())) return l.devBackend?.getRecord(Object.assign({
				apiKey: r,
				apiUrl: i,
				projectId: a,
				branch: o,
				language: e,
				namespace: n,
				filterTag: s
			}, p()));
		},
		getLanguageDetector() {
			return l.languageDetector;
		},
		retranslate() {
			var e;
			(e = l.observer) == null || e.retranslate();
		},
		highlight: (e, t) => {
			var n;
			return ((n = l.observer)?.highlight)?.call(n, e, t) || { unhighlight() {} };
		},
		unwrap(e) {
			return l.observer ? l.observer?.unwrap(e) : {
				text: e,
				keys: []
			};
		},
		wrap(e) {
			return l.observer ? l.observer?.wrap(e) : e.translation;
		},
		hasDevBackend() {
			return !!T.getDevBackend();
		},
		formatTranslation(n) {
			var { formatEnabled: r } = n, i = ye(n, ["formatEnabled"]);
			let { key: a, translation: o, defaultValue: s, noWrap: c, params: u, ns: d, orEmpty: f } = i, p = o ?? s, m = "";
			o ?? (m = t().onTranslationMissing(i));
			let h = p ?? (f ? "" : m), g = e(), _ = r || !l.observer?.outputNotFormattable, v = (e) => l.observer && !c ? l.observer.wrap({
				key: a,
				translation: e,
				defaultValue: s,
				params: u,
				ns: d
			}) : e;
			h = v(h);
			try {
				if (p && g && _) for (let e of l.formatters) h = e.format({
					translation: h,
					language: g,
					params: u
				});
				l.finalFormatter && p && g && _ && (h = l.finalFormatter.format({
					translation: h,
					language: g,
					params: u
				}));
			} catch (e) {
				console.error(e);
				let n = le(e) || R, r = t().onFormatError, a = typeof r;
				h = a === "string" ? r : a === "function" ? r(n, i) : R, h = v(h);
			}
			return h;
		}
	});
	return T;
}
var we = (e, t, n) => {
	let r = e;
	return Object.freeze({
		init(e) {
			r = e;
		},
		notify() {
			let e = t();
			r !== e && n(e), r = e;
		}
	});
};
function Te(e, t, n) {
	let r = Se(), i, a = Object.freeze({
		init(e) {
			r = Se(e, r);
		},
		isRunning() {
			return r.isRunning;
		},
		setRunning(e) {
			r.isRunning !== e && (r.isRunning = e, n.emit(e));
		},
		isInitialLoading() {
			return r.isInitialLoading;
		},
		setInitialLoading(e) {
			r.isInitialLoading = e;
		},
		getLanguage() {
			return r.language || r.initialOptions.language;
		},
		setLanguage(t) {
			r.language !== t && (r.language = t, e.emit(t));
		},
		getPendingLanguage() {
			return r.pendingLanguage || a.getLanguage();
		},
		setPendingLanguage(e) {
			r.pendingLanguage !== e && (r.pendingLanguage = e, t.emit(e));
		},
		getInitialOptions() {
			return Object.assign(Object.assign({}, r.initialOptions), i);
		},
		addActiveNs(e) {
			j(e).forEach((e) => {
				let t = r.activeNamespaces.get(e);
				t === void 0 ? r.activeNamespaces.set(e, 1) : r.activeNamespaces.set(e, t + 1);
			});
		},
		removeActiveNs(e) {
			j(e).forEach((e) => {
				let t = r.activeNamespaces.get(e);
				t !== void 0 && t > 1 ? r.activeNamespaces.set(e, t - 1) : r.activeNamespaces.delete(e);
			});
		},
		getRequiredNamespaces() {
			return M([
				a.getDefaultNs(),
				...r.initialOptions.ns || [],
				...j(r.initialOptions.fallbackNs),
				...r.activeNamespaces.keys()
			]);
		},
		getFallbackLangs(e) {
			let t = e || a.getLanguage();
			return t ? M([t, ...se(t, r.initialOptions.fallbackLanguage)]) : [];
		},
		getFallbackNs() {
			return j(r.initialOptions.fallbackNs);
		},
		getNs() {
			return r.initialOptions.ns?.length ? r.initialOptions.ns : [r.initialOptions.defaultNs ?? ""];
		},
		getDefaultNs(e) {
			return e === void 0 ? r.initialOptions.defaultNs ?? r.initialOptions.ns?.[0] ?? "" : e;
		},
		getAvailableLanguages() {
			if (r.initialOptions.availableLanguages) return r.initialOptions.availableLanguages;
			if (r.initialOptions.staticData) {
				let e = Object.keys(r.initialOptions.staticData).map((e) => I(e).language);
				return Array.from(new Set(e));
			}
		},
		getAvailableNs() {
			return r.initialOptions.availableNs;
		},
		withDefaultNs(e) {
			return {
				namespace: e.namespace === void 0 ? a.getDefaultNs() : e.namespace,
				language: e.language
			};
		},
		overrideCredentials(e) {
			i = e ? Object.assign(Object.assign({}, e), { apiUrl: ce(e.apiUrl) }) : void 0;
		}
	});
	return a;
}
function Ee(e) {
	var { ns: t, noWrap: n, orEmpty: r, params: i, language: a } = e, o = ye(e, [
		"ns",
		"noWrap",
		"orEmpty",
		"params",
		"language"
	]);
	return Object.assign(Object.assign({}, {
		ns: t,
		noWrap: n,
		orEmpty: r,
		language: a
	}), { params: Object.assign({}, o) });
}
var B = (e, ...t) => {
	let n = {}, r;
	return typeof e == "object" && e ? n = e : (n.key = e, typeof t[0] == "string" ? (n.defaultValue = t[0], r = t[1]) : typeof t[0] == "object" && (r = t[0])), r && (n = Object.assign(Object.assign({}, Ee(r)), n)), n;
};
function De({ options: e }) {
	let t = me(), n = we(!1, () => o.isFetching(), t.onFetchingChange.emit), r = we(!1, () => S.isLoading(), t.onLoadingChange.emit), i = Te(t.onLanguageChange, t.onPendingLanguageChange, t.onRunningChange), a = Ce(i.getLanguage, i.getInitialOptions, i.getAvailableLanguages, u, _, v, f, t), o = ve(t, a.getBackendRecord, a.getBackendDevRecord, i.withDefaultNs, i.isInitialLoading, n, r);
	e && p(e);
	let s;
	t.onUpdate.listen(() => {
		i.isRunning() && a.retranslate();
	});
	function c() {
		return i.getFallbackNs();
	}
	function l(e) {
		return i.getDefaultNs(e);
	}
	function u(e) {
		return M([...j(l(e)), ...c()]);
	}
	function d(e) {
		return M([...j(e ?? l()), ...i.getRequiredNamespaces()]);
	}
	function f(e, t, n) {
		let r = i.withDefaultNs(e), a = o.getTranslation(r, t);
		return o.changeTranslation(r, t, n), { revert() {
			o.changeTranslation(r, t, a);
		} };
	}
	function p(e) {
		i.init(e), o.addStaticData(i.getInitialOptions().staticData);
	}
	function m(e, t) {
		let n = i.getFallbackLangs(e), r = d(t), a = [];
		return n.forEach((e) => {
			r.forEach((t) => {
				a.push({
					language: e,
					namespace: t
				});
			});
		}), a;
	}
	function h(e, t) {
		return m(e, t).filter((e) => !o.exists(e, !0));
	}
	function g(e) {
		let t = [], n = [];
		if (Array.isArray(e.languages)) t = e.languages;
		else if (e.languages === "all") {
			let e = S.getAvailableLanguages();
			if (!e) throw Error(A("availableLanguages"));
			t = e;
		}
		if (Array.isArray(e.namespaces)) n = e.namespaces;
		else if (e.namespaces === "all") {
			let e = S.getAvailableNs();
			if (!e) throw Error(A("availableNs"));
			n = e;
		}
		let r = [];
		return t.forEach((e) => {
			n.forEach((t) => {
				r.push({
					language: e,
					namespace: t
				});
			});
		}), r;
	}
	function _({ key: e, ns: t }) {
		let n = i.getFallbackLangs(), r = u(t ?? void 0);
		return o.getTranslationNs(r, n, e);
	}
	function v({ key: e, ns: t, language: n }) {
		let r = u(t ?? void 0), a = i.getFallbackLangs(n);
		return o.getTranslationFallback(r, a, e);
	}
	function y() {
		let e = O(b(), () => {
			let e = h();
			if (e.length && i.getInitialOptions().autoLoadRequiredData) return o.loadRecords(e, { useCache: !0 });
		});
		if (D(e)) return i.setInitialLoading(!0), n.notify(), r.notify(), Promise.resolve(e).then(() => {
			i.setInitialLoading(!1), n.notify(), r.notify(), t.onInitialLoaded.emit();
		});
		t.onInitialLoaded.emit();
	}
	function b() {
		if (!i.getLanguage()) return O(a.getInitialLanguage(), (e) => {
			let t = e || i.getInitialOptions().defaultLanguage;
			t && i.setLanguage(t);
		});
	}
	function x() {
		if ((a.getLanguageDetector() || a.getLanguageStorage()) && !i.getAvailableLanguages()) throw Error(A("availableLanguages"));
		if (!i.getLanguage() && !i.getInitialOptions().defaultLanguage) throw Error(A(["defaultLanguage", "language"]));
	}
	let S = Object.freeze(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), i), a), o), {
		init: p,
		getTranslation: v,
		changeTranslation: f,
		getTranslationNs: _,
		getDefaultAndFallbackNs: u,
		findPositions: a.findPositions,
		getRequiredDescriptors: m,
		async changeLanguage(e) {
			i.getPendingLanguage() === e && i.getLanguage() === e || (i.setPendingLanguage(e), i.isRunning() && i.getInitialOptions().autoLoadRequiredData && await o.loadRecords(m(e), { useCache: !0 }), e === i.getPendingLanguage() && (i.setLanguage(e), await a.setStoredLanguage(e)));
		},
		async addActiveNs(e, t) {
			t || i.addActiveNs(e), i.isRunning() && await o.loadRecords(m(void 0, e), { useCache: !0 });
		},
		async loadRecord(e, t) {
			return (await S.loadRecords([e], t))[0]?.data;
		},
		isLoading(e) {
			return o.isLoading(i.getLanguage(), e);
		},
		isLoaded(e) {
			let t = i.getLanguage();
			if (!t) return !1;
			let n = i.getFallbackLangs(t), r = d(e), a = [];
			return n.forEach((e) => {
				r.forEach((t) => {
					o.exists({
						language: e,
						namespace: t
					}) || a.push({
						language: e,
						namespace: t
					});
				});
			}), a.length === 0;
		},
		t: (...e) => {
			let t = B(...e), n = v(t);
			return a.formatTranslation(Object.assign(Object.assign({}, t), { translation: n }));
		},
		isDev() {
			return !!(i.getInitialOptions().apiKey && i.getInitialOptions().apiUrl);
		},
		async loadRequired(e) {
			e?.language || await b();
			let t = m(e?.language);
			return S.loadRecords(t, e);
		},
		async loadMatrix(e) {
			let t = g(e);
			return S.loadRecords(t, e);
		},
		run() {
			return x(), i.isRunning() || (i.setRunning(!0), a.run(), s = y()), Promise.resolve(s);
		},
		stop() {
			i.isRunning() && (a.stop(), i.setRunning(!1));
		}
	}));
	return S;
}
function Oe(e) {
	let t = De({ options: e });
	t.isDev() && t.invalidate();
	function n(e) {
		let n = t.isRunning();
		n && t.stop(), e(), t.isDev() && t.invalidate(), n && t.run();
	}
	let r = Object.freeze({
		on: t.on,
		setEmitterActive: t.setEmitterActive,
		getLanguage: t.getLanguage,
		getPendingLanguage: t.getPendingLanguage,
		changeLanguage: t.changeLanguage,
		changeTranslation: t.changeTranslation,
		addActiveNs: t.addActiveNs,
		removeActiveNs: t.removeActiveNs,
		loadRequired: t.loadRequired,
		loadMatrix: t.loadMatrix,
		loadRecords: t.loadRecords,
		loadRecord: t.loadRecord,
		addStaticData: t.addStaticData,
		getRecord: t.getRecord,
		getAllRecords: t.getAllRecords,
		isLoaded: t.isLoaded,
		getRequiredDescriptors: t.getRequiredDescriptors,
		isInitialLoading: t.isInitialLoading,
		isLoading: t.isLoading,
		isFetching: t.isFetching,
		isRunning: t.isRunning,
		run: t.run,
		stop: t.stop,
		t: t.t,
		highlight: t.highlight,
		findPositions: t.findPositions,
		getInitialOptions: t.getInitialOptions,
		isDev: t.isDev,
		wrap: t.wrap,
		unwrap: t.unwrap,
		overrideCredentials(e) {
			n(() => t.overrideCredentials(e));
		},
		addPlugin(e) {
			e && n(() => t.addPlugin(r, e));
		},
		updateOptions(e) {
			e && n(() => t.init(e));
		}
	});
	return r;
}
var ke = () => {
	let e = {
		plugins: [],
		options: {}
	}, t = Object.freeze({
		use(n) {
			return e.plugins.push(n), t;
		},
		updateDefaults(n) {
			return e.options = z(e.options, n), t;
		},
		init(t) {
			let n = Oe(z(e.options, t));
			return e.plugins.forEach(n.addPlugin), n;
		}
	});
	return t;
}, V = 0, H = 1, Ae = 2, je = class extends Error {
	constructor(e, t, n) {
		let r, i = "";
		e === V ? r = "Empty parameter" : e === H ? (r = "Unexpected character", i = "Did you forget to use FormatIcu to render ICU message syntax?") : r = "Unexpected end", super(`Tolgee parser: ${r} at ${t} in "${n}"` + (i ? "\n" + i : "")), this.code = e, this.index = t;
	}
};
function Me(e) {
	return /\s/.test(e);
}
var U = 0, W = 1, G = 2, K = 3, q = 4, Ne = new Set([
	G,
	W,
	U
]), J = "'", Pe = new Set([
	"{",
	"}",
	J
]), Fe = (e) => /[0-9a-zA-Z_]/.test(e);
function Ie(e) {
	let t = U, n = "", r = "", i = "", a = [], o = [], s = 0;
	function c(t) {
		throw new je(t, s, e);
	}
	let l = () => {
		a.push(n), n = "";
	}, u = () => {
		Fe(i) || c(H), r += i;
	}, d = () => {
		r === "" && c(V), o.push(r), r = "";
	};
	for (s = 0; s < e.length; s++) switch (i = e[s], t) {
		case U:
			i === J ? (n += i, t = W) : i === "{" ? (l(), t = K) : (n += i, t = U);
			break;
		case W:
			Pe.has(i) ? (n = n.slice(0, -1) + i, t = G) : (n += i, t = U);
			break;
		case G:
			i === J ? t = U : (n += i, t = G);
			break;
		case K:
			i === "}" ? (d(), t = U) : Me(i) ? r !== "" && (d(), t = q) : (u(), t = K);
			break;
		case q: i == "}" ? t = U : Me(i) ? t = q : c(H);
	}
	return Ne.has(t) || c(Ae), l(), [a, o];
}
function Le(e, t) {
	let [n, r] = Ie(e), i = [n[0]];
	for (let a = 1; a < n.length; a++) {
		let o = t?.[r[a - 1]];
		if (o === void 0) throw Error(`Missing parameter "${r[a - 1]}" in "${e}"`);
		i.push(String(o)), i.push(n[a]);
	}
	return i.join("");
}
function Re() {
	return { format: ({ translation: e, params: t }) => Le(e, t) };
}
var ze = () => (e, t) => (t.setFinalFormatter(Re()), e), Be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ve = {};
(function(e) {
	function t(e, t) {
		var n;
		return n = e instanceof Buffer ? e : Buffer.from(e.buffer, e.byteOffset, e.byteLength), n.toString(t);
	}
	var n = function(e) {
		return Buffer.from(e);
	};
	function r(e) {
		for (var t = 0, n = Math.min(256 * 256, e.length + 1), r = new Uint16Array(n), i = [], a = 0;;) {
			var o = t < e.length;
			if (!o || a >= n - 1) {
				var s = r.subarray(0, a);
				if (i.push(String.fromCharCode.apply(null, s)), !o) return i.join("");
				e = e.subarray(t), t = 0, a = 0;
			}
			var c = e[t++];
			if (!(c & 128)) r[a++] = c;
			else if ((c & 224) == 192) {
				var l = e[t++] & 63;
				r[a++] = (c & 31) << 6 | l;
			} else if ((c & 240) == 224) {
				var l = e[t++] & 63, u = e[t++] & 63;
				r[a++] = (c & 31) << 12 | l << 6 | u;
			} else if ((c & 248) == 240) {
				var l = e[t++] & 63, u = e[t++] & 63, d = e[t++] & 63, f = (c & 7) << 18 | l << 12 | u << 6 | d;
				f > 65535 && (f -= 65536, r[a++] = f >>> 10 & 1023 | 55296, f = 56320 | f & 1023), r[a++] = f;
			}
		}
	}
	function i(e) {
		for (var t = 0, n = e.length, r = 0, i = Math.max(32, n + (n >>> 1) + 7), a = new Uint8Array(i >>> 3 << 3); t < n;) {
			var o = e.charCodeAt(t++);
			if (o >= 55296 && o <= 56319) {
				if (t < n) {
					var s = e.charCodeAt(t);
					(s & 64512) == 56320 && (++t, o = ((o & 1023) << 10) + (s & 1023) + 65536);
				}
				if (o >= 55296 && o <= 56319) continue;
			}
			if (r + 4 > a.length) {
				i += 8, i *= 1 + t / e.length * 2, i = i >>> 3 << 3;
				var c = new Uint8Array(i);
				c.set(a), a = c;
			}
			if (!(o & 4294967168)) {
				a[r++] = o;
				continue;
			} else if (!(o & 4294965248)) a[r++] = o >>> 6 & 31 | 192;
			else if (!(o & 4294901760)) a[r++] = o >>> 12 & 15 | 224, a[r++] = o >>> 6 & 63 | 128;
			else if (!(o & 4292870144)) a[r++] = o >>> 18 & 7 | 240, a[r++] = o >>> 12 & 63 | 128, a[r++] = o >>> 6 & 63 | 128;
			else continue;
			a[r++] = o & 63 | 128;
		}
		return a.slice ? a.slice(0, r) : a.subarray(0, r);
	}
	var a = "Failed to ", o = function(e, t, n) {
		if (e) throw Error(`${a}${t}: the '${n}' option is unsupported.`);
	}, s = typeof Buffer == "function" && Buffer.from, c = s ? n : i;
	function l() {
		this.encoding = "utf-8";
	}
	l.prototype.encode = function(e, t) {
		return o(t && t.stream, "encode", "stream"), c(e);
	};
	function u(e) {
		var t;
		try {
			var n = new Blob([e], { type: "text/plain;charset=UTF-8" });
			t = URL.createObjectURL(n);
			var r = new XMLHttpRequest();
			return r.open("GET", t, !1), r.send(), r.responseText;
		} finally {
			t && URL.revokeObjectURL(t);
		}
	}
	var d = !s && typeof Blob == "function" && typeof URL == "function" && typeof URL.createObjectURL == "function", f = [
		"utf-8",
		"utf8",
		"unicode-1-1-utf-8"
	], p = r;
	s ? p = t : d && (p = function(e) {
		try {
			return u(e);
		} catch {
			return r(e);
		}
	});
	var m = "construct 'TextDecoder'", h = `${a} ${m}: the `;
	function g(e, t) {
		o(t && t.fatal, m, "fatal"), e ||= "utf-8";
		var n;
		if (n = s ? Buffer.isEncoding(e) : f.indexOf(e.toLowerCase()) !== -1, !n) throw RangeError(`${h} encoding label provided ('${e}') is invalid.`);
		this.encoding = e, this.fatal = !1, this.ignoreBOM = !1;
	}
	g.prototype.decode = function(e, t) {
		o(t && t.stream, "decode", "stream");
		var n;
		return n = e instanceof Uint8Array ? e : e.buffer instanceof ArrayBuffer ? new Uint8Array(e.buffer) : new Uint8Array(e), p(n, this.encoding);
	}, e.TextEncoder = e.TextEncoder || l, e.TextDecoder = e.TextDecoder || g;
})(typeof window < "u" ? window : Be);
var He = ie({
	__proto__: null,
	default: Ve
}, [Ve]);
(re = console.assert) == null || re.call(console, He), RegExp(`([${["‌", "‍"].join("")}]{9})+`, "g");
function Ue(e, t) {
	let n = (n) => {
		e.includes(n.data?.type) && t(n.data?.data);
	};
	return window.addEventListener("message", n, !1), { unsubscribe() {
		window.removeEventListener("message", n);
	} };
}
function We({ message: e, recievingMessage: t, data: n, attempts: r = 1, timeout: i = 300 }) {
	let a = !1, o = () => new Promise((r, a) => {
		let o = Ue(t, c);
		window.postMessage({
			type: e,
			data: n
		}, window.origin);
		let s = setTimeout(u, i);
		function c(e) {
			clearTimeout(s), l(), r(e);
		}
		function l() {
			o.unsubscribe();
		}
		function u() {
			l(), a();
		}
	});
	return {
		cancel() {
			a = !0;
		},
		promise: (async () => {
			for (let e = 0; e < r; e++) {
				if (a) return new Promise(() => {});
				try {
					return await o();
				} catch {
					continue;
				}
			}
			if (!a) throw `Didn't recieve ${t.join(" or ")} in time.`;
			return new Promise(() => {});
		})()
	};
}
function Ge() {
	let e;
	async function t(t) {
		e?.();
		let { cancel: n, promise: r } = We({
			message: "TOLGEE_READY",
			recievingMessage: ["TOLGEE_PLUGIN_READY", "TOLGEE_PLUGIN_UPDATED"],
			data: t,
			attempts: 4
		});
		return e = n, r;
	}
	return { update: t };
}
var Ke = "tolgee-in-context-tools.umd.min.js", qe = "@tolgee/in-context-tools", Je = "InContextTools", Ye = "https://cdn.jsdelivr.net/npm";
function Xe(e) {
	return new Promise((t, n) => {
		let r = document.createElement("script");
		r.src = e, r.addEventListener("load", () => t()), r.addEventListener("error", (e) => n(e.error)), document.head.appendChild(r);
	});
}
var Ze = null;
function Qe(e) {
	return Ze ||= Xe(`${Ye}/@tolgee/web@${e}/dist/${Ke}`).then(() => window[qe][Je]), Ze;
}
var $e = "__tolgee_apiKey", et = "__tolgee_apiUrl", tt = "__tolgee_branch";
function nt() {
	let e = sessionStorage.getItem($e) || void 0, t = sessionStorage.getItem(et) || void 0, n = sessionStorage.getItem(tt) || void 0;
	if (!(!e || !t)) return ne({
		apiKey: e,
		apiUrl: t
	}, n === void 0 ? {} : { branch: n });
}
function rt() {
	sessionStorage.removeItem($e), sessionStorage.removeItem(et), sessionStorage.removeItem(tt);
}
function it(e) {
	document.readyState === "loading" ? document.addEventListener && document.addEventListener("DOMContentLoaded", e) : Promise.resolve().then(() => {
		e();
	});
}
var at = () => (e) => e;
(() => {
	if (typeof window > "u") return !1;
	try {
		return typeof sessionStorage < "u" && sessionStorage;
	} catch (e) {
		return console.error("sessionStorage not available", e), !1;
	}
})() && (at = () => (e) => {
	let t = Ge(), n = () => ({
		uiPresent: !0,
		uiVersion: void 0,
		mode: e.isDev() ? "development" : "production",
		config: {
			apiUrl: e.getInitialOptions().apiUrl || "",
			apiKey: e.getInitialOptions().apiKey || "",
			branch: e.getInitialOptions().branch
		}
	});
	return e.on("running", ({ value: e }) => {
		e && it(() => {
			t.update(n()).catch(rt);
		});
	}), nt() && (async () => {
		let e = await Qe("prerelease");
		return (t) => {
			let n = nt();
			return t.addPlugin(e({ credentials: n })), t;
		};
	})().then((t) => {
		e.addPlugin(t);
	}).catch((e) => {
		console.error("Tolgee: Failed to load in-context tools"), console.error(e);
	}), e;
});
function ot() {
	return ke().use(at());
}
function st(e) {
	return Object.assign(Object.assign({}, e), { t(...t) {
		let n = B(...t);
		return e.t(Object.assign(Object.assign({}, n), { noWrap: !0 }));
	} });
}
function ct(e, t, n, r = !0) {
	let [a] = c(() => st(e)), [s, l] = c(r);
	return i(() => {
		l(!1);
	}, []), o(() => {
		r && (e.setEmitterActive(!1), e.addStaticData(n), e.changeLanguage(t), e.setEmitterActive(!0));
	}, [
		t,
		n,
		e
	]), c(() => {
		if (!e.isLoaded() && r) {
			let n = e.getRequiredDescriptors(t), r = e.getAllRecords(), i = n.map(({ namespace: e, language: t }) => e ? `${e}:${t}` : t).filter((e) => !r.find((t) => t?.cacheKey === e));
			console.warn(`Tolgee: Missing records in "staticData" for proper SSR functionality: ${i.map((e) => `"${e}"`).join(", ")}`);
		}
	}), s ? a : e;
}
var lt = { useSuspense: !1 }, ut, dt = () => (ut ||= e.createContext(void 0), ut), Y = void 0, ft = ({ tolgee: n, options: r, children: a, fallback: o, ssr: s }) => {
	i(() => {
		Y?.run !== n.run && (Y && Y.stop(), Y = n, n.run().catch((e) => {
			console.error(e);
		}).finally(() => {
			p(!1);
		}));
	}, [n]);
	let l = n, { language: u, staticData: d } = typeof s == "object" ? s : {};
	l = ct(n, u, d, !!s);
	let [f, p] = c(!l.isLoaded()), m = Object.assign(Object.assign({}, lt), r), h = dt();
	return m.useSuspense ? e.createElement(h.Provider, { value: {
		tolgee: l,
		options: m
	} }, f ? o : e.createElement(t, { fallback: o || null }, a)) : e.createElement(h.Provider, { value: {
		tolgee: l,
		options: m
	} }, f ? o : a);
}, pt;
function mt() {
	return pt;
}
var ht = () => {
	let e = r(dt()) || mt();
	if (!e) throw Error("Couldn't find tolgee instance, did you forgot to use `TolgeeProvider`?");
	return e;
}, gt = () => {
	let [e, t] = c(0);
	return {
		instance: e,
		rerender: n(() => {
			t((e) => e + 1);
		}, [t])
	};
}, _t = (e, t) => {
	let { tolgee: r, options: a } = ht(), o = oe(e), c = j(o).join(":"), l = Object.assign(Object.assign({}, a), t), { rerender: u, instance: d } = gt(), f = s([]);
	f.current = [];
	let p = r.isLoaded(o);
	i(() => {
		let e = r.on("update", u);
		return () => {
			e.unsubscribe();
		};
	}, [c, r]), i(() => (r.addActiveNs(o), () => r.removeActiveNs(o)), [c, r]);
	let m = n((e) => {
		let t = e.ns ?? o?.[0];
		return r.t(Object.assign(Object.assign({}, e), { ns: t }));
	}, [r, d]);
	if (l.useSuspense && !p) throw r.addActiveNs(o, !0);
	return {
		t: m,
		isLoading: !p
	};
}, vt = (e, t) => {
	let { t: r, isLoading: i } = _t(e, t);
	return {
		t: n((...e) => r(B(...e)), [r]),
		isLoading: i
	};
};
function yt(e) {
	return Array.isArray(e) && e.length === 1 ? e[0] : e;
}
var bt = (t) => {
	if (!t) return;
	let n = {};
	return Object.entries(t || {}).forEach(([t, r]) => {
		if (typeof r == "function") n[t] = (e) => r(Z(e));
		else if (e.isValidElement(r)) {
			let i = r;
			n[t] = (t) => i.props.children === void 0 && t?.length ? e.cloneElement(i, {}, Z(t)) : e.cloneElement(i);
		} else n[t] = r;
	}), n;
};
function X(e) {
	return typeof e == "function" ? e() : e;
}
var Z = (t) => {
	let n = yt(t);
	return Array.isArray(n) ? n.map((t, n) => e.createElement(e.Fragment, { key: n }, X(t))) : X(n);
}, xt = (t) => {
	let n = t.keyName || t.children;
	n === void 0 && console.error("T component: keyName not defined");
	let r = t.defaultValue || (t.keyName ? t.children : void 0), i = Z(t.t({
		key: n,
		params: bt(t.params),
		defaultValue: r,
		noWrap: t.noWrap,
		ns: t.ns,
		language: t.language
	}));
	return e.createElement(e.Fragment, null, i);
}, St = (t) => {
	let { t: n } = _t();
	return e.createElement(xt, Object.assign({ t: n }, t));
}, Ct = [
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
], wt = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
};
function Tt() {
	let { t: e, ...t } = vt();
	return {
		...t,
		t: (t, n) => e(t, n)
	};
}
function Q(e) {
	return p(St, { ...e });
}
function Et() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Dt() {
	let { t: e } = Tt(), [t, n] = c("auto");
	i(() => {
		let e = Et();
		n(e), $(e);
	}, []), i(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function r() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		n(e), $(e), window.localStorage.setItem("theme", e);
	}
	let a = e(t === "auto" ? "themeToggle.themeModeAutoSystemClick" : t === "light" ? "themeToggle.themeModeLightClick" : "themeToggle.themeModeDarkClick");
	return p("button", {
		type: "button",
		onClick: r,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t === "auto" ? p(Q, {
			keyName: "themeToggle.themeAuto",
			defaultValue: "Theme: Auto"
		}) : t === "dark" ? p(Q, {
			keyName: "themeToggle.themeDark",
			defaultValue: "Theme: Dark"
		}) : p(Q, {
			keyName: "themeToggle.themeLight",
			defaultValue: "Theme: Light"
		})
	});
}
function Ot() {
	let e = d({ strict: !1 }).locale ?? "en", t = u(), n = (e) => {
		t({
			to: ".",
			params: (t) => ({
				...t,
				locale: e
			})
		});
	};
	return p("div", {
		className: "flex items-center gap-2",
		children: p("select", {
			value: e,
			onChange: (e) => n(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: Ct.map((e) => p("option", {
				value: e,
				children: wt(e)
			}, e))
		})
	});
}
function kt(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), a(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function At() {
	let { t: e } = Tt();
	kt("Header");
	let [t, n] = c(!1), r = d({ strict: !1 }).locale ?? "en", i = [
		{
			to: "/$locale/products",
			label: e("header.products", "Products")
		},
		{
			to: "/$locale/pricing",
			label: e("header.pricing", "Pricing")
		},
		{
			to: "/$locale/team",
			label: e("header.team", "Team")
		},
		{
			to: "/$locale/blog",
			label: e("header.blog", "Blog")
		},
		{
			to: "/$locale/careers",
			label: e("header.careers", "Careers")
		},
		{
			to: "/$locale/faq",
			label: e("header.faq", "FAQ")
		},
		{
			to: "/$locale/contact",
			label: e("header.contact", "Contact")
		},
		{
			to: "/$locale/settings",
			label: e("header.settings", "Settings")
		}
	];
	return p("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: m("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [m("div", {
				className: "flex items-center gap-8",
				children: [p(l, {
					preload: !1,
					to: "/$locale",
					params: { locale: r },
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), m("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						p(l, {
							preload: !1,
							to: "/$locale",
							params: { locale: r },
							activeOptions: { exact: !0 },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: p(Q, {
								keyName: "header.home",
								defaultValue: "Home"
							})
						}),
						p(l, {
							preload: !1,
							to: "/$locale/about",
							params: { locale: r },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: p(Q, {
								keyName: "header.methodology",
								defaultValue: "Methodology"
							})
						}),
						m("div", {
							className: "relative",
							children: [m("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: [p(Q, {
									keyName: "header.mockPages",
									defaultValue: "Mock Pages"
								}), p(f, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								})]
							}), t && p("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								children: p("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: i.map((e) => p(l, {
										preload: !1,
										to: e.to,
										params: { locale: r },
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => n(!1),
										children: e.label
									}, e.to))
								})
							})]
						})
					]
				})]
			}), m("div", {
				className: "flex items-center gap-4",
				children: [
					m("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [p("span", {
							className: "sr-only",
							children: p(Q, {
								keyName: "header.goToGithub",
								defaultValue: "Go to GitHub"
							})
						}), p("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: p("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					p(Ot, {}),
					p(Dt, {})
				]
			})]
		})
	});
}
var jt = {
	route: {
		oopsPageNotFound: "Oops! Page not found",
		returnToHome: "Return to Home",
		couldNotMeasureHydrationDuration: "Could not measure hydration duration:"
	},
	header: {
		home: "Home",
		methodology: "Methodology",
		mockPages: "Mock Pages",
		products: "Products",
		pricing: "Pricing",
		team: "Team",
		blog: "Blog",
		careers: "Careers",
		faq: "FAQ",
		contact: "Contact",
		settings: "Settings",
		goToGithub: "Go to GitHub"
	},
	footer: {
		resources: "Resources",
		contact: "Contact",
		github: "GitHub",
		methodology: "Methodology",
		contributing: "Contributing",
		builtWith: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
		anOpenSourceTestApplication: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
	},
	common: {
		readMore: "Read More",
		copy: "Copy",
		cancel: "Cancel",
		saveChanges: "Save Changes"
	},
	themeToggle: {
		themeModeAutoSystemClick: "Theme mode: auto (system). Click to switch to light mode.",
		themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
		themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
		themeAuto: "Theme: Auto",
		themeDark: "Theme: Dark",
		themeLight: "Theme: Light"
	},
	hero: {
		aTestApplicationDesignedTo: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
		viewResults: "View Results"
	},
	whyItMatters: {
		whyTheseMetricsMatter: "Why These Metrics Matter",
		bundleSize: "Bundle Size",
		theBundleIsTheData: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
		renderingHydration: "Rendering & Hydration",
		connectingALargeJson: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
		dynamicLoading: "Dynamic Loading",
		loadingAllTranslationsUpfront: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
	},
	understandingImpact: {
		understandingTheImpact: "Understanding the Impact",
		whyASingleLargeJson: "Why a single large JSON can hurt performance",
		manyI18nLibrariesStore: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
		manyI18nLibrariesStoreTranslations: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
		theJsonMustBeParsed: "The JSON must be parsed on every page load — blocking the main thread.",
		contextBasedArchitecturesCan: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
		contextBasedArchitecturesCanCause: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
		duringServerSideRenderingThe: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
		theTradeOffsOfDynamic: "The trade-offs of dynamic loading",
		splittingTranslationsIntoPerRoute: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
		waterfallRequests: "Waterfall requests:",
		theAppMustFirstLoad: "The app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
		flashOfUntranslatedContent: "Flash of untranslated content (FOUC):",
		flashOfUntranslatedContentFouc: "Flash of untranslated content (FOUC):",
		usersMayBrieflySeeTranslation: "Users may briefly see translation keys or a fallback language before the chunk arrives.",
		cacheInvalidation: "Cache invalidation:",
		updatingTranslationsRequiresCache: "Updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
		whatThisBenchmarkMeasures: "What this benchmark measures",
		thisTestAppProvidesA: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
	},
	resultsTable: {
		sampleResults: "Sample Results",
		bundleSize: "Bundle Size",
		lookupTime: "Lookup Time",
		lazyLoading: "Lazy Loading",
		library: "Library"
	},
	aboutHeader: {
		methodology: "Methodology",
		weDesignedThisBenchmarkTo: "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach.",
		aboutThisBenchmark: "About This Benchmark",
		thisIsAnOpenSource: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
	},
	aboutGrid: {
		testEnvironment: "Test Environment",
		allBenchmarksRunOn: "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.",
		applicationDesign: "Application Design",
		theBenchmarkAppHas10: "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.",
		measurementMethodology: "Measurement Methodology",
		weUseBrowserNativeApis: "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.",
		fairComparison: "Fair Comparison",
		eachI18nLibraryIsIntegrated: "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment.",
		whyThisExists: "Why This Exists",
		choosingAnI18nLibrary: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
		methodology: "Methodology",
		theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
	},
	whatWeMeasure: {
		bundleSizeImpact: "Bundle size impact",
		theAdditionalJavascriptBytes: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
		theAdditionalJavascriptBytesSent: "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.",
		renderingOverhead: "Rendering overhead",
		howMuchExtraTimeTheLibraryAdds: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
		howMuchExtraTimeThe: "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.",
		hydrationCost: "Hydration cost",
		duringSsrTranslationDataIsSerialized: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
		duringSsrTranslationDataIs: "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
		lazyLoadingEffectiveness: "Lazy loading effectiveness",
		whetherSplittingTranslationsByRoute: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
		localeSwitchSpeed: "Locale switch speed",
		howFastTheAppCan: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
		howFastTheAppCanSwitchFromOne: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
		whatWeMeasure: "What We Measure"
	},
	blogHeader: {
		blog: "Blog",
		insightsDeepDivesAnd: "Insights, deep dives, and updates from the i18n benchmarking community.",
		insightsTutorialsAndAnalysis: "Insights, tutorials, and analysis from the i18n community."
	},
	blogList: {
		comparingI18nLibrariesIn: "Comparing i18n Libraries in 2026: A Deep Dive",
		comparingI18nLibrariesIn2026: "Comparing i18n Libraries in 2026: A Deep Dive",
		march152026: "March 15, 2026",
		weTested12DifferentInternationalization: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
		howToReduceYourI18n: "How to Reduce Your i18n Bundle by 60%",
		march82026: "March 8, 2026",
		practicalStrategiesForOptimizingTranslation: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
		theStateOfInternationalizationIn: "The State of Internationalization in React",
		february282026: "February 28, 2026",
		anOverviewOfTheCurrent: "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.",
		anOverviewOfTheCurrentI18n: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
		migratingFromReactI18nextTo: "Migrating from react-i18next to Lingui",
		february152026: "February 15, 2026",
		aStepByStepGuide: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
		aStepByStepGuideOnMigrating: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
		serverComponentsAndI18nWhat: "Server Components and i18n: What Changes?",
		february12026: "February 1, 2026",
		reactServerComponentsIntroduceNew: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
		benchmarkMethodologyHowWe: "Benchmark Methodology: How We Test",
		benchmarkMethodologyHowWeTest: "Benchmark Methodology: How We Test",
		january202026: "January 20, 2026",
		aTransparentLookAtOur: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
		aTransparentLookAtOurBenchmarking: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
		readMore: "Read More →",
		benchmark: "Benchmark",
		tutorial: "Tutorial",
		analysis: "Analysis",
		meta: "Meta"
	},
	careersHeader: {
		careers: "Careers",
		joinOurMissionToMake: "Join our mission to make the web faster and more accessible for everyone, everywhere.",
		joinOurMission: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
	},
	careersBenefits: {
		whyJoinUs: "Why Join Us?",
		remoteFirst: "Remote-First",
		workFromAnywhereFully: "Work from anywhere. Fully distributed team across 6 time zones.",
		workFromAnywhere: "Work from anywhere in the world",
		openSource: "Open Source",
		allOurWorkIs: "All our work is open source. Build your public portfolio while making an impact.",
		impactful: "Impactful",
		yourWorkDirectlyHelps: "Your work directly helps developers build better, faster internationalized applications.",
		competitivePay: "Competitive pay",
		topOfMarketCompensation: "Top-of-market compensation",
		openSourceTime: "Open source time",
		percentTimeForOss: "20% time for OSS contributions"
	},
	openPositions: {
		openPositions: "Open Positions",
		seniorPerformanceEngineer: "Senior Performance Engineer",
		seniorFrontendEngineer: "Senior Frontend Engineer",
		fullTime: "Full-Time",
		remote: "Remote",
		leadBenchmarkDesignAnd: "Lead benchmark design and implementation. Deep knowledge of V8 internals, browser performance APIs, and statistical analysis required.",
		technicalWriter: "Technical Writer",
		partTime: "Part-Time",
		createAndMaintainDocumentation: "Create and maintain documentation, blog posts, and educational content about i18n performance best practices.",
		frontendDeveloper: "Frontend Developer",
		buildAndMaintainThe: "Build and maintain the benchmark dashboard, comparison tools, and interactive visualizations.",
		buildAndMaintainOur: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
		devOpsEngineer: "DevOps Engineer",
		designAndMaintainThe: "Design and maintain the CI/CD pipeline that runs benchmarks automatically on every library update.",
		applyNow: "Apply Now",
		engineering: "Engineering",
		backendEngineer: "Backend Engineer",
		designAndScaleOur: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
		documentation: "Documentation",
		createComprehensiveGuidesApi: "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
		devrelEngineer: "DevRel Engineer",
		sfRemote: "San Francisco / Remote",
		community: "Community",
		engageWithTheI18n: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
		qaEngineer: "QA Engineer",
		ensureTheAccuracyAnd: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation."
	},
	contactHeader: {
		contactUs: "Contact Us",
		haveQuestionsOrWantTo: "Have questions or want to contribute? We'd love to hear from you.",
		getInTouch: "Get in Touch",
		haveIdeasFoundABug: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us."
	},
	contactForm: {
		name: "Name",
		yourName: "Your name",
		email: "Email",
		emailPlaceholder: "you@example.com",
		subject: "Subject",
		topic: "Topic",
		bugReport: "Bug Report",
		newBenchmarkIdea: "New Benchmark Idea",
		methodologyQuestion: "Methodology Question",
		contribution: "Contribution",
		other: "Other",
		message: "Message",
		messagePlaceholder: "Describe your question or idea...",
		sendMessage: "Send Message",
		wellGetBackTo: "We'll get back to you within 48 hours."
	},
	faqHeader: {
		frequentlyAskedQuestions: "Frequently Asked Questions",
		everythingYouNeedTo: "Everything you need to know about the i18n Benchmark project.",
		everythingYouNeedToKnow: "Everything you need to know about i18n Benchmark."
	},
	faqList: {
		howAreTheBenchmarks: "How are the benchmarks run?",
		allBenchmarksAreRun: "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.",
		whatLibrariesAreCurrently: "What libraries are currently tested?",
		weCurrentlyBenchmarkReactI18next: "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.",
		canISubmitMyOwn: "Can I submit my own benchmarks?",
		canISubmitMyOwnBenchmarks: "Can I submit my own benchmarks?",
		absolutelyWeWelcomeCommunity: "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.",
		howOftenAreResults: "How often are results updated?",
		benchmarksRunAutomaticallyVia: "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.",
		areTheResultsStatistically: "Are the results statistically significant?",
		yesWeUseThe: "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes.",
		whatIsI18nBenchmark: "What is i18n Benchmark?",
		i18nBenchmarkIsAnOpenSource: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.",
		howAreBenchmarksConducted: "How are benchmarks conducted?",
		weRunStandardizedTestsInIsolated: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
		whichLibrariesAreCurrentlySupported: "Which libraries are currently supported?",
		weSupportReactI18nextReactIntl: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
		yesCommunityBenchmarkSubmissionsAre: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
		howOftenAreBenchmarksUpdated: "How often are benchmarks updated?",
		weReRunAllBenchmarksWeekly: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
		isTheDataReliable: "Is the data reliable?",
		weFollowRigorousStatisticalMethodologyIncluding: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
		doYouOfferConsultingServices: "Do you offer consulting services?",
		yesOurEnterprisePlanIncludesConsulting: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
		howCanIContribute: "How can I contribute?",
		thereAreManyWaysToContribute: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
	},
	pricingHeader: {
		pricing: "Pricing",
		transparentPricingForEvery: "Transparent pricing for every stage of your i18n journey."
	},
	pricingTiers: {
		freeTier: "Free Tier",
		free: "Free",
		publicBenchmarkDashboard: "Public benchmark dashboard",
		basicLibraryComparisons: "Basic library comparisons",
		communityForumAccess: "Community forum access",
		monthlyResultDigest: "Monthly result digest",
		getStarted: "Get Started",
		proTier: "Pro Tier",
		perMonth: "/month",
		allFreeFeatures: "All Free features",
		customBenchmarkConfigurations: "Custom benchmark configurations",
		privateResultsDashboard: "Private results dashboard",
		apiAccess1000Requests: "API access (1,000 requests/day)",
		slackIntegration: "Slack integration",
		subscribeToPro: "Subscribe to Pro",
		enterpriseTier: "Enterprise Tier",
		custom: "Custom",
		allProFeatures: "All Pro features",
		dedicatedBenchmarkInfrastructure: "Dedicated benchmark infrastructure",
		customLibraryIntegrations: "Custom library integrations",
		slaGuarantees: "SLA guarantees",
		prioritySupport: "Priority support",
		contactSales: "Contact Sales"
	},
	productsHeader: {
		products: "Products",
		toolsAndServicesTo: "Tools and services to help you optimize your internationalization strategy."
	},
	productsGrid: {
		benchmarkDashboard: "Benchmark Dashboard",
		interactiveChartsAndTables: "Interactive charts and tables comparing i18n libraries across bundle size, render time, and hydration cost.",
		bundleAnalyzer: "Bundle Analyzer",
		uploadYourBuildOutput: "Upload your build output and get a detailed breakdown of how much of your bundle is i18n overhead.",
		migrationAssistant: "Migration Assistant",
		automatedCodemodsAndGuides: "Automated codemods and guides for migrating between i18n libraries with minimal disruption.",
		performanceMonitor: "Performance Monitor",
		continuousPerformanceTrackingFor: "Continuous performance tracking for your i18n implementation. Get alerts when translation loading degrades.",
		learnMore: "Learn More"
	},
	settingsHeader: {
		settings: "Settings",
		manageYourAccountPreferences: "Manage your account preferences and configuration.",
		manageYourAccount: "Manage your account preferences and configuration."
	},
	profileSection: {
		profile: "Profile",
		displayName: "Display Name",
		email: "Email"
	},
	preferencesSection: {
		preferences: "Preferences",
		emailNotifications: "Email Notifications",
		receiveWeeklyBenchmark: "Receive weekly benchmark reports",
		receiveWeeklyBenchmarkReports: "Receive weekly benchmark reports",
		toggleNotifications: "Toggle notifications",
		darkMode: "Dark Mode",
		useDarkColorScheme: "Use dark color scheme",
		toggleDarkMode: "Toggle dark mode",
		defaultLanguage: "Default Language",
		englishEn: "English (en)",
		frenchFr: "French (fr)",
		germanDe: "German (de)",
		spanishEs: "Spanish (es)",
		japaneseJa: "Japanese (ja)",
		chineseSimplifiedZhCn: "Chinese Simplified (zh-CN)",
		arabicAr: "Arabic (ar)"
	},
	apiAccessSection: {
		apiAccess: "API Access",
		apiKey: "API Key",
		useThisKeyTo: "Use this key to access the benchmarking API programmatically.",
		copy: "Copy"
	},
	settingsFooter: {
		cancel: "Cancel",
		saveChanges: "Save Changes"
	},
	teamHeader: {
		ourTeam: "Our Team",
		meetThePeopleBehindI18n: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
	},
	teamGrid: {
		sarahChen: "Sarah Chen",
		founderLeadEngineer: "Founder & Lead Engineer",
		formerGoogleEngineerWith: "Former Google engineer with 10 years of experience building internationalization systems at scale.",
		formerGoogleEngineerWith10: "Former Google engineer with 10 years of experience building internationalization systems at scale.",
		marcusWeber: "Marcus Weber",
		performanceEngineer: "Performance Engineer",
		specializesInJavascriptPerformance: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
		specializesInJavascriptPerformanceOptimization: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
		aishaPatel: "Aisha Patel",
		developerAdvocate: "Developer Advocate",
		passionateAboutDeveloperExperience: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
		passionateAboutDeveloperExperienceAnd: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
		tomasRodriguez: "Tomás Rodríguez",
		fullStackDeveloper: "Full-Stack Developer",
		maintainsTheBenchmarkingInfrastructure: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
		maintainsTheBenchmarkingInfrastructureAnd: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
		yukiTanaka: "Yuki Tanaka",
		dataAnalyst: "Data Analyst",
		ensuresStatisticalRigorIn: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
		ensuresStatisticalRigorInAll: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
		elenaKowalski: "Elena Kowalski",
		communityManager: "Community Manager",
		managesCommunityContributions: "Manages community contributions, partnerships, and events. Background in open source governance.",
		managesCommunityContributionsPartnershipsAnd: "Manages community contributions, partnerships, and events. Background in open source governance."
	},
	mockBanner: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
}, Mt = ot().use(ze()).init({
	language: "en",
	apiUrl: void 0,
	apiKey: void 0,
	staticData: {
		en: jt,
		de: h,
		es: g,
		fr: _,
		it: v,
		ja: y,
		ko: b,
		pt: x,
		ru: S,
		zh: C
	}
}), Nt = {
	de: h,
	en: jt,
	es: g,
	fr: _,
	it: v,
	ja: y,
	ko: b,
	pt: x,
	ru: S,
	zh: C
};
function Pt({ children: e }) {
	return p(ft, {
		tolgee: Mt,
		options: { useSuspense: !1 },
		ssr: {
			language: "en",
			staticData: Nt
		},
		children: e
	});
}
function Ft() {
	return p(Pt, { children: p(At, {}) });
}
export { Ft as default };
