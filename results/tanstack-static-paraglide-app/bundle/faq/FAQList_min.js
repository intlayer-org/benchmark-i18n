import "react";
import { Fragment as e, jsxDEV as t } from "react/jsx-dev-runtime";
var n = {}, r = [
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
], i = "PARAGLIDE_LOCALE", a = 3456e4, o = [
	"cookie",
	"globalVariable",
	"baseLocale"
], s = [], c = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var l, u = !1, d = () => {
	let e = o;
	!c && typeof window < "u" && window.location?.href && (e = O(window.location.href));
	let t = f(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return u || (l = t, u = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function f(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ne();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && l !== void 0) n = l;
		else if (A(t) && k.has(t)) {
			let e = k.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return g(t);
			}
		}
		let e = h(n);
		if (e) return e;
	}
}
var p = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = d();
	} catch {}
	let s = [], u = o;
	!c && typeof window < "u" && window.location?.href && (u = O(window.location.href));
	for (let t of u) if (t === "globalVariable") l = e;
	else if (t === "cookie") {
		if (c || typeof document > "u" || typeof window > "u") continue;
		let t = `${i}=${e}; path=/; max-age=${a}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (A(t) && k.has(t)) {
		let n = k.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), s.push(r));
		}
	}
	let f = () => {
		!c && n.reload && window.location && e !== r && p(void 0);
	};
	if (s.length) return Promise.all(s).then(() => {
		f();
	});
	f();
}, ee = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function h(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of r) if (e.toLowerCase() === t) return e;
}
function g(e) {
	let t = h(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${r.join(", ")}`);
}
function _(e) {
	return e;
}
function v(e, t) {
	return e.exec(t.href);
}
var y = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function te() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function ne() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = h(e), te(), S;
}
function re(e) {
	return w(e);
}
function w(e) {
	let t = _(typeof e == "string" ? new URL(e, ee()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var T, E;
function D(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (T === t) return E;
	let r = _(new URL(t, "http://example.com")), i = re(r), a = i.href === r.href ? [r] : [r, i], o;
	for (let e of a) {
		for (let t of s) if (v(new n(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return T = t, E = o, o;
}
function O(e) {
	let t = D(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var k = /* @__PURE__ */ new Map();
function A(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var j = () => "Can I submit my own benchmarks?", M = () => "Do you offer consulting services?", N = () => "How are benchmarks conducted?", P = () => "How can I contribute?", F = () => "How often are benchmarks updated?", I = () => "Is the data reliable?", L = () => "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.", R = () => "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.", z = () => "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.", B = () => "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.", V = () => "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.", H = () => "What is i18n Benchmark?", U = () => "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.", W = () => "Which libraries are currently supported?", G = () => "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.", K = () => "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.", q = () => "Puis-je soumettre mes propres benchmarks ?", J = () => "Offrez-vous des services de conseil ?", Y = () => "Comment les benchmarks sont-ils menés ?", X = () => "Comment puis-je contribuer ?", ie = () => "À quelle fréquence les benchmarks sont-ils mis à jour ?", ae = () => "Les données sont-elles fiables ?", oe = () => "Il y a de nombreuses façons de contribuer : soumettre des benchmarks, améliorer la documentation, signaler des bugs, suggérer de nouvelles métriques ou parrainer le projet. Visitez notre dépôt GitHub pour plus de détails.", se = () => "Nous suivons une méthodologie statistique rigoureuse, incluant des phases de préchauffage, la détection des valeurs aberrantes et des intervalles de confiance. Toutes les données brutes sont publiées avec notre analyse pour une transparence totale.", ce = () => "Nous relançons tous les benchmarks chaque semaine avec les dernières versions stables de chaque bibliothèque. Les sorties de versions majeures déclenchent un cycle de re-benchmarking immédiat.", le = () => "Nous effectuons des tests standardisés dans des environnements isolés en utilisant un matériel cohérent. Chaque benchmark est répété plusieurs fois pour garantir une signification statistique. Toutes les configurations de test sont disponibles publiquement dans notre dépôt GitHub.", ue = () => "Nous supportons react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react et Tolgee.", de = () => "Qu'est-ce qu'i18n Benchmark ?", fe = () => "i18n Benchmark est une suite de tests open source qui mesure et compare les performances, la taille du bundle et l'expérience développeur des bibliothèques d'internationalisation pour les applications JavaScript et React.", pe = () => "Quelles bibliothèques sont actuellement supportées ?", me = () => "Oui ! Les soumissions de benchmarks par la communauté sont les bienvenues. Forkez notre dépôt, ajoutez votre benchmark en suivant notre guide de contribution et soumettez une pull request. Notre équipe examinera et fusionnera les soumissions qualifiées.", he = () => "Oui, notre offre Enterprise inclut des heures de conseil pour les équipes évaluant les solutions i18n. Nous pouvons fournir des recommandations personnalisées basées sur votre cas d'utilisation, votre échelle et vos contraintes spécifiques.", ge = () => "¿Puedo enviar mis propios benchmarks?", _e = () => "¿Ofrecen servicios de consultoría?", ve = () => "¿Cómo se realizan los benchmarks?", ye = () => "¿Cómo puedo contribuir?", be = () => "¿Con qué frecuencia se funcionan los benchmarks?", xe = () => "¿Son fiables los datos?", Se = () => "Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de bugs, sugerir nuevas métricas o patrocinar el proyecto. Visita nuestro repositorio de GitHub para más detalles.", Ce = () => "Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.", we = () => "Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.", Te = () => "Realizamos pruebas estandarizadas en entornos aislados utilizando un hardware consistente. Cada benchmark se repite varias veces para garantizar la significancia estadística. Todas las configuraciones de prueba están disponibles públicamente en nuestro repositorio de GitHub.", Ee = () => "Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.", De = () => "¿Qué es i18n Benchmark?", Oe = () => "i18n Benchmark es una suite de pruebas de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.", ke = () => "¿Qué bibliotecas son compatibles actualmente?", Ae = () => "¡Sí! Las presentaciones de benchmarks de la comunidad son bienvenidas. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía un pull request. Nuestro equipo revisará y combinará las presentaciones que califiquen.", je = () => "Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso, escala y limitaciones específicas.", Me = () => "Kann ich meine eigenen Benchmarks einreichen?", Ne = () => "Bieten Sie Beratungsdienstleistungen an?", Pe = () => "Wie werden die Benchmarks durchgeführt?", Fe = () => "Wie kann ich beitragen?", Ie = () => "Wie oft werden die Benchmarks aktualisiert?", Le = () => "Sind die Daten zuverlässig?", Re = () => "Es gibt viele Möglichkeiten, beizutragen: Benchmarks einreichen, die Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.", ze = () => "Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Phasen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.", Be = () => "Wir führen alle Benchmarks wöchentlich gegen die neuesten stabilen Versionen jeder Bibliothek neu aus. Major-Releases lösen einen sofortigen Re-Benchmark-Zyklus aus.", Ve = () => "Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrfach wiederholt, um statistische Signifikanz zu gewährleisten. Alle Testkonfigurationen sind in unserem GitHub-Repository öffentlich zugänglich.", He = () => "Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.", Ue = () => "Was ist i18n Benchmark?", We = () => "i18n Benchmark ist eine Open-Source-Benchmarking-Suite, welche die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungs-Bibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.", Ge = () => "Welche Bibliotheken werden derzeit unterstützt?", Ke = () => "Ja! Einreichungen von Benchmarks durch die Community sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird qualifizierte Einreichungen prüfen und zusammenführen.", qe = () => "Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Umfang und Ihren Einschränkungen geben.", Je = () => "Posso inviare i miei benchmark?", Ye = () => "Offrite servizi di consulenza?", Xe = () => "Come vengono condotti i benchmark?", Ze = () => "Come posso contribuire?", Qe = () => "Con quale frequenza vengono aggiornati i benchmark?", $e = () => "I dati sono affidabili?", et = () => "Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.", tt = () => "Seguiamo una rigorosa metodologia statistica che include corse di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per una completa trasparenza.", nt = () => "Eseguiamo nuovamente tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. Le versioni principali in uscita attivano un immediato ciclo di re-benchmark.", rt = () => "Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni di test sono disponibili pubblicamente nel nostro repository GitHub.", it = () => "Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.", at = () => "Cos'è i18n Benchmark?", ot = () => "i18n Benchmark è una suite di test open source che misura e confronta le prestazioni, la dimensione del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.", st = () => "Quali librerie sono attualmente supportate?", ct = () => "Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.", lt = () => "Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano le soluzioni i18n. Possiamo fornire raccomandazioni personalizzate basate sul caso d'uso specifico, sulla scala e sui vincoli.", ut = () => "Posso enviar meus próprios benchmarks?", dt = () => "Vocês oferecem serviços de consultoria?", ft = () => "Como os benchmarks são conduzidos?", pt = () => "Como posso contribuir?", mt = () => "Com que frequência os benchmarks são atualizados?", ht = () => "Os dados são confiáveis?", gt = () => "Existem muitas maneiras de contribuir: envie benchmarks, melhore a documentação, relate bugs, sugira novas métricas ou patrocine o projeto. Visite nosso repositório no GitHub para mais detalhes.", _t = () => "Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de outliers e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.", vt = () => "Executamos novamente todos os benchmarks semanalmente com as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo imediato de re-benchmark.", yt = () => "Executamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório no GitHub.", bt = () => "Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.", xt = () => "O que é o i18n Benchmark?", St = () => "O i18n Benchmark é uma suíte de testes de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor de bibliotecas de internacionalização para aplicativos JavaScript e React.", Ct = () => "Quais bibliotecas são suportadas atualmente?", wt = () => "Sim! Submissões de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.", Tt = () => "Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base em seu caso de uso, escala e restrições específicas.", Et = () => "我可以提交自己的基准测试吗？", Dt = () => "你们提供咨询服务吗？", Ot = () => "如何进行基准测试？", kt = () => "我该如何贡献？", At = () => "基准测试多久更新一次？", jt = () => "数据可靠吗？", Mt = () => "有很多贡献方式：提交基准测试、改进文档、报告 Bug、建议新指标或赞助项目。访问我们的 GitHub 仓库了解更多详情。", Nt = () => "我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都会随我们的分析一起发布，以确保完全透明。", Pt = () => "我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本更新将立即触发重新测试周期。", Ft = () => "我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都会重复多次，以确保统计显著性。所有测试配置都可以在我们的 GitHub 仓库中公开访问。", It = () => "我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。", Lt = () => "什么是 i18n Benchmark？", Rt = () => "i18n Benchmark 是一个开源基准测试套件，用于测量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。", zt = () => "目前支持哪些库？", Bt = () => "是的！欢迎社区提交基准测试。Fork 我们的仓库，按照我们的贡献指南添加您的基准测试，并提交 Pull Request。我们的团队将审查并合并合格的提交。", Vt = () => "是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和约束提供量身定制的建议。", Ht = () => "自分のベンチマークを提出できますか？", Ut = () => "コンサルティングサービスは提供していますか？", Wt = () => "ベンチマークはどのように行われますか？", Gt = () => "どのように貢献できますか？", Kt = () => "ベンチマークはどのくらいの頻度で更新されますか？", qt = () => "データは信頼できますか？", Jt = () => "貢献する方法はたくさんあります。ベンチマークの提出、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。", Yt = () => "ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。すべての生データは、完全な透明性を確保するために分析結果とともに公開されます。", Xt = () => "各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。", Zt = () => "一貫したハードウェアを使用し、隔離された環境で標準化されたテストを実行します。各ベンチマークは、統計的な有意性を確保するために複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。", Qt = () => "react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。", $t = () => "i18n Benchmarkとは何ですか？", en = () => "i18n Benchmarkは、JavaScriptおよびReactアプリケーション向けの国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者エクスペリエンスを測定および比較するオープンソースのベンチマークスイートです。", tn = () => "現在サポートされているライブラリは何ですか？", nn = () => "はい！コミュニティからのベンチマークの提出を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。私たちのチームが内容を確認し、適格なものをマージします。", rn = () => "はい、Enterpriseプランにはi18nソリューションを評価するチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいたカスタマイズされた推奨事項を提供できます。", an = () => "저만의 벤치마크를 제출할 수 있나요?", on = () => "컨설팅 서비스를 제공하나요?", sn = () => "벤치마크는 어떻게 진행되나요?", cn = () => "어떻게 기여할 수 있나요?", ln = () => "벤치마크는 얼마나 자주 업데이트되나요?", un = () => "데이터는 신뢰할 수 있나요?", dn = () => "기여하는 방법은 다양합니다: 벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 또는 프로젝트 후원. 자세한 내용은 GitHub 저장소를 방문하세요.", fn = () => "웜업 실행, 이상치 감지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 모든 원시 데이터는 완전한 투명성을 위해 분석 결과와 함께 게시됩니다.", pn = () => "매주 각 라이브러리의 최신 안정 버전에 대해 모든 벤치마크를 다시 실행합니다. 주요 버전이 릴리스되면 즉시 재벤치마크 주기가 시작됩니다.", mn = () => "일관된 하드웨어를 사용하는 격리된 환경에서 표준화된 테스트를 실행합니다. 각 벤치마크는 통계적 유의성을 확보하기 위해 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 저장소에 공개되어 있습니다.", hn = () => "react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee를 지원합니다.", gn = () => "i18n Benchmark란 무엇인가요?", _n = () => "i18n Benchmark는 JavaScript 및 React 애플리케이션용 국제화 라이브러리의 성능, 번들 크기 및 개발자 경험을 측정하고 비교하는 오픈 소스 벤치마킹 제품군입니다.", vn = () => "현재 어떤 라이브러리가 지원되나요?", yn = () => "네! 커뮤니티의 벤치마크 제출을 환영합니다. 저장소를 포크하고 기여 가이드에 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출하세요. 저희 팀이 검토 후 마지(merge)할 것입니다.", bn = () => "네, 엔터프라이즈 플랜에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 특정 사례, 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다.", xn = () => "Могу ли я отправить свои собственные бенчмарки?", Sn = () => "Предлагаете ли вы консультационные услуги?", Cn = () => "Как проводятся бенчмарки?", wn = () => "Как я могу помочь ?", Tn = () => "Как часто обновляются бенчмарки?", En = () => "Надежны ли данные?", Dn = () => "Есть много способов внести свой вклад: отправить бенчмарки, улучшить документацию, сообщить о багах, предложить новые метрики или спонсировать проект. Посетите наш репозиторий GitHub для более подробной информации.", On = () => "Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с нашим анализом для полной прозрачности.", kn = () => "Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий вызывает немедленный цикл повторного тестирования.", An = () => "Мы проводим стандартизированные тесты в изолированных средах с использованием единообразного оборудования. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов открыты в нашем репозитории GitHub.", jn = () => "Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.", Mn = () => "Что такое i18n Benchmark?", Nn = () => "i18n Benchmark — это набор тестов с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчика библиотек интернационализации для приложений JavaScript и React.", Pn = () => "Какие библиотеки поддерживаются в настоящее время?", Fn = () => "Да! Мы приветствуем отправку бенчмарков от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя нашему руководству по внесению вклада, и отправьте пулл-реквест. Наша команда рассмотрит и примет квалифицированные заявки.", In = () => "Да, наш корпоративный план включает консультационные часы для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации, основанные на вашем конкретном случае использования, масштабе и ограничениях.", Ln = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? q(e) : n === "es" ? ge(e) : n === "de" ? Me(e) : n === "it" ? Je(e) : n === "pt" ? ut(e) : n === "zh" ? Et(e) : n === "ja" ? Ht(e) : n === "ko" ? an(e) : n === "ru" ? xn(e) : j(e);
}), Rn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? J(e) : n === "es" ? _e(e) : n === "de" ? Ne(e) : n === "it" ? Ye(e) : n === "pt" ? dt(e) : n === "zh" ? Dt(e) : n === "ja" ? Ut(e) : n === "ko" ? on(e) : n === "ru" ? Sn(e) : M(e);
}), zn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Y(e) : n === "es" ? ve(e) : n === "de" ? Pe(e) : n === "it" ? Xe(e) : n === "pt" ? ft(e) : n === "zh" ? Ot(e) : n === "ja" ? Wt(e) : n === "ko" ? sn(e) : n === "ru" ? Cn(e) : N(e);
}), Bn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? X(e) : n === "es" ? ye(e) : n === "de" ? Fe(e) : n === "it" ? Ze(e) : n === "pt" ? pt(e) : n === "zh" ? kt(e) : n === "ja" ? Gt(e) : n === "ko" ? cn(e) : n === "ru" ? wn(e) : P(e);
}), Vn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ie(e) : n === "es" ? be(e) : n === "de" ? Ie(e) : n === "it" ? Qe(e) : n === "pt" ? mt(e) : n === "zh" ? At(e) : n === "ja" ? Kt(e) : n === "ko" ? ln(e) : n === "ru" ? Tn(e) : F(e);
}), Hn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ae(e) : n === "es" ? xe(e) : n === "de" ? Le(e) : n === "it" ? $e(e) : n === "pt" ? ht(e) : n === "zh" ? jt(e) : n === "ja" ? qt(e) : n === "ko" ? un(e) : n === "ru" ? En(e) : I(e);
}), Z = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? oe(e) : n === "es" ? Se(e) : n === "de" ? Re(e) : n === "it" ? et(e) : n === "pt" ? gt(e) : n === "zh" ? Mt(e) : n === "ja" ? Jt(e) : n === "ko" ? dn(e) : n === "ru" ? Dn(e) : L(e);
}), Un = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? se(e) : n === "es" ? Ce(e) : n === "de" ? ze(e) : n === "it" ? tt(e) : n === "pt" ? _t(e) : n === "zh" ? Nt(e) : n === "ja" ? Yt(e) : n === "ko" ? fn(e) : n === "ru" ? On(e) : R(e);
}), Wn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ce(e) : n === "es" ? we(e) : n === "de" ? Be(e) : n === "it" ? nt(e) : n === "pt" ? vt(e) : n === "zh" ? Pt(e) : n === "ja" ? Xt(e) : n === "ko" ? pn(e) : n === "ru" ? kn(e) : z(e);
}), Gn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? le(e) : n === "es" ? Te(e) : n === "de" ? Ve(e) : n === "it" ? rt(e) : n === "pt" ? yt(e) : n === "zh" ? Ft(e) : n === "ja" ? Zt(e) : n === "ko" ? mn(e) : n === "ru" ? An(e) : B(e);
}), Kn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ue(e) : n === "es" ? Ee(e) : n === "de" ? He(e) : n === "it" ? it(e) : n === "pt" ? bt(e) : n === "zh" ? It(e) : n === "ja" ? Qt(e) : n === "ko" ? hn(e) : n === "ru" ? jn(e) : V(e);
}), qn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? de(e) : n === "es" ? De(e) : n === "de" ? Ue(e) : n === "it" ? at(e) : n === "pt" ? xt(e) : n === "zh" ? Lt(e) : n === "ja" ? $t(e) : n === "ko" ? gn(e) : n === "ru" ? Mn(e) : H(e);
}), Jn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? fe(e) : n === "es" ? Oe(e) : n === "de" ? We(e) : n === "it" ? ot(e) : n === "pt" ? St(e) : n === "zh" ? Rt(e) : n === "ja" ? en(e) : n === "ko" ? _n(e) : n === "ru" ? Nn(e) : U(e);
}), Yn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? pe(e) : n === "es" ? ke(e) : n === "de" ? Ge(e) : n === "it" ? st(e) : n === "pt" ? Ct(e) : n === "zh" ? zt(e) : n === "ja" ? tn(e) : n === "ko" ? vn(e) : n === "ru" ? Pn(e) : W(e);
}), Xn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? me(e) : n === "es" ? Ae(e) : n === "de" ? Ke(e) : n === "it" ? ct(e) : n === "pt" ? wt(e) : n === "zh" ? Bt(e) : n === "ja" ? nn(e) : n === "ko" ? yn(e) : n === "ru" ? Fn(e) : G(e);
}), Zn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? he(e) : n === "es" ? je(e) : n === "de" ? qe(e) : n === "it" ? lt(e) : n === "pt" ? Tt(e) : n === "zh" ? Vt(e) : n === "ja" ? rn(e) : n === "ko" ? bn(e) : n === "ru" ? In(e) : K(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/faq/FAQList.tsx";
function Qn() {
	let e = [
		{
			q: qn(),
			a: Jn()
		},
		{
			q: zn(),
			a: Gn()
		},
		{
			q: Yn(),
			a: Kn()
		},
		{
			q: Ln(),
			a: Xn()
		},
		{
			q: Vn(),
			a: Wn()
		},
		{
			q: Hn(),
			a: Un()
		},
		{
			q: Rn(),
			a: Zn()
		},
		{
			q: Bn(),
			a: Z()
		}
	];
	return t("div", {
		className: "mx-auto max-w-3xl space-y-4",
		children: e.map((e) => t("details", {
			className: "group rounded-lg border border-border bg-card",
			children: [t("summary", {
				className: "cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors",
				children: e.q
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 46,
				columnNumber: 11
			}, this), t("p", {
				className: "px-6 pb-4 text-sm text-muted-foreground",
				children: e.a
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 49,
				columnNumber: 11
			}, this)]
		}, e.q, !0, {
			fileName: Q,
			lineNumber: 42,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 40,
		columnNumber: 5
	}, this);
}
var $n = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
m("en", { reload: !1 });
function er({ children: n }) {
	return t(e, { children: n }, void 0, !1, {
		fileName: $n,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/faq/FAQList.wrapper.tsx";
function tr() {
	return t(er, { children: t(Qn, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { tr as default };
