import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/paraglide/runtime.js
var r = {}, i = [
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
var C = () => "Understanding the Impact", w = () => "Comprendre l'impact", T = () => "Entendiendo el impacto", E = () => "Die Auswirkungen verstehen", D = () => "Capire l'impatto", O = () => "Entendendo o impacto", k = () => "理解影响", A = () => "影響を理解する", j = () => "영향 이해하기", M = () => "Понимание влияния", N = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? C(e) : n === "fr" ? w(e) : n === "es" ? T(e) : n === "de" ? E(e) : n === "it" ? D(e) : n === "pt" ? O(e) : n === "zh" ? k(e) : n === "ja" ? A(e) : n === "ko" ? j(e) : M(e);
}), P = () => "Why a single large JSON can hurt performance", F = () => "Pourquoi un seul JSON volumineux peut nuire aux performances", I = () => "Por qué un solo JSON grande puede perjudicar el rendimiento", L = () => "Warum ein einziges großes JSON die Leistung beeinträchtigen kann", R = () => "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni", z = () => "Por que um único JSON grande pode prejudicar o desempenho", B = () => "为什么单个大型 JSON 会损害性能", V = () => "ひとつの巨大な JSON がパフォーマンスを低下させる理由", H = () => "단일 대형 JSON이 성능을 저하시키는 이유", U = () => "Почему один большой JSON может снизить производительность", W = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? P(e) : n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : U(e);
}), G = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", K = () => "De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :", q = () => "Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:", J = () => "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:", Y = () => "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:", X = () => "Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:", Z = () => "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会持有对整个字典的引用。这意味着：", Q = () => "多くの i18n ライブラリは、React コンテキストを介して提供される単一の JSON オブジェクトに翻訳を保存します。このオブジェクトが巨大（数千のキー）な場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：", ne = () => "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 컴포넌트는 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:", re = () => "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:", ie = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? G(e) : n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? Q(e) : n === "ko" ? ne(e) : re(e);
}), ae = () => "The JSON must be parsed on every page load — blocking the main thread.", oe = () => "Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.", se = () => "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.", ce = () => "Das JSON muss bei jedem Seitenladen geparst werden — was den Haupt-Thread blockiert.", le = () => "Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.", ue = () => "O JSON deve ser analisado em cada carga de página — bloqueando a linha de execução principal.", de = () => "JSON 必须在每次页面加载时进行解析 —— 阻塞主线程。", fe = () => "JSON はページ読み込みのたびにパースされる必要があり、メインスレッドをブロックします。", pe = () => "JSON은 모든 페이지 로드 시 파싱되어야 하며, 이는 메인 스레드를 차단합니다.", me = () => "JSON должен парситься при каждой загрузке страницы — блокируя основной поток.", he = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ae(e) : n === "fr" ? oe(e) : n === "es" ? se(e) : n === "de" ? ce(e) : n === "it" ? le(e) : n === "pt" ? ue(e) : n === "zh" ? de(e) : n === "ja" ? fe(e) : n === "ko" ? pe(e) : me(e);
}), ge = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", _e = () => "Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.", ve = () => "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.", ye = () => "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.", be = () => "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.", xe = () => "As arquiteturas baseadas no contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.", Se = () => "基于上下文的架构在语言环境更改时会导致级联重新渲染，因为即使特定键没有更改，每个消费者都会收到通知。", Ce = () => "コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的な再レンダリングが発生する可能性があります。", we = () => "컨텍스트 기반 아키텍처는 로케일이 변경될 때 연쇄적인 리렌더링을 일으킬 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자에게 알림이 가기 때문입니다.", Te = () => "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.", Ee = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ge(e) : n === "fr" ? _e(e) : n === "es" ? ve(e) : n === "de" ? ye(e) : n === "it" ? be(e) : n === "pt" ? xe(e) : n === "zh" ? Se(e) : n === "ja" ? Ce(e) : n === "ko" ? we(e) : Te(e);
}), De = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", Oe = () => "Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.", ke = () => "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.", Ae = () => "Während des serverseitigen Renderings wird das vollständige Wörterbuch in den HTML-Payload serialisiert, wodurch sich die Dokumentgröße erhöht, die heruntergeladen und hydratisiert werden muss.", je = () => "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idrato.", Me = () => "Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.", Ne = () => "在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。", Pe = () => "サーバーサイドレンダリング中、辞書全体が HTML ペイロードにシリアライズされ、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。", Fe = () => "서버 사이드 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어, 다운로드 및 수화가 필요한 문서 크기가 증가합니다.", Ie = () => "Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.", Le = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? De(e) : n === "fr" ? Oe(e) : n === "es" ? ke(e) : n === "de" ? Ae(e) : n === "it" ? je(e) : n === "pt" ? Me(e) : n === "zh" ? Ne(e) : n === "ja" ? Pe(e) : n === "ko" ? Fe(e) : Ie(e);
}), Re = () => "The trade-offs of dynamic loading", ze = () => "Les compromis du chargement dynamique", Be = () => "Las compensaciones de la carga dinámica", Ve = () => "Die Kompromisse beim dynamischen Laden", He = () => "I compromessi del caricamento dinamico", Ue = () => "As compensações do carregamento dinâmico", We = () => "动态加载的权衡", Ge = () => "動的読み込みのトレードオフ", Ke = () => "동적 로딩의 트레이드오프", qe = () => "Компромиссы динамической загрузки", Je = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Re(e) : n === "fr" ? ze(e) : n === "es" ? Be(e) : n === "de" ? Ve(e) : n === "it" ? He(e) : n === "pt" ? Ue(e) : n === "zh" ? We(e) : n === "ja" ? Ge(e) : n === "ko" ? Ke(e) : qe(e);
}), Ye = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", Xe = () => "La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :", Ze = () => "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:", Qe = () => "Das Aufteilen von Übersetzungen in Teilstücke pro Route oder Namensraum kann den initialen Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:", $e = () => "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:", et = () => "Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:", tt = () => "将翻译拆分为每个路由或每个命名空间的块可以显著减少初始负载。但它引入了新的挑战：", nt = () => "翻訳をルートごと、または名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：", rt = () => "번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:", it = () => "Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:", at = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Ye(e) : n === "fr" ? Xe(e) : n === "es" ? Ze(e) : n === "de" ? Qe(e) : n === "it" ? $e(e) : n === "pt" ? et(e) : n === "zh" ? tt(e) : n === "ja" ? nt(e) : n === "ko" ? rt(e) : it(e);
}), ot = () => "Waterfall requests:", st = () => "Requêtes en cascade :", ct = () => "Solicitudes en cascada:", lt = () => "Waterfall-Anfragen:", ut = () => "Richieste a cascata:", dt = () => "Pedidos em cascata:", ft = () => "瀑布流请求：", pt = () => "ウォーターフォールリクエスト:", mt = () => "워터폴(Waterfall) 요청:", ht = () => "Каскадные запросы (Waterfall requests):", gt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ot(e) : n === "fr" ? st(e) : n === "es" ? ct(e) : n === "de" ? lt(e) : n === "it" ? ut(e) : n === "pt" ? dt(e) : n === "zh" ? ft(e) : n === "ja" ? pt(e) : n === "ko" ? mt(e) : ht(e);
}), _t = () => "Flash of untranslated content (FOUC):", vt = () => "Flash de contenu non traduit (FOUC) :", yt = () => "Parpadeo de contenido no traducido (FOUC):", bt = () => "Aufblitzen von nicht übersetztem Inhalt (FOUC):", xt = () => "Flash di contenuti non tradotti (FOUC):", St = () => "Flash de conteúdo não traduzido (FOUC):", Ct = () => "未翻译内容闪烁 (FOUC)：", wt = () => "未翻訳コンテンツのフラッシュ (FOUC):", Tt = () => "번역되지 않은 콘텐츠의 깜빡임 (FOUC):", Et = () => "Мерцание непереведенного контента (FOUC):", Dt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? _t(e) : n === "fr" ? vt(e) : n === "es" ? yt(e) : n === "de" ? bt(e) : n === "it" ? xt(e) : n === "pt" ? St(e) : n === "zh" ? Ct(e) : n === "ja" ? wt(e) : n === "ko" ? Tt(e) : Et(e);
}), Ot = () => "Cache invalidation:", kt = () => "Invalidation du cache :", At = () => "Invalidación de la caché:", jt = () => "Cache-Invalidierung:", Mt = () => "Invalidazione della cache:", Nt = () => "Invalidação de cache:", Pt = () => "缓存失效：", Ft = () => "キャッシュの無効化:", It = () => "캐시 무효화:", Lt = () => "Инвалидация кэша:", Rt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Ot(e) : n === "fr" ? kt(e) : n === "es" ? At(e) : n === "de" ? jt(e) : n === "it" ? Mt(e) : n === "pt" ? Nt(e) : n === "zh" ? Pt(e) : n === "ja" ? Ft(e) : n === "ko" ? It(e) : Lt(e);
}), zt = () => "What this benchmark measures", Bt = () => "Ce que ce benchmark mesure", Vt = () => "Qué mide este benchmark", Ht = () => "Was dieser Benchmark misst", Ut = () => "Cosa misura questo benchmark", Wt = () => "O que este benchmark mede", Gt = () => "本基准测试测量什么", Kt = () => "このベンチマークが測定するもの", qt = () => "이 벤치마크가 측정하는 것", $ = () => "Что измеряет этот бенчмарк", Jt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? zt(e) : n === "fr" ? Bt(e) : n === "es" ? Vt(e) : n === "de" ? Ht(e) : n === "it" ? Ut(e) : n === "pt" ? Wt(e) : n === "zh" ? Gt(e) : n === "ja" ? Kt(e) : n === "ko" ? qt(e) : $(e);
}), Yt = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", Xt = () => "Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.", Zt = () => "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.", Qt = () => "Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.", $t = () => "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.", en = () => "Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento tardio. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.", tn = () => "此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的权重、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。", nn = () => "このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツのパースとレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。", rn = () => "이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 그리고 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.", an = () => "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.", on = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Yt(e) : n === "fr" ? Xt(e) : n === "es" ? Zt(e) : n === "de" ? Qt(e) : n === "it" ? $t(e) : n === "pt" ? en(e) : n === "zh" ? tn(e) : n === "ja" ? nn(e) : n === "ko" ? rn(e) : an(e);
});
//#endregion
//#region src/components/pages/home/UnderstandingImpact.tsx
function sn() {
	return /* @__PURE__ */ n("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			/* @__PURE__ */ t("h2", {
				className: "text-2xl font-bold text-foreground",
				children: N()
			}),
			/* @__PURE__ */ n("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					/* @__PURE__ */ t("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: W()
					}),
					/* @__PURE__ */ t("p", {
						className: "text-sm text-muted-foreground",
						children: ie()
					}),
					/* @__PURE__ */ n("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							/* @__PURE__ */ t("li", { children: he() }),
							/* @__PURE__ */ t("li", { children: Ee() }),
							/* @__PURE__ */ t("li", { children: Le() })
						]
					})
				]
			}),
			/* @__PURE__ */ n("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					/* @__PURE__ */ t("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: Je()
					}),
					/* @__PURE__ */ t("p", {
						className: "text-sm text-muted-foreground",
						children: at()
					}),
					/* @__PURE__ */ n("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							/* @__PURE__ */ n("li", { children: [
								/* @__PURE__ */ t("strong", {
									className: "text-foreground",
									children: gt()
								}),
								" ",
								"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
							] }),
							/* @__PURE__ */ n("li", { children: [
								/* @__PURE__ */ t("strong", {
									className: "text-foreground",
									children: Dt()
								}),
								" ",
								"users may briefly see translation keys or a fallback language before the chunk arrives."
							] }),
							/* @__PURE__ */ n("li", { children: [
								/* @__PURE__ */ t("strong", {
									className: "text-foreground",
									children: Rt()
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
					children: Jt()
				}), /* @__PURE__ */ t("p", {
					className: "text-sm text-muted-foreground",
					children: on()
				})]
			})
		]
	});
}
//#endregion
//#region scripts/Wrapper.tsx
_("en", { reload: !1 });
function cn({ children: n }) {
	return /* @__PURE__ */ t(e, { children: n });
}
//#endregion
//#region src/components/pages/home/UnderstandingImpact.wrapper.tsx
function ln() {
	return /* @__PURE__ */ t(cn, { children: /* @__PURE__ */ t(sn, {}) });
}
//#endregion
export { ln as default };
