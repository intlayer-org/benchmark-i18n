import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Link as r, useNavigate as i, useParams as a } from "@tanstack/react-router";
import { ChevronDown as o } from "lucide-react";
import { Fragment as s, jsxDEV as c } from "react/jsx-dev-runtime";
var ee = {}, l = [
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
	!m && typeof window < "u" && window.location?.href && (e = N(window.location.href));
	let t = v(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, y(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function v(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ae();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (F(t) && P.has(t)) {
			let e = P.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return x(t);
			}
		}
		let e = b(n);
		if (e) return e;
	}
}
var te = (e) => {
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
	!m && typeof window < "u" && window.location?.href && (a = N(window.location.href));
	for (let t of a) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${u}=${e}; path=/; max-age=${d}`;
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
		!m && n.reload && window.location && e !== r && te(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function b(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of l) if (e.toLowerCase() === t) return e;
}
function x(e) {
	let t = b(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${l.join(", ")}`);
}
function S(e) {
	return e;
}
function C(e, t) {
	return e.exec(t.href);
}
var w = u.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), re = RegExp(`(?:^|;\\s*)${w}=([^;]*)`), T = Symbol(), E = T;
function D() {
	E = T;
}
function ie() {
	typeof queueMicrotask == "function" ? queueMicrotask(D) : Promise.resolve().then(D);
}
function ae() {
	if (typeof document > "u") return;
	if (E !== T) return E;
	let e = document.cookie.match(re)?.[1];
	return E = b(e), ie(), E;
}
function O(e) {
	return k(e);
}
function k(e) {
	let t = S(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && b(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), S(t);
}
var A, j;
function M(e) {
	if (p.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (A === t) return j;
	let n = S(new URL(t, "http://example.com")), r = O(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of p) if (C(new ee(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return A = t, j = a, a;
}
function N(e) {
	let t = M(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : f;
}
var P = /* @__PURE__ */ new Map();
function F(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var I = () => "Blog", L = () => "Careers", R = () => "Contact", z = () => "FAQ", B = () => "Go to GitHub", V = () => "Home", H = () => "Methodology", U = () => "Mock Pages", W = () => "Pricing", G = () => "Products", K = () => "Settings", q = () => "Team", J = () => "Theme: Auto", oe = () => "Theme: Dark", se = () => "Theme: Light", ce = () => "Theme mode: auto (system). Click to switch to light mode.", le = () => "Theme mode: dark. Click to switch to auto (system) mode.", ue = () => "Theme mode: light. Click to switch to dark mode.", de = () => "Blog", fe = () => "Carrières", pe = () => "Contact", me = () => "FAQ", he = () => "Aller sur GitHub", ge = () => "Accueil", _e = () => "Méthodologie", ve = () => "Pages de test", ye = () => "Tarifs", be = () => "Produits", xe = () => "Paramètres", Se = () => "Équipe", Ce = () => "Thème : Auto", we = () => "Thème : Sombre", Te = () => "Thème : Clair", Ee = () => "Mode thématique : auto (système). Cliquez pour passer en mode clair.", De = () => "Mode thématique : sombre. Cliquez pour passer en mode auto (système).", Oe = () => "Mode thématique : clair. Cliquez pour passer en mode sombre.", ke = () => "Blog", Ae = () => "Carreras", je = () => "Contacto", Me = () => "FAQ", Ne = () => "Ir a GitHub", Pe = () => "Inicio", Fe = () => "Metodología", Ie = () => "Páginas de prueba", Le = () => "Precios", Re = () => "Productos", ze = () => "Ajustes", Be = () => "Equipo", Ve = () => "Tema: Auto", He = () => "Tema: Oscuro", Ue = () => "Tema: Claro", We = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", Ge = () => "Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).", Ke = () => "Modo de tema: claro. Haz clic para cambiar al modo oscuro.", qe = () => "Blog", Je = () => "Karriere", Ye = () => "Kontakt", Xe = () => "FAQ", Ze = () => "Zu GitHub", Qe = () => "Startseite", $e = () => "Methodik", et = () => "Testseiten", tt = () => "Preise", nt = () => "Produkte", rt = () => "Einstellungen", it = () => "Team", at = () => "Thema: Auto", ot = () => "Thema: Dunkel", st = () => "Thema: Hell", ct = () => "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.", lt = () => "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.", ut = () => "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.", dt = () => "Blog", ft = () => "Carriere", pt = () => "Contatti", mt = () => "FAQ", ht = () => "Vai su GitHub", gt = () => "Home", _t = () => "Metodologia", vt = () => "Pagine di test", yt = () => "Prezzi", bt = () => "Prodotti", xt = () => "Impostazioni", St = () => "Team", Ct = () => "Tema: Auto", wt = () => "Tema: Scuro", Tt = () => "Tema: Chiaro", Et = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", Dt = () => "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).", Ot = () => "Modalità tema: chiara. Clicca per passare alla modalità scura.", kt = () => "Blog", At = () => "Carreiras", jt = () => "Contato", Mt = () => "FAQ", Nt = () => "Ir para GitHub", Pt = () => "Início", Ft = () => "Metodologia", It = () => "Páginas de teste", Lt = () => "Preços", Rt = () => "Produtos", zt = () => "Configurações", Bt = () => "Equipe", Vt = () => "Tema: Auto", Ht = () => "Tema: Escuro", Ut = () => "Tema: Claro", Wt = () => "Modo de tema: automático (sistema). Clique para mudar para o modo claro.", Gt = () => "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).", Kt = () => "Modo de tema: claro. Clique para mudar para o modo escuro.", qt = () => "博客", Jt = () => "职业生涯", Yt = () => "联系我们", Xt = () => "常见问题", Zt = () => "访问 GitHub", Qt = () => "首页", $t = () => "方法论", en = () => "模拟页面", tn = () => "价格", nn = () => "产品", rn = () => "设置", an = () => "团队", on = () => "主题：自动", sn = () => "主题：暗黑", cn = () => "主题：明亮", ln = () => "主题模式：自动（系统）。点击切换到明亮模式。", un = () => "主题模式：暗黑。点击切换到自动（系统）模式。", dn = () => "主题模式：明亮。点击切换到暗黑模式。", fn = () => "ブログ", pn = () => "採用情報", mn = () => "お問い合わせ", hn = () => "FAQ", gn = () => "GitHubへ", _n = () => "ホーム", vn = () => "方法論", yn = () => "モックページ", bn = () => "料金", xn = () => "製品", Sn = () => "設定", Cn = () => "チーム", wn = () => "テーマ：自動", Tn = () => "テーマ：ダーク", En = () => "テーマ：ライト", Dn = () => "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。", On = () => "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。", kn = () => "テーマモード：ライト。クリックしてダークモードに切り替えます。", An = () => "블로그", jn = () => "채용", Mn = () => "문의하기", Nn = () => "FAQ", Pn = () => "GitHub으로 이동", Fn = () => "홈", In = () => "방법론", Ln = () => "모의 페이지", Rn = () => "요금", zn = () => "제품", Bn = () => "설정", Vn = () => "팀", Hn = () => "테마: 자동", Un = () => "테마: 다크", Wn = () => "테마: 라이트", Gn = () => "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.", Kn = () => "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.", qn = () => "테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.", Jn = () => "Блог", Yn = () => "Карьера", Xn = () => "Контакт", Zn = () => "FAQ", Qn = () => "Перейти на GitHub", $n = () => "Главная", er = () => "Методология", tr = () => "Тестовые страницы", nr = () => "Цены", rr = () => "Продукты", ir = () => "Настройки", ar = () => "Команда", or = () => "Тема: Авто", sr = () => "Тема: Темная", cr = () => "Тема: Светлая", lr = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", ur = () => "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.", dr = () => "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.", fr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? de(e) : n === "es" ? ke(e) : n === "de" ? qe(e) : n === "it" ? dt(e) : n === "pt" ? kt(e) : n === "zh" ? qt(e) : n === "ja" ? fn(e) : n === "ko" ? An(e) : n === "ru" ? Jn(e) : I(e);
}), pr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? fe(e) : n === "es" ? Ae(e) : n === "de" ? Je(e) : n === "it" ? ft(e) : n === "pt" ? At(e) : n === "zh" ? Jt(e) : n === "ja" ? pn(e) : n === "ko" ? jn(e) : n === "ru" ? Yn(e) : L(e);
}), mr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? pe(e) : n === "es" ? je(e) : n === "de" ? Ye(e) : n === "it" ? pt(e) : n === "pt" ? jt(e) : n === "zh" ? Yt(e) : n === "ja" ? mn(e) : n === "ko" ? Mn(e) : n === "ru" ? Xn(e) : R(e);
}), hr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? me(e) : n === "es" ? Me(e) : n === "de" ? Xe(e) : n === "it" ? mt(e) : n === "pt" ? Mt(e) : n === "zh" ? Xt(e) : n === "ja" ? hn(e) : n === "ko" ? Nn(e) : n === "ru" ? Zn(e) : z(e);
}), gr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? he(e) : n === "es" ? Ne(e) : n === "de" ? Ze(e) : n === "it" ? ht(e) : n === "pt" ? Nt(e) : n === "zh" ? Zt(e) : n === "ja" ? gn(e) : n === "ko" ? Pn(e) : n === "ru" ? Qn(e) : B(e);
}), _r = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? ge(e) : n === "es" ? Pe(e) : n === "de" ? Qe(e) : n === "it" ? gt(e) : n === "pt" ? Pt(e) : n === "zh" ? Qt(e) : n === "ja" ? _n(e) : n === "ko" ? Fn(e) : n === "ru" ? $n(e) : V(e);
}), vr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? _e(e) : n === "es" ? Fe(e) : n === "de" ? $e(e) : n === "it" ? _t(e) : n === "pt" ? Ft(e) : n === "zh" ? $t(e) : n === "ja" ? vn(e) : n === "ko" ? In(e) : n === "ru" ? er(e) : H(e);
}), Y = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? ve(e) : n === "es" ? Ie(e) : n === "de" ? et(e) : n === "it" ? vt(e) : n === "pt" ? It(e) : n === "zh" ? en(e) : n === "ja" ? yn(e) : n === "ko" ? Ln(e) : n === "ru" ? tr(e) : U(e);
}), yr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? ye(e) : n === "es" ? Le(e) : n === "de" ? tt(e) : n === "it" ? yt(e) : n === "pt" ? Lt(e) : n === "zh" ? tn(e) : n === "ja" ? bn(e) : n === "ko" ? Rn(e) : n === "ru" ? nr(e) : W(e);
}), br = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? be(e) : n === "es" ? Re(e) : n === "de" ? nt(e) : n === "it" ? bt(e) : n === "pt" ? Rt(e) : n === "zh" ? nn(e) : n === "ja" ? xn(e) : n === "ko" ? zn(e) : n === "ru" ? rr(e) : G(e);
}), xr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? xe(e) : n === "es" ? ze(e) : n === "de" ? rt(e) : n === "it" ? xt(e) : n === "pt" ? zt(e) : n === "zh" ? rn(e) : n === "ja" ? Sn(e) : n === "ko" ? Bn(e) : n === "ru" ? ir(e) : K(e);
}), Sr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Se(e) : n === "es" ? Be(e) : n === "de" ? it(e) : n === "it" ? St(e) : n === "pt" ? Bt(e) : n === "zh" ? an(e) : n === "ja" ? Cn(e) : n === "ko" ? Vn(e) : n === "ru" ? ar(e) : q(e);
}), Cr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Ce(e) : n === "es" ? Ve(e) : n === "de" ? at(e) : n === "it" ? Ct(e) : n === "pt" ? Vt(e) : n === "zh" ? on(e) : n === "ja" ? wn(e) : n === "ko" ? Hn(e) : n === "ru" ? or(e) : J(e);
}), wr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? we(e) : n === "es" ? He(e) : n === "de" ? ot(e) : n === "it" ? wt(e) : n === "pt" ? Ht(e) : n === "zh" ? sn(e) : n === "ja" ? Tn(e) : n === "ko" ? Un(e) : n === "ru" ? sr(e) : oe(e);
}), Tr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Te(e) : n === "es" ? Ue(e) : n === "de" ? st(e) : n === "it" ? Tt(e) : n === "pt" ? Ut(e) : n === "zh" ? cn(e) : n === "ja" ? En(e) : n === "ko" ? Wn(e) : n === "ru" ? cr(e) : se(e);
}), Er = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Ee(e) : n === "es" ? We(e) : n === "de" ? ct(e) : n === "it" ? Et(e) : n === "pt" ? Wt(e) : n === "zh" ? ln(e) : n === "ja" ? Dn(e) : n === "ko" ? Gn(e) : n === "ru" ? lr(e) : ce(e);
}), Dr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? De(e) : n === "es" ? Ge(e) : n === "de" ? lt(e) : n === "it" ? Dt(e) : n === "pt" ? Gt(e) : n === "zh" ? un(e) : n === "ja" ? On(e) : n === "ko" ? Kn(e) : n === "ru" ? ur(e) : le(e);
}), Or = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Oe(e) : n === "es" ? Ke(e) : n === "de" ? ut(e) : n === "it" ? Ot(e) : n === "pt" ? Kt(e) : n === "zh" ? dn(e) : n === "ja" ? kn(e) : n === "ko" ? qn(e) : n === "ru" ? dr(e) : ue(e);
}), kr = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/ThemeToggle.tsx";
function Ar() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function X(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function jr() {
	let [t, r] = n("auto");
	e(() => {
		let e = Ar();
		r(e), X(e);
	}, []), e(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => X("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function i() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		r(e), X(e), window.localStorage.setItem("theme", e);
	}
	let a = t === "auto" ? Er() : t === "light" ? Or() : Dr();
	return c("button", {
		type: "button",
		onClick: i,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t === "auto" ? Cr() : t === "dark" ? wr() : Tr()
	}, void 0, !1, {
		fileName: kr,
		lineNumber: 74,
		columnNumber: 5
	}, this);
}
var Z = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/LocaleSwitcher.tsx";
function Mr() {
	let e = a({ strict: !1 }).locale ?? "en", t = i(), n = (e) => {
		try {
			let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
			return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
		} catch {
			return e.toUpperCase();
		}
	}, r = (e) => {
		t({
			to: ".",
			params: (t) => ({
				...t,
				locale: e
			})
		});
	};
	return c("div", {
		className: "flex items-center gap-2",
		children: c("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: l.map((e) => c("option", {
				value: e,
				children: n(e)
			}, e, !1, {
				fileName: Z,
				lineNumber: 34,
				columnNumber: 11
			}, this))
		}, void 0, !1, {
			fileName: Z,
			lineNumber: 28,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Z,
		lineNumber: 27,
		columnNumber: 5
	}, this);
}
function Nr(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), t(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
var Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/Header.tsx";
function Pr() {
	Nr("Header");
	let [e, t] = n(!1), i = a({ strict: !1 }).locale ?? "en", s = [
		{
			to: "/$locale/products",
			label: br()
		},
		{
			to: "/$locale/pricing",
			label: yr()
		},
		{
			to: "/$locale/team",
			label: Sr()
		},
		{
			to: "/$locale/blog",
			label: fr()
		},
		{
			to: "/$locale/careers",
			label: pr()
		},
		{
			to: "/$locale/faq",
			label: hr()
		},
		{
			to: "/$locale/contact",
			label: mr()
		},
		{
			to: "/$locale/settings",
			label: xr()
		}
	];
	return c("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: c("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [c("div", {
				className: "flex items-center gap-8",
				children: [c(r, {
					preload: !1,
					to: "/$locale",
					params: { locale: i },
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 31,
					columnNumber: 11
				}, this), c("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						c(r, {
							preload: !1,
							to: "/$locale",
							params: { locale: i },
							activeOptions: { exact: !0 },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: _r()
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 41,
							columnNumber: 13
						}, this),
						c(r, {
							preload: !1,
							to: "/$locale/about",
							params: { locale: i },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: vr()
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 51,
							columnNumber: 13
						}, this),
						c("div", {
							className: "relative",
							children: [c("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => t(!0),
								onMouseLeave: () => t(!1),
								onClick: () => t(!e),
								children: [Y(), c(o, {
									size: 14,
									className: `transition-transform ${e ? "rotate-180" : ""}`
								}, void 0, !1, {
									fileName: Q,
									lineNumber: 71,
									columnNumber: 17
								}, this)]
							}, void 0, !0, {
								fileName: Q,
								lineNumber: 63,
								columnNumber: 15
							}, this), e && c("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => t(!0),
								onMouseLeave: () => t(!1),
								children: c("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: s.map((e) => c(r, {
										preload: !1,
										to: e.to,
										params: { locale: i },
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => t(!1),
										children: e.label
									}, e.to, !1, {
										fileName: Q,
										lineNumber: 85,
										columnNumber: 23
									}, this))
								}, void 0, !1, {
									fileName: Q,
									lineNumber: 83,
									columnNumber: 19
								}, this)
							}, void 0, !1, {
								fileName: Q,
								lineNumber: 78,
								columnNumber: 17
							}, this)]
						}, void 0, !0, {
							fileName: Q,
							lineNumber: 62,
							columnNumber: 13
						}, this)
					]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 40,
					columnNumber: 11
				}, this)]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 30,
				columnNumber: 9
			}, this), c("div", {
				className: "flex items-center gap-4",
				children: [
					c("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [c("span", {
							className: "sr-only",
							children: gr()
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 110,
							columnNumber: 13
						}, this), c("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: c("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							}, void 0, !1, {
								fileName: Q,
								lineNumber: 112,
								columnNumber: 15
							}, this)
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 111,
							columnNumber: 13
						}, this)]
					}, void 0, !0, {
						fileName: Q,
						lineNumber: 104,
						columnNumber: 11
					}, this),
					c(Mr, {}, void 0, !1, {
						fileName: Q,
						lineNumber: 118,
						columnNumber: 11
					}, this),
					c(jr, {}, void 0, !1, {
						fileName: Q,
						lineNumber: 119,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 103,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: Q,
			lineNumber: 29,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 28,
		columnNumber: 5
	}, this);
}
var Fr = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
y("en", { reload: !1 });
function Ir({ children: e }) {
	return c(s, { children: e }, void 0, !1, {
		fileName: Fr,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/Header.wrapper.tsx";
function Lr() {
	return c(Ir, { children: c(Pr, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Lr as default };
