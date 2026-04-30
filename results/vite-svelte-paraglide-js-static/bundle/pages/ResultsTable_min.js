import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { onMount as t } from "svelte";
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
], s = [], c, l;
function u(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (c === t) return l;
	let r = new URL(t, "http://dummy.com"), i;
	for (let e of s) if (new n(e.match, r.href).exec(r.href)) {
		i = e;
		break;
	}
	return c = t, l = i, i;
}
function d(e) {
	let t = u(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var f = void 0, p = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var m, h = !1, g = () => {
	if (f) {
		let e = f?.getStore()?.locale;
		if (e) return e;
	}
	let e = o;
	!p && typeof window < "u" && window.location?.href && (e = d(window.location.href));
	let t = _(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return h || (m = t, h = !0, y(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function _(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = te();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && m !== void 0) n = m;
		else if (S(t) && x.has(t)) {
			let e = x.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ee(t);
			}
		}
		let e = b(n);
		if (e) return e;
	}
}
var v = (e) => {
	e ? window.location.href = e : window.location.reload();
}, y = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = g();
	} catch {}
	let s = [], c = o;
	!p && typeof window < "u" && window.location?.href && (c = d(window.location.href));
	for (let t of c) if (t === "globalVariable") m = e;
	else if (t === "cookie") {
		if (p || typeof document > "u" || typeof window > "u") continue;
		let t = `${i}=${e}; path=/; max-age=${a}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (S(t) && x.has(t)) {
		let n = x.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), s.push(r));
		}
	}
	let l = () => {
		!p && n.reload && window.location && e !== r && v(void 0);
	};
	if (s.length) return Promise.all(s).then(() => {
		l();
	});
	l();
};
function b(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of r) if (e.toLowerCase() === t) return e;
}
function ee(e) {
	let t = b(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${r.join(", ")}`);
}
function te() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${i}=([^;]+)`))?.[2];
	return b(e);
}
var x = /* @__PURE__ */ new Map();
function S(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var ne = () => "Sample Results", C = () => "Exemple de résultats", w = () => "Resultados de muestra", T = () => "Beispielergebnisse", E = () => "Risultati di esempio", D = () => "Resultados de exemplo", O = () => "示例结果", k = () => "サンプル結果", A = () => "Sample Results", j = () => "Примеры результатов", M = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? ne(e) : n === "fr" ? C(e) : n === "es" ? w(e) : n === "de" ? T(e) : n === "it" ? E(e) : n === "pt" ? D(e) : n === "zh" ? O(e) : n === "ja" ? k(e) : n === "ko" ? A(e) : j(e);
}), N = () => "Library", P = () => "Bibliothèque", F = () => "Biblioteca", I = () => "Bibliothek", L = () => "Libreria", R = () => "Biblioteca", z = () => "库", B = () => "ライブラリ", V = () => "Library", H = () => "Библиотека", U = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? N(e) : n === "fr" ? P(e) : n === "es" ? F(e) : n === "de" ? I(e) : n === "it" ? L(e) : n === "pt" ? R(e) : n === "zh" ? z(e) : n === "ja" ? B(e) : n === "ko" ? V(e) : H(e);
}), W = () => "Bundle Size", G = () => "Taille du bundle", K = () => "Tamaño del bundle", q = () => "Bundle-Größe", J = () => "Dimensione del bundle", Y = () => "Tamanho do Bundle", X = () => "包大小", Z = () => "バンドルサイズ", re = () => "Bundle Size", ie = () => "Размер бандла", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? W(e) : n === "fr" ? G(e) : n === "es" ? K(e) : n === "de" ? q(e) : n === "it" ? J(e) : n === "pt" ? Y(e) : n === "zh" ? X(e) : n === "ja" ? Z(e) : n === "ko" ? re(e) : ie(e);
}), oe = () => "Lookup Time", se = () => "Temps de recherche", ce = () => "Tiempo de búsqueda", le = () => "Lookup-Zeit", ue = () => "Tempo di ricerca", de = () => "Tempo de Busca", fe = () => "查找时间", pe = () => "ルックアップ時間", me = () => "Lookup Time", he = () => "Время поиска", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? oe(e) : n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : he(e);
}), _e = () => "Lazy Loading", ve = () => "Chargement paresseux", ye = () => "Carga diferida", be = () => "Lazy Loading", xe = () => "Caricamento lazy", Se = () => "Carregamento Lento", Ce = () => "延迟加载", we = () => "遅延読み込み", Te = () => "Lazy Loading", Ee = () => "Ленивая загрузка", De = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? _e(e) : n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : Ee(e);
}), Oe = () => "Yes", ke = () => "Oui", Ae = () => "Sí", je = () => "Ja", Me = () => "Sì", Ne = () => "Sim", Pe = () => "是", Fe = () => "はい", Ie = () => "Yes", Le = () => "Да", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Oe(e) : n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : Le(e);
}), Re = () => "Manual", ze = () => "Manuel", Be = () => "Manual", Ve = () => "Manuell", He = () => "Manuale", Ue = () => "Manual", We = () => "手动", Ge = () => "手動", Ke = () => "Manual", qe = () => "Вручную", Je = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Re(e) : n === "fr" ? ze(e) : n === "es" ? Be(e) : n === "de" ? Ve(e) : n === "it" ? He(e) : n === "pt" ? Ue(e) : n === "zh" ? We(e) : n === "ja" ? Ge(e) : n === "ko" ? Ke(e) : qe(e);
}), $ = () => "Built-in", Ye = () => "Intégré", Xe = () => "Integrado", Ze = () => "Integriert", Qe = () => "Integrato", $e = () => "Integrado", et = () => "内置", tt = () => "内蔵", nt = () => "Built-in", rt = () => "Встроено", it = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? $(e) : n === "fr" ? Ye(e) : n === "es" ? Xe(e) : n === "de" ? Ze(e) : n === "it" ? Qe(e) : n === "pt" ? $e(e) : n === "zh" ? et(e) : n === "ja" ? tt(e) : n === "ko" ? nt(e) : rt(e);
});
function at(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), t(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var ot = e.from_html("<tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td><td class=\"px-4 py-3 text-muted-foreground\"> </td></tr>"), st = e.from_html("<section><h2 class=\"mb-6 text-2xl font-bold text-foreground\"> </h2> <div class=\"overflow-x-auto rounded-lg border border-border\"><table class=\"w-full text-sm\"><thead class=\"bg-muted\"><tr><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"> </th></tr></thead><tbody></tbody></table></div></section>");
function ct(t, n) {
	e.push(n, !1), at("ResultsTable");
	let r = [
		{
			lib: "react-i18next",
			size: "42.3 kB",
			time: "0.12ms",
			lazy: Q()
		},
		{
			lib: "react-intl",
			size: "38.1 kB",
			time: "0.15ms",
			lazy: Je()
		},
		{
			lib: "lingui",
			size: "12.8 kB",
			time: "0.08ms",
			lazy: Q()
		},
		{
			lib: "typesafe-i18n",
			size: "5.2 kB",
			time: "0.05ms",
			lazy: it()
		}
	];
	e.init();
	var i = st(), a = e.child(i), o = e.child(a, !0);
	e.reset(a);
	var s = e.sibling(a, 2), c = e.child(s), l = e.child(c), u = e.child(l), d = e.child(u), f = e.child(d, !0);
	e.reset(d);
	var p = e.sibling(d), m = e.child(p, !0);
	e.reset(p);
	var h = e.sibling(p), g = e.child(h, !0);
	e.reset(h);
	var _ = e.sibling(h), v = e.child(_, !0);
	e.reset(_), e.reset(u), e.reset(l);
	var y = e.sibling(l);
	e.each(y, 5, () => r, e.index, (t, n) => {
		var r = ot(), i = e.child(r), a = e.child(i, !0);
		e.reset(i);
		var o = e.sibling(i), s = e.child(o, !0);
		e.reset(o);
		var c = e.sibling(o), l = e.child(c, !0);
		e.reset(c);
		var u = e.sibling(c), d = e.child(u, !0);
		e.reset(u), e.reset(r), e.template_effect(() => {
			e.set_text(a, e.get(n).lib), e.set_text(s, e.get(n).size), e.set_text(l, e.get(n).time), e.set_text(d, e.get(n).lazy);
		}), e.append(t, r);
	}), e.reset(y), e.reset(c), e.reset(s), e.reset(i), e.template_effect((t, n, r, i, a) => {
		e.set_text(o, t), e.set_text(f, n), e.set_text(m, r), e.set_text(g, i), e.set_text(v, a);
	}, [
		() => M(),
		() => U(),
		() => ae(),
		() => ge(),
		() => De()
	]), e.append(t, i), e.pop();
}
export { ct as default };
