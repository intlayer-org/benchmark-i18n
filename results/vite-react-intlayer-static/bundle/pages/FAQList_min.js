import { createContext as e, isValidElement as t, useContext as n, useMemo as r } from "react";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
var s = {
	key: "faq-list",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"a\":[{\"q\":\"What is i18n Benchmark?\",\"a\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\"},{\"q\":\"How are benchmarks conducted?\",\"a\":\"We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\"},{\"q\":\"Which libraries are currently supported?\",\"a\":\"We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.\"},{\"q\":\"Can I submit my own benchmarks?\",\"a\":\"Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\"},{\"q\":\"How often are benchmarks updated?\",\"a\":\"We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\"},{\"q\":\"Is the data reliable?\",\"a\":\"We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\"},{\"q\":\"Do you offer consulting services?\",\"a\":\"Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\"},{\"q\":\"How can I contribute?\",\"a\":\"There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\"}]},\"fr\":{\"a\":[{\"q\":\"Qu'est-ce qu'i18n Benchmark ?\",\"a\":\"Une suite open source qui mesure et compare performance, taille de bundle et expérience développeur des bibliothèques i18n pour JavaScript et React.\"},{\"q\":\"Comment sont menés les benchmarks ?\",\"a\":\"Tests standardisés sur matériel cohomogène, répétés pour la significativité statistique. Les configs sont publiques sur GitHub.\"},{\"q\":\"Quelles bibliothèques sont prises en charge ?\",\"a\":\"react-i18next, react-intl, Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee, etc.\"},{\"q\":\"Puis-je proposer des benchmarks ?\",\"a\":\"Oui — forkez le dépôt, suivez le guide de contribution et ouvrez une pull request.\"},{\"q\":\"À quelle fréquence sont-ils mis à jour ?\",\"a\":\"Chaque semaine sur les dernières versions stables ; une release majeure relance immédiatement les mesures.\"},{\"q\":\"Les données sont-elles fiables ?\",\"a\":\"Méthodologie statistique stricte, échauffement, détection d'anomalies, intervalles de confiance — données brutes publiées.\"},{\"q\":\"Proposez-vous du conseil ?\",\"a\":\"Oui, le plan Enterprise inclut des heures pour aider les équipes à choisir une solution i18n.\"},{\"q\":\"Comment contribuer ?\",\"a\":\"Benchmarks, documentation, bugs, nouvelles métriques ou sponsorship — voir GitHub.\"}]},\"es\":{\"a\":[{\"q\":\"¿Qué es i18n Benchmark?\",\"a\":\"i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del paquete y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.\"},{\"q\":\"¿Cómo se realizan los benchmarks?\",\"a\":\"Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para garantizar la significación estadística. Todas las configuraciones de prueba están disponibles públicamente en nuestro repositorio de GitHub.\"},{\"q\":\"¿Qué bibliotecas son compatibles actualmente?\",\"a\":\"Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.\"},{\"q\":\"¿Puedo enviar mis propios benchmarks?\",\"a\":\"¡Sí! Las presentaciones de benchmarks de la comunidad son bienvenidas. Bifurque nuestro repositorio, agregue su benchmark siguiendo nuestra guía de contribución y envíe una solicitud de extracción. Nuestro equipo revisará y fusionará las presentaciones que califiquen.\"},{\"q\":\"¿Con qué frecuencia se actualizan los benchmarks?\",\"a\":\"Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.\"},{\"q\":\"¿Son confiables los datos?\",\"a\":\"Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.\"},{\"q\":\"¿Ofrecen servicios de consultoría?\",\"a\":\"Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones.\"},{\"q\":\"¿Cómo puedo contribuir?\",\"a\":\"Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para obtener más detalles.\"}]},\"de\":{\"a\":[{\"q\":\"Was ist i18n Benchmark?\",\"a\":\"i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.\"},{\"q\":\"Wie werden Benchmarks durchgeführt?\",\"a\":\"Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrmals wiederholt, um die statistische Signifikanz sicherzustellen. Alle Testkonfigurationen sind in unserem GitHub-Repository öffentlich verfügbar.\"},{\"q\":\"Welche Bibliotheken werden derzeit unterstützt?\",\"a\":\"Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.\"},{\"q\":\"Kann ich meine eigenen Benchmarks einreichen?\",\"a\":\"Ja! Einreichungen von Community-Benchmarks sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Mitwirkende hinzu und reichen Sie einen Pull-Request ein. Unser Team wird qualifizierte Einreichungen prüfen und zusammenführen.\"},{\"q\":\"Wie oft werden Benchmarks aktualisiert?\",\"a\":\"Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut durch. Veröffentlichungen von Hauptversionen lösen einen sofortigen Re-Benchmark-Zyklus aus.\"},{\"q\":\"Sind die Daten zuverlässig?\",\"a\":\"Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Läufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.\"},{\"q\":\"Bieten Sie Beratungsdienstleistungen an?\",\"a\":\"Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Umfang und Ihren Einschränkungen geben.\"},{\"q\":\"Wie kann ich beitragen?\",\"a\":\"Es gibt viele Möglichkeiten beizutragen: Reichen Sie Benchmarks ein, verbessern Sie die Dokumentation, melden Sie Fehler, schlagen Sie neue Metriken vor oder sponsern Sie das Projekt. Besuchen Sie unser GitHub-Repository für weitere Details.\"}]},\"it\":{\"a\":[{\"q\":\"Cos'è i18n Benchmark?\",\"a\":\"i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza dello sviluppatore delle librerie di internazionalizzazione per applicazioni JavaScript e React.\"},{\"q\":\"Come vengono condotti i benchmark?\",\"a\":\"Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni di test sono disponibili pubblicamente nel nostro repository GitHub.\"},{\"q\":\"Quali librerie sono attualmente supportate?\",\"a\":\"Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\"},{\"q\":\"Posso inviare i miei benchmark?\",\"a\":\"Sì! Le sottomissioni di benchmark da parte della community sono benvenute. Esegui il fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà le sottomissioni idonee.\"},{\"q\":\"Quanto spesso vengono aggiornati i benchmark?\",\"a\":\"Rieseguiamo tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. I rilasci di versioni principali attivano un ciclo di re-benchmark immediato.\"},{\"q\":\"I dati sono affidabili?\",\"a\":\"Seguiamo una rigorosa metodologia statistica che include esecuzioni di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi vengono pubblicati insieme alla nostra analisi per la massima trasparenza.\"},{\"q\":\"Offrite servizi di consulenza?\",\"a\":\"Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano soluzioni i18n. Possiamo fornire consigli su misura basati sul tuo caso d'uso specifico, sulla scala e sui vincoli.\"},{\"q\":\"Come posso contribuire?\",\"a\":\"Esistono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.\"}]},\"pt\":{\"a\":[{\"q\":\"O que é o i18n Benchmark?\",\"a\":\"O i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor de bibliotecas de internacionalização para aplicativos JavaScript e React.\"},{\"q\":\"Como os benchmarks são conduzidos?\",\"a\":\"Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório no GitHub.\"},{\"q\":\"Quais bibliotecas são suportadas atualmente?\",\"a\":\"Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.\"},{\"q\":\"Posso enviar meus próprios benchmarks?\",\"a\":\"Sim! Envios de benchmarks da comunidade são bem-vindos. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará os envios qualificados.\"},{\"q\":\"Com que frequência os benchmarks são atualizados?\",\"a\":\"Executamos novamente todos os benchmarks semanalmente em relação às versões estáveis mais recentes de cada biblioteca. O lançamento de versões principais desencadeia um ciclo imediato de re-benchmarking.\"},{\"q\":\"Os dados são confiáveis?\",\"a\":\"Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de outliers e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.\"},{\"q\":\"Vocês oferecem serviços de consultoria?\",\"a\":\"Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base em seu caso de uso, escala e restrições específicos.\"},{\"q\":\"Como posso contribuir?\",\"a\":\"Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório no GitHub para mais detalhes.\"}]},\"zh\":{\"a\":[{\"q\":\"什么是 i18n Benchmark？\",\"a\":\"i18n Benchmark 是一个开源基准测试套件，用于测量和比较 JavaScript 和 React 应用程序的国际化库的性能、包大小和开发人员体验。\"},{\"q\":\"基准测试是如何进行的？\",\"a\":\"我们在隔离环境中使用一致的硬件运行标准化测试。每个基准测试都会重复多次以确保统计意义。所有测试配置都可以在我们的 GitHub 仓库中公开获得。\"},{\"q\":\"目前支持哪些库？\",\"a\":\"我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。\"},{\"q\":\"我可以提交自己的基准测试吗？\",\"a\":\"是的！欢迎社区提交基准测试。Fork 我们的仓库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审查并合并合格的提交。\"},{\"q\":\"基准测试多久更新一次？\",\"a\":\"我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会立即触发重新基准测试周期。\"},{\"q\":\"数据可靠吗？\",\"a\":\"我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。\"},{\"q\":\"你们提供咨询服务吗？\",\"a\":\"是的，我们的企业计划包括为评估 i18n 解决方案的团队提供的咨询时间。我们可以根据您的具体用例、规模和约束提供量身定制的建议。\"},{\"q\":\"我该如何贡献？\",\"a\":\"有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 仓库了解更多详情。\"}]},\"ja\":{\"a\":[{\"q\":\"i18n Benchmark とは何ですか？\",\"a\":\"i18n Benchmark は、JavaScript および React アプリケーション向けの国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者エクスペリエンスを測定および比較するオープンソースのベンチマークスイートです。\"},{\"q\":\"ベンチマークはどのように行われますか？\",\"a\":\"一貫したハードウェアを使用して、隔離された環境で標準化されたテストを実行します。統計的有意性を確保するために、各ベンチマークは複数回繰り返されます。すべてのテスト構成は、GitHub リポジトリで公開されています。\"},{\"q\":\"現在サポートされているライブラリはどれですか？\",\"a\":\"react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、および Tolgee をサポートしています。\"},{\"q\":\"独自のベンチマークを送信できますか？\",\"a\":\"はい！コミュニティからのベンチマークの送信を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加して、プルリクエストを送信してください。当社のチームが、資格のある送信を確認してマージします。\"},{\"q\":\"ベンチマークはどのくらいの頻度で更新されますか？\",\"a\":\"各ライブラリの最新の安定バージョンに対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリースにより、即座に再ベンチマークサイクルがトリガーされます。\"},{\"q\":\"データは信頼できますか？\",\"a\":\"ウォームアップ実行、外れ値検出、信頼区間など、厳格な統計手法に従います。完全な透明性を確保するため、すべての生データは分析結果とともに公開されます。\"},{\"q\":\"コンサルティングサービスは提供していますか？\",\"a\":\"はい、エンタープライズプランには、i18n ソリューションを評価するチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。\"},{\"q\":\"どのように貢献できますか？\",\"a\":\"貢献する方法はたくさんあります。ベンチマークの送信、ドキュメントの改善、バグの報告、新しいメトリクスの提案、プロジェクトへのスポンサーなどです。詳細については、GitHub リポジトリをご覧ください。\"}]},\"ko\":{\"a\":[{\"q\":\"i18n Benchmark란 무엇인가요?\",\"a\":\"i18n Benchmark는 JavaScript 및 React 애플리케이션용 국제화 라이브러리의 성능, 번들 크기 및 개발자 경험을 측정하고 비교하는 오픈 소스 벤치마킹 제품군입니다.\"},{\"q\":\"벤치마크는 어떻게 진행되나요?\",\"a\":\"일관된 하드웨어를 사용하여 격리된 환경에서 표준화된 테스트를 실행합니다. 통계적 유의성을 보장하기 위해 각 벤치마크는 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 리포지토리에서 공개적으로 사용할 수 있습니다.\"},{\"q\":\"현재 어떤 라이브러리가 지원되나요?\",\"a\":\"react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 및 Tolgee를 지원합니다.\"},{\"q\":\"나만의 벤치마크를 제출할 수 있나요?\",\"a\":\"네! 커뮤니티 벤치마크 제출을 환영합니다. 리포지토리를 포크하고 기여 가이드에 따라 벤치마크를 추가한 다음 풀 리퀘스트를 제출하세요. 저희 팀이 자격이 있는 제출물을 검토하고 병합할 것입니다.\"},{\"q\":\"벤치마크는 얼마나 자주 업데이트되나요?\",\"a\":\"매주 각 라이브러리의 최신 안정 버전에 대해 모든 벤치마크를 다시 실행합니다. 주요 버전이 릴리스되면 즉시 재벤치마크 주기가 트리거됩니다.\"},{\"q\":\"데이터가 신뢰할 수 있나요?\",\"a\":\"웜업 실행, 이상치 탐지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 모든 원시 데이터는 완전한 투명성을 위해 분석과 함께 게시됩니다.\"},{\"q\":\"컨설팅 서비스를 제공하나요?\",\"a\":\"네, 엔터프라이즈 플랜에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 특정 사용 사례, 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다.\"},{\"q\":\"어떻게 기여할 수 있나요?\",\"a\":\"기여할 수 있는 방법은 많습니다. 벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 또는 프로젝트 후원 등이 있습니다. 자세한 내용은 GitHub 리포지토리를 방문하세요.\"}]},\"ru\":{\"a\":[{\"q\":\"Что такое i18n Benchmark?\",\"a\":\"i18n Benchmark — это пакет бенчмарков с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработки библиотек интернационализации для приложений JavaScript и React.\"},{\"q\":\"Как проводятся бенчмарки?\",\"a\":\"Мы проводим стандартизированные тесты в изолированных средах с использованием одинакового оборудования. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории GitHub.\"},{\"q\":\"Какие библиотеки поддерживаются в данный момент?\",\"a\":\"Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.\"},{\"q\":\"Могу ли я предложить свои собственные бенчмарки?\",\"a\":\"Да! Приветствуются предложения бенчмарков от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя нашему руководству для участников, и отправьте пул-реквест. Наша команда рассмотрит и объединит подходящие предложения.\"},{\"q\":\"Как часто обновляются бенчмарки?\",\"a\":\"Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Релизы мажорных версий вызывают немедленный цикл повторного тестирования.\"},{\"q\":\"Надежны ли данные?\",\"a\":\"Мы следуем строгой статистической методологии, включая прогревочные прогоны, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с нашим анализом для полной прозрачности.\"},{\"q\":\"Предлагаете ли вы консалтинговые услуги?\",\"a\":\"Да, наш план Enterprise включает консультационные часы для команд, оценивающих i18n-решения. Мы можем предоставить индивидуальные рекомендации, основанные на вашем конкретном случае использования, масштабе и ограничениях.\"},{\"q\":\"Как я могу внести свой вклад?\",\"a\":\"Существует множество способов внести свой вклад: предложить бенчмарки, улучшить документацию, сообщить о багах, предложить новые метрики или стать спонсором проекта. Посетите наш репозиторий GitHub для получения более подробной информации.\"}]}}}")
}, c = {
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
}, l = {
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
}, u = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var d = {
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
}, f = ((e = d) => {
	let { locales: t } = c;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!u) for (let t = 0; t < (l.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(l.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})(d), p = e({
	locale: f ?? c?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), m = /* @__PURE__ */ new WeakMap(), h = 0, g = (e) => {
	if (!e) return "base";
	let t = m.get(e);
	if (t) return t;
	h += 1;
	let n = `p${h}`;
	return m.set(e, n), n;
}, _ = 256, v = /* @__PURE__ */ new WeakMap(), y = (e) => typeof e == "object" && !!e, b = (e, t, n) => `${e}_${t}_${g(n)}`, x = (e, t) => {
	if (!y(e)) return { hit: !1 };
	let n = v.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, S = (e, t, n) => {
	if (!y(e)) return n;
	let r = v.get(e);
	return r || (r = /* @__PURE__ */ new Map(), v.set(e, r)), r.size >= _ && r.clear(), r.set(t, n), n;
}, C = "translation", w = "object", T = "array", E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => E(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: T,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: w,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = E(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = E(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, D = "default", O = /[^A-Za-z0-9._&=-]/g, k = /[^A-Za-z0-9._-]/g, A = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, j = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, A);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, M = (e) => e === void 0 ? D : typeof e == "string" ? j(e, O) : Object.keys(e).sort().map((t) => `${j(t, k)}=${j(String(e[t]), k)}`).join("&"), N = (e) => Array.isArray(e) ? e.length === 0 ? [D] : e.map(M) : [M(e)], ee = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? D : e[0] ?? "default";
}, te = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, P = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, F = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, I = (e, t) => {
	if (!P(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? D : ee(N(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => te(e, n, t, s)).map((t) => F(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, L = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, R = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? N(n).join(",") : String(n)}`;
}).join("|") : "", z = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, B = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (z(e) && z(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : B(e[r], t[r]));
		return n;
	}
	return e;
}, V = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => B(e, t));
}, H = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, U = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? H : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: C,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return V(o, e, t);
	}
}, W = H, G = (e) => H, K = H, q = H, J = H, Y = H, X = (e) => H, Z = H, ne = (e, t = !0) => [
	U(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
	W,
	K,
	q,
	X(e ?? c.defaultLocale),
	Z,
	J,
	Y
], re = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), ie = (e, t, n) => {
	let { locale: r, selector: i } = L(t), a = b(r ?? c.defaultLocale, R(i), n), o = x(e, a);
	if (o.hit) return o.content;
	let s = n ?? ne(r), l = I(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return re(e.content, t, s);
	};
	return l === null ? S(e, a, null) : Array.isArray(l) ? S(e, a, l.map(u)) : S(e, a, u(l));
}, ae = ({ children: e, value: n, additionalProps: r }) => {
	let o = t(e) ? e : a(i, { children: e });
	return new Proxy(o, { get(e, t, i) {
		if (t === "value") return n;
		if (t === Symbol.toPrimitive) return () => n ?? "";
		if (t === "toString") return () => String(n ?? "");
		if (t === "valueOf") return () => n;
		if (r && Object.hasOwn(r, t)) return r[t];
		if (n != null && typeof t == "string" && t !== "constructor" && !(t in e)) {
			let e = Object(n);
			if (t in e) {
				let r = e[t];
				return typeof r == "function" ? r.bind(n) : r;
			}
		}
		return Reflect.get(e, t, i);
	} });
}, oe = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => ae({
		...n,
		value: n.children,
		children: n.children
	})
}, se = H, Q = H, ce = H, le = H, $ = /* @__PURE__ */ new Map(), ue = (e, t = !0) => {
	let n = `${e ?? c.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		U(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
		W,
		G(e ?? c.defaultLocale),
		K,
		X(e ?? c.defaultLocale),
		Z,
		J,
		Y,
		oe,
		se,
		Q,
		ce,
		le
	];
	return $.set(n, r), r;
}, de = (e, t) => ie(e, t, ue(typeof t == "object" && t ? t.locale : t)), fe = (e, t) => {
	let { locale: i, variant: a } = n(p) ?? {}, o = t ?? i, s = typeof o == "object" && o ? `${o.locale ?? ""}|${R(o)}` : o;
	return r(() => de(e, o), [e.key, s]);
};
function pe() {
	let { a: e } = fe(s);
	return a("div", {
		className: "mx-auto max-w-3xl space-y-4",
		children: e.map((e, t) => o("details", {
			className: "group rounded-lg border border-border bg-card",
			children: [a("summary", {
				className: "cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors",
				children: e.q
			}), a("p", {
				className: "px-6 pb-4 text-sm text-muted-foreground",
				children: e.a
			})]
		}, t))
	});
}
export { pe as default };
