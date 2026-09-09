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
], o = [], s = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var c, l = !1, u = () => {
	let e = a;
	!s && typeof window < "u" && window.location?.href && (e = A(window.location.href));
	let t = d(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return l || (c = t, l = !0, p(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function d(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ee();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && c !== void 0) n = c;
		else if (M(t) && j.has(t)) {
			let e = j.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return g(t);
			}
		}
		let e = h(n);
		if (e) return e;
	}
}
var f = (e) => {
	e ? window.location.href = e : window.location.reload();
}, p = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, o;
	try {
		o = u();
	} catch {}
	let l = [], d = a;
	!s && typeof window < "u" && window.location?.href && (d = A(window.location.href));
	for (let t of d) if (t === "globalVariable") c = e;
	else if (t === "cookie") {
		if (s || typeof document > "u" || typeof window > "u") continue;
		let t = `${r}=${e}; path=/; max-age=${i}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (M(t) && j.has(t)) {
		let n = j.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), l.push(r));
		}
	}
	let p = () => {
		!s && n.reload && window.location && e !== o && f(void 0);
	};
	if (l.length) return Promise.all(l).then(() => {
		p();
	});
	p();
}, m = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function h(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of n) if (e.toLowerCase() === t) return e;
}
function g(e) {
	let t = h(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${n.join(", ")}`);
}
function _(e) {
	return e;
}
function v(e, t) {
	return e.exec(t.href);
}
var y = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function w() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function ee() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = h(e), w(), S;
}
function T(e) {
	return E(e);
}
function E(e) {
	let t = _(typeof e == "string" ? new URL(e, m()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var D, O;
function k(e) {
	if (o.length === 0) return;
	let n = typeof e == "string" ? e : e.href;
	if (D === n) return O;
	let r = _(new URL(n, "http://example.com")), i = T(r), a = i.href === r.href ? [r] : [r, i], s;
	for (let e of a) {
		for (let n of o) if (v(new t(n.match, e.href), e)) {
			s = n;
			break;
		}
		if (s) break;
	}
	return D = n, O = s, s;
}
function A(e) {
	let t = k(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : a;
}
var j = /* @__PURE__ */ new Map();
function M(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var N = () => "API Key", P = () => "Clé API", F = () => "Llave API", I = () => "API-Schlüssel", L = () => "Chiave API", R = () => "Chave API", z = () => "API 密钥", B = () => "APIキー", V = () => "API Key", H = () => "Ключ API", U = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? P(e) : n === "es" ? F(e) : n === "de" ? I(e) : n === "it" ? L(e) : n === "pt" ? R(e) : n === "zh" ? z(e) : n === "ja" ? B(e) : n === "ko" ? V(e) : n === "ru" ? H(e) : N(e);
}), W = () => "Copy", G = () => "Copier", K = () => "Copiar", q = () => "Kopieren", J = () => "Copia", te = () => "Copiar", Y = () => "复制", X = () => "コピー", Z = () => "Copy", Q = () => "Копировать", ne = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? G(e) : n === "es" ? K(e) : n === "de" ? q(e) : n === "it" ? J(e) : n === "pt" ? te(e) : n === "zh" ? Y(e) : n === "ja" ? X(e) : n === "ko" ? Z(e) : n === "ru" ? Q(e) : W(e);
}), re = () => "Use this key to access the benchmarking API programmatically.", ie = () => "Utilisez cette clé pour appeler l'API de benchmark par programmation.", ae = () => "Usa esta llave para acceder a la API de benchmarking de forma programática.", oe = () => "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.", se = () => "Usa questa chiave per accedere programmaticamente alle API di benchmarking.", ce = () => "Use esta chave para acessar a API de benchmarking programaticamente.", le = () => "使用此密钥以编程方式访问基准测试 API。", ue = () => "このキーを使用して、プログラムでベンチマークAPIにアクセスします。", de = () => "Use this key to access the benchmarking API programmatically.", fe = () => "Используйте этот ключ для программного доступа к API бенчмаркинга.", pe = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? ie(e) : n === "es" ? ae(e) : n === "de" ? oe(e) : n === "it" ? se(e) : n === "pt" ? ce(e) : n === "zh" ? le(e) : n === "ja" ? ue(e) : n === "ko" ? de(e) : n === "ru" ? fe(e) : re(e);
}), me = () => "API Access", he = () => "Accès API", ge = () => "Acceso API", _e = () => "API-Zugriff", ve = () => "Accesso API", ye = () => "Acesso API", be = () => "API 访问", $ = () => "APIアクセス", xe = () => "API Access", Se = () => "Доступ к API", Ce = ((e = {}, t = {}) => {
	let n = t.locale ?? u();
	return n === "fr" ? he(e) : n === "es" ? ge(e) : n === "de" ? _e(e) : n === "it" ? ve(e) : n === "pt" ? ye(e) : n === "zh" ? be(e) : n === "ja" ? $(e) : n === "ko" ? xe(e) : n === "ru" ? Se(e) : me(e);
}), we = e.from_html("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"> </h2> <div><label for=\"settings-api-key\" class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <div class=\"flex gap-2\"><input id=\"settings-api-key\" readonly=\"\" value=\"sk_bench_xxxxxxxxxxxxxxxxxxxx\" class=\"flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground\"/> <button type=\"button\" class=\"rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent\"> </button></div> <p class=\"mt-1 text-xs text-muted-foreground\"> </p></div></section>");
function Te(t, n) {
	e.push(n, !1), e.init();
	var r = we(), i = e.child(r), a = e.only_child(i, !0), o = e.sibling(i, 2), s = e.child(o), c = e.only_child(s, !0), l = e.sibling(s, 2), u = e.child(l), d = e.sibling(u, 2), f = e.only_child(d, !0);
	e.reset(l);
	var p = e.sibling(l, 2), m = e.only_child(p, !0);
	e.reset(o), e.reset(r), e.template_effect((t, n, r, i) => {
		e.set_text(a, t), e.set_text(c, n), e.set_text(f, r), e.set_text(m, i);
	}, [
		() => Ce(),
		() => U(),
		() => ne(),
		() => pe()
	]), e.append(t, r), e.pop();
}
export { Te as default };
