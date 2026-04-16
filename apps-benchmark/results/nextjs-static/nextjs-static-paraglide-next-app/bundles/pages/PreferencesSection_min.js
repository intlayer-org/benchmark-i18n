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
	let t = y(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return _ || (g = t, _ = !0, x(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function y(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = w();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && g !== void 0) n = g;
		else if (E(t) && T.has(t)) {
			let e = T.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return C(t);
			}
		}
		let e = S(n);
		if (e) return e;
	}
}
var b = (e) => {
	e ? window.location.href = e : window.location.reload();
}, x = (e, t) => {
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
	else if (E(t) && T.has(t)) {
		let n = T.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!h && n.reload && window.location && e !== r && b(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function S(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of s) if (e.toLowerCase() === t) return e;
}
function C(e) {
	let t = S(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${s.join(", ")}`);
}
function w() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${c}=([^;]+)`))?.[2];
	return S(e);
}
var T = /* @__PURE__ */ new Map();
function E(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var D = () => "Preferences", O = () => "Préférences", k = () => "Preferencias", A = () => "Einstellungen", j = () => "Preferenze", M = () => "Preferências", N = () => "偏好设置", P = () => "設定", F = () => "환경 설정", I = () => "Настройки", L = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? D(e) : n === "fr" ? O(e) : n === "es" ? k(e) : n === "de" ? A(e) : n === "it" ? j(e) : n === "pt" ? M(e) : n === "zh" ? N(e) : n === "ja" ? P(e) : n === "ko" ? F(e) : I(e);
}), R = () => "Email Notifications", z = () => "Notifications par email", B = () => "Notificaciones por correo electrónico", V = () => "E-Mail-Benachrichtigungen", H = () => "Notifiche via email", U = () => "Notifiche por e-mail", W = () => "邮件通知", G = () => "メール通知", K = () => "이메일 알림", q = () => "Уведомления по эл. почте", J = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? R(e) : n === "fr" ? z(e) : n === "es" ? B(e) : n === "de" ? V(e) : n === "it" ? H(e) : n === "pt" ? U(e) : n === "zh" ? W(e) : n === "ja" ? G(e) : n === "ko" ? K(e) : q(e);
}), Y = () => "Receive weekly benchmark reports", X = () => "Recevoir des rapports hebdomadaires de benchmark", Z = () => "Recibir informes semanales de benchmarks", Q = () => "Wöchentliche Benchmark-Berichte erhalten", ne = () => "Ricevi rapporti settimanali sui benchmark", re = () => "Receber relatórios semanais de benchmarks", ie = () => "接收每周基准测试报告", ae = () => "毎週のベンチマークレポートを受け取る", oe = () => "주간 벤치마크 보고서 받기", se = () => "Получать еженедельные отчеты о бенчмарках", ce = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Y(e) : n === "fr" ? X(e) : n === "es" ? Z(e) : n === "de" ? Q(e) : n === "it" ? ne(e) : n === "pt" ? re(e) : n === "zh" ? ie(e) : n === "ja" ? ae(e) : n === "ko" ? oe(e) : se(e);
}), le = () => "Toggle notifications", ue = () => "Basculer les notifications", de = () => "Alternar notificaciones", fe = () => "Benachrichtigungen umschalten", pe = () => "Attiva/disattiva notifiche", me = () => "Alternar notificações", he = () => "切换通知", ge = () => "通知の切り替え", _e = () => "알림 토글", ve = () => "Переключить уведомления", ye = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? le(e) : n === "fr" ? ue(e) : n === "es" ? de(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : ve(e);
}), be = () => "Dark Mode", xe = () => "Mode sombre", Se = () => "Modo oscuro", Ce = () => "Dunkelmodus", we = () => "Modalità scura", Te = () => "Modo Escuro", Ee = () => "深色模式", De = () => "ダークモード", Oe = () => "다크 모드", ke = () => "Темный режим", Ae = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? be(e) : n === "fr" ? xe(e) : n === "es" ? Se(e) : n === "de" ? Ce(e) : n === "it" ? we(e) : n === "pt" ? Te(e) : n === "zh" ? Ee(e) : n === "ja" ? De(e) : n === "ko" ? Oe(e) : ke(e);
}), je = () => "Use dark color scheme", Me = () => "Utiliser le schéma de couleurs sombres", Ne = () => "Usar esquema de colores oscuro", Pe = () => "Dunkles Farbschema verwenden", Fe = () => "Usa lo schema colori scuro", Ie = () => "Usar esquema de cores escuras", Le = () => "使用深色配色方案", Re = () => "ダークカラーの配色を使用する", ze = () => "어두운 색상 테마 사용", Be = () => "Использовать темную цветовую схему", Ve = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? je(e) : n === "fr" ? Me(e) : n === "es" ? Ne(e) : n === "de" ? Pe(e) : n === "it" ? Fe(e) : n === "pt" ? Ie(e) : n === "zh" ? Le(e) : n === "ja" ? Re(e) : n === "ko" ? ze(e) : Be(e);
}), He = () => "Toggle dark mode", Ue = () => "Basculer le mode sombre", We = () => "Alternar modo oscuro", Ge = () => "Dunkelmodus umschalten", Ke = () => "Attiva/disattiva modalità scura", qe = () => "Alternar modo escuro", Je = () => "切换深色模式", Ye = () => "ダークモードの切り替え", Xe = () => "다크 모드 토글", Ze = () => "Переключить темный режим", Qe = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? He(e) : n === "fr" ? Ue(e) : n === "es" ? We(e) : n === "de" ? Ge(e) : n === "it" ? Ke(e) : n === "pt" ? qe(e) : n === "zh" ? Je(e) : n === "ja" ? Ye(e) : n === "ko" ? Xe(e) : Ze(e);
}), $e = () => "Default Language", et = () => "Langue par défaut", tt = () => "Idioma predeterminado", nt = () => "Standardsprache", rt = () => "Lingua predefinita", it = () => "Idioma Padrão", at = () => "默认语言", ot = () => "既定の言語", st = () => "기본 언어", ct = () => "Язык по умолчанию", lt = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? $e(e) : n === "fr" ? et(e) : n === "es" ? tt(e) : n === "de" ? nt(e) : n === "it" ? rt(e) : n === "pt" ? it(e) : n === "zh" ? at(e) : n === "ja" ? ot(e) : n === "ko" ? st(e) : ct(e);
}), ut = () => "English (en)", dt = () => "Anglais (en)", ft = () => "Inglés (en)", pt = () => "Englisch (en)", mt = () => "Inglese (en)", ht = () => "Inglês (en)", gt = () => "英语 (en)", _t = () => "英語 (en)", vt = () => "영어 (en)", yt = () => "Английский (en)", bt = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? ut(e) : n === "fr" ? dt(e) : n === "es" ? ft(e) : n === "de" ? pt(e) : n === "it" ? mt(e) : n === "pt" ? ht(e) : n === "zh" ? gt(e) : n === "ja" ? _t(e) : n === "ko" ? vt(e) : yt(e);
}), xt = () => "French (fr)", St = () => "Français (fr)", Ct = () => "Francés (fr)", wt = () => "Französisch (fr)", Tt = () => "Francese (fr)", Et = () => "Francês (fr)", Dt = () => "法语 (fr)", Ot = () => "フランス語 (fr)", kt = () => "프랑스어 (fr)", At = () => "Французский (fr)", jt = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? xt(e) : n === "fr" ? St(e) : n === "es" ? Ct(e) : n === "de" ? wt(e) : n === "it" ? Tt(e) : n === "pt" ? Et(e) : n === "zh" ? Dt(e) : n === "ja" ? Ot(e) : n === "ko" ? kt(e) : At(e);
}), Mt = () => "German (de)", Nt = () => "Allemand (de)", Pt = () => "Alemán (de)", Ft = () => "Deutsch (de)", It = () => "Tedesco (de)", Lt = () => "Alemão (de)", Rt = () => "德语 (de)", zt = () => "ドイツ語 (de)", Bt = () => "독일어 (de)", Vt = () => "Немецкий (de)", Ht = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Mt(e) : n === "fr" ? Nt(e) : n === "es" ? Pt(e) : n === "de" ? Ft(e) : n === "it" ? It(e) : n === "pt" ? Lt(e) : n === "zh" ? Rt(e) : n === "ja" ? zt(e) : n === "ko" ? Bt(e) : Vt(e);
}), Ut = () => "Spanish (es)", Wt = () => "Espagnol (es)", Gt = () => "Español (es)", Kt = () => "Spanisch (es)", qt = () => "Spagnolo (es)", Jt = () => "Espanhol (es)", Yt = () => "西班牙语 (es)", Xt = () => "スペイン語 (es)", Zt = () => "스페인어 (es)", Qt = () => "Испанский (es)", $t = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Ut(e) : n === "fr" ? Wt(e) : n === "es" ? Gt(e) : n === "de" ? Kt(e) : n === "it" ? qt(e) : n === "pt" ? Jt(e) : n === "zh" ? Yt(e) : n === "ja" ? Xt(e) : n === "ko" ? Zt(e) : Qt(e);
}), en = () => "Japanese (ja)", tn = () => "Japonais (ja)", nn = () => "Japonés (ja)", rn = () => "Japanisch (ja)", an = () => "Giapponese (ja)", on = () => "Japonês (ja)", sn = () => "日语 (ja)", cn = () => "日本語 (ja)", ln = () => "일본어 (ja)", un = () => "Японский (ja)", dn = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? en(e) : n === "fr" ? tn(e) : n === "es" ? nn(e) : n === "de" ? rn(e) : n === "it" ? an(e) : n === "pt" ? on(e) : n === "zh" ? sn(e) : n === "ja" ? cn(e) : n === "ko" ? ln(e) : un(e);
}), fn = () => "Chinese Simplified (zh-CN)", pn = () => "Chinois simplifié (zh-CN)", mn = () => "Chino simplificado (zh-CN)", hn = () => "Chinesisch vereinfacht (zh-CN)", gn = () => "Cinese semplificato (zh-CN)", _n = () => "Chinês simplificado (zh-CN)", vn = () => "简体中文 (zh-CN)", yn = () => "中国語 簡体字 (zh-CN)", bn = () => "중국어 간체 (zh-CN)", xn = () => "Китайский упрощенный (zh-CN)", Sn = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? fn(e) : n === "fr" ? pn(e) : n === "es" ? mn(e) : n === "de" ? hn(e) : n === "it" ? gn(e) : n === "pt" ? _n(e) : n === "zh" ? vn(e) : n === "ja" ? yn(e) : n === "ko" ? bn(e) : xn(e);
}), Cn = () => "Arabic (ar)", wn = () => "Arabe (ar)", Tn = () => "Árabe (ar)", En = () => "Arabisch (ar)", $ = () => "Arabo (ar)", Dn = () => "Árabe (ar)", On = () => "阿拉伯语 (ar)", kn = () => "アラビア語 (ar)", An = () => "아랍어 (ar)", jn = () => "Арабский (ar)", Mn = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? Cn(e) : n === "fr" ? wn(e) : n === "es" ? Tn(e) : n === "de" ? En(e) : n === "it" ? $(e) : n === "pt" ? Dn(e) : n === "zh" ? On(e) : n === "ja" ? kn(e) : n === "ko" ? An(e) : jn(e);
});
function Nn() {
	let e = n();
	return i("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [r("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: L()
		}), i("div", {
			className: "space-y-4",
			children: [
				i("div", {
					className: "flex items-center justify-between",
					children: [i("div", { children: [r("p", {
						className: "text-sm font-medium text-foreground",
						children: J()
					}), r("p", {
						className: "text-xs text-muted-foreground",
						children: ce()
					})] }), r("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": ye(),
						children: r("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" })
					})]
				}),
				i("div", {
					className: "flex items-center justify-between",
					children: [i("div", { children: [r("p", {
						className: "text-sm font-medium text-foreground",
						children: Ae()
					}), r("p", {
						className: "text-xs text-muted-foreground",
						children: Ve()
					})] }), r("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": Qe(),
						children: r("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" })
					})]
				}),
				i("div", { children: [r("label", {
					htmlFor: e,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: lt()
				}), i("select", {
					id: e,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						r("option", { children: bt() }),
						r("option", { children: jt() }),
						r("option", { children: Ht() }),
						r("option", { children: $t() }),
						r("option", { children: dn() }),
						r("option", { children: Sn() }),
						r("option", { children: Mn() })
					]
				})] })
			]
		})]
	});
}
function Pn() {
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
function Fn(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
function In({ children: n }) {
	let i = a().locale ?? "en";
	return t(() => {
		x(i), document.documentElement.lang = i;
	}, [i]), t(() => {
		Pn();
	}, []), r(e, {
		id: "AppRoot",
		onRender: Fn,
		children: n
	});
}
function Ln({ children: e }) {
	return r(In, { children: e });
}
function Rn() {
	return r(Ln, { children: r(Nn, {}) });
}
export { Rn as default };
