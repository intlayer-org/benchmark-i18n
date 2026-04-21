import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
var r = {}, i = [
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
], a = "PARAGLIDE_LOCALE", ee = 3456e4, o = [
	"cookie",
	"globalVariable",
	"baseLocale"
], s = [], c, l;
function te(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (c === t) return l;
	let n = new URL(t, "http://dummy.com"), i;
	for (let e of s) if (new r(e.match, n.href).exec(n.href)) {
		i = e;
		break;
	}
	return c = t, l = i, i;
}
function u(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var d = void 0;
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var f, p = !1, m = () => {
	if (d) {
		let e = d?.getStore()?.locale;
		if (e) return e;
	}
	let e = o;
	typeof window < "u" && window.location?.href && (e = u(window.location.href));
	let t = h(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, _(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function h(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = b();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (S(t) && x.has(t)) {
			let e = x.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return y(t);
			}
		}
		let e = v(n);
		if (e) return e;
	}
}
var g = (e) => {
	e ? window.location.href = e : window.location.reload();
}, _ = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = m();
	} catch {}
	let i = [], s = o;
	typeof window < "u" && window.location?.href && (s = u(window.location.href));
	for (let t of s) if (t === "globalVariable") f = e;
	else if (t === "cookie") {
		if (typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (S(t) && x.has(t)) {
		let n = x.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let c = () => {
		n.reload && window.location && e !== r && g(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		c();
	});
	c();
};
function v(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function y(e) {
	let t = v(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function b() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${a}=([^;]+)`))?.[2];
	return v(e);
}
var x = /* @__PURE__ */ new Map();
function S(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var C = () => "What is i18n Benchmark?", w = () => "Qu'est-ce qu'i18n Benchmark ?", T = () => "¿Qué es i18n Benchmark?", E = () => "Was ist i18n Benchmark?", D = () => "Cos'è i18n Benchmark?", O = () => "O que é o i18n Benchmark?", k = () => "什么是 i18n Benchmark？", A = () => "i18n Benchmarkとは何ですか？", j = () => "i18n Benchmark란 무엇인가요?", M = () => "Что такое i18n Benchmark?", N = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? C(e) : n === "fr" ? w(e) : n === "es" ? T(e) : n === "de" ? E(e) : n === "it" ? D(e) : n === "pt" ? O(e) : n === "zh" ? k(e) : n === "ja" ? A(e) : n === "ko" ? j(e) : M(e);
}), P = () => "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.", F = () => "i18n Benchmark est une suite de tests open source qui mesure et compare les performances, la taille du bundle et l'expérience développeur des bibliothèques d'internationalisation pour les applications JavaScript et React.", I = () => "i18n Benchmark es una suite de pruebas de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.", L = () => "i18n Benchmark ist eine Open-Source-Benchmarking-Suite, welche die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungs-Bibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.", R = () => "i18n Benchmark è una suite di test open source che misura e confronta le prestazioni, la dimensione del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.", z = () => "O i18n Benchmark é uma suíte de testes de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor de bibliotecas de internacionalização para aplicativos JavaScript e React.", B = () => "i18n Benchmark 是一个开源基准测试套件，用于测量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。", V = () => "i18n Benchmarkは、JavaScriptおよびReactアプリケーション向けの国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者エクスペリエンスを測定および比較するオープンソースのベンチマークスイートです。", H = () => "i18n Benchmark는 JavaScript 및 React 애플리케이션용 국제화 라이브러리의 성능, 번들 크기 및 개발자 경험을 측정하고 비교하는 오픈 소스 벤치마킹 제품군입니다.", U = () => "i18n Benchmark — это набор тестов с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчика библиотек интернационализации для приложений JavaScript и React.", W = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? P(e) : n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : U(e);
}), G = () => "How are benchmarks conducted?", K = () => "Comment les benchmarks sont-ils menés ?", q = () => "¿Cómo se realizan los benchmarks?", J = () => "Wie werden die Benchmarks durchgeführt?", Y = () => "Come vengono condotti i benchmark?", X = () => "Como os benchmarks são conduzidos?", Z = () => "如何进行基准测试？", Q = () => "ベンチマークはどのように行われますか？", ne = () => "벤치마크는 어떻게 진행되나요?", re = () => "Как проводятся бенчмарки?", ie = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? G(e) : n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? Q(e) : n === "ko" ? ne(e) : re(e);
}), ae = () => "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.", oe = () => "Nous effectuons des tests standardisés dans des environnements isolés en utilisant un matériel cohérent. Chaque benchmark est répété plusieurs fois pour garantir une signification statistique. Toutes les configurations de test sont disponibles publiquement dans notre dépôt GitHub.", se = () => "Realizamos pruebas estandarizadas en entornos aislados utilizando un hardware consistente. Cada benchmark se repite varias veces para garantizar la significancia estadística. Todas las configuraciones de prueba están disponibles públicamente en nuestro repositorio de GitHub.", ce = () => "Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrfach wiederholt, um statistische Signifikanz zu gewährleisten. Alle Testkonfigurationen sind in unserem GitHub-Repository öffentlich zugänglich.", le = () => "Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni di test sono disponibili pubblicamente nel nostro repository GitHub.", ue = () => "Executamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório no GitHub.", de = () => "我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都会重复多次，以确保统计显著性。所有测试配置都可以在我们的 GitHub 仓库中公开访问。", fe = () => "一貫したハードウェアを使用し、隔離された環境で標準化されたテストを実行します。各ベンチマークは、統計的な有意性を確保するために複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。", pe = () => "일관된 하드웨어를 사용하는 격리된 환경에서 표준화된 테스트를 실행합니다. 각 벤치마크는 통계적 유의성을 확보하기 위해 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 저장소에 공개되어 있습니다.", me = () => "Мы проводим стандартизированные тесты в изолированных средах с использованием единообразного оборудования. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов открыты в нашем репозитории GitHub.", he = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ae(e) : n === "fr" ? oe(e) : n === "es" ? se(e) : n === "de" ? ce(e) : n === "it" ? le(e) : n === "pt" ? ue(e) : n === "zh" ? de(e) : n === "ja" ? fe(e) : n === "ko" ? pe(e) : me(e);
}), ge = () => "Which libraries are currently supported?", _e = () => "Quelles bibliothèques sont actuellement supportées ?", ve = () => "¿Qué bibliotecas son compatibles actualmente?", ye = () => "Welche Bibliotheken werden derzeit unterstützt?", be = () => "Quali librerie sono attualmente supportate?", xe = () => "Quais bibliotecas são suportadas atualmente?", Se = () => "目前支持哪些库？", Ce = () => "現在サポートされているライブラリは何ですか？", we = () => "현재 어떤 라이브러리가 지원되나요?", Te = () => "Какие библиотеки поддерживаются в настоящее время?", Ee = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ge(e) : n === "fr" ? _e(e) : n === "es" ? ve(e) : n === "de" ? ye(e) : n === "it" ? be(e) : n === "pt" ? xe(e) : n === "zh" ? Se(e) : n === "ja" ? Ce(e) : n === "ko" ? we(e) : Te(e);
}), De = () => "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.", Oe = () => "Nous supportons react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react et Tolgee.", ke = () => "Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.", Ae = () => "Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.", je = () => "Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.", Me = () => "Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.", Ne = () => "我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。", Pe = () => "react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。", Fe = () => "react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee를 지원합니다.", Ie = () => "Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.", Le = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? De(e) : n === "fr" ? Oe(e) : n === "es" ? ke(e) : n === "de" ? Ae(e) : n === "it" ? je(e) : n === "pt" ? Me(e) : n === "zh" ? Ne(e) : n === "ja" ? Pe(e) : n === "ko" ? Fe(e) : Ie(e);
}), Re = () => "Can I submit my own benchmarks?", ze = () => "Puis-je soumettre mes propres benchmarks ?", Be = () => "¿Puedo enviar mis propios benchmarks?", Ve = () => "Kann ich meine eigenen Benchmarks einreichen?", He = () => "Posso inviare i miei benchmark?", Ue = () => "Posso enviar meus próprios benchmarks?", We = () => "我可以提交自己的基准测试吗？", Ge = () => "自分のベンチマークを提出できますか？", Ke = () => "저만의 벤치마크를 제출할 수 있나요?", qe = () => "Могу ли я отправить свои собственные бенчмарки?", Je = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Re(e) : n === "fr" ? ze(e) : n === "es" ? Be(e) : n === "de" ? Ve(e) : n === "it" ? He(e) : n === "pt" ? Ue(e) : n === "zh" ? We(e) : n === "ja" ? Ge(e) : n === "ko" ? Ke(e) : qe(e);
}), Ye = () => "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.", Xe = () => "Oui ! Les soumissions de benchmarks par la communauté sont les bienvenues. Forkez notre dépôt, ajoutez votre benchmark en suivant notre guide de contribution et soumettez une pull request. Notre équipe examinera et fusionnera les soumissions qualifiées.", Ze = () => "¡Sí! Las presentaciones de benchmarks de la comunidad son bienvenidas. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía un pull request. Nuestro equipo revisará y combinará las presentaciones que califiquen.", Qe = () => "Ja! Einreichungen von Benchmarks durch die Community sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird qualifizierte Einreichungen prüfen und zusammenführen.", $e = () => "Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.", et = () => "Sim! Submissões de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.", tt = () => "是的！欢迎社区提交基准测试。Fork 我们的仓库，按照我们的贡献指南添加您的基准测试，并提交 Pull Request。我们的团队将审查并合并合格的提交。", nt = () => "はい！コミュニティからのベンチマークの提出を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。私たちのチームが内容を確認し、適格なものをマージします。", rt = () => "네! 커뮤니티의 벤치마크 제출을 환영합니다. 저장소를 포크하고 기여 가이드에 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출하세요. 저희 팀이 검토 후 마지(merge)할 것입니다.", it = () => "Да! Мы приветствуем отправку бенчмарков от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя нашему руководству по внесению вклада, и отправьте пулл-реквест. Наша команда рассмотрит и примет квалифицированные заявки.", at = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Ye(e) : n === "fr" ? Xe(e) : n === "es" ? Ze(e) : n === "de" ? Qe(e) : n === "it" ? $e(e) : n === "pt" ? et(e) : n === "zh" ? tt(e) : n === "ja" ? nt(e) : n === "ko" ? rt(e) : it(e);
}), ot = () => "How often are benchmarks updated?", st = () => "À quelle fréquence les benchmarks sont-ils mis à jour ?", ct = () => "¿Con qué frecuencia se funcionan los benchmarks?", lt = () => "Wie oft werden die Benchmarks aktualisiert?", ut = () => "Con quale frequenza vengono aggiornati i benchmark?", dt = () => "Com que frequência os benchmarks são atualizados?", ft = () => "基准测试多久更新一次？", pt = () => "ベンチマークはどのくらいの頻度で更新されますか？", mt = () => "벤치마크는 얼마나 자주 업데이트되나요?", ht = () => "Как часто обновляются бенчмарки?", gt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ot(e) : n === "fr" ? st(e) : n === "es" ? ct(e) : n === "de" ? lt(e) : n === "it" ? ut(e) : n === "pt" ? dt(e) : n === "zh" ? ft(e) : n === "ja" ? pt(e) : n === "ko" ? mt(e) : ht(e);
}), _t = () => "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.", vt = () => "Nous relançons tous les benchmarks chaque semaine avec les dernières versions stables de chaque bibliothèque. Les sorties de versions majeures déclenchent un cycle de re-benchmarking immédiat.", yt = () => "Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.", bt = () => "Wir führen alle Benchmarks wöchentlich gegen die neuesten stabilen Versionen jeder Bibliothek neu aus. Major-Releases lösen einen sofortigen Re-Benchmark-Zyklus aus.", xt = () => "Eseguiamo nuovamente tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. Le versioni principali in uscita attivano un immediato ciclo di re-benchmark.", St = () => "Executamos novamente todos os benchmarks semanalmente com as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo imediato de re-benchmark.", Ct = () => "我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本更新将立即触发重新测试周期。", wt = () => "各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。", Tt = () => "매주 각 라이브러리의 최신 안정 버전에 대해 모든 벤치마크를 다시 실행합니다. 주요 버전이 릴리스되면 즉시 재벤치마크 주기가 시작됩니다.", Et = () => "Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий вызывает немедленный цикл повторного тестирования.", Dt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? _t(e) : n === "fr" ? vt(e) : n === "es" ? yt(e) : n === "de" ? bt(e) : n === "it" ? xt(e) : n === "pt" ? St(e) : n === "zh" ? Ct(e) : n === "ja" ? wt(e) : n === "ko" ? Tt(e) : Et(e);
}), Ot = () => "Is the data reliable?", kt = () => "Les données sont-elles fiables ?", At = () => "¿Son fiables los datos?", jt = () => "Sind die Daten zuverlässig?", Mt = () => "I dati sono affidabili?", Nt = () => "Os dados são confiáveis?", Pt = () => "数据可靠吗？", Ft = () => "データは信頼できますか？", It = () => "데이터는 신뢰할 수 있나요?", Lt = () => "Надежны ли данные?", Rt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Ot(e) : n === "fr" ? kt(e) : n === "es" ? At(e) : n === "de" ? jt(e) : n === "it" ? Mt(e) : n === "pt" ? Nt(e) : n === "zh" ? Pt(e) : n === "ja" ? Ft(e) : n === "ko" ? It(e) : Lt(e);
}), zt = () => "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.", Bt = () => "Nous suivons une méthodologie statistique rigoureuse, incluant des phases de préchauffage, la détection des valeurs aberrantes et des intervalles de confiance. Toutes les données brutes sont publiées avec notre analyse pour une transparence totale.", Vt = () => "Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.", Ht = () => "Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Phasen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.", Ut = () => "Seguiamo una rigorosa metodologia statistica che include corse di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per una completa trasparenza.", Wt = () => "Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de outliers e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.", Gt = () => "我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都会随我们的分析一起发布，以确保完全透明。", Kt = () => "ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。すべての生データは、完全な透明性を確保するために分析結果とともに公開されます。", qt = () => "웜업 실행, 이상치 감지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 모든 원시 데이터는 완전한 투명성을 위해 분석 결과와 함께 게시됩니다.", Jt = () => "Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с нашим анализом для полной прозрачности.", Yt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? zt(e) : n === "fr" ? Bt(e) : n === "es" ? Vt(e) : n === "de" ? Ht(e) : n === "it" ? Ut(e) : n === "pt" ? Wt(e) : n === "zh" ? Gt(e) : n === "ja" ? Kt(e) : n === "ko" ? qt(e) : Jt(e);
}), Xt = () => "Do you offer consulting services?", Zt = () => "Offrez-vous des services de conseil ?", Qt = () => "¿Ofrecen servicios de consultoría?", $t = () => "Bieten Sie Beratungsdienstleistungen an?", en = () => "Offrite servizi di consulenza?", tn = () => "Vocês oferecem serviços de consultoria?", nn = () => "你们提供咨询服务吗？", rn = () => "コンサルティングサービスは提供していますか？", an = () => "컨설팅 서비스를 제공하나요?", on = () => "Предлагаете ли вы консультационные услуги?", sn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Xt(e) : n === "fr" ? Zt(e) : n === "es" ? Qt(e) : n === "de" ? $t(e) : n === "it" ? en(e) : n === "pt" ? tn(e) : n === "zh" ? nn(e) : n === "ja" ? rn(e) : n === "ko" ? an(e) : on(e);
}), cn = () => "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.", ln = () => "Oui, notre offre Enterprise inclut des heures de conseil pour les équipes évaluant les solutions i18n. Nous pouvons fournir des recommandations personnalisées basées sur votre cas d'utilisation, votre échelle et vos contraintes spécifiques.", un = () => "Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso, escala y limitaciones específicas.", dn = () => "Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Umfang und Ihren Einschränkungen geben.", fn = () => "Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano le soluzioni i18n. Possiamo fornire raccomandazioni personalizzate basate sul caso d'uso specifico, sulla scala e sui vincoli.", pn = () => "Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base em seu caso de uso, escala e restrições específicas.", mn = () => "是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和约束提供量身定制的建议。", hn = () => "はい、Enterpriseプランにはi18nソリューションを評価するチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいたカスタマイズされた推奨事項を提供できます。", gn = () => "네, 엔터프라이즈 플랜에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 특정 사례, 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다.", _n = () => "Да, наш корпоративный план включает консультационные часы для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации, основанные на вашем конкретном случае использования, масштабе и ограничениях.", vn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? cn(e) : n === "fr" ? ln(e) : n === "es" ? un(e) : n === "de" ? dn(e) : n === "it" ? fn(e) : n === "pt" ? pn(e) : n === "zh" ? mn(e) : n === "ja" ? hn(e) : n === "ko" ? gn(e) : _n(e);
}), yn = () => "How can I contribute?", bn = () => "Comment puis-je contribuer ?", xn = () => "¿Cómo puedo contribuir?", Sn = () => "Wie kann ich beitragen?", Cn = () => "Come posso contribuire?", wn = () => "Como posso contribuir?", Tn = () => "我该如何贡献？", En = () => "どのように貢献できますか？", $ = () => "어떻게 기여할 수 있나요?", Dn = () => "Как я могу помочь ?", On = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? yn(e) : n === "fr" ? bn(e) : n === "es" ? xn(e) : n === "de" ? Sn(e) : n === "it" ? Cn(e) : n === "pt" ? wn(e) : n === "zh" ? Tn(e) : n === "ja" ? En(e) : n === "ko" ? $(e) : Dn(e);
}), kn = () => "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.", An = () => "Il y a de nombreuses façons de contribuer : soumettre des benchmarks, améliorer la documentation, signaler des bugs, suggérer de nouvelles métriques ou parrainer le projet. Visitez notre dépôt GitHub pour plus de détails.", jn = () => "Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de bugs, sugerir nuevas métricas o patrocinar el proyecto. Visita nuestro repositorio de GitHub para más detalles.", Mn = () => "Es gibt viele Möglichkeiten, beizutragen: Benchmarks einreichen, die Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.", Nn = () => "Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.", Pn = () => "Existem muitas maneiras de contribuir: envie benchmarks, melhore a documentação, relate bugs, sugira novas métricas ou patrocine o projeto. Visite nosso repositório no GitHub para mais detalhes.", Fn = () => "有很多贡献方式：提交基准测试、改进文档、报告 Bug、建议新指标或赞助项目。访问我们的 GitHub 仓库了解更多详情。", In = () => "貢献する方法はたくさんあります。ベンチマークの提出、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。", Ln = () => "기여하는 방법은 다양합니다: 벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 또는 프로젝트 후원. 자세한 내용은 GitHub 저장소를 방문하세요.", Rn = () => "Есть много способов внести свой вклад: отправить бенчмарки, улучшить документацию, сообщить о багах, предложить новые метрики или спонсировать проект. Посетите наш репозиторий GitHub для более подробной информации.", zn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? kn(e) : n === "fr" ? An(e) : n === "es" ? jn(e) : n === "de" ? Mn(e) : n === "it" ? Nn(e) : n === "pt" ? Pn(e) : n === "zh" ? Fn(e) : n === "ja" ? In(e) : n === "ko" ? Ln(e) : Rn(e);
});
function Bn() {
	return t("div", {
		className: "mx-auto max-w-3xl space-y-4",
		children: [
			{
				q: N(),
				a: W()
			},
			{
				q: ie(),
				a: he()
			},
			{
				q: Ee(),
				a: Le()
			},
			{
				q: Je(),
				a: at()
			},
			{
				q: gt(),
				a: Dt()
			},
			{
				q: Rt(),
				a: Yt()
			},
			{
				q: sn(),
				a: vn()
			},
			{
				q: On(),
				a: zn()
			}
		].map((e) => n("details", {
			className: "group rounded-lg border border-border bg-card",
			children: [t("summary", {
				className: "cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors",
				children: e.q
			}), t("p", {
				className: "px-6 pb-4 text-sm text-muted-foreground",
				children: e.a
			})]
		}, e.q))
	});
}
_("en", { reload: !1 });
function Vn({ children: n }) {
	return t(e, { children: n });
}
function Hn() {
	return t(Vn, { children: t(Bn, {}) });
}
export { Hn as default };
