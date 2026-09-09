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
], o = [], s = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var c, l = !1, u = () => {
	let e = a;
	!s && typeof window < "u" && window.location?.href && (e = A(window.location.href));
	let t = d(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return l || (c = t, l = !0, p(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function d(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = T();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && c !== void 0) n = c;
		else if (M(t) && j.has(t)) {
			let e = j.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return g(t);
			}
		}
		let e = h(n);
		if (e) return e;
	}
}
var f = (e) => {
	e ? window.location.href = e : window.location.reload();
}, p = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, o;
	try {
		o = u();
	} catch {}
	let l = [], d = a;
	!s && typeof window < "u" && window.location?.href && (d = A(window.location.href));
	for (let t of d) if (t === "globalVariable") c = e;
	else if (t === "cookie") {
		if (s || typeof document > "u" || typeof window > "u") continue;
		let t = `${r}=${e}; path=/; max-age=${i}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (M(t) && j.has(t)) {
		let n = j.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), l.push(r));
		}
	}
	let p = () => {
		!s && n.reload && window.location && e !== o && f(void 0);
	};
	if (l.length) return Promise.all(l).then(() => {
		p();
	});
	p();
}, m = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function h(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of n) if (e.toLowerCase() === t) return e;
}
function g(e) {
	let t = h(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${n.join(", ")}`);
}
function _(e) {
	return e;
}
function v(e, t) {
	return e.exec(t.href);
}
var y = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function w() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function T() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = h(e), w(), S;
}
function E(e) {
	return D(e);
}
function D(e) {
	let t = _(typeof e == "string" ? new URL(e, m()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var O, k;
function ee(e) {
	if (o.length === 0) return;
	let n = typeof e == "string" ? e : e.href;
	if (O === n) return k;
	let r = _(new URL(n, "http://example.com")), i = E(r), a = i.href === r.href ? [r] : [r, i], s;
	for (let e of a) {
		for (let n of o) if (v(new t(n.match, e.href), e)) {
			s = n;
			break;
		}
		if (s) break;
	}
	return O = n, k = s, s;
}
function A(e) {
	let t = ee(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : a;
}
var j = /* @__PURE__ */ new Map();
function M(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var N = () => "Arabic (ar)", P = () => "Arabe (ar)", F = () => "Árabe (ar)", I = () => "Arabisch (ar)", L = () => "Arabo (ar)", R = () => "Árabe (ar)", z = () => "阿拉伯语 (ar)", B = () => "アラビア語 (ar)", V = () => "Arabic (ar)", H = () => "Арабский (ar)", U = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? P(e) : n === "es" ? F(e) : n === "de" ? I(e) : n === "it" ? L(e) : n === "pt" ? R(e) : n === "zh" ? z(e) : n === "ja" ? B(e) : n === "ko" ? V(e) : n === "ru" ? H(e) : N(e);
}), W = () => "Chinese Simplified (zh-CN)", G = () => "Chinois simplifié (zh-CN)", K = () => "Chino simplificado (zh-CN)", q = () => "Chinesisch vereinfacht (zh-CN)", J = () => "Cinese semplificato (zh-CN)", Y = () => "Chinês Simplificado (zh-CN)", X = () => "简体中文 (zh-CN)", te = () => "中国語（簡体字） (zh-CN)", ne = () => "Chinese Simplified (zh-CN)", re = () => "Китайский упрощенный (zh-CN)", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? G(e) : n === "es" ? K(e) : n === "de" ? q(e) : n === "it" ? J(e) : n === "pt" ? Y(e) : n === "zh" ? X(e) : n === "ja" ? te(e) : n === "ko" ? ne(e) : n === "ru" ? re(e) : W(e);
}), ie = () => "Use dark color scheme", ae = () => "Utiliser le thème sombre", oe = () => "Usar esquema de colores oscuro", se = () => "Dunkles Farbschema verwenden", ce = () => "Usa lo schema colori scuro", le = () => "Usar esquema de cores escuro", ue = () => "使用深色配色方案", de = () => "ダークカラー（暗い配色）を使用する", fe = () => "Use dark color scheme", pe = () => "Использовать темную цветовую схему", me = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? ae(e) : n === "es" ? oe(e) : n === "de" ? se(e) : n === "it" ? ce(e) : n === "pt" ? le(e) : n === "zh" ? ue(e) : n === "ja" ? de(e) : n === "ko" ? fe(e) : n === "ru" ? pe(e) : ie(e);
}), he = () => "Dark Mode", ge = () => "Mode sombre", _e = () => "Modo oscuro", ve = () => "Dunkelmodus", ye = () => "Modalità scura", be = () => "Modo Escuro", xe = () => "深色模式", Se = () => "ダークモード", Ce = () => "Dark Mode", we = () => "Темная тема", Te = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? ge(e) : n === "es" ? _e(e) : n === "de" ? ve(e) : n === "it" ? ye(e) : n === "pt" ? be(e) : n === "zh" ? xe(e) : n === "ja" ? Se(e) : n === "ko" ? Ce(e) : n === "ru" ? we(e) : he(e);
}), Ee = () => "Default Language", De = () => "Langue par défaut", Oe = () => "Idioma predeterminado", ke = () => "Standardsprache", Ae = () => "Lingua predefinita", je = () => "Idioma padrão", Me = () => "默认语言", Ne = () => "デフォルトの言語", Pe = () => "Default Language", Fe = () => "Язык по умолчанию", Ie = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? De(e) : n === "es" ? Oe(e) : n === "de" ? ke(e) : n === "it" ? Ae(e) : n === "pt" ? je(e) : n === "zh" ? Me(e) : n === "ja" ? Ne(e) : n === "ko" ? Pe(e) : n === "ru" ? Fe(e) : Ee(e);
}), Le = () => "Email Notifications", Re = () => "Notifications e-mail", ze = () => "Notificaciones por correo electrónico", Be = () => "E-Mail-Benachrichtigungen", Ve = () => "Notifiche via email", He = () => "Notificações por e-mail", Ue = () => "电子邮件通知", We = () => "メール通知", Ge = () => "Email Notifications", Ke = () => "Уведомления по почте", qe = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? Re(e) : n === "es" ? ze(e) : n === "de" ? Be(e) : n === "it" ? Ve(e) : n === "pt" ? He(e) : n === "zh" ? Ue(e) : n === "ja" ? We(e) : n === "ko" ? Ge(e) : n === "ru" ? Ke(e) : Le(e);
}), Je = () => "English (en)", Ye = () => "Anglais (en)", Xe = () => "Inglés (en)", Ze = () => "Englisch (en)", Qe = () => "Inglese (en)", $e = () => "Inglês (en)", et = () => "英语 (en)", tt = () => "英語 (en)", nt = () => "English (en)", rt = () => "Английский (en)", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? Ye(e) : n === "es" ? Xe(e) : n === "de" ? Ze(e) : n === "it" ? Qe(e) : n === "pt" ? $e(e) : n === "zh" ? et(e) : n === "ja" ? tt(e) : n === "ko" ? nt(e) : n === "ru" ? rt(e) : Je(e);
}), it = () => "French (fr)", at = () => "Français (fr)", ot = () => "Francés (fr)", st = () => "Französisch (fr)", ct = () => "Francese (fr)", lt = () => "Francés (fr)", ut = () => "法语 (fr)", dt = () => "フランス語 (fr)", ft = () => "French (fr)", pt = () => "Французский (fr)", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? at(e) : n === "es" ? ot(e) : n === "de" ? st(e) : n === "it" ? ct(e) : n === "pt" ? lt(e) : n === "zh" ? ut(e) : n === "ja" ? dt(e) : n === "ko" ? ft(e) : n === "ru" ? pt(e) : it(e);
}), mt = () => "German (de)", ht = () => "Allemand (de)", gt = () => "Alemán (de)", _t = () => "Deutsch (de)", vt = () => "Tedesco (de)", yt = () => "Alemão (de)", bt = () => "德语 (de)", xt = () => "ドイツ語 (de)", St = () => "German (de)", Ct = () => "Немецкий (de)", wt = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? ht(e) : n === "es" ? gt(e) : n === "de" ? _t(e) : n === "it" ? vt(e) : n === "pt" ? yt(e) : n === "zh" ? bt(e) : n === "ja" ? xt(e) : n === "ko" ? St(e) : n === "ru" ? Ct(e) : mt(e);
}), Tt = () => "Japanese (ja)", Et = () => "Japonais (ja)", Dt = () => "Japonés (ja)", Ot = () => "Japanisch (ja)", kt = () => "Giapponese (ja)", At = () => "Japonês (ja)", jt = () => "日语 (ja)", Mt = () => "日本語 (ja)", Nt = () => "Japanese (ja)", Pt = () => "Японский (ja)", Ft = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? Et(e) : n === "es" ? Dt(e) : n === "de" ? Ot(e) : n === "it" ? kt(e) : n === "pt" ? At(e) : n === "zh" ? jt(e) : n === "ja" ? Mt(e) : n === "ko" ? Nt(e) : n === "ru" ? Pt(e) : Tt(e);
}), It = () => "Spanish (es)", Lt = () => "Espagnol (es)", Rt = () => "Español (es)", zt = () => "Spanisch (es)", Bt = () => "Spagnolo (es)", Vt = () => "Espanhol (es)", Ht = () => "西班牙语 (es)", Ut = () => "スペイン語 (es)", Wt = () => "Spanish (es)", Gt = () => "Испанский (es)", Kt = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? Lt(e) : n === "es" ? Rt(e) : n === "de" ? zt(e) : n === "it" ? Bt(e) : n === "pt" ? Vt(e) : n === "zh" ? Ht(e) : n === "ja" ? Ut(e) : n === "ko" ? Wt(e) : n === "ru" ? Gt(e) : It(e);
}), qt = () => "Preferences", Jt = () => "Préférences", Yt = () => "Preferencias", Xt = () => "Einstellungen", Zt = () => "Preferenze", Qt = () => "Preferências", $t = () => "偏好", en = () => "設定", tn = () => "Preferences", nn = () => "Предпочтения", rn = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? Jt(e) : n === "es" ? Yt(e) : n === "de" ? Xt(e) : n === "it" ? Zt(e) : n === "pt" ? Qt(e) : n === "zh" ? $t(e) : n === "ja" ? en(e) : n === "ko" ? tn(e) : n === "ru" ? nn(e) : qt(e);
}), an = () => "Toggle dark mode", on = () => "Basculer le mode sombre", sn = () => "Cambiar modo oscuro", cn = () => "Dunkelmodus umschalten", ln = () => "Attiva/disattiva modalità scura", un = () => "Alternar modo escuro", dn = () => "切换深色模式", fn = () => "ダークモードの切り替え", pn = () => "Toggle dark mode", mn = () => "Переключить темную тему", hn = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? on(e) : n === "es" ? sn(e) : n === "de" ? cn(e) : n === "it" ? ln(e) : n === "pt" ? un(e) : n === "zh" ? dn(e) : n === "ja" ? fn(e) : n === "ko" ? pn(e) : n === "ru" ? mn(e) : an(e);
}), gn = () => "Toggle notifications", _n = () => "Activer/désactiver les notifications", vn = () => "Cambiar notificaciones", yn = () => "Benachrichtigungen umschalten", bn = () => "Attiva/disattiva notifiche", xn = () => "Alternar notificações", Sn = () => "切换通知", Cn = () => "通知の切り替え", wn = () => "Toggle notifications", Tn = () => "Переключить уведомления", En = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? _n(e) : n === "es" ? vn(e) : n === "de" ? yn(e) : n === "it" ? bn(e) : n === "pt" ? xn(e) : n === "zh" ? Sn(e) : n === "ja" ? Cn(e) : n === "ko" ? wn(e) : n === "ru" ? Tn(e) : gn(e);
}), Dn = () => "Receive weekly benchmark reports", On = () => "Recevoir les rapports hebdomadaires", kn = () => "Recibir informes semanales de benchmarks", An = () => "Wöchentliche Benchmark-Berichte erhalten", jn = () => "Ricevi rapporti settimanali sui benchmark", Mn = () => "Receber relatórios semanais de benchmarks", Nn = () => "接收每周基准测试报告", Pn = () => "毎週のベンチマークレポートを受け取る", Fn = () => "Receive weekly benchmark reports", In = () => "Получать еженедельные отчеты о бенчмарках", Ln = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? On(e) : n === "es" ? kn(e) : n === "de" ? An(e) : n === "it" ? jn(e) : n === "pt" ? Mn(e) : n === "zh" ? Nn(e) : n === "ja" ? Pn(e) : n === "ko" ? Fn(e) : n === "ru" ? In(e) : Dn(e);
}), Rn = e.from_html("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"> </h2> <div class=\"space-y-4\"><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"> </p> <p class=\"text-xs text-muted-foreground\"> </p></div> <button type=\"button\" class=\"h-6 w-11 rounded-full bg-primary transition-colors\"><span class=\"block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform\"></span></button></div> <div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"> </p> <p class=\"text-xs text-muted-foreground\"> </p></div> <button type=\"button\" class=\"h-6 w-11 rounded-full bg-muted transition-colors\"><span class=\"block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform\"></span></button></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none\"><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option></select></div></div></section>");
function zn(t, n) {
	e.push(n, !1);
	let r = "settings-default-language";
	e.init();
	var i = Rn(), a = e.child(i), o = e.only_child(a, !0), s = e.sibling(a, 2), c = e.child(s), l = e.child(c), u = e.child(l), d = e.only_child(u, !0), f = e.sibling(u, 2), p = e.only_child(f, !0);
	e.reset(l);
	var m = e.sibling(l, 2);
	e.reset(c);
	var h = e.sibling(c, 2), g = e.child(h), _ = e.child(g), v = e.only_child(_, !0), y = e.sibling(_, 2), b = e.only_child(y, !0);
	e.reset(g);
	var x = e.sibling(g, 2);
	e.reset(h);
	var S = e.sibling(h, 2), C = e.child(S);
	e.set_attribute(C, "for", r);
	var w = e.only_child(C, !0), T = e.sibling(C, 2);
	e.set_attribute(T, "id", r);
	var E = e.child(T), D = e.only_child(E, !0), O = {}, k = e.sibling(E), ee = e.only_child(k, !0), A = {}, j = e.sibling(k), M = e.only_child(j, !0), N = {}, P = e.sibling(j), F = e.only_child(P, !0), I = {}, L = e.sibling(P), R = e.only_child(L, !0), z = {}, B = e.sibling(L), V = e.only_child(B, !0), H = {}, W = e.sibling(B), G = e.only_child(W, !0), K = {};
	e.reset(T), e.reset(S), e.reset(s), e.reset(i), e.template_effect((t, n, r, i, a, s, c, l, u, f, h, g, _, y, S, C, T, U, q, J, Y, X) => {
		e.set_text(o, t), e.set_text(d, n), e.set_text(p, r), e.set_attribute(m, "aria-label", i), e.set_text(v, a), e.set_text(b, s), e.set_attribute(x, "aria-label", c), e.set_text(w, l), e.set_text(D, u), O !== (O = f) && (E.__value = O), e.set_text(ee, h), A !== (A = g) && (k.__value = A), e.set_text(M, _), N !== (N = y) && (j.__value = N), e.set_text(F, S), I !== (I = C) && (P.__value = I), e.set_text(R, T), z !== (z = U) && (L.__value = z), e.set_text(V, q), H !== (H = J) && (B.__value = H), e.set_text(G, Y), K !== (K = X) && (W.__value = K);
	}, [
		() => rn(),
		() => qe(),
		() => Ln(),
		() => En(),
		() => Te(),
		() => me(),
		() => hn(),
		() => Ie(),
		() => Q(),
		() => Q(),
		() => $(),
		() => $(),
		() => wt(),
		() => wt(),
		() => Kt(),
		() => Kt(),
		() => Ft(),
		() => Ft(),
		() => Z(),
		() => Z(),
		() => U(),
		() => U()
	]), e.append(t, i), e.pop();
}
export { zn as default };
