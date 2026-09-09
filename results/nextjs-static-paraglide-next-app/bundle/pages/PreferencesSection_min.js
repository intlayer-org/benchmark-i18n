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
	!f && typeof window < "u" && window.location?.href && (e = N(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, _(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = D();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (F(t) && P.has(t)) {
			let e = P.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return y(t);
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
	!f && typeof window < "u" && window.location?.href && (a = N(window.location.href));
	for (let t of a) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (f || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, E();
	} else if (t === "baseLocale") continue;
	else if (F(t) && P.has(t)) {
		let n = P.get(t);
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
function y(e) {
	let t = v(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function b(e) {
	return e;
}
function x(e, t) {
	return e.exec(t.href);
}
var S = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), C = RegExp(`(?:^|;\\s*)${S}=([^;]*)`), w = Symbol(), T = w;
function E() {
	T = w;
}
function re() {
	typeof queueMicrotask == "function" ? queueMicrotask(E) : Promise.resolve().then(E);
}
function D() {
	if (typeof document > "u") return;
	if (T !== w) return T;
	let e = document.cookie.match(C)?.[1];
	return T = v(e), re(), T;
}
function O(e) {
	return k(e);
}
function k(e) {
	let t = b(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && v(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), b(t);
}
var A, j;
function M(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (A === t) return j;
	let n = b(new URL(t, "http://example.com")), r = O(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of d) if (x(new s(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return A = t, j = a, a;
}
function N(e) {
	let t = M(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var P = /* @__PURE__ */ new Map();
function F(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var I = () => "Arabic (ar)", L = () => "Arabe (ar)", R = () => "Árabe (ar)", z = () => "Arabisch (ar)", B = () => "Arabo (ar)", V = () => "Árabe (ar)", H = () => "阿拉伯语 (ar)", U = () => "アラビア語 (ar)", W = () => "아랍어 (ar)", G = () => "Арабский (ar)", K = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : n === "ru" ? G(e) : I(e);
}), q = () => "Chinese Simplified (zh-CN)", J = () => "Chinois simplifié (zh-CN)", Y = () => "Chino simplificado (zh-CN)", X = () => "Chinesisch vereinfacht (zh-CN)", ie = () => "Cinese semplificato (zh-CN)", ae = () => "Chinês simplificado (zh-CN)", oe = () => "简体中文 (zh-CN)", se = () => "中国語 簡体字 (zh-CN)", ce = () => "중국어 간체 (zh-CN)", le = () => "Китайский упрощенный (zh-CN)", ue = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? ie(e) : n === "pt" ? ae(e) : n === "zh" ? oe(e) : n === "ja" ? se(e) : n === "ko" ? ce(e) : n === "ru" ? le(e) : q(e);
}), de = () => "Dark Mode", fe = () => "Mode sombre", pe = () => "Modo oscuro", me = () => "Dunkelmodus", he = () => "Modalità scura", ge = () => "Modo Escuro", _e = () => "深色模式", ve = () => "ダークモード", ye = () => "다크 모드", be = () => "Темный режим", xe = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? fe(e) : n === "es" ? pe(e) : n === "de" ? me(e) : n === "it" ? he(e) : n === "pt" ? ge(e) : n === "zh" ? _e(e) : n === "ja" ? ve(e) : n === "ko" ? ye(e) : n === "ru" ? be(e) : de(e);
}), Se = () => "Default Language", Ce = () => "Langue par défaut", we = () => "Idioma predeterminado", Te = () => "Standardsprache", Ee = () => "Lingua predefinita", De = () => "Idioma Padrão", Oe = () => "默认语言", ke = () => "既定の言語", Ae = () => "기본 언어", je = () => "Язык по умолчанию", Me = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ce(e) : n === "es" ? we(e) : n === "de" ? Te(e) : n === "it" ? Ee(e) : n === "pt" ? De(e) : n === "zh" ? Oe(e) : n === "ja" ? ke(e) : n === "ko" ? Ae(e) : n === "ru" ? je(e) : Se(e);
}), Ne = () => "Email Notifications", Pe = () => "Notifications par email", Fe = () => "Notificaciones por correo electrónico", Ie = () => "E-Mail-Benachrichtigungen", Le = () => "Notifiche via email", Re = () => "Notifiche por e-mail", ze = () => "邮件通知", Be = () => "メール通知", Ve = () => "이메일 알림", He = () => "Уведомления по эл. почте", Ue = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Pe(e) : n === "es" ? Fe(e) : n === "de" ? Ie(e) : n === "it" ? Le(e) : n === "pt" ? Re(e) : n === "zh" ? ze(e) : n === "ja" ? Be(e) : n === "ko" ? Ve(e) : n === "ru" ? He(e) : Ne(e);
}), We = () => "English (en)", Ge = () => "Anglais (en)", Ke = () => "Inglés (en)", qe = () => "Englisch (en)", Je = () => "Inglese (en)", Ye = () => "Inglês (en)", Xe = () => "英语 (en)", Ze = () => "英語 (en)", Qe = () => "영어 (en)", $e = () => "Английский (en)", et = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ge(e) : n === "es" ? Ke(e) : n === "de" ? qe(e) : n === "it" ? Je(e) : n === "pt" ? Ye(e) : n === "zh" ? Xe(e) : n === "ja" ? Ze(e) : n === "ko" ? Qe(e) : n === "ru" ? $e(e) : We(e);
}), tt = () => "French (fr)", nt = () => "Français (fr)", rt = () => "Francés (fr)", it = () => "Französisch (fr)", at = () => "Francese (fr)", ot = () => "Francês (fr)", st = () => "法语 (fr)", ct = () => "フランス語 (fr)", lt = () => "프랑스어 (fr)", ut = () => "Французский (fr)", dt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? nt(e) : n === "es" ? rt(e) : n === "de" ? it(e) : n === "it" ? at(e) : n === "pt" ? ot(e) : n === "zh" ? st(e) : n === "ja" ? ct(e) : n === "ko" ? lt(e) : n === "ru" ? ut(e) : tt(e);
}), ft = () => "German (de)", pt = () => "Allemand (de)", mt = () => "Alemán (de)", ht = () => "Deutsch (de)", gt = () => "Tedesco (de)", _t = () => "Alemão (de)", vt = () => "德语 (de)", yt = () => "ドイツ語 (de)", bt = () => "독일어 (de)", xt = () => "Немецкий (de)", St = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? pt(e) : n === "es" ? mt(e) : n === "de" ? ht(e) : n === "it" ? gt(e) : n === "pt" ? _t(e) : n === "zh" ? vt(e) : n === "ja" ? yt(e) : n === "ko" ? bt(e) : n === "ru" ? xt(e) : ft(e);
}), Ct = () => "Japanese (ja)", wt = () => "Japonais (ja)", Tt = () => "Japonés (ja)", Et = () => "Japanisch (ja)", Dt = () => "Giapponese (ja)", Ot = () => "Japonês (ja)", kt = () => "日语 (ja)", At = () => "日本語 (ja)", jt = () => "일본어 (ja)", Mt = () => "Японский (ja)", Nt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? wt(e) : n === "es" ? Tt(e) : n === "de" ? Et(e) : n === "it" ? Dt(e) : n === "pt" ? Ot(e) : n === "zh" ? kt(e) : n === "ja" ? At(e) : n === "ko" ? jt(e) : n === "ru" ? Mt(e) : Ct(e);
}), Pt = () => "Preferences", Ft = () => "Préférences", It = () => "Preferencias", Lt = () => "Einstellungen", Rt = () => "Preferenze", zt = () => "Preferências", Bt = () => "偏好设置", Vt = () => "設定", Ht = () => "환경 설정", Ut = () => "Настройки", Wt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ft(e) : n === "es" ? It(e) : n === "de" ? Lt(e) : n === "it" ? Rt(e) : n === "pt" ? zt(e) : n === "zh" ? Bt(e) : n === "ja" ? Vt(e) : n === "ko" ? Ht(e) : n === "ru" ? Ut(e) : Pt(e);
}), Gt = () => "Receive weekly benchmark reports", Kt = () => "Recevoir des rapports hebdomadaires de benchmark", qt = () => "Recibir informes semanales de benchmarks", Jt = () => "Wöchentliche Benchmark-Berichte erhalten", Yt = () => "Ricevi rapporti settimanali sui benchmark", Xt = () => "Receber relatórios semanais de benchmarks", Zt = () => "接收每周基准测试报告", Qt = () => "毎週のベンチマークレポートを受け取る", $t = () => "주간 벤치마크 보고서 받기", en = () => "Получать еженедельные отчеты о бенчмарках", tn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Kt(e) : n === "es" ? qt(e) : n === "de" ? Jt(e) : n === "it" ? Yt(e) : n === "pt" ? Xt(e) : n === "zh" ? Zt(e) : n === "ja" ? Qt(e) : n === "ko" ? $t(e) : n === "ru" ? en(e) : Gt(e);
}), nn = () => "Spanish (es)", rn = () => "Espagnol (es)", an = () => "Español (es)", on = () => "Spanisch (es)", sn = () => "Spagnolo (es)", cn = () => "Espanhol (es)", ln = () => "西班牙语 (es)", un = () => "スペイン語 (es)", dn = () => "스페인어 (es)", fn = () => "Испанский (es)", pn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? rn(e) : n === "es" ? an(e) : n === "de" ? on(e) : n === "it" ? sn(e) : n === "pt" ? cn(e) : n === "zh" ? ln(e) : n === "ja" ? un(e) : n === "ko" ? dn(e) : n === "ru" ? fn(e) : nn(e);
}), mn = () => "Toggle dark mode", hn = () => "Basculer le mode sombre", gn = () => "Alternar modo oscuro", _n = () => "Dunkelmodus umschalten", vn = () => "Attiva/disattiva modalità scura", yn = () => "Alternar modo escuro", bn = () => "切换深色模式", xn = () => "ダークモードの切り替え", Sn = () => "다크 모드 토글", Cn = () => "Переключить темный режим", wn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? hn(e) : n === "es" ? gn(e) : n === "de" ? _n(e) : n === "it" ? vn(e) : n === "pt" ? yn(e) : n === "zh" ? bn(e) : n === "ja" ? xn(e) : n === "ko" ? Sn(e) : n === "ru" ? Cn(e) : mn(e);
}), Tn = () => "Toggle notifications", En = () => "Basculer les notifications", Dn = () => "Alternar notificaciones", On = () => "Benachrichtigungen umschalten", kn = () => "Attiva/disattiva notifiche", An = () => "Alternar notificações", jn = () => "切换通知", Mn = () => "通知の切り替え", Nn = () => "알림 토글", Pn = () => "Переключить уведомления", Fn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? En(e) : n === "es" ? Dn(e) : n === "de" ? On(e) : n === "it" ? kn(e) : n === "pt" ? An(e) : n === "zh" ? jn(e) : n === "ja" ? Mn(e) : n === "ko" ? Nn(e) : n === "ru" ? Pn(e) : Tn(e);
}), Z = () => "Use dark color scheme", In = () => "Utiliser le schéma de couleurs sombres", Ln = () => "Usar esquema de colores oscuro", Rn = () => "Dunkles Farbschema verwenden", zn = () => "Usa lo schema colori scuro", Bn = () => "Usar esquema de cores escuras", Vn = () => "使用深色配色方案", Hn = () => "ダークカラーの配色を使用する", Un = () => "어두운 색상 테마 사용", Wn = () => "Использовать темную цветовую схему", Gn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? In(e) : n === "es" ? Ln(e) : n === "de" ? Rn(e) : n === "it" ? zn(e) : n === "pt" ? Bn(e) : n === "zh" ? Vn(e) : n === "ja" ? Hn(e) : n === "ko" ? Un(e) : n === "ru" ? Wn(e) : Z(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/settings/PreferencesSection.tsx";
function Kn() {
	let e = t();
	return a("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [a("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: Wt()
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 11,
			columnNumber: 7
		}, this), a("div", {
			className: "space-y-4",
			children: [
				a("div", {
					className: "flex items-center justify-between",
					children: [a("div", { children: [a("p", {
						className: "text-sm font-medium text-foreground",
						children: Ue()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 17,
						columnNumber: 13
					}, this), a("p", {
						className: "text-xs text-muted-foreground",
						children: tn()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 20,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: Q,
						lineNumber: 16,
						columnNumber: 11
					}, this), a("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": Fn(),
						children: a("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" }, void 0, !1, {
							fileName: Q,
							lineNumber: 29,
							columnNumber: 13
						}, this)
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 24,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 15,
					columnNumber: 9
				}, this),
				a("div", {
					className: "flex items-center justify-between",
					children: [a("div", { children: [a("p", {
						className: "text-sm font-medium text-foreground",
						children: xe()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 34,
						columnNumber: 13
					}, this), a("p", {
						className: "text-xs text-muted-foreground",
						children: Gn()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 37,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: Q,
						lineNumber: 33,
						columnNumber: 11
					}, this), a("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": wn(),
						children: a("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" }, void 0, !1, {
							fileName: Q,
							lineNumber: 46,
							columnNumber: 13
						}, this)
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 41,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 32,
					columnNumber: 9
				}, this),
				a("div", { children: [a("label", {
					htmlFor: e,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: Me()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 50,
					columnNumber: 11
				}, this), a("select", {
					id: e,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						a("option", { children: et() }, void 0, !1, {
							fileName: Q,
							lineNumber: 60,
							columnNumber: 13
						}, this),
						a("option", { children: dt() }, void 0, !1, {
							fileName: Q,
							lineNumber: 61,
							columnNumber: 13
						}, this),
						a("option", { children: St() }, void 0, !1, {
							fileName: Q,
							lineNumber: 62,
							columnNumber: 13
						}, this),
						a("option", { children: pn() }, void 0, !1, {
							fileName: Q,
							lineNumber: 63,
							columnNumber: 13
						}, this),
						a("option", { children: Nt() }, void 0, !1, {
							fileName: Q,
							lineNumber: 64,
							columnNumber: 13
						}, this),
						a("option", { children: ue() }, void 0, !1, {
							fileName: Q,
							lineNumber: 65,
							columnNumber: 13
						}, this),
						a("option", { children: K() }, void 0, !1, {
							fileName: Q,
							lineNumber: 66,
							columnNumber: 13
						}, this)
					]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 56,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: Q,
					lineNumber: 49,
					columnNumber: 9
				}, this)
			]
		}, void 0, !0, {
			fileName: Q,
			lineNumber: 14,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: Q,
		lineNumber: 10,
		columnNumber: 5
	}, this);
}
function qn() {
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
function Jn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var Yn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/AppProviders.tsx";
function Xn({ children: t }) {
	let s = o().locale ?? "en", [c] = r(() => typeof performance < "u" ? performance.now() : 0);
	return n(() => {
		Jn("AppRoot", c);
	}, [c]), e(() => {
		_(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		qn();
	}, []), a(i, { children: t }, void 0, !1, {
		fileName: Yn,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var Zn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/scripts/Wrapper.tsx";
function Qn({ children: e }) {
	return a(Xn, { children: e }, void 0, !1, {
		fileName: Zn,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/settings/PreferencesSection.wrapper.tsx";
function $n() {
	return a(Qn, { children: a(Kn, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { $n as default };
