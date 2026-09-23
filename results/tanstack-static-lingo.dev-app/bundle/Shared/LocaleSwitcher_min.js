import { createContext as e, useCallback as t, useEffect as n, useState as r } from "react";
import { useNavigate as i, useParams as a } from "@tanstack/react-router";
import { jsx as o } from "react/jsx-runtime";
var s = [
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
], c = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
};
function l() {
	let e = a({ strict: !1 }).locale ?? "en", t = i(), n = (e) => {
		t({
			to: ".",
			params: (t) => ({
				...t,
				locale: e
			}),
			replace: !0
		});
	};
	return o("div", {
		className: "flex items-center gap-2",
		children: o("select", {
			value: e,
			onChange: (e) => n(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: s.map((e) => o("option", {
				value: e,
				children: c(e)
			}, e))
		})
	});
}
var u = e(null), d = new class {
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
function f() {
	if (typeof document < "u") {
		let e = document.cookie.match(/locale=([^;]+)/);
		if (e) return e[1];
	}
	return "en";
}
function p(e) {
	typeof document < "u" && (document.cookie = `locale=${e}; path=/; max-age=31536000`);
}
var m = () => {}, h = g;
function g({ initialLocale: e, initialTranslations: i = {}, router: a, children: s }) {
	let [c, l] = r(() => e || (typeof window < "u" ? f() : "en")), [h, g] = r(i), [_, v] = r(!1);
	d.debug(`LingoProvider initialized with locale: ${c}`, i), n(() => {
		typeof document < "u" && (document.documentElement.lang = c);
	}, [c]);
	let y = t(async (e) => {
		if (!(Object.keys(i).length > 0)) {
			v(!0);
			try {
				let t = await fetch(`/translations/${e}.json`);
				if (!t.ok) throw Error(`Failed to load translations for ${e}: ${t.statusText}`);
				let n = await t.json();
				g(n.entries || n), d.debug(`Loaded translations for ${e}:`, Object.keys(n.entries || n).length);
			} catch (t) {
				d.error(`Failed to load translations for ${e}:`, t), g({});
			} finally {
				v(!1);
			}
		}
	}, [i]);
	n(() => {
		Object.keys(i).length === 0 && y(c);
	}, []), n(() => {
		a && g(i);
	}, [i, a]);
	let b = t(async (e) => {
		p(e), l(e), a ? a.refresh() : await y(e);
	}, [a, y]);
	return o(u.Provider, {
		value: {
			locale: c,
			setLocale: b,
			translations: h,
			registerHashes: m,
			isLoading: _,
			sourceLocale: "en"
		},
		children: s
	});
}
function _({ children: e }) {
	return o(h, {
		initialLocale: "en",
		children: e
	});
}
function v() {
	return o(_, { children: o(l, {}) });
}
export { v as default };
