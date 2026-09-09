import "react";
import { Fragment as e, jsxDEV as t } from "react/jsx-dev-runtime";
var n = {}, r = [
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
], i = "PARAGLIDE_LOCALE", a = 3456e4, o = [
	"cookie",
	"globalVariable",
	"baseLocale"
], s = [], c = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var l, u = !1, d = () => {
	let e = o;
	!c && typeof window < "u" && window.location?.href && (e = A(window.location.href));
	let t = f(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return u || (l = t, u = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function f(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = te();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && l !== void 0) n = l;
		else if (M(t) && j.has(t)) {
			let e = j.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return _(t);
			}
		}
		let e = g(n);
		if (e) return e;
	}
}
var p = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = d();
	} catch {}
	let s = [], u = o;
	!c && typeof window < "u" && window.location?.href && (u = A(window.location.href));
	for (let t of u) if (t === "globalVariable") l = e;
	else if (t === "cookie") {
		if (c || typeof document > "u" || typeof window > "u") continue;
		let t = `${i}=${e}; path=/; max-age=${a}`;
		document.cookie = t, w();
	} else if (t === "baseLocale") continue;
	else if (M(t) && j.has(t)) {
		let n = j.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), s.push(r));
		}
	}
	let f = () => {
		!c && n.reload && window.location && e !== r && p(void 0);
	};
	if (s.length) return Promise.all(s).then(() => {
		f();
	});
	f();
}, h = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of r) if (e.toLowerCase() === t) return e;
}
function _(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${r.join(", ")}`);
}
function v(e) {
	return e;
}
function y(e, t) {
	return e.exec(t.href);
}
var b = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), x = RegExp(`(?:^|;\\s*)${b}=([^;]*)`), S = Symbol(), C = S;
function w() {
	C = S;
}
function ee() {
	typeof queueMicrotask == "function" ? queueMicrotask(w) : Promise.resolve().then(w);
}
function te() {
	if (typeof document > "u") return;
	if (C !== S) return C;
	let e = document.cookie.match(x)?.[1];
	return C = g(e), ee(), C;
}
function T(e) {
	return E(e);
}
function E(e) {
	let t = v(typeof e == "string" ? new URL(e, h()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), v(t);
}
var D, O;
function k(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (D === t) return O;
	let r = v(new URL(t, "http://example.com")), i = T(r), a = i.href === r.href ? [r] : [r, i], o;
	for (let e of a) {
		for (let t of s) if (y(new n(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return D = t, O = o, o;
}
function A(e) {
	let t = k(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var j = /* @__PURE__ */ new Map();
function M(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var N = () => "Cancel", P = () => "Save Changes", F = () => "Annuler", I = () => "Enregistrer les modifications", L = () => "Cancelar", R = () => "Guardar cambios", z = () => "Abbrechen", B = () => "Änderungen speichern", ne = () => "Annulla", V = () => "Salva modifiche", H = () => "Cancelar", U = () => "Salvar alterações", W = () => "取消", G = () => "保存更改", K = () => "キャンセル", q = () => "変更を保存", J = () => "취소", Y = () => "변경 사항 저장", X = () => "Отмена", Z = () => "Сохранить изменения", re = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? F(e) : n === "es" ? L(e) : n === "de" ? z(e) : n === "it" ? ne(e) : n === "pt" ? H(e) : n === "zh" ? W(e) : n === "ja" ? K(e) : n === "ko" ? J(e) : n === "ru" ? X(e) : N(e);
}), ie = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? I(e) : n === "es" ? R(e) : n === "de" ? B(e) : n === "it" ? V(e) : n === "pt" ? U(e) : n === "zh" ? G(e) : n === "ja" ? q(e) : n === "ko" ? Y(e) : n === "ru" ? Z(e) : P(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/settings/SettingsFooter.tsx";
function ae() {
	return t("div", {
		className: "flex justify-end gap-3",
		children: [t("button", {
			type: "button",
			className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
			children: re()
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 6,
			columnNumber: 7
		}, this), t("button", {
			type: "submit",
			className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
			children: ie()
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 12,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: Q,
		lineNumber: 5,
		columnNumber: 5
	}, this);
}
var oe = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
m("en", { reload: !1 });
function se({ children: n }) {
	return t(e, { children: n }, void 0, !1, {
		fileName: oe,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/settings/SettingsFooter.wrapper.tsx";
function ce() {
	return t(se, { children: t(ae, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { ce as default };
