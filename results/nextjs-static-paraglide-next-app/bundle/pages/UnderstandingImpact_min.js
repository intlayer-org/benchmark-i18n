import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsxDEV as i } from "react/jsx-dev-runtime";
import { useParams as a } from "next/navigation";
var o = {}, s = [
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
], c = "PARAGLIDE_LOCALE", l = 3456e4, u = [
	"cookie",
	"globalVariable",
	"baseLocale"
], d = [], f = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	let e = u;
	!f && typeof window < "u" && window.location?.href && (e = D(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, g(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ae();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (k(t) && O.has(t)) {
			let e = O.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return re(t);
			}
		}
		let e = _(n);
		if (e) return e;
	}
}
var te = (e) => {
	e ? window.location.href = e : window.location.reload();
}, g = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = h();
	} catch {}
	let i = [], a = u;
	!f && typeof window < "u" && window.location?.href && (a = D(window.location.href));
	for (let t of a) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (f || typeof document > "u" || typeof window > "u") continue;
		let t = `${c}=${e}; path=/; max-age=${l}`;
		document.cookie = t, w();
	} else if (t === "baseLocale") continue;
	else if (k(t) && O.has(t)) {
		let n = O.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!f && n.reload && window.location && e !== r && te(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function _(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of s) if (e.toLowerCase() === t) return e;
}
function re(e) {
	let t = _(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${s.join(", ")}`);
}
function v(e) {
	return e;
}
function y(e, t) {
	return e.exec(t.href);
}
var b = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), x = RegExp(`(?:^|;\\s*)${b}=([^;]*)`), S = Symbol(), C = S;
function w() {
	C = S;
}
function ie() {
	typeof queueMicrotask == "function" ? queueMicrotask(w) : Promise.resolve().then(w);
}
function ae() {
	if (typeof document > "u") return;
	if (C !== S) return C;
	let e = document.cookie.match(x)?.[1];
	return C = _(e), ie(), C;
}
function oe(e) {
	return se(e);
}
function se(e) {
	let t = v(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && _(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), v(t);
}
var T, E;
function ce(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (T === t) return E;
	let n = v(new URL(t, "http://example.com")), r = oe(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of d) if (y(new o(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return T = t, E = a, a;
}
function D(e) {
	let t = ce(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var O = /* @__PURE__ */ new Map();
function k(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var A = () => "Cache invalidation:", j = () => "Invalidation du cache :", M = () => "Invalidación de la caché:", N = () => "Cache-Invalidierung:", P = () => "Invalidazione della cache:", F = () => "Invalidação de cache:", I = () => "缓存失效：", L = () => "キャッシュの無効化:", R = () => "캐시 무효화:", z = () => "Инвалидация кэша:", B = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? j(e) : n === "es" ? M(e) : n === "de" ? N(e) : n === "it" ? P(e) : n === "pt" ? F(e) : n === "zh" ? I(e) : n === "ja" ? L(e) : n === "ko" ? R(e) : n === "ru" ? z(e) : A(e);
}), V = () => "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.", H = () => "la mise à jour des traductions nécessite des stratégies de purge du cache pour garantir que les utilisateurs reçoivent le contenu frais sans re-télécharger les morceaux inchangés.", U = V, W = V, G = V, le = V, ue = V, de = V, fe = V, pe = V, K = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? H(e) : n === "es" ? U(e) : n === "de" ? W(e) : n === "it" ? G(e) : n === "pt" ? le(e) : n === "zh" ? ue(e) : n === "ja" ? de(e) : n === "ko" ? fe(e) : n === "ru" ? pe(e) : V(e);
}), me = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", he = () => "Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.", ge = () => "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.", _e = () => "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.", ve = () => "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.", ye = () => "As arquiteturas baseadas no contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.", be = () => "基于上下文的架构在语言环境更改时会导致级联重新渲染，因为即使特定键没有更改，每个消费者都会收到通知。", xe = () => "コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的な再レンダリングが発生する可能性があります。", Se = () => "컨텍스트 기반 아키텍처는 로케일이 변경될 때 연쇄적인 리렌더링을 일으킬 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자에게 알림이 가기 때문입니다.", Ce = () => "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.", we = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? he(e) : n === "es" ? ge(e) : n === "de" ? _e(e) : n === "it" ? ve(e) : n === "pt" ? ye(e) : n === "zh" ? be(e) : n === "ja" ? xe(e) : n === "ko" ? Se(e) : n === "ru" ? Ce(e) : me(e);
}), Te = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", Ee = () => "Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.", De = () => "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.", Oe = () => "Während des serverseitigen Renderings wird das vollständige Wörterbuch in den HTML-Payload serialisiert, wodurch sich die Dokumentgröße erhöht, die heruntergeladen und hydratisiert werden muss.", ke = () => "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idrato.", Ae = () => "Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.", je = () => "在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。", Me = () => "サーバーサイドレンダリング中、辞書全体が HTML ペイロードにシリアライズされ、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。", Ne = () => "서버 사이드 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어, 다운로드 및 수화가 필요한 문서 크기가 증가합니다.", Pe = () => "Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.", Fe = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ee(e) : n === "es" ? De(e) : n === "de" ? Oe(e) : n === "it" ? ke(e) : n === "pt" ? Ae(e) : n === "zh" ? je(e) : n === "ja" ? Me(e) : n === "ko" ? Ne(e) : n === "ru" ? Pe(e) : Te(e);
}), Ie = () => "Flash of untranslated content (FOUC):", Le = () => "Flash de contenu non traduit (FOUC) :", Re = () => "Parpadeo de contenido no traducido (FOUC):", ze = () => "Aufblitzen von nicht übersetztem Inhalt (FOUC):", Be = () => "Flash di contenuti non tradotti (FOUC):", Ve = () => "Flash de conteúdo não traduzido (FOUC):", He = () => "未翻译内容闪烁 (FOUC)：", Ue = () => "未翻訳コンテンツのフラッシュ (FOUC):", We = () => "번역되지 않은 콘텐츠의 깜빡임 (FOUC):", Ge = () => "Мерцание непереведенного контента (FOUC):", Ke = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Le(e) : n === "es" ? Re(e) : n === "de" ? ze(e) : n === "it" ? Be(e) : n === "pt" ? Ve(e) : n === "zh" ? He(e) : n === "ja" ? Ue(e) : n === "ko" ? We(e) : n === "ru" ? Ge(e) : Ie(e);
}), q = () => "users may briefly see translation keys or a fallback language before the chunk arrives.", qe = () => "les utilisateurs peuvent brièvement voir les clés de traduction ou une langue de repli avant l'arrivée du morceau.", Je = q, Ye = q, Xe = q, Ze = q, Qe = q, $e = q, et = q, tt = q, J = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? qe(e) : n === "es" ? Je(e) : n === "de" ? Ye(e) : n === "it" ? Xe(e) : n === "pt" ? Ze(e) : n === "zh" ? Qe(e) : n === "ja" ? $e(e) : n === "ko" ? et(e) : n === "ru" ? tt(e) : q(e);
}), nt = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", rt = () => "De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :", it = () => "Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:", at = () => "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:", ot = () => "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:", st = () => "Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:", ct = () => "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会持有对整个字典的引用。这意味着：", lt = () => "多くの i18n ライブラリは、React コンテキストを介して提供される単一の JSON オブジェクトに翻訳を保存します。このオブジェクトが巨大（数千のキー）な場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：", ut = () => "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 컴포넌트는 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:", dt = () => "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:", ft = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? rt(e) : n === "es" ? it(e) : n === "de" ? at(e) : n === "it" ? ot(e) : n === "pt" ? st(e) : n === "zh" ? ct(e) : n === "ja" ? lt(e) : n === "ko" ? ut(e) : n === "ru" ? dt(e) : nt(e);
}), pt = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", mt = () => "La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :", ht = () => "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:", gt = () => "Das Aufteilen von Übersetzungen in Teilstücke pro Route oder Namensraum kann den initialen Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:", _t = () => "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:", vt = () => "Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:", yt = () => "将翻译拆分为每个路由或每个命名空间的块可以显著减少初始负载。但它引入了新的挑战：", bt = () => "翻訳をルートごと、または名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：", xt = () => "번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:", St = () => "Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:", Ct = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? mt(e) : n === "es" ? ht(e) : n === "de" ? gt(e) : n === "it" ? _t(e) : n === "pt" ? vt(e) : n === "zh" ? yt(e) : n === "ja" ? bt(e) : n === "ko" ? xt(e) : n === "ru" ? St(e) : pt(e);
}), wt = () => "The JSON must be parsed on every page load — blocking the main thread.", Tt = () => "Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.", Et = () => "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.", Dt = () => "Das JSON muss bei jedem Seitenladen geparst werden — was den Haupt-Thread blockiert.", Ot = () => "Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.", kt = () => "O JSON deve ser analisado em cada carga de página — bloqueando a linha de execução principal.", At = () => "JSON 必须在每次页面加载时进行解析 —— 阻塞主线程。", jt = () => "JSON はページ読み込みのたびにパースされる必要があり、メインスレッドをブロックします。", Mt = () => "JSON은 모든 페이지 로드 시 파싱되어야 하며, 이는 메인 스레드를 차단합니다.", Nt = () => "JSON должен парситься при каждой загрузке страницы — блокируя основной поток.", Pt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Tt(e) : n === "es" ? Et(e) : n === "de" ? Dt(e) : n === "it" ? Ot(e) : n === "pt" ? kt(e) : n === "zh" ? At(e) : n === "ja" ? jt(e) : n === "ko" ? Mt(e) : n === "ru" ? Nt(e) : wt(e);
}), Ft = () => "The trade-offs of dynamic loading", It = () => "Les compromis du chargement dynamique", Lt = () => "Las compensaciones de la carga dinámica", Rt = () => "Die Kompromisse beim dynamischen Laden", zt = () => "I compromessi del caricamento dinamico", Bt = () => "As compensações do carregamento dinâmico", Vt = () => "动态加载的权衡", Ht = () => "動的読み込みのトレードオフ", Ut = () => "동적 로딩의 트레이드오프", Wt = () => "Компромиссы динамической загрузки", Gt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? It(e) : n === "es" ? Lt(e) : n === "de" ? Rt(e) : n === "it" ? zt(e) : n === "pt" ? Bt(e) : n === "zh" ? Vt(e) : n === "ja" ? Ht(e) : n === "ko" ? Ut(e) : n === "ru" ? Wt(e) : Ft(e);
}), Kt = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", qt = () => "Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.", Jt = () => "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.", Yt = () => "Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.", Xt = () => "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.", Zt = () => "Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento tardio. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.", Qt = () => "此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的权重、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。", $t = () => "このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツのパースとレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。", en = () => "이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 그리고 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.", tn = () => "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.", nn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? qt(e) : n === "es" ? Jt(e) : n === "de" ? Yt(e) : n === "it" ? Xt(e) : n === "pt" ? Zt(e) : n === "zh" ? Qt(e) : n === "ja" ? $t(e) : n === "ko" ? en(e) : n === "ru" ? tn(e) : Kt(e);
}), rn = () => "Understanding the Impact", an = () => "Comprendre l'impact", on = () => "Entendiendo el impacto", sn = () => "Die Auswirkungen verstehen", cn = () => "Capire l'impatto", ln = () => "Entendendo o impacto", un = () => "理解影响", dn = () => "影響を理解する", fn = () => "영향 이해하기", pn = () => "Понимание влияния", mn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? an(e) : n === "es" ? on(e) : n === "de" ? sn(e) : n === "it" ? cn(e) : n === "pt" ? ln(e) : n === "zh" ? un(e) : n === "ja" ? dn(e) : n === "ko" ? fn(e) : n === "ru" ? pn(e) : rn(e);
}), hn = () => "Waterfall requests:", gn = () => "Requêtes en cascade :", _n = () => "Solicitudes en cascada:", vn = () => "Waterfall-Anfragen:", yn = () => "Richieste a cascata:", bn = () => "Pedidos em cascata:", xn = () => "瀑布流请求：", Sn = () => "ウォーターフォールリクエスト:", Cn = () => "워터폴(Waterfall) 요청:", wn = () => "Каскадные запросы (Waterfall requests):", Tn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? gn(e) : n === "es" ? _n(e) : n === "de" ? vn(e) : n === "it" ? yn(e) : n === "pt" ? bn(e) : n === "zh" ? xn(e) : n === "ja" ? Sn(e) : n === "ko" ? Cn(e) : n === "ru" ? wn(e) : hn(e);
}), Y = () => "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.", En = () => "l'application doit d'abord se charger, déterminer la langue, puis récupérer le bon morceau — ajoutant des allers-retours réseau.", Dn = Y, On = Y, kn = Y, An = Y, jn = Y, Mn = Y, Nn = Y, Pn = Y, X = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? En(e) : n === "es" ? Dn(e) : n === "de" ? On(e) : n === "it" ? kn(e) : n === "pt" ? An(e) : n === "zh" ? jn(e) : n === "ja" ? Mn(e) : n === "ko" ? Nn(e) : n === "ru" ? Pn(e) : Y(e);
}), Fn = () => "What this benchmark measures", In = () => "Ce que ce benchmark mesure", Ln = () => "Qué mide este benchmark", Rn = () => "Was dieser Benchmark misst", zn = () => "Cosa misura questo benchmark", Bn = () => "O que este benchmark mede", Vn = () => "本基准测试测量什么", Hn = () => "このベンチマークが測定するもの", Un = () => "이 벤치마크가 측정하는 것", Wn = () => "Что измеряет этот бенчмарк", Gn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? In(e) : n === "es" ? Ln(e) : n === "de" ? Rn(e) : n === "it" ? zn(e) : n === "pt" ? Bn(e) : n === "zh" ? Vn(e) : n === "ja" ? Hn(e) : n === "ko" ? Un(e) : n === "ru" ? Wn(e) : Fn(e);
}), Kn = () => "Why a single large JSON can hurt performance", qn = () => "Pourquoi un seul JSON volumineux peut nuire aux performances", Jn = () => "Por qué un solo JSON grande puede perjudicar el rendimiento", Yn = () => "Warum ein einziges großes JSON die Leistung beeinträchtigen kann", Z = () => "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni", Xn = () => "Por que um único JSON grande pode prejudicar o desempenho", Zn = () => "为什么单个大型 JSON 会损害性能", Qn = () => "ひとつの巨大な JSON がパフォーマンスを低下させる理由", $n = () => "단일 대형 JSON이 성능을 저하시키는 이유", er = () => "Почему один большой JSON может снизить производительность", tr = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? qn(e) : n === "es" ? Jn(e) : n === "de" ? Yn(e) : n === "it" ? Z(e) : n === "pt" ? Xn(e) : n === "zh" ? Zn(e) : n === "ja" ? Qn(e) : n === "ko" ? $n(e) : n === "ru" ? er(e) : Kn(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/home/UnderstandingImpact.tsx";
function nr() {
	return i("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			i("h2", {
				className: "text-2xl font-bold text-foreground",
				children: mn()
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 8,
				columnNumber: 7
			}, this),
			i("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					i("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: tr()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 13,
						columnNumber: 9
					}, this),
					i("p", {
						className: "text-sm text-muted-foreground",
						children: ft()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 16,
						columnNumber: 9
					}, this),
					i("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							i("li", { children: Pt() }, void 0, !1, {
								fileName: Q,
								lineNumber: 20,
								columnNumber: 11
							}, this),
							i("li", { children: we() }, void 0, !1, {
								fileName: Q,
								lineNumber: 21,
								columnNumber: 11
							}, this),
							i("li", { children: Fe() }, void 0, !1, {
								fileName: Q,
								lineNumber: 24,
								columnNumber: 11
							}, this)
						]
					}, void 0, !0, {
						fileName: Q,
						lineNumber: 19,
						columnNumber: 9
					}, this)
				]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 12,
				columnNumber: 7
			}, this),
			i("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					i("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: Gt()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 29,
						columnNumber: 9
					}, this),
					i("p", {
						className: "text-sm text-muted-foreground",
						children: Ct()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 32,
						columnNumber: 9
					}, this),
					i("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							i("li", { children: [
								i("strong", {
									className: "text-foreground",
									children: Tn()
								}, void 0, !1, {
									fileName: Q,
									lineNumber: 37,
									columnNumber: 13
								}, this),
								" ",
								X ? X() : "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
							] }, void 0, !0, {
								fileName: Q,
								lineNumber: 36,
								columnNumber: 11
							}, this),
							i("li", { children: [
								i("strong", {
									className: "text-foreground",
									children: Ke()
								}, void 0, !1, {
									fileName: Q,
									lineNumber: 45,
									columnNumber: 13
								}, this),
								" ",
								J ? J() : "users may briefly see translation keys or a fallback language before the chunk arrives."
							] }, void 0, !0, {
								fileName: Q,
								lineNumber: 44,
								columnNumber: 11
							}, this),
							i("li", { children: [
								i("strong", {
									className: "text-foreground",
									children: B()
								}, void 0, !1, {
									fileName: Q,
									lineNumber: 53,
									columnNumber: 13
								}, this),
								" ",
								K ? K() : "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
							] }, void 0, !0, {
								fileName: Q,
								lineNumber: 52,
								columnNumber: 11
							}, this)
						]
					}, void 0, !0, {
						fileName: Q,
						lineNumber: 35,
						columnNumber: 9
					}, this)
				]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 28,
				columnNumber: 7
			}, this),
			i("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [i("h3", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: Gn()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 64,
					columnNumber: 9
				}, this), i("p", {
					className: "text-sm text-muted-foreground",
					children: nn()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 67,
					columnNumber: 9
				}, this)]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 63,
				columnNumber: 7
			}, this)
		]
	}, void 0, !0, {
		fileName: Q,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
function rr() {
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
function ir(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var ar = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/AppProviders.tsx";
function or({ children: o }) {
	let s = a().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		ir("AppRoot", c);
	}, [c]), e(() => {
		g(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		rr();
	}, []), i(r, { children: o }, void 0, !1, {
		fileName: ar,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var sr = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/scripts/Wrapper.tsx";
function cr({ children: e }) {
	return i(or, { children: e }, void 0, !1, {
		fileName: sr,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/home/UnderstandingImpact.wrapper.tsx";
function lr() {
	return i(cr, { children: i(nr, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { lr as default };
