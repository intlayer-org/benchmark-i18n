import "react";
import { Fragment as e, jsxDEV as t } from "react/jsx-dev-runtime";
var n = {}, r = [
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
], i = "PARAGLIDE_LOCALE", a = 3456e4, o = [
	"cookie",
	"globalVariable",
	"baseLocale"
], s = [], c = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var l, u = !1, d = () => {
	let e = o;
	!c && typeof window < "u" && window.location?.href && (e = O(window.location.href));
	let t = f(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return u || (l = t, u = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function f(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ne();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && l !== void 0) n = l;
		else if (A(t) && k.has(t)) {
			let e = k.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return g(t);
			}
		}
		let e = h(n);
		if (e) return e;
	}
}
var p = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = d();
	} catch {}
	let s = [], u = o;
	!c && typeof window < "u" && window.location?.href && (u = O(window.location.href));
	for (let t of u) if (t === "globalVariable") l = e;
	else if (t === "cookie") {
		if (c || typeof document > "u" || typeof window > "u") continue;
		let t = `${i}=${e}; path=/; max-age=${a}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (A(t) && k.has(t)) {
		let n = k.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), s.push(r));
		}
	}
	let f = () => {
		!c && n.reload && window.location && e !== r && p(void 0);
	};
	if (s.length) return Promise.all(s).then(() => {
		f();
	});
	f();
}, ee = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function h(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of r) if (e.toLowerCase() === t) return e;
}
function g(e) {
	let t = h(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${r.join(", ")}`);
}
function _(e) {
	return e;
}
function v(e, t) {
	return e.exec(t.href);
}
var y = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function te() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function ne() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = h(e), te(), S;
}
function re(e) {
	return w(e);
}
function w(e) {
	let t = _(typeof e == "string" ? new URL(e, ee()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var T, E;
function D(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (T === t) return E;
	let r = _(new URL(t, "http://example.com")), i = re(r), a = i.href === r.href ? [r] : [r, i], o;
	for (let e of a) {
		for (let t of s) if (v(new n(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return T = t, E = o, o;
}
function O(e) {
	let t = D(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var k = /* @__PURE__ */ new Map();
function A(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var j = () => "Competitive pay", M = () => "Open source time", N = () => "Top-of-market compensation", P = () => "Work from anywhere in the world", F = () => "Remote", I = () => "Rémunération compétitive", L = () => "Temps dédié à l'open source", R = () => "Rémunération au-dessus du marché", z = () => "Travaillez de n'importe où dans le monde", B = () => "À distance", V = () => "Salario competitivo", H = () => "Tiempo dedicado al código abierto", U = () => "Compensación superior a la del mercado", W = () => "Trabaja desde cualquier lugar del mundo", G = () => "Remoto", K = () => "Wettbewerbsfähige Bezahlung", q = () => "Zeit für Open Source", J = () => "Überdurchschnittliche Vergütung", Y = () => "Arbeiten Sie von überall auf der Welt", X = () => "Remote", ie = () => "Retribuzione competitiva", ae = () => "Tempo dedicato all'open source", oe = () => "Compensazione ai vertici del mercato", se = () => "Lavora da qualsiasi parte del mondo", ce = () => "Remoto", le = () => "Remuneração competitiva", ue = () => "Tempo dedicado ao código aberto", de = () => "Remuneração acima da média do mercado", fe = () => "Trabalhe de qualquer lugar do mundo", pe = () => "Remoto", me = () => "具有竞争力的薪酬", he = () => "开源贡献时间", ge = () => "市场顶尖的薪资待遇", _e = () => "在全球任何地方工作", ve = () => "远程", ye = () => "競争力のある給与", be = () => "オープンソースへの貢献時間", xe = () => "市場最高水準の報酬", Se = () => "世界中のどこからでも働けます", Ce = () => "リモート", we = () => "경쟁력 있는 급여", Te = () => "오픈 소스 기여 시간", Ee = () => "업계 최고 수준의 보상", De = () => "전 세계 어디서나 근무 가능", Oe = () => "원격", ke = () => "Конкурентоспособная оплата", Ae = () => "Время на open source", je = () => "Компенсация выше рыночной", Me = () => "Работайте из любой точки мира", Ne = () => "Удаленно", Pe = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? I(e) : n === "es" ? V(e) : n === "de" ? K(e) : n === "it" ? ie(e) : n === "pt" ? le(e) : n === "zh" ? me(e) : n === "ja" ? ye(e) : n === "ko" ? we(e) : n === "ru" ? ke(e) : j(e);
}), Fe = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? L(e) : n === "es" ? H(e) : n === "de" ? q(e) : n === "it" ? ae(e) : n === "pt" ? ue(e) : n === "zh" ? he(e) : n === "ja" ? be(e) : n === "ko" ? Te(e) : n === "ru" ? Ae(e) : M(e);
}), Ie = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? R(e) : n === "es" ? U(e) : n === "de" ? J(e) : n === "it" ? oe(e) : n === "pt" ? de(e) : n === "zh" ? ge(e) : n === "ja" ? xe(e) : n === "ko" ? Ee(e) : n === "ru" ? je(e) : N(e);
}), Z = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? z(e) : n === "es" ? W(e) : n === "de" ? Y(e) : n === "it" ? se(e) : n === "pt" ? fe(e) : n === "zh" ? _e(e) : n === "ja" ? Se(e) : n === "ko" ? De(e) : n === "ru" ? Me(e) : P(e);
}), Le = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? B(e) : n === "es" ? G(e) : n === "de" ? X(e) : n === "it" ? ce(e) : n === "pt" ? pe(e) : n === "zh" ? ve(e) : n === "ja" ? Ce(e) : n === "ko" ? Oe(e) : n === "ru" ? Ne(e) : F(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/careers/CareersBenefits.tsx";
function Re() {
	let e = [
		{
			label: Le(),
			value: Z()
		},
		{
			label: Pe(),
			value: Ie()
		},
		{
			label: Fe(),
			value: "20% time for OSS contributions"
		}
	];
	return t("div", {
		className: "mb-12 grid gap-4 md:grid-cols-3",
		children: e.map((e) => t("div", {
			className: "rounded-lg border border-border bg-card p-4 text-center",
			children: [t("p", {
				className: "text-sm font-semibold text-foreground",
				children: e.label
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 26,
				columnNumber: 11
			}, this), t("p", {
				className: "text-xs text-muted-foreground",
				children: e.value
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 27,
				columnNumber: 11
			}, this)]
		}, e.label, !0, {
			fileName: Q,
			lineNumber: 22,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 20,
		columnNumber: 5
	}, this);
}
var ze = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
m("en", { reload: !1 });
function Be({ children: n }) {
	return t(e, { children: n }, void 0, !1, {
		fileName: ze,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/careers/CareersBenefits.wrapper.tsx";
function Ve() {
	return t(Be, { children: t(Re, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Ve as default };
