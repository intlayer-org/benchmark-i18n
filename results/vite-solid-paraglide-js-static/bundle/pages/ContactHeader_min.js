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
	let t = b(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return v || (_ = t, v = !0, ee(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function b(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = w();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && _ !== void 0) n = _;
		else if (E(t) && T.has(t)) {
			let e = T.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return C(t);
			}
		}
		let e = S(n);
		if (e) return e;
	}
}
var x = (e) => {
	e ? window.location.href = e : window.location.reload();
}, ee = (e, t) => {
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
	else if (E(t) && T.has(t)) {
		let n = T.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!g && n.reload && window.location && e !== r && x(void 0);
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
function C(e) {
	let t = S(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function w() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${s}=([^;]+)`))?.[2];
	return S(e);
}
var T = /* @__PURE__ */ new Map();
function E(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var D = () => "contact@intlayer.org", O = () => "contact@intlayer.org", k = () => "contact@intlayer.org", A = () => "contact@intlayer.org", j = () => "contact@intlayer.org", M = () => "contact@intlayer.org", N = () => "contact@intlayer.org", P = () => "contact@intlayer.org", F = () => "contact@intlayer.org", I = () => "contact@intlayer.org", L = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? D(e) : n === "fr" ? O(e) : n === "es" ? k(e) : n === "de" ? A(e) : n === "it" ? j(e) : n === "pt" ? M(e) : n === "zh" ? N(e) : n === "ja" ? P(e) : n === "ko" ? F(e) : I(e);
}), R = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", z = () => "⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.", B = () => "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.", V = () => "⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst.", H = () => "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.", U = () => "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real.", W = () => "⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。", G = () => "⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。", te = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", K = () => "⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом.", q = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? R(e) : n === "fr" ? z(e) : n === "es" ? B(e) : n === "de" ? V(e) : n === "it" ? H(e) : n === "pt" ? U(e) : n === "zh" ? W(e) : n === "ja" ? G(e) : n === "ko" ? te(e) : K(e);
}), J = () => "Get in Touch", Y = () => "Contact", X = () => "Ponte en contacto", Z = () => "Kontakt aufnehmen", Q = () => "Contattaci", ne = () => "Entre em contato", re = () => "取得联系", ie = () => "お問い合わせ", ae = () => "Get in Touch", oe = () => "Связаться с нами", se = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? J(e) : n === "fr" ? Y(e) : n === "es" ? X(e) : n === "de" ? Z(e) : n === "it" ? Q(e) : n === "pt" ? ne(e) : n === "zh" ? re(e) : n === "ja" ? ie(e) : n === "ko" ? ae(e) : oe(e);
}), ce = () => "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at", le = () => "Une idée, un bug ou envie de contribuer un benchmark ? Écrivez-nous à", ue = () => "¿Tienes ideas, has encontrado un error o quieres contribuir con un benchmark? Ponte en contacto con nosotros en", de = () => "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter", fe = () => "Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo", pe = () => "Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em", $ = () => "有想法、发现了错误或想贡献基准测试？请联系我们：", me = () => "アイデアがある、バグを見つけた、またはベンチマークを投稿したいですか？こちらまでご連絡ください：", he = () => "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at", ge = () => "Есть идеи, нашли баг или хотите предложить бенчмарк? Напишите нам по адресу", _e = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? ce(e) : n === "fr" ? le(e) : n === "es" ? ue(e) : n === "de" ? de(e) : n === "it" ? fe(e) : n === "pt" ? pe(e) : n === "zh" ? $(e) : n === "ja" ? me(e) : n === "ko" ? he(e) : ge(e);
}), ve = i("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\">");
function ye() {
	return (() => {
		var e = ve();
		return n(e, () => q()), e;
	})();
}
var be = i("<h1 class=\"mb-2 text-3xl font-bold text-foreground\">"), xe = i("<p class=\"mb-8 text-muted-foreground\"> <a class=\"text-primary hover:underline\"></a>.");
function Se() {
	return [
		e(ye, {}),
		(() => {
			var e = be();
			return n(e, () => se()), e;
		})(),
		(() => {
			var e = xe(), i = e.firstChild, a = i.nextSibling;
			return n(e, () => _e(), i), n(a, () => L()), t(() => r(a, "href", `mailto:${L()}`)), e;
		})()
	];
}
export { Se as default };
