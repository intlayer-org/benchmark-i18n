import { effect as e, insert as t, setAttribute as n, template as r } from "solid-js/web";
import { createUniqueId as i } from "solid-js";
var a = {}, o = [
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
], s = "PARAGLIDE_LOCALE", c = 3456e4, l = [
	"cookie",
	"globalVariable",
	"baseLocale"
], u = [], d, f;
function p(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (d === t) return f;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of u) if (new a(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return d = t, f = r, r;
}
function m(e) {
	let t = p(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var h = void 0, g = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var _, v = !1, y = () => {
	if (h) {
		let e = h?.getStore()?.locale;
		if (e) return e;
	}
	let e = l;
	!g && typeof window < "u" && window.location?.href && (e = m(window.location.href));
	let t = b(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return v || (_ = t, v = !0, S(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function b(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ee();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && _ !== void 0) n = _;
		else if (E(t) && T.has(t)) {
			let e = T.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return w(t);
			}
		}
		let e = C(n);
		if (e) return e;
	}
}
var x = (e) => {
	e ? window.location.href = e : window.location.reload();
}, S = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = y();
	} catch {}
	let i = [], a = l;
	!g && typeof window < "u" && window.location?.href && (a = m(window.location.href));
	for (let t of a) if (t === "globalVariable") _ = e;
	else if (t === "cookie") {
		if (g || typeof document > "u" || typeof window > "u") continue;
		let t = `${s}=${e}; path=/; max-age=${c}`;
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
		!g && n.reload && window.location && e !== r && x(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function C(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of o) if (e.toLowerCase() === t) return e;
}
function w(e) {
	let t = C(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function ee() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${s}=([^;]+)`))?.[2];
	return C(e);
}
var T = /* @__PURE__ */ new Map();
function E(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var te = () => "Preferences", D = () => "Préférences", O = () => "Preferencias", k = () => "Einstellungen", A = () => "Preferenze", j = () => "Preferências", M = () => "偏好", N = () => "設定", P = () => "Preferences", F = () => "Предпочтения", I = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? te(e) : n === "fr" ? D(e) : n === "es" ? O(e) : n === "de" ? k(e) : n === "it" ? A(e) : n === "pt" ? j(e) : n === "zh" ? M(e) : n === "ja" ? N(e) : n === "ko" ? P(e) : F(e);
}), L = () => "Email Notifications", R = () => "Notifications e-mail", z = () => "Notificaciones por correo electrónico", B = () => "E-Mail-Benachrichtigungen", V = () => "Notifiche via email", H = () => "Notificações por e-mail", U = () => "电子邮件通知", W = () => "メール通知", G = () => "Email Notifications", K = () => "Уведомления по почте", q = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? L(e) : n === "fr" ? R(e) : n === "es" ? z(e) : n === "de" ? B(e) : n === "it" ? V(e) : n === "pt" ? H(e) : n === "zh" ? U(e) : n === "ja" ? W(e) : n === "ko" ? G(e) : K(e);
}), J = () => "Receive weekly benchmark reports", Y = () => "Recevoir les rapports hebdomadaires", X = () => "Recibir informes semanales de benchmarks", Z = () => "Wöchentliche Benchmark-Berichte erhalten", Q = () => "Ricevi rapporti settimanali sui benchmark", ne = () => "Receber relatórios semanais de benchmarks", re = () => "接收每周基准测试报告", ie = () => "毎週のベンチマークレポートを受け取る", ae = () => "Receive weekly benchmark reports", oe = () => "Получать еженедельные отчеты о бенчмарках", se = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? J(e) : n === "fr" ? Y(e) : n === "es" ? X(e) : n === "de" ? Z(e) : n === "it" ? Q(e) : n === "pt" ? ne(e) : n === "zh" ? re(e) : n === "ja" ? ie(e) : n === "ko" ? ae(e) : oe(e);
}), ce = () => "Toggle notifications", le = () => "Activer/désactiver les notifications", ue = () => "Cambiar notificaciones", de = () => "Benachrichtigungen umschalten", fe = () => "Attiva/disattiva notifiche", pe = () => "Alternar notificações", me = () => "切换通知", he = () => "通知の切り替え", ge = () => "Toggle notifications", _e = () => "Переключить уведомления", ve = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? ce(e) : n === "fr" ? le(e) : n === "es" ? ue(e) : n === "de" ? de(e) : n === "it" ? fe(e) : n === "pt" ? pe(e) : n === "zh" ? me(e) : n === "ja" ? he(e) : n === "ko" ? ge(e) : _e(e);
}), ye = () => "Dark Mode", be = () => "Mode sombre", xe = () => "Modo oscuro", Se = () => "Dunkelmodus", Ce = () => "Modalità scura", we = () => "Modo Escuro", Te = () => "深色模式", Ee = () => "ダークモード", De = () => "Dark Mode", Oe = () => "Темная тема", ke = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? ye(e) : n === "fr" ? be(e) : n === "es" ? xe(e) : n === "de" ? Se(e) : n === "it" ? Ce(e) : n === "pt" ? we(e) : n === "zh" ? Te(e) : n === "ja" ? Ee(e) : n === "ko" ? De(e) : Oe(e);
}), Ae = () => "Use dark color scheme", je = () => "Utiliser le thème sombre", Me = () => "Usar esquema de colores oscuro", Ne = () => "Dunkles Farbschema verwenden", Pe = () => "Usa lo schema colori scuro", Fe = () => "Usar esquema de cores escuro", Ie = () => "使用深色配色方案", Le = () => "ダークカラー（暗い配色）を使用する", Re = () => "Use dark color scheme", ze = () => "Использовать темную цветовую схему", Be = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Ae(e) : n === "fr" ? je(e) : n === "es" ? Me(e) : n === "de" ? Ne(e) : n === "it" ? Pe(e) : n === "pt" ? Fe(e) : n === "zh" ? Ie(e) : n === "ja" ? Le(e) : n === "ko" ? Re(e) : ze(e);
}), Ve = () => "Toggle dark mode", He = () => "Basculer le mode sombre", Ue = () => "Cambiar modo oscuro", We = () => "Dunkelmodus umschalten", Ge = () => "Attiva/disattiva modalità scura", Ke = () => "Alternar modo escuro", qe = () => "切换深色模式", Je = () => "ダークモードの切り替え", Ye = () => "Toggle dark mode", Xe = () => "Переключить темную тему", Ze = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Ve(e) : n === "fr" ? He(e) : n === "es" ? Ue(e) : n === "de" ? We(e) : n === "it" ? Ge(e) : n === "pt" ? Ke(e) : n === "zh" ? qe(e) : n === "ja" ? Je(e) : n === "ko" ? Ye(e) : Xe(e);
}), Qe = () => "Default Language", $e = () => "Langue par défaut", et = () => "Idioma predeterminado", tt = () => "Standardsprache", nt = () => "Lingua predefinita", rt = () => "Idioma padrão", it = () => "默认语言", at = () => "デフォルトの言語", ot = () => "Default Language", st = () => "Язык по умолчанию", ct = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Qe(e) : n === "fr" ? $e(e) : n === "es" ? et(e) : n === "de" ? tt(e) : n === "it" ? nt(e) : n === "pt" ? rt(e) : n === "zh" ? it(e) : n === "ja" ? at(e) : n === "ko" ? ot(e) : st(e);
}), lt = () => "English (en)", ut = () => "Anglais (en)", dt = () => "Inglés (en)", ft = () => "Englisch (en)", pt = () => "Inglese (en)", mt = () => "Inglês (en)", ht = () => "英语 (en)", gt = () => "英語 (en)", _t = () => "English (en)", vt = () => "Английский (en)", yt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? lt(e) : n === "fr" ? ut(e) : n === "es" ? dt(e) : n === "de" ? ft(e) : n === "it" ? pt(e) : n === "pt" ? mt(e) : n === "zh" ? ht(e) : n === "ja" ? gt(e) : n === "ko" ? _t(e) : vt(e);
}), bt = () => "French (fr)", xt = () => "Français (fr)", St = () => "Francés (fr)", Ct = () => "Französisch (fr)", wt = () => "Francese (fr)", Tt = () => "Francés (fr)", Et = () => "法语 (fr)", Dt = () => "フランス語 (fr)", Ot = () => "French (fr)", kt = () => "Французский (fr)", At = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? bt(e) : n === "fr" ? xt(e) : n === "es" ? St(e) : n === "de" ? Ct(e) : n === "it" ? wt(e) : n === "pt" ? Tt(e) : n === "zh" ? Et(e) : n === "ja" ? Dt(e) : n === "ko" ? Ot(e) : kt(e);
}), jt = () => "German (de)", Mt = () => "Allemand (de)", Nt = () => "Alemán (de)", Pt = () => "Deutsch (de)", Ft = () => "Tedesco (de)", It = () => "Alemão (de)", Lt = () => "德语 (de)", Rt = () => "ドイツ語 (de)", zt = () => "German (de)", Bt = () => "Немецкий (de)", Vt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? jt(e) : n === "fr" ? Mt(e) : n === "es" ? Nt(e) : n === "de" ? Pt(e) : n === "it" ? Ft(e) : n === "pt" ? It(e) : n === "zh" ? Lt(e) : n === "ja" ? Rt(e) : n === "ko" ? zt(e) : Bt(e);
}), Ht = () => "Spanish (es)", Ut = () => "Espagnol (es)", Wt = () => "Español (es)", Gt = () => "Spanisch (es)", Kt = () => "Spagnolo (es)", qt = () => "Espanhol (es)", Jt = () => "西班牙语 (es)", Yt = () => "スペイン語 (es)", Xt = () => "Spanish (es)", Zt = () => "Испанский (es)", Qt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Ht(e) : n === "fr" ? Ut(e) : n === "es" ? Wt(e) : n === "de" ? Gt(e) : n === "it" ? Kt(e) : n === "pt" ? qt(e) : n === "zh" ? Jt(e) : n === "ja" ? Yt(e) : n === "ko" ? Xt(e) : Zt(e);
}), $t = () => "Japanese (ja)", en = () => "Japonais (ja)", tn = () => "Japonés (ja)", nn = () => "Japanisch (ja)", rn = () => "Giapponese (ja)", an = () => "Japonês (ja)", on = () => "日语 (ja)", sn = () => "日本語 (ja)", cn = () => "Japanese (ja)", ln = () => "Японский (ja)", un = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? $t(e) : n === "fr" ? en(e) : n === "es" ? tn(e) : n === "de" ? nn(e) : n === "it" ? rn(e) : n === "pt" ? an(e) : n === "zh" ? on(e) : n === "ja" ? sn(e) : n === "ko" ? cn(e) : ln(e);
}), dn = () => "Chinese Simplified (zh-CN)", fn = () => "Chinois simplifié (zh-CN)", pn = () => "Chino simplificado (zh-CN)", mn = () => "Chinesisch vereinfacht (zh-CN)", hn = () => "Cinese semplificato (zh-CN)", gn = () => "Chinês Simplificado (zh-CN)", _n = () => "简体中文 (zh-CN)", vn = () => "中国語（簡体字） (zh-CN)", yn = () => "Chinese Simplified (zh-CN)", $ = () => "Китайский упрощенный (zh-CN)", bn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? dn(e) : n === "fr" ? fn(e) : n === "es" ? pn(e) : n === "de" ? mn(e) : n === "it" ? hn(e) : n === "pt" ? gn(e) : n === "zh" ? _n(e) : n === "ja" ? vn(e) : n === "ko" ? yn(e) : $(e);
}), xn = () => "Arabic (ar)", Sn = () => "Arabe (ar)", Cn = () => "Árabe (ar)", wn = () => "Arabisch (ar)", Tn = () => "Arabo (ar)", En = () => "Árabe (ar)", Dn = () => "阿拉伯语 (ar)", On = () => "アラビア語 (ar)", kn = () => "Arabic (ar)", An = () => "Арабский (ar)", jn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? xn(e) : n === "fr" ? Sn(e) : n === "es" ? Cn(e) : n === "de" ? wn(e) : n === "it" ? Tn(e) : n === "pt" ? En(e) : n === "zh" ? Dn(e) : n === "ja" ? On(e) : n === "ko" ? kn(e) : An(e);
}), Mn = r("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"></h2><div class=space-y-4><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"></p><p class=\"text-xs text-muted-foreground\"></p></div><button type=button class=\"h-6 w-11 rounded-full bg-primary transition-colors\"><span class=\"block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform\"></span></button></div><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"></p><p class=\"text-xs text-muted-foreground\"></p></div><button type=button class=\"h-6 w-11 rounded-full bg-muted transition-colors\"><span class=\"block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform\"></span></button></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"><option></option><option></option><option></option><option></option><option></option><option></option><option>");
function Nn() {
	let r = i();
	return (() => {
		var i = Mn(), a = i.firstChild, o = a.nextSibling.firstChild, s = o.firstChild, c = s.firstChild, l = c.nextSibling, u = s.nextSibling, d = o.nextSibling, f = d.firstChild, p = f.firstChild, m = p.nextSibling, h = f.nextSibling, g = d.nextSibling.firstChild, _ = g.nextSibling, v = _.firstChild, y = v.nextSibling, b = y.nextSibling, x = b.nextSibling, S = x.nextSibling, C = S.nextSibling, w = C.nextSibling;
		return t(a, () => I()), t(c, () => q()), t(l, () => se()), t(p, () => ke()), t(m, () => Be()), n(g, "for", r), t(g, () => ct()), n(_, "id", r), t(v, () => yt()), t(y, () => At()), t(b, () => Vt()), t(x, () => Qt()), t(S, () => un()), t(C, () => bn()), t(w, () => jn()), e((e) => {
			var t = ve(), r = Ze();
			return t !== e.e && n(u, "aria-label", e.e = t), r !== e.t && n(h, "aria-label", e.t = r), e;
		}, {
			e: void 0,
			t: void 0
		}), i;
	})();
}
export { Nn as default };
