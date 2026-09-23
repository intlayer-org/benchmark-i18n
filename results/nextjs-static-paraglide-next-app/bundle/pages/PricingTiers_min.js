import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
import { useParams as o } from "next/navigation";
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
], l = "PARAGLIDE_LOCALE", ee = 3456e4, u = [
	"cookie",
	"globalVariable",
	"baseLocale"
], d = [], f = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var p, m = !1, h = () => {
	let e = u;
	!f && typeof window < "u" && window.location?.href && (e = P(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return m || (p = t, m = !0, _(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = O();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && p !== void 0) n = p;
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
var g = (e) => {
	e ? window.location.href = e : window.location.reload();
}, _ = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = h();
	} catch {}
	let i = [], a = u;
	!f && typeof window < "u" && window.location?.href && (a = P(window.location.href));
	for (let t of a) if (t === "globalVariable") p = e;
	else if (t === "cookie") {
		if (f || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${ee}`;
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
		!f && n.reload && window.location && e !== r && g(void 0);
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
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (j === t) return M;
	let n = b(new URL(t, "http://example.com")), r = k(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of d) if (x(new s(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return j = t, M = a, a;
}
function P(e) {
	let t = N(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var F = /* @__PURE__ */ new Map();
function I(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var L = () => "All libraries", R = () => "Toutes les bibliothèques", z = () => "Todas las bibliotecas", B = () => "Alle Bibliotheken", V = () => "Tutte le librerie", H = () => "Todas as bibliotecas", U = () => "所有库", W = () => "すべてのライブラリ", G = () => "모든 라이브러리", K = () => "Все библиотеки", q = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? R(e) : n === "es" ? z(e) : n === "de" ? B(e) : n === "it" ? V(e) : n === "pt" ? H(e) : n === "zh" ? U(e) : n === "ja" ? W(e) : n === "ko" ? G(e) : n === "ru" ? K(e) : L(e);
}), J = () => "Audit logs", Y = () => "Journaux d'audit", X = () => "Registros de auditoría", Z = () => "Audit-Logs", re = () => "Registri di controllo", ie = () => "Logs de auditoria", ae = () => "审计日志", oe = () => "監査ログ", se = () => "감사 로그", ce = () => "Журналы аудита", le = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Y(e) : n === "es" ? X(e) : n === "de" ? Z(e) : n === "it" ? re(e) : n === "pt" ? ie(e) : n === "zh" ? ae(e) : n === "ja" ? oe(e) : n === "ko" ? se(e) : n === "ru" ? ce(e) : J(e);
}), ue = (e) => `${e?.runs} benchmark runs/day`, de = (e) => `${e?.runs} passages de benchmark / jour`, fe = (e) => `${e?.runs} ejecuciones de benchmark/día`, pe = (e) => `${e?.runs} Benchmark-Durchläufe/Tag`, me = (e) => `${e?.runs} esecuzioni benchmark/giorno`, he = (e) => `${e?.runs} execuções de benchmark por dia`, ge = (e) => `每天 ${e?.runs} 次基准测试运行`, _e = (e) => `1日あたり ${e?.runs} 回のベンチマーク実行`, ve = (e) => `하루 ${e?.runs}회 벤치마크 실행`, ye = (e) => `${e?.runs} запусков бенчмарка в день`, be = ((e, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? de(e) : n === "es" ? fe(e) : n === "de" ? pe(e) : n === "it" ? me(e) : n === "pt" ? he(e) : n === "zh" ? ge(e) : n === "ja" ? _e(e) : n === "ko" ? ve(e) : n === "ru" ? ye(e) : ue(e);
}), xe = () => "CI integration", Se = () => "Intégration CI", Ce = () => "Integración CI", we = () => "CI-Integration", Te = () => "Integrazione CI", Ee = () => "Integração CI", De = () => "CI 集成", Oe = () => "CI統合", ke = () => "CI 통합", Ae = () => "Интеграция с CI", je = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Se(e) : n === "es" ? Ce(e) : n === "de" ? we(e) : n === "it" ? Te(e) : n === "pt" ? Ee(e) : n === "zh" ? De(e) : n === "ja" ? Oe(e) : n === "ko" ? ke(e) : n === "ru" ? Ae(e) : xe(e);
}), Me = () => "Community support", Ne = () => "Support communautaire", Pe = () => "Soporte de la comunidad", Fe = () => "Community-Support", Ie = () => "Supporto della comunità", Le = () => "Suporte da comunidade", Re = () => "社区支持", ze = () => "コミュニティサポート", Be = () => "커뮤니티 지원", Ve = () => "Сообщество поддержки", He = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ne(e) : n === "es" ? Pe(e) : n === "de" ? Fe(e) : n === "it" ? Ie(e) : n === "pt" ? Le(e) : n === "zh" ? Re(e) : n === "ja" ? ze(e) : n === "ko" ? Be(e) : n === "ru" ? Ve(e) : Me(e);
}), Ue = () => "Contact Sales", We = () => "Contacter le service commercial", Ge = () => "Contactar con ventas", Ke = () => "Vertrieb kontaktieren", qe = () => "Contatta l'ufficio vendite", Je = () => "Contatar Vendas", Ye = () => "联系销售", Xe = () => "営業に連絡", Ze = () => "영업팀 문의", Qe = () => "Связаться с отделом продаж", $e = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? We(e) : n === "es" ? Ge(e) : n === "de" ? Ke(e) : n === "it" ? qe(e) : n === "pt" ? Je(e) : n === "zh" ? Ye(e) : n === "ja" ? Xe(e) : n === "ko" ? Ze(e) : n === "ru" ? Qe(e) : Ue(e);
}), et = () => "Custom", tt = () => "Sur mesure", nt = () => "Personalizado", rt = () => "Individuell", it = () => "Personalizzato", at = () => "Personalizado", ot = () => "定制", st = () => "カスタム", ct = () => "커스텀", lt = () => "Индивидуальная цена", ut = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? tt(e) : n === "es" ? nt(e) : n === "de" ? rt(e) : n === "it" ? it(e) : n === "pt" ? at(e) : n === "zh" ? ot(e) : n === "ja" ? st(e) : n === "ko" ? ct(e) : n === "ru" ? lt(e) : et(e);
}), dt = () => "Custom SLAs", ft = () => "SLA personnalisés", pt = () => "SLA personalizados", mt = () => "Individuelle SLAs", ht = () => "SLA personalizzati", gt = () => "SLAs personalizados", _t = () => "定制 SLA", vt = () => "カスタムSLA", yt = () => "맞춤형 SLA", bt = () => "Индивидуальные SLA", xt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? ft(e) : n === "es" ? pt(e) : n === "de" ? mt(e) : n === "it" ? ht(e) : n === "pt" ? gt(e) : n === "zh" ? _t(e) : n === "ja" ? vt(e) : n === "ko" ? yt(e) : n === "ru" ? bt(e) : dt(e);
}), St = () => "Dedicated account manager", Ct = () => "Gestionnaire de compte dédié", wt = () => "Gestor de cuentas dedicado", Tt = () => "Dedizierter Account-Manager", Et = () => "Account manager dedicato", Dt = () => "Gerente de conta dedicado", Ot = () => "专属客户经理", kt = () => "専任のアカウントマネージャー", At = () => "전담 어카운트 매니저", jt = () => "Выделенный менеджер", Mt = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ct(e) : n === "es" ? wt(e) : n === "de" ? Tt(e) : n === "it" ? Et(e) : n === "pt" ? Dt(e) : n === "zh" ? Ot(e) : n === "ja" ? kt(e) : n === "ko" ? At(e) : n === "ru" ? jt(e) : St(e);
}), Nt = () => "Enterprise", Pt = () => "Enterprise", Ft = () => "Enterprise", It = () => "Enterprise", Lt = () => "Enterprise", Rt = () => "Enterprise", zt = () => "企业版", Bt = () => "エンタープライズ", Vt = () => "엔터프라이즈", Ht = () => "Корпоративный", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Pt(e) : n === "es" ? Ft(e) : n === "de" ? It(e) : n === "it" ? Lt(e) : n === "pt" ? Rt(e) : n === "zh" ? zt(e) : n === "ja" ? Bt(e) : n === "ko" ? Vt(e) : n === "ru" ? Ht(e) : Nt(e);
}), Ut = () => "Everything in Pro", Wt = () => "Tout ce qui est dans Pro", Gt = () => "Todo lo que hay en Pro", Kt = () => "Alles in Pro", qt = () => "Tutto quello che c'è in Pro", Jt = () => "Tudo o que está no Pro", Yt = () => "包含专业版所有功能", Xt = () => "Proプランの全機能", Zt = () => "Pro의 모든 기능 포함", Qt = () => "Все возможности Pro", $t = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Wt(e) : n === "es" ? Gt(e) : n === "de" ? Kt(e) : n === "it" ? qt(e) : n === "pt" ? Jt(e) : n === "zh" ? Yt(e) : n === "ja" ? Xt(e) : n === "ko" ? Zt(e) : n === "ru" ? Qt(e) : Ut(e);
}), en = () => "forever", tn = () => "pour toujours", nn = () => "para siempre", rn = () => "für immer", an = () => "per sempre", on = () => "para sempre", sn = () => "永久", cn = () => "永久に", ln = () => "영원히", un = () => "навсегда", dn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? tn(e) : n === "es" ? nn(e) : n === "de" ? rn(e) : n === "it" ? an(e) : n === "pt" ? on(e) : n === "zh" ? sn(e) : n === "ja" ? cn(e) : n === "ko" ? ln(e) : n === "ru" ? un(e) : en(e);
}), fn = () => "Get Started", pn = () => "Démarrer", mn = () => "Empezar", hn = () => "Jetzt starten", gn = () => "Inizia ora", _n = () => "Começar", vn = () => "立即开始", yn = () => "今すぐ始める", bn = () => "시작하기", xn = () => "Начать", Sn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? pn(e) : n === "es" ? mn(e) : n === "de" ? hn(e) : n === "it" ? gn(e) : n === "pt" ? _n(e) : n === "zh" ? vn(e) : n === "ja" ? yn(e) : n === "ko" ? bn(e) : n === "ru" ? xn(e) : fn(e);
}), Cn = () => "Historical data", wn = () => "Données historiques", Tn = () => "Datos históricos", En = () => "Historische Daten", Dn = () => "Dati storici", On = () => "Dados históricos", kn = () => "历史数据", An = () => "履歴データ", jn = () => "기록 데이터", Mn = () => "Исторические данные", Nn = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? wn(e) : n === "es" ? Tn(e) : n === "de" ? En(e) : n === "it" ? Dn(e) : n === "pt" ? On(e) : n === "zh" ? kn(e) : n === "ja" ? An(e) : n === "ko" ? jn(e) : n === "ru" ? Mn(e) : Cn(e);
}), Pn = (e) => `${e?.libs} libraries`, Fn = (e) => `${e?.libs} bibliothèques`, In = (e) => `${e?.libs} bibliotecas`, Ln = (e) => `${e?.libs} Bibliotheken`, Rn = (e) => `${e?.libs} librerie`, zn = (e) => `${e?.libs} bibliotecas`, Bn = (e) => `${e?.libs} 个库`, Vn = (e) => `${e?.libs} 個のライブラリ`, Hn = (e) => `${e?.libs}개 라이브러리`, Un = (e) => `${e?.libs} библиотек`, Wn = ((e, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Fn(e) : n === "es" ? In(e) : n === "de" ? Ln(e) : n === "it" ? Rn(e) : n === "pt" ? zn(e) : n === "zh" ? Bn(e) : n === "ja" ? Vn(e) : n === "ko" ? Hn(e) : n === "ru" ? Un(e) : Pn(e);
}), Gn = () => "/month", Kn = () => "/ mois", qn = () => "/mes", Jn = () => "/Monat", Yn = () => "/mese", Xn = () => "/mês", Zn = () => "/月", Qn = () => "/月", $n = () => "/월", er = () => "/месяц", tr = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Kn(e) : n === "es" ? qn(e) : n === "de" ? Jn(e) : n === "it" ? Yn(e) : n === "pt" ? Xn(e) : n === "zh" ? Zn(e) : n === "ja" ? Qn(e) : n === "ko" ? $n(e) : n === "ru" ? er(e) : Gn(e);
}), nr = () => "On-premise option", rr = () => "Option sur site (on-premise)", ir = () => "Opción on-premise", ar = () => "On-Premise-Option", or = () => "Opzione in locale", sr = () => "Opção on-premise", cr = () => "本地部署选项", lr = () => "オンプレミスオプション", ur = () => "온프레미스 옵션", dr = () => "Локальное развертывание", fr = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? rr(e) : n === "es" ? ir(e) : n === "de" ? ar(e) : n === "it" ? or(e) : n === "pt" ? sr(e) : n === "zh" ? cr(e) : n === "ja" ? lr(e) : n === "ko" ? ur(e) : n === "ru" ? dr(e) : nr(e);
}), pr = () => "$0", mr = () => "0 €", hr = () => "0 $", gr = () => "0 $", _r = () => "0 $", vr = () => "0 $", yr = () => "¥0", br = () => "¥0", xr = () => "₩0", Sr = () => "0 $", Cr = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? mr(e) : n === "es" ? hr(e) : n === "de" ? gr(e) : n === "it" ? _r(e) : n === "pt" ? vr(e) : n === "zh" ? yr(e) : n === "ja" ? br(e) : n === "ko" ? xr(e) : n === "ru" ? Sr(e) : pr(e);
}), wr = () => "$29", Tr = () => "29 €", Er = () => "29 $", Dr = () => "29 $", Or = () => "29 $", kr = () => "29 $", Ar = () => "¥199", jr = () => "¥3,500", Mr = () => "₩39,000", Nr = () => "29 $", Pr = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Tr(e) : n === "es" ? Er(e) : n === "de" ? Dr(e) : n === "it" ? Or(e) : n === "pt" ? kr(e) : n === "zh" ? Ar(e) : n === "ja" ? jr(e) : n === "ko" ? Mr(e) : n === "ru" ? Nr(e) : wr(e);
}), Fr = () => "Priority support", Ir = () => "Support prioritaire", Lr = () => "Soporte prioritario", Rr = () => "Prioritäts-Support", zr = () => "Supporto prioritario", Br = () => "Suporte prioritário", Vr = () => "优先支持", Hr = () => "優先サポート", Ur = () => "우선 지원", Wr = () => "Приоритетная поддержка", Gr = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ir(e) : n === "es" ? Lr(e) : n === "de" ? Rr(e) : n === "it" ? zr(e) : n === "pt" ? Br(e) : n === "zh" ? Vr(e) : n === "ja" ? Hr(e) : n === "ko" ? Ur(e) : n === "ru" ? Wr(e) : Fr(e);
}), Kr = () => "Private results", qr = () => "Résultats privés", Jr = () => "Resultados privados", Yr = () => "Private Ergebnisse", Xr = () => "Risultati privati", Zr = () => "Resultados privados", Qr = () => "私有结果", $r = () => "プライベート結果", ei = () => "결과 비공개", ti = () => "Приватные результаты", ni = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? qr(e) : n === "es" ? Jr(e) : n === "de" ? Yr(e) : n === "it" ? Xr(e) : n === "pt" ? Zr(e) : n === "zh" ? Qr(e) : n === "ja" ? $r(e) : n === "ko" ? ei(e) : n === "ru" ? ti(e) : Kr(e);
}), ri = () => "Pro", ii = () => "Pro", ai = () => "Pro", oi = () => "Pro", si = () => "Pro", ci = () => "Pro", li = () => "专业版", ui = () => "プロ", di = () => "프로", fi = () => "Pro", pi = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? ii(e) : n === "es" ? ai(e) : n === "de" ? oi(e) : n === "it" ? si(e) : n === "pt" ? ci(e) : n === "zh" ? li(e) : n === "ja" ? ui(e) : n === "ko" ? di(e) : n === "ru" ? fi(e) : ri(e);
}), mi = () => "Public results", hi = () => "Résultats publics", gi = () => "Resultados públicos", _i = () => "Öffentliche Ergebnisse", vi = () => "Risultati pubblici", yi = () => "Resultados públicos", bi = () => "公开结果", xi = () => "公開結果", Si = () => "결과 공개", Ci = () => "Публичные результаты", wi = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? hi(e) : n === "es" ? gi(e) : n === "de" ? _i(e) : n === "it" ? vi(e) : n === "pt" ? yi(e) : n === "zh" ? bi(e) : n === "ja" ? xi(e) : n === "ko" ? Si(e) : n === "ru" ? Ci(e) : mi(e);
}), Ti = () => "SSO & SAML", Ei = () => "SSO & SAML", Di = () => "SSO y SAML", Oi = () => "SSO & SAML", ki = () => "SSO e SAML", Ai = () => "SSO & SAML", ji = () => "SSO 和 SAML", Mi = () => "SSO & SAML", Ni = () => "SSO 및 SAML", Pi = () => "SSO и SAML", Fi = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Ei(e) : n === "es" ? Di(e) : n === "de" ? Oi(e) : n === "it" ? ki(e) : n === "pt" ? Ai(e) : n === "zh" ? ji(e) : n === "ja" ? Mi(e) : n === "ko" ? Ni(e) : n === "ru" ? Pi(e) : Ti(e);
}), Ii = () => "Starter", Li = () => "Starter", Ri = () => "Starter", zi = () => "Starter", Bi = () => "Starter", Vi = () => "Starter", Hi = () => "入门版", Ui = () => "スターター", Wi = () => "스타터", Gi = () => "Starter", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? Li(e) : n === "es" ? Ri(e) : n === "de" ? zi(e) : n === "it" ? Bi(e) : n === "pt" ? Vi(e) : n === "zh" ? Hi(e) : n === "ja" ? Ui(e) : n === "ko" ? Wi(e) : n === "ru" ? Gi(e) : Ii(e);
}), Ki = () => "Training sessions", qi = () => "Sessions de formation", Ji = () => "Sesiones de formación", Yi = () => "Schulungen", Xi = () => "Sessioni di formazione", Zi = () => "Sessões de treinamento", Qi = () => "培训课程", $i = () => "トレーニングセッション", ea = () => "교육 세션", ta = () => "Сессии обучения", na = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? qi(e) : n === "es" ? Ji(e) : n === "de" ? Yi(e) : n === "it" ? Xi(e) : n === "pt" ? Zi(e) : n === "zh" ? Qi(e) : n === "ja" ? $i(e) : n === "ko" ? ea(e) : n === "ru" ? ta(e) : Ki(e);
}), ra = () => "Unlimited runs", ia = () => "Passages illimités", aa = () => "Ejecuciones ilimitadas", oa = () => "Unbegrenzte Durchläufe", sa = () => "Esecuzioni illimitate", ca = () => "Execuções ilimitadas", la = () => "无限次运行", ua = () => "無制限の実行", da = () => "무제한 실행", fa = () => "Неограниченное количество запусков", pa = ((e = {}, t = {}) => {
	let n = t.locale ?? h();
	return n === "fr" ? ia(e) : n === "es" ? aa(e) : n === "de" ? oa(e) : n === "it" ? sa(e) : n === "pt" ? ca(e) : n === "zh" ? la(e) : n === "ja" ? ua(e) : n === "ko" ? da(e) : n === "ru" ? fa(e) : ra(e);
});
function ma() {
	let e = [
		{
			name: $(),
			price: Cr(),
			period: dn(),
			features: [
				be({ runs: "5" }),
				Wn({ libs: "3" }),
				He(),
				wi()
			]
		},
		{
			name: pi(),
			price: Pr(),
			period: tr(),
			features: [
				pa(),
				q(),
				Gr(),
				ni(),
				je(),
				Nn()
			],
			highlighted: !0
		},
		{
			name: Q(),
			price: ut(),
			period: "",
			features: [
				$t(),
				fr(),
				Fi(),
				Mt(),
				xt(),
				le(),
				na()
			]
		}
	];
	return i("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: e.map((e) => a("div", {
			className: `flex flex-col rounded-lg border p-6 ${e.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				i("h3", {
					className: "text-lg font-semibold text-foreground",
					children: e.name
				}),
				a("div", {
					className: "my-4",
					children: [i("span", {
						className: "text-3xl font-bold text-foreground",
						children: e.price
					}), i("span", {
						className: "text-sm text-muted-foreground",
						children: e.period
					})]
				}),
				i("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: e.features.map((e) => a("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							i("span", {
								className: "text-primary",
								children: "✓"
							}),
							" ",
							e
						]
					}, e))
				}),
				i("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${e.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: e.name === Q() ? $e() : Sn()
				})
			]
		}, e.name))
	});
}
function ha() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function ga(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function _a({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		ga("AppRoot", c);
	}, [c]), e(() => {
		_(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		ha();
	}, []), i(r, { children: a });
}
function va({ children: e }) {
	return i(_a, { children: e });
}
function ya() {
	return i(va, { children: i(ma, {}) });
}
export { ya as default };
