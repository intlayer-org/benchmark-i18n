import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, openBlock as u, ref as d, renderList as f, shallowRef as p, toDisplayString as m, toValue as h, watch as g } from "vue";
var _ = {
	key: "faq-list",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"a\":[{\"q\":\"What is i18n Benchmark?\",\"a\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\"},{\"q\":\"How are benchmarks conducted?\",\"a\":\"We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\"},{\"q\":\"Which libraries are currently supported?\",\"a\":\"We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\"},{\"q\":\"Can I submit my own benchmarks?\",\"a\":\"Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\"},{\"q\":\"How often are benchmarks updated?\",\"a\":\"We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\"},{\"q\":\"Is the data reliable?\",\"a\":\"We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\"},{\"q\":\"Do you offer consulting services?\",\"a\":\"Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\"},{\"q\":\"How can I contribute?\",\"a\":\"There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\"}]},\"fr\":{\"a\":[{\"q\":\"Qu'est-ce qu'i18n Benchmark ?\",\"a\":\"Une suite open source qui mesure et compare performance, taille de bundle et expérience développeur des bibliothèques i18n pour JavaScript et React.\"},{\"q\":\"Comment sont menés les benchmarks ?\",\"a\":\"Tests standardisés sur matériel cohomogène, répétés pour la significativité statistique. Les configs sont publiques sur GitHub.\"},{\"q\":\"Quelles bibliothèques sont prises en charge ?\",\"a\":\"react-i18next, react-intl, Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee, etc.\"},{\"q\":\"Puis-je proposer des benchmarks ?\",\"a\":\"Oui — forkez le dépôt, suivez le guide de contribution et ouvrez une pull request.\"},{\"q\":\"À quelle fréquence sont-ils mis à jour ?\",\"a\":\"Chaque semaine sur les dernières versions stables ; une release majeure relance immédiatement les mesures.\"},{\"q\":\"Les données sont-elles fiables ?\",\"a\":\"Méthodologie statistique stricte, échauffement, détection d'anomalies, intervalles de confiance — données brutes publiées.\"},{\"q\":\"Proposez-vous du conseil ?\",\"a\":\"Oui, le plan Enterprise inclut des heures pour aider les équipes à choisir une solution i18n.\"},{\"q\":\"Comment contribuer ?\",\"a\":\"Benchmarks, documentation, bugs, nouvelles métriques ou sponsorship — voir GitHub.\"}]},\"es\":{\"a\":[{\"q\":\"¿Qué es i18n Benchmark?\",\"a\":\"i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del paquete y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.\"},{\"q\":\"¿Cómo se realizan los benchmarks?\",\"a\":\"Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para asegurar la significación estadística. Todas las configuraciones de prueba están disponibles públicamente en nuestro repositorio de GitHub.\"},{\"q\":\"¿Qué bibliotecas son compatibles actualmente?\",\"a\":\"Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.\"},{\"q\":\"¿Puedo enviar mis propios benchmarks?\",\"a\":\"¡Sí! Los envíos de benchmarks de la comunidad son bienvenidos. Haga un fork de nuestro repositorio, añada su benchmark siguiendo nuestra guía de contribución y envíe un pull request. Nuestro equipo revisará y fusionará los envíos calificados.\"},{\"q\":\"¿Con qué frecuencia se actualizan los benchmarks?\",\"a\":\"Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmark inmediato.\"},{\"q\":\"¿Son confiables los datos?\",\"a\":\"Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.\"},{\"q\":\"¿Ofrecen servicios de consultoría?\",\"a\":\"Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones.\"},{\"q\":\"¿Cómo puedo contribuir?\",\"a\":\"Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para más detalles.\"}]},\"de\":{\"a\":[{\"q\":\"Was ist i18n Benchmark?\",\"a\":\"i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.\"},{\"q\":\"Wie werden Benchmarks durchgeführt?\",\"a\":\"Wir führen standardisierte Tests in isolierten Umgebungen mit einheitlicher Hardware durch. Jeder Benchmark wird mehrfach wiederholt, um die statistische Signifikanz sicherzustellen. Alle Testkonfigurationen sind in unserem GitHub-Repository öffentlich zugänglich.\"},{\"q\":\"Welche Bibliotheken werden derzeit unterstützt?\",\"a\":\"Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.\"},{\"q\":\"Kann ich meine eigenen Benchmarks einreichen?\",\"a\":\"Ja! Einreichungen von Community-Benchmarks sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Mitwirkende hinzu und reichen Sie einen Pull Request ein. Unser Team wird qualifizierte Einreichungen prüfen und zusammenführen.\"},{\"q\":\"Wie oft werden Benchmarks aktualisiert?\",\"a\":\"Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut durch. Hauptversionsveröffentlichungen lösen sofort einen neuen Benchmarking-Zyklus aus.\"},{\"q\":\"Sind die Daten zuverlässig?\",\"a\":\"Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Läufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.\"},{\"q\":\"Bieten Sie Beratungsdienstleistungen an?\",\"a\":\"Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Umfang und Ihren Einschränkungen geben.\"},{\"q\":\"Wie kann ich beitragen?\",\"a\":\"Es gibt viele Möglichkeiten, einen Beitrag zu leisten: Benchmarks einreichen, die Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.\"}]},\"it\":{\"a\":[{\"q\":\"Cos'è i18n Benchmark?\",\"a\":\"i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza dello sviluppatore delle librerie di internazionalizzazione per applicazioni JavaScript e React.\"},{\"q\":\"Come vengono condotti i benchmark?\",\"a\":\"Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni di test sono disponibili pubblicamente nel nostro repository GitHub.\"},{\"q\":\"Quali librerie sono attualmente supportate?\",\"a\":\"Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\"},{\"q\":\"Posso inviare i miei benchmark?\",\"a\":\"Sì! Le sottomissioni di benchmark da parte della comunità sono benvenute. Fai il fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà le sottomissioni idonee.\"},{\"q\":\"Quanto spesso vengono aggiornati i benchmark?\",\"a\":\"Eseguiamo nuovamente tutti i benchmark ogni settimana con le ultime versioni stabili di ogni libreria. I rilasci di versioni principali attivano un ciclo di ri-benchmark immediato.\"},{\"q\":\"I dati sono affidabili?\",\"a\":\"Seguiamo una rigorosa metodologia statistica che include corse di riscaldamento, rilevamento di outlier e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per la massima trasparenza.\"},{\"q\":\"Offrite servizi di consulenza?\",\"a\":\"Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano soluzioni i18n. Possiamo fornire raccomandazioni personalizzate basate sul tuo caso d'uso specifico, scala e vincoli.\"},{\"q\":\"Come posso contribuire?\",\"a\":\"Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.\"}]},\"pt\":{\"a\":[{\"q\":\"O que é o i18n Benchmark?\",\"a\":\"O i18n Benchmark é um conjunto de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor de bibliotecas de internacionalização para aplicativos JavaScript e React.\"},{\"q\":\"Como os benchmarks são conduzidos?\",\"a\":\"Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório no GitHub.\"},{\"q\":\"Quais bibliotecas são suportadas atualmente?\",\"a\":\"Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\"},{\"q\":\"Posso enviar meus próprios benchmarks?\",\"a\":\"Sim! Envios de benchmarks da comunidade são bem-vindos. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará os envios qualificados.\"},{\"q\":\"Com que frequência os benchmarks são atualizados?\",\"a\":\"Executamos novamente todos os benchmarks semanalmente em relação às versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo imediato de re-benchmarking.\"},{\"q\":\"Os dados são confiáveis?\",\"a\":\"Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de outliers e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.\"},{\"q\":\"Vocês oferecem serviços de consultoria?\",\"a\":\"Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base em seu caso de uso específico, escala e restrições.\"},{\"q\":\"Como posso contribuir?\",\"a\":\"Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o proyecto. Visite nosso repositório no GitHub para mais detalhes.\"}]},\"zh\":{\"a\":[{\"q\":\"什么是 i18n 基准测试？\",\"a\":\"i18n Benchmark 是一个开源基准测试套件，用于测量和比较 JavaScript 和 React 应用程序的国际化库的性能、捆绑包大小和开发人员体验。\"},{\"q\":\"如何进行基准测试？\",\"a\":\"我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都会重复多次，以确保统计显着性。所有测试配置都可以在我们的 GitHub 存储库中公开获得。\"},{\"q\":\"目前支持哪些库？\",\"a\":\"我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。\"},{\"q\":\"我可以提交自己的基准测试吗？\",\"a\":\"是的！欢迎社区提交基准测试。分叉我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审查并合并合格的提交内容。\"},{\"q\":\"基准测试多久更新一次？\",\"a\":\"我们每周会针对每个库的最新稳定版本重新运行所有基准测试。主要版本的发布将立即触发重新基准测试周期。\"},{\"q\":\"数据可靠吗？\",\"a\":\"我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。\"},{\"q\":\"你们提供咨询服务吗？\",\"a\":\"是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的特定用例、规模和限制提供量身定制的建议。\"},{\"q\":\"我该如何贡献？\",\"a\":\"有多种贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。\"}]},\"ja\":{\"a\":[{\"q\":\"i18n ベンチマークとは何ですか？\",\"a\":\"i18n ベンチマークは、JavaScript および React アプリケーション向けの国際化ライブラリのパフォーマンス、バンドルサイズ、開発者エクスペリエンスを測定および比較するオープンソースのベンチマークスイートです。\"},{\"q\":\"ベンチマークはどのように行われますか？\",\"a\":\"一貫したハードウェアを使用し、隔離された環境で標準化されたテストを実行します。統計的な有意性を確保するために、各ベンチマークは複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。\"},{\"q\":\"現在どのライブラリがサポートされていますか？\",\"a\":\"react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgeeをサポートしています。\"},{\"q\":\"自分のベンチマークを送信できますか？\",\"a\":\"はい！コミュニティからのベンチマーク送信を歓迎します。リポジトリをフォークし、投稿ガイドに従ってベンチマークを追加して、プルリクエストを送信してください。私たちのチームが審査し、要件を満たす送信をマージします。\"},{\"q\":\"ベンチマークはどのくらいの頻度で更新されますか？\",\"a\":\"各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリースにより、即座に再ベンチマークサイクルがトリガーされます。\"},{\"q\":\"データは信頼できますか？\",\"a\":\"ウォームアップ実行、異常値検出、信頼区間など、厳格な統計手法に従っています。完全な透明性を確保するため、すべての生データは分析結果とともに公開されます。\"},{\"q\":\"コンサルティングサービスは提供していますか？\",\"a\":\"はい、エンタープライズプランには、i18nソリューションを検討しているチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。\"},{\"q\":\"どのように貢献できますか？\",\"a\":\"貢献する方法はたくさんあります。ベンチマークの送信、ドキュメントの改善、バグの報告、新しいメトリクスの提案、プロジェクトへのスポンサーなどです。詳細については、GitHubリポジトリをご覧ください。\"}]},\"ko\":{\"a\":[{\"q\":\"i18n 벤치마크란 무엇인가요?\",\"a\":\"i18n 벤치마크는 JavaScript 및 React 애플리케이션용 국제화 라이브러리의 성능, 번들 크기 및 개발자 경험을 측정하고 비교하는 오픈 소스 벤치마킹 제품군입니다.\"},{\"q\":\"벤치마크는 어떻게 진행되나요?\",\"a\":\"일관된 하드웨어를 사용하여 격리된 환경에서 표준화된 테스트를 실행합니다. 통계적 유의성을 보장하기 위해 각 벤치마크는 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 리포지토리에서 공개적으로 사용할 수 있습니다.\"},{\"q\":\"현재 어떤 라이브러리가 지원되나요?\",\"a\":\"react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 및 Tolgee를 지원합니다.\"},{\"q\":\"직접 벤치마크를 제출할 수 있나요?\",\"a\":\"네! 커뮤니티 벤치마크 제출을 환영합니다. 리포지토리를 포크하고 기여 가이드에 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출하세요. 저희 팀이 검토 후 적격한 제출물을 병합할 것입니다.\"},{\"q\":\"벤치마크는 얼마나 자주 업데이트되나요?\",\"a\":\"각 라이브러리의 최신 안정 버전에 대해 매주 모든 벤치마크를 다시 실행합니다. 메이저 버전이 출시되면 즉시 벤치마크 사이클이 다시 시작됩니다.\"},{\"q\":\"데이터가 신뢰할 수 있나요?\",\"a\":\"웜업 실행, 이상값 감지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 모든 원시 데이터는 투명성을 위해 분석과 함께 게시됩니다.\"},{\"q\":\"컨설팅 서비스를 제공하나요?\",\"a\":\"네, 엔터프라이즈 플랜에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 귀하의 특정 사용 사례, 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다.\"},{\"q\":\"어떻게 기여할 수 있나요?\",\"a\":\"기여할 수 있는 방법은 많습니다. 벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 또는 프로젝트 후원 등이 있습니다. 자세한 내용은 GitHub 리포지토리를 방문하세요.\"}]},\"ru\":{\"a\":[{\"q\":\"Что такое i18n Benchmark?\",\"a\":\"i18n Benchmark — это пакет бенчмарков с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчиков библиотек интернационализации для приложений JavaScript и React.\"},{\"q\":\"Как проводятся бенчмарки?\",\"a\":\"Мы проводим стандартизированные тесты в изолированных средах с использованием одинакового оборудования. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов открыты и доступны в нашем репозитории GitHub.\"},{\"q\":\"Какие библиотеки поддерживаются в данный момент?\",\"a\":\"Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.\"},{\"q\":\"Могу ли я отправить свои собственные бенчмарки?\",\"a\":\"Да! Мы приветствуем отправку бенчмарков от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя нашему руководству для участников, и отправьте pull request. Наша команда рассмотрит и примет подходящие заявки.\"},{\"q\":\"Как часто обновляются бенчмарки?\",\"a\":\"Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход основных версий вызывает немедленный цикл повторного тестирования.\"},{\"q\":\"Надежны ли данные?\",\"a\":\"Мы следуем строгой статистической методологии, включая прогревочные прогоны, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с нашим анализом для полной прозрачности.\"},{\"q\":\"Предоставляете ли вы консультационные услуги?\",\"a\":\"Да, наш план Enterprise включает часы консультаций для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации, основанные на вашем конкретном сценарии использования, масштабе и ограничениях.\"},{\"q\":\"Как я могу помочь?\",\"a\":\"Есть много способов внести свой вклад: отправка бенчмарков, улучшение документации, сообщения об ошибках, предложения новых показателей или спонсорство проекта. Посетите наш репозиторий GitHub для получения более подробной информации.\"}]}}}")
}, v = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = d(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
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
			return v({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), l(o);
}, y = "translation", b = "object", x = "array", S = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => S(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => S(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: x,
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
					type: b,
					key: r
				}]
			}, i = S(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, C = {
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
}, w = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, T = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (w(e) && w(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : T(e[r], t[r]));
		return n;
	}
	return e;
}, E = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => T(e, t));
}, D = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", O = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, k = (e, t) => D ? O : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: y,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return E(o, e, t);
	}
}, A = O, j = O, M = O, N = O, P = (e) => O, F = O, I = (e, t = !0) => [
	k(e ?? C.defaultLocale, t ? C.defaultLocale : void 0),
	A,
	j,
	M,
	P(e ?? C.defaultLocale),
	F,
	N
], L = (e, t, n = []) => S(e, {
	...t,
	plugins: n
}), R = (e, t, n = I(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return L(e.content, r, n);
}, z = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => v({
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
		return l(a);
	}
}, B = O, V = O, H = O, U = /* @__PURE__ */ new Map(), W = (e, t = !0) => {
	let n = `${e ?? C.defaultLocale}_${t}`;
	if (U.has(n)) return U.get(n);
	let r = [
		k(e ?? C.defaultLocale, t ? C.defaultLocale : void 0),
		A,
		j,
		P(e ?? C.defaultLocale),
		F,
		N,
		z,
		B,
		V,
		H
	];
	return U.set(n, r), r;
}, G = (e, t) => R(e, t, W(t)), K = Symbol("intlayer"), q = (e, t) => t.reduce((e, t) => e?.[t], e), J = (e) => typeof e == "object" && !!e, Y = (e) => typeof e == "function" || J(e) && ("render" in e || "setup" in e), X = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Z = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Y(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
		};
	}
})), Q = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Z(() => e.value);
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
}), $ = (e, n) => {
	let r = a() ? s(K) : void 0, i = c(r?.locale) ? r.locale : d(r?.locale ?? C.defaultLocale), o = t(() => (n === void 0 ? void 0 : h(n)) ?? i.value), l = p({});
	g([() => h(e), () => o.value], ([e, t]) => {
		l.value = G(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => q(l.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Z(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), s = q(l.value, o);
			if (s === void 0 || J(s) && !Y(s)) return u(o);
			if (X(s)) return Q(t(() => q(l.value, o)));
			let c = t(() => q(l.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = q(l.value, e);
			return J(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return u([]);
}, ee = i({
	__name: "FAQList",
	setup(e, { expose: t }) {
		t();
		let { a: n } = $(_), r = { faqs: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), te = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ne = { class: "mx-auto max-w-3xl space-y-4" }, re = { class: "cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors" }, ie = { class: "px-6 pb-4 text-sm text-muted-foreground" };
function ae(t, i, a, o, s, c) {
	return u(), n("div", ne, [(u(!0), n(e, null, f(o.faqs, (e) => (u(), n("details", {
		key: e.q,
		class: "group rounded-lg border border-border bg-card"
	}, [r("summary", re, m(e.q), 1), r("p", ie, m(e.a), 1)]))), 128))]);
}
var oe = te(ee, [["render", ae], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/faq/FAQList.vue"]]);
export { oe as default };
