import react, { createContext, useCallback, useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
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
var cacheFallback = () => () => ({ value: void 0 });
var createServerContext = (defaultValue) => {
	throwInClient();
	const getCache = (react.cache ?? cacheFallback)(() => ({ value: void 0 }));
	const Provider = ({ children, value }) => {
		getCache().value = value;
		return children;
	};
	const ServerContext = Provider;
	ServerContext.Provider = Provider;
	ServerContext.Consumer = (props) => {
		const store = getCache();
		return props.children(store ? store.value : defaultValue);
	};
	ServerContext._storage = getCache;
	ServerContext._defaultValue = defaultValue;
	return ServerContext;
};
var getServerContext = ({ _storage, _defaultValue }) => {
	const store = _storage();
	if (!store) return _defaultValue;
	return store.value;
};
var throwInClient = () => {
	if (typeof window !== "undefined") throw new Error(`createServerContext only works in Server Components`);
};
var configuration = new Proxy({}, {
	get(_target, prop) {
		return (typeof window !== "undefined" ? window.INTLAYER_CONFIG : void 0)?.[prop];
	},
	has(_target, prop) {
		const config = typeof window !== "undefined" ? window.INTLAYER_CONFIG : void 0;
		return config != null && prop in config;
	}
});
var internationalization = configuration.internationalization;
configuration.dictionary;
configuration.routing;
configuration.content;
configuration.system;
configuration.editor;
configuration.log;
configuration.ai;
configuration.build;
configuration.compiler;
configuration.schemas;
configuration.plugins;
var { defaultLocale } = internationalization ?? {};
var locale = getServerContext(createServerContext(defaultLocale));
function EmptyComponent() {
	return jsx(LingoProvider, { initialLocale: locale });
}
function Wrapper({ children }) {
	return jsx(LingoProvider, {
		initialLocale: "en",
		children
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(EmptyComponent, {}) });
}
export { Wrapped as default };
