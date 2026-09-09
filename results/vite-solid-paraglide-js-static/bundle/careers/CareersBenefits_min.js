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
], l = [], u = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var d, f = !1, p = () => {
	let e = c;
	!u && typeof window < "u" && window.location?.href && (e = M(window.location.href));
	let t = m(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return f || (d = t, f = !0, h(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function m(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = E();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && d !== void 0) n = d;
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
var ee = (e) => {
	e ? window.location.href = e : window.location.reload();
}, h = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = p();
	} catch {}
	let i = [], a = c;
	!u && typeof window < "u" && window.location?.href && (a = M(window.location.href));
	for (let t of a) if (t === "globalVariable") d = e;
	else if (t === "cookie") {
		if (u || typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${s}`;
		document.cookie = t, w();
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
	let l = () => {
		!u && n.reload && window.location && e !== r && ee(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
}, g = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function _(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function v(e) {
	let t = _(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function y(e) {
	return e;
}
function b(e, t) {
	return e.exec(t.href);
}
var x = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), te = RegExp(`(?:^|;\\s*)${x}=([^;]*)`), S = Symbol(), C = S;
function w() {
	C = S;
}
function T() {
	typeof queueMicrotask == "function" ? queueMicrotask(w) : Promise.resolve().then(w);
}
function E() {
	if (typeof document > "u") return;
	if (C !== S) return C;
	let e = document.cookie.match(te)?.[1];
	return C = _(e), T(), C;
}
function D(e) {
	return O(e);
}
function O(e) {
	let t = y(typeof e == "string" ? new URL(e, g()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && _(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), y(t);
}
var k, A;
function j(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (k === t) return A;
	let n = y(new URL(t, "http://example.com")), r = D(n), a = r.href === n.href ? [n] : [n, r], o;
	for (let e of a) {
		for (let t of l) if (b(new i(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return k = t, A = o, o;
}
function M(e) {
	let t = j(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var N = /* @__PURE__ */ new Map();
function P(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var F = () => "Open source time", I = () => "Temps open source", L = () => "Tiempo para el código abierto", R = () => "Open-Source-Zeit", z = () => "Tempo per l'open source", B = () => "Tempo para o código aberto", V = () => "开源时间", H = () => "オープンソースの時間", U = () => "Open source time", W = () => "Время на open source", G = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : n === "ru" ? W(e) : F(e);
}), K = () => "20% time for OSS contributions", q = () => "20 % du temps pour contribuer à l'OSS", J = () => "20% del tiempo para contribuciones a OSS", Y = () => "20 % der Zeit für OSS-Beiträge", X = () => "20% del tempo per contributi open source", Z = () => "20% do tempo para contribuições OSS", Q = () => "20% 的时间用于 OSS 贡献", ne = () => "時間の20%をOSSへの貢献に", re = () => "20% time for OSS contributions", ie = () => "20% времени на вклад в OSS", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? Z(e) : n === "zh" ? Q(e) : n === "ja" ? ne(e) : n === "ko" ? re(e) : n === "ru" ? ie(e) : K(e);
}), oe = () => "Competitive pay", se = () => "Rémunération compétitive", ce = () => "Salario competitivo", le = () => "Wettbewerbsfähige Bezahlung", ue = () => "Retribuzione competitiva", de = () => "Salário competitivo", fe = () => "具有竞争力的薪酬", pe = () => "競争力のある給与", me = () => "Competitive pay", he = () => "Конкурентная зарплата", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : n === "ru" ? he(e) : oe(e);
}), _e = () => "Top-of-market compensation", ve = () => "Fourchettes haut de marché", ye = () => "Compensación superior a la del mercado", be = () => "Überdurchschnittliche Vergütung", xe = () => "Compensazione ai vertici del mercato", Se = () => "Remuneração acima do mercado", Ce = () => "市场顶尖的薪资水平", we = () => "市場トップクラスの報酬", Te = () => "Top-of-market compensation", Ee = () => "Вознаграждение выше рыночного", De = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : n === "ru" ? Ee(e) : _e(e);
}), Oe = () => "Remote-first", ke = () => "Remote-first", Ae = () => "Remoto primero", je = () => "Remote-First", Me = () => "Remote-first", Ne = () => "Remoto primeiro", Pe = () => "远程优先", Fe = () => "リモートファースト", Ie = () => "Remote-first", Le = () => "Удаленная работа", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : n === "ru" ? Le(e) : Oe(e);
}), ze = () => "Work from anywhere in the world", Be = () => "Travaillez depuis n'importe où", Ve = () => "Trabaja desde cualquier lugar del mundo", $ = () => "Arbeiten Sie von überall auf der Welt", He = () => "Lavora da qualsiasi parte del mondo", Ue = () => "Trabalhe de qualquer lugar do mundo", We = () => "在世界任何地方工作", Ge = () => "世界中のどこからでも仕事ができます", Ke = () => "Work from anywhere in the world", qe = () => "Работайте из любой точки мира", Je = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Be(e) : n === "es" ? Ve(e) : n === "de" ? $(e) : n === "it" ? He(e) : n === "pt" ? Ue(e) : n === "zh" ? We(e) : n === "ja" ? Ge(e) : n === "ko" ? Ke(e) : n === "ru" ? qe(e) : ze(e);
}), Ye = n("<div class=\"mb-12 grid gap-4 md:grid-cols-3\">"), Xe = n("<div class=\"rounded-lg border border-border bg-card p-4 text-center\"><p class=\"text-sm font-semibold text-foreground\"></p><p class=\"text-xs text-muted-foreground\">");
function Ze() {
	let n = () => [
		{
			label: Re(),
			value: Je()
		},
		{
			label: ge(),
			value: De()
		},
		{
			label: G(),
			value: ae()
		}
	];
	return (() => {
		var i = Ye();
		return t(i, e(r, {
			get each() {
				return n();
			},
			children: (e) => (() => {
				var n = Xe(), r = n.firstChild, i = r.nextSibling;
				return t(r, () => e.label), t(i, () => e.value), n;
			})()
		})), i;
	})();
}
export { Ze as default };
