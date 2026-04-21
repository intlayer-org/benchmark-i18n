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
], f = [], p, m;
function h(e) {
	if (f.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (p === t) return m;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of f) if (new s(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return p = t, m = r, r;
}
function g(e) {
	let t = h(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : d;
}
var _ = void 0, v = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var y, b = !1, x = () => {
	if (_) {
		let e = _?.getStore()?.locale;
		if (e) return e;
	}
	let e = d;
	!v && typeof window < "u" && window.location?.href && (e = g(window.location.href));
	let t = S(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return b || (y = t, b = !0, C(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function S(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = E();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && y !== void 0) n = y;
		else if (O(t) && D.has(t)) {
			let e = D.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return T(t);
			}
		}
		let e = w(n);
		if (e) return e;
	}
}
var te = (e) => {
	e ? window.location.href = e : window.location.reload();
}, C = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = x();
	} catch {}
	let i = [], a = d;
	!v && typeof window < "u" && window.location?.href && (a = g(window.location.href));
	for (let t of a) if (t === "globalVariable") y = e;
	else if (t === "cookie") {
		if (v || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${u}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (O(t) && D.has(t)) {
		let n = D.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!v && n.reload && window.location && e !== r && te(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function w(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function T(e) {
	let t = w(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function E() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${l}=([^;]+)`))?.[2];
	return w(e);
}
var D = /* @__PURE__ */ new Map();
function O(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var k = () => "Preferences", A = () => "Préférences", j = () => "Preferencias", M = () => "Einstellungen", N = () => "Preferenze", P = () => "Preferências", F = () => "偏好设置", I = () => "設定", L = () => "환경 설정", R = () => "Настройки", z = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? k(e) : n === "fr" ? A(e) : n === "es" ? j(e) : n === "de" ? M(e) : n === "it" ? N(e) : n === "pt" ? P(e) : n === "zh" ? F(e) : n === "ja" ? I(e) : n === "ko" ? L(e) : R(e);
}), B = () => "Email Notifications", V = () => "Notifications par email", H = () => "Notificaciones por correo electrónico", U = () => "E-Mail-Benachrichtigungen", W = () => "Notifiche via email", G = () => "Notifiche por e-mail", K = () => "邮件通知", q = () => "メール通知", J = () => "이메일 알림", Y = () => "Уведомления по эл. почте", X = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? B(e) : n === "fr" ? V(e) : n === "es" ? H(e) : n === "de" ? U(e) : n === "it" ? W(e) : n === "pt" ? G(e) : n === "zh" ? K(e) : n === "ja" ? q(e) : n === "ko" ? J(e) : Y(e);
}), Z = () => "Receive weekly benchmark reports", Q = () => "Recevoir des rapports hebdomadaires de benchmark", ne = () => "Recibir informes semanales de benchmarks", re = () => "Wöchentliche Benchmark-Berichte erhalten", ie = () => "Ricevi rapporti settimanali sui benchmark", ae = () => "Receber relatórios semanais de benchmarks", oe = () => "接收每周基准测试报告", se = () => "毎週のベンチマークレポートを受け取る", ce = () => "주간 벤치마크 보고서 받기", le = () => "Получать еженедельные отчеты о бенчмарках", ue = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Z(e) : n === "fr" ? Q(e) : n === "es" ? ne(e) : n === "de" ? re(e) : n === "it" ? ie(e) : n === "pt" ? ae(e) : n === "zh" ? oe(e) : n === "ja" ? se(e) : n === "ko" ? ce(e) : le(e);
}), de = () => "Toggle notifications", fe = () => "Basculer les notifications", pe = () => "Alternar notificaciones", me = () => "Benachrichtigungen umschalten", he = () => "Attiva/disattiva notifiche", ge = () => "Alternar notificações", _e = () => "切换通知", ve = () => "通知の切り替え", ye = () => "알림 토글", be = () => "Переключить уведомления", xe = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? de(e) : n === "fr" ? fe(e) : n === "es" ? pe(e) : n === "de" ? me(e) : n === "it" ? he(e) : n === "pt" ? ge(e) : n === "zh" ? _e(e) : n === "ja" ? ve(e) : n === "ko" ? ye(e) : be(e);
}), Se = () => "Dark Mode", Ce = () => "Mode sombre", we = () => "Modo oscuro", Te = () => "Dunkelmodus", Ee = () => "Modalità scura", De = () => "Modo Escuro", Oe = () => "深色模式", ke = () => "ダークモード", Ae = () => "다크 모드", je = () => "Темный режим", Me = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Se(e) : n === "fr" ? Ce(e) : n === "es" ? we(e) : n === "de" ? Te(e) : n === "it" ? Ee(e) : n === "pt" ? De(e) : n === "zh" ? Oe(e) : n === "ja" ? ke(e) : n === "ko" ? Ae(e) : je(e);
}), Ne = () => "Use dark color scheme", Pe = () => "Utiliser le schéma de couleurs sombres", Fe = () => "Usar esquema de colores oscuro", Ie = () => "Dunkles Farbschema verwenden", Le = () => "Usa lo schema colori scuro", Re = () => "Usar esquema de cores escuras", ze = () => "使用深色配色方案", Be = () => "ダークカラーの配色を使用する", Ve = () => "어두운 색상 테마 사용", He = () => "Использовать темную цветовую схему", Ue = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Ne(e) : n === "fr" ? Pe(e) : n === "es" ? Fe(e) : n === "de" ? Ie(e) : n === "it" ? Le(e) : n === "pt" ? Re(e) : n === "zh" ? ze(e) : n === "ja" ? Be(e) : n === "ko" ? Ve(e) : He(e);
}), We = () => "Toggle dark mode", Ge = () => "Basculer le mode sombre", Ke = () => "Alternar modo oscuro", qe = () => "Dunkelmodus umschalten", Je = () => "Attiva/disattiva modalità scura", Ye = () => "Alternar modo escuro", Xe = () => "切换深色模式", Ze = () => "ダークモードの切り替え", Qe = () => "다크 모드 토글", $e = () => "Переключить темный режим", et = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? We(e) : n === "fr" ? Ge(e) : n === "es" ? Ke(e) : n === "de" ? qe(e) : n === "it" ? Je(e) : n === "pt" ? Ye(e) : n === "zh" ? Xe(e) : n === "ja" ? Ze(e) : n === "ko" ? Qe(e) : $e(e);
}), tt = () => "Default Language", nt = () => "Langue par défaut", rt = () => "Idioma predeterminado", it = () => "Standardsprache", at = () => "Lingua predefinita", ot = () => "Idioma Padrão", st = () => "默认语言", ct = () => "既定の言語", lt = () => "기본 언어", ut = () => "Язык по умолчанию", dt = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? tt(e) : n === "fr" ? nt(e) : n === "es" ? rt(e) : n === "de" ? it(e) : n === "it" ? at(e) : n === "pt" ? ot(e) : n === "zh" ? st(e) : n === "ja" ? ct(e) : n === "ko" ? lt(e) : ut(e);
}), ft = () => "English (en)", pt = () => "Anglais (en)", mt = () => "Inglés (en)", ht = () => "Englisch (en)", gt = () => "Inglese (en)", _t = () => "Inglês (en)", vt = () => "英语 (en)", yt = () => "英語 (en)", bt = () => "영어 (en)", xt = () => "Английский (en)", St = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? ft(e) : n === "fr" ? pt(e) : n === "es" ? mt(e) : n === "de" ? ht(e) : n === "it" ? gt(e) : n === "pt" ? _t(e) : n === "zh" ? vt(e) : n === "ja" ? yt(e) : n === "ko" ? bt(e) : xt(e);
}), Ct = () => "French (fr)", wt = () => "Français (fr)", Tt = () => "Francés (fr)", Et = () => "Französisch (fr)", Dt = () => "Francese (fr)", Ot = () => "Francês (fr)", kt = () => "法语 (fr)", At = () => "フランス語 (fr)", jt = () => "프랑스어 (fr)", Mt = () => "Французский (fr)", Nt = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Ct(e) : n === "fr" ? wt(e) : n === "es" ? Tt(e) : n === "de" ? Et(e) : n === "it" ? Dt(e) : n === "pt" ? Ot(e) : n === "zh" ? kt(e) : n === "ja" ? At(e) : n === "ko" ? jt(e) : Mt(e);
}), Pt = () => "German (de)", Ft = () => "Allemand (de)", It = () => "Alemán (de)", Lt = () => "Deutsch (de)", Rt = () => "Tedesco (de)", zt = () => "Alemão (de)", Bt = () => "德语 (de)", Vt = () => "ドイツ語 (de)", Ht = () => "독일어 (de)", Ut = () => "Немецкий (de)", Wt = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Pt(e) : n === "fr" ? Ft(e) : n === "es" ? It(e) : n === "de" ? Lt(e) : n === "it" ? Rt(e) : n === "pt" ? zt(e) : n === "zh" ? Bt(e) : n === "ja" ? Vt(e) : n === "ko" ? Ht(e) : Ut(e);
}), Gt = () => "Spanish (es)", Kt = () => "Espagnol (es)", qt = () => "Español (es)", Jt = () => "Spanisch (es)", Yt = () => "Spagnolo (es)", Xt = () => "Espanhol (es)", Zt = () => "西班牙语 (es)", Qt = () => "スペイン語 (es)", $t = () => "스페인어 (es)", en = () => "Испанский (es)", tn = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Gt(e) : n === "fr" ? Kt(e) : n === "es" ? qt(e) : n === "de" ? Jt(e) : n === "it" ? Yt(e) : n === "pt" ? Xt(e) : n === "zh" ? Zt(e) : n === "ja" ? Qt(e) : n === "ko" ? $t(e) : en(e);
}), nn = () => "Japanese (ja)", rn = () => "Japonais (ja)", an = () => "Japonés (ja)", on = () => "Japanisch (ja)", sn = () => "Giapponese (ja)", cn = () => "Japonês (ja)", ln = () => "日语 (ja)", un = () => "日本語 (ja)", dn = () => "일본어 (ja)", fn = () => "Японский (ja)", pn = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? nn(e) : n === "fr" ? rn(e) : n === "es" ? an(e) : n === "de" ? on(e) : n === "it" ? sn(e) : n === "pt" ? cn(e) : n === "zh" ? ln(e) : n === "ja" ? un(e) : n === "ko" ? dn(e) : fn(e);
}), mn = () => "Chinese Simplified (zh-CN)", hn = () => "Chinois simplifié (zh-CN)", gn = () => "Chino simplificado (zh-CN)", _n = () => "Chinesisch vereinfacht (zh-CN)", vn = () => "Cinese semplificato (zh-CN)", yn = () => "Chinês simplificado (zh-CN)", bn = () => "简体中文 (zh-CN)", xn = () => "中国語 簡体字 (zh-CN)", Sn = () => "중국어 간체 (zh-CN)", Cn = () => "Китайский упрощенный (zh-CN)", wn = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? mn(e) : n === "fr" ? hn(e) : n === "es" ? gn(e) : n === "de" ? _n(e) : n === "it" ? vn(e) : n === "pt" ? yn(e) : n === "zh" ? bn(e) : n === "ja" ? xn(e) : n === "ko" ? Sn(e) : Cn(e);
}), Tn = () => "Arabic (ar)", En = () => "Arabe (ar)", $ = () => "Árabe (ar)", Dn = () => "Arabisch (ar)", On = () => "Arabo (ar)", kn = () => "Árabe (ar)", An = () => "阿拉伯语 (ar)", jn = () => "アラビア語 (ar)", Mn = () => "아랍어 (ar)", Nn = () => "Арабский (ar)", Pn = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Tn(e) : n === "fr" ? En(e) : n === "es" ? $(e) : n === "de" ? Dn(e) : n === "it" ? On(e) : n === "pt" ? kn(e) : n === "zh" ? An(e) : n === "ja" ? jn(e) : n === "ko" ? Mn(e) : Nn(e);
});
function Fn() {
	let e = t();
	return o("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [a("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: z()
		}), o("div", {
			className: "space-y-4",
			children: [
				o("div", {
					className: "flex items-center justify-between",
					children: [o("div", { children: [a("p", {
						className: "text-sm font-medium text-foreground",
						children: X()
					}), a("p", {
						className: "text-xs text-muted-foreground",
						children: ue()
					})] }), a("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": xe(),
						children: a("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" })
					})]
				}),
				o("div", {
					className: "flex items-center justify-between",
					children: [o("div", { children: [a("p", {
						className: "text-sm font-medium text-foreground",
						children: Me()
					}), a("p", {
						className: "text-xs text-muted-foreground",
						children: Ue()
					})] }), a("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": et(),
						children: a("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" })
					})]
				}),
				o("div", { children: [a("label", {
					htmlFor: e,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: dt()
				}), o("select", {
					id: e,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						a("option", { children: St() }),
						a("option", { children: Nt() }),
						a("option", { children: Wt() }),
						a("option", { children: tn() }),
						a("option", { children: pn() }),
						a("option", { children: wn() }),
						a("option", { children: Pn() })
					]
				})] })
			]
		})]
	});
}
function In() {
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
function Ln(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Rn({ children: t }) {
	let o = ee().locale ?? "en", [s] = r(() => typeof performance < "u" ? performance.now() : 0);
	return n(() => {
		Ln("AppRoot", s);
	}, [s]), e(() => {
		C(o, { reload: !1 }), document.documentElement.lang = o;
	}, [o]), e(() => {
		In();
	}, []), a(i, { children: t });
}
function zn({ children: e }) {
	return a(Rn, { children: e });
}
function Bn() {
	return a(zn, { children: a(Fn, {}) });
}
export { Bn as default };
