import { useId as e } from "react";
import { Fragment as t, jsxDEV as n } from "react/jsx-dev-runtime";
var r = {}, i = [
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
], a = "PARAGLIDE_LOCALE", o = 3456e4, s = [
	"cookie",
	"globalVariable",
	"baseLocale"
], c = [], l = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var u, d = !1, f = () => {
	let e = s;
	!l && typeof window < "u" && window.location?.href && (e = k(window.location.href));
	let t = p(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function p(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = re();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (j(t) && A.has(t)) {
			let e = A.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return te(t);
			}
		}
		let e = g(n);
		if (e) return e;
	}
}
var ee = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = f();
	} catch {}
	let i = [], c = s;
	!l && typeof window < "u" && window.location?.href && (c = k(window.location.href));
	for (let t of c) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (j(t) && A.has(t)) {
		let n = A.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let d = () => {
		!l && n.reload && window.location && e !== r && ee(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		d();
	});
	d();
}, h = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function te(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function _(e) {
	return e;
}
function v(e, t) {
	return e.exec(t.href);
}
var y = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function ne() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function re() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = g(e), ne(), S;
}
function w(e) {
	return T(e);
}
function T(e) {
	let t = _(typeof e == "string" ? new URL(e, h()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var E, D;
function O(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (E === t) return D;
	let n = _(new URL(t, "http://example.com")), i = w(n), a = i.href === n.href ? [n] : [n, i], o;
	for (let e of a) {
		for (let t of c) if (v(new r(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return E = t, D = o, o;
}
function k(e) {
	let t = O(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var A = /* @__PURE__ */ new Map();
function j(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var M = () => "API Access", N = () => "API Key", P = () => "api-access-section.copy", F = () => "Use this key to access the benchmarking API programmatically.", I = () => "Accès API", L = () => "Clé API", R = () => "Copier", z = () => "Utilisez cette clé pour accéder à l'API de benchmarking par programmation.", B = () => "Acceso API", V = () => "Llave API", H = () => "Copiar", U = () => "Usa esta llave para acceder a la API de benchmarking de forma programática.", W = () => "API-Zugriff", G = () => "API-Schlüssel", K = () => "Kopieren", q = () => "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.", J = () => "Accesso API", Y = () => "Chiave API", X = () => "Copia", ie = () => "Usa questa chiave per accedere programmaticamente alle API di benchmarking.", ae = () => "Acesso à API", oe = () => "Chave da API", se = () => "Copiar", ce = () => "Utilize esta chave para acessar a API de benchmarking de forma programática.", le = () => "API 访问", ue = () => "API 密钥", de = () => "复制", fe = () => "使用此密钥从程序访问基准测试 API。", pe = () => "APIアクセス", me = () => "APIキー", he = () => "コピー", ge = () => "このキーを使用して、プログラムからベンチマークAPIにアクセスします。", _e = () => "API 액세스", ve = () => "API 키", ye = () => "복사", be = () => "이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오.", xe = () => "Доступ к API", Se = () => "Ключ API", Z = () => "Копировать", Ce = () => "Используйте этот ключ для программного доступа к API бенчмаркинга.", we = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? I(e) : n === "es" ? B(e) : n === "de" ? W(e) : n === "it" ? J(e) : n === "pt" ? ae(e) : n === "zh" ? le(e) : n === "ja" ? pe(e) : n === "ko" ? _e(e) : n === "ru" ? xe(e) : M(e);
}), Te = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? L(e) : n === "es" ? V(e) : n === "de" ? G(e) : n === "it" ? Y(e) : n === "pt" ? oe(e) : n === "zh" ? ue(e) : n === "ja" ? me(e) : n === "ko" ? ve(e) : n === "ru" ? Se(e) : N(e);
}), Ee = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? R(e) : n === "es" ? H(e) : n === "de" ? K(e) : n === "it" ? X(e) : n === "pt" ? se(e) : n === "zh" ? de(e) : n === "ja" ? he(e) : n === "ko" ? ye(e) : n === "ru" ? Z(e) : P(e);
}), De = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? z(e) : n === "es" ? U(e) : n === "de" ? q(e) : n === "it" ? ie(e) : n === "pt" ? ce(e) : n === "zh" ? fe(e) : n === "ja" ? ge(e) : n === "ko" ? be(e) : n === "ru" ? Ce(e) : F(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/settings/ApiAccessSection.tsx";
function Oe() {
	let t = e();
	return n("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [n("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: we()
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 9,
			columnNumber: 7
		}, this), n("div", { children: [
			n("label", {
				htmlFor: t,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: Te()
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 13,
				columnNumber: 9
			}, this),
			n("div", {
				className: "flex gap-2",
				children: [n("input", {
					id: t,
					readOnly: !0,
					defaultValue: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
					className: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 20,
					columnNumber: 11
				}, this), n("button", {
					type: "button",
					className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: Ee()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 26,
					columnNumber: 11
				}, this)]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 19,
				columnNumber: 9
			}, this),
			n("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: De()
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 33,
				columnNumber: 9
			}, this)
		] }, void 0, !0, {
			fileName: Q,
			lineNumber: 12,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: Q,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var ke = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
m("en", { reload: !1 });
function Ae({ children: e }) {
	return n(t, { children: e }, void 0, !1, {
		fileName: ke,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/settings/ApiAccessSection.wrapper.tsx";
function je() {
	return n(Ae, { children: n(Oe, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { je as default };
