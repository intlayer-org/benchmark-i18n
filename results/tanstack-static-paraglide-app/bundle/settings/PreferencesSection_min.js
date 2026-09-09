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
	!l && typeof window < "u" && window.location?.href && (e = k(window.location.href));
	let t = p(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function p(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = re();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (j(t) && A.has(t)) {
			let e = A.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return te(t);
			}
		}
		let e = g(n);
		if (e) return e;
	}
}
var ee = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = f();
	} catch {}
	let i = [], c = s;
	!l && typeof window < "u" && window.location?.href && (c = k(window.location.href));
	for (let t of c) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t, C();
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
	let d = () => {
		!l && n.reload && window.location && e !== r && ee(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		d();
	});
	d();
}, h = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function te(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function _(e) {
	return e;
}
function v(e, t) {
	return e.exec(t.href);
}
var y = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function ne() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function re() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = g(e), ne(), S;
}
function w(e) {
	return T(e);
}
function T(e) {
	let t = _(typeof e == "string" ? new URL(e, h()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var E, D;
function O(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (E === t) return D;
	let n = _(new URL(t, "http://example.com")), i = w(n), a = i.href === n.href ? [n] : [n, i], o;
	for (let e of a) {
		for (let t of c) if (v(new r(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return E = t, D = o, o;
}
function k(e) {
	let t = O(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var A = /* @__PURE__ */ new Map();
function j(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var M = () => "Arabic (ar)", N = () => "Chinese Simplified (zh-CN)", P = () => "Dark Mode", F = () => "Default Language", I = () => "Email Notifications", L = () => "English (en)", R = () => "French (fr)", z = () => "German (de)", B = () => "Japanese (ja)", V = () => "Preferences", H = () => "Receive weekly benchmark reports", U = () => "Spanish (es)", W = () => "Toggle dark mode", G = () => "Toggle notifications", K = () => "Use dark color scheme", q = () => "Arabe (ar)", J = () => "Chinois simplifié (zh-CN)", Y = () => "Mode sombre", X = () => "Langue par défaut", ie = () => "Notifications par email", ae = () => "Anglais (en)", oe = () => "Français (fr)", se = () => "Allemand (de)", ce = () => "Japonais (ja)", le = () => "Préférences", ue = () => "Recevoir des rapports hebdomadaires de benchmark", de = () => "Espagnol (es)", fe = () => "Basculer le mode sombre", pe = () => "Basculer les notifications", me = () => "Utiliser le schéma de couleurs sombres", he = () => "Árabe (ar)", ge = () => "Chino simplificado (zh-CN)", _e = () => "Modo oscuro", ve = () => "Idioma predeterminado", ye = () => "Notificaciones por correo electrónico", be = () => "Inglés (en)", xe = () => "Francés (fr)", Se = () => "Alemán (de)", Ce = () => "Japonés (ja)", we = () => "Preferencias", Te = () => "Recibir informes semanales de benchmarks", Ee = () => "Español (es)", De = () => "Alternar modo oscuro", Oe = () => "Alternar notificaciones", ke = () => "Usar esquema de colores oscuro", Ae = () => "Arabisch (ar)", je = () => "Chinesisch vereinfacht (zh-CN)", Me = () => "Dunkelmodus", Ne = () => "Standardsprache", Pe = () => "E-Mail-Benachrichtigungen", Fe = () => "Englisch (en)", Ie = () => "Französisch (fr)", Le = () => "Deutsch (de)", Re = () => "Japanisch (ja)", ze = () => "Einstellungen", Be = () => "Wöchentliche Benchmark-Berichte erhalten", Ve = () => "Spanisch (es)", He = () => "Dunkelmodus umschalten", Ue = () => "Benachrichtigungen umschalten", We = () => "Dunkles Farbschema verwenden", Ge = () => "Arabo (ar)", Ke = () => "Cinese semplificato (zh-CN)", qe = () => "Modalità scura", Je = () => "Lingua predefinita", Ye = () => "Notifiche via email", Xe = () => "Inglese (en)", Ze = () => "Francese (fr)", Qe = () => "Tedesco (de)", $e = () => "Giapponese (ja)", et = () => "Preferenze", tt = () => "Ricevi rapporti settimanali sui benchmark", nt = () => "Spagnolo (es)", rt = () => "Attiva/disattiva modalità scura", it = () => "Attiva/disattiva notifiche", at = () => "Usa lo schema colori scuro", ot = () => "Árabe (ar)", st = () => "Chinês simplificado (zh-CN)", ct = () => "Modo Escuro", lt = () => "Idioma Padrão", ut = () => "Notifiche por e-mail", dt = () => "Inglês (en)", ft = () => "Francês (fr)", pt = () => "Alemão (de)", mt = () => "Japonês (ja)", ht = () => "Preferências", gt = () => "Receber relatórios semanais de benchmarks", _t = () => "Espanhol (es)", vt = () => "Alternar modo escuro", yt = () => "Alternar notificações", bt = () => "Usar esquema de cores escuras", xt = () => "阿拉伯语 (ar)", St = () => "简体中文 (zh-CN)", Ct = () => "深色模式", wt = () => "默认语言", Tt = () => "邮件通知", Et = () => "英语 (en)", Dt = () => "法语 (fr)", Ot = () => "德语 (de)", kt = () => "日语 (ja)", At = () => "偏好设置", jt = () => "接收每周基准测试报告", Mt = () => "西班牙语 (es)", Nt = () => "切换深色模式", Pt = () => "切换通知", Ft = () => "使用深色配色方案", It = () => "アラビア語 (ar)", Lt = () => "中国語 簡体字 (zh-CN)", Rt = () => "ダークモード", zt = () => "既定の言語", Bt = () => "メール通知", Vt = () => "英語 (en)", Ht = () => "フランス語 (fr)", Ut = () => "ドイツ語 (de)", Wt = () => "日本語 (ja)", Gt = () => "設定", Kt = () => "毎週のベンチマークレポートを受け取る", qt = () => "スペイン語 (es)", Jt = () => "ダークモードの切り替え", Yt = () => "通知の切り替え", Xt = () => "ダークカラーの配色を使用する", Zt = () => "아랍어 (ar)", Qt = () => "중국어 간체 (zh-CN)", $t = () => "다크 모드", en = () => "기본 언어", tn = () => "이메일 알림", nn = () => "영어 (en)", rn = () => "프랑스어 (fr)", an = () => "독일어 (de)", on = () => "일본어 (ja)", sn = () => "환경 설정", cn = () => "주간 벤치마크 보고서 받기", ln = () => "스페인어 (es)", un = () => "다크 모드 토글", dn = () => "알림 토글", fn = () => "어두운 색상 테마 사용", pn = () => "Арабский (ar)", mn = () => "Китайский упрощенный (zh-CN)", hn = () => "Темный режим", gn = () => "Язык по умолчанию", _n = () => "Уведомления по эл. почте", vn = () => "Английский (en)", yn = () => "Французский (fr)", bn = () => "Немецкий (de)", xn = () => "Японский (ja)", Sn = () => "Настройки", Cn = () => "Получать еженедельные отчеты о бенчмарках", wn = () => "Испанский (es)", Tn = () => "Переключить темный режим", En = () => "Переключить уведомления", Dn = () => "Использовать темную цветовую схему", On = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? q(e) : n === "es" ? he(e) : n === "de" ? Ae(e) : n === "it" ? Ge(e) : n === "pt" ? ot(e) : n === "zh" ? xt(e) : n === "ja" ? It(e) : n === "ko" ? Zt(e) : n === "ru" ? pn(e) : M(e);
}), Z = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? J(e) : n === "es" ? ge(e) : n === "de" ? je(e) : n === "it" ? Ke(e) : n === "pt" ? st(e) : n === "zh" ? St(e) : n === "ja" ? Lt(e) : n === "ko" ? Qt(e) : n === "ru" ? mn(e) : N(e);
}), kn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Y(e) : n === "es" ? _e(e) : n === "de" ? Me(e) : n === "it" ? qe(e) : n === "pt" ? ct(e) : n === "zh" ? Ct(e) : n === "ja" ? Rt(e) : n === "ko" ? $t(e) : n === "ru" ? hn(e) : P(e);
}), An = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? X(e) : n === "es" ? ve(e) : n === "de" ? Ne(e) : n === "it" ? Je(e) : n === "pt" ? lt(e) : n === "zh" ? wt(e) : n === "ja" ? zt(e) : n === "ko" ? en(e) : n === "ru" ? gn(e) : F(e);
}), jn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ie(e) : n === "es" ? ye(e) : n === "de" ? Pe(e) : n === "it" ? Ye(e) : n === "pt" ? ut(e) : n === "zh" ? Tt(e) : n === "ja" ? Bt(e) : n === "ko" ? tn(e) : n === "ru" ? _n(e) : I(e);
}), Mn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ae(e) : n === "es" ? be(e) : n === "de" ? Fe(e) : n === "it" ? Xe(e) : n === "pt" ? dt(e) : n === "zh" ? Et(e) : n === "ja" ? Vt(e) : n === "ko" ? nn(e) : n === "ru" ? vn(e) : L(e);
}), Nn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? oe(e) : n === "es" ? xe(e) : n === "de" ? Ie(e) : n === "it" ? Ze(e) : n === "pt" ? ft(e) : n === "zh" ? Dt(e) : n === "ja" ? Ht(e) : n === "ko" ? rn(e) : n === "ru" ? yn(e) : R(e);
}), Pn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? se(e) : n === "es" ? Se(e) : n === "de" ? Le(e) : n === "it" ? Qe(e) : n === "pt" ? pt(e) : n === "zh" ? Ot(e) : n === "ja" ? Ut(e) : n === "ko" ? an(e) : n === "ru" ? bn(e) : z(e);
}), Fn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ce(e) : n === "es" ? Ce(e) : n === "de" ? Re(e) : n === "it" ? $e(e) : n === "pt" ? mt(e) : n === "zh" ? kt(e) : n === "ja" ? Wt(e) : n === "ko" ? on(e) : n === "ru" ? xn(e) : B(e);
}), In = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? le(e) : n === "es" ? we(e) : n === "de" ? ze(e) : n === "it" ? et(e) : n === "pt" ? ht(e) : n === "zh" ? At(e) : n === "ja" ? Gt(e) : n === "ko" ? sn(e) : n === "ru" ? Sn(e) : V(e);
}), Ln = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ue(e) : n === "es" ? Te(e) : n === "de" ? Be(e) : n === "it" ? tt(e) : n === "pt" ? gt(e) : n === "zh" ? jt(e) : n === "ja" ? Kt(e) : n === "ko" ? cn(e) : n === "ru" ? Cn(e) : H(e);
}), Rn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? de(e) : n === "es" ? Ee(e) : n === "de" ? Ve(e) : n === "it" ? nt(e) : n === "pt" ? _t(e) : n === "zh" ? Mt(e) : n === "ja" ? qt(e) : n === "ko" ? ln(e) : n === "ru" ? wn(e) : U(e);
}), zn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? fe(e) : n === "es" ? De(e) : n === "de" ? He(e) : n === "it" ? rt(e) : n === "pt" ? vt(e) : n === "zh" ? Nt(e) : n === "ja" ? Jt(e) : n === "ko" ? un(e) : n === "ru" ? Tn(e) : W(e);
}), Bn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? pe(e) : n === "es" ? Oe(e) : n === "de" ? Ue(e) : n === "it" ? it(e) : n === "pt" ? yt(e) : n === "zh" ? Pt(e) : n === "ja" ? Yt(e) : n === "ko" ? dn(e) : n === "ru" ? En(e) : G(e);
}), Vn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? me(e) : n === "es" ? ke(e) : n === "de" ? We(e) : n === "it" ? at(e) : n === "pt" ? bt(e) : n === "zh" ? Ft(e) : n === "ja" ? Xt(e) : n === "ko" ? fn(e) : n === "ru" ? Dn(e) : K(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/settings/PreferencesSection.tsx";
function Hn() {
	let t = e();
	return n("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [n("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: In()
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 9,
			columnNumber: 7
		}, this), n("div", {
			className: "space-y-4",
			children: [
				n("div", {
					className: "flex items-center justify-between",
					children: [n("div", { children: [n("p", {
						className: "text-sm font-medium text-foreground",
						children: jn()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 15,
						columnNumber: 13
					}, this), n("p", {
						className: "text-xs text-muted-foreground",
						children: Ln()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 18,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: Q,
						lineNumber: 14,
						columnNumber: 11
					}, this), n("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": Bn(),
						children: n("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" }, void 0, !1, {
							fileName: Q,
							lineNumber: 27,
							columnNumber: 13
						}, this)
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 22,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 13,
					columnNumber: 9
				}, this),
				n("div", {
					className: "flex items-center justify-between",
					children: [n("div", { children: [n("p", {
						className: "text-sm font-medium text-foreground",
						children: kn()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 32,
						columnNumber: 13
					}, this), n("p", {
						className: "text-xs text-muted-foreground",
						children: Vn()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 35,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: Q,
						lineNumber: 31,
						columnNumber: 11
					}, this), n("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": zn(),
						children: n("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" }, void 0, !1, {
							fileName: Q,
							lineNumber: 44,
							columnNumber: 13
						}, this)
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 39,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 30,
					columnNumber: 9
				}, this),
				n("div", { children: [n("label", {
					htmlFor: t,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: An()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 48,
					columnNumber: 11
				}, this), n("select", {
					id: t,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						n("option", { children: Mn() }, void 0, !1, {
							fileName: Q,
							lineNumber: 58,
							columnNumber: 13
						}, this),
						n("option", { children: Nn() }, void 0, !1, {
							fileName: Q,
							lineNumber: 59,
							columnNumber: 13
						}, this),
						n("option", { children: Pn() }, void 0, !1, {
							fileName: Q,
							lineNumber: 60,
							columnNumber: 13
						}, this),
						n("option", { children: Rn() }, void 0, !1, {
							fileName: Q,
							lineNumber: 61,
							columnNumber: 13
						}, this),
						n("option", { children: Fn() }, void 0, !1, {
							fileName: Q,
							lineNumber: 62,
							columnNumber: 13
						}, this),
						n("option", { children: Z() }, void 0, !1, {
							fileName: Q,
							lineNumber: 63,
							columnNumber: 13
						}, this),
						n("option", { children: On() }, void 0, !1, {
							fileName: Q,
							lineNumber: 64,
							columnNumber: 13
						}, this)
					]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 54,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: Q,
					lineNumber: 47,
					columnNumber: 9
				}, this)
			]
		}, void 0, !0, {
			fileName: Q,
			lineNumber: 12,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: Q,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var Un = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
m("en", { reload: !1 });
function Wn({ children: e }) {
	return n(t, { children: e }, void 0, !1, {
		fileName: Un,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/settings/PreferencesSection.wrapper.tsx";
function Gn() {
	return n(Wn, { children: n(Hn, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Gn as default };
