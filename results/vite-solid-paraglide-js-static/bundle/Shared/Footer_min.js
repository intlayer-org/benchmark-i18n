import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { A as r, useParams as i } from "@solidjs/router";
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
], s = "PARAGLIDE_LOCALE", c = 3456e4, l = [
	"cookie",
	"globalVariable",
	"baseLocale"
], u = [], d, f;
function p(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (d === t) return f;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of u) if (new a(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return d = t, f = r, r;
}
function m(e) {
	let t = p(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var h = void 0, g = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var _, v = !1, y = () => {
	if (h) {
		let e = h?.getStore()?.locale;
		if (e) return e;
	}
	let e = l;
	!g && typeof window < "u" && window.location?.href && (e = m(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return v || (_ = t, v = !0, x(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = C();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && _ !== void 0) n = _;
		else if (T(t) && w.has(t)) {
			let e = w.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return te(t);
			}
		}
		let e = S(n);
		if (e) return e;
	}
}
var b = (e) => {
	e ? window.location.href = e : window.location.reload();
}, x = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = y();
	} catch {}
	let i = [], a = l;
	!g && typeof window < "u" && window.location?.href && (a = m(window.location.href));
	for (let t of a) if (t === "globalVariable") _ = e;
	else if (t === "cookie") {
		if (g || typeof document > "u" || typeof window > "u") continue;
		let t = `${s}=${e}; path=/; max-age=${c}`;
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
	let o = () => {
		!g && n.reload && window.location && e !== r && b(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function S(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of o) if (e.toLowerCase() === t) return e;
}
function te(e) {
	let t = S(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function C() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${s}=([^;]+)`))?.[2];
	return S(e);
}
var w = /* @__PURE__ */ new Map();
function T(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var E = () => "contact@intlayer.org", D = () => "contact@intlayer.org", O = () => "contact@intlayer.org", k = () => "contact@intlayer.org", A = () => "contact@intlayer.org", j = () => "contact@intlayer.org", M = () => "contact@intlayer.org", N = () => "contact@intlayer.org", P = () => "contact@intlayer.org", F = () => "contact@intlayer.org", I = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? E(e) : n === "fr" ? D(e) : n === "es" ? O(e) : n === "de" ? k(e) : n === "it" ? A(e) : n === "pt" ? j(e) : n === "zh" ? M(e) : n === "ja" ? N(e) : n === "ko" ? P(e) : F(e);
}), L = () => "i18n Benchmark", R = () => "Benchmark i18n", z = () => "i18n Benchmark", B = () => "i18n Benchmark", V = () => "i18n Benchmark", H = () => "i18n Benchmark", U = () => "i18n Benchmark", W = () => "i18n Benchmark", G = () => "i18n Benchmark", K = () => "i18n Benchmark", q = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? L(e) : n === "fr" ? R(e) : n === "es" ? z(e) : n === "de" ? B(e) : n === "it" ? V(e) : n === "pt" ? H(e) : n === "zh" ? U(e) : n === "ja" ? W(e) : n === "ko" ? G(e) : K(e);
}), J = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", Y = () => "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.", X = () => "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.", Z = () => "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.", Q = () => "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.", ne = () => "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.", re = () => "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。", ie = () => "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。", ae = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", oe = () => "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.", se = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? J(e) : n === "fr" ? Y(e) : n === "es" ? X(e) : n === "de" ? Z(e) : n === "it" ? Q(e) : n === "pt" ? ne(e) : n === "zh" ? re(e) : n === "ja" ? ie(e) : n === "ko" ? ae(e) : oe(e);
}), ce = () => "Resources", le = () => "Ressources", ue = () => "Recursos", de = () => "Ressourcen", fe = () => "Risorse", pe = () => "Recursos", me = () => "资源", he = () => "リソース", ge = () => "Resources", _e = () => "Ресурсы", ve = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? ce(e) : n === "fr" ? le(e) : n === "es" ? ue(e) : n === "de" ? de(e) : n === "it" ? fe(e) : n === "pt" ? pe(e) : n === "zh" ? me(e) : n === "ja" ? he(e) : n === "ko" ? ge(e) : _e(e);
}), ye = () => "GitHub", be = () => "GitHub", xe = () => "GitHub", Se = () => "GitHub", Ce = () => "GitHub", we = () => "GitHub", Te = () => "GitHub", Ee = () => "GitHub", De = () => "GitHub", Oe = () => "GitHub", ke = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? ye(e) : n === "fr" ? be(e) : n === "es" ? xe(e) : n === "de" ? Se(e) : n === "it" ? Ce(e) : n === "pt" ? we(e) : n === "zh" ? Te(e) : n === "ja" ? Ee(e) : n === "ko" ? De(e) : Oe(e);
}), Ae = () => "Methodology", je = () => "Méthodologie", Me = () => "Metodología", Ne = () => "Methodik", Pe = () => "Metodologia", Fe = () => "Metodologia", Ie = () => "方法论", Le = () => "手法", Re = () => "Methodology", ze = () => "Методология", Be = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Ae(e) : n === "fr" ? je(e) : n === "es" ? Me(e) : n === "de" ? Ne(e) : n === "it" ? Pe(e) : n === "pt" ? Fe(e) : n === "zh" ? Ie(e) : n === "ja" ? Le(e) : n === "ko" ? Re(e) : ze(e);
}), Ve = () => "Contributing", He = () => "Contribuer", Ue = () => "Contribuir", We = () => "Beitragen", Ge = () => "Contribuire", Ke = () => "Contribuindo", qe = () => "贡献", Je = () => "貢献する", Ye = () => "Contributing", Xe = () => "Участие в проекте", Ze = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Ve(e) : n === "fr" ? He(e) : n === "es" ? Ue(e) : n === "de" ? We(e) : n === "it" ? Ge(e) : n === "pt" ? Ke(e) : n === "zh" ? qe(e) : n === "ja" ? Je(e) : n === "ko" ? Ye(e) : Xe(e);
}), Qe = () => "Contact", $e = () => "Contact", et = () => "Contacto", tt = () => "Kontakt", nt = () => "Contatti", rt = () => "Contato", it = () => "联系我们", at = () => "お問い合わせ", ot = () => "Contact", st = () => "Контакт", ct = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Qe(e) : n === "fr" ? $e(e) : n === "es" ? et(e) : n === "de" ? tt(e) : n === "it" ? nt(e) : n === "pt" ? rt(e) : n === "zh" ? it(e) : n === "ja" ? at(e) : n === "ko" ? ot(e) : st(e);
}), lt = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", ut = () => "Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client.", dt = () => "i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente.", ft = () => "i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router.", $ = () => "i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client.", pt = () => "i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente.", mt = () => "i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。", ht = () => "i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。", gt = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", _t = () => "i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера.", vt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? lt(e) : n === "fr" ? ut(e) : n === "es" ? dt(e) : n === "de" ? ft(e) : n === "it" ? $(e) : n === "pt" ? pt(e) : n === "zh" ? mt(e) : n === "ja" ? ht(e) : n === "ko" ? gt(e) : _t(e);
}), yt = n("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><ul class=space-y-1><li><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"></a></li><li></li><li></li></ul></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p></div></div><div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\">");
function bt() {
	let n = i(), a = () => n.locale ?? "en";
	return (() => {
		var n = yt(), i = n.firstChild.firstChild, o = i.firstChild, s = o.firstChild, c = s.nextSibling, l = o.nextSibling, u = l.firstChild, d = u.nextSibling.firstChild, f = d.firstChild, p = d.nextSibling, m = p.nextSibling, h = l.nextSibling.firstChild, g = h.nextSibling, _ = i.nextSibling;
		return t(s, () => q()), t(c, () => se()), t(u, () => ve()), t(f, () => ke()), t(p, e(r, {
			get href() {
				return `/${a()}/about`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return Be();
			}
		})), t(m, e(r, {
			get href() {
				return `/${a()}/contact`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return Ze();
			}
		})), t(h, () => ct()), t(g, () => I()), t(_, () => vt()), n;
	})();
}
export { bt as default };
