import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
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
], c = [], l, u;
function ee(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (l === t) return u;
	let n = new URL(t, "http://dummy.com"), i;
	for (let e of c) if (new r(e.match, n.href).exec(n.href)) {
		i = e;
		break;
	}
	return l = t, u = i, i;
}
function d(e) {
	let t = ee(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var f = void 0;
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	if (f) {
		let e = f?.getStore()?.locale;
		if (e) return e;
	}
	let e = s;
	typeof window < "u" && window.location?.href && (e = d(window.location.href));
	let t = g(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, v(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function g(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = x();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (C(t) && S.has(t)) {
			let e = S.get(t);
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
	let i = [], c = s;
	typeof window < "u" && window.location?.href && (c = d(window.location.href));
	for (let t of c) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (C(t) && S.has(t)) {
		let n = S.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let l = () => {
		n.reload && window.location && e !== r && _(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
};
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function b(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function x() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${a}=([^;]+)`))?.[2];
	return y(e);
}
var S = /* @__PURE__ */ new Map();
function C(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var w = () => "Work from anywhere in the world", T = () => "Travaillez de n'importe où dans le monde", E = () => "Trabaja desde cualquier lugar del mundo", D = () => "Arbeiten Sie von überall auf der Welt", O = () => "Lavora da qualsiasi parte del mondo", k = () => "Trabalhe de qualquer lugar do mundo", A = () => "在全球任何地方工作", j = () => "世界中のどこからでも働けます", M = () => "전 세계 어디서나 근무 가능", N = () => "Работайте из любой точки мира", P = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? w(e) : n === "fr" ? T(e) : n === "es" ? E(e) : n === "de" ? D(e) : n === "it" ? O(e) : n === "pt" ? k(e) : n === "zh" ? A(e) : n === "ja" ? j(e) : n === "ko" ? M(e) : N(e);
}), F = () => "Competitive pay", I = () => "Rémunération compétitive", L = () => "Salario competitivo", R = () => "Wettbewerbsfähige Bezahlung", z = () => "Retribuzione competitiva", B = () => "Remuneração competitiva", V = () => "具有竞争力的薪酬", H = () => "競争力のある給与", U = () => "경쟁력 있는 급여", W = () => "Конкурентоспособная оплата", G = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? F(e) : n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : W(e);
}), K = () => "Top-of-market compensation", te = () => "Rémunération au-dessus du marché", q = () => "Compensación superior a la del mercado", J = () => "Überdurchschnittliche Vergütung", Y = () => "Compensazione ai vertici del mercato", X = () => "Remuneração acima da média do mercado", Z = () => "市场顶尖的薪资待遇", Q = () => "市場最高水準の報酬", ne = () => "업계 최고 수준의 보상", re = () => "Компенсация выше рыночной", ie = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? K(e) : n === "fr" ? te(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? Q(e) : n === "ko" ? ne(e) : re(e);
}), ae = () => "Open source time", oe = () => "Temps dédié à l'open source", se = () => "Tiempo dedicado al código abierto", ce = () => "Zeit für Open Source", le = () => "Tempo dedicato all'open source", ue = () => "Tempo dedicado ao código aberto", de = () => "开源贡献时间", fe = () => "オープンソースへの貢献時間", pe = () => "오픈 소스 기여 시간", me = () => "Время на open source", he = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ae(e) : n === "fr" ? oe(e) : n === "es" ? se(e) : n === "de" ? ce(e) : n === "it" ? le(e) : n === "pt" ? ue(e) : n === "zh" ? de(e) : n === "ja" ? fe(e) : n === "ko" ? pe(e) : me(e);
}), ge = () => "Remote", _e = () => "À distance", ve = () => "Remoto", ye = () => "Remote", be = () => "Remoto", $ = () => "Remoto", xe = () => "远程", Se = () => "リモート", Ce = () => "원격", we = () => "Удаленно", Te = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ge(e) : n === "fr" ? _e(e) : n === "es" ? ve(e) : n === "de" ? ye(e) : n === "it" ? be(e) : n === "pt" ? $(e) : n === "zh" ? xe(e) : n === "ja" ? Se(e) : n === "ko" ? Ce(e) : we(e);
});
function Ee() {
	return t("div", {
		className: "mb-12 grid gap-4 md:grid-cols-3",
		children: [
			{
				label: Te(),
				value: P()
			},
			{
				label: G(),
				value: ie()
			},
			{
				label: he(),
				value: "20% time for OSS contributions"
			}
		].map((e) => n("div", {
			className: "rounded-lg border border-border bg-card p-4 text-center",
			children: [t("p", {
				className: "text-sm font-semibold text-foreground",
				children: e.label
			}), t("p", {
				className: "text-xs text-muted-foreground",
				children: e.value
			})]
		}, e.label))
	});
}
v("en", { reload: !1 });
function De({ children: n }) {
	return t(e, { children: n });
}
function Oe() {
	return t(De, { children: t(Ee, {}) });
}
export { Oe as default };
