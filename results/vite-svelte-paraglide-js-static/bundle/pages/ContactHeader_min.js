import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = {}, n = [
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
], r = "PARAGLIDE_LOCALE", i = 3456e4, a = [
	"cookie",
	"globalVariable",
	"baseLocale"
], o = [], s, c;
function l(e) {
	if (o.length === 0) return;
	let n = typeof e == "string" ? e : e.href;
	if (s === n) return c;
	let r = new URL(n, "http://dummy.com"), i;
	for (let e of o) if (new t(e.match, r.href).exec(r.href)) {
		i = e;
		break;
	}
	return s = n, c = i, i;
}
function u(e) {
	let t = l(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : a;
}
var d = void 0, f = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	if (d) {
		let e = d?.getStore()?.locale;
		if (e) return e;
	}
	let e = a;
	!f && typeof window < "u" && window.location?.href && (e = u(window.location.href));
	let t = g(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, v(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function g(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = b();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (S(t) && x.has(t)) {
			let e = x.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ee(t);
			}
		}
		let e = y(n);
		if (e) return e;
	}
}
var _ = (e) => {
	e ? window.location.href = e : window.location.reload();
}, v = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, o;
	try {
		o = h();
	} catch {}
	let s = [], c = a;
	!f && typeof window < "u" && window.location?.href && (c = u(window.location.href));
	for (let t of c) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (f || typeof document > "u" || typeof window > "u") continue;
		let t = `${r}=${e}; path=/; max-age=${i}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (S(t) && x.has(t)) {
		let n = x.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), s.push(r));
		}
	}
	let l = () => {
		!f && n.reload && window.location && e !== o && _(void 0);
	};
	if (s.length) return Promise.all(s).then(() => {
		l();
	});
	l();
};
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of n) if (e.toLowerCase() === t) return e;
}
function ee(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${n.join(", ")}`);
}
function b() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${r}=([^;]+)`))?.[2];
	return y(e);
}
var x = /* @__PURE__ */ new Map();
function S(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var C = () => "contact@intlayer.org", w = () => "contact@intlayer.org", T = () => "contact@intlayer.org", E = () => "contact@intlayer.org", D = () => "contact@intlayer.org", O = () => "contact@intlayer.org", k = () => "contact@intlayer.org", A = () => "contact@intlayer.org", j = () => "contact@intlayer.org", M = () => "contact@intlayer.org", N = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? C(e) : n === "fr" ? w(e) : n === "es" ? T(e) : n === "de" ? E(e) : n === "it" ? D(e) : n === "pt" ? O(e) : n === "zh" ? k(e) : n === "ja" ? A(e) : n === "ko" ? j(e) : M(e);
}), P = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", F = () => "⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.", I = () => "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.", L = () => "⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst.", R = () => "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.", z = () => "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real.", B = () => "⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。", V = () => "⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。", H = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", U = () => "⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом.", te = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? P(e) : n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : U(e);
}), W = () => "Get in Touch", G = () => "Contact", K = () => "Ponte en contacto", q = () => "Kontakt aufnehmen", J = () => "Contattaci", Y = () => "Entre em contato", X = () => "取得联系", Z = () => "お問い合わせ", Q = () => "Get in Touch", ne = () => "Связаться с нами", re = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? W(e) : n === "fr" ? G(e) : n === "es" ? K(e) : n === "de" ? q(e) : n === "it" ? J(e) : n === "pt" ? Y(e) : n === "zh" ? X(e) : n === "ja" ? Z(e) : n === "ko" ? Q(e) : ne(e);
}), ie = () => "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at", ae = () => "Une idée, un bug ou envie de contribuer un benchmark ? Écrivez-nous à", oe = () => "¿Tienes ideas, has encontrado un error o quieres contribuir con un benchmark? Ponte en contacto con nosotros en", se = () => "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter", ce = () => "Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo", le = () => "Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em", ue = () => "有想法、发现了错误或想贡献基准测试？请联系我们：", de = () => "アイデアがある、バグを見つけた、またはベンチマークを投稿したいですか？こちらまでご連絡ください：", fe = () => "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at", pe = () => "Есть идеи, нашли баг или хотите предложить бенчмарк? Напишите нам по адресу", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ie(e) : n === "fr" ? ae(e) : n === "es" ? oe(e) : n === "de" ? se(e) : n === "it" ? ce(e) : n === "pt" ? le(e) : n === "zh" ? ue(e) : n === "ja" ? de(e) : n === "ko" ? fe(e) : pe(e);
}), me = e.from_html("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\"> </div>");
function he(t, n) {
	e.push(n, !1), e.init();
	var r = me(), i = e.child(r, !0);
	e.reset(r), e.template_effect((t) => e.set_text(i, t), [() => te()]), e.append(t, r), e.pop();
}
var ge = e.from_html("<!> <h1 class=\"mb-2 text-3xl font-bold text-foreground\"> </h1> <p class=\"mb-8 text-muted-foreground\"> <a class=\"text-primary hover:underline\"> </a> .</p>", 1);
function _e(t, n) {
	e.push(n, !1), e.init();
	var r = ge(), i = e.first_child(r);
	he(i, {});
	var a = e.sibling(i, 2), o = e.child(a, !0);
	e.reset(a);
	var s = e.sibling(a, 2), c = e.child(s), l = e.sibling(c), u = e.child(l, !0);
	e.reset(l), e.next(), e.reset(s), e.template_effect((t, n, r, i) => {
		e.set_text(o, t), e.set_text(c, `${n ?? ""} `), e.set_attribute(l, "href", r), e.set_text(u, i);
	}, [
		() => re(),
		() => $(),
		() => `mailto:${N()}`,
		() => N()
	]), e.append(t, r), e.pop();
}
export { _e as default };
