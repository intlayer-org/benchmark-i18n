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
], d = [], f, p;
function te(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (f === t) return p;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of d) if (new s(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return f = t, p = r, r;
}
function m(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var h = void 0, g = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var _, v = !1, y = () => {
	if (h) {
		let e = h?.getStore()?.locale;
		if (e) return e;
	}
	let e = u;
	!g && typeof window < "u" && window.location?.href && (e = m(window.location.href));
	let t = b(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return v || (_ = t, v = !0, S(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function b(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = T();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && _ !== void 0) n = _;
		else if (D(t) && E.has(t)) {
			let e = E.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return w(t);
			}
		}
		let e = C(n);
		if (e) return e;
	}
}
var x = (e) => {
	e ? window.location.href = e : window.location.reload();
}, S = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = y();
	} catch {}
	let i = [], a = u;
	!g && typeof window < "u" && window.location?.href && (a = m(window.location.href));
	for (let t of a) if (t === "globalVariable") _ = e;
	else if (t === "cookie") {
		if (g || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (D(t) && E.has(t)) {
		let n = E.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!g && n.reload && window.location && e !== r && x(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function C(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function w(e) {
	let t = C(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function T() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${l}=([^;]+)`))?.[2];
	return C(e);
}
var E = /* @__PURE__ */ new Map();
function D(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var O = () => "Work from anywhere in the world", k = () => "Travaillez de n'importe où dans le monde", A = () => "Trabaja desde cualquier lugar del mundo", j = () => "Arbeiten Sie von überall auf der Welt", M = () => "Lavora da qualsiasi parte del mondo", N = () => "Trabalhe de qualquer lugar do mundo", P = () => "在全球任何地方工作", F = () => "世界中のどこからでも働けます", I = () => "전 세계 어디서나 근무 가능", L = () => "Работайте из любой точки мира", R = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? O(e) : n === "fr" ? k(e) : n === "es" ? A(e) : n === "de" ? j(e) : n === "it" ? M(e) : n === "pt" ? N(e) : n === "zh" ? P(e) : n === "ja" ? F(e) : n === "ko" ? I(e) : L(e);
}), z = () => "Competitive pay", B = () => "Rémunération compétitive", V = () => "Salario competitivo", H = () => "Wettbewerbsfähige Bezahlung", U = () => "Retribuzione competitiva", W = () => "Remuneração competitiva", G = () => "具有竞争力的薪酬", K = () => "競争力のある給与", q = () => "경쟁력 있는 급여", J = () => "Конкурентоспособная оплата", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? z(e) : n === "fr" ? B(e) : n === "es" ? V(e) : n === "de" ? H(e) : n === "it" ? U(e) : n === "pt" ? W(e) : n === "zh" ? G(e) : n === "ja" ? K(e) : n === "ko" ? q(e) : J(e);
}), X = () => "Top-of-market compensation", Z = () => "Rémunération au-dessus du marché", Q = () => "Compensación superior a la del mercado", ne = () => "Überdurchschnittliche Vergütung", re = () => "Compensazione ai vertici del mercato", ie = () => "Remuneração acima da média do mercado", ae = () => "市场顶尖的薪资待遇", oe = () => "市場最高水準の報酬", se = () => "업계 최고 수준의 보상", ce = () => "Компенсация выше рыночной", le = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? X(e) : n === "fr" ? Z(e) : n === "es" ? Q(e) : n === "de" ? ne(e) : n === "it" ? re(e) : n === "pt" ? ie(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : ce(e);
}), ue = () => "Open source time", de = () => "Temps dédié à l'open source", fe = () => "Tiempo dedicado al código abierto", pe = () => "Zeit für Open Source", me = () => "Tempo dedicato all'open source", he = () => "Tempo dedicado ao código aberto", ge = () => "开源贡献时间", _e = () => "オープンソースへの貢献時間", ve = () => "오픈 소스 기여 시간", ye = () => "Время на open source", be = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? ue(e) : n === "fr" ? de(e) : n === "es" ? fe(e) : n === "de" ? pe(e) : n === "it" ? me(e) : n === "pt" ? he(e) : n === "zh" ? ge(e) : n === "ja" ? _e(e) : n === "ko" ? ve(e) : ye(e);
}), xe = () => "Remote", Se = () => "À distance", Ce = () => "Remoto", we = () => "Remote", Te = () => "Remoto", Ee = () => "Remoto", De = () => "远程", $ = () => "リモート", Oe = () => "원격", ke = () => "Удаленно", Ae = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? xe(e) : n === "fr" ? Se(e) : n === "es" ? Ce(e) : n === "de" ? we(e) : n === "it" ? Te(e) : n === "pt" ? Ee(e) : n === "zh" ? De(e) : n === "ja" ? $(e) : n === "ko" ? Oe(e) : ke(e);
});
function je() {
	return i("div", {
		className: "mb-12 grid gap-4 md:grid-cols-3",
		children: [
			{
				label: Ae(),
				value: R()
			},
			{
				label: Y(),
				value: le()
			},
			{
				label: be(),
				value: "20% time for OSS contributions"
			}
		].map((e) => a("div", {
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
function Me() {
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
function Ne(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Pe({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Ne("AppRoot", c);
	}, [c]), e(() => {
		S(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		Me();
	}, []), i(r, { children: a });
}
function Fe({ children: e }) {
	return i(Pe, { children: e });
}
function Ie() {
	return i(Fe, { children: i(je, {}) });
}
export { Ie as default };
