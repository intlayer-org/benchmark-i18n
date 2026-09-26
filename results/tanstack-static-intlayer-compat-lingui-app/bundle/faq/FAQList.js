import { Fragment, createContext, createElement, isValidElement, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var faq_list_default = {
	key: "faq-list",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"canISubmitMyOwn\":\"Can I submit my own benchmarks?\",\"doYouOfferConsultingServices\":\"Do you offer consulting services?\",\"howAreBenchmarksConducted\":\"How are benchmarks conducted?\",\"howCanIContribute\":\"How can I contribute?\",\"howOftenAreBenchmarksUpdated\":\"How often are benchmarks updated?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"isTheDataReliable\":\"Is the data reliable?\",\"thereAreManyWaysTo\":\"There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\",\"weFollowRigorousStatisticalMethodology\":\"We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\",\"weReRunAllBenchmarks\":\"We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\",\"weRunStandardizedTestsIn\":\"We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\",\"weSupportReactI18nextReact\":\"We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\",\"whatIsI18nBenchmark\":\"What is i18n Benchmark?\",\"whichLibrariesAreCurrentlySupported\":\"Which libraries are currently supported?\",\"yesOurEnterprisePlanIncludes\":\"Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\",\"yesCommunityBenchmarkSubmissionsAre\":\"Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\"},\"fr\":{\"canISubmitMyOwn\":\"Puis-je soumettre mes propres benchmarks ?\",\"doYouOfferConsultingServices\":\"Proposez-vous des services de conseil ?\",\"howAreBenchmarksConducted\":\"Comment les benchmarks sont-ils menés ?\",\"howCanIContribute\":\"Comment puis-je contribuer ?\",\"howOftenAreBenchmarksUpdated\":\"À quelle fréquence les benchmarks sont-ils mis à jour ?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark est une suite de tests open source qui mesure et compare les performances, la taille des bundles et l'expérience développeur des bibliothèques d'internationalisation pour les applications JavaScript et React.\",\"isTheDataReliable\":\"Les données sont-elles fiables ?\",\"thereAreManyWaysTo\":\"Il existe de nombreuses façons de contribuer : proposer des benchmarks, améliorer la documentation, signaler des bugs, suggérer de nouvelles métriques ou sponsoriser le projet. Consultez notre dépôt GitHub pour plus de détails.\",\"weFollowRigorousStatisticalMethodology\":\"Nous suivons une méthodologie statistique rigoureuse incluant des phases de préchauffage, la détection des valeurs aberrantes et des intervalles de confiance. Toutes les données brutes sont publiées avec l'analyse pour une transparence totale.\",\"weReRunAllBenchmarks\":\"Nous réexécutons tous les benchmarks chaque semaine pour les dernières versions stables de chaque bibliothèque. Les versions majeures déclenchent un cycle de retraitement immédiat.\",\"weRunStandardizedTestsIn\":\"Nous effectuons des tests standardisés dans des environnements isolés avec un matériel identique. Chaque benchmark est répété plusieurs fois pour garantir sa pertinence statistique. Toutes les configurations de test sont publiques sur notre dépôt GitHub.\",\"weSupportReactI18nextReact\":\"Nous supportons react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react et Tolgee.\",\"whatIsI18nBenchmark\":\"Qu'est-ce que i18n Benchmark ?\",\"whichLibrariesAreCurrentlySupported\":\"Quelles bibliothèques sont actuellement supportées ?\",\"yesOurEnterprisePlanIncludes\":\"Oui, notre offre Entreprise comprend des heures de conseil pour les équipes évaluant des solutions i18n. Nous pouvons fournir des recommandations personnalisées basées sur votre cas d'utilisation, votre échelle et vos contraintes.\",\"yesCommunityBenchmarkSubmissionsAre\":\"Oui ! Nous accueillons avec plaisir les soumissions de benchmarks de la communauté. Veuillez forker le dépôt, ajouter votre benchmark en suivant notre guide de contribution, et soumettre une pull request. Notre équipe examinera et fusionnera les soumissions qualifiées.\"},\"es\":{\"canISubmitMyOwn\":\"¿Puedo enviar mis propios benchmarks?\",\"doYouOfferConsultingServices\":\"¿Ofrecen servicios de consultoría?\",\"howAreBenchmarksConducted\":\"¿Cómo se realizan los benchmarks?\",\"howCanIContribute\":\"¿Cómo puedo contribuir?\",\"howOftenAreBenchmarksUpdated\":\"¿Con qué frecuencia se actualizan los benchmarks?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización.\",\"isTheDataReliable\":\"¿Son fiables los datos?\",\"thereAreManyWaysTo\":\"Existen muchas formas de implementar la internacionalización, y cada una tiene sus propias compensaciones en cuanto a rendimiento y experiencia del desarrollador.\",\"weFollowRigorousStatisticalMethodology\":\"Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza.\",\"weReRunAllBenchmarks\":\"Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables.\",\"weRunStandardizedTestsIn\":\"Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente.\",\"weSupportReactI18nextReact\":\"Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.\",\"whatIsI18nBenchmark\":\"¿Qué es i18n Benchmark?\",\"whichLibrariesAreCurrentlySupported\":\"¿Qué bibliotecas están soportadas actualmente?\",\"yesOurEnterprisePlanIncludes\":\"Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones de i18n.\",\"yesCommunityBenchmarkSubmissionsAre\":\"¡Sí! Damos la bienvenida a las contribuciones de la comunidad. Por favor, haz un fork del repositorio y envía un pull request.\"},\"de\":{\"canISubmitMyOwn\":\"Kann ich meine eigenen Benchmarks einreichen?\",\"doYouOfferConsultingServices\":\"Bieten Sie Beratungsdienstleistungen an?\",\"howAreBenchmarksConducted\":\"Wie werden Benchmarks durchgeführt?\",\"howCanIContribute\":\"Wie kann ich beitragen?\",\"howOftenAreBenchmarksUpdated\":\"Wie oft werden Benchmarks aktualisiert?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, Bundle-Größe und Entwicklererfahrung von Internationalisierungs-Bibliotheken misst und vergleicht.\",\"isTheDataReliable\":\"Sind die Daten zuverlässig?\",\"thereAreManyWaysTo\":\"Es gibt viele Möglichkeiten, zur Internationalisierung beizutragen, von der Meldung von Fehlern bis hin zur Einreichung neuer Benchmark-Szenarien.\",\"weFollowRigorousStatisticalMethodology\":\"Wir folgen einer strengen statistischen Methodik, die Aufwärmphasen, Ausreißererkennung und Konfidenzintervalle umfasst.\",\"weReRunAllBenchmarks\":\"Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut durch.\",\"weRunStandardizedTestsIn\":\"Wir führen standardisierte Tests in isolierten Umgebungen unter Verwendung konsistenter Hardware durch.\",\"weSupportReactI18nextReact\":\"Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.\",\"whatIsI18nBenchmark\":\"Was ist i18n Benchmark?\",\"whichLibrariesAreCurrentlySupported\":\"Welche Bibliotheken werden derzeit unterstützt?\",\"yesOurEnterprisePlanIncludes\":\"Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren.\",\"yesCommunityBenchmarkSubmissionsAre\":\"Ja! Community-Benchmark-Einreichungen sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Beitragsleitfaden hinzu und reichen Sie einen Pull-Request ein.\"},\"it\":{\"canISubmitMyOwn\":\"Posso inviare i miei benchmark?\",\"doYouOfferConsultingServices\":\"Offrite servizi di consulenza ?\",\"howAreBenchmarksConducted\":\"Come vengono condotti i benchmark?\",\"howCanIContribute\":\"Come posso contribuire?\",\"howOftenAreBenchmarksUpdated\":\"Quanto spesso vengono aggiornati i benchmark?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark è una suite di benchmarking open-source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione.\",\"isTheDataReliable\":\"I dati sono affidabili?\",\"thereAreManyWaysTo\":\"Ci sono molti modi per contribuire al progetto.\",\"weFollowRigorousStatisticalMethodology\":\"Seguiamo una rigorosa metodologia statistica che include fasi di riscaldamento, rilevamento di valori anomali e intervalli di confidenza.\",\"weReRunAllBenchmarks\":\"Eseguiamo nuovamente tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ciascuna libreria.\",\"weRunStandardizedTestsIn\":\"Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente.\",\"weSupportReactI18nextReact\":\"Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\",\"whatIsI18nBenchmark\":\"Cos'è i18n Benchmark?\",\"whichLibrariesAreCurrentlySupported\":\"Quali librerie sono attualmente supportate?\",\"yesOurEnterprisePlanIncludes\":\"Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano le soluzioni i18n.\",\"yesCommunityBenchmarkSubmissionsAre\":\"Sì! Siamo aperti ai contributi della community. Fai un fork della repository e invia una pull request.\"},\"pt\":{\"canISubmitMyOwn\":\"Posso enviar meus próprios benchmarks?\",\"doYouOfferConsultingServices\":\"Vocês oferecem serviços de consultoria?\",\"howAreBenchmarksConducted\":\"Como os benchmarks são conduzidos?\",\"howCanIContribute\":\"Como posso contribuir?\",\"howOftenAreBenchmarksUpdated\":\"Com que frequência os benchmarks são atualizados?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do pacote e a experiência do desenvolvedor das bibliotecas de internacionalização para aplicativos JavaScript e React.\",\"isTheDataReliable\":\"Os dados são confiáveis?\",\"thereAreManyWaysTo\":\"Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para obter detalhes.\",\"weFollowRigorousStatisticalMethodology\":\"Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de valores atípicos e intervalos de confiança. Todos os dados brutos são publicados com a análise para total transparência.\",\"weReRunAllBenchmarks\":\"Executamos novamente todos os benchmarks semanalmente contra as últimas versões estáveis de cada biblioteca. Os lançamentos de versões principais acionam um ciclo de re-benchmarking imediato.\",\"weRunStandardizedTestsIn\":\"Executamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório GitHub.\",\"weSupportReactI18nextReact\":\"Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\",\"whatIsI18nBenchmark\":\"O que é o i18n Benchmark?\",\"whichLibrariesAreCurrentlySupported\":\"Quais bibliotecas são suportadas atualmente?\",\"yesOurEnterprisePlanIncludes\":\"Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base no seu caso de uso específico, escala e restrições.\",\"yesCommunityBenchmarkSubmissionsAre\":\"Sim! Congratulamo-nos com o envio de benchmarks da comunidade. Por favor, faça um fork do repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe analisará e mesclará envios qualificados.\"},\"zh\":{\"canISubmitMyOwn\":\"我可以提交自己的基准测试吗？\",\"doYouOfferConsultingServices\":\"你们提供咨询服务吗？\",\"howAreBenchmarksConducted\":\"基准测试是如何进行的？\",\"howCanIContribute\":\"我如何贡献？\",\"howOftenAreBenchmarksUpdated\":\"基准测试多久更新一次？\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark 是一个开源基准测试套件，用于测量和比较 JavaScript 和 React 应用程序的国际化库的性能、包大小和开发人员体验。\",\"isTheDataReliable\":\"数据可靠吗？\",\"thereAreManyWaysTo\":\"有很多贡献方式：提交基准测试、改进文档、报告 bug、提出新指标或赞助项目。详情请访问我们的 GitHub 仓库。\",\"weFollowRigorousStatisticalMethodology\":\"我们遵循严谨的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都会随分析报告一起发布，以确保完全透明。\",\"weReRunAllBenchmarks\":\"我们每周针对每个库的最新稳定版本重新运行所有基准测试。主版本发布会触发立即的基准测试周期。\",\"weRunStandardizedTestsIn\":\"我们使用一致的硬件在隔离环境中运行标准化测试。每个基准测试都会重复多次以确保统计显著性。所有测试配置都在我们的 GitHub 仓库中公开。\",\"weSupportReactI18nextReact\":\"我们支持 react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react 和 Tolgee。\",\"whatIsI18nBenchmark\":\"什么是 i18n Benchmark？\",\"whichLibrariesAreCurrentlySupported\":\"目前支持哪些库？\",\"yesOurEnterprisePlanIncludes\":\"是的，我们的企业版计划为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和约束提供量身定制的建议。\",\"yesCommunityBenchmarkSubmissionsAre\":\"是的！我们欢迎社区提交基准测试。请点击 Fork 仓库，按照我们的贡献指南添加您的基准测试，并提交 Pull Request。我们的团队将审核并合并合格的提交。\"},\"ja\":{\"canISubmitMyOwn\":\"独自のベンチマークを提出できますか？\",\"doYouOfferConsultingServices\":\"コンサルティングサービスは提供していますか？\",\"howAreBenchmarksConducted\":\"ベンチマークはどのように行われますか？\",\"howCanIContribute\":\"どのように貢献できますか？\",\"howOftenAreBenchmarksUpdated\":\"ベンチマークはどのくらいの頻度で更新されますか？\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmarkは、JavaScriptおよびReactアプリケーション向けの国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者エクスペリエンスを測定および比較するオープンソースのベンチマークスイートです。\",\"isTheDataReliable\":\"データは信頼できますか？\",\"thereAreManyWaysTo\":\"貢献する方法はたくさんあります。ベンチマークの提出、ドキュメントの改善、バグ報告、新しい指標の提案、またはプロジェクトのスポンサーなどです。詳細については、GitHubリポジトリをご覧ください。\",\"weFollowRigorousStatisticalMethodology\":\"ウォームアップ実行、外れ値検出、信頼区間を含む厳密な統計手法に従います。すべての生データは、完全な透明性のために分析と共に公開されます。\",\"weReRunAllBenchmarks\":\"各ライブラリの最新の安定バージョンに対して毎週すべてのベンチマークを再実行します。メジャーバージョンのリリースにより、即時の再ベンチマークサイクルが開始されます。\",\"weRunStandardizedTestsIn\":\"一貫したハードウェアを使用して、隔離された環境で標準化されたテストを実行します。各ベンチマークは統計的な有意性を確保するために複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。\",\"weSupportReactI18nextReact\":\"react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。\",\"whatIsI18nBenchmark\":\"i18n Benchmarkとは何ですか？\",\"whichLibrariesAreCurrentlySupported\":\"現在、どのライブラリがサポートされていますか？\",\"yesOurEnterprisePlanIncludes\":\"はい、エンタープライズプランには、i18nソリューションを評価するチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、および制約に基づいてカスタマイズされた推奨事項を提供できます。\",\"yesCommunityBenchmarkSubmissionsAre\":\"はい！コミュニティからのベンチマーク提出を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。私たちのチームが適格な提出物をレビューしてマージします。\"},\"ko\":{\"canISubmitMyOwn\":\"함께 벤치마크를 제출할 수 있나요?\",\"doYouOfferConsultingServices\":\"컨설팅 서비스를 제공하나요?\",\"howAreBenchmarksConducted\":\"벤치마크는 어떻게 진행되나요?\",\"howCanIContribute\":\"어떻게 기여할 수 있나요?\",\"howOftenAreBenchmarksUpdated\":\"벤치마크는 얼마나 자주 업데이트되나요?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark는 JavaScript 및 React 애플리케이션을 위한 국제화 라이브러리의 성능, 번들 크기 및 개발자 경험을 측정하고 비교하는 오픈 소스 벤치마킹 제품군입니다.\",\"isTheDataReliable\":\"데이터를 신뢰할 수 있나요?\",\"thereAreManyWaysTo\":\"벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 등 기여할 수 있는 방법은 많습니다. 자세한 내용은 GitHub 리포지토리를 방문하세요.\",\"weFollowRigorousStatisticalMethodology\":\"저희는 웜업(warm-up) 실행, 이상치 감지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 모든 원시 데이터는 완전한 투명성을 위해 분석과 함께 공개됩니다.\",\"weReRunAllBenchmarks\":\"매주 각 라이브러리의 최신 안정 버전에 대해 모든 벤치마크를 다시 실행합니다. 메이저 버전 릴리스는 즉각적인 재벤치마크 주기를 트리거합니다.\",\"weRunStandardizedTestsIn\":\"일관된 하드웨어를 사용하여 격리된 환경에서 표준화된 테스트를 실행합니다. 각 벤치마크는 통계적 유의성을 보장하기 위해 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 리포지토리에서 공개적으로 사용할 수 있습니다.\",\"weSupportReactI18nextReact\":\"react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 및 Tolgee를 지원합니다.\",\"whatIsI18nBenchmark\":\"i18n Benchmark란 무엇인가요?\",\"whichLibrariesAreCurrentlySupported\":\"현재 어떤 라이브러리가 지원되나요?\",\"yesOurEnterprisePlanIncludes\":\"예, 엔터프라이즈 플랜에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다.\",\"yesCommunityBenchmarkSubmissionsAre\":\"네! 커뮤니티의 벤치마크 제출을 환영합니다. 리포지토리를 포크하고 기여 가이드에 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출해 주세요. 저희 팀이 제출물을 검토하고 병합할 것입니다.\"},\"ru\":{\"canISubmitMyOwn\":\"Могу ли я предложить свой бенчмарк?\",\"doYouOfferConsultingServices\":\"Предоставляете ли вы консалтинговые услуги?\",\"howAreBenchmarksConducted\":\"Как проводятся бенчмарки?\",\"howCanIContribute\":\"Как я могу внести свой вклад?\",\"howOftenAreBenchmarksUpdated\":\"Как часто обновляются бенчмарки?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark — это открытый набор тестов, который измеряет и сравнивает производительность, размер пакета и опыт разработчика библиотек интернационализации для приложений на JavaScript и React.\",\"isTheDataReliable\":\"Надежны ли данные?\",\"thereAreManyWaysTo\":\"Есть много способов внести свой вклад: предложить бенчмарки, улучшить документацию, сообщить о багах, предложить новые метрики или стать спонсором проекта. Посетите наш репозиторий GitHub для получения подробной информации.\",\"weFollowRigorousStatisticalMethodology\":\"Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с анализом для полной прозрачности.\",\"weReRunAllBenchmarks\":\"Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выпуски основных версий запускают немедленный цикл повторного тестирования.\",\"weRunStandardizedTestsIn\":\"Мы проводим стандартизированные тесты в изолированных средах с использованием одинакового оборудования. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории GitHub.\",\"weSupportReactI18nextReact\":\"Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.\",\"whatIsI18nBenchmark\":\"Что такое i18n Benchmark?\",\"whichLibrariesAreCurrentlySupported\":\"Какие библиотеки поддерживаются в данный момент?\",\"yesOurEnterprisePlanIncludes\":\"Да, наш план Enterprise включает консультационные часы для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации на основе вашего конкретного случая использования, масштаба и ограничений.\",\"yesCommunityBenchmarkSubmissionsAre\":\"Да! Мы приветствуем бенчмарки от сообщества. Пожалуйста, сделайте форк репозитория, добавьте свой бенчмарк, следуя нашему руководству по вкладу, и отправьте pull request. Наша команда рассмотрит и примет подходящие предложения.\"}}}")
};
var LinguiContext = createContext(null);
var EventEmitter = class {
	_events = /* @__PURE__ */ new Map();
	on(event, listener) {
		if (!this._events.has(event)) this._events.set(event, /* @__PURE__ */ new Set());
		this._events.get(event).add(listener);
		return () => this.removeListener(event, listener);
	}
	removeListener(event, listener) {
		this._events.get(event)?.delete(listener);
	}
	emit(event, ...args) {
		this._events.get(event)?.forEach((listener) => {
			listener(...args);
		});
	}
};
var navigateCatalog = (catalog, id) => {
	if (!id) return catalog;
	if (catalog === null || typeof catalog !== "object") return void 0;
	const flatValue = catalog[id];
	if (flatValue !== void 0) return flatValue;
	if (!id.includes(".")) return void 0;
	let current = catalog;
	for (const part of id.split(".")) {
		if (current === null || current === void 0 || typeof current !== "object") return;
		current = current[part];
	}
	return current;
};
var unwrapLinguiCatalog = (catalog) => {
	if (!catalog || typeof catalog !== "object") return {};
	const wrapped = catalog.messages;
	if (wrapped && typeof wrapped === "object") return wrapped;
	return catalog;
};
var navigateLinguiCatalog = (catalog, id) => {
	const direct = navigateCatalog(catalog, id);
	if (direct !== void 0) return direct;
	if (catalog && typeof catalog === "object") {
		const wrapped = catalog.messages;
		if (wrapped && typeof wrapped === "object") return navigateCatalog(wrapped, id);
	}
};
var tokenToIcu = (token) => {
	if (typeof token === "string") return token;
	if (!Array.isArray(token)) return "";
	const [name, type, format] = token;
	if (type === void 0) return `{${String(name)}}`;
	if (type === "plural" || type === "select" || type === "selectordinal") {
		const options = format ?? {};
		const segments = [];
		let offsetSegment = "";
		for (const [category, value] of Object.entries(options)) {
			if (category === "offset") {
				offsetSegment = `offset:${String(value)} `;
				continue;
			}
			segments.push(`${category} {${linguiMessageToIcu(value)}}`);
		}
		return `{${String(name)}, ${type}, ${offsetSegment}${segments.join(" ")}}`;
	}
	return format !== void 0 ? `{${String(name)}, ${type}, ${String(format)}}` : `{${String(name)}, ${type}}`;
};
var linguiMessageToIcu = (compiled) => {
	if (typeof compiled === "string") return compiled;
	if (!Array.isArray(compiled)) return String(compiled ?? "");
	return compiled.map(tokenToIcu).join("");
};
var TRANSLATION = "translation";
var ENUMERATION = "enumeration";
var PLURAL = "plural";
var CONDITION = "condition";
var INSERTION = "insertion";
var OBJECT = "object";
var ARRAY = "array";
var MARKDOWN = "markdown";
var HTML = "html";
var GENDER = "gender";
var SELECT = "select";
var formatNodeType = (nodeType, content, additionalAttributes) => ({
	...additionalAttributes,
	nodeType,
	[nodeType]: content
});
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
var enumeration = (content) => formatNodeType(ENUMERATION, content);
var gender = (content) => formatNodeType(GENDER, content);
var parseAttributes = (attributesString) => {
	const attributes = {};
	if (!attributesString?.trim()) return attributes;
	[...attributesString.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((match) => {
		const attrName = match[1];
		attributes[attrName] = "string";
	});
	return attributes;
};
var getHTMLCustomComponents = (content) => {
	if (typeof content !== "string") throw new Error("content must be a string");
	const matches = [...content.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)];
	const components = {};
	matches.forEach((match) => {
		const isClosing = !!match[1];
		const tagName = match[2];
		const attributesString = match[3];
		const isSelfClosing = !!match[4];
		if (/^[a-z][a-z0-9]*$/.test(tagName)) {
			components[tagName] = true;
			return;
		}
		if (!components[tagName]) components[tagName] = {};
		if (components[tagName] === true) return;
		if (isClosing) return;
		const attributes = parseAttributes(attributesString);
		const componentDef = components[tagName];
		Object.assign(componentDef, attributes);
		if (!isSelfClosing) componentDef.children = "string";
	});
	return components;
};
var VOID_HTML_ELEMENTS = /* @__PURE__ */ new Set([
	"area",
	"base",
	"br",
	"col",
	"embed",
	"hr",
	"img",
	"input",
	"link",
	"meta",
	"source",
	"track",
	"wbr"
]);
var TAG_REGEX = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g;
var validateHTML = (content) => {
	const issues = [];
	const stack = [];
	for (const match of content.matchAll(TAG_REGEX)) {
		const isClosing = !!match[1];
		const tagName = match[2];
		const attrs = match[3];
		const isSelfClosing = !!match[4];
		if (attrs.trimStart().startsWith("://") || attrs.trimStart().startsWith(":")) continue;
		if (isClosing) {
			if (stack.length === 0) issues.push({
				type: "error",
				message: `Closing tag </${tagName}> has no matching opening tag`
			});
			else {
				const last = stack[stack.length - 1];
				if (last.tag.toLowerCase() !== tagName.toLowerCase()) issues.push({
					type: "error",
					message: `Mismatched closing tag: expected </${last.tag}> but found </${tagName}>`
				});
				stack.pop();
			}
		} else {
			const isVoidElement = VOID_HTML_ELEMENTS.has(tagName.toLowerCase());
			if (!isSelfClosing && !isVoidElement) stack.push({ tag: tagName });
		}
	}
	for (const unclosed of stack) issues.push({
		type: "error",
		message: `Unclosed HTML tag: <${unclosed.tag}>`
	});
	return {
		valid: issues.filter((i) => i.type === "error").length === 0,
		issues
	};
};
var html = (content, components) => {
	const getComponents = () => {
		if (components) return components;
		if (typeof content === "string") {
			const { issues } = validateHTML(content);
			for (const issue of issues) if (issue.type === "error") console.error(`[intlayer/html] ${issue.message}`);
			else console.warn(`[intlayer/html] ${issue.message}`);
			return getHTMLCustomComponents(content);
		}
		let stringContent;
		if (typeof content === "function") stringContent = content();
		else if (typeof content.then === "function") stringContent = async () => getHTMLCustomComponents(await content);
		if (typeof stringContent === "string") return getHTMLCustomComponents(stringContent);
		try {
			return getHTMLCustomComponents(JSON.stringify(content));
		} catch (_e) {
			return [];
		}
	};
	return formatNodeType(HTML, content, { tags: getComponents() });
};
var getInsertionValues = (content) => {
	const matches = [...content.matchAll(/{{\s*(.*?)\s*}}/g)];
	if (matches.length === 0) return [];
	return [...new Set(matches.map((match) => match[1].trim()))].filter(Boolean);
};
var insertion = (content) => {
	const getInsertions = () => {
		if (typeof content === "string") return getInsertionValues(content);
		let stringContent;
		if (typeof content === "function") stringContent = content();
		else if (typeof content.then === "function") stringContent = async () => getInsertionValues(await content);
		if (typeof stringContent === "string") return getInsertionValues(stringContent);
		try {
			return getInsertionValues(JSON.stringify(content));
		} catch (_e) {
			return [];
		}
	};
	return formatNodeType(INSERTION, content, { fields: getInsertions() });
};
var plural = (content) => formatNodeType(PLURAL, content);
var select = (content, variable) => formatNodeType(SELECT, content, { variable });
var parseICU = (text) => {
	let index = 0;
	const parseNodes = () => {
		const nodes = [];
		let currentText = "";
		while (index < text.length) {
			const char = text[index];
			if (char === "{") {
				if (currentText) {
					nodes.push(currentText);
					currentText = "";
				}
				index++;
				nodes.push(parseArgument());
			} else if (char === "}") break;
			else if (char === "'") {
				if (index + 1 < text.length && text[index + 1] === "'") {
					currentText += "'";
					index += 2;
				} else {
					const nextQuote = text.indexOf("'", index + 1);
					if (nextQuote !== -1) {
						currentText += text.substring(index + 1, nextQuote);
						index = nextQuote + 1;
					} else {
						currentText += "'";
						index++;
					}
				}
			} else {
				currentText += char;
				index++;
			}
		}
		if (currentText) nodes.push(currentText);
		return nodes;
	};
	const parseArgument = () => {
		let name = "";
		while (index < text.length && /[^,}]/.test(text[index])) {
			name += text[index];
			index++;
		}
		name = name.trim();
		if (index >= text.length) throw new Error("Unclosed argument");
		if (text[index] === "}") {
			index++;
			return {
				type: "argument",
				name
			};
		}
		if (text[index] === ",") {
			index++;
			let type = "";
			while (index < text.length && /[^,}]/.test(text[index])) {
				type += text[index];
				index++;
			}
			type = type.trim();
			if (index >= text.length) throw new Error("Unclosed argument");
			if (text[index] === "}") {
				index++;
				return {
					type: "argument",
					name,
					format: { type }
				};
			}
			if (text[index] === ",") {
				index++;
				if (type === "plural" || type === "select" || type === "selectordinal") {
					const options = {};
					while (index < text.length && text[index] !== "}") {
						while (index < text.length && /\s/.test(text[index])) index++;
						let key = "";
						while (index < text.length && /[^{\s]/.test(text[index])) {
							key += text[index];
							index++;
						}
						while (index < text.length && /\s/.test(text[index])) index++;
						if (text[index] !== "{") throw new Error("Expected { after option key");
						index++;
						const value = parseNodes();
						if (text[index] !== "}") throw new Error("Expected } after option value");
						index++;
						options[key] = value;
						while (index < text.length && /\s/.test(text[index])) index++;
					}
					index++;
					if (type === "plural") return {
						type: "plural",
						name,
						options
					};
					else if (type === "select") return {
						type: "select",
						name,
						options
					};
					else if (type === "selectordinal") return {
						type: "selectordinal",
						name,
						options
					};
				} else {
					let style = "";
					while (index < text.length && text[index] !== "}") {
						style += text[index];
						index++;
					}
					if (index >= text.length) throw new Error("Unclosed argument");
					style = style.trim();
					index++;
					return {
						type: "argument",
						name,
						format: {
							type,
							style
						}
					};
				}
			}
		}
		throw new Error("Malformed argument");
	};
	return parseNodes();
};
var icuNodesToIntlayer = (nodes) => {
	if (nodes.length === 0) return "";
	if (nodes.length === 1 && typeof nodes[0] === "string") {
		const node = nodes[0];
		if (/<[a-zA-Z0-9-]+[^>]*>/.test(node)) return html(node);
		return node;
	}
	if (nodes.every((node) => typeof node === "string" || node?.type === "argument")) {
		let str = "";
		for (const node of nodes) if (typeof node === "string") str += node;
		else if (typeof node !== "string" && node?.type === "argument") {
			if (node.format) str += `{${node.name}, ${node.format.type}${node.format.style ? `, ${node.format.style}` : ""}}`;
			else str += `{{${node.name}}}`;
		}
		if (/<[a-zA-Z0-9-]+[^>]*>/.test(str)) return html(str);
		return insertion(str);
	}
	if (nodes.length === 1) {
		const node = nodes[0];
		if (typeof node === "string") {
			if (/<[a-zA-Z0-9-]+[^>]*>/.test(node)) return html(node);
			return node;
		}
		if (node?.type === "argument") {
			if (node.format) return insertion(`{${node.name}, ${node.format.type}${node.format.style ? `, ${node.format.style}` : ""}}`);
			return insertion(`{{${node.name}}}`);
		}
		if (node?.type === "plural") {
			const options = {};
			let hasExactMatch = false;
			for (const key of Object.keys(node.options)) if (key.startsWith("=")) {
				hasExactMatch = true;
				break;
			}
			if (hasExactMatch) {
				for (const [key, val] of Object.entries(node.options)) {
					let newKey = key;
					if (key.startsWith("=")) newKey = key.substring(1);
					else if (key === "one") newKey = "1";
					else if (key === "two") newKey = "2";
					else if (key === "few") newKey = "<=3";
					else if (key === "many") newKey = ">=4";
					else if (key === "other") newKey = "fallback";
					const replacedVal = val.map((v) => {
						if (typeof v === "string") return v.replace(/#/g, `{{${node.name}}}`);
						return v;
					});
					options[newKey] = icuNodesToIntlayer(replacedVal);
				}
				options.__intlayer_icu_var = node.name;
				return enumeration(options);
			} else {
				for (const [key, val] of Object.entries(node.options)) {
					const replacedVal = val?.map((v) => {
						if (typeof v === "string") return v.replace(/#/g, `{{${node.name}}}`);
						return v;
					});
					options[key] = icuNodesToIntlayer(replacedVal);
				}
				return plural(options);
			}
		}
		if (node?.type === "select") {
			const options = {};
			for (const [key, val] of Object.entries(node.options)) options[key === "other" ? "fallback" : key] = icuNodesToIntlayer(val);
			const optionKeys = Object.keys(options);
			if ((options.male || options.female) && optionKeys.every((k) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(k))) return gender({
				fallback: options.fallback,
				male: options.male,
				female: options.female
			});
			return select(options, node.name);
		}
		if (node?.type === "selectordinal") {
			const options = {};
			for (const [key, val] of Object.entries(node.options)) {
				const newKey = key.startsWith("=") ? key.substring(1) : key === "other" ? "fallback" : key;
				options[newKey] = icuNodesToIntlayer(val.map((value) => {
					if (typeof value === "string") return value.replace(/#/g, `{{${node.name}}}`);
					return value;
				}));
			}
			options.__intlayer_icu_var = node.name;
			options.__intlayer_icu_ordinal = true;
			return enumeration(options);
		}
	}
	return nodes.map((node) => icuNodesToIntlayer([node]));
};
var icuToIntlayerPlugin = {
	canHandle: (node) => typeof node === "string" && (node.includes("{") || node.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(node)),
	transform: (node) => {
		try {
			return icuNodesToIntlayer(parseICU(node));
		} catch {
			return node;
		}
	}
};
var icuToIntlayerFormatter = (message) => {
	return deepTransformNode(message, {
		dictionaryKey: "icu",
		keyPath: [],
		plugins: [{
			id: "icu",
			...icuToIntlayerPlugin
		}]
	});
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
	"enableProxy": false,
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": { "path": "/" }
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
};
var log = {
	"mode": "default",
	"prefix": "\x1B[38;5;239m[intlayer] \x1B[0m"
};
var MAX_CACHE_SIZE = 50;
var cache = /* @__PURE__ */ new Map();
var alreadyWarnedConstructors = /* @__PURE__ */ new Set();
var warnMissingIntlConstructor = (constructorName) => {
	if (alreadyWarnedConstructors.has(constructorName)) return;
	alreadyWarnedConstructors.add(constructorName);
	console.warn(`[intlayer] \`Intl.${constructorName}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${constructorName.toLowerCase()}/polyfill\`) before rendering your app.`);
};
var intlConstructorFallbacks = {
	DisplayNames: class DisplayNamesFallback {
		of(code) {
			return code;
		}
	},
	ListFormat: class ListFormatFallback {
		format(list) {
			return Array.from(list).join(", ");
		}
		formatToParts(list) {
			return Array.from(list).flatMap((value, index) => index === 0 ? [{
				type: "element",
				value
			}] : [{
				type: "literal",
				value: ", "
			}, {
				type: "element",
				value
			}]);
		}
	},
	Segmenter: class SegmenterFallback {
		segment(input) {
			let index = 0;
			return Array.from(input).map((segment) => {
				const segmentStart = index;
				index += segment.length;
				return {
					segment,
					index: segmentStart
				};
			});
		}
	}
};
var resolveIntlConstructor = (constructorName) => {
	const nativeConstructor = Intl[constructorName];
	if (typeof nativeConstructor === "function") return nativeConstructor;
	warnMissingIntlConstructor(constructorName);
	return intlConstructorFallbacks[constructorName];
};
function getCachedIntl(intlConstructor, locale, options) {
	const resLoc = locale ?? internationalization?.defaultLocale;
	const key = `${resLoc}|${options ? JSON.stringify(options) : ""}`;
	const cacheKey = intlConstructor;
	let ctorCache = cache.get(cacheKey);
	if (!ctorCache) {
		ctorCache = /* @__PURE__ */ new Map();
		cache.set(cacheKey, ctorCache);
	}
	let instance = ctorCache.get(key);
	if (!instance) {
		const ResolvedConstructor = typeof intlConstructor === "string" ? resolveIntlConstructor(intlConstructor) : intlConstructor;
		if (typeof ResolvedConstructor !== "function") throw new Error(`[intlayer] \`Intl.${String(intlConstructor)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		if (ctorCache.size > MAX_CACHE_SIZE) ctorCache.clear();
		instance = new ResolvedConstructor(resLoc, options);
		ctorCache.set(key, instance);
	}
	return instance;
}
var getPlural = (pluralContent, count, locale) => {
	return pluralContent[getCachedIntl("PluralRules", locale).select(count)] ?? pluralContent.other;
};
var getSelect = (selectContent, value) => {
	const caseList = Object.keys(selectContent);
	const lastCase = caseList[caseList.length - 1];
	return selectContent[value] ?? selectContent.fallback ?? selectContent.other ?? selectContent[lastCase];
};
var ENUMERATION_METADATA_KEYS = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
];
var resolveValuePath = (values, path) => {
	if (path in values) return values[path];
	let current = values;
	for (const part of path.split(".")) {
		if (current === null || current === void 0 || typeof current !== "object") return;
		current = current[part];
	}
	return current;
};
var formatArgument = (value, type, style, locale) => {
	try {
		if (type === "number") {
			const numberValue = Number(value);
			if (style === "percent") return getCachedIntl("NumberFormat", locale, { style: "percent" }).format(numberValue);
			if (style === "integer") return getCachedIntl("NumberFormat", locale, { maximumFractionDigits: 0 }).format(numberValue);
			return getCachedIntl("NumberFormat", locale).format(numberValue);
		}
		if (type === "date" || type === "time") {
			const dateValue = value instanceof Date ? value : new Date(value);
			const dateTimeStyle = [
				"short",
				"medium",
				"long",
				"full"
			].includes(style ?? "") ? style : type === "date" ? "medium" : "short";
			return getCachedIntl("DateTimeFormat", locale, type === "date" ? { dateStyle: dateTimeStyle } : { timeStyle: dateTimeStyle }).format(dateValue);
		}
	} catch {}
	return String(value);
};
var interpolateMessage = (template, values = {}, locale = "en") => template.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (match, path, type, style) => {
	const value = resolveValuePath(values, path);
	if (value === void 0) return match;
	return type ? formatArgument(value, type, style, locale) : String(value);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (match, path, type, style) => {
	const value = resolveValuePath(values, path);
	if (value === void 0) return match;
	return formatArgument(value, type, style, locale);
}).replace(/\{\s*([\w.]+)\s*\}/g, (match, path) => {
	const value = resolveValuePath(values, path);
	return value === void 0 ? match : String(value);
});
var getSelectorValue = (values, variableName) => values[variableName] ?? values.count ?? values.n;
var resolveMessageNode = (node, values = {}, locale = "en") => {
	if (node === null || node === void 0) return node;
	if (typeof node === "string") return interpolateMessage(node, values, locale);
	if (typeof node === "number" || typeof node === "boolean") return String(node);
	if (typeof node === "function") try {
		return resolveMessageNode(node(values), values, locale);
	} catch {
		return;
	}
	if (Array.isArray(node)) return node.map((item) => String(resolveMessageNode(item, values, locale) ?? "")).join("");
	const typedNode = node;
	if (typedNode.nodeType === "insertion") return resolveMessageNode(typedNode[INSERTION], values, locale);
	if (typedNode.nodeType === "html") return resolveMessageNode(typedNode[HTML], values, locale);
	if (typedNode.nodeType === "plural") {
		const pluralState = typedNode[PLURAL];
		return resolveMessageNode(getPlural(pluralState, Number(getSelectorValue(values, "count") ?? 1), locale), values, locale);
	}
	if (typedNode.nodeType === "enumeration") {
		const enumerationState = typedNode[ENUMERATION];
		const variableName = ENUMERATION_METADATA_KEYS.map((metadataKey) => enumerationState[metadataKey]).find((name) => typeof name === "string") ?? "count";
		const isOrdinal = enumerationState.__intlayer_icu_ordinal === true;
		const options = {};
		for (const [key, value] of Object.entries(enumerationState)) if (!ENUMERATION_METADATA_KEYS.includes(key)) options[key] = value;
		const selector = getSelectorValue(values, variableName);
		let selected;
		if (isOrdinal && !Number.isNaN(Number(selector))) {
			const ordinalCount = Number(selector);
			const ordinalCategory = getCachedIntl("PluralRules", locale, { type: "ordinal" }).select(ordinalCount);
			selected = options[String(ordinalCount)] ?? options[ordinalCategory] ?? options.fallback ?? options.other;
		} else if (typeof selector === "number" || !Number.isNaN(Number(selector))) selected = getEnumeration(options, Number(selector));
		else selected = options[String(selector)] ?? options.fallback ?? options.other;
		return resolveMessageNode(selected, values, locale);
	}
	if (typedNode.nodeType === "select") {
		const selectState = typedNode[SELECT];
		const selector = getSelectorValue(values, typeof typedNode.variable === "string" ? typedNode.variable : "value");
		return resolveMessageNode(getSelect(selectState, String(selector ?? "")), values, locale);
	}
	if (typedNode.nodeType === "gender") {
		const genderState = typedNode[GENDER];
		return resolveMessageNode(genderState[String(values.gender ?? "")] ?? genderState.fallback ?? genderState.other, values, locale);
	}
	return node;
};
var resolveMessageNodeToString = (node, values = {}, locale = "en") => {
	const resolved = resolveMessageNode(node, values, locale);
	return typeof resolved === "string" ? resolved : String(resolved ?? "");
};
var createMessageResolver = (formatter) => (message, values = {}, locale = "en") => resolveMessageNodeToString(typeof message === "string" ? formatter(message) : message, values, locale);
var resolveIcuMessage = createMessageResolver(icuToIntlayerFormatter);
var splitMessageId = (id) => {
	const dotPosition = id.indexOf(".");
	if (dotPosition === -1) return {
		dictionaryKey: id,
		remainder: ""
	};
	return {
		dictionaryKey: id.slice(0, dotPosition),
		remainder: id.slice(dotPosition + 1)
	};
};
var I18nClass = class extends EventEmitter {
	_locale;
	_locales;
	_catalogs = {};
	_loadFallbackWarned = false;
	_boundDictionaries = {};
	_registry;
	constructor({ locale = "en", locales, messages, registry } = {}) {
		super();
		this._locale = typeof locale === "string" ? locale : "en";
		this._locales = locales;
		this._registry = registry;
		if (messages) this.mergeAllCatalogs(messages);
	}
	get locale() {
		return this._locale;
	}
	get locales() {
		return this._locales;
	}
	get messages() {
		const dictionary = { ...this._registry?.all(this._locale) };
		for (const content of Object.values(this._boundDictionaries)) Object.assign(dictionary, unwrapLinguiCatalog(content));
		return {
			...this._catalogs[this._locale] ?? {},
			...dictionary
		};
	}
	mergeLocaleCatalog(locale, catalog) {
		this._catalogs[locale] = {
			...this._catalogs[locale],
			...catalog
		};
	}
	mergeAllCatalogs(messages) {
		for (const [locale, catalog] of Object.entries(messages)) if (catalog && typeof catalog === "object") this.mergeLocaleCatalog(locale, catalog);
	}
	setMessagesCompiler(_compiler) {
		console.warn("@intlayer/lingui: i18n.setMessagesCompiler() is a no-op — message compilation is handled at build time by intlayer.");
		return this;
	}
	load(localeOrAll, messages) {
		if (typeof localeOrAll === "string") this.mergeLocaleCatalog(localeOrAll, messages ?? {});
		else this.mergeAllCatalogs(localeOrAll);
		if (!this._loadFallbackWarned) {
			this._loadFallbackWarned = true;
			console.warn("@intlayer/lingui: i18n.load() messages are used as a runtime fallback. For optimal bundle size, compile your catalogs into intlayer dictionaries instead of importing lingui locale files.");
		}
	}
	loadAndActivate({ locale, locales, messages }) {
		if (messages) this.mergeLocaleCatalog(locale, messages);
		this.activate(locale, locales);
	}
	bindDictionaries(dictionaries) {
		this._boundDictionaries = dictionaries;
		return this;
	}
	activate(locale, locales) {
		this._locale = locale;
		this._locales = locales;
		this.emit("change");
	}
	lookupBoundDictionaries(id) {
		const { dictionaryKey, remainder } = splitMessageId(id);
		const prefixed = this._boundDictionaries[dictionaryKey];
		if (prefixed !== void 0) {
			const value = navigateLinguiCatalog(prefixed, remainder);
			if (value !== void 0) return value;
		}
		for (const content of Object.values(this._boundDictionaries)) {
			const value = navigateLinguiCatalog(content, id);
			if (value !== void 0) return value;
		}
	}
	resolveTemplate(id) {
		const boundNode = this.lookupBoundDictionaries(id);
		if (boundNode !== void 0) return {
			kind: "node",
			node: boundNode
		};
		const registryNode = this._registry?.lookup(id, this._locale);
		if (registryNode !== void 0) return {
			kind: "node",
			node: registryNode
		};
		const catalog = this._catalogs[this._locale];
		if (catalog) {
			const raw = navigateLinguiCatalog(catalog, id);
			if (raw !== void 0) return {
				kind: "icu",
				message: linguiMessageToIcu(raw)
			};
		}
	}
	_(descriptorOrId, values, options) {
		const isDescriptor = typeof descriptorOrId === "object" && descriptorOrId !== null;
		const id = isDescriptor ? descriptorOrId.id : descriptorOrId;
		const defaultMessage = isDescriptor ? descriptorOrId.message ?? options?.message : options?.message;
		const messageValues = isDescriptor ? {
			...descriptorOrId.values ?? {},
			...values ?? {}
		} : values ?? {};
		const locale = this._locale;
		const template = this.resolveTemplate(id) ?? {
			kind: "icu",
			message: defaultMessage ?? id
		};
		return (template.kind === "node" ? resolveMessageNodeToString(template.node, messageValues, locale) : resolveIcuMessage(template.message, messageValues, locale)) ?? id;
	}
	t = (descriptorOrId, values, options) => this._(descriptorOrId, values, options);
	date(value, format) {
		if (value === void 0 || value === null) return "";
		const dateValue = value instanceof Date ? value : new Date(typeof value === "string" ? value : value);
		return new Intl.DateTimeFormat(this._locale, format).format(dateValue);
	}
	number(value, format) {
		return new Intl.NumberFormat(this._locale, format).format(value);
	}
};
var resolveExpiresToTimestamp = (expires) => {
	if (typeof expires === "number") return Date.now() + expires * 1e3;
	if (typeof expires === "string") {
		const time = Date.parse(expires);
		return Number.isNaN(time) ? void 0 : time;
	}
};
var buildCookieString = (name, value, attributes) => {
	const parts = [`${name}=${encodeURIComponent(value)}`];
	if (attributes.path) parts.push(`Path=${attributes.path}`);
	if (attributes.domain) parts.push(`Domain=${attributes.domain}`);
	const expiresTimestamp = resolveExpiresToTimestamp(attributes.expires);
	if (expiresTimestamp !== void 0) parts.push(`Expires=${new Date(expiresTimestamp).toUTCString()}`);
	if (attributes.secure) parts.push("Secure");
	if (attributes.sameSite) parts.push(`SameSite=${attributes.sameSite}`);
	return parts.join("; ");
};
var TREE_SHAKE_STORAGE_COOKIES = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
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
var getLocaleFromStorageClient = (options = localeStorageOptions) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
};
var isStoredLocaleCached = false;
var storedLocale;
var getCachedLocaleFromStorageClient = () => {
	if (typeof window === "undefined") return getLocaleFromStorageClient(localeStorageOptions);
	if (!isStoredLocaleCached) {
		storedLocale = getLocaleFromStorageClient(localeStorageOptions);
		isStoredLocaleCached = true;
	}
	return storedLocale;
};
var setLocaleInStorageClient = (locale, options) => {
	if (options?.isCookieEnabled === false) return;
	isStoredLocaleCached = false;
	if (!TREE_SHAKE_STORAGE_COOKIES && routing.storage.cookies) for (let i = 0; i < routing.storage.cookies.length; i++) {
		const { name, attributes } = routing.storage.cookies[i];
		try {
			if (options?.setCookieStore) options.setCookieStore(name, locale, {
				...attributes,
				expires: resolveExpiresToTimestamp(attributes.expires)
			});
		} catch {
			try {
				if (options?.setCookieString) options.setCookieString(name, buildCookieString(name, locale, attributes));
			} catch {}
		}
	}
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
var renderIntlayerNode = ({ children, value, additionalProps }) => Object.setPrototypeOf({
	...isValidElement(children) ? children : jsx(Fragment$1, { children }),
	value,
	...additionalProps
}, getIntlayerNodePrototype(value));
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
var getInsertion = (content, values) => content.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, key) => {
	return (values[key.trim()] ?? "").toString();
});
var RESET = "\x1B[0m";
var BLUE = "\x1B[34m";
var RED = "\x1B[31m";
var GREEN = "\x1B[32m";
var BEIGE = "\x1B[38;5;3m";
var getPrefix = (configPrefix) => {
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
var colorize = (string, color, reset) => color && typeof window === "undefined" ? `${color}${string}${reset ? typeof reset === "boolean" ? RESET : reset : RESET}` : string;
var colorizeKey = (keyPath, color = BEIGE, reset = RESET) => [keyPath].flat().map((key) => colorize(key, color, reset)).join(`, `);
colorize("✗", RED);
colorize("✓", GREEN);
colorize("⏲", BLUE);
var getDictionaries = () => ({});
var PROTOTYPE_METHOD_NAMES = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]);
var createSafeFallback = (path = "") => {
	return new Proxy((() => path), { get: (target, prop) => {
		if (prop === "toJSON" || prop === Symbol.toPrimitive || prop === "toString" || prop === "valueOf") return () => path;
		if (prop === "then") return;
		if (PROTOTYPE_METHOD_NAMES.has(prop)) return Object.prototype[prop].bind(target);
		if (prop === Symbol.iterator) return function* () {
			yield path;
		};
		return createSafeFallback(path ? `${path}.${String(prop)}` : String(prop));
	} });
};
var warnedMissingDictionaries = /* @__PURE__ */ new Set();
var getIntlayer = (key, localeOrSelector, plugins) => {
	const dictionary = getDictionaries()[key];
	if (!dictionary && true) {
		if (!warnedMissingDictionaries.has(key)) {
			getAppLogger({ log })(typeof window === "undefined" ? `Dictionary ${colorizeKey(key)} was not found. Using fallback proxy.` : `Dictionary ${key} was not found. Using fallback proxy.`, { level: "warn" });
			warnedMissingDictionaries.add(key);
		}
		return createSafeFallback(key);
	}
	return getDictionary$1(dictionary, localeOrSelector, plugins);
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
var isInterpolableWrapperNode = (node) => {
	if (typeof node !== "object" || node === null || !("nodeType" in node)) return false;
	const { nodeType } = node;
	return false;
};
var getInterpolableContent = (node) => {
	if (typeof node === "string") return node;
	if (isInterpolableWrapperNode(node)) return node.nodeType === "html" ? node[HTML] : node[MARKDOWN];
};
var rebuildInterpolableContent = (node, interpolated) => {
	if (typeof node === "string") return interpolated;
	if (isInterpolableWrapperNode(node)) {
		const key = node.nodeType === "html" ? HTML : MARKDOWN;
		return {
			...node,
			[key]: interpolated
		};
	}
	return node;
};
var transformInterpolableNode = (node, values, subProps, parentPlugins, deepTransformNode) => {
	const children = rebuildInterpolableContent(node, getInsertion(getInterpolableContent(node), values));
	return deepTransformNode(children, {
		...subProps,
		plugins: parentPlugins,
		children
	});
};
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var isAwaitingValues = (branch) => {
	if (typeof branch !== "function") return false;
	const { value } = branch;
	return value === void 0 || typeof value === "function";
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
var insertionPlugin$1 = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		const insertionStringPlugin = {
			id: "insertion-string-plugin",
			canHandle: (node) => typeof node === "string" || isInterpolableWrapperNode(node),
			transform: (node, subProps, deepTransformNode) => {
				if (isInterpolableWrapperNode(node)) return (values) => transformInterpolableNode(node, values, subProps, props.plugins, deepTransformNode);
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
		return resolveInsertedSelector(children, deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		}));
	}
};
var selectorNodeTypes = [
	ENUMERATION,
	CONDITION,
	PLURAL,
	GENDER,
	SELECT
];
var bindInsertedValues = (children, result, values, areBranchesInterpolated = false) => {
	const nodeType = children?.nodeType;
	if (typeof result !== "function" || !nodeType || !selectorNodeTypes.includes(nodeType)) return result;
	const isCountSelector = nodeType === "plural" || nodeType === "enumeration";
	return (selector) => {
		if (typeof selector === "object" && selector !== null) return result({
			...values,
			...selector
		});
		if (isCountSelector) return result({
			...values,
			count: selector
		});
		const selected = result(selector);
		return !areBranchesInterpolated && isAwaitingValues(selected) ? selected(values) : selected;
	};
};
var resolveInsertedSelector = (children, result) => typeof result === "function" && selectorNodeTypes.includes(children?.nodeType ?? "") ? (values) => bindInsertedValues(children, result, values) : result;
var genderPlugin = fallbackPlugin;
var selectPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
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
var intlayerNodePlugins = {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (_node, props) => {
		return renderIntlayerNode({
			value: props.children,
			children: props.children
		});
	}
};
var reactNodePlugins = fallbackPlugin;
var splitAndJoinInsertion = (template, values) => {
	const result = splitInsertionTemplate(template, values);
	if (result.isSimple) return result.parts;
	return createElement(Fragment, null, ...result.parts.map((part, index) => createElement(Fragment, { key: index }, part)));
};
var insertionPlugin = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		const insertionStringPlugin = {
			id: "insertion-string-plugin",
			canHandle: (node) => typeof node === "string" || isInterpolableWrapperNode(node),
			transform: (node, subProps, deepTransformNode) => {
				if (isInterpolableWrapperNode(node)) return (values) => transformInterpolableNode(node, values, subProps, props.plugins, deepTransformNode);
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
		return resolveInsertedSelector(children, deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		}));
	}
};
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
		reactNodePlugins,
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
var getLocaleInStorage = getCachedLocaleFromStorageClient;
var setLocaleInStorage = (locale, isCookieEnabled) => setLocaleInStorageClient(locale, {
	...localeStorageOptions,
	isCookieEnabled
});
var setIntlayerIdentifier = () => {
	if (typeof window !== "undefined") window.intlayer = { enabled: true };
};
var localeResolver = (selectedLocale, locales = internationalization?.locales, defaultLocale = internationalization?.defaultLocale) => {
	if (locales?.includes(selectedLocale)) return selectedLocale;
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
var IntlayerClientContext = createContext({
	get locale() {
		return getLocaleInStorage() ?? internationalization?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: true
});
var IntlayerProviderContent = ({ locale: localeProp, defaultLocale: defaultLocaleProp, variant, children, setLocale: setLocaleProp, disableEditor, isCookieEnabled }) => {
	const { locales: availableLocales, defaultLocale: defaultLocaleConfig } = internationalization ?? {};
	const [currentLocale, setCurrentLocale] = useState(() => localeProp ?? getLocaleInStorage() ?? defaultLocaleProp ?? defaultLocaleConfig);
	const [adoptedLocaleProp, setAdoptedLocaleProp] = useState(localeProp);
	if (localeProp !== adoptedLocaleProp) {
		setAdoptedLocaleProp(localeProp);
		if (localeProp && localeProp !== currentLocale) setCurrentLocale(localeProp);
	}
	useEffect(() => {
		setIntlayerIdentifier();
	}, []);
	const setLocaleBase = useCallback((newLocale) => {
		if (currentLocale.toString() === newLocale.toString()) return;
		if (!availableLocales?.map(String).includes(newLocale)) {
			console.error(`Locale ${newLocale} is not available`);
			return;
		}
		setCurrentLocale(newLocale);
		setLocaleInStorage(newLocale, isCookieEnabled);
	}, [
		currentLocale,
		availableLocales,
		isCookieEnabled
	]);
	const setLocale = setLocaleProp ?? setLocaleBase;
	const resolvedLocale = localeResolver(currentLocale);
	const contextValue = useMemo(() => ({
		locale: resolvedLocale,
		setLocale,
		variant,
		disableEditor
	}), [
		resolvedLocale,
		setLocale,
		variant,
		disableEditor
	]);
	return jsx(IntlayerClientContext.Provider, {
		value: contextValue,
		children
	});
};
var IntlayerProvider = ({ children, ...props }) => jsxs(IntlayerProviderContent, {
	...props,
	children: [
		false,
		false,
		children
	]
});
var { defaultLocale, locales: availableLocales } = internationalization ?? {};
var useLocale = ({ isCookieEnabled, onLocaleChange } = {}) => {
	const { locale, setLocale: setLocaleState, isCookieEnabled: isCookieEnabledContext } = useContext(IntlayerClientContext) ?? {};
	return {
		locale,
		defaultLocale,
		availableLocales,
		setLocale: useCallback((locale) => {
			if (!availableLocales?.map(String).includes(locale)) {
				console.error(`Locale ${locale} is not available`);
				return;
			}
			setLocaleState(locale);
			setLocaleInStorage(locale, isCookieEnabled ?? isCookieEnabledContext ?? true);
			onLocaleChange?.(locale);
		}, [
			availableLocales,
			onLocaleChange,
			setLocaleState,
			isCookieEnabled
		])
	};
};
var createBoundLinguiContext = (locale, dictionaries) => {
	const instance = new I18nClass({ locale }).bindDictionaries(dictionaries);
	return {
		i18n: instance,
		_: instance._.bind(instance)
	};
};
var useDictionary = (...dictionaries) => {
	const { locale } = useLocale();
	const dictionaryKeysIdentity = dictionaries.map((dictionary) => dictionary.key).join("\0");
	return useMemo(() => createBoundLinguiContext(locale, Object.fromEntries(dictionaries.map((dictionary) => [dictionary.key, getDictionary(dictionary, locale)]))), [locale, dictionaryKeysIdentity]);
};
var getDictionaryKeys = () => {
	try {
		return Object.keys(getDictionaries());
	} catch {
		return [];
	}
};
var lookupDictionaryMessage = (id, locale) => {
	const dictionaryKeys = getDictionaryKeys();
	const dotPosition = id.indexOf(".");
	const prefix = dotPosition === -1 ? id : id.slice(0, dotPosition);
	const readDictionary = (key) => {
		try {
			return getIntlayer(key, locale);
		} catch {
			return;
		}
	};
	if (dictionaryKeys.includes(prefix)) {
		const value = navigateLinguiCatalog(readDictionary(prefix), dotPosition === -1 ? "" : id.slice(dotPosition + 1));
		if (value !== void 0) return value;
	}
	for (const key of dictionaryKeys) {
		const value = navigateLinguiCatalog(readDictionary(key), id);
		if (value !== void 0) return value;
	}
};
var collectRegistryMessages = (locale) => {
	const merged = {};
	for (const key of getDictionaryKeys()) try {
		Object.assign(merged, unwrapLinguiCatalog(getIntlayer(key, locale)));
	} catch {}
	return merged;
};
var createRegistryResolver = () => ({
	lookup: lookupDictionaryMessage,
	all: collectRegistryMessages
});
var setupI18n = (params) => new I18nClass({
	...params,
	registry: createRegistryResolver()
});
setupI18n({ locale: "en" });
var I18nProvider = ({ i18n, defaultComponent, children }) => {
	const buildContext = (instance) => ({
		i18n: instance,
		_: instance._.bind(instance),
		defaultComponent
	});
	const [linguiContext, setLinguiContext] = useState(() => buildContext(i18n));
	const [locale, setLocale] = useState(i18n.locale);
	useEffect(() => {
		setLinguiContext(buildContext(i18n));
		setLocale(i18n.locale);
		return i18n.on("change", () => {
			setLinguiContext(buildContext(i18n));
			setLocale(i18n.locale);
		});
	}, [i18n]);
	return jsx(LinguiContext.Provider, {
		value: linguiContext,
		children: jsx(IntlayerProvider, {
			locale,
			children
		})
	});
};
function FAQList() {
	const { i18n } = useDictionary(faq_list_default);
	const faqs = [
		{
			q: i18n._({
				id: "faq-list.whatIsI18nBenchmark",
				message: "What is i18n Benchmark?"
			}),
			a: i18n._({
				id: "faq-list.whatIsI18nBenchmarkAnswer",
				message: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications."
			})
		},
		{
			q: i18n._({
				id: "faq-list.howAreBenchmarksConducted",
				message: "How are benchmarks conducted?"
			}),
			a: i18n._({
				id: "faq-list.weRunStandardizedTestsIn",
				message: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository."
			})
		},
		{
			q: i18n._({
				id: "faq-list.whichLibrariesAreCurrentlySupported",
				message: "Which libraries are currently supported?"
			}),
			a: i18n._({
				id: "faq-list.weSupportReactI18nextReact",
				message: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee."
			})
		},
		{
			q: i18n._({
				id: "faq-list.canISubmitMyOwn",
				message: "Can I submit my own benchmarks?"
			}),
			a: i18n._({
				id: "faq-list.yesCommunityBenchmarkSubmissionsAre",
				message: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions."
			})
		},
		{
			q: i18n._({
				id: "faq-list.howOftenAreBenchmarksUpdated",
				message: "How often are benchmarks updated?"
			}),
			a: i18n._({
				id: "faq-list.weReRunAllBenchmarks",
				message: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle."
			})
		},
		{
			q: i18n._({
				id: "faq-list.isTheDataReliable",
				message: "Is the data reliable?"
			}),
			a: i18n._({
				id: "faq-list.weFollowRigorousStatisticalMethodology",
				message: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency."
			})
		},
		{
			q: i18n._({
				id: "faq-list.doYouOfferConsultingServices",
				message: "Do you offer consulting services?"
			}),
			a: i18n._({
				id: "faq-list.yesOurEnterprisePlanIncludes",
				message: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints."
			})
		},
		{
			q: i18n._({
				id: "faq-list.howCanIContribute",
				message: "How can I contribute?"
			}),
			a: i18n._({
				id: "faq-list.thereAreManyWaysTo",
				message: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
			})
		}
	];
	return jsx("div", {
		className: "mx-auto max-w-3xl space-y-4",
		children: faqs.map((f) => jsxs("details", {
			className: "group rounded-lg border border-border bg-card",
			children: [jsx("summary", {
				className: "cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors",
				children: f.q
			}), jsx("p", {
				className: "px-6 pb-4 text-sm text-muted-foreground",
				children: f.a
			})]
		}, f.q))
	});
}
function initLingui(locale, _messages) {
	const lingui = setupI18n();
	lingui.activate(locale);
	return lingui;
}
function Wrapper({ children }) {
	const i18n = useMemo(() => initLingui("en"), []);
	return jsx(I18nProvider, {
		i18n,
		children
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(FAQList, {}) });
}
export { Wrapped as default };
