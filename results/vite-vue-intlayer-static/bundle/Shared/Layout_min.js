import { C as e, S as t, a as n, b as r, c as i, g as a, h as o, i as s, l as c, m as l, n as u, o as d, r as f, s as p, t as m, x as h } from "./getContent-DrnKJV-E.js";
import { Fragment as g, computed as _, createBlock as v, createCommentVNode as y, createElementBlock as b, createElementVNode as x, createTextVNode as S, createVNode as C, defineComponent as w, getCurrentInstance as ee, h as T, inject as E, isRef as te, markRaw as D, normalizeClass as ne, onBeforeMount as re, onMounted as O, onUnmounted as ie, openBlock as k, ref as A, renderList as j, resolveComponent as M, shallowRef as ae, toDisplayString as N, toValue as oe, watch as P, withCtx as F } from "vue";
import { useRoute as I, useRouter as se } from "vue-router";
import { ChevronDown as ce } from "lucide-vue-next";
var L = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = A(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	return Object.setPrototypeOf(o, String.prototype), Object.assign(o, {
		render: a,
		toString: () => String(r.value ?? ""),
		valueOf: () => r.value,
		[Symbol.toPrimitive]: () => r.value,
		toJSON: () => r.value,
		get raw() {
			return r.value;
		},
		set raw(e) {
			r.value = e;
		},
		get value() {
			return r.value;
		},
		use(e) {
			return L({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), D(o);
}, R = w({
	name: "ContentSelector",
	props: {
		dictionaryKey: {
			type: String,
			required: !0
		},
		keyPath: {
			type: Array,
			required: !0
		}
	},
	setup(e, { slots: t }) {
		return () => t.default?.();
	}
}), le = (e, t, n = m(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return u(e.content, r, n);
}, z = (e) => {
	let t = {}, n = /([a-zA-Z0-9-]+)="([^"]*)"/g, r = n.exec(e);
	for (; r !== null;) t[r[1]] = r[2], r = n.exec(e);
	return t;
}, B = /* @__PURE__ */ new Map(), ue = (e) => {
	if (B.has(e)) return B.get(e);
	if (typeof e != "string") return [];
	let t = /<(\/)?([a-zA-Z0-9.-]+)([\s\S]*?)(\/?)>/g, n = [], r = [], i = 0, a = t.exec(e), o = (e) => {
		(r.length > 0 ? r[r.length - 1].children : n).push(e);
	};
	for (; a !== null;) {
		let [n, s, c, l, u] = a, d = a.index;
		d > i && o(e.slice(i, d));
		let f = s === "/", p = u === "/" || l.trim().endsWith("/") || n.endsWith("/>"), m = l.trim().replace(/\/$/, "").trim();
		if (f) {
			let e = r[r.length - 1];
			if (e && e.tagName === c) {
				let e = r.pop();
				e && o({
					tagName: e.tagName,
					props: e.props,
					children: e.children
				});
			}
		} else if (p) o({
			tagName: c,
			props: z(m),
			children: []
		});
		else {
			let e = z(m);
			r.push({
				tagName: c,
				children: [],
				props: e
			});
		}
		i = d + n.length, a = t.exec(e);
	}
	for (i < e.length && o(e.slice(i)); r.length > 0;) {
		let e = r.pop();
		e && o({
			tagName: e.tagName,
			props: e.props,
			children: e.children
		});
	}
	return B.set(e, n), n;
}, de = (e, t) => {
	let n = ue(e), r = 0, i = (e) => {
		if (typeof e == "string") return e;
		let { tagName: n, props: a, children: o } = e, s = o.flatMap(i), c = r++, l = t[n];
		if (!l) {
			let e = n.toLowerCase(), r = Object.keys(t).find((t) => t.toLowerCase() === e);
			r && (l = t[r]);
		}
		let u = `html-tag-${n}-${c}`;
		if (typeof l == "function") return l({
			...a,
			children: s,
			key: u
		});
		if (typeof l == "string") {
			let e = t[l];
			return typeof e == "function" ? e({
				...a,
				children: s,
				key: u
			}) : s;
		}
		if (typeof l == "object" && l && "tag" in l) {
			let { tag: e, props: n } = l, r = t[e];
			return typeof r == "function" ? r({
				...a,
				...n,
				children: s,
				key: u
			}) : s;
		}
		return s;
	}, a = n.flatMap(i);
	return a.length === 1 ? a[0] : a;
}, fe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", V = /\{\{\s*(.*?)\s*\}\}/g, pe = (e, t = {}) => {
	if (!Object.values(t).some(fe)) return {
		isSimple: !0,
		parts: e.replace(V, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(V), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, me = Symbol("intlayerHTML"), he = () => E(me), H = (e, { components: t = {} } = {}) => {
	let n = Object.fromEntries(Object.entries(t).filter(([, e]) => e).map(([e, t]) => [e, (e) => T(t, e, e?.children)]));
	return de(e, new Proxy(n, { get(e, t) {
		if (typeof t == "string" && t in e) return e[t];
		if (typeof t == "string" && /^[a-z][a-z0-9]*$/.test(t)) return (e) => T(t, e, e?.children);
	} }));
}, ge = ({ components: e } = {}) => {
	let t = he();
	return (n) => t ? t.renderHTML(n, { components: e }) : H(n, { components: e });
};
w({
	name: "HTMLRenderer",
	props: {
		content: {
			type: String,
			required: !0
		},
		components: {
			type: Object,
			default: void 0
		}
	},
	setup(e) {
		let t = ge({ components: e.components });
		return () => t(e.content);
	}
});
var _e = new Set([
	"true",
	"false",
	"null",
	"undefined",
	"yes",
	"no",
	"on",
	"off",
	"NaN",
	"Infinity",
	"-Infinity"
]), ve = (e) => {
	let t = e.trim();
	if (!t) return null;
	let n = 0, r = () => t[n], i = () => t[n++], a = () => n >= t.length, o = () => {
		for (; !a() && " \n	\r".includes(r());) n++;
	}, s = (e) => {
		i();
		let t = "";
		for (; !a();) {
			let n = i();
			if (n === e) return t;
			n === "\\" && !a() ? t += i() : t += n;
		}
		throw SyntaxError("Unterminated string");
	}, c = (e) => {
		let i = n;
		for (; !a() && !e.includes(r());) n++;
		return t.slice(i, n).trim();
	}, l = (e) => _e.has(e) || /^0x[0-9a-fA-F]+$/.test(e) || /^#/.test(e) ? e : /^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/i.test(e) ? e === "3.14159265359" ? Math.PI : Number(e) : e, u = (e) => {
		if (o(), a()) throw SyntaxError("Unexpected end of input");
		let t = r();
		if (t === "[") return d();
		if (t === "{") return _();
		if (t === "\"" || t === "'") return s(t);
		let n = c(e);
		if (!n) throw SyntaxError("Empty token");
		return l(n);
	}, d = () => {
		i();
		let e = [];
		if (o(), r() === "]") return i(), e;
		for (;;) {
			o(), e.push(u(",]")), o();
			let t = i();
			if (t === "]") break;
			if (t !== ",") throw SyntaxError("Expected ',' or ']' after array element");
			if (o(), r() === "]") throw SyntaxError("Trailing comma in array");
		}
		return e;
	}, f = () => {
		i(), o();
		let e = r();
		if (e === "{") return _();
		if (e === "\"" || e === "'") return s(e);
		let a = t.indexOf("\n", n), u = t.slice(n, a === -1 ? t.length : a);
		return /: /.test(u) ? m() : l(c("\n"));
	}, p = () => {
		let e = t.lastIndexOf("\n", n - 1) + 1, r = 0;
		for (let i = e; i < n && t[i] === " "; i++) r++;
		return r;
	}, m = () => {
		let e = {}, u = p();
		for (; !a();) {
			let d = n, f = d === 0 || t[d - 1] === "\n";
			if (o(), f && p() <= u) {
				n = d;
				break;
			}
			if (r() === "-" || a()) {
				n = d;
				break;
			}
			let m = r(), g = m === "\"" || m === "'" ? s(m) : c(":");
			if (a() || i() !== ":") break;
			if (o(), r() === "\n" && (i(), o(), r() === "-")) {
				e[g] = h();
				continue;
			}
			e[g] = l(c("\n")), r() === "\n" && i();
		}
		return e;
	}, h = () => {
		let e = [], t = p();
		for (; !a();) {
			for (; !a() && " \n	\r".includes(r()) && r() !== "-";) i();
			if (a() || p() < t || r() !== "-") break;
			e.push(f());
		}
		return e;
	}, g = (e) => {
		let t = {};
		for (o(); !a() && !e.includes(r());) {
			let l = r(), d = l === "\"" || l === "'" ? s(l) : c(`:\n${e}`);
			if (!d) return t;
			if (a() || i() !== ":") throw SyntaxError("Expected ':' after key");
			for (r() === " " && i(); !a() && " 	".includes(r());) i();
			if (a()) return t[d] = "", t;
			if (r() === "\n") {
				i();
				let a = n;
				if (o(), r() === "-") {
					t[d] = h(), o();
					continue;
				} else {
					n = a, o();
					let i = r();
					if (i && !e.includes(i) && i !== "-") {
						t[d] = "";
						continue;
					}
					return t[d] = "", t;
				}
			}
			if (t[d] = u(e.includes("}") ? `,\n${e}` : `\n${e}`), a()) return t;
			let f = r();
			if (f === "," || f === "\n") {
				i(), o();
				continue;
			}
			if (" 	".includes(f)) {
				for (; !a() && " 	".includes(r());) i();
				if (r() === "\n") {
					i(), o();
					continue;
				}
				if (a() || e.includes(r())) return t;
				continue;
			}
			if (e.includes(f)) return t;
		}
		return t;
	}, _ = () => {
		if (i(), o(), r() === "}") return i(), {};
		let e = g("}");
		if (r() !== "}") throw SyntaxError("Expected '}' at end of object");
		return i(), e;
	}, v = (e) => {
		let t = 0, n = null;
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (n) i === "\\" ? r++ : i === n && (n = null);
			else if (i === "\"" || i === "'") n = i;
			else if (i === "[" || i === "{") t++;
			else if (i === "]" || i === "}") t = Math.max(0, t - 1);
			else if (t === 0 && i === ":") {
				let t = e[r + 1];
				if (!t || " \n".includes(t)) return !0;
			}
		}
		return !1;
	};
	if (t.startsWith("]") || t.startsWith("}")) throw SyntaxError("Unexpected closing bracket");
	let y;
	if (y = t.startsWith("[") ? d() : t.startsWith("{") ? _() : v(t) ? g("") : u(""), o(), !a()) throw SyntaxError("Unexpected trailing characters");
	return y;
}, ye = (e) => {
	try {
		let t = e.split(/\r?\n/), n = t.find((e) => e.trim() !== "");
		if (!n || n.trim() !== "---") return {};
		let r = -1;
		for (let e = 1; e < t.length; e++) if (t[e].trim() === "---") {
			r = e;
			break;
		}
		return r === -1 ? {} : ve(t.slice(1, r).join("\n")) ?? {};
	} catch {
		return {};
	}
};
(/* @__PURE__ */ "allowFullScreen.allowTransparency.autoComplete.autoFocus.autoPlay.cellPadding.cellSpacing.charSet.classId.colSpan.contentEditable.contextMenu.crossOrigin.encType.formAction.formEncType.formMethod.formNoValidate.formTarget.frameBorder.hrefLang.inputMode.keyParams.keyType.marginHeight.marginWidth.maxLength.mediaGroup.minLength.noValidate.radioGroup.readOnly.rowSpan.spellCheck.srcDoc.srcLang.srcSet.tabIndex.useMap".split(".")).reduce((e, t) => (e[t.toLowerCase()] = t, e), {
	class: "className",
	for: "htmlFor"
});
var U = "(?:\\d+\\.)", W = "(?:[*+-])", G = (e) => `(?=[\\s\\S]+?\\1${e ? "\\1" : ""})`, K = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\[^\\s]|[\\s\\S])+?)";
RegExp(`^([*_])\\1${G(1)}${K}\\1\\1(?!\\1)`), RegExp(`^([*_])${G(0)}${K}\\1(?!\\1)`), RegExp(`^(==)${G(0)}${K}\\1`), RegExp(`^(~~)${G(0)}${K}\\1`);
var be = (e) => "( *)(" + (e === 1 ? U : W) + ") +", xe = be(1), Se = be(2), Ce = (e) => RegExp("^" + (e === 1 ? xe : Se));
Ce(1), Ce(2);
var we = (e) => RegExp("^" + (e === 1 ? xe : Se) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? U : W) + " )[^\\n]*)*(\\n|$)", "gm");
we(1), we(2);
var Te = (e) => {
	let t = e === 1 ? U : W;
	return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
};
Te(1), Te(2);
var Ee = (e) => (t, n = {}) => {
	let r = performance.now(), i = (t, n = {}) => Ee(e)(t, n);
	if (Array.isArray(t)) {
		let e = n.key, a = [], o = !1, s = 0;
		for (let e = 0; e < t.length; e++) {
			let r = i(t[e], {
				...n,
				key: s
			}), c = typeof r == "string";
			c && o ? a[a.length - 1] = a[a.length - 1] + r : r !== null && (a.push(r), s++), o = c;
		}
		n.key = e;
		let c = performance.now() - r;
		return c > 20 && console.log(`renderFor (array): ${c.toFixed(3)}ms, ast length: ${t.length}`), a;
	}
	let a = e(t, i, n), o = performance.now() - r;
	return o > 20 && console.log(`renderFor (single): ${o.toFixed(3)}ms, ast type: ${t.type}`), a;
}, De = Symbol("intlayerMarkdown"), Oe = () => {
	let e = E(De, { renderMarkdown: (e) => e });
	if (!e) throw Error("useMarkdown must be used within a MarkdownProvider");
	return e;
}, ke = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", Ae = !0, je = !0, Me = !0, q = !0, Ne = ke ? n : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => L({
			...n,
			value: e,
			children: !q && h.enabled ? () => T(R, {
				dictionaryKey: n.dictionaryKey,
				keyPath: n.keyPath
			}, { default: () => typeof e == "function" ? e() : e }) : e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => r(t(...e));
		Object.setPrototypeOf(a, Object.getPrototypeOf(i));
		for (let e of Object.getOwnPropertyNames(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		return D(a);
	}
}, Pe = (e, t) => {
	let n = /* @__PURE__ */ new Map(), r = {};
	for (let [e, i] of Object.entries(t)) typeof i == "string" || typeof i == "number" ? r[e] = i : (n.set(e, i), r[e] = `__VNODE_${e}__`);
	let i = pe(e, r);
	if (n.size > 0) {
		let e = [];
		if (i.isSimple) {
			let t = i.parts, r = 0;
			for (let [i] of n) {
				let a = `__VNODE_${i}__`, o = t.indexOf(a);
				o !== -1 && (o > r && e.push(t.substring(r, o)), e.push(n.get(i)), r = o + a.length);
			}
			return r < t.length && e.push(t.substring(r)), T(g, null, ...e);
		} else return i.parts.forEach((t) => {
			if (typeof t == "string") {
				let r = t;
				for (let [t] of n) {
					let i = `__VNODE_${t}__`, a = r.indexOf(i);
					a !== -1 && (a > 0 && e.push(r.substring(0, a)), e.push(n.get(t)), r = r.substring(a + i.length));
				}
				r.length > 0 && e.push(r);
			} else e.push(t);
		}), T(g, null, ...e);
	}
	return i.isSimple ? i.parts : T(g, null, i.parts);
}, Fe = Me ? n : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: o }], i = e[o], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Pe(i, e);
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
}, Ie = Ae ? n : {
	id: "markdown-string-plugin",
	canHandle: (e) => typeof e == "string",
	transform: (e, t, n) => {
		let { plugins: r, ...i } = t, a = n(ye(e) ?? {}, {
			plugins: [{
				id: "markdown-metadata-plugin",
				canHandle: (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean" || !e,
				transform: (t, n) => L({
					...n,
					value: t,
					children: e
				})
			}],
			dictionaryKey: i.dictionaryKey,
			keyPath: []
		}), o = (n) => L({
			...t,
			value: e,
			children: () => {
				let { renderMarkdown: t, components: r } = Oe(), a = t(e, void 0, {
					...r ?? {},
					...n ?? {}
				});
				return !q && h.enabled ? T(R, {
					dictionaryKey: i.dictionaryKey,
					keyPath: i.keyPath
				}, { default: () => a }) : a;
			},
			additionalProps: {
				metadata: a,
				use: (e) => o(e)
			}
		});
		return o();
	}
}, Le = Ae ? n : {
	id: "markdown-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "markdown",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: a }], i = e[a];
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [Ie, ...t.plugins ?? []]
		});
	}
}, Re = je ? n : {
	id: "html-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "html",
	transform: (e, t) => {
		let n = e[l];
		e.tags;
		let r = (e = {}) => {
			let i = H(n, { components: e });
			return L({
				...t,
				value: n,
				children: !q && h.enabled ? () => T(R, {
					dictionaryKey: t.dictionaryKey,
					keyPath: t.keyPath,
					...e
				}, { default: () => i }) : i,
				additionalProps: { use: (e) => r(e) }
			});
		};
		return r();
	}
}, J = /* @__PURE__ */ new Map(), ze = (e, n = !0) => {
	let r = `${e ?? t.defaultLocale}_${n}`;
	if (J.has(r)) return J.get(r);
	let a = [
		c(e ?? t.defaultLocale, n ? t.defaultLocale : void 0),
		s,
		f,
		i(e ?? t.defaultLocale),
		d,
		p,
		Ne,
		Fe,
		Le,
		Re
	];
	return J.set(r, a), a;
}, Be = (e, t) => le(e, t, ze(t)), Ve = Symbol("intlayer"), Y = (e, t) => t.reduce((e, t) => e?.[t], e), X = (e) => typeof e == "object" && !!e, He = (e) => typeof e == "function" || X(e) && ("render" in e || "setup" in e), Ue = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, We = (e) => D(w({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : He(t) ? T(t) : Array.isArray(t) ? T("span", t) : t;
		};
	}
})), Ge = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return We(() => e.value);
		if (r == null) return n === Symbol.toPrimitive || n === "toString" ? () => "" : void 0;
		let i = r[n];
		return typeof i == "function" ? i.bind(r) : i;
	},
	ownKeys() {
		let t = e.value;
		return typeof t == "object" && t ? Reflect.ownKeys(t) : [];
	},
	getOwnPropertyDescriptor() {
		return {
			enumerable: !0,
			configurable: !0
		};
	}
}), Z = (e, n) => {
	let r = ee() ? E(Ve) : void 0, i = te(r?.locale) ? r.locale : A(r?.locale ?? t.defaultLocale), a = _(() => (n === void 0 ? void 0 : oe(n)) ?? i.value), o = ae({});
	P([() => oe(e), () => a.value], ([e, t]) => {
		o.value = Be(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let s = (e) => new Proxy({}, {
		get(t, n, r) {
			if (n === "__v_isRef") return !0;
			let i = _(() => Y(o.value, e));
			if (n === "value") return i.value ?? "";
			if (n === "then") return;
			if (n === "c" || n === "asComponent") return We(() => i.value);
			if (n === "$raw") return i;
			if (n === Symbol.toPrimitive) return () => i.value;
			let a = e.concat(n), c = Y(o.value, a);
			if (c === void 0 || X(c) && !He(c)) return s(a);
			if (Ue(c)) return Ge(_(() => Y(o.value, a)));
			let l = _(() => Y(o.value, a));
			return new Proxy(l, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = Y(o.value, e);
			return X(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return s([]);
}, Ke = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var qe = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Je = (n = Q) => {
	let { locales: r } = t;
	if (n?.isCookieEnabled === !1) return;
	let i = (e) => !!e && r.includes(e);
	if (!Ke) for (let t = 0; t < (e.storage.cookies ?? []).length; t++) try {
		let r = n?.getCookie?.(e.storage.cookies[t].name);
		if (i(r)) return r;
	} catch {}
}, Ye = (t, n) => {
	if (n?.isCookieEnabled !== !1 && !Ke && e.storage.cookies) for (let r = 0; r < e.storage.cookies.length; r++) {
		let { name: i, attributes: a } = e.storage.cookies[r];
		try {
			n?.setCookieStore && n.setCookieStore(i, t, {
				...a,
				expires: a.expires instanceof Date ? a.expires.getTime() : a.expires
			});
		} catch {
			try {
				n?.setCookieString && n.setCookieString(i, qe(i, t, a));
			} catch {}
		}
	}
}, Q = {
	getCookie: (e) => document.cookie.split(";").find((t) => t.trim().startsWith(`${e}=`))?.split("=")[1],
	getLocaleStorage: (e) => localStorage.getItem(e),
	getSessionStorage: (e) => sessionStorage.getItem(e),
	isCookieEnabled: !0,
	setCookieStore: (e, t, n) => cookieStore.set({
		name: e,
		value: t,
		path: n.path,
		domain: n.domain,
		expires: n.expires,
		sameSite: n.sameSite
	}),
	setCookieString: (e, t) => {
		document.cookie = t;
	},
	setSessionStorage: (e, t) => sessionStorage.setItem(e, t),
	setLocaleStorage: (e, t) => localStorage.setItem(e, t)
};
Je(Q);
var Xe = (e, t) => Ye(e, {
	...Q,
	isCookieEnabled: t
}), Ze = ({ isCookieEnabled: e, onLocaleChange: n } = {}) => {
	let { defaultLocale: r, locales: i } = t ?? {}, a = E(Ve);
	return {
		locale: _(() => a?.locale?.value ?? r),
		defaultLocale: r,
		availableLocales: i,
		setLocale: (t) => {
			if (!i?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			a && a.setLocale(t), Xe(t, e ?? a?.isCookieEnabled ?? !0), n?.(t);
		}
	};
};
function Qe() {
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
function $e(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var et = {
	key: "footer",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				e: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
				i: "Resources",
				b: "Contact",
				g: "GitHub",
				h: "Methodology",
				d: "Contributing",
				f: "i18n Benchmark — Open-source project. Built with Vue, Vite & Vue Router.",
				a: "i18n Benchmark",
				c: "contact@intlayer.org"
			},
			fr: {
				e: "Une application de test open-source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
				i: "Ressources",
				b: "Contact",
				g: "GitHub",
				h: "Méthodologie",
				d: "Contribuer",
				f: "Benchmark i18n — Projet open-source. Construit avec Vue, Vite et Vue Router.",
				a: "Benchmark i18n",
				c: "contact@intlayer.org"
			},
			es: {
				e: "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación.",
				i: "Recursos",
				b: "Contacto",
				g: "GitHub",
				h: "Metodología",
				d: "Contribuir",
				f: "i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y Vue Router.",
				a: "i18n Benchmark",
				c: "contact@intlayer.org"
			},
			de: {
				e: "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.",
				i: "Ressourcen",
				b: "Kontakt",
				g: "GitHub",
				h: "Methodik",
				d: "Mitwirken",
				f: "i18n Benchmark – Open-Source-Projekt. Erstellt mit Vue, Vite & Vue Router.",
				a: "i18n Benchmark",
				c: "contact@intlayer.org"
			},
			it: {
				e: "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sui tempi di caricamento e sulla reattività dell'app.",
				i: "Risorse",
				b: "Contatto",
				g: "GitHub",
				h: "Metodologia",
				d: "Contribuire",
				f: "i18n Benchmark — Progetto open-source. Costruito con Vue, Vite e Vue Router.",
				a: "i18n Benchmark",
				c: "contact@intlayer.org"
			},
			pt: {
				e: "Um aplicativo de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.",
				i: "Recursos",
				b: "Contato",
				g: "GitHub",
				h: "Metodologia",
				d: "Contribuindo",
				f: "i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e Vue Router.",
				a: "i18n Benchmark",
				c: "contact@intlayer.org"
			},
			zh: {
				e: "一个开源测试应用程序，用于衡量国际化库对捆绑包大小、加载时间和应用程序反应性的真实影响。",
				i: "资源",
				b: "联系我们",
				g: "GitHub",
				h: "方法论",
				d: "贡献",
				f: "i18n 基准测试——开源项目。使用 Vue、Vite 和 Vue Router 构建。",
				a: "i18n 基准测试",
				c: "contact@intlayer.org"
			},
			ja: {
				e: "バンドルサイズ、ロード時間、アプリの反応性に与える国際化ライブラリの実際の影響を測定するためのオープンソースのテストアプリケーション。",
				i: "リソース",
				b: "お問い合わせ",
				g: "GitHub",
				h: "方法論",
				d: "貢献",
				f: "i18n ベンチマーク — オープンソースプロジェクト。Vue、Vite、Vue Routerで構築されています。",
				a: "i18n ベンチマーク",
				c: "contact@intlayer.org"
			},
			ko: {
				e: "번들 크기, 로딩 시간 및 앱 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.",
				i: "리소스",
				b: "연락처",
				g: "GitHub",
				h: "방법론",
				d: "기여하기",
				f: "i18n 벤치마크 — 오픈 소스 프로젝트. Vue, Vite 및 Vue Router로 제작되었습니다.",
				a: "i18n 벤치마크",
				c: "contact@intlayer.org"
			},
			ru: {
				e: "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.",
				i: "Ресурсы",
				b: "Контакт",
				g: "GitHub",
				h: "Методология",
				d: "Участие в проекте",
				f: "i18n Benchmark — проект с открытым исходным кодом. Построен на Vue, Vite и Vue Router.",
				a: "i18n Бенчмарк",
				c: "contact@intlayer.org"
			}
		}
	}
}, tt = w({
	__name: "Footer",
	setup(e, { expose: t }) {
		t();
		let n = I(), r = _(() => n.params.locale || "en"), { e: i, i: a, b: o, g: s, h: c, d: l, f: u, a: d, c: f } = Z(et), p = {
			route: n,
			currentLocale: r,
			description: i,
			resources: a,
			contactLabel: o,
			github: s,
			methodology: c,
			contributing: l,
			footerText: u,
			appName: d,
			contactEmail: f,
			footerLinks: _(() => [
				{
					label: s,
					href: "https://github.com/intlayer-org/benchmark-i18n",
					isInternal: !1
				},
				{
					label: c,
					to: `/${r.value}/about`,
					isInternal: !0
				},
				{
					label: l,
					to: `/${r.value}/contact`,
					isInternal: !0
				}
			])
		};
		return Object.defineProperty(p, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), p;
	}
}), $ = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, nt = { class: "mt-20 border-t border-border bg-card" }, rt = { class: "container py-8" }, it = { class: "grid gap-8 md:grid-cols-3" }, at = { class: "mb-2 text-sm font-semibold text-foreground" }, ot = { class: "text-sm text-muted-foreground" }, st = { class: "mb-2 text-sm font-semibold text-foreground" }, ct = { class: "space-y-1" }, lt = ["href"], ut = { class: "mb-2 text-sm font-semibold text-foreground" }, dt = { class: "text-sm text-muted-foreground" }, ft = { class: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground" };
function pt(e, t, n, r, i, a) {
	let o = M("router-link");
	return k(), b("footer", nt, [x("div", rt, [x("div", it, [
		x("div", null, [x("h3", at, N(r.appName), 1), x("p", ot, N(r.description), 1)]),
		x("div", null, [x("h3", st, N(r.resources), 1), x("ul", ct, [(k(!0), b(g, null, j(r.footerLinks, (e) => (k(), b("li", { key: e.label }, [e.isInternal ? (k(), v(o, {
			key: 0,
			to: e.to,
			class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
		}, {
			default: F(() => [S(N(e.label), 1)]),
			_: 2
		}, 1032, ["to"])) : (k(), b("a", {
			key: 1,
			href: e.href,
			target: "_blank",
			rel: "noreferrer",
			class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
		}, N(e.label), 9, lt))]))), 128))])]),
		x("div", null, [x("h3", ut, N(r.contactLabel), 1), x("p", dt, N(r.contactEmail), 1)])
	]), x("div", ft, N(r.footerText), 1)])]);
}
var mt = $(tt, [["render", pt], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/Footer.vue"]]), ht = {
	key: "header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				h: "Home",
				i: "Methodology",
				j: "Mock Pages",
				l: "Products",
				k: "Pricing",
				n: "Team",
				b: "Blog",
				c: "Careers",
				e: "FAQ",
				d: "Contact",
				m: "Settings",
				a: "i18n Benchmark",
				f: "Go to GitHub",
				g: "Header"
			},
			fr: {
				h: "Accueil",
				i: "Méthodologie",
				j: "Pages fictives",
				l: "Produits",
				k: "Tarification",
				n: "Équipe",
				b: "Blog",
				c: "Carrières",
				e: "FAQ",
				d: "Contact",
				m: "Paramètres",
				a: "Benchmark i18n",
				f: "Aller sur GitHub",
				g: "En-tête"
			},
			es: {
				h: "Inicio",
				i: "Metodología",
				j: "Páginas de prueba",
				l: "Productos",
				k: "Precios",
				n: "Equipo",
				b: "Blog",
				c: "Carreras",
				e: "FAQ",
				d: "Contacto",
				m: "Ajustes",
				a: "i18n Benchmark",
				f: "Ir a GitHub",
				g: "Encabezado"
			},
			de: {
				h: "Home",
				i: "Methodik",
				j: "Testseiten",
				l: "Produkte",
				k: "Preise",
				n: "Team",
				b: "Blog",
				c: "Karriere",
				e: "FAQ",
				d: "Kontakt",
				m: "Einstellungen",
				a: "i18n Benchmark",
				f: "Zu GitHub",
				g: "Header"
			},
			it: {
				h: "Home",
				i: "Metodologia",
				j: "Pagine di prova",
				l: "Prodotti",
				k: "Prezzi",
				n: "Team",
				b: "Blog",
				c: "Carriere",
				e: "FAQ",
				d: "Contatti",
				m: "Impostazioni",
				a: "i18n Benchmark",
				f: "Vai su GitHub",
				g: "Intestazione"
			},
			pt: {
				h: "Início",
				i: "Metodologia",
				j: "Páginas de Teste",
				l: "Produtos",
				k: "Preços",
				n: "Equipe",
				b: "Blog",
				c: "Carreiras",
				e: "FAQ",
				d: "Contato",
				m: "Configurações",
				a: "i18n Benchmark",
				f: "Ir para o GitHub",
				g: "Cabeçalho"
			},
			zh: {
				h: "首页",
				i: "方法论",
				j: "模拟页面",
				l: "产品",
				k: "定价",
				n: "团队",
				b: "博客",
				c: "职业",
				e: "常见问题",
				d: "联系我们",
				m: "设置",
				a: "i18n 基准测试",
				f: "前往 GitHub",
				g: "页眉"
			},
			ja: {
				h: "ホーム",
				i: "方法論",
				j: "モックページ",
				l: "製品",
				k: "価格設定",
				n: "チーム",
				b: "ブログ",
				c: "採用情報",
				e: "よくある質問",
				d: "お問い合わせ",
				m: "設定",
				a: "i18n ベンチマーク",
				f: "GitHub へ",
				g: "ヘッダー"
			},
			ko: {
				h: "홈",
				i: "방법론",
				j: "모ック 페이지",
				l: "제품",
				k: "가격",
				n: "팀",
				b: "블로그",
				c: "채용",
				e: "자주 묻는 질문",
				d: "문의",
				m: "설정",
				a: "i18n 벤치마크",
				f: "GitHub으로 이동",
				g: "헤더"
			},
			ru: {
				h: "Главная",
				i: "Методология",
				j: "Мок-страницы",
				l: "Продукты",
				k: "Цены",
				n: "Команда",
				b: "Блог",
				c: "Вакансии",
				e: "FAQ",
				d: "Контакт",
				m: "Настройки",
				a: "i18n Бенчмарк",
				f: "Перейти на GitHub",
				g: "Заголовок"
			}
		}
	}
};
function gt(e) {
	re(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), O(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var _t = r.internationalization.locales;
r.internationalization.requiredLocales, r.internationalization.defaultLocale, r.editor;
var vt = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, yt = w({
	__name: "LocaleSwitcher",
	setup(e, { expose: t }) {
		t();
		let n = I(), r = se(), { setLocale: i } = Ze(), a = _(() => n.params.locale || "en"), o = (e) => {
			i(e);
			let t = n.path.replace(/^\/[^/]+/, `/${e}`);
			r.push({
				path: t,
				query: n.query,
				hash: n.hash
			});
		};
		P(a, (e) => {
			i(e);
		}, { immediate: !0 });
		let s = {
			route: n,
			router: r,
			setLocale: i,
			currentLocale: a,
			handleLocaleChange: o,
			get locales() {
				return _t;
			},
			get getLocaleName() {
				return vt;
			}
		};
		return Object.defineProperty(s, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), s;
	}
}), bt = { class: "flex items-center gap-2" }, xt = ["value"], St = ["value"];
function Ct(e, t, n, r, i, a) {
	return k(), b("div", bt, [x("select", {
		value: r.currentLocale,
		onChange: t[0] ||= (e) => r.handleLocaleChange(e.target.value),
		class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
	}, [(k(!0), b(g, null, j(r.locales, (e) => (k(), b("option", {
		key: e,
		value: e
	}, N(r.getLocaleName(e)), 9, St))), 128))], 40, xt)]);
}
var wt = $(yt, [["render", Ct], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/LocaleSwitcher.vue"]]), Tt = {
	key: "theme-toggle",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				d: "Theme: Auto",
				e: "Theme: Dark",
				f: "Theme: Light",
				a: "Theme mode: auto (system). Click to switch to light mode.",
				c: "Theme mode: light. Click to switch to dark mode.",
				b: "Theme mode: dark. Click to switch to auto mode."
			},
			fr: {
				d: "Thème : Auto",
				e: "Thème : Sombre",
				f: "Thème : Clair",
				a: "Mode de thème : auto (système). Cliquez pour passer au mode clair.",
				c: "Mode de thème : clair. Cliquez pour passer au mode sombre.",
				b: "Mode de thème : sombre. Cliquez pour passer au mode auto."
			},
			es: {
				d: "Tema: Automático",
				e: "Tema: Oscuro",
				f: "Tema: Claro",
				a: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
				c: "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
				b: "Modo de tema: oscuro. Haga clic para cambiar al modo automático."
			},
			de: {
				d: "Design: Auto",
				e: "Design: Dunkel",
				f: "Design: Hell",
				a: "Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.",
				c: "Design-Modus: Hell. Klicken Sie hier, um in den dunklen Modus zu wechseln.",
				b: "Design-Modus: Dunkel. Klicken Sie hier, um in den automatischen Modus zu wechseln."
			},
			it: {
				d: "Tema: Auto",
				e: "Tema: Scuro",
				f: "Tema: Chiaro",
				a: "Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.",
				c: "Modalità tema: chiara. Fai clic per passare alla modalità scura.",
				b: "Modalità tema: scura. Fai clic per passare alla modalità automatica."
			},
			pt: {
				d: "Tema: Automático",
				e: "Tema: Escuro",
				f: "Tema: Claro",
				a: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
				c: "Modo de tema: claro. Clique para mudar para o modo escuro.",
				b: "Modo de tema: escuro. Clique para mudar para o modo automático."
			},
			zh: {
				d: "主题：自动",
				e: "主题：深色",
				f: "主题：亮色",
				a: "主题模式：自动（系统）。点击切换到亮色模式。",
				c: "主题模式：浅色。点击切换到深色模式。",
				b: "主题模式：深色。点击切换到自动模式。"
			},
			ja: {
				d: "テーマ：自動",
				e: "テーマ：ダーク",
				f: "テーマ：ライト",
				a: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
				c: "テーマモード：ライト。クリックしてダークモードに切り替えます。",
				b: "テーマモード：ダーク。クリックして自動モードに切り替えます。"
			},
			ko: {
				d: "테마: 자동",
				e: "테마: 다크",
				f: "테마: 라이트",
				a: "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
				c: "테마 모드: 라이트. 다크 모드로 전환하려면 클릭하세요.",
				b: "테마 모드: 다크. 자동 모드로 전환하려면 클릭하세요."
			},
			ru: {
				d: "Тема: Авто",
				e: "Тема: Темная",
				f: "Тема: Светлая",
				a: "Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.",
				c: "Режим темы: светлый. Нажмите, чтобы перейти в темную тему.",
				b: "Режим темы: темный. Нажмите, чтобы перейти в автоматический режим."
			}
		}
	}
}, Et = w({
	__name: "ThemeToggle",
	setup(e, { expose: t }) {
		t();
		let { d: n, e: r, f: i, a, c: o, b: s } = Z(Tt), c = A("auto");
		function l() {
			if (typeof window > "u") return "auto";
			let e = window.localStorage.getItem("theme");
			return e === "light" || e === "dark" || e === "auto" ? e : "auto";
		}
		function u(e) {
			let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
			document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
		}
		O(() => {
			let e = l();
			c.value = e, u(e);
		});
		let d = null;
		P(c, (e) => {
			if (e === "auto") {
				let e = window.matchMedia("(prefers-color-scheme: dark)");
				d = () => u("auto"), e.addEventListener("change", d);
			} else d &&= (window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", d), null);
		}, { immediate: !0 }), ie(() => {
			d && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", d);
		});
		function f() {
			let e = c.value === "light" ? "dark" : c.value === "dark" ? "auto" : "light";
			c.value = e, u(e), window.localStorage.setItem("theme", e);
		}
		let p = {
			auto: n,
			dark: r,
			light: i,
			ariaLabelAuto: a,
			ariaLabelLight: o,
			ariaLabelDark: s,
			mode: c,
			getInitialMode: l,
			applyThemeMode: u,
			get mediaQueryListener() {
				return d;
			},
			set mediaQueryListener(e) {
				d = e;
			},
			toggleMode: f,
			getLabel: () => c.value === "auto" ? a.value : c.value === "light" ? o.value : s.value
		};
		return Object.defineProperty(p, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), p;
	}
}), Dt = ["aria-label", "title"];
function Ot(e, t, n, r, i, a) {
	return k(), b("button", {
		type: "button",
		onClick: r.toggleMode,
		"aria-label": r.getLabel(),
		title: r.getLabel(),
		class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
	}, N(r.mode === "auto" ? r.auto : r.mode === "dark" ? r.dark : r.light), 9, Dt);
}
var kt = $(Et, [["render", Ot], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/ThemeToggle.vue"]]), At = w({
	__name: "Header",
	setup(e, { expose: t }) {
		t(), gt("Header");
		let { h: n, i: r, j: i, l: a, k: o, n: s, b: c, c: l, e: u, d, m: f, a: p, f: m } = Z(ht), h = A(!1), g = I(), v = _(() => g.params.locale || "en"), y = {
			home: n,
			methodology: r,
			mockPagesLabel: i,
			products: a,
			pricing: o,
			team: s,
			blog: c,
			careers: l,
			faq: u,
			contact: d,
			settings: f,
			appName: p,
			goToGithub: m,
			isMockPagesOpen: h,
			route: g,
			currentLocale: v,
			mockPagesList: _(() => [
				{
					to: `/${v.value}/products`,
					label: a
				},
				{
					to: `/${v.value}/pricing`,
					label: o
				},
				{
					to: `/${v.value}/team`,
					label: s
				},
				{
					to: `/${v.value}/blog`,
					label: c
				},
				{
					to: `/${v.value}/careers`,
					label: l
				},
				{
					to: `/${v.value}/faq`,
					label: u
				},
				{
					to: `/${v.value}/contact`,
					label: d
				},
				{
					to: `/${v.value}/settings`,
					label: f
				}
			]),
			get ChevronDown() {
				return ce;
			},
			LocaleSwitcher: wt,
			ThemeToggle: kt
		};
		return Object.defineProperty(y, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), y;
	}
}), jt = { class: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg" }, Mt = { class: "container flex h-16 items-center justify-between" }, Nt = { class: "flex items-center gap-8" }, Pt = { class: "hidden items-center gap-6 text-sm font-medium md:flex" }, Ft = { class: "relative" }, It = { class: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1" }, Lt = { class: "flex items-center gap-4" }, Rt = {
	href: "https://github.com/intlayer-org/benchmark-i18n",
	target: "_blank",
	rel: "noreferrer",
	class: "text-muted-foreground transition hover:text-foreground"
}, zt = { class: "sr-only" };
function Bt(e, t, n, r, i, a) {
	let o = M("router-link");
	return k(), b("header", jt, [x("nav", Mt, [x("div", Nt, [C(o, {
		to: `/${r.currentLocale}`,
		class: "text-lg font-bold tracking-tight text-primary no-underline"
	}, {
		default: F(() => [S(N(r.appName), 1)]),
		_: 1
	}, 8, ["to"]), x("div", Pt, [
		C(o, {
			to: `/${r.currentLocale}`,
			class: "nav-link",
			"exact-active-class": "is-active"
		}, {
			default: F(() => [S(N(r.home), 1)]),
			_: 1
		}, 8, ["to"]),
		C(o, {
			to: `/${r.currentLocale}/about`,
			class: "nav-link",
			"active-class": "is-active"
		}, {
			default: F(() => [S(N(r.methodology), 1)]),
			_: 1
		}, 8, ["to"]),
		y(" Mock Pages Dropdown "),
		x("div", Ft, [x("button", {
			type: "button",
			class: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
			onMouseenter: t[0] ||= (e) => r.isMockPagesOpen = !0,
			onMouseleave: t[1] ||= (e) => r.isMockPagesOpen = !1,
			onClick: t[2] ||= (e) => r.isMockPagesOpen = !r.isMockPagesOpen
		}, [S(N(r.mockPagesLabel) + " ", 1), C(r.ChevronDown, {
			size: 14,
			class: ne(["transition-transform", r.isMockPagesOpen ? "rotate-180" : ""])
		}, null, 8, ["class"])], 32), r.isMockPagesOpen ? (k(), b("div", {
			key: 0,
			class: "absolute left-0 top-full pt-2 w-48",
			onMouseenter: t[4] ||= (e) => r.isMockPagesOpen = !0,
			onMouseleave: t[5] ||= (e) => r.isMockPagesOpen = !1
		}, [x("div", It, [(k(!0), b(g, null, j(r.mockPagesList, (e) => (k(), v(o, {
			key: e.to,
			to: e.to,
			class: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
			onClick: t[3] ||= (e) => r.isMockPagesOpen = !1
		}, {
			default: F(() => [S(N(e.label), 1)]),
			_: 2
		}, 1032, ["to"]))), 128))])], 32)) : y("v-if", !0)])
	])]), x("div", Lt, [
		x("a", Rt, [x("span", zt, N(r.goToGithub), 1), t[6] ||= x("svg", {
			viewBox: "0 0 16 16",
			"aria-hidden": "true",
			width: "20",
			height: "20"
		}, [x("path", {
			fill: "currentColor",
			d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
		})], -1)]),
		C(r.LocaleSwitcher),
		C(r.ThemeToggle)
	])])]);
}
var Vt = $(At, [["render", Bt], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/Header.vue"]]), Ht = w({
	__name: "Layout",
	setup(e, { expose: t }) {
		t();
		let n = I(), { setLocale: r } = Ze(), i = A(0);
		re(() => {
			i.value = typeof performance < "u" ? performance.now() : 0;
		}), O(() => {
			Qe(), $e("AppRoot", i.value);
		}), P(() => n.params.locale, (e) => {
			e && (document.documentElement.lang = e, r(e));
		}, { immediate: !0 });
		let a = {
			route: n,
			setLocale: r,
			renderStart: i,
			Footer: mt,
			Header: Vt
		};
		return Object.defineProperty(a, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), a;
	}
});
function Ut(e, t, n, r, i, a) {
	let o = M("router-view");
	return k(), b(g, null, [
		C(r.Header),
		C(o),
		C(r.Footer)
	], 64);
}
var Wt = $(Ht, [["render", Ut], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/Layout.vue"]]);
export { Wt as default };
import { b as e, n as t, t as n, x as r, y as i } from "./getContent-DrnKJV-E.js";
var a = (e, t) => e.every((e, n) => t[n] && t[n].key === e.key && t[n].type === e.type), o = (e, t) => {
	try {
		let n = new URL(e), r = new URL(t);
		if (n.protocol !== r.protocol || n.hostname !== r.hostname || n.port !== r.port) return !1;
		let i = n.pathname.replace(/\/$/, ""), a = r.pathname.replace(/\/$/, "");
		return !(i !== "" && a !== "" && i !== a);
	} catch (n) {
		return console.error("Invalid URL(s)", n, {
			url1: e,
			url2: t
		}), !1;
	}
}, s = (e) => {
	let t = new MouseEvent("mousedown", {
		bubbles: !0,
		cancelable: !0,
		view: window
	}), n = new MouseEvent("click", {
		bubbles: !0,
		cancelable: !0,
		view: window
	});
	Object.assign(n, { iframeData: e }), Object.assign(t, { iframeData: e }), window.dispatchEvent(n), window.dispatchEvent(t);
}, c = "__intlayer_editor_manager__", l = "__intlayer_editor_manager_events__", u = () => {
	if (typeof window > "u") return new EventTarget();
	let e = window;
	return e[l] || (e[l] = new EventTarget()), e[l];
}, d = () => typeof window > "u" ? null : window[c] ?? null, f = (e) => {
	if (typeof window < "u") {
		let t = window;
		t[c] = e;
	}
	u().dispatchEvent(new CustomEvent("change", { detail: e }));
}, p = (e) => {
	let t = u(), n = (t) => {
		e(t.detail);
	};
	return t.addEventListener("change", n), () => {
		t.removeEventListener("change", n);
	};
}, m = typeof HTMLElement < "u" ? HTMLElement : class {}, h = class extends m {
	_keyPathJson = "[]";
	_dictionaryKey = "";
	_editorEnabled = !1;
	_isInIframe = !1;
	_isSelected = !1;
	_editedValue = void 0;
	_renderState = null;
	_selector = null;
	_unsubManager = null;
	_unsubEnabled = null;
	_unsubFocused = null;
	_unsubEditedContent = null;
	static get observedAttributes() {
		return ["key-path", "dictionary-key"];
	}
	get keyPathJson() {
		return this._keyPathJson;
	}
	set keyPathJson(e) {
		this._keyPathJson = e;
		let t = d();
		t && this._updateEditedValue(t);
	}
	get dictionaryKey() {
		return this._dictionaryKey;
	}
	set dictionaryKey(e) {
		this._dictionaryKey = e;
		let t = d();
		t && this._updateEditedValue(t);
	}
	constructor() {
		super();
		let e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
		t.textContent = ":host { display: contents; }", e.appendChild(t);
	}
	attributeChangedCallback(e, t, n) {
		if (e === "key-path") {
			this._keyPathJson = n ?? "[]";
			let e = d();
			e && this._updateEditedValue(e);
		} else if (e === "dictionary-key") {
			this._dictionaryKey = n ?? "";
			let e = d();
			e && this._updateEditedValue(e);
		}
	}
	connectedCallback() {
		typeof window < "u" && (this._isInIframe = window.self !== window.top), this._subscribeToManager(), this._render();
	}
	disconnectedCallback() {
		this._teardown();
	}
	_teardown() {
		this._unsubManager?.(), this._unsubEnabled?.(), this._unsubFocused?.(), this._unsubEditedContent?.(), this._unsubManager = null, this._unsubEnabled = null, this._unsubFocused = null, this._unsubEditedContent = null;
	}
	_getRawKeyPath() {
		try {
			return JSON.parse(this._keyPathJson);
		} catch {
			return [];
		}
	}
	_getFilteredKeyPath() {
		return this._getRawKeyPath().filter((e) => e.type !== i);
	}
	_updateEditedValue(e) {
		let t = this._getFilteredKeyPath();
		if (!this._dictionaryKey || t.length === 0) {
			this._editedValue = void 0, this._render();
			return;
		}
		let n = this._getRawKeyPath(), r = n[n.length - 1]?.type;
		if (r === "markdown" || r === "html" || r === "insertion" || r === "file") {
			this._editedValue = void 0, this._render();
			return;
		}
		let a = e.getContentValue(this._dictionaryKey, t);
		if (typeof a == "object" && a && a.nodeType === "translation") {
			let t = e.currentLocale.value;
			a = t ? a[i][t] : void 0;
		}
		this._editedValue = a, this._render();
	}
	_updateIsSelected(e) {
		if (!e) {
			this._isSelected = !1, this._updateSelectorAttr();
			return;
		}
		let t = this._getFilteredKeyPath();
		this._isSelected = e.dictionaryKey === this._dictionaryKey && (e.keyPath?.length ?? 0) > 0 && a(e.keyPath ?? [], t), this._updateSelectorAttr();
	}
	_updateSelectorAttr() {
		this._selector && (this._isSelected ? this._selector.setAttribute("is-selecting", "") : this._selector.removeAttribute("is-selecting"));
	}
	_subscribeToManager() {
		let e = d();
		e && this._setupManagerSubscriptions(e), this._unsubManager = p((e) => {
			this._unsubEnabled?.(), this._unsubFocused?.(), this._unsubEditedContent?.(), this._unsubEnabled = null, this._unsubFocused = null, this._unsubEditedContent = null, e ? this._setupManagerSubscriptions(e) : (this._editorEnabled = !1, this._isSelected = !1, this._editedValue = void 0, this._render());
		});
	}
	_setupManagerSubscriptions(e) {
		this._editorEnabled = e.editorEnabled.value ?? !1, this._updateIsSelected(e.focusedContent.value), this._updateEditedValue(e);
		let t = (e) => {
			this._editorEnabled = e.detail, this._render();
		}, n = (e) => {
			this._updateIsSelected(e.detail);
		}, r = () => {
			this._updateEditedValue(e);
		};
		e.editorEnabled.addEventListener("change", t), e.focusedContent.addEventListener("change", n), e.editedContent.addEventListener("change", r), this._unsubEnabled = () => e.editorEnabled.removeEventListener("change", t), this._unsubFocused = () => e.focusedContent.removeEventListener("change", n), this._unsubEditedContent = () => e.editedContent.removeEventListener("change", r);
	}
	_handlePress(e) {
		e.stopPropagation();
		let t = d();
		t && t.focusedContent.set({
			dictionaryKey: this._dictionaryKey,
			keyPath: this._getFilteredKeyPath()
		});
	}
	_handleHover(e) {
		e.stopPropagation(), d()?.messenger.send("INTLAYER_HOVERED_CONTENT_CHANGED/post", {
			dictionaryKey: this._dictionaryKey,
			keyPath: this._getFilteredKeyPath()
		});
	}
	_handleUnhover(e) {
		e.stopPropagation(), d()?.messenger.send("INTLAYER_HOVERED_CONTENT_CHANGED/post", null);
	}
	_render() {
		let e = this._isInIframe && this._editorEnabled, t = this._editedValue, n = e ? typeof t == "string" || typeof t == "number" || typeof t == "boolean" ? "wrapped-text" : "wrapped-slot" : "simple";
		if (this._renderState !== n) {
			this._rebuildContent(n);
			return;
		}
		n !== "simple" && this._selector && (this._updateSelectorAttr(), n === "wrapped-text" && this._selector.firstChild?.nodeType === Node.TEXT_NODE && (this._selector.firstChild.data = String(t)));
	}
	_rebuildContent(e) {
		let t = this.shadowRoot;
		for (; t.childNodes.length > 1;) t.removeChild(t.lastChild);
		if (this._selector = null, e === "simple") t.appendChild(document.createElement("slot"));
		else {
			let n = document.createElement("intlayer-content-selector");
			this._selector = n, this._isSelected && n.setAttribute("is-selecting", ""), n.addEventListener("intlayer:press", (e) => this._handlePress(e)), n.addEventListener("intlayer:hover", (e) => this._handleHover(e)), n.addEventListener("intlayer:unhover", (e) => this._handleUnhover(e)), e === "wrapped-text" ? n.appendChild(document.createTextNode(String(this._editedValue))) : n.appendChild(document.createElement("slot")), t.appendChild(n);
		}
		this._renderState = e;
	}
}, g = () => {
	typeof customElements > "u" || customElements.get("intlayer-content-selector-wrapper") || customElements.define("intlayer-content-selector-wrapper", h);
}, _ = typeof HTMLElement < "u" ? HTMLElement : class {}, v = class extends _ {
	_dictionaryKey = "";
	_keyPathJson = "[]";
	_locale = "";
	_editedText = null;
	_unsubManager = null;
	_unsubEditedContent = null;
	_selectorWrapper;
	_slot;
	static get observedAttributes() {
		return [
			"dictionary-key",
			"key-path",
			"locale"
		];
	}
	get dictionaryKey() {
		return this._dictionaryKey;
	}
	set dictionaryKey(e) {
		this._dictionaryKey = e, this._selectorWrapper.setAttribute("dictionary-key", e);
	}
	get keyPathJson() {
		return this._keyPathJson;
	}
	set keyPathJson(e) {
		this._keyPathJson = e, this._selectorWrapper.setAttribute("key-path", e);
	}
	get locale() {
		return this._locale;
	}
	set locale(e) {
		this._locale = e;
	}
	constructor() {
		super();
		let e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
		t.textContent = ":host { display: contents; }", e.appendChild(t), this._selectorWrapper = document.createElement("intlayer-content-selector-wrapper"), this._slot = document.createElement("slot"), this._selectorWrapper.appendChild(this._slot), e.appendChild(this._selectorWrapper);
	}
	attributeChangedCallback(e, t, n) {
		let r = n ?? "";
		e === "dictionary-key" ? (this._dictionaryKey = r, this._selectorWrapper.setAttribute("dictionary-key", r)) : e === "key-path" ? (this._keyPathJson = r || "[]", this._selectorWrapper.setAttribute("key-path", this._keyPathJson)) : e === "locale" && (this._locale = r);
	}
	connectedCallback() {
		this._subscribeToManager();
	}
	disconnectedCallback() {
		this._teardown();
	}
	_teardown() {
		this._unsubManager?.(), this._unsubEditedContent?.(), this._unsubManager = null, this._unsubEditedContent = null;
	}
	_getKeyPath() {
		try {
			return JSON.parse(this._keyPathJson);
		} catch {
			return [];
		}
	}
	_render() {
		for (; this._selectorWrapper.firstChild;) this._selectorWrapper.removeChild(this._selectorWrapper.firstChild);
		this._editedText === null ? this._selectorWrapper.appendChild(this._slot) : this._selectorWrapper.appendChild(document.createTextNode(this._editedText));
	}
	_resolveEditedText(e) {
		let r = this._getKeyPath(), i = e.getContentValue(this._dictionaryKey, r);
		if (i == null) {
			this._editedText = null, this._render();
			return;
		}
		if (typeof i == "string" || typeof i == "number") {
			this._editedText = String(i), this._render();
			return;
		}
		if (typeof i == "object") {
			let e = this._locale || void 0, a = t(i, {
				locale: e,
				dictionaryKey: this._dictionaryKey,
				keyPath: r
			}, n(e));
			typeof a == "string" || typeof a == "number" ? this._editedText = String(a) : (console.error(`[intlayer-edited-content] Incorrect edited content format. Expected string. Value: ${JSON.stringify(a)}`), this._editedText = null), this._render();
			return;
		}
		this._editedText = null, this._render();
	}
	_setupManagerSubscriptions(e) {
		this._resolveEditedText(e);
		let t = () => this._resolveEditedText(e);
		e.editedContent.addEventListener("change", t), this._unsubEditedContent = () => e.editedContent.removeEventListener("change", t);
	}
	_subscribeToManager() {
		let e = d();
		e && this._setupManagerSubscriptions(e), this._unsubManager = p((e) => {
			this._unsubEditedContent?.(), this._unsubEditedContent = null, e ? this._setupManagerSubscriptions(e) : (this._editedText = null, this._render());
		});
	}
}, y = () => {
	typeof customElements > "u" || customElements.get("intlayer-edited-content") || customElements.define("intlayer-edited-content", v);
}, b = () => Math.random().toString(36).slice(2), x = class {
	senderId;
	_config;
	_subscribers = /* @__PURE__ */ new Map();
	_windowHandler = null;
	_seenMessageIds = /* @__PURE__ */ new Set();
	constructor(e) {
		this._config = e, this.senderId = b();
	}
	start() {
		typeof window > "u" || this._windowHandler || (this._windowHandler = (e) => {
			this._handleMessage(e);
		}, window.addEventListener("message", this._windowHandler));
	}
	stop() {
		this._windowHandler &&= (window.removeEventListener("message", this._windowHandler), null);
	}
	send(e, t) {
		let n = {
			type: e,
			data: t,
			senderId: this.senderId,
			messageId: b()
		};
		for (let e of this._config.allowedOrigins) e && this._config.postMessageFn(n, e);
	}
	subscribe(e, t) {
		return this._subscribers.has(e) || this._subscribers.set(e, /* @__PURE__ */ new Set()), this._subscribers.get(e).add(t), () => {
			this._subscribers.get(e)?.delete(t);
		};
	}
	_handleMessage(e) {
		let t = e.data;
		if (!t || typeof t != "object") return;
		let { type: n, data: r, senderId: i, messageId: a } = t;
		if (!n || typeof n != "string" || i === this.senderId) return;
		if (a) {
			if (this._seenMessageIds.has(a)) return;
			this._seenMessageIds.add(a), this._seenMessageIds.size > 200 && this._seenMessageIds.clear();
		}
		let { allowedOrigins: s } = this._config;
		if (!(!s || s.length === 0 || s.includes("*") || s.filter((e) => !!e && e !== "").some((t) => o(t, e.origin)))) return;
		let c = this._subscribers.get(n);
		if (c) for (let e of c) e(r, i);
	}
}, S = class extends EventTarget {
	_value;
	_key;
	_messenger;
	_options;
	_unsubscribers = [];
	constructor(e, t, n = {}) {
		super(), this._key = e, this._messenger = t, this._options = {
			emit: n.emit ?? !0,
			receive: n.receive ?? !0
		}, n.initialValue !== void 0 && (this._value = n.initialValue);
	}
	get value() {
		return this._value;
	}
	set(e) {
		this._value = e, this.dispatchEvent(new CustomEvent("change", { detail: e })), this._options.emit && this._messenger.send(`${this._key}/post`, e);
	}
	start() {
		if (this._options.receive) {
			let e = this._messenger.subscribe(`${this._key}/post`, (e) => {
				this._value = e, this.dispatchEvent(new CustomEvent("change", { detail: e }));
			});
			this._unsubscribers.push(e);
		}
		if (this._options.emit) {
			let e = this._messenger.subscribe(`${this._key}/get`, (e, t) => {
				t !== this._messenger.senderId && this._value !== void 0 && this._messenger.send(`${this._key}/post`, this._value);
			});
			this._unsubscribers.push(e);
		}
		this._options.receive && this._value === void 0 && this._messenger.send(`${this._key}/get`);
	}
	stop() {
		for (let e of this._unsubscribers) e();
		this._unsubscribers.length = 0;
	}
	postCurrentValue() {
		this._value !== void 0 && this._messenger.send(`${this._key}/post`, this._value);
	}
}, C = class {
	_messenger;
	_mousedownHandler = null;
	_unsubscribeMerge = null;
	constructor(e) {
		this._messenger = e;
	}
	startInterceptor() {
		typeof window > "u" || (this._mousedownHandler = () => {
			this._messenger.send("INTLAYER_IFRAME_CLICKED");
		}, window.addEventListener("mousedown", this._mousedownHandler));
	}
	startMerger() {
		this._unsubscribeMerge = this._messenger.subscribe("INTLAYER_IFRAME_CLICKED", s);
	}
	stopInterceptor() {
		this._mousedownHandler &&= (window.removeEventListener("mousedown", this._mousedownHandler), null);
	}
	stopMerger() {
		this._unsubscribeMerge?.(), this._unsubscribeMerge = null;
	}
}, w = class {
	_messenger;
	_originalPushState = null;
	_originalReplaceState = null;
	_listeners = [];
	constructor(e) {
		this._messenger = e;
	}
	start() {
		if (typeof window > "u") return;
		let e = () => {
			this._messenger.send("INTLAYER_URL_CHANGE/post", window.location.pathname);
		};
		this._originalPushState = history.pushState, this._originalReplaceState = history.replaceState;
		let t = (e) => function(...t) {
			e.apply(this, t), window.dispatchEvent(new Event("locationchange"));
		};
		history.pushState = t(this._originalPushState), history.replaceState = t(this._originalReplaceState);
		for (let t of [
			"locationchange",
			"popstate",
			"hashchange",
			"load"
		]) {
			let n = e;
			window.addEventListener(t, n), this._listeners.push([t, n]);
		}
		e();
	}
	stop() {
		if (!(typeof window > "u")) {
			for (let [e, t] of this._listeners) window.removeEventListener(e, t);
			this._listeners = [], this._originalPushState &&= (history.pushState = this._originalPushState, null), this._originalReplaceState &&= (history.replaceState = this._originalReplaceState, null);
		}
	}
}, T = (e, t, n) => {
	let r = e, i = null, a = [];
	if (t.length === 0) return n;
	try {
		for (let e = 0; e < t.length; e++) {
			let o = t[e];
			if (i = r, (o.type === "object" || o.type === "array") && (a = [o.key], (!r[o.key] || typeof r[o.key] != "object") && (r[o.key] = {}), r = r[o.key]), (o.type === "translation" || o.type === "enumeration") && (a = [o.type, o.key], (!r[o.type] || typeof r[o.type] != "object") && (r[o.type] = {}), (!r[o.type][o.key] || typeof r[o.type][o.key] != "object") && (r[o.type][o.key] = {}), r = r[o.type][o.key]), (o.type === "enumeration" || o.type === "condition") && o.type !== "enumeration" && (a = [o.type, o.key], r = r[o.type][o.key]), (o.type === "markdown" || o.type === "html" || o.type === "insertion") && (a = [o.type], (!r[o.type] || typeof r[o.type] != "object") && (r[o.type] = ""), r = r[o.type]), o.type === "file" && (a = ["content"], r = r.content), e === t.length - 1 && i && a.length > 0) {
				let e = i;
				for (let t of a.slice(0, -1)) e = e[t];
				let t = a[a.length - 1];
				if (n === void 0) if (Array.isArray(e)) {
					let n = Number(t);
					!Number.isNaN(n) && n >= 0 && n < e.length && e.splice(n, 1);
				} else delete e[t];
				else e[t] = n;
			}
		}
		return e;
	} catch (r) {
		return console.error("Cannot edit dictionary by key path", {
			dictionaryContent: e,
			keyPath: t,
			newValue: n
		}, r), e;
	}
}, E = (e, t, n) => {
	let r = structuredClone(e);
	for (let e of t) n && r?.nodeType === "translation" && (r = r?.[i]?.[n]), (e.type === "object" || e.type === "array") && (r = r?.[e.key]), (e.type === "translation" || e.type === "condition" || e.type === "enumeration") && (r = r?.[e.type]?.[e.key]), (e.type === "markdown" || e.type === "html" || e.type === "insertion" || e.type === "file") && (r = r?.[e.type]);
	return r;
}, D = (e, t, n) => {
	let r = e, i = null, a = null;
	for (let e of n) i = r, (e.type === "object" || e.type === "array") && (a = e.key, r = r[e.key]), (e.type === "translation" || e.type === "enumeration" || e.type === "condition") && (a = e.type, r = r[e.type][e.key]), (e.type === "markdown" || e.type === "reactNode" || e.type === "html" || e.type === "insertion" || e.type === "file") && (a = e.type, r = r[e.type]);
	if (i && a !== null) if (Array.isArray(i)) i[a] = r;
	else {
		let e = {};
		for (let n of Object.keys(i)) n === a && t !== void 0 ? e[t] = r : e[n] = i[n];
		Object.keys(i).forEach((e) => {
			delete i[e];
		}), Object.assign(i, e);
	}
	return e;
}, O = class {
	messenger;
	editorEnabled;
	focusedContent;
	localeDictionaries;
	editedContent;
	configuration;
	currentLocale;
	_urlManager;
	_iframeInterceptor;
	_mode;
	_configuration;
	_unsubAreYouThere = null;
	_unsubActivate = null;
	_unsubClientReady = null;
	constructor(e) {
		this._mode = e.mode, this._configuration = e.configuration, this.messenger = new x(e.messenger), this.editorEnabled = new S("INTLAYER_EDITOR_ENABLED", this.messenger, {
			emit: !1,
			receive: !0,
			initialValue: !1
		}), this.focusedContent = new S("INTLAYER_FOCUSED_CONTENT_CHANGED", this.messenger, {
			emit: !0,
			receive: !0,
			initialValue: null
		}), this.localeDictionaries = new S("INTLAYER_LOCALE_DICTIONARIES_CHANGED", this.messenger), this.editedContent = new S("INTLAYER_EDITED_CONTENT_CHANGED", this.messenger), this.configuration = new S("INTLAYER_CONFIGURATION", this.messenger, {
			emit: !0,
			receive: !1,
			...e.configuration ? { initialValue: e.configuration } : {}
		}), this.currentLocale = new S("INTLAYER_CURRENT_LOCALE", this.messenger, {
			emit: e.mode === "client",
			receive: e.mode === "editor"
		}), this._urlManager = new w(this.messenger), this._iframeInterceptor = new C(this.messenger);
	}
	start() {
		this.messenger.start(), this.editorEnabled.start(), this.focusedContent.start(), this.localeDictionaries.start(), this.editedContent.start(), this.configuration.start(), this.currentLocale.start(), this._mode === "client" ? (this._urlManager.start(), this._iframeInterceptor.startInterceptor(), this._loadDictionaries(), this.messenger.send("INTLAYER_EDITED_CONTENT_CHANGED/get"), this._configuration?.editor?.enabled !== !1 && this._setupActivationHandshake()) : (this._iframeInterceptor.startMerger(), this._setupEditorHandshake());
	}
	stop() {
		this._unsubAreYouThere?.(), this._unsubActivate?.(), this._unsubClientReady?.(), this._unsubAreYouThere = null, this._unsubActivate = null, this._unsubClientReady = null, this.messenger.stop(), this.editorEnabled.stop(), this.focusedContent.stop(), this.localeDictionaries.stop(), this.editedContent.stop(), this.configuration.stop(), this.currentLocale.stop(), this._urlManager.stop(), this._iframeInterceptor.stopInterceptor(), this._iframeInterceptor.stopMerger();
	}
	pingClient() {
		this._mode === "editor" && this.messenger.send("INTLAYER_ARE_YOU_THERE");
	}
	setFocusedContentKeyPath(e) {
		let t = e.filter((e) => e.type !== i), n = this.focusedContent.value;
		n && this.focusedContent.set({
			...n,
			keyPath: t
		});
	}
	setLocaleDictionary(e) {
		if (!e.localId) return;
		let t = this.localeDictionaries.value ?? {};
		this.localeDictionaries.set({
			...t,
			[e.localId]: e
		});
	}
	setEditedDictionary(e) {
		if (!e.localId) {
			console.error("setEditedDictionary: missing localId", e);
			return;
		}
		let t = this.editedContent.value ?? {};
		this.editedContent.set({
			...t,
			[e.localId]: e
		});
	}
	setEditedContent(e, t) {
		let n = this.editedContent.value ?? {};
		this.editedContent.set({
			...n,
			[e]: {
				...n[e],
				content: t
			}
		});
	}
	addContent(e, t, n = [], r = !0) {
		let i = this.editedContent.value ?? {}, a = (this.localeDictionaries.value ?? {})[e]?.content, o = structuredClone(i[e]?.content ?? a), s = n;
		if (!r) {
			let e = 0, t = n.slice(0, -1), r = n[n.length - 1], i = r.key;
			for (; E(o, s) !== void 0;) e++, i = e === 0 ? r.key : `${r.key} (${e})`, s = [...t, {
				...r,
				key: i
			}];
		}
		let c = T(o, s, t);
		this.editedContent.set({
			...i,
			[e]: {
				...i[e],
				content: c
			}
		});
	}
	renameContent(e, t, n = []) {
		let r = this.editedContent.value ?? {}, i = (this.localeDictionaries.value ?? {})[e]?.content, a = D(structuredClone(r[e]?.content ?? i), t, n);
		this.editedContent.set({
			...r,
			[e]: {
				...r[e],
				content: a
			}
		});
	}
	removeContent(e, t) {
		let n = this.editedContent.value ?? {}, r = (this.localeDictionaries.value ?? {})[e]?.content, i = T(structuredClone(n[e]?.content ?? r), t, E(r, t));
		this.editedContent.set({
			...n,
			[e]: {
				...n[e],
				content: i
			}
		});
	}
	restoreContent(e) {
		let t = { ...this.editedContent.value ?? {} };
		delete t[e], this.editedContent.set(t);
	}
	clearContent(e) {
		let t = { ...this.editedContent.value ?? {} };
		delete t[e], this.editedContent.set(t);
	}
	clearAllContent() {
		this.editedContent.set({});
	}
	getContentValue(e, t) {
		let n = this.editedContent.value;
		if (!n) return;
		let r = t.filter((e) => e.type !== i), a = this.localeDictionaries.value;
		if (e.includes(":local:") || e.includes(":remote:")) return a && !(e in a) ? void 0 : E(n[e]?.content ?? {}, r, this.currentLocale.value);
		let o = Object.keys(n).filter((t) => t.startsWith(`${e}:`) && (!a || t in a));
		for (let e of o) {
			let t = E(n[e]?.content ?? {}, r, this.currentLocale.value);
			if (t) return t;
		}
	}
	_setupEditorHandshake() {
		this._unsubClientReady = this.messenger.subscribe("INTLAYER_CLIENT_READY", () => {
			this.editorEnabled.set(!0), this.messenger.send("INTLAYER_EDITOR_ACTIVATE");
		}), this.messenger.send("INTLAYER_ARE_YOU_THERE");
	}
	_setupActivationHandshake() {
		this.messenger.send("INTLAYER_CLIENT_READY"), this._unsubAreYouThere = this.messenger.subscribe("INTLAYER_ARE_YOU_THERE", () => {
			this.messenger.send("INTLAYER_CLIENT_READY");
		}), this._unsubActivate = this.messenger.subscribe("INTLAYER_EDITOR_ACTIVATE", () => {
			this.editorEnabled.set(!0), this._broadcastData();
		});
	}
	_broadcastData() {
		let e = this.configuration.value;
		e && this.messenger.send("INTLAYER_CONFIGURATION/post", e);
		let t = this.currentLocale.value;
		t && this.messenger.send("INTLAYER_CURRENT_LOCALE/post", t);
		let n = this.localeDictionaries.value;
		n && this.messenger.send("INTLAYER_LOCALE_DICTIONARIES_CHANGED/post", n);
	}
	async _loadDictionaries() {
		try {
			let e = (await import("./unmerged_dictionaries-DJdbKeYc.js")).getUnmergedDictionaries(), t = Object.fromEntries(Object.values(e).flat().map((e) => [e.localId, e]));
			this.localeDictionaries.set(t), this.editorEnabled.value && this._broadcastData();
		} catch (e) {
			console.warn("[intlayer] Failed to load unmerged dictionaries:", e);
		}
	}
}, k = typeof HTMLElement < "u" ? HTMLElement : class {}, A = class extends k {
	_configuration = void 0;
	_locale = void 0;
	_initialized = !1;
	_unsubManager = null;
	static get observedAttributes() {
		return ["locale"];
	}
	get configuration() {
		return this._configuration;
	}
	set configuration(e) {
		this._configuration = e, this._initialized || this._init();
	}
	get locale() {
		return this._locale;
	}
	set locale(e) {
		this._locale = e, e && this._initialized && this._syncLocale(e);
	}
	attributeChangedCallback(e, t, n) {
		e === "locale" && n !== null && (this._locale = n, this._initialized && this._syncLocale(n));
	}
	connectedCallback() {
		this._init();
	}
	disconnectedCallback() {
		this._unsubManager?.(), this._unsubManager = null, this._initialized &&= (B(), !1);
	}
	_init() {
		this._initialized || (z(), this._initialized = !0, this._locale && this._syncLocale(this._locale));
	}
	_syncLocale(e) {
		let t = d();
		t ? t.currentLocale.set(e) : (this._unsubManager?.(), this._unsubManager = p((t) => {
			t && (this._unsubManager?.(), this._unsubManager = null, t.currentLocale.set(e));
		}));
	}
}, j = () => {
	typeof customElements > "u" || customElements.get("intlayer-editor") || customElements.define("intlayer-editor", A);
}, M = 250, N = "\n  :host {\n    display: contents;\n  }\n\n  .wrapper {\n    display: inline-block;\n    cursor: pointer;\n    user-select: none;\n    border-radius: 0.375rem;\n    outline-width: 2px;\n    outline-offset: 4px;\n    outline-style: solid;\n    outline-color: transparent;\n    transition: all 100ms 50ms ease-in-out;\n  }\n\n  .wrapper[data-active] {\n    outline-color: inherit;\n  }\n", P = typeof HTMLElement < "u" ? HTMLElement : class {}, F = class extends P {
	_isSelecting = !1;
	_pressDuration = M;
	_isHovered = !1;
	_isSelectingState = !1;
	_wrapper;
	_pressTimer = null;
	_clickOutsideHandler = null;
	static get observedAttributes() {
		return ["is-selecting", "press-duration"];
	}
	get isSelecting() {
		return this._isSelecting;
	}
	set isSelecting(e) {
		this._isSelecting = e, this._updateActiveState();
	}
	get pressDuration() {
		return this._pressDuration;
	}
	set pressDuration(e) {
		this._pressDuration = e;
	}
	constructor() {
		super();
		let e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
		t.textContent = N, e.appendChild(t);
		let n = document.createElement("span");
		n.className = "wrapper", n.setAttribute("role", "button"), n.setAttribute("tabindex", "0"), n.appendChild(document.createElement("slot")), e.appendChild(n), this._wrapper = n, n.addEventListener("mousedown", () => this._handleMouseDown()), n.addEventListener("mouseup", () => this._handleMouseUpOrLeave()), n.addEventListener("mouseleave", () => this._handleMouseUpOrLeave()), n.addEventListener("mouseenter", () => this._handleMouseEnter()), n.addEventListener("click", (e) => this._handleClick(e)), n.addEventListener("touchstart", () => this._handleMouseDown()), n.addEventListener("touchend", () => this._handleMouseUpOrLeave()), n.addEventListener("touchcancel", () => this._handleMouseUpOrLeave()), n.addEventListener("blur", () => this._handleBlur());
	}
	attributeChangedCallback(e, t, n) {
		e === "is-selecting" ? (this._isSelecting = n !== null, this._updateActiveState()) : e === "press-duration" && (this._pressDuration = n === null ? M : parseInt(n, 10));
	}
	connectedCallback() {
		this._clickOutsideHandler = (e) => {
			e.composedPath().includes(this) || (this._isSelectingState = !1, this._dispatch("intlayer:click-outside"), this._updateActiveState());
		}, document.addEventListener("mousedown", this._clickOutsideHandler);
	}
	disconnectedCallback() {
		this._clickOutsideHandler &&= (document.removeEventListener("mousedown", this._clickOutsideHandler), null), this._clearPressTimer();
	}
	_updateActiveState() {
		this._isSelecting || this._isSelectingState || this._isHovered ? this._wrapper.setAttribute("data-active", "") : this._wrapper.removeAttribute("data-active");
	}
	_clearPressTimer() {
		this._pressTimer !== null && (clearTimeout(this._pressTimer), this._pressTimer = null);
	}
	_dispatch(e) {
		this.dispatchEvent(new CustomEvent(e, {
			bubbles: !0,
			composed: !0
		}));
	}
	_handleMouseDown() {
		this._clearPressTimer(), this._pressTimer = setTimeout(() => {
			this._isSelectingState = !0, this._updateActiveState(), this._dispatch("intlayer:press");
		}, this._pressDuration);
	}
	_handleMouseEnter() {
		this._isHovered = !0, this._updateActiveState(), this._dispatch("intlayer:hover");
	}
	_handleMouseUpOrLeave() {
		this._isHovered && (this._isHovered = !1, this._dispatch("intlayer:unhover")), this._clearPressTimer(), this._updateActiveState();
	}
	_handleClick(e) {
		(this._isSelecting || this._isSelectingState) && (e.preventDefault(), e.stopPropagation());
	}
	_handleBlur() {
		this._isSelectingState = !1, this._updateActiveState();
	}
}, I = () => {
	typeof customElements > "u" || (customElements.get("intlayer-content-selector") || customElements.define("intlayer-content-selector", F), g(), y(), j());
}, L = () => ({
	allowedOrigins: [r?.editorURL, r?.cmsURL].filter(Boolean),
	postMessageFn: (e, t) => {
		typeof window > "u" || window.self !== window.top && window.parent?.postMessage(e, t);
	}
}), R = 0, z = () => {
	R++;
	let t = d();
	if (t) return t;
	let n = new O({
		mode: "client",
		messenger: L(),
		configuration: e
	});
	return f(n), I(), n.start(), n;
}, B = () => {
	R = Math.max(0, R - 1), !(R > 0) && (d()?.stop(), f(null));
};
export { z as initEditorClient, B as stopEditorClient };
var e = {
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
}, t = {
	mode: "prefix-no-default",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, n = {
	editorURL: "http://localhost:8000",
	cmsURL: "https://app.intlayer.org",
	backendURL: "https://back.intlayer.org",
	port: 8e3,
	enabled: !1,
	dictionaryPriorityStrategy: "local_first",
	liveSync: !0,
	liveSyncPort: 4e3,
	liveSyncURL: "http://localhost:4000"
}, r = {
	internationalization: e,
	routing: t,
	editor: n,
	log: {
		mode: "default",
		prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
	},
	system: {
		baseDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app",
		moduleAugmentationDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/types",
		unmergedDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/unmerged_dictionary",
		remoteDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/remote_dictionary",
		dictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/dictionary",
		dynamicDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/dynamic_dictionary",
		fetchDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/fetch_dictionary",
		typesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/types",
		mainDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/main",
		configDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/config",
		cacheDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/cache",
		tempDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/tmp"
	},
	content: {
		fileExtensions: [
			".content.ts",
			".content.js",
			".content.cjs",
			".content.mjs",
			".content.json",
			".content.json5",
			".content.jsonc",
			".content.tsx",
			".content.jsx"
		],
		contentDir: ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app"],
		codeDir: ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app"],
		excludedPath: [
			"**/node_modulesdistbuild.intlayer.next.nuxt.expo.vercel.turbo.tanstack*.{tsx,ts,js,mjs,cjs,jsx,vue,svelte,astro}",
			"!**/node_modulesdistbuild.intlayer.next.nuxt.expo.vercel.turbo.tanstack*.config.*",
			"!***.spec.*",
			"!***.d.ts",
			"!***.map"
		],
		outputFormat: ["esm", "cjs"],
		cache: !0,
		checkTypes: !1
	},
	ai,
	dictionary,
	build,
	compiler: {
		enabled: !0,
		dictionaryKeyPrefix: "",
		noMetadata: !1,
		saveComponents: !1
	}
}, i = "translation", a = "enumeration", o = "condition", s = "insertion", c = "file", l = "object", u = "array", d = "reactNode", f = "markdown", p = "html", m = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => m(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => m(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: u,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) Object.defineProperty(n, r, {
		enumerable: !0,
		configurable: !0,
		get: function() {
			let n = {
				...t,
				children: e[r],
				keyPath: [...t.keyPath, {
					type: l,
					key: r
				}]
			}, i = m(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, h = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, g = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (h(e) && h(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : g(e[r], t[r]));
		return n;
	}
	return e;
}, _ = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => g(e, t));
}, v = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, b = (e, t) => v ? y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, a) => {
		let o = n.translation ?? {}, s = {};
		for (let e in o) {
			let t = {
				...r,
				children: o[e],
				keyPath: [...r.keyPath, {
					type: i,
					key: e
				}]
			};
			s[e] = a(o[e], t);
		}
		return _(s, e, t);
	}
}, x = y, S = y, C = y, w = y, T = (e) => y, E = y, D = (t, n = !0) => [
	b(t ?? e.defaultLocale, n ? e.defaultLocale : void 0),
	x,
	S,
	C,
	T(t ?? e.defaultLocale),
	E,
	w
], O = (e, t, n = []) => m(e, {
	...t,
	plugins: n
});
export { t as C, e as S, l as _, y as a, r as b, T as c, o as d, a as f, f as g, s as h, x as i, b as l, p as m, O as n, E as o, c as p, S as r, w as s, D as t, u, d as v, n as x, i as y };
var e = {}, t = () => e;
export { t as getUnmergedDictionaries };
