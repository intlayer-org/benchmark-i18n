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
], o = [], s = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var c, l = !1, u = () => {
	let e = a;
	!s && typeof window < "u" && window.location?.href && (e = k(window.location.href));
	let t = d(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return l || (c = t, l = !0, p(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function d(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = C();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && c !== void 0) n = c;
		else if (j(t) && A.has(t)) {
			let e = A.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return h(t);
			}
		}
		let e = m(n);
		if (e) return e;
	}
}
var f = (e) => {
	e ? window.location.href = e : window.location.reload();
}, p = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, o;
	try {
		o = u();
	} catch {}
	let l = [], d = a;
	!s && typeof window < "u" && window.location?.href && (d = k(window.location.href));
	for (let t of d) if (t === "globalVariable") c = e;
	else if (t === "cookie") {
		if (s || typeof document > "u" || typeof window > "u") continue;
		let t = `${r}=${e}; path=/; max-age=${i}`;
		document.cookie = t, S();
	} else if (t === "baseLocale") continue;
	else if (j(t) && A.has(t)) {
		let n = A.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), l.push(r));
		}
	}
	let p = () => {
		!s && n.reload && window.location && e !== o && f(void 0);
	};
	if (l.length) return Promise.all(l).then(() => {
		p();
	});
	p();
}, ee = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function m(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of n) if (e.toLowerCase() === t) return e;
}
function h(e) {
	let t = m(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${n.join(", ")}`);
}
function g(e) {
	return e;
}
function _(e, t) {
	return e.exec(t.href);
}
var v = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), y = RegExp(`(?:^|;\\s*)${v}=([^;]*)`), b = Symbol(), x = b;
function S() {
	x = b;
}
function te() {
	typeof queueMicrotask == "function" ? queueMicrotask(S) : Promise.resolve().then(S);
}
function C() {
	if (typeof document > "u") return;
	if (x !== b) return x;
	let e = document.cookie.match(y)?.[1];
	return x = m(e), te(), x;
}
function w(e) {
	return T(e);
}
function T(e) {
	let t = g(typeof e == "string" ? new URL(e, ee()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && m(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), g(t);
}
var E, D;
function O(e) {
	if (o.length === 0) return;
	let n = typeof e == "string" ? e : e.href;
	if (E === n) return D;
	let r = g(new URL(n, "http://example.com")), i = w(r), a = i.href === r.href ? [r] : [r, i], s;
	for (let e of a) {
		for (let n of o) if (_(new t(n.match, e.href), e)) {
			s = n;
			break;
		}
		if (s) break;
	}
	return E = n, D = s, s;
}
function k(e) {
	let t = O(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : a;
}
var A = /* @__PURE__ */ new Map();
function j(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var M = () => "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at", N = () => "Une idée, un bug ou envie de contribuer un benchmark ? Écrivez-nous à", P = () => "¿Tienes ideas, has encontrado un error o quieres contribuir con un benchmark? Ponte en contacto con nosotros en", F = () => "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter", I = () => "Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo", L = () => "Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em", R = () => "有想法、发现了错误或想贡献基准测试？请联系我们：", z = () => "アイデアがある、バグを見つけた、またはベンチマークを投稿したいですか？こちらまでご連絡ください：", B = () => "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at", V = () => "Есть идеи, нашли баг или хотите предложить бенчмарк? Напишите нам по адресу", H = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? N(e) : n === "es" ? P(e) : n === "de" ? F(e) : n === "it" ? I(e) : n === "pt" ? L(e) : n === "zh" ? R(e) : n === "ja" ? z(e) : n === "ko" ? B(e) : n === "ru" ? V(e) : M(e);
}), U = () => "Get in Touch", W = () => "Contact", G = () => "Ponte en contacto", K = () => "Kontakt aufnehmen", q = () => "Contattaci", J = () => "Entre em contato", Y = () => "取得联系", X = () => "お問い合わせ", ne = () => "Get in Touch", Z = () => "Связаться с нами", re = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? W(e) : n === "es" ? G(e) : n === "de" ? K(e) : n === "it" ? q(e) : n === "pt" ? J(e) : n === "zh" ? Y(e) : n === "ja" ? X(e) : n === "ko" ? ne(e) : n === "ru" ? Z(e) : U(e);
}), ie = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", ae = () => "⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.", oe = () => "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.", se = () => "⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst.", ce = () => "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.", le = () => "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real.", ue = () => "⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。", de = () => "⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。", fe = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", pe = () => "⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом.", me = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? ae(e) : n === "es" ? oe(e) : n === "de" ? se(e) : n === "it" ? ce(e) : n === "pt" ? le(e) : n === "zh" ? ue(e) : n === "ja" ? de(e) : n === "ko" ? fe(e) : n === "ru" ? pe(e) : ie(e);
}), he = () => "contact@intlayer.org", ge = () => "contact@intlayer.org", _e = () => "contact@intlayer.org", ve = () => "contact@intlayer.org", ye = () => "contact@intlayer.org", be = () => "contact@intlayer.org", xe = () => "contact@intlayer.org", Q = () => "contact@intlayer.org", Se = () => "contact@intlayer.org", Ce = () => "contact@intlayer.org", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? ge(e) : n === "es" ? _e(e) : n === "de" ? ve(e) : n === "it" ? ye(e) : n === "pt" ? be(e) : n === "zh" ? xe(e) : n === "ja" ? Q(e) : n === "ko" ? Se(e) : n === "ru" ? Ce(e) : he(e);
}), we = e.from_html("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\"> </div>");
function Te(t, n) {
	e.push(n, !1), e.init();
	var r = we(), i = e.only_child(r, !0);
	e.template_effect((t) => e.set_text(i, t), [() => me()]), e.append(t, r), e.pop();
}
var Ee = e.from_html("<!> <h1 class=\"mb-2 text-3xl font-bold text-foreground\"> </h1> <p class=\"mb-8 text-muted-foreground\"> <a class=\"text-primary hover:underline\"> </a> .</p>", 1);
function De(t, n) {
	e.push(n, !1), e.init();
	var r = Ee(), i = e.first_child(r);
	Te(i, {});
	var a = e.sibling(i, 2), o = e.only_child(a, !0), s = e.sibling(a, 2), c = e.child(s), l = e.sibling(c), u = e.only_child(l, !0);
	e.next(), e.reset(s), e.template_effect((t, n, r, i) => {
		e.set_text(o, t), e.set_text(c, `${n ?? ""} `), e.set_attribute(l, "href", r), e.set_text(u, i);
	}, [
		() => re(),
		() => H(),
		() => `mailto:${$()}`,
		() => $()
	]), e.append(t, r), e.pop();
}
export { De as default };
