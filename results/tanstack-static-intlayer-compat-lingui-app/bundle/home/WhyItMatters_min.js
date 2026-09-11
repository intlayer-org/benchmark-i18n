import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { jsxDEV as p } from "react/jsx-dev-runtime";
var m = {
	key: "why-it-matters",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"bundleSize\":\"Bundle Size\",\"connectingALargeJsonDictionary\":\"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\",\"dynamicLoading\":\"Dynamic Loading\",\"loadingAllTranslationsUpfrontOverloads\":\"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\",\"renderingHydration\":\"Rendering & Hydration\",\"theBundleIsTheData\":\"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\",\"whyTheseMetricsMatter\":\"Why These Metrics Matter\"},\"fr\":{\"bundleSize\":\"Taille du bundle\",\"connectingALargeJsonDictionary\":\"La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arbre. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).\",\"dynamicLoading\":\"Chargement dynamique\",\"loadingAllTranslationsUpfrontOverloads\":\"Le chargement de toutes les traductions à l'avance surcharge le payload initial. Le chargement dynamique (lazy) divise les traductions par route ou par namespace, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel.\",\"renderingHydration\":\"Rendu & Hydratation\",\"theBundleIsTheData\":\"Le bundle représente les données envoyées à chaque utilisateur dans le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur des connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.\",\"whyTheseMetricsMatter\":\"Pourquoi ces mesures sont importantes\"},\"es\":{\"bundleSize\":\"Tamaño del bundle\",\"connectingALargeJsonDictionary\":\"Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).\",\"dynamicLoading\":\"Carga dinámica\",\"loadingAllTranslationsUpfrontOverloads\":\"Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.\",\"renderingHydration\":\"Renderizado e hidratación\",\"theBundleIsTheData\":\"El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.\",\"whyTheseMetricsMatter\":\"Por qué son importantes estas métricas\"},\"de\":{\"bundleSize\":\"Bundle-Größe\",\"connectingALargeJsonDictionary\":\"Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratisierung führt das Parsen und Anhängen massiver Übersetzungsobjekte zu Latenzzeiten, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.\",\"dynamicLoading\":\"Dynamisches Laden\",\"loadingAllTranslationsUpfrontOverloads\":\"Das Laden aller Übersetzungen im Voraus überlastet den initialen Payload. Dynamisches (Lazy) Loading teilt Übersetzungen nach Route oder Namensraum auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen von nicht übersetzten Inhalten (FOUC) und Cache-Komplexität. Die Messung beider Strategien ist essenziell.\",\"renderingHydration\":\"Rendering & Hydratisierung\",\"theBundleIsTheData\":\"Das Bundle sind die Daten, die an jeden Benutzer weltweit gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von einigen Kilobytes bis zu zig Kilobytes an Laufzeitcode, plus die Übersetzungsdateien selbst.\",\"whyTheseMetricsMatter\":\"Warum diese Metriken wichtig sind\"},\"it\":{\"bundleSize\":\"Dimensione del bundle\",\"connectingALargeJsonDictionary\":\"Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).\",\"dynamicLoading\":\"Caricamento dinamico\",\"loadingAllTranslationsUpfrontOverloads\":\"Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.\",\"renderingHydration\":\"Rendering e idratazione\",\"theBundleIsTheData\":\"Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.\",\"whyTheseMetricsMatter\":\"Perché queste metriche sono importanti\"},\"pt\":{\"bundleSize\":\"Tamanho do Bundle\",\"connectingALargeJsonDictionary\":\"Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode desencadear novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).\",\"dynamicLoading\":\"Carregamento Dinâmico\",\"loadingAllTranslationsUpfrontOverloads\":\"Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento tardio introduz suas próprias compensações: solicitações em cascada, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.\",\"renderingHydration\":\"Renderização e Hidratação\",\"theBundleIsTheData\":\"O bundle representa os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução.\",\"whyTheseMetricsMatter\":\"Por que essas métricas são importantes\"},\"zh\":{\"bundleSize\":\"包大小\",\"connectingALargeJsonDictionary\":\"将大型 JSON 字典连接到每个组件会创建一个隐藏的依赖：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加庞大的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。\",\"dynamicLoading\":\"动态加载\",\"loadingAllTranslationsUpfrontOverloads\":\"预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。\",\"renderingHydration\":\"渲染与注水\",\"theBundleIsTheData\":\"包是发送给全球每个用户的数据。更大的包意味着更长的下载时间——特别是在许多地区常见的慢速 3G 连接上。i18n 库的权重差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。\",\"whyTheseMetricsMatter\":\"为什么这些指标很重要\"},\"ja\":{\"bundleSize\":\"バンドルサイズ\",\"connectingALargeJsonDictionary\":\"巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更がツリー全体の再レンダリングを引き起こす可能性があります。SSRのハイドレーション中、巨大な翻訳オブジェクトのパースとアタッチにより、ページがインタラクティブになるまでの遅延が発生し、Time to Interactive (TTI) に直接影響します。\",\"dynamicLoading\":\"動的ローディング\",\"loadingAllTranslationsUpfrontOverloads\":\"すべての翻訳を事前に読み込むと、初期のペイロードが過負荷になります。動的（遅延）読み込みは、ルートまたは名前空間ごとに翻訳を分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、未翻訳コンテンツのフラッシュ、キャッシュの複雑化といった独自のトレードオフがあります。両方の戦略を測定することが不可欠です。\",\"renderingHydration\":\"レンダリングとハイドレーション\",\"theBundleIsTheData\":\"バンドルは、世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。特に多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリはその重量が劇的に異なります。ランタイムコードだけで数キロバイトから数十キロバイト、さらに翻訳ファイル自体が加わります。\",\"whyTheseMetricsMatter\":\"これらの指標が重要な理由\"},\"ko\":{\"bundleSize\":\"번들 크기\",\"connectingALargeJsonDictionary\":\"모든 컴포넌트에 대규모 JSON 사전(dictionary)을 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트의 모든 변경 사항은 전체 트리에서 리렌더링을 유발할 수 있습니다. SSR 수화 단계에서 방대한 번역 객체를 파싱하고 연결하면 페이지가 상호작용 가능해지는 시간까지 지연이 발생하며, 이는 Time to Interactive(TTI)에 직접적인 영향을 미칩니다.\",\"dynamicLoading\":\"동적 로딩\",\"loadingAllTranslationsUpfrontOverloads\":\"모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 내용만 전송합니다. 그러나 지연 로딩은 워터폴 요청, 번역되지 않은 콘텐츠의 깜빡임(FOUC), 캐시 복잡성 등 자체적인 트레이드오프를 수반합니다. 두 전략을 모두 측정하는 것이 필수적입니다.\",\"renderingHydration\":\"렌더링 및 수화(Hydration)\",\"theBundleIsTheData\":\"번들은 전 세계 모든 사용자에게 전송되는 데이터를 나타냅니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 발생하는 느린 3G 연결에서 더욱 그렇습니다. i18n 라이브러리는 런타임 코드만으로도 수 킬로바이트에서 수십 킬로바이트까지 무게가 크게 다르며, 여기에 번역 파일 자체가 추가됩니다.\",\"whyTheseMetricsMatter\":\"이 지표가 중요한 이유\"},\"ru\":{\"bundleSize\":\"Размер бандла\",\"connectingALargeJsonDictionary\":\"Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода добавляют задержку до того, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).\",\"dynamicLoading\":\"Динамическая загрузка\",\"loadingAllTranslationsUpfrontOverloads\":\"Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно для текущей страницы. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfall), мерцание непереведенного контента и сложность кэширования. Измерение обеих стратегий необходимо.\",\"renderingHydration\":\"Рендеринг и гидратация\",\"theBundleIsTheData\":\"Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой размер бандла означает более долгое время загрузки, особенно при медленном 3G-соединении, характерном для многих регионов. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт рантайм-кода, плюс сами файлы переводов.\",\"whyTheseMetricsMatter\":\"Почему эти показатели важны\"}}}")
}, ee = class {
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
}, te = (e, t) => {
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
}, h = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, g = (e, t) => {
	let n = te(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return te(n, t);
	}
}, ne = (e) => {
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
			i.push(`${t} {${re(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, re = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(ne).join("") : String(e ?? ""), ie = "translation", ae = "enumeration", oe = "plural", _ = "insertion", se = "object", ce = "array", v = "markdown", y = "html", b = "gender", le = "select", x = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), S = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => S(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => S(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ce,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: se,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = S(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = S(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, ue = (e) => x(ae, e), de = (e) => x(b, e), fe = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, C = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = fe(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, pe = /* @__PURE__ */ new Set([
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
]), me = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, he = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(me)) {
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
				let e = pe.has(i.toLowerCase());
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
}, w = (e, t) => x(y, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = he(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return C(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => C(await e)), typeof n == "string") return C(n);
	try {
		return C(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), T = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, E = (e) => x(_, e, { fields: (() => {
	if (typeof e == "string") return T(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => T(await e)), typeof t == "string") return T(t);
	try {
		return T(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), ge = (e) => x(oe, e), _e = (e, t) => x(le, e, { variable: t }), ve = (e) => {
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
}, D = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? w(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? w(t) : E(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? w(t) : t;
		if (t.type === "argument") return t.format ? E(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : E(`{{${t.name}}}`);
		if (t.type === "plural") {
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
					e[i] = D(a);
				}
				return e.__intlayer_icu_var = t.name, ue(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = D(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return ge(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = D(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? de({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : _e(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = D(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, ue(e);
		}
	}
	return e.map((e) => D([e]));
}, ye = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return D(ve(e));
		} catch {
			return e;
		}
	}
}, be = (e) => S(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...ye
	}]
}), xe = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Se = (e, t) => e[xe(e, t) ?? "fallback"], O = {
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
}, k = {
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
}, Ce = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, we = 50, A = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Set(), Te = (e) => {
	j.has(e) || (j.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ee = {
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
}, De = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Te(e), Ee[e]);
};
function M(e, t, n) {
	let r = t ?? O?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = A.get(a);
	o || (o = /* @__PURE__ */ new Map(), A.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? De(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > we && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Oe = (e, t, n) => e[M("PluralRules", n).select(t)] ?? e.other, ke = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, N = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], P = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, F = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? M("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? M("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : M("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return M("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Ae = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = P(t, r);
	return o === void 0 ? e : i ? F(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = P(t, r);
	return o === void 0 ? e : F(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = P(t, n);
	return r === void 0 ? e : String(r);
}), I = (e, t) => e[t] ?? e.count ?? e.n, L = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Ae(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return L(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(L(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return L(r[_], t, n);
	if (r.nodeType === "html") return L(r[y], t, n);
	if (r.nodeType === "plural") {
		let e = r[oe];
		return L(Oe(e, Number(I(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ae], i = N.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) N.includes(t) || (o[t] = n);
		let s = I(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = M("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Se(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return L(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[le], i = I(t, typeof r.variable == "string" ? r.variable : "value");
		return L(ke(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[b];
		return L(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, je = (e, t = {}, n = "en") => {
	let r = L(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Me = (e) => (t, n = {}, r = "en") => je(typeof t == "string" ? e(t) : t, n, r), Ne = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: Ne(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, Pe = Me(be), Fe = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, Ie = class extends ee {
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
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, h(t));
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
		let { dictionaryKey: t, remainder: n } = Fe(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = g(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = g(t, e);
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
			let t = g(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: re(t)
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
		return (c.kind === "node" ? je(c.node, o, s) : Pe(c.message, o, s)) ?? i;
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
}, Le = t(null), Re = /* @__PURE__ */ new WeakMap(), ze = 0, Be = (e) => {
	if (!e) return "base";
	let t = Re.get(e);
	if (t) return t;
	ze += 1;
	let n = `p${ze}`;
	return Re.set(e, n), n;
}, Ve = 256, R = /* @__PURE__ */ new WeakMap(), He = (e) => typeof e == "object" && !!e, Ue = (e, t, n) => `${e}_${t}_${Be(n)}`, We = (e, t) => {
	if (!He(e)) return { hit: !1 };
	let n = R.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, z = (e, t, n) => {
	if (!He(e)) return n;
	let r = R.get(e);
	return r || (r = /* @__PURE__ */ new Map(), R.set(e, r)), r.size >= Ve && r.clear(), r.set(t, n), n;
}, Ge = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), B = "default", Ke = /[^A-Za-z0-9._&=-]/g, qe = /[^A-Za-z0-9._-]/g, Je = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, V = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Je);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Ye = (e) => e === void 0 ? B : typeof e == "string" ? V(e, Ke) : Object.keys(e).sort().map((t) => `${V(t, qe)}=${V(String(e[t]), qe)}`).join("&"), H = (e) => Array.isArray(e) ? e.length === 0 ? [B] : e.map(Ye) : [Ye(e)], Xe = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? B : e[0] ?? "default";
}, Ze = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Qe = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, $e = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, et = (e, t) => {
	if (!Qe(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? B : Xe(H(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Ze(e, n, t, s)).map((t) => $e(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, tt = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, nt = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? H(n).join(",") : String(n)}`;
}).join("|") : "", U = "\x1B[0m", rt = "\x1B[34m", it = "\x1B[31m", at = "\x1B[32m", ot = "\x1B[38;5;3m", st = (e) => e, ct = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = st(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, lt = (e, t) => (n, r) => ct(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), W = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? U : n : U}` : e, ut = (e, t = ot, n = U) => [e].flat().map((e) => W(e, t, n)).join(", ");
W("✗", it), W("✓", at), W("⏲", rt);
var dt = () => ({}), ft = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), pt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : ft.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : pt(e ? `${e}.${String(n)}` : String(n)) }), mt = /* @__PURE__ */ new Set(), ht = (e, t, n) => {
	let r = dt()[e];
	return r ? Nt(r, t, n) : (mt.has(e) || (lt({ log: Ce })(typeof window > "u" ? `Dictionary ${ut(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), mt.add(e)), pt(e));
}, gt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, _t = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (gt(e) && gt(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : _t(e[r], t[r]));
		return n;
	}
	return e;
}, vt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => _t(e, t));
}, G = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, yt = (e) => {
	if (typeof e == "string") return e;
	if (G(e)) return e.nodeType === "html" ? e[y] : e[v];
}, bt = (e, t) => {
	if (typeof e == "string") return t;
	if (G(e)) {
		let n = e.nodeType === "html" ? y : v;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, xt = (e, t, n, r, i) => {
	let a = bt(e, Ge(yt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, K = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, St = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? K : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ie,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return vt(o, e, t);
	}
}, Ct = K, wt = (e) => K, Tt = K, Et = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || G(e),
			transform: (e, n, r) => {
				if (G(e)) return (i) => xt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ge(i, e);
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
}, Dt = K, Ot = K, kt = (e) => K, At = K, jt = (e, t = !0) => [
	St(e ?? O.defaultLocale, t ? O.defaultLocale : void 0),
	Ct,
	Tt,
	Et,
	kt(e ?? O.defaultLocale),
	At,
	Dt,
	Ot
], Mt = (e, t, n = []) => S(e, {
	...t,
	plugins: n
}), Nt = (e, t, n) => {
	let { locale: r, selector: i } = tt(t), a = Ue(r ?? O.defaultLocale, nt(i), n), o = We(e, a);
	if (o.hit) return o.content;
	let s = n ?? jt(r), c = et(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Mt(e.content, t, s);
	};
	return c === null ? z(e, a, null) : Array.isArray(c) ? z(e, a, c.map(l)) : z(e, a, l(c));
}, Pt = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Ft = /\{\{\s*(.*?)\s*\}\}/g, It = (e, t = {}) => {
	if (!Object.values(t).some(Pt)) return {
		isSimple: !0,
		parts: e.replace(Ft, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Ft), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Lt = () => {
	try {
		return Object.keys(dt());
	} catch {
		return [];
	}
}, Rt = (e, t) => {
	let n = Lt(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return ht(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = g(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = g(a(t), e);
		if (n !== void 0) return n;
	}
}, zt = (e) => {
	let t = {};
	for (let n of Lt()) try {
		Object.assign(t, h(ht(n, e)));
	} catch {}
	return t;
}, Bt = () => ({
	lookup: Rt,
	all: zt
}), Vt = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : d(u, { children: e });
	return new Proxy(i, { get(e, r, i) {
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
}, Ht = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => Vt({
		...n,
		value: n.children,
		children: n.children
	})
}, Ut = K, Wt = (t, r) => {
	let i = It(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Gt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || G(e),
			transform: (e, n, r) => {
				if (G(e)) return (i) => xt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Wt(i, e);
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
}, Kt = K, qt = K, q = /* @__PURE__ */ new Map(), Jt = (e, t = !0) => {
	let n = `${e ?? O.defaultLocale}_${t}`;
	if (q.has(n)) return q.get(n);
	let r = [
		St(e ?? O.defaultLocale, t ? O.defaultLocale : void 0),
		Ct,
		wt(e ?? O.defaultLocale),
		Tt,
		kt(e ?? O.defaultLocale),
		At,
		Dt,
		Ot,
		Ht,
		Ut,
		Gt,
		Kt,
		qt
	];
	return q.set(n, r), r;
}, Yt = (e, t) => Nt(e, t, Jt(typeof t == "object" && t ? t.locale : t)), Xt = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Zt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Xt(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Qt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var J = {
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
}, $t = (e = J) => {
	let { locales: t } = O;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Qt) for (let t = 0; t < (k.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(k.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, en = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Qt && k.storage.cookies) for (let n = 0; n < k.storage.cookies.length; n++) {
		let { name: r, attributes: i } = k.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Xt(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Zt(r, e, i));
			} catch {}
		}
	}
}, tn = $t(J), nn = (e, t) => en(e, {
	...J,
	isCookieEnabled: t
}), rn = () => {
	let { locale: e } = a(Y) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, an = ({ children: e }) => (rn(), e), on = () => {
	let { locale: e } = a(Y) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, sn = ({ children: e }) => (on(), e), cn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, ln = (e, t = O?.locales, n = O?.defaultLocale) => {
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
}, Y = t({
	locale: tn ?? O?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), un = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = O ?? {}, [f, p] = l(e ?? tn ?? t ?? u);
	o(() => {
		e && e !== f && p(e);
	}, [e]), o(() => {
		cn();
	}, []);
	let m = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), nn(e, s);
		}
	}), ee = ln(f);
	return d(Y.Provider, {
		value: {
			locale: ee,
			setLocale: m,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, dn = ({ children: e, ...t }) => f(un, {
	...t,
	children: [
		d(an, {}),
		d(sn, {}),
		e
	]
}), { defaultLocale: fn, locales: X } = O ?? {}, pn = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(Y) ?? {};
	return {
		locale: n,
		defaultLocale: fn,
		availableLocales: X,
		setLocale: i((n) => {
			if (!X?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), nn(n, e ?? o ?? !0), t?.(n);
		}, [
			X,
			t,
			r,
			e
		])
	};
}, mn = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = l(() => r(e)), [s, c] = l(e.locale);
	return o(() => (a(r(e)), c(e.locale), e.on("change", () => {
		a(r(e)), c(e.locale);
	})), [e]), d(Le.Provider, {
		value: i,
		children: d(dn, {
			locale: s,
			children: n
		})
	});
}, hn = (e, t) => {
	let n = new Ie({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, gn = (...e) => {
	let { locale: t } = pn(), n = e.map((e) => e.key).join("\0");
	return s(() => hn(t, Object.fromEntries(e.map((e) => [e.key, Yt(e, t)]))), [t, n]);
}, _n = (t, n) => t.map((t, r) => {
	if (typeof t == "string") return t;
	let i = _n(t.children, n), a = n[t.tag];
	if (a === void 0) return d(e, { children: i }, r);
	if (typeof a == "function") return d(e, { children: a(d(u, { children: i })) }, r);
	if (typeof a == "object" && a && "type" in a) {
		let { type: e, props: t } = a;
		return d(e, {
			...t,
			children: i
		}, r);
	}
	return d(e, { children: i }, r);
}), vn = ({ id: e, message: t, values: n, components: r, render: i, component: a }, o, s) => {
	let c = o._(e, n ?? {}, { message: t }), l = r && Object.keys(r).length > 0, f;
	if (l) {
		let e = _n(Ne(c), r);
		f = d(u, { children: e });
	} else f = c;
	let p = {
		id: e,
		translation: f,
		children: f,
		message: t ?? null
	};
	if (typeof i == "function") return i(p);
	let m = a ?? s;
	return m ? d(m, {
		...p,
		children: f
	}) : d(u, { children: f });
}, Z = ({ dictionary: e, ...t }) => {
	let { i18n: n } = gn(e), { defaultComponent: r } = a(Le) ?? {};
	return vn(t, n, r);
}, yn = (e) => new Ie({
	...e,
	registry: Bt()
});
yn({ locale: "en" });
var Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/src/components/pages/home/WhyItMatters.tsx";
function bn() {
	let { i18n: e } = gn(m);
	return p("section", {
		className: "mb-16",
		children: [p("h2", {
			className: "mb-6 text-2xl font-bold text-foreground",
			children: p(Z, {
				id: "why-it-matters.whyTheseMetricsMatter",
				message: "Why These Metrics Matter",
				dictionary: m
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 10,
				columnNumber: 9
			}, this)
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 9,
			columnNumber: 7
		}, this), p("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: [
				p("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [p("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: p(Z, {
							id: "why-it-matters.bundleSize",
							message: "Bundle Size",
							dictionary: m
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 18,
							columnNumber: 13
						}, this)
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 17,
						columnNumber: 11
					}, this), p("p", {
						className: "text-sm text-muted-foreground",
						children: p(Z, {
							id: "why-it-matters.theBundleIsTheData",
							message: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
							dictionary: m
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 21,
							columnNumber: 13
						}, this)
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 20,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 16,
					columnNumber: 9
				}, this),
				p("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [p("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: p(Z, {
							id: "why-it-matters.renderingHydration",
							message: "Rendering & Hydration",
							dictionary: m
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 29,
							columnNumber: 13
						}, this)
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 28,
						columnNumber: 11
					}, this), p("p", {
						className: "text-sm text-muted-foreground",
						children: p(Z, {
							id: "why-it-matters.connectingALargeJsonDictionary",
							message: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
							dictionary: m
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 35,
							columnNumber: 13
						}, this)
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 34,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 27,
					columnNumber: 9
				}, this),
				p("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [p("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: p(Z, {
							id: "why-it-matters.dynamicLoading",
							message: "Dynamic Loading",
							dictionary: m
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 43,
							columnNumber: 13
						}, this)
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 42,
						columnNumber: 11
					}, this), p("p", {
						className: "text-sm text-muted-foreground",
						children: p(Z, {
							id: "why-it-matters.loadingAllTranslationsUpfrontOverloads",
							message: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
							dictionary: m
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 49,
							columnNumber: 13
						}, this)
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 48,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 41,
					columnNumber: 9
				}, this)
			]
		}, void 0, !0, {
			fileName: Q,
			lineNumber: 15,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: Q,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
function xn(e, t) {
	let n = yn();
	return n.activate(e), n;
}
var Sn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/scripts/Wrapper.tsx";
function Cn({ children: e }) {
	let t = s(() => xn("en"), []);
	return p(mn, {
		i18n: t,
		children: e
	}, void 0, !1, {
		fileName: Sn,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/src/components/pages/home/WhyItMatters.wrapper.tsx";
function wn() {
	return p(Cn, { children: p(bn, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { wn as default };
