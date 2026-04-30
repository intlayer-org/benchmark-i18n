import { insert as e, setAttribute as t, template as n } from "solid-js/web";
import { createUniqueId as r } from "solid-js";
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
function f(e) {
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
function p(e) {
	let t = f(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var m = void 0, h = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var g, _ = !1, v = () => {
	if (m) {
		let e = m?.getStore()?.locale;
		if (e) return e;
	}
	let e = c;
	!h && typeof window < "u" && window.location?.href && (e = p(window.location.href));
	let t = y(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return _ || (g = t, _ = !0, ee(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function y(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = C();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && g !== void 0) n = g;
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
var b = (e) => {
	e ? window.location.href = e : window.location.reload();
}, ee = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = v();
	} catch {}
	let i = [], a = c;
	!h && typeof window < "u" && window.location?.href && (a = p(window.location.href));
	for (let t of a) if (t === "globalVariable") g = e;
	else if (t === "cookie") {
		if (h || typeof document > "u" || typeof window > "u") continue;
		let t = `${o}=${e}; path=/; max-age=${s}`;
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
	let l = () => {
		!h && n.reload && window.location && e !== r && b(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
};
function x(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of a) if (e.toLowerCase() === t) return e;
}
function S(e) {
	let t = x(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${a.join(", ")}`);
}
function C() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${o}=([^;]+)`))?.[2];
	return x(e);
}
var w = /* @__PURE__ */ new Map();
function T(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var E = () => "API Access", D = () => "Accès API", O = () => "Acceso API", k = () => "API-Zugriff", A = () => "Accesso API", j = () => "Acesso API", M = () => "API 访问", N = () => "APIアクセス", P = () => "API Access", F = () => "Доступ к API", I = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? E(e) : n === "fr" ? D(e) : n === "es" ? O(e) : n === "de" ? k(e) : n === "it" ? A(e) : n === "pt" ? j(e) : n === "zh" ? M(e) : n === "ja" ? N(e) : n === "ko" ? P(e) : F(e);
}), L = () => "API Key", R = () => "Clé API", z = () => "Llave API", B = () => "API-Schlüssel", V = () => "Chiave API", H = () => "Chave API", U = () => "API 密钥", W = () => "APIキー", te = () => "API Key", G = () => "Ключ API", K = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? L(e) : n === "fr" ? R(e) : n === "es" ? z(e) : n === "de" ? B(e) : n === "it" ? V(e) : n === "pt" ? H(e) : n === "zh" ? U(e) : n === "ja" ? W(e) : n === "ko" ? te(e) : G(e);
}), q = () => "Copy", J = () => "Copier", Y = () => "Copiar", X = () => "Kopieren", Z = () => "Copia", Q = () => "Copiar", ne = () => "复制", re = () => "コピー", ie = () => "Copy", ae = () => "Копировать", oe = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? q(e) : n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? Z(e) : n === "pt" ? Q(e) : n === "zh" ? ne(e) : n === "ja" ? re(e) : n === "ko" ? ie(e) : ae(e);
}), se = () => "Use this key to access the benchmarking API programmatically.", ce = () => "Utilisez cette clé pour appeler l'API de benchmark par programmation.", le = () => "Usa esta llave para acceder a la API de benchmarking de forma programática.", ue = () => "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.", de = () => "Usa questa chiave per accedere programmaticamente alle API di benchmarking.", fe = () => "Use esta chave para acessar a API de benchmarking programaticamente.", pe = () => "使用此密钥以编程方式访问基准测试 API。", $ = () => "このキーを使用して、プログラムでベンチマークAPIにアクセスします。", me = () => "Use this key to access the benchmarking API programmatically.", he = () => "Используйте этот ключ для программного доступа к API бенчмаркинга.", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? v();
	return n === "en" ? se(e) : n === "fr" ? ce(e) : n === "es" ? le(e) : n === "de" ? ue(e) : n === "it" ? de(e) : n === "pt" ? fe(e) : n === "zh" ? pe(e) : n === "ja" ? $(e) : n === "ko" ? me(e) : he(e);
}), _e = n("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"></h2><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><div class=\"flex gap-2\"><input readonly defaultvalue=sk_bench_xxxxxxxxxxxxxxxxxxxx class=\"flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground\"><button type=button class=\"rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent\"></button></div><p class=\"mt-1 text-xs text-muted-foreground\">");
function ve() {
	let n = r();
	return (() => {
		var r = _e(), i = r.firstChild, a = i.nextSibling.firstChild, o = a.nextSibling, s = o.firstChild, c = s.nextSibling, l = o.nextSibling;
		return e(i, () => I()), t(a, "for", n), e(a, () => K()), t(s, "id", n), e(c, () => oe()), e(l, () => ge()), r;
	})();
}
export { ve as default };
