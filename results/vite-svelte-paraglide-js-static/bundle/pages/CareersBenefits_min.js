import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { derived as t, writable as n } from "svelte/store";
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
var f = void 0, p = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var m, h = !1, g = () => {
	if (f) {
		let e = f?.getStore()?.locale;
		if (e) return e;
	}
	let e = s;
	!p && typeof window < "u" && window.location?.href && (e = d(window.location.href));
	let t = _(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return h || (m = t, h = !0, te(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function _(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = x();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && m !== void 0) n = m;
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
var v = (e) => {
	e ? window.location.href = e : window.location.reload();
}, te = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = g();
	} catch {}
	let i = [], c = s;
	!p && typeof window < "u" && window.location?.href && (c = d(window.location.href));
	for (let t of c) if (t === "globalVariable") m = e;
	else if (t === "cookie") {
		if (p || typeof document > "u" || typeof window > "u") continue;
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
		!p && n.reload && window.location && e !== r && v(void 0);
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
var w = () => "Remote-first", T = () => "Remote-first", E = () => "Remoto primero", D = () => "Remote-First", O = () => "Remote-first", k = () => "Remoto primeiro", A = () => "远程优先", j = () => "リモートファースト", M = () => "Remote-first", N = () => "Удаленная работа", P = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? w(e) : n === "fr" ? T(e) : n === "es" ? E(e) : n === "de" ? D(e) : n === "it" ? O(e) : n === "pt" ? k(e) : n === "zh" ? A(e) : n === "ja" ? j(e) : n === "ko" ? M(e) : N(e);
}), F = () => "Work from anywhere in the world", I = () => "Travaillez depuis n'importe où", L = () => "Trabaja desde cualquier lugar del mundo", R = () => "Arbeiten Sie von überall auf der Welt", z = () => "Lavora da qualsiasi parte del mondo", B = () => "Trabalhe de qualquer lugar do mundo", V = () => "在世界任何地方工作", H = () => "世界中のどこからでも仕事ができます", U = () => "Work from anywhere in the world", W = () => "Работайте из любой точки мира", G = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? F(e) : n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : W(e);
}), K = () => "Competitive pay", q = () => "Rémunération compétitive", J = () => "Salario competitivo", Y = () => "Wettbewerbsfähige Bezahlung", X = () => "Retribuzione competitiva", Z = () => "Salário competitivo", Q = () => "具有竞争力的薪酬", ne = () => "競争力のある給与", re = () => "Competitive pay", ie = () => "Конкурентная зарплата", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? K(e) : n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? Z(e) : n === "zh" ? Q(e) : n === "ja" ? ne(e) : n === "ko" ? re(e) : ie(e);
}), oe = () => "Top-of-market compensation", se = () => "Fourchettes haut de marché", ce = () => "Compensación superior a la del mercado", le = () => "Überdurchschnittliche Vergütung", ue = () => "Compensazione ai vertici del mercato", de = () => "Remuneração acima do mercado", fe = () => "市场顶尖的薪资水平", pe = () => "市場トップクラスの報酬", me = () => "Top-of-market compensation", he = () => "Вознаграждение выше рыночного", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? oe(e) : n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : he(e);
}), _e = () => "Open source time", ve = () => "Temps open source", ye = () => "Tiempo para el código abierto", be = () => "Open-Source-Zeit", xe = () => "Tempo per l'open source", Se = () => "Tempo para o código aberto", Ce = () => "开源时间", we = () => "オープンソースの時間", Te = () => "Open source time", Ee = () => "Время на open source", De = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? _e(e) : n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : Ee(e);
}), Oe = () => "20% time for OSS contributions", ke = () => "20 % du temps pour contribuer à l'OSS", Ae = () => "20% del tiempo para contribuciones a OSS", je = () => "20 % der Zeit für OSS-Beiträge", Me = () => "20% del tempo per contributi open source", Ne = () => "20% do tempo para contribuições OSS", Pe = () => "20% 的时间用于 OSS 贡献", $ = () => "時間の20%をOSSへの貢献に", Fe = () => "20% time for OSS contributions", Ie = () => "20% времени на вклад в OSS", Le = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Oe(e) : n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? $(e) : n === "ko" ? Fe(e) : Ie(e);
}), Re = [
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
];
function ze(e) {
	return Re.includes(e);
}
var Be = new Set([
	"",
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"pricing",
	"products",
	"settings",
	"team"
]);
function Ve(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!ze(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !Be.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var He = t(n(typeof window < "u" ? window.location.pathname : "/en"), (e) => Ve(e)), Ue = e.from_html("<div class=\"rounded-lg border border-border bg-card p-4 text-center\"><p class=\"text-sm font-semibold text-foreground\"> </p> <p class=\"text-xs text-muted-foreground\"> </p></div>"), We = e.from_html("<div class=\"mb-12 grid gap-4 md:grid-cols-3\"></div>");
function Ge(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(He, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), s = e.derived(() => (e.get(o), [
		{
			label: P(),
			value: G()
		},
		{
			label: ae(),
			value: ge()
		},
		{
			label: De(),
			value: Le()
		}
	]));
	var c = We();
	e.each(c, 21, () => e.get(s), e.index, (t, n) => {
		var r = Ue(), i = e.child(r), a = e.child(i, !0);
		e.reset(i);
		var o = e.sibling(i, 2), s = e.child(o, !0);
		e.reset(o), e.reset(r), e.template_effect(() => {
			e.set_text(a, e.get(n).label), e.set_text(s, e.get(n).value);
		}), e.append(t, r);
	}), e.reset(c), e.append(t, c), e.pop(), a();
}
export { Ge as default };
