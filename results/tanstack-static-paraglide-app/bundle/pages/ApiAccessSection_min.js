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
], o = "PARAGLIDE_LOCALE", ee = 3456e4, s = [
	"cookie",
	"globalVariable",
	"baseLocale"
], c = [], l = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var u, d = !1, f = () => {
	let e = s;
	!l && typeof window < "u" && window.location?.href && (e = N(window.location.href));
	let t = p(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, h(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function p(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = D();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (F(t) && P.has(t)) {
			let e = P.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return v(t);
			}
		}
		let e = _(n);
		if (e) return e;
	}
}
var m = (e) => {
	e ? window.location.href = e : window.location.reload();
}, h = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = f();
	} catch {}
	let i = [], a = s;
	!l && typeof window < "u" && window.location?.href && (a = N(window.location.href));
	for (let t of a) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, T();
	} else if (t === "baseLocale") continue;
	else if (F(t) && P.has(t)) {
		let n = P.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let c = () => {
		!l && n.reload && window.location && e !== r && m(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		c();
	});
	c();
}, g = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function _(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function v(e) {
	let t = _(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function y(e) {
	return e;
}
function b(e, t) {
	return e.exec(t.href);
}
var x = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), S = RegExp(`(?:^|;\\s*)${x}=([^;]*)`), C = Symbol(), w = C;
function T() {
	w = C;
}
function E() {
	typeof queueMicrotask == "function" ? queueMicrotask(T) : Promise.resolve().then(T);
}
function D() {
	if (typeof document > "u") return;
	if (w !== C) return w;
	let e = document.cookie.match(S)?.[1];
	return w = _(e), E(), w;
}
function O(e) {
	return k(e);
}
function k(e) {
	let t = y(typeof e == "string" ? new URL(e, g()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && _(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), y(t);
}
var A, j;
function M(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (A === t) return j;
	let n = y(new URL(t, "http://example.com")), r = O(n), a = r.href === n.href ? [n] : [n, r], o;
	for (let e of a) {
		for (let t of c) if (b(new i(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return A = t, j = o, o;
}
function N(e) {
	let t = M(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var P = /* @__PURE__ */ new Map();
function F(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var I = () => "API Access", L = () => "Accès API", R = () => "Acceso API", z = () => "API-Zugriff", B = () => "Accesso API", V = () => "Acesso à API", H = () => "API 访问", U = () => "APIアクセス", W = () => "API 액세스", G = () => "Доступ к API", K = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : n === "ru" ? G(e) : I(e);
}), q = () => "API Key", J = () => "Clé API", Y = () => "Llave API", X = () => "API-Schlüssel", Z = () => "Chiave API", te = () => "Chave da API", Q = () => "API 密钥", ne = () => "APIキー", re = () => "API 키", ie = () => "Ключ API", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? Z(e) : n === "pt" ? te(e) : n === "zh" ? Q(e) : n === "ja" ? ne(e) : n === "ko" ? re(e) : n === "ru" ? ie(e) : q(e);
}), oe = () => "Copier", se = () => "Copiar", ce = () => "Kopieren", le = () => "Copia", ue = () => "Copiar", de = () => "复制", fe = () => "コピー", pe = () => "복사", me = () => "Копировать", he = () => "api-access-section.copy", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? oe(e) : n === "es" ? se(e) : n === "de" ? ce(e) : n === "it" ? le(e) : n === "pt" ? ue(e) : n === "zh" ? de(e) : n === "ja" ? fe(e) : n === "ko" ? pe(e) : n === "ru" ? me(e) : he(e);
}), _e = () => "Use this key to access the benchmarking API programmatically.", ve = () => "Utilisez cette clé pour accéder à l'API de benchmarking par programmation.", ye = () => "Usa esta llave para acceder a la API de benchmarking de forma programática.", be = () => "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.", $ = () => "Usa questa chiave per accedere programmaticamente alle API di benchmarking.", xe = () => "Utilize esta chave para acessar a API de benchmarking de forma programática.", Se = () => "使用此密钥从程序访问基准测试 API。", Ce = () => "このキーを使用して、プログラムからベンチマークAPIにアクセスします。", we = () => "이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오.", Te = () => "Используйте этот ключ для программного доступа к API бенчмаркинга.", Ee = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? $(e) : n === "pt" ? xe(e) : n === "zh" ? Se(e) : n === "ja" ? Ce(e) : n === "ko" ? we(e) : n === "ru" ? Te(e) : _e(e);
});
function De() {
	let t = e();
	return r("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [n("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: K()
		}), r("div", { children: [
			n("label", {
				htmlFor: t,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: ae()
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
					children: ge()
				})]
			}),
			n("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: Ee()
			})
		] })]
	});
}
h("en", { reload: !1 });
function Oe({ children: e }) {
	return n(t, { children: e });
}
function ke() {
	return n(Oe, { children: n(De, {}) });
}
export { ke as default };
