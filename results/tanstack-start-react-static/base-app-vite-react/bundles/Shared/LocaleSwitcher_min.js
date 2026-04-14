import * as e from "react";
import { jsx as t } from "react/jsx-runtime";
//#region ../../node_modules/.bun/react-router@7.14.0+21ccd8898788a04d/node_modules/react-router/dist/development/chunk-QFMPRPBF.mjs
function n(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function r(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw Error(t);
		} catch {}
	}
}
function i({ pathname: e = "/", search: t = "", hash: n = "" }) {
	return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}
function a(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
		let r = e.indexOf("?");
		r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
	}
	return t;
}
function o(e, t, n = "/") {
	return s(e, t, n, !1);
}
function s(e, t, n, r) {
	let i = T((typeof t == "string" ? a(t) : t).pathname || "/", n);
	if (i == null) return null;
	let o = l(e);
	d(o);
	let s = null;
	for (let e = 0; s == null && e < o.length; ++e) {
		let t = w(i);
		s = x(o[e], t, r);
	}
	return s;
}
function c(e, t) {
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
function l(e, t = [], r = [], i = "", a = !1) {
	let o = (e, o, s = a, c) => {
		let u = {
			relativePath: c === void 0 ? e.path || "" : c,
			caseSensitive: e.caseSensitive === !0,
			childrenIndex: o,
			route: e
		};
		if (u.relativePath.startsWith("/")) {
			if (!u.relativePath.startsWith(i) && s) return;
			n(u.relativePath.startsWith(i), `Absolute route path "${u.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), u.relativePath = u.relativePath.slice(i.length);
		}
		let d = A([i, u.relativePath]), f = r.concat(u);
		e.children && e.children.length > 0 && (n(e.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${d}".`), l(e.children, t, f, d, s)), !(e.path == null && !e.index) && t.push({
			path: d,
			score: y(d, e.index),
			routesMeta: f
		});
	};
	return e.forEach((e, t) => {
		if (e.path === "" || !e.path?.includes("?")) o(e, t);
		else for (let n of u(e.path)) o(e, t, !0, n);
	}), t;
}
function u(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [a, ""] : [a];
	let o = u(r.join("/")), s = [];
	return s.push(...o.map((e) => e === "" ? a : [a, e].join("/"))), i && s.push(...o), s.map((t) => e.startsWith("/") && t === "" ? "/" : t);
}
function d(e) {
	e.sort((e, t) => e.score === t.score ? b(e.routesMeta.map((e) => e.childrenIndex), t.routesMeta.map((e) => e.childrenIndex)) : t.score - e.score);
}
var f = /^:[\w-]+$/, p = 3, m = 2, h = 1, g = 10, _ = -2, v = (e) => e === "*";
function y(e, t) {
	let n = e.split("/"), r = n.length;
	return n.some(v) && (r += _), t && (r += m), n.filter((e) => !v(e)).reduce((e, t) => e + (f.test(t) ? p : t === "" ? h : g), r);
}
function b(e, t) {
	return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function x(e, t, n = !1) {
	let { routesMeta: r } = e, i = {}, a = "/", o = [];
	for (let e = 0; e < r.length; ++e) {
		let s = r[e], c = e === r.length - 1, l = a === "/" ? t : t.slice(a.length) || "/", u = S({
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: c
		}, l), d = s.route;
		if (!u && c && n && !r[r.length - 1].route.index && (u = S({
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: !1
		}, l)), !u) return null;
		Object.assign(i, u.params), o.push({
			params: i,
			pathname: A([a, u.pathname]),
			pathnameBase: re(A([a, u.pathnameBase])),
			route: d
		}), u.pathnameBase !== "/" && (a = A([a, u.pathnameBase]));
	}
	return o;
}
function S(e, t) {
	typeof e == "string" && (e = {
		path: e,
		caseSensitive: !1,
		end: !0
	});
	let [n, r] = C(e.path, e.caseSensitive, e.end), i = t.match(n);
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
function C(e, t = !1, n = !0) {
	r(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
	let i = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (e, t, n, r, a) => {
		if (i.push({
			paramName: t,
			isOptional: n != null
		}), n) {
			let t = a.charAt(r + e.length);
			return t && t !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
		}
		return "/([^\\/]+)";
	}).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
	return e.endsWith("*") ? (i.push({ paramName: "*" }), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), i];
}
function w(e) {
	try {
		return e.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
	} catch (t) {
		return r(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
	}
}
function T(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
var E = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function D(e, t = "/") {
	let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? a(e) : e, o;
	return n ? (n = n.replace(/\/\/+/g, "/"), o = n.startsWith("/") ? O(n.substring(1), "/") : O(n, t)) : o = t, {
		pathname: o,
		search: ie(r),
		hash: ae(i)
	};
}
function O(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return e.split("/").forEach((e) => {
		e === ".." ? n.length > 1 && n.pop() : e !== "." && n.push(e);
	}), n.length > 1 ? n.join("/") : "/";
}
function k(e, t, n, r) {
	return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ee(e) {
	return e.filter((e, t) => t === 0 || e.route.path && e.route.path.length > 0);
}
function te(e) {
	let t = ee(e);
	return t.map((e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase);
}
function ne(e, t, r, i = !1) {
	let o;
	typeof e == "string" ? o = a(e) : (o = { ...e }, n(!o.pathname || !o.pathname.includes("?"), k("?", "pathname", "search", o)), n(!o.pathname || !o.pathname.includes("#"), k("#", "pathname", "hash", o)), n(!o.search || !o.search.includes("#"), k("#", "search", "hash", o)));
	let s = e === "" || o.pathname === "", c = s ? "/" : o.pathname, l;
	if (c == null) l = r;
	else {
		let e = t.length - 1;
		if (!i && c.startsWith("..")) {
			let t = c.split("/");
			for (; t[0] === "..";) t.shift(), --e;
			o.pathname = t.join("/");
		}
		l = e >= 0 ? t[e] : "/";
	}
	let u = D(o, l), d = c && c !== "/" && c.endsWith("/"), f = (s || c === ".") && r.endsWith("/");
	return !u.pathname.endsWith("/") && (d || f) && (u.pathname += "/"), u;
}
var A = (e) => e.join("/").replace(/\/\/+/g, "/"), re = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), ie = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, ae = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, oe = class {
	constructor(e, t, n, r = !1) {
		this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
	}
};
function se(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function ce(e) {
	return e.map((e) => e.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var le = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function ue(e, t) {
	let n = e;
	if (typeof n != "string" || !E.test(n)) return {
		absoluteURL: void 0,
		isExternal: !1,
		to: n
	};
	let i = n, a = !1;
	if (le) try {
		let e = new URL(window.location.href), r = n.startsWith("//") ? new URL(e.protocol + n) : new URL(n), i = T(r.pathname, t);
		r.origin === e.origin && i != null ? n = i + r.search + r.hash : a = !0;
	} catch {
		r(!1, `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
	}
	return {
		absoluteURL: i,
		isExternal: a,
		to: n
	};
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var de = [
	"POST",
	"PUT",
	"PATCH",
	"DELETE"
];
new Set(de);
var fe = ["GET", ...de];
new Set(fe);
var j = e.createContext(null);
j.displayName = "DataRouter";
var M = e.createContext(null);
M.displayName = "DataRouterState";
var pe = e.createContext(!1);
function me() {
	return e.useContext(pe);
}
var he = e.createContext({ isTransitioning: !1 });
he.displayName = "ViewTransition";
var ge = e.createContext(/* @__PURE__ */ new Map());
ge.displayName = "Fetchers";
var _e = e.createContext(null);
_e.displayName = "Await";
var N = e.createContext(null);
N.displayName = "Navigation";
var P = e.createContext(null);
P.displayName = "Location";
var F = e.createContext({
	outlet: null,
	matches: [],
	isDataRoute: !1
});
F.displayName = "Route";
var ve = e.createContext(null);
ve.displayName = "RouteError";
var ye = "REACT_ROUTER_ERROR", be = "REDIRECT", xe = "ROUTE_ERROR_RESPONSE";
function Se(e) {
	if (e.startsWith(`${ye}:${be}:{`)) try {
		let t = JSON.parse(e.slice(28));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean") return t;
	} catch {}
}
function Ce(e) {
	if (e.startsWith(`${ye}:${xe}:{`)) try {
		let t = JSON.parse(e.slice(40));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string") return new oe(t.status, t.statusText, t.data);
	} catch {}
}
function we(t, { relative: r } = {}) {
	n(I(), "useHref() may be used only in the context of a <Router> component.");
	let { basename: i, navigator: a } = e.useContext(N), { hash: o, pathname: s, search: c } = R(t, { relative: r }), l = s;
	return i !== "/" && (l = s === "/" ? i : A([i, s])), a.createHref({
		pathname: l,
		search: c,
		hash: o
	});
}
function I() {
	return e.useContext(P) != null;
}
function L() {
	return n(I(), "useLocation() may be used only in the context of a <Router> component."), e.useContext(P).location;
}
var Te = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Ee(t) {
	e.useContext(N).static || e.useLayoutEffect(t);
}
function De() {
	let { isDataRoute: t } = e.useContext(F);
	return t ? Ue() : Oe();
}
function Oe() {
	n(I(), "useNavigate() may be used only in the context of a <Router> component.");
	let t = e.useContext(j), { basename: i, navigator: a } = e.useContext(N), { matches: o } = e.useContext(F), { pathname: s } = L(), c = JSON.stringify(te(o)), l = e.useRef(!1);
	return Ee(() => {
		l.current = !0;
	}), e.useCallback((e, n = {}) => {
		if (r(l.current, Te), !l.current) return;
		if (typeof e == "number") {
			a.go(e);
			return;
		}
		let o = ne(e, JSON.parse(c), s, n.relative === "path");
		t == null && i !== "/" && (o.pathname = o.pathname === "/" ? i : A([i, o.pathname])), (n.replace ? a.replace : a.push)(o, n.state, n);
	}, [
		i,
		a,
		c,
		s,
		t
	]);
}
e.createContext(null);
function ke() {
	let { matches: t } = e.useContext(F), n = t[t.length - 1];
	return n ? n.params : {};
}
function R(t, { relative: n } = {}) {
	let { matches: r } = e.useContext(F), { pathname: i } = L(), a = JSON.stringify(te(r));
	return e.useMemo(() => ne(t, JSON.parse(a), i, n === "path"), [
		t,
		a,
		i,
		n
	]);
}
function Ae(t, i, s) {
	n(I(), "useRoutes() may be used only in the context of a <Router> component.");
	let { navigator: c } = e.useContext(N), { matches: l } = e.useContext(F), u = l[l.length - 1], d = u ? u.params : {}, f = u ? u.pathname : "/", p = u ? u.pathnameBase : "/", m = u && u.route;
	{
		let e = m && m.path || "";
		Ge(f, !m || e.endsWith("*") || e.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === "/" ? "*" : `${e}/*`}">.`);
	}
	let h = L(), g;
	if (i) {
		let e = typeof i == "string" ? a(i) : i;
		n(p === "/" || e.pathname?.startsWith(p), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${e.pathname}" was given in the \`location\` prop.`), g = e;
	} else g = h;
	let _ = g.pathname || "/", v = _;
	if (p !== "/") {
		let e = p.replace(/^\//, "").split("/");
		v = "/" + _.replace(/^\//, "").split("/").slice(e.length).join("/");
	}
	let y = o(t, { pathname: v });
	r(m || y != null, `No routes matched location "${g.pathname}${g.search}${g.hash}" `), r(y == null || y[y.length - 1].route.element !== void 0 || y[y.length - 1].route.Component !== void 0 || y[y.length - 1].route.lazy !== void 0, `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
	let b = Ie(y && y.map((e) => Object.assign({}, e, {
		params: Object.assign({}, d, e.params),
		pathname: A([p, c.encodeLocation ? c.encodeLocation(e.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathname]),
		pathnameBase: e.pathnameBase === "/" ? p : A([p, c.encodeLocation ? c.encodeLocation(e.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathnameBase])
	})), l, s);
	return i && b ? /* @__PURE__ */ e.createElement(P.Provider, { value: {
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
function je() {
	let t = He(), n = se(t) ? `${t.status} ${t.statusText}` : t instanceof Error ? t.message : JSON.stringify(t), r = t instanceof Error ? t.stack : null, i = "rgba(200,200,200, 0.5)", a = {
		padding: "0.5rem",
		backgroundColor: i
	}, o = {
		padding: "2px 4px",
		backgroundColor: i
	}, s = null;
	return console.error("Error handled by React Router default ErrorBoundary:", t), s = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ e.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ e.createElement("code", { style: o }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ e.createElement("code", { style: o }, "errorElement"), " prop on your route.")), /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ e.createElement("h3", { style: { fontStyle: "italic" } }, n), r ? /* @__PURE__ */ e.createElement("pre", { style: a }, r) : null, s);
}
var Me = /* @__PURE__ */ e.createElement(je, null), Ne = class extends e.Component {
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
			let e = Ce(t.digest);
			e && (t = e);
		}
		let n = t === void 0 ? this.props.children : /* @__PURE__ */ e.createElement(F.Provider, { value: this.props.routeContext }, /* @__PURE__ */ e.createElement(ve.Provider, {
			value: t,
			children: this.props.component
		}));
		return this.context ? /* @__PURE__ */ e.createElement(Pe, { error: t }, n) : n;
	}
};
Ne.contextType = pe;
var z = /* @__PURE__ */ new WeakMap();
function Pe({ children: t, error: n }) {
	let { basename: r } = e.useContext(N);
	if (typeof n == "object" && n && "digest" in n && typeof n.digest == "string") {
		let t = Se(n.digest);
		if (t) {
			let i = z.get(n);
			if (i) throw i;
			let a = ue(t.location, r);
			if (le && !z.get(n)) if (a.isExternal || t.reloadDocument) window.location.href = a.absoluteURL || a.to;
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
function Fe({ routeContext: t, match: n, children: r }) {
	let i = e.useContext(j);
	return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ e.createElement(F.Provider, { value: t }, r);
}
function Ie(t, r = [], i) {
	let a = i?.state;
	if (t == null) {
		if (!a) return null;
		if (a.errors) t = a.matches;
		else if (r.length === 0 && !a.initialized && a.matches.length > 0) t = a.matches;
		else return null;
	}
	let o = t, s = a?.errors;
	if (s != null) {
		let e = o.findIndex((e) => e.route.id && s?.[e.route.id] !== void 0);
		n(e >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`), o = o.slice(0, Math.min(o.length, e + 1));
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
			unstable_pattern: ce(a.matches),
			errorInfo: t
		});
	} : void 0;
	return o.reduceRight((t, n, i) => {
		let u, f = !1, p = null, m = null;
		a && (u = s && n.route.id ? s[n.route.id] : void 0, p = n.route.errorElement || Me, c && (l < 0 && i === 0 ? (Ge("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), f = !0, m = null) : l === i && (f = !0, m = n.route.hydrateFallbackElement || null)));
		let h = r.concat(o.slice(0, i + 1)), g = () => {
			let r;
			return r = u ? p : f ? m : n.route.Component ? /* @__PURE__ */ e.createElement(n.route.Component, null) : n.route.element ? n.route.element : t, /* @__PURE__ */ e.createElement(Fe, {
				match: n,
				routeContext: {
					outlet: t,
					matches: h,
					isDataRoute: a != null
				},
				children: r
			});
		};
		return a && (n.route.ErrorBoundary || n.route.errorElement || i === 0) ? /* @__PURE__ */ e.createElement(Ne, {
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
function Le(t) {
	let r = e.useContext(j);
	return n(r, B(t)), r;
}
function V(t) {
	let r = e.useContext(M);
	return n(r, B(t)), r;
}
function Re(t) {
	let r = e.useContext(F);
	return n(r, B(t)), r;
}
function H(e) {
	let t = Re(e), r = t.matches[t.matches.length - 1];
	return n(r.route.id, `${e} can only be used on routes that contain a unique "id"`), r.route.id;
}
function ze() {
	return H("useRouteId");
}
function Be() {
	return V("useNavigation").navigation;
}
function Ve() {
	let { matches: t, loaderData: n } = V("useMatches");
	return e.useMemo(() => t.map((e) => c(e, n)), [t, n]);
}
function He() {
	let t = e.useContext(ve), n = V("useRouteError"), r = H("useRouteError");
	return t === void 0 ? n.errors?.[r] : t;
}
function Ue() {
	let { router: t } = Le("useNavigate"), n = H("useNavigate"), i = e.useRef(!1);
	return Ee(() => {
		i.current = !0;
	}), e.useCallback(async (e, a = {}) => {
		r(i.current, Te), i.current && (typeof e == "number" ? await t.navigate(e) : await t.navigate(e, {
			fromRouteId: n,
			...a
		}));
	}, [t, n]);
}
var We = {};
function Ge(e, t, n) {
	!t && !We[e] && (We[e] = !0, r(!1, n));
}
e.useOptimistic, e.memo(Ke);
function Ke({ routes: e, future: t, state: n, isStatic: r, onError: i }) {
	return Ae(e, void 0, {
		state: n,
		isStatic: r,
		onError: i,
		future: t
	});
}
function qe({ basename: t = "/", children: i = null, location: o, navigationType: s = "POP", navigator: c, static: l = !1, unstable_useTransitions: u }) {
	n(!I(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
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
	typeof o == "string" && (o = a(o));
	let { pathname: p = "/", search: m = "", hash: h = "", state: g = null, key: _ = "default", unstable_mask: v } = o, y = e.useMemo(() => {
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
	return r(y != null, `<Router basename="${d}"> is not able to match the URL "${p}${m}${h}" because it does not start with the basename, so the <Router> won't render anything.`), y == null ? null : /* @__PURE__ */ e.createElement(N.Provider, { value: f }, /* @__PURE__ */ e.createElement(P.Provider, {
		children: i,
		value: y
	}));
}
e.Component;
var U = "get", W = "application/x-www-form-urlencoded";
function G(e) {
	return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function Je(e) {
	return G(e) && e.tagName.toLowerCase() === "button";
}
function Ye(e) {
	return G(e) && e.tagName.toLowerCase() === "form";
}
function Xe(e) {
	return G(e) && e.tagName.toLowerCase() === "input";
}
function Ze(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Qe(e, t) {
	return e.button === 0 && (!t || t === "_self") && !Ze(e);
}
var K = null;
function $e() {
	if (K === null) try {
		new FormData(document.createElement("form"), 0), K = !1;
	} catch {
		K = !0;
	}
	return K;
}
var et = /* @__PURE__ */ new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain"
]);
function q(e) {
	return e != null && !et.has(e) ? (r(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${W}"`), null) : e;
}
function tt(e, t) {
	let n, r, i, a, o;
	if (Ye(e)) {
		let o = e.getAttribute("action");
		r = o ? T(o, t) : null, n = e.getAttribute("method") || U, i = q(e.getAttribute("enctype")) || W, a = new FormData(e);
	} else if (Je(e) || Xe(e) && (e.type === "submit" || e.type === "image")) {
		let o = e.form;
		if (o == null) throw Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
		let s = e.getAttribute("formaction") || o.getAttribute("action");
		if (r = s ? T(s, t) : null, n = e.getAttribute("formmethod") || o.getAttribute("method") || U, i = q(e.getAttribute("formenctype")) || q(o.getAttribute("enctype")) || W, a = new FormData(o, e), !$e()) {
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
var nt = {
	"&": "\\u0026",
	">": "\\u003e",
	"<": "\\u003c",
	"\u2028": "\\u2028",
	"\u2029": "\\u2029"
}, rt = /[&><\u2028\u2029]/g;
function it(e) {
	return e.replace(rt, (e) => nt[e]);
}
function J(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function at(e, t, n, r) {
	let i = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
	return n ? i.pathname.endsWith("/") ? i.pathname = `${i.pathname}_.${r}` : i.pathname = `${i.pathname}.${r}` : i.pathname === "/" ? i.pathname = `_root.${r}` : t && T(i.pathname, t) === "/" ? i.pathname = `${t.replace(/\/$/, "")}/_root.${r}` : i.pathname = `${i.pathname.replace(/\/$/, "")}.${r}`, i;
}
async function ot(e, t) {
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
function st(e) {
	return e != null && typeof e.page == "string";
}
function ct(e) {
	return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function lt(e, t, n) {
	return mt((await Promise.all(e.map(async (e) => {
		let r = t.routes[e.route.id];
		if (r) {
			let e = await ot(r, n);
			return e.links ? e.links() : [];
		}
		return [];
	}))).flat(1).filter(ct).filter((e) => e.rel === "stylesheet" || e.rel === "preload").map((e) => e.rel === "stylesheet" ? {
		...e,
		rel: "prefetch",
		as: "style"
	} : {
		...e,
		rel: "prefetch"
	}));
}
function ut(e, t, n, r, i, a) {
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
function dt(e, t, { includeHydrateFallback: n } = {}) {
	return ft(e.map((e) => {
		let r = t.routes[e.route.id];
		if (!r) return [];
		let i = [r.module];
		return r.clientActionModule && (i = i.concat(r.clientActionModule)), r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)), n && r.hydrateFallbackModule && (i = i.concat(r.hydrateFallbackModule)), r.imports && (i = i.concat(r.imports)), i;
	}).flat(1));
}
function ft(e) {
	return [...new Set(e)];
}
function pt(e) {
	let t = {}, n = Object.keys(e).sort();
	for (let r of n) t[r] = e[r];
	return t;
}
function mt(e, t) {
	let n = /* @__PURE__ */ new Set(), r = new Set(t);
	return e.reduce((e, i) => {
		if (t && !st(i) && i.as === "script" && i.href && r.has(i.href)) return e;
		let a = JSON.stringify(pt(i));
		return n.has(a) || (n.add(a), e.push({
			key: a,
			link: i
		})), e;
	}, []);
}
function Y() {
	let t = e.useContext(j);
	return J(t, "You must render this element inside a <DataRouterContext.Provider> element"), t;
}
function ht() {
	let t = e.useContext(M);
	return J(t, "You must render this element inside a <DataRouterStateContext.Provider> element"), t;
}
var X = e.createContext(void 0);
X.displayName = "FrameworkContext";
function Z() {
	let t = e.useContext(X);
	return J(t, "You must render this element inside a <HydratedRouter> element"), t;
}
function gt(t, n) {
	let r = e.useContext(X), [i, a] = e.useState(!1), [o, s] = e.useState(!1), { onFocus: c, onBlur: l, onMouseEnter: u, onMouseLeave: d, onTouchStart: f } = n, p = e.useRef(null);
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
			onFocus: Q(c, m),
			onBlur: Q(l, h),
			onMouseEnter: Q(u, m),
			onMouseLeave: Q(d, h),
			onTouchStart: Q(f, m)
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
function Q(e, t) {
	return (n) => {
		e && e(n), n.defaultPrevented || t(n);
	};
}
function _t({ page: t, ...n }) {
	let r = me(), { router: i } = Y(), a = e.useMemo(() => o(i.routes, t, i.basename), [
		i.routes,
		t,
		i.basename
	]);
	return a ? r ? /* @__PURE__ */ e.createElement(yt, {
		page: t,
		matches: a,
		...n
	}) : /* @__PURE__ */ e.createElement(bt, {
		page: t,
		matches: a,
		...n
	}) : null;
}
function vt(t) {
	let { manifest: n, routeModules: r } = Z(), [i, a] = e.useState([]);
	return e.useEffect(() => {
		let e = !1;
		return lt(t, n, r).then((t) => {
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
function yt({ page: t, matches: n, ...r }) {
	let i = L(), { future: a } = Z(), { basename: o } = Y(), s = e.useMemo(() => {
		if (t === i.pathname + i.search + i.hash) return [];
		let e = at(t, o, a.unstable_trailingSlashAwareDataRequests, "rsc"), r = !1, s = [];
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
function bt({ page: t, matches: n, ...r }) {
	let i = L(), { future: a, manifest: o, routeModules: s } = Z(), { basename: c } = Y(), { loaderData: l, matches: u } = ht(), d = e.useMemo(() => ut(t, n, u, o, i, "data"), [
		t,
		n,
		u,
		o,
		i
	]), f = e.useMemo(() => ut(t, n, u, o, i, "assets"), [
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
		let u = at(t, c, a.unstable_trailingSlashAwareDataRequests, "data");
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
	]), m = e.useMemo(() => dt(f, o), [f, o]), h = vt(f);
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
function xt(...e) {
	return (t) => {
		e.forEach((e) => {
			typeof e == "function" ? e(t) : e != null && (e.current = t);
		});
	};
}
e.Component;
var St = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
try {
	St && (window.__reactRouterVersion = "7.14.0");
} catch {}
function Ct({ basename: t, children: n, history: r, unstable_useTransitions: i }) {
	let [a, o] = e.useState({
		action: r.action,
		location: r.location
	}), s = e.useCallback((t) => {
		i === !1 ? o(t) : e.startTransition(() => o(t));
	}, [i]);
	return e.useLayoutEffect(() => r.listen(s), [r, s]), /* @__PURE__ */ e.createElement(qe, {
		basename: t,
		children: n,
		location: a.location,
		navigationType: a.action,
		navigator: r,
		unstable_useTransitions: i
	});
}
Ct.displayName = "unstable_HistoryRouter";
var wt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Tt = e.forwardRef(function({ onClick: t, discover: n = "render", prefetch: r = "none", relative: i, reloadDocument: a, replace: o, unstable_mask: s, state: c, target: l, to: u, preventScrollReset: d, viewTransition: f, unstable_defaultShouldRevalidate: p, ...m }, h) {
	let { basename: g, navigator: _, unstable_useTransitions: v } = e.useContext(N), y = typeof u == "string" && wt.test(u), b = ue(u, g);
	u = b.to;
	let x = we(u, { relative: i }), S = L(), C = null;
	if (s) {
		let e = ne(s, [], S.unstable_mask ? S.unstable_mask.pathname : "/", !0);
		g !== "/" && (e.pathname = e.pathname === "/" ? g : A([g, e.pathname])), C = _.createHref(e);
	}
	let [w, T, E] = gt(r, m), D = Mt(u, {
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
	function O(e) {
		t && t(e), e.defaultPrevented || D(e);
	}
	let k = !(b.isExternal || a), ee = /* @__PURE__ */ e.createElement("a", {
		...m,
		...E,
		href: (k ? C : void 0) || b.absoluteURL || x,
		onClick: k ? O : t,
		ref: xt(h, T),
		target: l,
		"data-discover": !y && n === "render" ? "true" : void 0
	});
	return w && !y ? /* @__PURE__ */ e.createElement(e.Fragment, null, ee, /* @__PURE__ */ e.createElement(_t, { page: x })) : ee;
});
Tt.displayName = "Link";
var Et = e.forwardRef(function({ "aria-current": t = "page", caseSensitive: n = !1, className: r = "", end: i = !1, style: a, to: o, viewTransition: s, children: c, ...l }, u) {
	let d = R(o, { relative: l.relative }), f = L(), p = e.useContext(M), { navigator: m, basename: h } = e.useContext(N), g = p != null && Vt(d) && s === !0, _ = m.encodeLocation ? m.encodeLocation(d).pathname : d.pathname, v = f.pathname, y = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
	n || (v = v.toLowerCase(), y = y ? y.toLowerCase() : null, _ = _.toLowerCase()), y && h && (y = T(y, h) || y);
	let b = _ !== "/" && _.endsWith("/") ? _.length - 1 : _.length, x = v === _ || !i && v.startsWith(_) && v.charAt(b) === "/", S = y != null && (y === _ || !i && y.startsWith(_) && y.charAt(_.length) === "/"), C = {
		isActive: x,
		isPending: S,
		isTransitioning: g
	}, w = x ? t : void 0, E;
	E = typeof r == "function" ? r(C) : [
		r,
		x ? "active" : null,
		S ? "pending" : null,
		g ? "transitioning" : null
	].filter(Boolean).join(" ");
	let D = typeof a == "function" ? a(C) : a;
	return /* @__PURE__ */ e.createElement(Tt, {
		...l,
		"aria-current": w,
		className: E,
		ref: u,
		style: D,
		to: o,
		viewTransition: s
	}, typeof c == "function" ? c(C) : c);
});
Et.displayName = "NavLink";
var Dt = e.forwardRef(({ discover: t = "render", fetcherKey: n, navigate: r, reloadDocument: i, replace: a, state: o, method: s = U, action: c, onSubmit: l, relative: u, preventScrollReset: d, viewTransition: f, unstable_defaultShouldRevalidate: p, ...m }, h) => {
	let { unstable_useTransitions: g } = e.useContext(N), _ = Ft(), v = It(c, { relative: u }), y = s.toLowerCase() === "get" ? "get" : "post", b = typeof c == "string" && wt.test(c);
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
Dt.displayName = "Form";
function Ot({ getKey: t, storageKey: n, ...r }) {
	let i = e.useContext(X), { basename: a } = e.useContext(N), o = L(), s = Ve();
	zt({
		getKey: t,
		storageKey: n
	});
	let c = e.useMemo(() => {
		if (!i || !t) return null;
		let e = Rt(o, s, a, t);
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
		dangerouslySetInnerHTML: { __html: `(${l})(${it(JSON.stringify(n || Lt))}, ${it(JSON.stringify(c))})` }
	});
}
Ot.displayName = "ScrollRestoration";
function kt(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function At(t) {
	let r = e.useContext(j);
	return n(r, kt(t)), r;
}
function jt(t) {
	let r = e.useContext(M);
	return n(r, kt(t)), r;
}
function Mt(t, { target: n, replace: r, unstable_mask: a, state: o, preventScrollReset: s, relative: c, viewTransition: l, unstable_defaultShouldRevalidate: u, unstable_useTransitions: d } = {}) {
	let f = De(), p = L(), m = R(t, { relative: c });
	return e.useCallback((h) => {
		if (Qe(h, n)) {
			h.preventDefault();
			let n = r === void 0 ? i(p) === i(m) : r, g = () => f(t, {
				replace: n,
				unstable_mask: a,
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
		a,
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
var Nt = 0, Pt = () => `__${String(++Nt)}__`;
function Ft() {
	let { router: t } = At("useSubmit"), { basename: n } = e.useContext(N), r = ze(), i = t.fetch, a = t.navigate;
	return e.useCallback(async (e, t = {}) => {
		let { action: o, method: s, encType: c, formData: l, body: u } = tt(e, n);
		t.navigate === !1 ? await i(t.fetcherKey || Pt(), r, t.action || o, {
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
function It(t, { relative: r } = {}) {
	let { basename: a } = e.useContext(N), o = e.useContext(F);
	n(o, "useFormAction must be used inside a RouteContext");
	let [s] = o.matches.slice(-1), c = { ...R(t || ".", { relative: r }) }, l = L();
	if (t == null) {
		c.search = l.search;
		let e = new URLSearchParams(c.search), t = e.getAll("index");
		if (t.some((e) => e === "")) {
			e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t));
			let n = e.toString();
			c.search = n ? `?${n}` : "";
		}
	}
	return (!t || t === ".") && s.route.index && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), a !== "/" && (c.pathname = c.pathname === "/" ? a : A([a, c.pathname])), i(c);
}
var Lt = "react-router-scroll-positions", $ = {};
function Rt(e, t, n, r) {
	let i = null;
	return r && (i = r(n === "/" ? e : {
		...e,
		pathname: T(e.pathname, n) || e.pathname
	}, t)), i ??= e.key, i;
}
function zt({ getKey: t, storageKey: n } = {}) {
	let { router: i } = At("useScrollRestoration"), { restoreScrollPosition: a, preventScrollReset: o } = jt("useScrollRestoration"), { basename: s } = e.useContext(N), c = L(), l = Ve(), u = Be();
	e.useEffect(() => (window.history.scrollRestoration = "manual", () => {
		window.history.scrollRestoration = "auto";
	}), []), Bt(e.useCallback(() => {
		if (u.state === "idle") {
			let e = Rt(c, l, s, t);
			$[e] = window.scrollY;
		}
		try {
			sessionStorage.setItem(n || Lt, JSON.stringify($));
		} catch (e) {
			r(!1, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`);
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
			let e = sessionStorage.getItem(n || Lt);
			e && ($ = JSON.parse(e));
		} catch {}
	}, [n]), e.useLayoutEffect(() => {
		let e = i?.enableScrollRestoration($, () => window.scrollY, t ? (e, n) => Rt(e, n, s, t) : void 0);
		return () => e && e();
	}, [
		i,
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
				r(!1, `"${c.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`);
			}
			o !== !0 && window.scrollTo(0, 0);
		}
	}, [
		c,
		a,
		o
	]));
}
function Bt(t, n) {
	let { capture: r } = n || {};
	e.useEffect(() => {
		let e = r == null ? void 0 : { capture: r };
		return window.addEventListener("pagehide", t, e), () => {
			window.removeEventListener("pagehide", t, e);
		};
	}, [t, r]);
}
function Vt(t, { relative: r } = {}) {
	let i = e.useContext(he);
	n(i != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
	let { basename: a } = At("useViewTransitionState"), o = R(t, { relative: r });
	if (!i.isTransitioning) return !1;
	let s = T(i.currentLocation.pathname, a) || i.currentLocation.pathname, c = T(i.nextLocation.pathname, a) || i.nextLocation.pathname;
	return S(o.pathname, c) != null || S(o.pathname, s) != null;
}
//#endregion
//#region src/i18n/config.ts
var Ht = [
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
], Ut = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
};
//#endregion
//#region src/components/LocaleSwitcher.tsx
function Wt() {
	let { locale: e = "en" } = ke(), n = De(), r = L(), i = (e) => {
		n(r.pathname.replace(/^\/[^/]+/, `/${e}`) + r.search + r.hash);
	};
	return /* @__PURE__ */ t("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ t("select", {
			value: e,
			onChange: (e) => i(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: Ht.map((e) => /* @__PURE__ */ t("option", {
				value: e,
				children: Ut(e)
			}, e))
		})
	});
}
//#endregion
export { Wt as default };
