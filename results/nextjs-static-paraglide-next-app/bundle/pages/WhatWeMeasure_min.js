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
], d = [], f = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	let e = u;
	!f && typeof window < "u" && window.location?.href && (e = F(window.location.href));
	let t = g(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, v(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function g(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = k();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
		else if (L(t) && I.has(t)) {
			let e = I.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return b(t);
			}
		}
		let e = y(n);
		if (e) return e;
	}
}
var _ = (e) => {
	e ? window.location.href = e : window.location.reload();
}, v = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = h();
	} catch {}
	let i = [], a = u;
	!f && typeof window < "u" && window.location?.href && (a = F(window.location.href));
	for (let t of a) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (f || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, D();
	} else if (t === "baseLocale") continue;
	else if (L(t) && I.has(t)) {
		let n = I.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!f && n.reload && window.location && e !== r && _(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, te = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function y(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function b(e) {
	let t = y(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function x(e) {
	return e;
}
function S(e, t) {
	return e.exec(t.href);
}
var C = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), w = RegExp(`(?:^|;\\s*)${C}=([^;]*)`), T = Symbol(), E = T;
function D() {
	E = T;
}
function O() {
	typeof queueMicrotask == "function" ? queueMicrotask(D) : Promise.resolve().then(D);
}
function k() {
	if (typeof document > "u") return;
	if (E !== T) return E;
	let e = document.cookie.match(w)?.[1];
	return E = y(e), O(), E;
}
function A(e) {
	return j(e);
}
function j(e) {
	let t = x(typeof e == "string" ? new URL(e, te()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && y(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), x(t);
}
var M, N;
function P(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (M === t) return N;
	let n = x(new URL(t, "http://example.com")), r = A(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of d) if (S(new s(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return M = t, N = a, a;
}
function F(e) {
	let t = P(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var I = /* @__PURE__ */ new Map();
function L(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var R = () => "Bundle size impact", z = () => "Impact sur la taille du bundle", B = () => "Impacto en el tamaño del bundle", V = () => "Auswirkung auf die Bundle-Größe", H = () => "Impatto sulla dimensione del bundle", U = () => "Impacto no tamanho do bundle", W = () => "包大小影响", G = () => "バンドルサイズへの影響", K = () => "번들 크기 영향", q = () => "Влияние на размер бандла", J = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? z(e) : n === "es" ? B(e) : n === "de" ? V(e) : n === "it" ? H(e) : n === "pt" ? U(e) : n === "zh" ? W(e) : n === "ja" ? G(e) : n === "ko" ? K(e) : n === "ru" ? q(e) : R(e);
}), Y = () => "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.", X = () => "Pendant le SSR, les données de traduction sont sérialisées dans le HTML. Les dictionnaire volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment en que la page devient interactive.", Z = () => "Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.", Q = () => "Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen den HTML-Payload und verlangsamen die Hydratisierung — den Moment, in dem die Seite interaktiv wird.", ne = () => "Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.", re = () => "Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.", ie = () => "在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 —— 即页面变得可交互的时刻。", ae = () => "SSR中、翻訳データはHTMLにシリアライズされます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。", oe = () => "SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대용량 사전은 HTML 페이로드를 증가시키고 페이지가 상호작용 가능해지는 순간인 수화 속도를 늦춥니다.", se = () => "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML и замедляют гидратацию — момент, когда страница становится интерактивной.", ce = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? X(e) : n === "es" ? Z(e) : n === "de" ? Q(e) : n === "it" ? ne(e) : n === "pt" ? re(e) : n === "zh" ? ie(e) : n === "ja" ? ae(e) : n === "ko" ? oe(e) : n === "ru" ? se(e) : Y(e);
}), le = () => "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.", ue = () => "À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération des nouvelles traductions, le rendu des composants et la mise à jour du DOM.", de = () => "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.", fe = () => "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.", pe = () => "Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.", me = () => "Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.", he = () => "应用在运行时从一种语言切换到另一种语言的速度 —— 包括获取新翻译、重新渲染组件和更新 DOM。", ge = () => "実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるか。これには、新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。", _e = () => "실행 중에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환될 수 있는지를 측정합니다. 여기에는 새 번역 가져오기, 컴포넌트 리렌더링 및 DOM 업데이트가 포함됩니다.", ve = () => "Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.", ye = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? ue(e) : n === "es" ? de(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : n === "ru" ? ve(e) : le(e);
}), be = () => "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.", xe = () => "Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arbre des composants.", Se = () => "Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar renderizados innecesarios en todo el árbol de componentes.", Ce = () => "Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontext-Provider injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.", we = () => "Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.", Te = () => "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções via um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.", Ee = () => "库为 React 渲染周期增加了多少额外时间。通过单个上下文提供者注入翻译的库可能会在整个组件树中导致不必要的重新渲染。", De = () => "ライブラリがReactのレンダリングサイクルに加える追加時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。", Oe = () => "라이브러리가 React의 렌더링 주기에 추가하는 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 컴포넌트 트리 전체에서 불필요한 리렌더링을 일으킬 수 있습니다.", ke = () => "Сколько дополнительного времени библиотека добавляет в цикл рендеринга React. Библиотеки, которые внедряют переводы через одного провайдера контекста, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.", Ae = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? xe(e) : n === "es" ? Se(e) : n === "de" ? Ce(e) : n === "it" ? we(e) : n === "pt" ? Te(e) : n === "zh" ? Ee(e) : n === "ja" ? De(e) : n === "ko" ? Oe(e) : n === "ru" ? ke(e) : be(e);
}), je = () => "Hydration cost", Me = () => "Coût d'hydratation", Ne = () => "Coste de hidratación", Pe = () => "Hydratisierungskosten", Fe = () => "Costo di idratazione", Ie = () => "Costo de hidratação", Le = () => "注水成本", Re = () => "ハイドレーションコスト", ze = () => "수화 비용", Be = () => "Стоимость гидратации", Ve = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Me(e) : n === "es" ? Ne(e) : n === "de" ? Pe(e) : n === "it" ? Fe(e) : n === "pt" ? Ie(e) : n === "zh" ? Le(e) : n === "ja" ? Re(e) : n === "ko" ? ze(e) : n === "ru" ? Be(e) : je(e);
}), He = () => "Lazy loading effectiveness", Ue = () => "Efficacité du chargement différé", We = () => "Eficacia de la carga diferida", Ge = () => "Effektivität von Lazy Loading", Ke = () => "Efficacia del caricamento pigro", qe = () => "Eficácia do carregamento lento", Je = () => "延迟加载有效性", Ye = () => "遅延読み込みの有効性", Xe = () => "지연 로딩 효과", Ze = () => "Эффективность ленивой загрузки", Qe = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ue(e) : n === "es" ? We(e) : n === "de" ? Ge(e) : n === "it" ? Ke(e) : n === "pt" ? qe(e) : n === "zh" ? Je(e) : n === "ja" ? Ye(e) : n === "ko" ? Xe(e) : n === "ru" ? Ze(e) : He(e);
}), $e = () => "Locale switch speed", et = () => "Vitesse de changement de langue", tt = () => "Velocidad de cambio de idioma", nt = () => "Geschwindigkeit des Gebietsschemawechsels", rt = () => "Velocità di cambio lingua", it = () => "Velocidade de troca de idioma", at = () => "语言切换速度", ot = () => "ロケール切り替え速度", st = () => "로케일 전환 속도", ct = () => "Скорость переключения языка", lt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? et(e) : n === "es" ? tt(e) : n === "de" ? nt(e) : n === "it" ? rt(e) : n === "pt" ? it(e) : n === "zh" ? at(e) : n === "ja" ? ot(e) : n === "ko" ? st(e) : n === "ru" ? ct(e) : $e(e);
}), ut = () => "Rendering overhead", dt = () => "Surcharge de rendu", ft = () => "Sobrecarga de renderizado", pt = () => "Rendering-Overhead", mt = () => "Sovrapprezzo di rendering", ht = () => "Sobrecarga de renderização", gt = () => "渲染开销", _t = () => "レンダリングオーバーヘッド", vt = () => "렌더링 오버헤드", yt = () => "Затраты на рендеринг", bt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? dt(e) : n === "es" ? ft(e) : n === "de" ? pt(e) : n === "it" ? mt(e) : n === "pt" ? ht(e) : n === "zh" ? gt(e) : n === "ja" ? _t(e) : n === "ko" ? vt(e) : n === "ru" ? yt(e) : ut(e);
}), xt = () => "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.", St = () => "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.", Ct = () => "Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluye la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.", wt = () => "Die zusätzlichen JavaScript-Bytes, die an die Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Download-Zeit bei langsamen Netzwerken aus.", Tt = () => "I byte JavaScript aggiuntivi inviati agli utenti quando la libreria i18n e i suoi file di traduzione sono inclusi. Ciò influisce direttamente sul tempo di download sulle reti lente.", Et = () => "Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.", Dt = () => "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。", Ot = () => "i18nライブラリとその翻訳ファイルが含まれる際にユーザーに送信される追加のJavaScriptバイト。これは低速なネットワークでのダウンロード時間に直接影響します。", kt = () => "i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.", At = () => "Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.", jt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? St(e) : n === "es" ? Ct(e) : n === "de" ? wt(e) : n === "it" ? Tt(e) : n === "pt" ? Et(e) : n === "zh" ? Dt(e) : n === "ja" ? Ot(e) : n === "ko" ? kt(e) : n === "ru" ? At(e) : xt(e);
}), Mt = () => "What We Measure", Nt = () => "Ce que nous mesurons", Pt = () => "Qué medimos", Ft = () => "Was wir messen", It = () => "Cosa misuriamo", Lt = () => "O que medimos", Rt = () => "我们测量什么", zt = () => "私たちが測定するもの", Bt = () => "측정 항목", $ = () => "Что мы измеряем", Vt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Nt(e) : n === "es" ? Pt(e) : n === "de" ? Ft(e) : n === "it" ? It(e) : n === "pt" ? Lt(e) : n === "zh" ? Rt(e) : n === "ja" ? zt(e) : n === "ko" ? Bt(e) : n === "ru" ? $(e) : Mt(e);
}), Ht = () => "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).", Ut = () => "Si le fractionnement des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).", Wt = () => "Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).", Gt = () => "Ob das Aufteilen von Übersetzungen nach Route oder Namensraum die initiale Last tatsächlich reduziert und welche Kompromisse dies mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).", Kt = () => "Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).", qt = () => "Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascada, FOUC, complexidade de cache).", Jt = () => "按路由或命名空间拆分翻译是否真的减少了初始负载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。", Yt = () => "ルートまたは名前空間ごとに翻訳を分割することが実際に初期ロードを削減するのか、そしてどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）をもたらすのか。", Xt = () => "경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)를 유발하는지 측정합니다.", Zt = () => "Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования).", Qt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ut(e) : n === "es" ? Wt(e) : n === "de" ? Gt(e) : n === "it" ? Kt(e) : n === "pt" ? qt(e) : n === "zh" ? Jt(e) : n === "ja" ? Yt(e) : n === "ko" ? Xt(e) : n === "ru" ? Zt(e) : Ht(e);
});
function $t() {
	let e = [
		{
			metric: J(),
			desc: jt()
		},
		{
			metric: bt(),
			desc: Ae()
		},
		{
			metric: Ve(),
			desc: ce()
		},
		{
			metric: Qe(),
			desc: Qt()
		},
		{
			metric: lt(),
			desc: ye()
		}
	];
	return a("section", {
		className: "mt-12 mx-auto max-w-3xl",
		children: [i("h2", {
			className: "mb-4 text-2xl font-bold text-foreground",
			children: Vt()
		}), i("ul", {
			className: "space-y-4",
			children: e.map((e) => a("li", {
				className: "rounded-md border border-border p-4",
				children: [i("span", {
					className: "block text-sm font-bold text-primary",
					children: e.metric
				}), i("span", {
					className: "block mt-1 text-sm text-muted-foreground",
					children: e.desc
				})]
			}, e.metric))
		})]
	});
}
function en() {
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
function tn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function nn({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		tn("AppRoot", c);
	}, [c]), e(() => {
		v(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		en();
	}, []), i(r, { children: a });
}
function rn({ children: e }) {
	return i(nn, { children: e });
}
function an() {
	return i(rn, { children: i($t, {}) });
}
export { an as default };
