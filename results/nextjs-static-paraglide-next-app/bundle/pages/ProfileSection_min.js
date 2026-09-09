import { useEffect as e, useId as t, useLayoutEffect as n, useState as r } from "react";
import { Fragment as i, jsxDEV as a } from "react/jsx-dev-runtime";
import { useParams as o } from "next/navigation";
var s = {}, c = [
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
], l = "PARAGLIDE_LOCALE", ee = 3456e4, u = [
	"cookie",
	"globalVariable",
	"baseLocale"
], d = [], f = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	let e = u;
	!f && typeof window < "u" && window.location?.href && (e = P(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, _(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = O();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (I(t) && F.has(t)) {
			let e = F.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return y(t);
			}
		}
		let e = v(n);
		if (e) return e;
	}
}
var g = (e) => {
	e ? window.location.href = e : window.location.reload();
}, _ = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = h();
	} catch {}
	let i = [], a = u;
	!f && typeof window < "u" && window.location?.href && (a = P(window.location.href));
	for (let t of a) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (f || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, E();
	} else if (t === "baseLocale") continue;
	else if (I(t) && F.has(t)) {
		let n = F.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!f && n.reload && window.location && e !== r && g(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function v(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function y(e) {
	let t = v(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function b(e) {
	return e;
}
function x(e, t) {
	return e.exec(t.href);
}
var S = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), C = RegExp(`(?:^|;\\s*)${S}=([^;]*)`), w = Symbol(), T = w;
function E() {
	T = w;
}
function D() {
	typeof queueMicrotask == "function" ? queueMicrotask(E) : Promise.resolve().then(E);
}
function O() {
	if (typeof document > "u") return;
	if (T !== w) return T;
	let e = document.cookie.match(C)?.[1];
	return T = v(e), D(), T;
}
function k(e) {
	return A(e);
}
function A(e) {
	let t = b(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && v(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), b(t);
}
var j, M;
function N(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (j === t) return M;
	let n = b(new URL(t, "http://example.com")), r = k(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of d) if (x(new s(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return j = t, M = a, a;
}
function P(e) {
	let t = N(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var F = /* @__PURE__ */ new Map();
function I(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var L = () => "Display Name", R = () => "Nom d'affichage", z = () => "Nombre visible", B = () => "Anzeigename", V = () => "Nome visualizzato", H = () => "Nome de exibição", U = () => "显示名称", W = () => "表示名", G = () => "표시 이름", K = () => "Отображаемое имя", q = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? R(e) : n === "es" ? z(e) : n === "de" ? B(e) : n === "it" ? V(e) : n === "pt" ? H(e) : n === "zh" ? U(e) : n === "ja" ? W(e) : n === "ko" ? G(e) : n === "ru" ? K(e) : L(e);
}), J = () => "Email", Y = () => "Email", X = () => "Correo electrónico", re = () => "E-Mail", ie = () => "Email", ae = () => "E-mail", oe = () => "邮件地址", se = () => "メールアドレス", ce = () => "이메일 주소", le = () => "Эл. почта", ue = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Y(e) : n === "es" ? X(e) : n === "de" ? re(e) : n === "it" ? ie(e) : n === "pt" ? ae(e) : n === "zh" ? oe(e) : n === "ja" ? se(e) : n === "ko" ? ce(e) : n === "ru" ? le(e) : J(e);
}), de = () => "Profile", fe = () => "Profil", pe = () => "Perfil", me = () => "Profil", he = () => "Profilo", ge = () => "Perfil", _e = () => "个人资料", ve = () => "プロファイル", ye = () => "프로필", be = () => "Профиль", xe = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? fe(e) : n === "es" ? pe(e) : n === "de" ? me(e) : n === "it" ? he(e) : n === "pt" ? ge(e) : n === "zh" ? _e(e) : n === "ja" ? ve(e) : n === "ko" ? ye(e) : n === "ru" ? be(e) : de(e);
}), Z = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/settings/ProfileSection.tsx";
function Q() {
	let e = t(), n = t();
	return a("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [a("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: xe()
		}, void 0, !1, {
			fileName: Z,
			lineNumber: 12,
			columnNumber: 7
		}, this), a("div", {
			className: "space-y-4",
			children: [a("div", { children: [a("label", {
				htmlFor: e,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: q()
			}, void 0, !1, {
				fileName: Z,
				lineNumber: 17,
				columnNumber: 11
			}, this), a("input", {
				id: e,
				defaultValue: "John Developer",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			}, void 0, !1, {
				fileName: Z,
				lineNumber: 23,
				columnNumber: 11
			}, this)] }, void 0, !0, {
				fileName: Z,
				lineNumber: 16,
				columnNumber: 9
			}, this), a("div", { children: [a("label", {
				htmlFor: n,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: ue()
			}, void 0, !1, {
				fileName: Z,
				lineNumber: 30,
				columnNumber: 11
			}, this), a("input", {
				id: n,
				defaultValue: "john@example.com",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			}, void 0, !1, {
				fileName: Z,
				lineNumber: 36,
				columnNumber: 11
			}, this)] }, void 0, !0, {
				fileName: Z,
				lineNumber: 29,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: Z,
			lineNumber: 15,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: Z,
		lineNumber: 11,
		columnNumber: 5
	}, this);
}
function Se() {
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
function Ce(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var we = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/AppProviders.tsx";
function Te({ children: t }) {
	let s = o().locale ?? "en", [c] = r(() => typeof performance < "u" ? performance.now() : 0);
	return n(() => {
		Ce("AppRoot", c);
	}, [c]), e(() => {
		_(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		Se();
	}, []), a(i, { children: t }, void 0, !1, {
		fileName: we,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var Ee = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/scripts/Wrapper.tsx";
function De({ children: e }) {
	return a(Te, { children: e }, void 0, !1, {
		fileName: Ee,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/settings/ProfileSection.wrapper.tsx";
function Oe() {
	return a(De, { children: a(Q, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Oe as default };
