import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = {}, n = [
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
], r = "PARAGLIDE_LOCALE", i = 3456e4, a = [
	"cookie",
	"globalVariable",
	"baseLocale"
], o = [], s, c;
function l(e) {
	if (o.length === 0) return;
	let n = typeof e == "string" ? e : e.href;
	if (s === n) return c;
	let r = new URL(n, "http://dummy.com"), i;
	for (let e of o) if (new t(e.match, r.href).exec(r.href)) {
		i = e;
		break;
	}
	return s = n, c = i, i;
}
function u(e) {
	let t = l(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : a;
}
var d = void 0, f = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	if (d) {
		let e = d?.getStore()?.locale;
		if (e) return e;
	}
	let e = a;
	!f && typeof window < "u" && window.location?.href && (e = u(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, _(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = b();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (S(t) && x.has(t)) {
			let e = x.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return y(t);
			}
		}
		let e = v(n);
		if (e) return e;
	}
}
var g = (e) => {
	e ? window.location.href = e : window.location.reload();
}, _ = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, o;
	try {
		o = h();
	} catch {}
	let s = [], c = a;
	!f && typeof window < "u" && window.location?.href && (c = u(window.location.href));
	for (let t of c) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (f || typeof document > "u" || typeof window > "u") continue;
		let t = `${r}=${e}; path=/; max-age=${i}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (S(t) && x.has(t)) {
		let n = x.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), s.push(r));
		}
	}
	let l = () => {
		!f && n.reload && window.location && e !== o && g(void 0);
	};
	if (s.length) return Promise.all(s).then(() => {
		l();
	});
	l();
};
function v(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of n) if (e.toLowerCase() === t) return e;
}
function y(e) {
	let t = v(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${n.join(", ")}`);
}
function b() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${r}=([^;]+)`))?.[2];
	return v(e);
}
var x = /* @__PURE__ */ new Map();
function S(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var C = () => "API Access", w = () => "Accès API", T = () => "Acceso API", E = () => "API-Zugriff", D = () => "Accesso API", O = () => "Acesso API", k = () => "API 访问", A = () => "APIアクセス", j = () => "API Access", M = () => "Доступ к API", N = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? C(e) : n === "fr" ? w(e) : n === "es" ? T(e) : n === "de" ? E(e) : n === "it" ? D(e) : n === "pt" ? O(e) : n === "zh" ? k(e) : n === "ja" ? A(e) : n === "ko" ? j(e) : M(e);
}), P = () => "API Key", F = () => "Clé API", I = () => "Llave API", L = () => "API-Schlüssel", R = () => "Chiave API", z = () => "Chave API", B = () => "API 密钥", V = () => "APIキー", H = () => "API Key", te = () => "Ключ API", U = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? P(e) : n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : te(e);
}), W = () => "Copy", G = () => "Copier", K = () => "Copiar", q = () => "Kopieren", J = () => "Copia", Y = () => "Copiar", X = () => "复制", Z = () => "コピー", Q = () => "Copy", ne = () => "Копировать", re = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? W(e) : n === "fr" ? G(e) : n === "es" ? K(e) : n === "de" ? q(e) : n === "it" ? J(e) : n === "pt" ? Y(e) : n === "zh" ? X(e) : n === "ja" ? Z(e) : n === "ko" ? Q(e) : ne(e);
}), ie = () => "Use this key to access the benchmarking API programmatically.", ae = () => "Utilisez cette clé pour appeler l'API de benchmark par programmation.", oe = () => "Usa esta llave para acceder a la API de benchmarking de forma programática.", $ = () => "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.", se = () => "Usa questa chiave per accedere programmaticamente alle API di benchmarking.", ce = () => "Use esta chave para acessar a API de benchmarking programaticamente.", le = () => "使用此密钥以编程方式访问基准测试 API。", ue = () => "このキーを使用して、プログラムでベンチマークAPIにアクセスします。", de = () => "Use this key to access the benchmarking API programmatically.", fe = () => "Используйте этот ключ для программного доступа к API бенчмаркинга.", pe = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "en" ? ie(e) : n === "fr" ? ae(e) : n === "es" ? oe(e) : n === "de" ? $(e) : n === "it" ? se(e) : n === "pt" ? ce(e) : n === "zh" ? le(e) : n === "ja" ? ue(e) : n === "ko" ? de(e) : fe(e);
}), me = e.from_html("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"> </h2> <div><label for=\"settings-api-key\" class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <div class=\"flex gap-2\"><input id=\"settings-api-key\" readonly=\"\" value=\"sk_bench_xxxxxxxxxxxxxxxxxxxx\" class=\"flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground\"/> <button type=\"button\" class=\"rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent\"> </button></div> <p class=\"mt-1 text-xs text-muted-foreground\"> </p></div></section>");
function he(t, n) {
	e.push(n, !1), e.init();
	var r = me(), i = e.child(r), a = e.child(i, !0);
	e.reset(i);
	var o = e.sibling(i, 2), s = e.child(o), c = e.child(s, !0);
	e.reset(s);
	var l = e.sibling(s, 2), u = e.child(l), d = e.sibling(u, 2), f = e.child(d, !0);
	e.reset(d), e.reset(l);
	var p = e.sibling(l, 2), m = e.child(p, !0);
	e.reset(p), e.reset(o), e.reset(r), e.template_effect((t, n, r, i) => {
		e.set_text(a, t), e.set_text(c, n), e.set_text(f, r), e.set_text(m, i);
	}, [
		() => N(),
		() => U(),
		() => re(),
		() => pe()
	]), e.append(t, r), e.pop();
}
export { he as default };
