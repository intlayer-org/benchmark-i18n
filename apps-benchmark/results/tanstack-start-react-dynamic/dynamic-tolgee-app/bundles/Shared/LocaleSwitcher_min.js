import { t as e } from "./en-XNO2V14Y.js";
import t, { Suspense as n, useEffect as r, useMemo as i, useState as a } from "react";
import { useNavigate as o, useParams as s } from "@tanstack/react-router";
import { jsx as c } from "react/jsx-runtime";
var l = [
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
], u = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
};
function d() {
	let e = s({ strict: !1 }).locale ?? "en", t = o(), n = (e) => {
		t({
			to: ".",
			params: (t) => ({
				...t,
				locale: e
			})
		});
	};
	return c("div", {
		className: "flex items-center gap-2",
		children: c("select", {
			value: e,
			onChange: (e) => n(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: l.map((e) => c("option", {
				value: e,
				children: u(e)
			}, e))
		})
	});
}
var f = Object.defineProperty, p = Object.getOwnPropertySymbols, m = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable, g = (e, t, n) => t in e ? f(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, _ = (e, t) => {
	for (var n in t ||= {}) m.call(t, n) && g(e, n, t[n]);
	if (p) for (var n of p(t)) h.call(t, n) && g(e, n, t[n]);
	return e;
}, v;
function y(e, t) {
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
function b(e) {
	return !!(e && typeof e.then == "function");
}
function x(e, t) {
	return b(e) ? Promise.resolve(e).then(t) : t(e);
}
function S(e, t, n) {
	function r(n) {
		let r = t(n);
		throw e.emit(r), console.error(r), r;
	}
	try {
		let e = n();
		return b(e) ? e.catch(r) : e;
	} catch (e) {
		r(e);
	}
}
function C(e) {
	let t = (Array.isArray(e) ? e : [e]).map((e) => `'${e}'`), n = t.slice(-2).join(" or ");
	return `Tolgee: You need to specify ${[...t.slice(0, -2), n].join(", ")} option`;
}
function w(e) {
	return typeof e == "object" && !Array.isArray(e) && e !== null;
}
function T(e) {
	if (typeof e == "string") return [e];
	if (Array.isArray(e)) return e;
}
function E(e) {
	return T(e) || [];
}
function D(e, t) {
	return w(t) ? E(t?.[e]) : E(t);
}
function O(e) {
	return Array.from(new Set(e));
}
function k(e) {
	return e && e.replace(/\/+$/, "");
}
function ee(e) {
	if (typeof e == "string") return e;
	if (typeof e?.message == "string") return e.message;
}
var te = (e, t) => fetch(e, t);
function ne(e) {
	return Object.fromEntries(new Headers(e).entries());
}
var A = (e = te) => (t, n) => {
	let r = ne(n?.headers);
	return r["x-api-key"] && (r = Object.assign({
		"x-tolgee-sdk-type": "JS",
		"x-tolgee-sdk-version": "prerelease"
	}, r)), e(t, Object.assign(Object.assign({}, n), { headers: r }));
}, j = (e, t) => {
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
		onPendingLanguageChange: j("pendingLanguage", t),
		onLanguageChange: j("language", t),
		onLoadingChange: j("loading", t),
		onFetchingChange: j("fetching", t),
		onInitialLoaded: j("initialLoad", t),
		onRunningChange: j("running", t),
		onCacheChange: j("cache", t),
		onPermanentChange: j("permanentChange", t),
		onError: j("error", t),
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
var M = class extends Error {
	constructor(e, t, n = !1) {
		let { language: r, namespace: i } = e;
		super(`Tolgee: Failed to fetch record for "${r}"${i && ` and "${i}"`}`), this.cause = t, this.isDev = n, this.name = "RecordFetchError", this.language = r, this.namespace = i;
	}
}, ae = class extends Error {
	constructor(e, t) {
		super(e), this.cause = t, this.name = "LanguageDetectorError";
	}
}, N = class extends Error {
	constructor(e, t) {
		super(e), this.cause = t, this.name = "LanguageStorageError";
	}
}, P = (e) => {
	let t = /* @__PURE__ */ new Map();
	return Object.entries(e).forEach(([e, n]) => {
		if (n != null) {
			if (typeof n == "object") {
				P(n).forEach((n, r) => {
					t.set(e + "." + r, n);
				});
				return;
			}
			t.set(e, n);
		}
	}), t;
}, F = (e) => Object.fromEntries(P(e).entries()), I = (e) => {
	let [t, ...n] = e.split(":");
	return {
		language: t,
		namespace: n.join(":") || ""
	};
}, L = ({ language: e, namespace: t }) => t ? `${e}:${t}` : e;
function oe(e, t, n, r, i, a, o) {
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
			let r = new M(n, t);
			throw e.onError.emit(r), console.error(r), r;
		}
		let i = t(n);
		if (b(i)) {
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
			let r = new M(t, n, !0);
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
			return O(e);
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
			let t = E(e);
			return !!Array.from(s.keys()).find((e) => t.includes(I(e).namespace));
		},
		isLoading(e, t) {
			let n = E(t);
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
function R(e, t) {
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
}, z = "invalid", ce = {
	observerOptions: se,
	observerType: "invisible",
	onFormatError: z,
	apiUrl: "https://app.tolgee.io",
	autoLoadRequiredData: !0,
	fetch: A(),
	onTranslationMissing: ({ key: e }) => e
}, B = (...e) => {
	let t = {};
	return e.forEach((e) => {
		t = Object.assign(Object.assign(Object.assign({}, t), e), { observerOptions: Object.assign(Object.assign({}, t.observerOptions), e?.observerOptions) });
	}), t;
};
function V(e, t) {
	let n = B(ce, t?.initialOptions, e);
	return n.apiUrl = k(n.apiUrl), e?.fetch && (n.fetch = A(e.fetch)), {
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
	function b(e) {
		l.languageStorage = e;
	}
	function C(e) {
		l.languageDetector = e;
	}
	function w() {
		return S(s.onError, (e) => new N("Tolgee: Failed to load language", e), () => l.languageStorage?.getLanguage(p()));
	}
	function T() {
		if (!l.languageDetector) return;
		let e = n();
		return S(s.onError, (e) => new ae("Tolgee: Failed to detect language", e), () => l.languageDetector?.getLanguage(Object.assign({ availableLanguages: e }, p())));
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
			setLanguageStorage: b
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
			return x(w(), (t) => (!e || e.includes(t)) && t ? t : T());
		},
		setStoredLanguage(e) {
			return S(s.onError, (e) => new N("Tolgee: Failed to store language", e), () => l.languageStorage?.setLanguage(e, p()));
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
			var { formatEnabled: r } = n, i = R(n, ["formatEnabled"]);
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
				let n = ee(e) || z, r = t().onFormatError, a = typeof r;
				h = a === "string" ? r : a === "function" ? r(n, i) : z, h = v(h);
			}
			return h;
		}
	});
	return k;
}
var H = (e, t, n) => {
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
	let r = V(), i, a = Object.freeze({
		init(e) {
			r = V(e, r);
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
			E(e).forEach((e) => {
				let t = r.activeNamespaces.get(e);
				t === void 0 ? r.activeNamespaces.set(e, 1) : r.activeNamespaces.set(e, t + 1);
			});
		},
		removeActiveNs(e) {
			E(e).forEach((e) => {
				let t = r.activeNamespaces.get(e);
				t !== void 0 && t > 1 ? r.activeNamespaces.set(e, t - 1) : r.activeNamespaces.delete(e);
			});
		},
		getRequiredNamespaces() {
			return O([
				a.getDefaultNs(),
				...r.initialOptions.ns || [],
				...E(r.initialOptions.fallbackNs),
				...r.activeNamespaces.keys()
			]);
		},
		getFallbackLangs(e) {
			let t = e || a.getLanguage();
			return t ? O([t, ...D(t, r.initialOptions.fallbackLanguage)]) : [];
		},
		getFallbackNs() {
			return E(r.initialOptions.fallbackNs);
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
			i = e ? Object.assign(Object.assign({}, e), { apiUrl: k(e.apiUrl) }) : void 0;
		}
	});
	return a;
}
function de(e) {
	var { ns: t, noWrap: n, orEmpty: r, params: i, language: a } = e, o = R(e, [
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
var U = (e, ...t) => {
	let n = {}, r;
	return typeof e == "object" && e ? n = e : (n.key = e, typeof t[0] == "string" ? (n.defaultValue = t[0], r = t[1]) : typeof t[0] == "object" && (r = t[0])), r && (n = Object.assign(Object.assign({}, de(r)), n)), n;
};
function fe({ options: e }) {
	let t = ie(), n = H(!1, () => o.isFetching(), t.onFetchingChange.emit), r = H(!1, () => T.isLoading(), t.onLoadingChange.emit), i = ue(t.onLanguageChange, t.onPendingLanguageChange, t.onRunningChange), a = le(i.getLanguage, i.getInitialOptions, i.getAvailableLanguages, u, _, v, f, t), o = oe(t, a.getBackendRecord, a.getBackendDevRecord, i.withDefaultNs, i.isInitialLoading, n, r);
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
		return O([...E(l(e)), ...c()]);
	}
	function d(e) {
		return O([...E(e ?? l()), ...i.getRequiredNamespaces()]);
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
			if (!e) throw Error(C("availableLanguages"));
			t = e;
		}
		if (Array.isArray(e.namespaces)) n = e.namespaces;
		else if (e.namespaces === "all") {
			let e = T.getAvailableNs();
			if (!e) throw Error(C("availableNs"));
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
		let e = x(S(), () => {
			let e = h();
			if (e.length && i.getInitialOptions().autoLoadRequiredData) return o.loadRecords(e, { useCache: !0 });
		});
		if (b(e)) return i.setInitialLoading(!0), n.notify(), r.notify(), Promise.resolve(e).then(() => {
			i.setInitialLoading(!1), n.notify(), r.notify(), t.onInitialLoaded.emit();
		});
		t.onInitialLoaded.emit();
	}
	function S() {
		if (!i.getLanguage()) return x(a.getInitialLanguage(), (e) => {
			let t = e || i.getInitialOptions().defaultLanguage;
			t && i.setLanguage(t);
		});
	}
	function w() {
		if ((a.getLanguageDetector() || a.getLanguageStorage()) && !i.getAvailableLanguages()) throw Error(C("availableLanguages"));
		if (!i.getLanguage() && !i.getInitialOptions().defaultLanguage) throw Error(C(["defaultLanguage", "language"]));
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
			i.getPendingLanguage() === e && i.getLanguage() === e || (i.setPendingLanguage(e), i.isRunning() && i.getInitialOptions().autoLoadRequiredData && await o.loadRecords(m(e), { useCache: !0 }), e === i.getPendingLanguage() && (i.setLanguage(e), await a.setStoredLanguage(e)));
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
			let t = U(...e), n = v(t);
			return a.formatTranslation(Object.assign(Object.assign({}, t), { translation: n }));
		},
		isDev() {
			return !!(i.getInitialOptions().apiKey && i.getInitialOptions().apiUrl);
		},
		async loadRequired(e) {
			e?.language || await S();
			let t = m(e?.language);
			return T.loadRecords(t, e);
		},
		async loadMatrix(e) {
			let t = g(e);
			return T.loadRecords(t, e);
		},
		run() {
			return w(), i.isRunning() || (i.setRunning(!0), a.run(), s = y()), Promise.resolve(s);
		},
		stop() {
			i.isRunning() && (a.stop(), i.setRunning(!1));
		}
	}));
	return T;
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
			return e.options = B(e.options, n), t;
		},
		init(t) {
			let n = pe(B(e.options, t));
			return e.plugins.forEach(n.addPlugin), n;
		}
	});
	return t;
}, W = 0, G = 1, he = 2, ge = class extends Error {
	constructor(e, t, n) {
		let r, i = "";
		e === W ? r = "Empty parameter" : e === G ? (r = "Unexpected character", i = "Did you forget to use FormatIcu to render ICU message syntax?") : r = "Unexpected end", super(`Tolgee parser: ${r} at ${t} in "${n}"` + (i ? "\n" + i : "")), this.code = e, this.index = t;
	}
};
function K(e) {
	return /\s/.test(e);
}
var q = 0, J = 1, Y = 2, X = 3, Z = 4, _e = new Set([
	Y,
	J,
	q
]), Q = "'", ve = new Set([
	"{",
	"}",
	Q
]), ye = (e) => /[0-9a-zA-Z_]/.test(e);
function be(e) {
	let t = q, n = "", r = "", i = "", a = [], o = [], s = 0;
	function c(t) {
		throw new ge(t, s, e);
	}
	let l = () => {
		a.push(n), n = "";
	}, u = () => {
		ye(i) || c(G), r += i;
	}, d = () => {
		r === "" && c(W), o.push(r), r = "";
	};
	for (s = 0; s < e.length; s++) switch (i = e[s], t) {
		case q:
			i === Q ? (n += i, t = J) : i === "{" ? (l(), t = X) : (n += i, t = q);
			break;
		case J:
			ve.has(i) ? (n = n.slice(0, -1) + i, t = Y) : (n += i, t = q);
			break;
		case Y:
			i === Q ? t = q : (n += i, t = Y);
			break;
		case X:
			i === "}" ? (d(), t = q) : K(i) ? r !== "" && (d(), t = Z) : (u(), t = X);
			break;
		case Z: i == "}" ? t = q : K(i) ? t = Z : c(G);
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
var Ee = y({
	__proto__: null,
	default: Te
}, [Te]);
(v = console.assert) == null || v.call(console, Ee), RegExp(`([${["‌", "‍"].join("")}]{9})+`, "g");
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
	if (!(!e || !t)) return _({
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
var Ge = () => (e) => e;
function Ke(e) {
	return Object.assign(Object.assign({}, e), { t(...t) {
		let n = U(...t);
		return e.t(Object.assign(Object.assign({}, n), { noWrap: !0 }));
	} });
}
function qe(e, t, n, o = !0) {
	let [s] = a(() => Ke(e)), [c, l] = a(o);
	return r(() => {
		l(!1);
	}, []), i(() => {
		o && (e.setEmitterActive(!1), e.addStaticData(n), e.changeLanguage(t), e.setEmitterActive(!0));
	}, [
		t,
		n,
		e
	]), a(() => {
		if (!e.isLoaded() && o) {
			let n = e.getRequiredDescriptors(t), r = e.getAllRecords(), i = n.map(({ namespace: e, language: t }) => e ? `${e}:${t}` : t).filter((e) => !r.find((t) => t?.cacheKey === e));
			console.warn(`Tolgee: Missing records in "staticData" for proper SSR functionality: ${i.map((e) => `"${e}"`).join(", ")}`);
		}
	}), c ? s : e;
}
var Je = { useSuspense: !1 }, Ye, Xe = () => (Ye ||= t.createContext(void 0), Ye), $ = void 0, Ze = ({ tolgee: e, options: i, children: o, fallback: s, ssr: c }) => {
	r(() => {
		$?.run !== e.run && ($ && $.stop(), $ = e, e.run().catch((e) => {
			console.error(e);
		}).finally(() => {
			p(!1);
		}));
	}, [e]);
	let l = e, { language: u, staticData: d } = typeof c == "object" ? c : {};
	l = qe(e, u, d, !!c);
	let [f, p] = a(!l.isLoaded()), m = Object.assign(Object.assign({}, Je), i), h = Xe();
	return m.useSuspense ? t.createElement(h.Provider, { value: {
		tolgee: l,
		options: m
	} }, f ? s : t.createElement(n, { fallback: s || null }, o)) : t.createElement(h.Provider, { value: {
		tolgee: l,
		options: m
	} }, f ? s : o);
}, Qe = We().use(Ge()).use(Ce()).init({
	language: "en",
	apiUrl: void 0,
	apiKey: void 0,
	staticData: {
		en: () => import("./en-XNO2V14Y.js").then((e) => e.n),
		fr: () => import("../i18n/locales/fr.json"),
		es: () => import("../i18n/locales/es.json"),
		de: () => import("../i18n/locales/de.json"),
		it: () => import("../i18n/locales/it.json"),
		pt: () => import("../i18n/locales/pt.json"),
		zh: () => import("../i18n/locales/zh.json"),
		ja: () => import("../i18n/locales/ja.json"),
		ko: () => import("../i18n/locales/ko.json"),
		ru: () => import("../i18n/locales/ru.json")
	}
});
function $e({ children: t }) {
	return c(Ze, {
		tolgee: Qe,
		ssr: {
			language: "en",
			staticData: { en: e }
		},
		children: t
	});
}
function et() {
	return c($e, { children: c(d, {}) });
}
export { et as default };
var e = Object.defineProperty, t = ((t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
})({
	aboutGrid: () => f,
	aboutHeader: () => d,
	apiAccessSection: () => A,
	blogHeader: () => m,
	blogList: () => h,
	careersBenefits: () => _,
	careersHeader: () => g,
	common: () => a,
	contactForm: () => b,
	contactHeader: () => y,
	default: () => F,
	faqHeader: () => x,
	faqList: () => S,
	footer: () => i,
	header: () => r,
	hero: () => s,
	mockBanner: () => P,
	openPositions: () => v,
	preferencesSection: () => k,
	pricingHeader: () => C,
	pricingTiers: () => w,
	productsGrid: () => E,
	productsHeader: () => T,
	profileSection: () => O,
	resultsTable: () => u,
	route: () => n,
	settingsFooter: () => j,
	settingsHeader: () => D,
	teamGrid: () => N,
	teamHeader: () => M,
	themeToggle: () => o,
	understandingImpact: () => l,
	whatWeMeasure: () => p,
	whyItMatters: () => c
}), n = {
	oopsPageNotFound: "Oops! Page not found",
	returnToHome: "Return to Home",
	couldNotMeasureHydrationDuration: "Could not measure hydration duration:"
}, r = {
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
}, i = {
	resources: "Resources",
	contact: "Contact",
	github: "GitHub",
	methodology: "Methodology",
	contributing: "Contributing",
	builtWith: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	anOpenSourceTestApplication: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
}, a = {
	readMore: "Read More",
	copy: "Copy",
	cancel: "Cancel",
	saveChanges: "Save Changes"
}, o = {
	themeModeAutoSystemClick: "Theme mode: auto (system). Click to switch to light mode.",
	themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
	themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
	themeAuto: "Theme: Auto",
	themeDark: "Theme: Dark",
	themeLight: "Theme: Light"
}, s = {
	aTestApplicationDesignedTo: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	viewResults: "View Results"
}, c = {
	whyTheseMetricsMatter: "Why These Metrics Matter",
	bundleSize: "Bundle Size",
	theBundleIsTheData: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	renderingHydration: "Rendering & Hydration",
	connectingALargeJson: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	dynamicLoading: "Dynamic Loading",
	loadingAllTranslationsUpfront: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
}, l = {
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
}, u = {
	sampleResults: "Sample Results",
	bundleSize: "Bundle Size",
	lookupTime: "Lookup Time",
	lazyLoading: "Lazy Loading",
	library: "Library"
}, d = {
	methodology: "Methodology",
	weDesignedThisBenchmarkTo: "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach.",
	aboutThisBenchmark: "About This Benchmark",
	thisIsAnOpenSource: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
}, f = {
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
}, p = {
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
}, m = {
	blog: "Blog",
	insightsDeepDivesAnd: "Insights, deep dives, and updates from the i18n benchmarking community.",
	insightsTutorialsAndAnalysis: "Insights, tutorials, and analysis from the i18n community."
}, h = {
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
}, g = {
	careers: "Careers",
	joinOurMissionToMake: "Join our mission to make the web faster and more accessible for everyone, everywhere.",
	joinOurMission: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
}, _ = {
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
}, v = {
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
}, y = {
	contactUs: "Contact Us",
	haveQuestionsOrWantTo: "Have questions or want to contribute? We'd love to hear from you.",
	getInTouch: "Get in Touch",
	haveIdeasFoundABug: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us."
}, b = {
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
}, x = {
	frequentlyAskedQuestions: "Frequently Asked Questions",
	everythingYouNeedTo: "Everything you need to know about the i18n Benchmark project.",
	everythingYouNeedToKnow: "Everything you need to know about i18n Benchmark."
}, S = {
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
}, C = {
	pricing: "Pricing",
	transparentPricingForEvery: "Transparent pricing for every stage of your i18n journey."
}, w = {
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
}, T = {
	products: "Products",
	toolsAndServicesTo: "Tools and services to help you optimize your internationalization strategy."
}, E = {
	benchmarkDashboard: "Benchmark Dashboard",
	interactiveChartsAndTables: "Interactive charts and tables comparing i18n libraries across bundle size, render time, and hydration cost.",
	bundleAnalyzer: "Bundle Analyzer",
	uploadYourBuildOutput: "Upload your build output and get a detailed breakdown of how much of your bundle is i18n overhead.",
	migrationAssistant: "Migration Assistant",
	automatedCodemodsAndGuides: "Automated codemods and guides for migrating between i18n libraries with minimal disruption.",
	performanceMonitor: "Performance Monitor",
	continuousPerformanceTrackingFor: "Continuous performance tracking for your i18n implementation. Get alerts when translation loading degrades.",
	learnMore: "Learn More"
}, D = {
	settings: "Settings",
	manageYourAccountPreferences: "Manage your account preferences and configuration.",
	manageYourAccount: "Manage your account preferences and configuration."
}, O = {
	profile: "Profile",
	displayName: "Display Name",
	email: "Email"
}, k = {
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
}, A = {
	apiAccess: "API Access",
	apiKey: "API Key",
	useThisKeyTo: "Use this key to access the benchmarking API programmatically.",
	copy: "Copy"
}, j = {
	cancel: "Cancel",
	saveChanges: "Save Changes"
}, M = {
	ourTeam: "Our Team",
	meetThePeopleBehindI18n: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
}, N = {
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
}, P = "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", F = {
	route: n,
	header: r,
	footer: i,
	common: a,
	themeToggle: o,
	hero: s,
	whyItMatters: c,
	understandingImpact: l,
	resultsTable: u,
	aboutHeader: d,
	aboutGrid: f,
	whatWeMeasure: p,
	blogHeader: m,
	blogList: h,
	careersHeader: g,
	careersBenefits: _,
	openPositions: v,
	contactHeader: y,
	contactForm: b,
	faqHeader: x,
	faqList: S,
	pricingHeader: C,
	pricingTiers: w,
	productsHeader: T,
	productsGrid: E,
	settingsHeader: D,
	profileSection: O,
	preferencesSection: k,
	apiAccessSection: A,
	settingsFooter: j,
	teamHeader: M,
	teamGrid: N,
	mockBanner: P
};
export { t as n, F as t };
