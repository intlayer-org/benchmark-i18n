import { S as e, a as t, c as n, g as r, h as i, i as a, l as o, m as s, n as c, o as l, r as u, s as d, t as f, x as p } from "./getContent-okEgz1Xg.js";
import { Fragment as m, computed as h, createElementBlock as g, createElementVNode as _, defineComponent as v, getCurrentInstance as y, h as b, inject as x, isRef as ee, markRaw as S, onBeforeMount as C, onMounted as te, openBlock as w, ref as T, renderList as ne, shallowRef as re, toDisplayString as E, toValue as D, unref as O, watch as k } from "vue";
var ie = {
	key: "results-table",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				title: "Sample Results",
				columns: {
					library: "Library",
					bundleSize: "Bundle Size",
					lookupTime: "Lookup Time",
					lazyLoading: "Lazy Loading"
				},
				yes: "Yes",
				manual: "Manual"
			},
			fr: {
				title: "Exemples de résultats",
				columns: {
					library: "Bibliothèque",
					bundleSize: "Taille du bundle",
					lookupTime: "Temps de recherche",
					lazyLoading: "Chargement différé"
				},
				yes: "Oui",
				manual: "Manuel"
			},
			es: {
				title: "Resultados de muestra",
				columns: {
					library: "Biblioteca",
					bundleSize: "Tamaño del paquete",
					lookupTime: "Tiempo de búsqueda",
					lazyLoading: "Carga diferida"
				},
				yes: "Sí",
				manual: "Manual"
			},
			de: {
				title: "Beispielergebnisse",
				columns: {
					library: "Bibliothek",
					bundleSize: "Bundle-Größe",
					lookupTime: "Lookup-Zeit",
					lazyLoading: "Lazy Loading"
				},
				yes: "Ja",
				manual: "Manuell"
			},
			it: {
				title: "Risultati di esempio",
				columns: {
					library: "Libreria",
					bundleSize: "Dimensioni del bundle",
					lookupTime: "Tempo di ricerca",
					lazyLoading: "Caricamento lazy"
				},
				yes: "Sì",
				manual: "Manuale"
			},
			pt: {
				title: "Resultados de Amostra",
				columns: {
					library: "Biblioteca",
					bundleSize: "Tamanho do bundle",
					lookupTime: "Tempo de busca",
					lazyLoading: "Carregamento preguiçoso"
				},
				yes: "Sim",
				manual: "Manual"
			},
			zh: {
				title: "样本结果",
				columns: {
					library: "库",
					bundleSize: "捆绑包大小",
					lookupTime: "查找时间",
					lazyLoading: "延迟加载"
				},
				yes: "是",
				manual: "手动"
			},
			ja: {
				title: "サンプル結果",
				columns: {
					library: "ライブラリ",
					bundleSize: "バンドルサイズ",
					lookupTime: "ルックアップ時間",
					lazyLoading: "遅延ロード"
				},
				yes: "はい",
				manual: "手動"
			},
			ko: {
				title: "샘플 결과",
				columns: {
					library: "라이브러리",
					bundleSize: "번들 크기",
					lookupTime: "조회 시간",
					lazyLoading: "지연 로딩"
				},
				yes: "예",
				manual: "수동"
			},
			ru: {
				title: "Примеры результатов",
				columns: {
					library: "Библиотека",
					bundleSize: "Размер бандла",
					lookupTime: "Время поиска",
					lazyLoading: "Ленивая загрузка"
				},
				yes: "Да",
				manual: "Вручную"
			}
		}
	},
	localIds: ["results-table::local::src/components/pages/home/ResultsTable.content.ts"]
}, A = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = T(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
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
			return A({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), S(o);
}, j = v({
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
}), ae = (e, t, n = f(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return c(e.content, r, n);
}, M = (e) => {
	let t = {}, n = /([a-zA-Z0-9-]+)="([^"]*)"/g, r = n.exec(e);
	for (; r !== null;) t[r[1]] = r[2], r = n.exec(e);
	return t;
}, N = /* @__PURE__ */ new Map(), oe = (e) => {
	if (N.has(e)) return N.get(e);
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
			props: M(m),
			children: []
		});
		else {
			let e = M(m);
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
	return N.set(e, n), n;
}, se = (e, t) => {
	let n = oe(e), r = 0, i = (e) => {
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
}, ce = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", P = /\{\{\s*(.*?)\s*\}\}/g, le = (e, t = {}) => {
	if (!Object.values(t).some(ce)) return {
		isSimple: !0,
		parts: e.replace(P, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(P), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, ue = Symbol("intlayerHTML"), de = () => x(ue), F = (e, { components: t = {} } = {}) => {
	let n = Object.fromEntries(Object.entries(t).filter(([, e]) => e).map(([e, t]) => [e, (e) => b(t, e, e?.children)]));
	return se(e, new Proxy(n, { get(e, t) {
		if (typeof t == "string" && t in e) return e[t];
		if (typeof t == "string" && /^[a-z][a-z0-9]*$/.test(t)) return (e) => b(t, e, e?.children);
	} }));
}, fe = ({ components: e } = {}) => {
	let t = de();
	return (n) => t ? t.renderHTML(n, { components: e }) : F(n, { components: e });
};
v({
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
		let t = fe({ components: e.components });
		return () => t(e.content);
	}
});
var pe = new Set([
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
]), me = (e) => {
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
	}, l = (e) => pe.has(e) || /^0x[0-9a-fA-F]+$/.test(e) || /^#/.test(e) ? e : /^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/i.test(e) ? e === "3.14159265359" ? Math.PI : Number(e) : e, u = (e) => {
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
}, he = (e) => {
	try {
		let t = e.split(/\r?\n/), n = t.find((e) => e.trim() !== "");
		if (!n || n.trim() !== "---") return {};
		let r = -1;
		for (let e = 1; e < t.length; e++) if (t[e].trim() === "---") {
			r = e;
			break;
		}
		return r === -1 ? {} : me(t.slice(1, r).join("\n")) ?? {};
	} catch {
		return {};
	}
};
(/* @__PURE__ */ "allowFullScreen.allowTransparency.autoComplete.autoFocus.autoPlay.cellPadding.cellSpacing.charSet.classId.colSpan.contentEditable.contextMenu.crossOrigin.encType.formAction.formEncType.formMethod.formNoValidate.formTarget.frameBorder.hrefLang.inputMode.keyParams.keyType.marginHeight.marginWidth.maxLength.mediaGroup.minLength.noValidate.radioGroup.readOnly.rowSpan.spellCheck.srcDoc.srcLang.srcSet.tabIndex.useMap".split(".")).reduce((e, t) => (e[t.toLowerCase()] = t, e), {
	class: "className",
	for: "htmlFor"
});
var I = "(?:\\d+\\.)", L = "(?:[*+-])", R = (e) => `(?=[\\s\\S]+?\\1${e ? "\\1" : ""})`, z = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\[^\\s]|[\\s\\S])+?)";
RegExp(`^([*_])\\1${R(1)}${z}\\1\\1(?!\\1)`), RegExp(`^([*_])${R(0)}${z}\\1(?!\\1)`), RegExp(`^(==)${R(0)}${z}\\1`), RegExp(`^(~~)${R(0)}${z}\\1`);
var B = (e) => "( *)(" + (e === 1 ? I : L) + ") +", V = B(1), H = B(2), U = (e) => RegExp("^" + (e === 1 ? V : H));
U(1), U(2);
var W = (e) => RegExp("^" + (e === 1 ? V : H) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? I : L) + " )[^\\n]*)*(\\n|$)", "gm");
W(1), W(2);
var G = (e) => {
	let t = e === 1 ? I : L;
	return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
};
G(1), G(2);
var ge = (e) => (t, n = {}) => {
	let r = performance.now(), i = (t, n = {}) => ge(e)(t, n);
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
}, _e = Symbol("intlayerMarkdown"), ve = () => {
	let e = x(_e, { renderMarkdown: (e) => e });
	if (!e) throw Error("useMarkdown must be used within a MarkdownProvider");
	return e;
}, ye = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", K = !0, be = !0, xe = !0, q = !0, Se = ye ? t : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => A({
			...n,
			value: e,
			children: !q && p.enabled ? () => b(j, {
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
		return S(a);
	}
}, Ce = (e, t) => {
	let n = /* @__PURE__ */ new Map(), r = {};
	for (let [e, i] of Object.entries(t)) typeof i == "string" || typeof i == "number" ? r[e] = i : (n.set(e, i), r[e] = `__VNODE_${e}__`);
	let i = le(e, r);
	if (n.size > 0) {
		let e = [];
		if (i.isSimple) {
			let t = i.parts, r = 0;
			for (let [i] of n) {
				let a = `__VNODE_${i}__`, o = t.indexOf(a);
				o !== -1 && (o > r && e.push(t.substring(r, o)), e.push(n.get(i)), r = o + a.length);
			}
			return r < t.length && e.push(t.substring(r)), b(m, null, ...e);
		} else return i.parts.forEach((t) => {
			if (typeof t == "string") {
				let r = t;
				for (let [t] of n) {
					let i = `__VNODE_${t}__`, a = r.indexOf(i);
					a !== -1 && (a > 0 && e.push(r.substring(0, a)), e.push(n.get(t)), r = r.substring(a + i.length));
				}
				r.length > 0 && e.push(r);
			} else e.push(t);
		}), b(m, null, ...e);
	}
	return i.isSimple ? i.parts : b(m, null, i.parts);
}, we = xe ? t : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: i }], a = e[i], o = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ce(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return n(a, {
			...t,
			children: a,
			keyPath: r,
			plugins: [o, ...t.plugins ?? []]
		});
	}
}, Te = K ? t : {
	id: "markdown-string-plugin",
	canHandle: (e) => typeof e == "string",
	transform: (e, t, n) => {
		let { plugins: r, ...i } = t, a = n(he(e) ?? {}, {
			plugins: [{
				id: "markdown-metadata-plugin",
				canHandle: (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean" || !e,
				transform: (t, n) => A({
					...n,
					value: t,
					children: e
				})
			}],
			dictionaryKey: i.dictionaryKey,
			keyPath: []
		}), o = (n) => A({
			...t,
			value: e,
			children: () => {
				let { renderMarkdown: t, components: r } = ve(), a = t(e, void 0, {
					...r ?? {},
					...n ?? {}
				});
				return !q && p.enabled ? b(j, {
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
}, Ee = K ? t : {
	id: "markdown-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "markdown",
	transform: (e, t, n) => {
		let i = [...t.keyPath, { type: r }], a = e[r];
		return n(a, {
			...t,
			children: a,
			keyPath: i,
			plugins: [Te, ...t.plugins ?? []]
		});
	}
}, De = be ? t : {
	id: "html-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "html",
	transform: (e, t) => {
		let n = e[s];
		e.tags;
		let r = (e = {}) => {
			let i = F(n, { components: e });
			return A({
				...t,
				value: n,
				children: !q && p.enabled ? () => b(j, {
					dictionaryKey: t.dictionaryKey,
					keyPath: t.keyPath,
					...e
				}, { default: () => i }) : i,
				additionalProps: { use: (e) => r(e) }
			});
		};
		return r();
	}
}, J = /* @__PURE__ */ new Map(), Oe = (t, r = !0) => {
	let i = `${t ?? e.defaultLocale}_${r}`;
	if (J.has(i)) return J.get(i);
	let s = [
		o(t ?? e.defaultLocale, r ? e.defaultLocale : void 0),
		a,
		u,
		n(t ?? e.defaultLocale),
		l,
		d,
		Se,
		we,
		Ee,
		De
	];
	return J.set(i, s), s;
}, ke = (e, t) => ae(e, t, Oe(t)), Ae = Symbol("intlayer"), Y = (e, t) => t.reduce((e, t) => e?.[t], e), X = (e) => typeof e == "object" && !!e, Z = (e) => typeof e == "function" || X(e) && ("render" in e || "setup" in e), je = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Q = (e) => S(v({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Z(t) ? b(t) : Array.isArray(t) ? b("span", t) : t;
		};
	}
})), Me = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Q(() => e.value);
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
}), Ne = (t, n) => {
	let r = y() ? x(Ae) : void 0, i = ee(r?.locale) ? r.locale : T(r?.locale ?? e.defaultLocale), a = h(() => (n === void 0 ? void 0 : D(n)) ?? i.value), o = re({});
	k([() => D(t), () => a.value], ([e, t]) => {
		o.value = ke(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let s = (e) => new Proxy({}, {
		get(t, n, r) {
			if (n === "__v_isRef") return !0;
			let i = h(() => Y(o.value, e));
			if (n === "value") return i.value ?? "";
			if (n === "then") return;
			if (n === "c" || n === "asComponent") return Q(() => i.value);
			if (n === "$raw") return i;
			if (n === Symbol.toPrimitive) return () => i.value;
			let a = e.concat(n), c = Y(o.value, a);
			if (c === void 0 || X(c) && !Z(c)) return s(a);
			if (je(c)) return Me(h(() => Y(o.value, a)));
			let l = h(() => Y(o.value, a));
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
};
function Pe(e) {
	C(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), te(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var Fe = { class: "mb-6 text-2xl font-bold text-foreground" }, Ie = { class: "overflow-x-auto rounded-lg border border-border" }, Le = { class: "w-full text-sm" }, Re = { class: "bg-muted" }, ze = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, Be = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, $ = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, Ve = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, He = { class: "px-4 py-3 font-medium text-foreground" }, Ue = { class: "px-4 py-3 text-muted-foreground" }, We = { class: "px-4 py-3 text-muted-foreground" }, Ge = { class: "px-4 py-3 text-muted-foreground" }, Ke = v({
	__name: "ResultsTable",
	setup(e) {
		Pe("ResultsTable");
		let { title: t, columns: n, yes1: r, manual: i, yes: a } = Ne(ie), o = [
			{
				lib: "react-i18next",
				size: "42.3 kB",
				time: "0.12ms",
				lazy: a
			},
			{
				lib: "react-intl",
				size: "38.1 kB",
				time: "0.15ms",
				lazy: i
			},
			{
				lib: "lingui",
				size: "12.8 kB",
				time: "0.08ms",
				lazy: r
			},
			{
				lib: "typesafe-i18n",
				size: "5.2 kB",
				time: "0.05ms",
				lazy: "Built-in"
			}
		];
		return (e, r) => (w(), g("section", null, [_("h2", Fe, E(O(t)), 1), _("div", Ie, [_("table", Le, [_("thead", Re, [_("tr", null, [
			_("th", ze, E(O(n).library), 1),
			_("th", Be, E(O(n).bundleSize), 1),
			_("th", $, E(O(n).lookupTime), 1),
			_("th", Ve, E(O(n).lazyLoading), 1)
		])]), _("tbody", null, [(w(), g(m, null, ne(o, (e) => _("tr", {
			key: e.lib,
			class: "border-t border-border"
		}, [
			_("td", He, E(e.lib), 1),
			_("td", Ue, E(e.size), 1),
			_("td", We, E(e.time), 1),
			_("td", Ge, E(e.lazy), 1)
		])), 64))])])])]));
	}
});
export { Ke as default };
import { b as e, n as t, t as n, x as r, y as i } from "./getContent-okEgz1Xg.js";
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
export { e as S, l as _, y as a, r as b, T as c, o as d, a as f, f as g, s as h, x as i, b as l, p as m, O as n, E as o, c as p, S as r, w as s, D as t, u, d as v, n as x, i as y };
var e = {}, t = () => e;
export { t as getUnmergedDictionaries };
