import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { jsxDEV as p } from "react/jsx-dev-runtime";
var m = {
	key: "about-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"whyThisExists\":\"Why This Exists\",\"choosingAnI18nLibraryIs\":\"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\",\"methodology\":\"Methodology\",\"theSame10PageApp\":\"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\"},\"fr\":{\"whyThisExists\":\"Pourquoi cela existe\",\"choosingAnI18nLibraryIs\":\"Choisir une bibliothèque i18n est une décision architecturale ayant des conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en termes de performances : quel poids la bibliothèque ajoute-t-elle au bundle ? Comment cela affecte-t-il le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement différé aide-t-il réellement ou déplace-t-il simplement le coût ? Ce benchmark répond à ces questions avec des données réelles.\",\"methodology\":\"Méthodologie\",\"theSame10PageApp\":\"La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les métriques de chargement et utilisons React Profiler pour capturer les temps de rendu lors des changements de langue. Tous les tests sont effectués en CI sur un matériel identique pour garantir des résultats reproductibles.\"},\"es\":{\"whyThisExists\":\"Por qué existe\",\"choosingAnI18nLibraryIs\":\"Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo traslada el coste? Este benchmark responde a estas preguntas con datos reales.\",\"methodology\":\"Metodología\",\"theSame10PageApp\":\"La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en un hardware consistente para garantizar resultados reproducibles.\"},\"de\":{\"whyThisExists\":\"Warum dieses Projekt existiert\",\"choosingAnI18nLibraryIs\":\"Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt sie sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading wirklich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit echten Daten.\",\"methodology\":\"Methodik\",\"theSame10PageApp\":\"Dieselbe 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Gebietsschemawechsel zu erfassen. Alle Tests werden in der CI auf konsistenter Hardware ausgeführt, um reproduzierbare Ergebnisse zu gewährleisten.\"},\"it\":{\"whyThisExists\":\"Perché esiste questo progetto\",\"choosingAnI18nLibraryIs\":\"Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.\",\"methodology\":\"Metodologia\",\"theSame10PageApp\":\"La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.\"},\"pt\":{\"whyThisExists\":\"Por que isso existe\",\"choosingAnI18nLibraryIs\":\"Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências de longo prazo. A maioria das comparações se concentra na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao pacote? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento tardio realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.\",\"methodology\":\"Metodologia\",\"theSame10PageApp\":\"O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), realizamos auditorias do Lighthouse para métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis.\"},\"zh\":{\"whyThisExists\":\"为什么存在这个项目\",\"choosingAnI18nLibraryIs\":\"选择 i18n 库是一个具有长期影响的架构决策。大多数比较都集中在 API 的易用性上，但很少有人衡量性能成本：库为捆绑包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载真的有帮助还是只是转移了成本？本基准测试用真实数据回答了这些问题。\",\"methodology\":\"方法论\",\"theSame10PageApp\":\"同一个 10 页应用为每个库构建一次。我们衡量生产捆绑包（通过 rollup-plugin-visualizer），运行加载指标的 Lighthouse 审核，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在硬件一致的 CI 中运行，以确保结果可重现。\"},\"ja\":{\"whyThisExists\":\"なぜこれが存在するのか\",\"choosingAnI18nLibraryIs\":\"i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使い勝手に焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリがバンドルにどれだけの重量を加えるか？ 数千の翻訳キーがロードされたときにレンダリングにどう影響するか？ 遅延ロードは実際に役立つのか、それともコストを後回しにしているだけなのか？ このベンチマークは、実際のデータを使用してこれらの質問に答えます。\",\"methodology\":\"方法論\",\"theSame10PageApp\":\"同じ10ページのアプリがライブラリごとに1回構築されます。 rollup-plugin-visualizerを通じて生産バンドルを測定し、ロード指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダリング時間をキャプチャします。すべてのテストは、再現可能な結果を保証するために、一貫したハードウェアのCIで実行されます。\"},\"ko\":{\"whyThisExists\":\"이것이 존재하는 이유\",\"choosingAnI18nLibraryIs\":\"i18n 라이브러리를 선택하는 것은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API의 사용 편의성에 중점을 두지만, 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 무게를 더하는가? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 주는가? 지연 로딩이 실제로 도움이 되는가 아니면 단순히 비용을 나중으로 미루는 것인가? 이 벤치마크는 실제 데이터를 사용하여 이러한 질문에 답합니다.\",\"methodology\":\"방법론\",\"theSame10PageApp\":\"동일한 10페이지 앱이 라이브러리마다 한 번씩 구축됩니다. rollup-plugin-visualizer를 통해 프로덕션 번들을 측정하고, 로딩 지표에 대한 Lighthouse 감사를 실행하며, React Profiler를 사용하여 로케일 전환 중 렌더링 시간을 캡처합니다. 모든 테스트는 재현 가능한 결과를 보장하기 위해 일관된 하드웨어의 CI에서 실행됩니다.\"},\"ru\":{\"whyThisExists\":\"Почему это существует\",\"choosingAnI18nLibraryIs\":\"Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточены на эргономике API, но немногие измеряют стоимость производительности: какой вес библиотека добавляет в бандл? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Помогает ли ленивая загрузка на самом деле или просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.\",\"methodology\":\"Методология\",\"theSame10PageApp\":\"Одно и то же 10-страничное приложение создается для каждой библиотеки. Мы измеряем производственный бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для регистрации времени рендеринга при переключении языков. Все тесты выполняются в CI на одинаковом оборудовании для обеспечения воспроизводимых результатов.\"}}}")
}, h = /* @__PURE__ */ new WeakMap(), ee = 0, te = (e) => {
	if (!e) return "base";
	let t = h.get(e);
	if (t) return t;
	ee += 1;
	let n = `p${ee}`;
	return h.set(e, n), n;
}, ne = 256, g = /* @__PURE__ */ new WeakMap(), _ = (e) => typeof e == "object" && !!e, re = (e, t, n) => `${e}_${t}_${te(n)}`, ie = (e, t) => {
	if (!_(e)) return { hit: !1 };
	let n = g.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, v = (e, t, n) => {
	if (!_(e)) return n;
	let r = g.get(e);
	return r || (r = /* @__PURE__ */ new Map(), g.set(e, r)), r.size >= ne && r.clear(), r.set(t, n), n;
}, ae = "translation", oe = "enumeration", se = "plural", y = "insertion", ce = "object", le = "array", ue = "markdown", b = "html", de = "gender", fe = "select", x = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => x(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => x(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: le,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ce,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = x(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = x(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, pe = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, me = (e, t) => e[pe(e, t) ?? "fallback"], he = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), S = "default", ge = /[^A-Za-z0-9._&=-]/g, _e = /[^A-Za-z0-9._-]/g, ve = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, C = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ve);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, w = (e) => e === void 0 ? S : typeof e == "string" ? C(e, ge) : Object.keys(e).sort().map((t) => `${C(t, _e)}=${C(String(e[t]), _e)}`).join("&"), T = (e) => Array.isArray(e) ? e.length === 0 ? [S] : e.map(w) : [w(e)], ye = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? S : e[0] ?? "default";
}, be = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, xe = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Se = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ce = (e, t) => {
	if (!xe(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? S : ye(T(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => be(e, n, t, s)).map((t) => Se(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, we = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, E = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? T(n).join(",") : String(n)}`;
}).join("|") : "", D = {
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
}, O = {
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
}, Ee = "\x1B[0m", De = "\x1B[34m", Oe = "\x1B[31m", ke = "\x1B[32m", Ae = "\x1B[36m", je = (e) => e, Me = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = je(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Ne = (e, t) => (n, r) => Me(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), k = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? Ee : n : Ee}` : e;
k("✗", Oe), k("✓", ke), k("⏲", De);
var Pe = 50, Fe = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Set(), Le = (e) => {
	Ie.has(e) || (Ie.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Re = {
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
}, ze = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Le(e), Re[e]);
};
function A(e, t, n) {
	let r = t ?? D?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Fe.get(a);
	o || (o = /* @__PURE__ */ new Map(), Fe.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ze(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Pe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Be = (e, t, n) => e[A("PluralRules", n).select(t)] ?? e.other, Ve = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, j = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, M = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (j(e) && j(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : M(e[r], t[r]));
		return n;
	}
	return e;
}, He = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => M(e, t));
}, N = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ue = (e) => {
	if (typeof e == "string") return e;
	if (N(e)) return e.nodeType === "html" ? e[b] : e[ue];
}, We = (e, t) => {
	if (typeof e == "string") return t;
	if (N(e)) {
		let n = e.nodeType === "html" ? b : ue;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, P = (e, t, n, r, i) => {
	let a = We(e, he(Ue(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, F = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, I = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? F : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ae,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return He(o, e, t);
	}
}, L = F, Ge = (e) => F, R = F, Ke = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? F : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || N(e),
			transform: (e, n, r) => {
				if (N(e)) return (i) => P(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = he(i, e);
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
}, z = F, B = F, V = (e) => F, H = F, qe = (e, t = !0) => [
	I(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
	L,
	R,
	Ke,
	V(e ?? D.defaultLocale),
	H,
	z,
	B
], Je = (e, t, n = []) => x(e, {
	...t,
	plugins: n
}), Ye = (e, t, n) => {
	let { locale: r, selector: i } = we(t), a = re(r ?? D.defaultLocale, E(i), n), o = ie(e, a);
	if (o.hit) return o.content;
	let s = n ?? qe(r), c = Ce(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Je(e.content, t, s);
	};
	return c === null ? v(e, a, null) : Array.isArray(c) ? v(e, a, c.map(l)) : v(e, a, l(c));
}, Xe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", U = /\{\{\s*(.*?)\s*\}\}/g, Ze = (e, t = {}) => {
	if (!Object.values(t).some(Xe)) return {
		isSimple: !0,
		parts: e.replace(U, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(U), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Qe = (e, t, n = ".") => {
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
}, W = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], G = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, $e = (e, t, n, r) => {
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
}, et = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : i ? $e(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : $e(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = G(t, n);
	return r === void 0 ? e : String(r);
}), K = (e, t) => e[t] ?? e.count ?? e.n, q = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return et(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return q(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(q(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return q(r[y], t, n);
	if (r.nodeType === "html") return q(r[b], t, n);
	if (r.nodeType === "plural") {
		let e = r[se];
		return q(Be(e, Number(K(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[oe], i = W.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) W.includes(t) || (o[t] = n);
		let s = K(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = A("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? me(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return q(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[fe], i = K(t, typeof r.variable == "string" ? r.variable : "value");
		return q(Ve(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[de];
		return q(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, tt = (e, t = {}, n = "en") => {
	let r = q(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, J = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: J(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, nt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, rt = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = rt(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), Y = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Y(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), it = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return at(e, (e) => Qe(t, r(e)), r);
}, at = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return tt(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = nt(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: rt(J(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = nt(t), o = r(e, i);
			return o === void 0 ? n(e) : Y(J(o), a);
		}
	});
}, ot = ({ children: e, value: t, additionalProps: n }) => {
	let r = i(e) ? e : d(u, { children: e });
	return new Proxy(r, { get(e, r, i) {
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
}, st = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => ot({
		...n,
		value: n.children,
		children: n.children
	})
}, ct = F, lt = (e, n) => {
	let i = Ze(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, ut = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? F : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || N(e),
			transform: (e, n, r) => {
				if (N(e)) return (i) => P(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = lt(i, e);
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
}, dt = F, ft = F, X = /* @__PURE__ */ new Map(), pt = (e, t = !0) => {
	let n = `${e ?? D.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		I(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
		L,
		Ge(e ?? D.defaultLocale),
		R,
		V(e ?? D.defaultLocale),
		H,
		z,
		B,
		st,
		ct,
		ut,
		dt,
		ft
	];
	return X.set(n, r), r;
}, mt = (e, t) => Ye(e, t, pt(typeof t == "object" && t ? t.locale : t)), ht = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, gt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = ht(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, _t = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Z = {
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
}, vt = (e = Z) => {
	let { locales: t } = D;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!_t) for (let t = 0; t < (O.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(O.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, yt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !_t && O.storage.cookies) for (let n = 0; n < O.storage.cookies.length; n++) {
		let { name: r, attributes: i } = O.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: ht(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, gt(r, e, i));
			} catch {}
		}
	}
}, bt = vt(Z), xt = (e, t) => yt(e, {
	...Z,
	isCookieEnabled: t
}), St = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Ct = ({ children: e }) => (St(), e), wt = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Tt = ({ children: e }) => (wt(), e), Et = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Dt = (e, t = D?.locales, n = D?.defaultLocale) => {
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
}, Q = n({
	locale: bt ?? D?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Ot = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = D ?? {}, [f, p] = l(e ?? bt ?? t ?? u);
	o(() => {
		e && e !== f && p(e);
	}, [e]), o(() => {
		Et();
	}, []);
	let m = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), xt(e, s);
		}
	}), h = Dt(f);
	return d(Q.Provider, {
		value: {
			locale: h,
			setLocale: m,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, kt = ({ children: e, ...t }) => f(Ot, {
	...t,
	children: [
		d(Ct, {}),
		d(Tt, {}),
		e
	]
}), At = (e, t) => {
	let { locale: n, variant: r } = a(Q) ?? {}, i = t ?? n, o = typeof i == "object" && i ? `${i.locale ?? ""}|${E(i)}` : i;
	return s(() => mt(e, i), [e.key, o]);
}, jt = ((e, t) => {
	let { locale: n } = a(Q) ?? {};
	return it(n, At(e), t);
}), Mt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Ne({ log: Te })(`${k("IntlProvider", Ae)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(kt, {
	locale: e,
	children: t
}, String(e))), $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/about/AboutGrid.tsx";
function Nt() {
	let e = jt(m);
	return p("div", {
		className: "grid gap-8 md:grid-cols-2",
		children: [p("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [p("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: e("whyThisExists")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 8,
				columnNumber: 9
			}, this), p("p", {
				className: "text-sm text-muted-foreground",
				children: e("choosingAnI18nLibraryIs")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 11,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: $,
			lineNumber: 7,
			columnNumber: 7
		}, this), p("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [p("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: e("methodology")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 16,
				columnNumber: 9
			}, this), p("p", {
				className: "text-sm text-muted-foreground",
				children: e("theSame10PageApp")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 19,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: $,
			lineNumber: 15,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: $,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
var Pt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function Ft({ children: t }) {
	return p(e.Suspense, {
		fallback: null,
		children: p(Mt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: Pt,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Pt,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var It = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/about/AboutGrid.wrapper.tsx";
function Lt() {
	return p(Ft, { children: p(Nt, {}, void 0, !1, {
		fileName: It,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: It,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Lt as default };
