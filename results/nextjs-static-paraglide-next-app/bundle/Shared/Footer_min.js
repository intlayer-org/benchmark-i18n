import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import r from "next/link";
import { useParams as i } from "next/navigation";
import { Fragment as a, jsxDEV as o } from "react/jsx-dev-runtime";
var s = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/Link.tsx", c = (e) => /^https?:\/\//.test(e ?? "");
function ee(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var l = ({ href: e, children: t, ...n }) => {
	let a = i().locale ?? "en";
	return e == null || typeof e != "string" ? o(r, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: s,
		lineNumber: 23,
		columnNumber: 7
	}, void 0) : c(e) ? o(r, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: s,
		lineNumber: 30,
		columnNumber: 7
	}, void 0) : o(r, {
		href: ee(e, a),
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: s,
		lineNumber: 36,
		columnNumber: 5
	}, void 0);
}, u = {}, d = [
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
], f = "PARAGLIDE_LOCALE", p = 3456e4, m = [
	"cookie",
	"globalVariable",
	"baseLocale"
], h = [], g = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var _, v = !1, y = () => {
	let e = m;
	!g && typeof window < "u" && window.location?.href && (e = L(window.location.href));
	let t = b(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return v || (_ = t, v = !0, S(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function b(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = j();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && _ !== void 0) n = _;
		else if (z(t) && R.has(t)) {
			let e = R.get(t);
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
	let i = [], a = m;
	!g && typeof window < "u" && window.location?.href && (a = L(window.location.href));
	for (let t of a) if (t === "globalVariable") _ = e;
	else if (t === "cookie") {
		if (g || typeof document > "u" || typeof window > "u") continue;
		let t = `${f}=${e}; path=/; max-age=${p}`;
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
		!g && n.reload && window.location && e !== r && x(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, C = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function w(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of d) if (e.toLowerCase() === t) return e;
}
function T(e) {
	let t = w(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${d.join(", ")}`);
}
function E(e) {
	return e;
}
function te(e, t) {
	return e.exec(t.href);
}
var ne = f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), re = RegExp(`(?:^|;\\s*)${ne}=([^;]*)`), D = Symbol(), O = D;
function k() {
	O = D;
}
function A() {
	typeof queueMicrotask == "function" ? queueMicrotask(k) : Promise.resolve().then(k);
}
function j() {
	if (typeof document > "u") return;
	if (O !== D) return O;
	let e = document.cookie.match(re)?.[1];
	return O = w(e), A(), O;
}
function M(e) {
	return N(e);
}
function N(e) {
	let t = E(typeof e == "string" ? new URL(e, C()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && w(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), E(t);
}
var P, F;
function I(e) {
	if (h.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (P === t) return F;
	let n = E(new URL(t, "http://example.com")), r = M(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of h) if (te(new u(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return P = t, F = a, a;
}
function L(e) {
	let t = I(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : m;
}
var R = /* @__PURE__ */ new Map();
function z(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var B = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", V = () => "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.", H = () => "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.", U = () => "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.", W = () => "Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.", G = () => "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.", K = () => "一个用于测量国际化库对包大小、加载时间和应用反应性实际影响的开源测试应用程序。", q = () => "国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーション。", J = () => "국제화 라이브러리가 번들 크기, 로딩 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.", Y = () => "Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.", X = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "fr" ? V(e) : n === "es" ? H(e) : n === "de" ? U(e) : n === "it" ? W(e) : n === "pt" ? G(e) : n === "zh" ? K(e) : n === "ja" ? q(e) : n === "ko" ? J(e) : n === "ru" ? Y(e) : B(e);
}), ie = () => "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.", ae = () => "i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.", oe = () => "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.", se = () => "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.", ce = () => "i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.", le = () => "i18n Benchmark — Projeto de código aberto. Construído com React, Vite & TanStack Router.", ue = () => "i18n Benchmark — 开源项目。使用 React, Vite & TanStack Router 构建。", de = () => "i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築されています。", fe = () => "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.", pe = () => "i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.", me = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "fr" ? ae(e) : n === "es" ? oe(e) : n === "de" ? se(e) : n === "it" ? ce(e) : n === "pt" ? le(e) : n === "zh" ? ue(e) : n === "ja" ? de(e) : n === "ko" ? fe(e) : n === "ru" ? pe(e) : ie(e);
}), he = () => "Contact", ge = () => "Contact", _e = () => "Contacto", ve = () => "Kontakt", ye = () => "Contatti", be = () => "Contato", xe = () => "联系我们", Se = () => "お問い合わせ", Ce = () => "문의하기", we = () => "Контакт", Te = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "fr" ? ge(e) : n === "es" ? _e(e) : n === "de" ? ve(e) : n === "it" ? ye(e) : n === "pt" ? be(e) : n === "zh" ? xe(e) : n === "ja" ? Se(e) : n === "ko" ? Ce(e) : n === "ru" ? we(e) : he(e);
}), Ee = () => "Contributing", De = () => "Contribuer", Oe = () => "Contribuir", ke = () => "Beitragen", Ae = () => "Contribuire", je = () => "Contribuir", Me = () => "贡献", Ne = () => "貢献する", Pe = () => "기여하기", Fe = () => "Вклад", Ie = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "fr" ? De(e) : n === "es" ? Oe(e) : n === "de" ? ke(e) : n === "it" ? Ae(e) : n === "pt" ? je(e) : n === "zh" ? Me(e) : n === "ja" ? Ne(e) : n === "ko" ? Pe(e) : n === "ru" ? Fe(e) : Ee(e);
}), Le = () => "GitHub", Re = () => "GitHub", ze = () => "GitHub", Be = () => "GitHub", Ve = () => "GitHub", He = () => "GitHub", Ue = () => "GitHub", We = () => "GitHub", Ge = () => "GitHub", Ke = () => "GitHub", qe = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "fr" ? Re(e) : n === "es" ? ze(e) : n === "de" ? Be(e) : n === "it" ? Ve(e) : n === "pt" ? He(e) : n === "zh" ? Ue(e) : n === "ja" ? We(e) : n === "ko" ? Ge(e) : n === "ru" ? Ke(e) : Le(e);
}), Je = () => "Methodology", Ye = () => "Méthodologie", Xe = () => "Metodología", Ze = () => "Methodik", Qe = () => "Metodologia", $e = () => "Metodologia", et = () => "方法论", tt = () => "方法論", nt = () => "방법론", rt = () => "Методология", it = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "fr" ? Ye(e) : n === "es" ? Xe(e) : n === "de" ? Ze(e) : n === "it" ? Qe(e) : n === "pt" ? $e(e) : n === "zh" ? et(e) : n === "ja" ? tt(e) : n === "ko" ? nt(e) : n === "ru" ? rt(e) : Je(e);
}), at = () => "Resources", ot = () => "Ressources", st = () => "Recursos", ct = () => "Ressourcen", lt = () => "Risorse", ut = () => "Recursos", dt = () => "资源", ft = () => "リソース", pt = () => "리소스", mt = () => "Ресурсы", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "fr" ? ot(e) : n === "es" ? st(e) : n === "de" ? ct(e) : n === "it" ? lt(e) : n === "pt" ? ut(e) : n === "zh" ? dt(e) : n === "ja" ? ft(e) : n === "ko" ? pt(e) : n === "ru" ? mt(e) : at(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/Footer.tsx";
function ht() {
	let e = [
		{
			label: qe(),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: it(),
			href: "/about",
			isInternal: !0
		},
		{
			label: Ie(),
			href: "/contact",
			isInternal: !0
		}
	];
	return o("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: o("div", {
			className: "container py-8",
			children: [o("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					o("div", { children: [o("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 30,
						columnNumber: 13
					}, this), o("p", {
						className: "text-sm text-muted-foreground",
						children: X()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 33,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: Q,
						lineNumber: 29,
						columnNumber: 11
					}, this),
					o("div", { children: [o("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: Z()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 38,
						columnNumber: 13
					}, this), o("ul", {
						className: "space-y-1",
						children: e.map((e) => o("li", { children: e.isInternal ? o(l, {
							href: e.href,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 45,
							columnNumber: 21
						}, this) : o("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 52,
							columnNumber: 21
						}, this) }, e.label, !1, {
							fileName: Q,
							lineNumber: 43,
							columnNumber: 17
						}, this))
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 41,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: Q,
						lineNumber: 37,
						columnNumber: 11
					}, this),
					o("div", { children: [o("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: Te()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 66,
						columnNumber: 13
					}, this), o("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 69,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: Q,
						lineNumber: 65,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 28,
				columnNumber: 9
			}, this), o("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: me()
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 74,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: Q,
			lineNumber: 27,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 26,
		columnNumber: 5
	}, this);
}
function gt() {
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
function _t(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var vt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/AppProviders.tsx";
function yt({ children: r }) {
	let s = i().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		_t("AppRoot", c);
	}, [c]), e(() => {
		S(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		gt();
	}, []), o(a, { children: r }, void 0, !1, {
		fileName: vt,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var bt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/scripts/Wrapper.tsx";
function xt({ children: e }) {
	return o(yt, { children: e }, void 0, !1, {
		fileName: bt,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/Footer.wrapper.tsx";
function St() {
	return o(xt, { children: o(ht, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { St as default };
