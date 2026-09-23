import { useEffect as e, useId as t, useLayoutEffect as n, useState as r } from "react";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
import { useParams as ee } from "next/navigation";
var s = {}, c = [
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
], l = "PARAGLIDE_LOCALE", u = 3456e4, d = [
	"cookie",
	"globalVariable",
	"baseLocale"
], f = [], p = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var m, h = !1, g = () => {
	let e = d;
	!p && typeof window < "u" && window.location?.href && (e = M(window.location.href));
	let t = _(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return h || (m = t, h = !0, v(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function _(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ae();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && m !== void 0) n = m;
		else if (P(t) && N.has(t)) {
			let e = N.get(t);
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
var te = (e) => {
	e ? window.location.href = e : window.location.reload();
}, v = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = g();
	} catch {}
	let i = [], a = d;
	!p && typeof window < "u" && window.location?.href && (a = M(window.location.href));
	for (let t of a) if (t === "globalVariable") m = e;
	else if (t === "cookie") {
		if (p || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${u}`;
		document.cookie = t, E();
	} else if (t === "baseLocale") continue;
	else if (P(t) && N.has(t)) {
		let n = N.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!p && n.reload && window.location && e !== r && te(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function b(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function x(e) {
	return e;
}
function S(e, t) {
	return e.exec(t.href);
}
var C = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), re = RegExp(`(?:^|;\\s*)${C}=([^;]*)`), w = Symbol(), T = w;
function E() {
	T = w;
}
function ie() {
	typeof queueMicrotask == "function" ? queueMicrotask(E) : Promise.resolve().then(E);
}
function ae() {
	if (typeof document > "u") return;
	if (T !== w) return T;
	let e = document.cookie.match(re)?.[1];
	return T = y(e), ie(), T;
}
function D(e) {
	return O(e);
}
function O(e) {
	let t = x(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && y(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), x(t);
}
var k, A;
function j(e) {
	if (f.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (k === t) return A;
	let n = x(new URL(t, "http://example.com")), r = D(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of f) if (S(new s(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return k = t, A = a, a;
}
function M(e) {
	let t = j(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : d;
}
var N = /* @__PURE__ */ new Map();
function P(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var F = () => "Bug Report", I = () => "Rapport de bug", L = () => "Informe de bug", R = () => "Fehlerbericht", z = () => "Segnalazione di bug", B = () => "Relatório de bug", V = () => "Bug 报告", H = () => "バグ報告", U = () => "버그 보고", W = () => "Отчет об ошибке", G = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : n === "ru" ? W(e) : F(e);
}), K = () => "Contribution", q = () => "Contribution", J = () => "Contribución", oe = () => "Beitrag", se = () => "Contributo", ce = () => "Contribuição", le = () => "贡献", ue = () => "コントリビューション", de = () => "기여", fe = () => "Вклад", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? oe(e) : n === "it" ? se(e) : n === "pt" ? ce(e) : n === "zh" ? le(e) : n === "ja" ? ue(e) : n === "ko" ? de(e) : n === "ru" ? fe(e) : K(e);
}), pe = () => "Describe your question or idea...", me = () => "Décrivez votre question ou idée...", he = () => "Describe tu pregunta o idea...", ge = () => "Beschreiben Sie Ihre Frage oder Idee...", _e = () => "Descrivi la tua domanda o idea...", ve = () => "Descreva sua pergunta ou ideia...", ye = () => "描述您的问题或想法...", be = () => "質問やアイデアの詳細を記入してください...", xe = () => "질문이나 아이디어를 설명해주세요...", Se = () => "Опишите ваш вопрос или идею...", Ce = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? me(e) : n === "es" ? he(e) : n === "de" ? ge(e) : n === "it" ? _e(e) : n === "pt" ? ve(e) : n === "zh" ? ye(e) : n === "ja" ? be(e) : n === "ko" ? xe(e) : n === "ru" ? Se(e) : pe(e);
}), we = () => "Message", Te = () => "Message", Ee = () => "Mensaje", De = () => "Nachricht", Oe = () => "Messaggio", ke = () => "Mensagem", Ae = () => "消息", je = () => "メッセージ", Me = () => "메시지", Ne = () => "Сообщение", X = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Te(e) : n === "es" ? Ee(e) : n === "de" ? De(e) : n === "it" ? Oe(e) : n === "pt" ? ke(e) : n === "zh" ? Ae(e) : n === "ja" ? je(e) : n === "ko" ? Me(e) : n === "ru" ? Ne(e) : we(e);
}), Pe = () => "Methodology Question", Fe = () => "Question sur la méthodologie", Ie = () => "Pregunta sobre metodología", Le = () => "Frage zur Methodik", Re = () => "Domanda sulla metodologia", ze = () => "Pergunta sobre metodologia", Be = () => "方法论问题", Ve = () => "方法論に関する質問", He = () => "방법론 질문", Ue = () => "Вопрос по методологии", We = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Fe(e) : n === "es" ? Ie(e) : n === "de" ? Le(e) : n === "it" ? Re(e) : n === "pt" ? ze(e) : n === "zh" ? Be(e) : n === "ja" ? Ve(e) : n === "ko" ? He(e) : n === "ru" ? Ue(e) : Pe(e);
}), Ge = () => "New Benchmark Idea", Ke = () => "Nouvelle idée de benchmark", qe = () => "Nueva idea de benchmark", Je = () => "Neue Benchmark-Idee", Ye = () => "Nuova idea di benchmark", Xe = () => "Nova ideia de benchmark", Ze = () => "新基准测试想法", Qe = () => "新しいベンチマークのアイデア", $e = () => "새로운 벤치마크 아이디어", et = () => "Новая идея для бенчмарка", tt = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Ke(e) : n === "es" ? qe(e) : n === "de" ? Je(e) : n === "it" ? Ye(e) : n === "pt" ? Xe(e) : n === "zh" ? Ze(e) : n === "ja" ? Qe(e) : n === "ko" ? $e(e) : n === "ru" ? et(e) : Ge(e);
}), nt = () => "Other", rt = () => "Autre", it = () => "Otro", at = () => "Andere", ot = () => "Altro", st = () => "Outro", ct = () => "其他", lt = () => "その他", ut = () => "기타", dt = () => "Другое", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? rt(e) : n === "es" ? it(e) : n === "de" ? at(e) : n === "it" ? ot(e) : n === "pt" ? st(e) : n === "zh" ? ct(e) : n === "ja" ? lt(e) : n === "ko" ? ut(e) : n === "ru" ? dt(e) : nt(e);
}), ft = () => "Send Message", pt = () => "Envoyer le message", mt = () => "Enviar mensaje", ht = () => "Nachricht senden", gt = () => "Invia messaggio", _t = () => "Enviar mensagem", vt = () => "发送消息", yt = () => "メッセージを送信", bt = () => "메시지 보내기", xt = () => "Отправить сообщение", St = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? pt(e) : n === "es" ? mt(e) : n === "de" ? ht(e) : n === "it" ? gt(e) : n === "pt" ? _t(e) : n === "zh" ? vt(e) : n === "ja" ? yt(e) : n === "ko" ? bt(e) : n === "ru" ? xt(e) : ft(e);
}), Ct = () => "Topic", wt = () => "Sujet", Tt = () => "Tema", Et = () => "Thema", Dt = () => "Argomento", Ot = () => "Assunto", kt = () => "主题", At = () => "トピック", jt = () => "주제", Mt = () => "Теما", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? wt(e) : n === "es" ? Tt(e) : n === "de" ? Et(e) : n === "it" ? Dt(e) : n === "pt" ? Ot(e) : n === "zh" ? kt(e) : n === "ja" ? At(e) : n === "ko" ? jt(e) : n === "ru" ? Mt(e) : Ct(e);
}), Nt = () => "Your name", Pt = () => "Votre nom", Ft = () => "Tu nombre", It = () => "Ihr Name", Lt = () => "Il tuo nome", Rt = () => "Seu nome", zt = () => "您的姓名", Bt = () => "お名前", Vt = () => "이름", Ht = () => "Ваше имя", Ut = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Pt(e) : n === "es" ? Ft(e) : n === "de" ? It(e) : n === "it" ? Lt(e) : n === "pt" ? Rt(e) : n === "zh" ? zt(e) : n === "ja" ? Bt(e) : n === "ko" ? Vt(e) : n === "ru" ? Ht(e) : Nt(e);
}), Wt = () => "Display Name", Gt = () => "Nom d'affichage", Kt = () => "Nombre visible", qt = () => "Anzeigename", Jt = () => "Nome visualizzato", Yt = () => "Nome de exibição", Xt = () => "显示名称", Zt = () => "表示名", Qt = () => "표시 이름", $t = () => "Отображаемое имя", en = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Gt(e) : n === "es" ? Kt(e) : n === "de" ? qt(e) : n === "it" ? Jt(e) : n === "pt" ? Yt(e) : n === "zh" ? Xt(e) : n === "ja" ? Zt(e) : n === "ko" ? Qt(e) : n === "ru" ? $t(e) : Wt(e);
}), $ = () => "Email", tn = () => "Email", nn = () => "Correo electrónico", rn = () => "E-Mail", an = () => "Email", on = () => "E-mail", sn = () => "邮件地址", cn = () => "メールアドレス", ln = () => "이메일 주소", un = () => "Эл. почта", dn = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? tn(e) : n === "es" ? nn(e) : n === "de" ? rn(e) : n === "it" ? an(e) : n === "pt" ? on(e) : n === "zh" ? sn(e) : n === "ja" ? cn(e) : n === "ko" ? ln(e) : n === "ru" ? un(e) : $(e);
});
function fn() {
	let e = t(), n = t(), r = t(), i = t();
	return o("form", {
		className: "space-y-6",
		children: [
			o("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [o("div", { children: [a("label", {
					htmlFor: e,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: en()
				}), a("input", {
					id: e,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: Ut()
				})] }), o("div", { children: [a("label", {
					htmlFor: n,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: dn()
				}), a("input", {
					id: n,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				})] })]
			}),
			o("div", { children: [a("label", {
				htmlFor: r,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: Q ? Q() : "Topic"
			}), o("select", {
				id: r,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					a("option", { children: G() }),
					a("option", { children: tt() }),
					a("option", { children: We() }),
					a("option", { children: Y ? Y() : "Contribution" }),
					a("option", { children: Z ? Z() : "Other" })
				]
			})] }),
			o("div", { children: [a("label", {
				htmlFor: i,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: X ? X() : "Message"
			}), a("textarea", {
				id: i,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: Ce()
			})] }),
			a("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: St()
			})
		]
	});
}
function pn() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function mn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function hn({ children: t }) {
	let o = ee().locale ?? "en", [s] = r(() => typeof performance < "u" ? performance.now() : 0);
	return n(() => {
		mn("AppRoot", s);
	}, [s]), e(() => {
		v(o, { reload: !1 }), document.documentElement.lang = o;
	}, [o]), e(() => {
		pn();
	}, []), a(i, { children: t });
}
function gn({ children: e }) {
	return a(hn, { children: e });
}
function _n() {
	return a(gn, { children: a(fn, {}) });
}
export { _n as default };
