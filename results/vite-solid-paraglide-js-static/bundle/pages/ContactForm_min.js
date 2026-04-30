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
	if (t) return v || (_ = t, v = !0, S(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function b(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = T();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && _ !== void 0) n = _;
		else if (D(t) && E.has(t)) {
			let e = E.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return w(t);
			}
		}
		let e = C(n);
		if (e) return e;
	}
}
var x = (e) => {
	e ? window.location.href = e : window.location.reload();
}, S = (e, t) => {
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
	else if (D(t) && E.has(t)) {
		let n = E.get(t);
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
function C(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of o) if (e.toLowerCase() === t) return e;
}
function w(e) {
	let t = C(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function T() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${s}=([^;]+)`))?.[2];
	return C(e);
}
var E = /* @__PURE__ */ new Map();
function D(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var ee = () => "Name", te = () => "Nom", O = () => "Nombre", k = () => "Name", A = () => "Nome", j = () => "Nome", M = () => "姓名", N = () => "名前", P = () => "Name", F = () => "Имя", I = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? ee(e) : n === "fr" ? te(e) : n === "es" ? O(e) : n === "de" ? k(e) : n === "it" ? A(e) : n === "pt" ? j(e) : n === "zh" ? M(e) : n === "ja" ? N(e) : n === "ko" ? P(e) : F(e);
}), L = () => "Your name", R = () => "Votre nom", z = () => "Tu nombre", B = () => "Ihr Name", V = () => "Il tuo nome", H = () => "Seu nome", U = () => "您的姓名", W = () => "お名前", G = () => "Your name", K = () => "Ваше имя", q = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? L(e) : n === "fr" ? R(e) : n === "es" ? z(e) : n === "de" ? B(e) : n === "it" ? V(e) : n === "pt" ? H(e) : n === "zh" ? U(e) : n === "ja" ? W(e) : n === "ko" ? G(e) : K(e);
}), J = () => "Email", Y = () => "E-mail", X = () => "Correo electrónico", Z = () => "E-Mail", Q = () => "Email", ne = () => "E-mail", re = () => "电子邮件", ie = () => "メールアドレス", ae = () => "Email", oe = () => "Электронная почта", se = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? J(e) : n === "fr" ? Y(e) : n === "es" ? X(e) : n === "de" ? Z(e) : n === "it" ? Q(e) : n === "pt" ? ne(e) : n === "zh" ? re(e) : n === "ja" ? ie(e) : n === "ko" ? ae(e) : oe(e);
}), ce = () => "you@example.com", le = () => "vous@exemple.com", ue = () => "tu@ejemplo.com", de = () => "ihre@beispiel.de", fe = () => "tu@esempio.com", pe = () => "voce@exemplo.com", me = () => "you@example.com", he = () => "you@example.com", ge = () => "you@example.com", _e = () => "you@example.com", ve = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? ce(e) : n === "fr" ? le(e) : n === "es" ? ue(e) : n === "de" ? de(e) : n === "it" ? fe(e) : n === "pt" ? pe(e) : n === "zh" ? me(e) : n === "ja" ? he(e) : n === "ko" ? ge(e) : _e(e);
}), ye = () => "Topic", be = () => "Sujet", xe = () => "Tema", Se = () => "Thema", Ce = () => "Argomento", we = () => "Assunto", Te = () => "主题", Ee = () => "トピック", De = () => "Topic", Oe = () => "Тема", ke = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? ye(e) : n === "fr" ? be(e) : n === "es" ? xe(e) : n === "de" ? Se(e) : n === "it" ? Ce(e) : n === "pt" ? we(e) : n === "zh" ? Te(e) : n === "ja" ? Ee(e) : n === "ko" ? De(e) : Oe(e);
}), Ae = () => "Bug Report", je = () => "Rapport de bug", Me = () => "Informe de error", Ne = () => "Fehlerbericht", Pe = () => "Segnalazione bug", Fe = () => "Relatório de bug", Ie = () => "错误报告", Le = () => "バグ報告", Re = () => "Bug Report", ze = () => "Отчет об ошибке", Be = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Ae(e) : n === "fr" ? je(e) : n === "es" ? Me(e) : n === "de" ? Ne(e) : n === "it" ? Pe(e) : n === "pt" ? Fe(e) : n === "zh" ? Ie(e) : n === "ja" ? Le(e) : n === "ko" ? Re(e) : ze(e);
}), Ve = () => "New Benchmark Idea", He = () => "Idée de benchmark", Ue = () => "Nueva idea de benchmark", We = () => "Neue Benchmark-Idee", Ge = () => "Nuova idea di benchmark", Ke = () => "Nova ideia de benchmark", qe = () => "新基准测试想法", Je = () => "新しいベンチマークのアイデア", Ye = () => "New Benchmark Idea", Xe = () => "Идея нового бенчмарка", Ze = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Ve(e) : n === "fr" ? He(e) : n === "es" ? Ue(e) : n === "de" ? We(e) : n === "it" ? Ge(e) : n === "pt" ? Ke(e) : n === "zh" ? qe(e) : n === "ja" ? Je(e) : n === "ko" ? Ye(e) : Xe(e);
}), Qe = () => "Methodology Question", $e = () => "Question de méthodologie", et = () => "Pregunta sobre la metodología", tt = () => "Frage zur Methodik", nt = () => "Domanda sulla metodologia", rt = () => "Pergunta sobre metodologia", it = () => "方法论问题", at = () => "手法に関する質問", ot = () => "Methodology Question", st = () => "Вопрос по методологии", ct = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Qe(e) : n === "fr" ? $e(e) : n === "es" ? et(e) : n === "de" ? tt(e) : n === "it" ? nt(e) : n === "pt" ? rt(e) : n === "zh" ? it(e) : n === "ja" ? at(e) : n === "ko" ? ot(e) : st(e);
}), lt = () => "Contribution", ut = () => "Contribution", dt = () => "Contribución", ft = () => "Beitrag", pt = () => "Contributo", mt = () => "Contribuição", ht = () => "贡献", gt = () => "貢献", _t = () => "Contribution", vt = () => "Вклад в проект", yt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? lt(e) : n === "fr" ? ut(e) : n === "es" ? dt(e) : n === "de" ? ft(e) : n === "it" ? pt(e) : n === "pt" ? mt(e) : n === "zh" ? ht(e) : n === "ja" ? gt(e) : n === "ko" ? _t(e) : vt(e);
}), bt = () => "Other", xt = () => "Autre", St = () => "Otro", Ct = () => "Sonstiges", wt = () => "Altro", Tt = () => "Outro", Et = () => "其他", Dt = () => "その他", Ot = () => "Other", kt = () => "Другое", At = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? bt(e) : n === "fr" ? xt(e) : n === "es" ? St(e) : n === "de" ? Ct(e) : n === "it" ? wt(e) : n === "pt" ? Tt(e) : n === "zh" ? Et(e) : n === "ja" ? Dt(e) : n === "ko" ? Ot(e) : kt(e);
}), jt = () => "Message", Mt = () => "Message", Nt = () => "Mensaje", Pt = () => "Nachricht", Ft = () => "Messaggio", It = () => "Mensagem", Lt = () => "消息", Rt = () => "メッセージ", zt = () => "Message", Bt = () => "Сообщение", Vt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? jt(e) : n === "fr" ? Mt(e) : n === "es" ? Nt(e) : n === "de" ? Pt(e) : n === "it" ? Ft(e) : n === "pt" ? It(e) : n === "zh" ? Lt(e) : n === "ja" ? Rt(e) : n === "ko" ? zt(e) : Bt(e);
}), Ht = () => "Describe your question or idea...", Ut = () => "Décrivez votre question ou idée…", Wt = () => "Describe tu pregunta o idea...", Gt = () => "Beschreiben Sie Ihre Frage oder Idee...", Kt = () => "Descrivi la tua domanda o idea...", qt = () => "Descreva sua pergunta ou ideia...", $ = () => "描述您的问题或想法...", Jt = () => "ご質問やアイデアを記入してください...", Yt = () => "Describe your question or idea...", Xt = () => "Опишите ваш вопрос или идею...", Zt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Ht(e) : n === "fr" ? Ut(e) : n === "es" ? Wt(e) : n === "de" ? Gt(e) : n === "it" ? Kt(e) : n === "pt" ? qt(e) : n === "zh" ? $(e) : n === "ja" ? Jt(e) : n === "ko" ? Yt(e) : Xt(e);
}), Qt = () => "Send Message", $t = () => "Envoyer", en = () => "Enviar mensaje", tn = () => "Nachricht senden", nn = () => "Invia messaggio", rn = () => "Enviar mensagem", an = () => "发送消息", on = () => "メッセージを送信", sn = () => "Send Message", cn = () => "Отправить сообщение", ln = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Qt(e) : n === "fr" ? $t(e) : n === "es" ? en(e) : n === "de" ? tn(e) : n === "it" ? nn(e) : n === "pt" ? rn(e) : n === "zh" ? an(e) : n === "ja" ? on(e) : n === "ko" ? sn(e) : cn(e);
}), un = r("<form class=space-y-6><div class=\"grid gap-4 md:grid-cols-2\"><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><input class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><input type=email class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></div></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"><option></option><option></option><option></option><option></option><option></option></select></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><textarea rows=5 class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></textarea></div><button type=submit class=\"rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function dn() {
	let r = i(), a = i(), o = i(), s = i();
	return (() => {
		var i = un(), c = i.firstChild, l = c.firstChild, u = l.firstChild, d = u.nextSibling, f = l.nextSibling.firstChild, p = f.nextSibling, m = c.nextSibling, h = m.firstChild, g = h.nextSibling, _ = g.firstChild, v = _.nextSibling, y = v.nextSibling, b = y.nextSibling, x = b.nextSibling, S = m.nextSibling, C = S.firstChild, w = C.nextSibling, T = S.nextSibling;
		return n(u, "for", r), t(u, () => I()), n(d, "id", r), n(f, "for", a), t(f, () => se()), n(p, "id", a), n(h, "for", o), t(h, () => ke()), n(g, "id", o), t(_, () => Be()), t(v, () => Ze()), t(y, () => ct()), t(b, () => yt()), t(x, () => At()), n(C, "for", s), t(C, () => Vt()), n(w, "id", s), t(T, () => ln()), e((e) => {
			var t = q(), r = ve(), i = Zt();
			return t !== e.e && n(d, "placeholder", e.e = t), r !== e.t && n(p, "placeholder", e.t = r), i !== e.a && n(w, "placeholder", e.a = i), e;
		}, {
			e: void 0,
			t: void 0,
			a: void 0
		}), i;
	})();
}
export { dn as default };
