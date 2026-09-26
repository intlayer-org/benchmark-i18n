import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useMemo as o, useState as s } from "react";
import { Fragment as c, jsx as l } from "react/jsx-runtime";
var ee = {
	key: "app",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Go to GitHub\"},\"b\":{\"e\":\"Home\",\"f\":\"Methodology\",\"g\":\"Mock Pages\",\"i\":\"Products\",\"h\":\"Pricing\",\"k\":\"Team\",\"a\":\"Blog\",\"b\":\"Careers\",\"d\":\"FAQ\",\"c\":\"Contact\",\"j\":\"Settings\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.\",\"g\":\"Resources\",\"e\":\"GitHub\",\"f\":\"Methodology\",\"b\":\"Contact\",\"c\":\"Contributing\",\"a\":\"i18n Benchmark — Open-source project. Built with React, Vite & React Router.\"},\"f\":{\"a\":\"Theme: Auto\",\"b\":\"Theme: Dark\",\"e\":\"Theme: Light\",\"c\":\"Theme mode: auto (system). Click to switch to light mode.\",\"d\":\"Theme mode: {mode}. Click to switch mode.\"},\"c\":\"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.\"},\"fr\":{\"e\":{\"a\":\"Banc d'essai i18n\",\"d\":\"Benchmark i18n\",\"b\":\"contact@intlayer.org\",\"c\":\"Aller sur GitHub\"},\"b\":{\"e\":\"Accueil\",\"f\":\"Méthodologie\",\"g\":\"Pages fictives\",\"i\":\"Produits\",\"h\":\"Tarification\",\"k\":\"Équipe\",\"a\":\"Blog\",\"b\":\"Carrières\",\"d\":\"FAQ\",\"c\":\"Contact\",\"j\":\"Paramètres\"},\"a\":{\"h\":\"Benchmark i18n\",\"d\":\"Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.\",\"g\":\"Ressources\",\"e\":\"GitHub\",\"f\":\"Méthodologie\",\"b\":\"Contact\",\"c\":\"Contribution\",\"a\":\"Benchmark i18n — Projet open source. Construit avec React, Vite et React Router.\"},\"f\":{\"a\":\"Thème : Auto\",\"b\":\"Thème : Sombre\",\"e\":\"Thème : Clair\",\"c\":\"Mode thématique : auto (système). Cliquez pour passer en mode clair.\",\"d\":\"Mode thématique : {mode}. Cliquez pour changer de mode.\"},\"c\":\"⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.\"},\"es\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Ir a GitHub\"},\"b\":{\"e\":\"Inicio\",\"f\":\"Metodología\",\"g\":\"Páginas de prueba\",\"i\":\"Productos\",\"h\":\"Precios\",\"k\":\"Equipo\",\"a\":\"Blog\",\"b\":\"Carreras\",\"d\":\"FAQ\",\"c\":\"Contacto\",\"j\":\"Ajustes\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga и la reactividad de la aplicación.\",\"g\":\"Recursos\",\"e\":\"GitHub\",\"f\":\"Metodología\",\"b\":\"Contacto\",\"c\":\"Contribución\",\"a\":\"i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y React Router.\"},\"f\":{\"a\":\"Tema: Automático\",\"b\":\"Tema: Oscuro\",\"e\":\"Tema: Claro\",\"c\":\"Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.\",\"d\":\"Modo de tema: {mode}. Haga clic para cambiar de modo.\"},\"c\":\"⚠️ Esta página contiene datos de prueba solo para fines de benchmarking. No está relacionada con ninguna empresa o servicio real.\"},\"de\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Zu GitHub\"},\"b\":{\"e\":\"Startseite\",\"f\":\"Methodik\",\"g\":\"Testseiten\",\"i\":\"Produkte\",\"h\":\"Preise\",\"k\":\"Team\",\"a\":\"Blog\",\"b\":\"Karriere\",\"d\":\"FAQ\",\"c\":\"Kontakt\",\"j\":\"Einstellungen\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladezeit und die App-Reaktivität.\",\"g\":\"Ressourcen\",\"e\":\"GitHub\",\"f\":\"Methodik\",\"b\":\"Kontakt\",\"c\":\"Beitrag\",\"a\":\"i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & React Router.\"},\"f\":{\"a\":\"Design: Auto\",\"b\":\"Design: Dunkel\",\"e\":\"Design: Hell\",\"c\":\"Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.\",\"d\":\"Design-Modus: {mode}. Klicken Sie hier, um den Modus zu wechseln.\"},\"c\":\"⚠️ Diese Seite enthält Mock-Daten nur zu Benchmarking-Zwecken. Sie steht in keinem Zusammenhang mit einem echten Unternehmen oder einer echten Dienstleistung.\"},\"it\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Vai su GitHub\"},\"b\":{\"e\":\"Home\",\"f\":\"Metodologia\",\"g\":\"Pagine di prova\",\"i\":\"Prodotti\",\"h\":\"Prezzi\",\"k\":\"Team\",\"a\":\"Blog\",\"b\":\"Carriere\",\"d\":\"FAQ\",\"c\":\"Contatti\",\"j\":\"Impostazioni\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sul tempo di caricamento e sulla reattività dell'app.\",\"g\":\"Risorse\",\"e\":\"GitHub\",\"f\":\"Metodologia\",\"b\":\"Contatti\",\"c\":\"Contribuire\",\"a\":\"i18n Benchmark — Progetto open source. Costruito con React, Vite e React Router.\"},\"f\":{\"a\":\"Tema: Auto\",\"b\":\"Tema: Scuro\",\"e\":\"Tema: Chiaro\",\"c\":\"Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.\",\"d\":\"Modalità tema: {mode}. Fai clic per cambiare modalità.\"},\"c\":\"⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale.\"},\"pt\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Ir para o GitHub\"},\"b\":{\"e\":\"Início\",\"f\":\"Metodologia\",\"g\":\"Páginas de Teste\",\"i\":\"Produtos\",\"h\":\"Preços\",\"k\":\"Equipe\",\"a\":\"Blog\",\"b\":\"Carreiras\",\"d\":\"FAQ\",\"c\":\"Contato\",\"j\":\"Configurações\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade do aplicativo.\",\"g\":\"Recursos\",\"e\":\"GitHub\",\"f\":\"Metodologia\",\"b\":\"Contato\",\"c\":\"Contribuindo\",\"a\":\"i18n Benchmark — Projeto de código aberto. Construído com React, Vite e React Router.\"},\"f\":{\"a\":\"Tema: Automático\",\"b\":\"Tema: Escuro\",\"e\":\"Tema: Claro\",\"c\":\"Modo de tema: automático (sistema). Clique para mudar para o modo claro.\",\"d\":\"Modo de tema: {mode}. Clique para mudar o modo.\"},\"c\":\"⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhum negócio ou serviço real.\"},\"zh\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"前往 GitHub\"},\"b\":{\"e\":\"首页\",\"f\":\"方法论\",\"g\":\"模拟页面\",\"i\":\"产品\",\"h\":\"定价\",\"k\":\"团队\",\"a\":\"博客\",\"b\":\"职业\",\"d\":\"常见问题\",\"c\":\"联系我们\",\"j\":\"设置\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"一个开源测试应用程序，用于衡量国际化库对捆绑包大小、加载时间以及应用程序反应性的真实影响。\",\"g\":\"资源\",\"e\":\"GitHub\",\"f\":\"方法论\",\"b\":\"联系\",\"c\":\"贡献\",\"a\":\"i18n Benchmark — 开源项目。使用 React, Vite 和 React Router 构建。\"},\"f\":{\"a\":\"主题：自动\",\"b\":\"主题：深色\",\"e\":\"主题：亮色\",\"c\":\"主题模式：自动（系统）。点击切换到亮色模式。\",\"d\":\"主题模式：{mode}。点击切换模式。\"},\"c\":\"⚠️ 本页面包含仅用于基准测试目的的模拟数据。它与任何真实的业务或服务无关。\"},\"ja\":{\"e\":{\"a\":\"i18n ベンチ\",\"d\":\"i18n ベンチマーク\",\"b\":\"contact@intlayer.org\",\"c\":\"GitHub へ\"},\"b\":{\"e\":\"ホーム\",\"f\":\"方法論\",\"g\":\"モックページ\",\"i\":\"製品\",\"h\":\"価格設定\",\"k\":\"チーム\",\"a\":\"ブログ\",\"b\":\"採用情報\",\"d\":\"よくある質問\",\"c\":\"お問い合わせ\",\"j\":\"設定\"},\"a\":{\"h\":\"i18n ベンチマーク\",\"d\":\"国際化ライブラリがバンドルサイズ、ロード時間、およびアプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーションです。\",\"g\":\"リソース\",\"e\":\"GitHub\",\"f\":\"方法論\",\"b\":\"連絡先\",\"c\":\"貢献\",\"a\":\"i18n ベンチマーク — オープンソースプロジェクト。React、Vite、および React Router で構築されています。\"},\"f\":{\"a\":\"テーマ：自動\",\"b\":\"テーマ：ダーク\",\"e\":\"テーマ：ライト\",\"c\":\"テーマモード：自動（システム）。クリックしてライトモードに切り替えます。\",\"d\":\"テーマモード：{mode}。クリックしてモードを切り替えます。\"},\"c\":\"⚠️ このページにはベンチマーク目的のモックデータのみが含まれています。実際のビジネスやサービスとは関係ありません。\"},\"ko\":{\"e\":{\"a\":\"i18n 벤치\",\"d\":\"i18n 벤치마크\",\"b\":\"contact@intlayer.org\",\"c\":\"GitHub으로 이동\"},\"b\":{\"e\":\"홈\",\"f\":\"방법론\",\"g\":\"모적 페이지\",\"i\":\"제품\",\"h\":\"가격\",\"k\":\"팀\",\"a\":\"블로그\",\"b\":\"채용\",\"d\":\"자주 묻는 질문\",\"c\":\"문의\",\"j\":\"설정\"},\"a\":{\"h\":\"i18n 벤치마크\",\"d\":\"번들 크기, 로딩 시간 및 앱 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.\",\"g\":\"리소스\",\"e\":\"GitHub\",\"f\":\"방법론\",\"b\":\"연락처\",\"c\":\"기여\",\"a\":\"i18n 벤치마크 — 오픈 소스 프로젝트입니다. React, Vite 및 React Router로 구축되었습니다.\"},\"f\":{\"a\":\"테마: 자동\",\"b\":\"테마: 다크\",\"e\":\"테마: 라이트\",\"c\":\"테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.\",\"d\":\"테마 모드: {mode}. 모드를 전환하려면 클릭하세요.\"},\"c\":\"⚠️ 이 페이지에는 벤치마킹 목적의 모의 데이터만 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.\"},\"ru\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Перейти на GitHub\"},\"b\":{\"e\":\"Главная\",\"f\":\"Методология\",\"g\":\"Мок-страницы\",\"i\":\"Продукты\",\"h\":\"Цены\",\"k\":\"Команда\",\"a\":\"Блог\",\"b\":\"Вакансии\",\"d\":\"FAQ\",\"c\":\"Контакт\",\"j\":\"Настройки\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.\",\"g\":\"Ресурсы\",\"e\":\"GitHub\",\"f\":\"Методология\",\"b\":\"Контакт\",\"c\":\"Вклад в проект\",\"a\":\"i18n Benchmark — проект с открытым исходным кодом. Построен на React, Vite и React Router.\"},\"f\":{\"a\":\"Тема: Авто\",\"b\":\"Тема: Темная\",\"e\":\"Тема: Светлая\",\"c\":\"Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.\",\"d\":\"Режим темы: {mode}. Нажмите, чтобы изменить режим.\"},\"c\":\"⚠️ Эта страница содержит мок-данные только для целей бенчмаркинга. Она не связана с каким-либо реальным бизнесом или услугой.\"}}}")
}, u = {
	locales: [
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
	],
	requiredLocales: [
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
	],
	strictMode: "inclusive",
	defaultLocale: "en"
}, d = {
	mode: "prefix-all",
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, te = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var f = {
	getCookie: (e) => document.cookie.split(";").find((t) => t.trim().startsWith(`${e}=`))?.split("=")[1],
	getLocaleStorage: (e) => localStorage.getItem(e),
	getSessionStorage: (e) => sessionStorage.getItem(e),
	isCookieEnabled: !0,
	setCookieStore: (e, t, n) => cookieStore.set({
		name: e,
		value: t,
		path: n.path,
		domain: n.domain,
		expires: n.expires,
		sameSite: n.sameSite
	}),
	setCookieString: (e, t) => {
		document.cookie = t;
	},
	setSessionStorage: (e, t) => sessionStorage.setItem(e, t),
	setLocaleStorage: (e, t) => localStorage.setItem(e, t)
}, p = (e = f) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!te) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ne = !1, m, re = () => typeof window > "u" ? p(f) : (ne ||= (m = p(f), !0), m), h = /* @__PURE__ */ new Map(), g = (e, t) => Object.create(new Proxy(e, {
	get: (e, t, n) => {
		if (typeof t != "string" || t === "constructor" || t in e) return Reflect.get(e, t, n);
		let { value: r } = n;
		if (r == null) return;
		let i = Object(r)[t];
		return typeof i == "function" ? i.bind(r) : i;
	},
	has: (e, n) => n in e || typeof n == "string" && n !== "constructor" && t !== null && n in t
}), {
	toString: { value() {
		return String(this.value ?? "");
	} },
	valueOf: { value() {
		return this.value;
	} },
	[Symbol.toPrimitive]: { value() {
		return this.value ?? "";
	} }
}), ie = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = h.get(t);
	i || (i = /* @__PURE__ */ new Map(), h.set(t, i));
	let a = i.get(r);
	return a || (a = g(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ae = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : l(c, { children: e }),
	value: t,
	...n
}, ie(t)), _ = /* @__PURE__ */ new WeakMap(), v = 0, oe = (e) => {
	if (!e) return "base";
	let t = _.get(e);
	if (t) return t;
	v += 1;
	let n = `p${v}`;
	return _.set(e, n), n;
}, se = 256, y = /* @__PURE__ */ new WeakMap(), b = (e) => typeof e == "object" && !!e, x = (e, t, n) => `${e}_${t}_${oe(n)}`, S = (e, t) => {
	if (!b(e)) return { hit: !1 };
	let n = y.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, C = (e, t, n) => {
	if (!b(e)) return n;
	let r = y.get(e);
	return r || (r = /* @__PURE__ */ new Map(), y.set(e, r)), r.size >= se && r.clear(), r.set(t, n), n;
}, ce = "translation", le = "enumeration", ue = "plural", de = "condition", w = "insertion", fe = "object", pe = "array", T = "markdown", E = "html", me = "gender", he = "select", D = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), O = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, O);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => O(e, D(t, e, {
		type: pe,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: fe,
			key: r
		};
		if (t.eager) {
			n[r] = O(e[r], D(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = O(e[r], D(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, k = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), A = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, j = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !A(e) || !A(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? j(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, M = (e, t, n) => {
	let r = (t) => e[t], i = r(t);
	if (typeof i == "string") return i;
	let a = [
		t,
		t.split("-")[0],
		n,
		n?.split("-")[0]
	], o = [];
	for (let e = 0; e < a.length; e++) {
		let t = a[e];
		if (!t || a.indexOf(t) < e) continue;
		let n = r(t);
		if (n !== void 0) {
			if (typeof n == "string") {
				if (o.length === 0) return n;
				continue;
			}
			o.push(n);
		}
	}
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => j(e, t));
}, N = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, P = (e) => {
	if (typeof e == "string") return e;
	if (N(e)) return e.nodeType === "html" ? e[E] : e[T];
}, F = (e, t) => {
	if (typeof e == "string") return t;
	if (N(e)) {
		let n = e.nodeType === "html" ? E : T;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, I = (e, t, n, r, i) => {
	let a = F(e, k(P(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, L = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, R = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, z = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? L : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = M(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ce,
				key: e
			}]
		});
	}
}, B = L, V = (e) => L, H = L, ge = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? L : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: w }], i = e[w], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || N(e),
			transform: (e, n, r) => {
				if (N(e)) return (i) => I(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = k(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return W(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, U = [
	le,
	de,
	ue,
	me,
	he
], _e = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !U.includes(i)) return t;
	let a = i === "plural" || i === "enumeration";
	return (e) => {
		if (typeof e == "object" && e) return t({
			...n,
			...e
		});
		if (a) return t({
			...n,
			count: e
		});
		let i = t(e);
		return !r && R(i) ? i(n) : i;
	};
}, W = (e, t) => typeof t == "function" && U.includes(e?.nodeType ?? "") ? (n) => _e(e, t, n) : t, G = L, K = L, q = (e) => L, J = L, ve = (e, t = !0) => [
	z(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	B,
	V(e ?? u.defaultLocale),
	H,
	ge,
	q(e ?? u.defaultLocale),
	J,
	G,
	K
].filter((e) => e !== L), ye = (e, t, n = []) => O(e, {
	...t,
	plugins: n
}), Y = /* @__PURE__ */ new WeakSet(), be = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = x(r ?? u.defaultLocale, "", n), o = S(e, a);
	if (o.hit) return o.content;
	let s = n ?? ve(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Y.has(e)
		};
		Y.add(e);
		try {
			return ye(e.content, t, s);
		} finally {
			t.eager && Y.delete(e);
		}
	};
	return c === null ? C(e, a, null) : Array.isArray(c) ? C(e, a, c.map(l)) : C(e, a, l(c));
}, xe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", X = /\{\{\s*(.*?)\s*\}\}/g, Se = (e, t = {}) => {
	if (!Object.values(t).some(xe)) return {
		isSimple: !0,
		parts: e.replace(X, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(X), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Ce = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ae({
		value: t.children,
		children: t.children
	})
}, we = L, Te = (t, r) => {
	let i = Se(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ee = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? L : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: w }], i = e[w], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || N(e),
			transform: (e, n, r) => {
				if (N(e)) return (i) => I(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Te(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return W(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, De = L, Oe = L, Z = /* @__PURE__ */ new Map(), Q = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		Ce,
		z(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		B,
		V(e ?? u.defaultLocale),
		H,
		q(e ?? u.defaultLocale),
		J,
		G,
		K,
		we,
		Ee,
		De,
		Oe
	].filter((e) => e !== L);
	return Z.set(n, r), r;
}, ke = (e, t) => be(e, t, Q(typeof t == "object" && t ? t.locale : t)), Ae = re, je = t({
	get locale() {
		return Ae() ?? u?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Me = (e, t) => {
	let { locale: n, variant: r } = i(je) ?? {}, a = t ?? n, s = a;
	return o(() => ke(e, a), [e.key, s]);
};
function Ne() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Pe() {
	let e = Me(ee), [t, n] = s("auto");
	a(() => {
		let e = Ne();
		n(e), $(e);
	}, []), a(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function r() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		n(e), $(e), window.localStorage.setItem("theme", e);
	}
	let i = t === "auto" ? e.f.c.value : e.f.d.value.replace("{mode}", t);
	return l("button", {
		type: "button",
		onClick: r,
		"aria-label": i,
		title: i,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t === "auto" ? e.f.a : t === "dark" ? e.f.b : e.f.e
	});
}
export { Pe as default };
