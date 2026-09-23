import { useEffect as e, useId as t, useLayoutEffect as n, useState as r } from "react";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
import { useParams as s } from "next/navigation";
var c = {}, l = [
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
], u = "PARAGLIDE_LOCALE", d = 3456e4, f = [
	"cookie",
	"globalVariable",
	"baseLocale"
], p = [], m = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	let e = f;
	!m && typeof window < "u" && window.location?.href && (e = I(window.location.href));
	let t = v(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, y(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function v(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = A();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (R(t) && L.has(t)) {
			let e = L.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return S(t);
			}
		}
		let e = x(n);
		if (e) return e;
	}
}
var ee = (e) => {
	e ? window.location.href = e : window.location.reload();
}, y = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = _();
	} catch {}
	let i = [], a = f;
	!m && typeof window < "u" && window.location?.href && (a = I(window.location.href));
	for (let t of a) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${u}=${e}; path=/; max-age=${d}`;
		document.cookie = t, O();
	} else if (t === "baseLocale") continue;
	else if (R(t) && L.has(t)) {
		let n = L.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!m && n.reload && window.location && e !== r && ee(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, b = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function x(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of l) if (e.toLowerCase() === t) return e;
}
function S(e) {
	let t = x(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${l.join(", ")}`);
}
function C(e) {
	return e;
}
function w(e, t) {
	return e.exec(t.href);
}
var T = u.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), te = RegExp(`(?:^|;\\s*)${T}=([^;]*)`), E = Symbol(), D = E;
function O() {
	D = E;
}
function k() {
	typeof queueMicrotask == "function" ? queueMicrotask(O) : Promise.resolve().then(O);
}
function A() {
	if (typeof document > "u") return;
	if (D !== E) return D;
	let e = document.cookie.match(te)?.[1];
	return D = x(e), k(), D;
}
function j(e) {
	return M(e);
}
function M(e) {
	let t = C(typeof e == "string" ? new URL(e, b()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && x(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), C(t);
}
var N, P;
function F(e) {
	if (p.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (N === t) return P;
	let n = C(new URL(t, "http://example.com")), r = j(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of p) if (w(new c(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return N = t, P = a, a;
}
function I(e) {
	let t = F(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : f;
}
var L = /* @__PURE__ */ new Map();
function R(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var z = () => "Arabic (ar)", B = () => "Arabe (ar)", V = () => "Árabe (ar)", H = () => "Arabisch (ar)", U = () => "Arabo (ar)", W = () => "Árabe (ar)", G = () => "阿拉伯语 (ar)", K = () => "アラビア語 (ar)", q = () => "아랍어 (ar)", J = () => "Арабский (ar)", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? B(e) : n === "es" ? V(e) : n === "de" ? H(e) : n === "it" ? U(e) : n === "pt" ? W(e) : n === "zh" ? G(e) : n === "ja" ? K(e) : n === "ko" ? q(e) : n === "ru" ? J(e) : z(e);
}), X = () => "Chinese Simplified (zh-CN)", Z = () => "Chinois simplifié (zh-CN)", Q = () => "Chino simplificado (zh-CN)", ne = () => "Chinesisch vereinfacht (zh-CN)", re = () => "Cinese semplificato (zh-CN)", ie = () => "Chinês simplificado (zh-CN)", ae = () => "简体中文 (zh-CN)", oe = () => "中国語 簡体字 (zh-CN)", se = () => "중국어 간체 (zh-CN)", ce = () => "Китайский упрощенный (zh-CN)", le = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Z(e) : n === "es" ? Q(e) : n === "de" ? ne(e) : n === "it" ? re(e) : n === "pt" ? ie(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : n === "ru" ? ce(e) : X(e);
}), ue = () => "Dark Mode", de = () => "Mode sombre", fe = () => "Modo oscuro", pe = () => "Dunkelmodus", me = () => "Modalità scura", he = () => "Modo Escuro", ge = () => "深色模式", _e = () => "ダークモード", ve = () => "다크 모드", ye = () => "Темный режим", be = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? de(e) : n === "es" ? fe(e) : n === "de" ? pe(e) : n === "it" ? me(e) : n === "pt" ? he(e) : n === "zh" ? ge(e) : n === "ja" ? _e(e) : n === "ko" ? ve(e) : n === "ru" ? ye(e) : ue(e);
}), xe = () => "Default Language", Se = () => "Langue par défaut", Ce = () => "Idioma predeterminado", we = () => "Standardsprache", Te = () => "Lingua predefinita", Ee = () => "Idioma Padrão", De = () => "默认语言", Oe = () => "既定の言語", ke = () => "기본 언어", Ae = () => "Язык по умолчанию", je = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Se(e) : n === "es" ? Ce(e) : n === "de" ? we(e) : n === "it" ? Te(e) : n === "pt" ? Ee(e) : n === "zh" ? De(e) : n === "ja" ? Oe(e) : n === "ko" ? ke(e) : n === "ru" ? Ae(e) : xe(e);
}), Me = () => "Email Notifications", Ne = () => "Notifications par email", Pe = () => "Notificaciones por correo electrónico", Fe = () => "E-Mail-Benachrichtigungen", Ie = () => "Notifiche via email", Le = () => "Notifiche por e-mail", Re = () => "邮件通知", ze = () => "メール通知", Be = () => "이메일 알림", Ve = () => "Уведомления по эл. почте", He = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Ne(e) : n === "es" ? Pe(e) : n === "de" ? Fe(e) : n === "it" ? Ie(e) : n === "pt" ? Le(e) : n === "zh" ? Re(e) : n === "ja" ? ze(e) : n === "ko" ? Be(e) : n === "ru" ? Ve(e) : Me(e);
}), Ue = () => "English (en)", We = () => "Anglais (en)", Ge = () => "Inglés (en)", Ke = () => "Englisch (en)", qe = () => "Inglese (en)", Je = () => "Inglês (en)", Ye = () => "英语 (en)", Xe = () => "英語 (en)", Ze = () => "영어 (en)", Qe = () => "Английский (en)", $e = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? We(e) : n === "es" ? Ge(e) : n === "de" ? Ke(e) : n === "it" ? qe(e) : n === "pt" ? Je(e) : n === "zh" ? Ye(e) : n === "ja" ? Xe(e) : n === "ko" ? Ze(e) : n === "ru" ? Qe(e) : Ue(e);
}), et = () => "French (fr)", tt = () => "Français (fr)", nt = () => "Francés (fr)", rt = () => "Französisch (fr)", it = () => "Francese (fr)", at = () => "Francês (fr)", ot = () => "法语 (fr)", st = () => "フランス語 (fr)", ct = () => "프랑스어 (fr)", lt = () => "Французский (fr)", ut = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? tt(e) : n === "es" ? nt(e) : n === "de" ? rt(e) : n === "it" ? it(e) : n === "pt" ? at(e) : n === "zh" ? ot(e) : n === "ja" ? st(e) : n === "ko" ? ct(e) : n === "ru" ? lt(e) : et(e);
}), dt = () => "German (de)", ft = () => "Allemand (de)", pt = () => "Alemán (de)", mt = () => "Deutsch (de)", ht = () => "Tedesco (de)", gt = () => "Alemão (de)", _t = () => "德语 (de)", vt = () => "ドイツ語 (de)", yt = () => "독일어 (de)", bt = () => "Немецкий (de)", xt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? ft(e) : n === "es" ? pt(e) : n === "de" ? mt(e) : n === "it" ? ht(e) : n === "pt" ? gt(e) : n === "zh" ? _t(e) : n === "ja" ? vt(e) : n === "ko" ? yt(e) : n === "ru" ? bt(e) : dt(e);
}), St = () => "Japanese (ja)", Ct = () => "Japonais (ja)", wt = () => "Japonés (ja)", Tt = () => "Japanisch (ja)", Et = () => "Giapponese (ja)", Dt = () => "Japonês (ja)", Ot = () => "日语 (ja)", kt = () => "日本語 (ja)", At = () => "일본어 (ja)", jt = () => "Японский (ja)", Mt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Ct(e) : n === "es" ? wt(e) : n === "de" ? Tt(e) : n === "it" ? Et(e) : n === "pt" ? Dt(e) : n === "zh" ? Ot(e) : n === "ja" ? kt(e) : n === "ko" ? At(e) : n === "ru" ? jt(e) : St(e);
}), Nt = () => "Preferences", Pt = () => "Préférences", Ft = () => "Preferencias", It = () => "Einstellungen", Lt = () => "Preferenze", Rt = () => "Preferências", zt = () => "偏好设置", Bt = () => "設定", Vt = () => "환경 설정", Ht = () => "Настройки", Ut = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Pt(e) : n === "es" ? Ft(e) : n === "de" ? It(e) : n === "it" ? Lt(e) : n === "pt" ? Rt(e) : n === "zh" ? zt(e) : n === "ja" ? Bt(e) : n === "ko" ? Vt(e) : n === "ru" ? Ht(e) : Nt(e);
}), Wt = () => "Receive weekly benchmark reports", Gt = () => "Recevoir des rapports hebdomadaires de benchmark", Kt = () => "Recibir informes semanales de benchmarks", qt = () => "Wöchentliche Benchmark-Berichte erhalten", Jt = () => "Ricevi rapporti settimanali sui benchmark", Yt = () => "Receber relatórios semanais de benchmarks", Xt = () => "接收每周基准测试报告", Zt = () => "毎週のベンチマークレポートを受け取る", Qt = () => "주간 벤치마크 보고서 받기", $t = () => "Получать еженедельные отчеты о бенчмарках", en = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Gt(e) : n === "es" ? Kt(e) : n === "de" ? qt(e) : n === "it" ? Jt(e) : n === "pt" ? Yt(e) : n === "zh" ? Xt(e) : n === "ja" ? Zt(e) : n === "ko" ? Qt(e) : n === "ru" ? $t(e) : Wt(e);
}), tn = () => "Spanish (es)", nn = () => "Espagnol (es)", rn = () => "Español (es)", an = () => "Spanisch (es)", on = () => "Spagnolo (es)", sn = () => "Espanhol (es)", cn = () => "西班牙语 (es)", ln = () => "スペイン語 (es)", un = () => "스페인어 (es)", dn = () => "Испанский (es)", fn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? nn(e) : n === "es" ? rn(e) : n === "de" ? an(e) : n === "it" ? on(e) : n === "pt" ? sn(e) : n === "zh" ? cn(e) : n === "ja" ? ln(e) : n === "ko" ? un(e) : n === "ru" ? dn(e) : tn(e);
}), pn = () => "Toggle dark mode", mn = () => "Basculer le mode sombre", hn = () => "Alternar modo oscuro", gn = () => "Dunkelmodus umschalten", _n = () => "Attiva/disattiva modalità scura", vn = () => "Alternar modo escuro", yn = () => "切换深色模式", bn = () => "ダークモードの切り替え", xn = () => "다크 모드 토글", Sn = () => "Переключить темный режим", Cn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? mn(e) : n === "es" ? hn(e) : n === "de" ? gn(e) : n === "it" ? _n(e) : n === "pt" ? vn(e) : n === "zh" ? yn(e) : n === "ja" ? bn(e) : n === "ko" ? xn(e) : n === "ru" ? Sn(e) : pn(e);
}), wn = () => "Toggle notifications", Tn = () => "Basculer les notifications", En = () => "Alternar notificaciones", Dn = () => "Benachrichtigungen umschalten", On = () => "Attiva/disattiva notifiche", kn = () => "Alternar notificações", An = () => "切换通知", jn = () => "通知の切り替え", Mn = () => "알림 토글", Nn = () => "Переключить уведомления", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Tn(e) : n === "es" ? En(e) : n === "de" ? Dn(e) : n === "it" ? On(e) : n === "pt" ? kn(e) : n === "zh" ? An(e) : n === "ja" ? jn(e) : n === "ko" ? Mn(e) : n === "ru" ? Nn(e) : wn(e);
}), Pn = () => "Use dark color scheme", Fn = () => "Utiliser le schéma de couleurs sombres", In = () => "Usar esquema de colores oscuro", Ln = () => "Dunkles Farbschema verwenden", Rn = () => "Usa lo schema colori scuro", zn = () => "Usar esquema de cores escuras", Bn = () => "使用深色配色方案", Vn = () => "ダークカラーの配色を使用する", Hn = () => "어두운 색상 테마 사용", Un = () => "Использовать темную цветовую схему", Wn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Fn(e) : n === "es" ? In(e) : n === "de" ? Ln(e) : n === "it" ? Rn(e) : n === "pt" ? zn(e) : n === "zh" ? Bn(e) : n === "ja" ? Vn(e) : n === "ko" ? Hn(e) : n === "ru" ? Un(e) : Pn(e);
});
function Gn() {
	let e = t();
	return o("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [a("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: Ut()
		}), o("div", {
			className: "space-y-4",
			children: [
				o("div", {
					className: "flex items-center justify-between",
					children: [o("div", { children: [a("p", {
						className: "text-sm font-medium text-foreground",
						children: He()
					}), a("p", {
						className: "text-xs text-muted-foreground",
						children: en()
					})] }), a("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": $(),
						children: a("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" })
					})]
				}),
				o("div", {
					className: "flex items-center justify-between",
					children: [o("div", { children: [a("p", {
						className: "text-sm font-medium text-foreground",
						children: be()
					}), a("p", {
						className: "text-xs text-muted-foreground",
						children: Wn()
					})] }), a("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": Cn(),
						children: a("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" })
					})]
				}),
				o("div", { children: [a("label", {
					htmlFor: e,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: je()
				}), o("select", {
					id: e,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						a("option", { children: $e() }),
						a("option", { children: ut() }),
						a("option", { children: xt() }),
						a("option", { children: fn() }),
						a("option", { children: Mt() }),
						a("option", { children: le() }),
						a("option", { children: Y() })
					]
				})] })
			]
		})]
	});
}
function Kn() {
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
function qn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Jn({ children: t }) {
	let o = s().locale ?? "en", [c] = r(() => typeof performance < "u" ? performance.now() : 0);
	return n(() => {
		qn("AppRoot", c);
	}, [c]), e(() => {
		y(o, { reload: !1 }), document.documentElement.lang = o;
	}, [o]), e(() => {
		Kn();
	}, []), a(i, { children: t });
}
function Yn({ children: e }) {
	return a(Jn, { children: e });
}
function Xn() {
	return a(Yn, { children: a(Gn, {}) });
}
export { Xn as default };
