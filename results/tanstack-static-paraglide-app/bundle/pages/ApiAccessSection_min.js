import { useId as e } from "react";
import { Fragment as t, jsx as n, jsxs as r } from "react/jsx-runtime";
var i = {}, a = [
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
], o = "PARAGLIDE_LOCALE", s = 3456e4, c = [
	"cookie",
	"globalVariable",
	"baseLocale"
], l = [], u, d;
function ee(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (u === t) return d;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of l) if (new i(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return u = t, d = r, r;
}
function f(e) {
	let t = ee(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var p = void 0;
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var m, h = !1, g = () => {
	if (p) {
		let e = p?.getStore()?.locale;
		if (e) return e;
	}
	let e = c;
	typeof window < "u" && window.location?.href && (e = f(window.location.href));
	let t = _(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return h || (m = t, h = !0, y(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function _(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = S();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && m !== void 0) n = m;
		else if (w(t) && C.has(t)) {
			let e = C.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return x(t);
			}
		}
		let e = b(n);
		if (e) return e;
	}
}
var v = (e) => {
	e ? window.location.href = e : window.location.reload();
}, y = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = g();
	} catch {}
	let i = [], a = c;
	typeof window < "u" && window.location?.href && (a = f(window.location.href));
	for (let t of a) if (t === "globalVariable") m = e;
	else if (t === "cookie") {
		if (typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${s}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (w(t) && C.has(t)) {
		let n = C.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let l = () => {
		n.reload && window.location && e !== r && v(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
};
function b(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function x(e) {
	let t = b(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function S() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${o}=([^;]+)`))?.[2];
	return b(e);
}
var C = /* @__PURE__ */ new Map();
function w(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var T = () => "API Access", E = () => "Accès API", D = () => "Acceso API", O = () => "API-Zugriff", k = () => "Accesso API", A = () => "Acesso à API", j = () => "API 访问", M = () => "APIアクセス", N = () => "API 액세스", P = () => "Доступ к API", F = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? T(e) : n === "fr" ? E(e) : n === "es" ? D(e) : n === "de" ? O(e) : n === "it" ? k(e) : n === "pt" ? A(e) : n === "zh" ? j(e) : n === "ja" ? M(e) : n === "ko" ? N(e) : P(e);
}), I = () => "API Key", L = () => "Clé API", R = () => "Llave API", z = () => "API-Schlüssel", B = () => "Chiave API", V = () => "Chave da API", H = () => "API 密钥", U = () => "APIキー", te = () => "API 키", W = () => "Ключ API", G = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? I(e) : n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? te(e) : W(e);
}), K = () => "Use this key to access the benchmarking API programmatically.", q = () => "Utilisez cette clé pour accéder à l'API de benchmarking par programmation.", J = () => "Usa esta llave para acceder a la API de benchmarking de forma programática.", Y = () => "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.", X = () => "Usa questa chiave per accedere programmaticamente alle API di benchmarking.", Z = () => "Utilize esta chave para acessar a API de benchmarking de forma programática.", Q = () => "使用此密钥从程序访问基准测试 API。", ne = () => "このキーを使用して、プログラムからベンチマークAPIにアクセスします。", re = () => "이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오.", ie = () => "Используйте этот ключ для программного доступа к API бенчмаркинга.", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? K(e) : n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? Z(e) : n === "zh" ? Q(e) : n === "ja" ? ne(e) : n === "ko" ? re(e) : ie(e);
}), oe = () => "Copier", se = () => "Copiar", ce = () => "Kopieren", le = () => "Copia", ue = () => "Copiar", de = () => "复制", fe = () => "コピー", pe = () => "복사", $ = () => "Копировать", me = () => "api-access-section.copy", he = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? me(e) : n === "fr" ? oe(e) : n === "es" ? se(e) : n === "de" ? ce(e) : n === "it" ? le(e) : n === "pt" ? ue(e) : n === "zh" ? de(e) : n === "ja" ? fe(e) : n === "ko" ? pe(e) : $(e);
});
function ge() {
	let t = e();
	return r("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [n("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: F()
		}), r("div", { children: [
			n("label", {
				htmlFor: t,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: G()
			}),
			r("div", {
				className: "flex gap-2",
				children: [n("input", {
					id: t,
					readOnly: !0,
					defaultValue: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
					className: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
				}), n("button", {
					type: "button",
					className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: he()
				})]
			}),
			n("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: ae()
			})
		] })]
	});
}
y("en", { reload: !1 });
function _e({ children: e }) {
	return n(t, { children: e });
}
function ve() {
	return n(_e, { children: n(ge, {}) });
}
export { ve as default };
