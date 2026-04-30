import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r } from "solid-js";
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
var m = void 0, h = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var g, _ = !1, v = () => {
	if (m) {
		let e = m?.getStore()?.locale;
		if (e) return e;
	}
	let e = c;
	!h && typeof window < "u" && window.location?.href && (e = p(window.location.href));
	let t = y(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return _ || (g = t, _ = !0, te(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function y(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = S();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && g !== void 0) n = g;
		else if (w(t) && C.has(t)) {
			let e = C.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return x(t);
			}
		}
		let e = b(n);
		if (e) return e;
	}
}
var ee = (e) => {
	e ? window.location.href = e : window.location.reload();
}, te = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = v();
	} catch {}
	let i = [], a = c;
	!h && typeof window < "u" && window.location?.href && (a = p(window.location.href));
	for (let t of a) if (t === "globalVariable") g = e;
	else if (t === "cookie") {
		if (h || typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${s}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (w(t) && C.has(t)) {
		let n = C.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let l = () => {
		!h && n.reload && window.location && e !== r && ee(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
};
function b(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function x(e) {
	let t = b(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function S() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${o}=([^;]+)`))?.[2];
	return b(e);
}
var C = /* @__PURE__ */ new Map();
function w(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var T = () => "Remote-first", E = () => "Remote-first", D = () => "Remoto primero", O = () => "Remote-First", k = () => "Remote-first", A = () => "Remoto primeiro", j = () => "远程优先", M = () => "リモートファースト", N = () => "Remote-first", P = () => "Удаленная работа", F = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? T(e) : n === "fr" ? E(e) : n === "es" ? D(e) : n === "de" ? O(e) : n === "it" ? k(e) : n === "pt" ? A(e) : n === "zh" ? j(e) : n === "ja" ? M(e) : n === "ko" ? N(e) : P(e);
}), I = () => "Work from anywhere in the world", L = () => "Travaillez depuis n'importe où", R = () => "Trabaja desde cualquier lugar del mundo", z = () => "Arbeiten Sie von überall auf der Welt", B = () => "Lavora da qualsiasi parte del mondo", V = () => "Trabalhe de qualquer lugar do mundo", H = () => "在世界任何地方工作", U = () => "世界中のどこからでも仕事ができます", W = () => "Work from anywhere in the world", G = () => "Работайте из любой точки мира", K = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? I(e) : n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : G(e);
}), q = () => "Competitive pay", J = () => "Rémunération compétitive", Y = () => "Salario competitivo", X = () => "Wettbewerbsfähige Bezahlung", Z = () => "Retribuzione competitiva", Q = () => "Salário competitivo", ne = () => "具有竞争力的薪酬", re = () => "競争力のある給与", ie = () => "Competitive pay", ae = () => "Конкурентная зарплата", oe = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? q(e) : n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? Z(e) : n === "pt" ? Q(e) : n === "zh" ? ne(e) : n === "ja" ? re(e) : n === "ko" ? ie(e) : ae(e);
}), se = () => "Top-of-market compensation", ce = () => "Fourchettes haut de marché", le = () => "Compensación superior a la del mercado", ue = () => "Überdurchschnittliche Vergütung", de = () => "Compensazione ai vertici del mercato", fe = () => "Remuneração acima do mercado", pe = () => "市场顶尖的薪资水平", me = () => "市場トップクラスの報酬", he = () => "Top-of-market compensation", ge = () => "Вознаграждение выше рыночного", _e = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? se(e) : n === "fr" ? ce(e) : n === "es" ? le(e) : n === "de" ? ue(e) : n === "it" ? de(e) : n === "pt" ? fe(e) : n === "zh" ? pe(e) : n === "ja" ? me(e) : n === "ko" ? he(e) : ge(e);
}), ve = () => "Open source time", ye = () => "Temps open source", be = () => "Tiempo para el código abierto", xe = () => "Open-Source-Zeit", Se = () => "Tempo per l'open source", Ce = () => "Tempo para o código aberto", we = () => "开源时间", Te = () => "オープンソースの時間", Ee = () => "Open source time", De = () => "Время на open source", Oe = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? ve(e) : n === "fr" ? ye(e) : n === "es" ? be(e) : n === "de" ? xe(e) : n === "it" ? Se(e) : n === "pt" ? Ce(e) : n === "zh" ? we(e) : n === "ja" ? Te(e) : n === "ko" ? Ee(e) : De(e);
}), ke = () => "20% time for OSS contributions", Ae = () => "20 % du temps pour contribuer à l'OSS", je = () => "20% del tiempo para contribuciones a OSS", Me = () => "20 % der Zeit für OSS-Beiträge", Ne = () => "20% del tempo per contributi open source", Pe = () => "20% do tempo para contribuições OSS", $ = () => "20% 的时间用于 OSS 贡献", Fe = () => "時間の20%をOSSへの貢献に", Ie = () => "20% time for OSS contributions", Le = () => "20% времени на вклад в OSS", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? ke(e) : n === "fr" ? Ae(e) : n === "es" ? je(e) : n === "de" ? Me(e) : n === "it" ? Ne(e) : n === "pt" ? Pe(e) : n === "zh" ? $(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : Le(e);
}), ze = n("<div class=\"mb-12 grid gap-4 md:grid-cols-3\">"), Be = n("<div class=\"rounded-lg border border-border bg-card p-4 text-center\"><p class=\"text-sm font-semibold text-foreground\"></p><p class=\"text-xs text-muted-foreground\">");
function Ve() {
	let n = () => [
		{
			label: F(),
			value: K()
		},
		{
			label: oe(),
			value: _e()
		},
		{
			label: Oe(),
			value: Re()
		}
	];
	return (() => {
		var i = ze();
		return t(i, e(r, {
			get each() {
				return n();
			},
			children: (e) => (() => {
				var n = Be(), r = n.firstChild, i = r.nextSibling;
				return t(r, () => e.label), t(i, () => e.value), n;
			})()
		})), i;
	})();
}
export { Ve as default };
