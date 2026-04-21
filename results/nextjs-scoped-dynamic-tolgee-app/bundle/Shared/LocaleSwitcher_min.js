import e, { Suspense as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useState as s } from "react";
import { usePathname as c, useRouter as l } from "next/navigation";
import { jsx as u } from "react/jsx-runtime";
var d = Object.defineProperty, f = Object.getOwnPropertySymbols, p = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable, h = (e, t, n) => t in e ? d(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, g = (e, t) => {
	for (var n in t ||= {}) p.call(t, n) && h(e, n, t[n]);
	if (f) for (var n of f(t)) m.call(t, n) && h(e, n, t[n]);
	return e;
}, _;
function v(e, t) {
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
function y(e) {
	return !!(e && typeof e.then == "function");
}
function b(e, t) {
	return y(e) ? Promise.resolve(e).then(t) : t(e);
}
function x(e, t, n) {
	function r(n) {
		let r = t(n);
		throw e.emit(r), console.error(r), r;
	}
	try {
		let e = n();
		return y(e) ? e.catch(r) : e;
	} catch (e) {
		r(e);
	}
}
function S(e) {
	let t = (Array.isArray(e) ? e : [e]).map((e) => `'${e}'`), n = t.slice(-2).join(" or ");
	return `Tolgee: You need to specify ${[...t.slice(0, -2), n].join(", ")} option`;
}
function C(e) {
	return typeof e == "object" && !Array.isArray(e) && e !== null;
}
function w(e) {
	if (typeof e == "string") return [e];
	if (Array.isArray(e)) return e;
}
function T(e) {
	return w(e) || [];
}
function E(e, t) {
	return C(t) ? T(t?.[e]) : T(t);
}
function D(e) {
	return Array.from(new Set(e));
}
function O(e) {
	return e && e.replace(/\/+$/, "");
}
function ee(e) {
	if (typeof e == "string") return e;
	if (typeof e?.message == "string") return e.message;
}
var k = (e, t) => fetch(e, t);
function te(e) {
	return Object.fromEntries(new Headers(e).entries());
}
var ne = (e = k) => (t, n) => {
	let r = te(n?.headers);
	return r["x-api-key"] && (r = Object.assign({
		"x-tolgee-sdk-type": "JS",
		"x-tolgee-sdk-version": "prerelease"
	}, r)), e(t, Object.assign(Object.assign({}, n), { headers: r }));
}, A = (e, t) => {
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
function re(e) {
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
function ie() {
	let e = !0;
	function t() {
		return e;
	}
	let n = Object.freeze({
		onPendingLanguageChange: A("pendingLanguage", t),
		onLanguageChange: A("language", t),
		onLoadingChange: A("loading", t),
		onFetchingChange: A("fetching", t),
		onInitialLoaded: A("initialLoad", t),
		onRunningChange: A("running", t),
		onCacheChange: A("cache", t),
		onPermanentChange: A("permanentChange", t),
		onError: A("error", t),
		onUpdate: re(t),
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
var j = class extends Error {
	constructor(e, t, n = !1) {
		let { language: r, namespace: i } = e;
		super(`Tolgee: Failed to fetch record for "${r}"${i && ` and "${i}"`}`), this.cause = t, this.isDev = n, this.name = "RecordFetchError", this.language = r, this.namespace = i;
	}
}, ae = class extends Error {
	constructor(e, t) {
		super(e), this.cause = t, this.name = "LanguageDetectorError";
	}
}, M = class extends Error {
	constructor(e, t) {
		super(e), this.cause = t, this.name = "LanguageStorageError";
	}
}, N = (e) => {
	let t = /* @__PURE__ */ new Map();
	return Object.entries(e).forEach(([e, n]) => {
		if (n != null) {
			if (typeof n == "object") {
				N(n).forEach((n, r) => {
					t.set(e + "." + r, n);
				});
				return;
			}
			t.set(e, n);
		}
	}), t;
}, P = (e) => Object.fromEntries(N(e).entries()), F = (e) => {
	let [t, ...n] = e.split(":");
	return {
		language: t,
		namespace: n.join(":") || ""
	};
}, I = ({ language: e, namespace: t }) => t ? `${e}:${t}` : e;
function oe(e, t, n, r, i, a, o) {
	let s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = {}, u = 0;
	function d(t, n, r) {
		let i = I(t);
		c.set(i, {
			data: P(n),
			version: r
		}), e.onCacheChange.emit(F(i));
	}
	async function f(n) {
		function r(t) {
			let r = new j(n, t);
			throw e.onError.emit(r), console.error(r), r;
		}
		let i = t(n);
		if (y(i)) {
			let e = await i.catch(r);
			if (e !== void 0) return e;
		}
		let a = l[I(n)];
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
			let r = new j(t, n, !0);
			e.onError.emit(r), console.warn(r);
		}
		return i ||= await f(t), i;
	}
	let m = Object.freeze({
		addStaticData(e) {
			if (Array.isArray(e)) for (let t of e) {
				let e = I(t), n = c.get(e);
				(!n || n.version === 0) && d(t, P(t.data), 0);
			}
			else e && (l = Object.assign(Object.assign({}, l), e), Object.entries(e).forEach(([e, t]) => {
				if (typeof t != "function") {
					let n = F(e), r = c.get(e);
					(!r || r.version === 0) && d(n, P(t), 0);
				}
			}));
		},
		invalidate() {
			s.clear(), u += 1;
		},
		addRecord(e, t) {
			d(e, P(t), u);
		},
		exists(e, t = !1) {
			let n = c.get(I(e));
			return n && t ? n.version === u : !!n;
		},
		getRecord(e) {
			let t = r(e), n = I(t), i = c.get(n);
			if (i) return Object.assign(Object.assign({}, t), {
				cacheKey: n,
				data: i.data
			});
		},
		getAllRecords() {
			return Array.from(c.entries()).map(([e]) => m.getRecord(F(e)));
		},
		getTranslation(e, t) {
			return c.get(I(e))?.data[t];
		},
		getTranslationNs(e, t, n) {
			for (let r of e) for (let e of t) if (c.get(I({
				language: e,
				namespace: r
			}))?.data[n] != null) return [r];
			return D(e);
		},
		getTranslationFallback(e, t, n) {
			for (let r of e) for (let e of t) {
				let t = c.get(I({
					language: e,
					namespace: r
				}))?.data[n];
				if (t != null) return t;
			}
		},
		changeTranslation(t, n, r) {
			let i = c.get(I(t))?.data;
			i && (i[n] = r, e.onCacheChange.emit(Object.assign(Object.assign({}, t), { key: n })));
		},
		isFetching(e) {
			if (i()) return !0;
			if (e === void 0) return s.size > 0;
			let t = T(e);
			return !!Array.from(s.keys()).find((e) => t.includes(F(e).namespace));
		},
		isLoading(e, t) {
			let n = T(t);
			return i() ? !0 : !!Array.from(s.keys()).find((t) => {
				let r = F(t);
				return (!n.length || n.includes(r.namespace)) && !m.exists({
					namespace: r.namespace,
					language: e
				});
			});
		},
		async loadRecords(e, t) {
			let n = e.map((e) => {
				let n = r(e), i = I(n);
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
				e.promise && (e.data = P(c[0] ?? {}), c.shift());
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
function L(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
var se = {
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
}, R = "invalid", ce = {
	observerOptions: se,
	observerType: "invisible",
	onFormatError: R,
	apiUrl: "https://app.tolgee.io",
	autoLoadRequiredData: !0,
	fetch: ne(),
	onTranslationMissing: ({ key: e }) => e
}, z = (...e) => {
	let t = {};
	return e.forEach((e) => {
		t = Object.assign(Object.assign(Object.assign({}, t), e), { observerOptions: Object.assign(Object.assign({}, t.observerOptions), e?.observerOptions) });
	}), t;
};
function B(e, t) {
	let n = z(ce, t?.initialOptions, e);
	return n.apiUrl = O(n.apiUrl), e?.fetch && (n.fetch = ne(e.fetch)), {
		initialOptions: n,
		activeNamespaces: t?.activeNamespaces || /* @__PURE__ */ new Map(),
		language: t?.language,
		pendingLanguage: t?.language,
		isInitialLoading: !1,
		isRunning: !1
	};
}
function le(e, t, n, r, i, a, o, s) {
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
		return k.formatTranslation(Object.assign(Object.assign({}, e), {
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
	function S(e) {
		l.languageStorage = e;
	}
	function C(e) {
		l.languageDetector = e;
	}
	function w() {
		return x(s.onError, (e) => new M("Tolgee: Failed to load language", e), () => l.languageStorage?.getLanguage(p()));
	}
	function T() {
		if (!l.languageDetector) return;
		let e = n();
		return x(s.onError, (e) => new ae("Tolgee: Failed to detect language", e), () => l.languageDetector?.getLanguage(Object.assign({ availableLanguages: e }, p())));
	}
	function E(e) {
		e && l.backends.push(e);
	}
	function D(e) {
		l.devBackend = e;
	}
	function O(e, t) {
		t(e, Object.freeze({
			setFinalFormatter: _,
			addFormatter: g,
			setObserver: m,
			hasObserver: h,
			setUi: v,
			hasUi: y,
			setDevBackend: D,
			addBackend: E,
			setLanguageDetector: C,
			setLanguageStorage: S
		}));
	}
	let k = Object.freeze({
		addPlugin: O,
		findPositions: d,
		run() {
			var e;
			let { apiKey: n, apiUrl: r, projectId: i, branch: a, observerOptions: p, tagNewKeys: m, filterTag: h } = t();
			l.ui = c.ui?.call(c, {
				apiKey: n,
				apiUrl: r,
				projectId: i,
				branch: a,
				highlight: k.highlight,
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
			return b(w(), (t) => (!e || e.includes(t)) && t ? t : T());
		},
		setStoredLanguage(e) {
			return x(s.onError, (e) => new M("Tolgee: Failed to store language", e), () => l.languageStorage?.setLanguage(e, p()));
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
			if (!(!r || !i || !k.hasDevBackend())) return l.devBackend?.getRecord(Object.assign({
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
			return !!k.getDevBackend();
		},
		formatTranslation(n) {
			var { formatEnabled: r } = n, i = L(n, ["formatEnabled"]);
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
				let n = ee(e) || R, r = t().onFormatError, a = typeof r;
				h = a === "string" ? r : a === "function" ? r(n, i) : R, h = v(h);
			}
			return h;
		}
	});
	return k;
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
function ue(e, t, n) {
	let r = B(), i, a = Object.freeze({
		init(e) {
			r = B(e, r);
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
			T(e).forEach((e) => {
				let t = r.activeNamespaces.get(e);
				t === void 0 ? r.activeNamespaces.set(e, 1) : r.activeNamespaces.set(e, t + 1);
			});
		},
		removeActiveNs(e) {
			T(e).forEach((e) => {
				let t = r.activeNamespaces.get(e);
				t !== void 0 && t > 1 ? r.activeNamespaces.set(e, t - 1) : r.activeNamespaces.delete(e);
			});
		},
		getRequiredNamespaces() {
			return D([
				a.getDefaultNs(),
				...r.initialOptions.ns || [],
				...T(r.initialOptions.fallbackNs),
				...r.activeNamespaces.keys()
			]);
		},
		getFallbackLangs(e) {
			let t = e || a.getLanguage();
			return t ? D([t, ...E(t, r.initialOptions.fallbackLanguage)]) : [];
		},
		getFallbackNs() {
			return T(r.initialOptions.fallbackNs);
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
				let e = Object.keys(r.initialOptions.staticData).map((e) => F(e).language);
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
			i = e ? Object.assign(Object.assign({}, e), { apiUrl: O(e.apiUrl) }) : void 0;
		}
	});
	return a;
}
function de(e) {
	var { ns: t, noWrap: n, orEmpty: r, params: i, language: a } = e, o = L(e, [
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
	return typeof e == "object" && e ? n = e : (n.key = e, typeof t[0] == "string" ? (n.defaultValue = t[0], r = t[1]) : typeof t[0] == "object" && (r = t[0])), r && (n = Object.assign(Object.assign({}, de(r)), n)), n;
};
function fe({ options: e }) {
	let t = ie(), n = V(!1, () => o.isFetching(), t.onFetchingChange.emit), r = V(!1, () => E.isLoading(), t.onLoadingChange.emit), i = ue(t.onLanguageChange, t.onPendingLanguageChange, t.onRunningChange), a = le(i.getLanguage, i.getInitialOptions, i.getAvailableLanguages, u, _, v, f, t), o = oe(t, a.getBackendRecord, a.getBackendDevRecord, i.withDefaultNs, i.isInitialLoading, n, r);
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
		return D([...T(l(e)), ...c()]);
	}
	function d(e) {
		return D([...T(e ?? l()), ...i.getRequiredNamespaces()]);
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
			let e = E.getAvailableLanguages();
			if (!e) throw Error(S("availableLanguages"));
			t = e;
		}
		if (Array.isArray(e.namespaces)) n = e.namespaces;
		else if (e.namespaces === "all") {
			let e = E.getAvailableNs();
			if (!e) throw Error(S("availableNs"));
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
	function x() {
		let e = b(C(), () => {
			let e = h();
			if (e.length && i.getInitialOptions().autoLoadRequiredData) return o.loadRecords(e, { useCache: !0 });
		});
		if (y(e)) return i.setInitialLoading(!0), n.notify(), r.notify(), Promise.resolve(e).then(() => {
			i.setInitialLoading(!1), n.notify(), r.notify(), t.onInitialLoaded.emit();
		});
		t.onInitialLoaded.emit();
	}
	function C() {
		if (!i.getLanguage()) return b(a.getInitialLanguage(), (e) => {
			let t = e || i.getInitialOptions().defaultLanguage;
			t && i.setLanguage(t);
		});
	}
	function w() {
		if ((a.getLanguageDetector() || a.getLanguageStorage()) && !i.getAvailableLanguages()) throw Error(S("availableLanguages"));
		if (!i.getLanguage() && !i.getInitialOptions().defaultLanguage) throw Error(S(["defaultLanguage", "language"]));
	}
	let E = Object.freeze(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), i), a), o), {
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
			return (await E.loadRecords([e], t))[0]?.data;
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
			e?.language || await C();
			let t = m(e?.language);
			return E.loadRecords(t, e);
		},
		async loadMatrix(e) {
			let t = g(e);
			return E.loadRecords(t, e);
		},
		run() {
			return w(), i.isRunning() || (i.setRunning(!0), a.run(), s = x()), Promise.resolve(s);
		},
		stop() {
			i.isRunning() && (a.stop(), i.setRunning(!1));
		}
	}));
	return E;
}
function pe(e) {
	let t = fe({ options: e });
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
var me = () => {
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
			let n = pe(z(e.options, t));
			return e.plugins.forEach(n.addPlugin), n;
		}
	});
	return t;
}, U = 0, W = 1, he = 2, ge = class extends Error {
	constructor(e, t, n) {
		let r, i = "";
		e === U ? r = "Empty parameter" : e === W ? (r = "Unexpected character", i = "Did you forget to use FormatIcu to render ICU message syntax?") : r = "Unexpected end", super(`Tolgee parser: ${r} at ${t} in "${n}"` + (i ? "\n" + i : "")), this.code = e, this.index = t;
	}
};
function G(e) {
	return /\s/.test(e);
}
var K = 0, q = 1, J = 2, Y = 3, X = 4, _e = new Set([
	J,
	q,
	K
]), Z = "'", ve = new Set([
	"{",
	"}",
	Z
]), ye = (e) => /[0-9a-zA-Z_]/.test(e);
function be(e) {
	let t = K, n = "", r = "", i = "", a = [], o = [], s = 0;
	function c(t) {
		throw new ge(t, s, e);
	}
	let l = () => {
		a.push(n), n = "";
	}, u = () => {
		ye(i) || c(W), r += i;
	}, d = () => {
		r === "" && c(U), o.push(r), r = "";
	};
	for (s = 0; s < e.length; s++) switch (i = e[s], t) {
		case K:
			i === Z ? (n += i, t = q) : i === "{" ? (l(), t = Y) : (n += i, t = K);
			break;
		case q:
			ve.has(i) ? (n = n.slice(0, -1) + i, t = J) : (n += i, t = K);
			break;
		case J:
			i === Z ? t = K : (n += i, t = J);
			break;
		case Y:
			i === "}" ? (d(), t = K) : G(i) ? r !== "" && (d(), t = X) : (u(), t = Y);
			break;
		case X: i == "}" ? t = K : G(i) ? t = X : c(W);
	}
	return _e.has(t) || c(he), l(), [a, o];
}
function xe(e, t) {
	let [n, r] = be(e), i = [n[0]];
	for (let a = 1; a < n.length; a++) {
		let o = t?.[r[a - 1]];
		if (o === void 0) throw Error(`Missing parameter "${r[a - 1]}" in "${e}"`);
		i.push(String(o)), i.push(n[a]);
	}
	return i.join("");
}
function Se() {
	return { format: ({ translation: e, params: t }) => xe(e, t) };
}
var Ce = () => (e, t) => (t.setFinalFormatter(Se()), e), we = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Te = {};
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
})(typeof window < "u" ? window : we);
var Ee = v({
	__proto__: null,
	default: Te
}, [Te]);
(_ = console.assert) == null || _.call(console, Ee), RegExp(`([${["‌", "‍"].join("")}]{9})+`, "g");
function De(e, t) {
	let n = (n) => {
		e.includes(n.data?.type) && t(n.data?.data);
	};
	return window.addEventListener("message", n, !1), { unsubscribe() {
		window.removeEventListener("message", n);
	} };
}
function Oe({ message: e, recievingMessage: t, data: n, attempts: r = 1, timeout: i = 300 }) {
	let a = !1, o = () => new Promise((r, a) => {
		let o = De(t, c);
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
function ke() {
	let e;
	async function t(t) {
		e?.();
		let { cancel: n, promise: r } = Oe({
			message: "TOLGEE_READY",
			recievingMessage: ["TOLGEE_PLUGIN_READY", "TOLGEE_PLUGIN_UPDATED"],
			data: t,
			attempts: 4
		});
		return e = n, r;
	}
	return { update: t };
}
var Ae = "tolgee-in-context-tools.umd.min.js", je = "@tolgee/in-context-tools", Me = "InContextTools", Ne = "https://cdn.jsdelivr.net/npm";
function Pe(e) {
	return new Promise((t, n) => {
		let r = document.createElement("script");
		r.src = e, r.addEventListener("load", () => t()), r.addEventListener("error", (e) => n(e.error)), document.head.appendChild(r);
	});
}
var Fe = null;
function Ie(e) {
	return Fe ||= Pe(`${Ne}/@tolgee/web@${e}/dist/${Ae}`).then(() => window[je][Me]), Fe;
}
var Le = "__tolgee_apiKey", Re = "__tolgee_apiUrl", ze = "__tolgee_branch";
function Be() {
	let e = sessionStorage.getItem(Le) || void 0, t = sessionStorage.getItem(Re) || void 0, n = sessionStorage.getItem(ze) || void 0;
	if (!(!e || !t)) return g({
		apiKey: e,
		apiUrl: t
	}, n === void 0 ? {} : { branch: n });
}
function Ve() {
	sessionStorage.removeItem(Le), sessionStorage.removeItem(Re), sessionStorage.removeItem(ze);
}
function He(e) {
	document.readyState === "loading" ? document.addEventListener && document.addEventListener("DOMContentLoaded", e) : Promise.resolve().then(() => {
		e();
	});
}
var Ue = () => (e) => e;
(() => {
	if (typeof window > "u") return !1;
	try {
		return typeof sessionStorage < "u" && sessionStorage;
	} catch (e) {
		return console.error("sessionStorage not available", e), !1;
	}
})() && (Ue = () => (e) => {
	let t = ke(), n = () => ({
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
		e && He(() => {
			t.update(n()).catch(Ve);
		});
	}), Be() && (async () => {
		let e = await Ie("prerelease");
		return (t) => {
			let n = Be();
			return t.addPlugin(e({ credentials: n })), t;
		};
	})().then((t) => {
		e.addPlugin(t);
	}).catch((e) => {
		console.error("Tolgee: Failed to load in-context tools"), console.error(e);
	}), e;
});
function We() {
	return me().use(Ue());
}
function Ge(e) {
	return Object.assign(Object.assign({}, e), { t(...t) {
		let n = H(...t);
		return e.t(Object.assign(Object.assign({}, n), { noWrap: !0 }));
	} });
}
function Ke(e, t, n, r = !0) {
	let [a] = s(() => Ge(e)), [c, l] = s(r);
	return i(() => {
		l(!1);
	}, []), o(() => {
		r && (e.setEmitterActive(!1), e.addStaticData(n), e.changeLanguage(t), e.setEmitterActive(!0));
	}, [
		t,
		n,
		e
	]), s(() => {
		if (!e.isLoaded() && r) {
			let n = e.getRequiredDescriptors(t), r = e.getAllRecords(), i = n.map(({ namespace: e, language: t }) => e ? `${e}:${t}` : t).filter((e) => !r.find((t) => t?.cacheKey === e));
			console.warn(`Tolgee: Missing records in "staticData" for proper SSR functionality: ${i.map((e) => `"${e}"`).join(", ")}`);
		}
	}), c ? a : e;
}
var qe = { useSuspense: !1 }, Je, Ye = () => (Je ||= e.createContext(void 0), Je), Q = void 0, Xe = ({ tolgee: n, options: r, children: a, fallback: o, ssr: c }) => {
	i(() => {
		Q?.run !== n.run && (Q && Q.stop(), Q = n, n.run().catch((e) => {
			console.error(e);
		}).finally(() => {
			p(!1);
		}));
	}, [n]);
	let l = n, { language: u, staticData: d } = typeof c == "object" ? c : {};
	l = Ke(n, u, d, !!c);
	let [f, p] = s(!l.isLoaded()), m = Object.assign(Object.assign({}, qe), r), h = Ye();
	return m.useSuspense ? e.createElement(h.Provider, { value: {
		tolgee: l,
		options: m
	} }, f ? o : e.createElement(t, { fallback: o || null }, a)) : e.createElement(h.Provider, { value: {
		tolgee: l,
		options: m
	} }, f ? o : a);
}, Ze;
function Qe() {
	return Ze;
}
var $e = () => {
	let e = r(Ye()) || Qe();
	if (!e) throw Error("Couldn't find tolgee instance, did you forgot to use `TolgeeProvider`?");
	return e;
}, et = () => {
	let [e, t] = s(0);
	return {
		instance: e,
		rerender: n(() => {
			t((e) => e + 1);
		}, [t])
	};
}, tt = (e) => {
	let { tolgee: t } = $e(), { rerender: n } = et();
	return i(() => {
		let r = e?.map((e) => t.on(e, n));
		return () => {
			r?.forEach((e) => e.unsubscribe());
		};
	}, [e?.join(":")]), t;
}, nt = [
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
], rt = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
};
function it() {
	let e = tt(["language"]), t = l(), n = c(), r = e.getLanguage() || "en", i = (r) => {
		document.cookie = `NEXT_LOCALE=${r}; path=/; max-age=31536000`, e.changeLanguage(r);
		let i = n.split("/");
		i[1] = r;
		let a = i.join("/") || `/${r}`;
		console.log("newPath", a), t.push(a);
	};
	return u("div", {
		className: "flex items-center gap-2",
		children: u("select", {
			value: r,
			onChange: (e) => i(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: nt.map((e) => u("option", {
				value: e,
				children: rt(e)
			}, e))
		})
	});
}
function at() {
	return We().use(Ce());
}
var $ = at().init(), ot = ({ language: e, staticData: t, children: n }) => {
	let r = l();
	return i(() => {
		let { unsubscribe: e } = $.on("permanentChange", () => {
			r.refresh();
		}), { unsubscribe: t } = $.on("language", ({ value: e }) => {
			document.documentElement.lang = e;
		});
		return () => {
			e(), t();
		};
	}, [r]), u(Xe, {
		tolgee: $,
		ssr: {
			language: e,
			staticData: t
		},
		options: { useSuspense: !1 },
		children: n
	});
};
function st() {
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
function ct(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function lt({ children: e, locale: t, staticData: n }) {
	let [r] = s(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		ct("AppRoot", r);
	}, [r]), i(() => {
		document.documentElement.lang = t;
	}, [t]), i(() => {
		st();
	}, []), u(ot, {
		language: t,
		staticData: n,
		children: e
	});
}
var ut = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
}, dt = /* @__PURE__ */ "route.header.footer.themeToggle.hero.whyItMatters.understandingImpact.resultsTable.aboutHeader.aboutGrid.whatWeMeasure.blogHeader.blogList.careersHeader.careersBenefits.openPositions.contactHeader.contactForm.faqHeader.faqList.pricingHeader.pricingTiers.productsHeader.productsGrid.settingsHeader.profileSection.preferencesSection.apiAccessSection.settingsFooter.teamHeader.teamGrid.common.home.about.blog.careers.contact.faq.pricing.products.settings.team".split("."), ft = /* @__PURE__ */ new Map();
async function pt(e, t) {
	let n = e || "en";
	try {
		return (await ut(Object.assign({
			"./locales/de/about.json": () => import("../i18n/locales/de/about.json"),
			"./locales/de/aboutGrid.json": () => import("../i18n/locales/de/aboutGrid.json"),
			"./locales/de/aboutHeader.json": () => import("../i18n/locales/de/aboutHeader.json"),
			"./locales/de/apiAccessSection.json": () => import("../i18n/locales/de/apiAccessSection.json"),
			"./locales/de/blog.json": () => import("../i18n/locales/de/blog.json"),
			"./locales/de/blogHeader.json": () => import("../i18n/locales/de/blogHeader.json"),
			"./locales/de/blogList.json": () => import("../i18n/locales/de/blogList.json"),
			"./locales/de/careers.json": () => import("../i18n/locales/de/careers.json"),
			"./locales/de/careersBenefits.json": () => import("../i18n/locales/de/careersBenefits.json"),
			"./locales/de/careersHeader.json": () => import("../i18n/locales/de/careersHeader.json"),
			"./locales/de/common.json": () => import("../i18n/locales/de/common.json"),
			"./locales/de/contact.json": () => import("../i18n/locales/de/contact.json"),
			"./locales/de/contactForm.json": () => import("../i18n/locales/de/contactForm.json"),
			"./locales/de/contactHeader.json": () => import("../i18n/locales/de/contactHeader.json"),
			"./locales/de/faq.json": () => import("../i18n/locales/de/faq.json"),
			"./locales/de/faqHeader.json": () => import("../i18n/locales/de/faqHeader.json"),
			"./locales/de/faqList.json": () => import("../i18n/locales/de/faqList.json"),
			"./locales/de/footer.json": () => import("../i18n/locales/de/footer.json"),
			"./locales/de/header.json": () => import("../i18n/locales/de/header.json"),
			"./locales/de/hero.json": () => import("../i18n/locales/de/hero.json"),
			"./locales/de/home.json": () => import("../i18n/locales/de/home.json"),
			"./locales/de/mockBanner.json": () => import("../i18n/locales/de/mockBanner.json"),
			"./locales/de/openPositions.json": () => import("../i18n/locales/de/openPositions.json"),
			"./locales/de/preferencesSection.json": () => import("../i18n/locales/de/preferencesSection.json"),
			"./locales/de/pricing.json": () => import("../i18n/locales/de/pricing.json"),
			"./locales/de/pricingHeader.json": () => import("../i18n/locales/de/pricingHeader.json"),
			"./locales/de/pricingTiers.json": () => import("../i18n/locales/de/pricingTiers.json"),
			"./locales/de/products.json": () => import("../i18n/locales/de/products.json"),
			"./locales/de/productsGrid.json": () => import("../i18n/locales/de/productsGrid.json"),
			"./locales/de/productsHeader.json": () => import("../i18n/locales/de/productsHeader.json"),
			"./locales/de/profileSection.json": () => import("../i18n/locales/de/profileSection.json"),
			"./locales/de/resultsTable.json": () => import("../i18n/locales/de/resultsTable.json"),
			"./locales/de/route.json": () => import("../i18n/locales/de/route.json"),
			"./locales/de/settings.json": () => import("../i18n/locales/de/settings.json"),
			"./locales/de/settingsFooter.json": () => import("../i18n/locales/de/settingsFooter.json"),
			"./locales/de/settingsHeader.json": () => import("../i18n/locales/de/settingsHeader.json"),
			"./locales/de/team.json": () => import("../i18n/locales/de/team.json"),
			"./locales/de/teamGrid.json": () => import("../i18n/locales/de/teamGrid.json"),
			"./locales/de/teamHeader.json": () => import("../i18n/locales/de/teamHeader.json"),
			"./locales/de/themeToggle.json": () => import("../i18n/locales/de/themeToggle.json"),
			"./locales/de/understandingImpact.json": () => import("../i18n/locales/de/understandingImpact.json"),
			"./locales/de/whatWeMeasure.json": () => import("../i18n/locales/de/whatWeMeasure.json"),
			"./locales/de/whyItMatters.json": () => import("../i18n/locales/de/whyItMatters.json"),
			"./locales/en/about.json": () => import("./about-CYSxSXDm.js"),
			"./locales/en/aboutGrid.json": () => import("./aboutGrid-D4vPffNV.js"),
			"./locales/en/aboutHeader.json": () => import("./aboutHeader-D1fuBqnE.js"),
			"./locales/en/apiAccessSection.json": () => import("./apiAccessSection-ByHxIFcg.js"),
			"./locales/en/blog.json": () => import("./blog-DFz26yM5.js"),
			"./locales/en/blogHeader.json": () => import("./blogHeader-C7lLXU93.js"),
			"./locales/en/blogList.json": () => import("./blogList-0RrrWGsG.js"),
			"./locales/en/careers.json": () => import("./careers-jWOoSozk.js"),
			"./locales/en/careersBenefits.json": () => import("./careersBenefits-2eVKFUN0.js"),
			"./locales/en/careersHeader.json": () => import("./careersHeader-DGXaOrHD.js"),
			"./locales/en/common.json": () => import("./common-CGSk35qm.js"),
			"./locales/en/contact.json": () => import("./contact-nl5yHgma.js"),
			"./locales/en/contactForm.json": () => import("./contactForm-IWAqD7Wg.js"),
			"./locales/en/contactHeader.json": () => import("./contactHeader-CHJEAa9s.js"),
			"./locales/en/faq.json": () => import("./faq-C_7lkibE.js"),
			"./locales/en/faqHeader.json": () => import("./faqHeader-Dptm1LLb.js"),
			"./locales/en/faqList.json": () => import("./faqList-xaG4sIKo.js"),
			"./locales/en/footer.json": () => import("./footer-CzmLezFA.js"),
			"./locales/en/header.json": () => import("./header-lKwGzuOy.js"),
			"./locales/en/hero.json": () => import("./hero-6yrKIQl5.js"),
			"./locales/en/home.json": () => import("./home-nT8o-_8S.js"),
			"./locales/en/mockBanner.json": () => import("./mockBanner-DgOs9Xzy.js"),
			"./locales/en/openPositions.json": () => import("./openPositions-D5nmiH3v.js"),
			"./locales/en/preferencesSection.json": () => import("./preferencesSection-dKYJTCNu.js"),
			"./locales/en/pricing.json": () => import("./pricing-CPRDOme2.js"),
			"./locales/en/pricingHeader.json": () => import("./pricingHeader-DhsC1t-N.js"),
			"./locales/en/pricingTiers.json": () => import("./pricingTiers-CAcHPS-D.js"),
			"./locales/en/products.json": () => import("./products-78JPZm8t.js"),
			"./locales/en/productsGrid.json": () => import("./productsGrid-ZyGf7_RF.js"),
			"./locales/en/productsHeader.json": () => import("./productsHeader-CV1CdZx6.js"),
			"./locales/en/profileSection.json": () => import("./profileSection-BgjQLxx_.js"),
			"./locales/en/resultsTable.json": () => import("./resultsTable-DgHq-pwz.js"),
			"./locales/en/route.json": () => import("./route-DX08pDve.js"),
			"./locales/en/settings.json": () => import("./settings-B3MkmebQ.js"),
			"./locales/en/settingsFooter.json": () => import("./settingsFooter-CXR3xesh.js"),
			"./locales/en/settingsHeader.json": () => import("./settingsHeader-CedCA7kD.js"),
			"./locales/en/team.json": () => import("./team-CwrE-KxY.js"),
			"./locales/en/teamGrid.json": () => import("./teamGrid-Bkk4VAaF.js"),
			"./locales/en/teamHeader.json": () => import("./teamHeader-B92AT_0O.js"),
			"./locales/en/themeToggle.json": () => import("./themeToggle-yKadWvF2.js"),
			"./locales/en/understandingImpact.json": () => import("./understandingImpact-hVXFwrmU.js"),
			"./locales/en/whatWeMeasure.json": () => import("./whatWeMeasure-GfzGtKc1.js"),
			"./locales/en/whyItMatters.json": () => import("./whyItMatters-RQ-qni_M.js"),
			"./locales/es/about.json": () => import("../i18n/locales/es/about.json"),
			"./locales/es/aboutGrid.json": () => import("../i18n/locales/es/aboutGrid.json"),
			"./locales/es/aboutHeader.json": () => import("../i18n/locales/es/aboutHeader.json"),
			"./locales/es/apiAccessSection.json": () => import("../i18n/locales/es/apiAccessSection.json"),
			"./locales/es/blog.json": () => import("../i18n/locales/es/blog.json"),
			"./locales/es/blogHeader.json": () => import("../i18n/locales/es/blogHeader.json"),
			"./locales/es/blogList.json": () => import("../i18n/locales/es/blogList.json"),
			"./locales/es/careers.json": () => import("../i18n/locales/es/careers.json"),
			"./locales/es/careersBenefits.json": () => import("../i18n/locales/es/careersBenefits.json"),
			"./locales/es/careersHeader.json": () => import("../i18n/locales/es/careersHeader.json"),
			"./locales/es/common.json": () => import("../i18n/locales/es/common.json"),
			"./locales/es/contact.json": () => import("../i18n/locales/es/contact.json"),
			"./locales/es/contactForm.json": () => import("../i18n/locales/es/contactForm.json"),
			"./locales/es/contactHeader.json": () => import("../i18n/locales/es/contactHeader.json"),
			"./locales/es/faq.json": () => import("../i18n/locales/es/faq.json"),
			"./locales/es/faqHeader.json": () => import("../i18n/locales/es/faqHeader.json"),
			"./locales/es/faqList.json": () => import("../i18n/locales/es/faqList.json"),
			"./locales/es/footer.json": () => import("../i18n/locales/es/footer.json"),
			"./locales/es/header.json": () => import("../i18n/locales/es/header.json"),
			"./locales/es/hero.json": () => import("../i18n/locales/es/hero.json"),
			"./locales/es/home.json": () => import("../i18n/locales/es/home.json"),
			"./locales/es/mockBanner.json": () => import("../i18n/locales/es/mockBanner.json"),
			"./locales/es/openPositions.json": () => import("../i18n/locales/es/openPositions.json"),
			"./locales/es/preferencesSection.json": () => import("../i18n/locales/es/preferencesSection.json"),
			"./locales/es/pricing.json": () => import("../i18n/locales/es/pricing.json"),
			"./locales/es/pricingHeader.json": () => import("../i18n/locales/es/pricingHeader.json"),
			"./locales/es/pricingTiers.json": () => import("../i18n/locales/es/pricingTiers.json"),
			"./locales/es/products.json": () => import("../i18n/locales/es/products.json"),
			"./locales/es/productsGrid.json": () => import("../i18n/locales/es/productsGrid.json"),
			"./locales/es/productsHeader.json": () => import("../i18n/locales/es/productsHeader.json"),
			"./locales/es/profileSection.json": () => import("../i18n/locales/es/profileSection.json"),
			"./locales/es/resultsTable.json": () => import("../i18n/locales/es/resultsTable.json"),
			"./locales/es/route.json": () => import("../i18n/locales/es/route.json"),
			"./locales/es/settings.json": () => import("../i18n/locales/es/settings.json"),
			"./locales/es/settingsFooter.json": () => import("../i18n/locales/es/settingsFooter.json"),
			"./locales/es/settingsHeader.json": () => import("../i18n/locales/es/settingsHeader.json"),
			"./locales/es/team.json": () => import("../i18n/locales/es/team.json"),
			"./locales/es/teamGrid.json": () => import("../i18n/locales/es/teamGrid.json"),
			"./locales/es/teamHeader.json": () => import("../i18n/locales/es/teamHeader.json"),
			"./locales/es/themeToggle.json": () => import("../i18n/locales/es/themeToggle.json"),
			"./locales/es/understandingImpact.json": () => import("../i18n/locales/es/understandingImpact.json"),
			"./locales/es/whatWeMeasure.json": () => import("../i18n/locales/es/whatWeMeasure.json"),
			"./locales/es/whyItMatters.json": () => import("../i18n/locales/es/whyItMatters.json"),
			"./locales/fr/about.json": () => import("../i18n/locales/fr/about.json"),
			"./locales/fr/aboutGrid.json": () => import("../i18n/locales/fr/aboutGrid.json"),
			"./locales/fr/aboutHeader.json": () => import("../i18n/locales/fr/aboutHeader.json"),
			"./locales/fr/apiAccessSection.json": () => import("../i18n/locales/fr/apiAccessSection.json"),
			"./locales/fr/blog.json": () => import("../i18n/locales/fr/blog.json"),
			"./locales/fr/blogHeader.json": () => import("../i18n/locales/fr/blogHeader.json"),
			"./locales/fr/blogList.json": () => import("../i18n/locales/fr/blogList.json"),
			"./locales/fr/careers.json": () => import("../i18n/locales/fr/careers.json"),
			"./locales/fr/careersBenefits.json": () => import("../i18n/locales/fr/careersBenefits.json"),
			"./locales/fr/careersHeader.json": () => import("../i18n/locales/fr/careersHeader.json"),
			"./locales/fr/common.json": () => import("../i18n/locales/fr/common.json"),
			"./locales/fr/contact.json": () => import("../i18n/locales/fr/contact.json"),
			"./locales/fr/contactForm.json": () => import("../i18n/locales/fr/contactForm.json"),
			"./locales/fr/contactHeader.json": () => import("../i18n/locales/fr/contactHeader.json"),
			"./locales/fr/faq.json": () => import("../i18n/locales/fr/faq.json"),
			"./locales/fr/faqHeader.json": () => import("../i18n/locales/fr/faqHeader.json"),
			"./locales/fr/faqList.json": () => import("../i18n/locales/fr/faqList.json"),
			"./locales/fr/footer.json": () => import("../i18n/locales/fr/footer.json"),
			"./locales/fr/header.json": () => import("../i18n/locales/fr/header.json"),
			"./locales/fr/hero.json": () => import("../i18n/locales/fr/hero.json"),
			"./locales/fr/home.json": () => import("../i18n/locales/fr/home.json"),
			"./locales/fr/mockBanner.json": () => import("../i18n/locales/fr/mockBanner.json"),
			"./locales/fr/openPositions.json": () => import("../i18n/locales/fr/openPositions.json"),
			"./locales/fr/preferencesSection.json": () => import("../i18n/locales/fr/preferencesSection.json"),
			"./locales/fr/pricing.json": () => import("../i18n/locales/fr/pricing.json"),
			"./locales/fr/pricingHeader.json": () => import("../i18n/locales/fr/pricingHeader.json"),
			"./locales/fr/pricingTiers.json": () => import("../i18n/locales/fr/pricingTiers.json"),
			"./locales/fr/products.json": () => import("../i18n/locales/fr/products.json"),
			"./locales/fr/productsGrid.json": () => import("../i18n/locales/fr/productsGrid.json"),
			"./locales/fr/productsHeader.json": () => import("../i18n/locales/fr/productsHeader.json"),
			"./locales/fr/profileSection.json": () => import("../i18n/locales/fr/profileSection.json"),
			"./locales/fr/resultsTable.json": () => import("../i18n/locales/fr/resultsTable.json"),
			"./locales/fr/route.json": () => import("../i18n/locales/fr/route.json"),
			"./locales/fr/settings.json": () => import("../i18n/locales/fr/settings.json"),
			"./locales/fr/settingsFooter.json": () => import("../i18n/locales/fr/settingsFooter.json"),
			"./locales/fr/settingsHeader.json": () => import("../i18n/locales/fr/settingsHeader.json"),
			"./locales/fr/team.json": () => import("../i18n/locales/fr/team.json"),
			"./locales/fr/teamGrid.json": () => import("../i18n/locales/fr/teamGrid.json"),
			"./locales/fr/teamHeader.json": () => import("../i18n/locales/fr/teamHeader.json"),
			"./locales/fr/themeToggle.json": () => import("../i18n/locales/fr/themeToggle.json"),
			"./locales/fr/understandingImpact.json": () => import("../i18n/locales/fr/understandingImpact.json"),
			"./locales/fr/whatWeMeasure.json": () => import("../i18n/locales/fr/whatWeMeasure.json"),
			"./locales/fr/whyItMatters.json": () => import("../i18n/locales/fr/whyItMatters.json"),
			"./locales/it/about.json": () => import("../i18n/locales/it/about.json"),
			"./locales/it/aboutGrid.json": () => import("../i18n/locales/it/aboutGrid.json"),
			"./locales/it/aboutHeader.json": () => import("../i18n/locales/it/aboutHeader.json"),
			"./locales/it/apiAccessSection.json": () => import("../i18n/locales/it/apiAccessSection.json"),
			"./locales/it/blog.json": () => import("../i18n/locales/it/blog.json"),
			"./locales/it/blogHeader.json": () => import("../i18n/locales/it/blogHeader.json"),
			"./locales/it/blogList.json": () => import("../i18n/locales/it/blogList.json"),
			"./locales/it/careers.json": () => import("../i18n/locales/it/careers.json"),
			"./locales/it/careersBenefits.json": () => import("../i18n/locales/it/careersBenefits.json"),
			"./locales/it/careersHeader.json": () => import("../i18n/locales/it/careersHeader.json"),
			"./locales/it/common.json": () => import("../i18n/locales/it/common.json"),
			"./locales/it/contact.json": () => import("../i18n/locales/it/contact.json"),
			"./locales/it/contactForm.json": () => import("../i18n/locales/it/contactForm.json"),
			"./locales/it/contactHeader.json": () => import("../i18n/locales/it/contactHeader.json"),
			"./locales/it/faq.json": () => import("../i18n/locales/it/faq.json"),
			"./locales/it/faqHeader.json": () => import("../i18n/locales/it/faqHeader.json"),
			"./locales/it/faqList.json": () => import("../i18n/locales/it/faqList.json"),
			"./locales/it/footer.json": () => import("../i18n/locales/it/footer.json"),
			"./locales/it/header.json": () => import("../i18n/locales/it/header.json"),
			"./locales/it/hero.json": () => import("../i18n/locales/it/hero.json"),
			"./locales/it/home.json": () => import("../i18n/locales/it/home.json"),
			"./locales/it/mockBanner.json": () => import("../i18n/locales/it/mockBanner.json"),
			"./locales/it/openPositions.json": () => import("../i18n/locales/it/openPositions.json"),
			"./locales/it/preferencesSection.json": () => import("../i18n/locales/it/preferencesSection.json"),
			"./locales/it/pricing.json": () => import("../i18n/locales/it/pricing.json"),
			"./locales/it/pricingHeader.json": () => import("../i18n/locales/it/pricingHeader.json"),
			"./locales/it/pricingTiers.json": () => import("../i18n/locales/it/pricingTiers.json"),
			"./locales/it/products.json": () => import("../i18n/locales/it/products.json"),
			"./locales/it/productsGrid.json": () => import("../i18n/locales/it/productsGrid.json"),
			"./locales/it/productsHeader.json": () => import("../i18n/locales/it/productsHeader.json"),
			"./locales/it/profileSection.json": () => import("../i18n/locales/it/profileSection.json"),
			"./locales/it/resultsTable.json": () => import("../i18n/locales/it/resultsTable.json"),
			"./locales/it/route.json": () => import("../i18n/locales/it/route.json"),
			"./locales/it/settings.json": () => import("../i18n/locales/it/settings.json"),
			"./locales/it/settingsFooter.json": () => import("../i18n/locales/it/settingsFooter.json"),
			"./locales/it/settingsHeader.json": () => import("../i18n/locales/it/settingsHeader.json"),
			"./locales/it/team.json": () => import("../i18n/locales/it/team.json"),
			"./locales/it/teamGrid.json": () => import("../i18n/locales/it/teamGrid.json"),
			"./locales/it/teamHeader.json": () => import("../i18n/locales/it/teamHeader.json"),
			"./locales/it/themeToggle.json": () => import("../i18n/locales/it/themeToggle.json"),
			"./locales/it/understandingImpact.json": () => import("../i18n/locales/it/understandingImpact.json"),
			"./locales/it/whatWeMeasure.json": () => import("../i18n/locales/it/whatWeMeasure.json"),
			"./locales/it/whyItMatters.json": () => import("../i18n/locales/it/whyItMatters.json"),
			"./locales/ja/about.json": () => import("../i18n/locales/ja/about.json"),
			"./locales/ja/aboutGrid.json": () => import("../i18n/locales/ja/aboutGrid.json"),
			"./locales/ja/aboutHeader.json": () => import("../i18n/locales/ja/aboutHeader.json"),
			"./locales/ja/apiAccessSection.json": () => import("../i18n/locales/ja/apiAccessSection.json"),
			"./locales/ja/blog.json": () => import("../i18n/locales/ja/blog.json"),
			"./locales/ja/blogHeader.json": () => import("../i18n/locales/ja/blogHeader.json"),
			"./locales/ja/blogList.json": () => import("../i18n/locales/ja/blogList.json"),
			"./locales/ja/careers.json": () => import("../i18n/locales/ja/careers.json"),
			"./locales/ja/careersBenefits.json": () => import("../i18n/locales/ja/careersBenefits.json"),
			"./locales/ja/careersHeader.json": () => import("../i18n/locales/ja/careersHeader.json"),
			"./locales/ja/common.json": () => import("../i18n/locales/ja/common.json"),
			"./locales/ja/contact.json": () => import("../i18n/locales/ja/contact.json"),
			"./locales/ja/contactForm.json": () => import("../i18n/locales/ja/contactForm.json"),
			"./locales/ja/contactHeader.json": () => import("../i18n/locales/ja/contactHeader.json"),
			"./locales/ja/faq.json": () => import("../i18n/locales/ja/faq.json"),
			"./locales/ja/faqHeader.json": () => import("../i18n/locales/ja/faqHeader.json"),
			"./locales/ja/faqList.json": () => import("../i18n/locales/ja/faqList.json"),
			"./locales/ja/footer.json": () => import("../i18n/locales/ja/footer.json"),
			"./locales/ja/header.json": () => import("../i18n/locales/ja/header.json"),
			"./locales/ja/hero.json": () => import("../i18n/locales/ja/hero.json"),
			"./locales/ja/home.json": () => import("../i18n/locales/ja/home.json"),
			"./locales/ja/mockBanner.json": () => import("../i18n/locales/ja/mockBanner.json"),
			"./locales/ja/openPositions.json": () => import("../i18n/locales/ja/openPositions.json"),
			"./locales/ja/preferencesSection.json": () => import("../i18n/locales/ja/preferencesSection.json"),
			"./locales/ja/pricing.json": () => import("../i18n/locales/ja/pricing.json"),
			"./locales/ja/pricingHeader.json": () => import("../i18n/locales/ja/pricingHeader.json"),
			"./locales/ja/pricingTiers.json": () => import("../i18n/locales/ja/pricingTiers.json"),
			"./locales/ja/products.json": () => import("../i18n/locales/ja/products.json"),
			"./locales/ja/productsGrid.json": () => import("../i18n/locales/ja/productsGrid.json"),
			"./locales/ja/productsHeader.json": () => import("../i18n/locales/ja/productsHeader.json"),
			"./locales/ja/profileSection.json": () => import("../i18n/locales/ja/profileSection.json"),
			"./locales/ja/resultsTable.json": () => import("../i18n/locales/ja/resultsTable.json"),
			"./locales/ja/route.json": () => import("../i18n/locales/ja/route.json"),
			"./locales/ja/settings.json": () => import("../i18n/locales/ja/settings.json"),
			"./locales/ja/settingsFooter.json": () => import("../i18n/locales/ja/settingsFooter.json"),
			"./locales/ja/settingsHeader.json": () => import("../i18n/locales/ja/settingsHeader.json"),
			"./locales/ja/team.json": () => import("../i18n/locales/ja/team.json"),
			"./locales/ja/teamGrid.json": () => import("../i18n/locales/ja/teamGrid.json"),
			"./locales/ja/teamHeader.json": () => import("../i18n/locales/ja/teamHeader.json"),
			"./locales/ja/themeToggle.json": () => import("../i18n/locales/ja/themeToggle.json"),
			"./locales/ja/understandingImpact.json": () => import("../i18n/locales/ja/understandingImpact.json"),
			"./locales/ja/whatWeMeasure.json": () => import("../i18n/locales/ja/whatWeMeasure.json"),
			"./locales/ja/whyItMatters.json": () => import("../i18n/locales/ja/whyItMatters.json"),
			"./locales/ko/about.json": () => import("../i18n/locales/ko/about.json"),
			"./locales/ko/aboutGrid.json": () => import("../i18n/locales/ko/aboutGrid.json"),
			"./locales/ko/aboutHeader.json": () => import("../i18n/locales/ko/aboutHeader.json"),
			"./locales/ko/apiAccessSection.json": () => import("../i18n/locales/ko/apiAccessSection.json"),
			"./locales/ko/blog.json": () => import("../i18n/locales/ko/blog.json"),
			"./locales/ko/blogHeader.json": () => import("../i18n/locales/ko/blogHeader.json"),
			"./locales/ko/blogList.json": () => import("../i18n/locales/ko/blogList.json"),
			"./locales/ko/careers.json": () => import("../i18n/locales/ko/careers.json"),
			"./locales/ko/careersBenefits.json": () => import("../i18n/locales/ko/careersBenefits.json"),
			"./locales/ko/careersHeader.json": () => import("../i18n/locales/ko/careersHeader.json"),
			"./locales/ko/common.json": () => import("../i18n/locales/ko/common.json"),
			"./locales/ko/contact.json": () => import("../i18n/locales/ko/contact.json"),
			"./locales/ko/contactForm.json": () => import("../i18n/locales/ko/contactForm.json"),
			"./locales/ko/contactHeader.json": () => import("../i18n/locales/ko/contactHeader.json"),
			"./locales/ko/faq.json": () => import("../i18n/locales/ko/faq.json"),
			"./locales/ko/faqHeader.json": () => import("../i18n/locales/ko/faqHeader.json"),
			"./locales/ko/faqList.json": () => import("../i18n/locales/ko/faqList.json"),
			"./locales/ko/footer.json": () => import("../i18n/locales/ko/footer.json"),
			"./locales/ko/header.json": () => import("../i18n/locales/ko/header.json"),
			"./locales/ko/hero.json": () => import("../i18n/locales/ko/hero.json"),
			"./locales/ko/home.json": () => import("../i18n/locales/ko/home.json"),
			"./locales/ko/mockBanner.json": () => import("../i18n/locales/ko/mockBanner.json"),
			"./locales/ko/openPositions.json": () => import("../i18n/locales/ko/openPositions.json"),
			"./locales/ko/preferencesSection.json": () => import("../i18n/locales/ko/preferencesSection.json"),
			"./locales/ko/pricing.json": () => import("../i18n/locales/ko/pricing.json"),
			"./locales/ko/pricingHeader.json": () => import("../i18n/locales/ko/pricingHeader.json"),
			"./locales/ko/pricingTiers.json": () => import("../i18n/locales/ko/pricingTiers.json"),
			"./locales/ko/products.json": () => import("../i18n/locales/ko/products.json"),
			"./locales/ko/productsGrid.json": () => import("../i18n/locales/ko/productsGrid.json"),
			"./locales/ko/productsHeader.json": () => import("../i18n/locales/ko/productsHeader.json"),
			"./locales/ko/profileSection.json": () => import("../i18n/locales/ko/profileSection.json"),
			"./locales/ko/resultsTable.json": () => import("../i18n/locales/ko/resultsTable.json"),
			"./locales/ko/route.json": () => import("../i18n/locales/ko/route.json"),
			"./locales/ko/settings.json": () => import("../i18n/locales/ko/settings.json"),
			"./locales/ko/settingsFooter.json": () => import("../i18n/locales/ko/settingsFooter.json"),
			"./locales/ko/settingsHeader.json": () => import("../i18n/locales/ko/settingsHeader.json"),
			"./locales/ko/team.json": () => import("../i18n/locales/ko/team.json"),
			"./locales/ko/teamGrid.json": () => import("../i18n/locales/ko/teamGrid.json"),
			"./locales/ko/teamHeader.json": () => import("../i18n/locales/ko/teamHeader.json"),
			"./locales/ko/themeToggle.json": () => import("../i18n/locales/ko/themeToggle.json"),
			"./locales/ko/understandingImpact.json": () => import("../i18n/locales/ko/understandingImpact.json"),
			"./locales/ko/whatWeMeasure.json": () => import("../i18n/locales/ko/whatWeMeasure.json"),
			"./locales/ko/whyItMatters.json": () => import("../i18n/locales/ko/whyItMatters.json"),
			"./locales/pt/about.json": () => import("../i18n/locales/pt/about.json"),
			"./locales/pt/aboutGrid.json": () => import("../i18n/locales/pt/aboutGrid.json"),
			"./locales/pt/aboutHeader.json": () => import("../i18n/locales/pt/aboutHeader.json"),
			"./locales/pt/apiAccessSection.json": () => import("../i18n/locales/pt/apiAccessSection.json"),
			"./locales/pt/blog.json": () => import("../i18n/locales/pt/blog.json"),
			"./locales/pt/blogHeader.json": () => import("../i18n/locales/pt/blogHeader.json"),
			"./locales/pt/blogList.json": () => import("../i18n/locales/pt/blogList.json"),
			"./locales/pt/careers.json": () => import("../i18n/locales/pt/careers.json"),
			"./locales/pt/careersBenefits.json": () => import("../i18n/locales/pt/careersBenefits.json"),
			"./locales/pt/careersHeader.json": () => import("../i18n/locales/pt/careersHeader.json"),
			"./locales/pt/common.json": () => import("../i18n/locales/pt/common.json"),
			"./locales/pt/contact.json": () => import("../i18n/locales/pt/contact.json"),
			"./locales/pt/contactForm.json": () => import("../i18n/locales/pt/contactForm.json"),
			"./locales/pt/contactHeader.json": () => import("../i18n/locales/pt/contactHeader.json"),
			"./locales/pt/faq.json": () => import("../i18n/locales/pt/faq.json"),
			"./locales/pt/faqHeader.json": () => import("../i18n/locales/pt/faqHeader.json"),
			"./locales/pt/faqList.json": () => import("../i18n/locales/pt/faqList.json"),
			"./locales/pt/footer.json": () => import("../i18n/locales/pt/footer.json"),
			"./locales/pt/header.json": () => import("../i18n/locales/pt/header.json"),
			"./locales/pt/hero.json": () => import("../i18n/locales/pt/hero.json"),
			"./locales/pt/home.json": () => import("../i18n/locales/pt/home.json"),
			"./locales/pt/mockBanner.json": () => import("../i18n/locales/pt/mockBanner.json"),
			"./locales/pt/openPositions.json": () => import("../i18n/locales/pt/openPositions.json"),
			"./locales/pt/preferencesSection.json": () => import("../i18n/locales/pt/preferencesSection.json"),
			"./locales/pt/pricing.json": () => import("../i18n/locales/pt/pricing.json"),
			"./locales/pt/pricingHeader.json": () => import("../i18n/locales/pt/pricingHeader.json"),
			"./locales/pt/pricingTiers.json": () => import("../i18n/locales/pt/pricingTiers.json"),
			"./locales/pt/products.json": () => import("../i18n/locales/pt/products.json"),
			"./locales/pt/productsGrid.json": () => import("../i18n/locales/pt/productsGrid.json"),
			"./locales/pt/productsHeader.json": () => import("../i18n/locales/pt/productsHeader.json"),
			"./locales/pt/profileSection.json": () => import("../i18n/locales/pt/profileSection.json"),
			"./locales/pt/resultsTable.json": () => import("../i18n/locales/pt/resultsTable.json"),
			"./locales/pt/route.json": () => import("../i18n/locales/pt/route.json"),
			"./locales/pt/settings.json": () => import("../i18n/locales/pt/settings.json"),
			"./locales/pt/settingsFooter.json": () => import("../i18n/locales/pt/settingsFooter.json"),
			"./locales/pt/settingsHeader.json": () => import("../i18n/locales/pt/settingsHeader.json"),
			"./locales/pt/team.json": () => import("../i18n/locales/pt/team.json"),
			"./locales/pt/teamGrid.json": () => import("../i18n/locales/pt/teamGrid.json"),
			"./locales/pt/teamHeader.json": () => import("../i18n/locales/pt/teamHeader.json"),
			"./locales/pt/themeToggle.json": () => import("../i18n/locales/pt/themeToggle.json"),
			"./locales/pt/understandingImpact.json": () => import("../i18n/locales/pt/understandingImpact.json"),
			"./locales/pt/whatWeMeasure.json": () => import("../i18n/locales/pt/whatWeMeasure.json"),
			"./locales/pt/whyItMatters.json": () => import("../i18n/locales/pt/whyItMatters.json"),
			"./locales/ru/about.json": () => import("../i18n/locales/ru/about.json"),
			"./locales/ru/aboutGrid.json": () => import("../i18n/locales/ru/aboutGrid.json"),
			"./locales/ru/aboutHeader.json": () => import("../i18n/locales/ru/aboutHeader.json"),
			"./locales/ru/apiAccessSection.json": () => import("../i18n/locales/ru/apiAccessSection.json"),
			"./locales/ru/blog.json": () => import("../i18n/locales/ru/blog.json"),
			"./locales/ru/blogHeader.json": () => import("../i18n/locales/ru/blogHeader.json"),
			"./locales/ru/blogList.json": () => import("../i18n/locales/ru/blogList.json"),
			"./locales/ru/careers.json": () => import("../i18n/locales/ru/careers.json"),
			"./locales/ru/careersBenefits.json": () => import("../i18n/locales/ru/careersBenefits.json"),
			"./locales/ru/careersHeader.json": () => import("../i18n/locales/ru/careersHeader.json"),
			"./locales/ru/common.json": () => import("../i18n/locales/ru/common.json"),
			"./locales/ru/contact.json": () => import("../i18n/locales/ru/contact.json"),
			"./locales/ru/contactForm.json": () => import("../i18n/locales/ru/contactForm.json"),
			"./locales/ru/contactHeader.json": () => import("../i18n/locales/ru/contactHeader.json"),
			"./locales/ru/faq.json": () => import("../i18n/locales/ru/faq.json"),
			"./locales/ru/faqHeader.json": () => import("../i18n/locales/ru/faqHeader.json"),
			"./locales/ru/faqList.json": () => import("../i18n/locales/ru/faqList.json"),
			"./locales/ru/footer.json": () => import("../i18n/locales/ru/footer.json"),
			"./locales/ru/header.json": () => import("../i18n/locales/ru/header.json"),
			"./locales/ru/hero.json": () => import("../i18n/locales/ru/hero.json"),
			"./locales/ru/home.json": () => import("../i18n/locales/ru/home.json"),
			"./locales/ru/mockBanner.json": () => import("../i18n/locales/ru/mockBanner.json"),
			"./locales/ru/openPositions.json": () => import("../i18n/locales/ru/openPositions.json"),
			"./locales/ru/preferencesSection.json": () => import("../i18n/locales/ru/preferencesSection.json"),
			"./locales/ru/pricing.json": () => import("../i18n/locales/ru/pricing.json"),
			"./locales/ru/pricingHeader.json": () => import("../i18n/locales/ru/pricingHeader.json"),
			"./locales/ru/pricingTiers.json": () => import("../i18n/locales/ru/pricingTiers.json"),
			"./locales/ru/products.json": () => import("../i18n/locales/ru/products.json"),
			"./locales/ru/productsGrid.json": () => import("../i18n/locales/ru/productsGrid.json"),
			"./locales/ru/productsHeader.json": () => import("../i18n/locales/ru/productsHeader.json"),
			"./locales/ru/profileSection.json": () => import("../i18n/locales/ru/profileSection.json"),
			"./locales/ru/resultsTable.json": () => import("../i18n/locales/ru/resultsTable.json"),
			"./locales/ru/route.json": () => import("../i18n/locales/ru/route.json"),
			"./locales/ru/settings.json": () => import("../i18n/locales/ru/settings.json"),
			"./locales/ru/settingsFooter.json": () => import("../i18n/locales/ru/settingsFooter.json"),
			"./locales/ru/settingsHeader.json": () => import("../i18n/locales/ru/settingsHeader.json"),
			"./locales/ru/team.json": () => import("../i18n/locales/ru/team.json"),
			"./locales/ru/teamGrid.json": () => import("../i18n/locales/ru/teamGrid.json"),
			"./locales/ru/teamHeader.json": () => import("../i18n/locales/ru/teamHeader.json"),
			"./locales/ru/themeToggle.json": () => import("../i18n/locales/ru/themeToggle.json"),
			"./locales/ru/understandingImpact.json": () => import("../i18n/locales/ru/understandingImpact.json"),
			"./locales/ru/whatWeMeasure.json": () => import("../i18n/locales/ru/whatWeMeasure.json"),
			"./locales/ru/whyItMatters.json": () => import("../i18n/locales/ru/whyItMatters.json"),
			"./locales/zh/about.json": () => import("../i18n/locales/zh/about.json"),
			"./locales/zh/aboutGrid.json": () => import("../i18n/locales/zh/aboutGrid.json"),
			"./locales/zh/aboutHeader.json": () => import("../i18n/locales/zh/aboutHeader.json"),
			"./locales/zh/apiAccessSection.json": () => import("../i18n/locales/zh/apiAccessSection.json"),
			"./locales/zh/blog.json": () => import("../i18n/locales/zh/blog.json"),
			"./locales/zh/blogHeader.json": () => import("../i18n/locales/zh/blogHeader.json"),
			"./locales/zh/blogList.json": () => import("../i18n/locales/zh/blogList.json"),
			"./locales/zh/careers.json": () => import("../i18n/locales/zh/careers.json"),
			"./locales/zh/careersBenefits.json": () => import("../i18n/locales/zh/careersBenefits.json"),
			"./locales/zh/careersHeader.json": () => import("../i18n/locales/zh/careersHeader.json"),
			"./locales/zh/common.json": () => import("../i18n/locales/zh/common.json"),
			"./locales/zh/contact.json": () => import("../i18n/locales/zh/contact.json"),
			"./locales/zh/contactForm.json": () => import("../i18n/locales/zh/contactForm.json"),
			"./locales/zh/contactHeader.json": () => import("../i18n/locales/zh/contactHeader.json"),
			"./locales/zh/faq.json": () => import("../i18n/locales/zh/faq.json"),
			"./locales/zh/faqHeader.json": () => import("../i18n/locales/zh/faqHeader.json"),
			"./locales/zh/faqList.json": () => import("../i18n/locales/zh/faqList.json"),
			"./locales/zh/footer.json": () => import("../i18n/locales/zh/footer.json"),
			"./locales/zh/header.json": () => import("../i18n/locales/zh/header.json"),
			"./locales/zh/hero.json": () => import("../i18n/locales/zh/hero.json"),
			"./locales/zh/home.json": () => import("../i18n/locales/zh/home.json"),
			"./locales/zh/mockBanner.json": () => import("../i18n/locales/zh/mockBanner.json"),
			"./locales/zh/openPositions.json": () => import("../i18n/locales/zh/openPositions.json"),
			"./locales/zh/preferencesSection.json": () => import("../i18n/locales/zh/preferencesSection.json"),
			"./locales/zh/pricing.json": () => import("../i18n/locales/zh/pricing.json"),
			"./locales/zh/pricingHeader.json": () => import("../i18n/locales/zh/pricingHeader.json"),
			"./locales/zh/pricingTiers.json": () => import("../i18n/locales/zh/pricingTiers.json"),
			"./locales/zh/products.json": () => import("../i18n/locales/zh/products.json"),
			"./locales/zh/productsGrid.json": () => import("../i18n/locales/zh/productsGrid.json"),
			"./locales/zh/productsHeader.json": () => import("../i18n/locales/zh/productsHeader.json"),
			"./locales/zh/profileSection.json": () => import("../i18n/locales/zh/profileSection.json"),
			"./locales/zh/resultsTable.json": () => import("../i18n/locales/zh/resultsTable.json"),
			"./locales/zh/route.json": () => import("../i18n/locales/zh/route.json"),
			"./locales/zh/settings.json": () => import("../i18n/locales/zh/settings.json"),
			"./locales/zh/settingsFooter.json": () => import("../i18n/locales/zh/settingsFooter.json"),
			"./locales/zh/settingsHeader.json": () => import("../i18n/locales/zh/settingsHeader.json"),
			"./locales/zh/team.json": () => import("../i18n/locales/zh/team.json"),
			"./locales/zh/teamGrid.json": () => import("../i18n/locales/zh/teamGrid.json"),
			"./locales/zh/teamHeader.json": () => import("../i18n/locales/zh/teamHeader.json"),
			"./locales/zh/themeToggle.json": () => import("../i18n/locales/zh/themeToggle.json"),
			"./locales/zh/understandingImpact.json": () => import("../i18n/locales/zh/understandingImpact.json"),
			"./locales/zh/whatWeMeasure.json": () => import("../i18n/locales/zh/whatWeMeasure.json"),
			"./locales/zh/whyItMatters.json": () => import("../i18n/locales/zh/whyItMatters.json")
		}), `./locales/${n}/${t}.json`, 4)).default;
	} catch {
		return n === "en" ? {} : (await ut(Object.assign({
			"./locales/en/about.json": () => import("./about-CYSxSXDm.js"),
			"./locales/en/aboutGrid.json": () => import("./aboutGrid-D4vPffNV.js"),
			"./locales/en/aboutHeader.json": () => import("./aboutHeader-D1fuBqnE.js"),
			"./locales/en/apiAccessSection.json": () => import("./apiAccessSection-ByHxIFcg.js"),
			"./locales/en/blog.json": () => import("./blog-DFz26yM5.js"),
			"./locales/en/blogHeader.json": () => import("./blogHeader-C7lLXU93.js"),
			"./locales/en/blogList.json": () => import("./blogList-0RrrWGsG.js"),
			"./locales/en/careers.json": () => import("./careers-jWOoSozk.js"),
			"./locales/en/careersBenefits.json": () => import("./careersBenefits-2eVKFUN0.js"),
			"./locales/en/careersHeader.json": () => import("./careersHeader-DGXaOrHD.js"),
			"./locales/en/common.json": () => import("./common-CGSk35qm.js"),
			"./locales/en/contact.json": () => import("./contact-nl5yHgma.js"),
			"./locales/en/contactForm.json": () => import("./contactForm-IWAqD7Wg.js"),
			"./locales/en/contactHeader.json": () => import("./contactHeader-CHJEAa9s.js"),
			"./locales/en/faq.json": () => import("./faq-C_7lkibE.js"),
			"./locales/en/faqHeader.json": () => import("./faqHeader-Dptm1LLb.js"),
			"./locales/en/faqList.json": () => import("./faqList-xaG4sIKo.js"),
			"./locales/en/footer.json": () => import("./footer-CzmLezFA.js"),
			"./locales/en/header.json": () => import("./header-lKwGzuOy.js"),
			"./locales/en/hero.json": () => import("./hero-6yrKIQl5.js"),
			"./locales/en/home.json": () => import("./home-nT8o-_8S.js"),
			"./locales/en/mockBanner.json": () => import("./mockBanner-DgOs9Xzy.js"),
			"./locales/en/openPositions.json": () => import("./openPositions-D5nmiH3v.js"),
			"./locales/en/preferencesSection.json": () => import("./preferencesSection-dKYJTCNu.js"),
			"./locales/en/pricing.json": () => import("./pricing-CPRDOme2.js"),
			"./locales/en/pricingHeader.json": () => import("./pricingHeader-DhsC1t-N.js"),
			"./locales/en/pricingTiers.json": () => import("./pricingTiers-CAcHPS-D.js"),
			"./locales/en/products.json": () => import("./products-78JPZm8t.js"),
			"./locales/en/productsGrid.json": () => import("./productsGrid-ZyGf7_RF.js"),
			"./locales/en/productsHeader.json": () => import("./productsHeader-CV1CdZx6.js"),
			"./locales/en/profileSection.json": () => import("./profileSection-BgjQLxx_.js"),
			"./locales/en/resultsTable.json": () => import("./resultsTable-DgHq-pwz.js"),
			"./locales/en/route.json": () => import("./route-DX08pDve.js"),
			"./locales/en/settings.json": () => import("./settings-B3MkmebQ.js"),
			"./locales/en/settingsFooter.json": () => import("./settingsFooter-CXR3xesh.js"),
			"./locales/en/settingsHeader.json": () => import("./settingsHeader-CedCA7kD.js"),
			"./locales/en/team.json": () => import("./team-CwrE-KxY.js"),
			"./locales/en/teamGrid.json": () => import("./teamGrid-Bkk4VAaF.js"),
			"./locales/en/teamHeader.json": () => import("./teamHeader-B92AT_0O.js"),
			"./locales/en/themeToggle.json": () => import("./themeToggle-yKadWvF2.js"),
			"./locales/en/understandingImpact.json": () => import("./understandingImpact-hVXFwrmU.js"),
			"./locales/en/whatWeMeasure.json": () => import("./whatWeMeasure-GfzGtKc1.js"),
			"./locales/en/whyItMatters.json": () => import("./whyItMatters-RQ-qni_M.js")
		}), `./locales/en/${t}.json`, 4)).default;
	}
}
async function mt(e) {
	let t = e || "en", n = ft.get(t);
	if (n) return n;
	let r = await Promise.all(dt.map(async (e) => [e, await pt(t, e)])), i = Object.fromEntries(r), a = i.common ?? {}, o = {
		...i,
		...a
	};
	return ft.set(t, o), o;
}
var ht = "en";
async function gt({ children: e }) {
	return u(lt, {
		locale: ht,
		staticData: await mt(ht),
		children: e
	});
}
function _t() {
	return u(gt, { children: u(it, {}) });
}
export { _t as default };
var e = {
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
};
export { e as default };
var e = "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.", t = "Application Design", n = "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.", r = "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment.", i = "Fair Comparison", a = "Measurement Methodology", o = "Methodology", s = "Test Environment", c = "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.", l = "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.", u = "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.", d = "Why This Exists", f = {
	allBenchmarksRunOn: e,
	applicationDesign: t,
	choosingAnI18nLibrary: n,
	eachI18nLibraryIsIntegrated: r,
	fairComparison: i,
	measurementMethodology: a,
	methodology: o,
	testEnvironment: s,
	theBenchmarkAppHas10: c,
	theSame10PageApp: l,
	weUseBrowserNativeApis: u,
	whyThisExists: d
};
export { e as allBenchmarksRunOn, t as applicationDesign, n as choosingAnI18nLibrary, f as default, r as eachI18nLibraryIsIntegrated, i as fairComparison, a as measurementMethodology, o as methodology, s as testEnvironment, c as theBenchmarkAppHas10, l as theSame10PageApp, u as weUseBrowserNativeApis, d as whyThisExists };
var e = "About This Benchmark", t = "Methodology", n = "This is an open-source test application for measuring the real-world impact of internationalization libraries.", r = "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach.", i = {
	aboutThisBenchmark: e,
	methodology: t,
	thisIsAnOpenSource: n,
	weDesignedThisBenchmarkTo: r
};
export { e as aboutThisBenchmark, i as default, t as methodology, n as thisIsAnOpenSource, r as weDesignedThisBenchmarkTo };
var e = "API Access", t = "API Key", n = "Use this key to access the benchmarking API programmatically.", r = "Copy", i = {
	apiAccess: e,
	apiKey: t,
	useThisKeyTo: n,
	copy: r
};
export { e as apiAccess, t as apiKey, r as copy, i as default, n as useThisKeyTo };
var e = {
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
};
export { e as default };
var e = "Blog", t = "Insights, deep dives, and updates from the i18n benchmarking community.", n = "Insights, Tutorials, and Analysis", r = {
	blog: e,
	insightsDeepDivesAnd: t,
	insightsTutorialsAndAnalysis: n
};
export { e as blog, r as default, t as insightsDeepDivesAnd, n as insightsTutorialsAndAnalysis };
var e = "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.", t = "A step-by-step guide on migrating from legacy i18n solutions to modern, high-performance libraries.", n = "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", r = "A transparent look at our benchmarking process, from hardware specs to measurement techniques.", i = "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.", a = "An overview of the current i18n landscape and how different libraries stack up in 2026.", o = "Analysis", s = "Benchmark", c = "Benchmark Methodology: How We Test", l = "Benchmark Methodology: How We Test", u = "Comparing i18n Libraries in 2026: A Deep Dive", d = "February 1, 2026", f = "February 15, 2026", p = "February 28, 2026", m = "How to Reduce Your i18n Bundle by 60%", h = "i18n Benchmark 2026 Results", g = "January 20, 2026", _ = "March 15, 2026", v = "March 8, 2026", y = "Meta", b = "Migrating from react-i18next to Lingui", x = "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.", S = "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", C = "Read More →", w = "Server Components and i18n: What Changes?", T = "The State of Internationalization in 2026", E = "Tutorial", D = "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts.", O = {
	aStepByStepGuide: e,
	aStepByStepGuideOnMigrating: t,
	aTransparentLookAtOur: n,
	aTransparentLookAtOurBenchmarking: r,
	anOverviewOfTheCurrent: i,
	anOverviewOfTheCurrentI18n: a,
	analysis: o,
	benchmark: s,
	benchmarkMethodologyHowWe: c,
	benchmarkMethodologyHowWeTest: l,
	comparingI18nLibrariesIn: u,
	february12026: d,
	february152026: f,
	february282026: p,
	howToReduceYourI18n: m,
	i18nBenchmark2026Results: h,
	january202026: g,
	march152026: _,
	march82026: v,
	meta: y,
	migratingFromReactI18nextTo: b,
	practicalStrategiesForOptimizingTranslation: x,
	reactServerComponentsIntroduceNew: S,
	readMore: C,
	serverComponentsAndI18nWhat: w,
	theStateOfInternationalizationIn: T,
	tutorial: E,
	weTested12DifferentInternationalization: D
};
export { e as aStepByStepGuide, t as aStepByStepGuideOnMigrating, n as aTransparentLookAtOur, r as aTransparentLookAtOurBenchmarking, i as anOverviewOfTheCurrent, a as anOverviewOfTheCurrentI18n, o as analysis, s as benchmark, c as benchmarkMethodologyHowWe, l as benchmarkMethodologyHowWeTest, u as comparingI18nLibrariesIn, O as default, d as february12026, f as february152026, p as february282026, m as howToReduceYourI18n, h as i18nBenchmark2026Results, g as january202026, _ as march152026, v as march82026, y as meta, b as migratingFromReactI18nextTo, x as practicalStrategiesForOptimizingTranslation, S as reactServerComponentsIntroduceNew, C as readMore, w as serverComponentsAndI18nWhat, T as theStateOfInternationalizationIn, E as tutorial, D as weTested12DifferentInternationalization };
var e = {
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
};
export { e as default };
var e = "All our work is open source. Build your public portfolio while making an impact.", t = "Competitive pay", n = "Impactful", r = "Open Source", i = "Open source time", a = "20% time for OSS contributions", o = "Remote-First", s = "Top-of-market compensation", c = "Why Join Us?", l = "Work from anywhere in the world", u = "Work from anywhere. Fully distributed team across 6 time zones.", d = "Your work directly helps developers build better, faster internationalized applications.", f = {
	allOurWorkIs: e,
	competitivePay: t,
	impactful: n,
	openSource: r,
	openSourceTime: i,
	percentTimeForOss: a,
	remoteFirst: o,
	topOfMarketCompensation: s,
	whyJoinUs: c,
	workFromAnywhere: l,
	workFromAnywhereFully: u,
	yourWorkDirectlyHelps: d
};
export { e as allOurWorkIs, t as competitivePay, f as default, n as impactful, r as openSource, i as openSourceTime, a as percentTimeForOss, o as remoteFirst, s as topOfMarketCompensation, c as whyJoinUs, l as workFromAnywhere, u as workFromAnywhereFully, d as yourWorkDirectlyHelps };
var e = "Careers", t = "Join our mission to make internationalization fast, easy, and performant for everyone.", n = "Join our mission to make the web faster and more accessible for everyone, everywhere.", r = {
	careers: e,
	joinOurMission: t,
	joinOurMissionToMake: n
};
export { e as careers, r as default, t as joinOurMission, n as joinOurMissionToMake };
var e = "Cancel", t = "Copy", n = "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", r = "Read More", i = "Save Changes", a = {
	cancel: e,
	copy: t,
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
	mockBanner: n,
	readMore: r,
	saveChanges: i,
	"themeToggle.themeAuto": "Theme: Auto",
	"themeToggle.themeDark": "Theme: Dark",
	"themeToggle.themeLight": "Theme: Light",
	"themeToggle.themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
	"themeToggle.themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
	"themeToggle.themeModeLightClick": "Theme mode: light. Click to switch to dark mode."
};
export { e as cancel, t as copy, a as default, n as mockBanner, r as readMore, i as saveChanges };
var e = {
	"contactHeader.contactUs": "Contact Us",
	"contactHeader.haveQuestionsOrWantTo": "Have questions or want to contribute? We'd love to hear from you.",
	"contactForm.name": "Name",
	"contactForm.email": "Email",
	"contactForm.subject": "Subject",
	"contactForm.message": "Message",
	"contactForm.sendMessage": "Send Message",
	"contactForm.wellGetBackTo": "We'll get back to you within 48 hours."
};
export { e as default };
var e = "Bug Report", t = "Contribution", n = "Email", r = "you@example.com", i = "Message", a = "Your message...", o = "Methodology Question", s = "Name", c = "New Benchmark Idea", l = "Other", u = "Send Message", d = "Subject", f = "Topic", p = "We'll get back to you within 48 hours.", m = "Your name", h = {
	bugReport: e,
	contribution: t,
	email: n,
	emailPlaceholder: r,
	message: i,
	messagePlaceholder: a,
	methodologyQuestion: o,
	name: s,
	newBenchmarkIdea: c,
	other: l,
	sendMessage: u,
	subject: d,
	topic: f,
	wellGetBackTo: p,
	yourName: m
};
export { e as bugReport, t as contribution, h as default, n as email, r as emailPlaceholder, i as message, a as messagePlaceholder, o as methodologyQuestion, s as name, c as newBenchmarkIdea, l as other, u as sendMessage, d as subject, f as topic, p as wellGetBackTo, m as yourName };
var e = "Contact Us", t = "Get in Touch", n = "Have ideas? Found a bug? We'd love to hear from you.", r = "Have questions or want to contribute? We'd love to hear from you.", i = {
	contactUs: e,
	getInTouch: t,
	haveIdeasFoundABug: n,
	haveQuestionsOrWantTo: r
};
export { e as contactUs, i as default, t as getInTouch, n as haveIdeasFoundABug, r as haveQuestionsOrWantTo };
var e = {
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
};
export { e as default };
var e = "Everything you need to know about i18n Benchmark.", t = "Frequently Asked Questions", n = {
	everythingYouNeedToKnow: e,
	frequentlyAskedQuestions: t
};
export { n as default, e as everythingYouNeedToKnow, t as frequentlyAskedQuestions };
var e = "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.", t = "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.", n = "Are the results statistically significant?", r = "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.", i = "Can I contribute a new library integration?", a = "Can I submit my own benchmarks?", o = "Do you offer consulting services?", s = "How are benchmarks conducted?", c = "How are the benchmarks run?", l = "How can I contribute?", u = "How often are benchmarks updated?", d = "How often are results updated?", f = "i18n Benchmark is an open-source project dedicated to measuring the real-world performance impact of internationalization libraries.", p = "Is the data reliable?", m = "There are many ways to contribute, from submitting new benchmarks to improving our methodology documentation.", h = "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.", g = "We follow rigorous statistical methodology, including outlier detection and multiple test runs to ensure accuracy.", _ = "We re-run all benchmarks weekly against the latest versions of each library.", v = "We run standardized tests in isolated environments, measuring bundle size, render time, and memory usage across dozens of libraries.", y = "We support react-i18next, react-intl, Lingui, Tolgee, and several other popular React i18n solutions.", b = "What is i18n Benchmark?", x = "What libraries are currently tested?", S = "Which libraries are currently supported?", C = "Yes! Community benchmark submissions are encouraged and reviewed by our core team.", w = "Yes, our Enterprise plan includes consulting services for optimizing your app's i18n performance.", T = "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes.", E = {
	absolutelyWeWelcomeCommunity: e,
	allBenchmarksAreRun: t,
	areTheResultsStatistically: n,
	benchmarksRunAutomaticallyVia: r,
	canIContributeA: i,
	canISubmitMyOwnBenchmarks: a,
	doYouOfferConsultingServices: o,
	howAreBenchmarksConducted: s,
	howAreTheBenchmarks: c,
	howCanIContribute: l,
	howOftenAreBenchmarksUpdated: u,
	howOftenAreResults: d,
	i18nBenchmarkIsAnOpenSource: f,
	isTheDataReliable: p,
	thereAreManyWaysToContribute: m,
	weCurrentlyBenchmarkReactI18next: h,
	weFollowRigorousStatisticalMethodologyIncluding: g,
	weReRunAllBenchmarksWeekly: _,
	weRunStandardizedTestsInIsolated: v,
	weSupportReactI18nextReactIntl: y,
	whatIsI18nBenchmark: b,
	whatLibrariesAreCurrently: x,
	whichLibrariesAreCurrentlySupported: S,
	yesCommunityBenchmarkSubmissionsAre: C,
	yesOurEnterprisePlanIncludesConsulting: w,
	yesWeUseThe: T
};
export { e as absolutelyWeWelcomeCommunity, t as allBenchmarksAreRun, n as areTheResultsStatistically, r as benchmarksRunAutomaticallyVia, i as canIContributeA, a as canISubmitMyOwnBenchmarks, E as default, o as doYouOfferConsultingServices, s as howAreBenchmarksConducted, c as howAreTheBenchmarks, l as howCanIContribute, u as howOftenAreBenchmarksUpdated, d as howOftenAreResults, f as i18nBenchmarkIsAnOpenSource, p as isTheDataReliable, m as thereAreManyWaysToContribute, h as weCurrentlyBenchmarkReactI18next, g as weFollowRigorousStatisticalMethodologyIncluding, _ as weReRunAllBenchmarksWeekly, v as weRunStandardizedTestsInIsolated, y as weSupportReactI18nextReactIntl, b as whatIsI18nBenchmark, x as whatLibrariesAreCurrently, S as whichLibrariesAreCurrentlySupported, C as yesCommunityBenchmarkSubmissionsAre, w as yesOurEnterprisePlanIncludesConsulting, T as yesWeUseThe };
var e = "Resources", t = "Contact", n = "GitHub", r = "Methodology", i = "Contributing", a = "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.", o = "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", s = {
	resources: e,
	contact: t,
	github: n,
	methodology: r,
	contributing: i,
	builtWith: a,
	anOpenSourceTestApplication: o
};
export { o as anOpenSourceTestApplication, a as builtWith, t as contact, i as contributing, s as default, n as github, r as methodology, e as resources };
var e = "Home", t = "Methodology", n = "Mock Pages", r = "Products", i = "Pricing", a = "Team", o = "Blog", s = "Careers", c = "FAQ", l = "Contact", u = "Settings", d = "Go to GitHub", f = {
	home: e,
	methodology: t,
	mockPages: n,
	products: r,
	pricing: i,
	team: a,
	blog: o,
	careers: s,
	faq: "FAQ",
	contact: l,
	settings: u,
	goToGithub: d
};
export { o as blog, s as careers, l as contact, f as default, c as faq, d as goToGithub, e as home, t as methodology, n as mockPages, i as pricing, r as products, u as settings, a as team };
var e = "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.", t = "View Results", n = {
	aTestApplicationDesignedTo: e,
	viewResults: t
};
export { e as aTestApplicationDesignedTo, n as default, t as viewResults };
var e = {
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
};
export { e as default };
var e = "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", t = { mockBanner: e };
export { t as default, e as mockBanner };
var e = "Apply Now", t = "Backend Engineer", n = "Build and maintain our benchmarking suite and core application infrastructure.", r = "Build and maintain the benchmark dashboard, comparison tools, and interactive visualizations.", i = "Community", a = "Create and maintain documentation, blog posts, and educational content about i18n performance best practices.", o = "Create comprehensive guides, API references, and tutorials for the community.", s = "Design and maintain the CI/CD pipeline that runs benchmarks automatically on every library update.", c = "Design and scale our data ingestion pipelines and statistical analysis engines.", l = "DevOps Engineer", u = "DevRel Engineer", d = "Documentation", f = "Engage with the i18n community, write blog posts, and speak at conferences.", p = "Engineering", m = "Ensure the accuracy and reliability of our benchmarks through rigorous testing.", h = "Frontend Developer", g = "Full-time", _ = "Lead benchmark design and implementation. Deep knowledge of V8 internals, browser performance APIs, and statistical analysis required.", v = "Open Positions", y = "Part-time", b = "QA Engineer", x = "Remote", S = "Senior Frontend Engineer", C = "Senior Performance Engineer", w = "San Francisco / Remote", T = "Technical Writer", E = {
	applyNow: e,
	backendEngineer: t,
	buildAndMaintainOur: n,
	buildAndMaintainThe: r,
	community: i,
	createAndMaintainDocumentation: a,
	createComprehensiveGuidesApi: o,
	designAndMaintainThe: s,
	designAndScaleOur: c,
	devOpsEngineer: l,
	devrelEngineer: u,
	documentation: d,
	engageWithTheI18n: f,
	engineering: p,
	ensureTheAccuracyAnd: m,
	frontendDeveloper: h,
	fullTime: g,
	leadBenchmarkDesignAnd: _,
	openPositions: v,
	partTime: y,
	qaEngineer: b,
	remote: x,
	seniorFrontendEngineer: S,
	seniorPerformanceEngineer: C,
	sfRemote: w,
	technicalWriter: T
};
export { e as applyNow, t as backendEngineer, n as buildAndMaintainOur, r as buildAndMaintainThe, i as community, a as createAndMaintainDocumentation, o as createComprehensiveGuidesApi, E as default, s as designAndMaintainThe, c as designAndScaleOur, l as devOpsEngineer, u as devrelEngineer, d as documentation, f as engageWithTheI18n, p as engineering, m as ensureTheAccuracyAnd, h as frontendDeveloper, g as fullTime, _ as leadBenchmarkDesignAnd, v as openPositions, y as partTime, b as qaEngineer, x as remote, S as seniorFrontendEngineer, C as seniorPerformanceEngineer, w as sfRemote, T as technicalWriter };
var e = "Arabic (ar)", t = "Chinese (Simplified, zh-CN)", n = "Dark Mode", r = "Default Language", i = "Email Notifications", a = "English (en)", o = "French (fr)", s = "German (de)", c = "Japanese (ja)", l = "Preferences", u = "Receive weekly benchmark reports", d = "Receive weekly benchmark reports", f = "Spanish (es)", p = "Toggle dark mode", m = "Toggle Notifications", h = "Use dark color scheme", g = {
	arabicAr: e,
	chineseSimplifiedZhCn: t,
	darkMode: n,
	defaultLanguage: r,
	emailNotifications: i,
	englishEn: a,
	frenchFr: o,
	germanDe: s,
	japaneseJa: c,
	preferences: l,
	receiveWeeklyBenchmark: u,
	receiveWeeklyBenchmarkReports: d,
	spanishEs: f,
	toggleDarkMode: p,
	toggleNotifications: m,
	useDarkColorScheme: h
};
export { e as arabicAr, t as chineseSimplifiedZhCn, n as darkMode, g as default, r as defaultLanguage, i as emailNotifications, a as englishEn, o as frenchFr, s as germanDe, c as japaneseJa, l as preferences, u as receiveWeeklyBenchmark, d as receiveWeeklyBenchmarkReports, f as spanishEs, p as toggleDarkMode, m as toggleNotifications, h as useDarkColorScheme };
var e = {
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
};
export { e as default };
var e = "Pricing", t = "Transparent pricing for every stage of your i18n journey.", n = {
	pricing: e,
	transparentPricingForEvery: t
};
export { n as default, e as pricing, t as transparentPricingForEvery };
var e = "Free Tier", t = "Free", n = "Public benchmark dashboard", r = "Basic library comparisons", i = "Community forum access", a = "Monthly result digest", o = "Get Started", s = "Pro Tier", c = "/month", l = "All Free features", u = "Custom benchmark configurations", d = "Private results dashboard", f = "API access (1,000 requests/day)", p = "Slack integration", m = "Subscribe to Pro", h = "Enterprise Tier", g = "Custom", _ = "All Pro features", v = "Dedicated benchmark infrastructure", y = "Custom library integrations", b = "SLA guarantees", x = "Priority support", S = "Contact Sales", C = {
	freeTier: e,
	free: t,
	publicBenchmarkDashboard: n,
	basicLibraryComparisons: r,
	communityForumAccess: i,
	monthlyResultDigest: a,
	getStarted: o,
	proTier: s,
	perMonth: c,
	allFreeFeatures: l,
	customBenchmarkConfigurations: u,
	privateResultsDashboard: d,
	apiAccess1000Requests: f,
	slackIntegration: p,
	subscribeToPro: m,
	enterpriseTier: h,
	custom: g,
	allProFeatures: _,
	dedicatedBenchmarkInfrastructure: v,
	customLibraryIntegrations: y,
	slaGuarantees: b,
	prioritySupport: x,
	contactSales: S
};
export { l as allFreeFeatures, _ as allProFeatures, f as apiAccess1000Requests, r as basicLibraryComparisons, i as communityForumAccess, S as contactSales, g as custom, u as customBenchmarkConfigurations, y as customLibraryIntegrations, v as dedicatedBenchmarkInfrastructure, C as default, h as enterpriseTier, t as free, e as freeTier, o as getStarted, a as monthlyResultDigest, c as perMonth, x as prioritySupport, d as privateResultsDashboard, s as proTier, n as publicBenchmarkDashboard, b as slaGuarantees, p as slackIntegration, m as subscribeToPro };
var e = {
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
};
export { e as default };
var e = "Benchmark Dashboard", t = "Interactive charts and tables comparing i18n libraries across bundle size, render time, and hydration cost.", n = "Bundle Analyzer", r = "Upload your build output and get a detailed breakdown of how much of your bundle is i18n overhead.", i = "Migration Assistant", a = "Automated codemods and guides for migrating between i18n libraries with minimal disruption.", o = "Performance Monitor", s = "Continuous performance tracking for your i18n implementation. Get alerts when translation loading degrades.", c = "Learn More", l = {
	benchmarkDashboard: e,
	interactiveChartsAndTables: t,
	bundleAnalyzer: n,
	uploadYourBuildOutput: r,
	migrationAssistant: i,
	automatedCodemodsAndGuides: a,
	performanceMonitor: o,
	continuousPerformanceTrackingFor: s,
	learnMore: c
};
export { a as automatedCodemodsAndGuides, e as benchmarkDashboard, n as bundleAnalyzer, s as continuousPerformanceTrackingFor, l as default, t as interactiveChartsAndTables, c as learnMore, i as migrationAssistant, o as performanceMonitor, r as uploadYourBuildOutput };
var e = "Products", t = "Tools and services to help you optimize your internationalization strategy.", n = {
	products: e,
	toolsAndServicesTo: t
};
export { n as default, e as products, t as toolsAndServicesTo };
var e = "Profile", t = "Display Name", n = "Email", r = {
	profile: e,
	displayName: t,
	email: n
};
export { r as default, t as displayName, n as email, e as profile };
var e = "Bundle Size", t = "Lazy Loading", n = "Library", r = "Lookup Time", i = "Sample Results", a = {
	bundleSize: e,
	lazyLoading: t,
	library: n,
	lookupTime: r,
	sampleResults: i
};
export { e as bundleSize, a as default, t as lazyLoading, n as library, r as lookupTime, i as sampleResults };
var e = "Oops! Page not found.", t = "Return to Home", n = {
	oopsPageNotFound: e,
	returnToHome: t,
	"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:",
	"route.oopsPageNotFound": "Oops! Page not found",
	"route.returnToHome": "Return to Home"
};
export { n as default, e as oopsPageNotFound, t as returnToHome };
var e = {
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
};
export { e as default };
var e = "Cancel", t = "Save Changes", n = {
	cancel: e,
	saveChanges: t
};
export { e as cancel, n as default, t as saveChanges };
var e = "Manage your account settings and preferences.", t = "Manage your account preferences and configuration.", n = "Settings", r = {
	manageYourAccount: e,
	manageYourAccountPreferences: t,
	settings: n
};
export { r as default, e as manageYourAccount, t as manageYourAccountPreferences, n as settings };
var e = {
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
};
export { e as default };
var e = "Aisha Patel", t = "Community Manager", n = "Data Analyst", r = "Developer Advocate", i = "Elena Kowalski", a = "Ensures statistical rigor in our data collection and analysis.", o = "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", s = "Former Google engineer with a passion for web performance and open source.", c = "Former Google engineer with 10 years of experience building internationalization systems at scale.", l = "Founder & Lead Engineer", u = "Full-Stack Developer", d = "Maintains the benchmarking infrastructure and CI/CD pipelines.", f = "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", p = "Manages community contributions and open source outreach.", m = "Manages community contributions, partnerships, and events. Background in open source governance.", h = "Marcus Weber", g = "Passionate about developer experience and building intuitive APIs.", _ = "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", v = "Performance Engineer", y = "Sarah Chen", b = "Specializes in JavaScript performance optimization and React internals.", x = "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", S = "Tomás Rodríguez", C = "Yuki Tanaka", w = {
	aishaPatel: e,
	communityManager: t,
	dataAnalyst: n,
	developerAdvocate: r,
	elenaKowalski: i,
	ensuresStatisticalRigorIn: a,
	ensuresStatisticalRigorInAll: o,
	formerGoogleEngineerWith: s,
	formerGoogleEngineerWith10: c,
	founderLeadEngineer: l,
	fullStackDeveloper: u,
	maintainsTheBenchmarkingInfrastructure: d,
	maintainsTheBenchmarkingInfrastructureAnd: f,
	managesCommunityContributions: p,
	managesCommunityContributionsPartnershipsAnd: m,
	marcusWeber: h,
	passionateAboutDeveloperExperience: g,
	passionateAboutDeveloperExperienceAnd: _,
	performanceEngineer: v,
	sarahChen: y,
	specializesInJavascriptPerformance: b,
	specializesInJavascriptPerformanceOptimization: x,
	tomasRodriguez: S,
	yukiTanaka: C
};
export { e as aishaPatel, t as communityManager, n as dataAnalyst, w as default, r as developerAdvocate, i as elenaKowalski, a as ensuresStatisticalRigorIn, o as ensuresStatisticalRigorInAll, s as formerGoogleEngineerWith, c as formerGoogleEngineerWith10, l as founderLeadEngineer, u as fullStackDeveloper, d as maintainsTheBenchmarkingInfrastructure, f as maintainsTheBenchmarkingInfrastructureAnd, p as managesCommunityContributions, m as managesCommunityContributionsPartnershipsAnd, h as marcusWeber, g as passionateAboutDeveloperExperience, _ as passionateAboutDeveloperExperienceAnd, v as performanceEngineer, y as sarahChen, b as specializesInJavascriptPerformance, x as specializesInJavascriptPerformanceOptimization, S as tomasRodriguez, C as yukiTanaka };
var e = "Our Team", t = "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.", n = {
	ourTeam: e,
	meetThePeopleBehindI18n: t
};
export { n as default, t as meetThePeopleBehindI18n, e as ourTeam };
var e = "Theme mode: auto (system). Click to switch to light mode.", t = "Theme mode: light. Click to switch to dark mode.", n = "Theme mode: dark. Click to switch to auto (system) mode.", r = "Theme: Auto", i = "Theme: Dark", a = "Theme: Light", o = {
	themeModeAutoSystemClick: e,
	themeModeLightClick: t,
	themeModeDarkClick: n,
	themeAuto: r,
	themeDark: i,
	themeLight: a
};
export { o as default, r as themeAuto, i as themeDark, a as themeLight, e as themeModeAutoSystemClick, n as themeModeDarkClick, t as themeModeLightClick };
var e = "Cache invalidation:", t = "Context-based architectures can cause the entire app to re-render when the language changes. For large apps with thousands of components, this can lead to noticeable lag during locale switches.", n = "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", r = "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", i = "Flash of Untranslated Content (FOUC)", a = "Flash of untranslated content (FOUC):", o = "Many i18n libraries store translations in large JSON files that are loaded upfront. This can significantly increase the \"Time to Interactive\" as the browser must download and parse these files before the app can be used.", s = "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", c = "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", l = "The app must first load the core library (e.g., i18next) which adds to the initial bundle size. Even \"lightweight\" libraries can add 10-20KB of minified JS.", u = "The JSON must be parsed on every page load — blocking the main thread.", d = "The trade-offs of dynamic loading", f = "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", p = "Understanding the Impact", m = "Updating translations often requires a full rebuild or clearing the CDN cache, which can delay the roll-out of critical copy changes.", h = "Users may briefly see translation keys or English text while the library and translation files are being loaded.", g = "Waterfall requests:", _ = "What this benchmark measures", v = "Why a single large JSON can hurt performance", y = {
	cacheInvalidation: e,
	contextBasedArchitecturesCan: t,
	contextBasedArchitecturesCanCause: n,
	duringServerSideRenderingThe: r,
	flashOfUntranslatedContent: i,
	flashOfUntranslatedContentFouc: a,
	manyI18nLibrariesStore: o,
	manyI18nLibrariesStoreTranslations: s,
	splittingTranslationsIntoPerRoute: c,
	theAppMustFirstLoad: l,
	theJsonMustBeParsed: u,
	theTradeOffsOfDynamic: d,
	thisTestAppProvidesA: f,
	understandingTheImpact: p,
	updatingTranslationsRequiresCache: m,
	usersMayBrieflySeeTranslation: h,
	waterfallRequests: g,
	whatThisBenchmarkMeasures: _,
	whyASingleLargeJson: v
};
export { e as cacheInvalidation, t as contextBasedArchitecturesCan, n as contextBasedArchitecturesCanCause, y as default, r as duringServerSideRenderingThe, i as flashOfUntranslatedContent, a as flashOfUntranslatedContentFouc, o as manyI18nLibrariesStore, s as manyI18nLibrariesStoreTranslations, c as splittingTranslationsIntoPerRoute, l as theAppMustFirstLoad, u as theJsonMustBeParsed, d as theTradeOffsOfDynamic, f as thisTestAppProvidesA, p as understandingTheImpact, m as updatingTranslationsRequiresCache, h as usersMayBrieflySeeTranslation, g as waterfallRequests, _ as whatThisBenchmarkMeasures, v as whyASingleLargeJson };
var e = "Bundle size impact", t = "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.", n = "During SSR, translation data is serialized into the HTML. We measure the size of this payload and its effect on Time to Interactive (TTI).", r = "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.", i = "How fast the app can switch from one language to another. We measure the re-render time and any network delays for lazy-loaded locales.", a = "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.", o = "How much extra time the library adds to the initial page load. This includes script execution and the time to fetch/parse translation data.", s = "Hydration cost", c = "Lazy loading effectiveness", l = "Locale switch speed", u = "Rendering overhead", d = "The additional Javascript bytes that the library adds to your production build. We measure both the library itself and its mandatory dependencies.", f = "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.", p = "What We Measure", m = "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).", h = {
	bundleSizeImpact: e,
	duringSsrTranslationDataIs: t,
	duringSsrTranslationDataIsSerialized: n,
	howFastTheAppCan: r,
	howFastTheAppCanSwitchFromOne: i,
	howMuchExtraTimeThe: a,
	howMuchExtraTimeTheLibraryAdds: o,
	hydrationCost: s,
	lazyLoadingEffectiveness: c,
	localeSwitchSpeed: l,
	renderingOverhead: u,
	theAdditionalJavascriptBytes: d,
	theAdditionalJavascriptBytesSent: f,
	whatWeMeasure: p,
	whetherSplittingTranslationsByRoute: m
};
export { e as bundleSizeImpact, h as default, t as duringSsrTranslationDataIs, n as duringSsrTranslationDataIsSerialized, r as howFastTheAppCan, i as howFastTheAppCanSwitchFromOne, a as howMuchExtraTimeThe, o as howMuchExtraTimeTheLibraryAdds, s as hydrationCost, c as lazyLoadingEffectiveness, l as localeSwitchSpeed, u as renderingOverhead, d as theAdditionalJavascriptBytes, f as theAdditionalJavascriptBytesSent, p as whatWeMeasure, m as whetherSplittingTranslationsByRoute };
var e = "Why These Metrics Matter", t = "Bundle Size", n = "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.", r = "Rendering & Hydration", i = "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).", a = "Dynamic Loading", o = "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.", s = {
	whyTheseMetricsMatter: e,
	bundleSize: t,
	theBundleIsTheData: n,
	renderingHydration: r,
	connectingALargeJson: i,
	dynamicLoading: a,
	loadingAllTranslationsUpfront: o
};
export { t as bundleSize, i as connectingALargeJson, s as default, a as dynamicLoading, o as loadingAllTranslationsUpfront, r as renderingHydration, n as theBundleIsTheData, e as whyTheseMetricsMatter };
