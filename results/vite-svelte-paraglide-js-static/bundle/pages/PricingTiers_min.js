import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { derived as t, writable as n } from "svelte/store";
var r = {}, i = [
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
], c = [], l, u;
function d(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (l === t) return u;
	let n = new URL(t, "http://dummy.com"), i;
	for (let e of c) if (new r(e.match, n.href).exec(n.href)) {
		i = e;
		break;
	}
	return l = t, u = i, i;
}
function f(e) {
	let t = d(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : s;
}
var p = void 0, m = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	if (p) {
		let e = p?.getStore()?.locale;
		if (e) return e;
	}
	let e = s;
	!m && typeof window < "u" && window.location?.href && (e = f(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, y(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ne();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (S(t) && x.has(t)) {
			let e = x.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return te(t);
			}
		}
		let e = b(n);
		if (e) return e;
	}
}
var v = (e) => {
	e ? window.location.href = e : window.location.reload();
}, y = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = _();
	} catch {}
	let i = [], c = s;
	!m && typeof window < "u" && window.location?.href && (c = f(window.location.href));
	for (let t of c) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${o}`;
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
	let l = () => {
		!m && n.reload && window.location && e !== r && v(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		l();
	});
	l();
};
function b(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function te(e) {
	let t = b(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function ne() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${a}=([^;]+)`))?.[2];
	return b(e);
}
var x = /* @__PURE__ */ new Map();
function S(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var C = () => "Starter", w = () => "Starter", T = () => "Starter", E = () => "Starter", D = () => "Starter", O = () => "Starter", k = () => "入门版", A = () => "スターター", j = () => "Starter", M = () => "Starter", N = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? C(e) : n === "fr" ? w(e) : n === "es" ? T(e) : n === "de" ? E(e) : n === "it" ? D(e) : n === "pt" ? O(e) : n === "zh" ? k(e) : n === "ja" ? A(e) : n === "ko" ? j(e) : M(e);
}), P = () => "$0", F = () => "0 €", I = () => "0 $", L = () => "0 $", R = () => "0 $", z = () => "0 $", B = () => "0 $", V = () => "0円", H = () => "$0", U = () => "0 $", W = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? P(e) : n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : U(e);
}), G = () => "forever", K = () => "pour toujours", q = () => "para siempre", J = () => "für immer", Y = () => "per sempre", X = () => "para sempre", Z = () => "永久", re = () => "ずっと無料", ie = () => "forever", ae = () => "навсегда", oe = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? G(e) : n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? X(e) : n === "zh" ? Z(e) : n === "ja" ? re(e) : n === "ko" ? ie(e) : ae(e);
}), se = () => "5 benchmark runs/day", ce = () => "5 exécutions de benchmark / jour", le = () => "5 ejecuciones de benchmark al día", ue = () => "5 Benchmark-Durchläufe/Tag", de = () => "5 esecuzioni benchmark al giorno", fe = () => "5 execuções de benchmark/dia", pe = () => "每天 5 次基准测试运行", me = () => "1日あたり5回のベンチマーク実行", he = () => "5 benchmark runs/day", ge = () => "5 запусков бенчмарка в день", _e = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? se(e) : n === "fr" ? ce(e) : n === "es" ? le(e) : n === "de" ? ue(e) : n === "it" ? de(e) : n === "pt" ? fe(e) : n === "zh" ? pe(e) : n === "ja" ? me(e) : n === "ko" ? he(e) : ge(e);
}), ve = () => "3 libraries", ye = () => "3 bibliothèques", be = () => "3 bibliotecas", xe = () => "3 Bibliotheken", Se = () => "3 librerie", Ce = () => "3 bibliotecas", we = () => "3 个库", Te = () => "3ライブラリ", Ee = () => "3 libraries", De = () => "3 библиотеки", Oe = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ve(e) : n === "fr" ? ye(e) : n === "es" ? be(e) : n === "de" ? xe(e) : n === "it" ? Se(e) : n === "pt" ? Ce(e) : n === "zh" ? we(e) : n === "ja" ? Te(e) : n === "ko" ? Ee(e) : De(e);
}), ke = () => "Community support", Ae = () => "Support communautaire", je = () => "Soporte de la comunidad", Me = () => "Community-Support", Ne = () => "Supporto della comunità", Pe = () => "Suporte da comunidade", Fe = () => "社区支持", Ie = () => "コミュニティサポート", Le = () => "Community support", Re = () => "Поддержка сообщества", ze = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ke(e) : n === "fr" ? Ae(e) : n === "es" ? je(e) : n === "de" ? Me(e) : n === "it" ? Ne(e) : n === "pt" ? Pe(e) : n === "zh" ? Fe(e) : n === "ja" ? Ie(e) : n === "ko" ? Le(e) : Re(e);
}), Be = () => "Public results", Ve = () => "Résultats publics", He = () => "Resultados públicos", Ue = () => "Öffentliche Ergebnisse", We = () => "Risultati pubblici", Ge = () => "Resultados públicos", Ke = () => "公开结果", qe = () => "公開結果", Je = () => "Public results", Ye = () => "Публичные результаты", Xe = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Be(e) : n === "fr" ? Ve(e) : n === "es" ? He(e) : n === "de" ? Ue(e) : n === "it" ? We(e) : n === "pt" ? Ge(e) : n === "zh" ? Ke(e) : n === "ja" ? qe(e) : n === "ko" ? Je(e) : Ye(e);
}), Ze = () => "Pro", Qe = () => "Pro", $e = () => "Pro", et = () => "Pro", tt = () => "Pro", nt = () => "Pro", rt = () => "专业版", it = () => "プロ", at = () => "Pro", ot = () => "Pro", st = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ze(e) : n === "fr" ? Qe(e) : n === "es" ? $e(e) : n === "de" ? et(e) : n === "it" ? tt(e) : n === "pt" ? nt(e) : n === "zh" ? rt(e) : n === "ja" ? it(e) : n === "ko" ? at(e) : ot(e);
}), ct = () => "$29", lt = () => "29 €", ut = () => "29 $", dt = () => "29 $", ft = () => "29 $", pt = () => "29 $", mt = () => "29 $", ht = () => "29ドル", gt = () => "$29", _t = () => "29 $", vt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ct(e) : n === "fr" ? lt(e) : n === "es" ? ut(e) : n === "de" ? dt(e) : n === "it" ? ft(e) : n === "pt" ? pt(e) : n === "zh" ? mt(e) : n === "ja" ? ht(e) : n === "ko" ? gt(e) : _t(e);
}), yt = () => "/month", bt = () => "/ mois", xt = () => "/mes", St = () => "/Monat", Ct = () => "/mese", wt = () => "/mês", Tt = () => "/月", Et = () => "/月", Dt = () => "/month", Ot = () => "/мес", kt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? yt(e) : n === "fr" ? bt(e) : n === "es" ? xt(e) : n === "de" ? St(e) : n === "it" ? Ct(e) : n === "pt" ? wt(e) : n === "zh" ? Tt(e) : n === "ja" ? Et(e) : n === "ko" ? Dt(e) : Ot(e);
}), At = () => "Unlimited runs", jt = () => "Exécutions illimitées", Mt = () => "Ejecuciones ilimitadas", Nt = () => "Unbegrenzte Durchläufe", Pt = () => "Esecuzioni illimitate", Ft = () => "Execuções ilimitadas", It = () => "无限次运行", Lt = () => "無制限の実行", Rt = () => "Unlimited runs", zt = () => "Неограниченное число запусков", Bt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? At(e) : n === "fr" ? jt(e) : n === "es" ? Mt(e) : n === "de" ? Nt(e) : n === "it" ? Pt(e) : n === "pt" ? Ft(e) : n === "zh" ? It(e) : n === "ja" ? Lt(e) : n === "ko" ? Rt(e) : zt(e);
}), Vt = () => "All libraries", Ht = () => "Toutes les bibliothèques", Ut = () => "Todas las bibliotecas", Wt = () => "Alle Bibliotheken", Gt = () => "Tutte le librerie", Kt = () => "Todas as bibliotecas", qt = () => "所有库", Jt = () => "すべてのライブラリ", Yt = () => "All libraries", Xt = () => "Все библиотеки", Zt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Vt(e) : n === "fr" ? Ht(e) : n === "es" ? Ut(e) : n === "de" ? Wt(e) : n === "it" ? Gt(e) : n === "pt" ? Kt(e) : n === "zh" ? qt(e) : n === "ja" ? Jt(e) : n === "ko" ? Yt(e) : Xt(e);
}), Qt = () => "Priority support", $t = () => "Support prioritaire", en = () => "Soporte prioritario", tn = () => "Priorisierter Support", nn = () => "Supporto prioritario", rn = () => "Suporte prioritário", an = () => "优先支持", on = () => "優先サポート", sn = () => "Priority support", cn = () => "Приоритетная поддержка", ln = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Qt(e) : n === "fr" ? $t(e) : n === "es" ? en(e) : n === "de" ? tn(e) : n === "it" ? nn(e) : n === "pt" ? rn(e) : n === "zh" ? an(e) : n === "ja" ? on(e) : n === "ko" ? sn(e) : cn(e);
}), un = () => "Private results", dn = () => "Résultats privés", fn = () => "Resultados privados", pn = () => "Private Ergebnisse", mn = () => "Risultati privati", hn = () => "Resultados privados", gn = () => "私有结果", _n = () => "非公開の結果", vn = () => "Private results", yn = () => "Приватные результаты", bn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? un(e) : n === "fr" ? dn(e) : n === "es" ? fn(e) : n === "de" ? pn(e) : n === "it" ? mn(e) : n === "pt" ? hn(e) : n === "zh" ? gn(e) : n === "ja" ? _n(e) : n === "ko" ? vn(e) : yn(e);
}), xn = () => "CI integration", Sn = () => "Intégration CI", Cn = () => "Integración CI", wn = () => "CI-Integration", Q = () => "Integrazione CI", Tn = () => "Integração CI", En = () => "CI 集成", Dn = () => "CI統合", On = () => "CI integration", kn = () => "Интеграция с CI", An = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? xn(e) : n === "fr" ? Sn(e) : n === "es" ? Cn(e) : n === "de" ? wn(e) : n === "it" ? Q(e) : n === "pt" ? Tn(e) : n === "zh" ? En(e) : n === "ja" ? Dn(e) : n === "ko" ? On(e) : kn(e);
}), jn = () => "Historical data", Mn = () => "Historique", Nn = () => "Datos históricos", Pn = () => "Historische Daten", Fn = () => "Dati storici", In = () => "Dados históricos", Ln = () => "历史数据", Rn = () => "履歴データ", zn = () => "Historical data", Bn = () => "Исторические данные", Vn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? jn(e) : n === "fr" ? Mn(e) : n === "es" ? Nn(e) : n === "de" ? Pn(e) : n === "it" ? Fn(e) : n === "pt" ? In(e) : n === "zh" ? Ln(e) : n === "ja" ? Rn(e) : n === "ko" ? zn(e) : Bn(e);
}), Hn = () => "Enterprise", Un = () => "Enterprise", Wn = () => "Enterprise", Gn = () => "Enterprise", Kn = () => "Enterprise", qn = () => "Enterprise", Jn = () => "企业版", Yn = () => "エンタープライズ", Xn = () => "Enterprise", Zn = () => "Enterprise", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Hn(e) : n === "fr" ? Un(e) : n === "es" ? Wn(e) : n === "de" ? Gn(e) : n === "it" ? Kn(e) : n === "pt" ? qn(e) : n === "zh" ? Jn(e) : n === "ja" ? Yn(e) : n === "ko" ? Xn(e) : Zn(e);
}), Qn = () => "Custom", $n = () => "Sur mesure", er = () => "Personalizado", tr = () => "Individuell", nr = () => "Personalizzato", rr = () => "Personalizado", ir = () => "定制", ar = () => "カスタム", or = () => "Custom", sr = () => "Индивидуально", cr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Qn(e) : n === "fr" ? $n(e) : n === "es" ? er(e) : n === "de" ? tr(e) : n === "it" ? nr(e) : n === "pt" ? rr(e) : n === "zh" ? ir(e) : n === "ja" ? ar(e) : n === "ko" ? or(e) : sr(e);
}), lr = () => "Everything in Pro", ur = () => "Tout le Pro", dr = () => "Todo lo que hay en Pro", fr = () => "Alles in Pro enthalten", pr = () => "Tutto quello che c'è in Pro", mr = () => "Tudo o que está no Pro", hr = () => "包含专业版中的所有功能", gr = () => "Proプランのすべてを含む", _r = () => "Everything in Pro", vr = () => "Все, что есть в Pro", yr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? lr(e) : n === "fr" ? ur(e) : n === "es" ? dr(e) : n === "de" ? fr(e) : n === "it" ? pr(e) : n === "pt" ? mr(e) : n === "zh" ? hr(e) : n === "ja" ? gr(e) : n === "ko" ? _r(e) : vr(e);
}), br = () => "On-premise option", xr = () => "Option on-premise", Sr = () => "Opción on-premise", Cr = () => "On-Premise-Option", wr = () => "Opzione on-premise", Tr = () => "Opção on-premise", Er = () => "本地部署选项", Dr = () => "オンプレミスオプション", Or = () => "On-premise option", kr = () => "Локальная установка", Ar = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? br(e) : n === "fr" ? xr(e) : n === "es" ? Sr(e) : n === "de" ? Cr(e) : n === "it" ? wr(e) : n === "pt" ? Tr(e) : n === "zh" ? Er(e) : n === "ja" ? Dr(e) : n === "ko" ? Or(e) : kr(e);
}), jr = () => "SSO & SAML", Mr = () => "SSO et SAML", Nr = () => "SSO y SAML", Pr = () => "SSO & SAML", Fr = () => "SSO e SAML", Ir = () => "SSO e SAML", Lr = () => "SSO 和 SAML", Rr = () => "SSO & SAML", zr = () => "SSO & SAML", Br = () => "SSO и SAML", Vr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? jr(e) : n === "fr" ? Mr(e) : n === "es" ? Nr(e) : n === "de" ? Pr(e) : n === "it" ? Fr(e) : n === "pt" ? Ir(e) : n === "zh" ? Lr(e) : n === "ja" ? Rr(e) : n === "ko" ? zr(e) : Br(e);
}), Hr = () => "Dedicated account manager", Ur = () => "Account manager dédié", Wr = () => "Gestor de cuentas dedicado", Gr = () => "Dedizierter Account Manager", Kr = () => "Account manager dedicato", qr = () => "Gerente de conta dedicado", Jr = () => "专属客户经理", Yr = () => "専任のアカウントマネージャー", Xr = () => "Dedicated account manager", Zr = () => "Персональный менеджер", Qr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Hr(e) : n === "fr" ? Ur(e) : n === "es" ? Wr(e) : n === "de" ? Gr(e) : n === "it" ? Kr(e) : n === "pt" ? qr(e) : n === "zh" ? Jr(e) : n === "ja" ? Yr(e) : n === "ko" ? Xr(e) : Zr(e);
}), $r = () => "Custom SLAs", ei = () => "SLA sur mesure", ti = () => "SLAs personalizados", ni = () => "Individuelle SLAs", ri = () => "SLA personalizzati", ii = () => "SLAs personalizados", ai = () => "定制 SLA", oi = () => "カスタムSLA", si = () => "Custom SLAs", ci = () => "Индивидуальные SLA", li = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? $r(e) : n === "fr" ? ei(e) : n === "es" ? ti(e) : n === "de" ? ni(e) : n === "it" ? ri(e) : n === "pt" ? ii(e) : n === "zh" ? ai(e) : n === "ja" ? oi(e) : n === "ko" ? si(e) : ci(e);
}), ui = () => "Audit logs", di = () => "Journaux d'audit", fi = () => "Registros de auditoría", pi = () => "Audit-Protokolle", mi = () => "Log di controllo", hi = () => "Logs de auditoria", gi = () => "审计日志", _i = () => "監査ログ", vi = () => "Audit logs", yi = () => "Журналы аудита", bi = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ui(e) : n === "fr" ? di(e) : n === "es" ? fi(e) : n === "de" ? pi(e) : n === "it" ? mi(e) : n === "pt" ? hi(e) : n === "zh" ? gi(e) : n === "ja" ? _i(e) : n === "ko" ? vi(e) : yi(e);
}), xi = () => "Training sessions", Si = () => "Sessions de formation", Ci = () => "Sesiones de formación", wi = () => "Schulungssitzungen", Ti = () => "Sessioni di formazione", Ei = () => "Sessões de treinamento", Di = () => "培训课程", Oi = () => "トレーニングセッション", ki = () => "Training sessions", Ai = () => "Обучающие сессии", ji = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? xi(e) : n === "fr" ? Si(e) : n === "es" ? Ci(e) : n === "de" ? wi(e) : n === "it" ? Ti(e) : n === "pt" ? Ei(e) : n === "zh" ? Di(e) : n === "ja" ? Oi(e) : n === "ko" ? ki(e) : Ai(e);
}), Mi = () => "Contact Sales", Ni = () => "Contacter les ventes", Pi = () => "Contactar con ventas", Fi = () => "Vertrieb kontaktieren", Ii = () => "Contatta l'ufficio vendite", Li = () => "Contatar vendas", Ri = () => "联系销售", zi = () => "営業に問い合わせる", Bi = () => "Contact Sales", Vi = () => "Связаться с отделом продаж", Hi = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Mi(e) : n === "fr" ? Ni(e) : n === "es" ? Pi(e) : n === "de" ? Fi(e) : n === "it" ? Ii(e) : n === "pt" ? Li(e) : n === "zh" ? Ri(e) : n === "ja" ? zi(e) : n === "ko" ? Bi(e) : Vi(e);
}), Ui = () => "Get Started", Wi = () => "Commencer", Gi = () => "Empezar", Ki = () => "Erste Schritte", qi = () => "Inizia ora", Ji = () => "Começar", Yi = () => "开始使用", Xi = () => "始める", Zi = () => "Get Started", Qi = () => "Начать работу", $i = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ui(e) : n === "fr" ? Wi(e) : n === "es" ? Gi(e) : n === "de" ? Ki(e) : n === "it" ? qi(e) : n === "pt" ? Ji(e) : n === "zh" ? Yi(e) : n === "ja" ? Xi(e) : n === "ko" ? Zi(e) : Qi(e);
}), ea = [
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
];
function ta(e) {
	return ea.includes(e);
}
var na = new Set([
	"",
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"pricing",
	"products",
	"settings",
	"team"
]);
function ra(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!ta(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !na.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var ia = t(n(typeof window < "u" ? window.location.pathname : "/en"), (e) => ra(e)), aa = e.from_html("<li class=\"flex items-center gap-2 text-sm text-muted-foreground\"><span class=\"text-primary\">✓</span> </li>"), oa = e.from_html("<div><h3 class=\"text-lg font-semibold text-foreground\"> </h3> <div class=\"my-4\"><span class=\"text-3xl font-bold text-foreground\"> </span> <span class=\"text-sm text-muted-foreground\"> </span></div> <ul class=\"mb-6 flex-1 space-y-2\"></ul> <button type=\"button\"> </button></div>"), sa = e.from_html("<div class=\"grid gap-6 md:grid-cols-3\"></div>");
function ca(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(ia, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), s = e.derived(() => (e.get(o), [
		{
			name: N(),
			price: W(),
			period: oe(),
			features: [
				_e(),
				Oe(),
				ze(),
				Xe()
			]
		},
		{
			name: st(),
			price: vt(),
			period: kt(),
			features: [
				Bt(),
				Zt(),
				ln(),
				bn(),
				An(),
				Vn()
			],
			highlighted: !0
		},
		{
			name: $(),
			price: cr(),
			period: "",
			features: [
				yr(),
				Ar(),
				Vr(),
				Qr(),
				li(),
				bi(),
				ji()
			]
		}
	]));
	function c(e) {
		return e === $() ? Hi() : $i();
	}
	var l = sa();
	e.each(l, 21, () => e.get(s), e.index, (t, n) => {
		var r = oa(), i = e.child(r), a = e.child(i, !0);
		e.reset(i);
		var o = e.sibling(i, 2), s = e.child(o), l = e.child(s, !0);
		e.reset(s);
		var u = e.sibling(s, 2), d = e.child(u, !0);
		e.reset(u), e.reset(o);
		var f = e.sibling(o, 2);
		e.each(f, 20, () => e.get(n).features, (e) => e, (t, n) => {
			var r = aa(), i = e.sibling(e.child(r));
			e.reset(r), e.template_effect(() => e.set_text(i, ` ${n ?? ""}`)), e.append(t, r);
		}), e.reset(f);
		var p = e.sibling(f, 2), m = e.child(p, !0);
		e.reset(p), e.reset(r), e.template_effect((t) => {
			e.set_class(r, 1, `flex flex-col rounded-lg border p-6 ${e.get(n).highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`), e.set_text(a, e.get(n).name), e.set_text(l, e.get(n).price), e.set_text(d, e.get(n).period), e.set_class(p, 1, `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${e.get(n).highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`), e.set_text(m, t);
		}, [() => c(e.get(n).name)]), e.append(t, r);
	}), e.reset(l), e.append(t, l), e.pop(), a();
}
export { ca as default };
