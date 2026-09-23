import { useId as e } from "react";
import { Fragment as t, jsxDEV as n } from "react/jsx-dev-runtime";
var r = {}, i = [
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
], a = "PARAGLIDE_LOCALE", o = 3456e4, s = [
	"cookie",
	"globalVariable",
	"baseLocale"
], c = [], l = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var u, d = !1, f = () => {
	let e = s;
	!l && typeof window < "u" && window.location?.href && (e = T(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, p(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ae();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (D(t) && E.has(t)) {
			let e = E.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ne(t);
			}
		}
		let e = h(n);
		if (e) return e;
	}
}
var te = (e) => {
	e ? window.location.href = e : window.location.reload();
}, p = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = f();
	} catch {}
	let i = [], c = s;
	!l && typeof window < "u" && window.location?.href && (c = T(window.location.href));
	for (let t of c) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t, x();
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
	let d = () => {
		!l && n.reload && window.location && e !== r && te(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		d();
	});
	d();
}, m = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function h(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function ne(e) {
	let t = h(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function g(e) {
	return e;
}
function re(e, t) {
	return e.exec(t.href);
}
var _ = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), v = RegExp(`(?:^|;\\s*)${_}=([^;]*)`), y = Symbol(), b = y;
function x() {
	b = y;
}
function ie() {
	typeof queueMicrotask == "function" ? queueMicrotask(x) : Promise.resolve().then(x);
}
function ae() {
	if (typeof document > "u") return;
	if (b !== y) return b;
	let e = document.cookie.match(v)?.[1];
	return b = h(e), ie(), b;
}
function oe(e) {
	return se(e);
}
function se(e) {
	let t = g(typeof e == "string" ? new URL(e, m()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), g(t);
}
var S, C;
function w(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (S === t) return C;
	let n = g(new URL(t, "http://example.com")), i = oe(n), a = i.href === n.href ? [n] : [n, i], o;
	for (let e of a) {
		for (let t of c) if (re(new r(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return S = t, C = o, o;
}
function T(e) {
	let t = w(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var E = /* @__PURE__ */ new Map();
function D(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var O = () => "Bug Report", k = () => "Contribution", A = () => "Describe your question or idea...", j = () => "Message", M = () => "Methodology Question", N = () => "New Benchmark Idea", P = () => "Other", F = () => "Send Message", I = () => "Topic", L = () => "Your name", R = () => "Display Name", z = () => "Email", B = () => "Rapport de bug", V = () => "Contribution", H = () => "Décrivez votre question ou idée...", U = () => "Message", W = () => "Question sur la méthodologie", G = () => "Nouvelle idée de benchmark", K = () => "Autre", ce = () => "Envoyer le message", le = () => "Sujet", ue = () => "Votre nom", de = () => "Nom d'affichage", fe = () => "Email", pe = () => "Informe de bug", me = () => "Contribución", he = () => "Describe tu pregunta o idea...", ge = () => "Mensaje", _e = () => "Pregunta sobre metodología", ve = () => "Nueva idea de benchmark", ye = () => "Otro", be = () => "Enviar mensaje", xe = () => "Tema", Se = () => "Tu nombre", Ce = () => "Nombre visible", we = () => "Correo electrónico", Te = () => "Fehlerbericht", Ee = () => "Beitrag", De = () => "Beschreiben Sie Ihre Frage oder Idee...", Oe = () => "Nachricht", ke = () => "Frage zur Methodik", Ae = () => "Neue Benchmark-Idee", je = () => "Andere", Me = () => "Nachricht senden", Ne = () => "Thema", Pe = () => "Ihr Name", Fe = () => "Anzeigename", Ie = () => "E-Mail", Le = () => "Segnalazione di bug", Re = () => "Contributo", ze = () => "Descrivi la tua domanda o idea...", Be = () => "Messaggio", Ve = () => "Domanda sulla metodologia", He = () => "Nuova idea di benchmark", Ue = () => "Altro", We = () => "Invia messaggio", Ge = () => "Argomento", Ke = () => "Il tuo nome", qe = () => "Nome visualizzato", Je = () => "Email", Ye = () => "Relatório de bug", Xe = () => "Contribuição", Ze = () => "Descreva sua pergunta ou ideia...", Qe = () => "Mensagem", $e = () => "Pergunta sobre metodologia", et = () => "Nova ideia de benchmark", tt = () => "Outro", nt = () => "Enviar mensagem", rt = () => "Assunto", it = () => "Seu nome", at = () => "Nome de exibição", ot = () => "E-mail", st = () => "Bug 报告", ct = () => "贡献", lt = () => "描述您的问题或想法...", ut = () => "消息", dt = () => "方法论问题", ft = () => "新基准测试想法", pt = () => "其他", mt = () => "发送消息", ht = () => "主题", gt = () => "您的姓名", _t = () => "显示名称", vt = () => "邮件地址", yt = () => "バグ報告", bt = () => "コントリビューション", xt = () => "質問やアイデアの詳細を記入してください...", St = () => "メッセージ", Ct = () => "方法論に関する質問", wt = () => "新しいベンチマークのアイデア", Tt = () => "その他", Et = () => "メッセージを送信", Dt = () => "トピック", Ot = () => "お名前", kt = () => "表示名", At = () => "メールアドレス", jt = () => "버그 보고", Mt = () => "기여", Nt = () => "질문이나 아이디어를 설명해주세요...", Pt = () => "메시지", Ft = () => "방법론 질문", It = () => "새로운 벤치마크 아이디어", Lt = () => "기타", Rt = () => "메시지 보내기", zt = () => "주제", Bt = () => "이름", Vt = () => "표시 이름", Ht = () => "이메일 주소", Ut = () => "Отчет об ошибке", Wt = () => "Вклад", Gt = () => "Опишите ваш вопрос или идею...", Kt = () => "Сообщение", qt = () => "Вопрос по методологии", Jt = () => "Новая идея для бенчмарка", Yt = () => "Другое", Xt = () => "Отправить сообщение", Zt = () => "Теما", Qt = () => "Ваше имя", $t = () => "Отображаемое имя", q = () => "Эл. почта", en = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? B(e) : n === "es" ? pe(e) : n === "de" ? Te(e) : n === "it" ? Le(e) : n === "pt" ? Ye(e) : n === "zh" ? st(e) : n === "ja" ? yt(e) : n === "ko" ? jt(e) : n === "ru" ? Ut(e) : O(e);
}), J = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? V(e) : n === "es" ? me(e) : n === "de" ? Ee(e) : n === "it" ? Re(e) : n === "pt" ? Xe(e) : n === "zh" ? ct(e) : n === "ja" ? bt(e) : n === "ko" ? Mt(e) : n === "ru" ? Wt(e) : k(e);
}), tn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? H(e) : n === "es" ? he(e) : n === "de" ? De(e) : n === "it" ? ze(e) : n === "pt" ? Ze(e) : n === "zh" ? lt(e) : n === "ja" ? xt(e) : n === "ko" ? Nt(e) : n === "ru" ? Gt(e) : A(e);
}), Y = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? U(e) : n === "es" ? ge(e) : n === "de" ? Oe(e) : n === "it" ? Be(e) : n === "pt" ? Qe(e) : n === "zh" ? ut(e) : n === "ja" ? St(e) : n === "ko" ? Pt(e) : n === "ru" ? Kt(e) : j(e);
}), nn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? W(e) : n === "es" ? _e(e) : n === "de" ? ke(e) : n === "it" ? Ve(e) : n === "pt" ? $e(e) : n === "zh" ? dt(e) : n === "ja" ? Ct(e) : n === "ko" ? Ft(e) : n === "ru" ? qt(e) : M(e);
}), rn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? G(e) : n === "es" ? ve(e) : n === "de" ? Ae(e) : n === "it" ? He(e) : n === "pt" ? et(e) : n === "zh" ? ft(e) : n === "ja" ? wt(e) : n === "ko" ? It(e) : n === "ru" ? Jt(e) : N(e);
}), X = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? K(e) : n === "es" ? ye(e) : n === "de" ? je(e) : n === "it" ? Ue(e) : n === "pt" ? tt(e) : n === "zh" ? pt(e) : n === "ja" ? Tt(e) : n === "ko" ? Lt(e) : n === "ru" ? Yt(e) : P(e);
}), an = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ce(e) : n === "es" ? be(e) : n === "de" ? Me(e) : n === "it" ? We(e) : n === "pt" ? nt(e) : n === "zh" ? mt(e) : n === "ja" ? Et(e) : n === "ko" ? Rt(e) : n === "ru" ? Xt(e) : F(e);
}), Z = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? le(e) : n === "es" ? xe(e) : n === "de" ? Ne(e) : n === "it" ? Ge(e) : n === "pt" ? rt(e) : n === "zh" ? ht(e) : n === "ja" ? Dt(e) : n === "ko" ? zt(e) : n === "ru" ? Zt(e) : I(e);
}), on = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ue(e) : n === "es" ? Se(e) : n === "de" ? Pe(e) : n === "it" ? Ke(e) : n === "pt" ? it(e) : n === "zh" ? gt(e) : n === "ja" ? Ot(e) : n === "ko" ? Bt(e) : n === "ru" ? Qt(e) : L(e);
}), sn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? de(e) : n === "es" ? Ce(e) : n === "de" ? Fe(e) : n === "it" ? qe(e) : n === "pt" ? at(e) : n === "zh" ? _t(e) : n === "ja" ? kt(e) : n === "ko" ? Vt(e) : n === "ru" ? $t(e) : R(e);
}), cn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? fe(e) : n === "es" ? we(e) : n === "de" ? Ie(e) : n === "it" ? Je(e) : n === "pt" ? ot(e) : n === "zh" ? vt(e) : n === "ja" ? At(e) : n === "ko" ? Ht(e) : n === "ru" ? q(e) : z(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/contact/ContactForm.tsx";
function ln() {
	let t = e(), r = e(), i = e(), a = e();
	return n("form", {
		className: "space-y-6",
		children: [
			n("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [n("div", { children: [n("label", {
					htmlFor: t,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: sn()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 14,
					columnNumber: 11
				}, this), n("input", {
					id: t,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: on()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 20,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: Q,
					lineNumber: 13,
					columnNumber: 9
				}, this), n("div", { children: [n("label", {
					htmlFor: r,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: cn()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 27,
					columnNumber: 11
				}, this), n("input", {
					id: r,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 33,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: Q,
					lineNumber: 26,
					columnNumber: 9
				}, this)]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 12,
				columnNumber: 7
			}, this),
			n("div", { children: [n("label", {
				htmlFor: i,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: Z ? Z() : "Topic"
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 42,
				columnNumber: 9
			}, this), n("select", {
				id: i,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					n("option", { children: en() }, void 0, !1, {
						fileName: Q,
						lineNumber: 52,
						columnNumber: 11
					}, this),
					n("option", { children: rn() }, void 0, !1, {
						fileName: Q,
						lineNumber: 53,
						columnNumber: 11
					}, this),
					n("option", { children: nn() }, void 0, !1, {
						fileName: Q,
						lineNumber: 54,
						columnNumber: 11
					}, this),
					n("option", { children: J ? J() : "Contribution" }, void 0, !1, {
						fileName: Q,
						lineNumber: 55,
						columnNumber: 11
					}, this),
					n("option", { children: X ? X() : "Other" }, void 0, !1, {
						fileName: Q,
						lineNumber: 60,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 48,
				columnNumber: 9
			}, this)] }, void 0, !0, {
				fileName: Q,
				lineNumber: 41,
				columnNumber: 7
			}, this),
			n("div", { children: [n("label", {
				htmlFor: a,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: Y ? Y() : "Message"
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 66,
				columnNumber: 9
			}, this), n("textarea", {
				id: a,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: tn()
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 72,
				columnNumber: 9
			}, this)] }, void 0, !0, {
				fileName: Q,
				lineNumber: 65,
				columnNumber: 7
			}, this),
			n("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: an()
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 79,
				columnNumber: 7
			}, this)
		]
	}, void 0, !0, {
		fileName: Q,
		lineNumber: 11,
		columnNumber: 5
	}, this);
}
var un = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
p("en", { reload: !1 });
function dn({ children: e }) {
	return n(t, { children: e }, void 0, !1, {
		fileName: un,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/contact/ContactForm.wrapper.tsx";
function fn() {
	return n(dn, { children: n(ln, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { fn as default };
