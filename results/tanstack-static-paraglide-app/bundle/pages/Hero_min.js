import { useLayoutEffect as e } from "react";
import { Fragment as t, jsx as n, jsxs as r } from "react/jsx-runtime";
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
var D = () => "Methodology", O = () => "Méthodologie", k = () => "Metodología", A = () => "Methodik", j = () => "Metodologia", M = () => "Metodologia", N = () => "方法论", P = () => "方法論", F = () => "방법론", I = () => "Методология", L = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? D(e) : n === "fr" ? O(e) : n === "es" ? k(e) : n === "de" ? A(e) : n === "it" ? j(e) : n === "pt" ? M(e) : n === "zh" ? N(e) : n === "ja" ? P(e) : n === "ko" ? F(e) : I(e);
}), R = () => "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.", z = () => "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.", B = () => "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.", V = () => "Eine Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladeleistung und Rendering-Reaktivität.", ee = () => "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.", H = () => "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.", U = () => "一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。", W = () => "国際化ライブラリがバンドルサイズ、ロード性能、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。", G = () => "국제화 라이브러리가 번들 크기, 로딩 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.", K = () => "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.", q = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? R(e) : n === "fr" ? z(e) : n === "es" ? B(e) : n === "de" ? V(e) : n === "it" ? ee(e) : n === "pt" ? H(e) : n === "zh" ? U(e) : n === "ja" ? W(e) : n === "ko" ? G(e) : K(e);
}), J = () => "View Results", Y = () => "Voir les résultats", X = () => "Ver resultados", Z = () => "Ergebnisse anzeigen", Q = () => "Visualizza i risultati", $ = () => "Ver Resultados", te = () => "查看结果", ne = () => "結果を見る", re = () => "결과 보기", ie = () => "Посмотреть результаты", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? J(e) : n === "fr" ? Y(e) : n === "es" ? X(e) : n === "de" ? Z(e) : n === "it" ? Q(e) : n === "pt" ? $(e) : n === "zh" ? te(e) : n === "ja" ? ne(e) : n === "ko" ? re(e) : ie(e);
});
function oe() {
	return i("Hero"), r("section", {
		className: "mb-16 text-center",
		children: [
			n("h1", {
				className: "mb-4 text-4xl font-bold tracking-tight text-foreground",
				children: "i18n Benchmark"
			}),
			n("p", {
				className: "mx-auto max-w-2xl text-lg text-muted-foreground",
				children: q()
			}),
			r("div", {
				className: "mt-8 flex justify-center gap-4",
				children: [n("button", {
					type: "button",
					className: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: ae()
				}), n("button", {
					type: "button",
					className: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: L()
				})]
			})
		]
	});
}
x("en", { reload: !1 });
function se({ children: e }) {
	return n(t, { children: e });
}
function ce() {
	return n(se, { children: n(oe, {}) });
}
export { ce as default };
