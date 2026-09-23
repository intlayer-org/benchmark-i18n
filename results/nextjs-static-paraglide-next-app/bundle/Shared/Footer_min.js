import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import r from "next/link";
import { useParams as i } from "next/navigation";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
var c = (e) => /^https?:\/\//.test(e ?? "");
function l(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var u = ({ href: e, children: t, ...n }) => {
	let a = i().locale ?? "en";
	return e == null || typeof e != "string" || c(e) ? o(r, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}) : o(r, {
		href: l(e, a),
		prefetch: !1,
		...n,
		children: t
	});
}, d = {}, f = [
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
], p = "PARAGLIDE_LOCALE", m = 3456e4, h = [
	"cookie",
	"globalVariable",
	"baseLocale"
], g = [], _ = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var v, y = !1, b = () => {
	let e = h;
	!_ && typeof window < "u" && window.location?.href && (e = z(window.location.href));
	let t = x(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return y || (v = t, y = !0, C(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function x(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = N();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && v !== void 0) n = v;
		else if (V(t) && B.has(t)) {
			let e = B.get(t);
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
var S = (e) => {
	e ? window.location.href = e : window.location.reload();
}, C = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = b();
	} catch {}
	let i = [], a = h;
	!_ && typeof window < "u" && window.location?.href && (a = z(window.location.href));
	for (let t of a) if (t === "globalVariable") v = e;
	else if (t === "cookie") {
		if (_ || typeof document > "u" || typeof window > "u") continue;
		let t = `${p}=${e}; path=/; max-age=${m}`;
		document.cookie = t, j();
	} else if (t === "baseLocale") continue;
	else if (V(t) && B.has(t)) {
		let n = B.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!_ && n.reload && window.location && e !== r && S(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, w = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function T(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of f) if (e.toLowerCase() === t) return e;
}
function E(e) {
	let t = T(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${f.join(", ")}`);
}
function D(e) {
	return e;
}
function ee(e, t) {
	return e.exec(t.href);
}
var te = p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), O = RegExp(`(?:^|;\\s*)${te}=([^;]*)`), k = Symbol(), A = k;
function j() {
	A = k;
}
function M() {
	typeof queueMicrotask == "function" ? queueMicrotask(j) : Promise.resolve().then(j);
}
function N() {
	if (typeof document > "u") return;
	if (A !== k) return A;
	let e = document.cookie.match(O)?.[1];
	return A = T(e), M(), A;
}
function P(e) {
	return F(e);
}
function F(e) {
	let t = D(typeof e == "string" ? new URL(e, w()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && T(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), D(t);
}
var I, L;
function R(e) {
	if (g.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (I === t) return L;
	let n = D(new URL(t, "http://example.com")), r = P(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of g) if (ee(new d(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return I = t, L = a, a;
}
function z(e) {
	let t = R(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : h;
}
var B = /* @__PURE__ */ new Map();
function V(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var H = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", U = () => "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.", W = () => "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.", G = () => "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.", K = () => "Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.", q = () => "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.", J = () => "一个用于测量国际化库对包大小、加载时间和应用反应性实际影响的开源测试应用程序。", Y = () => "国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーション。", X = () => "국제화 라이브러리가 번들 크기, 로딩 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.", Z = () => "Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "fr" ? U(e) : n === "es" ? W(e) : n === "de" ? G(e) : n === "it" ? K(e) : n === "pt" ? q(e) : n === "zh" ? J(e) : n === "ja" ? Y(e) : n === "ko" ? X(e) : n === "ru" ? Z(e) : H(e);
}), ne = () => "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.", re = () => "i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.", ie = () => "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.", ae = () => "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.", oe = () => "i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.", se = () => "i18n Benchmark — Projeto de código aberto. Construído com React, Vite & TanStack Router.", ce = () => "i18n Benchmark — 开源项目。使用 React, Vite & TanStack Router 构建。", le = () => "i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築されています。", ue = () => "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.", de = () => "i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.", fe = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "fr" ? re(e) : n === "es" ? ie(e) : n === "de" ? ae(e) : n === "it" ? oe(e) : n === "pt" ? se(e) : n === "zh" ? ce(e) : n === "ja" ? le(e) : n === "ko" ? ue(e) : n === "ru" ? de(e) : ne(e);
}), pe = () => "Contact", me = () => "Contact", he = () => "Contacto", ge = () => "Kontakt", _e = () => "Contatti", ve = () => "Contato", ye = () => "联系我们", be = () => "お問い合わせ", xe = () => "문의하기", Se = () => "Контакт", Ce = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "fr" ? me(e) : n === "es" ? he(e) : n === "de" ? ge(e) : n === "it" ? _e(e) : n === "pt" ? ve(e) : n === "zh" ? ye(e) : n === "ja" ? be(e) : n === "ko" ? xe(e) : n === "ru" ? Se(e) : pe(e);
}), we = () => "Contributing", Te = () => "Contribuer", Ee = () => "Contribuir", De = () => "Beitragen", Oe = () => "Contribuire", ke = () => "Contribuir", Ae = () => "贡献", je = () => "貢献する", Me = () => "기여하기", Ne = () => "Вклад", Pe = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "fr" ? Te(e) : n === "es" ? Ee(e) : n === "de" ? De(e) : n === "it" ? Oe(e) : n === "pt" ? ke(e) : n === "zh" ? Ae(e) : n === "ja" ? je(e) : n === "ko" ? Me(e) : n === "ru" ? Ne(e) : we(e);
}), Fe = () => "GitHub", Ie = () => "GitHub", Le = () => "GitHub", Re = () => "GitHub", ze = () => "GitHub", Be = () => "GitHub", Ve = () => "GitHub", He = () => "GitHub", Ue = () => "GitHub", We = () => "GitHub", Ge = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "fr" ? Ie(e) : n === "es" ? Le(e) : n === "de" ? Re(e) : n === "it" ? ze(e) : n === "pt" ? Be(e) : n === "zh" ? Ve(e) : n === "ja" ? He(e) : n === "ko" ? Ue(e) : n === "ru" ? We(e) : Fe(e);
}), Ke = () => "Methodology", qe = () => "Méthodologie", Je = () => "Metodología", Ye = () => "Methodik", Xe = () => "Metodologia", Ze = () => "Metodologia", Qe = () => "方法论", $e = () => "方法論", et = () => "방법론", tt = () => "Методология", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "fr" ? qe(e) : n === "es" ? Je(e) : n === "de" ? Ye(e) : n === "it" ? Xe(e) : n === "pt" ? Ze(e) : n === "zh" ? Qe(e) : n === "ja" ? $e(e) : n === "ko" ? et(e) : n === "ru" ? tt(e) : Ke(e);
}), nt = () => "Resources", rt = () => "Ressources", it = () => "Recursos", at = () => "Ressourcen", ot = () => "Risorse", st = () => "Recursos", ct = () => "资源", lt = () => "リソース", ut = () => "리소스", dt = () => "Ресурсы", ft = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "fr" ? rt(e) : n === "es" ? it(e) : n === "de" ? at(e) : n === "it" ? ot(e) : n === "pt" ? st(e) : n === "zh" ? ct(e) : n === "ja" ? lt(e) : n === "ko" ? ut(e) : n === "ru" ? dt(e) : nt(e);
});
function pt() {
	let e = [
		{
			label: Ge(),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: $(),
			href: "/about",
			isInternal: !0
		},
		{
			label: Pe(),
			href: "/contact",
			isInternal: !0
		}
	];
	return o("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: s("div", {
			className: "container py-8",
			children: [s("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					s("div", { children: [o("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}), o("p", {
						className: "text-sm text-muted-foreground",
						children: Q()
					})] }),
					s("div", { children: [o("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: ft()
					}), o("ul", {
						className: "space-y-1",
						children: e.map((e) => o("li", { children: e.isInternal ? o(u, {
							href: e.href,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) : o("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) }, e.label))
					})] }),
					s("div", { children: [o("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: Ce()
					}), o("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), o("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: fe()
			})]
		})
	});
}
function mt() {
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
function ht(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function gt({ children: r }) {
	let s = i().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		ht("AppRoot", c);
	}, [c]), e(() => {
		C(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		mt();
	}, []), o(a, { children: r });
}
function _t({ children: e }) {
	return o(gt, { children: e });
}
function vt() {
	return o(_t, { children: o(pt, {}) });
}
export { vt as default };
