import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/paraglide/runtime.js
var r = {}, i = [
	"en",
	"de",
	"fr",
	"es",
	"ja",
	"zh",
	"ko",
	"it",
	"pt"
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
	let t = h(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, _(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function h(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = b();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (S(t) && x.has(t)) {
			let e = x.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return y(t);
			}
		}
		let e = v(n);
		if (e) return e;
	}
}
var g = (e) => {
	e ? window.location.href = e : window.location.reload();
}, _ = (e, t) => {
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
	else if (S(t) && x.has(t)) {
		let n = x.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let c = () => {
		n.reload && window.location && e !== r && g(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		c();
	});
	c();
};
function v(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function y(e) {
	let t = v(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function b() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${a}=([^;]+)`))?.[2];
	return v(e);
}
var x = /* @__PURE__ */ new Map();
function S(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
//#endregion
//#region src/paraglide/messages/what_we_measure_bundlesizeimpact2.js
var C = () => "Bundle size impact", w = () => "Auswirkung auf die Bundle-Größe", T = () => "Impact sur la taille du bundle", E = () => "Impacto en el tamaño del bundle", D = () => "バンドルサイズへの影響", O = () => "包大小影响", k = () => "번들 크기 영향", A = () => "Impatto sulla dimensione del bundle", j = () => "Impacto no tamanho do bundle", M = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? C(e) : n === "de" ? w(e) : n === "fr" ? T(e) : n === "es" ? E(e) : n === "ja" ? D(e) : n === "zh" ? O(e) : n === "ko" ? k(e) : n === "it" ? A(e) : j(e);
}), N = () => "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.", P = () => "Die zusätzlichen JavaScript-Bytes, die an die Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Download-Zeit bei langsamen Netzwerken aus.", F = () => "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.", I = () => "Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluye la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.", L = () => "i18nライブラリとその翻訳ファイルが含まれる際にユーザーに送信される追加のJavaScriptバイト。これは低速なネットワークでのダウンロード時間に直接影響します。", R = () => "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。", z = () => "i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.", B = () => "I byte JavaScript aggiuntivi inviati agli utenti quando la libreria i18n e i suoi file di traduzione sono inclusi. Ciò influisce direttamente sul tempo di download sulle reti lente.", V = () => "Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.", H = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? N(e) : n === "de" ? P(e) : n === "fr" ? F(e) : n === "es" ? I(e) : n === "ja" ? L(e) : n === "zh" ? R(e) : n === "ko" ? z(e) : n === "it" ? B(e) : V(e);
}), U = () => "Rendering overhead", W = () => "Rendering-Overhead", G = () => "Surcharge de rendu", K = () => "Sobrecarga de renderizado", q = () => "レンダリングオーバーヘッド", J = () => "渲染开销", Y = () => "렌더링 오버헤드", X = () => "Sovrapprezzo di rendering", Z = () => "Sobrecarga de renderização", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? U(e) : n === "de" ? W(e) : n === "fr" ? G(e) : n === "es" ? K(e) : n === "ja" ? q(e) : n === "zh" ? J(e) : n === "ko" ? Y(e) : n === "it" ? X(e) : Z(e);
}), ne = () => "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.", re = () => "Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontext-Provider injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.", ie = () => "Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arbre des composants.", ae = () => "Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar renderizados innecesarios en todo el árbol de componentes.", oe = () => "ライブラリがReactのレンダリングサイクルに加える追加時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。", se = () => "库为 React 渲染周期增加了多少额外时间。通过单个上下文提供者注入翻译的库可能会在整个组件树中导致不必要的重新渲染。", ce = () => "라이브러리가 React의 렌더링 주기에 추가하는 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 컴포넌트 트리 전체에서 불필요한 리렌더링을 일으킬 수 있습니다.", le = () => "Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.", ue = () => "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções via um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.", de = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ne(e) : n === "de" ? re(e) : n === "fr" ? ie(e) : n === "es" ? ae(e) : n === "ja" ? oe(e) : n === "zh" ? se(e) : n === "ko" ? ce(e) : n === "it" ? le(e) : ue(e);
}), fe = () => "Hydration cost", pe = () => "Hydratisierungskosten", me = () => "Coût d'hydratation", he = () => "Coste de hidratación", ge = () => "ハイドレーションコスト", _e = () => "注水成本", ve = () => "수화 비용", ye = () => "Costo di idratazione", be = () => "Costo de hidratação", xe = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? fe(e) : n === "de" ? pe(e) : n === "fr" ? me(e) : n === "es" ? he(e) : n === "ja" ? ge(e) : n === "zh" ? _e(e) : n === "ko" ? ve(e) : n === "it" ? ye(e) : be(e);
}), Se = () => "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.", Ce = () => "Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen den HTML-Payload und verlangsamen die Hydratisierung — den Moment, in dem die Seite interaktiv wird.", we = () => "Pendant le SSR, les données de traduction sont sérialisées dans le HTML. Les dictionnaire volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment en que la page devient interactive.", Te = () => "Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.", Ee = () => "SSR中、翻訳データはHTMLにシリアライズされます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。", De = () => "在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 —— 即页面变得可交互的时刻。", Oe = () => "SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대용량 사전은 HTML 페이로드를 증가시키고 페이지가 상호작용 가능해지는 순간인 수화 속도를 늦춥니다.", ke = () => "Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.", Ae = () => "Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.", je = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Se(e) : n === "de" ? Ce(e) : n === "fr" ? we(e) : n === "es" ? Te(e) : n === "ja" ? Ee(e) : n === "zh" ? De(e) : n === "ko" ? Oe(e) : n === "it" ? ke(e) : Ae(e);
}), Me = () => "Lazy loading effectiveness", Ne = () => "Effektivität von Lazy Loading", Pe = () => "Efficacité du chargement différé", Fe = () => "Eficacia de la carga diferida", Ie = () => "遅延読み込みの有効性", Le = () => "延迟加载有效性", Re = () => "지연 로딩 효과", ze = () => "Efficacia del caricamento pigro", Be = () => "Eficácia do carregamento lento", Ve = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Me(e) : n === "de" ? Ne(e) : n === "fr" ? Pe(e) : n === "es" ? Fe(e) : n === "ja" ? Ie(e) : n === "zh" ? Le(e) : n === "ko" ? Re(e) : n === "it" ? ze(e) : Be(e);
}), He = () => "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).", Ue = () => "Ob das Aufteilen von Übersetzungen nach Route oder Namensraum die initiale Last tatsächlich reduziert und welche Kompromisse dies mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).", We = () => "Si le fractionnement des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).", Ge = () => "Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).", Ke = () => "ルートまたは名前空間ごとに翻訳を分割することが実際に初期ロードを削減するのか、そしてどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）をもたらすのか。", qe = () => "按路由或命名空间拆分翻译是否真的减少了初始负载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。", Je = () => "경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)를 유발하는지 측정합니다.", Ye = () => "Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).", Xe = () => "Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascada, FOUC, complexidade de cache).", Ze = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? He(e) : n === "de" ? Ue(e) : n === "fr" ? We(e) : n === "es" ? Ge(e) : n === "ja" ? Ke(e) : n === "zh" ? qe(e) : n === "ko" ? Je(e) : n === "it" ? Ye(e) : Xe(e);
}), Qe = () => "Locale switch speed", $e = () => "Geschwindigkeit des Gebietsschemawechsels", et = () => "Vitesse de changement de langue", tt = () => "Velocidad de cambio de idioma", nt = () => "ロケール切り替え速度", rt = () => "语言切换速度", it = () => "로케일 전환 속도", at = () => "Velocità di cambio lingua", ot = () => "Velocidade de troca de idioma", st = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Qe(e) : n === "de" ? $e(e) : n === "fr" ? et(e) : n === "es" ? tt(e) : n === "ja" ? nt(e) : n === "zh" ? rt(e) : n === "ko" ? it(e) : n === "it" ? at(e) : ot(e);
}), ct = () => "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.", lt = () => "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.", ut = () => "À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération des nouvelles traductions, le rendu des composants et la mise à jour du DOM.", dt = () => "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.", ft = () => "実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるか。これには、新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。", pt = () => "应用在运行时从一种语言切换到另一种语言的速度 —— 包括获取新翻译、重新渲染组件和更新 DOM。", mt = () => "실행 중에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환될 수 있는지를 측정합니다. 여기에는 새 번역 가져오기, 컴포넌트 리렌더링 및 DOM 업데이트가 포함됩니다.", ht = () => "Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.", gt = () => "Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.", _t = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ct(e) : n === "de" ? lt(e) : n === "fr" ? ut(e) : n === "es" ? dt(e) : n === "ja" ? ft(e) : n === "zh" ? pt(e) : n === "ko" ? mt(e) : n === "it" ? ht(e) : gt(e);
}), vt = () => "What We Measure", yt = () => "Was wir messen", $ = () => "Ce que nous mesurons", bt = () => "Qué medimos", xt = () => "私たちが測定するもの", St = () => "我们测量什么", Ct = () => "측정 항목", wt = () => "Cosa misuriamo", Tt = () => "O que medimos", Et = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? vt(e) : n === "de" ? yt(e) : n === "fr" ? $(e) : n === "es" ? bt(e) : n === "ja" ? xt(e) : n === "zh" ? St(e) : n === "ko" ? Ct(e) : n === "it" ? wt(e) : Tt(e);
});
//#endregion
//#region src/components/pages/about/WhatWeMeasure.tsx
function Dt() {
	let e = [
		{
			metric: M(),
			desc: H()
		},
		{
			metric: Q(),
			desc: de()
		},
		{
			metric: xe(),
			desc: je()
		},
		{
			metric: Ve(),
			desc: Ze()
		},
		{
			metric: st(),
			desc: _t()
		}
	];
	return /* @__PURE__ */ n("section", {
		className: "mt-12 mx-auto max-w-3xl",
		children: [/* @__PURE__ */ t("h2", {
			className: "mb-4 text-2xl font-bold text-foreground",
			children: Et()
		}), /* @__PURE__ */ t("ul", {
			className: "space-y-4",
			children: e.map((e) => /* @__PURE__ */ n("li", {
				className: "rounded-md border border-border p-4",
				children: [/* @__PURE__ */ t("span", {
					className: "block text-sm font-bold text-primary",
					children: e.metric
				}), /* @__PURE__ */ t("span", {
					className: "block mt-1 text-sm text-muted-foreground",
					children: e.desc
				})]
			}, e.metric))
		})]
	});
}
//#endregion
//#region scripts/Wrapper.tsx
_("en", { reload: !1 });
function Ot({ children: n }) {
	return /* @__PURE__ */ t(e, { children: n });
}
//#endregion
//#region src/components/pages/about/WhatWeMeasure.wrapper.tsx
function kt() {
	return /* @__PURE__ */ t(Ot, { children: /* @__PURE__ */ t(Dt, {}) });
}
//#endregion
export { kt as default };
