import { useId as e } from "react";
import { Fragment as t, jsxDEV as n } from "react/jsx-dev-runtime";
var r = {}, i = [
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
], a = "PARAGLIDE_LOCALE", o = 3456e4, s = [
	"cookie",
	"globalVariable",
	"baseLocale"
], c = [], l = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var u, d = !1, f = () => {
	let e = s;
	!l && typeof window < "u" && window.location?.href && (e = A(window.location.href));
	let t = p(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function p(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = w();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (M(t) && j.has(t)) {
			let e = j.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return te(t);
			}
		}
		let e = g(n);
		if (e) return e;
	}
}
var ee = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = f();
	} catch {}
	let i = [], c = s;
	!l && typeof window < "u" && window.location?.href && (c = A(window.location.href));
	for (let t of c) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (M(t) && j.has(t)) {
		let n = j.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let d = () => {
		!l && n.reload && window.location && e !== r && ee(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		d();
	});
	d();
}, h = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function te(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function _(e) {
	return e;
}
function v(e, t) {
	return e.exec(t.href);
}
var y = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function ne() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function w() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = g(e), ne(), S;
}
function T(e) {
	return E(e);
}
function E(e) {
	let t = _(typeof e == "string" ? new URL(e, h()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var D, O;
function k(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (D === t) return O;
	let n = _(new URL(t, "http://example.com")), i = T(n), a = i.href === n.href ? [n] : [n, i], o;
	for (let e of a) {
		for (let t of c) if (v(new r(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return D = t, O = o, o;
}
function A(e) {
	let t = k(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var j = /* @__PURE__ */ new Map();
function M(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var N = () => "Display Name", P = () => "Email", F = () => "Profile", I = () => "Nom d'affichage", L = () => "Email", R = () => "Profil", z = () => "Nombre visible", B = () => "Correo electrónico", V = () => "Perfil", H = () => "Anzeigename", U = () => "E-Mail", W = () => "Profil", G = () => "Nome visualizzato", K = () => "Email", q = () => "Profilo", re = () => "Nome de exibição", J = () => "E-mail", Y = () => "Perfil", X = () => "显示名称", ie = () => "邮件地址", ae = () => "个人资料", oe = () => "表示名", se = () => "メールアドレス", ce = () => "プロファイル", le = () => "표시 이름", ue = () => "이메일 주소", de = () => "프로필", fe = () => "Отображаемое имя", pe = () => "Эл. почта", me = () => "Профиль", he = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? I(e) : n === "es" ? z(e) : n === "de" ? H(e) : n === "it" ? G(e) : n === "pt" ? re(e) : n === "zh" ? X(e) : n === "ja" ? oe(e) : n === "ko" ? le(e) : n === "ru" ? fe(e) : N(e);
}), Z = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? L(e) : n === "es" ? B(e) : n === "de" ? U(e) : n === "it" ? K(e) : n === "pt" ? J(e) : n === "zh" ? ie(e) : n === "ja" ? se(e) : n === "ko" ? ue(e) : n === "ru" ? pe(e) : P(e);
}), ge = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? R(e) : n === "es" ? V(e) : n === "de" ? W(e) : n === "it" ? q(e) : n === "pt" ? Y(e) : n === "zh" ? ae(e) : n === "ja" ? ce(e) : n === "ko" ? de(e) : n === "ru" ? me(e) : F(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/settings/ProfileSection.tsx";
function _e() {
	let t = e(), r = e();
	return n("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [n("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: ge()
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 10,
			columnNumber: 7
		}, this), n("div", {
			className: "space-y-4",
			children: [n("div", { children: [n("label", {
				htmlFor: t,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: he()
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 15,
				columnNumber: 11
			}, this), n("input", {
				id: t,
				defaultValue: "John Developer",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 21,
				columnNumber: 11
			}, this)] }, void 0, !0, {
				fileName: Q,
				lineNumber: 14,
				columnNumber: 9
			}, this), n("div", { children: [n("label", {
				htmlFor: r,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: Z()
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 28,
				columnNumber: 11
			}, this), n("input", {
				id: r,
				defaultValue: "john@example.com",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 34,
				columnNumber: 11
			}, this)] }, void 0, !0, {
				fileName: Q,
				lineNumber: 27,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: Q,
			lineNumber: 13,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: Q,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var ve = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
m("en", { reload: !1 });
function ye({ children: e }) {
	return n(t, { children: e }, void 0, !1, {
		fileName: ve,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/settings/ProfileSection.wrapper.tsx";
function be() {
	return n(ye, { children: n(_e, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { be as default };
