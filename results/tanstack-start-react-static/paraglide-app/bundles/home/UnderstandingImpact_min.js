import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/paraglide/runtime.js
var r = {}, i = [
	"en",
	"de",
	"fr",
	"es",
	"ja",
	"zh",
	"ko",
	"it",
	"pt"
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
//#endregion
//#region src/paraglide/messages/understanding_impact_understandingtheimpact2.js
var C = () => "Understanding the Impact", w = () => "Die Auswirkungen verstehen", T = () => "Comprendre l'impact", E = () => "Entendiendo el impacto", D = () => "影響を理解する", O = () => "理解影响", k = () => "영향 이해하기", A = () => "Capire l'impatto", j = () => "Entendendo o impacto", M = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? C(e) : n === "de" ? w(e) : n === "fr" ? T(e) : n === "es" ? E(e) : n === "ja" ? D(e) : n === "zh" ? O(e) : n === "ko" ? k(e) : n === "it" ? A(e) : j(e);
}), N = () => "Why a single large JSON can hurt performance", P = () => "Warum ein einziges großes JSON die Leistung beeinträchtigen kann", F = () => "Pourquoi un seul JSON volumineux peut nuire aux performances", I = () => "Por qué un solo JSON grande puede perjudicar el rendimiento", L = () => "ひとつの巨大な JSON がパフォーマンスを低下させる理由", R = () => "为什么单个大型 JSON 会损害性能", z = () => "단일 대형 JSON이 성능을 저하시키는 이유", B = () => "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni", V = () => "Por que um único JSON grande pode prejudicar o desempenho", H = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? N(e) : n === "de" ? P(e) : n === "fr" ? F(e) : n === "es" ? I(e) : n === "ja" ? L(e) : n === "zh" ? R(e) : n === "ko" ? z(e) : n === "it" ? B(e) : V(e);
}), U = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", W = () => "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:", G = () => "De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :", K = () => "Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:", q = () => "多くの i18n ライブラリは、React コンテキストを介して提供される単一の JSON オブジェクトに翻訳を保存します。このオブジェクトが巨大（数千のキー）な場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：", J = () => "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会持有对整个字典的引用。这意味着：", Y = () => "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 컴포넌트는 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:", X = () => "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:", Z = () => "Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? U(e) : n === "de" ? W(e) : n === "fr" ? G(e) : n === "es" ? K(e) : n === "ja" ? q(e) : n === "zh" ? J(e) : n === "ko" ? Y(e) : n === "it" ? X(e) : Z(e);
}), ne = () => "The JSON must be parsed on every page load — blocking the main thread.", re = () => "Das JSON muss bei jedem Seitenladen geparst werden — was den Haupt-Thread blockiert.", ie = () => "Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.", ae = () => "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.", oe = () => "JSON はページ読み込みのたびにパースされる必要があり、メインスレッドをブロックします。", se = () => "JSON 必须在每次页面加载时进行解析 —— 阻塞主线程。", ce = () => "JSON은 모든 페이지 로드 시 파싱되어야 하며, 이는 메인 스레드를 차단합니다.", le = () => "Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.", ue = () => "O JSON deve ser analisado em cada carga de página — bloqueando a linha de execução principal.", de = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ne(e) : n === "de" ? re(e) : n === "fr" ? ie(e) : n === "es" ? ae(e) : n === "ja" ? oe(e) : n === "zh" ? se(e) : n === "ko" ? ce(e) : n === "it" ? le(e) : ue(e);
}), fe = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", pe = () => "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.", me = () => "Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.", he = () => "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.", ge = () => "コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的な再レンダリングが発生する可能性があります。", _e = () => "基于上下文的架构在语言环境更改时会导致级联重新渲染，因为即使特定键没有更改，每个消费者都会收到通知。", ve = () => "컨텍스트 기반 아키텍처는 로케일이 변경될 때 연쇄적인 리렌더링을 일으킬 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자에게 알림이 가기 때문입니다.", ye = () => "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.", be = () => "As arquiteturas baseadas no contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.", xe = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? fe(e) : n === "de" ? pe(e) : n === "fr" ? me(e) : n === "es" ? he(e) : n === "ja" ? ge(e) : n === "zh" ? _e(e) : n === "ko" ? ve(e) : n === "it" ? ye(e) : be(e);
}), Se = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", Ce = () => "Während des serverseitigen Renderings wird das vollständige Wörterbuch in den HTML-Payload serialisiert, wodurch sich die Dokumentgröße erhöht, die heruntergeladen und hydratisiert werden muss.", we = () => "Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.", Te = () => "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.", Ee = () => "サーバーサイドレンダリング中、辞書全体が HTML ペイロードにシリアライズされ、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。", De = () => "在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。", Oe = () => "서버 사이드 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어, 다운로드 및 수화가 필요한 문서 크기가 증가합니다.", ke = () => "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idrato.", Ae = () => "Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.", je = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Se(e) : n === "de" ? Ce(e) : n === "fr" ? we(e) : n === "es" ? Te(e) : n === "ja" ? Ee(e) : n === "zh" ? De(e) : n === "ko" ? Oe(e) : n === "it" ? ke(e) : Ae(e);
}), Me = () => "The trade-offs of dynamic loading", Ne = () => "Die Kompromisse beim dynamischen Laden", Pe = () => "Les compromis du chargement dynamique", Fe = () => "Las compensaciones de la carga dinámica", Ie = () => "動的読み込みのトレードオフ", Le = () => "动态加载的权衡", Re = () => "동적 로딩의 트레이드오프", ze = () => "I compromessi del caricamento dinamico", Be = () => "As compensações do carregamento dinâmico", Ve = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Me(e) : n === "de" ? Ne(e) : n === "fr" ? Pe(e) : n === "es" ? Fe(e) : n === "ja" ? Ie(e) : n === "zh" ? Le(e) : n === "ko" ? Re(e) : n === "it" ? ze(e) : Be(e);
}), He = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", Ue = () => "Das Aufteilen von Übersetzungen in Teilstücke pro Route oder Namensraum kann den initialen Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:", We = () => "La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :", Ge = () => "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:", Ke = () => "翻訳をルートごと、または名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：", qe = () => "将翻译拆分为每个路由或每个命名空间的块可以显著减少初始负载。但它引入了新的挑战：", Je = () => "번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:", Ye = () => "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:", Xe = () => "Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:", Ze = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? He(e) : n === "de" ? Ue(e) : n === "fr" ? We(e) : n === "es" ? Ge(e) : n === "ja" ? Ke(e) : n === "zh" ? qe(e) : n === "ko" ? Je(e) : n === "it" ? Ye(e) : Xe(e);
}), Qe = () => "Waterfall requests:", $e = () => "Waterfall-Anfragen:", et = () => "Requêtes en cascade :", tt = () => "Solicitudes en cascada:", nt = () => "ウォーターフォールリクエスト:", rt = () => "瀑布流请求：", it = () => "워터폴(Waterfall) 요청:", at = () => "Richieste a cascata:", ot = () => "Pedidos em cascata:", st = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Qe(e) : n === "de" ? $e(e) : n === "fr" ? et(e) : n === "es" ? tt(e) : n === "ja" ? nt(e) : n === "zh" ? rt(e) : n === "ko" ? it(e) : n === "it" ? at(e) : ot(e);
}), ct = () => "Flash of untranslated content (FOUC):", lt = () => "Aufblitzen von nicht übersetztem Inhalt (FOUC):", ut = () => "Flash de contenu non traduit (FOUC) :", dt = () => "Parpadeo de contenido no traducido (FOUC):", ft = () => "未翻訳コンテンツのフラッシュ (FOUC):", pt = () => "未翻译内容闪烁 (FOUC)：", mt = () => "번역되지 않은 콘텐츠의 깜빡임 (FOUC):", ht = () => "Flash di contenuti non tradotti (FOUC):", gt = () => "Flash de conteúdo não traduzido (FOUC):", _t = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ct(e) : n === "de" ? lt(e) : n === "fr" ? ut(e) : n === "es" ? dt(e) : n === "ja" ? ft(e) : n === "zh" ? pt(e) : n === "ko" ? mt(e) : n === "it" ? ht(e) : gt(e);
}), vt = () => "Cache invalidation:", yt = () => "Cache-Invalidierung:", bt = () => "Invalidation du cache :", xt = () => "Invalidación de la caché:", St = () => "キャッシュの無効化:", Ct = () => "缓存失效：", wt = () => "캐시 무효화:", Tt = () => "Invalidazione della cache:", Et = () => "Invalidação de cache:", Dt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? vt(e) : n === "de" ? yt(e) : n === "fr" ? bt(e) : n === "es" ? xt(e) : n === "ja" ? St(e) : n === "zh" ? Ct(e) : n === "ko" ? wt(e) : n === "it" ? Tt(e) : Et(e);
}), Ot = () => "What this benchmark measures", kt = () => "Was dieser Benchmark misst", At = () => "Ce que ce benchmark mesure", jt = () => "Qué mide este benchmark", Mt = () => "このベンチマークが測定するもの", Nt = () => "本基准测试测量什么", $ = () => "이 벤치마크가 측정하는 것", Pt = () => "Cosa misura questo benchmark", Ft = () => "O que este benchmark mede", It = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Ot(e) : n === "de" ? kt(e) : n === "fr" ? At(e) : n === "es" ? jt(e) : n === "ja" ? Mt(e) : n === "zh" ? Nt(e) : n === "ko" ? $(e) : n === "it" ? Pt(e) : Ft(e);
}), Lt = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", Rt = () => "Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.", zt = () => "Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.", Bt = () => "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.", Vt = () => "このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツのパースとレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。", Ht = () => "此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的权重、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。", Ut = () => "이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 그리고 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.", Wt = () => "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.", Gt = () => "Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento tardio. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.", Kt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Lt(e) : n === "de" ? Rt(e) : n === "fr" ? zt(e) : n === "es" ? Bt(e) : n === "ja" ? Vt(e) : n === "zh" ? Ht(e) : n === "ko" ? Ut(e) : n === "it" ? Wt(e) : Gt(e);
});
//#endregion
//#region src/components/pages/home/UnderstandingImpact.tsx
function qt() {
	return /* @__PURE__ */ n("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			/* @__PURE__ */ t("h2", {
				className: "text-2xl font-bold text-foreground",
				children: M()
			}),
			/* @__PURE__ */ n("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					/* @__PURE__ */ t("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: H()
					}),
					/* @__PURE__ */ t("p", {
						className: "text-sm text-muted-foreground",
						children: Q()
					}),
					/* @__PURE__ */ n("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							/* @__PURE__ */ t("li", { children: de() }),
							/* @__PURE__ */ t("li", { children: xe() }),
							/* @__PURE__ */ t("li", { children: je() })
						]
					})
				]
			}),
			/* @__PURE__ */ n("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					/* @__PURE__ */ t("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: Ve()
					}),
					/* @__PURE__ */ t("p", {
						className: "text-sm text-muted-foreground",
						children: Ze()
					}),
					/* @__PURE__ */ n("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							/* @__PURE__ */ n("li", { children: [
								/* @__PURE__ */ t("strong", {
									className: "text-foreground",
									children: st()
								}),
								" ",
								"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
							] }),
							/* @__PURE__ */ n("li", { children: [
								/* @__PURE__ */ t("strong", {
									className: "text-foreground",
									children: _t()
								}),
								" ",
								"users may briefly see translation keys or a fallback language before the chunk arrives."
							] }),
							/* @__PURE__ */ n("li", { children: [
								/* @__PURE__ */ t("strong", {
									className: "text-foreground",
									children: Dt()
								}),
								" ",
								"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
							] })
						]
					})
				]
			}),
			/* @__PURE__ */ n("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [/* @__PURE__ */ t("h3", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: It()
				}), /* @__PURE__ */ t("p", {
					className: "text-sm text-muted-foreground",
					children: Kt()
				})]
			})
		]
	});
}
//#endregion
//#region scripts/Wrapper.tsx
_("en", { reload: !1 });
function Jt({ children: n }) {
	return /* @__PURE__ */ t(e, { children: n });
}
//#endregion
//#region src/components/pages/home/UnderstandingImpact.wrapper.tsx
function Yt() {
	return /* @__PURE__ */ t(Jt, { children: /* @__PURE__ */ t(qt, {}) });
}
//#endregion
export { Yt as default };
