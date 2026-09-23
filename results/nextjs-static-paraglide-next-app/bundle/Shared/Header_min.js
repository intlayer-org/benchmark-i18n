import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import r from "next/link";
import { useParams as i, usePathname as a, useRouter as o } from "next/navigation";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
import { ChevronDown as u } from "lucide-react";
var d = (e) => /^https?:\/\//.test(e ?? "");
function f(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var p = ({ href: e, children: t, ...n }) => {
	let a = i().locale ?? "en";
	return e == null || typeof e != "string" || d(e) ? c(r, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}) : c(r, {
		href: f(e, a),
		prefetch: !1,
		...n,
		children: t
	});
}, m = {}, h = [
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
], g = "PARAGLIDE_LOCALE", _ = 3456e4, v = [
	"cookie",
	"globalVariable",
	"baseLocale"
], y = [], b = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var x, S = !1, C = () => {
	let e = v;
	!b && typeof window < "u" && window.location?.href && (e = V(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return S || (x = t, S = !0, T(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = F();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && x !== void 0) n = x;
		else if (U(t) && H.has(t)) {
			let e = H.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return O(t);
			}
		}
		let e = D(n);
		if (e) return e;
	}
}
var w = (e) => {
	e ? window.location.href = e : window.location.reload();
}, T = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = C();
	} catch {}
	let i = [], a = v;
	!b && typeof window < "u" && window.location?.href && (a = V(window.location.href));
	for (let t of a) if (t === "globalVariable") x = e;
	else if (t === "cookie") {
		if (b || typeof document > "u" || typeof window > "u") continue;
		let t = `${g}=${e}; path=/; max-age=${_}`;
		document.cookie = t, N();
	} else if (t === "baseLocale") continue;
	else if (U(t) && H.has(t)) {
		let n = H.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!b && n.reload && window.location && e !== r && w(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, E = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function D(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of h) if (e.toLowerCase() === t) return e;
}
function O(e) {
	let t = D(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${h.join(", ")}`);
}
function k(e) {
	return e;
}
function A(e, t) {
	return e.exec(t.href);
}
var te = g.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), ne = RegExp(`(?:^|;\\s*)${te}=([^;]*)`), j = Symbol(), M = j;
function N() {
	M = j;
}
function P() {
	typeof queueMicrotask == "function" ? queueMicrotask(N) : Promise.resolve().then(N);
}
function F() {
	if (typeof document > "u") return;
	if (M !== j) return M;
	let e = document.cookie.match(ne)?.[1];
	return M = D(e), P(), M;
}
function I(e) {
	return L(e);
}
function L(e) {
	let t = k(typeof e == "string" ? new URL(e, E()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && D(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), k(t);
}
var R, z;
function B(e) {
	if (y.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (R === t) return z;
	let n = k(new URL(t, "http://example.com")), r = I(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of y) if (A(new m(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return R = t, z = a, a;
}
function V(e) {
	let t = B(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : v;
}
var H = /* @__PURE__ */ new Map();
function U(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var W = () => "Blog", G = () => "Blog", K = () => "Blog", q = () => "Blog", J = () => "Blog", Y = () => "Blog", X = () => "博客", Z = () => "ブログ", re = () => "블로그", ie = () => "Блог", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? C();
	return n === "fr" ? G(e) : n === "es" ? K(e) : n === "de" ? q(e) : n === "it" ? J(e) : n === "pt" ? Y(e) : n === "zh" ? X(e) : n === "ja" ? Z(e) : n === "ko" ? re(e) : n === "ru" ? ie(e) : W(e);
}), oe = () => "Careers", se = () => "Carrières", ce = () => "Carreras", le = () => "Karriere", ue = () => "Carriere", de = () => "Carreiras", fe = () => "职业生涯", pe = () => "採用情報", me = () => "채용", he = () => "Карьера", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? C();
	return n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : n === "ru" ? he(e) : oe(e);
}), _e = () => "Contact", ve = () => "Contact", ye = () => "Contacto", be = () => "Kontakt", xe = () => "Contatti", Se = () => "Contato", Ce = () => "联系我们", we = () => "お問い合わせ", Te = () => "문의하기", Ee = () => "Контакт", De = ((e = {}, t = {}) => {
	let n = t.locale ?? C();
	return n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : n === "ru" ? Ee(e) : _e(e);
}), Oe = () => "FAQ", ke = () => "FAQ", Ae = () => "FAQ", je = () => "FAQ", Me = () => "FAQ", Ne = () => "FAQ", Pe = () => "常见问题", Fe = () => "FAQ", Ie = () => "FAQ", Le = () => "FAQ", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? C();
	return n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : n === "ru" ? Le(e) : Oe(e);
}), ze = () => "Go to GitHub", Be = () => "Aller sur GitHub", Ve = () => "Ir a GitHub", He = () => "Zu GitHub", Ue = () => "Vai su GitHub", We = () => "Ir para GitHub", Ge = () => "访问 GitHub", Ke = () => "GitHubへ", qe = () => "GitHub으로 이동", Je = () => "Перейти на GitHub", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? C();
	return n === "fr" ? Be(e) : n === "es" ? Ve(e) : n === "de" ? He(e) : n === "it" ? Ue(e) : n === "pt" ? We(e) : n === "zh" ? Ge(e) : n === "ja" ? Ke(e) : n === "ko" ? qe(e) : n === "ru" ? Je(e) : ze(e);
}), Xe = () => "Home", Ze = () => "Accueil", Qe = () => "Inicio", $e = () => "Startseite", et = () => "Home", tt = () => "Início", nt = () => "首页", rt = () => "ホーム", it = () => "홈", at = () => "Главная", ot = ((e = {}, t = {}) => {
	let n = t.locale ?? C();
	return n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : n === "ru" ? at(e) : Xe(e);
}), st = () => "Methodology", ct = () => "Méthodologie", lt = () => "Metodología", ut = () => "Methodik", dt = () => "Metodologia", ft = () => "Metodologia", pt = () => "方法论", mt = () => "方法論", ht = () => "방법론", gt = () => "Методология", _t = ((e = {}, t = {}) => {
	let n = t.locale ?? C();
	return n === "fr" ? ct(e) : n === "es" ? lt(e) : n === "de" ? ut(e) : n === "it" ? dt(e) : n === "pt" ? ft(e) : n === "zh" ? pt(e) : n === "ja" ? mt(e) : n === "ko" ? ht(e) : n === "ru" ? gt(e) : st(e);
}), vt = () => "Mock Pages", yt = () => "Pages de test", bt = () => "Páginas de prueba", xt = () => "Testseiten", St = () => "Pagine di test", Ct = () => "Páginas de teste", wt = () => "模拟页面", Tt = () => "モックページ", Et = () => "모의 페이지", Dt = () => "Тестовые страницы", Ot = ((e = {}, t = {}) => {
	let n = t.locale ?? C();
	return n === "fr" ? yt(e) : n === "es" ? bt(e) : n === "de" ? xt(e) : n === "it" ? St(e) : n === "pt" ? Ct(e) : n === "zh" ? wt(e) : n === "ja" ? Tt(e) : n === "ko" ? Et(e) : n === "ru" ? Dt(e) : vt(e);
}), kt = () => "Pricing", At = () => "Tarifs", jt = () => "Precios", Mt = () => "Preise", Nt = () => "Prezzi", Pt = () => "Preços", Ft = () => "价格", It = () => "料金", Lt = () => "요금", Rt = () => "Цены", zt = ((e = {}, t = {}) => {
	let n = t.locale ?? C();
	return n === "fr" ? At(e) : n === "es" ? jt(e) : n === "de" ? Mt(e) : n === "it" ? Nt(e) : n === "pt" ? Pt(e) : n === "zh" ? Ft(e) : n === "ja" ? It(e) : n === "ko" ? Lt(e) : n === "ru" ? Rt(e) : kt(e);
}), Bt = () => "Products", Vt = () => "Produits", Ht = () => "Productos", Ut = () => "Produkte", Wt = () => "Prodotti", Gt = () => "Produtos", Kt = () => "产品", qt = () => "製品", Jt = () => "제품", Yt = () => "Продукты", Xt = ((e = {}, t = {}) => {
	let n = t.locale ?? C();
	return n === "fr" ? Vt(e) : n === "es" ? Ht(e) : n === "de" ? Ut(e) : n === "it" ? Wt(e) : n === "pt" ? Gt(e) : n === "zh" ? Kt(e) : n === "ja" ? qt(e) : n === "ko" ? Jt(e) : n === "ru" ? Yt(e) : Bt(e);
}), Zt = () => "Settings", Qt = () => "Paramètres", $t = () => "Ajustes", en = () => "Einstellungen", tn = () => "Impostazioni", nn = () => "Configurações", rn = () => "设置", an = () => "設定", on = () => "설정", sn = () => "Настройки", cn = ((e = {}, t = {}) => {
	let n = t.locale ?? C();
	return n === "fr" ? Qt(e) : n === "es" ? $t(e) : n === "de" ? en(e) : n === "it" ? tn(e) : n === "pt" ? nn(e) : n === "zh" ? rn(e) : n === "ja" ? an(e) : n === "ko" ? on(e) : n === "ru" ? sn(e) : Zt(e);
}), ln = () => "Team", un = () => "Équipe", dn = () => "Equipo", fn = () => "Team", pn = () => "Team", mn = () => "Equipe", hn = () => "团队", gn = () => "チーム", _n = () => "팀", vn = () => "Команда", yn = ((e = {}, t = {}) => {
	let n = t.locale ?? C();
	return n === "fr" ? un(e) : n === "es" ? dn(e) : n === "de" ? fn(e) : n === "it" ? pn(e) : n === "pt" ? mn(e) : n === "zh" ? hn(e) : n === "ja" ? gn(e) : n === "ko" ? _n(e) : n === "ru" ? vn(e) : ln(e);
}), bn = () => "Theme: Auto", xn = () => "Thème : Auto", Sn = () => "Tema: Auto", Cn = () => "Thema: Auto", wn = () => "Tema: Auto", Tn = () => "Tema: Auto", En = () => "主题：自动", Dn = () => "テーマ：自動", On = () => "테마: 자동", kn = () => "Тема: Авто", An = ((e = {}, t = {}) => {
	let n = t.locale ?? C();
	return n === "fr" ? xn(e) : n === "es" ? Sn(e) : n === "de" ? Cn(e) : n === "it" ? wn(e) : n === "pt" ? Tn(e) : n === "zh" ? En(e) : n === "ja" ? Dn(e) : n === "ko" ? On(e) : n === "ru" ? kn(e) : bn(e);
}), jn = () => "Theme: Dark", Mn = () => "Thème : Sombre", Nn = () => "Tema: Oscuro", Pn = () => "Thema: Dunkel", Fn = () => "Tema: Scuro", In = () => "Tema: Escuro", Ln = () => "主题：暗黑", Rn = () => "テーマ：ダーク", zn = () => "테마: 다크", Bn = () => "Тема: Темная", Vn = ((e = {}, t = {}) => {
	let n = t.locale ?? C();
	return n === "fr" ? Mn(e) : n === "es" ? Nn(e) : n === "de" ? Pn(e) : n === "it" ? Fn(e) : n === "pt" ? In(e) : n === "zh" ? Ln(e) : n === "ja" ? Rn(e) : n === "ko" ? zn(e) : n === "ru" ? Bn(e) : jn(e);
}), Hn = () => "Theme: Light", Un = () => "Thème : Clair", Wn = () => "Tema: Claro", Gn = () => "Thema: Hell", Kn = () => "Tema: Chiaro", qn = () => "Tema: Claro", Jn = () => "主题：明亮", Yn = () => "テーマ：ライト", Xn = () => "테마: 라이트", Zn = () => "Тема: Светлая", Qn = ((e = {}, t = {}) => {
	let n = t.locale ?? C();
	return n === "fr" ? Un(e) : n === "es" ? Wn(e) : n === "de" ? Gn(e) : n === "it" ? Kn(e) : n === "pt" ? qn(e) : n === "zh" ? Jn(e) : n === "ja" ? Yn(e) : n === "ko" ? Xn(e) : n === "ru" ? Zn(e) : Hn(e);
}), $n = () => "Theme mode: auto (system). Click to switch to light mode.", er = () => "Mode thématique : auto (système). Cliquez pour passer en mode clair.", tr = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", nr = () => "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.", rr = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", ir = () => "Modo de tema: automático (sistema). Clique para mudar para o modo claro.", ar = () => "主题模式：自动（系统）。点击切换到明亮模式。", or = () => "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。", sr = () => "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.", cr = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", lr = ((e = {}, t = {}) => {
	let n = t.locale ?? C();
	return n === "fr" ? er(e) : n === "es" ? tr(e) : n === "de" ? nr(e) : n === "it" ? rr(e) : n === "pt" ? ir(e) : n === "zh" ? ar(e) : n === "ja" ? or(e) : n === "ko" ? sr(e) : n === "ru" ? cr(e) : $n(e);
}), ur = () => "Theme mode: dark. Click to switch to auto (system) mode.", dr = () => "Mode thématique : sombre. Cliquez pour passer en mode auto (système).", fr = () => "Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).", pr = () => "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.", mr = () => "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).", hr = () => "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).", gr = () => "主题模式：暗黑。点击切换到自动（系统）模式。", _r = () => "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。", vr = () => "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.", yr = () => "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.", br = ((e = {}, t = {}) => {
	let n = t.locale ?? C();
	return n === "fr" ? dr(e) : n === "es" ? fr(e) : n === "de" ? pr(e) : n === "it" ? mr(e) : n === "pt" ? hr(e) : n === "zh" ? gr(e) : n === "ja" ? _r(e) : n === "ko" ? vr(e) : n === "ru" ? yr(e) : ur(e);
}), xr = () => "Theme mode: light. Click to switch to dark mode.", Sr = () => "Mode thématique : clair. Cliquez pour passer en mode sombre.", Cr = () => "Modo de tema: claro. Haz clic para cambiar al modo oscuro.", wr = () => "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.", Tr = () => "Modalità tema: chiara. Clicca per passare alla modalità scura.", Er = () => "Modo de tema: claro. Clique para mudar para o modo escuro.", Q = () => "主题模式：明亮。点击切换到暗黑模式。", Dr = () => "テーマモード：ライト。クリックしてダークモードに切り替えます。", Or = () => "테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.", kr = () => "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.", Ar = ((e = {}, t = {}) => {
	let n = t.locale ?? C();
	return n === "fr" ? Sr(e) : n === "es" ? Cr(e) : n === "de" ? wr(e) : n === "it" ? Tr(e) : n === "pt" ? Er(e) : n === "zh" ? Q(e) : n === "ja" ? Dr(e) : n === "ko" ? Or(e) : n === "ru" ? kr(e) : xr(e);
});
function jr() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Mr() {
	let [t, r] = n("auto");
	e(() => {
		let e = jr();
		r(e), $(e);
	}, []), e(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function i() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		r(e), $(e), window.localStorage.setItem("theme", e);
	}
	let a = t === "auto" ? lr() : t === "light" ? Ar() : br();
	return c("button", {
		type: "button",
		onClick: i,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t === "auto" ? An() : t === "dark" ? Vn() : Qn()
	});
}
function Nr() {
	let e = i().locale ?? "en", t = a(), n = o(), r = (e) => {
		try {
			let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
			return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
		} catch {
			return e.toUpperCase();
		}
	}, s = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return c("div", {
		className: "flex items-center gap-2",
		children: c("select", {
			value: e,
			onChange: (e) => s(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: h.map((e) => c("option", {
				value: e,
				children: r(e)
			}, e))
		})
	});
}
function Pr(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), t(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function Fr() {
	Pr("Header");
	let [e, t] = n(!1), r = i(), o = a(), s = r.locale ?? "en", d = [
		{
			href: "/products",
			label: Xt()
		},
		{
			href: "/pricing",
			label: zt()
		},
		{
			href: "/team",
			label: yn()
		},
		{
			href: "/blog",
			label: ae()
		},
		{
			href: "/careers",
			label: ge()
		},
		{
			href: "/faq",
			label: Re()
		},
		{
			href: "/contact",
			label: De()
		},
		{
			href: "/settings",
			label: cn()
		}
	];
	return c("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: l("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [l("div", {
				className: "flex items-center gap-8",
				children: [c(p, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), l("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						c(p, {
							href: "/",
							className: `nav-link${((e) => o === f(e, s))("/") ? " is-active" : ""}`,
							children: ot()
						}),
						c(p, {
							href: "/about",
							className: `nav-link${((e) => {
								let t = f(e, s);
								return o.startsWith(t) && (e !== "/" || o === t);
							})("/about") ? " is-active" : ""}`,
							children: _t()
						}),
						l("div", {
							className: "relative",
							children: [l("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => t(!0),
								onMouseLeave: () => t(!1),
								onClick: () => t(!e),
								children: [Ot(), c(u, {
									size: 14,
									className: `transition-transform ${e ? "rotate-180" : ""}`
								})]
							}), e && c("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => t(!0),
								onMouseLeave: () => t(!1),
								children: c("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: d.map((e) => c(p, {
										href: e.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => t(!1),
										children: e.label
									}, e.href))
								})
							})]
						})
					]
				})]
			}), l("div", {
				className: "flex items-center gap-4",
				children: [
					l("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [c("span", {
							className: "sr-only",
							children: Ye()
						}), c("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: c("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					c(Nr, {}),
					c(Mr, {})
				]
			})]
		})
	});
}
function Ir() {
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
function Lr(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Rr({ children: r }) {
	let a = i().locale ?? "en", [o] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Lr("AppRoot", o);
	}, [o]), e(() => {
		T(a, { reload: !1 }), document.documentElement.lang = a;
	}, [a]), e(() => {
		Ir();
	}, []), c(s, { children: r });
}
function zr({ children: e }) {
	return c(Rr, { children: e });
}
function Br() {
	return c(zr, { children: c(Fr, {}) });
}
export { Br as default };
