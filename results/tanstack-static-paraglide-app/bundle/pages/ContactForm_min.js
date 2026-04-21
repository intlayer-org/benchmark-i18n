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
], c = [], l, u;
function te(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (l === t) return u;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of c) if (new i(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return l = t, u = r, r;
}
function d(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var f = void 0;
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	if (f) {
		let e = f?.getStore()?.locale;
		if (e) return e;
	}
	let e = s;
	typeof window < "u" && window.location?.href && (e = d(window.location.href));
	let t = ne(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, g(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ne(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ae();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (y(t) && v.has(t)) {
			let e = v.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ie(t);
			}
		}
		let e = _(n);
		if (e) return e;
	}
}
var re = (e) => {
	e ? window.location.href = e : window.location.reload();
}, g = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = h();
	} catch {}
	let i = [], a = s;
	typeof window < "u" && window.location?.href && (a = d(window.location.href));
	for (let t of a) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (y(t) && v.has(t)) {
		let n = v.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let c = () => {
		n.reload && window.location && e !== r && re(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		c();
	});
	c();
};
function _(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function ie(e) {
	let t = _(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function ae() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${o}=([^;]+)`))?.[2];
	return _(e);
}
var v = /* @__PURE__ */ new Map();
function y(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var b = () => "Your name", x = () => "Votre nom", S = () => "Tu nombre", C = () => "Ihr Name", w = () => "Il tuo nome", T = () => "Seu nome", E = () => "您的姓名", D = () => "お名前", O = () => "이름", k = () => "Ваше имя", A = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? b(e) : n === "fr" ? x(e) : n === "es" ? S(e) : n === "de" ? C(e) : n === "it" ? w(e) : n === "pt" ? T(e) : n === "zh" ? E(e) : n === "ja" ? D(e) : n === "ko" ? O(e) : k(e);
}), j = () => "Bug Report", M = () => "Rapport de bug", N = () => "Informe de bug", P = () => "Fehlerbericht", F = () => "Segnalazione di bug", I = () => "Relatório de bug", L = () => "Bug 报告", R = () => "バグ報告", z = () => "버그 보고", B = () => "Отчет об ошибке", V = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? j(e) : n === "fr" ? M(e) : n === "es" ? N(e) : n === "de" ? P(e) : n === "it" ? F(e) : n === "pt" ? I(e) : n === "zh" ? L(e) : n === "ja" ? R(e) : n === "ko" ? z(e) : B(e);
}), H = () => "New Benchmark Idea", U = () => "Nouvelle idée de benchmark", W = () => "Nueva idea de benchmark", G = () => "Neue Benchmark-Idee", K = () => "Nuova idea di benchmark", q = () => "Nova ideia de benchmark", J = () => "新基准测试想法", oe = () => "新しいベンチマークのアイデア", se = () => "새로운 벤치마크 아이디어", ce = () => "Новая идея для бенчмарка", le = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? H(e) : n === "fr" ? U(e) : n === "es" ? W(e) : n === "de" ? G(e) : n === "it" ? K(e) : n === "pt" ? q(e) : n === "zh" ? J(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : ce(e);
}), ue = () => "Methodology Question", de = () => "Question sur la méthodologie", fe = () => "Pregunta sobre metodología", pe = () => "Frage zur Methodik", me = () => "Domanda sulla metodologia", he = () => "Pergunta sobre metodologia", ge = () => "方法论问题", _e = () => "方法論に関する質問", ve = () => "방법론 질문", ye = () => "Вопрос по методологии", be = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ue(e) : n === "fr" ? de(e) : n === "es" ? fe(e) : n === "de" ? pe(e) : n === "it" ? me(e) : n === "pt" ? he(e) : n === "zh" ? ge(e) : n === "ja" ? _e(e) : n === "ko" ? ve(e) : ye(e);
}), xe = () => "Describe your question or idea...", Se = () => "Décrivez votre question ou idée...", Ce = () => "Describe tu pregunta o idea...", we = () => "Beschreiben Sie Ihre Frage oder Idee...", Te = () => "Descrivi la tua domanda o idea...", Ee = () => "Descreva sua pergunta ou ideia...", De = () => "描述您的问题或想法...", Oe = () => "質問やアイデアの詳細を記入してください...", ke = () => "질문이나 아이디어를 설명해주세요...", Ae = () => "Опишите ваш вопрос или идею...", je = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? xe(e) : n === "fr" ? Se(e) : n === "es" ? Ce(e) : n === "de" ? we(e) : n === "it" ? Te(e) : n === "pt" ? Ee(e) : n === "zh" ? De(e) : n === "ja" ? Oe(e) : n === "ko" ? ke(e) : Ae(e);
}), Me = () => "Send Message", Ne = () => "Envoyer le message", Pe = () => "Enviar mensaje", Fe = () => "Nachricht senden", Ie = () => "Invia messaggio", Le = () => "Enviar mensagem", Re = () => "发送消息", ze = () => "メッセージを送信", Be = () => "메시지 보내기", Ve = () => "Отправить сообщение", He = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Me(e) : n === "fr" ? Ne(e) : n === "es" ? Pe(e) : n === "de" ? Fe(e) : n === "it" ? Ie(e) : n === "pt" ? Le(e) : n === "zh" ? Re(e) : n === "ja" ? ze(e) : n === "ko" ? Be(e) : Ve(e);
}), Ue = () => "Topic", We = () => "Sujet", Ge = () => "Tema", Ke = () => "Thema", qe = () => "Argomento", Je = () => "Assunto", Ye = () => "主题", Xe = () => "トピック", Ze = () => "주제", Qe = () => "Теما", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Ue(e) : n === "fr" ? We(e) : n === "es" ? Ge(e) : n === "de" ? Ke(e) : n === "it" ? qe(e) : n === "pt" ? Je(e) : n === "zh" ? Ye(e) : n === "ja" ? Xe(e) : n === "ko" ? Ze(e) : Qe(e);
}), $e = () => "Contribution", et = () => "Contribution", tt = () => "Contribución", nt = () => "Beitrag", rt = () => "Contributo", it = () => "Contribuição", at = () => "贡献", ot = () => "コントリビューション", st = () => "기여", ct = () => "Вклад", X = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? $e(e) : n === "fr" ? et(e) : n === "es" ? tt(e) : n === "de" ? nt(e) : n === "it" ? rt(e) : n === "pt" ? it(e) : n === "zh" ? at(e) : n === "ja" ? ot(e) : n === "ko" ? st(e) : ct(e);
}), lt = () => "Other", ut = () => "Autre", dt = () => "Otro", ft = () => "Andere", pt = () => "Altro", mt = () => "Outro", ht = () => "其他", gt = () => "その他", _t = () => "기타", vt = () => "Другое", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? lt(e) : n === "fr" ? ut(e) : n === "es" ? dt(e) : n === "de" ? ft(e) : n === "it" ? pt(e) : n === "pt" ? mt(e) : n === "zh" ? ht(e) : n === "ja" ? gt(e) : n === "ko" ? _t(e) : vt(e);
}), yt = () => "Message", bt = () => "Message", xt = () => "Mensaje", St = () => "Nachricht", Ct = () => "Messaggio", wt = () => "Mensagem", Tt = () => "消息", Et = () => "メッセージ", Dt = () => "메시지", Ot = () => "Сообщение", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? yt(e) : n === "fr" ? bt(e) : n === "es" ? xt(e) : n === "de" ? St(e) : n === "it" ? Ct(e) : n === "pt" ? wt(e) : n === "zh" ? Tt(e) : n === "ja" ? Et(e) : n === "ko" ? Dt(e) : Ot(e);
}), kt = () => "Display Name", At = () => "Nom d'affichage", jt = () => "Nombre visible", Mt = () => "Anzeigename", Nt = () => "Nome visualizzato", Pt = () => "Nome de exibição", Ft = () => "显示名称", It = () => "表示名", Lt = () => "표시 이름", Rt = () => "Отображаемое имя", zt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? kt(e) : n === "fr" ? At(e) : n === "es" ? jt(e) : n === "de" ? Mt(e) : n === "it" ? Nt(e) : n === "pt" ? Pt(e) : n === "zh" ? Ft(e) : n === "ja" ? It(e) : n === "ko" ? Lt(e) : Rt(e);
}), Bt = () => "Email", $ = () => "Email", Vt = () => "Correo electrónico", Ht = () => "E-Mail", Ut = () => "Email", Wt = () => "E-mail", Gt = () => "邮件地址", Kt = () => "メールアドレス", qt = () => "이메일 주소", Jt = () => "Эл. почта", Yt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Bt(e) : n === "fr" ? $(e) : n === "es" ? Vt(e) : n === "de" ? Ht(e) : n === "it" ? Ut(e) : n === "pt" ? Wt(e) : n === "zh" ? Gt(e) : n === "ja" ? Kt(e) : n === "ko" ? qt(e) : Jt(e);
});
function Xt() {
	let t = e(), i = e(), a = e(), o = e();
	return r("form", {
		className: "space-y-6",
		children: [
			r("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [r("div", { children: [n("label", {
					htmlFor: t,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: zt()
				}), n("input", {
					id: t,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: A()
				})] }), r("div", { children: [n("label", {
					htmlFor: i,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: Yt()
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
				children: Y ? Y() : "Topic"
			}), r("select", {
				id: a,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					n("option", { children: V() }),
					n("option", { children: le() }),
					n("option", { children: be() }),
					n("option", { children: X ? X() : "Contribution" }),
					n("option", { children: Z ? Z() : "Other" })
				]
			})] }),
			r("div", { children: [n("label", {
				htmlFor: o,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: Q ? Q() : "Message"
			}), n("textarea", {
				id: o,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: je()
			})] }),
			n("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: He()
			})
		]
	});
}
g("en", { reload: !1 });
function Zt({ children: e }) {
	return n(t, { children: e });
}
function Qt() {
	return n(Zt, { children: n(Xt, {}) });
}
export { Qt as default };
