import { Profiler as e, useEffect as t, useLayoutEffect as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { useParams as a } from "next/navigation";
function o(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), n(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
var s = {}, c = [
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
], l = "PARAGLIDE_LOCALE", u = 3456e4, d = [
	"cookie",
	"globalVariable",
	"baseLocale"
], f = [], p, m;
function h(e) {
	if (f.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (p === t) return m;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of f) if (new s(e.match, n.href).exec(n.href)) {
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
	if (t) return b || (y = t, b = !0, C(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function S(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = E();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && y !== void 0) n = y;
		else if (O(t) && D.has(t)) {
			let e = D.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return T(t);
			}
		}
		let e = w(n);
		if (e) return e;
	}
}
var ee = (e) => {
	e ? window.location.href = e : window.location.reload();
}, C = (e, t) => {
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
		let t = `${l}=${e}; path=/; max-age=${u}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (O(t) && D.has(t)) {
		let n = D.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!v && n.reload && window.location && e !== r && ee(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function w(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function T(e) {
	let t = w(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function E() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${l}=([^;]+)`))?.[2];
	return w(e);
}
var D = /* @__PURE__ */ new Map();
function O(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var k = () => "Methodology", A = () => "Méthodologie", j = () => "Metodología", M = () => "Methodik", N = () => "Metodologia", P = () => "Metodologia", F = () => "方法论", I = () => "方法論", L = () => "방법론", R = () => "Методология", z = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? k(e) : n === "fr" ? A(e) : n === "es" ? j(e) : n === "de" ? M(e) : n === "it" ? N(e) : n === "pt" ? P(e) : n === "zh" ? F(e) : n === "ja" ? I(e) : n === "ko" ? L(e) : R(e);
}), B = () => "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.", V = () => "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.", H = () => "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.", te = () => "Eine Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladeleistung und Rendering-Reaktivität.", U = () => "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.", W = () => "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.", G = () => "一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。", K = () => "国際化ライブラリがバンドルサイズ、ロード性能、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。", q = () => "국제화 라이브러리가 번들 크기, 로딩 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.", J = () => "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? B(e) : n === "fr" ? V(e) : n === "es" ? H(e) : n === "de" ? te(e) : n === "it" ? U(e) : n === "pt" ? W(e) : n === "zh" ? G(e) : n === "ja" ? K(e) : n === "ko" ? q(e) : J(e);
}), X = () => "View Results", Z = () => "Voir les résultats", Q = () => "Ver resultados", ne = () => "Ergebnisse anzeigen", re = () => "Visualizza i risultati", ie = () => "Ver Resultados", ae = () => "查看结果", oe = () => "結果を見る", $ = () => "결과 보기", se = () => "Посмотреть результаты", ce = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? X(e) : n === "fr" ? Z(e) : n === "es" ? Q(e) : n === "de" ? ne(e) : n === "it" ? re(e) : n === "pt" ? ie(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? $(e) : se(e);
});
function le() {
	return o("Hero"), i("section", {
		className: "mb-16 text-center",
		children: [
			r("h1", {
				className: "mb-4 text-4xl font-bold tracking-tight text-foreground",
				children: "i18n Benchmark"
			}),
			r("p", {
				className: "mx-auto max-w-2xl text-lg text-muted-foreground",
				children: Y()
			}),
			i("div", {
				className: "mt-8 flex justify-center gap-4",
				children: [r("button", {
					type: "button",
					className: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: ce()
				}), r("button", {
					type: "button",
					className: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: z()
				})]
			})
		]
	});
}
function ue() {
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
function de(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
function fe({ children: n }) {
	let i = a().locale ?? "en";
	return t(() => {
		C(i), document.documentElement.lang = i;
	}, [i]), t(() => {
		ue();
	}, []), r(e, {
		id: "AppRoot",
		onRender: de,
		children: n
	});
}
function pe({ children: e }) {
	return r(fe, { children: e });
}
function me() {
	return r(pe, { children: r(le, {}) });
}
export { me as default };
