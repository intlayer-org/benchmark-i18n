import { createContext, useCallback, useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
function getInitialMode() {
	if (typeof window === "undefined") return "auto";
	const stored = window.localStorage.getItem("theme");
	if (stored === "light" || stored === "dark" || stored === "auto") return stored;
	return "auto";
}
function applyThemeMode(mode) {
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const resolved = mode === "auto" ? prefersDark ? "dark" : "light" : mode;
	document.documentElement.classList.remove("light", "dark");
	document.documentElement.classList.add(resolved);
	if (mode === "auto") document.documentElement.removeAttribute("data-theme");
	else document.documentElement.setAttribute("data-theme", mode);
	document.documentElement.style.colorScheme = resolved;
}
function ThemeToggle() {
	const [mode, setMode] = useState("auto");
	useEffect(() => {
		const initialMode = getInitialMode();
		setMode(initialMode);
		applyThemeMode(initialMode);
	}, []);
	useEffect(() => {
		if (mode !== "auto") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeMode("auto");
		media.addEventListener("change", onChange);
		return () => {
			media.removeEventListener("change", onChange);
		};
	}, [mode]);
	function toggleMode() {
		const nextMode = mode === "light" ? "dark" : mode === "dark" ? "auto" : "light";
		setMode(nextMode);
		applyThemeMode(nextMode);
		window.localStorage.setItem("theme", nextMode);
	}
	const label = mode === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${mode}. Click to switch mode.`;
	return jsx("button", {
		type: "button",
		onClick: toggleMode,
		"aria-label": label,
		title: label,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: mode === "auto" ? "Theme: Auto" : mode === "dark" ? "Theme: Dark" : "Theme: Light"
	});
}
var LingoContext = createContext(null);
var Logger = class {
	config;
	prefix = "\x1B[42m\x1B[30m[Lingo.dev]\x1B[0m";
	constructor(config = {}) {
		this.config = {
			enableDebug: config.enableDebug ?? (typeof process !== "undefined" && process.env?.LINGO_DEBUG === "true"),
			enableConsole: config.enableConsole ?? true,
			writeToFile: config.writeToFile
		};
	}
	setDebug(enabled) {
		this.config.enableDebug = enabled;
	}
	setConsoleEnabled(enabled) {
		this.config.enableConsole = enabled;
	}
	setFileWriter(writer) {
		this.config.writeToFile = writer;
	}
	formatMessage(...args) {
		return args.map((arg) => typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg)).join(" ");
	}
	log(level, ...args) {
		const message = this.formatMessage(...args);
		if (this.config.enableConsole) (level === "debug" || level === "info" ? console.log : console[level])(this.prefix, message);
		if (this.config.writeToFile) this.config.writeToFile(level, message);
	}
	debug(...args) {
		if (this.config.enableDebug) this.log("debug", ...args);
	}
	info(...args) {
		this.log("info", ...args);
	}
	warn(...args) {
		this.log("warn", ...args);
	}
	error(...args) {
		this.log("error", ...args);
	}
};
var logger = new Logger({ enableConsole: true });
function getClientLocale() {
	if (typeof document !== "undefined") {
		const match = document.cookie.match(/locale=([^;]+)/);
		if (match) return match[1];
	}
	return "en";
}
function persistLocale(locale) {
	if (typeof document !== "undefined") document.cookie = `locale=${locale}; path=/; max-age=31536000`;
}
var noop = () => {};
var LingoProvider = LingoProvider__Prod;
function LingoProvider__Prod({ initialLocale, initialTranslations = {}, router, children }) {
	const [locale, setLocaleState] = useState(() => {
		if (initialLocale) return initialLocale;
		if (typeof window !== "undefined") return getClientLocale();
		return "en";
	});
	const [translations, setTranslations] = useState(initialTranslations);
	const [isLoading, setIsLoading] = useState(false);
	logger.debug(`LingoProvider initialized with locale: ${locale}`, initialTranslations);
	useEffect(() => {
		if (typeof document !== "undefined") document.documentElement.lang = locale;
	}, [locale]);
	const loadTranslations = useCallback(async (targetLocale) => {
		if (Object.keys(initialTranslations).length > 0) return;
		setIsLoading(true);
		try {
			const response = await fetch(`/translations/${targetLocale}.json`);
			if (!response.ok) throw new Error(`Failed to load translations for ${targetLocale}: ${response.statusText}`);
			const data = await response.json();
			setTranslations(data.entries || data);
			logger.debug(`Loaded translations for ${targetLocale}:`, Object.keys(data.entries || data).length);
		} catch (error) {
			logger.error(`Failed to load translations for ${targetLocale}:`, error);
			setTranslations({});
		} finally {
			setIsLoading(false);
		}
	}, [initialTranslations]);
	useEffect(() => {
		if (Object.keys(initialTranslations).length === 0) loadTranslations(locale);
	}, []);
	useEffect(() => {
		if (router) setTranslations(initialTranslations);
	}, [initialTranslations, router]);
	const setLocale = useCallback(async (newLocale) => {
		persistLocale(newLocale);
		setLocaleState(newLocale);
		if (router) router.refresh();
		else await loadTranslations(newLocale);
	}, [router, loadTranslations]);
	return jsx(LingoContext.Provider, {
		value: {
			locale,
			setLocale,
			translations,
			registerHashes: noop,
			isLoading,
			sourceLocale: "en"
		},
		children
	});
}
function Wrapper({ children }) {
	return jsx(LingoProvider, {
		initialLocale: "en",
		children
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(ThemeToggle, {}) });
}
export { Wrapped as default };
