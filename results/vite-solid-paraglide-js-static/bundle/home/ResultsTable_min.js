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
function ee(e) {
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
function f(e) {
	let t = ee(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var p = void 0, m = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	if (p) {
		let e = p?.getStore()?.locale;
		if (e) return e;
	}
	let e = c;
	!m && typeof window < "u" && window.location?.href && (e = f(window.location.href));
	let t = v(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, te(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function v(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = x();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (C(t) && S.has(t)) {
			let e = S.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ne(t);
			}
		}
		let e = b(n);
		if (e) return e;
	}
}
var y = (e) => {
	e ? window.location.href = e : window.location.reload();
}, te = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = _();
	} catch {}
	let i = [], a = c;
	!m && typeof window < "u" && window.location?.href && (a = f(window.location.href));
	for (let t of a) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${s}`;
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
		!m && n.reload && window.location && e !== r && y(void 0);
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
function ne(e) {
	let t = b(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function x() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${o}=([^;]+)`))?.[2];
	return b(e);
}
var S = /* @__PURE__ */ new Map();
function C(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var w = () => "Sample Results", T = () => "Exemple de résultats", E = () => "Resultados de muestra", D = () => "Beispielergebnisse", O = () => "Risultati di esempio", k = () => "Resultados de exemplo", A = () => "示例结果", j = () => "サンプル結果", M = () => "Sample Results", N = () => "Примеры результатов", P = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? w(e) : n === "fr" ? T(e) : n === "es" ? E(e) : n === "de" ? D(e) : n === "it" ? O(e) : n === "pt" ? k(e) : n === "zh" ? A(e) : n === "ja" ? j(e) : n === "ko" ? M(e) : N(e);
}), F = () => "Library", I = () => "Bibliothèque", L = () => "Biblioteca", R = () => "Bibliothek", z = () => "Libreria", B = () => "Biblioteca", V = () => "库", H = () => "ライブラリ", U = () => "Library", W = () => "Библиотека", G = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? F(e) : n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : W(e);
}), K = () => "Bundle Size", q = () => "Taille du bundle", J = () => "Tamaño del bundle", Y = () => "Bundle-Größe", X = () => "Dimensione del bundle", Z = () => "Tamanho do Bundle", re = () => "包大小", ie = () => "バンドルサイズ", ae = () => "Bundle Size", oe = () => "Размер бандла", se = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? K(e) : n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? Z(e) : n === "zh" ? re(e) : n === "ja" ? ie(e) : n === "ko" ? ae(e) : oe(e);
}), ce = () => "Lookup Time", le = () => "Temps de recherche", ue = () => "Tiempo de búsqueda", de = () => "Lookup-Zeit", fe = () => "Tempo di ricerca", pe = () => "Tempo de Busca", me = () => "查找时间", he = () => "ルックアップ時間", ge = () => "Lookup Time", _e = () => "Время поиска", ve = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ce(e) : n === "fr" ? le(e) : n === "es" ? ue(e) : n === "de" ? de(e) : n === "it" ? fe(e) : n === "pt" ? pe(e) : n === "zh" ? me(e) : n === "ja" ? he(e) : n === "ko" ? ge(e) : _e(e);
}), ye = () => "Lazy Loading", be = () => "Chargement paresseux", xe = () => "Carga diferida", Se = () => "Lazy Loading", Ce = () => "Caricamento lazy", we = () => "Carregamento Lento", Te = () => "延迟加载", Ee = () => "遅延読み込み", De = () => "Lazy Loading", Oe = () => "Ленивая загрузка", ke = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ye(e) : n === "fr" ? be(e) : n === "es" ? xe(e) : n === "de" ? Se(e) : n === "it" ? Ce(e) : n === "pt" ? we(e) : n === "zh" ? Te(e) : n === "ja" ? Ee(e) : n === "ko" ? De(e) : Oe(e);
}), Ae = () => "Yes", je = () => "Oui", Me = () => "Sí", Ne = () => "Ja", Pe = () => "Sì", Fe = () => "Sim", Ie = () => "是", Le = () => "はい", Re = () => "Yes", ze = () => "Да", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ae(e) : n === "fr" ? je(e) : n === "es" ? Me(e) : n === "de" ? Ne(e) : n === "it" ? Pe(e) : n === "pt" ? Fe(e) : n === "zh" ? Ie(e) : n === "ja" ? Le(e) : n === "ko" ? Re(e) : ze(e);
}), Be = () => "Manual", Ve = () => "Manuel", He = () => "Manual", Ue = () => "Manuell", We = () => "Manuale", Ge = () => "Manual", Ke = () => "手动", qe = () => "手動", Je = () => "Manual", $ = () => "Вручную", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Be(e) : n === "fr" ? Ve(e) : n === "es" ? He(e) : n === "de" ? Ue(e) : n === "it" ? We(e) : n === "pt" ? Ge(e) : n === "zh" ? Ke(e) : n === "ja" ? qe(e) : n === "ko" ? Je(e) : $(e);
}), Xe = () => "Built-in", Ze = () => "Intégré", Qe = () => "Integrado", $e = () => "Integriert", et = () => "Integrato", tt = () => "Integrado", nt = () => "内置", rt = () => "内蔵", it = () => "Built-in", at = () => "Встроено", ot = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Xe(e) : n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : at(e);
}), st = n("<section><h2 class=\"mb-6 text-2xl font-bold text-foreground\"></h2><div class=\"overflow-x-auto rounded-lg border border-border\"><table class=\"w-full text-sm\"><thead class=bg-muted><tr><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"></th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"></th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"></th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"></th></tr></thead><tbody>"), ct = n("<tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"></td><td class=\"px-4 py-3 text-muted-foreground\"></td><td class=\"px-4 py-3 text-muted-foreground\"></td><td class=\"px-4 py-3 text-muted-foreground\">");
function lt() {
	let n = () => [
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
			lazy: Ye()
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
			lazy: ot()
		}
	];
	return (() => {
		var i = st(), a = i.firstChild, o = a.nextSibling.firstChild.firstChild, s = o.firstChild.firstChild, c = s.nextSibling, l = c.nextSibling, u = l.nextSibling, d = o.nextSibling;
		return t(a, () => P()), t(s, () => G()), t(c, () => se()), t(l, () => ve()), t(u, () => ke()), t(d, e(r, {
			get each() {
				return n();
			},
			children: (e) => (() => {
				var n = ct(), r = n.firstChild, i = r.nextSibling, a = i.nextSibling, o = a.nextSibling;
				return t(r, () => e.lib), t(i, () => e.size), t(a, () => e.time), t(o, () => e.lazy), n;
			})()
		})), i;
	})();
}
export { lt as default };
