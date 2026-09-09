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
	!u && typeof window < "u" && window.location?.href && (e = j(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return f || (d = t, f = !0, te(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = T();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && d !== void 0) n = d;
		else if (N(t) && M.has(t)) {
			let e = M.get(t);
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
var m = (e) => {
	e ? window.location.href = e : window.location.reload();
}, te = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = p();
	} catch {}
	let i = [], a = c;
	!u && typeof window < "u" && window.location?.href && (a = j(window.location.href));
	for (let t of a) if (t === "globalVariable") d = e;
	else if (t === "cookie") {
		if (u || typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${s}`;
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
	let l = () => {
		!u && n.reload && window.location && e !== r && m(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function h(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function g(e) {
	let t = h(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function _(e) {
	return e;
}
function v(e, t) {
	return e.exec(t.href);
}
var y = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
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
	return S = h(e), w(), S;
}
function E(e) {
	return D(e);
}
function D(e) {
	let t = _(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var O, k;
function A(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (O === t) return k;
	let n = _(new URL(t, "http://example.com")), r = E(n), a = r.href === n.href ? [n] : [n, r], o;
	for (let e of a) {
		for (let t of l) if (v(new i(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return O = t, k = o, o;
}
function j(e) {
	let t = A(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var M = /* @__PURE__ */ new Map();
function N(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var P = () => "Built-in", F = () => "Intégré", I = () => "Integrado", L = () => "Integriert", R = () => "Integrato", z = () => "Integrado", B = () => "内置", V = () => "内蔵", H = () => "Built-in", U = () => "Встроено", W = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : n === "ru" ? U(e) : P(e);
}), G = () => "Bundle Size", K = () => "Taille du bundle", q = () => "Tamaño del bundle", J = () => "Bundle-Größe", Y = () => "Dimensione del bundle", X = () => "Tamanho do Bundle", Z = () => "包大小", re = () => "バンドルサイズ", ie = () => "Bundle Size", ae = () => "Размер бандла", oe = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? re(e) : n === "ko" ? ie(e) : n === "ru" ? ae(e) : G(e);
}), se = () => "Lazy Loading", ce = () => "Chargement paresseux", le = () => "Carga diferida", ue = () => "Lazy Loading", de = () => "Caricamento lazy", fe = () => "Carregamento Lento", pe = () => "延迟加载", me = () => "遅延読み込み", he = () => "Lazy Loading", ge = () => "Ленивая загрузка", _e = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? ce(e) : n === "es" ? le(e) : n === "de" ? ue(e) : n === "it" ? de(e) : n === "pt" ? fe(e) : n === "zh" ? pe(e) : n === "ja" ? me(e) : n === "ko" ? he(e) : n === "ru" ? ge(e) : se(e);
}), ve = () => "Library", ye = () => "Bibliothèque", be = () => "Biblioteca", xe = () => "Bibliothek", Se = () => "Libreria", Ce = () => "Biblioteca", we = () => "库", Te = () => "ライブラリ", Ee = () => "Library", De = () => "Библиотека", Oe = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? ye(e) : n === "es" ? be(e) : n === "de" ? xe(e) : n === "it" ? Se(e) : n === "pt" ? Ce(e) : n === "zh" ? we(e) : n === "ja" ? Te(e) : n === "ko" ? Ee(e) : n === "ru" ? De(e) : ve(e);
}), ke = () => "Lookup Time", Ae = () => "Temps de recherche", je = () => "Tiempo de búsqueda", Me = () => "Lookup-Zeit", Ne = () => "Tempo di ricerca", Pe = () => "Tempo de Busca", Fe = () => "查找时间", Ie = () => "ルックアップ時間", Le = () => "Lookup Time", Re = () => "Время поиска", ze = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Ae(e) : n === "es" ? je(e) : n === "de" ? Me(e) : n === "it" ? Ne(e) : n === "pt" ? Pe(e) : n === "zh" ? Fe(e) : n === "ja" ? Ie(e) : n === "ko" ? Le(e) : n === "ru" ? Re(e) : ke(e);
}), Be = () => "Manual", Ve = () => "Manuel", He = () => "Manual", Ue = () => "Manuell", We = () => "Manuale", Ge = () => "Manual", Ke = () => "手动", qe = () => "手動", Je = () => "Manual", Ye = () => "Вручную", Xe = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Ve(e) : n === "es" ? He(e) : n === "de" ? Ue(e) : n === "it" ? We(e) : n === "pt" ? Ge(e) : n === "zh" ? Ke(e) : n === "ja" ? qe(e) : n === "ko" ? Je(e) : n === "ru" ? Ye(e) : Be(e);
}), Ze = () => "Sample Results", Qe = () => "Exemple de résultats", $e = () => "Resultados de muestra", et = () => "Beispielergebnisse", tt = () => "Risultati di esempio", nt = () => "Resultados de exemplo", rt = () => "示例结果", it = () => "サンプル結果", at = () => "Sample Results", ot = () => "Примеры результатов", st = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Qe(e) : n === "es" ? $e(e) : n === "de" ? et(e) : n === "it" ? tt(e) : n === "pt" ? nt(e) : n === "zh" ? rt(e) : n === "ja" ? it(e) : n === "ko" ? at(e) : n === "ru" ? ot(e) : Ze(e);
}), ct = () => "Yes", lt = () => "Oui", ut = () => "Sí", dt = () => "Ja", ft = () => "Sì", pt = () => "Sim", Q = () => "是", mt = () => "はい", ht = () => "Yes", gt = () => "Да", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? lt(e) : n === "es" ? ut(e) : n === "de" ? dt(e) : n === "it" ? ft(e) : n === "pt" ? pt(e) : n === "zh" ? Q(e) : n === "ja" ? mt(e) : n === "ko" ? ht(e) : n === "ru" ? gt(e) : ct(e);
}), _t = n("<section><h2 class=\"mb-6 text-2xl font-bold text-foreground\"></h2><div class=\"overflow-x-auto rounded-lg border border-border\"><table class=\"w-full text-sm\"><thead class=bg-muted><tr><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"></th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"></th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"></th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"></th></tr></thead><tbody>"), vt = n("<tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"></td><td class=\"px-4 py-3 text-muted-foreground\"></td><td class=\"px-4 py-3 text-muted-foreground\"></td><td class=\"px-4 py-3 text-muted-foreground\">");
function yt() {
	let n = () => [
		{
			lib: "react-i18next",
			size: "42.3 kB",
			time: "0.12ms",
			lazy: $()
		},
		{
			lib: "react-intl",
			size: "38.1 kB",
			time: "0.15ms",
			lazy: Xe()
		},
		{
			lib: "lingui",
			size: "12.8 kB",
			time: "0.08ms",
			lazy: $()
		},
		{
			lib: "typesafe-i18n",
			size: "5.2 kB",
			time: "0.05ms",
			lazy: W()
		}
	];
	return (() => {
		var i = _t(), a = i.firstChild, o = a.nextSibling.firstChild.firstChild, s = o.firstChild.firstChild, c = s.nextSibling, l = c.nextSibling, u = l.nextSibling, d = o.nextSibling;
		return t(a, () => st()), t(s, () => Oe()), t(c, () => oe()), t(l, () => ze()), t(u, () => _e()), t(d, e(r, {
			get each() {
				return n();
			},
			children: (e) => (() => {
				var n = vt(), r = n.firstChild, i = r.nextSibling, a = i.nextSibling, o = a.nextSibling;
				return t(r, () => e.lib), t(i, () => e.size), t(a, () => e.time), t(o, () => e.lazy), n;
			})()
		})), i;
	})();
}
export { yt as default };
