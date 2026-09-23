import e, { Suspense as t, useCallback as n, useContext as r, useEffect as i, useMemo as a, useRef as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
var u = Object.defineProperty, d = Object.defineProperties, f = Object.getOwnPropertyDescriptors, p = Object.getOwnPropertySymbols, m = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable, g = (e, t, n) => t in e ? u(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, _ = (e, t) => {
	for (var n in t ||= {}) m.call(t, n) && g(e, n, t[n]);
	if (p) for (var n of p(t)) h.call(t, n) && g(e, n, t[n]);
	return e;
}, v = (e, t) => d(e, f(t)), y;
function b(e, t) {
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
function x(e) {
	return !!(e && typeof e.then == "function");
}
function S(e, t) {
	return x(e) ? Promise.resolve(e).then(t) : t(e);
}
function C(e, t, n) {
	function r(n) {
		let r = t(n);
		throw e.emit(r), console.error(r), r;
	}
	try {
		let e = n();
		return x(e) ? e.catch(r) : e;
	} catch (e) {
		r(e);
	}
}
function w(e) {
	let t = (Array.isArray(e) ? e : [e]).map((e) => `'${e}'`), n = t.slice(-2).join(" or ");
	return `Tolgee: You need to specify ${[...t.slice(0, -2), n].join(", ")} option`;
}
function T(e) {
	return typeof e == "object" && !Array.isArray(e) && e !== null;
}
function E(e) {
	if (typeof e == "string") return [e];
	if (Array.isArray(e)) return e;
}
function D(e) {
	return E(e) || [];
}
function ee(e, t) {
	return T(t) ? D(t?.[e]) : D(t);
}
function O(e) {
	return Array.from(new Set(e));
}
function te(e) {
	return e && e.replace(/\/+$/, "");
}
function ne(e) {
	if (typeof e == "string") return e;
	if (typeof e?.message == "string") return e.message;
}
var re = (e, t) => fetch(e, t);
function ie(e) {
	return Object.fromEntries(new Headers(e).entries());
}
var ae = () => ({
	"x-tolgee-sdk-type": "JS",
	"x-tolgee-sdk-version": "prerelease"
}), k = (e = re) => (t, n) => {
	let r = ie(n?.headers);
	return r["x-api-key"] && (r = Object.assign(Object.assign({}, ae()), r)), e(t, Object.assign(Object.assign({}, n), { headers: r }));
}, oe = (e) => {
	let t = /* @__PURE__ */ new Map();
	return Object.entries(e).forEach(([e, n]) => {
		if (n != null) {
			if (typeof n == "object") {
				oe(n).forEach((n, r) => {
					t.set(e + "." + r, n);
				});
				return;
			}
			t.set(e, n);
		}
	}), t;
}, A = (e) => Object.fromEntries(oe(e).entries()), j = (e) => {
	let [t, ...n] = e.split(":");
	return {
		language: t,
		namespace: n.join(":") || ""
	};
}, M = ({ language: e, namespace: t }) => t ? `${e}:${t}` : e, N = (e, t) => {
	let n = /* @__PURE__ */ new Set();
	return {
		listen(e) {
			let t = (t) => {
				e(t);
			};
			return n.add(t), { unsubscribe() {
				n.delete(t);
			} };
		},
		emit(r) {
			t() && Array.from(n).forEach((t) => t({
				type: e,
				value: r
			}));
		}
	};
};
function se(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	function r() {
		if (n.length === 0) return;
		let e = n;
		n = [], Array.from(t).forEach((t) => {
			t(e);
		});
	}
	return Object.freeze({
		listen(e) {
			let n = (t) => {
				e(t);
			};
			return t.add(n), { unsubscribe() {
				t.delete(n);
			} };
		},
		emit(t, i) {
			e() && e() && (n.push(t), i ? setTimeout(r, 0) : r());
		}
	});
}
function ce() {
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
		onUpdate: se(t),
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
var le = class extends Error {
	constructor(e, t, n = !1) {
		let { language: r, namespace: i } = e;
		super(`Tolgee: Failed to fetch record for "${r}"${i && ` and "${i}"`}`), this.cause = t, this.isDev = n, this.name = "RecordFetchError", this.language = r, this.namespace = i;
	}
}, ue = class extends Error {
	constructor(e, t) {
		super(e), this.cause = t, this.name = "LanguageDetectorError";
	}
}, de = class extends Error {
	constructor(e, t) {
		super(e), this.cause = t, this.name = "LanguageStorageError";
	}
};
function fe(e, t, n, r, i, a, o) {
	let s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = {}, u = 0;
	function d(t, n, r) {
		let i = M(t);
		c.set(i, {
			data: A(n),
			version: r
		}), e.onCacheChange.emit(j(i));
	}
	async function f(n) {
		function r(t) {
			let r = new le(n, t);
			throw e.onError.emit(r), console.error(r), r;
		}
		let i = t(n);
		if (x(i)) {
			let e = await i.catch(r);
			if (e !== void 0) return e;
		}
		let a = l[M(n)];
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
			let r = new le(t, n, !0);
			e.onError.emit(r), console.warn(r);
		}
		return i ||= await f(t), i;
	}
	let m = Object.freeze({
		addStaticData(e) {
			if (Array.isArray(e)) for (let t of e) {
				let e = M(t), n = c.get(e);
				(!n || n.version === 0) && d(t, A(t.data), 0);
			}
			else e && (l = Object.assign(Object.assign({}, l), e), Object.entries(e).forEach(([e, t]) => {
				if (typeof t != "function") {
					let n = j(e), r = c.get(e);
					(!r || r.version === 0) && d(n, A(t), 0);
				}
			}));
		},
		invalidate() {
			s.clear(), u += 1;
		},
		addRecord(e, t) {
			d(e, A(t), u);
		},
		exists(e, t = !1) {
			let n = c.get(M(e));
			return n && t ? n.version === u : !!n;
		},
		getRecord(e) {
			let t = r(e), n = M(t), i = c.get(n);
			if (i) return Object.assign(Object.assign({}, t), {
				cacheKey: n,
				data: i.data
			});
		},
		getAllRecords() {
			return Array.from(c.entries()).map(([e]) => m.getRecord(j(e)));
		},
		getTranslation(e, t) {
			return c.get(M(e))?.data[t];
		},
		getTranslationNs(e, t, n) {
			for (let r of e) for (let e of t) if (c.get(M({
				language: e,
				namespace: r
			}))?.data[n] != null) return [r];
			return O(e);
		},
		getTranslationFallback(e, t, n) {
			for (let r of e) for (let e of t) {
				let t = c.get(M({
					language: e,
					namespace: r
				}))?.data[n];
				if (t != null) return t;
			}
		},
		changeTranslation(t, n, r) {
			let i = c.get(M(t))?.data;
			i && (i[n] = r, e.onCacheChange.emit(Object.assign(Object.assign({}, t), { key: n })));
		},
		isFetching(e) {
			if (i()) return !0;
			if (e === void 0) return s.size > 0;
			let t = D(e);
			return !!Array.from(s.keys()).find((e) => t.includes(j(e).namespace));
		},
		isLoading(e, t) {
			let n = D(t);
			return i() ? !0 : !!Array.from(s.keys()).find((t) => {
				let r = j(t);
				return (!n.length || n.includes(r.namespace)) && !m.exists({
					namespace: r.namespace,
					language: e
				});
			});
		},
		async loadRecords(e, t) {
			let n = e.map((e) => {
				let n = r(e), i = M(n);
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
				e.promise && (e.data = A(c[0] ?? {}), c.shift());
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
function pe(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
var me = {
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
}, P = "invalid", he = {
	observerOptions: me,
	observerType: "invisible",
	onFormatError: P,
	apiUrl: "https://app.tolgee.io",
	autoLoadRequiredData: !0,
	fetch: k(),
	onTranslationMissing: ({ key: e }) => e
}, F = (...e) => {
	let t = {};
	return e.forEach((e) => {
		t = Object.assign(Object.assign(Object.assign({}, t), e), { observerOptions: Object.assign(Object.assign({}, t.observerOptions), e?.observerOptions) });
	}), t;
};
function I(e, t) {
	let n = F(he, t?.initialOptions, e);
	return n.apiUrl = te(n.apiUrl), e?.fetch && (n.fetch = k(e.fetch)), {
		initialOptions: n,
		activeNamespaces: t?.activeNamespaces || /* @__PURE__ */ new Map(),
		language: t?.language,
		pendingLanguage: t?.language,
		isInitialLoading: !1,
		isRunning: !1
	};
}
function ge(e, t, n, r, i, a, o, s) {
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
		return O.formatTranslation(Object.assign(Object.assign({}, e), {
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
	function w() {
		return C(s.onError, (e) => new de("Tolgee: Failed to load language", e), () => l.languageStorage?.getLanguage(p()));
	}
	function T() {
		if (!l.languageDetector) return;
		let e = n();
		return C(s.onError, (e) => new ue("Tolgee: Failed to detect language", e), () => l.languageDetector?.getLanguage(Object.assign({ availableLanguages: e }, p())));
	}
	function E(e) {
		e && l.backends.push(e);
	}
	function D(e) {
		l.devBackend = e;
	}
	function ee(e, t) {
		t(e, Object.freeze({
			setFinalFormatter: _,
			addFormatter: g,
			setObserver: m,
			hasObserver: h,
			setUi: v,
			hasUi: y,
			setDevBackend: D,
			addBackend: E,
			setLanguageDetector: x,
			setLanguageStorage: b
		}));
	}
	let O = Object.freeze({
		addPlugin: ee,
		findPositions: d,
		run() {
			var e;
			let { apiKey: n, transport: r, apiUrl: i, projectId: a, branch: p, observerOptions: m, tagNewKeys: h, filterTag: g } = t();
			l.ui = c.ui?.call(c, {
				apiKey: n,
				transport: r,
				apiUrl: i,
				projectId: a,
				branch: p,
				highlight: O.highlight,
				changeTranslation: o,
				findPositions: d,
				onPermanentChange: (e) => s.onPermanentChange.emit(e),
				tagNewKeys: h,
				filterTag: g
			}), (e = l.observer) == null || e.run({
				mouseHighlight: !!l.ui,
				options: m,
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
			return S(w(), (t) => (!e || e.includes(t)) && t ? t : T());
		},
		setStoredLanguage(e) {
			return C(s.onError, (e) => new de("Tolgee: Failed to store language", e), () => l.languageStorage?.setLanguage(e, p()));
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
			let { apiKey: r, transport: i, apiUrl: a, projectId: o, branch: s, filterTag: c } = t();
			if ((r || i) && a && O.hasDevBackend()) return l.devBackend?.getRecord(Object.assign({
				apiKey: r,
				transport: i,
				apiUrl: a,
				projectId: o,
				branch: s,
				language: e,
				namespace: n,
				filterTag: c
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
			return !!O.getDevBackend();
		},
		formatTranslation(n) {
			var { formatEnabled: r } = n, i = pe(n, ["formatEnabled"]);
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
				let n = ne(e) || P, r = t().onFormatError, a = typeof r;
				h = a === "string" ? r : a === "function" ? r(n, i) : P, h = v(h);
			}
			return h;
		}
	});
	return O;
}
var L = (e, t, n) => {
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
function _e(e, t, n) {
	let r = I(), i, a = Object.freeze({
		init(e) {
			r = I(e, r);
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
			let e = Object.assign(Object.assign({}, r.initialOptions), i);
			return i && (i.apiKey || i.transport) && (e.apiKey = i.apiKey, e.transport = i.transport), e;
		},
		addActiveNs(e) {
			D(e).forEach((e) => {
				let t = r.activeNamespaces.get(e);
				t === void 0 ? r.activeNamespaces.set(e, 1) : r.activeNamespaces.set(e, t + 1);
			});
		},
		removeActiveNs(e) {
			D(e).forEach((e) => {
				let t = r.activeNamespaces.get(e);
				t !== void 0 && t > 1 ? r.activeNamespaces.set(e, t - 1) : r.activeNamespaces.delete(e);
			});
		},
		getRequiredNamespaces() {
			return O([
				a.getDefaultNs(),
				...r.initialOptions.ns || [],
				...D(r.initialOptions.fallbackNs),
				...r.activeNamespaces.keys()
			]);
		},
		getFallbackLangs(e) {
			let t = e || a.getLanguage();
			return t ? O([t, ...ee(t, r.initialOptions.fallbackLanguage)]) : [];
		},
		getFallbackNs() {
			return D(r.initialOptions.fallbackNs);
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
				let e = Object.keys(r.initialOptions.staticData).map((e) => j(e).language);
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
			i = e ? Object.assign(Object.assign({}, e), { apiUrl: te(e.apiUrl) }) : void 0;
		}
	});
	return a;
}
function ve(e) {
	var { ns: t, noWrap: n, orEmpty: r, params: i, language: a } = e, o = pe(e, [
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
var R = (e, ...t) => {
	let n = {}, r;
	return typeof e == "object" && e ? n = e : (n.key = e, typeof t[0] == "string" ? (n.defaultValue = t[0], r = t[1]) : typeof t[0] == "object" && (r = t[0])), r && (n = Object.assign(Object.assign({}, ve(r)), n)), n;
};
function ye({ options: e }) {
	let t = ce(), n = L(!1, () => o.isFetching(), t.onFetchingChange.emit), r = L(!1, () => T.isLoading(), t.onLoadingChange.emit), i = _e(t.onLanguageChange, t.onPendingLanguageChange, t.onRunningChange), a = ge(i.getLanguage, i.getInitialOptions, i.getAvailableLanguages, u, _, v, f, t), o = fe(t, a.getBackendRecord, a.getBackendDevRecord, i.withDefaultNs, i.isInitialLoading, n, r);
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
		return O([...D(l(e)), ...c()]);
	}
	function d(e) {
		return O([...D(e ?? l()), ...i.getRequiredNamespaces()]);
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
			let e = T.getAvailableLanguages();
			if (!e) throw Error(w("availableLanguages"));
			t = e;
		}
		if (Array.isArray(e.namespaces)) n = e.namespaces;
		else if (e.namespaces === "all") {
			let e = T.getAvailableNs();
			if (!e) throw Error(w("availableNs"));
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
		let e = S(b(), () => {
			let e = h();
			if (e.length && i.getInitialOptions().autoLoadRequiredData) return o.loadRecords(e, { useCache: !0 });
		});
		if (x(e)) return i.setInitialLoading(!0), n.notify(), r.notify(), Promise.resolve(e).then(() => {
			i.setInitialLoading(!1), n.notify(), r.notify(), t.onInitialLoaded.emit();
		});
		t.onInitialLoaded.emit();
	}
	function b() {
		if (!i.getLanguage()) return S(a.getInitialLanguage(), (e) => {
			let t = e || i.getInitialOptions().defaultLanguage;
			t && i.setLanguage(t);
		});
	}
	function C() {
		if ((a.getLanguageDetector() || a.getLanguageStorage()) && !i.getAvailableLanguages()) throw Error(w("availableLanguages"));
		if (!i.getLanguage() && !i.getInitialOptions().defaultLanguage) throw Error(w(["defaultLanguage", "language"]));
	}
	let T = Object.freeze(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), i), a), o), {
		init: p,
		getTranslation: v,
		changeTranslation: f,
		getTranslationNs: _,
		getDefaultAndFallbackNs: u,
		findPositions: a.findPositions,
		getRequiredDescriptors: m,
		async changeLanguage(e) {
			(i.getPendingLanguage() !== e || i.getLanguage() !== e) && (i.setPendingLanguage(e), i.isRunning() && i.getInitialOptions().autoLoadRequiredData && await o.loadRecords(m(e), { useCache: !0 }), e === i.getPendingLanguage() && (i.setLanguage(e), await a.setStoredLanguage(e)));
		},
		async addActiveNs(e, t) {
			t || i.addActiveNs(e), i.isRunning() && await o.loadRecords(m(void 0, e), { useCache: !0 });
		},
		async loadRecord(e, t) {
			return (await T.loadRecords([e], t))[0]?.data;
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
			let t = R(...e), n = v(t);
			return a.formatTranslation(Object.assign(Object.assign({}, t), { translation: n }));
		},
		isDev() {
			let e = i.getInitialOptions();
			return !!((e.apiKey || e.transport) && e.apiUrl);
		},
		async loadRequired(e) {
			e?.language || await b();
			let t = m(e?.language);
			return T.loadRecords(t, e);
		},
		async loadMatrix(e) {
			let t = g(e);
			return T.loadRecords(t, e);
		},
		run() {
			return C(), i.isRunning() || (i.setRunning(!0), a.run(), s = y()), Promise.resolve(s);
		},
		stop() {
			i.isRunning() && (a.stop(), i.setRunning(!1));
		}
	}));
	return T;
}
function be(e) {
	let t = ye({ options: e });
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
var xe = () => {
	let e = {
		plugins: [],
		options: {}
	}, t = Object.freeze({
		use(n) {
			return e.plugins.push(n), t;
		},
		updateDefaults(n) {
			return e.options = F(e.options, n), t;
		},
		init(t) {
			let n = be(F(e.options, t));
			return e.plugins.forEach(n.addPlugin), n;
		}
	});
	return t;
}, z = 0, B = 1, Se = 2, Ce = class extends Error {
	constructor(e, t, n) {
		let r, i = "";
		e === z ? r = "Empty parameter" : e === B ? (r = "Unexpected character", i = "Did you forget to use FormatIcu to render ICU message syntax?") : r = "Unexpected end", super(`Tolgee parser: ${r} at ${t} in "${n}"` + (i ? "\n" + i : "")), this.code = e, this.index = t;
	}
};
function we(e) {
	return /\s/.test(e);
}
var V = 0, H = 1, U = 2, W = 3, G = 4, Te = /* @__PURE__ */ new Set([
	U,
	H,
	V
]), K = "'", Ee = /* @__PURE__ */ new Set([
	"{",
	"}",
	K
]), De = (e) => /[0-9a-zA-Z_]/.test(e);
function Oe(e) {
	let t = V, n = "", r = "", i = "", a = [], o = [], s = 0;
	function c(t) {
		throw new Ce(t, s, e);
	}
	let l = () => {
		a.push(n), n = "";
	}, u = () => {
		De(i) || c(B), r += i;
	}, d = () => {
		r === "" && c(z), o.push(r), r = "";
	};
	for (s = 0; s < e.length; s++) switch (i = e[s], t) {
		case V:
			i === K ? (n += i, t = H) : i === "{" ? (l(), t = W) : (n += i, t = V);
			break;
		case H:
			Ee.has(i) ? (n = n.slice(0, -1) + i, t = U) : (n += i, t = V);
			break;
		case U:
			i === K ? t = V : (n += i, t = U);
			break;
		case W:
			i === "}" ? (d(), t = V) : we(i) ? r !== "" && (d(), t = G) : (u(), t = W);
			break;
		case G: i == "}" ? t = V : we(i) ? t = G : c(B);
	}
	return Te.has(t) || c(Se), l(), [a, o];
}
function ke(e, t) {
	let [n, r] = Oe(e), i = [n[0]];
	for (let a = 1; a < n.length; a++) {
		let o = t?.[r[a - 1]];
		if (o === void 0) throw Error(`Missing parameter "${r[a - 1]}" in "${e}"`);
		i.push(String(o)), i.push(n[a]);
	}
	return i.join("");
}
function Ae() {
	return { format: ({ translation: e, params: t }) => ke(e, t) };
}
var je = () => (e, t) => (t.setFinalFormatter(Ae()), e);
function Me() {
	return globalThis.window?.document?.createElement === void 0;
}
var Ne = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pe = {};
(function(e) {
	function t(e, t) {
		return (e instanceof Buffer ? e : Buffer.from(e.buffer, e.byteOffset, e.byteLength)).toString(t);
	}
	var n = function(e) {
		return Buffer.from(e);
	};
	function r(e) {
		for (var t = 0, n = Math.min(65536, e.length + 1), r = new Uint16Array(n), i = [], a = 0;;) {
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
			}
			if (!(o & 4294965248)) a[r++] = o >>> 6 & 31 | 192;
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
		if (o(t && t.fatal, m, "fatal"), e ||= "utf-8", !(s ? Buffer.isEncoding(e) : f.indexOf(e.toLowerCase()) !== -1)) throw RangeError(`${h} encoding label provided ('${e}') is invalid.`);
		this.encoding = e, this.fatal = !1, this.ignoreBOM = !1;
	}
	g.prototype.decode = function(e, t) {
		o(t && t.stream, "decode", "stream");
		var n = e instanceof Uint8Array ? e : e.buffer instanceof ArrayBuffer ? new Uint8Array(e.buffer) : new Uint8Array(e);
		return p(n, this.encoding);
	}, e.TextEncoder = e.TextEncoder || l, e.TextDecoder = e.TextDecoder || g;
})(typeof window < "u" ? window : Ne);
var Fe = b({
	__proto__: null,
	default: Pe
}, [Pe]);
(y = console.assert) == null || y.call(console, Fe), RegExp(`([${["‌", "‍"].join("")}]{9})+`, "g");
function Ie(e, t) {
	return t ? `${t}: ${e}` : e;
}
var q = class e extends Error {
	constructor(t, n, r) {
		super(Ie(t, n)), this.code = t, this.status = n, this.params = r, Object.setPrototypeOf(this, e.prototype);
	}
};
function Le(e) {
	return e instanceof Error && typeof e.code == "string";
}
var Re = 2, ze = 35e3, Be = "TOLGEE_API_REQUEST", Ve = "TOLGEE_API_RESPONSE", He = "TOLGEE_PROXY_PING", Ue = "TOLGEE_PROXY_PONG";
function We(e) {
	return e === "oauth" || e === "apiKey";
}
var J = class e extends Error {
	constructor(t, n) {
		super(n), this.kind = t, this.name = "ExtensionRpcError", Object.setPrototypeOf(this, e.prototype);
	}
}, Ge = 3e3, Ke = 200, qe = 0, Y = /* @__PURE__ */ new Map(), Je = !1, X, Z;
async function Ye({ type: e, replyType: t, payload: n, timeoutMs: r = ze, progressType: i, onProgress: a }) {
	Qe();
	let o = Date.now() + r;
	await $e(Math.min(o, Date.now() + Ge));
	let s = o - Date.now();
	if (s <= 0) throw Xe(e);
	let c = Ze();
	return new Promise((r, o) => {
		let l = setTimeout(() => {
			Y.delete(c), et(), o(Xe(e));
		}, s);
		Y.set(c, {
			replyType: t,
			progressType: i,
			onProgress: a,
			resolve: r,
			reject: o,
			timer: l
		}), window.postMessage({
			type: e,
			data: _({ id: c }, n)
		}, window.origin);
	});
}
var Xe = (e) => new J("unavailable", `the Tolgee browser extension did not answer ${e} in time`), Ze = () => `${Date.now()}-${qe++}-${Math.random()}`;
function Qe() {
	Je || (Je = !0, window.addEventListener("message", (e) => {
		var t;
		if (e.source !== window || e.origin !== window.location.origin) return;
		let n = e.data?.type;
		if (n === Ue) {
			Z?.();
			return;
		}
		let r = e.data?.data;
		if (typeof r?.id != "string") return;
		let i = Y.get(r.id);
		if (i) {
			if (n === i.progressType) {
				(t = i.onProgress) == null || t.call(i);
				return;
			}
			n === i.replyType && (Y.delete(r.id), clearTimeout(i.timer), r.error ? i.reject(new J(r.error.kind, r.error.message)) : i.resolve(r));
		}
	}));
}
function $e(e) {
	return X ||= new Promise((t, n) => {
		let r = () => window.postMessage({ type: He }, window.origin), i = () => {
			clearInterval(a), et(), Z = void 0, n(new J("unavailable", "the Tolgee browser extension did not answer"));
		}, a = setInterval(() => {
			if (Date.now() > e) {
				i();
				return;
			}
			r();
		}, Ke);
		Z = () => {
			clearInterval(a), t();
		}, r();
	}), X;
}
function et() {
	X = void 0;
}
function tt() {
	return async (e) => {
		let t = await nt(e.body), n;
		try {
			n = await Ye({
				type: Be,
				replyType: Ve,
				payload: {
					path: e.path,
					method: e.method,
					headers: e.headers,
					body: t
				}
			});
		} catch (e) {
			throw at(e);
		}
		if (!n.response) throw new q("fetch_error");
		return it(n.response);
	};
}
async function nt(e) {
	if (e === void 0) return { kind: "none" };
	if (typeof e == "string") return {
		kind: "json",
		text: e
	};
	let t = [];
	return e.forEach((e, n) => {
		if (typeof e == "string") {
			t.push(Promise.resolve({
				name: n,
				value: e
			}));
			return;
		}
		t.push(rt(e).then((t) => ({
			name: n,
			file: {
				name: e.name || "blob",
				type: e.type,
				base64: t
			}
		})));
	}), {
		kind: "form",
		entries: await Promise.all(t)
	};
}
var rt = (e) => new Promise((t, n) => {
	let r = new FileReader();
	r.onload = () => t(String(r.result).replace(/^data:[^,]*,/, "")), r.onerror = () => n(r.error), r.readAsDataURL(e);
});
function it(e) {
	let t = Object.fromEntries(Object.entries(e.headers ?? {}).map(([e, t]) => [e.toLowerCase(), t]));
	return {
		ok: e.status >= 200 && e.status < 300,
		status: e.status,
		statusText: e.statusText,
		headers: { get: (e) => t[e.toLowerCase()] ?? null },
		text: () => Promise.resolve(e.body),
		json: async () => JSON.parse(e.body)
	};
}
function at(e) {
	if (Le(e)) return e;
	if (e instanceof J) switch (e.kind) {
		case "no_session": return new q("extension_session_missing", 401);
		case "too_large": return new q("extension_request_too_large");
		default: return console.warn(`Tolgee: the browser extension did not serve the request (${e.kind}): ${e.message}`), new q("fetch_error");
	}
	return new q("fetch_error");
}
var ot = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
function st(e) {
	let t = ot.indexOf(e);
	if (t === -1) throw Error("Invalid character found: " + e);
	return t;
}
function ct(e) {
	let t = new Uint8Array(e), n = t.length, r = "", i = 2 ** 16 - 1;
	for (let e = 0; e < n; e += i) e + i > n && (i = n - e), r += String.fromCharCode.apply(null, t.subarray(e, e + i));
	return r;
}
function lt(e) {
	e = e.toUpperCase();
	let t = e.length, n = 0, r = 0, i = 0, a = new Uint8Array(t * 5 / 8 | 0);
	for (let o = 0; o < t; o++) r = r << 5 | st(e[o]), n += 5, n >= 8 && (a[i++] = r >>> n - 8 & 255, n -= 8);
	return ct(a.buffer);
}
function ut(e) {
	if (e) try {
		let [t, n] = e.split("_");
		if (t === "tgpak") {
			let [e] = lt(n).split("_");
			return /^\d+$/.test(e) ? Number(e) : void 0;
		}
	} catch {
		console.warn("Tolgee: Api key can't be parsed");
	}
}
function dt(e) {
	if (!e) return;
	let [t] = e.split("_");
	return t === "tgpak" ? "tgpak" : t === "tgpat" ? "tgpat" : "legacy";
}
function ft(e) {
	let { apiKey: t, projectId: n, transport: r } = e;
	return r ? {
		authHeader: {},
		viaExtension: !0,
		hasCredential: !0,
		projectId: n,
		requiresExplicitProject: !0
	} : {
		authHeader: pt(t),
		viaExtension: !1,
		hasCredential: !!t,
		projectId: ut(t) ?? n,
		requiresExplicitProject: dt(t) === "tgpat"
	};
}
function pt(e) {
	return e ? { "X-API-Key": e } : {};
}
function mt(e, t) {
	let n = (n) => {
		e.includes(n.data?.type) && t(n.data?.data);
	};
	return window.addEventListener("message", n, !1), { unsubscribe() {
		window.removeEventListener("message", n);
	} };
}
function ht({ message: e, recievingMessage: t, data: n, attempts: r = 1, timeout: i = 300 }) {
	let a = !1, o = () => new Promise((r, a) => {
		let o = mt(t, c);
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
function gt() {
	let e;
	async function t(t) {
		e?.();
		let { cancel: n, promise: r } = ht({
			message: "TOLGEE_READY",
			recievingMessage: ["TOLGEE_PLUGIN_READY", "TOLGEE_PLUGIN_UPDATED"],
			data: t,
			attempts: 4
		});
		return e = n, r;
	}
	return { update: t };
}
var Q = "__tolgee_", _t = `${Q}apiKey`, vt = `${Q}apiUrl`, yt = `${Q}branch`, bt = `${Q}projectId`, xt = `${Q}session`, St = "tolgee-in-context-tools.umd.min.js", Ct = "@tolgee/in-context-tools", wt = "InContextTools", Tt = "https://cdn.jsdelivr.net/npm", Et = null;
function Dt(e) {
	return Et ||= Mt(Ot(e)).then(() => window[Ct][wt]), Et;
}
function Ot(e) {
	return kt() || `${Tt}/@tolgee/web@${e}/dist/${St}`;
}
function kt() {
	if (Me()) return;
	let e = window.__TOLGEE_IN_CONTEXT_URL__;
	return jt(e, window.location) ? e : void 0;
}
var At = (e) => e === "localhost" || e === "127.0.0.1" || e === "::1" || e === "[::1]";
function jt(e, t) {
	if (!e || !At(t.hostname)) return !1;
	try {
		let n = new URL(e, t.href);
		return n.origin === t.origin || At(n.hostname);
	} catch {
		return !1;
	}
}
function Mt(e) {
	return new Promise((t, n) => {
		let r = document.createElement("script");
		r.src = e, r.addEventListener("load", () => t()), r.addEventListener("error", (e) => n(e.error)), document.head.appendChild(r);
	});
}
function Nt() {
	let e = sessionStorage.getItem(_t) || void 0, t = sessionStorage.getItem(vt) || void 0, n = sessionStorage.getItem(yt) || void 0, r = sessionStorage.getItem(bt) || void 0, i = We(sessionStorage.getItem(xt));
	if (!t) return;
	let a = _(_({ apiUrl: t }, r === void 0 ? {} : { projectId: r }), n === void 0 ? {} : { branch: n });
	if (e) return v(_({}, a), { apiKey: e });
	if (i && r) return v(_({}, a), { transport: tt() });
}
function Pt() {
	let e = [];
	for (let t = 0; t < sessionStorage.length; t++) {
		let n = sessionStorage.key(t);
		n?.startsWith(Q) && e.push(n);
	}
	e.forEach((e) => sessionStorage.removeItem(e));
}
function Ft(e) {
	if (!e.isDev()) return;
	let { requiresExplicitProject: t, projectId: n } = ft(e.getInitialOptions());
	t && n === void 0 && console.warn("Tolgee: `projectId` is missing from the SDK configuration. It is required when authenticating with a PAT or connecting through the Tolgee browser extension. See https://docs.tolgee.io/js-sdk/api/core_package/options#projectid");
}
function It(e) {
	document.readyState === "loading" ? document.addEventListener && document.addEventListener("DOMContentLoaded", e) : Promise.resolve().then(() => {
		e();
	});
}
var Lt = () => (e) => e;
(() => {
	if (typeof window > "u") return !1;
	try {
		return typeof sessionStorage < "u" && sessionStorage;
	} catch (e) {
		return console.error("sessionStorage not available", e), !1;
	}
})() && (Lt = () => (e) => {
	let t = gt(), n = () => {
		let t = e.getInitialOptions();
		return {
			uiPresent: !0,
			uiVersion: void 0,
			protocolVersion: Re,
			mode: e.isDev() ? "development" : "production",
			config: {
				apiUrl: t.apiUrl || "",
				apiKey: t.transport ? "" : t.apiKey || "",
				projectId: t.projectId,
				branch: t.branch
			}
		};
	};
	return Ft(e), e.on("running", ({ value: e }) => {
		e && It(() => {
			t.update(n()).catch(Pt);
		});
	}), Nt() && (async () => {
		let e = await Dt("prerelease");
		return (t) => {
			let n = Nt();
			return t.addPlugin(e({ credentials: n })), t;
		};
	})().then((t) => {
		e.addPlugin(t);
	}).catch((e) => {
		console.error("Tolgee: Failed to load in-context tools"), console.error(e);
	}), e;
});
function Rt() {
	return xe().use(Lt());
}
function zt(e) {
	return Object.assign(Object.assign({}, e), { t(...t) {
		let n = R(...t);
		return e.t(Object.assign(Object.assign({}, n), { noWrap: !0 }));
	} });
}
function Bt(e, t, n, r = !0) {
	let [o] = s(() => zt(e)), [c, l] = s(r);
	return i(() => {
		l(!1);
	}, []), a(() => {
		r && (e.setEmitterActive(!1), e.addStaticData(n), e.changeLanguage(t), e.setEmitterActive(!0));
	}, [
		t,
		n,
		e
	]), s(() => {
		if (!e.isLoaded() && r) {
			let n = e.getRequiredDescriptors(t), r = e.getAllRecords(), i = n.map((e) => M(e)).filter((e) => !r.find((t) => t?.cacheKey === e));
			i.length && console.warn(`Tolgee: Missing records in "staticData" for proper SSR functionality: ${i.map((e) => `"${e}"`).join(", ")}`);
		}
	}), c ? o : e;
}
var Vt = { useSuspense: !1 }, Ht, Ut = () => (Ht ||= e.createContext(void 0), Ht), $ = void 0, Wt = ({ tolgee: n, options: r, children: a, fallback: o, ssr: c }) => {
	i(() => {
		$?.run !== n.run && ($ && $.stop(), $ = n, n.run().catch((e) => {
			console.error(e);
		}).finally(() => {
			p(!1);
		}));
	}, [n]);
	let l = n, { language: u, staticData: d } = typeof c == "object" ? c : {};
	l = Bt(n, u, d, !!c);
	let [f, p] = s(!l.isLoaded()), m = Object.assign(Object.assign({}, Vt), r), h = Ut();
	return m.useSuspense ? e.createElement(h.Provider, { value: {
		tolgee: l,
		options: m
	} }, f ? o : e.createElement(t, { fallback: o || null }, a)) : e.createElement(h.Provider, { value: {
		tolgee: l,
		options: m
	} }, f ? o : a);
}, Gt = () => {
	let e = Ut(), t = r(e) || void 0;
	if (!t) throw Error("Couldn't find tolgee instance, did you forgot to use `TolgeeProvider`?");
	return t;
}, Kt = () => {
	let [e, t] = s(0);
	return {
		instance: e,
		rerender: n(() => {
			t((e) => e + 1);
		}, [t])
	};
}, qt = (e, t) => {
	let { tolgee: r, options: a } = Gt(), s = E(e), c = D(s).join(":"), l = Object.assign(Object.assign({}, a), t), { rerender: u, instance: d } = Kt(), f = o([]);
	f.current = [];
	let p = r.isLoaded(s);
	i(() => {
		let e = r.on("update", u);
		return () => {
			e.unsubscribe();
		};
	}, [c, r]), i(() => (r.addActiveNs(s), () => r.removeActiveNs(s)), [c, r]);
	let m = n((e) => {
		let t = e.ns ?? s?.[0];
		return r.t(Object.assign(Object.assign({}, e), { ns: t }));
	}, [r, d]);
	if (l.useSuspense && !p) throw r.addActiveNs(s, !0);
	return {
		t: m,
		isLoading: !p
	};
}, Jt = (e, t) => {
	let { t: r, isLoading: i } = qt(e, t);
	return {
		t: n((...e) => {
			let t = R(...e);
			return r(t);
		}, [r]),
		isLoading: i
	};
}, Yt = Rt().use(je()).init({ language: "en" });
function Xt() {
	let { t: e, ...t } = Jt();
	return {
		...t,
		t: (t) => e(t)
	};
}
function Zt() {
	let { t: e } = Xt(), t = [
		{
			name: "Sarah Chen",
			role: e("teamGrid.founderLeadEngineer"),
			bio: e("teamGrid.formerGoogleEngineerWith")
		},
		{
			name: "Marcus Weber",
			role: e("teamGrid.performanceEngineer"),
			bio: e("teamGrid.specializesInJavascriptPerformance")
		},
		{
			name: "Aisha Patel",
			role: e("teamGrid.developerAdvocate"),
			bio: e("teamGrid.passionateAboutDeveloperExperience")
		},
		{
			name: "Tomás Rodríguez",
			role: e("teamGrid.fullStackDeveloper"),
			bio: e("teamGrid.maintainsTheBenchmarkingInfrastructure")
		},
		{
			name: "Yuki Tanaka",
			role: e("teamGrid.dataAnalyst"),
			bio: e("teamGrid.ensuresStatisticalRigorIn")
		},
		{
			name: "Elena Kowalski",
			role: e("teamGrid.communityManager"),
			bio: e("teamGrid.managesCommunityContributions")
		}
	];
	return c("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: t.map((e) => l("div", {
			className: "rounded-lg border border-border bg-card p-6 text-center",
			children: [
				c("div", {
					className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground",
					children: e.name.split(" ").map((e) => e[0]).join("")
				}),
				c("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.name
				}),
				c("p", {
					className: "mb-2 text-xs font-medium text-primary",
					children: e.role
				}),
				c("p", {
					className: "text-sm text-muted-foreground",
					children: e.bio
				})
			]
		}, e.name))
	});
}
function Qt({ children: e }) {
	return c(Wt, {
		tolgee: Yt,
		options: { useSuspense: !1 },
		children: e
	});
}
function $t() {
	return c(Qt, { children: c(Zt, {}) });
}
export { $t as default };
