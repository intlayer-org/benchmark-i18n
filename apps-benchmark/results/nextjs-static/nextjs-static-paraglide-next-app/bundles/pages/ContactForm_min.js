import { Profiler as e, useEffect as t, useId as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { useParams as a } from "next/navigation";
var o = {}, s = [
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
], c = "PARAGLIDE_LOCALE", ee = 3456e4, l = [
	"cookie",
	"globalVariable",
	"baseLocale"
], u = [], d, f;
function te(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (d === t) return f;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of u) if (new o(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return d = t, f = r, r;
}
function p(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var m = void 0, h = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var g, _ = !1, v = () => {
	if (m) {
		let e = m?.getStore()?.locale;
		if (e) return e;
	}
	let e = l;
	!h && typeof window < "u" && window.location?.href && (e = p(window.location.href));
	let t = ne(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return _ || (g = t, _ = !0, y(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ne(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ae();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && g !== void 0) n = g;
		else if (S(t) && x.has(t)) {
			let e = x.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ie(t);
			}
		}
		let e = b(n);
		if (e) return e;
	}
}
var re = (e) => {
	e ? window.location.href = e : window.location.reload();
}, y = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = v();
	} catch {}
	let i = [], a = l;
	!h && typeof window < "u" && window.location?.href && (a = p(window.location.href));
	for (let t of a) if (t === "globalVariable") g = e;
	else if (t === "cookie") {
		if (h || typeof document > "u" || typeof window > "u") continue;
		let t = `${c}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (S(t) && x.has(t)) {
		let n = x.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!h && n.reload && window.location && e !== r && re(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function b(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of s) if (e.toLowerCase() === t) return e;
}
function ie(e) {
	let t = b(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${s.join(", ")}`);
}
function ae() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${c}=([^;]+)`))?.[2];
	return b(e);
}
var x = /* @__PURE__ */ new Map();
function S(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var C = () => "Your name", w = () => "Votre nom", T = () => "Tu nombre", E = () => "Ihr Name", D = () => "Il tuo nome", O = () => "Seu nome", k = () => "您的姓名", A = () => "お名前", j = () => "이름", M = () => "Ваше имя", N = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? C(e) : n === "fr" ? w(e) : n === "es" ? T(e) : n === "de" ? E(e) : n === "it" ? D(e) : n === "pt" ? O(e) : n === "zh" ? k(e) : n === "ja" ? A(e) : n === "ko" ? j(e) : M(e);
}), P = () => "Bug Report", F = () => "Rapport de bug", I = () => "Informe de bug", L = () => "Fehlerbericht", R = () => "Segnalazione di bug", z = () => "Relatório de bug", B = () => "Bug 报告", V = () => "バグ報告", H = () => "버그 보고", U = () => "Отчет об ошибке", W = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? P(e) : n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : U(e);
}), G = () => "New Benchmark Idea", K = () => "Nouvelle idée de benchmark", q = () => "Nueva idea de benchmark", J = () => "Neue Benchmark-Idee", oe = () => "Nuova idea di benchmark", se = () => "Nova ideia de benchmark", ce = () => "新基准测试想法", le = () => "新しいベンチマークのアイデア", ue = () => "새로운 벤치마크 아이디어", de = () => "Новая идея для бенчмарка", fe = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? G(e) : n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? oe(e) : n === "pt" ? se(e) : n === "zh" ? ce(e) : n === "ja" ? le(e) : n === "ko" ? ue(e) : de(e);
}), pe = () => "Methodology Question", me = () => "Question sur la méthodologie", he = () => "Pregunta sobre metodología", ge = () => "Frage zur Methodik", _e = () => "Domanda sulla metodologia", ve = () => "Pergunta sobre metodologia", ye = () => "方法论问题", be = () => "方法論に関する質問", xe = () => "방법론 질문", Se = () => "Вопрос по методологии", Ce = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? pe(e) : n === "fr" ? me(e) : n === "es" ? he(e) : n === "de" ? ge(e) : n === "it" ? _e(e) : n === "pt" ? ve(e) : n === "zh" ? ye(e) : n === "ja" ? be(e) : n === "ko" ? xe(e) : Se(e);
}), we = () => "Describe your question or idea...", Te = () => "Décrivez votre question ou idée...", Ee = () => "Describe tu pregunta o idea...", De = () => "Beschreiben Sie Ihre Frage oder Idee...", Oe = () => "Descrivi la tua domanda o idea...", ke = () => "Descreva sua pergunta ou ideia...", Ae = () => "描述您的问题或想法...", je = () => "質問やアイデアの詳細を記入してください...", Me = () => "질문이나 아이디어를 설명해주세요...", Ne = () => "Опишите ваш вопрос или идею...", Pe = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? we(e) : n === "fr" ? Te(e) : n === "es" ? Ee(e) : n === "de" ? De(e) : n === "it" ? Oe(e) : n === "pt" ? ke(e) : n === "zh" ? Ae(e) : n === "ja" ? je(e) : n === "ko" ? Me(e) : Ne(e);
}), Fe = () => "Send Message", Ie = () => "Envoyer le message", Le = () => "Enviar mensaje", Re = () => "Nachricht senden", ze = () => "Invia messaggio", Be = () => "Enviar mensagem", Ve = () => "发送消息", He = () => "メッセージを送信", Ue = () => "메시지 보내기", We = () => "Отправить сообщение", Ge = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Fe(e) : n === "fr" ? Ie(e) : n === "es" ? Le(e) : n === "de" ? Re(e) : n === "it" ? ze(e) : n === "pt" ? Be(e) : n === "zh" ? Ve(e) : n === "ja" ? He(e) : n === "ko" ? Ue(e) : We(e);
}), Ke = () => "Topic", qe = () => "Sujet", Je = () => "Tema", Ye = () => "Thema", Xe = () => "Argomento", Ze = () => "Assunto", Qe = () => "主题", $e = () => "トピック", et = () => "주제", tt = () => "Теما", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Ke(e) : n === "fr" ? qe(e) : n === "es" ? Je(e) : n === "de" ? Ye(e) : n === "it" ? Xe(e) : n === "pt" ? Ze(e) : n === "zh" ? Qe(e) : n === "ja" ? $e(e) : n === "ko" ? et(e) : tt(e);
}), nt = () => "Contribution", rt = () => "Contribution", it = () => "Contribución", at = () => "Beitrag", ot = () => "Contributo", st = () => "Contribuição", ct = () => "贡献", lt = () => "コントリビューション", ut = () => "기여", dt = () => "Вклад", X = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? nt(e) : n === "fr" ? rt(e) : n === "es" ? it(e) : n === "de" ? at(e) : n === "it" ? ot(e) : n === "pt" ? st(e) : n === "zh" ? ct(e) : n === "ja" ? lt(e) : n === "ko" ? ut(e) : dt(e);
}), ft = () => "Other", pt = () => "Autre", mt = () => "Otro", ht = () => "Andere", gt = () => "Altro", _t = () => "Outro", vt = () => "其他", yt = () => "その他", bt = () => "기타", xt = () => "Другое", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? ft(e) : n === "fr" ? pt(e) : n === "es" ? mt(e) : n === "de" ? ht(e) : n === "it" ? gt(e) : n === "pt" ? _t(e) : n === "zh" ? vt(e) : n === "ja" ? yt(e) : n === "ko" ? bt(e) : xt(e);
}), St = () => "Message", Ct = () => "Message", wt = () => "Mensaje", Tt = () => "Nachricht", Et = () => "Messaggio", Dt = () => "Mensagem", Ot = () => "消息", kt = () => "メッセージ", At = () => "메시지", jt = () => "Сообщение", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? St(e) : n === "fr" ? Ct(e) : n === "es" ? wt(e) : n === "de" ? Tt(e) : n === "it" ? Et(e) : n === "pt" ? Dt(e) : n === "zh" ? Ot(e) : n === "ja" ? kt(e) : n === "ko" ? At(e) : jt(e);
}), Mt = () => "Display Name", Nt = () => "Nom d'affichage", Pt = () => "Nombre visible", Ft = () => "Anzeigename", It = () => "Nome visualizzato", Lt = () => "Nome de exibição", Rt = () => "显示名称", zt = () => "表示名", Bt = () => "표시 이름", $ = () => "Отображаемое имя", Vt = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Mt(e) : n === "fr" ? Nt(e) : n === "es" ? Pt(e) : n === "de" ? Ft(e) : n === "it" ? It(e) : n === "pt" ? Lt(e) : n === "zh" ? Rt(e) : n === "ja" ? zt(e) : n === "ko" ? Bt(e) : $(e);
}), Ht = () => "Email", Ut = () => "Email", Wt = () => "Correo electrónico", Gt = () => "E-Mail", Kt = () => "Email", qt = () => "E-mail", Jt = () => "邮件地址", Yt = () => "メールアドレス", Xt = () => "이메일 주소", Zt = () => "Эл. почта", Qt = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Ht(e) : n === "fr" ? Ut(e) : n === "es" ? Wt(e) : n === "de" ? Gt(e) : n === "it" ? Kt(e) : n === "pt" ? qt(e) : n === "zh" ? Jt(e) : n === "ja" ? Yt(e) : n === "ko" ? Xt(e) : Zt(e);
});
function $t() {
	let e = n(), t = n(), a = n(), o = n();
	return i("form", {
		className: "space-y-6",
		children: [
			i("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [i("div", { children: [r("label", {
					htmlFor: e,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: Vt()
				}), r("input", {
					id: e,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: N()
				})] }), i("div", { children: [r("label", {
					htmlFor: t,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: Qt()
				}), r("input", {
					id: t,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				})] })]
			}),
			i("div", { children: [r("label", {
				htmlFor: a,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: Y ? Y() : "Topic"
			}), i("select", {
				id: a,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					r("option", { children: W() }),
					r("option", { children: fe() }),
					r("option", { children: Ce() }),
					r("option", { children: X ? X() : "Contribution" }),
					r("option", { children: Z ? Z() : "Other" })
				]
			})] }),
			i("div", { children: [r("label", {
				htmlFor: o,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: Q ? Q() : "Message"
			}), r("textarea", {
				id: o,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: Pe()
			})] }),
			r("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: Ge()
			})
		]
	});
}
function en() {
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
function tn(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
function nn({ children: n }) {
	let i = a().locale ?? "en";
	return t(() => {
		y(i), document.documentElement.lang = i;
	}, [i]), t(() => {
		en();
	}, []), r(e, {
		id: "AppRoot",
		onRender: tn,
		children: n
	});
}
function rn({ children: e }) {
	return r(nn, { children: e });
}
function an() {
	return r(rn, { children: r($t, {}) });
}
export { an as default };
