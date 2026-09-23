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
	!c && typeof window < "u" && window.location?.href && (e = O(window.location.href));
	let t = f(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return u || (l = t, u = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function f(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ne();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && l !== void 0) n = l;
		else if (A(t) && k.has(t)) {
			let e = k.get(t);
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
	!c && typeof window < "u" && window.location?.href && (u = O(window.location.href));
	for (let t of u) if (t === "globalVariable") l = e;
	else if (t === "cookie") {
		if (c || typeof document > "u" || typeof window > "u") continue;
		let t = `${i}=${e}; path=/; max-age=${a}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (A(t) && k.has(t)) {
		let n = k.get(t);
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
function v(e, t) {
	return e.exec(t.href);
}
var y = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function te() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function ne() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = h(e), te(), S;
}
function re(e) {
	return w(e);
}
function w(e) {
	let t = _(typeof e == "string" ? new URL(e, ee()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var T, E;
function D(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (T === t) return E;
	let r = _(new URL(t, "http://example.com")), i = re(r), a = i.href === r.href ? [r] : [r, i], o;
	for (let e of a) {
		for (let t of s) if (v(new n(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return T = t, E = o, o;
}
function O(e) {
	let t = D(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var k = /* @__PURE__ */ new Map();
function A(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var j = () => "Bundle Size", M = () => "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).", N = () => "Dynamic Loading", P = () => "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.", F = () => "Rendering & Hydration", I = () => "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.", L = () => "Why These Metrics Matter", R = () => "Taille du bundle", z = () => "La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arbre. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).", B = () => "Chargement dynamique", V = () => "Le chargement de toutes les traductions à l'avance surcharge le payload initial. Le chargement dynamique (lazy) divise les traductions par route ou par namespace, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel.", H = () => "Rendu & Hydratation", U = () => "Le bundle représente les données envoyées à chaque utilisateur dans le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur des connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.", W = () => "Pourquoi ces mesures sont importantes", G = () => "Tamaño del bundle", K = () => "Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).", q = () => "Carga dinámica", J = () => "Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.", Y = () => "Renderizado e hidratación", X = () => "El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.", ie = () => "Por qué son importantes estas métricas", ae = () => "Bundle-Größe", oe = () => "Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratisierung führt das Parsen und Anhängen massiver Übersetzungsobjekte zu Latenzzeiten, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.", se = () => "Dynamisches Laden", ce = () => "Das Laden aller Übersetzungen im Voraus überlastet den initialen Payload. Dynamisches (Lazy) Loading teilt Übersetzungen nach Route oder Namensraum auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen von nicht übersetzten Inhalten (FOUC) und Cache-Komplexität. Die Messung beider Strategien ist essenziell.", le = () => "Rendering & Hydratisierung", ue = () => "Das Bundle sind die Daten, die an jeden Benutzer weltweit gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von einigen Kilobytes bis zu zig Kilobytes an Laufzeitcode, plus die Übersetzungsdateien selbst.", de = () => "Warum diese Metriken wichtig sind", fe = () => "Dimensione del bundle", pe = () => "Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).", me = () => "Caricamento dinamico", he = () => "Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.", ge = () => "Rendering e idratazione", _e = () => "Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.", ve = () => "Perché queste metriche sono importanti", ye = () => "Tamanho do Bundle", be = () => "Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode desencadear novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).", xe = () => "Carregamento Dinâmico", Se = () => "Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento tardio introduz suas próprias compensações: solicitações em cascada, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.", Ce = () => "Renderização e Hidratação", we = () => "O bundle representa os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução.", Te = () => "Por que essas métricas são importantes", Ee = () => "包大小", De = () => "将大型 JSON 字典连接到每个组件会创建一个隐藏的依赖：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加庞大的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。", Oe = () => "动态加载", ke = () => "预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。", Ae = () => "渲染与注水", je = () => "包是发送给全球每个用户的数据。更大的包意味着更长的下载时间——特别是在许多地区常见的慢速 3G 连接上。i18n 库的权重差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。", Me = () => "为什么这些指标很重要", Ne = () => "バンドルサイズ", Pe = () => "巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更がツリー全体の再レンダリングを引き起こす可能性があります。SSRのハイドレーション中、巨大な翻訳オブジェクトのパースとアタッチにより、ページがインタラクティブになるまでの遅延が発生し、Time to Interactive (TTI) に直接影響します。", Fe = () => "動的ローディング", Ie = () => "すべての翻訳を事前に読み込むと、初期のペイロードが過負荷になります。動的（遅延）読み込みは、ルートまたは名前空間ごとに翻訳を分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、未翻訳コンテンツのフラッシュ、キャッシュの複雑化といった独自のトレードオフがあります。両方の戦略を測定することが不可欠です。", Le = () => "レンダリングとハイドレーション", Re = () => "バンドルは、世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。特に多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリはその重量が劇的に異なります。ランタイムコードだけで数キロバイトから数十キロバイト、さらに翻訳ファイル自体が加わります。", ze = () => "これらの指標が重要な理由", Be = () => "번들 크기", Ve = () => "모든 컴포넌트에 대규모 JSON 사전(dictionary)을 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트의 모든 변경 사항은 전체 트리에서 리렌더링을 유발할 수 있습니다. SSR 수화 단계에서 방대한 번역 객체를 파싱하고 연결하면 페이지가 상호작용 가능해지는 시간까지 지연이 발생하며, 이는 Time to Interactive(TTI)에 직접적인 영향을 미칩니다.", He = () => "동적 로딩", Ue = () => "모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 내용만 전송합니다. 그러나 지연 로딩은 워터폴 요청, 번역되지 않은 콘텐츠의 깜빡임(FOUC), 캐시 복잡성 등 자체적인 트레이드오프를 수반합니다. 두 전략을 모두 측정하는 것이 필수적입니다.", We = () => "렌더링 및 수화(Hydration)", Ge = () => "번들은 전 세계 모든 사용자에게 전송되는 데이터를 나타냅니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 발생하는 느린 3G 연결에서 더욱 그렇습니다. i18n 라이브러리는 런타임 코드만으로도 수 킬로바이트에서 수십 킬로바이트까지 무게가 크게 다르며, 여기에 번역 파일 자체가 추가됩니다.", Ke = () => "이 지표가 중요한 이유", qe = () => "Размер бандла", Je = () => "Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода добавляют задержку до того, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).", Ye = () => "Динамическая загрузка", Xe = () => "Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно для текущей страницы. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfall), мерцание непереведенного контента и сложность кэширования. Измерение обеих стратегий необходимо.", Z = () => "Рендеринг и гидратация", Ze = () => "Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой размер бандла означает более долгое время загрузки, особенно при медленном 3G-соединении, характерном для многих регионов. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт рантайм-кода, плюс сами файлы переводов.", Qe = () => "Почему эти показатели важны", $e = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? R(e) : n === "es" ? G(e) : n === "de" ? ae(e) : n === "it" ? fe(e) : n === "pt" ? ye(e) : n === "zh" ? Ee(e) : n === "ja" ? Ne(e) : n === "ko" ? Be(e) : n === "ru" ? qe(e) : j(e);
}), et = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? z(e) : n === "es" ? K(e) : n === "de" ? oe(e) : n === "it" ? pe(e) : n === "pt" ? be(e) : n === "zh" ? De(e) : n === "ja" ? Pe(e) : n === "ko" ? Ve(e) : n === "ru" ? Je(e) : M(e);
}), tt = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? B(e) : n === "es" ? q(e) : n === "de" ? se(e) : n === "it" ? me(e) : n === "pt" ? xe(e) : n === "zh" ? Oe(e) : n === "ja" ? Fe(e) : n === "ko" ? He(e) : n === "ru" ? Ye(e) : N(e);
}), nt = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? V(e) : n === "es" ? J(e) : n === "de" ? ce(e) : n === "it" ? he(e) : n === "pt" ? Se(e) : n === "zh" ? ke(e) : n === "ja" ? Ie(e) : n === "ko" ? Ue(e) : n === "ru" ? Xe(e) : P(e);
}), rt = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? H(e) : n === "es" ? Y(e) : n === "de" ? le(e) : n === "it" ? ge(e) : n === "pt" ? Ce(e) : n === "zh" ? Ae(e) : n === "ja" ? Le(e) : n === "ko" ? We(e) : n === "ru" ? Z(e) : F(e);
}), it = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? U(e) : n === "es" ? X(e) : n === "de" ? ue(e) : n === "it" ? _e(e) : n === "pt" ? we(e) : n === "zh" ? je(e) : n === "ja" ? Re(e) : n === "ko" ? Ge(e) : n === "ru" ? Ze(e) : I(e);
}), at = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? W(e) : n === "es" ? ie(e) : n === "de" ? de(e) : n === "it" ? ve(e) : n === "pt" ? Te(e) : n === "zh" ? Me(e) : n === "ja" ? ze(e) : n === "ko" ? Ke(e) : n === "ru" ? Qe(e) : L(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/home/WhyItMatters.tsx";
function ot() {
	return t("section", {
		className: "mb-16",
		children: [t("h2", {
			className: "mb-6 text-2xl font-bold text-foreground",
			children: at()
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 6,
			columnNumber: 7
		}, this), t("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: [
				t("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [t("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: $e()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 11,
						columnNumber: 11
					}, this), t("p", {
						className: "text-sm text-muted-foreground",
						children: it()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 14,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 10,
					columnNumber: 9
				}, this),
				t("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [t("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: rt()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 19,
						columnNumber: 11
					}, this), t("p", {
						className: "text-sm text-muted-foreground",
						children: et()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 22,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 18,
					columnNumber: 9
				}, this),
				t("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [t("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: tt()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 27,
						columnNumber: 11
					}, this), t("p", {
						className: "text-sm text-muted-foreground",
						children: nt()
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 30,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 26,
					columnNumber: 9
				}, this)
			]
		}, void 0, !0, {
			fileName: Q,
			lineNumber: 9,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: Q,
		lineNumber: 5,
		columnNumber: 5
	}, this);
}
var st = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
m("en", { reload: !1 });
function ct({ children: n }) {
	return t(e, { children: n }, void 0, !1, {
		fileName: st,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/home/WhyItMatters.wrapper.tsx";
function lt() {
	return t(ct, { children: t(ot, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { lt as default };
