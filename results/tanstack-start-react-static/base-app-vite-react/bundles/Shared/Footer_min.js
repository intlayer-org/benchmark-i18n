import * as e from "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region ../../node_modules/.bun/react-router@7.14.0+21ccd8898788a04d/node_modules/react-router/dist/development/chunk-QFMPRPBF.mjs
function r(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function i(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw Error(t);
		} catch {}
	}
}
function a({ pathname: e = "/", search: t = "", hash: n = "" }) {
	return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}
function o(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
		let r = e.indexOf("?");
		r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
	}
	return t;
}
function s(e, t, n = "/") {
	return c(e, t, n, !1);
}
function c(e, t, n, r) {
	let i = T((typeof t == "string" ? o(t) : t).pathname || "/", n);
	if (i == null) return null;
	let a = u(e);
	f(a);
	let s = null;
	for (let e = 0; s == null && e < a.length; ++e) {
		let t = w(i);
		s = S(a[e], t, r);
	}
	return s;
}
function l(e, t) {
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
function u(e, t = [], n = [], i = "", a = !1) {
	let o = (e, o, s = a, c) => {
		let l = {
			relativePath: c === void 0 ? e.path || "" : c,
			caseSensitive: e.caseSensitive === !0,
			childrenIndex: o,
			route: e
		};
		if (l.relativePath.startsWith("/")) {
			if (!l.relativePath.startsWith(i) && s) return;
			r(l.relativePath.startsWith(i), `Absolute route path "${l.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), l.relativePath = l.relativePath.slice(i.length);
		}
		let d = k([i, l.relativePath]), f = n.concat(l);
		e.children && e.children.length > 0 && (r(e.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${d}".`), u(e.children, t, f, d, s)), !(e.path == null && !e.index) && t.push({
			path: d,
			score: b(d, e.index),
			routesMeta: f
		});
	};
	return e.forEach((e, t) => {
		if (e.path === "" || !e.path?.includes("?")) o(e, t);
		else for (let n of d(e.path)) o(e, t, !0, n);
	}), t;
}
function d(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [a, ""] : [a];
	let o = d(r.join("/")), s = [];
	return s.push(...o.map((e) => e === "" ? a : [a, e].join("/"))), i && s.push(...o), s.map((t) => e.startsWith("/") && t === "" ? "/" : t);
}
function f(e) {
	e.sort((e, t) => e.score === t.score ? x(e.routesMeta.map((e) => e.childrenIndex), t.routesMeta.map((e) => e.childrenIndex)) : t.score - e.score);
}
var p = /^:[\w-]+$/, m = 3, h = 2, g = 1, _ = 10, v = -2, y = (e) => e === "*";
function b(e, t) {
	let n = e.split("/"), r = n.length;
	return n.some(y) && (r += v), t && (r += h), n.filter((e) => !y(e)).reduce((e, t) => e + (p.test(t) ? m : t === "" ? g : _), r);
}
function x(e, t) {
	return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function S(e, t, n = !1) {
	let { routesMeta: r } = e, i = {}, a = "/", o = [];
	for (let e = 0; e < r.length; ++e) {
		let s = r[e], c = e === r.length - 1, l = a === "/" ? t : t.slice(a.length) || "/", u = C({
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: c
		}, l), d = s.route;
		if (!u && c && n && !r[r.length - 1].route.index && (u = C({
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: !1
		}, l)), !u) return null;
		Object.assign(i, u.params), o.push({
			params: i,
			pathname: k([a, u.pathname]),
			pathnameBase: ae(k([a, u.pathnameBase])),
			route: d
		}), u.pathnameBase !== "/" && (a = k([a, u.pathnameBase]));
	}
	return o;
}
function C(e, t) {
	typeof e == "string" && (e = {
		path: e,
		caseSensitive: !1,
		end: !0
	});
	let [n, r] = ee(e.path, e.caseSensitive, e.end), i = t.match(n);
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
function ee(e, t = !1, n = !0) {
	i(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
	let r = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
		if (r.push({
			paramName: t,
			isOptional: n != null
		}), n) {
			let t = a.charAt(i + e.length);
			return t && t !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
		}
		return "/([^\\/]+)";
	}).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
	return e.endsWith("*") ? (r.push({ paramName: "*" }), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), r];
}
function w(e) {
	try {
		return e.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
	} catch (t) {
		return i(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
	}
}
function T(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
var te = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function ne(e, t = "/") {
	let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? o(e) : e, a;
	return n ? (n = n.replace(/\/\/+/g, "/"), a = n.startsWith("/") ? E(n.substring(1), "/") : E(n, t)) : a = t, {
		pathname: a,
		search: oe(r),
		hash: se(i)
	};
}
function E(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return e.split("/").forEach((e) => {
		e === ".." ? n.length > 1 && n.pop() : e !== "." && n.push(e);
	}), n.length > 1 ? n.join("/") : "/";
}
function D(e, t, n, r) {
	return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function re(e) {
	return e.filter((e, t) => t === 0 || e.route.path && e.route.path.length > 0);
}
function ie(e) {
	let t = re(e);
	return t.map((e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase);
}
function O(e, t, n, i = !1) {
	let a;
	typeof e == "string" ? a = o(e) : (a = { ...e }, r(!a.pathname || !a.pathname.includes("?"), D("?", "pathname", "search", a)), r(!a.pathname || !a.pathname.includes("#"), D("#", "pathname", "hash", a)), r(!a.search || !a.search.includes("#"), D("#", "search", "hash", a)));
	let s = e === "" || a.pathname === "", c = s ? "/" : a.pathname, l;
	if (c == null) l = n;
	else {
		let e = t.length - 1;
		if (!i && c.startsWith("..")) {
			let t = c.split("/");
			for (; t[0] === "..";) t.shift(), --e;
			a.pathname = t.join("/");
		}
		l = e >= 0 ? t[e] : "/";
	}
	let u = ne(a, l), d = c && c !== "/" && c.endsWith("/"), f = (s || c === ".") && n.endsWith("/");
	return !u.pathname.endsWith("/") && (d || f) && (u.pathname += "/"), u;
}
var k = (e) => e.join("/").replace(/\/\/+/g, "/"), ae = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), oe = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, se = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, ce = class {
	constructor(e, t, n, r = !1) {
		this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
	}
};
function le(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function ue(e) {
	return e.map((e) => e.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var de = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function fe(e, t) {
	let n = e;
	if (typeof n != "string" || !te.test(n)) return {
		absoluteURL: void 0,
		isExternal: !1,
		to: n
	};
	let r = n, a = !1;
	if (de) try {
		let e = new URL(window.location.href), r = n.startsWith("//") ? new URL(e.protocol + n) : new URL(n), i = T(r.pathname, t);
		r.origin === e.origin && i != null ? n = i + r.search + r.hash : a = !0;
	} catch {
		i(!1, `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
	}
	return {
		absoluteURL: r,
		isExternal: a,
		to: n
	};
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var pe = [
	"POST",
	"PUT",
	"PATCH",
	"DELETE"
];
new Set(pe);
var me = ["GET", ...pe];
new Set(me);
var A = e.createContext(null);
A.displayName = "DataRouter";
var j = e.createContext(null);
j.displayName = "DataRouterState";
var he = e.createContext(!1);
function ge() {
	return e.useContext(he);
}
var _e = e.createContext({ isTransitioning: !1 });
_e.displayName = "ViewTransition";
var ve = e.createContext(/* @__PURE__ */ new Map());
ve.displayName = "Fetchers";
var ye = e.createContext(null);
ye.displayName = "Await";
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
var F = e.createContext(null);
F.displayName = "RouteError";
var be = "REACT_ROUTER_ERROR", xe = "REDIRECT", Se = "ROUTE_ERROR_RESPONSE";
function Ce(e) {
	if (e.startsWith(`${be}:${xe}:{`)) try {
		let t = JSON.parse(e.slice(28));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean") return t;
	} catch {}
}
function we(e) {
	if (e.startsWith(`${be}:${Se}:{`)) try {
		let t = JSON.parse(e.slice(40));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string") return new ce(t.status, t.statusText, t.data);
	} catch {}
}
function Te(t, { relative: n } = {}) {
	r(I(), "useHref() may be used only in the context of a <Router> component.");
	let { basename: i, navigator: a } = e.useContext(M), { hash: o, pathname: s, search: c } = R(t, { relative: n }), l = s;
	return i !== "/" && (l = s === "/" ? i : k([i, s])), a.createHref({
		pathname: l,
		search: c,
		hash: o
	});
}
function I() {
	return e.useContext(N) != null;
}
function L() {
	return r(I(), "useLocation() may be used only in the context of a <Router> component."), e.useContext(N).location;
}
var Ee = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function De(t) {
	e.useContext(M).static || e.useLayoutEffect(t);
}
function Oe() {
	let { isDataRoute: t } = e.useContext(P);
	return t ? We() : ke();
}
function ke() {
	r(I(), "useNavigate() may be used only in the context of a <Router> component.");
	let t = e.useContext(A), { basename: n, navigator: a } = e.useContext(M), { matches: o } = e.useContext(P), { pathname: s } = L(), c = JSON.stringify(ie(o)), l = e.useRef(!1);
	return De(() => {
		l.current = !0;
	}), e.useCallback((e, r = {}) => {
		if (i(l.current, Ee), !l.current) return;
		if (typeof e == "number") {
			a.go(e);
			return;
		}
		let o = O(e, JSON.parse(c), s, r.relative === "path");
		t == null && n !== "/" && (o.pathname = o.pathname === "/" ? n : k([n, o.pathname])), (r.replace ? a.replace : a.push)(o, r.state, r);
	}, [
		n,
		a,
		c,
		s,
		t
	]);
}
e.createContext(null);
function Ae() {
	let { matches: t } = e.useContext(P), n = t[t.length - 1];
	return n ? n.params : {};
}
function R(t, { relative: n } = {}) {
	let { matches: r } = e.useContext(P), { pathname: i } = L(), a = JSON.stringify(ie(r));
	return e.useMemo(() => O(t, JSON.parse(a), i, n === "path"), [
		t,
		a,
		i,
		n
	]);
}
function je(t, n, a) {
	r(I(), "useRoutes() may be used only in the context of a <Router> component.");
	let { navigator: c } = e.useContext(M), { matches: l } = e.useContext(P), u = l[l.length - 1], d = u ? u.params : {}, f = u ? u.pathname : "/", p = u ? u.pathnameBase : "/", m = u && u.route;
	{
		let e = m && m.path || "";
		Ke(f, !m || e.endsWith("*") || e.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === "/" ? "*" : `${e}/*`}">.`);
	}
	let h = L(), g;
	if (n) {
		let e = typeof n == "string" ? o(n) : n;
		r(p === "/" || e.pathname?.startsWith(p), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${e.pathname}" was given in the \`location\` prop.`), g = e;
	} else g = h;
	let _ = g.pathname || "/", v = _;
	if (p !== "/") {
		let e = p.replace(/^\//, "").split("/");
		v = "/" + _.replace(/^\//, "").split("/").slice(e.length).join("/");
	}
	let y = s(t, { pathname: v });
	i(m || y != null, `No routes matched location "${g.pathname}${g.search}${g.hash}" `), i(y == null || y[y.length - 1].route.element !== void 0 || y[y.length - 1].route.Component !== void 0 || y[y.length - 1].route.lazy !== void 0, `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
	let b = Le(y && y.map((e) => Object.assign({}, e, {
		params: Object.assign({}, d, e.params),
		pathname: k([p, c.encodeLocation ? c.encodeLocation(e.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathname]),
		pathnameBase: e.pathnameBase === "/" ? p : k([p, c.encodeLocation ? c.encodeLocation(e.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathnameBase])
	})), l, a);
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
function Me() {
	let t = Ue(), n = le(t) ? `${t.status} ${t.statusText}` : t instanceof Error ? t.message : JSON.stringify(t), r = t instanceof Error ? t.stack : null, i = "rgba(200,200,200, 0.5)", a = {
		padding: "0.5rem",
		backgroundColor: i
	}, o = {
		padding: "2px 4px",
		backgroundColor: i
	}, s = null;
	return console.error("Error handled by React Router default ErrorBoundary:", t), s = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ e.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ e.createElement("code", { style: o }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ e.createElement("code", { style: o }, "errorElement"), " prop on your route.")), /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ e.createElement("h3", { style: { fontStyle: "italic" } }, n), r ? /* @__PURE__ */ e.createElement("pre", { style: a }, r) : null, s);
}
var Ne = /* @__PURE__ */ e.createElement(Me, null), Pe = class extends e.Component {
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
			let e = we(t.digest);
			e && (t = e);
		}
		let n = t === void 0 ? this.props.children : /* @__PURE__ */ e.createElement(P.Provider, { value: this.props.routeContext }, /* @__PURE__ */ e.createElement(F.Provider, {
			value: t,
			children: this.props.component
		}));
		return this.context ? /* @__PURE__ */ e.createElement(Fe, { error: t }, n) : n;
	}
};
Pe.contextType = he;
var z = /* @__PURE__ */ new WeakMap();
function Fe({ children: t, error: n }) {
	let { basename: r } = e.useContext(M);
	if (typeof n == "object" && n && "digest" in n && typeof n.digest == "string") {
		let t = Ce(n.digest);
		if (t) {
			let i = z.get(n);
			if (i) throw i;
			let a = fe(t.location, r);
			if (de && !z.get(n)) if (a.isExternal || t.reloadDocument) window.location.href = a.absoluteURL || a.to;
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
function Ie({ routeContext: t, match: n, children: r }) {
	let i = e.useContext(A);
	return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ e.createElement(P.Provider, { value: t }, r);
}
function Le(t, n = [], i) {
	let a = i?.state;
	if (t == null) {
		if (!a) return null;
		if (a.errors) t = a.matches;
		else if (n.length === 0 && !a.initialized && a.matches.length > 0) t = a.matches;
		else return null;
	}
	let o = t, s = a?.errors;
	if (s != null) {
		let e = o.findIndex((e) => e.route.id && s?.[e.route.id] !== void 0);
		r(e >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`), o = o.slice(0, Math.min(o.length, e + 1));
	}
	let c = !1, l = -1;
	if (i && a) {
		c = a.renderFallback;
		for (let e = 0; e < o.length; e++) {
			let t = o[e];
			if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (l = e), t.route.id) {
				let { loaderData: e, errors: n } = a, r = t.route.loader && !e.hasOwnProperty(t.route.id) && (!n || n[t.route.id] === void 0);
				if (t.route.lazy || r) {
					i.isStatic && (c = !0), o = l >= 0 ? o.slice(0, l + 1) : [o[0]];
					break;
				}
			}
		}
	}
	let u = i?.onError, d = a && u ? (e, t) => {
		u(e, {
			location: a.location,
			params: a.matches?.[0]?.params ?? {},
			unstable_pattern: ue(a.matches),
			errorInfo: t
		});
	} : void 0;
	return o.reduceRight((t, r, i) => {
		let u, f = !1, p = null, m = null;
		a && (u = s && r.route.id ? s[r.route.id] : void 0, p = r.route.errorElement || Ne, c && (l < 0 && i === 0 ? (Ke("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), f = !0, m = null) : l === i && (f = !0, m = r.route.hydrateFallbackElement || null)));
		let h = n.concat(o.slice(0, i + 1)), g = () => {
			let n;
			return n = u ? p : f ? m : r.route.Component ? /* @__PURE__ */ e.createElement(r.route.Component, null) : r.route.element ? r.route.element : t, /* @__PURE__ */ e.createElement(Ie, {
				match: r,
				routeContext: {
					outlet: t,
					matches: h,
					isDataRoute: a != null
				},
				children: n
			});
		};
		return a && (r.route.ErrorBoundary || r.route.errorElement || i === 0) ? /* @__PURE__ */ e.createElement(Pe, {
			location: a.location,
			revalidation: a.revalidation,
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
function Re(t) {
	let n = e.useContext(A);
	return r(n, B(t)), n;
}
function V(t) {
	let n = e.useContext(j);
	return r(n, B(t)), n;
}
function ze(t) {
	let n = e.useContext(P);
	return r(n, B(t)), n;
}
function H(e) {
	let t = ze(e), n = t.matches[t.matches.length - 1];
	return r(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id;
}
function Be() {
	return H("useRouteId");
}
function Ve() {
	return V("useNavigation").navigation;
}
function He() {
	let { matches: t, loaderData: n } = V("useMatches");
	return e.useMemo(() => t.map((e) => l(e, n)), [t, n]);
}
function Ue() {
	let t = e.useContext(F), n = V("useRouteError"), r = H("useRouteError");
	return t === void 0 ? n.errors?.[r] : t;
}
function We() {
	let { router: t } = Re("useNavigate"), n = H("useNavigate"), r = e.useRef(!1);
	return De(() => {
		r.current = !0;
	}), e.useCallback(async (e, a = {}) => {
		i(r.current, Ee), r.current && (typeof e == "number" ? await t.navigate(e) : await t.navigate(e, {
			fromRouteId: n,
			...a
		}));
	}, [t, n]);
}
var Ge = {};
function Ke(e, t, n) {
	!t && !Ge[e] && (Ge[e] = !0, i(!1, n));
}
e.useOptimistic, e.memo(qe);
function qe({ routes: e, future: t, state: n, isStatic: r, onError: i }) {
	return je(e, void 0, {
		state: n,
		isStatic: r,
		onError: i,
		future: t
	});
}
function Je({ basename: t = "/", children: n = null, location: a, navigationType: s = "POP", navigator: c, static: l = !1, unstable_useTransitions: u }) {
	r(!I(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
	let d = t.replace(/^\/*/, "/"), f = e.useMemo(() => ({
		basename: d,
		navigator: c,
		static: l,
		unstable_useTransitions: u,
		future: {}
	}), [
		d,
		c,
		l,
		u
	]);
	typeof a == "string" && (a = o(a));
	let { pathname: p = "/", search: m = "", hash: h = "", state: g = null, key: _ = "default", unstable_mask: v } = a, y = e.useMemo(() => {
		let e = T(p, d);
		return e == null ? null : {
			location: {
				pathname: e,
				search: m,
				hash: h,
				state: g,
				key: _,
				unstable_mask: v
			},
			navigationType: s
		};
	}, [
		d,
		p,
		m,
		h,
		g,
		_,
		s,
		v
	]);
	return i(y != null, `<Router basename="${d}"> is not able to match the URL "${p}${m}${h}" because it does not start with the basename, so the <Router> won't render anything.`), y == null ? null : /* @__PURE__ */ e.createElement(M.Provider, { value: f }, /* @__PURE__ */ e.createElement(N.Provider, {
		children: n,
		value: y
	}));
}
e.Component;
var U = "get", W = "application/x-www-form-urlencoded";
function G(e) {
	return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function Ye(e) {
	return G(e) && e.tagName.toLowerCase() === "button";
}
function Xe(e) {
	return G(e) && e.tagName.toLowerCase() === "form";
}
function Ze(e) {
	return G(e) && e.tagName.toLowerCase() === "input";
}
function Qe(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function $e(e, t) {
	return e.button === 0 && (!t || t === "_self") && !Qe(e);
}
var K = null;
function et() {
	if (K === null) try {
		new FormData(document.createElement("form"), 0), K = !1;
	} catch {
		K = !0;
	}
	return K;
}
var tt = /* @__PURE__ */ new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain"
]);
function q(e) {
	return e != null && !tt.has(e) ? (i(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${W}"`), null) : e;
}
function nt(e, t) {
	let n, r, i, a, o;
	if (Xe(e)) {
		let o = e.getAttribute("action");
		r = o ? T(o, t) : null, n = e.getAttribute("method") || U, i = q(e.getAttribute("enctype")) || W, a = new FormData(e);
	} else if (Ye(e) || Ze(e) && (e.type === "submit" || e.type === "image")) {
		let o = e.form;
		if (o == null) throw Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
		let s = e.getAttribute("formaction") || o.getAttribute("action");
		if (r = s ? T(s, t) : null, n = e.getAttribute("formmethod") || o.getAttribute("method") || U, i = q(e.getAttribute("formenctype")) || q(o.getAttribute("enctype")) || W, a = new FormData(o, e), !et()) {
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
var rt = {
	"&": "\\u0026",
	">": "\\u003e",
	"<": "\\u003c",
	"\u2028": "\\u2028",
	"\u2029": "\\u2029"
}, it = /[&><\u2028\u2029]/g;
function at(e) {
	return e.replace(it, (e) => rt[e]);
}
function J(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function ot(e, t, n, r) {
	let i = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
	return n ? i.pathname.endsWith("/") ? i.pathname = `${i.pathname}_.${r}` : i.pathname = `${i.pathname}.${r}` : i.pathname === "/" ? i.pathname = `_root.${r}` : t && T(i.pathname, t) === "/" ? i.pathname = `${t.replace(/\/$/, "")}/_root.${r}` : i.pathname = `${i.pathname.replace(/\/$/, "")}.${r}`, i;
}
async function st(e, t) {
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
function ct(e) {
	return e != null && typeof e.page == "string";
}
function lt(e) {
	return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function ut(e, t, n) {
	return ht((await Promise.all(e.map(async (e) => {
		let r = t.routes[e.route.id];
		if (r) {
			let e = await st(r, n);
			return e.links ? e.links() : [];
		}
		return [];
	}))).flat(1).filter(lt).filter((e) => e.rel === "stylesheet" || e.rel === "preload").map((e) => e.rel === "stylesheet" ? {
		...e,
		rel: "prefetch",
		as: "style"
	} : {
		...e,
		rel: "prefetch"
	}));
}
function dt(e, t, n, r, i, a) {
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
function ft(e, t, { includeHydrateFallback: n } = {}) {
	return pt(e.map((e) => {
		let r = t.routes[e.route.id];
		if (!r) return [];
		let i = [r.module];
		return r.clientActionModule && (i = i.concat(r.clientActionModule)), r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)), n && r.hydrateFallbackModule && (i = i.concat(r.hydrateFallbackModule)), r.imports && (i = i.concat(r.imports)), i;
	}).flat(1));
}
function pt(e) {
	return [...new Set(e)];
}
function mt(e) {
	let t = {}, n = Object.keys(e).sort();
	for (let r of n) t[r] = e[r];
	return t;
}
function ht(e, t) {
	let n = /* @__PURE__ */ new Set(), r = new Set(t);
	return e.reduce((e, i) => {
		if (t && !ct(i) && i.as === "script" && i.href && r.has(i.href)) return e;
		let a = JSON.stringify(mt(i));
		return n.has(a) || (n.add(a), e.push({
			key: a,
			link: i
		})), e;
	}, []);
}
function gt() {
	let t = e.useContext(A);
	return J(t, "You must render this element inside a <DataRouterContext.Provider> element"), t;
}
function _t() {
	let t = e.useContext(j);
	return J(t, "You must render this element inside a <DataRouterStateContext.Provider> element"), t;
}
var Y = e.createContext(void 0);
Y.displayName = "FrameworkContext";
function vt() {
	let t = e.useContext(Y);
	return J(t, "You must render this element inside a <HydratedRouter> element"), t;
}
function yt(t, n) {
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
function bt({ page: t, ...n }) {
	let r = ge(), { router: i } = gt(), a = e.useMemo(() => s(i.routes, t, i.basename), [
		i.routes,
		t,
		i.basename
	]);
	return a ? r ? /* @__PURE__ */ e.createElement(St, {
		page: t,
		matches: a,
		...n
	}) : /* @__PURE__ */ e.createElement(Ct, {
		page: t,
		matches: a,
		...n
	}) : null;
}
function xt(t) {
	let { manifest: n, routeModules: r } = vt(), [i, a] = e.useState([]);
	return e.useEffect(() => {
		let e = !1;
		return ut(t, n, r).then((t) => {
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
function St({ page: t, matches: n, ...r }) {
	let i = L(), { future: a } = vt(), { basename: o } = gt(), s = e.useMemo(() => {
		if (t === i.pathname + i.search + i.hash) return [];
		let e = ot(t, o, a.unstable_trailingSlashAwareDataRequests, "rsc"), r = !1, s = [];
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
function Ct({ page: t, matches: n, ...r }) {
	let i = L(), { future: a, manifest: o, routeModules: s } = vt(), { basename: c } = gt(), { loaderData: l, matches: u } = _t(), d = e.useMemo(() => dt(t, n, u, o, i, "data"), [
		t,
		n,
		u,
		o,
		i
	]), f = e.useMemo(() => dt(t, n, u, o, i, "assets"), [
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
		let u = ot(t, c, a.unstable_trailingSlashAwareDataRequests, "data");
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
	]), m = e.useMemo(() => ft(f, o), [f, o]), h = xt(f);
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
function wt(...e) {
	return (t) => {
		e.forEach((e) => {
			typeof e == "function" ? e(t) : e != null && (e.current = t);
		});
	};
}
e.Component;
var Tt = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
try {
	Tt && (window.__reactRouterVersion = "7.14.0");
} catch {}
function Et({ basename: t, children: n, history: r, unstable_useTransitions: i }) {
	let [a, o] = e.useState({
		action: r.action,
		location: r.location
	}), s = e.useCallback((t) => {
		i === !1 ? o(t) : e.startTransition(() => o(t));
	}, [i]);
	return e.useLayoutEffect(() => r.listen(s), [r, s]), /* @__PURE__ */ e.createElement(Je, {
		basename: t,
		children: n,
		location: a.location,
		navigationType: a.action,
		navigator: r,
		unstable_useTransitions: i
	});
}
Et.displayName = "unstable_HistoryRouter";
var Dt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Z = e.forwardRef(function({ onClick: t, discover: n = "render", prefetch: r = "none", relative: i, reloadDocument: a, replace: o, unstable_mask: s, state: c, target: l, to: u, preventScrollReset: d, viewTransition: f, unstable_defaultShouldRevalidate: p, ...m }, h) {
	let { basename: g, navigator: _, unstable_useTransitions: v } = e.useContext(M), y = typeof u == "string" && Dt.test(u), b = fe(u, g);
	u = b.to;
	let x = Te(u, { relative: i }), S = L(), C = null;
	if (s) {
		let e = O(s, [], S.unstable_mask ? S.unstable_mask.pathname : "/", !0);
		g !== "/" && (e.pathname = e.pathname === "/" ? g : k([g, e.pathname])), C = _.createHref(e);
	}
	let [ee, w, T] = yt(r, m), te = Pt(u, {
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
	function ne(e) {
		t && t(e), e.defaultPrevented || te(e);
	}
	let E = !(b.isExternal || a), D = /* @__PURE__ */ e.createElement("a", {
		...m,
		...T,
		href: (E ? C : void 0) || b.absoluteURL || x,
		onClick: E ? ne : t,
		ref: wt(h, w),
		target: l,
		"data-discover": !y && n === "render" ? "true" : void 0
	});
	return ee && !y ? /* @__PURE__ */ e.createElement(e.Fragment, null, D, /* @__PURE__ */ e.createElement(bt, { page: x })) : D;
});
Z.displayName = "Link";
var Ot = e.forwardRef(function({ "aria-current": t = "page", caseSensitive: n = !1, className: r = "", end: i = !1, style: a, to: o, viewTransition: s, children: c, ...l }, u) {
	let d = R(o, { relative: l.relative }), f = L(), p = e.useContext(j), { navigator: m, basename: h } = e.useContext(M), g = p != null && Ht(d) && s === !0, _ = m.encodeLocation ? m.encodeLocation(d).pathname : d.pathname, v = f.pathname, y = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
	n || (v = v.toLowerCase(), y = y ? y.toLowerCase() : null, _ = _.toLowerCase()), y && h && (y = T(y, h) || y);
	let b = _ !== "/" && _.endsWith("/") ? _.length - 1 : _.length, x = v === _ || !i && v.startsWith(_) && v.charAt(b) === "/", S = y != null && (y === _ || !i && y.startsWith(_) && y.charAt(_.length) === "/"), C = {
		isActive: x,
		isPending: S,
		isTransitioning: g
	}, ee = x ? t : void 0, w;
	w = typeof r == "function" ? r(C) : [
		r,
		x ? "active" : null,
		S ? "pending" : null,
		g ? "transitioning" : null
	].filter(Boolean).join(" ");
	let te = typeof a == "function" ? a(C) : a;
	return /* @__PURE__ */ e.createElement(Z, {
		...l,
		"aria-current": ee,
		className: w,
		ref: u,
		style: te,
		to: o,
		viewTransition: s
	}, typeof c == "function" ? c(C) : c);
});
Ot.displayName = "NavLink";
var kt = e.forwardRef(({ discover: t = "render", fetcherKey: n, navigate: r, reloadDocument: i, replace: a, state: o, method: s = U, action: c, onSubmit: l, relative: u, preventScrollReset: d, viewTransition: f, unstable_defaultShouldRevalidate: p, ...m }, h) => {
	let { unstable_useTransitions: g } = e.useContext(M), _ = Lt(), v = Rt(c, { relative: u }), y = s.toLowerCase() === "get" ? "get" : "post", b = typeof c == "string" && Dt.test(c);
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
kt.displayName = "Form";
function At({ getKey: t, storageKey: n, ...r }) {
	let i = e.useContext(Y), { basename: a } = e.useContext(M), o = L(), s = He();
	Bt({
		getKey: t,
		storageKey: n
	});
	let c = e.useMemo(() => {
		if (!i || !t) return null;
		let e = $(o, s, a, t);
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
		dangerouslySetInnerHTML: { __html: `(${l})(${at(JSON.stringify(n || zt))}, ${at(JSON.stringify(c))})` }
	});
}
At.displayName = "ScrollRestoration";
function jt(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Mt(t) {
	let n = e.useContext(A);
	return r(n, jt(t)), n;
}
function Nt(t) {
	let n = e.useContext(j);
	return r(n, jt(t)), n;
}
function Pt(t, { target: n, replace: r, unstable_mask: i, state: o, preventScrollReset: s, relative: c, viewTransition: l, unstable_defaultShouldRevalidate: u, unstable_useTransitions: d } = {}) {
	let f = Oe(), p = L(), m = R(t, { relative: c });
	return e.useCallback((h) => {
		if ($e(h, n)) {
			h.preventDefault();
			let n = r === void 0 ? a(p) === a(m) : r, g = () => f(t, {
				replace: n,
				unstable_mask: i,
				state: o,
				preventScrollReset: s,
				relative: c,
				viewTransition: l,
				unstable_defaultShouldRevalidate: u
			});
			d ? e.startTransition(() => g()) : g();
		}
	}, [
		p,
		f,
		m,
		r,
		i,
		o,
		n,
		t,
		s,
		c,
		l,
		u,
		d
	]);
}
var Ft = 0, It = () => `__${String(++Ft)}__`;
function Lt() {
	let { router: t } = Mt("useSubmit"), { basename: n } = e.useContext(M), r = Be(), i = t.fetch, a = t.navigate;
	return e.useCallback(async (e, t = {}) => {
		let { action: o, method: s, encType: c, formData: l, body: u } = nt(e, n);
		t.navigate === !1 ? await i(t.fetcherKey || It(), r, t.action || o, {
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
function Rt(t, { relative: n } = {}) {
	let { basename: i } = e.useContext(M), o = e.useContext(P);
	r(o, "useFormAction must be used inside a RouteContext");
	let [s] = o.matches.slice(-1), c = { ...R(t || ".", { relative: n }) }, l = L();
	if (t == null) {
		c.search = l.search;
		let e = new URLSearchParams(c.search), t = e.getAll("index");
		if (t.some((e) => e === "")) {
			e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t));
			let n = e.toString();
			c.search = n ? `?${n}` : "";
		}
	}
	return (!t || t === ".") && s.route.index && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (c.pathname = c.pathname === "/" ? i : k([i, c.pathname])), a(c);
}
var zt = "react-router-scroll-positions", Q = {};
function $(e, t, n, r) {
	let i = null;
	return r && (i = r(n === "/" ? e : {
		...e,
		pathname: T(e.pathname, n) || e.pathname
	}, t)), i ??= e.key, i;
}
function Bt({ getKey: t, storageKey: n } = {}) {
	let { router: r } = Mt("useScrollRestoration"), { restoreScrollPosition: a, preventScrollReset: o } = Nt("useScrollRestoration"), { basename: s } = e.useContext(M), c = L(), l = He(), u = Ve();
	e.useEffect(() => (window.history.scrollRestoration = "manual", () => {
		window.history.scrollRestoration = "auto";
	}), []), Vt(e.useCallback(() => {
		if (u.state === "idle") {
			let e = $(c, l, s, t);
			Q[e] = window.scrollY;
		}
		try {
			sessionStorage.setItem(n || zt, JSON.stringify(Q));
		} catch (e) {
			i(!1, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`);
		}
		window.history.scrollRestoration = "auto";
	}, [
		u.state,
		t,
		s,
		c,
		l,
		n
	])), typeof document < "u" && (e.useLayoutEffect(() => {
		try {
			let e = sessionStorage.getItem(n || zt);
			e && (Q = JSON.parse(e));
		} catch {}
	}, [n]), e.useLayoutEffect(() => {
		let e = r?.enableScrollRestoration(Q, () => window.scrollY, t ? (e, n) => $(e, n, s, t) : void 0);
		return () => e && e();
	}, [
		r,
		s,
		t
	]), e.useLayoutEffect(() => {
		if (a !== !1) {
			if (typeof a == "number") {
				window.scrollTo(0, a);
				return;
			}
			try {
				if (c.hash) {
					let e = document.getElementById(decodeURIComponent(c.hash.slice(1)));
					if (e) {
						e.scrollIntoView();
						return;
					}
				}
			} catch {
				i(!1, `"${c.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`);
			}
			o !== !0 && window.scrollTo(0, 0);
		}
	}, [
		c,
		a,
		o
	]));
}
function Vt(t, n) {
	let { capture: r } = n || {};
	e.useEffect(() => {
		let e = r == null ? void 0 : { capture: r };
		return window.addEventListener("pagehide", t, e), () => {
			window.removeEventListener("pagehide", t, e);
		};
	}, [t, r]);
}
function Ht(t, { relative: n } = {}) {
	let i = e.useContext(_e);
	r(i != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
	let { basename: a } = Mt("useViewTransitionState"), o = R(t, { relative: n });
	if (!i.isTransitioning) return !1;
	let s = T(i.currentLocation.pathname, a) || i.currentLocation.pathname, c = T(i.nextLocation.pathname, a) || i.nextLocation.pathname;
	return C(o.pathname, c) != null || C(o.pathname, s) != null;
}
//#endregion
//#region src/components/Footer.tsx
function Ut() {
	let { locale: e = "en" } = Ae(), r = e, i = [
		{
			label: "GitHub",
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: "Methodology",
			to: `/${r}/about`,
			isInternal: !0
		},
		{
			label: "Contributing",
			to: `/${r}/contact`,
			isInternal: !0
		}
	];
	return /* @__PURE__ */ t("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: /* @__PURE__ */ n("div", {
			className: "container py-8",
			children: [/* @__PURE__ */ n("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					/* @__PURE__ */ n("div", { children: [/* @__PURE__ */ t("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}), /* @__PURE__ */ t("p", {
						className: "text-sm text-muted-foreground",
						children: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
					})] }),
					/* @__PURE__ */ n("div", { children: [/* @__PURE__ */ t("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "Resources"
					}), /* @__PURE__ */ t("ul", {
						className: "space-y-1",
						children: i.map((e) => /* @__PURE__ */ t("li", { children: e.isInternal ? /* @__PURE__ */ t(Z, {
							to: e.to,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) : /* @__PURE__ */ t("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) }, e.label))
					})] }),
					/* @__PURE__ */ n("div", { children: [/* @__PURE__ */ t("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "Contact"
					}), /* @__PURE__ */ t("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), /* @__PURE__ */ t("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: "i18n Benchmark — Open-source project. Built with React, Vite & React Router."
			})]
		})
	});
}
//#endregion
export { Ut as default };
