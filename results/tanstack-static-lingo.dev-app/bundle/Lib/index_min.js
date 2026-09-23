import e, { createContext as t, useCallback as n, useEffect as r, useState as i } from "react";
import { jsx as a } from "react/jsx-runtime";
var o = t(null), s = new class {
	config;
	prefix = "\x1B[42m\x1B[30m[Lingo.dev]\x1B[0m";
	constructor(e = {}) {
		this.config = {
			enableDebug: e.enableDebug ?? (typeof process < "u" && process.env?.LINGO_DEBUG === "true"),
			enableConsole: e.enableConsole ?? !0,
			writeToFile: e.writeToFile
		};
	}
	setDebug(e) {
		this.config.enableDebug = e;
	}
	setConsoleEnabled(e) {
		this.config.enableConsole = e;
	}
	setFileWriter(e) {
		this.config.writeToFile = e;
	}
	formatMessage(...e) {
		return e.map((e) => typeof e == "object" ? JSON.stringify(e, null, 2) : String(e)).join(" ");
	}
	log(e, ...t) {
		let n = this.formatMessage(...t);
		this.config.enableConsole && (e === "debug" || e === "info" ? console.log : console[e])(this.prefix, n), this.config.writeToFile && this.config.writeToFile(e, n);
	}
	debug(...e) {
		this.config.enableDebug && this.log("debug", ...e);
	}
	info(...e) {
		this.log("info", ...e);
	}
	warn(...e) {
		this.log("warn", ...e);
	}
	error(...e) {
		this.log("error", ...e);
	}
}({ enableConsole: !0 });
function c() {
	if (typeof document < "u") {
		let e = document.cookie.match(/locale=([^;]+)/);
		if (e) return e[1];
	}
	return "en";
}
function l(e) {
	typeof document < "u" && (document.cookie = `locale=${e}; path=/; max-age=31536000`);
}
var u = () => {}, d = f;
function f({ initialLocale: e, initialTranslations: t = {}, router: d, children: f }) {
	let [p, m] = i(() => e || (typeof window < "u" ? c() : "en")), [h, g] = i(t), [_, v] = i(!1);
	s.debug(`LingoProvider initialized with locale: ${p}`, t), r(() => {
		typeof document < "u" && (document.documentElement.lang = p);
	}, [p]);
	let y = n(async (e) => {
		if (!(Object.keys(t).length > 0)) {
			v(!0);
			try {
				let t = await fetch(`/translations/${e}.json`);
				if (!t.ok) throw Error(`Failed to load translations for ${e}: ${t.statusText}`);
				let n = await t.json();
				g(n.entries || n), s.debug(`Loaded translations for ${e}:`, Object.keys(n.entries || n).length);
			} catch (t) {
				s.error(`Failed to load translations for ${e}:`, t), g({});
			} finally {
				v(!1);
			}
		}
	}, [t]);
	r(() => {
		Object.keys(t).length === 0 && y(p);
	}, []), r(() => {
		d && g(t);
	}, [t, d]);
	let b = n(async (e) => {
		l(e), m(e), d ? d.refresh() : await y(e);
	}, [d, y]);
	return a(o.Provider, {
		value: {
			locale: p,
			setLocale: b,
			translations: h,
			registerHashes: u,
			isLoading: _,
			sourceLocale: "en"
		},
		children: f
	});
}
var p = () => () => ({ value: void 0 }), m = (t) => {
	g();
	let n = (e.cache ?? p)(() => ({ value: void 0 })), r = ({ children: e, value: t }) => (n().value = t, e), i = r;
	return i.Provider = r, i.Consumer = (e) => {
		let r = n();
		return e.children(r ? r.value : t);
	}, i._storage = n, i._defaultValue = t, i;
}, h = ({ _storage: e, _defaultValue: t }) => {
	let n = e();
	return n ? n.value : t;
}, g = () => {
	if (typeof window < "u") throw Error("createServerContext only works in Server Components");
}, _ = new Proxy({}, {
	get(e, t) {
		return (typeof window < "u" ? window.INTLAYER_CONFIG : void 0)?.[t];
	},
	has(e, t) {
		let n = typeof window < "u" ? window.INTLAYER_CONFIG : void 0;
		return n != null && t in n;
	}
}), v = _.internationalization;
_.dictionary, _.routing, _.content, _.system, _.editor, _.log, _.ai, _.build, _.compiler, _.schemas, _.plugins;
var { defaultLocale: y } = v ?? {}, b = h(m(y));
function x() {
	return a(d, { initialLocale: b });
}
function S({ children: e }) {
	return a(d, {
		initialLocale: "en",
		children: e
	});
}
function C() {
	return a(S, { children: a(x, {}) });
}
export { C as default };
