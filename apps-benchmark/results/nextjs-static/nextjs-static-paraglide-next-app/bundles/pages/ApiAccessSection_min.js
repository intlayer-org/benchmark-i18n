import { Profiler as e, useEffect as t, useId as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { useParams as a } from "next/navigation";
var o = {}, s = [
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
], c = "PARAGLIDE_LOCALE", ee = 3456e4, l = [
	"cookie",
	"globalVariable",
	"baseLocale"
], u = [], d, f;
function p(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (d === t) return f;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of u) if (new o(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return d = t, f = r, r;
}
function m(e) {
	let t = p(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var h = void 0, g = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var _, v = !1, y = () => {
	if (h) {
		let e = h?.getStore()?.locale;
		if (e) return e;
	}
	let e = l;
	!g && typeof window < "u" && window.location?.href && (e = m(window.location.href));
	let t = b(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return v || (_ = t, v = !0, S(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function b(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = T();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && _ !== void 0) n = _;
		else if (D(t) && E.has(t)) {
			let e = E.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return w(t);
			}
		}
		let e = C(n);
		if (e) return e;
	}
}
var x = (e) => {
	e ? window.location.href = e : window.location.reload();
}, S = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = y();
	} catch {}
	let i = [], a = l;
	!g && typeof window < "u" && window.location?.href && (a = m(window.location.href));
	for (let t of a) if (t === "globalVariable") _ = e;
	else if (t === "cookie") {
		if (g || typeof document > "u" || typeof window > "u") continue;
		let t = `${c}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (D(t) && E.has(t)) {
		let n = E.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!g && n.reload && window.location && e !== r && x(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function C(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of s) if (e.toLowerCase() === t) return e;
}
function w(e) {
	let t = C(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${s.join(", ")}`);
}
function T() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${c}=([^;]+)`))?.[2];
	return C(e);
}
var E = /* @__PURE__ */ new Map();
function D(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var O = () => "API Access", k = () => "Accès API", A = () => "Acceso API", j = () => "API-Zugriff", M = () => "Accesso API", N = () => "Acesso à API", P = () => "API 访问", F = () => "APIアクセス", I = () => "API 액세스", L = () => "Доступ к API", R = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? O(e) : n === "fr" ? k(e) : n === "es" ? A(e) : n === "de" ? j(e) : n === "it" ? M(e) : n === "pt" ? N(e) : n === "zh" ? P(e) : n === "ja" ? F(e) : n === "ko" ? I(e) : L(e);
}), z = () => "API Key", B = () => "Clé API", V = () => "Llave API", H = () => "API-Schlüssel", U = () => "Chiave API", W = () => "Chave da API", G = () => "API 密钥", K = () => "APIキー", te = () => "API 키", q = () => "Ключ API", J = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? z(e) : n === "fr" ? B(e) : n === "es" ? V(e) : n === "de" ? H(e) : n === "it" ? U(e) : n === "pt" ? W(e) : n === "zh" ? G(e) : n === "ja" ? K(e) : n === "ko" ? te(e) : q(e);
}), Y = () => "Use this key to access the benchmarking API programmatically.", X = () => "Utilisez cette clé pour accéder à l'API de benchmarking par programmation.", Z = () => "Usa esta llave para acceder a la API de benchmarking de forma programática.", Q = () => "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.", ne = () => "Usa questa chiave per accedere programmaticamente alle API di benchmarking.", re = () => "Utilize esta chave para acessar a API de benchmarking de forma programática.", ie = () => "使用此密钥从程序访问基准测试 API。", ae = () => "このキーを使用して、プログラムからベンチマークAPIにアクセスします。", oe = () => "이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오.", se = () => "Используйте этот ключ для программного доступа к API бенчмаркинга.", ce = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Y(e) : n === "fr" ? X(e) : n === "es" ? Z(e) : n === "de" ? Q(e) : n === "it" ? ne(e) : n === "pt" ? re(e) : n === "zh" ? ie(e) : n === "ja" ? ae(e) : n === "ko" ? oe(e) : se(e);
}), le = () => "Copier", ue = () => "Copiar", de = () => "Kopieren", fe = () => "Copia", pe = () => "Copiar", $ = () => "复制", me = () => "コピー", he = () => "복사", ge = () => "Копировать", _e = () => "api-access-section.copy", ve = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? _e(e) : n === "fr" ? le(e) : n === "es" ? ue(e) : n === "de" ? de(e) : n === "it" ? fe(e) : n === "pt" ? pe(e) : n === "zh" ? $(e) : n === "ja" ? me(e) : n === "ko" ? he(e) : ge(e);
});
function ye() {
	let e = n();
	return i("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [r("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: R()
		}), i("div", { children: [
			r("label", {
				htmlFor: e,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: J()
			}),
			i("div", {
				className: "flex gap-2",
				children: [r("input", {
					id: e,
					readOnly: !0,
					defaultValue: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
					className: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
				}), r("button", {
					type: "button",
					className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: ve()
				})]
			}),
			r("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: ce()
			})
		] })]
	});
}
function be() {
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
function xe(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
function Se({ children: n }) {
	let i = a().locale ?? "en";
	return t(() => {
		S(i), document.documentElement.lang = i;
	}, [i]), t(() => {
		be();
	}, []), r(e, {
		id: "AppRoot",
		onRender: xe,
		children: n
	});
}
function Ce({ children: e }) {
	return r(Se, { children: e });
}
function we() {
	return r(Ce, { children: r(ye, {}) });
}
export { we as default };
