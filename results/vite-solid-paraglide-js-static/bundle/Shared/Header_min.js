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
], x = [], S, C;
function w(e) {
	if (x.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (S === t) return C;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of x) if (new g(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return S = t, C = r, r;
}
function T(e) {
	let t = w(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : b;
}
var E = void 0, D = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var O, k = !1, A = () => {
	if (E) {
		let e = E?.getStore()?.locale;
		if (e) return e;
	}
	let e = b;
	!D && typeof window < "u" && window.location?.href && (e = T(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return k || (O = t, k = !0, ne(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = N();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && O !== void 0) n = O;
		else if (F(t) && P.has(t)) {
			let e = P.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return M(t);
			}
		}
		let e = j(n);
		if (e) return e;
	}
}
var te = (e) => {
	e ? window.location.href = e : window.location.reload();
}, ne = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = A();
	} catch {}
	let i = [], a = b;
	!D && typeof window < "u" && window.location?.href && (a = T(window.location.href));
	for (let t of a) if (t === "globalVariable") O = e;
	else if (t === "cookie") {
		if (D || typeof document > "u" || typeof window > "u") continue;
		let t = `${v}=${e}; path=/; max-age=${y}`;
		document.cookie = t;
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
		!D && n.reload && window.location && e !== r && te(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function j(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of _) if (e.toLowerCase() === t) return e;
}
function M(e) {
	let t = j(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${_.join(", ")}`);
}
function N() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${v}=([^;]+)`))?.[2];
	return j(e);
}
var P = /* @__PURE__ */ new Map();
function F(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var I = () => "i18n Bench", L = () => "Bench i18n", R = () => "i18n Bench", z = () => "i18n Bench", B = () => "i18n Bench", V = () => "i18n Bench", H = () => "i18n Bench", U = () => "i18n Bench", W = () => "i18n Bench", G = () => "i18n Bench", K = ((e = {}, t = {}) => {
	let n = t.locale ?? A();
	return n === "en" ? I(e) : n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : G(e);
}), q = () => "Go to GitHub", J = () => "Aller sur GitHub", Y = () => "Ir a GitHub", X = () => "Zu GitHub", Z = () => "Vai su GitHub", re = () => "Ir para o GitHub", ie = () => "前往 GitHub", ae = () => "GitHubへ", oe = () => "Go to GitHub", se = () => "Перейти на GitHub", ce = ((e = {}, t = {}) => {
	let n = t.locale ?? A();
	return n === "en" ? q(e) : n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? Z(e) : n === "pt" ? re(e) : n === "zh" ? ie(e) : n === "ja" ? ae(e) : n === "ko" ? oe(e) : se(e);
}), le = () => "Home", ue = () => "Accueil", de = () => "Inicio", fe = () => "Home", pe = () => "Home", me = () => "Início", he = () => "首页", ge = () => "ホーム", _e = () => "Home", ve = () => "Главная", ye = ((e = {}, t = {}) => {
	let n = t.locale ?? A();
	return n === "en" ? le(e) : n === "fr" ? ue(e) : n === "es" ? de(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : ve(e);
}), be = () => "Methodology", xe = () => "Méthodologie", Se = () => "Metodología", Ce = () => "Methodik", we = () => "Metodologia", Te = () => "Metodologia", Ee = () => "方法论", De = () => "手法", Oe = () => "Methodology", ke = () => "Методология", Ae = ((e = {}, t = {}) => {
	let n = t.locale ?? A();
	return n === "en" ? be(e) : n === "fr" ? xe(e) : n === "es" ? Se(e) : n === "de" ? Ce(e) : n === "it" ? we(e) : n === "pt" ? Te(e) : n === "zh" ? Ee(e) : n === "ja" ? De(e) : n === "ko" ? Oe(e) : ke(e);
}), je = () => "Mock Pages", Me = () => "Pages fictives", Ne = () => "Páginas de prueba", Pe = () => "Testseiten", Fe = () => "Pagine di test", Ie = () => "Páginas de Teste", Le = () => "模拟页面", Re = () => "テストページ", ze = () => "Mock Pages", Be = () => "Тестовые страницы", Ve = ((e = {}, t = {}) => {
	let n = t.locale ?? A();
	return n === "en" ? je(e) : n === "fr" ? Me(e) : n === "es" ? Ne(e) : n === "de" ? Pe(e) : n === "it" ? Fe(e) : n === "pt" ? Ie(e) : n === "zh" ? Le(e) : n === "ja" ? Re(e) : n === "ko" ? ze(e) : Be(e);
}), He = () => "Products", Ue = () => "Produits", We = () => "Productos", Ge = () => "Produkte", Ke = () => "Prodotti", qe = () => "Produtos", Je = () => "产品", Ye = () => "製品", Xe = () => "Products", Ze = () => "Продукты", Qe = ((e = {}, t = {}) => {
	let n = t.locale ?? A();
	return n === "en" ? He(e) : n === "fr" ? Ue(e) : n === "es" ? We(e) : n === "de" ? Ge(e) : n === "it" ? Ke(e) : n === "pt" ? qe(e) : n === "zh" ? Je(e) : n === "ja" ? Ye(e) : n === "ko" ? Xe(e) : Ze(e);
}), $e = () => "Pricing", et = () => "Tarifs", tt = () => "Precios", nt = () => "Preise", rt = () => "Prezzi", it = () => "Preços", at = () => "价格", ot = () => "価格", st = () => "Pricing", ct = () => "Цены", lt = ((e = {}, t = {}) => {
	let n = t.locale ?? A();
	return n === "en" ? $e(e) : n === "fr" ? et(e) : n === "es" ? tt(e) : n === "de" ? nt(e) : n === "it" ? rt(e) : n === "pt" ? it(e) : n === "zh" ? at(e) : n === "ja" ? ot(e) : n === "ko" ? st(e) : ct(e);
}), ut = () => "Team", dt = () => "Équipe", ft = () => "Equipo", pt = () => "Team", mt = () => "Team", ht = () => "Equipe", gt = () => "团队", _t = () => "チーム", vt = () => "Team", yt = () => "Команда", bt = ((e = {}, t = {}) => {
	let n = t.locale ?? A();
	return n === "en" ? ut(e) : n === "fr" ? dt(e) : n === "es" ? ft(e) : n === "de" ? pt(e) : n === "it" ? mt(e) : n === "pt" ? ht(e) : n === "zh" ? gt(e) : n === "ja" ? _t(e) : n === "ko" ? vt(e) : yt(e);
}), xt = () => "Blog", St = () => "Blog", Ct = () => "Blog", wt = () => "Blog", Tt = () => "Blog", Et = () => "Blog", Dt = () => "博客", Ot = () => "ブログ", kt = () => "Blog", At = () => "Блог", jt = ((e = {}, t = {}) => {
	let n = t.locale ?? A();
	return n === "en" ? xt(e) : n === "fr" ? St(e) : n === "es" ? Ct(e) : n === "de" ? wt(e) : n === "it" ? Tt(e) : n === "pt" ? Et(e) : n === "zh" ? Dt(e) : n === "ja" ? Ot(e) : n === "ko" ? kt(e) : At(e);
}), Mt = () => "Careers", Nt = () => "Carrières", Pt = () => "Carreras", Ft = () => "Karriere", It = () => "Carriere", Lt = () => "Carreiras", Rt = () => "招聘", zt = () => "採用情報", Bt = () => "Careers", Vt = () => "Вакансии", Ht = ((e = {}, t = {}) => {
	let n = t.locale ?? A();
	return n === "en" ? Mt(e) : n === "fr" ? Nt(e) : n === "es" ? Pt(e) : n === "de" ? Ft(e) : n === "it" ? It(e) : n === "pt" ? Lt(e) : n === "zh" ? Rt(e) : n === "ja" ? zt(e) : n === "ko" ? Bt(e) : Vt(e);
}), Ut = () => "FAQ", Wt = () => "FAQ", Gt = () => "FAQ", Kt = () => "FAQ", qt = () => "FAQ", Jt = () => "FAQ", Yt = () => "常见问题", Xt = () => "FAQ", Zt = () => "FAQ", Qt = () => "FAQ", $t = ((e = {}, t = {}) => {
	let n = t.locale ?? A();
	return n === "en" ? Ut(e) : n === "fr" ? Wt(e) : n === "es" ? Gt(e) : n === "de" ? Kt(e) : n === "it" ? qt(e) : n === "pt" ? Jt(e) : n === "zh" ? Yt(e) : n === "ja" ? Xt(e) : n === "ko" ? Zt(e) : Qt(e);
}), en = () => "Contact", tn = () => "Contact", nn = () => "Contacto", rn = () => "Kontakt", an = () => "Contatti", on = () => "Contato", sn = () => "联系我们", cn = () => "お問い合わせ", ln = () => "Contact", un = () => "Контакт", dn = ((e = {}, t = {}) => {
	let n = t.locale ?? A();
	return n === "en" ? en(e) : n === "fr" ? tn(e) : n === "es" ? nn(e) : n === "de" ? rn(e) : n === "it" ? an(e) : n === "pt" ? on(e) : n === "zh" ? sn(e) : n === "ja" ? cn(e) : n === "ko" ? ln(e) : un(e);
}), fn = () => "Settings", pn = () => "Paramètres", mn = () => "Ajustes", hn = () => "Einstellungen", gn = () => "Impostazioni", _n = () => "Configurações", vn = () => "设置", yn = () => "設定", bn = () => "Settings", xn = () => "Настройки", Sn = ((e = {}, t = {}) => {
	let n = t.locale ?? A();
	return n === "en" ? fn(e) : n === "fr" ? pn(e) : n === "es" ? mn(e) : n === "de" ? hn(e) : n === "it" ? gn(e) : n === "pt" ? _n(e) : n === "zh" ? vn(e) : n === "ja" ? yn(e) : n === "ko" ? bn(e) : xn(e);
}), Cn = () => "Theme: Auto", wn = () => "Thème : automatique", Tn = () => "Tema: Auto", En = () => "Thema: Auto", Dn = () => "Tema: Auto", On = () => "Tema: Automático", kn = () => "主题：自动", An = () => "テーマ：自動", jn = () => "Theme: Auto", Mn = () => "Тема: Авто", Nn = ((e = {}, t = {}) => {
	let n = t.locale ?? A();
	return n === "en" ? Cn(e) : n === "fr" ? wn(e) : n === "es" ? Tn(e) : n === "de" ? En(e) : n === "it" ? Dn(e) : n === "pt" ? On(e) : n === "zh" ? kn(e) : n === "ja" ? An(e) : n === "ko" ? jn(e) : Mn(e);
}), Pn = () => "Theme: Dark", Fn = () => "Thème : sombre", In = () => "Tema: Oscuro", Ln = () => "Thema: Dunkel", Rn = () => "Tema: Scuro", zn = () => "Tema: Escuro", Bn = () => "主题：深色", Vn = () => "テーマ：ダーク", Hn = () => "Theme: Dark", Un = () => "Тема: Темная", Wn = ((e = {}, t = {}) => {
	let n = t.locale ?? A();
	return n === "en" ? Pn(e) : n === "fr" ? Fn(e) : n === "es" ? In(e) : n === "de" ? Ln(e) : n === "it" ? Rn(e) : n === "pt" ? zn(e) : n === "zh" ? Bn(e) : n === "ja" ? Vn(e) : n === "ko" ? Hn(e) : Un(e);
}), Gn = () => "Theme: Light", Kn = () => "Thème : clair", qn = () => "Tema: Claro", Jn = () => "Thema: Hell", Yn = () => "Tema: Chiaro", Xn = () => "Tema: Claro", Zn = () => "主题：浅色", Qn = () => "テーマ：ライト", $n = () => "Theme: Light", er = () => "Тема: Светлая", tr = ((e = {}, t = {}) => {
	let n = t.locale ?? A();
	return n === "en" ? Gn(e) : n === "fr" ? Kn(e) : n === "es" ? qn(e) : n === "de" ? Jn(e) : n === "it" ? Yn(e) : n === "pt" ? Xn(e) : n === "zh" ? Zn(e) : n === "ja" ? Qn(e) : n === "ko" ? $n(e) : er(e);
}), nr = () => "Theme mode: auto (system). Click to switch to light mode.", rr = () => "Mode thème : automatique (système). Cliquez pour passer en mode clair.", ir = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", ar = () => "Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.", or = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", sr = () => "Modo de tema: auto (sistema). Clique para mudar para o modo claro.", cr = () => "主题模式：自动（系统）。点击切换到浅色模式。", lr = () => "テーマモード：自動（システム）。クリックするとライトモードに切り替わります。", ur = () => "Theme mode: auto (system). Click to switch to light mode.", dr = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", fr = ((e = {}, t = {}) => {
	let n = t.locale ?? A();
	return n === "en" ? nr(e) : n === "fr" ? rr(e) : n === "es" ? ir(e) : n === "de" ? ar(e) : n === "it" ? or(e) : n === "pt" ? sr(e) : n === "zh" ? cr(e) : n === "ja" ? lr(e) : n === "ko" ? ur(e) : dr(e);
}), pr = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, mr = (e) => `Mode thème : ${e?.mode}. Cliquez pour changer de mode.`, hr = (e) => `Modo de tema: ${e?.mode}. Haz clic para cambiar de modo.`, Q = (e) => `Themenmodus: ${e?.mode}. Klicken Sie hier, um den Modus zu wechseln.`, gr = (e) => `Modalità tema: ${e?.mode}. Clicca per cambiare modalità.`, _r = (e) => `Modo de tema: ${e?.mode}. Clique para mudar de modo.`, vr = (e) => `主题模式：${e?.mode}。点击切换模式。`, yr = (e) => `テーマモード：${e?.mode}。クリックしてモードを切り替えます。`, br = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, xr = (e) => `Режим темы: ${e?.mode}. Нажмите, чтобы сменить режим.`, Sr = ((e, t = {}) => {
	let n = t.locale ?? A();
	return n === "en" ? pr(e) : n === "fr" ? mr(e) : n === "es" ? hr(e) : n === "de" ? Q(e) : n === "it" ? gr(e) : n === "pt" ? _r(e) : n === "zh" ? vr(e) : n === "ja" ? yr(e) : n === "ko" ? br(e) : xr(e);
}), Cr = [
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
], wr = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, Tr = o("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primary\">"), Er = o("<option>");
function Dr() {
	let t = u(), i = l(), a = c(), o = (e) => {
		i(`${a.pathname.replace(/^\/[^/]+/, `/${e}`)}${a.search}${a.hash}`);
	};
	return (() => {
		var i = Tr(), a = i.firstChild;
		return a.addEventListener("change", (e) => o(e.currentTarget.value)), r(a, e(d, {
			each: Cr,
			children: (e) => (() => {
				var t = Er();
				return t.value = e, r(t, () => wr(e)), t;
			})()
		})), n(() => a.value = t.locale ?? "en"), i;
	})();
}
var Or = o("<button type=button class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\">");
function kr() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Ar() {
	let [e, t] = p("auto");
	m(() => {
		let e = kr();
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
	let o = () => e() === "auto" ? fr() : Sr({ mode: e() }), s = () => e() === "auto" ? Nn() : e() === "dark" ? Wn() : tr();
	return (() => {
		var e = Or();
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
var jr = o("<svg width=14 height=14 viewBox=\"0 0 24 24\"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d=\"m6 9 6 6 6-6\">"), Mr = o("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><div class=relative><button type=button class=\"flex cursor-pointer items-center gap-1 border-none bg-transparent nav-link\"></button></div></div></div><div class=\"flex items-center gap-4\"><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-muted-foreground transition hover:text-foreground\"><span class=sr-only></span><svg viewBox=\"0 0 16 16\"aria-hidden=true width=20 height=20><path fill=currentColor d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\">"), Nr = o("<div class=\"absolute left-0 top-full w-48 pt-2\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\">");
function Pr(e) {
	return (() => {
		var t = jr();
		return n(() => a(t, "class", e.class)), t;
	})();
}
function Fr() {
	h("Header");
	let [t, n] = p(!1), a = u(), o = () => a.locale ?? "en", c = () => [
		{
			to: `/${o()}/products`,
			label: Qe()
		},
		{
			to: `/${o()}/pricing`,
			label: lt()
		},
		{
			to: `/${o()}/team`,
			label: bt()
		},
		{
			to: `/${o()}/blog`,
			label: jt()
		},
		{
			to: `/${o()}/careers`,
			label: Ht()
		},
		{
			to: `/${o()}/faq`,
			label: $t()
		},
		{
			to: `/${o()}/contact`,
			label: dn()
		},
		{
			to: `/${o()}/settings`,
			label: Sn()
		}
	];
	return (() => {
		var a = Mr(), l = a.firstChild.firstChild, u = l.firstChild, f = u.firstChild, p = f.firstChild, m = l.nextSibling, h = m.firstChild.firstChild;
		return r(l, e(s, {
			get href() {
				return `/${o()}`;
			},
			class: "text-lg font-bold tracking-tight text-primary no-underline",
			get children() {
				return K();
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
				return ye();
			}
		}), f), r(u, e(s, {
			get href() {
				return `/${o()}/about`;
			},
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return Ae();
			}
		}), f), p.$$click = () => n(!t()), p.addEventListener("mouseleave", () => n(!1)), p.addEventListener("mouseenter", () => n(!0)), r(p, () => Ve(), null), r(p, e(Pr, { get class() {
			return `transition-transform ${t() ? "rotate-180" : ""}`;
		} }), null), r(f, (() => {
			var a = i(() => !!t());
			return () => a() && (() => {
				var t = Nr(), i = t.firstChild;
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
		})(), null), r(h, () => ce()), r(m, e(Dr, {}), null), r(m, e(Ar, {}), null), a;
	})();
}
t(["click"]);
export { Fr as default };
