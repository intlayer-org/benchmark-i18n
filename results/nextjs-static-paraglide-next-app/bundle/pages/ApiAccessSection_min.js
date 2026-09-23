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
], p = [], m = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	let e = f;
	!m && typeof window < "u" && window.location?.href && (e = I(window.location.href));
	let t = v(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, y(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function v(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = A();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (R(t) && L.has(t)) {
			let e = L.get(t);
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
var ee = (e) => {
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
	!m && typeof window < "u" && window.location?.href && (a = I(window.location.href));
	for (let t of a) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${u}=${e}; path=/; max-age=${d}`;
		document.cookie = t, O();
	} else if (t === "baseLocale") continue;
	else if (R(t) && L.has(t)) {
		let n = L.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!m && n.reload && window.location && e !== r && ee(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, b = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function x(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of l) if (e.toLowerCase() === t) return e;
}
function S(e) {
	let t = x(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${l.join(", ")}`);
}
function C(e) {
	return e;
}
function w(e, t) {
	return e.exec(t.href);
}
var T = u.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), te = RegExp(`(?:^|;\\s*)${T}=([^;]*)`), E = Symbol(), D = E;
function O() {
	D = E;
}
function k() {
	typeof queueMicrotask == "function" ? queueMicrotask(O) : Promise.resolve().then(O);
}
function A() {
	if (typeof document > "u") return;
	if (D !== E) return D;
	let e = document.cookie.match(te)?.[1];
	return D = x(e), k(), D;
}
function j(e) {
	return M(e);
}
function M(e) {
	let t = C(typeof e == "string" ? new URL(e, b()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && x(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), C(t);
}
var N, P;
function F(e) {
	if (p.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (N === t) return P;
	let n = C(new URL(t, "http://example.com")), r = j(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of p) if (w(new c(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return N = t, P = a, a;
}
function I(e) {
	let t = F(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : f;
}
var L = /* @__PURE__ */ new Map();
function R(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var z = () => "API Access", B = () => "Accès API", V = () => "Acceso API", H = () => "API-Zugriff", U = () => "Accesso API", W = () => "Acesso à API", G = () => "API 访问", K = () => "APIアクセス", q = () => "API 액세스", J = () => "Доступ к API", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? B(e) : n === "es" ? V(e) : n === "de" ? H(e) : n === "it" ? U(e) : n === "pt" ? W(e) : n === "zh" ? G(e) : n === "ja" ? K(e) : n === "ko" ? q(e) : n === "ru" ? J(e) : z(e);
}), X = () => "API Key", Z = () => "Clé API", Q = () => "Llave API", ne = () => "API-Schlüssel", re = () => "Chiave API", ie = () => "Chave da API", ae = () => "API 密钥", oe = () => "APIキー", se = () => "API 키", ce = () => "Ключ API", le = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Z(e) : n === "es" ? Q(e) : n === "de" ? ne(e) : n === "it" ? re(e) : n === "pt" ? ie(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : n === "ru" ? ce(e) : X(e);
}), ue = () => "Copier", de = () => "Copiar", fe = () => "Kopieren", pe = () => "Copia", me = () => "Copiar", he = () => "复制", ge = () => "コピー", _e = () => "복사", ve = () => "Копировать", ye = () => "api-access-section.copy", be = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? ue(e) : n === "es" ? de(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : n === "ru" ? ve(e) : ye(e);
}), xe = () => "Use this key to access the benchmarking API programmatically.", Se = () => "Utilisez cette clé pour accéder à l'API de benchmarking par programmation.", Ce = () => "Usa esta llave para acceder a la API de benchmarking de forma programática.", we = () => "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.", Te = () => "Usa questa chiave per accedere programmaticamente alle API di benchmarking.", Ee = () => "Utilize esta chave para acessar a API de benchmarking de forma programática.", De = () => "使用此密钥从程序访问基准测试 API。", $ = () => "このキーを使用して、プログラムからベンチマークAPIにアクセスします。", Oe = () => "이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오.", ke = () => "Используйте этот ключ для программного доступа к API бенчмаркинга.", Ae = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "fr" ? Se(e) : n === "es" ? Ce(e) : n === "de" ? we(e) : n === "it" ? Te(e) : n === "pt" ? Ee(e) : n === "zh" ? De(e) : n === "ja" ? $(e) : n === "ko" ? Oe(e) : n === "ru" ? ke(e) : xe(e);
});
function je() {
	let e = t();
	return o("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [a("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: Y()
		}), o("div", { children: [
			a("label", {
				htmlFor: e,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: le()
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
					children: be()
				})]
			}),
			a("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: Ae()
			})
		] })]
	});
}
function Me() {
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
function Ne(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Pe({ children: t }) {
	let o = s().locale ?? "en", [c] = r(() => typeof performance < "u" ? performance.now() : 0);
	return n(() => {
		Ne("AppRoot", c);
	}, [c]), e(() => {
		y(o, { reload: !1 }), document.documentElement.lang = o;
	}, [o]), e(() => {
		Me();
	}, []), a(i, { children: t });
}
function Fe({ children: e }) {
	return a(Pe, { children: e });
}
function Ie() {
	return a(Fe, { children: a(je, {}) });
}
export { Ie as default };
