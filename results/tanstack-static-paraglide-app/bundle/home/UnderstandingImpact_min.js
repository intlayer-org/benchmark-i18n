import "react";
import { Fragment as e, jsxDEV as t } from "react/jsx-dev-runtime";
var n = {}, r = [
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
], i = "PARAGLIDE_LOCALE", a = 3456e4, o = [
	"cookie",
	"globalVariable",
	"baseLocale"
], s = [], c = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var l, u = !1, d = () => {
	let e = o;
	!c && typeof window < "u" && window.location?.href && (e = T(window.location.href));
	let t = f(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return u || (l = t, u = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function f(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ie();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && l !== void 0) n = l;
		else if (D(t) && E.has(t)) {
			let e = E.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return g(t);
			}
		}
		let e = h(n);
		if (e) return e;
	}
}
var p = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = d();
	} catch {}
	let s = [], u = o;
	!c && typeof window < "u" && window.location?.href && (u = T(window.location.href));
	for (let t of u) if (t === "globalVariable") l = e;
	else if (t === "cookie") {
		if (c || typeof document > "u" || typeof window > "u") continue;
		let t = `${i}=${e}; path=/; max-age=${a}`;
		document.cookie = t, x();
	} else if (t === "baseLocale") continue;
	else if (D(t) && E.has(t)) {
		let n = E.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), s.push(r));
		}
	}
	let f = () => {
		!c && n.reload && window.location && e !== r && p(void 0);
	};
	if (s.length) return Promise.all(s).then(() => {
		f();
	});
	f();
}, ee = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function h(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of r) if (e.toLowerCase() === t) return e;
}
function g(e) {
	let t = h(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${r.join(", ")}`);
}
function _(e) {
	return e;
}
function te(e, t) {
	return e.exec(t.href);
}
var ne = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), v = RegExp(`(?:^|;\\s*)${ne}=([^;]*)`), y = Symbol(), b = y;
function x() {
	b = y;
}
function re() {
	typeof queueMicrotask == "function" ? queueMicrotask(x) : Promise.resolve().then(x);
}
function ie() {
	if (typeof document > "u") return;
	if (b !== y) return b;
	let e = document.cookie.match(v)?.[1];
	return b = h(e), re(), b;
}
function ae(e) {
	return oe(e);
}
function oe(e) {
	let t = _(typeof e == "string" ? new URL(e, ee()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var S, C;
function w(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (S === t) return C;
	let r = _(new URL(t, "http://example.com")), i = ae(r), a = i.href === r.href ? [r] : [r, i], o;
	for (let e of a) {
		for (let t of s) if (te(new n(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return S = t, C = o, o;
}
function T(e) {
	let t = w(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var E = /* @__PURE__ */ new Map();
function D(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var O = () => "Cache invalidation:", k = () => "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.", A = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", j = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", M = () => "Flash of untranslated content (FOUC):", N = () => "users may briefly see translation keys or a fallback language before the chunk arrives.", P = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", F = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", I = () => "The JSON must be parsed on every page load — blocking the main thread.", L = () => "The trade-offs of dynamic loading", R = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", z = () => "Understanding the Impact", B = () => "Waterfall requests:", V = () => "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.", H = () => "What this benchmark measures", U = () => "Why a single large JSON can hurt performance", W = () => "Invalidation du cache :", G = () => "la mise à jour des traductions nécessite des stratégies de purge du cache pour garantir que les utilisateurs reçoivent le contenu frais sans re-télécharger les morceaux inchangés.", K = () => "Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.", q = () => "Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.", se = () => "Flash de contenu non traduit (FOUC) :", ce = () => "les utilisateurs peuvent brièvement voir les clés de traduction ou une langue de repli avant l'arrivée du morceau.", le = () => "De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :", ue = () => "La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :", de = () => "Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.", fe = () => "Les compromis du chargement dynamique", pe = () => "Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.", me = () => "Comprendre l'impact", he = () => "Requêtes en cascade :", ge = () => "l'application doit d'abord se charger, déterminer la langue, puis récupérer le bon morceau — ajoutant des allers-retours réseau.", _e = () => "Ce que ce benchmark mesure", ve = () => "Pourquoi un seul JSON volumineux peut nuire aux performances", ye = () => "Invalidación de la caché:", be = () => "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.", xe = () => "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.", Se = () => "Parpadeo de contenido no traducido (FOUC):", Ce = () => "Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:", we = () => "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:", Te = () => "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.", Ee = () => "Las compensaciones de la carga dinámica", De = () => "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.", Oe = () => "Entendiendo el impacto", ke = () => "Solicitudes en cascada:", Ae = () => "Qué mide este benchmark", je = () => "Por qué un solo JSON grande puede perjudicar el rendimiento", Me = () => "Cache-Invalidierung:", Ne = () => "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.", Pe = () => "Während des serverseitigen Renderings wird das vollständige Wörterbuch in den HTML-Payload serialisiert, wodurch sich die Dokumentgröße erhöht, die heruntergeladen und hydratisiert werden muss.", Fe = () => "Aufblitzen von nicht übersetztem Inhalt (FOUC):", Ie = () => "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:", Le = () => "Das Aufteilen von Übersetzungen in Teilstücke pro Route oder Namensraum kann den initialen Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:", Re = () => "Das JSON muss bei jedem Seitenladen geparst werden — was den Haupt-Thread blockiert.", ze = () => "Die Kompromisse beim dynamischen Laden", Be = () => "Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.", Ve = () => "Die Auswirkungen verstehen", He = () => "Waterfall-Anfragen:", Ue = () => "Was dieser Benchmark misst", We = () => "Warum ein einziges großes JSON die Leistung beeinträchtigen kann", Ge = () => "Invalidazione della cache:", Ke = () => "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.", qe = () => "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idrato.", Je = () => "Flash di contenuti non tradotti (FOUC):", Ye = () => "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:", Xe = () => "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:", Ze = () => "Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.", Qe = () => "I compromessi del caricamento dinamico", $e = () => "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.", et = () => "Capire l'impatto", tt = () => "Richieste a cascata:", nt = () => "Cosa misura questo benchmark", rt = () => "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni", it = () => "Invalidação de cache:", at = () => "As arquiteturas baseadas no contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.", ot = () => "Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.", st = () => "Flash de conteúdo não traduzido (FOUC):", ct = () => "Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:", lt = () => "Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:", ut = () => "O JSON deve ser analisado em cada carga de página — bloqueando a linha de execução principal.", dt = () => "As compensações do carregamento dinâmico", ft = () => "Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento tardio. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.", pt = () => "Entendendo o impacto", mt = () => "Pedidos em cascata:", ht = () => "O que este benchmark mede", gt = () => "Por que um único JSON grande pode prejudicar o desempenho", _t = () => "缓存失效：", vt = () => "基于上下文的架构在语言环境更改时会导致级联重新渲染，因为即使特定键没有更改，每个消费者都会收到通知。", yt = () => "在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。", bt = () => "未翻译内容闪烁 (FOUC)：", xt = () => "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会持有对整个字典的引用。这意味着：", St = () => "将翻译拆分为每个路由或每个命名空间的块可以显著减少初始负载。但它引入了新的挑战：", Ct = () => "JSON 必须在每次页面加载时进行解析 —— 阻塞主线程。", wt = () => "动态加载的权衡", Tt = () => "此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的权重、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。", Et = () => "理解影响", Dt = () => "瀑布流请求：", Ot = () => "本基准测试测量什么", kt = () => "为什么单个大型 JSON 会损害性能", At = () => "キャッシュの無効化:", jt = () => "コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的な再レンダリングが発生する可能性があります。", Mt = () => "サーバーサイドレンダリング中、辞書全体が HTML ペイロードにシリアライズされ、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。", Nt = () => "未翻訳コンテンツのフラッシュ (FOUC):", Pt = () => "多くの i18n ライブラリは、React コンテキストを介して提供される単一の JSON オブジェクトに翻訳を保存します。このオブジェクトが巨大（数千のキー）な場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：", Ft = () => "翻訳をルートごと、または名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：", It = () => "JSON はページ読み込みのたびにパースされる必要があり、メインスレッドをブロックします。", Lt = () => "動的読み込みのトレードオフ", Rt = () => "このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツのパースとレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。", zt = () => "影響を理解する", Bt = () => "ウォーターフォールリクエスト:", Vt = () => "このベンチマークが測定するもの", Ht = () => "ひとつの巨大な JSON がパフォーマンスを低下させる理由", Ut = () => "캐시 무효화:", Wt = () => "컨텍스트 기반 아키텍처는 로케일이 변경될 때 연쇄적인 리렌더링을 일으킬 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자에게 알림이 가기 때문입니다.", Gt = () => "서버 사이드 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어, 다운로드 및 수화가 필요한 문서 크기가 증가합니다.", Kt = () => "번역되지 않은 콘텐츠의 깜빡임 (FOUC):", qt = () => "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 컴포넌트는 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:", Jt = () => "번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:", Yt = () => "JSON은 모든 페이지 로드 시 파싱되어야 하며, 이는 메인 스레드를 차단합니다.", Xt = () => "동적 로딩의 트레이드오프", Zt = () => "이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 그리고 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.", Qt = () => "영향 이해하기", $t = () => "워터폴(Waterfall) 요청:", en = () => "이 벤치마크가 측정하는 것", tn = () => "단일 대형 JSON이 성능을 저하시키는 이유", nn = () => "Инвалидация кэша:", rn = () => "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.", an = () => "Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.", on = () => "Мерцание непереведенного контента (FOUC):", sn = () => "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:", cn = () => "Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:", ln = () => "JSON должен парситься при каждой загрузке страницы — блокируя основной поток.", un = () => "Компромиссы динамической загрузки", dn = () => "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.", fn = () => "Понимание влияния", pn = () => "Каскадные запросы (Waterfall requests):", mn = () => "Что измеряет этот бенчмарк", hn = () => "Почему один большой JSON может снизить производительность", gn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? W(e) : n === "es" ? ye(e) : n === "de" ? Me(e) : n === "it" ? Ge(e) : n === "pt" ? it(e) : n === "zh" ? _t(e) : n === "ja" ? At(e) : n === "ko" ? Ut(e) : n === "ru" ? nn(e) : O(e);
}), J = ((e = {}, t = {}) => (t.locale ?? d()) === "fr" ? G(e) : k(e)), _n = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? K(e) : n === "es" ? be(e) : n === "de" ? Ne(e) : n === "it" ? Ke(e) : n === "pt" ? at(e) : n === "zh" ? vt(e) : n === "ja" ? jt(e) : n === "ko" ? Wt(e) : n === "ru" ? rn(e) : A(e);
}), vn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? q(e) : n === "es" ? xe(e) : n === "de" ? Pe(e) : n === "it" ? qe(e) : n === "pt" ? ot(e) : n === "zh" ? yt(e) : n === "ja" ? Mt(e) : n === "ko" ? Gt(e) : n === "ru" ? an(e) : j(e);
}), yn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? se(e) : n === "es" ? Se(e) : n === "de" ? Fe(e) : n === "it" ? Je(e) : n === "pt" ? st(e) : n === "zh" ? bt(e) : n === "ja" ? Nt(e) : n === "ko" ? Kt(e) : n === "ru" ? on(e) : M(e);
}), Y = ((e = {}, t = {}) => (t.locale ?? d()) === "fr" ? ce(e) : N(e)), bn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? le(e) : n === "es" ? Ce(e) : n === "de" ? Ie(e) : n === "it" ? Ye(e) : n === "pt" ? ct(e) : n === "zh" ? xt(e) : n === "ja" ? Pt(e) : n === "ko" ? qt(e) : n === "ru" ? sn(e) : P(e);
}), xn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ue(e) : n === "es" ? we(e) : n === "de" ? Le(e) : n === "it" ? Xe(e) : n === "pt" ? lt(e) : n === "zh" ? St(e) : n === "ja" ? Ft(e) : n === "ko" ? Jt(e) : n === "ru" ? cn(e) : F(e);
}), Sn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? de(e) : n === "es" ? Te(e) : n === "de" ? Re(e) : n === "it" ? Ze(e) : n === "pt" ? ut(e) : n === "zh" ? Ct(e) : n === "ja" ? It(e) : n === "ko" ? Yt(e) : n === "ru" ? ln(e) : I(e);
}), X = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? fe(e) : n === "es" ? Ee(e) : n === "de" ? ze(e) : n === "it" ? Qe(e) : n === "pt" ? dt(e) : n === "zh" ? wt(e) : n === "ja" ? Lt(e) : n === "ko" ? Xt(e) : n === "ru" ? un(e) : L(e);
}), Cn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? pe(e) : n === "es" ? De(e) : n === "de" ? Be(e) : n === "it" ? $e(e) : n === "pt" ? ft(e) : n === "zh" ? Tt(e) : n === "ja" ? Rt(e) : n === "ko" ? Zt(e) : n === "ru" ? dn(e) : R(e);
}), wn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? me(e) : n === "es" ? Oe(e) : n === "de" ? Ve(e) : n === "it" ? et(e) : n === "pt" ? pt(e) : n === "zh" ? Et(e) : n === "ja" ? zt(e) : n === "ko" ? Qt(e) : n === "ru" ? fn(e) : z(e);
}), Tn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? he(e) : n === "es" ? ke(e) : n === "de" ? He(e) : n === "it" ? tt(e) : n === "pt" ? mt(e) : n === "zh" ? Dt(e) : n === "ja" ? Bt(e) : n === "ko" ? $t(e) : n === "ru" ? pn(e) : B(e);
}), Z = ((e = {}, t = {}) => (t.locale ?? d()) === "fr" ? ge(e) : V(e)), En = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? _e(e) : n === "es" ? Ae(e) : n === "de" ? Ue(e) : n === "it" ? nt(e) : n === "pt" ? ht(e) : n === "zh" ? Ot(e) : n === "ja" ? Vt(e) : n === "ko" ? en(e) : n === "ru" ? mn(e) : H(e);
}), Dn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ve(e) : n === "es" ? je(e) : n === "de" ? We(e) : n === "it" ? rt(e) : n === "pt" ? gt(e) : n === "zh" ? kt(e) : n === "ja" ? Ht(e) : n === "ko" ? tn(e) : n === "ru" ? hn(e) : U(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/home/UnderstandingImpact.tsx";
function On() {
	return t("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			t("h2", {
				className: "text-2xl font-bold text-foreground",
				children: wn()
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 6,
				columnNumber: 7
			}, this),
			t("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					t("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: Dn()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 11,
						columnNumber: 9
					}, this),
					t("p", {
						className: "text-sm text-muted-foreground",
						children: bn()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 14,
						columnNumber: 9
					}, this),
					t("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							t("li", { children: Sn() }, void 0, !1, {
								fileName: Q,
								lineNumber: 18,
								columnNumber: 11
							}, this),
							t("li", { children: _n() }, void 0, !1, {
								fileName: Q,
								lineNumber: 19,
								columnNumber: 11
							}, this),
							t("li", { children: vn() }, void 0, !1, {
								fileName: Q,
								lineNumber: 22,
								columnNumber: 11
							}, this)
						]
					}, void 0, !0, {
						fileName: Q,
						lineNumber: 17,
						columnNumber: 9
					}, this)
				]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 10,
				columnNumber: 7
			}, this),
			t("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					t("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: X()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 27,
						columnNumber: 9
					}, this),
					t("p", {
						className: "text-sm text-muted-foreground",
						children: xn()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 30,
						columnNumber: 9
					}, this),
					t("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							t("li", { children: [
								t("strong", {
									className: "text-foreground",
									children: Tn()
								}, void 0, !1, {
									fileName: Q,
									lineNumber: 35,
									columnNumber: 13
								}, this),
								" ",
								Z ? Z() : "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
							] }, void 0, !0, {
								fileName: Q,
								lineNumber: 34,
								columnNumber: 11
							}, this),
							t("li", { children: [
								t("strong", {
									className: "text-foreground",
									children: yn()
								}, void 0, !1, {
									fileName: Q,
									lineNumber: 43,
									columnNumber: 13
								}, this),
								" ",
								Y ? Y() : "users may briefly see translation keys or a fallback language before the chunk arrives."
							] }, void 0, !0, {
								fileName: Q,
								lineNumber: 42,
								columnNumber: 11
							}, this),
							t("li", { children: [
								t("strong", {
									className: "text-foreground",
									children: gn()
								}, void 0, !1, {
									fileName: Q,
									lineNumber: 51,
									columnNumber: 13
								}, this),
								" ",
								J ? J() : "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
							] }, void 0, !0, {
								fileName: Q,
								lineNumber: 50,
								columnNumber: 11
							}, this)
						]
					}, void 0, !0, {
						fileName: Q,
						lineNumber: 33,
						columnNumber: 9
					}, this)
				]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 26,
				columnNumber: 7
			}, this),
			t("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [t("h3", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: En()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 62,
					columnNumber: 9
				}, this), t("p", {
					className: "text-sm text-muted-foreground",
					children: Cn()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 65,
					columnNumber: 9
				}, this)]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 61,
				columnNumber: 7
			}, this)
		]
	}, void 0, !0, {
		fileName: Q,
		lineNumber: 5,
		columnNumber: 5
	}, this);
}
var kn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
m("en", { reload: !1 });
function An({ children: n }) {
	return t(e, { children: n }, void 0, !1, {
		fileName: kn,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/home/UnderstandingImpact.wrapper.tsx";
function jn() {
	return t(An, { children: t(On, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { jn as default };
