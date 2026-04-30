import { i as internationalization, o as routing, r as editor } from "./__vite-browser-external-Cnj-CPCM.js";
import { a as enumerationPlugin, c as genderPlugin, f as getIntlayer, i as conditionPlugin, l as nestedPlugin, o as fallbackPlugin, s as filePlugin, u as translationPlugin } from "./getDictionary-BDPI18gp.js";
import { c as MARKDOWN, o as HTML, s as INSERTION } from "./nodeType-DivqwnYF.js";
import { n as getMarkdownMetadata } from "./markdown-BmCAYw1d.js";
import { Dynamic, createComponent, insert, mergeProps, template } from "solid-js/web";
import { For, Suspense, createContext, createMemo, lazy, useContext } from "solid-js";
var isEnabled = !(process.env["INTLAYER_EDITOR_ENABLED"] === "false") && editor?.enabled && typeof window !== "undefined" && window.self !== window.top;
var r = process.env.INTLAYER_EDITOR_ENABLED === "false", i = (i) => r || !isEnabled ? i.children : createComponent(Dynamic, {
	component: "intlayer-content-selector-wrapper",
	get "attr:key-path"() {
		return JSON.stringify(i.keyPath);
	},
	get "attr:dictionary-key"() {
		return i.dictionaryKey;
	},
	get children() {
		return i.children;
	}
});
var e$1 = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
};
var t$1 = (n) => {
	if (typeof n == "string") return n;
	let { type: r, props: i } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let n = [], { children: r } = e.props;
			return Object.keys(r ?? {}).forEach((e) => {
				n.push(t$1(r?.[e]));
			}), {
				...e,
				props: {
					...e.props,
					children: n
				}
			};
		}
		return {
			...e,
			props: {
				...e.props,
				children: e.props?.children ?? []
			}
		};
	})(n);
	return Dynamic({
		component: r ?? "span",
		...i,
		children: i.children
	});
};
var isComplexValue = (value) => value != null && typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean";
var insertionRegex = /\{\{\s*(.*?)\s*\}\}/g;
var splitInsertionTemplate = (template, values = {}) => {
	if (!Object.values(values).some(isComplexValue)) return {
		isSimple: true,
		parts: template.replace(insertionRegex, (_, key) => (values[key.trim()] ?? "").toString())
	};
	const chunks = template.split(insertionRegex);
	const parts = [];
	for (let i = 0; i < chunks.length; i++) if (i % 2 === 0) {
		if (chunks[i]) parts.push(chunks[i]);
	} else {
		const val = values[chunks[i].trim()];
		if (val != null) parts.push(val);
	}
	return {
		isSimple: false,
		parts
	};
};
var y = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", b = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false", x = process.env.INTLAYER_NODE_TYPE_MARKDOWN === "false", S = process.env.INTLAYER_NODE_TYPE_HTML === "false", C = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", w$1 = process.env.INTLAYER_EDITOR_ENABLED === "false", T$1 = x ? null : lazy(() => import("./MarkdownRenderer-CZEl8PYG.js").then((e) => ({ default: e.MarkdownMetadataRenderer }))), E$1 = x ? null : lazy(() => import("./MarkdownRenderer-CZEl8PYG.js").then((e) => ({ default: e.MarkdownRenderer }))), D$1 = S ? null : lazy(() => import("./HTMLRenderer-BVHh_-9v.js").then((e) => ({ default: e.HTMLRenderer }))), O$1 = y ? fallbackPlugin : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (n, { plugins: o, ...s }) => e$1({
		...s,
		value: s.children,
		children: !w$1 && editor.enabled ? createComponent(i, mergeProps(s, { get children() {
			return s.children;
		} })) : s.children
	})
}, k$1 = b ? fallbackPlugin : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (o, { plugins: s, ...c }) => e$1({
		...c,
		value: "[[solid-element]]",
		children: !w$1 && editor.enabled ? createComponent(i, mergeProps(c, { get children() {
			return typeof Node < "u" && o instanceof Node ? o : t$1(o);
		} })) : typeof Node < "u" && o instanceof Node ? o : t$1(o)
	})
}, A$1 = (e, t) => {
	let n = splitInsertionTemplate(e, t);
	return n.isSimple, n.parts;
}, j$1 = C ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: INSERTION }], i = e[INSERTION];
		return (e) => {
			let a = {
				id: "insertion-string-plugin",
				canHandle: (e) => typeof e == "string",
				transform: (n, r, i) => {
					let a = A$1(i(n, {
						...r,
						children: n,
						plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
					}), e);
					return i(a, {
						...r,
						plugins: t.plugins,
						children: a
					});
				}
			};
			return n(i, {
				...t,
				children: i,
				keyPath: r,
				plugins: [a, ...t.plugins ?? []]
			});
		};
	}
}, M$1 = x ? fallbackPlugin : {
	id: "markdown-string-plugin",
	canHandle: (e) => typeof e == "string",
	transform: (n, o, s) => {
		let { plugins: c, ...l } = o, u = s(getMarkdownMetadata(n) ?? {}, {
			plugins: [{
				id: "markdown-metadata-plugin",
				canHandle: (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean" || !e,
				transform: (o, s) => e$1({
					...s,
					value: o,
					children: !w$1 && editor.enabled ? createComponent(i, mergeProps(l, { get children() {
						return createComponent(Suspense, {
							fallback: n,
							get children() {
								return createComponent(T$1, mergeProps(l, {
									get metadataKeyPath() {
										return s.keyPath;
									},
									children: n
								}));
							}
						});
					} })) : createComponent(Suspense, {
						fallback: n,
						get children() {
							return createComponent(T$1, mergeProps(l, {
								get metadataKeyPath() {
									return s.keyPath;
								},
								children: n
							}));
						}
					})
				})
			}],
			dictionaryKey: l.dictionaryKey,
			keyPath: []
		}), d = (s) => e$1({
			...o,
			value: n,
			children: !w$1 && editor.enabled ? createComponent(i, mergeProps(l, { get children() {
				return createComponent(Suspense, {
					fallback: n,
					get children() {
						return createComponent(E$1, mergeProps(l, {
							components: s,
							children: n
						}));
					}
				});
			} })) : createComponent(Suspense, {
				fallback: n,
				get children() {
					return createComponent(E$1, mergeProps(l, {
						components: s,
						children: n
					}));
				}
			}),
			additionalProps: { metadata: u }
		}), f = d();
		return new Proxy(f, { get(e, t, r) {
			return t === "value" ? n : t === "metadata" ? u : t === "use" ? (e) => d(e) : Reflect.get(e, t, r);
		} });
	}
}, N$1 = x ? fallbackPlugin : {
	id: "markdown-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "markdown",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: MARKDOWN }], i = e[MARKDOWN];
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [M$1, ...t.plugins ?? []]
		});
	}
}, P$1 = S ? fallbackPlugin : {
	id: "html-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "html",
	transform: (n, o) => {
		let s = n[HTML], { plugins: c, ...l } = o, u = (n) => e$1({
			...l,
			value: s,
			children: !w$1 && editor.enabled ? createComponent(i, mergeProps(l, { get children() {
				return createComponent(Suspense, {
					fallback: s,
					get children() {
						return createComponent(D$1, mergeProps(l, {
							html: s,
							components: n
						}));
					}
				});
			} })) : createComponent(Suspense, {
				fallback: s,
				get children() {
					return createComponent(D$1, mergeProps(l, {
						html: s,
						components: n
					}));
				}
			})
		}), d = [u()];
		return new Proxy(d, { get(e, t, n) {
			return t === "value" ? s : t === "use" ? (e) => u(e) : Reflect.get(e, t, n);
		} });
	}
}, F$1 = /* @__PURE__ */ new Map(), I$1 = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (F$1.has(n)) return F$1.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		O$1,
		k$1,
		j$1,
		N$1,
		P$1
	];
	return F$1.set(n, r), r;
};
var n$2 = (n, r) => getIntlayer(n, r, I$1(r));
process.env["INTLAYER_ROUTING_REWRITE_RULES"];
var TREE_SHAKE_STORAGE_COOKIES = process.env["INTLAYER_ROUTING_STORAGE_COOKIES"] === "false";
var TREE_SHAKE_STORAGE_LOCAL_STORAGE = process.env["INTLAYER_ROUTING_STORAGE_LOCALSTORAGE"] === "false";
var TREE_SHAKE_STORAGE_SESSION_STORAGE = process.env["INTLAYER_ROUTING_STORAGE_SESSIONSTORAGE"] === "false";
process.env["INTLAYER_ROUTING_STORAGE_HEADERS"];
var getLocaleFromStorageClient = (options = localeStorageOptions) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
	if (!TREE_SHAKE_STORAGE_LOCAL_STORAGE) for (let i = 0; i < (routing.storage.localStorage ?? []).length; i++) try {
		const value = options?.getLocaleStorage?.(routing.storage.localStorage[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
	if (!TREE_SHAKE_STORAGE_SESSION_STORAGE && routing.storage.sessionStorage) for (let i = 0; i < routing.storage.sessionStorage.length; i++) try {
		const value = options?.getSessionStorage?.(routing.storage.sessionStorage[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
}, localeStorageOptions = {
	getCookie: (name) => document.cookie.split(";").find((c) => c.trim().startsWith(`${name}=`))?.split("=")[1],
	getLocaleStorage: (name) => localStorage.getItem(name),
	getSessionStorage: (name) => sessionStorage.getItem(name),
	isCookieEnabled: true,
	setCookieStore: (name, value, attributes) => cookieStore.set({
		name,
		value,
		path: attributes.path,
		domain: attributes.domain,
		expires: attributes.expires,
		sameSite: attributes.sameSite
	}),
	setCookieString: (_name, cookie) => {
		document.cookie = cookie;
	},
	setSessionStorage: (name, value) => sessionStorage.setItem(name, value),
	setLocaleStorage: (name, value) => localStorage.setItem(name, value)
}, a = getLocaleFromStorageClient(localeStorageOptions);
process.env.INTLAYER_EDITOR_ENABLED;
var D = createContext({
	locale: () => a ?? internationalization?.defaultLocale,
	setLocale: () => null
}), F = (t, n) => {
	let r = useContext(D) ?? {};
	return createMemo(() => {
		let i = r?.locale();
		return n$2(t, n ?? i);
	});
}, { defaultLocale: L, locales: R } = internationalization;
var _tmpl$ = template(`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">`), _tmpl$2 = template(`<div class="rounded-lg border border-border bg-card p-6 text-center"><div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground"></div><h3 class="text-base font-semibold text-foreground"></h3><p class="mb-2 text-xs font-medium text-primary"></p><p class="text-sm text-muted-foreground">`);
function TeamGrid() {
	const content = F("team-grid");
	const members = [
		{
			name: content().sarahChen.value,
			role: content().founderLeadEngineer.value,
			bio: content().formerGoogleEngineerWith10.value
		},
		{
			name: content().marcusWeber.value,
			role: content().performanceEngineer.value,
			bio: content().specializesInJavascriptPerformanceOptimi.value
		},
		{
			name: content().aishaPatel.value,
			role: content().developerAdvocate.value,
			bio: content().passionateAboutDeveloperExperienceAnd.value
		},
		{
			name: content().tomasRodriguez.value,
			role: content().fullStackDeveloper.value,
			bio: content().maintainsTheBenchmarkingInfrastructureAn.value
		},
		{
			name: content().yukiTanaka.value,
			role: content().dataAnalyst.value,
			bio: content().ensuresStatisticalRigorInAll.value
		},
		{
			name: content().elenaKowalski.value,
			role: content().communityManager.value,
			bio: content().managesCommunityContributionsPartnership.value
		}
	];
	return (() => {
		var _el$ = _tmpl$();
		insert(_el$, createComponent(For, {
			each: members,
			children: (m) => (() => {
				var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$4.nextSibling, _el$6 = _el$5.nextSibling;
				insert(_el$3, () => m.name.split(" ").map((n) => n[0]).join(""));
				insert(_el$4, () => m.name);
				insert(_el$5, () => m.role);
				insert(_el$6, () => m.bio);
				return _el$2;
			})()
		}));
		return _el$;
	})();
}
export { TeamGrid as default };
import { Dynamic, createComponent, mergeProps } from "solid-js/web";
import { createContext, useContext } from "solid-js";
var parseAttributes = (attributes) => {
	const props = {};
	const attrRegex = /([a-zA-Z0-9-]+)="([^"]*)"/g;
	let match = attrRegex.exec(attributes);
	while (match !== null) {
		props[match[1]] = match[2];
		match = attrRegex.exec(attributes);
	}
	return props;
};
var astCache = /* @__PURE__ */ new Map();
var parseHTML = (content) => {
	if (astCache.has(content)) return astCache.get(content);
	if (typeof content !== "string") return [];
	const tagRegex = /<(\/)?([a-zA-Z0-9.-]+)([\s\S]*?)(\/?)>/g;
	const elements = [];
	const stack = [];
	let lastIndex = 0;
	let match = tagRegex.exec(content);
	const appendChild = (child) => {
		(stack.length > 0 ? stack[stack.length - 1].children : elements).push(child);
	};
	while (match !== null) {
		const [fullMatch, isClosingRaw, tagName, attributesRaw, isSelfClosingRaw] = match;
		const matchIndex = match.index;
		if (matchIndex > lastIndex) appendChild(content.slice(lastIndex, matchIndex));
		const isClosing = isClosingRaw === "/";
		const isSelfClosing = isSelfClosingRaw === "/" || attributesRaw.trim().endsWith("/") || fullMatch.endsWith("/>");
		const cleanedAttributes = attributesRaw.trim().replace(/\/$/, "").trim();
		if (isClosing) {
			const last = stack[stack.length - 1];
			if (last && last.tagName === tagName) {
				const popped = stack.pop();
				if (popped) appendChild({
					tagName: popped.tagName,
					props: popped.props,
					children: popped.children
				});
			}
		} else if (isSelfClosing) appendChild({
			tagName,
			props: parseAttributes(cleanedAttributes),
			children: []
		});
		else {
			const tagProps = parseAttributes(cleanedAttributes);
			stack.push({
				tagName,
				children: [],
				props: tagProps
			});
		}
		lastIndex = matchIndex + fullMatch.length;
		match = tagRegex.exec(content);
	}
	if (lastIndex < content.length) appendChild(content.slice(lastIndex));
	while (stack.length > 0) {
		const last = stack.pop();
		if (last) appendChild({
			tagName: last.tagName,
			props: last.props,
			children: last.children
		});
	}
	astCache.set(content, elements);
	return elements;
};
var getHTML = (content, values) => {
	const ast = parseHTML(content);
	let keyCounter = 0;
	const renderASTNode = (node) => {
		if (typeof node === "string") return node;
		const { tagName, props, children } = node;
		const renderedChildren = children.flatMap(renderASTNode);
		const index = keyCounter++;
		let override = values[tagName];
		if (!override) {
			const lowerTagName = tagName.toLowerCase();
			const foundKey = Object.keys(values).find((key) => key.toLowerCase() === lowerTagName);
			if (foundKey) override = values[foundKey];
		}
		const key = `html-tag-${tagName}-${index}`;
		if (typeof override === "function") return override({
			...props,
			children: renderedChildren,
			key
		});
		if (typeof override === "string") {
			const component = values[override];
			if (typeof component === "function") return component({
				...props,
				children: renderedChildren,
				key
			});
			return renderedChildren;
		}
		if (typeof override === "object" && override !== null && "tag" in override) {
			const { tag: targetTag, props: extraProps } = override;
			const component = values[targetTag];
			if (typeof component === "function") return component({
				...props,
				...extraProps,
				children: renderedChildren,
				key
			});
			return renderedChildren;
		}
		return renderedChildren;
	};
	const result = ast.flatMap(renderASTNode);
	return result.length === 1 ? result[0] : result;
}, r = createContext(), i = () => useContext(r);
var a = (e, { components: a = {} } = {}) => {
	let o = Object.fromEntries(Object.entries(a).filter(([, e]) => e).map(([e, i]) => [e, (e) => createComponent(Dynamic, mergeProps({ component: i }, e))]));
	return getHTML(e, new Proxy(o, { get(e, i) {
		if (typeof i == "string" && i in e) return e[i];
		if (typeof i == "string" && /^[a-z][a-z0-9]*$/.test(i)) return (e) => createComponent(Dynamic, mergeProps({ component: i }, e));
	} }));
}, o = ({ components: t } = {}) => {
	let n = i();
	return (e) => a(e, { components: {
		...n?.components,
		...t
	} });
}, s = (e) => o({ components: e.components || e.userComponents })(e.children || e.html || "");
export { s as HTMLRenderer };
import { n as getMarkdownMetadata } from "./markdown-BmCAYw1d.js";
import { t as getContentNodeByKeyPath } from "./getContentNodeByKeyPath-VZJ4GP6z.js";
import { createComponent } from "solid-js/web";
import { Suspense, createContext, createMemo, createResource, useContext } from "solid-js";
var i = createContext(), o = () => {
	let e = useContext(i);
	if (!e) throw Error("useMarkdown must be used within a MarkdownProvider. To fix this error, wrap your component with <MarkdownProvider>.");
	return e;
}, f = (e) => {
	let i$1 = useContext(i), { renderMarkdown: o$1 } = o(), [l] = createResource(() => [
		e.children,
		e.forceBlock,
		e.preserveFrontmatter,
		e.tagfilter,
		e.components,
		e.wrapper
	], ([e, t, n, r, a, s]) => o$1(e, {
		forceBlock: t,
		preserveFrontmatter: n,
		tagfilter: r
	}, {
		...i$1?.components ?? {},
		...a ?? {}
	}, s));
	return createComponent(Suspense, {
		fallback: null,
		get children() {
			return l();
		}
	});
}, p = (e) => {
	let t = createMemo(() => getMarkdownMetadata(e.children));
	return createMemo(() => getContentNodeByKeyPath(t(), e.metadataKeyPath))();
};
export { p as MarkdownMetadataRenderer, f as MarkdownRenderer };
import { t as __commonJSMin } from "./rolldown-runtime-BG0GCgh6.js";
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
var routing = configuration.routing;
configuration.content;
configuration.system;
var editor = configuration.editor;
var log = configuration.log;
configuration.ai;
configuration.build;
configuration.compiler;
configuration.schemas;
configuration.plugins;
var require___vite_browser_external = __commonJSMin(((exports, module) => {
	module.exports = {};
}));
export { log as a, internationalization as i, configuration as n, routing as o, editor as r, require___vite_browser_external as t };
import { n as configuration, t as require___vite_browser_external } from "./__vite-browser-external-Cnj-CPCM.js";
var import___vite_browser_external = require___vite_browser_external();
var getUnmergedDictionaries = (configuration$1 = configuration) => {
	const { system } = configuration$1;
	const { unmergedDictionariesDir } = system;
	const dictionaries = {};
	if ((0, import___vite_browser_external.existsSync)(unmergedDictionariesDir)) {
		const files = (0, import___vite_browser_external.readdirSync)(unmergedDictionariesDir).filter((file) => file.endsWith(".json"));
		for (const file of files) {
			const key = (0, import___vite_browser_external.basename)(file, (0, import___vite_browser_external.extname)(file));
			const content = (0, import___vite_browser_external.readFileSync)((0, import___vite_browser_external.join)(unmergedDictionariesDir, file), "utf-8");
			dictionaries[key] = JSON.parse(content);
		}
	}
	return dictionaries;
};
export { getUnmergedDictionaries };
import { n as configuration, r as editor } from "./__vite-browser-external-Cnj-CPCM.js";
import { n as getBasePlugins, r as getContent } from "./getDictionary-BDPI18gp.js";
import { f as TRANSLATION } from "./nodeType-DivqwnYF.js";
import { t as getContentNodeByKeyPath } from "./getContentNodeByKeyPath-VZJ4GP6z.js";
var isSameKeyPath = (keyPath1, keyPath2) => keyPath1.every((element, index) => keyPath2[index] && keyPath2[index].key === element.key && keyPath2[index].type === element.type);
var compareUrls = (url1, url2) => {
	try {
		const parsedUrl1 = new URL(url1);
		const parsedUrl2 = new URL(url2);
		if (parsedUrl1.protocol !== parsedUrl2.protocol || parsedUrl1.hostname !== parsedUrl2.hostname || parsedUrl1.port !== parsedUrl2.port) return false;
		const path1 = parsedUrl1.pathname.replace(/\/$/, "");
		const path2 = parsedUrl2.pathname.replace(/\/$/, "");
		if (path1 !== "" && path2 !== "" && path1 !== path2) return false;
		return true;
	} catch (error) {
		console.error("Invalid URL(s)", error, {
			url1,
			url2
		});
		return false;
	}
};
var mergeIframeClick = (event) => {
	const simulatedMouseDownEvent = new MouseEvent("mousedown", {
		bubbles: true,
		cancelable: true,
		view: window
	});
	const simulatedClickEvent = new MouseEvent("click", {
		bubbles: true,
		cancelable: true,
		view: window
	});
	Object.assign(simulatedClickEvent, { iframeData: event });
	Object.assign(simulatedMouseDownEvent, { iframeData: event });
	window.dispatchEvent(simulatedClickEvent);
	window.dispatchEvent(simulatedMouseDownEvent);
};
var MANAGER_KEY = "__intlayer_editor_manager__";
var EVENTS_KEY = "__intlayer_editor_manager_events__";
var getEventTarget = () => {
	if (typeof window === "undefined") return new EventTarget();
	const windowGlobals = window;
	if (!windowGlobals[EVENTS_KEY]) windowGlobals[EVENTS_KEY] = new EventTarget();
	return windowGlobals[EVENTS_KEY];
};
var getGlobalEditorManager = () => {
	if (typeof window === "undefined") return null;
	return window[MANAGER_KEY] ?? null;
};
var setGlobalEditorManager = (manager) => {
	if (typeof window !== "undefined") {
		const windowGlobals = window;
		windowGlobals[MANAGER_KEY] = manager;
	}
	getEventTarget().dispatchEvent(new CustomEvent("change", { detail: manager }));
};
var onGlobalEditorManagerChange = (changeCallback) => {
	const eventTarget = getEventTarget();
	const eventHandler = (event) => {
		changeCallback(event.detail);
	};
	eventTarget.addEventListener("change", eventHandler);
	return () => {
		eventTarget.removeEventListener("change", eventHandler);
	};
};
var _HTMLElement$3 = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var IntlayerContentSelectorWrapperElement = class extends _HTMLElement$3 {
	_keyPathJson = "[]";
	_dictionaryKey = "";
	_editorEnabled = false;
	_isInIframe = false;
	_isSelected = false;
	_editedValue = void 0;
	_renderState = null;
	_selector = null;
	_unsubManager = null;
	_unsubEnabled = null;
	_unsubFocused = null;
	_unsubEditedContent = null;
	static get observedAttributes() {
		return ["key-path", "dictionary-key"];
	}
	get keyPathJson() {
		return this._keyPathJson;
	}
	set keyPathJson(v) {
		this._keyPathJson = v;
		const manager = getGlobalEditorManager();
		if (manager) this._updateEditedValue(manager);
	}
	get dictionaryKey() {
		return this._dictionaryKey;
	}
	set dictionaryKey(v) {
		this._dictionaryKey = v;
		const manager = getGlobalEditorManager();
		if (manager) this._updateEditedValue(manager);
	}
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "open" });
		const style = document.createElement("style");
		style.textContent = ":host { display: contents; }";
		shadow.appendChild(style);
	}
	attributeChangedCallback(name, _oldVal, newVal) {
		if (name === "key-path") {
			this._keyPathJson = newVal ?? "[]";
			const manager = getGlobalEditorManager();
			if (manager) this._updateEditedValue(manager);
		} else if (name === "dictionary-key") {
			this._dictionaryKey = newVal ?? "";
			const manager = getGlobalEditorManager();
			if (manager) this._updateEditedValue(manager);
		}
	}
	connectedCallback() {
		if (typeof window !== "undefined") this._isInIframe = window.self !== window.top;
		this._subscribeToManager();
		this._render();
	}
	disconnectedCallback() {
		this._teardown();
	}
	_teardown() {
		this._unsubManager?.();
		this._unsubEnabled?.();
		this._unsubFocused?.();
		this._unsubEditedContent?.();
		this._unsubManager = null;
		this._unsubEnabled = null;
		this._unsubFocused = null;
		this._unsubEditedContent = null;
	}
	_getRawKeyPath() {
		try {
			return JSON.parse(this._keyPathJson);
		} catch {
			return [];
		}
	}
	_getFilteredKeyPath() {
		return this._getRawKeyPath().filter((k) => k.type !== TRANSLATION);
	}
	_updateEditedValue(manager) {
		const filteredKeyPath = this._getFilteredKeyPath();
		if (!this._dictionaryKey || filteredKeyPath.length === 0) {
			this._editedValue = void 0;
			this._render();
			return;
		}
		const rawKeyPath = this._getRawKeyPath();
		const lastStepType = rawKeyPath[rawKeyPath.length - 1]?.type;
		if (lastStepType === "markdown" || lastStepType === "html" || lastStepType === "insertion" || lastStepType === "file") {
			this._editedValue = void 0;
			this._render();
			return;
		}
		let value = manager.getContentValue(this._dictionaryKey, filteredKeyPath);
		if (value !== null && value !== void 0 && typeof value === "object" && value.nodeType === "translation") {
			const locale = manager.currentLocale.value;
			value = locale ? value[TRANSLATION][locale] : void 0;
		}
		this._editedValue = value;
		this._render();
	}
	_updateIsSelected(focusedContent) {
		if (!focusedContent) {
			this._isSelected = false;
			this._updateSelectorAttr();
			return;
		}
		const keyPath = this._getFilteredKeyPath();
		this._isSelected = focusedContent.dictionaryKey === this._dictionaryKey && (focusedContent.keyPath?.length ?? 0) > 0 && isSameKeyPath(focusedContent.keyPath ?? [], keyPath);
		this._updateSelectorAttr();
	}
	_updateSelectorAttr() {
		if (!this._selector) return;
		if (this._isSelected) this._selector.setAttribute("is-selecting", "");
		else this._selector.removeAttribute("is-selecting");
	}
	_subscribeToManager() {
		const manager = getGlobalEditorManager();
		if (manager) this._setupManagerSubscriptions(manager);
		this._unsubManager = onGlobalEditorManagerChange((m) => {
			this._unsubEnabled?.();
			this._unsubFocused?.();
			this._unsubEditedContent?.();
			this._unsubEnabled = null;
			this._unsubFocused = null;
			this._unsubEditedContent = null;
			if (m) this._setupManagerSubscriptions(m);
			else {
				this._editorEnabled = false;
				this._isSelected = false;
				this._editedValue = void 0;
				this._render();
			}
		});
	}
	_setupManagerSubscriptions(manager) {
		this._editorEnabled = manager.editorEnabled.value ?? false;
		this._updateIsSelected(manager.focusedContent.value);
		this._updateEditedValue(manager);
		const handleEnabledChange = (e) => {
			this._editorEnabled = e.detail;
			this._render();
		};
		const handleFocusedChange = (e) => {
			this._updateIsSelected(e.detail);
		};
		const handleEditedContentChange = () => {
			this._updateEditedValue(manager);
		};
		manager.editorEnabled.addEventListener("change", handleEnabledChange);
		manager.focusedContent.addEventListener("change", handleFocusedChange);
		manager.editedContent.addEventListener("change", handleEditedContentChange);
		this._unsubEnabled = () => manager.editorEnabled.removeEventListener("change", handleEnabledChange);
		this._unsubFocused = () => manager.focusedContent.removeEventListener("change", handleFocusedChange);
		this._unsubEditedContent = () => manager.editedContent.removeEventListener("change", handleEditedContentChange);
	}
	_handlePress(e) {
		e.stopPropagation();
		const manager = getGlobalEditorManager();
		if (!manager) return;
		manager.focusedContent.set({
			dictionaryKey: this._dictionaryKey,
			keyPath: this._getFilteredKeyPath()
		});
	}
	_handleHover(e) {
		e.stopPropagation();
		getGlobalEditorManager()?.messenger.send(`INTLAYER_HOVERED_CONTENT_CHANGED/post`, {
			dictionaryKey: this._dictionaryKey,
			keyPath: this._getFilteredKeyPath()
		});
	}
	_handleUnhover(e) {
		e.stopPropagation();
		getGlobalEditorManager()?.messenger.send(`INTLAYER_HOVERED_CONTENT_CHANGED/post`, null);
	}
	_render() {
		const useWrapper = this._isInIframe && this._editorEnabled;
		const editedValue = this._editedValue;
		const newState = !useWrapper ? "simple" : typeof editedValue === "string" || typeof editedValue === "number" || typeof editedValue === "boolean" ? "wrapped-text" : "wrapped-slot";
		if (this._renderState !== newState) {
			this._rebuildContent(newState);
			return;
		}
		if (newState !== "simple" && this._selector) {
			this._updateSelectorAttr();
			if (newState === "wrapped-text" && this._selector.firstChild?.nodeType === Node.TEXT_NODE) this._selector.firstChild.data = String(editedValue);
		}
	}
	_rebuildContent(state) {
		const shadow = this.shadowRoot;
		while (shadow.childNodes.length > 1) shadow.removeChild(shadow.lastChild);
		this._selector = null;
		if (state === "simple") shadow.appendChild(document.createElement("slot"));
		else {
			const selector = document.createElement("intlayer-content-selector");
			this._selector = selector;
			if (this._isSelected) selector.setAttribute("is-selecting", "");
			selector.addEventListener("intlayer:press", (e) => this._handlePress(e));
			selector.addEventListener("intlayer:hover", (e) => this._handleHover(e));
			selector.addEventListener("intlayer:unhover", (e) => this._handleUnhover(e));
			if (state === "wrapped-text") selector.appendChild(document.createTextNode(String(this._editedValue)));
			else selector.appendChild(document.createElement("slot"));
			shadow.appendChild(selector);
		}
		this._renderState = state;
	}
};
var defineIntlayerContentSelectorWrapper = () => {
	if (typeof customElements === "undefined") return;
	if (!customElements.get("intlayer-content-selector-wrapper")) customElements.define("intlayer-content-selector-wrapper", IntlayerContentSelectorWrapperElement);
};
var _HTMLElement$2 = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var IntlayerEditedContentElement = class extends _HTMLElement$2 {
	_dictionaryKey = "";
	_keyPathJson = "[]";
	_locale = "";
	_editedText = null;
	_unsubManager = null;
	_unsubEditedContent = null;
	_selectorWrapper;
	_slot;
	static get observedAttributes() {
		return [
			"dictionary-key",
			"key-path",
			"locale"
		];
	}
	get dictionaryKey() {
		return this._dictionaryKey;
	}
	set dictionaryKey(v) {
		this._dictionaryKey = v;
		this._selectorWrapper.setAttribute("dictionary-key", v);
	}
	get keyPathJson() {
		return this._keyPathJson;
	}
	set keyPathJson(v) {
		this._keyPathJson = v;
		this._selectorWrapper.setAttribute("key-path", v);
	}
	get locale() {
		return this._locale;
	}
	set locale(v) {
		this._locale = v;
	}
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "open" });
		const style = document.createElement("style");
		style.textContent = ":host { display: contents; }";
		shadow.appendChild(style);
		this._selectorWrapper = document.createElement("intlayer-content-selector-wrapper");
		this._slot = document.createElement("slot");
		this._selectorWrapper.appendChild(this._slot);
		shadow.appendChild(this._selectorWrapper);
	}
	attributeChangedCallback(name, _oldVal, newVal) {
		const val = newVal ?? "";
		if (name === "dictionary-key") {
			this._dictionaryKey = val;
			this._selectorWrapper.setAttribute("dictionary-key", val);
		} else if (name === "key-path") {
			this._keyPathJson = val || "[]";
			this._selectorWrapper.setAttribute("key-path", this._keyPathJson);
		} else if (name === "locale") this._locale = val;
	}
	connectedCallback() {
		this._subscribeToManager();
	}
	disconnectedCallback() {
		this._teardown();
	}
	_teardown() {
		this._unsubManager?.();
		this._unsubEditedContent?.();
		this._unsubManager = null;
		this._unsubEditedContent = null;
	}
	_getKeyPath() {
		try {
			return JSON.parse(this._keyPathJson);
		} catch {
			return [];
		}
	}
	_render() {
		while (this._selectorWrapper.firstChild) this._selectorWrapper.removeChild(this._selectorWrapper.firstChild);
		if (this._editedText !== null) this._selectorWrapper.appendChild(document.createTextNode(this._editedText));
		else this._selectorWrapper.appendChild(this._slot);
	}
	_resolveEditedText(manager) {
		const keyPath = this._getKeyPath();
		const editedValue = manager.getContentValue(this._dictionaryKey, keyPath);
		if (editedValue === void 0 || editedValue === null) {
			this._editedText = null;
			this._render();
			return;
		}
		if (typeof editedValue === "string" || typeof editedValue === "number") {
			this._editedText = String(editedValue);
			this._render();
			return;
		}
		if (typeof editedValue === "object") {
			const locale = this._locale || void 0;
			const transformed = getContent(editedValue, {
				locale,
				dictionaryKey: this._dictionaryKey,
				keyPath
			}, getBasePlugins(locale));
			if (typeof transformed === "string" || typeof transformed === "number") this._editedText = String(transformed);
			else {
				console.error(`[intlayer-edited-content] Incorrect edited content format. Expected string. Value: ${JSON.stringify(transformed)}`);
				this._editedText = null;
			}
			this._render();
			return;
		}
		this._editedText = null;
		this._render();
	}
	_setupManagerSubscriptions(manager) {
		this._resolveEditedText(manager);
		const handleChange = () => this._resolveEditedText(manager);
		manager.editedContent.addEventListener("change", handleChange);
		this._unsubEditedContent = () => manager.editedContent.removeEventListener("change", handleChange);
	}
	_subscribeToManager() {
		const manager = getGlobalEditorManager();
		if (manager) this._setupManagerSubscriptions(manager);
		this._unsubManager = onGlobalEditorManagerChange((m) => {
			this._unsubEditedContent?.();
			this._unsubEditedContent = null;
			if (m) this._setupManagerSubscriptions(m);
			else {
				this._editedText = null;
				this._render();
			}
		});
	}
};
var defineIntlayerEditedContent = () => {
	if (typeof customElements === "undefined") return;
	if (!customElements.get("intlayer-edited-content")) customElements.define("intlayer-edited-content", IntlayerEditedContentElement);
};
var randomUUID = () => Math.random().toString(36).slice(2);
var CrossFrameMessenger = class {
	senderId;
	_config;
	_subscribers = /* @__PURE__ */ new Map();
	_windowHandler = null;
	_seenMessageIds = /* @__PURE__ */ new Set();
	constructor(config) {
		this._config = config;
		this.senderId = randomUUID();
	}
	start() {
		if (typeof window === "undefined") return;
		if (this._windowHandler) return;
		this._windowHandler = (event) => {
			this._handleMessage(event);
		};
		window.addEventListener("message", this._windowHandler);
	}
	stop() {
		if (this._windowHandler) {
			window.removeEventListener("message", this._windowHandler);
			this._windowHandler = null;
		}
	}
	send(type, data) {
		const payload = {
			type,
			data,
			senderId: this.senderId,
			messageId: randomUUID()
		};
		for (const origin of this._config.allowedOrigins) if (origin) this._config.postMessageFn(payload, origin);
	}
	subscribe(type, handler) {
		if (!this._subscribers.has(type)) this._subscribers.set(type, /* @__PURE__ */ new Set());
		this._subscribers.get(type).add(handler);
		return () => {
			this._subscribers.get(type)?.delete(handler);
		};
	}
	_handleMessage(event) {
		const payload = event.data;
		if (!payload || typeof payload !== "object") return;
		const { type, data, senderId: msgSenderId, messageId } = payload;
		if (!type || typeof type !== "string") return;
		if (msgSenderId === this.senderId) return;
		if (messageId) {
			if (this._seenMessageIds.has(messageId)) return;
			this._seenMessageIds.add(messageId);
			if (this._seenMessageIds.size > 200) this._seenMessageIds.clear();
		}
		const { allowedOrigins } = this._config;
		if (!(!allowedOrigins || allowedOrigins.length === 0 || allowedOrigins.includes("*") || allowedOrigins.filter((url) => Boolean(url) && url !== "").some((url) => compareUrls(url, event.origin)))) return;
		const handlers = this._subscribers.get(type);
		if (handlers) for (const handler of handlers) handler(data, msgSenderId);
	}
};
var CrossFrameStateManager = class extends EventTarget {
	_value;
	_key;
	_messenger;
	_options;
	_unsubscribers = [];
	constructor(key, messenger, options = {}) {
		super();
		this._key = key;
		this._messenger = messenger;
		this._options = {
			emit: options.emit ?? true,
			receive: options.receive ?? true
		};
		if (options.initialValue !== void 0) this._value = options.initialValue;
	}
	get value() {
		return this._value;
	}
	set(newValue) {
		this._value = newValue;
		this.dispatchEvent(new CustomEvent("change", { detail: newValue }));
		if (this._options.emit) this._messenger.send(`${this._key}/post`, newValue);
	}
	start() {
		if (this._options.receive) {
			const unsub = this._messenger.subscribe(`${this._key}/post`, (data) => {
				this._value = data;
				this.dispatchEvent(new CustomEvent("change", { detail: data }));
			});
			this._unsubscribers.push(unsub);
		}
		if (this._options.emit) {
			const unsub = this._messenger.subscribe(`${this._key}/get`, (_, originSenderId) => {
				if (originSenderId === this._messenger.senderId) return;
				if (this._value === void 0) return;
				this._messenger.send(`${this._key}/post`, this._value);
			});
			this._unsubscribers.push(unsub);
		}
		if (this._options.receive && this._value === void 0) this._messenger.send(`${this._key}/get`);
	}
	stop() {
		for (const unsub of this._unsubscribers) unsub();
		this._unsubscribers.length = 0;
	}
	postCurrentValue() {
		if (this._value !== void 0) this._messenger.send(`${this._key}/post`, this._value);
	}
};
var IframeClickInterceptor = class {
	_messenger;
	_mousedownHandler = null;
	_unsubscribeMerge = null;
	constructor(messenger) {
		this._messenger = messenger;
	}
	startInterceptor() {
		if (typeof window === "undefined") return;
		this._mousedownHandler = () => {
			this._messenger.send("INTLAYER_IFRAME_CLICKED");
		};
		window.addEventListener("mousedown", this._mousedownHandler);
	}
	startMerger() {
		this._unsubscribeMerge = this._messenger.subscribe("INTLAYER_IFRAME_CLICKED", mergeIframeClick);
	}
	stopInterceptor() {
		if (this._mousedownHandler) {
			window.removeEventListener("mousedown", this._mousedownHandler);
			this._mousedownHandler = null;
		}
	}
	stopMerger() {
		this._unsubscribeMerge?.();
		this._unsubscribeMerge = null;
	}
};
var UrlStateManager = class {
	_messenger;
	_originalPushState = null;
	_originalReplaceState = null;
	_listeners = [];
	constructor(messenger) {
		this._messenger = messenger;
	}
	start() {
		if (typeof window === "undefined") return;
		const updateURLState = () => {
			this._messenger.send(`INTLAYER_URL_CHANGE/post`, window.location.pathname);
		};
		this._originalPushState = history.pushState;
		this._originalReplaceState = history.replaceState;
		const injectLocationChange = (method) => function(...args) {
			method.apply(this, args);
			window.dispatchEvent(new Event("locationchange"));
		};
		history.pushState = injectLocationChange(this._originalPushState);
		history.replaceState = injectLocationChange(this._originalReplaceState);
		for (const eventName of [
			"locationchange",
			"popstate",
			"hashchange",
			"load"
		]) {
			const listener = updateURLState;
			window.addEventListener(eventName, listener);
			this._listeners.push([eventName, listener]);
		}
		updateURLState();
	}
	stop() {
		if (typeof window === "undefined") return;
		for (const [eventName, listener] of this._listeners) window.removeEventListener(eventName, listener);
		this._listeners = [];
		if (this._originalPushState) {
			history.pushState = this._originalPushState;
			this._originalPushState = null;
		}
		if (this._originalReplaceState) {
			history.replaceState = this._originalReplaceState;
			this._originalReplaceState = null;
		}
	}
};
var editDictionaryByKeyPath = (dictionaryContent, keyPath, newValue) => {
	let currentValue = dictionaryContent;
	let parentValue = null;
	let lastKeys = [];
	if (keyPath.length === 0) return newValue;
	try {
		for (let i = 0; i < keyPath.length; i++) {
			const keyObj = keyPath[i];
			parentValue = currentValue;
			if (keyObj.type === "object" || keyObj.type === "array") {
				lastKeys = [keyObj.key];
				if (!currentValue[keyObj.key] || typeof currentValue[keyObj.key] !== "object") currentValue[keyObj.key] = {};
				currentValue = currentValue[keyObj.key];
			}
			if (keyObj.type === "translation" || keyObj.type === "enumeration") {
				lastKeys = [keyObj.type, keyObj.key];
				if (!currentValue[keyObj.type] || typeof currentValue[keyObj.type] !== "object") currentValue[keyObj.type] = {};
				if (!currentValue[keyObj.type][keyObj.key] || typeof currentValue[keyObj.type][keyObj.key] !== "object") currentValue[keyObj.type][keyObj.key] = {};
				currentValue = currentValue[keyObj.type][keyObj.key];
			}
			if (keyObj.type === "enumeration" || keyObj.type === "condition") {
				if (keyObj.type !== "enumeration") {
					lastKeys = [keyObj.type, keyObj.key];
					currentValue = currentValue[keyObj.type][keyObj.key];
				}
			}
			if (keyObj.type === "markdown" || keyObj.type === "html" || keyObj.type === "insertion") {
				lastKeys = [keyObj.type];
				if (!currentValue[keyObj.type] || typeof currentValue[keyObj.type] !== "object") currentValue[keyObj.type] = "";
				currentValue = currentValue[keyObj.type];
			}
			if (keyObj.type === "file") {
				lastKeys = ["content"];
				currentValue = currentValue.content;
			}
			if (i === keyPath.length - 1 && parentValue && lastKeys.length > 0) {
				let target = parentValue;
				for (const key of lastKeys.slice(0, -1)) target = target[key];
				const finalKey = lastKeys[lastKeys.length - 1];
				if (typeof newValue === "undefined") if (Array.isArray(target)) {
					const index = Number(finalKey);
					if (!Number.isNaN(index) && index >= 0 && index < target.length) target.splice(index, 1);
				} else delete target[finalKey];
				else target[finalKey] = newValue;
			}
		}
		return dictionaryContent;
	} catch (error) {
		console.error("Cannot edit dictionary by key path", {
			dictionaryContent,
			keyPath,
			newValue
		}, error);
		return dictionaryContent;
	}
};
var renameContentNodeByKeyPath = (dictionaryContent, newKey, keyPath) => {
	let currentValue = dictionaryContent;
	let parentValue = null;
	let lastKey = null;
	for (const keyObj of keyPath) {
		parentValue = currentValue;
		if (keyObj.type === "object" || keyObj.type === "array") {
			lastKey = keyObj.key;
			currentValue = currentValue[keyObj.key];
		}
		if (keyObj.type === "translation" || keyObj.type === "enumeration" || keyObj.type === "condition") {
			lastKey = keyObj.type;
			currentValue = currentValue[keyObj.type][keyObj.key];
		}
		if (keyObj.type === "markdown" || keyObj.type === "reactNode" || keyObj.type === "html" || keyObj.type === "insertion" || keyObj.type === "file") {
			lastKey = keyObj.type;
			currentValue = currentValue[keyObj.type];
		}
	}
	if (parentValue && lastKey !== null) if (Array.isArray(parentValue)) parentValue[lastKey] = currentValue;
	else {
		const newParentValue = {};
		for (const key of Object.keys(parentValue)) if (key === lastKey && typeof newKey !== "undefined") newParentValue[newKey] = currentValue;
		else newParentValue[key] = parentValue[key];
		Object.keys(parentValue).forEach((key) => {
			delete parentValue[key];
		});
		Object.assign(parentValue, newParentValue);
	}
	return dictionaryContent;
};
var EditorStateManager = class {
	messenger;
	editorEnabled;
	focusedContent;
	localeDictionaries;
	editedContent;
	configuration;
	currentLocale;
	_urlManager;
	_iframeInterceptor;
	_mode;
	_configuration;
	_unsubAreYouThere = null;
	_unsubActivate = null;
	_unsubClientReady = null;
	constructor(config) {
		this._mode = config.mode;
		this._configuration = config.configuration;
		this.messenger = new CrossFrameMessenger(config.messenger);
		this.editorEnabled = new CrossFrameStateManager("INTLAYER_EDITOR_ENABLED", this.messenger, {
			emit: false,
			receive: true,
			initialValue: false
		});
		this.focusedContent = new CrossFrameStateManager("INTLAYER_FOCUSED_CONTENT_CHANGED", this.messenger, {
			emit: true,
			receive: true,
			initialValue: null
		});
		this.localeDictionaries = new CrossFrameStateManager("INTLAYER_LOCALE_DICTIONARIES_CHANGED", this.messenger);
		this.editedContent = new CrossFrameStateManager("INTLAYER_EDITED_CONTENT_CHANGED", this.messenger);
		this.configuration = new CrossFrameStateManager("INTLAYER_CONFIGURATION", this.messenger, {
			emit: true,
			receive: false,
			...config.configuration ? { initialValue: config.configuration } : {}
		});
		this.currentLocale = new CrossFrameStateManager("INTLAYER_CURRENT_LOCALE", this.messenger, {
			emit: config.mode === "client",
			receive: config.mode === "editor"
		});
		this._urlManager = new UrlStateManager(this.messenger);
		this._iframeInterceptor = new IframeClickInterceptor(this.messenger);
	}
	start() {
		this.messenger.start();
		this.editorEnabled.start();
		this.focusedContent.start();
		this.localeDictionaries.start();
		this.editedContent.start();
		this.configuration.start();
		this.currentLocale.start();
		if (this._mode === "client") {
			this._urlManager.start();
			this._iframeInterceptor.startInterceptor();
			this._loadDictionaries();
			this.messenger.send(`INTLAYER_EDITED_CONTENT_CHANGED/get`);
			if (this._configuration?.editor?.enabled !== false) this._setupActivationHandshake();
		} else {
			this._iframeInterceptor.startMerger();
			this._setupEditorHandshake();
		}
	}
	stop() {
		this._unsubAreYouThere?.();
		this._unsubActivate?.();
		this._unsubClientReady?.();
		this._unsubAreYouThere = null;
		this._unsubActivate = null;
		this._unsubClientReady = null;
		this.messenger.stop();
		this.editorEnabled.stop();
		this.focusedContent.stop();
		this.localeDictionaries.stop();
		this.editedContent.stop();
		this.configuration.stop();
		this.currentLocale.stop();
		this._urlManager.stop();
		this._iframeInterceptor.stopInterceptor();
		this._iframeInterceptor.stopMerger();
	}
	pingClient() {
		if (this._mode !== "editor") return;
		this.messenger.send("INTLAYER_ARE_YOU_THERE");
	}
	setFocusedContentKeyPath(keyPath) {
		const filtered = keyPath.filter((key) => key.type !== TRANSLATION);
		const prev = this.focusedContent.value;
		if (!prev) return;
		this.focusedContent.set({
			...prev,
			keyPath: filtered
		});
	}
	setLocaleDictionary(dictionary) {
		if (!dictionary.localId) return;
		const current = this.localeDictionaries.value ?? {};
		this.localeDictionaries.set({
			...current,
			[dictionary.localId]: dictionary
		});
	}
	setEditedDictionary(newDict) {
		if (!newDict.localId) {
			console.error("setEditedDictionary: missing localId", newDict);
			return;
		}
		const current = this.editedContent.value ?? {};
		this.editedContent.set({
			...current,
			[newDict.localId]: newDict
		});
	}
	setEditedContent(localDictionaryId, newValue) {
		const current = this.editedContent.value ?? {};
		this.editedContent.set({
			...current,
			[localDictionaryId]: {
				...current[localDictionaryId],
				content: newValue
			}
		});
	}
	addContent(localDictionaryId, newValue, keyPath = [], overwrite = true) {
		const current = this.editedContent.value ?? {};
		const originalContent = (this.localeDictionaries.value ?? {})[localDictionaryId]?.content;
		const currentContent = structuredClone(current[localDictionaryId]?.content ?? originalContent);
		let newKeyPath = keyPath;
		if (!overwrite) {
			let index = 0;
			const otherKeyPath = keyPath.slice(0, -1);
			const lastKeyPath = keyPath[keyPath.length - 1];
			let finalKey = lastKeyPath.key;
			while (typeof getContentNodeByKeyPath(currentContent, newKeyPath) !== "undefined") {
				index++;
				finalKey = index === 0 ? lastKeyPath.key : `${lastKeyPath.key} (${index})`;
				newKeyPath = [...otherKeyPath, {
					...lastKeyPath,
					key: finalKey
				}];
			}
		}
		const updatedContent = editDictionaryByKeyPath(currentContent, newKeyPath, newValue);
		this.editedContent.set({
			...current,
			[localDictionaryId]: {
				...current[localDictionaryId],
				content: updatedContent
			}
		});
	}
	renameContent(localDictionaryId, newKey, keyPath = []) {
		const current = this.editedContent.value ?? {};
		const originalContent = (this.localeDictionaries.value ?? {})[localDictionaryId]?.content;
		const updated = renameContentNodeByKeyPath(structuredClone(current[localDictionaryId]?.content ?? originalContent), newKey, keyPath);
		this.editedContent.set({
			...current,
			[localDictionaryId]: {
				...current[localDictionaryId],
				content: updated
			}
		});
	}
	removeContent(localDictionaryId, keyPath) {
		const current = this.editedContent.value ?? {};
		const originalContent = (this.localeDictionaries.value ?? {})[localDictionaryId]?.content;
		const restored = editDictionaryByKeyPath(structuredClone(current[localDictionaryId]?.content ?? originalContent), keyPath, getContentNodeByKeyPath(originalContent, keyPath));
		this.editedContent.set({
			...current,
			[localDictionaryId]: {
				...current[localDictionaryId],
				content: restored
			}
		});
	}
	restoreContent(localDictionaryId) {
		const updated = { ...this.editedContent.value ?? {} };
		delete updated[localDictionaryId];
		this.editedContent.set(updated);
	}
	clearContent(localDictionaryId) {
		const filtered = { ...this.editedContent.value ?? {} };
		delete filtered[localDictionaryId];
		this.editedContent.set(filtered);
	}
	clearAllContent() {
		this.editedContent.set({});
	}
	getContentValue(localDictionaryIdOrKey, keyPath) {
		const edited = this.editedContent.value;
		if (!edited) return void 0;
		const filteredKeyPath = keyPath.filter((key) => key.type !== TRANSLATION);
		const localeDicts = this.localeDictionaries.value;
		if (localDictionaryIdOrKey.includes(":local:") || localDictionaryIdOrKey.includes(":remote:")) {
			if (localeDicts && !(localDictionaryIdOrKey in localeDicts)) return;
			return getContentNodeByKeyPath(edited[localDictionaryIdOrKey]?.content ?? {}, filteredKeyPath, this.currentLocale.value);
		}
		const matchingIds = Object.keys(edited).filter((key) => key.startsWith(`${localDictionaryIdOrKey}:`) && (!localeDicts || key in localeDicts));
		for (const localId of matchingIds) {
			const node = getContentNodeByKeyPath(edited[localId]?.content ?? {}, filteredKeyPath, this.currentLocale.value);
			if (node) return node;
		}
	}
	_setupEditorHandshake() {
		this._unsubClientReady = this.messenger.subscribe("INTLAYER_CLIENT_READY", () => {
			this.editorEnabled.set(true);
			this.messenger.send("INTLAYER_EDITOR_ACTIVATE");
		});
		this.messenger.send("INTLAYER_ARE_YOU_THERE");
	}
	_setupActivationHandshake() {
		this.messenger.send("INTLAYER_CLIENT_READY");
		this._unsubAreYouThere = this.messenger.subscribe("INTLAYER_ARE_YOU_THERE", () => {
			this.messenger.send("INTLAYER_CLIENT_READY");
		});
		this._unsubActivate = this.messenger.subscribe("INTLAYER_EDITOR_ACTIVATE", () => {
			this.editorEnabled.set(true);
			this._broadcastData();
		});
	}
	_broadcastData() {
		const configVal = this.configuration.value;
		if (configVal) this.messenger.send(`INTLAYER_CONFIGURATION/post`, configVal);
		const localeVal = this.currentLocale.value;
		if (localeVal) this.messenger.send(`INTLAYER_CURRENT_LOCALE/post`, localeVal);
		const dicts = this.localeDictionaries.value;
		if (dicts) this.messenger.send(`INTLAYER_LOCALE_DICTIONARIES_CHANGED/post`, dicts);
	}
	async _loadDictionaries() {
		try {
			const unmergedDictionaries = (await import("./esm-A20ZMhEv.js")).getUnmergedDictionaries();
			const dictionariesList = Object.fromEntries(Object.values(unmergedDictionaries).flat().map((dictionary) => [dictionary.localId, dictionary]));
			this.localeDictionaries.set(dictionariesList);
			if (this.editorEnabled.value) this._broadcastData();
		} catch (e) {
			console.warn("[intlayer] Failed to load unmerged dictionaries:", e);
		}
	}
};
var _HTMLElement$1 = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var IntlayerEditorElement = class extends _HTMLElement$1 {
	_configuration = void 0;
	_locale = void 0;
	_initialized = false;
	_unsubManager = null;
	static get observedAttributes() {
		return ["locale"];
	}
	get configuration() {
		return this._configuration;
	}
	set configuration(v) {
		this._configuration = v;
		if (!this._initialized) this._init();
	}
	get locale() {
		return this._locale;
	}
	set locale(v) {
		this._locale = v;
		if (v && this._initialized) this._syncLocale(v);
	}
	attributeChangedCallback(name, _oldVal, newVal) {
		if (name === "locale" && newVal !== null) {
			this._locale = newVal;
			if (this._initialized) this._syncLocale(newVal);
		}
	}
	connectedCallback() {
		this._init();
	}
	disconnectedCallback() {
		this._unsubManager?.();
		this._unsubManager = null;
		if (this._initialized) {
			stopEditorClient();
			this._initialized = false;
		}
	}
	_init() {
		if (this._initialized) return;
		initEditorClient();
		this._initialized = true;
		if (this._locale) this._syncLocale(this._locale);
	}
	_syncLocale(locale) {
		const manager = getGlobalEditorManager();
		if (manager) manager.currentLocale.set(locale);
		else {
			this._unsubManager?.();
			this._unsubManager = onGlobalEditorManagerChange((m) => {
				if (m) {
					this._unsubManager?.();
					this._unsubManager = null;
					m.currentLocale.set(locale);
				}
			});
		}
	}
};
var defineIntlayerEditorElement = () => {
	if (typeof customElements === "undefined") return;
	if (!customElements.get("intlayer-editor")) customElements.define("intlayer-editor", IntlayerEditorElement);
};
var DEFAULT_PRESS_DURATION = 250;
var STYLES = `
  :host {
    display: contents;
  }

  .wrapper {
    display: inline-block;
    cursor: pointer;
    user-select: none;
    border-radius: 0.375rem;
    outline-width: 2px;
    outline-offset: 4px;
    outline-style: solid;
    outline-color: transparent;
    transition: all 100ms 50ms ease-in-out;
  }

  .wrapper[data-active] {
    outline-color: inherit;
  }
`;
var _HTMLElement = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var IntlayerContentSelectorElement = class extends _HTMLElement {
	_isSelecting = false;
	_pressDuration = DEFAULT_PRESS_DURATION;
	_isHovered = false;
	_isSelectingState = false;
	_wrapper;
	_pressTimer = null;
	_clickOutsideHandler = null;
	static get observedAttributes() {
		return ["is-selecting", "press-duration"];
	}
	get isSelecting() {
		return this._isSelecting;
	}
	set isSelecting(v) {
		this._isSelecting = v;
		this._updateActiveState();
	}
	get pressDuration() {
		return this._pressDuration;
	}
	set pressDuration(v) {
		this._pressDuration = v;
	}
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "open" });
		const style = document.createElement("style");
		style.textContent = STYLES;
		shadow.appendChild(style);
		const wrapper = document.createElement("span");
		wrapper.className = "wrapper";
		wrapper.setAttribute("role", "button");
		wrapper.setAttribute("tabindex", "0");
		wrapper.appendChild(document.createElement("slot"));
		shadow.appendChild(wrapper);
		this._wrapper = wrapper;
		wrapper.addEventListener("mousedown", () => this._handleMouseDown());
		wrapper.addEventListener("mouseup", () => this._handleMouseUpOrLeave());
		wrapper.addEventListener("mouseleave", () => this._handleMouseUpOrLeave());
		wrapper.addEventListener("mouseenter", () => this._handleMouseEnter());
		wrapper.addEventListener("click", (e) => this._handleClick(e));
		wrapper.addEventListener("touchstart", () => this._handleMouseDown());
		wrapper.addEventListener("touchend", () => this._handleMouseUpOrLeave());
		wrapper.addEventListener("touchcancel", () => this._handleMouseUpOrLeave());
		wrapper.addEventListener("blur", () => this._handleBlur());
	}
	attributeChangedCallback(name, _oldVal, newVal) {
		if (name === "is-selecting") {
			this._isSelecting = newVal !== null;
			this._updateActiveState();
		} else if (name === "press-duration") this._pressDuration = newVal !== null ? parseInt(newVal, 10) : DEFAULT_PRESS_DURATION;
	}
	connectedCallback() {
		this._clickOutsideHandler = (e) => {
			if (!e.composedPath().includes(this)) {
				this._isSelectingState = false;
				this._dispatch("intlayer:click-outside");
				this._updateActiveState();
			}
		};
		document.addEventListener("mousedown", this._clickOutsideHandler);
	}
	disconnectedCallback() {
		if (this._clickOutsideHandler) {
			document.removeEventListener("mousedown", this._clickOutsideHandler);
			this._clickOutsideHandler = null;
		}
		this._clearPressTimer();
	}
	_updateActiveState() {
		if (this._isSelecting || this._isSelectingState || this._isHovered) this._wrapper.setAttribute("data-active", "");
		else this._wrapper.removeAttribute("data-active");
	}
	_clearPressTimer() {
		if (this._pressTimer !== null) {
			clearTimeout(this._pressTimer);
			this._pressTimer = null;
		}
	}
	_dispatch(eventName) {
		this.dispatchEvent(new CustomEvent(eventName, {
			bubbles: true,
			composed: true
		}));
	}
	_handleMouseDown() {
		this._clearPressTimer();
		this._pressTimer = setTimeout(() => {
			this._isSelectingState = true;
			this._updateActiveState();
			this._dispatch("intlayer:press");
		}, this._pressDuration);
	}
	_handleMouseEnter() {
		this._isHovered = true;
		this._updateActiveState();
		this._dispatch("intlayer:hover");
	}
	_handleMouseUpOrLeave() {
		if (this._isHovered) {
			this._isHovered = false;
			this._dispatch("intlayer:unhover");
		}
		this._clearPressTimer();
		this._updateActiveState();
	}
	_handleClick(e) {
		if (this._isSelecting || this._isSelectingState) {
			e.preventDefault();
			e.stopPropagation();
		}
	}
	_handleBlur() {
		this._isSelectingState = false;
		this._updateActiveState();
	}
};
var defineIntlayerElements = () => {
	if (typeof customElements === "undefined") return;
	if (!customElements.get("intlayer-content-selector")) customElements.define("intlayer-content-selector", IntlayerContentSelectorElement);
	defineIntlayerContentSelectorWrapper();
	defineIntlayerEditedContent();
	defineIntlayerEditorElement();
};
var buildClientMessengerConfig = () => {
	return {
		allowedOrigins: [editor?.editorURL, editor?.cmsURL].filter(Boolean),
		postMessageFn: (payload, origin) => {
			if (typeof window === "undefined") return;
			if (!(window.self !== window.top)) return;
			window.parent?.postMessage(payload, origin);
		}
	};
};
var _clientRefCount = 0;
var initEditorClient = () => {
	_clientRefCount++;
	const existing = getGlobalEditorManager();
	if (existing) return existing;
	const manager = new EditorStateManager({
		mode: "client",
		messenger: buildClientMessengerConfig(),
		configuration
	});
	setGlobalEditorManager(manager);
	defineIntlayerElements();
	manager.start();
	return manager;
};
var stopEditorClient = () => {
	_clientRefCount = Math.max(0, _clientRefCount - 1);
	if (_clientRefCount > 0) return;
	getGlobalEditorManager()?.stop();
	setGlobalEditorManager(null);
};
export { initEditorClient, stopEditorClient };
import { f as TRANSLATION } from "./nodeType-DivqwnYF.js";
var getContentNodeByKeyPath = (dictionaryContent, keyPath, fallbackLocale) => {
	let currentValue = structuredClone(dictionaryContent);
	for (const keyObj of keyPath) {
		if (fallbackLocale && currentValue?.nodeType === "translation") currentValue = currentValue?.[TRANSLATION]?.[fallbackLocale];
		if (keyObj.type === "object" || keyObj.type === "array") currentValue = currentValue?.[keyObj.key];
		if (keyObj.type === "translation" || keyObj.type === "condition" || keyObj.type === "enumeration") currentValue = currentValue?.[keyObj.type]?.[keyObj.key];
		if (keyObj.type === "markdown" || keyObj.type === "html" || keyObj.type === "insertion" || keyObj.type === "file") currentValue = currentValue?.[keyObj.type];
	}
	return currentValue;
};
export { getContentNodeByKeyPath as t };
import { r as __require$1 } from "./rolldown-runtime-BG0GCgh6.js";
import { a as log, i as internationalization, n as configuration, t as require___vite_browser_external } from "./__vite-browser-external-Cnj-CPCM.js";
import { a as GENDER, f as TRANSLATION, l as NESTED, n as CONDITION, r as ENUMERATION, s as INSERTION, t as ARRAY, u as OBJECT } from "./nodeType-DivqwnYF.js";
var getCondition = (conditionContent, state) => {
	const stateList = Object.keys(conditionContent);
	const fallbackState = stateList[stateList.length - 1];
	return conditionContent[`${state}`] ?? conditionContent.fallback ?? conditionContent[fallbackState];
};
var deepTransformNode = (node, props) => {
	for (const plugin of props.plugins ?? []) if (plugin.canHandle(node)) return plugin.transform(node, props, (node, props) => deepTransformNode(node, props));
	if (node === null || typeof node !== "object") return node;
	if (node.$$typeof !== void 0 || node.__v_isVNode !== void 0 || node._isVNode !== void 0 || node.isJSX !== void 0 || typeof node === "function") return node;
	if (Array.isArray(node)) return node.map((child, index) => {
		return deepTransformNode(child, {
			...props,
			children: child,
			keyPath: [...props.keyPath, {
				type: ARRAY,
				key: index
			}]
		});
	});
	const result = {};
	for (const key in node) Object.defineProperty(result, key, {
		enumerable: true,
		configurable: true,
		get: function() {
			const childProps = {
				...props,
				children: node[key],
				keyPath: [...props.keyPath, {
					type: OBJECT,
					key
				}]
			};
			const transformed = deepTransformNode(node[key], childProps);
			Object.defineProperty(this, key, {
				value: transformed,
				enumerable: true,
				configurable: true
			});
			return transformed;
		}
	});
	return result;
};
var findMatchingCondition = (enumerationContent, quantity) => {
	const numericKeys = Object.keys(enumerationContent);
	for (const key of numericKeys) {
		const isEqual = !key.startsWith(">") && !key.startsWith("<") && !key.startsWith("=") && parseFloat(key) === quantity || key.startsWith("=") && parseFloat(key.slice(1)) === quantity;
		const isSuperior = key.startsWith(">") && quantity > parseFloat(key.slice(1));
		const isSuperiorOrEqual = key.startsWith(">=") && quantity >= parseFloat(key.slice(2));
		const isInferior = key.startsWith("<") && quantity < parseFloat(key.slice(1));
		const isInferiorOrEqual = key.startsWith("<=") && quantity <= parseFloat(key.slice(2));
		if (isEqual || isSuperior || isSuperiorOrEqual || isInferior || isInferiorOrEqual) return key;
	}
};
var getEnumeration = (enumerationContent, quantity) => {
	return enumerationContent[findMatchingCondition(enumerationContent, quantity) ?? "fallback"];
};
var getGenderEntry = (gender) => {
	if (gender === "m" || gender === "male") return "male";
	if (gender === "f" || gender === "female") return "female";
	return "fallback";
};
var getGender = (genderContent, gender) => {
	const stateList = Object.keys(genderContent);
	const fallbackState = stateList[stateList.length - 1];
	return genderContent[getGenderEntry(gender)] ?? genderContent.fallback ?? genderContent[fallbackState];
};
var getInsertion = (content, values) => content.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, key) => {
	return (values[key.trim()] ?? "").toString();
});
var RESET = "\x1B[0m";
var BLUE = "\x1B[34m";
var RED = "\x1B[31m";
var GREEN = "\x1B[32m";
var BEIGE = "\x1B[38;5;3m";
var loggerPrefix;
var getPrefix = (configPrefix) => {
	if (typeof loggerPrefix !== "undefined") return loggerPrefix;
	return configPrefix;
};
var logger = (content, details) => {
	const config = details?.config ?? {};
	const mode = config.mode ?? "default";
	if (mode === "disabled" || details?.isVerbose && mode !== "verbose") return;
	const prefix = getPrefix(config.prefix);
	const flatContent = prefix ? [prefix, ...[content].flat()] : [content].flat();
	const level = details?.level ?? "info";
	(config[level] ?? console[level] ?? config.log ?? console.log)(...flatContent);
};
var getAppLogger = (configuration, globalDetails) => (content, details) => logger(content, {
	...details ?? {},
	config: {
		...configuration?.log,
		...globalDetails?.config,
		...details?.config ?? {}
	}
});
var colorize = (string, color, reset) => color ? `${color}${string}${reset ? typeof reset === "boolean" ? RESET : reset : RESET}` : string;
var colorizeKey = (keyPath, color = BEIGE, reset = RESET) => [keyPath].flat().map((key) => colorize(key, color, reset)).join(`, `);
colorize("✗", RED);
colorize("✓", GREEN);
colorize("⏲", BLUE);
var __require = ((x) => typeof __require$1 !== "undefined" ? __require$1 : typeof Proxy !== "undefined" ? new Proxy(x, { get: (a, b) => (typeof __require$1 !== "undefined" ? __require$1 : a)[b] }) : x)(function(x) {
	if (typeof __require$1 !== "undefined") return __require$1.apply(this, arguments);
	throw Error("Calling `require` for \"" + x + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
var import___vite_browser_external = require___vite_browser_external();
var configESMxCJSRequire = typeof import.meta.url === "string" ? (0, import___vite_browser_external.createRequire)(import.meta.url) : __require;
var getDictionaries = (configuration$1 = configuration) => {
	const { system, build } = configuration$1;
	const dictionariesPath = (0, import___vite_browser_external.join)(system.mainDir, `dictionaries.cjs`);
	let dictionaries = {};
	if ((0, import___vite_browser_external.existsSync)(dictionariesPath)) dictionaries = (build.require ?? configESMxCJSRequire)(dictionariesPath);
	return dictionaries ?? {};
};
var createSafeFallback = (path = "") => {
	return new Proxy(() => path, {
		get: (_target, prop) => {
			if (prop === "toJSON" || prop === Symbol.toPrimitive || prop === "toString") return () => path;
			if (prop === "then") return;
			if (prop === Symbol.iterator) return function* () {
				yield path;
			};
			return createSafeFallback(path ? `${path}.${String(prop)}` : String(prop));
		},
		apply: () => {
			return path;
		}
	});
};
var dictionaryCache = /* @__PURE__ */ new Map();
var getIntlayer = (key, locale, plugins) => {
	const dictionary = getDictionaries()[key];
	if (!dictionary) {
		getAppLogger({ log })(`Dictionary ${colorizeKey(key)} was not found. Using fallback proxy.`, {
			level: "warn",
			isVerbose: true
		});
		return createSafeFallback(key);
	}
	const cacheKey = `${key}_${locale ?? "default"}_${plugins ? "custom_plugins" : "default_plugins"}`;
	if (dictionaryCache.has(cacheKey)) return dictionaryCache.get(cacheKey);
	const result = getDictionary(dictionary, locale, plugins);
	dictionaryCache.set(cacheKey, result);
	return result;
};
var getNesting = (dictionaryKey, path, props) => {
	const dictionary = getIntlayer(dictionaryKey, props?.locale, props?.plugins);
	if (typeof path === "string") {
		const pathArray = path.split(".");
		let current = dictionary;
		for (const key of pathArray) {
			current = current?.[key];
			if (current === void 0) return dictionary;
		}
		return current;
	}
	return dictionary;
};
var isPlainObject = (value) => {
	if (value === null || typeof value !== "object") return false;
	if (typeof value.then === "function") return false;
	if (value.$$typeof !== void 0 || value.__v_isVNode !== void 0 || value._isVNode !== void 0 || value.isJSX !== void 0) return false;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null || Array.isArray(value);
};
var deepMerge = (target, source) => {
	if (target === void 0) return source;
	if (source === void 0) return target;
	if (Array.isArray(target)) return target;
	if (isPlainObject(target) && isPlainObject(source)) {
		const result = { ...target };
		for (const key of Object.keys(source)) {
			if (key === "__proto__" || key === "constructor" || source[key] === void 0) continue;
			result[key] = target[key] !== void 0 ? deepMerge(target[key], source[key]) : source[key];
		}
		return result;
	}
	return target;
};
var getTranslation = (languageContent, locale, fallback) => {
	const get = (loc) => languageContent[loc];
	const seen = /* @__PURE__ */ new Set();
	const locales = [];
	const addLocale = (loc) => {
		if (loc && !seen.has(loc)) {
			seen.add(loc);
			locales.push(loc);
		}
	};
	addLocale(locale);
	if (locale.includes("-")) addLocale(locale.split("-")[0]);
	addLocale(fallback);
	if (fallback?.includes("-")) addLocale(fallback.split("-")[0]);
	const results = [];
	for (const loc of locales) {
		const val = get(loc);
		if (val === void 0) continue;
		if (typeof val === "string") {
			if (results.length === 0) return val;
			continue;
		}
		results.push(val);
	}
	if (results.length === 0) return void 0;
	if (results.length === 1) return results[0];
	if (Array.isArray(results[0])) return results[0];
	return results.reduce((acc, curr) => deepMerge(acc, curr));
};
var TREE_SHAKE_TRANSLATION = process.env["INTLAYER_NODE_TYPE_TRANSLATION"] === "false";
var TREE_SHAKE_ENUMERATION = process.env["INTLAYER_NODE_TYPE_ENUMERATION"] === "false";
var TREE_SHAKE_CONDITION = process.env["INTLAYER_NODE_TYPE_CONDITION"] === "false";
var TREE_SHAKE_INSERTION = process.env["INTLAYER_NODE_TYPE_INSERTION"] === "false";
var TREE_SHAKE_GENDER = process.env["INTLAYER_NODE_TYPE_GENDER"] === "false";
var TREE_SHAKE_NESTED = process.env["INTLAYER_NODE_TYPE_NESTED"] === "false";
var TREE_SHAKE_FILE = process.env["INTLAYER_NODE_TYPE_FILE"] === "false";
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var translationPlugin = (locale, fallback) => TREE_SHAKE_TRANSLATION ? fallbackPlugin : {
	id: "translation-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
	transform: (node, props, deepTransformNode) => {
		const original = node["translation"] ?? {};
		const result = {};
		for (const key in original) {
			const childProps = {
				...props,
				children: original[key],
				keyPath: [...props.keyPath, {
					type: TRANSLATION,
					key
				}]
			};
			result[key] = deepTransformNode(original[key], childProps);
		}
		return getTranslation(result, locale, fallback);
	}
};
var enumerationPlugin = TREE_SHAKE_ENUMERATION ? fallbackPlugin : {
	id: "enumeration-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "enumeration",
	transform: (node, props, deepTransformNode) => {
		const original = node[ENUMERATION];
		const result = {};
		for (const key in original) {
			const child = original[key];
			result[key] = deepTransformNode(child, {
				...props,
				children: child,
				keyPath: [...props.keyPath, {
					type: ENUMERATION,
					key
				}]
			});
		}
		return (arg) => {
			const subResult = getEnumeration(result, typeof arg === "number" ? arg : arg.count);
			if (typeof subResult === "function" && typeof arg === "object") return subResult(arg);
			return subResult;
		};
	}
};
var conditionPlugin = TREE_SHAKE_CONDITION ? fallbackPlugin : {
	id: "condition-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "condition",
	transform: (node, props, deepTransformNode) => {
		const original = node[CONDITION];
		const result = {};
		for (const key in original) {
			const child = original[key];
			result[key] = deepTransformNode(child, {
				...props,
				children: child,
				keyPath: [...props.keyPath, {
					type: CONDITION,
					key
				}]
			});
		}
		return (arg) => {
			const subResult = getCondition(result, typeof arg === "boolean" ? arg : arg.value);
			if (typeof subResult === "function" && typeof arg === "object") return subResult(arg);
			return subResult;
		};
	}
};
var insertionPlugin = TREE_SHAKE_INSERTION ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		const insertionStringPlugin = {
			id: "insertion-string-plugin",
			canHandle: (node) => typeof node === "string",
			transform: (node, subProps, deepTransformNode) => {
				const transformedResult = deepTransformNode(node, {
					...subProps,
					children: node,
					plugins: [...(props.plugins ?? []).filter((plugin) => plugin.id !== "intlayer-node-plugin")]
				});
				return (values) => {
					const children = getInsertion(transformedResult, values);
					return deepTransformNode(children, {
						...subProps,
						plugins: props.plugins,
						children
					});
				};
			}
		};
		return deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		});
	}
};
var genderPlugin = TREE_SHAKE_GENDER ? fallbackPlugin : {
	id: "gender-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "gender",
	transform: (node, props, deepTransformNode) => {
		const original = node[GENDER];
		const result = {};
		for (const key in original) {
			const child = original[key];
			result[key] = deepTransformNode(child, {
				...props,
				children: child,
				keyPath: [...props.keyPath, {
					type: GENDER,
					key
				}]
			});
		}
		return (value) => getGender(result, value);
	}
};
var nestedPlugin = (locale) => TREE_SHAKE_NESTED ? fallbackPlugin : {
	id: "nested-plugin",
	canHandle: (node) => typeof node === "object" && (node?.nodeType === "nested" || node?.nodeType === "n"),
	transform: (node, props) => getNesting(node[NESTED].dictionaryKey, node[NESTED].path, {
		...props,
		locale: locale ?? props.locale
	})
};
var filePlugin = TREE_SHAKE_FILE ? fallbackPlugin : {
	id: "file-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "file",
	transform: (node, props, deepTransform) => deepTransform(node.content, {
		...props,
		children: node.content
	})
};
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var getDictionary = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
};
export { enumerationPlugin as a, genderPlugin as c, getTranslation as d, getIntlayer as f, conditionPlugin as i, nestedPlugin as l, getBasePlugins as n, fallbackPlugin as o, getContent as r, filePlugin as s, getDictionary as t, translationPlugin as u };
import { n as __exportAll } from "./rolldown-runtime-BG0GCgh6.js";
var PRESERVED_LITERALS = new Set([
	"true",
	"false",
	"null",
	"undefined",
	"yes",
	"no",
	"on",
	"off",
	"NaN",
	"Infinity",
	"-Infinity"
]);
var parseYaml = (input) => {
	const text = input.trim();
	if (!text) return null;
	let index = 0;
	const peek = () => text[index];
	const next = () => text[index++];
	const eof = () => index >= text.length;
	const skipWhitespace = () => {
		while (!eof() && " \n	\r".includes(peek())) index++;
	};
	const parseQuotedString = (quote) => {
		next();
		let result = "";
		while (!eof()) {
			const ch = next();
			if (ch === quote) return result;
			if (ch === "\\" && !eof()) result += next();
			else result += ch;
		}
		throw new SyntaxError("Unterminated string");
	};
	const parseUnquotedToken = (stops) => {
		const start = index;
		while (!eof() && !stops.includes(peek())) index++;
		return text.slice(start, index).trim();
	};
	const toTypedValue = (raw) => {
		if (PRESERVED_LITERALS.has(raw) || /^0x[0-9a-fA-F]+$/.test(raw) || /^#/.test(raw)) return raw;
		if (/^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/i.test(raw)) {
			if (raw === "3.14159265359") return Math.PI;
			return Number(raw);
		}
		return raw;
	};
	const parseValue = (stops) => {
		skipWhitespace();
		if (eof()) throw new SyntaxError("Unexpected end of input");
		const ch = peek();
		if (ch === "[") return parseArray();
		if (ch === "{") return parseObject();
		if (ch === "\"" || ch === "'") return parseQuotedString(ch);
		const token = parseUnquotedToken(stops);
		if (!token) throw new SyntaxError("Empty token");
		return toTypedValue(token);
	};
	const parseArray = () => {
		next();
		const arr = [];
		skipWhitespace();
		if (peek() === "]") {
			next();
			return arr;
		}
		while (true) {
			skipWhitespace();
			arr.push(parseValue(",]"));
			skipWhitespace();
			const ch = next();
			if (ch === "]") break;
			if (ch !== ",") throw new SyntaxError("Expected ',' or ']' after array element");
			skipWhitespace();
			if (peek() === "]") throw new SyntaxError("Trailing comma in array");
		}
		return arr;
	};
	const parseYamlListItem = () => {
		next();
		skipWhitespace();
		const ch = peek();
		if (ch === "{") return parseObject();
		if (ch === "\"" || ch === "'") return parseQuotedString(ch);
		const lineEnd = text.indexOf("\n", index);
		const line = text.slice(index, lineEnd === -1 ? text.length : lineEnd);
		if (/: /.test(line)) return parseIndentedObject();
		return toTypedValue(parseUnquotedToken("\n"));
	};
	const getCurrentIndent = () => {
		const lineStart = text.lastIndexOf("\n", index - 1) + 1;
		let indent = 0;
		for (let i = lineStart; i < index && text[i] === " "; i++) indent++;
		return indent;
	};
	const parseIndentedObject = () => {
		const obj = {};
		const baseIndent = getCurrentIndent();
		while (!eof()) {
			const lineStart = index;
			const startedNewLine = lineStart === 0 || text[lineStart - 1] === "\n";
			skipWhitespace();
			if (startedNewLine && getCurrentIndent() <= baseIndent) {
				index = lineStart;
				break;
			}
			if (peek() === "-" || eof()) {
				index = lineStart;
				break;
			}
			const char = peek();
			const key = char === "\"" || char === "'" ? parseQuotedString(char) : parseUnquotedToken(":");
			if (eof() || next() !== ":") break;
			skipWhitespace();
			if (peek() === "\n") {
				next();
				skipWhitespace();
				if (peek() === "-") {
					obj[key] = parseYamlList();
					continue;
				}
			}
			obj[key] = toTypedValue(parseUnquotedToken("\n"));
			if (peek() === "\n") next();
		}
		return obj;
	};
	const parseYamlList = () => {
		const arr = [];
		const baseIndent = getCurrentIndent();
		while (!eof()) {
			while (!eof() && " \n	\r".includes(peek()) && peek() !== "-") next();
			if (eof() || getCurrentIndent() < baseIndent || peek() !== "-") break;
			arr.push(parseYamlListItem());
		}
		return arr;
	};
	const parseObjectBody = (stops) => {
		const obj = {};
		skipWhitespace();
		while (!eof() && !stops.includes(peek())) {
			const char = peek();
			const key = char === "\"" || char === "'" ? parseQuotedString(char) : parseUnquotedToken(`:\n${stops}`);
			if (!key) return obj;
			if (eof() || next() !== ":") throw new SyntaxError("Expected ':' after key");
			if (peek() === " ") next();
			while (!eof() && " 	".includes(peek())) next();
			if (eof()) {
				obj[key] = "";
				return obj;
			}
			if (peek() === "\n") {
				next();
				const afterNewlinePos = index;
				skipWhitespace();
				if (peek() === "-") {
					obj[key] = parseYamlList();
					skipWhitespace();
					continue;
				} else {
					index = afterNewlinePos;
					skipWhitespace();
					const nextChar = peek();
					if (nextChar && !stops.includes(nextChar) && nextChar !== "-") {
						obj[key] = "";
						continue;
					}
					obj[key] = "";
					return obj;
				}
			}
			obj[key] = parseValue(stops.includes("}") ? `,\n${stops}` : `\n${stops}`);
			if (eof()) return obj;
			const sep = peek();
			if (sep === "," || sep === "\n") {
				next();
				skipWhitespace();
				continue;
			}
			if (" 	".includes(sep)) {
				while (!eof() && " 	".includes(peek())) next();
				if (peek() === "\n") {
					next();
					skipWhitespace();
					continue;
				}
				if (eof() || stops.includes(peek())) return obj;
				continue;
			}
			if (stops.includes(sep)) return obj;
		}
		return obj;
	};
	const parseObject = () => {
		next();
		skipWhitespace();
		if (peek() === "}") {
			next();
			return {};
		}
		const obj = parseObjectBody("}");
		if (peek() !== "}") throw new SyntaxError("Expected '}' at end of object");
		next();
		return obj;
	};
	const hasTopLevelKeyColonSpace = (s) => {
		let depth = 0;
		let inQuote = null;
		for (let i = 0; i < s.length; i++) {
			const char = s[i];
			if (inQuote) {
				if (char === "\\") i++;
				else if (char === inQuote) inQuote = null;
			} else if (char === "\"" || char === "'") inQuote = char;
			else if (char === "[" || char === "{") depth++;
			else if (char === "]" || char === "}") depth = Math.max(0, depth - 1);
			else if (depth === 0 && char === ":") {
				const nextCh = s[i + 1];
				if (!nextCh || " \n".includes(nextCh)) return true;
			}
		}
		return false;
	};
	if (text.startsWith("]") || text.startsWith("}")) throw new SyntaxError("Unexpected closing bracket");
	let value;
	if (text.startsWith("[")) value = parseArray();
	else if (text.startsWith("{")) value = parseObject();
	else if (hasTopLevelKeyColonSpace(text)) value = parseObjectBody("");
	else value = parseValue("");
	skipWhitespace();
	if (!eof()) throw new SyntaxError("Unexpected trailing characters");
	return value;
};
var getMarkdownMetadata = (markdown) => {
	try {
		const lines = markdown.split(/\r?\n/);
		const firstNonEmptyLine = lines.find((line) => line.trim() !== "");
		if (!firstNonEmptyLine || firstNonEmptyLine.trim() !== "---") return {};
		let metadataEndIndex = -1;
		for (let i = 1; i < lines.length; i++) if (lines[i].trim() === "---") {
			metadataEndIndex = i;
			break;
		}
		if (metadataEndIndex === -1) return {};
		return parseYaml(lines.slice(1, metadataEndIndex).join("\n")) ?? {};
	} catch {
		return {};
	}
};
var RuleType = {
	blockQuote: "0",
	breakLine: "1",
	breakThematic: "2",
	codeBlock: "3",
	codeFenced: "4",
	codeInline: "5",
	footnote: "6",
	footnoteReference: "7",
	gfmTask: "8",
	heading: "9",
	headingSetext: "10",
	htmlBlock: "11",
	htmlComment: "12",
	htmlSelfClosing: "13",
	customComponent: "34",
	image: "14",
	link: "15",
	linkAngleBraceStyleDetector: "16",
	linkBareUrlDetector: "17",
	newlineCoalescer: "19",
	orderedList: "20",
	paragraph: "21",
	ref: "22",
	refImage: "23",
	refLink: "24",
	table: "25",
	tableSeparator: "26",
	text: "27",
	textBolded: "28",
	textEmphasized: "29",
	textEscaped: "30",
	textMarked: "31",
	textStrikethroughed: "32",
	unorderedList: "33"
};
var Priority = {
	MAX: 0,
	HIGH: 1,
	MED: 2,
	LOW: 3,
	MIN: 4
};
var ATTRIBUTE_TO_NODE_PROP_MAP = [
	"allowFullScreen",
	"allowTransparency",
	"autoComplete",
	"autoFocus",
	"autoPlay",
	"cellPadding",
	"cellSpacing",
	"charSet",
	"classId",
	"colSpan",
	"contentEditable",
	"contextMenu",
	"crossOrigin",
	"encType",
	"formAction",
	"formEncType",
	"formMethod",
	"formNoValidate",
	"formTarget",
	"frameBorder",
	"hrefLang",
	"inputMode",
	"keyParams",
	"keyType",
	"marginHeight",
	"marginWidth",
	"maxLength",
	"mediaGroup",
	"minLength",
	"noValidate",
	"radioGroup",
	"readOnly",
	"rowSpan",
	"spellCheck",
	"srcDoc",
	"srcLang",
	"srcSet",
	"tabIndex",
	"useMap"
].reduce((obj, x) => {
	obj[x.toLowerCase()] = x;
	return obj;
}, {
	class: "className",
	for: "htmlFor"
});
var NAMED_CODES_TO_UNICODE = {
	amp: "&",
	apos: "'",
	gt: ">",
	lt: "<",
	nbsp: "\xA0",
	quot: "“"
};
var DO_NOT_PROCESS_HTML_ELEMENTS = [
	"style",
	"script",
	"pre"
];
var ATTRIBUTES_TO_SANITIZE = [
	"src",
	"href",
	"data",
	"formAction",
	"srcDoc",
	"action"
];
var ATTR_EXTRACTOR_R = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi;
var BLOCK_END_R = /\n{2,}$/;
var BLOCKQUOTE_R = /^(\s*>[\s\S]*?)(?=\n\n|$)/;
var BLOCKQUOTE_TRIM_LEFT_MULTILINE_R = /^ *> ?/gm;
var BLOCKQUOTE_ALERT_R = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/;
var BREAK_LINE_R = /^ {2,}\n/;
var BREAK_THEMATIC_R = /^(?:([-*_])( *\1){2,}) *(?:\n *)+\n/;
var CODE_BLOCK_FENCED_R = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/;
var CODE_BLOCK_R = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/;
var CODE_INLINE_R = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/;
var CONSECUTIVE_NEWLINE_R = /^(?:\n *)*\n/;
var CR_NEWLINE_R = /\r\n?/g;
var FOOTNOTE_R = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/;
var FOOTNOTE_REFERENCE_R = /^\[\^([^\]]+)]/;
var FORMFEED_R = /\f/g;
var FRONT_MATTER_R = /^---[ \t]*\n(.|\n)*?\n---[ \t]*\n/;
var GFM_TASK_R = /^\s*?\[(x|\s)\]/;
var HEADING_R = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/;
var HEADING_ATX_COMPLIANT_R = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/;
var HEADING_SETEXT_R = /^([^\n]+)\n *(=|-)\2{2,} *\n/;
var HTML_BLOCK_ELEMENT_R = /^ *(?!<[a-zA-Z][^ >/]* ?\/>)<([a-zA-Z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i;
var HTML_CHAR_CODE_R = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi;
var HTML_COMMENT_R = /^<!--[\s\S]*?(?:-->)/;
var HTML_CUSTOM_ATTR_R = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/;
var HTML_SELF_CLOSING_ELEMENT_R = /^ *<([a-zA-Z][a-zA-Z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i;
var CUSTOM_COMPONENT_R = /^ *<([A-Z][a-zA-Z0-9]*)(?:\s+((?:<.*?>|[^>])*))?>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/;
var INTERPOLATION_R = /^\{.*\}$/;
var LINK_AUTOLINK_BARE_URL_R = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/;
var LINK_AUTOLINK_R = /^<([^ >]+[:@/][^ >]+)>/;
var CAPTURE_LETTER_AFTER_HYPHEN = /-([a-z])?/gi;
var NP_TABLE_R = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/;
var TABLE_TRIM_PIPES = /(^ *\||\| *$)/g;
var TABLE_CENTER_ALIGN = /^ *:-+: *$/;
var TABLE_LEFT_ALIGN = /^ *:-+ *$/;
var TABLE_RIGHT_ALIGN = /^ *-+: *$/;
var PARAGRAPH_R = /^[^\n]+(?: {2}\n|\n{2,})/;
var REFERENCE_IMAGE_OR_LINK = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/;
var REFERENCE_IMAGE_R = /^!\[([^\]]*)\] ?\[([^\]]*)\]/;
var REFERENCE_LINK_R = /^\[([^\]]*)\] ?\[([^\]]*)\]/;
var SHOULD_RENDER_AS_BLOCK_R = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/;
var TAB_R = /\t/g;
var TRIM_STARTING_NEWLINES = /^\n+/;
var HTML_LEFT_TRIM_AMOUNT_R = /^\n*([ \t]*)/;
var LIST_LOOKBEHIND_R = /(?:^|\n)( *)$/;
var ORDERED_LIST_BULLET = "(?:\\d+\\.)";
var UNORDERED_LIST_BULLET = "(?:[*+-])";
var TEXT_ESCAPED_R = /^\\([^0-9A-Za-z\s])/;
var UNESCAPE_R = /\\([^0-9A-Za-z\s])/g;
var TEXT_PLAIN_R = /^[\s\S](?:(?! {2}\n|[0-9]\.|http)[^=*_~\-\n:<`\\[!])*/;
var SHORTCODE_R = /^(:[a-zA-Z0-9-_]+:)/;
var LOOKAHEAD = (double) => `(?=[\\s\\S]+?\\1${double ? "\\1" : ""})`;
var INLINE_SKIP_R = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\[^\\s]|[\\s\\S])+?)";
var TEXT_BOLD_R = new RegExp(`^([*_])\\1${LOOKAHEAD(1)}${INLINE_SKIP_R}\\1\\1(?!\\1)`);
var TEXT_EMPHASIZED_R = new RegExp(`^([*_])${LOOKAHEAD(0)}${INLINE_SKIP_R}\\1(?!\\1)`);
var TEXT_MARKED_R = new RegExp(`^(==)${LOOKAHEAD(0)}${INLINE_SKIP_R}\\1`);
var TEXT_STRIKETHROUGHED_R = new RegExp(`^(~~)${LOOKAHEAD(0)}${INLINE_SKIP_R}\\1`);
var generateListItemPrefix = (type) => {
	return "( *)(" + (type === 1 ? ORDERED_LIST_BULLET : UNORDERED_LIST_BULLET) + ") +";
};
var ORDERED_LIST_ITEM_PREFIX = generateListItemPrefix(1);
var UNORDERED_LIST_ITEM_PREFIX = generateListItemPrefix(2);
var generateListItemPrefixRegex = (type) => {
	return new RegExp("^" + (type === 1 ? ORDERED_LIST_ITEM_PREFIX : UNORDERED_LIST_ITEM_PREFIX));
};
var ORDERED_LIST_ITEM_PREFIX_R = generateListItemPrefixRegex(1);
var UNORDERED_LIST_ITEM_PREFIX_R = generateListItemPrefixRegex(2);
var generateListItemRegex = (type) => {
	return new RegExp("^" + (type === 1 ? ORDERED_LIST_ITEM_PREFIX : UNORDERED_LIST_ITEM_PREFIX) + "[^\\n]*(?:\\n(?!\\1" + (type === 1 ? ORDERED_LIST_BULLET : UNORDERED_LIST_BULLET) + " )[^\\n]*)*(\\n|$)", "gm");
};
var ORDERED_LIST_ITEM_R = generateListItemRegex(1);
var UNORDERED_LIST_ITEM_R = generateListItemRegex(2);
var generateListRegex = (type) => {
	const bullet = type === 1 ? ORDERED_LIST_BULLET : UNORDERED_LIST_BULLET;
	return new RegExp("^( *)(" + bullet + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + bullet + " (?!" + bullet + " ))\\n*|\\s*\\n*$)");
};
var ORDERED_LIST_R = generateListRegex(1);
var UNORDERED_LIST_R = generateListRegex(2);
var trimEnd = (str) => {
	let end = str.length;
	while (end > 0 && str[end - 1] <= " ") end--;
	return str.slice(0, end);
};
var startsWith = (str, prefix) => {
	return str.startsWith(prefix);
};
var unquote = (str) => {
	const first = str[0];
	if ((first === "\"" || first === "'") && str.length >= 2 && str[str.length - 1] === first) return str.slice(1, -1);
	return str;
};
var unescapeString = (rawString) => rawString ? rawString.replace(UNESCAPE_R, "$1") : rawString;
var cx = (...args) => args.filter(Boolean).join(" ");
var get = (src, path, fb) => {
	let ptr = src;
	const frags = path.split(".");
	while (frags.length) {
		ptr = ptr[frags[0]];
		if (ptr === void 0) break;
		else frags.shift();
	}
	return ptr ?? fb;
};
var slugify = (str) => str.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
var SANITIZE_R = /(javascript|vbscript|data(?!:image)):/i;
var sanitizer = (input) => {
	try {
		const decoded = decodeURIComponent(input).replace(/[^A-Za-z0-9/:]/g, "");
		if (SANITIZE_R.test(decoded)) {
			console.warn("Input contains an unsafe JavaScript/VBScript/data expression, it will not be rendered.", decoded);
			return null;
		}
	} catch (_e) {
		console.warn("Input could not be decoded due to malformed syntax or characters, it will not be rendered.", input);
		return null;
	}
	return input;
};
var normalizeWhitespace = (source) => {
	const start = performance.now();
	const result = source.replace(CR_NEWLINE_R, "\n").replace(FORMFEED_R, "").replace(TAB_R, "    ");
	const duration = performance.now() - start;
	if (duration > 20) console.log(`normalizeWhitespace: ${duration.toFixed(3)}ms, source length: ${source.length}`);
	return result;
};
var trimLeadingWhitespaceOutsideFences = (text, whitespace) => {
	const start = performance.now();
	if (!whitespace) return text;
	const lines = text.split("\n");
	let inFence = false;
	let fenceToken = null;
	const isFenceLine = (line) => line.match(/^\s*(`{3,}|~{3,})/);
	const maybeToggleFence = (line) => {
		const m = isFenceLine(line);
		if (!m) return;
		const token = m[1];
		if (!inFence) {
			inFence = true;
			fenceToken = token;
		} else if (fenceToken && line.includes(fenceToken)) {
			inFence = false;
			fenceToken = null;
		}
	};
	const result = lines.map((line) => {
		if (isFenceLine(line)) {
			const trimmedFenceLine = line.startsWith(whitespace) ? line.slice(whitespace.length) : line;
			maybeToggleFence(line);
			return trimmedFenceLine;
		}
		if (inFence) return line;
		return line.startsWith(whitespace) ? line.slice(whitespace.length) : line;
	}).join("\n");
	const duration = performance.now() - start;
	if (duration > 20) console.log(`trimLeadingWhitespaceOutsideFences: ${duration.toFixed(3)}ms, text length: ${text.length}, lines count: ${lines.length}`);
	return result;
};
var normalizeAttributeKey = (key) => {
	if (key.indexOf("-") !== -1 && key.match(HTML_CUSTOM_ATTR_R) === null) key = key.replace(CAPTURE_LETTER_AFTER_HYPHEN, (_, letter) => {
		return letter.toUpperCase();
	});
	return key;
};
var parseStyleAttribute = (styleString) => {
	const start = performance.now();
	const styles = [];
	let buffer = "";
	let inUrl = false;
	let inQuotes = false;
	let quoteChar = "";
	if (!styleString) return styles;
	for (let i = 0; i < styleString.length; i++) {
		const char = styleString[i];
		if ((char === "\"" || char === "'") && !inUrl) {
			if (!inQuotes) {
				inQuotes = true;
				quoteChar = char;
			} else if (char === quoteChar) {
				inQuotes = false;
				quoteChar = "";
			}
		}
		if (char === "(" && buffer.endsWith("url")) inUrl = true;
		else if (char === ")" && inUrl) inUrl = false;
		if (char === ";" && !inQuotes && !inUrl) {
			const declaration = buffer.trim();
			if (declaration) {
				const colonIndex = declaration.indexOf(":");
				if (colonIndex > 0) {
					const key = declaration.slice(0, colonIndex).trim();
					const value = declaration.slice(colonIndex + 1).trim();
					styles.push([key, value]);
				}
			}
			buffer = "";
		} else buffer += char;
	}
	const declaration = buffer.trim();
	if (declaration) {
		const colonIndex = declaration.indexOf(":");
		if (colonIndex > 0) {
			const key = declaration.slice(0, colonIndex).trim();
			const value = declaration.slice(colonIndex + 1).trim();
			styles.push([key, value]);
		}
	}
	const duration = performance.now() - start;
	if (duration > 20) console.log(`parseStyleAttribute: ${duration.toFixed(3)}ms, styleString length: ${styleString.length}, styles count: ${styles.length}`);
	return styles;
};
var attributeValueToNodePropValue = (tag, key, value, sanitizeUrlFn) => {
	if (key === "style") return parseStyleAttribute(value).reduce((styles, [styleKey, styleValue]) => {
		const camelCasedKey = styleKey.replace(/(-[a-z])/g, (substr) => substr[1].toUpperCase());
		styles[camelCasedKey] = sanitizeUrlFn(styleValue, tag, styleKey);
		return styles;
	}, {});
	else if (ATTRIBUTES_TO_SANITIZE.indexOf(key) !== -1) return sanitizeUrlFn(unescapeString(value), tag, key);
	else if (value.match(INTERPOLATION_R)) value = unescapeString(value.slice(1, value.length - 1));
	if (value === "true") return true;
	else if (value === "false") return false;
	return value;
};
var parseTableAlignCapture = (alignCapture) => {
	if (TABLE_RIGHT_ALIGN.test(alignCapture)) return "right";
	else if (TABLE_CENTER_ALIGN.test(alignCapture)) return "center";
	else if (TABLE_LEFT_ALIGN.test(alignCapture)) return "left";
	return "left";
};
var parseTableAlign = (source) => {
	return source.replace(TABLE_TRIM_PIPES, "").split("|").map(parseTableAlignCapture);
};
var parseTableRow = (source, parse, state, tableOutput) => {
	const start = performance.now();
	const prevInTable = state.inTable;
	state.inTable = true;
	const cells = [[]];
	let acc = "";
	const flush = () => {
		if (!acc) return;
		const cell = cells[cells.length - 1];
		cell.push.apply(cell, parse(acc, state));
		acc = "";
	};
	source.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((fragment, i, arr) => {
		if (fragment.trim() === "|") {
			flush();
			if (tableOutput) {
				if (i !== 0 && i !== arr.length - 1) cells.push([]);
				return;
			}
		}
		acc += fragment;
	});
	flush();
	state.inTable = prevInTable;
	const duration = performance.now() - start;
	if (duration > 20) console.log(`parseTableRow: ${duration.toFixed(3)}ms, source length: ${source.length}, cells count: ${cells.length}`);
	return cells;
};
var parseTableCells = (source, parse, state) => {
	const start = performance.now();
	const rowsText = source.trim().split("\n");
	const result = rowsText.map((rowText) => parseTableRow(rowText, parse, state, true));
	const duration = performance.now() - start;
	if (duration > 20) console.log(`parseTableCells: ${duration.toFixed(3)}ms, source length: ${source.length}, rows count: ${rowsText.length}`);
	return result;
};
var qualifies = (source, state, qualify) => {
	if (Array.isArray(qualify)) {
		for (let i = 0; i < qualify.length; i++) if (startsWith(source, qualify[i])) return true;
		return false;
	}
	return qualify(source, state);
};
var allowInline = (fn) => {
	fn.inline = 1;
	return fn;
};
var inlineRegex = (regex) => allowInline((source, state) => {
	if (state.inline) return regex.exec(source);
	else return null;
});
var simpleInlineRegex = (regex) => allowInline((source, state) => {
	if (state.inline || state.simple) return regex.exec(source);
	else return null;
});
var blockRegex = (regex) => (source, state) => {
	if (state.inline || state.simple) return null;
	else return regex.exec(source);
};
var anyScopeRegex = (fn) => allowInline((source, state) => {
	if (typeof fn === "function") return fn(source, state);
	return fn.exec(source);
});
var parseInline = (parse, children, state) => {
	const start = performance.now();
	const isCurrentlyInline = state.inline ?? false;
	const isCurrentlySimple = state.simple ?? false;
	state.inline = true;
	state.simple = true;
	const result = parse(children, state);
	state.inline = isCurrentlyInline;
	state.simple = isCurrentlySimple;
	const duration = performance.now() - start;
	if (duration > 20) console.log(`parseInline: ${duration.toFixed(3)}ms, children length: ${children.length}, result count: ${result.length}`);
	return result;
};
var parseSimpleInline = (parse, children, state) => {
	const start = performance.now();
	const isCurrentlyInline = state.inline ?? false;
	const isCurrentlySimple = state.simple ?? false;
	state.inline = false;
	state.simple = true;
	const result = parse(children, state);
	state.inline = isCurrentlyInline;
	state.simple = isCurrentlySimple;
	const duration = performance.now() - start;
	if (duration > 20) console.log(`parseSimpleInline: ${duration.toFixed(3)}ms, children length: ${children.length}, result count: ${result.length}`);
	return result;
};
var parseBlock = (parse, children, state = {}) => {
	const start = performance.now();
	const isCurrentlyInline = state.inline || false;
	state.inline = false;
	const normalizedChildren = trimEnd(children);
	const result = parse(/\n\n$/.test(normalizedChildren) === false ? normalizedChildren.endsWith("\n") ? `${normalizedChildren}\n` : `${normalizedChildren}\n\n` : normalizedChildren, state);
	state.inline = isCurrentlyInline;
	const duration = performance.now() - start;
	if (duration > 20) console.log(`parseBlock: ${duration.toFixed(3)}ms, children length: ${children.length}, result count: ${result.length}`);
	return result;
};
var parseCaptureInline = (capture, parse, state) => {
	return { children: parseInline(parse, capture[2], state) };
};
var captureNothing = () => ({});
var renderNothing = () => null;
var some = (regexes, input) => {
	for (let i = 0; i < regexes.length; i++) if (regexes[i].test(input)) return true;
	return false;
};
var parserFor = (rules) => {
	const start = performance.now();
	const ruleList = Object.keys(rules);
	ruleList.forEach((type) => {
		const order = rules[type]._order;
		if (typeof order !== "number" || !Number.isFinite(order)) console.warn(`intlayer: Invalid order for rule \`${type}\`: ${order}`);
	});
	ruleList.sort((a, b) => {
		return rules[a]._order - rules[b]._order || +a - +b;
	});
	const nestedParse = (source, state = {}) => {
		const parseStart = performance.now();
		const result = [];
		state.prevCapture = state.prevCapture || "";
		if (source.trim()) while (source) {
			let i = 0;
			while (i < ruleList.length) {
				const ruleType = ruleList[i];
				const rule = rules[ruleType];
				if (rule._qualify && !qualifies(source, state, rule._qualify)) {
					i++;
					continue;
				}
				const matchStart = performance.now();
				const capture = rule._match(source, state);
				const matchDuration = performance.now() - matchStart;
				if (matchDuration > 1) console.log(`${ruleType}._match: ${matchDuration.toFixed(3)}ms, source length: ${source.length}`);
				if (capture?.[0]) {
					source = source.substring(capture[0].length);
					const ruleParseStart = performance.now();
					const parsedAny = rule._parse(capture, nestedParse, state);
					const ruleParseDuration = performance.now() - ruleParseStart;
					if (ruleParseDuration > 1) console.log(`${ruleType}._parse: ${ruleParseDuration.toFixed(3)}ms, capture length: ${capture[0].length}`);
					state.prevCapture = (state.prevCapture || "") + capture[0];
					if (!parsedAny.type) parsedAny.type = ruleType;
					result.push(parsedAny);
					break;
				}
				i++;
			}
		}
		const parseDuration = performance.now() - parseStart;
		if (parseDuration > 1) console.log(`nestedParse: ${parseDuration.toFixed(3)}ms, source length: ${source.length}, result count: ${result.length}`);
		return result;
	};
	const duration = performance.now() - start;
	if (duration > 20) console.log(`parserFor: ${duration.toFixed(3)}ms, rules count: ${ruleList.length}`);
	return (source, state) => nestedParse(normalizeWhitespace(source), state);
};
var renderFor = (render) => (ast, state = {}) => {
	const start = performance.now();
	const patchedRender = (ast, state = {}) => renderFor(render)(ast, state);
	if (Array.isArray(ast)) {
		const oldKey = state.key;
		const result = [];
		let lastWasString = false;
		let renderedIndex = 0;
		for (let i = 0; i < ast.length; i++) {
			const nodeOut = patchedRender(ast[i], {
				...state,
				key: renderedIndex
			});
			const isString = typeof nodeOut === "string";
			if (isString && lastWasString) result[result.length - 1] = result[result.length - 1] + nodeOut;
			else if (nodeOut !== null) {
				result.push(nodeOut);
				renderedIndex++;
			}
			lastWasString = isString;
		}
		state.key = oldKey;
		const duration = performance.now() - start;
		if (duration > 20) console.log(`renderFor (array): ${duration.toFixed(3)}ms, ast length: ${ast.length}`);
		return result;
	}
	const result = render(ast, patchedRender, state);
	const duration = performance.now() - start;
	if (duration > 20) console.log(`renderFor (single): ${duration.toFixed(3)}ms, ast type: ${ast.type}`);
	return result;
};
var createRenderer = (rules, userRender) => (ast, render, state) => {
	const start = performance.now();
	const renderer = rules[ast.type]?._render;
	const result = userRender ? userRender(() => renderer?.(ast, render, state), ast, render, state) : renderer?.(ast, render, state);
	const duration = performance.now() - start;
	if (duration > 20) console.log(`createRenderer: ${duration.toFixed(3)}ms, ast type: ${ast.type}, hasUserRender: ${!!userRender}`);
	return result;
};
var IMAGE_R = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/;
var LINK_R = new RegExp(`^\\[((?:\\[[^\\[\\]]*(?:\\[[^\\[\\]]*\\][^\\[\\]]*)*\\]|[^\\[\\]])*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`);
var getTag = (tag, components) => {
	if (typeof tag !== "string") return tag;
	let override = get(components, tag);
	if (!override && typeof tag === "string") {
		const lowercaseTag = tag.toLowerCase();
		const key = Object.keys(components).find((k) => k.toLowerCase() === lowercaseTag);
		if (key) override = get(components, key);
	}
	if (!override) return tag;
	return override;
};
var createElementFactory = (ctx, options) => {
	const { runtime, components = {} } = ctx;
	const filteredTags = options.tagfilter ? [
		"title",
		"textarea",
		"style",
		"xmp",
		"iframe",
		"noembed",
		"noframes",
		"script",
		"plaintext"
	] : [];
	return (tag, props, ...children) => {
		if (typeof tag === "string" && filteredTags.includes(tag.toLowerCase())) return null;
		const isStringTag = typeof tag === "string";
		const className = cx(props?.className, props?.class);
		const mergedProps = {};
		let classNameHandled = false;
		if (props) for (const key in props) {
			const value = props[key];
			if (value === void 0 || value === null) continue;
			if (key === "className" || key === "class") {
				if (!classNameHandled) {
					if (className) mergedProps.className = className;
					classNameHandled = true;
				}
			} else mergedProps[key] = value;
		}
		if (!classNameHandled && className) mergedProps.className = className;
		let finalProps = mergedProps;
		if (runtime.normalizeProps && isStringTag) finalProps = runtime.normalizeProps(tag, mergedProps);
		const component = getTag(tag, components);
		return runtime.createElement(component, finalProps, ...children.length === 1 ? [children[0]] : children);
	};
};
var createRules = (createElement, ctx, options, footnotes, refs, attrStringToMap, containsBlockSyntax, nonParagraphBlockSyntaxes) => {
	const slug = (input) => {
		return ctx.slugify ? ctx.slugify(input, slugify) : slugify(input);
	};
	const sanitize = ctx.sanitizer ?? sanitizer;
	const namedCodesToUnicode = ctx.namedCodesToUnicode ? {
		...NAMED_CODES_TO_UNICODE,
		...ctx.namedCodesToUnicode
	} : NAMED_CODES_TO_UNICODE;
	const generateListRule = (type) => {
		const ordered = type === 1;
		const LIST_R = ordered ? ORDERED_LIST_R : UNORDERED_LIST_R;
		const LIST_ITEM_R = ordered ? ORDERED_LIST_ITEM_R : UNORDERED_LIST_ITEM_R;
		const LIST_ITEM_PREFIX_R = ordered ? ORDERED_LIST_ITEM_PREFIX_R : UNORDERED_LIST_ITEM_PREFIX_R;
		return {
			_qualify: (source) => LIST_ITEM_PREFIX_R.test(source),
			_match: allowInline((source, state) => {
				const isStartOfLine = LIST_LOOKBEHIND_R.exec(state.prevCapture ?? "");
				const isListAllowed = state.list ?? (!state.inline && !state.simple);
				if (isStartOfLine && isListAllowed) {
					const matchSource = (isStartOfLine[1] || "") + source;
					return LIST_R.exec(matchSource);
				}
				return null;
			}),
			_order: Priority.HIGH,
			_parse(capture, parse, state) {
				const bullet = capture[2];
				const startValue = ordered ? +bullet.slice(0, -1) : void 0;
				const items = capture[0].replace(BLOCK_END_R, "\n").match(LIST_ITEM_R);
				if (!items) return {
					items: [],
					ordered,
					start: startValue
				};
				let lastItemWasAParagraph = false;
				return {
					items: items.map((item, i) => {
						const prefixCapture = LIST_ITEM_PREFIX_R.exec(item);
						const space = prefixCapture ? prefixCapture[0].length : 0;
						const spaceRegex = new RegExp(`^ {1,${space}}`, "gm");
						const content = item.replace(spaceRegex, "").replace(LIST_ITEM_PREFIX_R, "");
						const isLastItem = i === items.length - 1;
						const thisItemIsAParagraph = content.indexOf("\n\n") !== -1 || isLastItem && lastItemWasAParagraph;
						lastItemWasAParagraph = thisItemIsAParagraph;
						const oldStateInline = state.inline;
						const oldStateList = state.list;
						state.list = true;
						let adjustedContent;
						if (thisItemIsAParagraph) {
							state.inline = false;
							adjustedContent = `${trimEnd(content)}\n\n`;
						} else {
							state.inline = true;
							adjustedContent = trimEnd(content);
						}
						const parsed = parse(adjustedContent, state);
						state.inline = oldStateInline;
						state.list = oldStateList;
						return parsed;
					}),
					ordered,
					start: startValue
				};
			},
			_render(node, output, state = {}) {
				const Tag = node.ordered ? "ol" : "ul";
				const props = { key: state.key };
				if (node.ordered && node.start != null) props.start = node.start;
				return createElement(Tag, props, ...node.items.map((item, i) => createElement("li", { key: i }, output(item, state))));
			}
		};
	};
	const matchParagraph = (source, state) => {
		if (state.inline || state.simple || state.inHTML && source.indexOf("\n\n") === -1 && state.prevCapture?.indexOf("\n\n") === -1) return null;
		let start = 0;
		while (true) {
			const newlineIndex = source.indexOf("\n", start);
			const line = source.slice(start, newlineIndex === -1 ? void 0 : newlineIndex + 1);
			if (some(nonParagraphBlockSyntaxes, line)) break;
			if (newlineIndex === -1 || !line.trim()) break;
			start = newlineIndex + 1;
		}
		const match = source.slice(0, start);
		if (match === "") return null;
		const captured = trimEnd(match);
		if (captured === "") return null;
		return [
			match,
			void 0,
			captured
		];
	};
	return {
		[RuleType.blockQuote]: {
			_qualify: [">"],
			_match: blockRegex(BLOCKQUOTE_R),
			_order: Priority.HIGH,
			_parse(capture, parse, state) {
				const matchAlert = capture[0].replace(BLOCKQUOTE_TRIM_LEFT_MULTILINE_R, "").match(BLOCKQUOTE_ALERT_R);
				const alert = matchAlert?.[1];
				const content = matchAlert?.[2] ?? "";
				return {
					alert,
					children: content.indexOf("\n") !== -1 ? parseBlock(parse, content, state) : parseInline(parse, content, state)
				};
			},
			_render(node, output, state = {}) {
				const props = { key: state.key };
				if (node.alert) {
					props.className = `markdown-alert-${slug(node.alert.toLowerCase())}`;
					node.children.unshift({
						attrs: {},
						children: [{
							type: RuleType.text,
							text: node.alert
						}],
						noInnerParse: true,
						type: RuleType.htmlBlock,
						tag: "header"
					});
				}
				return createElement("blockquote", props, output(node.children, state));
			}
		},
		[RuleType.breakLine]: {
			_qualify: ["  "],
			_match: anyScopeRegex(BREAK_LINE_R),
			_order: Priority.HIGH,
			_parse: captureNothing,
			_render(_, __, state = {}) {
				return createElement("br", { key: state.key });
			}
		},
		[RuleType.breakThematic]: {
			_qualify: [
				"--",
				"__",
				"**",
				"- ",
				"* ",
				"_ "
			],
			_match: blockRegex(BREAK_THEMATIC_R),
			_order: Priority.HIGH,
			_parse: captureNothing,
			_render(_, __, state = {}) {
				return createElement("hr", { key: state.key });
			}
		},
		[RuleType.codeBlock]: {
			_qualify: ["    "],
			_match: blockRegex(CODE_BLOCK_R),
			_order: Priority.MAX,
			_parse(capture) {
				return {
					type: RuleType.codeBlock,
					lang: void 0,
					text: unescapeString(trimEnd(capture[0].replace(/^ {4}/gm, "")))
				};
			},
			_render(node, _, state = {}) {
				const attrs = { ...node.attrs ?? {} };
				const langClass = node.lang ? `lang-${node.lang}` : "lang-plaintext";
				attrs.className = attrs.className ? `${attrs.className} ${langClass}` : langClass;
				if (node.lang && !attrs.lang) attrs.lang = node.lang;
				return createElement("pre", { key: state.key }, createElement("code", attrs, node.text));
			}
		},
		[RuleType.codeFenced]: {
			_qualify: ["```", "~~~"],
			_match: blockRegex(CODE_BLOCK_FENCED_R),
			_order: Priority.MAX,
			_parse(capture) {
				return {
					attrs: attrStringToMap("code", capture[3] ?? ""),
					lang: capture[2] || void 0,
					text: capture[4],
					type: RuleType.codeBlock
				};
			}
		},
		[RuleType.codeInline]: {
			_qualify: ["`"],
			_match: simpleInlineRegex(CODE_INLINE_R),
			_order: Priority.LOW,
			_parse(capture) {
				return { text: unescapeString(capture[2]) };
			},
			_render(node, _, state = {}) {
				return createElement("code", { key: state.key }, node.text);
			}
		},
		[RuleType.footnote]: {
			_qualify: ["[^"],
			_match: blockRegex(FOOTNOTE_R),
			_order: Priority.MAX,
			_parse(capture) {
				footnotes.push({
					footnote: capture[2],
					identifier: capture[1]
				});
				return {};
			},
			_render: renderNothing
		},
		[RuleType.footnoteReference]: {
			_qualify: ["[^"],
			_match: inlineRegex(FOOTNOTE_REFERENCE_R),
			_order: Priority.HIGH,
			_parse(capture) {
				return {
					target: `#${slug(capture[1])}`,
					text: capture[1]
				};
			},
			_render(node, _, state = {}) {
				return createElement("a", {
					key: state.key,
					href: sanitize(node.target, "a", "href") ?? void 0
				}, createElement("sup", { key: state.key }, node.text));
			}
		},
		[RuleType.gfmTask]: {
			_qualify: ["[ ]", "[x]"],
			_match: inlineRegex(GFM_TASK_R),
			_order: Priority.HIGH,
			_parse(capture) {
				return { completed: capture[1].toLowerCase() === "x" };
			},
			_render(node, _, state = {}) {
				return createElement("input", {
					checked: node.completed,
					key: state.key,
					readOnly: true,
					type: "checkbox"
				});
			}
		},
		[RuleType.heading]: {
			_qualify: ["#"],
			_match: blockRegex(options.enforceAtxHeadings ? HEADING_ATX_COMPLIANT_R : HEADING_R),
			_order: Priority.HIGH,
			_parse(capture, parse, state) {
				return {
					children: parseInline(parse, capture[2], state),
					id: slug(capture[2]),
					level: capture[1].length
				};
			},
			_render(node, output, state = {}) {
				return createElement(`h${node.level}`, {
					id: node.id,
					key: state.key
				}, output(node.children, state));
			}
		},
		[RuleType.headingSetext]: {
			_qualify: (source) => {
				const nlIndex = source.indexOf("\n");
				return nlIndex > 0 && nlIndex < source.length - 1 && (source[nlIndex + 1] === "=" || source[nlIndex + 1] === "-");
			},
			_match: blockRegex(HEADING_SETEXT_R),
			_order: Priority.MAX,
			_parse(capture, parse, state) {
				return {
					children: parseInline(parse, capture[1], state),
					level: capture[2] === "=" ? 1 : 2,
					type: RuleType.heading
				};
			}
		},
		[RuleType.htmlBlock]: {
			_qualify: (source) => {
				if (options.disableParsingRawHTML) return false;
				const match = source.match(/^ *<([a-z][a-z0-9:-]*)\b/i);
				if (!match) return false;
				const tag = match[1];
				return source.toLowerCase().indexOf(`</${tag.toLowerCase()}>`) !== -1;
			},
			_match: anyScopeRegex(HTML_BLOCK_ELEMENT_R),
			_order: Priority.HIGH,
			_parse(capture, parse, state) {
				const whitespace = capture[3].match(HTML_LEFT_TRIM_AMOUNT_R)?.[1] ?? "";
				const trimmed = trimLeadingWhitespaceOutsideFences(capture[3], whitespace);
				const parseFunc = containsBlockSyntax(trimmed) ? parseBlock : parseInline;
				const tagName = capture[1].trim();
				const noInnerParse = DO_NOT_PROCESS_HTML_ELEMENTS.indexOf(tagName.toLowerCase()) !== -1;
				const tag = noInnerParse ? tagName.toLowerCase() : tagName;
				const ast = {
					attrs: attrStringToMap(tag, capture[2] ?? ""),
					noInnerParse,
					tag
				};
				state.inAnchor = state.inAnchor || tagName.toLowerCase() === "a";
				if (noInnerParse) ast.text = capture[3];
				else {
					const prevInHTML = state.inHTML;
					state.inHTML = true;
					ast.children = parseFunc(parse, trimmed, state);
					state.inHTML = prevInHTML;
				}
				state.inAnchor = false;
				return ast;
			},
			_render(node, output, state = {}) {
				return createElement(node.tag, {
					key: state.key,
					...node.attrs ?? {}
				}, node.text ?? (node.children ? output(node.children, state) : ""));
			}
		},
		[RuleType.htmlComment]: {
			_qualify: ["<!"],
			_match: anyScopeRegex(HTML_COMMENT_R),
			_order: Priority.HIGH,
			_parse: captureNothing,
			_render: renderNothing
		},
		[RuleType.htmlSelfClosing]: {
			_qualify: (source) => {
				if (options.disableParsingRawHTML) return false;
				return /^ *<([a-zA-Z][a-zA-Z0-9:]*)[\s>/]/.test(source);
			},
			_match: anyScopeRegex(HTML_SELF_CLOSING_ELEMENT_R),
			_order: Priority.HIGH,
			_parse(capture) {
				const tag = capture[1].trim();
				return {
					attrs: attrStringToMap(tag, capture[2] || ""),
					tag
				};
			},
			_render(node, _, state = {}) {
				return createElement(node.tag, {
					key: state.key,
					...node.attrs ?? {}
				});
			}
		},
		[RuleType.customComponent]: {
			_qualify: (source) => /^ *<([A-Z][a-zA-Z0-9]*)/.test(source),
			_match: anyScopeRegex(CUSTOM_COMPONENT_R),
			_order: Priority.MAX,
			_parse(capture, parse, state) {
				const whitespace = capture[3].match(HTML_LEFT_TRIM_AMOUNT_R)?.[1] ?? "";
				const trimmed = trimLeadingWhitespaceOutsideFences(capture[3], whitespace);
				const parseFunc = containsBlockSyntax(trimmed) ? parseBlock : parseInline;
				const tag = capture[1].trim();
				const ast = {
					attrs: attrStringToMap(tag, capture[2] ?? ""),
					noInnerParse: false,
					tag
				};
				const prevInHTML = state.inHTML;
				state.inHTML = true;
				ast.children = parseFunc(parse, trimmed, state);
				state.inHTML = prevInHTML;
				return ast;
			},
			_render(node, output, state = {}) {
				return createElement(node.tag, {
					key: state.key,
					...node.attrs ?? {}
				}, node.text ?? (node.children ? output(node.children, state) : ""));
			}
		},
		[RuleType.paragraph]: {
			_match: matchParagraph,
			_order: Priority.LOW,
			_parse: parseCaptureInline,
			_render(node, output, state = {}) {
				return createElement("p", { key: state.key }, output(node.children, state));
			}
		},
		[RuleType.image]: {
			_qualify: ["!["],
			_match: simpleInlineRegex(IMAGE_R),
			_order: Priority.HIGH,
			_parse(capture) {
				return {
					alt: unescapeString(capture[1]),
					target: unescapeString(capture[2]),
					title: unescapeString(capture[3])
				};
			},
			_render(node, _, state = {}) {
				return createElement("img", {
					key: state.key,
					alt: node.alt ?? void 0,
					title: node.title ?? void 0,
					src: sanitize(node.target, "img", "src") ?? void 0
				});
			}
		},
		[RuleType.link]: {
			_qualify: ["["],
			_match: inlineRegex(LINK_R),
			_order: Priority.LOW,
			_parse(capture, parse, state) {
				return {
					children: parseSimpleInline(parse, capture[1], state),
					target: unescapeString(capture[2]),
					title: unescapeString(capture[3])
				};
			},
			_render(node, output, state = {}) {
				const sanitizedHref = sanitize(node.target, "a", "href");
				return createElement("a", {
					key: state.key,
					href: sanitizedHref ?? void 0,
					title: node.title ?? void 0
				}, output(node.children, state));
			}
		},
		[RuleType.linkAngleBraceStyleDetector]: {
			_qualify: ["<"],
			_match: inlineRegex(LINK_AUTOLINK_R),
			_order: Priority.MAX,
			_parse(capture) {
				let target = capture[1];
				let isEmail = false;
				if (target.indexOf("@") !== -1 && target.indexOf("//") === -1) {
					isEmail = true;
					target = target.replace("mailto:", "");
				}
				return {
					children: [{
						text: target,
						type: RuleType.text
					}],
					target: isEmail ? `mailto:${target}` : target,
					type: RuleType.link
				};
			}
		},
		[RuleType.linkBareUrlDetector]: {
			_qualify: (source, state) => !!(state.inline && !state.inAnchor && !options.disableAutoLink && (startsWith(source, "http://") || startsWith(source, "https://"))),
			_match: inlineRegex(LINK_AUTOLINK_BARE_URL_R),
			_order: Priority.MAX,
			_parse(capture) {
				return {
					children: [{
						text: capture[1],
						type: RuleType.text
					}],
					target: capture[1],
					type: RuleType.link
				};
			}
		},
		[RuleType.newlineCoalescer]: {
			_match: blockRegex(CONSECUTIVE_NEWLINE_R),
			_order: Priority.LOW,
			_parse: captureNothing,
			_render() {
				return "\n";
			}
		},
		[RuleType.orderedList]: generateListRule(1),
		[RuleType.unorderedList]: generateListRule(2),
		[RuleType.ref]: {
			_qualify: ["["],
			_match: anyScopeRegex(REFERENCE_IMAGE_OR_LINK),
			_order: Priority.MAX,
			_parse(capture) {
				refs[capture[1]] = {
					target: capture[2],
					title: capture[4]
				};
				return {};
			},
			_render: renderNothing
		},
		[RuleType.refImage]: {
			_qualify: ["!["],
			_match: simpleInlineRegex(REFERENCE_IMAGE_R),
			_order: Priority.MAX,
			_parse(capture) {
				return {
					alt: capture[1] ? unescapeString(capture[1]) : void 0,
					ref: capture[2]
				};
			},
			_render(node, _, state = {}) {
				const ref = refs[node.ref];
				if (!ref) return null;
				return createElement("img", {
					key: state.key,
					alt: node.alt,
					src: sanitize(ref.target, "img", "src") ?? void 0,
					title: ref.title
				});
			}
		},
		[RuleType.refLink]: {
			_qualify: (source) => source[0] === "[" && source.indexOf("](") === -1,
			_match: inlineRegex(REFERENCE_LINK_R),
			_order: Priority.MAX,
			_parse(capture, parse, state) {
				return {
					children: parseSimpleInline(parse, capture[1], state),
					fallbackChildren: capture[0],
					ref: capture[2]
				};
			},
			_render(node, output, state = {}) {
				const ref = refs[node.ref];
				if (!ref) return createElement("span", { key: state.key }, node.fallbackChildren);
				return createElement("a", {
					key: state.key,
					href: sanitize(ref.target, "a", "href") ?? void 0,
					title: ref.title
				}, output(node.children, state));
			}
		},
		[RuleType.table]: {
			_qualify: ["|"],
			_match: blockRegex(NP_TABLE_R),
			_order: Priority.HIGH,
			_parse(capture, parse, state) {
				state.inline = true;
				const align = capture[2] ? parseTableAlign(capture[2]) : [];
				const cells = capture[3] ? parseTableCells(capture[3], parse, state) : [];
				const header = parseTableRow(capture[1], parse, state, !!cells.length);
				state.inline = false;
				return cells.length ? {
					align,
					cells,
					header,
					type: RuleType.table
				} : {
					children: header.flat(),
					type: RuleType.paragraph
				};
			},
			_render(node, output, state = {}) {
				const table = node;
				const getStyle = (i) => table.align[i] && table.align[i] !== "left" ? { textAlign: table.align[i] } : {};
				return createElement("table", { key: state.key }, createElement("thead", null, createElement("tr", null, ...table.header.map((c, i) => createElement("th", {
					key: i,
					style: getStyle(i)
				}, output(c, state))))), createElement("tbody", null, ...table.cells.map((row, i) => createElement("tr", { key: i }, ...row.map((c, j) => createElement("td", {
					key: j,
					style: getStyle(j)
				}, output(c, state)))))));
			}
		},
		[RuleType.tableSeparator]: {
			_match: (source, state) => state.inTable && source[0] === "|" ? /^\|/.exec(source) : null,
			_order: Priority.HIGH,
			_parse() {
				return { type: RuleType.tableSeparator };
			},
			_render() {
				return " | ";
			}
		},
		[RuleType.text]: {
			_match: allowInline((source, _state) => {
				const shortMatch = SHORTCODE_R.exec(source);
				if (shortMatch) return shortMatch;
				return TEXT_PLAIN_R.exec(source) || /^[\s\S]/.exec(source);
			}),
			_order: Priority.MIN,
			_parse(capture) {
				const text = capture[0];
				return { text: text.indexOf("&") === -1 ? text : text.replace(HTML_CHAR_CODE_R, (f, i) => {
					if (i.startsWith("#x")) return String.fromCharCode(parseInt(i.slice(2), 16));
					if (i.startsWith("#")) return String.fromCharCode(parseInt(i.slice(1), 10));
					return namedCodesToUnicode[i] || f;
				}) };
			},
			_render(node) {
				return node.text;
			}
		},
		[RuleType.textBolded]: {
			_qualify: ["**", "__"],
			_match: simpleInlineRegex(TEXT_BOLD_R),
			_order: Priority.MED,
			_parse(capture, parse, state) {
				return { children: parse(capture[2], state) };
			},
			_render(node, output, state = {}) {
				return createElement("strong", { key: state.key }, output(node.children, state));
			}
		},
		[RuleType.textEmphasized]: {
			_qualify: ["*", "_"],
			_match: simpleInlineRegex(TEXT_EMPHASIZED_R),
			_order: Priority.LOW,
			_parse(capture, parse, state) {
				return { children: parse(capture[2], state) };
			},
			_render(node, output, state = {}) {
				return createElement("em", { key: state.key }, output(node.children, state));
			}
		},
		[RuleType.textEscaped]: {
			_qualify: ["\\"],
			_match: simpleInlineRegex(TEXT_ESCAPED_R),
			_order: Priority.HIGH,
			_parse(capture) {
				return {
					text: capture[1],
					type: RuleType.text
				};
			}
		},
		[RuleType.textMarked]: {
			_qualify: ["=="],
			_match: simpleInlineRegex(TEXT_MARKED_R),
			_order: Priority.LOW,
			_parse: parseCaptureInline,
			_render(node, output, state = {}) {
				return createElement("mark", { key: state.key }, output(node.children, state));
			}
		},
		[RuleType.textStrikethroughed]: {
			_qualify: ["~~"],
			_match: simpleInlineRegex(TEXT_STRIKETHROUGHED_R),
			_order: Priority.LOW,
			_parse: parseCaptureInline,
			_render(node, output, state = {}) {
				return createElement("del", { key: state.key }, output(node.children, state));
			}
		}
	};
};
var compile = (markdown = "", ctx, options = {}) => {
	const components = ctx.components ?? {};
	const slug = (input) => {
		return ctx.slugify ? ctx.slugify(input, slugify) : slugify(input);
	};
	const createElement = createElementFactory(ctx, options);
	const footnotes = [];
	const refs = {};
	const attrStringToMap = (tag, str) => {
		if (!str || !str.trim()) return null;
		const attributes = str.match(ATTR_EXTRACTOR_R);
		if (!attributes) return null;
		return attributes.reduce((map, raw) => {
			const delimiterIdx = raw.indexOf("=");
			if (delimiterIdx !== -1) {
				const key = normalizeAttributeKey(raw.slice(0, delimiterIdx)).trim();
				const value = unquote(raw.slice(delimiterIdx + 1).trim());
				const mappedKey = ATTRIBUTE_TO_NODE_PROP_MAP[key] ?? key;
				if (mappedKey === "ref") return map;
				map[mappedKey] = attributeValueToNodePropValue(tag, key, value, ctx.sanitizer ?? sanitizer);
				if (typeof map[mappedKey] === "string" && (HTML_BLOCK_ELEMENT_R.test(map[mappedKey]) || HTML_SELF_CLOSING_ELEMENT_R.test(map[mappedKey]))) map[mappedKey] = compileInner(map[mappedKey].trim());
			} else if (raw !== "style") map[ATTRIBUTE_TO_NODE_PROP_MAP[raw] ?? raw] = true;
			return map;
		}, {});
	};
	const nonParagraphBlockSyntaxes = [
		BLOCKQUOTE_R,
		CODE_BLOCK_FENCED_R,
		CODE_BLOCK_R,
		options.enforceAtxHeadings ? HEADING_ATX_COMPLIANT_R : HEADING_R,
		HEADING_SETEXT_R,
		NP_TABLE_R,
		ORDERED_LIST_R,
		UNORDERED_LIST_R,
		CUSTOM_COMPONENT_R
	];
	const containsBlockSyntax = (input) => {
		const cleaned = input.replace(TRIM_STARTING_NEWLINES, "");
		const slice = cleaned.length > 2048 ? cleaned.slice(0, 2048) : cleaned;
		return some(options.disableParsingRawHTML ? nonParagraphBlockSyntaxes : [
			...nonParagraphBlockSyntaxes,
			PARAGRAPH_R,
			HTML_BLOCK_ELEMENT_R,
			HTML_COMMENT_R,
			HTML_SELF_CLOSING_ELEMENT_R,
			CUSTOM_COMPONENT_R
		], slice);
	};
	const baseRules = createRules(createElement, ctx, options, footnotes, refs, attrStringToMap, containsBlockSyntax, nonParagraphBlockSyntaxes);
	const rules = options.disableParsingRawHTML ? Object.keys(baseRules).reduce((acc, key) => {
		if (key !== RuleType.htmlBlock && key !== RuleType.htmlSelfClosing) acc[key] = baseRules[key];
		return acc;
	}, {}) : baseRules;
	const parser = parserFor(rules);
	const emitter = renderFor(createRenderer(rules, options.renderRule));
	const compileInner = (input) => {
		const result = options.preserveFrontmatter ? input : input.replace(FRONT_MATTER_R, "");
		const inline = options.forceInline || !options.forceBlock && SHOULD_RENDER_AS_BLOCK_R.test(result.replace(TRIM_STARTING_NEWLINES, "")) === false;
		const arr = emitter(parser(inline ? result : `${trimEnd(result).replace(TRIM_STARTING_NEWLINES, "")}\n\n`, { inline }), { inline });
		while (typeof arr[arr.length - 1] === "string" && !arr[arr.length - 1].trim()) arr.pop();
		if (options.wrapper === null) return arr;
		const wrapper = options.wrapper ?? (inline ? "span" : "div");
		if (arr.length > 1 || options.forceWrapper) return createElement(wrapper, { key: "outer" }, arr);
		if (arr.length === 1) {
			const node = arr[0];
			if (typeof node === "string") {
				const spanProps = { key: "outer" };
				if (!inline && components) {
					const pOverrideProps = get(components, "p.props", {}) ?? {};
					const mergedClassName = cx(spanProps.className, pOverrideProps.className);
					const finalSpanProps = {
						...spanProps,
						...pOverrideProps
					};
					if (mergedClassName) finalSpanProps.className = mergedClassName;
					return createElement("span", finalSpanProps, node);
				}
				return createElement("span", spanProps, node);
			}
			return node;
		}
		return createElement(wrapper, { key: "outer" }, null);
	};
	if (typeof markdown !== "string") {
		console.error("intlayer: the first argument must be a string. Received", typeof markdown);
		throw new Error("intlayer: the first argument must be a string");
	}
	const node = compileInner(markdown);
	return footnotes.length ? createElement("div", null, node, createElement("footer", { key: "footer" }, ...footnotes.map((def) => createElement("div", {
		id: slug(def.identifier),
		key: def.identifier
	}, def.identifier, emitter(parser(def.footnote, { inline: true }), { inline: true }))))) : node;
};
var compileWithOptions = (markdown, runtime, options = {}) => {
	const { components, namedCodesToUnicode, sanitizer, slugify, ...compilerOptions } = options;
	return compile(markdown, {
		runtime,
		components,
		namedCodesToUnicode,
		sanitizer,
		slugify
	}, compilerOptions);
};
var markdown_exports = __exportAll({
	DURATION_DELAY_TRIGGER: () => 20,
	INLINE_SKIP_R: () => INLINE_SKIP_R,
	ORDERED: () => 1,
	ORDERED_LIST_BULLET: () => ORDERED_LIST_BULLET,
	UNORDERED: () => 2,
	UNORDERED_LIST_BULLET: () => UNORDERED_LIST_BULLET,
	compileWithOptions: () => compileWithOptions
});
export { getMarkdownMetadata as n, markdown_exports as t };
var TRANSLATION = "translation";
var ENUMERATION = "enumeration";
var CONDITION = "condition";
var INSERTION = "insertion";
var FILE = "file";
var OBJECT = "object";
var ARRAY = "array";
var NESTED = "nested";
var REACT_NODE = "reactNode";
var MARKDOWN = "markdown";
var HTML = "html";
var GENDER = "gender";
export { GENDER as a, MARKDOWN as c, REACT_NODE as d, TRANSLATION as f, FILE as i, NESTED as l, CONDITION as n, HTML as o, ENUMERATION as r, INSERTION as s, ARRAY as t, OBJECT as u };
var __defProp = Object.defineProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __require = ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, { get: (a, b) => (typeof require !== "undefined" ? require : a)[b] }) : x)(function(x) {
	if (typeof require !== "undefined") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + x + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
export { __exportAll as n, __require as r, __commonJSMin as t };
