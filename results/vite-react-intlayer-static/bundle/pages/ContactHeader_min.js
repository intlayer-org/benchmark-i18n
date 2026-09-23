import { createContext as e, isValidElement as t, useContext as n, useMemo as r } from "react";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
var s = {
	key: "app",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Go to GitHub\"},\"b\":{\"e\":\"Home\",\"f\":\"Methodology\",\"g\":\"Mock Pages\",\"i\":\"Products\",\"h\":\"Pricing\",\"k\":\"Team\",\"a\":\"Blog\",\"b\":\"Careers\",\"d\":\"FAQ\",\"c\":\"Contact\",\"j\":\"Settings\"},\"a\":{\"f\":\"i18n Benchmark\",\"c\":\"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.\",\"e\":\"Resources\",\"d\":\"GitHub\",\"b\":\"Contributing\",\"a\":\"i18n Benchmark — Open-source project. Built with React, Vite & React Router.\"},\"f\":{\"a\":\"Theme: Auto\",\"b\":\"Theme: Dark\",\"e\":\"Theme: Light\",\"c\":\"Theme mode: auto (system). Click to switch to light mode.\",\"d\":\"Theme mode: {mode}. Click to switch mode.\"},\"c\":\"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.\"},\"fr\":{\"e\":{\"a\":\"Banc d'essai i18n\",\"d\":\"Benchmark i18n\",\"b\":\"contact@intlayer.org\",\"c\":\"Aller sur GitHub\"},\"b\":{\"e\":\"Accueil\",\"f\":\"Méthodologie\",\"g\":\"Pages fictives\",\"i\":\"Produits\",\"h\":\"Tarification\",\"k\":\"Équipe\",\"a\":\"Blog\",\"b\":\"Carrières\",\"d\":\"FAQ\",\"c\":\"Contact\",\"j\":\"Paramètres\"},\"a\":{\"f\":\"Benchmark i18n\",\"c\":\"Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.\",\"e\":\"Ressources\",\"d\":\"GitHub\",\"b\":\"Contribution\",\"a\":\"Benchmark i18n — Projet open source. Construit avec React, Vite et React Router.\"},\"f\":{\"a\":\"Thème : Auto\",\"b\":\"Thème : Sombre\",\"e\":\"Thème : Clair\",\"c\":\"Mode thématique : auto (système). Cliquez pour passer en mode clair.\",\"d\":\"Mode thématique : {mode}. Cliquez pour changer de mode.\"},\"c\":\"⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.\"},\"es\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Ir a GitHub\"},\"b\":{\"e\":\"Inicio\",\"f\":\"Metodología\",\"g\":\"Páginas de prueba\",\"i\":\"Productos\",\"h\":\"Precios\",\"k\":\"Equipo\",\"a\":\"Blog\",\"b\":\"Carreras\",\"d\":\"FAQ\",\"c\":\"Contacto\",\"j\":\"Ajustes\"},\"a\":{\"f\":\"i18n Benchmark\",\"c\":\"Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga и la reactividad de la aplicación.\",\"e\":\"Recursos\",\"d\":\"GitHub\",\"b\":\"Contribución\",\"a\":\"i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y React Router.\"},\"f\":{\"a\":\"Tema: Automático\",\"b\":\"Tema: Oscuro\",\"e\":\"Tema: Claro\",\"c\":\"Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.\",\"d\":\"Modo de tema: {mode}. Haga clic para cambiar de modo.\"},\"c\":\"⚠️ Esta página contiene datos de prueba solo para fines de benchmarking. No está relacionada con ninguna empresa o servicio real.\"},\"de\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Zu GitHub\"},\"b\":{\"e\":\"Startseite\",\"f\":\"Methodik\",\"g\":\"Testseiten\",\"i\":\"Produkte\",\"h\":\"Preise\",\"k\":\"Team\",\"a\":\"Blog\",\"b\":\"Karriere\",\"d\":\"FAQ\",\"c\":\"Kontakt\",\"j\":\"Einstellungen\"},\"a\":{\"f\":\"i18n Benchmark\",\"c\":\"Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladezeit und die App-Reaktivität.\",\"e\":\"Ressourcen\",\"d\":\"GitHub\",\"b\":\"Beitrag\",\"a\":\"i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & React Router.\"},\"f\":{\"a\":\"Design: Auto\",\"b\":\"Design: Dunkel\",\"e\":\"Design: Hell\",\"c\":\"Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.\",\"d\":\"Design-Modus: {mode}. Klicken Sie hier, um den Modus zu wechseln.\"},\"c\":\"⚠️ Diese Seite enthält Mock-Daten nur zu Benchmarking-Zwecken. Sie steht in keinem Zusammenhang mit einem echten Unternehmen oder einer echten Dienstleistung.\"},\"it\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Vai su GitHub\"},\"b\":{\"e\":\"Home\",\"f\":\"Metodologia\",\"g\":\"Pagine di prova\",\"i\":\"Prodotti\",\"h\":\"Prezzi\",\"k\":\"Team\",\"a\":\"Blog\",\"b\":\"Carriere\",\"d\":\"FAQ\",\"c\":\"Contatti\",\"j\":\"Impostazioni\"},\"a\":{\"f\":\"i18n Benchmark\",\"c\":\"Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sul tempo di caricamento e sulla reattività dell'app.\",\"e\":\"Risorse\",\"d\":\"GitHub\",\"b\":\"Contribuire\",\"a\":\"i18n Benchmark — Progetto open source. Costruito con React, Vite e React Router.\"},\"f\":{\"a\":\"Tema: Auto\",\"b\":\"Tema: Scuro\",\"e\":\"Tema: Chiaro\",\"c\":\"Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.\",\"d\":\"Modalità tema: {mode}. Fai clic per cambiare modalità.\"},\"c\":\"⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale.\"},\"pt\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Ir para o GitHub\"},\"b\":{\"e\":\"Início\",\"f\":\"Metodologia\",\"g\":\"Páginas de Teste\",\"i\":\"Produtos\",\"h\":\"Preços\",\"k\":\"Equipe\",\"a\":\"Blog\",\"b\":\"Carreiras\",\"d\":\"FAQ\",\"c\":\"Contato\",\"j\":\"Configurações\"},\"a\":{\"f\":\"i18n Benchmark\",\"c\":\"Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade do aplicativo.\",\"e\":\"Recursos\",\"d\":\"GitHub\",\"b\":\"Contribuindo\",\"a\":\"i18n Benchmark — Projeto de código aberto. Construído com React, Vite e React Router.\"},\"f\":{\"a\":\"Tema: Automático\",\"b\":\"Tema: Escuro\",\"e\":\"Tema: Claro\",\"c\":\"Modo de tema: automático (sistema). Clique para mudar para o modo claro.\",\"d\":\"Modo de tema: {mode}. Clique para mudar o modo.\"},\"c\":\"⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhum negócio ou serviço real.\"},\"zh\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"前往 GitHub\"},\"b\":{\"e\":\"首页\",\"f\":\"方法论\",\"g\":\"模拟页面\",\"i\":\"产品\",\"h\":\"定价\",\"k\":\"团队\",\"a\":\"博客\",\"b\":\"职业\",\"d\":\"常见问题\",\"c\":\"联系我们\",\"j\":\"设置\"},\"a\":{\"f\":\"i18n Benchmark\",\"c\":\"一个开源测试应用程序，用于衡量国际化库对捆绑包大小、加载时间以及应用程序反应性的真实影响。\",\"e\":\"资源\",\"d\":\"GitHub\",\"b\":\"贡献\",\"a\":\"i18n Benchmark — 开源项目。使用 React, Vite 和 React Router 构建。\"},\"f\":{\"a\":\"主题：自动\",\"b\":\"主题：深色\",\"e\":\"主题：亮色\",\"c\":\"主题模式：自动（系统）。点击切换到亮色模式。\",\"d\":\"主题模式：{mode}。点击切换模式。\"},\"c\":\"⚠️ 本页面包含仅用于基准测试目的的模拟数据。它与任何真实的业务或服务无关。\"},\"ja\":{\"e\":{\"a\":\"i18n ベンチ\",\"d\":\"i18n ベンチマーク\",\"b\":\"contact@intlayer.org\",\"c\":\"GitHub へ\"},\"b\":{\"e\":\"ホーム\",\"f\":\"方法論\",\"g\":\"モックページ\",\"i\":\"製品\",\"h\":\"価格設定\",\"k\":\"チーム\",\"a\":\"ブログ\",\"b\":\"採用情報\",\"d\":\"よくある質問\",\"c\":\"お問い合わせ\",\"j\":\"設定\"},\"a\":{\"f\":\"i18n ベンチマーク\",\"c\":\"国際化ライブラリがバンドルサイズ、ロード時間、およびアプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーションです。\",\"e\":\"リソース\",\"d\":\"GitHub\",\"b\":\"貢献\",\"a\":\"i18n ベンチマーク — オープンソースプロジェクト。React、Vite、および React Router で構築されています。\"},\"f\":{\"a\":\"テーマ：自動\",\"b\":\"テーマ：ダーク\",\"e\":\"テーマ：ライト\",\"c\":\"テーマモード：自動（システム）。クリックしてライトモードに切り替えます。\",\"d\":\"テーマモード：{mode}。クリックしてモードを切り替えます。\"},\"c\":\"⚠️ このページにはベンチマーク目的のモックデータのみが含まれています。実際のビジネスやサービスとは関係ありません。\"},\"ko\":{\"e\":{\"a\":\"i18n 벤치\",\"d\":\"i18n 벤치마크\",\"b\":\"contact@intlayer.org\",\"c\":\"GitHub으로 이동\"},\"b\":{\"e\":\"홈\",\"f\":\"방법론\",\"g\":\"모적 페이지\",\"i\":\"제품\",\"h\":\"가격\",\"k\":\"팀\",\"a\":\"블로그\",\"b\":\"채용\",\"d\":\"자주 묻는 질문\",\"c\":\"문의\",\"j\":\"설정\"},\"a\":{\"f\":\"i18n 벤치마크\",\"c\":\"번들 크기, 로딩 시간 및 앱 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.\",\"e\":\"리소스\",\"d\":\"GitHub\",\"b\":\"기여\",\"a\":\"i18n 벤치마크 — 오픈 소스 프로젝트입니다. React, Vite 및 React Router로 구축되었습니다.\"},\"f\":{\"a\":\"테마: 자동\",\"b\":\"테마: 다크\",\"e\":\"테마: 라이트\",\"c\":\"테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.\",\"d\":\"테마 모드: {mode}. 모드를 전환하려면 클릭하세요.\"},\"c\":\"⚠️ 이 페이지에는 벤치마킹 목적의 모의 데이터만 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.\"},\"ru\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Перейти на GitHub\"},\"b\":{\"e\":\"Главная\",\"f\":\"Методология\",\"g\":\"Мок-страницы\",\"i\":\"Продукты\",\"h\":\"Цены\",\"k\":\"Команда\",\"a\":\"Блог\",\"b\":\"Вакансии\",\"d\":\"FAQ\",\"c\":\"Контакт\",\"j\":\"Настройки\"},\"a\":{\"f\":\"i18n Benchmark\",\"c\":\"Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.\",\"e\":\"Ресурсы\",\"d\":\"GitHub\",\"b\":\"Вклад в проект\",\"a\":\"i18n Benchmark — проект с открытым исходным кодом. Построен на React, Vite и React Router.\"},\"f\":{\"a\":\"Тема: Авто\",\"b\":\"Тема: Темная\",\"e\":\"Тема: Светлая\",\"c\":\"Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.\",\"d\":\"Режим темы: {mode}. Нажмите, чтобы изменить режим.\"},\"c\":\"⚠️ Эта страница содержит мок-данные только для целей бенчмаркинга. Она не связана с каким-либо реальным бизнесом или услугой.\"}}}")
}, c = {
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
}, l = {
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
}, u = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var d = {
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
}, f = ((e = d) => {
	let { locales: t } = c;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!u) for (let t = 0; t < (l.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(l.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})(d), p = e({
	locale: f ?? c?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), m = /* @__PURE__ */ new WeakMap(), h = 0, g = (e) => {
	if (!e) return "base";
	let t = m.get(e);
	if (t) return t;
	h += 1;
	let n = `p${h}`;
	return m.set(e, n), n;
}, _ = 256, v = /* @__PURE__ */ new WeakMap(), y = (e) => typeof e == "object" && !!e, b = (e, t, n) => `${e}_${t}_${g(n)}`, ee = (e, t) => {
	if (!y(e)) return { hit: !1 };
	let n = v.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, x = (e, t, n) => {
	if (!y(e)) return n;
	let r = v.get(e);
	return r || (r = /* @__PURE__ */ new Map(), v.set(e, r)), r.size >= _ && r.clear(), r.set(t, n), n;
}, S = "translation", C = "object", w = "array", T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => T(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: w,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: C,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = T(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = T(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, E = "default", D = /[^A-Za-z0-9._&=-]/g, O = /[^A-Za-z0-9._-]/g, k = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, A = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, k);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, j = (e) => e === void 0 ? E : typeof e == "string" ? A(e, D) : Object.keys(e).sort().map((t) => `${A(t, O)}=${A(String(e[t]), O)}`).join("&"), M = (e) => Array.isArray(e) ? e.length === 0 ? [E] : e.map(j) : [j(e)], te = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? E : e[0] ?? "default";
}, ne = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, N = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, P = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, F = (e, t) => {
	if (!N(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? E : te(M(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ne(e, n, t, s)).map((t) => P(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, I = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, L = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? M(n).join(",") : String(n)}`;
}).join("|") : "", R = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, z = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (R(e) && R(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : z(e[r], t[r]));
		return n;
	}
	return e;
}, B = (e, t, n) => {
	let r = (t) => e[t], i = /* @__PURE__ */ new Set(), a = [], o = (e) => {
		e && !i.has(e) && (i.add(e), a.push(e));
	};
	o(t), t.includes("-") && o(t.split("-")[0]), o(n), n?.includes("-") && o(n.split("-")[0]);
	let s = [];
	for (let e of a) {
		let t = r(e);
		if (t !== void 0) {
			if (typeof t == "string") {
				if (s.length === 0) return t;
				continue;
			}
			s.push(t);
		}
	}
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => z(e, t));
}, V = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, H = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? V : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: S,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return B(o, e, t);
	}
}, U = V, W = (e) => V, G = V, K = V, q = V, J = V, Y = (e) => V, X = V, Z = (e, t = !0) => [
	H(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
	U,
	G,
	K,
	Y(e ?? c.defaultLocale),
	X,
	q,
	J
], re = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), ie = (e, t, n) => {
	let { locale: r, selector: i } = I(t), a = b(r ?? c.defaultLocale, L(i), n), o = ee(e, a);
	if (o.hit) return o.content;
	let s = n ?? Z(r), l = F(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return re(e.content, t, s);
	};
	return l === null ? x(e, a, null) : Array.isArray(l) ? x(e, a, l.map(u)) : x(e, a, u(l));
}, ae = ({ children: e, value: n, additionalProps: r }) => {
	let o = t(e) ? e : a(i, { children: e });
	return new Proxy(o, { get(e, t, i) {
		if (t === "value") return n;
		if (t === Symbol.toPrimitive) return () => n ?? "";
		if (t === "toString") return () => String(n ?? "");
		if (t === "valueOf") return () => n;
		if (r && Object.hasOwn(r, t)) return r[t];
		if (n != null && typeof t == "string" && t !== "constructor" && !(t in e)) {
			let e = Object(n);
			if (t in e) {
				let r = e[t];
				return typeof r == "function" ? r.bind(n) : r;
			}
		}
		return Reflect.get(e, t, i);
	} });
}, oe = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => ae({
		...n,
		value: n.children,
		children: n.children
	})
}, se = V, Q = V, ce = V, le = V, $ = /* @__PURE__ */ new Map(), ue = (e, t = !0) => {
	let n = `${e ?? c.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		H(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
		U,
		W(e ?? c.defaultLocale),
		G,
		Y(e ?? c.defaultLocale),
		X,
		q,
		J,
		oe,
		se,
		Q,
		ce,
		le
	];
	return $.set(n, r), r;
}, de = (e, t) => ie(e, t, ue(typeof t == "object" && t ? t.locale : t)), fe = (e, t) => {
	let { locale: i, variant: a } = n(p) ?? {}, o = t ?? i, s = typeof o == "object" && o ? `${o.locale ?? ""}|${L(o)}` : o;
	return r(() => de(e, o), [e.key, s]);
}, pe = () => {
	let e = fe(s);
	return a("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e.c
	});
};
function me() {
	return o(i, { children: [
		a(pe, {}),
		a("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: "Get in Touch"
		}),
		o("p", {
			className: "mb-8 text-muted-foreground",
			children: [
				"Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at",
				" ",
				a("a", {
					href: "mailto:contact@intlayer.org",
					className: "text-primary hover:underline",
					children: "contact@intlayer.org"
				}),
				"."
			]
		})
	] });
}
export { me as default };
