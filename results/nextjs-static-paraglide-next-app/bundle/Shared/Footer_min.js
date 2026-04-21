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
}, ee = {}, d = [
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
], h = [], g, _;
function v(e) {
	if (h.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (g === t) return _;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of h) if (new ee(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return g = t, _ = r, r;
}
function y(e) {
	let t = v(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : m;
}
var b = void 0, x = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var S, C = !1, w = () => {
	if (b) {
		let e = b?.getStore()?.locale;
		if (e) return e;
	}
	let e = m;
	!x && typeof window < "u" && window.location?.href && (e = y(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return C || (S = t, C = !0, E(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = k();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && S !== void 0) n = S;
		else if (j(t) && A.has(t)) {
			let e = A.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return O(t);
			}
		}
		let e = D(n);
		if (e) return e;
	}
}
var T = (e) => {
	e ? window.location.href = e : window.location.reload();
}, E = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = w();
	} catch {}
	let i = [], a = m;
	!x && typeof window < "u" && window.location?.href && (a = y(window.location.href));
	for (let t of a) if (t === "globalVariable") S = e;
	else if (t === "cookie") {
		if (x || typeof document > "u" || typeof window > "u") continue;
		let t = `${f}=${e}; path=/; max-age=${p}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (j(t) && A.has(t)) {
		let n = A.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!x && n.reload && window.location && e !== r && T(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function D(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of d) if (e.toLowerCase() === t) return e;
}
function O(e) {
	let t = D(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${d.join(", ")}`);
}
function k() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${f}=([^;]+)`))?.[2];
	return D(e);
}
var A = /* @__PURE__ */ new Map();
function j(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var M = () => "Resources", N = () => "Ressources", P = () => "Recursos", F = () => "Ressourcen", I = () => "Risorse", L = () => "Recursos", R = () => "资源", z = () => "リソース", B = () => "리소스", V = () => "Ресурсы", H = ((e = {}, t = {}) => {
	let n = t.locale ?? w();
	return n === "en" ? M(e) : n === "fr" ? N(e) : n === "es" ? P(e) : n === "de" ? F(e) : n === "it" ? I(e) : n === "pt" ? L(e) : n === "zh" ? R(e) : n === "ja" ? z(e) : n === "ko" ? B(e) : V(e);
}), U = () => "Contact", W = () => "Contact", G = () => "Contacto", K = () => "Kontakt", q = () => "Contatti", J = () => "Contato", Y = () => "联系我们", X = () => "お問い合わせ", Z = () => "문의하기", Q = () => "Контакт", ne = ((e = {}, t = {}) => {
	let n = t.locale ?? w();
	return n === "en" ? U(e) : n === "fr" ? W(e) : n === "es" ? G(e) : n === "de" ? K(e) : n === "it" ? q(e) : n === "pt" ? J(e) : n === "zh" ? Y(e) : n === "ja" ? X(e) : n === "ko" ? Z(e) : Q(e);
}), re = () => "GitHub", ie = () => "GitHub", ae = () => "GitHub", oe = () => "GitHub", se = () => "GitHub", ce = () => "GitHub", le = () => "GitHub", ue = () => "GitHub", de = () => "GitHub", fe = () => "GitHub", pe = ((e = {}, t = {}) => {
	let n = t.locale ?? w();
	return n === "en" ? re(e) : n === "fr" ? ie(e) : n === "es" ? ae(e) : n === "de" ? oe(e) : n === "it" ? se(e) : n === "pt" ? ce(e) : n === "zh" ? le(e) : n === "ja" ? ue(e) : n === "ko" ? de(e) : fe(e);
}), me = () => "Methodology", he = () => "Méthodologie", ge = () => "Metodología", _e = () => "Methodik", ve = () => "Metodologia", ye = () => "Metodologia", be = () => "方法论", xe = () => "方法論", Se = () => "방법론", Ce = () => "Методология", we = ((e = {}, t = {}) => {
	let n = t.locale ?? w();
	return n === "en" ? me(e) : n === "fr" ? he(e) : n === "es" ? ge(e) : n === "de" ? _e(e) : n === "it" ? ve(e) : n === "pt" ? ye(e) : n === "zh" ? be(e) : n === "ja" ? xe(e) : n === "ko" ? Se(e) : Ce(e);
}), Te = () => "Contributing", Ee = () => "Contribuer", De = () => "Contribuir", Oe = () => "Beitragen", ke = () => "Contribuire", Ae = () => "Contribuir", je = () => "贡献", Me = () => "貢献する", Ne = () => "기여하기", Pe = () => "Вклад", Fe = ((e = {}, t = {}) => {
	let n = t.locale ?? w();
	return n === "en" ? Te(e) : n === "fr" ? Ee(e) : n === "es" ? De(e) : n === "de" ? Oe(e) : n === "it" ? ke(e) : n === "pt" ? Ae(e) : n === "zh" ? je(e) : n === "ja" ? Me(e) : n === "ko" ? Ne(e) : Pe(e);
}), Ie = () => "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.", Le = () => "i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.", Re = () => "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.", ze = () => "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.", Be = () => "i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.", Ve = () => "i18n Benchmark — Projeto de código aberto. Construído com React, Vite & TanStack Router.", He = () => "i18n Benchmark — 开源项目。使用 React, Vite & TanStack Router 构建。", Ue = () => "i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築されています。", We = () => "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.", Ge = () => "i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.", Ke = ((e = {}, t = {}) => {
	let n = t.locale ?? w();
	return n === "en" ? Ie(e) : n === "fr" ? Le(e) : n === "es" ? Re(e) : n === "de" ? ze(e) : n === "it" ? Be(e) : n === "pt" ? Ve(e) : n === "zh" ? He(e) : n === "ja" ? Ue(e) : n === "ko" ? We(e) : Ge(e);
}), qe = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", Je = () => "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.", $ = () => "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.", Ye = () => "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.", Xe = () => "Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.", Ze = () => "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.", Qe = () => "一个用于测量国际化库对包大小、加载时间和应用反应性实际影响的开源测试应用程序。", $e = () => "国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーション。", et = () => "국제화 라이브러리가 번들 크기, 로딩 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.", tt = () => "Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.", nt = ((e = {}, t = {}) => {
	let n = t.locale ?? w();
	return n === "en" ? qe(e) : n === "fr" ? Je(e) : n === "es" ? $(e) : n === "de" ? Ye(e) : n === "it" ? Xe(e) : n === "pt" ? Ze(e) : n === "zh" ? Qe(e) : n === "ja" ? $e(e) : n === "ko" ? et(e) : tt(e);
});
function rt() {
	let e = [
		{
			label: pe(),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: we(),
			href: "/about",
			isInternal: !0
		},
		{
			label: Fe(),
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
						children: nt()
					})] }),
					s("div", { children: [o("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: H()
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
						children: ne()
					}), o("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), o("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: Ke()
			})]
		})
	});
}
function it() {
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
function at(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function ot({ children: r }) {
	let s = i().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		at("AppRoot", c);
	}, [c]), e(() => {
		E(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		it();
	}, []), o(a, { children: r });
}
function st({ children: e }) {
	return o(ot, { children: e });
}
function ct() {
	return o(st, { children: o(rt, {}) });
}
export { ct as default };
