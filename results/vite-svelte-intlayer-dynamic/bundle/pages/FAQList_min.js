import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, writable as r } from "svelte/store";
var i = {
	de: () => import("./de-DYuZkVn1.js").then((e) => e.default),
	en: () => import("./en-DmFiumxX.js").then((e) => e.default),
	es: () => import("./es-Cq9lUvuA.js").then((e) => e.default),
	fr: () => import("./fr-DoVtJEVt.js").then((e) => e.default),
	it: () => import("./it-CLhQ7tuc.js").then((e) => e.default),
	ja: () => import("./ja-DA2xG582.js").then((e) => e.default),
	ko: () => import("./ko-DnhseZpF.js").then((e) => e.default),
	pt: () => import("./pt-DFrowi4n.js").then((e) => e.default),
	ru: () => import("./ru-BsxTOg0B.js").then((e) => e.default),
	zh: () => import("./zh-Bip0P4oZ.js").then((e) => e.default)
}, a = Symbol("intlayer"), o = () => t(a), s = {
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
}, c = s?.defaultLocale, l = (() => {
	let { subscribe: e, set: t, update: i } = r({ locale: c });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: c })
	};
})(), u = "translation", d = "object", f = "array", p = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => p(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => p(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: f,
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
					type: d,
					key: r
				}]
			}, i = p(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, m = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, h = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (m(e) && m(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : h(e[r], t[r]));
		return n;
	}
	return e;
}, g = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => h(e, t));
}, _ = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, v = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? _ : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: u,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return g(o, e, t);
	}
}, y = _, b = _, x = _, S = _, C = (e) => _, w = _, T = (e, t = !0) => [
	v(e ?? s.defaultLocale, t ? s.defaultLocale : void 0),
	y,
	b,
	x,
	C(e ?? s.defaultLocale),
	w,
	S
], E = (e, t, n = []) => p(e, {
	...t,
	plugins: n
}), D = (e, t, n = T(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return E(e.content, r, n);
};
function O(t, n) {
	let r = e.prop(n, "Renderer", 8, void 0), i = e.prop(n, "rendererProps", 24, () => ({})), a = e.prop(n, "value", 8, void 0);
	var o = e.comment(), s = e.first_child(o), c = (t) => {
		var n = e.comment(), o = e.first_child(n);
		e.element(o, r, !1, (t, n) => {
			e.attribute_effect(t, () => ({ ...i() }));
			var r = e.text();
			e.template_effect(() => e.set_text(r, a())), e.append(n, r);
		}), e.append(t, n);
	}, l = (t) => {
		r()(t, e.spread_props(i, {
			children: (t, n) => {
				e.next();
				var r = e.text();
				e.template_effect(() => e.set_text(r, a())), e.append(t, r);
			},
			$$slots: { default: !0 }
		}));
	}, u = (t) => {
		var n = e.text();
		e.template_effect(() => e.set_text(n, a())), e.append(t, n);
	};
	e.if(s, (e) => {
		typeof r() == "string" ? e(c) : typeof r() == "function" ? e(l, 1) : e(u, -1);
	}), e.append(t, o);
}
var k = (e) => {
	let t = !!O.prototype?.$destroy, n;
	return n = t ? class extends O {
		constructor(t) {
			super({
				...t,
				props: {
					...t.props,
					Renderer: e.component,
					rendererProps: e.props,
					value: e.value
				}
			});
		}
	} : (t) => O(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "toString", {
		value: () => e.value?.toString() ?? "",
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), n;
}, A = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => k({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, j = A, M = _, N = _, P = _, F = /* @__PURE__ */ new Map(), I = (e, t = !0) => {
	let n = `${e ?? s.defaultLocale}_${t}`;
	if (F.has(n)) return F.get(n);
	let r = [
		v(e ?? s.defaultLocale, t ? s.defaultLocale : void 0),
		y,
		b,
		C(e ?? s.defaultLocale),
		w,
		S,
		A,
		j,
		M,
		N,
		P
	];
	return F.set(n, r), r;
}, L = (e, t) => D(e, t, I(t)), R = new Proxy(() => {}, {
	get: (e, t) => {
		if (t === Symbol.toPrimitive) return () => void 0;
		if (t === "toString") return () => "";
		if (t !== "then") return R;
	},
	apply: () => R
});
function z(e, t, r) {
	let i = o();
	return n(n(l, (e) => r ?? i?.locale ?? e.locale), (t, n) => {
		n(new Proxy({
			isLoading: !0,
			error: null
		}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : R }));
		let r = !1;
		return (async () => {
			try {
				let i = e[t];
				if (!i) return;
				let a = await i();
				if (r) return;
				n({
					...L(a, t),
					isLoading: !1,
					error: null
				});
			} catch (e) {
				if (r) return;
				console.error(e), n({
					isLoading: !1,
					error: e
				});
			}
		})(), () => {
			r = !0;
		};
	}, new Proxy({
		isLoading: !0,
		error: null
	}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : R }));
}
var B = e.from_html("<details class=\"group rounded-lg border border-border bg-card\"><summary class=\"cursor-pointer px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/50\"> </summary> <p class=\"px-6 pb-4 text-sm text-muted-foreground\"> </p></details>"), V = e.from_html("<div class=\"mx-auto max-w-3xl space-y-4\"></div>");
function H(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(s, "$content", a), [a, o] = e.setup_stores(), s = z(i, "faq-list");
	e.init();
	var c = V();
	e.each(c, 5, () => r().faqs, e.index, (t, n) => {
		var r = B(), i = e.child(r), a = e.child(i, !0);
		e.reset(i);
		var o = e.sibling(i, 2), s = e.child(o, !0);
		e.reset(o), e.reset(r), e.template_effect(() => {
			e.set_text(a, e.get(n).q), e.set_text(s, e.get(n).a);
		}), e.append(t, r);
	}), e.reset(c), e.append(t, c), e.pop(), o();
}
export { H as default };
var e = {
	key: "faq-list",
	content: { faqs: [
		{
			q: "Was ist i18n Benchmark?",
			a: "i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht."
		},
		{
			q: "Wie werden die Benchmarks durchgeführt?",
			a: "Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrmals wiederholt, um die statistische Signifikanz sicherzustellen. Alle Testkonfigurationen sind in unserem GitHub-Repository öffentlich verfügbar."
		},
		{
			q: "Welche Bibliotheken werden derzeit unterstützt?",
			a: "Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee."
		},
		{
			q: "Kann ich meine eigenen Benchmarks einreichen?",
			a: "Ja! Einreichungen von Benchmarks aus der Community sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird qualifizierte Einreichungen prüfen und zusammenführen."
		},
		{
			q: "Wie oft werden die Benchmarks aktualisiert?",
			a: "Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut durch. Veröffentlichungen von Hauptversionen lösen einen sofortigen Re-Benchmark-Zyklus aus."
		},
		{
			q: "Sind die Daten zuverlässig?",
			a: "Wir folgen einer strengen statistischen Methodik, einschließlich Aufwärmläufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht."
		},
		{
			q: "Bieten Sie Beratungsdienstleistungen an?",
			a: "Ja, unser Enterprise-Plan beinhaltet Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Umfang und Ihren Einschränkungen geben."
		},
		{
			q: "Wie kann ich beitragen?",
			a: "Es gibt viele Möglichkeiten, beizutragen: Benchmarks einreichen, die Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details."
		}
	] }
};
export { e as default };
var e = {
	key: "faq-list",
	content: { faqs: [
		{
			q: "What is i18n Benchmark?",
			a: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications."
		},
		{
			q: "How are benchmarks conducted?",
			a: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository."
		},
		{
			q: "Which libraries are currently supported?",
			a: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee."
		},
		{
			q: "Can I submit my own benchmarks?",
			a: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions."
		},
		{
			q: "How often are benchmarks updated?",
			a: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle."
		},
		{
			q: "Is the data reliable?",
			a: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency."
		},
		{
			q: "Do you offer consulting services?",
			a: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints."
		},
		{
			q: "How can I contribute?",
			a: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
		}
	] }
};
export { e as default };
var e = {
	key: "faq-list",
	content: { faqs: [
		{
			q: "¿Qué es i18n Benchmark?",
			a: "i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React."
		},
		{
			q: "¿Cómo se realizan los benchmarks?",
			a: "Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para garantizar la significancia estadística. Todas las configuraciones de prueba están disponibles públicamente en nuestro repositorio de GitHub."
		},
		{
			q: "¿Qué bibliotecas son compatibles actualmente?",
			a: "Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee."
		},
		{
			q: "¿Puedo enviar mis propios benchmarks?",
			a: "¡Sí! Las presentaciones de benchmarks de la comunidad son bienvenidas. Bifurca nuestro repositorio, agrega tu benchmark siguiendo nuestra guía de contribución y envía una solicitud de extracción. Nuestro equipo revisará y fusionará las presentaciones que califiquen."
		},
		{
			q: "¿Con qué frecuencia se actualizaron los benchmarks?",
			a: "Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato."
		},
		{
			q: "¿Son confiables los datos?",
			a: "Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia."
		},
		{
			q: "¿Ofrecen servicios de consultoría?",
			a: "Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones."
		},
		{
			q: "¿Cómo puedo contribuir?",
			a: "Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar errores, sugerir nuevas métricas o patrocinar el proyecto. Visita nuestro repositorio de GitHub para más detalles."
		}
	] }
};
export { e as default };
var e = {
	key: "faq-list",
	content: { faqs: [
		{
			q: "Qu'est-ce qu'i18n Benchmark ?",
			a: "Une suite open source qui mesure et compare performance, taille de bundle et expérience développeur des bibliothèques i18n pour JavaScript et React."
		},
		{
			q: "Comment sont menés les benchmarks ?",
			a: "Tests standardisés sur matériel cohomogène, répétés pour la significativité statistique. Les configs sont publiques sur GitHub."
		},
		{
			q: "Quelles bibliothèques sont prises en charge ?",
			a: "react-i18next, react-intl, Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee, etc."
		},
		{
			q: "Puis-je proposer des benchmarks ?",
			a: "Oui — forkez le dépôt, suivez le guide de contribution et ouvrez une pull request."
		},
		{
			q: "À quelle fréquence sont-ils mis à jour ?",
			a: "Chaque semaine sur les dernières versions stables ; une release majeure relance immédiatement les mesures."
		},
		{
			q: "Les données sont-elles fiables ?",
			a: "Méthodologie statistique stricte, échauffement, détection d'anomalies, intervalles de confiance — données brutes publiées."
		},
		{
			q: "Proposez-vous du conseil ?",
			a: "Oui, le plan Enterprise inclut des heures pour aider les équipes à choisir une solution i18n."
		},
		{
			q: "Comment contribuer ?",
			a: "Benchmarks, documentation, bugs, nouvelles métriques ou sponsorship — voir GitHub."
		}
	] }
};
export { e as default };
var e = {
	key: "faq-list",
	content: { faqs: [
		{
			q: "Cos'è i18n Benchmark?",
			a: "i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza dello sviluppatore delle librerie di internazionalizzazione per applicazioni JavaScript e React."
		},
		{
			q: "Come vengono condotti i benchmark?",
			a: "Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni di test sono disponibili pubblicamente nel nostro repository GitHub."
		},
		{
			q: "Quali librerie sono attualmente supportate?",
			a: "Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee."
		},
		{
			q: "Posso inviare i miei benchmark?",
			a: "Sì! I contributi della community ai benchmark sono benvenuti. Esegui il fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà i contributi idonei."
		},
		{
			q: "Ogni quanto vengono aggiornati i benchmark?",
			a: "Rieseguiamo tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ciascuna libreria. I rilasci di versioni principali innescano un ciclo di re-benchmark immediato."
		},
		{
			q: "I dati sono affidabili?",
			a: "Seguiamo una rigorosa metodologia statistica che include warm-up run, rilevamento di outlier e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per la massima trasparenza."
		},
		{
			q: "Offrite servizi di consulenza?",
			a: "Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano le soluzioni i18n. Possiamo fornire raccomandazioni personalizzate basate sul tuo caso d'uso specifico, sulla scala e sui vincoli."
		},
		{
			q: "Come posso contribuire?",
			a: "Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per ulteriori dettagli."
		}
	] }
};
export { e as default };
var e = {
	key: "faq-list",
	content: { faqs: [
		{
			q: "i18n ベンチマークとは何ですか？",
			a: "i18n ベンチマークは、JavaScript および React アプリケーション向けの国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者エクスペリエンスを測定および比較するオープンソースのベンチマークスイートです。"
		},
		{
			q: "ベンチマークはどのように行われますか？",
			a: "一貫したハードウェアを使用して、隔離された環境で標準化されたテストを実行します。統計的な有意性を確保するために、各ベンチマークは複数回繰り返されます。すべてのテスト構成は、GitHub リポジトリで公開されています。"
		},
		{
			q: "現在どのライブラリがサポートされていますか？",
			a: "react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、および Tolgee をサポートしています。"
		},
		{
			q: "独自のベンチマークを送信できますか？",
			a: "はい！コミュニティからのベンチマークの送信を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。私たちのチームが適格な送信をレビューし、マージします。"
		},
		{
			q: "ベンチマークはどのくらいの頻度で更新されますか？",
			a: "各ライブラリの最新の安定バージョンに対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリースにより、即座に再ベンチマークサイクルが開始されます。"
		},
		{
			q: "データは信頼できますか？",
			a: "ウォームアップ実行、外れ値検出、信頼区間など、厳格な統計手法に従っています。完全な透明性を確保するために、すべての生データが分析結果とともに公開されています。"
		},
		{
			q: "コンサルティングサービスは提供していますか？",
			a: "はい、エンタープライズプランには、i18n ソリューションを評価するチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、および制約に基づいて、カスタマイズされた推奨事項を提供できます。"
		},
		{
			q: "どのように貢献できますか？",
			a: "貢献する方法はたくさんあります。ベンチマークの送信、ドキュメントの改善、バグの報告、新しいメトリクスの提案、プロジェクトへのスポンサーなどです。詳細については、GitHub リポジトリをご覧ください。"
		}
	] }
};
export { e as default };
var e = {
	key: "faq-list",
	content: { faqs: [
		{
			q: "i18n 벤치마크란 무엇인가요?",
			a: "i18n 벤치마크는 JavaScript 및 React 애플리케이션용 국제화 라이브러리의 성능, 번들 크기 및 개발자 경험을 측정하고 비교하는 오픈 소스 벤치마킹 제품군입니다."
		},
		{
			q: "벤치마크는 어떻게 진행되나요?",
			a: "일관된 하드웨어를 사용하여 격리된 환경에서 표준화된 테스트를 실행합니다. 각 벤치마크는 통계적 유의성을 보장하기 위해 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 리포지토리에 공개적으로 게시되어 있습니다."
		},
		{
			q: "현재 어떤 라이브러리가 지원되나요?",
			a: "react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 및 Tolgee를 지원합니다."
		},
		{
			q: "나만의 벤치마크를 제출할 수 있나요?",
			a: "예! 커뮤니티 벤치마크 제출을 환영합니다. 리포지토리를 포크하고 기여 가이드에 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출하세요. 저희 팀이 자격이 되는 제출물을 검토하고 병합할 것입니다."
		},
		{
			q: "벤치마크는 얼마나 자주 업데이트되나요?",
			a: "매주 각 라이브러리의 최신 안정 버전을 기준으로 모든 벤치마크를 다시 실행합니다. 메이저 버전이 릴리스되면 즉시 재벤치마크 주기가 시작됩니다."
		},
		{
			q: "데이터가 신뢰할 수 있나요?",
			a: "웜업 실행, 이상값 감지, 신뢰 구간 등 엄격한 통계 방법론을 따릅니다. 완전한 투명성을 위해 모든 원시 데이터가 분석 결과와 함께 공개됩니다."
		},
		{
			q: "컨설팅 서비스를 제공하나요?",
			a: "예, 엔터프라이즈 플랜에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 특정 사용 사례, 규모 및 제약 조건에 따라 맞춤형 권장 사항을 제공할 수 있습니다."
		},
		{
			q: "어떻게 기여할 수 있나요?",
			a: "기여할 수 있는 방법은 많습니다. 벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 또는 프로젝트 후원 등이 있습니다. 자세한 내용은 GitHub 리포지토리를 방문하세요."
		}
	] }
};
export { e as default };
var e = {
	key: "faq-list",
	content: { faqs: [
		{
			q: "O que é o i18n Benchmark?",
			a: "O i18n Benchmark é um conjunto de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor de bibliotecas de internacionalização para aplicativos JavaScript e React."
		},
		{
			q: "Como os benchmarks são conduzidos?",
			a: "Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório no GitHub."
		},
		{
			q: "Quais bibliotecas são suportadas atualmente?",
			a: "Oferecemos suporte para react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee."
		},
		{
			q: "Posso enviar meus próprios benchmarks?",
			a: "Sim! Envios de benchmarks da comunidade são bem-vindos. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará os envios qualificados."
		},
		{
			q: "Com que frequência os benchmarks são atualizados?",
			a: "Reexecutamos todos os benchmarks semanalmente com as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo imediato de novo benchmark."
		},
		{
			q: "Os dados são confiáveis?",
			a: "Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de outliers e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência."
		},
		{
			q: "Você oferece serviços de consultoria?",
			a: "Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base em seu caso de uso, escala e restrições específicas."
		},
		{
			q: "Como posso contribuir?",
			a: "Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório no GitHub para mais detalhes."
		}
	] }
};
export { e as default };
var e = {
	key: "faq-list",
	content: { faqs: [
		{
			q: "Что такое i18n Benchmark?",
			a: "i18n Benchmark — это пакет тестов с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработки библиотек интернационализации для приложений на JavaScript и React."
		},
		{
			q: "Как проводятся бенчмарки?",
			a: "Мы проводим стандартизированные тесты в изолированных средах с использованием одинакового оборудования. Каждый тест повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории на GitHub."
		},
		{
			q: "Какие библиотеки поддерживаются в данный момент?",
			a: "Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee."
		},
		{
			q: "Могу ли я отправить свои собственные бенчмарки?",
			a: "Да! Мы приветствуем отправку бенчмарков от сообщества. Сделайте форк нашего репозитория, добавьте свой тест, следуя нашему руководству для участников, и отправьте pull request. Наша команда рассмотрит и примет подходящие варианты."
		},
		{
			q: "Как часто обновляются бенчмарки?",
			a: "Мы еженедельно перезапускаем все тесты на последних стабильных версиях каждой библиотеки. Выход мажорных версий вызывает немедленный цикл повторного тестирования."
		},
		{
			q: "Надежны ли данные?",
			a: "Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с нашим анализом для полной прозрачности."
		},
		{
			q: "Вы предоставляете консультационные услуги?",
			a: "Да, наш план Enterprise включает консультационные часы для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации, основанные на вашем конкретном сценарии использования, масштабе и ограничениях."
		},
		{
			q: "Как я могу внести свой вклад?",
			a: "Есть много способов внести свой вклад: отправить бенчмарки, улучшить документацию, сообщить о багах, предложить новые метрики или спонсировать проект. Посетите наш репозиторий на GitHub для получения более подробной информации."
		}
	] }
};
export { e as default };
var e = {
	key: "faq-list",
	content: { faqs: [
		{
			q: "什么是 i18n 基准测试？",
			a: "i18n 基准测试是一个开源基准测试套件，用于测量和比较 JavaScript 和 React 应用程序国际化库的性能、捆绑包大小和开发人员体验。"
		},
		{
			q: "如何进行基准测试？",
			a: "我们在隔离的环境中使用一致的硬件运行标准化测试。每个基准测试都会重复多次，以确保统计意义。所有测试配置都可以在我们的 GitHub 仓库中公开获得。"
		},
		{
			q: "目前支持哪些库？",
			a: "我们支持 react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react 和 Tolgee。"
		},
		{
			q: "我可以提交自己的基准测试吗？",
			a: "是的！欢迎社区提交基准测试。分叉我们的仓库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审查并合并合格的提交。"
		},
		{
			q: "基准测试多久更新一次？",
			a: "我们每周会针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会立即触发重新基准测试周期。"
		},
		{
			q: "数据可靠吗？",
			a: "我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。"
		},
		{
			q: "你们提供咨询服务吗？",
			a: "是的，我们的企业计划为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的特定用例、规模和约束提供量身定制的建议。"
		},
		{
			q: "我该如何贡献？",
			a: "有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 仓库了解更多详情。"
		}
	] }
};
export { e as default };
