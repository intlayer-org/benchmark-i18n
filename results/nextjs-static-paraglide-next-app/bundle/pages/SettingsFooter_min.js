import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
import { useParams as o } from "next/navigation";
var s = {}, c = [
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
], l = "PARAGLIDE_LOCALE", u = 3456e4, d = [
	"cookie",
	"globalVariable",
	"baseLocale"
], f = [], p, m;
function h(e) {
	if (f.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (p === t) return m;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of f) if (new s(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return p = t, m = r, r;
}
function g(e) {
	let t = h(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : d;
}
var _ = void 0, v = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var y, b = !1, x = () => {
	if (_) {
		let e = _?.getStore()?.locale;
		if (e) return e;
	}
	let e = d;
	!v && typeof window < "u" && window.location?.href && (e = g(window.location.href));
	let t = S(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return b || (y = t, b = !0, w(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function S(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = D();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && y !== void 0) n = y;
		else if (k(t) && O.has(t)) {
			let e = O.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return E(t);
			}
		}
		let e = T(n);
		if (e) return e;
	}
}
var C = (e) => {
	e ? window.location.href = e : window.location.reload();
}, w = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = x();
	} catch {}
	let i = [], a = d;
	!v && typeof window < "u" && window.location?.href && (a = g(window.location.href));
	for (let t of a) if (t === "globalVariable") y = e;
	else if (t === "cookie") {
		if (v || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${u}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (k(t) && O.has(t)) {
		let n = O.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!v && n.reload && window.location && e !== r && C(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function T(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function E(e) {
	let t = T(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function D() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${l}=([^;]+)`))?.[2];
	return T(e);
}
var O = /* @__PURE__ */ new Map();
function k(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var A = () => "Cancel", j = () => "Annuler", M = () => "Cancelar", N = () => "Abbrechen", P = () => "Annulla", F = () => "Cancelar", I = () => "取消", L = () => "キャンセル", R = () => "취소", z = () => "Отмена", B = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? A(e) : n === "fr" ? j(e) : n === "es" ? M(e) : n === "de" ? N(e) : n === "it" ? P(e) : n === "pt" ? F(e) : n === "zh" ? I(e) : n === "ja" ? L(e) : n === "ko" ? R(e) : z(e);
}), ee = () => "Save Changes", V = () => "Enregistrer les modifications", H = () => "Guardar cambios", U = () => "Änderungen speichern", W = () => "Salva modifiche", G = () => "Salvar alterações", K = () => "保存更改", q = () => "変更を保存", J = () => "변경 사항 저장", Y = () => "Сохранить изменения", X = ((e = {}, t = {}) => {
	let n = t.locale ?? x();
	return n === "en" ? ee(e) : n === "fr" ? V(e) : n === "es" ? H(e) : n === "de" ? U(e) : n === "it" ? W(e) : n === "pt" ? G(e) : n === "zh" ? K(e) : n === "ja" ? q(e) : n === "ko" ? J(e) : Y(e);
});
function Z() {
	return a("div", {
		className: "flex justify-end gap-3",
		children: [i("button", {
			type: "button",
			className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
			children: B()
		}), i("button", {
			type: "submit",
			className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
			children: X()
		})]
	});
}
function Q() {
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
function $(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function te({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		$("AppRoot", c);
	}, [c]), e(() => {
		w(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		Q();
	}, []), i(r, { children: a });
}
function ne({ children: e }) {
	return i(te, { children: e });
}
function re() {
	return i(ne, { children: i(Z, {}) });
}
export { re as default };
