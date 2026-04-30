import { insert as e, template as t } from "solid-js/web";
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
], s = [], c, l;
function u(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (c === t) return l;
	let r = new URL(t, "http://dummy.com"), i;
	for (let e of s) if (new n(e.match, r.href).exec(r.href)) {
		i = e;
		break;
	}
	return c = t, l = i, i;
}
function d(e) {
	let t = u(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var f = void 0, p = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var m, h = !1, g = () => {
	if (f) {
		let e = f?.getStore()?.locale;
		if (e) return e;
	}
	let e = o;
	!p && typeof window < "u" && window.location?.href && (e = d(window.location.href));
	let t = _(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return h || (m = t, h = !0, y(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function _(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = te();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && m !== void 0) n = m;
		else if (S(t) && x.has(t)) {
			let e = x.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ee(t);
			}
		}
		let e = b(n);
		if (e) return e;
	}
}
var v = (e) => {
	e ? window.location.href = e : window.location.reload();
}, y = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = g();
	} catch {}
	let s = [], c = o;
	!p && typeof window < "u" && window.location?.href && (c = d(window.location.href));
	for (let t of c) if (t === "globalVariable") m = e;
	else if (t === "cookie") {
		if (p || typeof document > "u" || typeof window > "u") continue;
		let t = `${i}=${e}; path=/; max-age=${a}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (S(t) && x.has(t)) {
		let n = x.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), s.push(r));
		}
	}
	let l = () => {
		!p && n.reload && window.location && e !== r && v(void 0);
	};
	if (s.length) return Promise.all(s).then(() => {
		l();
	});
	l();
};
function b(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of r) if (e.toLowerCase() === t) return e;
}
function ee(e) {
	let t = b(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${r.join(", ")}`);
}
function te() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${i}=([^;]+)`))?.[2];
	return b(e);
}
var x = /* @__PURE__ */ new Map();
function S(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var C = () => "Understanding the Impact", w = () => "Comprendre l'impact", T = () => "Entendiendo el impacto", E = () => "Die Auswirkungen verstehen", D = () => "Capire l'impatto", O = () => "Entendendo o impacto", k = () => "理解影响", A = () => "影響を理解する", j = () => "Understanding the Impact", M = () => "Понимание влияния", N = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? C(e) : n === "fr" ? w(e) : n === "es" ? T(e) : n === "de" ? E(e) : n === "it" ? D(e) : n === "pt" ? O(e) : n === "zh" ? k(e) : n === "ja" ? A(e) : n === "ko" ? j(e) : M(e);
}), P = () => "Why a single large JSON can hurt performance", F = () => "Pourquoi un unique gros JSON peut nuire aux performances", I = () => "Por qué un solo JSON grande puede perjudicar el rendimiento", L = () => "Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann", R = () => "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni", z = () => "Por que um único JSON grande pode prejudicar o desempenho", B = () => "为什么单个大型 JSON 会损害性能", V = () => "なぜ1つの大きなJSONがパフォーマンスを低下させるのか", H = () => "Why a single large JSON can hurt performance", U = () => "Почему один большой JSON может снизить производительность", W = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? P(e) : n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : U(e);
}), G = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", K = () => "Beaucoup de bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsqu'il est volumineux (milliers de clés), chaque composant qui consomme des traductions garde une référence à tout le dictionnaire. Cela signifie :", q = () => "Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:", J = () => "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Verzeichnis. Das bedeutet:", Y = () => "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:", X = () => "Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:", Z = () => "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会保留对整个字典的引用。这意味着：", Q = () => "多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：", ne = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", re = () => "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:", ie = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? G(e) : n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? Q(e) : n === "ko" ? ne(e) : re(e);
}), ae = () => "The JSON must be parsed on every page load — blocking the main thread.", oe = () => "Le JSON doit être analysé à chaque chargement de page — en bloquant le thread principal.", se = () => "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.", ce = () => "Das JSON muss bei jedem Seitenladen analysiert werden — was den Haupt-Thread blockiert.", le = () => "Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale.", ue = () => "O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.", de = () => "每次页面加载时都必须解析 JSON — 阻塞主线程。", fe = () => "ページを読み込むたびにJSONを解析する必要があり、メインスレッドをブロックします。", pe = () => "The JSON must be parsed on every page load — blocking the main thread.", me = () => "JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.", he = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? ae(e) : n === "fr" ? oe(e) : n === "es" ? se(e) : n === "de" ? ce(e) : n === "it" ? le(e) : n === "pt" ? ue(e) : n === "zh" ? de(e) : n === "ja" ? fe(e) : n === "ko" ? pe(e) : me(e);
}), ge = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", _e = () => "Les architectures fondées sur le contexte peuvent provoquer des re-rendus en cascade quand la langue change, car chaque consommateur est notifié même si ses clés n'ont pas changé.", ve = () => "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.", ye = () => "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich die Sprache ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.", be = () => "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.", xe = () => "Arquiteturas baseadas em contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.", Se = () => "当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使特定键未更改，每个使用者也会收到通知。", Ce = () => "コンテキストベースのアーキテクチャでは、特定のキーが変更されていなくてもすべての消費者に通知されるため、ロケール変更時にカスケードレンダリングが発生する可能性があります。", we = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", Te = () => "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при смене языка, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.", Ee = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? ge(e) : n === "fr" ? _e(e) : n === "es" ? ve(e) : n === "de" ? ye(e) : n === "it" ? be(e) : n === "pt" ? xe(e) : n === "zh" ? Se(e) : n === "ja" ? Ce(e) : n === "ko" ? we(e) : Te(e);
}), De = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", Oe = () => "Lors du rendu serveur, tout le dictionnaire est sérialisé dans le HTML, alourdissant le document à télécharger et à hydrater.", ke = () => "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.", Ae = () => "Beim serverseitigen Rendering wird das vollständige Verzeichnis in die HTML-Nutzlast serialisiert, was die Dokumentgröße erhöht, die heruntergeladen und hydriert werden muss.", je = () => "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.", Me = () => "Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.", Ne = () => "在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。", Pe = () => "サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。", Fe = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", Ie = () => "При серверном рендеринге весь словарь сериализуется в HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать.", Le = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? De(e) : n === "fr" ? Oe(e) : n === "es" ? ke(e) : n === "de" ? Ae(e) : n === "it" ? je(e) : n === "pt" ? Me(e) : n === "zh" ? Ne(e) : n === "ja" ? Pe(e) : n === "ko" ? Fe(e) : Ie(e);
}), Re = () => "The trade-offs of dynamic loading", ze = () => "Les compromis du chargement dynamique", Be = () => "Las compensaciones de la carga dinámica", Ve = () => "Die Kompromisse beim dynamischen Laden", He = () => "I compromessi del caricamento dinamico", Ue = () => "Os trade-offs do carregamento dinâmico", We = () => "动态加载的权衡", Ge = () => "動的読み込みのトレードオフ", Ke = () => "The trade-offs of dynamic loading", qe = () => "Компромиссы динамической загрузки", Je = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Re(e) : n === "fr" ? ze(e) : n === "es" ? Be(e) : n === "de" ? Ve(e) : n === "it" ? He(e) : n === "pt" ? Ue(e) : n === "zh" ? We(e) : n === "ja" ? Ge(e) : n === "ko" ? Ke(e) : qe(e);
}), Ye = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", Xe = () => "Découper les traductions par route ou espace de noms réduit fortement la charge initiale, mais pose de nouveaux défis :", Ze = () => "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:", Qe = () => "Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Nutzlast drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:", $e = () => "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:", et = () => "Dividir as traduções em pedaços por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:", tt = () => "将翻译拆分为每个路由或每个命名空间的块可以大幅减少初始负载。但它引入了新的挑战：", nt = () => "翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新しい課題も生じます：", rt = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", it = () => "Разделение переводов на части для каждого маршрута или пространства имен может значительно уменьшить начальный объем данных. Но это создает новые проблемы:", at = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Ye(e) : n === "fr" ? Xe(e) : n === "es" ? Ze(e) : n === "de" ? Qe(e) : n === "it" ? $e(e) : n === "pt" ? et(e) : n === "zh" ? tt(e) : n === "ja" ? nt(e) : n === "ko" ? rt(e) : it(e);
}), ot = () => "Waterfall requests:", st = () => "Requêtes en cascade :", ct = () => "Solicitudes en cascada:", lt = () => "Waterfall-Anfragen:", ut = () => "Richieste a cascata:", dt = () => "Requisições em cascata:", ft = () => "瀑布流请求：", pt = () => "ウォーターフォールリクエスト：", mt = () => "Waterfall requests:", ht = () => "Каскадные запросы:", gt = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? ot(e) : n === "fr" ? st(e) : n === "es" ? ct(e) : n === "de" ? lt(e) : n === "it" ? ut(e) : n === "pt" ? dt(e) : n === "zh" ? ft(e) : n === "ja" ? pt(e) : n === "ko" ? mt(e) : ht(e);
}), _t = () => "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.", vt = () => "l'application doit d'abord charger, déterminer la langue, puis récupérer le bon fragment — avec des allers-retours réseau supplémentaires.", yt = () => "la aplicación debe primero cargarse, determinar el idioma, luego obtener el fragmento correcto, lo que añade viajes de red de ida y vuelta.", bt = () => "Die App muss zuerst laden, die Sprache bestimmen und dann den richtigen Chunk abrufen — was zusätzliche Netzwerk-Roundtrips verursacht.", xt = () => "l'app deve prima caricarsi, determinare la locale, quindi recuperare il chunk corretto — aggiungendo round-trip di rete.", St = () => "o app deve primeiro carregar, determinar a localidade, então buscar o chunk certo — adicionando network round-trips.", Ct = () => "应用必须首先加载，确定语言环境，然后获取正确的块 — 增加了网络往返时间。", wt = () => "アプリは最初に読み込み、ロケールを決定し、次に正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。", Tt = () => "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.", Et = () => "приложение должно сначала загрузиться, определить язык, а затем получить нужную часть, что добавляет сетевые задержки.", Dt = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? _t(e) : n === "fr" ? vt(e) : n === "es" ? yt(e) : n === "de" ? bt(e) : n === "it" ? xt(e) : n === "pt" ? St(e) : n === "zh" ? Ct(e) : n === "ja" ? wt(e) : n === "ko" ? Tt(e) : Et(e);
}), Ot = () => "Flash of untranslated content (FOUC):", kt = () => "Flash de contenu non traduit (FOUC) :", At = () => "Parpadeo de contenido no traducido (FOUC):", jt = () => "Flash of Untranslated Content (FOUC):", Mt = () => "Flash di contenuti non tradotti (FOUC):", Nt = () => "Flash de conteúdo não traduzido (FOUC):", Pt = () => "未翻译内容闪烁 (FOUC)：", Ft = () => "翻訳されていないコンテンツのフラッシュ (FOUC)：", It = () => "Flash of untranslated content (FOUC):", Lt = () => "Мерцание непереведенного контента (FOUC):", Rt = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Ot(e) : n === "fr" ? kt(e) : n === "es" ? At(e) : n === "de" ? jt(e) : n === "it" ? Mt(e) : n === "pt" ? Nt(e) : n === "zh" ? Pt(e) : n === "ja" ? Ft(e) : n === "ko" ? It(e) : Lt(e);
}), zt = () => "users may briefly see translation keys or a fallback language before the chunk arrives.", Bt = () => "l'utilisateur peut voir brièvement des clés ou une langue de secours avant l'arrivée du fragment.", Vt = () => "los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.", Ht = () => "Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Fallback-Sprache, bevor der Chunk eintrifft.", Ut = () => "gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.", Wt = () => "usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes de o chunk chegar.", Gt = () => "在块到达之前，用户可能会短暂看到翻译键或回退语言。", Kt = () => "チャンクが到着する前に、ユーザーに翻訳キーまたはフォールバック言語が一時的に表示されることがあります。", qt = () => "users may briefly see translation keys or a fallback language before the chunk arrives.", Jt = () => "пользователи могут кратковременно видеть ключи перевода или резервный язык до загрузки нужной части.", Yt = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? zt(e) : n === "fr" ? Bt(e) : n === "es" ? Vt(e) : n === "de" ? Ht(e) : n === "it" ? Ut(e) : n === "pt" ? Wt(e) : n === "zh" ? Gt(e) : n === "ja" ? Kt(e) : n === "ko" ? qt(e) : Jt(e);
}), Xt = () => "Cache invalidation:", Zt = () => "Invalidation du cache :", Qt = () => "Invalidación de la caché:", $t = () => "Cache-Invalidierung:", en = () => "Invalidazione della cache:", tn = () => "Invalidação de cache:", nn = () => "缓存失效：", rn = () => "キャッシュの無効化：", an = () => "Cache invalidation:", on = () => "Инвалидация кэша:", sn = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? Xt(e) : n === "fr" ? Zt(e) : n === "es" ? Qt(e) : n === "de" ? $t(e) : n === "it" ? en(e) : n === "pt" ? tn(e) : n === "zh" ? nn(e) : n === "ja" ? rn(e) : n === "ko" ? an(e) : on(e);
}), cn = () => "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.", ln = () => "mettre à jour les traductions exige des stratégies de cache busting pour livrer du contenu à jour sans re-télécharger l'inutile.", un = () => "actualizar las traducciones requiere estrategias de invalidación de la caché para asegurar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos no modificados.", dn = () => "Die Aktualisierung von Übersetzungen erfordert Strategien zur Cache-Invalidierung, um sicherzustellen, dass Benutzer frische Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.", fn = () => "l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza riscaricare chunk non modificati.", pn = () => "atualizar as traduções requer estratégias de invalidação de cache para garantir que os usuários obtenham conteúdo fresco sem baixar novamente os chunks inalterados.", mn = () => "更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的块。", hn = () => "翻訳を更新するには、ユーザーが変更されていないチャンクを再ダウンロードすることなく最新のコンテンツを取得できるようにするためのキャッシュバースト戦略が必要です。", gn = () => "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.", _n = () => "обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных частей.", vn = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? cn(e) : n === "fr" ? ln(e) : n === "es" ? un(e) : n === "de" ? dn(e) : n === "it" ? fn(e) : n === "pt" ? pn(e) : n === "zh" ? mn(e) : n === "ja" ? hn(e) : n === "ko" ? gn(e) : _n(e);
}), yn = () => "What this benchmark measures", bn = () => "Ce que mesure ce benchmark", xn = () => "Qué mide este benchmark", Sn = () => "Was dieser Benchmark misst", Cn = () => "Cosa misura questo benchmark", wn = () => "O que este benchmark mede", Tn = () => "此基准测试衡量的内容", En = () => "このベンチマークが測定するもの", $ = () => "What this benchmark measures", Dn = () => "Что измеряет этот бенчмарк", On = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? yn(e) : n === "fr" ? bn(e) : n === "es" ? xn(e) : n === "de" ? Sn(e) : n === "it" ? Cn(e) : n === "pt" ? wn(e) : n === "zh" ? Tn(e) : n === "ja" ? En(e) : n === "ko" ? $(e) : Dn(e);
}), kn = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", An = () => "Cette appli de test offre un environnement contrôlé — 10 pages au contenu réaliste — pour comparer les bibliothèques i18n sur trois axes : le poids ajouté au bundle JavaScript, le temps passé à analyser et afficher le texte traduit, et l'efficacité du découpage de code et du chargement paresseux. Chaque bibliothèque est intégrée dans la même base pour des résultats comparables.", jn = () => "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.", Mn = () => "Diese Testanwendung bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken auf drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe Anwendung integriert, sodass die Ergebnisse direkt vergleichbar sind.", Nn = () => "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.", Pn = () => "Este app de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada no mesmo app para que os resultados sejam diretamente comparáveis.", Fn = () => "此测试应用提供了一个受控环境 — 10 个具有真实内容的页面 — 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。", In = () => "このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、JavaScriptバンドルに追加される重量、翻訳コンテンツの解析とレンダリングに費される時間、およびコード分割と遅延読み込み戦略の効果という3つの軸でi18nライブラリを比較します。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。", Ln = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", Rn = () => "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему JavaScript-бандлу, время, затрачиваемое на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.", zn = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "en" ? kn(e) : n === "fr" ? An(e) : n === "es" ? jn(e) : n === "de" ? Mn(e) : n === "it" ? Nn(e) : n === "pt" ? Pn(e) : n === "zh" ? Fn(e) : n === "ja" ? In(e) : n === "ko" ? Ln(e) : Rn(e);
}), Bn = t("<section class=\"mb-16 mx-auto max-w-3xl space-y-6\"><h2 class=\"text-2xl font-bold text-foreground\"></h2><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p><ul class=\"mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground\"><li></li><li></li><li></li></ul></div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\"></p><ul class=\"mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground\"><li><strong class=text-foreground></strong> </li><li><strong class=text-foreground></strong> </li><li><strong class=text-foreground></strong> </li></ul></div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\">");
function Vn() {
	return (() => {
		var t = Bn(), n = t.firstChild, r = n.nextSibling, i = r.firstChild, a = i.nextSibling, o = a.nextSibling.firstChild, s = o.nextSibling, c = s.nextSibling, l = r.nextSibling, u = l.firstChild, d = u.nextSibling, f = d.nextSibling.firstChild, p = f.firstChild;
		p.nextSibling;
		var m = f.nextSibling, h = m.firstChild;
		h.nextSibling;
		var g = m.nextSibling, _ = g.firstChild;
		_.nextSibling;
		var v = l.nextSibling.firstChild, y = v.nextSibling;
		return e(n, () => N()), e(i, () => W()), e(a, () => ie()), e(o, () => he()), e(s, () => Ee()), e(c, () => Le()), e(u, () => Je()), e(d, () => at()), e(p, () => gt()), e(f, () => Dt(), null), e(h, () => Rt()), e(m, () => Yt(), null), e(_, () => sn()), e(g, () => vn(), null), e(v, () => On()), e(y, () => zn()), t;
	})();
}
export { Vn as default };
