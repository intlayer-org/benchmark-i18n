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
}), oe = (e = re) => (t, n) => {
	let r = ie(n?.headers);
	return r["x-api-key"] && (r = Object.assign(Object.assign({}, ae()), r)), e(t, Object.assign(Object.assign({}, n), { headers: r }));
}, se = (e) => {
	let t = /* @__PURE__ */ new Map();
	return Object.entries(e).forEach(([e, n]) => {
		if (n != null) {
			if (typeof n == "object") {
				se(n).forEach((n, r) => {
					t.set(e + "." + r, n);
				});
				return;
			}
			t.set(e, n);
		}
	}), t;
}, k = (e) => Object.fromEntries(se(e).entries()), A = (e) => {
	let [t, ...n] = e.split(":");
	return {
		language: t,
		namespace: n.join(":") || ""
	};
}, j = ({ language: e, namespace: t }) => t ? `${e}:${t}` : e, M = (e, t) => {
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
function ce(e) {
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
function le() {
	let e = !0;
	function t() {
		return e;
	}
	let n = Object.freeze({
		onPendingLanguageChange: M("pendingLanguage", t),
		onLanguageChange: M("language", t),
		onLoadingChange: M("loading", t),
		onFetchingChange: M("fetching", t),
		onInitialLoaded: M("initialLoad", t),
		onRunningChange: M("running", t),
		onCacheChange: M("cache", t),
		onPermanentChange: M("permanentChange", t),
		onError: M("error", t),
		onUpdate: ce(t),
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
var ue = class extends Error {
	constructor(e, t, n = !1) {
		let { language: r, namespace: i } = e;
		super(`Tolgee: Failed to fetch record for "${r}"${i && ` and "${i}"`}`), this.cause = t, this.isDev = n, this.name = "RecordFetchError", this.language = r, this.namespace = i;
	}
}, de = class extends Error {
	constructor(e, t) {
		super(e), this.cause = t, this.name = "LanguageDetectorError";
	}
}, fe = class extends Error {
	constructor(e, t) {
		super(e), this.cause = t, this.name = "LanguageStorageError";
	}
};
function pe(e, t, n, r, i, a, o) {
	let s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = {}, u = 0;
	function d(t, n, r) {
		let i = j(t);
		c.set(i, {
			data: k(n),
			version: r
		}), e.onCacheChange.emit(A(i));
	}
	async function f(n) {
		function r(t) {
			let r = new ue(n, t);
			throw e.onError.emit(r), console.error(r), r;
		}
		let i = t(n);
		if (x(i)) {
			let e = await i.catch(r);
			if (e !== void 0) return e;
		}
		let a = l[j(n)];
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
			let r = new ue(t, n, !0);
			e.onError.emit(r), console.warn(r);
		}
		return i ||= await f(t), i;
	}
	let m = Object.freeze({
		addStaticData(e) {
			if (Array.isArray(e)) for (let t of e) {
				let e = j(t), n = c.get(e);
				(!n || n.version === 0) && d(t, k(t.data), 0);
			}
			else e && (l = Object.assign(Object.assign({}, l), e), Object.entries(e).forEach(([e, t]) => {
				if (typeof t != "function") {
					let n = A(e), r = c.get(e);
					(!r || r.version === 0) && d(n, k(t), 0);
				}
			}));
		},
		invalidate() {
			s.clear(), u += 1;
		},
		addRecord(e, t) {
			d(e, k(t), u);
		},
		exists(e, t = !1) {
			let n = c.get(j(e));
			return n && t ? n.version === u : !!n;
		},
		getRecord(e) {
			let t = r(e), n = j(t), i = c.get(n);
			if (i) return Object.assign(Object.assign({}, t), {
				cacheKey: n,
				data: i.data
			});
		},
		getAllRecords() {
			return Array.from(c.entries()).map(([e]) => m.getRecord(A(e)));
		},
		getTranslation(e, t) {
			return c.get(j(e))?.data[t];
		},
		getTranslationNs(e, t, n) {
			for (let r of e) for (let e of t) if (c.get(j({
				language: e,
				namespace: r
			}))?.data[n] != null) return [r];
			return O(e);
		},
		getTranslationFallback(e, t, n) {
			for (let r of e) for (let e of t) {
				let t = c.get(j({
					language: e,
					namespace: r
				}))?.data[n];
				if (t != null) return t;
			}
		},
		changeTranslation(t, n, r) {
			let i = c.get(j(t))?.data;
			i && (i[n] = r, e.onCacheChange.emit(Object.assign(Object.assign({}, t), { key: n })));
		},
		isFetching(e) {
			if (i()) return !0;
			if (e === void 0) return s.size > 0;
			let t = D(e);
			return !!Array.from(s.keys()).find((e) => t.includes(A(e).namespace));
		},
		isLoading(e, t) {
			let n = D(t);
			return i() ? !0 : !!Array.from(s.keys()).find((t) => {
				let r = A(t);
				return (!n.length || n.includes(r.namespace)) && !m.exists({
					namespace: r.namespace,
					language: e
				});
			});
		},
		async loadRecords(e, t) {
			let n = e.map((e) => {
				let n = r(e), i = j(n);
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
				e.promise && (e.data = k(c[0] ?? {}), c.shift());
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
function me(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
var he = {
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
}, N = "invalid", ge = {
	observerOptions: he,
	observerType: "invisible",
	onFormatError: N,
	apiUrl: "https://app.tolgee.io",
	autoLoadRequiredData: !0,
	fetch: oe(),
	onTranslationMissing: ({ key: e }) => e
}, P = (...e) => {
	let t = {};
	return e.forEach((e) => {
		t = Object.assign(Object.assign(Object.assign({}, t), e), { observerOptions: Object.assign(Object.assign({}, t.observerOptions), e?.observerOptions) });
	}), t;
};
function _e(e, t) {
	let n = P(ge, t?.initialOptions, e);
	return n.apiUrl = te(n.apiUrl), e?.fetch && (n.fetch = oe(e.fetch)), {
		initialOptions: n,
		activeNamespaces: t?.activeNamespaces || /* @__PURE__ */ new Map(),
		language: t?.language,
		pendingLanguage: t?.language,
		isInitialLoading: !1,
		isRunning: !1
	};
}
function ve(e, t, n, r, i, a, o, s) {
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
		return C(s.onError, (e) => new fe("Tolgee: Failed to load language", e), () => l.languageStorage?.getLanguage(p()));
	}
	function T() {
		if (!l.languageDetector) return;
		let e = n();
		return C(s.onError, (e) => new de("Tolgee: Failed to detect language", e), () => l.languageDetector?.getLanguage(Object.assign({ availableLanguages: e }, p())));
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
			return C(s.onError, (e) => new fe("Tolgee: Failed to store language", e), () => l.languageStorage?.setLanguage(e, p()));
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
			var { formatEnabled: r } = n, i = me(n, ["formatEnabled"]);
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
				let n = ne(e) || N, r = t().onFormatError, a = typeof r;
				h = a === "string" ? r : a === "function" ? r(n, i) : N, h = v(h);
			}
			return h;
		}
	});
	return O;
}
var F = (e, t, n) => {
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
function ye(e, t, n) {
	let r = _e(), i, a = Object.freeze({
		init(e) {
			r = _e(e, r);
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
				let e = Object.keys(r.initialOptions.staticData).map((e) => A(e).language);
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
function be(e) {
	var { ns: t, noWrap: n, orEmpty: r, params: i, language: a } = e, o = me(e, [
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
var I = (e, ...t) => {
	let n = {}, r;
	return typeof e == "object" && e ? n = e : (n.key = e, typeof t[0] == "string" ? (n.defaultValue = t[0], r = t[1]) : typeof t[0] == "object" && (r = t[0])), r && (n = Object.assign(Object.assign({}, be(r)), n)), n;
};
function xe({ options: e }) {
	let t = le(), n = F(!1, () => o.isFetching(), t.onFetchingChange.emit), r = F(!1, () => T.isLoading(), t.onLoadingChange.emit), i = ye(t.onLanguageChange, t.onPendingLanguageChange, t.onRunningChange), a = ve(i.getLanguage, i.getInitialOptions, i.getAvailableLanguages, u, _, v, f, t), o = pe(t, a.getBackendRecord, a.getBackendDevRecord, i.withDefaultNs, i.isInitialLoading, n, r);
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
			let t = I(...e), n = v(t);
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
function Se(e) {
	let t = xe({ options: e });
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
var Ce = () => {
	let e = {
		plugins: [],
		options: {}
	}, t = Object.freeze({
		use(n) {
			return e.plugins.push(n), t;
		},
		updateDefaults(n) {
			return e.options = P(e.options, n), t;
		},
		init(t) {
			let n = Se(P(e.options, t));
			return e.plugins.forEach(n.addPlugin), n;
		}
	});
	return t;
}, we = 0, L = 1, Te = 2, Ee = class extends Error {
	constructor(e, t, n) {
		let r, i = "";
		e === we ? r = "Empty parameter" : e === L ? (r = "Unexpected character", i = "Did you forget to use FormatIcu to render ICU message syntax?") : r = "Unexpected end", super(`Tolgee parser: ${r} at ${t} in "${n}"` + (i ? "\n" + i : "")), this.code = e, this.index = t;
	}
};
function De(e) {
	return /\s/.test(e);
}
var R = 0, z = 1, B = 2, V = 3, H = 4, Oe = /* @__PURE__ */ new Set([
	B,
	z,
	R
]), U = "'", ke = /* @__PURE__ */ new Set([
	"{",
	"}",
	U
]), Ae = (e) => /[0-9a-zA-Z_]/.test(e);
function je(e) {
	let t = R, n = "", r = "", i = "", a = [], o = [], s = 0;
	function c(t) {
		throw new Ee(t, s, e);
	}
	let l = () => {
		a.push(n), n = "";
	}, u = () => {
		Ae(i) || c(L), r += i;
	}, d = () => {
		r === "" && c(we), o.push(r), r = "";
	};
	for (s = 0; s < e.length; s++) switch (i = e[s], t) {
		case R:
			i === U ? (n += i, t = z) : i === "{" ? (l(), t = V) : (n += i, t = R);
			break;
		case z:
			ke.has(i) ? (n = n.slice(0, -1) + i, t = B) : (n += i, t = R);
			break;
		case B:
			i === U ? t = R : (n += i, t = B);
			break;
		case V:
			i === "}" ? (d(), t = R) : De(i) ? r !== "" && (d(), t = H) : (u(), t = V);
			break;
		case H: i == "}" ? t = R : De(i) ? t = H : c(L);
	}
	return Oe.has(t) || c(Te), l(), [a, o];
}
function Me(e, t) {
	let [n, r] = je(e), i = [n[0]];
	for (let a = 1; a < n.length; a++) {
		let o = t?.[r[a - 1]];
		if (o === void 0) throw Error(`Missing parameter "${r[a - 1]}" in "${e}"`);
		i.push(String(o)), i.push(n[a]);
	}
	return i.join("");
}
function Ne() {
	return { format: ({ translation: e, params: t }) => Me(e, t) };
}
var Pe = () => (e, t) => (t.setFinalFormatter(Ne()), e);
function Fe() {
	return globalThis.window?.document?.createElement === void 0;
}
var Ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Le = {};
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
})(typeof window < "u" ? window : Ie);
var Re = b({
	__proto__: null,
	default: Le
}, [Le]);
(y = console.assert) == null || y.call(console, Re), RegExp(`([${["‌", "‍"].join("")}]{9})+`, "g");
function ze(e, t) {
	return t ? `${t}: ${e}` : e;
}
var W = class e extends Error {
	constructor(t, n, r) {
		super(ze(t, n)), this.code = t, this.status = n, this.params = r, Object.setPrototypeOf(this, e.prototype);
	}
};
function Be(e) {
	return e instanceof Error && typeof e.code == "string";
}
var Ve = 2, He = 35e3, Ue = "TOLGEE_API_REQUEST", We = "TOLGEE_API_RESPONSE", Ge = "TOLGEE_PROXY_PING", Ke = "TOLGEE_PROXY_PONG";
function qe(e) {
	return e === "oauth" || e === "apiKey";
}
var G = class e extends Error {
	constructor(t, n) {
		super(n), this.kind = t, this.name = "ExtensionRpcError", Object.setPrototypeOf(this, e.prototype);
	}
}, Je = 3e3, Ye = 200, Xe = 0, K = /* @__PURE__ */ new Map(), q = !1, J, Y;
async function Ze({ type: e, replyType: t, payload: n, timeoutMs: r = He, progressType: i, onProgress: a }) {
	et();
	let o = Date.now() + r;
	await tt(Math.min(o, Date.now() + Je));
	let s = o - Date.now();
	if (s <= 0) throw Qe(e);
	let c = $e();
	return new Promise((r, o) => {
		let l = setTimeout(() => {
			K.delete(c), nt(), o(Qe(e));
		}, s);
		K.set(c, {
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
var Qe = (e) => new G("unavailable", `the Tolgee browser extension did not answer ${e} in time`), $e = () => `${Date.now()}-${Xe++}-${Math.random()}`;
function et() {
	q || (q = !0, window.addEventListener("message", (e) => {
		var t;
		if (e.source !== window || e.origin !== window.location.origin) return;
		let n = e.data?.type;
		if (n === Ke) {
			Y?.();
			return;
		}
		let r = e.data?.data;
		if (typeof r?.id != "string") return;
		let i = K.get(r.id);
		if (i) {
			if (n === i.progressType) {
				(t = i.onProgress) == null || t.call(i);
				return;
			}
			n === i.replyType && (K.delete(r.id), clearTimeout(i.timer), r.error ? i.reject(new G(r.error.kind, r.error.message)) : i.resolve(r));
		}
	}));
}
function tt(e) {
	return J ||= new Promise((t, n) => {
		let r = () => window.postMessage({ type: Ge }, window.origin), i = () => {
			clearInterval(a), nt(), Y = void 0, n(new G("unavailable", "the Tolgee browser extension did not answer"));
		}, a = setInterval(() => {
			if (Date.now() > e) {
				i();
				return;
			}
			r();
		}, Ye);
		Y = () => {
			clearInterval(a), t();
		}, r();
	}), J;
}
function nt() {
	J = void 0;
}
function rt() {
	return async (e) => {
		let t = await it(e.body), n;
		try {
			n = await Ze({
				type: Ue,
				replyType: We,
				payload: {
					path: e.path,
					method: e.method,
					headers: e.headers,
					body: t
				}
			});
		} catch (e) {
			throw st(e);
		}
		if (!n.response) throw new W("fetch_error");
		return ot(n.response);
	};
}
async function it(e) {
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
		t.push(at(e).then((t) => ({
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
var at = (e) => new Promise((t, n) => {
	let r = new FileReader();
	r.onload = () => t(String(r.result).replace(/^data:[^,]*,/, "")), r.onerror = () => n(r.error), r.readAsDataURL(e);
});
function ot(e) {
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
function st(e) {
	if (Be(e)) return e;
	if (e instanceof G) switch (e.kind) {
		case "no_session": return new W("extension_session_missing", 401);
		case "too_large": return new W("extension_request_too_large");
		default: return console.warn(`Tolgee: the browser extension did not serve the request (${e.kind}): ${e.message}`), new W("fetch_error");
	}
	return new W("fetch_error");
}
var ct = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
function lt(e) {
	let t = ct.indexOf(e);
	if (t === -1) throw Error("Invalid character found: " + e);
	return t;
}
function ut(e) {
	let t = new Uint8Array(e), n = t.length, r = "", i = 2 ** 16 - 1;
	for (let e = 0; e < n; e += i) e + i > n && (i = n - e), r += String.fromCharCode.apply(null, t.subarray(e, e + i));
	return r;
}
function dt(e) {
	e = e.toUpperCase();
	let t = e.length, n = 0, r = 0, i = 0, a = new Uint8Array(t * 5 / 8 | 0);
	for (let o = 0; o < t; o++) r = r << 5 | lt(e[o]), n += 5, n >= 8 && (a[i++] = r >>> n - 8 & 255, n -= 8);
	return ut(a.buffer);
}
function ft(e) {
	if (e) try {
		let [t, n] = e.split("_");
		if (t === "tgpak") {
			let [e] = dt(n).split("_");
			return /^\d+$/.test(e) ? Number(e) : void 0;
		}
	} catch {
		console.warn("Tolgee: Api key can't be parsed");
	}
}
function pt(e) {
	if (!e) return;
	let [t] = e.split("_");
	return t === "tgpak" ? "tgpak" : t === "tgpat" ? "tgpat" : "legacy";
}
function mt(e) {
	let { apiKey: t, projectId: n, transport: r } = e;
	return r ? {
		authHeader: {},
		viaExtension: !0,
		hasCredential: !0,
		projectId: n,
		requiresExplicitProject: !0
	} : {
		authHeader: ht(t),
		viaExtension: !1,
		hasCredential: !!t,
		projectId: ft(t) ?? n,
		requiresExplicitProject: pt(t) === "tgpat"
	};
}
function ht(e) {
	return e ? { "X-API-Key": e } : {};
}
function gt(e, t) {
	let n = (n) => {
		e.includes(n.data?.type) && t(n.data?.data);
	};
	return window.addEventListener("message", n, !1), { unsubscribe() {
		window.removeEventListener("message", n);
	} };
}
function _t({ message: e, recievingMessage: t, data: n, attempts: r = 1, timeout: i = 300 }) {
	let a = !1, o = () => new Promise((r, a) => {
		let o = gt(t, c);
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
function vt() {
	let e;
	async function t(t) {
		e?.();
		let { cancel: n, promise: r } = _t({
			message: "TOLGEE_READY",
			recievingMessage: ["TOLGEE_PLUGIN_READY", "TOLGEE_PLUGIN_UPDATED"],
			data: t,
			attempts: 4
		});
		return e = n, r;
	}
	return { update: t };
}
var X = "__tolgee_", yt = `${X}apiKey`, bt = `${X}apiUrl`, xt = `${X}branch`, St = `${X}projectId`, Ct = `${X}session`, wt = "tolgee-in-context-tools.umd.min.js", Tt = "@tolgee/in-context-tools", Et = "InContextTools", Dt = "https://cdn.jsdelivr.net/npm", Ot = null;
function kt(e) {
	return Ot ||= Pt(At(e)).then(() => window[Tt][Et]), Ot;
}
function At(e) {
	return jt() || `${Dt}/@tolgee/web@${e}/dist/${wt}`;
}
function jt() {
	if (Fe()) return;
	let e = window.__TOLGEE_IN_CONTEXT_URL__;
	return Nt(e, window.location) ? e : void 0;
}
var Mt = (e) => e === "localhost" || e === "127.0.0.1" || e === "::1" || e === "[::1]";
function Nt(e, t) {
	if (!e || !Mt(t.hostname)) return !1;
	try {
		let n = new URL(e, t.href);
		return n.origin === t.origin || Mt(n.hostname);
	} catch {
		return !1;
	}
}
function Pt(e) {
	return new Promise((t, n) => {
		let r = document.createElement("script");
		r.src = e, r.addEventListener("load", () => t()), r.addEventListener("error", (e) => n(e.error)), document.head.appendChild(r);
	});
}
function Ft() {
	let e = sessionStorage.getItem(yt) || void 0, t = sessionStorage.getItem(bt) || void 0, n = sessionStorage.getItem(xt) || void 0, r = sessionStorage.getItem(St) || void 0, i = qe(sessionStorage.getItem(Ct));
	if (!t) return;
	let a = _(_({ apiUrl: t }, r === void 0 ? {} : { projectId: r }), n === void 0 ? {} : { branch: n });
	if (e) return v(_({}, a), { apiKey: e });
	if (i && r) return v(_({}, a), { transport: rt() });
}
function It() {
	let e = [];
	for (let t = 0; t < sessionStorage.length; t++) {
		let n = sessionStorage.key(t);
		n?.startsWith(X) && e.push(n);
	}
	e.forEach((e) => sessionStorage.removeItem(e));
}
function Lt(e) {
	if (!e.isDev()) return;
	let { requiresExplicitProject: t, projectId: n } = mt(e.getInitialOptions());
	t && n === void 0 && console.warn("Tolgee: `projectId` is missing from the SDK configuration. It is required when authenticating with a PAT or connecting through the Tolgee browser extension. See https://docs.tolgee.io/js-sdk/api/core_package/options#projectid");
}
function Rt(e) {
	document.readyState === "loading" ? document.addEventListener && document.addEventListener("DOMContentLoaded", e) : Promise.resolve().then(() => {
		e();
	});
}
var zt = () => (e) => e;
(() => {
	if (typeof window > "u") return !1;
	try {
		return typeof sessionStorage < "u" && sessionStorage;
	} catch (e) {
		return console.error("sessionStorage not available", e), !1;
	}
})() && (zt = () => (e) => {
	let t = vt(), n = () => {
		let t = e.getInitialOptions();
		return {
			uiPresent: !0,
			uiVersion: void 0,
			protocolVersion: Ve,
			mode: e.isDev() ? "development" : "production",
			config: {
				apiUrl: t.apiUrl || "",
				apiKey: t.transport ? "" : t.apiKey || "",
				projectId: t.projectId,
				branch: t.branch
			}
		};
	};
	return Lt(e), e.on("running", ({ value: e }) => {
		e && Rt(() => {
			t.update(n()).catch(It);
		});
	}), Ft() && (async () => {
		let e = await kt("prerelease");
		return (t) => {
			let n = Ft();
			return t.addPlugin(e({ credentials: n })), t;
		};
	})().then((t) => {
		e.addPlugin(t);
	}).catch((e) => {
		console.error("Tolgee: Failed to load in-context tools"), console.error(e);
	}), e;
});
function Bt() {
	return Ce().use(zt());
}
function Vt(e) {
	return Object.assign(Object.assign({}, e), { t(...t) {
		let n = I(...t);
		return e.t(Object.assign(Object.assign({}, n), { noWrap: !0 }));
	} });
}
function Ht(e, t, n, r = !0) {
	let [o] = s(() => Vt(e)), [c, l] = s(r);
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
			let n = e.getRequiredDescriptors(t), r = e.getAllRecords(), i = n.map((e) => j(e)).filter((e) => !r.find((t) => t?.cacheKey === e));
			i.length && console.warn(`Tolgee: Missing records in "staticData" for proper SSR functionality: ${i.map((e) => `"${e}"`).join(", ")}`);
		}
	}), c ? o : e;
}
var Ut = { useSuspense: !1 }, Wt, Gt = () => (Wt ||= e.createContext(void 0), Wt), Z = void 0, Kt = ({ tolgee: n, options: r, children: a, fallback: o, ssr: c }) => {
	i(() => {
		Z?.run !== n.run && (Z && Z.stop(), Z = n, n.run().catch((e) => {
			console.error(e);
		}).finally(() => {
			p(!1);
		}));
	}, [n]);
	let l = n, { language: u, staticData: d } = typeof c == "object" ? c : {};
	l = Ht(n, u, d, !!c);
	let [f, p] = s(!l.isLoaded()), m = Object.assign(Object.assign({}, Ut), r), h = Gt();
	return m.useSuspense ? e.createElement(h.Provider, { value: {
		tolgee: l,
		options: m
	} }, f ? o : e.createElement(t, { fallback: o || null }, a)) : e.createElement(h.Provider, { value: {
		tolgee: l,
		options: m
	} }, f ? o : a);
}, qt = () => {
	let e = Gt(), t = r(e) || void 0;
	if (!t) throw Error("Couldn't find tolgee instance, did you forgot to use `TolgeeProvider`?");
	return t;
}, Jt = () => {
	let [e, t] = s(0);
	return {
		instance: e,
		rerender: n(() => {
			t((e) => e + 1);
		}, [t])
	};
}, Yt = (e, t) => {
	let { tolgee: r, options: a } = qt(), s = E(e), c = D(s).join(":"), l = Object.assign(Object.assign({}, a), t), { rerender: u, instance: d } = Jt(), f = o([]);
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
}, Xt = (e, t) => {
	let { t: r, isLoading: i } = Yt(e, t);
	return {
		t: n((...e) => {
			let t = I(...e);
			return r(t);
		}, [r]),
		isLoading: i
	};
};
function Zt(e) {
	return Array.isArray(e) && e.length === 1 ? e[0] : e;
}
var Qt = (t) => {
	if (!t) return;
	let n = {};
	return Object.entries(t || {}).forEach(([t, r]) => {
		if (typeof r == "function") n[t] = (e) => r($(e));
		else if (e.isValidElement(r)) {
			let i = r;
			n[t] = (t) => i.props.children === void 0 && t?.length ? e.cloneElement(i, {}, $(t)) : e.cloneElement(i);
		} else n[t] = r;
	}), n;
};
function Q(e) {
	return typeof e == "function" ? e() : e;
}
var $ = (t) => {
	let n = Zt(t);
	return Array.isArray(n) ? n.map((t, n) => e.createElement(e.Fragment, { key: n }, Q(t))) : Q(n);
}, $t = (t) => {
	let n = t.keyName || t.children;
	n === void 0 && console.error("T component: keyName not defined");
	let r = t.defaultValue || (t.keyName ? t.children : void 0), i = $(t.t({
		key: n,
		params: Qt(t.params),
		defaultValue: r,
		noWrap: t.noWrap,
		ns: t.ns,
		language: t.language
	}));
	return e.createElement(e.Fragment, null, i);
}, en = (t) => {
	let { t: n } = Yt();
	return e.createElement($t, Object.assign({ t: n }, t));
}, tn = Bt().use(Pe()).init({ language: "en" });
function nn() {
	let { t: e, ...t } = Xt();
	return {
		...t,
		t: (t) => e(t)
	};
}
function rn(e) {
	return c(en, { ...e });
}
function an() {
	let { t: e } = nn(), t = [
		{
			title: e("blogList.comparingI18nLibrariesIn"),
			date: e("blogList.march152026"),
			excerpt: e("blogList.weTested12DifferentInternationalization"),
			category: e("blogList.benchmark")
		},
		{
			title: e("blogList.howToReduceYourI18n"),
			date: e("blogList.march82026"),
			excerpt: e("blogList.practicalStrategiesForOptimizingTranslation"),
			category: e("blogList.tutorial")
		},
		{
			title: e("blogList.theStateOfInternationalizationIn"),
			date: e("blogList.february282026"),
			excerpt: e("blogList.anOverviewOfTheCurrentI18n"),
			category: e("blogList.analysis")
		},
		{
			title: e("blogList.migratingFromReactI18nextTo"),
			date: e("blogList.february152026"),
			excerpt: e("blogList.aStepByStepGuideOnMigrating"),
			category: e("blogList.tutorial")
		},
		{
			title: e("blogList.serverComponentsAndI18nWhat"),
			date: e("blogList.february12026"),
			excerpt: e("blogList.reactServerComponentsIntroduceNew"),
			category: e("blogList.analysis")
		},
		{
			title: e("blogList.benchmarkMethodologyHowWe"),
			date: e("blogList.january202026"),
			excerpt: e("blogList.aTransparentLookAtOurBenchmarking"),
			category: e("blogList.meta")
		}
	];
	return c("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: t.map((e) => l("article", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [
				l("div", {
					className: "mb-3 flex items-center gap-3",
					children: [c("span", {
						className: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground",
						children: e.category
					}), c("span", {
						className: "text-xs text-muted-foreground",
						children: e.date
					})]
				}),
				c("h2", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: e.title
				}),
				c("p", {
					className: "mb-4 text-sm text-muted-foreground",
					children: e.excerpt
				}),
				l("button", {
					type: "button",
					className: "text-sm font-medium text-primary hover:underline",
					children: [c(rn, { keyName: "common.readMore" }), " →"]
				})
			]
		}, e.title))
	});
}
function on({ children: e }) {
	return c(Kt, {
		tolgee: tn,
		options: { useSuspense: !1 },
		children: e
	});
}
function sn() {
	return c(on, { children: c(an, {}) });
}
export { sn as default };
