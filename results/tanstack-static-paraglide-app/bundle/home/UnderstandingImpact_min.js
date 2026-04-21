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
	let t = ne(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, h(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ne(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ae();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (v(t) && _.has(t)) {
			let e = _.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ie(t);
			}
		}
		let e = g(n);
		if (e) return e;
	}
}
var re = (e) => {
	e ? window.location.href = e : window.location.reload();
}, h = (e, t) => {
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
	else if (v(t) && _.has(t)) {
		let n = _.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let c = () => {
		n.reload && window.location && e !== r && re(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		c();
	});
	c();
};
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function ie(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function ae() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${a}=([^;]+)`))?.[2];
	return g(e);
}
var _ = /* @__PURE__ */ new Map();
function v(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var oe = () => "Understanding the Impact", se = () => "Comprendre l'impact", y = () => "Entendiendo el impacto", b = () => "Die Auswirkungen verstehen", x = () => "Capire l'impatto", S = () => "Entendendo o impacto", C = () => "理解影响", w = () => "影響を理解する", T = () => "영향 이해하기", E = () => "Понимание влияния", D = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? oe(e) : n === "fr" ? se(e) : n === "es" ? y(e) : n === "de" ? b(e) : n === "it" ? x(e) : n === "pt" ? S(e) : n === "zh" ? C(e) : n === "ja" ? w(e) : n === "ko" ? T(e) : E(e);
}), O = () => "Why a single large JSON can hurt performance", k = () => "Pourquoi un seul JSON volumineux peut nuire aux performances", A = () => "Por qué un solo JSON grande puede perjudicar el rendimiento", j = () => "Warum ein einziges großes JSON die Leistung beeinträchtigen kann", M = () => "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni", N = () => "Por que um único JSON grande pode prejudicar o desempenho", P = () => "为什么单个大型 JSON 会损害性能", F = () => "ひとつの巨大な JSON がパフォーマンスを低下させる理由", I = () => "단일 대형 JSON이 성능을 저하시키는 이유", L = () => "Почему один большой JSON может снизить производительность", R = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? O(e) : n === "fr" ? k(e) : n === "es" ? A(e) : n === "de" ? j(e) : n === "it" ? M(e) : n === "pt" ? N(e) : n === "zh" ? P(e) : n === "ja" ? F(e) : n === "ko" ? I(e) : L(e);
}), z = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", B = () => "De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :", V = () => "Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:", H = () => "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:", U = () => "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:", W = () => "Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:", G = () => "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会持有对整个字典的引用。这意味着：", K = () => "多くの i18n ライブラリは、React コンテキストを介して提供される単一の JSON オブジェクトに翻訳を保存します。このオブジェクトが巨大（数千のキー）な場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：", ce = () => "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 컴포넌트는 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:", le = () => "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:", ue = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? z(e) : n === "fr" ? B(e) : n === "es" ? V(e) : n === "de" ? H(e) : n === "it" ? U(e) : n === "pt" ? W(e) : n === "zh" ? G(e) : n === "ja" ? K(e) : n === "ko" ? ce(e) : le(e);
}), de = () => "The JSON must be parsed on every page load — blocking the main thread.", fe = () => "Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.", pe = () => "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.", me = () => "Das JSON muss bei jedem Seitenladen geparst werden — was den Haupt-Thread blockiert.", he = () => "Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.", ge = () => "O JSON deve ser analisado em cada carga de página — bloqueando a linha de execução principal.", _e = () => "JSON 必须在每次页面加载时进行解析 —— 阻塞主线程。", ve = () => "JSON はページ読み込みのたびにパースされる必要があり、メインスレッドをブロックします。", ye = () => "JSON은 모든 페이지 로드 시 파싱되어야 하며, 이는 메인 스레드를 차단합니다.", be = () => "JSON должен парситься при каждой загрузке страницы — блокируя основной поток.", xe = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? de(e) : n === "fr" ? fe(e) : n === "es" ? pe(e) : n === "de" ? me(e) : n === "it" ? he(e) : n === "pt" ? ge(e) : n === "zh" ? _e(e) : n === "ja" ? ve(e) : n === "ko" ? ye(e) : be(e);
}), Se = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", Ce = () => "Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.", we = () => "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.", Te = () => "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.", Ee = () => "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.", De = () => "As arquiteturas baseadas no contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.", Oe = () => "基于上下文的架构在语言环境更改时会导致级联重新渲染，因为即使特定键没有更改，每个消费者都会收到通知。", ke = () => "コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的な再レンダリングが発生する可能性があります。", Ae = () => "컨텍스트 기반 아키텍처는 로케일이 변경될 때 연쇄적인 리렌더링을 일으킬 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자에게 알림이 가기 때문입니다.", je = () => "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.", Me = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Se(e) : n === "fr" ? Ce(e) : n === "es" ? we(e) : n === "de" ? Te(e) : n === "it" ? Ee(e) : n === "pt" ? De(e) : n === "zh" ? Oe(e) : n === "ja" ? ke(e) : n === "ko" ? Ae(e) : je(e);
}), Ne = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", Pe = () => "Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.", Fe = () => "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.", Ie = () => "Während des serverseitigen Renderings wird das vollständige Wörterbuch in den HTML-Payload serialisiert, wodurch sich die Dokumentgröße erhöht, die heruntergeladen und hydratisiert werden muss.", Le = () => "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idrato.", Re = () => "Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.", ze = () => "在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。", Be = () => "サーバーサイドレンダリング中、辞書全体が HTML ペイロードにシリアライズされ、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。", Ve = () => "서버 사이드 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어, 다운로드 및 수화가 필요한 문서 크기가 증가합니다.", He = () => "Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.", Ue = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Ne(e) : n === "fr" ? Pe(e) : n === "es" ? Fe(e) : n === "de" ? Ie(e) : n === "it" ? Le(e) : n === "pt" ? Re(e) : n === "zh" ? ze(e) : n === "ja" ? Be(e) : n === "ko" ? Ve(e) : He(e);
}), We = () => "The trade-offs of dynamic loading", Ge = () => "Les compromis du chargement dynamique", Ke = () => "Las compensaciones de la carga dinámica", qe = () => "Die Kompromisse beim dynamischen Laden", Je = () => "I compromessi del caricamento dinamico", Ye = () => "As compensações do carregamento dinâmico", Xe = () => "动态加载的权衡", Ze = () => "動的読み込みのトレードオフ", Qe = () => "동적 로딩의 트레이드오프", $e = () => "Компромиссы динамической загрузки", et = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? We(e) : n === "fr" ? Ge(e) : n === "es" ? Ke(e) : n === "de" ? qe(e) : n === "it" ? Je(e) : n === "pt" ? Ye(e) : n === "zh" ? Xe(e) : n === "ja" ? Ze(e) : n === "ko" ? Qe(e) : $e(e);
}), tt = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", nt = () => "La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :", rt = () => "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:", it = () => "Das Aufteilen von Übersetzungen in Teilstücke pro Route oder Namensraum kann den initialen Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:", at = () => "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:", ot = () => "Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:", st = () => "将翻译拆分为每个路由或每个命名空间的块可以显著减少初始负载。但它引入了新的挑战：", ct = () => "翻訳をルートごと、または名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：", lt = () => "번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:", ut = () => "Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:", dt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? tt(e) : n === "fr" ? nt(e) : n === "es" ? rt(e) : n === "de" ? it(e) : n === "it" ? at(e) : n === "pt" ? ot(e) : n === "zh" ? st(e) : n === "ja" ? ct(e) : n === "ko" ? lt(e) : ut(e);
}), ft = () => "Waterfall requests:", pt = () => "Requêtes en cascade :", mt = () => "Solicitudes en cascada:", ht = () => "Waterfall-Anfragen:", gt = () => "Richieste a cascata:", _t = () => "Pedidos em cascata:", vt = () => "瀑布流请求：", yt = () => "ウォーターフォールリクエスト:", bt = () => "워터폴(Waterfall) 요청:", xt = () => "Каскадные запросы (Waterfall requests):", St = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ft(e) : n === "fr" ? pt(e) : n === "es" ? mt(e) : n === "de" ? ht(e) : n === "it" ? gt(e) : n === "pt" ? _t(e) : n === "zh" ? vt(e) : n === "ja" ? yt(e) : n === "ko" ? bt(e) : xt(e);
}), q = () => "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.", Ct = () => "l'application doit d'abord se charger, déterminer la langue, puis récupérer le bon morceau — ajoutant des allers-retours réseau.", wt = q, Tt = q, Et = q, Dt = q, Ot = q, kt = q, At = q, jt = q, J = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? q(e) : n === "fr" ? Ct(e) : n === "es" ? wt(e) : n === "de" ? Tt(e) : n === "it" ? Et(e) : n === "pt" ? Dt(e) : n === "zh" ? Ot(e) : n === "ja" ? kt(e) : n === "ko" ? At(e) : jt(e);
}), Mt = () => "Flash of untranslated content (FOUC):", Nt = () => "Flash de contenu non traduit (FOUC) :", Pt = () => "Parpadeo de contenido no traducido (FOUC):", Ft = () => "Aufblitzen von nicht übersetztem Inhalt (FOUC):", It = () => "Flash di contenuti non tradotti (FOUC):", Lt = () => "Flash de conteúdo não traduzido (FOUC):", Rt = () => "未翻译内容闪烁 (FOUC)：", zt = () => "未翻訳コンテンツのフラッシュ (FOUC):", Bt = () => "번역되지 않은 콘텐츠의 깜빡임 (FOUC):", Vt = () => "Мерцание непереведенного контента (FOUC):", Ht = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Mt(e) : n === "fr" ? Nt(e) : n === "es" ? Pt(e) : n === "de" ? Ft(e) : n === "it" ? It(e) : n === "pt" ? Lt(e) : n === "zh" ? Rt(e) : n === "ja" ? zt(e) : n === "ko" ? Bt(e) : Vt(e);
}), Y = () => "users may briefly see translation keys or a fallback language before the chunk arrives.", Ut = () => "les utilisateurs peuvent brièvement voir les clés de traduction ou une langue de repli avant l'arrivée du morceau.", Wt = Y, Gt = Y, Kt = Y, qt = Y, Jt = Y, Yt = Y, Xt = Y, Zt = Y, X = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Y(e) : n === "fr" ? Ut(e) : n === "es" ? Wt(e) : n === "de" ? Gt(e) : n === "it" ? Kt(e) : n === "pt" ? qt(e) : n === "zh" ? Jt(e) : n === "ja" ? Yt(e) : n === "ko" ? Xt(e) : Zt(e);
}), Qt = () => "Cache invalidation:", $t = () => "Invalidation du cache :", en = () => "Invalidación de la caché:", tn = () => "Cache-Invalidierung:", nn = () => "Invalidazione della cache:", rn = () => "Invalidação de cache:", an = () => "缓存失效：", on = () => "キャッシュの無効化:", sn = () => "캐시 무효화:", cn = () => "Инвалидация кэша:", ln = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Qt(e) : n === "fr" ? $t(e) : n === "es" ? en(e) : n === "de" ? tn(e) : n === "it" ? nn(e) : n === "pt" ? rn(e) : n === "zh" ? an(e) : n === "ja" ? on(e) : n === "ko" ? sn(e) : cn(e);
}), Z = () => "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.", un = () => "la mise à jour des traductions nécessite des stratégies de purge du cache pour garantir que les utilisateurs reçoivent le contenu frais sans re-télécharger les morceaux inchangés.", dn = Z, fn = Z, pn = Z, mn = Z, hn = Z, gn = Z, _n = Z, vn = Z, Q = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Z(e) : n === "fr" ? un(e) : n === "es" ? dn(e) : n === "de" ? fn(e) : n === "it" ? pn(e) : n === "pt" ? mn(e) : n === "zh" ? hn(e) : n === "ja" ? gn(e) : n === "ko" ? _n(e) : vn(e);
}), yn = () => "What this benchmark measures", bn = () => "Ce que ce benchmark mesure", xn = () => "Qué mide este benchmark", Sn = () => "Was dieser Benchmark misst", Cn = () => "Cosa misura questo benchmark", wn = () => "O que este benchmark mede", Tn = () => "本基准测试测量什么", En = () => "このベンチマークが測定するもの", $ = () => "이 벤치마크가 측정하는 것", Dn = () => "Что измеряет этот бенчмарк", On = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? yn(e) : n === "fr" ? bn(e) : n === "es" ? xn(e) : n === "de" ? Sn(e) : n === "it" ? Cn(e) : n === "pt" ? wn(e) : n === "zh" ? Tn(e) : n === "ja" ? En(e) : n === "ko" ? $(e) : Dn(e);
}), kn = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", An = () => "Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.", jn = () => "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.", Mn = () => "Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.", Nn = () => "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.", Pn = () => "Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento tardio. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.", Fn = () => "此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的权重、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。", In = () => "このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツのパースとレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。", Ln = () => "이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 그리고 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.", Rn = () => "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.", zn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? kn(e) : n === "fr" ? An(e) : n === "es" ? jn(e) : n === "de" ? Mn(e) : n === "it" ? Nn(e) : n === "pt" ? Pn(e) : n === "zh" ? Fn(e) : n === "ja" ? In(e) : n === "ko" ? Ln(e) : Rn(e);
});
function Bn() {
	return n("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			t("h2", {
				className: "text-2xl font-bold text-foreground",
				children: D()
			}),
			n("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					t("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: R()
					}),
					t("p", {
						className: "text-sm text-muted-foreground",
						children: ue()
					}),
					n("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							t("li", { children: xe() }),
							t("li", { children: Me() }),
							t("li", { children: Ue() })
						]
					})
				]
			}),
			n("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					t("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: et()
					}),
					t("p", {
						className: "text-sm text-muted-foreground",
						children: dt()
					}),
					n("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							n("li", { children: [
								t("strong", {
									className: "text-foreground",
									children: St()
								}),
								" ",
								J ? J() : "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
							] }),
							n("li", { children: [
								t("strong", {
									className: "text-foreground",
									children: Ht()
								}),
								" ",
								X ? X() : "users may briefly see translation keys or a fallback language before the chunk arrives."
							] }),
							n("li", { children: [
								t("strong", {
									className: "text-foreground",
									children: ln()
								}),
								" ",
								Q ? Q() : "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
							] })
						]
					})
				]
			}),
			n("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [t("h3", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: On()
				}), t("p", {
					className: "text-sm text-muted-foreground",
					children: zn()
				})]
			})
		]
	});
}
h("en", { reload: !1 });
function Vn({ children: n }) {
	return t(e, { children: n });
}
function Hn() {
	return t(Vn, { children: t(Bn, {}) });
}
export { Hn as default };
