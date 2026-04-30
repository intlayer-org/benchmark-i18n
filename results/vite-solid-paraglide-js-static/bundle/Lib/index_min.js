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
], a = [], o, s;
function c(t) {
	if (a.length === 0) return;
	let n = typeof t == "string" ? t : t.href;
	if (o === n) return s;
	let r = new URL(n, "http://dummy.com"), i;
	for (let t of a) if (new e(t.match, r.href).exec(r.href)) {
		i = t;
		break;
	}
	return o = n, s = i, i;
}
function l(e) {
	let t = c(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : i;
}
var u = void 0, d = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var f, p = !1, m = () => {
	if (u) {
		let e = u?.getStore()?.locale;
		if (e) return e;
	}
	let e = i;
	!d && typeof window < "u" && window.location?.href && (e = l(window.location.href));
	let t = h(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, _(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function h(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = b();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
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
	let a = {
		reload: !0,
		...t
	}, o;
	try {
		o = m();
	} catch {}
	let s = [], c = i;
	!d && typeof window < "u" && window.location?.href && (c = l(window.location.href));
	for (let t of c) if (t === "globalVariable") f = e;
	else if (t === "cookie") {
		if (d || typeof document > "u" || typeof window > "u") continue;
		let t = `${n}=${e}; path=/; max-age=${r}`;
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
	let u = () => {
		!d && a.reload && window.location && e !== o && g(void 0);
	};
	if (s.length) return Promise.all(s).then(() => {
		u();
	});
	u();
};
function v(e) {
	if (typeof e != "string") return;
	let n = e.toLowerCase();
	for (let e of t) if (e.toLowerCase() === n) return e;
}
function y(e) {
	let n = v(e);
	if (n) return n;
	throw Error(`Invalid locale: ${e}. Expected one of: ${t.join(", ")}`);
}
function b() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${n}=([^;]+)`))?.[2];
	return v(e);
}
var x = /* @__PURE__ */ new Map();
function S(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var C = () => "Choosing an i18n library is an architectural decision with long-term consequences.", w = (e = {}, t = {}) => {
	if ((t.locale ?? m()) === "en") return C();
};
function T() {
	return w(), null;
}
export { T as default };
