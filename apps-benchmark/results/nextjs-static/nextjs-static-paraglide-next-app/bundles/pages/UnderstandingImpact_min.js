import { Profiler as e, useEffect as t } from "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { useParams as i } from "next/navigation";
var a = {}, o = [
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
], s = "PARAGLIDE_LOCALE", ee = 3456e4, c = [
	"cookie",
	"globalVariable",
	"baseLocale"
], l = [], u, d;
function te(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (u === t) return d;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of l) if (new a(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return u = t, d = r, r;
}
function f(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var p = void 0, m = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	if (p) {
		let e = p?.getStore()?.locale;
		if (e) return e;
	}
	let e = c;
	!m && typeof window < "u" && window.location?.href && (e = f(window.location.href));
	let t = ne(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, v(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ne(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ae();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (x(t) && b.has(t)) {
			let e = b.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ie(t);
			}
		}
		let e = y(n);
		if (e) return e;
	}
}
var re = (e) => {
	e ? window.location.href = e : window.location.reload();
}, v = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = _();
	} catch {}
	let i = [], a = c;
	!m && typeof window < "u" && window.location?.href && (a = f(window.location.href));
	for (let t of a) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${s}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (x(t) && b.has(t)) {
		let n = b.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!m && n.reload && window.location && e !== r && re(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of o) if (e.toLowerCase() === t) return e;
}
function ie(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function ae() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${s}=([^;]+)`))?.[2];
	return y(e);
}
var b = /* @__PURE__ */ new Map();
function x(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var oe = () => "Understanding the Impact", se = () => "Comprendre l'impact", S = () => "Entendiendo el impacto", C = () => "Die Auswirkungen verstehen", w = () => "Capire l'impatto", T = () => "Entendendo o impacto", E = () => "理解影响", D = () => "影響を理解する", O = () => "영향 이해하기", k = () => "Понимание влияния", A = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? oe(e) : n === "fr" ? se(e) : n === "es" ? S(e) : n === "de" ? C(e) : n === "it" ? w(e) : n === "pt" ? T(e) : n === "zh" ? E(e) : n === "ja" ? D(e) : n === "ko" ? O(e) : k(e);
}), j = () => "Why a single large JSON can hurt performance", M = () => "Pourquoi un seul JSON volumineux peut nuire aux performances", N = () => "Por qué un solo JSON grande puede perjudicar el rendimiento", P = () => "Warum ein einziges großes JSON die Leistung beeinträchtigen kann", F = () => "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni", I = () => "Por que um único JSON grande pode prejudicar o desempenho", L = () => "为什么单个大型 JSON 会损害性能", R = () => "ひとつの巨大な JSON がパフォーマンスを低下させる理由", z = () => "단일 대형 JSON이 성능을 저하시키는 이유", B = () => "Почему один большой JSON может снизить производительность", V = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? j(e) : n === "fr" ? M(e) : n === "es" ? N(e) : n === "de" ? P(e) : n === "it" ? F(e) : n === "pt" ? I(e) : n === "zh" ? L(e) : n === "ja" ? R(e) : n === "ko" ? z(e) : B(e);
}), H = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", U = () => "De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :", W = () => "Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:", G = () => "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:", K = () => "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:", ce = () => "Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:", le = () => "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会持有对整个字典的引用。这意味着：", ue = () => "多くの i18n ライブラリは、React コンテキストを介して提供される単一の JSON オブジェクトに翻訳を保存します。このオブジェクトが巨大（数千のキー）な場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：", de = () => "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 컴포넌트는 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:", fe = () => "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:", pe = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? H(e) : n === "fr" ? U(e) : n === "es" ? W(e) : n === "de" ? G(e) : n === "it" ? K(e) : n === "pt" ? ce(e) : n === "zh" ? le(e) : n === "ja" ? ue(e) : n === "ko" ? de(e) : fe(e);
}), me = () => "The JSON must be parsed on every page load — blocking the main thread.", he = () => "Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.", ge = () => "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.", _e = () => "Das JSON muss bei jedem Seitenladen geparst werden — was den Haupt-Thread blockiert.", ve = () => "Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.", ye = () => "O JSON deve ser analisado em cada carga de página — bloqueando a linha de execução principal.", be = () => "JSON 必须在每次页面加载时进行解析 —— 阻塞主线程。", xe = () => "JSON はページ読み込みのたびにパースされる必要があり、メインスレッドをブロックします。", Se = () => "JSON은 모든 페이지 로드 시 파싱되어야 하며, 이는 메인 스레드를 차단합니다.", Ce = () => "JSON должен парситься при каждой загрузке страницы — блокируя основной поток.", we = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? me(e) : n === "fr" ? he(e) : n === "es" ? ge(e) : n === "de" ? _e(e) : n === "it" ? ve(e) : n === "pt" ? ye(e) : n === "zh" ? be(e) : n === "ja" ? xe(e) : n === "ko" ? Se(e) : Ce(e);
}), Te = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", Ee = () => "Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.", De = () => "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.", Oe = () => "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.", ke = () => "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.", Ae = () => "As arquiteturas baseadas no contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.", je = () => "基于上下文的架构在语言环境更改时会导致级联重新渲染，因为即使特定键没有更改，每个消费者都会收到通知。", Me = () => "コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的な再レンダリングが発生する可能性があります。", Ne = () => "컨텍스트 기반 아키텍처는 로케일이 변경될 때 연쇄적인 리렌더링을 일으킬 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자에게 알림이 가기 때문입니다.", Pe = () => "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.", Fe = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Te(e) : n === "fr" ? Ee(e) : n === "es" ? De(e) : n === "de" ? Oe(e) : n === "it" ? ke(e) : n === "pt" ? Ae(e) : n === "zh" ? je(e) : n === "ja" ? Me(e) : n === "ko" ? Ne(e) : Pe(e);
}), Ie = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", Le = () => "Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.", Re = () => "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.", ze = () => "Während des serverseitigen Renderings wird das vollständige Wörterbuch in den HTML-Payload serialisiert, wodurch sich die Dokumentgröße erhöht, die heruntergeladen und hydratisiert werden muss.", Be = () => "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idrato.", Ve = () => "Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.", He = () => "在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。", Ue = () => "サーバーサイドレンダリング中、辞書全体が HTML ペイロードにシリアライズされ、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。", We = () => "서버 사이드 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어, 다운로드 및 수화가 필요한 문서 크기가 증가합니다.", Ge = () => "Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.", Ke = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ie(e) : n === "fr" ? Le(e) : n === "es" ? Re(e) : n === "de" ? ze(e) : n === "it" ? Be(e) : n === "pt" ? Ve(e) : n === "zh" ? He(e) : n === "ja" ? Ue(e) : n === "ko" ? We(e) : Ge(e);
}), qe = () => "The trade-offs of dynamic loading", Je = () => "Les compromis du chargement dynamique", Ye = () => "Las compensaciones de la carga dinámica", Xe = () => "Die Kompromisse beim dynamischen Laden", Ze = () => "I compromessi del caricamento dinamico", Qe = () => "As compensações do carregamento dinâmico", $e = () => "动态加载的权衡", et = () => "動的読み込みのトレードオフ", tt = () => "동적 로딩의 트레이드오프", nt = () => "Компромиссы динамической загрузки", rt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? qe(e) : n === "fr" ? Je(e) : n === "es" ? Ye(e) : n === "de" ? Xe(e) : n === "it" ? Ze(e) : n === "pt" ? Qe(e) : n === "zh" ? $e(e) : n === "ja" ? et(e) : n === "ko" ? tt(e) : nt(e);
}), it = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", at = () => "La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :", ot = () => "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:", st = () => "Das Aufteilen von Übersetzungen in Teilstücke pro Route oder Namensraum kann den initialen Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:", ct = () => "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:", lt = () => "Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:", ut = () => "将翻译拆分为每个路由或每个命名空间的块可以显著减少初始负载。但它引入了新的挑战：", dt = () => "翻訳をルートごと、または名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：", ft = () => "번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:", pt = () => "Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:", mt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? it(e) : n === "fr" ? at(e) : n === "es" ? ot(e) : n === "de" ? st(e) : n === "it" ? ct(e) : n === "pt" ? lt(e) : n === "zh" ? ut(e) : n === "ja" ? dt(e) : n === "ko" ? ft(e) : pt(e);
}), ht = () => "Waterfall requests:", gt = () => "Requêtes en cascade :", _t = () => "Solicitudes en cascada:", vt = () => "Waterfall-Anfragen:", yt = () => "Richieste a cascata:", bt = () => "Pedidos em cascata:", xt = () => "瀑布流请求：", St = () => "ウォーターフォールリクエスト:", Ct = () => "워터폴(Waterfall) 요청:", wt = () => "Каскадные запросы (Waterfall requests):", Tt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ht(e) : n === "fr" ? gt(e) : n === "es" ? _t(e) : n === "de" ? vt(e) : n === "it" ? yt(e) : n === "pt" ? bt(e) : n === "zh" ? xt(e) : n === "ja" ? St(e) : n === "ko" ? Ct(e) : wt(e);
}), q = () => "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.", Et = () => "l'application doit d'abord se charger, déterminer la langue, puis récupérer le bon morceau — ajoutant des allers-retours réseau.", Dt = q, Ot = q, kt = q, At = q, jt = q, Mt = q, Nt = q, Pt = q, J = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? q(e) : n === "fr" ? Et(e) : n === "es" ? Dt(e) : n === "de" ? Ot(e) : n === "it" ? kt(e) : n === "pt" ? At(e) : n === "zh" ? jt(e) : n === "ja" ? Mt(e) : n === "ko" ? Nt(e) : Pt(e);
}), Ft = () => "Flash of untranslated content (FOUC):", It = () => "Flash de contenu non traduit (FOUC) :", Lt = () => "Parpadeo de contenido no traducido (FOUC):", Rt = () => "Aufblitzen von nicht übersetztem Inhalt (FOUC):", zt = () => "Flash di contenuti non tradotti (FOUC):", Bt = () => "Flash de conteúdo não traduzido (FOUC):", Vt = () => "未翻译内容闪烁 (FOUC)：", Ht = () => "未翻訳コンテンツのフラッシュ (FOUC):", Ut = () => "번역되지 않은 콘텐츠의 깜빡임 (FOUC):", Wt = () => "Мерцание непереведенного контента (FOUC):", Gt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ft(e) : n === "fr" ? It(e) : n === "es" ? Lt(e) : n === "de" ? Rt(e) : n === "it" ? zt(e) : n === "pt" ? Bt(e) : n === "zh" ? Vt(e) : n === "ja" ? Ht(e) : n === "ko" ? Ut(e) : Wt(e);
}), Y = () => "users may briefly see translation keys or a fallback language before the chunk arrives.", Kt = () => "les utilisateurs peuvent brièvement voir les clés de traduction ou une langue de repli avant l'arrivée du morceau.", qt = Y, Jt = Y, Yt = Y, Xt = Y, Zt = Y, Qt = Y, $t = Y, en = Y, X = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Y(e) : n === "fr" ? Kt(e) : n === "es" ? qt(e) : n === "de" ? Jt(e) : n === "it" ? Yt(e) : n === "pt" ? Xt(e) : n === "zh" ? Zt(e) : n === "ja" ? Qt(e) : n === "ko" ? $t(e) : en(e);
}), tn = () => "Cache invalidation:", nn = () => "Invalidation du cache :", rn = () => "Invalidación de la caché:", an = () => "Cache-Invalidierung:", on = () => "Invalidazione della cache:", sn = () => "Invalidação de cache:", cn = () => "缓存失效：", ln = () => "キャッシュの無効化:", un = () => "캐시 무효화:", dn = () => "Инвалидация кэша:", fn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? tn(e) : n === "fr" ? nn(e) : n === "es" ? rn(e) : n === "de" ? an(e) : n === "it" ? on(e) : n === "pt" ? sn(e) : n === "zh" ? cn(e) : n === "ja" ? ln(e) : n === "ko" ? un(e) : dn(e);
}), Z = () => "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.", pn = () => "la mise à jour des traductions nécessite des stratégies de purge du cache pour garantir que les utilisateurs reçoivent le contenu frais sans re-télécharger les morceaux inchangés.", mn = Z, hn = Z, gn = Z, _n = Z, vn = Z, yn = Z, bn = Z, xn = Z, Q = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Z(e) : n === "fr" ? pn(e) : n === "es" ? mn(e) : n === "de" ? hn(e) : n === "it" ? gn(e) : n === "pt" ? _n(e) : n === "zh" ? vn(e) : n === "ja" ? yn(e) : n === "ko" ? bn(e) : xn(e);
}), Sn = () => "What this benchmark measures", Cn = () => "Ce que ce benchmark mesure", wn = () => "Qué mide este benchmark", Tn = () => "Was dieser Benchmark misst", En = () => "Cosa misura questo benchmark", Dn = () => "O que este benchmark mede", On = () => "本基准测试测量什么", kn = () => "このベンチマークが測定するもの", An = () => "이 벤치마크가 측정하는 것", jn = () => "Что измеряет этот бенчмарк", Mn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Sn(e) : n === "fr" ? Cn(e) : n === "es" ? wn(e) : n === "de" ? Tn(e) : n === "it" ? En(e) : n === "pt" ? Dn(e) : n === "zh" ? On(e) : n === "ja" ? kn(e) : n === "ko" ? An(e) : jn(e);
}), Nn = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", $ = () => "Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.", Pn = () => "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.", Fn = () => "Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.", In = () => "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.", Ln = () => "Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento tardio. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.", Rn = () => "此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的权重、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。", zn = () => "このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツのパースとレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。", Bn = () => "이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 그리고 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.", Vn = () => "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.", Hn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Nn(e) : n === "fr" ? $(e) : n === "es" ? Pn(e) : n === "de" ? Fn(e) : n === "it" ? In(e) : n === "pt" ? Ln(e) : n === "zh" ? Rn(e) : n === "ja" ? zn(e) : n === "ko" ? Bn(e) : Vn(e);
});
function Un() {
	return r("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			n("h2", {
				className: "text-2xl font-bold text-foreground",
				children: A()
			}),
			r("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					n("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: V()
					}),
					n("p", {
						className: "text-sm text-muted-foreground",
						children: pe()
					}),
					r("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							n("li", { children: we() }),
							n("li", { children: Fe() }),
							n("li", { children: Ke() })
						]
					})
				]
			}),
			r("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					n("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: rt()
					}),
					n("p", {
						className: "text-sm text-muted-foreground",
						children: mt()
					}),
					r("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							r("li", { children: [
								n("strong", {
									className: "text-foreground",
									children: Tt()
								}),
								" ",
								J ? J() : "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
							] }),
							r("li", { children: [
								n("strong", {
									className: "text-foreground",
									children: Gt()
								}),
								" ",
								X ? X() : "users may briefly see translation keys or a fallback language before the chunk arrives."
							] }),
							r("li", { children: [
								n("strong", {
									className: "text-foreground",
									children: fn()
								}),
								" ",
								Q ? Q() : "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
							] })
						]
					})
				]
			}),
			r("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [n("h3", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: Mn()
				}), n("p", {
					className: "text-sm text-muted-foreground",
					children: Hn()
				})]
			})
		]
	});
}
function Wn() {
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
function Gn(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
function Kn({ children: r }) {
	let a = i().locale ?? "en";
	return t(() => {
		v(a), document.documentElement.lang = a;
	}, [a]), t(() => {
		Wn();
	}, []), n(e, {
		id: "AppRoot",
		onRender: Gn,
		children: r
	});
}
function qn({ children: e }) {
	return n(Kn, { children: e });
}
function Jn() {
	return n(qn, { children: n(Un, {}) });
}
export { Jn as default };
