import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import r from "next/link";
import { useParams as i, usePathname as a, useRouter as o } from "next/navigation";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
import { ChevronDown as ee } from "lucide-react";
var u = (e) => /^https?:\/\//.test(e ?? "");
function d(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var f = ({ href: e, children: t, ...n }) => {
	let a = i().locale ?? "en";
	return e == null || typeof e != "string" || u(e) ? c(r, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}) : c(r, {
		href: d(e, a),
		prefetch: !1,
		...n,
		children: t
	});
}, p = {}, m = [
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
], h = "PARAGLIDE_LOCALE", g = 3456e4, _ = [
	"cookie",
	"globalVariable",
	"baseLocale"
], v = [], y, b;
function x(e) {
	if (v.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (y === t) return b;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of v) if (new p(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return y = t, b = r, r;
}
function S(e) {
	let t = x(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : _;
}
var C = void 0, w = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var T, E = !1, D = () => {
	if (C) {
		let e = C?.getStore()?.locale;
		if (e) return e;
	}
	let e = _;
	!w && typeof window < "u" && window.location?.href && (e = S(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return E || (T = t, E = !0, O(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = j();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && T !== void 0) n = T;
		else if (N(t) && M.has(t)) {
			let e = M.get(t);
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
var ne = (e) => {
	e ? window.location.href = e : window.location.reload();
}, O = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = D();
	} catch {}
	let i = [], a = _;
	!w && typeof window < "u" && window.location?.href && (a = S(window.location.href));
	for (let t of a) if (t === "globalVariable") T = e;
	else if (t === "cookie") {
		if (w || typeof document > "u" || typeof window > "u") continue;
		let t = `${h}=${e}; path=/; max-age=${g}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (N(t) && M.has(t)) {
		let n = M.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!w && n.reload && window.location && e !== r && ne(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function k(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of m) if (e.toLowerCase() === t) return e;
}
function A(e) {
	let t = k(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${m.join(", ")}`);
}
function j() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${h}=([^;]+)`))?.[2];
	return k(e);
}
var M = /* @__PURE__ */ new Map();
function N(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var P = () => "Home", F = () => "Accueil", I = () => "Inicio", L = () => "Startseite", R = () => "Home", z = () => "Início", B = () => "首页", V = () => "ホーム", H = () => "홈", U = () => "Главная", W = ((e = {}, t = {}) => {
	let n = t.locale ?? D();
	return n === "en" ? P(e) : n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : U(e);
}), G = () => "Methodology", K = () => "Méthodologie", q = () => "Metodología", J = () => "Methodik", Y = () => "Metodologia", X = () => "Metodologia", Z = () => "方法论", re = () => "方法論", ie = () => "방법론", ae = () => "Методология", oe = ((e = {}, t = {}) => {
	let n = t.locale ?? D();
	return n === "en" ? G(e) : n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? re(e) : n === "ko" ? ie(e) : ae(e);
}), se = () => "Mock Pages", ce = () => "Pages de test", le = () => "Páginas de prueba", ue = () => "Testseiten", de = () => "Pagine di test", fe = () => "Páginas de teste", pe = () => "模拟页面", me = () => "モックページ", he = () => "모의 페이지", ge = () => "Тестовые страницы", _e = ((e = {}, t = {}) => {
	let n = t.locale ?? D();
	return n === "en" ? se(e) : n === "fr" ? ce(e) : n === "es" ? le(e) : n === "de" ? ue(e) : n === "it" ? de(e) : n === "pt" ? fe(e) : n === "zh" ? pe(e) : n === "ja" ? me(e) : n === "ko" ? he(e) : ge(e);
}), ve = () => "Products", ye = () => "Produits", be = () => "Productos", xe = () => "Produkte", Se = () => "Prodotti", Ce = () => "Produtos", we = () => "产品", Te = () => "製品", Ee = () => "제품", De = () => "Продукты", Oe = ((e = {}, t = {}) => {
	let n = t.locale ?? D();
	return n === "en" ? ve(e) : n === "fr" ? ye(e) : n === "es" ? be(e) : n === "de" ? xe(e) : n === "it" ? Se(e) : n === "pt" ? Ce(e) : n === "zh" ? we(e) : n === "ja" ? Te(e) : n === "ko" ? Ee(e) : De(e);
}), ke = () => "Pricing", Ae = () => "Tarifs", je = () => "Precios", Me = () => "Preise", Ne = () => "Prezzi", Pe = () => "Preços", Fe = () => "价格", Ie = () => "料金", Le = () => "요금", Re = () => "Цены", ze = ((e = {}, t = {}) => {
	let n = t.locale ?? D();
	return n === "en" ? ke(e) : n === "fr" ? Ae(e) : n === "es" ? je(e) : n === "de" ? Me(e) : n === "it" ? Ne(e) : n === "pt" ? Pe(e) : n === "zh" ? Fe(e) : n === "ja" ? Ie(e) : n === "ko" ? Le(e) : Re(e);
}), Be = () => "Team", Ve = () => "Équipe", He = () => "Equipo", Ue = () => "Team", We = () => "Team", Ge = () => "Equipe", Ke = () => "团队", qe = () => "チーム", Je = () => "팀", Ye = () => "Команда", Xe = ((e = {}, t = {}) => {
	let n = t.locale ?? D();
	return n === "en" ? Be(e) : n === "fr" ? Ve(e) : n === "es" ? He(e) : n === "de" ? Ue(e) : n === "it" ? We(e) : n === "pt" ? Ge(e) : n === "zh" ? Ke(e) : n === "ja" ? qe(e) : n === "ko" ? Je(e) : Ye(e);
}), Ze = () => "Blog", Qe = () => "Blog", $e = () => "Blog", et = () => "Blog", tt = () => "Blog", nt = () => "Blog", rt = () => "博客", it = () => "ブログ", at = () => "블로그", ot = () => "Блог", st = ((e = {}, t = {}) => {
	let n = t.locale ?? D();
	return n === "en" ? Ze(e) : n === "fr" ? Qe(e) : n === "es" ? $e(e) : n === "de" ? et(e) : n === "it" ? tt(e) : n === "pt" ? nt(e) : n === "zh" ? rt(e) : n === "ja" ? it(e) : n === "ko" ? at(e) : ot(e);
}), ct = () => "Careers", lt = () => "Carrières", ut = () => "Carreras", dt = () => "Karriere", ft = () => "Carriere", pt = () => "Carreiras", mt = () => "职业生涯", ht = () => "採用情報", gt = () => "채용", _t = () => "Карьера", vt = ((e = {}, t = {}) => {
	let n = t.locale ?? D();
	return n === "en" ? ct(e) : n === "fr" ? lt(e) : n === "es" ? ut(e) : n === "de" ? dt(e) : n === "it" ? ft(e) : n === "pt" ? pt(e) : n === "zh" ? mt(e) : n === "ja" ? ht(e) : n === "ko" ? gt(e) : _t(e);
}), yt = () => "FAQ", bt = () => "FAQ", xt = () => "FAQ", St = () => "FAQ", Ct = () => "FAQ", wt = () => "FAQ", Tt = () => "常见问题", Et = () => "FAQ", Dt = () => "FAQ", Ot = () => "FAQ", kt = ((e = {}, t = {}) => {
	let n = t.locale ?? D();
	return n === "en" ? yt(e) : n === "fr" ? bt(e) : n === "es" ? xt(e) : n === "de" ? St(e) : n === "it" ? Ct(e) : n === "pt" ? wt(e) : n === "zh" ? Tt(e) : n === "ja" ? Et(e) : n === "ko" ? Dt(e) : Ot(e);
}), At = () => "Contact", jt = () => "Contact", Mt = () => "Contacto", Nt = () => "Kontakt", Pt = () => "Contatti", Ft = () => "Contato", It = () => "联系我们", Lt = () => "お問い合わせ", Rt = () => "문의하기", zt = () => "Контакт", Bt = ((e = {}, t = {}) => {
	let n = t.locale ?? D();
	return n === "en" ? At(e) : n === "fr" ? jt(e) : n === "es" ? Mt(e) : n === "de" ? Nt(e) : n === "it" ? Pt(e) : n === "pt" ? Ft(e) : n === "zh" ? It(e) : n === "ja" ? Lt(e) : n === "ko" ? Rt(e) : zt(e);
}), Vt = () => "Settings", Ht = () => "Paramètres", Ut = () => "Ajustes", Wt = () => "Einstellungen", Gt = () => "Impostazioni", Kt = () => "Configurações", qt = () => "设置", Jt = () => "設定", Yt = () => "설정", Xt = () => "Настройки", Zt = ((e = {}, t = {}) => {
	let n = t.locale ?? D();
	return n === "en" ? Vt(e) : n === "fr" ? Ht(e) : n === "es" ? Ut(e) : n === "de" ? Wt(e) : n === "it" ? Gt(e) : n === "pt" ? Kt(e) : n === "zh" ? qt(e) : n === "ja" ? Jt(e) : n === "ko" ? Yt(e) : Xt(e);
}), Qt = () => "Go to GitHub", $t = () => "Aller sur GitHub", en = () => "Ir a GitHub", tn = () => "Zu GitHub", nn = () => "Vai su GitHub", rn = () => "Ir para GitHub", an = () => "访问 GitHub", on = () => "GitHubへ", sn = () => "GitHub으로 이동", cn = () => "Перейти на GitHub", ln = ((e = {}, t = {}) => {
	let n = t.locale ?? D();
	return n === "en" ? Qt(e) : n === "fr" ? $t(e) : n === "es" ? en(e) : n === "de" ? tn(e) : n === "it" ? nn(e) : n === "pt" ? rn(e) : n === "zh" ? an(e) : n === "ja" ? on(e) : n === "ko" ? sn(e) : cn(e);
}), un = () => "Theme mode: auto (system). Click to switch to light mode.", dn = () => "Mode thématique : auto (système). Cliquez pour passer en mode clair.", fn = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", pn = () => "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.", mn = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", hn = () => "Modo de tema: automático (sistema). Clique para mudar para o modo claro.", gn = () => "主题模式：自动（系统）。点击切换到明亮模式。", _n = () => "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。", vn = () => "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.", yn = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", bn = ((e = {}, t = {}) => {
	let n = t.locale ?? D();
	return n === "en" ? un(e) : n === "fr" ? dn(e) : n === "es" ? fn(e) : n === "de" ? pn(e) : n === "it" ? mn(e) : n === "pt" ? hn(e) : n === "zh" ? gn(e) : n === "ja" ? _n(e) : n === "ko" ? vn(e) : yn(e);
}), xn = () => "Theme mode: light. Click to switch to dark mode.", Sn = () => "Mode thématique : clair. Cliquez pour passer en mode sombre.", Cn = () => "Modo de tema: claro. Haz clic para cambiar al modo oscuro.", wn = () => "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.", Tn = () => "Modalità tema: chiara. Clicca per passare alla modalità scura.", En = () => "Modo de tema: claro. Clique para mudar para o modo escuro.", Dn = () => "主题模式：明亮。点击切换到暗黑模式。", On = () => "テーマモード：ライト。クリックしてダークモードに切り替えます。", kn = () => "테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.", An = () => "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.", jn = ((e = {}, t = {}) => {
	let n = t.locale ?? D();
	return n === "en" ? xn(e) : n === "fr" ? Sn(e) : n === "es" ? Cn(e) : n === "de" ? wn(e) : n === "it" ? Tn(e) : n === "pt" ? En(e) : n === "zh" ? Dn(e) : n === "ja" ? On(e) : n === "ko" ? kn(e) : An(e);
}), Mn = () => "Theme mode: dark. Click to switch to auto (system) mode.", Nn = () => "Mode thématique : sombre. Cliquez pour passer en mode auto (système).", Pn = () => "Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).", Fn = () => "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.", In = () => "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).", Ln = () => "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).", Rn = () => "主题模式：暗黑。点击切换到自动（系统）模式。", zn = () => "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。", Bn = () => "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.", Vn = () => "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.", Hn = ((e = {}, t = {}) => {
	let n = t.locale ?? D();
	return n === "en" ? Mn(e) : n === "fr" ? Nn(e) : n === "es" ? Pn(e) : n === "de" ? Fn(e) : n === "it" ? In(e) : n === "pt" ? Ln(e) : n === "zh" ? Rn(e) : n === "ja" ? zn(e) : n === "ko" ? Bn(e) : Vn(e);
}), Un = () => "Theme: Auto", Wn = () => "Thème : Auto", Gn = () => "Tema: Auto", Kn = () => "Thema: Auto", qn = () => "Tema: Auto", Jn = () => "Tema: Auto", Yn = () => "主题：自动", Xn = () => "テーマ：自動", Zn = () => "테마: 자동", Qn = () => "Тема: Авто", $n = ((e = {}, t = {}) => {
	let n = t.locale ?? D();
	return n === "en" ? Un(e) : n === "fr" ? Wn(e) : n === "es" ? Gn(e) : n === "de" ? Kn(e) : n === "it" ? qn(e) : n === "pt" ? Jn(e) : n === "zh" ? Yn(e) : n === "ja" ? Xn(e) : n === "ko" ? Zn(e) : Qn(e);
}), er = () => "Theme: Dark", tr = () => "Thème : Sombre", nr = () => "Tema: Oscuro", rr = () => "Thema: Dunkel", ir = () => "Tema: Scuro", ar = () => "Tema: Escuro", or = () => "主题：暗黑", sr = () => "テーマ：ダーク", cr = () => "테마: 다크", Q = () => "Тема: Темная", lr = ((e = {}, t = {}) => {
	let n = t.locale ?? D();
	return n === "en" ? er(e) : n === "fr" ? tr(e) : n === "es" ? nr(e) : n === "de" ? rr(e) : n === "it" ? ir(e) : n === "pt" ? ar(e) : n === "zh" ? or(e) : n === "ja" ? sr(e) : n === "ko" ? cr(e) : Q(e);
}), ur = () => "Theme: Light", dr = () => "Thème : Clair", fr = () => "Tema: Claro", pr = () => "Thema: Hell", mr = () => "Tema: Chiaro", hr = () => "Tema: Claro", gr = () => "主题：明亮", _r = () => "テーマ：ライト", vr = () => "테마: 라이트", yr = () => "Тема: Светлая", br = ((e = {}, t = {}) => {
	let n = t.locale ?? D();
	return n === "en" ? ur(e) : n === "fr" ? dr(e) : n === "es" ? fr(e) : n === "de" ? pr(e) : n === "it" ? mr(e) : n === "pt" ? hr(e) : n === "zh" ? gr(e) : n === "ja" ? _r(e) : n === "ko" ? vr(e) : yr(e);
});
function xr() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Sr() {
	let [t, r] = n("auto");
	e(() => {
		let e = xr();
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
	let a = t === "auto" ? bn() : t === "light" ? jn() : Hn();
	return c("button", {
		type: "button",
		onClick: i,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t === "auto" ? $n() : t === "dark" ? lr() : br()
	});
}
function Cr() {
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
			children: m.map((e) => c("option", {
				value: e,
				children: r(e)
			}, e))
		})
	});
}
function wr(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), t(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function Tr() {
	wr("Header");
	let [e, t] = n(!1), r = i(), o = a(), s = r.locale ?? "en", u = [
		{
			href: "/products",
			label: Oe()
		},
		{
			href: "/pricing",
			label: ze()
		},
		{
			href: "/team",
			label: Xe()
		},
		{
			href: "/blog",
			label: st()
		},
		{
			href: "/careers",
			label: vt()
		},
		{
			href: "/faq",
			label: kt()
		},
		{
			href: "/contact",
			label: Bt()
		},
		{
			href: "/settings",
			label: Zt()
		}
	];
	return c("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: l("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [l("div", {
				className: "flex items-center gap-8",
				children: [c(f, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), l("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						c(f, {
							href: "/",
							className: `nav-link${((e) => o === d(e, s))("/") ? " is-active" : ""}`,
							children: W()
						}),
						c(f, {
							href: "/about",
							className: `nav-link${((e) => {
								let t = d(e, s);
								return o.startsWith(t) && (e !== "/" || o === t);
							})("/about") ? " is-active" : ""}`,
							children: oe()
						}),
						l("div", {
							className: "relative",
							children: [l("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => t(!0),
								onMouseLeave: () => t(!1),
								onClick: () => t(!e),
								children: [_e(), c(ee, {
									size: 14,
									className: `transition-transform ${e ? "rotate-180" : ""}`
								})]
							}), e && c("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => t(!0),
								onMouseLeave: () => t(!1),
								children: c("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: u.map((e) => c(f, {
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
							children: ln()
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
					c(Cr, {}),
					c(Sr, {})
				]
			})]
		})
	});
}
function Er() {
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
function Dr(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Or({ children: r }) {
	let a = i().locale ?? "en", [o] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Dr("AppRoot", o);
	}, [o]), e(() => {
		O(a, { reload: !1 }), document.documentElement.lang = a;
	}, [a]), e(() => {
		Er();
	}, []), c(s, { children: r });
}
function kr({ children: e }) {
	return c(Or, { children: e });
}
function Ar() {
	return c(kr, { children: c(Tr, {}) });
}
export { Ar as default };
