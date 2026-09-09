import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import r from "next/link";
import { useParams as i, usePathname as a, useRouter as o } from "next/navigation";
import { Fragment as s, jsxDEV as c } from "react/jsx-dev-runtime";
import { ChevronDown as ee } from "lucide-react";
var l = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/Link.tsx", u = (e) => /^https?:\/\//.test(e ?? "");
function d(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var f = ({ href: e, children: t, ...n }) => {
	let a = i().locale ?? "en";
	return e == null || typeof e != "string" ? c(r, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: l,
		lineNumber: 23,
		columnNumber: 7
	}, void 0) : u(e) ? c(r, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: l,
		lineNumber: 30,
		columnNumber: 7
	}, void 0) : c(r, {
		href: d(e, a),
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: l,
		lineNumber: 36,
		columnNumber: 5
	}, void 0);
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
], v = [], y = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var b, x = !1, S = () => {
	let e = _;
	!y && typeof window < "u" && window.location?.href && (e = R(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return x || (b = t, x = !0, C(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = M();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && b !== void 0) n = b;
		else if (B(t) && z.has(t)) {
			let e = z.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return E(t);
			}
		}
		let e = T(n);
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
		r = S();
	} catch {}
	let i = [], a = _;
	!y && typeof window < "u" && window.location?.href && (a = R(window.location.href));
	for (let t of a) if (t === "globalVariable") b = e;
	else if (t === "cookie") {
		if (y || typeof document > "u" || typeof window > "u") continue;
		let t = `${h}=${e}; path=/; max-age=${g}`;
		document.cookie = t, A();
	} else if (t === "baseLocale") continue;
	else if (B(t) && z.has(t)) {
		let n = z.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!y && n.reload && window.location && e !== r && ne(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, w = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function T(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of m) if (e.toLowerCase() === t) return e;
}
function E(e) {
	let t = T(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${m.join(", ")}`);
}
function D(e) {
	return e;
}
function re(e, t) {
	return e.exec(t.href);
}
var ie = h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), ae = RegExp(`(?:^|;\\s*)${ie}=([^;]*)`), O = Symbol(), k = O;
function A() {
	k = O;
}
function j() {
	typeof queueMicrotask == "function" ? queueMicrotask(A) : Promise.resolve().then(A);
}
function M() {
	if (typeof document > "u") return;
	if (k !== O) return k;
	let e = document.cookie.match(ae)?.[1];
	return k = T(e), j(), k;
}
function N(e) {
	return P(e);
}
function P(e) {
	let t = D(typeof e == "string" ? new URL(e, w()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && T(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), D(t);
}
var F, I;
function L(e) {
	if (v.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (F === t) return I;
	let n = D(new URL(t, "http://example.com")), r = N(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of v) if (re(new p(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return F = t, I = a, a;
}
function R(e) {
	let t = L(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : _;
}
var z = /* @__PURE__ */ new Map();
function B(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var V = () => "Blog", H = () => "Blog", U = () => "Blog", W = () => "Blog", G = () => "Blog", K = () => "Blog", q = () => "博客", J = () => "ブログ", oe = () => "블로그", se = () => "Блог", ce = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "fr" ? H(e) : n === "es" ? U(e) : n === "de" ? W(e) : n === "it" ? G(e) : n === "pt" ? K(e) : n === "zh" ? q(e) : n === "ja" ? J(e) : n === "ko" ? oe(e) : n === "ru" ? se(e) : V(e);
}), le = () => "Careers", ue = () => "Carrières", de = () => "Carreras", fe = () => "Karriere", pe = () => "Carriere", me = () => "Carreiras", he = () => "职业生涯", ge = () => "採用情報", _e = () => "채용", ve = () => "Карьера", ye = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "fr" ? ue(e) : n === "es" ? de(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : n === "ru" ? ve(e) : le(e);
}), be = () => "Contact", xe = () => "Contact", Se = () => "Contacto", Ce = () => "Kontakt", we = () => "Contatti", Te = () => "Contato", Ee = () => "联系我们", De = () => "お問い合わせ", Oe = () => "문의하기", ke = () => "Контакт", Ae = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "fr" ? xe(e) : n === "es" ? Se(e) : n === "de" ? Ce(e) : n === "it" ? we(e) : n === "pt" ? Te(e) : n === "zh" ? Ee(e) : n === "ja" ? De(e) : n === "ko" ? Oe(e) : n === "ru" ? ke(e) : be(e);
}), je = () => "FAQ", Me = () => "FAQ", Ne = () => "FAQ", Pe = () => "FAQ", Fe = () => "FAQ", Ie = () => "FAQ", Le = () => "常见问题", Re = () => "FAQ", ze = () => "FAQ", Be = () => "FAQ", Ve = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "fr" ? Me(e) : n === "es" ? Ne(e) : n === "de" ? Pe(e) : n === "it" ? Fe(e) : n === "pt" ? Ie(e) : n === "zh" ? Le(e) : n === "ja" ? Re(e) : n === "ko" ? ze(e) : n === "ru" ? Be(e) : je(e);
}), He = () => "Go to GitHub", Ue = () => "Aller sur GitHub", We = () => "Ir a GitHub", Ge = () => "Zu GitHub", Ke = () => "Vai su GitHub", qe = () => "Ir para GitHub", Je = () => "访问 GitHub", Ye = () => "GitHubへ", Xe = () => "GitHub으로 이동", Ze = () => "Перейти на GitHub", Qe = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "fr" ? Ue(e) : n === "es" ? We(e) : n === "de" ? Ge(e) : n === "it" ? Ke(e) : n === "pt" ? qe(e) : n === "zh" ? Je(e) : n === "ja" ? Ye(e) : n === "ko" ? Xe(e) : n === "ru" ? Ze(e) : He(e);
}), $e = () => "Home", et = () => "Accueil", tt = () => "Inicio", nt = () => "Startseite", rt = () => "Home", it = () => "Início", at = () => "首页", ot = () => "ホーム", st = () => "홈", ct = () => "Главная", lt = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "fr" ? et(e) : n === "es" ? tt(e) : n === "de" ? nt(e) : n === "it" ? rt(e) : n === "pt" ? it(e) : n === "zh" ? at(e) : n === "ja" ? ot(e) : n === "ko" ? st(e) : n === "ru" ? ct(e) : $e(e);
}), ut = () => "Methodology", dt = () => "Méthodologie", ft = () => "Metodología", pt = () => "Methodik", mt = () => "Metodologia", ht = () => "Metodologia", gt = () => "方法论", _t = () => "方法論", vt = () => "방법론", yt = () => "Методология", bt = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "fr" ? dt(e) : n === "es" ? ft(e) : n === "de" ? pt(e) : n === "it" ? mt(e) : n === "pt" ? ht(e) : n === "zh" ? gt(e) : n === "ja" ? _t(e) : n === "ko" ? vt(e) : n === "ru" ? yt(e) : ut(e);
}), xt = () => "Mock Pages", St = () => "Pages de test", Ct = () => "Páginas de prueba", wt = () => "Testseiten", Tt = () => "Pagine di test", Et = () => "Páginas de teste", Dt = () => "模拟页面", Ot = () => "モックページ", kt = () => "모의 페이지", At = () => "Тестовые страницы", jt = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "fr" ? St(e) : n === "es" ? Ct(e) : n === "de" ? wt(e) : n === "it" ? Tt(e) : n === "pt" ? Et(e) : n === "zh" ? Dt(e) : n === "ja" ? Ot(e) : n === "ko" ? kt(e) : n === "ru" ? At(e) : xt(e);
}), Mt = () => "Pricing", Nt = () => "Tarifs", Pt = () => "Precios", Ft = () => "Preise", It = () => "Prezzi", Lt = () => "Preços", Rt = () => "价格", zt = () => "料金", Bt = () => "요금", Vt = () => "Цены", Ht = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "fr" ? Nt(e) : n === "es" ? Pt(e) : n === "de" ? Ft(e) : n === "it" ? It(e) : n === "pt" ? Lt(e) : n === "zh" ? Rt(e) : n === "ja" ? zt(e) : n === "ko" ? Bt(e) : n === "ru" ? Vt(e) : Mt(e);
}), Ut = () => "Products", Wt = () => "Produits", Gt = () => "Productos", Kt = () => "Produkte", qt = () => "Prodotti", Jt = () => "Produtos", Yt = () => "产品", Xt = () => "製品", Zt = () => "제품", Qt = () => "Продукты", $t = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "fr" ? Wt(e) : n === "es" ? Gt(e) : n === "de" ? Kt(e) : n === "it" ? qt(e) : n === "pt" ? Jt(e) : n === "zh" ? Yt(e) : n === "ja" ? Xt(e) : n === "ko" ? Zt(e) : n === "ru" ? Qt(e) : Ut(e);
}), en = () => "Settings", tn = () => "Paramètres", nn = () => "Ajustes", rn = () => "Einstellungen", an = () => "Impostazioni", on = () => "Configurações", sn = () => "设置", cn = () => "設定", ln = () => "설정", un = () => "Настройки", dn = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "fr" ? tn(e) : n === "es" ? nn(e) : n === "de" ? rn(e) : n === "it" ? an(e) : n === "pt" ? on(e) : n === "zh" ? sn(e) : n === "ja" ? cn(e) : n === "ko" ? ln(e) : n === "ru" ? un(e) : en(e);
}), fn = () => "Team", pn = () => "Équipe", mn = () => "Equipo", hn = () => "Team", gn = () => "Team", _n = () => "Equipe", vn = () => "团队", yn = () => "チーム", bn = () => "팀", xn = () => "Команда", Sn = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "fr" ? pn(e) : n === "es" ? mn(e) : n === "de" ? hn(e) : n === "it" ? gn(e) : n === "pt" ? _n(e) : n === "zh" ? vn(e) : n === "ja" ? yn(e) : n === "ko" ? bn(e) : n === "ru" ? xn(e) : fn(e);
}), Cn = () => "Theme: Auto", wn = () => "Thème : Auto", Tn = () => "Tema: Auto", En = () => "Thema: Auto", Dn = () => "Tema: Auto", On = () => "Tema: Auto", kn = () => "主题：自动", An = () => "テーマ：自動", jn = () => "테마: 자동", Mn = () => "Тема: Авто", Nn = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "fr" ? wn(e) : n === "es" ? Tn(e) : n === "de" ? En(e) : n === "it" ? Dn(e) : n === "pt" ? On(e) : n === "zh" ? kn(e) : n === "ja" ? An(e) : n === "ko" ? jn(e) : n === "ru" ? Mn(e) : Cn(e);
}), Pn = () => "Theme: Dark", Fn = () => "Thème : Sombre", In = () => "Tema: Oscuro", Ln = () => "Thema: Dunkel", Rn = () => "Tema: Scuro", zn = () => "Tema: Escuro", Bn = () => "主题：暗黑", Vn = () => "テーマ：ダーク", Hn = () => "테마: 다크", Un = () => "Тема: Темная", Wn = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "fr" ? Fn(e) : n === "es" ? In(e) : n === "de" ? Ln(e) : n === "it" ? Rn(e) : n === "pt" ? zn(e) : n === "zh" ? Bn(e) : n === "ja" ? Vn(e) : n === "ko" ? Hn(e) : n === "ru" ? Un(e) : Pn(e);
}), Gn = () => "Theme: Light", Kn = () => "Thème : Clair", qn = () => "Tema: Claro", Jn = () => "Thema: Hell", Yn = () => "Tema: Chiaro", Xn = () => "Tema: Claro", Zn = () => "主题：明亮", Qn = () => "テーマ：ライト", $n = () => "테마: 라이트", er = () => "Тема: Светлая", tr = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "fr" ? Kn(e) : n === "es" ? qn(e) : n === "de" ? Jn(e) : n === "it" ? Yn(e) : n === "pt" ? Xn(e) : n === "zh" ? Zn(e) : n === "ja" ? Qn(e) : n === "ko" ? $n(e) : n === "ru" ? er(e) : Gn(e);
}), nr = () => "Theme mode: auto (system). Click to switch to light mode.", rr = () => "Mode thématique : auto (système). Cliquez pour passer en mode clair.", ir = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", ar = () => "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.", or = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", sr = () => "Modo de tema: automático (sistema). Clique para mudar para o modo claro.", cr = () => "主题模式：自动（系统）。点击切换到明亮模式。", lr = () => "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。", ur = () => "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.", dr = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", fr = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "fr" ? rr(e) : n === "es" ? ir(e) : n === "de" ? ar(e) : n === "it" ? or(e) : n === "pt" ? sr(e) : n === "zh" ? cr(e) : n === "ja" ? lr(e) : n === "ko" ? ur(e) : n === "ru" ? dr(e) : nr(e);
}), pr = () => "Theme mode: dark. Click to switch to auto (system) mode.", mr = () => "Mode thématique : sombre. Cliquez pour passer en mode auto (système).", hr = () => "Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).", gr = () => "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.", _r = () => "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).", vr = () => "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).", yr = () => "主题模式：暗黑。点击切换到自动（系统）模式。", br = () => "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。", xr = () => "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.", Sr = () => "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.", Cr = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "fr" ? mr(e) : n === "es" ? hr(e) : n === "de" ? gr(e) : n === "it" ? _r(e) : n === "pt" ? vr(e) : n === "zh" ? yr(e) : n === "ja" ? br(e) : n === "ko" ? xr(e) : n === "ru" ? Sr(e) : pr(e);
}), wr = () => "Theme mode: light. Click to switch to dark mode.", Tr = () => "Mode thématique : clair. Cliquez pour passer en mode sombre.", Er = () => "Modo de tema: claro. Haz clic para cambiar al modo oscuro.", Dr = () => "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.", Or = () => "Modalità tema: chiara. Clicca per passare alla modalità scura.", kr = () => "Modo de tema: claro. Clique para mudar para o modo escuro.", Y = () => "主题模式：明亮。点击切换到暗黑模式。", Ar = () => "テーマモード：ライト。クリックしてダークモードに切り替えます。", jr = () => "테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.", Mr = () => "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.", Nr = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "fr" ? Tr(e) : n === "es" ? Er(e) : n === "de" ? Dr(e) : n === "it" ? Or(e) : n === "pt" ? kr(e) : n === "zh" ? Y(e) : n === "ja" ? Ar(e) : n === "ko" ? jr(e) : n === "ru" ? Mr(e) : wr(e);
}), Pr = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/ThemeToggle.tsx";
function Fr() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function X(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Ir() {
	let [t, r] = n("auto");
	e(() => {
		let e = Fr();
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
	let a = t === "auto" ? fr() : t === "light" ? Nr() : Cr();
	return c("button", {
		type: "button",
		onClick: i,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t === "auto" ? Nn() : t === "dark" ? Wn() : tr()
	}, void 0, !1, {
		fileName: Pr,
		lineNumber: 76,
		columnNumber: 5
	}, this);
}
var Z = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/LocaleSwitcher.tsx";
function Lr() {
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
			}, e, !1, {
				fileName: Z,
				lineNumber: 35,
				columnNumber: 11
			}, this))
		}, void 0, !1, {
			fileName: Z,
			lineNumber: 29,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Z,
		lineNumber: 28,
		columnNumber: 5
	}, this);
}
function Rr(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), t(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
var Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/Header.tsx";
function zr() {
	Rr("Header");
	let [e, t] = n(!1), r = i(), o = a(), s = r.locale ?? "en", l = [
		{
			href: "/products",
			label: $t()
		},
		{
			href: "/pricing",
			label: Ht()
		},
		{
			href: "/team",
			label: Sn()
		},
		{
			href: "/blog",
			label: ce()
		},
		{
			href: "/careers",
			label: ye()
		},
		{
			href: "/faq",
			label: Ve()
		},
		{
			href: "/contact",
			label: Ae()
		},
		{
			href: "/settings",
			label: dn()
		}
	];
	return c("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: c("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [c("div", {
				className: "flex items-center gap-8",
				children: [c(f, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 44,
					columnNumber: 11
				}, this), c("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						c(f, {
							href: "/",
							className: `nav-link${((e) => o === d(e, s))("/") ? " is-active" : ""}`,
							children: lt()
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 52,
							columnNumber: 13
						}, this),
						c(f, {
							href: "/about",
							className: `nav-link${((e) => {
								let t = d(e, s);
								return o.startsWith(t) && (e !== "/" || o === t);
							})("/about") ? " is-active" : ""}`,
							children: bt()
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 58,
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
								children: [jt(), c(ee, {
									size: 14,
									className: `transition-transform ${e ? "rotate-180" : ""}`
								}, void 0, !1, {
									fileName: Q,
									lineNumber: 75,
									columnNumber: 17
								}, this)]
							}, void 0, !0, {
								fileName: Q,
								lineNumber: 67,
								columnNumber: 15
							}, this), e && c("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => t(!0),
								onMouseLeave: () => t(!1),
								children: c("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: l.map((e) => c(f, {
										href: e.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => t(!1),
										children: e.label
									}, e.href, !1, {
										fileName: Q,
										lineNumber: 89,
										columnNumber: 23
									}, this))
								}, void 0, !1, {
									fileName: Q,
									lineNumber: 87,
									columnNumber: 19
								}, this)
							}, void 0, !1, {
								fileName: Q,
								lineNumber: 82,
								columnNumber: 17
							}, this)]
						}, void 0, !0, {
							fileName: Q,
							lineNumber: 66,
							columnNumber: 13
						}, this)
					]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 51,
					columnNumber: 11
				}, this)]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 43,
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
							children: Qe()
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 112,
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
								lineNumber: 114,
								columnNumber: 15
							}, this)
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 113,
							columnNumber: 13
						}, this)]
					}, void 0, !0, {
						fileName: Q,
						lineNumber: 106,
						columnNumber: 11
					}, this),
					c(Lr, {}, void 0, !1, {
						fileName: Q,
						lineNumber: 120,
						columnNumber: 11
					}, this),
					c(Ir, {}, void 0, !1, {
						fileName: Q,
						lineNumber: 121,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 105,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: Q,
			lineNumber: 42,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 41,
		columnNumber: 5
	}, this);
}
function Br() {
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
function Vr(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var Hr = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/AppProviders.tsx";
function Ur({ children: r }) {
	let a = i().locale ?? "en", [o] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		Vr("AppRoot", o);
	}, [o]), e(() => {
		C(a, { reload: !1 }), document.documentElement.lang = a;
	}, [a]), e(() => {
		Br();
	}, []), c(s, { children: r }, void 0, !1, {
		fileName: Hr,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var Wr = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/scripts/Wrapper.tsx";
function Gr({ children: e }) {
	return c(Ur, { children: e }, void 0, !1, {
		fileName: Wr,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/Header.wrapper.tsx";
function Kr() {
	return c(Gr, { children: c(zr, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Kr as default };
