import { createContext as e, useCallback as t, useEffect as n, useState as r } from "react";
import { jsx as i } from "react/jsx-runtime";
function a() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function o(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function s() {
	let [e, t] = r("auto");
	n(() => {
		let e = a();
		t(e), o(e);
	}, []), n(() => {
		if (e !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => o("auto");
		return t.addEventListener("change", n), () => {
			t.removeEventListener("change", n);
		};
	}, [e]);
	function s() {
		let n = e === "light" ? "dark" : e === "dark" ? "auto" : "light";
		t(n), o(n), window.localStorage.setItem("theme", n);
	}
	let c = e === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${e}. Click to switch mode.`;
	return i("button", {
		type: "button",
		onClick: s,
		"aria-label": c,
		title: c,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e === "auto" ? "Theme: Auto" : e === "dark" ? "Theme: Dark" : "Theme: Light"
	});
}
var c = e(null), l = new class {
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
function u() {
	if (typeof document < "u") {
		let e = document.cookie.match(/locale=([^;]+)/);
		if (e) return e[1];
	}
	return "en";
}
function d(e) {
	typeof document < "u" && (document.cookie = `locale=${e}; path=/; max-age=31536000`);
}
var f = () => {}, p = m;
function m({ initialLocale: e, initialTranslations: a = {}, router: o, children: s }) {
	let [p, m] = r(() => e || (typeof window < "u" ? u() : "en")), [h, g] = r(a), [_, v] = r(!1);
	l.debug(`LingoProvider initialized with locale: ${p}`, a), n(() => {
		typeof document < "u" && (document.documentElement.lang = p);
	}, [p]);
	let y = t(async (e) => {
		if (!(Object.keys(a).length > 0)) {
			v(!0);
			try {
				let t = await fetch(`/translations/${e}.json`);
				if (!t.ok) throw Error(`Failed to load translations for ${e}: ${t.statusText}`);
				let n = await t.json();
				g(n.entries || n), l.debug(`Loaded translations for ${e}:`, Object.keys(n.entries || n).length);
			} catch (t) {
				l.error(`Failed to load translations for ${e}:`, t), g({});
			} finally {
				v(!1);
			}
		}
	}, [a]);
	n(() => {
		Object.keys(a).length === 0 && y(p);
	}, []), n(() => {
		o && g(a);
	}, [a, o]);
	let b = t(async (e) => {
		d(e), m(e), o ? o.refresh() : await y(e);
	}, [o, y]);
	return i(c.Provider, {
		value: {
			locale: p,
			setLocale: b,
			translations: h,
			registerHashes: f,
			isLoading: _,
			sourceLocale: "en"
		},
		children: s
	});
}
function h({ children: e }) {
	return i(p, {
		initialLocale: "en",
		children: e
	});
}
function g() {
	return i(h, { children: i(s, {}) });
}
export { g as default };
