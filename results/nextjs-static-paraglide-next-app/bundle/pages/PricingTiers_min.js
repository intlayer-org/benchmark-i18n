import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import { Fragment as r, jsxDEV as i } from "react/jsx-dev-runtime";
import { useParams as a } from "next/navigation";
var o = {}, s = [
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
], c = "PARAGLIDE_LOCALE", ee = 3456e4, l = [
	"cookie",
	"globalVariable",
	"baseLocale"
], u = [], d = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var f, p = !1, m = () => {
	let e = l;
	!d && typeof window < "u" && window.location?.href && (e = j(window.location.href));
	let t = te(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, g(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function te(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ie();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (N(t) && M.has(t)) {
			let e = M.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return v(t);
			}
		}
		let e = _(n);
		if (e) return e;
	}
}
var h = (e) => {
	e ? window.location.href = e : window.location.reload();
}, g = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = m();
	} catch {}
	let i = [], a = l;
	!d && typeof window < "u" && window.location?.href && (a = j(window.location.href));
	for (let t of a) if (t === "globalVariable") f = e;
	else if (t === "cookie") {
		if (d || typeof document > "u" || typeof window > "u") continue;
		let t = `${c}=${e}; path=/; max-age=${ee}`;
		document.cookie = t, T();
	} else if (t === "baseLocale") continue;
	else if (N(t) && M.has(t)) {
		let n = M.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!d && n.reload && window.location && e !== r && h(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
}, ne = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function _(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of s) if (e.toLowerCase() === t) return e;
}
function v(e) {
	let t = _(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${s.join(", ")}`);
}
function y(e) {
	return e;
}
function b(e, t) {
	return e.exec(t.href);
}
var x = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), S = RegExp(`(?:^|;\\s*)${x}=([^;]*)`), C = Symbol(), w = C;
function T() {
	w = C;
}
function re() {
	typeof queueMicrotask == "function" ? queueMicrotask(T) : Promise.resolve().then(T);
}
function ie() {
	if (typeof document > "u") return;
	if (w !== C) return w;
	let e = document.cookie.match(S)?.[1];
	return w = _(e), re(), w;
}
function E(e) {
	return D(e);
}
function D(e) {
	let t = y(typeof e == "string" ? new URL(e, ne()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && _(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), y(t);
}
var O, k;
function A(e) {
	if (u.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (O === t) return k;
	let n = y(new URL(t, "http://example.com")), r = E(n), i = r.href === n.href ? [n] : [n, r], a;
	for (let e of i) {
		for (let t of u) if (b(new o(t.match, e.href), e)) {
			a = t;
			break;
		}
		if (a) break;
	}
	return O = t, k = a, a;
}
function j(e) {
	let t = A(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : l;
}
var M = /* @__PURE__ */ new Map();
function N(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var P = () => "All libraries", F = () => "Toutes les bibliothèques", I = () => "Todas las bibliotecas", L = () => "Alle Bibliotheken", R = () => "Tutte le librerie", z = () => "Todas as bibliotecas", B = () => "所有库", V = () => "すべてのライブラリ", H = () => "모든 라이브러리", U = () => "Все библиотеки", W = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? F(e) : n === "es" ? I(e) : n === "de" ? L(e) : n === "it" ? R(e) : n === "pt" ? z(e) : n === "zh" ? B(e) : n === "ja" ? V(e) : n === "ko" ? H(e) : n === "ru" ? U(e) : P(e);
}), G = () => "Audit logs", K = () => "Journaux d'audit", q = () => "Registros de auditoría", J = () => "Audit-Logs", Y = () => "Registri di controllo", ae = () => "Logs de auditoria", oe = () => "审计日志", se = () => "監査ログ", ce = () => "감사 로그", le = () => "Журналы аудита", ue = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? K(e) : n === "es" ? q(e) : n === "de" ? J(e) : n === "it" ? Y(e) : n === "pt" ? ae(e) : n === "zh" ? oe(e) : n === "ja" ? se(e) : n === "ko" ? ce(e) : n === "ru" ? le(e) : G(e);
}), de = (e) => `${e?.runs} benchmark runs/day`, fe = (e) => `${e?.runs} passages de benchmark / jour`, pe = (e) => `${e?.runs} ejecuciones de benchmark/día`, me = (e) => `${e?.runs} Benchmark-Durchläufe/Tag`, he = (e) => `${e?.runs} esecuzioni benchmark/giorno`, ge = (e) => `${e?.runs} execuções de benchmark por dia`, _e = (e) => `每天 ${e?.runs} 次基准测试运行`, ve = (e) => `1日あたり ${e?.runs} 回のベンチマーク実行`, ye = (e) => `하루 ${e?.runs}회 벤치마크 실행`, be = (e) => `${e?.runs} запусков бенчмарка в день`, xe = ((e, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? fe(e) : n === "es" ? pe(e) : n === "de" ? me(e) : n === "it" ? he(e) : n === "pt" ? ge(e) : n === "zh" ? _e(e) : n === "ja" ? ve(e) : n === "ko" ? ye(e) : n === "ru" ? be(e) : de(e);
}), Se = () => "CI integration", Ce = () => "Intégration CI", we = () => "Integración CI", Te = () => "CI-Integration", Ee = () => "Integrazione CI", De = () => "Integração CI", Oe = () => "CI 集成", ke = () => "CI統合", Ae = () => "CI 통합", je = () => "Интеграция с CI", Me = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ce(e) : n === "es" ? we(e) : n === "de" ? Te(e) : n === "it" ? Ee(e) : n === "pt" ? De(e) : n === "zh" ? Oe(e) : n === "ja" ? ke(e) : n === "ko" ? Ae(e) : n === "ru" ? je(e) : Se(e);
}), Ne = () => "Community support", Pe = () => "Support communautaire", Fe = () => "Soporte de la comunidad", Ie = () => "Community-Support", Le = () => "Supporto della comunità", Re = () => "Suporte da comunidade", ze = () => "社区支持", Be = () => "コミュニティサポート", Ve = () => "커뮤니티 지원", He = () => "Сообщество поддержки", Ue = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Pe(e) : n === "es" ? Fe(e) : n === "de" ? Ie(e) : n === "it" ? Le(e) : n === "pt" ? Re(e) : n === "zh" ? ze(e) : n === "ja" ? Be(e) : n === "ko" ? Ve(e) : n === "ru" ? He(e) : Ne(e);
}), We = () => "Contact Sales", Ge = () => "Contacter le service commercial", Ke = () => "Contactar con ventas", qe = () => "Vertrieb kontaktieren", Je = () => "Contatta l'ufficio vendite", Ye = () => "Contatar Vendas", Xe = () => "联系销售", Ze = () => "営業に連絡", Qe = () => "영업팀 문의", $e = () => "Связаться с отделом продаж", et = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ge(e) : n === "es" ? Ke(e) : n === "de" ? qe(e) : n === "it" ? Je(e) : n === "pt" ? Ye(e) : n === "zh" ? Xe(e) : n === "ja" ? Ze(e) : n === "ko" ? Qe(e) : n === "ru" ? $e(e) : We(e);
}), tt = () => "Custom", nt = () => "Sur mesure", rt = () => "Personalizado", it = () => "Individuell", at = () => "Personalizzato", ot = () => "Personalizado", st = () => "定制", ct = () => "カスタム", lt = () => "커스텀", ut = () => "Индивидуальная цена", dt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? nt(e) : n === "es" ? rt(e) : n === "de" ? it(e) : n === "it" ? at(e) : n === "pt" ? ot(e) : n === "zh" ? st(e) : n === "ja" ? ct(e) : n === "ko" ? lt(e) : n === "ru" ? ut(e) : tt(e);
}), ft = () => "Custom SLAs", pt = () => "SLA personnalisés", mt = () => "SLA personalizados", ht = () => "Individuelle SLAs", gt = () => "SLA personalizzati", _t = () => "SLAs personalizados", vt = () => "定制 SLA", yt = () => "カスタムSLA", bt = () => "맞춤형 SLA", xt = () => "Индивидуальные SLA", St = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? pt(e) : n === "es" ? mt(e) : n === "de" ? ht(e) : n === "it" ? gt(e) : n === "pt" ? _t(e) : n === "zh" ? vt(e) : n === "ja" ? yt(e) : n === "ko" ? bt(e) : n === "ru" ? xt(e) : ft(e);
}), Ct = () => "Dedicated account manager", wt = () => "Gestionnaire de compte dédié", Tt = () => "Gestor de cuentas dedicado", Et = () => "Dedizierter Account-Manager", Dt = () => "Account manager dedicato", Ot = () => "Gerente de conta dedicado", kt = () => "专属客户经理", At = () => "専任のアカウントマネージャー", jt = () => "전담 어카운트 매니저", Mt = () => "Выделенный менеджер", Nt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? wt(e) : n === "es" ? Tt(e) : n === "de" ? Et(e) : n === "it" ? Dt(e) : n === "pt" ? Ot(e) : n === "zh" ? kt(e) : n === "ja" ? At(e) : n === "ko" ? jt(e) : n === "ru" ? Mt(e) : Ct(e);
}), Pt = () => "Enterprise", Ft = () => "Enterprise", It = () => "Enterprise", Lt = () => "Enterprise", Rt = () => "Enterprise", zt = () => "Enterprise", Bt = () => "企业版", Vt = () => "エンタープライズ", Ht = () => "엔터프라이즈", Ut = () => "Корпоративный", X = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ft(e) : n === "es" ? It(e) : n === "de" ? Lt(e) : n === "it" ? Rt(e) : n === "pt" ? zt(e) : n === "zh" ? Bt(e) : n === "ja" ? Vt(e) : n === "ko" ? Ht(e) : n === "ru" ? Ut(e) : Pt(e);
}), Wt = () => "Everything in Pro", Gt = () => "Tout ce qui est dans Pro", Kt = () => "Todo lo que hay en Pro", qt = () => "Alles in Pro", Jt = () => "Tutto quello che c'è in Pro", Yt = () => "Tudo o que está no Pro", Xt = () => "包含专业版所有功能", Zt = () => "Proプランの全機能", Qt = () => "Pro의 모든 기능 포함", $t = () => "Все возможности Pro", en = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Gt(e) : n === "es" ? Kt(e) : n === "de" ? qt(e) : n === "it" ? Jt(e) : n === "pt" ? Yt(e) : n === "zh" ? Xt(e) : n === "ja" ? Zt(e) : n === "ko" ? Qt(e) : n === "ru" ? $t(e) : Wt(e);
}), tn = () => "forever", nn = () => "pour toujours", rn = () => "para siempre", an = () => "für immer", on = () => "per sempre", sn = () => "para sempre", cn = () => "永久", ln = () => "永久に", un = () => "영원히", dn = () => "навсегда", fn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? nn(e) : n === "es" ? rn(e) : n === "de" ? an(e) : n === "it" ? on(e) : n === "pt" ? sn(e) : n === "zh" ? cn(e) : n === "ja" ? ln(e) : n === "ko" ? un(e) : n === "ru" ? dn(e) : tn(e);
}), pn = () => "Get Started", mn = () => "Démarrer", hn = () => "Empezar", gn = () => "Jetzt starten", _n = () => "Inizia ora", vn = () => "Começar", yn = () => "立即开始", bn = () => "今すぐ始める", xn = () => "시작하기", Sn = () => "Начать", Cn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? mn(e) : n === "es" ? hn(e) : n === "de" ? gn(e) : n === "it" ? _n(e) : n === "pt" ? vn(e) : n === "zh" ? yn(e) : n === "ja" ? bn(e) : n === "ko" ? xn(e) : n === "ru" ? Sn(e) : pn(e);
}), wn = () => "Historical data", Tn = () => "Données historiques", En = () => "Datos históricos", Dn = () => "Historische Daten", On = () => "Dati storici", kn = () => "Dados históricos", An = () => "历史数据", jn = () => "履歴データ", Mn = () => "기록 데이터", Nn = () => "Исторические данные", Pn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Tn(e) : n === "es" ? En(e) : n === "de" ? Dn(e) : n === "it" ? On(e) : n === "pt" ? kn(e) : n === "zh" ? An(e) : n === "ja" ? jn(e) : n === "ko" ? Mn(e) : n === "ru" ? Nn(e) : wn(e);
}), Fn = (e) => `${e?.libs} libraries`, In = (e) => `${e?.libs} bibliothèques`, Ln = (e) => `${e?.libs} bibliotecas`, Rn = (e) => `${e?.libs} Bibliotheken`, zn = (e) => `${e?.libs} librerie`, Bn = (e) => `${e?.libs} bibliotecas`, Vn = (e) => `${e?.libs} 个库`, Hn = (e) => `${e?.libs} 個のライブラリ`, Un = (e) => `${e?.libs}개 라이브러리`, Wn = (e) => `${e?.libs} библиотек`, Gn = ((e, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? In(e) : n === "es" ? Ln(e) : n === "de" ? Rn(e) : n === "it" ? zn(e) : n === "pt" ? Bn(e) : n === "zh" ? Vn(e) : n === "ja" ? Hn(e) : n === "ko" ? Un(e) : n === "ru" ? Wn(e) : Fn(e);
}), Kn = () => "/month", qn = () => "/ mois", Jn = () => "/mes", Yn = () => "/Monat", Xn = () => "/mese", Zn = () => "/mês", Qn = () => "/月", $n = () => "/月", er = () => "/월", tr = () => "/месяц", nr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? qn(e) : n === "es" ? Jn(e) : n === "de" ? Yn(e) : n === "it" ? Xn(e) : n === "pt" ? Zn(e) : n === "zh" ? Qn(e) : n === "ja" ? $n(e) : n === "ko" ? er(e) : n === "ru" ? tr(e) : Kn(e);
}), rr = () => "On-premise option", ir = () => "Option sur site (on-premise)", ar = () => "Opción on-premise", or = () => "On-Premise-Option", sr = () => "Opzione in locale", cr = () => "Opção on-premise", lr = () => "本地部署选项", ur = () => "オンプレミスオプション", dr = () => "온프레미스 옵션", fr = () => "Локальное развертывание", pr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? ir(e) : n === "es" ? ar(e) : n === "de" ? or(e) : n === "it" ? sr(e) : n === "pt" ? cr(e) : n === "zh" ? lr(e) : n === "ja" ? ur(e) : n === "ko" ? dr(e) : n === "ru" ? fr(e) : rr(e);
}), mr = () => "$0", hr = () => "0 €", gr = () => "0 $", _r = () => "0 $", vr = () => "0 $", yr = () => "0 $", br = () => "¥0", xr = () => "¥0", Sr = () => "₩0", Cr = () => "0 $", wr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? hr(e) : n === "es" ? gr(e) : n === "de" ? _r(e) : n === "it" ? vr(e) : n === "pt" ? yr(e) : n === "zh" ? br(e) : n === "ja" ? xr(e) : n === "ko" ? Sr(e) : n === "ru" ? Cr(e) : mr(e);
}), Tr = () => "$29", Er = () => "29 €", Dr = () => "29 $", Or = () => "29 $", kr = () => "29 $", Ar = () => "29 $", jr = () => "¥199", Mr = () => "¥3,500", Nr = () => "₩39,000", Pr = () => "29 $", Fr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Er(e) : n === "es" ? Dr(e) : n === "de" ? Or(e) : n === "it" ? kr(e) : n === "pt" ? Ar(e) : n === "zh" ? jr(e) : n === "ja" ? Mr(e) : n === "ko" ? Nr(e) : n === "ru" ? Pr(e) : Tr(e);
}), Ir = () => "Priority support", Lr = () => "Support prioritaire", Rr = () => "Soporte prioritario", zr = () => "Prioritäts-Support", Br = () => "Supporto prioritario", Vr = () => "Suporte prioritário", Hr = () => "优先支持", Ur = () => "優先サポート", Wr = () => "우선 지원", Gr = () => "Приоритетная поддержка", Kr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Lr(e) : n === "es" ? Rr(e) : n === "de" ? zr(e) : n === "it" ? Br(e) : n === "pt" ? Vr(e) : n === "zh" ? Hr(e) : n === "ja" ? Ur(e) : n === "ko" ? Wr(e) : n === "ru" ? Gr(e) : Ir(e);
}), qr = () => "Private results", Jr = () => "Résultats privés", Yr = () => "Resultados privados", Xr = () => "Private Ergebnisse", Zr = () => "Risultati privati", Qr = () => "Resultados privados", $r = () => "私有结果", ei = () => "プライベート結果", ti = () => "결과 비공개", ni = () => "Приватные результаты", ri = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Jr(e) : n === "es" ? Yr(e) : n === "de" ? Xr(e) : n === "it" ? Zr(e) : n === "pt" ? Qr(e) : n === "zh" ? $r(e) : n === "ja" ? ei(e) : n === "ko" ? ti(e) : n === "ru" ? ni(e) : qr(e);
}), ii = () => "Pro", ai = () => "Pro", oi = () => "Pro", si = () => "Pro", ci = () => "Pro", li = () => "Pro", ui = () => "专业版", di = () => "プロ", fi = () => "프로", pi = () => "Pro", mi = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? ai(e) : n === "es" ? oi(e) : n === "de" ? si(e) : n === "it" ? ci(e) : n === "pt" ? li(e) : n === "zh" ? ui(e) : n === "ja" ? di(e) : n === "ko" ? fi(e) : n === "ru" ? pi(e) : ii(e);
}), hi = () => "Public results", gi = () => "Résultats publics", _i = () => "Resultados públicos", vi = () => "Öffentliche Ergebnisse", yi = () => "Risultati pubblici", bi = () => "Resultados públicos", xi = () => "公开结果", Si = () => "公開結果", Ci = () => "결과 공개", wi = () => "Публичные результаты", Ti = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? gi(e) : n === "es" ? _i(e) : n === "de" ? vi(e) : n === "it" ? yi(e) : n === "pt" ? bi(e) : n === "zh" ? xi(e) : n === "ja" ? Si(e) : n === "ko" ? Ci(e) : n === "ru" ? wi(e) : hi(e);
}), Ei = () => "SSO & SAML", Di = () => "SSO & SAML", Oi = () => "SSO y SAML", ki = () => "SSO & SAML", Ai = () => "SSO e SAML", ji = () => "SSO & SAML", Mi = () => "SSO 和 SAML", Ni = () => "SSO & SAML", Pi = () => "SSO 및 SAML", Fi = () => "SSO и SAML", Ii = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Di(e) : n === "es" ? Oi(e) : n === "de" ? ki(e) : n === "it" ? Ai(e) : n === "pt" ? ji(e) : n === "zh" ? Mi(e) : n === "ja" ? Ni(e) : n === "ko" ? Pi(e) : n === "ru" ? Fi(e) : Ei(e);
}), Li = () => "Starter", Ri = () => "Starter", zi = () => "Starter", Bi = () => "Starter", Vi = () => "Starter", Hi = () => "Starter", Ui = () => "入门版", Wi = () => "スターター", Gi = () => "스타터", Ki = () => "Starter", qi = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Ri(e) : n === "es" ? zi(e) : n === "de" ? Bi(e) : n === "it" ? Vi(e) : n === "pt" ? Hi(e) : n === "zh" ? Ui(e) : n === "ja" ? Wi(e) : n === "ko" ? Gi(e) : n === "ru" ? Ki(e) : Li(e);
}), Ji = () => "Training sessions", Yi = () => "Sessions de formation", Xi = () => "Sesiones de formación", Zi = () => "Schulungen", Qi = () => "Sessioni di formazione", $i = () => "Sessões de treinamento", ea = () => "培训课程", Z = () => "トレーニングセッション", ta = () => "교육 세션", na = () => "Сессии обучения", ra = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? Yi(e) : n === "es" ? Xi(e) : n === "de" ? Zi(e) : n === "it" ? Qi(e) : n === "pt" ? $i(e) : n === "zh" ? ea(e) : n === "ja" ? Z(e) : n === "ko" ? ta(e) : n === "ru" ? na(e) : Ji(e);
}), ia = () => "Unlimited runs", aa = () => "Passages illimités", oa = () => "Ejecuciones ilimitadas", sa = () => "Unbegrenzte Durchläufe", ca = () => "Esecuzioni illimitate", la = () => "Execuções ilimitadas", ua = () => "无限次运行", da = () => "無制限の実行", fa = () => "무제한 실행", pa = () => "Неограниченное количество запусков", ma = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "fr" ? aa(e) : n === "es" ? oa(e) : n === "de" ? sa(e) : n === "it" ? ca(e) : n === "pt" ? la(e) : n === "zh" ? ua(e) : n === "ja" ? da(e) : n === "ko" ? fa(e) : n === "ru" ? pa(e) : ia(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/pricing/PricingTiers.tsx";
function ha() {
	let e = [
		{
			name: qi(),
			price: wr(),
			period: fn(),
			features: [
				xe({ runs: "5" }),
				Gn({ libs: "3" }),
				Ue(),
				Ti()
			]
		},
		{
			name: mi(),
			price: Fr(),
			period: nr(),
			features: [
				ma(),
				W(),
				Kr(),
				ri(),
				Me(),
				Pn()
			],
			highlighted: !0
		},
		{
			name: X(),
			price: dt(),
			period: "",
			features: [
				en(),
				pr(),
				Ii(),
				Nt(),
				St(),
				ue(),
				ra()
			]
		}
	];
	return i("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: e.map((e) => i("div", {
			className: `flex flex-col rounded-lg border p-6 ${e.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				i("h3", {
					className: "text-lg font-semibold text-foreground",
					children: e.name
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 59,
					columnNumber: 11
				}, this),
				i("div", {
					className: "my-4",
					children: [i("span", {
						className: "text-3xl font-bold text-foreground",
						children: e.price
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 61,
						columnNumber: 13
					}, this), i("span", {
						className: "text-sm text-muted-foreground",
						children: e.period
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 62,
						columnNumber: 13
					}, this)]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 60,
					columnNumber: 11
				}, this),
				i("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: e.features.map((e) => i("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							i("span", {
								className: "text-primary",
								children: "✓"
							}, void 0, !1, {
								fileName: Q,
								lineNumber: 70,
								columnNumber: 17
							}, this),
							" ",
							e
						]
					}, e, !0, {
						fileName: Q,
						lineNumber: 66,
						columnNumber: 15
					}, this))
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 64,
					columnNumber: 11
				}, this),
				i("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${e.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: e.name === X() ? et() : Cn()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 74,
					columnNumber: 11
				}, this)
			]
		}, e.name, !0, {
			fileName: Q,
			lineNumber: 51,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 49,
		columnNumber: 5
	}, this);
}
function ga() {
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
function _a(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var va = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/AppProviders.tsx";
function ya({ children: o }) {
	let s = a().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		_a("AppRoot", c);
	}, [c]), e(() => {
		g(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		ga();
	}, []), i(r, { children: o }, void 0, !1, {
		fileName: va,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var ba = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/scripts/Wrapper.tsx";
function xa({ children: e }) {
	return i(ya, { children: e }, void 0, !1, {
		fileName: ba,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/pricing/PricingTiers.wrapper.tsx";
function Sa() {
	return i(xa, { children: i(ha, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Sa as default };
