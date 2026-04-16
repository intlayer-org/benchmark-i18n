import { Profiler as e, useEffect as t, useLayoutEffect as n, useState as r } from "react";
import { useParams as i, usePathname as a, useRouter as o } from "next/navigation";
import s from "next/link";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import { ChevronDown as u } from "lucide-react";
var d = (e) => /^https?:\/\//.test(e ?? ""), f = ({ href: e, children: t, ...n }) => {
	let r = i().locale ?? "en", a = d(e.toString());
	return c(s, {
		href: e && !a && !e.toString().startsWith(`/${r}`) ? `/${r}${e}` : e,
		...n,
		children: t
	});
}, ee = {}, p = [
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
], m = "PARAGLIDE_LOCALE", h = 3456e4, g = [
	"cookie",
	"globalVariable",
	"baseLocale"
], _ = [], v, y;
function b(e) {
	if (_.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (v === t) return y;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of _) if (new ee(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return v = t, y = r, r;
}
function x(e) {
	let t = b(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : g;
}
var S = void 0, C = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var w, T = !1, E = () => {
	if (S) {
		let e = S?.getStore()?.locale;
		if (e) return e;
	}
	let e = g;
	!C && typeof window < "u" && window.location?.href && (e = x(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return T || (w = t, T = !0, D(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = A();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && w !== void 0) n = w;
		else if (M(t) && j.has(t)) {
			let e = j.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return k(t);
			}
		}
		let e = O(n);
		if (e) return e;
	}
}
var ne = (e) => {
	e ? window.location.href = e : window.location.reload();
}, D = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = E();
	} catch {}
	let i = [], a = g;
	!C && typeof window < "u" && window.location?.href && (a = x(window.location.href));
	for (let t of a) if (t === "globalVariable") w = e;
	else if (t === "cookie") {
		if (C || typeof document > "u" || typeof window > "u") continue;
		let t = `${m}=${e}; path=/; max-age=${h}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (M(t) && j.has(t)) {
		let n = j.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!C && n.reload && window.location && e !== r && ne(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function O(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of p) if (e.toLowerCase() === t) return e;
}
function k(e) {
	let t = O(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${p.join(", ")}`);
}
function A() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${m}=([^;]+)`))?.[2];
	return O(e);
}
var j = /* @__PURE__ */ new Map();
function M(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var N = () => "Home", P = () => "Accueil", F = () => "Inicio", I = () => "Startseite", L = () => "Home", R = () => "Início", z = () => "首页", B = () => "ホーム", V = () => "홈", H = () => "Главная", U = ((e = {}, t = {}) => {
	let n = t.locale ?? E();
	return n === "en" ? N(e) : n === "fr" ? P(e) : n === "es" ? F(e) : n === "de" ? I(e) : n === "it" ? L(e) : n === "pt" ? R(e) : n === "zh" ? z(e) : n === "ja" ? B(e) : n === "ko" ? V(e) : H(e);
}), W = () => "Methodology", G = () => "Méthodologie", K = () => "Metodología", q = () => "Methodik", J = () => "Metodologia", Y = () => "Metodologia", X = () => "方法论", Z = () => "方法論", re = () => "방법론", ie = () => "Методология", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? E();
	return n === "en" ? W(e) : n === "fr" ? G(e) : n === "es" ? K(e) : n === "de" ? q(e) : n === "it" ? J(e) : n === "pt" ? Y(e) : n === "zh" ? X(e) : n === "ja" ? Z(e) : n === "ko" ? re(e) : ie(e);
}), oe = () => "Mock Pages", se = () => "Pages de test", ce = () => "Páginas de prueba", le = () => "Testseiten", ue = () => "Pagine di test", de = () => "Páginas de teste", fe = () => "模拟页面", pe = () => "モックページ", me = () => "모의 페이지", he = () => "Тестовые страницы", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? E();
	return n === "en" ? oe(e) : n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : he(e);
}), _e = () => "Products", ve = () => "Produits", ye = () => "Productos", be = () => "Produkte", xe = () => "Prodotti", Se = () => "Produtos", Ce = () => "产品", we = () => "製品", Te = () => "제품", Ee = () => "Продукты", De = ((e = {}, t = {}) => {
	let n = t.locale ?? E();
	return n === "en" ? _e(e) : n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : Ee(e);
}), Oe = () => "Pricing", ke = () => "Tarifs", Ae = () => "Precios", je = () => "Preise", Me = () => "Prezzi", Ne = () => "Preços", Pe = () => "价格", Fe = () => "料金", Ie = () => "요금", Le = () => "Цены", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? E();
	return n === "en" ? Oe(e) : n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : Le(e);
}), ze = () => "Team", Be = () => "Équipe", Ve = () => "Equipo", He = () => "Team", Ue = () => "Team", We = () => "Equipe", Ge = () => "团队", Ke = () => "チーム", qe = () => "팀", Je = () => "Команда", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? E();
	return n === "en" ? ze(e) : n === "fr" ? Be(e) : n === "es" ? Ve(e) : n === "de" ? He(e) : n === "it" ? Ue(e) : n === "pt" ? We(e) : n === "zh" ? Ge(e) : n === "ja" ? Ke(e) : n === "ko" ? qe(e) : Je(e);
}), Xe = () => "Blog", Ze = () => "Blog", Qe = () => "Blog", $e = () => "Blog", et = () => "Blog", tt = () => "Blog", nt = () => "博客", rt = () => "ブログ", it = () => "블로그", at = () => "Блог", ot = ((e = {}, t = {}) => {
	let n = t.locale ?? E();
	return n === "en" ? Xe(e) : n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : at(e);
}), st = () => "Careers", ct = () => "Carrières", lt = () => "Carreras", ut = () => "Karriere", dt = () => "Carriere", ft = () => "Carreiras", pt = () => "职业生涯", mt = () => "採用情報", ht = () => "채용", gt = () => "Карьера", _t = ((e = {}, t = {}) => {
	let n = t.locale ?? E();
	return n === "en" ? st(e) : n === "fr" ? ct(e) : n === "es" ? lt(e) : n === "de" ? ut(e) : n === "it" ? dt(e) : n === "pt" ? ft(e) : n === "zh" ? pt(e) : n === "ja" ? mt(e) : n === "ko" ? ht(e) : gt(e);
}), vt = () => "FAQ", yt = () => "FAQ", bt = () => "FAQ", xt = () => "FAQ", St = () => "FAQ", Ct = () => "FAQ", wt = () => "常见问题", Tt = () => "FAQ", Et = () => "FAQ", Dt = () => "FAQ", Ot = ((e = {}, t = {}) => {
	let n = t.locale ?? E();
	return n === "en" ? vt(e) : n === "fr" ? yt(e) : n === "es" ? bt(e) : n === "de" ? xt(e) : n === "it" ? St(e) : n === "pt" ? Ct(e) : n === "zh" ? wt(e) : n === "ja" ? Tt(e) : n === "ko" ? Et(e) : Dt(e);
}), kt = () => "Contact", At = () => "Contact", jt = () => "Contacto", Mt = () => "Kontakt", Nt = () => "Contatti", Pt = () => "Contato", Ft = () => "联系我们", It = () => "お問い合わせ", Lt = () => "문의하기", Rt = () => "Контакт", zt = ((e = {}, t = {}) => {
	let n = t.locale ?? E();
	return n === "en" ? kt(e) : n === "fr" ? At(e) : n === "es" ? jt(e) : n === "de" ? Mt(e) : n === "it" ? Nt(e) : n === "pt" ? Pt(e) : n === "zh" ? Ft(e) : n === "ja" ? It(e) : n === "ko" ? Lt(e) : Rt(e);
}), Bt = () => "Settings", Vt = () => "Paramètres", Ht = () => "Ajustes", Ut = () => "Einstellungen", Wt = () => "Impostazioni", Gt = () => "Configurações", Kt = () => "设置", qt = () => "設定", Jt = () => "설정", Yt = () => "Настройки", Xt = ((e = {}, t = {}) => {
	let n = t.locale ?? E();
	return n === "en" ? Bt(e) : n === "fr" ? Vt(e) : n === "es" ? Ht(e) : n === "de" ? Ut(e) : n === "it" ? Wt(e) : n === "pt" ? Gt(e) : n === "zh" ? Kt(e) : n === "ja" ? qt(e) : n === "ko" ? Jt(e) : Yt(e);
}), Zt = () => "Go to GitHub", Qt = () => "Aller sur GitHub", $t = () => "Ir a GitHub", en = () => "Zu GitHub", tn = () => "Vai su GitHub", nn = () => "Ir para GitHub", rn = () => "访问 GitHub", an = () => "GitHubへ", on = () => "GitHub으로 이동", sn = () => "Перейти на GitHub", cn = ((e = {}, t = {}) => {
	let n = t.locale ?? E();
	return n === "en" ? Zt(e) : n === "fr" ? Qt(e) : n === "es" ? $t(e) : n === "de" ? en(e) : n === "it" ? tn(e) : n === "pt" ? nn(e) : n === "zh" ? rn(e) : n === "ja" ? an(e) : n === "ko" ? on(e) : sn(e);
}), ln = () => "Theme mode: auto (system). Click to switch to light mode.", un = () => "Mode thématique : auto (système). Cliquez pour passer en mode clair.", dn = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", fn = () => "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.", pn = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", mn = () => "Modo de tema: automático (sistema). Clique para mudar para o modo claro.", hn = () => "主题模式：自动（系统）。点击切换到明亮模式。", gn = () => "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。", _n = () => "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.", vn = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", yn = ((e = {}, t = {}) => {
	let n = t.locale ?? E();
	return n === "en" ? ln(e) : n === "fr" ? un(e) : n === "es" ? dn(e) : n === "de" ? fn(e) : n === "it" ? pn(e) : n === "pt" ? mn(e) : n === "zh" ? hn(e) : n === "ja" ? gn(e) : n === "ko" ? _n(e) : vn(e);
}), bn = () => "Theme mode: light. Click to switch to dark mode.", xn = () => "Mode thématique : clair. Cliquez pour passer en mode sombre.", Sn = () => "Modo de tema: claro. Haz clic para cambiar al modo oscuro.", Cn = () => "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.", wn = () => "Modalità tema: chiara. Clicca per passare alla modalità scura.", Tn = () => "Modo de tema: claro. Clique para mudar para o modo escuro.", En = () => "主题模式：明亮。点击切换到暗黑模式。", Dn = () => "テーマモード：ライト。クリックしてダークモードに切り替えます。", On = () => "테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.", kn = () => "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.", An = ((e = {}, t = {}) => {
	let n = t.locale ?? E();
	return n === "en" ? bn(e) : n === "fr" ? xn(e) : n === "es" ? Sn(e) : n === "de" ? Cn(e) : n === "it" ? wn(e) : n === "pt" ? Tn(e) : n === "zh" ? En(e) : n === "ja" ? Dn(e) : n === "ko" ? On(e) : kn(e);
}), jn = () => "Theme mode: dark. Click to switch to auto (system) mode.", Mn = () => "Mode thématique : sombre. Cliquez pour passer en mode auto (système).", Nn = () => "Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).", Pn = () => "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.", Fn = () => "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).", In = () => "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).", Ln = () => "主题模式：暗黑。点击切换到自动（系统）模式。", Rn = () => "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。", zn = () => "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.", Bn = () => "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.", Vn = ((e = {}, t = {}) => {
	let n = t.locale ?? E();
	return n === "en" ? jn(e) : n === "fr" ? Mn(e) : n === "es" ? Nn(e) : n === "de" ? Pn(e) : n === "it" ? Fn(e) : n === "pt" ? In(e) : n === "zh" ? Ln(e) : n === "ja" ? Rn(e) : n === "ko" ? zn(e) : Bn(e);
}), Hn = () => "Theme: Auto", Un = () => "Thème : Auto", Wn = () => "Tema: Auto", Gn = () => "Thema: Auto", Kn = () => "Tema: Auto", qn = () => "Tema: Auto", Jn = () => "主题：自动", Yn = () => "テーマ：自動", Xn = () => "테마: 자동", Zn = () => "Тема: Авто", Qn = ((e = {}, t = {}) => {
	let n = t.locale ?? E();
	return n === "en" ? Hn(e) : n === "fr" ? Un(e) : n === "es" ? Wn(e) : n === "de" ? Gn(e) : n === "it" ? Kn(e) : n === "pt" ? qn(e) : n === "zh" ? Jn(e) : n === "ja" ? Yn(e) : n === "ko" ? Xn(e) : Zn(e);
}), $n = () => "Theme: Dark", er = () => "Thème : Sombre", tr = () => "Tema: Oscuro", nr = () => "Thema: Dunkel", rr = () => "Tema: Scuro", ir = () => "Tema: Escuro", ar = () => "主题：暗黑", or = () => "テーマ：ダーク", sr = () => "테마: 다크", cr = () => "Тема: Темная", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? E();
	return n === "en" ? $n(e) : n === "fr" ? er(e) : n === "es" ? tr(e) : n === "de" ? nr(e) : n === "it" ? rr(e) : n === "pt" ? ir(e) : n === "zh" ? ar(e) : n === "ja" ? or(e) : n === "ko" ? sr(e) : cr(e);
}), lr = () => "Theme: Light", ur = () => "Thème : Clair", dr = () => "Tema: Claro", fr = () => "Thema: Hell", pr = () => "Tema: Chiaro", mr = () => "Tema: Claro", hr = () => "主题：明亮", gr = () => "テーマ：ライト", _r = () => "테마: 라이트", vr = () => "Тема: Светлая", yr = ((e = {}, t = {}) => {
	let n = t.locale ?? E();
	return n === "en" ? lr(e) : n === "fr" ? ur(e) : n === "es" ? dr(e) : n === "de" ? fr(e) : n === "it" ? pr(e) : n === "pt" ? mr(e) : n === "zh" ? hr(e) : n === "ja" ? gr(e) : n === "ko" ? _r(e) : vr(e);
});
function br() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function xr() {
	let [e, n] = r("auto");
	t(() => {
		let e = br();
		n(e), $(e);
	}, []), t(() => {
		if (e !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return t.addEventListener("change", n), () => {
			t.removeEventListener("change", n);
		};
	}, [e]);
	function i() {
		let t = e === "light" ? "dark" : e === "dark" ? "auto" : "light";
		n(t), $(t), window.localStorage.setItem("theme", t);
	}
	let a = e === "auto" ? yn() : e === "light" ? An() : Vn();
	return c("button", {
		type: "button",
		onClick: i,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e === "auto" ? Qn() : e === "dark" ? Q() : yr()
	});
}
function Sr() {
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
			children: p.map((e) => c("option", {
				value: e,
				children: r(e)
			}, e))
		})
	});
}
function Cr(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), n(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function wr() {
	Cr("Header");
	let [e, t] = r(!1), n = i().locale ?? "en", o = a(), s = [
		{
			href: "/products",
			label: De()
		},
		{
			href: "/pricing",
			label: Re()
		},
		{
			href: "/team",
			label: Ye()
		},
		{
			href: "/blog",
			label: ot()
		},
		{
			href: "/careers",
			label: _t()
		},
		{
			href: "/faq",
			label: Ot()
		},
		{
			href: "/contact",
			label: zt()
		},
		{
			href: "/settings",
			label: Xt()
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
							className: `nav-link${((e) => o === e)(`/${n}`) ? " is-active" : ""}`,
							children: U()
						}),
						c(f, {
							href: "/about",
							className: `nav-link${((e) => o.startsWith(e))(`/${n}/about`) ? " is-active" : ""}`,
							children: ae()
						}),
						l("div", {
							className: "relative",
							children: [l("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => t(!0),
								onMouseLeave: () => t(!1),
								onClick: () => t(!e),
								children: [ge(), c(u, {
									size: 14,
									className: `transition-transform ${e ? "rotate-180" : ""}`
								})]
							}), e && c("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => t(!0),
								onMouseLeave: () => t(!1),
								children: c("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: s.map((e) => c(f, {
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
							children: cn()
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
					c(Sr, {}),
					c(xr, {})
				]
			})]
		})
	});
}
function Tr() {
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
function Er(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
function Dr({ children: n }) {
	let r = i().locale ?? "en";
	return t(() => {
		D(r), document.documentElement.lang = r;
	}, [r]), t(() => {
		Tr();
	}, []), c(e, {
		id: "AppRoot",
		onRender: Er,
		children: n
	});
}
function Or({ children: e }) {
	return c(Dr, { children: e });
}
function kr() {
	return c(Or, { children: c(wr, {}) });
}
export { kr as default };
