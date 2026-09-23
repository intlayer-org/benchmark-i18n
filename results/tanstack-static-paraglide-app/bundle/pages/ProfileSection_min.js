import { useId as e } from "react";
import { Fragment as t, jsx as n, jsxs as r } from "react/jsx-runtime";
var i = {}, a = [
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
], o = "PARAGLIDE_LOCALE", ee = 3456e4, s = [
	"cookie",
	"globalVariable",
	"baseLocale"
], c = [], l = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var u, d = !1, f = () => {
	let e = s;
	!l && typeof window < "u" && window.location?.href && (e = N(window.location.href));
	let t = p(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, h(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function p(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = D();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (F(t) && P.has(t)) {
			let e = P.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return v(t);
			}
		}
		let e = _(n);
		if (e) return e;
	}
}
var m = (e) => {
	e ? window.location.href = e : window.location.reload();
}, h = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = f();
	} catch {}
	let i = [], a = s;
	!l && typeof window < "u" && window.location?.href && (a = N(window.location.href));
	for (let t of a) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, T();
	} else if (t === "baseLocale") continue;
	else if (F(t) && P.has(t)) {
		let n = P.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let c = () => {
		!l && n.reload && window.location && e !== r && m(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		c();
	});
	c();
}, g = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function _(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function v(e) {
	let t = _(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function y(e) {
	return e;
}
function b(e, t) {
	return e.exec(t.href);
}
var x = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), S = RegExp(`(?:^|;\\s*)${x}=([^;]*)`), C = Symbol(), w = C;
function T() {
	w = C;
}
function E() {
	typeof queueMicrotask == "function" ? queueMicrotask(T) : Promise.resolve().then(T);
}
function D() {
	if (typeof document > "u") return;
	if (w !== C) return w;
	let e = document.cookie.match(S)?.[1];
	return w = _(e), E(), w;
}
function O(e) {
	return k(e);
}
function k(e) {
	let t = y(typeof e == "string" ? new URL(e, g()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && _(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), y(t);
}
var A, j;
function M(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (A === t) return j;
	let n = y(new URL(t, "http://example.com")), r = O(n), a = r.href === n.href ? [n] : [n, r], o;
	for (let e of a) {
		for (let t of c) if (b(new i(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return A = t, j = o, o;
}
function N(e) {
	let t = M(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var P = /* @__PURE__ */ new Map();
function F(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var I = () => "Display Name", L = () => "Nom d'affichage", R = () => "Nombre visible", z = () => "Anzeigename", B = () => "Nome visualizzato", V = () => "Nome de exibição", H = () => "显示名称", U = () => "表示名", W = () => "표시 이름", G = () => "Отображаемое имя", K = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : n === "ru" ? G(e) : I(e);
}), q = () => "Email", te = () => "Email", J = () => "Correo electrónico", Y = () => "E-Mail", X = () => "Email", Z = () => "E-mail", Q = () => "邮件地址", ne = () => "メールアドレス", re = () => "이메일 주소", ie = () => "Эл. почта", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? te(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? Z(e) : n === "zh" ? Q(e) : n === "ja" ? ne(e) : n === "ko" ? re(e) : n === "ru" ? ie(e) : q(e);
}), oe = () => "Profile", se = () => "Profil", ce = () => "Perfil", le = () => "Profil", ue = () => "Profilo", de = () => "Perfil", fe = () => "个人资料", pe = () => "プロファイル", $ = () => "프로필", me = () => "Профиль", he = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? $(e) : n === "ru" ? me(e) : oe(e);
});
function ge() {
	let t = e(), i = e();
	return r("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [n("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: he()
		}), r("div", {
			className: "space-y-4",
			children: [r("div", { children: [n("label", {
				htmlFor: t,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: K()
			}), n("input", {
				id: t,
				defaultValue: "John Developer",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] }), r("div", { children: [n("label", {
				htmlFor: i,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: ae()
			}), n("input", {
				id: i,
				defaultValue: "john@example.com",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] })]
		})]
	});
}
h("en", { reload: !1 });
function _e({ children: e }) {
	return n(t, { children: e });
}
function ve() {
	return n(_e, { children: n(ge, {}) });
}
export { ve as default };
