import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = {}, n = [
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
], r = "PARAGLIDE_LOCALE", i = 3456e4, a = [
	"cookie",
	"globalVariable",
	"baseLocale"
], o = [], s, c;
function l(e) {
	if (o.length === 0) return;
	let n = typeof e == "string" ? e : e.href;
	if (s === n) return c;
	let r = new URL(n, "http://dummy.com"), i;
	for (let e of o) if (new t(e.match, r.href).exec(r.href)) {
		i = e;
		break;
	}
	return s = n, c = i, i;
}
function u(e) {
	let t = l(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : a;
}
var d = void 0, f = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	if (d) {
		let e = d?.getStore()?.locale;
		if (e) return e;
	}
	let e = a;
	!f && typeof window < "u" && window.location?.href && (e = u(window.location.href));
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
	}, o;
	try {
		o = h();
	} catch {}
	let s = [], c = a;
	!f && typeof window < "u" && window.location?.href && (c = u(window.location.href));
	for (let t of c) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (f || typeof document > "u" || typeof window > "u") continue;
		let t = `${r}=${e}; path=/; max-age=${i}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (C(t) && S.has(t)) {
		let n = S.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), s.push(r));
		}
	}
	let l = () => {
		!f && n.reload && window.location && e !== o && _(void 0);
	};
	if (s.length) return Promise.all(s).then(() => {
		l();
	});
	l();
};
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of n) if (e.toLowerCase() === t) return e;
}
function b(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${n.join(", ")}`);
}
function x() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${r}=([^;]+)`))?.[2];
	return y(e);
}
var S = /* @__PURE__ */ new Map();
function C(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var w = () => "Preferences", T = () => "Préférences", E = () => "Preferencias", D = () => "Einstellungen", O = () => "Preferenze", k = () => "Preferências", A = () => "偏好", j = () => "設定", M = () => "Preferences", N = () => "Предпочтения", P = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? w(e) : n === "fr" ? T(e) : n === "es" ? E(e) : n === "de" ? D(e) : n === "it" ? O(e) : n === "pt" ? k(e) : n === "zh" ? A(e) : n === "ja" ? j(e) : n === "ko" ? M(e) : N(e);
}), F = () => "Email Notifications", I = () => "Notifications e-mail", L = () => "Notificaciones por correo electrónico", R = () => "E-Mail-Benachrichtigungen", z = () => "Notifiche via email", ee = () => "Notificações por e-mail", B = () => "电子邮件通知", V = () => "メール通知", H = () => "Email Notifications", U = () => "Уведомления по почте", W = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? F(e) : n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? ee(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : U(e);
}), G = () => "Receive weekly benchmark reports", K = () => "Recevoir les rapports hebdomadaires", q = () => "Recibir informes semanales de benchmarks", J = () => "Wöchentliche Benchmark-Berichte erhalten", Y = () => "Ricevi rapporti settimanali sui benchmark", X = () => "Receber relatórios semanais de benchmarks", te = () => "接收每周基准测试报告", ne = () => "毎週のベンチマークレポートを受け取る", re = () => "Receive weekly benchmark reports", ie = () => "Получать еженедельные отчеты о бенчмарках", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? G(e) : n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? te(e) : n === "ja" ? ne(e) : n === "ko" ? re(e) : ie(e);
}), oe = () => "Toggle notifications", se = () => "Activer/désactiver les notifications", ce = () => "Cambiar notificaciones", le = () => "Benachrichtigungen umschalten", ue = () => "Attiva/disattiva notifiche", de = () => "Alternar notificações", fe = () => "切换通知", pe = () => "通知の切り替え", me = () => "Toggle notifications", he = () => "Переключить уведомления", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? oe(e) : n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : he(e);
}), _e = () => "Dark Mode", ve = () => "Mode sombre", ye = () => "Modo oscuro", be = () => "Dunkelmodus", xe = () => "Modalità scura", Se = () => "Modo Escuro", Ce = () => "深色模式", we = () => "ダークモード", Te = () => "Dark Mode", Ee = () => "Темная тема", De = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? _e(e) : n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : Ee(e);
}), Oe = () => "Use dark color scheme", ke = () => "Utiliser le thème sombre", Ae = () => "Usar esquema de colores oscuro", je = () => "Dunkles Farbschema verwenden", Me = () => "Usa lo schema colori scuro", Ne = () => "Usar esquema de cores escuro", Pe = () => "使用深色配色方案", Fe = () => "ダークカラー（暗い配色）を使用する", Ie = () => "Use dark color scheme", Le = () => "Использовать темную цветовую схему", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Oe(e) : n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : Le(e);
}), ze = () => "Toggle dark mode", Be = () => "Basculer le mode sombre", Ve = () => "Cambiar modo oscuro", He = () => "Dunkelmodus umschalten", Ue = () => "Attiva/disattiva modalità scura", We = () => "Alternar modo escuro", Ge = () => "切换深色模式", Ke = () => "ダークモードの切り替え", qe = () => "Toggle dark mode", Je = () => "Переключить темную тему", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ze(e) : n === "fr" ? Be(e) : n === "es" ? Ve(e) : n === "de" ? He(e) : n === "it" ? Ue(e) : n === "pt" ? We(e) : n === "zh" ? Ge(e) : n === "ja" ? Ke(e) : n === "ko" ? qe(e) : Je(e);
}), Xe = () => "Default Language", Ze = () => "Langue par défaut", Qe = () => "Idioma predeterminado", $e = () => "Standardsprache", et = () => "Lingua predefinita", tt = () => "Idioma padrão", nt = () => "默认语言", rt = () => "デフォルトの言語", it = () => "Default Language", at = () => "Язык по умолчанию", ot = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Xe(e) : n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : at(e);
}), st = () => "English (en)", ct = () => "Anglais (en)", lt = () => "Inglés (en)", ut = () => "Englisch (en)", dt = () => "Inglese (en)", ft = () => "Inglês (en)", pt = () => "英语 (en)", mt = () => "英語 (en)", ht = () => "English (en)", gt = () => "Английский (en)", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? st(e) : n === "fr" ? ct(e) : n === "es" ? lt(e) : n === "de" ? ut(e) : n === "it" ? dt(e) : n === "pt" ? ft(e) : n === "zh" ? pt(e) : n === "ja" ? mt(e) : n === "ko" ? ht(e) : gt(e);
}), _t = () => "French (fr)", vt = () => "Français (fr)", yt = () => "Francés (fr)", bt = () => "Französisch (fr)", xt = () => "Francese (fr)", St = () => "Francés (fr)", Ct = () => "法语 (fr)", wt = () => "フランス語 (fr)", Tt = () => "French (fr)", Et = () => "Французский (fr)", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? _t(e) : n === "fr" ? vt(e) : n === "es" ? yt(e) : n === "de" ? bt(e) : n === "it" ? xt(e) : n === "pt" ? St(e) : n === "zh" ? Ct(e) : n === "ja" ? wt(e) : n === "ko" ? Tt(e) : Et(e);
}), Dt = () => "German (de)", Ot = () => "Allemand (de)", kt = () => "Alemán (de)", At = () => "Deutsch (de)", jt = () => "Tedesco (de)", Mt = () => "Alemão (de)", Nt = () => "德语 (de)", Pt = () => "ドイツ語 (de)", Ft = () => "German (de)", It = () => "Немецкий (de)", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Dt(e) : n === "fr" ? Ot(e) : n === "es" ? kt(e) : n === "de" ? At(e) : n === "it" ? jt(e) : n === "pt" ? Mt(e) : n === "zh" ? Nt(e) : n === "ja" ? Pt(e) : n === "ko" ? Ft(e) : It(e);
}), Lt = () => "Spanish (es)", Rt = () => "Espagnol (es)", zt = () => "Español (es)", Bt = () => "Spanisch (es)", Vt = () => "Spagnolo (es)", Ht = () => "Espanhol (es)", Ut = () => "西班牙语 (es)", Wt = () => "スペイン語 (es)", Gt = () => "Spanish (es)", Kt = () => "Испанский (es)", qt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Lt(e) : n === "fr" ? Rt(e) : n === "es" ? zt(e) : n === "de" ? Bt(e) : n === "it" ? Vt(e) : n === "pt" ? Ht(e) : n === "zh" ? Ut(e) : n === "ja" ? Wt(e) : n === "ko" ? Gt(e) : Kt(e);
}), Jt = () => "Japanese (ja)", Yt = () => "Japonais (ja)", Xt = () => "Japonés (ja)", Zt = () => "Japanisch (ja)", Qt = () => "Giapponese (ja)", $t = () => "Japonês (ja)", en = () => "日语 (ja)", tn = () => "日本語 (ja)", nn = () => "Japanese (ja)", rn = () => "Японский (ja)", an = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? Jt(e) : n === "fr" ? Yt(e) : n === "es" ? Xt(e) : n === "de" ? Zt(e) : n === "it" ? Qt(e) : n === "pt" ? $t(e) : n === "zh" ? en(e) : n === "ja" ? tn(e) : n === "ko" ? nn(e) : rn(e);
}), on = () => "Chinese Simplified (zh-CN)", sn = () => "Chinois simplifié (zh-CN)", cn = () => "Chino simplificado (zh-CN)", ln = () => "Chinesisch vereinfacht (zh-CN)", un = () => "Cinese semplificato (zh-CN)", dn = () => "Chinês Simplificado (zh-CN)", fn = () => "简体中文 (zh-CN)", pn = () => "中国語（簡体字） (zh-CN)", mn = () => "Chinese Simplified (zh-CN)", hn = () => "Китайский упрощенный (zh-CN)", gn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? on(e) : n === "fr" ? sn(e) : n === "es" ? cn(e) : n === "de" ? ln(e) : n === "it" ? un(e) : n === "pt" ? dn(e) : n === "zh" ? fn(e) : n === "ja" ? pn(e) : n === "ko" ? mn(e) : hn(e);
}), _n = () => "Arabic (ar)", vn = () => "Arabe (ar)", yn = () => "Árabe (ar)", bn = () => "Arabisch (ar)", xn = () => "Arabo (ar)", Sn = () => "Árabe (ar)", Cn = () => "阿拉伯语 (ar)", wn = () => "アラビア語 (ar)", Tn = () => "Arabic (ar)", En = () => "Арабский (ar)", Dn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? _n(e) : n === "fr" ? vn(e) : n === "es" ? yn(e) : n === "de" ? bn(e) : n === "it" ? xn(e) : n === "pt" ? Sn(e) : n === "zh" ? Cn(e) : n === "ja" ? wn(e) : n === "ko" ? Tn(e) : En(e);
}), On = e.from_html("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"> </h2> <div class=\"space-y-4\"><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"> </p> <p class=\"text-xs text-muted-foreground\"> </p></div> <button type=\"button\" class=\"h-6 w-11 rounded-full bg-primary transition-colors\"><span class=\"block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform\"></span></button></div> <div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"> </p> <p class=\"text-xs text-muted-foreground\"> </p></div> <button type=\"button\" class=\"h-6 w-11 rounded-full bg-muted transition-colors\"><span class=\"block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform\"></span></button></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none\"><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option></select></div></div></section>");
function kn(t, n) {
	e.push(n, !1);
	let r = "settings-default-language";
	e.init();
	var i = On(), a = e.child(i), o = e.child(a, !0);
	e.reset(a);
	var s = e.sibling(a, 2), c = e.child(s), l = e.child(c), u = e.child(l), d = e.child(u, !0);
	e.reset(u);
	var f = e.sibling(u, 2), p = e.child(f, !0);
	e.reset(f), e.reset(l);
	var m = e.sibling(l, 2);
	e.reset(c);
	var h = e.sibling(c, 2), g = e.child(h), _ = e.child(g), v = e.child(_, !0);
	e.reset(_);
	var y = e.sibling(_, 2), b = e.child(y, !0);
	e.reset(y), e.reset(g);
	var x = e.sibling(g, 2);
	e.reset(h);
	var S = e.sibling(h, 2), C = e.child(S);
	e.set_attribute(C, "for", r);
	var w = e.child(C, !0);
	e.reset(C);
	var T = e.sibling(C, 2);
	e.set_attribute(T, "id", r);
	var E = e.child(T), D = e.child(E, !0);
	e.reset(E);
	var O = {}, k = e.sibling(E), A = e.child(k, !0);
	e.reset(k);
	var j = {}, M = e.sibling(k), N = e.child(M, !0);
	e.reset(M);
	var F = {}, I = e.sibling(M), L = e.child(I, !0);
	e.reset(I);
	var R = {}, z = e.sibling(I), ee = e.child(z, !0);
	e.reset(z);
	var B = {}, V = e.sibling(z), H = e.child(V, !0);
	e.reset(V);
	var U = {}, G = e.sibling(V), K = e.child(G, !0);
	e.reset(G);
	var q = {};
	e.reset(T), e.reset(S), e.reset(s), e.reset(i), e.template_effect((t, n, r, i, a, s, c, l, u, f, h, g, _, y, S, C, T, P, W, J, Y, X) => {
		e.set_text(o, t), e.set_text(d, n), e.set_text(p, r), e.set_attribute(m, "aria-label", i), e.set_text(v, a), e.set_text(b, s), e.set_attribute(x, "aria-label", c), e.set_text(w, l), e.set_text(D, u), O !== (O = f) && (E.__value = f), e.set_text(A, h), j !== (j = g) && (k.__value = g), e.set_text(N, _), F !== (F = y) && (M.__value = y), e.set_text(L, S), R !== (R = C) && (I.__value = C), e.set_text(ee, T), B !== (B = P) && (z.__value = P), e.set_text(H, W), U !== (U = J) && (V.__value = J), e.set_text(K, Y), q !== (q = X) && (G.__value = X);
	}, [
		() => P(),
		() => W(),
		() => ae(),
		() => ge(),
		() => De(),
		() => Re(),
		() => Ye(),
		() => ot(),
		() => Z(),
		() => Z(),
		() => Q(),
		() => Q(),
		() => $(),
		() => $(),
		() => qt(),
		() => qt(),
		() => an(),
		() => an(),
		() => gn(),
		() => gn(),
		() => Dn(),
		() => Dn()
	]), e.append(t, i), e.pop();
}
export { kn as default };
