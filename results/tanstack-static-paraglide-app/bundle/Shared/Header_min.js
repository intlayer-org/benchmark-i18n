import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Link as r, useNavigate as i, useParams as a } from "@tanstack/react-router";
import { ChevronDown as o } from "lucide-react";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
var ee = {}, u = [
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
], d = "PARAGLIDE_LOCALE", f = 3456e4, p = [
	"cookie",
	"globalVariable",
	"baseLocale"
], m = [], h, g;
function te(e) {
	if (m.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (h === t) return g;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of m) if (new ee(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return h = t, g = r, r;
}
function _(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : p;
}
var v = void 0;
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var y, b = !1, x = () => {
	if (v) {
		let e = v?.getStore()?.locale;
		if (e) return e;
	}
	let e = p;
	typeof window < "u" && window.location?.href && (e = _(window.location.href));
	let t = S(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return b || (y = t, b = !0, C(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function S(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = E();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && y !== void 0) n = y;
		else if (O(t) && D.has(t)) {
			let e = D.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return T(t);
			}
		}
		let e = w(n);
		if (e) return e;
	}
}
var ne = (e) => {
	e ? window.location.href = e : window.location.reload();
}, C = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = x();
	} catch {}
	let i = [], a = p;
	typeof window < "u" && window.location?.href && (a = _(window.location.href));
	for (let t of a) if (t === "globalVariable") y = e;
	else if (t === "cookie") {
		if (typeof document > "u" || typeof window > "u") continue;
		let t = `${d}=${e}; path=/; max-age=${f}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (O(t) && D.has(t)) {
		let n = D.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		n.reload && window.location && e !== r && ne(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function w(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of u) if (e.toLowerCase() === t) return e;
}
function T(e) {
	let t = w(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${u.join(", ")}`);
}
function E() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${d}=([^;]+)`))?.[2];
	return w(e);
}
var D = /* @__PURE__ */ new Map();
function O(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var k = () => "Home", A = () => "Accueil", j = () => "Inicio", M = () => "Startseite", N = () => "Home", P = () => "Início", F = () => "首页", I = () => "ホーム", L = () => "홈", R = () => "Главная", z = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? k(e) : n === "fr" ? A(e) : n === "es" ? j(e) : n === "de" ? M(e) : n === "it" ? N(e) : n === "pt" ? P(e) : n === "zh" ? F(e) : n === "ja" ? I(e) : n === "ko" ? L(e) : R(e);
}), B = () => "Methodology", V = () => "Méthodologie", H = () => "Metodología", U = () => "Methodik", W = () => "Metodologia", G = () => "Metodologia", K = () => "方法论", q = () => "方法論", J = () => "방법론", Y = () => "Методология", X = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? B(e) : n === "fr" ? V(e) : n === "es" ? H(e) : n === "de" ? U(e) : n === "it" ? W(e) : n === "pt" ? G(e) : n === "zh" ? K(e) : n === "ja" ? q(e) : n === "ko" ? J(e) : Y(e);
}), Z = () => "Mock Pages", re = () => "Pages de test", ie = () => "Páginas de prueba", ae = () => "Testseiten", oe = () => "Pagine di test", se = () => "Páginas de teste", ce = () => "模拟页面", le = () => "モックページ", ue = () => "모의 페이지", de = () => "Тестовые страницы", fe = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Z(e) : n === "fr" ? re(e) : n === "es" ? ie(e) : n === "de" ? ae(e) : n === "it" ? oe(e) : n === "pt" ? se(e) : n === "zh" ? ce(e) : n === "ja" ? le(e) : n === "ko" ? ue(e) : de(e);
}), pe = () => "Products", me = () => "Produits", he = () => "Productos", ge = () => "Produkte", _e = () => "Prodotti", ve = () => "Produtos", ye = () => "产品", be = () => "製品", xe = () => "제품", Se = () => "Продукты", Ce = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? pe(e) : n === "fr" ? me(e) : n === "es" ? he(e) : n === "de" ? ge(e) : n === "it" ? _e(e) : n === "pt" ? ve(e) : n === "zh" ? ye(e) : n === "ja" ? be(e) : n === "ko" ? xe(e) : Se(e);
}), we = () => "Pricing", Te = () => "Tarifs", Ee = () => "Precios", De = () => "Preise", Oe = () => "Prezzi", ke = () => "Preços", Ae = () => "价格", je = () => "料金", Me = () => "요금", Ne = () => "Цены", Pe = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? we(e) : n === "fr" ? Te(e) : n === "es" ? Ee(e) : n === "de" ? De(e) : n === "it" ? Oe(e) : n === "pt" ? ke(e) : n === "zh" ? Ae(e) : n === "ja" ? je(e) : n === "ko" ? Me(e) : Ne(e);
}), Fe = () => "Team", Ie = () => "Équipe", Le = () => "Equipo", Re = () => "Team", ze = () => "Team", Be = () => "Equipe", Ve = () => "团队", He = () => "チーム", Ue = () => "팀", We = () => "Команда", Ge = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Fe(e) : n === "fr" ? Ie(e) : n === "es" ? Le(e) : n === "de" ? Re(e) : n === "it" ? ze(e) : n === "pt" ? Be(e) : n === "zh" ? Ve(e) : n === "ja" ? He(e) : n === "ko" ? Ue(e) : We(e);
}), Ke = () => "Blog", qe = () => "Blog", Je = () => "Blog", Ye = () => "Blog", Xe = () => "Blog", Ze = () => "Blog", Qe = () => "博客", $e = () => "ブログ", et = () => "블로그", tt = () => "Блог", nt = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Ke(e) : n === "fr" ? qe(e) : n === "es" ? Je(e) : n === "de" ? Ye(e) : n === "it" ? Xe(e) : n === "pt" ? Ze(e) : n === "zh" ? Qe(e) : n === "ja" ? $e(e) : n === "ko" ? et(e) : tt(e);
}), rt = () => "Careers", it = () => "Carrières", at = () => "Carreras", ot = () => "Karriere", st = () => "Carriere", ct = () => "Carreiras", lt = () => "职业生涯", ut = () => "採用情報", dt = () => "채용", ft = () => "Карьера", pt = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? rt(e) : n === "fr" ? it(e) : n === "es" ? at(e) : n === "de" ? ot(e) : n === "it" ? st(e) : n === "pt" ? ct(e) : n === "zh" ? lt(e) : n === "ja" ? ut(e) : n === "ko" ? dt(e) : ft(e);
}), mt = () => "FAQ", ht = () => "FAQ", gt = () => "FAQ", _t = () => "FAQ", vt = () => "FAQ", yt = () => "FAQ", bt = () => "常见问题", xt = () => "FAQ", St = () => "FAQ", Ct = () => "FAQ", wt = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? mt(e) : n === "fr" ? ht(e) : n === "es" ? gt(e) : n === "de" ? _t(e) : n === "it" ? vt(e) : n === "pt" ? yt(e) : n === "zh" ? bt(e) : n === "ja" ? xt(e) : n === "ko" ? St(e) : Ct(e);
}), Tt = () => "Contact", Et = () => "Contact", Dt = () => "Contacto", Ot = () => "Kontakt", kt = () => "Contatti", At = () => "Contato", jt = () => "联系我们", Mt = () => "お問い合わせ", Nt = () => "문의하기", Pt = () => "Контакт", Ft = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Tt(e) : n === "fr" ? Et(e) : n === "es" ? Dt(e) : n === "de" ? Ot(e) : n === "it" ? kt(e) : n === "pt" ? At(e) : n === "zh" ? jt(e) : n === "ja" ? Mt(e) : n === "ko" ? Nt(e) : Pt(e);
}), It = () => "Settings", Lt = () => "Paramètres", Rt = () => "Ajustes", zt = () => "Einstellungen", Bt = () => "Impostazioni", Vt = () => "Configurações", Ht = () => "设置", Ut = () => "設定", Wt = () => "설정", Gt = () => "Настройки", Kt = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? It(e) : n === "fr" ? Lt(e) : n === "es" ? Rt(e) : n === "de" ? zt(e) : n === "it" ? Bt(e) : n === "pt" ? Vt(e) : n === "zh" ? Ht(e) : n === "ja" ? Ut(e) : n === "ko" ? Wt(e) : Gt(e);
}), qt = () => "Go to GitHub", Jt = () => "Aller sur GitHub", Yt = () => "Ir a GitHub", Xt = () => "Zu GitHub", Zt = () => "Vai su GitHub", Qt = () => "Ir para GitHub", $t = () => "访问 GitHub", en = () => "GitHubへ", tn = () => "GitHub으로 이동", nn = () => "Перейти на GitHub", rn = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? qt(e) : n === "fr" ? Jt(e) : n === "es" ? Yt(e) : n === "de" ? Xt(e) : n === "it" ? Zt(e) : n === "pt" ? Qt(e) : n === "zh" ? $t(e) : n === "ja" ? en(e) : n === "ko" ? tn(e) : nn(e);
}), an = () => "Theme mode: auto (system). Click to switch to light mode.", on = () => "Mode thématique : auto (système). Cliquez pour passer en mode clair.", sn = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", cn = () => "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.", ln = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", un = () => "Modo de tema: automático (sistema). Clique para mudar para o modo claro.", dn = () => "主题模式：自动（系统）。点击切换到明亮模式。", fn = () => "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。", pn = () => "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.", mn = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", hn = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? an(e) : n === "fr" ? on(e) : n === "es" ? sn(e) : n === "de" ? cn(e) : n === "it" ? ln(e) : n === "pt" ? un(e) : n === "zh" ? dn(e) : n === "ja" ? fn(e) : n === "ko" ? pn(e) : mn(e);
}), gn = () => "Theme mode: light. Click to switch to dark mode.", _n = () => "Mode thématique : clair. Cliquez pour passer en mode sombre.", vn = () => "Modo de tema: claro. Haz clic para cambiar al modo oscuro.", yn = () => "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.", bn = () => "Modalità tema: chiara. Clicca per passare alla modalità scura.", xn = () => "Modo de tema: claro. Clique para mudar para o modo escuro.", Sn = () => "主题模式：明亮。点击切换到暗黑模式。", Cn = () => "テーマモード：ライト。クリックしてダークモードに切り替えます。", wn = () => "테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.", Tn = () => "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.", En = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? gn(e) : n === "fr" ? _n(e) : n === "es" ? vn(e) : n === "de" ? yn(e) : n === "it" ? bn(e) : n === "pt" ? xn(e) : n === "zh" ? Sn(e) : n === "ja" ? Cn(e) : n === "ko" ? wn(e) : Tn(e);
}), Dn = () => "Theme mode: dark. Click to switch to auto (system) mode.", On = () => "Mode thématique : sombre. Cliquez pour passer en mode auto (système).", kn = () => "Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).", An = () => "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.", jn = () => "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).", Mn = () => "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).", Nn = () => "主题模式：暗黑。点击切换到自动（系统）模式。", Pn = () => "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。", Fn = () => "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.", In = () => "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.", Ln = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Dn(e) : n === "fr" ? On(e) : n === "es" ? kn(e) : n === "de" ? An(e) : n === "it" ? jn(e) : n === "pt" ? Mn(e) : n === "zh" ? Nn(e) : n === "ja" ? Pn(e) : n === "ko" ? Fn(e) : In(e);
}), Rn = () => "Theme: Auto", zn = () => "Thème : Auto", Bn = () => "Tema: Auto", Vn = () => "Thema: Auto", Hn = () => "Tema: Auto", Un = () => "Tema: Auto", Wn = () => "主题：自动", Gn = () => "テーマ：自動", Kn = () => "테마: 자동", qn = () => "Тема: Авто", Jn = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Rn(e) : n === "fr" ? zn(e) : n === "es" ? Bn(e) : n === "de" ? Vn(e) : n === "it" ? Hn(e) : n === "pt" ? Un(e) : n === "zh" ? Wn(e) : n === "ja" ? Gn(e) : n === "ko" ? Kn(e) : qn(e);
}), Yn = () => "Theme: Dark", Xn = () => "Thème : Sombre", Zn = () => "Tema: Oscuro", Qn = () => "Thema: Dunkel", $n = () => "Tema: Scuro", er = () => "Tema: Escuro", tr = () => "主题：暗黑", Q = () => "テーマ：ダーク", nr = () => "테마: 다크", rr = () => "Тема: Темная", ir = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Yn(e) : n === "fr" ? Xn(e) : n === "es" ? Zn(e) : n === "de" ? Qn(e) : n === "it" ? $n(e) : n === "pt" ? er(e) : n === "zh" ? tr(e) : n === "ja" ? Q(e) : n === "ko" ? nr(e) : rr(e);
}), ar = () => "Theme: Light", or = () => "Thème : Clair", sr = () => "Tema: Claro", cr = () => "Thema: Hell", lr = () => "Tema: Chiaro", ur = () => "Tema: Claro", dr = () => "主题：明亮", fr = () => "テーマ：ライト", pr = () => "테마: 라이트", mr = () => "Тема: Светлая", hr = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? ar(e) : n === "fr" ? or(e) : n === "es" ? sr(e) : n === "de" ? cr(e) : n === "it" ? lr(e) : n === "pt" ? ur(e) : n === "zh" ? dr(e) : n === "ja" ? fr(e) : n === "ko" ? pr(e) : mr(e);
});
function gr() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function _r() {
	let [t, r] = n("auto");
	e(() => {
		let e = gr();
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
	let a = t === "auto" ? hn() : t === "light" ? En() : Ln();
	return c("button", {
		type: "button",
		onClick: i,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t === "auto" ? Jn() : t === "dark" ? ir() : hr()
	});
}
function vr() {
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
			children: u.map((e) => c("option", {
				value: e,
				children: n(e)
			}, e))
		})
	});
}
function yr(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), t(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function br() {
	yr("Header");
	let [e, t] = n(!1), i = a({ strict: !1 }).locale ?? "en", s = [
		{
			to: "/$locale/products",
			label: Ce()
		},
		{
			to: "/$locale/pricing",
			label: Pe()
		},
		{
			to: "/$locale/team",
			label: Ge()
		},
		{
			to: "/$locale/blog",
			label: nt()
		},
		{
			to: "/$locale/careers",
			label: pt()
		},
		{
			to: "/$locale/faq",
			label: wt()
		},
		{
			to: "/$locale/contact",
			label: Ft()
		},
		{
			to: "/$locale/settings",
			label: Kt()
		}
	];
	return c("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: l("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [l("div", {
				className: "flex items-center gap-8",
				children: [c(r, {
					preload: !1,
					to: "/$locale",
					params: { locale: i },
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), l("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						c(r, {
							preload: !1,
							to: "/$locale",
							params: { locale: i },
							activeOptions: { exact: !0 },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: z()
						}),
						c(r, {
							preload: !1,
							to: "/$locale/about",
							params: { locale: i },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: X()
						}),
						l("div", {
							className: "relative",
							children: [l("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => t(!0),
								onMouseLeave: () => t(!1),
								onClick: () => t(!e),
								children: [fe(), c(o, {
									size: 14,
									className: `transition-transform ${e ? "rotate-180" : ""}`
								})]
							}), e && c("div", {
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
									}, e.to))
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
							children: rn()
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
					c(vr, {}),
					c(_r, {})
				]
			})]
		})
	});
}
C("en", { reload: !1 });
function xr({ children: e }) {
	return c(s, { children: e });
}
function Sr() {
	return c(xr, { children: c(br, {}) });
}
export { Sr as default };
