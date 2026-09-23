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
], c = [], l = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var u, d = !1, f = () => {
	let e = s;
	!l && typeof window < "u" && window.location?.href && (e = j(window.location.href));
	let t = p(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function p(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = T();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (N(t) && M.has(t)) {
			let e = M.get(t);
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
	!l && typeof window < "u" && window.location?.href && (c = j(window.location.href));
	for (let t of c) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (N(t) && M.has(t)) {
		let n = M.get(t);
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
function w() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function T() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = g(e), w(), S;
}
function E(e) {
	return D(e);
}
function D(e) {
	let t = _(typeof e == "string" ? new URL(e, h()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var O, k;
function A(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (O === t) return k;
	let n = _(new URL(t, "http://example.com")), i = E(n), a = i.href === n.href ? [n] : [n, i], o;
	for (let e of a) {
		for (let t of c) if (v(new r(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return O = t, k = o, o;
}
function j(e) {
	let t = A(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var M = /* @__PURE__ */ new Map();
function N(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var P = () => "Competitive pay", F = () => "Rémunération compétitive", I = () => "Salario competitivo", L = () => "Wettbewerbsfähige Bezahlung", R = () => "Retribuzione competitiva", z = () => "Remuneração competitiva", B = () => "具有竞争力的薪酬", V = () => "競争力のある給与", H = () => "경쟁력 있는 급여", U = () => "Конкурентоспособная оплата", W = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : n === "ru" ? U(e) : P(e);
}), G = () => "Open source time", K = () => "Temps dédié à l'open source", q = () => "Tiempo dedicado al código abierto", J = () => "Zeit für Open Source", Y = () => "Tempo dedicato all'open source", X = () => "Tempo dedicado ao código aberto", Z = () => "开源贡献时间", Q = () => "オープンソースへの貢献時間", ne = () => "오픈 소스 기여 시간", re = () => "Время на open source", ie = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? Q(e) : n === "ko" ? ne(e) : n === "ru" ? re(e) : G(e);
}), ae = () => "Top-of-market compensation", oe = () => "Rémunération au-dessus du marché", se = () => "Compensación superior a la del mercado", ce = () => "Überdurchschnittliche Vergütung", le = () => "Compensazione ai vertici del mercato", ue = () => "Remuneração acima da média do mercado", de = () => "市场顶尖的薪资待遇", fe = () => "市場最高水準の報酬", pe = () => "업계 최고 수준의 보상", me = () => "Компенсация выше рыночной", he = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? oe(e) : n === "es" ? se(e) : n === "de" ? ce(e) : n === "it" ? le(e) : n === "pt" ? ue(e) : n === "zh" ? de(e) : n === "ja" ? fe(e) : n === "ko" ? pe(e) : n === "ru" ? me(e) : ae(e);
}), ge = () => "Work from anywhere in the world", _e = () => "Travaillez de n'importe où dans le monde", ve = () => "Trabaja desde cualquier lugar del mundo", ye = () => "Arbeiten Sie von überall auf der Welt", be = () => "Lavora da qualsiasi parte del mondo", xe = () => "Trabalhe de qualquer lugar do mundo", Se = () => "在全球任何地方工作", Ce = () => "世界中のどこからでも働けます", we = () => "전 세계 어디서나 근무 가능", Te = () => "Работайте из любой точки мира", Ee = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? _e(e) : n === "es" ? ve(e) : n === "de" ? ye(e) : n === "it" ? be(e) : n === "pt" ? xe(e) : n === "zh" ? Se(e) : n === "ja" ? Ce(e) : n === "ko" ? we(e) : n === "ru" ? Te(e) : ge(e);
}), De = () => "Remote", $ = () => "À distance", Oe = () => "Remoto", ke = () => "Remote", Ae = () => "Remoto", je = () => "Remoto", Me = () => "远程", Ne = () => "リモート", Pe = () => "원격", Fe = () => "Удаленно", Ie = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? $(e) : n === "es" ? Oe(e) : n === "de" ? ke(e) : n === "it" ? Ae(e) : n === "pt" ? je(e) : n === "zh" ? Me(e) : n === "ja" ? Ne(e) : n === "ko" ? Pe(e) : n === "ru" ? Fe(e) : De(e);
});
function Le() {
	let e = [
		{
			label: Ie(),
			value: Ee()
		},
		{
			label: W(),
			value: he()
		},
		{
			label: ie(),
			value: "20% time for OSS contributions"
		}
	];
	return t("div", {
		className: "mb-12 grid gap-4 md:grid-cols-3",
		children: e.map((e) => n("div", {
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
m("en", { reload: !1 });
function Re({ children: n }) {
	return t(e, { children: n });
}
function ze() {
	return t(Re, { children: t(Le, {}) });
}
export { ze as default };
