import { Fragment, computed, createElementBlock, createElementVNode, defineComponent, getCurrentInstance, h, inject, isRef, markRaw, onBeforeMount, onMounted, openBlock, ref, renderList, shallowRef, toDisplayString, toValue, watch } from "vue";
var what_we_measure_default = {
	key: "what-we-measure",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"b\":\"What We Measure\",\"a\":[{\"metric\":\"Bundle size impact\",\"desc\":\"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\"},{\"metric\":\"Rendering overhead\",\"desc\":\"How much extra time the library adds to the render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\"},{\"metric\":\"Hydration cost\",\"desc\":\"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\"},{\"metric\":\"Lazy loading effectiveness\",\"desc\":\"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\"},{\"metric\":\"Locale switch speed\",\"desc\":\"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\"}]},\"fr\":{\"b\":\"Ce que nous mesurons\",\"a\":[{\"metric\":\"Impact sur la taille du bundle\",\"desc\":\"Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.\"},{\"metric\":\"Surcharge de rendu\",\"desc\":\"Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arborescence des composants.\"},{\"metric\":\"Coût d'hydratation\",\"desc\":\"Pendant le SSR, les données de traduction sont sérialisées en HTML. Les dictionnaires volumineux augmentent la charge utile HTML et ralentissent l'hydratation — le moment où la page devient interactive.\"},{\"metric\":\"Efficacité du chargement différé\",\"desc\":\"Si le fractionnement des traductions par itinéraire ou par espace de noms réduit réellement la charge initiale, et quels compromis il introduit (requêtes en cascade, FOUC, complexité du cache).\"},{\"metric\":\"Vitesse de changement de langue\",\"desc\":\"À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération de nouvelles traductions, le re-rendu des composants et la mise à jour du DOM.\"}]},\"es\":{\"b\":\"Lo que medimos\",\"a\":[{\"metric\":\"Impacto en el tamaño del bundle\",\"desc\":\"Los bytes adicionales de JavaScript que se envían a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.\"},{\"metric\":\"Sobrecarga de renderizado\",\"desc\":\"Cuánto tiempo adicional agrega la biblioteca al ciclo de renderizado. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes.\"},{\"metric\":\"Coste de hidratación\",\"desc\":\"Durante el SSR, los datos de traducción se serializan en HTML. Los diccionarios grandes aumentan la carga útil de HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.\"},{\"metric\":\"Efectividad de la carga perezosa\",\"desc\":\"Si dividir las traducciones por ruta o espacio de nombres reduce realmente la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad del caché).\"},{\"metric\":\"Velocidad de cambio de idioma\",\"desc\":\"Qué tan rápido la aplicación puede cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el re-renderizado de componentes y la actualización del DOM.\"}]},\"de\":{\"b\":\"Was wir messen\",\"a\":[{\"metric\":\"Auswirkungen auf die Bundle-Größe\",\"desc\":\"Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.\"},{\"metric\":\"Rendering-Overhead\",\"desc\":\"Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.\"},{\"metric\":\"Hydratationskosten\",\"desc\":\"Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen die HTML-Nutzlast und verlangsamen die Hydratation – den Moment, in dem die Seite interaktiv wird.\"},{\"metric\":\"Effektivität von Lazy Loading\",\"desc\":\"Ob die Aufteilung von Übersetzungen nach Route oder Namensraum die Erstbelastung tatsächlich reduziert und welche Kompromisse sie mit sich bringt (Wasserfall-Anfragen, FOUC, Cache-Komplexität).\"},{\"metric\":\"Sprachumschaltgeschwindigkeit\",\"desc\":\"Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann – einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderings von Komponenten und der Aktualisierung des DOM.\"}]},\"it\":{\"b\":\"Cosa misuriamo\",\"a\":[{\"metric\":\"Impatto sulle dimensioni del bundle\",\"desc\":\"I byte JavaScript aggiuntivi inviati agli utenti quando sono incluse la libreria i18n e i relativi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.\"},{\"metric\":\"Sovraccarico di rendering\",\"desc\":\"Quanto tempo extra aggiunge la libreria al ciclo di rendering. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare re-rendering non necessari in tutto l'albero dei componenti.\"},{\"metric\":\"Costo dell'idratazione\",\"desc\":\"Durante l'SSR, i dati di traduzione vengono serializzati in HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione, ovvero il momento in care la pagina diventa interattiva.\"},{\"metric\":\"Efficacia del caricamento pigro\",\"desc\":\"Se la suddivisione delle traduzioni per percorso o spazio dei nomi riduce effettivamente il carico iniziale e quali compromessi introduce (richieste a cascata, FOUC, complessità della cache).\"},{\"metric\":\"Velocità di cambio della lingua\",\"desc\":\"Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione, incluso il recupero di nuove traduzioni, il re-rendering dei componenti e l'aggiornamento del DOM.\"}]},\"pt\":{\"b\":\"O Que Medimos\",\"a\":[{\"metric\":\"Impacto no tamanho do bundle\",\"desc\":\"Os bytes adicionais de JavaScript enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.\"},{\"metric\":\"Sobrecarga de renderização\",\"desc\":\"Quanto tempo extra a biblioteca adiciona ao ciclo de renderização. Bibliotecas que injetam traduções por meio de um único provedor de contexto podem causar renderizações desnecessárias em toda a árvore de componentes.\"},{\"metric\":\"Custo de hidratação\",\"desc\":\"Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga útil do HTML e retardam a hidratação — o momento em que a página se torna interativa.\"},{\"metric\":\"Eficácia do carregamento lento\",\"desc\":\"Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações isso introduz (solicitações em cascata, FOUC, complexidade de cache).\"},{\"metric\":\"Velocidade de troca de idioma\",\"desc\":\"Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM.\"}]},\"zh\":{\"b\":\"我们的测量指标\",\"a\":[{\"metric\":\"对捆绑包大小的影响\",\"desc\":\"包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这会直接影响慢速网络上的下载时间。\"},{\"metric\":\"渲染开销\",\"desc\":\"库为渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树中不必要的重新渲染。\"},{\"metric\":\"注水（Hydration）成本\",\"desc\":\"在 SSR 期间，翻译数据被序列化为 HTML。大型词典会增加 HTML 负载并减慢注水速度——即页面变得可交互的时刻。\"},{\"metric\":\"延迟加载的有效性\",\"desc\":\"按路由或命名空间拆分翻译是否真的减少了初始加载量，以及它引入了哪些权衡（瀑布请求、FOUC、缓存复杂性）。\"},{\"metric\":\"语言切换速度\",\"desc\":\"应用程序在运行时从一种语言切换到另一种语言的速度有多快——包括获取新翻译、重新渲染组件和更新 DOM。\"}]},\"ja\":{\"b\":\"測定内容\",\"a\":[{\"metric\":\"バンドルサイズへの影響\",\"desc\":\"i18nライブラリとその翻訳ファイルが含まれている場合にユーザーに送信される追加のJavaScriptバイト。これは、低速ネットワークでのダウンロード時間に直接影響します。\"},{\"metric\":\"レンダリングのオーバーヘッド\",\"desc\":\"ライブラリがレンダリングサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。\"},{\"metric\":\"ハイドレーションのコスト\",\"desc\":\"SSR中、翻訳データはHTMLにシリアル化されます。大きな辞書はHTMLペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。\"},{\"metric\":\"遅延読み込みの有効性\",\"desc\":\"ルートや名前空間ごとに翻訳を分割することが実際に初期ロードを削減するかどうか、そしてどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）を導入するか。\"},{\"metric\":\"言語切り替え速度\",\"desc\":\"ランタイムにアプリが言語を切り替える速度。これには、新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。\"}]},\"ko\":{\"b\":\"측정 항목\",\"a\":[{\"metric\":\"번들 크기 영향\",\"desc\":\"i18n 라이브러리 및 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.\"},{\"metric\":\"렌더링 오버헤드\",\"desc\":\"라이브러리가 렌더링 주기에 추가하는 추가 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 삽입하는 라이브러리는 구성 요소 트리 전체에서 불필요한 재렌더링을 유발할 수 있습니다.\"},{\"metric\":\"하이드레이션 비용\",\"desc\":\"SSR 기간 동안 번역 데이터는 HTML로 직렬화됩니다. 대규모 사전은 HTML 페이로드를 증가시키고 페이지가 대화형이 되는 순간인 하이드레이션 속도를 늦춥니다.\"},{\"metric\":\"지연 로딩의 효과성\",\"desc\":\"경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지 여부와 도입되는 트레이드오프(폭포수 요청, FOUC, 캐시 복잡성)는 무엇인지 확인합니다.\"},{\"metric\":\"언어 전환 속도\",\"desc\":\"런타임에 앱이 한 언어에서 다른 언어로 전환되는 속도(새 번역 가져오기, 구성 요소 재렌더링, DOM 업데이트 포함)입니다.\"}]},\"ru\":{\"b\":\"Что мы измеряем\",\"a\":[{\"metric\":\"Влияние на размер бандла\",\"desc\":\"Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.\"},{\"metric\":\"Издержки на рендеринг\",\"desc\":\"Сколько дополнительного времени библиотека добавляет к циклу рендеринга. Библиотеки, внедряющие переводы через один контекстный провайдер, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.\"},{\"metric\":\"Стоимость гидратации\",\"desc\":\"Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML-кода и замедляют гидратацию — момент, когда страница становится интерактивной.\"},{\"metric\":\"Эффективность ленивой загрузки\",\"desc\":\"Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы это влечет за собой (каскадные запросы, FOUC, сложность кэширования).\"},{\"metric\":\"Скорость переключения языка\",\"desc\":\"Насколько быстро приложение может переключаться с одного языка на другой во время выполнения, включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.\"}]}}}")
};
var n$1 = ({ value: r, children: i, additionalProps: a = {} }) => {
	let o = ref(r), s = typeof i == "function" ? (e) => i(e) : () => i, c = (e) => (o.value, s(e)), l = ((e) => c(e));
	if (Object.assign(l, {
		render: c,
		toString: () => String(o.value ?? ""),
		valueOf: () => o.value,
		[Symbol.toPrimitive]: () => o.value,
		toJSON: () => o.value,
		get raw() {
			return o.value;
		},
		set raw(e) {
			o.value = e;
		},
		get value() {
			return o.value;
		},
		use(e) {
			return n$1({
				value: o.value,
				children: () => s(e),
				additionalProps: a
			});
		},
		__update(e) {
			s = e.render, this.raw = e.raw;
		},
		...a
	}), r != null) {
		let e = Object(r), t = Object.getPrototypeOf(e);
		for (let n of Object.getOwnPropertyNames(t)) {
			if (n === "constructor" || n in l) continue;
			let t = e[n];
			typeof t == "function" && Object.defineProperty(l, n, {
				value: t.bind(r),
				writable: !0,
				configurable: !0
			});
		}
	}
	return markRaw(l);
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
	for (const key in node) {
		const childProps = {
			...props,
			children: node[key],
			keyPath: [...props.keyPath, {
				type: OBJECT,
				key
			}]
		};
		if (props.eager) {
			result[key] = deepTransformNode(node[key], childProps);
			continue;
		}
		Object.defineProperty(result, key, {
			enumerable: true,
			configurable: true,
			get: function() {
				const transformed = deepTransformNode(node[key], childProps);
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
var DEFAULT_VARIANT_ID = "default";
var SEGMENT_UNSAFE_CHARS = /[^A-Za-z0-9._&=-]/g;
var COMPONENT_UNSAFE_CHARS = /[^A-Za-z0-9._-]/g;
var percentEncodeChar = (char) => `%${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`;
var encodeSegmentText = (raw, unsafeChars) => {
	if (raw === "") return "%";
	const encoded = raw.replace(unsafeChars, percentEncodeChar);
	if (encoded === "." || encoded === "..") return encoded.replace(/\./g, "%002E");
	return encoded;
};
var serializeVariant = (variant) => {
	if (variant === void 0) return DEFAULT_VARIANT_ID;
	if (typeof variant === "string") return encodeSegmentText(variant, SEGMENT_UNSAFE_CHARS);
	return Object.keys(variant).sort().map((field) => `${encodeSegmentText(field, COMPONENT_UNSAFE_CHARS)}=${encodeSegmentText(String(variant[field]), COMPONENT_UNSAFE_CHARS)}`).join("&");
};
var serializeVariantChain = (variant) => {
	if (!Array.isArray(variant)) return [serializeVariant(variant)];
	if (variant.length === 0) return [DEFAULT_VARIANT_ID];
	return variant.map(serializeVariant);
};
var resolveEffectiveVariantId = (requestedVariantIds, isVariantIdDeclared) => {
	for (const requestedVariantId of requestedVariantIds) if (isVariantIdDeclared(requestedVariantId)) return requestedVariantId;
	return isVariantIdDeclared("default") ? DEFAULT_VARIANT_ID : requestedVariantIds[0] ?? "default";
};
var compositeIdMatchesSelector = (compositeId, qualifierTypes, selector, effectiveVariantId) => {
	const segments = compositeId.split("/");
	return qualifierTypes.every((qualifierType, index) => {
		if (qualifierType === "variant") return segments[index] === effectiveVariantId;
		return selector?.item === void 0 || segments[index] === String(selector.item);
	});
};
var isQualifiedDictionaryGroup = (value) => typeof value === "object" && value !== null && "qualifierTypes" in value && Array.isArray(value.qualifierTypes) && "content" in value;
var reconstructQualifiedEntry = (group, compositeId) => {
	const segments = compositeId.split("/");
	const entry = {
		key: group.key,
		content: group.content[compositeId]
	};
	group.qualifierTypes.forEach((qualifierType, index) => {
		if (qualifierType === "variant") entry.variant = segments[index];
		else if (qualifierType === "item") entry.item = Number(segments[index]);
	});
	return entry;
};
var resolveQualifiedDictionary = (dictionaryOrGroup, selector) => {
	if (!isQualifiedDictionaryGroup(dictionaryOrGroup)) return dictionaryOrGroup;
	const { qualifierTypes, content } = dictionaryOrGroup;
	const itemAxisOpen = qualifierTypes.includes("item") && selector?.item === void 0;
	const compositeIds = Object.keys(content);
	const variantIndex = qualifierTypes.indexOf("variant");
	const effectiveVariantId = variantIndex === -1 ? DEFAULT_VARIANT_ID : resolveEffectiveVariantId(serializeVariantChain(selector?.variant), (variantId) => compositeIds.some((compositeId) => compositeId.split("/")[variantIndex] === variantId));
	const matchedEntries = compositeIds.filter((compositeId) => compositeIdMatchesSelector(compositeId, qualifierTypes, selector, effectiveVariantId)).map((compositeId) => reconstructQualifiedEntry(dictionaryOrGroup, compositeId));
	if (itemAxisOpen) return matchedEntries.sort((left, right) => (left.item ?? 0) - (right.item ?? 0));
	return matchedEntries[0] ?? null;
};
var parseDictionarySelector = (localeOrSelector) => {
	if (typeof localeOrSelector === "object" && localeOrSelector !== null) return {
		locale: localeOrSelector.locale,
		selector: localeOrSelector
	};
	return { locale: localeOrSelector };
};
var getDictionarySelectorCacheKey = (selector) => {
	if (!selector) return "";
	return Object.keys(selector).filter((selectorKey) => selectorKey !== "locale").sort().map((selectorKey) => {
		const value = selector[selectorKey];
		return `${selectorKey}:${selectorKey === "variant" ? serializeVariantChain(value).join(",") : String(value)}`;
	}).join("|");
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
var translationPlugin = (locale, fallback) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? fallbackPlugin : {
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
var pluralPlugin = (locale) => fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var selectPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin,
	selectPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var getDictionary = (dictionary, localeOrSelector, plugins) => {
	const { locale, selector } = parseDictionarySelector(localeOrSelector);
	const cacheKey = getDictionaryTransformCacheKey(locale ?? internationalization.defaultLocale, getDictionarySelectorCacheKey(selector), plugins);
	const cached = readTransformCache(dictionary, cacheKey);
	if (cached.hit) return cached.content;
	const appliedPlugins = plugins ?? getBasePlugins(locale);
	const resolved = resolveQualifiedDictionary(dictionary, selector);
	const transformDictionary = (resolvedDictionary) => {
		const props = {
			dictionaryKey: resolvedDictionary.key,
			dictionaryPath: resolvedDictionary.filePath,
			keyPath: [],
			plugins: appliedPlugins,
			nestedDictionaries: resolvedDictionary.nestedDictionaries
		};
		return getContent(resolvedDictionary.content, props, appliedPlugins);
	};
	if (resolved === null) return writeTransformCache(dictionary, cacheKey, null);
	if (Array.isArray(resolved)) return writeTransformCache(dictionary, cacheKey, resolved.map(transformDictionary));
	return writeTransformCache(dictionary, cacheKey, transformDictionary(resolved));
};
var T = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (n, { children: r, ...i }) => {
		let a = (t) => n$1({
			...i,
			value: t,
			children: t
		}), c = a(r);
		if (typeof r != "function") return c;
		let l = (...e) => {
			let t = r(...e);
			return a(t);
		};
		Object.setPrototypeOf(l, Object.getPrototypeOf(c));
		for (let e of Object.getOwnPropertyNames(c)) {
			let t = Object.getOwnPropertyDescriptor(c, e);
			t && Object.defineProperty(l, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(c)) {
			let t = Object.getOwnPropertyDescriptor(c, e);
			t && Object.defineProperty(l, e, t);
		}
		return markRaw(l);
	}
};
var D = fallbackPlugin;
var k = fallbackPlugin;
var A = fallbackPlugin;
var j = /* @__PURE__ */ new Map();
var M = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (j.has(n)) return j.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		pluralPlugin(e ?? internationalization.defaultLocale),
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		selectPlugin,
		T,
		D,
		k,
		A
	];
	return j.set(n, r), r;
};
var n = (n, r) => {
	return getDictionary(n, r, M(typeof r == "object" && r ? r.locale : r));
};
var i = Symbol("intlayer");
var g = (e, t) => t.reduce((e, t) => e?.[t], e);
var _ = (e) => typeof e == "object" && !!e;
var v = (e) => typeof e == "function" || _(e) && ("render" in e || "setup" in e);
var y = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e;
var b = (e) => markRaw(defineComponent({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : v(t) ? h(t) : Array.isArray(t) ? h("span", t) : t;
		};
	}
}));
var x = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return b(() => e.value);
		if (r == null) return n === Symbol.toPrimitive || n === "toString" ? () => "" : void 0;
		let i = r[n];
		return typeof i == "function" ? i.bind(r) : i;
	},
	ownKeys() {
		let t = e.value;
		return typeof t == "object" && t ? Reflect.ownKeys(t) : [];
	},
	getOwnPropertyDescriptor() {
		return {
			enumerable: !0,
			configurable: !0
		};
	}
});
var S = (r, a) => {
	let c = getCurrentInstance() ? inject(i) : void 0, S = isRef(c?.locale) ? c.locale : ref(c?.locale ?? internationalization.defaultLocale), C = computed(() => {
		return {
			selector: void 0,
			locale: a === void 0 ? void 0 : toValue(a)
		};
	}), w = computed(() => C.value.locale ?? S.value), T = shallowRef({});
	watch([
		() => toValue(r),
		() => w.value,
		() => C.value.selector
	], ([t, n$2, r]) => {
		T.value = r ? n(t, {
			...r,
			locale: n$2
		}) : n(t, n$2);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let E = (e) => new Proxy({}, {
		get(t, r, i) {
			let a = computed(() => g(T.value, e));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(t, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return b(() => a.value);
			let o = e.concat(r), s = g(T.value, o);
			if (s === void 0 || _(s) && !v(s)) return E(o);
			if (y(s)) return x(computed(() => g(T.value, o)));
			if (typeof s == "function") {
				let t = g(T.value, e);
				return t != null && !Object.hasOwn(t, r) ? s.bind(t) : (...e) => g(T.value, o)?.(...e);
			}
			let c = computed(() => g(T.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = g(T.value, e);
			return _(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return E([]);
};
function usePerformanceMeasure(name) {
	onBeforeMount(() => {
		if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	});
	onMounted(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch (e) {}
		}
	});
}
var WhatWeMeasure_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "WhatWeMeasure",
	setup(__props, { expose: __expose }) {
		__expose();
		usePerformanceMeasure("WhatWeMeasure");
		const { b: title, a: metrics } = S(what_we_measure_default);
		const __returned__ = {
			title,
			metrics
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _hoisted_1 = { class: "mt-12 mx-auto max-w-3xl" };
var _hoisted_2 = { class: "mb-4 text-2xl font-bold text-foreground" };
var _hoisted_3 = { class: "space-y-4" };
var _hoisted_4 = { class: "block text-sm font-bold text-primary" };
var _hoisted_5 = { class: "block mt-1 text-sm text-muted-foreground" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("section", _hoisted_1, [createElementVNode("h2", _hoisted_2, toDisplayString($setup.title), 1), createElementVNode("ul", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.metrics, (m) => {
		return openBlock(), createElementBlock("li", {
			key: m.metric,
			class: "rounded-md border border-border p-4"
		}, [createElementVNode("span", _hoisted_4, toDisplayString(m.metric), 1), createElementVNode("span", _hoisted_5, toDisplayString(m.desc), 1)]);
	}), 128))])]);
}
var WhatWeMeasure_default = _plugin_vue_export_helper_default(WhatWeMeasure_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/about/WhatWeMeasure.vue"]]);
export { WhatWeMeasure_default as default };
