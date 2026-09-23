import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, isRef as c, markRaw as l, openBlock as u, ref as d, renderList as f, shallowRef as ee, toDisplayString as p, toValue as m, watch as te } from "vue";
var h = {
	key: "team-grid",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Founder & Lead Engineer\",\"bio\":\"Former Google engineer with 10 years of experience building internationalization systems at scale.\"},{\"name\":\"Marcus Weber\",\"role\":\"Performance Engineer\",\"bio\":\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer Advocate\",\"bio\":\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Full-Stack Developer\",\"bio\":\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Data Analyst\",\"bio\":\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\"},{\"name\":\"Elena Kowalski\",\"role\":\"Community Manager\",\"bio\":\"Manages community contributions, partnerships, and events. Background in open source governance.\"}]},\"fr\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Fondatrice & lead ingénieur\",\"bio\":\"Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.\"},{\"name\":\"Marcus Weber\",\"role\":\"Ingénieur performance\",\"bio\":\"Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer advocate\",\"bio\":\"Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Développeur full-stack\",\"bio\":\"Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Analyste de données\",\"bio\":\"Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).\"},{\"name\":\"Elena Kowalski\",\"role\":\"Community manager\",\"bio\":\"Contributions communautaires, partenariats et événements — gouvernance open source.\"}]},\"es\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Fundadora e Ingeniera Principal\",\"bio\":\"Ex ingeniera de Google con 10 años de experiencia construyendo sistemas de internacionalización a gran escala.\"},{\"name\":\"Marcus Weber\",\"role\":\"Ingeniero de Rendimiento\",\"bio\":\"Se especializa en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer Advocate\",\"bio\":\"Apasionada por la experiencia y educación de los desarrolladores. Ponente en React Conf, JSConf e i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Desarrollador Full-Stack\",\"bio\":\"Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Contribuidor de código abierto en Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Analista de Datos\",\"bio\":\"Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.\"},{\"name\":\"Elena Kowalski\",\"role\":\"Community Manager\",\"bio\":\"Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Experiencia en gobernanza de código abierto.\"}]},\"de\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Gründerin & Lead Engineer\",\"bio\":\"Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\"},{\"name\":\"Marcus Weber\",\"role\":\"Performance-Ingenieur\",\"bio\":\"Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer Advocate\",\"bio\":\"Leidenschaftlich für Entwicklererfahrung und Ausbildung. Sprecherin bei React Conf, JSConf und i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Full-Stack-Entwickler\",\"bio\":\"Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Datenanalyst\",\"bio\":\"Gewährleistet statistische Strenge bei allen Benchmark-Ergebnissen. Promotion in Angewandter Statistik am MIT.\"},{\"name\":\"Elena Kowalski\",\"role\":\"Community Manager\",\"bio\":\"Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\"}]},\"it\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Fondatrice e Ingegnere Capo\",\"bio\":\"Ex ingegnere Google con 10 anni di esperienza nella creazione di sistemi di internazionalizzazione su larga scala.\"},{\"name\":\"Marcus Weber\",\"role\":\"Ingegnere delle prestazioni\",\"bio\":\"Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. In precedenza presso Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer Advocate\",\"bio\":\"Appassionata di esperienza e formazione per gli sviluppatori. Relatrice a React Conf, JSConf e i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Sviluppatore Full-Stack\",\"bio\":\"Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Analista di dati\",\"bio\":\"Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato di ricerca in Statistica applicata presso il MIT.\"},{\"name\":\"Elena Kowalski\",\"role\":\"Community Manager\",\"bio\":\"Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.\"}]},\"pt\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Fundadora e Engenheira Líder\",\"bio\":\"Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\"},{\"name\":\"Marcus Weber\",\"role\":\"Engenheiro de Performance\",\"bio\":\"Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Developer Advocate\",\"bio\":\"Apaixonada por experiência e educação de desenvolvedores. Palestrante na React Conf, JSConf e i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Desenvolvedor Full-Stack\",\"bio\":\"Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Contribuidor de código aberto do Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Analista de Dados\",\"bio\":\"Garante o rigor estatístico em todos os resultados do benchmark. Doutorado em Estatística Aplicada pelo MIT.\"},{\"name\":\"Elena Kowalski\",\"role\":\"Gerente de Comunidade\",\"bio\":\"Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\"}]},\"zh\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"创始人兼首席工程师\",\"bio\":\"前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。\"},{\"name\":\"Marcus Weber\",\"role\":\"性能工程师\",\"bio\":\"专注于 JavaScript 性能优化和基准测试方法。曾就职于 Vercel。\"},{\"name\":\"Aisha Patel\",\"role\":\"开发者关系专员\",\"bio\":\"热衷于开发者体验和教育。曾在 React Conf、JSConf 和 i18nNext 上发表演讲。\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"全栈开发人员\",\"bio\":\"维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。\"},{\"name\":\"Yuki Tanaka\",\"role\":\"数据分析师\",\"bio\":\"确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。\"},{\"name\":\"Elena Kowalski\",\"role\":\"社区经理\",\"bio\":\"管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\"}]},\"ja\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"創設者 兼 リードエンジニア\",\"bio\":\"元Googleエンジニアで、大規模な国際化システムの構築に10年の経験があります。\"},{\"name\":\"Marcus Weber\",\"role\":\"パフォーマンスエンジニア\",\"bio\":\"JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。以前はVercelに在籍。\"},{\"name\":\"Aisha Patel\",\"role\":\"デベロッパーアドボケイト\",\"bio\":\"開発者エクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、i18nNextでの講演者。\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"フルスタックデベロッパー\",\"bio\":\"ベンチマークインフラストラクチャとCI/CDパイプラインを保守しています。Linguiのオープンソースコントリビューター。\"},{\"name\":\"Yuki Tanaka\",\"role\":\"データアナリスト\",\"bio\":\"すべてのベンチマーク結果において統計的な厳密さを確保します。MITで応用統計学の博士号を取得。\"},{\"name\":\"Elena Kowalski\",\"role\":\"コミュニティマネージャー\",\"bio\":\"コミュニティの貢献、パートナーシップ、およびイベントを管理します。オープンソースガバナンスの経歴があります。\"}]},\"ko\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"설립자 및 수석 엔지니어\",\"bio\":\"대규모 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.\"},{\"name\":\"Marcus Weber\",\"role\":\"성능 엔지니어\",\"bio\":\"JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.\"},{\"name\":\"Aisha Patel\",\"role\":\"데벨로퍼 애드보킷\",\"bio\":\"개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"풀스택 개발자\",\"bio\":\"벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui의 오픈 소스 기여자입니다.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"데이터 분석가\",\"bio\":\"모든 벤치마크 결과에서 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.\"},{\"name\":\"Elena Kowalski\",\"role\":\"커뮤니티 매니저\",\"bio\":\"커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경을 가지고 있습니다.\"}]},\"ru\":{\"a\":[{\"name\":\"Sarah Chen\",\"role\":\"Основатель и ведущий инженер\",\"bio\":\"Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.\"},{\"name\":\"Marcus Weber\",\"role\":\"Инженер по производительности\",\"bio\":\"Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.\"},{\"name\":\"Aisha Patel\",\"role\":\"Адвокат разработчиков\",\"bio\":\"Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.\"},{\"name\":\"Tomás Rodríguez\",\"role\":\"Full-stack разработчик\",\"bio\":\"Поддерживает инфраструктуру бенчмаркинга и конвейер CI/CD. Участник открытого проекта Lingui.\"},{\"name\":\"Yuki Tanaka\",\"role\":\"Аналитик данных\",\"bio\":\"Обеспечивает статистическую строгость всех результатов бенчмарков. Доктор прикладной статистики Массачусетского технологического института (MIT).\"},{\"name\":\"Elena Kowalski\",\"role\":\"Комьюнити-менеджер\",\"bio\":\"Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.\"}]}}}")
}, g = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = d(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	if (Object.assign(o, {
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
			return g({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), e != null) {
		let t = Object(e), n = Object.getPrototypeOf(t);
		for (let r of Object.getOwnPropertyNames(n)) {
			if (r === "constructor" || r in o) continue;
			let n = t[r];
			typeof n == "function" && Object.defineProperty(o, r, {
				value: n.bind(e),
				writable: !0,
				configurable: !0
			});
		}
	}
	return l(o);
}, _ = /* @__PURE__ */ new WeakMap(), v = 0, y = (e) => {
	if (!e) return "base";
	let t = _.get(e);
	if (t) return t;
	v += 1;
	let n = `p${v}`;
	return _.set(e, n), n;
}, b = 256, x = /* @__PURE__ */ new WeakMap(), S = (e) => typeof e == "object" && !!e, ne = (e, t, n) => `${e}_${t}_${y(n)}`, re = (e, t) => {
	if (!S(e)) return { hit: !1 };
	let n = x.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, C = (e, t, n) => {
	if (!S(e)) return n;
	let r = x.get(e);
	return r || (r = /* @__PURE__ */ new Map(), x.set(e, r)), r.size >= b && r.clear(), r.set(t, n), n;
}, w = "translation", T = "object", E = "array", D = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => D(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => D(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: E,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: T,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = D(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = D(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, O = "default", k = /[^A-Za-z0-9._&=-]/g, A = /[^A-Za-z0-9._-]/g, ie = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, j = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ie);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, M = (e) => e === void 0 ? O : typeof e == "string" ? j(e, k) : Object.keys(e).sort().map((t) => `${j(t, A)}=${j(String(e[t]), A)}`).join("&"), N = (e) => Array.isArray(e) ? e.length === 0 ? [O] : e.map(M) : [M(e)], ae = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? O : e[0] ?? "default";
}, oe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, se = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ce = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, le = (e, t) => {
	if (!se(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? O : ae(N(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => oe(e, n, t, s)).map((t) => ce(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ue = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, de = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? N(n).join(",") : String(n)}`;
}).join("|") : "", P = {
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
}, F = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, I = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (F(e) && F(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : I(e[r], t[r]));
		return n;
	}
	return e;
}, L = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => I(e, t));
}, R = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, z = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? R : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: w,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return L(o, e, t);
	}
}, B = R, V = (e) => R, H = R, fe = R, U = R, W = R, G = (e) => R, K = R, pe = (e, t = !0) => [
	z(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
	B,
	H,
	fe,
	G(e ?? P.defaultLocale),
	K,
	U,
	W
], me = (e, t, n = []) => D(e, {
	...t,
	plugins: n
}), he = (e, t, n) => {
	let { locale: r, selector: i } = ue(t), a = ne(r ?? P.defaultLocale, de(i), n), o = re(e, a);
	if (o.hit) return o.content;
	let s = n ?? pe(r), c = le(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return me(e.content, t, s);
	};
	return c === null ? C(e, a, null) : Array.isArray(c) ? C(e, a, c.map(l)) : C(e, a, l(c));
}, ge = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => g({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => {
			let n = t(...e);
			return r(n);
		};
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
}, _e = R, ve = R, ye = R, q = /* @__PURE__ */ new Map(), be = (e, t = !0) => {
	let n = `${e ?? P.defaultLocale}_${t}`;
	if (q.has(n)) return q.get(n);
	let r = [
		z(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
		B,
		V(e ?? P.defaultLocale),
		H,
		G(e ?? P.defaultLocale),
		K,
		U,
		W,
		ge,
		_e,
		ve,
		ye
	];
	return q.set(n, r), r;
}, J = (e, t) => he(e, t, be(typeof t == "object" && t ? t.locale : t)), xe = Symbol("intlayer"), Y = (e, t) => t.reduce((e, t) => e?.[t], e), X = (e) => typeof e == "object" && !!e, Z = (e) => typeof e == "function" || X(e) && ("render" in e || "setup" in e), Q = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, $ = (e) => l(i({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Z(t) ? o(t) : Array.isArray(t) ? o("span", t) : t;
		};
	}
})), Se = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return $(() => e.value);
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
}), Ce = (e, n) => {
	let r = a() ? s(xe) : void 0, i = c(r?.locale) ? r.locale : d(r?.locale ?? P.defaultLocale), o = t(() => ({
		selector: void 0,
		locale: n === void 0 ? void 0 : m(n)
	})), l = t(() => o.value.locale ?? i.value), u = ee({});
	te([
		() => m(e),
		() => l.value,
		() => o.value.selector
	], ([e, t, n]) => {
		u.value = n ? J(e, {
			...n,
			locale: t
		}) : J(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let f = (e) => new Proxy({}, {
		get(n, r, i) {
			let a = t(() => Y(u.value, e));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(n, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return $(() => a.value);
			let o = e.concat(r), s = Y(u.value, o);
			if (s === void 0 || X(s) && !Z(s)) return f(o);
			if (Q(s)) return Se(t(() => Y(u.value, o)));
			if (typeof s == "function") {
				let t = Y(u.value, e);
				return t != null && !Object.hasOwn(t, r) ? s.bind(t) : (...e) => Y(u.value, o)?.(...e);
			}
			let c = t(() => Y(u.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = Y(u.value, e);
			return X(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return f([]);
}, we = i({
	__name: "TeamGrid",
	setup(e, { expose: t }) {
		t();
		let { a: n } = Ce(h), r = {
			members: n,
			getInitials: (e) => e.split(" ").map((e) => e[0]).join("")
		};
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), Te = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Ee = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, De = { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground" }, Oe = { class: "text-base font-semibold text-foreground" }, ke = { class: "mb-2 text-xs font-medium text-primary" }, Ae = { class: "text-sm text-muted-foreground" };
function je(t, i, a, o, s, c) {
	return u(), n("div", Ee, [(u(!0), n(e, null, f(o.members, (e) => (u(), n("div", {
		key: e.name,
		class: "rounded-lg border border-border bg-card p-6 text-center"
	}, [
		r("div", De, p(o.getInitials(e.name)), 1),
		r("h3", Oe, p(e.name), 1),
		r("p", ke, p(e.role), 1),
		r("p", Ae, p(e.bio), 1)
	]))), 128))]);
}
var Me = Te(we, [["render", je], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/team/TeamGrid.vue"]]);
export { Me as default };
