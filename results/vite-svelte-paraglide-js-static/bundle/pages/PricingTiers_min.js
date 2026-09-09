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
], c = [], l = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var u, d = !1, f = () => {
	let e = s;
	!l && typeof window < "u" && window.location?.href && (e = A(window.location.href));
	let t = p(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return d || (u = t, d = !0, h(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function p(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ne();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (M(t) && j.has(t)) {
			let e = j.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return _(t);
			}
		}
		let e = g(n);
		if (e) return e;
	}
}
var m = (e) => {
	e ? window.location.href = e : window.location.reload();
}, h = (e, t) => {
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
		document.cookie = t, w();
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
		!l && n.reload && window.location && e !== r && m(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		d();
	});
	d();
}, ee = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function _(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function v(e) {
	return e;
}
function y(e, t) {
	return e.exec(t.href);
}
var b = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), x = RegExp(`(?:^|;\\s*)${b}=([^;]*)`), S = Symbol(), C = S;
function w() {
	C = S;
}
function te() {
	typeof queueMicrotask == "function" ? queueMicrotask(w) : Promise.resolve().then(w);
}
function ne() {
	if (typeof document > "u") return;
	if (C !== S) return C;
	let e = document.cookie.match(x)?.[1];
	return C = g(e), te(), C;
}
function T(e) {
	return E(e);
}
function E(e) {
	let t = v(typeof e == "string" ? new URL(e, ee()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), v(t);
}
var D, O;
function k(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (D === t) return O;
	let n = v(new URL(t, "http://example.com")), i = T(n), a = i.href === n.href ? [n] : [n, i], o;
	for (let e of a) {
		for (let t of c) if (y(new r(t.match, e.href), e)) {
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
var N = () => "Contact Sales", P = () => "Contacter les ventes", F = () => "Contactar con ventas", I = () => "Vertrieb kontaktieren", L = () => "Contatta l'ufficio vendite", R = () => "Contatar vendas", z = () => "联系销售", B = () => "営業に問い合わせる", V = () => "Contact Sales", H = () => "Связаться с отделом продаж", U = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? P(e) : n === "es" ? F(e) : n === "de" ? I(e) : n === "it" ? L(e) : n === "pt" ? R(e) : n === "zh" ? z(e) : n === "ja" ? B(e) : n === "ko" ? V(e) : n === "ru" ? H(e) : N(e);
}), W = () => "Everything in Pro", G = () => "Tout le Pro", K = () => "Todo lo que hay en Pro", q = () => "Alles in Pro enthalten", J = () => "Tutto quello che c'è in Pro", Y = () => "Tudo o que está no Pro", X = () => "包含专业版中的所有功能", Z = () => "Proプランのすべてを含む", re = () => "Everything in Pro", ie = () => "Все, что есть в Pro", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? G(e) : n === "es" ? K(e) : n === "de" ? q(e) : n === "it" ? J(e) : n === "pt" ? Y(e) : n === "zh" ? X(e) : n === "ja" ? Z(e) : n === "ko" ? re(e) : n === "ru" ? ie(e) : W(e);
}), oe = () => "On-premise option", se = () => "Option on-premise", ce = () => "Opción on-premise", le = () => "On-Premise-Option", ue = () => "Opzione on-premise", de = () => "Opção on-premise", fe = () => "本地部署选项", pe = () => "オンプレミスオプション", me = () => "On-premise option", he = () => "Локальная установка", ge = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : n === "ru" ? he(e) : oe(e);
}), _e = () => "SSO & SAML", ve = () => "SSO et SAML", ye = () => "SSO y SAML", be = () => "SSO & SAML", xe = () => "SSO e SAML", Se = () => "SSO e SAML", Ce = () => "SSO 和 SAML", we = () => "SSO & SAML", Te = () => "SSO & SAML", Ee = () => "SSO и SAML", De = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : n === "ru" ? Ee(e) : _e(e);
}), Oe = () => "Dedicated account manager", ke = () => "Account manager dédié", Ae = () => "Gestor de cuentas dedicado", je = () => "Dedizierter Account Manager", Me = () => "Account manager dedicato", Ne = () => "Gerente de conta dedicado", Pe = () => "专属客户经理", Fe = () => "専任のアカウントマネージャー", Ie = () => "Dedicated account manager", Le = () => "Персональный менеджер", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : n === "ru" ? Le(e) : Oe(e);
}), ze = () => "Custom SLAs", Be = () => "SLA sur mesure", Ve = () => "SLAs personalizados", He = () => "Individuelle SLAs", Ue = () => "SLA personalizzati", We = () => "SLAs personalizados", Ge = () => "定制 SLA", Ke = () => "カスタムSLA", qe = () => "Custom SLAs", Je = () => "Индивидуальные SLA", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Be(e) : n === "es" ? Ve(e) : n === "de" ? He(e) : n === "it" ? Ue(e) : n === "pt" ? We(e) : n === "zh" ? Ge(e) : n === "ja" ? Ke(e) : n === "ko" ? qe(e) : n === "ru" ? Je(e) : ze(e);
}), Xe = () => "Audit logs", Ze = () => "Journaux d'audit", Qe = () => "Registros de auditoría", $e = () => "Audit-Protokolle", et = () => "Log di controllo", tt = () => "Logs de auditoria", nt = () => "审计日志", rt = () => "監査ログ", it = () => "Audit logs", at = () => "Журналы аудита", ot = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : n === "ru" ? at(e) : Xe(e);
}), st = () => "Training sessions", ct = () => "Sessions de formation", lt = () => "Sesiones de formación", ut = () => "Schulungssitzungen", dt = () => "Sessioni di formazione", ft = () => "Sessões de treinamento", pt = () => "培训课程", mt = () => "トレーニングセッション", ht = () => "Training sessions", gt = () => "Обучающие сессии", _t = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ct(e) : n === "es" ? lt(e) : n === "de" ? ut(e) : n === "it" ? dt(e) : n === "pt" ? ft(e) : n === "zh" ? pt(e) : n === "ja" ? mt(e) : n === "ko" ? ht(e) : n === "ru" ? gt(e) : st(e);
}), vt = () => "Enterprise", yt = () => "Enterprise", bt = () => "Enterprise", xt = () => "Enterprise", St = () => "Enterprise", Ct = () => "Enterprise", wt = () => "企业版", Tt = () => "エンタープライズ", Et = () => "Enterprise", Dt = () => "Enterprise", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? yt(e) : n === "es" ? bt(e) : n === "de" ? xt(e) : n === "it" ? St(e) : n === "pt" ? Ct(e) : n === "zh" ? wt(e) : n === "ja" ? Tt(e) : n === "ko" ? Et(e) : n === "ru" ? Dt(e) : vt(e);
}), Ot = () => "Custom", kt = () => "Sur mesure", At = () => "Personalizado", jt = () => "Individuell", Mt = () => "Personalizzato", Nt = () => "Personalizado", Pt = () => "定制", Ft = () => "カスタム", It = () => "Custom", Lt = () => "Индивидуально", Rt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? kt(e) : n === "es" ? At(e) : n === "de" ? jt(e) : n === "it" ? Mt(e) : n === "pt" ? Nt(e) : n === "zh" ? Pt(e) : n === "ja" ? Ft(e) : n === "ko" ? It(e) : n === "ru" ? Lt(e) : Ot(e);
}), zt = () => "Get Started", Bt = () => "Commencer", Vt = () => "Empezar", Ht = () => "Erste Schritte", Ut = () => "Inizia ora", Wt = () => "Começar", Gt = () => "开始使用", Kt = () => "始める", qt = () => "Get Started", Jt = () => "Начать работу", Yt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Bt(e) : n === "es" ? Vt(e) : n === "de" ? Ht(e) : n === "it" ? Ut(e) : n === "pt" ? Wt(e) : n === "zh" ? Gt(e) : n === "ja" ? Kt(e) : n === "ko" ? qt(e) : n === "ru" ? Jt(e) : zt(e);
}), Xt = () => "Unlimited runs", Zt = () => "Exécutions illimitées", Qt = () => "Ejecuciones ilimitadas", $t = () => "Unbegrenzte Durchläufe", en = () => "Esecuzioni illimitate", tn = () => "Execuções ilimitadas", nn = () => "无限次运行", rn = () => "無制限の実行", an = () => "Unlimited runs", on = () => "Неограниченное число запусков", sn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Zt(e) : n === "es" ? Qt(e) : n === "de" ? $t(e) : n === "it" ? en(e) : n === "pt" ? tn(e) : n === "zh" ? nn(e) : n === "ja" ? rn(e) : n === "ko" ? an(e) : n === "ru" ? on(e) : Xt(e);
}), cn = () => "All libraries", ln = () => "Toutes les bibliothèques", un = () => "Todas las bibliotecas", dn = () => "Alle Bibliotheken", fn = () => "Tutte le librerie", pn = () => "Todas as bibliotecas", mn = () => "所有库", hn = () => "すべてのライブラリ", gn = () => "All libraries", _n = () => "Все библиотеки", vn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ln(e) : n === "es" ? un(e) : n === "de" ? dn(e) : n === "it" ? fn(e) : n === "pt" ? pn(e) : n === "zh" ? mn(e) : n === "ja" ? hn(e) : n === "ko" ? gn(e) : n === "ru" ? _n(e) : cn(e);
}), yn = () => "Priority support", bn = () => "Support prioritaire", xn = () => "Soporte prioritario", Sn = () => "Priorisierter Support", Cn = () => "Supporto prioritario", wn = () => "Suporte prioritário", Tn = () => "优先支持", En = () => "優先サポート", Dn = () => "Priority support", On = () => "Приоритетная поддержка", kn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? bn(e) : n === "es" ? xn(e) : n === "de" ? Sn(e) : n === "it" ? Cn(e) : n === "pt" ? wn(e) : n === "zh" ? Tn(e) : n === "ja" ? En(e) : n === "ko" ? Dn(e) : n === "ru" ? On(e) : yn(e);
}), An = () => "Private results", jn = () => "Résultats privés", Mn = () => "Resultados privados", Nn = () => "Private Ergebnisse", Pn = () => "Risultati privati", Fn = () => "Resultados privados", In = () => "私有结果", Ln = () => "非公開の結果", Rn = () => "Private results", zn = () => "Приватные результаты", Bn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? jn(e) : n === "es" ? Mn(e) : n === "de" ? Nn(e) : n === "it" ? Pn(e) : n === "pt" ? Fn(e) : n === "zh" ? In(e) : n === "ja" ? Ln(e) : n === "ko" ? Rn(e) : n === "ru" ? zn(e) : An(e);
}), Vn = () => "CI integration", Hn = () => "Intégration CI", Un = () => "Integración CI", Wn = () => "CI-Integration", Gn = () => "Integrazione CI", Kn = () => "Integração CI", qn = () => "CI 集成", Jn = () => "CI統合", Yn = () => "CI integration", Xn = () => "Интеграция с CI", Zn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Hn(e) : n === "es" ? Un(e) : n === "de" ? Wn(e) : n === "it" ? Gn(e) : n === "pt" ? Kn(e) : n === "zh" ? qn(e) : n === "ja" ? Jn(e) : n === "ko" ? Yn(e) : n === "ru" ? Xn(e) : Vn(e);
}), Qn = () => "Historical data", $n = () => "Historique", er = () => "Datos históricos", tr = () => "Historische Daten", nr = () => "Dati storici", rr = () => "Dados históricos", ir = () => "历史数据", ar = () => "履歴データ", or = () => "Historical data", sr = () => "Исторические данные", cr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? $n(e) : n === "es" ? er(e) : n === "de" ? tr(e) : n === "it" ? nr(e) : n === "pt" ? rr(e) : n === "zh" ? ir(e) : n === "ja" ? ar(e) : n === "ko" ? or(e) : n === "ru" ? sr(e) : Qn(e);
}), lr = () => "Pro", ur = () => "Pro", dr = () => "Pro", fr = () => "Pro", pr = () => "Pro", mr = () => "Pro", hr = () => "专业版", gr = () => "プロ", _r = () => "Pro", vr = () => "Pro", yr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ur(e) : n === "es" ? dr(e) : n === "de" ? fr(e) : n === "it" ? pr(e) : n === "pt" ? mr(e) : n === "zh" ? hr(e) : n === "ja" ? gr(e) : n === "ko" ? _r(e) : n === "ru" ? vr(e) : lr(e);
}), br = () => "/month", xr = () => "/ mois", Sr = () => "/mes", Cr = () => "/Monat", wr = () => "/mese", Tr = () => "/mês", Er = () => "/月", Dr = () => "/月", Or = () => "/month", kr = () => "/мес", Ar = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? xr(e) : n === "es" ? Sr(e) : n === "de" ? Cr(e) : n === "it" ? wr(e) : n === "pt" ? Tr(e) : n === "zh" ? Er(e) : n === "ja" ? Dr(e) : n === "ko" ? Or(e) : n === "ru" ? kr(e) : br(e);
}), jr = () => "$29", Mr = () => "29 €", Nr = () => "29 $", Pr = () => "29 $", Fr = () => "29 $", Ir = () => "29 $", Lr = () => "29 $", Rr = () => "29ドル", zr = () => "$29", Br = () => "29 $", Vr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Mr(e) : n === "es" ? Nr(e) : n === "de" ? Pr(e) : n === "it" ? Fr(e) : n === "pt" ? Ir(e) : n === "zh" ? Lr(e) : n === "ja" ? Rr(e) : n === "ko" ? zr(e) : n === "ru" ? Br(e) : jr(e);
}), Hr = () => "5 benchmark runs/day", Ur = () => "5 exécutions de benchmark / jour", Wr = () => "5 ejecuciones de benchmark al día", Gr = () => "5 Benchmark-Durchläufe/Tag", Kr = () => "5 esecuzioni benchmark al giorno", qr = () => "5 execuções de benchmark/dia", Jr = () => "每天 5 次基准测试运行", Yr = () => "1日あたり5回のベンチマーク実行", Xr = () => "5 benchmark runs/day", Zr = () => "5 запусков бенчмарка в день", Qr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ur(e) : n === "es" ? Wr(e) : n === "de" ? Gr(e) : n === "it" ? Kr(e) : n === "pt" ? qr(e) : n === "zh" ? Jr(e) : n === "ja" ? Yr(e) : n === "ko" ? Xr(e) : n === "ru" ? Zr(e) : Hr(e);
}), $r = () => "3 libraries", ei = () => "3 bibliothèques", ti = () => "3 bibliotecas", ni = () => "3 Bibliotheken", ri = () => "3 librerie", ii = () => "3 bibliotecas", ai = () => "3 个库", oi = () => "3ライブラリ", si = () => "3 libraries", ci = () => "3 библиотеки", li = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ei(e) : n === "es" ? ti(e) : n === "de" ? ni(e) : n === "it" ? ri(e) : n === "pt" ? ii(e) : n === "zh" ? ai(e) : n === "ja" ? oi(e) : n === "ko" ? si(e) : n === "ru" ? ci(e) : $r(e);
}), ui = () => "Community support", di = () => "Support communautaire", fi = () => "Soporte de la comunidad", pi = () => "Community-Support", mi = () => "Supporto della comunità", hi = () => "Suporte da comunidade", gi = () => "社区支持", _i = () => "コミュニティサポート", vi = () => "Community support", yi = () => "Поддержка сообщества", bi = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? di(e) : n === "es" ? fi(e) : n === "de" ? pi(e) : n === "it" ? mi(e) : n === "pt" ? hi(e) : n === "zh" ? gi(e) : n === "ja" ? _i(e) : n === "ko" ? vi(e) : n === "ru" ? yi(e) : ui(e);
}), xi = () => "Public results", Si = () => "Résultats publics", Ci = () => "Resultados públicos", wi = () => "Öffentliche Ergebnisse", Ti = () => "Risultati pubblici", Ei = () => "Resultados públicos", Di = () => "公开结果", Oi = () => "公開結果", ki = () => "Public results", Ai = () => "Публичные результаты", ji = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Si(e) : n === "es" ? Ci(e) : n === "de" ? wi(e) : n === "it" ? Ti(e) : n === "pt" ? Ei(e) : n === "zh" ? Di(e) : n === "ja" ? Oi(e) : n === "ko" ? ki(e) : n === "ru" ? Ai(e) : xi(e);
}), Mi = () => "Starter", Ni = () => "Starter", Pi = () => "Starter", Fi = () => "Starter", Ii = () => "Starter", Li = () => "Starter", Ri = () => "入门版", zi = () => "スターター", Bi = () => "Starter", Vi = () => "Starter", Hi = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ni(e) : n === "es" ? Pi(e) : n === "de" ? Fi(e) : n === "it" ? Ii(e) : n === "pt" ? Li(e) : n === "zh" ? Ri(e) : n === "ja" ? zi(e) : n === "ko" ? Bi(e) : n === "ru" ? Vi(e) : Mi(e);
}), Ui = () => "forever", Wi = () => "pour toujours", Gi = () => "para siempre", $ = () => "für immer", Ki = () => "per sempre", qi = () => "para sempre", Ji = () => "永久", Yi = () => "ずっと無料", Xi = () => "forever", Zi = () => "навсегда", Qi = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Wi(e) : n === "es" ? Gi(e) : n === "de" ? $(e) : n === "it" ? Ki(e) : n === "pt" ? qi(e) : n === "zh" ? Ji(e) : n === "ja" ? Yi(e) : n === "ko" ? Xi(e) : n === "ru" ? Zi(e) : Ui(e);
}), $i = () => "$0", ea = () => "0 €", ta = () => "0 $", na = () => "0 $", ra = () => "0 $", ia = () => "0 $", aa = () => "0 $", oa = () => "0円", sa = () => "$0", ca = () => "0 $", la = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ea(e) : n === "es" ? ta(e) : n === "de" ? na(e) : n === "it" ? ra(e) : n === "pt" ? ia(e) : n === "zh" ? aa(e) : n === "ja" ? oa(e) : n === "ko" ? sa(e) : n === "ru" ? ca(e) : $i(e);
}), ua = [
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
function da(e) {
	return ua.includes(e);
}
var fa = /* @__PURE__ */ new Set([
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
function pa(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!da(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !fa.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var ma = n(typeof window < "u" ? window.location.pathname : "/en"), ha = t(ma, (e) => pa(e)), ga = e.from_html("<li class=\"flex items-center gap-2 text-sm text-muted-foreground\"><span class=\"text-primary\">✓</span> </li>"), _a = e.from_html("<div><h3 class=\"text-lg font-semibold text-foreground\"> </h3> <div class=\"my-4\"><span class=\"text-3xl font-bold text-foreground\"> </span> <span class=\"text-sm text-muted-foreground\"> </span></div> <ul class=\"mb-6 flex-1 space-y-2\"></ul> <button type=\"button\"> </button></div>"), va = e.from_html("<div class=\"grid gap-6 md:grid-cols-3\"></div>");
function ya(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(ha, "$route", i), [i, a] = e.setup_stores(), o = e.derived(() => r().kind === "ok" ? r().locale : "en"), s = e.derived(() => (e.get(o), [
		{
			name: Hi(),
			price: la(),
			period: Qi(),
			features: [
				Qr(),
				li(),
				bi(),
				ji()
			]
		},
		{
			name: yr(),
			price: Vr(),
			period: Ar(),
			features: [
				sn(),
				vn(),
				kn(),
				Bn(),
				Zn(),
				cr()
			],
			highlighted: !0
		},
		{
			name: Q(),
			price: Rt(),
			period: "",
			features: [
				ae(),
				ge(),
				De(),
				Re(),
				Ye(),
				ot(),
				_t()
			]
		}
	]));
	function c(e) {
		return e === Q() ? U() : Yt();
	}
	var l = va();
	e.each(l, 21, () => e.get(s), e.index, (t, n) => {
		var r = _a(), i = e.child(r), a = e.only_child(i, !0), o = e.sibling(i, 2), s = e.child(o), l = e.only_child(s, !0), u = e.sibling(s, 2), d = e.only_child(u, !0);
		e.reset(o);
		var f = e.sibling(o, 2);
		e.each(f, 20, () => e.get(n).features, (e) => e, (t, n) => {
			var r = ga(), i = e.sibling(e.child(r));
			e.reset(r), e.template_effect(() => e.set_text(i, ` ${n ?? ""}`)), e.append(t, r);
		}), e.reset(f);
		var p = e.sibling(f, 2), m = e.only_child(p, !0);
		e.reset(r), e.template_effect((t) => {
			e.set_class(r, 1, `flex flex-col rounded-lg border p-6 ${e.get(n).highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`), e.set_text(a, e.get(n).name), e.set_text(l, e.get(n).price), e.set_text(d, e.get(n).period), e.set_class(p, 1, `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${e.get(n).highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`), e.set_text(m, t);
		}, [() => c(e.get(n).name)]), e.append(t, r);
	}), e.reset(l), e.append(t, l), e.pop(), a();
}
export { ya as default };
