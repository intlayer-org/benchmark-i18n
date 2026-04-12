import { useLayoutEffect as e } from "react";
import { Fragment as t, jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/hooks/usePerformanceMeasure.ts
function i(t) {
	typeof performance < "u" && performance.mark && performance.mark(`${t}-start`), e(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${t}-end`);
			try {
				performance.measure(`${t}-render`, `${t}-start`, `${t}-end`);
			} catch {}
		}
	}, [t]);
}
//#endregion
//#region src/paraglide/runtime.js
var a = {}, o = [
	"en",
	"de",
	"fr",
	"es",
	"ja",
	"zh",
	"ko",
	"it",
	"pt"
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
var h = void 0;
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var g, _ = !1, v = () => {
	if (h) {
		let e = h?.getStore()?.locale;
		if (e) return e;
	}
	let e = l;
	typeof window < "u" && window.location?.href && (e = m(window.location.href));
	let t = y(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return _ || (g = t, _ = !0, x(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function y(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = w();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && g !== void 0) n = g;
		else if (E(t) && T.has(t)) {
			let e = T.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return C(t);
			}
		}
		let e = S(n);
		if (e) return e;
	}
}
var b = (e) => {
	e ? window.location.href = e : window.location.reload();
}, x = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = v();
	} catch {}
	let i = [], a = l;
	typeof window < "u" && window.location?.href && (a = m(window.location.href));
	for (let t of a) if (t === "globalVariable") g = e;
	else if (t === "cookie") {
		if (typeof document > "u" || typeof window > "u") continue;
		let t = `${s}=${e}; path=/; max-age=${c}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (E(t) && T.has(t)) {
		let n = T.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		n.reload && window.location && e !== r && b(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function S(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of o) if (e.toLowerCase() === t) return e;
}
function C(e) {
	let t = S(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function w() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${s}=([^;]+)`))?.[2];
	return S(e);
}
var T = /* @__PURE__ */ new Map();
function E(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
//#endregion
//#region src/paraglide/messages/header_methodology.js
var D = () => "Methodology", O = () => "Methodik", k = () => "Méthodologie", A = () => "Metodología", j = () => "方法論", M = () => "方法论", N = () => "방법론", P = () => "Metodologia", F = () => "Metodologia", I = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? D(e) : n === "de" ? O(e) : n === "fr" ? k(e) : n === "es" ? A(e) : n === "ja" ? j(e) : n === "zh" ? M(e) : n === "ko" ? N(e) : n === "it" ? P(e) : F(e);
}), L = () => "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.", ee = () => "Eine Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladeleistung und Rendering-Reaktivität.", R = () => "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.", z = () => "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.", B = () => "国際化ライブラリがバンドルサイズ、ロード性能、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。", V = () => "一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。", H = () => "국제화 라이브러리가 번들 크기, 로딩 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.", U = () => "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.", W = () => "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.", G = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? L(e) : n === "de" ? ee(e) : n === "fr" ? R(e) : n === "es" ? z(e) : n === "ja" ? B(e) : n === "zh" ? V(e) : n === "ko" ? H(e) : n === "it" ? U(e) : W(e);
}), K = () => "View Results", q = () => "Ergebnisse anzeigen", J = () => "Voir les résultats", Y = () => "Ver resultados", X = () => "結果を見る", Z = () => "查看结果", Q = () => "결과 보기", $ = () => "Visualizza i risultati", te = () => "Ver Resultados", ne = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? K(e) : n === "de" ? q(e) : n === "fr" ? J(e) : n === "es" ? Y(e) : n === "ja" ? X(e) : n === "zh" ? Z(e) : n === "ko" ? Q(e) : n === "it" ? $(e) : te(e);
});
//#endregion
//#region src/components/pages/home/Hero.tsx
function re() {
	return i("Hero"), /* @__PURE__ */ r("section", {
		className: "mb-16 text-center",
		children: [
			/* @__PURE__ */ n("h1", {
				className: "mb-4 text-4xl font-bold tracking-tight text-foreground",
				children: "i18n Benchmark"
			}),
			/* @__PURE__ */ n("p", {
				className: "mx-auto max-w-2xl text-lg text-muted-foreground",
				children: G()
			}),
			/* @__PURE__ */ r("div", {
				className: "mt-8 flex justify-center gap-4",
				children: [/* @__PURE__ */ n("button", {
					type: "button",
					className: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: ne()
				}), /* @__PURE__ */ n("button", {
					type: "button",
					className: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: I()
				})]
			})
		]
	});
}
//#endregion
//#region scripts/Wrapper.tsx
x("en", { reload: !1 });
function ie({ children: e }) {
	return /* @__PURE__ */ n(t, { children: e });
}
//#endregion
//#region src/components/pages/home/Hero.wrapper.tsx
function ae() {
	return /* @__PURE__ */ n(ie, { children: /* @__PURE__ */ n(re, {}) });
}
//#endregion
export { ae as default };
