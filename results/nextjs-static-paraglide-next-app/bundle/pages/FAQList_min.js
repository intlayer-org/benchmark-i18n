import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
import { useParams as o } from "next/navigation";
var s = {}, c = [
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
], l = "PARAGLIDE_LOCALE", ee = 3456e4, u = [
	"cookie",
	"globalVariable",
	"baseLocale"
], d = [], f, p;
function te(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (f === t) return p;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of d) if (new s(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return f = t, p = r, r;
}
function m(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var h = void 0, g = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var _, v = !1, y = () => {
	if (h) {
		let e = h?.getStore()?.locale;
		if (e) return e;
	}
	let e = u;
	!g && typeof window < "u" && window.location?.href && (e = m(window.location.href));
	let t = b(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return v || (_ = t, v = !0, S(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function b(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = T();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && _ !== void 0) n = _;
		else if (D(t) && E.has(t)) {
			let e = E.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return w(t);
			}
		}
		let e = C(n);
		if (e) return e;
	}
}
var x = (e) => {
	e ? window.location.href = e : window.location.reload();
}, S = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = y();
	} catch {}
	let i = [], a = u;
	!g && typeof window < "u" && window.location?.href && (a = m(window.location.href));
	for (let t of a) if (t === "globalVariable") _ = e;
	else if (t === "cookie") {
		if (g || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (D(t) && E.has(t)) {
		let n = E.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!g && n.reload && window.location && e !== r && x(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function C(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function w(e) {
	let t = C(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function T() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${l}=([^;]+)`))?.[2];
	return C(e);
}
var E = /* @__PURE__ */ new Map();
function D(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var O = () => "What is i18n Benchmark?", k = () => "Qu'est-ce qu'i18n Benchmark ?", A = () => "¿Qué es i18n Benchmark?", j = () => "Was ist i18n Benchmark?", M = () => "Cos'è i18n Benchmark?", N = () => "O que é o i18n Benchmark?", P = () => "什么是 i18n Benchmark？", F = () => "i18n Benchmarkとは何ですか？", I = () => "i18n Benchmark란 무엇인가요?", L = () => "Что такое i18n Benchmark?", R = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? O(e) : n === "fr" ? k(e) : n === "es" ? A(e) : n === "de" ? j(e) : n === "it" ? M(e) : n === "pt" ? N(e) : n === "zh" ? P(e) : n === "ja" ? F(e) : n === "ko" ? I(e) : L(e);
}), z = () => "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.", B = () => "i18n Benchmark est une suite de tests open source qui mesure et compare les performances, la taille du bundle et l'expérience développeur des bibliothèques d'internationalisation pour les applications JavaScript et React.", V = () => "i18n Benchmark es una suite de pruebas de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.", H = () => "i18n Benchmark ist eine Open-Source-Benchmarking-Suite, welche die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungs-Bibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.", U = () => "i18n Benchmark è una suite di test open source che misura e confronta le prestazioni, la dimensione del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.", W = () => "O i18n Benchmark é uma suíte de testes de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor de bibliotecas de internacionalização para aplicativos JavaScript e React.", G = () => "i18n Benchmark 是一个开源基准测试套件，用于测量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。", K = () => "i18n Benchmarkは、JavaScriptおよびReactアプリケーション向けの国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者エクスペリエンスを測定および比較するオープンソースのベンチマークスイートです。", q = () => "i18n Benchmark는 JavaScript 및 React 애플리케이션용 국제화 라이브러리의 성능, 번들 크기 및 개발자 경험을 측정하고 비교하는 오픈 소스 벤치마킹 제품군입니다.", J = () => "i18n Benchmark — это набор тестов с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчика библиотек интернационализации для приложений JavaScript и React.", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? z(e) : n === "fr" ? B(e) : n === "es" ? V(e) : n === "de" ? H(e) : n === "it" ? U(e) : n === "pt" ? W(e) : n === "zh" ? G(e) : n === "ja" ? K(e) : n === "ko" ? q(e) : J(e);
}), X = () => "How are benchmarks conducted?", Z = () => "Comment les benchmarks sont-ils menés ?", Q = () => "¿Cómo se realizan los benchmarks?", ne = () => "Wie werden die Benchmarks durchgeführt?", re = () => "Come vengono condotti i benchmark?", ie = () => "Como os benchmarks são conduzidos?", ae = () => "如何进行基准测试？", oe = () => "ベンチマークはどのように行われますか？", se = () => "벤치마크는 어떻게 진행되나요?", ce = () => "Как проводятся бенчмарки?", le = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? X(e) : n === "fr" ? Z(e) : n === "es" ? Q(e) : n === "de" ? ne(e) : n === "it" ? re(e) : n === "pt" ? ie(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : ce(e);
}), ue = () => "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.", de = () => "Nous effectuons des tests standardisés dans des environnements isolés en utilisant un matériel cohérent. Chaque benchmark est répété plusieurs fois pour garantir une signification statistique. Toutes les configurations de test sont disponibles publiquement dans notre dépôt GitHub.", fe = () => "Realizamos pruebas estandarizadas en entornos aislados utilizando un hardware consistente. Cada benchmark se repite varias veces para garantizar la significancia estadística. Todas las configuraciones de prueba están disponibles públicamente en nuestro repositorio de GitHub.", pe = () => "Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrfach wiederholt, um statistische Signifikanz zu gewährleisten. Alle Testkonfigurationen sind in unserem GitHub-Repository öffentlich zugänglich.", me = () => "Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni di test sono disponibili pubblicamente nel nostro repository GitHub.", he = () => "Executamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório no GitHub.", ge = () => "我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都会重复多次，以确保统计显著性。所有测试配置都可以在我们的 GitHub 仓库中公开访问。", _e = () => "一貫したハードウェアを使用し、隔離された環境で標準化されたテストを実行します。各ベンチマークは、統計的な有意性を確保するために複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。", ve = () => "일관된 하드웨어를 사용하는 격리된 환경에서 표준화된 테스트를 실행합니다. 각 벤치마크는 통계적 유의성을 확보하기 위해 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 저장소에 공개되어 있습니다.", ye = () => "Мы проводим стандартизированные тесты в изолированных средах с использованием единообразного оборудования. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов открыты в нашем репозитории GitHub.", be = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? ue(e) : n === "fr" ? de(e) : n === "es" ? fe(e) : n === "de" ? pe(e) : n === "it" ? me(e) : n === "pt" ? he(e) : n === "zh" ? ge(e) : n === "ja" ? _e(e) : n === "ko" ? ve(e) : ye(e);
}), xe = () => "Which libraries are currently supported?", Se = () => "Quelles bibliothèques sont actuellement supportées ?", Ce = () => "¿Qué bibliotecas son compatibles actualmente?", we = () => "Welche Bibliotheken werden derzeit unterstützt?", Te = () => "Quali librerie sono attualmente supportate?", Ee = () => "Quais bibliotecas são suportadas atualmente?", De = () => "目前支持哪些库？", Oe = () => "現在サポートされているライブラリは何ですか？", ke = () => "현재 어떤 라이브러리가 지원되나요?", Ae = () => "Какие библиотеки поддерживаются в настоящее время?", je = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? xe(e) : n === "fr" ? Se(e) : n === "es" ? Ce(e) : n === "de" ? we(e) : n === "it" ? Te(e) : n === "pt" ? Ee(e) : n === "zh" ? De(e) : n === "ja" ? Oe(e) : n === "ko" ? ke(e) : Ae(e);
}), Me = () => "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.", Ne = () => "Nous supportons react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react et Tolgee.", Pe = () => "Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.", Fe = () => "Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.", Ie = () => "Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.", Le = () => "Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.", Re = () => "我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。", ze = () => "react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。", Be = () => "react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee를 지원합니다.", Ve = () => "Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.", He = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Me(e) : n === "fr" ? Ne(e) : n === "es" ? Pe(e) : n === "de" ? Fe(e) : n === "it" ? Ie(e) : n === "pt" ? Le(e) : n === "zh" ? Re(e) : n === "ja" ? ze(e) : n === "ko" ? Be(e) : Ve(e);
}), Ue = () => "Can I submit my own benchmarks?", We = () => "Puis-je soumettre mes propres benchmarks ?", Ge = () => "¿Puedo enviar mis propios benchmarks?", Ke = () => "Kann ich meine eigenen Benchmarks einreichen?", qe = () => "Posso inviare i miei benchmark?", Je = () => "Posso enviar meus próprios benchmarks?", Ye = () => "我可以提交自己的基准测试吗？", Xe = () => "自分のベンチマークを提出できますか？", Ze = () => "저만의 벤치마크를 제출할 수 있나요?", Qe = () => "Могу ли я отправить свои собственные бенчмарки?", $e = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Ue(e) : n === "fr" ? We(e) : n === "es" ? Ge(e) : n === "de" ? Ke(e) : n === "it" ? qe(e) : n === "pt" ? Je(e) : n === "zh" ? Ye(e) : n === "ja" ? Xe(e) : n === "ko" ? Ze(e) : Qe(e);
}), et = () => "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.", tt = () => "Oui ! Les soumissions de benchmarks par la communauté sont les bienvenues. Forkez notre dépôt, ajoutez votre benchmark en suivant notre guide de contribution et soumettez une pull request. Notre équipe examinera et fusionnera les soumissions qualifiées.", nt = () => "¡Sí! Las presentaciones de benchmarks de la comunidad son bienvenidas. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía un pull request. Nuestro equipo revisará y combinará las presentaciones que califiquen.", rt = () => "Ja! Einreichungen von Benchmarks durch die Community sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird qualifizierte Einreichungen prüfen und zusammenführen.", it = () => "Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.", at = () => "Sim! Submissões de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.", ot = () => "是的！欢迎社区提交基准测试。Fork 我们的仓库，按照我们的贡献指南添加您的基准测试，并提交 Pull Request。我们的团队将审查并合并合格的提交。", st = () => "はい！コミュニティからのベンチマークの提出を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。私たちのチームが内容を確認し、適格なものをマージします。", ct = () => "네! 커뮤니티의 벤치마크 제출을 환영합니다. 저장소를 포크하고 기여 가이드에 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출하세요. 저희 팀이 검토 후 마지(merge)할 것입니다.", lt = () => "Да! Мы приветствуем отправку бенчмарков от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя нашему руководству по внесению вклада, и отправьте пулл-реквест. Наша команда рассмотрит и примет квалифицированные заявки.", ut = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? et(e) : n === "fr" ? tt(e) : n === "es" ? nt(e) : n === "de" ? rt(e) : n === "it" ? it(e) : n === "pt" ? at(e) : n === "zh" ? ot(e) : n === "ja" ? st(e) : n === "ko" ? ct(e) : lt(e);
}), dt = () => "How often are benchmarks updated?", ft = () => "À quelle fréquence les benchmarks sont-ils mis à jour ?", pt = () => "¿Con qué frecuencia se funcionan los benchmarks?", mt = () => "Wie oft werden die Benchmarks aktualisiert?", ht = () => "Con quale frequenza vengono aggiornati i benchmark?", gt = () => "Com que frequência os benchmarks são atualizados?", _t = () => "基准测试多久更新一次？", vt = () => "ベンチマークはどのくらいの頻度で更新されますか？", yt = () => "벤치마크는 얼마나 자주 업데이트되나요?", bt = () => "Как часто обновляются бенчмарки?", xt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? dt(e) : n === "fr" ? ft(e) : n === "es" ? pt(e) : n === "de" ? mt(e) : n === "it" ? ht(e) : n === "pt" ? gt(e) : n === "zh" ? _t(e) : n === "ja" ? vt(e) : n === "ko" ? yt(e) : bt(e);
}), St = () => "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.", Ct = () => "Nous relançons tous les benchmarks chaque semaine avec les dernières versions stables de chaque bibliothèque. Les sorties de versions majeures déclenchent un cycle de re-benchmarking immédiat.", wt = () => "Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.", Tt = () => "Wir führen alle Benchmarks wöchentlich gegen die neuesten stabilen Versionen jeder Bibliothek neu aus. Major-Releases lösen einen sofortigen Re-Benchmark-Zyklus aus.", Et = () => "Eseguiamo nuovamente tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. Le versioni principali in uscita attivano un immediato ciclo di re-benchmark.", Dt = () => "Executamos novamente todos os benchmarks semanalmente com as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo imediato de re-benchmark.", Ot = () => "我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本更新将立即触发重新测试周期。", kt = () => "各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。", At = () => "매주 각 라이브러리의 최신 안정 버전에 대해 모든 벤치마크를 다시 실행합니다. 주요 버전이 릴리스되면 즉시 재벤치마크 주기가 시작됩니다.", jt = () => "Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий вызывает немедленный цикл повторного тестирования.", Mt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? St(e) : n === "fr" ? Ct(e) : n === "es" ? wt(e) : n === "de" ? Tt(e) : n === "it" ? Et(e) : n === "pt" ? Dt(e) : n === "zh" ? Ot(e) : n === "ja" ? kt(e) : n === "ko" ? At(e) : jt(e);
}), Nt = () => "Is the data reliable?", Pt = () => "Les données sont-elles fiables ?", Ft = () => "¿Son fiables los datos?", It = () => "Sind die Daten zuverlässig?", Lt = () => "I dati sono affidabili?", Rt = () => "Os dados são confiáveis?", zt = () => "数据可靠吗？", Bt = () => "データは信頼できますか？", Vt = () => "데이터는 신뢰할 수 있나요?", Ht = () => "Надежны ли данные?", Ut = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Nt(e) : n === "fr" ? Pt(e) : n === "es" ? Ft(e) : n === "de" ? It(e) : n === "it" ? Lt(e) : n === "pt" ? Rt(e) : n === "zh" ? zt(e) : n === "ja" ? Bt(e) : n === "ko" ? Vt(e) : Ht(e);
}), Wt = () => "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.", Gt = () => "Nous suivons une méthodologie statistique rigoureuse, incluant des phases de préchauffage, la détection des valeurs aberrantes et des intervalles de confiance. Toutes les données brutes sont publiées avec notre analyse pour une transparence totale.", Kt = () => "Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.", qt = () => "Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Phasen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.", Jt = () => "Seguiamo una rigorosa metodologia statistica che include corse di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per una completa trasparenza.", Yt = () => "Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de outliers e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.", Xt = () => "我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都会随我们的分析一起发布，以确保完全透明。", Zt = () => "ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。すべての生データは、完全な透明性を確保するために分析結果とともに公開されます。", Qt = () => "웜업 실행, 이상치 감지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 모든 원시 데이터는 완전한 투명성을 위해 분석 결과와 함께 게시됩니다.", $t = () => "Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с нашим анализом для полной прозрачности.", en = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Wt(e) : n === "fr" ? Gt(e) : n === "es" ? Kt(e) : n === "de" ? qt(e) : n === "it" ? Jt(e) : n === "pt" ? Yt(e) : n === "zh" ? Xt(e) : n === "ja" ? Zt(e) : n === "ko" ? Qt(e) : $t(e);
}), tn = () => "Do you offer consulting services?", nn = () => "Offrez-vous des services de conseil ?", rn = () => "¿Ofrecen servicios de consultoría?", an = () => "Bieten Sie Beratungsdienstleistungen an?", on = () => "Offrite servizi di consulenza?", sn = () => "Vocês oferecem serviços de consultoria?", cn = () => "你们提供咨询服务吗？", ln = () => "コンサルティングサービスは提供していますか？", un = () => "컨설팅 서비스를 제공하나요?", dn = () => "Предлагаете ли вы консультационные услуги?", fn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? tn(e) : n === "fr" ? nn(e) : n === "es" ? rn(e) : n === "de" ? an(e) : n === "it" ? on(e) : n === "pt" ? sn(e) : n === "zh" ? cn(e) : n === "ja" ? ln(e) : n === "ko" ? un(e) : dn(e);
}), pn = () => "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.", mn = () => "Oui, notre offre Enterprise inclut des heures de conseil pour les équipes évaluant les solutions i18n. Nous pouvons fournir des recommandations personnalisées basées sur votre cas d'utilisation, votre échelle et vos contraintes spécifiques.", hn = () => "Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso, escala y limitaciones específicas.", gn = () => "Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Umfang und Ihren Einschränkungen geben.", _n = () => "Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano le soluzioni i18n. Possiamo fornire raccomandazioni personalizzate basate sul caso d'uso specifico, sulla scala e sui vincoli.", vn = () => "Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base em seu caso de uso, escala e restrições específicas.", yn = () => "是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和约束提供量身定制的建议。", bn = () => "はい、Enterpriseプランにはi18nソリューションを評価するチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいたカスタマイズされた推奨事項を提供できます。", xn = () => "네, 엔터프라이즈 플랜에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 특정 사례, 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다.", Sn = () => "Да, наш корпоративный план включает консультационные часы для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации, основанные на вашем конкретном случае использования, масштабе и ограничениях.", Cn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? pn(e) : n === "fr" ? mn(e) : n === "es" ? hn(e) : n === "de" ? gn(e) : n === "it" ? _n(e) : n === "pt" ? vn(e) : n === "zh" ? yn(e) : n === "ja" ? bn(e) : n === "ko" ? xn(e) : Sn(e);
}), wn = () => "How can I contribute?", Tn = () => "Comment puis-je contribuer ?", En = () => "¿Cómo puedo contribuir?", Dn = () => "Wie kann ich beitragen?", On = () => "Come posso contribuire?", kn = () => "Como posso contribuir?", An = () => "我该如何贡献？", jn = () => "どのように貢献できますか？", Mn = () => "어떻게 기여할 수 있나요?", Nn = () => "Как я могу помочь ?", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? wn(e) : n === "fr" ? Tn(e) : n === "es" ? En(e) : n === "de" ? Dn(e) : n === "it" ? On(e) : n === "pt" ? kn(e) : n === "zh" ? An(e) : n === "ja" ? jn(e) : n === "ko" ? Mn(e) : Nn(e);
}), Pn = () => "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.", Fn = () => "Il y a de nombreuses façons de contribuer : soumettre des benchmarks, améliorer la documentation, signaler des bugs, suggérer de nouvelles métriques ou parrainer le projet. Visitez notre dépôt GitHub pour plus de détails.", In = () => "Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de bugs, sugerir nuevas métricas o patrocinar el proyecto. Visita nuestro repositorio de GitHub para más detalles.", Ln = () => "Es gibt viele Möglichkeiten, beizutragen: Benchmarks einreichen, die Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.", Rn = () => "Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.", zn = () => "Existem muitas maneiras de contribuir: envie benchmarks, melhore a documentação, relate bugs, sugira novas métricas ou patrocine o projeto. Visite nosso repositório no GitHub para mais detalhes.", Bn = () => "有很多贡献方式：提交基准测试、改进文档、报告 Bug、建议新指标或赞助项目。访问我们的 GitHub 仓库了解更多详情。", Vn = () => "貢献する方法はたくさんあります。ベンチマークの提出、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。", Hn = () => "기여하는 방법은 다양합니다: 벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 또는 프로젝트 후원. 자세한 내용은 GitHub 저장소를 방문하세요.", Un = () => "Есть много способов внести свой вклад: отправить бенчмарки, улучшить документацию, сообщить о багах, предложить новые метрики или спонсировать проект. Посетите наш репозиторий GitHub для более подробной информации.", Wn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Pn(e) : n === "fr" ? Fn(e) : n === "es" ? In(e) : n === "de" ? Ln(e) : n === "it" ? Rn(e) : n === "pt" ? zn(e) : n === "zh" ? Bn(e) : n === "ja" ? Vn(e) : n === "ko" ? Hn(e) : Un(e);
});
function Gn() {
	return i("div", {
		className: "mx-auto max-w-3xl space-y-4",
		children: [
			{
				q: R(),
				a: Y()
			},
			{
				q: le(),
				a: be()
			},
			{
				q: je(),
				a: He()
			},
			{
				q: $e(),
				a: ut()
			},
			{
				q: xt(),
				a: Mt()
			},
			{
				q: Ut(),
				a: en()
			},
			{
				q: fn(),
				a: Cn()
			},
			{
				q: $(),
				a: Wn()
			}
		].map((e) => a("details", {
			className: "group rounded-lg border border-border bg-card",
			children: [i("summary", {
				className: "cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors",
				children: e.q
			}), i("p", {
				className: "px-6 pb-4 text-sm text-muted-foreground",
				children: e.a
			})]
		}, e.q))
	});
}
function Kn() {
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
function qn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Jn({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		qn("AppRoot", c);
	}, [c]), e(() => {
		S(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		Kn();
	}, []), i(r, { children: a });
}
function Yn({ children: e }) {
	return i(Jn, { children: e });
}
function Xn() {
	return i(Yn, { children: i(Gn, {}) });
}
export { Xn as default };
