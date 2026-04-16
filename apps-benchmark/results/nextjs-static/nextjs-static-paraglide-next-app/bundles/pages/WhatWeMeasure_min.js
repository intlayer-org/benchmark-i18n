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
	let t = v(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, b(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function v(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = C();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (T(t) && w.has(t)) {
			let e = w.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return S(t);
			}
		}
		let e = x(n);
		if (e) return e;
	}
}
var y = (e) => {
	e ? window.location.href = e : window.location.reload();
}, b = (e, t) => {
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
	else if (T(t) && w.has(t)) {
		let n = w.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!m && n.reload && window.location && e !== r && y(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function x(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of o) if (e.toLowerCase() === t) return e;
}
function S(e) {
	let t = x(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function C() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${s}=([^;]+)`))?.[2];
	return x(e);
}
var w = /* @__PURE__ */ new Map();
function T(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var E = () => "Bundle size impact", D = () => "Impact sur la taille du bundle", O = () => "Impacto en el tamaño del bundle", k = () => "Auswirkung auf die Bundle-Größe", A = () => "Impatto sulla dimensione del bundle", j = () => "Impacto no tamanho do bundle", M = () => "包大小影响", N = () => "バンドルサイズへの影響", P = () => "번들 크기 영향", F = () => "Влияние на размер бандла", I = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? E(e) : n === "fr" ? D(e) : n === "es" ? O(e) : n === "de" ? k(e) : n === "it" ? A(e) : n === "pt" ? j(e) : n === "zh" ? M(e) : n === "ja" ? N(e) : n === "ko" ? P(e) : F(e);
}), L = () => "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.", R = () => "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.", z = () => "Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluye la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.", B = () => "Die zusätzlichen JavaScript-Bytes, die an die Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Download-Zeit bei langsamen Netzwerken aus.", V = () => "I byte JavaScript aggiuntivi inviati agli utenti quando la libreria i18n e i suoi file di traduzione sono inclusi. Ciò influisce direttamente sul tempo di download sulle reti lente.", H = () => "Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.", U = () => "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。", W = () => "i18nライブラリとその翻訳ファイルが含まれる際にユーザーに送信される追加のJavaScriptバイト。これは低速なネットワークでのダウンロード時間に直接影響します。", G = () => "i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.", K = () => "Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.", q = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? L(e) : n === "fr" ? R(e) : n === "es" ? z(e) : n === "de" ? B(e) : n === "it" ? V(e) : n === "pt" ? H(e) : n === "zh" ? U(e) : n === "ja" ? W(e) : n === "ko" ? G(e) : K(e);
}), J = () => "Rendering overhead", Y = () => "Surcharge de rendu", X = () => "Sobrecarga de renderizado", Z = () => "Rendering-Overhead", Q = () => "Sovrapprezzo di rendering", ne = () => "Sobrecarga de renderização", re = () => "渲染开销", ie = () => "レンダリングオーバーヘッド", ae = () => "렌더링 오버헤드", oe = () => "Затраты на рендеринг", se = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? J(e) : n === "fr" ? Y(e) : n === "es" ? X(e) : n === "de" ? Z(e) : n === "it" ? Q(e) : n === "pt" ? ne(e) : n === "zh" ? re(e) : n === "ja" ? ie(e) : n === "ko" ? ae(e) : oe(e);
}), ce = () => "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.", le = () => "Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arbre des composants.", ue = () => "Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar renderizados innecesarios en todo el árbol de componentes.", de = () => "Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontext-Provider injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.", fe = () => "Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.", pe = () => "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções via um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.", me = () => "库为 React 渲染周期增加了多少额外时间。通过单个上下文提供者注入翻译的库可能会在整个组件树中导致不必要的重新渲染。", he = () => "ライブラリがReactのレンダリングサイクルに加える追加時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。", ge = () => "라이브러리가 React의 렌더링 주기에 추가하는 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 컴포넌트 트리 전체에서 불필요한 리렌더링을 일으킬 수 있습니다.", _e = () => "Сколько дополнительного времени библиотека добавляет в цикл рендеринга React. Библиотеки, которые внедряют переводы через одного провайдера контекста, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.", ve = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ce(e) : n === "fr" ? le(e) : n === "es" ? ue(e) : n === "de" ? de(e) : n === "it" ? fe(e) : n === "pt" ? pe(e) : n === "zh" ? me(e) : n === "ja" ? he(e) : n === "ko" ? ge(e) : _e(e);
}), ye = () => "Hydration cost", be = () => "Coût d'hydratation", xe = () => "Coste de hidratación", Se = () => "Hydratisierungskosten", Ce = () => "Costo di idratazione", we = () => "Costo de hidratação", Te = () => "注水成本", Ee = () => "ハイドレーションコスト", De = () => "수화 비용", Oe = () => "Стоимость гидратации", ke = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ye(e) : n === "fr" ? be(e) : n === "es" ? xe(e) : n === "de" ? Se(e) : n === "it" ? Ce(e) : n === "pt" ? we(e) : n === "zh" ? Te(e) : n === "ja" ? Ee(e) : n === "ko" ? De(e) : Oe(e);
}), Ae = () => "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.", je = () => "Pendant le SSR, les données de traduction sont sérialisées dans le HTML. Les dictionnaire volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment en que la page devient interactive.", Me = () => "Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.", Ne = () => "Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen den HTML-Payload und verlangsamen die Hydratisierung — den Moment, in dem die Seite interaktiv wird.", Pe = () => "Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.", Fe = () => "Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.", Ie = () => "在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 —— 即页面变得可交互的时刻。", Le = () => "SSR中、翻訳データはHTMLにシリアライズされます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。", Re = () => "SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대용량 사전은 HTML 페이로드를 증가시키고 페이지가 상호작용 가능해지는 순간인 수화 속도를 늦춥니다.", ze = () => "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML и замедляют гидратацию — момент, когда страница становится интерактивной.", Be = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ae(e) : n === "fr" ? je(e) : n === "es" ? Me(e) : n === "de" ? Ne(e) : n === "it" ? Pe(e) : n === "pt" ? Fe(e) : n === "zh" ? Ie(e) : n === "ja" ? Le(e) : n === "ko" ? Re(e) : ze(e);
}), Ve = () => "Lazy loading effectiveness", He = () => "Efficacité du chargement différé", Ue = () => "Eficacia de la carga diferida", We = () => "Effektivität von Lazy Loading", Ge = () => "Efficacia del caricamento pigro", Ke = () => "Eficácia do carregamento lento", qe = () => "延迟加载有效性", Je = () => "遅延読み込みの有効性", Ye = () => "지연 로딩 효과", Xe = () => "Эффективность ленивой загрузки", Ze = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ve(e) : n === "fr" ? He(e) : n === "es" ? Ue(e) : n === "de" ? We(e) : n === "it" ? Ge(e) : n === "pt" ? Ke(e) : n === "zh" ? qe(e) : n === "ja" ? Je(e) : n === "ko" ? Ye(e) : Xe(e);
}), Qe = () => "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).", $e = () => "Si le fractionnement des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).", et = () => "Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).", tt = () => "Ob das Aufteilen von Übersetzungen nach Route oder Namensraum die initiale Last tatsächlich reduziert und welche Kompromisse dies mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).", nt = () => "Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).", rt = () => "Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascada, FOUC, complexidade de cache).", it = () => "按路由或命名空间拆分翻译是否真的减少了初始负载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。", at = () => "ルートまたは名前空間ごとに翻訳を分割することが実際に初期ロードを削減するのか、そしてどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）をもたらすのか。", ot = () => "경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)를 유발하는지 측정합니다.", st = () => "Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования).", ct = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Qe(e) : n === "fr" ? $e(e) : n === "es" ? et(e) : n === "de" ? tt(e) : n === "it" ? nt(e) : n === "pt" ? rt(e) : n === "zh" ? it(e) : n === "ja" ? at(e) : n === "ko" ? ot(e) : st(e);
}), lt = () => "Locale switch speed", ut = () => "Vitesse de changement de langue", dt = () => "Velocidad de cambio de idioma", ft = () => "Geschwindigkeit des Gebietsschemawechsels", pt = () => "Velocità di cambio lingua", mt = () => "Velocidade de troca de idioma", ht = () => "语言切换速度", gt = () => "ロケール切り替え速度", _t = () => "로케일 전환 속도", vt = () => "Скорость переключения языка", yt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? lt(e) : n === "fr" ? ut(e) : n === "es" ? dt(e) : n === "de" ? ft(e) : n === "it" ? pt(e) : n === "pt" ? mt(e) : n === "zh" ? ht(e) : n === "ja" ? gt(e) : n === "ko" ? _t(e) : vt(e);
}), bt = () => "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.", xt = () => "À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération des nouvelles traductions, le rendu des composants et la mise à jour du DOM.", St = () => "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.", Ct = () => "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.", wt = () => "Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.", Tt = () => "Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.", Et = () => "应用在运行时从一种语言切换到另一种语言的速度 —— 包括获取新翻译、重新渲染组件和更新 DOM。", Dt = () => "実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるか。これには、新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。", Ot = () => "실행 중에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환될 수 있는지를 측정합니다. 여기에는 새 번역 가져오기, 컴포넌트 리렌더링 및 DOM 업데이트가 포함됩니다.", kt = () => "Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.", At = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? bt(e) : n === "fr" ? xt(e) : n === "es" ? St(e) : n === "de" ? Ct(e) : n === "it" ? wt(e) : n === "pt" ? Tt(e) : n === "zh" ? Et(e) : n === "ja" ? Dt(e) : n === "ko" ? Ot(e) : kt(e);
}), jt = () => "What We Measure", Mt = () => "Ce que nous mesurons", Nt = () => "Qué medimos", $ = () => "Was wir messen", Pt = () => "Cosa misuriamo", Ft = () => "O que medimos", It = () => "我们测量什么", Lt = () => "私たちが測定するもの", Rt = () => "측정 항목", zt = () => "Что мы измеряем", Bt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? jt(e) : n === "fr" ? Mt(e) : n === "es" ? Nt(e) : n === "de" ? $(e) : n === "it" ? Pt(e) : n === "pt" ? Ft(e) : n === "zh" ? It(e) : n === "ja" ? Lt(e) : n === "ko" ? Rt(e) : zt(e);
});
function Vt() {
	let e = [
		{
			metric: I(),
			desc: q()
		},
		{
			metric: se(),
			desc: ve()
		},
		{
			metric: ke(),
			desc: Be()
		},
		{
			metric: Ze(),
			desc: ct()
		},
		{
			metric: yt(),
			desc: At()
		}
	];
	return r("section", {
		className: "mt-12 mx-auto max-w-3xl",
		children: [n("h2", {
			className: "mb-4 text-2xl font-bold text-foreground",
			children: Bt()
		}), n("ul", {
			className: "space-y-4",
			children: e.map((e) => r("li", {
				className: "rounded-md border border-border p-4",
				children: [n("span", {
					className: "block text-sm font-bold text-primary",
					children: e.metric
				}), n("span", {
					className: "block mt-1 text-sm text-muted-foreground",
					children: e.desc
				})]
			}, e.metric))
		})]
	});
}
function Ht() {
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
function Ut(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
function Wt({ children: r }) {
	let a = i().locale ?? "en";
	return t(() => {
		b(a), document.documentElement.lang = a;
	}, [a]), t(() => {
		Ht();
	}, []), n(e, {
		id: "AppRoot",
		onRender: Ut,
		children: r
	});
}
function Gt({ children: e }) {
	return n(Wt, { children: e });
}
function Kt() {
	return n(Gt, { children: n(Vt, {}) });
}
export { Kt as default };
