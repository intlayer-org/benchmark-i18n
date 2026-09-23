import { createComponent as e, memo as t } from "solid-js/web";
var n = Object.defineProperty, r = Object.defineProperties, i = Object.getOwnPropertyDescriptors, a = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable, c = (e, t, r) => t in e ? n(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: r
}) : e[t] = r, l = (e, t) => {
	for (var n in t ||= {}) o.call(t, n) && c(e, n, t[n]);
	if (a) for (var n of a(t)) s.call(t, n) && c(e, n, t[n]);
	return e;
}, u = (e, t) => r(e, i(t)), d;
function f(e, t) {
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
function p(e) {
	return !!(e && typeof e.then == "function");
}
function m(e, t) {
	return p(e) ? Promise.resolve(e).then(t) : t(e);
}
function h(e, t, n) {
	function r(n) {
		let r = t(n);
		throw e.emit(r), console.error(r), r;
	}
	try {
		let e = n();
		return p(e) ? e.catch(r) : e;
	} catch (e) {
		r(e);
	}
}
function g(e) {
	let t = (Array.isArray(e) ? e : [e]).map((e) => `'${e}'`), n = t.slice(-2).join(" or ");
	return `Tolgee: You need to specify ${[...t.slice(0, -2), n].join(", ")} option`;
}
function _(e) {
	return typeof e == "object" && !Array.isArray(e) && e !== null;
}
function v(e) {
	if (typeof e == "string") return [e];
	if (Array.isArray(e)) return e;
}
function y(e) {
	return v(e) || [];
}
function b(e, t) {
	return _(t) ? y(t?.[e]) : y(t);
}
function x(e) {
	return Array.from(new Set(e));
}
function S(e) {
	return e && e.replace(/\/+$/, "");
}
function C(e) {
	if (typeof e == "string") return e;
	if (typeof e?.message == "string") return e.message;
}
var w = (e, t) => fetch(e, t);
function T(e) {
	return Object.fromEntries(new Headers(e).entries());
}
var E = () => ({
	"x-tolgee-sdk-type": "JS",
	"x-tolgee-sdk-version": "7.2.1"
}), D = (e = w) => (t, n) => {
	let r = T(n?.headers);
	return r["x-api-key"] && (r = Object.assign(Object.assign({}, E()), r)), e(t, Object.assign(Object.assign({}, n), { headers: r }));
}, O = (e) => {
	let t = /* @__PURE__ */ new Map();
	return Object.entries(e).forEach(([e, n]) => {
		if (n != null) {
			if (typeof n == "object") {
				O(n).forEach((n, r) => {
					t.set(e + "." + r, n);
				});
				return;
			}
			t.set(e, n);
		}
	}), t;
}, k = (e) => Object.fromEntries(O(e).entries()), A = (e) => {
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
function ee(e) {
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
function te() {
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
		onUpdate: ee(t),
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
var N = class extends Error {
	constructor(e, t, n = !1) {
		let { language: r, namespace: i } = e;
		super(`Tolgee: Failed to fetch record for "${r}"${i && ` and "${i}"`}`), this.cause = t, this.isDev = n, this.name = "RecordFetchError", this.language = r, this.namespace = i;
	}
}, ne = class extends Error {
	constructor(e, t) {
		super(e), this.cause = t, this.name = "LanguageDetectorError";
	}
}, P = class extends Error {
	constructor(e, t) {
		super(e), this.cause = t, this.name = "LanguageStorageError";
	}
};
function re(e, t, n, r, i, a, o) {
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
			let r = new N(n, t);
			throw e.onError.emit(r), console.error(r), r;
		}
		let i = t(n);
		if (p(i)) {
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
	async function m(t, r) {
		let i;
		if (r) try {
			i = await n(t);
		} catch (n) {
			let r = new N(t, n, !0);
			e.onError.emit(r), console.warn(r);
		}
		return i ||= await f(t), i;
	}
	let h = Object.freeze({
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
			return Array.from(c.entries()).map(([e]) => h.getRecord(A(e)));
		},
		getTranslation(e, t) {
			return c.get(j(e))?.data[t];
		},
		getTranslationNs(e, t, n) {
			for (let r of e) for (let e of t) if (c.get(j({
				language: e,
				namespace: r
			}))?.data[n] != null) return [r];
			return x(e);
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
			let t = y(e);
			return !!Array.from(s.keys()).find((e) => t.includes(A(e).namespace));
		},
		isLoading(e, t) {
			let n = y(t);
			return i() ? !0 : !!Array.from(s.keys()).find((t) => {
				let r = A(t);
				return (!n.length || n.includes(r.namespace)) && !h.exists({
					namespace: r.namespace,
					language: e
				});
			});
		},
		async loadRecords(e, t) {
			let n = e.map((e) => {
				let n = r(e), i = j(n);
				if (t?.useCache && h.exists(n, !0)) return Object.assign(Object.assign({}, n), {
					new: !1,
					cacheKey: i,
					data: h.getRecord(n).data
				});
				let a = s.get(i);
				if (a) return Object.assign(Object.assign({}, n), {
					new: !1,
					promise: a,
					cacheKey: i
				});
				let o = m(n, !t?.noDev) || Promise.resolve(void 0);
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
				e.new && !t && (s.delete(e.cacheKey), e.data ? h.addRecord(e, e.data) : h.getRecord(e) || h.addRecord(e, {}));
			}), a.notify(), o.notify(), n.map((e) => ({
				language: e.language,
				namespace: e.namespace,
				data: e.data ?? {},
				cacheKey: e.cacheKey
			}));
		}
	});
	return h;
}
function ie(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
var ae = {
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
}, F = "invalid", oe = {
	observerOptions: ae,
	observerType: "invisible",
	onFormatError: F,
	apiUrl: "https://app.tolgee.io",
	autoLoadRequiredData: !0,
	fetch: D(),
	onTranslationMissing: ({ key: e }) => e
}, I = (...e) => {
	let t = {};
	return e.forEach((e) => {
		t = Object.assign(Object.assign(Object.assign({}, t), e), { observerOptions: Object.assign(Object.assign({}, t.observerOptions), e?.observerOptions) });
	}), t;
};
function se(e, t) {
	let n = I(oe, t?.initialOptions, e);
	return n.apiUrl = S(n.apiUrl), e?.fetch && (n.fetch = D(e.fetch)), {
		initialOptions: n,
		activeNamespaces: t?.activeNamespaces || /* @__PURE__ */ new Map(),
		language: t?.language,
		pendingLanguage: t?.language,
		isInitialLoading: !1,
		isRunning: !1
	};
}
function ce(e, t, n, r, i, a, o, s) {
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
		return A.formatTranslation(Object.assign(Object.assign({}, e), {
			translation: t,
			formatEnabled: !0
		}));
	}
	function p() {
		return { fetch: t().fetch };
	}
	function g(e) {
		l.observer = e?.();
	}
	function _() {
		return !!l.observer;
	}
	function v(e) {
		e && l.formatters.push(e);
	}
	function y(e) {
		l.finalFormatter = e;
	}
	function b(e) {
		c.ui = e;
	}
	function x() {
		return !!c.ui;
	}
	function S(e) {
		l.languageStorage = e;
	}
	function w(e) {
		l.languageDetector = e;
	}
	function T() {
		return h(s.onError, (e) => new P("Tolgee: Failed to load language", e), () => l.languageStorage?.getLanguage(p()));
	}
	function E() {
		if (!l.languageDetector) return;
		let e = n();
		return h(s.onError, (e) => new ne("Tolgee: Failed to detect language", e), () => l.languageDetector?.getLanguage(Object.assign({ availableLanguages: e }, p())));
	}
	function D(e) {
		e && l.backends.push(e);
	}
	function O(e) {
		l.devBackend = e;
	}
	function k(e, t) {
		t(e, Object.freeze({
			setFinalFormatter: y,
			addFormatter: v,
			setObserver: g,
			hasObserver: _,
			setUi: b,
			hasUi: x,
			setDevBackend: O,
			addBackend: D,
			setLanguageDetector: w,
			setLanguageStorage: S
		}));
	}
	let A = Object.freeze({
		addPlugin: k,
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
				highlight: A.highlight,
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
			return m(T(), (t) => (!e || e.includes(t)) && t ? t : E());
		},
		setStoredLanguage(e) {
			return h(s.onError, (e) => new P("Tolgee: Failed to store language", e), () => l.languageStorage?.setLanguage(e, p()));
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
			if ((r || i) && a && A.hasDevBackend()) return l.devBackend?.getRecord(Object.assign({
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
			return !!A.getDevBackend();
		},
		formatTranslation(n) {
			var { formatEnabled: r } = n, i = ie(n, ["formatEnabled"]);
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
				let n = C(e) || F, r = t().onFormatError, a = typeof r;
				h = a === "string" ? r : a === "function" ? r(n, i) : F, h = v(h);
			}
			return h;
		}
	});
	return A;
}
var le = (e, t, n) => {
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
	let r = se(), i, a = Object.freeze({
		init(e) {
			r = se(e, r);
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
			y(e).forEach((e) => {
				let t = r.activeNamespaces.get(e);
				t === void 0 ? r.activeNamespaces.set(e, 1) : r.activeNamespaces.set(e, t + 1);
			});
		},
		removeActiveNs(e) {
			y(e).forEach((e) => {
				let t = r.activeNamespaces.get(e);
				t !== void 0 && t > 1 ? r.activeNamespaces.set(e, t - 1) : r.activeNamespaces.delete(e);
			});
		},
		getRequiredNamespaces() {
			return x([
				a.getDefaultNs(),
				...r.initialOptions.ns || [],
				...y(r.initialOptions.fallbackNs),
				...r.activeNamespaces.keys()
			]);
		},
		getFallbackLangs(e) {
			let t = e || a.getLanguage();
			return t ? x([t, ...b(t, r.initialOptions.fallbackLanguage)]) : [];
		},
		getFallbackNs() {
			return y(r.initialOptions.fallbackNs);
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
			i = e ? Object.assign(Object.assign({}, e), { apiUrl: S(e.apiUrl) }) : void 0;
		}
	});
	return a;
}
function de(e) {
	var { ns: t, noWrap: n, orEmpty: r, params: i, language: a } = e, o = ie(e, [
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
var fe = (e, ...t) => {
	let n = {}, r;
	return typeof e == "object" && e ? n = e : (n.key = e, typeof t[0] == "string" ? (n.defaultValue = t[0], r = t[1]) : typeof t[0] == "object" && (r = t[0])), r && (n = Object.assign(Object.assign({}, de(r)), n)), n;
};
function pe({ options: e }) {
	let t = te(), n = le(!1, () => o.isFetching(), t.onFetchingChange.emit), r = le(!1, () => D.isLoading(), t.onLoadingChange.emit), i = ue(t.onLanguageChange, t.onPendingLanguageChange, t.onRunningChange), a = ce(i.getLanguage, i.getInitialOptions, i.getAvailableLanguages, u, S, C, f, t), o = re(t, a.getBackendRecord, a.getBackendDevRecord, i.withDefaultNs, i.isInitialLoading, n, r);
	e && h(e);
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
		return x([...y(l(e)), ...c()]);
	}
	function d(e) {
		return x([...y(e ?? l()), ...i.getRequiredNamespaces()]);
	}
	function f(e, t, n) {
		let r = i.withDefaultNs(e), a = o.getTranslation(r, t);
		return o.changeTranslation(r, t, n), { revert() {
			o.changeTranslation(r, t, a);
		} };
	}
	function h(e) {
		i.init(e), o.addStaticData(i.getInitialOptions().staticData);
	}
	function _(e, t) {
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
	function v(e, t) {
		return _(e, t).filter((e) => !o.exists(e, !0));
	}
	function b(e) {
		let t = [], n = [];
		if (Array.isArray(e.languages)) t = e.languages;
		else if (e.languages === "all") {
			let e = D.getAvailableLanguages();
			if (!e) throw Error(g("availableLanguages"));
			t = e;
		}
		if (Array.isArray(e.namespaces)) n = e.namespaces;
		else if (e.namespaces === "all") {
			let e = D.getAvailableNs();
			if (!e) throw Error(g("availableNs"));
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
	function S({ key: e, ns: t }) {
		let n = i.getFallbackLangs(), r = u(t ?? void 0);
		return o.getTranslationNs(r, n, e);
	}
	function C({ key: e, ns: t, language: n }) {
		let r = u(t ?? void 0), a = i.getFallbackLangs(n);
		return o.getTranslationFallback(r, a, e);
	}
	function w() {
		let e = m(T(), () => {
			let e = v();
			if (e.length && i.getInitialOptions().autoLoadRequiredData) return o.loadRecords(e, { useCache: !0 });
		});
		if (p(e)) return i.setInitialLoading(!0), n.notify(), r.notify(), Promise.resolve(e).then(() => {
			i.setInitialLoading(!1), n.notify(), r.notify(), t.onInitialLoaded.emit();
		});
		t.onInitialLoaded.emit();
	}
	function T() {
		if (!i.getLanguage()) return m(a.getInitialLanguage(), (e) => {
			let t = e || i.getInitialOptions().defaultLanguage;
			t && i.setLanguage(t);
		});
	}
	function E() {
		if ((a.getLanguageDetector() || a.getLanguageStorage()) && !i.getAvailableLanguages()) throw Error(g("availableLanguages"));
		if (!i.getLanguage() && !i.getInitialOptions().defaultLanguage) throw Error(g(["defaultLanguage", "language"]));
	}
	let D = Object.freeze(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), i), a), o), {
		init: h,
		getTranslation: C,
		changeTranslation: f,
		getTranslationNs: S,
		getDefaultAndFallbackNs: u,
		findPositions: a.findPositions,
		getRequiredDescriptors: _,
		async changeLanguage(e) {
			(i.getPendingLanguage() !== e || i.getLanguage() !== e) && (i.setPendingLanguage(e), i.isRunning() && i.getInitialOptions().autoLoadRequiredData && await o.loadRecords(_(e), { useCache: !0 }), e === i.getPendingLanguage() && (i.setLanguage(e), await a.setStoredLanguage(e)));
		},
		async addActiveNs(e, t) {
			t || i.addActiveNs(e), i.isRunning() && await o.loadRecords(_(void 0, e), { useCache: !0 });
		},
		async loadRecord(e, t) {
			return (await D.loadRecords([e], t))[0]?.data;
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
			let t = fe(...e), n = C(t);
			return a.formatTranslation(Object.assign(Object.assign({}, t), { translation: n }));
		},
		isDev() {
			let e = i.getInitialOptions();
			return !!((e.apiKey || e.transport) && e.apiUrl);
		},
		async loadRequired(e) {
			e?.language || await T();
			let t = _(e?.language);
			return D.loadRecords(t, e);
		},
		async loadMatrix(e) {
			let t = b(e);
			return D.loadRecords(t, e);
		},
		run() {
			return E(), i.isRunning() || (i.setRunning(!0), a.run(), s = w()), Promise.resolve(s);
		},
		stop() {
			i.isRunning() && (a.stop(), i.setRunning(!1));
		}
	}));
	return D;
}
function me(e) {
	let t = pe({ options: e });
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
var he = () => {
	let e = {
		plugins: [],
		options: {}
	}, t = Object.freeze({
		use(n) {
			return e.plugins.push(n), t;
		},
		updateDefaults(n) {
			return e.options = I(e.options, n), t;
		},
		init(t) {
			let n = me(I(e.options, t));
			return e.plugins.forEach(n.addPlugin), n;
		}
	});
	return t;
}, ge = 0, L = 1, _e = 2, ve = class extends Error {
	constructor(e, t, n) {
		let r, i = "";
		e === ge ? r = "Empty parameter" : e === L ? (r = "Unexpected character", i = "Did you forget to use FormatIcu to render ICU message syntax?") : r = "Unexpected end", super(`Tolgee parser: ${r} at ${t} in "${n}"` + (i ? "\n" + i : "")), this.code = e, this.index = t;
	}
};
function R(e) {
	return /\s/.test(e);
}
var z = 0, B = 1, V = 2, H = 3, U = 4, ye = /* @__PURE__ */ new Set([
	V,
	B,
	z
]), W = "'", be = /* @__PURE__ */ new Set([
	"{",
	"}",
	W
]), xe = (e) => /[0-9a-zA-Z_]/.test(e);
function Se(e) {
	let t = z, n = "", r = "", i = "", a = [], o = [], s = 0;
	function c(t) {
		throw new ve(t, s, e);
	}
	let l = () => {
		a.push(n), n = "";
	}, u = () => {
		xe(i) || c(L), r += i;
	}, d = () => {
		r === "" && c(ge), o.push(r), r = "";
	};
	for (s = 0; s < e.length; s++) switch (i = e[s], t) {
		case z:
			i === W ? (n += i, t = B) : i === "{" ? (l(), t = H) : (n += i, t = z);
			break;
		case B:
			be.has(i) ? (n = n.slice(0, -1) + i, t = V) : (n += i, t = z);
			break;
		case V:
			i === W ? t = z : (n += i, t = V);
			break;
		case H:
			i === "}" ? (d(), t = z) : R(i) ? r !== "" && (d(), t = U) : (u(), t = H);
			break;
		case U: i == "}" ? t = z : R(i) ? t = U : c(L);
	}
	return ye.has(t) || c(_e), l(), [a, o];
}
function Ce(e, t) {
	let [n, r] = Se(e), i = [n[0]];
	for (let a = 1; a < n.length; a++) {
		let o = t?.[r[a - 1]];
		if (o === void 0) throw Error(`Missing parameter "${r[a - 1]}" in "${e}"`);
		i.push(String(o)), i.push(n[a]);
	}
	return i.join("");
}
function we() {
	return { format: ({ translation: e, params: t }) => Ce(e, t) };
}
var Te = () => (e, t) => (t.setFinalFormatter(we()), e);
function Ee() {
	return globalThis.window?.document?.createElement === void 0;
}
var De = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, G = {};
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
})(typeof window < "u" ? window : De);
var Oe = f({
	__proto__: null,
	default: G
}, [G]);
(d = console.assert) == null || d.call(console, Oe), RegExp(`([${["‌", "‍"].join("")}]{9})+`, "g");
function ke(e, t) {
	return t ? `${t}: ${e}` : e;
}
var K = class e extends Error {
	constructor(t, n, r) {
		super(ke(t, n)), this.code = t, this.status = n, this.params = r, Object.setPrototypeOf(this, e.prototype);
	}
};
function Ae(e) {
	return e instanceof Error && typeof e.code == "string";
}
var je = 2, Me = 35e3, Ne = "TOLGEE_API_REQUEST", Pe = "TOLGEE_API_RESPONSE", Fe = "TOLGEE_PROXY_PING", Ie = "TOLGEE_PROXY_PONG";
function Le(e) {
	return e === "oauth" || e === "apiKey";
}
var q = class e extends Error {
	constructor(t, n) {
		super(n), this.kind = t, this.name = "ExtensionRpcError", Object.setPrototypeOf(this, e.prototype);
	}
}, Re = 3e3, ze = 200, Be = 0, J = /* @__PURE__ */ new Map(), Y = !1, X, Z;
async function Ve({ type: e, replyType: t, payload: n, timeoutMs: r = Me, progressType: i, onProgress: a }) {
	We();
	let o = Date.now() + r;
	await Ge(Math.min(o, Date.now() + Re));
	let s = o - Date.now();
	if (s <= 0) throw He(e);
	let c = Ue();
	return new Promise((r, o) => {
		let u = setTimeout(() => {
			J.delete(c), Ke(), o(He(e));
		}, s);
		J.set(c, {
			replyType: t,
			progressType: i,
			onProgress: a,
			resolve: r,
			reject: o,
			timer: u
		}), window.postMessage({
			type: e,
			data: l({ id: c }, n)
		}, window.origin);
	});
}
var He = (e) => new q("unavailable", `the Tolgee browser extension did not answer ${e} in time`), Ue = () => `${Date.now()}-${Be++}-${Math.random()}`;
function We() {
	Y || (Y = !0, window.addEventListener("message", (e) => {
		var t;
		if (e.source !== window || e.origin !== window.location.origin) return;
		let n = e.data?.type;
		if (n === Ie) {
			Z?.();
			return;
		}
		let r = e.data?.data;
		if (typeof r?.id != "string") return;
		let i = J.get(r.id);
		if (i) {
			if (n === i.progressType) {
				(t = i.onProgress) == null || t.call(i);
				return;
			}
			n === i.replyType && (J.delete(r.id), clearTimeout(i.timer), r.error ? i.reject(new q(r.error.kind, r.error.message)) : i.resolve(r));
		}
	}));
}
function Ge(e) {
	return X ||= new Promise((t, n) => {
		let r = () => window.postMessage({ type: Fe }, window.origin), i = () => {
			clearInterval(a), Ke(), Z = void 0, n(new q("unavailable", "the Tolgee browser extension did not answer"));
		}, a = setInterval(() => {
			if (Date.now() > e) {
				i();
				return;
			}
			r();
		}, ze);
		Z = () => {
			clearInterval(a), t();
		}, r();
	}), X;
}
function Ke() {
	X = void 0;
}
function qe() {
	return async (e) => {
		let t = await Je(e.body), n;
		try {
			n = await Ve({
				type: Ne,
				replyType: Pe,
				payload: {
					path: e.path,
					method: e.method,
					headers: e.headers,
					body: t
				}
			});
		} catch (e) {
			throw Ze(e);
		}
		if (!n.response) throw new K("fetch_error");
		return Xe(n.response);
	};
}
async function Je(e) {
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
		t.push(Ye(e).then((t) => ({
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
var Ye = (e) => new Promise((t, n) => {
	let r = new FileReader();
	r.onload = () => t(String(r.result).replace(/^data:[^,]*,/, "")), r.onerror = () => n(r.error), r.readAsDataURL(e);
});
function Xe(e) {
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
function Ze(e) {
	if (Ae(e)) return e;
	if (e instanceof q) switch (e.kind) {
		case "no_session": return new K("extension_session_missing", 401);
		case "too_large": return new K("extension_request_too_large");
		default: return console.warn(`Tolgee: the browser extension did not serve the request (${e.kind}): ${e.message}`), new K("fetch_error");
	}
	return new K("fetch_error");
}
var Qe = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
function $e(e) {
	let t = Qe.indexOf(e);
	if (t === -1) throw Error("Invalid character found: " + e);
	return t;
}
function et(e) {
	let t = new Uint8Array(e), n = t.length, r = "", i = 2 ** 16 - 1;
	for (let e = 0; e < n; e += i) e + i > n && (i = n - e), r += String.fromCharCode.apply(null, t.subarray(e, e + i));
	return r;
}
function tt(e) {
	e = e.toUpperCase();
	let t = e.length, n = 0, r = 0, i = 0, a = new Uint8Array(t * 5 / 8 | 0);
	for (let o = 0; o < t; o++) r = r << 5 | $e(e[o]), n += 5, n >= 8 && (a[i++] = r >>> n - 8 & 255, n -= 8);
	return et(a.buffer);
}
function nt(e) {
	if (e) try {
		let [t, n] = e.split("_");
		if (t === "tgpak") {
			let [e] = tt(n).split("_");
			return /^\d+$/.test(e) ? Number(e) : void 0;
		}
	} catch {
		console.warn("Tolgee: Api key can't be parsed");
	}
}
function rt(e) {
	if (!e) return;
	let [t] = e.split("_");
	return t === "tgpak" ? "tgpak" : t === "tgpat" ? "tgpat" : "legacy";
}
function it(e) {
	let { apiKey: t, projectId: n, transport: r } = e;
	return r ? {
		authHeader: {},
		viaExtension: !0,
		hasCredential: !0,
		projectId: n,
		requiresExplicitProject: !0
	} : {
		authHeader: at(t),
		viaExtension: !1,
		hasCredential: !!t,
		projectId: nt(t) ?? n,
		requiresExplicitProject: rt(t) === "tgpat"
	};
}
function at(e) {
	return e ? { "X-API-Key": e } : {};
}
function ot(e, t) {
	let n = (n) => {
		e.includes(n.data?.type) && t(n.data?.data);
	};
	return window.addEventListener("message", n, !1), { unsubscribe() {
		window.removeEventListener("message", n);
	} };
}
function st({ message: e, recievingMessage: t, data: n, attempts: r = 1, timeout: i = 300 }) {
	let a = !1, o = () => new Promise((r, a) => {
		let o = ot(t, c);
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
function ct() {
	let e;
	async function t(t) {
		e?.();
		let { cancel: n, promise: r } = st({
			message: "TOLGEE_READY",
			recievingMessage: ["TOLGEE_PLUGIN_READY", "TOLGEE_PLUGIN_UPDATED"],
			data: t,
			attempts: 4
		});
		return e = n, r;
	}
	return { update: t };
}
var Q = "__tolgee_", lt = `${Q}apiKey`, ut = `${Q}apiUrl`, dt = `${Q}branch`, ft = `${Q}projectId`, pt = `${Q}session`, mt = "tolgee-in-context-tools.umd.min.js", ht = "@tolgee/in-context-tools", gt = "InContextTools", _t = "https://cdn.jsdelivr.net/npm", vt = null;
function yt(e) {
	return vt ||= wt(bt(e)).then(() => window[ht][gt]), vt;
}
function bt(e) {
	return xt() || `${_t}/@tolgee/web@${e}/dist/${mt}`;
}
function xt() {
	if (Ee()) return;
	let e = window.__TOLGEE_IN_CONTEXT_URL__;
	return Ct(e, window.location) ? e : void 0;
}
var St = (e) => e === "localhost" || e === "127.0.0.1" || e === "::1" || e === "[::1]";
function Ct(e, t) {
	if (!e || !St(t.hostname)) return !1;
	try {
		let n = new URL(e, t.href);
		return n.origin === t.origin || St(n.hostname);
	} catch {
		return !1;
	}
}
function wt(e) {
	return new Promise((t, n) => {
		let r = document.createElement("script");
		r.src = e, r.addEventListener("load", () => t()), r.addEventListener("error", (e) => n(e.error)), document.head.appendChild(r);
	});
}
function Tt() {
	let e = sessionStorage.getItem(lt) || void 0, t = sessionStorage.getItem(ut) || void 0, n = sessionStorage.getItem(dt) || void 0, r = sessionStorage.getItem(ft) || void 0, i = Le(sessionStorage.getItem(pt));
	if (!t) return;
	let a = l(l({ apiUrl: t }, r === void 0 ? {} : { projectId: r }), n === void 0 ? {} : { branch: n });
	if (e) return u(l({}, a), { apiKey: e });
	if (i && r) return u(l({}, a), { transport: qe() });
}
function Et() {
	let e = [];
	for (let t = 0; t < sessionStorage.length; t++) {
		let n = sessionStorage.key(t);
		n?.startsWith(Q) && e.push(n);
	}
	e.forEach((e) => sessionStorage.removeItem(e));
}
function Dt(e) {
	if (!e.isDev()) return;
	let { requiresExplicitProject: t, projectId: n } = it(e.getInitialOptions());
	t && n === void 0 && console.warn("Tolgee: `projectId` is missing from the SDK configuration. It is required when authenticating with a PAT or connecting through the Tolgee browser extension. See https://docs.tolgee.io/js-sdk/api/core_package/options#projectid");
}
function Ot(e) {
	document.readyState === "loading" ? document.addEventListener && document.addEventListener("DOMContentLoaded", e) : Promise.resolve().then(() => {
		e();
	});
}
var $ = () => (e) => e;
(() => {
	if (typeof window > "u") return !1;
	try {
		return typeof sessionStorage < "u" && sessionStorage;
	} catch (e) {
		return console.error("sessionStorage not available", e), !1;
	}
})() && ($ = () => (e) => {
	let t = ct(), n = () => {
		let t = e.getInitialOptions();
		return {
			uiPresent: !0,
			uiVersion: void 0,
			protocolVersion: je,
			mode: e.isDev() ? "development" : "production",
			config: {
				apiUrl: t.apiUrl || "",
				apiKey: t.transport ? "" : t.apiKey || "",
				projectId: t.projectId,
				branch: t.branch
			}
		};
	};
	return Dt(e), e.on("running", ({ value: e }) => {
		e && Ot(() => {
			t.update(n()).catch(Et);
		});
	}), Tt() && (async () => {
		let e = await yt("7.2.1");
		return (t) => {
			let n = Tt();
			return t.addPlugin(e({ credentials: n })), t;
		};
	})().then((t) => {
		e.addPlugin(t);
	}).catch((e) => {
		console.error("Tolgee: Failed to load in-context tools"), console.error(e);
	}), e;
});
function kt() {
	return he().use($());
}
var At = kt().use(Te()).init({
	language: "en",
	staticData: { en: {} }
});
At.run();
function jt() {
	return At.t("header.home"), null;
}
var Mt = kt().use(Te()).init({
	language: "en",
	staticData: { en: { header: { home: "Home" } } }
});
Mt.run();
function Nt(e) {
	return Mt.t("header.home"), t(() => e.children);
}
function Pt() {
	return e(Nt, { get children() {
		return e(jt, {});
	} });
}
export { Pt as default };
