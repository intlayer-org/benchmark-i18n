import { computed as e, createBlock as t, defineComponent as n, getCurrentInstance as r, h as i, inject as a, onBeforeMount as o, onMounted as s, onUnmounted as c, openBlock as l, ref as u, renderSlot as d, unref as f, watch as p, withCtx as m } from "vue";
var h = Object.defineProperty, g = Object.defineProperties, _ = Object.getOwnPropertyDescriptors, v = Object.getOwnPropertySymbols, y = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable, x = (e, t, n) => t in e ? h(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, S = (e, t) => {
	for (var n in t ||= {}) y.call(t, n) && x(e, n, t[n]);
	if (v) for (var n of v(t)) b.call(t, n) && x(e, n, t[n]);
	return e;
}, C = (e, t) => g(e, _(t)), w;
function ee(e, t) {
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
function T(e) {
	return !!(e && typeof e.then == "function");
}
function E(e, t) {
	return T(e) ? Promise.resolve(e).then(t) : t(e);
}
function D(e, t, n) {
	function r(n) {
		let r = t(n);
		throw e.emit(r), console.error(r), r;
	}
	try {
		let e = n();
		return T(e) ? e.catch(r) : e;
	} catch (e) {
		r(e);
	}
}
function O(e) {
	let t = (Array.isArray(e) ? e : [e]).map((e) => `'${e}'`), n = t.slice(-2).join(" or ");
	return `Tolgee: You need to specify ${[...t.slice(0, -2), n].join(", ")} option`;
}
function te(e) {
	return typeof e == "object" && !Array.isArray(e) && e !== null;
}
function ne(e) {
	if (typeof e == "string") return [e];
	if (Array.isArray(e)) return e;
}
function k(e) {
	return ne(e) || [];
}
function re(e, t) {
	return te(t) ? k(t?.[e]) : k(t);
}
function A(e) {
	return Array.from(new Set(e));
}
function j(e) {
	return e && e.replace(/\/+$/, "");
}
function ie(e) {
	if (typeof e == "string") return e;
	if (typeof e?.message == "string") return e.message;
}
var ae = (e, t) => fetch(e, t);
function oe(e) {
	return Object.fromEntries(new Headers(e).entries());
}
var se = () => ({
	"x-tolgee-sdk-type": "JS",
	"x-tolgee-sdk-version": "7.2.1"
}), ce = (e = ae) => (t, n) => {
	let r = oe(n?.headers);
	return r["x-api-key"] && (r = Object.assign(Object.assign({}, se()), r)), e(t, Object.assign(Object.assign({}, n), { headers: r }));
}, le = (e) => {
	let t = /* @__PURE__ */ new Map();
	return Object.entries(e).forEach(([e, n]) => {
		if (n != null) {
			if (typeof n == "object") {
				le(n).forEach((n, r) => {
					t.set(e + "." + r, n);
				});
				return;
			}
			t.set(e, n);
		}
	}), t;
}, M = (e) => Object.fromEntries(le(e).entries()), N = (e) => {
	let [t, ...n] = e.split(":");
	return {
		language: t,
		namespace: n.join(":") || ""
	};
}, P = ({ language: e, namespace: t }) => t ? `${e}:${t}` : e, F = (e, t) => {
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
function ue(e) {
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
function de() {
	let e = !0;
	function t() {
		return e;
	}
	let n = Object.freeze({
		onPendingLanguageChange: F("pendingLanguage", t),
		onLanguageChange: F("language", t),
		onLoadingChange: F("loading", t),
		onFetchingChange: F("fetching", t),
		onInitialLoaded: F("initialLoad", t),
		onRunningChange: F("running", t),
		onCacheChange: F("cache", t),
		onPermanentChange: F("permanentChange", t),
		onError: F("error", t),
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
var I = class extends Error {
	constructor(e, t, n = !1) {
		let { language: r, namespace: i } = e;
		super(`Tolgee: Failed to fetch record for "${r}"${i && ` and "${i}"`}`), this.cause = t, this.isDev = n, this.name = "RecordFetchError", this.language = r, this.namespace = i;
	}
}, fe = class extends Error {
	constructor(e, t) {
		super(e), this.cause = t, this.name = "LanguageDetectorError";
	}
}, pe = class extends Error {
	constructor(e, t) {
		super(e), this.cause = t, this.name = "LanguageStorageError";
	}
};
function me(e, t, n, r, i, a, o) {
	let s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = {}, u = 0;
	function d(t, n, r) {
		let i = P(t);
		c.set(i, {
			data: M(n),
			version: r
		}), e.onCacheChange.emit(N(i));
	}
	async function f(n) {
		function r(t) {
			let r = new I(n, t);
			throw e.onError.emit(r), console.error(r), r;
		}
		let i = t(n);
		if (T(i)) {
			let e = await i.catch(r);
			if (e !== void 0) return e;
		}
		let a = l[P(n)];
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
			let r = new I(t, n, !0);
			e.onError.emit(r), console.warn(r);
		}
		return i ||= await f(t), i;
	}
	let m = Object.freeze({
		addStaticData(e) {
			if (Array.isArray(e)) for (let t of e) {
				let e = P(t), n = c.get(e);
				(!n || n.version === 0) && d(t, M(t.data), 0);
			}
			else e && (l = Object.assign(Object.assign({}, l), e), Object.entries(e).forEach(([e, t]) => {
				if (typeof t != "function") {
					let n = N(e), r = c.get(e);
					(!r || r.version === 0) && d(n, M(t), 0);
				}
			}));
		},
		invalidate() {
			s.clear(), u += 1;
		},
		addRecord(e, t) {
			d(e, M(t), u);
		},
		exists(e, t = !1) {
			let n = c.get(P(e));
			return n && t ? n.version === u : !!n;
		},
		getRecord(e) {
			let t = r(e), n = P(t), i = c.get(n);
			if (i) return Object.assign(Object.assign({}, t), {
				cacheKey: n,
				data: i.data
			});
		},
		getAllRecords() {
			return Array.from(c.entries()).map(([e]) => m.getRecord(N(e)));
		},
		getTranslation(e, t) {
			return c.get(P(e))?.data[t];
		},
		getTranslationNs(e, t, n) {
			for (let r of e) for (let e of t) if (c.get(P({
				language: e,
				namespace: r
			}))?.data[n] != null) return [r];
			return A(e);
		},
		getTranslationFallback(e, t, n) {
			for (let r of e) for (let e of t) {
				let t = c.get(P({
					language: e,
					namespace: r
				}))?.data[n];
				if (t != null) return t;
			}
		},
		changeTranslation(t, n, r) {
			let i = c.get(P(t))?.data;
			i && (i[n] = r, e.onCacheChange.emit(Object.assign(Object.assign({}, t), { key: n })));
		},
		isFetching(e) {
			if (i()) return !0;
			if (e === void 0) return s.size > 0;
			let t = k(e);
			return !!Array.from(s.keys()).find((e) => t.includes(N(e).namespace));
		},
		isLoading(e, t) {
			let n = k(t);
			return i() ? !0 : !!Array.from(s.keys()).find((t) => {
				let r = N(t);
				return (!n.length || n.includes(r.namespace)) && !m.exists({
					namespace: r.namespace,
					language: e
				});
			});
		},
		async loadRecords(e, t) {
			let n = e.map((e) => {
				let n = r(e), i = P(n);
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
				e.promise && (e.data = M(c[0] ?? {}), c.shift());
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
}, L = "invalid", _e = {
	observerOptions: ge,
	observerType: "invisible",
	onFormatError: L,
	apiUrl: "https://app.tolgee.io",
	autoLoadRequiredData: !0,
	fetch: ce(),
	onTranslationMissing: ({ key: e }) => e
}, R = (...e) => {
	let t = {};
	return e.forEach((e) => {
		t = Object.assign(Object.assign(Object.assign({}, t), e), { observerOptions: Object.assign(Object.assign({}, t.observerOptions), e?.observerOptions) });
	}), t;
};
function z(e, t) {
	let n = R(_e, t?.initialOptions, e);
	return n.apiUrl = j(n.apiUrl), e?.fetch && (n.fetch = ce(e.fetch)), {
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
	function S() {
		return D(s.onError, (e) => new pe("Tolgee: Failed to load language", e), () => l.languageStorage?.getLanguage(p()));
	}
	function C() {
		if (!l.languageDetector) return;
		let e = n();
		return D(s.onError, (e) => new fe("Tolgee: Failed to detect language", e), () => l.languageDetector?.getLanguage(Object.assign({ availableLanguages: e }, p())));
	}
	function w(e) {
		e && l.backends.push(e);
	}
	function ee(e) {
		l.devBackend = e;
	}
	function T(e, t) {
		t(e, Object.freeze({
			setFinalFormatter: _,
			addFormatter: g,
			setObserver: m,
			hasObserver: h,
			setUi: v,
			hasUi: y,
			setDevBackend: ee,
			addBackend: w,
			setLanguageDetector: x,
			setLanguageStorage: b
		}));
	}
	let O = Object.freeze({
		addPlugin: T,
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
			return E(S(), (t) => (!e || e.includes(t)) && t ? t : C());
		},
		setStoredLanguage(e) {
			return D(s.onError, (e) => new pe("Tolgee: Failed to store language", e), () => l.languageStorage?.setLanguage(e, p()));
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
				let n = ie(e) || L, r = t().onFormatError, a = typeof r;
				h = a === "string" ? r : a === "function" ? r(n, i) : L, h = v(h);
			}
			return h;
		}
	});
	return O;
}
var ye = (e, t, n) => {
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
	let r = z(), i, a = Object.freeze({
		init(e) {
			r = z(e, r);
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
			k(e).forEach((e) => {
				let t = r.activeNamespaces.get(e);
				t === void 0 ? r.activeNamespaces.set(e, 1) : r.activeNamespaces.set(e, t + 1);
			});
		},
		removeActiveNs(e) {
			k(e).forEach((e) => {
				let t = r.activeNamespaces.get(e);
				t !== void 0 && t > 1 ? r.activeNamespaces.set(e, t - 1) : r.activeNamespaces.delete(e);
			});
		},
		getRequiredNamespaces() {
			return A([
				a.getDefaultNs(),
				...r.initialOptions.ns || [],
				...k(r.initialOptions.fallbackNs),
				...r.activeNamespaces.keys()
			]);
		},
		getFallbackLangs(e) {
			let t = e || a.getLanguage();
			return t ? A([t, ...re(t, r.initialOptions.fallbackLanguage)]) : [];
		},
		getFallbackNs() {
			return k(r.initialOptions.fallbackNs);
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
				let e = Object.keys(r.initialOptions.staticData).map((e) => N(e).language);
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
			i = e ? Object.assign(Object.assign({}, e), { apiUrl: j(e.apiUrl) }) : void 0;
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
var B = (e, ...t) => {
	let n = {}, r;
	return typeof e == "object" && e ? n = e : (n.key = e, typeof t[0] == "string" ? (n.defaultValue = t[0], r = t[1]) : typeof t[0] == "object" && (r = t[0])), r && (n = Object.assign(Object.assign({}, xe(r)), n)), n;
};
function Se({ options: e }) {
	let t = de(), n = ye(!1, () => o.isFetching(), t.onFetchingChange.emit), r = ye(!1, () => S.isLoading(), t.onLoadingChange.emit), i = be(t.onLanguageChange, t.onPendingLanguageChange, t.onRunningChange), a = ve(i.getLanguage, i.getInitialOptions, i.getAvailableLanguages, u, _, v, f, t), o = me(t, a.getBackendRecord, a.getBackendDevRecord, i.withDefaultNs, i.isInitialLoading, n, r);
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
		return A([...k(l(e)), ...c()]);
	}
	function d(e) {
		return A([...k(e ?? l()), ...i.getRequiredNamespaces()]);
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
			if (!e) throw Error(O("availableLanguages"));
			t = e;
		}
		if (Array.isArray(e.namespaces)) n = e.namespaces;
		else if (e.namespaces === "all") {
			let e = S.getAvailableNs();
			if (!e) throw Error(O("availableNs"));
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
		let e = E(b(), () => {
			let e = h();
			if (e.length && i.getInitialOptions().autoLoadRequiredData) return o.loadRecords(e, { useCache: !0 });
		});
		if (T(e)) return i.setInitialLoading(!0), n.notify(), r.notify(), Promise.resolve(e).then(() => {
			i.setInitialLoading(!1), n.notify(), r.notify(), t.onInitialLoaded.emit();
		});
		t.onInitialLoaded.emit();
	}
	function b() {
		if (!i.getLanguage()) return E(a.getInitialLanguage(), (e) => {
			let t = e || i.getInitialOptions().defaultLanguage;
			t && i.setLanguage(t);
		});
	}
	function x() {
		if ((a.getLanguageDetector() || a.getLanguageStorage()) && !i.getAvailableLanguages()) throw Error(O("availableLanguages"));
		if (!i.getLanguage() && !i.getInitialOptions().defaultLanguage) throw Error(O(["defaultLanguage", "language"]));
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
			(i.getPendingLanguage() !== e || i.getLanguage() !== e) && (i.setPendingLanguage(e), i.isRunning() && i.getInitialOptions().autoLoadRequiredData && await o.loadRecords(m(e), { useCache: !0 }), e === i.getPendingLanguage() && (i.setLanguage(e), await a.setStoredLanguage(e)));
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
			let e = i.getInitialOptions();
			return !!((e.apiKey || e.transport) && e.apiUrl);
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
			return e.options = R(e.options, n), t;
		},
		init(t) {
			let n = Ce(R(e.options, t));
			return e.plugins.forEach(n.addPlugin), n;
		}
	});
	return t;
}, Te = 0, V = 1, Ee = 2, De = class extends Error {
	constructor(e, t, n) {
		let r, i = "";
		e === Te ? r = "Empty parameter" : e === V ? (r = "Unexpected character", i = "Did you forget to use FormatIcu to render ICU message syntax?") : r = "Unexpected end", super(`Tolgee parser: ${r} at ${t} in "${n}"` + (i ? "\n" + i : "")), this.code = e, this.index = t;
	}
};
function Oe(e) {
	return /\s/.test(e);
}
var H = 0, U = 1, W = 2, G = 3, K = 4, ke = /* @__PURE__ */ new Set([
	W,
	U,
	H
]), q = "'", Ae = /* @__PURE__ */ new Set([
	"{",
	"}",
	q
]), je = (e) => /[0-9a-zA-Z_]/.test(e);
function Me(e) {
	let t = H, n = "", r = "", i = "", a = [], o = [], s = 0;
	function c(t) {
		throw new De(t, s, e);
	}
	let l = () => {
		a.push(n), n = "";
	}, u = () => {
		je(i) || c(V), r += i;
	}, d = () => {
		r === "" && c(Te), o.push(r), r = "";
	};
	for (s = 0; s < e.length; s++) switch (i = e[s], t) {
		case H:
			i === q ? (n += i, t = U) : i === "{" ? (l(), t = G) : (n += i, t = H);
			break;
		case U:
			Ae.has(i) ? (n = n.slice(0, -1) + i, t = W) : (n += i, t = H);
			break;
		case W:
			i === q ? t = H : (n += i, t = W);
			break;
		case G:
			i === "}" ? (d(), t = H) : Oe(i) ? r !== "" && (d(), t = K) : (u(), t = G);
			break;
		case K: i == "}" ? t = H : Oe(i) ? t = K : c(V);
	}
	return ke.has(t) || c(Ee), l(), [a, o];
}
function Ne(e, t) {
	let [n, r] = Me(e), i = [n[0]];
	for (let a = 1; a < n.length; a++) {
		let o = t?.[r[a - 1]];
		if (o === void 0) throw Error(`Missing parameter "${r[a - 1]}" in "${e}"`);
		i.push(String(o)), i.push(n[a]);
	}
	return i.join("");
}
function Pe() {
	return { format: ({ translation: e, params: t }) => Ne(e, t) };
}
var Fe = () => (e, t) => (t.setFinalFormatter(Pe()), e);
function Ie() {
	return globalThis.window?.document?.createElement === void 0;
}
var Le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Re = {};
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
})(typeof window < "u" ? window : Le);
var ze = ee({
	__proto__: null,
	default: Re
}, [Re]);
(w = console.assert) == null || w.call(console, ze), RegExp(`([${["‌", "‍"].join("")}]{9})+`, "g");
function Be(e, t) {
	return t ? `${t}: ${e}` : e;
}
var J = class e extends Error {
	constructor(t, n, r) {
		super(Be(t, n)), this.code = t, this.status = n, this.params = r, Object.setPrototypeOf(this, e.prototype);
	}
};
function Ve(e) {
	return e instanceof Error && typeof e.code == "string";
}
var He = 2, Ue = 35e3, We = "TOLGEE_API_REQUEST", Ge = "TOLGEE_API_RESPONSE", Ke = "TOLGEE_PROXY_PING", qe = "TOLGEE_PROXY_PONG";
function Je(e) {
	return e === "oauth" || e === "apiKey";
}
var Y = class e extends Error {
	constructor(t, n) {
		super(n), this.kind = t, this.name = "ExtensionRpcError", Object.setPrototypeOf(this, e.prototype);
	}
}, Ye = 3e3, Xe = 200, Ze = 0, X = /* @__PURE__ */ new Map(), Qe = !1, Z, Q;
async function $e({ type: e, replyType: t, payload: n, timeoutMs: r = Ue, progressType: i, onProgress: a }) {
	nt();
	let o = Date.now() + r;
	await rt(Math.min(o, Date.now() + Ye));
	let s = o - Date.now();
	if (s <= 0) throw et(e);
	let c = tt();
	return new Promise((r, o) => {
		let l = setTimeout(() => {
			X.delete(c), it(), o(et(e));
		}, s);
		X.set(c, {
			replyType: t,
			progressType: i,
			onProgress: a,
			resolve: r,
			reject: o,
			timer: l
		}), window.postMessage({
			type: e,
			data: S({ id: c }, n)
		}, window.origin);
	});
}
var et = (e) => new Y("unavailable", `the Tolgee browser extension did not answer ${e} in time`), tt = () => `${Date.now()}-${Ze++}-${Math.random()}`;
function nt() {
	Qe || (Qe = !0, window.addEventListener("message", (e) => {
		var t;
		if (e.source !== window || e.origin !== window.location.origin) return;
		let n = e.data?.type;
		if (n === qe) {
			Q?.();
			return;
		}
		let r = e.data?.data;
		if (typeof r?.id != "string") return;
		let i = X.get(r.id);
		if (i) {
			if (n === i.progressType) {
				(t = i.onProgress) == null || t.call(i);
				return;
			}
			n === i.replyType && (X.delete(r.id), clearTimeout(i.timer), r.error ? i.reject(new Y(r.error.kind, r.error.message)) : i.resolve(r));
		}
	}));
}
function rt(e) {
	return Z ||= new Promise((t, n) => {
		let r = () => window.postMessage({ type: Ke }, window.origin), i = () => {
			clearInterval(a), it(), Q = void 0, n(new Y("unavailable", "the Tolgee browser extension did not answer"));
		}, a = setInterval(() => {
			if (Date.now() > e) {
				i();
				return;
			}
			r();
		}, Xe);
		Q = () => {
			clearInterval(a), t();
		}, r();
	}), Z;
}
function it() {
	Z = void 0;
}
function at() {
	return async (e) => {
		let t = await ot(e.body), n;
		try {
			n = await $e({
				type: We,
				replyType: Ge,
				payload: {
					path: e.path,
					method: e.method,
					headers: e.headers,
					body: t
				}
			});
		} catch (e) {
			throw lt(e);
		}
		if (!n.response) throw new J("fetch_error");
		return ct(n.response);
	};
}
async function ot(e) {
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
		t.push(st(e).then((t) => ({
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
var st = (e) => new Promise((t, n) => {
	let r = new FileReader();
	r.onload = () => t(String(r.result).replace(/^data:[^,]*,/, "")), r.onerror = () => n(r.error), r.readAsDataURL(e);
});
function ct(e) {
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
function lt(e) {
	if (Ve(e)) return e;
	if (e instanceof Y) switch (e.kind) {
		case "no_session": return new J("extension_session_missing", 401);
		case "too_large": return new J("extension_request_too_large");
		default: return console.warn(`Tolgee: the browser extension did not serve the request (${e.kind}): ${e.message}`), new J("fetch_error");
	}
	return new J("fetch_error");
}
var ut = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
function dt(e) {
	let t = ut.indexOf(e);
	if (t === -1) throw Error("Invalid character found: " + e);
	return t;
}
function ft(e) {
	let t = new Uint8Array(e), n = t.length, r = "", i = 2 ** 16 - 1;
	for (let e = 0; e < n; e += i) e + i > n && (i = n - e), r += String.fromCharCode.apply(null, t.subarray(e, e + i));
	return r;
}
function pt(e) {
	e = e.toUpperCase();
	let t = e.length, n = 0, r = 0, i = 0, a = new Uint8Array(t * 5 / 8 | 0);
	for (let o = 0; o < t; o++) r = r << 5 | dt(e[o]), n += 5, n >= 8 && (a[i++] = r >>> n - 8 & 255, n -= 8);
	return ft(a.buffer);
}
function mt(e) {
	if (e) try {
		let [t, n] = e.split("_");
		if (t === "tgpak") {
			let [e] = pt(n).split("_");
			return /^\d+$/.test(e) ? Number(e) : void 0;
		}
	} catch {
		console.warn("Tolgee: Api key can't be parsed");
	}
}
function ht(e) {
	if (!e) return;
	let [t] = e.split("_");
	return t === "tgpak" ? "tgpak" : t === "tgpat" ? "tgpat" : "legacy";
}
function gt(e) {
	let { apiKey: t, projectId: n, transport: r } = e;
	return r ? {
		authHeader: {},
		viaExtension: !0,
		hasCredential: !0,
		projectId: n,
		requiresExplicitProject: !0
	} : {
		authHeader: _t(t),
		viaExtension: !1,
		hasCredential: !!t,
		projectId: mt(t) ?? n,
		requiresExplicitProject: ht(t) === "tgpat"
	};
}
function _t(e) {
	return e ? { "X-API-Key": e } : {};
}
function vt(e, t) {
	let n = (n) => {
		e.includes(n.data?.type) && t(n.data?.data);
	};
	return window.addEventListener("message", n, !1), { unsubscribe() {
		window.removeEventListener("message", n);
	} };
}
function yt({ message: e, recievingMessage: t, data: n, attempts: r = 1, timeout: i = 300 }) {
	let a = !1, o = () => new Promise((r, a) => {
		let o = vt(t, c);
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
function bt() {
	let e;
	async function t(t) {
		e?.();
		let { cancel: n, promise: r } = yt({
			message: "TOLGEE_READY",
			recievingMessage: ["TOLGEE_PLUGIN_READY", "TOLGEE_PLUGIN_UPDATED"],
			data: t,
			attempts: 4
		});
		return e = n, r;
	}
	return { update: t };
}
var $ = "__tolgee_", xt = `${$}apiKey`, St = `${$}apiUrl`, Ct = `${$}branch`, wt = `${$}projectId`, Tt = `${$}session`, Et = "tolgee-in-context-tools.umd.min.js", Dt = "@tolgee/in-context-tools", Ot = "InContextTools", kt = "https://cdn.jsdelivr.net/npm", At = null;
function jt(e) {
	return At ||= It(Mt(e)).then(() => window[Dt][Ot]), At;
}
function Mt(e) {
	return Nt() || `${kt}/@tolgee/web@${e}/dist/${Et}`;
}
function Nt() {
	if (Ie()) return;
	let e = window.__TOLGEE_IN_CONTEXT_URL__;
	return Ft(e, window.location) ? e : void 0;
}
var Pt = (e) => e === "localhost" || e === "127.0.0.1" || e === "::1" || e === "[::1]";
function Ft(e, t) {
	if (!e || !Pt(t.hostname)) return !1;
	try {
		let n = new URL(e, t.href);
		return n.origin === t.origin || Pt(n.hostname);
	} catch {
		return !1;
	}
}
function It(e) {
	return new Promise((t, n) => {
		let r = document.createElement("script");
		r.src = e, r.addEventListener("load", () => t()), r.addEventListener("error", (e) => n(e.error)), document.head.appendChild(r);
	});
}
function Lt() {
	let e = sessionStorage.getItem(xt) || void 0, t = sessionStorage.getItem(St) || void 0, n = sessionStorage.getItem(Ct) || void 0, r = sessionStorage.getItem(wt) || void 0, i = Je(sessionStorage.getItem(Tt));
	if (!t) return;
	let a = S(S({ apiUrl: t }, r === void 0 ? {} : { projectId: r }), n === void 0 ? {} : { branch: n });
	if (e) return C(S({}, a), { apiKey: e });
	if (i && r) return C(S({}, a), { transport: at() });
}
function Rt() {
	let e = [];
	for (let t = 0; t < sessionStorage.length; t++) {
		let n = sessionStorage.key(t);
		n?.startsWith($) && e.push(n);
	}
	e.forEach((e) => sessionStorage.removeItem(e));
}
function zt(e) {
	if (!e.isDev()) return;
	let { requiresExplicitProject: t, projectId: n } = gt(e.getInitialOptions());
	t && n === void 0 && console.warn("Tolgee: `projectId` is missing from the SDK configuration. It is required when authenticating with a PAT or connecting through the Tolgee browser extension. See https://docs.tolgee.io/js-sdk/api/core_package/options#projectid");
}
function Bt(e) {
	document.readyState === "loading" ? document.addEventListener && document.addEventListener("DOMContentLoaded", e) : Promise.resolve().then(() => {
		e();
	});
}
var Vt = () => (e) => e;
(() => {
	if (typeof window > "u") return !1;
	try {
		return typeof sessionStorage < "u" && sessionStorage;
	} catch (e) {
		return console.error("sessionStorage not available", e), !1;
	}
})() && (Vt = () => (e) => {
	let t = bt(), n = () => {
		let t = e.getInitialOptions();
		return {
			uiPresent: !0,
			uiVersion: void 0,
			protocolVersion: He,
			mode: e.isDev() ? "development" : "production",
			config: {
				apiUrl: t.apiUrl || "",
				apiKey: t.transport ? "" : t.apiKey || "",
				projectId: t.projectId,
				branch: t.branch
			}
		};
	};
	return zt(e), e.on("running", ({ value: e }) => {
		e && Bt(() => {
			t.update(n()).catch(Rt);
		});
	}), Lt() && (async () => {
		let e = await jt("7.2.1");
		return (t) => {
			let n = Lt();
			return t.addPlugin(e({ credentials: n })), t;
		};
	})().then((t) => {
		e.addPlugin(t);
	}).catch((e) => {
		console.error("Tolgee: Failed to load in-context tools"), console.error(e);
	}), e;
});
function Ht() {
	return we().use(Vt());
}
var Ut = n({
	name: "TolgeeProvider",
	props: {
		tolgee: {
			type: Object,
			required: !1
		},
		fallback: { type: [Object, String] },
		ssr: {
			type: [Object, Boolean],
			required: !1
		}
	},
	setup(t) {
		let n = a("tolgeeContext");
		t.tolgee && (n.value.tolgee = t.tolgee);
		let r = e(() => n.value.tolgee);
		if (!r.value) throw Error("Tolgee instance not provided");
		if (n.value.isInitialRender && t.ssr) {
			let e = typeof t.ssr == "object" ? t.ssr : {};
			if (r.value.setEmitterActive(!1), r.value.addStaticData(e.staticData), r.value.changeLanguage(e.language), r.value.setEmitterActive(!0), !r.value.isLoaded()) {
				let t = r.value.getRequiredDescriptors(e.language).map((e) => P(e)).filter((t) => !e.staticData?.[t]);
				t.length && console.warn(`Tolgee: Missing records in "staticData" for proper SSR functionality: ${t.map((e) => `"${e}"`).join(", ")}`);
			}
		}
		s(() => {
			n.value.isInitialRender = !1;
		});
		let i = u(!r.value.isLoaded());
		return o(() => {
			r.value.run().finally(() => {
				i.value = !1;
			});
		}), c(() => {
			r.value.stop();
		}), { isLoading: i };
	},
	render() {
		var e, t;
		return this.isLoading ? (t = this.$slots).fallback?.call(t) || this.fallback || null : (e = this.$slots).default?.call(e);
	}
}), Wt = (t) => {
	let n = ne(t), r = a("tolgeeContext"), i = e(() => r.value.tolgee);
	if (!i.value) throw Error("Tolgee instance not provided");
	let o = u(d()), s = i.value.on("update", () => {
		o.value = d(), l.value = !i.value.isLoaded(n);
	});
	i.value.addActiveNs(n), c(() => {
		s?.unsubscribe(), i.value.removeActiveNs(n);
	});
	let l = u(!i.value.isLoaded(n));
	function d() {
		return (e) => {
			let t = e.ns ?? n?.[0];
			return i.value.t(Object.assign(Object.assign({}, e), { ns: t }));
		};
	}
	return {
		t: o,
		isLoading: l
	};
};
n({
	name: "T",
	props: {
		keyName: {
			type: String,
			required: !0
		},
		params: Object,
		defaultValue: String,
		noWrap: {
			type: Boolean,
			default: !1
		},
		ns: { type: String },
		language: { type: String }
	},
	setup() {
		let { t: e } = Wt();
		return { t: e };
	},
	render() {
		let e = {};
		Object.keys(this.$slots).forEach((t) => {
			e[t] = this.$slots[t]();
		});
		let t = Object.assign({}, this.$props.params, e), n = {
			key: this.$props.keyName,
			params: t,
			defaultValue: this.$props.defaultValue,
			noWrap: this.$props.noWrap,
			ns: this.$props.ns,
			language: this.$props.language
		};
		return this.t(n);
	}
});
var Gt = (t) => {
	let { t: n, isLoading: r } = Wt(t);
	return {
		t: e(() => (...e) => {
			let t = B(...e);
			return n.value(t);
		}),
		isLoading: r
	};
}, Kt = { install(e, t) {
	let n = t?.tolgee;
	if (!n) throw Error("Tolgee instance not passed in options");
	let r = !!t?.enableSSR, i = u({
		tolgee: n,
		isInitialRender: r
	});
	if (e.provide("tolgeeContext", i), r) {
		let e = () => Object.assign(Object.assign({}, i.value.tolgee), { t: ((...e) => {
			let t = B(...e);
			return n.t(Object.assign({}, t));
		}) }), t = () => Object.assign(Object.assign({}, i.value.tolgee), { t: ((...e) => {
			let t = B(...e);
			return n.t(Object.assign(Object.assign({}, t), { noWrap: !0 }));
		}) });
		i.value.tolgee = t(), p(() => i.value.isInitialRender, (t) => {
			t || (i.value.tolgee = e());
		});
	}
	i.value.tolgee.on("cache", () => {
		i.value.tolgee = Object.freeze(Object.assign({}, i.value.tolgee));
	}), e.config.globalProperties.$t = ((...e) => i.value.tolgee.t(...e)), e.config.globalProperties.$tolgee = i.value.tolgee;
} }, qt = n({
	__name: "EmptyComponent",
	setup(e) {
		let { t } = Gt();
		return t.value("header.home"), (e, t) => null;
	}
}), Jt = n({
	__name: "LibWrapper",
	setup(e) {
		let n = Ht().use(Fe()).init({
			language: "en",
			staticData: { en: { header: { home: "Home" } } }
		}), i = r()?.appContext.app;
		return i && !i.config.globalProperties.$t && i.use(Kt, { tolgee: n }), (e, n) => (l(), t(f(Ut), null, {
			default: m(() => [d(e.$slots, "default")]),
			_: 3
		}));
	}
}), Yt = { render() {
	return i(Jt, {}, { default: () => i(qt) });
} };
export { Yt as default };
