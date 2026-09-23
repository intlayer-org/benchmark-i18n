import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { jsxDEV as p } from "react/jsx-dev-runtime";
var ee = {
	key: "pricing-tiers",
	content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"starter\":\"Starter\",\"price0\":\"$0\",\"forever\":\"forever\",\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{runs}} benchmark runs/day\"},\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} libraries\"},\"communitySupport\":\"Community support\",\"publicResults\":\"Public results\",\"pro\":\"Pro\",\"price29\":\"$29\",\"month\":\"/month\",\"unlimitedRuns\":\"Unlimited runs\",\"allLibraries\":\"All libraries\",\"prioritySupport\":\"Priority support\",\"privateResults\":\"Private results\",\"ciIntegration\":\"CI integration\",\"historicalData\":\"Historical data\",\"enterprise\":\"Enterprise\",\"customPrice\":\"Custom\",\"everythingInPro\":\"Everything in Pro\",\"onPremiseOption\":\"On-premise option\",\"ssoSaml\":\"SSO & SAML\",\"dedicatedAccountManager\":\"Dedicated account manager\",\"customSlas\":\"Custom SLAs\",\"auditLogs\":\"Audit logs\",\"trainingSessions\":\"Training sessions\",\"contactSales\":\"Contact Sales\",\"getStarted\":\"Get Started\"},\"fr\":{\"starter\":\"Starter\",\"price0\":\"0 €\",\"forever\":\"pour toujours\",\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{runs}} passages de benchmark / jour\"},\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} bibliothèques\"},\"communitySupport\":\"Support communautaire\",\"publicResults\":\"Résultats publics\",\"pro\":\"Pro\",\"price29\":\"29 €\",\"month\":\"/ mois\",\"unlimitedRuns\":\"Passages illimités\",\"allLibraries\":\"Toutes les bibliothèques\",\"prioritySupport\":\"Support prioritaire\",\"privateResults\":\"Résultats privés\",\"ciIntegration\":\"Intégration CI\",\"historicalData\":\"Données historiques\",\"enterprise\":\"Enterprise\",\"customPrice\":\"Sur mesure\",\"everythingInPro\":\"Tout ce qui est dans Pro\",\"onPremiseOption\":\"Option sur site (on-premise)\",\"ssoSaml\":\"SSO & SAML\",\"dedicatedAccountManager\":\"Gestionnaire de compte dédié\",\"customSlas\":\"SLA personnalisés\",\"auditLogs\":\"Journaux d'audit\",\"trainingSessions\":\"Sessions de formation\",\"contactSales\":\"Contacter le service commercial\",\"getStarted\":\"Démarrer\"},\"es\":{\"starter\":\"Starter\",\"price0\":\"0 $\",\"forever\":\"para siempre\",\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{runs}} ejecuciones de benchmark/día\"},\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} bibliotecas\"},\"communitySupport\":\"Soporte de la comunidad\",\"publicResults\":\"Resultados públicos\",\"pro\":\"Pro\",\"price29\":\"29 $\",\"month\":\"/mes\",\"unlimitedRuns\":\"Ejecuciones ilimitadas\",\"allLibraries\":\"Todas las bibliotecas\",\"prioritySupport\":\"Soporte prioritario\",\"privateResults\":\"Resultados privados\",\"ciIntegration\":\"Integración CI\",\"historicalData\":\"Datos históricos\",\"enterprise\":\"Enterprise\",\"customPrice\":\"Personalizado\",\"everythingInPro\":\"Todo lo que hay en Pro\",\"onPremiseOption\":\"Opción on-premise\",\"ssoSaml\":\"SSO y SAML\",\"dedicatedAccountManager\":\"Gestor de cuentas dedicado\",\"customSlas\":\"SLA personalizados\",\"auditLogs\":\"Registros de auditoría\",\"trainingSessions\":\"Sesiones de formación\",\"contactSales\":\"Contactar con ventas\",\"getStarted\":\"Empezar\"},\"de\":{\"starter\":\"Starter\",\"price0\":\"0 $\",\"forever\":\"für immer\",\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{runs}} Benchmark-Durchläufe/Tag\"},\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} Bibliotheken\"},\"communitySupport\":\"Community-Support\",\"publicResults\":\"Öffentliche Ergebnisse\",\"pro\":\"Pro\",\"price29\":\"29 $\",\"month\":\"/Monat\",\"unlimitedRuns\":\"Unbegrenzte Durchläufe\",\"allLibraries\":\"Alle Bibliotheken\",\"prioritySupport\":\"Prioritäts-Support\",\"privateResults\":\"Private Ergebnisse\",\"ciIntegration\":\"CI-Integration\",\"historicalData\":\"Historische Daten\",\"enterprise\":\"Enterprise\",\"customPrice\":\"Individuell\",\"everythingInPro\":\"Alles in Pro\",\"onPremiseOption\":\"On-Premise-Option\",\"ssoSaml\":\"SSO & SAML\",\"dedicatedAccountManager\":\"Dedizierter Account-Manager\",\"customSlas\":\"Individuelle SLAs\",\"auditLogs\":\"Audit-Logs\",\"trainingSessions\":\"Schulungen\",\"contactSales\":\"Vertrieb kontaktieren\",\"getStarted\":\"Jetzt starten\"},\"it\":{\"starter\":\"Starter\",\"price0\":\"0 $\",\"forever\":\"per sempre\",\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{runs}} esecuzioni benchmark/giorno\"},\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} librerie\"},\"communitySupport\":\"Supporto della comunità\",\"publicResults\":\"Risultati pubblici\",\"pro\":\"Pro\",\"price29\":\"29 $\",\"month\":\"/mese\",\"unlimitedRuns\":\"Esecuzioni illimitate\",\"allLibraries\":\"Tutte le librerie\",\"prioritySupport\":\"Supporto prioritario\",\"privateResults\":\"Risultati privati\",\"ciIntegration\":\"Integrazione CI\",\"historicalData\":\"Dati storici\",\"enterprise\":\"Enterprise\",\"customPrice\":\"Personalizzato\",\"everythingInPro\":\"Tutto quello che c'è in Pro\",\"onPremiseOption\":\"Opzione in locale\",\"ssoSaml\":\"SSO e SAML\",\"dedicatedAccountManager\":\"Account manager dedicato\",\"customSlas\":\"SLA personalizzati\",\"auditLogs\":\"Registri di controllo\",\"trainingSessions\":\"Sessioni di formazione\",\"contactSales\":\"Contatta l'ufficio vendite\",\"getStarted\":\"Inizia ora\"},\"pt\":{\"starter\":\"Starter\",\"price0\":\"0 $\",\"forever\":\"para sempre\",\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{runs}} execuções de benchmark por dia\"},\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} bibliotecas\"},\"communitySupport\":\"Suporte da comunidade\",\"publicResults\":\"Resultados públicos\",\"pro\":\"Pro\",\"price29\":\"29 $\",\"month\":\"/mês\",\"unlimitedRuns\":\"Execuções ilimitadas\",\"allLibraries\":\"Todas as bibliotecas\",\"prioritySupport\":\"Suporte prioritário\",\"privateResults\":\"Resultados privados\",\"ciIntegration\":\"Integração CI\",\"historicalData\":\"Dados históricos\",\"enterprise\":\"Enterprise\",\"customPrice\":\"Personalizado\",\"everythingInPro\":\"Tudo o que está no Pro\",\"onPremiseOption\":\"Opção on-premise\",\"ssoSaml\":\"SSO & SAML\",\"dedicatedAccountManager\":\"Gerente de conta dedicado\",\"customSlas\":\"SLAs personalizados\",\"auditLogs\":\"Logs de auditoria\",\"trainingSessions\":\"Sessões de treinamento\",\"contactSales\":\"Contatar Vendas\",\"getStarted\":\"Começar\"},\"zh\":{\"starter\":\"入门版\",\"price0\":\"¥0\",\"forever\":\"永久\",\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"每天 {{runs}} 次基准测试运行\"},\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} 个库\"},\"communitySupport\":\"社区支持\",\"publicResults\":\"公开结果\",\"pro\":\"专业版\",\"price29\":\"¥199\",\"month\":\"/月\",\"unlimitedRuns\":\"无限次运行\",\"allLibraries\":\"所有库\",\"prioritySupport\":\"优先支持\",\"privateResults\":\"私有结果\",\"ciIntegration\":\"CI 集成\",\"historicalData\":\"历史数据\",\"enterprise\":\"企业版\",\"customPrice\":\"定制\",\"everythingInPro\":\"包含专业版所有功能\",\"onPremiseOption\":\"本地部署选项\",\"ssoSaml\":\"SSO 和 SAML\",\"dedicatedAccountManager\":\"专属客户经理\",\"customSlas\":\"定制 SLA\",\"auditLogs\":\"审计日志\",\"trainingSessions\":\"培训课程\",\"contactSales\":\"联系销售\",\"getStarted\":\"开始使用\"},\"ja\":{\"starter\":\"スターター\",\"price0\":\"0円\",\"forever\":\"永久に無料\",\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"1日あたり {{runs}} 回のベンチマーク実行\"},\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} ライブラリ\"},\"communitySupport\":\"コミュニティサポート\",\"publicResults\":\"結果を公開\",\"pro\":\"プロ\",\"price29\":\"3,900円\",\"month\":\"/月\",\"unlimitedRuns\":\"無制限の実行\",\"allLibraries\":\"すべてのライブラリ\",\"prioritySupport\":\"優先サポート\",\"privateResults\":\"結果を非公開\",\"ciIntegration\":\"CI統合\",\"historicalData\":\"履歴データ\",\"enterprise\":\"エンタープライズ\",\"customPrice\":\"カスタム\",\"everythingInPro\":\"Proのすべての機能を含む\",\"onPremiseOption\":\"オンプレミスオプション\",\"ssoSaml\":\"SSO & SAML\",\"dedicatedAccountManager\":\"専任のアカウントマネージャー\",\"customSlas\":\"カスタムSLA\",\"auditLogs\":\"監査ログ\",\"trainingSessions\":\"トレーニングセッション\",\"contactSales\":\"営業に問い合わせる\",\"getStarted\":\"始める\"},\"ko\":{\"starter\":\"스타터\",\"price0\":\"0원\",\"forever\":\"영원히\",\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"하루 {{runs}}회 벤치마크 실행\"},\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}}개 라이브러리\"},\"communitySupport\":\"커뮤니티 지원\",\"publicResults\":\"결과 공개\",\"pro\":\"프로\",\"price29\":\"39,000원\",\"month\":\"/월\",\"unlimitedRuns\":\"무제한 실행\",\"allLibraries\":\"모든 라이브러리\",\"prioritySupport\":\"우선 지원\",\"privateResults\":\"결과 비공개\",\"ciIntegration\":\"CI 통합\",\"historicalData\":\"기록 데이터\",\"enterprise\":\"엔터프라이즈\",\"customPrice\":\"커스텀\",\"everythingInPro\":\"Pro의 모든 기능 포함\",\"onPremiseOption\":\"온프레미스 옵션\",\"ssoSaml\":\"SSO 및 SAML\",\"dedicatedAccountManager\":\"전담 어카운트 매니저\",\"customSlas\":\"맞춤형 SLA\",\"auditLogs\":\"감사 로그\",\"trainingSessions\":\"교육 세션\",\"contactSales\":\"영업팀 문의\",\"getStarted\":\"시작하기\"},\"ru\":{\"starter\":\"Starter\",\"price0\":\"0 $\",\"forever\":\"навсегда\",\"benchmarkRunPerDay\":{\"fields\":[\"runs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{runs}} запусков бенчмарка в день\"},\"librariesNumber\":{\"fields\":[\"libs\"],\"nodeType\":\"insertion\",\"insertion\":\"{{libs}} библиотек\"},\"communitySupport\":\"Сообщество поддержки\",\"publicResults\":\"Публичные результаты\",\"pro\":\"Pro\",\"price29\":\"29 $\",\"month\":\"/месяц\",\"unlimitedRuns\":\"Неограниченное количество запусков\",\"allLibraries\":\"Все библиотеки\",\"prioritySupport\":\"Приоритетная поддержка\",\"privateResults\":\"Приватные результаты\",\"ciIntegration\":\"Интеграция с CI\",\"historicalData\":\"Исторические данные\",\"enterprise\":\"Корпоративный\",\"customPrice\":\"Индивидуальная цена\",\"everythingInPro\":\"Все возможности Pro\",\"onPremiseOption\":\"Локальное развертывание\",\"ssoSaml\":\"SSO и SAML\",\"dedicatedAccountManager\":\"Выделенный менеджер\",\"customSlas\":\"Индивидуальные SLA\",\"auditLogs\":\"Журналы аудита\",\"trainingSessions\":\"Сессии обучения\",\"contactSales\":\"Связаться с отделом продаж\",\"getStarted\":\"Начать\"}}}")
}, m = /* @__PURE__ */ new WeakMap(), te = 0, ne = (e) => {
	if (!e) return "base";
	let t = m.get(e);
	if (t) return t;
	te += 1;
	let n = `p${te}`;
	return m.set(e, n), n;
}, re = 256, h = /* @__PURE__ */ new WeakMap(), ie = (e) => typeof e == "object" && !!e, ae = (e, t, n) => `${e}_${t}_${ne(n)}`, oe = (e, t) => {
	if (!ie(e)) return { hit: !1 };
	let n = h.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, g = (e, t, n) => {
	if (!ie(e)) return n;
	let r = h.get(e);
	return r || (r = /* @__PURE__ */ new Map(), h.set(e, r)), r.size >= re && r.clear(), r.set(t, n), n;
}, se = "translation", ce = "enumeration", le = "plural", _ = "insertion", ue = "object", de = "array", fe = "markdown", v = "html", pe = "gender", me = "select", y = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), b = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => b(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => b(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: de,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ue,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = b(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = b(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, he = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ge = (e, t) => e[he(e, t) ?? "fallback"], _e = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), x = "default", ve = /[^A-Za-z0-9._&=-]/g, ye = /[^A-Za-z0-9._-]/g, be = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, S = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, be);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, xe = (e) => e === void 0 ? x : typeof e == "string" ? S(e, ve) : Object.keys(e).sort().map((t) => `${S(t, ye)}=${S(String(e[t]), ye)}`).join("&"), Se = (e) => Array.isArray(e) ? e.length === 0 ? [x] : e.map(xe) : [xe(e)], Ce = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? x : e[0] ?? "default";
}, we = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Te = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Ee = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, De = (e, t) => {
	if (!Te(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? x : Ce(Se(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => we(e, n, t, s)).map((t) => Ee(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Oe = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, ke = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Se(n).join(",") : String(n)}`;
}).join("|") : "", C = {
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
}, w = {
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
}, Ae = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, je = "\x1B[0m", Me = "\x1B[34m", Ne = "\x1B[31m", Pe = "\x1B[32m", Fe = "\x1B[36m", Ie = (e) => e, Le = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ie(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Re = (e, t) => (n, r) => Le(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), T = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? je : n : je}` : e;
T("✗", Ne), T("✓", Pe), T("⏲", Me);
var ze = 50, Be = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Set(), He = (e) => {
	Ve.has(e) || (Ve.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ue = {
	DisplayNames: class {
		of(e) {
			return e;
		}
	},
	ListFormat: class {
		format(e) {
			return Array.from(e).join(", ");
		}
		formatToParts(e) {
			return Array.from(e).flatMap((e, t) => t === 0 ? [{
				type: "element",
				value: e
			}] : [{
				type: "literal",
				value: ", "
			}, {
				type: "element",
				value: e
			}]);
		}
	},
	Segmenter: class {
		segment(e) {
			let t = 0;
			return Array.from(e).map((e) => {
				let n = t;
				return t += e.length, {
					segment: e,
					index: n
				};
			});
		}
	}
}, We = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (He(e), Ue[e]);
};
function E(e, t, n) {
	let r = t ?? C?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Be.get(a);
	o || (o = /* @__PURE__ */ new Map(), Be.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? We(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ze && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ge = (e, t, n) => e[E("PluralRules", n).select(t)] ?? e.other, Ke = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, qe = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Je = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (qe(e) && qe(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Je(e[r], t[r]));
		return n;
	}
	return e;
}, Ye = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Je(e, t));
}, D = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Xe = (e) => {
	if (typeof e == "string") return e;
	if (D(e)) return e.nodeType === "html" ? e[v] : e[fe];
}, Ze = (e, t) => {
	if (typeof e == "string") return t;
	if (D(e)) {
		let n = e.nodeType === "html" ? v : fe;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Qe = (e, t, n, r, i) => {
	let a = Ze(e, _e(Xe(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, O = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, k = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? O : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: se,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Ye(o, e, t);
	}
}, A = O, $e = (e) => O, j = O, et = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? O : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || D(e),
			transform: (e, n, r) => {
				if (D(e)) return (i) => Qe(e, i, n, t.plugins, r);
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
		};
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
	}
}, M = O, N = O, P = (e) => O, F = O, tt = (e, t = !0) => [
	k(e ?? C.defaultLocale, t ? C.defaultLocale : void 0),
	A,
	j,
	et,
	P(e ?? C.defaultLocale),
	F,
	M,
	N
], nt = (e, t, n = []) => b(e, {
	...t,
	plugins: n
}), rt = (e, t, n) => {
	let { locale: r, selector: i } = Oe(t), a = ae(r ?? C.defaultLocale, ke(i), n), o = oe(e, a);
	if (o.hit) return o.content;
	let s = n ?? tt(r), c = De(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return nt(e.content, t, s);
	};
	return c === null ? g(e, a, null) : Array.isArray(c) ? g(e, a, c.map(l)) : g(e, a, l(c));
}, it = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", I = /\{\{\s*(.*?)\s*\}\}/g, at = (e, t = {}) => {
	if (!Object.values(t).some(it)) return {
		isSimple: !0,
		parts: e.replace(I, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(I), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, L = (e) => y(ce, e), ot = (e) => y(pe, e), st = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, R = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = st(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, ct = /* @__PURE__ */ new Set([
	"area",
	"base",
	"br",
	"col",
	"embed",
	"hr",
	"img",
	"input",
	"link",
	"meta",
	"source",
	"track",
	"wbr"
]), lt = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, ut = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(lt)) {
		let e = !!r[1], i = r[2], a = r[3], o = !!r[4];
		if (!(a.trimStart().startsWith("://") || a.trimStart().startsWith(":"))) {
			if (e) {
				if (n.length === 0) t.push({
					type: "error",
					message: `Closing tag </${i}> has no matching opening tag`
				});
				else {
					let e = n[n.length - 1];
					e.tag.toLowerCase() !== i.toLowerCase() && t.push({
						type: "error",
						message: `Mismatched closing tag: expected </${e.tag}> but found </${i}>`
					}), n.pop();
				}
			} else {
				let e = ct.has(i.toLowerCase());
				!o && !e && n.push({ tag: i });
			}
		}
	}
	for (let e of n) t.push({
		type: "error",
		message: `Unclosed HTML tag: <${e.tag}>`
	});
	return {
		valid: t.filter((e) => e.type === "error").length === 0,
		issues: t
	};
}, z = (e, t) => y(v, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = ut(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return R(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => R(await e)), typeof n == "string") return R(n);
	try {
		return R(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), B = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, V = (e) => y(_, e, { fields: (() => {
	if (typeof e == "string") return B(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => B(await e)), typeof t == "string") return B(t);
	try {
		return B(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), H = (e) => y(le, e), dt = (e, t) => y(me, e, { variable: t }), ft = (e) => {
	let t = 0, n = () => {
		let n = [], i = "";
		for (; t < e.length;) {
			let a = e[t];
			if (a === "{") i &&= (n.push(i), ""), t++, n.push(r());
			else if (a === "}") break;
			else if (a === "'") {
				if (t + 1 < e.length && e[t + 1] === "'") i += "'", t += 2;
				else {
					let n = e.indexOf("'", t + 1);
					n === -1 ? (i += "'", t++) : (i += e.substring(t + 1, n), t = n + 1);
				}
			} else i += a, t++;
		}
		return i && n.push(i), n;
	}, r = () => {
		let r = "";
		for (; t < e.length && /[^,}]/.test(e[t]);) r += e[t], t++;
		if (r = r.trim(), t >= e.length) throw Error("Unclosed argument");
		if (e[t] === "}") return t++, {
			type: "argument",
			name: r
		};
		if (e[t] === ",") {
			t++;
			let i = "";
			for (; t < e.length && /[^,}]/.test(e[t]);) i += e[t], t++;
			if (i = i.trim(), t >= e.length) throw Error("Unclosed argument");
			if (e[t] === "}") return t++, {
				type: "argument",
				name: r,
				format: { type: i }
			};
			if (e[t] === ",") {
				if (t++, i === "plural" || i === "select" || i === "selectordinal") {
					let a = {};
					for (; t < e.length && e[t] !== "}";) {
						for (; t < e.length && /\s/.test(e[t]);) t++;
						let r = "";
						for (; t < e.length && /[^{\s]/.test(e[t]);) r += e[t], t++;
						for (; t < e.length && /\s/.test(e[t]);) t++;
						if (e[t] !== "{") throw Error("Expected { after option key");
						t++;
						let i = n();
						if (e[t] !== "}") throw Error("Expected } after option value");
						for (t++, a[r] = i; t < e.length && /\s/.test(e[t]);) t++;
					}
					if (t++, i === "plural") return {
						type: "plural",
						name: r,
						options: a
					};
					if (i === "select") return {
						type: "select",
						name: r,
						options: a
					};
					if (i === "selectordinal") return {
						type: "selectordinal",
						name: r,
						options: a
					};
				} else {
					let n = "";
					for (; t < e.length && e[t] !== "}";) n += e[t], t++;
					if (t >= e.length) throw Error("Unclosed argument");
					return n = n.trim(), t++, {
						type: "argument",
						name: r,
						format: {
							type: i,
							style: n
						}
					};
				}
			}
		}
		throw Error("Malformed argument");
	};
	return n();
}, U = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? z(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? z(t) : V(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? z(t) : t;
		if (t.type === "argument") return t.format ? V(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : V(`{{${t.name}}}`);
		if (t.type === "plural") {
			let e = {}, n = !1;
			for (let e of Object.keys(t.options)) if (e.startsWith("=")) {
				n = !0;
				break;
			}
			if (n) {
				for (let [n, r] of Object.entries(t.options)) {
					let i = n;
					n.startsWith("=") ? i = n.substring(1) : n === "one" ? i = "1" : n === "two" ? i = "2" : n === "few" ? i = "<=3" : n === "many" ? i = ">=4" : n === "other" && (i = "fallback");
					let a = r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
					e[i] = U(a);
				}
				return e.__intlayer_icu_var = t.name, L(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = U(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return H(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = U(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? ot({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : dt(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = U(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, L(e);
		}
	}
	return e.map((e) => U([e]));
}, pt = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return U(ft(e));
		} catch {
			return e;
		}
	}
}, mt = (e) => b(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...pt
	}]
}), ht = (e) => {
	let t = 0, n = () => {
		let n = [], a = "";
		for (; t < e.length;) {
			let o = e[t];
			if (o === "{" && e[t + 1] === "{") a &&= (n.push(a), ""), t += 2, n.push(r());
			else if (o === "{") a &&= (n.push(a), ""), t++, n.push(i());
			else if (o === "}") break;
			else a += o, t++;
		}
		return a && n.push(a), n;
	}, r = () => {
		let n = "";
		for (; t < e.length;) {
			if (e[t] === "}" && e[t + 1] === "}") return t += 2, {
				type: "argument",
				name: n.trim()
			};
			n += e[t], t++;
		}
		throw Error("Unclosed i18next variable");
	}, i = () => {
		let r = "";
		for (; t < e.length && /[^,}]/.test(e[t]);) r += e[t], t++;
		if (r = r.trim(), t >= e.length) throw Error("Unclosed argument");
		if (e[t] === "}") return t++, {
			type: "argument",
			name: r
		};
		if (e[t] === ",") {
			t++;
			let i = "";
			for (; t < e.length && /[^,}]/.test(e[t]);) i += e[t], t++;
			if (i = i.trim(), t >= e.length) throw Error("Unclosed argument");
			if (e[t] === "}") return t++, {
				type: "argument",
				name: r,
				format: { type: i }
			};
			if (e[t] === ",") {
				if (t++, i === "plural" || i === "select") {
					let a = {};
					for (; t < e.length && e[t] !== "}";) {
						for (; t < e.length && /\s/.test(e[t]);) t++;
						let r = "";
						for (; t < e.length && /[^{\s]/.test(e[t]);) r += e[t], t++;
						for (; t < e.length && /\s/.test(e[t]);) t++;
						if (e[t] !== "{") throw Error("Expected { after option key");
						t++;
						let i = n();
						if (e[t] !== "}") throw Error("Expected } after option value");
						for (t++, a[r] = i; t < e.length && /\s/.test(e[t]);) t++;
					}
					if (t++, i === "plural") return {
						type: "plural",
						name: r,
						options: a
					};
					if (i === "select") return {
						type: "select",
						name: r,
						options: a
					};
				} else {
					let n = "";
					for (; t < e.length && e[t] !== "}";) n += e[t], t++;
					if (t >= e.length) throw Error("Unclosed argument");
					return n = n.trim(), t++, {
						type: "argument",
						name: r,
						format: {
							type: i,
							style: n
						}
					};
				}
			}
		}
		throw Error("Malformed argument");
	};
	return n();
}, W = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? z(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? z(t) : V(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? z(t) : t;
		if (t.type === "argument") return t.format ? V(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : V(`{{${t.name}}}`);
		if (t.type === "plural") {
			let e = {}, n = !1;
			for (let e of Object.keys(t.options)) if (e.startsWith("=")) {
				n = !0;
				break;
			}
			if (n) {
				for (let [n, r] of Object.entries(t.options)) {
					let i = n;
					n.startsWith("=") ? i = n.substring(1) : n === "one" ? i = "1" : n === "two" ? i = "2" : n === "few" ? i = "<=3" : n === "many" ? i = ">=4" : n === "other" && (i = "fallback");
					let a = r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
					e[i] = W(a);
				}
				return e.__intlayer_icu_var = t.name, L(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = W(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return H(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = W(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? ot({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : dt(e, t.name);
		}
	}
	return e.map((e) => W([e]));
}, gt = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return W(ht(e));
		} catch {
			return e;
		}
	}
}, _t = (e) => b(e, {
	dictionaryKey: "i18next",
	keyPath: [],
	plugins: [{
		id: "i18next",
		...gt
	}]
}), vt = (e, t, n = ".") => {
	if (!t) return e;
	if (typeof e == "object" && e) {
		let n = e[t];
		if (n !== void 0) return n;
	}
	if (n === !1 || !t.includes(n)) return;
	let r = e;
	for (let e of t.split(n)) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, yt = (e) => {
	let t = 0, n = [], r = "";
	for (; t < e.length;) {
		let i = e[t];
		if (i === "{") {
			r &&= (n.push(r), ""), t++;
			let i = "";
			for (; t < e.length && e[t] !== "}";) i += e[t], t++;
			t < e.length && t++, n.push({
				type: "argument",
				name: i.trim()
			});
		} else r += i, t++;
	}
	return r && n.push(r), n;
}, bt = (e) => {
	let t = [], n = "", r = 0;
	for (; r < e.length;) {
		let i = e[r];
		i === "\\" && r + 1 < e.length && e[r + 1] === "|" ? (n += "|", r += 2) : i === "|" ? (t.push(n.trim()), n = "", r++) : (n += i, r++);
	}
	return t.push(n.trim()), t.map(yt);
}, G = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") return e[0];
	let t = "";
	for (let n of e) t += typeof n == "string" ? n : `{{${n.name}}}`;
	return V(t);
}, xt = (e) => {
	if (e.length === 1) return G(e[0]);
	let t = {};
	return e.length === 2 ? L({
		1: G(e[0]),
		fallback: G(e[1])
	}) : e.length === 3 ? L({
		0: G(e[0]),
		1: G(e[1]),
		fallback: G(e[2])
	}) : (e.forEach((n, r) => {
		r === e.length - 1 ? t.fallback = G(n) : t[r.toString()] = G(n);
	}), t.__intlayer_vue_i18n_var = "count", L(t));
}, St = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("|")),
	transform: (e) => {
		try {
			return xt(bt(e));
		} catch {
			return e;
		}
	}
}, Ct = (e) => b(e, {
	dictionaryKey: "vue-i18n",
	keyPath: [],
	plugins: [{
		id: "vue-i18n",
		...St
	}]
}), wt = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], K = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Tt = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? E("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? E("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : E("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return E("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Et = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{}]+?)\s*\}\}/g, (e, n) => {
	let r = K(t, n);
	return r === void 0 ? e : String(r);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : Tt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = K(t, n);
	return r === void 0 ? e : String(r);
}), q = (e, t) => e[t] ?? e.count ?? e.n, J = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Et(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return J(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(J(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return J(r[_], t, n);
	if (r.nodeType === "html") return J(r[v], t, n);
	if (r.nodeType === "plural") {
		let e = r[le];
		return J(Ge(e, Number(q(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ce], i = wt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) wt.includes(t) || (o[t] = n);
		let s = q(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = E("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ge(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return J(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[me], i = q(t, typeof r.variable == "string" ? r.variable : "value");
		return J(Ke(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[pe];
		return J(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Dt = {
	icu: (e) => mt(e),
	i18next: (e) => _t(e),
	"vue-i18n": (e) => Ct(e)
}, Ot = (e, t = {}, n = "en", r = "icu") => {
	let i = J(typeof e == "string" ? Dt[r](e) : e, t, n);
	return typeof i == "string" ? i : String(i ?? "");
}, Y = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: Y(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, kt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, At = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = At(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), jt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = jt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Mt = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return Nt(e, (e) => vt(t, r(e)), r);
}, Nt = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return Ot(i, r, e, "icu");
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = kt(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: At(Y(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = kt(t), o = r(e, i);
			return o === void 0 ? n(e) : jt(Y(o), a);
		}
	});
}, Pt = ({ children: e, value: t, additionalProps: n }) => {
	let r = i(e) ? e : d(u, { children: e });
	return new Proxy(r, { get(e, r, i) {
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
}, Ft = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => Pt({
		...n,
		value: n.children,
		children: n.children
	})
}, It = O, Lt = (e, n) => {
	let i = at(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, Rt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? O : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || D(e),
			transform: (e, n, r) => {
				if (D(e)) return (i) => Qe(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Lt(i, e);
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
}, zt = O, Bt = O, X = /* @__PURE__ */ new Map(), Vt = (e, t = !0) => {
	let n = `${e ?? C.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		k(e ?? C.defaultLocale, t ? C.defaultLocale : void 0),
		A,
		$e(e ?? C.defaultLocale),
		j,
		P(e ?? C.defaultLocale),
		F,
		M,
		N,
		Ft,
		It,
		Rt,
		zt,
		Bt
	];
	return X.set(n, r), r;
}, Ht = (e, t) => rt(e, t, Vt(typeof t == "object" && t ? t.locale : t)), Ut = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Wt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Ut(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Gt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Z = {
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
}, Kt = (e = Z) => {
	let { locales: t } = C;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Gt) for (let t = 0; t < (w.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(w.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, qt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Gt && w.storage.cookies) for (let n = 0; n < w.storage.cookies.length; n++) {
		let { name: r, attributes: i } = w.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Ut(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Wt(r, e, i));
			} catch {}
		}
	}
}, Jt = Kt(Z), Yt = (e, t) => qt(e, {
	...Z,
	isCookieEnabled: t
}), Xt = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Zt = ({ children: e }) => (Xt(), e), Qt = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, $t = ({ children: e }) => (Qt(), e), en = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, tn = (e, t = C?.locales, n = C?.defaultLocale) => {
	let r = [e].flat(), i = (e) => e.trim().toLowerCase();
	try {
		for (let e of r) {
			let n = i(e), r = t.find((e) => i(e) === n);
			if (r) return r;
			let [a] = n.split("-"), o = t.find((e) => i(e).split("-")[0] === a);
			if (o) return o;
		}
	} catch {}
	return n;
}, Q = n({
	locale: Jt ?? C?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), nn = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = C ?? {}, [f, p] = l(e ?? Jt ?? t ?? u);
	o(() => {
		e && e !== f && p(e);
	}, [e]), o(() => {
		en();
	}, []);
	let ee = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), Yt(e, s);
		}
	}), m = tn(f);
	return d(Q.Provider, {
		value: {
			locale: m,
			setLocale: ee,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, rn = ({ children: e, ...t }) => f(nn, {
	...t,
	children: [
		d(Zt, {}),
		d($t, {}),
		e
	]
}), an = (e, t) => {
	let { locale: n, variant: r } = a(Q) ?? {}, i = t ?? n, o = typeof i == "object" && i ? `${i.locale ?? ""}|${ke(i)}` : i;
	return s(() => Ht(e, i), [e.key, o]);
}, on = ((e, t) => {
	let { locale: n } = a(Q) ?? {};
	return Mt(n, an(e), t);
}), sn = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Re({ log: Ae })(`${T("IntlProvider", Fe)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(rn, {
	locale: e,
	children: t
}, String(e))), $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/pricing/PricingTiers.tsx";
function cn() {
	let e = on(ee), t = [
		{
			name: e("starter"),
			price: e("price0"),
			period: e("forever"),
			features: [
				e("benchmarkRunPerDay", { runs: 5 }),
				e("librariesNumber", { libs: 3 }),
				e("communitySupport"),
				e("publicResults")
			]
		},
		{
			name: e("pro"),
			price: e("price29"),
			period: e("month"),
			features: [
				e("unlimitedRuns"),
				e("allLibraries"),
				e("prioritySupport"),
				e("privateResults"),
				e("ciIntegration"),
				e("historicalData")
			],
			highlighted: !0
		},
		{
			name: e("enterprise"),
			price: e("customPrice"),
			period: "",
			features: [
				e("everythingInPro"),
				e("onPremiseOption"),
				e("ssoSaml"),
				e("dedicatedAccountManager"),
				e("customSlas"),
				e("auditLogs"),
				e("trainingSessions")
			]
		}
	];
	return p("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: t.map((t) => p("div", {
			className: `flex flex-col rounded-lg border p-6 ${t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				p("h3", {
					className: "text-lg font-semibold text-foreground",
					children: t.name
				}, void 0, !1, {
					fileName: $,
					lineNumber: 59,
					columnNumber: 11
				}, this),
				p("div", {
					className: "my-4",
					children: [p("span", {
						className: "text-3xl font-bold text-foreground",
						children: t.price
					}, void 0, !1, {
						fileName: $,
						lineNumber: 61,
						columnNumber: 13
					}, this), p("span", {
						className: "text-sm text-muted-foreground",
						children: t.period
					}, void 0, !1, {
						fileName: $,
						lineNumber: 64,
						columnNumber: 13
					}, this)]
				}, void 0, !0, {
					fileName: $,
					lineNumber: 60,
					columnNumber: 11
				}, this),
				p("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: t.features.map((e) => p("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							p("span", {
								className: "text-primary",
								children: "✓"
							}, void 0, !1, {
								fileName: $,
								lineNumber: 72,
								columnNumber: 17
							}, this),
							" ",
							e
						]
					}, e, !0, {
						fileName: $,
						lineNumber: 68,
						columnNumber: 15
					}, this))
				}, void 0, !1, {
					fileName: $,
					lineNumber: 66,
					columnNumber: 11
				}, this),
				p("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${t.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: t.name === e("enterprise") ? e("contactSales") : e("getStarted")
				}, void 0, !1, {
					fileName: $,
					lineNumber: 76,
					columnNumber: 11
				}, this)
			]
		}, t.name, !0, {
			fileName: $,
			lineNumber: 51,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: $,
		lineNumber: 49,
		columnNumber: 5
	}, this);
}
var ln = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function un({ children: t }) {
	return p(e.Suspense, {
		fallback: null,
		children: p(sn, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: ln,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: ln,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var dn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/pricing/PricingTiers.wrapper.tsx";
function fn() {
	return p(un, { children: p(cn, {}, void 0, !1, {
		fileName: dn,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: dn,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { fn as default };
