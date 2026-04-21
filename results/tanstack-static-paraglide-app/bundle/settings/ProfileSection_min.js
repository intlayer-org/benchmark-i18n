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
], o = "PARAGLIDE_LOCALE", s = 3456e4, c = [
	"cookie",
	"globalVariable",
	"baseLocale"
], l = [], u, d;
function f(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (u === t) return d;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of l) if (new i(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return u = t, d = r, r;
}
function p(e) {
	let t = f(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var m = void 0;
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	if (m) {
		let e = m?.getStore()?.locale;
		if (e) return e;
	}
	let e = c;
	typeof window < "u" && window.location?.href && (e = p(window.location.href));
	let t = v(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, b(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function v(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = C();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (T(t) && w.has(t)) {
			let e = w.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return S(t);
			}
		}
		let e = x(n);
		if (e) return e;
	}
}
var y = (e) => {
	e ? window.location.href = e : window.location.reload();
}, b = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = _();
	} catch {}
	let i = [], a = c;
	typeof window < "u" && window.location?.href && (a = p(window.location.href));
	for (let t of a) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${s}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (T(t) && w.has(t)) {
		let n = w.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let l = () => {
		n.reload && window.location && e !== r && y(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
};
function x(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function S(e) {
	let t = x(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function C() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${o}=([^;]+)`))?.[2];
	return x(e);
}
var w = /* @__PURE__ */ new Map();
function T(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var E = () => "Profile", D = () => "Profil", O = () => "Perfil", k = () => "Profil", A = () => "Profilo", j = () => "Perfil", M = () => "个人资料", N = () => "プロファイル", P = () => "프로필", F = () => "Профиль", I = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? E(e) : n === "fr" ? D(e) : n === "es" ? O(e) : n === "de" ? k(e) : n === "it" ? A(e) : n === "pt" ? j(e) : n === "zh" ? M(e) : n === "ja" ? N(e) : n === "ko" ? P(e) : F(e);
}), L = () => "Display Name", R = () => "Nom d'affichage", z = () => "Nombre visible", B = () => "Anzeigename", ee = () => "Nome visualizzato", V = () => "Nome de exibição", H = () => "显示名称", U = () => "表示名", W = () => "표시 이름", G = () => "Отображаемое имя", K = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? L(e) : n === "fr" ? R(e) : n === "es" ? z(e) : n === "de" ? B(e) : n === "it" ? ee(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : G(e);
}), q = () => "Email", J = () => "Email", Y = () => "Correo electrónico", X = () => "E-Mail", Z = () => "Email", Q = () => "E-mail", $ = () => "邮件地址", te = () => "メールアドレス", ne = () => "이메일 주소", re = () => "Эл. почта", ie = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? q(e) : n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? Z(e) : n === "pt" ? Q(e) : n === "zh" ? $(e) : n === "ja" ? te(e) : n === "ko" ? ne(e) : re(e);
});
function ae() {
	let t = e(), i = e();
	return r("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [n("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: I()
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
				children: ie()
			}), n("input", {
				id: i,
				defaultValue: "john@example.com",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			})] })]
		})]
	});
}
b("en", { reload: !1 });
function oe({ children: e }) {
	return n(t, { children: e });
}
function se() {
	return n(oe, { children: n(ae, {}) });
}
export { se as default };
