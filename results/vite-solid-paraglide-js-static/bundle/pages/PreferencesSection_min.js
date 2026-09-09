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
], u = [], d = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var f, p = !1, m = () => {
	let e = l;
	!d && typeof window < "u" && window.location?.href && (e = N(window.location.href));
	let t = h(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, _(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function h(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ee();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (F(t) && P.has(t)) {
			let e = P.get(t);
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
var g = (e) => {
	e ? window.location.href = e : window.location.reload();
}, _ = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = m();
	} catch {}
	let i = [], a = l;
	!d && typeof window < "u" && window.location?.href && (a = N(window.location.href));
	for (let t of a) if (t === "globalVariable") f = e;
	else if (t === "cookie") {
		if (d || typeof document > "u" || typeof window > "u") continue;
		let t = `${s}=${e}; path=/; max-age=${c}`;
		document.cookie = t, D();
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
		!d && n.reload && window.location && e !== r && g(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, v = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of o) if (e.toLowerCase() === t) return e;
}
function b(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function x(e) {
	return e;
}
function S(e, t) {
	return e.exec(t.href);
}
var C = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), w = RegExp(`(?:^|;\\s*)${C}=([^;]*)`), T = Symbol(), E = T;
function D() {
	E = T;
}
function O() {
	typeof queueMicrotask == "function" ? queueMicrotask(D) : Promise.resolve().then(D);
}
function ee() {
	if (typeof document > "u") return;
	if (E !== T) return E;
	let e = document.cookie.match(w)?.[1];
	return E = y(e), O(), E;
}
function k(e) {
	return A(e);
}
function A(e) {
	let t = x(typeof e == "string" ? new URL(e, v()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && y(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), x(t);
}
var j, M;
function te(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (j === t) return M;
	let n = x(new URL(t, "http://example.com")), r = k(n), i = r.href === n.href ? [n] : [n, r], o;
	for (let e of i) {
		for (let t of u) if (S(new a(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return j = t, M = o, o;
}
function N(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var P = /* @__PURE__ */ new Map();
function F(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var I = () => "Arabic (ar)", L = () => "Arabe (ar)", R = () => "Árabe (ar)", z = () => "Arabisch (ar)", B = () => "Arabo (ar)", V = () => "Árabe (ar)", H = () => "阿拉伯语 (ar)", U = () => "アラビア語 (ar)", W = () => "Arabic (ar)", G = () => "Арабский (ar)", K = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : n === "ru" ? G(e) : I(e);
}), q = () => "Chinese Simplified (zh-CN)", J = () => "Chinois simplifié (zh-CN)", Y = () => "Chino simplificado (zh-CN)", X = () => "Chinesisch vereinfacht (zh-CN)", Z = () => "Cinese semplificato (zh-CN)", Q = () => "Chinês Simplificado (zh-CN)", ne = () => "简体中文 (zh-CN)", re = () => "中国語（簡体字） (zh-CN)", ie = () => "Chinese Simplified (zh-CN)", ae = () => "Китайский упрощенный (zh-CN)", oe = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? Z(e) : n === "pt" ? Q(e) : n === "zh" ? ne(e) : n === "ja" ? re(e) : n === "ko" ? ie(e) : n === "ru" ? ae(e) : q(e);
}), se = () => "Use dark color scheme", ce = () => "Utiliser le thème sombre", le = () => "Usar esquema de colores oscuro", ue = () => "Dunkles Farbschema verwenden", de = () => "Usa lo schema colori scuro", fe = () => "Usar esquema de cores escuro", pe = () => "使用深色配色方案", me = () => "ダークカラー（暗い配色）を使用する", he = () => "Use dark color scheme", ge = () => "Использовать темную цветовую схему", _e = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? ce(e) : n === "es" ? le(e) : n === "de" ? ue(e) : n === "it" ? de(e) : n === "pt" ? fe(e) : n === "zh" ? pe(e) : n === "ja" ? me(e) : n === "ko" ? he(e) : n === "ru" ? ge(e) : se(e);
}), ve = () => "Dark Mode", ye = () => "Mode sombre", be = () => "Modo oscuro", xe = () => "Dunkelmodus", Se = () => "Modalità scura", Ce = () => "Modo Escuro", we = () => "深色模式", Te = () => "ダークモード", Ee = () => "Dark Mode", De = () => "Темная тема", Oe = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? ye(e) : n === "es" ? be(e) : n === "de" ? xe(e) : n === "it" ? Se(e) : n === "pt" ? Ce(e) : n === "zh" ? we(e) : n === "ja" ? Te(e) : n === "ko" ? Ee(e) : n === "ru" ? De(e) : ve(e);
}), ke = () => "Default Language", Ae = () => "Langue par défaut", je = () => "Idioma predeterminado", Me = () => "Standardsprache", Ne = () => "Lingua predefinita", Pe = () => "Idioma padrão", Fe = () => "默认语言", Ie = () => "デフォルトの言語", Le = () => "Default Language", Re = () => "Язык по умолчанию", ze = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ae(e) : n === "es" ? je(e) : n === "de" ? Me(e) : n === "it" ? Ne(e) : n === "pt" ? Pe(e) : n === "zh" ? Fe(e) : n === "ja" ? Ie(e) : n === "ko" ? Le(e) : n === "ru" ? Re(e) : ke(e);
}), Be = () => "Email Notifications", Ve = () => "Notifications e-mail", He = () => "Notificaciones por correo electrónico", Ue = () => "E-Mail-Benachrichtigungen", We = () => "Notifiche via email", Ge = () => "Notificações por e-mail", Ke = () => "电子邮件通知", qe = () => "メール通知", Je = () => "Email Notifications", Ye = () => "Уведомления по почте", Xe = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ve(e) : n === "es" ? He(e) : n === "de" ? Ue(e) : n === "it" ? We(e) : n === "pt" ? Ge(e) : n === "zh" ? Ke(e) : n === "ja" ? qe(e) : n === "ko" ? Je(e) : n === "ru" ? Ye(e) : Be(e);
}), Ze = () => "English (en)", Qe = () => "Anglais (en)", $e = () => "Inglés (en)", et = () => "Englisch (en)", tt = () => "Inglese (en)", nt = () => "Inglês (en)", rt = () => "英语 (en)", it = () => "英語 (en)", at = () => "English (en)", ot = () => "Английский (en)", st = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Qe(e) : n === "es" ? $e(e) : n === "de" ? et(e) : n === "it" ? tt(e) : n === "pt" ? nt(e) : n === "zh" ? rt(e) : n === "ja" ? it(e) : n === "ko" ? at(e) : n === "ru" ? ot(e) : Ze(e);
}), ct = () => "French (fr)", lt = () => "Français (fr)", ut = () => "Francés (fr)", dt = () => "Französisch (fr)", ft = () => "Francese (fr)", pt = () => "Francés (fr)", mt = () => "法语 (fr)", ht = () => "フランス語 (fr)", gt = () => "French (fr)", _t = () => "Французский (fr)", vt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? lt(e) : n === "es" ? ut(e) : n === "de" ? dt(e) : n === "it" ? ft(e) : n === "pt" ? pt(e) : n === "zh" ? mt(e) : n === "ja" ? ht(e) : n === "ko" ? gt(e) : n === "ru" ? _t(e) : ct(e);
}), yt = () => "German (de)", bt = () => "Allemand (de)", xt = () => "Alemán (de)", St = () => "Deutsch (de)", Ct = () => "Tedesco (de)", wt = () => "Alemão (de)", Tt = () => "德语 (de)", Et = () => "ドイツ語 (de)", Dt = () => "German (de)", Ot = () => "Немецкий (de)", kt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? bt(e) : n === "es" ? xt(e) : n === "de" ? St(e) : n === "it" ? Ct(e) : n === "pt" ? wt(e) : n === "zh" ? Tt(e) : n === "ja" ? Et(e) : n === "ko" ? Dt(e) : n === "ru" ? Ot(e) : yt(e);
}), At = () => "Japanese (ja)", jt = () => "Japonais (ja)", Mt = () => "Japonés (ja)", Nt = () => "Japanisch (ja)", Pt = () => "Giapponese (ja)", Ft = () => "Japonês (ja)", It = () => "日语 (ja)", Lt = () => "日本語 (ja)", Rt = () => "Japanese (ja)", zt = () => "Японский (ja)", Bt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? jt(e) : n === "es" ? Mt(e) : n === "de" ? Nt(e) : n === "it" ? Pt(e) : n === "pt" ? Ft(e) : n === "zh" ? It(e) : n === "ja" ? Lt(e) : n === "ko" ? Rt(e) : n === "ru" ? zt(e) : At(e);
}), Vt = () => "Spanish (es)", Ht = () => "Espagnol (es)", Ut = () => "Español (es)", Wt = () => "Spanisch (es)", Gt = () => "Spagnolo (es)", Kt = () => "Espanhol (es)", qt = () => "西班牙语 (es)", Jt = () => "スペイン語 (es)", Yt = () => "Spanish (es)", Xt = () => "Испанский (es)", Zt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ht(e) : n === "es" ? Ut(e) : n === "de" ? Wt(e) : n === "it" ? Gt(e) : n === "pt" ? Kt(e) : n === "zh" ? qt(e) : n === "ja" ? Jt(e) : n === "ko" ? Yt(e) : n === "ru" ? Xt(e) : Vt(e);
}), Qt = () => "Preferences", $t = () => "Préférences", en = () => "Preferencias", tn = () => "Einstellungen", nn = () => "Preferenze", rn = () => "Preferências", an = () => "偏好", on = () => "設定", sn = () => "Preferences", cn = () => "Предпочтения", ln = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? $t(e) : n === "es" ? en(e) : n === "de" ? tn(e) : n === "it" ? nn(e) : n === "pt" ? rn(e) : n === "zh" ? an(e) : n === "ja" ? on(e) : n === "ko" ? sn(e) : n === "ru" ? cn(e) : Qt(e);
}), un = () => "Toggle dark mode", dn = () => "Basculer le mode sombre", fn = () => "Cambiar modo oscuro", pn = () => "Dunkelmodus umschalten", mn = () => "Attiva/disattiva modalità scura", hn = () => "Alternar modo escuro", gn = () => "切换深色模式", _n = () => "ダークモードの切り替え", vn = () => "Toggle dark mode", yn = () => "Переключить темную тему", bn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? dn(e) : n === "es" ? fn(e) : n === "de" ? pn(e) : n === "it" ? mn(e) : n === "pt" ? hn(e) : n === "zh" ? gn(e) : n === "ja" ? _n(e) : n === "ko" ? vn(e) : n === "ru" ? yn(e) : un(e);
}), xn = () => "Toggle notifications", Sn = () => "Activer/désactiver les notifications", Cn = () => "Cambiar notificaciones", wn = () => "Benachrichtigungen umschalten", Tn = () => "Attiva/disattiva notifiche", En = () => "Alternar notificações", $ = () => "切换通知", Dn = () => "通知の切り替え", On = () => "Toggle notifications", kn = () => "Переключить уведомления", An = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Sn(e) : n === "es" ? Cn(e) : n === "de" ? wn(e) : n === "it" ? Tn(e) : n === "pt" ? En(e) : n === "zh" ? $(e) : n === "ja" ? Dn(e) : n === "ko" ? On(e) : n === "ru" ? kn(e) : xn(e);
}), jn = () => "Receive weekly benchmark reports", Mn = () => "Recevoir les rapports hebdomadaires", Nn = () => "Recibir informes semanales de benchmarks", Pn = () => "Wöchentliche Benchmark-Berichte erhalten", Fn = () => "Ricevi rapporti settimanali sui benchmark", In = () => "Receber relatórios semanais de benchmarks", Ln = () => "接收每周基准测试报告", Rn = () => "毎週のベンチマークレポートを受け取る", zn = () => "Receive weekly benchmark reports", Bn = () => "Получать еженедельные отчеты о бенчмарках", Vn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Mn(e) : n === "es" ? Nn(e) : n === "de" ? Pn(e) : n === "it" ? Fn(e) : n === "pt" ? In(e) : n === "zh" ? Ln(e) : n === "ja" ? Rn(e) : n === "ko" ? zn(e) : n === "ru" ? Bn(e) : jn(e);
}), Hn = r("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"></h2><div class=space-y-4><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"></p><p class=\"text-xs text-muted-foreground\"></p></div><button type=button class=\"h-6 w-11 rounded-full bg-primary transition-colors\"><span class=\"block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform\"></span></button></div><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"></p><p class=\"text-xs text-muted-foreground\"></p></div><button type=button class=\"h-6 w-11 rounded-full bg-muted transition-colors\"><span class=\"block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform\"></span></button></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"><option></option><option></option><option></option><option></option><option></option><option></option><option>");
function Un() {
	let r = i();
	return (() => {
		var i = Hn(), a = i.firstChild, o = a.nextSibling.firstChild, s = o.firstChild, c = s.firstChild, l = c.nextSibling, u = s.nextSibling, d = o.nextSibling, f = d.firstChild, p = f.firstChild, m = p.nextSibling, h = f.nextSibling, g = d.nextSibling.firstChild, _ = g.nextSibling, v = _.firstChild, y = v.nextSibling, b = y.nextSibling, x = b.nextSibling, S = x.nextSibling, C = S.nextSibling, w = C.nextSibling;
		return t(a, () => ln()), t(c, () => Xe()), t(l, () => Vn()), t(p, () => Oe()), t(m, () => _e()), n(g, "for", r), t(g, () => ze()), n(_, "id", r), t(v, () => st()), t(y, () => vt()), t(b, () => kt()), t(x, () => Zt()), t(S, () => Bt()), t(C, () => oe()), t(w, () => K()), e((e) => {
			var t = An(), r = bn();
			return t !== e.e && n(u, "aria-label", e.e = t), r !== e.t && n(h, "aria-label", e.t = r), e;
		}, {
			e: void 0,
			t: void 0
		}), i;
	})();
}
export { Un as default };
