import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
import { useParams as o } from "next/navigation";
function s(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), t(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
var c = {}, l = [
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
], u = "PARAGLIDE_LOCALE", ee = 3456e4, d = [
	"cookie",
	"globalVariable",
	"baseLocale"
], f = [], p, m;
function h(e) {
	if (f.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (p === t) return m;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of f) if (new c(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return p = t, m = r, r;
}
function g(e) {
	let t = h(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : d;
}
var _ = void 0, v = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var y, b = !1, x = () => {
	if (_) {
		let e = _?.getStore()?.locale;
		if (e) return e;
	}
	let e = d;
	!v && typeof window < "u" && window.location?.href && (e = g(window.location.href));
	let t = S(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return b || (y = t, b = !0, w(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function S(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = D();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && y !== void 0) n = y;
		else if (k(t) && O.has(t)) {
			let e = O.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return E(t);
			}
		}
		let e = T(n);
		if (e) return e;
	}
}
var C = (e) => {
	e ? window.location.href = e : window.location.reload();
}, w = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = x();
	} catch {}
	let i = [], a = d;
	!v && typeof window < "u" && window.location?.href && (a = g(window.location.href));
	for (let t of a) if (t === "globalVariable") y = e;
	else if (t === "cookie") {
		if (v || typeof document > "u" || typeof window > "u") continue;
		let t = `${u}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (k(t) && O.has(t)) {
		let n = O.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!v && n.reload && window.location && e !== r && C(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function T(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of l) if (e.toLowerCase() === t) return e;
}
function E(e) {
	let t = T(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${l.join(", ")}`);
}
function D() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${u}=([^;]+)`))?.[2];
	return T(e);
}
var O = /* @__PURE__ */ new Map();
function k(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var A = () => "Methodology", j = () => "Méthodologie", M = () => "Metodología", N = () => "Methodik", P = () => "Metodologia", F = () => "Metodologia", I = () => "方法论", L = () => "方法論", R = () => "방법론", z = () => "Методология", B = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? A(e) : n === "fr" ? j(e) : n === "es" ? M(e) : n === "de" ? N(e) : n === "it" ? P(e) : n === "pt" ? F(e) : n === "zh" ? I(e) : n === "ja" ? L(e) : n === "ko" ? R(e) : z(e);
}), V = () => "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.", H = () => "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.", U = () => "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.", W = () => "Eine Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladeleistung und Rendering-Reaktivität.", te = () => "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.", G = () => "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.", K = () => "一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。", q = () => "国際化ライブラリがバンドルサイズ、ロード性能、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。", J = () => "국제화 라이브러리가 번들 크기, 로딩 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.", Y = () => "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.", X = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? V(e) : n === "fr" ? H(e) : n === "es" ? U(e) : n === "de" ? W(e) : n === "it" ? te(e) : n === "pt" ? G(e) : n === "zh" ? K(e) : n === "ja" ? q(e) : n === "ko" ? J(e) : Y(e);
}), Z = () => "View Results", Q = () => "Voir les résultats", ne = () => "Ver resultados", re = () => "Ergebnisse anzeigen", ie = () => "Visualizza i risultati", ae = () => "Ver Resultados", oe = () => "查看结果", $ = () => "結果を見る", se = () => "결과 보기", ce = () => "Посмотреть результаты", le = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Z(e) : n === "fr" ? Q(e) : n === "es" ? ne(e) : n === "de" ? re(e) : n === "it" ? ie(e) : n === "pt" ? ae(e) : n === "zh" ? oe(e) : n === "ja" ? $(e) : n === "ko" ? se(e) : ce(e);
});
function ue() {
	return s("Hero"), a("section", {
		className: "mb-16 text-center",
		children: [
			i("h1", {
				className: "mb-4 text-4xl font-bold tracking-tight text-foreground",
				children: "i18n Benchmark"
			}),
			i("p", {
				className: "mx-auto max-w-2xl text-lg text-muted-foreground",
				children: X()
			}),
			a("div", {
				className: "mt-8 flex justify-center gap-4",
				children: [i("button", {
					type: "button",
					className: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: le()
				}), i("button", {
					type: "button",
					className: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: B()
				})]
			})
		]
	});
}
function de() {
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
function fe(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function pe({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		fe("AppRoot", c);
	}, [c]), e(() => {
		w(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		de();
	}, []), i(r, { children: a });
}
function me({ children: e }) {
	return i(pe, { children: e });
}
function he() {
	return i(me, { children: i(ue, {}) });
}
export { he as default };
