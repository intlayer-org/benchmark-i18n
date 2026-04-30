import { Dynamic as e, createComponent as t, insert as n, template as r } from "solid-js/web";
import { For as i, createContext as a, createMemo as o, useContext as s } from "solid-js";
var c = {
	key: "faq-list",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"m\":\"What is i18n Benchmark?\",\"f\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"c\":\"How are benchmarks conducted?\",\"k\":\"We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\",\"n\":\"Which libraries are currently supported?\",\"l\":\"We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\",\"a\":\"Can I submit my own benchmarks?\",\"o\":\"Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\",\"e\":\"How often are benchmarks updated?\",\"j\":\"We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\",\"g\":\"Is the data reliable?\",\"i\":\"We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\",\"b\":\"Do you offer consulting services?\",\"p\":\"Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\",\"d\":\"How can I contribute?\",\"h\":\"There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\"},\"fr\":{\"m\":\"Qu'est-ce qu'i18n Benchmark ?\",\"f\":\"i18n Benchmark est une suite de tests open source qui mesure et compare les performances, la taille du bundle et l'expérience développeur des bibliothèques d'internationalisation pour les applications JavaScript et React.\",\"c\":\"Comment les benchmarks sont-ils menés ?\",\"k\":\"Nous effectuons des tests standardisés dans des environnements isolés en utilisant un matériel cohérent. Chaque benchmark est répété plusieurs fois pour garantir une signification statistique. Toutes les configurations de test sont disponibles publiquement dans notre dépôt GitHub.\",\"n\":\"Quelles bibliothèques sont actuellement supportées ?\",\"l\":\"Nous supportons react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react et Tolgee.\",\"a\":\"Puis-je soumettre mes propres benchmarks ?\",\"o\":\"Oui ! Les soumissions de benchmarks par la communauté sont les bienvenues. Forkez notre dépôt, ajoutez votre benchmark en suivant notre guide de contribution et soumettez une pull request. Notre équipe examinera et fusionnera les soumissions qualifiées.\",\"e\":\"À quelle fréquence les benchmarks sont-ils mis à jour ?\",\"j\":\"Nous relançons tous les benchmarks chaque semaine avec les dernières versions stables de chaque bibliothèque. Les sorties de versions majeures déclenchent un cycle de re-benchmarking immédiat.\",\"g\":\"Les données sont-elles fiables ?\",\"i\":\"Nous suivons une méthodologie statistique rigoureuse, incluant des phases de préchauffage, la détection des valeurs aberrantes et des intervalles de confiance. Toutes les données brutes sont publiées avec notre analyse pour une transparence totale.\",\"b\":\"Offrez-vous des services de conseil ?\",\"p\":\"Oui, notre offre Enterprise inclut des heures de conseil pour les équipes évaluant les solutions i18n. Nous pouvons fournir des recommandations personnalisées basées sur votre cas d'utilisation, votre échelle et vos contraintes spécifiques.\",\"d\":\"Comment puis-je contribuer ?\",\"h\":\"Il y a de nombreuses façons de contribuer : soumettre des benchmarks, améliorer la documentation, signaler des bugs, suggérer de nouvelles métriques ou parrainer le projet. Visitez notre dépôt GitHub pour plus de détails.\"},\"es\":{\"m\":\"¿Qué es i18n Benchmark?\",\"f\":\"i18n Benchmark es una suite de benchmarking de código abierto que mide и compara el rendimiento, el tamaño del bundle и la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript и React.\",\"c\":\"¿Cómo se realizan los benchmarks?\",\"k\":\"Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para garantizar la significación estadística. Todas las configuraciones de prueba están disponibles públicamente en nuestro repositorio de GitHub.\",\"n\":\"¿Qué bibliotecas son compatibles actualmente?\",\"l\":\"Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.\",\"a\":\"¿Puedo enviar mis propios benchmarks?\",\"o\":\"¡Sí! Las presentaciones de benchmarks de la comunidad son bienvenidas. Bifurque nuestro repositorio, agregue su benchmark siguiendo nuestra guía de contribución и envíe una solicitud de extracción. Nuestro equipo revisará и fusionará las presentaciones que califiquen.\",\"e\":\"¿Con qué frecuencia se aktualizan los benchmarks?\",\"j\":\"Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.\",\"g\":\"¿Son confiables los datos?\",\"i\":\"Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.\",\"b\":\"¿Ofrecen servicios de consultoría?\",\"p\":\"Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso, escala и limitaciones específicos.\",\"d\":\"¿Cómo puedo contribuir?\",\"h\":\"Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para obtener más detalles.\"},\"de\":{\"m\":\"Was ist i18n Benchmark?\",\"f\":\"i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.\",\"c\":\"Wie werden Benchmarks durchgeführt?\",\"k\":\"Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrmals wiederholt, um die statistische Signifikanz sicherzustellen. Alle Testkonfigurationen sind in unserem GitHub-Repository öffentlich verfügbar.\",\"n\":\"Welche Bibliotheken werden derzeit unterstützt?\",\"l\":\"Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.\",\"a\":\"Kann ich meine eigenen Benchmarks einreichen?\",\"o\":\"Ja! Einreichungen von Community-Benchmarks sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird qualifizierte Einreichungen prüfen und zusammenführen.\",\"e\":\"Wie oft werden Benchmarks aktualisiert?\",\"j\":\"Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut durch. Veröffentlichungen von Hauptversionen lösen einen sofortigen Re-Benchmark-Zyklus aus.\",\"g\":\"Sind die Daten zuverlässig?\",\"i\":\"Wir folgen einer strengen statistischen Methodik, einschließlich Aufwärmläufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.\",\"b\":\"Bieten Sie Beratungsdienstleistungen an?\",\"p\":\"Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Umfang und Ihren Einschränkungen geben.\",\"d\":\"Wie kann ich beitragen?\",\"h\":\"Es gibt viele Möglichkeiten, beizutragen: Benchmarks einreichen, die Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.\"},\"it\":{\"m\":\"Cos'è i18n Benchmark?\",\"f\":\"i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.\",\"c\":\"Come vengono condotti i benchmark?\",\"k\":\"Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub.\",\"n\":\"Quali librerie sono attualmente supportate?\",\"l\":\"Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\",\"a\":\"Posso inviare i miei benchmark?\",\"o\":\"Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.\",\"e\":\"Con quale frequenza vengono aggiornati i benchmark?\",\"j\":\"Rieseguiamo tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. I rilasci di versioni principali innescano un ciclo di re-benchmark immediato.\",\"g\":\"I dati sono affidabili?\",\"i\":\"Seguiamo una rigorosa metodologia statistica che include esecuzioni di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per la massima trasparenza.\",\"b\":\"Offrite servizi di consulenza?\",\"p\":\"Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano soluzioni i18n. Possiamo fornire raccomandazioni personalizzate in base al caso d'uso specifico, alla scala e ai vincoli.\",\"d\":\"Come posso contribuire?\",\"h\":\"Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.\"},\"pt\":{\"m\":\"O que é o i18n Benchmark?\",\"f\":\"i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor de bibliotecas de internacionalização para aplicações JavaScript e React.\",\"c\":\"Como os benchmarks são conduzidos?\",\"k\":\"Executamos testes padronizzati em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório GitHub.\",\"n\":\"Quais bibliotecas são suportadas atualmente?\",\"l\":\"Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\",\"a\":\"Posso enviar meus próprios benchmarks?\",\"o\":\"Sim! As submissões de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.\",\"e\":\"Com que frequência os benchmarks são atualizados?\",\"j\":\"Executamos novamente todos os benchmarks semanalmente com as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais desencadeiam um ciclo imediato de re-benchmarking.\",\"g\":\"Os dados são confiáveis?\",\"i\":\"Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de outliers e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.\",\"b\":\"Vocês oferecem serviços de consultoria?\",\"p\":\"Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base em seu caso de uso, escala e restrições específicos.\",\"d\":\"Como posso contribuir?\",\"h\":\"Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentazione, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para mais detalhes.\"},\"zh\":{\"m\":\"什么是 i18n Benchmark？\",\"f\":\"i18n Benchmark 是一个开源基准测试套件，用于衡量和比较 JavaScript 和 React 应用程序国际化库的性能、捆绑包大小和开发人员体验。\",\"c\":\"基准测试是如何进行的？\",\"k\":\"我们在隔离的环境中使用一致的硬件运行标准化测试。每个基准测试都会重复多次，以确保统计显着性。所有测试配置都可以在我们的 GitHub 存储库中公开获取。\",\"n\":\"目前支持哪些库？\",\"l\":\"我们支持 react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react 和 Tolgee。\",\"a\":\"我可以提交自己的基准测试吗？\",\"o\":\"是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审核并合并合格的提交。\",\"e\":\"基准测试多久更新一次？\",\"j\":\"我们每周会根据每个库的最新稳定版本重新运行所有基准测试。主要版本的发布会立即触发重新基准测试周期。\",\"g\":\"数据可靠吗？\",\"i\":\"我们遵循严格的统计方法，包括热身运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以确保完全透明。\",\"b\":\"你们提供咨询服务吗？\",\"p\":\"是的，我们的企业计划为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和约束提供定制建议。\",\"d\":\"我该如何贡献？\",\"h\":\"有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。\"},\"ja\":{\"m\":\"i18n Benchmarkとは何ですか？\",\"f\":\"i18n Benchmarkは、JavaScriptおよびReactアプリケーション用の国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者エクスペリエンスを測定および比較するオープンソースのベンチマークスイートです。\",\"c\":\"ベンチマークはどのように行われますか？\",\"k\":\"一貫したハードウェアを使用して、分離された環境で標準化されたテストを実行します。各ベンチマークは、統計的な有意性を確保するために複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。\",\"n\":\"現在サポートされているライブラリは何ですか？\",\"l\":\"react-i18next、react-intl（FormatJS）、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。\",\"a\":\"独自のベンチマークを送信できますか？\",\"o\":\"はい！コミュニティからのベンチマーク送信は大歓迎です。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。私たちのチームが、資格のある送信内容をレビューしてマージします。\",\"e\":\"ベンチマークはどのくらいの頻度で更新されますか？\",\"j\":\"各ライブラリの最新の安定版に対して、すべてのベンチマークを毎週再実行します。メジャーバージョンのリリースにより、即座に再ベンチマークサイクルが実行されます。\",\"g\":\"データは信頼できますか？\",\"i\":\"ウォームアップ実行、外れ値検出、信頼区間などの厳密な統計的手法に従います。すべての生データは、完全な透明性のために分析結果とともに公開されます。\",\"b\":\"コンサルティングサービスは提供していますか？\",\"p\":\"はい、エンタープライズプランには、i18nソリューションを検討しているチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。\",\"d\":\"どのように貢献できますか？\",\"h\":\"貢献する方法はたくさんあります：ベンチマークの送信、ドキュメントの改善、バグの報告、新しい指標の提案、プロジェクトのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。\"},\"ko\":{\"m\":\"i18n Benchmark란 무엇인가요?\",\"f\":\"i18n Benchmark는 JavaScript 및 React 애플리케이션용 국제화 라이브러리의 성능, 번들 크기 및 개발자 경험을 측정하고 비교하는 오픈 소스 벤치마킹 제품군입니다.\",\"c\":\"벤치마크는 어떻게 진행되나요?\",\"k\":\"일관된 하드웨어를 사용하여 격리된 환경에서 표준화된 테스트를 실행합니다. 각 벤치마크는 통계적 유의성을 보장하기 위해 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 저장소에 공개적으로 제공됩니다.\",\"n\":\"현재 어떤 라이브러리가 지원되나요?\",\"l\":\"react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 및 Tolgee를 지원합니다.\",\"a\":\"나만의 벤치마크를 제출할 수 있나요?\",\"o\":\"네! 커뮤니티 벤치마크 제출을 환영합니다. 리포지토리를 포크하고 기여 가이드에 따라 벤치마크를 추가한 다음 풀 리퀘스트를 제출하세요. 저희 팀이 자격이 있는 제출물을 검토하고 병합할 것입니다.\",\"e\":\"벤치마크는 얼마나 자주 업데이트되나요?\",\"j\":\"매주 각 라이브러리의 최신 안정 버전을 기준으로 모든 벤치마크를 다시 실행합니다. 주요 버전이 릴리스되면 즉시 재벤치마크 주기가 시작됩니다.\",\"g\":\"데이터가 신뢰할 수 있나요?\",\"i\":\"웜업 실행, 이상치 탐지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 모든 원시 데이터는 완전한 투명성을 위해 분석 결과와 함께 게시됩니다.\",\"b\":\"컨설팅 서비스를 제공하나요?\",\"p\":\"네, 엔터프라이즈 플랜에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 특정 사용 사례, 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다.\",\"d\":\"어떻게 기여할 수 있나요?\",\"h\":\"기여할 수 있는 방법은 많습니다. 벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 또는 프로젝트 후원 등이 있습니다. 자세한 내용은 GitHub 저장소를 방문하세요.\"},\"ru\":{\"m\":\"Что такое i18n Benchmark?\",\"f\":\"i18n Benchmark — это открытый набор тестов производительности, который измеряет и сравнивает производительность, размер бандла и опыт разработки библиотек интернационализации для приложений на JavaScript и React.\",\"c\":\"Как проводятся бенчмарки?\",\"k\":\"Мы проводим стандартизированные тесты в изолированных средах на одинаковом оборудовании. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов открыты в нашем репозитории на GitHub.\",\"n\":\"Какие библиотеки поддерживаются в данный момент?\",\"l\":\"Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.\",\"a\":\"Могу ли я отправить свои собственные бенчмарки?\",\"o\":\"Да! Мы приветствуем отправку бенчмарков от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк в соответствии с нашим руководством по внесению вклада и создайте pull request. Наша команда рассмотрит и примет подходящие заявки.\",\"e\":\"Как часто обновляются бенчмарки?\",\"j\":\"Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Релизы основных версий запускают немедленный цикл повторного тестирования.\",\"g\":\"Надежны ли данные?\",\"i\":\"Мы придерживаемся строгой статистической методологии, включая прогревочные прогоны, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с нашим анализом для полной прозрачности.\",\"b\":\"Предоставляете ли вы консалтинговые услуги?\",\"p\":\"Да, наш план Enterprise включает консультации для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации, основанные на вашем конкретном случае, масштабе и ограничениях.\",\"d\":\"Как я могу внести свой вклад?\",\"h\":\"Есть много способов внести свой вклад: отправить бенчмарки, улучшить документацию, сообщить об ошибках, предложить новые метрики или стать спонсором проекта. Посетите наш репозиторий на GitHub для получения более подробной информации.\"}}}")
}, l = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
}, u = (t) => {
	if (typeof t == "string") return t;
	let { type: n, props: r } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let t = [], { children: n } = e.props;
			return Object.keys(n ?? {}).forEach((e) => {
				t.push(u(n?.[e]));
			}), {
				...e,
				props: {
					...e.props,
					children: t
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
	})(t);
	return e({
		component: n ?? "span",
		...r,
		children: r.children
	});
}, d = {
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
}, f = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, p = "translation", m = "object", h = "array", g = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => g(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => g(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: h,
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
					type: m,
					key: r
				}]
			}, i = g(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, _ = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, v = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (_(e) && _(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : v(e[r], t[r]));
		return n;
	}
	return e;
}, y = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => v(e, t));
}, b = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, x = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? b : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: p,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return y(o, e, t);
	}
}, S = b, C = b, w = b, T = b, E = (e) => b, D = b, O = (e, t = !0) => [
	x(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
	S,
	C,
	w,
	E(e ?? d.defaultLocale),
	D,
	T
], k = (e, t, n = []) => g(e, {
	...t,
	plugins: n
}), A = (e, t, n = O(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return k(e.content, r, n);
}, j = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => l({
		...n,
		value: n.children,
		children: n.children
	})
}, M = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? b : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (e, { plugins: t, ...n }) => l({
		...n,
		value: "[[solid-element]]",
		children: typeof Node < "u" && e instanceof Node ? e : u(e)
	})
}, N = b, P = b, F = b, I = /* @__PURE__ */ new Map(), L = (e, t = !0) => {
	let n = `${e ?? d.defaultLocale}_${t}`;
	if (I.has(n)) return I.get(n);
	let r = [
		x(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
		S,
		C,
		E(e ?? d.defaultLocale),
		D,
		T,
		j,
		M,
		N,
		P,
		F
	];
	return I.set(n, r), r;
}, R = (e, t) => A(e, t, L(t)), z = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var B = (e = V) => {
	let { locales: t } = d;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!z) for (let t = 0; t < (f.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(f.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, V = {
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
}, H = B(V), U = a({
	locale: () => H ?? d?.defaultLocale,
	setLocale: () => null
}), W = (e, t) => {
	let n = s(U) ?? {};
	return o(() => R(e, t ?? n?.locale?.()));
}, G = r("<div class=\"mx-auto max-w-3xl space-y-4\">"), K = r("<details class=\"group rounded-lg border border-border bg-card\"><summary class=\"cursor-pointer px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/50\"></summary><p class=\"px-6 pb-4 text-sm text-muted-foreground\">");
function q() {
	let e = W(c), r = [
		{
			q: e().whatIsI18nBenchmark.value,
			a: e().i18nBenchmarkIsAnOpen.value
		},
		{
			q: e().howAreBenchmarksConducted.value,
			a: e().weRunStandardizedTestsIn.value
		},
		{
			q: e().whichLibrariesAreCurrentlySupported.value,
			a: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee."
		},
		{
			q: e().canISubmitMyOwn.value,
			a: e().yesCommunityBenchmarkSubmissionsAre.value
		},
		{
			q: e().howOftenAreBenchmarksUpdated.value,
			a: e().weReRunAllBenchmarks.value
		},
		{
			q: e().isTheDataReliable.value,
			a: e().weFollowRigorousStatisticalMethodology.value
		},
		{
			q: e().doYouOfferConsultingServices.value,
			a: e().yesOurEnterprisePlanIncludes.value
		},
		{
			q: e().howCanIContribute.value,
			a: e().thereAreManyWaysTo.value
		}
	];
	return (() => {
		var e = G();
		return n(e, t(i, {
			each: r,
			children: (e) => (() => {
				var t = K(), r = t.firstChild, i = r.nextSibling;
				return n(r, () => e.q), n(i, () => e.a), t;
			})()
		})), e;
	})();
}
export { q as default };
