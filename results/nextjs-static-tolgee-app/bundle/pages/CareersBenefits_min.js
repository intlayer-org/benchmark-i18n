import e, { Suspense as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useRef as s, useState as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
import { useRouter as d } from "next/navigation";
import f from "../../../i18n/locales/de.json";
import p from "../../../i18n/locales/es.json";
import m from "../../../i18n/locales/fr.json";
import h from "../../../i18n/locales/it.json";
import g from "../../../i18n/locales/ja.json";
import _ from "../../../i18n/locales/ko.json";
import v from "../../../i18n/locales/pt.json";
import y from "../../../i18n/locales/ru.json";
import b from "../../../i18n/locales/zh.json";
var x = Object.defineProperty, S = Object.getOwnPropertySymbols, ee = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable, w = (e, t, n) => t in e ? x(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, te = (e, t) => {
	for (var n in t ||= {}) ee.call(t, n) && w(e, n, t[n]);
	if (S) for (var n of S(t)) C.call(t, n) && w(e, n, t[n]);
	return e;
}, T;
function ne(e, t) {
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
function E(e) {
	return !!(e && typeof e.then == "function");
}
function D(e, t) {
	return E(e) ? Promise.resolve(e).then(t) : t(e);
}
function O(e, t, n) {
	function r(n) {
		let r = t(n);
		throw e.emit(r), console.error(r), r;
	}
	try {
		let e = n();
		return E(e) ? e.catch(r) : e;
	} catch (e) {
		r(e);
	}
}
function k(e) {
	let t = (Array.isArray(e) ? e : [e]).map((e) => `'${e}'`), n = t.slice(-2).join(" or ");
	return `Tolgee: You need to specify ${[...t.slice(0, -2), n].join(", ")} option`;
}
function re(e) {
	return typeof e == "object" && !Array.isArray(e) && e !== null;
}
function ie(e) {
	if (typeof e == "string") return [e];
	if (Array.isArray(e)) return e;
}
function A(e) {
	return ie(e) || [];
}
function ae(e, t) {
	return re(t) ? A(t?.[e]) : A(t);
}
function j(e) {
	return Array.from(new Set(e));
}
function M(e) {
	return e && e.replace(/\/+$/, "");
}
function oe(e) {
	if (typeof e == "string") return e;
	if (typeof e?.message == "string") return e.message;
}
var se = (e, t) => fetch(e, t);
function ce(e) {
	return Object.fromEntries(new Headers(e).entries());
}
var le = (e = se) => (t, n) => {
	let r = ce(n?.headers);
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
function ue(e) {
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
function de() {
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
		onUpdate: ue(t),
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
var fe = class extends Error {
	constructor(e, t, n = !1) {
		let { language: r, namespace: i } = e;
		super(`Tolgee: Failed to fetch record for "${r}"${i && ` and "${i}"`}`), this.cause = t, this.isDev = n, this.name = "RecordFetchError", this.language = r, this.namespace = i;
	}
}, pe = class extends Error {
	constructor(e, t) {
		super(e), this.cause = t, this.name = "LanguageDetectorError";
	}
}, P = class extends Error {
	constructor(e, t) {
		super(e), this.cause = t, this.name = "LanguageStorageError";
	}
}, F = (e) => {
	let t = /* @__PURE__ */ new Map();
	return Object.entries(e).forEach(([e, n]) => {
		if (n != null) {
			if (typeof n == "object") {
				F(n).forEach((n, r) => {
					t.set(e + "." + r, n);
				});
				return;
			}
			t.set(e, n);
		}
	}), t;
}, I = (e) => Object.fromEntries(F(e).entries()), L = (e) => {
	let [t, ...n] = e.split(":");
	return {
		language: t,
		namespace: n.join(":") || ""
	};
}, R = ({ language: e, namespace: t }) => t ? `${e}:${t}` : e;
function me(e, t, n, r, i, a, o) {
	let s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = {}, u = 0;
	function d(t, n, r) {
		let i = R(t);
		c.set(i, {
			data: I(n),
			version: r
		}), e.onCacheChange.emit(L(i));
	}
	async function f(n) {
		function r(t) {
			let r = new fe(n, t);
			throw e.onError.emit(r), console.error(r), r;
		}
		let i = t(n);
		if (E(i)) {
			let e = await i.catch(r);
			if (e !== void 0) return e;
		}
		let a = l[R(n)];
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
			let r = new fe(t, n, !0);
			e.onError.emit(r), console.warn(r);
		}
		return i ||= await f(t), i;
	}
	let m = Object.freeze({
		addStaticData(e) {
			if (Array.isArray(e)) for (let t of e) {
				let e = R(t), n = c.get(e);
				(!n || n.version === 0) && d(t, I(t.data), 0);
			}
			else e && (l = Object.assign(Object.assign({}, l), e), Object.entries(e).forEach(([e, t]) => {
				if (typeof t != "function") {
					let n = L(e), r = c.get(e);
					(!r || r.version === 0) && d(n, I(t), 0);
				}
			}));
		},
		invalidate() {
			s.clear(), u += 1;
		},
		addRecord(e, t) {
			d(e, I(t), u);
		},
		exists(e, t = !1) {
			let n = c.get(R(e));
			return n && t ? n.version === u : !!n;
		},
		getRecord(e) {
			let t = r(e), n = R(t), i = c.get(n);
			if (i) return Object.assign(Object.assign({}, t), {
				cacheKey: n,
				data: i.data
			});
		},
		getAllRecords() {
			return Array.from(c.entries()).map(([e]) => m.getRecord(L(e)));
		},
		getTranslation(e, t) {
			return c.get(R(e))?.data[t];
		},
		getTranslationNs(e, t, n) {
			for (let r of e) for (let e of t) if (c.get(R({
				language: e,
				namespace: r
			}))?.data[n] != null) return [r];
			return j(e);
		},
		getTranslationFallback(e, t, n) {
			for (let r of e) for (let e of t) {
				let t = c.get(R({
					language: e,
					namespace: r
				}))?.data[n];
				if (t != null) return t;
			}
		},
		changeTranslation(t, n, r) {
			let i = c.get(R(t))?.data;
			i && (i[n] = r, e.onCacheChange.emit(Object.assign(Object.assign({}, t), { key: n })));
		},
		isFetching(e) {
			if (i()) return !0;
			if (e === void 0) return s.size > 0;
			let t = A(e);
			return !!Array.from(s.keys()).find((e) => t.includes(L(e).namespace));
		},
		isLoading(e, t) {
			let n = A(t);
			return i() ? !0 : !!Array.from(s.keys()).find((t) => {
				let r = L(t);
				return (!n.length || n.includes(r.namespace)) && !m.exists({
					namespace: r.namespace,
					language: e
				});
			});
		},
		async loadRecords(e, t) {
			let n = e.map((e) => {
				let n = r(e), i = R(n);
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
				e.promise && (e.data = I(c[0] ?? {}), c.shift());
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
function he(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
var ge = {
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
}, z = "invalid", _e = {
	observerOptions: ge,
	observerType: "invisible",
	onFormatError: z,
	apiUrl: "https://app.tolgee.io",
	autoLoadRequiredData: !0,
	fetch: le(),
	onTranslationMissing: ({ key: e }) => e
}, B = (...e) => {
	let t = {};
	return e.forEach((e) => {
		t = Object.assign(Object.assign(Object.assign({}, t), e), { observerOptions: Object.assign(Object.assign({}, t.observerOptions), e?.observerOptions) });
	}), t;
};
function ve(e, t) {
	let n = B(_e, t?.initialOptions, e);
	return n.apiUrl = M(n.apiUrl), e?.fetch && (n.fetch = le(e.fetch)), {
		initialOptions: n,
		activeNamespaces: t?.activeNamespaces || /* @__PURE__ */ new Map(),
		language: t?.language,
		pendingLanguage: t?.language,
		isInitialLoading: !1,
		isRunning: !1
	};
}
function ye(e, t, n, r, i, a, o, s) {
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
		return O(s.onError, (e) => new P("Tolgee: Failed to load language", e), () => l.languageStorage?.getLanguage(p()));
	}
	function ee() {
		if (!l.languageDetector) return;
		let e = n();
		return O(s.onError, (e) => new pe("Tolgee: Failed to detect language", e), () => l.languageDetector?.getLanguage(Object.assign({ availableLanguages: e }, p())));
	}
	function C(e) {
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
			addBackend: C,
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
			return D(S(), (t) => (!e || e.includes(t)) && t ? t : ee());
		},
		setStoredLanguage(e) {
			return O(s.onError, (e) => new P("Tolgee: Failed to store language", e), () => l.languageStorage?.setLanguage(e, p()));
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
			var { formatEnabled: r } = n, i = he(n, ["formatEnabled"]);
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
				let n = oe(e) || z, r = t().onFormatError, a = typeof r;
				h = a === "string" ? r : a === "function" ? r(n, i) : z, h = v(h);
			}
			return h;
		}
	});
	return T;
}
var V = (e, t, n) => {
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
function be(e, t, n) {
	let r = ve(), i, a = Object.freeze({
		init(e) {
			r = ve(e, r);
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
			A(e).forEach((e) => {
				let t = r.activeNamespaces.get(e);
				t === void 0 ? r.activeNamespaces.set(e, 1) : r.activeNamespaces.set(e, t + 1);
			});
		},
		removeActiveNs(e) {
			A(e).forEach((e) => {
				let t = r.activeNamespaces.get(e);
				t !== void 0 && t > 1 ? r.activeNamespaces.set(e, t - 1) : r.activeNamespaces.delete(e);
			});
		},
		getRequiredNamespaces() {
			return j([
				a.getDefaultNs(),
				...r.initialOptions.ns || [],
				...A(r.initialOptions.fallbackNs),
				...r.activeNamespaces.keys()
			]);
		},
		getFallbackLangs(e) {
			let t = e || a.getLanguage();
			return t ? j([t, ...ae(t, r.initialOptions.fallbackLanguage)]) : [];
		},
		getFallbackNs() {
			return A(r.initialOptions.fallbackNs);
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
				let e = Object.keys(r.initialOptions.staticData).map((e) => L(e).language);
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
			i = e ? Object.assign(Object.assign({}, e), { apiUrl: M(e.apiUrl) }) : void 0;
		}
	});
	return a;
}
function xe(e) {
	var { ns: t, noWrap: n, orEmpty: r, params: i, language: a } = e, o = he(e, [
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
var H = (e, ...t) => {
	let n = {}, r;
	return typeof e == "object" && e ? n = e : (n.key = e, typeof t[0] == "string" ? (n.defaultValue = t[0], r = t[1]) : typeof t[0] == "object" && (r = t[0])), r && (n = Object.assign(Object.assign({}, xe(r)), n)), n;
};
function Se({ options: e }) {
	let t = de(), n = V(!1, () => o.isFetching(), t.onFetchingChange.emit), r = V(!1, () => S.isLoading(), t.onLoadingChange.emit), i = be(t.onLanguageChange, t.onPendingLanguageChange, t.onRunningChange), a = ye(i.getLanguage, i.getInitialOptions, i.getAvailableLanguages, u, _, v, f, t), o = me(t, a.getBackendRecord, a.getBackendDevRecord, i.withDefaultNs, i.isInitialLoading, n, r);
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
		return j([...A(l(e)), ...c()]);
	}
	function d(e) {
		return j([...A(e ?? l()), ...i.getRequiredNamespaces()]);
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
			if (!e) throw Error(k("availableLanguages"));
			t = e;
		}
		if (Array.isArray(e.namespaces)) n = e.namespaces;
		else if (e.namespaces === "all") {
			let e = S.getAvailableNs();
			if (!e) throw Error(k("availableNs"));
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
		let e = D(b(), () => {
			let e = h();
			if (e.length && i.getInitialOptions().autoLoadRequiredData) return o.loadRecords(e, { useCache: !0 });
		});
		if (E(e)) return i.setInitialLoading(!0), n.notify(), r.notify(), Promise.resolve(e).then(() => {
			i.setInitialLoading(!1), n.notify(), r.notify(), t.onInitialLoaded.emit();
		});
		t.onInitialLoaded.emit();
	}
	function b() {
		if (!i.getLanguage()) return D(a.getInitialLanguage(), (e) => {
			let t = e || i.getInitialOptions().defaultLanguage;
			t && i.setLanguage(t);
		});
	}
	function x() {
		if ((a.getLanguageDetector() || a.getLanguageStorage()) && !i.getAvailableLanguages()) throw Error(k("availableLanguages"));
		if (!i.getLanguage() && !i.getInitialOptions().defaultLanguage) throw Error(k(["defaultLanguage", "language"]));
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
			let t = H(...e), n = v(t);
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
function Ce(e) {
	let t = Se({ options: e });
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
var we = () => {
	let e = {
		plugins: [],
		options: {}
	}, t = Object.freeze({
		use(n) {
			return e.plugins.push(n), t;
		},
		updateDefaults(n) {
			return e.options = B(e.options, n), t;
		},
		init(t) {
			let n = Ce(B(e.options, t));
			return e.plugins.forEach(n.addPlugin), n;
		}
	});
	return t;
}, U = 0, W = 1, Te = 2, Ee = class extends Error {
	constructor(e, t, n) {
		let r, i = "";
		e === U ? r = "Empty parameter" : e === W ? (r = "Unexpected character", i = "Did you forget to use FormatIcu to render ICU message syntax?") : r = "Unexpected end", super(`Tolgee parser: ${r} at ${t} in "${n}"` + (i ? "\n" + i : "")), this.code = e, this.index = t;
	}
};
function G(e) {
	return /\s/.test(e);
}
var K = 0, q = 1, J = 2, Y = 3, X = 4, De = new Set([
	J,
	q,
	K
]), Z = "'", Oe = new Set([
	"{",
	"}",
	Z
]), ke = (e) => /[0-9a-zA-Z_]/.test(e);
function Ae(e) {
	let t = K, n = "", r = "", i = "", a = [], o = [], s = 0;
	function c(t) {
		throw new Ee(t, s, e);
	}
	let l = () => {
		a.push(n), n = "";
	}, u = () => {
		ke(i) || c(W), r += i;
	}, d = () => {
		r === "" && c(U), o.push(r), r = "";
	};
	for (s = 0; s < e.length; s++) switch (i = e[s], t) {
		case K:
			i === Z ? (n += i, t = q) : i === "{" ? (l(), t = Y) : (n += i, t = K);
			break;
		case q:
			Oe.has(i) ? (n = n.slice(0, -1) + i, t = J) : (n += i, t = K);
			break;
		case J:
			i === Z ? t = K : (n += i, t = J);
			break;
		case Y:
			i === "}" ? (d(), t = K) : G(i) ? r !== "" && (d(), t = X) : (u(), t = Y);
			break;
		case X: i == "}" ? t = K : G(i) ? t = X : c(W);
	}
	return De.has(t) || c(Te), l(), [a, o];
}
function je(e, t) {
	let [n, r] = Ae(e), i = [n[0]];
	for (let a = 1; a < n.length; a++) {
		let o = t?.[r[a - 1]];
		if (o === void 0) throw Error(`Missing parameter "${r[a - 1]}" in "${e}"`);
		i.push(String(o)), i.push(n[a]);
	}
	return i.join("");
}
function Me() {
	return { format: ({ translation: e, params: t }) => je(e, t) };
}
var Ne = () => (e, t) => (t.setFinalFormatter(Me()), e), Pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Fe = {};
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
})(typeof window < "u" ? window : Pe);
var Ie = ne({
	__proto__: null,
	default: Fe
}, [Fe]);
(T = console.assert) == null || T.call(console, Ie), RegExp(`([${["‌", "‍"].join("")}]{9})+`, "g");
function Le(e, t) {
	let n = (n) => {
		e.includes(n.data?.type) && t(n.data?.data);
	};
	return window.addEventListener("message", n, !1), { unsubscribe() {
		window.removeEventListener("message", n);
	} };
}
function Re({ message: e, recievingMessage: t, data: n, attempts: r = 1, timeout: i = 300 }) {
	let a = !1, o = () => new Promise((r, a) => {
		let o = Le(t, c);
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
function ze() {
	let e;
	async function t(t) {
		e?.();
		let { cancel: n, promise: r } = Re({
			message: "TOLGEE_READY",
			recievingMessage: ["TOLGEE_PLUGIN_READY", "TOLGEE_PLUGIN_UPDATED"],
			data: t,
			attempts: 4
		});
		return e = n, r;
	}
	return { update: t };
}
var Be = "tolgee-in-context-tools.umd.min.js", Ve = "@tolgee/in-context-tools", He = "InContextTools", Ue = "https://cdn.jsdelivr.net/npm";
function We(e) {
	return new Promise((t, n) => {
		let r = document.createElement("script");
		r.src = e, r.addEventListener("load", () => t()), r.addEventListener("error", (e) => n(e.error)), document.head.appendChild(r);
	});
}
var Ge = null;
function Ke(e) {
	return Ge ||= We(`${Ue}/@tolgee/web@${e}/dist/${Be}`).then(() => window[Ve][He]), Ge;
}
var qe = "__tolgee_apiKey", Je = "__tolgee_apiUrl", Ye = "__tolgee_branch";
function Xe() {
	let e = sessionStorage.getItem(qe) || void 0, t = sessionStorage.getItem(Je) || void 0, n = sessionStorage.getItem(Ye) || void 0;
	if (!(!e || !t)) return te({
		apiKey: e,
		apiUrl: t
	}, n === void 0 ? {} : { branch: n });
}
function Ze() {
	sessionStorage.removeItem(qe), sessionStorage.removeItem(Je), sessionStorage.removeItem(Ye);
}
function Qe(e) {
	document.readyState === "loading" ? document.addEventListener && document.addEventListener("DOMContentLoaded", e) : Promise.resolve().then(() => {
		e();
	});
}
var $e = () => (e) => e;
(() => {
	if (typeof window > "u") return !1;
	try {
		return typeof sessionStorage < "u" && sessionStorage;
	} catch (e) {
		return console.error("sessionStorage not available", e), !1;
	}
})() && ($e = () => (e) => {
	let t = ze(), n = () => ({
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
		e && Qe(() => {
			t.update(n()).catch(Ze);
		});
	}), Xe() && (async () => {
		let e = await Ke("prerelease");
		return (t) => {
			let n = Xe();
			return t.addPlugin(e({ credentials: n })), t;
		};
	})().then((t) => {
		e.addPlugin(t);
	}).catch((e) => {
		console.error("Tolgee: Failed to load in-context tools"), console.error(e);
	}), e;
});
function et() {
	return we().use($e());
}
function tt(e) {
	return Object.assign(Object.assign({}, e), { t(...t) {
		let n = H(...t);
		return e.t(Object.assign(Object.assign({}, n), { noWrap: !0 }));
	} });
}
function nt(e, t, n, r = !0) {
	let [a] = c(() => tt(e)), [s, l] = c(r);
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
var rt = { useSuspense: !1 }, it, at = () => (it ||= e.createContext(void 0), it), Q = void 0, ot = ({ tolgee: n, options: r, children: a, fallback: o, ssr: s }) => {
	i(() => {
		Q?.run !== n.run && (Q && Q.stop(), Q = n, n.run().catch((e) => {
			console.error(e);
		}).finally(() => {
			p(!1);
		}));
	}, [n]);
	let l = n, { language: u, staticData: d } = typeof s == "object" ? s : {};
	l = nt(n, u, d, !!s);
	let [f, p] = c(!l.isLoaded()), m = Object.assign(Object.assign({}, rt), r), h = at();
	return m.useSuspense ? e.createElement(h.Provider, { value: {
		tolgee: l,
		options: m
	} }, f ? o : e.createElement(t, { fallback: o || null }, a)) : e.createElement(h.Provider, { value: {
		tolgee: l,
		options: m
	} }, f ? o : a);
}, st;
function ct() {
	return st;
}
var lt = () => {
	let e = r(at()) || ct();
	if (!e) throw Error("Couldn't find tolgee instance, did you forgot to use `TolgeeProvider`?");
	return e;
}, ut = () => {
	let [e, t] = c(0);
	return {
		instance: e,
		rerender: n(() => {
			t((e) => e + 1);
		}, [t])
	};
}, dt = (e, t) => {
	let { tolgee: r, options: a } = lt(), o = ie(e), c = A(o).join(":"), l = Object.assign(Object.assign({}, a), t), { rerender: u, instance: d } = ut(), f = s([]);
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
}, ft = (e, t) => {
	let { t: r, isLoading: i } = dt(e, t);
	return {
		t: n((...e) => r(H(...e)), [r]),
		isLoading: i
	};
};
function pt() {
	let { t: e, ...t } = ft();
	return {
		...t,
		t: (t, n, r) => e(t, n, r)
	};
}
function mt() {
	let { t: e } = pt();
	return l("div", {
		className: "mb-12 grid gap-4 md:grid-cols-3",
		children: [
			{
				label: e("careersBenefits.remoteFirst", "Remote-first"),
				value: e("careersBenefits.workFromAnywhere", "Work from anywhere in the world")
			},
			{
				label: e("careersBenefits.competitivePay", "Competitive pay"),
				value: e("careersBenefits.topOfMarketCompensation", "Top-of-market compensation")
			},
			{
				label: e("careersBenefits.openSourceTime", "Open source time"),
				value: e("careersBenefits.percentTimeForOss", "20% time for OSS contributions")
			}
		].map((e) => u("div", {
			className: "rounded-lg border border-border bg-card p-4 text-center",
			children: [l("p", {
				className: "text-sm font-semibold text-foreground",
				children: e.label
			}), l("p", {
				className: "text-xs text-muted-foreground",
				children: e.value
			})]
		}, e.label))
	});
}
var ht = {
	de: f,
	en: {
		metadata: {
			title: "i18n Benchmark",
			description: "An open-source benchmark for measuring the real-world impact of internationalization libraries."
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
		faq: {
			"faqHeader.frequentlyAskedQuestions": "Frequently Asked Questions",
			"faqHeader.everythingYouNeedTo": "Everything you need to know about the i18n Benchmark project.",
			"faqList.howAreTheBenchmarks": "How are the benchmarks run?",
			"faqList.allBenchmarksAreRun": "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.",
			"faqList.whatLibrariesAreCurrently": "What libraries are currently tested?",
			"faqList.weCurrentlyBenchmarkReactI18next": "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.",
			"faqList.canIContributeA": "Can I contribute a new library integration?",
			"faqList.absolutelyWeWelcomeCommunity": "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.",
			"faqList.howOftenAreResults": "How often are results updated?",
			"faqList.benchmarksRunAutomaticallyVia": "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.",
			"faqList.areTheResultsStatistically": "Are the results statistically significant?",
			"faqList.yesWeUseThe": "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes."
		},
		header: {
			brandShort: "i18n Bench",
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
		contactForm: {
			bugReport: "Bug Report",
			contribution: "Contribution",
			email: "Email",
			emailPlaceholder: "you@example.com",
			message: "Message",
			messagePlaceholder: "Your message...",
			methodologyQuestion: "Methodology Question",
			name: "Name",
			newBenchmarkIdea: "New Benchmark Idea",
			other: "Other",
			sendMessage: "Send Message",
			subject: "Subject",
			topic: "Topic",
			wellGetBackTo: "We'll get back to you within 48 hours.",
			yourName: "Your name"
		},
		understandingImpact: {
			cacheInvalidation: "Cache invalidation:",
			contextBasedArchitecturesCan: "Context-based architectures can cause the entire app to re-render when the language changes. For large apps with thousands of components, this can lead to noticeable lag during locale switches.",
			contextBasedArchitecturesCanCause: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
			duringServerSideRenderingThe: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
			flashOfUntranslatedContent: "Flash of Untranslated Content (FOUC)",
			flashOfUntranslatedContentFouc: "Flash of untranslated content (FOUC):",
			manyI18nLibrariesStore: "Many i18n libraries store translations in large JSON files that are loaded upfront. This can significantly increase the \"Time to Interactive\" as the browser must download and parse these files before the app can be used.",
			manyI18nLibrariesStoreTranslations: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
			splittingTranslationsIntoPerRoute: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
			theAppMustFirstLoad: "The app must first load the core library (e.g., i18next) which adds to the initial bundle size. Even \"lightweight\" libraries can add 10-20KB of minified JS.",
			theJsonMustBeParsed: "The JSON must be parsed on every page load — blocking the main thread.",
			theTradeOffsOfDynamic: "The trade-offs of dynamic loading",
			thisTestAppProvidesA: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
			understandingTheImpact: "Understanding the Impact",
			updatingTranslationsRequiresCache: "Updating translations often requires a full rebuild or clearing the CDN cache, which can delay the roll-out of critical copy changes.",
			usersMayBrieflySeeTranslation: "Users may briefly see translation keys or English text while the library and translation files are being loaded.",
			waterfallRequests: "Waterfall requests:",
			whatThisBenchmarkMeasures: "What this benchmark measures",
			whyASingleLargeJson: "Why a single large JSON can hurt performance"
		},
		settings: {
			"settingsHeader.settings": "Settings",
			"settingsHeader.manageYourAccountPreferences": "Manage your account preferences and configuration.",
			"profileSection.profile": "Profile",
			"profileSection.displayName": "Display Name",
			"profileSection.email": "Email",
			"preferencesSection.preferences": "Preferences",
			"preferencesSection.emailNotifications": "Email Notifications",
			"preferencesSection.receiveWeeklyBenchmarkReports": "Receive weekly benchmark reports",
			"preferencesSection.darkMode": "Dark Mode",
			"preferencesSection.useDarkColorScheme": "Use dark color scheme",
			"preferencesSection.defaultLanguage": "Default Language",
			"apiAccessSection.apiAccess": "API Access",
			"apiAccessSection.apiKey": "API Key",
			"apiAccessSection.useThisKeyTo": "Use this key to access the benchmarking API programmatically.",
			"apiAccessSection.copy": "Copy",
			"settingsFooter.cancel": "Cancel",
			"settingsFooter.saveChanges": "Save Changes"
		},
		faqList: {
			absolutelyWeWelcomeCommunity: "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.",
			allBenchmarksAreRun: "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.",
			areTheResultsStatistically: "Are the results statistically significant?",
			benchmarksRunAutomaticallyVia: "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.",
			canIContributeA: "Can I contribute a new library integration?",
			canISubmitMyOwnBenchmarks: "Can I submit my own benchmarks?",
			doYouOfferConsultingServices: "Do you offer consulting services?",
			howAreBenchmarksConducted: "How are benchmarks conducted?",
			howAreTheBenchmarks: "How are the benchmarks run?",
			howCanIContribute: "How can I contribute?",
			howOftenAreBenchmarksUpdated: "How often are benchmarks updated?",
			howOftenAreResults: "How often are results updated?",
			i18nBenchmarkIsAnOpenSource: "i18n Benchmark is an open-source project dedicated to measuring the real-world performance impact of internationalization libraries.",
			isTheDataReliable: "Is the data reliable?",
			thereAreManyWaysToContribute: "There are many ways to contribute, from submitting new benchmarks to improving our methodology documentation.",
			weCurrentlyBenchmarkReactI18next: "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.",
			weFollowRigorousStatisticalMethodologyIncluding: "We follow rigorous statistical methodology, including outlier detection and multiple test runs to ensure accuracy.",
			weReRunAllBenchmarksWeekly: "We re-run all benchmarks weekly against the latest versions of each library.",
			weRunStandardizedTestsInIsolated: "We run standardized tests in isolated environments, measuring bundle size, render time, and memory usage across dozens of libraries.",
			weSupportReactI18nextReactIntl: "We support react-i18next, react-intl, Lingui, Tolgee, and several other popular React i18n solutions.",
			whatIsI18nBenchmark: "What is i18n Benchmark?",
			whatLibrariesAreCurrently: "What libraries are currently tested?",
			whichLibrariesAreCurrentlySupported: "Which libraries are currently supported?",
			yesCommunityBenchmarkSubmissionsAre: "Yes! Community benchmark submissions are encouraged and reviewed by our core team.",
			yesOurEnterprisePlanIncludesConsulting: "Yes, our Enterprise plan includes consulting services for optimizing your app's i18n performance.",
			yesWeUseThe: "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes."
		},
		preferencesSection: {
			arabicAr: "Arabic (ar)",
			chineseSimplifiedZhCn: "Chinese (Simplified, zh-CN)",
			darkMode: "Dark Mode",
			defaultLanguage: "Default Language",
			emailNotifications: "Email Notifications",
			englishEn: "English (en)",
			frenchFr: "French (fr)",
			germanDe: "German (de)",
			japaneseJa: "Japanese (ja)",
			preferences: "Preferences",
			receiveWeeklyBenchmark: "Receive weekly benchmark reports",
			receiveWeeklyBenchmarkReports: "Receive weekly benchmark reports",
			spanishEs: "Spanish (es)",
			toggleDarkMode: "Toggle dark mode",
			toggleNotifications: "Toggle Notifications",
			useDarkColorScheme: "Use dark color scheme"
		},
		productsHeader: {
			products: "Products",
			toolsAndServicesTo: "Tools and services to help you optimize your internationalization strategy."
		},
		blogList: {
			aStepByStepGuide: "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
			aStepByStepGuideOnMigrating: "A step-by-step guide on migrating from legacy i18n solutions to modern, high-performance libraries.",
			aTransparentLookAtOur: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
			aTransparentLookAtOurBenchmarking: "A transparent look at our benchmarking process, from hardware specs to measurement techniques.",
			anOverviewOfTheCurrent: "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.",
			anOverviewOfTheCurrentI18n: "An overview of the current i18n landscape and how different libraries stack up in 2026.",
			analysis: "Analysis",
			benchmark: "Benchmark",
			benchmarkMethodologyHowWe: "Benchmark Methodology: How We Test",
			benchmarkMethodologyHowWeTest: "Benchmark Methodology: How We Test",
			comparingI18nLibrariesIn: "Comparing i18n Libraries in 2026: A Deep Dive",
			february12026: "February 1, 2026",
			february152026: "February 15, 2026",
			february282026: "February 28, 2026",
			howToReduceYourI18n: "How to Reduce Your i18n Bundle by 60%",
			i18nBenchmark2026Results: "i18n Benchmark 2026 Results",
			january202026: "January 20, 2026",
			march152026: "March 15, 2026",
			march82026: "March 8, 2026",
			meta: "Meta",
			migratingFromReactI18nextTo: "Migrating from react-i18next to Lingui",
			practicalStrategiesForOptimizingTranslation: "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.",
			reactServerComponentsIntroduceNew: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
			readMore: "Read More →",
			serverComponentsAndI18nWhat: "Server Components and i18n: What Changes?",
			theStateOfInternationalizationIn: "The State of Internationalization in 2026",
			tutorial: "Tutorial",
			weTested12DifferentInternationalization: "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts."
		},
		faqHeader: {
			everythingYouNeedToKnow: "Everything you need to know about i18n Benchmark.",
			frequentlyAskedQuestions: "Frequently Asked Questions"
		},
		footer: {
			contactEmail: "contact@intlayer.org",
			resources: "Resources",
			contact: "Contact",
			github: "GitHub",
			methodology: "Methodology",
			contributing: "Contributing",
			builtWith: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
			anOpenSourceTestApplication: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
		},
		openPositions: {
			applyNow: "Apply Now",
			backendEngineer: "Backend Engineer",
			buildAndMaintainOur: "Build and maintain our benchmarking suite and core application infrastructure.",
			buildAndMaintainThe: "Build and maintain the benchmark dashboard, comparison tools, and interactive visualizations.",
			community: "Community",
			createAndMaintainDocumentation: "Create and maintain documentation, blog posts, and educational content about i18n performance best practices.",
			createComprehensiveGuidesApi: "Create comprehensive guides, API references, and tutorials for the community.",
			designAndMaintainThe: "Design and maintain the CI/CD pipeline that runs benchmarks automatically on every library update.",
			designAndScaleOur: "Design and scale our data ingestion pipelines and statistical analysis engines.",
			devOpsEngineer: "DevOps Engineer",
			devrelEngineer: "DevRel Engineer",
			documentation: "Documentation",
			engageWithTheI18n: "Engage with the i18n community, write blog posts, and speak at conferences.",
			engineering: "Engineering",
			ensureTheAccuracyAnd: "Ensure the accuracy and reliability of our benchmarks through rigorous testing.",
			frontendDeveloper: "Frontend Developer",
			fullTime: "Full-time",
			leadBenchmarkDesignAnd: "Lead benchmark design and implementation. Deep knowledge of V8 internals, browser performance APIs, and statistical analysis required.",
			openPositions: "Open Positions",
			partTime: "Part-time",
			qaEngineer: "QA Engineer",
			remote: "Remote",
			seniorFrontendEngineer: "Senior Frontend Engineer",
			seniorPerformanceEngineer: "Senior Performance Engineer",
			sfRemote: "San Francisco / Remote",
			technicalWriter: "Technical Writer"
		},
		careersHeader: {
			careers: "Careers",
			joinOurMission: "Join our mission to make internationalization fast, easy, and performant for everyone.",
			joinOurMissionToMake: "Join our mission to make the web faster and more accessible for everyone, everywhere."
		},
		teamGrid: {
			aishaPatel: "Aisha Patel",
			communityManager: "Community Manager",
			dataAnalyst: "Data Analyst",
			developerAdvocate: "Developer Advocate",
			elenaKowalski: "Elena Kowalski",
			ensuresStatisticalRigorIn: "Ensures statistical rigor in our data collection and analysis.",
			ensuresStatisticalRigorInAll: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
			formerGoogleEngineerWith: "Former Google engineer with a passion for web performance and open source.",
			formerGoogleEngineerWith10: "Former Google engineer with 10 years of experience building internationalization systems at scale.",
			founderLeadEngineer: "Founder & Lead Engineer",
			fullStackDeveloper: "Full-Stack Developer",
			maintainsTheBenchmarkingInfrastructure: "Maintains the benchmarking infrastructure and CI/CD pipelines.",
			maintainsTheBenchmarkingInfrastructureAnd: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
			managesCommunityContributions: "Manages community contributions and open source outreach.",
			managesCommunityContributionsPartnershipsAnd: "Manages community contributions, partnerships, and events. Background in open source governance.",
			marcusWeber: "Marcus Weber",
			passionateAboutDeveloperExperience: "Passionate about developer experience and building intuitive APIs.",
			passionateAboutDeveloperExperienceAnd: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
			performanceEngineer: "Performance Engineer",
			sarahChen: "Sarah Chen",
			specializesInJavascriptPerformance: "Specializes in JavaScript performance optimization and React internals.",
			specializesInJavascriptPerformanceOptimization: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
			tomasRodriguez: "Tomás Rodríguez",
			yukiTanaka: "Yuki Tanaka"
		},
		common: {
			cancel: "Cancel",
			copy: "Copy",
			"footer.anOpenSourceTestApplication": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
			"footer.builtWith": "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
			"footer.contact": "Contact",
			"footer.contributing": "Contributing",
			"footer.github": "GitHub",
			"footer.methodology": "Methodology",
			"footer.resources": "Resources",
			"header.blog": "Blog",
			"header.careers": "Careers",
			"header.contact": "Contact",
			"header.faq": "FAQ",
			"header.goToGithub": "Go to GitHub",
			"header.home": "Home",
			"header.methodology": "Methodology",
			"header.mockPages": "Mock Pages",
			"header.pricing": "Pricing",
			"header.products": "Products",
			"header.settings": "Settings",
			"header.team": "Team",
			mockBanner: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
			readMore: "Read More",
			saveChanges: "Save Changes",
			"themeToggle.themeAuto": "Theme: Auto",
			"themeToggle.themeDark": "Theme: Dark",
			"themeToggle.themeLight": "Theme: Light",
			"themeToggle.themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
			"themeToggle.themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
			"themeToggle.themeModeLightClick": "Theme mode: light. Click to switch to dark mode."
		},
		cancel: "Cancel",
		copy: "Copy",
		"footer.anOpenSourceTestApplication": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
		"footer.builtWith": "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
		"footer.contact": "Contact",
		"footer.contributing": "Contributing",
		"footer.github": "GitHub",
		"footer.methodology": "Methodology",
		"footer.resources": "Resources",
		"header.blog": "Blog",
		"header.careers": "Careers",
		"header.contact": "Contact",
		"header.faq": "FAQ",
		"header.goToGithub": "Go to GitHub",
		"header.home": "Home",
		"header.methodology": "Methodology",
		"header.mockPages": "Mock Pages",
		"header.pricing": "Pricing",
		"header.products": "Products",
		"header.settings": "Settings",
		"header.team": "Team",
		mockBanner: { mockBanner: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service." },
		readMore: "Read More",
		saveChanges: "Save Changes",
		"themeToggle.themeAuto": "Theme: Auto",
		"themeToggle.themeDark": "Theme: Dark",
		"themeToggle.themeLight": "Theme: Light",
		"themeToggle.themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
		"themeToggle.themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
		"themeToggle.themeModeLightClick": "Theme mode: light. Click to switch to dark mode.",
		aboutHeader: {
			aboutThisBenchmark: "About This Benchmark",
			methodology: "Methodology",
			thisIsAnOpenSource: "This is an open-source test application for measuring the real-world impact of internationalization libraries.",
			weDesignedThisBenchmarkTo: "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach."
		},
		settingsHeader: {
			manageYourAccount: "Manage your account settings and preferences.",
			manageYourAccountPreferences: "Manage your account preferences and configuration.",
			settings: "Settings"
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
		settingsFooter: {
			cancel: "Cancel",
			saveChanges: "Save Changes"
		},
		careers: {
			"careersHeader.careers": "Careers",
			"careersHero.fromAnywhere": "from anywhere in the world",
			"careersBenefits.competitivePay": "Competitive pay",
			"careersBenefits.topOfMarket": "Top-of-market compensation",
			"careersBenefits.openSourceTime": "Open source time",
			"careersBenefits.twentyPercentTime": "20% time for OSS",
			"careersPositions.seniorFrontendEngineer": "Senior Frontend Engineer",
			"careersPositions.seniorFrontendEngineerDesc": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
			"openPositions.openPositions": "Open Positions",
			"openPositions.remote": "Remote",
			"openPositions.fullTime": "Full-time",
			"openPositions.engineering": "Engineering",
			"openPositions.applyNow": "Apply Now"
		},
		pricingHeader: {
			pricing: "Pricing",
			transparentPricingForEvery: "Transparent pricing for every stage of your i18n journey."
		},
		contactHeader: {
			contactUs: "Contact Us",
			getInTouch: "Get in Touch",
			haveIdeasFoundABug: "Have ideas? Found a bug? We'd love to hear from you.",
			haveQuestionsOrWantTo: "Have questions or want to contribute? We'd love to hear from you."
		},
		careersBenefits: {
			allOurWorkIs: "All our work is open source. Build your public portfolio while making an impact.",
			competitivePay: "Competitive pay",
			impactful: "Impactful",
			openSource: "Open Source",
			openSourceTime: "Open source time",
			percentTimeForOss: "20% time for OSS contributions",
			remoteFirst: "Remote-First",
			topOfMarketCompensation: "Top-of-market compensation",
			whyJoinUs: "Why Join Us?",
			workFromAnywhere: "Work from anywhere in the world",
			workFromAnywhereFully: "Work from anywhere. Fully distributed team across 6 time zones.",
			yourWorkDirectlyHelps: "Your work directly helps developers build better, faster internationalized applications."
		},
		route: {
			oopsPageNotFound: "Oops! Page not found.",
			returnToHome: "Return to Home",
			"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:",
			"route.oopsPageNotFound": "Oops! Page not found",
			"route.returnToHome": "Return to Home"
		},
		whatWeMeasure: {
			bundleSizeImpact: "Bundle size impact",
			duringSsrTranslationDataIs: "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
			duringSsrTranslationDataIsSerialized: "During SSR, translation data is serialized into the HTML. We measure the size of this payload and its effect on Time to Interactive (TTI).",
			howFastTheAppCan: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
			howFastTheAppCanSwitchFromOne: "How fast the app can switch from one language to another. We measure the re-render time and any network delays for lazy-loaded locales.",
			howMuchExtraTimeThe: "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.",
			howMuchExtraTimeTheLibraryAdds: "How much extra time the library adds to the initial page load. This includes script execution and the time to fetch/parse translation data.",
			hydrationCost: "Hydration cost",
			lazyLoadingEffectiveness: "Lazy loading effectiveness",
			localeSwitchSpeed: "Locale switch speed",
			renderingOverhead: "Rendering overhead",
			theAdditionalJavascriptBytes: "The additional Javascript bytes that the library adds to your production build. We measure both the library itself and its mandatory dependencies.",
			theAdditionalJavascriptBytesSent: "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.",
			whatWeMeasure: "What We Measure",
			whetherSplittingTranslationsByRoute: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity)."
		},
		pricing: {
			"pricingTiers.starterTier": "Starter",
			"pricingTiers.starterPrice": "$0",
			"pricingTiers.forever": "forever",
			"pricingTiers.runsPerDay": "5 benchmark runs/day",
			"pricingTiers.libraries3": "3 libraries",
			"pricingTiers.communitySupport": "Community support",
			"pricingTiers.publicResults": "Public results",
			"pricingTiers.getStarted": "Get Started",
			"pricingTiers.proTier": "Pro",
			"pricingTiers.proPrice": "$29",
			"pricingTiers.perMonth": "/month",
			"pricingTiers.unlimitedRuns": "Unlimited runs",
			"pricingTiers.allLibraries": "All libraries",
			"pricingTiers.prioritySupport": "Priority support",
			"pricingTiers.privateResults": "Private results",
			"pricingTiers.ciIntegration": "CI integration",
			"pricingTiers.historicalData": "Historical data",
			"pricingTiers.enterpriseTier": "Enterprise",
			"pricingTiers.custom": "Custom",
			"pricingTiers.everythingInPro": "Everything in Pro",
			"pricingTiers.onPremiseOption": "On-premise option",
			"pricingTiers.ssoSaml": "SSO & SAML",
			"pricingTiers.dedicatedAccountManager": "Dedicated account manager",
			"pricingTiers.customSLAs": "Custom SLAs",
			"pricingTiers.auditLogs": "Audit logs",
			"pricingTiers.trainingSessions": "Training sessions",
			"pricingTiers.contactSales": "Contact Sales",
			"pricingHeader.pricing": "Pricing",
			"pricingHeader.transparentPricingForEvery": "Transparent pricing for every stage of your i18n journey."
		},
		products: {
			"productsHeader.products": "Products",
			"productsHeader.toolsAndServicesTo": "Tools and services to help you optimize your internationalization strategy.",
			"productsGrid.benchmarkDashboard": "Benchmark Dashboard",
			"productsGrid.interactiveChartsAndTables": "Interactive charts and tables comparing i18n libraries across bundle size, render time, and hydration cost.",
			"productsGrid.bundleAnalyzer": "Bundle Analyzer",
			"productsGrid.uploadYourBuildOutput": "Upload your build output and get a detailed breakdown of how much of your bundle is i18n overhead.",
			"productsGrid.migrationAssistant": "Migration Assistant",
			"productsGrid.automatedCodemodsAndGuides": "Automated codemods and guides for migrating between i18n libraries with minimal disruption.",
			"productsGrid.performanceMonitor": "Performance Monitor",
			"productsGrid.continuousPerformanceTrackingFor": "Continuous performance tracking for your i18n implementation. Get alerts when translation loading degrades.",
			"productsGrid.learnMore": "Learn More"
		},
		contact: {
			"contactHeader.contactUs": "Contact Us",
			"contactHeader.haveQuestionsOrWantTo": "Have questions or want to contribute? We'd love to hear from you.",
			"contactForm.name": "Name",
			"contactForm.email": "Email",
			"contactForm.subject": "Subject",
			"contactForm.message": "Message",
			"contactForm.sendMessage": "Send Message",
			"contactForm.wellGetBackTo": "We'll get back to you within 48 hours."
		},
		apiAccessSection: {
			apiAccess: "API Access",
			apiKey: "API Key",
			useThisKeyTo: "Use this key to access the benchmarking API programmatically.",
			copy: "Copy"
		},
		themeToggle: {
			themeModeAutoSystemClick: "Theme mode: auto (system). Click to switch to light mode.",
			themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
			themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
			themeAuto: "Theme: Auto",
			themeDark: "Theme: Dark",
			themeLight: "Theme: Light"
		},
		teamHeader: {
			ourTeam: "Our Team",
			meetThePeopleBehindI18n: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
		},
		about: {
			"aboutHeader.methodology": "Methodology",
			"aboutHeader.weDesignedThisBenchmarkTo": "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach.",
			"aboutGrid.testEnvironment": "Test Environment",
			"aboutGrid.allBenchmarksRunOn": "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.",
			"aboutGrid.applicationDesign": "Application Design",
			"aboutGrid.theBenchmarkAppHas10": "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.",
			"aboutGrid.measurementMethodology": "Measurement Methodology",
			"aboutGrid.weUseBrowserNativeApis": "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.",
			"aboutGrid.fairComparison": "Fair Comparison",
			"aboutGrid.eachI18nLibraryIsIntegrated": "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment.",
			"whatWeMeasure.bundleSizeImpact": "Bundle size impact",
			"whatWeMeasure.theAdditionalJavascriptBytesSent": "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.",
			"whatWeMeasure.renderingOverhead": "Rendering overhead",
			"whatWeMeasure.howMuchExtraTimeThe": "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.",
			"whatWeMeasure.hydrationCost": "Hydration cost",
			"whatWeMeasure.duringSsrTranslationDataIs": "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
			"whatWeMeasure.lazyLoadingEffectiveness": "Lazy loading effectiveness",
			"whatWeMeasure.whetherSplittingTranslationsByRoute": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
			"whatWeMeasure.localeSwitchSpeed": "Locale switch speed",
			"whatWeMeasure.howFastTheAppCan": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
			"whatWeMeasure.whatWeMeasure": "What We Measure"
		},
		aboutGrid: {
			allBenchmarksRunOn: "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.",
			applicationDesign: "Application Design",
			choosingAnI18nLibrary: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
			eachI18nLibraryIsIntegrated: "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment.",
			fairComparison: "Fair Comparison",
			measurementMethodology: "Measurement Methodology",
			methodology: "Methodology",
			testEnvironment: "Test Environment",
			theBenchmarkAppHas10: "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.",
			theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
			weUseBrowserNativeApis: "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.",
			whyThisExists: "Why This Exists"
		},
		blogHeader: {
			blog: "Blog",
			insightsDeepDivesAnd: "Insights, deep dives, and updates from the i18n benchmarking community.",
			insightsTutorialsAndAnalysis: "Insights, Tutorials, and Analysis"
		},
		home: {
			"hero.aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
			"hero.viewResults": "View Results",
			"whyItMatters.whyTheseMetricsMatter": "Why These Metrics Matter",
			"whyItMatters.bundleSize": "Bundle Size",
			"whyItMatters.theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
			"whyItMatters.renderingHydration": "Rendering & Hydration",
			"whyItMatters.connectingALargeJson": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
			"whyItMatters.dynamicLoading": "Dynamic Loading",
			"whyItMatters.loadingAllTranslationsUpfront": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
			"understandingImpact.understandingTheImpact": "Understanding the Impact",
			"understandingImpact.whyASingleLargeJson": "Why a single large JSON can hurt performance",
			"understandingImpact.manyI18nLibrariesStoreTranslations": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
			"understandingImpact.theJsonMustBeParsed": "The JSON must be parsed on every page load — blocking the main thread.",
			"understandingImpact.contextBasedArchitecturesCanCause": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
			"understandingImpact.duringServerSideRenderingThe": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
			"understandingImpact.theTradeOffsOfDynamic": "The trade-offs of dynamic loading",
			"understandingImpact.splittingTranslationsIntoPerRoute": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
			"understandingImpact.waterfallRequests": "Waterfall requests:",
			"understandingImpact.flashOfUntranslatedContentFouc": "Flash of untranslated content (FOUC):",
			"understandingImpact.cacheInvalidation": "Cache invalidation:",
			"understandingImpact.whatThisBenchmarkMeasures": "What this benchmark measures",
			"understandingImpact.thisTestAppProvidesA": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
			"resultsTable.sampleResults": "Sample Results",
			"resultsTable.bundleSize": "Bundle Size",
			"resultsTable.lookupTime": "Lookup Time",
			"resultsTable.lazyLoading": "Lazy Loading"
		},
		resultsTable: {
			bundleSize: "Bundle Size",
			lazyBuiltIn: "Built-in",
			lazyLoading: "Lazy Loading",
			lazyManual: "Manual",
			lazyYes: "Yes",
			library: "Library",
			lookupTime: "Lookup Time",
			sampleResults: "Sample Results"
		},
		team: {
			"teamHeader.ourTeam": "Our Team",
			"teamHeader.meetThePeopleBehindI18n": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.",
			"teamGrid.sarahChen": "Sarah Chen",
			"teamGrid.founderLeadEngineer": "Founder & Lead Engineer",
			"teamGrid.formerGoogleEngineerWith10": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
			"teamGrid.marcusWeber": "Marcus Weber",
			"teamGrid.performanceEngineer": "Performance Engineer",
			"teamGrid.specializesInJavascriptPerformanceOptimization": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
			"teamGrid.aishaPatel": "Aisha Patel",
			"teamGrid.developerAdvocate": "Developer Advocate",
			"teamGrid.passionateAboutDeveloperExperienceAnd": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
			"teamGrid.tomasRodriguez": "Tomás Rodríguez",
			"teamGrid.fullStackDeveloper": "Full-Stack Developer",
			"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
			"teamGrid.yukiTanaka": "Yuki Tanaka",
			"teamGrid.dataAnalyst": "Data Analyst",
			"teamGrid.ensuresStatisticalRigorInAll": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
			"teamGrid.elenaKowalski": "Elena Kowalski",
			"teamGrid.communityManager": "Community Manager",
			"teamGrid.managesCommunityContributionsPartnershipsAnd": "Manages community contributions, partnerships, and events. Background in open source governance."
		},
		blog: {
			"blogHeader.blog": "Blog",
			"blogHeader.insightsDeepDivesAnd": "Insights, deep dives, and updates from the i18n benchmarking community.",
			"blogList.i18nBenchmark2026Results": "i18n Benchmark 2026 Results",
			"blogList.march152026": "March 15, 2026",
			"blogList.weTested12DifferentInternationalization": "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts.",
			"blogList.howToReduceYourI18n": "How to Reduce Your i18n Bundle by 60%",
			"blogList.march82026": "March 8, 2026",
			"blogList.practicalStrategiesForOptimizingTranslation": "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.",
			"blogList.theStateOfInternationalizationIn": "The State of Internationalization in 2026",
			"blogList.february282026": "February 28, 2026",
			"blogList.anOverviewOfTheCurrent": "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.",
			"blogList.migratingFromReactI18nextTo": "Migrating from react-i18next to Lingui",
			"blogList.february152026": "February 15, 2026",
			"blogList.aStepByStepGuide": "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
			"blogList.serverComponentsAndI18nWhat": "Server Components and i18n: What Changes?",
			"blogList.february12026": "February 1, 2026",
			"blogList.reactServerComponentsIntroduceNew": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
			"blogList.benchmarkMethodologyHowWeTest": "Benchmark Methodology: How We Test",
			"blogList.january202026": "January 20, 2026",
			"blogList.aTransparentLookAtOur": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
			"blogList.readMore": "Read More →"
		},
		profileSection: {
			profile: "Profile",
			displayName: "Display Name",
			email: "Email"
		},
		hero: {
			aTestApplicationDesignedTo: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
			title: "i18n Benchmark",
			viewResults: "View Results"
		}
	},
	es: p,
	fr: m,
	it: h,
	ja: g,
	ko: _,
	pt: v,
	ru: y,
	zh: b
}, gt = (e) => ht[e] || ht.en, _t = [
	"en",
	"fr",
	"es",
	"de",
	"it",
	"ja",
	"ko",
	"pt",
	"ru",
	"zh"
];
function vt() {
	return et().use(Ne()).updateDefaults({ staticData: Object.fromEntries(_t.map((e) => [e, () => Promise.resolve(gt(e))])) });
}
var $ = vt().init(), yt = ({ language: e, staticData: t, children: n }) => {
	let r = d();
	return i(() => {
		let { unsubscribe: e } = $.on("permanentChange", () => {
			r.refresh();
		}), { unsubscribe: t } = $.on("language", ({ value: e }) => {
			document.documentElement.lang = e, r.refresh();
		});
		return () => {
			e(), t();
		};
	}, [r]), l(ot, {
		tolgee: $,
		ssr: {
			language: e,
			staticData: t
		},
		options: { useSuspense: !1 },
		children: n
	});
};
function bt() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function xt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function St({ children: e, locale: t, staticData: n }) {
	let [r] = c(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		xt("AppRoot", r);
	}, [r]), i(() => {
		document.documentElement.lang = t;
	}, [t]), i(() => {
		bt();
	}, []), l(yt, {
		language: t,
		staticData: n,
		children: e
	});
}
var Ct = "en", wt = gt(Ct);
function Tt({ children: e }) {
	return l(St, {
		locale: Ct,
		staticData: wt,
		children: e
	});
}
function Et() {
	return l(Tt, { children: l(mt, {}) });
}
export { Et as default };
