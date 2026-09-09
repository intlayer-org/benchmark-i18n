import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t, onMount as n } from "svelte";
import { derived as r, writable as i } from "svelte/store";
var a = {
	key: "understanding-impact",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"title\":\"Understanding the Impact\",\"largeJson\":{\"title\":\"Why a single large JSON can hurt performance\",\"description\":\"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\",\"points\":[\"The JSON must be parsed on every page load — blocking the main thread.\",\"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\",\"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\"]},\"dynamicLoading\":{\"title\":\"The trade-offs of dynamic loading\",\"description\":\"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\",\"points\":[{\"label\":\"Waterfall requests:\",\"text\":\"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\"},{\"label\":\"Flash of untranslated content (FOUC):\",\"text\":\"users may briefly see translation keys or a fallback language before the chunk arrives.\"},{\"label\":\"Cache invalidation:\",\"text\":\"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\"}]},\"benchmarkMeasures\":{\"title\":\"What this benchmark measures\",\"description\":\"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\"}},\"fr\":{\"title\":\"Comprendre l'impact\",\"largeJson\":{\"title\":\"Pourquoi un seul JSON volumineux peut nuire aux performances\",\"description\":\"De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :\",\"points\":[\"Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.\",\"Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.\",\"Pendant le rendu côté serveur, le dictionnaire complet est sérialisé dans la charge utile HTML, augmentant la taille du document qui doit être téléchargé et hydraté.\"]},\"dynamicLoading\":{\"title\":\"Les compromis du chargement dynamique\",\"description\":\"La répartition des traductions en morceaux par itinéraire ou par espace de noms peut réduire considérablement la charge utile initiale. Mais cela introduit de nouveaux défis :\",\"points\":[{\"label\":\"Requêtes en cascade :\",\"text\":\"l'application doit d'abord charger, déterminer la langue, puis récupérer le bon morceau — ajoutant des allers-retours réseau.\"},{\"label\":\"Flash de contenu non traduit (FOUC) :\",\"text\":\"les utilisateurs peuvent voir brièvement des clés de traduction ou une langue de repli avant l'arrivée du morceau.\"},{\"label\":\"Invalidation du cache :\",\"text\":\"la mise à jour des traductions nécessite des stratégies de cassage de cache pour garantir que les utilisateurs reçoivent du contenu frais sans re-télécharger les morceaux inchangés.\"}]},\"benchmarkMeasures\":{\"title\":\"Ce que ce benchmark mesure\",\"description\":\"Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.\"}},\"es\":{\"title\":\"Comprender el impacto\",\"largeJson\":{\"title\":\"Por qué un solo JSON grande puede perjudicar el rendimiento\",\"description\":\"Muchas bibliotecas i18n almacenan las traducciones en un solo objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\",\"points\":[\"El JSON debe analizarse en cada carga de página, lo que bloquea el hilo principal.\",\"Las arquitecturas basadas en contexto pueden causar re-renderizados en cascada cuando cambia el idioma, porque se notifica a cada consumidor incluso si sus claves específicas no han cambiado.\",\"Durante el renderizado del lado del servidor, el diccionario completo se serializa en la carga útil de HTML, lo que aumenta el tamaño del documento que debe descargarse e hidratarse.\"]},\"dynamicLoading\":{\"title\":\"Las compensaciones de la carga dinámica\",\"description\":\"Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente la carga útil inicial. Pero introduce nuevos desafíos:\",\"points\":[{\"label\":\"Solicitudes en cascada:\",\"text\":\"la aplicación debe cargarse primero, determinar el idioma y luego buscar el fragmento correcto, lo que añade viajes de ida y vuelta a la red.\"},{\"label\":\"Destello de contenido no traducido (FOUC):\",\"text\":\"los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.\"},{\"label\":\"Invalidación de caché:\",\"text\":\"actualizar las traducciones requiere estrategias de eliminación de caché para garantizar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos sin cambios.\"}]},\"benchmarkMeasures\":{\"title\":\"Qué mide este benchmark\",\"description\":\"Esta aplicación de prueba proporciona un entorno controlado (10 páginas con contenido realista) para comparar las bibliotecas i18n en tres ejes: el peso que agregan a su paquete JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la efectividad de sus estrategias de división de código y carga perezosa. Cada biblioteca está integrada en la misma aplicación para que los resultados sean directamente comparables.\"}},\"de\":{\"title\":\"Den Einfluss verstehen\",\"largeJson\":{\"title\":\"Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann\",\"description\":\"Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen konsumiert, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:\",\"points\":[\"Das JSON muss bei jedem Laden der Seite analysiert werden – das blockiert den Haupt-Thread.\",\"Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich die Sprache ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.\",\"Beim serverseitigen Rendering wird das vollständige Wörterbuch in die HTML-Nutzlast serialisiert, was die Größe des Dokuments erhöht, das heruntergeladen und hydriert werden muss.\"]},\"dynamicLoading\":{\"title\":\"Die Kompromisse des dynamischen Ladens\",\"description\":\"Das Aufteilen von Übersetzungen in Chunks pro Route oder Namensraum kann die anfängliche Nutzlast drastisch reduzieren. Aber es bringt neue Herausforderungen mit sich:\",\"points\":[{\"label\":\"Wasserfall-Anfragen:\",\"text\":\"Die App muss zuerst geladen werden, die Sprache bestimmen und dann den richtigen Chunk abrufen – das führt zu zusätzlichen Netzwerk-Rundreisen.\"},{\"label\":\"Aufblitzen von nicht übersetztem Inhalt (FOUC):\",\"text\":\"Benutzer sehen möglicherweise kurz Übersetzungsschlüssel oder eine Ersatzsprache, bevor der Chunk eintrifft.\"},{\"label\":\"Cache-Invalidierung:\",\"text\":\"Das Aktualisieren von Übersetzungen erfordert Cache-Busting-Strategien, um sicherzustellen, dass Benutzer aktuelle Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.\"}]},\"benchmarkMeasures\":{\"title\":\"Was dieser Benchmark misst\",\"description\":\"Diese Test-App bietet eine kontrollierte Umgebung – 10 Seiten mit realistischem Inhalt –, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit für das Parsen und Rendern übersetzter Inhalte und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.\"}},\"it\":{\"title\":\"Comprendere l'impatto\",\"largeJson\":{\"title\":\"Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\",\"description\":\"Molte librerie i18n memorizzano le traduzioni in un singolo oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che utilizza le traduzioni mantiene un riferimento all'intero dizionario. Ciò significa:\",\"points\":[\"Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.\",\"Le architetture basate sul contesto possono causare rendering a cascata quando la lingua cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.\",\"Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando le dimensioni del documento che deve essere scaricato e idratato.\"]},\"dynamicLoading\":{\"title\":\"I compromessi del caricamento dinamico\",\"description\":\"La suddivisione delle traduzioni in blocchi per percorso o per spazio dei nomi può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\",\"points\":[{\"label\":\"Richieste a cascata:\",\"text\":\"l'app deve prima caricarsi, determinare la lingua, quindi recuperare il blocco giusto, aggiungendo round-trip di rete.\"},{\"label\":\"Flash di contenuti non tradotti (FOUC):\",\"text\":\"gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il blocco.\"},{\"label\":\"Invalidazione della cache:\",\"text\":\"l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza scaricare nuovamente i blocchi invariati.\"}]},\"benchmarkMeasures\":{\"title\":\"Cosa misura questo benchmark\",\"description\":\"Questa app di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al bundle JavaScript, il tempo speso per analizzare e renderizzare i contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente comparabili.\"}},\"pt\":{\"title\":\"Compreendendo o Impacto\",\"largeJson\":{\"title\":\"Por que um único JSON grande pode prejudicar o desempenho\",\"description\":\"Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido por meio do contexto React. Quando esse objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:\",\"points\":[\"O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.\",\"Arquiteturas baseadas em contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.\",\"Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil do HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.\"]},\"dynamicLoading\":{\"title\":\"As compensações do carregamento dinâmico\",\"description\":\"Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas apresenta novos desafios:\",\"points\":[{\"label\":\"Solicitações em cascata:\",\"text\":\"o aplicativo deve primeiro carregar, determinar o idioma e depois buscar a parte correta — adicionando idas e vindas de rede.\"},{\"label\":\"Flash de conteúdo não traduzido (FOUC):\",\"text\":\"os usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes que a parte chegue.\"},{\"label\":\"Invalidação de cache:\",\"text\":\"a atualização de traduções requer estratégias de quebra de cache para garantir que os usuários obtenham conteúdo novo sem baixar novamente as partes inalteradas.\"}]},\"benchmarkMeasures\":{\"title\":\"O que este benchmark mede\",\"description\":\"Este aplicativo de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu pacote JavaScript, o tempo gasto analisando e renderizando o conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada ao mesmo aplicativo para que os resultados sejam diretamente comparáveis.\"}},\"zh\":{\"title\":\"了解其影响\",\"largeJson\":{\"title\":\"为什么单个大型 JSON 会损害性能\",\"description\":\"许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都持有对整个词典的引用。这意味着：\",\"points\":[\"JSON 必须在每次页面加载时进行解析——阻塞主线程。\",\"当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使特定键没有更改，也会通知每个消费者。\",\"在服务器端渲染期间，完整的词典被序列化为 HTML 负载，增加了必须下载和注水的文档大小。\"]},\"dynamicLoading\":{\"title\":\"动态加载的权衡\",\"description\":\"将翻译拆分为每个路由或每个命名空间的块可以显著减少初始负载。但它也带来了新的挑战：\",\"points\":[{\"label\":\"瀑布请求：\",\"text\":\"应用程序必须首先加载，确定语言环境，然后获取正确的块——增加了网络往返。\"},{\"label\":\"未翻译内容的闪烁 (FOUC)：\",\"text\":\"用户可能会在块到达之前短暂看到翻译键或回退语言。\"},{\"label\":\"缓存失效：\",\"text\":\"更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的块。\"}]},\"benchmarkMeasures\":{\"title\":\"此基准测试衡量什么\",\"description\":\"此测试应用程序提供了一个受控环境——包含 10 个具有真实内容的页面——从三个维度比较 i18n 库：它们为 JavaScript 捆绑包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成到同一个应用程序中，因此结果具有直接可比性。\"}},\"ja\":{\"title\":\"影響を理解する\",\"largeJson\":{\"title\":\"単一の大きなJSONがパフォーマンスを低下させる理由\",\"description\":\"多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが巨大な場合（数千のキー）、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持します。これは以下を意味します：\",\"points\":[\"ページをロードするたびにJSONを解析する必要があり、メインスレッドをブロックします。\",\"コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的な再レンダリングが発生する可能性があります。\",\"サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードしてハイドレーションする必要があるドキュメントのサイズが増加します。\"]},\"dynamicLoading\":{\"title\":\"動的ロードのトレードオフ\",\"description\":\"翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、それは新しい課題をもたらします：\",\"points\":[{\"label\":\"ウォーターフォールリクエスト：\",\"text\":\"アプリはまずロードし、ロケールを特定してから、適切なチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。\"},{\"label\":\"翻訳されていないコンテンツのフラッシュ（FOUC）：\",\"text\":\"チャンクが到着する前に、ユーザーは翻訳キーやフォールバック言語を一時的に目にする可能性があります。\"},{\"label\":\"キャッシュの無効化：\",\"text\":\"翻訳の更新には、変更されていないチャンクを再ダウンロードすることなく、ユーザーが最新のコンテンツを確実に取得できるようにするためのキャッシュ無効化戦略が必要です。\"}]},\"benchmarkMeasures\":{\"title\":\"このベンチマークが測定するもの\",\"description\":\"このテストアプリは、10ページの現実的なコンテンツを含む制御された環境を提供し、3つの軸でi18nライブラリを比較します。それは、JavaScriptバンドルに追加される重量、翻訳されたコンテンツの解析とレンダリングに費やされる時間、およびコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果は直接比較可能です。\"}},\"ko\":{\"title\":\"영향 이해하기\",\"largeJson\":{\"title\":\"단일 대형 JSON이 성능을 저하시킬 수 있는 이유\",\"description\":\"많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 크면(수천 개의 키) 번역을 사용하는 모든 구성 요소가 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다.\",\"points\":[\"페이지를 로드할 때마다 JSON을 구문 분석해야 하므로 메인 스레드가 차단됩니다.\",\"컨텍스트 기반 아키텍처는 로캘이 변경될 때 계단식 재렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않더라도 모든 소비자가 알림을 받기 때문입니다.\",\"서버 측 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어 다운로드 및 하이드레이션해야 하는 문서 크기가 커집니다.\"]},\"dynamicLoading\":{\"title\":\"동적 로딩의 트레이드오프\",\"description\":\"번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 다음과 같은 새로운 과제가 발생합니다.\",\"points\":[{\"label\":\"폭포수 요청:\",\"text\":\"앱이 먼저 로드되어 로캘을 결정한 다음 올바른 청크를 가져와야 하므로 네트워크 왕복이 추가됩니다.\"},{\"label\":\"번역되지 않은 콘텐츠의 플래시(FOUC):\",\"text\":\"청크가 도착하기 전에 사용자가 번역 키나 대체 언어를 잠시 볼 수 있습니다.\"},{\"label\":\"캐시 무효화:\",\"text\":\"번역을 업데이트하려면 변경되지 않은 청크를 다시 다운로드하지 않고도 사용자가 최신 콘텐츠를 받을 수 있도록 캐시 무효화 전략이 필요합니다.\"}]},\"benchmarkMeasures\":{\"title\":\"이 벤치마크가 측정하는 항목\",\"description\":\"이 테스트 앱은 10페이지의 현실적인 콘텐츠가 포함된 제어된 환경을 제공하여 세 가지 측면에서 i18n 라이브러리를 비교합니다. JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 구문 분석하고 렌더링하는 데 소요되는 시간, 코드 분할 및 지연 로딩 전략의 효과성입니다. 각 라이브러리는 동일한 앱에 통합되어 있으므로 결과를 직접 비교할 수 있습니다.\"}},\"ru\":{\"title\":\"Понимание влияния\",\"largeJson\":{\"title\":\"Почему один большой JSON может снизить производительность\",\"description\":\"Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект велик (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\",\"points\":[\"JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.\",\"Архитектура на основе контекста может вызывать каскадные повторные рендеринги при изменении локали, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.\",\"При серверном рендеринге весь словарь сериализуется в HTML-код, что увеличивает размер документа, который необходимо загрузить и гидратировать.\"]},\"dynamicLoading\":{\"title\":\"Компромиссы динамической загрузки\",\"description\":\"Разделение переводов на фрагменты по маршрутам или пространствам имен может значительно сократить начальный объем данных. Но это создает новые проблемы:\",\"points\":[{\"label\":\"Каскадные запросы:\",\"text\":\"приложение должно сначала загрузиться, определить локаль, а затем получить нужный фрагмент, что добавляет сетевые задержки.\"},{\"label\":\"Вспышка непереведенного контента (FOUC):\",\"text\":\"пользователи могут ненадолго увидеть ключи перевода или резервный язык до того, как фрагмент будет получен.\"},{\"label\":\"Инвалидация кэша:\",\"text\":\"обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных фрагментов.\"}]},\"benchmarkMeasures\":{\"title\":\"Что измеряет этот бенчмарк\",\"description\":\"Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему JavaScript-бандлу, время, затрачиваемое на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.\"}}}}")
}, o = {
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
}, s = o?.defaultLocale, c = (() => {
	let { subscribe: e, set: t, update: n } = i({ locale: s });
	return {
		subscribe: e,
		setLocale: (e) => n((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => r({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: s })
	};
})(), l = Symbol("intlayer"), u = () => t(l), d = "default", f = /[^A-Za-z0-9._&=-]/g, p = /[^A-Za-z0-9._-]/g, m = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, h = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, m);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, g = (e) => e === void 0 ? d : typeof e == "string" ? h(e, f) : Object.keys(e).sort().map((t) => `${h(t, p)}=${h(String(e[t]), p)}`).join("&"), _ = (e) => Array.isArray(e) ? e.length === 0 ? [d] : e.map(g) : [g(e)], v = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? d : e[0] ?? "default";
}, y = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, b = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, x = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, S = (e, t) => {
	if (!b(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? d : v(_(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => y(e, n, t, s)).map((t) => x(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, C = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, w = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? _(n).join(",") : String(n)}`;
}).join("|") : "", T = "translation", E = "object", D = "array", O = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => O(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => O(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: D,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: E,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = O(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = O(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, k = /* @__PURE__ */ new WeakMap(), A = 0, ee = (e) => {
	if (!e) return "base";
	let t = k.get(e);
	if (t) return t;
	A += 1;
	let n = `p${A}`;
	return k.set(e, n), n;
}, j = 256, M = /* @__PURE__ */ new WeakMap(), N = (e) => typeof e == "object" && !!e, P = (e, t, n) => `${e}_${t}_${ee(n)}`, te = (e, t) => {
	if (!N(e)) return { hit: !1 };
	let n = M.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, F = (e, t, n) => {
	if (!N(e)) return n;
	let r = M.get(e);
	return r || (r = /* @__PURE__ */ new Map(), M.set(e, r)), r.size >= j && r.clear(), r.set(t, n), n;
}, ne = (e, t = !0) => [
	H(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
	U,
	W,
	G,
	J(e ?? o.defaultLocale),
	Y,
	K,
	q
], I = (e, t, n = []) => O(e, {
	...t,
	plugins: n
}), L = (e, t, n) => {
	let { locale: r, selector: i } = C(t), a = P(r ?? o.defaultLocale, w(i), n), s = te(e, a);
	if (s.hit) return s.content;
	let c = n ?? ne(r), l = S(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries
		};
		return I(e.content, t, c);
	};
	return l === null ? F(e, a, null) : Array.isArray(l) ? F(e, a, l.map(u)) : F(e, a, u(l));
}, R = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, z = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (R(e) && R(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : z(e[r], t[r]));
		return n;
	}
	return e;
}, B = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => z(e, t));
}, V = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, H = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? V : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: T,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return B(o, e, t);
	}
}, U = V, re = (e) => V, W = V, G = V, K = V, q = V, J = (e) => V, Y = V;
function X(t, n) {
	e.push(n, !1);
	let r = e.prop(n, "Renderer", 8, void 0), i = e.prop(n, "rendererProps", 24, () => ({})), a = e.prop(n, "value", 8, void 0), o = e.mutable_source(), s = e.mutable_source(!1);
	e.legacy_pre_effect(() => e.deep_read_state(r()), () => {
		typeof r()?.then == "function" ? (e.set(s, !0), r().then((t) => {
			e.set(o, t), e.set(s, !1);
		})) : (e.set(o, r()), e.set(s, !1));
	}), e.legacy_pre_effect_reset(), e.init();
	var c = e.comment(), l = e.first_child(c), u = (e) => {}, d = (t) => {
		var n = e.comment(), r = e.first_child(n);
		e.element(r, () => e.get(o), !1, (t, n) => {
			e.attribute_effect(t, () => ({ ...i() }));
			var r = e.text();
			e.template_effect(() => e.set_text(r, a())), e.append(n, r);
		}), e.append(t, n);
	}, f = (t) => {
		e.get(o)(t, e.spread_props(i, {
			children: (t, n) => {
				e.next();
				var r = e.text();
				e.template_effect(() => e.set_text(r, a())), e.append(t, r);
			},
			$$slots: { default: !0 }
		}));
	}, p = (t) => {
		var n = e.text();
		e.template_effect(() => e.set_text(n, a())), e.append(t, n);
	};
	e.if(l, (t) => {
		e.get(s) ? t(u) : typeof e.get(o) == "string" ? t(d, 1) : typeof e.get(o) == "function" ? t(f, 2) : t(p, -1);
	}), e.append(t, c), e.pop();
}
var ie = (e) => {
	let t = !!X.prototype?.$destroy, n;
	if (n = t ? class extends X {
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
	} : (t) => X(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "toString", {
		value: () => String(e.value ?? ""),
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "valueOf", {
		value: () => e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, Symbol.toPrimitive, {
		value: () => e.value ?? "",
		writable: !0,
		configurable: !0
	}), e.value !== null && e.value !== void 0) {
		let t = Object(e.value), r = Object.getPrototypeOf(t);
		for (let i of Object.getOwnPropertyNames(r)) {
			if (i === "constructor" || i in n) continue;
			let r = t[i];
			typeof r == "function" && Object.defineProperty(n, i, {
				value: r.bind(e.value),
				writable: !0,
				configurable: !0
			});
		}
	}
	return e.additionalProps && Object.assign(n, e.additionalProps), n;
}, Z = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => ie({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, ae = Z, oe = V, se = V, ce = V, Q = /* @__PURE__ */ new Map(), le = (e, t = !0) => {
	let n = `${e ?? o.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		H(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
		U,
		re(e ?? o.defaultLocale),
		W,
		J(e ?? o.defaultLocale),
		Y,
		K,
		q,
		Z,
		ae,
		oe,
		se,
		ce
	];
	return Q.set(n, r), r;
}, $ = (e, t) => L(e, t, le(typeof t == "object" && t ? t.locale : t)), ue = (e, t) => {
	let n = u();
	return r([c], ([r]) => {
		let i = n?.locale ?? r.locale;
		return $(e, t ?? i);
	});
};
function de(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), n(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var fe = e.from_html("<li> </li>"), pe = e.from_html("<li><strong class=\"text-foreground\"> </strong> </li>"), me = e.from_html("<section class=\"mx-auto mb-16 max-w-3xl space-y-6\"><h2 class=\"text-2xl font-bold text-foreground\"> </h2> <div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p> <ul class=\"mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground\"></ul></div> <div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p> <ul class=\"mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground\"></ul></div> <div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div></section>");
function he(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(s, "$content", i), [i, o] = e.setup_stores();
	de("UnderstandingImpact");
	let s = ue(a);
	e.init();
	var c = me(), l = e.child(c), u = e.only_child(l, !0), d = e.sibling(l, 2), f = e.child(d), p = e.only_child(f, !0), m = e.sibling(f, 2), h = e.only_child(m, !0), g = e.sibling(m, 2);
	e.each(g, 5, () => r().largeJson.points, e.index, (t, n) => {
		var r = fe(), i = e.only_child(r, !0);
		e.template_effect(() => e.set_text(i, e.get(n))), e.append(t, r);
	}), e.reset(g), e.reset(d);
	var _ = e.sibling(d, 2), v = e.child(_), y = e.only_child(v, !0), b = e.sibling(v, 2), x = e.only_child(b, !0), S = e.sibling(b, 2);
	e.each(S, 5, () => r().dynamicLoading.points, e.index, (t, n) => {
		var r = pe(), i = e.child(r), a = e.only_child(i, !0), o = e.sibling(i);
		e.reset(r), e.template_effect(() => {
			e.set_text(a, e.get(n).label), e.set_text(o, ` ${e.get(n).text ?? ""}`);
		}), e.append(t, r);
	}), e.reset(S), e.reset(_);
	var C = e.sibling(_, 2), w = e.child(C), T = e.only_child(w, !0), E = e.sibling(w, 2), D = e.only_child(E, !0);
	e.reset(C), e.reset(c), e.template_effect(() => {
		e.set_text(u, r().title), e.set_text(p, r().largeJson.title), e.set_text(h, r().largeJson.description), e.set_text(y, r().dynamicLoading.title), e.set_text(x, r().dynamicLoading.description), e.set_text(T, r().benchmarkMeasures.title), e.set_text(D, r().benchmarkMeasures.description);
	}), e.append(t, c), e.pop(), o();
}
export { he as default };
