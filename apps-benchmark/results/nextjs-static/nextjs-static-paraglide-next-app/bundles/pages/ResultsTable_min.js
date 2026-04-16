import { Profiler as e, useEffect as t } from "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { useParams as i } from "next/navigation";
var a = {}, o = [
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
], s = "PARAGLIDE_LOCALE", c = 3456e4, l = [
	"cookie",
	"globalVariable",
	"baseLocale"
], u = [], d, f;
function p(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (d === t) return f;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of u) if (new a(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return d = t, f = r, r;
}
function m(e) {
	let t = p(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var h = void 0, g = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var _, v = !1, y = () => {
	if (h) {
		let e = h?.getStore()?.locale;
		if (e) return e;
	}
	let e = l;
	!g && typeof window < "u" && window.location?.href && (e = m(window.location.href));
	let t = b(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return v || (_ = t, v = !0, S(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function b(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = te();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && _ !== void 0) n = _;
		else if (T(t) && w.has(t)) {
			let e = w.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ee(t);
			}
		}
		let e = C(n);
		if (e) return e;
	}
}
var x = (e) => {
	e ? window.location.href = e : window.location.reload();
}, S = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = y();
	} catch {}
	let i = [], a = l;
	!g && typeof window < "u" && window.location?.href && (a = m(window.location.href));
	for (let t of a) if (t === "globalVariable") _ = e;
	else if (t === "cookie") {
		if (g || typeof document > "u" || typeof window > "u") continue;
		let t = `${s}=${e}; path=/; max-age=${c}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (T(t) && w.has(t)) {
		let n = w.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!g && n.reload && window.location && e !== r && x(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function C(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of o) if (e.toLowerCase() === t) return e;
}
function ee(e) {
	let t = C(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function te() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${s}=([^;]+)`))?.[2];
	return C(e);
}
var w = /* @__PURE__ */ new Map();
function T(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var E = () => "Sample Results", D = () => "Exemples de résultats", O = () => "Resultados de muestra", k = () => "Risultati di esempio", A = () => "Resultados de amostra", j = () => "样本结果", M = () => "サンプル結果", N = () => "샘플 결과", P = () => "Примеры результатов", F = E, I = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? E(e) : n === "fr" ? D(e) : n === "es" ? O(e) : n === "de" ? F(e) : n === "it" ? k(e) : n === "pt" ? A(e) : n === "zh" ? j(e) : n === "ja" ? M(e) : n === "ko" ? N(e) : P(e);
}), L = () => "Bundle size", R = () => "Taille du bundle", z = () => "Tamaño del bundle", B = () => "Dimensione del bundle", V = () => "Tamanho do bundle", H = () => "包大小", U = () => "バンドルサイズ", W = () => "번들 크기", G = () => "Размер бандла", K = L, q = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? L(e) : n === "fr" ? R(e) : n === "es" ? z(e) : n === "de" ? K(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : G(e);
}), J = () => "Lookup time", Y = () => "Temps de recherche", X = () => "Tiempo de búsqueda", Z = () => "Suchzeit", ne = () => "Tempo di ricerca", re = () => "Tempo de consulta", ie = () => "查找时间", ae = () => "ルックアップ時間", oe = () => "조회 시간", se = () => "Время поиска", ce = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? J(e) : n === "fr" ? Y(e) : n === "es" ? X(e) : n === "de" ? Z(e) : n === "it" ? ne(e) : n === "pt" ? re(e) : n === "zh" ? ie(e) : n === "ja" ? ae(e) : n === "ko" ? oe(e) : se(e);
}), le = () => "Lazy loading", ue = () => "Chargement différé", de = () => "Carga diferida", fe = () => "Lazy Loading", pe = () => "Caricamento lazy", me = () => "Carregamento lento", he = () => "延迟加载", ge = () => "遅延読み込み", _e = () => "지연 로딩", ve = () => "Ленивая загрузка", ye = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? le(e) : n === "fr" ? ue(e) : n === "es" ? de(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : ve(e);
}), be = () => "Library", xe = () => "Bibliothèque", Se = () => "Biblioteca", Ce = () => "Bibliothek", we = () => "Libreria", Te = () => "Biblioteca", Ee = () => "库", De = () => "ライブラリ", Oe = () => "라이브러리", Q = () => "Библиотека", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? be(e) : n === "fr" ? xe(e) : n === "es" ? Se(e) : n === "de" ? Ce(e) : n === "it" ? we(e) : n === "pt" ? Te(e) : n === "zh" ? Ee(e) : n === "ja" ? De(e) : n === "ko" ? Oe(e) : Q(e);
});
function ke() {
	return r("section", { children: [n("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: I()
	}), n("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: r("table", {
			className: "w-full text-sm",
			children: [n("thead", {
				className: "bg-muted",
				children: r("tr", { children: [
					n("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: $ ? $() : "Library"
					}),
					n("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: q()
					}),
					n("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: ce()
					}),
					n("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: ye()
					})
				] })
			}), n("tbody", { children: [
				{
					lib: "react-i18next",
					size: "42.3 kB",
					time: "0.12ms",
					lazy: "Yes"
				},
				{
					lib: "react-intl",
					size: "38.1 kB",
					time: "0.15ms",
					lazy: "Manual"
				},
				{
					lib: "lingui",
					size: "12.8 kB",
					time: "0.08ms",
					lazy: "Yes"
				},
				{
					lib: "typesafe-i18n",
					size: "5.2 kB",
					time: "0.05ms",
					lazy: "Built-in"
				}
			].map((e) => r("tr", {
				className: "border-t border-border",
				children: [
					n("td", {
						className: "px-4 py-3 font-medium text-foreground",
						children: e.lib
					}),
					n("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.size
					}),
					n("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.time
					}),
					n("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: e.lazy
					})
				]
			}, e.lib)) })]
		})
	})] });
}
function Ae() {
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
function je(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
function Me({ children: r }) {
	let a = i().locale ?? "en";
	return t(() => {
		S(a), document.documentElement.lang = a;
	}, [a]), t(() => {
		Ae();
	}, []), n(e, {
		id: "AppRoot",
		onRender: je,
		children: r
	});
}
function Ne({ children: e }) {
	return n(Me, { children: e });
}
function Pe() {
	return n(Ne, { children: n(ke, {}) });
}
export { Pe as default };
