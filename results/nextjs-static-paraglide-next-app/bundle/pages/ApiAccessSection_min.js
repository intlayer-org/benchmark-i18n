import { useEffect as e, useId as t, useLayoutEffect as n, useState as r } from "react";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
import { useParams as s } from "next/navigation";
var c = {}, l = [
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
], p = [], m, h;
function g(e) {
	if (p.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (m === t) return h;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of p) if (new c(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return m = t, h = r, r;
}
function _(e) {
	let t = g(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : f;
}
var v = void 0, y = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var b, x = !1, S = () => {
	if (v) {
		let e = v?.getStore()?.locale;
		if (e) return e;
	}
	let e = f;
	!y && typeof window < "u" && window.location?.href && (e = _(window.location.href));
	let t = C(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return x || (b = t, x = !0, w(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function C(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = D();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && b !== void 0) n = b;
		else if (k(t) && O.has(t)) {
			let e = O.get(t);
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
var ee = (e) => {
	e ? window.location.href = e : window.location.reload();
}, w = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = S();
	} catch {}
	let i = [], a = f;
	!y && typeof window < "u" && window.location?.href && (a = _(window.location.href));
	for (let t of a) if (t === "globalVariable") b = e;
	else if (t === "cookie") {
		if (y || typeof document > "u" || typeof window > "u") continue;
		let t = `${u}=${e}; path=/; max-age=${d}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (k(t) && O.has(t)) {
		let n = O.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!y && n.reload && window.location && e !== r && ee(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function T(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of l) if (e.toLowerCase() === t) return e;
}
function E(e) {
	let t = T(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${l.join(", ")}`);
}
function D() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${u}=([^;]+)`))?.[2];
	return T(e);
}
var O = /* @__PURE__ */ new Map();
function k(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var A = () => "API Access", j = () => "Accès API", M = () => "Acceso API", N = () => "API-Zugriff", P = () => "Accesso API", F = () => "Acesso à API", I = () => "API 访问", L = () => "APIアクセス", R = () => "API 액세스", z = () => "Доступ к API", B = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? A(e) : n === "fr" ? j(e) : n === "es" ? M(e) : n === "de" ? N(e) : n === "it" ? P(e) : n === "pt" ? F(e) : n === "zh" ? I(e) : n === "ja" ? L(e) : n === "ko" ? R(e) : z(e);
}), V = () => "API Key", H = () => "Clé API", U = () => "Llave API", W = () => "API-Schlüssel", G = () => "Chiave API", K = () => "Chave da API", q = () => "API 密钥", J = () => "APIキー", Y = () => "API 키", X = () => "Ключ API", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? V(e) : n === "fr" ? H(e) : n === "es" ? U(e) : n === "de" ? W(e) : n === "it" ? G(e) : n === "pt" ? K(e) : n === "zh" ? q(e) : n === "ja" ? J(e) : n === "ko" ? Y(e) : X(e);
}), te = () => "Use this key to access the benchmarking API programmatically.", Q = () => "Utilisez cette clé pour accéder à l'API de benchmarking par programmation.", ne = () => "Usa esta llave para acceder a la API de benchmarking de forma programática.", re = () => "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.", ie = () => "Usa questa chiave per accedere programmaticamente alle API di benchmarking.", ae = () => "Utilize esta chave para acessar a API de benchmarking de forma programática.", oe = () => "使用此密钥从程序访问基准测试 API。", se = () => "このキーを使用して、プログラムからベンチマークAPIにアクセスします。", ce = () => "이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오.", le = () => "Используйте этот ключ для программного доступа к API бенчмаркинга.", ue = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? te(e) : n === "fr" ? Q(e) : n === "es" ? ne(e) : n === "de" ? re(e) : n === "it" ? ie(e) : n === "pt" ? ae(e) : n === "zh" ? oe(e) : n === "ja" ? se(e) : n === "ko" ? ce(e) : le(e);
}), de = () => "Copier", fe = () => "Copiar", pe = () => "Kopieren", me = () => "Copia", he = () => "Copiar", ge = () => "复制", _e = () => "コピー", ve = () => "복사", ye = () => "Копировать", be = () => "api-access-section.copy", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? S();
	return n === "en" ? be(e) : n === "fr" ? de(e) : n === "es" ? fe(e) : n === "de" ? pe(e) : n === "it" ? me(e) : n === "pt" ? he(e) : n === "zh" ? ge(e) : n === "ja" ? _e(e) : n === "ko" ? ve(e) : ye(e);
});
function xe() {
	let e = t();
	return o("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [a("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: B()
		}), o("div", { children: [
			a("label", {
				htmlFor: e,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: Z()
			}),
			o("div", {
				className: "flex gap-2",
				children: [a("input", {
					id: e,
					readOnly: !0,
					defaultValue: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
					className: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
				}), a("button", {
					type: "button",
					className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: $()
				})]
			}),
			a("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: ue()
			})
		] })]
	});
}
function Se() {
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
function Ce(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function we({ children: t }) {
	let o = s().locale ?? "en", [c] = r(() => typeof performance < "u" ? performance.now() : 0);
	return n(() => {
		Ce("AppRoot", c);
	}, [c]), e(() => {
		w(o, { reload: !1 }), document.documentElement.lang = o;
	}, [o]), e(() => {
		Se();
	}, []), a(i, { children: t });
}
function Te({ children: e }) {
	return a(we, { children: e });
}
function Ee() {
	return a(Te, { children: a(xe, {}) });
}
export { Ee as default };
