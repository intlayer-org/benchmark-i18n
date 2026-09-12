import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, createTextVNode as i, defineComponent as a, getCurrentInstance as o, h as s, normalizeClass as c, openBlock as l, readonly as u, ref as d, renderList as f, renderSlot as p, toDisplayString as m } from "vue";
var ee = a({
	__name: "PricingTiers",
	setup(e, { expose: t }) {
		t();
		let n = { tiers: [
			{
				name: "Starter",
				price: "$0",
				period: "forever",
				features: [
					"5 benchmark runs/day",
					"3 libraries",
					"Community support",
					"Public results"
				]
			},
			{
				name: "Pro",
				price: "$29",
				period: "/month",
				features: [
					"Unlimited runs",
					"All libraries",
					"Priority support",
					"Private results",
					"CI integration",
					"Historical data"
				],
				highlighted: !0
			},
			{
				name: "Enterprise",
				price: "Custom",
				period: "",
				features: [
					"Everything in Pro",
					"On-premise option",
					"SSO & SAML",
					"Dedicated account manager",
					"Custom SLAs",
					"Audit logs",
					"Training sessions"
				]
			}
		] };
		return Object.defineProperty(n, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), n;
	}
}), te = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ne = { class: "grid gap-6 md:grid-cols-3" }, re = { class: "text-lg font-semibold text-foreground" }, ie = { class: "my-4" }, ae = { class: "text-3xl font-bold text-foreground" }, oe = { class: "text-sm text-muted-foreground" }, se = { class: "mb-6 flex-1 space-y-2" };
function ce(t, a, o, s, u, d) {
	return l(), n("div", ne, [(l(), n(e, null, f(s.tiers, (t) => r("div", {
		key: t.name,
		class: c(["flex flex-col rounded-lg border p-6", t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"])
	}, [
		r("h3", re, m(t.name), 1),
		r("div", ie, [r("span", ae, m(t.price), 1), r("span", oe, m(t.period), 1)]),
		r("ul", se, [(l(!0), n(e, null, f(t.features, (e) => (l(), n("li", {
			key: e,
			class: "flex items-center gap-2 text-sm text-muted-foreground"
		}, [a[0] ||= r("span", { class: "text-primary" }, "✓", -1), i(" " + m(e), 1)]))), 128))]),
		r("button", {
			type: "button",
			class: c(["w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90", t.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"])
		}, m(t.name === "Enterprise" ? "Contact Sales" : "Get Started"), 3)
	], 2)), 64))]);
}
var le = te(ee, [["render", ce], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/src/components/pages/pricing/PricingTiers.vue"]]), h = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, ue = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = h(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, de = (e, t, n, r) => {
	let i = h(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, fe = "translation", pe = "enumeration", me = "plural", g = "insertion", he = "object", ge = "array", _ = "markdown", v = "html", _e = "gender", ve = "select", y = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => y(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => y(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ge,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: he,
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
}, ye = (e, t, n = ".") => {
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
}, be = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, xe = (e, t) => e[be(e, t) ?? "fallback"], b = {
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
}, x = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, Se = 50, Ce = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Set(), Te = (e) => {
	we.has(e) || (we.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ee = {
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
}, De = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Te(e), Ee[e]);
};
function S(e, t, n) {
	let r = t ?? b?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Ce.get(a);
	o || (o = /* @__PURE__ */ new Map(), Ce.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? De(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Se && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Oe = (e, t, n) => e[S("PluralRules", n).select(t)] ?? e.other, ke = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Ae = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], C = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, w = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? S("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? S("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : S("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return S("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, T = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = C(t, r);
	return o === void 0 ? e : i ? w(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = C(t, r);
	return o === void 0 ? e : w(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = C(t, n);
	return r === void 0 ? e : String(r);
}), E = (e, t) => e[t] ?? e.count ?? e.n, D = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return T(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return D(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(D(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return D(r[g], t, n);
	if (r.nodeType === "html") return D(r[v], t, n);
	if (r.nodeType === "plural") {
		let e = r[me];
		return D(Oe(e, Number(E(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[pe], i = Ae.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ae.includes(t) || (o[t] = n);
		let s = E(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = S("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? xe(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return D(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[ve], i = E(t, typeof r.variable == "string" ? r.variable : "value");
		return D(ke(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[_e];
		return D(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, je = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), Me = (e, t) => {
	let n = Math.abs(e);
	return t === 2 ? n ? +(n > 1) : 1 : n ? Math.min(n, 2) : 0;
}, O = (e) => {
	let t = { values: {} };
	for (let n of e) if (typeof n == "number") t.count = n;
	else if (typeof n == "string") t.defaultMessage = n;
	else if (Array.isArray(n)) t.values = { ...n.map(String) };
	else if (typeof n == "object" && n) {
		let e = n;
		t.values = e, typeof e.plural == "number" && (t.count = e.plural);
	}
	return t;
}, k = (e, t, n, r) => {
	let i = { ...t };
	if (n !== void 0 && (i.count ??= n, i.n ??= n), typeof e == "string") {
		let t = e;
		if (/(?<!\\)\|/.test(t)) {
			let e = je(t);
			t = e[Me(n ?? 1, e.length)] ?? t;
		}
		return T(t, i, r);
	}
	let a = D(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, A = "\x1B[0m", Ne = "\x1B[90m", Pe = "\x1B[34m", Fe = "\x1B[31m", Ie = "\x1B[32m", Le = "\x1B[35m", Re = "\x1B[38;5;3m", j = "\x1B[36m", ze = (e) => e, Be = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = ze(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, M = (e, t) => (n, r) => Be(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), N = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? A : n : A}` : e, Ve = (e, t = Re, n = A) => [e].flat().map((e) => N(e, t, n)).join(", ");
N("✗", Fe), N("✓", Ie), N("⏲", Pe);
var He = /* @__PURE__ */ new WeakMap(), P = 0, Ue = (e) => {
	if (!e) return "base";
	let t = He.get(e);
	if (t) return t;
	P += 1;
	let n = `p${P}`;
	return He.set(e, n), n;
}, We = 256, F = /* @__PURE__ */ new WeakMap(), I = (e) => typeof e == "object" && !!e, Ge = (e, t, n) => `${e}_${t}_${Ue(n)}`, Ke = (e, t) => {
	if (!I(e)) return { hit: !1 };
	let n = F.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, L = (e, t, n) => {
	if (!I(e)) return n;
	let r = F.get(e);
	return r || (r = /* @__PURE__ */ new Map(), F.set(e, r)), r.size >= We && r.clear(), r.set(t, n), n;
}, R = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), z = "default", qe = /[^A-Za-z0-9._&=-]/g, B = /[^A-Za-z0-9._-]/g, Je = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, V = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Je);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, H = (e) => e === void 0 ? z : typeof e == "string" ? V(e, qe) : Object.keys(e).sort().map((t) => `${V(t, B)}=${V(String(e[t]), B)}`).join("&"), U = (e) => Array.isArray(e) ? e.length === 0 ? [z] : e.map(H) : [H(e)], Ye = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? z : e[0] ?? "default";
}, Xe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Ze = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Qe = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, $e = (e, t) => {
	if (!Ze(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? z : Ye(U(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Xe(e, n, t, s)).map((t) => Qe(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, et = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, tt = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? U(n).join(",") : String(n)}`;
}).join("|") : "", nt = () => ({}), rt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), W = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : rt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : W(e ? `${e}.${String(n)}` : String(n)) }), G = /* @__PURE__ */ new Set(), it = (e, t, n) => {
	let r = nt()[e];
	return r ? yt(r, t, n) : (G.has(e) || (M({ log: x })(typeof window > "u" ? `Dictionary ${Ve(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), G.add(e)), W(e));
}, K = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, q = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (K(e) && K(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : q(e[r], t[r]));
		return n;
	}
	return e;
}, at = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => q(e, t));
}, J = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, ot = (e) => {
	if (typeof e == "string") return e;
	if (J(e)) return e.nodeType === "html" ? e[v] : e[_];
}, st = (e, t) => {
	if (typeof e == "string") return t;
	if (J(e)) {
		let n = e.nodeType === "html" ? v : _;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, ct = (e, t, n, r, i) => {
	let a = st(e, R(ot(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, Y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, lt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? Y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: fe,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return at(o, e, t);
	}
}, ut = Y, dt = Y, ft = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: g }], i = e[g], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || J(e),
			transform: (e, n, r) => {
				if (J(e)) return (i) => ct(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = R(i, e);
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
}, pt = Y, mt = Y, ht = (e) => Y, gt = Y, _t = (e, t = !0) => [
	lt(e ?? b.defaultLocale, t ? b.defaultLocale : void 0),
	ut,
	dt,
	ft,
	ht(e ?? b.defaultLocale),
	gt,
	pt,
	mt
], vt = (e, t, n = []) => y(e, {
	...t,
	plugins: n
}), yt = (e, t, n) => {
	let { locale: r, selector: i } = et(t), a = Ge(r ?? b.defaultLocale, tt(i), n), o = Ke(e, a);
	if (o.hit) return o.content;
	let s = n ?? _t(r), c = $e(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return vt(e.content, t, s);
	};
	return c === null ? L(e, a, null) : Array.isArray(c) ? L(e, a, c.map(l)) : L(e, a, l(c));
}, bt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, xt = Symbol("intlayer"), X = null, St = (e, t = !0, n) => {
	if (X) return X;
	bt();
	let { defaultLocale: r } = b ?? {}, i = d(e ?? r), a = (e) => {
		i.value = e;
	}, o = d(n);
	return X = {
		locale: u(i),
		setLocale: a,
		variant: u(o),
		setVariant: (e) => {
			o.value = e;
		},
		isCookieEnabled: t
	}, X;
}, Ct = (e, t) => {
	let { locale: n, isCookieEnabled: r, variant: i } = t ?? {}, a = St(n, r, i);
	return e.provide(xt, a), e;
}, wt = Symbol("global-i18n"), Tt = "translation", Z = (e, t, n) => {
	try {
		let r = ye(it(t, e), n);
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
		let t = Z(e, Tt, i);
		if (t !== void 0) return t;
	}
}, Et = (e, t, n, r, i) => {
	let { values: a, count: o, defaultMessage: s } = O(r), c = Q(e, t, n);
	if (c === void 0) {
		if (i?.[e]) {
			let r = t ? `${t}.${n}` : n, s = ye(i[e], r);
			if (s !== void 0) return k(s, a, o, e);
		}
		return s === void 0 ? n : k(s, a, o, e);
	}
	return k(c, a, o, e);
}, Dt = () => b?.locales?.map(String) ?? [], $ = (e) => {
	M({ log: x })(`${N(e, j)} has no effect with ${N("@intlayer/vue-i18n", Le)} — translations are managed by the compiled intlayer dictionaries.`);
}, Ot = ((e = {}) => {
	let n = e.messages;
	e.messages !== void 0 && M({ log: x })(`${N("createI18n", j)}: the ${N("`messages`", j)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${N("useDictionary", j)} or compile your intlayer dictionaries instead:\n  ${N("Before:", Ne)} createI18n({ messages: { en, fr, … } })\n  ${N("After: ", Ne)} createI18n({})`);
	let r = St(e.locale), i = e.datetimeFormats, a = e.numberFormats, o = () => String(r.locale.value), s = t({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => Et(o(), void 0, e, t, n), l = (e, t) => ue(e, t, o(), i), u = (e, t) => de(e, t, o(), a), d = {
		locale: s,
		availableLocales: Dt(),
		fallbackLocale: e.fallbackLocale ?? b?.defaultLocale,
		t: c,
		tc: c,
		te: (e) => Q(o(), void 0, e) !== void 0,
		tm: (e) => Q(o(), void 0, e) ?? {},
		rt: (e, ...t) => {
			let { values: n, count: r } = O(t);
			return k(e, n, r, o());
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
			return Dt();
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
			Ct(t, { locale: e.locale }), t.provide(wt, m), t.config.globalProperties.$t = c, t.config.globalProperties.$tc = c, t.config.globalProperties.$te = d.te, t.config.globalProperties.$tm = d.tm, t.config.globalProperties.$rt = d.rt, t.config.globalProperties.$d = l, t.config.globalProperties.$n = u, t.config.globalProperties.$i18n = f, t.directive("t", {
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
}), kt = a({
	__name: "Wrapper",
	setup(e, { expose: t }) {
		t();
		let n = o()?.appContext.app;
		n && !n.config.globalProperties.$i18n && n.use(Ot);
		let r = { app: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
});
function At(e, t, n, r, i, a) {
	return p(e.$slots, "default");
}
var jt = te(kt, [["render", At], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/scripts/Wrapper.vue"]]), Mt = { render() {
	return s(jt, {}, { default: () => s(le) });
} };
export { Mt as default };
