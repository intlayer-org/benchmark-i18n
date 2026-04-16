import { Fragment as e, Profiler as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as ee } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
var f = {
	key: "faq-list",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"m\":\"What is i18n Benchmark?\",\"c\":\"How are benchmarks conducted?\",\"k\":\"We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\",\"n\":\"Which libraries are currently supported?\",\"l\":\"We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\",\"a\":\"Can I submit my own benchmarks?\",\"o\":\"Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\",\"e\":\"How often are benchmarks updated?\",\"j\":\"We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\",\"g\":\"Is the data reliable?\",\"i\":\"We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\",\"b\":\"Do you offer consulting services?\",\"p\":\"Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\",\"d\":\"How can I contribute?\",\"h\":\"There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\",\"f\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\"},\"fr\":{\"m\":\"Qu'est-ce que i18n Benchmark ?\",\"c\":\"Comment les benchmarks sont-ils menés ?\",\"k\":\"Nous effectuons des tests standardisés dans des environnements isolés en utilisant un matériel cohérent. Chaque benchmark est répété plusieurs fois pour garantir une signification statistique. Toutes les configurations de test sont disponibles publiquement dans notre dépôt GitHub.\",\"n\":\"Quelles bibliothèques sont actuellement supportées ?\",\"l\":\"Nous supportons react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react et Tolgee.\",\"a\":\"Puis-je soumettre mes propres benchmarks ?\",\"o\":\"Oui ! Les soumissions de benchmarks de la communauté sont les bienvenues. Forkez notre dépôt, ajoutez votre benchmark en suivant notre guide de contribution et soumettez une pull request. Notre équipe examinera et fusionnera les soumissions qualifiées.\",\"e\":\"À quelle fréquence les benchmarks sont-ils mis à jour ?\",\"j\":\"Nous relançons tous les benchmarks chaque semaine avec les dernières versions stables de chaque bibliothèque. Les versions majeures déclenchent un cycle immédiat de re-benchmarking.\",\"g\":\"Les données sont-elles fiables ?\",\"i\":\"Nous suivons une méthodologie statistique rigoureuse incluant des phases de préchauffage, la détection des valeurs aberrantes et des intervalles de confiance. Toutes les données brutes sont publiées aux côtés de notre analyse pour une transparence totale.\",\"b\":\"Proposez-vous des services de conseil ?\",\"p\":\"Oui, notre plan Entreprise inclut des heures de conseil pour les équipes évaluant les solutions i18n. Nous pouvons fournir des recommandations personnalisées basées sur votre cas d'utilisation spécifique, votre échelle et vos contraintes.\",\"d\":\"Comment puis-je contribuer ?\",\"h\":\"Il existe de nombreuses façons de contribuer : soumettre des benchmarks, améliorer la documentation, signaler des bugs, suggérer de nouvelles métriques ou parrainer le projet. Visitez notre dépôt GitHub pour plus de détails.\",\"f\":\"i18n Benchmark est une suite d'analyse comparative open source qui mesure et compare les performances, la taille du bundle et l'expérience développeur des bibliothèques d'internationalisation pour les applications JavaScript et React.\"},\"es\":{\"m\":\"¿Qué es i18n Benchmark ?\",\"c\":\"¿Cómo se realizan los benchmarks ?\",\"k\":\"Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para garantizar la significación estadística. Todas las configuraciones de prueba están disponibles públicamente en nuestro repositorio de GitHub.\",\"n\":\"¿Qué bibliotecas son compatibles actualmente ?\",\"l\":\"Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.\",\"a\":\"¿Puedo enviar mis propios benchmarks ?\",\"o\":\"¡Sí! Las presentaciones de benchmarks de la comunidad son bienvenidas. Bifurca nuestro repositorio, agrega tu benchmark siguiendo nuestra guía de contribución y envía una pull request. Nuestro equipo revisará y fusionará las presentaciones que califiquen.\",\"e\":\"¿Con qué frecuencia se actualizan los benchmarks ?\",\"j\":\"Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.\",\"g\":\"¿Son fiables los datos ?\",\"i\":\"Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos sin procesar se publican junto con nuestro análisis para una total transparencia.\",\"b\":\"¿Ofrecen servicios de consultoría ?\",\"p\":\"¡Sí! Nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones de i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y restricciones.\",\"d\":\"¿Cómo puedo contribuir ?\",\"h\":\"Hay muchas formas de contribuir: enviando benchmarks, mejorando la documentación, informando errores, sugiriendo nuevas métricas o patrocinando el proyecto. Visite nuestro repositorio de GitHub para más detalles.\",\"f\":\"i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.\"},\"de\":{\"m\":\"Was ist i18n Benchmark ?\",\"c\":\"Wie werden die Benchmarks durchgeführt ?\",\"k\":\"Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrfach wiederholt, um statistische Signifikanz zu gewährleisten. Alle Testkonfigurationen sind öffentlich in unserem GitHub-Repository verfügbar.\",\"n\":\"Welche Bibliotheken werden derzeit unterstützt ?\",\"l\":\"Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.\",\"a\":\"Kann ich meine eigenen Benchmarks einreichen ?\",\"o\":\"Ja! Einreichungen von Benchmarks aus der Community sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull Request. Unser Team wird qualifizierte Einreichungen prüfen und zusammenführen.\",\"e\":\"Wie oft werden die Benchmarks aktualisiert ?\",\"j\":\"Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut durch. Hauptversionen lösen einen sofortigen Re-Benchmark-Zyklus aus.\",\"g\":\"Sind die Daten zuverlässig ?\",\"i\":\"Wir folgen einer strengen statistischen Methodik, einschließlich Aufwärmphasen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.\",\"b\":\"Bieten Sie Beratungsdienstleistungen an ?\",\"p\":\"Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen validieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Umfang und Einschränkungen geben.\",\"d\":\"Wie kann ich beitragen ?\",\"h\":\"Es gibt viele Möglichkeiten, beizutragen: Reichen Sie Benchmarks ein, verbessern Sie die Dokumentation, melden Sie Fehler, schlagen Sie neue Metriken vor oder sponsern Sie das Projekt. Besuchen Sie unser GitHub-Repository für weitere Details.\",\"f\":\"i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.\"},\"it\":{\"m\":\"Cos'è i18n Benchmark ?\",\"c\":\"Come vengono condotti i benchmark ?\",\"k\":\"Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub.\",\"n\":\"Quali librerie sono attualmente supportate ?\",\"l\":\"Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\",\"a\":\"Posso inviare i miei benchmark ?\",\"o\":\"Sì! I contributi ai benchmark della comunità sono benvenuti. Esegui il fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà i contributi idonei.\",\"e\":\"Ogni quanto vengono aggiornati i benchmark ?\",\"j\":\"Eseguiamo nuovamente tutti i benchmark settimanalmente con le ultime versioni stabili di ogni libreria. Le versioni principali attivano un ciclo di benchmarking immediato.\",\"g\":\"I dati sono affidabili ?\",\"i\":\"Seguiamo una rigorosa metodologia statistica che include fasi di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi vengono pubblicati insieme alla nostra analisi per la massima trasparenza.\",\"b\":\"Offrite servizi di consulenza ?\",\"p\":\"Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano le soluzioni i18n. Possiamo fornire consigli su misura in base al tuo caso d’uso specifico, alle dimensioni e ai vincoli.\",\"d\":\"Come posso contribuire ?\",\"h\":\"Esistono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per ulteriori dettagli.\",\"f\":\"i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza dello sviluppatore delle librerie di internazionalizzazione per applicazioni JavaScript e React.\"},\"pt\":{\"m\":\"O que é o i18n Benchmark ?\",\"c\":\"Como os benchmarks são conduzidos ?\",\"k\":\"Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório no GitHub.\",\"n\":\"Quais bibliotecas são suportadas atualmente ?\",\"l\":\"Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\",\"a\":\"Posso enviar meus próprios benchmarks ?\",\"o\":\"Sim! As submissões de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.\",\"e\":\"Com que frequência os benchmarks são cập nhật ?\",\"j\":\"Executamos novamente todos os benchmarks semanalmente com as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais desencadeiam um ciclo imediato de novos benchmarks.\",\"g\":\"Os dados são confiáveis ?\",\"i\":\"Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de outliers e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.\",\"b\":\"Vocês oferecem serviços de consultoria ?\",\"p\":\"Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base em seu caso de uso, escala e restrições específicos.\",\"d\":\"Como posso contribuir ?\",\"h\":\"Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentazione, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório no GitHub para mais detalhes.\",\"f\":\"o i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor de bibliotecas de internacionalização para aplicativos JavaScript e React.\"},\"zh\":{\"m\":\"什么是 i18n Benchmark？\",\"c\":\"如何进行基准测试？\",\"k\":\"我们在隔离的环境中使用一致的硬件运行标准化测试。每个基准测试都重复多次，以确保统计学意义。所有测试配置都可以在我们的 GitHub 存储库中公开获得。\",\"n\":\"目前支持哪些库？\",\"l\":\"我们支持 react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react 和 Tolgee。\",\"a\":\"我可以提交自己的基准测试吗？\",\"o\":\"是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审查并合并合格的提交。\",\"e\":\"基准测试多久更新一次？\",\"j\":\"我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会触发立即重新进行基准测试。\",\"g\":\"数据可靠吗？\",\"i\":\"我们遵循严格的统计方法，包括热身运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。\",\"b\":\"你们提供咨询服务吗？\",\"p\":\"是的，我们的企业版计划包括为评估 i18n 解决方案的团队提供的咨询时间。我们可以根据您的具体用例、规模和约束提供定制建议。\",\"d\":\"我该如何贡献？\",\"h\":\"有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。\",\"f\":\"i18n Benchmark 是一个开源基准测试套件，用于测量和比较 JavaScript 和 React 应用程序的 international化库的性能、包大小和开发人员体验。\"},\"ja\":{\"m\":\"i18n Benchmark とは何ですか？\",\"c\":\"ベンチマークはどのように行われますか？\",\"k\":\"一貫したハードウェアを使用し、分離された環境で標準化されたテストを実行します。各ベンチマークは、統計的有意性を確保するために複数回繰り返されます。すべてのテスト構成は、GitHub リポジトリで公開されています。\",\"n\":\"現在サポートされているライブラリは何ですか？\",\"l\":\"react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、Tolgee をサポートしています。\",\"a\":\"独自のベンチマークを送信できますか？\",\"o\":\"はい！コミュニティからのベンチマークの送信を歓迎します。当社のリポジトリをフォークし、コントリビューションガイドに従ってベンチマークを追加し、プルリクエストを送信してください。当社のチームが、資格のある送信内容をレビューしてマージします。\",\"e\":\"ベンチマークはどのくらいの頻度で更新されますか？\",\"j\":\"各ライブラリの最新の安定バージョンに対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリースにより、即座に再ベンチマークサイクルが実行されます。\",\"g\":\"データは信頼できますか？\",\"i\":\"ウォームアップ実行、外れ値の検出、信頼区間などの厳密な統計的手法に従います。すべての生データは、完全な透明性のために当社の分析とともに公開されます。\",\"b\":\"コンサルティングサービスを提供していますか？\",\"p\":\"はい、当社のエンタープライズプランには、i18n ソリューションを評価するチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。\",\"d\":\"どのように貢献できますか？\",\"h\":\"貢献する方法はたくさんあります。ベンチマークの送信、ドキュメントの改善、バグの報告、新しい指標の提案、プロジェクトのスポンサーなどです。詳細については、GitHub リポジトリをご覧ください。\",\"f\":\"i18n Benchmark は、JavaScript および React アプリケーション用の国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者エクスペリエンスを測定および比較するオープンソースのベンチマークスイートです。\"},\"ko\":{\"m\":\"i18n Benchmark란 무엇인가요?\",\"c\":\"벤치마크는 어떻게 진행되나요?\",\"k\":\"우리는 일관된 하드웨어를 사용하여 격리된 환경에서 표준화된 테스트를 실행합니다. 각 벤치마크는 통계적 유의성을 보장하기 위해 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 리포지토리에서 공개적으로 사용할 수 있습니다.\",\"n\":\"현재 어떤 라이브러리가 지원되나요?\",\"l\":\"react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 및 Tolgee를 지원합니다.\",\"a\":\"직접 벤치마크를 제출할 수 있나요?\",\"o\":\"네! 커뮤니티의 벤치마크 제출을 환영합니다. 리포지토리를 포크하고 기여 가이드에 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출하세요. 저희 팀이 자격이 되는 제출물을 검토하고 병합할 것입니다.\",\"e\":\"벤치마크는 얼마나 자주 업데이트되나요?\",\"j\":\"우리는 매주 각 라이브러리의 최신 안정 버전에 대해 모든 벤치마크를 재실행합니다. 메이저 버전이 출시되면 즉시 재벤치마크 주기가 시작됩니다.\",\"g\":\"데이터가 신뢰할 수 있나요?\",\"i\":\"우리는 웜업 실행, 이상값 탐지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 모든 원시 데이터는 완전한 투명성을 위해 분석과 함께 게시됩니다.\",\"b\":\"컨설팅 서비스를 제공합나요?\",\"p\":\"네, 엔터프라이즈 요금제에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 귀하의 특정 사용 사례, 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다.\",\"d\":\"어떻게 기여할 수 있나요?\",\"h\":\"기여할 수 있는 방법은 많습니다. 벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 또는 프로젝트 후원 등이 있습니다. 자세한 내용은 GitHub 리포지토리를 참조하세요.\",\"f\":\"i18n Benchmark는 JavaScript 및 React 애플리케이션용 국제화 라이브러리의 성능, 번들 크기 및 개발자 경험을 측정하고 비교하는 오픈 소스 벤치마킹 도구 모음입니다.\"},\"ru\":{\"m\":\"Что такое i18n Benchmark ?\",\"c\":\"Как проводятся бенчмарки ?\",\"k\":\"Мы проводим стандартизированные тесты в изолированных средах с использованием единообразного оборудования. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов открыты в нашем репозитории GitHub.\",\"n\":\"Какие библиотеки поддерживаются в настоящее время ?\",\"l\":\"Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.\",\"a\":\"Могу ли я отправить свои собственные бенчмарки ?\",\"o\":\"Да! Мы приветствуем отправку бенчмарков от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя нашему руководству по внесению вклада, и отправьте пулл-реквест. Наша команда рассмотрит и примет квалифицированные заявки.\",\"e\":\"Как часто обновляются бенчмарки ?\",\"j\":\"Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий вызывает немедленный цикл повторного тестирования.\",\"g\":\"Надежны ли данные ?\",\"i\":\"Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с нашим анализом для полной прозрачности.\",\"b\":\"Предлагаете ли вы консультационные услуги ?\",\"p\":\"Да, наш корпоративный план включает консультационные часы для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации, основанные на вашем конкретном случае использования, масштабе и ограничениях.\",\"d\":\"Как я могу помочь ?\",\"h\":\"Есть много способов внести свой вклад: отправить бенчмарки, улучшить документацию, сообщить о багах, предложить новые метрики или спонсировать проект. Посетите наш репозиторий GitHub для более подробной информации.\",\"f\":\"i18n Benchmark — это открытый набор тестов, который измеряет и сравнивает производительность, размер бандла и опыт разработки библиотек интернационализации для приложений JavaScript и React.\"}}}")
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
//#region src/components/pages/faq/FAQList.tsx
function ge() {
	let e = me(f);
	return u("div", {
		className: "mx-auto max-w-3xl space-y-4",
		children: [
			{
				q: e.m.value,
				a: e.f.value
			},
			{
				q: e.c.value,
				a: e.k.value
			},
			{
				q: e.n.value,
				a: e.l.value
			},
			{
				q: e.a.value,
				a: e.o.value
			},
			{
				q: e.e.value,
				a: e.j.value
			},
			{
				q: e.g.value,
				a: e.i.value
			},
			{
				q: e.b.value,
				a: e.p.value
			},
			{
				q: e.d.value,
				a: e.h.value
			}
		].map((e) => d("details", {
			className: "group rounded-lg border border-border bg-card",
			children: [u("summary", {
				className: "cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors",
				children: e.q
			}), u("p", {
				className: "px-6 pb-4 text-sm text-muted-foreground",
				children: e.a
			})]
		}, e.q))
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
//#region src/components/pages/faq/FAQList.wrapper.tsx
function xe() {
	return u(be, { children: u(ge, {}) });
}
//#endregion
export { xe as default };
