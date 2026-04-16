import { Profiler as e, useEffect as t } from "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { useParams as i } from "next/navigation";
var a = {}, o = [
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
], s = "PARAGLIDE_LOCALE", ee = 3456e4, c = [
	"cookie",
	"globalVariable",
	"baseLocale"
], l = [], u, d;
function te(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (u === t) return d;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of l) if (new a(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return u = t, d = r, r;
}
function f(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var p = void 0, m = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	if (p) {
		let e = p?.getStore()?.locale;
		if (e) return e;
	}
	let e = c;
	!m && typeof window < "u" && window.location?.href && (e = f(window.location.href));
	let t = v(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, b(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function v(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = C();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (T(t) && w.has(t)) {
			let e = w.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return S(t);
			}
		}
		let e = x(n);
		if (e) return e;
	}
}
var y = (e) => {
	e ? window.location.href = e : window.location.reload();
}, b = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = _();
	} catch {}
	let i = [], a = c;
	!m && typeof window < "u" && window.location?.href && (a = f(window.location.href));
	for (let t of a) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${s}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (T(t) && w.has(t)) {
		let n = w.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!m && n.reload && window.location && e !== r && y(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function x(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of o) if (e.toLowerCase() === t) return e;
}
function S(e) {
	let t = x(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function C() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${s}=([^;]+)`))?.[2];
	return x(e);
}
var w = /* @__PURE__ */ new Map();
function T(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var E = () => "Work from anywhere in the world", D = () => "Travaillez de n'importe où dans le monde", O = () => "Trabaja desde cualquier lugar del mundo", k = () => "Arbeiten Sie von überall auf der Welt", A = () => "Lavora da qualsiasi parte del mondo", j = () => "Trabalhe de qualquer lugar do mundo", M = () => "在全球任何地方工作", N = () => "世界中のどこからでも働けます", P = () => "전 세계 어디서나 근무 가능", F = () => "Работайте из любой точки мира", I = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? E(e) : n === "fr" ? D(e) : n === "es" ? O(e) : n === "de" ? k(e) : n === "it" ? A(e) : n === "pt" ? j(e) : n === "zh" ? M(e) : n === "ja" ? N(e) : n === "ko" ? P(e) : F(e);
}), L = () => "Competitive pay", R = () => "Rémunération compétitive", z = () => "Salario competitivo", B = () => "Wettbewerbsfähige Bezahlung", V = () => "Retribuzione competitiva", H = () => "Remuneração competitiva", U = () => "具有竞争力的薪酬", W = () => "競争力のある給与", G = () => "경쟁력 있는 급여", K = () => "Конкурентоспособная оплата", q = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? L(e) : n === "fr" ? R(e) : n === "es" ? z(e) : n === "de" ? B(e) : n === "it" ? V(e) : n === "pt" ? H(e) : n === "zh" ? U(e) : n === "ja" ? W(e) : n === "ko" ? G(e) : K(e);
}), J = () => "Top-of-market compensation", Y = () => "Rémunération au-dessus du marché", X = () => "Compensación superior a la del mercado", Z = () => "Überdurchschnittliche Vergütung", Q = () => "Compensazione ai vertici del mercato", ne = () => "Remuneração acima da média do mercado", re = () => "市场顶尖的薪资待遇", ie = () => "市場最高水準の報酬", ae = () => "업계 최고 수준의 보상", oe = () => "Компенсация выше рыночной", se = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? J(e) : n === "fr" ? Y(e) : n === "es" ? X(e) : n === "de" ? Z(e) : n === "it" ? Q(e) : n === "pt" ? ne(e) : n === "zh" ? re(e) : n === "ja" ? ie(e) : n === "ko" ? ae(e) : oe(e);
}), ce = () => "Open source time", le = () => "Temps dédié à l'open source", ue = () => "Tiempo dedicado al código abierto", de = () => "Zeit für Open Source", fe = () => "Tempo dedicato all'open source", pe = () => "Tempo dedicado ao código aberto", me = () => "开源贡献时间", he = () => "オープンソースへの貢献時間", ge = () => "오픈 소스 기여 시간", _e = () => "Время на open source", ve = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ce(e) : n === "fr" ? le(e) : n === "es" ? ue(e) : n === "de" ? de(e) : n === "it" ? fe(e) : n === "pt" ? pe(e) : n === "zh" ? me(e) : n === "ja" ? he(e) : n === "ko" ? ge(e) : _e(e);
}), ye = () => "Remote", be = () => "À distance", xe = () => "Remoto", Se = () => "Remote", Ce = () => "Remoto", we = () => "Remoto", Te = () => "远程", Ee = () => "リモート", De = () => "원격", $ = () => "Удаленно", Oe = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ye(e) : n === "fr" ? be(e) : n === "es" ? xe(e) : n === "de" ? Se(e) : n === "it" ? Ce(e) : n === "pt" ? we(e) : n === "zh" ? Te(e) : n === "ja" ? Ee(e) : n === "ko" ? De(e) : $(e);
});
function ke() {
	return n("div", {
		className: "mb-12 grid gap-4 md:grid-cols-3",
		children: [
			{
				label: Oe(),
				value: I()
			},
			{
				label: q(),
				value: se()
			},
			{
				label: ve(),
				value: "20% time for OSS contributions"
			}
		].map((e) => r("div", {
			className: "rounded-lg border border-border bg-card p-4 text-center",
			children: [n("p", {
				className: "text-sm font-semibold text-foreground",
				children: e.label
			}), n("p", {
				className: "text-xs text-muted-foreground",
				children: e.value
			})]
		}, e.label))
	});
}
function Ae() {
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
function je(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
function Me({ children: r }) {
	let a = i().locale ?? "en";
	return t(() => {
		b(a), document.documentElement.lang = a;
	}, [a]), t(() => {
		Ae();
	}, []), n(e, {
		id: "AppRoot",
		onRender: je,
		children: r
	});
}
function Ne({ children: e }) {
	return n(Me, { children: e });
}
function Pe() {
	return n(Ne, { children: n(ke, {}) });
}
export { Pe as default };
