import { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "@tanstack/react-router";
import { jsx } from "react/jsx-runtime";
var locales = [
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
];
var getLocaleName = (locale) => {
	try {
		const name = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
		return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
	} catch (e) {
		return locale.toUpperCase();
	}
};
function LocaleSwitcher() {
	const locale = useParams({ strict: false }).locale ?? "en";
	const navigate = useNavigate();
	const handleLocaleChange = (newLocale) => {
		navigate({
			to: ".",
			params: (prev) => ({
				...prev,
				locale: newLocale
			}),
			replace: true
		});
	};
	return jsx("div", {
		className: "flex items-center gap-2",
		children: jsx("select", {
			value: locale,
			onChange: (e) => handleLocaleChange(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: locales.map((localeItem) => jsx("option", {
				value: localeItem,
				children: getLocaleName(localeItem)
			}, localeItem))
		})
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
	return jsx(Wrapper, { children: jsx(LocaleSwitcher, {}) });
}
export { Wrapped as default };
