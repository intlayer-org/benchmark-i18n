import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, writable as r } from "svelte/store";
var i = {
	key: "about-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"why\":{\"title\":\"Why This Exists\",\"description\":\"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\"},\"methodology\":{\"title\":\"Methodology\",\"description\":\"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use performance profiling to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\"}},\"fr\":{\"why\":{\"title\":\"Pourquoi cela existe\",\"description\":\"Le choix d'une bibliothèque i18n est une décision architecturale aux conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en performances : quel poids la bibliothèque ajoute-t-elle au bundle ? Comment affecte-t-elle le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement différé aide-t-il réellement ou ne fait-il que déplacer le coût ? Ce benchmark répond à ces questions avec des données réelles.\"},\"methodology\":{\"title\":\"Méthodologie\",\"description\":\"La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les mesures de chargement et utilisons le profilage des performances pour capturer les temps de rendu lors des changements de langue. Tous les tests sont exécutés en CI sur un matériel cohérent pour garantir des résultats reproductibles.\"}},\"es\":{\"why\":{\"title\":\"Por qué existe esto\",\"description\":\"Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el costo de rendimiento: ¿cuánto peso agrega la biblioteca al paquete? ¿Cómo afecta el renderizado cuando se cargan miles de claves de traducción? ¿La carga diferida realmente ayuda o simplemente traslada el costo? Este benchmark responde a esas preguntas con datos reales.\"},\"methodology\":{\"title\":\"Metodología\",\"description\":\"La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el paquete de producción (a través de rollup-plugin-visualizer), realizamos auditorías Lighthouse para las métricas de carga y utilizamos perfiles de rendimiento para capturar los tiempos de renderizado durante los cambios de configuración regional. Todas las pruebas se ejecutan en CI en hardware consistente para garantizar resultados reproducibles.\"}},\"de\":{\"why\":{\"title\":\"Warum dies existiert\",\"description\":\"Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit echten Daten.\"},\"methodology\":{\"title\":\"Methodik\",\"description\":\"Die gleiche 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden Performance-Profiling, um die Renderzeiten während des Gebietschemawechsels zu erfassen. Alle Tests werden in CI auf konsistenter Hardware ausgeführt, um reproduzierbare Ergebnisse zu gewährleisten.\"}},\"it\":{\"why\":{\"title\":\"Perché esiste questo\",\"description\":\"La scelta di una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia dell'API, ma pochi misurano il costo in termini di prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.\"},\"methodology\":{\"title\":\"Metodologia\",\"description\":\"La stessa app di 10 pagine viene creata una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo il profiling delle prestazioni per acquisire i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.\"}},\"pt\":{\"why\":{\"title\":\"Por que isso existe\",\"description\":\"Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações se concentra na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.\"},\"methodology\":{\"title\":\"Metodologia\",\"description\":\"O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias do Lighthouse para métricas de carregamento e usamos o perfil de desempenho para capturar os tempos de renderização durante as mudanças de localidade. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzibles.\"}},\"zh\":{\"why\":{\"title\":\"为什么存在这个项目\",\"description\":\"选择 i18n 库是一个具有长期影响的架构决策。大多数比较都集中在 API 人机工程学上，但很少有比较衡量性能成本：该库为捆绑包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载真的有帮助还是只是转嫁了成本？本基准测试用真实数据回答了这些问题。\"},\"methodology\":{\"title\":\"方法论\",\"description\":\"同一个 10 页的应用程序每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行 Lighthouse 审核以获取加载指标，并使用性能分析来捕捉区域设置切换期间的渲染时间。所有测试都在一致的硬件上的 CI 中运行，以确保结果可重复。\"}},\"ja\":{\"why\":{\"title\":\"なぜこれが存在するのか\",\"description\":\"i18n ライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較は API のエルゴノミクスに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重みを加えるのか？何千もの翻訳キーがロードされたとき、レンダリングにどのように影響するのか？遅延読み込みは本当に役立つのか、それともコストをシフトさせるだけなのか？このベンチマークは、実際のデータでこれらの質問に答えます。\"},\"methodology\":{\"title\":\"方法論\",\"description\":\"同じ 10 ページのアプリが、ライブラリごとに 1 回ビルドされます。プロダクションバンドルを測定し（rollup-plugin-visualizer 経由）、ロードメトリクスの Lighthouse 監査を実行し、パフォーマンスプロファイリングを使用してロケール切り替え中のレンダリング時間をキャプチャします。再現可能な結果を確実にするために、すべてのテストは一貫したハードウェア上の CI で実行されます。\"}},\"ko\":{\"why\":{\"title\":\"이것이 존재하는 이유\",\"description\":\"i18n 라이브러리를 선택하는 것은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API 인체 공학에 중점을 두지만 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 많은 가중치를 추가합니까? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 줍니까? 지연 로딩이 실제로 도움이 됩니까, 아니면 단지 비용을 전가할 뿐입니까? 이 벤치마크는 실제 데이터로 이러한 질문에 답합니다.\"},\"methodology\":{\"title\":\"방법론\",\"description\":\"동일한 10페이지 앱이 라이브러리당 한 번씩 빌드됩니다. 프로덕션 번들을 측정하고(rollup-plugin-visualizer를 통해), 로딩 메트릭에 대한 Lighthouse 감사를 실행하고, 성능 프로파일링을 사용하여 로케일 전환 중 렌더링 시간을 캡처합니다. 재현 가능한 결과를 보장하기 위해 모든 테스트는 일관된 하드웨어의 CI에서 실행됩니다.\"}},\"ru\":{\"why\":{\"title\":\"Почему это существует\",\"description\":\"Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточено на эргономике API, но немногие измеряют стоимость производительности: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.\"},\"methodology\":{\"title\":\"Методология\",\"description\":\"Одно и то же 10-страничное приложение создается один раз для каждой библиотеки. Мы измеряем продакшн-бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем профилирование производительности для фиксации времени рендеринга при переключении локалей. Все тесты запускаются в CI на одинаковом оборудовании для обеспечения воспроизводимости результатов.\"}}}}")
}, a = {
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
}, o = a?.defaultLocale, s = (() => {
	let { subscribe: e, set: t, update: i } = r({ locale: o });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: o })
	};
})(), c = Symbol("intlayer"), l = () => t(c), u = "default", d = /[^A-Za-z0-9._&=-]/g, f = /[^A-Za-z0-9._-]/g, p = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, m = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, p);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, h = (e) => e === void 0 ? u : typeof e == "string" ? m(e, d) : Object.keys(e).sort().map((t) => `${m(t, f)}=${m(String(e[t]), f)}`).join("&"), g = (e) => Array.isArray(e) ? e.length === 0 ? [u] : e.map(h) : [h(e)], _ = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? u : e[0] ?? "default";
}, v = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, y = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, b = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, x = (e, t) => {
	if (!y(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? u : _(g(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => v(e, n, t, s)).map((t) => b(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, S = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, C = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? g(n).join(",") : String(n)}`;
}).join("|") : "", ee = "translation", w = "object", T = "array", E = (e, t) => {
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
}, D = /* @__PURE__ */ new WeakMap(), O = 0, k = (e) => {
	if (!e) return "base";
	let t = D.get(e);
	if (t) return t;
	O += 1;
	let n = `p${O}`;
	return D.set(e, n), n;
}, A = 256, j = /* @__PURE__ */ new WeakMap(), M = (e) => typeof e == "object" && !!e, N = (e, t, n) => `${e}_${t}_${k(n)}`, P = (e, t) => {
	if (!M(e)) return { hit: !1 };
	let n = j.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, F = (e, t, n) => {
	if (!M(e)) return n;
	let r = j.get(e);
	return r || (r = /* @__PURE__ */ new Map(), j.set(e, r)), r.size >= A && r.clear(), r.set(t, n), n;
}, I = (e, t = !0) => [
	H(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
	U,
	G,
	K,
	Y(e ?? a.defaultLocale),
	X,
	q,
	J
], te = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), L = (e, t, n) => {
	let { locale: r, selector: i } = S(t), o = N(r ?? a.defaultLocale, C(i), n), s = P(e, o);
	if (s.hit) return s.content;
	let c = n ?? I(r), l = x(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries
		};
		return te(e.content, t, c);
	};
	return l === null ? F(e, o, null) : Array.isArray(l) ? F(e, o, l.map(u)) : F(e, o, u(l));
}, R = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, z = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (R(e) && R(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : z(e[r], t[r]));
		return n;
	}
	return e;
}, B = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => z(e, t));
}, V = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, H = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? V : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ee,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return B(o, e, t);
	}
}, U = V, W = (e) => V, G = V, K = V, q = V, J = V, Y = (e) => V, X = V;
function Z(t, n) {
	e.push(n, !1);
	let r = e.prop(n, "Renderer", 8, void 0), i = e.prop(n, "rendererProps", 24, () => ({})), a = e.prop(n, "value", 8, void 0), o = e.mutable_source(), s = e.mutable_source(!1);
	e.legacy_pre_effect(() => e.deep_read_state(r()), () => {
		typeof r()?.then == "function" ? (e.set(s, !0), r().then((t) => {
			e.set(o, t), e.set(s, !1);
		})) : (e.set(o, r()), e.set(s, !1));
	}), e.legacy_pre_effect_reset(), e.init();
	var c = e.comment(), l = e.first_child(c), u = (e) => {}, d = (t) => {
		var n = e.comment(), r = e.first_child(n);
		e.element(r, () => e.get(o), !1, (t, n) => {
			e.attribute_effect(t, () => ({ ...i() }));
			var r = e.text();
			e.template_effect(() => e.set_text(r, a())), e.append(n, r);
		}), e.append(t, n);
	}, f = (t) => {
		e.get(o)(t, e.spread_props(i, {
			children: (t, n) => {
				e.next();
				var r = e.text();
				e.template_effect(() => e.set_text(r, a())), e.append(t, r);
			},
			$$slots: { default: !0 }
		}));
	}, p = (t) => {
		var n = e.text();
		e.template_effect(() => e.set_text(n, a())), e.append(t, n);
	};
	e.if(l, (t) => {
		e.get(s) ? t(u) : typeof e.get(o) == "string" ? t(d, 1) : typeof e.get(o) == "function" ? t(f, 2) : t(p, -1);
	}), e.append(t, c), e.pop();
}
var ne = (e) => {
	let t = !!Z.prototype?.$destroy, n;
	if (n = t ? class extends Z {
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
	} : (t) => Z(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "toString", {
		value: () => String(e.value ?? ""),
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "valueOf", {
		value: () => e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, Symbol.toPrimitive, {
		value: () => e.value ?? "",
		writable: !0,
		configurable: !0
	}), e.value !== null && e.value !== void 0) {
		let t = Object(e.value), r = Object.getPrototypeOf(t);
		for (let i of Object.getOwnPropertyNames(r)) {
			if (i === "constructor" || i in n) continue;
			let r = t[i];
			typeof r == "function" && Object.defineProperty(n, i, {
				value: r.bind(e.value),
				writable: !0,
				configurable: !0
			});
		}
	}
	return e.additionalProps && Object.assign(n, e.additionalProps), n;
}, Q = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => ne({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, re = Q, ie = V, ae = V, oe = V, $ = /* @__PURE__ */ new Map(), se = (e, t = !0) => {
	let n = `${e ?? a.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		H(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
		U,
		W(e ?? a.defaultLocale),
		G,
		Y(e ?? a.defaultLocale),
		X,
		q,
		J,
		Q,
		re,
		ie,
		ae,
		oe
	];
	return $.set(n, r), r;
}, ce = (e, t) => L(e, t, se(typeof t == "object" && t ? t.locale : t)), le = (e, t) => {
	let r = l();
	return n([s], ([n]) => {
		let i = r?.locale ?? n.locale;
		return ce(e, t ?? i);
	});
}, ue = e.from_html("<div class=\"grid gap-8 md:grid-cols-2\"><div class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-3 text-xl font-semibold text-foreground\"> </h2> <p class=\"text-sm text-muted-foreground\"> </p></div> <div class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-3 text-xl font-semibold text-foreground\"> </h2> <p class=\"text-sm text-muted-foreground\"> </p></div></div>");
function de(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(s, "$content", a), [a, o] = e.setup_stores(), s = le(i);
	e.init();
	var c = ue(), l = e.child(c), u = e.child(l), d = e.only_child(u, !0), f = e.sibling(u, 2), p = e.only_child(f, !0);
	e.reset(l);
	var m = e.sibling(l, 2), h = e.child(m), g = e.only_child(h, !0), _ = e.sibling(h, 2), v = e.only_child(_, !0);
	e.reset(m), e.reset(c), e.template_effect(() => {
		e.set_text(d, r().why.title), e.set_text(p, r().why.description), e.set_text(g, r().methodology.title), e.set_text(v, r().methodology.description);
	}), e.append(t, c), e.pop(), o();
}
export { de as default };
