import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t, onMount as n } from "svelte";
import { derived as r, writable as i } from "svelte/store";
var a = {
	de: () => import("./de-XWv_KeeJ.js").then((e) => e.default),
	en: () => import("./en-lBIxlhUg.js").then((e) => e.default),
	es: () => import("./es-CFR6b3o4.js").then((e) => e.default),
	fr: () => import("./fr-8KhPkoCc.js").then((e) => e.default),
	it: () => import("./it-DQKpyirt.js").then((e) => e.default),
	ja: () => import("./ja-Dvnd3F5H.js").then((e) => e.default),
	ko: () => import("./ko-DAiy0mB1.js").then((e) => e.default),
	pt: () => import("./pt-BvPt6kD5.js").then((e) => e.default),
	ru: () => import("./ru-Dx7rMEXU.js").then((e) => e.default),
	zh: () => import("./zh-BLpQrQFD.js").then((e) => e.default)
}, o = Symbol("intlayer"), s = () => t(o), c = {
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
}, l = c?.defaultLocale, u = (() => {
	let { subscribe: e, set: t, update: n } = i({ locale: l });
	return {
		subscribe: e,
		setLocale: (e) => n((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => r({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: l })
	};
})(), d = "translation", f = "object", p = "array", m = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => m(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => m(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: p,
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
					type: f,
					key: r
				}]
			}, i = m(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, h = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, g = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (h(e) && h(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : g(e[r], t[r]));
		return n;
	}
	return e;
}, _ = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => g(e, t));
}, v = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, y = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? v : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: d,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return _(o, e, t);
	}
}, b = v, x = v, S = v, C = v, w = (e) => v, T = v, E = (e, t = !0) => [
	y(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
	b,
	x,
	S,
	w(e ?? c.defaultLocale),
	T,
	C
], D = (e, t, n = []) => m(e, {
	...t,
	plugins: n
}), O = (e, t, n = E(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return D(e.content, r, n);
};
function k(t, n) {
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
var A = (e) => {
	let t = !!k.prototype?.$destroy, n;
	return n = t ? class extends k {
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
	} : (t) => k(t, {
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
}, j = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => A({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, M = j, N = v, P = v, F = v, I = /* @__PURE__ */ new Map(), L = (e, t = !0) => {
	let n = `${e ?? c.defaultLocale}_${t}`;
	if (I.has(n)) return I.get(n);
	let r = [
		y(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
		b,
		x,
		w(e ?? c.defaultLocale),
		T,
		C,
		j,
		M,
		N,
		P,
		F
	];
	return I.set(n, r), r;
}, R = (e, t) => O(e, t, L(t)), z = new Proxy(() => {}, {
	get: (e, t) => {
		if (t === Symbol.toPrimitive) return () => void 0;
		if (t === "toString") return () => "";
		if (t !== "then") return z;
	},
	apply: () => z
});
function B(e, t, n) {
	let i = s();
	return r(r(u, (e) => n ?? i?.locale ?? e.locale), (t, n) => {
		n(new Proxy({
			isLoading: !0,
			error: null
		}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : z }));
		let r = !1;
		return (async () => {
			try {
				let i = e[t];
				if (!i) return;
				let a = await i();
				if (r) return;
				n({
					...R(a, t),
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
	}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : z }));
}
function V(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), n(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var H = e.from_html("<li class=\"rounded-md border border-border p-4\"><span class=\"block text-sm font-bold text-primary\"> </span> <span class=\"mt-1 block text-sm text-muted-foreground\"> </span></li>"), U = e.from_html("<section class=\"mx-auto mt-12 max-w-3xl\"><h2 class=\"mb-4 text-2xl font-bold text-foreground\"> </h2> <ul class=\"space-y-4\"></ul></section>");
function W(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(s, "$content", i), [i, o] = e.setup_stores();
	V("WhatWeMeasure");
	let s = B(a, "what-we-measure");
	e.init();
	var c = U(), l = e.child(c), u = e.child(l, !0);
	e.reset(l);
	var d = e.sibling(l, 2);
	e.each(d, 5, () => r().metrics, (e) => e.metric, (t, n) => {
		var r = H(), i = e.child(r), a = e.child(i, !0);
		e.reset(i);
		var o = e.sibling(i, 2), s = e.child(o, !0);
		e.reset(o), e.reset(r), e.template_effect(() => {
			e.set_text(a, e.get(n).metric), e.set_text(s, e.get(n).desc);
		}), e.append(t, r);
	}), e.reset(d), e.reset(c), e.template_effect(() => e.set_text(u, r().title)), e.append(t, c), e.pop(), o();
}
export { W as default };
var e = {
	key: "what-we-measure",
	content: {
		title: "Was wir messen",
		metrics: [
			{
				metric: "Auswirkungen auf die Bundle-Größe",
				desc: "Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Download-Zeit in langsamen Netzwerken aus."
			},
			{
				metric: "Rendering-Overhead",
				desc: "Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Context Provider einfügen, können unnötige Re-Renders im gesamten Komponentenbaum verursachen."
			},
			{
				metric: "Hydratisierungskosten",
				desc: "Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen die HTML-Payload und verlangsamen die Hydratisierung – den Moment, in dem die Seite interaktiv wird."
			},
			{
				metric: "Effektivität des Lazy Loading",
				desc: "Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse dies mit sich bringt (Wasserfall-Anfragen, FOUC, Cache-Komplexität)."
			},
			{
				metric: "Geschwindigkeit des Gebietschemawechsels",
				desc: "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann – einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM."
			}
		]
	}
};
export { e as default };
var e = {
	key: "what-we-measure",
	content: {
		title: "What We Measure",
		metrics: [
			{
				metric: "Bundle size impact",
				desc: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks."
			},
			{
				metric: "Rendering overhead",
				desc: "How much extra time the library adds to the render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree."
			},
			{
				metric: "Hydration cost",
				desc: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive."
			},
			{
				metric: "Lazy loading effectiveness",
				desc: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity)."
			},
			{
				metric: "Locale switch speed",
				desc: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM."
			}
		]
	}
};
export { e as default };
var e = {
	key: "what-we-measure",
	content: {
		title: "Qué medimos",
		metrics: [
			{
				metric: "Impacto en el tamaño del paquete",
				desc: "Los bytes JavaScript adicionales enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas."
			},
			{
				metric: "Sobrecarga de renderizado",
				desc: "Cuánto tiempo extra agrega la biblioteca al ciclo de renderizado. Las bibliotecas que inyectan traductions a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes."
			},
			{
				metric: "Costo de hidratación",
				desc: "Durante el SSR, los datos de traducción se serializan en HTML. Los diccionarios grandes aumentan la carga útil de HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva."
			},
			{
				metric: "Efectividad de la carga diferida",
				desc: "Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché)."
			},
			{
				metric: "Velocidad de cambio de idioma",
				desc: "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluida la obtención de nuevas traducciones, el re-renderizado de componentes y la actualización del DOM."
			}
		]
	}
};
export { e as default };
var e = {
	key: "what-we-measure",
	content: {
		title: "Ce que nous mesurons",
		metrics: [
			{
				metric: "Impact sur la taille du bundle",
				desc: "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents."
			},
			{
				metric: "Surcharge de rendu",
				desc: "Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arborescence des composants."
			},
			{
				metric: "Coût d'hydratation",
				desc: "Pendant le SSR, les données de traduction sont sérialisées en HTML. Les dictionnaires volumineux augmentent la charge utile HTML et ralentissent l'hydratation — le moment où la page devient interactive."
			},
			{
				metric: "Efficacité du chargement différé",
				desc: "Si le fractionnement des traductions par itinéraire ou par espace de noms réduit réellement la charge initiale, et quels compromis il introduit (requêtes en cascade, FOUC, complexité du cache)."
			},
			{
				metric: "Vitesse de changement de langue",
				desc: "À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération de nouvelles traductions, le re-rendu des composants et la mise à jour du DOM."
			}
		]
	}
};
export { e as default };
var e = {
	key: "what-we-measure",
	content: {
		title: "Cosa misuriamo",
		metrics: [
			{
				metric: "Impatto sulla dimensione del bundle",
				desc: "I byte JavaScript aggiuntivi inviati agli utenti quando sono incluse la libreria i18n e i relativi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente."
			},
			{
				metric: "Sovraccarico di rendering",
				desc: "Quanto tempo extra la libreria aggiunge al ciclo di rendering. Le librerie che iniettano traduzioni tramite un singolo provider di contesto possono causare re-rendering non necessari nell'albero dei componenti."
			},
			{
				metric: "Costo di idratazione",
				desc: "Durante l'SSR, i dati di traduzione vengono serializzati in HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione, il momento in que la pagina diventa interattiva."
			},
			{
				metric: "Efficacia del caricamento pigro",
				desc: "Se la suddivisione delle traduzioni per percorso o spazio dei nomi riduce effettivamente il carico iniziale e quali compromessi introduce (richieste a cascata, FOUC, complessità della cache)."
			},
			{
				metric: "Velocità di cambio della lingua",
				desc: "Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione, incluso il recupero di nuove traduzioni, il re-rendering dei componenti e l'aggiornamento del DOM."
			}
		]
	}
};
export { e as default };
var e = {
	key: "what-we-measure",
	content: {
		title: "測定項目",
		metrics: [
			{
				metric: "バンドルサイズへの影響",
				desc: "i18n ライブラリとその翻訳ファイルが含まれている場合にユーザーに送信される追加の JavaScript バイト。これは、低速ネットワークでのダウンロード時間に直接影響します。"
			},
			{
				metric: "レンダリングのオーバーヘッド",
				desc: "ライブラリがレンダリングサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不必要な再レンダリングを引き起こす可能性があります。"
			},
			{
				metric: "ハイドレーションコスト",
				desc: "SSR 中、翻訳データは HTML にシリアル化されます。大きな辞書は HTML ペイロードを増加させ、ハイドレーション（ページがインタラクティブになる瞬間）を遅らせます。"
			},
			{
				metric: "遅延読み込みの有効性",
				desc: "ルートまたは名前空間ごとに翻訳を分割することが実際に初期負荷を軽減するかどうか、およびどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。"
			},
			{
				metric: "ロケール切り替え速度",
				desc: "実行時にアプリがある言語から別の言語にどれだけ速く切り替わることができるか。これには、新しい翻訳の取得、コンポーネントの再レンダリング、および DOM の更新が含まれます。"
			}
		]
	}
};
export { e as default };
var e = {
	key: "what-we-measure",
	content: {
		title: "측정 항목",
		metrics: [
			{
				metric: "번들 크기 영향",
				desc: "i18n 라이브러리 및 해당 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다."
			},
			{
				metric: "렌더링 오버헤드",
				desc: "라이브러리가 렌더링 주기에 추가하는 추가 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 구성 요소 트리 전체에서 불필요한 재렌더링을 유발할 수 있습니다."
			},
			{
				metric: "하이드레이션 비용",
				desc: "SSR 동안 번역 데이터는 HTML로 직렬화됩니다. 대용량 사전은 HTML 페이로드를 증가시키고 하이드레이션(페이지가 상호 작용하게 되는 순간)을 늦춥니다."
			},
			{
				metric: "지연 로딩 효과",
				desc: "경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(폭포수 요청, FOUC, 캐시 복잡성)를 유발하는지 여부입니다."
			},
			{
				metric: "로케일 전환 속도",
				desc: "런타임에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환할 수 있는지(새 번역 가져오기, 구성 요소 재렌더링 및 DOM 업데이트 포함)입니다."
			}
		]
	}
};
export { e as default };
var e = {
	key: "what-we-measure",
	content: {
		title: "O que medimos",
		metrics: [
			{
				metric: "Impacto no tamanho do bundle",
				desc: "Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas."
			},
			{
				metric: "Sobrecarga de renderização",
				desc: "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização. Bibliotecas que injetam traduções por meio de um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes."
			},
			{
				metric: "Custo de hidratação",
				desc: "Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga útil do HTML e retardam a hidratação — o momento em que a página se torna interativa."
			},
			{
				metric: "Eficácia do carregamento lento",
				desc: "Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações introduz (solicitações em cascata, FOUC, complexidade de cache)."
			},
			{
				metric: "Velocidade de mudança de localidade",
				desc: "Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM."
			}
		]
	}
};
export { e as default };
var e = {
	key: "what-we-measure",
	content: {
		title: "Что мы измеряем",
		metrics: [
			{
				metric: "Влияние на размер бандла",
				desc: "Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях."
			},
			{
				metric: "Издержки на рендеринг",
				desc: "Сколько дополнительного времени библиотека добавляет к циклу рендеринга. Библиотеки, которые внедряют переводы через единый контекст-провайдер, могут вызывать ненужные повторные рендеринги во всем дереве компонентов."
			},
			{
				metric: "Стоимость гидратации",
				desc: "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML и замедляют гидратацию — момент, когда страница становится интерактивной."
			},
			{
				metric: "Эффективность ленивой загрузки",
				desc: "Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования)."
			},
			{
				metric: "Скорость переключения локали",
				desc: "Насколько быстро приложение может переключаться с одного языка на другой во время выполнения, включая получение новых переводов, повторный рендеринг компонентов и обновление DOM."
			}
		]
	}
};
export { e as default };
var e = {
	key: "what-we-measure",
	content: {
		title: "我们的衡量标准",
		metrics: [
			{
				metric: "包大小影响",
				desc: "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络上的下载时间。"
			},
			{
				metric: "渲染开销",
				desc: "库为渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树中不必要的重新渲染。"
			},
			{
				metric: "注水成本",
				desc: "在 SSR 期间，翻译数据被序列化为 HTML。大型词典会增加 HTML 负载并减慢注水速度——即页面变得可交互的时刻。"
			},
			{
				metric: "延迟加载有效性",
				desc: "按路由或命名空间拆分翻译是否确实减少了初始加载，以及它引入了哪些权衡（瀑布请求、FOUC、缓存复杂性）。"
			},
			{
				metric: "语言切换速度",
				desc: "应用程序在运行时从一种语言切换到另一种语言的速度——包括获取新翻译、重新渲染组件和更新 DOM。"
			}
		]
	}
};
export { e as default };
