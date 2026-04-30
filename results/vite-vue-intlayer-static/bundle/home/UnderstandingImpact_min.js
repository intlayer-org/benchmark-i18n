import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, createTextVNode as i, defineComponent as a, getCurrentInstance as o, h as s, inject as c, isRef as l, markRaw as u, onBeforeMount as d, onMounted as f, openBlock as p, ref as m, renderList as h, shallowRef as g, toDisplayString as _, toValue as v, watch as y } from "vue";
var b = {
	key: "understanding-impact",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"d\":\"Understanding the Impact\",\"c\":{\"c\":\"Why a single large JSON can hurt performance\",\"a\":\"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\",\"b\":[\"The JSON must be parsed on every page load — blocking the main thread.\",\"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\",\"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\"]},\"b\":{\"c\":\"The trade-offs of dynamic loading\",\"a\":\"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\",\"b\":[{\"label\":\"Waterfall requests:\",\"text\":\"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\"},{\"label\":\"Flash of untranslated content (FOUC):\",\"text\":\"users may briefly see translation keys or a fallback language before the chunk arrives.\"},{\"label\":\"Cache invalidation:\",\"text\":\"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\"}]},\"a\":{\"b\":\"What this benchmark measures\",\"a\":\"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\"}},\"fr\":{\"d\":\"Comprendre l'impact\",\"c\":{\"c\":\"Pourquoi un seul JSON volumineux peut nuire aux performances\",\"a\":\"De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :\",\"b\":[\"Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.\",\"Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.\",\"Pendant le rendu côté serveur, le dictionnaire complet est sérialisé dans la charge utile HTML, augmentant la taille du document qui doit être téléchargé et hydraté.\"]},\"b\":{\"c\":\"Les compromis du chargement dynamique\",\"a\":\"La répartition des traductions en morceaux par itinéraire ou par espace de noms peut réduire considérablement la charge utile initiale. Mais cela introduit de nouveaux défis :\",\"b\":[{\"label\":\"Requêtes en cascade :\",\"text\":\"l'application doit d'abord charger, déterminer la langue, puis récupérer le bon morceau — ajoutant des allers-retours réseau.\"},{\"label\":\"Flash de contenu non traduit (FOUC) :\",\"text\":\"les utilisateurs peuvent voir brièvement des clés de traduction ou une langue de repli avant l'arrivée du morceau.\"},{\"label\":\"Invalidation du cache :\",\"text\":\"la mise à jour des traductions nécessite des stratégies de cassage de cache pour garantir que les utilisateurs reçoivent du contenu frais sans re-télécharger les morceaux inchangés.\"}]},\"a\":{\"b\":\"Ce que ce benchmark mesure\",\"a\":\"Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.\"}},\"es\":{\"d\":\"Entendiendo el impacto\",\"c\":{\"c\":\"Por qué un solo JSON grande puede perjudicar el rendimiento\",\"a\":\"Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\",\"b\":[\"El JSON debe ser analizado en cada carga de página — bloqueando el hilo principal.\",\"Las arquitecturas basadas en el contexto pueden causar re-renderizaciones en cascada cuando cambia el idioma, porque se notifica a cada consumidor incluso si sus claves específicas no han cambiado.\",\"Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload de HTML, aumentando el tamaño del documento que debe ser descargado e hidratado.\"]},\"b\":{\"c\":\"Los inconvenientes de la carga dinámica\",\"a\":\"Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:\",\"b\":[{\"label\":\"Solicitudes en cascada:\",\"text\":\"la aplicación primero debe cargar, determinar el idioma y luego buscar el fragmento correcto, lo que añade viajes de ida y vuelta a la red.\"},{\"label\":\"Destello de contenido no traducido (FOUC):\",\"text\":\"los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.\"},{\"label\":\"Invalidación de la caché:\",\"text\":\"actualizar las traducciones requiere estrategias de eliminación de caché para asegurar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos sin cambios.\"}]},\"a\":{\"b\":\"Qué mide este benchmark\",\"a\":\"Esta aplicación de prueba proporciona un entorno controlado (10 páginas con contenido realista) para comparar las bibliotecas i18n en tres ejes: el peso que añaden a su paquete de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido, y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\"}},\"de\":{\"d\":\"Die Auswirkungen verstehen\",\"c\":{\"c\":\"Warum ein einziges großes JSON die Leistung beeinträchtigen kann\",\"a\":\"Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:\",\"b\":[\"Das JSON muss bei jedem Laden der Seite analysiert werden – was den Haupt-Thread blockiert.\",\"Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, selbst wenn sich seine spezifischen Schlüssel nicht geändert haben.\",\"Während des serverseitigen Renderings wird das vollständige Wörterbuch in die HTML-Payload serialisiert, wodurch die Größe des Dokuments erhöht wird, das heruntergeladen und hydriert werden muss.\"]},\"b\":{\"c\":\"Die Kompromisse des dynamischen Ladens\",\"a\":\"Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Payload drastisch reduzieren. Aber es bringt neue Herausforderungen mit sich:\",\"b\":[{\"label\":\"Waterfall-Anfragen:\",\"text\":\"Die App muss zuerst geladen werden, das Gebietsschema bestimmen und dann den richtigen Chunk abrufen – was Netzwerk-Roundtrips hinzufügt.\"},{\"label\":\"Aufblitzen von nicht übersetztem Inhalt (FOUC):\",\"text\":\"Benutzer sehen möglicherweise kurz Übersetzungsschlüssel oder eine Ersatzsprache, bevor der Chunk eintrifft.\"},{\"label\":\"Cache-Invalidierung:\",\"text\":\"Das Aktualisieren von Übersetzungen erfordert Cache-Busting-Strategien, um sicherzustellen, dass Benutzer neue Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.\"}]},\"a\":{\"b\":\"Was dieser Benchmark misst\",\"a\":\"Diese Test-App bietet eine kontrollierte Umgebung – 10 Seiten mit realistischem Inhalt –, um i18n-Bibliotheken über drei Achsen hinweg zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.\"}},\"it\":{\"d\":\"Capire l'impatto\",\"c\":{\"c\":\"Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\",\"a\":\"Molte librerie i18n memorizzano le traduzioni in un singolo oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:\",\"b\":[\"Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale.\",\"Le architetture basate sul contesto possono causare re-render a cascata quando la localizzazione cambia, perché ogni consumer viene notificato anche se le sue chiavi specifiche non sono cambiate.\",\"Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.\"]},\"b\":{\"c\":\"I compromessi del caricamento dinamico\",\"a\":\"Dividere le traduzioni in blocchi per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\",\"b\":[{\"label\":\"Richieste a cascata:\",\"text\":\"l'app deve prima caricarsi, determinare la localizzazione, quindi recuperare il blocco giusto — aggiungendo round-trip di rete.\"},{\"label\":\"Flash di contenuti non tradotti (FOUC):\",\"text\":\"gli utenti potrebbero vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il blocco.\"},{\"label\":\"Invalidazione della cache:\",\"text\":\"l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza scaricare nuovamente blocchi invariati.\"}]},\"a\":{\"b\":\"Cosa misura questo benchmark\",\"a\":\"Questa app di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo speso per l'analisi e il rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente comparabili.\"}},\"pt\":{\"d\":\"Compreendendo o Impacto\",\"c\":{\"c\":\"Por que um único JSON grande pode prejudicar o desempenho\",\"a\":\"Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:\",\"b\":[\"O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.\",\"Arquiteturas baseadas em contexto podem causar re-renderizações em cascata quando o local muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.\",\"Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.\"]},\"b\":{\"c\":\"As compensações do carregamento dinâmico\",\"a\":\"Dividir as traduções em pedaços por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:\",\"b\":[{\"label\":\"Solicitações em cascata:\",\"text\":\"o aplicativo deve primeiro carregar, determinar o local e, em seguida, buscar o pedaço certo — adicionando round-trips de rede.\"},{\"label\":\"Flash de conteúdo não traduzido (FOUC):\",\"text\":\"os usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes que o pedaço chegue.\"},{\"label\":\"Invalidação de cache:\",\"text\":\"a atualização das traduções requer estratégias de cache-busting para garantir que os usuários obtenham conteúdo novo sem baixar novamente pedaços inalterados.\"}]},\"a\":{\"b\":\"O que este benchmark mede\",\"a\":\"Este aplicativo de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando o conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento preguiçoso. Cada biblioteca é integrada ao mesmo aplicativo para que os resultados sejam diretamente comparáveis.\"}},\"zh\":{\"d\":\"理解影响\",\"c\":{\"c\":\"为什么单个大型 JSON 会损害性能\",\"a\":\"许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会持有对整个字典的引用。这意味着：\",\"b\":[\"JSON 必须在每次页面加载时进行解析——阻塞主线程。\",\"基于上下文的架构可能会在区域设置更改时引起级联重新渲染，因为每个使用者都会收到通知，即使他们的特定键没有更改。\",\"在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和水合的文件大小。\"]},\"b\":{\"c\":\"动态加载的权衡\",\"a\":\"将翻译拆分为每个路由或每个命名空间的块可以显着减少初始负载。但它引入了新的挑战：\",\"b\":[{\"label\":\"瀑布流请求：\",\"text\":\"应用程序必须首先加载，确定区域设置，然后获取正确的块——增加了网络往返。\"},{\"label\":\"未翻译内容的闪烁 (FOUC)：\",\"text\":\"在块到达之前，用户可能会短暂地看到翻译键或回退语言。\"},{\"label\":\"缓存失效：\",\"text\":\"更新翻译需要缓存清除策略，以确保用户获得新内容，而无需重新下载未更改的块。\"}]},\"a\":{\"b\":\"此基准测试衡量的指标\",\"a\":\"这个测试应用程序提供了一个受控环境——包含 10 个具有真实内容的页面——从三个维度比较 i18n 库：它们为您的 JavaScript 捆绑包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用程序中，因此结果具有直接可比性。\"}},\"ja\":{\"d\":\"影響を理解する\",\"c\":{\"c\":\"単一の大きなJSONがパフォーマンスを低下させる理由\",\"a\":\"多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい（数千のキー）場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持します。これは以下を意味します。\",\"b\":[\"ページがロードされるたびにJSONを解析する必要があり、メインスレッドをブロックします。\",\"コンテキストベースのアーキテクチャでは、ロケールが変更されると連鎖的な再レンダリングが発生する可能性があります。これは、特定のキーが変更されていなくても、すべてのコンシューマーに通知されるためです。\",\"サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。\"]},\"b\":{\"c\":\"ダイナミックローディングのトレードオフ\",\"a\":\"翻訳をルートごとまたはネームスペースごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます。\",\"b\":[{\"label\":\"ウォーターフォールリクエスト：\",\"text\":\"アプリが最初にロードされ、ロケールを決定してから、適切なチャンクを取得する必要があり、ネットワークのラウンドトリップが増加します。\"},{\"label\":\"翻訳されていないコンテンツのフラッシュ (FOUC)：\",\"text\":\"チャンクが到着する前に、ユーザーに翻訳キーやフォールバック言語が一時的に表示されることがあります。\"},{\"label\":\"キャッシュの無効化：\",\"text\":\"翻訳を更新するには、変更されていないチャンクを再ダウンロードせずにユーザーが最新のコンテンツを確実に取得できるようにするための、キャッシュバスティング戦略が必要です。\"}]},\"a\":{\"b\":\"このベンチマークが測定するもの\",\"a\":\"このテストアプリは、10ページの現実的なコンテンツを含む制御された環境を提供し、3つの軸でi18nライブラリを比較します。JavaScriptバンドルに追加される重量、翻訳されたコンテンツの解析とレンダリングに費やされる時間、そしてコード分割と遅延ロード戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。\"}},\"ko\":{\"d\":\"영향 이해하기\",\"c\":{\"c\":\"단일 대형 JSON이 성능을 저해할 수 있는 이유\",\"a\":\"많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 개체에 번역을 저장합니다. 이 개체가 크면(수천 개의 키) 번역을 사용하는 모든 구성 요소가 전체 사전에 대한 참조를 보유하게 됩니다. 이것은 다음을 의미합니다.\",\"b\":[\"페이지를 로드할 때마다 JSON을 구문 분석해야 하므로 메인 스레드가 차단됩니다.\",\"컨텍스트 기반 아키텍처는 로캘이 변경될 때 계단식 다시 렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않더라도 모든 소비자에게 알림이 가기 때문입니다.\",\"서버 측 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어 다운로드 및 하이드레이션해야 하는 문서 크기가 커집니다.\"]},\"b\":{\"c\":\"동적 로딩의 트레이드오프\",\"a\":\"번역을 경로별 또는 네임스페이스별 청크로 나누면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다.\",\"b\":[{\"label\":\"워터폴 요청:\",\"text\":\"앱이 먼저 로드되어 로캘을 확인한 다음 올바른 청크를 가져와야 하므로 네트워크 왕복이 추가됩니다.\"},{\"label\":\"번역되지 않은 콘텐츠의 플래시(FOUC):\",\"text\":\"청크가 도착하기 전에 사용자가 번역 키나 대체 언어를 잠시 볼 수 있습니다.\"},{\"label\":\"캐시 무효화:\",\"text\":\"번역을 업데이트하려면 사용자가 변경되지 않은 청크를 다시 다운로드하지 않고 새로운 콘텐츠를 받을 수 있도록 캐시 무효화 전략이 필요합니다.\"}]},\"a\":{\"b\":\"이 벤치마크가 측정하는 항목\",\"a\":\"이 테스트 앱은 현실적인 콘텐츠가 포함된 10페이지의 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다. JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 구문 분석하고 렌더링하는 데 소요되는 시간, 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접 비교 가능합니다.\"}},\"ru\":{\"d\":\"Понимание воздействия\",\"c\":{\"c\":\"Почему один большой JSON может снизить производительность\",\"a\":\"Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект велик (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\",\"b\":[\"JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.\",\"Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.\",\"При серверном рендеринге весь словарь сериализуется в полезную нагрузку HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать.\"]},\"b\":{\"c\":\"Компромиссы динамической загрузки\",\"a\":\"Разделение переводов на фрагменты по маршрутам или пространствам имен может значительно сократить начальную нагрузку. Но это создает новые проблемы:\",\"b\":[{\"label\":\"Каскадные запросы:\",\"text\":\"приложение должно сначала загрузиться, определить локаль, а затем получить нужный фрагмент, что добавляет сетевые задержки.\"},{\"label\":\"Мерцание непереведенного контента (FOUC):\",\"text\":\"пользователи могут кратковременно видеть ключи перевода или резервный язык до того, как фрагмент будет загружен.\"},{\"label\":\"Инвалидация кэша:\",\"text\":\"обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных фрагментов.\"}]},\"a\":{\"b\":\"Что измеряет этот бенчмарк\",\"a\":\"Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем направлениям: вес, который они добавляют в ваш бандл JavaScript, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сравнимы.\"}}}}")
}, x = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = m(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	return Object.setPrototypeOf(o, String.prototype), Object.assign(o, {
		render: a,
		toString: () => String(r.value ?? ""),
		valueOf: () => r.value,
		[Symbol.toPrimitive]: () => r.value,
		toJSON: () => r.value,
		get raw() {
			return r.value;
		},
		set raw(e) {
			r.value = e;
		},
		get value() {
			return r.value;
		},
		use(e) {
			return x({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), u(o);
}, S = "translation", C = "object", ee = "array", w = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => w(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => w(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ee,
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
					type: C,
					key: r
				}]
			}, i = w(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, T = {
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
}, E = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, D = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (E(e) && E(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : D(e[r], t[r]));
		return n;
	}
	return e;
}, O = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => D(e, t));
}, k = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, A = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? k : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: S,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return O(o, e, t);
	}
}, j = k, M = k, N = k, P = k, F = (e) => k, I = k, L = (e, t = !0) => [
	A(e ?? T.defaultLocale, t ? T.defaultLocale : void 0),
	j,
	M,
	N,
	F(e ?? T.defaultLocale),
	I,
	P
], R = (e, t, n = []) => w(e, {
	...t,
	plugins: n
}), z = (e, t, n = L(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return R(e.content, r, n);
}, B = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => x({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => r(t(...e));
		Object.setPrototypeOf(a, Object.getPrototypeOf(i));
		for (let e of Object.getOwnPropertyNames(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		return u(a);
	}
}, V = k, H = k, U = k, W = /* @__PURE__ */ new Map(), G = (e, t = !0) => {
	let n = `${e ?? T.defaultLocale}_${t}`;
	if (W.has(n)) return W.get(n);
	let r = [
		A(e ?? T.defaultLocale, t ? T.defaultLocale : void 0),
		j,
		M,
		F(e ?? T.defaultLocale),
		I,
		P,
		B,
		V,
		H,
		U
	];
	return W.set(n, r), r;
}, K = (e, t) => z(e, t, G(t)), q = Symbol("intlayer"), J = (e, t) => t.reduce((e, t) => e?.[t], e), Y = (e) => typeof e == "object" && !!e, X = (e) => typeof e == "function" || Y(e) && ("render" in e || "setup" in e), Z = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Q = (e) => u(a({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : X(t) ? s(t) : Array.isArray(t) ? s("span", t) : t;
		};
	}
})), te = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Q(() => e.value);
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
}), ne = (e, n) => {
	let r = o() ? c(q) : void 0, i = l(r?.locale) ? r.locale : m(r?.locale ?? T.defaultLocale), a = t(() => (n === void 0 ? void 0 : v(n)) ?? i.value), s = g({});
	y([() => v(e), () => a.value], ([e, t]) => {
		s.value = K(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => J(s.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Q(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), c = J(s.value, o);
			if (c === void 0 || Y(c) && !X(c)) return u(o);
			if (Z(c)) return te(t(() => J(s.value, o)));
			let l = t(() => J(s.value, o));
			return new Proxy(l, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = J(s.value, e);
			return Y(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return u([]);
};
function re(e) {
	d(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), f(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var ie = a({
	__name: "UnderstandingImpact",
	setup(e, { expose: t }) {
		t(), re("UnderstandingImpact");
		let { d: n, c: r, b: i, a } = ne(b), o = {
			title: n,
			largeJson: r,
			dynamicLoading: i,
			benchmarkMeasures: a
		};
		return Object.defineProperty(o, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), o;
	}
}), ae = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, oe = { class: "mb-16 mx-auto max-w-3xl space-y-6" }, se = { class: "text-2xl font-bold text-foreground" }, ce = { class: "rounded-lg border border-border bg-card p-6" }, le = { class: "mb-2 text-lg font-semibold text-foreground" }, ue = { class: "text-sm text-muted-foreground" }, de = { class: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5" }, fe = { class: "rounded-lg border border-border bg-card p-6" }, pe = { class: "mb-2 text-lg font-semibold text-foreground" }, $ = { class: "text-sm text-muted-foreground" }, me = { class: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5" }, he = { class: "text-foreground" }, ge = { class: "rounded-lg border border-border bg-card p-6" }, _e = { class: "mb-2 text-lg font-semibold text-foreground" }, ve = { class: "text-sm text-muted-foreground" };
function ye(t, a, o, s, c, l) {
	return p(), n("section", oe, [
		r("h2", se, _(s.title), 1),
		r("div", ce, [
			r("h3", le, _(s.largeJson.title), 1),
			r("p", ue, _(s.largeJson.description), 1),
			r("ul", de, [(p(!0), n(e, null, h(s.largeJson.points, (e, t) => (p(), n("li", { key: t }, _(e), 1))), 128))])
		]),
		r("div", fe, [
			r("h3", pe, _(s.dynamicLoading.title), 1),
			r("p", $, _(s.dynamicLoading.description), 1),
			r("ul", me, [(p(!0), n(e, null, h(s.dynamicLoading.points, (e, t) => (p(), n("li", { key: t }, [r("strong", he, _(e.label), 1), i(" " + _(e.text), 1)]))), 128))])
		]),
		r("div", ge, [r("h3", _e, _(s.benchmarkMeasures.title), 1), r("p", ve, _(s.benchmarkMeasures.description), 1)])
	]);
}
var be = ae(ie, [["render", ye], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/home/UnderstandingImpact.vue"]]);
export { be as default };
