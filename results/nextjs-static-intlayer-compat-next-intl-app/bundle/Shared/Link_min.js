import { n as e } from "./chunk-C3MyRVD9.js";
import { r as t, t as n } from "./interpreter-BteEm5XZ.js";
import { l as r, u as i } from "./select-Bu9FfFkv.js";
import { Fragment as a, createContext as o, createElement as s, useContext as c } from "react";
import { jsx as l } from "react/jsx-runtime";
var u, d, f = e((() => {
	u = o(void 0), d = () => c(u);
})), p = e((() => {
	i();
})), m, h = e((() => {
	n(), p(), m = (e, { components: n = {} } = {}) => {
		let i = Object.fromEntries(Object.entries(n).filter(([, e]) => e).map(([e, t]) => [e, (e) => s(t, e)]));
		return l(a, { children: t(e, new Proxy(i, { get(e, t) {
			if (typeof t == "string" && t in e) return e[t];
			if (typeof t == "string" && /^[a-z][a-z0-9]*$/.test(t)) return r.has(t) ? ({ children: e, ...n }) => s(t, n) : (e) => s(t, e);
		} })) });
	};
})), g;
e((() => {
	f(), h(), g = (e) => {
		let { html: t, userComponents: n } = e;
		return m(t, { components: {
			...d()?.components,
			...n
		} });
	};
}))();
export { g as HTMLRendererPlugin };
import { n as e } from "./chunk-C3MyRVD9.js";
import { n as t } from "./getMarkdownMetadata-BIsEuRk1.js";
import { Fragment as n, cloneElement as r, createContext as i, createElement as a, useContext as o } from "react";
import "react/jsx-runtime";
var s, c, l, u, d, f, p, m, h, g, _, v, ee, te, ne, re, ie, ae, oe, se, y, ce, le, ue, de, b, x, fe, pe, S, me, he, ge, C, w, _e, ve, ye, be, xe, Se, Ce, we, Te, Ee, De, Oe, ke, Ae, je, Me, Ne, Pe, T, E, D, O, Fe, Ie, Le, Re, k, A, ze, Be, Ve, He, j, M, N, P, Ue, We, F, Ge, Ke, I, L, qe, Je = e((() => {
	s = {
		blockQuote: "0",
		breakLine: "1",
		breakThematic: "2",
		codeBlock: "3",
		codeFenced: "4",
		codeInline: "5",
		footnote: "6",
		footnoteReference: "7",
		gfmTask: "8",
		heading: "9",
		headingSetext: "10",
		htmlBlock: "11",
		htmlComment: "12",
		htmlSelfClosing: "13",
		customComponent: "34",
		image: "14",
		link: "15",
		linkAngleBraceStyleDetector: "16",
		linkBareUrlDetector: "17",
		newlineCoalescer: "19",
		orderedList: "20",
		paragraph: "21",
		ref: "22",
		refImage: "23",
		refLink: "24",
		table: "25",
		tableSeparator: "26",
		text: "27",
		textBolded: "28",
		textEmphasized: "29",
		textEscaped: "30",
		textMarked: "31",
		textStrikethroughed: "32",
		unorderedList: "33"
	}, c = {
		MAX: 0,
		HIGH: 1,
		MED: 2,
		LOW: 3,
		MIN: 4
	}, l = (/* @__PURE__ */ "allowFullScreen.allowTransparency.autoComplete.autoFocus.autoPlay.cellPadding.cellSpacing.charSet.classId.colSpan.contentEditable.contextMenu.crossOrigin.encType.formAction.formEncType.formMethod.formNoValidate.formTarget.frameBorder.hrefLang.inputMode.keyParams.keyType.marginHeight.marginWidth.maxLength.mediaGroup.minLength.noValidate.radioGroup.readOnly.rowSpan.spellCheck.srcDoc.srcLang.srcSet.tabIndex.useMap".split(".")).reduce((e, t) => (e[t.toLowerCase()] = t, e), {
		class: "className",
		for: "htmlFor"
	}), u = {
		amp: "&",
		apos: "'",
		gt: ">",
		lt: "<",
		nbsp: "\xA0",
		quot: "“"
	}, d = [
		"style",
		"script",
		"pre"
	], f = [
		"src",
		"href",
		"data",
		"formAction",
		"srcDoc",
		"action"
	], p = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, m = /\n{2,}$/, h = /^(\s*>[\s\S]*?)(?=\n\n|$)/, g = /^ *> ?/gm, _ = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/, v = /^ {2,}\n/, ee = /^(?:([-*_])( *\1){2,}) *(?:\n *)+\n/, te = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/, ne = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, re = /^([ \t]*)(`{3,}|~{3,})/, ie = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/, ae = /^(?:\n *)*\n/, oe = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, se = /^\[\^([^\]]+)]/, y = /^---[ \t]*\n(.|\n)*?\n---[ \t]*\n/, ce = /^\s*?\[(x|\s)\]/, le = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, ue = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, de = /^([^\n]+)\n *(=|-)\2{2,} *\n/, b = "[^>\"'<]*", x = `${b}(?:(?:"[^"\\n]*"|'[^'\\n]*'|<.*?>|["'])${b})*`, fe = "(?![^>]*/>)", pe = "<\\1[^>]*?>", S = RegExp(`^ *(?!<[a-zA-Z][^ >/]* ?/>)<([a-zA-Z][^ >/]*) ?(${fe}${x})>\\n?(\\s*(?:${pe}[\\s\\S]*?</\\1>|(?!<\\1\\b)[\\s\\S])*?)</\\1>(?!</\\1>)\\n*`, "i"), me = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, he = /^<!--[\s\S]*?(?:-->)/, ge = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, C = RegExp(`^ *<([a-zA-Z][a-zA-Z0-9:]*)(?:\\s+(${x}))?/?>(?!</\\1>)(\\s*\\n)?`, "i"), w = RegExp(`^ *<([A-Z][a-zA-Z0-9]*)(?:\\s+(${x}))?>\\n?(\\s*(?:${pe}[\\s\\S]*?</\\1>|(?!<\\1\\b)[\\s\\S])*?)</\\1>(?!</\\1>)\\n*`), _e = /^\{.*\}$/, ve = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, ye = /^<([^ >]+[:@/][^ >]+)>/, be = /-([a-z])?/gi, xe = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, Se = /(^ *\||\| *$)/g, Ce = /^ *:-+: *$/, we = /^ *:-+ *$/, Te = /^ *-+: *$/, Ee = /^[^\n]+(?: {2}\n|\n{2,})/, De = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, Oe = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, ke = /^\[([^\]]*)\] ?\[([^\]]*)\]/, Ae = /^ *<([a-z][a-z0-9:-]*)\b/i, je = /^ *<([a-zA-Z][a-zA-Z0-9:]*)[\s>/]/, Me = /^ *<([A-Z][a-zA-Z0-9]*)/, Ne = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, Pe = /\r\n?|\f|\t/g, T = /^\n+/, E = /^\n*([ \t]*)/, D = "(?:\\d+\\.)", O = "(?:[*+-])", Fe = /^\\([^0-9A-Za-z\s])/, Ie = /\\([^0-9A-Za-z\s])/g, Le = /^[\s\S](?:(?! {2}\n|[0-9]\.|http)[^=*_~\-\n:<`\\[!])*/, Re = /^(:[a-zA-Z0-9-_]+:)/, k = (e) => `(?=[\\s\\S]+?\\1${e ? "\\1" : ""})`, A = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\[^\\s]|[\\s\\S])+?)", ze = RegExp(`^([*_])\\1${k(1)}${A}\\1\\1(?!\\1)`), Be = RegExp(`^([*_])${k(0)}${A}\\1(?!\\1)`), Ve = RegExp(`^(==)${k(0)}${A}\\1`), He = RegExp(`^(~~)${k(0)}${A}\\1`), j = (e) => "( *)(" + (e === 1 ? D : O) + ") +", M = j(1), N = j(2), P = (e) => RegExp("^" + (e === 1 ? M : N)), Ue = P(1), We = P(2), F = (e) => RegExp("^" + (e === 1 ? M : N) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? D : O) + " )[^\\n]*)*(\\n|$)", "gm"), Ge = F(1), Ke = F(2), I = (e) => {
		let t = e === 1 ? D : O;
		return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
	}, L = I(1), qe = I(2);
})), R, z, Ye, B, Xe, V, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, lt, ut, dt, H, U, W, G, K, q, ft, J, Y, X, Z, pt, mt = e((() => {
	Je(), R = (e) => {
		let t = e.length;
		for (; t > 0 && e[t - 1] <= " ";) t--;
		return e.slice(0, t);
	}, z = (e, t) => e.startsWith(t), Ye = (e) => {
		let t = e[0];
		return (t === "\"" || t === "'") && e.length >= 2 && e[e.length - 1] === t ? e.slice(1, -1) : e;
	}, B = (e) => e && e.replace(Ie, "$1"), Xe = (...e) => e.filter(Boolean).join(" "), V = (e, t, n) => {
		let r = e, i = t.split(".");
		for (; i.length && (r = r[i[0]], r !== void 0);) i.shift();
		return r ?? n;
	}, Ze = [
		[/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a"],
		[/[çÇ]/g, "c"],
		[/[ðÐ]/g, "d"],
		[/[ÈÉÊËéèêë]/g, "e"],
		[/[ÏïÎîÍíÌì]/g, "i"],
		[/[Ññ]/g, "n"],
		[/[øØœŒÕõÔôÓóÒò]/g, "o"],
		[/[ÜüÛûÚúÙù]/g, "u"],
		[/[ŸÿÝý]/g, "y"],
		[/[^a-z0-9- ]/gi, ""],
		[/ /gi, "-"]
	], Qe = (e) => {
		let t = e;
		for (let e = 0; e < Ze.length; e++) {
			let [n, r] = Ze[e];
			t = t.replace(n, r);
		}
		return t.toLowerCase();
	}, $e = /(javascript|vbscript|data(?!:image)):/i, et = /[^A-Za-z0-9/:]/g, tt = (e) => {
		if (e.indexOf(":") === -1 && e.indexOf("%") === -1) return e;
		try {
			let t = decodeURIComponent(e).replace(et, "");
			if ($e.test(t)) return console.warn("Input contains an unsafe JavaScript/VBScript/data expression, it will not be rendered.", t), null;
		} catch {
			return console.warn("Input could not be decoded due to malformed syntax or characters, it will not be rendered.", e), null;
		}
		return e;
	}, nt = (e) => e.replace(Pe, (e) => e === "	" ? "    " : e === "\f" ? "" : "\n"), rt = (e, t) => {
		if (!t) return e;
		let n = e.split("\n"), r = null, i = (e, t) => t && e.startsWith(t) ? e.slice(t.length) : e;
		return n.map((e) => {
			let n = e.match(re);
			if (!r) return n && (r = {
				indentation: n[1],
				marker: n[2]
			}), i(e, t);
			let a = n?.[2]?.startsWith(r.marker), { indentation: o } = r;
			return a && (r = null), i(e, o);
		}).join("\n");
	}, it = (e) => (e.indexOf("-") !== -1 && e.match(ge) === null && (e = e.replace(be, (e, t) => t.toUpperCase())), e), at = (e) => {
		let t = [], n = "", r = !1, i = !1, a = "";
		if (!e) return t;
		for (let o = 0; o < e.length; o++) {
			let s = e[o];
			if ((s === "\"" || s === "'") && !r && (i ? s === a && (i = !1, a = "") : (i = !0, a = s)), s === "(" && n.endsWith("url") ? r = !0 : s === ")" && r && (r = !1), s === ";" && !i && !r) {
				let e = n.trim();
				if (e) {
					let n = e.indexOf(":");
					if (n > 0) {
						let r = e.slice(0, n).trim(), i = e.slice(n + 1).trim();
						t.push([r, i]);
					}
				}
				n = "";
			} else n += s;
		}
		let o = n.trim();
		if (o) {
			let e = o.indexOf(":");
			if (e > 0) {
				let n = o.slice(0, e).trim(), r = o.slice(e + 1).trim();
				t.push([n, r]);
			}
		}
		return t;
	}, ot = (e, t, n, r) => t === "style" ? at(n).reduce((t, [n, i]) => {
		let a = n.replace(/(-[a-z])/g, (e) => e[1].toUpperCase());
		return t[a] = r(i, e, n), t;
	}, {}) : f.indexOf(t) === -1 ? (n.match(_e) && (n = B(n.slice(1, n.length - 1))), n === "true" ? !0 : n === "false" ? !1 : n) : r(B(n), e, t), st = (e) => Te.test(e) ? "right" : Ce.test(e) ? "center" : (we.test(e), "left"), ct = (e) => e.replace(Se, "").split("|").map(st), lt = (e, t, n, r) => {
		let i = n.inTable;
		n.inTable = !0;
		let a = [[]], o = "", s = () => {
			if (!o) return;
			let e = a[a.length - 1];
			e.push.apply(e, t(o, n)), o = "";
		};
		return e.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((e, t, n) => {
			if (e.trim() === "|" && (s(), r)) {
				t !== 0 && t !== n.length - 1 && a.push([]);
				return;
			}
			o += e;
		}), s(), n.inTable = i, a;
	}, ut = (e, t, n) => e.trim().split("\n").map((e) => lt(e, t, n, !0)), dt = (e, t, n) => {
		if (Array.isArray(n)) {
			for (let t = 0; t < n.length; t++) if (z(e, n[t])) return !0;
			return !1;
		}
		return n(e, t);
	}, H = (e) => (e.inline = 1, e), U = (e) => H((t, n) => n.inline ? e.exec(t) : null), W = (e) => H((t, n) => n.inline || n.simple ? e.exec(t) : null), G = (e) => (t, n) => n.inline || n.simple ? null : e.exec(t), K = (e) => H((t, n) => typeof e == "function" ? e(t, n) : e.exec(t)), q = (e, t, n) => {
		let r = n.inline ?? !1, i = n.simple ?? !1;
		n.inline = !0, n.simple = !0;
		let a = e(t, n);
		return n.inline = r, n.simple = i, a;
	}, ft = (e, t, n) => {
		let r = n.inline ?? !1, i = n.simple ?? !1;
		n.inline = !1, n.simple = !0;
		let a = e(t, n);
		return n.inline = r, n.simple = i, a;
	}, J = (e, t, n = {}) => {
		let r = n.inline || !1;
		n.inline = !1;
		let i = R(t), a = e(/\n\n$/.test(i) === !1 ? i.endsWith("\n") ? `${i}\n` : `${i}\n\n` : i, n);
		return n.inline = r, a;
	}, Y = (e, t, n) => ({ children: q(t, e[2] ?? "", n) }), X = () => ({}), Z = () => null, pt = (e, t) => {
		for (let n = 0; n < e.length; n++) if (e[n].test(t)) return !0;
		return !1;
	};
})), ht, gt, _t, vt, yt, bt = e((() => {
	mt(), ht = /* @__PURE__ */ new Map(), gt = (e, t) => {
		for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
		return !0;
	}, _t = (e, t) => {
		let n = ht.get(e.length);
		if (n) {
			for (let t = 0; t < n.length; t++) if (gt(e, n[t].names)) return n[t].order;
		}
		let r = e.slice().sort((e, n) => t[e]._order - t[n]._order || e - +n), i = {
			names: e.slice(),
			order: r
		};
		return n ? n.push(i) : ht.set(e.length, [i]), r;
	}, vt = (e, t) => {
		let n = t.lastIndexOf("\n"), r = e.prevCaptureHasBlankLine !== void 0;
		e.prevCaptureHasBlankLine !== !0 && (e.prevCaptureHasBlankLine = t.indexOf("\n\n") !== -1 || r && t.charCodeAt(0) === 10 && e.prevCaptureIndent === "");
		let i = n === -1 ? e.prevCaptureIndent === void 0 ? void 0 : e.prevCaptureIndent + t : t.slice(n + 1);
		if (i === void 0 || i === "") {
			e.prevCaptureIndent = i;
			return;
		}
		for (let t = 0; t < i.length; t++) if (i.charCodeAt(t) !== 32) {
			e.prevCaptureIndent = void 0;
			return;
		}
		e.prevCaptureIndent = i;
	}, yt = (e) => {
		let t = Object.keys(e);
		t.forEach((t) => {
			let n = e[t]?._order;
			(typeof n != "number" || !Number.isFinite(n)) && console.warn(`intlayer: Invalid order for rule \`${t}\`: ${n}`);
		});
		let n = _t(t, e), r = n.length, i = Array(r), a = Array(r), o = Array(r);
		for (let t = 0; t < r; t++) {
			let r = e[n[t]];
			i[t] = r._qualify, a[t] = r._match, o[t] = r._parse;
		}
		let s = (e, t = {}) => {
			let c = [];
			if (t.prevCaptureHasBlankLine === void 0 && (t.prevCaptureIndent = ""), e.trim()) for (; e;) for (let l = 0; l < r; l++) {
				let r = i[l];
				if (r && !dt(e, t, r)) continue;
				let u = a[l](e, t);
				if (u?.[0]) {
					e = e.substring(u[0].length);
					let r = o[l](u, s, t);
					vt(t, u[0]), r.type ||= n[l], c.push(r);
					break;
				}
			}
			return c;
		};
		return (e, t) => s(nt(e), t);
	};
})), xt, St, Ct = e((() => {
	xt = (e) => {
		let t = (n, r = {}) => {
			if (!Array.isArray(n)) return e(n, t, r);
			let i = r.key, a = [], o = !1, s = 0;
			for (let e = 0; e < n.length; e++) {
				let i = t(n[e], {
					...r,
					key: s
				}), c = typeof i == "string";
				c && o ? a[a.length - 1] = a[a.length - 1] + i : i !== null && (a.push(i), s++), o = c;
			}
			return r.key = i, a;
		};
		return t;
	}, St = (e, t) => (n, r, i) => {
		let a = e[n.type]?._render;
		return t ? t(() => a?.(n, r, i), n, r, i) : a?.(n, r, i);
	};
})), wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Q, Nt, $, Pt, Ft, It, Lt = e((() => {
	Je(), mt(), bt(), Ct(), wt = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, Tt = RegExp("^\\[((?:\\[[^\\[\\]]*(?:\\[[^\\[\\]]*\\][^\\[\\]]*)*\\]|[^\\[\\]])*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"), Et = /* @__PURE__ */ new Map(), Dt = (e) => {
		let t = Et.get(e);
		if (t) return t;
		let n = RegExp(`</${e}>`, "i");
		return Et.set(e, n), n;
	}, Ot = (e) => {
		let t = null;
		return (n) => {
			if (typeof n != "string") return n;
			let r = V(e, n);
			if (r) return r;
			if (!t) {
				t = /* @__PURE__ */ new Map();
				for (let n of Object.keys(e)) {
					let e = n.toLowerCase();
					t.has(e) || t.set(e, n);
				}
			}
			let i = t.get(n.toLowerCase());
			return (i ? V(e, i) : void 0) || n;
		};
	}, kt = (e) => (t) => e.slugify ? e.slugify(t, Qe) : Qe(t), At = (e, t) => {
		let { runtime: n, components: r = {} } = e, i = Ot(r), a = t.tagfilter ? [
			"title",
			"textarea",
			"style",
			"xmp",
			"iframe",
			"noembed",
			"noframes",
			"script",
			"plaintext"
		] : [];
		return (e, t, ...r) => {
			if (typeof e == "string" && a.includes(e.toLowerCase())) return null;
			let o = typeof e == "string", s = Xe(t?.className, t?.class), c = {}, l = !1;
			if (t) for (let e in t) {
				let n = t[e];
				n != null && (e === "className" || e === "class" ? l ||= (s && (c.className = s), !0) : c[e] = n);
			}
			!l && s && (c.className = s);
			let u = c;
			n.normalizeProps && o && (u = n.normalizeProps(e, c));
			let d = i(e);
			return n.createElement(d, u, ...r.length === 1 ? [r[0]] : r);
		};
	}, jt = (e, t, n, r, i, a, o, l) => {
		let f = kt(t), p = t.sanitizer ?? tt, re = t.namedCodesToUnicode ? {
			...u,
			...t.namedCodesToUnicode
		} : u, y = (t) => {
			let n = t === 1, r = n ? L : qe, i = n ? Ge : Ke, a = n ? Ue : We;
			return {
				_qualify: (e) => a.test(e),
				_match: H((e, t) => {
					let n = t.prevCaptureIndent, i = n !== void 0, a = t.list ?? (!t.inline && !t.simple);
					if (i && a) {
						let t = n ? n + e : e;
						return r.exec(t);
					}
					return null;
				}),
				_order: c.HIGH,
				_parse(e, t, r) {
					let o = e[2], s = n ? +o.slice(0, -1) : void 0, c = e[0].replace(m, "\n").match(i);
					if (!c) return {
						items: [],
						ordered: n,
						start: s
					};
					let l = !1;
					return {
						items: c.map((e, n) => {
							let i = a.exec(e), o = i ? i[0].length : 0, s = RegExp(`^ {1,${o}}`, "gm"), u = e.replace(s, "").replace(a, ""), d = n === c.length - 1, f = u.indexOf("\n\n") !== -1 || d && l;
							l = f;
							let p = r.inline, m = r.list;
							r.list = !0;
							let h;
							f ? (r.inline = !1, h = `${R(u)}\n\n`) : (r.inline = !0, h = R(u));
							let g = t(h, r);
							return r.inline = p, r.list = m, g;
						}),
						ordered: n,
						start: s
					};
				},
				_render(t, n, r = {}) {
					let i = t.ordered ? "ol" : "ul", a = { key: r.key };
					return t.ordered && t.start != null && (a.start = t.start), e(i, a, ...t.items.map((t, i) => e("li", { key: i }, n(t, r))));
				}
			};
		}, b = (e, t) => {
			if (t.inline || t.simple || t.inHTML && e.indexOf("\n\n") === -1 && !t.prevCaptureHasBlankLine) return null;
			let n = 0;
			for (;;) {
				let t = e.indexOf("\n", n), r = e.slice(n, t === -1 ? void 0 : t + 1);
				if (pt(l, r) || t === -1 || !r.trim()) break;
				n = t + 1;
			}
			let r = e.slice(0, n);
			if (r === "") return null;
			let i = R(r);
			return i === "" ? null : [
				r,
				void 0,
				i
			];
		};
		return {
			[s.blockQuote]: {
				_qualify: [">"],
				_match: G(h),
				_order: c.HIGH,
				_parse(e, t, n) {
					let r = e[0].replace(g, "").match(_), i = r?.[1], a = r?.[2] ?? "";
					return {
						alert: i,
						children: a.indexOf("\n") === -1 ? q(t, a, n) : J(t, a, n)
					};
				},
				_render(t, n, r = {}) {
					let i = { key: r.key };
					return t.alert && (i.className = `markdown-alert-${f(t.alert.toLowerCase())}`, t.children.unshift({
						attrs: {},
						children: [{
							type: s.text,
							text: t.alert
						}],
						noInnerParse: !0,
						type: s.htmlBlock,
						tag: "header"
					})), e("blockquote", i, n(t.children, r));
				}
			},
			[s.breakLine]: {
				_qualify: ["  "],
				_match: K(v),
				_order: c.HIGH,
				_parse: X,
				_render(t, n, r = {}) {
					return e("br", { key: r.key });
				}
			},
			[s.breakThematic]: {
				_qualify: [
					"--",
					"__",
					"**",
					"- ",
					"* ",
					"_ "
				],
				_match: G(ee),
				_order: c.HIGH,
				_parse: X,
				_render(t, n, r = {}) {
					return e("hr", { key: r.key });
				}
			},
			[s.codeBlock]: {
				_qualify: ["    "],
				_match: G(ne),
				_order: c.MAX,
				_parse(e) {
					return {
						type: s.codeBlock,
						lang: void 0,
						text: B(R(e[0].replace(/^ {4}/gm, "")))
					};
				},
				_render(t, n, r = {}) {
					let i = { ...t.attrs ?? {} }, a = t.lang ? `lang-${t.lang}` : "lang-plaintext";
					return i.className = i.className ? `${i.className} ${a}` : a, e("pre", { key: r.key }, e("code", i, t.text));
				}
			},
			[s.codeFenced]: {
				_qualify: ["```", "~~~"],
				_match: G(te),
				_order: c.MAX,
				_parse(e) {
					return {
						attrs: a("code", e[3] ?? ""),
						lang: e[2] || void 0,
						text: e[4],
						type: s.codeBlock
					};
				}
			},
			[s.codeInline]: {
				_qualify: ["`"],
				_match: W(ie),
				_order: c.LOW,
				_parse(e) {
					return { text: B(e[2]) };
				},
				_render(t, n, r = {}) {
					return e("code", { key: r.key }, t.text);
				}
			},
			[s.footnote]: {
				_qualify: ["[^"],
				_match: G(oe),
				_order: c.MAX,
				_parse(e) {
					return r.push({
						footnote: e[2],
						identifier: e[1]
					}), {};
				},
				_render: Z
			},
			[s.footnoteReference]: {
				_qualify: ["[^"],
				_match: U(se),
				_order: c.HIGH,
				_parse(e) {
					return {
						target: `#${f(e[1])}`,
						text: e[1]
					};
				},
				_render(t, n, r = {}) {
					return e("a", {
						key: r.key,
						href: p(t.target, "a", "href") ?? void 0
					}, e("sup", { key: r.key }, t.text));
				}
			},
			[s.gfmTask]: {
				_qualify: ["[ ]", "[x]"],
				_match: U(ce),
				_order: c.HIGH,
				_parse(e) {
					return { completed: e[1].toLowerCase() === "x" };
				},
				_render(t, n, r = {}) {
					return e("input", {
						checked: t.completed,
						key: r.key,
						readOnly: !0,
						type: "checkbox"
					});
				}
			},
			[s.heading]: {
				_qualify: ["#"],
				_match: G(n.enforceAtxHeadings ? ue : le),
				_order: c.HIGH,
				_parse(e, t, n) {
					return {
						children: q(t, e[2], n),
						id: f(e[2]),
						level: e[1].length
					};
				},
				_render(t, n, r = {}) {
					return e(`h${t.level}`, {
						id: t.id,
						key: r.key
					}, n(t.children, r));
				}
			},
			[s.headingSetext]: {
				_qualify: (e) => {
					let t = e.indexOf("\n");
					return t > 0 && t < e.length - 1 && (e[t + 1] === "=" || e[t + 1] === "-");
				},
				_match: G(de),
				_order: c.MAX,
				_parse(e, t, n) {
					return {
						children: q(t, e[1], n),
						level: e[2] === "=" ? 1 : 2,
						type: s.heading
					};
				}
			},
			[s.htmlBlock]: {
				_qualify: (e) => {
					if (n.disableParsingRawHTML) return !1;
					let t = Ae.exec(e);
					return t ? Dt(t[1]).test(e) : !1;
				},
				_match: K(S),
				_order: c.HIGH,
				_parse(e, t, n) {
					let r = e[3].match(E)?.[1] ?? "", i = rt(e[3], r), s = o(i) ? J : q, c = e[1].trim(), l = d.indexOf(c.toLowerCase()) !== -1, u = l ? c.toLowerCase() : c, f = {
						attrs: a(u, e[2] ?? ""),
						noInnerParse: l,
						tag: u
					};
					if (n.inAnchor = n.inAnchor || c.toLowerCase() === "a", l) f.text = e[3];
					else {
						let e = n.inHTML;
						n.inHTML = !0, f.children = s(t, i, n), n.inHTML = e;
					}
					return n.inAnchor = !1, f;
				},
				_render(t, n, r = {}) {
					return e(t.tag, {
						key: r.key,
						...t.attrs ?? {}
					}, t.text ?? (t.children ? n(t.children, r) : ""));
				}
			},
			[s.htmlComment]: {
				_qualify: ["<!"],
				_match: K(he),
				_order: c.HIGH,
				_parse: X,
				_render: Z
			},
			[s.htmlSelfClosing]: {
				_qualify: (e) => n.disableParsingRawHTML ? !1 : je.test(e),
				_match: K(C),
				_order: c.HIGH,
				_parse(e) {
					let t = e[1].trim();
					return {
						attrs: a(t, e[2] || ""),
						tag: t
					};
				},
				_render(t, n, r = {}) {
					return e(t.tag, {
						key: r.key,
						...t.attrs ?? {}
					});
				}
			},
			[s.customComponent]: {
				_qualify: (e) => Me.test(e),
				_match: K(w),
				_order: c.MAX,
				_parse(e, t, n) {
					let r = e[3].match(E)?.[1] ?? "", i = rt(e[3], r), s = o(i) ? J : q, c = e[1].trim(), l = {
						attrs: a(c, e[2] ?? ""),
						noInnerParse: !1,
						tag: c
					}, u = n.inHTML;
					return n.inHTML = !0, l.children = s(t, i, n), n.inHTML = u, l;
				},
				_render(t, n, r = {}) {
					return e(t.tag, {
						key: r.key,
						...t.attrs ?? {}
					}, t.text ?? (t.children ? n(t.children, r) : ""));
				}
			},
			[s.paragraph]: {
				_match: b,
				_order: c.LOW,
				_parse: Y,
				_render(t, n, r = {}) {
					return e("p", { key: r.key }, n(t.children, r));
				}
			},
			[s.image]: {
				_qualify: ["!["],
				_match: W(wt),
				_order: c.HIGH,
				_parse(e) {
					return {
						alt: B(e[1]),
						target: B(e[2]),
						title: B(e[3])
					};
				},
				_render(t, n, r = {}) {
					return e("img", {
						key: r.key,
						alt: t.alt ?? void 0,
						title: t.title ?? void 0,
						src: p(t.target, "img", "src") ?? void 0
					});
				}
			},
			[s.link]: {
				_qualify: ["["],
				_match: U(Tt),
				_order: c.LOW,
				_parse(e, t, n) {
					return {
						children: ft(t, e[1], n),
						target: B(e[2]),
						title: B(e[3])
					};
				},
				_render(t, n, r = {}) {
					let i = p(t.target, "a", "href");
					return e("a", {
						key: r.key,
						href: i ?? void 0,
						title: t.title ?? void 0
					}, n(t.children, r));
				}
			},
			[s.linkAngleBraceStyleDetector]: {
				_qualify: ["<"],
				_match: U(ye),
				_order: c.MAX,
				_parse(e) {
					let t = e[1], n = !1;
					return t.indexOf("@") !== -1 && t.indexOf("//") === -1 && (n = !0, t = t.replace("mailto:", "")), {
						children: [{
							text: t,
							type: s.text
						}],
						target: n ? `mailto:${t}` : t,
						type: s.link
					};
				}
			},
			[s.linkBareUrlDetector]: {
				_qualify: (e, t) => !!(t.inline && !t.inAnchor && !n.disableAutoLink && (z(e, "http://") || z(e, "https://"))),
				_match: U(ve),
				_order: c.MAX,
				_parse(e) {
					return {
						children: [{
							text: e[1],
							type: s.text
						}],
						target: e[1],
						type: s.link
					};
				}
			},
			[s.newlineCoalescer]: {
				_match: G(ae),
				_order: c.LOW,
				_parse: X,
				_render() {
					return "\n";
				}
			},
			[s.orderedList]: y(1),
			[s.unorderedList]: y(2),
			[s.ref]: {
				_qualify: ["["],
				_match: K(De),
				_order: c.MAX,
				_parse(e) {
					return i[e[1]] = {
						target: e[2],
						title: e[4]
					}, {};
				},
				_render: Z
			},
			[s.refImage]: {
				_qualify: ["!["],
				_match: W(Oe),
				_order: c.MAX,
				_parse(e) {
					return {
						alt: e[1] ? B(e[1]) : void 0,
						ref: e[2]
					};
				},
				_render(t, n, r = {}) {
					let a = i[t.ref];
					return a ? e("img", {
						key: r.key,
						alt: t.alt,
						src: p(a.target, "img", "src") ?? void 0,
						title: a.title
					}) : null;
				}
			},
			[s.refLink]: {
				_qualify: (e) => e[0] === "[" && e.indexOf("](") === -1,
				_match: U(ke),
				_order: c.MAX,
				_parse(e, t, n) {
					return {
						children: ft(t, e[1], n),
						fallbackChildren: e[0],
						ref: e[2]
					};
				},
				_render(t, n, r = {}) {
					let a = i[t.ref];
					return a ? e("a", {
						key: r.key,
						href: p(a.target, "a", "href") ?? void 0,
						title: a.title
					}, n(t.children, r)) : e("span", { key: r.key }, t.fallbackChildren);
				}
			},
			[s.table]: {
				_qualify: ["|"],
				_match: G(xe),
				_order: c.HIGH,
				_parse(e, t, n) {
					n.inline = !0;
					let r = e[2] ? ct(e[2]) : [], i = e[3] ? ut(e[3], t, n) : [], a = lt(e[1], t, n, !!i.length);
					return n.inline = !1, i.length ? {
						align: r,
						cells: i,
						header: a,
						type: s.table
					} : {
						children: a.flat(),
						type: s.paragraph
					};
				},
				_render(t, n, r = {}) {
					let i = t, a = (e) => i.align[e] && i.align[e] !== "left" ? { textAlign: i.align[e] } : {};
					return e("table", { key: r.key }, e("thead", null, e("tr", null, ...i.header.map((t, i) => e("th", {
						key: i,
						style: a(i)
					}, n(t, r))))), e("tbody", null, ...i.cells.map((t, i) => e("tr", { key: i }, ...t.map((t, i) => e("td", {
						key: i,
						style: a(i)
					}, n(t, r)))))));
				}
			},
			[s.tableSeparator]: {
				_match: (e, t) => t.inTable && e[0] === "|" ? /^\|/.exec(e) : null,
				_order: c.HIGH,
				_parse() {
					return { type: s.tableSeparator };
				},
				_render() {
					return " | ";
				}
			},
			[s.text]: {
				_match: H((e, t) => Re.exec(e) || Le.exec(e) || /^[\s\S]/.exec(e)),
				_order: c.MIN,
				_parse(e) {
					let t = e[0];
					return { text: t.indexOf("&") === -1 ? t : t.replace(me, (e, t) => t.startsWith("#x") ? String.fromCharCode(parseInt(t.slice(2), 16)) : t.startsWith("#") ? String.fromCharCode(parseInt(t.slice(1), 10)) : re[t] || e) };
				},
				_render(e) {
					return e.text;
				}
			},
			[s.textBolded]: {
				_qualify: ["**", "__"],
				_match: W(ze),
				_order: c.MED,
				_parse(e, t, n) {
					return { children: t(e[2], n) };
				},
				_render(t, n, r = {}) {
					return e("strong", { key: r.key }, n(t.children, r));
				}
			},
			[s.textEmphasized]: {
				_qualify: ["*", "_"],
				_match: W(Be),
				_order: c.LOW,
				_parse(e, t, n) {
					return { children: t(e[2], n) };
				},
				_render(t, n, r = {}) {
					return e("em", { key: r.key }, n(t.children, r));
				}
			},
			[s.textEscaped]: {
				_qualify: ["\\"],
				_match: W(Fe),
				_order: c.HIGH,
				_parse(e) {
					return {
						text: e[1],
						type: s.text
					};
				}
			},
			[s.textMarked]: {
				_qualify: ["=="],
				_match: W(Ve),
				_order: c.LOW,
				_parse: Y,
				_render(t, n, r = {}) {
					return e("mark", { key: r.key }, n(t.children, r));
				}
			},
			[s.textStrikethroughed]: {
				_qualify: ["~~"],
				_match: W(He),
				_order: c.LOW,
				_parse: Y,
				_render(t, n, r = {}) {
					return e("del", { key: r.key }, n(t.children, r));
				}
			}
		};
	}, Mt = () => null, Q = (e, t, n, r, i) => {
		let a = (e, r) => {
			if (!r?.trim()) return null;
			let i = r.match(p);
			return i ? i.reduce((r, i) => {
				let a = i.indexOf("=");
				if (a !== -1) {
					let o = it(i.slice(0, a)).trim(), s = Ye(i.slice(a + 1).trim()), c = l[o] ?? o;
					if (c === "ref") return r;
					r[c] = ot(e, o, s, t.sanitizer ?? tt), typeof r[c] == "string" && (S.test(r[c]) || C.test(r[c])) && (r[c] = Pt(r[c].trim(), t, n).ast);
				} else i !== "style" && (r[l[i] ?? i] = !0);
				return r;
			}, {}) : null;
		}, o = [
			h,
			te,
			ne,
			n.enforceAtxHeadings ? ue : le,
			de,
			xe,
			L,
			qe,
			w
		], c = n.disableParsingRawHTML ? o : [
			...o,
			Ee,
			S,
			he,
			C,
			w
		], u = jt(e, t, n, r, i, a, (e) => {
			let t = e.replace(T, ""), n = t.length > 2048 ? t.slice(0, 2048) : t;
			return n.indexOf("\n\n") === -1 ? pt(c, n) : !0;
		}, o);
		return n.disableParsingRawHTML ? Object.keys(u).reduce((e, t) => (t !== s.htmlBlock && t !== s.htmlSelfClosing && (e[t] = u[t]), e), {}) : u;
	}, Nt = (e, t, n, r, i) => {
		let a = yt(n), o = t.preserveFrontmatter ? e : e.replace(y, ""), s = o.replace(T, ""), c = t.forceInline || !t.forceBlock && Ne.test(s) === !1, l = a(c ? o : `${R(s)}\n\n`, { inline: c });
		if (r.length > 0) for (let e of r) e.parsedAst = a(e.footnote, { inline: !0 });
		return {
			ast: l,
			footnotes: r,
			references: i,
			inline: c
		};
	}, $ = (e, t, n, r, i) => {
		let a = t.components ?? {}, o = kt(t), s = e.footnotes || [], c = xt(St(r, n.renderRule)), l = e.inline, u = c(e.ast, { inline: l });
		for (; typeof u[u.length - 1] == "string" && !u[u.length - 1].trim();) u.pop();
		let d = (() => {
			if (n.wrapper === null) return u;
			let e = n.wrapper ?? (l ? "span" : "div");
			if (u.length > 1 || n.forceWrapper) return i(e, { key: "outer" }, u);
			if (u.length === 1) {
				let e = u[0];
				if (typeof e == "string") {
					let t = { key: "outer" };
					if (!l && a) {
						let n = V(a, "p.props", {}) ?? {}, r = Xe(t.className, n.className), o = {
							...t,
							...n
						};
						return r && (o.className = r), i("span", o, e);
					}
					return i("span", t, e);
				}
				return e;
			}
			return i(e, { key: "outer" }, null);
		})();
		return s.length ? i("div", null, d, i("footer", { key: "footer" }, ...s.map((e) => i("div", {
			id: o(e.identifier),
			key: e.identifier
		}, e.identifier, c(e.parsedAst || e.footnote, { inline: !0 }))))) : d;
	}, Pt = (e = "", t, n = {}) => {
		let r = [], i = {};
		return Nt(e, n, Q(Mt, t, n, r, i), r, i);
	}, Ft = (e, t, n = {}) => {
		let r = At(t, n);
		return $(e, t, n, Q(r, t, n, e.footnotes ?? [], e.references ?? {}), r);
	}, It = (e = "", t, n = {}) => {
		if (typeof e != "string") throw console.error("intlayer: the first argument must be a string. Received", typeof e), Error("intlayer: the first argument must be a string");
		let r = [], i = {}, a = At(t, n), o = Q(a, t, n, r, i);
		return $(Nt(e, n, o, r, i), t, n, o, a);
	};
})), Rt = e((() => {
	t(), Lt();
})), zt, Bt, Vt = e((() => {
	Rt(), zt = {
		createElement: a,
		cloneElement: r,
		Fragment: n,
		normalizeProps: (e, t) => t
	}, Bt = (e = "", t = {}) => {
		let { createElement: n, disableAutoLink: r, disableParsingRawHTML: i, enforceAtxHeadings: a, forceBlock: o, forceInline: s, forceWrapper: c, namedCodesToUnicode: l, components: u, renderRule: d, sanitizer: f, slugify: p, wrapper: m, preserveFrontmatter: h, tagfilter: g } = t, _ = {
			runtime: n ? {
				...zt,
				createElement: n
			} : zt,
			components: u,
			namedCodesToUnicode: l,
			sanitizer: f,
			slugify: p
		}, v = {
			disableAutoLink: r,
			disableParsingRawHTML: i,
			enforceAtxHeadings: a,
			forceBlock: o,
			forceInline: s,
			forceWrapper: c,
			renderRule: d,
			wrapper: m,
			preserveFrontmatter: h,
			tagfilter: g
		};
		return typeof e == "string" ? It(e, _, v) : Ft(e, _, v);
	};
})), Ht, Ut, Wt = e((() => {
	Ht = i(void 0), Ut = () => o(Ht);
}));
export { Rt as a, Vt as i, Ut as n, Bt as r, Wt as t };
import { n as e } from "./chunk-C3MyRVD9.js";
import { i as t, n, r, t as i } from "./MarkdownProvider-BdUPb5OS.js";
var a;
e((() => {
	t(), i(), a = (e) => {
		let { children: t, options: i, components: a } = e, o = n();
		return o ? o.renderMarkdown(t, i, {
			...o.components,
			...a
		}) : r(t, {
			...i,
			components: a
		});
	};
}))();
export { a as MarkdownRendererPlugin };
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (e && (t = e(e = 0)), t), s = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), c = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, l = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, u = (n, r, a) => (a = n == null ? {} : e(i(n)), l(r || !n || !n.__esModule ? t(a, "default", {
	value: n,
	enumerable: !0
}) : a, n)), d = (e) => a.call(e, "module.exports") ? e["module.exports"] : l(t({}, "__esModule", { value: !0 }), e), f = ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
export { d as a, f as i, o as n, u as o, c as r, s as t };
import { n as e } from "./chunk-C3MyRVD9.js";
import { h as t, i as n, m as r, o as i, p as a, r as o } from "./built-k6nPQRRu.js";
import { A as s, E as c, Y as l, k as u, q as d } from "./interpreter-BteEm5XZ.js";
var f = e((() => {
	t();
})), p, m, h, g = e((() => {
	c(), f(), p = (e) => typeof e == "object" && !!e && "__intlayerQualifierTypes" in e, m = (e, t, n, i) => {
		let a = e[r], o = e[n], c = a.includes("item") && i?.item === void 0;
		if (!o) return {
			itemAxisOpen: c,
			missed: !0,
			chunks: []
		};
		let l = [], d = (e, r, a) => {
			if (r.length === 0) return l.push({
				cacheKey: `${t}.${n}.${a.join("/")}`,
				loader: e
			}), !0;
			let [o, ...c] = r, f = e;
			if (o === "item" && i?.item === void 0) {
				for (let e of Object.keys(f).sort((e, t) => Number(e) - Number(t))) d(f[e], c, [...a, e]);
				return !0;
			}
			let p = o === "variant" ? u(s(i?.variant), (e) => f[e] !== void 0) : String(i?.item), m = f[p];
			return m ? d(m, c, [...a, p]) : !1;
		};
		return {
			itemAxisOpen: c,
			missed: !d(o, a, []),
			chunks: l
		};
	}, h = (e) => {
		let { loaderMap: t, key: n, locale: r, selector: i, loadChunk: a, transform: o } = e, { itemAxisOpen: s, missed: c, chunks: l } = m(t, n, r, i);
		if (c) return s ? [] : null;
		let u = l.map(({ cacheKey: e, loader: t }) => a(e, t()));
		if (s) return u.map(o);
		let [d] = u;
		return d ? o(d) : null;
	};
})), _, v = e((() => {
	f(), _ = (e, t) => {
		if (typeof e != "object" || !e) return;
		let n = e[a];
		if (!(!n || n.locale !== t)) return n.dictionary;
	};
})), y, b, x = e((() => {
	y = (e) => {
		if (typeof e == "number") return Date.now() + e * 1e3;
		if (typeof e == "string") {
			let t = Date.parse(e);
			return Number.isNaN(t) ? void 0 : t;
		}
	}, b = (e, t, n) => {
		let r = [`${e}=${encodeURIComponent(t)}`];
		n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
		let i = y(n.expires);
		return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
	};
})), S, C, w, T, E, D, O = e((() => {
	x(), o(), S = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false", C = process.env.INTLAYER_ROUTING_STORAGE_LOCALSTORAGE === "false", w = process.env.INTLAYER_ROUTING_STORAGE_SESSIONSTORAGE === "false", process.env.INTLAYER_ROUTING_STORAGE_HEADERS, T = {
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
	}, E = (e = T) => {
		let { locales: t } = n;
		if (e?.isCookieEnabled === !1) return;
		let r = (e) => !!e && t.includes(e);
		if (!S) for (let t = 0; t < (i.storage.cookies ?? []).length; t++) try {
			let n = e?.getCookie?.(i.storage.cookies[t].name);
			if (r(n)) return n;
		} catch {}
		if (!C) for (let t = 0; t < (i.storage.localStorage ?? []).length; t++) try {
			let n = e?.getLocaleStorage?.(i.storage.localStorage[t].name);
			if (r(n)) return n;
		} catch {}
		if (!w && i.storage.sessionStorage) for (let t = 0; t < i.storage.sessionStorage.length; t++) try {
			let n = e?.getSessionStorage?.(i.storage.sessionStorage[t].name);
			if (r(n)) return n;
		} catch {}
	}, D = (e, t) => {
		if (t?.isCookieEnabled !== !1) {
			if (!S && i.storage.cookies) for (let n = 0; n < i.storage.cookies.length; n++) {
				let { name: r, attributes: a } = i.storage.cookies[n];
				try {
					t?.setCookieStore && t.setCookieStore(r, e, {
						...a,
						expires: y(a.expires)
					});
				} catch {
					try {
						t?.setCookieString && t.setCookieString(r, b(r, e, a));
					} catch {}
				}
			}
			if (!C && i.storage.localStorage && t?.setLocaleStorage) for (let n = 0; n < i.storage.localStorage.length; n++) {
				let { name: r } = i.storage.localStorage[n];
				try {
					if (!(t?.overwrite ?? !0) && t?.getLocaleStorage && t.getLocaleStorage(r)) continue;
					t.setLocaleStorage(r, e);
				} catch {}
			}
			if (!w && i.storage.sessionStorage && t?.setSessionStorage) for (let n = 0; n < i.storage.sessionStorage.length; n++) {
				let { name: r } = i.storage.sessionStorage[n];
				try {
					if (!(t?.overwrite ?? !0) && t?.getSessionStorage && t.getSessionStorage(r)) continue;
					t.setSessionStorage(r, e);
				} catch {}
			}
		}
	};
})), k, A = e((() => {
	k = (e, t) => e.every((e, n) => t[n] && t[n].key === e.key && t[n].type === e.type);
})), j = e((() => {
	O(), A();
})), M, N = e((() => {
	l(), M = (e, t, n) => {
		let r = e, i = null, a = [];
		if (t.length === 0) return n;
		try {
			for (let e = 0; e < t.length; e++) {
				let o = t[e];
				if (i = r, (o?.type === "object" || o?.type === "array") && (a = [o.key], (!r[o.key] || typeof r[o.key] != "object") && (r[o.key] = {}), r = r[o.key]), (o?.type === "translation" || o?.type === "enumeration" || o?.type === "plural" || o?.type === "gender" || o?.type === "select") && (a = [o.type, o.key], (!r[o.type] || typeof r[o.type] != "object") && (r[o.type] = {}), (!r[o.type][o.key] || typeof r[o.type][o.key] != "object") && (r[o.type][o.key] = {}), r = r[o.type][o.key]), (o?.type === "enumeration" || o?.type === "plural" || o?.type === "condition") && o.type !== "enumeration" && o.type !== "plural" && (a = [o.type, o.key], r = r[o.type][o.key]), (o?.type === "markdown" || o?.type === "html" || o?.type === "insertion") && (a = [o.type], r[o.type] ?? (r[o.type] = ""), r = r[o.type]), o?.type === "file" && (a = ["content"], r = r.content), e === t.length - 1 && i && a.length > 0) {
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
	};
})), P, F = e((() => {
	l(), P = (e, t, n) => {
		let r = structuredClone(e);
		for (let e of t) n && r?.nodeType === "translation" && (r = r?.[d]?.[n]), (e.type === "object" || e.type === "array") && (r = r?.[e.key]), (e.type === "translation" || e.type === "condition" || e.type === "enumeration" || e.type === "plural" || e.type === "gender" || e.type === "select") && (r = r?.[e.type]?.[e.key]), (e.type === "markdown" || e.type === "html" || e.type === "insertion" || e.type === "file") && (r = r?.[e.type]);
		return r;
	};
})), I, L = e((() => {
	l(), I = (e, t, n) => {
		let r = e, i = null, a = null;
		for (let e of n) i = r, (e.type === "object" || e.type === "array") && (a = e.key, r = r[e.key]), (e.type === "translation" || e.type === "enumeration" || e.type === "plural" || e.type === "condition" || e.type === "gender" || e.type === "select") && (a = e.type, r = r[e.type][e.key]), (e.type === "markdown" || e.type === "reactNode" || e.type === "html" || e.type === "insertion" || e.type === "file") && (a = e.type, r = r[e.type]);
		if (i && a !== null) if (Array.isArray(i)) i[a] = r;
		else {
			let e = {};
			for (let n of Object.keys(i)) n === a && t !== void 0 ? e[t] = r : e[n] = i[n];
			Object.keys(i).forEach((e) => {
				delete i[e];
			}), Object.assign(i, e);
		}
		return e;
	};
})), R = e((() => {
	c(), v(), g(), N(), F(), L();
}));
export { j as a, T as c, p as d, h as f, M as i, D as l, I as n, k as o, P as r, E as s, R as t, _ as u };
import { n as e } from "./chunk-C3MyRVD9.js";
import { n as t, r as n } from "./built-k6nPQRRu.js";
import { Y as r, a as i, o as a, q as o, t as s } from "./interpreter-BteEm5XZ.js";
import { a as c, i as l, n as ee, o as te, r as u, t as ne } from "./dictionaryManipulator-BYDP92zH.js";
var d, re = e((() => {
	d = (e, t) => {
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
	};
})), f, ie = e((() => {
	f = (e) => {
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
	};
})), p, m, h, g, _, v, y = e((() => {
	p = "__intlayer_editor_manager__", m = "__intlayer_editor_manager_events__", h = () => {
		if (typeof window > "u") return new EventTarget();
		let e = window;
		return e[m] || (e[m] = new EventTarget()), e[m];
	}, g = () => typeof window > "u" ? null : window[p] ?? null, _ = (e) => {
		if (typeof window < "u") {
			let t = window;
			t[p] = e;
		}
		h().dispatchEvent(new CustomEvent("change", { detail: e }));
	}, v = (e) => {
		let t = h(), n = (t) => {
			e(t.detail);
		};
		return t.addEventListener("change", n), () => {
			t.removeEventListener("change", n);
		};
	};
})), b, x, S, ae = e((() => {
	y(), c(), r(), b = typeof HTMLElement < "u" ? HTMLElement : class {}, x = class extends b {
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
			let t = g();
			t && this._updateEditedValue(t);
		}
		get dictionaryKey() {
			return this._dictionaryKey;
		}
		set dictionaryKey(e) {
			this._dictionaryKey = e;
			let t = g();
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
				let e = g();
				e && this._updateEditedValue(e);
			} else if (e === "dictionary-key") {
				this._dictionaryKey = n ?? "";
				let e = g();
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
			return this._getRawKeyPath().filter((e) => e.type !== o);
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
			let i = e.getContentValue(this._dictionaryKey, t);
			if (typeof i == "object" && i && i.nodeType === "translation") {
				let t = e.currentLocale.value;
				i = t ? i[o][t] : void 0;
			}
			this._editedValue = i, this._render();
		}
		_updateIsSelected(e) {
			if (!e) {
				this._isSelected = !1, this._updateSelectorAttr();
				return;
			}
			let t = this._getFilteredKeyPath(), n = this._isSelected;
			this._isSelected = e.dictionaryKey === this._dictionaryKey && (e.keyPath?.length ?? 0) > 0 && te(e.keyPath ?? [], t), this._updateSelectorAttr(), this._isSelected && !n && this._scrollIntoViewIfNeeded();
		}
		_scrollIntoViewIfNeeded() {
			try {
				let e;
				if (this._selector) {
					let t = this._selector.shadowRoot?.querySelector(".wrapper");
					if (t) {
						let n = t.getBoundingClientRect();
						(n.width > 0 || n.height > 0) && (e = n);
					}
				}
				if (!e && this.childNodes.length > 0) {
					let t = document.createRange();
					t.selectNodeContents(this);
					let n = t.getBoundingClientRect();
					(n.width > 0 || n.height > 0) && (e = n);
				}
				e ||= this.getBoundingClientRect();
				let t = window.innerHeight || document.documentElement.clientHeight, n = window.innerWidth || document.documentElement.clientWidth;
				if (!(e.width > 0 && e.height > 0 && e.bottom > 0 && e.right > 0 && e.top < t && e.left < n)) {
					let n = window.scrollY ?? document.documentElement.scrollTop, r = e.top + n - t * .25;
					window.scrollTo({
						top: Math.max(0, r),
						behavior: "smooth"
					});
				}
			} catch {}
		}
		_updateSelectorAttr() {
			this._selector && (this._isSelected ? this._selector.setAttribute("is-selecting", "") : this._selector.removeAttribute("is-selecting"));
		}
		_subscribeToManager() {
			let e = g();
			e && this._setupManagerSubscriptions(e), this._unsubManager = v((e) => {
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
			let t = g();
			t && t.focusedContent.set({
				dictionaryKey: this._dictionaryKey,
				keyPath: this._getFilteredKeyPath()
			});
		}
		_handleHover(e) {
			e.stopPropagation(), g()?.messenger.send("INTLAYER_HOVERED_CONTENT_CHANGED/post", {
				dictionaryKey: this._dictionaryKey,
				keyPath: this._getFilteredKeyPath()
			});
		}
		_handleUnhover(e) {
			e.stopPropagation(), g()?.messenger.send("INTLAYER_HOVERED_CONTENT_CHANGED/post", null);
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
	}, S = () => {
		typeof customElements > "u" || customElements.get("intlayer-content-selector-wrapper") || customElements.define("intlayer-content-selector-wrapper", x);
	};
})), oe, C, w, se = e((() => {
	y(), s(), oe = typeof HTMLElement < "u" ? HTMLElement : class {}, C = class extends oe {
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
			let t = this._getKeyPath(), n = e.getContentValue(this._dictionaryKey, t);
			if (n == null) {
				this._editedText = null, this._render();
				return;
			}
			if (typeof n == "string" || typeof n == "number") {
				this._editedText = String(n), this._render();
				return;
			}
			if (typeof n == "object") {
				let e = this._locale || void 0, r = a(n, {
					locale: e,
					dictionaryKey: this._dictionaryKey,
					keyPath: t
				}, i(e));
				typeof r == "string" || typeof r == "number" ? this._editedText = String(r) : (console.error(`[intlayer-edited-content] Incorrect edited content format. Expected string. Value: ${JSON.stringify(r)}`), this._editedText = null), this._render();
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
			let e = g();
			e && this._setupManagerSubscriptions(e), this._unsubManager = v((e) => {
				this._unsubEditedContent?.(), this._unsubEditedContent = null, e ? this._setupManagerSubscriptions(e) : (this._editedText = null, this._render());
			});
		}
	}, w = () => {
		typeof customElements > "u" || customElements.get("intlayer-edited-content") || customElements.define("intlayer-edited-content", C);
	};
})), T, E, ce = e((() => {
	re(), T = () => Math.random().toString(36).slice(2), E = class {
		senderId;
		_config;
		_subscribers = /* @__PURE__ */ new Map();
		_windowHandler = null;
		_seenMessageIds = /* @__PURE__ */ new Set();
		_warnedRejectedOrigins = /* @__PURE__ */ new Set();
		constructor(e) {
			this._config = e, this.senderId = T();
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
				messageId: T()
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
			let { allowedOrigins: o } = this._config;
			if (!(!o || o.length === 0 || o.includes("*") || o.filter((e) => !!e && e !== "").some((t) => d(t, e.origin)))) {
				n.startsWith("INTLAYER") && !this._warnedRejectedOrigins.has(e.origin) && (this._warnedRejectedOrigins.add(e.origin), console.warn(`[intlayer] Ignored editor message "${n}" from origin "${e.origin}" — not in allowed origins [${o.join(", ")}]. Check the editor.editorURL / editor.cmsURL configuration.`));
				return;
			}
			let s = this._subscribers.get(n);
			if (s) for (let e of s) e(r, i);
		}
	};
})), D, le = e((() => {
	D = class extends EventTarget {
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
			let t = typeof e == "function" ? e(this._value) : e;
			this._value = t, this.dispatchEvent(new CustomEvent("change", { detail: t })), this._options.emit && this._messenger.send(`${this._key}/post`, t);
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
	};
})), O, k, A, j, M, N, ue = e((() => {
	O = "__intlayer_edited_content_bus__", k = "__intlayer_edited_content_bus_events__", A = () => {
		if (typeof window > "u") return new EventTarget();
		let e = window;
		return e[k] || (e[k] = new EventTarget()), e[k];
	}, j = () => typeof window > "u" ? {} : window[O] ?? {}, M = (e, t) => {
		typeof window < "u" && (window[O] = e), A().dispatchEvent(new CustomEvent("change", { detail: {
			content: e,
			sourceId: t
		} }));
	}, N = (e) => {
		let t = (t) => {
			let { content: n, sourceId: r } = t.detail;
			e(n, r);
		}, n = A();
		return n.addEventListener("change", t), () => n.removeEventListener("change", t);
	};
})), P, F, I, L, de, R, fe = e((() => {
	P = "__intlayer_focused_content_bus__", F = "__intlayer_focused_content_bus_events__", I = () => {
		if (typeof window > "u") return new EventTarget();
		let e = window;
		return e[F] || (e[F] = new EventTarget()), e[F];
	}, L = () => {
		if (typeof window > "u") return;
		let e = window;
		if (e.__intlayer_focused_content_bus_set__) return e[P] ?? null;
	}, de = (e, t) => {
		if (typeof window < "u") {
			let t = window;
			t[P] = e, t.__intlayer_focused_content_bus_set__ = !0;
		}
		I().dispatchEvent(new CustomEvent("change", { detail: {
			content: e,
			sourceId: t
		} }));
	}, R = (e) => {
		let t = (t) => {
			let { content: n, sourceId: r } = t.detail;
			e(n, r);
		}, n = I();
		return n.addEventListener("change", t), () => n.removeEventListener("change", t);
	};
})), z, pe = e((() => {
	ie(), z = class {
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
			this._unsubscribeMerge = this._messenger.subscribe("INTLAYER_IFRAME_CLICKED", f);
		}
		stopInterceptor() {
			this._mousedownHandler &&= (window.removeEventListener("mousedown", this._mousedownHandler), null);
		}
		stopMerger() {
			this._unsubscribeMerge?.(), this._unsubscribeMerge = null;
		}
	};
})), B, me = e((() => {
	B = class {
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
	};
})), V, he = e((() => {
	ce(), le(), ue(), fe(), pe(), me(), r(), ne(), V = class {
		messenger;
		editorEnabled;
		focusedContent;
		localeDictionaries;
		editedContent;
		configuration;
		currentLocale;
		displayedDictionaryKeys;
		_urlManager;
		_iframeInterceptor;
		_mode;
		_configuration;
		_unsubAreYouThere = null;
		_unsubActivate = null;
		_unsubClientReady = null;
		_displayedKeysObserver = null;
		_displayedKeysTimer = null;
		_displayedKeysListeners = [];
		_editedContentFromBus = !1;
		_unsubGlobalEditedContent = null;
		_editedContentBusHandler = null;
		_focusedContentFromBus = !1;
		_unsubGlobalFocusedContent = null;
		_focusedContentBusHandler = null;
		constructor(e) {
			this._mode = e.mode, this._configuration = e.configuration, this.messenger = new E(e.messenger), this.editorEnabled = new D("INTLAYER_EDITOR_ENABLED", this.messenger, {
				emit: !1,
				receive: !0,
				initialValue: !1
			}), this.focusedContent = new D("INTLAYER_FOCUSED_CONTENT_CHANGED", this.messenger, {
				emit: !0,
				receive: !0,
				initialValue: null
			}), this.localeDictionaries = new D("INTLAYER_LOCALE_DICTIONARIES_CHANGED", this.messenger), this.editedContent = new D("INTLAYER_EDITED_CONTENT_CHANGED", this.messenger), this.configuration = new D("INTLAYER_CONFIGURATION", this.messenger, {
				emit: !0,
				receive: !1,
				...e.configuration ? { initialValue: e.configuration } : {}
			}), this.currentLocale = new D("INTLAYER_CURRENT_LOCALE", this.messenger, {
				emit: e.mode === "client",
				receive: e.mode === "editor"
			}), this.displayedDictionaryKeys = new D("INTLAYER_DISPLAYED_DICTIONARY_KEYS", this.messenger, {
				emit: e.mode === "client",
				receive: e.mode === "editor",
				initialValue: []
			}), this._urlManager = new B(this.messenger), this._iframeInterceptor = new z(this.messenger);
		}
		start() {
			this.messenger.start(), this.editorEnabled.start(), this.focusedContent.start(), this.localeDictionaries.start(), this.editedContent.start(), this.configuration.start(), this.currentLocale.start(), this.displayedDictionaryKeys.start(), this._startEditedContentBusSync(), this._startFocusedContentBusSync(), this._mode === "client" ? (this._urlManager.start(), this._iframeInterceptor.startInterceptor(), this._loadDictionaries(), this._startDisplayedDictionariesTracking(), this.messenger.send("INTLAYER_EDITED_CONTENT_CHANGED/get"), this._configuration?.editor?.enabled !== !1 && this._setupActivationHandshake()) : (this._iframeInterceptor.startMerger(), this._setupEditorHandshake());
		}
		stop() {
			this._unsubAreYouThere?.(), this._unsubActivate?.(), this._unsubClientReady?.(), this._unsubAreYouThere = null, this._unsubActivate = null, this._unsubClientReady = null, this.messenger.stop(), this.editorEnabled.stop(), this.focusedContent.stop(), this.localeDictionaries.stop(), this.editedContent.stop(), this.configuration.stop(), this.currentLocale.stop(), this.displayedDictionaryKeys.stop(), this._stopDisplayedDictionariesTracking(), this._stopEditedContentBusSync(), this._stopFocusedContentBusSync(), this._urlManager.stop(), this._iframeInterceptor.stopInterceptor(), this._iframeInterceptor.stopMerger();
		}
		pingClient() {
			this._mode === "editor" && this.messenger.send("INTLAYER_ARE_YOU_THERE");
		}
		setFocusedContentKeyPath(e) {
			let t = e.filter((e) => e.type !== o), n = this.focusedContent.value;
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
				for (; u(o, s) !== void 0;) e++, i = e === 0 ? r.key : `${r.key} (${e})`, s = [...t, {
					...r,
					key: i
				}];
			}
			let c = l(o, s, t);
			this.editedContent.set({
				...i,
				[e]: {
					...i[e],
					content: c
				}
			});
		}
		renameContent(e, t, n = []) {
			let r = this.editedContent.value ?? {}, i = (this.localeDictionaries.value ?? {})[e]?.content, a = ee(structuredClone(r[e]?.content ?? i), t, n);
			this.editedContent.set({
				...r,
				[e]: {
					...r[e],
					content: a
				}
			});
		}
		removeContent(e, t) {
			let n = this.editedContent.value ?? {}, r = (this.localeDictionaries.value ?? {})[e]?.content, i = l(structuredClone(n[e]?.content ?? r), t, u(r, t));
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
			let r = t.filter((e) => e.type !== o), i = this.localeDictionaries.value;
			if (e.includes(":local:") || e.includes(":remote:")) return i && !(e in i) ? void 0 : u(n[e]?.content ?? {}, r, this.currentLocale.value);
			let a = Object.keys(n).filter((t) => t.startsWith(`${e}:`) && (!i || t in i));
			for (let e of a) {
				let t = u(n[e]?.content ?? {}, r, this.currentLocale.value);
				if (t) return t;
			}
		}
		_startEditedContentBusSync() {
			this._editedContentBusHandler = (e) => {
				if (this._editedContentFromBus) return;
				let t = e.detail;
				M(t, this.messenger.senderId);
			}, this.editedContent.addEventListener("change", this._editedContentBusHandler), this._unsubGlobalEditedContent = N((e, t) => {
				t !== this.messenger.senderId && (this._editedContentFromBus = !0, this.editedContent.set(e), this._editedContentFromBus = !1);
			});
			let e = j();
			Object.keys(e).length > 0 && (this._editedContentFromBus = !0, this.editedContent.set(e), this._editedContentFromBus = !1);
		}
		_stopEditedContentBusSync() {
			this._editedContentBusHandler &&= (this.editedContent.removeEventListener("change", this._editedContentBusHandler), null), this._unsubGlobalEditedContent?.(), this._unsubGlobalEditedContent = null;
		}
		_startFocusedContentBusSync() {
			this._focusedContentBusHandler = (e) => {
				if (this._focusedContentFromBus) return;
				let t = e.detail;
				de(t, this.messenger.senderId);
			}, this.focusedContent.addEventListener("change", this._focusedContentBusHandler), this._unsubGlobalFocusedContent = R((e, t) => {
				t !== this.messenger.senderId && (this._focusedContentFromBus = !0, this.focusedContent.set(e), this._focusedContentFromBus = !1);
			});
			let e = L();
			e !== void 0 && (this._focusedContentFromBus = !0, this.focusedContent.set(e), this._focusedContentFromBus = !1);
		}
		_stopFocusedContentBusSync() {
			this._focusedContentBusHandler &&= (this.focusedContent.removeEventListener("change", this._focusedContentBusHandler), null), this._unsubGlobalFocusedContent?.(), this._unsubGlobalFocusedContent = null;
		}
		_scanDisplayedDictionaryKeys() {
			if (typeof document > "u") return;
			let e = document.querySelectorAll("intlayer-content-selector-wrapper[dictionary-key]"), t = Array.from(new Set(Array.from(e).map((e) => e.getAttribute("dictionary-key") ?? "").filter(Boolean)));
			this.displayedDictionaryKeys.set(t);
		}
		_startDisplayedDictionariesTracking() {
			if (typeof document > "u" || typeof MutationObserver > "u") return;
			let e = () => {
				this._displayedKeysTimer && clearTimeout(this._displayedKeysTimer), this._displayedKeysTimer = setTimeout(() => this._scanDisplayedDictionaryKeys(), 100);
			};
			this._displayedKeysObserver = new MutationObserver(e), this._displayedKeysObserver.observe(document.body, {
				childList: !0,
				subtree: !0
			});
			for (let t of ["locationchange", "popstate"]) {
				let n = e;
				window.addEventListener(t, n), this._displayedKeysListeners.push([t, n]);
			}
			this._scanDisplayedDictionaryKeys();
		}
		_stopDisplayedDictionariesTracking() {
			this._displayedKeysObserver?.disconnect(), this._displayedKeysObserver = null, this._displayedKeysTimer &&= (clearTimeout(this._displayedKeysTimer), null);
			for (let [e, t] of this._displayedKeysListeners) window.removeEventListener(e, t);
			this._displayedKeysListeners = [];
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
				let e = (await import("./index.browser-Cbyl0WCq.js")).getUnmergedDictionaries(), t = Object.fromEntries(Object.values(e).flat().map((e) => [e.localId, e]));
				this.localeDictionaries.set(t), this.editorEnabled.value && this._broadcastData();
			} catch (e) {
				console.warn("[intlayer] Failed to load unmerged dictionaries:", e);
			}
		}
	};
})), H, U, W, ge = e((() => {
	y(), ve(), H = typeof HTMLElement < "u" ? HTMLElement : class {}, U = class extends H {
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
			this._unsubManager?.(), this._unsubManager = null, this._initialized &&= ($(), !1);
		}
		_init() {
			this._initialized || (Q(), this._initialized = !0, this._locale && this._syncLocale(this._locale));
		}
		_syncLocale(e) {
			let t = g();
			t ? t.currentLocale.set(e) : (this._unsubManager?.(), this._unsubManager = v((t) => {
				t && (this._unsubManager?.(), this._unsubManager = null, t.currentLocale.set(e));
			}));
		}
	}, W = () => {
		typeof customElements > "u" || customElements.get("intlayer-editor") || customElements.define("intlayer-editor", U);
	};
})), G, K, q, J, Y, _e = e((() => {
	ae(), se(), ge(), G = 250, K = "\n  :host {\n    display: contents;\n  }\n\n  .wrapper {\n    display: inline-block;\n    cursor: pointer;\n    user-select: none;\n    border-radius: 0.375rem;\n    outline-width: 2px;\n    outline-offset: 4px;\n    outline-style: solid;\n    outline-color: transparent;\n    transition: all 100ms 50ms ease-in-out;\n  }\n\n  .wrapper[data-active] {\n    outline-color: inherit;\n  }\n", q = typeof HTMLElement < "u" ? HTMLElement : class {}, J = class extends q {
		_isSelecting = !1;
		_pressDuration = G;
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
			t.textContent = K, e.appendChild(t);
			let n = document.createElement("span");
			n.className = "wrapper", n.setAttribute("role", "button"), n.setAttribute("tabindex", "0"), n.appendChild(document.createElement("slot")), e.appendChild(n), this._wrapper = n, n.addEventListener("mousedown", () => this._handleMouseDown()), n.addEventListener("mouseup", () => this._handleMouseUpOrLeave()), n.addEventListener("mouseleave", () => this._handleMouseUpOrLeave()), n.addEventListener("mouseenter", () => this._handleMouseEnter()), n.addEventListener("click", (e) => this._handleClick(e)), n.addEventListener("touchstart", () => this._handleMouseDown()), n.addEventListener("touchend", () => this._handleMouseUpOrLeave()), n.addEventListener("touchcancel", () => this._handleMouseUpOrLeave()), n.addEventListener("blur", () => this._handleBlur());
		}
		attributeChangedCallback(e, t, n) {
			e === "is-selecting" ? (this._isSelecting = n !== null, this._updateActiveState()) : e === "press-duration" && (this._pressDuration = n === null ? G : parseInt(n, 10));
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
	}, Y = () => {
		typeof customElements > "u" || (customElements.get("intlayer-content-selector") || customElements.define("intlayer-content-selector", J), S(), w(), W());
	};
})), X, Z, Q, $, ve = e((() => {
	y(), he(), _e(), n(), X = () => {
		let e = typeof window < "u" ? window.location.origin : void 0;
		return {
			allowedOrigins: [...new Set([
				t?.editorURL,
				t?.cmsURL,
				e
			].filter(Boolean))],
			postMessageFn: (e, t) => {
				typeof window > "u" || window.self !== window.top && window.parent?.postMessage(e, t);
			}
		};
	}, Z = 0, Q = () => {
		Z++;
		let e = g();
		if (e) return e;
		let n = new V({
			mode: "client",
			messenger: X(),
			configuration: { editor: t }
		});
		return _(n), Y(), n.start(), n;
	}, $ = () => {
		Z = Math.max(0, Z - 1), !(Z > 0) && (g()?.stop(), _(null));
	};
}));
e((() => {
	ve();
}))();
export { Q as initEditorClient, $ as stopEditorClient };
import { n as e } from "./chunk-C3MyRVD9.js";
import { n as t, r as n, t as r } from "./built-k6nPQRRu.js";
import { n as i, r as a } from "./isBot-BXPlwgiv.js";
var o, s = e((() => {
	o = (e) => {
		let t = 2166136261;
		for (let n = 0; n < e.length; n++) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
		return t >>> 0;
	};
})), c, l = e((() => {
	s(), c = (e, t, n, r) => {
		if (n.length === 0) throw Error("assignVariant requires at least one variant");
		if (n.length === 1) return n[0];
		let i = o(`${e}:${t}`) / 4294967296;
		if (!r || r.length !== n.length) {
			let e = Math.floor(i * n.length);
			return n[Math.min(e, n.length - 1)];
		}
		let a = r.reduce((e, t) => e + t, 0);
		if (a <= 0) return n[Math.floor(i * n.length)];
		let s = 0, c = i * a;
		for (let e = 0; e < n.length; e++) if (s += r[e], c < s) return n[e];
		return n[n.length - 1];
	};
})), u, d, f, p = e((() => {
	u = "", d = (e) => [
		e.url,
		e.dictionaryKey,
		e.keyPath,
		e.locale,
		e.experimentKey ?? "",
		e.variant ?? ""
	].join(u), f = ({ max: e }) => {
		let t = [], n = /* @__PURE__ */ new Map(), r = () => t.length + n.size, i = () => {
			for (; r() > e && n.size > 0;) {
				let e = n.keys().next().value;
				n.delete(e);
			}
			r() > e && (t = t.slice(r() - e));
		};
		return {
			push: (e) => {
				if (e.type === "content_exposure") {
					let t = d(e), r = n.get(t);
					r ? (r.count = (r.count ?? 1) + (e.count ?? 1), r.t = e.t) : n.set(t, {
						...e,
						count: e.count ?? 1
					});
				} else t.push(e);
				return i(), r();
			},
			drain: () => {
				let e = [...t, ...n.values()];
				return t = [], n.clear(), e;
			},
			size: r
		};
	};
})), m, h = e((() => {
	s(), m = (e, t) => t >= 1 ? !0 : t <= 0 ? !1 : o(e) / 4294967295 < t;
})), g, _, v, y = e((() => {
	g = "__intlayer_analytics_sid__", _ = () => {
		let e = typeof globalThis < "u" ? globalThis.crypto : void 0;
		return e?.randomUUID ? e.randomUUID() : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
	}, v = () => {
		if (typeof window > "u" || !window.sessionStorage) return _();
		try {
			let e = window.sessionStorage.getItem(g);
			if (e) return e;
			let t = _();
			return window.sessionStorage.setItem(g, t), t;
		} catch {
			return _();
		}
	};
})), b, x = e((() => {
	b = (e, t, { useBeacon: n = !1, token: r } = {}) => {
		try {
			let i = JSON.stringify(t);
			return n && typeof navigator < "u" && typeof navigator.sendBeacon == "function" ? navigator.sendBeacon(e, i) : typeof fetch == "function" ? (fetch(e, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					...r ? { Authorization: `Bearer ${r}` } : {}
				},
				body: i,
				keepalive: !0,
				credentials: "omit",
				mode: "cors"
			}).catch(() => {}), !0) : !1;
		} catch {
			return !1;
		}
	};
})), S, C = e((() => {
	S = (e) => {
		if (typeof window > "u") return;
		let t = window.requestIdleCallback;
		if (typeof t == "function") {
			t(() => e());
			return;
		}
		setTimeout(e, 1);
	};
})), w, T, E, D, O, k = e((() => {
	w = "__intlayer_public_token__", T = 6e4, E = () => {
		try {
			let e = window.sessionStorage?.getItem(w);
			if (!e) return null;
			let t = JSON.parse(e);
			return typeof t?.token != "string" || typeof t?.expiresAt != "number" ? null : t;
		} catch {
			return null;
		}
	}, D = (e) => {
		try {
			window.sessionStorage?.setItem(w, JSON.stringify(e));
		} catch {}
	}, O = ({ backendURL: e, clientId: t }) => {
		let n = `${e.replace(/\/$/, "")}/api/public/token`, r = null, i = null, a = (e) => e !== null && e.expiresAt - T > Date.now(), o = () => {
			if (a(r)) return r.token;
			if (typeof window < "u") {
				let e = E();
				if (a(e)) return r = e, e.token;
			}
		}, s = async () => {
			try {
				let e = await fetch(n, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ clientId: t }),
					credentials: "omit",
					mode: "cors"
				});
				if (!e.ok) return;
				let i = await e.json(), a = i?.data?.token, o = i?.data?.expiresIn ?? 0;
				if (!a || o <= 0) return;
				r = {
					token: a,
					expiresAt: Date.now() + o * 1e3
				}, typeof window < "u" && D(r);
			} catch {} finally {
				i = null;
			}
		};
		return {
			getToken: o,
			prime: () => {
				!t || typeof fetch != "function" || o() || (i ||= s());
			}
		};
	};
})), A, j, M, N, P = e((() => {
	i(), C(), l(), p(), k(), h(), y(), x(), A = "intlayer-analytics/1", j = () => typeof window > "u" || !window.location ? "" : window.location.pathname, M = () => {
		if (!(typeof document > "u" || !document.referrer)) try {
			return new URL(document.referrer).host;
		} catch {
			return;
		}
	}, N = (e) => {
		let t = v(), n = a(), r = !n && m(t, e.sampleRate), i = f({ max: e.maxBufferSize }), o = `${e.backendURL.replace(/\/$/, "")}/api/analytics/events`, s = O({
			backendURL: e.backendURL,
			clientId: e.clientId
		}), l = "", u = null, d = !1, p = null, h = null, g = /* @__PURE__ */ new Set(), _ = (n = !1) => {
			let r = i.drain(), a = s.getToken();
			for (let i = 0; i < r.length; i += 200) b(o, {
				token: a,
				clientId: a ? void 0 : e.clientId,
				sessionId: t,
				sdkVersion: A,
				events: r.slice(i, i + 200)
			}, {
				useBeacon: n,
				token: a
			});
		}, y = (t) => {
			i.push(t) >= e.maxBufferSize && _();
		}, x = (e) => {
			l = e;
		}, C = (e = {}) => {
			if (!r) return;
			let t = e.url ?? j(), n = e.reason ?? "initial";
			n === "route_change" && t === h || (h = t, g = /* @__PURE__ */ new Set(), y({
				type: "page_view",
				t: Date.now(),
				url: t,
				locale: e.locale ?? l,
				ref: e.ref ?? M(),
				vw: e.vw ?? (typeof window < "u" ? window.innerWidth : void 0),
				vh: e.vh ?? (typeof window < "u" ? window.innerHeight : void 0),
				reason: n
			}));
		}, w = (e) => {
			if (!r) return;
			let t = e.locale ?? l, n = [
				e.dictionaryKey,
				e.keyPath,
				t,
				e.experimentKey ?? "",
				e.variant ?? ""
			].join("");
			g.has(n) || (g.add(n), y({
				...e,
				type: "content_exposure",
				t: Date.now(),
				url: j(),
				locale: t
			}));
		}, T = (e) => {
			n || (y({
				...e,
				type: "conversion",
				t: Date.now(),
				url: j(),
				locale: e.locale ?? l
			}), _());
		}, E = (e, n, r) => c(t, e, n, r), D = () => {
			if (typeof window > "u") return;
			let e = () => {
				document.visibilityState === "hidden" && _(!0);
			}, t = () => _(!0), n = () => C({ reason: "route_change" });
			document.addEventListener("visibilitychange", e), window.addEventListener("pagehide", t, { capture: !0 }), window.addEventListener("popstate", n);
			let r = window.history, i = r.pushState, a = function(...e) {
				let t = i.apply(this, e);
				return C({ reason: "route_change" }), t;
			};
			r.pushState = a, p = () => {
				document.removeEventListener("visibilitychange", e), window.removeEventListener("pagehide", t, { capture: !0 }), window.removeEventListener("popstate", n), r.pushState === a && (r.pushState = i);
			};
		};
		return {
			setLocale: x,
			trackPageView: C,
			trackContentExposure: w,
			trackConversion: T,
			getVariant: E,
			flush: _,
			start: () => {
				d || n || (d = !0, s.prime(), u = setInterval(_, e.flushInterval), u?.unref?.(), S(D));
			},
			stop: () => {
				d && (d = !1, u &&= (clearInterval(u), null), p?.(), p = null, _(!0));
			}
		};
	};
})), F, I, L, R, z, B, V = e((() => {
	F = "__intlayer_analytics_client__", I = "__intlayer_analytics_ref_count__", L = () => typeof window > "u" ? null : window[F] ?? null, R = (e) => {
		typeof window > "u" || (window[F] = e);
	}, z = () => {
		if (typeof window > "u") return 0;
		let e = window;
		return e[I] = (e[I] ?? 0) + 1, e[I];
	}, B = () => {
		if (typeof window > "u") return 0;
		let e = window;
		return e[I] = Math.max(0, (e[I] ?? 0) - 1), e[I];
	};
})), H, U, W = e((() => {
	P(), V(), n(), H = () => {
		z();
		let e = L();
		if (e) return e;
		let n = N({
			backendURL: t?.backendURL ?? "",
			clientId: t?.clientId,
			flushInterval: r?.flushInterval ?? 2e4,
			maxBufferSize: 500,
			sampleRate: r?.sampleRate ?? 1
		});
		return R(n), n.start(), n;
	}, U = () => {
		B() > 0 || (L()?.stop(), R(null));
	};
})), G, K, q = e((() => {
	G = (e) => e.map((e) => e.key === void 0 ? "*" : String(e.key)).join("."), K = (e) => ({
		dictionaryKey: e.dictionaryKey,
		keyPath: G(e.keyPath),
		locale: e.locale,
		nodeType: e.nodeType,
		experimentKey: e.experimentKey,
		variant: e.variant
	});
}));
e((() => {
	V(), W(), q();
}))();
export { K as buildContentExposure, L as getGlobalAnalyticsClient, H as initAnalyticsClient, U as stopAnalyticsClient };
import { n as e } from "./chunk-C3MyRVD9.js";
import { n as t, t as n } from "./parseYaml-CTv8ghn0.js";
var r, i = e((() => {
	n(), r = (e) => {
		try {
			let n = e.split(/\r?\n/);
			if (n.find((e) => e.trim() !== "")?.trim() !== "---") return {};
			let r = -1;
			for (let e = 1; e < n.length; e++) if (n[e]?.trim() === "---") {
				r = e;
				break;
			}
			return r === -1 ? {} : t(n.slice(1, r).join("\n")) ?? {};
		} catch {
			return {};
		}
	};
}));
export { i as n, r as t };
import { n as e } from "./chunk-C3MyRVD9.js";
var t;
e((() => {
	t = () => ({});
}))();
export { t as getUnmergedDictionaries };
import { n as e, r as t } from "./chunk-C3MyRVD9.js";
import { a as n, c as r, i, l as a, r as o, u as s } from "./built-k6nPQRRu.js";
var c = t({ getDictionaries: () => l }), l, u = e((() => {
	l = () => ({});
})), d, f, p, m, h, g, ee, te, _, ne = e((() => {
	d = /* @__PURE__ */ new WeakMap(), f = 0, p = (e) => {
		if (!e) return "base";
		let t = d.get(e);
		if (t) return t;
		f += 1;
		let n = `p${f}`;
		return d.set(e, n), n;
	}, m = 256, h = /* @__PURE__ */ new WeakMap(), g = (e) => typeof e == "object" && !!e, ee = (e, t, n) => `${e}_${t}_${p(n)}`, te = (e, t) => {
		if (!g(e)) return { hit: !1 };
		let n = h.get(e);
		return n?.has(t) ? {
			hit: !0,
			content: n.get(t)
		} : { hit: !1 };
	}, _ = (e, t, n) => {
		if (!g(e)) return n;
		let r = h.get(e);
		return r || (r = /* @__PURE__ */ new Map(), h.set(e, r)), r.size >= m && r.clear(), r.set(t, n), n;
	};
})), re, ie = e((() => {
	re = (e, t) => {
		let n = Object.keys(e), r = n[n.length - 1];
		return e[`${t}`] ?? e.fallback ?? e[r];
	};
})), v, y, b, x, S, ae, C, oe, se, ce, w, T, E, D, le, O = e((() => {
	v = "translation", y = "enumeration", b = "plural", x = "condition", S = "insertion", ae = "file", C = "object", oe = "array", se = "nested", ce = "reactNode", w = "markdown", T = "html", E = "gender", D = "select", le = (e, t, n) => ({
		...n,
		nodeType: e,
		[e]: t
	});
})), k, ue = e((() => {
	O(), k = (e, t) => {
		for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => k(e, t));
		if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
		if (Array.isArray(e)) return e.map((e, n) => k(e, {
			...t,
			children: e,
			keyPath: [...t.keyPath, {
				type: oe,
				key: n
			}]
		}));
		let n = {};
		for (let r in e) {
			let i = {
				...t,
				children: e[r],
				keyPath: [...t.keyPath, {
					type: C,
					key: r
				}]
			};
			if (t.eager) {
				n[r] = k(e[r], i);
				continue;
			}
			Object.defineProperty(n, r, {
				enumerable: !0,
				configurable: !0,
				get: function() {
					let t = k(e[r], i);
					return Object.defineProperty(this, r, {
						value: t,
						enumerable: !0,
						configurable: !0
					}), t;
				}
			});
		}
		return n;
	};
})), de, A, fe = e((() => {
	de = (e, t) => {
		let n = Object.keys(e);
		for (let e of n) {
			let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
			if (n || r || i || a || o) return e;
		}
	}, A = (e, t) => e[de(e, t) ?? "fallback"];
})), pe, me, he = e((() => {
	pe = (e) => e === "m" || e === "male" ? "male" : e === "f" || e === "female" ? "female" : "fallback", me = (e, t) => {
		let n = Object.keys(e), r = n[n.length - 1];
		return e[pe(t)] ?? e.fallback ?? e[r];
	};
})), j, ge = e((() => {
	j = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString());
})), M, _e, N, ve, P, F, I, L, ye, be, xe, Se, R, Ce, we, z, Te = e((() => {
	M = "default", _e = /[^A-Za-z0-9._&=-]/g, N = /[^A-Za-z0-9._-]/g, ve = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, P = (e, t) => {
		if (e === "") return "%";
		let n = e.replace(t, ve);
		return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
	}, F = (e) => e === void 0 ? M : typeof e == "string" ? P(e, _e) : Object.keys(e).sort().map((t) => `${P(t, N)}=${P(String(e[t]), N)}`).join("&"), I = (e) => Array.isArray(e) ? e.length === 0 ? [M] : e.map(F) : [F(e)], L = (e, t) => {
		for (let n of e) if (t(n)) return n;
		return t("default") ? M : e[0] ?? "default";
	}, ye = (e, t, n, r) => {
		let i = e.split("/");
		return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
	}, be = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, xe = (e, t) => {
		let n = t.split("/"), r = {
			key: e.key,
			content: e.content[t]
		};
		return e.qualifierTypes.forEach((e, t) => {
			e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
		}), r;
	}, Se = (e, t) => {
		if (!be(e)) return e;
		let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? M : L(I(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ye(e, n, t, s)).map((t) => xe(e, t));
		return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
	}, R = (e) => typeof e == "object" && e ? {
		locale: e.locale,
		selector: e
	} : { locale: e }, Ce = (e, t) => {
		if (e === void 0) return;
		if (typeof e == "string" || Array.isArray(e)) return e;
		let n = e;
		return n[t] ?? n.default;
	}, we = (e) => {
		let { localeOrSelector: t, contextLocale: n, contextVariant: r, dictionaryKey: i } = e, a = typeof t == "object" && t ? t : void 0, o = (a ? a.locale : t) ?? n, s = a?.variant ?? Ce(r, i);
		return s === void 0 ? a ? {
			...a,
			locale: o
		} : o : {
			...a,
			locale: o,
			variant: s
		};
	}, z = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
		let n = e[t];
		return `${t}:${t === "variant" ? I(n).join(",") : String(n)}`;
	}).join("|") : "";
})), Ee, B, V, H, De = e((() => {
	st(), o(), s(), u(), Ee = new Set([
		"hasOwnProperty",
		"isPrototypeOf",
		"propertyIsEnumerable",
		"toLocaleString"
	]), B = (e = "") => new Proxy((() => e), { get: (t, n) => {
		if (n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf") return () => e;
		if (n !== "then") return Ee.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
			yield e;
		} : B(e ? `${e}.${String(n)}` : String(n));
	} }), V = /* @__PURE__ */ new Set(), H = (e, t, i) => {
		let o = l()[e];
		return o ? Z(o, t, i) : (V.has(e) || (a({ log: n })(typeof window > "u" ? `Dictionary ${r(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), V.add(e)), B(e));
	};
})), Oe, ke = e((() => {
	De(), Oe = (e, t, n) => {
		let r = H(e, n?.locale, n?.plugins);
		if (typeof t == "string") {
			let e = t.split("."), n = r;
			for (let t of e) if (n = n?.[t], n === void 0) return r;
			return n;
		}
		return r;
	};
})), Ae, je, Me = e((() => {
	st(), Ae = (e, t) => {
		let n = e;
		for (let r of t.split(".")) if (n = n?.[r], n === void 0) return e;
		return n;
	}, je = (e, t, n) => {
		let r = n?.nestedDictionaries, i = r?.[e];
		if (!i) return;
		let a = Z({
			...i,
			nestedDictionaries: {
				...r,
				...i.nestedDictionaries
			}
		}, n?.locale, n?.plugins);
		return typeof t == "string" ? Ae(a, t) : a;
	};
}));
function Ne(e, t, n) {
	let r = t ?? i?.defaultLocale, a = `${r}|${n ? JSON.stringify(n) : ""}`, o = e, s = U.get(o);
	s || (s = /* @__PURE__ */ new Map(), U.set(o, s));
	let c = s.get(a);
	if (!c) {
		let t = typeof e == "string" ? Le(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		s.size > Pe && s.clear(), c = new t(r, n), s.set(a, c);
	}
	return c;
}
var Pe, U, W, Fe, Ie, Le, Re = e((() => {
	o(), Pe = 50, U = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Set(), Fe = (e) => {
		W.has(e) || (W.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
	}, Ie = {
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
	}, Le = (e) => {
		let t = Intl[e];
		return typeof t == "function" ? t : (Fe(e), Ie[e]);
	};
})), G, ze = e((() => {
	Re(), G = (e, t, n) => e[Ne("PluralRules", n).select(t)] ?? e.other;
})), K, Be = e((() => {
	K = (e, t) => {
		let n = Object.keys(e), r = n[n.length - 1];
		return e[t] ?? e.fallback ?? e.other ?? e[r];
	};
})), Ve, He, Ue, We = e((() => {
	Ve = (e) => {
		if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
		let t = Object.getPrototypeOf(e);
		return t === Object.prototype || t === null || Array.isArray(e);
	}, He = (e, t) => {
		if (e === void 0) return t;
		if (t === void 0 || Array.isArray(e)) return e;
		if (Ve(e) && Ve(t)) {
			let n = { ...e };
			for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : He(e[r], t[r]));
			return n;
		}
		return e;
	}, Ue = (e, t, n) => {
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
		if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => He(e, t));
	};
})), q, Ge, Ke, J, qe = e((() => {
	ge(), O(), q = (e) => {
		if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
		let { nodeType: t } = e;
		return process.env.INTLAYER_NODE_TYPE_HTML !== "false" && t === "html" || process.env.INTLAYER_NODE_TYPE_MARKDOWN !== "false" && t === "markdown";
	}, Ge = (e) => {
		if (typeof e == "string") return e;
		if (q(e)) return e.nodeType === "html" ? e[T] : e[w];
	}, Ke = (e, t) => {
		if (typeof e == "string") return t;
		if (q(e)) {
			let n = e.nodeType === "html" ? T : w;
			return {
				...e,
				[n]: t
			};
		}
		return e;
	}, J = (e, t, n, r, i) => {
		let a = Ke(e, j(Ge(e), t));
		return i(a, {
			...n,
			plugins: r,
			children: a
		});
	};
})), Y, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it = e((() => {
	ie(), fe(), he(), ge(), ke(), Me(), ze(), Be(), We(), qe(), O(), Y = {
		id: "fallback-plugin",
		canHandle: () => !1,
		transform: (e) => e
	}, Je = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? Y : {
		id: "translation-plugin",
		canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
		transform: (n, r, i) => {
			let a = n.translation ?? {}, o = {};
			for (let e in a) {
				let t = {
					...r,
					children: a[e],
					keyPath: [...r.keyPath, {
						type: v,
						key: e
					}]
				};
				o[e] = i(a[e], t);
			}
			return Ue(o, e, t);
		}
	}, Ye = process.env.INTLAYER_NODE_TYPE_ENUMERATION === "false" ? Y : {
		id: "enumeration-plugin",
		canHandle: (e) => typeof e == "object" && e?.nodeType === "enumeration",
		transform: (e, t, n) => {
			let r = e[y], i = {};
			for (let e in r) {
				let a = r[e];
				i[e] = n(a, {
					...t,
					children: a,
					keyPath: [...t.keyPath, {
						type: y,
						key: e
					}]
				});
			}
			return (e) => {
				let t = A(i, typeof e == "number" ? e : e.count);
				return typeof t == "function" && typeof e == "object" ? t(e) : t;
			};
		}
	}, Xe = (e) => process.env.INTLAYER_NODE_TYPE_PLURAL === "false" ? Y : {
		id: "plural-plugin",
		canHandle: (e) => typeof e == "object" && e?.nodeType === "plural",
		transform: (t, n, r) => {
			let i = t[b], a = {}, o = {
				id: "plural-string-plugin",
				canHandle: (e) => typeof e == "string" || q(e),
				transform: (e, t, r) => {
					if (q(e)) return (i) => J(e, i, t, n.plugins, r);
					let i = r(e, {
						...t,
						children: e,
						plugins: [...(n.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
					});
					return (e) => {
						let a = j(i, e);
						return r(a, {
							...t,
							plugins: n.plugins,
							children: a
						});
					};
				}
			};
			for (let e in i) {
				let t = i[e];
				a[e] = r(t, {
					...n,
					children: t,
					keyPath: [...n.keyPath, {
						type: b,
						key: e
					}],
					plugins: [o, ...n.plugins ?? []]
				});
			}
			let s = String(e ?? n.locale ?? "en");
			return (e) => {
				let t = typeof e == "number" ? e : e.count, n = typeof e == "number" ? { count: e } : e, r = G(a, t, s);
				return typeof r == "function" ? r(n) : r;
			};
		}
	}, Ze = process.env.INTLAYER_NODE_TYPE_CONDITION === "false" ? Y : {
		id: "condition-plugin",
		canHandle: (e) => typeof e == "object" && e?.nodeType === "condition",
		transform: (e, t, n) => {
			let r = e[x], i = {};
			for (let e in r) {
				let a = r[e];
				i[e] = n(a, {
					...t,
					children: a,
					keyPath: [...t.keyPath, {
						type: x,
						key: e
					}]
				});
			}
			return (e) => {
				let t = re(i, typeof e == "boolean" ? e : e.value);
				return typeof t == "function" && typeof e == "object" ? t(e) : t;
			};
		}
	}, Qe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
		id: "insertion-plugin",
		canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
		transform: (e, t, n) => {
			let r = [...t.keyPath, { type: S }], i = e[S], a = {
				id: "insertion-string-plugin",
				canHandle: (e) => typeof e == "string" || q(e),
				transform: (e, n, r) => {
					if (q(e)) return (i) => J(e, i, n, t.plugins, r);
					let i = r(e, {
						...n,
						children: e,
						plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
					});
					return (e) => {
						let a = j(i, e);
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
	}, $e = process.env.INTLAYER_NODE_TYPE_GENDER === "false" ? Y : {
		id: "gender-plugin",
		canHandle: (e) => typeof e == "object" && e?.nodeType === "gender",
		transform: (e, t, n) => {
			let r = e[E], i = {};
			for (let e in r) {
				let a = r[e];
				i[e] = n(a, {
					...t,
					children: a,
					keyPath: [...t.keyPath, {
						type: E,
						key: e
					}]
				});
			}
			return (e) => me(i, e);
		}
	}, et = process.env.INTLAYER_NODE_TYPE_SELECT === "false" ? Y : {
		id: "select-plugin",
		canHandle: (e) => typeof e == "object" && e?.nodeType === "select",
		transform: (e, t, n) => {
			let r = e[D], i = {};
			for (let e in r) {
				let a = r[e];
				i[e] = n(a, {
					...t,
					children: a,
					keyPath: [...t.keyPath, {
						type: D,
						key: e
					}]
				});
			}
			return (e) => {
				let t = K(i, typeof e == "string" ? e : e?.value);
				return typeof t == "function" && typeof e == "object" ? t(e) : t;
			};
		}
	}, tt = process.env.INTLAYER_OPTIMIZED_NESTING === "true" ? je : Oe, nt = (e) => process.env.INTLAYER_NODE_TYPE_NESTED === "false" ? Y : {
		id: "nested-plugin",
		canHandle: (e) => typeof e == "object" && (e?.nodeType === "nested" || e?.nodeType === "n"),
		transform: (t, n) => tt(t[se].dictionaryKey, t[se].path, {
			...n,
			locale: e ?? n.locale
		})
	}, rt = process.env.INTLAYER_NODE_TYPE_FILE === "false" ? Y : {
		id: "file-plugin",
		canHandle: (e) => typeof e == "object" && e?.nodeType === "file",
		transform: (e, t, n) => n(e.content, {
			...t,
			children: e.content
		})
	};
})), X, at, ot = e((() => {
	ue(), it(), o(), X = (e, t = !0) => [
		Je(e ?? i.defaultLocale, t ? i.defaultLocale : void 0),
		Ye,
		Ze,
		Qe,
		nt(e ?? i.defaultLocale),
		rt,
		$e,
		et
	], at = (e, t, n = []) => k(e, {
		...t,
		plugins: n
	});
})), Z, st = e((() => {
	ne(), Te(), ot(), o(), Z = (e, t, n) => {
		let { locale: r, selector: a } = R(t), o = ee(r ?? i.defaultLocale, z(a), n), s = te(e, o);
		if (s.hit) return s.content;
		let c = n ?? X(r), l = Se(e, a), u = (e) => {
			let t = {
				dictionaryKey: e.key,
				dictionaryPath: e.filePath,
				keyPath: [],
				plugins: c,
				nestedDictionaries: e.nestedDictionaries
			};
			return at(e.content, t, c);
		};
		return l === null ? _(e, o, null) : Array.isArray(l) ? _(e, o, l.map(u)) : _(e, o, u(l));
	};
})), ct, Q, lt, ut, dt = e((() => {
	ct = (e) => {
		let t = {}, n = /([a-zA-Z0-9-]+)="([^"]*)"/g, r = n.exec(e);
		for (; r !== null;) t[r[1]] = r[2], r = n.exec(e);
		return t;
	}, Q = /* @__PURE__ */ new Map(), lt = (e) => {
		if (Q.has(e)) return Q.get(e);
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
				props: ct(m),
				children: []
			});
			else {
				let e = ct(m);
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
		return Q.set(e, n), n;
	}, ut = (e, t) => {
		let n = lt(e), r = 0, i = (e) => {
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
	};
})), ft, $, pt, mt = e((() => {
	ft = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", $ = /\{\{\s*(.*?)\s*\}\}/g, pt = (e, t = {}) => {
		if (!Object.values(t).some(ft)) return {
			isSimple: !0,
			parts: e.replace($, (e, n) => (t[n.trim()] ?? "").toString())
		};
		let n = e.split($), r = [];
		for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
		else {
			let i = t[n[e].trim()];
			i != null && r.push(i);
		}
		return {
			isSimple: !1,
			parts: r
		};
	};
})), ht = e((() => {
	st(), De(), qe(), it(), ot(), dt(), mt();
}));
export { I as A, T as B, Re as C, R as D, Te as E, oe as F, ce as G, w as H, x as I, le as J, D as K, y as L, fe as M, k as N, we as O, ue as P, u as Q, ae as R, Ne as S, z as T, C as U, S as V, b as W, l as X, O as Y, c as Z, J as _, X as a, G as b, Ye as c, $e as d, nt as f, q as g, Je as h, Z as i, A as j, L as k, Y as l, et as m, pt as n, at as o, Xe as p, v as q, ut as r, Ze as s, ht as t, rt as u, K as v, H as w, ze as x, Be as y, E as z };
import { n as e } from "./chunk-C3MyRVD9.js";
var t, n, r, i, a, o = e((() => {
	t = /cubot/i, n = /bot\b|bot[/\-\s]|crawler|crawling|spider|scraper|slurp|archiver|feedfetcher|validator|curl\/|wget\/|python-requests|python-urllib|okhttp|axios\/|node-fetch|got \(|go-http-client|java\/|libwww|httpunit|http_request|apache-httpclient|headless|phantomjs|puppeteer|playwright|selenium|webdriver|cypress|lighthouse|pagespeed|gtmetrix|prerender|pingdom|uptime|statuscake|site24x7|bingpreview|yandex|baiduspider|sogou|exabot|semrush|ahrefs|mj12|dotbot|petalbot|applebot|amazonbot|bytespider|facebookexternalhit|meta-externalagent|embedly|outbrain|quora link preview|skypeuripreview|vkshare|w3c_validator|apis-google|mediapartners|adsbot|storebot-google|google-inspectiontool|google-read-aloud|google-extended|duplexweb-google|gptbot|oai-searchbot|chatgpt-user|perplexity|claudebot|claude-web|anthropic-ai|cohere-ai|ccbot|diffbot|imagesift|omgili|timpi|youbot/i, r = (e) => e ? t.test(e) ? !1 : n.test(e) : !0, i = [
		"_phantom",
		"__nightmare",
		"callPhantom",
		"__selenium_unwrapped",
		"__webdriver_evaluate",
		"__driver_evaluate",
		"domAutomation",
		"Cypress"
	], a = () => {
		if (typeof navigator > "u") return !1;
		if (navigator.webdriver === !0) return !0;
		let e = globalThis;
		return i.some((t) => t in e) ? !0 : navigator.userAgent ? r(navigator.userAgent) : !1;
	};
}));
export { r as i, o as n, a as r, n as t };
import { n as e } from "./chunk-C3MyRVD9.js";
var t, n, r = e((() => {
	t = new Set([
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
	]), n = (e) => {
		let n = e.trim();
		if (!n) return null;
		let r = 0, i = () => n[r], a = () => n[r++], o = () => r >= n.length, s = () => {
			for (; !o() && " \n	\r".includes(i());) r++;
		}, c = (e) => {
			a();
			let t = "";
			for (; !o();) {
				let n = a();
				if (n === e) return t;
				n === "\\" && !o() ? t += a() : t += n;
			}
			throw SyntaxError("Unterminated string");
		}, l = (e) => {
			let t = r;
			for (; !o() && !e.includes(i());) r++;
			return n.slice(t, r).trim();
		}, u = (e) => t.has(e) || /^0x[0-9a-fA-F]+$/.test(e) || /^#/.test(e) ? e : /^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/i.test(e) ? e === "3.14159265359" ? Math.PI : Number(e) : e, d = (e) => {
			if (s(), o()) throw SyntaxError("Unexpected end of input");
			let t = i();
			if (t === "[") return f();
			if (t === "{") return v();
			if (t === "\"" || t === "'") return c(t);
			let n = l(e);
			if (!n) throw SyntaxError("Empty token");
			return u(n);
		}, f = () => {
			a();
			let e = [];
			if (s(), i() === "]") return a(), e;
			for (;;) {
				s(), e.push(d(",]")), s();
				let t = a();
				if (t === "]") break;
				if (t !== ",") throw SyntaxError("Expected ',' or ']' after array element");
				if (s(), i() === "]") throw SyntaxError("Trailing comma in array");
			}
			return e;
		}, p = () => {
			let e = m();
			a(), s();
			let t = i();
			if (t === "{") return v();
			if (t === "\"" || t === "'") return c(t);
			let o = n.indexOf("\n", r), d = n.slice(r, o === -1 ? n.length : o);
			return /:/.test(d) ? h(e) : u(l("\n"));
		}, m = () => {
			let e = n.lastIndexOf("\n", r - 1) + 1, t = 0;
			for (let i = e; i < r && n[i] === " "; i++) t++;
			return t;
		}, h = (e = m()) => {
			let t = {};
			for (; !o();) {
				let d = r, f = d === 0 || n[d - 1] === "\n";
				s();
				let p = m();
				if (f && p <= e) {
					r = d;
					break;
				}
				if (i() === "-" || o()) {
					r = d;
					break;
				}
				let _ = i(), v = _ === "\"" || _ === "'" ? c(_) : l(":");
				if (o() || a() !== ":") break;
				if (s(), i() === "\n") {
					a();
					let e = r;
					s();
					let o = m();
					if (i() === "-") {
						t[v] = g();
						continue;
					} else if (o > p) {
						let e = n.indexOf("\n", r), i = n.slice(r, e === -1 ? n.length : e);
						if (/:/.test(i)) {
							t[v] = h(p);
							continue;
						}
					}
					r = e, t[v] = "";
					continue;
				}
				t[v] = u(l("\n")), i() === "\n" && a();
			}
			return t;
		}, g = () => {
			let e = [], t = m();
			for (; !o();) {
				for (; !o() && " \n	\r".includes(i()) && i() !== "-";) a();
				if (o() || m() < t || i() !== "-") break;
				e.push(p());
			}
			return e;
		}, _ = (e) => {
			let t = {};
			for (s(); !o() && !e.includes(i());) {
				let u = i(), f = u === "\"" || u === "'" ? c(u) : l(`:\n${e}`);
				if (!f) return t;
				if (o() || a() !== ":") throw SyntaxError("Expected ':' after key");
				for (i() === " " && a(); !o() && " 	".includes(i());) a();
				if (o()) return t[f] = "", t;
				if (i() === "\n") {
					a();
					let o = r;
					s();
					let c = m();
					if (i() === "-") {
						t[f] = g(), s();
						continue;
					} else if (e === "" && c > 0) {
						let e = n.indexOf("\n", r), i = n.slice(r, e === -1 ? n.length : e);
						if (/:/.test(i)) {
							t[f] = h(0), s();
							continue;
						}
					}
					r = o, s();
					let l = i();
					if (t[f] = "", l && !e.includes(l) && l !== "-") continue;
					return t;
				}
				if (t[f] = d(e.includes("}") ? `,\n${e}` : `\n${e}`), o()) return t;
				let p = i();
				if (p === "," || p === "\n") {
					a(), s();
					continue;
				}
				if (" 	".includes(p)) {
					for (; !o() && " 	".includes(i());) a();
					if (i() === "\n") {
						a(), s();
						continue;
					}
					if (o() || e.includes(i())) return t;
					continue;
				}
				if (e.includes(p)) return t;
			}
			return t;
		}, v = () => {
			if (a(), s(), i() === "}") return a(), {};
			let e = _("}");
			if (i() !== "}") throw SyntaxError("Expected '}' at end of object");
			return a(), e;
		}, y = (e) => {
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
		if (n.startsWith("]") || n.startsWith("}")) throw SyntaxError("Unexpected closing bracket");
		let b = n.startsWith("[") ? f() : n.startsWith("{") ? v() : y(n) ? _("") : d("");
		if (s(), !o()) throw SyntaxError("Unexpected trailing characters");
		return b;
	};
}));
export { n, r as t };
import { n as e } from "./chunk-C3MyRVD9.js";
import { B as t, J as n, K as r, L as i, V as a, W as o, Y as s, z as c } from "./interpreter-BteEm5XZ.js";
var l, u = e((() => {
	s(), l = (e) => n(i, e);
})), d, f = e((() => {
	s(), d = (e) => n(c, e);
})), p, m, h = e((() => {
	p = (e) => {
		let t = {};
		return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
			let n = e[1];
			t[n] = "string";
		}), t;
	}, m = (e) => {
		if (typeof e != "string") throw Error("content must be a string");
		let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
		return t.forEach((e) => {
			let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
			if (/^[a-z][a-z0-9]*$/.test(r)) {
				n[r] = !0;
				return;
			}
			if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
			let o = p(i), s = n[r];
			Object.assign(s, o), a || (s.children = "string");
		}), n;
	};
})), g, _, v, y = e((() => {
	g = new Set([
		"area",
		"base",
		"br",
		"col",
		"embed",
		"hr",
		"img",
		"input",
		"link",
		"meta",
		"source",
		"track",
		"wbr"
	]), _ = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, v = (e) => {
		let t = [], n = [];
		for (let r of e.matchAll(_)) {
			let e = !!r[1], i = r[2], a = r[3], o = !!r[4];
			if (!(a.trimStart().startsWith("://") || a.trimStart().startsWith(":"))) if (e) if (n.length === 0) t.push({
				type: "error",
				message: `Closing tag </${i}> has no matching opening tag`
			});
			else {
				let e = n[n.length - 1];
				e.tag.toLowerCase() !== i.toLowerCase() && t.push({
					type: "error",
					message: `Mismatched closing tag: expected </${e.tag}> but found </${i}>`
				}), n.pop();
			}
			else {
				let e = g.has(i.toLowerCase());
				!o && !e && n.push({ tag: i });
			}
		}
		for (let e of n) t.push({
			type: "error",
			message: `Unclosed HTML tag: <${e.tag}>`
		});
		return {
			valid: t.filter((e) => e.type === "error").length === 0,
			issues: t
		};
	};
})), b, x = e((() => {
	h(), y(), s(), b = (e, r) => n(t, e, { tags: (() => {
		if (r) return r;
		if (typeof e == "string") {
			let { issues: t } = v(e);
			for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
			return m(e);
		}
		let t;
		if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => m(await e)), typeof t == "string") return m(t);
		try {
			return m(JSON.stringify(e));
		} catch {
			return [];
		}
	})() });
})), S, C = e((() => {
	S = (e) => {
		let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
		return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
	};
})), w, T = e((() => {
	C(), s(), w = (e) => n(a, e, { fields: (() => {
		if (typeof e == "string") return S(e);
		let t;
		if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => S(await e)), typeof t == "string") return S(t);
		try {
			return S(JSON.stringify(e));
		} catch {
			return [];
		}
	})() });
})), E, D = e((() => {
	s(), E = (e) => n(o, e);
})), O, k = e((() => {
	s(), O = (e, t) => n(r, e, { variable: t });
}));
export { T as a, x as c, d, f, E as i, g as l, u as m, O as n, w as o, l as p, D as r, b as s, k as t, y as u };
