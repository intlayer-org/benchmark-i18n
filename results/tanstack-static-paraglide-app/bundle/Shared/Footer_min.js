import "react";
import { Link as e, useParams as t } from "@tanstack/react-router";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
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
	!u && typeof window < "u" && window.location?.href && (e = N(window.location.href));
	let t = m(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return f || (d = t, f = !0, g(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function m(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = D();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && d !== void 0) n = d;
		else if (F(t) && P.has(t)) {
			let e = P.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return v(t);
			}
		}
		let e = _(n);
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
	!u && typeof window < "u" && window.location?.href && (a = N(window.location.href));
	for (let t of a) if (t === "globalVariable") d = e;
	else if (t === "cookie") {
		if (u || typeof document > "u" || typeof window > "u") continue;
		let t = `${s}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, T();
	} else if (t === "baseLocale") continue;
	else if (F(t) && P.has(t)) {
		let n = P.get(t);
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
}, te = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function _(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of o) if (e.toLowerCase() === t) return e;
}
function v(e) {
	let t = _(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function y(e) {
	return e;
}
function b(e, t) {
	return e.exec(t.href);
}
var x = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), S = RegExp(`(?:^|;\\s*)${x}=([^;]*)`), C = Symbol(), w = C;
function T() {
	w = C;
}
function E() {
	typeof queueMicrotask == "function" ? queueMicrotask(T) : Promise.resolve().then(T);
}
function D() {
	if (typeof document > "u") return;
	if (w !== C) return w;
	let e = document.cookie.match(S)?.[1];
	return w = _(e), E(), w;
}
function O(e) {
	return k(e);
}
function k(e) {
	let t = y(typeof e == "string" ? new URL(e, te()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && _(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), y(t);
}
var A, j;
function M(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (A === t) return j;
	let n = y(new URL(t, "http://example.com")), r = O(n), i = r.href === n.href ? [n] : [n, r], o;
	for (let e of i) {
		for (let t of l) if (b(new a(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return A = t, j = o, o;
}
function N(e) {
	let t = M(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var P = /* @__PURE__ */ new Map();
function F(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var I = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", L = () => "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.", R = () => "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.", z = () => "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.", B = () => "Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.", V = () => "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.", H = () => "一个用于测量国际化库对包大小、加载时间和应用反应性实际影响的开源测试应用程序。", U = () => "国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーション。", W = () => "국제화 라이브러리가 번들 크기, 로딩 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.", G = () => "Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.", K = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : n === "ru" ? G(e) : I(e);
}), q = () => "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.", J = () => "i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.", Y = () => "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.", X = () => "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.", Z = () => "i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.", Q = () => "i18n Benchmark — Projeto de código aberto. Construído com React, Vite & TanStack Router.", ne = () => "i18n Benchmark — 开源项目。使用 React, Vite & TanStack Router 构建。", re = () => "i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築されています。", ie = () => "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.", ae = () => "i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.", oe = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? Z(e) : n === "pt" ? Q(e) : n === "zh" ? ne(e) : n === "ja" ? re(e) : n === "ko" ? ie(e) : n === "ru" ? ae(e) : q(e);
}), se = () => "Contact", ce = () => "Contact", le = () => "Contacto", ue = () => "Kontakt", de = () => "Contatti", fe = () => "Contato", pe = () => "联系我们", me = () => "お問い合わせ", he = () => "문의하기", ge = () => "Контакт", _e = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? ce(e) : n === "es" ? le(e) : n === "de" ? ue(e) : n === "it" ? de(e) : n === "pt" ? fe(e) : n === "zh" ? pe(e) : n === "ja" ? me(e) : n === "ko" ? he(e) : n === "ru" ? ge(e) : se(e);
}), ve = () => "Contributing", ye = () => "Contribuer", be = () => "Contribuir", xe = () => "Beitragen", Se = () => "Contribuire", Ce = () => "Contribuir", we = () => "贡献", Te = () => "貢献する", Ee = () => "기여하기", De = () => "Вклад", Oe = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? ye(e) : n === "es" ? be(e) : n === "de" ? xe(e) : n === "it" ? Se(e) : n === "pt" ? Ce(e) : n === "zh" ? we(e) : n === "ja" ? Te(e) : n === "ko" ? Ee(e) : n === "ru" ? De(e) : ve(e);
}), ke = () => "GitHub", Ae = () => "GitHub", je = () => "GitHub", Me = () => "GitHub", Ne = () => "GitHub", Pe = () => "GitHub", Fe = () => "GitHub", Ie = () => "GitHub", Le = () => "GitHub", Re = () => "GitHub", ze = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Ae(e) : n === "es" ? je(e) : n === "de" ? Me(e) : n === "it" ? Ne(e) : n === "pt" ? Pe(e) : n === "zh" ? Fe(e) : n === "ja" ? Ie(e) : n === "ko" ? Le(e) : n === "ru" ? Re(e) : ke(e);
}), Be = () => "Methodology", Ve = () => "Méthodologie", He = () => "Metodología", Ue = () => "Methodik", We = () => "Metodologia", Ge = () => "Metodologia", Ke = () => "方法论", qe = () => "方法論", Je = () => "방법론", $ = () => "Методология", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Ve(e) : n === "es" ? He(e) : n === "de" ? Ue(e) : n === "it" ? We(e) : n === "pt" ? Ge(e) : n === "zh" ? Ke(e) : n === "ja" ? qe(e) : n === "ko" ? Je(e) : n === "ru" ? $(e) : Be(e);
}), Xe = () => "Resources", Ze = () => "Ressources", Qe = () => "Recursos", $e = () => "Ressourcen", et = () => "Risorse", tt = () => "Recursos", nt = () => "资源", rt = () => "リソース", it = () => "리소스", at = () => "Ресурсы", ot = ((e = {}, t = {}) => {
	let n = t.locale ?? p();
	return n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : n === "ru" ? at(e) : Xe(e);
});
function st() {
	let n = t({ strict: !1 }).locale ?? "en", a = [
		{
			label: ze(),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: Ye(),
			to: "/$locale/about",
			isInternal: !0
		},
		{
			label: Oe(),
			to: "/$locale/contact",
			isInternal: !0
		}
	];
	return r("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: i("div", {
			className: "container py-8",
			children: [i("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					i("div", { children: [r("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}), r("p", {
						className: "text-sm text-muted-foreground",
						children: K()
					})] }),
					i("div", { children: [r("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: ot()
					}), r("ul", {
						className: "space-y-1",
						children: a.map((t) => r("li", { children: t.isInternal ? r(e, {
							preload: !1,
							to: t.to,
							params: { locale: n },
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: t.label
						}) : r("a", {
							href: t.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: t.label
						}) }, t.label))
					})] }),
					i("div", { children: [r("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: _e()
					}), r("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), r("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: oe()
			})]
		})
	});
}
g("en", { reload: !1 });
function ct({ children: e }) {
	return r(n, { children: e });
}
function lt() {
	return r(ct, { children: r(st, {}) });
}
export { lt as default };
