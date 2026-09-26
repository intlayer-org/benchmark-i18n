import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useMemo as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
var ee = {
	key: "faq-list",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"whatIsI18nBenchmark\":\"What is i18n Benchmark?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"howAreBenchmarksConducted\":\"How are benchmarks conducted?\",\"weRunStandardizedTestsIn\":\"We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\",\"whichLibrariesAreCurrentlySupported\":\"Which libraries are currently supported?\",\"weSupportReactI18nextReact\":\"We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\",\"canISubmitMyOwn\":\"Can I submit my own benchmarks?\",\"yesCommunityBenchmarkSubmissionsAre\":\"Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\",\"howOftenAreBenchmarksUpdated\":\"How often are benchmarks updated?\",\"weReRunAllBenchmarks\":\"We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\",\"isTheDataReliable\":\"Is the data reliable?\",\"weFollowRigorousStatisticalMethodology\":\"We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\",\"doYouOfferConsultingServices\":\"Do you offer consulting services?\",\"yesOurEnterprisePlanIncludes\":\"Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\",\"howCanIContribute\":\"How can I contribute?\",\"thereAreManyWaysTo\":\"There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\"},\"fr\":{\"whatIsI18nBenchmark\":\"Qu'est-ce qu'i18n Benchmark ?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark est une suite de tests open source qui mesure et compare les performances, la taille du bundle et l'expérience développeur des bibliothèques d'internationalisation pour les applications JavaScript et React.\",\"howAreBenchmarksConducted\":\"Comment les benchmarks sont-ils menés ?\",\"weRunStandardizedTestsIn\":\"Nous effectuons des tests standardisés dans des environnements isolés en utilisant un matériel cohérent. Chaque benchmark est répété plusieurs fois pour garantir une signification statistique. Toutes les configurations de test sont disponibles publiquement dans notre dépôt GitHub.\",\"whichLibrariesAreCurrentlySupported\":\"Quelles bibliothèques sont actuellement supportées ?\",\"weSupportReactI18nextReact\":\"Nous supportons react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react et Tolgee.\",\"canISubmitMyOwn\":\"Puis-je soumettre mes propres benchmarks ?\",\"yesCommunityBenchmarkSubmissionsAre\":\"Oui ! Les soumissions de benchmarks par la communauté sont les bienvenues. Forkez notre dépôt, ajoutez votre benchmark en suivant notre guide de contribution et soumettez une pull request. Notre équipe examinera et fusionnera les soumissions qualifiées.\",\"howOftenAreBenchmarksUpdated\":\"À quelle fréquence les benchmarks sont-ils mis à jour ?\",\"weReRunAllBenchmarks\":\"Nous relançons tous les benchmarks chaque semaine avec les dernières versions stables de chaque bibliothèque. Les sorties de versions majeures déclenchent un cycle de re-benchmarking immédiat.\",\"isTheDataReliable\":\"Les données sont-elles fiables ?\",\"weFollowRigorousStatisticalMethodology\":\"Nous suivons une méthodologie statistique rigoureuse, incluant des phases de préchauffage, la détection des valeurs aberrantes et des intervalles de confiance. Toutes les données brutes sont publiées avec notre analyse pour une transparence totale.\",\"doYouOfferConsultingServices\":\"Offrez-vous des services de conseil ?\",\"yesOurEnterprisePlanIncludes\":\"Oui, notre offre Enterprise inclut des heures de conseil pour les équipes évaluant les solutions i18n. Nous pouvons fournir des recommandations personnalisées basées sur votre cas d'utilisation, votre échelle et vos contraintes spécifiques.\",\"howCanIContribute\":\"Comment puis-je contribuer ?\",\"thereAreManyWaysTo\":\"Il y a de nombreuses façons de contribuer : soumettre des benchmarks, améliorer la documentation, signaler des bugs, suggérer de nouvelles métriques ou parrainer le projet. Visitez notre dépôt GitHub pour plus de détails.\"},\"es\":{\"whatIsI18nBenchmark\":\"¿Qué es i18n Benchmark ?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark es una suite de pruebas de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del développeur de las bibliotecas de internacionalización para aplicaciones JavaScript y React.\",\"howAreBenchmarksConducted\":\"¿Cómo se realizan los benchmarks ?\",\"weRunStandardizedTestsIn\":\"Realizamos pruebas estandarizadas en entornos aislados utilizando un hardware consistente. Cada benchmark se repite varias veces para garantizar la significancia estadística. Todas las configuraciones de prueba están disponibles públicamente en nuestro repositorio de GitHub.\",\"whichLibrariesAreCurrentlySupported\":\"¿Qué bibliotecas son compatibles actualmente ?\",\"weSupportReactI18nextReact\":\"Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.\",\"canISubmitMyOwn\":\"¿Puedo enviar mis propios benchmarks ?\",\"yesCommunityBenchmarkSubmissionsAre\":\"¡Sí! Las presentaciones de benchmarks de la comunidad son bienvenidas. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía un pull request. Nuestro equipo revisará y combinará las presentaciones que califiquen.\",\"howOftenAreBenchmarksUpdated\":\"¿Con qué frecuencia se funcionan los benchmarks ?\",\"weReRunAllBenchmarks\":\"Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.\",\"isTheDataReliable\":\"¿Son fiables los datos ?\",\"weFollowRigorousStatisticalMethodology\":\"Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.\",\"doYouOfferConsultingServices\":\"¿Ofrecen servicios de consultoría ?\",\"yesOurEnterprisePlanIncludes\":\"Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso, escala y limitaciones específicas.\",\"howCanIContribute\":\"¿Cómo puedo contribuir ?\",\"thereAreManyWaysTo\":\"Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de bugs, sugerir nuevas métricas o patrocinar el proyecto. Visita nuestro repositorio de GitHub para más detalles.\"},\"de\":{\"whatIsI18nBenchmark\":\"Was ist i18n Benchmark ?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark ist eine Open-Source-Benchmarking-Suite, welche die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungs-Bibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.\",\"howAreBenchmarksConducted\":\"Wie werden die Benchmarks durchgeführt ?\",\"weRunStandardizedTestsIn\":\"Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrfach wiederholt, um statistische Signifikanz zu gewährleisten. Alle Testkonfigurationen sind in unserem GitHub-Repository öffentlich zugänglich.\",\"whichLibrariesAreCurrentlySupported\":\"Welche Bibliotheken werden derzeit unterstützt ?\",\"weSupportReactI18nextReact\":\"Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.\",\"canISubmitMyOwn\":\"Kann ich meine eigenen Benchmarks einreichen ?\",\"yesCommunityBenchmarkSubmissionsAre\":\"Ja! Einreichungen von Benchmarks durch die Community sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird qualifizierte Einreichungen prüfen und zusammenführen.\",\"howOftenAreBenchmarksUpdated\":\"Wie oft werden die Benchmarks aktualisiert ?\",\"weReRunAllBenchmarks\":\"Wir führen alle Benchmarks wöchentlich gegen die neuesten stabilen Versionen jeder Bibliothek neu aus. Major-Releases lösen einen sofortigen Re-Benchmark-Zyklus aus.\",\"isTheDataReliable\":\"Sind die Daten zuverlässig ?\",\"weFollowRigorousStatisticalMethodology\":\"Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Phasen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.\",\"doYouOfferConsultingServices\":\"Bieten Sie Beratungsdienstleistungen an ?\",\"yesOurEnterprisePlanIncludes\":\"Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Umfang und Ihren Einschränkungen geben.\",\"howCanIContribute\":\"Wie kann ich beitragen ?\",\"thereAreManyWaysTo\":\"Es gibt viele Möglichkeiten, beizutragen: Benchmarks einreichen, die Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.\"},\"it\":{\"whatIsI18nBenchmark\":\"Cos'è i18n Benchmark ?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark è una suite di test open source che misura e confronta le prestazioni, la dimensione del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.\",\"howAreBenchmarksConducted\":\"Come vengono condotti i benchmark ?\",\"weRunStandardizedTestsIn\":\"Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni di test sono disponibili pubblicamente nel nostro repository GitHub.\",\"whichLibrariesAreCurrentlySupported\":\"Quali librerie sono attualmente supportate ?\",\"weSupportReactI18nextReact\":\"Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\",\"canISubmitMyOwn\":\"Posso inviare i miei benchmark ?\",\"yesCommunityBenchmarkSubmissionsAre\":\"Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.\",\"howOftenAreBenchmarksUpdated\":\"Con quale frequenza vengono aggiornati i benchmark ?\",\"weReRunAllBenchmarks\":\"Eseguiamo nuovamente tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. Le versioni principali in uscita attivano un immediato ciclo di re-benchmark.\",\"isTheDataReliable\":\"I dati sono affidabili ?\",\"weFollowRigorousStatisticalMethodology\":\"Seguiamo una rigorosa metodologia statistica che include corse di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per una completa trasparenza.\",\"doYouOfferConsultingServices\":\"Offrite servizi di consulenza ?\",\"yesOurEnterprisePlanIncludes\":\"Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano le soluzioni i18n. Abbiamo la possibilità di fornire raccomandazioni personalizzate basate sul caso d'uso specifico, sulla scala e sui vincoli.\",\"howCanIContribute\":\"Come posso contribuire ?\",\"thereAreManyWaysTo\":\"Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.\"},\"pt\":{\"whatIsI18nBenchmark\":\"O que é o i18n Benchmark ?\",\"whatIsI18nBenchmarkAnswer\":\"O i18n Benchmark é uma suíte de testes de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do developpeur de bibliotecas de internacionalização para aplicativos JavaScript e React.\",\"howAreBenchmarksConducted\":\"Como os benchmarks são conduzidos ?\",\"weRunStandardizedTestsIn\":\"Executamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório no GitHub.\",\"whichLibrariesAreCurrentlySupported\":\"Quais bibliotecas são suportadas atualmente ?\",\"weSupportReactI18nextReact\":\"Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\",\"canISubmitMyOwn\":\"Posso enviar meus próprios benchmarks ?\",\"yesCommunityBenchmarkSubmissionsAre\":\"Sim! Submissões de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.\",\"howOftenAreBenchmarksUpdated\":\"Com que frequência os benchmarks são atualizados ?\",\"weReRunAllBenchmarks\":\"Executamos novamente todos os benchmarks semanalmente com as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo imediato de re-benchmark.\",\"isTheDataReliable\":\"Os dados são confiáveis ?\",\"weFollowRigorousStatisticalMethodology\":\"Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de outliers e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.\",\"doYouOfferConsultingServices\":\"Vocês oferecem serviços de consultoria ?\",\"yesOurEnterprisePlanIncludes\":\"Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Temos a possibilidade de fornecer recomendações personalizadas com base em seu caso de uso, escala e restrições específicas.\",\"howCanIContribute\":\"Como posso contribuir ?\",\"thereAreManyWaysTo\":\"Existem muitas maneiras de contribuir: envie benchmarks, melhore a documentação, relate bugs, sugira novas métricas ou patrocine o projeto. Visite nosso repositório no GitHub para mais detalhes.\"},\"zh\":{\"whatIsI18nBenchmark\":\"什么是 i18n Benchmark ?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark 是一个开源基准测试套件，用于测量和比较 JavaScript 和 React 应用程序国际化库的性能、捆绑包大小和开发人员经验。\",\"howAreBenchmarksConducted\":\"如何进行基准测试 ?\",\"weRunStandardizedTestsIn\":\"我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都会重复多次以确保统计显著性。所有测试配置都可以在我们的 GitHub 存储库中公开获得。\",\"whichLibrariesAreCurrentlySupported\":\"目前支持哪些库 ?\",\"weSupportReactI18nextReact\":\"我们支持 react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react 和 Tolgee。\",\"canISubmitMyOwn\":\"我可以提交自己的基准测试吗 ?\",\"yesCommunityBenchmarkSubmissionsAre\":\"是的！欢迎社区提交基准测试。分叉我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审查并合并合格的提交。\",\"howOftenAreBenchmarksUpdated\":\"基准测试更新频率如何 ?\",\"weReRunAllBenchmarks\":\"我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会立即触发重新基准测试周期。\",\"isTheDataReliable\":\"数据可靠吗 ?\",\"weFollowRigorousStatisticalMethodology\":\"我们遵循严谨的统计方法论，包括预热运行、异常值检测和置信区间。所有原始数据与其分析结果一起发布，以实现完全透明。\",\"doYouOfferConsultingServices\":\"你们提供咨询服务吗 ?\",\"yesOurEnterprisePlanIncludes\":\"是的，我们的企业计划为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的特定用例、规模和限制提供定制建议。\",\"howCanIContribute\":\"我该如何贡献 ?\",\"thereAreManyWaysTo\":\"有很多方式可以贡献：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。\"},\"ja\":{\"whatIsI18nBenchmark\":\"i18n Benchmarkとは何ですか？\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmarkは、JavaScriptおよびReactアプリケーション用の国際化ライブラリのパフォーマンス、バンドルサイズ、開発者体験を測定および比較するオープンソースのベンチマークスイーツです。\",\"howAreBenchmarksConducted\":\"ベンチマークはどのように行われますか？\",\"weRunStandardizedTestsIn\":\"一貫したハードウェアを使用した隔離された環境で標準化されたテストを実行します。各ベンチマークは、統計的有意性を確保するために複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。\",\"whichLibrariesAreCurrentlySupported\":\"現在サポートされているライブラリは何ですか？\",\"weSupportReactI18nextReact\":\"react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、Tolgeeをサポートしています。\",\"canISubmitMyOwn\":\"自分のベンチマークを提出できますか？\",\"yesCommunityBenchmarkSubmissionsAre\":\"はい！コミュニティからのベンチマーク提出を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。チームが審査し、適合する提出物をマージします。\",\"howOftenAreBenchmarksUpdated\":\"ベンチマークはどのくらいの頻度で更新されますか？\",\"weReRunAllBenchmarks\":\"毎週、各ライブラリの最新の安定版に対してすべてのベンチマークを再実行します。メジャーバージョンのリリースにより、即座に再ベンチマークサイクルがトリガーされます。\",\"isTheDataReliable\":\"データは信頼できますか？\",\"weFollowRigorousStatisticalMethodology\":\"ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計的手法に従っています。すべての生のデータは、完全な透明性のために分析結果とともに公開されます。\",\"doYouOfferConsultingServices\":\"コンサルティングサービスは提供していますか？\",\"yesOurEnterprisePlanIncludes\":\"はい、エンタープライズプランには、i18nソリューションを評価するチームのためのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいたカスタマイズされた推奨事項を提供できます。\",\"howCanIContribute\":\"どのように貢献できますか？\",\"thereAreManyWaysTo\":\"貢献する方法はたくさんあります：ベンチマークの提出、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトのスポンサーなど。詳細はGitHubリポジトリをご覧ください。\"},\"ko\":{\"whatIsI18nBenchmark\":\"i18n Benchmark란 무엇인가요?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark는 JavaScript 및 React 애플리케이션용 국제화 라이브러리의 성능, 번들 크기 및 개발자 경험을 측정하고 비교하는 오픈 소스 벤치마킹 제품군입니다.\",\"howAreBenchmarksConducted\":\"벤치마크는 어떻게 진행되나요?\",\"weRunStandardizedTestsIn\":\"일관된 하드웨어를 사용하는 격리된 환경에서 표준화된 테스트를 실행합니다. 각 벤치마크는 통계적 유의성을 확보하기 위해 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 저장소에 공개되어 있습니다.\",\"whichLibrariesAreCurrentlySupported\":\"현재 어떤 라이브러리가 지원되나요?\",\"weSupportReactI18nextReact\":\"react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee를 지원합니다.\",\"canISubmitMyOwn\":\"저만의 벤치마크를 제출할 수 있나요?\",\"yesCommunityBenchmarkSubmissionsAre\":\"네! 커뮤니티의 벤치마크 제출을 환영합니다. 저장소를 포크하고 기여 가이드에 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출하세요. 저희 팀이 검토 후 마지(merge)할 것입니다.\",\"howOftenAreBenchmarksUpdated\":\"벤치마크는 얼마나 자주 업데이트되나요?\",\"weReRunAllBenchmarks\":\"매주 각 라이브러리의 최신 안정 버전에 대해 모든 벤치마크를 다시 실행합니다. 주요 버전이 릴리스되면 즉시 재벤치마크 주기가 시작됩니다.\",\"isTheDataReliable\":\"데이터는 신뢰할 수 있나요?\",\"weFollowRigorousStatisticalMethodology\":\"웜업 실행, 이상치 감지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 모든 원시 데이터는 완전한 투명성을 위해 분석 결과와 함께 게시됩니다.\",\"doYouOfferConsultingServices\":\"컨설팅 서비스를 제공하나요?\",\"yesOurEnterprisePlanIncludes\":\"네, 엔터프라이즈 플랜에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 특정 사례, 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다.\",\"howCanIContribute\":\"어떻게 기여할 수 있나요?\",\"thereAreManyWaysTo\":\"기여하는 방법은 다양합니다: 벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 또는 프로젝트 후원. 자세한 내용은 GitHub 저장소를 방문하세요.\"},\"ru\":{\"whatIsI18nBenchmark\":\"Что такое i18n Benchmark ?\",\"whatIsI18nBenchmarkAnswer\":\"i18n Benchmark — это набор тестов с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчика библиотек интернационализации для приложений JavaScript и React.\",\"howAreBenchmarksConducted\":\"Как проводятся бенчмарки ?\",\"weRunStandardizedTestsIn\":\"Мы проводим стандартизированные тесты в изолированных средах с использованием единообразного оборудования. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов открыты в нашем репозитории GitHub.\",\"whichLibrariesAreCurrentlySupported\":\"Какие библиотеки поддерживаются в настоящее время ?\",\"weSupportReactI18nextReact\":\"Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.\",\"canISubmitMyOwn\":\"Могу ли я отправить свои собственные бенчмарки ?\",\"yesCommunityBenchmarkSubmissionsAre\":\"Да! Мы приветствуем отправку бенчмарков от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя нашему руководству по внесению вклада, и отправьте пулл-реквест. Наша команда рассмотрит и примет квалифицированные заявки.\",\"howOftenAreBenchmarksUpdated\":\"Как часто обновляются бенчмарки ?\",\"weReRunAllBenchmarks\":\"Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий вызывает немедленный цикл повторного тестирования.\",\"isTheDataReliable\":\"Надежны ли данные ?\",\"weFollowRigorousStatisticalMethodology\":\"Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с нашим анализом для полной прозрачности.\",\"doYouOfferConsultingServices\":\"Предлагаете ли вы консультационные услуги ?\",\"yesOurEnterprisePlanIncludes\":\"Да, наш корпоративный план включает консультационные часы для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации, основанные на вашем конкретном случае использования, масштабе и ограничениях.\",\"howCanIContribute\":\"Как я могу помочь ?\",\"thereAreManyWaysTo\":\"Есть много способов внести свой вклад: отправить бенчмарки, улучшить документацию, сообщить о багах, предложить новые метрики или спонсировать проект. Посетите наш репозиторий GitHub для более подробной информации.\"}}}")
}, p = /* @__PURE__ */ new WeakMap(), m = 0, te = (e) => {
	if (!e) return "base";
	let t = p.get(e);
	if (t) return t;
	m += 1;
	let n = `p${m}`;
	return p.set(e, n), n;
}, h = 256, g = /* @__PURE__ */ new WeakMap(), _ = (e) => typeof e == "object" && !!e, v = (e, t, n) => `${e}_${t}_${te(n)}`, ne = (e, t) => {
	if (!_(e)) return { hit: !1 };
	let n = g.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, y = (e, t, n) => {
	if (!_(e)) return n;
	let r = g.get(e);
	return r || (r = /* @__PURE__ */ new Map(), g.set(e, r)), r.size >= h && r.clear(), r.set(t, n), n;
}, re = "translation", ie = "enumeration", ae = "plural", oe = "condition", b = "insertion", se = "object", ce = "array", x = "markdown", S = "html", C = "gender", le = "select", w = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, T);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, w(t, e, {
		type: ce,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: se,
			key: r
		};
		if (t.eager) {
			n[r] = T(e[r], w(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = T(e[r], w(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, ue = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, de = (e, t) => e[ue(e, t) ?? "fallback"], fe = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), E = {
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
}, pe = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, me = "\x1B[0m", he = "\x1B[34m", ge = "\x1B[31m", _e = "\x1B[32m", ve = "\x1B[36m", ye = (e) => e, be = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = ye(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, xe = (e, t) => (n, r) => be(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), O = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? me : n : me}` : e;
O("✗", ge), O("✓", _e), O("⏲", he);
var Se = 50, Ce = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Set(), Te = (e) => {
	we.has(e) || (we.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ee = {
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
}, De = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Te(e), Ee[e]);
};
function k(e, t, n) {
	let r = t ?? E?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Ce.get(a);
	o || (o = /* @__PURE__ */ new Map(), Ce.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? De(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Se && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Oe = (e, t, n) => e[k("PluralRules", n).select(t)] ?? e.other, ke = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, A = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, j = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !A(e) || !A(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? j(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Ae = (e, t, n) => {
	let r = (t) => e[t], i = r(t);
	if (typeof i == "string") return i;
	let a = [
		t,
		t.split("-")[0],
		n,
		n?.split("-")[0]
	], o = [];
	for (let e = 0; e < a.length; e++) {
		let t = a[e];
		if (!t || a.indexOf(t) < e) continue;
		let n = r(t);
		if (n !== void 0) {
			if (typeof n == "string") {
				if (o.length === 0) return n;
				continue;
			}
			o.push(n);
		}
	}
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => j(e, t));
}, M = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, je = (e) => {
	if (typeof e == "string") return e;
	if (M(e)) return e.nodeType === "html" ? e[S] : e[x];
}, Me = (e, t) => {
	if (typeof e == "string") return t;
	if (M(e)) {
		let n = e.nodeType === "html" ? S : x;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, N = (e, t, n, r, i) => {
	let a = Me(e, fe(je(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, P = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ne = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, F = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? P : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Ae(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: re,
				key: e
			}]
		});
	}
}, I = P, L = (e) => P, R = P, Pe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? P : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: b }], i = e[b], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || M(e),
			transform: (e, n, r) => {
				if (M(e)) return (i) => N(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = fe(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return B(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, z = [
	ie,
	oe,
	ae,
	C,
	le
], Fe = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !z.includes(i)) return t;
	let a = i === "plural" || i === "enumeration";
	return (e) => {
		if (typeof e == "object" && e) return t({
			...n,
			...e
		});
		if (a) return t({
			...n,
			count: e
		});
		let i = t(e);
		return !r && Ne(i) ? i(n) : i;
	};
}, B = (e, t) => typeof t == "function" && z.includes(e?.nodeType ?? "") ? (n) => Fe(e, t, n) : t, V = P, H = P, U = (e) => P, W = P, Ie = (e, t = !0) => [
	F(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
	I,
	L(e ?? E.defaultLocale),
	R,
	Pe,
	U(e ?? E.defaultLocale),
	W,
	V,
	H
].filter((e) => e !== P), Le = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), G = /* @__PURE__ */ new WeakSet(), Re = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = v(r ?? E.defaultLocale, "", n), o = ne(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ie(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !G.has(e)
		};
		G.add(e);
		try {
			return Le(e.content, t, s);
		} finally {
			t.eager && G.delete(e);
		}
	};
	return c === null ? y(e, a, null) : Array.isArray(c) ? y(e, a, c.map(l)) : y(e, a, l(c));
}, ze = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Be = /\{\{\s*(.*?)\s*\}\}/g, Ve = (e, t = {}) => {
	if (!Object.values(t).some(ze)) return {
		isSimple: !0,
		parts: e.replace(Be, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Be), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, He = (e, t, n = ".") => {
	if (!t) return e;
	if (typeof e == "object" && e) {
		let n = e[t];
		if (n !== void 0) return n;
	}
	if (n === !1 || !t.includes(n)) return;
	let r = e;
	for (let e of t.split(n)) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, Ue = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], K = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, We = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? k("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? k("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : k("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return k("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Ge = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : i ? We(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : We(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = K(t, n);
	return r === void 0 ? e : String(r);
}), q = (e, t) => e[t] ?? e.count ?? e.n, J = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Ge(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return J(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(J(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return J(r[b], t, n);
	if (r.nodeType === "html") return J(r[S], t, n);
	if (r.nodeType === "plural") {
		let e = r[ae];
		return J(Oe(e, Number(q(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ie], i = Ue.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ue.includes(t) || (o[t] = n);
		let s = q(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = k("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? de(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return J(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[le], i = q(t, typeof r.variable == "string" ? r.variable : "value");
		return J(ke(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[C];
		return J(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Ke = (e, t = {}, n = "en") => {
	let r = J(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Y = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : o && t.push({
			tag: o,
			children: Y(s ?? "")
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, qe = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Je = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = Je(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), Ye = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Ye(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Xe = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return Ze(e, (e) => He(t, r(e)), r);
}, Ze = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return Ke(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = qe(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: Je(Y(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = qe(t), o = r(e, i);
			return o === void 0 ? n(e) : Ye(Y(o), a);
		}
	});
}, Qe = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, $e = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Qe(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, et = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, tt = (e = X) => {
	let { locales: t } = E;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!et) for (let t = 0; t < (D.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(D.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, nt = !1, Z, rt = () => typeof window > "u" ? tt(X) : (nt ||= (Z = tt(X), !0), Z), it = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (nt = !1, !et && D.storage.cookies)) for (let n = 0; n < D.storage.cookies.length; n++) {
		let { name: r, attributes: i } = D.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Qe(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, $e(r, e, i));
			} catch {}
		}
	}
}, at = /* @__PURE__ */ new Map(), ot = (e, t) => Object.create(new Proxy(e, {
	get: (e, t, n) => {
		if (typeof t != "string" || t === "constructor" || t in e) return Reflect.get(e, t, n);
		let { value: r } = n;
		if (r == null) return;
		let i = Object(r)[t];
		return typeof i == "function" ? i.bind(r) : i;
	},
	has: (e, n) => n in e || typeof n == "string" && n !== "constructor" && t !== null && n in t
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
}), st = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = at.get(t);
	i || (i = /* @__PURE__ */ new Map(), at.set(t, i));
	let a = i.get(r);
	return a || (a = ot(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ct = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...i(e) ? e : d(u, { children: e }),
	value: t,
	...n
}, st(t)), lt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ct({
		value: t.children,
		children: t.children
	})
}, ut = P, dt = (e, n) => {
	let i = Ve(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, ft = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? P : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: b }], i = e[b], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || M(e),
			transform: (e, n, r) => {
				if (M(e)) return (i) => N(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = dt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return B(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, pt = P, mt = P, Q = /* @__PURE__ */ new Map(), ht = (e, t = !0) => {
	let n = `${e ?? E.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		lt,
		F(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
		I,
		L(e ?? E.defaultLocale),
		R,
		U(e ?? E.defaultLocale),
		W,
		V,
		H,
		ut,
		ft,
		pt,
		mt
	].filter((e) => e !== P);
	return Q.set(n, r), r;
}, gt = (e, t) => Re(e, t, ht(typeof t == "object" && t ? t.locale : t)), _t = rt, vt = (e, t) => it(e, {
	...X,
	isCookieEnabled: t
}), yt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, bt = (e, t = E?.locales, n = E?.defaultLocale) => {
	if (t?.includes(e)) return e;
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
}, $ = n({
	get locale() {
		return _t() ?? E?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), xt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: u }) => {
	let { locales: f, defaultLocale: ee } = E ?? {}, [p, m] = l(() => e ?? _t() ?? t ?? ee), [te, h] = l(e);
	e !== te && (h(e), e && e !== p && m(e)), s(() => {
		yt();
	}, []);
	let g = a((e) => {
		if (p.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), vt(e, u);
		}
	}, [
		p,
		f,
		u
	]), _ = i ?? g, v = bt(p), ne = c(() => ({
		locale: v,
		setLocale: _,
		variant: n,
		disableEditor: o
	}), [
		v,
		_,
		n,
		o
	]);
	return d($.Provider, {
		value: ne,
		children: r
	});
}, St = ({ children: e, ...t }) => f(xt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Ct = (e, t) => {
	let { locale: n, variant: r } = o($) ?? {}, i = t ?? n, a = i;
	return c(() => gt(e, i), [e.key, a]);
}, wt = ((e, t) => {
	let { locale: n } = o($) ?? {};
	return Xe(n, Ct(e), t);
}), Tt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && xe({ log: pe })(`${O("IntlProvider", ve)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(St, {
	locale: e,
	children: t
}, String(e)));
function Et() {
	let e = wt(ee), t = [
		{
			q: e("whatIsI18nBenchmark"),
			a: e("whatIsI18nBenchmarkAnswer")
		},
		{
			q: e("howAreBenchmarksConducted"),
			a: e("weRunStandardizedTestsIn")
		},
		{
			q: e("whichLibrariesAreCurrentlySupported"),
			a: e("weSupportReactI18nextReact")
		},
		{
			q: e("canISubmitMyOwn"),
			a: e("yesCommunityBenchmarkSubmissionsAre")
		},
		{
			q: e("howOftenAreBenchmarksUpdated"),
			a: e("weReRunAllBenchmarks")
		},
		{
			q: e("isTheDataReliable"),
			a: e("weFollowRigorousStatisticalMethodology")
		},
		{
			q: e("doYouOfferConsultingServices"),
			a: e("yesOurEnterprisePlanIncludes")
		},
		{
			q: e("howCanIContribute"),
			a: e("thereAreManyWaysTo")
		}
	];
	return d("div", {
		className: "mx-auto max-w-3xl space-y-4",
		children: t.map((e) => f("details", {
			className: "group rounded-lg border border-border bg-card",
			children: [d("summary", {
				className: "cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors",
				children: e.q
			}), d("p", {
				className: "px-6 pb-4 text-sm text-muted-foreground",
				children: e.a
			})]
		}, e.q))
	});
}
function Dt({ children: t }) {
	return d(e.Suspense, {
		fallback: null,
		children: d(Tt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		})
	});
}
function Ot() {
	return d(Dt, { children: d(Et, {}) });
}
export { Ot as default };
