import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useMemo as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
var f = {
	key: "about-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"choosingAnI18nLibraryIs\":\"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\",\"methodology\":\"Methodology\",\"theSame10PageApp\":\"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\",\"whyThisExists\":\"Why This Exists\"},\"fr\":{\"choosingAnI18nLibraryIs\":\"Choisir une bibliothèque i18n est une décision architecturale ayant des conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en termes de performances : quel poids la bibliothèque ajoute-t-elle au bundle ? Comment cela affecte-t-il le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement différé aide-t-il réellement ou déplace-t-il simplement le coût ? Ce benchmark répond à ces questions avec des données réelles.\",\"methodology\":\"Méthodologie\",\"theSame10PageApp\":\"La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les métriques de chargement et utilisons React Profiler pour capturer les temps de rendu lors des changements de langue. Tous les tests sont effectués en CI sur un matériel identique pour garantir des résultats reproductibles.\",\"whyThisExists\":\"Pourquoi cela existe\"},\"es\":{\"choosingAnI18nLibraryIs\":\"Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo traslada el coste? Este benchmark responde a estas preguntas con datos reales.\",\"methodology\":\"Metodología\",\"theSame10PageApp\":\"La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en un hardware consistente para garantizar resultados reproducibles.\",\"whyThisExists\":\"Por qué existe\"},\"de\":{\"choosingAnI18nLibraryIs\":\"Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt sie sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading wirklich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit echten Daten.\",\"methodology\":\"Methodik\",\"theSame10PageApp\":\"Dieselbe 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Gebietsschemawechsel zu erfassen. Alle Tests werden in der CI auf konsistenter Hardware ausgeführt, um reproduzierbare Ergebnisse zu gewährleisten.\",\"whyThisExists\":\"Warum dieses Projekt existiert\"},\"it\":{\"choosingAnI18nLibraryIs\":\"Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.\",\"methodology\":\"Metodologia\",\"theSame10PageApp\":\"La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.\",\"whyThisExists\":\"Perché esiste questo progetto\"},\"pt\":{\"choosingAnI18nLibraryIs\":\"Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências de longo prazo. A maioria das comparações se concentra na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao pacote? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento tardio realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.\",\"methodology\":\"Metodologia\",\"theSame10PageApp\":\"O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), realizamos auditorias do Lighthouse para métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis.\",\"whyThisExists\":\"Por que isso existe\"},\"zh\":{\"choosingAnI18nLibraryIs\":\"选择 i18n 库是一项具有长期影响的架构决策。大多数比较侧重于 API 的易用性，但很少衡量性能成本：库为包增加了多少权重？加载数千个翻译键时它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试用真实数据回答了这些问题。\",\"methodology\":\"方法论\",\"theSame10PageApp\":\"同一个 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行 Lighthouse 审计以获取加载指标，并使用 React Profiler 捕获语言切换期间的渲染时间。所有测试都在一致的硬件上在 CI 中运行，以确保结果的可复现性。\",\"whyThisExists\":\"为什么存在这个基准测试\"},\"ja\":{\"choosingAnI18nLibraryIs\":\"i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使い勝手に焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリがバンドルにどれだけの重量を加えるのか？数千の翻訳キーが読み込まれたとき、レンダリングにどのような影響を与えるのか？遅延読み込みは実際に役立つのか、それとも単にコストをシフトさせているだけなのか？このベンチマークは、実際のデータでそれらの疑問に答えます。\",\"methodology\":\"方法論\",\"theSame10PageApp\":\"同じ10ページのアプリがライブラリごとに1回構築されます。rollup-plugin-visualizerを介してプロダクションバンドルを測定し、ロード指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダリング時間をキャプチャします。すべてのテストは、再現可能な結果を確実にするために、一貫したハードウェアを使用してCI上で実行されます。\",\"whyThisExists\":\"なぜこれが存在するのか\"},\"ko\":{\"choosingAnI18nLibraryIs\":\"i18n 라이브러리를 선택하는 것은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API의 사용 편의성에 중점을 두지만, 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 무게를 더하는가? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 주는가? 지연 로딩이 실제로 도움이 되는가 아니면 단순히 비용을 나중으로 미루는 것인가? 이 벤치마크는 실제 데이터를 사용하여 이러한 질문에 답합니다.\",\"methodology\":\"방법론\",\"theSame10PageApp\":\"동일한 10페이지 앱이 라이브러리마다 한 번씩 구축됩니다. rollup-plugin-visualizer를 통해 프로덕션 번들을 측정하고, 로딩 지표에 대한 Lighthouse 감사를 실행하며, React Profiler를 사용하여 로케일 전환 중 렌더링 시간을 캡처합니다. 모든 테스트는 재현 가능한 결과를 보장하기 위해 일관된 하드웨어의 CI에서 실행됩니다.\",\"whyThisExists\":\"이것이 존재하는 이유\"},\"ru\":{\"choosingAnI18nLibraryIs\":\"Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточены на эргономике API, но немногие измеряют стоимость производительности: какой вес библиотека добавляет в бандл? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Помогает ли ленивая загрузка на самом деле или просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.\",\"methodology\":\"Методология\",\"theSame10PageApp\":\"Одно и то же 10-страничное приложение создается для каждой библиотеки. Мы измеряем производственный бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для регистрации времени рендеринга при переключении языков. Все тесты выполняются в CI на одинаковом оборудовании для обеспечения воспроизводимых результатов.\",\"whyThisExists\":\"Почему это существует\"}}}")
}, p = t(null), m = class {
	_events = /* @__PURE__ */ new Map();
	on(e, t) {
		return this._events.has(e) || this._events.set(e, /* @__PURE__ */ new Set()), this._events.get(e).add(t), () => this.removeListener(e, t);
	}
	removeListener(e, t) {
		this._events.get(e)?.delete(t);
	}
	emit(e, ...t) {
		this._events.get(e)?.forEach((e) => {
			e(...t);
		});
	}
}, h = (e, t) => {
	if (!t) return e;
	if (typeof e != "object" || !e) return;
	let n = e[t];
	if (n !== void 0) return n;
	if (!t.includes(".")) return;
	let r = e;
	for (let e of t.split(".")) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, g = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, _ = (e, t) => {
	let n = h(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return h(n, t);
	}
}, ee = (e) => {
	if (typeof e == "string") return e;
	if (!Array.isArray(e)) return "";
	let [t, n, r] = e;
	if (n === void 0) return `{${String(t)}}`;
	if (n === "plural" || n === "select" || n === "selectordinal") {
		let e = r ?? {}, i = [], a = "";
		for (let [t, n] of Object.entries(e)) {
			if (t === "offset") {
				a = `offset:${String(n)} `;
				continue;
			}
			i.push(`${t} {${v(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, v = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(ee).join("") : String(e ?? ""), y = "translation", b = "enumeration", x = "plural", te = "condition", S = "insertion", ne = "object", re = "array", ie = "markdown", C = "html", w = "gender", T = "select", E = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), D = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), O = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, O);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => O(e, D(t, e, {
		type: re,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ne,
			key: r
		};
		if (t.eager) {
			n[r] = O(e[r], D(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = O(e[r], D(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, ae = (e) => E(b, e), oe = (e) => E(w, e), se = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, k = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = se(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, ce = /* @__PURE__ */ new Set([
	"area",
	"base",
	"br",
	"col",
	"embed",
	"hr",
	"img",
	"input",
	"link",
	"meta",
	"source",
	"track",
	"wbr"
]), le = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, ue = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(le)) {
		let e = !!r[1], i = r[2], a = r[3], o = !!r[4];
		if (!(a.trimStart().startsWith("://") || a.trimStart().startsWith(":"))) {
			if (e) {
				if (n.length === 0) t.push({
					type: "error",
					message: `Closing tag </${i}> has no matching opening tag`
				});
				else {
					let e = n[n.length - 1];
					e.tag.toLowerCase() !== i.toLowerCase() && t.push({
						type: "error",
						message: `Mismatched closing tag: expected </${e.tag}> but found </${i}>`
					}), n.pop();
				}
			} else {
				let e = ce.has(i.toLowerCase());
				!o && !e && n.push({ tag: i });
			}
		}
	}
	for (let e of n) t.push({
		type: "error",
		message: `Unclosed HTML tag: <${e.tag}>`
	});
	return {
		valid: t.filter((e) => e.type === "error").length === 0,
		issues: t
	};
}, A = (e, t) => E(C, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = ue(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return k(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => k(await e)), typeof n == "string") return k(n);
	try {
		return k(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), j = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, M = (e) => E(S, e, { fields: (() => {
	if (typeof e == "string") return j(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => j(await e)), typeof t == "string") return j(t);
	try {
		return j(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), de = (e) => E(x, e), fe = (e, t) => E(T, e, { variable: t }), pe = (e) => {
	let t = 0, n = () => {
		let n = [], i = "";
		for (; t < e.length;) {
			let a = e[t];
			if (a === "{") i &&= (n.push(i), ""), t++, n.push(r());
			else if (a === "}") break;
			else if (a === "'") {
				if (t + 1 < e.length && e[t + 1] === "'") i += "'", t += 2;
				else {
					let n = e.indexOf("'", t + 1);
					n === -1 ? (i += "'", t++) : (i += e.substring(t + 1, n), t = n + 1);
				}
			} else i += a, t++;
		}
		return i && n.push(i), n;
	}, r = () => {
		let r = "";
		for (; t < e.length && /[^,}]/.test(e[t]);) r += e[t], t++;
		if (r = r.trim(), t >= e.length) throw Error("Unclosed argument");
		if (e[t] === "}") return t++, {
			type: "argument",
			name: r
		};
		if (e[t] === ",") {
			t++;
			let i = "";
			for (; t < e.length && /[^,}]/.test(e[t]);) i += e[t], t++;
			if (i = i.trim(), t >= e.length) throw Error("Unclosed argument");
			if (e[t] === "}") return t++, {
				type: "argument",
				name: r,
				format: { type: i }
			};
			if (e[t] === ",") {
				if (t++, i === "plural" || i === "select" || i === "selectordinal") {
					let a = {};
					for (; t < e.length && e[t] !== "}";) {
						for (; t < e.length && /\s/.test(e[t]);) t++;
						let r = "";
						for (; t < e.length && /[^{\s]/.test(e[t]);) r += e[t], t++;
						for (; t < e.length && /\s/.test(e[t]);) t++;
						if (e[t] !== "{") throw Error("Expected { after option key");
						t++;
						let i = n();
						if (e[t] !== "}") throw Error("Expected } after option value");
						for (t++, a[r] = i; t < e.length && /\s/.test(e[t]);) t++;
					}
					if (t++, i === "plural") return {
						type: "plural",
						name: r,
						options: a
					};
					if (i === "select") return {
						type: "select",
						name: r,
						options: a
					};
					if (i === "selectordinal") return {
						type: "selectordinal",
						name: r,
						options: a
					};
				} else {
					let n = "";
					for (; t < e.length && e[t] !== "}";) n += e[t], t++;
					if (t >= e.length) throw Error("Unclosed argument");
					return n = n.trim(), t++, {
						type: "argument",
						name: r,
						format: {
							type: i,
							style: n
						}
					};
				}
			}
		}
		throw Error("Malformed argument");
	};
	return n();
}, N = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? A(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e?.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n?.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? A(t) : M(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? A(t) : t;
		if (t?.type === "argument") return t.format ? M(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : M(`{{${t.name}}}`);
		if (t?.type === "plural") {
			let e = {}, n = !1;
			for (let e of Object.keys(t.options)) if (e.startsWith("=")) {
				n = !0;
				break;
			}
			if (n) {
				for (let [n, r] of Object.entries(t.options)) {
					let i = n;
					n.startsWith("=") ? i = n.substring(1) : n === "one" ? i = "1" : n === "two" ? i = "2" : n === "few" ? i = "<=3" : n === "many" ? i = ">=4" : n === "other" && (i = "fallback");
					let a = r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
					e[i] = N(a);
				}
				return e.__intlayer_icu_var = t.name, ae(e);
			}
			for (let [n, r] of Object.entries(t.options)) {
				let i = r?.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
				e[n] = N(i);
			}
			return de(e);
		}
		if (t?.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = N(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? oe({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : fe(e, t.name);
		}
		if (t?.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = N(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, ae(e);
		}
	}
	return e.map((e) => N([e]));
}, me = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return N(pe(e));
		} catch {
			return e;
		}
	}
}, he = (e) => O(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...me
	}]
}), ge = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, _e = (e, t) => e[ge(e, t) ?? "fallback"], P = {
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
}, F = {
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
}, ve = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, ye = 50, be = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Set(), Se = (e) => {
	xe.has(e) || (xe.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ce = {
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
}, we = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Se(e), Ce[e]);
};
function I(e, t, n) {
	let r = t ?? P?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = be.get(a);
	o || (o = /* @__PURE__ */ new Map(), be.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? we(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ye && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Te = (e, t, n) => e[I("PluralRules", n).select(t)] ?? e.other, Ee = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, De = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], L = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Oe = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? I("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? I("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : I("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return I("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, ke = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = L(t, r);
	return o === void 0 ? e : i ? Oe(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = L(t, r);
	return o === void 0 ? e : Oe(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = L(t, n);
	return r === void 0 ? e : String(r);
}), R = (e, t) => e[t] ?? e.count ?? e.n, z = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return ke(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return z(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(z(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return z(r[S], t, n);
	if (r.nodeType === "html") return z(r[C], t, n);
	if (r.nodeType === "plural") {
		let e = r[x];
		return z(Te(e, Number(R(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[b], i = De.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) De.includes(t) || (o[t] = n);
		let s = R(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = I("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? _e(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return z(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[T], i = R(t, typeof r.variable == "string" ? r.variable : "value");
		return z(Ee(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[w];
		return z(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Ae = (e, t = {}, n = "en") => {
	let r = z(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, je = (e) => (t, n = {}, r = "en") => Ae(typeof t == "string" ? e(t) : t, n, r), Me = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : o && t.push({
			tag: o,
			children: Me(s ?? "")
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, Ne = je(he), Pe = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, Fe = class extends m {
	_locale;
	_locales;
	_catalogs = {};
	_loadFallbackWarned = !1;
	_boundDictionaries = {};
	_registry;
	constructor({ locale: e = "en", locales: t, messages: n, registry: r } = {}) {
		super(), this._locale = typeof e == "string" ? e : "en", this._locales = t, this._registry = r, n && this.mergeAllCatalogs(n);
	}
	get locale() {
		return this._locale;
	}
	get locales() {
		return this._locales;
	}
	get messages() {
		let e = { ...this._registry?.all(this._locale) };
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, g(t));
		return {
			...this._catalogs[this._locale] ?? {},
			...e
		};
	}
	mergeLocaleCatalog(e, t) {
		this._catalogs[e] = {
			...this._catalogs[e],
			...t
		};
	}
	mergeAllCatalogs(e) {
		for (let [t, n] of Object.entries(e)) n && typeof n == "object" && this.mergeLocaleCatalog(t, n);
	}
	setMessagesCompiler(e) {
		return console.warn("@intlayer/lingui: i18n.setMessagesCompiler() is a no-op — message compilation is handled at build time by intlayer."), this;
	}
	load(e, t) {
		typeof e == "string" ? this.mergeLocaleCatalog(e, t ?? {}) : this.mergeAllCatalogs(e), this._loadFallbackWarned || (this._loadFallbackWarned = !0, console.warn("@intlayer/lingui: i18n.load() messages are used as a runtime fallback. For optimal bundle size, compile your catalogs into intlayer dictionaries instead of importing lingui locale files."));
	}
	loadAndActivate({ locale: e, locales: t, messages: n }) {
		n && this.mergeLocaleCatalog(e, n), this.activate(e, t);
	}
	bindDictionaries(e) {
		return this._boundDictionaries = e, this;
	}
	activate(e, t) {
		this._locale = e, this._locales = t, this.emit("change");
	}
	lookupBoundDictionaries(e) {
		let { dictionaryKey: t, remainder: n } = Pe(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = _(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = _(t, e);
			if (n !== void 0) return n;
		}
	}
	resolveTemplate(e) {
		let t = this.lookupBoundDictionaries(e);
		if (t !== void 0) return {
			kind: "node",
			node: t
		};
		let n = this._registry?.lookup(e, this._locale);
		if (n !== void 0) return {
			kind: "node",
			node: n
		};
		let r = this._catalogs[this._locale];
		if (r) {
			let t = _(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: v(t)
			};
		}
	}
	_(e, t, n) {
		let r = typeof e == "object" && !!e, i = r ? e.id : e, a = r ? e.message ?? n?.message : n?.message, o = r ? {
			...e.values ?? {},
			...t ?? {}
		} : t ?? {}, s = this._locale, c = this.resolveTemplate(i) ?? {
			kind: "icu",
			message: a ?? i
		};
		return (c.kind === "node" ? Ae(c.node, o, s) : Ne(c.message, o, s)) ?? i;
	}
	t = (e, t, n) => this._(e, t, n);
	date(e, t) {
		if (e == null) return "";
		let n = e instanceof Date ? e : new Date(e);
		return new Intl.DateTimeFormat(this._locale, t).format(n);
	}
	number(e, t) {
		return new Intl.NumberFormat(this._locale, t).format(e);
	}
}, Ie = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Le = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Ie(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Re = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var B = {
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
}, ze = (e = B) => {
	let { locales: t } = P;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Re) for (let t = 0; t < (F.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(F.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, V = !1, H, Be = () => typeof window > "u" ? ze(B) : (V ||= (H = ze(B), !0), H), Ve = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (V = !1, !Re && F.storage.cookies)) for (let n = 0; n < F.storage.cookies.length; n++) {
		let { name: r, attributes: i } = F.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Ie(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Le(r, e, i));
			} catch {}
		}
	}
}, He = /* @__PURE__ */ new Map(), Ue = (e, t) => Object.create(new Proxy(e, {
	get: (e, t, n) => {
		if (typeof t != "string" || t === "constructor" || t in e) return Reflect.get(e, t, n);
		let { value: r } = n;
		if (r == null) return;
		let i = Object(r)[t];
		return typeof i == "function" ? i.bind(r) : i;
	},
	has: (e, n) => n in e || typeof n == "string" && n !== "constructor" && t !== null && n in t
}), {
	toString: { value() {
		return String(this.value ?? "");
	} },
	valueOf: { value() {
		return this.value;
	} },
	[Symbol.toPrimitive]: { value() {
		return this.value ?? "";
	} }
}), We = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = He.get(t);
	i || (i = /* @__PURE__ */ new Map(), He.set(t, i));
	let a = i.get(r);
	return a || (a = Ue(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, Ge = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : u(l, { children: e }),
	value: t,
	...n
}, We(t)), Ke = /* @__PURE__ */ new WeakMap(), qe = 0, Je = (e) => {
	if (!e) return "base";
	let t = Ke.get(e);
	if (t) return t;
	qe += 1;
	let n = `p${qe}`;
	return Ke.set(e, n), n;
}, Ye = 256, U = /* @__PURE__ */ new WeakMap(), Xe = (e) => typeof e == "object" && !!e, Ze = (e, t, n) => `${e}_${t}_${Je(n)}`, Qe = (e, t) => {
	if (!Xe(e)) return { hit: !1 };
	let n = U.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, W = (e, t, n) => {
	if (!Xe(e)) return n;
	let r = U.get(e);
	return r || (r = /* @__PURE__ */ new Map(), U.set(e, r)), r.size >= Ye && r.clear(), r.set(t, n), n;
}, $e = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), G = "\x1B[0m", et = "\x1B[34m", tt = "\x1B[31m", nt = "\x1B[32m", rt = "\x1B[38;5;3m", it = (e) => e, at = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = it(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, ot = (e, t) => (n, r) => at(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), K = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? G : n : G}` : e, st = (e, t = rt, n = G) => [e].flat().map((e) => K(e, t, n)).join(", ");
K("✗", tt), K("✓", nt), K("⏲", et);
var ct = () => ({}), lt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), ut = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : lt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : ut(e ? `${e}.${String(n)}` : String(n)) }), dt = /* @__PURE__ */ new Set(), ft = (e, t, n) => {
	let r = ct()[e];
	return r ? Pt(r, t, n) : (dt.has(e) || (ot({ log: ve })(typeof window > "u" ? `Dictionary ${st(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), dt.add(e)), ut(e));
}, pt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, mt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !pt(e) || !pt(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? mt(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, ht = (e, t, n) => {
	let r = (t) => e[t], i = r(t);
	if (typeof i == "string") return i;
	let a = [
		t,
		t.split("-")[0],
		n,
		n?.split("-")[0]
	], o = [];
	for (let e = 0; e < a.length; e++) {
		let t = a[e];
		if (!t || a.indexOf(t) < e) continue;
		let n = r(t);
		if (n !== void 0) {
			if (typeof n == "string") {
				if (o.length === 0) return n;
				continue;
			}
			o.push(n);
		}
	}
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => mt(e, t));
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, gt = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[C] : e[ie];
}, _t = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? C : ie;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, vt = (e, t, n, r, i) => {
	let a = _t(e, $e(gt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, yt = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, bt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = ht(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: y,
				key: e
			}]
		});
	}
}, xt = J, St = (e) => J, Ct = J, wt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => vt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = $e(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Dt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Tt = [
	b,
	te,
	x,
	w,
	T
], Et = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !Tt.includes(i)) return t;
	let a = i === "plural" || i === "enumeration";
	return (e) => {
		if (typeof e == "object" && e) return t({
			...n,
			...e
		});
		if (a) return t({
			...n,
			count: e
		});
		let i = t(e);
		return !r && yt(i) ? i(n) : i;
	};
}, Dt = (e, t) => typeof t == "function" && Tt.includes(e?.nodeType ?? "") ? (n) => Et(e, t, n) : t, Ot = J, kt = J, At = (e) => J, jt = J, Mt = (e, t = !0) => [
	bt(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
	xt,
	St(e ?? P.defaultLocale),
	Ct,
	wt,
	At(e ?? P.defaultLocale),
	jt,
	Ot,
	kt
].filter((e) => e !== J), Nt = (e, t, n = []) => O(e, {
	...t,
	plugins: n
}), Y = /* @__PURE__ */ new WeakSet(), Pt = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Ze(r ?? P.defaultLocale, "", n), o = Qe(e, a);
	if (o.hit) return o.content;
	let s = n ?? Mt(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Y.has(e)
		};
		Y.add(e);
		try {
			return Nt(e.content, t, s);
		} finally {
			t.eager && Y.delete(e);
		}
	};
	return c === null ? W(e, a, null) : Array.isArray(c) ? W(e, a, c.map(l)) : W(e, a, l(c));
}, Ft = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", It = /\{\{\s*(.*?)\s*\}\}/g, Lt = (e, t = {}) => {
	if (!Object.values(t).some(Ft)) return {
		isSimple: !0,
		parts: e.replace(It, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(It), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Rt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => Ge({
		value: t.children,
		children: t.children
	})
}, zt = J, Bt = (t, r) => {
	let i = Lt(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Vt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => vt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Bt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Dt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Ht = J, Ut = J, X = /* @__PURE__ */ new Map(), Wt = (e, t = !0) => {
	let n = `${e ?? P.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		Rt,
		bt(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
		xt,
		St(e ?? P.defaultLocale),
		Ct,
		At(e ?? P.defaultLocale),
		jt,
		Ot,
		kt,
		zt,
		Vt,
		Ht,
		Ut
	].filter((e) => e !== J);
	return X.set(n, r), r;
}, Gt = (e, t) => Pt(e, t, Wt(typeof t == "object" && t ? t.locale : t)), Kt = Be, Z = (e, t) => Ve(e, {
	...B,
	isCookieEnabled: t
}), qt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Jt = (e, t = P?.locales, n = P?.defaultLocale) => {
	if (t?.includes(e)) return e;
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
}, Yt = t({
	get locale() {
		return Kt() ?? P?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Xt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: l, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: p } = P ?? {}, [m, h] = c(() => e ?? Kt() ?? t ?? p), [g, _] = c(e);
	e !== g && (_(e), e && e !== m && h(e)), o(() => {
		qt();
	}, []);
	let ee = i((e) => {
		if (m.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			h(e), Z(e, d);
		}
	}, [
		m,
		f,
		d
	]), v = a ?? ee, y = Jt(m), b = s(() => ({
		locale: y,
		setLocale: v,
		variant: n,
		disableEditor: l
	}), [
		y,
		v,
		n,
		l
	]);
	return u(Yt.Provider, {
		value: b,
		children: r
	});
}, Zt = ({ children: e, ...t }) => d(Xt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: Qt, locales: Q } = P ?? {}, $t = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(Yt) ?? {};
	return {
		locale: n,
		defaultLocale: Qt,
		availableLocales: Q,
		setLocale: i((n) => {
			if (!Q?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), Z(n, e ?? o ?? !0), t?.(n);
		}, [
			Q,
			t,
			r,
			e
		])
	};
}, en = (e, t) => {
	let n = new Fe({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, tn = (...e) => {
	let { locale: t } = $t(), n = e.map((e) => e.key).join("\0");
	return s(() => en(t, Object.fromEntries(e.map((e) => [e.key, Gt(e, t)]))), [t, n]);
}, nn = () => {
	try {
		return Object.keys(ct());
	} catch {
		return [];
	}
}, rn = (e, t) => {
	let n = nn(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return ft(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = _(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = _(a(t), e);
		if (n !== void 0) return n;
	}
}, an = (e) => {
	let t = {};
	for (let n of nn()) try {
		Object.assign(t, g(ft(n, e)));
	} catch {}
	return t;
}, on = () => ({
	lookup: rn,
	all: an
}), sn = (t, n) => t.map((t, r) => {
	if (typeof t == "string") return t;
	let i = sn(t.children, n), a = n[t.tag];
	if (a === void 0) return u(e, { children: i }, r);
	if (typeof a == "function") return u(e, { children: a(u(l, { children: i })) }, r);
	if (typeof a == "object" && a && "type" in a) {
		let { type: e, props: t } = a;
		return u(e, {
			...t,
			children: i
		}, r);
	}
	return u(e, { children: i }, r);
}), cn = ({ id: e, message: t, values: n, components: r, render: i, component: a }, o, s) => {
	let c = o._(e, n ?? {}, { message: t }), d = r && Object.keys(r).length > 0, f;
	if (d) {
		let e = sn(Me(c), r);
		f = u(l, { children: e });
	} else f = c;
	let p = {
		id: e,
		translation: f,
		children: f,
		message: t ?? null
	};
	if (typeof i == "function") return i(p);
	let m = a ?? s;
	return m ? u(m, {
		...p,
		children: f
	}) : u(l, { children: f });
}, $ = ({ dictionary: e, ...t }) => {
	let { i18n: n } = tn(e), { defaultComponent: r } = a(p) ?? {};
	return cn(t, n, r);
}, ln = (e) => new Fe({
	...e,
	registry: on()
});
ln({ locale: "en" });
var un = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = c(() => r(e)), [s, l] = c(e.locale);
	return o(() => (a(r(e)), l(e.locale), e.on("change", () => {
		a(r(e)), l(e.locale);
	})), [e]), u(p.Provider, {
		value: i,
		children: u(Zt, {
			locale: s,
			children: n
		})
	});
};
function dn() {
	let { i18n: e } = tn(f);
	return d("div", {
		className: "grid gap-8 md:grid-cols-2",
		children: [d("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [u("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: u($, {
					id: "about-grid.whyThisExists",
					message: "Why This Exists",
					dictionary: f
				})
			}), u("p", {
				className: "text-sm text-muted-foreground",
				children: u($, {
					id: "about-grid.choosingAnI18nLibraryIs",
					message: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
					dictionary: f
				})
			})]
		}), d("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [u("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: u($, {
					id: "about-grid.methodology",
					message: "Methodology",
					dictionary: f
				})
			}), u("p", {
				className: "text-sm text-muted-foreground",
				children: u($, {
					id: "about-grid.theSame10PageApp",
					message: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
					dictionary: f
				})
			})]
		})]
	});
}
function fn(e, t) {
	let n = ln();
	return n.activate(e), n;
}
function pn({ children: e }) {
	let t = s(() => fn("en"), []);
	return u(un, {
		i18n: t,
		children: e
	});
}
function mn() {
	return u(pn, { children: u(dn, {}) });
}
export { mn as default };
