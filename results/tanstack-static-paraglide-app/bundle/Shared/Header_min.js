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
], m = [], h = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var g, _ = !1, v = () => {
	let e = p;
	!h && typeof window < "u" && window.location?.href && (e = L(window.location.href));
	let t = y(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return _ || (g = t, _ = !0, b(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function y(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = j();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && g !== void 0) n = g;
		else if (z(t) && R.has(t)) {
			let e = R.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return C(t);
			}
		}
		let e = S(n);
		if (e) return e;
	}
}
var te = (e) => {
	e ? window.location.href = e : window.location.reload();
}, b = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = v();
	} catch {}
	let i = [], a = p;
	!h && typeof window < "u" && window.location?.href && (a = L(window.location.href));
	for (let t of a) if (t === "globalVariable") g = e;
	else if (t === "cookie") {
		if (h || typeof document > "u" || typeof window > "u") continue;
		let t = `${d}=${e}; path=/; max-age=${f}`;
		document.cookie = t, k();
	} else if (t === "baseLocale") continue;
	else if (z(t) && R.has(t)) {
		let n = R.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!h && n.reload && window.location && e !== r && te(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, x = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function S(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of u) if (e.toLowerCase() === t) return e;
}
function C(e) {
	let t = S(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${u.join(", ")}`);
}
function w(e) {
	return e;
}
function T(e, t) {
	return e.exec(t.href);
}
var E = d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), ne = RegExp(`(?:^|;\\s*)${E}=([^;]*)`), D = Symbol(), O = D;
function k() {
	O = D;
}
function A() {
	typeof queueMicrotask == "function" ? queueMicrotask(k) : Promise.resolve().then(k);
}
function j() {
	if (typeof document > "u") return;
	if (O !== D) return O;
	let e = document.cookie.match(ne)?.[1];
	return O = S(e), A(), O;
}
function M(e) {
	return N(e);
}
function N(e) {
	let t = w(typeof e == "string" ? new URL(e, x()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && S(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), w(t);
}
var P, F;
function I(e) {
	if (m.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (P === t) return F;
	let n = w(new URL(t, "http://example.com")), r = M(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of m) if (T(new ee(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return P = t, F = a, a;
}
function L(e) {
	let t = I(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : p;
}
var R = /* @__PURE__ */ new Map();
function z(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var B = () => "Blog", V = () => "Blog", H = () => "Blog", U = () => "Blog", W = () => "Blog", G = () => "Blog", K = () => "博客", q = () => "ブログ", J = () => "블로그", Y = () => "Блог", X = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "fr" ? V(e) : n === "es" ? H(e) : n === "de" ? U(e) : n === "it" ? W(e) : n === "pt" ? G(e) : n === "zh" ? K(e) : n === "ja" ? q(e) : n === "ko" ? J(e) : n === "ru" ? Y(e) : B(e);
}), Z = () => "Careers", re = () => "Carrières", ie = () => "Carreras", ae = () => "Karriere", oe = () => "Carriere", se = () => "Carreiras", ce = () => "职业生涯", le = () => "採用情報", ue = () => "채용", de = () => "Карьера", fe = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "fr" ? re(e) : n === "es" ? ie(e) : n === "de" ? ae(e) : n === "it" ? oe(e) : n === "pt" ? se(e) : n === "zh" ? ce(e) : n === "ja" ? le(e) : n === "ko" ? ue(e) : n === "ru" ? de(e) : Z(e);
}), pe = () => "Contact", me = () => "Contact", he = () => "Contacto", ge = () => "Kontakt", _e = () => "Contatti", ve = () => "Contato", ye = () => "联系我们", be = () => "お問い合わせ", xe = () => "문의하기", Se = () => "Контакт", Ce = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "fr" ? me(e) : n === "es" ? he(e) : n === "de" ? ge(e) : n === "it" ? _e(e) : n === "pt" ? ve(e) : n === "zh" ? ye(e) : n === "ja" ? be(e) : n === "ko" ? xe(e) : n === "ru" ? Se(e) : pe(e);
}), we = () => "FAQ", Te = () => "FAQ", Ee = () => "FAQ", De = () => "FAQ", Oe = () => "FAQ", ke = () => "FAQ", Ae = () => "常见问题", je = () => "FAQ", Me = () => "FAQ", Ne = () => "FAQ", Pe = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "fr" ? Te(e) : n === "es" ? Ee(e) : n === "de" ? De(e) : n === "it" ? Oe(e) : n === "pt" ? ke(e) : n === "zh" ? Ae(e) : n === "ja" ? je(e) : n === "ko" ? Me(e) : n === "ru" ? Ne(e) : we(e);
}), Fe = () => "Go to GitHub", Ie = () => "Aller sur GitHub", Le = () => "Ir a GitHub", Re = () => "Zu GitHub", ze = () => "Vai su GitHub", Be = () => "Ir para GitHub", Ve = () => "访问 GitHub", He = () => "GitHubへ", Ue = () => "GitHub으로 이동", We = () => "Перейти на GitHub", Ge = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "fr" ? Ie(e) : n === "es" ? Le(e) : n === "de" ? Re(e) : n === "it" ? ze(e) : n === "pt" ? Be(e) : n === "zh" ? Ve(e) : n === "ja" ? He(e) : n === "ko" ? Ue(e) : n === "ru" ? We(e) : Fe(e);
}), Ke = () => "Home", qe = () => "Accueil", Je = () => "Inicio", Ye = () => "Startseite", Xe = () => "Home", Ze = () => "Início", Qe = () => "首页", $e = () => "ホーム", et = () => "홈", tt = () => "Главная", nt = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "fr" ? qe(e) : n === "es" ? Je(e) : n === "de" ? Ye(e) : n === "it" ? Xe(e) : n === "pt" ? Ze(e) : n === "zh" ? Qe(e) : n === "ja" ? $e(e) : n === "ko" ? et(e) : n === "ru" ? tt(e) : Ke(e);
}), rt = () => "Methodology", it = () => "Méthodologie", at = () => "Metodología", ot = () => "Methodik", st = () => "Metodologia", ct = () => "Metodologia", lt = () => "方法论", ut = () => "方法論", dt = () => "방법론", ft = () => "Методология", pt = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "fr" ? it(e) : n === "es" ? at(e) : n === "de" ? ot(e) : n === "it" ? st(e) : n === "pt" ? ct(e) : n === "zh" ? lt(e) : n === "ja" ? ut(e) : n === "ko" ? dt(e) : n === "ru" ? ft(e) : rt(e);
}), mt = () => "Mock Pages", ht = () => "Pages de test", gt = () => "Páginas de prueba", _t = () => "Testseiten", vt = () => "Pagine di test", yt = () => "Páginas de teste", bt = () => "模拟页面", xt = () => "モックページ", St = () => "모의 페이지", Ct = () => "Тестовые страницы", wt = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "fr" ? ht(e) : n === "es" ? gt(e) : n === "de" ? _t(e) : n === "it" ? vt(e) : n === "pt" ? yt(e) : n === "zh" ? bt(e) : n === "ja" ? xt(e) : n === "ko" ? St(e) : n === "ru" ? Ct(e) : mt(e);
}), Tt = () => "Pricing", Et = () => "Tarifs", Dt = () => "Precios", Ot = () => "Preise", kt = () => "Prezzi", At = () => "Preços", jt = () => "价格", Mt = () => "料金", Nt = () => "요금", Pt = () => "Цены", Ft = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "fr" ? Et(e) : n === "es" ? Dt(e) : n === "de" ? Ot(e) : n === "it" ? kt(e) : n === "pt" ? At(e) : n === "zh" ? jt(e) : n === "ja" ? Mt(e) : n === "ko" ? Nt(e) : n === "ru" ? Pt(e) : Tt(e);
}), It = () => "Products", Lt = () => "Produits", Rt = () => "Productos", zt = () => "Produkte", Bt = () => "Prodotti", Vt = () => "Produtos", Ht = () => "产品", Ut = () => "製品", Wt = () => "제품", Gt = () => "Продукты", Kt = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "fr" ? Lt(e) : n === "es" ? Rt(e) : n === "de" ? zt(e) : n === "it" ? Bt(e) : n === "pt" ? Vt(e) : n === "zh" ? Ht(e) : n === "ja" ? Ut(e) : n === "ko" ? Wt(e) : n === "ru" ? Gt(e) : It(e);
}), qt = () => "Settings", Jt = () => "Paramètres", Yt = () => "Ajustes", Xt = () => "Einstellungen", Zt = () => "Impostazioni", Qt = () => "Configurações", $t = () => "设置", en = () => "設定", tn = () => "설정", nn = () => "Настройки", rn = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "fr" ? Jt(e) : n === "es" ? Yt(e) : n === "de" ? Xt(e) : n === "it" ? Zt(e) : n === "pt" ? Qt(e) : n === "zh" ? $t(e) : n === "ja" ? en(e) : n === "ko" ? tn(e) : n === "ru" ? nn(e) : qt(e);
}), an = () => "Team", on = () => "Équipe", sn = () => "Equipo", cn = () => "Team", ln = () => "Team", un = () => "Equipe", dn = () => "团队", fn = () => "チーム", pn = () => "팀", mn = () => "Команда", hn = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "fr" ? on(e) : n === "es" ? sn(e) : n === "de" ? cn(e) : n === "it" ? ln(e) : n === "pt" ? un(e) : n === "zh" ? dn(e) : n === "ja" ? fn(e) : n === "ko" ? pn(e) : n === "ru" ? mn(e) : an(e);
}), gn = () => "Theme: Auto", _n = () => "Thème : Auto", vn = () => "Tema: Auto", yn = () => "Thema: Auto", bn = () => "Tema: Auto", xn = () => "Tema: Auto", Sn = () => "主题：自动", Cn = () => "テーマ：自動", wn = () => "테마: 자동", Tn = () => "Тема: Авто", En = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "fr" ? _n(e) : n === "es" ? vn(e) : n === "de" ? yn(e) : n === "it" ? bn(e) : n === "pt" ? xn(e) : n === "zh" ? Sn(e) : n === "ja" ? Cn(e) : n === "ko" ? wn(e) : n === "ru" ? Tn(e) : gn(e);
}), Dn = () => "Theme: Dark", On = () => "Thème : Sombre", kn = () => "Tema: Oscuro", An = () => "Thema: Dunkel", jn = () => "Tema: Scuro", Mn = () => "Tema: Escuro", Nn = () => "主题：暗黑", Pn = () => "テーマ：ダーク", Fn = () => "테마: 다크", In = () => "Тема: Темная", Ln = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "fr" ? On(e) : n === "es" ? kn(e) : n === "de" ? An(e) : n === "it" ? jn(e) : n === "pt" ? Mn(e) : n === "zh" ? Nn(e) : n === "ja" ? Pn(e) : n === "ko" ? Fn(e) : n === "ru" ? In(e) : Dn(e);
}), Rn = () => "Theme: Light", zn = () => "Thème : Clair", Bn = () => "Tema: Claro", Vn = () => "Thema: Hell", Hn = () => "Tema: Chiaro", Un = () => "Tema: Claro", Wn = () => "主题：明亮", Gn = () => "テーマ：ライト", Kn = () => "테마: 라이트", qn = () => "Тема: Светлая", Jn = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "fr" ? zn(e) : n === "es" ? Bn(e) : n === "de" ? Vn(e) : n === "it" ? Hn(e) : n === "pt" ? Un(e) : n === "zh" ? Wn(e) : n === "ja" ? Gn(e) : n === "ko" ? Kn(e) : n === "ru" ? qn(e) : Rn(e);
}), Yn = () => "Theme mode: auto (system). Click to switch to light mode.", Xn = () => "Mode thématique : auto (système). Cliquez pour passer en mode clair.", Zn = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", Qn = () => "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.", $n = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", er = () => "Modo de tema: automático (sistema). Clique para mudar para o modo claro.", tr = () => "主题模式：自动（系统）。点击切换到明亮模式。", nr = () => "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。", rr = () => "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.", ir = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", ar = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "fr" ? Xn(e) : n === "es" ? Zn(e) : n === "de" ? Qn(e) : n === "it" ? $n(e) : n === "pt" ? er(e) : n === "zh" ? tr(e) : n === "ja" ? nr(e) : n === "ko" ? rr(e) : n === "ru" ? ir(e) : Yn(e);
}), or = () => "Theme mode: dark. Click to switch to auto (system) mode.", sr = () => "Mode thématique : sombre. Cliquez pour passer en mode auto (système).", cr = () => "Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).", lr = () => "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.", ur = () => "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).", dr = () => "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).", fr = () => "主题模式：暗黑。点击切换到自动（系统）模式。", pr = () => "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。", mr = () => "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.", hr = () => "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "fr" ? sr(e) : n === "es" ? cr(e) : n === "de" ? lr(e) : n === "it" ? ur(e) : n === "pt" ? dr(e) : n === "zh" ? fr(e) : n === "ja" ? pr(e) : n === "ko" ? mr(e) : n === "ru" ? hr(e) : or(e);
}), gr = () => "Theme mode: light. Click to switch to dark mode.", _r = () => "Mode thématique : clair. Cliquez pour passer en mode sombre.", vr = () => "Modo de tema: claro. Haz clic para cambiar al modo oscuro.", yr = () => "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.", br = () => "Modalità tema: chiara. Clicca per passare alla modalità scura.", xr = () => "Modo de tema: claro. Clique para mudar para o modo escuro.", Sr = () => "主题模式：明亮。点击切换到暗黑模式。", Cr = () => "テーマモード：ライト。クリックしてダークモードに切り替えます。", wr = () => "테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.", Tr = () => "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.", Er = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "fr" ? _r(e) : n === "es" ? vr(e) : n === "de" ? yr(e) : n === "it" ? br(e) : n === "pt" ? xr(e) : n === "zh" ? Sr(e) : n === "ja" ? Cr(e) : n === "ko" ? wr(e) : n === "ru" ? Tr(e) : gr(e);
});
function Dr() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Or() {
	let [t, r] = n("auto");
	e(() => {
		let e = Dr();
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
	let a = t === "auto" ? ar() : t === "light" ? Er() : Q();
	return c("button", {
		type: "button",
		onClick: i,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t === "auto" ? En() : t === "dark" ? Ln() : Jn()
	});
}
function kr() {
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
function Ar(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), t(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function jr() {
	Ar("Header");
	let [e, t] = n(!1), i = a({ strict: !1 }).locale ?? "en", s = [
		{
			to: "/$locale/products",
			label: Kt()
		},
		{
			to: "/$locale/pricing",
			label: Ft()
		},
		{
			to: "/$locale/team",
			label: hn()
		},
		{
			to: "/$locale/blog",
			label: X()
		},
		{
			to: "/$locale/careers",
			label: fe()
		},
		{
			to: "/$locale/faq",
			label: Pe()
		},
		{
			to: "/$locale/contact",
			label: Ce()
		},
		{
			to: "/$locale/settings",
			label: rn()
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
							children: nt()
						}),
						c(r, {
							preload: !1,
							to: "/$locale/about",
							params: { locale: i },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: pt()
						}),
						l("div", {
							className: "relative",
							children: [l("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => t(!0),
								onMouseLeave: () => t(!1),
								onClick: () => t(!e),
								children: [wt(), c(o, {
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
							children: Ge()
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
					c(kr, {}),
					c(Or, {})
				]
			})]
		})
	});
}
b("en", { reload: !1 });
function Mr({ children: e }) {
	return c(s, { children: e });
}
function Nr() {
	return c(Mr, { children: c(jr, {}) });
}
export { Nr as default };
