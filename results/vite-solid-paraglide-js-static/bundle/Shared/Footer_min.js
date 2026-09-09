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
], u = [], d = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var f, p = !1, m = () => {
	let e = l;
	!d && typeof window < "u" && window.location?.href && (e = N(window.location.href));
	let t = h(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, _(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function h(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = te();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (F(t) && P.has(t)) {
			let e = P.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return b(t);
			}
		}
		let e = y(n);
		if (e) return e;
	}
}
var g = (e) => {
	e ? window.location.href = e : window.location.reload();
}, _ = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = m();
	} catch {}
	let i = [], a = l;
	!d && typeof window < "u" && window.location?.href && (a = N(window.location.href));
	for (let t of a) if (t === "globalVariable") f = e;
	else if (t === "cookie") {
		if (d || typeof document > "u" || typeof window > "u") continue;
		let t = `${s}=${e}; path=/; max-age=${c}`;
		document.cookie = t, D();
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
		!d && n.reload && window.location && e !== r && g(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, v = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of o) if (e.toLowerCase() === t) return e;
}
function b(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function x(e) {
	return e;
}
function S(e, t) {
	return e.exec(t.href);
}
var C = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), w = RegExp(`(?:^|;\\s*)${C}=([^;]*)`), T = Symbol(), E = T;
function D() {
	E = T;
}
function ee() {
	typeof queueMicrotask == "function" ? queueMicrotask(D) : Promise.resolve().then(D);
}
function te() {
	if (typeof document > "u") return;
	if (E !== T) return E;
	let e = document.cookie.match(w)?.[1];
	return E = y(e), ee(), E;
}
function O(e) {
	return k(e);
}
function k(e) {
	let t = x(typeof e == "string" ? new URL(e, v()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && y(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), x(t);
}
var A, j;
function M(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (A === t) return j;
	let n = x(new URL(t, "http://example.com")), r = O(n), i = r.href === n.href ? [n] : [n, r], o;
	for (let e of i) {
		for (let t of u) if (S(new a(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return A = t, j = o, o;
}
function N(e) {
	let t = M(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var P = /* @__PURE__ */ new Map();
function F(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var I = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", L = () => "Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client.", R = () => "i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente.", z = () => "i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router.", B = () => "i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client.", V = () => "i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente.", H = () => "i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。", U = () => "i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。", W = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", G = () => "i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера.", K = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : n === "ru" ? G(e) : I(e);
}), q = () => "Contact", J = () => "Contact", Y = () => "Contacto", X = () => "Kontakt", Z = () => "Contatti", Q = () => "Contato", ne = () => "联系我们", re = () => "お問い合わせ", ie = () => "Contact", ae = () => "Контакт", oe = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? Z(e) : n === "pt" ? Q(e) : n === "zh" ? ne(e) : n === "ja" ? re(e) : n === "ko" ? ie(e) : n === "ru" ? ae(e) : q(e);
}), se = () => "Contributing", ce = () => "Contribuer", le = () => "Contribuir", ue = () => "Beitragen", de = () => "Contribuire", fe = () => "Contribuindo", pe = () => "贡献", me = () => "貢献する", he = () => "Contributing", ge = () => "Участие в проекте", _e = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? ce(e) : n === "es" ? le(e) : n === "de" ? ue(e) : n === "it" ? de(e) : n === "pt" ? fe(e) : n === "zh" ? pe(e) : n === "ja" ? me(e) : n === "ko" ? he(e) : n === "ru" ? ge(e) : se(e);
}), ve = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", ye = () => "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.", be = () => "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.", xe = () => "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.", Se = () => "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.", Ce = () => "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.", we = () => "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。", Te = () => "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。", Ee = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", De = () => "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.", Oe = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? ye(e) : n === "es" ? be(e) : n === "de" ? xe(e) : n === "it" ? Se(e) : n === "pt" ? Ce(e) : n === "zh" ? we(e) : n === "ja" ? Te(e) : n === "ko" ? Ee(e) : n === "ru" ? De(e) : ve(e);
}), ke = () => "GitHub", Ae = () => "GitHub", je = () => "GitHub", Me = () => "GitHub", Ne = () => "GitHub", Pe = () => "GitHub", Fe = () => "GitHub", Ie = () => "GitHub", Le = () => "GitHub", Re = () => "GitHub", ze = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ae(e) : n === "es" ? je(e) : n === "de" ? Me(e) : n === "it" ? Ne(e) : n === "pt" ? Pe(e) : n === "zh" ? Fe(e) : n === "ja" ? Ie(e) : n === "ko" ? Le(e) : n === "ru" ? Re(e) : ke(e);
}), Be = () => "Methodology", Ve = () => "Méthodologie", He = () => "Metodología", Ue = () => "Methodik", We = () => "Metodologia", Ge = () => "Metodologia", Ke = () => "方法论", qe = () => "手法", Je = () => "Methodology", Ye = () => "Методология", Xe = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ve(e) : n === "es" ? He(e) : n === "de" ? Ue(e) : n === "it" ? We(e) : n === "pt" ? Ge(e) : n === "zh" ? Ke(e) : n === "ja" ? qe(e) : n === "ko" ? Je(e) : n === "ru" ? Ye(e) : Be(e);
}), Ze = () => "Resources", Qe = () => "Ressources", $e = () => "Recursos", et = () => "Ressourcen", tt = () => "Risorse", nt = () => "Recursos", rt = () => "资源", it = () => "リソース", at = () => "Resources", ot = () => "Ресурсы", st = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Qe(e) : n === "es" ? $e(e) : n === "de" ? et(e) : n === "it" ? tt(e) : n === "pt" ? nt(e) : n === "zh" ? rt(e) : n === "ja" ? it(e) : n === "ko" ? at(e) : n === "ru" ? ot(e) : Ze(e);
}), ct = () => "i18n Benchmark", lt = () => "Benchmark i18n", ut = () => "i18n Benchmark", dt = () => "i18n Benchmark", ft = () => "i18n Benchmark", pt = () => "i18n Benchmark", mt = () => "i18n Benchmark", ht = () => "i18n Benchmark", gt = () => "i18n Benchmark", _t = () => "i18n Benchmark", vt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? lt(e) : n === "es" ? ut(e) : n === "de" ? dt(e) : n === "it" ? ft(e) : n === "pt" ? pt(e) : n === "zh" ? mt(e) : n === "ja" ? ht(e) : n === "ko" ? gt(e) : n === "ru" ? _t(e) : ct(e);
}), yt = () => "contact@intlayer.org", $ = () => "contact@intlayer.org", bt = () => "contact@intlayer.org", xt = () => "contact@intlayer.org", St = () => "contact@intlayer.org", Ct = () => "contact@intlayer.org", wt = () => "contact@intlayer.org", Tt = () => "contact@intlayer.org", Et = () => "contact@intlayer.org", Dt = () => "contact@intlayer.org", Ot = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? $(e) : n === "es" ? bt(e) : n === "de" ? xt(e) : n === "it" ? St(e) : n === "pt" ? Ct(e) : n === "zh" ? wt(e) : n === "ja" ? Tt(e) : n === "ko" ? Et(e) : n === "ru" ? Dt(e) : yt(e);
}), kt = n("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><ul class=space-y-1><li><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"></a></li><li></li><li></li></ul></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p></div></div><div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\">");
function At() {
	let n = i(), a = () => n.locale ?? "en";
	return (() => {
		var n = kt(), i = n.firstChild.firstChild, o = i.firstChild, s = o.firstChild, c = s.nextSibling, l = o.nextSibling, u = l.firstChild, d = u.nextSibling.firstChild, f = d.firstChild, p = d.nextSibling, m = p.nextSibling, h = l.nextSibling.firstChild, g = h.nextSibling, _ = i.nextSibling;
		return t(s, () => vt()), t(c, () => Oe()), t(u, () => st()), t(f, () => ze()), t(p, e(r, {
			get href() {
				return `/${a()}/about`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return Xe();
			}
		})), t(m, e(r, {
			get href() {
				return `/${a()}/contact`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return _e();
			}
		})), t(h, () => oe()), t(g, () => Ot()), t(_, () => K()), n;
	})();
}
export { At as default };
