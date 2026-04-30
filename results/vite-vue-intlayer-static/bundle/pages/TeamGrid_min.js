import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, openBlock as u, ref as d, renderList as f, shallowRef as p, toDisplayString as m, toValue as h, watch as g } from "vue";
var _ = {
	key: "team-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Founder & Lead Engineer\",\"bio\":\"Former Google engineer with 10 years of experience building internationalization systems at scale.\"},{\"name\":\"Marcus Weber\",\"role\":\"Performance Engineer\",\"bio\":\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer Advocate\",\"bio\":\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Full-Stack Developer\",\"bio\":\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Data Analyst\",\"bio\":\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\"},{\"name\":\"Elena Kowalski\",\"role\":\"Community Manager\",\"bio\":\"Manages community contributions, partnerships, and events. Background in open source governance.\"}]},\"fr\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Fondatrice & lead ingénieur\",\"bio\":\"Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.\"},{\"name\":\"Marcus Weber\",\"role\":\"Ingénieur performance\",\"bio\":\"Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer advocate\",\"bio\":\"Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Développeur full-stack\",\"bio\":\"Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Analyste de données\",\"bio\":\"Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).\"},{\"name\":\"Elena Kowalski\",\"role\":\"Community manager\",\"bio\":\"Contributions communautaires, partenariats et événements — gouvernance open source.\"}]},\"es\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Fundadora e Ingeniera Principal\",\"bio\":\"Ex ingeniera de Google con 10 años de experiencia construyendo sistemas de internacionalización a gran escala.\"},{\"name\":\"Marcus Weber\",\"role\":\"Ingeniero de Rendimiento\",\"bio\":\"Se especializa en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer Advocate\",\"bio\":\"Apasionada por la experiencia y educación de los desarrolladores. Ponente en React Conf, JSConf e i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Desarrollador Full-Stack\",\"bio\":\"Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Contribuidor de código abierto en Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Analista de Datos\",\"bio\":\"Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.\"},{\"name\":\"Elena Kowalski\",\"role\":\"Community Manager\",\"bio\":\"Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Experiencia en gobernanza de código abierto.\"}]},\"de\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Gründerin & Lead Engineer\",\"bio\":\"Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\"},{\"name\":\"Marcus Weber\",\"role\":\"Performance-Ingenieur\",\"bio\":\"Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer Advocate\",\"bio\":\"Leidenschaftlich für Entwicklererfahrung und Ausbildung. Sprecherin bei React Conf, JSConf und i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Full-Stack-Entwickler\",\"bio\":\"Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Datenanalyst\",\"bio\":\"Gewährleistet statistische Strenge bei allen Benchmark-Ergebnissen. Promotion in Angewandter Statistik am MIT.\"},{\"name\":\"Elena Kowalski\",\"role\":\"Community Manager\",\"bio\":\"Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\"}]},\"it\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Fondatrice e Ingegnere Capo\",\"bio\":\"Ex ingegnere Google con 10 anni di esperienza nella creazione di sistemi di internazionalizzazione su larga scala.\"},{\"name\":\"Marcus Weber\",\"role\":\"Ingegnere delle prestazioni\",\"bio\":\"Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. In precedenza presso Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer Advocate\",\"bio\":\"Appassionata di esperienza e formazione per gli sviluppatori. Relatrice a React Conf, JSConf e i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Sviluppatore Full-Stack\",\"bio\":\"Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Analista di dati\",\"bio\":\"Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato di ricerca in Statistica applicata presso il MIT.\"},{\"name\":\"Elena Kowalski\",\"role\":\"Community Manager\",\"bio\":\"Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.\"}]},\"pt\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Fundadora e Engenheira Líder\",\"bio\":\"Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\"},{\"name\":\"Marcus Weber\",\"role\":\"Engenheiro de Performance\",\"bio\":\"Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer Advocate\",\"bio\":\"Apaixonada por experiência e educação de desenvolvedores. Palestrante na React Conf, JSConf e i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Desenvolvedor Full-Stack\",\"bio\":\"Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Contribuidor de código aberto do Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Analista de Dados\",\"bio\":\"Garante o rigor estatístico em todos os resultados do benchmark. Doutorado em Estatística Aplicada pelo MIT.\"},{\"name\":\"Elena Kowalski\",\"role\":\"Gerente de Comunidade\",\"bio\":\"Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\"}]},\"zh\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"创始人兼首席工程师\",\"bio\":\"前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。\"},{\"name\":\"Marcus Weber\",\"role\":\"性能工程师\",\"bio\":\"专注于 JavaScript 性能优化和基准测试方法。曾就职于 Vercel。\"},{\"name\":\"Aisha Patel\",\"role\":\"开发者关系专员\",\"bio\":\"热衷于开发者体验和教育。曾在 React Conf、JSConf 和 i18nNext 上发表演讲。\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"全栈开发人员\",\"bio\":\"维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。\"},{\"name\":\"Yuki Tanaka\",\"role\":\"数据分析师\",\"bio\":\"确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。\"},{\"name\":\"Elena Kowalski\",\"role\":\"社区经理\",\"bio\":\"管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\"}]},\"ja\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"創設者 兼 リードエンジニア\",\"bio\":\"元Googleエンジニアで、大規模な国際化システムの構築に10年の経験があります。\"},{\"name\":\"Marcus Weber\",\"role\":\"パフォーマンスエンジニア\",\"bio\":\"JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。以前はVercelに在籍。\"},{\"name\":\"Aisha Patel\",\"role\":\"デベロッパーアドボケイト\",\"bio\":\"開発者エクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、i18nNextでの講演者。\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"フルスタックデベロッパー\",\"bio\":\"ベンチマークインフラストラクチャとCI/CDパイプラインを保守しています。Linguiのオープンソースコントリビューター。\"},{\"name\":\"Yuki Tanaka\",\"role\":\"データアナリスト\",\"bio\":\"すべてのベンチマーク結果において統計的な厳密さを確保します。MITで応用統計学の博士号を取得。\"},{\"name\":\"Elena Kowalski\",\"role\":\"コミュニティマネージャー\",\"bio\":\"コミュニティの貢献、パートナーシップ、およびイベントを管理します。オープンソースガバナンスの経歴があります。\"}]},\"ko\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"설립자 및 수석 엔지니어\",\"bio\":\"대규모 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.\"},{\"name\":\"Marcus Weber\",\"role\":\"성능 엔지니어\",\"bio\":\"JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.\"},{\"name\":\"Aisha Patel\",\"role\":\"데벨로퍼 애드보킷\",\"bio\":\"개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"풀스택 개발자\",\"bio\":\"벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui의 오픈 소스 기여자입니다.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"데이터 분석가\",\"bio\":\"모든 벤치마크 결과에서 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.\"},{\"name\":\"Elena Kowalski\",\"role\":\"커뮤니티 매니저\",\"bio\":\"커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경을 가지고 있습니다.\"}]},\"ru\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Основатель и ведущий инженер\",\"bio\":\"Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.\"},{\"name\":\"Marcus Weber\",\"role\":\"Инженер по производительности\",\"bio\":\"Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Адвокат разработчиков\",\"bio\":\"Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Full-stack разработчик\",\"bio\":\"Поддерживает инфраструктуру бенчмаркинга и конвейер CI/CD. Участник открытого проекта Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Аналитик данных\",\"bio\":\"Обеспечивает статистическую строгость всех результатов бенчмарков. Доктор прикладной статистики Массачусетского технологического института (MIT).\"},{\"name\":\"Elena Kowalski\",\"role\":\"Комьюнити-менеджер\",\"bio\":\"Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.\"}]}}}")
}, v = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = d(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	return Object.setPrototypeOf(o, String.prototype), Object.assign(o, {
		render: a,
		toString: () => String(r.value ?? ""),
		valueOf: () => r.value,
		[Symbol.toPrimitive]: () => r.value,
		toJSON: () => r.value,
		get raw() {
			return r.value;
		},
		set raw(e) {
			r.value = e;
		},
		get value() {
			return r.value;
		},
		use(e) {
			return v({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), l(o);
}, y = "translation", b = "object", x = "array", S = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => S(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => S(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: x,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) Object.defineProperty(n, r, {
		enumerable: !0,
		configurable: !0,
		get: function() {
			let n = {
				...t,
				children: e[r],
				keyPath: [...t.keyPath, {
					type: b,
					key: r
				}]
			}, i = S(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, C = {
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
}, w = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, T = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (w(e) && w(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : T(e[r], t[r]));
		return n;
	}
	return e;
}, E = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => T(e, t));
}, D = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", O = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, k = (e, t) => D ? O : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: y,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return E(o, e, t);
	}
}, A = O, j = O, M = O, N = O, P = (e) => O, F = O, I = (e, t = !0) => [
	k(e ?? C.defaultLocale, t ? C.defaultLocale : void 0),
	A,
	j,
	M,
	P(e ?? C.defaultLocale),
	F,
	N
], L = (e, t, n = []) => S(e, {
	...t,
	plugins: n
}), R = (e, t, n = I(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return L(e.content, r, n);
}, z = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => v({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => r(t(...e));
		Object.setPrototypeOf(a, Object.getPrototypeOf(i));
		for (let e of Object.getOwnPropertyNames(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		return l(a);
	}
}, B = O, V = O, H = O, U = /* @__PURE__ */ new Map(), W = (e, t = !0) => {
	let n = `${e ?? C.defaultLocale}_${t}`;
	if (U.has(n)) return U.get(n);
	let r = [
		k(e ?? C.defaultLocale, t ? C.defaultLocale : void 0),
		A,
		j,
		P(e ?? C.defaultLocale),
		F,
		N,
		z,
		B,
		V,
		H
	];
	return U.set(n, r), r;
}, G = (e, t) => R(e, t, W(t)), K = Symbol("intlayer"), q = (e, t) => t.reduce((e, t) => e?.[t], e), J = (e) => typeof e == "object" && !!e, Y = (e) => typeof e == "function" || J(e) && ("render" in e || "setup" in e), X = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Z = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Y(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
		};
	}
})), Q = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Z(() => e.value);
		if (r == null) return n === Symbol.toPrimitive || n === "toString" ? () => "" : void 0;
		let i = r[n];
		return typeof i == "function" ? i.bind(r) : i;
	},
	ownKeys() {
		let t = e.value;
		return typeof t == "object" && t ? Reflect.ownKeys(t) : [];
	},
	getOwnPropertyDescriptor() {
		return {
			enumerable: !0,
			configurable: !0
		};
	}
}), $ = (e, n) => {
	let r = a() ? s(K) : void 0, i = c(r?.locale) ? r.locale : d(r?.locale ?? C.defaultLocale), o = t(() => (n === void 0 ? void 0 : h(n)) ?? i.value), l = p({});
	g([() => h(e), () => o.value], ([e, t]) => {
		l.value = G(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => q(l.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Z(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), s = q(l.value, o);
			if (s === void 0 || J(s) && !Y(s)) return u(o);
			if (X(s)) return Q(t(() => q(l.value, o)));
			let c = t(() => q(l.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = q(l.value, e);
			return J(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return u([]);
}, ee = i({
	__name: "TeamGrid",
	setup(e, { expose: t }) {
		t();
		let { a: n } = $(_), r = {
			members: n,
			getInitials: (e) => e.split(" ").map((e) => e[0]).join("")
		};
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), te = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ne = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, re = { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground" }, ie = { class: "text-base font-semibold text-foreground" }, ae = { class: "mb-2 text-xs font-medium text-primary" }, oe = { class: "text-sm text-muted-foreground" };
function se(t, i, a, o, s, c) {
	return u(), n("div", ne, [(u(!0), n(e, null, f(o.members, (e) => (u(), n("div", {
		key: e.name,
		class: "rounded-lg border border-border bg-card p-6 text-center"
	}, [
		r("div", re, m(o.getInitials(e.name)), 1),
		r("h3", ie, m(e.name), 1),
		r("p", ae, m(e.role), 1),
		r("p", oe, m(e.bio), 1)
	]))), 128))]);
}
var ce = te(ee, [["render", se], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/team/TeamGrid.vue"]]);
export { ce as default };
