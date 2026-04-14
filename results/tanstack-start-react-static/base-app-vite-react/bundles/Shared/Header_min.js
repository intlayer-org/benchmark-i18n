import { ChevronDown as e } from "lucide-react";
import * as t from "react";
import { useEffect as n, useLayoutEffect as r, useState as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region ../../node_modules/.bun/react-router@7.14.0+21ccd8898788a04d/node_modules/react-router/dist/development/chunk-QFMPRPBF.mjs
function s(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function c(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw Error(t);
		} catch {}
	}
}
function l({ pathname: e = "/", search: t = "", hash: n = "" }) {
	return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}
function u(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
		let r = e.indexOf("?");
		r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
	}
	return t;
}
function d(e, t, n = "/") {
	return f(e, t, n, !1);
}
function f(e, t, n, r) {
	let i = O((typeof t == "string" ? u(t) : t).pathname || "/", n);
	if (i == null) return null;
	let a = m(e);
	g(a);
	let o = null;
	for (let e = 0; o == null && e < a.length; ++e) {
		let t = D(i);
		o = T(a[e], t, r);
	}
	return o;
}
function p(e, t) {
	let { route: n, pathname: r, params: i } = e;
	return {
		id: n.id,
		pathname: r,
		params: i,
		data: t[n.id],
		loaderData: t[n.id],
		handle: n.handle
	};
}
function m(e, t = [], n = [], r = "", i = !1) {
	let a = (e, a, o = i, c) => {
		let l = {
			relativePath: c === void 0 ? e.path || "" : c,
			caseSensitive: e.caseSensitive === !0,
			childrenIndex: a,
			route: e
		};
		if (l.relativePath.startsWith("/")) {
			if (!l.relativePath.startsWith(r) && o) return;
			s(l.relativePath.startsWith(r), `Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), l.relativePath = l.relativePath.slice(r.length);
		}
		let u = j([r, l.relativePath]), d = n.concat(l);
		e.children && e.children.length > 0 && (s(e.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${u}".`), m(e.children, t, d, u, o)), !(e.path == null && !e.index) && t.push({
			path: u,
			score: ee(u, e.index),
			routesMeta: d
		});
	};
	return e.forEach((e, t) => {
		if (e.path === "" || !e.path?.includes("?")) a(e, t);
		else for (let n of h(e.path)) a(e, t, !0, n);
	}), t;
}
function h(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [a, ""] : [a];
	let o = h(r.join("/")), s = [];
	return s.push(...o.map((e) => e === "" ? a : [a, e].join("/"))), i && s.push(...o), s.map((t) => e.startsWith("/") && t === "" ? "/" : t);
}
function g(e) {
	e.sort((e, t) => e.score === t.score ? w(e.routesMeta.map((e) => e.childrenIndex), t.routesMeta.map((e) => e.childrenIndex)) : t.score - e.score);
}
var _ = /^:[\w-]+$/, v = 3, y = 2, b = 1, x = 10, S = -2, C = (e) => e === "*";
function ee(e, t) {
	let n = e.split("/"), r = n.length;
	return n.some(C) && (r += S), t && (r += y), n.filter((e) => !C(e)).reduce((e, t) => e + (_.test(t) ? v : t === "" ? b : x), r);
}
function w(e, t) {
	return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function T(e, t, n = !1) {
	let { routesMeta: r } = e, i = {}, a = "/", o = [];
	for (let e = 0; e < r.length; ++e) {
		let s = r[e], c = e === r.length - 1, l = a === "/" ? t : t.slice(a.length) || "/", u = E({
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: c
		}, l), d = s.route;
		if (!u && c && n && !r[r.length - 1].route.index && (u = E({
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: !1
		}, l)), !u) return null;
		Object.assign(i, u.params), o.push({
			params: i,
			pathname: j([a, u.pathname]),
			pathnameBase: se(j([a, u.pathnameBase])),
			route: d
		}), u.pathnameBase !== "/" && (a = j([a, u.pathnameBase]));
	}
	return o;
}
function E(e, t) {
	typeof e == "string" && (e = {
		path: e,
		caseSensitive: !1,
		end: !0
	});
	let [n, r] = te(e.path, e.caseSensitive, e.end), i = t.match(n);
	if (!i) return null;
	let a = i[0], o = a.replace(/(.)\/+$/, "$1"), s = i.slice(1);
	return {
		params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
			if (t === "*") {
				let e = s[r] || "";
				o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1");
			}
			let i = s[r];
			return n && !i ? e[t] = void 0 : e[t] = (i || "").replace(/%2F/g, "/"), e;
		}, {}),
		pathname: a,
		pathnameBase: o,
		pattern: e
	};
}
function te(e, t = !1, n = !0) {
	c(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
	let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
		if (r.push({
			paramName: t,
			isOptional: n != null
		}), n) {
			let t = a.charAt(i + e.length);
			return t && t !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
		}
		return "/([^\\/]+)";
	}).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
	return e.endsWith("*") ? (r.push({ paramName: "*" }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function D(e) {
	try {
		return e.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
	} catch (t) {
		return c(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
	}
}
function O(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
var ne = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function re(e, t = "/") {
	let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? u(e) : e, a;
	return n ? (n = n.replace(/\/\/+/g, "/"), a = n.startsWith("/") ? ie(n.substring(1), "/") : ie(n, t)) : a = t, {
		pathname: a,
		search: ce(r),
		hash: le(i)
	};
}
function ie(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return e.split("/").forEach((e) => {
		e === ".." ? n.length > 1 && n.pop() : e !== "." && n.push(e);
	}), n.length > 1 ? n.join("/") : "/";
}
function k(e, t, n, r) {
	return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ae(e) {
	return e.filter((e, t) => t === 0 || e.route.path && e.route.path.length > 0);
}
function oe(e) {
	let t = ae(e);
	return t.map((e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase);
}
function A(e, t, n, r = !1) {
	let i;
	typeof e == "string" ? i = u(e) : (i = { ...e }, s(!i.pathname || !i.pathname.includes("?"), k("?", "pathname", "search", i)), s(!i.pathname || !i.pathname.includes("#"), k("#", "pathname", "hash", i)), s(!i.search || !i.search.includes("#"), k("#", "search", "hash", i)));
	let a = e === "" || i.pathname === "", o = a ? "/" : i.pathname, c;
	if (o == null) c = n;
	else {
		let e = t.length - 1;
		if (!r && o.startsWith("..")) {
			let t = o.split("/");
			for (; t[0] === "..";) t.shift(), --e;
			i.pathname = t.join("/");
		}
		c = e >= 0 ? t[e] : "/";
	}
	let l = re(i, c), d = o && o !== "/" && o.endsWith("/"), f = (a || o === ".") && n.endsWith("/");
	return !l.pathname.endsWith("/") && (d || f) && (l.pathname += "/"), l;
}
var j = (e) => e.join("/").replace(/\/\/+/g, "/"), se = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), ce = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, le = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, ue = class {
	constructor(e, t, n, r = !1) {
		this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
	}
};
function de(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function fe(e) {
	return e.map((e) => e.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var pe = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function me(e, t) {
	let n = e;
	if (typeof n != "string" || !ne.test(n)) return {
		absoluteURL: void 0,
		isExternal: !1,
		to: n
	};
	let r = n, i = !1;
	if (pe) try {
		let e = new URL(window.location.href), r = n.startsWith("//") ? new URL(e.protocol + n) : new URL(n), a = O(r.pathname, t);
		r.origin === e.origin && a != null ? n = a + r.search + r.hash : i = !0;
	} catch {
		c(!1, `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
	}
	return {
		absoluteURL: r,
		isExternal: i,
		to: n
	};
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var he = [
	"POST",
	"PUT",
	"PATCH",
	"DELETE"
];
new Set(he);
var ge = ["GET", ...he];
new Set(ge);
var M = t.createContext(null);
M.displayName = "DataRouter";
var N = t.createContext(null);
N.displayName = "DataRouterState";
var _e = t.createContext(!1);
function ve() {
	return t.useContext(_e);
}
var ye = t.createContext({ isTransitioning: !1 });
ye.displayName = "ViewTransition";
var be = t.createContext(/* @__PURE__ */ new Map());
be.displayName = "Fetchers";
var xe = t.createContext(null);
xe.displayName = "Await";
var P = t.createContext(null);
P.displayName = "Navigation";
var F = t.createContext(null);
F.displayName = "Location";
var I = t.createContext({
	outlet: null,
	matches: [],
	isDataRoute: !1
});
I.displayName = "Route";
var L = t.createContext(null);
L.displayName = "RouteError";
var Se = "REACT_ROUTER_ERROR", Ce = "REDIRECT", we = "ROUTE_ERROR_RESPONSE";
function Te(e) {
	if (e.startsWith(`${Se}:${Ce}:{`)) try {
		let t = JSON.parse(e.slice(28));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean") return t;
	} catch {}
}
function Ee(e) {
	if (e.startsWith(`${Se}:${we}:{`)) try {
		let t = JSON.parse(e.slice(40));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string") return new ue(t.status, t.statusText, t.data);
	} catch {}
}
function De(e, { relative: n } = {}) {
	s(R(), "useHref() may be used only in the context of a <Router> component.");
	let { basename: r, navigator: i } = t.useContext(P), { hash: a, pathname: o, search: c } = B(e, { relative: n }), l = o;
	return r !== "/" && (l = o === "/" ? r : j([r, o])), i.createHref({
		pathname: l,
		search: c,
		hash: a
	});
}
function R() {
	return t.useContext(F) != null;
}
function z() {
	return s(R(), "useLocation() may be used only in the context of a <Router> component."), t.useContext(F).location;
}
var Oe = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ke(e) {
	t.useContext(P).static || t.useLayoutEffect(e);
}
function Ae() {
	let { isDataRoute: e } = t.useContext(I);
	return e ? Ke() : je();
}
function je() {
	s(R(), "useNavigate() may be used only in the context of a <Router> component.");
	let e = t.useContext(M), { basename: n, navigator: r } = t.useContext(P), { matches: i } = t.useContext(I), { pathname: a } = z(), o = JSON.stringify(oe(i)), l = t.useRef(!1);
	return ke(() => {
		l.current = !0;
	}), t.useCallback((t, i = {}) => {
		if (c(l.current, Oe), !l.current) return;
		if (typeof t == "number") {
			r.go(t);
			return;
		}
		let s = A(t, JSON.parse(o), a, i.relative === "path");
		e == null && n !== "/" && (s.pathname = s.pathname === "/" ? n : j([n, s.pathname])), (i.replace ? r.replace : r.push)(s, i.state, i);
	}, [
		n,
		r,
		o,
		a,
		e
	]);
}
t.createContext(null);
function Me() {
	let { matches: e } = t.useContext(I), n = e[e.length - 1];
	return n ? n.params : {};
}
function B(e, { relative: n } = {}) {
	let { matches: r } = t.useContext(I), { pathname: i } = z(), a = JSON.stringify(oe(r));
	return t.useMemo(() => A(e, JSON.parse(a), i, n === "path"), [
		e,
		a,
		i,
		n
	]);
}
function Ne(e, n, r) {
	s(R(), "useRoutes() may be used only in the context of a <Router> component.");
	let { navigator: i } = t.useContext(P), { matches: a } = t.useContext(I), o = a[a.length - 1], l = o ? o.params : {}, f = o ? o.pathname : "/", p = o ? o.pathnameBase : "/", m = o && o.route;
	{
		let e = m && m.path || "";
		Je(f, !m || e.endsWith("*") || e.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === "/" ? "*" : `${e}/*`}">.`);
	}
	let h = z(), g;
	if (n) {
		let e = typeof n == "string" ? u(n) : n;
		s(p === "/" || e.pathname?.startsWith(p), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${e.pathname}" was given in the \`location\` prop.`), g = e;
	} else g = h;
	let _ = g.pathname || "/", v = _;
	if (p !== "/") {
		let e = p.replace(/^\//, "").split("/");
		v = "/" + _.replace(/^\//, "").split("/").slice(e.length).join("/");
	}
	let y = d(e, { pathname: v });
	c(m || y != null, `No routes matched location "${g.pathname}${g.search}${g.hash}" `), c(y == null || y[y.length - 1].route.element !== void 0 || y[y.length - 1].route.Component !== void 0 || y[y.length - 1].route.lazy !== void 0, `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
	let b = ze(y && y.map((e) => Object.assign({}, e, {
		params: Object.assign({}, l, e.params),
		pathname: j([p, i.encodeLocation ? i.encodeLocation(e.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathname]),
		pathnameBase: e.pathnameBase === "/" ? p : j([p, i.encodeLocation ? i.encodeLocation(e.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathnameBase])
	})), a, r);
	return n && b ? /* @__PURE__ */ t.createElement(F.Provider, { value: {
		location: {
			pathname: "/",
			search: "",
			hash: "",
			state: null,
			key: "default",
			unstable_mask: void 0,
			...g
		},
		navigationType: "POP"
	} }, b) : b;
}
function Pe() {
	let e = Ge(), n = de(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, i = "rgba(200,200,200, 0.5)", a = {
		padding: "0.5rem",
		backgroundColor: i
	}, o = {
		padding: "2px 4px",
		backgroundColor: i
	}, s = null;
	return console.error("Error handled by React Router default ErrorBoundary:", e), s = /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ t.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ t.createElement("code", { style: o }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ t.createElement("code", { style: o }, "errorElement"), " prop on your route.")), /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ t.createElement("h3", { style: { fontStyle: "italic" } }, n), r ? /* @__PURE__ */ t.createElement("pre", { style: a }, r) : null, s);
}
var Fe = /* @__PURE__ */ t.createElement(Pe, null), Ie = class extends t.Component {
	constructor(e) {
		super(e), this.state = {
			location: e.location,
			revalidation: e.revalidation,
			error: e.error
		};
	}
	static getDerivedStateFromError(e) {
		return { error: e };
	}
	static getDerivedStateFromProps(e, t) {
		return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
			error: e.error,
			location: e.location,
			revalidation: e.revalidation
		} : {
			error: e.error === void 0 ? t.error : e.error,
			location: t.location,
			revalidation: e.revalidation || t.revalidation
		};
	}
	componentDidCatch(e, t) {
		this.props.onError ? this.props.onError(e, t) : console.error("React Router caught the following error during render", e);
	}
	render() {
		let e = this.state.error;
		if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
			let t = Ee(e.digest);
			t && (e = t);
		}
		let n = e === void 0 ? this.props.children : /* @__PURE__ */ t.createElement(I.Provider, { value: this.props.routeContext }, /* @__PURE__ */ t.createElement(L.Provider, {
			value: e,
			children: this.props.component
		}));
		return this.context ? /* @__PURE__ */ t.createElement(Le, { error: e }, n) : n;
	}
};
Ie.contextType = _e;
var V = /* @__PURE__ */ new WeakMap();
function Le({ children: e, error: n }) {
	let { basename: r } = t.useContext(P);
	if (typeof n == "object" && n && "digest" in n && typeof n.digest == "string") {
		let e = Te(n.digest);
		if (e) {
			let i = V.get(n);
			if (i) throw i;
			let a = me(e.location, r);
			if (pe && !V.get(n)) if (a.isExternal || e.reloadDocument) window.location.href = a.absoluteURL || a.to;
			else {
				let t = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(a.to, { replace: e.replace }));
				throw V.set(n, t), t;
			}
			return /* @__PURE__ */ t.createElement("meta", {
				httpEquiv: "refresh",
				content: `0;url=${a.absoluteURL || a.to}`
			});
		}
	}
	return e;
}
function Re({ routeContext: e, match: n, children: r }) {
	let i = t.useContext(M);
	return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ t.createElement(I.Provider, { value: e }, r);
}
function ze(e, n = [], r) {
	let i = r?.state;
	if (e == null) {
		if (!i) return null;
		if (i.errors) e = i.matches;
		else if (n.length === 0 && !i.initialized && i.matches.length > 0) e = i.matches;
		else return null;
	}
	let a = e, o = i?.errors;
	if (o != null) {
		let e = a.findIndex((e) => e.route.id && o?.[e.route.id] !== void 0);
		s(e >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`), a = a.slice(0, Math.min(a.length, e + 1));
	}
	let c = !1, l = -1;
	if (r && i) {
		c = i.renderFallback;
		for (let e = 0; e < a.length; e++) {
			let t = a[e];
			if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (l = e), t.route.id) {
				let { loaderData: e, errors: n } = i, o = t.route.loader && !e.hasOwnProperty(t.route.id) && (!n || n[t.route.id] === void 0);
				if (t.route.lazy || o) {
					r.isStatic && (c = !0), a = l >= 0 ? a.slice(0, l + 1) : [a[0]];
					break;
				}
			}
		}
	}
	let u = r?.onError, d = i && u ? (e, t) => {
		u(e, {
			location: i.location,
			params: i.matches?.[0]?.params ?? {},
			unstable_pattern: fe(i.matches),
			errorInfo: t
		});
	} : void 0;
	return a.reduceRight((e, r, s) => {
		let u, f = !1, p = null, m = null;
		i && (u = o && r.route.id ? o[r.route.id] : void 0, p = r.route.errorElement || Fe, c && (l < 0 && s === 0 ? (Je("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), f = !0, m = null) : l === s && (f = !0, m = r.route.hydrateFallbackElement || null)));
		let h = n.concat(a.slice(0, s + 1)), g = () => {
			let n;
			return n = u ? p : f ? m : r.route.Component ? /* @__PURE__ */ t.createElement(r.route.Component, null) : r.route.element ? r.route.element : e, /* @__PURE__ */ t.createElement(Re, {
				match: r,
				routeContext: {
					outlet: e,
					matches: h,
					isDataRoute: i != null
				},
				children: n
			});
		};
		return i && (r.route.ErrorBoundary || r.route.errorElement || s === 0) ? /* @__PURE__ */ t.createElement(Ie, {
			location: i.location,
			revalidation: i.revalidation,
			component: p,
			error: u,
			children: g(),
			routeContext: {
				outlet: null,
				matches: h,
				isDataRoute: !0
			},
			onError: d
		}) : g();
	}, null);
}
function H(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Be(e) {
	let n = t.useContext(M);
	return s(n, H(e)), n;
}
function U(e) {
	let n = t.useContext(N);
	return s(n, H(e)), n;
}
function Ve(e) {
	let n = t.useContext(I);
	return s(n, H(e)), n;
}
function W(e) {
	let t = Ve(e), n = t.matches[t.matches.length - 1];
	return s(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id;
}
function He() {
	return W("useRouteId");
}
function Ue() {
	return U("useNavigation").navigation;
}
function We() {
	let { matches: e, loaderData: n } = U("useMatches");
	return t.useMemo(() => e.map((e) => p(e, n)), [e, n]);
}
function Ge() {
	let e = t.useContext(L), n = U("useRouteError"), r = W("useRouteError");
	return e === void 0 ? n.errors?.[r] : e;
}
function Ke() {
	let { router: e } = Be("useNavigate"), n = W("useNavigate"), r = t.useRef(!1);
	return ke(() => {
		r.current = !0;
	}), t.useCallback(async (t, i = {}) => {
		c(r.current, Oe), r.current && (typeof t == "number" ? await e.navigate(t) : await e.navigate(t, {
			fromRouteId: n,
			...i
		}));
	}, [e, n]);
}
var qe = {};
function Je(e, t, n) {
	!t && !qe[e] && (qe[e] = !0, c(!1, n));
}
t.useOptimistic, t.memo(Ye);
function Ye({ routes: e, future: t, state: n, isStatic: r, onError: i }) {
	return Ne(e, void 0, {
		state: n,
		isStatic: r,
		onError: i,
		future: t
	});
}
function Xe({ basename: e = "/", children: n = null, location: r, navigationType: i = "POP", navigator: a, static: o = !1, unstable_useTransitions: l }) {
	s(!R(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
	let d = e.replace(/^\/*/, "/"), f = t.useMemo(() => ({
		basename: d,
		navigator: a,
		static: o,
		unstable_useTransitions: l,
		future: {}
	}), [
		d,
		a,
		o,
		l
	]);
	typeof r == "string" && (r = u(r));
	let { pathname: p = "/", search: m = "", hash: h = "", state: g = null, key: _ = "default", unstable_mask: v } = r, y = t.useMemo(() => {
		let e = O(p, d);
		return e == null ? null : {
			location: {
				pathname: e,
				search: m,
				hash: h,
				state: g,
				key: _,
				unstable_mask: v
			},
			navigationType: i
		};
	}, [
		d,
		p,
		m,
		h,
		g,
		_,
		i,
		v
	]);
	return c(y != null, `<Router basename="${d}"> is not able to match the URL "${p}${m}${h}" because it does not start with the basename, so the <Router> won't render anything.`), y == null ? null : /* @__PURE__ */ t.createElement(P.Provider, { value: f }, /* @__PURE__ */ t.createElement(F.Provider, {
		children: n,
		value: y
	}));
}
t.Component;
var G = "get", K = "application/x-www-form-urlencoded";
function q(e) {
	return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function Ze(e) {
	return q(e) && e.tagName.toLowerCase() === "button";
}
function Qe(e) {
	return q(e) && e.tagName.toLowerCase() === "form";
}
function $e(e) {
	return q(e) && e.tagName.toLowerCase() === "input";
}
function et(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function tt(e, t) {
	return e.button === 0 && (!t || t === "_self") && !et(e);
}
var J = null;
function nt() {
	if (J === null) try {
		new FormData(document.createElement("form"), 0), J = !1;
	} catch {
		J = !0;
	}
	return J;
}
var rt = /* @__PURE__ */ new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain"
]);
function Y(e) {
	return e != null && !rt.has(e) ? (c(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${K}"`), null) : e;
}
function it(e, t) {
	let n, r, i, a, o;
	if (Qe(e)) {
		let o = e.getAttribute("action");
		r = o ? O(o, t) : null, n = e.getAttribute("method") || G, i = Y(e.getAttribute("enctype")) || K, a = new FormData(e);
	} else if (Ze(e) || $e(e) && (e.type === "submit" || e.type === "image")) {
		let o = e.form;
		if (o == null) throw Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
		let s = e.getAttribute("formaction") || o.getAttribute("action");
		if (r = s ? O(s, t) : null, n = e.getAttribute("formmethod") || o.getAttribute("method") || G, i = Y(e.getAttribute("formenctype")) || Y(o.getAttribute("enctype")) || K, a = new FormData(o, e), !nt()) {
			let { name: t, type: n, value: r } = e;
			if (n === "image") {
				let e = t ? `${t}.` : "";
				a.append(`${e}x`, "0"), a.append(`${e}y`, "0");
			} else t && a.append(t, r);
		}
	} else if (q(e)) throw Error("Cannot submit element that is not <form>, <button>, or <input type=\"submit|image\">");
	else n = G, r = null, i = K, o = e;
	return a && i === "text/plain" && (o = a, a = void 0), {
		action: r,
		method: n.toLowerCase(),
		encType: i,
		formData: a,
		body: o
	};
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var at = {
	"&": "\\u0026",
	">": "\\u003e",
	"<": "\\u003c",
	"\u2028": "\\u2028",
	"\u2029": "\\u2029"
}, ot = /[&><\u2028\u2029]/g;
function st(e) {
	return e.replace(ot, (e) => at[e]);
}
function ct(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function lt(e, t, n, r) {
	let i = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
	return n ? i.pathname.endsWith("/") ? i.pathname = `${i.pathname}_.${r}` : i.pathname = `${i.pathname}.${r}` : i.pathname === "/" ? i.pathname = `_root.${r}` : t && O(i.pathname, t) === "/" ? i.pathname = `${t.replace(/\/$/, "")}/_root.${r}` : i.pathname = `${i.pathname.replace(/\/$/, "")}.${r}`, i;
}
async function ut(e, t) {
	if (e.id in t) return t[e.id];
	try {
		let n = await import(
			/* @vite-ignore */
			/* webpackIgnore: true */
			e.module
);
		return t[e.id] = n, n;
	} catch (t) {
		return console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(t), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {});
	}
}
function dt(e) {
	return e != null && typeof e.page == "string";
}
function ft(e) {
	return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function pt(e, t, n) {
	return vt((await Promise.all(e.map(async (e) => {
		let r = t.routes[e.route.id];
		if (r) {
			let e = await ut(r, n);
			return e.links ? e.links() : [];
		}
		return [];
	}))).flat(1).filter(ft).filter((e) => e.rel === "stylesheet" || e.rel === "preload").map((e) => e.rel === "stylesheet" ? {
		...e,
		rel: "prefetch",
		as: "style"
	} : {
		...e,
		rel: "prefetch"
	}));
}
function mt(e, t, n, r, i, a) {
	let o = (e, t) => n[t] ? e.route.id !== n[t].route.id : !0, s = (e, t) => n[t].pathname !== e.pathname || n[t].route.path?.endsWith("*") && n[t].params["*"] !== e.params["*"];
	return a === "assets" ? t.filter((e, t) => o(e, t) || s(e, t)) : a === "data" ? t.filter((t, a) => {
		let c = r.routes[t.route.id];
		if (!c || !c.hasLoader) return !1;
		if (o(t, a) || s(t, a)) return !0;
		if (t.route.shouldRevalidate) {
			let r = t.route.shouldRevalidate({
				currentUrl: new URL(i.pathname + i.search + i.hash, window.origin),
				currentParams: n[0]?.params || {},
				nextUrl: new URL(e, window.origin),
				nextParams: t.params,
				defaultShouldRevalidate: !0
			});
			if (typeof r == "boolean") return r;
		}
		return !0;
	}) : [];
}
function ht(e, t, { includeHydrateFallback: n } = {}) {
	return gt(e.map((e) => {
		let r = t.routes[e.route.id];
		if (!r) return [];
		let i = [r.module];
		return r.clientActionModule && (i = i.concat(r.clientActionModule)), r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)), n && r.hydrateFallbackModule && (i = i.concat(r.hydrateFallbackModule)), r.imports && (i = i.concat(r.imports)), i;
	}).flat(1));
}
function gt(e) {
	return [...new Set(e)];
}
function _t(e) {
	let t = {}, n = Object.keys(e).sort();
	for (let r of n) t[r] = e[r];
	return t;
}
function vt(e, t) {
	let n = /* @__PURE__ */ new Set(), r = new Set(t);
	return e.reduce((e, i) => {
		if (t && !dt(i) && i.as === "script" && i.href && r.has(i.href)) return e;
		let a = JSON.stringify(_t(i));
		return n.has(a) || (n.add(a), e.push({
			key: a,
			link: i
		})), e;
	}, []);
}
function yt() {
	let e = t.useContext(M);
	return ct(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
}
function bt() {
	let e = t.useContext(N);
	return ct(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e;
}
var X = t.createContext(void 0);
X.displayName = "FrameworkContext";
function xt() {
	let e = t.useContext(X);
	return ct(e, "You must render this element inside a <HydratedRouter> element"), e;
}
function St(e, n) {
	let r = t.useContext(X), [i, a] = t.useState(!1), [o, s] = t.useState(!1), { onFocus: c, onBlur: l, onMouseEnter: u, onMouseLeave: d, onTouchStart: f } = n, p = t.useRef(null);
	t.useEffect(() => {
		if (e === "render" && s(!0), e === "viewport") {
			let e = new IntersectionObserver((e) => {
				e.forEach((e) => {
					s(e.isIntersecting);
				});
			}, { threshold: .5 });
			return p.current && e.observe(p.current), () => {
				e.disconnect();
			};
		}
	}, [e]), t.useEffect(() => {
		if (i) {
			let e = setTimeout(() => {
				s(!0);
			}, 100);
			return () => {
				clearTimeout(e);
			};
		}
	}, [i]);
	let m = () => {
		a(!0);
	}, h = () => {
		a(!1), s(!1);
	};
	return r ? e === "intent" ? [
		o,
		p,
		{
			onFocus: Z(c, m),
			onBlur: Z(l, h),
			onMouseEnter: Z(u, m),
			onMouseLeave: Z(d, h),
			onTouchStart: Z(f, m)
		}
	] : [
		o,
		p,
		{}
	] : [
		!1,
		p,
		{}
	];
}
function Z(e, t) {
	return (n) => {
		e && e(n), n.defaultPrevented || t(n);
	};
}
function Ct({ page: e, ...n }) {
	let r = ve(), { router: i } = yt(), a = t.useMemo(() => d(i.routes, e, i.basename), [
		i.routes,
		e,
		i.basename
	]);
	return a ? r ? /* @__PURE__ */ t.createElement(Tt, {
		page: e,
		matches: a,
		...n
	}) : /* @__PURE__ */ t.createElement(Et, {
		page: e,
		matches: a,
		...n
	}) : null;
}
function wt(e) {
	let { manifest: n, routeModules: r } = xt(), [i, a] = t.useState([]);
	return t.useEffect(() => {
		let t = !1;
		return pt(e, n, r).then((e) => {
			t || a(e);
		}), () => {
			t = !0;
		};
	}, [
		e,
		n,
		r
	]), i;
}
function Tt({ page: e, matches: n, ...r }) {
	let i = z(), { future: a } = xt(), { basename: o } = yt(), s = t.useMemo(() => {
		if (e === i.pathname + i.search + i.hash) return [];
		let t = lt(e, o, a.unstable_trailingSlashAwareDataRequests, "rsc"), r = !1, s = [];
		for (let e of n) typeof e.route.shouldRevalidate == "function" ? r = !0 : s.push(e.route.id);
		return r && s.length > 0 && t.searchParams.set("_routes", s.join(",")), [t.pathname + t.search];
	}, [
		o,
		a.unstable_trailingSlashAwareDataRequests,
		e,
		i,
		n
	]);
	return /* @__PURE__ */ t.createElement(t.Fragment, null, s.map((e) => /* @__PURE__ */ t.createElement("link", {
		key: e,
		rel: "prefetch",
		as: "fetch",
		href: e,
		...r
	})));
}
function Et({ page: e, matches: n, ...r }) {
	let i = z(), { future: a, manifest: o, routeModules: s } = xt(), { basename: c } = yt(), { loaderData: l, matches: u } = bt(), d = t.useMemo(() => mt(e, n, u, o, i, "data"), [
		e,
		n,
		u,
		o,
		i
	]), f = t.useMemo(() => mt(e, n, u, o, i, "assets"), [
		e,
		n,
		u,
		o,
		i
	]), p = t.useMemo(() => {
		if (e === i.pathname + i.search + i.hash) return [];
		let t = /* @__PURE__ */ new Set(), r = !1;
		if (n.forEach((e) => {
			let n = o.routes[e.route.id];
			!n || !n.hasLoader || (!d.some((t) => t.route.id === e.route.id) && e.route.id in l && s[e.route.id]?.shouldRevalidate || n.hasClientLoader ? r = !0 : t.add(e.route.id));
		}), t.size === 0) return [];
		let u = lt(e, c, a.unstable_trailingSlashAwareDataRequests, "data");
		return r && t.size > 0 && u.searchParams.set("_routes", n.filter((e) => t.has(e.route.id)).map((e) => e.route.id).join(",")), [u.pathname + u.search];
	}, [
		c,
		a.unstable_trailingSlashAwareDataRequests,
		l,
		i,
		o,
		d,
		n,
		e,
		s
	]), m = t.useMemo(() => ht(f, o), [f, o]), h = wt(f);
	return /* @__PURE__ */ t.createElement(t.Fragment, null, p.map((e) => /* @__PURE__ */ t.createElement("link", {
		key: e,
		rel: "prefetch",
		as: "fetch",
		href: e,
		...r
	})), m.map((e) => /* @__PURE__ */ t.createElement("link", {
		key: e,
		rel: "modulepreload",
		href: e,
		...r
	})), h.map(({ key: e, link: n }) => /* @__PURE__ */ t.createElement("link", {
		key: e,
		nonce: r.nonce,
		...n,
		crossOrigin: n.crossOrigin ?? r.crossOrigin
	})));
}
function Dt(...e) {
	return (t) => {
		e.forEach((e) => {
			typeof e == "function" ? e(t) : e != null && (e.current = t);
		});
	};
}
t.Component;
var Ot = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
try {
	Ot && (window.__reactRouterVersion = "7.14.0");
} catch {}
function kt({ basename: e, children: n, history: r, unstable_useTransitions: i }) {
	let [a, o] = t.useState({
		action: r.action,
		location: r.location
	}), s = t.useCallback((e) => {
		i === !1 ? o(e) : t.startTransition(() => o(e));
	}, [i]);
	return t.useLayoutEffect(() => r.listen(s), [r, s]), /* @__PURE__ */ t.createElement(Xe, {
		basename: e,
		children: n,
		location: a.location,
		navigationType: a.action,
		navigator: r,
		unstable_useTransitions: i
	});
}
kt.displayName = "unstable_HistoryRouter";
var At = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Q = t.forwardRef(function({ onClick: e, discover: n = "render", prefetch: r = "none", relative: i, reloadDocument: a, replace: o, unstable_mask: s, state: c, target: l, to: u, preventScrollReset: d, viewTransition: f, unstable_defaultShouldRevalidate: p, ...m }, h) {
	let { basename: g, navigator: _, unstable_useTransitions: v } = t.useContext(P), y = typeof u == "string" && At.test(u), b = me(u, g);
	u = b.to;
	let x = De(u, { relative: i }), S = z(), C = null;
	if (s) {
		let e = A(s, [], S.unstable_mask ? S.unstable_mask.pathname : "/", !0);
		g !== "/" && (e.pathname = e.pathname === "/" ? g : j([g, e.pathname])), C = _.createHref(e);
	}
	let [ee, w, T] = St(r, m), E = Lt(u, {
		replace: o,
		unstable_mask: s,
		state: c,
		target: l,
		preventScrollReset: d,
		relative: i,
		viewTransition: f,
		unstable_defaultShouldRevalidate: p,
		unstable_useTransitions: v
	});
	function te(t) {
		e && e(t), t.defaultPrevented || E(t);
	}
	let D = !(b.isExternal || a), O = /* @__PURE__ */ t.createElement("a", {
		...m,
		...T,
		href: (D ? C : void 0) || b.absoluteURL || x,
		onClick: D ? te : e,
		ref: Dt(h, w),
		target: l,
		"data-discover": !y && n === "render" ? "true" : void 0
	});
	return ee && !y ? /* @__PURE__ */ t.createElement(t.Fragment, null, O, /* @__PURE__ */ t.createElement(Ct, { page: x })) : O;
});
Q.displayName = "Link";
var jt = t.forwardRef(function({ "aria-current": e = "page", caseSensitive: n = !1, className: r = "", end: i = !1, style: a, to: o, viewTransition: s, children: c, ...l }, u) {
	let d = B(o, { relative: l.relative }), f = z(), p = t.useContext(N), { navigator: m, basename: h } = t.useContext(P), g = p != null && Kt(d) && s === !0, _ = m.encodeLocation ? m.encodeLocation(d).pathname : d.pathname, v = f.pathname, y = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
	n || (v = v.toLowerCase(), y = y ? y.toLowerCase() : null, _ = _.toLowerCase()), y && h && (y = O(y, h) || y);
	let b = _ !== "/" && _.endsWith("/") ? _.length - 1 : _.length, x = v === _ || !i && v.startsWith(_) && v.charAt(b) === "/", S = y != null && (y === _ || !i && y.startsWith(_) && y.charAt(_.length) === "/"), C = {
		isActive: x,
		isPending: S,
		isTransitioning: g
	}, ee = x ? e : void 0, w;
	w = typeof r == "function" ? r(C) : [
		r,
		x ? "active" : null,
		S ? "pending" : null,
		g ? "transitioning" : null
	].filter(Boolean).join(" ");
	let T = typeof a == "function" ? a(C) : a;
	return /* @__PURE__ */ t.createElement(Q, {
		...l,
		"aria-current": ee,
		className: w,
		ref: u,
		style: T,
		to: o,
		viewTransition: s
	}, typeof c == "function" ? c(C) : c);
});
jt.displayName = "NavLink";
var Mt = t.forwardRef(({ discover: e = "render", fetcherKey: n, navigate: r, reloadDocument: i, replace: a, state: o, method: s = G, action: c, onSubmit: l, relative: u, preventScrollReset: d, viewTransition: f, unstable_defaultShouldRevalidate: p, ...m }, h) => {
	let { unstable_useTransitions: g } = t.useContext(P), _ = Bt(), v = Vt(c, { relative: u }), y = s.toLowerCase() === "get" ? "get" : "post", b = typeof c == "string" && At.test(c);
	return /* @__PURE__ */ t.createElement("form", {
		ref: h,
		method: y,
		action: v,
		onSubmit: i ? l : (e) => {
			if (l && l(e), e.defaultPrevented) return;
			e.preventDefault();
			let i = e.nativeEvent.submitter, c = i?.getAttribute("formmethod") || s, m = () => _(i || e.currentTarget, {
				fetcherKey: n,
				method: c,
				navigate: r,
				replace: a,
				state: o,
				relative: u,
				preventScrollReset: d,
				viewTransition: f,
				unstable_defaultShouldRevalidate: p
			});
			g && r !== !1 ? t.startTransition(() => m()) : m();
		},
		...m,
		"data-discover": !b && e === "render" ? "true" : void 0
	});
});
Mt.displayName = "Form";
function Nt({ getKey: e, storageKey: n, ...r }) {
	let i = t.useContext(X), { basename: a } = t.useContext(P), o = z(), s = We();
	Wt({
		getKey: e,
		storageKey: n
	});
	let c = t.useMemo(() => {
		if (!i || !e) return null;
		let t = Ut(o, s, a, e);
		return t === o.key ? null : t;
	}, []);
	if (!i || i.isSpaMode) return null;
	let l = ((e, t) => {
		if (!window.history.state || !window.history.state.key) {
			let e = Math.random().toString(32).slice(2);
			window.history.replaceState({ key: e }, "");
		}
		try {
			let n = JSON.parse(sessionStorage.getItem(e) || "{}")[t || window.history.state.key];
			typeof n == "number" && window.scrollTo(0, n);
		} catch (t) {
			console.error(t), sessionStorage.removeItem(e);
		}
	}).toString();
	return /* @__PURE__ */ t.createElement("script", {
		...r,
		suppressHydrationWarning: !0,
		dangerouslySetInnerHTML: { __html: `(${l})(${st(JSON.stringify(n || Ht))}, ${st(JSON.stringify(c))})` }
	});
}
Nt.displayName = "ScrollRestoration";
function Pt(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ft(e) {
	let n = t.useContext(M);
	return s(n, Pt(e)), n;
}
function It(e) {
	let n = t.useContext(N);
	return s(n, Pt(e)), n;
}
function Lt(e, { target: n, replace: r, unstable_mask: i, state: a, preventScrollReset: o, relative: s, viewTransition: c, unstable_defaultShouldRevalidate: u, unstable_useTransitions: d } = {}) {
	let f = Ae(), p = z(), m = B(e, { relative: s });
	return t.useCallback((h) => {
		if (tt(h, n)) {
			h.preventDefault();
			let n = r === void 0 ? l(p) === l(m) : r, g = () => f(e, {
				replace: n,
				unstable_mask: i,
				state: a,
				preventScrollReset: o,
				relative: s,
				viewTransition: c,
				unstable_defaultShouldRevalidate: u
			});
			d ? t.startTransition(() => g()) : g();
		}
	}, [
		p,
		f,
		m,
		r,
		i,
		a,
		n,
		e,
		o,
		s,
		c,
		u,
		d
	]);
}
var Rt = 0, zt = () => `__${String(++Rt)}__`;
function Bt() {
	let { router: e } = Ft("useSubmit"), { basename: n } = t.useContext(P), r = He(), i = e.fetch, a = e.navigate;
	return t.useCallback(async (e, t = {}) => {
		let { action: o, method: s, encType: c, formData: l, body: u } = it(e, n);
		t.navigate === !1 ? await i(t.fetcherKey || zt(), r, t.action || o, {
			unstable_defaultShouldRevalidate: t.unstable_defaultShouldRevalidate,
			preventScrollReset: t.preventScrollReset,
			formData: l,
			body: u,
			formMethod: t.method || s,
			formEncType: t.encType || c,
			flushSync: t.flushSync
		}) : await a(t.action || o, {
			unstable_defaultShouldRevalidate: t.unstable_defaultShouldRevalidate,
			preventScrollReset: t.preventScrollReset,
			formData: l,
			body: u,
			formMethod: t.method || s,
			formEncType: t.encType || c,
			replace: t.replace,
			state: t.state,
			fromRouteId: r,
			flushSync: t.flushSync,
			viewTransition: t.viewTransition
		});
	}, [
		i,
		a,
		n,
		r
	]);
}
function Vt(e, { relative: n } = {}) {
	let { basename: r } = t.useContext(P), i = t.useContext(I);
	s(i, "useFormAction must be used inside a RouteContext");
	let [a] = i.matches.slice(-1), o = { ...B(e || ".", { relative: n }) }, c = z();
	if (e == null) {
		o.search = c.search;
		let e = new URLSearchParams(o.search), t = e.getAll("index");
		if (t.some((e) => e === "")) {
			e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t));
			let n = e.toString();
			o.search = n ? `?${n}` : "";
		}
	}
	return (!e || e === ".") && a.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (o.pathname = o.pathname === "/" ? r : j([r, o.pathname])), l(o);
}
var Ht = "react-router-scroll-positions", $ = {};
function Ut(e, t, n, r) {
	let i = null;
	return r && (i = r(n === "/" ? e : {
		...e,
		pathname: O(e.pathname, n) || e.pathname
	}, t)), i ??= e.key, i;
}
function Wt({ getKey: e, storageKey: n } = {}) {
	let { router: r } = Ft("useScrollRestoration"), { restoreScrollPosition: i, preventScrollReset: a } = It("useScrollRestoration"), { basename: o } = t.useContext(P), s = z(), l = We(), u = Ue();
	t.useEffect(() => (window.history.scrollRestoration = "manual", () => {
		window.history.scrollRestoration = "auto";
	}), []), Gt(t.useCallback(() => {
		if (u.state === "idle") {
			let t = Ut(s, l, o, e);
			$[t] = window.scrollY;
		}
		try {
			sessionStorage.setItem(n || Ht, JSON.stringify($));
		} catch (e) {
			c(!1, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`);
		}
		window.history.scrollRestoration = "auto";
	}, [
		u.state,
		e,
		o,
		s,
		l,
		n
	])), typeof document < "u" && (t.useLayoutEffect(() => {
		try {
			let e = sessionStorage.getItem(n || Ht);
			e && ($ = JSON.parse(e));
		} catch {}
	}, [n]), t.useLayoutEffect(() => {
		let t = r?.enableScrollRestoration($, () => window.scrollY, e ? (t, n) => Ut(t, n, o, e) : void 0);
		return () => t && t();
	}, [
		r,
		o,
		e
	]), t.useLayoutEffect(() => {
		if (i !== !1) {
			if (typeof i == "number") {
				window.scrollTo(0, i);
				return;
			}
			try {
				if (s.hash) {
					let e = document.getElementById(decodeURIComponent(s.hash.slice(1)));
					if (e) {
						e.scrollIntoView();
						return;
					}
				}
			} catch {
				c(!1, `"${s.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`);
			}
			a !== !0 && window.scrollTo(0, 0);
		}
	}, [
		s,
		i,
		a
	]));
}
function Gt(e, n) {
	let { capture: r } = n || {};
	t.useEffect(() => {
		let t = r == null ? void 0 : { capture: r };
		return window.addEventListener("pagehide", e, t), () => {
			window.removeEventListener("pagehide", e, t);
		};
	}, [e, r]);
}
function Kt(e, { relative: n } = {}) {
	let r = t.useContext(ye);
	s(r != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
	let { basename: i } = Ft("useViewTransitionState"), a = B(e, { relative: n });
	if (!r.isTransitioning) return !1;
	let o = O(r.currentLocation.pathname, i) || r.currentLocation.pathname, c = O(r.nextLocation.pathname, i) || r.nextLocation.pathname;
	return E(a.pathname, c) != null || E(a.pathname, o) != null;
}
//#endregion
//#region src/hooks/usePerformanceMeasure.ts
function qt(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), r(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
//#endregion
//#region src/i18n/config.ts
var Jt = [
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
], Yt = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
};
//#endregion
//#region src/components/LocaleSwitcher.tsx
function Xt() {
	let { locale: e = "en" } = Me(), t = Ae(), n = z(), r = (e) => {
		t(n.pathname.replace(/^\/[^/]+/, `/${e}`) + n.search + n.hash);
	};
	return /* @__PURE__ */ a("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ a("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: Jt.map((e) => /* @__PURE__ */ a("option", {
				value: e,
				children: Yt(e)
			}, e))
		})
	});
}
//#endregion
//#region src/components/ThemeToggle.tsx
function Zt() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function Qt(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function $t() {
	let [e, t] = i("auto");
	n(() => {
		let e = Zt();
		t(e), Qt(e);
	}, []), n(() => {
		if (e !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => Qt("auto");
		return t.addEventListener("change", n), () => {
			t.removeEventListener("change", n);
		};
	}, [e]);
	function r() {
		let n = e === "light" ? "dark" : e === "dark" ? "auto" : "light";
		t(n), Qt(n), window.localStorage.setItem("theme", n);
	}
	let o = e === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${e}. Click to switch mode.`;
	return /* @__PURE__ */ a("button", {
		type: "button",
		onClick: r,
		"aria-label": o,
		title: o,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e === "auto" ? "Theme: Auto" : e === "dark" ? "Theme: Dark" : "Theme: Light"
	});
}
//#endregion
//#region src/components/Header.tsx
function en() {
	qt("Header");
	let [t, n] = i(!1), { locale: r = "en" } = Me(), s = r, c = [
		{
			to: `/${s}/products`,
			label: "Products"
		},
		{
			to: `/${s}/pricing`,
			label: "Pricing"
		},
		{
			to: `/${s}/team`,
			label: "Team"
		},
		{
			to: `/${s}/blog`,
			label: "Blog"
		},
		{
			to: `/${s}/careers`,
			label: "Careers"
		},
		{
			to: `/${s}/faq`,
			label: "FAQ"
		},
		{
			to: `/${s}/contact`,
			label: "Contact"
		},
		{
			to: `/${s}/settings`,
			label: "Settings"
		}
	];
	return /* @__PURE__ */ a("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: /* @__PURE__ */ o("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [/* @__PURE__ */ o("div", {
				className: "flex items-center gap-8",
				children: [/* @__PURE__ */ a(Q, {
					to: `/${s}`,
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), /* @__PURE__ */ o("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						/* @__PURE__ */ a(jt, {
							to: `/${s}`,
							end: !0,
							className: ({ isActive: e }) => `nav-link${e ? " is-active" : ""}`,
							children: "Home"
						}),
						/* @__PURE__ */ a(jt, {
							to: `/${s}/about`,
							className: ({ isActive: e }) => `nav-link${e ? " is-active" : ""}`,
							children: "Methodology"
						}),
						/* @__PURE__ */ o("div", {
							className: "relative",
							children: [/* @__PURE__ */ o("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: ["Mock Pages", /* @__PURE__ */ a(e, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								})]
							}), t && /* @__PURE__ */ a("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								children: /* @__PURE__ */ a("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: c.map((e) => /* @__PURE__ */ a(Q, {
										to: e.to,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => n(!1),
										children: e.label
									}, e.to))
								})
							})]
						})
					]
				})]
			}), /* @__PURE__ */ o("div", {
				className: "flex items-center gap-4",
				children: [
					/* @__PURE__ */ o("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [/* @__PURE__ */ a("span", {
							className: "sr-only",
							children: "Go to GitHub"
						}), /* @__PURE__ */ a("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: /* @__PURE__ */ a("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					/* @__PURE__ */ a(Xt, {}),
					/* @__PURE__ */ a($t, {})
				]
			})]
		})
	});
}
//#endregion
export { en as default };
