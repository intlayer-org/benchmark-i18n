import "react";
import { Link as e, useParams as t } from "@tanstack/react-router";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
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
], s = "PARAGLIDE_LOCALE", ee = 3456e4, c = [
	"cookie",
	"globalVariable",
	"baseLocale"
], l = [], u, d;
function te(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (u === t) return d;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of l) if (new a(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return u = t, d = r, r;
}
function f(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var p = void 0;
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var m, h = !1, g = () => {
	if (p) {
		let e = p?.getStore()?.locale;
		if (e) return e;
	}
	let e = c;
	typeof window < "u" && window.location?.href && (e = f(window.location.href));
	let t = _(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return h || (m = t, h = !0, y(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function _(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = S();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && m !== void 0) n = m;
		else if (w(t) && C.has(t)) {
			let e = C.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return x(t);
			}
		}
		let e = b(n);
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
	let i = [], a = c;
	typeof window < "u" && window.location?.href && (a = f(window.location.href));
	for (let t of a) if (t === "globalVariable") m = e;
	else if (t === "cookie") {
		if (typeof document > "u" || typeof window > "u") continue;
		let t = `${s}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (w(t) && C.has(t)) {
		let n = C.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		n.reload && window.location && e !== r && v(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function b(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of o) if (e.toLowerCase() === t) return e;
}
function x(e) {
	let t = b(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function S() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${s}=([^;]+)`))?.[2];
	return b(e);
}
var C = /* @__PURE__ */ new Map();
function w(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
//#endregion
//#region src/paraglide/messages/footer_resources.js
var T = () => "Resources", E = () => "Ressourcen", D = () => "Ressources", O = () => "Recursos", k = () => "リソース", A = () => "资源", j = () => "리소스", M = () => "Risorse", N = () => "Recursos", P = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? T(e) : n === "de" ? E(e) : n === "fr" ? D(e) : n === "es" ? O(e) : n === "ja" ? k(e) : n === "zh" ? A(e) : n === "ko" ? j(e) : n === "it" ? M(e) : N(e);
}), F = () => "Contact", I = () => "Kontakt", L = () => "Contact", R = () => "Contacto", z = () => "お問い合わせ", B = () => "联系我们", V = () => "문의하기", H = () => "Contatti", U = () => "Contato", W = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? F(e) : n === "de" ? I(e) : n === "fr" ? L(e) : n === "es" ? R(e) : n === "ja" ? z(e) : n === "zh" ? B(e) : n === "ko" ? V(e) : n === "it" ? H(e) : U(e);
}), G = () => "GitHub", K = () => "GitHub", q = () => "GitHub", J = () => "GitHub", Y = () => "GitHub", X = () => "GitHub", Z = () => "GitHub", Q = () => "GitHub", ne = () => "GitHub", re = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? G(e) : n === "de" ? K(e) : n === "fr" ? q(e) : n === "es" ? J(e) : n === "ja" ? Y(e) : n === "zh" ? X(e) : n === "ko" ? Z(e) : n === "it" ? Q(e) : ne(e);
}), ie = () => "Methodology", ae = () => "Methodik", oe = () => "Méthodologie", se = () => "Metodología", ce = () => "方法論", le = () => "方法论", ue = () => "방법론", de = () => "Metodologia", fe = () => "Metodologia", pe = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? ie(e) : n === "de" ? ae(e) : n === "fr" ? oe(e) : n === "es" ? se(e) : n === "ja" ? ce(e) : n === "zh" ? le(e) : n === "ko" ? ue(e) : n === "it" ? de(e) : fe(e);
}), me = () => "Contributing", he = () => "Beitragen", ge = () => "Contribuer", _e = () => "Contribuir", ve = () => "貢献する", ye = () => "贡献", be = () => "기여하기", xe = () => "Contribuire", Se = () => "Contribuir", Ce = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? me(e) : n === "de" ? he(e) : n === "fr" ? ge(e) : n === "es" ? _e(e) : n === "ja" ? ve(e) : n === "zh" ? ye(e) : n === "ko" ? be(e) : n === "it" ? xe(e) : Se(e);
}), we = () => "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.", Te = () => "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.", Ee = () => "i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.", De = () => "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.", Oe = () => "i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築されています。", ke = () => "i18n Benchmark — 开源项目。使用 React, Vite & TanStack Router 构建。", Ae = () => "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.", je = () => "i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.", Me = () => "i18n Benchmark — Projeto de código aberto. Construído com React, Vite & TanStack Router.", Ne = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? we(e) : n === "de" ? Te(e) : n === "fr" ? Ee(e) : n === "es" ? De(e) : n === "ja" ? Oe(e) : n === "zh" ? ke(e) : n === "ko" ? Ae(e) : n === "it" ? je(e) : Me(e);
}), Pe = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", $ = () => "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.", Fe = () => "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.", Ie = () => "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.", Le = () => "国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーション。", Re = () => "一个用于测量国际化库对包大小、加载时间和应用反应性实际影响的开源测试应用程序。", ze = () => "국제화 라이브러리가 번들 크기, 로딩 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.", Be = () => "Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.", Ve = () => "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.", He = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Pe(e) : n === "de" ? $(e) : n === "fr" ? Fe(e) : n === "es" ? Ie(e) : n === "ja" ? Le(e) : n === "zh" ? Re(e) : n === "ko" ? ze(e) : n === "it" ? Be(e) : Ve(e);
});
//#endregion
//#region src/components/Footer.tsx
function Ue() {
	let n = t({ strict: !1 }).locale ?? "en", a = [
		{
			label: re(),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: pe(),
			to: "/$locale/about",
			isInternal: !0
		},
		{
			label: Ce(),
			to: "/$locale/contact",
			isInternal: !0
		}
	];
	return /* @__PURE__ */ r("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: /* @__PURE__ */ i("div", {
			className: "container py-8",
			children: [/* @__PURE__ */ i("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					/* @__PURE__ */ i("div", { children: [/* @__PURE__ */ r("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}), /* @__PURE__ */ r("p", {
						className: "text-sm text-muted-foreground",
						children: He()
					})] }),
					/* @__PURE__ */ i("div", { children: [/* @__PURE__ */ r("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: P()
					}), /* @__PURE__ */ r("ul", {
						className: "space-y-1",
						children: a.map((t) => /* @__PURE__ */ r("li", { children: t.isInternal ? /* @__PURE__ */ r(e, {
							to: t.to,
							params: { locale: n },
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: t.label
						}) : /* @__PURE__ */ r("a", {
							href: t.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: t.label
						}) }, t.label))
					})] }),
					/* @__PURE__ */ i("div", { children: [/* @__PURE__ */ r("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: W()
					}), /* @__PURE__ */ r("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), /* @__PURE__ */ r("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: Ne()
			})]
		})
	});
}
//#endregion
//#region scripts/Wrapper.tsx
y("en", { reload: !1 });
function We({ children: e }) {
	return /* @__PURE__ */ r(n, { children: e });
}
//#endregion
//#region src/components/Footer.wrapper.tsx
function Ge() {
	return /* @__PURE__ */ r(We, { children: /* @__PURE__ */ r(Ue, {}) });
}
//#endregion
export { Ge as default };
