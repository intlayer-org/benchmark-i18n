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
], f = [], p = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var m, h = !1, g = () => {
	let e = d;
	!p && typeof window < "u" && window.location?.href && (e = L(window.location.href));
	let t = _(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return h || (m = t, h = !0, y(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function _(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = j();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && m !== void 0) n = m;
		else if (z(t) && R.has(t)) {
			let e = R.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return S(t);
			}
		}
		let e = x(n);
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
	let i = [], a = d;
	!p && typeof window < "u" && window.location?.href && (a = L(window.location.href));
	for (let t of a) if (t === "globalVariable") m = e;
	else if (t === "cookie") {
		if (p || typeof document > "u" || typeof window > "u") continue;
		let t = `${u}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, k();
	} else if (t === "baseLocale") continue;
	else if (z(t) && R.has(t)) {
		let n = R.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!p && n.reload && window.location && e !== r && v(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, b = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function x(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of l) if (e.toLowerCase() === t) return e;
}
function S(e) {
	let t = x(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${l.join(", ")}`);
}
function C(e) {
	return e;
}
function w(e, t) {
	return e.exec(t.href);
}
var T = u.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), E = RegExp(`(?:^|;\\s*)${T}=([^;]*)`), D = Symbol(), O = D;
function k() {
	O = D;
}
function A() {
	typeof queueMicrotask == "function" ? queueMicrotask(k) : Promise.resolve().then(k);
}
function j() {
	if (typeof document > "u") return;
	if (O !== D) return O;
	let e = document.cookie.match(E)?.[1];
	return O = x(e), A(), O;
}
function M(e) {
	return N(e);
}
function N(e) {
	let t = C(typeof e == "string" ? new URL(e, b()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && x(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), C(t);
}
var P, F;
function I(e) {
	if (f.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (P === t) return F;
	let n = C(new URL(t, "http://example.com")), r = M(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of f) if (w(new c(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return P = t, F = a, a;
}
function L(e) {
	let t = I(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : d;
}
var R = /* @__PURE__ */ new Map();
function z(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var B = () => "Methodology", V = () => "Méthodologie", H = () => "Metodología", U = () => "Methodik", W = () => "Metodologia", G = () => "Metodologia", K = () => "方法论", q = () => "方法論", J = () => "방법론", Y = () => "Методология", X = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? V(e) : n === "es" ? H(e) : n === "de" ? U(e) : n === "it" ? W(e) : n === "pt" ? G(e) : n === "zh" ? K(e) : n === "ja" ? q(e) : n === "ko" ? J(e) : n === "ru" ? Y(e) : B(e);
}), Z = () => "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.", te = () => "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.", Q = () => "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.", ne = () => "Eine Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladeleistung und Rendering-Reaktivität.", re = () => "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.", ie = () => "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.", ae = () => "一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。", oe = () => "国際化ライブラリがバンドルサイズ、ロード性能、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。", se = () => "국제화 라이브러리가 번들 크기, 로딩 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.", ce = () => "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.", le = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? te(e) : n === "es" ? Q(e) : n === "de" ? ne(e) : n === "it" ? re(e) : n === "pt" ? ie(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : n === "ru" ? ce(e) : Z(e);
}), ue = () => "View Results", de = () => "Voir les résultats", fe = () => "Ver resultados", pe = () => "Ergebnisse anzeigen", me = () => "Visualizza i risultati", he = () => "Ver Resultados", ge = () => "查看结果", _e = () => "結果を見る", ve = () => "결과 보기", ye = () => "Посмотреть результаты", be = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? de(e) : n === "es" ? fe(e) : n === "de" ? pe(e) : n === "it" ? me(e) : n === "pt" ? he(e) : n === "zh" ? ge(e) : n === "ja" ? _e(e) : n === "ko" ? ve(e) : n === "ru" ? ye(e) : ue(e);
});
function $() {
	return s("Hero"), a("section", {
		className: "mb-16 text-center",
		children: [
			i("h1", {
				className: "mb-4 text-4xl font-bold tracking-tight text-foreground",
				children: "i18n Benchmark"
			}),
			i("p", {
				className: "mx-auto max-w-2xl text-lg text-muted-foreground",
				children: le()
			}),
			a("div", {
				className: "mt-8 flex justify-center gap-4",
				children: [i("button", {
					type: "button",
					className: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: be()
				}), i("button", {
					type: "button",
					className: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: X()
				})]
			})
		]
	});
}
function xe() {
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
function Se(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Ce({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Se("AppRoot", c);
	}, [c]), e(() => {
		y(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		xe();
	}, []), i(r, { children: a });
}
function we({ children: e }) {
	return i(Ce, { children: e });
}
function Te() {
	return i(we, { children: i($, {}) });
}
export { Te as default };
