var e = {}, t = [
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
], n = "PARAGLIDE_LOCALE", r = 3456e4, i = [
	"cookie",
	"globalVariable",
	"baseLocale"
], a = [], o = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var s, c = !1, l = () => {
	let e = i;
	!o && typeof window < "u" && window.location?.href && (e = A(window.location.href));
	let t = u(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return c || (s = t, c = !0, f(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function u(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = w();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && s !== void 0) n = s;
		else if (M(t) && j.has(t)) {
			let e = j.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return h(t);
			}
		}
		let e = m(n);
		if (e) return e;
	}
}
var d = (e) => {
	e ? window.location.href = e : window.location.reload();
}, f = (e, t) => {
	let a = {
		reload: !0,
		...t
	}, c;
	try {
		c = l();
	} catch {}
	let u = [], f = i;
	!o && typeof window < "u" && window.location?.href && (f = A(window.location.href));
	for (let t of f) if (t === "globalVariable") s = e;
	else if (t === "cookie") {
		if (o || typeof document > "u" || typeof window > "u") continue;
		let t = `${n}=${e}; path=/; max-age=${r}`;
		document.cookie = t, S();
	} else if (t === "baseLocale") continue;
	else if (M(t) && j.has(t)) {
		let n = j.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), u.push(r));
		}
	}
	let p = () => {
		!o && a.reload && window.location && e !== c && d(void 0);
	};
	if (u.length) return Promise.all(u).then(() => {
		p();
	});
	p();
}, p = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function m(e) {
	if (typeof e != "string") return;
	let n = e.toLowerCase();
	for (let e of t) if (e.toLowerCase() === n) return e;
}
function h(e) {
	let n = m(e);
	if (n) return n;
	throw Error(`Invalid locale: ${e}. Expected one of: ${t.join(", ")}`);
}
function g(e) {
	return e;
}
function _(e, t) {
	return e.exec(t.href);
}
var v = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), y = RegExp(`(?:^|;\\s*)${v}=([^;]*)`), b = Symbol(), x = b;
function S() {
	x = b;
}
function C() {
	typeof queueMicrotask == "function" ? queueMicrotask(S) : Promise.resolve().then(S);
}
function w() {
	if (typeof document > "u") return;
	if (x !== b) return x;
	let e = document.cookie.match(y)?.[1];
	return x = m(e), C(), x;
}
function T(e) {
	return E(e);
}
function E(e) {
	let t = g(typeof e == "string" ? new URL(e, p()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && m(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), g(t);
}
var D, O;
function k(t) {
	if (a.length === 0) return;
	let n = typeof t == "string" ? t : t.href;
	if (D === n) return O;
	let r = g(new URL(n, "http://example.com")), i = T(r), o = i.href === r.href ? [r] : [r, i], s;
	for (let t of o) {
		for (let n of a) if (_(new e(n.match, t.href), t)) {
			s = n;
			break;
		}
		if (s) break;
	}
	return D = n, O = s, s;
}
function A(e) {
	let t = k(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : i;
}
var j = /* @__PURE__ */ new Map();
function M(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var N = () => "Choosing an i18n library is an architectural decision with long-term consequences.", P = (e = {}, t = {}) => {
	if ((t.locale ?? l()) === "en") return N();
};
function F() {
	return P(), null;
}
export { F as default };
