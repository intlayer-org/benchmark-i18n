import "react";
import { Link as e, useParams as t } from "@tanstack/react-router";
import { Fragment as n, jsxDEV as r } from "react/jsx-dev-runtime";
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
	!l && typeof window < "u" && window.location?.href && (e = A(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = w();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (M(t) && j.has(t)) {
			let e = j.get(t);
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
	!l && typeof window < "u" && window.location?.href && (a = A(window.location.href));
	for (let t of a) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (M(t) && j.has(t)) {
		let n = j.get(t);
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
function re() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function w() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = h(e), re(), S;
}
function T(e) {
	return E(e);
}
function E(e) {
	let t = _(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var D, O;
function k(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (D === t) return O;
	let n = _(new URL(t, "http://example.com")), r = T(n), a = r.href === n.href ? [n] : [n, r], o;
	for (let e of a) {
		for (let t of c) if (v(new i(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return D = t, O = o, o;
}
function A(e) {
	let t = k(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var j = /* @__PURE__ */ new Map();
function M(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var N = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", P = () => "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.", F = () => "Contact", I = () => "Contributing", L = () => "GitHub", R = () => "Methodology", z = () => "Resources", B = () => "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.", V = () => "i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.", H = () => "Contact", U = () => "Contribuer", W = () => "GitHub", G = () => "Méthodologie", K = () => "Ressources", q = () => "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.", J = () => "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.", Y = () => "Contacto", X = () => "Contribuir", ie = () => "GitHub", ae = () => "Metodología", oe = () => "Recursos", se = () => "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.", ce = () => "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.", le = () => "Kontakt", ue = () => "Beitragen", de = () => "GitHub", fe = () => "Methodik", pe = () => "Ressourcen", me = () => "Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.", he = () => "i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.", ge = () => "Contatti", _e = () => "Contribuire", ve = () => "GitHub", ye = () => "Metodologia", be = () => "Risorse", xe = () => "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.", Se = () => "i18n Benchmark — Projeto de código aberto. Construído com React, Vite & TanStack Router.", Ce = () => "Contato", we = () => "Contribuir", Te = () => "GitHub", Ee = () => "Metodologia", De = () => "Recursos", Oe = () => "一个用于测量国际化库对包大小、加载时间和应用反应性实际影响的开源测试应用程序。", ke = () => "i18n Benchmark — 开源项目。使用 React, Vite & TanStack Router 构建。", Ae = () => "联系我们", je = () => "贡献", Me = () => "GitHub", Ne = () => "方法论", Pe = () => "资源", Fe = () => "国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーション。", Ie = () => "i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築されています。", Le = () => "お問い合わせ", Re = () => "貢献する", ze = () => "GitHub", Be = () => "方法論", Ve = () => "リソース", He = () => "국제화 라이브러리가 번들 크기, 로딩 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.", Ue = () => "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.", We = () => "문의하기", Ge = () => "기여하기", Ke = () => "GitHub", qe = () => "방법론", Je = () => "리소스", Ye = () => "Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.", Xe = () => "i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.", Ze = () => "Контакт", Qe = () => "Вклад", $e = () => "GitHub", et = () => "Методология", tt = () => "Ресурсы", nt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? B(e) : n === "es" ? q(e) : n === "de" ? se(e) : n === "it" ? me(e) : n === "pt" ? xe(e) : n === "zh" ? Oe(e) : n === "ja" ? Fe(e) : n === "ko" ? He(e) : n === "ru" ? Ye(e) : N(e);
}), rt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? V(e) : n === "es" ? J(e) : n === "de" ? ce(e) : n === "it" ? he(e) : n === "pt" ? Se(e) : n === "zh" ? ke(e) : n === "ja" ? Ie(e) : n === "ko" ? Ue(e) : n === "ru" ? Xe(e) : P(e);
}), Z = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? H(e) : n === "es" ? Y(e) : n === "de" ? le(e) : n === "it" ? ge(e) : n === "pt" ? Ce(e) : n === "zh" ? Ae(e) : n === "ja" ? Le(e) : n === "ko" ? We(e) : n === "ru" ? Ze(e) : F(e);
}), it = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? U(e) : n === "es" ? X(e) : n === "de" ? ue(e) : n === "it" ? _e(e) : n === "pt" ? we(e) : n === "zh" ? je(e) : n === "ja" ? Re(e) : n === "ko" ? Ge(e) : n === "ru" ? Qe(e) : I(e);
}), at = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? W(e) : n === "es" ? ie(e) : n === "de" ? de(e) : n === "it" ? ve(e) : n === "pt" ? Te(e) : n === "zh" ? Me(e) : n === "ja" ? ze(e) : n === "ko" ? Ke(e) : n === "ru" ? $e(e) : L(e);
}), ot = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? G(e) : n === "es" ? ae(e) : n === "de" ? fe(e) : n === "it" ? ye(e) : n === "pt" ? Ee(e) : n === "zh" ? Ne(e) : n === "ja" ? Be(e) : n === "ko" ? qe(e) : n === "ru" ? et(e) : R(e);
}), st = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? K(e) : n === "es" ? oe(e) : n === "de" ? pe(e) : n === "it" ? be(e) : n === "pt" ? De(e) : n === "zh" ? Pe(e) : n === "ja" ? Ve(e) : n === "ko" ? Je(e) : n === "ru" ? tt(e) : z(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/Footer.tsx";
function ct() {
	let n = t({ strict: !1 }).locale ?? "en", i = [
		{
			label: at(),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: ot(),
			to: "/$locale/about",
			isInternal: !0
		},
		{
			label: it(),
			to: "/$locale/contact",
			isInternal: !0
		}
	];
	return r("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: r("div", {
			className: "container py-8",
			children: [r("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					r("div", { children: [r("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 31,
						columnNumber: 13
					}, this), r("p", {
						className: "text-sm text-muted-foreground",
						children: nt()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 34,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: Q,
						lineNumber: 30,
						columnNumber: 11
					}, this),
					r("div", { children: [r("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: st()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 39,
						columnNumber: 13
					}, this), r("ul", {
						className: "space-y-1",
						children: i.map((t) => r("li", { children: t.isInternal ? r(e, {
							preload: !1,
							to: t.to,
							params: { locale: n },
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: t.label
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 46,
							columnNumber: 21
						}, this) : r("a", {
							href: t.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: t.label
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 55,
							columnNumber: 21
						}, this) }, t.label, !1, {
							fileName: Q,
							lineNumber: 44,
							columnNumber: 17
						}, this))
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 42,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: Q,
						lineNumber: 38,
						columnNumber: 11
					}, this),
					r("div", { children: [r("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: Z()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 69,
						columnNumber: 13
					}, this), r("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 72,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: Q,
						lineNumber: 68,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 29,
				columnNumber: 9
			}, this), r("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: rt()
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 77,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: Q,
			lineNumber: 28,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 27,
		columnNumber: 5
	}, this);
}
var lt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
m("en", { reload: !1 });
function ut({ children: e }) {
	return r(n, { children: e }, void 0, !1, {
		fileName: lt,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/Footer.wrapper.tsx";
function dt() {
	return r(ut, { children: r(ct, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { dt as default };
