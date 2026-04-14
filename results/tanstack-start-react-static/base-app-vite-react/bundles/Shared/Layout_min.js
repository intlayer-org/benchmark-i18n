import * as e from "react";
import { Profiler as t, useEffect as n, useLayoutEffect as r, useState as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
import { ChevronDown as s } from "lucide-react";
//#region ../../node_modules/.bun/react-router@7.14.0+21ccd8898788a04d/node_modules/react-router/dist/development/chunk-QFMPRPBF.mjs
function c(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function l(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw Error(t);
		} catch {}
	}
}
function u({ pathname: e = "/", search: t = "", hash: n = "" }) {
	return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}
function d(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
		let r = e.indexOf("?");
		r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
	}
	return t;
}
function f(e, t, n = "/") {
	return p(e, t, n, !1);
}
function p(e, t, n, r) {
	let i = O((typeof t == "string" ? d(t) : t).pathname || "/", n);
	if (i == null) return null;
	let a = h(e);
	_(a);
	let o = null;
	for (let e = 0; o == null && e < a.length; ++e) {
		let t = ne(i);
		o = te(a[e], t, r);
	}
	return o;
}
function m(e, t) {
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
function h(e, t = [], n = [], r = "", i = !1) {
	let a = (e, a, o = i, s) => {
		let l = {
			relativePath: s === void 0 ? e.path || "" : s,
			caseSensitive: e.caseSensitive === !0,
			childrenIndex: a,
			route: e
		};
		if (l.relativePath.startsWith("/")) {
			if (!l.relativePath.startsWith(r) && o) return;
			c(l.relativePath.startsWith(r), `Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), l.relativePath = l.relativePath.slice(r.length);
		}
		let u = k([r, l.relativePath]), d = n.concat(l);
		e.children && e.children.length > 0 && (c(e.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${u}".`), h(e.children, t, d, u, o)), !(e.path == null && !e.index) && t.push({
			path: u,
			score: T(u, e.index),
			routesMeta: d
		});
	};
	return e.forEach((e, t) => {
		if (e.path === "" || !e.path?.includes("?")) a(e, t);
		else for (let n of g(e.path)) a(e, t, !0, n);
	}), t;
}
function g(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [a, ""] : [a];
	let o = g(r.join("/")), s = [];
	return s.push(...o.map((e) => e === "" ? a : [a, e].join("/"))), i && s.push(...o), s.map((t) => e.startsWith("/") && t === "" ? "/" : t);
}
function _(e) {
	e.sort((e, t) => e.score === t.score ? ee(e.routesMeta.map((e) => e.childrenIndex), t.routesMeta.map((e) => e.childrenIndex)) : t.score - e.score);
}
var v = /^:[\w-]+$/, y = 3, b = 2, x = 1, S = 10, C = -2, w = (e) => e === "*";
function T(e, t) {
	let n = e.split("/"), r = n.length;
	return n.some(w) && (r += C), t && (r += b), n.filter((e) => !w(e)).reduce((e, t) => e + (v.test(t) ? y : t === "" ? x : S), r);
}
function ee(e, t) {
	return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function te(e, t, n = !1) {
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
			pathname: k([a, u.pathname]),
			pathnameBase: ue(k([a, u.pathnameBase])),
			route: d
		}), u.pathnameBase !== "/" && (a = k([a, u.pathnameBase]));
	}
	return o;
}
function E(e, t) {
	typeof e == "string" && (e = {
		path: e,
		caseSensitive: !1,
		end: !0
	});
	let [n, r] = D(e.path, e.caseSensitive, e.end), i = t.match(n);
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
function D(e, t = !1, n = !0) {
	l(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
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
function ne(e) {
	try {
		return e.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
	} catch (t) {
		return l(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
	}
}
function O(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
var re = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function ie(e, t = "/") {
	let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? d(e) : e, a;
	return n ? (n = n.replace(/\/\/+/g, "/"), a = n.startsWith("/") ? ae(n.substring(1), "/") : ae(n, t)) : a = t, {
		pathname: a,
		search: de(r),
		hash: fe(i)
	};
}
function ae(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return e.split("/").forEach((e) => {
		e === ".." ? n.length > 1 && n.pop() : e !== "." && n.push(e);
	}), n.length > 1 ? n.join("/") : "/";
}
function oe(e, t, n, r) {
	return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function se(e) {
	return e.filter((e, t) => t === 0 || e.route.path && e.route.path.length > 0);
}
function ce(e) {
	let t = se(e);
	return t.map((e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase);
}
function le(e, t, n, r = !1) {
	let i;
	typeof e == "string" ? i = d(e) : (i = { ...e }, c(!i.pathname || !i.pathname.includes("?"), oe("?", "pathname", "search", i)), c(!i.pathname || !i.pathname.includes("#"), oe("#", "pathname", "hash", i)), c(!i.search || !i.search.includes("#"), oe("#", "search", "hash", i)));
	let a = e === "" || i.pathname === "", o = a ? "/" : i.pathname, s;
	if (o == null) s = n;
	else {
		let e = t.length - 1;
		if (!r && o.startsWith("..")) {
			let t = o.split("/");
			for (; t[0] === "..";) t.shift(), --e;
			i.pathname = t.join("/");
		}
		s = e >= 0 ? t[e] : "/";
	}
	let l = ie(i, s), u = o && o !== "/" && o.endsWith("/"), f = (a || o === ".") && n.endsWith("/");
	return !l.pathname.endsWith("/") && (u || f) && (l.pathname += "/"), l;
}
var k = (e) => e.join("/").replace(/\/\/+/g, "/"), ue = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), de = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, fe = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, pe = class {
	constructor(e, t, n, r = !1) {
		this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
	}
};
function me(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function he(e) {
	return e.map((e) => e.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var ge = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function _e(e, t) {
	let n = e;
	if (typeof n != "string" || !re.test(n)) return {
		absoluteURL: void 0,
		isExternal: !1,
		to: n
	};
	let r = n, i = !1;
	if (ge) try {
		let e = new URL(window.location.href), r = n.startsWith("//") ? new URL(e.protocol + n) : new URL(n), a = O(r.pathname, t);
		r.origin === e.origin && a != null ? n = a + r.search + r.hash : i = !0;
	} catch {
		l(!1, `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
	}
	return {
		absoluteURL: r,
		isExternal: i,
		to: n
	};
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var ve = [
	"POST",
	"PUT",
	"PATCH",
	"DELETE"
];
new Set(ve);
var ye = ["GET", ...ve];
new Set(ye);
var A = e.createContext(null);
A.displayName = "DataRouter";
var j = e.createContext(null);
j.displayName = "DataRouterState";
var be = e.createContext(!1);
function xe() {
	return e.useContext(be);
}
var Se = e.createContext({ isTransitioning: !1 });
Se.displayName = "ViewTransition";
var Ce = e.createContext(/* @__PURE__ */ new Map());
Ce.displayName = "Fetchers";
var we = e.createContext(null);
we.displayName = "Await";
var M = e.createContext(null);
M.displayName = "Navigation";
var N = e.createContext(null);
N.displayName = "Location";
var P = e.createContext({
	outlet: null,
	matches: [],
	isDataRoute: !1
});
P.displayName = "Route";
var Te = e.createContext(null);
Te.displayName = "RouteError";
var Ee = "REACT_ROUTER_ERROR", De = "REDIRECT", Oe = "ROUTE_ERROR_RESPONSE";
function ke(e) {
	if (e.startsWith(`${Ee}:${De}:{`)) try {
		let t = JSON.parse(e.slice(28));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean") return t;
	} catch {}
}
function Ae(e) {
	if (e.startsWith(`${Ee}:${Oe}:{`)) try {
		let t = JSON.parse(e.slice(40));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string") return new pe(t.status, t.statusText, t.data);
	} catch {}
}
function je(t, { relative: n } = {}) {
	c(F(), "useHref() may be used only in the context of a <Router> component.");
	let { basename: r, navigator: i } = e.useContext(M), { hash: a, pathname: o, search: s } = R(t, { relative: n }), l = o;
	return r !== "/" && (l = o === "/" ? r : k([r, o])), i.createHref({
		pathname: l,
		search: s,
		hash: a
	});
}
function F() {
	return e.useContext(N) != null;
}
function I() {
	return c(F(), "useLocation() may be used only in the context of a <Router> component."), e.useContext(N).location;
}
var Me = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Ne(t) {
	e.useContext(M).static || e.useLayoutEffect(t);
}
function Pe() {
	let { isDataRoute: t } = e.useContext(P);
	return t ? Ze() : Fe();
}
function Fe() {
	c(F(), "useNavigate() may be used only in the context of a <Router> component.");
	let t = e.useContext(A), { basename: n, navigator: r } = e.useContext(M), { matches: i } = e.useContext(P), { pathname: a } = I(), o = JSON.stringify(ce(i)), s = e.useRef(!1);
	return Ne(() => {
		s.current = !0;
	}), e.useCallback((e, i = {}) => {
		if (l(s.current, Me), !s.current) return;
		if (typeof e == "number") {
			r.go(e);
			return;
		}
		let c = le(e, JSON.parse(o), a, i.relative === "path");
		t == null && n !== "/" && (c.pathname = c.pathname === "/" ? n : k([n, c.pathname])), (i.replace ? r.replace : r.push)(c, i.state, i);
	}, [
		n,
		r,
		o,
		a,
		t
	]);
}
var Ie = e.createContext(null);
function Le(t) {
	let n = e.useContext(P).outlet;
	return e.useMemo(() => n && /* @__PURE__ */ e.createElement(Ie.Provider, { value: t }, n), [n, t]);
}
function L() {
	let { matches: t } = e.useContext(P), n = t[t.length - 1];
	return n ? n.params : {};
}
function R(t, { relative: n } = {}) {
	let { matches: r } = e.useContext(P), { pathname: i } = I(), a = JSON.stringify(ce(r));
	return e.useMemo(() => le(t, JSON.parse(a), i, n === "path"), [
		t,
		a,
		i,
		n
	]);
}
function Re(t, n, r) {
	c(F(), "useRoutes() may be used only in the context of a <Router> component.");
	let { navigator: i } = e.useContext(M), { matches: a } = e.useContext(P), o = a[a.length - 1], s = o ? o.params : {}, u = o ? o.pathname : "/", p = o ? o.pathnameBase : "/", m = o && o.route;
	{
		let e = m && m.path || "";
		$e(u, !m || e.endsWith("*") || e.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === "/" ? "*" : `${e}/*`}">.`);
	}
	let h = I(), g;
	if (n) {
		let e = typeof n == "string" ? d(n) : n;
		c(p === "/" || e.pathname?.startsWith(p), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${e.pathname}" was given in the \`location\` prop.`), g = e;
	} else g = h;
	let _ = g.pathname || "/", v = _;
	if (p !== "/") {
		let e = p.replace(/^\//, "").split("/");
		v = "/" + _.replace(/^\//, "").split("/").slice(e.length).join("/");
	}
	let y = f(t, { pathname: v });
	l(m || y != null, `No routes matched location "${g.pathname}${g.search}${g.hash}" `), l(y == null || y[y.length - 1].route.element !== void 0 || y[y.length - 1].route.Component !== void 0 || y[y.length - 1].route.lazy !== void 0, `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
	let b = We(y && y.map((e) => Object.assign({}, e, {
		params: Object.assign({}, s, e.params),
		pathname: k([p, i.encodeLocation ? i.encodeLocation(e.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathname]),
		pathnameBase: e.pathnameBase === "/" ? p : k([p, i.encodeLocation ? i.encodeLocation(e.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathnameBase])
	})), a, r);
	return n && b ? /* @__PURE__ */ e.createElement(N.Provider, { value: {
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
function ze() {
	let t = Xe(), n = me(t) ? `${t.status} ${t.statusText}` : t instanceof Error ? t.message : JSON.stringify(t), r = t instanceof Error ? t.stack : null, i = "rgba(200,200,200, 0.5)", a = {
		padding: "0.5rem",
		backgroundColor: i
	}, o = {
		padding: "2px 4px",
		backgroundColor: i
	}, s = null;
	return console.error("Error handled by React Router default ErrorBoundary:", t), s = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ e.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ e.createElement("code", { style: o }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ e.createElement("code", { style: o }, "errorElement"), " prop on your route.")), /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ e.createElement("h3", { style: { fontStyle: "italic" } }, n), r ? /* @__PURE__ */ e.createElement("pre", { style: a }, r) : null, s);
}
var Be = /* @__PURE__ */ e.createElement(ze, null), Ve = class extends e.Component {
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
		let t = this.state.error;
		if (this.context && typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
			let e = Ae(t.digest);
			e && (t = e);
		}
		let n = t === void 0 ? this.props.children : /* @__PURE__ */ e.createElement(P.Provider, { value: this.props.routeContext }, /* @__PURE__ */ e.createElement(Te.Provider, {
			value: t,
			children: this.props.component
		}));
		return this.context ? /* @__PURE__ */ e.createElement(He, { error: t }, n) : n;
	}
};
Ve.contextType = be;
var z = /* @__PURE__ */ new WeakMap();
function He({ children: t, error: n }) {
	let { basename: r } = e.useContext(M);
	if (typeof n == "object" && n && "digest" in n && typeof n.digest == "string") {
		let t = ke(n.digest);
		if (t) {
			let i = z.get(n);
			if (i) throw i;
			let a = _e(t.location, r);
			if (ge && !z.get(n)) if (a.isExternal || t.reloadDocument) window.location.href = a.absoluteURL || a.to;
			else {
				let e = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(a.to, { replace: t.replace }));
				throw z.set(n, e), e;
			}
			return /* @__PURE__ */ e.createElement("meta", {
				httpEquiv: "refresh",
				content: `0;url=${a.absoluteURL || a.to}`
			});
		}
	}
	return t;
}
function Ue({ routeContext: t, match: n, children: r }) {
	let i = e.useContext(A);
	return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ e.createElement(P.Provider, { value: t }, r);
}
function We(t, n = [], r) {
	let i = r?.state;
	if (t == null) {
		if (!i) return null;
		if (i.errors) t = i.matches;
		else if (n.length === 0 && !i.initialized && i.matches.length > 0) t = i.matches;
		else return null;
	}
	let a = t, o = i?.errors;
	if (o != null) {
		let e = a.findIndex((e) => e.route.id && o?.[e.route.id] !== void 0);
		c(e >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`), a = a.slice(0, Math.min(a.length, e + 1));
	}
	let s = !1, l = -1;
	if (r && i) {
		s = i.renderFallback;
		for (let e = 0; e < a.length; e++) {
			let t = a[e];
			if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (l = e), t.route.id) {
				let { loaderData: e, errors: n } = i, o = t.route.loader && !e.hasOwnProperty(t.route.id) && (!n || n[t.route.id] === void 0);
				if (t.route.lazy || o) {
					r.isStatic && (s = !0), a = l >= 0 ? a.slice(0, l + 1) : [a[0]];
					break;
				}
			}
		}
	}
	let u = r?.onError, d = i && u ? (e, t) => {
		u(e, {
			location: i.location,
			params: i.matches?.[0]?.params ?? {},
			unstable_pattern: he(i.matches),
			errorInfo: t
		});
	} : void 0;
	return a.reduceRight((t, r, c) => {
		let u, f = !1, p = null, m = null;
		i && (u = o && r.route.id ? o[r.route.id] : void 0, p = r.route.errorElement || Be, s && (l < 0 && c === 0 ? ($e("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), f = !0, m = null) : l === c && (f = !0, m = r.route.hydrateFallbackElement || null)));
		let h = n.concat(a.slice(0, c + 1)), g = () => {
			let n;
			return n = u ? p : f ? m : r.route.Component ? /* @__PURE__ */ e.createElement(r.route.Component, null) : r.route.element ? r.route.element : t, /* @__PURE__ */ e.createElement(Ue, {
				match: r,
				routeContext: {
					outlet: t,
					matches: h,
					isDataRoute: i != null
				},
				children: n
			});
		};
		return i && (r.route.ErrorBoundary || r.route.errorElement || c === 0) ? /* @__PURE__ */ e.createElement(Ve, {
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
function B(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ge(t) {
	let n = e.useContext(A);
	return c(n, B(t)), n;
}
function V(t) {
	let n = e.useContext(j);
	return c(n, B(t)), n;
}
function Ke(t) {
	let n = e.useContext(P);
	return c(n, B(t)), n;
}
function H(e) {
	let t = Ke(e), n = t.matches[t.matches.length - 1];
	return c(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id;
}
function qe() {
	return H("useRouteId");
}
function Je() {
	return V("useNavigation").navigation;
}
function Ye() {
	let { matches: t, loaderData: n } = V("useMatches");
	return e.useMemo(() => t.map((e) => m(e, n)), [t, n]);
}
function Xe() {
	let t = e.useContext(Te), n = V("useRouteError"), r = H("useRouteError");
	return t === void 0 ? n.errors?.[r] : t;
}
function Ze() {
	let { router: t } = Ge("useNavigate"), n = H("useNavigate"), r = e.useRef(!1);
	return Ne(() => {
		r.current = !0;
	}), e.useCallback(async (e, i = {}) => {
		l(r.current, Me), r.current && (typeof e == "number" ? await t.navigate(e) : await t.navigate(e, {
			fromRouteId: n,
			...i
		}));
	}, [t, n]);
}
var Qe = {};
function $e(e, t, n) {
	!t && !Qe[e] && (Qe[e] = !0, l(!1, n));
}
e.useOptimistic, e.memo(et);
function et({ routes: e, future: t, state: n, isStatic: r, onError: i }) {
	return Re(e, void 0, {
		state: n,
		isStatic: r,
		onError: i,
		future: t
	});
}
function tt(e) {
	return Le(e.context);
}
function nt({ basename: t = "/", children: n = null, location: r, navigationType: i = "POP", navigator: a, static: o = !1, unstable_useTransitions: s }) {
	c(!F(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
	let u = t.replace(/^\/*/, "/"), f = e.useMemo(() => ({
		basename: u,
		navigator: a,
		static: o,
		unstable_useTransitions: s,
		future: {}
	}), [
		u,
		a,
		o,
		s
	]);
	typeof r == "string" && (r = d(r));
	let { pathname: p = "/", search: m = "", hash: h = "", state: g = null, key: _ = "default", unstable_mask: v } = r, y = e.useMemo(() => {
		let e = O(p, u);
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
		u,
		p,
		m,
		h,
		g,
		_,
		i,
		v
	]);
	return l(y != null, `<Router basename="${u}"> is not able to match the URL "${p}${m}${h}" because it does not start with the basename, so the <Router> won't render anything.`), y == null ? null : /* @__PURE__ */ e.createElement(M.Provider, { value: f }, /* @__PURE__ */ e.createElement(N.Provider, {
		children: n,
		value: y
	}));
}
e.Component;
var U = "get", W = "application/x-www-form-urlencoded";
function G(e) {
	return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function rt(e) {
	return G(e) && e.tagName.toLowerCase() === "button";
}
function it(e) {
	return G(e) && e.tagName.toLowerCase() === "form";
}
function at(e) {
	return G(e) && e.tagName.toLowerCase() === "input";
}
function ot(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function st(e, t) {
	return e.button === 0 && (!t || t === "_self") && !ot(e);
}
var K = null;
function ct() {
	if (K === null) try {
		new FormData(document.createElement("form"), 0), K = !1;
	} catch {
		K = !0;
	}
	return K;
}
var lt = /* @__PURE__ */ new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain"
]);
function q(e) {
	return e != null && !lt.has(e) ? (l(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${W}"`), null) : e;
}
function ut(e, t) {
	let n, r, i, a, o;
	if (it(e)) {
		let o = e.getAttribute("action");
		r = o ? O(o, t) : null, n = e.getAttribute("method") || U, i = q(e.getAttribute("enctype")) || W, a = new FormData(e);
	} else if (rt(e) || at(e) && (e.type === "submit" || e.type === "image")) {
		let o = e.form;
		if (o == null) throw Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
		let s = e.getAttribute("formaction") || o.getAttribute("action");
		if (r = s ? O(s, t) : null, n = e.getAttribute("formmethod") || o.getAttribute("method") || U, i = q(e.getAttribute("formenctype")) || q(o.getAttribute("enctype")) || W, a = new FormData(o, e), !ct()) {
			let { name: t, type: n, value: r } = e;
			if (n === "image") {
				let e = t ? `${t}.` : "";
				a.append(`${e}x`, "0"), a.append(`${e}y`, "0");
			} else t && a.append(t, r);
		}
	} else if (G(e)) throw Error("Cannot submit element that is not <form>, <button>, or <input type=\"submit|image\">");
	else n = U, r = null, i = W, o = e;
	return a && i === "text/plain" && (o = a, a = void 0), {
		action: r,
		method: n.toLowerCase(),
		encType: i,
		formData: a,
		body: o
	};
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var dt = {
	"&": "\\u0026",
	">": "\\u003e",
	"<": "\\u003c",
	"\u2028": "\\u2028",
	"\u2029": "\\u2029"
}, ft = /[&><\u2028\u2029]/g;
function pt(e) {
	return e.replace(ft, (e) => dt[e]);
}
function J(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function mt(e, t, n, r) {
	let i = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
	return n ? i.pathname.endsWith("/") ? i.pathname = `${i.pathname}_.${r}` : i.pathname = `${i.pathname}.${r}` : i.pathname === "/" ? i.pathname = `_root.${r}` : t && O(i.pathname, t) === "/" ? i.pathname = `${t.replace(/\/$/, "")}/_root.${r}` : i.pathname = `${i.pathname.replace(/\/$/, "")}.${r}`, i;
}
async function ht(e, t) {
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
function gt(e) {
	return e != null && typeof e.page == "string";
}
function _t(e) {
	return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function vt(e, t, n) {
	return Ct((await Promise.all(e.map(async (e) => {
		let r = t.routes[e.route.id];
		if (r) {
			let e = await ht(r, n);
			return e.links ? e.links() : [];
		}
		return [];
	}))).flat(1).filter(_t).filter((e) => e.rel === "stylesheet" || e.rel === "preload").map((e) => e.rel === "stylesheet" ? {
		...e,
		rel: "prefetch",
		as: "style"
	} : {
		...e,
		rel: "prefetch"
	}));
}
function yt(e, t, n, r, i, a) {
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
function bt(e, t, { includeHydrateFallback: n } = {}) {
	return xt(e.map((e) => {
		let r = t.routes[e.route.id];
		if (!r) return [];
		let i = [r.module];
		return r.clientActionModule && (i = i.concat(r.clientActionModule)), r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)), n && r.hydrateFallbackModule && (i = i.concat(r.hydrateFallbackModule)), r.imports && (i = i.concat(r.imports)), i;
	}).flat(1));
}
function xt(e) {
	return [...new Set(e)];
}
function St(e) {
	let t = {}, n = Object.keys(e).sort();
	for (let r of n) t[r] = e[r];
	return t;
}
function Ct(e, t) {
	let n = /* @__PURE__ */ new Set(), r = new Set(t);
	return e.reduce((e, i) => {
		if (t && !gt(i) && i.as === "script" && i.href && r.has(i.href)) return e;
		let a = JSON.stringify(St(i));
		return n.has(a) || (n.add(a), e.push({
			key: a,
			link: i
		})), e;
	}, []);
}
function wt() {
	let t = e.useContext(A);
	return J(t, "You must render this element inside a <DataRouterContext.Provider> element"), t;
}
function Tt() {
	let t = e.useContext(j);
	return J(t, "You must render this element inside a <DataRouterStateContext.Provider> element"), t;
}
var Y = e.createContext(void 0);
Y.displayName = "FrameworkContext";
function Et() {
	let t = e.useContext(Y);
	return J(t, "You must render this element inside a <HydratedRouter> element"), t;
}
function Dt(t, n) {
	let r = e.useContext(Y), [i, a] = e.useState(!1), [o, s] = e.useState(!1), { onFocus: c, onBlur: l, onMouseEnter: u, onMouseLeave: d, onTouchStart: f } = n, p = e.useRef(null);
	e.useEffect(() => {
		if (t === "render" && s(!0), t === "viewport") {
			let e = new IntersectionObserver((e) => {
				e.forEach((e) => {
					s(e.isIntersecting);
				});
			}, { threshold: .5 });
			return p.current && e.observe(p.current), () => {
				e.disconnect();
			};
		}
	}, [t]), e.useEffect(() => {
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
	return r ? t === "intent" ? [
		o,
		p,
		{
			onFocus: X(c, m),
			onBlur: X(l, h),
			onMouseEnter: X(u, m),
			onMouseLeave: X(d, h),
			onTouchStart: X(f, m)
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
function X(e, t) {
	return (n) => {
		e && e(n), n.defaultPrevented || t(n);
	};
}
function Ot({ page: t, ...n }) {
	let r = xe(), { router: i } = wt(), a = e.useMemo(() => f(i.routes, t, i.basename), [
		i.routes,
		t,
		i.basename
	]);
	return a ? r ? /* @__PURE__ */ e.createElement(At, {
		page: t,
		matches: a,
		...n
	}) : /* @__PURE__ */ e.createElement(jt, {
		page: t,
		matches: a,
		...n
	}) : null;
}
function kt(t) {
	let { manifest: n, routeModules: r } = Et(), [i, a] = e.useState([]);
	return e.useEffect(() => {
		let e = !1;
		return vt(t, n, r).then((t) => {
			e || a(t);
		}), () => {
			e = !0;
		};
	}, [
		t,
		n,
		r
	]), i;
}
function At({ page: t, matches: n, ...r }) {
	let i = I(), { future: a } = Et(), { basename: o } = wt(), s = e.useMemo(() => {
		if (t === i.pathname + i.search + i.hash) return [];
		let e = mt(t, o, a.unstable_trailingSlashAwareDataRequests, "rsc"), r = !1, s = [];
		for (let e of n) typeof e.route.shouldRevalidate == "function" ? r = !0 : s.push(e.route.id);
		return r && s.length > 0 && e.searchParams.set("_routes", s.join(",")), [e.pathname + e.search];
	}, [
		o,
		a.unstable_trailingSlashAwareDataRequests,
		t,
		i,
		n
	]);
	return /* @__PURE__ */ e.createElement(e.Fragment, null, s.map((t) => /* @__PURE__ */ e.createElement("link", {
		key: t,
		rel: "prefetch",
		as: "fetch",
		href: t,
		...r
	})));
}
function jt({ page: t, matches: n, ...r }) {
	let i = I(), { future: a, manifest: o, routeModules: s } = Et(), { basename: c } = wt(), { loaderData: l, matches: u } = Tt(), d = e.useMemo(() => yt(t, n, u, o, i, "data"), [
		t,
		n,
		u,
		o,
		i
	]), f = e.useMemo(() => yt(t, n, u, o, i, "assets"), [
		t,
		n,
		u,
		o,
		i
	]), p = e.useMemo(() => {
		if (t === i.pathname + i.search + i.hash) return [];
		let e = /* @__PURE__ */ new Set(), r = !1;
		if (n.forEach((t) => {
			let n = o.routes[t.route.id];
			!n || !n.hasLoader || (!d.some((e) => e.route.id === t.route.id) && t.route.id in l && s[t.route.id]?.shouldRevalidate || n.hasClientLoader ? r = !0 : e.add(t.route.id));
		}), e.size === 0) return [];
		let u = mt(t, c, a.unstable_trailingSlashAwareDataRequests, "data");
		return r && e.size > 0 && u.searchParams.set("_routes", n.filter((t) => e.has(t.route.id)).map((e) => e.route.id).join(",")), [u.pathname + u.search];
	}, [
		c,
		a.unstable_trailingSlashAwareDataRequests,
		l,
		i,
		o,
		d,
		n,
		t,
		s
	]), m = e.useMemo(() => bt(f, o), [f, o]), h = kt(f);
	return /* @__PURE__ */ e.createElement(e.Fragment, null, p.map((t) => /* @__PURE__ */ e.createElement("link", {
		key: t,
		rel: "prefetch",
		as: "fetch",
		href: t,
		...r
	})), m.map((t) => /* @__PURE__ */ e.createElement("link", {
		key: t,
		rel: "modulepreload",
		href: t,
		...r
	})), h.map(({ key: t, link: n }) => /* @__PURE__ */ e.createElement("link", {
		key: t,
		nonce: r.nonce,
		...n,
		crossOrigin: n.crossOrigin ?? r.crossOrigin
	})));
}
function Mt(...e) {
	return (t) => {
		e.forEach((e) => {
			typeof e == "function" ? e(t) : e != null && (e.current = t);
		});
	};
}
e.Component;
var Nt = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
try {
	Nt && (window.__reactRouterVersion = "7.14.0");
} catch {}
function Pt({ basename: t, children: n, history: r, unstable_useTransitions: i }) {
	let [a, o] = e.useState({
		action: r.action,
		location: r.location
	}), s = e.useCallback((t) => {
		i === !1 ? o(t) : e.startTransition(() => o(t));
	}, [i]);
	return e.useLayoutEffect(() => r.listen(s), [r, s]), /* @__PURE__ */ e.createElement(nt, {
		basename: t,
		children: n,
		location: a.location,
		navigationType: a.action,
		navigator: r,
		unstable_useTransitions: i
	});
}
Pt.displayName = "unstable_HistoryRouter";
var Ft = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Z = e.forwardRef(function({ onClick: t, discover: n = "render", prefetch: r = "none", relative: i, reloadDocument: a, replace: o, unstable_mask: s, state: c, target: l, to: u, preventScrollReset: d, viewTransition: f, unstable_defaultShouldRevalidate: p, ...m }, h) {
	let { basename: g, navigator: _, unstable_useTransitions: v } = e.useContext(M), y = typeof u == "string" && Ft.test(u), b = _e(u, g);
	u = b.to;
	let x = je(u, { relative: i }), S = I(), C = null;
	if (s) {
		let e = le(s, [], S.unstable_mask ? S.unstable_mask.pathname : "/", !0);
		g !== "/" && (e.pathname = e.pathname === "/" ? g : k([g, e.pathname])), C = _.createHref(e);
	}
	let [w, T, ee] = Dt(r, m), te = Ht(u, {
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
	function E(e) {
		t && t(e), e.defaultPrevented || te(e);
	}
	let D = !(b.isExternal || a), ne = /* @__PURE__ */ e.createElement("a", {
		...m,
		...ee,
		href: (D ? C : void 0) || b.absoluteURL || x,
		onClick: D ? E : t,
		ref: Mt(h, T),
		target: l,
		"data-discover": !y && n === "render" ? "true" : void 0
	});
	return w && !y ? /* @__PURE__ */ e.createElement(e.Fragment, null, ne, /* @__PURE__ */ e.createElement(Ot, { page: x })) : ne;
});
Z.displayName = "Link";
var It = e.forwardRef(function({ "aria-current": t = "page", caseSensitive: n = !1, className: r = "", end: i = !1, style: a, to: o, viewTransition: s, children: c, ...l }, u) {
	let d = R(o, { relative: l.relative }), f = I(), p = e.useContext(j), { navigator: m, basename: h } = e.useContext(M), g = p != null && Zt(d) && s === !0, _ = m.encodeLocation ? m.encodeLocation(d).pathname : d.pathname, v = f.pathname, y = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
	n || (v = v.toLowerCase(), y = y ? y.toLowerCase() : null, _ = _.toLowerCase()), y && h && (y = O(y, h) || y);
	let b = _ !== "/" && _.endsWith("/") ? _.length - 1 : _.length, x = v === _ || !i && v.startsWith(_) && v.charAt(b) === "/", S = y != null && (y === _ || !i && y.startsWith(_) && y.charAt(_.length) === "/"), C = {
		isActive: x,
		isPending: S,
		isTransitioning: g
	}, w = x ? t : void 0, T;
	T = typeof r == "function" ? r(C) : [
		r,
		x ? "active" : null,
		S ? "pending" : null,
		g ? "transitioning" : null
	].filter(Boolean).join(" ");
	let ee = typeof a == "function" ? a(C) : a;
	return /* @__PURE__ */ e.createElement(Z, {
		...l,
		"aria-current": w,
		className: T,
		ref: u,
		style: ee,
		to: o,
		viewTransition: s
	}, typeof c == "function" ? c(C) : c);
});
It.displayName = "NavLink";
var Lt = e.forwardRef(({ discover: t = "render", fetcherKey: n, navigate: r, reloadDocument: i, replace: a, state: o, method: s = U, action: c, onSubmit: l, relative: u, preventScrollReset: d, viewTransition: f, unstable_defaultShouldRevalidate: p, ...m }, h) => {
	let { unstable_useTransitions: g } = e.useContext(M), _ = Gt(), v = Kt(c, { relative: u }), y = s.toLowerCase() === "get" ? "get" : "post", b = typeof c == "string" && Ft.test(c);
	return /* @__PURE__ */ e.createElement("form", {
		ref: h,
		method: y,
		action: v,
		onSubmit: i ? l : (t) => {
			if (l && l(t), t.defaultPrevented) return;
			t.preventDefault();
			let i = t.nativeEvent.submitter, c = i?.getAttribute("formmethod") || s, m = () => _(i || t.currentTarget, {
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
			g && r !== !1 ? e.startTransition(() => m()) : m();
		},
		...m,
		"data-discover": !b && t === "render" ? "true" : void 0
	});
});
Lt.displayName = "Form";
function Rt({ getKey: t, storageKey: n, ...r }) {
	let i = e.useContext(Y), { basename: a } = e.useContext(M), o = I(), s = Ye();
	Yt({
		getKey: t,
		storageKey: n
	});
	let c = e.useMemo(() => {
		if (!i || !t) return null;
		let e = Jt(o, s, a, t);
		return e === o.key ? null : e;
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
	return /* @__PURE__ */ e.createElement("script", {
		...r,
		suppressHydrationWarning: !0,
		dangerouslySetInnerHTML: { __html: `(${l})(${pt(JSON.stringify(n || qt))}, ${pt(JSON.stringify(c))})` }
	});
}
Rt.displayName = "ScrollRestoration";
function zt(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Bt(t) {
	let n = e.useContext(A);
	return c(n, zt(t)), n;
}
function Vt(t) {
	let n = e.useContext(j);
	return c(n, zt(t)), n;
}
function Ht(t, { target: n, replace: r, unstable_mask: i, state: a, preventScrollReset: o, relative: s, viewTransition: c, unstable_defaultShouldRevalidate: l, unstable_useTransitions: d } = {}) {
	let f = Pe(), p = I(), m = R(t, { relative: s });
	return e.useCallback((h) => {
		if (st(h, n)) {
			h.preventDefault();
			let n = r === void 0 ? u(p) === u(m) : r, g = () => f(t, {
				replace: n,
				unstable_mask: i,
				state: a,
				preventScrollReset: o,
				relative: s,
				viewTransition: c,
				unstable_defaultShouldRevalidate: l
			});
			d ? e.startTransition(() => g()) : g();
		}
	}, [
		p,
		f,
		m,
		r,
		i,
		a,
		n,
		t,
		o,
		s,
		c,
		l,
		d
	]);
}
var Ut = 0, Wt = () => `__${String(++Ut)}__`;
function Gt() {
	let { router: t } = Bt("useSubmit"), { basename: n } = e.useContext(M), r = qe(), i = t.fetch, a = t.navigate;
	return e.useCallback(async (e, t = {}) => {
		let { action: o, method: s, encType: c, formData: l, body: u } = ut(e, n);
		t.navigate === !1 ? await i(t.fetcherKey || Wt(), r, t.action || o, {
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
function Kt(t, { relative: n } = {}) {
	let { basename: r } = e.useContext(M), i = e.useContext(P);
	c(i, "useFormAction must be used inside a RouteContext");
	let [a] = i.matches.slice(-1), o = { ...R(t || ".", { relative: n }) }, s = I();
	if (t == null) {
		o.search = s.search;
		let e = new URLSearchParams(o.search), t = e.getAll("index");
		if (t.some((e) => e === "")) {
			e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t));
			let n = e.toString();
			o.search = n ? `?${n}` : "";
		}
	}
	return (!t || t === ".") && a.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (o.pathname = o.pathname === "/" ? r : k([r, o.pathname])), u(o);
}
var qt = "react-router-scroll-positions", Q = {};
function Jt(e, t, n, r) {
	let i = null;
	return r && (i = r(n === "/" ? e : {
		...e,
		pathname: O(e.pathname, n) || e.pathname
	}, t)), i ??= e.key, i;
}
function Yt({ getKey: t, storageKey: n } = {}) {
	let { router: r } = Bt("useScrollRestoration"), { restoreScrollPosition: i, preventScrollReset: a } = Vt("useScrollRestoration"), { basename: o } = e.useContext(M), s = I(), c = Ye(), u = Je();
	e.useEffect(() => (window.history.scrollRestoration = "manual", () => {
		window.history.scrollRestoration = "auto";
	}), []), Xt(e.useCallback(() => {
		if (u.state === "idle") {
			let e = Jt(s, c, o, t);
			Q[e] = window.scrollY;
		}
		try {
			sessionStorage.setItem(n || qt, JSON.stringify(Q));
		} catch (e) {
			l(!1, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`);
		}
		window.history.scrollRestoration = "auto";
	}, [
		u.state,
		t,
		o,
		s,
		c,
		n
	])), typeof document < "u" && (e.useLayoutEffect(() => {
		try {
			let e = sessionStorage.getItem(n || qt);
			e && (Q = JSON.parse(e));
		} catch {}
	}, [n]), e.useLayoutEffect(() => {
		let e = r?.enableScrollRestoration(Q, () => window.scrollY, t ? (e, n) => Jt(e, n, o, t) : void 0);
		return () => e && e();
	}, [
		r,
		o,
		t
	]), e.useLayoutEffect(() => {
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
				l(!1, `"${s.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`);
			}
			a !== !0 && window.scrollTo(0, 0);
		}
	}, [
		s,
		i,
		a
	]));
}
function Xt(t, n) {
	let { capture: r } = n || {};
	e.useEffect(() => {
		let e = r == null ? void 0 : { capture: r };
		return window.addEventListener("pagehide", t, e), () => {
			window.removeEventListener("pagehide", t, e);
		};
	}, [t, r]);
}
function Zt(t, { relative: n } = {}) {
	let r = e.useContext(Se);
	c(r != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
	let { basename: i } = Bt("useViewTransitionState"), a = R(t, { relative: n });
	if (!r.isTransitioning) return !1;
	let o = O(r.currentLocation.pathname, i) || r.currentLocation.pathname, s = O(r.nextLocation.pathname, i) || r.nextLocation.pathname;
	return E(a.pathname, s) != null || E(a.pathname, o) != null;
}
//#endregion
//#region ../../test-utils/src/browser-metrics.ts
function Qt() {
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
function $t(e, t, n) {
	typeof window > "u" || t !== "nested-update" && (window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n));
}
//#endregion
//#region src/components/Footer.tsx
function en() {
	let { locale: e = "en" } = L(), t = e, n = [
		{
			label: "GitHub",
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: "Methodology",
			to: `/${t}/about`,
			isInternal: !0
		},
		{
			label: "Contributing",
			to: `/${t}/contact`,
			isInternal: !0
		}
	];
	return /* @__PURE__ */ a("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: /* @__PURE__ */ o("div", {
			className: "container py-8",
			children: [/* @__PURE__ */ o("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					/* @__PURE__ */ o("div", { children: [/* @__PURE__ */ a("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}), /* @__PURE__ */ a("p", {
						className: "text-sm text-muted-foreground",
						children: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
					})] }),
					/* @__PURE__ */ o("div", { children: [/* @__PURE__ */ a("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "Resources"
					}), /* @__PURE__ */ a("ul", {
						className: "space-y-1",
						children: n.map((e) => /* @__PURE__ */ a("li", { children: e.isInternal ? /* @__PURE__ */ a(Z, {
							to: e.to,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) : /* @__PURE__ */ a("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) }, e.label))
					})] }),
					/* @__PURE__ */ o("div", { children: [/* @__PURE__ */ a("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "Contact"
					}), /* @__PURE__ */ a("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), /* @__PURE__ */ a("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: "i18n Benchmark — Open-source project. Built with React, Vite & React Router."
			})]
		})
	});
}
//#endregion
//#region src/hooks/usePerformanceMeasure.ts
function tn(e) {
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
var nn = [
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
], rn = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
};
//#endregion
//#region src/components/LocaleSwitcher.tsx
function an() {
	let { locale: e = "en" } = L(), t = Pe(), n = I(), r = (e) => {
		t(n.pathname.replace(/^\/[^/]+/, `/${e}`) + n.search + n.hash);
	};
	return /* @__PURE__ */ a("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ a("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: nn.map((e) => /* @__PURE__ */ a("option", {
				value: e,
				children: rn(e)
			}, e))
		})
	});
}
//#endregion
//#region src/components/ThemeToggle.tsx
function on() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function sn() {
	let [e, t] = i("auto");
	n(() => {
		let e = on();
		t(e), $(e);
	}, []), n(() => {
		if (e !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return t.addEventListener("change", n), () => {
			t.removeEventListener("change", n);
		};
	}, [e]);
	function r() {
		let n = e === "light" ? "dark" : e === "dark" ? "auto" : "light";
		t(n), $(n), window.localStorage.setItem("theme", n);
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
function cn() {
	tn("Header");
	let [e, t] = i(!1), { locale: n = "en" } = L(), r = n, c = [
		{
			to: `/${r}/products`,
			label: "Products"
		},
		{
			to: `/${r}/pricing`,
			label: "Pricing"
		},
		{
			to: `/${r}/team`,
			label: "Team"
		},
		{
			to: `/${r}/blog`,
			label: "Blog"
		},
		{
			to: `/${r}/careers`,
			label: "Careers"
		},
		{
			to: `/${r}/faq`,
			label: "FAQ"
		},
		{
			to: `/${r}/contact`,
			label: "Contact"
		},
		{
			to: `/${r}/settings`,
			label: "Settings"
		}
	];
	return /* @__PURE__ */ a("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: /* @__PURE__ */ o("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [/* @__PURE__ */ o("div", {
				className: "flex items-center gap-8",
				children: [/* @__PURE__ */ a(Z, {
					to: `/${r}`,
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), /* @__PURE__ */ o("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						/* @__PURE__ */ a(It, {
							to: `/${r}`,
							end: !0,
							className: ({ isActive: e }) => `nav-link${e ? " is-active" : ""}`,
							children: "Home"
						}),
						/* @__PURE__ */ a(It, {
							to: `/${r}/about`,
							className: ({ isActive: e }) => `nav-link${e ? " is-active" : ""}`,
							children: "Methodology"
						}),
						/* @__PURE__ */ o("div", {
							className: "relative",
							children: [/* @__PURE__ */ o("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => t(!0),
								onMouseLeave: () => t(!1),
								onClick: () => t(!e),
								children: ["Mock Pages", /* @__PURE__ */ a(s, {
									size: 14,
									className: `transition-transform ${e ? "rotate-180" : ""}`
								})]
							}), e && /* @__PURE__ */ a("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => t(!0),
								onMouseLeave: () => t(!1),
								children: /* @__PURE__ */ a("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: c.map((e) => /* @__PURE__ */ a(Z, {
										to: e.to,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => t(!1),
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
					/* @__PURE__ */ a(an, {}),
					/* @__PURE__ */ a(sn, {})
				]
			})]
		})
	});
}
//#endregion
//#region src/components/Layout.tsx
function ln() {
	let { locale: e = "en" } = L();
	return n(() => {
		Qt();
	}, []), n(() => {
		document.documentElement.lang = e;
	}, [e]), /* @__PURE__ */ o(t, {
		id: "AppRoot",
		onRender: $t,
		children: [
			/* @__PURE__ */ a(cn, {}),
			/* @__PURE__ */ a(tt, {}),
			/* @__PURE__ */ a(en, {})
		]
	});
}
//#endregion
export { ln as default };
