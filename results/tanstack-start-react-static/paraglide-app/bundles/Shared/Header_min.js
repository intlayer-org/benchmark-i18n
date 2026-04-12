import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Link as r, useNavigate as i, useParams as a } from "@tanstack/react-router";
import { ChevronDown as o } from "lucide-react";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/paraglide/runtime.js
var ee = {}, u = [
	"en",
	"de",
	"fr",
	"es",
	"ja",
	"zh",
	"ko",
	"it",
	"pt"
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
//#endregion
//#region src/paraglide/messages/header_home.js
var k = () => "Home", A = () => "Startseite", j = () => "Accueil", M = () => "Inicio", N = () => "ホーム", P = () => "首页", F = () => "홈", I = () => "Home", L = () => "Início", R = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? k(e) : n === "de" ? A(e) : n === "fr" ? j(e) : n === "es" ? M(e) : n === "ja" ? N(e) : n === "zh" ? P(e) : n === "ko" ? F(e) : n === "it" ? I(e) : L(e);
}), z = () => "Methodology", B = () => "Methodik", V = () => "Méthodologie", H = () => "Metodología", U = () => "方法論", W = () => "方法论", G = () => "방법론", K = () => "Metodologia", q = () => "Metodologia", J = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? z(e) : n === "de" ? B(e) : n === "fr" ? V(e) : n === "es" ? H(e) : n === "ja" ? U(e) : n === "zh" ? W(e) : n === "ko" ? G(e) : n === "it" ? K(e) : q(e);
}), Y = () => "Mock Pages", X = () => "Testseiten", Z = () => "Pages de test", re = () => "Páginas de prueba", ie = () => "モックページ", ae = () => "模拟页面", oe = () => "모의 페이지", se = () => "Pagine di test", ce = () => "Páginas de teste", le = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Y(e) : n === "de" ? X(e) : n === "fr" ? Z(e) : n === "es" ? re(e) : n === "ja" ? ie(e) : n === "zh" ? ae(e) : n === "ko" ? oe(e) : n === "it" ? se(e) : ce(e);
}), ue = () => "Products", de = () => "Produkte", fe = () => "Produits", pe = () => "Productos", me = () => "製品", he = () => "产品", ge = () => "제품", _e = () => "Prodotti", ve = () => "Produtos", ye = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? ue(e) : n === "de" ? de(e) : n === "fr" ? fe(e) : n === "es" ? pe(e) : n === "ja" ? me(e) : n === "zh" ? he(e) : n === "ko" ? ge(e) : n === "it" ? _e(e) : ve(e);
}), be = () => "Pricing", xe = () => "Preise", Se = () => "Tarifs", Ce = () => "Precios", we = () => "料金", Te = () => "价格", Ee = () => "요금", De = () => "Prezzi", Oe = () => "Preços", ke = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? be(e) : n === "de" ? xe(e) : n === "fr" ? Se(e) : n === "es" ? Ce(e) : n === "ja" ? we(e) : n === "zh" ? Te(e) : n === "ko" ? Ee(e) : n === "it" ? De(e) : Oe(e);
}), Ae = () => "Team", je = () => "Team", Me = () => "Équipe", Ne = () => "Equipo", Pe = () => "チーム", Fe = () => "团队", Ie = () => "팀", Le = () => "Team", Re = () => "Equipe", ze = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Ae(e) : n === "de" ? je(e) : n === "fr" ? Me(e) : n === "es" ? Ne(e) : n === "ja" ? Pe(e) : n === "zh" ? Fe(e) : n === "ko" ? Ie(e) : n === "it" ? Le(e) : Re(e);
}), Be = () => "Blog", Ve = () => "Blog", He = () => "Blog", Ue = () => "Blog", We = () => "ブログ", Ge = () => "博客", Ke = () => "블로그", qe = () => "Blog", Je = () => "Blog", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Be(e) : n === "de" ? Ve(e) : n === "fr" ? He(e) : n === "es" ? Ue(e) : n === "ja" ? We(e) : n === "zh" ? Ge(e) : n === "ko" ? Ke(e) : n === "it" ? qe(e) : Je(e);
}), Xe = () => "Careers", Ze = () => "Karriere", Qe = () => "Carrières", $e = () => "Carreras", et = () => "採用情報", tt = () => "职业生涯", nt = () => "채용", rt = () => "Carriere", it = () => "Carreiras", at = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Xe(e) : n === "de" ? Ze(e) : n === "fr" ? Qe(e) : n === "es" ? $e(e) : n === "ja" ? et(e) : n === "zh" ? tt(e) : n === "ko" ? nt(e) : n === "it" ? rt(e) : it(e);
}), ot = () => "FAQ", st = () => "FAQ", ct = () => "FAQ", lt = () => "FAQ", ut = () => "FAQ", dt = () => "常见问题", ft = () => "FAQ", pt = () => "FAQ", mt = () => "FAQ", ht = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? ot(e) : n === "de" ? st(e) : n === "fr" ? ct(e) : n === "es" ? lt(e) : n === "ja" ? ut(e) : n === "zh" ? dt(e) : n === "ko" ? ft(e) : n === "it" ? pt(e) : mt(e);
}), gt = () => "Contact", _t = () => "Kontakt", vt = () => "Contact", yt = () => "Contacto", bt = () => "お問い合わせ", xt = () => "联系我们", St = () => "문의하기", Ct = () => "Contatti", wt = () => "Contato", Tt = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? gt(e) : n === "de" ? _t(e) : n === "fr" ? vt(e) : n === "es" ? yt(e) : n === "ja" ? bt(e) : n === "zh" ? xt(e) : n === "ko" ? St(e) : n === "it" ? Ct(e) : wt(e);
}), Et = () => "Settings", Dt = () => "Einstellungen", Ot = () => "Paramètres", kt = () => "Ajustes", At = () => "設定", jt = () => "设置", Mt = () => "설정", Nt = () => "Impostazioni", Pt = () => "Configurações", Ft = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Et(e) : n === "de" ? Dt(e) : n === "fr" ? Ot(e) : n === "es" ? kt(e) : n === "ja" ? At(e) : n === "zh" ? jt(e) : n === "ko" ? Mt(e) : n === "it" ? Nt(e) : Pt(e);
}), It = () => "Go to GitHub", Lt = () => "Zu GitHub", Rt = () => "Aller sur GitHub", zt = () => "Ir a GitHub", Bt = () => "GitHubへ", Vt = () => "访问 GitHub", Ht = () => "GitHub으로 이동", Ut = () => "Vai su GitHub", Wt = () => "Ir para GitHub", Gt = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? It(e) : n === "de" ? Lt(e) : n === "fr" ? Rt(e) : n === "es" ? zt(e) : n === "ja" ? Bt(e) : n === "zh" ? Vt(e) : n === "ko" ? Ht(e) : n === "it" ? Ut(e) : Wt(e);
}), Kt = () => "Theme mode: auto (system). Click to switch to light mode.", qt = () => "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.", Jt = () => "Mode thématique : auto (système). Cliquez pour passer en mode clair.", Yt = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", Xt = () => "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。", Zt = () => "主题模式：自动（系统）。点击切换到明亮模式。", Qt = () => "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.", $t = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", en = () => "Modo de tema: automático (sistema). Clique para mudar para o modo claro.", tn = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Kt(e) : n === "de" ? qt(e) : n === "fr" ? Jt(e) : n === "es" ? Yt(e) : n === "ja" ? Xt(e) : n === "zh" ? Zt(e) : n === "ko" ? Qt(e) : n === "it" ? $t(e) : en(e);
}), nn = () => "Theme mode: light. Click to switch to dark mode.", rn = () => "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.", an = () => "Mode thématique : clair. Cliquez pour passer en mode sombre.", on = () => "Modo de tema: claro. Haz clic para cambiar al modo oscuro.", sn = () => "テーマモード：ライト。クリックしてダークモードに切り替えます。", cn = () => "主题模式：明亮。点击切换到暗黑模式。", ln = () => "테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.", un = () => "Modalità tema: chiara. Clicca per passare alla modalità scura.", dn = () => "Modo de tema: claro. Clique para mudar para o modo escuro.", fn = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? nn(e) : n === "de" ? rn(e) : n === "fr" ? an(e) : n === "es" ? on(e) : n === "ja" ? sn(e) : n === "zh" ? cn(e) : n === "ko" ? ln(e) : n === "it" ? un(e) : dn(e);
}), pn = () => "Theme mode: dark. Click to switch to auto (system) mode.", mn = () => "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.", hn = () => "Mode thématique : sombre. Cliquez pour passer en mode auto (système).", gn = () => "Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).", _n = () => "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。", vn = () => "主题模式：暗黑。点击切换到自动（系统）模式。", yn = () => "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.", bn = () => "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).", xn = () => "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).", Sn = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? pn(e) : n === "de" ? mn(e) : n === "fr" ? hn(e) : n === "es" ? gn(e) : n === "ja" ? _n(e) : n === "zh" ? vn(e) : n === "ko" ? yn(e) : n === "it" ? bn(e) : xn(e);
}), Cn = () => "Theme: Auto", wn = () => "Thema: Auto", Tn = () => "Thème : Auto", En = () => "Tema: Auto", Dn = () => "テーマ：自動", On = () => "主题：自动", kn = () => "테마: 자동", An = () => "Tema: Auto", jn = () => "Tema: Auto", Mn = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Cn(e) : n === "de" ? wn(e) : n === "fr" ? Tn(e) : n === "es" ? En(e) : n === "ja" ? Dn(e) : n === "zh" ? On(e) : n === "ko" ? kn(e) : n === "it" ? An(e) : jn(e);
}), Nn = () => "Theme: Dark", Pn = () => "Thema: Dunkel", Fn = () => "Thème : Sombre", In = () => "Tema: Oscuro", Ln = () => "テーマ：ダーク", Rn = () => "主题：暗黑", zn = () => "테마: 다크", Bn = () => "Tema: Scuro", Vn = () => "Tema: Escuro", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Nn(e) : n === "de" ? Pn(e) : n === "fr" ? Fn(e) : n === "es" ? In(e) : n === "ja" ? Ln(e) : n === "zh" ? Rn(e) : n === "ko" ? zn(e) : n === "it" ? Bn(e) : Vn(e);
}), Hn = () => "Theme: Light", Un = () => "Thema: Hell", Wn = () => "Thème : Clair", Gn = () => "Tema: Claro", Kn = () => "テーマ：ライト", qn = () => "主题：明亮", Jn = () => "테마: 라이트", Yn = () => "Tema: Chiaro", Xn = () => "Tema: Claro", Zn = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? Hn(e) : n === "de" ? Un(e) : n === "fr" ? Wn(e) : n === "es" ? Gn(e) : n === "ja" ? Kn(e) : n === "zh" ? qn(e) : n === "ko" ? Jn(e) : n === "it" ? Yn(e) : Xn(e);
});
//#endregion
//#region src/components/ThemeToggle.tsx
function Qn() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function $n() {
	let [t, r] = n("auto");
	e(() => {
		let e = Qn();
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
	let a = t === "auto" ? tn() : t === "light" ? fn() : Sn();
	return /* @__PURE__ */ c("button", {
		type: "button",
		onClick: i,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t === "auto" ? Mn() : t === "dark" ? Q() : Zn()
	});
}
//#endregion
//#region src/components/LocaleSwitcher.tsx
function er() {
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
	return /* @__PURE__ */ c("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ c("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: u.map((e) => /* @__PURE__ */ c("option", {
				value: e,
				children: n(e)
			}, e))
		})
	});
}
//#endregion
//#region src/hooks/usePerformanceMeasure.ts
function tr(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), t(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
//#endregion
//#region src/components/Header.tsx
function nr() {
	tr("Header");
	let [e, t] = n(!1), i = a({ strict: !1 }).locale ?? "en", s = [
		{
			to: "/$locale/products",
			label: ye()
		},
		{
			to: "/$locale/pricing",
			label: ke()
		},
		{
			to: "/$locale/team",
			label: ze()
		},
		{
			to: "/$locale/blog",
			label: Ye()
		},
		{
			to: "/$locale/careers",
			label: at()
		},
		{
			to: "/$locale/faq",
			label: ht()
		},
		{
			to: "/$locale/contact",
			label: Tt()
		},
		{
			to: "/$locale/settings",
			label: Ft()
		}
	];
	return /* @__PURE__ */ c("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: /* @__PURE__ */ l("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [/* @__PURE__ */ l("div", {
				className: "flex items-center gap-8",
				children: [/* @__PURE__ */ c(r, {
					to: "/$locale",
					params: { locale: i },
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), /* @__PURE__ */ l("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						/* @__PURE__ */ c(r, {
							to: "/$locale",
							params: { locale: i },
							activeOptions: { exact: !0 },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: R()
						}),
						/* @__PURE__ */ c(r, {
							to: "/$locale/about",
							params: { locale: i },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: J()
						}),
						/* @__PURE__ */ l("div", {
							className: "relative",
							children: [/* @__PURE__ */ l("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => t(!0),
								onMouseLeave: () => t(!1),
								onClick: () => t(!e),
								children: [le(), /* @__PURE__ */ c(o, {
									size: 14,
									className: `transition-transform ${e ? "rotate-180" : ""}`
								})]
							}), e && /* @__PURE__ */ c("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => t(!0),
								onMouseLeave: () => t(!1),
								children: /* @__PURE__ */ c("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: s.map((e) => /* @__PURE__ */ c(r, {
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
			}), /* @__PURE__ */ l("div", {
				className: "flex items-center gap-4",
				children: [
					/* @__PURE__ */ l("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [/* @__PURE__ */ c("span", {
							className: "sr-only",
							children: Gt()
						}), /* @__PURE__ */ c("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: /* @__PURE__ */ c("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					/* @__PURE__ */ c(er, {}),
					/* @__PURE__ */ c($n, {})
				]
			})]
		})
	});
}
//#endregion
//#region scripts/Wrapper.tsx
C("en", { reload: !1 });
function rr({ children: e }) {
	return /* @__PURE__ */ c(s, { children: e });
}
//#endregion
//#region src/components/Header.wrapper.tsx
function ir() {
	return /* @__PURE__ */ c(rr, { children: /* @__PURE__ */ c(nr, {}) });
}
//#endregion
export { ir as default };
