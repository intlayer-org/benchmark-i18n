import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { getContext } from "svelte";
import { derived, writable } from "svelte/store";
var contact_form_default = {
	key: "contact-form",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"sendMessage": "Send Message",
				"describeYourQuestionOrIdea": "Describe your question or idea...",
				"message": "Message",
				"other": "Other",
				"contribution": "Contribution",
				"methodologyQuestion": "Methodology Question",
				"newBenchmarkIdea": "New Benchmark Idea",
				"bugReport": "Bug Report",
				"topic": "Topic",
				"email": "Email",
				"yourName": "Your name",
				"name": "Name"
			},
			"fr": {
				"sendMessage": "Envoyer le message",
				"describeYourQuestionOrIdea": "Décrivez votre question ou idée...",
				"message": "Message",
				"other": "Autre",
				"contribution": "Contribution",
				"methodologyQuestion": "Question sur la méthodologie",
				"newBenchmarkIdea": "Nouvelle idée de benchmark",
				"bugReport": "Rapport de bug",
				"topic": "Sujet",
				"email": "Email",
				"yourName": "Votre nom",
				"name": "Nom"
			},
			"es": {
				"sendMessage": "Enviar mensaje",
				"describeYourQuestionOrIdea": "Describe tu pregunta o idea...",
				"message": "Mensaje",
				"other": "Otro",
				"contribution": "Contribución",
				"methodologyQuestion": "Pregunta sobre metodología",
				"newBenchmarkIdea": "Nueva idea de benchmark",
				"bugReport": "Informe de error",
				"topic": "Tema",
				"email": "Correo electrónico",
				"yourName": "Tu nombre",
				"name": "Nombre"
			},
			"de": {
				"sendMessage": "Nachricht senden",
				"describeYourQuestionOrIdea": "Beschreiben Sie Ihre Frage oder Idee...",
				"message": "Nachricht",
				"other": "Andere",
				"contribution": "Beitrag",
				"methodologyQuestion": "Frage zur Methodik",
				"newBenchmarkIdea": "Neue Benchmark-Idee",
				"bugReport": "Fehlerbericht",
				"topic": "Thema",
				"email": "E-Mail",
				"yourName": "Ihr Name",
				"name": "Name"
			},
			"it": {
				"sendMessage": "Invia messaggio",
				"describeYourQuestionOrIdea": "Descrivi la tua domanda o idea...",
				"message": "Messaggio",
				"other": "Altro",
				"contribution": "Contributo",
				"methodologyQuestion": "Domanda sulla metodologia",
				"newBenchmarkIdea": "Nuova idea di benchmark",
				"bugReport": "Segnalazione bug",
				"topic": "Argomento",
				"email": "Email",
				"yourName": "Il tuo nome",
				"name": "Nome"
			},
			"pt": {
				"sendMessage": "Enviar mensagem",
				"describeYourQuestionOrIdea": "Descreva sua pergunta ou ideia...",
				"message": "Mensagem",
				"other": "Outro",
				"contribution": "Contribuição",
				"methodologyQuestion": "Pergunta sobre metodologia",
				"newBenchmarkIdea": "Nova ideia de benchmark",
				"bugReport": "Relatório de bug",
				"topic": "Tópico",
				"email": "E-mail",
				"yourName": "Seu nome",
				"name": "Nome"
			},
			"zh": {
				"sendMessage": "发送消息",
				"describeYourQuestionOrIdea": "描述您的问题或想法...",
				"message": "消息",
				"other": "其他",
				"contribution": "贡献",
				"methodologyQuestion": "方法论问题",
				"newBenchmarkIdea": "新的基准测试想法",
				"bugReport": "错误报告",
				"topic": "主题",
				"email": "电子邮件",
				"yourName": "您的姓名",
				"name": "姓名"
			},
			"ja": {
				"sendMessage": "メッセージを送信",
				"describeYourQuestionOrIdea": "質問やアイデアを説明してください...",
				"message": "メッセージ",
				"other": "その他",
				"contribution": "貢献",
				"methodologyQuestion": "方法論に関する質問",
				"newBenchmarkIdea": "新しいベンチマークのアイデア",
				"bugReport": "バグ報告",
				"topic": "トピック",
				"email": "メールアドレス",
				"yourName": "お名前",
				"name": "名前"
			},
			"ko": {
				"sendMessage": "메시지 보내기",
				"describeYourQuestionOrIdea": "질문이나 아이디어를 설명해 주세요...",
				"message": "메시지",
				"other": "기타",
				"contribution": "기여",
				"methodologyQuestion": "방법론 질문",
				"newBenchmarkIdea": "새로운 벤치마크 아이디어",
				"bugReport": "버그 보고",
				"topic": "주제",
				"email": "이메일",
				"yourName": "이름",
				"name": "이름"
			},
			"ru": {
				"sendMessage": "Отправить сообщение",
				"describeYourQuestionOrIdea": "Опишите ваш вопрос или идею...",
				"message": "Сообщение",
				"other": "Другое",
				"contribution": "Вклад",
				"methodologyQuestion": "Вопрос по методологии",
				"newBenchmarkIdea": "Новая идея для бенчмарка",
				"bugReport": "Отчет об ошибке",
				"topic": "Тема",
				"email": "Email",
				"yourName": "Ваше имя",
				"name": "Имя"
			}
		}
	}
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
var defaultLocale = internationalization?.defaultLocale;
var createIntlayerStore = () => {
	const { subscribe, set, update } = writable({ locale: defaultLocale });
	return {
		subscribe,
		setLocale: (locale) => update((store) => ({
			...store,
			locale
		})),
		getLocale: () => derived({ subscribe }, ($store) => $store.locale),
		reset: () => set({ locale: defaultLocale })
	};
};
var intlayerStore = createIntlayerStore();
var INTLAYER_CONTEXT_KEY = Symbol("intlayer");
var getIntlayerContext = () => {
	return getContext(INTLAYER_CONTEXT_KEY);
};
var prototypeCache = /* @__PURE__ */ new Map();
var createIntlayerNodePrototype = (basePrototype, valuePrototype) => Object.create(new Proxy(basePrototype, {
	get: (target, property, receiver) => {
		if (typeof property !== "string" || property === "constructor" || property in target) return Reflect.get(target, property, receiver);
		const { value } = receiver;
		if (value === null || value === void 0) return void 0;
		const member = Object(value)[property];
		return typeof member === "function" ? member.bind(value) : member;
	},
	has: (target, property) => property in target || typeof property === "string" && property !== "constructor" && valuePrototype !== null && property in valuePrototype
}), {
	toString: { value() {
		return String(this.value ?? "");
	} },
	valueOf: { value() {
		return this.value;
	} },
	[Symbol.toPrimitive]: { value() {
		return this.value ?? "";
	} }
});
var getIntlayerNodePrototype = (value, basePrototype = Object.prototype) => {
	const valueType = typeof value;
	const valueKey = value === null || value === void 0 ? null : valueType === "object" || valueType === "function" ? Object.getPrototypeOf(value) : valueType;
	let prototypes = prototypeCache.get(basePrototype);
	if (!prototypes) {
		prototypes = /* @__PURE__ */ new Map();
		prototypeCache.set(basePrototype, prototypes);
	}
	let prototype = prototypes.get(valueKey);
	if (!prototype) {
		prototype = createIntlayerNodePrototype(basePrototype, valueKey === null ? null : Object.getPrototypeOf(Object(value)));
		prototypes.set(valueKey, prototype);
	}
	return prototype;
};
var TRANSLATION = "translation";
var OBJECT = "object";
var ARRAY = "array";
var getChildProps = (props, children, keyPathSegment) => ({
	...props,
	children,
	keyPath: [...props.keyPath, keyPathSegment]
});
var deepTransformNode = (node, props) => {
	for (const plugin of props.plugins ?? []) if (plugin.canHandle(node)) return plugin.transform(node, props, deepTransformNode);
	if (node === null || typeof node !== "object") return node;
	if (node.$$typeof !== void 0 || node.__v_isVNode !== void 0 || node._isVNode !== void 0 || node.isJSX !== void 0) return node;
	if (Array.isArray(node)) return node.map((child, index) => deepTransformNode(child, getChildProps(props, child, {
		type: ARRAY,
		key: index
	})));
	const result = {};
	for (const key in node) {
		const keyPathSegment = {
			type: OBJECT,
			key
		};
		if (props.eager) {
			result[key] = deepTransformNode(node[key], getChildProps(props, node[key], keyPathSegment));
			continue;
		}
		Object.defineProperty(result, key, {
			enumerable: true,
			configurable: true,
			get: function() {
				const transformed = deepTransformNode(node[key], getChildProps(props, node[key], keyPathSegment));
				Object.defineProperty(this, key, {
					value: transformed,
					enumerable: true,
					configurable: true
				});
				return transformed;
			}
		});
	}
	return result;
};
var pluginsIdentities = /* @__PURE__ */ new WeakMap();
var nextPluginsIdentity = 0;
var getPluginsCacheKey = (plugins) => {
	if (!plugins) return "base";
	const existingIdentity = pluginsIdentities.get(plugins);
	if (existingIdentity) return existingIdentity;
	nextPluginsIdentity += 1;
	const identity = `p${nextPluginsIdentity}`;
	pluginsIdentities.set(plugins, identity);
	return identity;
};
var MAX_ENTRIES_PER_DICTIONARY = 256;
var transformCache = /* @__PURE__ */ new WeakMap();
var isMemoizableDictionary = (value) => value !== null && typeof value === "object";
var getDictionaryTransformCacheKey = (locale, selectorCacheKey, plugins) => `${locale}_${selectorCacheKey}_${getPluginsCacheKey(plugins)}`;
var readTransformCache = (dictionary, cacheKey) => {
	if (!isMemoizableDictionary(dictionary)) return { hit: false };
	const entries = transformCache.get(dictionary);
	if (!entries?.has(cacheKey)) return { hit: false };
	return {
		hit: true,
		content: entries.get(cacheKey)
	};
};
var writeTransformCache = (dictionary, cacheKey, content) => {
	if (!isMemoizableDictionary(dictionary)) return content;
	let entries = transformCache.get(dictionary);
	if (!entries) {
		entries = /* @__PURE__ */ new Map();
		transformCache.set(dictionary, entries);
	}
	if (entries.size >= MAX_ENTRIES_PER_DICTIONARY) entries.clear();
	entries.set(cacheKey, content);
	return content;
};
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	pluralPlugin(locale ?? internationalization.defaultLocale),
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin,
	selectPlugin
].filter((plugin) => plugin !== fallbackPlugin);
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var transformsInProgress = /* @__PURE__ */ new WeakSet();
var getDictionary$1 = (dictionary, localeOrSelector, plugins) => {
	const { locale, selector } = {
		locale: localeOrSelector,
		selector: void 0
	};
	const cacheKey = getDictionaryTransformCacheKey(locale ?? internationalization.defaultLocale, "", plugins);
	const cached = readTransformCache(dictionary, cacheKey);
	if (cached.hit) return cached.content;
	const appliedPlugins = plugins ?? getBasePlugins(locale);
	const resolved = dictionary;
	const transformDictionary = (resolvedDictionary) => {
		const props = {
			dictionaryKey: resolvedDictionary.key,
			dictionaryPath: resolvedDictionary.filePath,
			keyPath: [],
			plugins: appliedPlugins,
			nestedDictionaries: resolvedDictionary.nestedDictionaries,
			eager: !transformsInProgress.has(resolvedDictionary)
		};
		transformsInProgress.add(resolvedDictionary);
		try {
			return getContent(resolvedDictionary.content, props, appliedPlugins);
		} finally {
			if (props.eager) transformsInProgress.delete(resolvedDictionary);
		}
	};
	if (resolved === null) return writeTransformCache(dictionary, cacheKey, null);
	if (Array.isArray(resolved)) return writeTransformCache(dictionary, cacheKey, resolved.map(transformDictionary));
	return writeTransformCache(dictionary, cacheKey, transformDictionary(resolved));
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
	if (!isPlainObject(target) || !isPlainObject(source)) return target;
	let result = target;
	for (const key of Object.keys(source)) {
		const sourceValue = source[key];
		if (key === "__proto__" || key === "constructor" || sourceValue === void 0) continue;
		const targetValue = target[key];
		const merged = targetValue === void 0 ? sourceValue : typeof targetValue === "object" ? deepMerge(targetValue, sourceValue) : targetValue;
		if (merged === targetValue) continue;
		if (result === target) result = { ...target };
		result[key] = merged;
	}
	return result;
};
var getTranslation = (languageContent, locale, fallback) => {
	const get = (localeEl) => languageContent[localeEl];
	const exactMatch = get(locale);
	if (typeof exactMatch === "string") return exactMatch;
	const candidates = [
		locale,
		locale.split("-")[0],
		fallback,
		fallback?.split("-")[0]
	];
	const results = [];
	for (let index = 0; index < candidates.length; index++) {
		const candidate = candidates[index];
		if (!candidate || candidates.indexOf(candidate) < index) continue;
		const value = get(candidate);
		if (value === void 0) continue;
		if (typeof value === "string") {
			if (results.length === 0) return value;
			continue;
		}
		results.push(value);
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
var translationPlugin = (locale, fallback) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? fallbackPlugin : {
	id: "translation-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
	transform: (node, props, deepTransformNode) => {
		const content = getTranslation(node["translation"] ?? {}, locale, fallback);
		return deepTransformNode(content, {
			...props,
			children: content,
			keyPath: [...props.keyPath, {
				type: TRANSLATION,
				key: locale
			}]
		});
	}
};
var enumerationPlugin = fallbackPlugin;
var pluralPlugin = (locale) => fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin$1 = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var selectPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
function IntlayerNodeWrapper($$anchor, $$props) {
	$.push($$props, false);
	let Renderer = $.prop($$props, "Renderer", 8, void 0);
	let rendererProps = $.prop($$props, "rendererProps", 24, () => ({}));
	let value = $.prop($$props, "value", 8, void 0);
	let ResolvedRenderer = $.mutable_source();
	let isAwaitingRenderer = $.mutable_source(false);
	$.legacy_pre_effect(() => $.deep_read_state(Renderer()), () => {
		if (typeof Renderer()?.then === "function") {
			$.set(isAwaitingRenderer, true);
			Renderer().then((component) => {
				$.set(ResolvedRenderer, component);
				$.set(isAwaitingRenderer, false);
			});
		} else {
			$.set(ResolvedRenderer, Renderer());
			$.set(isAwaitingRenderer, false);
		}
	});
	$.legacy_pre_effect_reset();
	$.init();
	var fragment = $.comment();
	var node = $.first_child(fragment);
	var consequent = ($$anchor) => {};
	var consequent_1 = ($$anchor) => {
		var fragment_1 = $.comment();
		var node_1 = $.first_child(fragment_1);
		$.element(node_1, () => $.get(ResolvedRenderer), false, ($$element, $$anchor) => {
			$.attribute_effect($$element, () => ({ ...rendererProps() }));
			var text = $.text();
			$.template_effect(() => $.set_text(text, value()));
			$.append($$anchor, text);
		});
		$.append($$anchor, fragment_1);
	};
	var consequent_2 = ($$anchor) => {
		$.get(ResolvedRenderer)($$anchor, $.spread_props(rendererProps, {
			children: ($$anchor, $$slotProps) => {
				$.next();
				var text_1 = $.text();
				$.template_effect(() => $.set_text(text_1, value()));
				$.append($$anchor, text_1);
			},
			$$slots: { default: true }
		}));
	};
	var alternate = ($$anchor) => {
		var text_2 = $.text();
		$.template_effect(() => $.set_text(text_2, value()));
		$.append($$anchor, text_2);
	};
	$.if(node, ($$render) => {
		if ($.get(isAwaitingRenderer)) $$render(consequent);
		else if (typeof $.get(ResolvedRenderer) === "string") $$render(consequent_1, 1);
		else if (typeof $.get(ResolvedRenderer) === "function") $$render(consequent_2, 2);
		else $$render(alternate, -1);
	});
	$.append($$anchor, fragment);
	$.pop();
}
var renderIntlayerNode = (args) => {
	const isClassComponent = Boolean(IntlayerNodeWrapper.prototype?.$destroy);
	let Node;
	if (isClassComponent) Node = function IntlayerNode(options) {
		return new IntlayerNodeWrapper({
			...options,
			props: {
				...options.props,
				Renderer: args.component,
				rendererProps: args.props,
				value: args.value
			}
		});
	};
	else Node = (props) => {
		return IntlayerNodeWrapper(props, {
			Renderer: args.component,
			rendererProps: args.props,
			value: args.value
		});
	};
	Object.defineProperty(Node, "value", {
		value: args.value,
		writable: true,
		configurable: true
	});
	if (args.additionalProps) Object.assign(Node, args.additionalProps);
	Object.setPrototypeOf(Node, getIntlayerNodePrototype(args.value, Function.prototype));
	return Node;
};
var intlayerNodePlugins = {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (node, props) => {
		return renderIntlayerNode({
			value: props.children ?? node,
			component: void 0,
			props: {}
		});
	}
};
var svelteNodePlugins = intlayerNodePlugins;
var insertionPlugin = fallbackPlugin;
var markdownPlugin = fallbackPlugin;
var htmlPlugin = fallbackPlugin;
var pluginsCache = /* @__PURE__ */ new Map();
var getPlugins = (locale, fallback = true) => {
	const cacheKey = `${locale ?? internationalization.defaultLocale}_${fallback}`;
	if (pluginsCache.has(cacheKey)) return pluginsCache.get(cacheKey);
	const enabledPlugins = [
		intlayerNodePlugins,
		translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		pluralPlugin(locale ?? internationalization.defaultLocale),
		conditionPlugin,
		nestedPlugin(locale ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		selectPlugin,
		svelteNodePlugins,
		insertionPlugin,
		markdownPlugin,
		htmlPlugin
	].filter((plugin) => plugin !== fallbackPlugin);
	pluginsCache.set(cacheKey, enabledPlugins);
	return enabledPlugins;
};
var getDictionary = (dictionary, localeOrSelector) => {
	return getDictionary$1(dictionary, localeOrSelector, getPlugins(typeof localeOrSelector === "object" && localeOrSelector !== null ? localeOrSelector.locale : localeOrSelector));
};
var useDictionary = (dictionary, localeOrSelector) => {
	const context = getIntlayerContext();
	return derived([intlayerStore], ([$store]) => {
		const contextLocale = context?.locale ?? $store.locale;
		return getDictionary(dictionary, localeOrSelector ?? contextLocale);
	});
};
var root = $.from_html(`<form class="space-y-6"><div class="grid gap-4 md:grid-cols-2"><div><label class="mb-1 block text-sm font-medium text-foreground"> </label> <input class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none"/></div> <div><label class="mb-1 block text-sm font-medium text-foreground"> </label> <input type="email" class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none" placeholder="you@example.com"/></div></div> <div><label class="mb-1 block text-sm font-medium text-foreground"> </label> <select class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none"><option> </option><option> </option><option> </option><option> </option><option> </option></select></div> <div><label class="mb-1 block text-sm font-medium text-foreground"> </label> <textarea class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none"></textarea></div> <button type="submit" class="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"> </button></form>`);
function ContactForm($$anchor, $$props) {
	$.push($$props, false);
	const $content = () => $.store_get(content, "$content", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const content = useDictionary(contact_form_default);
	const nameId = "contact-name";
	const emailId = "contact-email";
	const topicId = "contact-topic";
	const messageId = "contact-message";
	$.init();
	var form = root();
	var div = $.child(form);
	var div_1 = $.child(div);
	var label = $.child(div_1);
	$.set_attribute(label, "for", nameId);
	var text = $.only_child(label, true);
	var input = $.sibling(label, 2);
	$.set_attribute(input, "id", nameId);
	$.reset(div_1);
	var div_2 = $.sibling(div_1, 2);
	var label_1 = $.child(div_2);
	$.set_attribute(label_1, "for", emailId);
	var text_1 = $.only_child(label_1, true);
	var input_1 = $.sibling(label_1, 2);
	$.set_attribute(input_1, "id", emailId);
	$.reset(div_2);
	$.reset(div);
	var div_3 = $.sibling(div, 2);
	var label_2 = $.child(div_3);
	$.set_attribute(label_2, "for", topicId);
	var text_2 = $.only_child(label_2, true);
	var select = $.sibling(label_2, 2);
	$.set_attribute(select, "id", topicId);
	var option = $.child(select);
	var text_3 = $.only_child(option, true);
	var option_value = {};
	var option_1 = $.sibling(option);
	var text_4 = $.only_child(option_1, true);
	var option_1_value = {};
	var option_2 = $.sibling(option_1);
	var text_5 = $.only_child(option_2, true);
	var option_2_value = {};
	var option_3 = $.sibling(option_2);
	var text_6 = $.only_child(option_3, true);
	var option_3_value = {};
	var option_4 = $.sibling(option_3);
	var text_7 = $.only_child(option_4, true);
	var option_4_value = {};
	$.reset(select);
	$.reset(div_3);
	var div_4 = $.sibling(div_3, 2);
	var label_3 = $.child(div_4);
	$.set_attribute(label_3, "for", messageId);
	var text_8 = $.only_child(label_3, true);
	var textarea = $.sibling(label_3, 2);
	$.set_attribute(textarea, "id", messageId);
	$.set_attribute(textarea, "rows", 5);
	$.reset(div_4);
	var button = $.sibling(div_4, 2);
	var text_9 = $.only_child(button, true);
	$.reset(form);
	$.template_effect(() => {
		$.set_text(text, $content().name);
		$.set_attribute(input, "placeholder", $content().yourName);
		$.set_text(text_1, $content().email);
		$.set_text(text_2, $content().topic);
		$.set_text(text_3, $content().bugReport);
		if (option_value !== (option_value = $content().bugReport)) option.__value = option_value;
		$.set_text(text_4, $content().newBenchmarkIdea);
		if (option_1_value !== (option_1_value = $content().newBenchmarkIdea)) option_1.__value = option_1_value;
		$.set_text(text_5, $content().methodologyQuestion);
		if (option_2_value !== (option_2_value = $content().methodologyQuestion)) option_2.__value = option_2_value;
		$.set_text(text_6, $content().contribution);
		if (option_3_value !== (option_3_value = $content().contribution)) option_3.__value = option_3_value;
		$.set_text(text_7, $content().other);
		if (option_4_value !== (option_4_value = $content().other)) option_4.__value = option_4_value;
		$.set_text(text_8, $content().message);
		$.set_attribute(textarea, "placeholder", $content().describeYourQuestionOrIdea);
		$.set_text(text_9, $content().sendMessage);
	});
	$.append($$anchor, form);
	$.pop();
	$$cleanup();
}
export { ContactForm as default };
