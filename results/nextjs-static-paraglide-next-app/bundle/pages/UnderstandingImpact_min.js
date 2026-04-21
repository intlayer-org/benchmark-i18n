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
], l = "PARAGLIDE_LOCALE", ee = 3456e4, u = [
	"cookie",
	"globalVariable",
	"baseLocale"
], d = [], f, p;
function te(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (f === t) return p;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of d) if (new s(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return f = t, p = r, r;
}
function m(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var h = void 0, g = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var _, v = !1, y = () => {
	if (h) {
		let e = h?.getStore()?.locale;
		if (e) return e;
	}
	let e = u;
	!g && typeof window < "u" && window.location?.href && (e = m(window.location.href));
	let t = ne(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return v || (_ = t, v = !0, b(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ne(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ae();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && _ !== void 0) n = _;
		else if (C(t) && S.has(t)) {
			let e = S.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ie(t);
			}
		}
		let e = x(n);
		if (e) return e;
	}
}
var re = (e) => {
	e ? window.location.href = e : window.location.reload();
}, b = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = y();
	} catch {}
	let i = [], a = u;
	!g && typeof window < "u" && window.location?.href && (a = m(window.location.href));
	for (let t of a) if (t === "globalVariable") _ = e;
	else if (t === "cookie") {
		if (g || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (C(t) && S.has(t)) {
		let n = S.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!g && n.reload && window.location && e !== r && re(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function x(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function ie(e) {
	let t = x(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function ae() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${l}=([^;]+)`))?.[2];
	return x(e);
}
var S = /* @__PURE__ */ new Map();
function C(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var oe = () => "Understanding the Impact", se = () => "Comprendre l'impact", w = () => "Entendiendo el impacto", T = () => "Die Auswirkungen verstehen", E = () => "Capire l'impatto", D = () => "Entendendo o impacto", O = () => "理解影响", k = () => "影響を理解する", A = () => "영향 이해하기", j = () => "Понимание влияния", M = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? oe(e) : n === "fr" ? se(e) : n === "es" ? w(e) : n === "de" ? T(e) : n === "it" ? E(e) : n === "pt" ? D(e) : n === "zh" ? O(e) : n === "ja" ? k(e) : n === "ko" ? A(e) : j(e);
}), N = () => "Why a single large JSON can hurt performance", P = () => "Pourquoi un seul JSON volumineux peut nuire aux performances", F = () => "Por qué un solo JSON grande puede perjudicar el rendimiento", I = () => "Warum ein einziges großes JSON die Leistung beeinträchtigen kann", L = () => "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni", R = () => "Por que um único JSON grande pode prejudicar o desempenho", z = () => "为什么单个大型 JSON 会损害性能", B = () => "ひとつの巨大な JSON がパフォーマンスを低下させる理由", V = () => "단일 대형 JSON이 성능을 저하시키는 이유", H = () => "Почему один большой JSON может снизить производительность", U = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? N(e) : n === "fr" ? P(e) : n === "es" ? F(e) : n === "de" ? I(e) : n === "it" ? L(e) : n === "pt" ? R(e) : n === "zh" ? z(e) : n === "ja" ? B(e) : n === "ko" ? V(e) : H(e);
}), W = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", G = () => "De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :", K = () => "Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:", ce = () => "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:", le = () => "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:", ue = () => "Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:", de = () => "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会持有对整个字典的引用。这意味着：", fe = () => "多くの i18n ライブラリは、React コンテキストを介して提供される単一の JSON オブジェクトに翻訳を保存します。このオブジェクトが巨大（数千のキー）な場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：", pe = () => "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 컴포넌트는 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:", me = () => "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:", he = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? W(e) : n === "fr" ? G(e) : n === "es" ? K(e) : n === "de" ? ce(e) : n === "it" ? le(e) : n === "pt" ? ue(e) : n === "zh" ? de(e) : n === "ja" ? fe(e) : n === "ko" ? pe(e) : me(e);
}), ge = () => "The JSON must be parsed on every page load — blocking the main thread.", _e = () => "Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.", ve = () => "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.", ye = () => "Das JSON muss bei jedem Seitenladen geparst werden — was den Haupt-Thread blockiert.", be = () => "Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.", xe = () => "O JSON deve ser analisado em cada carga de página — bloqueando a linha de execução principal.", Se = () => "JSON 必须在每次页面加载时进行解析 —— 阻塞主线程。", Ce = () => "JSON はページ読み込みのたびにパースされる必要があり、メインスレッドをブロックします。", we = () => "JSON은 모든 페이지 로드 시 파싱되어야 하며, 이는 메인 스레드를 차단합니다.", Te = () => "JSON должен парситься при каждой загрузке страницы — блокируя основной поток.", Ee = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? ge(e) : n === "fr" ? _e(e) : n === "es" ? ve(e) : n === "de" ? ye(e) : n === "it" ? be(e) : n === "pt" ? xe(e) : n === "zh" ? Se(e) : n === "ja" ? Ce(e) : n === "ko" ? we(e) : Te(e);
}), De = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", Oe = () => "Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.", ke = () => "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.", Ae = () => "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.", je = () => "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.", Me = () => "As arquiteturas baseadas no contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.", Ne = () => "基于上下文的架构在语言环境更改时会导致级联重新渲染，因为即使特定键没有更改，每个消费者都会收到通知。", Pe = () => "コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的な再レンダリングが発生する可能性があります。", Fe = () => "컨텍스트 기반 아키텍처는 로케일이 변경될 때 연쇄적인 리렌더링을 일으킬 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자에게 알림이 가기 때문입니다.", Ie = () => "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.", Le = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? De(e) : n === "fr" ? Oe(e) : n === "es" ? ke(e) : n === "de" ? Ae(e) : n === "it" ? je(e) : n === "pt" ? Me(e) : n === "zh" ? Ne(e) : n === "ja" ? Pe(e) : n === "ko" ? Fe(e) : Ie(e);
}), Re = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", ze = () => "Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.", Be = () => "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.", Ve = () => "Während des serverseitigen Renderings wird das vollständige Wörterbuch in den HTML-Payload serialisiert, wodurch sich die Dokumentgröße erhöht, die heruntergeladen und hydratisiert werden muss.", He = () => "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idrato.", Ue = () => "Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.", We = () => "在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。", Ge = () => "サーバーサイドレンダリング中、辞書全体が HTML ペイロードにシリアライズされ、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。", Ke = () => "서버 사이드 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어, 다운로드 및 수화가 필요한 문서 크기가 증가합니다.", qe = () => "Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.", Je = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Re(e) : n === "fr" ? ze(e) : n === "es" ? Be(e) : n === "de" ? Ve(e) : n === "it" ? He(e) : n === "pt" ? Ue(e) : n === "zh" ? We(e) : n === "ja" ? Ge(e) : n === "ko" ? Ke(e) : qe(e);
}), Ye = () => "The trade-offs of dynamic loading", Xe = () => "Les compromis du chargement dynamique", Ze = () => "Las compensaciones de la carga dinámica", Qe = () => "Die Kompromisse beim dynamischen Laden", $e = () => "I compromessi del caricamento dinamico", et = () => "As compensações do carregamento dinâmico", tt = () => "动态加载的权衡", nt = () => "動的読み込みのトレードオフ", rt = () => "동적 로딩의 트레이드오프", it = () => "Компромиссы динамической загрузки", at = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Ye(e) : n === "fr" ? Xe(e) : n === "es" ? Ze(e) : n === "de" ? Qe(e) : n === "it" ? $e(e) : n === "pt" ? et(e) : n === "zh" ? tt(e) : n === "ja" ? nt(e) : n === "ko" ? rt(e) : it(e);
}), ot = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", st = () => "La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :", ct = () => "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:", lt = () => "Das Aufteilen von Übersetzungen in Teilstücke pro Route oder Namensraum kann den initialen Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:", ut = () => "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:", dt = () => "Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:", ft = () => "将翻译拆分为每个路由或每个命名空间的块可以显著减少初始负载。但它引入了新的挑战：", pt = () => "翻訳をルートごと、または名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：", mt = () => "번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:", ht = () => "Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:", gt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? ot(e) : n === "fr" ? st(e) : n === "es" ? ct(e) : n === "de" ? lt(e) : n === "it" ? ut(e) : n === "pt" ? dt(e) : n === "zh" ? ft(e) : n === "ja" ? pt(e) : n === "ko" ? mt(e) : ht(e);
}), _t = () => "Waterfall requests:", vt = () => "Requêtes en cascade :", yt = () => "Solicitudes en cascada:", bt = () => "Waterfall-Anfragen:", xt = () => "Richieste a cascata:", St = () => "Pedidos em cascata:", Ct = () => "瀑布流请求：", wt = () => "ウォーターフォールリクエスト:", Tt = () => "워터폴(Waterfall) 요청:", Et = () => "Каскадные запросы (Waterfall requests):", Dt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? _t(e) : n === "fr" ? vt(e) : n === "es" ? yt(e) : n === "de" ? bt(e) : n === "it" ? xt(e) : n === "pt" ? St(e) : n === "zh" ? Ct(e) : n === "ja" ? wt(e) : n === "ko" ? Tt(e) : Et(e);
}), q = () => "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.", Ot = () => "l'application doit d'abord se charger, déterminer la langue, puis récupérer le bon morceau — ajoutant des allers-retours réseau.", kt = q, At = q, jt = q, Mt = q, Nt = q, Pt = q, Ft = q, It = q, J = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? q(e) : n === "fr" ? Ot(e) : n === "es" ? kt(e) : n === "de" ? At(e) : n === "it" ? jt(e) : n === "pt" ? Mt(e) : n === "zh" ? Nt(e) : n === "ja" ? Pt(e) : n === "ko" ? Ft(e) : It(e);
}), Lt = () => "Flash of untranslated content (FOUC):", Rt = () => "Flash de contenu non traduit (FOUC) :", zt = () => "Parpadeo de contenido no traducido (FOUC):", Bt = () => "Aufblitzen von nicht übersetztem Inhalt (FOUC):", Vt = () => "Flash di contenuti non tradotti (FOUC):", Ht = () => "Flash de conteúdo não traduzido (FOUC):", Ut = () => "未翻译内容闪烁 (FOUC)：", Wt = () => "未翻訳コンテンツのフラッシュ (FOUC):", Gt = () => "번역되지 않은 콘텐츠의 깜빡임 (FOUC):", Kt = () => "Мерцание непереведенного контента (FOUC):", qt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Lt(e) : n === "fr" ? Rt(e) : n === "es" ? zt(e) : n === "de" ? Bt(e) : n === "it" ? Vt(e) : n === "pt" ? Ht(e) : n === "zh" ? Ut(e) : n === "ja" ? Wt(e) : n === "ko" ? Gt(e) : Kt(e);
}), Y = () => "users may briefly see translation keys or a fallback language before the chunk arrives.", Jt = () => "les utilisateurs peuvent brièvement voir les clés de traduction ou une langue de repli avant l'arrivée du morceau.", Yt = Y, Xt = Y, Zt = Y, Qt = Y, $t = Y, en = Y, tn = Y, nn = Y, X = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Y(e) : n === "fr" ? Jt(e) : n === "es" ? Yt(e) : n === "de" ? Xt(e) : n === "it" ? Zt(e) : n === "pt" ? Qt(e) : n === "zh" ? $t(e) : n === "ja" ? en(e) : n === "ko" ? tn(e) : nn(e);
}), rn = () => "Cache invalidation:", an = () => "Invalidation du cache :", on = () => "Invalidación de la caché:", sn = () => "Cache-Invalidierung:", cn = () => "Invalidazione della cache:", ln = () => "Invalidação de cache:", un = () => "缓存失效：", dn = () => "キャッシュの無効化:", fn = () => "캐시 무효화:", pn = () => "Инвалидация кэша:", mn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? rn(e) : n === "fr" ? an(e) : n === "es" ? on(e) : n === "de" ? sn(e) : n === "it" ? cn(e) : n === "pt" ? ln(e) : n === "zh" ? un(e) : n === "ja" ? dn(e) : n === "ko" ? fn(e) : pn(e);
}), Z = () => "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.", hn = () => "la mise à jour des traductions nécessite des stratégies de purge du cache pour garantir que les utilisateurs reçoivent le contenu frais sans re-télécharger les morceaux inchangés.", gn = Z, _n = Z, vn = Z, yn = Z, bn = Z, xn = Z, Sn = Z, Cn = Z, Q = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Z(e) : n === "fr" ? hn(e) : n === "es" ? gn(e) : n === "de" ? _n(e) : n === "it" ? vn(e) : n === "pt" ? yn(e) : n === "zh" ? bn(e) : n === "ja" ? xn(e) : n === "ko" ? Sn(e) : Cn(e);
}), wn = () => "What this benchmark measures", Tn = () => "Ce que ce benchmark mesure", En = () => "Qué mide este benchmark", Dn = () => "Was dieser Benchmark misst", On = () => "Cosa misura questo benchmark", kn = () => "O que este benchmark mede", An = () => "本基准测试测量什么", jn = () => "このベンチマークが測定するもの", Mn = () => "이 벤치마크가 측정하는 것", Nn = () => "Что измеряет этот бенчмарк", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? wn(e) : n === "fr" ? Tn(e) : n === "es" ? En(e) : n === "de" ? Dn(e) : n === "it" ? On(e) : n === "pt" ? kn(e) : n === "zh" ? An(e) : n === "ja" ? jn(e) : n === "ko" ? Mn(e) : Nn(e);
}), Pn = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", Fn = () => "Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.", In = () => "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.", Ln = () => "Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.", Rn = () => "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.", zn = () => "Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento tardio. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.", Bn = () => "此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的权重、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。", Vn = () => "このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツのパースとレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。", Hn = () => "이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 그리고 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.", Un = () => "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.", Wn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Pn(e) : n === "fr" ? Fn(e) : n === "es" ? In(e) : n === "de" ? Ln(e) : n === "it" ? Rn(e) : n === "pt" ? zn(e) : n === "zh" ? Bn(e) : n === "ja" ? Vn(e) : n === "ko" ? Hn(e) : Un(e);
});
function Gn() {
	return a("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			i("h2", {
				className: "text-2xl font-bold text-foreground",
				children: M()
			}),
			a("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					i("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: U()
					}),
					i("p", {
						className: "text-sm text-muted-foreground",
						children: he()
					}),
					a("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							i("li", { children: Ee() }),
							i("li", { children: Le() }),
							i("li", { children: Je() })
						]
					})
				]
			}),
			a("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					i("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: at()
					}),
					i("p", {
						className: "text-sm text-muted-foreground",
						children: gt()
					}),
					a("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							a("li", { children: [
								i("strong", {
									className: "text-foreground",
									children: Dt()
								}),
								" ",
								J ? J() : "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
							] }),
							a("li", { children: [
								i("strong", {
									className: "text-foreground",
									children: qt()
								}),
								" ",
								X ? X() : "users may briefly see translation keys or a fallback language before the chunk arrives."
							] }),
							a("li", { children: [
								i("strong", {
									className: "text-foreground",
									children: mn()
								}),
								" ",
								Q ? Q() : "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
							] })
						]
					})
				]
			}),
			a("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [i("h3", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: $()
				}), i("p", {
					className: "text-sm text-muted-foreground",
					children: Wn()
				})]
			})
		]
	});
}
function Kn() {
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
function qn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Jn({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		qn("AppRoot", c);
	}, [c]), e(() => {
		b(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		Kn();
	}, []), i(r, { children: a });
}
function Yn({ children: e }) {
	return i(Jn, { children: e });
}
function Xn() {
	return i(Yn, { children: i(Gn, {}) });
}
export { Xn as default };
