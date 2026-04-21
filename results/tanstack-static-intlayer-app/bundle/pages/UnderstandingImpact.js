import { Fragment, createContext, createElement, isValidElement, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var understanding_impact_default = {
	key: "understanding-impact",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"o\":\"Understanding the Impact\",\"t\":\"Why a single large JSON can hurt performance\",\"g\":\"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\",\"f\":\"Manage your account preferences and configuration.\",\"i\":\"Settings\",\"l\":\"The JSON must be parsed on every page load — blocking the main thread.\",\"c\":\"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\",\"d\":\"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\",\"m\":\"The trade-offs of dynamic loading\",\"j\":\"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\",\"h\":\"Save Changes\",\"b\":\"Cancel\",\"r\":\"Waterfall requests:\",\"e\":\"Flash of untranslated content (FOUC):\",\"a\":\"Cache invalidation:\",\"s\":\"What this benchmark measures\",\"n\":\"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\",\"k\":\"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\",\"q\":\"users may briefly see translation keys or a fallback language before the chunk arrives.\",\"p\":\"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\"},\"fr\":{\"o\":\"Comprendre l'impact\",\"t\":\"Pourquoi un seul grand JSON peut nuire aux performances\",\"g\":\"De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :\",\"f\":\"Gérez vos préférences de compte et votre configuration.\",\"i\":\"Paramètres\",\"l\":\"Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.\",\"c\":\"Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la locale change, car chaque consommateur est averti même si ses clés spécifiques n'ont pas changé.\",\"d\":\"Pendant le rendu côté serveur, le dictionnaire complet est sérialisé dans la charge utile HTML, augmentant la taille du document qui doit être téléchargé et hydraté.\",\"m\":\"Les compromis du chargement dynamique\",\"j\":\"Diviser les traductions en fragments par itinéraire ou par espace de noms peut réduire considérablement la charge utile initiale. Mais cela introduit de nouveaux défis :\",\"h\":\"Enregistrer les modifications\",\"b\":\"Annuler\",\"r\":\"Requêtes en cascade :\",\"e\":\"Flash de contenu non traduit (FOUC) :\",\"a\":\"Invalidation du cache :\",\"s\":\"Ce que ce benchmark mesure\",\"n\":\"Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement paresseux. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.\",\"k\":\"l'application doit d'abord se charger, déterminer la locale, puis récupérer le bon fragment — ce qui ajoute des allers-retours réseau.\",\"q\":\"les utilisateurs peuvent voir brièvement des clés de traduction ou une langue de repli avant l'arrivée du fragment.\",\"p\":\"la mise à jour des traductions nécessite des stratégies d'invalidation du cache pour garantir que les utilisateurs reçoivent un contenu frais sans télécharger à nouveau les fragments inchangés.\"},\"es\":{\"o\":\"Comprender el impacto\",\"t\":\"¿Por qué un solo JSON grande puede perjudicar el rendimiento?\",\"g\":\"Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\",\"f\":\"Gestione sus preferencias de cuenta y configuración.\",\"i\":\"Ajustes\",\"l\":\"El JSON debe analizarse en cada carga de página, lo que bloquea el hilo principal.\",\"c\":\"Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia la configuración regional, porque se notifica a cada consumidor incluso si sus claves específicas no cambiaron.\",\"d\":\"Durante el renderizado del lado del servidor, el diccionario completo se serializa en la carga útil de HTML, lo que aumenta el tamaño del documento que debe descargarse e hidratarse.\",\"m\":\"Las ventajas y desventajas de la carga dinámica\",\"j\":\"Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente la carga útil inicial. Pero introduce nuevos desafíos:\",\"h\":\"Guardar cambios\",\"b\":\"Cancelar\",\"r\":\"Solicitudes en cascada:\",\"e\":\"Flash de contenido no traducido (FOUC):\",\"a\":\"Invalidación de caché:\",\"s\":\"Qué mide este benchmark\",\"n\":\"Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que agregan a su paquete de JavaScript, el tiempo dedicado a analizar y renderizar contenido traducido y la efectividad de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\",\"k\":\"la aplicación primero debe cargarse, determinar la configuración regional y luego obtener el fragmento correcto, lo que agrega viajes de ida y vuelta de red.\",\"q\":\"los usuarios pueden ver brevemente las claves de traducción o un idioma de reserva antes de que llegue el fragmento.\",\"p\":\"la actualización de las traducciones requiere estrategias de invalidación de caché para garantizar que los usuarios obtengan contenido nuevo sin volver a descargar los fragmentos que no han cambiado.\"},\"de\":{\"o\":\"Die Auswirkungen verstehen\",\"t\":\"Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann\",\"g\":\"Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:\",\"f\":\"Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.\",\"i\":\"Einstellungen\",\"l\":\"Das JSON muss bei jedem Laden der Seite analysiert werden – was den Hauptthread blockiert.\",\"c\":\"Kontextbasierte Architekturen können kaskadierende Re-Renders verursachen, wenn sich die Locale ändert, da jeder Consumer benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.\",\"d\":\"Beim serverseitigen Rendering wird das vollständige Wörterbuch in den HTML-Payload serialisiert, wodurch sich die Größe des Dokuments erhöht, das heruntergeladen und hydriert werden muss.\",\"m\":\"Die Kompromisse beim dynamischen Laden\",\"j\":\"Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann den anfänglichen Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:\",\"h\":\"Änderungen speichern\",\"b\":\"Abbrechen\",\"r\":\"Wasserfall-Anfragen:\",\"e\":\"Flash von unübersetzten Inhalten (FOUC):\",\"a\":\"Cache-Invalidierung:\",\"s\":\"Was dieser Benchmark misst\",\"n\":\"Diese Test-App bietet eine kontrollierte Umgebung – 10 Seiten mit realistischem Inhalt –, um i18n-Bibliotheken anhand von drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Analysieren und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.\",\"k\":\"die App muss zuerst geladen werden, die Locale bestimmen und dann das richtige Chunk abrufen – was zusätzliche Netzwerk-Roundtrips bedeutet.\",\"q\":\"Benutzer sehen möglicherweise kurz Übersetzungsschlüssel oder eine Fallback-Sprache, bevor das Chunk eintrifft.\",\"p\":\"das Aktualisieren von Übersetzungen erfordert Cache-Busting-Strategien, um sicherzustellen, dass Benutzer neue Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.\"},\"it\":{\"o\":\"Comprendere l'impatto\",\"t\":\"Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\",\"g\":\"Molte librerie i18n memorizzano le traduzioni in un singolo oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma traduzioni mantiene un riferimento all'intero dizionario. Ciò significa:\",\"f\":\"Gestisci le preferenze del tuo account e la configurazione.\",\"i\":\"Impostazioni\",\"l\":\"Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.\",\"c\":\"Le architetture basate sul contesto possono causare rendering a cascata quando la locale cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.\",\"d\":\"Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando le dimensioni del documento che deve essere scaricato e idratato.\",\"m\":\"I compromessi del caricamento dinamico\",\"j\":\"La suddivisione delle traduzioni in blocchi per percorso o per spazio dei nomi può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\",\"h\":\"Salva modifiche\",\"b\":\"Annulla\",\"r\":\"Richieste a cascata:\",\"e\":\"Flash di contenuti non tradotti (FOUC):\",\"a\":\"Invalidazione della cache:\",\"s\":\"Cosa misura questo benchmark\",\"n\":\"Questa app di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo speso per analizzare e renderizzare i contenuti tradotti e l'efficacia delle loro strategie di suddivisione del codice e caricamento lento. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente comparabili.\",\"k\":\"l'app deve prima caricarsi, determinare la locale, quindi recuperare il blocco giusto, aggiungendo round-trip di rete.\",\"q\":\"gli utenti potrebbero visualizzare brevemente le chiavi di traduzione o una lingua di fallback prima dell'arrivo del blocco.\",\"p\":\"l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza scaricare nuovamente i blocchi invariati.\"},\"pt\":{\"o\":\"Entendendo o impacto\",\"t\":\"Por que um único JSON grande pode prejudicar o desempenho\",\"g\":\"Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:\",\"f\":\"Gerencie as preferências e configurações de sua conta.\",\"i\":\"Configurações\",\"l\":\"O JSON deve ser analisado em cada carga de página — bloqueando a thread principal.\",\"c\":\"As arquitecturas baseadas no contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.\",\"d\":\"Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser descarregado e hidratado.\",\"m\":\"As compensações do carregamento dinâmico\",\"j\":\"Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:\",\"h\":\"Salvar alterações\",\"b\":\"Cancelar\",\"r\":\"Pedidos em cascata:\",\"e\":\"Flash de conteúdo não traduzido (FOUC):\",\"a\":\"Invalidação da cache:\",\"s\":\"O que este benchmark mede\",\"n\":\"Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto a analisar e renderizar conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento preguiçoso. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.\",\"k\":\"a aplicação deve primeiro carregar, determinar a localidade e, em seguida, procurar a parte certa, adicionando viagens de ida e volta na rede.\",\"q\":\"os utilizadores podem ver brevemente as chaves de tradução ou um idioma de reserva antes da parte chegar.\",\"p\":\"a atualização das traduções requer estratégias de destruição da cache para garantir que os utilizadores recebam novos conteúdos sem voltarem a descarregar as partes inalteradas.\"},\"zh\":{\"o\":\"理解影响\",\"t\":\"为什么单个大型 JSON 会损害性能\",\"g\":\"许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当这个对象很大（数千个键）时，每个使用翻译的组件都会持有对整个字典的引用。这意味着：\",\"f\":\"管理您的账户偏好和配置。\",\"i\":\"设置\",\"l\":\"JSON 必须在每次页面加载时进行解析 —— 这会阻塞主线程。\",\"c\":\"当本地化发生变化时，基于上下文的架构可能会导致级联重新渲染，因为即使某些组件的特定键没有变化，每个消费者也会收到通知。\",\"d\":\"在服务器端渲染期间，整个字典会被序列化到 HTML 负载中，从而增加了必须下载和注水的文件大小。\",\"m\":\"动态加载的权衡\",\"j\":\"将翻译拆分为按路由或按命名空间的块可以显著减少初始负载。但它引入了新的挑战：\",\"h\":\"保存更改\",\"b\":\"取消\",\"r\":\"瀑布请求：\",\"e\":\"未翻译内容闪烁 (FOUC)：\",\"a\":\"缓存失效：\",\"s\":\"此基准测试测量什么\",\"n\":\"此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个维度上比较 i18n 库：它们为 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们的代码拆分和懒加载策略的有效性。每个库都集成到同一个应用中，因此结果具有直接可比性。\",\"k\":\"应用必须首先加载，确定语言区域，然后获取正确的块 —— 增加了网络往返。\",\"q\":\"在块到达之前，用户可能会短暂地看到翻译键或回退语言。\",\"p\":\"更新翻译需要缓存失效策略，以确保用户获得新鲜内容，而无需重新下载未更改的块。\"},\"ja\":{\"o\":\"影響を理解する\",\"t\":\"なぜ1つの大きなJSONがパフォーマンスを低下させるのか\",\"g\":\"多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい（数千のキーがある）場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持します。これは以下のことを意味します：\",\"f\":\"アカウント設定と構成を管理します。\",\"i\":\"設定\",\"l\":\"JSONはページを読み込むたびに解析する必要があり、メインスレッドをブロックします。\",\"c\":\"コンテキストベースのアーキテクチャでは、ロケールが変更されるとカスケード再レンダリングが発生する可能性があります。これは、特定のキーが変更されていなくても、すべてのコンシューマーに通知されるためです。\",\"d\":\"サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードしてシリアライズする必要があるドキュメントサイズが増加します。\",\"m\":\"動的読み込みのトレードオフ\",\"j\":\"翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、それは新たな課題をもたらします：\",\"h\":\"変更を保存\",\"b\":\"キャンセル\",\"r\":\"ウォーターフォールリクエスト：\",\"e\":\"未翻訳コンテンツのフラッシュ(FOUC)：\",\"a\":\"キャッシュの無効化：\",\"s\":\"このベンチマークが測定するもの\",\"n\":\"このテストアプリは、10ページの現実的なコンテンツで制御された環境を提供し、18nライブラリを3つの軸で比較します。JavaScriptバンドルに追加される重み、翻訳されたコンテンツの解析とレンダリングに費やされる時間、およびコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。\",\"k\":\"アプリはまず読み込み、ロケールを決定してから、正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。\",\"q\":\"チャンクが到着する前に、ユーザーは翻訳キーやフォールバック言語を一時的に目にする可能性があります。\",\"p\":\"翻訳を更新するには、変更されていないチャンクを再ダウンロードせずにユーザーが最新のコンテンツを確実に取得できるようにするためのキャッシュバスティング戦略が必要です。\"},\"ko\":{\"o\":\"영향 이해\",\"t\":\"단일 대용량 JSON이 성능을 저하시키는 이유\",\"g\":\"많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 개체에 번역을 저장합니다. 이 개체가 크면(수천 개의 키) 번역을 사용하는 모든 구성 요소가 전체 사전에 대한 참조를 보유합니다. 이는 다음을 의미합니다.\",\"f\":\"계정 기본 설정 및 구성을 관리하십시오.\",\"i\":\"설정\",\"l\":\"JSON은 모든 페이지 로드 시 구문 분석되어야 하므로 메인 스レッド가 차단됩니다.\",\"c\":\"컨텍스트 기반 아키텍처는 로캘이 변경될 때 계단식 다시 렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자가 알림을 받기 때문입니다.\",\"d\":\"서버 측 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어 다운로드 및 하이드레이션해야 하는 문서 크기가 증가합니다.\",\"m\":\"동적 로딩의 트레이드오프\",\"j\":\"번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 획기적으로 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다.\",\"h\":\"변경 사항 저장\",\"b\":\"취소\",\"r\":\"워터폴 요청:\",\"e\":\"번역되지 않은 콘텐츠의 플래시 (FOUC):\",\"a\":\"캐시 무효화:\",\"s\":\"이 벤치마크가 측정하는 것\",\"n\":\"이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 측면에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 구문 분석하고 렌더링하는 데 소요되는 시간, 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.\",\"k\":\"앱이 먼저 로드되고 로캘을 결정한 다음 올바른 청크를 가져와야 하므로 네트워크 왕복이 추가됩니다.\",\"q\":\"청크가 도착하기 전에 사용자가 번역 키나 대체 언어를 잠시 볼 수 있습니다.\",\"p\":\"번역을 업데이트하려면 사용자가 변경되지 않은 청크를 다시 다운로드하지 않고도 최신 콘텐츠를 받을 수 있도록 캐시 무효화 전략이 필요합니다.\"},\"ru\":{\"o\":\"Понимание влияния\",\"t\":\"Почему один большой JSON может снизить производительность\",\"g\":\"Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\",\"f\":\"Управляйте настройками и конфигурацией своего аккаунта.\",\"i\":\"Настройки\",\"l\":\"JSON должен парситься при каждой загрузке страницы — блокируя основной поток.\",\"c\":\"Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.\",\"d\":\"Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.\",\"m\":\"Компромиссы динамической загрузки\",\"j\":\"Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:\",\"h\":\"Сохранить изменения\",\"b\":\"Отмена\",\"r\":\"Каскадные запросы (Waterfall requests):\",\"e\":\"Мерцание непереведенного контента (FOUC):\",\"a\":\"Инвалидация кэша:\",\"s\":\"Что измеряет этот бенчмарк\",\"n\":\"Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.\",\"k\":\"сначала приложение должно загрузиться, определить локаль, а затем получить нужный чанк — это добавляет сетевые задержки.\",\"q\":\"пользователи могут на мгновение увидеть ключи перевода или резервный язык до того, как чанк будет загружен.\",\"p\":\"обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных чанков.\"}}}")
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
var renderIntlayerNode = ({ children, value, additionalProps }) => {
	const element = isValidElement(children) ? children : jsx(Fragment$1, { children });
	return new Proxy(element, { get(target, prop, receiver) {
		if (prop === "value") return value;
		if (additionalProps && prop in additionalProps) return additionalProps[prop];
		return Reflect.get(target, prop, receiver);
	} });
};
var renderReactElement = (element) => {
	if (element === null || typeof element !== "object") return element;
	const convertChildrenAsArray = (element) => {
		const children = element.props?.children;
		if (Array.isArray(children)) {
			const childrenResult = children.map((child, index) => {
				const renderedChild = renderReactElement(child);
				if (typeof renderedChild === "object" && renderedChild !== null && "type" in renderedChild) {
					const childElement = renderedChild;
					return createElement(childElement.type, {
						...childElement.props,
						key: index
					}, ...Array.isArray(childElement.props?.children) ? childElement.props.children : typeof childElement.props?.children !== "undefined" ? [childElement.props.children] : []);
				}
				return renderedChild;
			});
			return {
				...element,
				props: {
					...element.props,
					children: childrenResult
				}
			};
		} else if (typeof children !== "undefined" && children !== null) {
			const renderedChild = renderReactElement(children);
			return {
				...element,
				props: {
					...element.props,
					children: [renderedChild]
				}
			};
		}
		return {
			...element,
			props: {
				...element.props,
				children: []
			}
		};
	};
	const { type, props } = convertChildrenAsArray(element);
	return createElement(type ?? "span", props, ...props.children);
};
var TRANSLATION = "translation";
var INSERTION = "insertion";
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
var getInsertion = (content, values) => content.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, key) => {
	return (values[key.trim()] ?? "").toString();
});
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
var TREE_SHAKE_INSERTION$1 = process.env["INTLAYER_NODE_TYPE_INSERTION"] === "false";
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
var enumerationPlugin = fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin$1 = TREE_SHAKE_INSERTION$1 ? fallbackPlugin : {
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
var genderPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var getDictionary$1 = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
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
var TREE_SHAKE_INTLAYER_NODE = process.env["INTLAYER_NODE_TYPE_INTLAYER_NODE"] === "false";
var TREE_SHAKE_REACT_NODE = process.env["INTLAYER_NODE_TYPE_REACT_NODE"] === "false";
var TREE_SHAKE_INSERTION = process.env["INTLAYER_NODE_TYPE_INSERTION"] === "false";
var intlayerNodePlugins = TREE_SHAKE_INTLAYER_NODE ? fallbackPlugin : {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (_node, { plugins, ...rest }) => renderIntlayerNode({
		...rest,
		value: rest.children,
		children: rest.children
	})
};
var reactNodePlugins = TREE_SHAKE_REACT_NODE ? fallbackPlugin : {
	id: "react-node-plugin",
	canHandle: (node) => typeof node === "object" && typeof node?.props !== "undefined" && typeof node.key !== "undefined",
	transform: (node, { plugins, ...rest }) => renderIntlayerNode({
		...rest,
		value: "[[react-element]]",
		children: renderReactElement(node)
	})
};
var splitAndJoinInsertion = (template, values) => {
	const result = splitInsertionTemplate(template, values);
	if (result.isSimple) return result.parts;
	return createElement(Fragment, null, ...result.parts.map((part, index) => createElement(Fragment, { key: index }, part)));
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
					const result = splitAndJoinInsertion(transformedResult, values);
					return deepTransformNode(result, {
						...subProps,
						plugins: props.plugins,
						children: result
					});
				};
			}
		};
		const result = deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		});
		if (typeof children === "object" && children !== null && "nodeType" in children && ["enumeration", "condition"].includes(children.nodeType)) return (values) => (arg) => {
			const inner = result(arg);
			if (typeof inner === "function") return inner(values);
			return inner;
		};
		return result;
	}
};
var markdownPlugin = fallbackPlugin;
var htmlPlugin = fallbackPlugin;
var pluginsCache = /* @__PURE__ */ new Map();
var getPlugins = (locale, fallback = true) => {
	const cacheKey = `${locale ?? internationalization.defaultLocale}_${fallback}`;
	if (pluginsCache.has(cacheKey)) return pluginsCache.get(cacheKey);
	const plugins = [
		translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(locale ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		intlayerNodePlugins,
		reactNodePlugins,
		insertionPlugin,
		markdownPlugin,
		htmlPlugin
	];
	pluginsCache.set(cacheKey, plugins);
	return plugins;
};
var getDictionary = (dictionary, locale) => getDictionary$1(dictionary, locale, getPlugins(locale));
var localeResolver = (selectedLocale, locales = internationalization?.locales, defaultLocale = internationalization?.defaultLocale) => {
	const requestedLocales = [selectedLocale].flat();
	const normalize = (locale) => locale.trim().toLowerCase();
	try {
		for (const requested of requestedLocales) {
			const normalizedRequested = normalize(requested);
			const exactMatch = locales.find((locale) => normalize(locale) === normalizedRequested);
			if (exactMatch) return exactMatch;
			const [requestedLang] = normalizedRequested.split("-");
			const partialMatch = locales.find((locale) => normalize(locale).split("-")[0] === requestedLang);
			if (partialMatch) return partialMatch;
		}
	} catch {}
	return defaultLocale;
};
var TREE_SHAKE_STORAGE_COOKIES = process.env["INTLAYER_ROUTING_STORAGE_COOKIES"] === "false";
process.env["INTLAYER_ROUTING_STORAGE_HEADERS"];
var buildCookieString = (name, value, attributes) => {
	const parts = [`${name}=${encodeURIComponent(value)}`];
	if (attributes.path) parts.push(`Path=${attributes.path}`);
	if (attributes.domain) parts.push(`Domain=${attributes.domain}`);
	if (attributes.expires instanceof Date) parts.push(`Expires=${attributes.expires.toUTCString()}`);
	if (attributes.secure) parts.push("Secure");
	if (attributes.sameSite) parts.push(`SameSite=${attributes.sameSite}`);
	return parts.join("; ");
};
var getLocaleFromStorageClient = (options) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
};
var setLocaleInStorageClient = (locale, options) => {
	if (options?.isCookieEnabled === false) return;
	if (!TREE_SHAKE_STORAGE_COOKIES && routing.storage.cookies) for (let i = 0; i < routing.storage.cookies.length; i++) {
		const { name, attributes } = routing.storage.cookies[i];
		try {
			if (options?.setCookieStore) options.setCookieStore(name, locale, {
				...attributes,
				expires: attributes.expires instanceof Date ? attributes.expires.getTime() : attributes.expires
			});
		} catch {
			try {
				if (options?.setCookieString) options.setCookieString(name, buildCookieString(name, locale, attributes));
			} catch {}
		}
	}
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
var localeInStorage = getLocaleFromStorageClient(localeStorageOptions);
var setLocaleInStorage = (locale, isCookieEnabled) => setLocaleInStorageClient(locale, {
	...localeStorageOptions,
	isCookieEnabled
});
var useEditor = () => {
	const { locale } = useContext(IntlayerClientContext) ?? {};
	const managerRef = useRef(null);
	useEffect(() => {}, []);
	useEffect(() => {
		if (!locale || !managerRef.current) return;
		managerRef.current.currentLocale.set(locale);
	}, [locale]);
};
var EditorProvider = ({ children }) => {
	useEditor();
	return children;
};
var setIntlayerIdentifier = () => {
	if (typeof window !== "undefined") window.intlayer = { enabled: true };
};
var IntlayerClientContext = createContext({
	locale: localeInStorage ?? internationalization?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: true
});
var IntlayerProviderContent = ({ locale: localeProp, defaultLocale: defaultLocaleProp, children, setLocale: setLocaleProp, disableEditor, isCookieEnabled }) => {
	const { locales: availableLocales, defaultLocale: defaultLocaleConfig } = internationalization ?? {};
	const [currentLocale, setCurrentLocale] = useState(localeProp ?? localeInStorage ?? defaultLocaleProp ?? defaultLocaleConfig);
	useEffect(() => {
		if (localeProp && localeProp !== currentLocale) setCurrentLocale(localeProp);
	}, [localeProp]);
	useEffect(() => {
		setIntlayerIdentifier();
	}, []);
	const setLocaleBase = (newLocale) => {
		if (currentLocale.toString() === newLocale.toString()) return;
		if (!availableLocales?.map(String).includes(newLocale)) {
			console.error(`Locale ${newLocale} is not available`);
			return;
		}
		setCurrentLocale(newLocale);
		setLocaleInStorage(newLocale, isCookieEnabled);
	};
	const setLocale = setLocaleProp ?? setLocaleBase;
	const resolvedLocale = localeResolver(currentLocale);
	return jsx(IntlayerClientContext.Provider, {
		value: {
			locale: resolvedLocale,
			setLocale,
			disableEditor
		},
		children
	});
};
var IntlayerProvider = ({ children, ...props }) => jsxs(IntlayerProviderContent, {
	...props,
	children: [jsx(EditorProvider, {}), children]
});
var useDictionary = (dictionary, locale) => {
	const { locale: currentLocale } = useContext(IntlayerClientContext) ?? {};
	return useMemo(() => {
		return getDictionary(dictionary, locale ?? currentLocale);
	}, [
		dictionary.key,
		currentLocale,
		locale
	]);
};
function UnderstandingImpact() {
	const content = useDictionary(understanding_impact_default);
	return jsxs("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			jsx("h2", {
				className: "text-2xl font-bold text-foreground",
				children: content.o
			}),
			jsxs("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: content.t
					}),
					jsx("p", {
						className: "text-sm text-muted-foreground",
						children: content.g
					}),
					jsxs("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							jsx("li", { children: content.l }),
							jsx("li", { children: content.c }),
							jsx("li", { children: content.d })
						]
					})
				]
			}),
			jsxs("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: content.m
					}),
					jsx("p", {
						className: "text-sm text-muted-foreground",
						children: content.j
					}),
					jsxs("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							jsxs("li", { children: [jsx("strong", {
								className: "text-foreground",
								children: content.r
							}), content.k] }),
							jsxs("li", { children: [
								jsx("strong", {
									className: "text-foreground",
									children: content.e
								}),
								" ",
								content.q
							] }),
							jsxs("li", { children: [
								jsx("strong", {
									className: "text-foreground",
									children: content.a
								}),
								" ",
								content.p
							] })
						]
					})
				]
			}),
			jsxs("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [jsx("h3", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: content.s
				}), jsx("p", {
					className: "text-sm text-muted-foreground",
					children: content.n
				})]
			})
		]
	});
}
function Wrapper({ children }) {
	return jsx(IntlayerProvider, {
		locale: "en",
		children
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(UnderstandingImpact, {}) });
}
export { Wrapped as default };
