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
var j = () => "Bundle size impact", M = () => "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.", N = () => "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.", P = () => "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.", F = () => "Hydration cost", I = () => "Lazy loading effectiveness", L = () => "Locale switch speed", R = () => "Rendering overhead", z = () => "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.", B = () => "What We Measure", V = () => "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).", H = () => "Impact sur la taille du bundle", U = () => "Pendant le SSR, les données de traduction sont sérialisées dans le HTML. Les dictionnaire volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment en que la page devient interactive.", W = () => "À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération des nouvelles traductions, le rendu des composants et la mise à jour du DOM.", G = () => "Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arbre des composants.", K = () => "Coût d'hydratation", q = () => "Efficacité du chargement différé", J = () => "Vitesse de changement de langue", Y = () => "Surcharge de rendu", X = () => "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.", ie = () => "Ce que nous mesurons", ae = () => "Si le fractionnement des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).", oe = () => "Impacto en el tamaño del bundle", se = () => "Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.", ce = () => "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.", le = () => "Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar renderizados innecesarios en todo el árbol de componentes.", ue = () => "Coste de hidratación", de = () => "Eficacia de la carga diferida", fe = () => "Velocidad de cambio de idioma", pe = () => "Sobrecarga de renderizado", me = () => "Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluye la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.", he = () => "Qué medimos", ge = () => "Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).", _e = () => "Auswirkung auf die Bundle-Größe", ve = () => "Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen den HTML-Payload und verlangsamen die Hydratisierung — den Moment, in dem die Seite interaktiv wird.", ye = () => "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.", be = () => "Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontext-Provider injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.", xe = () => "Hydratisierungskosten", Se = () => "Effektivität von Lazy Loading", Ce = () => "Geschwindigkeit des Gebietsschemawechsels", we = () => "Rendering-Overhead", Te = () => "Die zusätzlichen JavaScript-Bytes, die an die Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Download-Zeit bei langsamen Netzwerken aus.", Ee = () => "Was wir messen", De = () => "Ob das Aufteilen von Übersetzungen nach Route oder Namensraum die initiale Last tatsächlich reduziert und welche Kompromisse dies mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).", Oe = () => "Impatto sulla dimensione del bundle", ke = () => "Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.", Ae = () => "Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.", je = () => "Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.", Me = () => "Costo di idratazione", Ne = () => "Efficacia del caricamento pigro", Pe = () => "Velocità di cambio lingua", Fe = () => "Sovrapprezzo di rendering", Ie = () => "I byte JavaScript aggiuntivi inviati agli utenti quando la libreria i18n e i suoi file di traduzione sono inclusi. Ciò influisce direttamente sul tempo di download sulle reti lente.", Le = () => "Cosa misuriamo", Re = () => "Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).", ze = () => "Impacto no tamanho do bundle", Be = () => "Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.", Ve = () => "Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.", He = () => "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções via um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.", Ue = () => "Costo de hidratação", We = () => "Eficácia do carregamento lento", Ge = () => "Velocidade de troca de idioma", Ke = () => "Sobrecarga de renderização", qe = () => "Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.", Je = () => "O que medimos", Ye = () => "Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascada, FOUC, complexidade de cache).", Xe = () => "包大小影响", Ze = () => "在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 —— 即页面变得可交互的时刻。", Qe = () => "应用在运行时从一种语言切换到另一种语言的速度 —— 包括获取新翻译、重新渲染组件和更新 DOM。", $e = () => "库为 React 渲染周期增加了多少额外时间。通过单个上下文提供者注入翻译的库可能会在整个组件树中导致不必要的重新渲染。", et = () => "注水成本", tt = () => "延迟加载有效性", nt = () => "语言切换速度", rt = () => "渲染开销", it = () => "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。", at = () => "我们测量什么", ot = () => "按路由或命名空间拆分翻译是否真的减少了初始负载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。", st = () => "バンドルサイズへの影響", ct = () => "SSR中、翻訳データはHTMLにシリアライズされます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。", lt = () => "実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるか。これには、新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。", ut = () => "ライブラリがReactのレンダリングサイクルに加える追加時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。", dt = () => "ハイドレーションコスト", ft = () => "遅延読み込みの有効性", pt = () => "ロケール切り替え速度", mt = () => "レンダリングオーバーヘッド", ht = () => "i18nライブラリとその翻訳ファイルが含まれる際にユーザーに送信される追加のJavaScriptバイト。これは低速なネットワークでのダウンロード時間に直接影響します。", gt = () => "私たちが測定するもの", _t = () => "ルートまたは名前空間ごとに翻訳を分割することが実際に初期ロードを削減するのか、そしてどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）をもたらすのか。", vt = () => "번들 크기 영향", yt = () => "SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대용량 사전은 HTML 페이로드를 증가시키고 페이지가 상호작용 가능해지는 순간인 수화 속도를 늦춥니다.", bt = () => "실행 중에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환될 수 있는지를 측정합니다. 여기에는 새 번역 가져오기, 컴포넌트 리렌더링 및 DOM 업데이트가 포함됩니다.", xt = () => "라이브러리가 React의 렌더링 주기에 추가하는 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 컴포넌트 트리 전체에서 불필요한 리렌더링을 일으킬 수 있습니다.", St = () => "수화 비용", Ct = () => "지연 로딩 효과", wt = () => "로케일 전환 속도", Tt = () => "렌더링 오버헤드", Et = () => "i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.", Dt = () => "측정 항목", Ot = () => "경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)를 유발하는지 측정합니다.", kt = () => "Влияние на размер бандла", At = () => "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML и замедляют гидратацию — момент, когда страница становится интерактивной.", jt = () => "Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.", Mt = () => "Сколько дополнительного времени библиотека добавляет в цикл рендеринга React. Библиотеки, которые внедряют переводы через одного провайдера контекста, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.", Nt = () => "Стоимость гидратации", Pt = () => "Эффективность ленивой загрузки", Ft = () => "Скорость переключения языка", It = () => "Затраты на рендеринг", Lt = () => "Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.", Rt = () => "Что мы измеряем", zt = () => "Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования).", Bt = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? H(e) : n === "es" ? oe(e) : n === "de" ? _e(e) : n === "it" ? Oe(e) : n === "pt" ? ze(e) : n === "zh" ? Xe(e) : n === "ja" ? st(e) : n === "ko" ? vt(e) : n === "ru" ? kt(e) : j(e);
}), Vt = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? U(e) : n === "es" ? se(e) : n === "de" ? ve(e) : n === "it" ? ke(e) : n === "pt" ? Be(e) : n === "zh" ? Ze(e) : n === "ja" ? ct(e) : n === "ko" ? yt(e) : n === "ru" ? At(e) : M(e);
}), Ht = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? W(e) : n === "es" ? ce(e) : n === "de" ? ye(e) : n === "it" ? Ae(e) : n === "pt" ? Ve(e) : n === "zh" ? Qe(e) : n === "ja" ? lt(e) : n === "ko" ? bt(e) : n === "ru" ? jt(e) : N(e);
}), Z = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? G(e) : n === "es" ? le(e) : n === "de" ? be(e) : n === "it" ? je(e) : n === "pt" ? He(e) : n === "zh" ? $e(e) : n === "ja" ? ut(e) : n === "ko" ? xt(e) : n === "ru" ? Mt(e) : P(e);
}), Ut = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? K(e) : n === "es" ? ue(e) : n === "de" ? xe(e) : n === "it" ? Me(e) : n === "pt" ? Ue(e) : n === "zh" ? et(e) : n === "ja" ? dt(e) : n === "ko" ? St(e) : n === "ru" ? Nt(e) : F(e);
}), Wt = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? q(e) : n === "es" ? de(e) : n === "de" ? Se(e) : n === "it" ? Ne(e) : n === "pt" ? We(e) : n === "zh" ? tt(e) : n === "ja" ? ft(e) : n === "ko" ? Ct(e) : n === "ru" ? Pt(e) : I(e);
}), Gt = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? J(e) : n === "es" ? fe(e) : n === "de" ? Ce(e) : n === "it" ? Pe(e) : n === "pt" ? Ge(e) : n === "zh" ? nt(e) : n === "ja" ? pt(e) : n === "ko" ? wt(e) : n === "ru" ? Ft(e) : L(e);
}), Kt = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Y(e) : n === "es" ? pe(e) : n === "de" ? we(e) : n === "it" ? Fe(e) : n === "pt" ? Ke(e) : n === "zh" ? rt(e) : n === "ja" ? mt(e) : n === "ko" ? Tt(e) : n === "ru" ? It(e) : R(e);
}), qt = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? X(e) : n === "es" ? me(e) : n === "de" ? Te(e) : n === "it" ? Ie(e) : n === "pt" ? qe(e) : n === "zh" ? it(e) : n === "ja" ? ht(e) : n === "ko" ? Et(e) : n === "ru" ? Lt(e) : z(e);
}), Jt = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ie(e) : n === "es" ? he(e) : n === "de" ? Ee(e) : n === "it" ? Le(e) : n === "pt" ? Je(e) : n === "zh" ? at(e) : n === "ja" ? gt(e) : n === "ko" ? Dt(e) : n === "ru" ? Rt(e) : B(e);
}), Yt = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ae(e) : n === "es" ? ge(e) : n === "de" ? De(e) : n === "it" ? Re(e) : n === "pt" ? Ye(e) : n === "zh" ? ot(e) : n === "ja" ? _t(e) : n === "ko" ? Ot(e) : n === "ru" ? zt(e) : V(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/about/WhatWeMeasure.tsx";
function Xt() {
	let e = [
		{
			metric: Bt(),
			desc: qt()
		},
		{
			metric: Kt(),
			desc: Z()
		},
		{
			metric: Ut(),
			desc: Vt()
		},
		{
			metric: Wt(),
			desc: Yt()
		},
		{
			metric: Gt(),
			desc: Ht()
		}
	];
	return t("section", {
		className: "mt-12 mx-auto max-w-3xl",
		children: [t("h2", {
			className: "mb-4 text-2xl font-bold text-foreground",
			children: Jt()
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 29,
			columnNumber: 7
		}, this), t("ul", {
			className: "space-y-4",
			children: e.map((e) => t("li", {
				className: "rounded-md border border-border p-4",
				children: [t("span", {
					className: "block text-sm font-bold text-primary",
					children: e.metric
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 38,
					columnNumber: 13
				}, this), t("span", {
					className: "block mt-1 text-sm text-muted-foreground",
					children: e.desc
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 41,
					columnNumber: 13
				}, this)]
			}, e.metric, !0, {
				fileName: Q,
				lineNumber: 34,
				columnNumber: 11
			}, this))
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 32,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: Q,
		lineNumber: 28,
		columnNumber: 5
	}, this);
}
var Zt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
m("en", { reload: !1 });
function Qt({ children: n }) {
	return t(e, { children: n }, void 0, !1, {
		fileName: Zt,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/about/WhatWeMeasure.wrapper.tsx";
function $t() {
	return t(Qt, { children: t(Xt, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { $t as default };
