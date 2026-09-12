import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, openBlock as s, readonly as c, ref as l, renderList as u, renderSlot as d, toDisplayString as f } from "vue";
var p = i({
	__name: "TeamGrid",
	setup(e, { expose: t }) {
		t();
		let n = {
			members: [
				{
					name: "Sarah Chen",
					role: "Founder & Lead Engineer",
					bio: "Former Google engineer with 10 years of experience building internationalization systems at scale."
				},
				{
					name: "Marcus Weber",
					role: "Performance Engineer",
					bio: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel."
				},
				{
					name: "Aisha Patel",
					role: "Developer Advocate",
					bio: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext."
				},
				{
					name: "Tomás Rodríguez",
					role: "Full-Stack Developer",
					bio: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui."
				},
				{
					name: "Yuki Tanaka",
					role: "Data Analyst",
					bio: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT."
				},
				{
					name: "Elena Kowalski",
					role: "Community Manager",
					bio: "Manages community contributions, partnerships, and events. Background in open source governance."
				}
			],
			getInitials: (e) => e.split(" ").map((e) => e[0]).join("")
		};
		return Object.defineProperty(n, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), n;
	}
}), m = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ee = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, te = { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground" }, ne = { class: "text-base font-semibold text-foreground" }, re = { class: "mb-2 text-xs font-medium text-primary" }, ie = { class: "text-sm text-muted-foreground" };
function ae(t, i, a, o, c, l) {
	return s(), n("div", ee, [(s(), n(e, null, u(o.members, (e) => r("div", {
		key: e.name,
		class: "rounded-lg border border-border bg-card p-6 text-center"
	}, [
		r("div", te, f(o.getInitials(e.name)), 1),
		r("h3", ne, f(e.name), 1),
		r("p", re, f(e.role), 1),
		r("p", ie, f(e.bio), 1)
	])), 64))]);
}
var oe = m(p, [["render", ae], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/src/components/pages/team/TeamGrid.vue"]]), se = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, ce = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = se(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, le = (e, t, n, r) => {
	let i = se(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, ue = "translation", de = "enumeration", fe = "plural", h = "insertion", pe = "object", me = "array", g = "markdown", _ = "html", he = "gender", ge = "select", v = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => v(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => v(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: me,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: pe,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = v(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = v(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, y = (e, t, n = ".") => {
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
}, _e = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ve = (e, t) => e[_e(e, t) ?? "fallback"], b = {
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
}, ye = 50, S = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Set(), be = (e) => {
	C.has(e) || (C.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, xe = {
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
}, Se = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (be(e), xe[e]);
};
function w(e, t, n) {
	let r = t ?? b?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = S.get(a);
	o || (o = /* @__PURE__ */ new Map(), S.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Se(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ye && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ce = (e, t, n) => e[w("PluralRules", n).select(t)] ?? e.other, we = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Te = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], T = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Ee = (e, t, n, r) => {
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
}, E = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = T(t, r);
	return o === void 0 ? e : i ? Ee(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = T(t, r);
	return o === void 0 ? e : Ee(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = T(t, n);
	return r === void 0 ? e : String(r);
}), D = (e, t) => e[t] ?? e.count ?? e.n, O = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return E(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return O(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(O(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return O(r[h], t, n);
	if (r.nodeType === "html") return O(r[_], t, n);
	if (r.nodeType === "plural") {
		let e = r[fe];
		return O(Ce(e, Number(D(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[de], i = Te.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Te.includes(t) || (o[t] = n);
		let s = D(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = w("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ve(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return O(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[ge], i = D(t, typeof r.variable == "string" ? r.variable : "value");
		return O(we(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[he];
		return O(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, De = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), Oe = (e, t) => {
	let n = Math.abs(e);
	return t === 2 ? n ? +(n > 1) : 1 : n ? Math.min(n, 2) : 0;
}, k = (e) => {
	let t = { values: {} };
	for (let n of e) if (typeof n == "number") t.count = n;
	else if (typeof n == "string") t.defaultMessage = n;
	else if (Array.isArray(n)) t.values = { ...n.map(String) };
	else if (typeof n == "object" && n) {
		let e = n;
		t.values = e, typeof e.plural == "number" && (t.count = e.plural);
	}
	return t;
}, A = (e, t, n, r) => {
	let i = { ...t };
	if (n !== void 0 && (i.count ??= n, i.n ??= n), typeof e == "string") {
		let t = e;
		if (/(?<!\\)\|/.test(t)) {
			let e = De(t);
			t = e[Oe(n ?? 1, e.length)] ?? t;
		}
		return E(t, i, r);
	}
	let a = O(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, j = "\x1B[0m", ke = "\x1B[90m", Ae = "\x1B[34m", je = "\x1B[31m", Me = "\x1B[32m", Ne = "\x1B[35m", Pe = "\x1B[38;5;3m", M = "\x1B[36m", Fe = (e) => e, Ie = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Fe(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, N = (e, t) => (n, r) => Ie(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), P = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? j : n : j}` : e, Le = (e, t = Pe, n = j) => [e].flat().map((e) => P(e, t, n)).join(", ");
P("✗", je), P("✓", Me), P("⏲", Ae);
var Re = /* @__PURE__ */ new WeakMap(), ze = 0, Be = (e) => {
	if (!e) return "base";
	let t = Re.get(e);
	if (t) return t;
	ze += 1;
	let n = `p${ze}`;
	return Re.set(e, n), n;
}, Ve = 256, F = /* @__PURE__ */ new WeakMap(), I = (e) => typeof e == "object" && !!e, He = (e, t, n) => `${e}_${t}_${Be(n)}`, Ue = (e, t) => {
	if (!I(e)) return { hit: !1 };
	let n = F.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, L = (e, t, n) => {
	if (!I(e)) return n;
	let r = F.get(e);
	return r || (r = /* @__PURE__ */ new Map(), F.set(e, r)), r.size >= Ve && r.clear(), r.set(t, n), n;
}, R = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), z = "default", We = /[^A-Za-z0-9._&=-]/g, B = /[^A-Za-z0-9._-]/g, Ge = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, V = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Ge);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, H = (e) => e === void 0 ? z : typeof e == "string" ? V(e, We) : Object.keys(e).sort().map((t) => `${V(t, B)}=${V(String(e[t]), B)}`).join("&"), U = (e) => Array.isArray(e) ? e.length === 0 ? [z] : e.map(H) : [H(e)], Ke = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? z : e[0] ?? "default";
}, qe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Je = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Ye = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Xe = (e, t) => {
	if (!Je(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? z : Ke(U(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => qe(e, n, t, s)).map((t) => Ye(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Ze = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Qe = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? U(n).join(",") : String(n)}`;
}).join("|") : "", $e = () => ({}), et = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), W = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : et.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : W(e ? `${e}.${String(n)}` : String(n)) }), G = /* @__PURE__ */ new Set(), tt = (e, t, n) => {
	let r = $e()[e];
	return r ? gt(r, t, n) : (G.has(e) || (N({ log: x })(typeof window > "u" ? `Dictionary ${Le(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), G.add(e)), W(e));
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
}, nt = (e, t, n) => {
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
}, rt = (e) => {
	if (typeof e == "string") return e;
	if (J(e)) return e.nodeType === "html" ? e[_] : e[g];
}, it = (e, t) => {
	if (typeof e == "string") return t;
	if (J(e)) {
		let n = e.nodeType === "html" ? _ : g;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, at = (e, t, n, r, i) => {
	let a = it(e, R(rt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, Y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, ot = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? Y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ue,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return nt(o, e, t);
	}
}, st = Y, ct = Y, lt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: h }], i = e[h], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || J(e),
			transform: (e, n, r) => {
				if (J(e)) return (i) => at(e, i, n, t.plugins, r);
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
}, ut = Y, dt = Y, ft = (e) => Y, pt = Y, mt = (e, t = !0) => [
	ot(e ?? b.defaultLocale, t ? b.defaultLocale : void 0),
	st,
	ct,
	lt,
	ft(e ?? b.defaultLocale),
	pt,
	ut,
	dt
], ht = (e, t, n = []) => v(e, {
	...t,
	plugins: n
}), gt = (e, t, n) => {
	let { locale: r, selector: i } = Ze(t), a = He(r ?? b.defaultLocale, Qe(i), n), o = Ue(e, a);
	if (o.hit) return o.content;
	let s = n ?? mt(r), c = Xe(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return ht(e.content, t, s);
	};
	return c === null ? L(e, a, null) : Array.isArray(c) ? L(e, a, c.map(l)) : L(e, a, l(c));
}, _t = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, vt = Symbol("intlayer"), X = null, yt = (e, t = !0, n) => {
	if (X) return X;
	_t();
	let { defaultLocale: r } = b ?? {}, i = l(e ?? r), a = (e) => {
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
}, bt = (e, t) => {
	let { locale: n, isCookieEnabled: r, variant: i } = t ?? {}, a = yt(n, r, i);
	return e.provide(vt, a), e;
}, xt = Symbol("global-i18n"), St = "translation", Z = (e, t, n) => {
	try {
		let r = y(tt(t, e), n);
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
		let t = Z(e, St, i);
		if (t !== void 0) return t;
	}
}, Ct = (e, t, n, r, i) => {
	let { values: a, count: o, defaultMessage: s } = k(r), c = Q(e, t, n);
	if (c === void 0) {
		if (i?.[e]) {
			let r = t ? `${t}.${n}` : n, s = y(i[e], r);
			if (s !== void 0) return A(s, a, o, e);
		}
		return s === void 0 ? n : A(s, a, o, e);
	}
	return A(c, a, o, e);
}, wt = () => b?.locales?.map(String) ?? [], $ = (e) => {
	N({ log: x })(`${P(e, M)} has no effect with ${P("@intlayer/vue-i18n", Ne)} — translations are managed by the compiled intlayer dictionaries.`);
}, Tt = ((e = {}) => {
	let n = e.messages;
	e.messages !== void 0 && N({ log: x })(`${P("createI18n", M)}: the ${P("`messages`", M)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${P("useDictionary", M)} or compile your intlayer dictionaries instead:\n  ${P("Before:", ke)} createI18n({ messages: { en, fr, … } })\n  ${P("After: ", ke)} createI18n({})`);
	let r = yt(e.locale), i = e.datetimeFormats, a = e.numberFormats, o = () => String(r.locale.value), s = t({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => Ct(o(), void 0, e, t, n), l = (e, t) => ce(e, t, o(), i), u = (e, t) => le(e, t, o(), a), d = {
		locale: s,
		availableLocales: wt(),
		fallbackLocale: e.fallbackLocale ?? b?.defaultLocale,
		t: c,
		tc: c,
		te: (e) => Q(o(), void 0, e) !== void 0,
		tm: (e) => Q(o(), void 0, e) ?? {},
		rt: (e, ...t) => {
			let { values: n, count: r } = k(t);
			return A(e, n, r, o());
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
			return wt();
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
			bt(t, { locale: e.locale }), t.provide(xt, m), t.config.globalProperties.$t = c, t.config.globalProperties.$tc = c, t.config.globalProperties.$te = d.te, t.config.globalProperties.$tm = d.tm, t.config.globalProperties.$rt = d.rt, t.config.globalProperties.$d = l, t.config.globalProperties.$n = u, t.config.globalProperties.$i18n = f, t.directive("t", {
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
}), Et = i({
	__name: "Wrapper",
	setup(e, { expose: t }) {
		t();
		let n = a()?.appContext.app;
		n && !n.config.globalProperties.$i18n && n.use(Tt);
		let r = { app: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
});
function Dt(e, t, n, r, i, a) {
	return d(e.$slots, "default");
}
var Ot = m(Et, [["render", Dt], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/scripts/Wrapper.vue"]]), kt = { render() {
	return o(Ot, {}, { default: () => o(oe) });
} };
export { kt as default };
