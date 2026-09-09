import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { onMount as t } from "svelte";
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
	!c && typeof window < "u" && window.location?.href && (e = M(window.location.href));
	let t = f(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return u || (l = t, u = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function f(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = E();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && l !== void 0) n = l;
		else if (P(t) && N.has(t)) {
			let e = N.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return _(t);
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
		r = d();
	} catch {}
	let s = [], u = o;
	!c && typeof window < "u" && window.location?.href && (u = M(window.location.href));
	for (let t of u) if (t === "globalVariable") l = e;
	else if (t === "cookie") {
		if (c || typeof document > "u" || typeof window > "u") continue;
		let t = `${i}=${e}; path=/; max-age=${a}`;
		document.cookie = t, w();
	} else if (t === "baseLocale") continue;
	else if (P(t) && N.has(t)) {
		let n = N.get(t);
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
}, h = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of r) if (e.toLowerCase() === t) return e;
}
function _(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${r.join(", ")}`);
}
function v(e) {
	return e;
}
function y(e, t) {
	return e.exec(t.href);
}
var b = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), x = RegExp(`(?:^|;\\s*)${b}=([^;]*)`), S = Symbol(), C = S;
function w() {
	C = S;
}
function T() {
	typeof queueMicrotask == "function" ? queueMicrotask(w) : Promise.resolve().then(w);
}
function E() {
	if (typeof document > "u") return;
	if (C !== S) return C;
	let e = document.cookie.match(x)?.[1];
	return C = g(e), T(), C;
}
function D(e) {
	return O(e);
}
function O(e) {
	let t = v(typeof e == "string" ? new URL(e, h()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), v(t);
}
var k, A;
function j(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (k === t) return A;
	let r = v(new URL(t, "http://example.com")), i = D(r), a = i.href === r.href ? [r] : [r, i], o;
	for (let e of a) {
		for (let t of s) if (y(new n(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return k = t, A = o, o;
}
function M(e) {
	let t = j(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var N = /* @__PURE__ */ new Map();
function P(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var F = () => "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.", I = () => "mettre à jour les traductions exige des stratégies de cache busting pour livrer du contenu à jour sans re-télécharger l'inutile.", L = () => "actualizar las traducciones requiere estrategias de invalidación de la caché para asegurar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos no modificados.", R = () => "Die Aktualisierung von Übersetzungen erfordert Strategien zur Cache-Invalidierung, um sicherzustellen, dass Benutzer frische Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.", z = () => "l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza riscaricare chunk non modificati.", B = () => "atualizar as traduções requer estratégias de invalidação de cache para garantir que os usuários obtenham conteúdo fresco sem baixar novamente os chunks inalterados.", ee = () => "更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的块。", te = () => "翻訳を更新するには、ユーザーが変更されていないチャンクを再ダウンロードすることなく最新のコンテンツを取得できるようにするためのキャッシュバースト戦略が必要です。", V = () => "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.", H = () => "обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных частей.", U = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? I(e) : n === "es" ? L(e) : n === "de" ? R(e) : n === "it" ? z(e) : n === "pt" ? B(e) : n === "zh" ? ee(e) : n === "ja" ? te(e) : n === "ko" ? V(e) : n === "ru" ? H(e) : F(e);
}), W = () => "Cache invalidation:", G = () => "Invalidation du cache :", K = () => "Invalidación de la caché:", q = () => "Cache-Invalidierung:", J = () => "Invalidazione della cache:", Y = () => "Invalidação de cache:", X = () => "缓存失效：", Z = () => "キャッシュの無効化：", Q = () => "Cache invalidation:", ne = () => "Инвалидация кэша:", re = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? G(e) : n === "es" ? K(e) : n === "de" ? q(e) : n === "it" ? J(e) : n === "pt" ? Y(e) : n === "zh" ? X(e) : n === "ja" ? Z(e) : n === "ko" ? Q(e) : n === "ru" ? ne(e) : W(e);
}), ie = () => "users may briefly see translation keys or a fallback language before the chunk arrives.", ae = () => "l'utilisateur peut voir brièvement des clés ou une langue de secours avant l'arrivée du fragment.", oe = () => "los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.", se = () => "Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Fallback-Sprache, bevor der Chunk eintrifft.", ce = () => "gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.", le = () => "usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes de o chunk chegar.", ue = () => "在块到达之前，用户可能会短暂看到翻译键或回退语言。", de = () => "チャンクが到着する前に、ユーザーに翻訳キーまたはフォールバック言語が一時的に表示されることがあります。", fe = () => "users may briefly see translation keys or a fallback language before the chunk arrives.", pe = () => "пользователи могут кратковременно видеть ключи перевода или резервный язык до загрузки нужной части.", me = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ae(e) : n === "es" ? oe(e) : n === "de" ? se(e) : n === "it" ? ce(e) : n === "pt" ? le(e) : n === "zh" ? ue(e) : n === "ja" ? de(e) : n === "ko" ? fe(e) : n === "ru" ? pe(e) : ie(e);
}), he = () => "Flash of untranslated content (FOUC):", ge = () => "Flash de contenu non traduit (FOUC) :", _e = () => "Parpadeo de contenido no traducido (FOUC):", ve = () => "Flash of Untranslated Content (FOUC):", ye = () => "Flash di contenuti non tradotti (FOUC):", be = () => "Flash de conteúdo não traduzido (FOUC):", xe = () => "未翻译内容闪烁 (FOUC)：", Se = () => "翻訳されていないコンテンツのフラッシュ (FOUC)：", Ce = () => "Flash of untranslated content (FOUC):", we = () => "Мерцание непереведенного контента (FOUC):", Te = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ge(e) : n === "es" ? _e(e) : n === "de" ? ve(e) : n === "it" ? ye(e) : n === "pt" ? be(e) : n === "zh" ? xe(e) : n === "ja" ? Se(e) : n === "ko" ? Ce(e) : n === "ru" ? we(e) : he(e);
}), Ee = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", De = () => "Cette appli de test offre un environnement contrôlé — 10 pages au contenu réaliste — pour comparer les bibliothèques i18n sur trois axes : le poids ajouté au bundle JavaScript, le temps passé à analyser et afficher le texte traduit, et l'efficacité du découpage de code et du chargement paresseux. Chaque bibliothèque est intégrée dans la même base pour des résultats comparables.", Oe = () => "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.", ke = () => "Diese Testanwendung bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken auf drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe Anwendung integriert, sodass die Ergebnisse direkt vergleichbar sind.", Ae = () => "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.", je = () => "Este app de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada no mesmo app para que os resultados sejam diretamente comparáveis.", Me = () => "此测试应用提供了一个受控环境 — 10 个具有真实内容的页面 — 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。", Ne = () => "このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、JavaScriptバンドルに追加される重量、翻訳コンテンツの解析とレンダリングに費される時間、およびコード分割と遅延読み込み戦略の効果という3つの軸でi18nライブラリを比較します。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。", Pe = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", Fe = () => "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему JavaScript-бандлу, время, затрачиваемое на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.", Ie = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? De(e) : n === "es" ? Oe(e) : n === "de" ? ke(e) : n === "it" ? Ae(e) : n === "pt" ? je(e) : n === "zh" ? Me(e) : n === "ja" ? Ne(e) : n === "ko" ? Pe(e) : n === "ru" ? Fe(e) : Ee(e);
}), Le = () => "What this benchmark measures", Re = () => "Ce que mesure ce benchmark", ze = () => "Qué mide este benchmark", Be = () => "Was dieser Benchmark misst", Ve = () => "Cosa misura questo benchmark", He = () => "O que este benchmark mede", Ue = () => "此基准测试衡量的内容", We = () => "このベンチマークが測定するもの", Ge = () => "What this benchmark measures", Ke = () => "Что измеряет этот бенчмарк", qe = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Re(e) : n === "es" ? ze(e) : n === "de" ? Be(e) : n === "it" ? Ve(e) : n === "pt" ? He(e) : n === "zh" ? Ue(e) : n === "ja" ? We(e) : n === "ko" ? Ge(e) : n === "ru" ? Ke(e) : Le(e);
}), Je = () => "The JSON must be parsed on every page load — blocking the main thread.", Ye = () => "Le JSON doit être analysé à chaque chargement de page — en bloquant le thread principal.", Xe = () => "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.", Ze = () => "Das JSON muss bei jedem Seitenladen analysiert werden — was den Haupt-Thread blockiert.", Qe = () => "Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale.", $e = () => "O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.", et = () => "每次页面加载时都必须解析 JSON — 阻塞主线程。", tt = () => "ページを読み込むたびにJSONを解析する必要があり、メインスレッドをブロックします。", nt = () => "The JSON must be parsed on every page load — blocking the main thread.", rt = () => "JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.", it = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Ye(e) : n === "es" ? Xe(e) : n === "de" ? Ze(e) : n === "it" ? Qe(e) : n === "pt" ? $e(e) : n === "zh" ? et(e) : n === "ja" ? tt(e) : n === "ko" ? nt(e) : n === "ru" ? rt(e) : Je(e);
}), at = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", ot = () => "Les architectures fondées sur le contexte peuvent provoquer des re-rendus en cascade quand la langue change, car chaque consommateur est notifié même si ses clés n'ont pas changé.", st = () => "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.", ct = () => "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich die Sprache ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.", lt = () => "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.", ut = () => "Arquiteturas baseadas em contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.", dt = () => "当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使特定键未更改，每个使用者也会收到通知。", ft = () => "コンテキストベースのアーキテクチャでは、特定のキーが変更されていなくてもすべての消費者に通知されるため、ロケール変更時にカスケードレンダリングが発生する可能性があります。", pt = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", mt = () => "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при смене языка, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.", ht = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ot(e) : n === "es" ? st(e) : n === "de" ? ct(e) : n === "it" ? lt(e) : n === "pt" ? ut(e) : n === "zh" ? dt(e) : n === "ja" ? ft(e) : n === "ko" ? pt(e) : n === "ru" ? mt(e) : at(e);
}), gt = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", _t = () => "Lors du rendu serveur, tout le dictionnaire est sérialisé dans le HTML, alourdissant le document à télécharger et à hydrater.", vt = () => "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.", yt = () => "Beim serverseitigen Rendering wird das vollständige Verzeichnis in die HTML-Nutzlast serialisiert, was die Dokumentgröße erhöht, die heruntergeladen und hydriert werden muss.", bt = () => "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.", xt = () => "Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.", St = () => "在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。", Ct = () => "サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。", wt = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", Tt = () => "При серверном рендеринге весь словарь сериализуется в HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать.", Et = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? _t(e) : n === "es" ? vt(e) : n === "de" ? yt(e) : n === "it" ? bt(e) : n === "pt" ? xt(e) : n === "zh" ? St(e) : n === "ja" ? Ct(e) : n === "ko" ? wt(e) : n === "ru" ? Tt(e) : gt(e);
}), Dt = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", Ot = () => "Beaucoup de bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsqu'il est volumineux (milliers de clés), chaque composant qui consomme des traductions garde une référence à tout le dictionnaire. Cela signifie :", kt = () => "Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:", At = () => "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Verzeichnis. Das bedeutet:", jt = () => "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:", Mt = () => "Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:", Nt = () => "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会保留对整个字典的引用。这意味着：", Pt = () => "多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：", Ft = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", It = () => "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:", Lt = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Ot(e) : n === "es" ? kt(e) : n === "de" ? At(e) : n === "it" ? jt(e) : n === "pt" ? Mt(e) : n === "zh" ? Nt(e) : n === "ja" ? Pt(e) : n === "ko" ? Ft(e) : n === "ru" ? It(e) : Dt(e);
}), Rt = () => "Why a single large JSON can hurt performance", zt = () => "Pourquoi un unique gros JSON peut nuire aux performances", Bt = () => "Por qué un solo JSON grande puede perjudicar el rendimiento", Vt = () => "Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann", Ht = () => "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni", Ut = () => "Por que um único JSON grande pode prejudicar o desempenho", Wt = () => "为什么单个大型 JSON 会损害性能", Gt = () => "なぜ1つの大きなJSONがパフォーマンスを低下させるのか", Kt = () => "Why a single large JSON can hurt performance", qt = () => "Почему один большой JSON может снизить производительность", Jt = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? zt(e) : n === "es" ? Bt(e) : n === "de" ? Vt(e) : n === "it" ? Ht(e) : n === "pt" ? Ut(e) : n === "zh" ? Wt(e) : n === "ja" ? Gt(e) : n === "ko" ? Kt(e) : n === "ru" ? qt(e) : Rt(e);
}), Yt = () => "Understanding the Impact", Xt = () => "Comprendre l'impact", Zt = () => "Entendiendo el impacto", Qt = () => "Die Auswirkungen verstehen", $t = () => "Capire l'impatto", en = () => "Entendendo o impacto", tn = () => "理解影响", nn = () => "影響を理解する", rn = () => "Understanding the Impact", an = () => "Понимание влияния", on = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Xt(e) : n === "es" ? Zt(e) : n === "de" ? Qt(e) : n === "it" ? $t(e) : n === "pt" ? en(e) : n === "zh" ? tn(e) : n === "ja" ? nn(e) : n === "ko" ? rn(e) : n === "ru" ? an(e) : Yt(e);
}), sn = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", cn = () => "Découper les traductions par route ou espace de noms réduit fortement la charge initiale, mais pose de nouveaux défis :", ln = () => "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:", un = () => "Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Nutzlast drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:", dn = () => "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:", fn = () => "Dividir as traduções em pedaços por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:", pn = () => "将翻译拆分为每个路由或每个命名空间的块可以大幅减少初始负载。但它引入了新的挑战：", mn = () => "翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新しい課題も生じます：", hn = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", gn = () => "Разделение переводов на части для каждого маршрута или пространства имен может значительно уменьшить начальный объем данных. Но это создает новые проблемы:", _n = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? cn(e) : n === "es" ? ln(e) : n === "de" ? un(e) : n === "it" ? dn(e) : n === "pt" ? fn(e) : n === "zh" ? pn(e) : n === "ja" ? mn(e) : n === "ko" ? hn(e) : n === "ru" ? gn(e) : sn(e);
}), vn = () => "The trade-offs of dynamic loading", yn = () => "Les compromis du chargement dynamique", bn = () => "Las compensaciones de la carga dinámica", xn = () => "Die Kompromisse beim dynamischen Laden", Sn = () => "I compromessi del caricamento dinamico", Cn = () => "Os trade-offs do carregamento dinâmico", wn = () => "动态加载的权衡", Tn = () => "動的読み込みのトレードオフ", En = () => "The trade-offs of dynamic loading", Dn = () => "Компромиссы динамической загрузки", On = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? yn(e) : n === "es" ? bn(e) : n === "de" ? xn(e) : n === "it" ? Sn(e) : n === "pt" ? Cn(e) : n === "zh" ? wn(e) : n === "ja" ? Tn(e) : n === "ko" ? En(e) : n === "ru" ? Dn(e) : vn(e);
}), kn = () => "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.", An = () => "l'application doit d'abord charger, déterminer la langue, puis récupérer le bon fragment — avec des allers-retours réseau supplémentaires.", jn = () => "la aplicación debe primero cargarse, determinar el idioma, luego obtener el fragmento correcto, lo que añade viajes de red de ida y vuelta.", Mn = () => "Die App muss zuerst laden, die Sprache bestimmen und dann den richtigen Chunk abrufen — was zusätzliche Netzwerk-Roundtrips verursacht.", Nn = () => "l'app deve prima caricarsi, determinare la locale, quindi recuperare il chunk corretto — aggiungendo round-trip di rete.", $ = () => "o app deve primeiro carregar, determinar a localidade, então buscar o chunk certo — adicionando network round-trips.", Pn = () => "应用必须首先加载，确定语言环境，然后获取正确的块 — 增加了网络往返时间。", Fn = () => "アプリは最初に読み込み、ロケールを決定し、次に正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。", In = () => "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.", Ln = () => "приложение должно сначала загрузиться, определить язык, а затем получить нужную часть, что добавляет сетевые задержки.", Rn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? An(e) : n === "es" ? jn(e) : n === "de" ? Mn(e) : n === "it" ? Nn(e) : n === "pt" ? $(e) : n === "zh" ? Pn(e) : n === "ja" ? Fn(e) : n === "ko" ? In(e) : n === "ru" ? Ln(e) : kn(e);
}), zn = () => "Waterfall requests:", Bn = () => "Requêtes en cascade :", Vn = () => "Solicitudes en cascada:", Hn = () => "Waterfall-Anfragen:", Un = () => "Richieste a cascata:", Wn = () => "Requisições em cascata:", Gn = () => "瀑布流请求：", Kn = () => "ウォーターフォールリクエスト：", qn = () => "Waterfall requests:", Jn = () => "Каскадные запросы:", Yn = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Bn(e) : n === "es" ? Vn(e) : n === "de" ? Hn(e) : n === "it" ? Un(e) : n === "pt" ? Wn(e) : n === "zh" ? Gn(e) : n === "ja" ? Kn(e) : n === "ko" ? qn(e) : n === "ru" ? Jn(e) : zn(e);
});
function Xn(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), t(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var Zn = e.from_html("<section class=\"mb-16 mx-auto max-w-3xl space-y-6\"><h2 class=\"text-2xl font-bold text-foreground\"> </h2> <div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p> <ul class=\"mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5\"><li> </li> <li> </li> <li> </li></ul></div> <div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p> <ul class=\"mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5\"><li><strong class=\"text-foreground\"> </strong> </li> <li><strong class=\"text-foreground\"> </strong> </li> <li><strong class=\"text-foreground\"> </strong> </li></ul></div> <div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div></section>");
function Qn(t, n) {
	e.push(n, !1), Xn("UnderstandingImpact"), e.init();
	var r = Zn(), i = e.child(r), a = e.only_child(i, !0), o = e.sibling(i, 2), s = e.child(o), c = e.only_child(s, !0), l = e.sibling(s, 2), u = e.only_child(l, !0), d = e.sibling(l, 2), f = e.child(d), p = e.only_child(f, !0), m = e.sibling(f, 2), h = e.only_child(m, !0), g = e.sibling(m, 2), _ = e.only_child(g, !0);
	e.reset(d), e.reset(o);
	var v = e.sibling(o, 2), y = e.child(v), b = e.only_child(y, !0), x = e.sibling(y, 2), S = e.only_child(x, !0), C = e.sibling(x, 2), w = e.child(C), T = e.child(w), E = e.only_child(T, !0), D = e.sibling(T);
	e.reset(w);
	var O = e.sibling(w, 2), k = e.child(O), A = e.only_child(k, !0), j = e.sibling(k);
	e.reset(O);
	var M = e.sibling(O, 2), N = e.child(M), P = e.only_child(N, !0), F = e.sibling(N);
	e.reset(M), e.reset(C), e.reset(v);
	var I = e.sibling(v, 2), L = e.child(I), R = e.only_child(L, !0), z = e.sibling(L, 2), B = e.only_child(z, !0);
	e.reset(I), e.reset(r), e.template_effect((t, n, r, i, o, s, l, d, f, m, g, v, y, x, C, w) => {
		e.set_text(a, t), e.set_text(c, n), e.set_text(u, r), e.set_text(p, i), e.set_text(h, o), e.set_text(_, s), e.set_text(b, l), e.set_text(S, d), e.set_text(E, f), e.set_text(D, ` ${m ?? ""}`), e.set_text(A, g), e.set_text(j, ` ${v ?? ""}`), e.set_text(P, y), e.set_text(F, ` ${x ?? ""}`), e.set_text(R, C), e.set_text(B, w);
	}, [
		() => on(),
		() => Jt(),
		() => Lt(),
		() => it(),
		() => ht(),
		() => Et(),
		() => On(),
		() => _n(),
		() => Yn(),
		() => Rn(),
		() => Te(),
		() => me(),
		() => re(),
		() => U(),
		() => qe(),
		() => Ie()
	]), e.append(t, r), e.pop();
}
export { Qn as default };
