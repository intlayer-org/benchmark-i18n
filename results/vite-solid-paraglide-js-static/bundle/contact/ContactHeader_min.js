import { createComponent as e, effect as t, insert as n, setAttribute as r, template as i } from "solid-js/web";
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
	if (t) return p || (f = t, p = !0, g(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function h(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = D();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (F(t) && P.has(t)) {
			let e = P.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return y(t);
			}
		}
		let e = v(n);
		if (e) return e;
	}
}
var ee = (e) => {
	e ? window.location.href = e : window.location.reload();
}, g = (e, t) => {
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
		!d && n.reload && window.location && e !== r && ee(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, _ = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function v(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of o) if (e.toLowerCase() === t) return e;
}
function y(e) {
	let t = v(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function b(e) {
	return e;
}
function x(e, t) {
	return e.exec(t.href);
}
var S = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), te = RegExp(`(?:^|;\\s*)${S}=([^;]*)`), C = Symbol(), w = C;
function T() {
	w = C;
}
function E() {
	typeof queueMicrotask == "function" ? queueMicrotask(T) : Promise.resolve().then(T);
}
function D() {
	if (typeof document > "u") return;
	if (w !== C) return w;
	let e = document.cookie.match(te)?.[1];
	return w = v(e), E(), w;
}
function O(e) {
	return k(e);
}
function k(e) {
	let t = b(typeof e == "string" ? new URL(e, _()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && v(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), b(t);
}
var A, j;
function M(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (A === t) return j;
	let n = b(new URL(t, "http://example.com")), r = O(n), i = r.href === n.href ? [n] : [n, r], o;
	for (let e of i) {
		for (let t of u) if (x(new a(t.match, e.href), e)) {
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
var I = () => "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at", L = () => "Une idée, un bug ou envie de contribuer un benchmark ? Écrivez-nous à", R = () => "¿Tienes ideas, has encontrado un error o quieres contribuir con un benchmark? Ponte en contacto con nosotros en", z = () => "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter", B = () => "Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo", V = () => "Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em", H = () => "有想法、发现了错误或想贡献基准测试？请联系我们：", U = () => "アイデアがある、バグを見つけた、またはベンチマークを投稿したいですか？こちらまでご連絡ください：", W = () => "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at", G = () => "Есть идеи, нашли баг или хотите предложить бенчмарк? Напишите нам по адресу", K = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : n === "ru" ? G(e) : I(e);
}), q = () => "Get in Touch", J = () => "Contact", Y = () => "Ponte en contacto", X = () => "Kontakt aufnehmen", Z = () => "Contattaci", ne = () => "Entre em contato", re = () => "取得联系", ie = () => "お問い合わせ", ae = () => "Get in Touch", oe = () => "Связаться с нами", se = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? Z(e) : n === "pt" ? ne(e) : n === "zh" ? re(e) : n === "ja" ? ie(e) : n === "ko" ? ae(e) : n === "ru" ? oe(e) : q(e);
}), ce = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", le = () => "⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.", ue = () => "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.", de = () => "⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst.", fe = () => "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.", pe = () => "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real.", me = () => "⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。", he = () => "⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。", ge = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", _e = () => "⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом.", ve = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? le(e) : n === "es" ? ue(e) : n === "de" ? de(e) : n === "it" ? fe(e) : n === "pt" ? pe(e) : n === "zh" ? me(e) : n === "ja" ? he(e) : n === "ko" ? ge(e) : n === "ru" ? _e(e) : ce(e);
}), ye = () => "contact@intlayer.org", be = () => "contact@intlayer.org", xe = () => "contact@intlayer.org", Q = () => "contact@intlayer.org", Se = () => "contact@intlayer.org", Ce = () => "contact@intlayer.org", we = () => "contact@intlayer.org", Te = () => "contact@intlayer.org", Ee = () => "contact@intlayer.org", De = () => "contact@intlayer.org", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? be(e) : n === "es" ? xe(e) : n === "de" ? Q(e) : n === "it" ? Se(e) : n === "pt" ? Ce(e) : n === "zh" ? we(e) : n === "ja" ? Te(e) : n === "ko" ? Ee(e) : n === "ru" ? De(e) : ye(e);
}), Oe = i("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\">");
function ke() {
	return (() => {
		var e = Oe();
		return n(e, () => ve()), e;
	})();
}
var Ae = i("<h1 class=\"mb-2 text-3xl font-bold text-foreground\">"), je = i("<p class=\"mb-8 text-muted-foreground\"> <a class=\"text-primary hover:underline\"></a>.");
function Me() {
	return [
		e(ke, {}),
		(() => {
			var e = Ae();
			return n(e, () => se()), e;
		})(),
		(() => {
			var e = je(), i = e.firstChild, a = i.nextSibling;
			return n(e, () => K(), i), n(a, () => $()), t(() => r(a, "href", `mailto:${$()}`)), e;
		})()
	];
}
export { Me as default };
