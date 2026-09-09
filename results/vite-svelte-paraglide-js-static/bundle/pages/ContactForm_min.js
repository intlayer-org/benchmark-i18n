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
	!s && typeof window < "u" && window.location?.href && (e = j(window.location.href));
	let t = d(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return l || (c = t, l = !0, p(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function d(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = T();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && c !== void 0) n = c;
		else if (N(t) && M.has(t)) {
			let e = M.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return g(t);
			}
		}
		let e = h(n);
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
	!s && typeof window < "u" && window.location?.href && (d = j(window.location.href));
	for (let t of d) if (t === "globalVariable") c = e;
	else if (t === "cookie") {
		if (s || typeof document > "u" || typeof window > "u") continue;
		let t = `${r}=${e}; path=/; max-age=${i}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (N(t) && M.has(t)) {
		let n = M.get(t);
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
}, m = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function h(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of n) if (e.toLowerCase() === t) return e;
}
function g(e) {
	let t = h(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${n.join(", ")}`);
}
function _(e) {
	return e;
}
function v(e, t) {
	return e.exec(t.href);
}
var y = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function w() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function T() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = h(e), w(), S;
}
function E(e) {
	return D(e);
}
function D(e) {
	let t = _(typeof e == "string" ? new URL(e, m()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var O, k;
function A(e) {
	if (o.length === 0) return;
	let n = typeof e == "string" ? e : e.href;
	if (O === n) return k;
	let r = _(new URL(n, "http://example.com")), i = E(r), a = i.href === r.href ? [r] : [r, i], s;
	for (let e of a) {
		for (let n of o) if (v(new t(n.match, e.href), e)) {
			s = n;
			break;
		}
		if (s) break;
	}
	return O = n, k = s, s;
}
function j(e) {
	let t = A(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : a;
}
var M = /* @__PURE__ */ new Map();
function N(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var P = () => "Bug Report", F = () => "Rapport de bug", I = () => "Informe de error", L = () => "Fehlerbericht", R = () => "Segnalazione bug", z = () => "Relatório de bug", B = () => "错误报告", V = () => "バグ報告", ee = () => "Bug Report", te = () => "Отчет об ошибке", H = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? ee(e) : n === "ru" ? te(e) : P(e);
}), ne = () => "Contribution", re = () => "Contribution", ie = () => "Contribución", ae = () => "Beitrag", U = () => "Contributo", W = () => "Contribuição", G = () => "贡献", K = () => "貢献", q = () => "Contribution", J = () => "Вклад в проект", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? re(e) : n === "es" ? ie(e) : n === "de" ? ae(e) : n === "it" ? U(e) : n === "pt" ? W(e) : n === "zh" ? G(e) : n === "ja" ? K(e) : n === "ko" ? q(e) : n === "ru" ? J(e) : ne(e);
}), oe = () => "Email", se = () => "E-mail", ce = () => "Correo electrónico", le = () => "E-Mail", ue = () => "Email", de = () => "E-mail", fe = () => "电子邮件", pe = () => "メールアドレス", me = () => "Email", he = () => "Электронная почта", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : n === "ru" ? he(e) : oe(e);
}), _e = () => "you@example.com", ve = () => "vous@exemple.com", ye = () => "tu@ejemplo.com", be = () => "ihre@beispiel.de", xe = () => "tu@esempio.com", Se = () => "voce@exemplo.com", Ce = () => "you@example.com", we = () => "you@example.com", Te = () => "you@example.com", Ee = () => "you@example.com", De = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : n === "ru" ? Ee(e) : _e(e);
}), Oe = () => "Message", ke = () => "Message", Ae = () => "Mensaje", je = () => "Nachricht", Me = () => "Messaggio", Ne = () => "Mensagem", Pe = () => "消息", Fe = () => "メッセージ", Ie = () => "Message", Le = () => "Сообщение", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : n === "ru" ? Le(e) : Oe(e);
}), ze = () => "Describe your question or idea...", Be = () => "Décrivez votre question ou idée…", Ve = () => "Describe tu pregunta o idea...", He = () => "Beschreiben Sie Ihre Frage oder Idee...", Ue = () => "Descrivi la tua domanda o idea...", We = () => "Descreva sua pergunta ou ideia...", Ge = () => "描述您的问题或想法...", Ke = () => "ご質問やアイデアを記入してください...", qe = () => "Describe your question or idea...", Je = () => "Опишите ваш вопрос или идею...", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? Be(e) : n === "es" ? Ve(e) : n === "de" ? He(e) : n === "it" ? Ue(e) : n === "pt" ? We(e) : n === "zh" ? Ge(e) : n === "ja" ? Ke(e) : n === "ko" ? qe(e) : n === "ru" ? Je(e) : ze(e);
}), Xe = () => "Methodology Question", Ze = () => "Question de méthodologie", Qe = () => "Pregunta sobre la metodología", $e = () => "Frage zur Methodik", et = () => "Domanda sulla metodologia", tt = () => "Pergunta sobre metodologia", nt = () => "方法论问题", rt = () => "手法に関する質問", it = () => "Methodology Question", at = () => "Вопрос по методологии", X = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : n === "ru" ? at(e) : Xe(e);
}), ot = () => "Name", st = () => "Nom", ct = () => "Nombre", lt = () => "Name", ut = () => "Nome", dt = () => "Nome", ft = () => "姓名", pt = () => "名前", mt = () => "Name", ht = () => "Имя", gt = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? st(e) : n === "es" ? ct(e) : n === "de" ? lt(e) : n === "it" ? ut(e) : n === "pt" ? dt(e) : n === "zh" ? ft(e) : n === "ja" ? pt(e) : n === "ko" ? mt(e) : n === "ru" ? ht(e) : ot(e);
}), _t = () => "New Benchmark Idea", vt = () => "Idée de benchmark", yt = () => "Nueva idea de benchmark", bt = () => "Neue Benchmark-Idee", xt = () => "Nuova idea di benchmark", St = () => "Nova ideia de benchmark", Ct = () => "新基准测试想法", wt = () => "新しいベンチマークのアイデア", Tt = () => "New Benchmark Idea", Et = () => "Идея нового бенчмарка", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? vt(e) : n === "es" ? yt(e) : n === "de" ? bt(e) : n === "it" ? xt(e) : n === "pt" ? St(e) : n === "zh" ? Ct(e) : n === "ja" ? wt(e) : n === "ko" ? Tt(e) : n === "ru" ? Et(e) : _t(e);
}), Dt = () => "Other", Ot = () => "Autre", kt = () => "Otro", At = () => "Sonstiges", jt = () => "Altro", Mt = () => "Outro", Nt = () => "其他", Pt = () => "その他", Ft = () => "Other", It = () => "Другое", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? Ot(e) : n === "es" ? kt(e) : n === "de" ? At(e) : n === "it" ? jt(e) : n === "pt" ? Mt(e) : n === "zh" ? Nt(e) : n === "ja" ? Pt(e) : n === "ko" ? Ft(e) : n === "ru" ? It(e) : Dt(e);
}), Lt = () => "Send Message", Rt = () => "Envoyer", zt = () => "Enviar mensaje", Bt = () => "Nachricht senden", Vt = () => "Invia messaggio", Ht = () => "Enviar mensagem", Ut = () => "发送消息", Wt = () => "メッセージを送信", Gt = () => "Send Message", Kt = () => "Отправить сообщение", qt = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? Rt(e) : n === "es" ? zt(e) : n === "de" ? Bt(e) : n === "it" ? Vt(e) : n === "pt" ? Ht(e) : n === "zh" ? Ut(e) : n === "ja" ? Wt(e) : n === "ko" ? Gt(e) : n === "ru" ? Kt(e) : Lt(e);
}), Jt = () => "Topic", Yt = () => "Sujet", Xt = () => "Tema", Zt = () => "Thema", Qt = () => "Argomento", $t = () => "Assunto", en = () => "主题", $ = () => "トピック", tn = () => "Topic", nn = () => "Тема", rn = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? Yt(e) : n === "es" ? Xt(e) : n === "de" ? Zt(e) : n === "it" ? Qt(e) : n === "pt" ? $t(e) : n === "zh" ? en(e) : n === "ja" ? $(e) : n === "ko" ? tn(e) : n === "ru" ? nn(e) : Jt(e);
}), an = () => "Your name", on = () => "Votre nom", sn = () => "Tu nombre", cn = () => "Ihr Name", ln = () => "Il tuo nome", un = () => "Seu nome", dn = () => "您的姓名", fn = () => "お名前", pn = () => "Your name", mn = () => "Ваше имя", hn = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? on(e) : n === "es" ? sn(e) : n === "de" ? cn(e) : n === "it" ? ln(e) : n === "pt" ? un(e) : n === "zh" ? dn(e) : n === "ja" ? fn(e) : n === "ko" ? pn(e) : n === "ru" ? mn(e) : an(e);
}), gn = e.from_html("<form class=\"space-y-6\"><div class=\"grid gap-4 md:grid-cols-2\"><div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <input class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\"/></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <input type=\"email\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\"/></div></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none\"><option> </option><option> </option><option> </option><option> </option><option> </option></select></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <textarea class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\"></textarea></div> <button type=\"submit\" class=\"rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button></form>");
function _n(t, n) {
	e.push(n, !1);
	let r = "contact-name", i = "contact-email", a = "contact-topic", o = "contact-message";
	e.init();
	var s = gn(), c = e.child(s), l = e.child(c), u = e.child(l);
	e.set_attribute(u, "for", r);
	var d = e.only_child(u, !0), f = e.sibling(u, 2);
	e.set_attribute(f, "id", r), e.reset(l);
	var p = e.sibling(l, 2), m = e.child(p);
	e.set_attribute(m, "for", i);
	var h = e.only_child(m, !0), g = e.sibling(m, 2);
	e.set_attribute(g, "id", i), e.reset(p), e.reset(c);
	var _ = e.sibling(c, 2), v = e.child(_);
	e.set_attribute(v, "for", a);
	var y = e.only_child(v, !0), b = e.sibling(v, 2);
	e.set_attribute(b, "id", a);
	var x = e.child(b), S = e.only_child(x, !0), C = {}, w = e.sibling(x), T = e.only_child(w, !0), E = {}, D = e.sibling(w), O = e.only_child(D, !0), k = {}, A = e.sibling(D), j = e.only_child(A, !0), M = {}, N = e.sibling(A), P = e.only_child(N, !0), F = {};
	e.reset(b), e.reset(_);
	var I = e.sibling(_, 2), L = e.child(I);
	e.set_attribute(L, "for", o);
	var R = e.only_child(L, !0), z = e.sibling(L, 2);
	e.set_attribute(z, "id", o), e.set_attribute(z, "rows", 5), e.reset(I);
	var B = e.sibling(I, 2), V = e.only_child(B, !0);
	e.reset(s), e.template_effect((t, n, r, i, a, o, s, c, l, u, p, m, _, v, b, I, L, B) => {
		e.set_text(d, t), e.set_attribute(f, "placeholder", n), e.set_text(h, r), e.set_attribute(g, "placeholder", i), e.set_text(y, a), e.set_text(S, o), C !== (C = s) && (x.__value = C), e.set_text(T, c), E !== (E = l) && (w.__value = E), e.set_text(O, u), k !== (k = p) && (D.__value = k), e.set_text(j, m), M !== (M = _) && (A.__value = M), e.set_text(P, v), F !== (F = b) && (N.__value = F), e.set_text(R, I), e.set_attribute(z, "placeholder", L), e.set_text(V, B);
	}, [
		() => gt(),
		() => hn(),
		() => ge(),
		() => De(),
		() => rn(),
		() => H(),
		() => H(),
		() => Z(),
		() => Z(),
		() => X(),
		() => X(),
		() => Y(),
		() => Y(),
		() => Q(),
		() => Q(),
		() => Re(),
		() => Ye(),
		() => qt()
	]), e.append(t, s), e.pop();
}
export { _n as default };
