import { useLayoutEffect as e } from "react";
import { Fragment as t, jsxDEV as n } from "react/jsx-dev-runtime";
function r(t) {
	typeof performance < "u" && performance.mark && performance.mark(`${t}-start`), e(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${t}-end`);
			try {
				performance.measure(`${t}-render`, `${t}-start`, `${t}-end`);
			} catch {}
		}
	}, [t]);
}
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
], o = "PARAGLIDE_LOCALE", ee = 3456e4, s = [
	"cookie",
	"globalVariable",
	"baseLocale"
], c = [], l = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var u, d = !1, f = () => {
	let e = s;
	!l && typeof window < "u" && window.location?.href && (e = j(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = T();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
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
var p = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = f();
	} catch {}
	let i = [], a = s;
	!l && typeof window < "u" && window.location?.href && (a = j(window.location.href));
	for (let t of a) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${ee}`;
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
	let c = () => {
		!l && n.reload && window.location && e !== r && p(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		c();
	});
	c();
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
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (O === t) return k;
	let n = _(new URL(t, "http://example.com")), r = E(n), a = r.href === n.href ? [n] : [n, r], o;
	for (let e of a) {
		for (let t of c) if (v(new i(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return O = t, k = o, o;
}
function j(e) {
	let t = A(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var M = /* @__PURE__ */ new Map();
function N(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var P = () => "Methodology", F = () => "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.", I = () => "View Results", L = () => "Méthodologie", R = () => "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.", z = () => "Voir les résultats", B = () => "Metodología", V = () => "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.", H = () => "Ver resultados", U = () => "Methodik", W = () => "Eine Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladeleistung und Rendering-Reaktivität.", G = () => "Ergebnisse anzeigen", K = () => "Metodologia", q = () => "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.", re = () => "Visualizza i risultati", J = () => "Metodologia", Y = () => "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.", X = () => "Ver Resultados", ie = () => "方法论", ae = () => "一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。", oe = () => "查看结果", se = () => "方法論", ce = () => "国際化ライブラリがバンドルサイズ、ロード性能、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。", le = () => "結果を見る", ue = () => "방법론", de = () => "국제화 라이브러리가 번들 크기, 로딩 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.", fe = () => "결과 보기", pe = () => "Методология", me = () => "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.", he = () => "Посмотреть результаты", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? L(e) : n === "es" ? B(e) : n === "de" ? U(e) : n === "it" ? K(e) : n === "pt" ? J(e) : n === "zh" ? ie(e) : n === "ja" ? se(e) : n === "ko" ? ue(e) : n === "ru" ? pe(e) : P(e);
}), ge = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? R(e) : n === "es" ? V(e) : n === "de" ? W(e) : n === "it" ? q(e) : n === "pt" ? Y(e) : n === "zh" ? ae(e) : n === "ja" ? ce(e) : n === "ko" ? de(e) : n === "ru" ? me(e) : F(e);
}), _e = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? z(e) : n === "es" ? H(e) : n === "de" ? G(e) : n === "it" ? re(e) : n === "pt" ? X(e) : n === "zh" ? oe(e) : n === "ja" ? le(e) : n === "ko" ? fe(e) : n === "ru" ? he(e) : I(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/home/Hero.tsx";
function ve() {
	return r("Hero"), n("section", {
		className: "mb-16 text-center",
		children: [
			n("h1", {
				className: "mb-4 text-4xl font-bold tracking-tight text-foreground",
				children: "i18n Benchmark"
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 8,
				columnNumber: 7
			}, this),
			n("p", {
				className: "mx-auto max-w-2xl text-lg text-muted-foreground",
				children: ge()
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 11,
				columnNumber: 7
			}, this),
			n("div", {
				className: "mt-8 flex justify-center gap-4",
				children: [n("button", {
					type: "button",
					className: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: _e()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 15,
					columnNumber: 9
				}, this), n("button", {
					type: "button",
					className: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: Z()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 21,
					columnNumber: 9
				}, this)]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 14,
				columnNumber: 7
			}, this)
		]
	}, void 0, !0, {
		fileName: Q,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
var ye = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
m("en", { reload: !1 });
function be({ children: e }) {
	return n(t, { children: e }, void 0, !1, {
		fileName: ye,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/home/Hero.wrapper.tsx";
function xe() {
	return n(be, { children: n(ve, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { xe as default };
