import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
import { useParams as o } from "next/navigation";
var s = {}, c = [
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
], l = "PARAGLIDE_LOCALE", u = 3456e4, d = [
	"cookie",
	"globalVariable",
	"baseLocale"
], f = [], p = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var m, h = !1, g = () => {
	let e = d;
	!p && typeof window < "u" && window.location?.href && (e = A(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return h || (m = t, h = !0, v(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ie();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && m !== void 0) n = m;
		else if (M(t) && j.has(t)) {
			let e = j.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ne(t);
			}
		}
		let e = y(n);
		if (e) return e;
	}
}
var _ = (e) => {
	e ? window.location.href = e : window.location.reload();
}, v = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = g();
	} catch {}
	let i = [], a = d;
	!p && typeof window < "u" && window.location?.href && (a = A(window.location.href));
	for (let t of a) if (t === "globalVariable") m = e;
	else if (t === "cookie") {
		if (p || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${u}`;
		document.cookie = t, E();
	} else if (t === "baseLocale") continue;
	else if (M(t) && j.has(t)) {
		let n = j.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!p && n.reload && window.location && e !== r && _(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, te = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function ne(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function b(e) {
	return e;
}
function x(e, t) {
	return e.exec(t.href);
}
var S = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), C = RegExp(`(?:^|;\\s*)${S}=([^;]*)`), w = Symbol(), T = w;
function E() {
	T = w;
}
function re() {
	typeof queueMicrotask == "function" ? queueMicrotask(E) : Promise.resolve().then(E);
}
function ie() {
	if (typeof document > "u") return;
	if (T !== w) return T;
	let e = document.cookie.match(C)?.[1];
	return T = y(e), re(), T;
}
function ae(e) {
	return oe(e);
}
function oe(e) {
	let t = b(typeof e == "string" ? new URL(e, te()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && y(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), b(t);
}
var D, O;
function k(e) {
	if (f.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (D === t) return O;
	let n = b(new URL(t, "http://example.com")), r = ae(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of f) if (x(new s(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return D = t, O = a, a;
}
function A(e) {
	let t = k(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : d;
}
var j = /* @__PURE__ */ new Map();
function M(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var N = () => "Cache invalidation:", P = () => "Invalidation du cache :", F = () => "Invalidación de la caché:", I = () => "Cache-Invalidierung:", L = () => "Invalidazione della cache:", R = () => "Invalidação de cache:", z = () => "缓存失效：", B = () => "キャッシュの無効化:", V = () => "캐시 무효화:", H = () => "Инвалидация кэша:", U = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? P(e) : n === "es" ? F(e) : n === "de" ? I(e) : n === "it" ? L(e) : n === "pt" ? R(e) : n === "zh" ? z(e) : n === "ja" ? B(e) : n === "ko" ? V(e) : n === "ru" ? H(e) : N(e);
}), W = () => "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.", G = () => "la mise à jour des traductions nécessite des stratégies de purge du cache pour garantir que les utilisateurs reçoivent le contenu frais sans re-télécharger les morceaux inchangés.", K = W, q = W, se = W, ce = W, le = W, ue = W, de = W, fe = W, J = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? G(e) : n === "es" ? K(e) : n === "de" ? q(e) : n === "it" ? se(e) : n === "pt" ? ce(e) : n === "zh" ? le(e) : n === "ja" ? ue(e) : n === "ko" ? de(e) : n === "ru" ? fe(e) : W(e);
}), pe = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", me = () => "Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.", he = () => "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.", ge = () => "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.", _e = () => "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.", ve = () => "As arquiteturas baseadas no contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.", ye = () => "基于上下文的架构在语言环境更改时会导致级联重新渲染，因为即使特定键没有更改，每个消费者都会收到通知。", be = () => "コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的な再レンダリングが発生する可能性があります。", xe = () => "컨텍스트 기반 아키텍처는 로케일이 변경될 때 연쇄적인 리렌더링을 일으킬 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자에게 알림이 가기 때문입니다.", Se = () => "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.", Ce = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? me(e) : n === "es" ? he(e) : n === "de" ? ge(e) : n === "it" ? _e(e) : n === "pt" ? ve(e) : n === "zh" ? ye(e) : n === "ja" ? be(e) : n === "ko" ? xe(e) : n === "ru" ? Se(e) : pe(e);
}), we = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", Te = () => "Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.", Ee = () => "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.", De = () => "Während des serverseitigen Renderings wird das vollständige Wörterbuch in den HTML-Payload serialisiert, wodurch sich die Dokumentgröße erhöht, die heruntergeladen und hydratisiert werden muss.", Oe = () => "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idrato.", ke = () => "Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.", Ae = () => "在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。", je = () => "サーバーサイドレンダリング中、辞書全体が HTML ペイロードにシリアライズされ、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。", Me = () => "서버 사이드 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어, 다운로드 및 수화가 필요한 문서 크기가 증가합니다.", Ne = () => "Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.", Pe = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Te(e) : n === "es" ? Ee(e) : n === "de" ? De(e) : n === "it" ? Oe(e) : n === "pt" ? ke(e) : n === "zh" ? Ae(e) : n === "ja" ? je(e) : n === "ko" ? Me(e) : n === "ru" ? Ne(e) : we(e);
}), Fe = () => "Flash of untranslated content (FOUC):", Ie = () => "Flash de contenu non traduit (FOUC) :", Le = () => "Parpadeo de contenido no traducido (FOUC):", Re = () => "Aufblitzen von nicht übersetztem Inhalt (FOUC):", ze = () => "Flash di contenuti non tradotti (FOUC):", Be = () => "Flash de conteúdo não traduzido (FOUC):", Ve = () => "未翻译内容闪烁 (FOUC)：", He = () => "未翻訳コンテンツのフラッシュ (FOUC):", Ue = () => "번역되지 않은 콘텐츠의 깜빡임 (FOUC):", We = () => "Мерцание непереведенного контента (FOUC):", Ge = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Ie(e) : n === "es" ? Le(e) : n === "de" ? Re(e) : n === "it" ? ze(e) : n === "pt" ? Be(e) : n === "zh" ? Ve(e) : n === "ja" ? He(e) : n === "ko" ? Ue(e) : n === "ru" ? We(e) : Fe(e);
}), Y = () => "users may briefly see translation keys or a fallback language before the chunk arrives.", Ke = () => "les utilisateurs peuvent brièvement voir les clés de traduction ou une langue de repli avant l'arrivée du morceau.", qe = Y, Je = Y, Ye = Y, Xe = Y, Ze = Y, Qe = Y, $e = Y, et = Y, X = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Ke(e) : n === "es" ? qe(e) : n === "de" ? Je(e) : n === "it" ? Ye(e) : n === "pt" ? Xe(e) : n === "zh" ? Ze(e) : n === "ja" ? Qe(e) : n === "ko" ? $e(e) : n === "ru" ? et(e) : Y(e);
}), tt = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", nt = () => "De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :", rt = () => "Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:", it = () => "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:", at = () => "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:", ot = () => "Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:", st = () => "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会持有对整个字典的引用。这意味着：", ct = () => "多くの i18n ライブラリは、React コンテキストを介して提供される単一の JSON オブジェクトに翻訳を保存します。このオブジェクトが巨大（数千のキー）な場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：", lt = () => "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 컴포넌트는 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:", ut = () => "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:", dt = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? nt(e) : n === "es" ? rt(e) : n === "de" ? it(e) : n === "it" ? at(e) : n === "pt" ? ot(e) : n === "zh" ? st(e) : n === "ja" ? ct(e) : n === "ko" ? lt(e) : n === "ru" ? ut(e) : tt(e);
}), ft = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", pt = () => "La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :", mt = () => "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:", ht = () => "Das Aufteilen von Übersetzungen in Teilstücke pro Route oder Namensraum kann den initialen Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:", gt = () => "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:", _t = () => "Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:", vt = () => "将翻译拆分为每个路由或每个命名空间的块可以显著减少初始负载。但它引入了新的挑战：", yt = () => "翻訳をルートごと、または名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：", bt = () => "번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:", xt = () => "Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:", St = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? pt(e) : n === "es" ? mt(e) : n === "de" ? ht(e) : n === "it" ? gt(e) : n === "pt" ? _t(e) : n === "zh" ? vt(e) : n === "ja" ? yt(e) : n === "ko" ? bt(e) : n === "ru" ? xt(e) : ft(e);
}), Ct = () => "The JSON must be parsed on every page load — blocking the main thread.", wt = () => "Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.", Tt = () => "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.", Et = () => "Das JSON muss bei jedem Seitenladen geparst werden — was den Haupt-Thread blockiert.", Dt = () => "Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.", Ot = () => "O JSON deve ser analisado em cada carga de página — bloqueando a linha de execução principal.", kt = () => "JSON 必须在每次页面加载时进行解析 —— 阻塞主线程。", At = () => "JSON はページ読み込みのたびにパースされる必要があり、メインスレッドをブロックします。", jt = () => "JSON은 모든 페이지 로드 시 파싱되어야 하며, 이는 메인 스레드를 차단합니다.", Mt = () => "JSON должен парситься при каждой загрузке страницы — блокируя основной поток.", Nt = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? wt(e) : n === "es" ? Tt(e) : n === "de" ? Et(e) : n === "it" ? Dt(e) : n === "pt" ? Ot(e) : n === "zh" ? kt(e) : n === "ja" ? At(e) : n === "ko" ? jt(e) : n === "ru" ? Mt(e) : Ct(e);
}), Pt = () => "The trade-offs of dynamic loading", Ft = () => "Les compromis du chargement dynamique", It = () => "Las compensaciones de la carga dinámica", Lt = () => "Die Kompromisse beim dynamischen Laden", Rt = () => "I compromessi del caricamento dinamico", zt = () => "As compensações do carregamento dinâmico", Bt = () => "动态加载的权衡", Vt = () => "動的読み込みのトレードオフ", Ht = () => "동적 로딩의 트레이드오프", Ut = () => "Компромиссы динамической загрузки", Wt = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Ft(e) : n === "es" ? It(e) : n === "de" ? Lt(e) : n === "it" ? Rt(e) : n === "pt" ? zt(e) : n === "zh" ? Bt(e) : n === "ja" ? Vt(e) : n === "ko" ? Ht(e) : n === "ru" ? Ut(e) : Pt(e);
}), Gt = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", Kt = () => "Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.", qt = () => "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.", Jt = () => "Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.", Yt = () => "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.", Xt = () => "Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento tardio. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.", Zt = () => "此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的权重、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。", Qt = () => "このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツのパースとレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。", $t = () => "이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 그리고 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.", en = () => "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.", tn = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Kt(e) : n === "es" ? qt(e) : n === "de" ? Jt(e) : n === "it" ? Yt(e) : n === "pt" ? Xt(e) : n === "zh" ? Zt(e) : n === "ja" ? Qt(e) : n === "ko" ? $t(e) : n === "ru" ? en(e) : Gt(e);
}), nn = () => "Understanding the Impact", rn = () => "Comprendre l'impact", an = () => "Entendiendo el impacto", on = () => "Die Auswirkungen verstehen", sn = () => "Capire l'impatto", cn = () => "Entendendo o impacto", ln = () => "理解影响", un = () => "影響を理解する", dn = () => "영향 이해하기", fn = () => "Понимание влияния", pn = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? rn(e) : n === "es" ? an(e) : n === "de" ? on(e) : n === "it" ? sn(e) : n === "pt" ? cn(e) : n === "zh" ? ln(e) : n === "ja" ? un(e) : n === "ko" ? dn(e) : n === "ru" ? fn(e) : nn(e);
}), mn = () => "Waterfall requests:", hn = () => "Requêtes en cascade :", gn = () => "Solicitudes en cascada:", _n = () => "Waterfall-Anfragen:", vn = () => "Richieste a cascata:", yn = () => "Pedidos em cascata:", bn = () => "瀑布流请求：", xn = () => "ウォーターフォールリクエスト:", Sn = () => "워터폴(Waterfall) 요청:", Cn = () => "Каскадные запросы (Waterfall requests):", wn = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? hn(e) : n === "es" ? gn(e) : n === "de" ? _n(e) : n === "it" ? vn(e) : n === "pt" ? yn(e) : n === "zh" ? bn(e) : n === "ja" ? xn(e) : n === "ko" ? Sn(e) : n === "ru" ? Cn(e) : mn(e);
}), Z = () => "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.", Tn = () => "l'application doit d'abord se charger, déterminer la langue, puis récupérer le bon morceau — ajoutant des allers-retours réseau.", En = Z, Dn = Z, On = Z, kn = Z, An = Z, jn = Z, Mn = Z, Nn = Z, Q = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Tn(e) : n === "es" ? En(e) : n === "de" ? Dn(e) : n === "it" ? On(e) : n === "pt" ? kn(e) : n === "zh" ? An(e) : n === "ja" ? jn(e) : n === "ko" ? Mn(e) : n === "ru" ? Nn(e) : Z(e);
}), Pn = () => "What this benchmark measures", Fn = () => "Ce que ce benchmark mesure", In = () => "Qué mide este benchmark", Ln = () => "Was dieser Benchmark misst", Rn = () => "Cosa misura questo benchmark", zn = () => "O que este benchmark mede", Bn = () => "本基准测试测量什么", $ = () => "このベンチマークが測定するもの", Vn = () => "이 벤치마크가 측정하는 것", Hn = () => "Что измеряет этот бенчмарк", Un = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Fn(e) : n === "es" ? In(e) : n === "de" ? Ln(e) : n === "it" ? Rn(e) : n === "pt" ? zn(e) : n === "zh" ? Bn(e) : n === "ja" ? $(e) : n === "ko" ? Vn(e) : n === "ru" ? Hn(e) : Pn(e);
}), Wn = () => "Why a single large JSON can hurt performance", Gn = () => "Pourquoi un seul JSON volumineux peut nuire aux performances", Kn = () => "Por qué un solo JSON grande puede perjudicar el rendimiento", qn = () => "Warum ein einziges großes JSON die Leistung beeinträchtigen kann", Jn = () => "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni", Yn = () => "Por que um único JSON grande pode prejudicar o desempenho", Xn = () => "为什么单个大型 JSON 会损害性能", Zn = () => "ひとつの巨大な JSON がパフォーマンスを低下させる理由", Qn = () => "단일 대형 JSON이 성능을 저하시키는 이유", $n = () => "Почему один большой JSON может снизить производительность", er = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Gn(e) : n === "es" ? Kn(e) : n === "de" ? qn(e) : n === "it" ? Jn(e) : n === "pt" ? Yn(e) : n === "zh" ? Xn(e) : n === "ja" ? Zn(e) : n === "ko" ? Qn(e) : n === "ru" ? $n(e) : Wn(e);
});
function tr() {
	return a("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			i("h2", {
				className: "text-2xl font-bold text-foreground",
				children: pn()
			}),
			a("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					i("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: er()
					}),
					i("p", {
						className: "text-sm text-muted-foreground",
						children: dt()
					}),
					a("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							i("li", { children: Nt() }),
							i("li", { children: Ce() }),
							i("li", { children: Pe() })
						]
					})
				]
			}),
			a("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					i("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: Wt()
					}),
					i("p", {
						className: "text-sm text-muted-foreground",
						children: St()
					}),
					a("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							a("li", { children: [
								i("strong", {
									className: "text-foreground",
									children: wn()
								}),
								" ",
								Q ? Q() : "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
							] }),
							a("li", { children: [
								i("strong", {
									className: "text-foreground",
									children: Ge()
								}),
								" ",
								X ? X() : "users may briefly see translation keys or a fallback language before the chunk arrives."
							] }),
							a("li", { children: [
								i("strong", {
									className: "text-foreground",
									children: U()
								}),
								" ",
								J ? J() : "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
							] })
						]
					})
				]
			}),
			a("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [i("h3", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: Un()
				}), i("p", {
					className: "text-sm text-muted-foreground",
					children: tn()
				})]
			})
		]
	});
}
function nr() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function rr(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function ir({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		rr("AppRoot", c);
	}, [c]), e(() => {
		v(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		nr();
	}, []), i(r, { children: a });
}
function ar({ children: e }) {
	return i(ir, { children: e });
}
function or() {
	return i(ar, { children: i(tr, {}) });
}
export { or as default };
