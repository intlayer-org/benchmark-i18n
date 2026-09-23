import { Dynamic, effect, insert, setAttribute, template } from "solid-js/web";
import { createContext, createMemo, createUniqueId, useContext } from "solid-js";
var content = {
	"de": () => import("./de-DGf0_QO3.js").then((m) => m.default),
	"en": () => import("./en-CeH5nd5I.js").then((m) => m.default),
	"es": () => import("./es-B2xu9HCF.js").then((m) => m.default),
	"fr": () => import("./fr-BjAfcMok.js").then((m) => m.default),
	"it": () => import("./it-XwzCbbCs.js").then((m) => m.default),
	"ja": () => import("./ja-785Udwqg.js").then((m) => m.default),
	"ko": () => import("./ko-C5edV9rU.js").then((m) => m.default),
	"pt": () => import("./pt-CGRVuMzH.js").then((m) => m.default),
	"ru": () => import("./ru-ALdWzoqU.js").then((m) => m.default),
	"zh": () => import("./zh-fPdlrcx_.js").then((m) => m.default)
};
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
var internationalization = {
	"locales": [
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
	],
	"requiredLocales": [
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
	],
	"strictMode": "inclusive",
	"defaultLocale": "en"
};
var routing = {
	"mode": "prefix-all",
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": {}
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
};
var TRANSLATION = "translation";
var OBJECT = "object";
var ARRAY = "array";
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
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var translationPlugin = (locale, fallback) => process.env["INTLAYER_NODE_TYPE_TRANSLATION"] === "false" ? fallbackPlugin : {
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
var enumerationPlugin = fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
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
var S = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (t, { plugins: a, ...o }) => e$1({
		...o,
		value: o.children,
		children: o.children
	})
};
var C = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? fallbackPlugin : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (a, { plugins: o, ...s }) => e$1({
		...s,
		value: "[[solid-element]]",
		children: typeof Node < "u" && a instanceof Node ? a : t$1(a)
	})
};
var T = fallbackPlugin;
var D = fallbackPlugin;
var O = fallbackPlugin;
var k = /* @__PURE__ */ new Map();
var A = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (k.has(n)) return k.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		S,
		C,
		T,
		D,
		O
	];
	return k.set(n, r), r;
};
var n$1 = (n, r) => getDictionary(n, r, A(r));
var TREE_SHAKE_STORAGE_COOKIES = process.env["INTLAYER_ROUTING_STORAGE_COOKIES"] === "false";
process.env["INTLAYER_ROUTING_STORAGE_HEADERS"];
var getLocaleFromStorageClient = (options = localeStorageOptions) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
};
var localeStorageOptions = {
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
};
var a$1 = getLocaleFromStorageClient(localeStorageOptions);
var y = createContext({
	locale: () => a$1 ?? internationalization?.defaultLocale,
	setLocale: () => null
});
var i = (i, a) => {
	let o = useContext(y) ?? {};
	return createMemo(() => n$1(i, a ?? o?.locale?.()));
};
var e = (e) => {
	let t = "pending", n, r = e.then((e) => {
		t = "success", n = e;
	}, (e) => {
		t = "error", n = e;
	});
	return { read() {
		if (t === "pending") throw r;
		if (t === "error") throw n;
		return n;
	} };
};
var t = /* @__PURE__ */ new Map();
var n = (n, r) => (t.has(n) || t.set(n, e(r)), t.get(n).read());
var a = (a, o, s) => {
	let { locale: c } = useContext(y) ?? {}, l = internationalization.defaultLocale, u = s ?? c?.() ?? l;
	return i(n(`${String(o)}.${u}`, a[u]?.()), u);
};
var _tmpl$ = template(`<form class=space-y-6><div class="grid gap-4 md:grid-cols-2"><div><label class="mb-1 block text-sm font-medium text-foreground"></label><input class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"></div><div><label class="mb-1 block text-sm font-medium text-foreground"></label><input type=email class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"placeholder=you@example.com></div></div><div><label class="mb-1 block text-sm font-medium text-foreground"></label><select class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"><option></option><option></option><option></option><option></option><option></option></select></div><div><label class="mb-1 block text-sm font-medium text-foreground"></label><textarea rows=5 class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"></textarea></div><button type=submit class="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">`);
function ContactForm() {
	const content$1 = a(content, "contact-form");
	const nameId = createUniqueId();
	const emailId = createUniqueId();
	const topicId = createUniqueId();
	const messageId = createUniqueId();
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling, _el$7 = _el$3.nextSibling.firstChild, _el$8 = _el$7.nextSibling, _el$9 = _el$2.nextSibling, _el$0 = _el$9.firstChild, _el$1 = _el$0.nextSibling, _el$10 = _el$1.firstChild, _el$11 = _el$10.nextSibling, _el$12 = _el$11.nextSibling, _el$13 = _el$12.nextSibling, _el$14 = _el$13.nextSibling, _el$15 = _el$9.nextSibling, _el$16 = _el$15.firstChild, _el$17 = _el$16.nextSibling, _el$18 = _el$15.nextSibling;
		setAttribute(_el$4, "for", nameId);
		insert(_el$4, () => content$1().name);
		setAttribute(_el$5, "id", nameId);
		setAttribute(_el$7, "for", emailId);
		insert(_el$7, () => content$1().email);
		setAttribute(_el$8, "id", emailId);
		setAttribute(_el$0, "for", topicId);
		insert(_el$0, () => content$1().topic);
		setAttribute(_el$1, "id", topicId);
		insert(_el$10, () => content$1().bugReport);
		insert(_el$11, () => content$1().newBenchmarkIdea);
		insert(_el$12, () => content$1().methodologyQuestion);
		insert(_el$13, () => content$1().contribution);
		insert(_el$14, () => content$1().other);
		setAttribute(_el$16, "for", messageId);
		insert(_el$16, () => content$1().message);
		setAttribute(_el$17, "id", messageId);
		insert(_el$18, () => content$1().sendMessage);
		effect((_p$) => {
			var _v$ = content$1().yourName.value, _v$2 = content$1().describeYourQuestionOrIdea.value;
			_v$ !== _p$.e && setAttribute(_el$5, "placeholder", _p$.e = _v$);
			_v$2 !== _p$.t && setAttribute(_el$17, "placeholder", _p$.t = _v$2);
			return _p$;
		}, {
			e: void 0,
			t: void 0
		});
		return _el$;
	})();
}
export { ContactForm as default };
var de_default = {
	key: "contact-form",
	content: {
		"g": "Name",
		"l": "Ihr Name",
		"d": "E-Mail",
		"k": "Thema",
		"a": "Fehlerbericht",
		"h": "Neue Benchmark-Idee",
		"f": "Frage zur Methodik",
		"b": "Beitrag",
		"i": "Sonstiges",
		"e": "Nachricht",
		"c": "Beschreiben Sie Ihre Frage oder Idee...",
		"j": "Nachricht senden"
	}
};
export { de_default as default };
var en_default = {
	key: "contact-form",
	content: {
		"g": "Name",
		"l": "Your name",
		"d": "Email",
		"k": "Topic",
		"a": "Bug Report",
		"h": "New Benchmark Idea",
		"f": "Methodology Question",
		"b": "Contribution",
		"i": "Other",
		"e": "Message",
		"c": "Describe your question or idea...",
		"j": "Send Message"
	}
};
export { en_default as default };
var es_default = {
	key: "contact-form",
	content: {
		"g": "Nombre",
		"l": "Tu nombre",
		"d": "Correo electrónico",
		"k": "Tema",
		"a": "Reporte de error",
		"h": "Nueva idea de benchmark",
		"f": "Pregunta sobre metodología",
		"b": "Contribución",
		"i": "Otro",
		"e": "Mensaje",
		"c": "Describe tu pregunta o idea...",
		"j": "Enviar mensaje"
	}
};
export { es_default as default };
var fr_default = {
	key: "contact-form",
	content: {
		"g": "Nom",
		"l": "Votre nom",
		"d": "Email",
		"k": "Sujet",
		"a": "Rapport de bug",
		"h": "Nouvelle idée de benchmark",
		"f": "Question sur la méthodologie",
		"b": "Contribution",
		"i": "Autre",
		"e": "Message",
		"c": "Décrivez votre question ou idée...",
		"j": "Envoyer le message"
	}
};
export { fr_default as default };
var it_default = {
	key: "contact-form",
	content: {
		"g": "Nome",
		"l": "Il tuo nome",
		"d": "Email",
		"k": "Argomento",
		"a": "Segnalazione bug",
		"h": "Nuova idea di benchmark",
		"f": "Domanda sulla metodologia",
		"b": "Contributo",
		"i": "Altro",
		"e": "Messaggio",
		"c": "Descrivi la tua domanda o idea...",
		"j": "Invia messaggio"
	}
};
export { it_default as default };
var ja_default = {
	key: "contact-form",
	content: {
		"g": "名前",
		"l": "あなたの名前",
		"d": "メールアドレス",
		"k": "トピック",
		"a": "バグ報告",
		"h": "新しいベンチマークのアイデア",
		"f": "方法論に関する質問",
		"b": "貢献",
		"i": "その他",
		"e": "メッセージ",
		"c": "質問やアイデアを説明してください...",
		"j": "メッセージを送信"
	}
};
export { ja_default as default };
var ko_default = {
	key: "contact-form",
	content: {
		"g": "이름",
		"l": "귀하의 성함",
		"d": "이메일",
		"k": "주제",
		"a": "버그 보고",
		"h": "새로운 벤치마크 아이디어",
		"f": "방법론 질문",
		"b": "기여",
		"i": "기타",
		"e": "메시지",
		"c": "질문이나 아이디어를 설명해 주세요...",
		"j": "메시지 보내기"
	}
};
export { ko_default as default };
var pt_default = {
	key: "contact-form",
	content: {
		"g": "Nome",
		"l": "Seu nome",
		"d": "E-mail",
		"k": "Tópico",
		"a": "Relato de bug",
		"h": "Nova ideia de benchmark",
		"f": "Pergunta sobre metodologia",
		"b": "Contribuição",
		"i": "Outro",
		"e": "Mensagem",
		"c": "Descreva sua pergunta ou ideia...",
		"j": "Enviar mensagem"
	}
};
export { pt_default as default };
var ru_default = {
	key: "contact-form",
	content: {
		"g": "Имя",
		"l": "Ваше имя",
		"d": "Электронная почта",
		"k": "Тема",
		"a": "Отчет об ошибке",
		"h": "Новая идея бенчмарка",
		"f": "Вопрос по методологии",
		"b": "Вклад",
		"i": "Другое",
		"e": "Сообщение",
		"c": "Опишите ваш вопрос или идею...",
		"j": "Отправить сообщение"
	}
};
export { ru_default as default };
var zh_default = {
	key: "contact-form",
	content: {
		"g": "姓名",
		"l": "您的姓名",
		"d": "电子邮件",
		"k": "主题",
		"a": "报告错误",
		"h": "新的基准测试想法",
		"f": "方法论问题",
		"b": "贡献",
		"i": "其他",
		"e": "消息",
		"c": "描述您的问题或想法...",
		"j": "发送消息"
	}
};
export { zh_default as default };
