import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
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
	let i = [], c = s;
	!l && typeof window < "u" && window.location?.href && (c = N(window.location.href));
	for (let t of c) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
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
	let d = () => {
		!l && n.reload && window.location && e !== r && m(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		d();
	});
	d();
}, g = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function _(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function v(e) {
	let t = _(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function y(e) {
	return e;
}
function b(e, t) {
	return e.exec(t.href);
}
var x = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), S = RegExp(`(?:^|;\\s*)${x}=([^;]*)`), C = Symbol(), w = C;
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
	let n = y(new URL(t, "http://example.com")), i = O(n), a = i.href === n.href ? [n] : [n, i], o;
	for (let e of a) {
		for (let t of c) if (b(new r(t.match, e.href), e)) {
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
var I = () => "Cancel", L = () => "Annuler", R = () => "Cancelar", z = () => "Abbrechen", B = () => "Annulla", ee = () => "Cancelar", V = () => "取消", H = () => "キャンセル", U = () => "취소", W = () => "Отмена", G = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? ee(e) : n === "zh" ? V(e) : n === "ja" ? H(e) : n === "ko" ? U(e) : n === "ru" ? W(e) : I(e);
}), K = () => "Save Changes", q = () => "Enregistrer les modifications", J = () => "Guardar cambios", Y = () => "Änderungen speichern", X = () => "Salva modifiche", Z = () => "Salvar alterações", Q = () => "保存更改", $ = () => "変更を保存", te = () => "변경 사항 저장", ne = () => "Сохранить изменения", re = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? q(e) : n === "es" ? J(e) : n === "de" ? Y(e) : n === "it" ? X(e) : n === "pt" ? Z(e) : n === "zh" ? Q(e) : n === "ja" ? $(e) : n === "ko" ? te(e) : n === "ru" ? ne(e) : K(e);
});
function ie() {
	return n("div", {
		className: "flex justify-end gap-3",
		children: [t("button", {
			type: "button",
			className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
			children: G()
		}), t("button", {
			type: "submit",
			className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
			children: re()
		})]
	});
}
h("en", { reload: !1 });
function ae({ children: n }) {
	return t(e, { children: n });
}
function oe() {
	return t(ae, { children: t(ie, {}) });
}
export { oe as default };
