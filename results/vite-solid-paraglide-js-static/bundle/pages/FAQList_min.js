import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r } from "solid-js";
var i = Object.defineProperty, a = (e, t) => {
	let n = {};
	for (var r in e) i(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || i(n, Symbol.toStringTag, { value: "Module" }), n;
}, o = {}, s = [
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
], ee = "PARAGLIDE_LOCALE", te = 3456e4, c = [
	"cookie",
	"globalVariable",
	"baseLocale"
], ne = [], l = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var u, re = !1, d = () => {
	let e = c;
	!l && typeof window < "u" && window.location?.href && (e = y(window.location.href));
	let t = ie(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return re || (u = t, re = !0, oe(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function ie(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = pe();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (x(t) && b.has(t)) {
			let e = b.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ce(t);
			}
		}
		let e = f(n);
		if (e) return e;
	}
}
var ae = (e) => {
	e ? window.location.href = e : window.location.reload();
}, oe = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = d();
	} catch {}
	let i = [], a = c;
	!l && typeof window < "u" && window.location?.href && (a = y(window.location.href));
	for (let t of a) if (t === "globalVariable") u = e;
	else if (t === "cookie") {
		if (l || typeof document > "u" || typeof window > "u") continue;
		let t = `${ee}=${e}; path=/; max-age=${te}`;
		document.cookie = t, g();
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
		!l && n.reload && window.location && e !== r && ae(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, se = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function f(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of s) if (e.toLowerCase() === t) return e;
}
function ce(e) {
	let t = f(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${s.join(", ")}`);
}
function p(e) {
	return e;
}
function le(e, t) {
	return e.exec(t.href);
}
var ue = ee.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), de = RegExp(`(?:^|;\\s*)${ue}=([^;]*)`), m = Symbol(), h = m;
function g() {
	h = m;
}
function fe() {
	typeof queueMicrotask == "function" ? queueMicrotask(g) : Promise.resolve().then(g);
}
function pe() {
	if (typeof document > "u") return;
	if (h !== m) return h;
	let e = document.cookie.match(de)?.[1];
	return h = f(e), fe(), h;
}
function me(e) {
	return he(e);
}
function he(e) {
	let t = p(typeof e == "string" ? new URL(e, se()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && f(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), p(t);
}
var _, v;
function ge(e) {
	if (ne.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (_ === t) return v;
	let n = p(new URL(t, "http://example.com")), r = me(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of ne) if (le(new o(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return _ = t, v = a, a;
}
function y(e) {
	let t = ge(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var b = /* @__PURE__ */ new Map();
function x(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var _e = () => "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.", ve = () => "La même application 10 pages est construite pour chaque bibliothèque. Nous mesurons le bundle de production (rollup-plugin-visualizer), lançons des audits Lighthouse et utilisons le profilage pour capturer le rendu lors des changements de langue. Tout s'exécute en CI sur du matériel homogène pour des résultats reproductibles.", ye = () => "La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en hardware consistente para asegurar resultados reproducibles.", be = () => "Die gleiche 10-seitige App wird einmal pro Bibliothek gebaut. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Sprachwechsel zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten.", xe = () => "La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.", Se = () => "O mesmo app de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias Lighthouse para as métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes rodam em CI em hardware consistente para garantir resultados reprodutíveis.", Ce = () => "相同的 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行加载指标的 Lighthouse 审核，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在一致硬件上的 CI 中运行，以确保结果可复现。", we = () => "同じ10ページのアプリをライブラリごとに1回構築します。本番バンドルを測定し（rollup-plugin-visualizer経由）、読み込み指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダー時間をキャプチャします。再現可能な結果を確保するために、すべてのテストは一貫したハードウェア上のCIで実行されます。", Te = () => "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.", Ee = () => "Одно и то же 10-страничное приложение собирается один раз для каждой библиотеки. Мы измеряем продакшн-бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для фиксации времени рендеринга при смене языка. Все тесты запускаются в CI на идентичном оборудовании для обеспечения воспроизводимости результатов.", S = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : n === "ru" ? Ee(e) : _e(e);
}), De = () => "Methodology", Oe = () => "Méthodologie", ke = () => "Metodología", Ae = () => "Methodik", je = () => "Metodologia", Me = () => "Metodologia", Ne = () => "方法论", Pe = () => "手法", Fe = () => "Methodology", Ie = () => "Методология", C = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Oe(e) : n === "es" ? ke(e) : n === "de" ? Ae(e) : n === "it" ? je(e) : n === "pt" ? Me(e) : n === "zh" ? Ne(e) : n === "ja" ? Pe(e) : n === "ko" ? Fe(e) : n === "ru" ? Ie(e) : De(e);
}), Le = () => "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.", Re = () => "Choisir une bibliothèque i18n est une décision d'architecture à long terme. Beaucoup de comparatifs insistent sur l'ergonomie d'API, mais peu mesurent le coût performance : poids ajouté au bundle ? impact sur le rendu avec des milliers de clés ? le chargement paresseux aide-t-il vraiment ou déplace-t-il seulement le coût ? Ce benchmark répond avec des données réelles.", ze = () => "Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo desplaza el coste? Este benchmark responde a esas preguntas con datos reales.", Be = () => "Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Konsequenzen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verlagert es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.", Ve = () => "Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.", He = () => "Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.", Ue = () => "选择 i18n 库是一个具有长期影响的架构决策。大多数比较关注 API 的易用性，但很少有衡量性能成本的：库为包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试通过真实数据回答了这些问题。", We = () => "i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重量を追加しますか？数千の翻訳キーが読み込まれたとき、レンダリングにどのように影響しますか？遅延読み込みは実際に役立ちますか、それともコストをシフトするだけですか？このベンチマークは、実際のデータでこれらの質問に答えます。", Ge = () => "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.", Ke = () => "Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений фокусируются на удобстве API, но лишь немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.", w = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Re(e) : n === "es" ? ze(e) : n === "de" ? Be(e) : n === "it" ? Ve(e) : n === "pt" ? He(e) : n === "zh" ? Ue(e) : n === "ja" ? We(e) : n === "ko" ? Ge(e) : n === "ru" ? Ke(e) : Le(e);
}), qe = () => "Why This Exists", Je = () => "Pourquoi ce projet existe", Ye = () => "Por qué existe esto", Xe = () => "Warum dies existiert", Ze = () => "Perché esiste", Qe = () => "Por que isto existe", $e = () => "为什么存在这个测试", et = () => "なぜこれが存在するのか", tt = () => "Why This Exists", nt = () => "Зачем это нужно", T = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Je(e) : n === "es" ? Ye(e) : n === "de" ? Xe(e) : n === "it" ? Ze(e) : n === "pt" ? Qe(e) : n === "zh" ? $e(e) : n === "ja" ? et(e) : n === "ko" ? tt(e) : n === "ru" ? nt(e) : qe(e);
}), rt = () => "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.", it = () => "Il s'agit d'une application de test open source — pas d'un produit ni d'une entreprise. Elle sert uniquement de base multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans les mêmes conditions.", at = () => "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React de varias páginas realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas.", ot = () => "Dies ist eine Open-Source-Testanwendung — kein Produkt und kein Unternehmen. Ihr einziger Zweck ist es, eine realistische React-App mit mehreren Seiten bereitzustellen, in die verschiedene i18n-Bibliotheken integriert und unter identischen Bedingungen gemessen werden können.", st = () => "Questa è un'applicazione di test open source — non un prodotto o un'azienda. Il suo unico scopo è quello di fornire un'app React multipagina realistica in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche.", ct = () => "Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer uma aplicação React de várias páginas realista onde diferentes bibliotecas i18n podem ser integradas e medidas sob condições idênticas.", lt = () => "这是一个开源测试应用程序 — 不是产品或公司。其唯一目的是提供一个现实的、多页面的 React 应用，以便在相同条件下集成和衡量不同的 i18n 库。", ut = () => "これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、現実的なマルチページReactアプリを提供し、異なるi18nライブラリを同一条件下で統合して測定できるようにすることです。", dt = () => "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.", ft = () => "Это тестовое приложение с открытым исходным кодом, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное React-приложение, в которое можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.", E = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? it(e) : n === "es" ? at(e) : n === "de" ? ot(e) : n === "it" ? st(e) : n === "pt" ? ct(e) : n === "zh" ? lt(e) : n === "ja" ? ut(e) : n === "ko" ? dt(e) : n === "ru" ? ft(e) : rt(e);
}), pt = () => "About This Benchmark", mt = () => "À propos de ce benchmark", ht = () => "Acerca de este benchmark", gt = () => "Über diesen Benchmark", _t = () => "Informazioni su questo benchmark", vt = () => "Sobre este benchmark", yt = () => "关于此基准测试", bt = () => "このベンチマークについて", xt = () => "About This Benchmark", St = () => "Об этом бенчмарке", D = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? mt(e) : n === "es" ? ht(e) : n === "de" ? gt(e) : n === "it" ? _t(e) : n === "pt" ? vt(e) : n === "zh" ? yt(e) : n === "ja" ? bt(e) : n === "ko" ? xt(e) : n === "ru" ? St(e) : pt(e);
}), Ct = () => "Bundle size impact", wt = () => "Impact sur la taille du bundle", Tt = () => "Impacto en el tamaño del bundle", Et = () => "Auswirkungen auf die Bundle-Größe", Dt = () => "Impatto sulla dimensione del bundle", Ot = () => "Impacto no tamanho do bundle", kt = () => "包大小影响", At = () => "バンドルサイズへの影響", jt = () => "Bundle size impact", Mt = () => "Влияние на размер бандла", O = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? wt(e) : n === "es" ? Tt(e) : n === "de" ? Et(e) : n === "it" ? Dt(e) : n === "pt" ? Ot(e) : n === "zh" ? kt(e) : n === "ja" ? At(e) : n === "ko" ? jt(e) : n === "ru" ? Mt(e) : Ct(e);
}), Nt = () => "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.", Pt = () => "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers sont inclus — impact direct sur les réseaux lents.", Ft = () => "Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.", It = () => "Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.", Lt = () => "I byte JavaScript aggiuntivi inviati agli utenti quando vengono incluse la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.", Rt = () => "Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.", zt = () => "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。", Bt = () => "i18nライブラリとその翻訳ファイルが含まれるときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。", Vt = () => "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.", Ht = () => "Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.", k = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Pt(e) : n === "es" ? Ft(e) : n === "de" ? It(e) : n === "it" ? Lt(e) : n === "pt" ? Rt(e) : n === "zh" ? zt(e) : n === "ja" ? Bt(e) : n === "ko" ? Vt(e) : n === "ru" ? Ht(e) : Nt(e);
}), Ut = () => "Hydration cost", Wt = () => "Coût d'hydratation", Gt = () => "Coste de hidratación", Kt = () => "Hydrierungskosten", qt = () => "Costo di idratazione", Jt = () => "Custo de hidratação", Yt = () => "注水成本", Xt = () => "ハイドレーションコスト", Zt = () => "Hydration cost", Qt = () => "Стоимость гидратации", A = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Wt(e) : n === "es" ? Gt(e) : n === "de" ? Kt(e) : n === "it" ? qt(e) : n === "pt" ? Jt(e) : n === "zh" ? Yt(e) : n === "ja" ? Xt(e) : n === "ko" ? Zt(e) : n === "ru" ? Qt(e) : Ut(e);
}), $t = () => "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.", en = () => "En SSR, les données de traduction sont sérialisées dans le HTML. De gros dictionnaires alourdissent la page et ralentissent l'hydratation.", tn = () => "Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.", nn = () => "Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Verzeichnisse erhöhen die HTML-Nutzlast und verlangsamen die Hydrierung — den Moment, in dem die Seite interaktiv wird.", rn = () => "Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.", an = () => "Durante o SSR, os dados de tradução são serializados no HTML. Dicionários grandes aumentam o payload HTML e retardam a hidratação — o momento em que a página se torna interativa.", on = () => "在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 — 即页面变得可交互的时刻。", sn = () => "SSR中、翻訳データはHTMLにシリアル化されます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになるまでのハイドレーションを遅らせます。", cn = () => "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.", ln = () => "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем полезной нагрузки HTML и замедляют гидратацию — момент, когда страница становится интерактивной.", j = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? en(e) : n === "es" ? tn(e) : n === "de" ? nn(e) : n === "it" ? rn(e) : n === "pt" ? an(e) : n === "zh" ? on(e) : n === "ja" ? sn(e) : n === "ko" ? cn(e) : n === "ru" ? ln(e) : $t(e);
}), un = () => "Lazy loading effectiveness", dn = () => "Efficacité du chargement paresseux", fn = () => "Eficacia de la carga diferida", pn = () => "Effektivität von Lazy Loading", mn = () => "Efficacia del caricamento pigro", hn = () => "Eficácia do carregamento lento", gn = () => "延迟加载有效性", _n = () => "遅延読み込みの有効性", vn = () => "Lazy loading effectiveness", yn = () => "Эффективность ленивой загрузки", M = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? dn(e) : n === "es" ? fn(e) : n === "de" ? pn(e) : n === "it" ? mn(e) : n === "pt" ? hn(e) : n === "zh" ? gn(e) : n === "ja" ? _n(e) : n === "ko" ? vn(e) : n === "ru" ? yn(e) : un(e);
}), bn = () => "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).", xn = () => "Le découpage par route ou espace de noms réduit-il vraiment la charge initiale, et quels compromis cela introduit (cascade, FOUC, cache) ?", Sn = () => "Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).", Cn = () => "Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).", wn = () => "Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).", Tn = () => "Se dividir as traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs isso introduz (requisições em cascata, FOUC, complexidade de cache).", En = () => "按路由或命名空间拆分翻译是否确实减少了初始加载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。", Dn = () => "ルートごとまたは名前空間ごとに翻訳を分割することが実際に初期負荷を軽減するかどうか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。", On = () => "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).", kn = () => "Снижает ли разделение переводов по маршрутам или пространствам имен фактическую начальную нагрузку, и какие компромиссы это вносит (каскадные запросы, FOUC, сложность кэширования).", N = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? xn(e) : n === "es" ? Sn(e) : n === "de" ? Cn(e) : n === "it" ? wn(e) : n === "pt" ? Tn(e) : n === "zh" ? En(e) : n === "ja" ? Dn(e) : n === "ko" ? On(e) : n === "ru" ? kn(e) : bn(e);
}), An = () => "Locale switch speed", jn = () => "Vitesse de changement de langue", Mn = () => "Velocidad de cambio de idioma", Nn = () => "Geschwindigkeit des Sprachwechsels", Pn = () => "Velocità di cambio lingua", Fn = () => "Velocidade de troca de localidade", In = () => "语言环境切换速度", Ln = () => "ロケール切り替え速度", Rn = () => "Locale switch speed", zn = () => "Скорость переключения языка", P = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? jn(e) : n === "es" ? Mn(e) : n === "de" ? Nn(e) : n === "it" ? Pn(e) : n === "pt" ? Fn(e) : n === "zh" ? In(e) : n === "ja" ? Ln(e) : n === "ko" ? Rn(e) : n === "ru" ? zn(e) : An(e);
}), Bn = () => "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.", Vn = () => "À quelle vitesse l'application peut basculer de langue à l'exécution — récupération des traductions, re-rendu, mise à jour du DOM.", Hn = () => "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.", Un = () => "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.", Wn = () => "Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.", Gn = () => "Quão rápido o app pode alternar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM.", Kn = () => "应用程序在运行时从一种语言切换到另一种语言的速度 — 包括获取新翻译、重新渲染组件和更新 DOM。", qn = () => "実行時にある言語から別の言語にどれだけ速く切り替えられるか。新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。", Jn = () => "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.", Yn = () => "Как быстро приложение может переключиться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.", F = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Vn(e) : n === "es" ? Hn(e) : n === "de" ? Un(e) : n === "it" ? Wn(e) : n === "pt" ? Gn(e) : n === "zh" ? Kn(e) : n === "ja" ? qn(e) : n === "ko" ? Jn(e) : n === "ru" ? Yn(e) : Bn(e);
}), Xn = () => "Rendering overhead", Zn = () => "Surcharge de rendu", Qn = () => "Sobrecarga de renderizado", $n = () => "Rendering-Overhead", er = () => "Sovrapprezzo di rendering", tr = () => "Sobrecarga de renderização", nr = () => "渲染开销", rr = () => "レンダリングのオーバーヘッド", ir = () => "Rendering overhead", ar = () => "Накладные расходы на рендеринг", I = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Zn(e) : n === "es" ? Qn(e) : n === "de" ? $n(e) : n === "it" ? er(e) : n === "pt" ? tr(e) : n === "zh" ? nr(e) : n === "ja" ? rr(e) : n === "ko" ? ir(e) : n === "ru" ? ar(e) : Xn(e);
}), or = () => "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.", sr = () => "Temps supplémentaire ajouté au cycle de rendu. Les bibliothèques qui injectent les traductions via un seul provider de contexte peuvent provoquer des re-rendus inutiles.", cr = () => "Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes.", lr = () => "Wie viel zusätzliche Zeit die Bibliothek zum Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.", ur = () => "Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.", dr = () => "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.", fr = () => "库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树的不必要重新渲染。", pr = () => "ライブラリがReactのレンダーサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。", mr = () => "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.", hr = () => "Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, которые внедряют переводы через единый провайдер контекста, могут вызывать ненужные повторные рендеринги по всему дереву компонентов.", L = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? sr(e) : n === "es" ? cr(e) : n === "de" ? lr(e) : n === "it" ? ur(e) : n === "pt" ? dr(e) : n === "zh" ? fr(e) : n === "ja" ? pr(e) : n === "ko" ? mr(e) : n === "ru" ? hr(e) : or(e);
}), gr = () => "What We Measure", _r = () => "Ce que nous mesurons", vr = () => "Qué medimos", yr = () => "Was wir messen", br = () => "Cosa misuriamo", xr = () => "O que medimos", Sr = () => "衡量指标", Cr = () => "測定項目", wr = () => "What We Measure", Tr = () => "Что мы измеряем", R = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? _r(e) : n === "es" ? vr(e) : n === "de" ? yr(e) : n === "it" ? br(e) : n === "pt" ? xr(e) : n === "zh" ? Sr(e) : n === "ja" ? Cr(e) : n === "ko" ? wr(e) : n === "ru" ? Tr(e) : gr(e);
}), Er = () => "Insights, tutorials, and analysis from the i18n community.", Dr = () => "Articles, tutoriels et analyses de la communauté i18n.", Or = () => "Información, tutoriales y análisis de la comunidad i18n.", kr = () => "Einblicke, Tutorials und Analysen aus der i18n-Community.", Ar = () => "Approfondimenti, tutorial e analisi dalla comunità i18n.", jr = () => "Insights, tutoriais e análises da comunidade i18n.", Mr = () => "来自 i18n 社区的见解、教程和分析。", Nr = () => "i18nコミュニティからのインサイト、チュートリアル、分析。", Pr = () => "Insights, tutorials, and analysis from the i18n community.", Fr = () => "Инсайты, туториалы и аналитика от сообщества i18n.", z = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Dr(e) : n === "es" ? Or(e) : n === "de" ? kr(e) : n === "it" ? Ar(e) : n === "pt" ? jr(e) : n === "zh" ? Mr(e) : n === "ja" ? Nr(e) : n === "ko" ? Pr(e) : n === "ru" ? Fr(e) : Er(e);
}), Ir = () => "Blog", Lr = () => "Blog", Rr = () => "Blog", zr = () => "Blog", Br = () => "Blog", Vr = () => "Blog", Hr = () => "博客", Ur = () => "ブログ", Wr = () => "Blog", Gr = () => "Блог", B = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Lr(e) : n === "es" ? Rr(e) : n === "de" ? zr(e) : n === "it" ? Br(e) : n === "pt" ? Vr(e) : n === "zh" ? Hr(e) : n === "ja" ? Ur(e) : n === "ko" ? Wr(e) : n === "ru" ? Gr(e) : Ir(e);
}), Kr = () => "Benchmark", qr = () => "Benchmark", Jr = () => "Benchmark", Yr = () => "Benchmark", Xr = () => "Benchmark", Zr = () => "Benchmark", Qr = () => "基准测试", $r = () => "ベンチマーク", ei = () => "Benchmark", ti = () => "Бенчмарк", V = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? qr(e) : n === "es" ? Jr(e) : n === "de" ? Yr(e) : n === "it" ? Xr(e) : n === "pt" ? Zr(e) : n === "zh" ? Qr(e) : n === "ja" ? $r(e) : n === "ko" ? ei(e) : n === "ru" ? ti(e) : Kr(e);
}), ni = () => "March 15, 2026", ri = () => "15 mars 2026", ii = () => "15 de marzo de 2026", ai = () => "15. März 2026", oi = () => "15 marzo 2026", si = () => "15 de março de 2026", ci = () => "2026年3月15日", li = () => "2026年3月15日", ui = () => "March 15, 2026", di = () => "15 марта 2026 г.", H = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ri(e) : n === "es" ? ii(e) : n === "de" ? ai(e) : n === "it" ? oi(e) : n === "pt" ? si(e) : n === "zh" ? ci(e) : n === "ja" ? li(e) : n === "ko" ? ui(e) : n === "ru" ? di(e) : ni(e);
}), fi = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", pi = () => "Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.", mi = () => "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los sorprendentes resultados.", hi = () => "Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.", gi = () => "Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.", _i = () => "Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho de bundle e DX. Aqui estão os resultados surpreendentes.", vi = () => "我们在性能、包大小和 DX 方面测试了 12 种不同的国际化库。以下是令人惊讶的结果。", yi = () => "パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。", bi = () => "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.", xi = () => "Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.", U = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? pi(e) : n === "es" ? mi(e) : n === "de" ? hi(e) : n === "it" ? gi(e) : n === "pt" ? _i(e) : n === "zh" ? vi(e) : n === "ja" ? yi(e) : n === "ko" ? bi(e) : n === "ru" ? xi(e) : fi(e);
}), Si = () => "Comparing i18n Libraries in 2026: A Deep Dive", Ci = () => "Comparer les bibliothèques i18n en 2026 : plongée détaillée", wi = () => "Comparativa de bibliotecas i18n en 2026: Un análisis profundo", Ti = () => "Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick", Ei = () => "Confronto delle librerie i18n nel 2026: un'analisi approfondita", Di = () => "Comparando bibliotecas i18n em 2026: um mergulho profundo", Oi = () => "2026 年 i18n 库对比：深度分析", ki = () => "2026年のi18nライブラリ比較：ディープダイブ", Ai = () => "Comparing i18n Libraries in 2026: A Deep Dive", ji = () => "Сравнение библиотек i18n в 2026 году: глубокое погружение", W = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Ci(e) : n === "es" ? wi(e) : n === "de" ? Ti(e) : n === "it" ? Ei(e) : n === "pt" ? Di(e) : n === "zh" ? Oi(e) : n === "ja" ? ki(e) : n === "ko" ? Ai(e) : n === "ru" ? ji(e) : Si(e);
}), Mi = () => "Tutorial", Ni = () => "Tutoriel", Pi = () => "Tutorial", Fi = () => "Tutorial", Ii = () => "Tutorial", Li = () => "Tutorial", Ri = () => "教程", zi = () => "チュートリアル", Bi = () => "Tutorial", Vi = () => "Туториал", G = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Ni(e) : n === "es" ? Pi(e) : n === "de" ? Fi(e) : n === "it" ? Ii(e) : n === "pt" ? Li(e) : n === "zh" ? Ri(e) : n === "ja" ? zi(e) : n === "ko" ? Bi(e) : n === "ru" ? Vi(e) : Mi(e);
}), Hi = () => "March 8, 2026", Ui = () => "8 mars 2026", Wi = () => "8 de marzo de 2026", Gi = () => "8. März 2026", Ki = () => "8 marzo 2026", qi = () => "8 de março de 2026", Ji = () => "2026年3月8日", Yi = () => "2026年3月8日", Xi = () => "March 8, 2026", Zi = () => "8 марта 2026 г.", K = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Ui(e) : n === "es" ? Wi(e) : n === "de" ? Gi(e) : n === "it" ? Ki(e) : n === "pt" ? qi(e) : n === "zh" ? Ji(e) : n === "ja" ? Yi(e) : n === "ko" ? Xi(e) : n === "ru" ? Zi(e) : Hi(e);
}), Qi = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", $i = () => "Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.", ea = () => "Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.", ta = () => "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Build-Zeit.", na = () => "Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni al momento della compilazione.", ra = () => "Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de build.", ia = () => "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。", aa = () => "遅延読み込み、コード分割、ビルド時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。", oa = () => "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.", sa = () => "Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время сборки.", q = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? $i(e) : n === "es" ? ea(e) : n === "de" ? ta(e) : n === "it" ? na(e) : n === "pt" ? ra(e) : n === "zh" ? ia(e) : n === "ja" ? aa(e) : n === "ko" ? oa(e) : n === "ru" ? sa(e) : Qi(e);
}), ca = () => "How to Reduce Your i18n Bundle by 60%", la = () => "Réduire votre bundle i18n de 60 %", ua = () => "Cómo reducir tu bundle i18n en un 60%", da = () => "Wie Sie Ihr i18n-Bundle um 60 % reduzieren", fa = () => "Come ridurre il bundle i18n del 60%", pa = () => "Como reduzir seu bundle i18n em 60%", ma = () => "如何将 i18n 包大小减少 60%", ha = () => "i18nバンドルを60%削減する方法", ga = () => "How to Reduce Your i18n Bundle by 60%", _a = () => "Как уменьшить бандл i18n на 60%", J = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? la(e) : n === "es" ? ua(e) : n === "de" ? da(e) : n === "it" ? fa(e) : n === "pt" ? pa(e) : n === "zh" ? ma(e) : n === "ja" ? ha(e) : n === "ko" ? ga(e) : n === "ru" ? _a(e) : ca(e);
}), va = () => "Analysis", ya = () => "Analyse", ba = () => "Análisis", xa = () => "Analyse", Sa = () => "Analisi", Ca = () => "Análise", wa = () => "分析", Ta = () => "分析", Ea = () => "Analysis", Da = () => "Анализ", Y = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ya(e) : n === "es" ? ba(e) : n === "de" ? xa(e) : n === "it" ? Sa(e) : n === "pt" ? Ca(e) : n === "zh" ? wa(e) : n === "ja" ? Ta(e) : n === "ko" ? Ea(e) : n === "ru" ? Da(e) : va(e);
}), Oa = () => "February 28, 2026", ka = () => "28 février 2026", Aa = () => "28 de febrero de 2026", ja = () => "28. Februar 2026", Ma = () => "28 febbraio 2026", Na = () => "28 de fevereiro de 2026", Pa = () => "2026年2月28日", Fa = () => "2026年2月28日", Ia = () => "February 28, 2026", La = () => "28 февраля 2026 г.", X = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ka(e) : n === "es" ? Aa(e) : n === "de" ? ja(e) : n === "it" ? Ma(e) : n === "pt" ? Na(e) : n === "zh" ? Pa(e) : n === "ja" ? Fa(e) : n === "ko" ? Ia(e) : n === "ru" ? La(e) : Oa(e);
}), Ra = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", za = () => "Panorama des tendances, patterns émergents et préférences de la communauté.", Ba = () => "Una visión general del ecosistema i18n actual en React, cubriendo tendencias, patrones emergentes y preferencias de la comunidad.", Va = () => "Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.", Ha = () => "Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.", Ua = () => "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.", Wa = () => "React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。", Ga = () => "トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。", Ka = () => "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.", qa = () => "Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.", Z = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? za(e) : n === "es" ? Ba(e) : n === "de" ? Va(e) : n === "it" ? Ha(e) : n === "pt" ? Ua(e) : n === "zh" ? Wa(e) : n === "ja" ? Ga(e) : n === "ko" ? Ka(e) : n === "ru" ? qa(e) : Ra(e);
}), Ja = () => "The State of Internationalization in React", Ya = () => "État de l'internationalisation dans l'écosystème React", Xa = () => "El estado de la internacionalización en React", Za = () => "Der Stand der Internationalisierung in React", Qa = () => "Lo stato dell'internazionalizzazione in React", $a = () => "O estado da internacionalização no React", eo = () => "React 国际化现状", to = () => "Reactにおける国際化の現状", no = () => "The State of Internationalization in React", ro = () => "Состояние интернационализации в React", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Ya(e) : n === "es" ? Xa(e) : n === "de" ? Za(e) : n === "it" ? Qa(e) : n === "pt" ? $a(e) : n === "zh" ? eo(e) : n === "ja" ? to(e) : n === "ko" ? no(e) : n === "ru" ? ro(e) : Ja(e);
}), io = () => "Tutorial", ao = () => "Tutoriel", oo = () => "Tutorial", so = () => "Tutorial", co = () => "Tutorial", lo = () => "Tutorial", uo = () => "教程", fo = () => "チュートリアル", po = () => "Tutorial", mo = () => "Туториал", ho = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ao(e) : n === "es" ? oo(e) : n === "de" ? so(e) : n === "it" ? co(e) : n === "pt" ? lo(e) : n === "zh" ? uo(e) : n === "ja" ? fo(e) : n === "ko" ? po(e) : n === "ru" ? mo(e) : io(e);
}), go = () => "February 15, 2026", _o = () => "15 février 2026", vo = () => "15 de febrero de 2026", yo = () => "15. Februar 2026", bo = () => "15 febbraio 2026", xo = () => "15 de fevereiro de 2026", So = () => "2026年2月15日", Co = () => "2026年2月15日", wo = () => "February 15, 2026", To = () => "15 февраля 2026 г.", Eo = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? _o(e) : n === "es" ? vo(e) : n === "de" ? yo(e) : n === "it" ? bo(e) : n === "pt" ? xo(e) : n === "zh" ? So(e) : n === "ja" ? Co(e) : n === "ko" ? wo(e) : n === "ru" ? To(e) : go(e);
}), Do = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", Oo = () => "Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.", ko = () => "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.", Ao = () => "Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.", jo = () => "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.", Mo = () => "Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui.", No = () => "关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。", Po = () => "50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。", Fo = () => "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.", Io = () => "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.", Lo = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Oo(e) : n === "es" ? ko(e) : n === "de" ? Ao(e) : n === "it" ? jo(e) : n === "pt" ? Mo(e) : n === "zh" ? No(e) : n === "ja" ? Po(e) : n === "ko" ? Fo(e) : n === "ru" ? Io(e) : Do(e);
}), Ro = () => "Migrating from react-i18next to Lingui", zo = () => "Migrer de react-i18next vers Lingui", Bo = () => "Migración de react-i18next a Lingui", Vo = () => "Migration von react-i18next zu Lingui", Ho = () => "Migrazione da react-i18next a Lingui", Uo = () => "Migrando de react-i18next para o Lingui", Wo = () => "从 react-i18next 迁移到 Lingui", Go = () => "react-i18nextからLinguiへの移行", Ko = () => "Migrating from react-i18next to Lingui", qo = () => "Миграция с react-i18next на Lingui", Jo = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? zo(e) : n === "es" ? Bo(e) : n === "de" ? Vo(e) : n === "it" ? Ho(e) : n === "pt" ? Uo(e) : n === "zh" ? Wo(e) : n === "ja" ? Go(e) : n === "ko" ? Ko(e) : n === "ru" ? qo(e) : Ro(e);
}), Yo = () => "Analysis", Xo = () => "Analyse", Zo = () => "Análisis", Qo = () => "Analyse", $o = () => "Analisi", es = () => "Análise", ts = () => "分析", ns = () => "分析", rs = () => "Analysis", is = () => "Анализ", as = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Xo(e) : n === "es" ? Zo(e) : n === "de" ? Qo(e) : n === "it" ? $o(e) : n === "pt" ? es(e) : n === "zh" ? ts(e) : n === "ja" ? ns(e) : n === "ko" ? rs(e) : n === "ru" ? is(e) : Yo(e);
}), os = () => "February 1, 2026", ss = () => "1er février 2026", cs = () => "1 de febrero de 2026", ls = () => "1. Februar 2026", us = () => "1 febbraio 2026", ds = () => "1 de fevereiro de 2026", fs = () => "2026年2月1日", ps = () => "2026年2月1日", ms = () => "February 1, 2026", hs = () => "1 февраля 2026 г.", gs = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ss(e) : n === "es" ? cs(e) : n === "de" ? ls(e) : n === "it" ? us(e) : n === "pt" ? ds(e) : n === "zh" ? fs(e) : n === "ja" ? ps(e) : n === "ko" ? ms(e) : n === "ru" ? hs(e) : os(e);
}), _s = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", vs = () => "Les React Server Components introduisent de nouveaux motifs pour l'i18n.", ys = () => "Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.", bs = () => "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.", xs = () => "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.", Ss = () => "React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas.", Cs = () => "React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。", ws = () => "React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。", Ts = () => "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", Es = () => "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.", Ds = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? vs(e) : n === "es" ? ys(e) : n === "de" ? bs(e) : n === "it" ? xs(e) : n === "pt" ? Ss(e) : n === "zh" ? Cs(e) : n === "ja" ? ws(e) : n === "ko" ? Ts(e) : n === "ru" ? Es(e) : _s(e);
}), Os = () => "Server Components and i18n: What Changes?", ks = () => "Server Components et i18n : qu'est-ce qui change ?", As = () => "Server Components e i18n: ¿Qué cambia?", js = () => "Server Components und i18n: Was ändert sich?", Ms = () => "Server Components e i18n: cosa cambia?", Ns = () => "Server Components e i18n: o que muda?", Ps = () => "Server Components 与 i18n：发生了什么变化？", Fs = () => "Server Componentsとi18n：何が変わるのか？", Is = () => "Server Components and i18n: What Changes?", Ls = () => "Server Components и i18n: что меняется?", Rs = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ks(e) : n === "es" ? As(e) : n === "de" ? js(e) : n === "it" ? Ms(e) : n === "pt" ? Ns(e) : n === "zh" ? Ps(e) : n === "ja" ? Fs(e) : n === "ko" ? Is(e) : n === "ru" ? Ls(e) : Os(e);
}), zs = () => "Meta", Bs = () => "Méta", Vs = () => "Meta", Hs = () => "Meta", Us = () => "Meta", Ws = () => "Meta", Gs = () => "Meta", Ks = () => "メタ", qs = () => "Meta", Js = () => "Мета", Ys = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Bs(e) : n === "es" ? Vs(e) : n === "de" ? Hs(e) : n === "it" ? Us(e) : n === "pt" ? Ws(e) : n === "zh" ? Gs(e) : n === "ja" ? Ks(e) : n === "ko" ? qs(e) : n === "ru" ? Js(e) : zs(e);
}), Xs = () => "January 20, 2026", Zs = () => "20 janvier 2026", Qs = () => "20 de enero de 2026", $s = () => "20. Januar 2026", ec = () => "20 gennaio 2026", tc = () => "20 de janeiro de 2026", nc = () => "2026年1月20日", rc = () => "2026年1月20日", ic = () => "January 20, 2026", ac = () => "20 января 2026 г.", oc = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Zs(e) : n === "es" ? Qs(e) : n === "de" ? $s(e) : n === "it" ? ec(e) : n === "pt" ? tc(e) : n === "zh" ? nc(e) : n === "ja" ? rc(e) : n === "ko" ? ic(e) : n === "ru" ? ac(e) : Xs(e);
}), sc = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", cc = () => "Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.", lc = () => "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.", uc = () => "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.", dc = () => "Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.", fc = () => "Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.", pc = () => "透明地展示我们的基准测试方法，包括测试环境、统计方法和可复现性。", mc = () => "テスト環境、統計手法、再現性など、私たちのベンチマーク手法を透明性を持って公開します。", hc = () => "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", gc = () => "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.", _c = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? cc(e) : n === "es" ? lc(e) : n === "de" ? uc(e) : n === "it" ? dc(e) : n === "pt" ? fc(e) : n === "zh" ? pc(e) : n === "ja" ? mc(e) : n === "ko" ? hc(e) : n === "ru" ? gc(e) : sc(e);
}), vc = () => "Benchmark Methodology: How We Test", yc = () => "Méthodologie de benchmark : comment nous testons", bc = () => "Metodología de benchmark: Cómo probamos", xc = () => "Benchmark-Methodik: Wie wir testen", Sc = () => "Metodologia del benchmark: come testiamo", Cc = () => "Metodologia de benchmark: como testamos", wc = () => "基准测试方法论：我们如何测试", Tc = () => "ベンチマーク手法：テスト方法について", Ec = () => "Benchmark Methodology: How We Test", Dc = () => "Методология бенчмарка: как мы тестируем", Oc = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? yc(e) : n === "es" ? bc(e) : n === "de" ? xc(e) : n === "it" ? Sc(e) : n === "pt" ? Cc(e) : n === "zh" ? wc(e) : n === "ja" ? Tc(e) : n === "ko" ? Ec(e) : n === "ru" ? Dc(e) : vc(e);
}), kc = () => "Read More →", Ac = () => "Lire la suite →", jc = () => "Leer más →", Mc = () => "Mehr lesen →", Nc = () => "Leggi di più →", Pc = () => "Ler Mais →", Fc = () => "阅读更多 →", Ic = () => "続きを読む →", Lc = () => "Read More →", Rc = () => "Читать далее →", zc = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Ac(e) : n === "es" ? jc(e) : n === "de" ? Mc(e) : n === "it" ? Nc(e) : n === "pt" ? Pc(e) : n === "zh" ? Fc(e) : n === "ja" ? Ic(e) : n === "ko" ? Lc(e) : n === "ru" ? Rc(e) : kc(e);
}), Bc = () => "Open source time", Vc = () => "Temps open source", Hc = () => "Tiempo para el código abierto", Uc = () => "Open-Source-Zeit", Wc = () => "Tempo per l'open source", Gc = () => "Tempo para o código aberto", Kc = () => "开源时间", qc = () => "オープンソースの時間", Jc = () => "Open source time", Yc = () => "Время на open source", Xc = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Vc(e) : n === "es" ? Hc(e) : n === "de" ? Uc(e) : n === "it" ? Wc(e) : n === "pt" ? Gc(e) : n === "zh" ? Kc(e) : n === "ja" ? qc(e) : n === "ko" ? Jc(e) : n === "ru" ? Yc(e) : Bc(e);
}), Zc = () => "20% time for OSS contributions", Qc = () => "20 % du temps pour contribuer à l'OSS", $c = () => "20% del tiempo para contribuciones a OSS", el = () => "20 % der Zeit für OSS-Beiträge", tl = () => "20% del tempo per contributi open source", nl = () => "20% do tempo para contribuições OSS", rl = () => "20% 的时间用于 OSS 贡献", il = () => "時間の20%をOSSへの貢献に", al = () => "20% time for OSS contributions", ol = () => "20% времени на вклад в OSS", sl = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Qc(e) : n === "es" ? $c(e) : n === "de" ? el(e) : n === "it" ? tl(e) : n === "pt" ? nl(e) : n === "zh" ? rl(e) : n === "ja" ? il(e) : n === "ko" ? al(e) : n === "ru" ? ol(e) : Zc(e);
}), cl = () => "Competitive pay", ll = () => "Rémunération compétitive", ul = () => "Salario competitivo", dl = () => "Wettbewerbsfähige Bezahlung", fl = () => "Retribuzione competitiva", pl = () => "Salário competitivo", ml = () => "具有竞争力的薪酬", hl = () => "競争力のある給与", gl = () => "Competitive pay", _l = () => "Конкурентная зарплата", vl = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ll(e) : n === "es" ? ul(e) : n === "de" ? dl(e) : n === "it" ? fl(e) : n === "pt" ? pl(e) : n === "zh" ? ml(e) : n === "ja" ? hl(e) : n === "ko" ? gl(e) : n === "ru" ? _l(e) : cl(e);
}), yl = () => "Top-of-market compensation", bl = () => "Fourchettes haut de marché", xl = () => "Compensación superior a la del mercado", Sl = () => "Überdurchschnittliche Vergütung", Cl = () => "Compensazione ai vertici del mercato", wl = () => "Remuneração acima do mercado", Tl = () => "市场顶尖的薪资水平", El = () => "市場トップクラスの報酬", Dl = () => "Top-of-market compensation", Ol = () => "Вознаграждение выше рыночного", kl = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? bl(e) : n === "es" ? xl(e) : n === "de" ? Sl(e) : n === "it" ? Cl(e) : n === "pt" ? wl(e) : n === "zh" ? Tl(e) : n === "ja" ? El(e) : n === "ko" ? Dl(e) : n === "ru" ? Ol(e) : yl(e);
}), Al = () => "Remote-first", jl = () => "Remote-first", Ml = () => "Remoto primero", Nl = () => "Remote-First", Pl = () => "Remote-first", Fl = () => "Remoto primeiro", Il = () => "远程优先", Ll = () => "リモートファースト", Rl = () => "Remote-first", zl = () => "Удаленная работа", Bl = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? jl(e) : n === "es" ? Ml(e) : n === "de" ? Nl(e) : n === "it" ? Pl(e) : n === "pt" ? Fl(e) : n === "zh" ? Il(e) : n === "ja" ? Ll(e) : n === "ko" ? Rl(e) : n === "ru" ? zl(e) : Al(e);
}), Vl = () => "Work from anywhere in the world", Hl = () => "Travaillez depuis n'importe où", Ul = () => "Trabaja desde cualquier lugar del mundo", Wl = () => "Arbeiten Sie von überall auf der Welt", Gl = () => "Lavora da qualsiasi parte del mondo", Kl = () => "Trabalhe de qualquer lugar do mundo", ql = () => "在世界任何地方工作", Jl = () => "世界中のどこからでも仕事ができます", Yl = () => "Work from anywhere in the world", Xl = () => "Работайте из любой точки мира", Zl = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Hl(e) : n === "es" ? Ul(e) : n === "de" ? Wl(e) : n === "it" ? Gl(e) : n === "pt" ? Kl(e) : n === "zh" ? ql(e) : n === "ja" ? Jl(e) : n === "ko" ? Yl(e) : n === "ru" ? Xl(e) : Vl(e);
}), Ql = () => "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.", $l = () => "Rejoignez notre mission pour améliorer l'écosystème i18n. Équipe remote-first, impact, transparence et apprentissage continu.", eu = () => "Únete a nuestra misión de mejorar el ecosistema de la internacionalización. Somos un equipo que trabaja primero en remoto y que valora el impacto, la transparencia y el aprendizaje continuo.", tu = () => "Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt.", nu = () => "Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team remote-first che apprezza l'impatto, la trasparenza e l'apprendimento continuo.", ru = () => "Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe remota que valoriza o impacto, a transparência e o aprendizado contínuo.", iu = () => "加入我们，共同改善国际化生态系统。我们是一个远程优先的团队，重视影响力、透明度和持续学习。", au = () => "国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、影響力、透明性、そして継続的な学習を重視するリモートファーストのチームです。", ou = () => "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.", su = () => "Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы — распределенная команда, которая ценит результат, прозрачность и непрерывное обучение.", cu = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? $l(e) : n === "es" ? eu(e) : n === "de" ? tu(e) : n === "it" ? nu(e) : n === "pt" ? ru(e) : n === "zh" ? iu(e) : n === "ja" ? au(e) : n === "ko" ? ou(e) : n === "ru" ? su(e) : Ql(e);
}), lu = () => "Careers", uu = () => "Carrières", du = () => "Carreras", fu = () => "Karriere", pu = () => "Carriere", mu = () => "Carreiras", hu = () => "招聘", gu = () => "採用情報", _u = () => "Careers", vu = () => "Вакансии", yu = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? uu(e) : n === "es" ? du(e) : n === "de" ? fu(e) : n === "it" ? pu(e) : n === "pt" ? mu(e) : n === "zh" ? hu(e) : n === "ja" ? gu(e) : n === "ko" ? _u(e) : n === "ru" ? vu(e) : lu(e);
}), bu = () => "Apply Now", xu = () => "Postuler", Su = () => "Postular ahora", Cu = () => "Jetzt bewerben", wu = () => "Candidati ora", Tu = () => "Candidatar-se agora", Eu = () => "立即申请", Du = () => "今すぐ応募", Ou = () => "Apply Now", ku = () => "Подать заявку", Au = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? xu(e) : n === "es" ? Su(e) : n === "de" ? Cu(e) : n === "it" ? wu(e) : n === "pt" ? Tu(e) : n === "zh" ? Eu(e) : n === "ja" ? Du(e) : n === "ko" ? Ou(e) : n === "ru" ? ku(e) : bu(e);
}), ju = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", Mu = () => "Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.", Nu = () => "Diseñar y escalar nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.", Pu = () => "Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.", Fu = () => "Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.", Iu = () => "Projete e dimensione nossa infraestrutura de benchmarking na nuvem que lida com milhares de execuções automatizadas diariamente.", Lu = () => "设计和扩展我们的云基准测试基础设施，每天处理数千次自动化运行。", Ru = () => "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャの設計とスケーリングを行います。", zu = () => "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.", Bu = () => "Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.", Vu = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Mu(e) : n === "es" ? Nu(e) : n === "de" ? Pu(e) : n === "it" ? Fu(e) : n === "pt" ? Iu(e) : n === "zh" ? Lu(e) : n === "ja" ? Ru(e) : n === "ko" ? zu(e) : n === "ru" ? Bu(e) : ju(e);
}), Hu = () => "Backend Engineer", Uu = () => "Ingénieur back-end", Wu = () => "Ingeniero Backend", Gu = () => "Backend-Ingenieur", Ku = () => "Backend Engineer", qu = () => "Engenheiro Backend", Ju = () => "后端工程师", Yu = () => "バックエンドエンジニア", Xu = () => "Backend Engineer", Zu = () => "Бэкенд-инженер", Qu = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Uu(e) : n === "es" ? Wu(e) : n === "de" ? Gu(e) : n === "it" ? Ku(e) : n === "pt" ? qu(e) : n === "zh" ? Ju(e) : n === "ja" ? Yu(e) : n === "ko" ? Xu(e) : n === "ru" ? Zu(e) : Hu(e);
}), $u = () => "Community", ed = () => "Communauté", td = () => "Comunidad", nd = () => "Community", rd = () => "Comunità", id = () => "Comunidade", ad = () => "社区", od = () => "コミュニティ", sd = () => "Community", cd = () => "Сообщество", ld = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ed(e) : n === "es" ? td(e) : n === "de" ? nd(e) : n === "it" ? rd(e) : n === "pt" ? id(e) : n === "zh" ? ad(e) : n === "ja" ? od(e) : n === "ko" ? sd(e) : n === "ru" ? cd(e) : $u(e);
}), ud = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", dd = () => "Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.", fd = () => "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.", pd = () => "Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.", md = () => "Interagisci con la comunità i18n tramite talk, workshop, post sul blog e contributi open source.", hd = () => "Envolva-se com a comunidade i18n através de palestras, workshops, postagens em blogs e contribuições de código aberto.", gd = () => "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。", _d = () => "トーク、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと関わります。", vd = () => "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.", yd = () => "Взаимодействие с сообществом i18n через доклады, воркшопы, посты в блоге и вклад в open source.", bd = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? dd(e) : n === "es" ? fd(e) : n === "de" ? pd(e) : n === "it" ? md(e) : n === "pt" ? hd(e) : n === "zh" ? gd(e) : n === "ja" ? _d(e) : n === "ko" ? vd(e) : n === "ru" ? yd(e) : ud(e);
}), xd = () => "DevRel Engineer", Sd = () => "Ingénieur DevRel", Cd = () => "Ingeniero de DevRel", wd = () => "DevRel-Ingenieur", Td = () => "Ingegnere DevRel", Ed = () => "Engenheiro de DevRel", Dd = () => "DevRel 工程师", Od = () => "DevRelエンジニア", kd = () => "DevRel Engineer", Ad = () => "DevRel-инженер", jd = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Sd(e) : n === "es" ? Cd(e) : n === "de" ? wd(e) : n === "it" ? Td(e) : n === "pt" ? Ed(e) : n === "zh" ? Dd(e) : n === "ja" ? Od(e) : n === "ko" ? kd(e) : n === "ru" ? Ad(e) : xd(e);
}), Md = () => "Documentation", Nd = () => "Documentation", Pd = () => "Documentación", Fd = () => "Dokumentation", Id = () => "Documentazione", Ld = () => "Documentação", Rd = () => "文档", zd = () => "ドキュメンテーション", Bd = () => "Documentation", Vd = () => "Документация", Hd = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Nd(e) : n === "es" ? Pd(e) : n === "de" ? Fd(e) : n === "it" ? Id(e) : n === "pt" ? Ld(e) : n === "zh" ? Rd(e) : n === "ja" ? zd(e) : n === "ko" ? Bd(e) : n === "ru" ? Vd(e) : Md(e);
}), Ud = () => "Engineering", Wd = () => "Ingénierie", Gd = () => "Ingeniería", Kd = () => "Engineering", qd = () => "Engineering", Jd = () => "Engenharia", Yd = () => "工程", Xd = () => "エンジニアリング", Zd = () => "Engineering", Qd = () => "Разработка", $d = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Wd(e) : n === "es" ? Gd(e) : n === "de" ? Kd(e) : n === "it" ? qd(e) : n === "pt" ? Jd(e) : n === "zh" ? Yd(e) : n === "ja" ? Xd(e) : n === "ko" ? Zd(e) : n === "ru" ? Qd(e) : Ud(e);
}), ef = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", tf = () => "Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.", nf = () => "Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.", rf = () => "Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.", af = () => "Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.", of = () => "Construa e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.", sf = () => "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。", cf = () => "React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールの構築と保守を行います。", lf = () => "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.", uf = () => "Разработка и поддержка нашей панели управления бенчмарками и инструментов разработчика с использованием React, TypeScript и Vite.", df = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? tf(e) : n === "es" ? nf(e) : n === "de" ? rf(e) : n === "it" ? af(e) : n === "pt" ? of(e) : n === "zh" ? sf(e) : n === "ja" ? cf(e) : n === "ko" ? lf(e) : n === "ru" ? uf(e) : ef(e);
}), ff = () => "Senior Frontend Engineer", pf = () => "Ingénieur front-end senior", mf = () => "Ingeniero Frontend Senior", hf = () => "Senior Frontend Engineer", gf = () => "Ingegnere Frontend Senior", _f = () => "Engenheiro Frontend Sênior", vf = () => "高级前端工程师", yf = () => "シニアフロントエンドエンジニア", bf = () => "Senior Frontend Engineer", xf = () => "Старший фронтенд-инженер", Sf = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? pf(e) : n === "es" ? mf(e) : n === "de" ? hf(e) : n === "it" ? gf(e) : n === "pt" ? _f(e) : n === "zh" ? vf(e) : n === "ja" ? yf(e) : n === "ko" ? bf(e) : n === "ru" ? xf(e) : ff(e);
}), Cf = () => "Full-time", wf = () => "Temps plein", Tf = () => "Tiempo completo", Ef = () => "Vollzeit", Df = () => "Tempo pieno", Of = () => "Tempo integral", kf = () => "全职", Af = () => "フルタイム", jf = () => "Full-time", Mf = () => "Полная занятость", Nf = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? wf(e) : n === "es" ? Tf(e) : n === "de" ? Ef(e) : n === "it" ? Df(e) : n === "pt" ? Of(e) : n === "zh" ? kf(e) : n === "ja" ? Af(e) : n === "ko" ? jf(e) : n === "ru" ? Mf(e) : Cf(e);
}), Pf = () => "Part-time", Ff = () => "Temps partiel", If = () => "Tiempo parcial", Lf = () => "Teilzeit", Rf = () => "Part-time", zf = () => "Tempo parcial", Bf = () => "兼职", Vf = () => "パートタイム", Hf = () => "Part-time", Uf = () => "Частичная занятость", Wf = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Ff(e) : n === "es" ? If(e) : n === "de" ? Lf(e) : n === "it" ? Rf(e) : n === "pt" ? zf(e) : n === "zh" ? Bf(e) : n === "ja" ? Vf(e) : n === "ko" ? Hf(e) : n === "ru" ? Uf(e) : Pf(e);
}), Gf = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", Kf = () => "Garantir la fiabilité des résultats par des tests et validations rigoureux.", qf = () => "Asegurar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.", Jf = () => "Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung.", Yf = () => "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.", Xf = () => "Garanta a precisão e a confiabilidade dos resultados do benchmark através de testes e validações rigorosos.", Zf = () => "通过严格的测试和验证确保基准测试结果 agrarian 准确性和可靠性。", Qf = () => "厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。", $f = () => "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.", ep = () => "Обеспечение точности и надежности результатов бенчмарков путем строгого тестирования и валидации.", tp = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Kf(e) : n === "es" ? qf(e) : n === "de" ? Jf(e) : n === "it" ? Yf(e) : n === "pt" ? Xf(e) : n === "zh" ? Zf(e) : n === "ja" ? Qf(e) : n === "ko" ? $f(e) : n === "ru" ? ep(e) : Gf(e);
}), np = () => "QA Engineer", rp = () => "Ingénieur QA", ip = () => "Ingeniero de QA", ap = () => "QA-Ingenieur", op = () => "Ingegnere QA", sp = () => "Engenheiro de QA", cp = () => "QA 工程师", lp = () => "QAエンジニア", up = () => "QA Engineer", dp = () => "QA-инженер", fp = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? rp(e) : n === "es" ? ip(e) : n === "de" ? ap(e) : n === "it" ? op(e) : n === "pt" ? sp(e) : n === "zh" ? cp(e) : n === "ja" ? lp(e) : n === "ko" ? up(e) : n === "ru" ? dp(e) : np(e);
}), pp = () => "Remote", mp = () => "À distance", hp = () => "Remoto", gp = () => "Remote", _p = () => "Remoto", vp = () => "Remoto", yp = () => "远程", bp = () => "リモート", xp = () => "Remote", Sp = () => "Удаленно", Cp = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? mp(e) : n === "es" ? hp(e) : n === "de" ? gp(e) : n === "it" ? _p(e) : n === "pt" ? vp(e) : n === "zh" ? yp(e) : n === "ja" ? bp(e) : n === "ko" ? xp(e) : n === "ru" ? Sp(e) : pp(e);
}), wp = () => "San Francisco / Remote", Tp = () => "San Francisco / télétravail", Ep = () => "San Francisco / Remoto", Dp = () => "San Francisco / Remote", Op = () => "San Francisco / Remoto", kp = () => "San Francisco / Remoto", Ap = () => "旧金山 / 远程", jp = () => "サンフランシスコ / リモート", Mp = () => "San Francisco / Remote", Np = () => "Сан-Франциско / Удаленно", Pp = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Tp(e) : n === "es" ? Ep(e) : n === "de" ? Dp(e) : n === "it" ? Op(e) : n === "pt" ? kp(e) : n === "zh" ? Ap(e) : n === "ja" ? jp(e) : n === "ko" ? Mp(e) : n === "ru" ? Np(e) : wp(e);
}), Fp = () => "Open Positions", Ip = () => "Postes ouverts", Lp = () => "Puestos vacantes", Rp = () => "Offene Stellen", zp = () => "Posizioni aperte", Bp = () => "Vagas abertas", Vp = () => "开放职位", Hp = () => "募集中の職種", Up = () => "Open Positions", Wp = () => "Открытые вакансии", Gp = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Ip(e) : n === "es" ? Lp(e) : n === "de" ? Rp(e) : n === "it" ? zp(e) : n === "pt" ? Bp(e) : n === "zh" ? Vp(e) : n === "ja" ? Hp(e) : n === "ko" ? Up(e) : n === "ru" ? Wp(e) : Fp(e);
}), Kp = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", qp = () => "Guides, références d'API et tutoriels pour la plateforme de benchmark.", Jp = () => "Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.", Yp = () => "Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.", Xp = () => "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.", Zp = () => "Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.", Qp = () => "为我们的基准测试平台编写全面的指南、API 参考和教程。", $p = () => "ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、およびチュートリアルを作成します。", em = () => "Create comprehensive guides, API references, and tutorials for our benchmarking platform.", tm = () => "Создание подробных руководств, API-справок и туториалов для нашей платформы бенчмаркинга.", nm = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? qp(e) : n === "es" ? Jp(e) : n === "de" ? Yp(e) : n === "it" ? Xp(e) : n === "pt" ? Zp(e) : n === "zh" ? Qp(e) : n === "ja" ? $p(e) : n === "ko" ? em(e) : n === "ru" ? tm(e) : Kp(e);
}), rm = () => "Technical Writer", im = () => "Rédacteur·rice technique", am = () => "Redactor técnico", om = () => "Technischer Redakteur", sm = () => "Scrittore tecnico", cm = () => "Redator técnico", lm = () => "技术作家", um = () => "テクニカルライター", dm = () => "Technical Writer", fm = () => "Технический писатель", pm = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? im(e) : n === "es" ? am(e) : n === "de" ? om(e) : n === "it" ? sm(e) : n === "pt" ? cm(e) : n === "zh" ? lm(e) : n === "ja" ? um(e) : n === "ko" ? dm(e) : n === "ru" ? fm(e) : rm(e);
}), mm = () => "Bug Report", hm = () => "Rapport de bug", gm = () => "Informe de error", _m = () => "Fehlerbericht", vm = () => "Segnalazione bug", ym = () => "Relatório de bug", bm = () => "错误报告", xm = () => "バグ報告", Sm = () => "Bug Report", Cm = () => "Отчет об ошибке", wm = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? hm(e) : n === "es" ? gm(e) : n === "de" ? _m(e) : n === "it" ? vm(e) : n === "pt" ? ym(e) : n === "zh" ? bm(e) : n === "ja" ? xm(e) : n === "ko" ? Sm(e) : n === "ru" ? Cm(e) : mm(e);
}), Tm = () => "Contribution", Em = () => "Contribution", Dm = () => "Contribución", Om = () => "Beitrag", km = () => "Contributo", Am = () => "Contribuição", jm = () => "贡献", Mm = () => "貢献", Nm = () => "Contribution", Pm = () => "Вклад в проект", Fm = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Em(e) : n === "es" ? Dm(e) : n === "de" ? Om(e) : n === "it" ? km(e) : n === "pt" ? Am(e) : n === "zh" ? jm(e) : n === "ja" ? Mm(e) : n === "ko" ? Nm(e) : n === "ru" ? Pm(e) : Tm(e);
}), Im = () => "Email", Lm = () => "E-mail", Rm = () => "Correo electrónico", zm = () => "E-Mail", Bm = () => "Email", Vm = () => "E-mail", Hm = () => "电子邮件", Um = () => "メールアドレス", Wm = () => "Email", Gm = () => "Электронная почта", Km = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Lm(e) : n === "es" ? Rm(e) : n === "de" ? zm(e) : n === "it" ? Bm(e) : n === "pt" ? Vm(e) : n === "zh" ? Hm(e) : n === "ja" ? Um(e) : n === "ko" ? Wm(e) : n === "ru" ? Gm(e) : Im(e);
}), qm = () => "you@example.com", Jm = () => "vous@exemple.com", Ym = () => "tu@ejemplo.com", Xm = () => "ihre@beispiel.de", Zm = () => "tu@esempio.com", Qm = () => "voce@exemplo.com", $m = () => "you@example.com", eh = () => "you@example.com", th = () => "you@example.com", nh = () => "you@example.com", rh = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Jm(e) : n === "es" ? Ym(e) : n === "de" ? Xm(e) : n === "it" ? Zm(e) : n === "pt" ? Qm(e) : n === "zh" ? $m(e) : n === "ja" ? eh(e) : n === "ko" ? th(e) : n === "ru" ? nh(e) : qm(e);
}), ih = () => "Message", ah = () => "Message", oh = () => "Mensaje", sh = () => "Nachricht", ch = () => "Messaggio", lh = () => "Mensagem", uh = () => "消息", dh = () => "メッセージ", fh = () => "Message", ph = () => "Сообщение", mh = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ah(e) : n === "es" ? oh(e) : n === "de" ? sh(e) : n === "it" ? ch(e) : n === "pt" ? lh(e) : n === "zh" ? uh(e) : n === "ja" ? dh(e) : n === "ko" ? fh(e) : n === "ru" ? ph(e) : ih(e);
}), hh = () => "Describe your question or idea...", gh = () => "Décrivez votre question ou idée…", _h = () => "Describe tu pregunta o idea...", vh = () => "Beschreiben Sie Ihre Frage oder Idee...", yh = () => "Descrivi la tua domanda o idea...", bh = () => "Descreva sua pergunta ou ideia...", xh = () => "描述您的问题或想法...", Sh = () => "ご質問やアイデアを記入してください...", Ch = () => "Describe your question or idea...", wh = () => "Опишите ваш вопрос или идею...", Th = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? gh(e) : n === "es" ? _h(e) : n === "de" ? vh(e) : n === "it" ? yh(e) : n === "pt" ? bh(e) : n === "zh" ? xh(e) : n === "ja" ? Sh(e) : n === "ko" ? Ch(e) : n === "ru" ? wh(e) : hh(e);
}), Eh = () => "Methodology Question", Dh = () => "Question de méthodologie", Oh = () => "Pregunta sobre la metodología", kh = () => "Frage zur Methodik", Ah = () => "Domanda sulla metodologia", jh = () => "Pergunta sobre metodologia", Mh = () => "方法论问题", Nh = () => "手法に関する質問", Ph = () => "Methodology Question", Fh = () => "Вопрос по методологии", Ih = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Dh(e) : n === "es" ? Oh(e) : n === "de" ? kh(e) : n === "it" ? Ah(e) : n === "pt" ? jh(e) : n === "zh" ? Mh(e) : n === "ja" ? Nh(e) : n === "ko" ? Ph(e) : n === "ru" ? Fh(e) : Eh(e);
}), Lh = () => "Name", Rh = () => "Nom", zh = () => "Nombre", Bh = () => "Name", Vh = () => "Nome", Hh = () => "Nome", Uh = () => "姓名", Wh = () => "名前", Gh = () => "Name", Kh = () => "Имя", qh = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Rh(e) : n === "es" ? zh(e) : n === "de" ? Bh(e) : n === "it" ? Vh(e) : n === "pt" ? Hh(e) : n === "zh" ? Uh(e) : n === "ja" ? Wh(e) : n === "ko" ? Gh(e) : n === "ru" ? Kh(e) : Lh(e);
}), Jh = () => "New Benchmark Idea", Yh = () => "Idée de benchmark", Xh = () => "Nueva idea de benchmark", Zh = () => "Neue Benchmark-Idee", Qh = () => "Nuova idea di benchmark", $h = () => "Nova ideia de benchmark", eg = () => "新基准测试想法", tg = () => "新しいベンチマークのアイデア", ng = () => "New Benchmark Idea", rg = () => "Идея нового бенчмарка", ig = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Yh(e) : n === "es" ? Xh(e) : n === "de" ? Zh(e) : n === "it" ? Qh(e) : n === "pt" ? $h(e) : n === "zh" ? eg(e) : n === "ja" ? tg(e) : n === "ko" ? ng(e) : n === "ru" ? rg(e) : Jh(e);
}), ag = () => "Other", og = () => "Autre", sg = () => "Otro", cg = () => "Sonstiges", lg = () => "Altro", ug = () => "Outro", dg = () => "其他", fg = () => "その他", pg = () => "Other", mg = () => "Другое", hg = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? og(e) : n === "es" ? sg(e) : n === "de" ? cg(e) : n === "it" ? lg(e) : n === "pt" ? ug(e) : n === "zh" ? dg(e) : n === "ja" ? fg(e) : n === "ko" ? pg(e) : n === "ru" ? mg(e) : ag(e);
}), gg = () => "Send Message", _g = () => "Envoyer", vg = () => "Enviar mensaje", yg = () => "Nachricht senden", bg = () => "Invia messaggio", xg = () => "Enviar mensagem", Sg = () => "发送消息", Cg = () => "メッセージを送信", wg = () => "Send Message", Tg = () => "Отправить сообщение", Eg = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? _g(e) : n === "es" ? vg(e) : n === "de" ? yg(e) : n === "it" ? bg(e) : n === "pt" ? xg(e) : n === "zh" ? Sg(e) : n === "ja" ? Cg(e) : n === "ko" ? wg(e) : n === "ru" ? Tg(e) : gg(e);
}), Dg = () => "Topic", Og = () => "Sujet", kg = () => "Tema", Ag = () => "Thema", jg = () => "Argomento", Mg = () => "Assunto", Ng = () => "主题", Pg = () => "トピック", Fg = () => "Topic", Ig = () => "Тема", Lg = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Og(e) : n === "es" ? kg(e) : n === "de" ? Ag(e) : n === "it" ? jg(e) : n === "pt" ? Mg(e) : n === "zh" ? Ng(e) : n === "ja" ? Pg(e) : n === "ko" ? Fg(e) : n === "ru" ? Ig(e) : Dg(e);
}), Rg = () => "Your name", zg = () => "Votre nom", Bg = () => "Tu nombre", Vg = () => "Ihr Name", Hg = () => "Il tuo nome", Ug = () => "Seu nome", Wg = () => "您的姓名", Gg = () => "お名前", Kg = () => "Your name", qg = () => "Ваше имя", Jg = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? zg(e) : n === "es" ? Bg(e) : n === "de" ? Vg(e) : n === "it" ? Hg(e) : n === "pt" ? Ug(e) : n === "zh" ? Wg(e) : n === "ja" ? Gg(e) : n === "ko" ? Kg(e) : n === "ru" ? qg(e) : Rg(e);
}), Yg = () => "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at", Xg = () => "Une idée, un bug ou envie de contribuer un benchmark ? Écrivez-nous à", Zg = () => "¿Tienes ideas, has encontrado un error o quieres contribuir con un benchmark? Ponte en contacto con nosotros en", Qg = () => "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter", $g = () => "Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo", e_ = () => "Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em", t_ = () => "有想法、发现了错误或想贡献基准测试？请联系我们：", n_ = () => "アイデアがある、バグを見つけた、またはベンチマークを投稿したいですか？こちらまでご連絡ください：", r_ = () => "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at", i_ = () => "Есть идеи, нашли баг или хотите предложить бенчмарк? Напишите нам по адресу", a_ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Xg(e) : n === "es" ? Zg(e) : n === "de" ? Qg(e) : n === "it" ? $g(e) : n === "pt" ? e_(e) : n === "zh" ? t_(e) : n === "ja" ? n_(e) : n === "ko" ? r_(e) : n === "ru" ? i_(e) : Yg(e);
}), o_ = () => "Get in Touch", s_ = () => "Contact", c_ = () => "Ponte en contacto", l_ = () => "Kontakt aufnehmen", u_ = () => "Contattaci", d_ = () => "Entre em contato", f_ = () => "取得联系", p_ = () => "お問い合わせ", m_ = () => "Get in Touch", h_ = () => "Связаться с нами", g_ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? s_(e) : n === "es" ? c_(e) : n === "de" ? l_(e) : n === "it" ? u_(e) : n === "pt" ? d_(e) : n === "zh" ? f_(e) : n === "ja" ? p_(e) : n === "ko" ? m_(e) : n === "ru" ? h_(e) : o_(e);
}), __ = () => "Everything you need to know about i18n Benchmark.", v_ = () => "Tout savoir sur i18n Benchmark.", y_ = () => "Todo lo que necesitas saber sobre i18n Benchmark.", b_ = () => "Alles, was Sie über i18n Benchmark wissen müssen.", x_ = () => "Tutto quello che c'è da sapere su i18n Benchmark.", S_ = () => "Tudo o que você precisa saber sobre o i18n Benchmark.", C_ = () => "关于 i18n 基准测试您需要了解的一切。", w_ = () => "i18n Benchmarkについて知っておくべきすべてのこと。", T_ = () => "Everything you need to know about i18n Benchmark.", E_ = () => "Все, что вам нужно знать об i18n Benchmark.", D_ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? v_(e) : n === "es" ? y_(e) : n === "de" ? b_(e) : n === "it" ? x_(e) : n === "pt" ? S_(e) : n === "zh" ? C_(e) : n === "ja" ? w_(e) : n === "ko" ? T_(e) : n === "ru" ? E_(e) : __(e);
}), O_ = () => "Frequently Asked Questions", k_ = () => "Questions fréquentes", A_ = () => "Preguntas frecuentes", j_ = () => "Häufig gestellte Fragen", M_ = () => "Domande frequenti", N_ = () => "Perguntas frequentes", P_ = () => "常见问题", F_ = () => "よくある質問", I_ = () => "Frequently Asked Questions", L_ = () => "Часто задаваемые вопросы", R_ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? k_(e) : n === "es" ? A_(e) : n === "de" ? j_(e) : n === "it" ? M_(e) : n === "pt" ? N_(e) : n === "zh" ? P_(e) : n === "ja" ? F_(e) : n === "ko" ? I_(e) : n === "ru" ? L_(e) : O_(e);
}), z_ = () => "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.", B_ = () => "Une suite open source qui mesure et compare performance, taille de bundle et expérience développeur des bibliothèques i18n pour JavaScript et React.", V_ = () => "i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.", H_ = () => "i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.", U_ = () => "i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.", W_ = () => "O i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor das bibliotecas de internacionalização para aplicações JavaScript e React.", G_ = () => "i18n 基准测试是一个开源基准测试套件，旨在衡量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。", K_ = () => "i18n Benchmarkは、JavaScriptおよびReactアプリケーション用の国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者体験を測定および比較するオープンソースのベンチマークスイートです。", q_ = () => "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.", J_ = () => "i18n Benchmark — это набор инструментов для бенчмаркинга с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчиков библиотек интернационализации для приложений на JavaScript и React.", Y_ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? B_(e) : n === "es" ? V_(e) : n === "de" ? H_(e) : n === "it" ? U_(e) : n === "pt" ? W_(e) : n === "zh" ? G_(e) : n === "ja" ? K_(e) : n === "ko" ? q_(e) : n === "ru" ? J_(e) : z_(e);
}), X_ = () => "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.", Z_ = () => "Tests standardisés sur matériel cohomogène, répétés pour la significativité statistique. Les configs sont publiques sur GitHub.", Q_ = () => "Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para asegurar la significación estadística. Todas las configuraciones de las pruebas están disponibles públicamente en nuestro repositorio de GitHub.", $_ = () => "Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrmals wiederholt, um die statistische Signifikanz sicherzustellen. Alle Testkonfigurationen sind öffentlich in unserem GitHub-Repository verfügbar.", ev = () => "Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub.", tv = () => "Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente no nosso repositório GitHub.", nv = () => "我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都重复多次以确保统计显著性。所有测试配置都在我们的 GitHub 存储库中公开可用。", rv = () => "一貫したハードウェアを使用し、分離された環境で標準化されたテストを実行します。統計的な有意性を確保するために、各ベンチマークは複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。", iv = () => "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.", av = () => "Мы запускаем стандартизированные тесты в изолированных средах на идентичном оборудовании. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории на GitHub.", ov = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Z_(e) : n === "es" ? Q_(e) : n === "de" ? $_(e) : n === "it" ? ev(e) : n === "pt" ? tv(e) : n === "zh" ? nv(e) : n === "ja" ? rv(e) : n === "ko" ? iv(e) : n === "ru" ? av(e) : X_(e);
}), sv = () => "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.", cv = () => "react-i18next, react-intl, Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee, etc.", lv = () => "Admitimos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.", uv = () => "Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.", dv = () => "Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.", fv = () => "Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.", pv = () => "我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。", mv = () => "react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、@fluent/react、およびTolgeeをサポートしています。", hv = () => "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.", gv = () => "Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.", _v = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? cv(e) : n === "es" ? lv(e) : n === "de" ? uv(e) : n === "it" ? dv(e) : n === "pt" ? fv(e) : n === "zh" ? pv(e) : n === "ja" ? mv(e) : n === "ko" ? hv(e) : n === "ru" ? gv(e) : sv(e);
}), vv = () => "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.", yv = () => "Oui — forkez le dépôt, suivez le guide de contribution et ouvrez une pull request.", bv = () => "¡Sí! Los envíos de benchmarks de la comunidad son bienvenidos. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía una pull request. Nuestro equipo revisará y fusionará los envíos que califiquen.", xv = () => "Ja! Community-Beiträge für Benchmarks sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird die qualifizierten Einsendungen prüfen und zusammenführen.", Sv = () => "Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.", Cv = () => "Sim! Contribuições de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.", wv = () => "是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审核并合并符合条件的提交。", Tv = () => "はい！コミュニティからのベンチマーク投稿を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。チームが審査し、要件を満たす投稿をマージします。", Ev = () => "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.", Dv = () => "Да! Мы приветствуем бенчмарки от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя руководству для участников, и создайте pull request. Наша команда рассмотрит и примет подходящие заявки.", Ov = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? yv(e) : n === "es" ? bv(e) : n === "de" ? xv(e) : n === "it" ? Sv(e) : n === "pt" ? Cv(e) : n === "zh" ? wv(e) : n === "ja" ? Tv(e) : n === "ko" ? Ev(e) : n === "ru" ? Dv(e) : vv(e);
}), kv = () => "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.", Av = () => "Chaque semaine sur les dernières versions stables ; une release majeure relance immédiatement les mesures.", jv = () => "Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.", Mv = () => "Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut aus. Major-Version-Releases lösen sofort einen Re-Benchmark-Zyklus aus.", Nv = () => "Rieseguiamo tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. I rilasci di versioni principali innescano un ciclo di re-benchmark immediato.", Pv = () => "Rexecutamos todos os benchmarks semanalmente contra as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo de re-benchmarking imediato.", Fv = () => "我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会立即触发重新基准测试周期。", Iv = () => "各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。", Lv = () => "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.", Rv = () => "Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий инициирует немедленный цикл повторного тестирования.", zv = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Av(e) : n === "es" ? jv(e) : n === "de" ? Mv(e) : n === "it" ? Nv(e) : n === "pt" ? Pv(e) : n === "zh" ? Fv(e) : n === "ja" ? Iv(e) : n === "ko" ? Lv(e) : n === "ru" ? Rv(e) : kv(e);
}), Bv = () => "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.", Vv = () => "Méthodologie statistique stricte, échauffement, détection d'anomalies, intervalles de confiance — données brutes publiées.", Hv = () => "Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.", Uv = () => "Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Läufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.", Wv = () => "Seguiamo una rigorosa metodologia statistica che include esecuzioni di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per la massima trasparenza.", Gv = () => "Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de valores atípicos e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.", Kv = () => "我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。", qv = () => "ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。完全な透明性を確保するため、すべての生データは分析結果とともに公開されます。", Jv = () => "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.", Yv = () => "Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и расчет доверительных интервалов. Все исходные данные публикуются вместе с нашим анализом для полной прозрачности.", Xv = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Vv(e) : n === "es" ? Hv(e) : n === "de" ? Uv(e) : n === "it" ? Wv(e) : n === "pt" ? Gv(e) : n === "zh" ? Kv(e) : n === "ja" ? qv(e) : n === "ko" ? Jv(e) : n === "ru" ? Yv(e) : Bv(e);
}), Zv = () => "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.", Qv = () => "Oui, le plan Enterprise inclut des heures pour aider les équipes à choisir une solution i18n.", $v = () => "Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones.", ey = () => "Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Ihrer Skalierung und Ihren Einschränkungen geben.", ty = () => "Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano soluzioni i18n. Possiamo fornire raccomandazioni personalizzate in base al caso d'uso specifico, alla scala e ai vincoli.", ny = () => "Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base no seu caso de uso específico, escala e restrições.", ry = () => "是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和限制提供量身定制的建议。", iy = () => "はい。Enterpriseプランには、i18nソリューションを評価しているチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。", ay = () => "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.", oy = () => "Да, наш план Enterprise включает консультации для команд, выбирающих i18n-решения. Мы можем дать индивидуальные рекомендации на основе вашего конкретного случая, масштаба и ограничений.", sy = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Qv(e) : n === "es" ? $v(e) : n === "de" ? ey(e) : n === "it" ? ty(e) : n === "pt" ? ny(e) : n === "zh" ? ry(e) : n === "ja" ? iy(e) : n === "ko" ? ay(e) : n === "ru" ? oy(e) : Zv(e);
}), cy = () => "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.", ly = () => "Benchmarks, documentation, bugs, nouvelles métriques ou sponsorship — voir GitHub.", uy = () => "Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para obtener más detalles.", dy = () => "Es gibt viele Möglichkeiten beizutragen: Benchmarks einreichen, Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.", fy = () => "Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.", py = () => "Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para mais detalhes.", my = () => "有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。", hy = () => "貢献する方法はたくさんあります。ベンチマークの投稿、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトへのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。", gy = () => "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.", _y = () => "Есть много способов: присылайте бенчмарки, улучшайте документацию, сообщайте о багах, предлагайте новые метрики или станьте спонсором проекта. Посетите наш репозиторий на GitHub для подробностей.", vy = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ly(e) : n === "es" ? uy(e) : n === "de" ? dy(e) : n === "it" ? fy(e) : n === "pt" ? py(e) : n === "zh" ? my(e) : n === "ja" ? hy(e) : n === "ko" ? gy(e) : n === "ru" ? _y(e) : cy(e);
}), yy = () => "What is i18n Benchmark?", by = () => "Qu'est-ce qu'i18n Benchmark ?", xy = () => "¿Qué es i18n Benchmark?", Sy = () => "Was ist i18n Benchmark?", Cy = () => "Cos'è i18n Benchmark?", wy = () => "O que é o i18n Benchmark?", Ty = () => "什么是 i18n 基准测试？", Ey = () => "i18n Benchmarkとは何ですか？", Dy = () => "What is i18n Benchmark?", Oy = () => "Что такое i18n Benchmark?", ky = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? by(e) : n === "es" ? xy(e) : n === "de" ? Sy(e) : n === "it" ? Cy(e) : n === "pt" ? wy(e) : n === "zh" ? Ty(e) : n === "ja" ? Ey(e) : n === "ko" ? Dy(e) : n === "ru" ? Oy(e) : yy(e);
}), Ay = () => "How are benchmarks conducted?", jy = () => "Comment sont menés les benchmarks ?", My = () => "¿Cómo se realizan los benchmarks?", Ny = () => "Wie werden Benchmarks durchgeführt?", Py = () => "Come vengono condotti i benchmark?", Fy = () => "Como os benchmarks são conduzidos?", Iy = () => "基准测试是如何进行的？", Ly = () => "ベンチマークはどのように実施されますか？", Ry = () => "How are benchmarks conducted?", zy = () => "Как проводятся бенчмарки?", By = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? jy(e) : n === "es" ? My(e) : n === "de" ? Ny(e) : n === "it" ? Py(e) : n === "pt" ? Fy(e) : n === "zh" ? Iy(e) : n === "ja" ? Ly(e) : n === "ko" ? Ry(e) : n === "ru" ? zy(e) : Ay(e);
}), Vy = () => "Which libraries are currently supported?", Hy = () => "Quelles bibliothèques sont prises en charge ?", Uy = () => "¿Qué bibliotecas se admiten actualmente?", Wy = () => "Welche Bibliotheken werden derzeit unterstützt?", Gy = () => "Quali librerie sono attualmente supportate?", Ky = () => "Quais bibliotecas são suportadas atualmente?", qy = () => "目前支持哪些库？", Jy = () => "現在サポートされているライブラリは何ですか？", Yy = () => "Which libraries are currently supported?", Xy = () => "Какие библиотеки поддерживаются в данный момент?", Zy = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Hy(e) : n === "es" ? Uy(e) : n === "de" ? Wy(e) : n === "it" ? Gy(e) : n === "pt" ? Ky(e) : n === "zh" ? qy(e) : n === "ja" ? Jy(e) : n === "ko" ? Yy(e) : n === "ru" ? Xy(e) : Vy(e);
}), Qy = () => "Can I submit my own benchmarks?", $y = () => "Puis-je proposer des benchmarks ?", eb = () => "¿Puedo enviar mis propios benchmarks?", tb = () => "Kann ich meine eigenen Benchmarks einreichen?", nb = () => "Posso inviare i miei benchmark?", rb = () => "Posso enviar meus próprios benchmarks?", ib = () => "我可以提交我自己的基准测试吗？", ab = () => "自分のベンチマークを投稿できますか？", ob = () => "Can I submit my own benchmarks?", sb = () => "Могу ли я прислать свои собственные бенчмарки?", cb = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? $y(e) : n === "es" ? eb(e) : n === "de" ? tb(e) : n === "it" ? nb(e) : n === "pt" ? rb(e) : n === "zh" ? ib(e) : n === "ja" ? ab(e) : n === "ko" ? ob(e) : n === "ru" ? sb(e) : Qy(e);
}), lb = () => "How often are benchmarks updated?", ub = () => "À quelle fréquence sont-ils mis à jour ?", db = () => "¿Con qué frecuencia se actualizan los benchmarks?", fb = () => "Wie oft werden Benchmarks aktualisiert?", pb = () => "Con quale frequenza vengono aggiornati i benchmark?", mb = () => "Com que frequência os benchmarks são atualizados?", hb = () => "基准测试多久更新一次？", gb = () => "ベンチマークはどのくらいの頻度で更新されますか？", _b = () => "How often are benchmarks updated?", vb = () => "Как часто обновляются бенчмарки?", yb = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ub(e) : n === "es" ? db(e) : n === "de" ? fb(e) : n === "it" ? pb(e) : n === "pt" ? mb(e) : n === "zh" ? hb(e) : n === "ja" ? gb(e) : n === "ko" ? _b(e) : n === "ru" ? vb(e) : lb(e);
}), bb = () => "Is the data reliable?", xb = () => "Les données sont-elles fiables ?", Sb = () => "¿Son fiables los datos?", Cb = () => "Sind die Daten zuverlässig?", wb = () => "I dati sono affidabili?", Tb = () => "Os dados são confiáveis?", Eb = () => "数据可靠吗？", Db = () => "データは信頼できますか？", Ob = () => "Is the data reliable?", kb = () => "Можно ли доверять данным?", Ab = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? xb(e) : n === "es" ? Sb(e) : n === "de" ? Cb(e) : n === "it" ? wb(e) : n === "pt" ? Tb(e) : n === "zh" ? Eb(e) : n === "ja" ? Db(e) : n === "ko" ? Ob(e) : n === "ru" ? kb(e) : bb(e);
}), jb = () => "Do you offer consulting services?", Mb = () => "Proposez-vous du conseil ?", Nb = () => "¿Ofrecen servicios de consultoría?", Pb = () => "Bieten Sie Beratungsdienstleistungen an?", Fb = () => "Offrite servizi di consulenza?", Ib = () => "Vocês oferecem serviços de consultoria?", Lb = () => "你们提供咨询服务吗？", Rb = () => "コンサルティングサービスは提供していますか？", zb = () => "Do you offer consulting services?", Bb = () => "Предоставляете ли вы консалтинговые услуги?", Vb = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Mb(e) : n === "es" ? Nb(e) : n === "de" ? Pb(e) : n === "it" ? Fb(e) : n === "pt" ? Ib(e) : n === "zh" ? Lb(e) : n === "ja" ? Rb(e) : n === "ko" ? zb(e) : n === "ru" ? Bb(e) : jb(e);
}), Hb = () => "How can I contribute?", Ub = () => "Comment contribuer ?", Wb = () => "¿Cómo puedo contribuir?", Gb = () => "Wie kann ich beitragen?", Kb = () => "Come posso contribuire?", qb = () => "Como posso contribuir?", Jb = () => "我该如何贡献？", Yb = () => "どのように貢献できますか？", Xb = () => "How can I contribute?", Zb = () => "Как я могу помочь проекту?", Qb = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Ub(e) : n === "es" ? Wb(e) : n === "de" ? Gb(e) : n === "it" ? Kb(e) : n === "pt" ? qb(e) : n === "zh" ? Jb(e) : n === "ja" ? Yb(e) : n === "ko" ? Xb(e) : n === "ru" ? Zb(e) : Hb(e);
}), $b = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", ex = () => "Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client.", tx = () => "i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente.", nx = () => "i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router.", rx = () => "i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client.", ix = () => "i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente.", ax = () => "i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。", ox = () => "i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。", sx = () => "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router.", cx = () => "i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера.", lx = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ex(e) : n === "es" ? tx(e) : n === "de" ? nx(e) : n === "it" ? rx(e) : n === "pt" ? ix(e) : n === "zh" ? ax(e) : n === "ja" ? ox(e) : n === "ko" ? sx(e) : n === "ru" ? cx(e) : $b(e);
}), ux = () => "Contact", dx = () => "Contact", fx = () => "Contacto", px = () => "Kontakt", mx = () => "Contatti", hx = () => "Contato", gx = () => "联系我们", _x = () => "お問い合わせ", vx = () => "Contact", yx = () => "Контакт", bx = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? dx(e) : n === "es" ? fx(e) : n === "de" ? px(e) : n === "it" ? mx(e) : n === "pt" ? hx(e) : n === "zh" ? gx(e) : n === "ja" ? _x(e) : n === "ko" ? vx(e) : n === "ru" ? yx(e) : ux(e);
}), xx = () => "Contributing", Sx = () => "Contribuer", Cx = () => "Contribuir", wx = () => "Beitragen", Tx = () => "Contribuire", Ex = () => "Contribuindo", Dx = () => "贡献", Ox = () => "貢献する", kx = () => "Contributing", Ax = () => "Участие в проекте", jx = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Sx(e) : n === "es" ? Cx(e) : n === "de" ? wx(e) : n === "it" ? Tx(e) : n === "pt" ? Ex(e) : n === "zh" ? Dx(e) : n === "ja" ? Ox(e) : n === "ko" ? kx(e) : n === "ru" ? Ax(e) : xx(e);
}), Mx = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", Nx = () => "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.", Px = () => "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.", Fx = () => "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.", Ix = () => "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.", Lx = () => "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.", Rx = () => "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。", zx = () => "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。", Bx = () => "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", Vx = () => "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.", Hx = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Nx(e) : n === "es" ? Px(e) : n === "de" ? Fx(e) : n === "it" ? Ix(e) : n === "pt" ? Lx(e) : n === "zh" ? Rx(e) : n === "ja" ? zx(e) : n === "ko" ? Bx(e) : n === "ru" ? Vx(e) : Mx(e);
}), Ux = () => "GitHub", Wx = () => "GitHub", Gx = () => "GitHub", Kx = () => "GitHub", qx = () => "GitHub", Jx = () => "GitHub", Yx = () => "GitHub", Xx = () => "GitHub", Zx = () => "GitHub", Qx = () => "GitHub", $x = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Wx(e) : n === "es" ? Gx(e) : n === "de" ? Kx(e) : n === "it" ? qx(e) : n === "pt" ? Jx(e) : n === "zh" ? Yx(e) : n === "ja" ? Xx(e) : n === "ko" ? Zx(e) : n === "ru" ? Qx(e) : Ux(e);
}), eS = () => "Methodology", tS = () => "Méthodologie", nS = () => "Metodología", rS = () => "Methodik", iS = () => "Metodologia", aS = () => "Metodologia", oS = () => "方法论", sS = () => "手法", cS = () => "Methodology", lS = () => "Методология", uS = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? tS(e) : n === "es" ? nS(e) : n === "de" ? rS(e) : n === "it" ? iS(e) : n === "pt" ? aS(e) : n === "zh" ? oS(e) : n === "ja" ? sS(e) : n === "ko" ? cS(e) : n === "ru" ? lS(e) : eS(e);
}), dS = () => "Resources", fS = () => "Ressources", pS = () => "Recursos", mS = () => "Ressourcen", hS = () => "Risorse", gS = () => "Recursos", _S = () => "资源", vS = () => "リソース", yS = () => "Resources", bS = () => "Ресурсы", xS = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? fS(e) : n === "es" ? pS(e) : n === "de" ? mS(e) : n === "it" ? hS(e) : n === "pt" ? gS(e) : n === "zh" ? _S(e) : n === "ja" ? vS(e) : n === "ko" ? yS(e) : n === "ru" ? bS(e) : dS(e);
}), SS = () => "i18n Benchmark", CS = () => "Benchmark i18n", wS = () => "i18n Benchmark", TS = () => "i18n Benchmark", ES = () => "i18n Benchmark", DS = () => "i18n Benchmark", OS = () => "i18n Benchmark", kS = () => "i18n Benchmark", AS = () => "i18n Benchmark", jS = () => "i18n Benchmark", MS = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? CS(e) : n === "es" ? wS(e) : n === "de" ? TS(e) : n === "it" ? ES(e) : n === "pt" ? DS(e) : n === "zh" ? OS(e) : n === "ja" ? kS(e) : n === "ko" ? AS(e) : n === "ru" ? jS(e) : SS(e);
}), NS = () => "Blog", PS = () => "Blog", FS = () => "Blog", IS = () => "Blog", LS = () => "Blog", RS = () => "Blog", zS = () => "博客", BS = () => "ブログ", VS = () => "Blog", HS = () => "Блог", US = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? PS(e) : n === "es" ? FS(e) : n === "de" ? IS(e) : n === "it" ? LS(e) : n === "pt" ? RS(e) : n === "zh" ? zS(e) : n === "ja" ? BS(e) : n === "ko" ? VS(e) : n === "ru" ? HS(e) : NS(e);
}), WS = () => "Careers", GS = () => "Carrières", KS = () => "Carreras", qS = () => "Karriere", JS = () => "Carriere", YS = () => "Carreiras", XS = () => "招聘", ZS = () => "採用情報", QS = () => "Careers", $S = () => "Вакансии", eC = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? GS(e) : n === "es" ? KS(e) : n === "de" ? qS(e) : n === "it" ? JS(e) : n === "pt" ? YS(e) : n === "zh" ? XS(e) : n === "ja" ? ZS(e) : n === "ko" ? QS(e) : n === "ru" ? $S(e) : WS(e);
}), tC = () => "Contact", nC = () => "Contact", rC = () => "Contacto", iC = () => "Kontakt", aC = () => "Contatti", oC = () => "Contato", sC = () => "联系我们", cC = () => "お問い合わせ", lC = () => "Contact", uC = () => "Контакт", dC = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? nC(e) : n === "es" ? rC(e) : n === "de" ? iC(e) : n === "it" ? aC(e) : n === "pt" ? oC(e) : n === "zh" ? sC(e) : n === "ja" ? cC(e) : n === "ko" ? lC(e) : n === "ru" ? uC(e) : tC(e);
}), fC = () => "FAQ", pC = () => "FAQ", mC = () => "FAQ", hC = () => "FAQ", gC = () => "FAQ", _C = () => "FAQ", vC = () => "常见问题", yC = () => "FAQ", bC = () => "FAQ", xC = () => "FAQ", SC = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? pC(e) : n === "es" ? mC(e) : n === "de" ? hC(e) : n === "it" ? gC(e) : n === "pt" ? _C(e) : n === "zh" ? vC(e) : n === "ja" ? yC(e) : n === "ko" ? bC(e) : n === "ru" ? xC(e) : fC(e);
}), CC = () => "Home", wC = () => "Accueil", TC = () => "Inicio", EC = () => "Home", DC = () => "Home", OC = () => "Início", kC = () => "首页", AC = () => "ホーム", jC = () => "Home", MC = () => "Главная", NC = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? wC(e) : n === "es" ? TC(e) : n === "de" ? EC(e) : n === "it" ? DC(e) : n === "pt" ? OC(e) : n === "zh" ? kC(e) : n === "ja" ? AC(e) : n === "ko" ? jC(e) : n === "ru" ? MC(e) : CC(e);
}), PC = () => "Methodology", FC = () => "Méthodologie", IC = () => "Metodología", LC = () => "Methodik", RC = () => "Metodologia", zC = () => "Metodologia", BC = () => "方法论", VC = () => "手法", HC = () => "Methodology", UC = () => "Методология", WC = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? FC(e) : n === "es" ? IC(e) : n === "de" ? LC(e) : n === "it" ? RC(e) : n === "pt" ? zC(e) : n === "zh" ? BC(e) : n === "ja" ? VC(e) : n === "ko" ? HC(e) : n === "ru" ? UC(e) : PC(e);
}), GC = () => "Mock Pages", KC = () => "Pages fictives", qC = () => "Páginas de prueba", JC = () => "Testseiten", YC = () => "Pagine di test", XC = () => "Páginas de Teste", ZC = () => "模拟页面", QC = () => "テストページ", $C = () => "Mock Pages", ew = () => "Тестовые страницы", tw = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? KC(e) : n === "es" ? qC(e) : n === "de" ? JC(e) : n === "it" ? YC(e) : n === "pt" ? XC(e) : n === "zh" ? ZC(e) : n === "ja" ? QC(e) : n === "ko" ? $C(e) : n === "ru" ? ew(e) : GC(e);
}), nw = () => "Pricing", rw = () => "Tarifs", iw = () => "Precios", aw = () => "Preise", ow = () => "Prezzi", sw = () => "Preços", cw = () => "价格", lw = () => "価格", uw = () => "Pricing", dw = () => "Цены", fw = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? rw(e) : n === "es" ? iw(e) : n === "de" ? aw(e) : n === "it" ? ow(e) : n === "pt" ? sw(e) : n === "zh" ? cw(e) : n === "ja" ? lw(e) : n === "ko" ? uw(e) : n === "ru" ? dw(e) : nw(e);
}), pw = () => "Products", mw = () => "Produits", hw = () => "Productos", gw = () => "Produkte", _w = () => "Prodotti", vw = () => "Produtos", yw = () => "产品", bw = () => "製品", xw = () => "Products", Sw = () => "Продукты", Cw = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? mw(e) : n === "es" ? hw(e) : n === "de" ? gw(e) : n === "it" ? _w(e) : n === "pt" ? vw(e) : n === "zh" ? yw(e) : n === "ja" ? bw(e) : n === "ko" ? xw(e) : n === "ru" ? Sw(e) : pw(e);
}), ww = () => "Settings", Tw = () => "Paramètres", Ew = () => "Ajustes", Dw = () => "Einstellungen", Ow = () => "Impostazioni", kw = () => "Configurações", Aw = () => "设置", jw = () => "設定", Mw = () => "Settings", Nw = () => "Настройки", Pw = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Tw(e) : n === "es" ? Ew(e) : n === "de" ? Dw(e) : n === "it" ? Ow(e) : n === "pt" ? kw(e) : n === "zh" ? Aw(e) : n === "ja" ? jw(e) : n === "ko" ? Mw(e) : n === "ru" ? Nw(e) : ww(e);
}), Fw = () => "Team", Iw = () => "Équipe", Lw = () => "Equipo", Rw = () => "Team", zw = () => "Team", Bw = () => "Equipe", Vw = () => "团队", Hw = () => "チーム", Uw = () => "Team", Ww = () => "Команда", Gw = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Iw(e) : n === "es" ? Lw(e) : n === "de" ? Rw(e) : n === "it" ? zw(e) : n === "pt" ? Bw(e) : n === "zh" ? Vw(e) : n === "ja" ? Hw(e) : n === "ko" ? Uw(e) : n === "ru" ? Ww(e) : Fw(e);
}), Kw = () => "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.", qw = () => "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.", Jw = () => "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.", Yw = () => "Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.", Xw = () => "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.", Zw = () => "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade de renderização.", Qw = () => "一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。", $w = () => "国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実世界の影響を測定するために設計されたテストアプリケーション。", eT = () => "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.", tT = () => "Тестовое приложение, разработанное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.", nT = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? qw(e) : n === "es" ? Jw(e) : n === "de" ? Yw(e) : n === "it" ? Xw(e) : n === "pt" ? Zw(e) : n === "zh" ? Qw(e) : n === "ja" ? $w(e) : n === "ko" ? eT(e) : n === "ru" ? tT(e) : Kw(e);
}), rT = () => "Methodology", iT = () => "Méthodologie", aT = () => "Metodología", oT = () => "Methodik", sT = () => "Metodologia", cT = () => "Metodologia", lT = () => "方法论", uT = () => "手法", dT = () => "Methodology", fT = () => "Методология", pT = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? iT(e) : n === "es" ? aT(e) : n === "de" ? oT(e) : n === "it" ? sT(e) : n === "pt" ? cT(e) : n === "zh" ? lT(e) : n === "ja" ? uT(e) : n === "ko" ? dT(e) : n === "ru" ? fT(e) : rT(e);
}), mT = () => "i18n Benchmark", hT = () => "Benchmark i18n", gT = () => "i18n Benchmark", _T = () => "i18n Benchmark", vT = () => "i18n Benchmark", yT = () => "i18n Benchmark", bT = () => "i18n Benchmark", xT = () => "i18n Benchmark", ST = () => "i18n Benchmark", CT = () => "i18n Benchmark", wT = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? hT(e) : n === "es" ? gT(e) : n === "de" ? _T(e) : n === "it" ? vT(e) : n === "pt" ? yT(e) : n === "zh" ? bT(e) : n === "ja" ? xT(e) : n === "ko" ? ST(e) : n === "ru" ? CT(e) : mT(e);
}), TT = () => "View Results", ET = () => "Voir les résultats", DT = () => "Ver resultados", OT = () => "Ergebnisse anzeigen", kT = () => "Visualizza i risultati", AT = () => "Ver Resultados", jT = () => "查看结果", MT = () => "結果を見る", NT = () => "View Results", PT = () => "Посмотреть результаты", FT = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ET(e) : n === "es" ? DT(e) : n === "de" ? OT(e) : n === "it" ? kT(e) : n === "pt" ? AT(e) : n === "zh" ? jT(e) : n === "ja" ? MT(e) : n === "ko" ? NT(e) : n === "ru" ? PT(e) : TT(e);
}), IT = () => "Built-in", LT = () => "Intégré", RT = () => "Integrado", zT = () => "Integriert", BT = () => "Integrato", VT = () => "Integrado", HT = () => "内置", UT = () => "内蔵", WT = () => "Built-in", GT = () => "Встроено", KT = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? LT(e) : n === "es" ? RT(e) : n === "de" ? zT(e) : n === "it" ? BT(e) : n === "pt" ? VT(e) : n === "zh" ? HT(e) : n === "ja" ? UT(e) : n === "ko" ? WT(e) : n === "ru" ? GT(e) : IT(e);
}), qT = () => "Bundle Size", JT = () => "Taille du bundle", YT = () => "Tamaño del bundle", XT = () => "Bundle-Größe", ZT = () => "Dimensione del bundle", QT = () => "Tamanho do Bundle", $T = () => "包大小", eE = () => "バンドルサイズ", tE = () => "Bundle Size", nE = () => "Размер бандла", rE = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? JT(e) : n === "es" ? YT(e) : n === "de" ? XT(e) : n === "it" ? ZT(e) : n === "pt" ? QT(e) : n === "zh" ? $T(e) : n === "ja" ? eE(e) : n === "ko" ? tE(e) : n === "ru" ? nE(e) : qT(e);
}), iE = () => "Lazy Loading", aE = () => "Chargement paresseux", oE = () => "Carga diferida", sE = () => "Lazy Loading", cE = () => "Caricamento lazy", lE = () => "Carregamento Lento", uE = () => "延迟加载", dE = () => "遅延読み込み", fE = () => "Lazy Loading", pE = () => "Ленивая загрузка", mE = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? aE(e) : n === "es" ? oE(e) : n === "de" ? sE(e) : n === "it" ? cE(e) : n === "pt" ? lE(e) : n === "zh" ? uE(e) : n === "ja" ? dE(e) : n === "ko" ? fE(e) : n === "ru" ? pE(e) : iE(e);
}), hE = () => "Library", gE = () => "Bibliothèque", _E = () => "Biblioteca", vE = () => "Bibliothek", yE = () => "Libreria", bE = () => "Biblioteca", xE = () => "库", SE = () => "ライブラリ", CE = () => "Library", wE = () => "Библиотека", TE = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? gE(e) : n === "es" ? _E(e) : n === "de" ? vE(e) : n === "it" ? yE(e) : n === "pt" ? bE(e) : n === "zh" ? xE(e) : n === "ja" ? SE(e) : n === "ko" ? CE(e) : n === "ru" ? wE(e) : hE(e);
}), EE = () => "Lookup Time", DE = () => "Temps de recherche", OE = () => "Tiempo de búsqueda", kE = () => "Lookup-Zeit", AE = () => "Tempo di ricerca", jE = () => "Tempo de Busca", ME = () => "查找时间", NE = () => "ルックアップ時間", PE = () => "Lookup Time", FE = () => "Время поиска", IE = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? DE(e) : n === "es" ? OE(e) : n === "de" ? kE(e) : n === "it" ? AE(e) : n === "pt" ? jE(e) : n === "zh" ? ME(e) : n === "ja" ? NE(e) : n === "ko" ? PE(e) : n === "ru" ? FE(e) : EE(e);
}), LE = () => "Manual", RE = () => "Manuel", zE = () => "Manual", BE = () => "Manuell", VE = () => "Manuale", HE = () => "Manual", UE = () => "手动", WE = () => "手動", GE = () => "Manual", KE = () => "Вручную", qE = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? RE(e) : n === "es" ? zE(e) : n === "de" ? BE(e) : n === "it" ? VE(e) : n === "pt" ? HE(e) : n === "zh" ? UE(e) : n === "ja" ? WE(e) : n === "ko" ? GE(e) : n === "ru" ? KE(e) : LE(e);
}), JE = () => "Sample Results", YE = () => "Exemple de résultats", XE = () => "Resultados de muestra", ZE = () => "Beispielergebnisse", QE = () => "Risultati di esempio", $E = () => "Resultados de exemplo", eD = () => "示例结果", tD = () => "サンプル結果", nD = () => "Sample Results", rD = () => "Примеры результатов", iD = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? YE(e) : n === "es" ? XE(e) : n === "de" ? ZE(e) : n === "it" ? QE(e) : n === "pt" ? $E(e) : n === "zh" ? eD(e) : n === "ja" ? tD(e) : n === "ko" ? nD(e) : n === "ru" ? rD(e) : JE(e);
}), aD = () => "Yes", oD = () => "Oui", sD = () => "Sí", cD = () => "Ja", lD = () => "Sì", uD = () => "Sim", dD = () => "是", fD = () => "はい", pD = () => "Yes", mD = () => "Да", hD = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? oD(e) : n === "es" ? sD(e) : n === "de" ? cD(e) : n === "it" ? lD(e) : n === "pt" ? uD(e) : n === "zh" ? dD(e) : n === "ja" ? fD(e) : n === "ko" ? pD(e) : n === "ru" ? mD(e) : aD(e);
}), gD = () => "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.", _D = () => "mettre à jour les traductions exige des stratégies de cache busting pour livrer du contenu à jour sans re-télécharger l'inutile.", vD = () => "actualizar las traducciones requiere estrategias de invalidación de la caché para asegurar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos no modificados.", yD = () => "Die Aktualisierung von Übersetzungen erfordert Strategien zur Cache-Invalidierung, um sicherzustellen, dass Benutzer frische Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.", bD = () => "l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza riscaricare chunk non modificati.", xD = () => "atualizar as traduções requer estratégias de invalidação de cache para garantir que os usuários obtenham conteúdo fresco sem baixar novamente os chunks inalterados.", SD = () => "更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的块。", CD = () => "翻訳を更新するには、ユーザーが変更されていないチャンクを再ダウンロードすることなく最新のコンテンツを取得できるようにするためのキャッシュバースト戦略が必要です。", wD = () => "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.", TD = () => "обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных частей.", ED = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? _D(e) : n === "es" ? vD(e) : n === "de" ? yD(e) : n === "it" ? bD(e) : n === "pt" ? xD(e) : n === "zh" ? SD(e) : n === "ja" ? CD(e) : n === "ko" ? wD(e) : n === "ru" ? TD(e) : gD(e);
}), DD = () => "Cache invalidation:", OD = () => "Invalidation du cache :", kD = () => "Invalidación de la caché:", AD = () => "Cache-Invalidierung:", jD = () => "Invalidazione della cache:", MD = () => "Invalidação de cache:", ND = () => "缓存失效：", PD = () => "キャッシュの無効化：", FD = () => "Cache invalidation:", ID = () => "Инвалидация кэша:", LD = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? OD(e) : n === "es" ? kD(e) : n === "de" ? AD(e) : n === "it" ? jD(e) : n === "pt" ? MD(e) : n === "zh" ? ND(e) : n === "ja" ? PD(e) : n === "ko" ? FD(e) : n === "ru" ? ID(e) : DD(e);
}), RD = () => "users may briefly see translation keys or a fallback language before the chunk arrives.", zD = () => "l'utilisateur peut voir brièvement des clés ou une langue de secours avant l'arrivée du fragment.", BD = () => "los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.", VD = () => "Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Fallback-Sprache, bevor der Chunk eintrifft.", HD = () => "gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.", UD = () => "usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes de o chunk chegar.", WD = () => "在块到达之前，用户可能会短暂看到翻译键或回退语言。", GD = () => "チャンクが到着する前に、ユーザーに翻訳キーまたはフォールバック言語が一時的に表示されることがあります。", KD = () => "users may briefly see translation keys or a fallback language before the chunk arrives.", qD = () => "пользователи могут кратковременно видеть ключи перевода или резервный язык до загрузки нужной части.", JD = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? zD(e) : n === "es" ? BD(e) : n === "de" ? VD(e) : n === "it" ? HD(e) : n === "pt" ? UD(e) : n === "zh" ? WD(e) : n === "ja" ? GD(e) : n === "ko" ? KD(e) : n === "ru" ? qD(e) : RD(e);
}), YD = () => "Flash of untranslated content (FOUC):", XD = () => "Flash de contenu non traduit (FOUC) :", ZD = () => "Parpadeo de contenido no traducido (FOUC):", QD = () => "Flash of Untranslated Content (FOUC):", $D = () => "Flash di contenuti non tradotti (FOUC):", eO = () => "Flash de conteúdo não traduzido (FOUC):", tO = () => "未翻译内容闪烁 (FOUC)：", nO = () => "翻訳されていないコンテンツのフラッシュ (FOUC)：", rO = () => "Flash of untranslated content (FOUC):", iO = () => "Мерцание непереведенного контента (FOUC):", aO = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? XD(e) : n === "es" ? ZD(e) : n === "de" ? QD(e) : n === "it" ? $D(e) : n === "pt" ? eO(e) : n === "zh" ? tO(e) : n === "ja" ? nO(e) : n === "ko" ? rO(e) : n === "ru" ? iO(e) : YD(e);
}), oO = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", sO = () => "Cette appli de test offre un environnement contrôlé — 10 pages au contenu réaliste — pour comparer les bibliothèques i18n sur trois axes : le poids ajouté au bundle JavaScript, le temps passé à analyser et afficher le texte traduit, et l'efficacité du découpage de code et du chargement paresseux. Chaque bibliothèque est intégrée dans la même base pour des résultats comparables.", cO = () => "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.", lO = () => "Diese Testanwendung bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken auf drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe Anwendung integriert, sodass die Ergebnisse direkt vergleichbar sind.", uO = () => "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.", dO = () => "Este app de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada no mesmo app para que os resultados sejam diretamente comparáveis.", fO = () => "此测试应用提供了一个受控环境 — 10 个具有真实内容的页面 — 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。", pO = () => "このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、JavaScriptバンドルに追加される重量、翻訳コンテンツの解析とレンダリングに費される時間、およびコード分割と遅延読み込み戦略の効果という3つの軸でi18nライブラリを比較します。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。", mO = () => "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", hO = () => "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему JavaScript-бандлу, время, затрачиваемое на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.", gO = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? sO(e) : n === "es" ? cO(e) : n === "de" ? lO(e) : n === "it" ? uO(e) : n === "pt" ? dO(e) : n === "zh" ? fO(e) : n === "ja" ? pO(e) : n === "ko" ? mO(e) : n === "ru" ? hO(e) : oO(e);
}), _O = () => "What this benchmark measures", vO = () => "Ce que mesure ce benchmark", yO = () => "Qué mide este benchmark", bO = () => "Was dieser Benchmark misst", xO = () => "Cosa misura questo benchmark", SO = () => "O que este benchmark mede", CO = () => "此基准测试衡量的内容", wO = () => "このベンチマークが測定するもの", TO = () => "What this benchmark measures", EO = () => "Что измеряет этот бенчмарк", DO = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? vO(e) : n === "es" ? yO(e) : n === "de" ? bO(e) : n === "it" ? xO(e) : n === "pt" ? SO(e) : n === "zh" ? CO(e) : n === "ja" ? wO(e) : n === "ko" ? TO(e) : n === "ru" ? EO(e) : _O(e);
}), OO = () => "The JSON must be parsed on every page load — blocking the main thread.", kO = () => "Le JSON doit être analysé à chaque chargement de page — en bloquant le thread principal.", AO = () => "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.", jO = () => "Das JSON muss bei jedem Seitenladen analysiert werden — was den Haupt-Thread blockiert.", MO = () => "Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale.", NO = () => "O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.", PO = () => "每次页面加载时都必须解析 JSON — 阻塞主线程。", FO = () => "ページを読み込むたびにJSONを解析する必要があり、メインスレッドをブロックします。", IO = () => "The JSON must be parsed on every page load — blocking the main thread.", LO = () => "JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.", RO = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? kO(e) : n === "es" ? AO(e) : n === "de" ? jO(e) : n === "it" ? MO(e) : n === "pt" ? NO(e) : n === "zh" ? PO(e) : n === "ja" ? FO(e) : n === "ko" ? IO(e) : n === "ru" ? LO(e) : OO(e);
}), zO = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", BO = () => "Les architectures fondées sur le contexte peuvent provoquer des re-rendus en cascade quand la langue change, car chaque consommateur est notifié même si ses clés n'ont pas changé.", VO = () => "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.", HO = () => "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich die Sprache ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.", UO = () => "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.", WO = () => "Arquiteturas baseadas em contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.", GO = () => "当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使特定键未更改，每个使用者也会收到通知。", KO = () => "コンテキストベースのアーキテクチャでは、特定のキーが変更されていなくてもすべての消費者に通知されるため、ロケール変更時にカスケードレンダリングが発生する可能性があります。", qO = () => "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", JO = () => "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при смене языка, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.", YO = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? BO(e) : n === "es" ? VO(e) : n === "de" ? HO(e) : n === "it" ? UO(e) : n === "pt" ? WO(e) : n === "zh" ? GO(e) : n === "ja" ? KO(e) : n === "ko" ? qO(e) : n === "ru" ? JO(e) : zO(e);
}), XO = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", ZO = () => "Lors du rendu serveur, tout le dictionnaire est sérialisé dans le HTML, alourdissant le document à télécharger et à hydrater.", QO = () => "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.", $O = () => "Beim serverseitigen Rendering wird das vollständige Verzeichnis in die HTML-Nutzlast serialisiert, was die Dokumentgröße erhöht, die heruntergeladen und hydriert werden muss.", ek = () => "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.", tk = () => "Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.", nk = () => "在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。", rk = () => "サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。", ik = () => "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", ak = () => "При серверном рендеринге весь словарь сериализуется в HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать.", ok = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ZO(e) : n === "es" ? QO(e) : n === "de" ? $O(e) : n === "it" ? ek(e) : n === "pt" ? tk(e) : n === "zh" ? nk(e) : n === "ja" ? rk(e) : n === "ko" ? ik(e) : n === "ru" ? ak(e) : XO(e);
}), sk = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", ck = () => "Beaucoup de bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsqu'il est volumineux (milliers de clés), chaque composant qui consomme des traductions garde une référence à tout le dictionnaire. Cela signifie :", lk = () => "Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:", uk = () => "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Verzeichnis. Das bedeutet:", dk = () => "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:", fk = () => "Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:", pk = () => "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会保留对整个字典的引用。这意味着：", mk = () => "多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：", hk = () => "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", gk = () => "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:", _k = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ck(e) : n === "es" ? lk(e) : n === "de" ? uk(e) : n === "it" ? dk(e) : n === "pt" ? fk(e) : n === "zh" ? pk(e) : n === "ja" ? mk(e) : n === "ko" ? hk(e) : n === "ru" ? gk(e) : sk(e);
}), vk = () => "Why a single large JSON can hurt performance", yk = () => "Pourquoi un unique gros JSON peut nuire aux performances", bk = () => "Por qué un solo JSON grande puede perjudicar el rendimiento", xk = () => "Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann", Sk = () => "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni", Ck = () => "Por que um único JSON grande pode prejudicar o desempenho", wk = () => "为什么单个大型 JSON 会损害性能", Tk = () => "なぜ1つの大きなJSONがパフォーマンスを低下させるのか", Ek = () => "Why a single large JSON can hurt performance", Dk = () => "Почему один большой JSON может снизить производительность", Ok = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? yk(e) : n === "es" ? bk(e) : n === "de" ? xk(e) : n === "it" ? Sk(e) : n === "pt" ? Ck(e) : n === "zh" ? wk(e) : n === "ja" ? Tk(e) : n === "ko" ? Ek(e) : n === "ru" ? Dk(e) : vk(e);
}), kk = () => "Understanding the Impact", Ak = () => "Comprendre l'impact", jk = () => "Entendiendo el impacto", Mk = () => "Die Auswirkungen verstehen", Nk = () => "Capire l'impatto", Pk = () => "Entendendo o impacto", Fk = () => "理解影响", Ik = () => "影響を理解する", Lk = () => "Understanding the Impact", Rk = () => "Понимание влияния", zk = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Ak(e) : n === "es" ? jk(e) : n === "de" ? Mk(e) : n === "it" ? Nk(e) : n === "pt" ? Pk(e) : n === "zh" ? Fk(e) : n === "ja" ? Ik(e) : n === "ko" ? Lk(e) : n === "ru" ? Rk(e) : kk(e);
}), Bk = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", Vk = () => "Découper les traductions par route ou espace de noms réduit fortement la charge initiale, mais pose de nouveaux défis :", Hk = () => "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:", Uk = () => "Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Nutzlast drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:", Wk = () => "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:", Gk = () => "Dividir as traduções em pedaços por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:", Kk = () => "将翻译拆分为每个路由或每个命名空间的块可以大幅减少初始负载。但它引入了新的挑战：", qk = () => "翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新しい課題も生じます：", Jk = () => "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", Yk = () => "Разделение переводов на части для каждого маршрута или пространства имен может значительно уменьшить начальный объем данных. Но это создает новые проблемы:", Xk = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Vk(e) : n === "es" ? Hk(e) : n === "de" ? Uk(e) : n === "it" ? Wk(e) : n === "pt" ? Gk(e) : n === "zh" ? Kk(e) : n === "ja" ? qk(e) : n === "ko" ? Jk(e) : n === "ru" ? Yk(e) : Bk(e);
}), Zk = () => "The trade-offs of dynamic loading", Qk = () => "Les compromis du chargement dynamique", $k = () => "Las compensaciones de la carga dinámica", eA = () => "Die Kompromisse beim dynamischen Laden", tA = () => "I compromessi del caricamento dinamico", nA = () => "Os trade-offs do carregamento dinâmico", rA = () => "动态加载的权衡", iA = () => "動的読み込みのトレードオフ", aA = () => "The trade-offs of dynamic loading", oA = () => "Компромиссы динамической загрузки", sA = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Qk(e) : n === "es" ? $k(e) : n === "de" ? eA(e) : n === "it" ? tA(e) : n === "pt" ? nA(e) : n === "zh" ? rA(e) : n === "ja" ? iA(e) : n === "ko" ? aA(e) : n === "ru" ? oA(e) : Zk(e);
}), cA = () => "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.", lA = () => "l'application doit d'abord charger, déterminer la langue, puis récupérer le bon fragment — avec des allers-retours réseau supplémentaires.", uA = () => "la aplicación debe primero cargarse, determinar el idioma, luego obtener el fragmento correcto, lo que añade viajes de red de ida y vuelta.", dA = () => "Die App muss zuerst laden, die Sprache bestimmen und dann den richtigen Chunk abrufen — was zusätzliche Netzwerk-Roundtrips verursacht.", fA = () => "l'app deve prima caricarsi, determinare la locale, quindi recuperare il chunk corretto — aggiungendo round-trip di rete.", pA = () => "o app deve primeiro carregar, determinar a localidade, então buscar o chunk certo — adicionando network round-trips.", mA = () => "应用必须首先加载，确定语言环境，然后获取正确的块 — 增加了网络往返时间。", hA = () => "アプリは最初に読み込み、ロケールを決定し、次に正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。", gA = () => "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.", _A = () => "приложение должно сначала загрузиться, определить язык, а затем получить нужную часть, что добавляет сетевые задержки.", vA = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? lA(e) : n === "es" ? uA(e) : n === "de" ? dA(e) : n === "it" ? fA(e) : n === "pt" ? pA(e) : n === "zh" ? mA(e) : n === "ja" ? hA(e) : n === "ko" ? gA(e) : n === "ru" ? _A(e) : cA(e);
}), yA = () => "Waterfall requests:", bA = () => "Requêtes en cascade :", xA = () => "Solicitudes en cascada:", SA = () => "Waterfall-Anfragen:", CA = () => "Richieste a cascata:", wA = () => "Requisições em cascata:", TA = () => "瀑布流请求：", EA = () => "ウォーターフォールリクエスト：", DA = () => "Waterfall requests:", OA = () => "Каскадные запросы:", kA = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? bA(e) : n === "es" ? xA(e) : n === "de" ? SA(e) : n === "it" ? CA(e) : n === "pt" ? wA(e) : n === "zh" ? TA(e) : n === "ja" ? EA(e) : n === "ko" ? DA(e) : n === "ru" ? OA(e) : yA(e);
}), AA = () => "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.", jA = () => "Le bundle est l'ensemble des données livrées à chaque utilisateur dans le monde. Un bundle plus lourd implique des temps de téléchargement plus longs — surtout sur des connexions 3G lentes encore très répandues. Les bibliothèques i18n ont des poids très variables : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, sans compter les fichiers de traduction.", MA = () => "El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.", NA = () => "Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst.", PA = () => "Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.", FA = () => "O bundle representa os dados enviados para cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas, comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código runtime, além dos próprios arquivos de tradução.", IA = () => "包是发送给全球每个用户的数据。较大的包意味着较长的下载时间 — 特别是在许多地区常见的慢速 3G 连接下。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。", LA = () => "バンドルは世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。これは多くの地域で一般的な低速な3G接続において特に顕著です。i18nライブラリの重量は、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体に至るまで、劇的に異なります。", RA = () => "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.", zA = () => "Бандл — это данные, отправляемые каждому пользователю по всему миру. Больший бандл означает более длительное время загрузки — особенно при медленном 3G-соединении, распространенном во многих регионах. Вес библиотек i18n сильно варьируется: от нескольких килобайт до десятков килобайт кода среды выполнения, плюс сами файлы переводов.", BA = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? jA(e) : n === "es" ? MA(e) : n === "de" ? NA(e) : n === "it" ? PA(e) : n === "pt" ? FA(e) : n === "zh" ? IA(e) : n === "ja" ? LA(e) : n === "ko" ? RA(e) : n === "ru" ? zA(e) : AA(e);
}), VA = () => "Bundle Size", HA = () => "Taille du bundle", UA = () => "Tamaño del bundle", WA = () => "Bundle-Größe", GA = () => "Dimensione del bundle", KA = () => "Tamanho do bundle", qA = () => "包大小", JA = () => "バンドルサイズ", YA = () => "Bundle Size", XA = () => "Размер бандла", ZA = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? HA(e) : n === "es" ? UA(e) : n === "de" ? WA(e) : n === "it" ? GA(e) : n === "pt" ? KA(e) : n === "zh" ? qA(e) : n === "ja" ? JA(e) : n === "ko" ? YA(e) : n === "ru" ? XA(e) : VA(e);
}), QA = () => "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.", $A = () => "Charger toutes les traductions d'un coup surdimensionne la charge initiale. Le chargement paresseux découpe les traductions par route ou espace de noms et n'envoie que le nécessaire. Il introduit pourtant ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité du cache. Il faut mesurer les deux approches.", ej = () => "Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.", tj = () => "Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Nutzlast. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Flash of Untranslated Content und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich.", nj = () => "Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.", rj = () => "Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento lento introduz seus próprios trade-offs: requisições em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.", ij = () => "预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。", aj = () => "すべての翻訳を事前読み込みすると、初期ペイロードに過負荷がかかります。動的（遅延）読み込みは翻訳をルートや名前空間ごとに分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどのトレードオフがあります。両方の戦略を測定することが不可欠です。", oj = () => "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.", sj = () => "Загрузка всех переводов заранее перегружает начальный объем данных. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы, мерцание непереведенного контента и сложность кэширования. Важно измерять обе стратегии.", cj = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? $A(e) : n === "es" ? ej(e) : n === "de" ? tj(e) : n === "it" ? nj(e) : n === "pt" ? rj(e) : n === "zh" ? ij(e) : n === "ja" ? aj(e) : n === "ko" ? oj(e) : n === "ru" ? sj(e) : QA(e);
}), lj = () => "Dynamic Loading", uj = () => "Chargement dynamique", dj = () => "Carga dinámica", fj = () => "Dynamisches Laden", pj = () => "Caricamento dinamico", mj = () => "Carregamento dinâmico", hj = () => "动态加载", gj = () => "動的読み込み", _j = () => "Dynamic Loading", vj = () => "Динамическая загрузка", yj = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? uj(e) : n === "es" ? dj(e) : n === "de" ? fj(e) : n === "it" ? pj(e) : n === "pt" ? mj(e) : n === "zh" ? hj(e) : n === "ja" ? gj(e) : n === "ko" ? _j(e) : n === "ru" ? vj(e) : lj(e);
}), bj = () => "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).", xj = () => "Brancher un gros dictionnaire JSON sur chaque composant crée une dépendance cachée : tout changement de contexte de traduction peut déclencher des re-rendus sur tout l'arbre. Lors de l'hydratation SSR, analyser et attacher d'immenses objets de traduction ajoute de la latence avant que la page soit interactive — impact direct sur le Time to Interactive (TTI).", Sj = () => "Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).", Cj = () => "Die Anbindung eines großen JSON-Verzeichnisses an jede Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydrierung verursacht das Parsen und Anhängen massiver Übersetzungsobjekte Latenzzeit, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.", wj = () => "Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).", Tj = () => "Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar renderizações em toda a árvore. Durante a hidratação SSR, analisar e anexar objetos de tradução massivos adiciona latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).", Ej = () => "将大型 JSON 字典连接到每个组件会创建隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加海量的翻译对象会增加页面变为可交互之前的延迟 — 直接影响可交互时间 (TTI)。", Dj = () => "巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体の再レンダリングを引き起こす可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでのレイテンシを増加させ、Time to Interactive (TTI) に直接影響します。", Oj = () => "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).", kj = () => "Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг по всему дереву. Во время SSR-гидратации парсинг и присоединение массивных объектов перевода добавляет задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI).", Aj = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? xj(e) : n === "es" ? Sj(e) : n === "de" ? Cj(e) : n === "it" ? wj(e) : n === "pt" ? Tj(e) : n === "zh" ? Ej(e) : n === "ja" ? Dj(e) : n === "ko" ? Oj(e) : n === "ru" ? kj(e) : bj(e);
}), jj = () => "Rendering & Hydration", Mj = () => "Rendu et hydratation", Nj = () => "Renderizado e hidratación", Pj = () => "Rendering & Hydrierung", Fj = () => "Rendering e idratazione", Ij = () => "Renderização e hidratação", Lj = () => "渲染与注水", Rj = () => "レンダリングとハイドレーション", zj = () => "Rendering & Hydration", Bj = () => "Рендеринг и гидратация", Vj = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Mj(e) : n === "es" ? Nj(e) : n === "de" ? Pj(e) : n === "it" ? Fj(e) : n === "pt" ? Ij(e) : n === "zh" ? Lj(e) : n === "ja" ? Rj(e) : n === "ko" ? zj(e) : n === "ru" ? Bj(e) : jj(e);
}), Hj = () => "Why These Metrics Matter", Uj = () => "Pourquoi ces métriques comptent", Wj = () => "Por qué son importantes estas métricas", Gj = () => "Warum diese Metriken wichtig sind", Kj = () => "Perché queste metriche sono importanti", qj = () => "Por que estas métricas importam", Jj = () => "为什么这些指标很重要", Yj = () => "なぜこれらの指標が重要なのか", Xj = () => "Why These Metrics Matter", Zj = () => "Почему эти метрики важны", Qj = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Uj(e) : n === "es" ? Wj(e) : n === "de" ? Gj(e) : n === "it" ? Kj(e) : n === "pt" ? qj(e) : n === "zh" ? Jj(e) : n === "ja" ? Yj(e) : n === "ko" ? Xj(e) : n === "ru" ? Zj(e) : Hj(e);
}), $j = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", eM = () => "⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.", tM = () => "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.", nM = () => "⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst.", rM = () => "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.", iM = () => "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real.", aM = () => "⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。", oM = () => "⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。", sM = () => "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", cM = () => "⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом.", lM = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? eM(e) : n === "es" ? tM(e) : n === "de" ? nM(e) : n === "it" ? rM(e) : n === "pt" ? iM(e) : n === "zh" ? aM(e) : n === "ja" ? oM(e) : n === "ko" ? sM(e) : n === "ru" ? cM(e) : $j(e);
}), uM = () => "Oops! Page not found", dM = () => "Oups ! Page introuvable", fM = () => "¡Ups! Página no encontrada", pM = () => "Hoppla! Seite nicht gefunden", mM = () => "Ops! Pagina non trovata", hM = () => "Ops! Página não encontrada", gM = () => "哎呀！页面未找到", _M = () => "おっと！ページが見つかりません", vM = () => "Oops! Page not found", yM = () => "Упс! Страница не найдена", bM = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? dM(e) : n === "es" ? fM(e) : n === "de" ? pM(e) : n === "it" ? mM(e) : n === "pt" ? hM(e) : n === "zh" ? gM(e) : n === "ja" ? _M(e) : n === "ko" ? vM(e) : n === "ru" ? yM(e) : uM(e);
}), xM = () => "Return to Home", SM = () => "Retour à l'accueil", CM = () => "Volver al inicio", wM = () => "Zurück zur Startseite", TM = () => "Torna alla Home", EM = () => "Voltar para o início", DM = () => "返回首页", OM = () => "ホームに戻る", kM = () => "Return to Home", AM = () => "Вернуться на главную", jM = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? SM(e) : n === "es" ? CM(e) : n === "de" ? wM(e) : n === "it" ? TM(e) : n === "pt" ? EM(e) : n === "zh" ? DM(e) : n === "ja" ? OM(e) : n === "ko" ? kM(e) : n === "ru" ? AM(e) : xM(e);
}), MM = () => "404", NM = () => "404", PM = () => "404", FM = () => "404", IM = () => "404", LM = () => "404", RM = () => "404", zM = () => "404", BM = () => "404", VM = () => "404", HM = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? NM(e) : n === "es" ? PM(e) : n === "de" ? FM(e) : n === "it" ? IM(e) : n === "pt" ? LM(e) : n === "zh" ? RM(e) : n === "ja" ? zM(e) : n === "ko" ? BM(e) : n === "ru" ? VM(e) : MM(e);
}), UM = () => "Choose the plan that fits your team. No hidden fees.", WM = () => "Choisissez l'offre adaptée à votre équipe. Sans frais cachés.", GM = () => "Elige el plan que mejor se adapte a tu equipo. Sin cuotas ocultas.", KM = () => "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.", qM = () => "Scegli il piano più adatto al tuo team. Nessun costo nascosto.", JM = () => "Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.", YM = () => "选择适合您团队的计划。无隐藏费用。", XM = () => "チームに合ったプランをお選びください。隠れた費用はありません。", ZM = () => "Choose the plan that fits your team. No hidden fees.", QM = () => "Выберите подходящий план для вашей команды. Никаких скрытых комиссий.", $M = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? WM(e) : n === "es" ? GM(e) : n === "de" ? KM(e) : n === "it" ? qM(e) : n === "pt" ? JM(e) : n === "zh" ? YM(e) : n === "ja" ? XM(e) : n === "ko" ? ZM(e) : n === "ru" ? QM(e) : UM(e);
}), eN = () => "Simple, Transparent Pricing", tN = () => "Tarification simple et transparente", nN = () => "Precios sencillos y transparentes", rN = () => "Einfache, transparente Preisgestaltung", iN = () => "Prezzi semplici e trasparenti", aN = () => "Preços simples e transparentes", oN = () => "简单透明的定价", sN = () => "シンプルで透明性の高い価格設定", cN = () => "Simple, Transparent Pricing", lN = () => "Простые и прозрачные цены", uN = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? tN(e) : n === "es" ? nN(e) : n === "de" ? rN(e) : n === "it" ? iN(e) : n === "pt" ? aN(e) : n === "zh" ? oN(e) : n === "ja" ? sN(e) : n === "ko" ? cN(e) : n === "ru" ? lN(e) : eN(e);
}), dN = () => "Contact Sales", fN = () => "Contacter les ventes", pN = () => "Contactar con ventas", mN = () => "Vertrieb kontaktieren", hN = () => "Contatta l'ufficio vendite", gN = () => "Contatar vendas", _N = () => "联系销售", vN = () => "営業に問い合わせる", yN = () => "Contact Sales", bN = () => "Связаться с отделом продаж", xN = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? fN(e) : n === "es" ? pN(e) : n === "de" ? mN(e) : n === "it" ? hN(e) : n === "pt" ? gN(e) : n === "zh" ? _N(e) : n === "ja" ? vN(e) : n === "ko" ? yN(e) : n === "ru" ? bN(e) : dN(e);
}), SN = () => "Everything in Pro", CN = () => "Tout le Pro", wN = () => "Todo lo que hay en Pro", TN = () => "Alles in Pro enthalten", EN = () => "Tutto quello che c'è in Pro", DN = () => "Tudo o que está no Pro", ON = () => "包含专业版中的所有功能", kN = () => "Proプランのすべてを含む", AN = () => "Everything in Pro", jN = () => "Все, что есть в Pro", MN = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? CN(e) : n === "es" ? wN(e) : n === "de" ? TN(e) : n === "it" ? EN(e) : n === "pt" ? DN(e) : n === "zh" ? ON(e) : n === "ja" ? kN(e) : n === "ko" ? AN(e) : n === "ru" ? jN(e) : SN(e);
}), NN = () => "On-premise option", PN = () => "Option on-premise", FN = () => "Opción on-premise", IN = () => "On-Premise-Option", LN = () => "Opzione on-premise", RN = () => "Opção on-premise", zN = () => "本地部署选项", BN = () => "オンプレミスオプション", VN = () => "On-premise option", HN = () => "Локальная установка", UN = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? PN(e) : n === "es" ? FN(e) : n === "de" ? IN(e) : n === "it" ? LN(e) : n === "pt" ? RN(e) : n === "zh" ? zN(e) : n === "ja" ? BN(e) : n === "ko" ? VN(e) : n === "ru" ? HN(e) : NN(e);
}), WN = () => "SSO & SAML", GN = () => "SSO et SAML", KN = () => "SSO y SAML", qN = () => "SSO & SAML", JN = () => "SSO e SAML", YN = () => "SSO e SAML", XN = () => "SSO 和 SAML", ZN = () => "SSO & SAML", QN = () => "SSO & SAML", $N = () => "SSO и SAML", eP = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? GN(e) : n === "es" ? KN(e) : n === "de" ? qN(e) : n === "it" ? JN(e) : n === "pt" ? YN(e) : n === "zh" ? XN(e) : n === "ja" ? ZN(e) : n === "ko" ? QN(e) : n === "ru" ? $N(e) : WN(e);
}), tP = () => "Dedicated account manager", nP = () => "Account manager dédié", rP = () => "Gestor de cuentas dedicado", iP = () => "Dedizierter Account Manager", aP = () => "Account manager dedicato", oP = () => "Gerente de conta dedicado", sP = () => "专属客户经理", cP = () => "専任のアカウントマネージャー", lP = () => "Dedicated account manager", uP = () => "Персональный менеджер", dP = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? nP(e) : n === "es" ? rP(e) : n === "de" ? iP(e) : n === "it" ? aP(e) : n === "pt" ? oP(e) : n === "zh" ? sP(e) : n === "ja" ? cP(e) : n === "ko" ? lP(e) : n === "ru" ? uP(e) : tP(e);
}), fP = () => "Custom SLAs", pP = () => "SLA sur mesure", mP = () => "SLAs personalizados", hP = () => "Individuelle SLAs", gP = () => "SLA personalizzati", _P = () => "SLAs personalizados", vP = () => "定制 SLA", yP = () => "カスタムSLA", bP = () => "Custom SLAs", xP = () => "Индивидуальные SLA", SP = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? pP(e) : n === "es" ? mP(e) : n === "de" ? hP(e) : n === "it" ? gP(e) : n === "pt" ? _P(e) : n === "zh" ? vP(e) : n === "ja" ? yP(e) : n === "ko" ? bP(e) : n === "ru" ? xP(e) : fP(e);
}), CP = () => "Audit logs", wP = () => "Journaux d'audit", TP = () => "Registros de auditoría", EP = () => "Audit-Protokolle", DP = () => "Log di controllo", OP = () => "Logs de auditoria", kP = () => "审计日志", AP = () => "監査ログ", jP = () => "Audit logs", MP = () => "Журналы аудита", NP = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? wP(e) : n === "es" ? TP(e) : n === "de" ? EP(e) : n === "it" ? DP(e) : n === "pt" ? OP(e) : n === "zh" ? kP(e) : n === "ja" ? AP(e) : n === "ko" ? jP(e) : n === "ru" ? MP(e) : CP(e);
}), PP = () => "Training sessions", FP = () => "Sessions de formation", IP = () => "Sesiones de formación", LP = () => "Schulungssitzungen", RP = () => "Sessioni di formazione", zP = () => "Sessões de treinamento", BP = () => "培训课程", VP = () => "トレーニングセッション", HP = () => "Training sessions", UP = () => "Обучающие сессии", WP = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? FP(e) : n === "es" ? IP(e) : n === "de" ? LP(e) : n === "it" ? RP(e) : n === "pt" ? zP(e) : n === "zh" ? BP(e) : n === "ja" ? VP(e) : n === "ko" ? HP(e) : n === "ru" ? UP(e) : PP(e);
}), GP = () => "Enterprise", KP = () => "Enterprise", qP = () => "Enterprise", JP = () => "Enterprise", YP = () => "Enterprise", XP = () => "Enterprise", ZP = () => "企业版", QP = () => "エンタープライズ", $P = () => "Enterprise", eF = () => "Enterprise", tF = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? KP(e) : n === "es" ? qP(e) : n === "de" ? JP(e) : n === "it" ? YP(e) : n === "pt" ? XP(e) : n === "zh" ? ZP(e) : n === "ja" ? QP(e) : n === "ko" ? $P(e) : n === "ru" ? eF(e) : GP(e);
}), nF = () => "Custom", rF = () => "Sur mesure", iF = () => "Personalizado", aF = () => "Individuell", oF = () => "Personalizzato", sF = () => "Personalizado", cF = () => "定制", lF = () => "カスタム", uF = () => "Custom", dF = () => "Индивидуально", fF = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? rF(e) : n === "es" ? iF(e) : n === "de" ? aF(e) : n === "it" ? oF(e) : n === "pt" ? sF(e) : n === "zh" ? cF(e) : n === "ja" ? lF(e) : n === "ko" ? uF(e) : n === "ru" ? dF(e) : nF(e);
}), pF = () => "Get Started", mF = () => "Commencer", hF = () => "Empezar", gF = () => "Erste Schritte", _F = () => "Inizia ora", vF = () => "Começar", yF = () => "开始使用", bF = () => "始める", xF = () => "Get Started", SF = () => "Начать работу", CF = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? mF(e) : n === "es" ? hF(e) : n === "de" ? gF(e) : n === "it" ? _F(e) : n === "pt" ? vF(e) : n === "zh" ? yF(e) : n === "ja" ? bF(e) : n === "ko" ? xF(e) : n === "ru" ? SF(e) : pF(e);
}), wF = () => "Unlimited runs", TF = () => "Exécutions illimitées", EF = () => "Ejecuciones ilimitadas", DF = () => "Unbegrenzte Durchläufe", OF = () => "Esecuzioni illimitate", kF = () => "Execuções ilimitadas", AF = () => "无限次运行", jF = () => "無制限の実行", MF = () => "Unlimited runs", NF = () => "Неограниченное число запусков", PF = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? TF(e) : n === "es" ? EF(e) : n === "de" ? DF(e) : n === "it" ? OF(e) : n === "pt" ? kF(e) : n === "zh" ? AF(e) : n === "ja" ? jF(e) : n === "ko" ? MF(e) : n === "ru" ? NF(e) : wF(e);
}), FF = () => "All libraries", IF = () => "Toutes les bibliothèques", LF = () => "Todas las bibliotecas", RF = () => "Alle Bibliotheken", zF = () => "Tutte le librerie", BF = () => "Todas as bibliotecas", VF = () => "所有库", HF = () => "すべてのライブラリ", UF = () => "All libraries", WF = () => "Все библиотеки", GF = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? IF(e) : n === "es" ? LF(e) : n === "de" ? RF(e) : n === "it" ? zF(e) : n === "pt" ? BF(e) : n === "zh" ? VF(e) : n === "ja" ? HF(e) : n === "ko" ? UF(e) : n === "ru" ? WF(e) : FF(e);
}), KF = () => "Priority support", qF = () => "Support prioritaire", JF = () => "Soporte prioritario", YF = () => "Priorisierter Support", XF = () => "Supporto prioritario", ZF = () => "Suporte prioritário", QF = () => "优先支持", $F = () => "優先サポート", eI = () => "Priority support", tI = () => "Приоритетная поддержка", nI = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? qF(e) : n === "es" ? JF(e) : n === "de" ? YF(e) : n === "it" ? XF(e) : n === "pt" ? ZF(e) : n === "zh" ? QF(e) : n === "ja" ? $F(e) : n === "ko" ? eI(e) : n === "ru" ? tI(e) : KF(e);
}), rI = () => "Private results", iI = () => "Résultats privés", aI = () => "Resultados privados", oI = () => "Private Ergebnisse", sI = () => "Risultati privati", cI = () => "Resultados privados", lI = () => "私有结果", uI = () => "非公開の結果", dI = () => "Private results", fI = () => "Приватные результаты", pI = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? iI(e) : n === "es" ? aI(e) : n === "de" ? oI(e) : n === "it" ? sI(e) : n === "pt" ? cI(e) : n === "zh" ? lI(e) : n === "ja" ? uI(e) : n === "ko" ? dI(e) : n === "ru" ? fI(e) : rI(e);
}), mI = () => "CI integration", hI = () => "Intégration CI", gI = () => "Integración CI", _I = () => "CI-Integration", vI = () => "Integrazione CI", yI = () => "Integração CI", bI = () => "CI 集成", xI = () => "CI統合", SI = () => "CI integration", CI = () => "Интеграция с CI", wI = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? hI(e) : n === "es" ? gI(e) : n === "de" ? _I(e) : n === "it" ? vI(e) : n === "pt" ? yI(e) : n === "zh" ? bI(e) : n === "ja" ? xI(e) : n === "ko" ? SI(e) : n === "ru" ? CI(e) : mI(e);
}), TI = () => "Historical data", EI = () => "Historique", DI = () => "Datos históricos", OI = () => "Historische Daten", kI = () => "Dati storici", AI = () => "Dados históricos", jI = () => "历史数据", MI = () => "履歴データ", NI = () => "Historical data", PI = () => "Исторические данные", FI = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? EI(e) : n === "es" ? DI(e) : n === "de" ? OI(e) : n === "it" ? kI(e) : n === "pt" ? AI(e) : n === "zh" ? jI(e) : n === "ja" ? MI(e) : n === "ko" ? NI(e) : n === "ru" ? PI(e) : TI(e);
}), II = () => "Pro", LI = () => "Pro", RI = () => "Pro", zI = () => "Pro", BI = () => "Pro", VI = () => "Pro", HI = () => "专业版", UI = () => "プロ", WI = () => "Pro", GI = () => "Pro", KI = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? LI(e) : n === "es" ? RI(e) : n === "de" ? zI(e) : n === "it" ? BI(e) : n === "pt" ? VI(e) : n === "zh" ? HI(e) : n === "ja" ? UI(e) : n === "ko" ? WI(e) : n === "ru" ? GI(e) : II(e);
}), qI = () => "/month", JI = () => "/ mois", YI = () => "/mes", XI = () => "/Monat", ZI = () => "/mese", QI = () => "/mês", $I = () => "/月", eL = () => "/月", tL = () => "/month", nL = () => "/мес", rL = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? JI(e) : n === "es" ? YI(e) : n === "de" ? XI(e) : n === "it" ? ZI(e) : n === "pt" ? QI(e) : n === "zh" ? $I(e) : n === "ja" ? eL(e) : n === "ko" ? tL(e) : n === "ru" ? nL(e) : qI(e);
}), iL = () => "$29", aL = () => "29 €", oL = () => "29 $", sL = () => "29 $", cL = () => "29 $", lL = () => "29 $", uL = () => "29 $", dL = () => "29ドル", fL = () => "$29", pL = () => "29 $", mL = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? aL(e) : n === "es" ? oL(e) : n === "de" ? sL(e) : n === "it" ? cL(e) : n === "pt" ? lL(e) : n === "zh" ? uL(e) : n === "ja" ? dL(e) : n === "ko" ? fL(e) : n === "ru" ? pL(e) : iL(e);
}), hL = () => "5 benchmark runs/day", gL = () => "5 exécutions de benchmark / jour", _L = () => "5 ejecuciones de benchmark al día", vL = () => "5 Benchmark-Durchläufe/Tag", yL = () => "5 esecuzioni benchmark al giorno", bL = () => "5 execuções de benchmark/dia", xL = () => "每天 5 次基准测试运行", SL = () => "1日あたり5回のベンチマーク実行", CL = () => "5 benchmark runs/day", wL = () => "5 запусков бенчмарка в день", TL = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? gL(e) : n === "es" ? _L(e) : n === "de" ? vL(e) : n === "it" ? yL(e) : n === "pt" ? bL(e) : n === "zh" ? xL(e) : n === "ja" ? SL(e) : n === "ko" ? CL(e) : n === "ru" ? wL(e) : hL(e);
}), EL = () => "3 libraries", DL = () => "3 bibliothèques", OL = () => "3 bibliotecas", kL = () => "3 Bibliotheken", AL = () => "3 librerie", jL = () => "3 bibliotecas", ML = () => "3 个库", NL = () => "3ライブラリ", PL = () => "3 libraries", FL = () => "3 библиотеки", IL = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? DL(e) : n === "es" ? OL(e) : n === "de" ? kL(e) : n === "it" ? AL(e) : n === "pt" ? jL(e) : n === "zh" ? ML(e) : n === "ja" ? NL(e) : n === "ko" ? PL(e) : n === "ru" ? FL(e) : EL(e);
}), LL = () => "Community support", RL = () => "Support communautaire", zL = () => "Soporte de la comunidad", BL = () => "Community-Support", VL = () => "Supporto della comunità", HL = () => "Suporte da comunidade", UL = () => "社区支持", WL = () => "コミュニティサポート", GL = () => "Community support", KL = () => "Поддержка сообщества", qL = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? RL(e) : n === "es" ? zL(e) : n === "de" ? BL(e) : n === "it" ? VL(e) : n === "pt" ? HL(e) : n === "zh" ? UL(e) : n === "ja" ? WL(e) : n === "ko" ? GL(e) : n === "ru" ? KL(e) : LL(e);
}), JL = () => "Public results", YL = () => "Résultats publics", XL = () => "Resultados públicos", ZL = () => "Öffentliche Ergebnisse", QL = () => "Risultati pubblici", $L = () => "Resultados públicos", eR = () => "公开结果", tR = () => "公開結果", nR = () => "Public results", rR = () => "Публичные результаты", iR = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? YL(e) : n === "es" ? XL(e) : n === "de" ? ZL(e) : n === "it" ? QL(e) : n === "pt" ? $L(e) : n === "zh" ? eR(e) : n === "ja" ? tR(e) : n === "ko" ? nR(e) : n === "ru" ? rR(e) : JL(e);
}), aR = () => "Starter", oR = () => "Starter", sR = () => "Starter", cR = () => "Starter", lR = () => "Starter", uR = () => "Starter", dR = () => "入门版", fR = () => "スターター", pR = () => "Starter", mR = () => "Starter", hR = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? oR(e) : n === "es" ? sR(e) : n === "de" ? cR(e) : n === "it" ? lR(e) : n === "pt" ? uR(e) : n === "zh" ? dR(e) : n === "ja" ? fR(e) : n === "ko" ? pR(e) : n === "ru" ? mR(e) : aR(e);
}), gR = () => "forever", _R = () => "pour toujours", vR = () => "para siempre", yR = () => "für immer", bR = () => "per sempre", xR = () => "para sempre", SR = () => "永久", CR = () => "ずっと無料", wR = () => "forever", TR = () => "навсегда", ER = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? _R(e) : n === "es" ? vR(e) : n === "de" ? yR(e) : n === "it" ? bR(e) : n === "pt" ? xR(e) : n === "zh" ? SR(e) : n === "ja" ? CR(e) : n === "ko" ? wR(e) : n === "ru" ? TR(e) : gR(e);
}), DR = () => "$0", OR = () => "0 €", kR = () => "0 $", AR = () => "0 $", jR = () => "0 $", MR = () => "0 $", NR = () => "0 $", PR = () => "0円", FR = () => "$0", IR = () => "0 $", LR = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? OR(e) : n === "es" ? kR(e) : n === "de" ? AR(e) : n === "it" ? jR(e) : n === "pt" ? MR(e) : n === "zh" ? NR(e) : n === "ja" ? PR(e) : n === "ko" ? FR(e) : n === "ru" ? IR(e) : DR(e);
}), RR = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", zR = () => "Lancez des benchmarks en local. Configurations personnalisées et CI.", BR = () => "Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.", VR = () => "Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.", HR = () => "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.", UR = () => "Execute benchmarks localmente pelo terminal. Suporta configurações personalizadas e integração CI.", WR = () => "从您的终端本地运行基准测试。支持自定义配置和 CI 集成。", GR = () => "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。", KR = () => "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.", qR = () => "Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.", JR = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? zR(e) : n === "es" ? BR(e) : n === "de" ? VR(e) : n === "it" ? HR(e) : n === "pt" ? UR(e) : n === "zh" ? WR(e) : n === "ja" ? GR(e) : n === "ko" ? KR(e) : n === "ru" ? qR(e) : RR(e);
}), YR = () => "Benchmark CLI", XR = () => "Benchmark CLI", ZR = () => "CLI de Benchmark", QR = () => "Benchmark CLI", $R = () => "CLI del Benchmark", ez = () => "Benchmark CLI", tz = () => "基准测试 CLI", nz = () => "Benchmark CLI", rz = () => "Benchmark CLI", iz = () => "Benchmark CLI", az = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? XR(e) : n === "es" ? ZR(e) : n === "de" ? QR(e) : n === "it" ? $R(e) : n === "pt" ? ez(e) : n === "zh" ? tz(e) : n === "ja" ? nz(e) : n === "ko" ? rz(e) : n === "ru" ? iz(e) : YR(e);
}), oz = () => "Free", sz = () => "Gratuit", cz = () => "Gratis", lz = () => "Kostenlos", uz = () => "Gratis", dz = () => "Grátis", fz = () => "免费", pz = () => "無料", mz = () => "Free", hz = () => "Бесплатно", gz = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? sz(e) : n === "es" ? cz(e) : n === "de" ? lz(e) : n === "it" ? uz(e) : n === "pt" ? dz(e) : n === "zh" ? fz(e) : n === "ja" ? pz(e) : n === "ko" ? mz(e) : n === "ru" ? hz(e) : oz(e);
}), _z = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", vz = () => "Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.", yz = () => "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.", bz = () => "Automatisiertes cloudbasiertes Benchmarking mit historischem Tracking, Warnungen und Team-Dashboards.", xz = () => "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.", Sz = () => "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.", Cz = () => "具有历史追踪、警报和团队仪表板的自动化云基准测试。", wz = () => "履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。", Tz = () => "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.", Ez = () => "Автоматизированный облачный бенчмаркинг с отслеживанием истории, уведомлениями и командными дашбордами.", Dz = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? vz(e) : n === "es" ? yz(e) : n === "de" ? bz(e) : n === "it" ? xz(e) : n === "pt" ? Sz(e) : n === "zh" ? Cz(e) : n === "ja" ? wz(e) : n === "ko" ? Tz(e) : n === "ru" ? Ez(e) : _z(e);
}), Oz = () => "Benchmark Cloud", kz = () => "Benchmark Cloud", Az = () => "Benchmark Cloud", jz = () => "Benchmark Cloud", Mz = () => "Benchmark Cloud", Nz = () => "Benchmark Cloud", Pz = () => "基准测试云", Fz = () => "Benchmark Cloud", Iz = () => "Benchmark Cloud", Lz = () => "Benchmark Cloud", Rz = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? kz(e) : n === "es" ? Az(e) : n === "de" ? jz(e) : n === "it" ? Mz(e) : n === "pt" ? Nz(e) : n === "zh" ? Pz(e) : n === "ja" ? Fz(e) : n === "ko" ? Iz(e) : n === "ru" ? Lz(e) : Oz(e);
}), zz = () => "$29/mo", Bz = () => "29 €/mois", Vz = () => "29 $/mes", Hz = () => "29 $/Monat", Uz = () => "29 $/mese", Wz = () => "29 $/mês", Gz = () => "29 $/月", Kz = () => "29ドル/月", qz = () => "$29/mo", Jz = () => "29 $/мес", Yz = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Bz(e) : n === "es" ? Vz(e) : n === "de" ? Hz(e) : n === "it" ? Uz(e) : n === "pt" ? Wz(e) : n === "zh" ? Gz(e) : n === "ja" ? Kz(e) : n === "ko" ? qz(e) : n === "ru" ? Jz(e) : zz(e);
}), Xz = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", Zz = () => "On-premise avec SSO, journaux d'audit, SLA et support dédié.", Qz = () => "Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.", $z = () => "On-Premise-Bereitstellung mit SSO, Audit-Protokollen, individuellen SLAs und dediziertem Support.", eB = () => "Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.", tB = () => "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.", nB = () => "支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。", rB = () => "SSO、監査ログ、カスタムSLA、および専任サポートを備えたオンプレミス展開。", iB = () => "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.", aB = () => "Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.", oB = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Zz(e) : n === "es" ? Qz(e) : n === "de" ? $z(e) : n === "it" ? eB(e) : n === "pt" ? tB(e) : n === "zh" ? nB(e) : n === "ja" ? rB(e) : n === "ko" ? iB(e) : n === "ru" ? aB(e) : Xz(e);
}), sB = () => "Benchmark Enterprise", cB = () => "Benchmark Enterprise", lB = () => "Benchmark Enterprise", uB = () => "Benchmark Enterprise", dB = () => "Benchmark Enterprise", fB = () => "Benchmark Enterprise", pB = () => "基准测试企业版", mB = () => "Benchmark Enterprise", hB = () => "Benchmark Enterprise", gB = () => "Benchmark Enterprise", _B = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? cB(e) : n === "es" ? lB(e) : n === "de" ? uB(e) : n === "it" ? dB(e) : n === "pt" ? fB(e) : n === "zh" ? pB(e) : n === "ja" ? mB(e) : n === "ko" ? hB(e) : n === "ru" ? gB(e) : sB(e);
}), vB = () => "Contact Us", yB = () => "Nous contacter", bB = () => "Contáctanos", xB = () => "Kontaktieren Sie uns", SB = () => "Contattaci", CB = () => "Contate-nos", wB = () => "联系我们", TB = () => "お問い合わせ", EB = () => "Contact Us", DB = () => "Связаться с нами", OB = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? yB(e) : n === "es" ? bB(e) : n === "de" ? xB(e) : n === "it" ? SB(e) : n === "pt" ? CB(e) : n === "zh" ? wB(e) : n === "ja" ? TB(e) : n === "ko" ? EB(e) : n === "ru" ? DB(e) : vB(e);
}), kB = () => "Learn More", AB = () => "En savoir plus", jB = () => "Más información", MB = () => "Mehr erfahren", NB = () => "Scopri di più", PB = () => "Saiba Mais", FB = () => "了解更多", IB = () => "詳細はこちら", LB = () => "Learn More", RB = () => "Узнать больше", zB = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? AB(e) : n === "es" ? jB(e) : n === "de" ? MB(e) : n === "it" ? NB(e) : n === "pt" ? PB(e) : n === "zh" ? FB(e) : n === "ja" ? IB(e) : n === "ko" ? LB(e) : n === "ru" ? RB(e) : kB(e);
}), BB = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", VB = () => "Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.", HB = () => "Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.", UB = () => "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.", WB = () => "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.", GB = () => "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.", KB = () => "AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，零停机时间。", qB = () => "ダウンタイムなしでi18nライブラリ間でコードベースを移行するのを支援するAI駆動ツール。", JB = () => "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.", YB = () => "Инструмент на базе ИИ, помогающий переносить кодовую базу между библиотеками i18n без простоев.", XB = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? VB(e) : n === "es" ? HB(e) : n === "de" ? UB(e) : n === "it" ? WB(e) : n === "pt" ? GB(e) : n === "zh" ? KB(e) : n === "ja" ? qB(e) : n === "ko" ? JB(e) : n === "ru" ? YB(e) : BB(e);
}), ZB = () => "Migration Assistant", QB = () => "Assistant de migration", $B = () => "Asistente de migración", eV = () => "Migrationsassistent", tV = () => "Assistente alla migrazione", nV = () => "Assistente de migração", rV = () => "迁移助手", iV = () => "移行アシスタント", aV = () => "Migration Assistant", oV = () => "Помощник по миграции", sV = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? QB(e) : n === "es" ? $B(e) : n === "de" ? eV(e) : n === "it" ? tV(e) : n === "pt" ? nV(e) : n === "zh" ? rV(e) : n === "ja" ? iV(e) : n === "ko" ? aV(e) : n === "ru" ? oV(e) : ZB(e);
}), cV = () => "$99 one-time", lV = () => "99 € (unique)", uV = () => "99 $ pago único", dV = () => "Einmalig 99 $", fV = () => "99 $ una tantum", pV = () => "99 $ taxa única", mV = () => "99 $ 一次性费用", hV = () => "99ドル（一回限り）", gV = () => "$99 one-time", _V = () => "99 $ (разово)", vV = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? lV(e) : n === "es" ? uV(e) : n === "de" ? dV(e) : n === "it" ? fV(e) : n === "pt" ? pV(e) : n === "zh" ? mV(e) : n === "ja" ? hV(e) : n === "ko" ? gV(e) : n === "ru" ? _V(e) : cV(e);
}), yV = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", bV = () => "Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).", xV = () => "Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.", SV = () => "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.", CV = () => "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.", wV = () => "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.", TV = () => "通过 tree-shaking 和代码拆分分析并优化您的生产 i18n 包。", EV = () => "ツリーシェイキングとコード分割を使用して、本番用にi18nバンドルを分析および最適化します。", DV = () => "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.", OV = () => "Анализирует и оптимизирует ваш бандл i18n для продакшена с помощью tree-shaking и разделения кода.", kV = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? bV(e) : n === "es" ? xV(e) : n === "de" ? SV(e) : n === "it" ? CV(e) : n === "pt" ? wV(e) : n === "zh" ? TV(e) : n === "ja" ? EV(e) : n === "ko" ? DV(e) : n === "ru" ? OV(e) : yV(e);
}), AV = () => "Bundle Optimizer", jV = () => "Optimiseur de bundle", MV = () => "Optimizador de bundle", NV = () => "Bundle-Optimierer", PV = () => "Ottimizzatore del bundle", FV = () => "Otimizador de bundle", IV = () => "包优化器", LV = () => "バンドルオプティマイザー", RV = () => "Bundle Optimizer", zV = () => "Оптимизатор бандла", BV = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? jV(e) : n === "es" ? MV(e) : n === "de" ? NV(e) : n === "it" ? PV(e) : n === "pt" ? FV(e) : n === "zh" ? IV(e) : n === "ja" ? LV(e) : n === "ko" ? RV(e) : n === "ru" ? zV(e) : AV(e);
}), VV = () => "$49/mo", HV = () => "49 €/mois", UV = () => "49 $/mes", WV = () => "49 $/Monat", GV = () => "49 $/mese", KV = () => "49 $/mês", qV = () => "49 $/月", JV = () => "49ドル/月", YV = () => "$49/mo", XV = () => "49 $/мес", ZV = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? HV(e) : n === "es" ? UV(e) : n === "de" ? WV(e) : n === "it" ? GV(e) : n === "pt" ? KV(e) : n === "zh" ? qV(e) : n === "ja" ? JV(e) : n === "ko" ? YV(e) : n === "ru" ? XV(e) : VV(e);
}), QV = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", $V = () => "Contrôles automatiques : clés manquantes, pluriels, contexte.", eH = () => "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.", tH = () => "Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.", nH = () => "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.", rH = () => "Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.", iH = () => "自动检查翻译缺失、复数问题和上下文错误。", aH = () => "翻訳の欠落、複数形化の問題、コンテキストエラーの自動品質チェック。", oH = () => "Automated quality checks for missing translations, pluralization issues, and context errors.", sH = () => "Автоматическая проверка качества на наличие пропущенных переводов, проблем с плюрализацией и контекстных ошибок.", cH = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? $V(e) : n === "es" ? eH(e) : n === "de" ? tH(e) : n === "it" ? nH(e) : n === "pt" ? rH(e) : n === "zh" ? iH(e) : n === "ja" ? aH(e) : n === "ko" ? oH(e) : n === "ru" ? sH(e) : QV(e);
}), lH = () => "Translation QA", uH = () => "QA des traductions", dH = () => "QA de traducción", fH = () => "Übersetzungs-QA", pH = () => "QA delle traduzioni", mH = () => "QA de tradução", hH = () => "翻译 QA", gH = () => "翻訳QA", _H = () => "Translation QA", vH = () => "QA переводов", yH = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? uH(e) : n === "es" ? dH(e) : n === "de" ? fH(e) : n === "it" ? pH(e) : n === "pt" ? mH(e) : n === "zh" ? hH(e) : n === "ja" ? gH(e) : n === "ko" ? _H(e) : n === "ru" ? vH(e) : lH(e);
}), bH = () => "$19/mo", xH = () => "19 €/mois", SH = () => "19 $/mes", CH = () => "19 $/Monat", wH = () => "19 $/mese", TH = () => "19 $/mês", EH = () => "19 $/月", DH = () => "19ドル/月", OH = () => "$19/mo", kH = () => "19 $/мес", AH = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? xH(e) : n === "es" ? SH(e) : n === "de" ? CH(e) : n === "it" ? wH(e) : n === "pt" ? TH(e) : n === "zh" ? EH(e) : n === "ja" ? DH(e) : n === "ko" ? OH(e) : n === "ru" ? kH(e) : bH(e);
}), jH = () => "Tools and services to streamline your internationalization workflow.", MH = () => "Outils et services pour fluidifier votre flux i18n.", NH = () => "Herramientas y servicios para agilizar su flujo de trabajo de internacionalización.", PH = () => "Tools und Dienstleistungen zur Optimierung Ihres Internationalisierungs-Workflows.", FH = () => "Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione.", IH = () => "Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização.", LH = () => "用于简化国际化工作流程的工具和服务。", RH = () => "国際化ワークフローを効率化するためのツールとサービス。", zH = () => "Tools and services to streamline your internationalization workflow.", BH = () => "Инструменты и сервисы для оптимизации вашего рабочего процесса с интернационализацией.", VH = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? MH(e) : n === "es" ? NH(e) : n === "de" ? PH(e) : n === "it" ? FH(e) : n === "pt" ? IH(e) : n === "zh" ? LH(e) : n === "ja" ? RH(e) : n === "ko" ? zH(e) : n === "ru" ? BH(e) : jH(e);
}), HH = () => "Products", UH = () => "Produits", WH = () => "Productos", GH = () => "Produkte", KH = () => "Prodotti", qH = () => "Produtos", JH = () => "产品", YH = () => "製品", XH = () => "Products", ZH = () => "Продукты", QH = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? UH(e) : n === "es" ? WH(e) : n === "de" ? GH(e) : n === "it" ? KH(e) : n === "pt" ? qH(e) : n === "zh" ? JH(e) : n === "ja" ? YH(e) : n === "ko" ? XH(e) : n === "ru" ? ZH(e) : HH(e);
}), $H = () => "API Key", eU = () => "Clé API", tU = () => "Llave API", nU = () => "API-Schlüssel", rU = () => "Chiave API", iU = () => "Chave API", aU = () => "API 密钥", oU = () => "APIキー", sU = () => "API Key", cU = () => "Ключ API", lU = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? eU(e) : n === "es" ? tU(e) : n === "de" ? nU(e) : n === "it" ? rU(e) : n === "pt" ? iU(e) : n === "zh" ? aU(e) : n === "ja" ? oU(e) : n === "ko" ? sU(e) : n === "ru" ? cU(e) : $H(e);
}), uU = () => "Copy", dU = () => "Copier", fU = () => "Copiar", pU = () => "Kopieren", mU = () => "Copia", hU = () => "Copiar", gU = () => "复制", _U = () => "コピー", vU = () => "Copy", yU = () => "Копировать", bU = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? dU(e) : n === "es" ? fU(e) : n === "de" ? pU(e) : n === "it" ? mU(e) : n === "pt" ? hU(e) : n === "zh" ? gU(e) : n === "ja" ? _U(e) : n === "ko" ? vU(e) : n === "ru" ? yU(e) : uU(e);
}), xU = () => "Use this key to access the benchmarking API programmatically.", SU = () => "Utilisez cette clé pour appeler l'API de benchmark par programmation.", CU = () => "Usa esta llave para acceder a la API de benchmarking de forma programática.", wU = () => "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.", TU = () => "Usa questa chiave per accedere programmaticamente alle API di benchmarking.", EU = () => "Use esta chave para acessar a API de benchmarking programaticamente.", DU = () => "使用此密钥以编程方式访问基准测试 API。", OU = () => "このキーを使用して、プログラムでベンチマークAPIにアクセスします。", kU = () => "Use this key to access the benchmarking API programmatically.", AU = () => "Используйте этот ключ для программного доступа к API бенчмаркинга.", jU = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? SU(e) : n === "es" ? CU(e) : n === "de" ? wU(e) : n === "it" ? TU(e) : n === "pt" ? EU(e) : n === "zh" ? DU(e) : n === "ja" ? OU(e) : n === "ko" ? kU(e) : n === "ru" ? AU(e) : xU(e);
}), MU = () => "API Access", NU = () => "Accès API", PU = () => "Acceso API", FU = () => "API-Zugriff", IU = () => "Accesso API", LU = () => "Acesso API", RU = () => "API 访问", zU = () => "APIアクセス", BU = () => "API Access", VU = () => "Доступ к API", HU = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? NU(e) : n === "es" ? PU(e) : n === "de" ? FU(e) : n === "it" ? IU(e) : n === "pt" ? LU(e) : n === "zh" ? RU(e) : n === "ja" ? zU(e) : n === "ko" ? BU(e) : n === "ru" ? VU(e) : MU(e);
}), UU = () => "Cancel", WU = () => "Annuler", GU = () => "Cancelar", KU = () => "Abbrechen", qU = () => "Annulla", JU = () => "Cancelar", YU = () => "取消", XU = () => "キャンセル", ZU = () => "Cancel", QU = () => "Отмена", $U = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? WU(e) : n === "es" ? GU(e) : n === "de" ? KU(e) : n === "it" ? qU(e) : n === "pt" ? JU(e) : n === "zh" ? YU(e) : n === "ja" ? XU(e) : n === "ko" ? ZU(e) : n === "ru" ? QU(e) : UU(e);
}), eW = () => "Save Changes", tW = () => "Enregistrer", nW = () => "Guardar cambios", rW = () => "Änderungen speichern", iW = () => "Salva modifiche", aW = () => "Salvar alterações", oW = () => "保存更改", sW = () => "変更を保存", cW = () => "Save Changes", lW = () => "Сохранить изменения", uW = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? tW(e) : n === "es" ? nW(e) : n === "de" ? rW(e) : n === "it" ? iW(e) : n === "pt" ? aW(e) : n === "zh" ? oW(e) : n === "ja" ? sW(e) : n === "ko" ? cW(e) : n === "ru" ? lW(e) : eW(e);
}), dW = () => "Manage your account preferences and configuration.", fW = () => "Gérez les préférences et la configuration de votre compte.", pW = () => "Gestiona las preferencias y la configuración de tu cuenta.", mW = () => "Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.", hW = () => "Gestisci le preferenze del tuo account e la configurazione.", gW = () => "Gerencie suas preferências de conta e configuração.", _W = () => "管理您的账户偏好和配置。", vW = () => "アカウント設定と構成を管理します。", yW = () => "Manage your account preferences and configuration.", bW = () => "Управляйте предпочтениями и конфигурацией вашей учетной записи.", xW = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? fW(e) : n === "es" ? pW(e) : n === "de" ? mW(e) : n === "it" ? hW(e) : n === "pt" ? gW(e) : n === "zh" ? _W(e) : n === "ja" ? vW(e) : n === "ko" ? yW(e) : n === "ru" ? bW(e) : dW(e);
}), SW = () => "Settings", CW = () => "Paramètres", wW = () => "Ajustes", TW = () => "Einstellungen", EW = () => "Impostazioni", DW = () => "Configurações", OW = () => "设置", kW = () => "設定", AW = () => "Settings", jW = () => "Настройки", MW = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? CW(e) : n === "es" ? wW(e) : n === "de" ? TW(e) : n === "it" ? EW(e) : n === "pt" ? DW(e) : n === "zh" ? OW(e) : n === "ja" ? kW(e) : n === "ko" ? AW(e) : n === "ru" ? jW(e) : SW(e);
}), NW = () => "Arabic (ar)", PW = () => "Arabe (ar)", FW = () => "Árabe (ar)", IW = () => "Arabisch (ar)", LW = () => "Arabo (ar)", RW = () => "Árabe (ar)", zW = () => "阿拉伯语 (ar)", BW = () => "アラビア語 (ar)", VW = () => "Arabic (ar)", HW = () => "Арабский (ar)", UW = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? PW(e) : n === "es" ? FW(e) : n === "de" ? IW(e) : n === "it" ? LW(e) : n === "pt" ? RW(e) : n === "zh" ? zW(e) : n === "ja" ? BW(e) : n === "ko" ? VW(e) : n === "ru" ? HW(e) : NW(e);
}), WW = () => "Chinese Simplified (zh-CN)", GW = () => "Chinois simplifié (zh-CN)", KW = () => "Chino simplificado (zh-CN)", qW = () => "Chinesisch vereinfacht (zh-CN)", JW = () => "Cinese semplificato (zh-CN)", YW = () => "Chinês Simplificado (zh-CN)", XW = () => "简体中文 (zh-CN)", ZW = () => "中国語（簡体字） (zh-CN)", QW = () => "Chinese Simplified (zh-CN)", $W = () => "Китайский упрощенный (zh-CN)", eG = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? GW(e) : n === "es" ? KW(e) : n === "de" ? qW(e) : n === "it" ? JW(e) : n === "pt" ? YW(e) : n === "zh" ? XW(e) : n === "ja" ? ZW(e) : n === "ko" ? QW(e) : n === "ru" ? $W(e) : WW(e);
}), tG = () => "Use dark color scheme", nG = () => "Utiliser le thème sombre", rG = () => "Usar esquema de colores oscuro", iG = () => "Dunkles Farbschema verwenden", aG = () => "Usa lo schema colori scuro", oG = () => "Usar esquema de cores escuro", sG = () => "使用深色配色方案", cG = () => "ダークカラー（暗い配色）を使用する", lG = () => "Use dark color scheme", uG = () => "Использовать темную цветовую схему", dG = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? nG(e) : n === "es" ? rG(e) : n === "de" ? iG(e) : n === "it" ? aG(e) : n === "pt" ? oG(e) : n === "zh" ? sG(e) : n === "ja" ? cG(e) : n === "ko" ? lG(e) : n === "ru" ? uG(e) : tG(e);
}), fG = () => "Dark Mode", pG = () => "Mode sombre", mG = () => "Modo oscuro", hG = () => "Dunkelmodus", gG = () => "Modalità scura", _G = () => "Modo Escuro", vG = () => "深色模式", yG = () => "ダークモード", bG = () => "Dark Mode", xG = () => "Темная тема", SG = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? pG(e) : n === "es" ? mG(e) : n === "de" ? hG(e) : n === "it" ? gG(e) : n === "pt" ? _G(e) : n === "zh" ? vG(e) : n === "ja" ? yG(e) : n === "ko" ? bG(e) : n === "ru" ? xG(e) : fG(e);
}), CG = () => "Default Language", wG = () => "Langue par défaut", TG = () => "Idioma predeterminado", EG = () => "Standardsprache", DG = () => "Lingua predefinita", OG = () => "Idioma padrão", kG = () => "默认语言", AG = () => "デフォルトの言語", jG = () => "Default Language", MG = () => "Язык по умолчанию", NG = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? wG(e) : n === "es" ? TG(e) : n === "de" ? EG(e) : n === "it" ? DG(e) : n === "pt" ? OG(e) : n === "zh" ? kG(e) : n === "ja" ? AG(e) : n === "ko" ? jG(e) : n === "ru" ? MG(e) : CG(e);
}), PG = () => "Email Notifications", FG = () => "Notifications e-mail", IG = () => "Notificaciones por correo electrónico", LG = () => "E-Mail-Benachrichtigungen", RG = () => "Notifiche via email", zG = () => "Notificações por e-mail", BG = () => "电子邮件通知", VG = () => "メール通知", HG = () => "Email Notifications", UG = () => "Уведомления по почте", WG = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? FG(e) : n === "es" ? IG(e) : n === "de" ? LG(e) : n === "it" ? RG(e) : n === "pt" ? zG(e) : n === "zh" ? BG(e) : n === "ja" ? VG(e) : n === "ko" ? HG(e) : n === "ru" ? UG(e) : PG(e);
}), GG = () => "English (en)", KG = () => "Anglais (en)", qG = () => "Inglés (en)", JG = () => "Englisch (en)", YG = () => "Inglese (en)", XG = () => "Inglês (en)", ZG = () => "英语 (en)", QG = () => "英語 (en)", $G = () => "English (en)", eK = () => "Английский (en)", tK = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? KG(e) : n === "es" ? qG(e) : n === "de" ? JG(e) : n === "it" ? YG(e) : n === "pt" ? XG(e) : n === "zh" ? ZG(e) : n === "ja" ? QG(e) : n === "ko" ? $G(e) : n === "ru" ? eK(e) : GG(e);
}), nK = () => "French (fr)", rK = () => "Français (fr)", iK = () => "Francés (fr)", aK = () => "Französisch (fr)", oK = () => "Francese (fr)", sK = () => "Francés (fr)", cK = () => "法语 (fr)", lK = () => "フランス語 (fr)", uK = () => "French (fr)", dK = () => "Французский (fr)", fK = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? rK(e) : n === "es" ? iK(e) : n === "de" ? aK(e) : n === "it" ? oK(e) : n === "pt" ? sK(e) : n === "zh" ? cK(e) : n === "ja" ? lK(e) : n === "ko" ? uK(e) : n === "ru" ? dK(e) : nK(e);
}), pK = () => "German (de)", mK = () => "Allemand (de)", hK = () => "Alemán (de)", gK = () => "Deutsch (de)", _K = () => "Tedesco (de)", vK = () => "Alemão (de)", yK = () => "德语 (de)", bK = () => "ドイツ語 (de)", xK = () => "German (de)", SK = () => "Немецкий (de)", CK = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? mK(e) : n === "es" ? hK(e) : n === "de" ? gK(e) : n === "it" ? _K(e) : n === "pt" ? vK(e) : n === "zh" ? yK(e) : n === "ja" ? bK(e) : n === "ko" ? xK(e) : n === "ru" ? SK(e) : pK(e);
}), wK = () => "Japanese (ja)", TK = () => "Japonais (ja)", EK = () => "Japonés (ja)", DK = () => "Japanisch (ja)", OK = () => "Giapponese (ja)", kK = () => "Japonês (ja)", AK = () => "日语 (ja)", jK = () => "日本語 (ja)", MK = () => "Japanese (ja)", NK = () => "Японский (ja)", PK = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? TK(e) : n === "es" ? EK(e) : n === "de" ? DK(e) : n === "it" ? OK(e) : n === "pt" ? kK(e) : n === "zh" ? AK(e) : n === "ja" ? jK(e) : n === "ko" ? MK(e) : n === "ru" ? NK(e) : wK(e);
}), FK = () => "Spanish (es)", IK = () => "Espagnol (es)", LK = () => "Español (es)", RK = () => "Spanisch (es)", zK = () => "Spagnolo (es)", BK = () => "Espanhol (es)", VK = () => "西班牙语 (es)", HK = () => "スペイン語 (es)", UK = () => "Spanish (es)", WK = () => "Испанский (es)", GK = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? IK(e) : n === "es" ? LK(e) : n === "de" ? RK(e) : n === "it" ? zK(e) : n === "pt" ? BK(e) : n === "zh" ? VK(e) : n === "ja" ? HK(e) : n === "ko" ? UK(e) : n === "ru" ? WK(e) : FK(e);
}), KK = () => "Preferences", qK = () => "Préférences", JK = () => "Preferencias", YK = () => "Einstellungen", XK = () => "Preferenze", ZK = () => "Preferências", QK = () => "偏好", $K = () => "設定", eq = () => "Preferences", tq = () => "Предпочтения", nq = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? qK(e) : n === "es" ? JK(e) : n === "de" ? YK(e) : n === "it" ? XK(e) : n === "pt" ? ZK(e) : n === "zh" ? QK(e) : n === "ja" ? $K(e) : n === "ko" ? eq(e) : n === "ru" ? tq(e) : KK(e);
}), rq = () => "Toggle dark mode", iq = () => "Basculer le mode sombre", aq = () => "Cambiar modo oscuro", oq = () => "Dunkelmodus umschalten", sq = () => "Attiva/disattiva modalità scura", cq = () => "Alternar modo escuro", lq = () => "切换深色模式", uq = () => "ダークモードの切り替え", dq = () => "Toggle dark mode", fq = () => "Переключить темную тему", pq = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? iq(e) : n === "es" ? aq(e) : n === "de" ? oq(e) : n === "it" ? sq(e) : n === "pt" ? cq(e) : n === "zh" ? lq(e) : n === "ja" ? uq(e) : n === "ko" ? dq(e) : n === "ru" ? fq(e) : rq(e);
}), mq = () => "Toggle notifications", hq = () => "Activer/désactiver les notifications", gq = () => "Cambiar notificaciones", _q = () => "Benachrichtigungen umschalten", vq = () => "Attiva/disattiva notifiche", yq = () => "Alternar notificações", bq = () => "切换通知", xq = () => "通知の切り替え", Sq = () => "Toggle notifications", Cq = () => "Переключить уведомления", wq = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? hq(e) : n === "es" ? gq(e) : n === "de" ? _q(e) : n === "it" ? vq(e) : n === "pt" ? yq(e) : n === "zh" ? bq(e) : n === "ja" ? xq(e) : n === "ko" ? Sq(e) : n === "ru" ? Cq(e) : mq(e);
}), Tq = () => "Receive weekly benchmark reports", Eq = () => "Recevoir les rapports hebdomadaires", Dq = () => "Recibir informes semanales de benchmarks", Oq = () => "Wöchentliche Benchmark-Berichte erhalten", kq = () => "Ricevi rapporti settimanali sui benchmark", Aq = () => "Receber relatórios semanais de benchmarks", jq = () => "接收每周基准测试报告", Mq = () => "毎週のベンチマークレポートを受け取る", Nq = () => "Receive weekly benchmark reports", Pq = () => "Получать еженедельные отчеты о бенчмарках", Fq = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Eq(e) : n === "es" ? Dq(e) : n === "de" ? Oq(e) : n === "it" ? kq(e) : n === "pt" ? Aq(e) : n === "zh" ? jq(e) : n === "ja" ? Mq(e) : n === "ko" ? Nq(e) : n === "ru" ? Pq(e) : Tq(e);
}), Iq = () => "Display Name", Lq = () => "Nom affiché", Rq = () => "Nombre visible", zq = () => "Anzeigename", Bq = () => "Nome visualizzato", Vq = () => "Nome de exibição", Hq = () => "显示名称", Uq = () => "表示名", Wq = () => "Display Name", Gq = () => "Отображаемое имя", Kq = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Lq(e) : n === "es" ? Rq(e) : n === "de" ? zq(e) : n === "it" ? Bq(e) : n === "pt" ? Vq(e) : n === "zh" ? Hq(e) : n === "ja" ? Uq(e) : n === "ko" ? Wq(e) : n === "ru" ? Gq(e) : Iq(e);
}), qq = () => "Email", Jq = () => "E-mail", Yq = () => "Correo electrónico", Xq = () => "E-Mail", Zq = () => "Email", Qq = () => "E-mail", $q = () => "电子邮件", eJ = () => "メールアドレス", tJ = () => "Email", nJ = () => "Электронная почта", rJ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Jq(e) : n === "es" ? Yq(e) : n === "de" ? Xq(e) : n === "it" ? Zq(e) : n === "pt" ? Qq(e) : n === "zh" ? $q(e) : n === "ja" ? eJ(e) : n === "ko" ? tJ(e) : n === "ru" ? nJ(e) : qq(e);
}), iJ = () => "Profile", aJ = () => "Profil", oJ = () => "Perfil", sJ = () => "Profil", cJ = () => "Profilo", lJ = () => "Perfil", uJ = () => "个人资料", dJ = () => "プロフィール", fJ = () => "Profile", pJ = () => "Профиль", mJ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? aJ(e) : n === "es" ? oJ(e) : n === "de" ? sJ(e) : n === "it" ? cJ(e) : n === "pt" ? lJ(e) : n === "zh" ? uJ(e) : n === "ja" ? dJ(e) : n === "ko" ? fJ(e) : n === "ru" ? pJ(e) : iJ(e);
}), hJ = () => "i18n Bench", gJ = () => "Bench i18n", _J = () => "i18n Bench", vJ = () => "i18n Bench", yJ = () => "i18n Bench", bJ = () => "i18n Bench", xJ = () => "i18n Bench", SJ = () => "i18n Bench", CJ = () => "i18n Bench", wJ = () => "i18n Bench", TJ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? gJ(e) : n === "es" ? _J(e) : n === "de" ? vJ(e) : n === "it" ? yJ(e) : n === "pt" ? bJ(e) : n === "zh" ? xJ(e) : n === "ja" ? SJ(e) : n === "ko" ? CJ(e) : n === "ru" ? wJ(e) : hJ(e);
}), EJ = () => "contact@intlayer.org", DJ = () => "contact@intlayer.org", OJ = () => "contact@intlayer.org", kJ = () => "contact@intlayer.org", AJ = () => "contact@intlayer.org", jJ = () => "contact@intlayer.org", MJ = () => "contact@intlayer.org", NJ = () => "contact@intlayer.org", PJ = () => "contact@intlayer.org", FJ = () => "contact@intlayer.org", IJ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? DJ(e) : n === "es" ? OJ(e) : n === "de" ? kJ(e) : n === "it" ? AJ(e) : n === "pt" ? jJ(e) : n === "zh" ? MJ(e) : n === "ja" ? NJ(e) : n === "ko" ? PJ(e) : n === "ru" ? FJ(e) : EJ(e);
}), LJ = () => "Go to GitHub", RJ = () => "Aller sur GitHub", zJ = () => "Ir a GitHub", BJ = () => "Zu GitHub", VJ = () => "Vai su GitHub", HJ = () => "Ir para o GitHub", UJ = () => "前往 GitHub", WJ = () => "GitHubへ", GJ = () => "Go to GitHub", KJ = () => "Перейти на GitHub", qJ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? RJ(e) : n === "es" ? zJ(e) : n === "de" ? BJ(e) : n === "it" ? VJ(e) : n === "pt" ? HJ(e) : n === "zh" ? UJ(e) : n === "ja" ? WJ(e) : n === "ko" ? GJ(e) : n === "ru" ? KJ(e) : LJ(e);
}), JJ = () => "i18n Benchmark", YJ = () => "Benchmark i18n", XJ = () => "i18n Benchmark", ZJ = () => "i18n Benchmark", QJ = () => "i18n Benchmark", $J = () => "i18n Benchmark", eY = () => "i18n Benchmark", tY = () => "i18n Benchmark", nY = () => "i18n Benchmark", rY = () => "i18n Benchmark", iY = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? YJ(e) : n === "es" ? XJ(e) : n === "de" ? ZJ(e) : n === "it" ? QJ(e) : n === "pt" ? $J(e) : n === "zh" ? eY(e) : n === "ja" ? tY(e) : n === "ko" ? nY(e) : n === "ru" ? rY(e) : JJ(e);
}), aY = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", oY = () => "Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.", sY = () => "Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.", cY = () => "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.", lY = () => "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.", uY = () => "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.", dY = () => "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。", fY = () => "大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。", pY = () => "Former Google engineer with 10 years of experience building internationalization systems at scale.", mY = () => "Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.", hY = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? oY(e) : n === "es" ? sY(e) : n === "de" ? cY(e) : n === "it" ? lY(e) : n === "pt" ? uY(e) : n === "zh" ? dY(e) : n === "ja" ? fY(e) : n === "ko" ? pY(e) : n === "ru" ? mY(e) : aY(e);
}), gY = () => "Sarah Chen", _Y = () => "Sarah Chen", vY = () => "Sarah Chen", yY = () => "Sarah Chen", bY = () => "Sarah Chen", xY = () => "Sarah Chen", SY = () => "Sarah Chen", CY = () => "Sarah Chen", wY = () => "Sarah Chen", TY = () => "Сара Чен", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? _Y(e) : n === "es" ? vY(e) : n === "de" ? yY(e) : n === "it" ? bY(e) : n === "pt" ? xY(e) : n === "zh" ? SY(e) : n === "ja" ? CY(e) : n === "ko" ? wY(e) : n === "ru" ? TY(e) : gY(e);
}), EY = () => "Founder & Lead Engineer", DY = () => "Fondatrice & lead ingénieur", OY = () => "Fundadora e ingeniera principal", kY = () => "Gründerin & Leitende Ingenieurin", AY = () => "Fondatrice e Responsabile tecnico", jY = () => "Fundadora e Engenheira Líder", MY = () => "创始人兼首席工程师", NY = () => "創設者 & リードエンジニア", PY = () => "Founder & Lead Engineer", FY = () => "Основатель и ведущий инженер", IY = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? DY(e) : n === "es" ? OY(e) : n === "de" ? kY(e) : n === "it" ? AY(e) : n === "pt" ? jY(e) : n === "zh" ? MY(e) : n === "ja" ? NY(e) : n === "ko" ? PY(e) : n === "ru" ? FY(e) : EY(e);
}), LY = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", RY = () => "Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.", zY = () => "Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.", BY = () => "Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.", VY = () => "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.", HY = () => "Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel.", UY = () => "专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。", WY = () => "JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。前職はVercel。", GY = () => "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", KY = () => "Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.", qY = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? RY(e) : n === "es" ? zY(e) : n === "de" ? BY(e) : n === "it" ? VY(e) : n === "pt" ? HY(e) : n === "zh" ? UY(e) : n === "ja" ? WY(e) : n === "ko" ? GY(e) : n === "ru" ? KY(e) : LY(e);
}), JY = () => "Marcus Weber", YY = () => "Marcus Weber", XY = () => "Marcus Weber", ZY = () => "Marcus Weber", QY = () => "Marcus Weber", $Y = () => "Marcus Weber", eX = () => "Marcus Weber", tX = () => "Marcus Weber", nX = () => "Marcus Weber", rX = () => "Маркус Вебер", iX = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? YY(e) : n === "es" ? XY(e) : n === "de" ? ZY(e) : n === "it" ? QY(e) : n === "pt" ? $Y(e) : n === "zh" ? eX(e) : n === "ja" ? tX(e) : n === "ko" ? nX(e) : n === "ru" ? rX(e) : JY(e);
}), aX = () => "Performance Engineer", oX = () => "Ingénieur performance", sX = () => "Ingeniero de rendimiento", cX = () => "Performance-Ingenieur", lX = () => "Ingegnere delle prestazioni", uX = () => "Engenheiro de performance", dX = () => "性能工程师", fX = () => "パフォーマンスエンジニア", pX = () => "Performance Engineer", mX = () => "Инженер по производительности", hX = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? oX(e) : n === "es" ? sX(e) : n === "de" ? cX(e) : n === "it" ? lX(e) : n === "pt" ? uX(e) : n === "zh" ? dX(e) : n === "ja" ? fX(e) : n === "ko" ? pX(e) : n === "ru" ? mX(e) : aX(e);
}), gX = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", _X = () => "Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.", vX = () => "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.", yX = () => "Begeistert von Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.", bX = () => "Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.", xX = () => "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.", SX = () => "对开发者体验和教育充满热情。曾在 React Conf, JSConf 和 i18nNext 发表演讲。", CX = () => "開発者体験と教育に情熱を注いています。React Conf、JSConf、i18nNextのスピーカー。", wX = () => "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", TX = () => "Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.", EX = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? _X(e) : n === "es" ? vX(e) : n === "de" ? yX(e) : n === "it" ? bX(e) : n === "pt" ? xX(e) : n === "zh" ? SX(e) : n === "ja" ? CX(e) : n === "ko" ? wX(e) : n === "ru" ? TX(e) : gX(e);
}), DX = () => "Aisha Patel", OX = () => "Aisha Patel", kX = () => "Aisha Patel", AX = () => "Aisha Patel", jX = () => "Aisha Patel", MX = () => "Aisha Patel", NX = () => "Aisha Patel", PX = () => "Aisha Patel", FX = () => "Aisha Patel", IX = () => "Айша Патель", LX = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? OX(e) : n === "es" ? kX(e) : n === "de" ? AX(e) : n === "it" ? jX(e) : n === "pt" ? MX(e) : n === "zh" ? NX(e) : n === "ja" ? PX(e) : n === "ko" ? FX(e) : n === "ru" ? IX(e) : DX(e);
}), RX = () => "Developer Advocate", zX = () => "Developer advocate", BX = () => "Developer Advocate", VX = () => "Developer Advocate", HX = () => "Developer Advocate", UX = () => "Developer Advocate", WX = () => "开发者倡导者", GX = () => "Developer Advocate", KX = () => "Developer Advocate", qX = () => "Developer Advocate", JX = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? zX(e) : n === "es" ? BX(e) : n === "de" ? VX(e) : n === "it" ? HX(e) : n === "pt" ? UX(e) : n === "zh" ? WX(e) : n === "ja" ? GX(e) : n === "ko" ? KX(e) : n === "ru" ? qX(e) : RX(e);
}), YX = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", XX = () => "Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.", ZX = () => "Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.", QX = () => "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.", $X = () => "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.", eZ = () => "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.", tZ = () => "维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。", nZ = () => "ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。", rZ = () => "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", iZ = () => "Поддерживает инфраструктуру бенчмаркинга и CI/CD конвейер. Участник open source проекта Lingui.", aZ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? XX(e) : n === "es" ? ZX(e) : n === "de" ? QX(e) : n === "it" ? $X(e) : n === "pt" ? eZ(e) : n === "zh" ? tZ(e) : n === "ja" ? nZ(e) : n === "ko" ? rZ(e) : n === "ru" ? iZ(e) : YX(e);
}), oZ = () => "Tomás Rodríguez", sZ = () => "Tomás Rodríguez", cZ = () => "Tomás Rodríguez", lZ = () => "Tomás Rodríguez", uZ = () => "Tomás Rodríguez", dZ = () => "Tomás Rodríguez", fZ = () => "Tomás Rodríguez", pZ = () => "Tomás Rodríguez", mZ = () => "Tomás Rodríguez", hZ = () => "Томас Родригес", gZ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? sZ(e) : n === "es" ? cZ(e) : n === "de" ? lZ(e) : n === "it" ? uZ(e) : n === "pt" ? dZ(e) : n === "zh" ? fZ(e) : n === "ja" ? pZ(e) : n === "ko" ? mZ(e) : n === "ru" ? hZ(e) : oZ(e);
}), _Z = () => "Full-Stack Developer", vZ = () => "Développeur full-stack", yZ = () => "Desarrollador Full-Stack", bZ = () => "Full-Stack-Entwickler", xZ = () => "Sviluppatore Full-Stack", SZ = () => "Desenvolvedor Full-Stack", CZ = () => "全栈开发人员", wZ = () => "フルスタックデベロッパー", TZ = () => "Full-Stack Developer", EZ = () => "Full-Stack разработчик", DZ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? vZ(e) : n === "es" ? yZ(e) : n === "de" ? bZ(e) : n === "it" ? xZ(e) : n === "pt" ? SZ(e) : n === "zh" ? CZ(e) : n === "ja" ? wZ(e) : n === "ko" ? TZ(e) : n === "ru" ? EZ(e) : _Z(e);
}), OZ = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", kZ = () => "Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).", AZ = () => "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.", jZ = () => "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in angewandter Statistik am MIT.", MZ = () => "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.", NZ = () => "Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.", PZ = () => "确保所有基准测试结果 agrarian 统计严谨性。获得 MIT 应用统计学博士学位。", FZ = () => "すべてのベンチマーク結果における統計的厳密さを確保します。MITの応用統計学博士。", IZ = () => "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", LZ = () => "Обеспечивает статистическую строгость во всех результатах бенчмарков. Доктор прикладной статистики (MIT).", RZ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? kZ(e) : n === "es" ? AZ(e) : n === "de" ? jZ(e) : n === "it" ? MZ(e) : n === "pt" ? NZ(e) : n === "zh" ? PZ(e) : n === "ja" ? FZ(e) : n === "ko" ? IZ(e) : n === "ru" ? LZ(e) : OZ(e);
}), zZ = () => "Yuki Tanaka", BZ = () => "Yuki Tanaka", VZ = () => "Yuki Tanaka", HZ = () => "Yuki Tanaka", UZ = () => "Yuki Tanaka", WZ = () => "Yuki Tanaka", GZ = () => "Yuki Tanaka", KZ = () => "Yuki Tanaka", qZ = () => "Yuki Tanaka", JZ = () => "Юки Танака", YZ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? BZ(e) : n === "es" ? VZ(e) : n === "de" ? HZ(e) : n === "it" ? UZ(e) : n === "pt" ? WZ(e) : n === "zh" ? GZ(e) : n === "ja" ? KZ(e) : n === "ko" ? qZ(e) : n === "ru" ? JZ(e) : zZ(e);
}), XZ = () => "Data Analyst", ZZ = () => "Analyste de données", QZ = () => "Analista de datos", $Z = () => "Datenanalyst", eQ = () => "Analista dati", tQ = () => "Analista de dados", nQ = () => "数据分析师", rQ = () => "データアナリスト", iQ = () => "Data Analyst", aQ = () => "Аналитик данных", oQ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ZZ(e) : n === "es" ? QZ(e) : n === "de" ? $Z(e) : n === "it" ? eQ(e) : n === "pt" ? tQ(e) : n === "zh" ? nQ(e) : n === "ja" ? rQ(e) : n === "ko" ? iQ(e) : n === "ru" ? aQ(e) : XZ(e);
}), sQ = () => "Manages community contributions, partnerships, and events. Background in open source governance.", cQ = () => "Contributions communautaires, partenariats et événements — gouvernance open source.", lQ = () => "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.", uQ = () => "Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.", dQ = () => "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.", fQ = () => "Gere as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.", pQ = () => "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。", mQ = () => "コミュニティの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴。", hQ = () => "Manages community contributions, partnerships, and events. Background in open source governance.", gQ = () => "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.", _Q = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? cQ(e) : n === "es" ? lQ(e) : n === "de" ? uQ(e) : n === "it" ? dQ(e) : n === "pt" ? fQ(e) : n === "zh" ? pQ(e) : n === "ja" ? mQ(e) : n === "ko" ? hQ(e) : n === "ru" ? gQ(e) : sQ(e);
}), vQ = () => "Elena Kowalski", yQ = () => "Elena Kowalski", bQ = () => "Elena Kowalski", xQ = () => "Elena Kowalski", SQ = () => "Elena Kowalski", CQ = () => "Elena Kowalski", wQ = () => "Elena Kowalski", TQ = () => "Elena Kowalski", EQ = () => "Elena Kowalski", DQ = () => "Елена Ковальски", OQ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? yQ(e) : n === "es" ? bQ(e) : n === "de" ? xQ(e) : n === "it" ? SQ(e) : n === "pt" ? CQ(e) : n === "zh" ? wQ(e) : n === "ja" ? TQ(e) : n === "ko" ? EQ(e) : n === "ru" ? DQ(e) : vQ(e);
}), kQ = () => "Community Manager", AQ = () => "Community manager", jQ = () => "Responsable de la comunidad", MQ = () => "Community Manager", NQ = () => "Responsable della comunità", PQ = () => "Gerente de comunidade", FQ = () => "社区经理", IQ = () => "コミュニティマネージャー", LQ = () => "Community Manager", RQ = () => "Комьюнити-менеджер", zQ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? AQ(e) : n === "es" ? jQ(e) : n === "de" ? MQ(e) : n === "it" ? NQ(e) : n === "pt" ? PQ(e) : n === "zh" ? FQ(e) : n === "ja" ? IQ(e) : n === "ko" ? LQ(e) : n === "ru" ? RQ(e) : kQ(e);
}), BQ = () => "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.", VQ = () => "Les personnes derrière i18n Benchmark, unies par la passion des outils développeurs.", HQ = () => "Conoce a las personas que están detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas para desarrolladores.", UQ = () => "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch die gemeinsame Leidenschaft für großartige Entwicklertools vereint ist.", WQ = () => "Incontra le persone che stanno dietro i18n Benchmark. Un team eterogeneo unito dalla passione comune per i grandi strumenti per gli sviluppatori.", GQ = () => "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor.", KQ = () => "了解 i18n 基准测试背后的团队成员。一个因对优秀开发工具的共同热情而团结在一起的多元化团队。", qQ = () => "i18n Benchmarkを支えるメンバーをご紹介します。優れた開発者ツールへの情熱で結ばれた多様なチームです。", JQ = () => "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.", YQ = () => "Познакомьтесь с людьми, создавшими i18n Benchmark. Команда единомышленников, влюбленных в отличные инструменты для разработчиков.", XQ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? VQ(e) : n === "es" ? HQ(e) : n === "de" ? UQ(e) : n === "it" ? WQ(e) : n === "pt" ? GQ(e) : n === "zh" ? KQ(e) : n === "ja" ? qQ(e) : n === "ko" ? JQ(e) : n === "ru" ? YQ(e) : BQ(e);
}), ZQ = () => "Our Team", QQ = () => "Notre équipe", $Q = () => "Nuestro equipo", e$ = () => "Unser Team", t$ = () => "Il nostro team", n$ = () => "Nossa equipe", r$ = () => "我们的团队", i$ = () => "私たちのチーム", a$ = () => "Our Team", o$ = () => "Наша команда", s$ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? QQ(e) : n === "es" ? $Q(e) : n === "de" ? e$(e) : n === "it" ? t$(e) : n === "pt" ? n$(e) : n === "zh" ? r$(e) : n === "ja" ? i$(e) : n === "ko" ? a$(e) : n === "ru" ? o$(e) : ZQ(e);
}), c$ = () => "Theme: Auto", l$ = () => "Thème : automatique", u$ = () => "Tema: Auto", d$ = () => "Thema: Auto", f$ = () => "Tema: Auto", p$ = () => "Tema: Automático", m$ = () => "主题：自动", h$ = () => "テーマ：自動", g$ = () => "Theme: Auto", _$ = () => "Тема: Авто", v$ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? l$(e) : n === "es" ? u$(e) : n === "de" ? d$(e) : n === "it" ? f$(e) : n === "pt" ? p$(e) : n === "zh" ? m$(e) : n === "ja" ? h$(e) : n === "ko" ? g$(e) : n === "ru" ? _$(e) : c$(e);
}), y$ = () => "Theme: Dark", b$ = () => "Thème : sombre", x$ = () => "Tema: Oscuro", S$ = () => "Thema: Dunkel", C$ = () => "Tema: Scuro", w$ = () => "Tema: Escuro", T$ = () => "主题：深色", E$ = () => "テーマ：ダーク", D$ = () => "Theme: Dark", O$ = () => "Тема: Темная", k$ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? b$(e) : n === "es" ? x$(e) : n === "de" ? S$(e) : n === "it" ? C$(e) : n === "pt" ? w$(e) : n === "zh" ? T$(e) : n === "ja" ? E$(e) : n === "ko" ? D$(e) : n === "ru" ? O$(e) : y$(e);
}), A$ = () => "Theme mode: auto (system). Click to switch to light mode.", j$ = () => "Mode thème : automatique (système). Cliquez pour passer en mode clair.", M$ = () => "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.", N$ = () => "Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.", P$ = () => "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.", F$ = () => "Modo de tema: auto (sistema). Clique para mudar para o modo claro.", I$ = () => "主题模式：自动（系统）。点击切换到浅色模式。", L$ = () => "テーマモード：自動（システム）。クリックするとライトモードに切り替わります。", R$ = () => "Theme mode: auto (system). Click to switch to light mode.", z$ = () => "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.", B$ = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? j$(e) : n === "es" ? M$(e) : n === "de" ? N$(e) : n === "it" ? P$(e) : n === "pt" ? F$(e) : n === "zh" ? I$(e) : n === "ja" ? L$(e) : n === "ko" ? R$(e) : n === "ru" ? z$(e) : A$(e);
}), V$ = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, H$ = (e) => `Mode thème : ${e?.mode}. Cliquez pour changer de mode.`, U$ = (e) => `Modo de tema: ${e?.mode}. Haz clic para cambiar de modo.`, W$ = (e) => `Themenmodus: ${e?.mode}. Klicken Sie hier, um den Modus zu wechseln.`, G$ = (e) => `Modalità tema: ${e?.mode}. Clicca per cambiare modalità.`, K$ = (e) => `Modo de tema: ${e?.mode}. Clique para mudar de modo.`, q$ = (e) => `主题模式：${e?.mode}。点击切换模式。`, J$ = (e) => `テーマモード：${e?.mode}。クリックしてモードを切り替えます。`, Y$ = (e) => `Theme mode: ${e?.mode}. Click to switch mode.`, X$ = (e) => `Режим темы: ${e?.mode}. Нажмите, чтобы сменить режим.`, Z$ = ((e, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? H$(e) : n === "es" ? U$(e) : n === "de" ? W$(e) : n === "it" ? G$(e) : n === "pt" ? K$(e) : n === "zh" ? q$(e) : n === "ja" ? J$(e) : n === "ko" ? Y$(e) : n === "ru" ? X$(e) : V$(e);
}), Q$ = () => "Theme: Light", $$ = () => "Thème : clair", e1 = () => "Tema: Claro", t1 = () => "Thema: Hell", n1 = () => "Tema: Chiaro", r1 = () => "Tema: Claro", i1 = () => "主题：浅色", a1 = () => "テーマ：ライト", o1 = () => "Theme: Light", s1 = () => "Тема: Светлая", c1 = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? $$(e) : n === "es" ? e1(e) : n === "de" ? t1(e) : n === "it" ? n1(e) : n === "pt" ? r1(e) : n === "zh" ? i1(e) : n === "ja" ? a1(e) : n === "ko" ? o1(e) : n === "ru" ? s1(e) : Q$(e);
}), l1 = a({
	about_grid_methodologyDesc: () => S,
	about_grid_methodologyTitle: () => C,
	about_grid_whyExistsDesc: () => w,
	about_grid_whyExistsTitle: () => T,
	about_header_description: () => E,
	about_header_title: () => D,
	about_whatWeMeasure_bundleSizeImpact: () => O,
	about_whatWeMeasure_bundleSizeImpactDesc: () => k,
	about_whatWeMeasure_hydrationCost: () => A,
	about_whatWeMeasure_hydrationCostDesc: () => j,
	about_whatWeMeasure_lazyLoading: () => M,
	about_whatWeMeasure_lazyLoadingDesc: () => N,
	about_whatWeMeasure_localeSwitch: () => P,
	about_whatWeMeasure_localeSwitchDesc: () => F,
	about_whatWeMeasure_renderingOverhead: () => I,
	about_whatWeMeasure_renderingOverheadDesc: () => L,
	about_whatWeMeasure_title: () => R,
	blog_header_description: () => z,
	blog_header_title: () => B,
	blog_list_post1Category: () => V,
	blog_list_post1Date: () => H,
	blog_list_post1Excerpt: () => U,
	blog_list_post1Title: () => W,
	blog_list_post2Category: () => G,
	blog_list_post2Date: () => K,
	blog_list_post2Excerpt: () => q,
	blog_list_post2Title: () => J,
	blog_list_post3Category: () => Y,
	blog_list_post3Date: () => X,
	blog_list_post3Excerpt: () => Z,
	blog_list_post3Title: () => Q,
	blog_list_post4Category: () => ho,
	blog_list_post4Date: () => Eo,
	blog_list_post4Excerpt: () => Lo,
	blog_list_post4Title: () => Jo,
	blog_list_post5Category: () => as,
	blog_list_post5Date: () => gs,
	blog_list_post5Excerpt: () => Ds,
	blog_list_post5Title: () => Rs,
	blog_list_post6Category: () => Ys,
	blog_list_post6Date: () => oc,
	blog_list_post6Excerpt: () => _c,
	blog_list_post6Title: () => Oc,
	blog_list_readMore: () => zc,
	careers_benefits_ossLabel: () => Xc,
	careers_benefits_ossValue: () => sl,
	careers_benefits_payLabel: () => vl,
	careers_benefits_payValue: () => kl,
	careers_benefits_remoteLabel: () => Bl,
	careers_benefits_remoteValue: () => Zl,
	careers_header_description: () => cu,
	careers_header_title: () => yu,
	careers_openPositions_applyNow: () => Au,
	careers_openPositions_backendDesc: () => Vu,
	careers_openPositions_backendTitle: () => Qu,
	careers_openPositions_community: () => ld,
	careers_openPositions_devrelDesc: () => bd,
	careers_openPositions_devrelTitle: () => jd,
	careers_openPositions_documentation: () => Hd,
	careers_openPositions_engineering: () => $d,
	careers_openPositions_frontendDesc: () => df,
	careers_openPositions_frontendTitle: () => Sf,
	careers_openPositions_fullTime: () => Nf,
	careers_openPositions_partTime: () => Wf,
	careers_openPositions_qaDesc: () => tp,
	careers_openPositions_qaTitle: () => fp,
	careers_openPositions_remote: () => Cp,
	careers_openPositions_sfRemote: () => Pp,
	careers_openPositions_title: () => Gp,
	careers_openPositions_writerDesc: () => nm,
	careers_openPositions_writerTitle: () => pm,
	contact_form_bugReport: () => wm,
	contact_form_contribution: () => Fm,
	contact_form_email: () => Km,
	contact_form_emailPlaceholder: () => rh,
	contact_form_message: () => mh,
	contact_form_messagePlaceholder: () => Th,
	contact_form_methodologyQuestion: () => Ih,
	contact_form_name: () => qh,
	contact_form_newBenchmarkIdea: () => ig,
	contact_form_other: () => hg,
	contact_form_sendMessage: () => Eg,
	contact_form_topic: () => Lg,
	contact_form_yourName: () => Jg,
	contact_header_description: () => a_,
	contact_header_title: () => g_,
	faq_header_description: () => D_,
	faq_header_title: () => R_,
	faq_list_a1: () => Y_,
	faq_list_a2: () => ov,
	faq_list_a3: () => _v,
	faq_list_a4: () => Ov,
	faq_list_a5: () => zv,
	faq_list_a6: () => Xv,
	faq_list_a7: () => sy,
	faq_list_a8: () => vy,
	faq_list_q1: () => ky,
	faq_list_q2: () => By,
	faq_list_q3: () => Zy,
	faq_list_q4: () => cb,
	faq_list_q5: () => yb,
	faq_list_q6: () => Ab,
	faq_list_q7: () => Vb,
	faq_list_q8: () => Qb,
	footer_builtWith: () => lx,
	footer_contact: () => bx,
	footer_contributing: () => jx,
	footer_description: () => Hx,
	footer_github: () => $x,
	footer_methodology: () => uS,
	footer_resources: () => xS,
	footer_title: () => MS,
	header_blog: () => US,
	header_careers: () => eC,
	header_contact: () => dC,
	header_faq: () => SC,
	header_home: () => NC,
	header_methodology: () => WC,
	header_mockPages: () => tw,
	header_pricing: () => fw,
	header_products: () => Cw,
	header_settings: () => Pw,
	header_team: () => Gw,
	home_hero_description: () => nT,
	home_hero_methodology: () => pT,
	home_hero_title: () => wT,
	home_hero_viewResults: () => FT,
	home_resultsTable_builtIn: () => KT,
	home_resultsTable_bundleSize: () => rE,
	home_resultsTable_lazyLoading: () => mE,
	home_resultsTable_library: () => TE,
	home_resultsTable_lookupTime: () => IE,
	home_resultsTable_manual: () => qE,
	home_resultsTable_title: () => iD,
	home_resultsTable_yes: () => hD,
	home_understandingImpact_cacheDesc: () => ED,
	home_understandingImpact_cacheLabel: () => LD,
	home_understandingImpact_foucDesc: () => JD,
	home_understandingImpact_foucLabel: () => aO,
	home_understandingImpact_measuresDesc: () => gO,
	home_understandingImpact_measuresTitle: () => DO,
	home_understandingImpact_singleJsonBullet1: () => RO,
	home_understandingImpact_singleJsonBullet2: () => YO,
	home_understandingImpact_singleJsonBullet3: () => ok,
	home_understandingImpact_singleJsonIntro: () => _k,
	home_understandingImpact_singleJsonTitle: () => Ok,
	home_understandingImpact_title: () => zk,
	home_understandingImpact_tradeOffsIntro: () => Xk,
	home_understandingImpact_tradeOffsTitle: () => sA,
	home_understandingImpact_waterfallDesc: () => vA,
	home_understandingImpact_waterfallLabel: () => kA,
	home_whyItMatters_bundleSizeDesc: () => BA,
	home_whyItMatters_bundleSizeTitle: () => ZA,
	home_whyItMatters_dynamicLoadingDesc: () => cj,
	home_whyItMatters_dynamicLoadingTitle: () => yj,
	home_whyItMatters_renderingDesc: () => Aj,
	home_whyItMatters_renderingTitle: () => Vj,
	home_whyItMatters_title: () => Qj,
	mockBanner: () => lM,
	notFound_description: () => bM,
	notFound_returnHome: () => jM,
	notFound_title: () => HM,
	pricing_header_description: () => $M,
	pricing_header_title: () => uN,
	pricing_tiers_contactSales: () => xN,
	pricing_tiers_enterpriseFeature1: () => MN,
	pricing_tiers_enterpriseFeature2: () => UN,
	pricing_tiers_enterpriseFeature3: () => eP,
	pricing_tiers_enterpriseFeature4: () => dP,
	pricing_tiers_enterpriseFeature5: () => SP,
	pricing_tiers_enterpriseFeature6: () => NP,
	pricing_tiers_enterpriseFeature7: () => WP,
	pricing_tiers_enterpriseName: () => tF,
	pricing_tiers_enterprisePrice: () => fF,
	pricing_tiers_getStarted: () => CF,
	pricing_tiers_proFeature1: () => PF,
	pricing_tiers_proFeature2: () => GF,
	pricing_tiers_proFeature3: () => nI,
	pricing_tiers_proFeature4: () => pI,
	pricing_tiers_proFeature5: () => wI,
	pricing_tiers_proFeature6: () => FI,
	pricing_tiers_proName: () => KI,
	pricing_tiers_proPeriod: () => rL,
	pricing_tiers_proPrice: () => mL,
	pricing_tiers_starterFeature1: () => TL,
	pricing_tiers_starterFeature2: () => IL,
	pricing_tiers_starterFeature3: () => qL,
	pricing_tiers_starterFeature4: () => iR,
	pricing_tiers_starterName: () => hR,
	pricing_tiers_starterPeriod: () => ER,
	pricing_tiers_starterPrice: () => LR,
	products_grid_cliDesc: () => JR,
	products_grid_cliName: () => az,
	products_grid_cliPrice: () => gz,
	products_grid_cloudDesc: () => Dz,
	products_grid_cloudName: () => Rz,
	products_grid_cloudPrice: () => Yz,
	products_grid_enterpriseDesc: () => oB,
	products_grid_enterpriseName: () => _B,
	products_grid_enterprisePrice: () => OB,
	products_grid_learnMore: () => zB,
	products_grid_migrationDesc: () => XB,
	products_grid_migrationName: () => sV,
	products_grid_migrationPrice: () => vV,
	products_grid_optimizerDesc: () => kV,
	products_grid_optimizerName: () => BV,
	products_grid_optimizerPrice: () => ZV,
	products_grid_qaDesc: () => cH,
	products_grid_qaName: () => yH,
	products_grid_qaPrice: () => AH,
	products_header_description: () => VH,
	products_header_title: () => QH,
	settings_apiAccess_apiKey: () => lU,
	settings_apiAccess_copy: () => bU,
	settings_apiAccess_description: () => jU,
	settings_apiAccess_title: () => HU,
	settings_footer_cancel: () => $U,
	settings_footer_saveChanges: () => uW,
	settings_header_description: () => xW,
	settings_header_title: () => MW,
	settings_preferences_arabic: () => UW,
	settings_preferences_chinese: () => eG,
	settings_preferences_darkColorScheme: () => dG,
	settings_preferences_darkMode: () => SG,
	settings_preferences_defaultLanguage: () => NG,
	settings_preferences_emailNotifications: () => WG,
	settings_preferences_english: () => tK,
	settings_preferences_french: () => fK,
	settings_preferences_german: () => CK,
	settings_preferences_japanese: () => PK,
	settings_preferences_spanish: () => GK,
	settings_preferences_title: () => nq,
	settings_preferences_toggleDarkMode: () => pq,
	settings_preferences_toggleNotifications: () => wq,
	settings_preferences_weeklyReports: () => Fq,
	settings_profile_displayName: () => Kq,
	settings_profile_email: () => rJ,
	settings_profile_title: () => mJ,
	shared_appName: () => TJ,
	shared_contactEmail: () => IJ,
	shared_goToGithub: () => qJ,
	shared_siteName: () => iY,
	team_grid_member1Bio: () => hY,
	team_grid_member1Name: () => $,
	team_grid_member1Role: () => IY,
	team_grid_member2Bio: () => qY,
	team_grid_member2Name: () => iX,
	team_grid_member2Role: () => hX,
	team_grid_member3Bio: () => EX,
	team_grid_member3Name: () => LX,
	team_grid_member3Role: () => JX,
	team_grid_member4Bio: () => aZ,
	team_grid_member4Name: () => gZ,
	team_grid_member4Role: () => DZ,
	team_grid_member5Bio: () => RZ,
	team_grid_member5Name: () => YZ,
	team_grid_member5Role: () => oQ,
	team_grid_member6Bio: () => _Q,
	team_grid_member6Name: () => OQ,
	team_grid_member6Role: () => zQ,
	team_header_description: () => XQ,
	team_header_title: () => s$,
	themeToggle_auto: () => v$,
	themeToggle_dark: () => k$,
	themeToggle_labelAuto: () => B$,
	themeToggle_labelOther: () => Z$,
	themeToggle_light: () => c1
}), u1 = a({
	about_grid_methodologyDesc: () => S,
	about_grid_methodologyTitle: () => C,
	about_grid_whyExistsDesc: () => w,
	about_grid_whyExistsTitle: () => T,
	about_header_description: () => E,
	about_header_title: () => D,
	about_whatWeMeasure_bundleSizeImpact: () => O,
	about_whatWeMeasure_bundleSizeImpactDesc: () => k,
	about_whatWeMeasure_hydrationCost: () => A,
	about_whatWeMeasure_hydrationCostDesc: () => j,
	about_whatWeMeasure_lazyLoading: () => M,
	about_whatWeMeasure_lazyLoadingDesc: () => N,
	about_whatWeMeasure_localeSwitch: () => P,
	about_whatWeMeasure_localeSwitchDesc: () => F,
	about_whatWeMeasure_renderingOverhead: () => I,
	about_whatWeMeasure_renderingOverheadDesc: () => L,
	about_whatWeMeasure_title: () => R,
	blog_header_description: () => z,
	blog_header_title: () => B,
	blog_list_post1Category: () => V,
	blog_list_post1Date: () => H,
	blog_list_post1Excerpt: () => U,
	blog_list_post1Title: () => W,
	blog_list_post2Category: () => G,
	blog_list_post2Date: () => K,
	blog_list_post2Excerpt: () => q,
	blog_list_post2Title: () => J,
	blog_list_post3Category: () => Y,
	blog_list_post3Date: () => X,
	blog_list_post3Excerpt: () => Z,
	blog_list_post3Title: () => Q,
	blog_list_post4Category: () => ho,
	blog_list_post4Date: () => Eo,
	blog_list_post4Excerpt: () => Lo,
	blog_list_post4Title: () => Jo,
	blog_list_post5Category: () => as,
	blog_list_post5Date: () => gs,
	blog_list_post5Excerpt: () => Ds,
	blog_list_post5Title: () => Rs,
	blog_list_post6Category: () => Ys,
	blog_list_post6Date: () => oc,
	blog_list_post6Excerpt: () => _c,
	blog_list_post6Title: () => Oc,
	blog_list_readMore: () => zc,
	careers_benefits_ossLabel: () => Xc,
	careers_benefits_ossValue: () => sl,
	careers_benefits_payLabel: () => vl,
	careers_benefits_payValue: () => kl,
	careers_benefits_remoteLabel: () => Bl,
	careers_benefits_remoteValue: () => Zl,
	careers_header_description: () => cu,
	careers_header_title: () => yu,
	careers_openPositions_applyNow: () => Au,
	careers_openPositions_backendDesc: () => Vu,
	careers_openPositions_backendTitle: () => Qu,
	careers_openPositions_community: () => ld,
	careers_openPositions_devrelDesc: () => bd,
	careers_openPositions_devrelTitle: () => jd,
	careers_openPositions_documentation: () => Hd,
	careers_openPositions_engineering: () => $d,
	careers_openPositions_frontendDesc: () => df,
	careers_openPositions_frontendTitle: () => Sf,
	careers_openPositions_fullTime: () => Nf,
	careers_openPositions_partTime: () => Wf,
	careers_openPositions_qaDesc: () => tp,
	careers_openPositions_qaTitle: () => fp,
	careers_openPositions_remote: () => Cp,
	careers_openPositions_sfRemote: () => Pp,
	careers_openPositions_title: () => Gp,
	careers_openPositions_writerDesc: () => nm,
	careers_openPositions_writerTitle: () => pm,
	contact_form_bugReport: () => wm,
	contact_form_contribution: () => Fm,
	contact_form_email: () => Km,
	contact_form_emailPlaceholder: () => rh,
	contact_form_message: () => mh,
	contact_form_messagePlaceholder: () => Th,
	contact_form_methodologyQuestion: () => Ih,
	contact_form_name: () => qh,
	contact_form_newBenchmarkIdea: () => ig,
	contact_form_other: () => hg,
	contact_form_sendMessage: () => Eg,
	contact_form_topic: () => Lg,
	contact_form_yourName: () => Jg,
	contact_header_description: () => a_,
	contact_header_title: () => g_,
	faq_header_description: () => D_,
	faq_header_title: () => R_,
	faq_list_a1: () => Y_,
	faq_list_a2: () => ov,
	faq_list_a3: () => _v,
	faq_list_a4: () => Ov,
	faq_list_a5: () => zv,
	faq_list_a6: () => Xv,
	faq_list_a7: () => sy,
	faq_list_a8: () => vy,
	faq_list_q1: () => ky,
	faq_list_q2: () => By,
	faq_list_q3: () => Zy,
	faq_list_q4: () => cb,
	faq_list_q5: () => yb,
	faq_list_q6: () => Ab,
	faq_list_q7: () => Vb,
	faq_list_q8: () => Qb,
	footer_builtWith: () => lx,
	footer_contact: () => bx,
	footer_contributing: () => jx,
	footer_description: () => Hx,
	footer_github: () => $x,
	footer_methodology: () => uS,
	footer_resources: () => xS,
	footer_title: () => MS,
	header_blog: () => US,
	header_careers: () => eC,
	header_contact: () => dC,
	header_faq: () => SC,
	header_home: () => NC,
	header_methodology: () => WC,
	header_mockPages: () => tw,
	header_pricing: () => fw,
	header_products: () => Cw,
	header_settings: () => Pw,
	header_team: () => Gw,
	home_hero_description: () => nT,
	home_hero_methodology: () => pT,
	home_hero_title: () => wT,
	home_hero_viewResults: () => FT,
	home_resultsTable_builtIn: () => KT,
	home_resultsTable_bundleSize: () => rE,
	home_resultsTable_lazyLoading: () => mE,
	home_resultsTable_library: () => TE,
	home_resultsTable_lookupTime: () => IE,
	home_resultsTable_manual: () => qE,
	home_resultsTable_title: () => iD,
	home_resultsTable_yes: () => hD,
	home_understandingImpact_cacheDesc: () => ED,
	home_understandingImpact_cacheLabel: () => LD,
	home_understandingImpact_foucDesc: () => JD,
	home_understandingImpact_foucLabel: () => aO,
	home_understandingImpact_measuresDesc: () => gO,
	home_understandingImpact_measuresTitle: () => DO,
	home_understandingImpact_singleJsonBullet1: () => RO,
	home_understandingImpact_singleJsonBullet2: () => YO,
	home_understandingImpact_singleJsonBullet3: () => ok,
	home_understandingImpact_singleJsonIntro: () => _k,
	home_understandingImpact_singleJsonTitle: () => Ok,
	home_understandingImpact_title: () => zk,
	home_understandingImpact_tradeOffsIntro: () => Xk,
	home_understandingImpact_tradeOffsTitle: () => sA,
	home_understandingImpact_waterfallDesc: () => vA,
	home_understandingImpact_waterfallLabel: () => kA,
	home_whyItMatters_bundleSizeDesc: () => BA,
	home_whyItMatters_bundleSizeTitle: () => ZA,
	home_whyItMatters_dynamicLoadingDesc: () => cj,
	home_whyItMatters_dynamicLoadingTitle: () => yj,
	home_whyItMatters_renderingDesc: () => Aj,
	home_whyItMatters_renderingTitle: () => Vj,
	home_whyItMatters_title: () => Qj,
	m: () => l1,
	mockBanner: () => lM,
	notFound_description: () => bM,
	notFound_returnHome: () => jM,
	notFound_title: () => HM,
	pricing_header_description: () => $M,
	pricing_header_title: () => uN,
	pricing_tiers_contactSales: () => xN,
	pricing_tiers_enterpriseFeature1: () => MN,
	pricing_tiers_enterpriseFeature2: () => UN,
	pricing_tiers_enterpriseFeature3: () => eP,
	pricing_tiers_enterpriseFeature4: () => dP,
	pricing_tiers_enterpriseFeature5: () => SP,
	pricing_tiers_enterpriseFeature6: () => NP,
	pricing_tiers_enterpriseFeature7: () => WP,
	pricing_tiers_enterpriseName: () => tF,
	pricing_tiers_enterprisePrice: () => fF,
	pricing_tiers_getStarted: () => CF,
	pricing_tiers_proFeature1: () => PF,
	pricing_tiers_proFeature2: () => GF,
	pricing_tiers_proFeature3: () => nI,
	pricing_tiers_proFeature4: () => pI,
	pricing_tiers_proFeature5: () => wI,
	pricing_tiers_proFeature6: () => FI,
	pricing_tiers_proName: () => KI,
	pricing_tiers_proPeriod: () => rL,
	pricing_tiers_proPrice: () => mL,
	pricing_tiers_starterFeature1: () => TL,
	pricing_tiers_starterFeature2: () => IL,
	pricing_tiers_starterFeature3: () => qL,
	pricing_tiers_starterFeature4: () => iR,
	pricing_tiers_starterName: () => hR,
	pricing_tiers_starterPeriod: () => ER,
	pricing_tiers_starterPrice: () => LR,
	products_grid_cliDesc: () => JR,
	products_grid_cliName: () => az,
	products_grid_cliPrice: () => gz,
	products_grid_cloudDesc: () => Dz,
	products_grid_cloudName: () => Rz,
	products_grid_cloudPrice: () => Yz,
	products_grid_enterpriseDesc: () => oB,
	products_grid_enterpriseName: () => _B,
	products_grid_enterprisePrice: () => OB,
	products_grid_learnMore: () => zB,
	products_grid_migrationDesc: () => XB,
	products_grid_migrationName: () => sV,
	products_grid_migrationPrice: () => vV,
	products_grid_optimizerDesc: () => kV,
	products_grid_optimizerName: () => BV,
	products_grid_optimizerPrice: () => ZV,
	products_grid_qaDesc: () => cH,
	products_grid_qaName: () => yH,
	products_grid_qaPrice: () => AH,
	products_header_description: () => VH,
	products_header_title: () => QH,
	settings_apiAccess_apiKey: () => lU,
	settings_apiAccess_copy: () => bU,
	settings_apiAccess_description: () => jU,
	settings_apiAccess_title: () => HU,
	settings_footer_cancel: () => $U,
	settings_footer_saveChanges: () => uW,
	settings_header_description: () => xW,
	settings_header_title: () => MW,
	settings_preferences_arabic: () => UW,
	settings_preferences_chinese: () => eG,
	settings_preferences_darkColorScheme: () => dG,
	settings_preferences_darkMode: () => SG,
	settings_preferences_defaultLanguage: () => NG,
	settings_preferences_emailNotifications: () => WG,
	settings_preferences_english: () => tK,
	settings_preferences_french: () => fK,
	settings_preferences_german: () => CK,
	settings_preferences_japanese: () => PK,
	settings_preferences_spanish: () => GK,
	settings_preferences_title: () => nq,
	settings_preferences_toggleDarkMode: () => pq,
	settings_preferences_toggleNotifications: () => wq,
	settings_preferences_weeklyReports: () => Fq,
	settings_profile_displayName: () => Kq,
	settings_profile_email: () => rJ,
	settings_profile_title: () => mJ,
	shared_appName: () => TJ,
	shared_contactEmail: () => IJ,
	shared_goToGithub: () => qJ,
	shared_siteName: () => iY,
	team_grid_member1Bio: () => hY,
	team_grid_member1Name: () => $,
	team_grid_member1Role: () => IY,
	team_grid_member2Bio: () => qY,
	team_grid_member2Name: () => iX,
	team_grid_member2Role: () => hX,
	team_grid_member3Bio: () => EX,
	team_grid_member3Name: () => LX,
	team_grid_member3Role: () => JX,
	team_grid_member4Bio: () => aZ,
	team_grid_member4Name: () => gZ,
	team_grid_member4Role: () => DZ,
	team_grid_member5Bio: () => RZ,
	team_grid_member5Name: () => YZ,
	team_grid_member5Role: () => oQ,
	team_grid_member6Bio: () => _Q,
	team_grid_member6Name: () => OQ,
	team_grid_member6Role: () => zQ,
	team_header_description: () => XQ,
	team_header_title: () => s$,
	themeToggle_auto: () => v$,
	themeToggle_dark: () => k$,
	themeToggle_labelAuto: () => B$,
	themeToggle_labelOther: () => Z$,
	themeToggle_light: () => c1
}), d1 = n("<div class=\"mx-auto max-w-3xl space-y-4\">"), f1 = n("<details class=\"group rounded-lg border border-border bg-card\"><summary class=\"cursor-pointer px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/50\"></summary><p class=\"px-6 pb-4 text-sm text-muted-foreground\">");
function p1() {
	let n = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8
	].map((e) => ({
		q: u1[`faq_list_q${e}`]?.(),
		a: u1[`faq_list_a${e}`]?.()
	}));
	return (() => {
		var i = d1();
		return t(i, e(r, {
			each: n,
			children: (e) => (() => {
				var n = f1(), r = n.firstChild, i = r.nextSibling;
				return t(r, () => e.q), t(i, () => e.a), n;
			})()
		})), i;
	})();
}
export { p1 as default };
