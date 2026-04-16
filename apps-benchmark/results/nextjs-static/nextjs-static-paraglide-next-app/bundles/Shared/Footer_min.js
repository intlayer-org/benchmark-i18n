import { Profiler as e, useEffect as t } from "react";
import { useParams as n } from "next/navigation";
import r from "next/link";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
var o = (e) => /^https?:\/\//.test(e ?? ""), s = ({ href: e, children: t, ...a }) => {
	let s = n().locale ?? "en", c = o(e.toString());
	return i(r, {
		href: e && !c && !e.toString().startsWith(`/${s}`) ? `/${s}${e}` : e,
		...a,
		children: t
	});
}, c = {}, l = [
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
function te(e) {
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
function h(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : d;
}
var g = void 0, _ = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var v, y = !1, b = () => {
	if (g) {
		let e = g?.getStore()?.locale;
		if (e) return e;
	}
	let e = d;
	!_ && typeof window < "u" && window.location?.href && (e = h(window.location.href));
	let t = x(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return y || (v = t, y = !0, C(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function x(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = E();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && v !== void 0) n = v;
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
	let i = [], a = d;
	!_ && typeof window < "u" && window.location?.href && (a = h(window.location.href));
	for (let t of a) if (t === "globalVariable") v = e;
	else if (t === "cookie") {
		if (_ || typeof document > "u" || typeof window > "u") continue;
		let t = `${u}=${e}; path=/; max-age=${ee}`;
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
		!_ && n.reload && window.location && e !== r && S(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function w(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of l) if (e.toLowerCase() === t) return e;
}
function T(e) {
	let t = w(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${l.join(", ")}`);
}
function E() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${u}=([^;]+)`))?.[2];
	return w(e);
}
var D = /* @__PURE__ */ new Map();
function O(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var k = () => "Resources", A = () => "Ressources", j = () => "Recursos", M = () => "Ressourcen", N = () => "Risorse", P = () => "Recursos", F = () => "资源", I = () => "リソース", L = () => "리소스", R = () => "Ресурсы", z = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? k(e) : n === "fr" ? A(e) : n === "es" ? j(e) : n === "de" ? M(e) : n === "it" ? N(e) : n === "pt" ? P(e) : n === "zh" ? F(e) : n === "ja" ? I(e) : n === "ko" ? L(e) : R(e);
}), B = () => "Contact", V = () => "Contact", H = () => "Contacto", U = () => "Kontakt", W = () => "Contatti", G = () => "Contato", K = () => "联系我们", q = () => "お問い合わせ", J = () => "문의하기", Y = () => "Контакт", X = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? B(e) : n === "fr" ? V(e) : n === "es" ? H(e) : n === "de" ? U(e) : n === "it" ? W(e) : n === "pt" ? G(e) : n === "zh" ? K(e) : n === "ja" ? q(e) : n === "ko" ? J(e) : Y(e);
}), Z = () => "GitHub", Q = () => "GitHub", ne = () => "GitHub", re = () => "GitHub", ie = () => "GitHub", ae = () => "GitHub", oe = () => "GitHub", se = () => "GitHub", ce = () => "GitHub", le = () => "GitHub", ue = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? Z(e) : n === "fr" ? Q(e) : n === "es" ? ne(e) : n === "de" ? re(e) : n === "it" ? ie(e) : n === "pt" ? ae(e) : n === "zh" ? oe(e) : n === "ja" ? se(e) : n === "ko" ? ce(e) : le(e);
}), de = () => "Methodology", fe = () => "Méthodologie", pe = () => "Metodología", me = () => "Methodik", he = () => "Metodologia", ge = () => "Metodologia", _e = () => "方法论", ve = () => "方法論", ye = () => "방법론", be = () => "Методология", xe = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? de(e) : n === "fr" ? fe(e) : n === "es" ? pe(e) : n === "de" ? me(e) : n === "it" ? he(e) : n === "pt" ? ge(e) : n === "zh" ? _e(e) : n === "ja" ? ve(e) : n === "ko" ? ye(e) : be(e);
}), Se = () => "Contributing", Ce = () => "Contribuer", we = () => "Contribuir", Te = () => "Beitragen", Ee = () => "Contribuire", De = () => "Contribuir", Oe = () => "贡献", ke = () => "貢献する", Ae = () => "기여하기", je = () => "Вклад", Me = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? Se(e) : n === "fr" ? Ce(e) : n === "es" ? we(e) : n === "de" ? Te(e) : n === "it" ? Ee(e) : n === "pt" ? De(e) : n === "zh" ? Oe(e) : n === "ja" ? ke(e) : n === "ko" ? Ae(e) : je(e);
}), Ne = () => "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.", Pe = () => "i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.", Fe = () => "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.", Ie = () => "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.", Le = () => "i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.", Re = () => "i18n Benchmark — Projeto de código aberto. Construído com React, Vite & TanStack Router.", ze = () => "i18n Benchmark — 开源项目。使用 React, Vite & TanStack Router 构建。", Be = () => "i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築されています。", Ve = () => "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.", He = () => "i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.", Ue = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? Ne(e) : n === "fr" ? Pe(e) : n === "es" ? Fe(e) : n === "de" ? Ie(e) : n === "it" ? Le(e) : n === "pt" ? Re(e) : n === "zh" ? ze(e) : n === "ja" ? Be(e) : n === "ko" ? Ve(e) : He(e);
}), We = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", Ge = () => "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.", Ke = () => "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.", qe = () => "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.", Je = () => "Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.", $ = () => "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.", Ye = () => "一个用于测量国际化库对包大小、加载时间和应用反应性实际影响的开源测试应用程序。", Xe = () => "国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーション。", Ze = () => "국제화 라이브러리가 번들 크기, 로딩 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.", Qe = () => "Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.", $e = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? We(e) : n === "fr" ? Ge(e) : n === "es" ? Ke(e) : n === "de" ? qe(e) : n === "it" ? Je(e) : n === "pt" ? $(e) : n === "zh" ? Ye(e) : n === "ja" ? Xe(e) : n === "ko" ? Ze(e) : Qe(e);
});
function et() {
	let e = [
		{
			label: ue(),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: xe(),
			href: "/about",
			isInternal: !0
		},
		{
			label: Me(),
			href: "/contact",
			isInternal: !0
		}
	];
	return i("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: a("div", {
			className: "container py-8",
			children: [a("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					a("div", { children: [i("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}), i("p", {
						className: "text-sm text-muted-foreground",
						children: $e()
					})] }),
					a("div", { children: [i("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: z()
					}), i("ul", {
						className: "space-y-1",
						children: e.map((e) => i("li", { children: e.isInternal ? i(s, {
							href: e.href,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) : i("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) }, e.label))
					})] }),
					a("div", { children: [i("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: X()
					}), i("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), i("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: Ue()
			})]
		})
	});
}
function tt() {
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
function nt(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
function rt({ children: r }) {
	let a = n().locale ?? "en";
	return t(() => {
		C(a), document.documentElement.lang = a;
	}, [a]), t(() => {
		tt();
	}, []), i(e, {
		id: "AppRoot",
		onRender: nt,
		children: r
	});
}
function it({ children: e }) {
	return i(rt, { children: e });
}
function at() {
	return i(it, { children: i(et, {}) });
}
export { at as default };
