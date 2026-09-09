import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = Object.defineProperty, n = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, r = {}, i = [
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
], a = "PARAGLIDE_LOCALE", o = 3456e4, s = [
	"cookie",
	"globalVariable",
	"baseLocale"
], c = [], l = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var u, d = !1, f = () => {
	let e = s;
	!l && typeof window < "u" && window.location?.href && (e = A(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, te(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = w();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (M(t) && j.has(t)) {
			let e = j.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return h(t);
			}
		}
		let e = m(n);
		if (e) return e;
	}
}
var p = (e) => {
	e ? window.location.href = e : window.location.reload();
}, te = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = f();
	} catch {}
	let i = [], c = s;
	!l && typeof window < "u" && window.location?.href && (c = A(window.location.href));
	for (let t of c) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
		document.cookie = t, S();
	} else if (t === "baseLocale") continue;
	else if (M(t) && j.has(t)) {
		let n = j.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let d = () => {
		!l && n.reload && window.location && e !== r && p(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		d();
	});
	d();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function m(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function h(e) {
	let t = m(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function g(e) {
	return e;
}
function _(e, t) {
	return e.exec(t.href);
}
var v = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), y = RegExp(`(?:^|;\\s*)${v}=([^;]*)`), b = Symbol(), x = b;
function S() {
	x = b;
}
function C() {
	typeof queueMicrotask == "function" ? queueMicrotask(S) : Promise.resolve().then(S);
}
function w() {
	if (typeof document > "u") return;
	if (x !== b) return x;
	let e = document.cookie.match(y)?.[1];
	return x = m(e), C(), x;
}
function T(e) {
	return E(e);
}
function E(e) {
	let t = g(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && m(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), g(t);
}
var D, O;
function k(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (D === t) return O;
	let n = g(new URL(t, "http://example.com")), i = T(n), a = i.href === n.href ? [n] : [n, i], o;
	for (let e of a) {
		for (let t of c) if (_(new r(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return D = t, O = o, o;
}
function A(e) {
	let t = k(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var j = /* @__PURE__ */ new Map();
function M(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var N = () => "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.", P = () => "La même application 10 pages est construite pour chaque bibliothèque. Nous mesurons le bundle de production (rollup-plugin-visualizer), lançons des audits Lighthouse et utilisons le profilage pour capturer le rendu lors des changements de langue. Tout s'exécute en CI sur du matériel homogène pour des résultats reproductibles.", F = () => "La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en hardware consistente para asegurar resultados reproducibles.", I = () => "Die gleiche 10-seitige App wird einmal pro Bibliothek gebaut. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Sprachwechsel zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten.", L = () => "La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.", R = () => "O mesmo app de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias Lighthouse para as métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes rodam em CI em hardware consistente para garantir resultados reprodutíveis.", z = () => "相同的 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行加载指标的 Lighthouse 审核，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在一致硬件上的 CI 中运行，以确保结果可复现。", B = () => "同じ10ページのアプリをライブラリごとに1回構築します。本番バンドルを測定し（rollup-plugin-visualizer経由）、読み込み指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダー時間をキャプチャします。再現可能な結果を確保するために、すべてのテストは一貫したハードウェア上のCIで実行されます。", V = () => "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.", H = () => "Одно и то же 10-страничное приложение собирается один раз для каждой библиотеки. Мы измеряем продакшн-бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для фиксации времени рендеринга при смене языка. Все тесты запускаются в CI на идентичном оборудовании для обеспечения воспроизводимости результатов.", U = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? P(e) : n === "es" ? F(e) : n === "de" ? I(e) : n === "it" ? L(e) : n === "pt" ? R(e) : n === "zh" ? z(e) : n === "ja" ? B(e) : n === "ko" ? V(e) : n === "ru" ? H(e) : N(e);
}), W = () => "Methodology", G = () => "Méthodologie", K = () => "Metodología", q = () => "Methodik", J = () => "Metodologia", Y = () => "Metodologia", X = () => "方法论", Z = () => "手法", re = () => "Methodology", ie = () => "Методология", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? G(e) : n === "es" ? K(e) : n === "de" ? q(e) : n === "it" ? J(e) : n === "pt" ? Y(e) : n === "zh" ? X(e) : n === "ja" ? Z(e) : n === "ko" ? re(e) : n === "ru" ? ie(e) : W(e);
}), oe = () => "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.", se = () => "Choisir une bibliothèque i18n est une décision d'architecture à long terme. Beaucoup de comparatifs insistent sur l'ergonomie d'API, mais peu mesurent le coût performance : poids ajouté au bundle ? impact sur le rendu avec des milliers de clés ? le chargement paresseux aide-t-il vraiment ou déplace-t-il seulement le coût ? Ce benchmark répond avec des données réelles.", ce = () => "Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo desplaza el coste? Este benchmark responde a esas preguntas con datos reales.", le = () => "Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Konsequenzen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verlagert es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.", ue = () => "Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.", de = () => "Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.", fe = () => "选择 i18n 库是一个具有长期影响的架构决策。大多数比较关注 API 的易用性，但很少有衡量性能成本的：库为包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试通过真实数据回答了这些问题。", pe = () => "i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重量を追加しますか？数千の翻訳キーが読み込まれたとき、レンダリングにどのように影響しますか？遅延読み込みは実際に役立ちますか、それともコストをシフトするだけですか？このベンチマークは、実際のデータでこれらの質問に答えます。", me = () => "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.", he = () => "Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений фокусируются на удобстве API, но лишь немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : n === "ru" ? he(e) : oe(e);
}), _e = () => "Why This Exists", ve = () => "Pourquoi ce projet existe", ye = () => "Por qué existe esto", be = () => "Warum dies existiert", xe = () => "Perché esiste", Se = () => "Por que isto existe", Ce = () => "为什么存在这个测试", we = () => "なぜこれが存在するのか", Te = () => "Why This Exists", Ee = () => "Зачем это нужно", De = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : n === "ru" ? Ee(e) : _e(e);
}), Oe = () => "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.", ke = () => "Il s'agit d'une application de test open source — pas d'un produit ni d'une entreprise. Elle sert uniquement de base multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans les mêmes conditions.", Ae = () => "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React de varias páginas realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas.", je = () => "Dies ist eine Open-Source-Testanwendung — kein Produkt und kein Unternehmen. Ihr einziger Zweck ist es, eine realistische React-App mit mehreren Seiten bereitzustellen, in die verschiedene i18n-Bibliotheken integriert und unter identischen Bedingungen gemessen werden können.", Me = () => "Questa è un'applicazione di test open source — non un prodotto o un'azienda. Il suo unico scopo è quello di fornire un'app React multipagina realistica in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche.", Ne = () => "Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer uma aplicação React de várias páginas realista onde diferentes bibliotecas i18n podem ser integradas e medidas sob condições idênticas.", Pe = () => "这是一个开源测试应用程序 — 不是产品或公司。其唯一目的是提供一个现实的、多页面的 React 应用，以便在相同条件下集成和衡量不同的 i18n 库。", Fe = () => "これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、現実的なマルチページReactアプリを提供し、異なるi18nライブラリを同一条件下で統合して測定できるようにすることです。", Ie = () => "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.", Le = () => "Это тестовое приложение с открытым исходным кодом, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное React-приложение, в которое можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : n === "ru" ? Le(e) : Oe(e);
}), ze = () => "About This Benchmark", Be = () => "À propos de ce benchmark", Ve = () => "Acerca de este benchmark", He = () => "Über diesen Benchmark", Ue = () => "Informazioni su questo benchmark", We = () => "Sobre este benchmark", Ge = () => "关于此基准测试", Ke = () => "このベンチマークについて", qe = () => "About This Benchmark", Je = () => "Об этом бенчмарке", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Be(e) : n === "es" ? Ve(e) : n === "de" ? He(e) : n === "it" ? Ue(e) : n === "pt" ? We(e) : n === "zh" ? Ge(e) : n === "ja" ? Ke(e) : n === "ko" ? qe(e) : n === "ru" ? Je(e) : ze(e);
}), Xe = () => "Bundle size impact", Ze = () => "Impact sur la taille du bundle", Qe = () => "Impacto en el tamaño del bundle", $e = () => "Auswirkungen auf die Bundle-Größe", et = () => "Impatto sulla dimensione del bundle", tt = () => "Impacto no tamanho do bundle", nt = () => "包大小影响", rt = () => "バンドルサイズへの影響", it = () => "Bundle size impact", at = () => "Влияние на размер бандла", ot = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : n === "ru" ? at(e) : Xe(e);
}), st = () => "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.", ct = () => "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers sont inclus — impact direct sur les réseaux lents.", lt = () => "Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.", ut = () => "Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.", dt = () => "I byte JavaScript aggiuntivi inviati agli utenti quando vengono incluse la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.", ft = () => "Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.", pt = () => "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。", mt = () => "i18nライブラリとその翻訳ファイルが含まれるときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。", ht = () => "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.", gt = () => "Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.", _t = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ct(e) : n === "es" ? lt(e) : n === "de" ? ut(e) : n === "it" ? dt(e) : n === "pt" ? ft(e) : n === "zh" ? pt(e) : n === "ja" ? mt(e) : n === "ko" ? ht(e) : n === "ru" ? gt(e) : st(e);
}), vt = () => "Hydration cost", yt = () => "Coût d'hydratation", bt = () => "Coste de hidratación", xt = () => "Hydrierungskosten", St = () => "Costo di idratazione", Ct = () => "Custo de hidratação", wt = () => "注水成本", Tt = () => "ハイドレーションコスト", Et = () => "Hydration cost", Dt = () => "Стоимость гидратации", Ot = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? yt(e) : n === "es" ? bt(e) : n === "de" ? xt(e) : n === "it" ? St(e) : n === "pt" ? Ct(e) : n === "zh" ? wt(e) : n === "ja" ? Tt(e) : n === "ko" ? Et(e) : n === "ru" ? Dt(e) : vt(e);
}), kt = () => "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.", At = () => "En SSR, les données de traduction sont sérialisées dans le HTML. De gros dictionnaires alourdissent la page et ralentissent l'hydratation.", jt = () => "Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.", Mt = () => "Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Verzeichnisse erhöhen die HTML-Nutzlast und verlangsamen die Hydrierung — den Moment, in dem die Seite interaktiv wird.", Nt = () => "Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.", Pt = () => "Durante o SSR, os dados de tradução são serializados no HTML. Dicionários grandes aumentam o payload HTML e retardam a hidratação — o momento em que a página se torna interativa.", Ft = () => "在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 — 即页面变得可交互的时刻。", It = () => "SSR中、翻訳データはHTMLにシリアル化されます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになるまでのハイドレーションを遅らせます。", Lt = () => "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.", Rt = () => "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем полезной нагрузки HTML и замедляют гидратацию — момент, когда страница становится интерактивной.", zt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? At(e) : n === "es" ? jt(e) : n === "de" ? Mt(e) : n === "it" ? Nt(e) : n === "pt" ? Pt(e) : n === "zh" ? Ft(e) : n === "ja" ? It(e) : n === "ko" ? Lt(e) : n === "ru" ? Rt(e) : kt(e);
}), Bt = () => "Lazy loading effectiveness", Vt = () => "Efficacité du chargement paresseux", Ht = () => "Eficacia de la carga diferida", Ut = () => "Effektivität von Lazy Loading", Wt = () => "Efficacia del caricamento pigro", Gt = () => "Eficácia do carregamento lento", Kt = () => "延迟加载有效性", qt = () => "遅延読み込みの有効性", Jt = () => "Lazy loading effectiveness", Yt = () => "Эффективность ленивой загрузки", Xt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Vt(e) : n === "es" ? Ht(e) : n === "de" ? Ut(e) : n === "it" ? Wt(e) : n === "pt" ? Gt(e) : n === "zh" ? Kt(e) : n === "ja" ? qt(e) : n === "ko" ? Jt(e) : n === "ru" ? Yt(e) : Bt(e);
}), Zt = () => "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).", Qt = () => "Le découpage par route ou espace de noms réduit-il vraiment la charge initiale, et quels compromis cela introduit (cascade, FOUC, cache) ?", $t = () => "Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).", en = () => "Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).", tn = () => "Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).", nn = () => "Se dividir as traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs isso introduz (requisições em cascata, FOUC, complexidade de cache).", rn = () => "按路由或命名空间拆分翻译是否确实减少了初始加载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。", an = () => "ルートごとまたは名前空間ごとに翻訳を分割することが実際に初期負荷を軽減するかどうか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。", on = () => "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).", sn = () => "Снижает ли разделение переводов по маршрутам или пространствам имен фактическую начальную нагрузку, и какие компромиссы это вносит (каскадные запросы, FOUC, сложность кэширования).", cn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Qt(e) : n === "es" ? $t(e) : n === "de" ? en(e) : n === "it" ? tn(e) : n === "pt" ? nn(e) : n === "zh" ? rn(e) : n === "ja" ? an(e) : n === "ko" ? on(e) : n === "ru" ? sn(e) : Zt(e);
}), ln = () => "Locale switch speed", un = () => "Vitesse de changement de langue", dn = () => "Velocidad de cambio de idioma", fn = () => "Geschwindigkeit des Sprachwechsels", pn = () => "Velocità di cambio lingua", mn = () => "Velocidade de troca de localidade", hn = () => "语言环境切换速度", gn = () => "ロケール切り替え速度", _n = () => "Locale switch speed", vn = () => "Скорость переключения языка", yn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? un(e) : n === "es" ? dn(e) : n === "de" ? fn(e) : n === "it" ? pn(e) : n === "pt" ? mn(e) : n === "zh" ? hn(e) : n === "ja" ? gn(e) : n === "ko" ? _n(e) : n === "ru" ? vn(e) : ln(e);
}), bn = () => "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.", xn = () => "À quelle vitesse l'application peut basculer de langue à l'exécution — récupération des traductions, re-rendu, mise à jour du DOM.", Sn = () => "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.", Cn = () => "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.", wn = () => "Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.", Tn = () => "Quão rápido o app pode alternar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM.", En = () => "应用程序在运行时从一种语言切换到另一种语言的速度 — 包括获取新翻译、重新渲染组件和更新 DOM。", Dn = () => "実行時にある言語から別の言語にどれだけ速く切り替えられるか。新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。", On = () => "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.", kn = () => "Как быстро приложение может переключиться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.", An = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? xn(e) : n === "es" ? Sn(e) : n === "de" ? Cn(e) : n === "it" ? wn(e) : n === "pt" ? Tn(e) : n === "zh" ? En(e) : n === "ja" ? Dn(e) : n === "ko" ? On(e) : n === "ru" ? kn(e) : bn(e);
}), jn = () => "Rendering overhead", Mn = () => "Surcharge de rendu", Nn = () => "Sobrecarga de renderizado", Pn = () => "Rendering-Overhead", Fn = () => "Sovrapprezzo di rendering", In = () => "Sobrecarga de renderização", Ln = () => "渲染开销", Rn = () => "レンダリングのオーバーヘッド", zn = () => "Rendering overhead", Bn = () => "Накладные расходы на рендеринг", Vn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Mn(e) : n === "es" ? Nn(e) : n === "de" ? Pn(e) : n === "it" ? Fn(e) : n === "pt" ? In(e) : n === "zh" ? Ln(e) : n === "ja" ? Rn(e) : n === "ko" ? zn(e) : n === "ru" ? Bn(e) : jn(e);
}), Hn = () => "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.", Un = () => "Temps supplémentaire ajouté au cycle de rendu. Les bibliothèques qui injectent les traductions via un seul provider de contexte peuvent provoquer des re-rendus inutiles.", Wn = () => "Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes.", Gn = () => "Wie viel zusätzliche Zeit die Bibliothek zum Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.", Kn = () => "Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.", qn = () => "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.", Jn = () => "库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树的不必要重新渲染。", Yn = () => "ライブラリがReactのレンダーサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。", Xn = () => "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.", Zn = () => "Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, которые внедряют переводы через единый провайдер контекста, могут вызывать ненужные повторные рендеринги по всему дереву компонентов.", Qn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Un(e) : n === "es" ? Wn(e) : n === "de" ? Gn(e) : n === "it" ? Kn(e) : n === "pt" ? qn(e) : n === "zh" ? Jn(e) : n === "ja" ? Yn(e) : n === "ko" ? Xn(e) : n === "ru" ? Zn(e) : Hn(e);
}), $n = () => "What We Measure", er = () => "Ce que nous mesurons", tr = () => "Qué medimos", nr = () => "Was wir messen", rr = () => "Cosa misuriamo", ir = () => "O que medimos", ar = () => "衡量指标", or = () => "測定項目", sr = () => "What We Measure", cr = () => "Что мы измеряем", lr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? er(e) : n === "es" ? tr(e) : n === "de" ? nr(e) : n === "it" ? rr(e) : n === "pt" ? ir(e) : n === "zh" ? ar(e) : n === "ja" ? or(e) : n === "ko" ? sr(e) : n === "ru" ? cr(e) : $n(e);
}), ur = () => "Insights, tutorials, and analysis from the i18n community.", dr = () => "Articles, tutoriels et analyses de la communauté i18n.", fr = () => "Información, tutoriales y análisis de la comunidad i18n.", pr = () => "Einblicke, Tutorials und Analysen aus der i18n-Community.", mr = () => "Approfondimenti, tutorial e analisi dalla comunità i18n.", hr = () => "Insights, tutoriais e análises da comunidade i18n.", gr = () => "来自 i18n 社区的见解、教程和分析。", _r = () => "i18nコミュニティからのインサイト、チュートリアル、分析。", vr = () => "Insights, tutorials, and analysis from the i18n community.", yr = () => "Инсайты, туториалы и аналитика от сообщества i18n.", br = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? dr(e) : n === "es" ? fr(e) : n === "de" ? pr(e) : n === "it" ? mr(e) : n === "pt" ? hr(e) : n === "zh" ? gr(e) : n === "ja" ? _r(e) : n === "ko" ? vr(e) : n === "ru" ? yr(e) : ur(e);
}), xr = () => "Blog", Sr = () => "Blog", Cr = () => "Blog", wr = () => "Blog", Tr = () => "Blog", Er = () => "Blog", Dr = () => "博客", Or = () => "ブログ", kr = () => "Blog", Ar = () => "Блог", jr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Sr(e) : n === "es" ? Cr(e) : n === "de" ? wr(e) : n === "it" ? Tr(e) : n === "pt" ? Er(e) : n === "zh" ? Dr(e) : n === "ja" ? Or(e) : n === "ko" ? kr(e) : n === "ru" ? Ar(e) : xr(e);
}), Mr = () => "Benchmark", Nr = () => "Benchmark", Pr = () => "Benchmark", Fr = () => "Benchmark", Ir = () => "Benchmark", Lr = () => "Benchmark", Rr = () => "基准测试", zr = () => "ベンチマーク", Br = () => "Benchmark", Vr = () => "Бенчмарк", Hr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Nr(e) : n === "es" ? Pr(e) : n === "de" ? Fr(e) : n === "it" ? Ir(e) : n === "pt" ? Lr(e) : n === "zh" ? Rr(e) : n === "ja" ? zr(e) : n === "ko" ? Br(e) : n === "ru" ? Vr(e) : Mr(e);
}), Ur = () => "March 15, 2026", Wr = () => "15 mars 2026", Gr = () => "15 de marzo de 2026", Kr = () => "15. März 2026", qr = () => "15 marzo 2026", Jr = () => "15 de março de 2026", Yr = () => "2026年3月15日", Xr = () => "2026年3月15日", Zr = () => "March 15, 2026", Qr = () => "15 марта 2026 г.", $r = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Wr(e) : n === "es" ? Gr(e) : n === "de" ? Kr(e) : n === "it" ? qr(e) : n === "pt" ? Jr(e) : n === "zh" ? Yr(e) : n === "ja" ? Xr(e) : n === "ko" ? Zr(e) : n === "ru" ? Qr(e) : Ur(e);
}), ei = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", ti = () => "Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.", ni = () => "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los sorprendentes resultados.", ri = () => "Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.", ii = () => "Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.", ai = () => "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho de bundle e DX. Aqui estão os resultados surpreendentes.", oi = () => "我们在性能、包大小和 DX 方面测试了 12 种不同的国际化库。以下是令人惊讶的结果。", si = () => "パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。", ci = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", li = () => "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.", ui = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ti(e) : n === "es" ? ni(e) : n === "de" ? ri(e) : n === "it" ? ii(e) : n === "pt" ? ai(e) : n === "zh" ? oi(e) : n === "ja" ? si(e) : n === "ko" ? ci(e) : n === "ru" ? li(e) : ei(e);
}), di = () => "Comparing i18n Libraries in 2026: A Deep Dive", fi = () => "Comparer les bibliothèques i18n en 2026 : plongée détaillée", pi = () => "Comparativa de bibliotecas i18n en 2026: Un análisis profundo", mi = () => "Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick", hi = () => "Confronto delle librerie i18n nel 2026: un'analisi approfondita", gi = () => "Comparando bibliotecas i18n em 2026: um mergulho profundo", _i = () => "2026 年 i18n 库对比：深度分析", vi = () => "2026年のi18nライブラリ比較：ディープダイブ", yi = () => "Comparing i18n Libraries in 2026: A Deep Dive", bi = () => "Сравнение библиотек i18n в 2026 году: глубокое погружение", xi = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? fi(e) : n === "es" ? pi(e) : n === "de" ? mi(e) : n === "it" ? hi(e) : n === "pt" ? gi(e) : n === "zh" ? _i(e) : n === "ja" ? vi(e) : n === "ko" ? yi(e) : n === "ru" ? bi(e) : di(e);
}), Si = () => "Tutorial", Ci = () => "Tutoriel", wi = () => "Tutorial", Ti = () => "Tutorial", Ei = () => "Tutorial", Di = () => "Tutorial", Oi = () => "教程", ki = () => "チュートリアル", Ai = () => "Tutorial", ji = () => "Туториал", Mi = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ci(e) : n === "es" ? wi(e) : n === "de" ? Ti(e) : n === "it" ? Ei(e) : n === "pt" ? Di(e) : n === "zh" ? Oi(e) : n === "ja" ? ki(e) : n === "ko" ? Ai(e) : n === "ru" ? ji(e) : Si(e);
}), Ni = () => "March 8, 2026", Pi = () => "8 mars 2026", Fi = () => "8 de marzo de 2026", Ii = () => "8. März 2026", Li = () => "8 marzo 2026", Ri = () => "8 de março de 2026", zi = () => "2026年3月8日", Bi = () => "2026年3月8日", Vi = () => "March 8, 2026", Hi = () => "8 марта 2026 г.", Ui = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Pi(e) : n === "es" ? Fi(e) : n === "de" ? Ii(e) : n === "it" ? Li(e) : n === "pt" ? Ri(e) : n === "zh" ? zi(e) : n === "ja" ? Bi(e) : n === "ko" ? Vi(e) : n === "ru" ? Hi(e) : Ni(e);
}), Wi = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", Gi = () => "Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.", Ki = () => "Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.", qi = () => "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Build-Zeit.", Ji = () => "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni al momento della compilazione.", Yi = () => "Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de build.", Xi = () => "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。", Zi = () => "遅延読み込み、コード分割、ビルド時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。", Qi = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", $i = () => "Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время сборки.", ea = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Gi(e) : n === "es" ? Ki(e) : n === "de" ? qi(e) : n === "it" ? Ji(e) : n === "pt" ? Yi(e) : n === "zh" ? Xi(e) : n === "ja" ? Zi(e) : n === "ko" ? Qi(e) : n === "ru" ? $i(e) : Wi(e);
}), ta = () => "How to Reduce Your i18n Bundle by 60%", na = () => "Réduire votre bundle i18n de 60 %", ra = () => "Cómo reducir tu bundle i18n en un 60%", ia = () => "Wie Sie Ihr i18n-Bundle um 60 % reduzieren", aa = () => "Come ridurre il bundle i18n del 60%", oa = () => "Como reduzir seu bundle i18n em 60%", sa = () => "如何将 i18n 包大小减少 60%", ca = () => "i18nバンドルを60%削減する方法", la = () => "How to Reduce Your i18n Bundle by 60%", ua = () => "Как уменьшить бандл i18n на 60%", da = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? na(e) : n === "es" ? ra(e) : n === "de" ? ia(e) : n === "it" ? aa(e) : n === "pt" ? oa(e) : n === "zh" ? sa(e) : n === "ja" ? ca(e) : n === "ko" ? la(e) : n === "ru" ? ua(e) : ta(e);
}), fa = () => "Analysis", pa = () => "Analyse", ma = () => "Análisis", ha = () => "Analyse", ga = () => "Analisi", _a = () => "Análise", va = () => "分析", ya = () => "分析", ba = () => "Analysis", xa = () => "Анализ", Sa = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? pa(e) : n === "es" ? ma(e) : n === "de" ? ha(e) : n === "it" ? ga(e) : n === "pt" ? _a(e) : n === "zh" ? va(e) : n === "ja" ? ya(e) : n === "ko" ? ba(e) : n === "ru" ? xa(e) : fa(e);
}), Ca = () => "February 28, 2026", wa = () => "28 février 2026", Ta = () => "28 de febrero de 2026", Ea = () => "28. Februar 2026", Da = () => "28 febbraio 2026", Oa = () => "28 de fevereiro de 2026", ka = () => "2026年2月28日", Aa = () => "2026年2月28日", ja = () => "February 28, 2026", Ma = () => "28 февраля 2026 г.", Na = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? wa(e) : n === "es" ? Ta(e) : n === "de" ? Ea(e) : n === "it" ? Da(e) : n === "pt" ? Oa(e) : n === "zh" ? ka(e) : n === "ja" ? Aa(e) : n === "ko" ? ja(e) : n === "ru" ? Ma(e) : Ca(e);
}), Pa = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", Fa = () => "Panorama des tendances, patterns émergents et préférences de la communauté.", Ia = () => "Una visión general del ecosistema i18n actual en React, cubriendo tendencias, patrones emergentes y preferencias de la comunidad.", La = () => "Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.", Ra = () => "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.", za = () => "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.", Ba = () => "React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。", Va = () => "トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。", Ha = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", Ua = () => "Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.", Wa = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Fa(e) : n === "es" ? Ia(e) : n === "de" ? La(e) : n === "it" ? Ra(e) : n === "pt" ? za(e) : n === "zh" ? Ba(e) : n === "ja" ? Va(e) : n === "ko" ? Ha(e) : n === "ru" ? Ua(e) : Pa(e);
}), Ga = () => "The State of Internationalization in React", Ka = () => "État de l'internationalisation dans l'écosystème React", qa = () => "El estado de la internacionalización en React", Ja = () => "Der Stand der Internationalisierung in React", Ya = () => "Lo stato dell'internazionalizzazione in React", Xa = () => "O estado da internacionalização no React", Za = () => "React 国际化现状", Qa = () => "Reactにおける国際化の現状", $a = () => "The State of Internationalization in React", eo = () => "Состояние интернационализации в React", to = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ka(e) : n === "es" ? qa(e) : n === "de" ? Ja(e) : n === "it" ? Ya(e) : n === "pt" ? Xa(e) : n === "zh" ? Za(e) : n === "ja" ? Qa(e) : n === "ko" ? $a(e) : n === "ru" ? eo(e) : Ga(e);
}), no = () => "Tutorial", ro = () => "Tutoriel", io = () => "Tutorial", ao = () => "Tutorial", oo = () => "Tutorial", so = () => "Tutorial", co = () => "教程", lo = () => "チュートリアル", uo = () => "Tutorial", fo = () => "Туториал", po = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ro(e) : n === "es" ? io(e) : n === "de" ? ao(e) : n === "it" ? oo(e) : n === "pt" ? so(e) : n === "zh" ? co(e) : n === "ja" ? lo(e) : n === "ko" ? uo(e) : n === "ru" ? fo(e) : no(e);
}), mo = () => "February 15, 2026", ho = () => "15 février 2026", go = () => "15 de febrero de 2026", _o = () => "15. Februar 2026", vo = () => "15 febbraio 2026", yo = () => "15 de fevereiro de 2026", bo = () => "2026年2月15日", xo = () => "2026年2月15日", So = () => "February 15, 2026", Co = () => "15 февраля 2026 г.", wo = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ho(e) : n === "es" ? go(e) : n === "de" ? _o(e) : n === "it" ? vo(e) : n === "pt" ? yo(e) : n === "zh" ? bo(e) : n === "ja" ? xo(e) : n === "ko" ? So(e) : n === "ru" ? Co(e) : mo(e);
}), To = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", Eo = () => "Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.", Do = () => "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.", Oo = () => "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.", ko = () => "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.", Ao = () => "Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui.", jo = () => "关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。", Mo = () => "50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。", No = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", Po = () => "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.", Fo = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Eo(e) : n === "es" ? Do(e) : n === "de" ? Oo(e) : n === "it" ? ko(e) : n === "pt" ? Ao(e) : n === "zh" ? jo(e) : n === "ja" ? Mo(e) : n === "ko" ? No(e) : n === "ru" ? Po(e) : To(e);
}), Io = () => "Migrating from react-i18next to Lingui", Lo = () => "Migrer de react-i18next vers Lingui", Ro = () => "Migración de react-i18next a Lingui", zo = () => "Migration von react-i18next zu Lingui", Bo = () => "Migrazione da react-i18next a Lingui", Vo = () => "Migrando de react-i18next para o Lingui", Ho = () => "从 react-i18next 迁移到 Lingui", Uo = () => "react-i18nextからLinguiへの移行", Wo = () => "Migrating from react-i18next to Lingui", Go = () => "Миграция с react-i18next на Lingui", Ko = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Lo(e) : n === "es" ? Ro(e) : n === "de" ? zo(e) : n === "it" ? Bo(e) : n === "pt" ? Vo(e) : n === "zh" ? Ho(e) : n === "ja" ? Uo(e) : n === "ko" ? Wo(e) : n === "ru" ? Go(e) : Io(e);
}), qo = () => "Analysis", Jo = () => "Analyse", Yo = () => "Análisis", Xo = () => "Analyse", Zo = () => "Analisi", Qo = () => "Análise", $o = () => "分析", es = () => "分析", ts = () => "Analysis", ns = () => "Анализ", rs = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Jo(e) : n === "es" ? Yo(e) : n === "de" ? Xo(e) : n === "it" ? Zo(e) : n === "pt" ? Qo(e) : n === "zh" ? $o(e) : n === "ja" ? es(e) : n === "ko" ? ts(e) : n === "ru" ? ns(e) : qo(e);
}), is = () => "February 1, 2026", as = () => "1er février 2026", os = () => "1 de febrero de 2026", ss = () => "1. Februar 2026", cs = () => "1 febbraio 2026", ls = () => "1 de fevereiro de 2026", us = () => "2026年2月1日", ds = () => "2026年2月1日", fs = () => "February 1, 2026", ps = () => "1 февраля 2026 г.", ms = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? as(e) : n === "es" ? os(e) : n === "de" ? ss(e) : n === "it" ? cs(e) : n === "pt" ? ls(e) : n === "zh" ? us(e) : n === "ja" ? ds(e) : n === "ko" ? fs(e) : n === "ru" ? ps(e) : is(e);
}), hs = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", gs = () => "Les React Server Components introduisent de nouveaux motifs pour l'i18n.", _s = () => "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.", vs = () => "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.", ys = () => "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.", bs = () => "React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas.", xs = () => "React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。", Ss = () => "React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。", Cs = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", ws = () => "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.", Ts = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? gs(e) : n === "es" ? _s(e) : n === "de" ? vs(e) : n === "it" ? ys(e) : n === "pt" ? bs(e) : n === "zh" ? xs(e) : n === "ja" ? Ss(e) : n === "ko" ? Cs(e) : n === "ru" ? ws(e) : hs(e);
}), Es = () => "Server Components and i18n: What Changes?", Ds = () => "Server Components et i18n : qu'est-ce qui change ?", Os = () => "Server Components e i18n: ¿Qué cambia?", ks = () => "Server Components und i18n: Was ändert sich?", As = () => "Server Components e i18n: cosa cambia?", js = () => "Server Components e i18n: o que muda?", Ms = () => "Server Components 与 i18n：发生了什么变化？", Ns = () => "Server Componentsとi18n：何が変わるのか？", Ps = () => "Server Components and i18n: What Changes?", Fs = () => "Server Components и i18n: что меняется?", Is = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ds(e) : n === "es" ? Os(e) : n === "de" ? ks(e) : n === "it" ? As(e) : n === "pt" ? js(e) : n === "zh" ? Ms(e) : n === "ja" ? Ns(e) : n === "ko" ? Ps(e) : n === "ru" ? Fs(e) : Es(e);
}), Ls = () => "Meta", Rs = () => "Méta", zs = () => "Meta", Bs = () => "Meta", Vs = () => "Meta", Hs = () => "Meta", Us = () => "Meta", Ws = () => "メタ", Gs = () => "Meta", Ks = () => "Мета", qs = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Rs(e) : n === "es" ? zs(e) : n === "de" ? Bs(e) : n === "it" ? Vs(e) : n === "pt" ? Hs(e) : n === "zh" ? Us(e) : n === "ja" ? Ws(e) : n === "ko" ? Gs(e) : n === "ru" ? Ks(e) : Ls(e);
}), Js = () => "January 20, 2026", Ys = () => "20 janvier 2026", Xs = () => "20 de enero de 2026", Zs = () => "20. Januar 2026", Qs = () => "20 gennaio 2026", $s = () => "20 de janeiro de 2026", ec = () => "2026年1月20日", tc = () => "2026年1月20日", nc = () => "January 20, 2026", rc = () => "20 января 2026 г.", ic = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ys(e) : n === "es" ? Xs(e) : n === "de" ? Zs(e) : n === "it" ? Qs(e) : n === "pt" ? $s(e) : n === "zh" ? ec(e) : n === "ja" ? tc(e) : n === "ko" ? nc(e) : n === "ru" ? rc(e) : Js(e);
}), ac = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", oc = () => "Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.", sc = () => "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.", cc = () => "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.", lc = () => "Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.", uc = () => "Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.", dc = () => "透明地展示我们的基准测试方法，包括测试环境、统计方法和可复现性。", fc = () => "テスト環境、統計手法、再現性など、私たちのベンチマーク手法を透明性を持って公開します。", pc = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", mc = () => "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.", hc = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? oc(e) : n === "es" ? sc(e) : n === "de" ? cc(e) : n === "it" ? lc(e) : n === "pt" ? uc(e) : n === "zh" ? dc(e) : n === "ja" ? fc(e) : n === "ko" ? pc(e) : n === "ru" ? mc(e) : ac(e);
}), gc = () => "Benchmark Methodology: How We Test", _c = () => "Méthodologie de benchmark : comment nous testons", vc = () => "Metodología de benchmark: Cómo probamos", yc = () => "Benchmark-Methodik: Wie wir testen", bc = () => "Metodologia del benchmark: come testiamo", xc = () => "Metodologia de benchmark: como testamos", Sc = () => "基准测试方法论：我们如何测试", Cc = () => "ベンチマーク手法：テスト方法について", wc = () => "Benchmark Methodology: How We Test", Tc = () => "Методология бенчмарка: как мы тестируем", Ec = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? _c(e) : n === "es" ? vc(e) : n === "de" ? yc(e) : n === "it" ? bc(e) : n === "pt" ? xc(e) : n === "zh" ? Sc(e) : n === "ja" ? Cc(e) : n === "ko" ? wc(e) : n === "ru" ? Tc(e) : gc(e);
}), Dc = () => "Read More →", Oc = () => "Lire la suite →", kc = () => "Leer más →", Ac = () => "Mehr lesen →", jc = () => "Leggi di più →", Mc = () => "Ler Mais →", Nc = () => "阅读更多 →", Pc = () => "続きを読む →", Fc = () => "Read More →", Ic = () => "Читать далее →", Lc = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Oc(e) : n === "es" ? kc(e) : n === "de" ? Ac(e) : n === "it" ? jc(e) : n === "pt" ? Mc(e) : n === "zh" ? Nc(e) : n === "ja" ? Pc(e) : n === "ko" ? Fc(e) : n === "ru" ? Ic(e) : Dc(e);
}), Rc = () => "Open source time", zc = () => "Temps open source", Bc = () => "Tiempo para el código abierto", Vc = () => "Open-Source-Zeit", Hc = () => "Tempo per l'open source", Uc = () => "Tempo para o código aberto", Wc = () => "开源时间", Gc = () => "オープンソースの時間", Kc = () => "Open source time", qc = () => "Время на open source", Jc = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? zc(e) : n === "es" ? Bc(e) : n === "de" ? Vc(e) : n === "it" ? Hc(e) : n === "pt" ? Uc(e) : n === "zh" ? Wc(e) : n === "ja" ? Gc(e) : n === "ko" ? Kc(e) : n === "ru" ? qc(e) : Rc(e);
}), Yc = () => "20% time for OSS contributions", Xc = () => "20 % du temps pour contribuer à l'OSS", Zc = () => "20% del tiempo para contribuciones a OSS", Qc = () => "20 % der Zeit für OSS-Beiträge", $c = () => "20% del tempo per contributi open source", el = () => "20% do tempo para contribuições OSS", tl = () => "20% 的时间用于 OSS 贡献", nl = () => "時間の20%をOSSへの貢献に", rl = () => "20% time for OSS contributions", il = () => "20% времени на вклад в OSS", al = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Xc(e) : n === "es" ? Zc(e) : n === "de" ? Qc(e) : n === "it" ? $c(e) : n === "pt" ? el(e) : n === "zh" ? tl(e) : n === "ja" ? nl(e) : n === "ko" ? rl(e) : n === "ru" ? il(e) : Yc(e);
}), ol = () => "Competitive pay", sl = () => "Rémunération compétitive", cl = () => "Salario competitivo", ll = () => "Wettbewerbsfähige Bezahlung", ul = () => "Retribuzione competitiva", dl = () => "Salário competitivo", fl = () => "具有竞争力的薪酬", pl = () => "競争力のある給与", ml = () => "Competitive pay", hl = () => "Конкурентная зарплата", gl = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? sl(e) : n === "es" ? cl(e) : n === "de" ? ll(e) : n === "it" ? ul(e) : n === "pt" ? dl(e) : n === "zh" ? fl(e) : n === "ja" ? pl(e) : n === "ko" ? ml(e) : n === "ru" ? hl(e) : ol(e);
}), _l = () => "Top-of-market compensation", vl = () => "Fourchettes haut de marché", yl = () => "Compensación superior a la del mercado", bl = () => "Überdurchschnittliche Vergütung", xl = () => "Compensazione ai vertici del mercato", Sl = () => "Remuneração acima do mercado", Cl = () => "市场顶尖的薪资水平", wl = () => "市場トップクラスの報酬", Tl = () => "Top-of-market compensation", El = () => "Вознаграждение выше рыночного", Dl = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? vl(e) : n === "es" ? yl(e) : n === "de" ? bl(e) : n === "it" ? xl(e) : n === "pt" ? Sl(e) : n === "zh" ? Cl(e) : n === "ja" ? wl(e) : n === "ko" ? Tl(e) : n === "ru" ? El(e) : _l(e);
}), Ol = () => "Remote-first", kl = () => "Remote-first", Al = () => "Remoto primero", jl = () => "Remote-First", Ml = () => "Remote-first", Nl = () => "Remoto primeiro", Pl = () => "远程优先", Fl = () => "リモートファースト", Il = () => "Remote-first", Ll = () => "Удаленная работа", Rl = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? kl(e) : n === "es" ? Al(e) : n === "de" ? jl(e) : n === "it" ? Ml(e) : n === "pt" ? Nl(e) : n === "zh" ? Pl(e) : n === "ja" ? Fl(e) : n === "ko" ? Il(e) : n === "ru" ? Ll(e) : Ol(e);
}), zl = () => "Work from anywhere in the world", Bl = () => "Travaillez depuis n'importe où", Vl = () => "Trabaja desde cualquier lugar del mundo", Hl = () => "Arbeiten Sie von überall auf der Welt", Ul = () => "Lavora da qualsiasi parte del mondo", Wl = () => "Trabalhe de qualquer lugar do mundo", Gl = () => "在世界任何地方工作", Kl = () => "世界中のどこからでも仕事ができます", ql = () => "Work from anywhere in the world", Jl = () => "Работайте из любой точки мира", Yl = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Bl(e) : n === "es" ? Vl(e) : n === "de" ? Hl(e) : n === "it" ? Ul(e) : n === "pt" ? Wl(e) : n === "zh" ? Gl(e) : n === "ja" ? Kl(e) : n === "ko" ? ql(e) : n === "ru" ? Jl(e) : zl(e);
}), Xl = () => "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.", Zl = () => "Rejoignez notre mission pour améliorer l'écosystème i18n. Équipe remote-first, impact, transparence et apprentissage continu.", Ql = () => "Únete a nuestra misión de mejorar el ecosistema de la internacionalización. Somos un equipo que trabaja primero en remoto y que valora el impacto, la transparencia y el aprendizaje continuo.", $l = () => "Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt.", eu = () => "Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team remote-first che apprezza l'impatto, la trasparenza e l'apprendimento continuo.", tu = () => "Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe remota que valoriza o impacto, a transparência e o aprendizado contínuo.", nu = () => "加入我们，共同改善国际化生态系统。我们是一个远程优先的团队，重视影响力、透明度和持续学习。", ru = () => "国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、影響力、透明性、そして継続的な学習を重視するリモートファーストのチームです。", iu = () => "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.", au = () => "Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы — распределенная команда, которая ценит результат, прозрачность и непрерывное обучение.", ou = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Zl(e) : n === "es" ? Ql(e) : n === "de" ? $l(e) : n === "it" ? eu(e) : n === "pt" ? tu(e) : n === "zh" ? nu(e) : n === "ja" ? ru(e) : n === "ko" ? iu(e) : n === "ru" ? au(e) : Xl(e);
}), su = () => "Careers", cu = () => "Carrières", lu = () => "Carreras", uu = () => "Karriere", du = () => "Carriere", fu = () => "Carreiras", pu = () => "招聘", mu = () => "採用情報", hu = () => "Careers", gu = () => "Вакансии", _u = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? cu(e) : n === "es" ? lu(e) : n === "de" ? uu(e) : n === "it" ? du(e) : n === "pt" ? fu(e) : n === "zh" ? pu(e) : n === "ja" ? mu(e) : n === "ko" ? hu(e) : n === "ru" ? gu(e) : su(e);
}), vu = () => "Apply Now", yu = () => "Postuler", bu = () => "Postular ahora", xu = () => "Jetzt bewerben", Su = () => "Candidati ora", Cu = () => "Candidatar-se agora", wu = () => "立即申请", Tu = () => "今すぐ応募", Eu = () => "Apply Now", Du = () => "Подать заявку", Ou = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? yu(e) : n === "es" ? bu(e) : n === "de" ? xu(e) : n === "it" ? Su(e) : n === "pt" ? Cu(e) : n === "zh" ? wu(e) : n === "ja" ? Tu(e) : n === "ko" ? Eu(e) : n === "ru" ? Du(e) : vu(e);
}), ku = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", Au = () => "Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.", ju = () => "Diseñar y escalar nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.", Mu = () => "Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.", Nu = () => "Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.", Pu = () => "Projete e dimensione nossa infraestrutura de benchmarking na nuvem que lida com milhares de execuções automatizadas diariamente.", Fu = () => "设计和扩展我们的云基准测试基础设施，每天处理数千次自动化运行。", Iu = () => "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャの設計とスケーリングを行います。", Lu = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", Ru = () => "Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.", zu = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Au(e) : n === "es" ? ju(e) : n === "de" ? Mu(e) : n === "it" ? Nu(e) : n === "pt" ? Pu(e) : n === "zh" ? Fu(e) : n === "ja" ? Iu(e) : n === "ko" ? Lu(e) : n === "ru" ? Ru(e) : ku(e);
}), Bu = () => "Backend Engineer", Vu = () => "Ingénieur back-end", Hu = () => "Ingeniero Backend", Uu = () => "Backend-Ingenieur", Wu = () => "Backend Engineer", Gu = () => "Engenheiro Backend", Ku = () => "后端工程师", qu = () => "バックエンドエンジニア", Ju = () => "Backend Engineer", Yu = () => "Бэкенд-инженер", Xu = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Vu(e) : n === "es" ? Hu(e) : n === "de" ? Uu(e) : n === "it" ? Wu(e) : n === "pt" ? Gu(e) : n === "zh" ? Ku(e) : n === "ja" ? qu(e) : n === "ko" ? Ju(e) : n === "ru" ? Yu(e) : Bu(e);
}), Zu = () => "Community", Qu = () => "Communauté", $u = () => "Comunidad", ed = () => "Community", td = () => "Comunità", nd = () => "Comunidade", rd = () => "社区", id = () => "コミュニティ", ad = () => "Community", od = () => "Сообщество", sd = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Qu(e) : n === "es" ? $u(e) : n === "de" ? ed(e) : n === "it" ? td(e) : n === "pt" ? nd(e) : n === "zh" ? rd(e) : n === "ja" ? id(e) : n === "ko" ? ad(e) : n === "ru" ? od(e) : Zu(e);
}), cd = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", ld = () => "Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.", ud = () => "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.", dd = () => "Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.", fd = () => "Interagisci con la comunità i18n tramite talk, workshop, post sul blog e contributi open source.", pd = () => "Envolva-se com a comunidade i18n através de palestras, workshops, postagens em blogs e contribuições de código aberto.", md = () => "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。", hd = () => "トーク、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと関わります。", gd = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", _d = () => "Взаимодействие с сообществом i18n через доклады, воркшопы, посты в блоге и вклад в open source.", vd = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ld(e) : n === "es" ? ud(e) : n === "de" ? dd(e) : n === "it" ? fd(e) : n === "pt" ? pd(e) : n === "zh" ? md(e) : n === "ja" ? hd(e) : n === "ko" ? gd(e) : n === "ru" ? _d(e) : cd(e);
}), yd = () => "DevRel Engineer", bd = () => "Ingénieur DevRel", xd = () => "Ingeniero de DevRel", Sd = () => "DevRel-Ingenieur", Cd = () => "Ingegnere DevRel", wd = () => "Engenheiro de DevRel", Td = () => "DevRel 工程师", Ed = () => "DevRelエンジニア", Dd = () => "DevRel Engineer", Od = () => "DevRel-инженер", kd = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? bd(e) : n === "es" ? xd(e) : n === "de" ? Sd(e) : n === "it" ? Cd(e) : n === "pt" ? wd(e) : n === "zh" ? Td(e) : n === "ja" ? Ed(e) : n === "ko" ? Dd(e) : n === "ru" ? Od(e) : yd(e);
}), Ad = () => "Documentation", jd = () => "Documentation", Md = () => "Documentación", Nd = () => "Dokumentation", Pd = () => "Documentazione", Fd = () => "Documentação", Id = () => "文档", Ld = () => "ドキュメンテーション", Rd = () => "Documentation", zd = () => "Документация", Bd = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? jd(e) : n === "es" ? Md(e) : n === "de" ? Nd(e) : n === "it" ? Pd(e) : n === "pt" ? Fd(e) : n === "zh" ? Id(e) : n === "ja" ? Ld(e) : n === "ko" ? Rd(e) : n === "ru" ? zd(e) : Ad(e);
}), Vd = () => "Engineering", Hd = () => "Ingénierie", Ud = () => "Ingeniería", Wd = () => "Engineering", Gd = () => "Engineering", Kd = () => "Engenharia", qd = () => "工程", Jd = () => "エンジニアリング", Yd = () => "Engineering", Xd = () => "Разработка", Zd = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Hd(e) : n === "es" ? Ud(e) : n === "de" ? Wd(e) : n === "it" ? Gd(e) : n === "pt" ? Kd(e) : n === "zh" ? qd(e) : n === "ja" ? Jd(e) : n === "ko" ? Yd(e) : n === "ru" ? Xd(e) : Vd(e);
}), Qd = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", $d = () => "Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.", ef = () => "Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.", tf = () => "Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.", nf = () => "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.", rf = () => "Construa e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.", af = () => "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。", of = () => "React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールの構築と保守を行います。", sf = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", cf = () => "Разработка и поддержка нашей панели управления бенчмарками и инструментов разработчика с использованием React, TypeScript и Vite.", lf = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? $d(e) : n === "es" ? ef(e) : n === "de" ? tf(e) : n === "it" ? nf(e) : n === "pt" ? rf(e) : n === "zh" ? af(e) : n === "ja" ? of(e) : n === "ko" ? sf(e) : n === "ru" ? cf(e) : Qd(e);
}), uf = () => "Senior Frontend Engineer", df = () => "Ingénieur front-end senior", ff = () => "Ingeniero Frontend Senior", pf = () => "Senior Frontend Engineer", mf = () => "Ingegnere Frontend Senior", hf = () => "Engenheiro Frontend Sênior", gf = () => "高级前端工程师", _f = () => "シニアフロントエンドエンジニア", vf = () => "Senior Frontend Engineer", yf = () => "Старший фронтенд-инженер", bf = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? df(e) : n === "es" ? ff(e) : n === "de" ? pf(e) : n === "it" ? mf(e) : n === "pt" ? hf(e) : n === "zh" ? gf(e) : n === "ja" ? _f(e) : n === "ko" ? vf(e) : n === "ru" ? yf(e) : uf(e);
}), xf = () => "Full-time", Sf = () => "Temps plein", Cf = () => "Tiempo completo", wf = () => "Vollzeit", Tf = () => "Tempo pieno", Ef = () => "Tempo integral", Df = () => "全职", Of = () => "フルタイム", kf = () => "Full-time", Af = () => "Полная занятость", jf = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Sf(e) : n === "es" ? Cf(e) : n === "de" ? wf(e) : n === "it" ? Tf(e) : n === "pt" ? Ef(e) : n === "zh" ? Df(e) : n === "ja" ? Of(e) : n === "ko" ? kf(e) : n === "ru" ? Af(e) : xf(e);
}), Mf = () => "Part-time", Nf = () => "Temps partiel", Pf = () => "Tiempo parcial", Ff = () => "Teilzeit", If = () => "Part-time", Lf = () => "Tempo parcial", Rf = () => "兼职", zf = () => "パートタイム", Bf = () => "Part-time", Vf = () => "Частичная занятость", Hf = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Nf(e) : n === "es" ? Pf(e) : n === "de" ? Ff(e) : n === "it" ? If(e) : n === "pt" ? Lf(e) : n === "zh" ? Rf(e) : n === "ja" ? zf(e) : n === "ko" ? Bf(e) : n === "ru" ? Vf(e) : Mf(e);
}), Uf = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", Wf = () => "Garantir la fiabilité des résultats par des tests et validations rigoureux.", Gf = () => "Asegurar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.", Kf = () => "Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung.", qf = () => "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.", Jf = () => "Garanta a precisão e a confiabilidade dos resultados do benchmark através de testes e validações rigorosos.", Yf = () => "通过严格的测试和验证确保基准测试结果 agrarian 准确性和可靠性。", Xf = () => "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。", Zf = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", Qf = () => "Обеспечение точности и надежности результатов бенчмарков путем строгого тестирования и валидации.", $f = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Wf(e) : n === "es" ? Gf(e) : n === "de" ? Kf(e) : n === "it" ? qf(e) : n === "pt" ? Jf(e) : n === "zh" ? Yf(e) : n === "ja" ? Xf(e) : n === "ko" ? Zf(e) : n === "ru" ? Qf(e) : Uf(e);
}), ep = () => "QA Engineer", tp = () => "Ingénieur QA", np = () => "Ingeniero de QA", rp = () => "QA-Ingenieur", ip = () => "Ingegnere QA", ap = () => "Engenheiro de QA", op = () => "QA 工程师", sp = () => "QAエンジニア", cp = () => "QA Engineer", lp = () => "QA-инженер", up = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? tp(e) : n === "es" ? np(e) : n === "de" ? rp(e) : n === "it" ? ip(e) : n === "pt" ? ap(e) : n === "zh" ? op(e) : n === "ja" ? sp(e) : n === "ko" ? cp(e) : n === "ru" ? lp(e) : ep(e);
}), dp = () => "Remote", fp = () => "À distance", pp = () => "Remoto", mp = () => "Remote", hp = () => "Remoto", gp = () => "Remoto", _p = () => "远程", vp = () => "リモート", yp = () => "Remote", bp = () => "Удаленно", xp = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? fp(e) : n === "es" ? pp(e) : n === "de" ? mp(e) : n === "it" ? hp(e) : n === "pt" ? gp(e) : n === "zh" ? _p(e) : n === "ja" ? vp(e) : n === "ko" ? yp(e) : n === "ru" ? bp(e) : dp(e);
}), Sp = () => "San Francisco / Remote", Cp = () => "San Francisco / télétravail", wp = () => "San Francisco / Remoto", Tp = () => "San Francisco / Remote", Ep = () => "San Francisco / Remoto", Dp = () => "San Francisco / Remoto", Op = () => "旧金山 / 远程", kp = () => "サンフランシスコ / リモート", Ap = () => "San Francisco / Remote", jp = () => "Сан-Франциско / Удаленно", Mp = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Cp(e) : n === "es" ? wp(e) : n === "de" ? Tp(e) : n === "it" ? Ep(e) : n === "pt" ? Dp(e) : n === "zh" ? Op(e) : n === "ja" ? kp(e) : n === "ko" ? Ap(e) : n === "ru" ? jp(e) : Sp(e);
}), Np = () => "Open Positions", Pp = () => "Postes ouverts", Fp = () => "Puestos vacantes", Ip = () => "Offene Stellen", Lp = () => "Posizioni aperte", Rp = () => "Vagas abertas", zp = () => "开放职位", Bp = () => "募集中の職種", Vp = () => "Open Positions", Hp = () => "Открытые вакансии", Up = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Pp(e) : n === "es" ? Fp(e) : n === "de" ? Ip(e) : n === "it" ? Lp(e) : n === "pt" ? Rp(e) : n === "zh" ? zp(e) : n === "ja" ? Bp(e) : n === "ko" ? Vp(e) : n === "ru" ? Hp(e) : Np(e);
}), Wp = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", Gp = () => "Guides, références d'API et tutoriels pour la plateforme de benchmark.", Kp = () => "Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.", qp = () => "Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.", Jp = () => "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.", Yp = () => "Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.", Xp = () => "为我们的基准测试平台编写全面的指南、API 参考和教程。", Zp = () => "ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、およびチュートリアルを作成します。", Qp = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", $p = () => "Создание подробных руководств, API-справок и туториалов для нашей платформы бенчмаркинга.", em = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Gp(e) : n === "es" ? Kp(e) : n === "de" ? qp(e) : n === "it" ? Jp(e) : n === "pt" ? Yp(e) : n === "zh" ? Xp(e) : n === "ja" ? Zp(e) : n === "ko" ? Qp(e) : n === "ru" ? $p(e) : Wp(e);
}), tm = () => "Technical Writer", nm = () => "Rédacteur·rice technique", rm = () => "Redactor técnico", im = () => "Technischer Redakteur", am = () => "Scrittore tecnico", om = () => "Redator técnico", sm = () => "技术作家", cm = () => "テクニカルライター", lm = () => "Technical Writer", um = () => "Технический писатель", dm = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? nm(e) : n === "es" ? rm(e) : n === "de" ? im(e) : n === "it" ? am(e) : n === "pt" ? om(e) : n === "zh" ? sm(e) : n === "ja" ? cm(e) : n === "ko" ? lm(e) : n === "ru" ? um(e) : tm(e);
}), fm = () => "Bug Report", pm = () => "Rapport de bug", mm = () => "Informe de error", hm = () => "Fehlerbericht", gm = () => "Segnalazione bug", _m = () => "Relatório de bug", vm = () => "错误报告", ym = () => "バグ報告", bm = () => "Bug Report", xm = () => "Отчет об ошибке", Sm = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? pm(e) : n === "es" ? mm(e) : n === "de" ? hm(e) : n === "it" ? gm(e) : n === "pt" ? _m(e) : n === "zh" ? vm(e) : n === "ja" ? ym(e) : n === "ko" ? bm(e) : n === "ru" ? xm(e) : fm(e);
}), Cm = () => "Contribution", wm = () => "Contribution", Tm = () => "Contribución", Em = () => "Beitrag", Dm = () => "Contributo", Om = () => "Contribuição", km = () => "贡献", Am = () => "貢献", jm = () => "Contribution", Mm = () => "Вклад в проект", Nm = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? wm(e) : n === "es" ? Tm(e) : n === "de" ? Em(e) : n === "it" ? Dm(e) : n === "pt" ? Om(e) : n === "zh" ? km(e) : n === "ja" ? Am(e) : n === "ko" ? jm(e) : n === "ru" ? Mm(e) : Cm(e);
}), Pm = () => "Email", Fm = () => "E-mail", Im = () => "Correo electrónico", Lm = () => "E-Mail", Rm = () => "Email", zm = () => "E-mail", Bm = () => "电子邮件", Vm = () => "メールアドレス", Hm = () => "Email", Um = () => "Электронная почта", Wm = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Fm(e) : n === "es" ? Im(e) : n === "de" ? Lm(e) : n === "it" ? Rm(e) : n === "pt" ? zm(e) : n === "zh" ? Bm(e) : n === "ja" ? Vm(e) : n === "ko" ? Hm(e) : n === "ru" ? Um(e) : Pm(e);
}), Gm = () => "you@example.com", Km = () => "vous@exemple.com", qm = () => "tu@ejemplo.com", Jm = () => "ihre@beispiel.de", Ym = () => "tu@esempio.com", Xm = () => "voce@exemplo.com", Zm = () => "you@example.com", Qm = () => "you@example.com", $m = () => "you@example.com", eh = () => "you@example.com", th = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Km(e) : n === "es" ? qm(e) : n === "de" ? Jm(e) : n === "it" ? Ym(e) : n === "pt" ? Xm(e) : n === "zh" ? Zm(e) : n === "ja" ? Qm(e) : n === "ko" ? $m(e) : n === "ru" ? eh(e) : Gm(e);
}), nh = () => "Message", rh = () => "Message", ih = () => "Mensaje", ah = () => "Nachricht", oh = () => "Messaggio", sh = () => "Mensagem", ch = () => "消息", lh = () => "メッセージ", uh = () => "Message", dh = () => "Сообщение", fh = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? rh(e) : n === "es" ? ih(e) : n === "de" ? ah(e) : n === "it" ? oh(e) : n === "pt" ? sh(e) : n === "zh" ? ch(e) : n === "ja" ? lh(e) : n === "ko" ? uh(e) : n === "ru" ? dh(e) : nh(e);
}), ph = () => "Describe your question or idea...", mh = () => "Décrivez votre question ou idée…", hh = () => "Describe tu pregunta o idea...", gh = () => "Beschreiben Sie Ihre Frage oder Idee...", _h = () => "Descrivi la tua domanda o idea...", vh = () => "Descreva sua pergunta ou ideia...", yh = () => "描述您的问题或想法...", bh = () => "ご質問やアイデアを記入してください...", xh = () => "Describe your question or idea...", Sh = () => "Опишите ваш вопрос или идею...", Ch = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? mh(e) : n === "es" ? hh(e) : n === "de" ? gh(e) : n === "it" ? _h(e) : n === "pt" ? vh(e) : n === "zh" ? yh(e) : n === "ja" ? bh(e) : n === "ko" ? xh(e) : n === "ru" ? Sh(e) : ph(e);
}), wh = () => "Methodology Question", Th = () => "Question de méthodologie", Eh = () => "Pregunta sobre la metodología", Dh = () => "Frage zur Methodik", Oh = () => "Domanda sulla metodologia", kh = () => "Pergunta sobre metodologia", Ah = () => "方法论问题", jh = () => "手法に関する質問", Mh = () => "Methodology Question", Nh = () => "Вопрос по методологии", Ph = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Th(e) : n === "es" ? Eh(e) : n === "de" ? Dh(e) : n === "it" ? Oh(e) : n === "pt" ? kh(e) : n === "zh" ? Ah(e) : n === "ja" ? jh(e) : n === "ko" ? Mh(e) : n === "ru" ? Nh(e) : wh(e);
}), Fh = () => "Name", Ih = () => "Nom", Lh = () => "Nombre", Rh = () => "Name", zh = () => "Nome", Bh = () => "Nome", Vh = () => "姓名", Hh = () => "名前", Uh = () => "Name", Wh = () => "Имя", Gh = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ih(e) : n === "es" ? Lh(e) : n === "de" ? Rh(e) : n === "it" ? zh(e) : n === "pt" ? Bh(e) : n === "zh" ? Vh(e) : n === "ja" ? Hh(e) : n === "ko" ? Uh(e) : n === "ru" ? Wh(e) : Fh(e);
}), Kh = () => "New Benchmark Idea", qh = () => "Idée de benchmark", Jh = () => "Nueva idea de benchmark", Yh = () => "Neue Benchmark-Idee", Xh = () => "Nuova idea di benchmark", Zh = () => "Nova ideia de benchmark", Qh = () => "新基准测试想法", $h = () => "新しいベンチマークのアイデア", eg = () => "New Benchmark Idea", tg = () => "Идея нового бенчмарка", ng = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? qh(e) : n === "es" ? Jh(e) : n === "de" ? Yh(e) : n === "it" ? Xh(e) : n === "pt" ? Zh(e) : n === "zh" ? Qh(e) : n === "ja" ? $h(e) : n === "ko" ? eg(e) : n === "ru" ? tg(e) : Kh(e);
}), rg = () => "Other", ig = () => "Autre", ag = () => "Otro", og = () => "Sonstiges", sg = () => "Altro", cg = () => "Outro", lg = () => "其他", ug = () => "その他", dg = () => "Other", fg = () => "Другое", pg = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ig(e) : n === "es" ? ag(e) : n === "de" ? og(e) : n === "it" ? sg(e) : n === "pt" ? cg(e) : n === "zh" ? lg(e) : n === "ja" ? ug(e) : n === "ko" ? dg(e) : n === "ru" ? fg(e) : rg(e);
}), mg = () => "Send Message", hg = () => "Envoyer", gg = () => "Enviar mensaje", _g = () => "Nachricht senden", vg = () => "Invia messaggio", yg = () => "Enviar mensagem", bg = () => "发送消息", xg = () => "メッセージを送信", Sg = () => "Send Message", Cg = () => "Отправить сообщение", wg = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? hg(e) : n === "es" ? gg(e) : n === "de" ? _g(e) : n === "it" ? vg(e) : n === "pt" ? yg(e) : n === "zh" ? bg(e) : n === "ja" ? xg(e) : n === "ko" ? Sg(e) : n === "ru" ? Cg(e) : mg(e);
}), Tg = () => "Topic", Eg = () => "Sujet", Dg = () => "Tema", Og = () => "Thema", kg = () => "Argomento", Ag = () => "Assunto", jg = () => "主题", Mg = () => "トピック", Ng = () => "Topic", Pg = () => "Тема", Fg = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Eg(e) : n === "es" ? Dg(e) : n === "de" ? Og(e) : n === "it" ? kg(e) : n === "pt" ? Ag(e) : n === "zh" ? jg(e) : n === "ja" ? Mg(e) : n === "ko" ? Ng(e) : n === "ru" ? Pg(e) : Tg(e);
}), Ig = () => "Your name", Lg = () => "Votre nom", Rg = () => "Tu nombre", zg = () => "Ihr Name", Bg = () => "Il tuo nome", Vg = () => "Seu nome", Hg = () => "您的姓名", Ug = () => "お名前", Wg = () => "Your name", Gg = () => "Ваше имя", Kg = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Lg(e) : n === "es" ? Rg(e) : n === "de" ? zg(e) : n === "it" ? Bg(e) : n === "pt" ? Vg(e) : n === "zh" ? Hg(e) : n === "ja" ? Ug(e) : n === "ko" ? Wg(e) : n === "ru" ? Gg(e) : Ig(e);
}), qg = () => "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at", Jg = () => "Une idée, un bug ou envie de contribuer un benchmark ? Écrivez-nous à", Yg = () => "¿Tienes ideas, has encontrado un error o quieres contribuir con un benchmark? Ponte en contacto con nosotros en", Xg = () => "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter", Zg = () => "Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo", Qg = () => "Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em", $g = () => "有想法、发现了错误或想贡献基准测试？请联系我们：", e_ = () => "アイデアがある、バグを見つけた、またはベンチマークを投稿したいですか？こちらまでご連絡ください：", t_ = () => "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at", n_ = () => "Есть идеи, нашли баг или хотите предложить бенчмарк? Напишите нам по адресу", r_ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Jg(e) : n === "es" ? Yg(e) : n === "de" ? Xg(e) : n === "it" ? Zg(e) : n === "pt" ? Qg(e) : n === "zh" ? $g(e) : n === "ja" ? e_(e) : n === "ko" ? t_(e) : n === "ru" ? n_(e) : qg(e);
}), i_ = () => "Get in Touch", a_ = () => "Contact", o_ = () => "Ponte en contacto", s_ = () => "Kontakt aufnehmen", c_ = () => "Contattaci", l_ = () => "Entre em contato", u_ = () => "取得联系", d_ = () => "お問い合わせ", f_ = () => "Get in Touch", p_ = () => "Связаться с нами", m_ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? a_(e) : n === "es" ? o_(e) : n === "de" ? s_(e) : n === "it" ? c_(e) : n === "pt" ? l_(e) : n === "zh" ? u_(e) : n === "ja" ? d_(e) : n === "ko" ? f_(e) : n === "ru" ? p_(e) : i_(e);
}), h_ = () => "Everything you need to know about i18n Benchmark.", g_ = () => "Tout savoir sur i18n Benchmark.", __ = () => "Todo lo que necesitas saber sobre i18n Benchmark.", v_ = () => "Alles, was Sie über i18n Benchmark wissen müssen.", y_ = () => "Tutto quello che c'è da sapere su i18n Benchmark.", b_ = () => "Tudo o que você precisa saber sobre o i18n Benchmark.", x_ = () => "关于 i18n 基准测试您需要了解的一切。", S_ = () => "i18n Benchmarkについて知っておくべきすべてのこと。", C_ = () => "Everything you need to know about i18n Benchmark.", w_ = () => "Все, что вам нужно знать об i18n Benchmark.", T_ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? g_(e) : n === "es" ? __(e) : n === "de" ? v_(e) : n === "it" ? y_(e) : n === "pt" ? b_(e) : n === "zh" ? x_(e) : n === "ja" ? S_(e) : n === "ko" ? C_(e) : n === "ru" ? w_(e) : h_(e);
}), E_ = () => "Frequently Asked Questions", D_ = () => "Questions fréquentes", O_ = () => "Preguntas frecuentes", k_ = () => "Häufig gestellte Fragen", A_ = () => "Domande frequenti", j_ = () => "Perguntas frequentes", M_ = () => "常见问题", N_ = () => "よくある質問", P_ = () => "Frequently Asked Questions", F_ = () => "Часто задаваемые вопросы", I_ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? D_(e) : n === "es" ? O_(e) : n === "de" ? k_(e) : n === "it" ? A_(e) : n === "pt" ? j_(e) : n === "zh" ? M_(e) : n === "ja" ? N_(e) : n === "ko" ? P_(e) : n === "ru" ? F_(e) : E_(e);
}), L_ = () => "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.", R_ = () => "Une suite open source qui mesure et compare performance, taille de bundle et expérience développeur des bibliothèques i18n pour JavaScript et React.", z_ = () => "i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.", B_ = () => "i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.", V_ = () => "i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.", H_ = () => "O i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor das bibliotecas de internacionalização para aplicações JavaScript e React.", U_ = () => "i18n 基准测试是一个开源基准测试套件，旨在衡量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。", W_ = () => "i18n Benchmarkは、JavaScriptおよびReactアプリケーション用の国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者体験を測定および比較するオープンソースのベンチマークスイートです。", G_ = () => "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.", K_ = () => "i18n Benchmark — это набор инструментов для бенчмаркинга с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчиков библиотек интернационализации для приложений на JavaScript и React.", q_ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? R_(e) : n === "es" ? z_(e) : n === "de" ? B_(e) : n === "it" ? V_(e) : n === "pt" ? H_(e) : n === "zh" ? U_(e) : n === "ja" ? W_(e) : n === "ko" ? G_(e) : n === "ru" ? K_(e) : L_(e);
}), J_ = () => "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.", Y_ = () => "Tests standardisés sur matériel cohomogène, répétés pour la significativité statistique. Les configs sont publiques sur GitHub.", X_ = () => "Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para asegurar la significación estadística. Todas las configuraciones de las pruebas están disponibles públicamente en nuestro repositorio de GitHub.", Z_ = () => "Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrmals wiederholt, um die statistische Signifikanz sicherzustellen. Alle Testkonfigurationen sind öffentlich in unserem GitHub-Repository verfügbar.", Q_ = () => "Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub.", $_ = () => "Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente no nosso repositório GitHub.", ev = () => "我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都重复多次以确保统计显著性。所有测试配置都在我们的 GitHub 存储库中公开可用。", tv = () => "一貫したハードウェアを使用し、分離された環境で標準化されたテストを実行します。統計的な有意性を確保するために、各ベンチマークは複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。", nv = () => "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.", rv = () => "Мы запускаем стандартизированные тесты в изолированных средах на идентичном оборудовании. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории на GitHub.", iv = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Y_(e) : n === "es" ? X_(e) : n === "de" ? Z_(e) : n === "it" ? Q_(e) : n === "pt" ? $_(e) : n === "zh" ? ev(e) : n === "ja" ? tv(e) : n === "ko" ? nv(e) : n === "ru" ? rv(e) : J_(e);
}), av = () => "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.", ov = () => "react-i18next, react-intl, Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee, etc.", sv = () => "Admitimos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.", cv = () => "Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.", lv = () => "Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.", uv = () => "Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.", dv = () => "我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。", fv = () => "react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。", pv = () => "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.", mv = () => "Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.", hv = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ov(e) : n === "es" ? sv(e) : n === "de" ? cv(e) : n === "it" ? lv(e) : n === "pt" ? uv(e) : n === "zh" ? dv(e) : n === "ja" ? fv(e) : n === "ko" ? pv(e) : n === "ru" ? mv(e) : av(e);
}), gv = () => "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.", _v = () => "Oui — forkez le dépôt, suivez le guide de contribution et ouvrez une pull request.", vv = () => "¡Sí! Los envíos de benchmarks de la comunidad son bienvenidos. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía una pull request. Nuestro equipo revisará y fusionará los envíos que califiquen.", yv = () => "Ja! Community-Beiträge für Benchmarks sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird die qualifizierten Einsendungen prüfen und zusammenführen.", bv = () => "Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.", xv = () => "Sim! Contribuições de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.", Sv = () => "是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审核并合并符合条件的提交。", Cv = () => "はい！コミュニティからのベンチマーク投稿を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。チームが審査し、要件を満たす投稿をマージします。", wv = () => "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.", Tv = () => "Да! Мы приветствуем бенчмарки от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя руководству для участников, и создайте pull request. Наша команда рассмотрит и примет подходящие заявки.", Ev = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? _v(e) : n === "es" ? vv(e) : n === "de" ? yv(e) : n === "it" ? bv(e) : n === "pt" ? xv(e) : n === "zh" ? Sv(e) : n === "ja" ? Cv(e) : n === "ko" ? wv(e) : n === "ru" ? Tv(e) : gv(e);
}), Dv = () => "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.", Ov = () => "Chaque semaine sur les dernières versions stables ; une release majeure relance immédiatement les mesures.", kv = () => "Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.", Av = () => "Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut aus. Major-Version-Releases lösen sofort einen Re-Benchmark-Zyklus aus.", jv = () => "Rieseguiamo tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. I rilasci di versioni principali innescano un ciclo di re-benchmark immediato.", Mv = () => "Rexecutamos todos os benchmarks semanalmente contra as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo de re-benchmarking imediato.", Nv = () => "我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会立即触发重新基准测试周期。", Pv = () => "各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。", Fv = () => "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.", Iv = () => "Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий инициирует немедленный цикл повторного тестирования.", Lv = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ov(e) : n === "es" ? kv(e) : n === "de" ? Av(e) : n === "it" ? jv(e) : n === "pt" ? Mv(e) : n === "zh" ? Nv(e) : n === "ja" ? Pv(e) : n === "ko" ? Fv(e) : n === "ru" ? Iv(e) : Dv(e);
}), Rv = () => "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.", zv = () => "Méthodologie statistique stricte, échauffement, détection d'anomalies, intervalles de confiance — données brutes publiées.", Bv = () => "Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.", Vv = () => "Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Läufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.", Hv = () => "Seguiamo una rigorosa metodologia statistica che include esecuzioni di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per la massima trasparenza.", Uv = () => "Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de valores atípicos e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.", Wv = () => "我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。", Gv = () => "ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。完全な透明性を確保するため、すべての生データは分析結果とともに公開されます。", Kv = () => "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.", qv = () => "Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и расчет доверительных интервалов. Все исходные данные публикуются вместе с нашим анализом для полной прозрачности.", Jv = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? zv(e) : n === "es" ? Bv(e) : n === "de" ? Vv(e) : n === "it" ? Hv(e) : n === "pt" ? Uv(e) : n === "zh" ? Wv(e) : n === "ja" ? Gv(e) : n === "ko" ? Kv(e) : n === "ru" ? qv(e) : Rv(e);
}), Yv = () => "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.", Xv = () => "Oui, le plan Enterprise inclut des heures pour aider les équipes à choisir une solution i18n.", Zv = () => "Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones.", Qv = () => "Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Ihrer Skalierung und Ihren Einschränkungen geben.", $v = () => "Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano soluzioni i18n. Possiamo fornire raccomandazioni personalizzate in base al caso d'uso specifico, alla scala e ai vincoli.", ey = () => "Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base no seu caso de uso específico, escala e restrições.", ty = () => "是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和限制提供量身定制的建议。", ny = () => "はい。Enterpriseプランには、i18nソリューションを評価しているチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。", ry = () => "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.", iy = () => "Да, наш план Enterprise включает консультации для команд, выбирающих i18n-решения. Мы можем дать индивидуальные рекомендации на основе вашего конкретного случая, масштаба и ограничений.", ay = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Xv(e) : n === "es" ? Zv(e) : n === "de" ? Qv(e) : n === "it" ? $v(e) : n === "pt" ? ey(e) : n === "zh" ? ty(e) : n === "ja" ? ny(e) : n === "ko" ? ry(e) : n === "ru" ? iy(e) : Yv(e);
}), oy = () => "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.", sy = () => "Benchmarks, documentation, bugs, nouvelles métriques ou sponsorship — voir GitHub.", cy = () => "Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para obtener más detalles.", ly = () => "Es gibt viele Möglichkeiten beizutragen: Benchmarks einreichen, Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.", uy = () => "Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.", dy = () => "Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para mais detalhes.", fy = () => "有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。", py = () => "貢献する方法はたくさんあります。ベンチマークの投稿、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトへのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。", my = () => "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.", hy = () => "Есть много способов: присылайте бенчмарки, улучшайте документацию, сообщайте о багах, предлагайте новые метрики или станьте спонсором проекта. Посетите наш репозиторий на GitHub для подробностей.", gy = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? sy(e) : n === "es" ? cy(e) : n === "de" ? ly(e) : n === "it" ? uy(e) : n === "pt" ? dy(e) : n === "zh" ? fy(e) : n === "ja" ? py(e) : n === "ko" ? my(e) : n === "ru" ? hy(e) : oy(e);
}), _y = () => "What is i18n Benchmark?", vy = () => "Qu'est-ce qu'i18n Benchmark ?", yy = () => "¿Qué es i18n Benchmark?", by = () => "Was ist i18n Benchmark?", xy = () => "Cos'è i18n Benchmark?", Sy = () => "O que é o i18n Benchmark?", Cy = () => "什么是 i18n 基准测试？", wy = () => "i18n Benchmarkとは何ですか？", Ty = () => "What is i18n Benchmark?", Ey = () => "Что такое i18n Benchmark?", Dy = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? vy(e) : n === "es" ? yy(e) : n === "de" ? by(e) : n === "it" ? xy(e) : n === "pt" ? Sy(e) : n === "zh" ? Cy(e) : n === "ja" ? wy(e) : n === "ko" ? Ty(e) : n === "ru" ? Ey(e) : _y(e);
}), Oy = () => "How are benchmarks conducted?", ky = () => "Comment sont menés les benchmarks ?", Ay = () => "¿Cómo se realizan los benchmarks?", jy = () => "Wie werden Benchmarks durchgeführt?", My = () => "Come vengono condotti i benchmark?", Ny = () => "Como os benchmarks são conduzidos?", Py = () => "基准测试是如何进行的？", Fy = () => "ベンチマークはどのように実施されますか？", Iy = () => "How are benchmarks conducted?", Ly = () => "Как проводятся бенчмарки?", Ry = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ky(e) : n === "es" ? Ay(e) : n === "de" ? jy(e) : n === "it" ? My(e) : n === "pt" ? Ny(e) : n === "zh" ? Py(e) : n === "ja" ? Fy(e) : n === "ko" ? Iy(e) : n === "ru" ? Ly(e) : Oy(e);
}), zy = () => "Which libraries are currently supported?", By = () => "Quelles bibliothèques sont prises en charge ?", Vy = () => "¿Qué bibliotecas se admiten actualmente?", Hy = () => "Welche Bibliotheken werden derzeit unterstützt?", Uy = () => "Quali librerie sono attualmente supportate?", Wy = () => "Quais bibliotecas são suportadas atualmente?", Gy = () => "目前支持哪些库？", Ky = () => "現在サポートされているライブラリは何ですか？", qy = () => "Which libraries are currently supported?", Jy = () => "Какие библиотеки поддерживаются в данный момент?", Yy = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? By(e) : n === "es" ? Vy(e) : n === "de" ? Hy(e) : n === "it" ? Uy(e) : n === "pt" ? Wy(e) : n === "zh" ? Gy(e) : n === "ja" ? Ky(e) : n === "ko" ? qy(e) : n === "ru" ? Jy(e) : zy(e);
}), Xy = () => "Can I submit my own benchmarks?", Zy = () => "Puis-je proposer des benchmarks ?", Qy = () => "¿Puedo enviar mis propios benchmarks?", $y = () => "Kann ich meine eigenen Benchmarks einreichen?", eb = () => "Posso inviare i miei benchmark?", tb = () => "Posso enviar meus próprios benchmarks?", nb = () => "我可以提交我自己的基准测试吗？", rb = () => "自分のベンチマークを投稿できますか？", ib = () => "Can I submit my own benchmarks?", ab = () => "Могу ли я прислать свои собственные бенчмарки?", ob = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Zy(e) : n === "es" ? Qy(e) : n === "de" ? $y(e) : n === "it" ? eb(e) : n === "pt" ? tb(e) : n === "zh" ? nb(e) : n === "ja" ? rb(e) : n === "ko" ? ib(e) : n === "ru" ? ab(e) : Xy(e);
}), sb = () => "How often are benchmarks updated?", cb = () => "À quelle fréquence sont-ils mis à jour ?", lb = () => "¿Con qué frecuencia se actualizan los benchmarks?", ub = () => "Wie oft werden Benchmarks aktualisiert?", db = () => "Con quale frequenza vengono aggiornati i benchmark?", fb = () => "Com que frequência os benchmarks são atualizados?", pb = () => "基准测试多久更新一次？", mb = () => "ベンチマークはどのくらいの頻度で更新されますか？", hb = () => "How often are benchmarks updated?", gb = () => "Как часто обновляются бенчмарки?", _b = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? cb(e) : n === "es" ? lb(e) : n === "de" ? ub(e) : n === "it" ? db(e) : n === "pt" ? fb(e) : n === "zh" ? pb(e) : n === "ja" ? mb(e) : n === "ko" ? hb(e) : n === "ru" ? gb(e) : sb(e);
}), vb = () => "Is the data reliable?", yb = () => "Les données sont-elles fiables ?", bb = () => "¿Son fiables los datos?", xb = () => "Sind die Daten zuverlässig?", Sb = () => "I dati sono affidabili?", Cb = () => "Os dados são confiáveis?", wb = () => "数据可靠吗？", Tb = () => "データは信頼できますか？", Eb = () => "Is the data reliable?", Db = () => "Можно ли доверять данным?", Ob = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? yb(e) : n === "es" ? bb(e) : n === "de" ? xb(e) : n === "it" ? Sb(e) : n === "pt" ? Cb(e) : n === "zh" ? wb(e) : n === "ja" ? Tb(e) : n === "ko" ? Eb(e) : n === "ru" ? Db(e) : vb(e);
}), kb = () => "Do you offer consulting services?", Ab = () => "Proposez-vous du conseil ?", jb = () => "¿Ofrecen servicios de consultoría?", Mb = () => "Bieten Sie Beratungsdienstleistungen an?", Nb = () => "Offrite servizi di consulenza?", Pb = () => "Vocês oferecem serviços de consultoria?", Fb = () => "你们提供咨询服务吗？", Ib = () => "コンサルティングサービスは提供していますか？", Lb = () => "Do you offer consulting services?", Rb = () => "Предоставляете ли вы консалтинговые услуги?", zb = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ab(e) : n === "es" ? jb(e) : n === "de" ? Mb(e) : n === "it" ? Nb(e) : n === "pt" ? Pb(e) : n === "zh" ? Fb(e) : n === "ja" ? Ib(e) : n === "ko" ? Lb(e) : n === "ru" ? Rb(e) : kb(e);
}), Bb = () => "How can I contribute?", Vb = () => "Comment contribuer ?", Hb = () => "¿Cómo puedo contribuir?", Ub = () => "Wie kann ich beitragen?", Wb = () => "Come posso contribuire?", Gb = () => "Como posso contribuir?", Kb = () => "我该如何贡献？", qb = () => "どのように貢献できますか？", Jb = () => "How can I contribute?", Yb = () => "Как я могу помочь проекту?", Xb = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Vb(e) : n === "es" ? Hb(e) : n === "de" ? Ub(e) : n === "it" ? Wb(e) : n === "pt" ? Gb(e) : n === "zh" ? Kb(e) : n === "ja" ? qb(e) : n === "ko" ? Jb(e) : n === "ru" ? Yb(e) : Bb(e);
}), Zb = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", Qb = () => "Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client.", $b = () => "i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente.", ex = () => "i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router.", tx = () => "i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client.", nx = () => "i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente.", rx = () => "i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。", ix = () => "i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。", ax = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", ox = () => "i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера.", sx = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Qb(e) : n === "es" ? $b(e) : n === "de" ? ex(e) : n === "it" ? tx(e) : n === "pt" ? nx(e) : n === "zh" ? rx(e) : n === "ja" ? ix(e) : n === "ko" ? ax(e) : n === "ru" ? ox(e) : Zb(e);
}), cx = () => "Contact", lx = () => "Contact", ux = () => "Contacto", dx = () => "Kontakt", fx = () => "Contatti", px = () => "Contato", mx = () => "联系我们", hx = () => "お問い合わせ", gx = () => "Contact", _x = () => "Контакт", vx = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? lx(e) : n === "es" ? ux(e) : n === "de" ? dx(e) : n === "it" ? fx(e) : n === "pt" ? px(e) : n === "zh" ? mx(e) : n === "ja" ? hx(e) : n === "ko" ? gx(e) : n === "ru" ? _x(e) : cx(e);
}), yx = () => "Contributing", bx = () => "Contribuer", xx = () => "Contribuir", Sx = () => "Beitragen", Cx = () => "Contribuire", wx = () => "Contribuindo", Tx = () => "贡献", Ex = () => "貢献する", Dx = () => "Contributing", Ox = () => "Участие в проекте", kx = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? bx(e) : n === "es" ? xx(e) : n === "de" ? Sx(e) : n === "it" ? Cx(e) : n === "pt" ? wx(e) : n === "zh" ? Tx(e) : n === "ja" ? Ex(e) : n === "ko" ? Dx(e) : n === "ru" ? Ox(e) : yx(e);
}), Ax = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", jx = () => "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.", Mx = () => "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.", Nx = () => "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.", Px = () => "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.", Fx = () => "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.", Ix = () => "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。", Lx = () => "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。", Rx = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", zx = () => "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.", Bx = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? jx(e) : n === "es" ? Mx(e) : n === "de" ? Nx(e) : n === "it" ? Px(e) : n === "pt" ? Fx(e) : n === "zh" ? Ix(e) : n === "ja" ? Lx(e) : n === "ko" ? Rx(e) : n === "ru" ? zx(e) : Ax(e);
}), Vx = () => "GitHub", Hx = () => "GitHub", Ux = () => "GitHub", Wx = () => "GitHub", Gx = () => "GitHub", Kx = () => "GitHub", qx = () => "GitHub", Jx = () => "GitHub", Yx = () => "GitHub", Xx = () => "GitHub", Zx = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Hx(e) : n === "es" ? Ux(e) : n === "de" ? Wx(e) : n === "it" ? Gx(e) : n === "pt" ? Kx(e) : n === "zh" ? qx(e) : n === "ja" ? Jx(e) : n === "ko" ? Yx(e) : n === "ru" ? Xx(e) : Vx(e);
}), Qx = () => "Methodology", $x = () => "Méthodologie", eS = () => "Metodología", tS = () => "Methodik", nS = () => "Metodologia", rS = () => "Metodologia", iS = () => "方法论", aS = () => "手法", oS = () => "Methodology", sS = () => "Методология", cS = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? $x(e) : n === "es" ? eS(e) : n === "de" ? tS(e) : n === "it" ? nS(e) : n === "pt" ? rS(e) : n === "zh" ? iS(e) : n === "ja" ? aS(e) : n === "ko" ? oS(e) : n === "ru" ? sS(e) : Qx(e);
}), lS = () => "Resources", uS = () => "Ressources", dS = () => "Recursos", fS = () => "Ressourcen", pS = () => "Risorse", mS = () => "Recursos", hS = () => "资源", gS = () => "リソース", _S = () => "Resources", vS = () => "Ресурсы", yS = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? uS(e) : n === "es" ? dS(e) : n === "de" ? fS(e) : n === "it" ? pS(e) : n === "pt" ? mS(e) : n === "zh" ? hS(e) : n === "ja" ? gS(e) : n === "ko" ? _S(e) : n === "ru" ? vS(e) : lS(e);
}), bS = () => "i18n Benchmark", xS = () => "Benchmark i18n", SS = () => "i18n Benchmark", CS = () => "i18n Benchmark", wS = () => "i18n Benchmark", TS = () => "i18n Benchmark", ES = () => "i18n Benchmark", DS = () => "i18n Benchmark", OS = () => "i18n Benchmark", kS = () => "i18n Benchmark", AS = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? xS(e) : n === "es" ? SS(e) : n === "de" ? CS(e) : n === "it" ? wS(e) : n === "pt" ? TS(e) : n === "zh" ? ES(e) : n === "ja" ? DS(e) : n === "ko" ? OS(e) : n === "ru" ? kS(e) : bS(e);
}), jS = () => "Blog", MS = () => "Blog", NS = () => "Blog", PS = () => "Blog", FS = () => "Blog", IS = () => "Blog", LS = () => "博客", RS = () => "ブログ", zS = () => "Blog", BS = () => "Блог", VS = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? MS(e) : n === "es" ? NS(e) : n === "de" ? PS(e) : n === "it" ? FS(e) : n === "pt" ? IS(e) : n === "zh" ? LS(e) : n === "ja" ? RS(e) : n === "ko" ? zS(e) : n === "ru" ? BS(e) : jS(e);
}), HS = () => "Careers", US = () => "Carrières", WS = () => "Carreras", GS = () => "Karriere", KS = () => "Carriere", qS = () => "Carreiras", JS = () => "招聘", YS = () => "採用情報", XS = () => "Careers", ZS = () => "Вакансии", QS = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? US(e) : n === "es" ? WS(e) : n === "de" ? GS(e) : n === "it" ? KS(e) : n === "pt" ? qS(e) : n === "zh" ? JS(e) : n === "ja" ? YS(e) : n === "ko" ? XS(e) : n === "ru" ? ZS(e) : HS(e);
}), $S = () => "Contact", eC = () => "Contact", tC = () => "Contacto", nC = () => "Kontakt", rC = () => "Contatti", iC = () => "Contato", aC = () => "联系我们", oC = () => "お問い合わせ", sC = () => "Contact", cC = () => "Контакт", lC = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? eC(e) : n === "es" ? tC(e) : n === "de" ? nC(e) : n === "it" ? rC(e) : n === "pt" ? iC(e) : n === "zh" ? aC(e) : n === "ja" ? oC(e) : n === "ko" ? sC(e) : n === "ru" ? cC(e) : $S(e);
}), uC = () => "FAQ", dC = () => "FAQ", fC = () => "FAQ", pC = () => "FAQ", mC = () => "FAQ", hC = () => "FAQ", gC = () => "常见问题", _C = () => "FAQ", vC = () => "FAQ", yC = () => "FAQ", bC = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? dC(e) : n === "es" ? fC(e) : n === "de" ? pC(e) : n === "it" ? mC(e) : n === "pt" ? hC(e) : n === "zh" ? gC(e) : n === "ja" ? _C(e) : n === "ko" ? vC(e) : n === "ru" ? yC(e) : uC(e);
}), xC = () => "Home", SC = () => "Accueil", CC = () => "Inicio", wC = () => "Home", TC = () => "Home", EC = () => "Início", DC = () => "首页", OC = () => "ホーム", kC = () => "Home", AC = () => "Главная", jC = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? SC(e) : n === "es" ? CC(e) : n === "de" ? wC(e) : n === "it" ? TC(e) : n === "pt" ? EC(e) : n === "zh" ? DC(e) : n === "ja" ? OC(e) : n === "ko" ? kC(e) : n === "ru" ? AC(e) : xC(e);
}), MC = () => "Methodology", NC = () => "Méthodologie", PC = () => "Metodología", FC = () => "Methodik", IC = () => "Metodologia", LC = () => "Metodologia", RC = () => "方法论", zC = () => "手法", BC = () => "Methodology", VC = () => "Методология", HC = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? NC(e) : n === "es" ? PC(e) : n === "de" ? FC(e) : n === "it" ? IC(e) : n === "pt" ? LC(e) : n === "zh" ? RC(e) : n === "ja" ? zC(e) : n === "ko" ? BC(e) : n === "ru" ? VC(e) : MC(e);
}), UC = () => "Mock Pages", WC = () => "Pages fictives", GC = () => "Páginas de prueba", KC = () => "Testseiten", qC = () => "Pagine di test", JC = () => "Páginas de Teste", YC = () => "模拟页面", XC = () => "テストページ", ZC = () => "Mock Pages", QC = () => "Тестовые страницы", $C = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? WC(e) : n === "es" ? GC(e) : n === "de" ? KC(e) : n === "it" ? qC(e) : n === "pt" ? JC(e) : n === "zh" ? YC(e) : n === "ja" ? XC(e) : n === "ko" ? ZC(e) : n === "ru" ? QC(e) : UC(e);
}), ew = () => "Pricing", tw = () => "Tarifs", nw = () => "Precios", rw = () => "Preise", iw = () => "Prezzi", aw = () => "Preços", ow = () => "价格", sw = () => "価格", cw = () => "Pricing", lw = () => "Цены", uw = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? tw(e) : n === "es" ? nw(e) : n === "de" ? rw(e) : n === "it" ? iw(e) : n === "pt" ? aw(e) : n === "zh" ? ow(e) : n === "ja" ? sw(e) : n === "ko" ? cw(e) : n === "ru" ? lw(e) : ew(e);
}), dw = () => "Products", fw = () => "Produits", pw = () => "Productos", mw = () => "Produkte", hw = () => "Prodotti", gw = () => "Produtos", _w = () => "产品", vw = () => "製品", yw = () => "Products", bw = () => "Продукты", xw = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? fw(e) : n === "es" ? pw(e) : n === "de" ? mw(e) : n === "it" ? hw(e) : n === "pt" ? gw(e) : n === "zh" ? _w(e) : n === "ja" ? vw(e) : n === "ko" ? yw(e) : n === "ru" ? bw(e) : dw(e);
}), Sw = () => "Settings", Cw = () => "Paramètres", ww = () => "Ajustes", Tw = () => "Einstellungen", Ew = () => "Impostazioni", Dw = () => "Configurações", Ow = () => "设置", kw = () => "設定", Aw = () => "Settings", jw = () => "Настройки", Mw = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Cw(e) : n === "es" ? ww(e) : n === "de" ? Tw(e) : n === "it" ? Ew(e) : n === "pt" ? Dw(e) : n === "zh" ? Ow(e) : n === "ja" ? kw(e) : n === "ko" ? Aw(e) : n === "ru" ? jw(e) : Sw(e);
}), Nw = () => "Team", Pw = () => "Équipe", Fw = () => "Equipo", Iw = () => "Team", Lw = () => "Team", Rw = () => "Equipe", zw = () => "团队", Bw = () => "チーム", Vw = () => "Team", Hw = () => "Команда", Uw = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Pw(e) : n === "es" ? Fw(e) : n === "de" ? Iw(e) : n === "it" ? Lw(e) : n === "pt" ? Rw(e) : n === "zh" ? zw(e) : n === "ja" ? Bw(e) : n === "ko" ? Vw(e) : n === "ru" ? Hw(e) : Nw(e);
}), Ww = () => "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.", Gw = () => "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.", Kw = () => "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.", qw = () => "Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.", Jw = () => "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.", Yw = () => "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade de renderização.", Xw = () => "一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。", Zw = () => "国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実世界の影響を測定するために設計されたテストアプリケーション。", Qw = () => "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.", $w = () => "Тестовое приложение, разработанное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.", eT = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Gw(e) : n === "es" ? Kw(e) : n === "de" ? qw(e) : n === "it" ? Jw(e) : n === "pt" ? Yw(e) : n === "zh" ? Xw(e) : n === "ja" ? Zw(e) : n === "ko" ? Qw(e) : n === "ru" ? $w(e) : Ww(e);
}), tT = () => "Methodology", nT = () => "Méthodologie", rT = () => "Metodología", iT = () => "Methodik", aT = () => "Metodologia", oT = () => "Metodologia", sT = () => "方法论", cT = () => "手法", lT = () => "Methodology", uT = () => "Методология", dT = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? nT(e) : n === "es" ? rT(e) : n === "de" ? iT(e) : n === "it" ? aT(e) : n === "pt" ? oT(e) : n === "zh" ? sT(e) : n === "ja" ? cT(e) : n === "ko" ? lT(e) : n === "ru" ? uT(e) : tT(e);
}), fT = () => "i18n Benchmark", pT = () => "Benchmark i18n", mT = () => "i18n Benchmark", hT = () => "i18n Benchmark", gT = () => "i18n Benchmark", _T = () => "i18n Benchmark", vT = () => "i18n Benchmark", yT = () => "i18n Benchmark", bT = () => "i18n Benchmark", xT = () => "i18n Benchmark", ST = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? pT(e) : n === "es" ? mT(e) : n === "de" ? hT(e) : n === "it" ? gT(e) : n === "pt" ? _T(e) : n === "zh" ? vT(e) : n === "ja" ? yT(e) : n === "ko" ? bT(e) : n === "ru" ? xT(e) : fT(e);
}), CT = () => "View Results", wT = () => "Voir les résultats", TT = () => "Ver resultados", ET = () => "Ergebnisse anzeigen", DT = () => "Visualizza i risultati", OT = () => "Ver Resultados", kT = () => "查看结果", AT = () => "結果を見る", jT = () => "View Results", MT = () => "Посмотреть результаты", NT = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? wT(e) : n === "es" ? TT(e) : n === "de" ? ET(e) : n === "it" ? DT(e) : n === "pt" ? OT(e) : n === "zh" ? kT(e) : n === "ja" ? AT(e) : n === "ko" ? jT(e) : n === "ru" ? MT(e) : CT(e);
}), PT = () => "Built-in", FT = () => "Intégré", IT = () => "Integrado", LT = () => "Integriert", RT = () => "Integrato", zT = () => "Integrado", BT = () => "内置", VT = () => "内蔵", HT = () => "Built-in", UT = () => "Встроено", WT = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? FT(e) : n === "es" ? IT(e) : n === "de" ? LT(e) : n === "it" ? RT(e) : n === "pt" ? zT(e) : n === "zh" ? BT(e) : n === "ja" ? VT(e) : n === "ko" ? HT(e) : n === "ru" ? UT(e) : PT(e);
}), GT = () => "Bundle Size", KT = () => "Taille du bundle", qT = () => "Tamaño del bundle", JT = () => "Bundle-Größe", YT = () => "Dimensione del bundle", XT = () => "Tamanho do Bundle", ZT = () => "包大小", QT = () => "バンドルサイズ", $T = () => "Bundle Size", eE = () => "Размер бандла", tE = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? KT(e) : n === "es" ? qT(e) : n === "de" ? JT(e) : n === "it" ? YT(e) : n === "pt" ? XT(e) : n === "zh" ? ZT(e) : n === "ja" ? QT(e) : n === "ko" ? $T(e) : n === "ru" ? eE(e) : GT(e);
}), nE = () => "Lazy Loading", rE = () => "Chargement paresseux", iE = () => "Carga diferida", aE = () => "Lazy Loading", oE = () => "Caricamento lazy", sE = () => "Carregamento Lento", cE = () => "延迟加载", lE = () => "遅延読み込み", uE = () => "Lazy Loading", dE = () => "Ленивая загрузка", fE = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? rE(e) : n === "es" ? iE(e) : n === "de" ? aE(e) : n === "it" ? oE(e) : n === "pt" ? sE(e) : n === "zh" ? cE(e) : n === "ja" ? lE(e) : n === "ko" ? uE(e) : n === "ru" ? dE(e) : nE(e);
}), pE = () => "Library", mE = () => "Bibliothèque", hE = () => "Biblioteca", gE = () => "Bibliothek", _E = () => "Libreria", vE = () => "Biblioteca", yE = () => "库", bE = () => "ライブラリ", xE = () => "Library", SE = () => "Библиотека", CE = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? mE(e) : n === "es" ? hE(e) : n === "de" ? gE(e) : n === "it" ? _E(e) : n === "pt" ? vE(e) : n === "zh" ? yE(e) : n === "ja" ? bE(e) : n === "ko" ? xE(e) : n === "ru" ? SE(e) : pE(e);
}), wE = () => "Lookup Time", TE = () => "Temps de recherche", EE = () => "Tiempo de búsqueda", DE = () => "Lookup-Zeit", OE = () => "Tempo di ricerca", kE = () => "Tempo de Busca", AE = () => "查找时间", jE = () => "ルックアップ時間", ME = () => "Lookup Time", NE = () => "Время поиска", PE = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? TE(e) : n === "es" ? EE(e) : n === "de" ? DE(e) : n === "it" ? OE(e) : n === "pt" ? kE(e) : n === "zh" ? AE(e) : n === "ja" ? jE(e) : n === "ko" ? ME(e) : n === "ru" ? NE(e) : wE(e);
}), FE = () => "Manual", IE = () => "Manuel", LE = () => "Manual", RE = () => "Manuell", zE = () => "Manuale", BE = () => "Manual", VE = () => "手动", HE = () => "手動", UE = () => "Manual", WE = () => "Вручную", GE = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? IE(e) : n === "es" ? LE(e) : n === "de" ? RE(e) : n === "it" ? zE(e) : n === "pt" ? BE(e) : n === "zh" ? VE(e) : n === "ja" ? HE(e) : n === "ko" ? UE(e) : n === "ru" ? WE(e) : FE(e);
}), KE = () => "Sample Results", qE = () => "Exemple de résultats", JE = () => "Resultados de muestra", YE = () => "Beispielergebnisse", XE = () => "Risultati di esempio", ZE = () => "Resultados de exemplo", QE = () => "示例结果", $E = () => "サンプル結果", eD = () => "Sample Results", tD = () => "Примеры результатов", nD = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? qE(e) : n === "es" ? JE(e) : n === "de" ? YE(e) : n === "it" ? XE(e) : n === "pt" ? ZE(e) : n === "zh" ? QE(e) : n === "ja" ? $E(e) : n === "ko" ? eD(e) : n === "ru" ? tD(e) : KE(e);
}), rD = () => "Yes", iD = () => "Oui", aD = () => "Sí", oD = () => "Ja", sD = () => "Sì", cD = () => "Sim", lD = () => "是", uD = () => "はい", dD = () => "Yes", fD = () => "Да", pD = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? iD(e) : n === "es" ? aD(e) : n === "de" ? oD(e) : n === "it" ? sD(e) : n === "pt" ? cD(e) : n === "zh" ? lD(e) : n === "ja" ? uD(e) : n === "ko" ? dD(e) : n === "ru" ? fD(e) : rD(e);
}), mD = () => "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.", hD = () => "mettre à jour les traductions exige des stratégies de cache busting pour livrer du contenu à jour sans re-télécharger l'inutile.", gD = () => "actualizar las traducciones requiere estrategias de invalidación de la caché para asegurar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos no modificados.", _D = () => "Die Aktualisierung von Übersetzungen erfordert Strategien zur Cache-Invalidierung, um sicherzustellen, dass Benutzer frische Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.", vD = () => "l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza riscaricare chunk non modificati.", yD = () => "atualizar as traduções requer estratégias de invalidação de cache para garantir que os usuários obtenham conteúdo fresco sem baixar novamente os chunks inalterados.", bD = () => "更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的块。", xD = () => "翻訳を更新するには、ユーザーが変更されていないチャンクを再ダウンロードすることなく最新のコンテンツを取得できるようにするためのキャッシュバースト戦略が必要です。", SD = () => "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.", CD = () => "обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных частей.", wD = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? hD(e) : n === "es" ? gD(e) : n === "de" ? _D(e) : n === "it" ? vD(e) : n === "pt" ? yD(e) : n === "zh" ? bD(e) : n === "ja" ? xD(e) : n === "ko" ? SD(e) : n === "ru" ? CD(e) : mD(e);
}), TD = () => "Cache invalidation:", ED = () => "Invalidation du cache :", DD = () => "Invalidación de la caché:", OD = () => "Cache-Invalidierung:", kD = () => "Invalidazione della cache:", AD = () => "Invalidação de cache:", jD = () => "缓存失效：", MD = () => "キャッシュの無効化：", ND = () => "Cache invalidation:", PD = () => "Инвалидация кэша:", FD = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ED(e) : n === "es" ? DD(e) : n === "de" ? OD(e) : n === "it" ? kD(e) : n === "pt" ? AD(e) : n === "zh" ? jD(e) : n === "ja" ? MD(e) : n === "ko" ? ND(e) : n === "ru" ? PD(e) : TD(e);
}), ID = () => "users may briefly see translation keys or a fallback language before the chunk arrives.", LD = () => "l'utilisateur peut voir brièvement des clés ou une langue de secours avant l'arrivée du fragment.", RD = () => "los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.", zD = () => "Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Fallback-Sprache, bevor der Chunk eintrifft.", BD = () => "gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.", VD = () => "usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes de o chunk chegar.", HD = () => "在块到达之前，用户可能会短暂看到翻译键或回退语言。", UD = () => "チャンクが到着する前に、ユーザーに翻訳キーまたはフォールバック言語が一時的に表示されることがあります。", WD = () => "users may briefly see translation keys or a fallback language before the chunk arrives.", GD = () => "пользователи могут кратковременно видеть ключи перевода или резервный язык до загрузки нужной части.", KD = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? LD(e) : n === "es" ? RD(e) : n === "de" ? zD(e) : n === "it" ? BD(e) : n === "pt" ? VD(e) : n === "zh" ? HD(e) : n === "ja" ? UD(e) : n === "ko" ? WD(e) : n === "ru" ? GD(e) : ID(e);
}), qD = () => "Flash of untranslated content (FOUC):", JD = () => "Flash de contenu non traduit (FOUC) :", YD = () => "Parpadeo de contenido no traducido (FOUC):", XD = () => "Flash of Untranslated Content (FOUC):", ZD = () => "Flash di contenuti non tradotti (FOUC):", QD = () => "Flash de conteúdo não traduzido (FOUC):", $D = () => "未翻译内容闪烁 (FOUC)：", eO = () => "翻訳されていないコンテンツのフラッシュ (FOUC)：", tO = () => "Flash of untranslated content (FOUC):", nO = () => "Мерцание непереведенного контента (FOUC):", rO = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? JD(e) : n === "es" ? YD(e) : n === "de" ? XD(e) : n === "it" ? ZD(e) : n === "pt" ? QD(e) : n === "zh" ? $D(e) : n === "ja" ? eO(e) : n === "ko" ? tO(e) : n === "ru" ? nO(e) : qD(e);
}), iO = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", aO = () => "Cette appli de test offre un environnement contrôlé — 10 pages au contenu réaliste — pour comparer les bibliothèques i18n sur trois axes : le poids ajouté au bundle JavaScript, le temps passé à analyser et afficher le texte traduit, et l'efficacité du découpage de code et du chargement paresseux. Chaque bibliothèque est intégrée dans la même base pour des résultats comparables.", oO = () => "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.", sO = () => "Diese Testanwendung bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken auf drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe Anwendung integriert, sodass die Ergebnisse direkt vergleichbar sind.", cO = () => "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.", lO = () => "Este app de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada no mesmo app para que os resultados sejam diretamente comparáveis.", uO = () => "此测试应用提供了一个受控环境 — 10 个具有真实内容的页面 — 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。", dO = () => "このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、JavaScriptバンドルに追加される重量、翻訳コンテンツの解析とレンダリングに費される時間、およびコード分割と遅延読み込み戦略の効果という3つの軸でi18nライブラリを比較します。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。", fO = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", pO = () => "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему JavaScript-бандлу, время, затрачиваемое на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.", mO = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? aO(e) : n === "es" ? oO(e) : n === "de" ? sO(e) : n === "it" ? cO(e) : n === "pt" ? lO(e) : n === "zh" ? uO(e) : n === "ja" ? dO(e) : n === "ko" ? fO(e) : n === "ru" ? pO(e) : iO(e);
}), hO = () => "What this benchmark measures", gO = () => "Ce que mesure ce benchmark", _O = () => "Qué mide este benchmark", vO = () => "Was dieser Benchmark misst", yO = () => "Cosa misura questo benchmark", bO = () => "O que este benchmark mede", xO = () => "此基准测试衡量的内容", SO = () => "このベンチマークが測定するもの", CO = () => "What this benchmark measures", wO = () => "Что измеряет этот бенчмарк", TO = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? gO(e) : n === "es" ? _O(e) : n === "de" ? vO(e) : n === "it" ? yO(e) : n === "pt" ? bO(e) : n === "zh" ? xO(e) : n === "ja" ? SO(e) : n === "ko" ? CO(e) : n === "ru" ? wO(e) : hO(e);
}), EO = () => "The JSON must be parsed on every page load — blocking the main thread.", DO = () => "Le JSON doit être analysé à chaque chargement de page — en bloquant le thread principal.", OO = () => "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.", kO = () => "Das JSON muss bei jedem Seitenladen analysiert werden — was den Haupt-Thread blockiert.", AO = () => "Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale.", jO = () => "O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.", MO = () => "每次页面加载时都必须解析 JSON — 阻塞主线程。", NO = () => "ページを読み込むたびにJSONを解析する必要があり、メインスレッドをブロックします。", PO = () => "The JSON must be parsed on every page load — blocking the main thread.", FO = () => "JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.", IO = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? DO(e) : n === "es" ? OO(e) : n === "de" ? kO(e) : n === "it" ? AO(e) : n === "pt" ? jO(e) : n === "zh" ? MO(e) : n === "ja" ? NO(e) : n === "ko" ? PO(e) : n === "ru" ? FO(e) : EO(e);
}), LO = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", RO = () => "Les architectures fondées sur le contexte peuvent provoquer des re-rendus en cascade quand la langue change, car chaque consommateur est notifié même si ses clés n'ont pas changé.", zO = () => "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.", BO = () => "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich die Sprache ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.", VO = () => "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.", HO = () => "Arquiteturas baseadas em contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.", UO = () => "当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使特定键未更改，每个使用者也会收到通知。", WO = () => "コンテキストベースのアーキテクチャでは、特定のキーが変更されていなくてもすべての消費者に通知されるため、ロケール変更時にカスケードレンダリングが発生する可能性があります。", GO = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", KO = () => "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при смене языка, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.", qO = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? RO(e) : n === "es" ? zO(e) : n === "de" ? BO(e) : n === "it" ? VO(e) : n === "pt" ? HO(e) : n === "zh" ? UO(e) : n === "ja" ? WO(e) : n === "ko" ? GO(e) : n === "ru" ? KO(e) : LO(e);
}), JO = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", YO = () => "Lors du rendu serveur, tout le dictionnaire est sérialisé dans le HTML, alourdissant le document à télécharger et à hydrater.", XO = () => "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.", ZO = () => "Beim serverseitigen Rendering wird das vollständige Verzeichnis in die HTML-Nutzlast serialisiert, was die Dokumentgröße erhöht, die heruntergeladen und hydriert werden muss.", QO = () => "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.", $O = () => "Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.", ek = () => "在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。", tk = () => "サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。", nk = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", rk = () => "При серверном рендеринге весь словарь сериализуется в HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать.", ik = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? YO(e) : n === "es" ? XO(e) : n === "de" ? ZO(e) : n === "it" ? QO(e) : n === "pt" ? $O(e) : n === "zh" ? ek(e) : n === "ja" ? tk(e) : n === "ko" ? nk(e) : n === "ru" ? rk(e) : JO(e);
}), ak = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", ok = () => "Beaucoup de bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsqu'il est volumineux (milliers de clés), chaque composant qui consomme des traductions garde une référence à tout le dictionnaire. Cela signifie :", sk = () => "Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:", ck = () => "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Verzeichnis. Das bedeutet:", lk = () => "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:", uk = () => "Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:", dk = () => "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会保留对整个字典的引用。这意味着：", fk = () => "多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：", pk = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", mk = () => "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:", hk = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ok(e) : n === "es" ? sk(e) : n === "de" ? ck(e) : n === "it" ? lk(e) : n === "pt" ? uk(e) : n === "zh" ? dk(e) : n === "ja" ? fk(e) : n === "ko" ? pk(e) : n === "ru" ? mk(e) : ak(e);
}), gk = () => "Why a single large JSON can hurt performance", _k = () => "Pourquoi un unique gros JSON peut nuire aux performances", vk = () => "Por qué un solo JSON grande puede perjudicar el rendimiento", yk = () => "Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann", bk = () => "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni", xk = () => "Por que um único JSON grande pode prejudicar o desempenho", Sk = () => "为什么单个大型 JSON 会损害性能", Ck = () => "なぜ1つの大きなJSONがパフォーマンスを低下させるのか", wk = () => "Why a single large JSON can hurt performance", Tk = () => "Почему один большой JSON может снизить производительность", Ek = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? _k(e) : n === "es" ? vk(e) : n === "de" ? yk(e) : n === "it" ? bk(e) : n === "pt" ? xk(e) : n === "zh" ? Sk(e) : n === "ja" ? Ck(e) : n === "ko" ? wk(e) : n === "ru" ? Tk(e) : gk(e);
}), Dk = () => "Understanding the Impact", Ok = () => "Comprendre l'impact", kk = () => "Entendiendo el impacto", Ak = () => "Die Auswirkungen verstehen", jk = () => "Capire l'impatto", Mk = () => "Entendendo o impacto", Nk = () => "理解影响", Pk = () => "影響を理解する", Fk = () => "Understanding the Impact", Ik = () => "Понимание влияния", Lk = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ok(e) : n === "es" ? kk(e) : n === "de" ? Ak(e) : n === "it" ? jk(e) : n === "pt" ? Mk(e) : n === "zh" ? Nk(e) : n === "ja" ? Pk(e) : n === "ko" ? Fk(e) : n === "ru" ? Ik(e) : Dk(e);
}), Rk = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", zk = () => "Découper les traductions par route ou espace de noms réduit fortement la charge initiale, mais pose de nouveaux défis :", Bk = () => "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:", Vk = () => "Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Nutzlast drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:", Hk = () => "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:", Uk = () => "Dividir as traduções em pedaços por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:", Wk = () => "将翻译拆分为每个路由或每个命名空间的块可以大幅减少初始负载。但它引入了新的挑战：", Gk = () => "翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新しい課題も生じます：", Kk = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", qk = () => "Разделение переводов на части для каждого маршрута или пространства имен может значительно уменьшить начальный объем данных. Но это создает новые проблемы:", Jk = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? zk(e) : n === "es" ? Bk(e) : n === "de" ? Vk(e) : n === "it" ? Hk(e) : n === "pt" ? Uk(e) : n === "zh" ? Wk(e) : n === "ja" ? Gk(e) : n === "ko" ? Kk(e) : n === "ru" ? qk(e) : Rk(e);
}), Yk = () => "The trade-offs of dynamic loading", Xk = () => "Les compromis du chargement dynamique", Zk = () => "Las compensaciones de la carga dinámica", Qk = () => "Die Kompromisse beim dynamischen Laden", $k = () => "I compromessi del caricamento dinamico", eA = () => "Os trade-offs do carregamento dinâmico", tA = () => "动态加载的权衡", nA = () => "動的読み込みのトレードオフ", rA = () => "The trade-offs of dynamic loading", iA = () => "Компромиссы динамической загрузки", aA = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Xk(e) : n === "es" ? Zk(e) : n === "de" ? Qk(e) : n === "it" ? $k(e) : n === "pt" ? eA(e) : n === "zh" ? tA(e) : n === "ja" ? nA(e) : n === "ko" ? rA(e) : n === "ru" ? iA(e) : Yk(e);
}), oA = () => "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.", sA = () => "l'application doit d'abord charger, déterminer la langue, puis récupérer le bon fragment — avec des allers-retours réseau supplémentaires.", cA = () => "la aplicación debe primero cargarse, determinar el idioma, luego obtener el fragmento correcto, lo que añade viajes de red de ida y vuelta.", lA = () => "Die App muss zuerst laden, die Sprache bestimmen und dann den richtigen Chunk abrufen — was zusätzliche Netzwerk-Roundtrips verursacht.", uA = () => "l'app deve prima caricarsi, determinare la locale, quindi recuperare il chunk corretto — aggiungendo round-trip di rete.", dA = () => "o app deve primeiro carregar, determinar a localidade, então buscar o chunk certo — adicionando network round-trips.", fA = () => "应用必须首先加载，确定语言环境，然后获取正确的块 — 增加了网络往返时间。", pA = () => "アプリは最初に読み込み、ロケールを決定し、次に正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。", mA = () => "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.", hA = () => "приложение должно сначала загрузиться, определить язык, а затем получить нужную часть, что добавляет сетевые задержки.", gA = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? sA(e) : n === "es" ? cA(e) : n === "de" ? lA(e) : n === "it" ? uA(e) : n === "pt" ? dA(e) : n === "zh" ? fA(e) : n === "ja" ? pA(e) : n === "ko" ? mA(e) : n === "ru" ? hA(e) : oA(e);
}), _A = () => "Waterfall requests:", vA = () => "Requêtes en cascade :", yA = () => "Solicitudes en cascada:", bA = () => "Waterfall-Anfragen:", xA = () => "Richieste a cascata:", SA = () => "Requisições em cascata:", Q = () => "瀑布流请求：", CA = () => "ウォーターフォールリクエスト：", wA = () => "Waterfall requests:", TA = () => "Каскадные запросы:", EA = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? vA(e) : n === "es" ? yA(e) : n === "de" ? bA(e) : n === "it" ? xA(e) : n === "pt" ? SA(e) : n === "zh" ? Q(e) : n === "ja" ? CA(e) : n === "ko" ? wA(e) : n === "ru" ? TA(e) : _A(e);
}), DA = () => "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.", OA = () => "Le bundle est l'ensemble des données livrées à chaque utilisateur dans le monde. Un bundle plus lourd implique des temps de téléchargement plus longs — surtout sur des connexions 3G lentes encore très répandues. Les bibliothèques i18n ont des poids très variables : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, sans compter les fichiers de traduction.", kA = () => "El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.", AA = () => "Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst.", jA = () => "Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.", MA = () => "O bundle representa os dados enviados para cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas, comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código runtime, além dos próprios arquivos de tradução.", NA = () => "包是发送给全球每个用户的数据。较大的包意味着较长的下载时间 — 特别是在许多地区常见的慢速 3G 连接下。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。", PA = () => "バンドルは世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。これは多くの地域で一般的な低速な3G接続において特に顕著です。i18nライブラリの重量は、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体に至るまで、劇的に異なります。", FA = () => "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.", IA = () => "Бандл — это данные, отправляемые каждому пользователю по всему миру. Больший бандл означает более длительное время загрузки — особенно при медленном 3G-соединении, распространенном во многих регионах. Вес библиотек i18n сильно варьируется: от нескольких килобайт до десятков килобайт кода среды выполнения, плюс сами файлы переводов.", LA = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? OA(e) : n === "es" ? kA(e) : n === "de" ? AA(e) : n === "it" ? jA(e) : n === "pt" ? MA(e) : n === "zh" ? NA(e) : n === "ja" ? PA(e) : n === "ko" ? FA(e) : n === "ru" ? IA(e) : DA(e);
}), RA = () => "Bundle Size", zA = () => "Taille du bundle", BA = () => "Tamaño del bundle", VA = () => "Bundle-Größe", HA = () => "Dimensione del bundle", UA = () => "Tamanho do bundle", WA = () => "包大小", GA = () => "バンドルサイズ", KA = () => "Bundle Size", qA = () => "Размер бандла", JA = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? zA(e) : n === "es" ? BA(e) : n === "de" ? VA(e) : n === "it" ? HA(e) : n === "pt" ? UA(e) : n === "zh" ? WA(e) : n === "ja" ? GA(e) : n === "ko" ? KA(e) : n === "ru" ? qA(e) : RA(e);
}), YA = () => "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.", XA = () => "Charger toutes les traductions d'un coup surdimensionne la charge initiale. Le chargement paresseux découpe les traductions par route ou espace de noms et n'envoie que le nécessaire. Il introduit pourtant ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité du cache. Il faut mesurer les deux approches.", ZA = () => "Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.", QA = () => "Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Nutzlast. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Flash of Untranslated Content und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich.", $A = () => "Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.", ej = () => "Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento lento introduz seus próprios trade-offs: requisições em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.", tj = () => "预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。", nj = () => "すべての翻訳を事前読み込みすると、初期ペイロードに過負荷がかかります。動的（遅延）読み込みは翻訳をルートや名前空間ごとに分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどのトレードオフがあります。両方の戦略を測定することが不可欠です。", rj = () => "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.", ij = () => "Загрузка всех переводов заранее перегружает начальный объем данных. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы, мерцание непереведенного контента и сложность кэширования. Важно измерять обе стратегии.", aj = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? XA(e) : n === "es" ? ZA(e) : n === "de" ? QA(e) : n === "it" ? $A(e) : n === "pt" ? ej(e) : n === "zh" ? tj(e) : n === "ja" ? nj(e) : n === "ko" ? rj(e) : n === "ru" ? ij(e) : YA(e);
}), oj = () => "Dynamic Loading", sj = () => "Chargement dynamique", cj = () => "Carga dinámica", lj = () => "Dynamisches Laden", uj = () => "Caricamento dinamico", dj = () => "Carregamento dinâmico", fj = () => "动态加载", pj = () => "動的読み込み", mj = () => "Dynamic Loading", hj = () => "Динамическая загрузка", gj = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? sj(e) : n === "es" ? cj(e) : n === "de" ? lj(e) : n === "it" ? uj(e) : n === "pt" ? dj(e) : n === "zh" ? fj(e) : n === "ja" ? pj(e) : n === "ko" ? mj(e) : n === "ru" ? hj(e) : oj(e);
}), _j = () => "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).", vj = () => "Brancher un gros dictionnaire JSON sur chaque composant crée une dépendance cachée : tout changement de contexte de traduction peut déclencher des re-rendus sur tout l'arbre. Lors de l'hydratation SSR, analyser et attacher d'immenses objets de traduction ajoute de la latence avant que la page soit interactive — impact direct sur le Time to Interactive (TTI).", yj = () => "Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).", bj = () => "Die Anbindung eines großen JSON-Verzeichnisses an jede Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydrierung verursacht das Parsen und Anhängen massiver Übersetzungsobjekte Latenzzeit, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.", xj = () => "Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).", Sj = () => "Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar renderizações em toda a árvore. Durante a hidratação SSR, analisar e anexar objetos de tradução massivos adiciona latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).", Cj = () => "将大型 JSON 字典连接到每个组件会创建隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加海量的翻译对象会增加页面变为可交互之前的延迟 — 直接影响可交互时间 (TTI)。", wj = () => "巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体の再レンダリングを引き起こす可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでのレイテンシを増加させ、Time to Interactive (TTI) に直接影響します。", Tj = () => "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).", Ej = () => "Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг по всему дереву. Во время SSR-гидратации парсинг и присоединение массивных объектов перевода добавляет задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI).", Dj = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? vj(e) : n === "es" ? yj(e) : n === "de" ? bj(e) : n === "it" ? xj(e) : n === "pt" ? Sj(e) : n === "zh" ? Cj(e) : n === "ja" ? wj(e) : n === "ko" ? Tj(e) : n === "ru" ? Ej(e) : _j(e);
}), Oj = () => "Rendering & Hydration", kj = () => "Rendu et hydratation", Aj = () => "Renderizado e hidratación", jj = () => "Rendering & Hydrierung", Mj = () => "Rendering e idratazione", Nj = () => "Renderização e hidratação", Pj = () => "渲染与注水", Fj = () => "レンダリングとハイドレーション", Ij = () => "Rendering & Hydration", Lj = () => "Рендеринг и гидратация", Rj = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? kj(e) : n === "es" ? Aj(e) : n === "de" ? jj(e) : n === "it" ? Mj(e) : n === "pt" ? Nj(e) : n === "zh" ? Pj(e) : n === "ja" ? Fj(e) : n === "ko" ? Ij(e) : n === "ru" ? Lj(e) : Oj(e);
}), zj = () => "Why These Metrics Matter", Bj = () => "Pourquoi ces métriques comptent", Vj = () => "Por qué son importantes estas métricas", Hj = () => "Warum diese Metriken wichtig sind", Uj = () => "Perché queste metriche sono importanti", Wj = () => "Por que estas métricas importam", Gj = () => "为什么这些指标很重要", Kj = () => "なぜこれらの指標が重要なのか", qj = () => "Why These Metrics Matter", Jj = () => "Почему эти метрики важны", Yj = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Bj(e) : n === "es" ? Vj(e) : n === "de" ? Hj(e) : n === "it" ? Uj(e) : n === "pt" ? Wj(e) : n === "zh" ? Gj(e) : n === "ja" ? Kj(e) : n === "ko" ? qj(e) : n === "ru" ? Jj(e) : zj(e);
}), Xj = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", Zj = () => "⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.", Qj = () => "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.", $j = () => "⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst.", eM = () => "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.", tM = () => "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real.", nM = () => "⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。", rM = () => "⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。", iM = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", aM = () => "⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом.", oM = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Zj(e) : n === "es" ? Qj(e) : n === "de" ? $j(e) : n === "it" ? eM(e) : n === "pt" ? tM(e) : n === "zh" ? nM(e) : n === "ja" ? rM(e) : n === "ko" ? iM(e) : n === "ru" ? aM(e) : Xj(e);
}), sM = () => "Oops! Page not found", cM = () => "Oups ! Page introuvable", lM = () => "¡Ups! Página no encontrada", uM = () => "Hoppla! Seite nicht gefunden", dM = () => "Ops! Pagina non trovata", fM = () => "Ops! Página não encontrada", pM = () => "哎呀！页面未找到", mM = () => "おっと！ページが見つかりません", hM = () => "Oops! Page not found", gM = () => "Упс! Страница не найдена", _M = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? cM(e) : n === "es" ? lM(e) : n === "de" ? uM(e) : n === "it" ? dM(e) : n === "pt" ? fM(e) : n === "zh" ? pM(e) : n === "ja" ? mM(e) : n === "ko" ? hM(e) : n === "ru" ? gM(e) : sM(e);
}), vM = () => "Return to Home", yM = () => "Retour à l'accueil", bM = () => "Volver al inicio", xM = () => "Zurück zur Startseite", SM = () => "Torna alla Home", CM = () => "Voltar para o início", wM = () => "返回首页", TM = () => "ホームに戻る", EM = () => "Return to Home", DM = () => "Вернуться на главную", OM = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? yM(e) : n === "es" ? bM(e) : n === "de" ? xM(e) : n === "it" ? SM(e) : n === "pt" ? CM(e) : n === "zh" ? wM(e) : n === "ja" ? TM(e) : n === "ko" ? EM(e) : n === "ru" ? DM(e) : vM(e);
}), kM = () => "404", AM = () => "404", jM = () => "404", MM = () => "404", NM = () => "404", PM = () => "404", FM = () => "404", IM = () => "404", LM = () => "404", RM = () => "404", zM = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? AM(e) : n === "es" ? jM(e) : n === "de" ? MM(e) : n === "it" ? NM(e) : n === "pt" ? PM(e) : n === "zh" ? FM(e) : n === "ja" ? IM(e) : n === "ko" ? LM(e) : n === "ru" ? RM(e) : kM(e);
}), BM = () => "Choose the plan that fits your team. No hidden fees.", VM = () => "Choisissez l'offre adaptée à votre équipe. Sans frais cachés.", HM = () => "Elige el plan que mejor se adapte a tu equipo. Sin cuotas ocultas.", UM = () => "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.", WM = () => "Scegli il piano più adatto al tuo team. Nessun costo nascosto.", GM = () => "Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.", KM = () => "选择适合您团队的计划。无隐藏费用。", qM = () => "チームに合ったプランをお選びください。隠れた費用はありません。", JM = () => "Choose the plan that fits your team. No hidden fees.", YM = () => "Выберите подходящий план для вашей команды. Никаких скрытых комиссий.", XM = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? VM(e) : n === "es" ? HM(e) : n === "de" ? UM(e) : n === "it" ? WM(e) : n === "pt" ? GM(e) : n === "zh" ? KM(e) : n === "ja" ? qM(e) : n === "ko" ? JM(e) : n === "ru" ? YM(e) : BM(e);
}), ZM = () => "Simple, Transparent Pricing", QM = () => "Tarification simple et transparente", $M = () => "Precios sencillos y transparentes", eN = () => "Einfache, transparente Preisgestaltung", tN = () => "Prezzi semplici e trasparenti", nN = () => "Preços simples e transparentes", rN = () => "简单透明的定价", iN = () => "シンプルで透明性の高い価格設定", aN = () => "Simple, Transparent Pricing", oN = () => "Простые и прозрачные цены", sN = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? QM(e) : n === "es" ? $M(e) : n === "de" ? eN(e) : n === "it" ? tN(e) : n === "pt" ? nN(e) : n === "zh" ? rN(e) : n === "ja" ? iN(e) : n === "ko" ? aN(e) : n === "ru" ? oN(e) : ZM(e);
}), cN = () => "Contact Sales", lN = () => "Contacter les ventes", uN = () => "Contactar con ventas", dN = () => "Vertrieb kontaktieren", fN = () => "Contatta l'ufficio vendite", pN = () => "Contatar vendas", mN = () => "联系销售", hN = () => "営業に問い合わせる", gN = () => "Contact Sales", _N = () => "Связаться с отделом продаж", vN = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? lN(e) : n === "es" ? uN(e) : n === "de" ? dN(e) : n === "it" ? fN(e) : n === "pt" ? pN(e) : n === "zh" ? mN(e) : n === "ja" ? hN(e) : n === "ko" ? gN(e) : n === "ru" ? _N(e) : cN(e);
}), yN = () => "Everything in Pro", bN = () => "Tout le Pro", xN = () => "Todo lo que hay en Pro", SN = () => "Alles in Pro enthalten", CN = () => "Tutto quello che c'è in Pro", wN = () => "Tudo o que está no Pro", TN = () => "包含专业版中的所有功能", EN = () => "Proプランのすべてを含む", DN = () => "Everything in Pro", ON = () => "Все, что есть в Pro", kN = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? bN(e) : n === "es" ? xN(e) : n === "de" ? SN(e) : n === "it" ? CN(e) : n === "pt" ? wN(e) : n === "zh" ? TN(e) : n === "ja" ? EN(e) : n === "ko" ? DN(e) : n === "ru" ? ON(e) : yN(e);
}), AN = () => "On-premise option", jN = () => "Option on-premise", MN = () => "Opción on-premise", NN = () => "On-Premise-Option", PN = () => "Opzione on-premise", FN = () => "Opção on-premise", IN = () => "本地部署选项", LN = () => "オンプレミスオプション", RN = () => "On-premise option", zN = () => "Локальная установка", BN = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? jN(e) : n === "es" ? MN(e) : n === "de" ? NN(e) : n === "it" ? PN(e) : n === "pt" ? FN(e) : n === "zh" ? IN(e) : n === "ja" ? LN(e) : n === "ko" ? RN(e) : n === "ru" ? zN(e) : AN(e);
}), VN = () => "SSO & SAML", HN = () => "SSO et SAML", UN = () => "SSO y SAML", WN = () => "SSO & SAML", GN = () => "SSO e SAML", KN = () => "SSO e SAML", qN = () => "SSO 和 SAML", JN = () => "SSO & SAML", YN = () => "SSO & SAML", XN = () => "SSO и SAML", ZN = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? HN(e) : n === "es" ? UN(e) : n === "de" ? WN(e) : n === "it" ? GN(e) : n === "pt" ? KN(e) : n === "zh" ? qN(e) : n === "ja" ? JN(e) : n === "ko" ? YN(e) : n === "ru" ? XN(e) : VN(e);
}), QN = () => "Dedicated account manager", $N = () => "Account manager dédié", eP = () => "Gestor de cuentas dedicado", tP = () => "Dedizierter Account Manager", nP = () => "Account manager dedicato", rP = () => "Gerente de conta dedicado", iP = () => "专属客户经理", aP = () => "専任のアカウントマネージャー", oP = () => "Dedicated account manager", sP = () => "Персональный менеджер", cP = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? $N(e) : n === "es" ? eP(e) : n === "de" ? tP(e) : n === "it" ? nP(e) : n === "pt" ? rP(e) : n === "zh" ? iP(e) : n === "ja" ? aP(e) : n === "ko" ? oP(e) : n === "ru" ? sP(e) : QN(e);
}), lP = () => "Custom SLAs", uP = () => "SLA sur mesure", dP = () => "SLAs personalizados", fP = () => "Individuelle SLAs", pP = () => "SLA personalizzati", mP = () => "SLAs personalizados", hP = () => "定制 SLA", gP = () => "カスタムSLA", _P = () => "Custom SLAs", vP = () => "Индивидуальные SLA", yP = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? uP(e) : n === "es" ? dP(e) : n === "de" ? fP(e) : n === "it" ? pP(e) : n === "pt" ? mP(e) : n === "zh" ? hP(e) : n === "ja" ? gP(e) : n === "ko" ? _P(e) : n === "ru" ? vP(e) : lP(e);
}), bP = () => "Audit logs", xP = () => "Journaux d'audit", SP = () => "Registros de auditoría", CP = () => "Audit-Protokolle", wP = () => "Log di controllo", TP = () => "Logs de auditoria", EP = () => "审计日志", DP = () => "監査ログ", OP = () => "Audit logs", kP = () => "Журналы аудита", AP = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? xP(e) : n === "es" ? SP(e) : n === "de" ? CP(e) : n === "it" ? wP(e) : n === "pt" ? TP(e) : n === "zh" ? EP(e) : n === "ja" ? DP(e) : n === "ko" ? OP(e) : n === "ru" ? kP(e) : bP(e);
}), jP = () => "Training sessions", MP = () => "Sessions de formation", NP = () => "Sesiones de formación", PP = () => "Schulungssitzungen", FP = () => "Sessioni di formazione", IP = () => "Sessões de treinamento", LP = () => "培训课程", RP = () => "トレーニングセッション", zP = () => "Training sessions", BP = () => "Обучающие сессии", VP = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? MP(e) : n === "es" ? NP(e) : n === "de" ? PP(e) : n === "it" ? FP(e) : n === "pt" ? IP(e) : n === "zh" ? LP(e) : n === "ja" ? RP(e) : n === "ko" ? zP(e) : n === "ru" ? BP(e) : jP(e);
}), HP = () => "Enterprise", UP = () => "Enterprise", WP = () => "Enterprise", GP = () => "Enterprise", KP = () => "Enterprise", qP = () => "Enterprise", JP = () => "企业版", YP = () => "エンタープライズ", XP = () => "Enterprise", ZP = () => "Enterprise", QP = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? UP(e) : n === "es" ? WP(e) : n === "de" ? GP(e) : n === "it" ? KP(e) : n === "pt" ? qP(e) : n === "zh" ? JP(e) : n === "ja" ? YP(e) : n === "ko" ? XP(e) : n === "ru" ? ZP(e) : HP(e);
}), $P = () => "Custom", eF = () => "Sur mesure", tF = () => "Personalizado", nF = () => "Individuell", rF = () => "Personalizzato", iF = () => "Personalizado", aF = () => "定制", oF = () => "カスタム", sF = () => "Custom", cF = () => "Индивидуально", lF = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? eF(e) : n === "es" ? tF(e) : n === "de" ? nF(e) : n === "it" ? rF(e) : n === "pt" ? iF(e) : n === "zh" ? aF(e) : n === "ja" ? oF(e) : n === "ko" ? sF(e) : n === "ru" ? cF(e) : $P(e);
}), uF = () => "Get Started", dF = () => "Commencer", fF = () => "Empezar", pF = () => "Erste Schritte", mF = () => "Inizia ora", hF = () => "Começar", gF = () => "开始使用", _F = () => "始める", vF = () => "Get Started", yF = () => "Начать работу", bF = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? dF(e) : n === "es" ? fF(e) : n === "de" ? pF(e) : n === "it" ? mF(e) : n === "pt" ? hF(e) : n === "zh" ? gF(e) : n === "ja" ? _F(e) : n === "ko" ? vF(e) : n === "ru" ? yF(e) : uF(e);
}), xF = () => "Unlimited runs", SF = () => "Exécutions illimitées", CF = () => "Ejecuciones ilimitadas", wF = () => "Unbegrenzte Durchläufe", TF = () => "Esecuzioni illimitate", EF = () => "Execuções ilimitadas", DF = () => "无限次运行", OF = () => "無制限の実行", kF = () => "Unlimited runs", AF = () => "Неограниченное число запусков", jF = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? SF(e) : n === "es" ? CF(e) : n === "de" ? wF(e) : n === "it" ? TF(e) : n === "pt" ? EF(e) : n === "zh" ? DF(e) : n === "ja" ? OF(e) : n === "ko" ? kF(e) : n === "ru" ? AF(e) : xF(e);
}), MF = () => "All libraries", NF = () => "Toutes les bibliothèques", PF = () => "Todas las bibliotecas", FF = () => "Alle Bibliotheken", IF = () => "Tutte le librerie", LF = () => "Todas as bibliotecas", RF = () => "所有库", zF = () => "すべてのライブラリ", BF = () => "All libraries", VF = () => "Все библиотеки", HF = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? NF(e) : n === "es" ? PF(e) : n === "de" ? FF(e) : n === "it" ? IF(e) : n === "pt" ? LF(e) : n === "zh" ? RF(e) : n === "ja" ? zF(e) : n === "ko" ? BF(e) : n === "ru" ? VF(e) : MF(e);
}), UF = () => "Priority support", WF = () => "Support prioritaire", GF = () => "Soporte prioritario", KF = () => "Priorisierter Support", qF = () => "Supporto prioritario", JF = () => "Suporte prioritário", YF = () => "优先支持", XF = () => "優先サポート", ZF = () => "Priority support", QF = () => "Приоритетная поддержка", $F = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? WF(e) : n === "es" ? GF(e) : n === "de" ? KF(e) : n === "it" ? qF(e) : n === "pt" ? JF(e) : n === "zh" ? YF(e) : n === "ja" ? XF(e) : n === "ko" ? ZF(e) : n === "ru" ? QF(e) : UF(e);
}), eI = () => "Private results", tI = () => "Résultats privés", nI = () => "Resultados privados", rI = () => "Private Ergebnisse", iI = () => "Risultati privati", aI = () => "Resultados privados", oI = () => "私有结果", sI = () => "非公開の結果", cI = () => "Private results", lI = () => "Приватные результаты", uI = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? tI(e) : n === "es" ? nI(e) : n === "de" ? rI(e) : n === "it" ? iI(e) : n === "pt" ? aI(e) : n === "zh" ? oI(e) : n === "ja" ? sI(e) : n === "ko" ? cI(e) : n === "ru" ? lI(e) : eI(e);
}), dI = () => "CI integration", fI = () => "Intégration CI", pI = () => "Integración CI", mI = () => "CI-Integration", hI = () => "Integrazione CI", gI = () => "Integração CI", _I = () => "CI 集成", vI = () => "CI統合", yI = () => "CI integration", bI = () => "Интеграция с CI", xI = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? fI(e) : n === "es" ? pI(e) : n === "de" ? mI(e) : n === "it" ? hI(e) : n === "pt" ? gI(e) : n === "zh" ? _I(e) : n === "ja" ? vI(e) : n === "ko" ? yI(e) : n === "ru" ? bI(e) : dI(e);
}), SI = () => "Historical data", CI = () => "Historique", wI = () => "Datos históricos", TI = () => "Historische Daten", EI = () => "Dati storici", DI = () => "Dados históricos", OI = () => "历史数据", kI = () => "履歴データ", AI = () => "Historical data", jI = () => "Исторические данные", MI = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? CI(e) : n === "es" ? wI(e) : n === "de" ? TI(e) : n === "it" ? EI(e) : n === "pt" ? DI(e) : n === "zh" ? OI(e) : n === "ja" ? kI(e) : n === "ko" ? AI(e) : n === "ru" ? jI(e) : SI(e);
}), NI = () => "Pro", PI = () => "Pro", FI = () => "Pro", II = () => "Pro", LI = () => "Pro", RI = () => "Pro", zI = () => "专业版", BI = () => "プロ", VI = () => "Pro", HI = () => "Pro", UI = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? PI(e) : n === "es" ? FI(e) : n === "de" ? II(e) : n === "it" ? LI(e) : n === "pt" ? RI(e) : n === "zh" ? zI(e) : n === "ja" ? BI(e) : n === "ko" ? VI(e) : n === "ru" ? HI(e) : NI(e);
}), WI = () => "/month", GI = () => "/ mois", KI = () => "/mes", qI = () => "/Monat", JI = () => "/mese", YI = () => "/mês", XI = () => "/月", ZI = () => "/月", QI = () => "/month", $I = () => "/мес", eL = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? GI(e) : n === "es" ? KI(e) : n === "de" ? qI(e) : n === "it" ? JI(e) : n === "pt" ? YI(e) : n === "zh" ? XI(e) : n === "ja" ? ZI(e) : n === "ko" ? QI(e) : n === "ru" ? $I(e) : WI(e);
}), tL = () => "$29", nL = () => "29 €", rL = () => "29 $", iL = () => "29 $", aL = () => "29 $", oL = () => "29 $", sL = () => "29 $", cL = () => "29ドル", lL = () => "$29", uL = () => "29 $", dL = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? nL(e) : n === "es" ? rL(e) : n === "de" ? iL(e) : n === "it" ? aL(e) : n === "pt" ? oL(e) : n === "zh" ? sL(e) : n === "ja" ? cL(e) : n === "ko" ? lL(e) : n === "ru" ? uL(e) : tL(e);
}), fL = () => "5 benchmark runs/day", pL = () => "5 exécutions de benchmark / jour", mL = () => "5 ejecuciones de benchmark al día", hL = () => "5 Benchmark-Durchläufe/Tag", gL = () => "5 esecuzioni benchmark al giorno", _L = () => "5 execuções de benchmark/dia", vL = () => "每天 5 次基准测试运行", yL = () => "1日あたり5回のベンチマーク実行", bL = () => "5 benchmark runs/day", xL = () => "5 запусков бенчмарка в день", SL = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? pL(e) : n === "es" ? mL(e) : n === "de" ? hL(e) : n === "it" ? gL(e) : n === "pt" ? _L(e) : n === "zh" ? vL(e) : n === "ja" ? yL(e) : n === "ko" ? bL(e) : n === "ru" ? xL(e) : fL(e);
}), CL = () => "3 libraries", wL = () => "3 bibliothèques", TL = () => "3 bibliotecas", EL = () => "3 Bibliotheken", DL = () => "3 librerie", OL = () => "3 bibliotecas", kL = () => "3 个库", AL = () => "3ライブラリ", jL = () => "3 libraries", ML = () => "3 библиотеки", NL = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? wL(e) : n === "es" ? TL(e) : n === "de" ? EL(e) : n === "it" ? DL(e) : n === "pt" ? OL(e) : n === "zh" ? kL(e) : n === "ja" ? AL(e) : n === "ko" ? jL(e) : n === "ru" ? ML(e) : CL(e);
}), PL = () => "Community support", FL = () => "Support communautaire", IL = () => "Soporte de la comunidad", LL = () => "Community-Support", RL = () => "Supporto della comunità", zL = () => "Suporte da comunidade", BL = () => "社区支持", VL = () => "コミュニティサポート", HL = () => "Community support", UL = () => "Поддержка сообщества", WL = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? FL(e) : n === "es" ? IL(e) : n === "de" ? LL(e) : n === "it" ? RL(e) : n === "pt" ? zL(e) : n === "zh" ? BL(e) : n === "ja" ? VL(e) : n === "ko" ? HL(e) : n === "ru" ? UL(e) : PL(e);
}), GL = () => "Public results", KL = () => "Résultats publics", qL = () => "Resultados públicos", JL = () => "Öffentliche Ergebnisse", YL = () => "Risultati pubblici", XL = () => "Resultados públicos", ZL = () => "公开结果", QL = () => "公開結果", $L = () => "Public results", eR = () => "Публичные результаты", tR = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? KL(e) : n === "es" ? qL(e) : n === "de" ? JL(e) : n === "it" ? YL(e) : n === "pt" ? XL(e) : n === "zh" ? ZL(e) : n === "ja" ? QL(e) : n === "ko" ? $L(e) : n === "ru" ? eR(e) : GL(e);
}), nR = () => "Starter", rR = () => "Starter", iR = () => "Starter", aR = () => "Starter", oR = () => "Starter", sR = () => "Starter", cR = () => "入门版", lR = () => "スターター", uR = () => "Starter", dR = () => "Starter", fR = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? rR(e) : n === "es" ? iR(e) : n === "de" ? aR(e) : n === "it" ? oR(e) : n === "pt" ? sR(e) : n === "zh" ? cR(e) : n === "ja" ? lR(e) : n === "ko" ? uR(e) : n === "ru" ? dR(e) : nR(e);
}), pR = () => "forever", mR = () => "pour toujours", hR = () => "para siempre", gR = () => "für immer", _R = () => "per sempre", vR = () => "para sempre", yR = () => "永久", bR = () => "ずっと無料", xR = () => "forever", SR = () => "навсегда", CR = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? mR(e) : n === "es" ? hR(e) : n === "de" ? gR(e) : n === "it" ? _R(e) : n === "pt" ? vR(e) : n === "zh" ? yR(e) : n === "ja" ? bR(e) : n === "ko" ? xR(e) : n === "ru" ? SR(e) : pR(e);
}), wR = () => "$0", TR = () => "0 €", ER = () => "0 $", DR = () => "0 $", OR = () => "0 $", kR = () => "0 $", AR = () => "0 $", jR = () => "0円", MR = () => "$0", NR = () => "0 $", PR = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? TR(e) : n === "es" ? ER(e) : n === "de" ? DR(e) : n === "it" ? OR(e) : n === "pt" ? kR(e) : n === "zh" ? AR(e) : n === "ja" ? jR(e) : n === "ko" ? MR(e) : n === "ru" ? NR(e) : wR(e);
}), FR = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", IR = () => "Lancez des benchmarks en local. Configurations personnalisées et CI.", LR = () => "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.", RR = () => "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.", zR = () => "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.", BR = () => "Execute benchmarks localmente pelo terminal. Suporta configurações personalizadas e integração CI.", VR = () => "从您的终端本地运行基准测试。支持自定义配置和 CI 集成。", HR = () => "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。", UR = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", WR = () => "Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.", GR = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? IR(e) : n === "es" ? LR(e) : n === "de" ? RR(e) : n === "it" ? zR(e) : n === "pt" ? BR(e) : n === "zh" ? VR(e) : n === "ja" ? HR(e) : n === "ko" ? UR(e) : n === "ru" ? WR(e) : FR(e);
}), KR = () => "Benchmark CLI", qR = () => "Benchmark CLI", JR = () => "CLI de Benchmark", YR = () => "Benchmark CLI", XR = () => "CLI del Benchmark", ZR = () => "Benchmark CLI", QR = () => "基准测试 CLI", $R = () => "Benchmark CLI", ez = () => "Benchmark CLI", tz = () => "Benchmark CLI", nz = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? qR(e) : n === "es" ? JR(e) : n === "de" ? YR(e) : n === "it" ? XR(e) : n === "pt" ? ZR(e) : n === "zh" ? QR(e) : n === "ja" ? $R(e) : n === "ko" ? ez(e) : n === "ru" ? tz(e) : KR(e);
}), rz = () => "Free", iz = () => "Gratuit", az = () => "Gratis", oz = () => "Kostenlos", sz = () => "Gratis", cz = () => "Grátis", lz = () => "免费", uz = () => "無料", dz = () => "Free", fz = () => "Бесплатно", pz = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? iz(e) : n === "es" ? az(e) : n === "de" ? oz(e) : n === "it" ? sz(e) : n === "pt" ? cz(e) : n === "zh" ? lz(e) : n === "ja" ? uz(e) : n === "ko" ? dz(e) : n === "ru" ? fz(e) : rz(e);
}), mz = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", hz = () => "Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.", gz = () => "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.", _z = () => "Automatisiertes cloudbasiertes Benchmarking mit historischem Tracking, Warnungen und Team-Dashboards.", vz = () => "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.", yz = () => "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.", bz = () => "具有历史追踪、警报和团队仪表板的自动化云基准测试。", xz = () => "履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。", Sz = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", Cz = () => "Автоматизированный облачный бенчмаркинг с отслеживанием истории, уведомлениями и командными дашбордами.", wz = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? hz(e) : n === "es" ? gz(e) : n === "de" ? _z(e) : n === "it" ? vz(e) : n === "pt" ? yz(e) : n === "zh" ? bz(e) : n === "ja" ? xz(e) : n === "ko" ? Sz(e) : n === "ru" ? Cz(e) : mz(e);
}), Tz = () => "Benchmark Cloud", Ez = () => "Benchmark Cloud", Dz = () => "Benchmark Cloud", Oz = () => "Benchmark Cloud", kz = () => "Benchmark Cloud", Az = () => "Benchmark Cloud", jz = () => "基准测试云", Mz = () => "Benchmark Cloud", Nz = () => "Benchmark Cloud", Pz = () => "Benchmark Cloud", Fz = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ez(e) : n === "es" ? Dz(e) : n === "de" ? Oz(e) : n === "it" ? kz(e) : n === "pt" ? Az(e) : n === "zh" ? jz(e) : n === "ja" ? Mz(e) : n === "ko" ? Nz(e) : n === "ru" ? Pz(e) : Tz(e);
}), Iz = () => "$29/mo", Lz = () => "29 €/mois", Rz = () => "29 $/mes", zz = () => "29 $/Monat", Bz = () => "29 $/mese", Vz = () => "29 $/mês", Hz = () => "29 $/月", Uz = () => "29ドル/月", Wz = () => "$29/mo", Gz = () => "29 $/мес", Kz = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Lz(e) : n === "es" ? Rz(e) : n === "de" ? zz(e) : n === "it" ? Bz(e) : n === "pt" ? Vz(e) : n === "zh" ? Hz(e) : n === "ja" ? Uz(e) : n === "ko" ? Wz(e) : n === "ru" ? Gz(e) : Iz(e);
}), qz = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", Jz = () => "On-premise avec SSO, journaux d'audit, SLA et support dédié.", Yz = () => "Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.", Xz = () => "On-Premise-Bereitstellung mit SSO, Audit-Protokollen, individuellen SLAs und dediziertem Support.", Zz = () => "Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.", Qz = () => "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.", $z = () => "支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。", eB = () => "SSO、監査ログ、カスタムSLA、および専任サポートを備えたオンプレミス展開。", tB = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", nB = () => "Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.", rB = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Jz(e) : n === "es" ? Yz(e) : n === "de" ? Xz(e) : n === "it" ? Zz(e) : n === "pt" ? Qz(e) : n === "zh" ? $z(e) : n === "ja" ? eB(e) : n === "ko" ? tB(e) : n === "ru" ? nB(e) : qz(e);
}), iB = () => "Benchmark Enterprise", aB = () => "Benchmark Enterprise", oB = () => "Benchmark Enterprise", sB = () => "Benchmark Enterprise", cB = () => "Benchmark Enterprise", lB = () => "Benchmark Enterprise", uB = () => "基准测试企业版", dB = () => "Benchmark Enterprise", fB = () => "Benchmark Enterprise", pB = () => "Benchmark Enterprise", mB = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? aB(e) : n === "es" ? oB(e) : n === "de" ? sB(e) : n === "it" ? cB(e) : n === "pt" ? lB(e) : n === "zh" ? uB(e) : n === "ja" ? dB(e) : n === "ko" ? fB(e) : n === "ru" ? pB(e) : iB(e);
}), hB = () => "Contact Us", gB = () => "Nous contacter", _B = () => "Contáctanos", vB = () => "Kontaktieren Sie uns", yB = () => "Contattaci", bB = () => "Contate-nos", xB = () => "联系我们", SB = () => "お問い合わせ", CB = () => "Contact Us", wB = () => "Связаться с нами", TB = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? gB(e) : n === "es" ? _B(e) : n === "de" ? vB(e) : n === "it" ? yB(e) : n === "pt" ? bB(e) : n === "zh" ? xB(e) : n === "ja" ? SB(e) : n === "ko" ? CB(e) : n === "ru" ? wB(e) : hB(e);
}), EB = () => "Learn More", DB = () => "En savoir plus", OB = () => "Más información", kB = () => "Mehr erfahren", AB = () => "Scopri di più", jB = () => "Saiba Mais", MB = () => "了解更多", NB = () => "詳細はこちら", PB = () => "Learn More", FB = () => "Узнать больше", IB = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? DB(e) : n === "es" ? OB(e) : n === "de" ? kB(e) : n === "it" ? AB(e) : n === "pt" ? jB(e) : n === "zh" ? MB(e) : n === "ja" ? NB(e) : n === "ko" ? PB(e) : n === "ru" ? FB(e) : EB(e);
}), LB = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", RB = () => "Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.", zB = () => "Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.", BB = () => "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.", VB = () => "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.", HB = () => "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.", UB = () => "AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，零停机时间。", WB = () => "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのを支援するAI駆動ツール。", GB = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", KB = () => "Инструмент на базе ИИ, помогающий переносить кодовую базу между библиотеками i18n без простоев.", qB = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? RB(e) : n === "es" ? zB(e) : n === "de" ? BB(e) : n === "it" ? VB(e) : n === "pt" ? HB(e) : n === "zh" ? UB(e) : n === "ja" ? WB(e) : n === "ko" ? GB(e) : n === "ru" ? KB(e) : LB(e);
}), JB = () => "Migration Assistant", YB = () => "Assistant de migration", XB = () => "Asistente de migración", ZB = () => "Migrationsassistent", QB = () => "Assistente alla migrazione", $B = () => "Assistente de migração", eV = () => "迁移助手", tV = () => "移行アシスタント", nV = () => "Migration Assistant", rV = () => "Помощник по миграции", iV = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? YB(e) : n === "es" ? XB(e) : n === "de" ? ZB(e) : n === "it" ? QB(e) : n === "pt" ? $B(e) : n === "zh" ? eV(e) : n === "ja" ? tV(e) : n === "ko" ? nV(e) : n === "ru" ? rV(e) : JB(e);
}), aV = () => "$99 one-time", oV = () => "99 € (unique)", sV = () => "99 $ pago único", cV = () => "Einmalig 99 $", lV = () => "99 $ una tantum", uV = () => "99 $ taxa única", dV = () => "99 $ 一次性费用", fV = () => "99ドル（一回限り）", pV = () => "$99 one-time", mV = () => "99 $ (разово)", hV = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? oV(e) : n === "es" ? sV(e) : n === "de" ? cV(e) : n === "it" ? lV(e) : n === "pt" ? uV(e) : n === "zh" ? dV(e) : n === "ja" ? fV(e) : n === "ko" ? pV(e) : n === "ru" ? mV(e) : aV(e);
}), gV = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", _V = () => "Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).", vV = () => "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.", yV = () => "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.", bV = () => "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.", xV = () => "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.", SV = () => "通过 tree-shaking 和代码拆分分析并优化您的生产 i18n 包。", CV = () => "ツリーシェイキングとコード分割を使用して、本番用にi18nバンドルを分析および最適化します。", wV = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", TV = () => "Анализирует и оптимизирует ваш бандл i18n для продакшена с помощью tree-shaking и разделения кода.", EV = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? _V(e) : n === "es" ? vV(e) : n === "de" ? yV(e) : n === "it" ? bV(e) : n === "pt" ? xV(e) : n === "zh" ? SV(e) : n === "ja" ? CV(e) : n === "ko" ? wV(e) : n === "ru" ? TV(e) : gV(e);
}), DV = () => "Bundle Optimizer", OV = () => "Optimiseur de bundle", kV = () => "Optimizador de bundle", AV = () => "Bundle-Optimierer", jV = () => "Ottimizzatore del bundle", MV = () => "Otimizador de bundle", NV = () => "包优化器", PV = () => "バンドルオプティマイザー", FV = () => "Bundle Optimizer", IV = () => "Оптимизатор бандла", LV = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? OV(e) : n === "es" ? kV(e) : n === "de" ? AV(e) : n === "it" ? jV(e) : n === "pt" ? MV(e) : n === "zh" ? NV(e) : n === "ja" ? PV(e) : n === "ko" ? FV(e) : n === "ru" ? IV(e) : DV(e);
}), RV = () => "$49/mo", zV = () => "49 €/mois", BV = () => "49 $/mes", VV = () => "49 $/Monat", HV = () => "49 $/mese", UV = () => "49 $/mês", WV = () => "49 $/月", GV = () => "49ドル/月", KV = () => "$49/mo", qV = () => "49 $/мес", JV = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? zV(e) : n === "es" ? BV(e) : n === "de" ? VV(e) : n === "it" ? HV(e) : n === "pt" ? UV(e) : n === "zh" ? WV(e) : n === "ja" ? GV(e) : n === "ko" ? KV(e) : n === "ru" ? qV(e) : RV(e);
}), YV = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", XV = () => "Contrôles automatiques : clés manquantes, pluriels, contexte.", ZV = () => "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.", QV = () => "Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.", $V = () => "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.", eH = () => "Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.", tH = () => "自动检查翻译缺失、复数问题和上下文错误。", nH = () => "翻訳の欠落、複数形化の問題、コンテキストエラーの自動品質チェック。", rH = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", iH = () => "Автоматическая проверка качества на наличие пропущенных переводов, проблем с плюрализацией и контекстных ошибок.", aH = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? XV(e) : n === "es" ? ZV(e) : n === "de" ? QV(e) : n === "it" ? $V(e) : n === "pt" ? eH(e) : n === "zh" ? tH(e) : n === "ja" ? nH(e) : n === "ko" ? rH(e) : n === "ru" ? iH(e) : YV(e);
}), oH = () => "Translation QA", sH = () => "QA des traductions", cH = () => "QA de traducción", lH = () => "Übersetzungs-QA", uH = () => "QA delle traduzioni", dH = () => "QA de tradução", fH = () => "翻译 QA", pH = () => "翻訳QA", mH = () => "Translation QA", hH = () => "QA переводов", gH = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? sH(e) : n === "es" ? cH(e) : n === "de" ? lH(e) : n === "it" ? uH(e) : n === "pt" ? dH(e) : n === "zh" ? fH(e) : n === "ja" ? pH(e) : n === "ko" ? mH(e) : n === "ru" ? hH(e) : oH(e);
}), _H = () => "$19/mo", vH = () => "19 €/mois", yH = () => "19 $/mes", bH = () => "19 $/Monat", xH = () => "19 $/mese", SH = () => "19 $/mês", CH = () => "19 $/月", wH = () => "19ドル/月", TH = () => "$19/mo", EH = () => "19 $/мес", DH = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? vH(e) : n === "es" ? yH(e) : n === "de" ? bH(e) : n === "it" ? xH(e) : n === "pt" ? SH(e) : n === "zh" ? CH(e) : n === "ja" ? wH(e) : n === "ko" ? TH(e) : n === "ru" ? EH(e) : _H(e);
}), OH = () => "Tools and services to streamline your internationalization workflow.", kH = () => "Outils et services pour fluidifier votre flux i18n.", AH = () => "Herramientas y servicios para agilizar su flujo de trabajo de internacionalización.", jH = () => "Tools und Dienstleistungen zur Optimierung Ihres Internationalisierungs-Workflows.", MH = () => "Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione.", NH = () => "Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização.", PH = () => "用于简化国际化工作流程的工具和服务。", FH = () => "国際化ワークフローを効率化するためのツールとサービス。", IH = () => "Tools and services to streamline your internationalization workflow.", LH = () => "Инструменты и сервисы для оптимизации вашего рабочего процесса с интернационализацией.", RH = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? kH(e) : n === "es" ? AH(e) : n === "de" ? jH(e) : n === "it" ? MH(e) : n === "pt" ? NH(e) : n === "zh" ? PH(e) : n === "ja" ? FH(e) : n === "ko" ? IH(e) : n === "ru" ? LH(e) : OH(e);
}), zH = () => "Products", BH = () => "Produits", VH = () => "Productos", HH = () => "Produkte", UH = () => "Prodotti", WH = () => "Produtos", GH = () => "产品", KH = () => "製品", qH = () => "Products", JH = () => "Продукты", YH = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? BH(e) : n === "es" ? VH(e) : n === "de" ? HH(e) : n === "it" ? UH(e) : n === "pt" ? WH(e) : n === "zh" ? GH(e) : n === "ja" ? KH(e) : n === "ko" ? qH(e) : n === "ru" ? JH(e) : zH(e);
}), XH = () => "API Key", ZH = () => "Clé API", QH = () => "Llave API", $H = () => "API-Schlüssel", eU = () => "Chiave API", tU = () => "Chave API", nU = () => "API 密钥", rU = () => "APIキー", iU = () => "API Key", aU = () => "Ключ API", oU = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ZH(e) : n === "es" ? QH(e) : n === "de" ? $H(e) : n === "it" ? eU(e) : n === "pt" ? tU(e) : n === "zh" ? nU(e) : n === "ja" ? rU(e) : n === "ko" ? iU(e) : n === "ru" ? aU(e) : XH(e);
}), sU = () => "Copy", cU = () => "Copier", lU = () => "Copiar", uU = () => "Kopieren", dU = () => "Copia", fU = () => "Copiar", pU = () => "复制", mU = () => "コピー", hU = () => "Copy", gU = () => "Копировать", _U = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? cU(e) : n === "es" ? lU(e) : n === "de" ? uU(e) : n === "it" ? dU(e) : n === "pt" ? fU(e) : n === "zh" ? pU(e) : n === "ja" ? mU(e) : n === "ko" ? hU(e) : n === "ru" ? gU(e) : sU(e);
}), vU = () => "Use this key to access the benchmarking API programmatically.", yU = () => "Utilisez cette clé pour appeler l'API de benchmark par programmation.", bU = () => "Usa esta llave para acceder a la API de benchmarking de forma programática.", xU = () => "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.", SU = () => "Usa questa chiave per accedere programmaticamente alle API di benchmarking.", CU = () => "Use esta chave para acessar a API de benchmarking programaticamente.", wU = () => "使用此密钥以编程方式访问基准测试 API。", TU = () => "このキーを使用して、プログラムでベンチマークAPIにアクセスします。", EU = () => "Use this key to access the benchmarking API programmatically.", DU = () => "Используйте этот ключ для программного доступа к API бенчмаркинга.", OU = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? yU(e) : n === "es" ? bU(e) : n === "de" ? xU(e) : n === "it" ? SU(e) : n === "pt" ? CU(e) : n === "zh" ? wU(e) : n === "ja" ? TU(e) : n === "ko" ? EU(e) : n === "ru" ? DU(e) : vU(e);
}), kU = () => "API Access", AU = () => "Accès API", jU = () => "Acceso API", MU = () => "API-Zugriff", NU = () => "Accesso API", PU = () => "Acesso API", FU = () => "API 访问", IU = () => "APIアクセス", LU = () => "API Access", RU = () => "Доступ к API", zU = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? AU(e) : n === "es" ? jU(e) : n === "de" ? MU(e) : n === "it" ? NU(e) : n === "pt" ? PU(e) : n === "zh" ? FU(e) : n === "ja" ? IU(e) : n === "ko" ? LU(e) : n === "ru" ? RU(e) : kU(e);
}), BU = () => "Cancel", VU = () => "Annuler", HU = () => "Cancelar", UU = () => "Abbrechen", WU = () => "Annulla", GU = () => "Cancelar", KU = () => "取消", qU = () => "キャンセル", JU = () => "Cancel", YU = () => "Отмена", XU = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? VU(e) : n === "es" ? HU(e) : n === "de" ? UU(e) : n === "it" ? WU(e) : n === "pt" ? GU(e) : n === "zh" ? KU(e) : n === "ja" ? qU(e) : n === "ko" ? JU(e) : n === "ru" ? YU(e) : BU(e);
}), ZU = () => "Save Changes", QU = () => "Enregistrer", $U = () => "Guardar cambios", eW = () => "Änderungen speichern", tW = () => "Salva modifiche", nW = () => "Salvar alterações", rW = () => "保存更改", iW = () => "変更を保存", aW = () => "Save Changes", oW = () => "Сохранить изменения", sW = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? QU(e) : n === "es" ? $U(e) : n === "de" ? eW(e) : n === "it" ? tW(e) : n === "pt" ? nW(e) : n === "zh" ? rW(e) : n === "ja" ? iW(e) : n === "ko" ? aW(e) : n === "ru" ? oW(e) : ZU(e);
}), cW = () => "Manage your account preferences and configuration.", lW = () => "Gérez les préférences et la configuration de votre compte.", uW = () => "Gestiona las preferencias y la configuración de tu cuenta.", dW = () => "Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.", fW = () => "Gestisci le preferenze del tuo account e la configurazione.", pW = () => "Gerencie suas preferências de conta e configuração.", mW = () => "管理您的账户偏好和配置。", hW = () => "アカウント設定と構成を管理します。", gW = () => "Manage your account preferences and configuration.", _W = () => "Управляйте предпочтениями и конфигурацией вашей учетной записи.", vW = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? lW(e) : n === "es" ? uW(e) : n === "de" ? dW(e) : n === "it" ? fW(e) : n === "pt" ? pW(e) : n === "zh" ? mW(e) : n === "ja" ? hW(e) : n === "ko" ? gW(e) : n === "ru" ? _W(e) : cW(e);
}), yW = () => "Settings", bW = () => "Paramètres", xW = () => "Ajustes", SW = () => "Einstellungen", CW = () => "Impostazioni", wW = () => "Configurações", TW = () => "设置", EW = () => "設定", DW = () => "Settings", OW = () => "Настройки", kW = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? bW(e) : n === "es" ? xW(e) : n === "de" ? SW(e) : n === "it" ? CW(e) : n === "pt" ? wW(e) : n === "zh" ? TW(e) : n === "ja" ? EW(e) : n === "ko" ? DW(e) : n === "ru" ? OW(e) : yW(e);
}), AW = () => "Arabic (ar)", jW = () => "Arabe (ar)", MW = () => "Árabe (ar)", NW = () => "Arabisch (ar)", PW = () => "Arabo (ar)", FW = () => "Árabe (ar)", IW = () => "阿拉伯语 (ar)", LW = () => "アラビア語 (ar)", RW = () => "Arabic (ar)", zW = () => "Арабский (ar)", BW = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? jW(e) : n === "es" ? MW(e) : n === "de" ? NW(e) : n === "it" ? PW(e) : n === "pt" ? FW(e) : n === "zh" ? IW(e) : n === "ja" ? LW(e) : n === "ko" ? RW(e) : n === "ru" ? zW(e) : AW(e);
}), VW = () => "Chinese Simplified (zh-CN)", HW = () => "Chinois simplifié (zh-CN)", UW = () => "Chino simplificado (zh-CN)", WW = () => "Chinesisch vereinfacht (zh-CN)", GW = () => "Cinese semplificato (zh-CN)", KW = () => "Chinês Simplificado (zh-CN)", qW = () => "简体中文 (zh-CN)", JW = () => "中国語（簡体字） (zh-CN)", YW = () => "Chinese Simplified (zh-CN)", XW = () => "Китайский упрощенный (zh-CN)", ZW = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? HW(e) : n === "es" ? UW(e) : n === "de" ? WW(e) : n === "it" ? GW(e) : n === "pt" ? KW(e) : n === "zh" ? qW(e) : n === "ja" ? JW(e) : n === "ko" ? YW(e) : n === "ru" ? XW(e) : VW(e);
}), QW = () => "Use dark color scheme", $W = () => "Utiliser le thème sombre", eG = () => "Usar esquema de colores oscuro", tG = () => "Dunkles Farbschema verwenden", nG = () => "Usa lo schema colori scuro", rG = () => "Usar esquema de cores escuro", iG = () => "使用深色配色方案", aG = () => "ダークカラー（暗い配色）を使用する", oG = () => "Use dark color scheme", sG = () => "Использовать темную цветовую схему", cG = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? $W(e) : n === "es" ? eG(e) : n === "de" ? tG(e) : n === "it" ? nG(e) : n === "pt" ? rG(e) : n === "zh" ? iG(e) : n === "ja" ? aG(e) : n === "ko" ? oG(e) : n === "ru" ? sG(e) : QW(e);
}), lG = () => "Dark Mode", uG = () => "Mode sombre", dG = () => "Modo oscuro", fG = () => "Dunkelmodus", pG = () => "Modalità scura", mG = () => "Modo Escuro", hG = () => "深色模式", gG = () => "ダークモード", _G = () => "Dark Mode", vG = () => "Темная тема", yG = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? uG(e) : n === "es" ? dG(e) : n === "de" ? fG(e) : n === "it" ? pG(e) : n === "pt" ? mG(e) : n === "zh" ? hG(e) : n === "ja" ? gG(e) : n === "ko" ? _G(e) : n === "ru" ? vG(e) : lG(e);
}), bG = () => "Default Language", xG = () => "Langue par défaut", SG = () => "Idioma predeterminado", CG = () => "Standardsprache", wG = () => "Lingua predefinita", TG = () => "Idioma padrão", EG = () => "默认语言", DG = () => "デフォルトの言語", OG = () => "Default Language", kG = () => "Язык по умолчанию", AG = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? xG(e) : n === "es" ? SG(e) : n === "de" ? CG(e) : n === "it" ? wG(e) : n === "pt" ? TG(e) : n === "zh" ? EG(e) : n === "ja" ? DG(e) : n === "ko" ? OG(e) : n === "ru" ? kG(e) : bG(e);
}), jG = () => "Email Notifications", MG = () => "Notifications e-mail", NG = () => "Notificaciones por correo electrónico", PG = () => "E-Mail-Benachrichtigungen", FG = () => "Notifiche via email", IG = () => "Notificações por e-mail", LG = () => "电子邮件通知", RG = () => "メール通知", zG = () => "Email Notifications", BG = () => "Уведомления по почте", VG = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? MG(e) : n === "es" ? NG(e) : n === "de" ? PG(e) : n === "it" ? FG(e) : n === "pt" ? IG(e) : n === "zh" ? LG(e) : n === "ja" ? RG(e) : n === "ko" ? zG(e) : n === "ru" ? BG(e) : jG(e);
}), HG = () => "English (en)", UG = () => "Anglais (en)", WG = () => "Inglés (en)", GG = () => "Englisch (en)", KG = () => "Inglese (en)", qG = () => "Inglês (en)", JG = () => "英语 (en)", YG = () => "英語 (en)", XG = () => "English (en)", ZG = () => "Английский (en)", QG = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? UG(e) : n === "es" ? WG(e) : n === "de" ? GG(e) : n === "it" ? KG(e) : n === "pt" ? qG(e) : n === "zh" ? JG(e) : n === "ja" ? YG(e) : n === "ko" ? XG(e) : n === "ru" ? ZG(e) : HG(e);
}), $G = () => "French (fr)", eK = () => "Français (fr)", tK = () => "Francés (fr)", nK = () => "Französisch (fr)", rK = () => "Francese (fr)", iK = () => "Francés (fr)", aK = () => "法语 (fr)", oK = () => "フランス語 (fr)", sK = () => "French (fr)", cK = () => "Французский (fr)", lK = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? eK(e) : n === "es" ? tK(e) : n === "de" ? nK(e) : n === "it" ? rK(e) : n === "pt" ? iK(e) : n === "zh" ? aK(e) : n === "ja" ? oK(e) : n === "ko" ? sK(e) : n === "ru" ? cK(e) : $G(e);
}), uK = () => "German (de)", dK = () => "Allemand (de)", fK = () => "Alemán (de)", pK = () => "Deutsch (de)", mK = () => "Tedesco (de)", hK = () => "Alemão (de)", gK = () => "德语 (de)", _K = () => "ドイツ語 (de)", vK = () => "German (de)", yK = () => "Немецкий (de)", bK = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? dK(e) : n === "es" ? fK(e) : n === "de" ? pK(e) : n === "it" ? mK(e) : n === "pt" ? hK(e) : n === "zh" ? gK(e) : n === "ja" ? _K(e) : n === "ko" ? vK(e) : n === "ru" ? yK(e) : uK(e);
}), xK = () => "Japanese (ja)", SK = () => "Japonais (ja)", CK = () => "Japonés (ja)", wK = () => "Japanisch (ja)", TK = () => "Giapponese (ja)", EK = () => "Japonês (ja)", DK = () => "日语 (ja)", OK = () => "日本語 (ja)", kK = () => "Japanese (ja)", AK = () => "Японский (ja)", jK = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? SK(e) : n === "es" ? CK(e) : n === "de" ? wK(e) : n === "it" ? TK(e) : n === "pt" ? EK(e) : n === "zh" ? DK(e) : n === "ja" ? OK(e) : n === "ko" ? kK(e) : n === "ru" ? AK(e) : xK(e);
}), MK = () => "Spanish (es)", NK = () => "Espagnol (es)", PK = () => "Español (es)", FK = () => "Spanisch (es)", IK = () => "Spagnolo (es)", LK = () => "Espanhol (es)", RK = () => "西班牙语 (es)", zK = () => "スペイン語 (es)", BK = () => "Spanish (es)", VK = () => "Испанский (es)", HK = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? NK(e) : n === "es" ? PK(e) : n === "de" ? FK(e) : n === "it" ? IK(e) : n === "pt" ? LK(e) : n === "zh" ? RK(e) : n === "ja" ? zK(e) : n === "ko" ? BK(e) : n === "ru" ? VK(e) : MK(e);
}), UK = () => "Preferences", WK = () => "Préférences", GK = () => "Preferencias", KK = () => "Einstellungen", qK = () => "Preferenze", JK = () => "Preferências", YK = () => "偏好", XK = () => "設定", ZK = () => "Preferences", QK = () => "Предпочтения", $K = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? WK(e) : n === "es" ? GK(e) : n === "de" ? KK(e) : n === "it" ? qK(e) : n === "pt" ? JK(e) : n === "zh" ? YK(e) : n === "ja" ? XK(e) : n === "ko" ? ZK(e) : n === "ru" ? QK(e) : UK(e);
}), eq = () => "Toggle dark mode", tq = () => "Basculer le mode sombre", nq = () => "Cambiar modo oscuro", rq = () => "Dunkelmodus umschalten", iq = () => "Attiva/disattiva modalità scura", aq = () => "Alternar modo escuro", oq = () => "切换深色模式", sq = () => "ダークモードの切り替え", cq = () => "Toggle dark mode", lq = () => "Переключить темную тему", uq = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? tq(e) : n === "es" ? nq(e) : n === "de" ? rq(e) : n === "it" ? iq(e) : n === "pt" ? aq(e) : n === "zh" ? oq(e) : n === "ja" ? sq(e) : n === "ko" ? cq(e) : n === "ru" ? lq(e) : eq(e);
}), dq = () => "Toggle notifications", fq = () => "Activer/désactiver les notifications", pq = () => "Cambiar notificaciones", mq = () => "Benachrichtigungen umschalten", hq = () => "Attiva/disattiva notifiche", gq = () => "Alternar notificações", _q = () => "切换通知", vq = () => "通知の切り替え", yq = () => "Toggle notifications", bq = () => "Переключить уведомления", xq = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? fq(e) : n === "es" ? pq(e) : n === "de" ? mq(e) : n === "it" ? hq(e) : n === "pt" ? gq(e) : n === "zh" ? _q(e) : n === "ja" ? vq(e) : n === "ko" ? yq(e) : n === "ru" ? bq(e) : dq(e);
}), Sq = () => "Receive weekly benchmark reports", Cq = () => "Recevoir les rapports hebdomadaires", wq = () => "Recibir informes semanales de benchmarks", Tq = () => "Wöchentliche Benchmark-Berichte erhalten", Eq = () => "Ricevi rapporti settimanali sui benchmark", Dq = () => "Receber relatórios semanais de benchmarks", Oq = () => "接收每周基准测试报告", kq = () => "毎週のベンチマークレポートを受け取る", Aq = () => "Receive weekly benchmark reports", jq = () => "Получать еженедельные отчеты о бенчмарках", Mq = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Cq(e) : n === "es" ? wq(e) : n === "de" ? Tq(e) : n === "it" ? Eq(e) : n === "pt" ? Dq(e) : n === "zh" ? Oq(e) : n === "ja" ? kq(e) : n === "ko" ? Aq(e) : n === "ru" ? jq(e) : Sq(e);
}), Nq = () => "Display Name", Pq = () => "Nom affiché", Fq = () => "Nombre visible", Iq = () => "Anzeigename", Lq = () => "Nome visualizzato", Rq = () => "Nome de exibição", zq = () => "显示名称", Bq = () => "表示名", Vq = () => "Display Name", Hq = () => "Отображаемое имя", Uq = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Pq(e) : n === "es" ? Fq(e) : n === "de" ? Iq(e) : n === "it" ? Lq(e) : n === "pt" ? Rq(e) : n === "zh" ? zq(e) : n === "ja" ? Bq(e) : n === "ko" ? Vq(e) : n === "ru" ? Hq(e) : Nq(e);
}), Wq = () => "Email", Gq = () => "E-mail", Kq = () => "Correo electrónico", qq = () => "E-Mail", Jq = () => "Email", Yq = () => "E-mail", Xq = () => "电子邮件", Zq = () => "メールアドレス", Qq = () => "Email", $q = () => "Электронная почта", eJ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Gq(e) : n === "es" ? Kq(e) : n === "de" ? qq(e) : n === "it" ? Jq(e) : n === "pt" ? Yq(e) : n === "zh" ? Xq(e) : n === "ja" ? Zq(e) : n === "ko" ? Qq(e) : n === "ru" ? $q(e) : Wq(e);
}), tJ = () => "Profile", nJ = () => "Profil", rJ = () => "Perfil", iJ = () => "Profil", aJ = () => "Profilo", oJ = () => "Perfil", sJ = () => "个人资料", cJ = () => "プロフィール", lJ = () => "Profile", uJ = () => "Профиль", dJ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? nJ(e) : n === "es" ? rJ(e) : n === "de" ? iJ(e) : n === "it" ? aJ(e) : n === "pt" ? oJ(e) : n === "zh" ? sJ(e) : n === "ja" ? cJ(e) : n === "ko" ? lJ(e) : n === "ru" ? uJ(e) : tJ(e);
}), fJ = () => "i18n Bench", pJ = () => "Bench i18n", mJ = () => "i18n Bench", hJ = () => "i18n Bench", gJ = () => "i18n Bench", _J = () => "i18n Bench", vJ = () => "i18n Bench", yJ = () => "i18n Bench", bJ = () => "i18n Bench", xJ = () => "i18n Bench", SJ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? pJ(e) : n === "es" ? mJ(e) : n === "de" ? hJ(e) : n === "it" ? gJ(e) : n === "pt" ? _J(e) : n === "zh" ? vJ(e) : n === "ja" ? yJ(e) : n === "ko" ? bJ(e) : n === "ru" ? xJ(e) : fJ(e);
}), CJ = () => "contact@intlayer.org", wJ = () => "contact@intlayer.org", TJ = () => "contact@intlayer.org", EJ = () => "contact@intlayer.org", DJ = () => "contact@intlayer.org", OJ = () => "contact@intlayer.org", kJ = () => "contact@intlayer.org", AJ = () => "contact@intlayer.org", jJ = () => "contact@intlayer.org", MJ = () => "contact@intlayer.org", NJ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? wJ(e) : n === "es" ? TJ(e) : n === "de" ? EJ(e) : n === "it" ? DJ(e) : n === "pt" ? OJ(e) : n === "zh" ? kJ(e) : n === "ja" ? AJ(e) : n === "ko" ? jJ(e) : n === "ru" ? MJ(e) : CJ(e);
}), PJ = () => "Go to GitHub", FJ = () => "Aller sur GitHub", IJ = () => "Ir a GitHub", LJ = () => "Zu GitHub", RJ = () => "Vai su GitHub", zJ = () => "Ir para o GitHub", BJ = () => "前往 GitHub", VJ = () => "GitHubへ", HJ = () => "Go to GitHub", UJ = () => "Перейти на GitHub", WJ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? FJ(e) : n === "es" ? IJ(e) : n === "de" ? LJ(e) : n === "it" ? RJ(e) : n === "pt" ? zJ(e) : n === "zh" ? BJ(e) : n === "ja" ? VJ(e) : n === "ko" ? HJ(e) : n === "ru" ? UJ(e) : PJ(e);
}), GJ = () => "i18n Benchmark", KJ = () => "Benchmark i18n", qJ = () => "i18n Benchmark", JJ = () => "i18n Benchmark", YJ = () => "i18n Benchmark", XJ = () => "i18n Benchmark", ZJ = () => "i18n Benchmark", QJ = () => "i18n Benchmark", $J = () => "i18n Benchmark", eY = () => "i18n Benchmark", tY = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? KJ(e) : n === "es" ? qJ(e) : n === "de" ? JJ(e) : n === "it" ? YJ(e) : n === "pt" ? XJ(e) : n === "zh" ? ZJ(e) : n === "ja" ? QJ(e) : n === "ko" ? $J(e) : n === "ru" ? eY(e) : GJ(e);
}), nY = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", rY = () => "Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.", iY = () => "Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.", aY = () => "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.", oY = () => "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.", sY = () => "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.", cY = () => "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。", lY = () => "大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。", uY = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", dY = () => "Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.", fY = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? rY(e) : n === "es" ? iY(e) : n === "de" ? aY(e) : n === "it" ? oY(e) : n === "pt" ? sY(e) : n === "zh" ? cY(e) : n === "ja" ? lY(e) : n === "ko" ? uY(e) : n === "ru" ? dY(e) : nY(e);
}), pY = () => "Sarah Chen", mY = () => "Sarah Chen", hY = () => "Sarah Chen", gY = () => "Sarah Chen", _Y = () => "Sarah Chen", vY = () => "Sarah Chen", yY = () => "Sarah Chen", bY = () => "Sarah Chen", xY = () => "Sarah Chen", SY = () => "Сара Чен", CY = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? mY(e) : n === "es" ? hY(e) : n === "de" ? gY(e) : n === "it" ? _Y(e) : n === "pt" ? vY(e) : n === "zh" ? yY(e) : n === "ja" ? bY(e) : n === "ko" ? xY(e) : n === "ru" ? SY(e) : pY(e);
}), wY = () => "Founder & Lead Engineer", TY = () => "Fondatrice & lead ingénieur", EY = () => "Fundadora e ingeniera principal", DY = () => "Gründerin & Leitende Ingenieurin", OY = () => "Fondatrice e Responsabile tecnico", kY = () => "Fundadora e Engenheira Líder", AY = () => "创始人兼首席工程师", jY = () => "創設者 & リードエンジニア", MY = () => "Founder & Lead Engineer", NY = () => "Основатель и ведущий инженер", PY = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? TY(e) : n === "es" ? EY(e) : n === "de" ? DY(e) : n === "it" ? OY(e) : n === "pt" ? kY(e) : n === "zh" ? AY(e) : n === "ja" ? jY(e) : n === "ko" ? MY(e) : n === "ru" ? NY(e) : wY(e);
}), FY = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", IY = () => "Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.", LY = () => "Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.", RY = () => "Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.", zY = () => "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.", BY = () => "Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel.", VY = () => "专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。", HY = () => "JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。前職はVercel。", UY = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", WY = () => "Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.", GY = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? IY(e) : n === "es" ? LY(e) : n === "de" ? RY(e) : n === "it" ? zY(e) : n === "pt" ? BY(e) : n === "zh" ? VY(e) : n === "ja" ? HY(e) : n === "ko" ? UY(e) : n === "ru" ? WY(e) : FY(e);
}), KY = () => "Marcus Weber", qY = () => "Marcus Weber", JY = () => "Marcus Weber", YY = () => "Marcus Weber", XY = () => "Marcus Weber", ZY = () => "Marcus Weber", QY = () => "Marcus Weber", $Y = () => "Marcus Weber", eX = () => "Marcus Weber", tX = () => "Маркус Вебер", nX = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? qY(e) : n === "es" ? JY(e) : n === "de" ? YY(e) : n === "it" ? XY(e) : n === "pt" ? ZY(e) : n === "zh" ? QY(e) : n === "ja" ? $Y(e) : n === "ko" ? eX(e) : n === "ru" ? tX(e) : KY(e);
}), rX = () => "Performance Engineer", iX = () => "Ingénieur performance", aX = () => "Ingeniero de rendimiento", oX = () => "Performance-Ingenieur", sX = () => "Ingegnere delle prestazioni", cX = () => "Engenheiro de performance", lX = () => "性能工程师", uX = () => "パフォーマンスエンジニア", dX = () => "Performance Engineer", fX = () => "Инженер по производительности", pX = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? iX(e) : n === "es" ? aX(e) : n === "de" ? oX(e) : n === "it" ? sX(e) : n === "pt" ? cX(e) : n === "zh" ? lX(e) : n === "ja" ? uX(e) : n === "ko" ? dX(e) : n === "ru" ? fX(e) : rX(e);
}), mX = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", hX = () => "Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.", gX = () => "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.", _X = () => "Begeistert von Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.", vX = () => "Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.", yX = () => "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.", bX = () => "对开发者体验和教育充满热情。曾在 React Conf, JSConf 和 i18nNext 发表演讲。", xX = () => "開発者体験と教育に情熱を注いています。React Conf、JSConf、i18nNextのスピーカー。", SX = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", CX = () => "Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.", wX = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? hX(e) : n === "es" ? gX(e) : n === "de" ? _X(e) : n === "it" ? vX(e) : n === "pt" ? yX(e) : n === "zh" ? bX(e) : n === "ja" ? xX(e) : n === "ko" ? SX(e) : n === "ru" ? CX(e) : mX(e);
}), TX = () => "Aisha Patel", EX = () => "Aisha Patel", DX = () => "Aisha Patel", OX = () => "Aisha Patel", kX = () => "Aisha Patel", AX = () => "Aisha Patel", jX = () => "Aisha Patel", MX = () => "Aisha Patel", NX = () => "Aisha Patel", PX = () => "Айша Патель", FX = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? EX(e) : n === "es" ? DX(e) : n === "de" ? OX(e) : n === "it" ? kX(e) : n === "pt" ? AX(e) : n === "zh" ? jX(e) : n === "ja" ? MX(e) : n === "ko" ? NX(e) : n === "ru" ? PX(e) : TX(e);
}), IX = () => "Developer Advocate", LX = () => "Developer advocate", RX = () => "Developer Advocate", zX = () => "Developer Advocate", BX = () => "Developer Advocate", VX = () => "Developer Advocate", HX = () => "开发者倡导者", UX = () => "Developer Advocate", WX = () => "Developer Advocate", GX = () => "Developer Advocate", KX = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? LX(e) : n === "es" ? RX(e) : n === "de" ? zX(e) : n === "it" ? BX(e) : n === "pt" ? VX(e) : n === "zh" ? HX(e) : n === "ja" ? UX(e) : n === "ko" ? WX(e) : n === "ru" ? GX(e) : IX(e);
}), qX = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", JX = () => "Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.", YX = () => "Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.", XX = () => "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.", ZX = () => "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.", QX = () => "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.", $X = () => "维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。", eZ = () => "ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。", tZ = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", nZ = () => "Поддерживает инфраструктуру бенчмаркинга и CI/CD конвейер. Участник open source проекта Lingui.", rZ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? JX(e) : n === "es" ? YX(e) : n === "de" ? XX(e) : n === "it" ? ZX(e) : n === "pt" ? QX(e) : n === "zh" ? $X(e) : n === "ja" ? eZ(e) : n === "ko" ? tZ(e) : n === "ru" ? nZ(e) : qX(e);
}), iZ = () => "Tomás Rodríguez", aZ = () => "Tomás Rodríguez", oZ = () => "Tomás Rodríguez", sZ = () => "Tomás Rodríguez", cZ = () => "Tomás Rodríguez", lZ = () => "Tomás Rodríguez", uZ = () => "Tomás Rodríguez", dZ = () => "Tomás Rodríguez", fZ = () => "Tomás Rodríguez", pZ = () => "Томас Родригес", mZ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? aZ(e) : n === "es" ? oZ(e) : n === "de" ? sZ(e) : n === "it" ? cZ(e) : n === "pt" ? lZ(e) : n === "zh" ? uZ(e) : n === "ja" ? dZ(e) : n === "ko" ? fZ(e) : n === "ru" ? pZ(e) : iZ(e);
}), hZ = () => "Full-Stack Developer", gZ = () => "Développeur full-stack", _Z = () => "Desarrollador Full-Stack", vZ = () => "Full-Stack-Entwickler", yZ = () => "Sviluppatore Full-Stack", bZ = () => "Desenvolvedor Full-Stack", xZ = () => "全栈开发人员", SZ = () => "フルスタックデベロッパー", CZ = () => "Full-Stack Developer", wZ = () => "Full-Stack разработчик", TZ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? gZ(e) : n === "es" ? _Z(e) : n === "de" ? vZ(e) : n === "it" ? yZ(e) : n === "pt" ? bZ(e) : n === "zh" ? xZ(e) : n === "ja" ? SZ(e) : n === "ko" ? CZ(e) : n === "ru" ? wZ(e) : hZ(e);
}), EZ = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", DZ = () => "Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).", OZ = () => "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.", kZ = () => "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in angewandter Statistik am MIT.", AZ = () => "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.", jZ = () => "Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.", MZ = () => "确保所有基准测试结果 agrarian 统计严谨性。获得 MIT 应用统计学博士学位。", NZ = () => "すべてのベンチマーク結果における統計的厳密さを確保します。MITの応用統計学博士。", PZ = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", FZ = () => "Обеспечивает статистическую строгость во всех результатах бенчмарков. Доктор прикладной статистики (MIT).", IZ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? DZ(e) : n === "es" ? OZ(e) : n === "de" ? kZ(e) : n === "it" ? AZ(e) : n === "pt" ? jZ(e) : n === "zh" ? MZ(e) : n === "ja" ? NZ(e) : n === "ko" ? PZ(e) : n === "ru" ? FZ(e) : EZ(e);
}), LZ = () => "Yuki Tanaka", RZ = () => "Yuki Tanaka", zZ = () => "Yuki Tanaka", BZ = () => "Yuki Tanaka", VZ = () => "Yuki Tanaka", HZ = () => "Yuki Tanaka", UZ = () => "Yuki Tanaka", WZ = () => "Yuki Tanaka", GZ = () => "Yuki Tanaka", KZ = () => "Юки Танака", qZ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? RZ(e) : n === "es" ? zZ(e) : n === "de" ? BZ(e) : n === "it" ? VZ(e) : n === "pt" ? HZ(e) : n === "zh" ? UZ(e) : n === "ja" ? WZ(e) : n === "ko" ? GZ(e) : n === "ru" ? KZ(e) : LZ(e);
}), JZ = () => "Data Analyst", YZ = () => "Analyste de données", XZ = () => "Analista de datos", ZZ = () => "Datenanalyst", QZ = () => "Analista dati", $Z = () => "Analista de dados", eQ = () => "数据分析师", tQ = () => "データアナリスト", nQ = () => "Data Analyst", rQ = () => "Аналитик данных", iQ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? YZ(e) : n === "es" ? XZ(e) : n === "de" ? ZZ(e) : n === "it" ? QZ(e) : n === "pt" ? $Z(e) : n === "zh" ? eQ(e) : n === "ja" ? tQ(e) : n === "ko" ? nQ(e) : n === "ru" ? rQ(e) : JZ(e);
}), aQ = () => "Manages community contributions, partnerships, and events. Background in open source governance.", oQ = () => "Contributions communautaires, partenariats et événements — gouvernance open source.", sQ = () => "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.", cQ = () => "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.", lQ = () => "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.", uQ = () => "Gere as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.", dQ = () => "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。", fQ = () => "コミュニティの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴。", pQ = () => "Manages community contributions, partnerships, and events. Background in open source governance.", mQ = () => "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.", hQ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? oQ(e) : n === "es" ? sQ(e) : n === "de" ? cQ(e) : n === "it" ? lQ(e) : n === "pt" ? uQ(e) : n === "zh" ? dQ(e) : n === "ja" ? fQ(e) : n === "ko" ? pQ(e) : n === "ru" ? mQ(e) : aQ(e);
}), gQ = () => "Elena Kowalski", _Q = () => "Elena Kowalski", vQ = () => "Elena Kowalski", yQ = () => "Elena Kowalski", bQ = () => "Elena Kowalski", xQ = () => "Elena Kowalski", SQ = () => "Elena Kowalski", CQ = () => "Elena Kowalski", wQ = () => "Elena Kowalski", TQ = () => "Елена Ковальски", EQ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? _Q(e) : n === "es" ? vQ(e) : n === "de" ? yQ(e) : n === "it" ? bQ(e) : n === "pt" ? xQ(e) : n === "zh" ? SQ(e) : n === "ja" ? CQ(e) : n === "ko" ? wQ(e) : n === "ru" ? TQ(e) : gQ(e);
}), DQ = () => "Community Manager", OQ = () => "Community manager", kQ = () => "Responsable de la comunidad", AQ = () => "Community Manager", jQ = () => "Responsable della comunità", MQ = () => "Gerente de comunidade", NQ = () => "社区经理", PQ = () => "コミュニティマネージャー", FQ = () => "Community Manager", IQ = () => "Комьюнити-менеджер", LQ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? OQ(e) : n === "es" ? kQ(e) : n === "de" ? AQ(e) : n === "it" ? jQ(e) : n === "pt" ? MQ(e) : n === "zh" ? NQ(e) : n === "ja" ? PQ(e) : n === "ko" ? FQ(e) : n === "ru" ? IQ(e) : DQ(e);
}), RQ = () => "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.", zQ = () => "Les personnes derrière i18n Benchmark, unies par la passion des outils développeurs.", BQ = () => "Conoce a las personas que están detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas para desarrolladores.", VQ = () => "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch die gemeinsame Leidenschaft für großartige Entwicklertools vereint ist.", HQ = () => "Incontra le persone che stanno dietro i18n Benchmark. Un team eterogeneo unito dalla passione comune per i grandi strumenti per gli sviluppatori.", UQ = () => "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor.", WQ = () => "了解 i18n 基准测试背后的团队成员。一个因对优秀开发工具的共同热情而团结在一起的多元化团队。", GQ = () => "i18n Benchmarkを支えるメンバーをご紹介します。優れた開発者ツールへの情熱で結ばれた多様なチームです。", KQ = () => "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.", qQ = () => "Познакомьтесь с людьми, создавшими i18n Benchmark. Команда единомышленников, влюбленных в отличные инструменты для разработчиков.", JQ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? zQ(e) : n === "es" ? BQ(e) : n === "de" ? VQ(e) : n === "it" ? HQ(e) : n === "pt" ? UQ(e) : n === "zh" ? WQ(e) : n === "ja" ? GQ(e) : n === "ko" ? KQ(e) : n === "ru" ? qQ(e) : RQ(e);
}), YQ = () => "Our Team", XQ = () => "Notre équipe", ZQ = () => "Nuestro equipo", QQ = () => "Unser Team", $Q = () => "Il nostro team", e$ = () => "Nossa equipe", t$ = () => "我们的团队", n$ = () => "私たちのチーム", r$ = () => "Our Team", i$ = () => "Наша команда", a$ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? XQ(e) : n === "es" ? ZQ(e) : n === "de" ? QQ(e) : n === "it" ? $Q(e) : n === "pt" ? e$(e) : n === "zh" ? t$(e) : n === "ja" ? n$(e) : n === "ko" ? r$(e) : n === "ru" ? i$(e) : YQ(e);
}), o$ = () => "Theme: Auto", s$ = () => "Thème : automatique", c$ = () => "Tema: Auto", l$ = () => "Thema: Auto", u$ = () => "Tema: Auto", d$ = () => "Tema: Automático", f$ = () => "主题：自动", p$ = () => "テーマ：自動", m$ = () => "Theme: Auto", h$ = () => "Тема: Авто", g$ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? s$(e) : n === "es" ? c$(e) : n === "de" ? l$(e) : n === "it" ? u$(e) : n === "pt" ? d$(e) : n === "zh" ? f$(e) : n === "ja" ? p$(e) : n === "ko" ? m$(e) : n === "ru" ? h$(e) : o$(e);
}), _$ = () => "Theme: Dark", v$ = () => "Thème : sombre", y$ = () => "Tema: Oscuro", b$ = () => "Thema: Dunkel", x$ = () => "Tema: Scuro", S$ = () => "Tema: Escuro", C$ = () => "主题：深色", w$ = () => "テーマ：ダーク", T$ = () => "Theme: Dark", E$ = () => "Тема: Темная", D$ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? v$(e) : n === "es" ? y$(e) : n === "de" ? b$(e) : n === "it" ? x$(e) : n === "pt" ? S$(e) : n === "zh" ? C$(e) : n === "ja" ? w$(e) : n === "ko" ? T$(e) : n === "ru" ? E$(e) : _$(e);
}), O$ = () => "Theme mode: auto (system). Click to switch to light mode.", k$ = () => "Mode thème : automatique (système). Cliquez pour passer en mode clair.", A$ = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", j$ = () => "Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.", M$ = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", N$ = () => "Modo de tema: auto (sistema). Clique para mudar para o modo claro.", P$ = () => "主题模式：自动（系统）。点击切换到浅色模式。", F$ = () => "テーマモード：自動（システム）。クリックするとライトモードに切り替わります。", I$ = () => "Theme mode: auto (system). Click to switch to light mode.", L$ = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", R$ = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? k$(e) : n === "es" ? A$(e) : n === "de" ? j$(e) : n === "it" ? M$(e) : n === "pt" ? N$(e) : n === "zh" ? P$(e) : n === "ja" ? F$(e) : n === "ko" ? I$(e) : n === "ru" ? L$(e) : O$(e);
}), z$ = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, B$ = (e) => `Mode thème : ${e?.mode}. Cliquez pour changer de mode.`, V$ = (e) => `Modo de tema: ${e?.mode}. Haz clic para cambiar de modo.`, H$ = (e) => `Themenmodus: ${e?.mode}. Klicken Sie hier, um den Modus zu wechseln.`, U$ = (e) => `Modalità tema: ${e?.mode}. Clicca per cambiare modalità.`, W$ = (e) => `Modo de tema: ${e?.mode}. Clique para mudar de modo.`, G$ = (e) => `主题模式：${e?.mode}。点击切换模式。`, K$ = (e) => `テーマモード：${e?.mode}。クリックしてモードを切り替えます。`, q$ = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, J$ = (e) => `Режим темы: ${e?.mode}. Нажмите, чтобы сменить режим.`, Y$ = ((e, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? B$(e) : n === "es" ? V$(e) : n === "de" ? H$(e) : n === "it" ? U$(e) : n === "pt" ? W$(e) : n === "zh" ? G$(e) : n === "ja" ? K$(e) : n === "ko" ? q$(e) : n === "ru" ? J$(e) : z$(e);
}), X$ = () => "Theme: Light", Z$ = () => "Thème : clair", Q$ = () => "Tema: Claro", $$ = () => "Thema: Hell", e1 = () => "Tema: Chiaro", t1 = () => "Tema: Claro", n1 = () => "主题：浅色", r1 = () => "テーマ：ライト", i1 = () => "Theme: Light", a1 = () => "Тема: Светлая", o1 = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Z$(e) : n === "es" ? Q$(e) : n === "de" ? $$(e) : n === "it" ? e1(e) : n === "pt" ? t1(e) : n === "zh" ? n1(e) : n === "ja" ? r1(e) : n === "ko" ? i1(e) : n === "ru" ? a1(e) : X$(e);
}), $ = n({
	about_grid_methodologyDesc: () => U,
	about_grid_methodologyTitle: () => ae,
	about_grid_whyExistsDesc: () => ge,
	about_grid_whyExistsTitle: () => De,
	about_header_description: () => Re,
	about_header_title: () => Ye,
	about_whatWeMeasure_bundleSizeImpact: () => ot,
	about_whatWeMeasure_bundleSizeImpactDesc: () => _t,
	about_whatWeMeasure_hydrationCost: () => Ot,
	about_whatWeMeasure_hydrationCostDesc: () => zt,
	about_whatWeMeasure_lazyLoading: () => Xt,
	about_whatWeMeasure_lazyLoadingDesc: () => cn,
	about_whatWeMeasure_localeSwitch: () => yn,
	about_whatWeMeasure_localeSwitchDesc: () => An,
	about_whatWeMeasure_renderingOverhead: () => Vn,
	about_whatWeMeasure_renderingOverheadDesc: () => Qn,
	about_whatWeMeasure_title: () => lr,
	blog_header_description: () => br,
	blog_header_title: () => jr,
	blog_list_post1Category: () => Hr,
	blog_list_post1Date: () => $r,
	blog_list_post1Excerpt: () => ui,
	blog_list_post1Title: () => xi,
	blog_list_post2Category: () => Mi,
	blog_list_post2Date: () => Ui,
	blog_list_post2Excerpt: () => ea,
	blog_list_post2Title: () => da,
	blog_list_post3Category: () => Sa,
	blog_list_post3Date: () => Na,
	blog_list_post3Excerpt: () => Wa,
	blog_list_post3Title: () => to,
	blog_list_post4Category: () => po,
	blog_list_post4Date: () => wo,
	blog_list_post4Excerpt: () => Fo,
	blog_list_post4Title: () => Ko,
	blog_list_post5Category: () => rs,
	blog_list_post5Date: () => ms,
	blog_list_post5Excerpt: () => Ts,
	blog_list_post5Title: () => Is,
	blog_list_post6Category: () => qs,
	blog_list_post6Date: () => ic,
	blog_list_post6Excerpt: () => hc,
	blog_list_post6Title: () => Ec,
	blog_list_readMore: () => Lc,
	careers_benefits_ossLabel: () => Jc,
	careers_benefits_ossValue: () => al,
	careers_benefits_payLabel: () => gl,
	careers_benefits_payValue: () => Dl,
	careers_benefits_remoteLabel: () => Rl,
	careers_benefits_remoteValue: () => Yl,
	careers_header_description: () => ou,
	careers_header_title: () => _u,
	careers_openPositions_applyNow: () => Ou,
	careers_openPositions_backendDesc: () => zu,
	careers_openPositions_backendTitle: () => Xu,
	careers_openPositions_community: () => sd,
	careers_openPositions_devrelDesc: () => vd,
	careers_openPositions_devrelTitle: () => kd,
	careers_openPositions_documentation: () => Bd,
	careers_openPositions_engineering: () => Zd,
	careers_openPositions_frontendDesc: () => lf,
	careers_openPositions_frontendTitle: () => bf,
	careers_openPositions_fullTime: () => jf,
	careers_openPositions_partTime: () => Hf,
	careers_openPositions_qaDesc: () => $f,
	careers_openPositions_qaTitle: () => up,
	careers_openPositions_remote: () => xp,
	careers_openPositions_sfRemote: () => Mp,
	careers_openPositions_title: () => Up,
	careers_openPositions_writerDesc: () => em,
	careers_openPositions_writerTitle: () => dm,
	contact_form_bugReport: () => Sm,
	contact_form_contribution: () => Nm,
	contact_form_email: () => Wm,
	contact_form_emailPlaceholder: () => th,
	contact_form_message: () => fh,
	contact_form_messagePlaceholder: () => Ch,
	contact_form_methodologyQuestion: () => Ph,
	contact_form_name: () => Gh,
	contact_form_newBenchmarkIdea: () => ng,
	contact_form_other: () => pg,
	contact_form_sendMessage: () => wg,
	contact_form_topic: () => Fg,
	contact_form_yourName: () => Kg,
	contact_header_description: () => r_,
	contact_header_title: () => m_,
	faq_header_description: () => T_,
	faq_header_title: () => I_,
	faq_list_a1: () => q_,
	faq_list_a2: () => iv,
	faq_list_a3: () => hv,
	faq_list_a4: () => Ev,
	faq_list_a5: () => Lv,
	faq_list_a6: () => Jv,
	faq_list_a7: () => ay,
	faq_list_a8: () => gy,
	faq_list_q1: () => Dy,
	faq_list_q2: () => Ry,
	faq_list_q3: () => Yy,
	faq_list_q4: () => ob,
	faq_list_q5: () => _b,
	faq_list_q6: () => Ob,
	faq_list_q7: () => zb,
	faq_list_q8: () => Xb,
	footer_builtWith: () => sx,
	footer_contact: () => vx,
	footer_contributing: () => kx,
	footer_description: () => Bx,
	footer_github: () => Zx,
	footer_methodology: () => cS,
	footer_resources: () => yS,
	footer_title: () => AS,
	header_blog: () => VS,
	header_careers: () => QS,
	header_contact: () => lC,
	header_faq: () => bC,
	header_home: () => jC,
	header_methodology: () => HC,
	header_mockPages: () => $C,
	header_pricing: () => uw,
	header_products: () => xw,
	header_settings: () => Mw,
	header_team: () => Uw,
	home_hero_description: () => eT,
	home_hero_methodology: () => dT,
	home_hero_title: () => ST,
	home_hero_viewResults: () => NT,
	home_resultsTable_builtIn: () => WT,
	home_resultsTable_bundleSize: () => tE,
	home_resultsTable_lazyLoading: () => fE,
	home_resultsTable_library: () => CE,
	home_resultsTable_lookupTime: () => PE,
	home_resultsTable_manual: () => GE,
	home_resultsTable_title: () => nD,
	home_resultsTable_yes: () => pD,
	home_understandingImpact_cacheDesc: () => wD,
	home_understandingImpact_cacheLabel: () => FD,
	home_understandingImpact_foucDesc: () => KD,
	home_understandingImpact_foucLabel: () => rO,
	home_understandingImpact_measuresDesc: () => mO,
	home_understandingImpact_measuresTitle: () => TO,
	home_understandingImpact_singleJsonBullet1: () => IO,
	home_understandingImpact_singleJsonBullet2: () => qO,
	home_understandingImpact_singleJsonBullet3: () => ik,
	home_understandingImpact_singleJsonIntro: () => hk,
	home_understandingImpact_singleJsonTitle: () => Ek,
	home_understandingImpact_title: () => Lk,
	home_understandingImpact_tradeOffsIntro: () => Jk,
	home_understandingImpact_tradeOffsTitle: () => aA,
	home_understandingImpact_waterfallDesc: () => gA,
	home_understandingImpact_waterfallLabel: () => EA,
	home_whyItMatters_bundleSizeDesc: () => LA,
	home_whyItMatters_bundleSizeTitle: () => JA,
	home_whyItMatters_dynamicLoadingDesc: () => aj,
	home_whyItMatters_dynamicLoadingTitle: () => gj,
	home_whyItMatters_renderingDesc: () => Dj,
	home_whyItMatters_renderingTitle: () => Rj,
	home_whyItMatters_title: () => Yj,
	mockBanner: () => oM,
	notFound_description: () => _M,
	notFound_returnHome: () => OM,
	notFound_title: () => zM,
	pricing_header_description: () => XM,
	pricing_header_title: () => sN,
	pricing_tiers_contactSales: () => vN,
	pricing_tiers_enterpriseFeature1: () => kN,
	pricing_tiers_enterpriseFeature2: () => BN,
	pricing_tiers_enterpriseFeature3: () => ZN,
	pricing_tiers_enterpriseFeature4: () => cP,
	pricing_tiers_enterpriseFeature5: () => yP,
	pricing_tiers_enterpriseFeature6: () => AP,
	pricing_tiers_enterpriseFeature7: () => VP,
	pricing_tiers_enterpriseName: () => QP,
	pricing_tiers_enterprisePrice: () => lF,
	pricing_tiers_getStarted: () => bF,
	pricing_tiers_proFeature1: () => jF,
	pricing_tiers_proFeature2: () => HF,
	pricing_tiers_proFeature3: () => $F,
	pricing_tiers_proFeature4: () => uI,
	pricing_tiers_proFeature5: () => xI,
	pricing_tiers_proFeature6: () => MI,
	pricing_tiers_proName: () => UI,
	pricing_tiers_proPeriod: () => eL,
	pricing_tiers_proPrice: () => dL,
	pricing_tiers_starterFeature1: () => SL,
	pricing_tiers_starterFeature2: () => NL,
	pricing_tiers_starterFeature3: () => WL,
	pricing_tiers_starterFeature4: () => tR,
	pricing_tiers_starterName: () => fR,
	pricing_tiers_starterPeriod: () => CR,
	pricing_tiers_starterPrice: () => PR,
	products_grid_cliDesc: () => GR,
	products_grid_cliName: () => nz,
	products_grid_cliPrice: () => pz,
	products_grid_cloudDesc: () => wz,
	products_grid_cloudName: () => Fz,
	products_grid_cloudPrice: () => Kz,
	products_grid_enterpriseDesc: () => rB,
	products_grid_enterpriseName: () => mB,
	products_grid_enterprisePrice: () => TB,
	products_grid_learnMore: () => IB,
	products_grid_migrationDesc: () => qB,
	products_grid_migrationName: () => iV,
	products_grid_migrationPrice: () => hV,
	products_grid_optimizerDesc: () => EV,
	products_grid_optimizerName: () => LV,
	products_grid_optimizerPrice: () => JV,
	products_grid_qaDesc: () => aH,
	products_grid_qaName: () => gH,
	products_grid_qaPrice: () => DH,
	products_header_description: () => RH,
	products_header_title: () => YH,
	settings_apiAccess_apiKey: () => oU,
	settings_apiAccess_copy: () => _U,
	settings_apiAccess_description: () => OU,
	settings_apiAccess_title: () => zU,
	settings_footer_cancel: () => XU,
	settings_footer_saveChanges: () => sW,
	settings_header_description: () => vW,
	settings_header_title: () => kW,
	settings_preferences_arabic: () => BW,
	settings_preferences_chinese: () => ZW,
	settings_preferences_darkColorScheme: () => cG,
	settings_preferences_darkMode: () => yG,
	settings_preferences_defaultLanguage: () => AG,
	settings_preferences_emailNotifications: () => VG,
	settings_preferences_english: () => QG,
	settings_preferences_french: () => lK,
	settings_preferences_german: () => bK,
	settings_preferences_japanese: () => jK,
	settings_preferences_spanish: () => HK,
	settings_preferences_title: () => $K,
	settings_preferences_toggleDarkMode: () => uq,
	settings_preferences_toggleNotifications: () => xq,
	settings_preferences_weeklyReports: () => Mq,
	settings_profile_displayName: () => Uq,
	settings_profile_email: () => eJ,
	settings_profile_title: () => dJ,
	shared_appName: () => SJ,
	shared_contactEmail: () => NJ,
	shared_goToGithub: () => WJ,
	shared_siteName: () => tY,
	team_grid_member1Bio: () => fY,
	team_grid_member1Name: () => CY,
	team_grid_member1Role: () => PY,
	team_grid_member2Bio: () => GY,
	team_grid_member2Name: () => nX,
	team_grid_member2Role: () => pX,
	team_grid_member3Bio: () => wX,
	team_grid_member3Name: () => FX,
	team_grid_member3Role: () => KX,
	team_grid_member4Bio: () => rZ,
	team_grid_member4Name: () => mZ,
	team_grid_member4Role: () => TZ,
	team_grid_member5Bio: () => IZ,
	team_grid_member5Name: () => qZ,
	team_grid_member5Role: () => iQ,
	team_grid_member6Bio: () => hQ,
	team_grid_member6Name: () => EQ,
	team_grid_member6Role: () => LQ,
	team_header_description: () => JQ,
	team_header_title: () => a$,
	themeToggle_auto: () => g$,
	themeToggle_dark: () => D$,
	themeToggle_labelAuto: () => R$,
	themeToggle_labelOther: () => Y$,
	themeToggle_light: () => o1
}), s1 = e.from_html("<details class=\"group rounded-lg border border-border bg-card\"><summary class=\"cursor-pointer px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/50\"> </summary> <p class=\"px-6 pb-4 text-sm text-muted-foreground\"> </p></details>"), c1 = e.from_html("<div class=\"mx-auto max-w-3xl space-y-4\"></div>");
function l1(t, n) {
	e.push(n, !1);
	let r = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8
	].map((e) => ({
		q: $[`faq_list_q${e}`]?.(),
		a: $[`faq_list_a${e}`]?.()
	}));
	e.init();
	var i = c1();
	e.each(i, 5, () => r, e.index, (t, n) => {
		var r = s1(), i = e.child(r), a = e.only_child(i, !0), o = e.sibling(i, 2), s = e.only_child(o, !0);
		e.reset(r), e.template_effect(() => {
			e.set_text(a, e.get(n).q), e.set_text(s, e.get(n).a);
		}), e.append(t, r);
	}), e.reset(i), e.append(t, i), e.pop();
}
export { l1 as default };
