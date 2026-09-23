import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, onBeforeMount as c, onMounted as l, onUnmounted as u, openBlock as d, ref as f, renderSlot as p, toDisplayString as m, unref as h, watch as g } from "vue";
var _ = Object.defineProperty, v = Object.defineProperties, y = Object.getOwnPropertyDescriptors, b = Object.getOwnPropertySymbols, x = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable, C = (e, t, n) => t in e ? _(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, w = (e, t) => {
	for (var n in t ||= {}) x.call(t, n) && C(e, n, t[n]);
	if (b) for (var n of b(t)) S.call(t, n) && C(e, n, t[n]);
	return e;
}, T = (e, t) => v(e, y(t)), E;
function D(e, t) {
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
function O(e) {
	return !!(e && typeof e.then == "function");
}
function k(e, t) {
	return O(e) ? Promise.resolve(e).then(t) : t(e);
}
function A(e, t, n) {
	function r(n) {
		let r = t(n);
		throw e.emit(r), console.error(r), r;
	}
	try {
		let e = n();
		return O(e) ? e.catch(r) : e;
	} catch (e) {
		r(e);
	}
}
function j(e) {
	let t = (Array.isArray(e) ? e : [e]).map((e) => `'${e}'`), n = t.slice(-2).join(" or ");
	return `Tolgee: You need to specify ${[...t.slice(0, -2), n].join(", ")} option`;
}
function ee(e) {
	return typeof e == "object" && !Array.isArray(e) && e !== null;
}
function te(e) {
	if (typeof e == "string") return [e];
	if (Array.isArray(e)) return e;
}
function M(e) {
	return te(e) || [];
}
function ne(e, t) {
	return ee(t) ? M(t?.[e]) : M(t);
}
function N(e) {
	return Array.from(new Set(e));
}
function re(e) {
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
}, P = (e) => Object.fromEntries(le(e).entries()), F = (e) => {
	let [t, ...n] = e.split(":");
	return {
		language: t,
		namespace: n.join(":") || ""
	};
}, I = ({ language: e, namespace: t }) => t ? `${e}:${t}` : e, L = (e, t) => {
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
		onPendingLanguageChange: L("pendingLanguage", t),
		onLanguageChange: L("language", t),
		onLoadingChange: L("loading", t),
		onFetchingChange: L("fetching", t),
		onInitialLoaded: L("initialLoad", t),
		onRunningChange: L("running", t),
		onCacheChange: L("cache", t),
		onPermanentChange: L("permanentChange", t),
		onError: L("error", t),
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
}, me = class extends Error {
	constructor(e, t) {
		super(e), this.cause = t, this.name = "LanguageStorageError";
	}
};
function he(e, t, n, r, i, a, o) {
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
			let r = new fe(n, t);
			throw e.onError.emit(r), console.error(r), r;
		}
		let i = t(n);
		if (O(i)) {
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
			let r = new fe(t, n, !0);
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
			return N(e);
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
			let t = M(e);
			return !!Array.from(s.keys()).find((e) => t.includes(F(e).namespace));
		},
		isLoading(e, t) {
			let n = M(t);
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
function ge(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
var _e = {
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
}, R = "invalid", ve = {
	observerOptions: _e,
	observerType: "invisible",
	onFormatError: R,
	apiUrl: "https://app.tolgee.io",
	autoLoadRequiredData: !0,
	fetch: ce(),
	onTranslationMissing: ({ key: e }) => e
}, z = (...e) => {
	let t = {};
	return e.forEach((e) => {
		t = Object.assign(Object.assign(Object.assign({}, t), e), { observerOptions: Object.assign(Object.assign({}, t.observerOptions), e?.observerOptions) });
	}), t;
};
function ye(e, t) {
	let n = z(ve, t?.initialOptions, e);
	return n.apiUrl = re(n.apiUrl), e?.fetch && (n.fetch = ce(e.fetch)), {
		initialOptions: n,
		activeNamespaces: t?.activeNamespaces || /* @__PURE__ */ new Map(),
		language: t?.language,
		pendingLanguage: t?.language,
		isInitialLoading: !1,
		isRunning: !1
	};
}
function be(e, t, n, r, i, a, o, s) {
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
		return D.formatTranslation(Object.assign(Object.assign({}, e), {
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
		return A(s.onError, (e) => new me("Tolgee: Failed to load language", e), () => l.languageStorage?.getLanguage(p()));
	}
	function C() {
		if (!l.languageDetector) return;
		let e = n();
		return A(s.onError, (e) => new pe("Tolgee: Failed to detect language", e), () => l.languageDetector?.getLanguage(Object.assign({ availableLanguages: e }, p())));
	}
	function w(e) {
		e && l.backends.push(e);
	}
	function T(e) {
		l.devBackend = e;
	}
	function E(e, t) {
		t(e, Object.freeze({
			setFinalFormatter: _,
			addFormatter: g,
			setObserver: m,
			hasObserver: h,
			setUi: v,
			hasUi: y,
			setDevBackend: T,
			addBackend: w,
			setLanguageDetector: x,
			setLanguageStorage: b
		}));
	}
	let D = Object.freeze({
		addPlugin: E,
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
				highlight: D.highlight,
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
			return k(S(), (t) => (!e || e.includes(t)) && t ? t : C());
		},
		setStoredLanguage(e) {
			return A(s.onError, (e) => new me("Tolgee: Failed to store language", e), () => l.languageStorage?.setLanguage(e, p()));
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
			if ((r || i) && a && D.hasDevBackend()) return l.devBackend?.getRecord(Object.assign({
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
			return !!D.getDevBackend();
		},
		formatTranslation(n) {
			var { formatEnabled: r } = n, i = ge(n, ["formatEnabled"]);
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
				let n = ie(e) || R, r = t().onFormatError, a = typeof r;
				h = a === "string" ? r : a === "function" ? r(n, i) : R, h = v(h);
			}
			return h;
		}
	});
	return D;
}
var xe = (e, t, n) => {
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
function Se(e, t, n) {
	let r = ye(), i, a = Object.freeze({
		init(e) {
			r = ye(e, r);
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
			M(e).forEach((e) => {
				let t = r.activeNamespaces.get(e);
				t === void 0 ? r.activeNamespaces.set(e, 1) : r.activeNamespaces.set(e, t + 1);
			});
		},
		removeActiveNs(e) {
			M(e).forEach((e) => {
				let t = r.activeNamespaces.get(e);
				t !== void 0 && t > 1 ? r.activeNamespaces.set(e, t - 1) : r.activeNamespaces.delete(e);
			});
		},
		getRequiredNamespaces() {
			return N([
				a.getDefaultNs(),
				...r.initialOptions.ns || [],
				...M(r.initialOptions.fallbackNs),
				...r.activeNamespaces.keys()
			]);
		},
		getFallbackLangs(e) {
			let t = e || a.getLanguage();
			return t ? N([t, ...ne(t, r.initialOptions.fallbackLanguage)]) : [];
		},
		getFallbackNs() {
			return M(r.initialOptions.fallbackNs);
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
			i = e ? Object.assign(Object.assign({}, e), { apiUrl: re(e.apiUrl) }) : void 0;
		}
	});
	return a;
}
function Ce(e) {
	var { ns: t, noWrap: n, orEmpty: r, params: i, language: a } = e, o = ge(e, [
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
	return typeof e == "object" && e ? n = e : (n.key = e, typeof t[0] == "string" ? (n.defaultValue = t[0], r = t[1]) : typeof t[0] == "object" && (r = t[0])), r && (n = Object.assign(Object.assign({}, Ce(r)), n)), n;
};
function we({ options: e }) {
	let t = de(), n = xe(!1, () => o.isFetching(), t.onFetchingChange.emit), r = xe(!1, () => S.isLoading(), t.onLoadingChange.emit), i = Se(t.onLanguageChange, t.onPendingLanguageChange, t.onRunningChange), a = be(i.getLanguage, i.getInitialOptions, i.getAvailableLanguages, u, _, v, f, t), o = he(t, a.getBackendRecord, a.getBackendDevRecord, i.withDefaultNs, i.isInitialLoading, n, r);
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
		return N([...M(l(e)), ...c()]);
	}
	function d(e) {
		return N([...M(e ?? l()), ...i.getRequiredNamespaces()]);
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
			if (!e) throw Error(j("availableLanguages"));
			t = e;
		}
		if (Array.isArray(e.namespaces)) n = e.namespaces;
		else if (e.namespaces === "all") {
			let e = S.getAvailableNs();
			if (!e) throw Error(j("availableNs"));
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
		let e = k(b(), () => {
			let e = h();
			if (e.length && i.getInitialOptions().autoLoadRequiredData) return o.loadRecords(e, { useCache: !0 });
		});
		if (O(e)) return i.setInitialLoading(!0), n.notify(), r.notify(), Promise.resolve(e).then(() => {
			i.setInitialLoading(!1), n.notify(), r.notify(), t.onInitialLoaded.emit();
		});
		t.onInitialLoaded.emit();
	}
	function b() {
		if (!i.getLanguage()) return k(a.getInitialLanguage(), (e) => {
			let t = e || i.getInitialOptions().defaultLanguage;
			t && i.setLanguage(t);
		});
	}
	function x() {
		if ((a.getLanguageDetector() || a.getLanguageStorage()) && !i.getAvailableLanguages()) throw Error(j("availableLanguages"));
		if (!i.getLanguage() && !i.getInitialOptions().defaultLanguage) throw Error(j(["defaultLanguage", "language"]));
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
function Te(e) {
	let t = we({ options: e });
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
var Ee = () => {
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
			let n = Te(z(e.options, t));
			return e.plugins.forEach(n.addPlugin), n;
		}
	});
	return t;
}, De = 0, V = 1, Oe = 2, ke = class extends Error {
	constructor(e, t, n) {
		let r, i = "";
		e === De ? r = "Empty parameter" : e === V ? (r = "Unexpected character", i = "Did you forget to use FormatIcu to render ICU message syntax?") : r = "Unexpected end", super(`Tolgee parser: ${r} at ${t} in "${n}"` + (i ? "\n" + i : "")), this.code = e, this.index = t;
	}
};
function Ae(e) {
	return /\s/.test(e);
}
var H = 0, U = 1, W = 2, G = 3, K = 4, je = /* @__PURE__ */ new Set([
	W,
	U,
	H
]), q = "'", Me = /* @__PURE__ */ new Set([
	"{",
	"}",
	q
]), Ne = (e) => /[0-9a-zA-Z_]/.test(e);
function Pe(e) {
	let t = H, n = "", r = "", i = "", a = [], o = [], s = 0;
	function c(t) {
		throw new ke(t, s, e);
	}
	let l = () => {
		a.push(n), n = "";
	}, u = () => {
		Ne(i) || c(V), r += i;
	}, d = () => {
		r === "" && c(De), o.push(r), r = "";
	};
	for (s = 0; s < e.length; s++) switch (i = e[s], t) {
		case H:
			i === q ? (n += i, t = U) : i === "{" ? (l(), t = G) : (n += i, t = H);
			break;
		case U:
			Me.has(i) ? (n = n.slice(0, -1) + i, t = W) : (n += i, t = H);
			break;
		case W:
			i === q ? t = H : (n += i, t = W);
			break;
		case G:
			i === "}" ? (d(), t = H) : Ae(i) ? r !== "" && (d(), t = K) : (u(), t = G);
			break;
		case K: i == "}" ? t = H : Ae(i) ? t = K : c(V);
	}
	return je.has(t) || c(Oe), l(), [a, o];
}
function Fe(e, t) {
	let [n, r] = Pe(e), i = [n[0]];
	for (let a = 1; a < n.length; a++) {
		let o = t?.[r[a - 1]];
		if (o === void 0) throw Error(`Missing parameter "${r[a - 1]}" in "${e}"`);
		i.push(String(o)), i.push(n[a]);
	}
	return i.join("");
}
function Ie() {
	return { format: ({ translation: e, params: t }) => Fe(e, t) };
}
var Le = () => (e, t) => (t.setFinalFormatter(Ie()), e);
function Re() {
	return globalThis.window?.document?.createElement === void 0;
}
var ze = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Be = {};
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
})(typeof window < "u" ? window : ze);
var Ve = D({
	__proto__: null,
	default: Be
}, [Be]);
(E = console.assert) == null || E.call(console, Ve), RegExp(`([${["‌", "‍"].join("")}]{9})+`, "g");
function He(e, t) {
	return t ? `${t}: ${e}` : e;
}
var J = class e extends Error {
	constructor(t, n, r) {
		super(He(t, n)), this.code = t, this.status = n, this.params = r, Object.setPrototypeOf(this, e.prototype);
	}
};
function Ue(e) {
	return e instanceof Error && typeof e.code == "string";
}
var We = 2, Ge = 35e3, Ke = "TOLGEE_API_REQUEST", qe = "TOLGEE_API_RESPONSE", Je = "TOLGEE_PROXY_PING", Ye = "TOLGEE_PROXY_PONG";
function Xe(e) {
	return e === "oauth" || e === "apiKey";
}
var Y = class e extends Error {
	constructor(t, n) {
		super(n), this.kind = t, this.name = "ExtensionRpcError", Object.setPrototypeOf(this, e.prototype);
	}
}, Ze = 3e3, Qe = 200, $e = 0, X = /* @__PURE__ */ new Map(), et = !1, Z, Q;
async function tt({ type: e, replyType: t, payload: n, timeoutMs: r = Ge, progressType: i, onProgress: a }) {
	it();
	let o = Date.now() + r;
	await at(Math.min(o, Date.now() + Ze));
	let s = o - Date.now();
	if (s <= 0) throw nt(e);
	let c = rt();
	return new Promise((r, o) => {
		let l = setTimeout(() => {
			X.delete(c), ot(), o(nt(e));
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
			data: w({ id: c }, n)
		}, window.origin);
	});
}
var nt = (e) => new Y("unavailable", `the Tolgee browser extension did not answer ${e} in time`), rt = () => `${Date.now()}-${$e++}-${Math.random()}`;
function it() {
	et || (et = !0, window.addEventListener("message", (e) => {
		var t;
		if (e.source !== window || e.origin !== window.location.origin) return;
		let n = e.data?.type;
		if (n === Ye) {
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
function at(e) {
	return Z ||= new Promise((t, n) => {
		let r = () => window.postMessage({ type: Je }, window.origin), i = () => {
			clearInterval(a), ot(), Q = void 0, n(new Y("unavailable", "the Tolgee browser extension did not answer"));
		}, a = setInterval(() => {
			if (Date.now() > e) {
				i();
				return;
			}
			r();
		}, Qe);
		Q = () => {
			clearInterval(a), t();
		}, r();
	}), Z;
}
function ot() {
	Z = void 0;
}
function st() {
	return async (e) => {
		let t = await ct(e.body), n;
		try {
			n = await tt({
				type: Ke,
				replyType: qe,
				payload: {
					path: e.path,
					method: e.method,
					headers: e.headers,
					body: t
				}
			});
		} catch (e) {
			throw dt(e);
		}
		if (!n.response) throw new J("fetch_error");
		return ut(n.response);
	};
}
async function ct(e) {
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
		t.push(lt(e).then((t) => ({
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
var lt = (e) => new Promise((t, n) => {
	let r = new FileReader();
	r.onload = () => t(String(r.result).replace(/^data:[^,]*,/, "")), r.onerror = () => n(r.error), r.readAsDataURL(e);
});
function ut(e) {
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
function dt(e) {
	if (Ue(e)) return e;
	if (e instanceof Y) switch (e.kind) {
		case "no_session": return new J("extension_session_missing", 401);
		case "too_large": return new J("extension_request_too_large");
		default: return console.warn(`Tolgee: the browser extension did not serve the request (${e.kind}): ${e.message}`), new J("fetch_error");
	}
	return new J("fetch_error");
}
var ft = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
function pt(e) {
	let t = ft.indexOf(e);
	if (t === -1) throw Error("Invalid character found: " + e);
	return t;
}
function mt(e) {
	let t = new Uint8Array(e), n = t.length, r = "", i = 2 ** 16 - 1;
	for (let e = 0; e < n; e += i) e + i > n && (i = n - e), r += String.fromCharCode.apply(null, t.subarray(e, e + i));
	return r;
}
function ht(e) {
	e = e.toUpperCase();
	let t = e.length, n = 0, r = 0, i = 0, a = new Uint8Array(t * 5 / 8 | 0);
	for (let o = 0; o < t; o++) r = r << 5 | pt(e[o]), n += 5, n >= 8 && (a[i++] = r >>> n - 8 & 255, n -= 8);
	return mt(a.buffer);
}
function gt(e) {
	if (e) try {
		let [t, n] = e.split("_");
		if (t === "tgpak") {
			let [e] = ht(n).split("_");
			return /^\d+$/.test(e) ? Number(e) : void 0;
		}
	} catch {
		console.warn("Tolgee: Api key can't be parsed");
	}
}
function _t(e) {
	if (!e) return;
	let [t] = e.split("_");
	return t === "tgpak" ? "tgpak" : t === "tgpat" ? "tgpat" : "legacy";
}
function vt(e) {
	let { apiKey: t, projectId: n, transport: r } = e;
	return r ? {
		authHeader: {},
		viaExtension: !0,
		hasCredential: !0,
		projectId: n,
		requiresExplicitProject: !0
	} : {
		authHeader: yt(t),
		viaExtension: !1,
		hasCredential: !!t,
		projectId: gt(t) ?? n,
		requiresExplicitProject: _t(t) === "tgpat"
	};
}
function yt(e) {
	return e ? { "X-API-Key": e } : {};
}
function bt(e, t) {
	let n = (n) => {
		e.includes(n.data?.type) && t(n.data?.data);
	};
	return window.addEventListener("message", n, !1), { unsubscribe() {
		window.removeEventListener("message", n);
	} };
}
function xt({ message: e, recievingMessage: t, data: n, attempts: r = 1, timeout: i = 300 }) {
	let a = !1, o = () => new Promise((r, a) => {
		let o = bt(t, c);
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
function St() {
	let e;
	async function t(t) {
		e?.();
		let { cancel: n, promise: r } = xt({
			message: "TOLGEE_READY",
			recievingMessage: ["TOLGEE_PLUGIN_READY", "TOLGEE_PLUGIN_UPDATED"],
			data: t,
			attempts: 4
		});
		return e = n, r;
	}
	return { update: t };
}
var $ = "__tolgee_", Ct = `${$}apiKey`, wt = `${$}apiUrl`, Tt = `${$}branch`, Et = `${$}projectId`, Dt = `${$}session`, Ot = "tolgee-in-context-tools.umd.min.js", kt = "@tolgee/in-context-tools", At = "InContextTools", jt = "https://cdn.jsdelivr.net/npm", Mt = null;
function Nt(e) {
	return Mt ||= Rt(Pt(e)).then(() => window[kt][At]), Mt;
}
function Pt(e) {
	return Ft() || `${jt}/@tolgee/web@${e}/dist/${Ot}`;
}
function Ft() {
	if (Re()) return;
	let e = window.__TOLGEE_IN_CONTEXT_URL__;
	return Lt(e, window.location) ? e : void 0;
}
var It = (e) => e === "localhost" || e === "127.0.0.1" || e === "::1" || e === "[::1]";
function Lt(e, t) {
	if (!e || !It(t.hostname)) return !1;
	try {
		let n = new URL(e, t.href);
		return n.origin === t.origin || It(n.hostname);
	} catch {
		return !1;
	}
}
function Rt(e) {
	return new Promise((t, n) => {
		let r = document.createElement("script");
		r.src = e, r.addEventListener("load", () => t()), r.addEventListener("error", (e) => n(e.error)), document.head.appendChild(r);
	});
}
function zt() {
	let e = sessionStorage.getItem(Ct) || void 0, t = sessionStorage.getItem(wt) || void 0, n = sessionStorage.getItem(Tt) || void 0, r = sessionStorage.getItem(Et) || void 0, i = Xe(sessionStorage.getItem(Dt));
	if (!t) return;
	let a = w(w({ apiUrl: t }, r === void 0 ? {} : { projectId: r }), n === void 0 ? {} : { branch: n });
	if (e) return T(w({}, a), { apiKey: e });
	if (i && r) return T(w({}, a), { transport: st() });
}
function Bt() {
	let e = [];
	for (let t = 0; t < sessionStorage.length; t++) {
		let n = sessionStorage.key(t);
		n?.startsWith($) && e.push(n);
	}
	e.forEach((e) => sessionStorage.removeItem(e));
}
function Vt(e) {
	if (!e.isDev()) return;
	let { requiresExplicitProject: t, projectId: n } = vt(e.getInitialOptions());
	t && n === void 0 && console.warn("Tolgee: `projectId` is missing from the SDK configuration. It is required when authenticating with a PAT or connecting through the Tolgee browser extension. See https://docs.tolgee.io/js-sdk/api/core_package/options#projectid");
}
function Ht(e) {
	document.readyState === "loading" ? document.addEventListener && document.addEventListener("DOMContentLoaded", e) : Promise.resolve().then(() => {
		e();
	});
}
var Ut = () => (e) => e;
(() => {
	if (typeof window > "u") return !1;
	try {
		return typeof sessionStorage < "u" && sessionStorage;
	} catch (e) {
		return console.error("sessionStorage not available", e), !1;
	}
})() && (Ut = () => (e) => {
	let t = St(), n = () => {
		let t = e.getInitialOptions();
		return {
			uiPresent: !0,
			uiVersion: void 0,
			protocolVersion: We,
			mode: e.isDev() ? "development" : "production",
			config: {
				apiUrl: t.apiUrl || "",
				apiKey: t.transport ? "" : t.apiKey || "",
				projectId: t.projectId,
				branch: t.branch
			}
		};
	};
	return Vt(e), e.on("running", ({ value: e }) => {
		e && Ht(() => {
			t.update(n()).catch(Bt);
		});
	}), zt() && (async () => {
		let e = await Nt("7.2.1");
		return (t) => {
			let n = zt();
			return t.addPlugin(e({ credentials: n })), t;
		};
	})().then((t) => {
		e.addPlugin(t);
	}).catch((e) => {
		console.error("Tolgee: Failed to load in-context tools"), console.error(e);
	}), e;
});
function Wt() {
	return Ee().use(Ut());
}
i({
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
	setup(e) {
		let n = s("tolgeeContext");
		e.tolgee && (n.value.tolgee = e.tolgee);
		let r = t(() => n.value.tolgee);
		if (!r.value) throw Error("Tolgee instance not provided");
		if (n.value.isInitialRender && e.ssr) {
			let t = typeof e.ssr == "object" ? e.ssr : {};
			if (r.value.setEmitterActive(!1), r.value.addStaticData(t.staticData), r.value.changeLanguage(t.language), r.value.setEmitterActive(!0), !r.value.isLoaded()) {
				let e = r.value.getRequiredDescriptors(t.language).map((e) => I(e)).filter((e) => !t.staticData?.[e]);
				e.length && console.warn(`Tolgee: Missing records in "staticData" for proper SSR functionality: ${e.map((e) => `"${e}"`).join(", ")}`);
			}
		}
		l(() => {
			n.value.isInitialRender = !1;
		});
		let i = f(!r.value.isLoaded());
		return c(() => {
			r.value.run().finally(() => {
				i.value = !1;
			});
		}), u(() => {
			r.value.stop();
		}), { isLoading: i };
	},
	render() {
		var e, t;
		return this.isLoading ? (t = this.$slots).fallback?.call(t) || this.fallback || null : (e = this.$slots).default?.call(e);
	}
});
var Gt = (e) => {
	let n = te(e), r = s("tolgeeContext"), i = t(() => r.value.tolgee);
	if (!i.value) throw Error("Tolgee instance not provided");
	let a = f(l()), o = i.value.on("update", () => {
		a.value = l(), c.value = !i.value.isLoaded(n);
	});
	i.value.addActiveNs(n), u(() => {
		o?.unsubscribe(), i.value.removeActiveNs(n);
	});
	let c = f(!i.value.isLoaded(n));
	function l() {
		return (e) => {
			let t = e.ns ?? n?.[0];
			return i.value.t(Object.assign(Object.assign({}, e), { ns: t }));
		};
	}
	return {
		t: a,
		isLoading: c
	};
};
i({
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
		let { t: e } = Gt();
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
var Kt = (e) => {
	let { t: n, isLoading: r } = Gt(e);
	return {
		t: t(() => (...e) => {
			let t = B(...e);
			return n.value(t);
		}),
		isLoading: r
	};
}, qt = { install(e, t) {
	let n = t?.tolgee;
	if (!n) throw Error("Tolgee instance not passed in options");
	let r = !!t?.enableSSR, i = f({
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
		i.value.tolgee = t(), g(() => i.value.isInitialRender, (t) => {
			t || (i.value.tolgee = e());
		});
	}
	i.value.tolgee.on("cache", () => {
		i.value.tolgee = Object.freeze(Object.assign({}, i.value.tolgee));
	}), e.config.globalProperties.$t = ((...e) => i.value.tolgee.t(...e)), e.config.globalProperties.$tolgee = i.value.tolgee;
} }, Jt = [
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
];
function Yt(e) {
	return Jt.includes(e);
}
var Xt = window.location.pathname.split("/")[1] ?? "", Zt = Wt().use(Le()).init({
	language: Yt(Xt) ? Xt : "en",
	staticData: {
		en: () => import("./en-D9RK2fDr.js"),
		fr: () => import("../../../../locales/fr.json"),
		es: () => import("../../../../locales/es.json"),
		de: () => import("../../../../locales/de.json"),
		it: () => import("../../../../locales/it.json"),
		pt: () => import("../../../../locales/pt.json"),
		zh: () => import("../../../../locales/zh.json"),
		ja: () => import("../../../../locales/ja.json"),
		ko: () => import("../../../../locales/ko.json"),
		ru: () => import("../../../../locales/ru.json")
	}
});
function Qt() {
	let { t: e } = Kt();
	return { t: ((...t) => e.value(...t)) };
}
function $t(e) {
	c(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), l(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var en = { class: "mb-4 text-3xl font-bold text-foreground" }, tn = { class: "mb-8 max-w-3xl text-muted-foreground" }, nn = i({
	__name: "AboutHeader",
	setup(t) {
		$t("AboutHeader");
		let { t: i } = Qt();
		return (t, a) => (d(), n(e, null, [r("h1", en, m(h(i)("about.header.title")), 1), r("p", tn, m(h(i)("about.header.description")), 1)], 64));
	}
}), rn = i({
	__name: "Wrapper",
	setup(e) {
		let t = a()?.appContext.app;
		return t && !t.config.globalProperties.$t && t.use(qt, { tolgee: Zt }), (e, t) => p(e.$slots, "default");
	}
}), an = { render() {
	return o(rn, {}, { default: () => o(nn) });
} };
export { an as default };
var e = {
	appName: "i18n Bench",
	siteName: "i18n Benchmark",
	contactEmail: "contact@intlayer.org",
	goToGithub: "Go to GitHub"
}, t = {
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
	settings: "Settings"
}, n = {
	title: "i18n Benchmark",
	description: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	resources: "Resources",
	github: "GitHub",
	methodology: "Methodology",
	contributing: "Contributing",
	contact: "Contact",
	builtWith: "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router."
}, r = {
	auto: "Theme: Auto",
	dark: "Theme: Dark",
	light: "Theme: Light",
	labelAuto: "Theme mode: auto (system). Click to switch to light mode.",
	labelOther: "Theme mode: {mode}. Click to switch mode."
}, i = "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", a = {
	hero: {
		title: "i18n Benchmark",
		description: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
		viewResults: "View Results",
		methodology: "Methodology"
	},
	whyItMatters: {
		title: "Why These Metrics Matter",
		bundleSizeTitle: "Bundle Size",
		bundleSizeDesc: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
		renderingTitle: "Rendering & Hydration",
		renderingDesc: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
		dynamicLoadingTitle: "Dynamic Loading",
		dynamicLoadingDesc: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
	},
	understandingImpact: {
		title: "Understanding the Impact",
		singleJsonTitle: "Why a single large JSON can hurt performance",
		singleJsonIntro: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
		singleJsonBullet1: "The JSON must be parsed on every page load — blocking the main thread.",
		singleJsonBullet2: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
		singleJsonBullet3: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
		tradeOffsTitle: "The trade-offs of dynamic loading",
		tradeOffsIntro: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
		waterfallLabel: "Waterfall requests:",
		waterfallDesc: "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
		foucLabel: "Flash of untranslated content (FOUC):",
		foucDesc: "users may briefly see translation keys or a fallback language before the chunk arrives.",
		cacheLabel: "Cache invalidation:",
		cacheDesc: "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
		measuresTitle: "What this benchmark measures",
		measuresDesc: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
	},
	resultsTable: {
		title: "Sample Results",
		library: "Library",
		bundleSize: "Bundle Size",
		lookupTime: "Lookup Time",
		lazyLoading: "Lazy Loading",
		yes: "Yes",
		manual: "Manual",
		builtIn: "Built-in"
	}
}, o = {
	header: {
		title: "About This Benchmark",
		description: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
	},
	grid: {
		whyExistsTitle: "Why This Exists",
		whyExistsDesc: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
		methodologyTitle: "Methodology",
		methodologyDesc: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
	},
	whatWeMeasure: {
		title: "What We Measure",
		bundleSizeImpact: "Bundle size impact",
		bundleSizeImpactDesc: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
		renderingOverhead: "Rendering overhead",
		renderingOverheadDesc: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
		hydrationCost: "Hydration cost",
		hydrationCostDesc: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
		lazyLoading: "Lazy loading effectiveness",
		lazyLoadingDesc: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
		localeSwitch: "Locale switch speed",
		localeSwitchDesc: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM."
	}
}, s = {
	header: {
		title: "Blog",
		description: "Insights, tutorials, and analysis from the i18n community."
	},
	list: {
		readMore: "Read More →",
		post1Title: "Comparing i18n Libraries in 2026: A Deep Dive",
		post1Date: "March 15, 2026",
		post1Excerpt: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
		post1Category: "Benchmark",
		post2Title: "How to Reduce Your i18n Bundle by 60%",
		post2Date: "March 8, 2026",
		post2Excerpt: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
		post2Category: "Tutorial",
		post3Title: "The State of Internationalization in React",
		post3Date: "February 28, 2026",
		post3Excerpt: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
		post3Category: "Analysis",
		post4Title: "Migrating from react-i18next to Lingui",
		post4Date: "February 15, 2026",
		post4Excerpt: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
		post4Category: "Tutorial",
		post5Title: "Server Components and i18n: What Changes?",
		post5Date: "February 1, 2026",
		post5Excerpt: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
		post5Category: "Analysis",
		post6Title: "Benchmark Methodology: How We Test",
		post6Date: "January 20, 2026",
		post6Excerpt: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
		post6Category: "Meta"
	}
}, c = {
	header: {
		title: "Careers",
		description: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
	},
	benefits: {
		remoteLabel: "Remote-first",
		remoteValue: "Work from anywhere in the world",
		payLabel: "Competitive pay",
		payValue: "Top-of-market compensation",
		ossLabel: "Open source time",
		ossValue: "20% time for OSS contributions"
	},
	openPositions: {
		title: "Open Positions",
		applyNow: "Apply Now",
		remote: "Remote",
		fullTime: "Full-time",
		partTime: "Part-time",
		engineering: "Engineering",
		documentation: "Documentation",
		community: "Community",
		sfRemote: "San Francisco / Remote",
		frontendTitle: "Senior Frontend Engineer",
		frontendDesc: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
		backendTitle: "Backend Engineer",
		backendDesc: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
		writerTitle: "Technical Writer",
		writerDesc: "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
		devrelTitle: "DevRel Engineer",
		devrelDesc: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
		qaTitle: "QA Engineer",
		qaDesc: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation."
	}
}, l = {
	header: {
		title: "Get in Touch",
		description: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
	},
	form: {
		name: "Name",
		yourName: "Your name",
		email: "Email",
		emailPlaceholder: "you@example.com",
		topic: "Topic",
		bugReport: "Bug Report",
		newBenchmarkIdea: "New Benchmark Idea",
		methodologyQuestion: "Methodology Question",
		contribution: "Contribution",
		other: "Other",
		message: "Message",
		messagePlaceholder: "Describe your question or idea...",
		sendMessage: "Send Message"
	}
}, u = {
	header: {
		title: "Frequently Asked Questions",
		description: "Everything you need to know about i18n Benchmark."
	},
	list: {
		q1: "What is i18n Benchmark?",
		a1: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.",
		q2: "How are benchmarks conducted?",
		a2: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
		q3: "Which libraries are currently supported?",
		a3: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
		q4: "Can I submit my own benchmarks?",
		a4: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
		q5: "How often are benchmarks updated?",
		a5: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
		q6: "Is the data reliable?",
		a6: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
		q7: "Do you offer consulting services?",
		a7: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
		q8: "How can I contribute?",
		a8: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
	}
}, d = {
	header: {
		title: "Simple, Transparent Pricing",
		description: "Choose the plan that fits your team. No hidden fees."
	},
	tiers: {
		starterName: "Starter",
		starterPrice: "$0",
		starterPeriod: "forever",
		starterFeature1: "5 benchmark runs/day",
		starterFeature2: "3 libraries",
		starterFeature3: "Community support",
		starterFeature4: "Public results",
		proName: "Pro",
		proPrice: "$29",
		proPeriod: "/month",
		proFeature1: "Unlimited runs",
		proFeature2: "All libraries",
		proFeature3: "Priority support",
		proFeature4: "Private results",
		proFeature5: "CI integration",
		proFeature6: "Historical data",
		enterpriseName: "Enterprise",
		enterprisePrice: "Custom",
		enterpriseFeature1: "Everything in Pro",
		enterpriseFeature2: "On-premise option",
		enterpriseFeature3: "SSO & SAML",
		enterpriseFeature4: "Dedicated account manager",
		enterpriseFeature5: "Custom SLAs",
		enterpriseFeature6: "Audit logs",
		enterpriseFeature7: "Training sessions",
		contactSales: "Contact Sales",
		getStarted: "Get Started"
	}
}, f = {
	header: {
		title: "Products",
		description: "Tools and services to streamline your internationalization workflow."
	},
	grid: {
		learnMore: "Learn More",
		cliName: "Benchmark CLI",
		cliDesc: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
		cliPrice: "Free",
		cloudName: "Benchmark Cloud",
		cloudDesc: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
		cloudPrice: "$29/mo",
		enterpriseName: "Benchmark Enterprise",
		enterpriseDesc: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
		enterprisePrice: "Contact Us",
		migrationName: "Migration Assistant",
		migrationDesc: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
		migrationPrice: "$99 one-time",
		qaName: "Translation QA",
		qaDesc: "Automated quality checks for missing translations, pluralization issues, and context errors.",
		qaPrice: "$19/mo",
		optimizerName: "Bundle Optimizer",
		optimizerDesc: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
		optimizerPrice: "$49/mo"
	}
}, p = {
	header: {
		title: "Settings",
		description: "Manage your account preferences and configuration."
	},
	profile: {
		title: "Profile",
		displayName: "Display Name",
		email: "Email"
	},
	preferences: {
		title: "Preferences",
		emailNotifications: "Email Notifications",
		weeklyReports: "Receive weekly benchmark reports",
		toggleNotifications: "Toggle notifications",
		darkMode: "Dark Mode",
		darkColorScheme: "Use dark color scheme",
		toggleDarkMode: "Toggle dark mode",
		defaultLanguage: "Default Language",
		english: "English (en)",
		french: "French (fr)",
		german: "German (de)",
		spanish: "Spanish (es)",
		japanese: "Japanese (ja)",
		chinese: "Chinese Simplified (zh-CN)",
		arabic: "Arabic (ar)"
	},
	apiAccess: {
		title: "API Access",
		apiKey: "API Key",
		copy: "Copy",
		description: "Use this key to access the benchmarking API programmatically."
	},
	footer: {
		cancel: "Cancel",
		saveChanges: "Save Changes"
	}
}, m = {
	header: {
		title: "Our Team",
		description: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
	},
	grid: {
		member1Name: "Sarah Chen",
		member1Role: "Founder & Lead Engineer",
		member1Bio: "Former Google engineer with 10 years of experience building internationalization systems at scale.",
		member2Name: "Marcus Weber",
		member2Role: "Performance Engineer",
		member2Bio: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
		member3Name: "Aisha Patel",
		member3Role: "Developer Advocate",
		member3Bio: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
		member4Name: "Tomás Rodríguez",
		member4Role: "Full-Stack Developer",
		member4Bio: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
		member5Name: "Yuki Tanaka",
		member5Role: "Data Analyst",
		member5Bio: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
		member6Name: "Elena Kowalski",
		member6Role: "Community Manager",
		member6Bio: "Manages community contributions, partnerships, and events. Background in open source governance."
	}
}, h = {
	title: "404",
	description: "Oops! Page not found",
	returnHome: "Return to Home"
}, g = {
	shared: e,
	header: t,
	footer: n,
	themeToggle: r,
	mockBanner: i,
	home: a,
	about: o,
	blog: s,
	careers: c,
	contact: l,
	faq: u,
	pricing: d,
	products: f,
	settings: p,
	team: m,
	notFound: h
};
export { o as about, s as blog, c as careers, l as contact, g as default, u as faq, n as footer, t as header, a as home, i as mockBanner, h as notFound, d as pricing, f as products, p as settings, e as shared, m as team, r as themeToggle };
