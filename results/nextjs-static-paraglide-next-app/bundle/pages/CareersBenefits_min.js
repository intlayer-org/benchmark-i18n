import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsxDEV as i } from "react/jsx-dev-runtime";
import { useParams as a } from "next/navigation";
var o = {}, s = [
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
], c = "PARAGLIDE_LOCALE", ee = 3456e4, l = [
	"cookie",
	"globalVariable",
	"baseLocale"
], u = [], d = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var f, p = !1, m = () => {
	let e = l;
	!d && typeof window < "u" && window.location?.href && (e = M(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, g(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = E();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (P(t) && N.has(t)) {
			let e = N.get(t);
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
var h = (e) => {
	e ? window.location.href = e : window.location.reload();
}, g = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = m();
	} catch {}
	let i = [], a = l;
	!d && typeof window < "u" && window.location?.href && (a = M(window.location.href));
	for (let t of a) if (t === "globalVariable") f = e;
	else if (t === "cookie") {
		if (d || typeof document > "u" || typeof window > "u") continue;
		let t = `${c}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, T();
	} else if (t === "baseLocale") continue;
	else if (P(t) && N.has(t)) {
		let n = N.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!d && n.reload && window.location && e !== r && h(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function _(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of s) if (e.toLowerCase() === t) return e;
}
function v(e) {
	let t = _(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${s.join(", ")}`);
}
function y(e) {
	return e;
}
function b(e, t) {
	return e.exec(t.href);
}
var x = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), S = RegExp(`(?:^|;\\s*)${x}=([^;]*)`), C = Symbol(), w = C;
function T() {
	w = C;
}
function re() {
	typeof queueMicrotask == "function" ? queueMicrotask(T) : Promise.resolve().then(T);
}
function E() {
	if (typeof document > "u") return;
	if (w !== C) return w;
	let e = document.cookie.match(S)?.[1];
	return w = _(e), re(), w;
}
function D(e) {
	return O(e);
}
function O(e) {
	let t = y(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && _(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), y(t);
}
var k, A;
function j(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (k === t) return A;
	let n = y(new URL(t, "http://example.com")), r = D(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of u) if (b(new o(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return k = t, A = a, a;
}
function M(e) {
	let t = j(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var N = /* @__PURE__ */ new Map();
function P(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var F = () => "Competitive pay", I = () => "Rémunération compétitive", L = () => "Salario competitivo", R = () => "Wettbewerbsfähige Bezahlung", z = () => "Retribuzione competitiva", B = () => "Remuneração competitiva", V = () => "具有竞争力的薪酬", H = () => "競争力のある給与", U = () => "경쟁력 있는 급여", W = () => "Конкурентоспособная оплата", G = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : n === "ru" ? W(e) : F(e);
}), K = () => "Open source time", q = () => "Temps dédié à l'open source", J = () => "Tiempo dedicado al código abierto", Y = () => "Zeit für Open Source", X = () => "Tempo dedicato all'open source", ie = () => "Tempo dedicado ao código aberto", ae = () => "开源贡献时间", oe = () => "オープンソースへの貢献時間", se = () => "오픈 소스 기여 시간", ce = () => "Время на open source", le = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? ie(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : n === "ru" ? ce(e) : K(e);
}), ue = () => "Top-of-market compensation", de = () => "Rémunération au-dessus du marché", fe = () => "Compensación superior a la del mercado", pe = () => "Überdurchschnittliche Vergütung", me = () => "Compensazione ai vertici del mercato", he = () => "Remuneração acima da média do mercado", ge = () => "市场顶尖的薪资待遇", _e = () => "市場最高水準の報酬", ve = () => "업계 최고 수준의 보상", ye = () => "Компенсация выше рыночной", be = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? de(e) : n === "es" ? fe(e) : n === "de" ? pe(e) : n === "it" ? me(e) : n === "pt" ? he(e) : n === "zh" ? ge(e) : n === "ja" ? _e(e) : n === "ko" ? ve(e) : n === "ru" ? ye(e) : ue(e);
}), xe = () => "Work from anywhere in the world", Se = () => "Travaillez de n'importe où dans le monde", Ce = () => "Trabaja desde cualquier lugar del mundo", we = () => "Arbeiten Sie von überall auf der Welt", Te = () => "Lavora da qualsiasi parte del mondo", Ee = () => "Trabalhe de qualquer lugar do mundo", De = () => "在全球任何地方工作", Oe = () => "世界中のどこからでも働けます", ke = () => "전 세계 어디서나 근무 가능", Ae = () => "Работайте из любой точки мира", je = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Se(e) : n === "es" ? Ce(e) : n === "de" ? we(e) : n === "it" ? Te(e) : n === "pt" ? Ee(e) : n === "zh" ? De(e) : n === "ja" ? Oe(e) : n === "ko" ? ke(e) : n === "ru" ? Ae(e) : xe(e);
}), Me = () => "Remote", Ne = () => "À distance", Pe = () => "Remoto", Fe = () => "Remote", Ie = () => "Remoto", Le = () => "Remoto", Re = () => "远程", ze = () => "リモート", Be = () => "원격", Ve = () => "Удаленно", He = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ne(e) : n === "es" ? Pe(e) : n === "de" ? Fe(e) : n === "it" ? Ie(e) : n === "pt" ? Le(e) : n === "zh" ? Re(e) : n === "ja" ? ze(e) : n === "ko" ? Be(e) : n === "ru" ? Ve(e) : Me(e);
}), Z = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/careers/CareersBenefits.tsx";
function Q() {
	let e = [
		{
			label: He(),
			value: je()
		},
		{
			label: G(),
			value: be()
		},
		{
			label: le(),
			value: "20% time for OSS contributions"
		}
	];
	return i("div", {
		className: "mb-12 grid gap-4 md:grid-cols-3",
		children: e.map((e) => i("div", {
			className: "rounded-lg border border-border bg-card p-4 text-center",
			children: [i("p", {
				className: "text-sm font-semibold text-foreground",
				children: e.label
			}, void 0, !1, {
				fileName: Z,
				lineNumber: 28,
				columnNumber: 11
			}, this), i("p", {
				className: "text-xs text-muted-foreground",
				children: e.value
			}, void 0, !1, {
				fileName: Z,
				lineNumber: 29,
				columnNumber: 11
			}, this)]
		}, e.label, !0, {
			fileName: Z,
			lineNumber: 24,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: Z,
		lineNumber: 22,
		columnNumber: 5
	}, this);
}
function Ue() {
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
function We(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var Ge = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/AppProviders.tsx";
function Ke({ children: o }) {
	let s = a().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		We("AppRoot", c);
	}, [c]), e(() => {
		g(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		Ue();
	}, []), i(r, { children: o }, void 0, !1, {
		fileName: Ge,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var qe = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/scripts/Wrapper.tsx";
function Je({ children: e }) {
	return i(Ke, { children: e }, void 0, !1, {
		fileName: qe,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/careers/CareersBenefits.wrapper.tsx";
function Ye() {
	return i(Je, { children: i(Q, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Ye as default };
