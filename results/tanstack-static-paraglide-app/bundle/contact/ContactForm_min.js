import { useId as e } from "react";
import { Fragment as t, jsx as n, jsxs as r } from "react/jsx-runtime";
var i = {}, a = [
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
], o = "PARAGLIDE_LOCALE", ee = 3456e4, s = [
	"cookie",
	"globalVariable",
	"baseLocale"
], c = [], l = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var u, d = !1, f = () => {
	let e = s;
	!l && typeof window < "u" && window.location?.href && (e = O(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ie();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (A(t) && k.has(t)) {
			let e = k.get(t);
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
var p = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = f();
	} catch {}
	let i = [], a = s;
	!l && typeof window < "u" && window.location?.href && (a = O(window.location.href));
	for (let t of a) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (A(t) && k.has(t)) {
		let n = k.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let c = () => {
		!l && n.reload && window.location && e !== r && p(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		c();
	});
	c();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function h(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function g(e) {
	let t = h(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function _(e) {
	return e;
}
function v(e, t) {
	return e.exec(t.href);
}
var y = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function re() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function ie() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = h(e), re(), S;
}
function ae(e) {
	return w(e);
}
function w(e) {
	let t = _(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var T, E;
function D(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (T === t) return E;
	let n = _(new URL(t, "http://example.com")), r = ae(n), a = r.href === n.href ? [n] : [n, r], o;
	for (let e of a) {
		for (let t of c) if (v(new i(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return T = t, E = o, o;
}
function O(e) {
	let t = D(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var k = /* @__PURE__ */ new Map();
function A(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var j = () => "Bug Report", M = () => "Rapport de bug", N = () => "Informe de bug", P = () => "Fehlerbericht", F = () => "Segnalazione di bug", I = () => "Relatório de bug", L = () => "Bug 报告", R = () => "バグ報告", z = () => "버그 보고", B = () => "Отчет об ошибке", V = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? M(e) : n === "es" ? N(e) : n === "de" ? P(e) : n === "it" ? F(e) : n === "pt" ? I(e) : n === "zh" ? L(e) : n === "ja" ? R(e) : n === "ko" ? z(e) : n === "ru" ? B(e) : j(e);
}), H = () => "Contribution", U = () => "Contribution", W = () => "Contribución", G = () => "Beitrag", K = () => "Contributo", q = () => "Contribuição", J = () => "贡献", oe = () => "コントリビューション", se = () => "기여", ce = () => "Вклад", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? U(e) : n === "es" ? W(e) : n === "de" ? G(e) : n === "it" ? K(e) : n === "pt" ? q(e) : n === "zh" ? J(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : n === "ru" ? ce(e) : H(e);
}), le = () => "Describe your question or idea...", ue = () => "Décrivez votre question ou idée...", de = () => "Describe tu pregunta o idea...", fe = () => "Beschreiben Sie Ihre Frage oder Idee...", pe = () => "Descrivi la tua domanda o idea...", me = () => "Descreva sua pergunta ou ideia...", he = () => "描述您的问题或想法...", ge = () => "質問やアイデアの詳細を記入してください...", _e = () => "질문이나 아이디어를 설명해주세요...", ve = () => "Опишите ваш вопрос или идею...", ye = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ue(e) : n === "es" ? de(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : n === "ru" ? ve(e) : le(e);
}), be = () => "Message", xe = () => "Message", Se = () => "Mensaje", Ce = () => "Nachricht", we = () => "Messaggio", Te = () => "Mensagem", Ee = () => "消息", De = () => "メッセージ", Oe = () => "메시지", ke = () => "Сообщение", X = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? xe(e) : n === "es" ? Se(e) : n === "de" ? Ce(e) : n === "it" ? we(e) : n === "pt" ? Te(e) : n === "zh" ? Ee(e) : n === "ja" ? De(e) : n === "ko" ? Oe(e) : n === "ru" ? ke(e) : be(e);
}), Ae = () => "Methodology Question", je = () => "Question sur la méthodologie", Me = () => "Pregunta sobre metodología", Ne = () => "Frage zur Methodik", Pe = () => "Domanda sulla metodologia", Fe = () => "Pergunta sobre metodologia", Ie = () => "方法论问题", Le = () => "方法論に関する質問", Re = () => "방법론 질문", ze = () => "Вопрос по методологии", Be = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? je(e) : n === "es" ? Me(e) : n === "de" ? Ne(e) : n === "it" ? Pe(e) : n === "pt" ? Fe(e) : n === "zh" ? Ie(e) : n === "ja" ? Le(e) : n === "ko" ? Re(e) : n === "ru" ? ze(e) : Ae(e);
}), Ve = () => "New Benchmark Idea", He = () => "Nouvelle idée de benchmark", Ue = () => "Nueva idea de benchmark", We = () => "Neue Benchmark-Idee", Ge = () => "Nuova idea di benchmark", Ke = () => "Nova ideia de benchmark", qe = () => "新基准测试想法", Je = () => "新しいベンチマークのアイデア", Ye = () => "새로운 벤치마크 아이디어", Xe = () => "Новая идея для бенчмарка", Ze = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? He(e) : n === "es" ? Ue(e) : n === "de" ? We(e) : n === "it" ? Ge(e) : n === "pt" ? Ke(e) : n === "zh" ? qe(e) : n === "ja" ? Je(e) : n === "ko" ? Ye(e) : n === "ru" ? Xe(e) : Ve(e);
}), Qe = () => "Other", $e = () => "Autre", et = () => "Otro", tt = () => "Andere", nt = () => "Altro", rt = () => "Outro", it = () => "其他", at = () => "その他", ot = () => "기타", st = () => "Другое", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? $e(e) : n === "es" ? et(e) : n === "de" ? tt(e) : n === "it" ? nt(e) : n === "pt" ? rt(e) : n === "zh" ? it(e) : n === "ja" ? at(e) : n === "ko" ? ot(e) : n === "ru" ? st(e) : Qe(e);
}), ct = () => "Send Message", lt = () => "Envoyer le message", ut = () => "Enviar mensaje", dt = () => "Nachricht senden", ft = () => "Invia messaggio", pt = () => "Enviar mensagem", mt = () => "发送消息", ht = () => "メッセージを送信", gt = () => "메시지 보내기", _t = () => "Отправить сообщение", vt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? lt(e) : n === "es" ? ut(e) : n === "de" ? dt(e) : n === "it" ? ft(e) : n === "pt" ? pt(e) : n === "zh" ? mt(e) : n === "ja" ? ht(e) : n === "ko" ? gt(e) : n === "ru" ? _t(e) : ct(e);
}), yt = () => "Topic", bt = () => "Sujet", xt = () => "Tema", St = () => "Thema", Ct = () => "Argomento", wt = () => "Assunto", Tt = () => "主题", Et = () => "トピック", Dt = () => "주제", Ot = () => "Теما", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? bt(e) : n === "es" ? xt(e) : n === "de" ? St(e) : n === "it" ? Ct(e) : n === "pt" ? wt(e) : n === "zh" ? Tt(e) : n === "ja" ? Et(e) : n === "ko" ? Dt(e) : n === "ru" ? Ot(e) : yt(e);
}), kt = () => "Your name", At = () => "Votre nom", jt = () => "Tu nombre", Mt = () => "Ihr Name", Nt = () => "Il tuo nome", Pt = () => "Seu nome", Ft = () => "您的姓名", It = () => "お名前", Lt = () => "이름", Rt = () => "Ваше имя", zt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? At(e) : n === "es" ? jt(e) : n === "de" ? Mt(e) : n === "it" ? Nt(e) : n === "pt" ? Pt(e) : n === "zh" ? Ft(e) : n === "ja" ? It(e) : n === "ko" ? Lt(e) : n === "ru" ? Rt(e) : kt(e);
}), Bt = () => "Display Name", Vt = () => "Nom d'affichage", Ht = () => "Nombre visible", Ut = () => "Anzeigename", Wt = () => "Nome visualizzato", Gt = () => "Nome de exibição", Kt = () => "显示名称", qt = () => "表示名", $ = () => "표시 이름", Jt = () => "Отображаемое имя", Yt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Vt(e) : n === "es" ? Ht(e) : n === "de" ? Ut(e) : n === "it" ? Wt(e) : n === "pt" ? Gt(e) : n === "zh" ? Kt(e) : n === "ja" ? qt(e) : n === "ko" ? $(e) : n === "ru" ? Jt(e) : Bt(e);
}), Xt = () => "Email", Zt = () => "Email", Qt = () => "Correo electrónico", $t = () => "E-Mail", en = () => "Email", tn = () => "E-mail", nn = () => "邮件地址", rn = () => "メールアドレス", an = () => "이메일 주소", on = () => "Эл. почта", sn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Zt(e) : n === "es" ? Qt(e) : n === "de" ? $t(e) : n === "it" ? en(e) : n === "pt" ? tn(e) : n === "zh" ? nn(e) : n === "ja" ? rn(e) : n === "ko" ? an(e) : n === "ru" ? on(e) : Xt(e);
});
function cn() {
	let t = e(), i = e(), a = e(), o = e();
	return r("form", {
		className: "space-y-6",
		children: [
			r("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [r("div", { children: [n("label", {
					htmlFor: t,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: Yt()
				}), n("input", {
					id: t,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: zt()
				})] }), r("div", { children: [n("label", {
					htmlFor: i,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: sn()
				}), n("input", {
					id: i,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				})] })]
			}),
			r("div", { children: [n("label", {
				htmlFor: a,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: Q ? Q() : "Topic"
			}), r("select", {
				id: a,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					n("option", { children: V() }),
					n("option", { children: Ze() }),
					n("option", { children: Be() }),
					n("option", { children: Y ? Y() : "Contribution" }),
					n("option", { children: Z ? Z() : "Other" })
				]
			})] }),
			r("div", { children: [n("label", {
				htmlFor: o,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: X ? X() : "Message"
			}), n("textarea", {
				id: o,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: ye()
			})] }),
			n("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: vt()
			})
		]
	});
}
m("en", { reload: !1 });
function ln({ children: e }) {
	return n(t, { children: e });
}
function un() {
	return n(ln, { children: n(cn, {}) });
}
export { un as default };
