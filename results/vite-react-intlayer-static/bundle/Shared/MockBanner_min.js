import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useMemo as a } from "react";
import { Fragment as o, jsx as s } from "react/jsx-runtime";
var c = {
	key: "app",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Go to GitHub\"},\"b\":{\"e\":\"Home\",\"f\":\"Methodology\",\"g\":\"Mock Pages\",\"i\":\"Products\",\"h\":\"Pricing\",\"k\":\"Team\",\"a\":\"Blog\",\"b\":\"Careers\",\"d\":\"FAQ\",\"c\":\"Contact\",\"j\":\"Settings\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.\",\"g\":\"Resources\",\"e\":\"GitHub\",\"f\":\"Methodology\",\"b\":\"Contact\",\"c\":\"Contributing\",\"a\":\"i18n Benchmark — Open-source project. Built with React, Vite & React Router.\"},\"f\":{\"a\":\"Theme: Auto\",\"b\":\"Theme: Dark\",\"e\":\"Theme: Light\",\"c\":\"Theme mode: auto (system). Click to switch to light mode.\",\"d\":\"Theme mode: {mode}. Click to switch mode.\"},\"c\":\"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.\"},\"fr\":{\"e\":{\"a\":\"Banc d'essai i18n\",\"d\":\"Benchmark i18n\",\"b\":\"contact@intlayer.org\",\"c\":\"Aller sur GitHub\"},\"b\":{\"e\":\"Accueil\",\"f\":\"Méthodologie\",\"g\":\"Pages fictives\",\"i\":\"Produits\",\"h\":\"Tarification\",\"k\":\"Équipe\",\"a\":\"Blog\",\"b\":\"Carrières\",\"d\":\"FAQ\",\"c\":\"Contact\",\"j\":\"Paramètres\"},\"a\":{\"h\":\"Benchmark i18n\",\"d\":\"Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.\",\"g\":\"Ressources\",\"e\":\"GitHub\",\"f\":\"Méthodologie\",\"b\":\"Contact\",\"c\":\"Contribution\",\"a\":\"Benchmark i18n — Projet open source. Construit avec React, Vite et React Router.\"},\"f\":{\"a\":\"Thème : Auto\",\"b\":\"Thème : Sombre\",\"e\":\"Thème : Clair\",\"c\":\"Mode thématique : auto (système). Cliquez pour passer en mode clair.\",\"d\":\"Mode thématique : {mode}. Cliquez pour changer de mode.\"},\"c\":\"⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.\"},\"es\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Ir a GitHub\"},\"b\":{\"e\":\"Inicio\",\"f\":\"Metodología\",\"g\":\"Páginas de prueba\",\"i\":\"Productos\",\"h\":\"Precios\",\"k\":\"Equipo\",\"a\":\"Blog\",\"b\":\"Carreras\",\"d\":\"FAQ\",\"c\":\"Contacto\",\"j\":\"Ajustes\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga и la reactividad de la aplicación.\",\"g\":\"Recursos\",\"e\":\"GitHub\",\"f\":\"Metodología\",\"b\":\"Contacto\",\"c\":\"Contribución\",\"a\":\"i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y React Router.\"},\"f\":{\"a\":\"Tema: Automático\",\"b\":\"Tema: Oscuro\",\"e\":\"Tema: Claro\",\"c\":\"Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.\",\"d\":\"Modo de tema: {mode}. Haga clic para cambiar de modo.\"},\"c\":\"⚠️ Esta página contiene datos de prueba solo para fines de benchmarking. No está relacionada con ninguna empresa o servicio real.\"},\"de\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Zu GitHub\"},\"b\":{\"e\":\"Startseite\",\"f\":\"Methodik\",\"g\":\"Testseiten\",\"i\":\"Produkte\",\"h\":\"Preise\",\"k\":\"Team\",\"a\":\"Blog\",\"b\":\"Karriere\",\"d\":\"FAQ\",\"c\":\"Kontakt\",\"j\":\"Einstellungen\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladezeit und die App-Reaktivität.\",\"g\":\"Ressourcen\",\"e\":\"GitHub\",\"f\":\"Methodik\",\"b\":\"Kontakt\",\"c\":\"Beitrag\",\"a\":\"i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & React Router.\"},\"f\":{\"a\":\"Design: Auto\",\"b\":\"Design: Dunkel\",\"e\":\"Design: Hell\",\"c\":\"Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.\",\"d\":\"Design-Modus: {mode}. Klicken Sie hier, um den Modus zu wechseln.\"},\"c\":\"⚠️ Diese Seite enthält Mock-Daten nur zu Benchmarking-Zwecken. Sie steht in keinem Zusammenhang mit einem echten Unternehmen oder einer echten Dienstleistung.\"},\"it\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Vai su GitHub\"},\"b\":{\"e\":\"Home\",\"f\":\"Metodologia\",\"g\":\"Pagine di prova\",\"i\":\"Prodotti\",\"h\":\"Prezzi\",\"k\":\"Team\",\"a\":\"Blog\",\"b\":\"Carriere\",\"d\":\"FAQ\",\"c\":\"Contatti\",\"j\":\"Impostazioni\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sul tempo di caricamento e sulla reattività dell'app.\",\"g\":\"Risorse\",\"e\":\"GitHub\",\"f\":\"Metodologia\",\"b\":\"Contatti\",\"c\":\"Contribuire\",\"a\":\"i18n Benchmark — Progetto open source. Costruito con React, Vite e React Router.\"},\"f\":{\"a\":\"Tema: Auto\",\"b\":\"Tema: Scuro\",\"e\":\"Tema: Chiaro\",\"c\":\"Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.\",\"d\":\"Modalità tema: {mode}. Fai clic per cambiare modalità.\"},\"c\":\"⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale.\"},\"pt\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Ir para o GitHub\"},\"b\":{\"e\":\"Início\",\"f\":\"Metodologia\",\"g\":\"Páginas de Teste\",\"i\":\"Produtos\",\"h\":\"Preços\",\"k\":\"Equipe\",\"a\":\"Blog\",\"b\":\"Carreiras\",\"d\":\"FAQ\",\"c\":\"Contato\",\"j\":\"Configurações\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade do aplicativo.\",\"g\":\"Recursos\",\"e\":\"GitHub\",\"f\":\"Metodologia\",\"b\":\"Contato\",\"c\":\"Contribuindo\",\"a\":\"i18n Benchmark — Projeto de código aberto. Construído com React, Vite e React Router.\"},\"f\":{\"a\":\"Tema: Automático\",\"b\":\"Tema: Escuro\",\"e\":\"Tema: Claro\",\"c\":\"Modo de tema: automático (sistema). Clique para mudar para o modo claro.\",\"d\":\"Modo de tema: {mode}. Clique para mudar o modo.\"},\"c\":\"⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhum negócio ou serviço real.\"},\"zh\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"前往 GitHub\"},\"b\":{\"e\":\"首页\",\"f\":\"方法论\",\"g\":\"模拟页面\",\"i\":\"产品\",\"h\":\"定价\",\"k\":\"团队\",\"a\":\"博客\",\"b\":\"职业\",\"d\":\"常见问题\",\"c\":\"联系我们\",\"j\":\"设置\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"一个开源测试应用程序，用于衡量国际化库对捆绑包大小、加载时间以及应用程序反应性的真实影响。\",\"g\":\"资源\",\"e\":\"GitHub\",\"f\":\"方法论\",\"b\":\"联系\",\"c\":\"贡献\",\"a\":\"i18n Benchmark — 开源项目。使用 React, Vite 和 React Router 构建。\"},\"f\":{\"a\":\"主题：自动\",\"b\":\"主题：深色\",\"e\":\"主题：亮色\",\"c\":\"主题模式：自动（系统）。点击切换到亮色模式。\",\"d\":\"主题模式：{mode}。点击切换模式。\"},\"c\":\"⚠️ 本页面包含仅用于基准测试目的的模拟数据。它与任何真实的业务或服务无关。\"},\"ja\":{\"e\":{\"a\":\"i18n ベンチ\",\"d\":\"i18n ベンチマーク\",\"b\":\"contact@intlayer.org\",\"c\":\"GitHub へ\"},\"b\":{\"e\":\"ホーム\",\"f\":\"方法論\",\"g\":\"モックページ\",\"i\":\"製品\",\"h\":\"価格設定\",\"k\":\"チーム\",\"a\":\"ブログ\",\"b\":\"採用情報\",\"d\":\"よくある質問\",\"c\":\"お問い合わせ\",\"j\":\"設定\"},\"a\":{\"h\":\"i18n ベンチマーク\",\"d\":\"国際化ライブラリがバンドルサイズ、ロード時間、およびアプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーションです。\",\"g\":\"リソース\",\"e\":\"GitHub\",\"f\":\"方法論\",\"b\":\"連絡先\",\"c\":\"貢献\",\"a\":\"i18n ベンチマーク — オープンソースプロジェクト。React、Vite、および React Router で構築されています。\"},\"f\":{\"a\":\"テーマ：自動\",\"b\":\"テーマ：ダーク\",\"e\":\"テーマ：ライト\",\"c\":\"テーマモード：自動（システム）。クリックしてライトモードに切り替えます。\",\"d\":\"テーマモード：{mode}。クリックしてモードを切り替えます。\"},\"c\":\"⚠️ このページにはベンチマーク目的のモックデータのみが含まれています。実際のビジネスやサービスとは関係ありません。\"},\"ko\":{\"e\":{\"a\":\"i18n 벤치\",\"d\":\"i18n 벤치마크\",\"b\":\"contact@intlayer.org\",\"c\":\"GitHub으로 이동\"},\"b\":{\"e\":\"홈\",\"f\":\"방법론\",\"g\":\"모적 페이지\",\"i\":\"제품\",\"h\":\"가격\",\"k\":\"팀\",\"a\":\"블로그\",\"b\":\"채용\",\"d\":\"자주 묻는 질문\",\"c\":\"문의\",\"j\":\"설정\"},\"a\":{\"h\":\"i18n 벤치마크\",\"d\":\"번들 크기, 로딩 시간 및 앱 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.\",\"g\":\"리소스\",\"e\":\"GitHub\",\"f\":\"방법론\",\"b\":\"연락처\",\"c\":\"기여\",\"a\":\"i18n 벤치마크 — 오픈 소스 프로젝트입니다. React, Vite 및 React Router로 구축되었습니다.\"},\"f\":{\"a\":\"테마: 자동\",\"b\":\"테마: 다크\",\"e\":\"테마: 라이트\",\"c\":\"테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.\",\"d\":\"테마 모드: {mode}. 모드를 전환하려면 클릭하세요.\"},\"c\":\"⚠️ 이 페이지에는 벤치마킹 목적의 모의 데이터만 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.\"},\"ru\":{\"e\":{\"a\":\"i18n Bench\",\"d\":\"i18n Benchmark\",\"b\":\"contact@intlayer.org\",\"c\":\"Перейти на GitHub\"},\"b\":{\"e\":\"Главная\",\"f\":\"Методология\",\"g\":\"Мок-страницы\",\"i\":\"Продукты\",\"h\":\"Цены\",\"k\":\"Команда\",\"a\":\"Блог\",\"b\":\"Вакансии\",\"d\":\"FAQ\",\"c\":\"Контакт\",\"j\":\"Настройки\"},\"a\":{\"h\":\"i18n Benchmark\",\"d\":\"Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.\",\"g\":\"Ресурсы\",\"e\":\"GitHub\",\"f\":\"Методология\",\"b\":\"Контакт\",\"c\":\"Вклад в проект\",\"a\":\"i18n Benchmark — проект с открытым исходным кодом. Построен на React, Vite и React Router.\"},\"f\":{\"a\":\"Тема: Авто\",\"b\":\"Тема: Темная\",\"e\":\"Тема: Светлая\",\"c\":\"Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.\",\"d\":\"Режим темы: {mode}. Нажмите, чтобы изменить режим.\"},\"c\":\"⚠️ Эта страница содержит мок-данные только для целей бенчмаркинга. Она не связана с каким-либо реальным бизнесом или услугой.\"}}}")
}, l = {
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
}, u = {
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
}, d = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : s(o, { children: e });
	return new Proxy(i, { get(e, r, i) {
		if (r === "value") return t;
		if (r === Symbol.toPrimitive) return () => t ?? "";
		if (r === "toString") return () => String(t ?? "");
		if (r === "valueOf") return () => t;
		if (n && Object.hasOwn(n, r)) return n[r];
		if (t != null && typeof r == "string" && r !== "constructor" && !(r in e)) {
			let e = Object(t);
			if (r in e) {
				let n = e[r];
				return typeof n == "function" ? n.bind(t) : n;
			}
		}
		return Reflect.get(e, r, i);
	} });
}, f = /* @__PURE__ */ new WeakMap(), p = 0, ee = (e) => {
	if (!e) return "base";
	let t = f.get(e);
	if (t) return t;
	p += 1;
	let n = `p${p}`;
	return f.set(e, n), n;
}, m = 256, h = /* @__PURE__ */ new WeakMap(), g = (e) => typeof e == "object" && !!e, te = (e, t, n) => `${e}_${t}_${ee(n)}`, ne = (e, t) => {
	if (!g(e)) return { hit: !1 };
	let n = h.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, _ = (e, t, n) => {
	if (!g(e)) return n;
	let r = h.get(e);
	return r || (r = /* @__PURE__ */ new Map(), h.set(e, r)), r.size >= m && r.clear(), r.set(t, n), n;
}, v = "translation", y = "insertion", b = "object", x = "array", S = "markdown", C = "html", w = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => w(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => w(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: x,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: b,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = w(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = w(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, T = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), E = "default", D = /[^A-Za-z0-9._&=-]/g, O = /[^A-Za-z0-9._-]/g, k = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, A = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, k);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, j = (e) => e === void 0 ? E : typeof e == "string" ? A(e, D) : Object.keys(e).sort().map((t) => `${A(t, O)}=${A(String(e[t]), O)}`).join("&"), M = (e) => Array.isArray(e) ? e.length === 0 ? [E] : e.map(j) : [j(e)], re = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? E : e[0] ?? "default";
}, ie = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ae = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, oe = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, se = (e, t) => {
	if (!ae(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? E : re(M(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ie(e, n, t, s)).map((t) => oe(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ce = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, N = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? M(n).join(",") : String(n)}`;
}).join("|") : "", P = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, F = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (P(e) && P(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : F(e[r], t[r]));
		return n;
	}
	return e;
}, I = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => F(e, t));
}, L = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, R = (e) => {
	if (typeof e == "string") return e;
	if (L(e)) return e.nodeType === "html" ? e[C] : e[S];
}, z = (e, t) => {
	if (typeof e == "string") return t;
	if (L(e)) {
		let n = e.nodeType === "html" ? C : S;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, B = (e, t, n, r, i) => {
	let a = z(e, T(R(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
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
					type: v,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return I(o, e, t);
	}
}, U = V, W = (e) => V, G = V, le = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? V : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || L(e),
			transform: (e, n, r) => {
				if (L(e)) return (i) => B(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = T(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
	}
}, K = V, q = V, J = (e) => V, Y = V, ue = (e, t = !0) => [
	H(e ?? l.defaultLocale, t ? l.defaultLocale : void 0),
	U,
	G,
	le,
	J(e ?? l.defaultLocale),
	Y,
	K,
	q
], de = (e, t, n = []) => w(e, {
	...t,
	plugins: n
}), fe = (e, t, n) => {
	let { locale: r, selector: i } = ce(t), a = te(r ?? l.defaultLocale, N(i), n), o = ne(e, a);
	if (o.hit) return o.content;
	let s = n ?? ue(r), c = se(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return de(e.content, t, s);
	};
	return c === null ? _(e, a, null) : Array.isArray(c) ? _(e, a, c.map(u)) : _(e, a, u(c));
}, pe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", X = /\{\{\s*(.*?)\s*\}\}/g, me = (e, t = {}) => {
	if (!Object.values(t).some(pe)) return {
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
}, he = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => d({
		...n,
		value: n.children,
		children: n.children
	})
}, ge = V, _e = (t, r) => {
	let i = me(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, ve = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? V : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || L(e),
			transform: (e, n, r) => {
				if (L(e)) return (i) => B(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = _e(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		}, o = n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
		return typeof i == "object" && i && "nodeType" in i && ["enumeration", "condition"].includes(i.nodeType) ? (e) => (t) => {
			let n = o(t);
			return typeof n == "function" ? n(e) : n;
		} : o;
	}
}, ye = V, be = V, Z = /* @__PURE__ */ new Map(), xe = (e, t = !0) => {
	let n = `${e ?? l.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		H(e ?? l.defaultLocale, t ? l.defaultLocale : void 0),
		U,
		W(e ?? l.defaultLocale),
		G,
		J(e ?? l.defaultLocale),
		Y,
		K,
		q,
		he,
		ge,
		ve,
		ye,
		be
	];
	return Z.set(n, r), r;
}, Q = (e, t) => fe(e, t, xe(typeof t == "object" && t ? t.locale : t)), Se = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var $ = {
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
}, Ce = ((e = $) => {
	let { locales: t } = l;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Se) for (let t = 0; t < (u.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(u.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})($), we = t({
	locale: Ce ?? l?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Te = (e, t) => {
	let { locale: n, variant: r } = i(we) ?? {}, o = t ?? n, s = typeof o == "object" && o ? `${o.locale ?? ""}|${N(o)}` : o;
	return a(() => Q(e, o), [e.key, s]);
}, Ee = () => {
	let e = Te(c);
	return s("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e.c
	});
};
export { Ee as default };
