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
		if (t === "cookie") n = x();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (C(t) && S.has(t)) {
			let e = S.get(t);
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
	else if (C(t) && S.has(t)) {
		let n = S.get(t);
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
function b(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${n.join(", ")}`);
}
function x() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${r}=([^;]+)`))?.[2];
	return y(e);
}
var S = /* @__PURE__ */ new Map();
function C(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var w = () => "Name", T = () => "Nom", E = () => "Nombre", D = () => "Name", O = () => "Nome", k = () => "Nome", A = () => "姓名", j = () => "名前", M = () => "Name", N = () => "Имя", P = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? w(e) : n === "fr" ? T(e) : n === "es" ? E(e) : n === "de" ? D(e) : n === "it" ? O(e) : n === "pt" ? k(e) : n === "zh" ? A(e) : n === "ja" ? j(e) : n === "ko" ? M(e) : N(e);
}), F = () => "Your name", I = () => "Votre nom", L = () => "Tu nombre", R = () => "Ihr Name", z = () => "Il tuo nome", B = () => "Seu nome", V = () => "您的姓名", H = () => "お名前", ee = () => "Your name", te = () => "Ваше имя", ne = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? F(e) : n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? ee(e) : te(e);
}), re = () => "Email", ie = () => "E-mail", ae = () => "Correo electrónico", oe = () => "E-Mail", U = () => "Email", W = () => "E-mail", G = () => "电子邮件", K = () => "メールアドレス", q = () => "Email", se = () => "Электронная почта", ce = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? re(e) : n === "fr" ? ie(e) : n === "es" ? ae(e) : n === "de" ? oe(e) : n === "it" ? U(e) : n === "pt" ? W(e) : n === "zh" ? G(e) : n === "ja" ? K(e) : n === "ko" ? q(e) : se(e);
}), le = () => "you@example.com", ue = () => "vous@exemple.com", de = () => "tu@ejemplo.com", fe = () => "ihre@beispiel.de", pe = () => "tu@esempio.com", me = () => "voce@exemplo.com", he = () => "you@example.com", ge = () => "you@example.com", _e = () => "you@example.com", ve = () => "you@example.com", ye = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? le(e) : n === "fr" ? ue(e) : n === "es" ? de(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : ve(e);
}), be = () => "Topic", xe = () => "Sujet", Se = () => "Tema", Ce = () => "Thema", we = () => "Argomento", Te = () => "Assunto", Ee = () => "主题", De = () => "トピック", Oe = () => "Topic", ke = () => "Тема", Ae = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? be(e) : n === "fr" ? xe(e) : n === "es" ? Se(e) : n === "de" ? Ce(e) : n === "it" ? we(e) : n === "pt" ? Te(e) : n === "zh" ? Ee(e) : n === "ja" ? De(e) : n === "ko" ? Oe(e) : ke(e);
}), je = () => "Bug Report", Me = () => "Rapport de bug", Ne = () => "Informe de error", Pe = () => "Fehlerbericht", Fe = () => "Segnalazione bug", Ie = () => "Relatório de bug", Le = () => "错误报告", Re = () => "バグ報告", ze = () => "Bug Report", Be = () => "Отчет об ошибке", J = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? je(e) : n === "fr" ? Me(e) : n === "es" ? Ne(e) : n === "de" ? Pe(e) : n === "it" ? Fe(e) : n === "pt" ? Ie(e) : n === "zh" ? Le(e) : n === "ja" ? Re(e) : n === "ko" ? ze(e) : Be(e);
}), Ve = () => "New Benchmark Idea", He = () => "Idée de benchmark", Ue = () => "Nueva idea de benchmark", We = () => "Neue Benchmark-Idee", Ge = () => "Nuova idea di benchmark", Ke = () => "Nova ideia de benchmark", qe = () => "新基准测试想法", Je = () => "新しいベンチマークのアイデア", Ye = () => "New Benchmark Idea", Xe = () => "Идея нового бенчмарка", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Ve(e) : n === "fr" ? He(e) : n === "es" ? Ue(e) : n === "de" ? We(e) : n === "it" ? Ge(e) : n === "pt" ? Ke(e) : n === "zh" ? qe(e) : n === "ja" ? Je(e) : n === "ko" ? Ye(e) : Xe(e);
}), Ze = () => "Methodology Question", Qe = () => "Question de méthodologie", $e = () => "Pregunta sobre la metodología", et = () => "Frage zur Methodik", tt = () => "Domanda sulla metodologia", nt = () => "Pergunta sobre metodologia", rt = () => "方法论问题", it = () => "手法に関する質問", at = () => "Methodology Question", ot = () => "Вопрос по методологии", X = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Ze(e) : n === "fr" ? Qe(e) : n === "es" ? $e(e) : n === "de" ? et(e) : n === "it" ? tt(e) : n === "pt" ? nt(e) : n === "zh" ? rt(e) : n === "ja" ? it(e) : n === "ko" ? at(e) : ot(e);
}), st = () => "Contribution", ct = () => "Contribution", lt = () => "Contribución", ut = () => "Beitrag", dt = () => "Contributo", ft = () => "Contribuição", pt = () => "贡献", mt = () => "貢献", ht = () => "Contribution", gt = () => "Вклад в проект", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? st(e) : n === "fr" ? ct(e) : n === "es" ? lt(e) : n === "de" ? ut(e) : n === "it" ? dt(e) : n === "pt" ? ft(e) : n === "zh" ? pt(e) : n === "ja" ? mt(e) : n === "ko" ? ht(e) : gt(e);
}), _t = () => "Other", vt = () => "Autre", yt = () => "Otro", bt = () => "Sonstiges", xt = () => "Altro", St = () => "Outro", Ct = () => "其他", wt = () => "その他", Tt = () => "Other", Et = () => "Другое", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? _t(e) : n === "fr" ? vt(e) : n === "es" ? yt(e) : n === "de" ? bt(e) : n === "it" ? xt(e) : n === "pt" ? St(e) : n === "zh" ? Ct(e) : n === "ja" ? wt(e) : n === "ko" ? Tt(e) : Et(e);
}), Dt = () => "Message", Ot = () => "Message", kt = () => "Mensaje", At = () => "Nachricht", jt = () => "Messaggio", Mt = () => "Mensagem", Nt = () => "消息", Pt = () => "メッセージ", Ft = () => "Message", It = () => "Сообщение", Lt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Dt(e) : n === "fr" ? Ot(e) : n === "es" ? kt(e) : n === "de" ? At(e) : n === "it" ? jt(e) : n === "pt" ? Mt(e) : n === "zh" ? Nt(e) : n === "ja" ? Pt(e) : n === "ko" ? Ft(e) : It(e);
}), Rt = () => "Describe your question or idea...", zt = () => "Décrivez votre question ou idée…", Bt = () => "Describe tu pregunta o idea...", Vt = () => "Beschreiben Sie Ihre Frage oder Idee...", Ht = () => "Descrivi la tua domanda o idea...", Ut = () => "Descreva sua pergunta ou ideia...", Wt = () => "描述您的问题或想法...", Gt = () => "ご質問やアイデアを記入してください...", Kt = () => "Describe your question or idea...", qt = () => "Опишите ваш вопрос или идею...", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Rt(e) : n === "fr" ? zt(e) : n === "es" ? Bt(e) : n === "de" ? Vt(e) : n === "it" ? Ht(e) : n === "pt" ? Ut(e) : n === "zh" ? Wt(e) : n === "ja" ? Gt(e) : n === "ko" ? Kt(e) : qt(e);
}), Jt = () => "Send Message", Yt = () => "Envoyer", Xt = () => "Enviar mensaje", Zt = () => "Nachricht senden", Qt = () => "Invia messaggio", $t = () => "Enviar mensagem", en = () => "发送消息", tn = () => "メッセージを送信", nn = () => "Send Message", rn = () => "Отправить сообщение", an = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Jt(e) : n === "fr" ? Yt(e) : n === "es" ? Xt(e) : n === "de" ? Zt(e) : n === "it" ? Qt(e) : n === "pt" ? $t(e) : n === "zh" ? en(e) : n === "ja" ? tn(e) : n === "ko" ? nn(e) : rn(e);
}), on = e.from_html("<form class=\"space-y-6\"><div class=\"grid gap-4 md:grid-cols-2\"><div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <input class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\"/></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <input type=\"email\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\"/></div></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none\"><option> </option><option> </option><option> </option><option> </option><option> </option></select></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <textarea class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\"></textarea></div> <button type=\"submit\" class=\"rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button></form>");
function sn(t, n) {
	e.push(n, !1);
	let r = "contact-name", i = "contact-email", a = "contact-topic", o = "contact-message";
	e.init();
	var s = on(), c = e.child(s), l = e.child(c), u = e.child(l);
	e.set_attribute(u, "for", r);
	var d = e.child(u, !0);
	e.reset(u);
	var f = e.sibling(u, 2);
	e.set_attribute(f, "id", r), e.reset(l);
	var p = e.sibling(l, 2), m = e.child(p);
	e.set_attribute(m, "for", i);
	var h = e.child(m, !0);
	e.reset(m);
	var g = e.sibling(m, 2);
	e.set_attribute(g, "id", i), e.reset(p), e.reset(c);
	var _ = e.sibling(c, 2), v = e.child(_);
	e.set_attribute(v, "for", a);
	var y = e.child(v, !0);
	e.reset(v);
	var b = e.sibling(v, 2);
	e.set_attribute(b, "id", a);
	var x = e.child(b), S = e.child(x, !0);
	e.reset(x);
	var C = {}, w = e.sibling(x), T = e.child(w, !0);
	e.reset(w);
	var E = {}, D = e.sibling(w), O = e.child(D, !0);
	e.reset(D);
	var k = {}, A = e.sibling(D), j = e.child(A, !0);
	e.reset(A);
	var M = {}, N = e.sibling(A), F = e.child(N, !0);
	e.reset(N);
	var I = {};
	e.reset(b), e.reset(_);
	var L = e.sibling(_, 2), R = e.child(L);
	e.set_attribute(R, "for", o);
	var z = e.child(R, !0);
	e.reset(R);
	var B = e.sibling(R, 2);
	e.set_attribute(B, "id", o), e.set_attribute(B, "rows", 5), e.reset(L);
	var V = e.sibling(L, 2), H = e.child(V, !0);
	e.reset(V), e.reset(s), e.template_effect((t, n, r, i, a, o, s, c, l, u, p, m, _, v, b, P, L, R) => {
		e.set_text(d, t), e.set_attribute(f, "placeholder", n), e.set_text(h, r), e.set_attribute(g, "placeholder", i), e.set_text(y, a), e.set_text(S, o), C !== (C = s) && (x.__value = s), e.set_text(T, c), E !== (E = l) && (w.__value = l), e.set_text(O, u), k !== (k = p) && (D.__value = p), e.set_text(j, m), M !== (M = _) && (A.__value = _), e.set_text(F, v), I !== (I = b) && (N.__value = b), e.set_text(z, P), e.set_attribute(B, "placeholder", L), e.set_text(H, R);
	}, [
		() => P(),
		() => ne(),
		() => ce(),
		() => ye(),
		() => Ae(),
		() => J(),
		() => J(),
		() => Y(),
		() => Y(),
		() => X(),
		() => X(),
		() => Z(),
		() => Z(),
		() => Q(),
		() => Q(),
		() => Lt(),
		() => $(),
		() => an()
	]), e.append(t, s), e.pop();
}
export { sn as default };
