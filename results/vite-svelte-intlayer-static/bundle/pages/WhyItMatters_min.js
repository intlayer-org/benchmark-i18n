import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t, onMount as n } from "svelte";
import { derived as r, writable as i } from "svelte/store";
var a = {
	key: "why-it-matters",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"title\":\"Why These Metrics Matter\",\"bundleSize\":{\"title\":\"Bundle Size\",\"description\":\"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\"},\"renderingHydration\":{\"title\":\"Rendering & Hydration\",\"description\":\"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\"},\"dynamicLoading\":{\"title\":\"Dynamic Loading\",\"description\":\"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\"}},\"fr\":{\"title\":\"Pourquoi ces mesures sont importantes\",\"bundleSize\":{\"title\":\"Taille du Bundle\",\"description\":\"Le bundle est l'ensemble des données envoyées à chaque utilisateur à travers le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur les connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.\"},\"renderingHydration\":{\"title\":\"Rendu et Hydratation\",\"description\":\"La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arborescence. Lors de l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).\"},\"dynamicLoading\":{\"title\":\"Chargement Dynamique\",\"description\":\"Le chargement de toutes les traductions à l'avance surcharge la charge utile initiale. Le chargement dynamique (lazy loading) répartit les traductions par itinéraire ou par espace de noms, n'envoyant que ce dont la page actuelle a besoin. Cependant, le chargement différé introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de la mise en cache. Il est essentiel de mesurer les deux stratégies.\"}},\"es\":{\"title\":\"Por qué importan estas métricas\",\"bundleSize\":{\"title\":\"Tamaño del bundle\",\"description\":\"El bundle son los datos que se envían a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código de tiempo de ejecución, además de los propios archivos de traducción.\"},\"renderingHydration\":{\"title\":\"Renderizado e Hidratación\",\"description\":\"Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede activar re-renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la vinculación de objetos de traducción masivos añaden latencia antes de que la página se vuelva interactiva, lo que afecta directamente al tiempo de interacción (TTI).\"},\"dynamicLoading\":{\"title\":\"Carga dinámica\",\"description\":\"Cargar todas las traducciones por adelantado sobrecarga la carga útil inicial. La carga dinámica (perezosa) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga perezosa introduce sus propias compensaciones: solicitudes en cascada, destellos de contenido no traducido y complejidad de almacenamiento en caché. Medir ambas estrategias es esencial.\"}},\"de\":{\"title\":\"Warum diese Metriken wichtig sind\",\"bundleSize\":{\"title\":\"Bundle-Größe\",\"description\":\"Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten – insbesondere bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von einigen Kilobytes bis hin zu Zehntausenden von Kilobytes an Laufzeitcode, plus die Übersetzungsdateien selbst.\"},\"renderingHydration\":{\"title\":\"Rendering & Hydratation\",\"description\":\"Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratation fügt das Parsen und Anhängen massiver Übersetzungsobjekte Latenz hinzu, bevor die Seite interaktiv wird – was sich direkt auf die Time to Interactive (TTI) auswirkt.\"},\"dynamicLoading\":{\"title\":\"Dynamisches Laden\",\"description\":\"Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Nutzlast. Dynamisches (Lazy) Loading teilt Übersetzungen nach Route oder Namensraum auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Wasserfall-Anfragen, Aufblitzen nicht übersetzter Inhalte und Cache-Komplexität. Die Messung beider Strategien ist unerlässlich.\"}},\"it\":{\"title\":\"Perché queste metriche sono importanti\",\"bundleSize\":{\"title\":\"Dimensioni del bundle\",\"description\":\"Il bundle è l'insieme dei dati inviati a ogni utente in tutto il mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.\"},\"renderingHydration\":{\"title\":\"Rendering e idratazione\",\"description\":\"Il collegamento di un dizionario JSON di grandi dimensioni a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può innescare nuovi rendering nell'intero albero. Durante l'idratazione SSR, l'analisi e il collegamento di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, con un impatto diretto sul Time to Interactive (TTI).\"},\"dynamicLoading\":{\"title\":\"Caricamento dinamico\",\"description\":\"Il caricamento anticipato di tutte le traduzioni sovraccarica il payload iniziale. Il caricamento dinamico (lazy) suddivide le traduzioni per percorso o spazio dei nomi, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il caricamento pigro introduce i suoi compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della memorizzazione nella cache. Misurare entrambe le strategie è essenziale.\"}},\"pt\":{\"title\":\"Por que Essas Métricas Importam\",\"bundleSize\":{\"title\":\"Tamanho do bundle\",\"description\":\"O bundle são os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução.\"},\"renderingHydration\":{\"title\":\"Renderização e Hidratação\",\"description\":\"Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).\"},\"dynamicLoading\":{\"title\":\"Carregamento Dinâmico\",\"description\":\"Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lento) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento lento introduz suas próprias compensações: solicitações em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.\"}},\"zh\":{\"title\":\"为什么这些指标很重要\",\"bundleSize\":{\"title\":\"捆绑包大小\",\"description\":\"捆绑包是发送给全球每个用户的数据。更大的捆绑包意味着更长的下载时间——尤其是在许多地区常见的慢速 3G 连接上。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。\"},\"renderingHydration\":{\"title\":\"渲染和注水（Hydration）\",\"description\":\"将大型 JSON 词典连接到每个组件会创建一个隐藏依赖项：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加海量翻译对象会增加页面变得可交互之前的延迟——直接影响可交互时间 (TTI)。\"},\"dynamicLoading\":{\"title\":\"动态加载\",\"description\":\"预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。但是，延迟加载也有其权衡：瀑布请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。\"}},\"ja\":{\"title\":\"これらの指標が重要な理由\",\"bundleSize\":{\"title\":\"バンドルサイズ\",\"description\":\"バンドルは、世界中のすべてのユーザーに送信されるデータです。バンドルが大きくなると、特に多くの地域で一般的な低速な3G接続では、ダウンロード時間が長くなります。i18nライブラリはその重量が劇的に異なり、数キロバイトから数十キロバイトのランタイムコードに加えて、翻訳ファイル自体が含まれます。\"},\"renderingHydration\":{\"title\":\"レンダリングとハイドレーション\",\"description\":\"大きなJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が作成されます。翻訳コンテキストの変更は、ツリー全体で再レンダリングをトリガーする可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになる前にレイテンシを追加し、Time to Interactive（TTI）に直接影響します。\"},\"dynamicLoading\":{\"title\":\"動的ロード\",\"description\":\"すべての翻訳を事前にロードすると、初期ペイロードが過負荷になります。動的（遅延）ロードは、ルートや名前空間ごとに翻訳を分割し、現在のページが必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなど、独自のトレードオフが伴います。両方の戦略を測定することが不可欠です。\"}},\"ko\":{\"title\":\"이러한 지표가 중요한 이유\",\"bundleSize\":{\"title\":\"번들 크기\",\"description\":\"번들은 전 세계 모든 사용자에게 전송되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 발생하는 느린 3G 연결에서는 더욱 그렇습니다. i18n 라이브러리는 런타임 코드 몇 킬로바이트에서 수십 킬로바이트에 이르기까지 무게가 매우 다양하며 번역 파일 자체도 포함됩니다.\"},\"renderingHydration\":{\"title\":\"렌더링 및 하이드레이션\",\"description\":\"대규모 JSON 사전을 모든 구성 요소에 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트가 변경되면 전체 트리에서 재렌더링이 발생할 수 있습니다. SSR 하이드레이션 중에 대규모 번역 개체를 구문 분석하고 첨부하면 페이지가 대화형이 되기 전에 대기 시간이 추가되어 TTI(Time to Interactive)에 직접적인 영향을 미칩니다.\"},\"dynamicLoading\":{\"title\":\"동적 로딩\",\"description\":\"모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 내용만 전송합니다. 그러나 지연 로딩은 폭포수 요청, 번역되지 않은 콘텐츠의 플래시, 캐시 복잡성과 같은 트레이드오프를 수반합니다. 두 전략을 모두 측정하는 것이 필수적입니다.\"}},\"ru\":{\"title\":\"Почему эти показатели важны\",\"bundleSize\":{\"title\":\"Размер бандла\",\"description\":\"Бандл — это данные, отправляемые каждому пользователю по всему миру. Больший размер бандла означает более длительное время загрузки, особенно при медленном 3G-соединении, распространенном во многих регионах. Библиотеки i18n сильно различаются по своему весу: от нескольких килобайт до десятков килобайт исполняемого кода, плюс сами файлы переводов.\"},\"renderingHydration\":{\"title\":\"Рендеринг и гидратация\",\"description\":\"Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода увеличивает задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI).\"},\"dynamicLoading\":{\"title\":\"Динамическая загрузка\",\"description\":\"Предварительная загрузка всех переводов перегружает начальный объем данных. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка влечет за собой свои компромиссы: каскадные запросы, вспышки непереведенного контента и сложность кэширования. Важно измерять обе стратегии.\"}}}}"),
	localIds: ["why-it-matters::local::src/components/pages/home/WhyItMatters.content.ts"]
}, o = Symbol("intlayer"), s = () => t(o), c = {
	locales: [
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
	requiredLocales: [
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
	strictMode: "inclusive",
	defaultLocale: "en"
}, l = c?.defaultLocale, u = (() => {
	let { subscribe: e, set: t, update: n } = i({ locale: l });
	return {
		subscribe: e,
		setLocale: (e) => n((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => r({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: l })
	};
})(), d = "translation", f = "object", p = "array", m = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => m(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => m(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: p,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) Object.defineProperty(n, r, {
		enumerable: !0,
		configurable: !0,
		get: function() {
			let n = {
				...t,
				children: e[r],
				keyPath: [...t.keyPath, {
					type: f,
					key: r
				}]
			}, i = m(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, h = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, g = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (h(e) && h(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : g(e[r], t[r]));
		return n;
	}
	return e;
}, _ = (e, t, n) => {
	let r = (t) => e[t], i = /* @__PURE__ */ new Set(), a = [], o = (e) => {
		e && !i.has(e) && (i.add(e), a.push(e));
	};
	o(t), t.includes("-") && o(t.split("-")[0]), o(n), n?.includes("-") && o(n.split("-")[0]);
	let s = [];
	for (let e of a) {
		let t = r(e);
		if (t !== void 0) {
			if (typeof t == "string") {
				if (s.length === 0) return t;
				continue;
			}
			s.push(t);
		}
	}
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => g(e, t));
}, v = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, b = (e, t) => v ? y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: d,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return _(o, e, t);
	}
}, x = y, S = y, C = y, w = y, T = (e) => y, E = y, D = (e, t = !0) => [
	b(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
	x,
	S,
	C,
	T(e ?? c.defaultLocale),
	E,
	w
], O = (e, t, n = []) => m(e, {
	...t,
	plugins: n
}), k = (e, t, n = D(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return O(e.content, r, n);
};
function A(t, n) {
	let r = e.prop(n, "Renderer", 8, void 0), i = e.prop(n, "rendererProps", 24, () => ({})), a = e.prop(n, "value", 8, void 0);
	var o = e.comment(), s = e.first_child(o), c = (t) => {
		var n = e.comment(), o = e.first_child(n);
		e.element(o, r, !1, (t, n) => {
			e.attribute_effect(t, () => ({ ...i() }));
			var r = e.text();
			e.template_effect(() => e.set_text(r, a())), e.append(n, r);
		}), e.append(t, n);
	}, l = (t) => {
		r()(t, e.spread_props(i, {
			children: (t, n) => {
				e.next();
				var r = e.text();
				e.template_effect(() => e.set_text(r, a())), e.append(t, r);
			},
			$$slots: { default: !0 }
		}));
	}, u = (t) => {
		var n = e.text();
		e.template_effect(() => e.set_text(n, a())), e.append(t, n);
	};
	e.if(s, (e) => {
		typeof r() == "string" ? e(c) : typeof r() == "function" ? e(l, 1) : e(u, -1);
	}), e.append(t, o);
}
var j = (e) => {
	let t = !!A.prototype?.$destroy, n;
	return n = t ? class extends A {
		constructor(t) {
			super({
				...t,
				props: {
					...t.props,
					Renderer: e.component,
					rendererProps: e.props,
					value: e.value
				}
			});
		}
	} : (t) => A(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "toString", {
		value: () => e.value?.toString() ?? "",
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), n;
}, M = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false" ? y : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => j({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, N = M, P = y, F = y, I = y, L = /* @__PURE__ */ new Map(), R = (e, t = !0) => {
	let n = `${e ?? c.defaultLocale}_${t}`;
	if (L.has(n)) return L.get(n);
	let r = [
		b(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
		x,
		S,
		T(e ?? c.defaultLocale),
		E,
		w,
		M,
		N,
		P,
		F,
		I
	];
	return L.set(n, r), r;
}, z = (e, t) => k(e, t, R(t)), B = (e, t) => {
	let n = s();
	return r([u], ([r]) => z(e, t ?? n?.locale ?? r.locale));
};
function V(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), n(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var H = e.from_html("<section class=\"mb-16\"><h2 class=\"mb-6 text-2xl font-bold text-foreground\"> </h2> <div class=\"grid gap-6 md:grid-cols-3\"><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div> <div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div> <div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div></div></section>");
function U(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(s, "$content", i), [i, o] = e.setup_stores();
	V("WhyItMatters");
	let s = B(a);
	e.init();
	var c = H(), l = e.child(c), u = e.child(l, !0);
	e.reset(l);
	var d = e.sibling(l, 2), f = e.child(d), p = e.child(f), m = e.child(p, !0);
	e.reset(p);
	var h = e.sibling(p, 2), g = e.child(h, !0);
	e.reset(h), e.reset(f);
	var _ = e.sibling(f, 2), v = e.child(_), y = e.child(v, !0);
	e.reset(v);
	var b = e.sibling(v, 2), x = e.child(b, !0);
	e.reset(b), e.reset(_);
	var S = e.sibling(_, 2), C = e.child(S), w = e.child(C, !0);
	e.reset(C);
	var T = e.sibling(C, 2), E = e.child(T, !0);
	e.reset(T), e.reset(S), e.reset(d), e.reset(c), e.template_effect(() => {
		e.set_text(u, r().title), e.set_text(m, r().bundleSize.title), e.set_text(g, r().bundleSize.description), e.set_text(y, r().renderingHydration.title), e.set_text(x, r().renderingHydration.description), e.set_text(w, r().dynamicLoading.title), e.set_text(E, r().dynamicLoading.description);
	}), e.append(t, c), e.pop(), o();
}
export { U as default };
