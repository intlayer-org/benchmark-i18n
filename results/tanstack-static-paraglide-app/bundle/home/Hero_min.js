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
], s = "PARAGLIDE_LOCALE", ee = 3456e4, c = [
	"cookie",
	"globalVariable",
	"baseLocale"
], l = [], u = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var d, f = !1, p = () => {
	let e = c;
	!u && typeof window < "u" && window.location?.href && (e = P(window.location.href));
	let t = m(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return f || (d = t, f = !0, g(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function m(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = O();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && d !== void 0) n = d;
		else if (I(t) && F.has(t)) {
			let e = F.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return y(t);
			}
		}
		let e = v(n);
		if (e) return e;
	}
}
var h = (e) => {
	e ? window.location.href = e : window.location.reload();
}, g = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = p();
	} catch {}
	let i = [], a = c;
	!u && typeof window < "u" && window.location?.href && (a = P(window.location.href));
	for (let t of a) if (t === "globalVariable") d = e;
	else if (t === "cookie") {
		if (u || typeof document > "u" || typeof window > "u") continue;
		let t = `${s}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, E();
	} else if (t === "baseLocale") continue;
	else if (I(t) && F.has(t)) {
		let n = F.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!u && n.reload && window.location && e !== r && h(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, _ = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function v(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of o) if (e.toLowerCase() === t) return e;
}
function y(e) {
	let t = v(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function b(e) {
	return e;
}
function x(e, t) {
	return e.exec(t.href);
}
var S = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), C = RegExp(`(?:^|;\\s*)${S}=([^;]*)`), w = Symbol(), T = w;
function E() {
	T = w;
}
function D() {
	typeof queueMicrotask == "function" ? queueMicrotask(E) : Promise.resolve().then(E);
}
function O() {
	if (typeof document > "u") return;
	if (T !== w) return T;
	let e = document.cookie.match(C)?.[1];
	return T = v(e), D(), T;
}
function k(e) {
	return A(e);
}
function A(e) {
	let t = b(typeof e == "string" ? new URL(e, _()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && v(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), b(t);
}
var j, M;
function N(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (j === t) return M;
	let n = b(new URL(t, "http://example.com")), r = k(n), i = r.href === n.href ? [n] : [n, r], o;
	for (let e of i) {
		for (let t of l) if (x(new a(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return j = t, M = o, o;
}
function P(e) {
	let t = N(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var F = /* @__PURE__ */ new Map();
function I(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var L = () => "Methodology", R = () => "Méthodologie", z = () => "Metodología", B = () => "Methodik", V = () => "Metodologia", H = () => "Metodologia", U = () => "方法论", W = () => "方法論", G = () => "방법론", K = () => "Методология", q = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? R(e) : n === "es" ? z(e) : n === "de" ? B(e) : n === "it" ? V(e) : n === "pt" ? H(e) : n === "zh" ? U(e) : n === "ja" ? W(e) : n === "ko" ? G(e) : n === "ru" ? K(e) : L(e);
}), J = () => "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.", te = () => "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.", Y = () => "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.", X = () => "Eine Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladeleistung und Rendering-Reaktivität.", Z = () => "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.", Q = () => "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.", ne = () => "一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。", re = () => "国際化ライブラリがバンドルサイズ、ロード性能、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。", ie = () => "국제화 라이브러리가 번들 크기, 로딩 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.", ae = () => "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.", oe = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? te(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? Z(e) : n === "pt" ? Q(e) : n === "zh" ? ne(e) : n === "ja" ? re(e) : n === "ko" ? ie(e) : n === "ru" ? ae(e) : J(e);
}), se = () => "View Results", ce = () => "Voir les résultats", le = () => "Ver resultados", ue = () => "Ergebnisse anzeigen", de = () => "Visualizza i risultati", fe = () => "Ver Resultados", pe = () => "查看结果", $ = () => "結果を見る", me = () => "결과 보기", he = () => "Посмотреть результаты", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? ce(e) : n === "es" ? le(e) : n === "de" ? ue(e) : n === "it" ? de(e) : n === "pt" ? fe(e) : n === "zh" ? pe(e) : n === "ja" ? $(e) : n === "ko" ? me(e) : n === "ru" ? he(e) : se(e);
});
function _e() {
	return i("Hero"), r("section", {
		className: "mb-16 text-center",
		children: [
			n("h1", {
				className: "mb-4 text-4xl font-bold tracking-tight text-foreground",
				children: "i18n Benchmark"
			}),
			n("p", {
				className: "mx-auto max-w-2xl text-lg text-muted-foreground",
				children: oe()
			}),
			r("div", {
				className: "mt-8 flex justify-center gap-4",
				children: [n("button", {
					type: "button",
					className: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: ge()
				}), n("button", {
					type: "button",
					className: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: q()
				})]
			})
		]
	});
}
g("en", { reload: !1 });
function ve({ children: e }) {
	return n(t, { children: e });
}
function ye() {
	return n(ve, { children: n(_e, {}) });
}
export { ye as default };
