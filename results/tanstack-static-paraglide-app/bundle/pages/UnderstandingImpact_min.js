import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
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
], a = "PARAGLIDE_LOCALE", o = 3456e4, s = [
	"cookie",
	"globalVariable",
	"baseLocale"
], c = [], l = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var u, d = !1, f = () => {
	let e = s;
	!l && typeof window < "u" && window.location?.href && (e = E(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ie();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (O(t) && D.has(t)) {
			let e = D.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return te(t);
			}
		}
		let e = g(n);
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
		r = f();
	} catch {}
	let i = [], c = s;
	!l && typeof window < "u" && window.location?.href && (c = E(window.location.href));
	for (let t of c) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t, S();
	} else if (t === "baseLocale") continue;
	else if (O(t) && D.has(t)) {
		let n = D.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let d = () => {
		!l && n.reload && window.location && e !== r && p(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		d();
	});
	d();
}, h = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function te(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function _(e) {
	return e;
}
function ne(e, t) {
	return e.exec(t.href);
}
var v = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), y = RegExp(`(?:^|;\\s*)${v}=([^;]*)`), b = Symbol(), x = b;
function S() {
	x = b;
}
function re() {
	typeof queueMicrotask == "function" ? queueMicrotask(S) : Promise.resolve().then(S);
}
function ie() {
	if (typeof document > "u") return;
	if (x !== b) return x;
	let e = document.cookie.match(y)?.[1];
	return x = g(e), re(), x;
}
function ae(e) {
	return oe(e);
}
function oe(e) {
	let t = _(typeof e == "string" ? new URL(e, h()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var C, w;
function T(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (C === t) return w;
	let n = _(new URL(t, "http://example.com")), i = ae(n), a = i.href === n.href ? [n] : [n, i], o;
	for (let e of a) {
		for (let t of c) if (ne(new r(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return C = t, w = o, o;
}
function E(e) {
	let t = T(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var D = /* @__PURE__ */ new Map();
function O(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var k = () => "Cache invalidation:", A = () => "Invalidation du cache :", j = () => "Invalidación de la caché:", M = () => "Cache-Invalidierung:", N = () => "Invalidazione della cache:", P = () => "Invalidação de cache:", F = () => "缓存失效：", I = () => "キャッシュの無効化:", L = () => "캐시 무효화:", R = () => "Инвалидация кэша:", z = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? A(e) : n === "es" ? j(e) : n === "de" ? M(e) : n === "it" ? N(e) : n === "pt" ? P(e) : n === "zh" ? F(e) : n === "ja" ? I(e) : n === "ko" ? L(e) : n === "ru" ? R(e) : k(e);
}), B = () => "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.", V = () => "la mise à jour des traductions nécessite des stratégies de purge du cache pour garantir que les utilisateurs reçoivent le contenu frais sans re-télécharger les morceaux inchangés.", H = B, U = B, W = B, G = B, K = B, q = B, se = B, ce = B, J = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? V(e) : n === "es" ? H(e) : n === "de" ? U(e) : n === "it" ? W(e) : n === "pt" ? G(e) : n === "zh" ? K(e) : n === "ja" ? q(e) : n === "ko" ? se(e) : n === "ru" ? ce(e) : B(e);
}), le = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", ue = () => "Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.", de = () => "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.", fe = () => "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.", pe = () => "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.", me = () => "As arquiteturas baseadas no contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.", he = () => "基于上下文的架构在语言环境更改时会导致级联重新渲染，因为即使特定键没有更改，每个消费者都会收到通知。", ge = () => "コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的な再レンダリングが発生する可能性があります。", _e = () => "컨텍스트 기반 아키텍처는 로케일이 변경될 때 연쇄적인 리렌더링을 일으킬 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자에게 알림이 가기 때문입니다.", ve = () => "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.", ye = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ue(e) : n === "es" ? de(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : n === "ru" ? ve(e) : le(e);
}), be = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", xe = () => "Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.", Se = () => "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.", Ce = () => "Während des serverseitigen Renderings wird das vollständige Wörterbuch in den HTML-Payload serialisiert, wodurch sich die Dokumentgröße erhöht, die heruntergeladen und hydratisiert werden muss.", we = () => "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idrato.", Te = () => "Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.", Ee = () => "在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。", De = () => "サーバーサイドレンダリング中、辞書全体が HTML ペイロードにシリアライズされ、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。", Oe = () => "서버 사이드 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어, 다운로드 및 수화가 필요한 문서 크기가 증가합니다.", ke = () => "Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.", Ae = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? xe(e) : n === "es" ? Se(e) : n === "de" ? Ce(e) : n === "it" ? we(e) : n === "pt" ? Te(e) : n === "zh" ? Ee(e) : n === "ja" ? De(e) : n === "ko" ? Oe(e) : n === "ru" ? ke(e) : be(e);
}), je = () => "Flash of untranslated content (FOUC):", Me = () => "Flash de contenu non traduit (FOUC) :", Ne = () => "Parpadeo de contenido no traducido (FOUC):", Pe = () => "Aufblitzen von nicht übersetztem Inhalt (FOUC):", Fe = () => "Flash di contenuti non tradotti (FOUC):", Ie = () => "Flash de conteúdo não traduzido (FOUC):", Le = () => "未翻译内容闪烁 (FOUC)：", Re = () => "未翻訳コンテンツのフラッシュ (FOUC):", ze = () => "번역되지 않은 콘텐츠의 깜빡임 (FOUC):", Be = () => "Мерцание непереведенного контента (FOUC):", Ve = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Me(e) : n === "es" ? Ne(e) : n === "de" ? Pe(e) : n === "it" ? Fe(e) : n === "pt" ? Ie(e) : n === "zh" ? Le(e) : n === "ja" ? Re(e) : n === "ko" ? ze(e) : n === "ru" ? Be(e) : je(e);
}), Y = () => "users may briefly see translation keys or a fallback language before the chunk arrives.", He = () => "les utilisateurs peuvent brièvement voir les clés de traduction ou une langue de repli avant l'arrivée du morceau.", Ue = Y, We = Y, Ge = Y, Ke = Y, qe = Y, Je = Y, Ye = Y, Xe = Y, X = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? He(e) : n === "es" ? Ue(e) : n === "de" ? We(e) : n === "it" ? Ge(e) : n === "pt" ? Ke(e) : n === "zh" ? qe(e) : n === "ja" ? Je(e) : n === "ko" ? Ye(e) : n === "ru" ? Xe(e) : Y(e);
}), Ze = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", Qe = () => "De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :", $e = () => "Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:", et = () => "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:", tt = () => "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:", nt = () => "Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:", rt = () => "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会持有对整个字典的引用。这意味着：", it = () => "多くの i18n ライブラリは、React コンテキストを介して提供される単一の JSON オブジェクトに翻訳を保存します。このオブジェクトが巨大（数千のキー）な場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：", at = () => "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 컴포넌트는 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:", ot = () => "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:", st = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Qe(e) : n === "es" ? $e(e) : n === "de" ? et(e) : n === "it" ? tt(e) : n === "pt" ? nt(e) : n === "zh" ? rt(e) : n === "ja" ? it(e) : n === "ko" ? at(e) : n === "ru" ? ot(e) : Ze(e);
}), ct = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", lt = () => "La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :", ut = () => "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:", dt = () => "Das Aufteilen von Übersetzungen in Teilstücke pro Route oder Namensraum kann den initialen Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:", ft = () => "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:", pt = () => "Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:", mt = () => "将翻译拆分为每个路由或每个命名空间的块可以显著减少初始负载。但它引入了新的挑战：", ht = () => "翻訳をルートごと、または名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：", gt = () => "번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:", _t = () => "Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:", vt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? lt(e) : n === "es" ? ut(e) : n === "de" ? dt(e) : n === "it" ? ft(e) : n === "pt" ? pt(e) : n === "zh" ? mt(e) : n === "ja" ? ht(e) : n === "ko" ? gt(e) : n === "ru" ? _t(e) : ct(e);
}), yt = () => "The JSON must be parsed on every page load — blocking the main thread.", bt = () => "Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.", xt = () => "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.", St = () => "Das JSON muss bei jedem Seitenladen geparst werden — was den Haupt-Thread blockiert.", Ct = () => "Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.", wt = () => "O JSON deve ser analisado em cada carga de página — bloqueando a linha de execução principal.", Tt = () => "JSON 必须在每次页面加载时进行解析 —— 阻塞主线程。", Et = () => "JSON はページ読み込みのたびにパースされる必要があり、メインスレッドをブロックします。", Dt = () => "JSON은 모든 페이지 로드 시 파싱되어야 하며, 이는 메인 스레드를 차단합니다.", Ot = () => "JSON должен парситься при каждой загрузке страницы — блокируя основной поток.", kt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? bt(e) : n === "es" ? xt(e) : n === "de" ? St(e) : n === "it" ? Ct(e) : n === "pt" ? wt(e) : n === "zh" ? Tt(e) : n === "ja" ? Et(e) : n === "ko" ? Dt(e) : n === "ru" ? Ot(e) : yt(e);
}), At = () => "The trade-offs of dynamic loading", jt = () => "Les compromis du chargement dynamique", Mt = () => "Las compensaciones de la carga dinámica", Nt = () => "Die Kompromisse beim dynamischen Laden", Pt = () => "I compromessi del caricamento dinamico", Ft = () => "As compensações do carregamento dinâmico", It = () => "动态加载的权衡", Lt = () => "動的読み込みのトレードオフ", Rt = () => "동적 로딩의 트레이드오프", zt = () => "Компромиссы динамической загрузки", Bt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? jt(e) : n === "es" ? Mt(e) : n === "de" ? Nt(e) : n === "it" ? Pt(e) : n === "pt" ? Ft(e) : n === "zh" ? It(e) : n === "ja" ? Lt(e) : n === "ko" ? Rt(e) : n === "ru" ? zt(e) : At(e);
}), Vt = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", Ht = () => "Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.", Ut = () => "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.", Wt = () => "Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.", Gt = () => "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.", Kt = () => "Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento tardio. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.", qt = () => "此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的权重、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。", Jt = () => "このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツのパースとレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。", Yt = () => "이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 그리고 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.", Xt = () => "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.", Zt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ht(e) : n === "es" ? Ut(e) : n === "de" ? Wt(e) : n === "it" ? Gt(e) : n === "pt" ? Kt(e) : n === "zh" ? qt(e) : n === "ja" ? Jt(e) : n === "ko" ? Yt(e) : n === "ru" ? Xt(e) : Vt(e);
}), Qt = () => "Understanding the Impact", $t = () => "Comprendre l'impact", en = () => "Entendiendo el impacto", tn = () => "Die Auswirkungen verstehen", nn = () => "Capire l'impatto", rn = () => "Entendendo o impacto", an = () => "理解影响", on = () => "影響を理解する", sn = () => "영향 이해하기", cn = () => "Понимание влияния", ln = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? $t(e) : n === "es" ? en(e) : n === "de" ? tn(e) : n === "it" ? nn(e) : n === "pt" ? rn(e) : n === "zh" ? an(e) : n === "ja" ? on(e) : n === "ko" ? sn(e) : n === "ru" ? cn(e) : Qt(e);
}), un = () => "Waterfall requests:", dn = () => "Requêtes en cascade :", fn = () => "Solicitudes en cascada:", pn = () => "Waterfall-Anfragen:", mn = () => "Richieste a cascata:", hn = () => "Pedidos em cascata:", gn = () => "瀑布流请求：", _n = () => "ウォーターフォールリクエスト:", vn = () => "워터폴(Waterfall) 요청:", yn = () => "Каскадные запросы (Waterfall requests):", bn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? dn(e) : n === "es" ? fn(e) : n === "de" ? pn(e) : n === "it" ? mn(e) : n === "pt" ? hn(e) : n === "zh" ? gn(e) : n === "ja" ? _n(e) : n === "ko" ? vn(e) : n === "ru" ? yn(e) : un(e);
}), Z = () => "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.", xn = () => "l'application doit d'abord se charger, déterminer la langue, puis récupérer le bon morceau — ajoutant des allers-retours réseau.", Sn = Z, Cn = Z, wn = Z, Tn = Z, En = Z, Dn = Z, On = Z, kn = Z, Q = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? xn(e) : n === "es" ? Sn(e) : n === "de" ? Cn(e) : n === "it" ? wn(e) : n === "pt" ? Tn(e) : n === "zh" ? En(e) : n === "ja" ? Dn(e) : n === "ko" ? On(e) : n === "ru" ? kn(e) : Z(e);
}), An = () => "What this benchmark measures", jn = () => "Ce que ce benchmark mesure", Mn = () => "Qué mide este benchmark", Nn = () => "Was dieser Benchmark misst", $ = () => "Cosa misura questo benchmark", Pn = () => "O que este benchmark mede", Fn = () => "本基准测试测量什么", In = () => "このベンチマークが測定するもの", Ln = () => "이 벤치마크가 측정하는 것", Rn = () => "Что измеряет этот бенчмарк", zn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? jn(e) : n === "es" ? Mn(e) : n === "de" ? Nn(e) : n === "it" ? $(e) : n === "pt" ? Pn(e) : n === "zh" ? Fn(e) : n === "ja" ? In(e) : n === "ko" ? Ln(e) : n === "ru" ? Rn(e) : An(e);
}), Bn = () => "Why a single large JSON can hurt performance", Vn = () => "Pourquoi un seul JSON volumineux peut nuire aux performances", Hn = () => "Por qué un solo JSON grande puede perjudicar el rendimiento", Un = () => "Warum ein einziges großes JSON die Leistung beeinträchtigen kann", Wn = () => "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni", Gn = () => "Por que um único JSON grande pode prejudicar o desempenho", Kn = () => "为什么单个大型 JSON 会损害性能", qn = () => "ひとつの巨大な JSON がパフォーマンスを低下させる理由", Jn = () => "단일 대형 JSON이 성능을 저하시키는 이유", Yn = () => "Почему один большой JSON может снизить производительность", Xn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Vn(e) : n === "es" ? Hn(e) : n === "de" ? Un(e) : n === "it" ? Wn(e) : n === "pt" ? Gn(e) : n === "zh" ? Kn(e) : n === "ja" ? qn(e) : n === "ko" ? Jn(e) : n === "ru" ? Yn(e) : Bn(e);
});
function Zn() {
	return n("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			t("h2", {
				className: "text-2xl font-bold text-foreground",
				children: ln()
			}),
			n("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					t("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: Xn()
					}),
					t("p", {
						className: "text-sm text-muted-foreground",
						children: st()
					}),
					n("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							t("li", { children: kt() }),
							t("li", { children: ye() }),
							t("li", { children: Ae() })
						]
					})
				]
			}),
			n("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					t("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: Bt()
					}),
					t("p", {
						className: "text-sm text-muted-foreground",
						children: vt()
					}),
					n("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							n("li", { children: [
								t("strong", {
									className: "text-foreground",
									children: bn()
								}),
								" ",
								Q ? Q() : "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
							] }),
							n("li", { children: [
								t("strong", {
									className: "text-foreground",
									children: Ve()
								}),
								" ",
								X ? X() : "users may briefly see translation keys or a fallback language before the chunk arrives."
							] }),
							n("li", { children: [
								t("strong", {
									className: "text-foreground",
									children: z()
								}),
								" ",
								J ? J() : "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
							] })
						]
					})
				]
			}),
			n("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [t("h3", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: zn()
				}), t("p", {
					className: "text-sm text-muted-foreground",
					children: Zt()
				})]
			})
		]
	});
}
m("en", { reload: !1 });
function Qn({ children: n }) {
	return t(e, { children: n });
}
function $n() {
	return t(Qn, { children: t(Zn, {}) });
}
export { $n as default };
