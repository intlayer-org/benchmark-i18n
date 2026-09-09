import { useEffect as e, useId as t, useLayoutEffect as n, useState as r } from "react";
import { Fragment as i, jsxDEV as a } from "react/jsx-dev-runtime";
import { useParams as o } from "next/navigation";
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
], l = "PARAGLIDE_LOCALE", ee = 3456e4, u = [
	"cookie",
	"globalVariable",
	"baseLocale"
], d = [], f = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	let e = u;
	!f && typeof window < "u" && window.location?.href && (e = k(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, _(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ae();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (j(t) && A.has(t)) {
			let e = A.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return re(t);
			}
		}
		let e = v(n);
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
		r = h();
	} catch {}
	let i = [], a = u;
	!f && typeof window < "u" && window.location?.href && (a = k(window.location.href));
	for (let t of a) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (f || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, T();
	} else if (t === "baseLocale") continue;
	else if (j(t) && A.has(t)) {
		let n = A.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!f && n.reload && window.location && e !== r && g(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function v(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function re(e) {
	let t = v(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function y(e) {
	return e;
}
function b(e, t) {
	return e.exec(t.href);
}
var x = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), S = RegExp(`(?:^|;\\s*)${x}=([^;]*)`), C = Symbol(), w = C;
function T() {
	w = C;
}
function ie() {
	typeof queueMicrotask == "function" ? queueMicrotask(T) : Promise.resolve().then(T);
}
function ae() {
	if (typeof document > "u") return;
	if (w !== C) return w;
	let e = document.cookie.match(S)?.[1];
	return w = v(e), ie(), w;
}
function oe(e) {
	return se(e);
}
function se(e) {
	let t = y(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && v(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), y(t);
}
var E, D;
function O(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (E === t) return D;
	let n = y(new URL(t, "http://example.com")), r = oe(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of d) if (b(new s(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return E = t, D = a, a;
}
function k(e) {
	let t = O(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var A = /* @__PURE__ */ new Map();
function j(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var M = () => "Bug Report", N = () => "Rapport de bug", P = () => "Informe de bug", F = () => "Fehlerbericht", I = () => "Segnalazione di bug", L = () => "Relatório de bug", R = () => "Bug 报告", z = () => "バグ報告", B = () => "버그 보고", V = () => "Отчет об ошибке", H = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? N(e) : n === "es" ? P(e) : n === "de" ? F(e) : n === "it" ? I(e) : n === "pt" ? L(e) : n === "zh" ? R(e) : n === "ja" ? z(e) : n === "ko" ? B(e) : n === "ru" ? V(e) : M(e);
}), U = () => "Contribution", W = () => "Contribution", G = () => "Contribución", K = () => "Beitrag", ce = () => "Contributo", le = () => "Contribuição", ue = () => "贡献", de = () => "コントリビューション", fe = () => "기여", pe = () => "Вклад", q = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? W(e) : n === "es" ? G(e) : n === "de" ? K(e) : n === "it" ? ce(e) : n === "pt" ? le(e) : n === "zh" ? ue(e) : n === "ja" ? de(e) : n === "ko" ? fe(e) : n === "ru" ? pe(e) : U(e);
}), me = () => "Describe your question or idea...", he = () => "Décrivez votre question ou idée...", ge = () => "Describe tu pregunta o idea...", _e = () => "Beschreiben Sie Ihre Frage oder Idee...", ve = () => "Descrivi la tua domanda o idea...", ye = () => "Descreva sua pergunta ou ideia...", be = () => "描述您的问题或想法...", xe = () => "質問やアイデアの詳細を記入してください...", Se = () => "질문이나 아이디어를 설명해주세요...", Ce = () => "Опишите ваш вопрос или идею...", we = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? he(e) : n === "es" ? ge(e) : n === "de" ? _e(e) : n === "it" ? ve(e) : n === "pt" ? ye(e) : n === "zh" ? be(e) : n === "ja" ? xe(e) : n === "ko" ? Se(e) : n === "ru" ? Ce(e) : me(e);
}), Te = () => "Message", Ee = () => "Message", De = () => "Mensaje", Oe = () => "Nachricht", ke = () => "Messaggio", Ae = () => "Mensagem", je = () => "消息", Me = () => "メッセージ", Ne = () => "메시지", Pe = () => "Сообщение", J = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ee(e) : n === "es" ? De(e) : n === "de" ? Oe(e) : n === "it" ? ke(e) : n === "pt" ? Ae(e) : n === "zh" ? je(e) : n === "ja" ? Me(e) : n === "ko" ? Ne(e) : n === "ru" ? Pe(e) : Te(e);
}), Fe = () => "Methodology Question", Ie = () => "Question sur la méthodologie", Le = () => "Pregunta sobre metodología", Re = () => "Frage zur Methodik", ze = () => "Domanda sulla metodologia", Be = () => "Pergunta sobre metodologia", Ve = () => "方法论问题", He = () => "方法論に関する質問", Ue = () => "방법론 질문", We = () => "Вопрос по методологии", Ge = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ie(e) : n === "es" ? Le(e) : n === "de" ? Re(e) : n === "it" ? ze(e) : n === "pt" ? Be(e) : n === "zh" ? Ve(e) : n === "ja" ? He(e) : n === "ko" ? Ue(e) : n === "ru" ? We(e) : Fe(e);
}), Ke = () => "New Benchmark Idea", qe = () => "Nouvelle idée de benchmark", Je = () => "Nueva idea de benchmark", Ye = () => "Neue Benchmark-Idee", Xe = () => "Nuova idea di benchmark", Ze = () => "Nova ideia de benchmark", Qe = () => "新基准测试想法", $e = () => "新しいベンチマークのアイデア", et = () => "새로운 벤치마크 아이디어", tt = () => "Новая идея для бенчмарка", nt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? qe(e) : n === "es" ? Je(e) : n === "de" ? Ye(e) : n === "it" ? Xe(e) : n === "pt" ? Ze(e) : n === "zh" ? Qe(e) : n === "ja" ? $e(e) : n === "ko" ? et(e) : n === "ru" ? tt(e) : Ke(e);
}), rt = () => "Other", it = () => "Autre", at = () => "Otro", ot = () => "Andere", st = () => "Altro", ct = () => "Outro", lt = () => "其他", ut = () => "その他", dt = () => "기타", ft = () => "Другое", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? it(e) : n === "es" ? at(e) : n === "de" ? ot(e) : n === "it" ? st(e) : n === "pt" ? ct(e) : n === "zh" ? lt(e) : n === "ja" ? ut(e) : n === "ko" ? dt(e) : n === "ru" ? ft(e) : rt(e);
}), pt = () => "Send Message", mt = () => "Envoyer le message", ht = () => "Enviar mensaje", gt = () => "Nachricht senden", _t = () => "Invia messaggio", vt = () => "Enviar mensagem", yt = () => "发送消息", bt = () => "メッセージを送信", xt = () => "메시지 보내기", St = () => "Отправить сообщение", Ct = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? mt(e) : n === "es" ? ht(e) : n === "de" ? gt(e) : n === "it" ? _t(e) : n === "pt" ? vt(e) : n === "zh" ? yt(e) : n === "ja" ? bt(e) : n === "ko" ? xt(e) : n === "ru" ? St(e) : pt(e);
}), wt = () => "Topic", Tt = () => "Sujet", Et = () => "Tema", Dt = () => "Thema", Ot = () => "Argomento", kt = () => "Assunto", At = () => "主题", jt = () => "トピック", Mt = () => "주제", Nt = () => "Теما", X = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Tt(e) : n === "es" ? Et(e) : n === "de" ? Dt(e) : n === "it" ? Ot(e) : n === "pt" ? kt(e) : n === "zh" ? At(e) : n === "ja" ? jt(e) : n === "ko" ? Mt(e) : n === "ru" ? Nt(e) : wt(e);
}), Pt = () => "Your name", Ft = () => "Votre nom", It = () => "Tu nombre", Lt = () => "Ihr Name", Rt = () => "Il tuo nome", zt = () => "Seu nome", Bt = () => "您的姓名", Vt = () => "お名前", Ht = () => "이름", Ut = () => "Ваше имя", Wt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ft(e) : n === "es" ? It(e) : n === "de" ? Lt(e) : n === "it" ? Rt(e) : n === "pt" ? zt(e) : n === "zh" ? Bt(e) : n === "ja" ? Vt(e) : n === "ko" ? Ht(e) : n === "ru" ? Ut(e) : Pt(e);
}), Gt = () => "Display Name", Kt = () => "Nom d'affichage", qt = () => "Nombre visible", Jt = () => "Anzeigename", Yt = () => "Nome visualizzato", Xt = () => "Nome de exibição", Zt = () => "显示名称", Qt = () => "表示名", $t = () => "표시 이름", en = () => "Отображаемое имя", tn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Kt(e) : n === "es" ? qt(e) : n === "de" ? Jt(e) : n === "it" ? Yt(e) : n === "pt" ? Xt(e) : n === "zh" ? Zt(e) : n === "ja" ? Qt(e) : n === "ko" ? $t(e) : n === "ru" ? en(e) : Gt(e);
}), nn = () => "Email", Z = () => "Email", rn = () => "Correo electrónico", an = () => "E-Mail", on = () => "Email", sn = () => "E-mail", cn = () => "邮件地址", ln = () => "メールアドレス", un = () => "이메일 주소", dn = () => "Эл. почта", fn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Z(e) : n === "es" ? rn(e) : n === "de" ? an(e) : n === "it" ? on(e) : n === "pt" ? sn(e) : n === "zh" ? cn(e) : n === "ja" ? ln(e) : n === "ko" ? un(e) : n === "ru" ? dn(e) : nn(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/contact/ContactForm.tsx";
function pn() {
	let e = t(), n = t(), r = t(), i = t();
	return a("form", {
		className: "space-y-6",
		children: [
			a("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [a("div", { children: [a("label", {
					htmlFor: e,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: tn()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 16,
					columnNumber: 11
				}, this), a("input", {
					id: e,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: Wt()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 22,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: Q,
					lineNumber: 15,
					columnNumber: 9
				}, this), a("div", { children: [a("label", {
					htmlFor: n,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: fn()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 29,
					columnNumber: 11
				}, this), a("input", {
					id: n,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 35,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: Q,
					lineNumber: 28,
					columnNumber: 9
				}, this)]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 14,
				columnNumber: 7
			}, this),
			a("div", { children: [a("label", {
				htmlFor: r,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: X ? X() : "Topic"
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 44,
				columnNumber: 9
			}, this), a("select", {
				id: r,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					a("option", { children: H() }, void 0, !1, {
						fileName: Q,
						lineNumber: 54,
						columnNumber: 11
					}, this),
					a("option", { children: nt() }, void 0, !1, {
						fileName: Q,
						lineNumber: 55,
						columnNumber: 11
					}, this),
					a("option", { children: Ge() }, void 0, !1, {
						fileName: Q,
						lineNumber: 56,
						columnNumber: 11
					}, this),
					a("option", { children: q ? q() : "Contribution" }, void 0, !1, {
						fileName: Q,
						lineNumber: 57,
						columnNumber: 11
					}, this),
					a("option", { children: Y ? Y() : "Other" }, void 0, !1, {
						fileName: Q,
						lineNumber: 62,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 50,
				columnNumber: 9
			}, this)] }, void 0, !0, {
				fileName: Q,
				lineNumber: 43,
				columnNumber: 7
			}, this),
			a("div", { children: [a("label", {
				htmlFor: i,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: J ? J() : "Message"
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 68,
				columnNumber: 9
			}, this), a("textarea", {
				id: i,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: we()
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 74,
				columnNumber: 9
			}, this)] }, void 0, !0, {
				fileName: Q,
				lineNumber: 67,
				columnNumber: 7
			}, this),
			a("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: Ct()
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 81,
				columnNumber: 7
			}, this)
		]
	}, void 0, !0, {
		fileName: Q,
		lineNumber: 13,
		columnNumber: 5
	}, this);
}
function mn() {
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
function hn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var gn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/AppProviders.tsx";
function _n({ children: t }) {
	let s = o().locale ?? "en", [c] = r(() => typeof performance < "u" ? performance.now() : 0);
	return n(() => {
		hn("AppRoot", c);
	}, [c]), e(() => {
		_(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		mn();
	}, []), a(i, { children: t }, void 0, !1, {
		fileName: gn,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var vn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/scripts/Wrapper.tsx";
function yn({ children: e }) {
	return a(_n, { children: e }, void 0, !1, {
		fileName: vn,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/contact/ContactForm.wrapper.tsx";
function bn() {
	return a(yn, { children: a(pn, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { bn as default };
