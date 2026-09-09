import { effect as e, insert as t, setAttribute as n, template as r } from "solid-js/web";
import { createUniqueId as i } from "solid-js";
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
		if (t === "cookie") n = ee();
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
function O() {
	typeof queueMicrotask == "function" ? queueMicrotask(D) : Promise.resolve().then(D);
}
function ee() {
	if (typeof document > "u") return;
	if (E !== T) return E;
	let e = document.cookie.match(w)?.[1];
	return E = y(e), O(), E;
}
function k(e) {
	return A(e);
}
function A(e) {
	let t = x(typeof e == "string" ? new URL(e, v()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && y(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), x(t);
}
var j, M;
function te(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (j === t) return M;
	let n = x(new URL(t, "http://example.com")), r = k(n), i = r.href === n.href ? [n] : [n, r], o;
	for (let e of i) {
		for (let t of u) if (S(new a(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return j = t, M = o, o;
}
function N(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var P = /* @__PURE__ */ new Map();
function F(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var I = () => "Bug Report", L = () => "Rapport de bug", R = () => "Informe de error", z = () => "Fehlerbericht", B = () => "Segnalazione bug", V = () => "Relatório de bug", H = () => "错误报告", U = () => "バグ報告", W = () => "Bug Report", G = () => "Отчет об ошибке", K = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : n === "ru" ? G(e) : I(e);
}), q = () => "Contribution", J = () => "Contribution", Y = () => "Contribución", X = () => "Beitrag", Z = () => "Contributo", Q = () => "Contribuição", ne = () => "贡献", re = () => "貢献", ie = () => "Contribution", ae = () => "Вклад в проект", oe = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? Z(e) : n === "pt" ? Q(e) : n === "zh" ? ne(e) : n === "ja" ? re(e) : n === "ko" ? ie(e) : n === "ru" ? ae(e) : q(e);
}), se = () => "Email", ce = () => "E-mail", le = () => "Correo electrónico", ue = () => "E-Mail", de = () => "Email", fe = () => "E-mail", pe = () => "电子邮件", me = () => "メールアドレス", he = () => "Email", ge = () => "Электронная почта", _e = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? ce(e) : n === "es" ? le(e) : n === "de" ? ue(e) : n === "it" ? de(e) : n === "pt" ? fe(e) : n === "zh" ? pe(e) : n === "ja" ? me(e) : n === "ko" ? he(e) : n === "ru" ? ge(e) : se(e);
}), ve = () => "you@example.com", ye = () => "vous@exemple.com", be = () => "tu@ejemplo.com", xe = () => "ihre@beispiel.de", Se = () => "tu@esempio.com", Ce = () => "voce@exemplo.com", we = () => "you@example.com", Te = () => "you@example.com", Ee = () => "you@example.com", De = () => "you@example.com", Oe = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? ye(e) : n === "es" ? be(e) : n === "de" ? xe(e) : n === "it" ? Se(e) : n === "pt" ? Ce(e) : n === "zh" ? we(e) : n === "ja" ? Te(e) : n === "ko" ? Ee(e) : n === "ru" ? De(e) : ve(e);
}), ke = () => "Message", Ae = () => "Message", je = () => "Mensaje", Me = () => "Nachricht", Ne = () => "Messaggio", Pe = () => "Mensagem", Fe = () => "消息", Ie = () => "メッセージ", Le = () => "Message", Re = () => "Сообщение", ze = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ae(e) : n === "es" ? je(e) : n === "de" ? Me(e) : n === "it" ? Ne(e) : n === "pt" ? Pe(e) : n === "zh" ? Fe(e) : n === "ja" ? Ie(e) : n === "ko" ? Le(e) : n === "ru" ? Re(e) : ke(e);
}), Be = () => "Describe your question or idea...", Ve = () => "Décrivez votre question ou idée…", He = () => "Describe tu pregunta o idea...", Ue = () => "Beschreiben Sie Ihre Frage oder Idee...", We = () => "Descrivi la tua domanda o idea...", Ge = () => "Descreva sua pergunta ou ideia...", Ke = () => "描述您的问题或想法...", qe = () => "ご質問やアイデアを記入してください...", Je = () => "Describe your question or idea...", Ye = () => "Опишите ваш вопрос или идею...", Xe = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ve(e) : n === "es" ? He(e) : n === "de" ? Ue(e) : n === "it" ? We(e) : n === "pt" ? Ge(e) : n === "zh" ? Ke(e) : n === "ja" ? qe(e) : n === "ko" ? Je(e) : n === "ru" ? Ye(e) : Be(e);
}), Ze = () => "Methodology Question", Qe = () => "Question de méthodologie", $e = () => "Pregunta sobre la metodología", et = () => "Frage zur Methodik", tt = () => "Domanda sulla metodologia", nt = () => "Pergunta sobre metodologia", rt = () => "方法论问题", it = () => "手法に関する質問", at = () => "Methodology Question", ot = () => "Вопрос по методологии", st = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Qe(e) : n === "es" ? $e(e) : n === "de" ? et(e) : n === "it" ? tt(e) : n === "pt" ? nt(e) : n === "zh" ? rt(e) : n === "ja" ? it(e) : n === "ko" ? at(e) : n === "ru" ? ot(e) : Ze(e);
}), ct = () => "Name", lt = () => "Nom", ut = () => "Nombre", dt = () => "Name", ft = () => "Nome", pt = () => "Nome", mt = () => "姓名", ht = () => "名前", gt = () => "Name", _t = () => "Имя", vt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? lt(e) : n === "es" ? ut(e) : n === "de" ? dt(e) : n === "it" ? ft(e) : n === "pt" ? pt(e) : n === "zh" ? mt(e) : n === "ja" ? ht(e) : n === "ko" ? gt(e) : n === "ru" ? _t(e) : ct(e);
}), yt = () => "New Benchmark Idea", bt = () => "Idée de benchmark", xt = () => "Nueva idea de benchmark", St = () => "Neue Benchmark-Idee", Ct = () => "Nuova idea di benchmark", wt = () => "Nova ideia de benchmark", Tt = () => "新基准测试想法", Et = () => "新しいベンチマークのアイデア", Dt = () => "New Benchmark Idea", Ot = () => "Идея нового бенчмарка", kt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? bt(e) : n === "es" ? xt(e) : n === "de" ? St(e) : n === "it" ? Ct(e) : n === "pt" ? wt(e) : n === "zh" ? Tt(e) : n === "ja" ? Et(e) : n === "ko" ? Dt(e) : n === "ru" ? Ot(e) : yt(e);
}), At = () => "Other", jt = () => "Autre", Mt = () => "Otro", Nt = () => "Sonstiges", Pt = () => "Altro", Ft = () => "Outro", It = () => "其他", Lt = () => "その他", Rt = () => "Other", zt = () => "Другое", Bt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? jt(e) : n === "es" ? Mt(e) : n === "de" ? Nt(e) : n === "it" ? Pt(e) : n === "pt" ? Ft(e) : n === "zh" ? It(e) : n === "ja" ? Lt(e) : n === "ko" ? Rt(e) : n === "ru" ? zt(e) : At(e);
}), Vt = () => "Send Message", Ht = () => "Envoyer", Ut = () => "Enviar mensaje", Wt = () => "Nachricht senden", Gt = () => "Invia messaggio", Kt = () => "Enviar mensagem", qt = () => "发送消息", Jt = () => "メッセージを送信", Yt = () => "Send Message", Xt = () => "Отправить сообщение", Zt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ht(e) : n === "es" ? Ut(e) : n === "de" ? Wt(e) : n === "it" ? Gt(e) : n === "pt" ? Kt(e) : n === "zh" ? qt(e) : n === "ja" ? Jt(e) : n === "ko" ? Yt(e) : n === "ru" ? Xt(e) : Vt(e);
}), Qt = () => "Topic", $t = () => "Sujet", en = () => "Tema", $ = () => "Thema", tn = () => "Argomento", nn = () => "Assunto", rn = () => "主题", an = () => "トピック", on = () => "Topic", sn = () => "Тема", cn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? $t(e) : n === "es" ? en(e) : n === "de" ? $(e) : n === "it" ? tn(e) : n === "pt" ? nn(e) : n === "zh" ? rn(e) : n === "ja" ? an(e) : n === "ko" ? on(e) : n === "ru" ? sn(e) : Qt(e);
}), ln = () => "Your name", un = () => "Votre nom", dn = () => "Tu nombre", fn = () => "Ihr Name", pn = () => "Il tuo nome", mn = () => "Seu nome", hn = () => "您的姓名", gn = () => "お名前", _n = () => "Your name", vn = () => "Ваше имя", yn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? un(e) : n === "es" ? dn(e) : n === "de" ? fn(e) : n === "it" ? pn(e) : n === "pt" ? mn(e) : n === "zh" ? hn(e) : n === "ja" ? gn(e) : n === "ko" ? _n(e) : n === "ru" ? vn(e) : ln(e);
}), bn = r("<form class=space-y-6><div class=\"grid gap-4 md:grid-cols-2\"><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><input class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><input type=email class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></div></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"><option></option><option></option><option></option><option></option><option></option></select></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><textarea rows=5 class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></textarea></div><button type=submit class=\"rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function xn() {
	let r = i(), a = i(), o = i(), s = i();
	return (() => {
		var i = bn(), c = i.firstChild, l = c.firstChild, u = l.firstChild, d = u.nextSibling, f = l.nextSibling.firstChild, p = f.nextSibling, m = c.nextSibling, h = m.firstChild, g = h.nextSibling, _ = g.firstChild, v = _.nextSibling, y = v.nextSibling, b = y.nextSibling, x = b.nextSibling, S = m.nextSibling, C = S.firstChild, w = C.nextSibling, T = S.nextSibling;
		return n(u, "for", r), t(u, () => vt()), n(d, "id", r), n(f, "for", a), t(f, () => _e()), n(p, "id", a), n(h, "for", o), t(h, () => cn()), n(g, "id", o), t(_, () => K()), t(v, () => kt()), t(y, () => st()), t(b, () => oe()), t(x, () => Bt()), n(C, "for", s), t(C, () => ze()), n(w, "id", s), t(T, () => Zt()), e((e) => {
			var t = yn(), r = Oe(), i = Xe();
			return t !== e.e && n(d, "placeholder", e.e = t), r !== e.t && n(p, "placeholder", e.t = r), i !== e.a && n(w, "placeholder", e.a = i), e;
		}, {
			e: void 0,
			t: void 0,
			a: void 0
		}), i;
	})();
}
export { xn as default };
