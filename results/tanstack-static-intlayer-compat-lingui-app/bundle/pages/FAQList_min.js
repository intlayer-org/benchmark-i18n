import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as ee, jsx as u, jsxs as d } from "react/jsx-runtime";
import { jsxDEV as f } from "react/jsx-dev-runtime";
var te = {
	key: "faq-list",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"canISubmitMyOwn\":\"Can I submit my own benchmarks?\",\"doYouOfferConsultingServices\":\"Do you offer consulting services?\",\"howAreBenchmarksConducted\":\"How are benchmarks conducted?\",\"howCanIContribute\":\"How can I contribute?\",\"howOftenAreBenchmarksUpdated\":\"How often are benchmarks updated?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"isTheDataReliable\":\"Is the data reliable?\",\"thereAreManyWaysTo\":\"There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\",\"weFollowRigorousStatisticalMethodology\":\"We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\",\"weReRunAllBenchmarks\":\"We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\",\"weRunStandardizedTestsIn\":\"We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\",\"weSupportReactI18nextReact\":\"We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\",\"whatIsI18nBenchmark\":\"What is i18n Benchmark?\",\"whichLibrariesAreCurrentlySupported\":\"Which libraries are currently supported?\",\"yesOurEnterprisePlanIncludes\":\"Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\",\"yesCommunityBenchmarkSubmissionsAre\":\"Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\"},\"fr\":{\"canISubmitMyOwn\":\"Puis-je soumettre mes propres benchmarks ?\",\"doYouOfferConsultingServices\":\"Proposez-vous des services de conseil ?\",\"howAreBenchmarksConducted\":\"Comment les benchmarks sont-ils menés ?\",\"howCanIContribute\":\"Comment puis-je contribuer ?\",\"howOftenAreBenchmarksUpdated\":\"À quelle fréquence les benchmarks sont-ils mis à jour ?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark est une suite de tests open source qui mesure et compare les performances, la taille des bundles et l'expérience développeur des bibliothèques d'internationalisation pour les applications JavaScript et React.\",\"isTheDataReliable\":\"Les données sont-elles fiables ?\",\"thereAreManyWaysTo\":\"Il existe de nombreuses façons de contribuer : proposer des benchmarks, améliorer la documentation, signaler des bugs, suggérer de nouvelles métriques ou sponsoriser le projet. Consultez notre dépôt GitHub pour plus de détails.\",\"weFollowRigorousStatisticalMethodology\":\"Nous suivons une méthodologie statistique rigoureuse incluant des phases de préchauffage, la détection des valeurs aberrantes et des intervalles de confiance. Toutes les données brutes sont publiées avec l'analyse pour une transparence totale.\",\"weReRunAllBenchmarks\":\"Nous réexécutons tous les benchmarks chaque semaine pour les dernières versions stables de chaque bibliothèque. Les versions majeures déclenchent un cycle de retraitement immédiat.\",\"weRunStandardizedTestsIn\":\"Nous effectuons des tests standardisés dans des environnements isolés avec un matériel identique. Chaque benchmark est répété plusieurs fois pour garantir sa pertinence statistique. Toutes les configurations de test sont publiques sur notre dépôt GitHub.\",\"weSupportReactI18nextReact\":\"Nous supportons react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react et Tolgee.\",\"whatIsI18nBenchmark\":\"Qu'est-ce que i18n Benchmark ?\",\"whichLibrariesAreCurrentlySupported\":\"Quelles bibliothèques sont actuellement supportées ?\",\"yesOurEnterprisePlanIncludes\":\"Oui, notre offre Entreprise comprend des heures de conseil pour les équipes évaluant des solutions i18n. Nous pouvons fournir des recommandations personnalisées basées sur votre cas d'utilisation, votre échelle et vos contraintes.\",\"yesCommunityBenchmarkSubmissionsAre\":\"Oui ! Nous accueillons avec plaisir les soumissions de benchmarks de la communauté. Veuillez forker le dépôt, ajouter votre benchmark en suivant notre guide de contribution, et soumettre une pull request. Notre équipe examinera et fusionnera les soumissions qualifiées.\"},\"es\":{\"canISubmitMyOwn\":\"¿Puedo enviar mis propios benchmarks?\",\"doYouOfferConsultingServices\":\"¿Ofrecen servicios de consultoría?\",\"howAreBenchmarksConducted\":\"¿Cómo se realizan los benchmarks?\",\"howCanIContribute\":\"¿Cómo puedo contribuir?\",\"howOftenAreBenchmarksUpdated\":\"¿Con qué frecuencia se actualizan los benchmarks?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización.\",\"isTheDataReliable\":\"¿Son fiables los datos?\",\"thereAreManyWaysTo\":\"Existen muchas formas de implementar la internacionalización, y cada una tiene sus propias compensaciones en cuanto a rendimiento y experiencia del desarrollador.\",\"weFollowRigorousStatisticalMethodology\":\"Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza.\",\"weReRunAllBenchmarks\":\"Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables.\",\"weRunStandardizedTestsIn\":\"Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente.\",\"weSupportReactI18nextReact\":\"Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.\",\"whatIsI18nBenchmark\":\"¿Qué es i18n Benchmark?\",\"whichLibrariesAreCurrentlySupported\":\"¿Qué bibliotecas están soportadas actualmente?\",\"yesOurEnterprisePlanIncludes\":\"Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones de i18n.\",\"yesCommunityBenchmarkSubmissionsAre\":\"¡Sí! Damos la bienvenida a las contribuciones de la comunidad. Por favor, haz un fork del repositorio y envía un pull request.\"},\"de\":{\"canISubmitMyOwn\":\"Kann ich meine eigenen Benchmarks einreichen?\",\"doYouOfferConsultingServices\":\"Bieten Sie Beratungsdienstleistungen an?\",\"howAreBenchmarksConducted\":\"Wie werden Benchmarks durchgeführt?\",\"howCanIContribute\":\"Wie kann ich beitragen?\",\"howOftenAreBenchmarksUpdated\":\"Wie oft werden Benchmarks aktualisiert?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, Bundle-Größe und Entwicklererfahrung von Internationalisierungs-Bibliotheken misst und vergleicht.\",\"isTheDataReliable\":\"Sind die Daten zuverlässig?\",\"thereAreManyWaysTo\":\"Es gibt viele Möglichkeiten, zur Internationalisierung beizutragen, von der Meldung von Fehlern bis hin zur Einreichung neuer Benchmark-Szenarien.\",\"weFollowRigorousStatisticalMethodology\":\"Wir folgen einer strengen statistischen Methodik, die Aufwärmphasen, Ausreißererkennung und Konfidenzintervalle umfasst.\",\"weReRunAllBenchmarks\":\"Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut durch.\",\"weRunStandardizedTestsIn\":\"Wir führen standardisierte Tests in isolierten Umgebungen unter Verwendung konsistenter Hardware durch.\",\"weSupportReactI18nextReact\":\"Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.\",\"whatIsI18nBenchmark\":\"Was ist i18n Benchmark?\",\"whichLibrariesAreCurrentlySupported\":\"Welche Bibliotheken werden derzeit unterstützt?\",\"yesOurEnterprisePlanIncludes\":\"Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren.\",\"yesCommunityBenchmarkSubmissionsAre\":\"Ja! Community-Benchmark-Einreichungen sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Beitragsleitfaden hinzu und reichen Sie einen Pull-Request ein.\"},\"it\":{\"canISubmitMyOwn\":\"Posso inviare i miei benchmark?\",\"doYouOfferConsultingServices\":\"Offrite servizi di consulenza ?\",\"howAreBenchmarksConducted\":\"Come vengono condotti i benchmark?\",\"howCanIContribute\":\"Come posso contribuire?\",\"howOftenAreBenchmarksUpdated\":\"Quanto spesso vengono aggiornati i benchmark?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark è una suite di benchmarking open-source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione.\",\"isTheDataReliable\":\"I dati sono affidabili?\",\"thereAreManyWaysTo\":\"Ci sono molti modi per contribuire al progetto.\",\"weFollowRigorousStatisticalMethodology\":\"Seguiamo una rigorosa metodologia statistica che include fasi di riscaldamento, rilevamento di valori anomali e intervalli di confidenza.\",\"weReRunAllBenchmarks\":\"Eseguiamo nuovamente tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ciascuna libreria.\",\"weRunStandardizedTestsIn\":\"Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente.\",\"weSupportReactI18nextReact\":\"Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\",\"whatIsI18nBenchmark\":\"Cos'è i18n Benchmark?\",\"whichLibrariesAreCurrentlySupported\":\"Quali librerie sono attualmente supportate?\",\"yesOurEnterprisePlanIncludes\":\"Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano le soluzioni i18n.\",\"yesCommunityBenchmarkSubmissionsAre\":\"Sì! Siamo aperti ai contributi della community. Fai un fork della repository e invia una pull request.\"},\"pt\":{\"canISubmitMyOwn\":\"Posso enviar meus próprios benchmarks?\",\"doYouOfferConsultingServices\":\"Vocês oferecem serviços de consultoria?\",\"howAreBenchmarksConducted\":\"Como os benchmarks são conduzidos?\",\"howCanIContribute\":\"Como posso contribuir?\",\"howOftenAreBenchmarksUpdated\":\"Com que frequência os benchmarks são atualizados?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do pacote e a experiência do desenvolvedor das bibliotecas de internacionalização para aplicativos JavaScript e React.\",\"isTheDataReliable\":\"Os dados são confiáveis?\",\"thereAreManyWaysTo\":\"Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para obter detalhes.\",\"weFollowRigorousStatisticalMethodology\":\"Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de valores atípicos e intervalos de confiança. Todos os dados brutos são publicados com a análise para total transparência.\",\"weReRunAllBenchmarks\":\"Executamos novamente todos os benchmarks semanalmente contra as últimas versões estáveis de cada biblioteca. Os lançamentos de versões principais acionam um ciclo de re-benchmarking imediato.\",\"weRunStandardizedTestsIn\":\"Executamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório GitHub.\",\"weSupportReactI18nextReact\":\"Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\",\"whatIsI18nBenchmark\":\"O que é o i18n Benchmark?\",\"whichLibrariesAreCurrentlySupported\":\"Quais bibliotecas são suportadas atualmente?\",\"yesOurEnterprisePlanIncludes\":\"Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base no seu caso de uso específico, escala e restrições.\",\"yesCommunityBenchmarkSubmissionsAre\":\"Sim! Congratulamo-nos com o envio de benchmarks da comunidade. Por favor, faça um fork do repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe analisará e mesclará envios qualificados.\"},\"zh\":{\"canISubmitMyOwn\":\"我可以提交自己的基准测试吗？\",\"doYouOfferConsultingServices\":\"你们提供咨询服务吗？\",\"howAreBenchmarksConducted\":\"基准测试是如何进行的？\",\"howCanIContribute\":\"我如何贡献？\",\"howOftenAreBenchmarksUpdated\":\"基准测试多久更新一次？\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark 是一个开源基准测试套件，用于测量和比较 JavaScript 和 React 应用程序的国际化库的性能、包大小和开发人员体验。\",\"isTheDataReliable\":\"数据可靠吗？\",\"thereAreManyWaysTo\":\"有很多贡献方式：提交基准测试、改进文档、报告 bug、提出新指标或赞助项目。详情请访问我们的 GitHub 仓库。\",\"weFollowRigorousStatisticalMethodology\":\"我们遵循严谨的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都会随分析报告一起发布，以确保完全透明。\",\"weReRunAllBenchmarks\":\"我们每周针对每个库的最新稳定版本重新运行所有基准测试。主版本发布会触发立即的基准测试周期。\",\"weRunStandardizedTestsIn\":\"我们使用一致的硬件在隔离环境中运行标准化测试。每个基准测试都会重复多次以确保统计显著性。所有测试配置都在我们的 GitHub 仓库中公开。\",\"weSupportReactI18nextReact\":\"我们支持 react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react 和 Tolgee。\",\"whatIsI18nBenchmark\":\"什么是 i18n Benchmark？\",\"whichLibrariesAreCurrentlySupported\":\"目前支持哪些库？\",\"yesOurEnterprisePlanIncludes\":\"是的，我们的企业版计划为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和约束提供量身定制的建议。\",\"yesCommunityBenchmarkSubmissionsAre\":\"是的！我们欢迎社区提交基准测试。请点击 Fork 仓库，按照我们的贡献指南添加您的基准测试，并提交 Pull Request。我们的团队将审核并合并合格的提交。\"},\"ja\":{\"canISubmitMyOwn\":\"独自のベンチマークを提出できますか？\",\"doYouOfferConsultingServices\":\"コンサルティングサービスは提供していますか？\",\"howAreBenchmarksConducted\":\"ベンチマークはどのように行われますか？\",\"howCanIContribute\":\"どのように貢献できますか？\",\"howOftenAreBenchmarksUpdated\":\"ベンチマークはどのくらいの頻度で更新されますか？\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmarkは、JavaScriptおよびReactアプリケーション向けの国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者エクスペリエンスを測定および比較するオープンソースのベンチマークスイートです。\",\"isTheDataReliable\":\"データは信頼できますか？\",\"thereAreManyWaysTo\":\"貢献する方法はたくさんあります。ベンチマークの提出、ドキュメントの改善、バグ報告、新しい指標の提案、またはプロジェクトのスポンサーなどです。詳細については、GitHubリポジトリをご覧ください。\",\"weFollowRigorousStatisticalMethodology\":\"ウォームアップ実行、外れ値検出、信頼区間を含む厳密な統計手法に従います。すべての生データは、完全な透明性のために分析と共に公開されます。\",\"weReRunAllBenchmarks\":\"各ライブラリの最新の安定バージョンに対して毎週すべてのベンチマークを再実行します。メジャーバージョンのリリースにより、即時の再ベンチマークサイクルが開始されます。\",\"weRunStandardizedTestsIn\":\"一貫したハードウェアを使用して、隔離された環境で標準化されたテストを実行します。各ベンチマークは統計的な有意性を確保するために複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。\",\"weSupportReactI18nextReact\":\"react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。\",\"whatIsI18nBenchmark\":\"i18n Benchmarkとは何ですか？\",\"whichLibrariesAreCurrentlySupported\":\"現在、どのライブラリがサポートされていますか？\",\"yesOurEnterprisePlanIncludes\":\"はい、エンタープライズプランには、i18nソリューションを評価するチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、および制約に基づいてカスタマイズされた推奨事項を提供できます。\",\"yesCommunityBenchmarkSubmissionsAre\":\"はい！コミュニティからのベンチマーク提出を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。私たちのチームが適格な提出物をレビューしてマージします。\"},\"ko\":{\"canISubmitMyOwn\":\"함께 벤치마크를 제출할 수 있나요?\",\"doYouOfferConsultingServices\":\"컨설팅 서비스를 제공하나요?\",\"howAreBenchmarksConducted\":\"벤치마크는 어떻게 진행되나요?\",\"howCanIContribute\":\"어떻게 기여할 수 있나요?\",\"howOftenAreBenchmarksUpdated\":\"벤치마크는 얼마나 자주 업데이트되나요?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark는 JavaScript 및 React 애플리케이션을 위한 국제화 라이브러리의 성능, 번들 크기 및 개발자 경험을 측정하고 비교하는 오픈 소스 벤치마킹 제품군입니다.\",\"isTheDataReliable\":\"데이터를 신뢰할 수 있나요?\",\"thereAreManyWaysTo\":\"벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 등 기여할 수 있는 방법은 많습니다. 자세한 내용은 GitHub 리포지토리를 방문하세요.\",\"weFollowRigorousStatisticalMethodology\":\"저희는 웜업(warm-up) 실행, 이상치 감지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 모든 원시 데이터는 완전한 투명성을 위해 분석과 함께 공개됩니다.\",\"weReRunAllBenchmarks\":\"매주 각 라이브러리의 최신 안정 버전에 대해 모든 벤치마크를 다시 실행합니다. 메이저 버전 릴리스는 즉각적인 재벤치마크 주기를 트리거합니다.\",\"weRunStandardizedTestsIn\":\"일관된 하드웨어를 사용하여 격리된 환경에서 표준화된 테스트를 실행합니다. 각 벤치마크는 통계적 유의성을 보장하기 위해 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 리포지토리에서 공개적으로 사용할 수 있습니다.\",\"weSupportReactI18nextReact\":\"react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 및 Tolgee를 지원합니다.\",\"whatIsI18nBenchmark\":\"i18n Benchmark란 무엇인가요?\",\"whichLibrariesAreCurrentlySupported\":\"현재 어떤 라이브러리가 지원되나요?\",\"yesOurEnterprisePlanIncludes\":\"예, 엔터프라이즈 플랜에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다.\",\"yesCommunityBenchmarkSubmissionsAre\":\"네! 커뮤니티의 벤치마크 제출을 환영합니다. 리포지토리를 포크하고 기여 가이드에 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출해 주세요. 저희 팀이 제출물을 검토하고 병합할 것입니다.\"},\"ru\":{\"canISubmitMyOwn\":\"Могу ли я предложить свой бенчмарк?\",\"doYouOfferConsultingServices\":\"Предоставляете ли вы консалтинговые услуги?\",\"howAreBenchmarksConducted\":\"Как проводятся бенчмарки?\",\"howCanIContribute\":\"Как я могу внести свой вклад?\",\"howOftenAreBenchmarksUpdated\":\"Как часто обновляются бенчмарки?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark — это открытый набор тестов, который измеряет и сравнивает производительность, размер пакета и опыт разработчика библиотек интернационализации для приложений на JavaScript и React.\",\"isTheDataReliable\":\"Надежны ли данные?\",\"thereAreManyWaysTo\":\"Есть много способов внести свой вклад: предложить бенчмарки, улучшить документацию, сообщить о багах, предложить новые метрики или стать спонсором проекта. Посетите наш репозиторий GitHub для получения подробной информации.\",\"weFollowRigorousStatisticalMethodology\":\"Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с анализом для полной прозрачности.\",\"weReRunAllBenchmarks\":\"Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выпуски основных версий запускают немедленный цикл повторного тестирования.\",\"weRunStandardizedTestsIn\":\"Мы проводим стандартизированные тесты в изолированных средах с использованием одинакового оборудования. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории GitHub.\",\"weSupportReactI18nextReact\":\"Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.\",\"whatIsI18nBenchmark\":\"Что такое i18n Benchmark?\",\"whichLibrariesAreCurrentlySupported\":\"Какие библиотеки поддерживаются в данный момент?\",\"yesOurEnterprisePlanIncludes\":\"Да, наш план Enterprise включает консультационные часы для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации на основе вашего конкретного случая использования, масштаба и ограничений.\",\"yesCommunityBenchmarkSubmissionsAre\":\"Да! Мы приветствуем бенчмарки от сообщества. Пожалуйста, сделайте форк репозитория, добавьте свой бенчмарк, следуя нашему руководству по вкладу, и отправьте pull request. Наша команда рассмотрит и примет подходящие предложения.\"}}}")
}, ne = class {
	_events = /* @__PURE__ */ new Map();
	on(e, t) {
		return this._events.has(e) || this._events.set(e, /* @__PURE__ */ new Set()), this._events.get(e).add(t), () => this.removeListener(e, t);
	}
	removeListener(e, t) {
		this._events.get(e)?.delete(t);
	}
	emit(e, ...t) {
		this._events.get(e)?.forEach((e) => {
			e(...t);
		});
	}
}, re = (e, t) => {
	if (!t) return e;
	if (typeof e != "object" || !e) return;
	let n = e[t];
	if (n !== void 0) return n;
	if (!t.includes(".")) return;
	let r = e;
	for (let e of t.split(".")) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, ie = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, p = (e, t) => {
	let n = re(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return re(n, t);
	}
}, ae = (e) => {
	if (typeof e == "string") return e;
	if (!Array.isArray(e)) return "";
	let [t, n, r] = e;
	if (n === void 0) return `{${String(t)}}`;
	if (n === "plural" || n === "select" || n === "selectordinal") {
		let e = r ?? {}, i = [], a = "";
		for (let [t, n] of Object.entries(e)) {
			if (t === "offset") {
				a = `offset:${String(n)} `;
				continue;
			}
			i.push(`${t} {${oe(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, oe = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(ae).join("") : String(e ?? ""), se = "translation", ce = "enumeration", le = "plural", m = "insertion", ue = "object", de = "array", h = "markdown", g = "html", _ = "gender", fe = "select", v = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), y = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => y(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => y(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: de,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ue,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = y(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = y(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, b = (e) => v(ce, e), pe = (e) => v(_, e), me = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, x = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = me(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, he = /* @__PURE__ */ new Set([
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
]), ge = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, _e = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(ge)) {
		let e = !!r[1], i = r[2], a = r[3], o = !!r[4];
		if (!(a.trimStart().startsWith("://") || a.trimStart().startsWith(":"))) {
			if (e) {
				if (n.length === 0) t.push({
					type: "error",
					message: `Closing tag </${i}> has no matching opening tag`
				});
				else {
					let e = n[n.length - 1];
					e.tag.toLowerCase() !== i.toLowerCase() && t.push({
						type: "error",
						message: `Mismatched closing tag: expected </${e.tag}> but found </${i}>`
					}), n.pop();
				}
			} else {
				let e = he.has(i.toLowerCase());
				!o && !e && n.push({ tag: i });
			}
		}
	}
	for (let e of n) t.push({
		type: "error",
		message: `Unclosed HTML tag: <${e.tag}>`
	});
	return {
		valid: t.filter((e) => e.type === "error").length === 0,
		issues: t
	};
}, S = (e, t) => v(g, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = _e(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return x(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => x(await e)), typeof n == "string") return x(n);
	try {
		return x(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), C = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, w = (e) => v(m, e, { fields: (() => {
	if (typeof e == "string") return C(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => C(await e)), typeof t == "string") return C(t);
	try {
		return C(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), ve = (e) => v(le, e), ye = (e, t) => v(fe, e, { variable: t }), be = (e) => {
	let t = 0, n = () => {
		let n = [], i = "";
		for (; t < e.length;) {
			let a = e[t];
			if (a === "{") i &&= (n.push(i), ""), t++, n.push(r());
			else if (a === "}") break;
			else if (a === "'") {
				if (t + 1 < e.length && e[t + 1] === "'") i += "'", t += 2;
				else {
					let n = e.indexOf("'", t + 1);
					n === -1 ? (i += "'", t++) : (i += e.substring(t + 1, n), t = n + 1);
				}
			} else i += a, t++;
		}
		return i && n.push(i), n;
	}, r = () => {
		let r = "";
		for (; t < e.length && /[^,}]/.test(e[t]);) r += e[t], t++;
		if (r = r.trim(), t >= e.length) throw Error("Unclosed argument");
		if (e[t] === "}") return t++, {
			type: "argument",
			name: r
		};
		if (e[t] === ",") {
			t++;
			let i = "";
			for (; t < e.length && /[^,}]/.test(e[t]);) i += e[t], t++;
			if (i = i.trim(), t >= e.length) throw Error("Unclosed argument");
			if (e[t] === "}") return t++, {
				type: "argument",
				name: r,
				format: { type: i }
			};
			if (e[t] === ",") {
				if (t++, i === "plural" || i === "select" || i === "selectordinal") {
					let a = {};
					for (; t < e.length && e[t] !== "}";) {
						for (; t < e.length && /\s/.test(e[t]);) t++;
						let r = "";
						for (; t < e.length && /[^{\s]/.test(e[t]);) r += e[t], t++;
						for (; t < e.length && /\s/.test(e[t]);) t++;
						if (e[t] !== "{") throw Error("Expected { after option key");
						t++;
						let i = n();
						if (e[t] !== "}") throw Error("Expected } after option value");
						for (t++, a[r] = i; t < e.length && /\s/.test(e[t]);) t++;
					}
					if (t++, i === "plural") return {
						type: "plural",
						name: r,
						options: a
					};
					if (i === "select") return {
						type: "select",
						name: r,
						options: a
					};
					if (i === "selectordinal") return {
						type: "selectordinal",
						name: r,
						options: a
					};
				} else {
					let n = "";
					for (; t < e.length && e[t] !== "}";) n += e[t], t++;
					if (t >= e.length) throw Error("Unclosed argument");
					return n = n.trim(), t++, {
						type: "argument",
						name: r,
						format: {
							type: i,
							style: n
						}
					};
				}
			}
		}
		throw Error("Malformed argument");
	};
	return n();
}, T = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? S(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? S(t) : w(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? S(t) : t;
		if (t.type === "argument") return t.format ? w(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : w(`{{${t.name}}}`);
		if (t.type === "plural") {
			let e = {}, n = !1;
			for (let e of Object.keys(t.options)) if (e.startsWith("=")) {
				n = !0;
				break;
			}
			if (n) {
				for (let [n, r] of Object.entries(t.options)) {
					let i = n;
					n.startsWith("=") ? i = n.substring(1) : n === "one" ? i = "1" : n === "two" ? i = "2" : n === "few" ? i = "<=3" : n === "many" ? i = ">=4" : n === "other" && (i = "fallback");
					let a = r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
					e[i] = T(a);
				}
				return e.__intlayer_icu_var = t.name, b(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = T(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return ve(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = T(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? pe({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : ye(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = T(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, b(e);
		}
	}
	return e.map((e) => T([e]));
}, xe = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return T(be(e));
		} catch {
			return e;
		}
	}
}, Se = (e) => y(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...xe
	}]
}), Ce = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, we = (e, t) => e[Ce(e, t) ?? "fallback"], E = {
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
}, D = {
	mode: "prefix-all",
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, Te = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, Ee = 50, O = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Set(), De = (e) => {
	k.has(e) || (k.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Oe = {
	DisplayNames: class {
		of(e) {
			return e;
		}
	},
	ListFormat: class {
		format(e) {
			return Array.from(e).join(", ");
		}
		formatToParts(e) {
			return Array.from(e).flatMap((e, t) => t === 0 ? [{
				type: "element",
				value: e
			}] : [{
				type: "literal",
				value: ", "
			}, {
				type: "element",
				value: e
			}]);
		}
	},
	Segmenter: class {
		segment(e) {
			let t = 0;
			return Array.from(e).map((e) => {
				let n = t;
				return t += e.length, {
					segment: e,
					index: n
				};
			});
		}
	}
}, ke = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (De(e), Oe[e]);
};
function A(e, t, n) {
	let r = t ?? E?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = O.get(a);
	o || (o = /* @__PURE__ */ new Map(), O.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ke(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Ee && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ae = (e, t, n) => e[A("PluralRules", n).select(t)] ?? e.other, je = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Me = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], j = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Ne = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? A("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? A("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : A("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return A("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Pe = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = j(t, r);
	return o === void 0 ? e : i ? Ne(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = j(t, r);
	return o === void 0 ? e : Ne(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = j(t, n);
	return r === void 0 ? e : String(r);
}), M = (e, t) => e[t] ?? e.count ?? e.n, N = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Pe(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return N(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(N(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return N(r[m], t, n);
	if (r.nodeType === "html") return N(r[g], t, n);
	if (r.nodeType === "plural") {
		let e = r[le];
		return N(Ae(e, Number(M(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ce], i = Me.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Me.includes(t) || (o[t] = n);
		let s = M(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = A("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? we(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return N(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[fe], i = M(t, typeof r.variable == "string" ? r.variable : "value");
		return N(je(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[_];
		return N(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, P = (e, t = {}, n = "en") => {
	let r = N(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Fe = ((e) => (t, n = {}, r = "en") => P(typeof t == "string" ? e(t) : t, n, r))(Se), Ie = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, F = class extends ne {
	_locale;
	_locales;
	_catalogs = {};
	_loadFallbackWarned = !1;
	_boundDictionaries = {};
	_registry;
	constructor({ locale: e = "en", locales: t, messages: n, registry: r } = {}) {
		super(), this._locale = typeof e == "string" ? e : "en", this._locales = t, this._registry = r, n && this.mergeAllCatalogs(n);
	}
	get locale() {
		return this._locale;
	}
	get locales() {
		return this._locales;
	}
	get messages() {
		let e = { ...this._registry?.all(this._locale) };
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, ie(t));
		return {
			...this._catalogs[this._locale] ?? {},
			...e
		};
	}
	mergeLocaleCatalog(e, t) {
		this._catalogs[e] = {
			...this._catalogs[e],
			...t
		};
	}
	mergeAllCatalogs(e) {
		for (let [t, n] of Object.entries(e)) n && typeof n == "object" && this.mergeLocaleCatalog(t, n);
	}
	setMessagesCompiler(e) {
		return console.warn("@intlayer/lingui: i18n.setMessagesCompiler() is a no-op — message compilation is handled at build time by intlayer."), this;
	}
	load(e, t) {
		typeof e == "string" ? this.mergeLocaleCatalog(e, t ?? {}) : this.mergeAllCatalogs(e), this._loadFallbackWarned || (this._loadFallbackWarned = !0, console.warn("@intlayer/lingui: i18n.load() messages are used as a runtime fallback. For optimal bundle size, compile your catalogs into intlayer dictionaries instead of importing lingui locale files."));
	}
	loadAndActivate({ locale: e, locales: t, messages: n }) {
		n && this.mergeLocaleCatalog(e, n), this.activate(e, t);
	}
	bindDictionaries(e) {
		return this._boundDictionaries = e, this;
	}
	activate(e, t) {
		this._locale = e, this._locales = t, this.emit("change");
	}
	lookupBoundDictionaries(e) {
		let { dictionaryKey: t, remainder: n } = Ie(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = p(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = p(t, e);
			if (n !== void 0) return n;
		}
	}
	resolveTemplate(e) {
		let t = this.lookupBoundDictionaries(e);
		if (t !== void 0) return {
			kind: "node",
			node: t
		};
		let n = this._registry?.lookup(e, this._locale);
		if (n !== void 0) return {
			kind: "node",
			node: n
		};
		let r = this._catalogs[this._locale];
		if (r) {
			let t = p(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: oe(t)
			};
		}
	}
	_(e, t, n) {
		let r = typeof e == "object" && !!e, i = r ? e.id : e, a = r ? e.message ?? n?.message : n?.message, o = r ? {
			...e.values ?? {},
			...t ?? {}
		} : t ?? {}, s = this._locale, c = this.resolveTemplate(i) ?? {
			kind: "icu",
			message: a ?? i
		};
		return (c.kind === "node" ? P(c.node, o, s) : Fe(c.message, o, s)) ?? i;
	}
	t = (e, t, n) => this._(e, t, n);
	date(e, t) {
		if (e == null) return "";
		let n = e instanceof Date ? e : new Date(e);
		return new Intl.DateTimeFormat(this._locale, t).format(n);
	}
	number(e, t) {
		return new Intl.NumberFormat(this._locale, t).format(e);
	}
}, Le = t(null), I = /* @__PURE__ */ new WeakMap(), L = 0, Re = (e) => {
	if (!e) return "base";
	let t = I.get(e);
	if (t) return t;
	L += 1;
	let n = `p${L}`;
	return I.set(e, n), n;
}, ze = 256, R = /* @__PURE__ */ new WeakMap(), z = (e) => typeof e == "object" && !!e, Be = (e, t, n) => `${e}_${t}_${Re(n)}`, Ve = (e, t) => {
	if (!z(e)) return { hit: !1 };
	let n = R.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, B = (e, t, n) => {
	if (!z(e)) return n;
	let r = R.get(e);
	return r || (r = /* @__PURE__ */ new Map(), R.set(e, r)), r.size >= ze && r.clear(), r.set(t, n), n;
}, V = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), H = "default", He = /[^A-Za-z0-9._&=-]/g, U = /[^A-Za-z0-9._-]/g, Ue = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, W = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Ue);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, We = (e) => e === void 0 ? H : typeof e == "string" ? W(e, He) : Object.keys(e).sort().map((t) => `${W(t, U)}=${W(String(e[t]), U)}`).join("&"), Ge = (e) => Array.isArray(e) ? e.length === 0 ? [H] : e.map(We) : [We(e)], Ke = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? H : e[0] ?? "default";
}, qe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Je = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Ye = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Xe = (e, t) => {
	if (!Je(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? H : Ke(Ge(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => qe(e, n, t, s)).map((t) => Ye(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Ze = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Qe = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Ge(n).join(",") : String(n)}`;
}).join("|") : "", G = "\x1B[0m", $e = "\x1B[34m", et = "\x1B[31m", tt = "\x1B[32m", nt = "\x1B[38;5;3m", rt = (e) => e, it = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = rt(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, at = (e, t) => (n, r) => it(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), K = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? G : n : G}` : e, ot = (e, t = nt, n = G) => [e].flat().map((e) => K(e, t, n)).join(", ");
K("✗", et), K("✓", tt), K("⏲", $e);
var st = () => ({}), ct = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), lt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : ct.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : lt(e ? `${e}.${String(n)}` : String(n)) }), ut = /* @__PURE__ */ new Set(), dt = (e, t, n) => {
	let r = st()[e];
	return r ? kt(r, t, n) : (ut.has(e) || (at({ log: Te })(typeof window > "u" ? `Dictionary ${ot(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), ut.add(e)), lt(e));
}, ft = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, pt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (ft(e) && ft(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : pt(e[r], t[r]));
		return n;
	}
	return e;
}, mt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => pt(e, t));
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, ht = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[g] : e[h];
}, gt = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? g : h;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, _t = (e, t, n, r, i) => {
	let a = gt(e, V(ht(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, vt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: se,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return mt(o, e, t);
	}
}, yt = J, bt = (e) => J, xt = J, St = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: m }], i = e[m], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => _t(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = V(i, e);
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
}, Ct = J, wt = J, Tt = (e) => J, Et = J, Dt = (e, t = !0) => [
	vt(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
	yt,
	xt,
	St,
	Tt(e ?? E.defaultLocale),
	Et,
	Ct,
	wt
], Ot = (e, t, n = []) => y(e, {
	...t,
	plugins: n
}), kt = (e, t, n) => {
	let { locale: r, selector: i } = Ze(t), a = Be(r ?? E.defaultLocale, Qe(i), n), o = Ve(e, a);
	if (o.hit) return o.content;
	let s = n ?? Dt(r), c = Xe(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Ot(e.content, t, s);
	};
	return c === null ? B(e, a, null) : Array.isArray(c) ? B(e, a, c.map(l)) : B(e, a, l(c));
}, At = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", jt = /\{\{\s*(.*?)\s*\}\}/g, Mt = (e, t = {}) => {
	if (!Object.values(t).some(At)) return {
		isSimple: !0,
		parts: e.replace(jt, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(jt), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Nt = () => {
	try {
		return Object.keys(st());
	} catch {
		return [];
	}
}, Pt = (e, t) => {
	let n = Nt(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return dt(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = p(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = p(a(t), e);
		if (n !== void 0) return n;
	}
}, Ft = (e) => {
	let t = {};
	for (let n of Nt()) try {
		Object.assign(t, ie(dt(n, e)));
	} catch {}
	return t;
}, It = () => ({
	lookup: Pt,
	all: Ft
}), Lt = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : u(ee, { children: e });
	return new Proxy(i, { get(e, r, i) {
		if (r === "value") return t;
		if (r === Symbol.toPrimitive) return () => t ?? "";
		if (r === "toString") return () => String(t ?? "");
		if (r === "valueOf") return () => t;
		if (n && Object.hasOwn(n, r)) return n[r];
		if (t != null && typeof r == "string" && r !== "constructor" && !(r in e)) {
			let e = Object(t);
			if (r in e) {
				let n = e[r];
				return typeof n == "function" ? n.bind(t) : n;
			}
		}
		return Reflect.get(e, r, i);
	} });
}, Rt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => Lt({
		...n,
		value: n.children,
		children: n.children
	})
}, zt = J, Bt = (t, r) => {
	let i = Mt(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Vt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: m }], i = e[m], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => _t(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Bt(i, e);
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
}, Ht = J, Ut = J, Y = /* @__PURE__ */ new Map(), Wt = (e, t = !0) => {
	let n = `${e ?? E.defaultLocale}_${t}`;
	if (Y.has(n)) return Y.get(n);
	let r = [
		vt(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
		yt,
		bt(e ?? E.defaultLocale),
		xt,
		Tt(e ?? E.defaultLocale),
		Et,
		Ct,
		wt,
		Rt,
		zt,
		Vt,
		Ht,
		Ut
	];
	return Y.set(n, r), r;
}, Gt = (e, t) => kt(e, t, Wt(typeof t == "object" && t ? t.locale : t)), Kt = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, qt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Kt(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Jt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var X = {
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
}, Yt = (e = X) => {
	let { locales: t } = E;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Jt) for (let t = 0; t < (D.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(D.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Xt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Jt && D.storage.cookies) for (let n = 0; n < D.storage.cookies.length; n++) {
		let { name: r, attributes: i } = D.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Kt(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, qt(r, e, i));
			} catch {}
		}
	}
}, Zt = Yt(X), Qt = (e, t) => Xt(e, {
	...X,
	isCookieEnabled: t
}), $t = () => {
	let { locale: e } = a(Z) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, en = ({ children: e }) => ($t(), e), tn = () => {
	let { locale: e } = a(Z) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, nn = ({ children: e }) => (tn(), e), rn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, an = (e, t = E?.locales, n = E?.defaultLocale) => {
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
}, Z = t({
	locale: Zt ?? E?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), on = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: ee } = E ?? {}, [d, f] = l(e ?? Zt ?? t ?? ee);
	o(() => {
		e && e !== d && f(e);
	}, [e]), o(() => {
		rn();
	}, []);
	let te = i ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), Qt(e, s);
		}
	}), ne = an(d);
	return u(Z.Provider, {
		value: {
			locale: ne,
			setLocale: te,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, sn = ({ children: e, ...t }) => d(on, {
	...t,
	children: [
		u(en, {}),
		u(nn, {}),
		e
	]
}), { defaultLocale: cn, locales: Q } = E ?? {}, ln = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(Z) ?? {};
	return {
		locale: n,
		defaultLocale: cn,
		availableLocales: Q,
		setLocale: i((n) => {
			if (!Q?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), Qt(n, e ?? o ?? !0), t?.(n);
		}, [
			Q,
			t,
			r,
			e
		])
	};
}, un = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = l(() => r(e)), [s, c] = l(e.locale);
	return o(() => (a(r(e)), c(e.locale), e.on("change", () => {
		a(r(e)), c(e.locale);
	})), [e]), u(Le.Provider, {
		value: i,
		children: u(sn, {
			locale: s,
			children: n
		})
	});
}, dn = (e, t) => {
	let n = new F({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, fn = (...e) => {
	let { locale: t } = ln(), n = e.map((e) => e.key).join("\0");
	return s(() => dn(t, Object.fromEntries(e.map((e) => [e.key, Gt(e, t)]))), [t, n]);
}, pn = (e) => new F({
	...e,
	registry: It()
});
pn({ locale: "en" });
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/src/components/pages/faq/FAQList.tsx";
function mn() {
	let { i18n: e } = fn(te), t = [
		{
			q: e._({
				id: "faq-list.whatIsI18nBenchmark",
				message: "What is i18n Benchmark?"
			}),
			a: e._({
				id: "faq-list.whatIsI18nBenchmarkAnswer",
				message: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications."
			})
		},
		{
			q: e._({
				id: "faq-list.howAreBenchmarksConducted",
				message: "How are benchmarks conducted?"
			}),
			a: e._({
				id: "faq-list.weRunStandardizedTestsIn",
				message: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository."
			})
		},
		{
			q: e._({
				id: "faq-list.whichLibrariesAreCurrentlySupported",
				message: "Which libraries are currently supported?"
			}),
			a: e._({
				id: "faq-list.weSupportReactI18nextReact",
				message: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee."
			})
		},
		{
			q: e._({
				id: "faq-list.canISubmitMyOwn",
				message: "Can I submit my own benchmarks?"
			}),
			a: e._({
				id: "faq-list.yesCommunityBenchmarkSubmissionsAre",
				message: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions."
			})
		},
		{
			q: e._({
				id: "faq-list.howOftenAreBenchmarksUpdated",
				message: "How often are benchmarks updated?"
			}),
			a: e._({
				id: "faq-list.weReRunAllBenchmarks",
				message: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle."
			})
		},
		{
			q: e._({
				id: "faq-list.isTheDataReliable",
				message: "Is the data reliable?"
			}),
			a: e._({
				id: "faq-list.weFollowRigorousStatisticalMethodology",
				message: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency."
			})
		},
		{
			q: e._({
				id: "faq-list.doYouOfferConsultingServices",
				message: "Do you offer consulting services?"
			}),
			a: e._({
				id: "faq-list.yesOurEnterprisePlanIncludes",
				message: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints."
			})
		},
		{
			q: e._({
				id: "faq-list.howCanIContribute",
				message: "How can I contribute?"
			}),
			a: e._({
				id: "faq-list.thereAreManyWaysTo",
				message: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
			})
		}
	];
	return f("div", {
		className: "mx-auto max-w-3xl space-y-4",
		children: t.map((e) => f("details", {
			className: "group rounded-lg border border-border bg-card",
			children: [f("summary", {
				className: "cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors",
				children: e.q
			}, void 0, !1, {
				fileName: $,
				lineNumber: 104,
				columnNumber: 11
			}, this), f("p", {
				className: "px-6 pb-4 text-sm text-muted-foreground",
				children: e.a
			}, void 0, !1, {
				fileName: $,
				lineNumber: 107,
				columnNumber: 11
			}, this)]
		}, e.q, !0, {
			fileName: $,
			lineNumber: 100,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: $,
		lineNumber: 98,
		columnNumber: 5
	}, this);
}
function hn(e, t) {
	let n = pn();
	return n.activate(e), n;
}
var gn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/scripts/Wrapper.tsx";
function _n({ children: e }) {
	let t = s(() => hn("en"), []);
	return f(un, {
		i18n: t,
		children: e
	}, void 0, !1, {
		fileName: gn,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var vn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/src/components/pages/faq/FAQList.wrapper.tsx";
function yn() {
	return f(_n, { children: f(mn, {}, void 0, !1, {
		fileName: vn,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: vn,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { yn as default };
