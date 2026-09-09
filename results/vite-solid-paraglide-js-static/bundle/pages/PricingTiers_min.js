import { className as e, createComponent as t, effect as n, insert as r, memo as i, template as a } from "solid-js/web";
import { For as o } from "solid-js";
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
], l = "PARAGLIDE_LOCALE", u = 3456e4, d = [
	"cookie",
	"globalVariable",
	"baseLocale"
], f = [], p = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var m, h = !1, g = () => {
	let e = d;
	!p && typeof window < "u" && window.location?.href && (e = P(window.location.href));
	let t = ee(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return h || (m = t, h = !0, te(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function ee(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = O();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && m !== void 0) n = m;
		else if (I(t) && F.has(t)) {
			let e = F.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return y(t);
			}
		}
		let e = v(n);
		if (e) return e;
	}
}
var _ = (e) => {
	e ? window.location.href = e : window.location.reload();
}, te = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = g();
	} catch {}
	let i = [], a = d;
	!p && typeof window < "u" && window.location?.href && (a = P(window.location.href));
	for (let t of a) if (t === "globalVariable") m = e;
	else if (t === "cookie") {
		if (p || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${u}`;
		document.cookie = t, E();
	} else if (t === "baseLocale") continue;
	else if (I(t) && F.has(t)) {
		let n = F.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!p && n.reload && window.location && e !== r && _(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function v(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function y(e) {
	let t = v(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function b(e) {
	return e;
}
function x(e, t) {
	return e.exec(t.href);
}
var S = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), C = RegExp(`(?:^|;\\s*)${S}=([^;]*)`), w = Symbol(), T = w;
function E() {
	T = w;
}
function D() {
	typeof queueMicrotask == "function" ? queueMicrotask(E) : Promise.resolve().then(E);
}
function O() {
	if (typeof document > "u") return;
	if (T !== w) return T;
	let e = document.cookie.match(C)?.[1];
	return T = v(e), D(), T;
}
function k(e) {
	return A(e);
}
function A(e) {
	let t = b(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && v(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), b(t);
}
var j, M;
function N(e) {
	if (f.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (j === t) return M;
	let n = b(new URL(t, "http://example.com")), r = k(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of f) if (x(new s(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return j = t, M = a, a;
}
function P(e) {
	let t = N(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : d;
}
var F = /* @__PURE__ */ new Map();
function I(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var L = () => "Contact Sales", R = () => "Contacter les ventes", z = () => "Contactar con ventas", B = () => "Vertrieb kontaktieren", V = () => "Contatta l'ufficio vendite", H = () => "Contatar vendas", U = () => "联系销售", W = () => "営業に問い合わせる", G = () => "Contact Sales", K = () => "Связаться с отделом продаж", q = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? R(e) : n === "es" ? z(e) : n === "de" ? B(e) : n === "it" ? V(e) : n === "pt" ? H(e) : n === "zh" ? U(e) : n === "ja" ? W(e) : n === "ko" ? G(e) : n === "ru" ? K(e) : L(e);
}), J = () => "Everything in Pro", Y = () => "Tout le Pro", X = () => "Todo lo que hay en Pro", Z = () => "Alles in Pro enthalten", re = () => "Tutto quello che c'è in Pro", ie = () => "Tudo o que está no Pro", ae = () => "包含专业版中的所有功能", oe = () => "Proプランのすべてを含む", se = () => "Everything in Pro", ce = () => "Все, что есть в Pro", le = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Y(e) : n === "es" ? X(e) : n === "de" ? Z(e) : n === "it" ? re(e) : n === "pt" ? ie(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : n === "ru" ? ce(e) : J(e);
}), ue = () => "On-premise option", de = () => "Option on-premise", fe = () => "Opción on-premise", pe = () => "On-Premise-Option", me = () => "Opzione on-premise", he = () => "Opção on-premise", ge = () => "本地部署选项", _e = () => "オンプレミスオプション", ve = () => "On-premise option", ye = () => "Локальная установка", be = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? de(e) : n === "es" ? fe(e) : n === "de" ? pe(e) : n === "it" ? me(e) : n === "pt" ? he(e) : n === "zh" ? ge(e) : n === "ja" ? _e(e) : n === "ko" ? ve(e) : n === "ru" ? ye(e) : ue(e);
}), xe = () => "SSO & SAML", Se = () => "SSO et SAML", Ce = () => "SSO y SAML", we = () => "SSO & SAML", Te = () => "SSO e SAML", Ee = () => "SSO e SAML", De = () => "SSO 和 SAML", Oe = () => "SSO & SAML", ke = () => "SSO & SAML", Ae = () => "SSO и SAML", je = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Se(e) : n === "es" ? Ce(e) : n === "de" ? we(e) : n === "it" ? Te(e) : n === "pt" ? Ee(e) : n === "zh" ? De(e) : n === "ja" ? Oe(e) : n === "ko" ? ke(e) : n === "ru" ? Ae(e) : xe(e);
}), Me = () => "Dedicated account manager", Ne = () => "Account manager dédié", Pe = () => "Gestor de cuentas dedicado", Fe = () => "Dedizierter Account Manager", Ie = () => "Account manager dedicato", Le = () => "Gerente de conta dedicado", Re = () => "专属客户经理", ze = () => "専任のアカウントマネージャー", Be = () => "Dedicated account manager", Ve = () => "Персональный менеджер", He = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Ne(e) : n === "es" ? Pe(e) : n === "de" ? Fe(e) : n === "it" ? Ie(e) : n === "pt" ? Le(e) : n === "zh" ? Re(e) : n === "ja" ? ze(e) : n === "ko" ? Be(e) : n === "ru" ? Ve(e) : Me(e);
}), Ue = () => "Custom SLAs", We = () => "SLA sur mesure", Ge = () => "SLAs personalizados", Ke = () => "Individuelle SLAs", qe = () => "SLA personalizzati", Je = () => "SLAs personalizados", Ye = () => "定制 SLA", Xe = () => "カスタムSLA", Ze = () => "Custom SLAs", Qe = () => "Индивидуальные SLA", $e = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? We(e) : n === "es" ? Ge(e) : n === "de" ? Ke(e) : n === "it" ? qe(e) : n === "pt" ? Je(e) : n === "zh" ? Ye(e) : n === "ja" ? Xe(e) : n === "ko" ? Ze(e) : n === "ru" ? Qe(e) : Ue(e);
}), et = () => "Audit logs", tt = () => "Journaux d'audit", nt = () => "Registros de auditoría", rt = () => "Audit-Protokolle", it = () => "Log di controllo", at = () => "Logs de auditoria", ot = () => "审计日志", st = () => "監査ログ", ct = () => "Audit logs", lt = () => "Журналы аудита", ut = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? tt(e) : n === "es" ? nt(e) : n === "de" ? rt(e) : n === "it" ? it(e) : n === "pt" ? at(e) : n === "zh" ? ot(e) : n === "ja" ? st(e) : n === "ko" ? ct(e) : n === "ru" ? lt(e) : et(e);
}), dt = () => "Training sessions", ft = () => "Sessions de formation", pt = () => "Sesiones de formación", mt = () => "Schulungssitzungen", ht = () => "Sessioni di formazione", gt = () => "Sessões de treinamento", _t = () => "培训课程", vt = () => "トレーニングセッション", yt = () => "Training sessions", bt = () => "Обучающие сессии", xt = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? ft(e) : n === "es" ? pt(e) : n === "de" ? mt(e) : n === "it" ? ht(e) : n === "pt" ? gt(e) : n === "zh" ? _t(e) : n === "ja" ? vt(e) : n === "ko" ? yt(e) : n === "ru" ? bt(e) : dt(e);
}), St = () => "Enterprise", Ct = () => "Enterprise", wt = () => "Enterprise", Tt = () => "Enterprise", Et = () => "Enterprise", Dt = () => "Enterprise", Ot = () => "企业版", kt = () => "エンタープライズ", At = () => "Enterprise", jt = () => "Enterprise", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Ct(e) : n === "es" ? wt(e) : n === "de" ? Tt(e) : n === "it" ? Et(e) : n === "pt" ? Dt(e) : n === "zh" ? Ot(e) : n === "ja" ? kt(e) : n === "ko" ? At(e) : n === "ru" ? jt(e) : St(e);
}), Mt = () => "Custom", Nt = () => "Sur mesure", Pt = () => "Personalizado", Ft = () => "Individuell", It = () => "Personalizzato", Lt = () => "Personalizado", Rt = () => "定制", zt = () => "カスタム", Bt = () => "Custom", Vt = () => "Индивидуально", Ht = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Nt(e) : n === "es" ? Pt(e) : n === "de" ? Ft(e) : n === "it" ? It(e) : n === "pt" ? Lt(e) : n === "zh" ? Rt(e) : n === "ja" ? zt(e) : n === "ko" ? Bt(e) : n === "ru" ? Vt(e) : Mt(e);
}), Ut = () => "Get Started", Wt = () => "Commencer", Gt = () => "Empezar", Kt = () => "Erste Schritte", qt = () => "Inizia ora", Jt = () => "Começar", Yt = () => "开始使用", Xt = () => "始める", Zt = () => "Get Started", Qt = () => "Начать работу", $t = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Wt(e) : n === "es" ? Gt(e) : n === "de" ? Kt(e) : n === "it" ? qt(e) : n === "pt" ? Jt(e) : n === "zh" ? Yt(e) : n === "ja" ? Xt(e) : n === "ko" ? Zt(e) : n === "ru" ? Qt(e) : Ut(e);
}), en = () => "Unlimited runs", tn = () => "Exécutions illimitées", nn = () => "Ejecuciones ilimitadas", rn = () => "Unbegrenzte Durchläufe", an = () => "Esecuzioni illimitate", on = () => "Execuções ilimitadas", sn = () => "无限次运行", cn = () => "無制限の実行", ln = () => "Unlimited runs", un = () => "Неограниченное число запусков", dn = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? tn(e) : n === "es" ? nn(e) : n === "de" ? rn(e) : n === "it" ? an(e) : n === "pt" ? on(e) : n === "zh" ? sn(e) : n === "ja" ? cn(e) : n === "ko" ? ln(e) : n === "ru" ? un(e) : en(e);
}), fn = () => "All libraries", pn = () => "Toutes les bibliothèques", mn = () => "Todas las bibliotecas", hn = () => "Alle Bibliotheken", gn = () => "Tutte le librerie", _n = () => "Todas as bibliotecas", vn = () => "所有库", yn = () => "すべてのライブラリ", bn = () => "All libraries", xn = () => "Все библиотеки", Sn = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? pn(e) : n === "es" ? mn(e) : n === "de" ? hn(e) : n === "it" ? gn(e) : n === "pt" ? _n(e) : n === "zh" ? vn(e) : n === "ja" ? yn(e) : n === "ko" ? bn(e) : n === "ru" ? xn(e) : fn(e);
}), Cn = () => "Priority support", wn = () => "Support prioritaire", Tn = () => "Soporte prioritario", En = () => "Priorisierter Support", Dn = () => "Supporto prioritario", On = () => "Suporte prioritário", kn = () => "优先支持", An = () => "優先サポート", jn = () => "Priority support", Mn = () => "Приоритетная поддержка", Nn = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? wn(e) : n === "es" ? Tn(e) : n === "de" ? En(e) : n === "it" ? Dn(e) : n === "pt" ? On(e) : n === "zh" ? kn(e) : n === "ja" ? An(e) : n === "ko" ? jn(e) : n === "ru" ? Mn(e) : Cn(e);
}), Pn = () => "Private results", Fn = () => "Résultats privés", In = () => "Resultados privados", Ln = () => "Private Ergebnisse", Rn = () => "Risultati privati", zn = () => "Resultados privados", Bn = () => "私有结果", Vn = () => "非公開の結果", Hn = () => "Private results", Un = () => "Приватные результаты", Wn = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Fn(e) : n === "es" ? In(e) : n === "de" ? Ln(e) : n === "it" ? Rn(e) : n === "pt" ? zn(e) : n === "zh" ? Bn(e) : n === "ja" ? Vn(e) : n === "ko" ? Hn(e) : n === "ru" ? Un(e) : Pn(e);
}), Gn = () => "CI integration", Kn = () => "Intégration CI", qn = () => "Integración CI", Jn = () => "CI-Integration", Yn = () => "Integrazione CI", Xn = () => "Integração CI", Zn = () => "CI 集成", Qn = () => "CI統合", $n = () => "CI integration", er = () => "Интеграция с CI", tr = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Kn(e) : n === "es" ? qn(e) : n === "de" ? Jn(e) : n === "it" ? Yn(e) : n === "pt" ? Xn(e) : n === "zh" ? Zn(e) : n === "ja" ? Qn(e) : n === "ko" ? $n(e) : n === "ru" ? er(e) : Gn(e);
}), nr = () => "Historical data", rr = () => "Historique", ir = () => "Datos históricos", ar = () => "Historische Daten", or = () => "Dati storici", sr = () => "Dados históricos", cr = () => "历史数据", lr = () => "履歴データ", ur = () => "Historical data", dr = () => "Исторические данные", fr = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? rr(e) : n === "es" ? ir(e) : n === "de" ? ar(e) : n === "it" ? or(e) : n === "pt" ? sr(e) : n === "zh" ? cr(e) : n === "ja" ? lr(e) : n === "ko" ? ur(e) : n === "ru" ? dr(e) : nr(e);
}), pr = () => "Pro", mr = () => "Pro", hr = () => "Pro", gr = () => "Pro", _r = () => "Pro", vr = () => "Pro", yr = () => "专业版", br = () => "プロ", xr = () => "Pro", Sr = () => "Pro", Cr = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? mr(e) : n === "es" ? hr(e) : n === "de" ? gr(e) : n === "it" ? _r(e) : n === "pt" ? vr(e) : n === "zh" ? yr(e) : n === "ja" ? br(e) : n === "ko" ? xr(e) : n === "ru" ? Sr(e) : pr(e);
}), wr = () => "/month", Tr = () => "/ mois", Er = () => "/mes", Dr = () => "/Monat", Or = () => "/mese", kr = () => "/mês", Ar = () => "/月", jr = () => "/月", Mr = () => "/month", Nr = () => "/мес", Pr = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Tr(e) : n === "es" ? Er(e) : n === "de" ? Dr(e) : n === "it" ? Or(e) : n === "pt" ? kr(e) : n === "zh" ? Ar(e) : n === "ja" ? jr(e) : n === "ko" ? Mr(e) : n === "ru" ? Nr(e) : wr(e);
}), Fr = () => "$29", Ir = () => "29 €", Lr = () => "29 $", Rr = () => "29 $", zr = () => "29 $", Br = () => "29 $", Vr = () => "29 $", Hr = () => "29ドル", Ur = () => "$29", Wr = () => "29 $", Gr = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Ir(e) : n === "es" ? Lr(e) : n === "de" ? Rr(e) : n === "it" ? zr(e) : n === "pt" ? Br(e) : n === "zh" ? Vr(e) : n === "ja" ? Hr(e) : n === "ko" ? Ur(e) : n === "ru" ? Wr(e) : Fr(e);
}), Kr = () => "5 benchmark runs/day", qr = () => "5 exécutions de benchmark / jour", Jr = () => "5 ejecuciones de benchmark al día", Yr = () => "5 Benchmark-Durchläufe/Tag", Xr = () => "5 esecuzioni benchmark al giorno", Zr = () => "5 execuções de benchmark/dia", Qr = () => "每天 5 次基准测试运行", $r = () => "1日あたり5回のベンチマーク実行", ei = () => "5 benchmark runs/day", ti = () => "5 запусков бенчмарка в день", ni = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? qr(e) : n === "es" ? Jr(e) : n === "de" ? Yr(e) : n === "it" ? Xr(e) : n === "pt" ? Zr(e) : n === "zh" ? Qr(e) : n === "ja" ? $r(e) : n === "ko" ? ei(e) : n === "ru" ? ti(e) : Kr(e);
}), ri = () => "3 libraries", ii = () => "3 bibliothèques", ai = () => "3 bibliotecas", oi = () => "3 Bibliotheken", si = () => "3 librerie", ci = () => "3 bibliotecas", li = () => "3 个库", ui = () => "3ライブラリ", di = () => "3 libraries", fi = () => "3 библиотеки", pi = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? ii(e) : n === "es" ? ai(e) : n === "de" ? oi(e) : n === "it" ? si(e) : n === "pt" ? ci(e) : n === "zh" ? li(e) : n === "ja" ? ui(e) : n === "ko" ? di(e) : n === "ru" ? fi(e) : ri(e);
}), mi = () => "Community support", hi = () => "Support communautaire", gi = () => "Soporte de la comunidad", _i = () => "Community-Support", vi = () => "Supporto della comunità", yi = () => "Suporte da comunidade", bi = () => "社区支持", xi = () => "コミュニティサポート", Si = () => "Community support", Ci = () => "Поддержка сообщества", wi = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? hi(e) : n === "es" ? gi(e) : n === "de" ? _i(e) : n === "it" ? vi(e) : n === "pt" ? yi(e) : n === "zh" ? bi(e) : n === "ja" ? xi(e) : n === "ko" ? Si(e) : n === "ru" ? Ci(e) : mi(e);
}), Ti = () => "Public results", Ei = () => "Résultats publics", Di = () => "Resultados públicos", Oi = () => "Öffentliche Ergebnisse", ki = () => "Risultati pubblici", Ai = () => "Resultados públicos", ji = () => "公开结果", Mi = () => "公開結果", Ni = () => "Public results", Pi = () => "Публичные результаты", Fi = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Ei(e) : n === "es" ? Di(e) : n === "de" ? Oi(e) : n === "it" ? ki(e) : n === "pt" ? Ai(e) : n === "zh" ? ji(e) : n === "ja" ? Mi(e) : n === "ko" ? Ni(e) : n === "ru" ? Pi(e) : Ti(e);
}), Ii = () => "Starter", Li = () => "Starter", Ri = () => "Starter", zi = () => "Starter", Bi = () => "Starter", Vi = () => "Starter", Hi = () => "入门版", Ui = () => "スターター", Wi = () => "Starter", Gi = () => "Starter", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? Li(e) : n === "es" ? Ri(e) : n === "de" ? zi(e) : n === "it" ? Bi(e) : n === "pt" ? Vi(e) : n === "zh" ? Hi(e) : n === "ja" ? Ui(e) : n === "ko" ? Wi(e) : n === "ru" ? Gi(e) : Ii(e);
}), Ki = () => "forever", qi = () => "pour toujours", Ji = () => "para siempre", Yi = () => "für immer", Xi = () => "per sempre", Zi = () => "para sempre", Qi = () => "永久", $i = () => "ずっと無料", ea = () => "forever", ta = () => "навсегда", na = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? qi(e) : n === "es" ? Ji(e) : n === "de" ? Yi(e) : n === "it" ? Xi(e) : n === "pt" ? Zi(e) : n === "zh" ? Qi(e) : n === "ja" ? $i(e) : n === "ko" ? ea(e) : n === "ru" ? ta(e) : Ki(e);
}), ra = () => "$0", ia = () => "0 €", aa = () => "0 $", oa = () => "0 $", sa = () => "0 $", ca = () => "0 $", la = () => "0 $", ua = () => "0円", da = () => "$0", fa = () => "0 $", pa = ((e = {}, t = {}) => {
	let n = t.locale ?? g();
	return n === "fr" ? ia(e) : n === "es" ? aa(e) : n === "de" ? oa(e) : n === "it" ? sa(e) : n === "pt" ? ca(e) : n === "zh" ? la(e) : n === "ja" ? ua(e) : n === "ko" ? da(e) : n === "ru" ? fa(e) : ra(e);
}), ma = a("<div class=\"grid gap-6 md:grid-cols-3\">"), ha = a("<div><h3 class=\"text-lg font-semibold text-foreground\"></h3><div class=my-4><span class=\"text-3xl font-bold text-foreground\"></span><span class=\"text-sm text-muted-foreground\"></span></div><ul class=\"mb-6 flex-1 space-y-2\"></ul><button type=button>"), ga = a("<li class=\"flex items-center gap-2 text-sm text-muted-foreground\"><span class=text-primary>✓</span> ");
function _a() {
	let a = () => [
		{
			name: $(),
			price: pa(),
			period: na(),
			features: [
				ni(),
				pi(),
				wi(),
				Fi()
			]
		},
		{
			name: Cr(),
			price: Gr(),
			period: Pr(),
			features: [
				dn(),
				Sn(),
				Nn(),
				Wn(),
				tr(),
				fr()
			],
			highlighted: !0
		},
		{
			name: Q(),
			price: Ht(),
			period: "",
			features: [
				le(),
				be(),
				je(),
				He(),
				$e(),
				ut(),
				xt()
			]
		}
	];
	return (() => {
		var s = ma();
		return r(s, t(o, {
			get each() {
				return a();
			},
			children: (a) => (() => {
				var s = ha(), c = s.firstChild, l = c.nextSibling, u = l.firstChild, d = u.nextSibling, f = l.nextSibling, p = f.nextSibling;
				return r(c, () => a.name), r(u, () => a.price), r(d, () => a.period), r(f, t(o, {
					get each() {
						return a.features;
					},
					children: (e) => (() => {
						var t = ga();
						return t.firstChild.nextSibling, r(t, e, null), t;
					})()
				})), r(p, (() => {
					var e = i(() => a.name === Q());
					return () => e() ? q() : $t();
				})()), n((t) => {
					var n = `flex flex-col rounded-lg border p-6 ${a.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`, r = `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${a.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`;
					return n !== t.e && e(s, t.e = n), r !== t.t && e(p, t.t = r), t;
				}, {
					e: void 0,
					t: void 0
				}), s;
			})()
		})), s;
	})();
}
export { _a as default };
