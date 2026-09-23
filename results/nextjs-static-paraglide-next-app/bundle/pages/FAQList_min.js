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
], d = [], f = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	let e = u;
	!f && typeof window < "u" && window.location?.href && (e = F(window.location.href));
	let t = g(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, v(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function g(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = k();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (L(t) && I.has(t)) {
			let e = I.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return b(t);
			}
		}
		let e = y(n);
		if (e) return e;
	}
}
var _ = (e) => {
	e ? window.location.href = e : window.location.reload();
}, v = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = h();
	} catch {}
	let i = [], a = u;
	!f && typeof window < "u" && window.location?.href && (a = F(window.location.href));
	for (let t of a) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (f || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, D();
	} else if (t === "baseLocale") continue;
	else if (L(t) && I.has(t)) {
		let n = I.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!f && n.reload && window.location && e !== r && _(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, te = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function b(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function x(e) {
	return e;
}
function S(e, t) {
	return e.exec(t.href);
}
var C = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), w = RegExp(`(?:^|;\\s*)${C}=([^;]*)`), T = Symbol(), E = T;
function D() {
	E = T;
}
function O() {
	typeof queueMicrotask == "function" ? queueMicrotask(D) : Promise.resolve().then(D);
}
function k() {
	if (typeof document > "u") return;
	if (E !== T) return E;
	let e = document.cookie.match(w)?.[1];
	return E = y(e), O(), E;
}
function A(e) {
	return j(e);
}
function j(e) {
	let t = x(typeof e == "string" ? new URL(e, te()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && y(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), x(t);
}
var M, N;
function P(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (M === t) return N;
	let n = x(new URL(t, "http://example.com")), r = A(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of d) if (S(new s(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return M = t, N = a, a;
}
function F(e) {
	let t = P(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var I = /* @__PURE__ */ new Map();
function L(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var R = () => "Can I submit my own benchmarks?", z = () => "Puis-je soumettre mes propres benchmarks ?", B = () => "¿Puedo enviar mis propios benchmarks?", V = () => "Kann ich meine eigenen Benchmarks einreichen?", H = () => "Posso inviare i miei benchmark?", U = () => "Posso enviar meus próprios benchmarks?", W = () => "我可以提交自己的基准测试吗？", G = () => "自分のベンチマークを提出できますか？", K = () => "저만의 벤치마크를 제출할 수 있나요?", q = () => "Могу ли я отправить свои собственные бенчмарки?", J = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? z(e) : n === "es" ? B(e) : n === "de" ? V(e) : n === "it" ? H(e) : n === "pt" ? U(e) : n === "zh" ? W(e) : n === "ja" ? G(e) : n === "ko" ? K(e) : n === "ru" ? q(e) : R(e);
}), Y = () => "Do you offer consulting services?", X = () => "Offrez-vous des services de conseil ?", Z = () => "¿Ofrecen servicios de consultoría?", Q = () => "Bieten Sie Beratungsdienstleistungen an?", ne = () => "Offrite servizi di consulenza?", re = () => "Vocês oferecem serviços de consultoria?", ie = () => "你们提供咨询服务吗？", ae = () => "コンサルティングサービスは提供していますか？", oe = () => "컨설팅 서비스를 제공하나요?", se = () => "Предлагаете ли вы консультационные услуги?", ce = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? X(e) : n === "es" ? Z(e) : n === "de" ? Q(e) : n === "it" ? ne(e) : n === "pt" ? re(e) : n === "zh" ? ie(e) : n === "ja" ? ae(e) : n === "ko" ? oe(e) : n === "ru" ? se(e) : Y(e);
}), le = () => "How are benchmarks conducted?", ue = () => "Comment les benchmarks sont-ils menés ?", de = () => "¿Cómo se realizan los benchmarks?", fe = () => "Wie werden die Benchmarks durchgeführt?", pe = () => "Come vengono condotti i benchmark?", me = () => "Como os benchmarks são conduzidos?", he = () => "如何进行基准测试？", ge = () => "ベンチマークはどのように行われますか？", _e = () => "벤치마크는 어떻게 진행되나요?", ve = () => "Как проводятся бенчмарки?", ye = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? ue(e) : n === "es" ? de(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : n === "ru" ? ve(e) : le(e);
}), be = () => "How can I contribute?", xe = () => "Comment puis-je contribuer ?", Se = () => "¿Cómo puedo contribuir?", Ce = () => "Wie kann ich beitragen?", we = () => "Come posso contribuire?", Te = () => "Como posso contribuir?", Ee = () => "我该如何贡献？", De = () => "どのように貢献できますか？", Oe = () => "어떻게 기여할 수 있나요?", ke = () => "Как я могу помочь ?", Ae = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? xe(e) : n === "es" ? Se(e) : n === "de" ? Ce(e) : n === "it" ? we(e) : n === "pt" ? Te(e) : n === "zh" ? Ee(e) : n === "ja" ? De(e) : n === "ko" ? Oe(e) : n === "ru" ? ke(e) : be(e);
}), je = () => "How often are benchmarks updated?", Me = () => "À quelle fréquence les benchmarks sont-ils mis à jour ?", Ne = () => "¿Con qué frecuencia se funcionan los benchmarks?", Pe = () => "Wie oft werden die Benchmarks aktualisiert?", Fe = () => "Con quale frequenza vengono aggiornati i benchmark?", Ie = () => "Com que frequência os benchmarks são atualizados?", Le = () => "基准测试多久更新一次？", Re = () => "ベンチマークはどのくらいの頻度で更新されますか？", ze = () => "벤치마크는 얼마나 자주 업데이트되나요?", Be = () => "Как часто обновляются бенчмарки?", Ve = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Me(e) : n === "es" ? Ne(e) : n === "de" ? Pe(e) : n === "it" ? Fe(e) : n === "pt" ? Ie(e) : n === "zh" ? Le(e) : n === "ja" ? Re(e) : n === "ko" ? ze(e) : n === "ru" ? Be(e) : je(e);
}), He = () => "Is the data reliable?", Ue = () => "Les données sont-elles fiables ?", We = () => "¿Son fiables los datos?", Ge = () => "Sind die Daten zuverlässig?", Ke = () => "I dati sono affidabili?", qe = () => "Os dados são confiáveis?", Je = () => "数据可靠吗？", Ye = () => "データは信頼できますか？", Xe = () => "데이터는 신뢰할 수 있나요?", Ze = () => "Надежны ли данные?", Qe = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ue(e) : n === "es" ? We(e) : n === "de" ? Ge(e) : n === "it" ? Ke(e) : n === "pt" ? qe(e) : n === "zh" ? Je(e) : n === "ja" ? Ye(e) : n === "ko" ? Xe(e) : n === "ru" ? Ze(e) : He(e);
}), $e = () => "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.", et = () => "Il y a de nombreuses façons de contribuer : soumettre des benchmarks, améliorer la documentation, signaler des bugs, suggérer de nouvelles métriques ou parrainer le projet. Visitez notre dépôt GitHub pour plus de détails.", tt = () => "Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de bugs, sugerir nuevas métricas o patrocinar el proyecto. Visita nuestro repositorio de GitHub para más detalles.", nt = () => "Es gibt viele Möglichkeiten, beizutragen: Benchmarks einreichen, die Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.", rt = () => "Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.", it = () => "Existem muitas maneiras de contribuir: envie benchmarks, melhore a documentação, relate bugs, sugira novas métricas ou patrocine o projeto. Visite nosso repositório no GitHub para mais detalhes.", at = () => "有很多贡献方式：提交基准测试、改进文档、报告 Bug、建议新指标或赞助项目。访问我们的 GitHub 仓库了解更多详情。", ot = () => "貢献する方法はたくさんあります。ベンチマークの提出、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。", st = () => "기여하는 방법은 다양합니다: 벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 또는 프로젝트 후원. 자세한 내용은 GitHub 저장소를 방문하세요.", ct = () => "Есть много способов внести свой вклад: отправить бенчмарки, улучшить документацию, сообщить о багах, предложить новые метрики или спонсировать проект. Посетите наш репозиторий GitHub для более подробной информации.", lt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? et(e) : n === "es" ? tt(e) : n === "de" ? nt(e) : n === "it" ? rt(e) : n === "pt" ? it(e) : n === "zh" ? at(e) : n === "ja" ? ot(e) : n === "ko" ? st(e) : n === "ru" ? ct(e) : $e(e);
}), ut = () => "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.", dt = () => "Nous suivons une méthodologie statistique rigoureuse, incluant des phases de préchauffage, la détection des valeurs aberrantes et des intervalles de confiance. Toutes les données brutes sont publiées avec notre analyse pour une transparence totale.", ft = () => "Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.", pt = () => "Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Phasen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.", mt = () => "Seguiamo una rigorosa metodologia statistica che include corse di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per una completa trasparenza.", ht = () => "Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de outliers e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.", gt = () => "我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都会随我们的分析一起发布，以确保完全透明。", _t = () => "ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。すべての生データは、完全な透明性を確保するために分析結果とともに公開されます。", vt = () => "웜업 실행, 이상치 감지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 모든 원시 데이터는 완전한 투명성을 위해 분석 결과와 함께 게시됩니다.", yt = () => "Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с нашим анализом для полной прозрачности.", bt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? dt(e) : n === "es" ? ft(e) : n === "de" ? pt(e) : n === "it" ? mt(e) : n === "pt" ? ht(e) : n === "zh" ? gt(e) : n === "ja" ? _t(e) : n === "ko" ? vt(e) : n === "ru" ? yt(e) : ut(e);
}), xt = () => "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.", St = () => "Nous relançons tous les benchmarks chaque semaine avec les dernières versions stables de chaque bibliothèque. Les sorties de versions majeures déclenchent un cycle de re-benchmarking immédiat.", Ct = () => "Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.", wt = () => "Wir führen alle Benchmarks wöchentlich gegen die neuesten stabilen Versionen jeder Bibliothek neu aus. Major-Releases lösen einen sofortigen Re-Benchmark-Zyklus aus.", Tt = () => "Eseguiamo nuovamente tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. Le versioni principali in uscita attivano un immediato ciclo di re-benchmark.", Et = () => "Executamos novamente todos os benchmarks semanalmente com as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo imediato de re-benchmark.", Dt = () => "我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本更新将立即触发重新测试周期。", Ot = () => "各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。", kt = () => "매주 각 라이브러리의 최신 안정 버전에 대해 모든 벤치마크를 다시 실행합니다. 주요 버전이 릴리스되면 즉시 재벤치마크 주기가 시작됩니다.", At = () => "Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий вызывает немедленный цикл повторного тестирования.", jt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? St(e) : n === "es" ? Ct(e) : n === "de" ? wt(e) : n === "it" ? Tt(e) : n === "pt" ? Et(e) : n === "zh" ? Dt(e) : n === "ja" ? Ot(e) : n === "ko" ? kt(e) : n === "ru" ? At(e) : xt(e);
}), Mt = () => "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.", Nt = () => "Nous effectuons des tests standardisés dans des environnements isolés en utilisant un matériel cohérent. Chaque benchmark est répété plusieurs fois pour garantir une signification statistique. Toutes les configurations de test sont disponibles publiquement dans notre dépôt GitHub.", Pt = () => "Realizamos pruebas estandarizadas en entornos aislados utilizando un hardware consistente. Cada benchmark se repite varias veces para garantizar la significancia estadística. Todas las configuraciones de prueba están disponibles públicamente en nuestro repositorio de GitHub.", Ft = () => "Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrfach wiederholt, um statistische Signifikanz zu gewährleisten. Alle Testkonfigurationen sind in unserem GitHub-Repository öffentlich zugänglich.", It = () => "Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni di test sono disponibili pubblicamente nel nostro repository GitHub.", Lt = () => "Executamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório no GitHub.", Rt = () => "我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都会重复多次，以确保统计显著性。所有测试配置都可以在我们的 GitHub 仓库中公开访问。", zt = () => "一貫したハードウェアを使用し、隔離された環境で標準化されたテストを実行します。各ベンチマークは、統計的な有意性を確保するために複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。", Bt = () => "일관된 하드웨어를 사용하는 격리된 환경에서 표준화된 테스트를 실행합니다. 각 벤치마크는 통계적 유의성을 확보하기 위해 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 저장소에 공개되어 있습니다.", Vt = () => "Мы проводим стандартизированные тесты в изолированных средах с использованием единообразного оборудования. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов открыты в нашем репозитории GitHub.", Ht = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Nt(e) : n === "es" ? Pt(e) : n === "de" ? Ft(e) : n === "it" ? It(e) : n === "pt" ? Lt(e) : n === "zh" ? Rt(e) : n === "ja" ? zt(e) : n === "ko" ? Bt(e) : n === "ru" ? Vt(e) : Mt(e);
}), Ut = () => "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.", Wt = () => "Nous supportons react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react et Tolgee.", Gt = () => "Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.", Kt = () => "Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.", qt = () => "Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.", Jt = () => "Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.", Yt = () => "我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。", Xt = () => "react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。", Zt = () => "react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee를 지원합니다.", Qt = () => "Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.", $t = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Wt(e) : n === "es" ? Gt(e) : n === "de" ? Kt(e) : n === "it" ? qt(e) : n === "pt" ? Jt(e) : n === "zh" ? Yt(e) : n === "ja" ? Xt(e) : n === "ko" ? Zt(e) : n === "ru" ? Qt(e) : Ut(e);
}), en = () => "What is i18n Benchmark?", tn = () => "Qu'est-ce qu'i18n Benchmark ?", nn = () => "¿Qué es i18n Benchmark?", rn = () => "Was ist i18n Benchmark?", an = () => "Cos'è i18n Benchmark?", on = () => "O que é o i18n Benchmark?", sn = () => "什么是 i18n Benchmark？", cn = () => "i18n Benchmarkとは何ですか？", ln = () => "i18n Benchmark란 무엇인가요?", un = () => "Что такое i18n Benchmark?", dn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? tn(e) : n === "es" ? nn(e) : n === "de" ? rn(e) : n === "it" ? an(e) : n === "pt" ? on(e) : n === "zh" ? sn(e) : n === "ja" ? cn(e) : n === "ko" ? ln(e) : n === "ru" ? un(e) : en(e);
}), fn = () => "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.", pn = () => "i18n Benchmark est une suite de tests open source qui mesure et compare les performances, la taille du bundle et l'expérience développeur des bibliothèques d'internationalisation pour les applications JavaScript et React.", mn = () => "i18n Benchmark es una suite de pruebas de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.", hn = () => "i18n Benchmark ist eine Open-Source-Benchmarking-Suite, welche die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungs-Bibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.", gn = () => "i18n Benchmark è una suite di test open source che misura e confronta le prestazioni, la dimensione del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.", _n = () => "O i18n Benchmark é uma suíte de testes de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor de bibliotecas de internacionalização para aplicativos JavaScript e React.", vn = () => "i18n Benchmark 是一个开源基准测试套件，用于测量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。", yn = () => "i18n Benchmarkは、JavaScriptおよびReactアプリケーション向けの国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者エクスペリエンスを測定および比較するオープンソースのベンチマークスイートです。", bn = () => "i18n Benchmark는 JavaScript 및 React 애플리케이션용 국제화 라이브러리의 성능, 번들 크기 및 개발자 경험을 측정하고 비교하는 오픈 소스 벤치마킹 제품군입니다.", xn = () => "i18n Benchmark — это набор тестов с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчика библиотек интернационализации для приложений JavaScript и React.", Sn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? pn(e) : n === "es" ? mn(e) : n === "de" ? hn(e) : n === "it" ? gn(e) : n === "pt" ? _n(e) : n === "zh" ? vn(e) : n === "ja" ? yn(e) : n === "ko" ? bn(e) : n === "ru" ? xn(e) : fn(e);
}), Cn = () => "Which libraries are currently supported?", wn = () => "Quelles bibliothèques sont actuellement supportées ?", Tn = () => "¿Qué bibliotecas son compatibles actualmente?", En = () => "Welche Bibliotheken werden derzeit unterstützt?", Dn = () => "Quali librerie sono attualmente supportate?", On = () => "Quais bibliotecas são suportadas atualmente?", kn = () => "目前支持哪些库？", An = () => "現在サポートされているライブラリは何ですか？", jn = () => "현재 어떤 라이브러리가 지원되나요?", Mn = () => "Какие библиотеки поддерживаются в настоящее время?", Nn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? wn(e) : n === "es" ? Tn(e) : n === "de" ? En(e) : n === "it" ? Dn(e) : n === "pt" ? On(e) : n === "zh" ? kn(e) : n === "ja" ? An(e) : n === "ko" ? jn(e) : n === "ru" ? Mn(e) : Cn(e);
}), Pn = () => "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.", Fn = () => "Oui ! Les soumissions de benchmarks par la communauté sont les bienvenues. Forkez notre dépôt, ajoutez votre benchmark en suivant notre guide de contribution et soumettez une pull request. Notre équipe examinera et fusionnera les soumissions qualifiées.", In = () => "¡Sí! Las presentaciones de benchmarks de la comunidad son bienvenidas. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía un pull request. Nuestro equipo revisará y combinará las presentaciones que califiquen.", Ln = () => "Ja! Einreichungen von Benchmarks durch die Community sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird qualifizierte Einreichungen prüfen und zusammenführen.", Rn = () => "Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.", zn = () => "Sim! Submissões de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.", Bn = () => "是的！欢迎社区提交基准测试。Fork 我们的仓库，按照我们的贡献指南添加您的基准测试，并提交 Pull Request。我们的团队将审查并合并合格的提交。", $ = () => "はい！コミュニティからのベンチマークの提出を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。私たちのチームが内容を確認し、適格なものをマージします。", Vn = () => "네! 커뮤니티의 벤치마크 제출을 환영합니다. 저장소를 포크하고 기여 가이드에 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출하세요. 저희 팀이 검토 후 마지(merge)할 것입니다.", Hn = () => "Да! Мы приветствуем отправку бенчмарков от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя нашему руководству по внесению вклада, и отправьте пулл-реквест. Наша команда рассмотрит и примет квалифицированные заявки.", Un = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Fn(e) : n === "es" ? In(e) : n === "de" ? Ln(e) : n === "it" ? Rn(e) : n === "pt" ? zn(e) : n === "zh" ? Bn(e) : n === "ja" ? $(e) : n === "ko" ? Vn(e) : n === "ru" ? Hn(e) : Pn(e);
}), Wn = () => "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.", Gn = () => "Oui, notre offre Enterprise inclut des heures de conseil pour les équipes évaluant les solutions i18n. Nous pouvons fournir des recommandations personnalisées basées sur votre cas d'utilisation, votre échelle et vos contraintes spécifiques.", Kn = () => "Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso, escala y limitaciones específicas.", qn = () => "Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Umfang und Ihren Einschränkungen geben.", Jn = () => "Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano le soluzioni i18n. Possiamo fornire raccomandazioni personalizzate basate sul caso d'uso specifico, sulla scala e sui vincoli.", Yn = () => "Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base em seu caso de uso, escala e restrições específicas.", Xn = () => "是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和约束提供量身定制的建议。", Zn = () => "はい、Enterpriseプランにはi18nソリューションを評価するチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいたカスタマイズされた推奨事項を提供できます。", Qn = () => "네, 엔터프라이즈 플랜에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 특정 사례, 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다.", $n = () => "Да, наш корпоративный план включает консультационные часы для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации, основанные на вашем конкретном случае использования, масштабе и ограничениях.", er = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Gn(e) : n === "es" ? Kn(e) : n === "de" ? qn(e) : n === "it" ? Jn(e) : n === "pt" ? Yn(e) : n === "zh" ? Xn(e) : n === "ja" ? Zn(e) : n === "ko" ? Qn(e) : n === "ru" ? $n(e) : Wn(e);
});
function tr() {
	let e = [
		{
			q: dn(),
			a: Sn()
		},
		{
			q: ye(),
			a: Ht()
		},
		{
			q: Nn(),
			a: $t()
		},
		{
			q: J(),
			a: Un()
		},
		{
			q: Ve(),
			a: jt()
		},
		{
			q: Qe(),
			a: bt()
		},
		{
			q: ce(),
			a: er()
		},
		{
			q: Ae(),
			a: lt()
		}
	];
	return i("div", {
		className: "mx-auto max-w-3xl space-y-4",
		children: e.map((e) => a("details", {
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
function nr() {
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
function rr(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function ir({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		rr("AppRoot", c);
	}, [c]), e(() => {
		v(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		nr();
	}, []), i(r, { children: a });
}
function ar({ children: e }) {
	return i(ir, { children: e });
}
function or() {
	return i(ar, { children: i(tr, {}) });
}
export { or as default };
