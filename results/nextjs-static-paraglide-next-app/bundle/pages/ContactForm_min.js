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
], l = "PARAGLIDE_LOCALE", te = 3456e4, u = [
	"cookie",
	"globalVariable",
	"baseLocale"
], d = [], f, p;
function ne(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (f === t) return p;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of d) if (new s(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return f = t, p = r, r;
}
function m(e) {
	let t = ne(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var h = void 0, g = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var _, v = !1, y = () => {
	if (h) {
		let e = h?.getStore()?.locale;
		if (e) return e;
	}
	let e = u;
	!g && typeof window < "u" && window.location?.href && (e = m(window.location.href));
	let t = b(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return v || (_ = t, v = !0, x(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function b(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ae();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && _ !== void 0) n = _;
		else if (w(t) && C.has(t)) {
			let e = C.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ie(t);
			}
		}
		let e = S(n);
		if (e) return e;
	}
}
var re = (e) => {
	e ? window.location.href = e : window.location.reload();
}, x = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = y();
	} catch {}
	let i = [], a = u;
	!g && typeof window < "u" && window.location?.href && (a = m(window.location.href));
	for (let t of a) if (t === "globalVariable") _ = e;
	else if (t === "cookie") {
		if (g || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${te}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (w(t) && C.has(t)) {
		let n = C.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!g && n.reload && window.location && e !== r && re(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function S(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function ie(e) {
	let t = S(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function ae() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${l}=([^;]+)`))?.[2];
	return S(e);
}
var C = /* @__PURE__ */ new Map();
function w(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var T = () => "Your name", E = () => "Votre nom", D = () => "Tu nombre", O = () => "Ihr Name", k = () => "Il tuo nome", A = () => "Seu nome", j = () => "您的姓名", M = () => "お名前", N = () => "이름", P = () => "Ваше имя", F = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? T(e) : n === "fr" ? E(e) : n === "es" ? D(e) : n === "de" ? O(e) : n === "it" ? k(e) : n === "pt" ? A(e) : n === "zh" ? j(e) : n === "ja" ? M(e) : n === "ko" ? N(e) : P(e);
}), I = () => "Bug Report", L = () => "Rapport de bug", R = () => "Informe de bug", z = () => "Fehlerbericht", B = () => "Segnalazione di bug", V = () => "Relatório de bug", H = () => "Bug 报告", U = () => "バグ報告", W = () => "버그 보고", G = () => "Отчет об ошибке", K = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? I(e) : n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : G(e);
}), q = () => "New Benchmark Idea", J = () => "Nouvelle idée de benchmark", oe = () => "Nueva idea de benchmark", se = () => "Neue Benchmark-Idee", ce = () => "Nuova idea di benchmark", le = () => "Nova ideia de benchmark", ue = () => "新基准测试想法", de = () => "新しいベンチマークのアイデア", fe = () => "새로운 벤치마크 아이디어", pe = () => "Новая идея для бенчмарка", me = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? q(e) : n === "fr" ? J(e) : n === "es" ? oe(e) : n === "de" ? se(e) : n === "it" ? ce(e) : n === "pt" ? le(e) : n === "zh" ? ue(e) : n === "ja" ? de(e) : n === "ko" ? fe(e) : pe(e);
}), he = () => "Methodology Question", ge = () => "Question sur la méthodologie", _e = () => "Pregunta sobre metodología", ve = () => "Frage zur Methodik", ye = () => "Domanda sulla metodologia", be = () => "Pergunta sobre metodologia", xe = () => "方法论问题", Se = () => "方法論に関する質問", Ce = () => "방법론 질문", we = () => "Вопрос по методологии", Te = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? he(e) : n === "fr" ? ge(e) : n === "es" ? _e(e) : n === "de" ? ve(e) : n === "it" ? ye(e) : n === "pt" ? be(e) : n === "zh" ? xe(e) : n === "ja" ? Se(e) : n === "ko" ? Ce(e) : we(e);
}), Ee = () => "Describe your question or idea...", De = () => "Décrivez votre question ou idée...", Oe = () => "Describe tu pregunta o idea...", ke = () => "Beschreiben Sie Ihre Frage oder Idee...", Ae = () => "Descrivi la tua domanda o idea...", je = () => "Descreva sua pergunta ou ideia...", Me = () => "描述您的问题或想法...", Ne = () => "質問やアイデアの詳細を記入してください...", Pe = () => "질문이나 아이디어를 설명해주세요...", Fe = () => "Опишите ваш вопрос или идею...", Ie = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Ee(e) : n === "fr" ? De(e) : n === "es" ? Oe(e) : n === "de" ? ke(e) : n === "it" ? Ae(e) : n === "pt" ? je(e) : n === "zh" ? Me(e) : n === "ja" ? Ne(e) : n === "ko" ? Pe(e) : Fe(e);
}), Le = () => "Send Message", Re = () => "Envoyer le message", ze = () => "Enviar mensaje", Be = () => "Nachricht senden", Ve = () => "Invia messaggio", He = () => "Enviar mensagem", Ue = () => "发送消息", We = () => "メッセージを送信", Ge = () => "메시지 보내기", Ke = () => "Отправить сообщение", qe = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Le(e) : n === "fr" ? Re(e) : n === "es" ? ze(e) : n === "de" ? Be(e) : n === "it" ? Ve(e) : n === "pt" ? He(e) : n === "zh" ? Ue(e) : n === "ja" ? We(e) : n === "ko" ? Ge(e) : Ke(e);
}), Je = () => "Topic", Ye = () => "Sujet", Xe = () => "Tema", Ze = () => "Thema", Qe = () => "Argomento", $e = () => "Assunto", et = () => "主题", tt = () => "トピック", nt = () => "주제", rt = () => "Теما", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Je(e) : n === "fr" ? Ye(e) : n === "es" ? Xe(e) : n === "de" ? Ze(e) : n === "it" ? Qe(e) : n === "pt" ? $e(e) : n === "zh" ? et(e) : n === "ja" ? tt(e) : n === "ko" ? nt(e) : rt(e);
}), it = () => "Contribution", at = () => "Contribution", ot = () => "Contribución", st = () => "Beitrag", ct = () => "Contributo", lt = () => "Contribuição", ut = () => "贡献", dt = () => "コントリビューション", ft = () => "기여", pt = () => "Вклад", X = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? it(e) : n === "fr" ? at(e) : n === "es" ? ot(e) : n === "de" ? st(e) : n === "it" ? ct(e) : n === "pt" ? lt(e) : n === "zh" ? ut(e) : n === "ja" ? dt(e) : n === "ko" ? ft(e) : pt(e);
}), mt = () => "Other", ht = () => "Autre", gt = () => "Otro", _t = () => "Andere", vt = () => "Altro", yt = () => "Outro", bt = () => "其他", xt = () => "その他", St = () => "기타", Ct = () => "Другое", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? mt(e) : n === "fr" ? ht(e) : n === "es" ? gt(e) : n === "de" ? _t(e) : n === "it" ? vt(e) : n === "pt" ? yt(e) : n === "zh" ? bt(e) : n === "ja" ? xt(e) : n === "ko" ? St(e) : Ct(e);
}), wt = () => "Message", Tt = () => "Message", Et = () => "Mensaje", Dt = () => "Nachricht", Ot = () => "Messaggio", kt = () => "Mensagem", At = () => "消息", jt = () => "メッセージ", Mt = () => "메시지", Nt = () => "Сообщение", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? wt(e) : n === "fr" ? Tt(e) : n === "es" ? Et(e) : n === "de" ? Dt(e) : n === "it" ? Ot(e) : n === "pt" ? kt(e) : n === "zh" ? At(e) : n === "ja" ? jt(e) : n === "ko" ? Mt(e) : Nt(e);
}), Pt = () => "Display Name", Ft = () => "Nom d'affichage", It = () => "Nombre visible", Lt = () => "Anzeigename", Rt = () => "Nome visualizzato", zt = () => "Nome de exibição", Bt = () => "显示名称", Vt = () => "表示名", Ht = () => "표시 이름", Ut = () => "Отображаемое имя", Wt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Pt(e) : n === "fr" ? Ft(e) : n === "es" ? It(e) : n === "de" ? Lt(e) : n === "it" ? Rt(e) : n === "pt" ? zt(e) : n === "zh" ? Bt(e) : n === "ja" ? Vt(e) : n === "ko" ? Ht(e) : Ut(e);
}), Gt = () => "Email", Kt = () => "Email", qt = () => "Correo electrónico", $ = () => "E-Mail", Jt = () => "Email", Yt = () => "E-mail", Xt = () => "邮件地址", Zt = () => "メールアドレス", Qt = () => "이메일 주소", $t = () => "Эл. почта", en = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Gt(e) : n === "fr" ? Kt(e) : n === "es" ? qt(e) : n === "de" ? $(e) : n === "it" ? Jt(e) : n === "pt" ? Yt(e) : n === "zh" ? Xt(e) : n === "ja" ? Zt(e) : n === "ko" ? Qt(e) : $t(e);
});
function tn() {
	let e = t(), n = t(), r = t(), i = t();
	return o("form", {
		className: "space-y-6",
		children: [
			o("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [o("div", { children: [a("label", {
					htmlFor: e,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: Wt()
				}), a("input", {
					id: e,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: F()
				})] }), o("div", { children: [a("label", {
					htmlFor: n,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: en()
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
				children: Y ? Y() : "Topic"
			}), o("select", {
				id: r,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					a("option", { children: K() }),
					a("option", { children: me() }),
					a("option", { children: Te() }),
					a("option", { children: X ? X() : "Contribution" }),
					a("option", { children: Z ? Z() : "Other" })
				]
			})] }),
			o("div", { children: [a("label", {
				htmlFor: i,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: Q ? Q() : "Message"
			}), a("textarea", {
				id: i,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: Ie()
			})] }),
			a("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: qe()
			})
		]
	});
}
function nn() {
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
function rn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function an({ children: t }) {
	let o = ee().locale ?? "en", [s] = r(() => typeof performance < "u" ? performance.now() : 0);
	return n(() => {
		rn("AppRoot", s);
	}, [s]), e(() => {
		x(o, { reload: !1 }), document.documentElement.lang = o;
	}, [o]), e(() => {
		nn();
	}, []), a(i, { children: t });
}
function on({ children: e }) {
	return a(an, { children: e });
}
function sn() {
	return a(on, { children: a(tn, {}) });
}
export { sn as default };
