import { createComponent as e, delegateEvents as t, effect as n, insert as r, memo as i, setAttribute as a, template as o } from "solid-js/web";
import { A as s, useLocation as c, useNavigate as l, useParams as u } from "@solidjs/router";
import { For as d, createEffect as f, createSignal as p, onMount as m } from "solid-js";
function h(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), m(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var g = {}, _ = [
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
], v = "PARAGLIDE_LOCALE", y = 3456e4, b = [
	"cookie",
	"globalVariable",
	"baseLocale"
], x = [], S = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var C, w = !1, T = () => {
	let e = b;
	!S && typeof window < "u" && window.location?.href && (e = U(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return w || (C = t, w = !0, D(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = L();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && C !== void 0) n = C;
		else if (G(t) && W.has(t)) {
			let e = W.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return A(t);
			}
		}
		let e = k(n);
		if (e) return e;
	}
}
var E = (e) => {
	e ? window.location.href = e : window.location.reload();
}, D = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = T();
	} catch {}
	let i = [], a = b;
	!S && typeof window < "u" && window.location?.href && (a = U(window.location.href));
	for (let t of a) if (t === "globalVariable") C = e;
	else if (t === "cookie") {
		if (S || typeof document > "u" || typeof window > "u") continue;
		let t = `${v}=${e}; path=/; max-age=${y}`;
		document.cookie = t, F();
	} else if (t === "baseLocale") continue;
	else if (G(t) && W.has(t)) {
		let n = W.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!S && n.reload && window.location && e !== r && E(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, O = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function k(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of _) if (e.toLowerCase() === t) return e;
}
function A(e) {
	let t = k(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${_.join(", ")}`);
}
function j(e) {
	return e;
}
function M(e, t) {
	return e.exec(t.href);
}
var te = v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), ne = RegExp(`(?:^|;\\s*)${te}=([^;]*)`), N = Symbol(), P = N;
function F() {
	P = N;
}
function I() {
	typeof queueMicrotask == "function" ? queueMicrotask(F) : Promise.resolve().then(F);
}
function L() {
	if (typeof document > "u") return;
	if (P !== N) return P;
	let e = document.cookie.match(ne)?.[1];
	return P = k(e), I(), P;
}
function R(e) {
	return z(e);
}
function z(e) {
	let t = j(typeof e == "string" ? new URL(e, O()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && k(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), j(t);
}
var B, V;
function H(e) {
	if (x.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (B === t) return V;
	let n = j(new URL(t, "http://example.com")), r = R(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of x) if (M(new g(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return B = t, V = a, a;
}
function U(e) {
	let t = H(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : b;
}
var W = /* @__PURE__ */ new Map();
function G(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var K = () => "Blog", q = () => "Blog", J = () => "Blog", Y = () => "Blog", X = () => "Blog", Z = () => "Blog", re = () => "博客", ie = () => "ブログ", ae = () => "Blog", oe = () => "Блог", se = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? Z(e) : n === "zh" ? re(e) : n === "ja" ? ie(e) : n === "ko" ? ae(e) : n === "ru" ? oe(e) : K(e);
}), ce = () => "Careers", le = () => "Carrières", ue = () => "Carreras", de = () => "Karriere", fe = () => "Carriere", pe = () => "Carreiras", me = () => "招聘", he = () => "採用情報", ge = () => "Careers", _e = () => "Вакансии", ve = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? le(e) : n === "es" ? ue(e) : n === "de" ? de(e) : n === "it" ? fe(e) : n === "pt" ? pe(e) : n === "zh" ? me(e) : n === "ja" ? he(e) : n === "ko" ? ge(e) : n === "ru" ? _e(e) : ce(e);
}), ye = () => "Contact", be = () => "Contact", xe = () => "Contacto", Se = () => "Kontakt", Ce = () => "Contatti", we = () => "Contato", Te = () => "联系我们", Ee = () => "お問い合わせ", De = () => "Contact", Oe = () => "Контакт", ke = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? be(e) : n === "es" ? xe(e) : n === "de" ? Se(e) : n === "it" ? Ce(e) : n === "pt" ? we(e) : n === "zh" ? Te(e) : n === "ja" ? Ee(e) : n === "ko" ? De(e) : n === "ru" ? Oe(e) : ye(e);
}), Ae = () => "FAQ", je = () => "FAQ", Me = () => "FAQ", Ne = () => "FAQ", Pe = () => "FAQ", Fe = () => "FAQ", Ie = () => "常见问题", Le = () => "FAQ", Re = () => "FAQ", ze = () => "FAQ", Be = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? je(e) : n === "es" ? Me(e) : n === "de" ? Ne(e) : n === "it" ? Pe(e) : n === "pt" ? Fe(e) : n === "zh" ? Ie(e) : n === "ja" ? Le(e) : n === "ko" ? Re(e) : n === "ru" ? ze(e) : Ae(e);
}), Ve = () => "Home", He = () => "Accueil", Ue = () => "Inicio", We = () => "Home", Ge = () => "Home", Ke = () => "Início", qe = () => "首页", Je = () => "ホーム", Ye = () => "Home", Xe = () => "Главная", Ze = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? He(e) : n === "es" ? Ue(e) : n === "de" ? We(e) : n === "it" ? Ge(e) : n === "pt" ? Ke(e) : n === "zh" ? qe(e) : n === "ja" ? Je(e) : n === "ko" ? Ye(e) : n === "ru" ? Xe(e) : Ve(e);
}), Qe = () => "Methodology", $e = () => "Méthodologie", et = () => "Metodología", tt = () => "Methodik", nt = () => "Metodologia", rt = () => "Metodologia", it = () => "方法论", at = () => "手法", ot = () => "Methodology", st = () => "Методология", ct = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? $e(e) : n === "es" ? et(e) : n === "de" ? tt(e) : n === "it" ? nt(e) : n === "pt" ? rt(e) : n === "zh" ? it(e) : n === "ja" ? at(e) : n === "ko" ? ot(e) : n === "ru" ? st(e) : Qe(e);
}), lt = () => "Mock Pages", ut = () => "Pages fictives", dt = () => "Páginas de prueba", ft = () => "Testseiten", pt = () => "Pagine di test", mt = () => "Páginas de Teste", ht = () => "模拟页面", gt = () => "テストページ", _t = () => "Mock Pages", vt = () => "Тестовые страницы", yt = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? ut(e) : n === "es" ? dt(e) : n === "de" ? ft(e) : n === "it" ? pt(e) : n === "pt" ? mt(e) : n === "zh" ? ht(e) : n === "ja" ? gt(e) : n === "ko" ? _t(e) : n === "ru" ? vt(e) : lt(e);
}), bt = () => "Pricing", xt = () => "Tarifs", St = () => "Precios", Ct = () => "Preise", wt = () => "Prezzi", Tt = () => "Preços", Et = () => "价格", Dt = () => "価格", Ot = () => "Pricing", kt = () => "Цены", At = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? xt(e) : n === "es" ? St(e) : n === "de" ? Ct(e) : n === "it" ? wt(e) : n === "pt" ? Tt(e) : n === "zh" ? Et(e) : n === "ja" ? Dt(e) : n === "ko" ? Ot(e) : n === "ru" ? kt(e) : bt(e);
}), jt = () => "Products", Mt = () => "Produits", Nt = () => "Productos", Pt = () => "Produkte", Ft = () => "Prodotti", It = () => "Produtos", Lt = () => "产品", Q = () => "製品", Rt = () => "Products", zt = () => "Продукты", Bt = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? Mt(e) : n === "es" ? Nt(e) : n === "de" ? Pt(e) : n === "it" ? Ft(e) : n === "pt" ? It(e) : n === "zh" ? Lt(e) : n === "ja" ? Q(e) : n === "ko" ? Rt(e) : n === "ru" ? zt(e) : jt(e);
}), Vt = () => "Settings", Ht = () => "Paramètres", Ut = () => "Ajustes", Wt = () => "Einstellungen", Gt = () => "Impostazioni", Kt = () => "Configurações", qt = () => "设置", Jt = () => "設定", Yt = () => "Settings", Xt = () => "Настройки", Zt = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? Ht(e) : n === "es" ? Ut(e) : n === "de" ? Wt(e) : n === "it" ? Gt(e) : n === "pt" ? Kt(e) : n === "zh" ? qt(e) : n === "ja" ? Jt(e) : n === "ko" ? Yt(e) : n === "ru" ? Xt(e) : Vt(e);
}), Qt = () => "Team", $t = () => "Équipe", en = () => "Equipo", tn = () => "Team", nn = () => "Team", rn = () => "Equipe", an = () => "团队", on = () => "チーム", sn = () => "Team", cn = () => "Команда", ln = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? $t(e) : n === "es" ? en(e) : n === "de" ? tn(e) : n === "it" ? nn(e) : n === "pt" ? rn(e) : n === "zh" ? an(e) : n === "ja" ? on(e) : n === "ko" ? sn(e) : n === "ru" ? cn(e) : Qt(e);
}), un = () => "i18n Bench", dn = () => "Bench i18n", fn = () => "i18n Bench", pn = () => "i18n Bench", mn = () => "i18n Bench", hn = () => "i18n Bench", gn = () => "i18n Bench", _n = () => "i18n Bench", vn = () => "i18n Bench", yn = () => "i18n Bench", bn = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? dn(e) : n === "es" ? fn(e) : n === "de" ? pn(e) : n === "it" ? mn(e) : n === "pt" ? hn(e) : n === "zh" ? gn(e) : n === "ja" ? _n(e) : n === "ko" ? vn(e) : n === "ru" ? yn(e) : un(e);
}), xn = () => "Go to GitHub", Sn = () => "Aller sur GitHub", Cn = () => "Ir a GitHub", wn = () => "Zu GitHub", Tn = () => "Vai su GitHub", En = () => "Ir para o GitHub", Dn = () => "前往 GitHub", On = () => "GitHubへ", kn = () => "Go to GitHub", An = () => "Перейти на GitHub", jn = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? Sn(e) : n === "es" ? Cn(e) : n === "de" ? wn(e) : n === "it" ? Tn(e) : n === "pt" ? En(e) : n === "zh" ? Dn(e) : n === "ja" ? On(e) : n === "ko" ? kn(e) : n === "ru" ? An(e) : xn(e);
}), Mn = () => "Theme: Auto", Nn = () => "Thème : automatique", Pn = () => "Tema: Auto", Fn = () => "Thema: Auto", In = () => "Tema: Auto", Ln = () => "Tema: Automático", Rn = () => "主题：自动", zn = () => "テーマ：自動", Bn = () => "Theme: Auto", Vn = () => "Тема: Авто", Hn = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? Nn(e) : n === "es" ? Pn(e) : n === "de" ? Fn(e) : n === "it" ? In(e) : n === "pt" ? Ln(e) : n === "zh" ? Rn(e) : n === "ja" ? zn(e) : n === "ko" ? Bn(e) : n === "ru" ? Vn(e) : Mn(e);
}), Un = () => "Theme: Dark", Wn = () => "Thème : sombre", Gn = () => "Tema: Oscuro", Kn = () => "Thema: Dunkel", qn = () => "Tema: Scuro", Jn = () => "Tema: Escuro", Yn = () => "主题：深色", Xn = () => "テーマ：ダーク", Zn = () => "Theme: Dark", Qn = () => "Тема: Темная", $n = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? Wn(e) : n === "es" ? Gn(e) : n === "de" ? Kn(e) : n === "it" ? qn(e) : n === "pt" ? Jn(e) : n === "zh" ? Yn(e) : n === "ja" ? Xn(e) : n === "ko" ? Zn(e) : n === "ru" ? Qn(e) : Un(e);
}), er = () => "Theme mode: auto (system). Click to switch to light mode.", tr = () => "Mode thème : automatique (système). Cliquez pour passer en mode clair.", nr = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", rr = () => "Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.", ir = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", ar = () => "Modo de tema: auto (sistema). Clique para mudar para o modo claro.", or = () => "主题模式：自动（系统）。点击切换到浅色模式。", sr = () => "テーマモード：自動（システム）。クリックするとライトモードに切り替わります。", cr = () => "Theme mode: auto (system). Click to switch to light mode.", lr = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", ur = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? tr(e) : n === "es" ? nr(e) : n === "de" ? rr(e) : n === "it" ? ir(e) : n === "pt" ? ar(e) : n === "zh" ? or(e) : n === "ja" ? sr(e) : n === "ko" ? cr(e) : n === "ru" ? lr(e) : er(e);
}), dr = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, fr = (e) => `Mode thème : ${e?.mode}. Cliquez pour changer de mode.`, pr = (e) => `Modo de tema: ${e?.mode}. Haz clic para cambiar de modo.`, mr = (e) => `Themenmodus: ${e?.mode}. Klicken Sie hier, um den Modus zu wechseln.`, hr = (e) => `Modalità tema: ${e?.mode}. Clicca per cambiare modalità.`, gr = (e) => `Modo de tema: ${e?.mode}. Clique para mudar de modo.`, _r = (e) => `主题模式：${e?.mode}。点击切换模式。`, vr = (e) => `テーマモード：${e?.mode}。クリックしてモードを切り替えます。`, yr = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, br = (e) => `Режим темы: ${e?.mode}. Нажмите, чтобы сменить режим.`, xr = ((e, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? fr(e) : n === "es" ? pr(e) : n === "de" ? mr(e) : n === "it" ? hr(e) : n === "pt" ? gr(e) : n === "zh" ? _r(e) : n === "ja" ? vr(e) : n === "ko" ? yr(e) : n === "ru" ? br(e) : dr(e);
}), Sr = () => "Theme: Light", Cr = () => "Thème : clair", wr = () => "Tema: Claro", Tr = () => "Thema: Hell", Er = () => "Tema: Chiaro", Dr = () => "Tema: Claro", Or = () => "主题：浅色", kr = () => "テーマ：ライト", Ar = () => "Theme: Light", jr = () => "Тема: Светлая", Mr = ((e = {}, t = {}) => {
	let n = t.locale ?? T();
	return n === "fr" ? Cr(e) : n === "es" ? wr(e) : n === "de" ? Tr(e) : n === "it" ? Er(e) : n === "pt" ? Dr(e) : n === "zh" ? Or(e) : n === "ja" ? kr(e) : n === "ko" ? Ar(e) : n === "ru" ? jr(e) : Sr(e);
}), Nr = [
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
], Pr = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, Fr = o("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primary\">"), Ir = o("<option>");
function Lr() {
	let t = u(), i = l(), a = c(), o = (e) => {
		let t = a.pathname.replace(/^\/[^/]+/, `/${e}`);
		i(`${t}${a.search}${a.hash}`);
	};
	return (() => {
		var i = Fr(), a = i.firstChild;
		return a.addEventListener("change", (e) => o(e.currentTarget.value)), r(a, e(d, {
			each: Nr,
			children: (e) => (() => {
				var t = Ir();
				return t.value = e, r(t, () => Pr(e)), t;
			})()
		})), n(() => a.value = t.locale ?? "en"), i;
	})();
}
var Rr = o("<button type=button class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\">");
function zr() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Br() {
	let [e, t] = p("auto");
	m(() => {
		let e = zr();
		t(e), $(e);
	}), f(() => {
		if (e() !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return t.addEventListener("change", n), () => {
			t.removeEventListener("change", n);
		};
	});
	function i() {
		let n = e(), r = n === "light" ? "dark" : n === "dark" ? "auto" : "light";
		t(r), $(r), window.localStorage.setItem("theme", r);
	}
	let o = () => e() === "auto" ? ur() : xr({ mode: e() }), s = () => e() === "auto" ? Hn() : e() === "dark" ? $n() : Mr();
	return (() => {
		var e = Rr();
		return e.$$click = i, r(e, s), n((t) => {
			var n = o(), r = o();
			return n !== t.e && a(e, "aria-label", t.e = n), r !== t.t && a(e, "title", t.t = r), t;
		}, {
			e: void 0,
			t: void 0
		}), e;
	})();
}
t(["click"]);
var Vr = o("<svg width=14 height=14 viewBox=\"0 0 24 24\"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d=\"m6 9 6 6 6-6\">"), Hr = o("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><div class=relative><button type=button class=\"flex cursor-pointer items-center gap-1 border-none bg-transparent nav-link\"></button></div></div></div><div class=\"flex items-center gap-4\"><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-muted-foreground transition hover:text-foreground\"><span class=sr-only></span><svg viewBox=\"0 0 16 16\"aria-hidden=true width=20 height=20><path fill=currentColor d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\">"), Ur = o("<div class=\"absolute left-0 top-full w-48 pt-2\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\">");
function Wr(e) {
	return (() => {
		var t = Vr();
		return n(() => a(t, "class", e.class)), t;
	})();
}
function Gr() {
	h("Header");
	let [t, n] = p(!1), a = u(), o = () => a.locale ?? "en", c = () => [
		{
			to: `/${o()}/products`,
			label: Bt()
		},
		{
			to: `/${o()}/pricing`,
			label: At()
		},
		{
			to: `/${o()}/team`,
			label: ln()
		},
		{
			to: `/${o()}/blog`,
			label: se()
		},
		{
			to: `/${o()}/careers`,
			label: ve()
		},
		{
			to: `/${o()}/faq`,
			label: Be()
		},
		{
			to: `/${o()}/contact`,
			label: ke()
		},
		{
			to: `/${o()}/settings`,
			label: Zt()
		}
	];
	return (() => {
		var a = Hr(), l = a.firstChild.firstChild, u = l.firstChild, f = u.firstChild, p = f.firstChild, m = l.nextSibling, h = m.firstChild.firstChild;
		return r(l, e(s, {
			get href() {
				return `/${o()}`;
			},
			class: "text-lg font-bold tracking-tight text-primary no-underline",
			get children() {
				return bn();
			}
		}), u), r(u, e(s, {
			get href() {
				return `/${o()}`;
			},
			end: !0,
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return Ze();
			}
		}), f), r(u, e(s, {
			get href() {
				return `/${o()}/about`;
			},
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return ct();
			}
		}), f), p.$$click = () => n(!t()), p.addEventListener("mouseleave", () => n(!1)), p.addEventListener("mouseenter", () => n(!0)), r(p, () => yt(), null), r(p, e(Wr, { get class() {
			return `transition-transform ${t() ? "rotate-180" : ""}`;
		} }), null), r(f, (() => {
			var a = i(() => !!t());
			return () => a() && (() => {
				var t = Ur(), i = t.firstChild;
				return t.addEventListener("mouseleave", () => n(!1)), t.addEventListener("mouseenter", () => n(!0)), r(i, e(d, {
					get each() {
						return c();
					},
					children: (t) => e(s, {
						get href() {
							return t.to;
						},
						class: "block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent",
						onClick: () => n(!1),
						get children() {
							return t.label;
						}
					})
				})), t;
			})();
		})(), null), r(h, () => jn()), r(m, e(Lr, {}), null), r(m, e(Br, {}), null), a;
	})();
}
t(["click"]);
export { Gr as default };
