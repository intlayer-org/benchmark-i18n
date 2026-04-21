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
	let t = g(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, v(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function g(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = x();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (C(t) && S.has(t)) {
			let e = S.get(t);
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
var _ = (e) => {
	e ? window.location.href = e : window.location.reload();
}, v = (e, t) => {
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
	else if (C(t) && S.has(t)) {
		let n = S.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let c = () => {
		n.reload && window.location && e !== r && _(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		c();
	});
	c();
};
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function b(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function x() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${o}=([^;]+)`))?.[2];
	return y(e);
}
var S = /* @__PURE__ */ new Map();
function C(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var w = () => "Preferences", T = () => "Préférences", E = () => "Preferencias", D = () => "Einstellungen", O = () => "Preferenze", k = () => "Preferências", A = () => "偏好设置", j = () => "設定", M = () => "환경 설정", N = () => "Настройки", P = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? w(e) : n === "fr" ? T(e) : n === "es" ? E(e) : n === "de" ? D(e) : n === "it" ? O(e) : n === "pt" ? k(e) : n === "zh" ? A(e) : n === "ja" ? j(e) : n === "ko" ? M(e) : N(e);
}), F = () => "Email Notifications", I = () => "Notifications par email", L = () => "Notificaciones por correo electrónico", R = () => "E-Mail-Benachrichtigungen", z = () => "Notifiche via email", B = () => "Notifiche por e-mail", V = () => "邮件通知", H = () => "メール通知", U = () => "이메일 알림", W = () => "Уведомления по эл. почте", G = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? F(e) : n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : W(e);
}), K = () => "Receive weekly benchmark reports", q = () => "Recevoir des rapports hebdomadaires de benchmark", J = () => "Recibir informes semanales de benchmarks", Y = () => "Wöchentliche Benchmark-Berichte erhalten", X = () => "Ricevi rapporti settimanali sui benchmark", Z = () => "Receber relatórios semanais de benchmarks", Q = () => "接收每周基准测试报告", ne = () => "毎週のベンチマークレポートを受け取る", re = () => "주간 벤치마크 보고서 받기", ie = () => "Получать еженедельные отчеты о бенчмарках", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? K(e) : n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? Z(e) : n === "zh" ? Q(e) : n === "ja" ? ne(e) : n === "ko" ? re(e) : ie(e);
}), oe = () => "Toggle notifications", se = () => "Basculer les notifications", ce = () => "Alternar notificaciones", le = () => "Benachrichtigungen umschalten", ue = () => "Attiva/disattiva notifiche", de = () => "Alternar notificações", fe = () => "切换通知", pe = () => "通知の切り替え", me = () => "알림 토글", he = () => "Переключить уведомления", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? oe(e) : n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : he(e);
}), _e = () => "Dark Mode", ve = () => "Mode sombre", ye = () => "Modo oscuro", be = () => "Dunkelmodus", xe = () => "Modalità scura", Se = () => "Modo Escuro", Ce = () => "深色模式", we = () => "ダークモード", Te = () => "다크 모드", Ee = () => "Темный режим", De = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? _e(e) : n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : Ee(e);
}), Oe = () => "Use dark color scheme", ke = () => "Utiliser le schéma de couleurs sombres", Ae = () => "Usar esquema de colores oscuro", je = () => "Dunkles Farbschema verwenden", Me = () => "Usa lo schema colori scuro", Ne = () => "Usar esquema de cores escuras", Pe = () => "使用深色配色方案", Fe = () => "ダークカラーの配色を使用する", Ie = () => "어두운 색상 테마 사용", Le = () => "Использовать темную цветовую схему", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Oe(e) : n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : Le(e);
}), ze = () => "Toggle dark mode", Be = () => "Basculer le mode sombre", Ve = () => "Alternar modo oscuro", He = () => "Dunkelmodus umschalten", Ue = () => "Attiva/disattiva modalità scura", We = () => "Alternar modo escuro", Ge = () => "切换深色模式", Ke = () => "ダークモードの切り替え", qe = () => "다크 모드 토글", Je = () => "Переключить темный режим", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ze(e) : n === "fr" ? Be(e) : n === "es" ? Ve(e) : n === "de" ? He(e) : n === "it" ? Ue(e) : n === "pt" ? We(e) : n === "zh" ? Ge(e) : n === "ja" ? Ke(e) : n === "ko" ? qe(e) : Je(e);
}), Xe = () => "Default Language", Ze = () => "Langue par défaut", Qe = () => "Idioma predeterminado", $e = () => "Standardsprache", et = () => "Lingua predefinita", tt = () => "Idioma Padrão", nt = () => "默认语言", rt = () => "既定の言語", it = () => "기본 언어", at = () => "Язык по умолчанию", ot = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Xe(e) : n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : at(e);
}), st = () => "English (en)", ct = () => "Anglais (en)", lt = () => "Inglés (en)", ut = () => "Englisch (en)", dt = () => "Inglese (en)", ft = () => "Inglês (en)", pt = () => "英语 (en)", mt = () => "英語 (en)", ht = () => "영어 (en)", gt = () => "Английский (en)", _t = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? st(e) : n === "fr" ? ct(e) : n === "es" ? lt(e) : n === "de" ? ut(e) : n === "it" ? dt(e) : n === "pt" ? ft(e) : n === "zh" ? pt(e) : n === "ja" ? mt(e) : n === "ko" ? ht(e) : gt(e);
}), vt = () => "French (fr)", yt = () => "Français (fr)", bt = () => "Francés (fr)", xt = () => "Französisch (fr)", St = () => "Francese (fr)", Ct = () => "Francês (fr)", wt = () => "法语 (fr)", Tt = () => "フランス語 (fr)", Et = () => "프랑스어 (fr)", Dt = () => "Французский (fr)", Ot = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? vt(e) : n === "fr" ? yt(e) : n === "es" ? bt(e) : n === "de" ? xt(e) : n === "it" ? St(e) : n === "pt" ? Ct(e) : n === "zh" ? wt(e) : n === "ja" ? Tt(e) : n === "ko" ? Et(e) : Dt(e);
}), kt = () => "German (de)", At = () => "Allemand (de)", jt = () => "Alemán (de)", Mt = () => "Deutsch (de)", Nt = () => "Tedesco (de)", Pt = () => "Alemão (de)", Ft = () => "德语 (de)", It = () => "ドイツ語 (de)", Lt = () => "독일어 (de)", Rt = () => "Немецкий (de)", zt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? kt(e) : n === "fr" ? At(e) : n === "es" ? jt(e) : n === "de" ? Mt(e) : n === "it" ? Nt(e) : n === "pt" ? Pt(e) : n === "zh" ? Ft(e) : n === "ja" ? It(e) : n === "ko" ? Lt(e) : Rt(e);
}), Bt = () => "Spanish (es)", Vt = () => "Espagnol (es)", Ht = () => "Español (es)", Ut = () => "Spanisch (es)", Wt = () => "Spagnolo (es)", Gt = () => "Espanhol (es)", Kt = () => "西班牙语 (es)", qt = () => "スペイン語 (es)", Jt = () => "스페인어 (es)", Yt = () => "Испанский (es)", Xt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Bt(e) : n === "fr" ? Vt(e) : n === "es" ? Ht(e) : n === "de" ? Ut(e) : n === "it" ? Wt(e) : n === "pt" ? Gt(e) : n === "zh" ? Kt(e) : n === "ja" ? qt(e) : n === "ko" ? Jt(e) : Yt(e);
}), Zt = () => "Japanese (ja)", Qt = () => "Japonais (ja)", $t = () => "Japonés (ja)", en = () => "Japanisch (ja)", tn = () => "Giapponese (ja)", nn = () => "Japonês (ja)", rn = () => "日语 (ja)", an = () => "日本語 (ja)", on = () => "일본어 (ja)", sn = () => "Японский (ja)", cn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Zt(e) : n === "fr" ? Qt(e) : n === "es" ? $t(e) : n === "de" ? en(e) : n === "it" ? tn(e) : n === "pt" ? nn(e) : n === "zh" ? rn(e) : n === "ja" ? an(e) : n === "ko" ? on(e) : sn(e);
}), ln = () => "Chinese Simplified (zh-CN)", un = () => "Chinois simplifié (zh-CN)", dn = () => "Chino simplificado (zh-CN)", fn = () => "Chinesisch vereinfacht (zh-CN)", pn = () => "Cinese semplificato (zh-CN)", mn = () => "Chinês simplificado (zh-CN)", hn = () => "简体中文 (zh-CN)", gn = () => "中国語 簡体字 (zh-CN)", _n = () => "중국어 간체 (zh-CN)", vn = () => "Китайский упрощенный (zh-CN)", yn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ln(e) : n === "fr" ? un(e) : n === "es" ? dn(e) : n === "de" ? fn(e) : n === "it" ? pn(e) : n === "pt" ? mn(e) : n === "zh" ? hn(e) : n === "ja" ? gn(e) : n === "ko" ? _n(e) : vn(e);
}), $ = () => "Arabic (ar)", bn = () => "Arabe (ar)", xn = () => "Árabe (ar)", Sn = () => "Arabisch (ar)", Cn = () => "Arabo (ar)", wn = () => "Árabe (ar)", Tn = () => "阿拉伯语 (ar)", En = () => "アラビア語 (ar)", Dn = () => "아랍어 (ar)", On = () => "Арабский (ar)", kn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? $(e) : n === "fr" ? bn(e) : n === "es" ? xn(e) : n === "de" ? Sn(e) : n === "it" ? Cn(e) : n === "pt" ? wn(e) : n === "zh" ? Tn(e) : n === "ja" ? En(e) : n === "ko" ? Dn(e) : On(e);
});
function An() {
	let t = e();
	return r("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [n("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: P()
		}), r("div", {
			className: "space-y-4",
			children: [
				r("div", {
					className: "flex items-center justify-between",
					children: [r("div", { children: [n("p", {
						className: "text-sm font-medium text-foreground",
						children: G()
					}), n("p", {
						className: "text-xs text-muted-foreground",
						children: ae()
					})] }), n("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": ge(),
						children: n("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" })
					})]
				}),
				r("div", {
					className: "flex items-center justify-between",
					children: [r("div", { children: [n("p", {
						className: "text-sm font-medium text-foreground",
						children: De()
					}), n("p", {
						className: "text-xs text-muted-foreground",
						children: Re()
					})] }), n("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": Ye(),
						children: n("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" })
					})]
				}),
				r("div", { children: [n("label", {
					htmlFor: t,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: ot()
				}), r("select", {
					id: t,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						n("option", { children: _t() }),
						n("option", { children: Ot() }),
						n("option", { children: zt() }),
						n("option", { children: Xt() }),
						n("option", { children: cn() }),
						n("option", { children: yn() }),
						n("option", { children: kn() })
					]
				})] })
			]
		})]
	});
}
v("en", { reload: !1 });
function jn({ children: e }) {
	return n(t, { children: e });
}
function Mn() {
	return n(jn, { children: n(An, {}) });
}
export { Mn as default };
