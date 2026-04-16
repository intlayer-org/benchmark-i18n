import { Fragment as e, Profiler as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as ee } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
var f = {
	key: "understanding-impact",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"k\":\"Understanding the Impact\",\"p\":\"Why a single large JSON can hurt performance\",\"e\":\"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\",\"manageYourAccountPreferencesAnd\":\"Manage your account preferences and configuration.\",\"settings\":\"Settings\",\"h\":\"The JSON must be parsed on every page load — blocking the main thread.\",\"b\":\"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\",\"c\":\"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\",\"i\":\"The trade-offs of dynamic loading\",\"f\":\"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\",\"saveChanges\":\"Save Changes\",\"cancel\":\"Cancel\",\"n\":\"Waterfall requests:\",\"d\":\"Flash of untranslated content (FOUC):\",\"a\":\"Cache invalidation:\",\"o\":\"What this benchmark measures\",\"j\":\"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\",\"g\":\"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\",\"m\":\"users may briefly see translation keys or a fallback language before the chunk arrives.\",\"l\":\"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\"},\"fr\":{\"k\":\"Comprendre l'impact\",\"p\":\"Pourquoi un seul grand JSON peut nuire aux performances\",\"e\":\"De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :\",\"manageYourAccountPreferencesAnd\":\"Gérez vos préférences de compte et votre configuration.\",\"settings\":\"Paramètres\",\"h\":\"Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.\",\"b\":\"Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la locale change, car chaque consommateur est averti même si ses clés spécifiques n'ont pas changé.\",\"c\":\"Pendant le rendu côté serveur, le dictionnaire complet est sérialisé dans la charge utile HTML, augmentant la taille du document qui doit être téléchargé et hydraté.\",\"i\":\"Les compromis du chargement dynamique\",\"f\":\"Diviser les traductions en fragments par itinéraire ou par espace de noms peut réduire considérablement la charge utile initiale. Mais cela introduit de nouveaux défis :\",\"saveChanges\":\"Enregistrer les modifications\",\"cancel\":\"Annuler\",\"n\":\"Requêtes en cascade :\",\"d\":\"Flash de contenu non traduit (FOUC) :\",\"a\":\"Invalidation du cache :\",\"o\":\"Ce que ce benchmark mesure\",\"j\":\"Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement paresseux. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.\",\"g\":\"l'application doit d'abord se charger, déterminer la locale, puis récupérer le bon fragment — ce qui ajoute des allers-retours réseau.\",\"m\":\"les utilisateurs peuvent voir brièvement des clés de traduction ou une langue de repli avant l'arrivée du fragment.\",\"l\":\"la mise à jour des traductions nécessite des stratégies d'invalidation du cache pour garantir que les utilisateurs reçoivent un contenu frais sans télécharger à nouveau les fragments inchangés.\"},\"es\":{\"k\":\"Comprender el impacto\",\"p\":\"¿Por qué un solo JSON grande puede perjudicar el rendimiento?\",\"e\":\"Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\",\"manageYourAccountPreferencesAnd\":\"Gestione sus preferencias de cuenta y configuración.\",\"settings\":\"Ajustes\",\"h\":\"El JSON debe analizarse en cada carga de página, lo que bloquea el hilo principal.\",\"b\":\"Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia la configuración regional, porque se notifica a cada consumidor incluso si sus claves específicas no cambiaron.\",\"c\":\"Durante el renderizado del lado del servidor, el diccionario completo se serializa en la carga útil de HTML, lo que aumenta el tamaño del documento que debe descargarse e hidratarse.\",\"i\":\"Las ventajas y desventajas de la carga dinámica\",\"f\":\"Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente la carga útil inicial. Pero introduce nuevos desafíos:\",\"saveChanges\":\"Guardar cambios\",\"cancel\":\"Cancelar\",\"n\":\"Solicitudes en cascada:\",\"d\":\"Flash de contenido no traducido (FOUC):\",\"a\":\"Invalidación de caché:\",\"o\":\"Qué mide este benchmark\",\"j\":\"Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que agregan a su paquete de JavaScript, el tiempo dedicado a analizar y renderizar contenido traducido y la efectividad de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\",\"g\":\"la aplicación primero debe cargarse, determinar la configuración regional y luego obtener el fragmento correcto, lo que agrega viajes de ida y vuelta de red.\",\"m\":\"los usuarios pueden ver brevemente las claves de traducción o un idioma de reserva antes de que llegue el fragmento.\",\"l\":\"la actualización de las traducciones requiere estrategias de invalidación de caché para garantizar que los usuarios obtengan contenido nuevo sin volver a descargar los fragmentos que no han cambiado.\"},\"de\":{\"k\":\"Die Auswirkungen verstehen\",\"p\":\"Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann\",\"e\":\"Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:\",\"manageYourAccountPreferencesAnd\":\"Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.\",\"settings\":\"Einstellungen\",\"h\":\"Das JSON muss bei jedem Laden der Seite analysiert werden – was den Hauptthread blockiert.\",\"b\":\"Kontextbasierte Architekturen können kaskadierende Re-Renders verursachen, wenn sich die Locale ändert, da jeder Consumer benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.\",\"c\":\"Beim serverseitigen Rendering wird das vollständige Wörterbuch in den HTML-Payload serialisiert, wodurch sich die Größe des Dokuments erhöht, das heruntergeladen und hydriert werden muss.\",\"i\":\"Die Kompromisse beim dynamischen Laden\",\"f\":\"Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann den anfänglichen Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:\",\"saveChanges\":\"Änderungen speichern\",\"cancel\":\"Abbrechen\",\"n\":\"Wasserfall-Anfragen:\",\"d\":\"Flash von unübersetzten Inhalten (FOUC):\",\"a\":\"Cache-Invalidierung:\",\"o\":\"Was dieser Benchmark misst\",\"j\":\"Diese Test-App bietet eine kontrollierte Umgebung – 10 Seiten mit realistischem Inhalt –, um i18n-Bibliotheken anhand von drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Analysieren und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.\",\"g\":\"die App muss zuerst geladen werden, die Locale bestimmen und dann das richtige Chunk abrufen – was zusätzliche Netzwerk-Roundtrips bedeutet.\",\"m\":\"Benutzer sehen möglicherweise kurz Übersetzungsschlüssel oder eine Fallback-Sprache, bevor das Chunk eintrifft.\",\"l\":\"das Aktualisieren von Übersetzungen erfordert Cache-Busting-Strategien, um sicherzustellen, dass Benutzer neue Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.\"},\"it\":{\"k\":\"Comprendere l'impatto\",\"p\":\"Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\",\"e\":\"Molte librerie i18n memorizzano le traduzioni in un singolo oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma traduzioni mantiene un riferimento all'intero dizionario. Ciò significa:\",\"manageYourAccountPreferencesAnd\":\"Gestisci le preferenze del tuo account e la configurazione.\",\"settings\":\"Impostazioni\",\"h\":\"Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.\",\"b\":\"Le architetture basate sul contesto possono causare rendering a cascata quando la locale cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.\",\"c\":\"Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando le dimensioni del documento che deve essere scaricato e idratato.\",\"i\":\"I compromessi del caricamento dinamico\",\"f\":\"La suddivisione delle traduzioni in blocchi per percorso o per spazio dei nomi può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\",\"saveChanges\":\"Salva modifiche\",\"cancel\":\"Annulla\",\"n\":\"Richieste a cascata:\",\"d\":\"Flash di contenuti non tradotti (FOUC):\",\"a\":\"Invalidazione della cache:\",\"o\":\"Cosa misura questo benchmark\",\"j\":\"Questa app di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo speso per analizzare e renderizzare i contenuti tradotti e l'efficacia delle loro strategie di suddivisione del codice e caricamento lento. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente comparabili.\",\"g\":\"l'app deve prima caricarsi, determinare la locale, quindi recuperare il blocco giusto, aggiungendo round-trip di rete.\",\"m\":\"gli utenti potrebbero visualizzare brevemente le chiavi di traduzione o una lingua di fallback prima dell'arrivo del blocco.\",\"l\":\"l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza scaricare nuovamente i blocchi invariati.\"},\"pt\":{\"k\":\"Entendendo o impacto\",\"p\":\"Por que um único JSON grande pode prejudicar o desempenho\",\"e\":\"Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:\",\"manageYourAccountPreferencesAnd\":\"Gerencie as preferências e configurações de sua conta.\",\"settings\":\"Configurações\",\"h\":\"O JSON deve ser analisado em cada carga de página — bloqueando a thread principal.\",\"b\":\"As arquitecturas baseadas no contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.\",\"c\":\"Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser descarregado e hidratado.\",\"i\":\"As compensações do carregamento dinâmico\",\"f\":\"Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:\",\"saveChanges\":\"Salvar alterações\",\"cancel\":\"Cancelar\",\"n\":\"Pedidos em cascata:\",\"d\":\"Flash de conteúdo não traduzido (FOUC):\",\"a\":\"Invalidação da cache:\",\"o\":\"O que este benchmark mede\",\"j\":\"Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto a analisar e renderizar conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento preguiçoso. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.\",\"g\":\"a aplicação deve primeiro carregar, determinar a localidade e, em seguida, procurar a parte certa, adicionando viagens de ida e volta na rede.\",\"m\":\"os utilizadores podem ver brevemente as chaves de tradução ou um idioma de reserva antes da parte chegar.\",\"l\":\"a atualização das traduções requer estratégias de destruição da cache para garantir que os utilizadores recebam novos conteúdos sem voltarem a descarregar as partes inalteradas.\"},\"zh\":{\"k\":\"理解影响\",\"p\":\"为什么单个大型 JSON 会损害性能\",\"e\":\"许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当这个对象很大（数千个键）时，每个使用翻译的组件都会持有对整个字典的引用。这意味着：\",\"manageYourAccountPreferencesAnd\":\"管理您的账户偏好和配置。\",\"settings\":\"设置\",\"h\":\"JSON 必须在每次页面加载时进行解析 —— 这会阻塞主线程。\",\"b\":\"当本地化发生变化时，基于上下文的架构可能会导致级联重新渲染，因为即使某些组件的特定键没有变化，每个消费者也会收到通知。\",\"c\":\"在服务器端渲染期间，整个字典会被序列化到 HTML 负载中，从而增加了必须下载和注水的文件大小。\",\"i\":\"动态加载的权衡\",\"f\":\"将翻译拆分为按路由或按命名空间的块可以显著减少初始负载。但它引入了新的挑战：\",\"saveChanges\":\"保存更改\",\"cancel\":\"取消\",\"n\":\"瀑布请求：\",\"d\":\"未翻译内容闪烁 (FOUC)：\",\"a\":\"缓存失效：\",\"o\":\"此基准测试测量什么\",\"j\":\"此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个维度上比较 i18n 库：它们为 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们的代码拆分和懒加载策略的有效性。每个库都集成到同一个应用中，因此结果具有直接可比性。\",\"g\":\"应用必须首先加载，确定语言区域，然后获取正确的块 —— 增加了网络往返。\",\"m\":\"在块到达之前，用户可能会短暂地看到翻译键或回退语言。\",\"l\":\"更新翻译需要缓存失效策略，以确保用户获得新鲜内容，而无需重新下载未更改的块。\"},\"ja\":{\"k\":\"影響を理解する\",\"p\":\"なぜ1つの大きなJSONがパフォーマンスを低下させるのか\",\"e\":\"多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい（数千のキーがある）場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持します。これは以下のことを意味します：\",\"manageYourAccountPreferencesAnd\":\"アカウント設定と構成を管理します。\",\"settings\":\"設定\",\"h\":\"JSONはページを読み込むたびに解析する必要があり、メインスレッドをブロックします。\",\"b\":\"コンテキストベースのアーキテクチャでは、ロケールが変更されるとカスケード再レンダリングが発生する可能性があります。これは、特定のキーが変更されていなくても、すべてのコンシューマーに通知されるためです。\",\"c\":\"サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードしてシリアライズする必要があるドキュメントサイズが増加します。\",\"i\":\"動的読み込みのトレードオフ\",\"f\":\"翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、それは新たな課題をもたらします：\",\"saveChanges\":\"変更を保存\",\"cancel\":\"キャンセル\",\"n\":\"ウォーターフォールリクエスト：\",\"d\":\"未翻訳コンテンツのフラッシュ(FOUC)：\",\"a\":\"キャッシュの無効化：\",\"o\":\"このベンチマークが測定するもの\",\"j\":\"このテストアプリは、10ページの現実的なコンテンツで制御された環境を提供し、18nライブラリを3つの軸で比較します。JavaScriptバンドルに追加される重み、翻訳されたコンテンツの解析とレンダリングに費やされる時間、およびコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。\",\"g\":\"アプリはまず読み込み、ロケールを決定してから、正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。\",\"m\":\"チャンクが到着する前に、ユーザーは翻訳キーやフォールバック言語を一時的に目にする可能性があります。\",\"l\":\"翻訳を更新するには、変更されていないチャンクを再ダウンロードせずにユーザーが最新のコンテンツを確実に取得できるようにするためのキャッシュバスティング戦略が必要です。\"},\"ko\":{\"k\":\"영향 이해\",\"p\":\"단일 대용량 JSON이 성능을 저하시키는 이유\",\"e\":\"많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 개체에 번역을 저장합니다. 이 개체가 크면(수천 개의 키) 번역을 사용하는 모든 구성 요소가 전체 사전에 대한 참조를 보유합니다. 이는 다음을 의미합니다.\",\"manageYourAccountPreferencesAnd\":\"계정 기본 설정 및 구성을 관리하십시오.\",\"settings\":\"설정\",\"h\":\"JSON은 모든 페이지 로드 시 구문 분석되어야 하므로 메인 스レッド가 차단됩니다.\",\"b\":\"컨텍스트 기반 아키텍처는 로캘이 변경될 때 계단식 다시 렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자가 알림을 받기 때문입니다.\",\"c\":\"서버 측 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어 다운로드 및 하이드레이션해야 하는 문서 크기가 증가합니다.\",\"i\":\"동적 로딩의 트레이드오프\",\"f\":\"번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 획기적으로 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다.\",\"saveChanges\":\"변경 사항 저장\",\"cancel\":\"취소\",\"n\":\"워터폴 요청:\",\"d\":\"번역되지 않은 콘텐츠의 플래시 (FOUC):\",\"a\":\"캐시 무효화:\",\"o\":\"이 벤치마크가 측정하는 것\",\"j\":\"이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 측면에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 구문 분석하고 렌더링하는 데 소요되는 시간, 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.\",\"g\":\"앱이 먼저 로드되고 로캘을 결정한 다음 올바른 청크를 가져와야 하므로 네트워크 왕복이 추가됩니다.\",\"m\":\"청크가 도착하기 전에 사용자가 번역 키나 대체 언어를 잠시 볼 수 있습니다.\",\"l\":\"번역을 업데이트하려면 사용자가 변경되지 않은 청크를 다시 다운로드하지 않고도 최신 콘텐츠를 받을 수 있도록 캐시 무효화 전략이 필요합니다.\"},\"ru\":{\"k\":\"Понимание влияния\",\"p\":\"Почему один большой JSON может снизить производительность\",\"e\":\"Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\",\"manageYourAccountPreferencesAnd\":\"Управляйте настройками и конфигурацией своего аккаунта.\",\"settings\":\"Настройки\",\"h\":\"JSON должен парситься при каждой загрузке страницы — блокируя основной поток.\",\"b\":\"Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.\",\"c\":\"Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.\",\"i\":\"Компромиссы динамической загрузки\",\"f\":\"Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:\",\"saveChanges\":\"Сохранить изменения\",\"cancel\":\"Отмена\",\"n\":\"Каскадные запросы (Waterfall requests):\",\"d\":\"Мерцание непереведенного контента (FOUC):\",\"a\":\"Инвалидация кэша:\",\"o\":\"Что измеряет этот бенчмарк\",\"j\":\"Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.\",\"g\":\"сначала приложение должно загрузиться, определить локаль, а затем получить нужный чанк — это добавляет сетевые задержки.\",\"m\":\"пользователи могут на мгновение увидеть ключи перевода или резервный язык до того, как чанк будет загружен.\",\"l\":\"обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных чанков.\"}}}")
}, p = {
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
	defaultLocale: "en"
}, m = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, h = ({ children: e, value: t, additionalProps: n }) => {
	let r = i(e) ? e : u(l, { children: e });
	return new Proxy(r, { get(e, r, i) {
		return r === "value" ? t : n && Object.keys(n).includes(r) ? n[r] : Reflect.get(e, r, i);
	} });
}, g = (e) => {
	if (typeof e != "object" || !e) return e;
	let { type: t, props: n } = ((e) => {
		let t = e.props?.children;
		if (Array.isArray(t)) {
			let n = t.map((e, t) => {
				let n = g(e);
				if (typeof n == "object" && n && "type" in n) {
					let e = n;
					return r(e.type, {
						...e.props,
						key: t
					}, ...Array.isArray(e.props?.children) ? e.props.children : e.props?.children === void 0 ? [] : [e.props.children]);
				}
				return n;
			});
			return {
				...e,
				props: {
					...e.props,
					children: n
				}
			};
		} else if (t != null) {
			let n = g(t);
			return {
				...e,
				props: {
					...e.props,
					children: [n]
				}
			};
		}
		return {
			...e,
			props: {
				...e.props,
				children: []
			}
		};
	})(e);
	return r(t ?? "span", n, ...n.children);
}, te = "translation", _ = "insertion", v = "object", ne = "array", y = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => y(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => y(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ne,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: v,
				key: r
			}]
		};
		n[r] = y(e[r], i);
	}
	return n;
}, re = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), b = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, x = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (b(e) && b(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : x(e[r], t[r]));
		return n;
	}
	return e;
}, S = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => x(e, t));
}, C = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", w = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", T = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, E = (e, t) => C ? T : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = { ...n.translation ?? {} };
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: te,
					key: e
				}]
			};
			a[e] = i(a[e], t);
		}
		return S(a, e, t);
	}
}, D = T, O = T, ie = w ? T : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = re(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
	}
}, k = T, A = (e) => T, j = T, M = (e, t = !0) => [
	E(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	D,
	O,
	ie,
	A(e ?? p.defaultLocale),
	j,
	k
].filter(Boolean), N = (e, t, n = []) => y(e, {
	...t,
	plugins: n
}), P = (e, t, n = M(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return N(e.content, r, n);
}, F = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", I = /\{\{\s*(.*?)\s*\}\}/g, L = (e, t = {}) => {
	if (!Object.values(t).some(F)) return {
		isSimple: !0,
		parts: e.replace(I, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(I), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, R = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", z = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", B = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", V = R ? T : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => h({
		...n,
		value: n.children,
		children: n.children
	})
}, H = z ? T : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => h({
		...n,
		value: "[[react-element]]",
		children: g(e)
	})
}, U = (t, n) => {
	let i = L(t, n);
	return i.isSimple ? i.parts : r(e, null, ...i.parts.map((t, n) => r(e, { key: n }, t)));
}, W = B ? T : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = U(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		}, o = n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
		return typeof i == "object" && i && "nodeType" in i && ["enumeration", "condition"].includes(i.nodeType) ? (e) => (t) => {
			let n = o(t);
			return typeof n == "function" ? n(e) : n;
		} : o;
	}
}, G = T, K = T, q = (e, t = !0) => [
	E(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	D,
	O,
	A(e ?? p.defaultLocale),
	j,
	k,
	V,
	H,
	W,
	G,
	K
].filter(Boolean), J = (e, t) => P(e, t, q(t)), ae = (e, t = p?.locales, n = p?.defaultLocale) => {
	let r = [e].flat(), i = (e) => e.trim().toLowerCase();
	try {
		for (let e of r) {
			let n = i(e), r = t.find((e) => i(e) === n);
			if (r) return r;
			let [a] = n.split("-"), o = t.find((e) => i(e).split("-")[0] === a);
			if (o) return o;
		}
	} catch {}
	return n;
}, Y = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var oe = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, se = (e) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Y) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ce = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Y && m.storage.cookies) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, oe(r, e, i));
			} catch {}
		}
	}
}, X = {
	getCookie: (e) => document.cookie.split(";").find((t) => t.trim().startsWith(`${e}=`))?.split("=")[1],
	getLocaleStorage: (e) => localStorage.getItem(e),
	getSessionStorage: (e) => sessionStorage.getItem(e),
	isCookieEnabled: !0,
	setCookieStore: (e, t, n) => cookieStore.set({
		name: e,
		value: t,
		path: n.path,
		domain: n.domain,
		expires: n.expires,
		sameSite: n.sameSite
	}),
	setCookieString: (e, t) => {
		document.cookie = t;
	},
	setSessionStorage: (e, t) => sessionStorage.setItem(e, t),
	setLocaleStorage: (e, t) => localStorage.setItem(e, t)
}, Z = se(X), le = (e, t) => ce(e, {
	...X,
	isCookieEnabled: t
}), ue = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		!e || !t.current || t.current.currentLocale.set(e);
	}, [e]);
}, de = ({ children: e }) => (ue(), e), fe = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Q = n({
	locale: Z ?? p?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), pe = ({ locale: e, defaultLocale: t, children: n, setLocale: r, disableEditor: i, isCookieEnabled: a }) => {
	let { locales: s, defaultLocale: c } = p ?? {}, [l, d] = ee(e ?? Z ?? t ?? c);
	o(() => {
		e && e !== l && d(e);
	}, [e]), o(() => {
		fe();
	}, []);
	let f = r ?? ((e) => {
		if (l.toString() !== e.toString()) {
			if (!s?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			d(e), le(e, a);
		}
	}), m = ae(l);
	return u(Q.Provider, {
		value: {
			locale: m,
			setLocale: f,
			disableEditor: i
		},
		children: n
	});
}, $ = ({ children: e, ...t }) => d(pe, {
	...t,
	children: [u(de, {}), e]
}), me = (e, t) => {
	let { locale: n } = a(Q) ?? {};
	return s(() => J(e, t ?? n), [
		e.key,
		n,
		t
	]);
}, he = (e) => u($, { ...e });
//#endregion
//#region src/components/pages/home/UnderstandingImpact.tsx
function ge() {
	let e = me(f);
	return d("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			u("h2", {
				className: "text-2xl font-bold text-foreground",
				children: e.k
			}),
			d("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					u("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: e.p
					}),
					u("p", {
						className: "text-sm text-muted-foreground",
						children: e.e
					}),
					d("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							u("li", { children: e.h }),
							u("li", { children: e.b }),
							u("li", { children: e.c })
						]
					})
				]
			}),
			d("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					u("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: e.i
					}),
					u("p", {
						className: "text-sm text-muted-foreground",
						children: e.f
					}),
					d("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							d("li", { children: [u("strong", {
								className: "text-foreground",
								children: e.n
							}), e.g] }),
							d("li", { children: [
								u("strong", {
									className: "text-foreground",
									children: e.d
								}),
								" ",
								e.m
							] }),
							d("li", { children: [
								u("strong", {
									className: "text-foreground",
									children: e.a
								}),
								" ",
								e.l
							] })
						]
					})
				]
			}),
			d("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [u("h3", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: e.o
				}), u("p", {
					className: "text-sm text-muted-foreground",
					children: e.j
				})]
			})
		]
	});
}
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
function _e() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function ve(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
//#endregion
//#region src/components/AppProviders.tsx
function ye({ children: e, locale: n }) {
	return o(() => {
		n && (document.documentElement.lang = n);
	}, [n]), o(() => {
		_e();
	}, []), u(t, {
		id: "AppRoot",
		onRender: ve,
		children: u(he, {
			locale: n,
			children: e
		})
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function be({ children: e }) {
	return u(ye, {
		locale: "en",
		children: e
	});
}
//#endregion
//#region src/components/pages/home/UnderstandingImpact.wrapper.tsx
function xe() {
	return u(be, { children: u(ge, {}) });
}
//#endregion
export { xe as default };
