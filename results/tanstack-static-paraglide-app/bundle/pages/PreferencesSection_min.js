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
	!l && typeof window < "u" && window.location?.href && (e = M(window.location.href));
	let t = p(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, h(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function p(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = E();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (P(t) && N.has(t)) {
			let e = N.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return _(t);
			}
		}
		let e = g(n);
		if (e) return e;
	}
}
var m = (e) => {
	e ? window.location.href = e : window.location.reload();
}, h = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = f();
	} catch {}
	let i = [], a = s;
	!l && typeof window < "u" && window.location?.href && (a = M(window.location.href));
	for (let t of a) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, w();
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
	let c = () => {
		!l && n.reload && window.location && e !== r && m(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		c();
	});
	c();
}, te = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function _(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function v(e) {
	return e;
}
function y(e, t) {
	return e.exec(t.href);
}
var b = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), x = RegExp(`(?:^|;\\s*)${b}=([^;]*)`), S = Symbol(), C = S;
function w() {
	C = S;
}
function T() {
	typeof queueMicrotask == "function" ? queueMicrotask(w) : Promise.resolve().then(w);
}
function E() {
	if (typeof document > "u") return;
	if (C !== S) return C;
	let e = document.cookie.match(x)?.[1];
	return C = g(e), T(), C;
}
function D(e) {
	return O(e);
}
function O(e) {
	let t = v(typeof e == "string" ? new URL(e, te()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), v(t);
}
var k, A;
function j(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (k === t) return A;
	let n = v(new URL(t, "http://example.com")), r = D(n), a = r.href === n.href ? [n] : [n, r], o;
	for (let e of a) {
		for (let t of c) if (y(new i(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return k = t, A = o, o;
}
function M(e) {
	let t = j(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var N = /* @__PURE__ */ new Map();
function P(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var F = () => "Arabic (ar)", I = () => "Arabe (ar)", L = () => "Árabe (ar)", R = () => "Arabisch (ar)", z = () => "Arabo (ar)", B = () => "Árabe (ar)", V = () => "阿拉伯语 (ar)", H = () => "アラビア語 (ar)", U = () => "아랍어 (ar)", W = () => "Арабский (ar)", G = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : n === "ru" ? W(e) : F(e);
}), K = () => "Chinese Simplified (zh-CN)", q = () => "Chinois simplifié (zh-CN)", J = () => "Chino simplificado (zh-CN)", Y = () => "Chinesisch vereinfacht (zh-CN)", X = () => "Cinese semplificato (zh-CN)", Z = () => "Chinês simplificado (zh-CN)", Q = () => "简体中文 (zh-CN)", ne = () => "中国語 簡体字 (zh-CN)", re = () => "중국어 간체 (zh-CN)", ie = () => "Китайский упрощенный (zh-CN)", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? Z(e) : n === "zh" ? Q(e) : n === "ja" ? ne(e) : n === "ko" ? re(e) : n === "ru" ? ie(e) : K(e);
}), oe = () => "Dark Mode", se = () => "Mode sombre", ce = () => "Modo oscuro", le = () => "Dunkelmodus", ue = () => "Modalità scura", de = () => "Modo Escuro", fe = () => "深色模式", pe = () => "ダークモード", me = () => "다크 모드", he = () => "Темный режим", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : n === "ru" ? he(e) : oe(e);
}), _e = () => "Default Language", ve = () => "Langue par défaut", ye = () => "Idioma predeterminado", be = () => "Standardsprache", xe = () => "Lingua predefinita", Se = () => "Idioma Padrão", Ce = () => "默认语言", we = () => "既定の言語", Te = () => "기본 언어", Ee = () => "Язык по умолчанию", De = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : n === "ru" ? Ee(e) : _e(e);
}), Oe = () => "Email Notifications", ke = () => "Notifications par email", Ae = () => "Notificaciones por correo electrónico", je = () => "E-Mail-Benachrichtigungen", Me = () => "Notifiche via email", Ne = () => "Notifiche por e-mail", Pe = () => "邮件通知", Fe = () => "メール通知", Ie = () => "이메일 알림", Le = () => "Уведомления по эл. почте", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : n === "ru" ? Le(e) : Oe(e);
}), ze = () => "English (en)", Be = () => "Anglais (en)", Ve = () => "Inglés (en)", He = () => "Englisch (en)", Ue = () => "Inglese (en)", We = () => "Inglês (en)", Ge = () => "英语 (en)", Ke = () => "英語 (en)", qe = () => "영어 (en)", Je = () => "Английский (en)", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Be(e) : n === "es" ? Ve(e) : n === "de" ? He(e) : n === "it" ? Ue(e) : n === "pt" ? We(e) : n === "zh" ? Ge(e) : n === "ja" ? Ke(e) : n === "ko" ? qe(e) : n === "ru" ? Je(e) : ze(e);
}), Xe = () => "French (fr)", Ze = () => "Français (fr)", Qe = () => "Francés (fr)", $e = () => "Französisch (fr)", et = () => "Francese (fr)", tt = () => "Francês (fr)", nt = () => "法语 (fr)", rt = () => "フランス語 (fr)", it = () => "프랑스어 (fr)", at = () => "Французский (fr)", ot = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : n === "ru" ? at(e) : Xe(e);
}), st = () => "German (de)", ct = () => "Allemand (de)", lt = () => "Alemán (de)", ut = () => "Deutsch (de)", dt = () => "Tedesco (de)", ft = () => "Alemão (de)", pt = () => "德语 (de)", mt = () => "ドイツ語 (de)", ht = () => "독일어 (de)", gt = () => "Немецкий (de)", _t = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ct(e) : n === "es" ? lt(e) : n === "de" ? ut(e) : n === "it" ? dt(e) : n === "pt" ? ft(e) : n === "zh" ? pt(e) : n === "ja" ? mt(e) : n === "ko" ? ht(e) : n === "ru" ? gt(e) : st(e);
}), vt = () => "Japanese (ja)", yt = () => "Japonais (ja)", bt = () => "Japonés (ja)", xt = () => "Japanisch (ja)", St = () => "Giapponese (ja)", Ct = () => "Japonês (ja)", wt = () => "日语 (ja)", Tt = () => "日本語 (ja)", Et = () => "일본어 (ja)", Dt = () => "Японский (ja)", Ot = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? yt(e) : n === "es" ? bt(e) : n === "de" ? xt(e) : n === "it" ? St(e) : n === "pt" ? Ct(e) : n === "zh" ? wt(e) : n === "ja" ? Tt(e) : n === "ko" ? Et(e) : n === "ru" ? Dt(e) : vt(e);
}), kt = () => "Preferences", At = () => "Préférences", jt = () => "Preferencias", Mt = () => "Einstellungen", Nt = () => "Preferenze", Pt = () => "Preferências", Ft = () => "偏好设置", It = () => "設定", Lt = () => "환경 설정", Rt = () => "Настройки", zt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? At(e) : n === "es" ? jt(e) : n === "de" ? Mt(e) : n === "it" ? Nt(e) : n === "pt" ? Pt(e) : n === "zh" ? Ft(e) : n === "ja" ? It(e) : n === "ko" ? Lt(e) : n === "ru" ? Rt(e) : kt(e);
}), Bt = () => "Receive weekly benchmark reports", Vt = () => "Recevoir des rapports hebdomadaires de benchmark", Ht = () => "Recibir informes semanales de benchmarks", Ut = () => "Wöchentliche Benchmark-Berichte erhalten", Wt = () => "Ricevi rapporti settimanali sui benchmark", Gt = () => "Receber relatórios semanais de benchmarks", Kt = () => "接收每周基准测试报告", qt = () => "毎週のベンチマークレポートを受け取る", Jt = () => "주간 벤치마크 보고서 받기", Yt = () => "Получать еженедельные отчеты о бенчмарках", Xt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Vt(e) : n === "es" ? Ht(e) : n === "de" ? Ut(e) : n === "it" ? Wt(e) : n === "pt" ? Gt(e) : n === "zh" ? Kt(e) : n === "ja" ? qt(e) : n === "ko" ? Jt(e) : n === "ru" ? Yt(e) : Bt(e);
}), Zt = () => "Spanish (es)", Qt = () => "Espagnol (es)", $t = () => "Español (es)", en = () => "Spanisch (es)", tn = () => "Spagnolo (es)", nn = () => "Espanhol (es)", rn = () => "西班牙语 (es)", an = () => "スペイン語 (es)", on = () => "스페인어 (es)", sn = () => "Испанский (es)", cn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Qt(e) : n === "es" ? $t(e) : n === "de" ? en(e) : n === "it" ? tn(e) : n === "pt" ? nn(e) : n === "zh" ? rn(e) : n === "ja" ? an(e) : n === "ko" ? on(e) : n === "ru" ? sn(e) : Zt(e);
}), ln = () => "Toggle dark mode", un = () => "Basculer le mode sombre", dn = () => "Alternar modo oscuro", fn = () => "Dunkelmodus umschalten", pn = () => "Attiva/disattiva modalità scura", mn = () => "Alternar modo escuro", hn = () => "切换深色模式", gn = () => "ダークモードの切り替え", _n = () => "다크 모드 토글", vn = () => "Переключить темный режим", yn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? un(e) : n === "es" ? dn(e) : n === "de" ? fn(e) : n === "it" ? pn(e) : n === "pt" ? mn(e) : n === "zh" ? hn(e) : n === "ja" ? gn(e) : n === "ko" ? _n(e) : n === "ru" ? vn(e) : ln(e);
}), bn = () => "Toggle notifications", xn = () => "Basculer les notifications", Sn = () => "Alternar notificaciones", Cn = () => "Benachrichtigungen umschalten", wn = () => "Attiva/disattiva notifiche", Tn = () => "Alternar notificações", En = () => "切换通知", $ = () => "通知の切り替え", Dn = () => "알림 토글", On = () => "Переключить уведомления", kn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? xn(e) : n === "es" ? Sn(e) : n === "de" ? Cn(e) : n === "it" ? wn(e) : n === "pt" ? Tn(e) : n === "zh" ? En(e) : n === "ja" ? $(e) : n === "ko" ? Dn(e) : n === "ru" ? On(e) : bn(e);
}), An = () => "Use dark color scheme", jn = () => "Utiliser le schéma de couleurs sombres", Mn = () => "Usar esquema de colores oscuro", Nn = () => "Dunkles Farbschema verwenden", Pn = () => "Usa lo schema colori scuro", Fn = () => "Usar esquema de cores escuras", In = () => "使用深色配色方案", Ln = () => "ダークカラーの配色を使用する", Rn = () => "어두운 색상 테마 사용", zn = () => "Использовать темную цветовую схему", Bn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? jn(e) : n === "es" ? Mn(e) : n === "de" ? Nn(e) : n === "it" ? Pn(e) : n === "pt" ? Fn(e) : n === "zh" ? In(e) : n === "ja" ? Ln(e) : n === "ko" ? Rn(e) : n === "ru" ? zn(e) : An(e);
});
function Vn() {
	let t = e();
	return r("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [n("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: zt()
		}), r("div", {
			className: "space-y-4",
			children: [
				r("div", {
					className: "flex items-center justify-between",
					children: [r("div", { children: [n("p", {
						className: "text-sm font-medium text-foreground",
						children: Re()
					}), n("p", {
						className: "text-xs text-muted-foreground",
						children: Xt()
					})] }), n("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": kn(),
						children: n("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" })
					})]
				}),
				r("div", {
					className: "flex items-center justify-between",
					children: [r("div", { children: [n("p", {
						className: "text-sm font-medium text-foreground",
						children: ge()
					}), n("p", {
						className: "text-xs text-muted-foreground",
						children: Bn()
					})] }), n("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": yn(),
						children: n("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" })
					})]
				}),
				r("div", { children: [n("label", {
					htmlFor: t,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: De()
				}), r("select", {
					id: t,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						n("option", { children: Ye() }),
						n("option", { children: ot() }),
						n("option", { children: _t() }),
						n("option", { children: cn() }),
						n("option", { children: Ot() }),
						n("option", { children: ae() }),
						n("option", { children: G() })
					]
				})] })
			]
		})]
	});
}
h("en", { reload: !1 });
function Hn({ children: e }) {
	return n(t, { children: e });
}
function Un() {
	return n(Hn, { children: n(Vn, {}) });
}
export { Un as default };
