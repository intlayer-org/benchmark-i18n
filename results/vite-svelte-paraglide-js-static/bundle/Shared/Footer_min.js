import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { derived as t, writable as n } from "svelte/store";
var r = {}, i = [
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
], a = "PARAGLIDE_LOCALE", o = 3456e4, s = [
	"cookie",
	"globalVariable",
	"baseLocale"
], c = [], l, u;
function d(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (l === t) return u;
	let n = new URL(t, "http://dummy.com"), i;
	for (let e of c) if (new r(e.match, n.href).exec(n.href)) {
		i = e;
		break;
	}
	return l = t, u = i, i;
}
function f(e) {
	let t = d(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var p = void 0, m = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	if (p) {
		let e = p?.getStore()?.locale;
		if (e) return e;
	}
	let e = s;
	!m && typeof window < "u" && window.location?.href && (e = f(window.location.href));
	let t = v(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, b(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function v(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = C();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (T(t) && w.has(t)) {
			let e = w.get(t);
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
var y = (e) => {
	e ? window.location.href = e : window.location.reload();
}, b = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = _();
	} catch {}
	let i = [], c = s;
	!m && typeof window < "u" && window.location?.href && (c = f(window.location.href));
	for (let t of c) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (T(t) && w.has(t)) {
		let n = w.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let l = () => {
		!m && n.reload && window.location && e !== r && y(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
};
function x(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function S(e) {
	let t = x(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function C() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${a}=([^;]+)`))?.[2];
	return x(e);
}
var w = /* @__PURE__ */ new Map();
function T(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var E = () => "contact@intlayer.org", ee = () => "contact@intlayer.org", te = () => "contact@intlayer.org", D = () => "contact@intlayer.org", O = () => "contact@intlayer.org", k = () => "contact@intlayer.org", A = () => "contact@intlayer.org", j = () => "contact@intlayer.org", M = () => "contact@intlayer.org", N = () => "contact@intlayer.org", P = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? E(e) : n === "fr" ? ee(e) : n === "es" ? te(e) : n === "de" ? D(e) : n === "it" ? O(e) : n === "pt" ? k(e) : n === "zh" ? A(e) : n === "ja" ? j(e) : n === "ko" ? M(e) : N(e);
}), F = () => "i18n Benchmark", I = () => "Benchmark i18n", L = () => "i18n Benchmark", R = () => "i18n Benchmark", z = () => "i18n Benchmark", B = () => "i18n Benchmark", V = () => "i18n Benchmark", H = () => "i18n Benchmark", U = () => "i18n Benchmark", W = () => "i18n Benchmark", G = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? F(e) : n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : W(e);
}), K = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", q = () => "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.", J = () => "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.", Y = () => "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.", X = () => "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.", Z = () => "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.", Q = () => "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。", ne = () => "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。", re = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", ie = () => "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? K(e) : n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? Z(e) : n === "zh" ? Q(e) : n === "ja" ? ne(e) : n === "ko" ? re(e) : ie(e);
}), oe = () => "Resources", se = () => "Ressources", ce = () => "Recursos", le = () => "Ressourcen", ue = () => "Risorse", de = () => "Recursos", fe = () => "资源", pe = () => "リソース", me = () => "Resources", he = () => "Ресурсы", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? oe(e) : n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : he(e);
}), _e = () => "GitHub", ve = () => "GitHub", ye = () => "GitHub", be = () => "GitHub", xe = () => "GitHub", Se = () => "GitHub", Ce = () => "GitHub", we = () => "GitHub", Te = () => "GitHub", Ee = () => "GitHub", De = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? _e(e) : n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : Ee(e);
}), Oe = () => "Methodology", ke = () => "Méthodologie", Ae = () => "Metodología", je = () => "Methodik", Me = () => "Metodologia", Ne = () => "Metodologia", Pe = () => "方法论", Fe = () => "手法", Ie = () => "Methodology", Le = () => "Методология", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Oe(e) : n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : Le(e);
}), ze = () => "Contributing", Be = () => "Contribuer", Ve = () => "Contribuir", He = () => "Beitragen", Ue = () => "Contribuire", We = () => "Contribuindo", Ge = () => "贡献", Ke = () => "貢献する", qe = () => "Contributing", Je = () => "Участие в проекте", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ze(e) : n === "fr" ? Be(e) : n === "es" ? Ve(e) : n === "de" ? He(e) : n === "it" ? Ue(e) : n === "pt" ? We(e) : n === "zh" ? Ge(e) : n === "ja" ? Ke(e) : n === "ko" ? qe(e) : Je(e);
}), Xe = () => "Contact", Ze = () => "Contact", Qe = () => "Contacto", $e = () => "Kontakt", et = () => "Contatti", tt = () => "Contato", nt = () => "联系我们", rt = () => "お問い合わせ", it = () => "Contact", at = () => "Контакт", ot = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Xe(e) : n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : at(e);
}), st = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", ct = () => "Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client.", lt = () => "i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente.", ut = () => "i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router.", dt = () => "i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client.", ft = () => "i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente.", $ = () => "i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。", pt = () => "i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。", mt = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", ht = () => "i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера.", gt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? st(e) : n === "fr" ? ct(e) : n === "es" ? lt(e) : n === "de" ? ut(e) : n === "it" ? dt(e) : n === "pt" ? ft(e) : n === "zh" ? $(e) : n === "ja" ? pt(e) : n === "ko" ? mt(e) : ht(e);
}), _t = [
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
];
function vt(e) {
	return _t.includes(e);
}
var yt = new Set([
	"",
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"pricing",
	"products",
	"settings",
	"team"
]);
function bt(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!vt(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !yt.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var xt = t(n(typeof window < "u" ? window.location.pathname : "/en"), (e) => bt(e)), St = e.from_html("<a class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), Ct = e.from_html("<a target=\"_blank\" rel=\"noreferrer\" class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), wt = e.from_html("<li><!></li>"), Tt = e.from_html("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <ul class=\"space-y-1\"></ul></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div></div> <div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\"> </div></div></footer>");
function Et(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(xt, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), s = e.derived(() => [
		{
			label: De(),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: Re(),
			to: `/${e.get(o)}/about`,
			isInternal: !0
		},
		{
			label: Ye(),
			to: `/${e.get(o)}/contact`,
			isInternal: !0
		}
	]);
	var c = Tt(), l = e.child(c), u = e.child(l), d = e.child(u), f = e.child(d), p = e.child(f, !0);
	e.reset(f);
	var m = e.sibling(f, 2), h = e.child(m, !0);
	e.reset(m), e.reset(d);
	var g = e.sibling(d, 2), _ = e.child(g), v = e.child(_, !0);
	e.reset(_);
	var y = e.sibling(_, 2);
	e.each(y, 21, () => e.get(s), (e) => e.label, (t, n) => {
		var r = wt(), i = e.child(r), a = (t) => {
			var r = St(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		}, o = (t) => {
			var r = Ct(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).href), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		};
		e.if(i, (t) => {
			e.get(n).isInternal ? t(a) : t(o, -1);
		}), e.reset(r), e.append(t, r);
	}), e.reset(y), e.reset(g);
	var b = e.sibling(g, 2), x = e.child(b), S = e.child(x, !0);
	e.reset(x);
	var C = e.sibling(x, 2), w = e.child(C, !0);
	e.reset(C), e.reset(b), e.reset(u);
	var T = e.sibling(u, 2), E = e.child(T, !0);
	e.reset(T), e.reset(l), e.reset(c), e.template_effect((t, n, r, i, a, o) => {
		e.set_text(p, t), e.set_text(h, n), e.set_text(v, r), e.set_text(S, i), e.set_text(w, a), e.set_text(E, o);
	}, [
		() => G(),
		() => ae(),
		() => ge(),
		() => ot(),
		() => P(),
		() => gt()
	]), e.append(t, c), e.pop(), a();
}
export { Et as default };
