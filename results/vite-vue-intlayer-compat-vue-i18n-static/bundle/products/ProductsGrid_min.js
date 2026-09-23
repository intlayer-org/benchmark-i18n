import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, openBlock as s, readonly as c, ref as l, renderList as u, renderSlot as d, toDisplayString as f } from "vue";
var p = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, m = { class: "mb-2 text-lg font-semibold text-foreground" }, ee = { class: "mb-4 text-sm text-muted-foreground" }, te = { class: "flex items-center justify-between" }, ne = { class: "text-sm font-bold text-primary" }, re = i({
	__name: "ProductsGrid",
	setup(t) {
		let i = [
			{
				name: "Benchmark CLI",
				desc: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
				price: "Free"
			},
			{
				name: "Benchmark Cloud",
				desc: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
				price: "$29/mo"
			},
			{
				name: "Benchmark Enterprise",
				desc: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
				price: "Contact Us"
			},
			{
				name: "Migration Assistant",
				desc: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
				price: "$99 one-time"
			},
			{
				name: "Translation QA",
				desc: "Automated quality checks for missing translations, pluralization issues, and context errors.",
				price: "$19/mo"
			},
			{
				name: "Bundle Optimizer",
				desc: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
				price: "$49/mo"
			}
		];
		return (t, a) => (s(), n("div", p, [(s(), n(e, null, u(i, (e) => r("div", {
			key: e.name,
			class: "flex flex-col justify-between rounded-lg border border-border bg-card p-6"
		}, [r("div", null, [r("h3", m, f(e.name), 1), r("p", ee, f(e.desc), 1)]), r("div", te, [r("span", ne, f(e.price), 1), a[0] ||= r("button", {
			type: "button",
			class: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
		}, " Learn More ", -1)])])), 64))]));
	}
}), h = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, ie = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = h(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, ae = (e, t, n, r) => {
	let i = h(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, oe = "translation", se = "enumeration", ce = "plural", g = "insertion", le = "object", ue = "array", _ = "markdown", v = "html", de = "gender", fe = "select", y = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => y(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => y(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ue,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: le,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = y(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = y(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, b = (e, t, n = ".") => {
	if (!t) return e;
	if (typeof e == "object" && e) {
		let n = e[t];
		if (n !== void 0) return n;
	}
	if (n === !1 || !t.includes(n)) return;
	let r = e;
	for (let e of t.split(n)) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, pe = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, me = (e, t) => e[pe(e, t) ?? "fallback"], x = {
	locales: [
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
	],
	requiredLocales: [
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
	],
	strictMode: "inclusive",
	defaultLocale: "en"
}, S = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, he = 50, C = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Set(), _e = (e) => {
	ge.has(e) || (ge.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, ve = {
	DisplayNames: class {
		of(e) {
			return e;
		}
	},
	ListFormat: class {
		format(e) {
			return Array.from(e).join(", ");
		}
		formatToParts(e) {
			return Array.from(e).flatMap((e, t) => t === 0 ? [{
				type: "element",
				value: e
			}] : [{
				type: "literal",
				value: ", "
			}, {
				type: "element",
				value: e
			}]);
		}
	},
	Segmenter: class {
		segment(e) {
			let t = 0;
			return Array.from(e).map((e) => {
				let n = t;
				return t += e.length, {
					segment: e,
					index: n
				};
			});
		}
	}
}, ye = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (_e(e), ve[e]);
};
function w(e, t, n) {
	let r = t ?? x?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = C.get(a);
	o || (o = /* @__PURE__ */ new Map(), C.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ye(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > he && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var be = (e, t, n) => e[w("PluralRules", n).select(t)] ?? e.other, xe = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, T = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], E = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, D = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? w("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? w("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : w("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return w("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, O = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = E(t, r);
	return o === void 0 ? e : i ? D(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = E(t, r);
	return o === void 0 ? e : D(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = E(t, n);
	return r === void 0 ? e : String(r);
}), k = (e, t) => e[t] ?? e.count ?? e.n, A = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return O(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return A(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(A(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return A(r[g], t, n);
	if (r.nodeType === "html") return A(r[v], t, n);
	if (r.nodeType === "plural") {
		let e = r[ce];
		return A(be(e, Number(k(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[se], i = T.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) T.includes(t) || (o[t] = n);
		let s = k(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = w("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? me(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return A(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[fe], i = k(t, typeof r.variable == "string" ? r.variable : "value");
		return A(xe(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[de];
		return A(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Se = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), Ce = (e, t) => {
	let n = Math.abs(e);
	return t === 2 ? n ? +(n > 1) : 1 : n ? Math.min(n, 2) : 0;
}, we = (e) => {
	let t = { values: {} };
	for (let n of e) if (typeof n == "number") t.count = n;
	else if (typeof n == "string") t.defaultMessage = n;
	else if (Array.isArray(n)) t.values = { ...n.map(String) };
	else if (typeof n == "object" && n) {
		let e = n;
		t.values = e, typeof e.plural == "number" && (t.count = e.plural);
	}
	return t;
}, j = (e, t, n, r) => {
	let i = { ...t };
	if (n !== void 0 && (i.count ??= n, i.n ??= n), typeof e == "string") {
		let t = e;
		if (/(?<!\\)\|/.test(t)) {
			let e = Se(t);
			t = e[Ce(n ?? 1, e.length)] ?? t;
		}
		return O(t, i, r);
	}
	let a = A(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, M = "\x1B[0m", N = "\x1B[90m", Te = "\x1B[34m", Ee = "\x1B[31m", De = "\x1B[32m", Oe = "\x1B[35m", ke = "\x1B[38;5;3m", P = "\x1B[36m", Ae = (e) => e, je = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ae(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, F = (e, t) => (n, r) => je(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), I = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? M : n : M}` : e, Me = (e, t = ke, n = M) => [e].flat().map((e) => I(e, t, n)).join(", ");
I("✗", Ee), I("✓", De), I("⏲", Te);
var L = /* @__PURE__ */ new WeakMap(), R = 0, Ne = (e) => {
	if (!e) return "base";
	let t = L.get(e);
	if (t) return t;
	R += 1;
	let n = `p${R}`;
	return L.set(e, n), n;
}, Pe = 256, z = /* @__PURE__ */ new WeakMap(), B = (e) => typeof e == "object" && !!e, Fe = (e, t, n) => `${e}_${t}_${Ne(n)}`, Ie = (e, t) => {
	if (!B(e)) return { hit: !1 };
	let n = z.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, V = (e, t, n) => {
	if (!B(e)) return n;
	let r = z.get(e);
	return r || (r = /* @__PURE__ */ new Map(), z.set(e, r)), r.size >= Pe && r.clear(), r.set(t, n), n;
}, H = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), U = "default", Le = /[^A-Za-z0-9._&=-]/g, W = /[^A-Za-z0-9._-]/g, Re = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, G = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Re);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, K = (e) => e === void 0 ? U : typeof e == "string" ? G(e, Le) : Object.keys(e).sort().map((t) => `${G(t, W)}=${G(String(e[t]), W)}`).join("&"), q = (e) => Array.isArray(e) ? e.length === 0 ? [U] : e.map(K) : [K(e)], ze = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? U : e[0] ?? "default";
}, Be = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Ve = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, He = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ue = (e, t) => {
	if (!Ve(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? U : ze(q(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Be(e, n, t, s)).map((t) => He(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, We = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Ge = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? q(n).join(",") : String(n)}`;
}).join("|") : "", Ke = () => ({}), qe = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Je = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : qe.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Je(e ? `${e}.${String(n)}` : String(n)) }), Ye = /* @__PURE__ */ new Set(), Xe = (e, t, n) => {
	let r = Ke()[e];
	return r ? pt(r, t, n) : (Ye.has(e) || (F({ log: S })(typeof window > "u" ? `Dictionary ${Me(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Ye.add(e)), Je(e));
}, Ze = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Qe = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (Ze(e) && Ze(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Qe(e[r], t[r]));
		return n;
	}
	return e;
}, $e = (e, t, n) => {
	let r = (t) => e[t], i = /* @__PURE__ */ new Set(), a = [], o = (e) => {
		e && !i.has(e) && (i.add(e), a.push(e));
	};
	o(t), t.includes("-") && o(t.split("-")[0]), o(n), n?.includes("-") && o(n.split("-")[0]);
	let s = [];
	for (let e of a) {
		let t = r(e);
		if (t !== void 0) {
			if (typeof t == "string") {
				if (s.length === 0) return t;
				continue;
			}
			s.push(t);
		}
	}
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Qe(e, t));
}, J = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, et = (e) => {
	if (typeof e == "string") return e;
	if (J(e)) return e.nodeType === "html" ? e[v] : e[_];
}, tt = (e, t) => {
	if (typeof e == "string") return t;
	if (J(e)) {
		let n = e.nodeType === "html" ? v : _;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, nt = (e, t, n, r, i) => {
	let a = tt(e, H(et(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, Y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, rt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? Y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: oe,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return $e(o, e, t);
	}
}, it = Y, at = Y, ot = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: g }], i = e[g], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || J(e),
			transform: (e, n, r) => {
				if (J(e)) return (i) => nt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = H(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
	}
}, st = Y, ct = Y, lt = (e) => Y, ut = Y, dt = (e, t = !0) => [
	rt(e ?? x.defaultLocale, t ? x.defaultLocale : void 0),
	it,
	at,
	ot,
	lt(e ?? x.defaultLocale),
	ut,
	st,
	ct
], ft = (e, t, n = []) => y(e, {
	...t,
	plugins: n
}), pt = (e, t, n) => {
	let { locale: r, selector: i } = We(t), a = Fe(r ?? x.defaultLocale, Ge(i), n), o = Ie(e, a);
	if (o.hit) return o.content;
	let s = n ?? dt(r), c = Ue(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return ft(e.content, t, s);
	};
	return c === null ? V(e, a, null) : Array.isArray(c) ? V(e, a, c.map(l)) : V(e, a, l(c));
}, mt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, ht = Symbol("intlayer"), X = null, gt = (e, t = !0, n) => {
	if (X) return X;
	mt();
	let { defaultLocale: r } = x ?? {}, i = l(e ?? r), a = (e) => {
		i.value = e;
	}, o = l(n);
	return X = {
		locale: c(i),
		setLocale: a,
		variant: c(o),
		setVariant: (e) => {
			o.value = e;
		},
		isCookieEnabled: t
	}, X;
}, _t = (e, t) => {
	let { locale: n, isCookieEnabled: r, variant: i } = t ?? {}, a = gt(n, r, i);
	return e.provide(ht, a), e;
}, vt = Symbol("global-i18n"), yt = "translation", Z = (e, t, n) => {
	try {
		let r = b(Xe(t, e), n);
		if (r != null) return r;
	} catch {}
}, Q = (e, t, n) => {
	let r = t, i = n;
	if (n.includes(":")) {
		let e = n.indexOf(":");
		r = n.slice(0, e), i = n.slice(e + 1);
	}
	if (r) {
		let t = Z(e, r, i);
		if (t !== void 0) return t;
	}
	if (i.includes(".")) {
		let t = i.indexOf("."), n = Z(e, i.slice(0, t), i.slice(t + 1));
		if (n !== void 0) return n;
	}
	if (!r) {
		let t = Z(e, yt, i);
		if (t !== void 0) return t;
	}
}, bt = (e, t, n, r, i) => {
	let { values: a, count: o, defaultMessage: s } = we(r), c = Q(e, t, n);
	if (c === void 0) {
		if (i?.[e]) {
			let r = t ? `${t}.${n}` : n, s = b(i[e], r);
			if (s !== void 0) return j(s, a, o, e);
		}
		return s === void 0 ? n : j(s, a, o, e);
	}
	return j(c, a, o, e);
}, xt = () => x?.locales?.map(String) ?? [], $ = (e) => {
	F({ log: S })(`${I(e, P)} has no effect with ${I("@intlayer/vue-i18n", Oe)} — translations are managed by the compiled intlayer dictionaries.`);
}, St = ((e = {}) => {
	let n = e.messages;
	e.messages !== void 0 && F({ log: S })(`${I("createI18n", P)}: the ${I("`messages`", P)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${I("useDictionary", P)} or compile your intlayer dictionaries instead:\n  ${I("Before:", N)} createI18n({ messages: { en, fr, … } })\n  ${I("After: ", N)} createI18n({})`);
	let r = gt(e.locale), i = e.datetimeFormats, a = e.numberFormats, o = () => String(r.locale.value), s = t({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => bt(o(), void 0, e, t, n), l = (e, t) => ie(e, t, o(), i), u = (e, t) => ae(e, t, o(), a), d = {
		locale: s,
		availableLocales: xt(),
		fallbackLocale: e.fallbackLocale ?? x?.defaultLocale,
		t: c,
		tc: c,
		te: (e) => Q(o(), void 0, e) !== void 0,
		tm: (e) => Q(o(), void 0, e) ?? {},
		rt: (e, ...t) => {
			let { values: n, count: r } = we(t);
			return j(e, n, r, o());
		},
		d: l,
		n: u,
		setLocaleMessage: (e, t) => {
			$("setLocaleMessage");
		},
		mergeLocaleMessage: (e, t) => {
			$("mergeLocaleMessage");
		},
		getLocaleMessage: (e) => ($("getLocaleMessage"), {})
	}, f = {
		get locale() {
			return o();
		},
		set locale(e) {
			r.setLocale(e);
		},
		get availableLocales() {
			return xt();
		},
		t: c,
		tc: c,
		te: d.te,
		tm: d.tm,
		rt: d.rt,
		d: l,
		n: u
	}, p = (e, t) => {
		let n = t.value;
		if (typeof n == "string") e.textContent = c(n);
		else if (n && typeof n == "object") {
			let t = [];
			n.args && t.push(n.args), typeof n.choice == "number" && t.push(n.choice), e.textContent = c(n.path, ...t);
		}
	}, m = {
		global: d,
		mode: e.legacy === !0 ? "legacy" : "composition",
		__optionsMessages: n,
		install(t) {
			_t(t, { locale: e.locale }), t.provide(vt, m), t.config.globalProperties.$t = c, t.config.globalProperties.$tc = c, t.config.globalProperties.$te = d.te, t.config.globalProperties.$tm = d.tm, t.config.globalProperties.$rt = d.rt, t.config.globalProperties.$d = l, t.config.globalProperties.$n = u, t.config.globalProperties.$i18n = f, t.directive("t", {
				beforeMount: p,
				updated: p
			});
		}
	};
	return m;
})({
	legacy: !1,
	locale: "en",
	fallbackLocale: "en"
}), Ct = i({
	__name: "Wrapper",
	setup(e) {
		let t = a()?.appContext.app;
		return t && !t.config.globalProperties.$i18n && t.use(St), (e, t) => d(e.$slots, "default");
	}
}), wt = { render() {
	return o(Ct, {}, { default: () => o(re) });
} };
export { wt as default };
