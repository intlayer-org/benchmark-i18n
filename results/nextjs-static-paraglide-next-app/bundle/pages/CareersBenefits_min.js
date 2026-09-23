import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
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
	!f && typeof window < "u" && window.location?.href && (e = F(window.location.href));
	let t = g(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, v(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function g(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = k();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (L(t) && I.has(t)) {
			let e = I.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return b(t);
			}
		}
		let e = y(n);
		if (e) return e;
	}
}
var _ = (e) => {
	e ? window.location.href = e : window.location.reload();
}, v = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = h();
	} catch {}
	let i = [], a = u;
	!f && typeof window < "u" && window.location?.href && (a = F(window.location.href));
	for (let t of a) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (f || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, D();
	} else if (t === "baseLocale") continue;
	else if (L(t) && I.has(t)) {
		let n = I.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!f && n.reload && window.location && e !== r && _(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, te = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function b(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function x(e) {
	return e;
}
function S(e, t) {
	return e.exec(t.href);
}
var C = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), w = RegExp(`(?:^|;\\s*)${C}=([^;]*)`), T = Symbol(), E = T;
function D() {
	E = T;
}
function O() {
	typeof queueMicrotask == "function" ? queueMicrotask(D) : Promise.resolve().then(D);
}
function k() {
	if (typeof document > "u") return;
	if (E !== T) return E;
	let e = document.cookie.match(w)?.[1];
	return E = y(e), O(), E;
}
function A(e) {
	return j(e);
}
function j(e) {
	let t = x(typeof e == "string" ? new URL(e, te()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && y(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), x(t);
}
var M, N;
function P(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (M === t) return N;
	let n = x(new URL(t, "http://example.com")), r = A(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of d) if (S(new s(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return M = t, N = a, a;
}
function F(e) {
	let t = P(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var I = /* @__PURE__ */ new Map();
function L(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var R = () => "Competitive pay", z = () => "Rémunération compétitive", B = () => "Salario competitivo", V = () => "Wettbewerbsfähige Bezahlung", H = () => "Retribuzione competitiva", U = () => "Remuneração competitiva", W = () => "具有竞争力的薪酬", G = () => "競争力のある給与", K = () => "경쟁력 있는 급여", q = () => "Конкурентоспособная оплата", J = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? z(e) : n === "es" ? B(e) : n === "de" ? V(e) : n === "it" ? H(e) : n === "pt" ? U(e) : n === "zh" ? W(e) : n === "ja" ? G(e) : n === "ko" ? K(e) : n === "ru" ? q(e) : R(e);
}), Y = () => "Open source time", X = () => "Temps dédié à l'open source", Z = () => "Tiempo dedicado al código abierto", Q = () => "Zeit für Open Source", ne = () => "Tempo dedicato all'open source", re = () => "Tempo dedicado ao código aberto", ie = () => "开源贡献时间", ae = () => "オープンソースへの貢献時間", oe = () => "오픈 소스 기여 시간", se = () => "Время на open source", ce = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? X(e) : n === "es" ? Z(e) : n === "de" ? Q(e) : n === "it" ? ne(e) : n === "pt" ? re(e) : n === "zh" ? ie(e) : n === "ja" ? ae(e) : n === "ko" ? oe(e) : n === "ru" ? se(e) : Y(e);
}), le = () => "Top-of-market compensation", ue = () => "Rémunération au-dessus du marché", de = () => "Compensación superior a la del mercado", fe = () => "Überdurchschnittliche Vergütung", pe = () => "Compensazione ai vertici del mercato", me = () => "Remuneração acima da média do mercado", he = () => "市场顶尖的薪资待遇", ge = () => "市場最高水準の報酬", _e = () => "업계 최고 수준의 보상", ve = () => "Компенсация выше рыночной", ye = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? ue(e) : n === "es" ? de(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : n === "ru" ? ve(e) : le(e);
}), be = () => "Work from anywhere in the world", xe = () => "Travaillez de n'importe où dans le monde", Se = () => "Trabaja desde cualquier lugar del mundo", Ce = () => "Arbeiten Sie von überall auf der Welt", we = () => "Lavora da qualsiasi parte del mondo", Te = () => "Trabalhe de qualquer lugar do mundo", Ee = () => "在全球任何地方工作", De = () => "世界中のどこからでも働けます", Oe = () => "전 세계 어디서나 근무 가능", ke = () => "Работайте из любой точки мира", Ae = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? xe(e) : n === "es" ? Se(e) : n === "de" ? Ce(e) : n === "it" ? we(e) : n === "pt" ? Te(e) : n === "zh" ? Ee(e) : n === "ja" ? De(e) : n === "ko" ? Oe(e) : n === "ru" ? ke(e) : be(e);
}), je = () => "Remote", Me = () => "À distance", Ne = () => "Remoto", Pe = () => "Remote", $ = () => "Remoto", Fe = () => "Remoto", Ie = () => "远程", Le = () => "リモート", Re = () => "원격", ze = () => "Удаленно", Be = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Me(e) : n === "es" ? Ne(e) : n === "de" ? Pe(e) : n === "it" ? $(e) : n === "pt" ? Fe(e) : n === "zh" ? Ie(e) : n === "ja" ? Le(e) : n === "ko" ? Re(e) : n === "ru" ? ze(e) : je(e);
});
function Ve() {
	let e = [
		{
			label: Be(),
			value: Ae()
		},
		{
			label: J(),
			value: ye()
		},
		{
			label: ce(),
			value: "20% time for OSS contributions"
		}
	];
	return i("div", {
		className: "mb-12 grid gap-4 md:grid-cols-3",
		children: e.map((e) => a("div", {
			className: "rounded-lg border border-border bg-card p-4 text-center",
			children: [i("p", {
				className: "text-sm font-semibold text-foreground",
				children: e.label
			}), i("p", {
				className: "text-xs text-muted-foreground",
				children: e.value
			})]
		}, e.label))
	});
}
function He() {
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
function Ue(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function We({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Ue("AppRoot", c);
	}, [c]), e(() => {
		v(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		He();
	}, []), i(r, { children: a });
}
function Ge({ children: e }) {
	return i(We, { children: e });
}
function Ke() {
	return i(Ge, { children: i(Ve, {}) });
}
export { Ke as default };
