import "react";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
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
	if (t) return d || (u = t, d = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function p(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = w();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && u !== void 0) n = u;
		else if (M(t) && j.has(t)) {
			let e = j.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return te(t);
			}
		}
		let e = g(n);
		if (e) return e;
	}
}
var ee = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
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
		document.cookie = t, C();
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
		!l && n.reload && window.location && e !== r && ee(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		d();
	});
	d();
}, h = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function g(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function te(e) {
	let t = g(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function _(e) {
	return e;
}
function v(e, t) {
	return e.exec(t.href);
}
var y = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function ne() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function w() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = g(e), ne(), S;
}
function T(e) {
	return E(e);
}
function E(e) {
	let t = _(typeof e == "string" ? new URL(e, h()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && g(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var D, O;
function k(e) {
	if (c.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (D === t) return O;
	let n = _(new URL(t, "http://example.com")), i = T(n), a = i.href === n.href ? [n] : [n, i], o;
	for (let e of a) {
		for (let t of c) if (v(new r(t.match, e.href), e)) {
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
var N = () => "All libraries", P = () => "Toutes les bibliothèques", F = () => "Todas las bibliotecas", I = () => "Alle Bibliotheken", L = () => "Tutte le librerie", R = () => "Todas as bibliotecas", z = () => "所有库", B = () => "すべてのライブラリ", V = () => "모든 라이브러리", H = () => "Все библиотеки", U = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? P(e) : n === "es" ? F(e) : n === "de" ? I(e) : n === "it" ? L(e) : n === "pt" ? R(e) : n === "zh" ? z(e) : n === "ja" ? B(e) : n === "ko" ? V(e) : n === "ru" ? H(e) : N(e);
}), W = () => "Audit logs", G = () => "Journaux d'audit", K = () => "Registros de auditoría", q = () => "Audit-Logs", J = () => "Registri di controllo", Y = () => "Logs de auditoria", X = () => "审计日志", Z = () => "監査ログ", re = () => "감사 로그", ie = () => "Журналы аудита", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? G(e) : n === "es" ? K(e) : n === "de" ? q(e) : n === "it" ? J(e) : n === "pt" ? Y(e) : n === "zh" ? X(e) : n === "ja" ? Z(e) : n === "ko" ? re(e) : n === "ru" ? ie(e) : W(e);
}), oe = (e) => `${e?.runs} benchmark runs/day`, se = (e) => `${e?.runs} passages de benchmark / jour`, ce = (e) => `${e?.runs} ejecuciones de benchmark/día`, le = (e) => `${e?.runs} Benchmark-Durchläufe/Tag`, ue = (e) => `${e?.runs} esecuzioni benchmark/giorno`, de = (e) => `${e?.runs} execuções de benchmark por dia`, fe = (e) => `每天 ${e?.runs} 次基准测试运行`, pe = (e) => `1日あたり ${e?.runs} 回のベンチマーク実行`, me = (e) => `하루 ${e?.runs}회 벤치마크 실행`, he = (e) => `${e?.runs} запусков бенчмарка в день`, ge = ((e, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : n === "ru" ? he(e) : oe(e);
}), _e = () => "CI integration", ve = () => "Intégration CI", ye = () => "Integración CI", be = () => "CI-Integration", xe = () => "Integrazione CI", Se = () => "Integração CI", Ce = () => "CI 集成", we = () => "CI統合", Te = () => "CI 통합", Ee = () => "Интеграция с CI", De = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : n === "ru" ? Ee(e) : _e(e);
}), Oe = () => "Community support", ke = () => "Support communautaire", Ae = () => "Soporte de la comunidad", je = () => "Community-Support", Me = () => "Supporto della comunità", Ne = () => "Suporte da comunidade", Pe = () => "社区支持", Fe = () => "コミュニティサポート", Ie = () => "커뮤니티 지원", Le = () => "Сообщество поддержки", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : n === "ru" ? Le(e) : Oe(e);
}), ze = () => "Contact Sales", Be = () => "Contacter le service commercial", Ve = () => "Contactar con ventas", He = () => "Vertrieb kontaktieren", Ue = () => "Contatta l'ufficio vendite", We = () => "Contatar Vendas", Ge = () => "联系销售", Ke = () => "営業に連絡", qe = () => "영업팀 문의", Je = () => "Связаться с отделом продаж", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Be(e) : n === "es" ? Ve(e) : n === "de" ? He(e) : n === "it" ? Ue(e) : n === "pt" ? We(e) : n === "zh" ? Ge(e) : n === "ja" ? Ke(e) : n === "ko" ? qe(e) : n === "ru" ? Je(e) : ze(e);
}), Xe = () => "Custom", Ze = () => "Sur mesure", Qe = () => "Personalizado", $e = () => "Individuell", et = () => "Personalizzato", tt = () => "Personalizado", nt = () => "定制", rt = () => "カスタム", it = () => "커스텀", at = () => "Индивидуальная цена", ot = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : n === "ru" ? at(e) : Xe(e);
}), st = () => "Custom SLAs", ct = () => "SLA personnalisés", lt = () => "SLA personalizados", ut = () => "Individuelle SLAs", dt = () => "SLA personalizzati", ft = () => "SLAs personalizados", pt = () => "定制 SLA", mt = () => "カスタムSLA", ht = () => "맞춤형 SLA", gt = () => "Индивидуальные SLA", _t = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ct(e) : n === "es" ? lt(e) : n === "de" ? ut(e) : n === "it" ? dt(e) : n === "pt" ? ft(e) : n === "zh" ? pt(e) : n === "ja" ? mt(e) : n === "ko" ? ht(e) : n === "ru" ? gt(e) : st(e);
}), vt = () => "Dedicated account manager", yt = () => "Gestionnaire de compte dédié", bt = () => "Gestor de cuentas dedicado", xt = () => "Dedizierter Account-Manager", St = () => "Account manager dedicato", Ct = () => "Gerente de conta dedicado", wt = () => "专属客户经理", Tt = () => "専任のアカウントマネージャー", Et = () => "전담 어카운트 매니저", Dt = () => "Выделенный менеджер", Ot = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? yt(e) : n === "es" ? bt(e) : n === "de" ? xt(e) : n === "it" ? St(e) : n === "pt" ? Ct(e) : n === "zh" ? wt(e) : n === "ja" ? Tt(e) : n === "ko" ? Et(e) : n === "ru" ? Dt(e) : vt(e);
}), kt = () => "Enterprise", At = () => "Enterprise", jt = () => "Enterprise", Mt = () => "Enterprise", Nt = () => "Enterprise", Pt = () => "Enterprise", Ft = () => "企业版", It = () => "エンタープライズ", Lt = () => "엔터프라이즈", Rt = () => "Корпоративный", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? At(e) : n === "es" ? jt(e) : n === "de" ? Mt(e) : n === "it" ? Nt(e) : n === "pt" ? Pt(e) : n === "zh" ? Ft(e) : n === "ja" ? It(e) : n === "ko" ? Lt(e) : n === "ru" ? Rt(e) : kt(e);
}), zt = () => "Everything in Pro", Bt = () => "Tout ce qui est dans Pro", Vt = () => "Todo lo que hay en Pro", Ht = () => "Alles in Pro", Ut = () => "Tutto quello che c'è in Pro", Wt = () => "Tudo o que está no Pro", Gt = () => "包含专业版所有功能", Kt = () => "Proプランの全機能", qt = () => "Pro의 모든 기능 포함", Jt = () => "Все возможности Pro", Yt = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Bt(e) : n === "es" ? Vt(e) : n === "de" ? Ht(e) : n === "it" ? Ut(e) : n === "pt" ? Wt(e) : n === "zh" ? Gt(e) : n === "ja" ? Kt(e) : n === "ko" ? qt(e) : n === "ru" ? Jt(e) : zt(e);
}), Xt = () => "forever", Zt = () => "pour toujours", Qt = () => "para siempre", $t = () => "für immer", en = () => "per sempre", tn = () => "para sempre", nn = () => "永久", rn = () => "永久に", an = () => "영원히", on = () => "навсегда", sn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Zt(e) : n === "es" ? Qt(e) : n === "de" ? $t(e) : n === "it" ? en(e) : n === "pt" ? tn(e) : n === "zh" ? nn(e) : n === "ja" ? rn(e) : n === "ko" ? an(e) : n === "ru" ? on(e) : Xt(e);
}), cn = () => "Get Started", ln = () => "Démarrer", un = () => "Empezar", dn = () => "Jetzt starten", fn = () => "Inizia ora", pn = () => "Começar", mn = () => "立即开始", hn = () => "今すぐ始める", gn = () => "시작하기", _n = () => "Начать", vn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ln(e) : n === "es" ? un(e) : n === "de" ? dn(e) : n === "it" ? fn(e) : n === "pt" ? pn(e) : n === "zh" ? mn(e) : n === "ja" ? hn(e) : n === "ko" ? gn(e) : n === "ru" ? _n(e) : cn(e);
}), yn = () => "Historical data", bn = () => "Données historiques", xn = () => "Datos históricos", Sn = () => "Historische Daten", Cn = () => "Dati storici", wn = () => "Dados históricos", Tn = () => "历史数据", En = () => "履歴データ", Dn = () => "기록 데이터", On = () => "Исторические данные", kn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? bn(e) : n === "es" ? xn(e) : n === "de" ? Sn(e) : n === "it" ? Cn(e) : n === "pt" ? wn(e) : n === "zh" ? Tn(e) : n === "ja" ? En(e) : n === "ko" ? Dn(e) : n === "ru" ? On(e) : yn(e);
}), An = (e) => `${e?.libs} libraries`, jn = (e) => `${e?.libs} bibliothèques`, Mn = (e) => `${e?.libs} bibliotecas`, Nn = (e) => `${e?.libs} Bibliotheken`, Pn = (e) => `${e?.libs} librerie`, Fn = (e) => `${e?.libs} bibliotecas`, In = (e) => `${e?.libs} 个库`, Ln = (e) => `${e?.libs} 個のライブラリ`, Rn = (e) => `${e?.libs}개 라이브러리`, zn = (e) => `${e?.libs} библиотек`, Bn = ((e, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? jn(e) : n === "es" ? Mn(e) : n === "de" ? Nn(e) : n === "it" ? Pn(e) : n === "pt" ? Fn(e) : n === "zh" ? In(e) : n === "ja" ? Ln(e) : n === "ko" ? Rn(e) : n === "ru" ? zn(e) : An(e);
}), Vn = () => "/month", Hn = () => "/ mois", Un = () => "/mes", Wn = () => "/Monat", Gn = () => "/mese", Kn = () => "/mês", qn = () => "/月", Jn = () => "/月", Yn = () => "/월", Xn = () => "/месяц", Zn = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Hn(e) : n === "es" ? Un(e) : n === "de" ? Wn(e) : n === "it" ? Gn(e) : n === "pt" ? Kn(e) : n === "zh" ? qn(e) : n === "ja" ? Jn(e) : n === "ko" ? Yn(e) : n === "ru" ? Xn(e) : Vn(e);
}), Qn = () => "On-premise option", $n = () => "Option sur site (on-premise)", er = () => "Opción on-premise", tr = () => "On-Premise-Option", nr = () => "Opzione in locale", rr = () => "Opção on-premise", ir = () => "本地部署选项", ar = () => "オンプレミスオプション", or = () => "온프레미스 옵션", sr = () => "Локальное развертывание", cr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? $n(e) : n === "es" ? er(e) : n === "de" ? tr(e) : n === "it" ? nr(e) : n === "pt" ? rr(e) : n === "zh" ? ir(e) : n === "ja" ? ar(e) : n === "ko" ? or(e) : n === "ru" ? sr(e) : Qn(e);
}), lr = () => "$0", ur = () => "0 €", dr = () => "0 $", fr = () => "0 $", pr = () => "0 $", mr = () => "0 $", hr = () => "¥0", gr = () => "¥0", _r = () => "₩0", vr = () => "0 $", yr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ur(e) : n === "es" ? dr(e) : n === "de" ? fr(e) : n === "it" ? pr(e) : n === "pt" ? mr(e) : n === "zh" ? hr(e) : n === "ja" ? gr(e) : n === "ko" ? _r(e) : n === "ru" ? vr(e) : lr(e);
}), br = () => "$29", xr = () => "29 €", Sr = () => "29 $", Cr = () => "29 $", wr = () => "29 $", Tr = () => "29 $", Er = () => "¥199", Dr = () => "¥3,500", Or = () => "₩39,000", kr = () => "29 $", Ar = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? xr(e) : n === "es" ? Sr(e) : n === "de" ? Cr(e) : n === "it" ? wr(e) : n === "pt" ? Tr(e) : n === "zh" ? Er(e) : n === "ja" ? Dr(e) : n === "ko" ? Or(e) : n === "ru" ? kr(e) : br(e);
}), jr = () => "Priority support", Mr = () => "Support prioritaire", Nr = () => "Soporte prioritario", Pr = () => "Prioritäts-Support", Fr = () => "Supporto prioritario", Ir = () => "Suporte prioritário", Lr = () => "优先支持", Rr = () => "優先サポート", zr = () => "우선 지원", Br = () => "Приоритетная поддержка", Vr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Mr(e) : n === "es" ? Nr(e) : n === "de" ? Pr(e) : n === "it" ? Fr(e) : n === "pt" ? Ir(e) : n === "zh" ? Lr(e) : n === "ja" ? Rr(e) : n === "ko" ? zr(e) : n === "ru" ? Br(e) : jr(e);
}), Hr = () => "Private results", Ur = () => "Résultats privés", Wr = () => "Resultados privados", Gr = () => "Private Ergebnisse", Kr = () => "Risultati privati", qr = () => "Resultados privados", Jr = () => "私有结果", Yr = () => "プライベート結果", Xr = () => "결과 비공개", Zr = () => "Приватные результаты", Qr = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ur(e) : n === "es" ? Wr(e) : n === "de" ? Gr(e) : n === "it" ? Kr(e) : n === "pt" ? qr(e) : n === "zh" ? Jr(e) : n === "ja" ? Yr(e) : n === "ko" ? Xr(e) : n === "ru" ? Zr(e) : Hr(e);
}), $r = () => "Pro", ei = () => "Pro", ti = () => "Pro", ni = () => "Pro", ri = () => "Pro", ii = () => "Pro", ai = () => "专业版", oi = () => "プロ", si = () => "프로", ci = () => "Pro", li = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ei(e) : n === "es" ? ti(e) : n === "de" ? ni(e) : n === "it" ? ri(e) : n === "pt" ? ii(e) : n === "zh" ? ai(e) : n === "ja" ? oi(e) : n === "ko" ? si(e) : n === "ru" ? ci(e) : $r(e);
}), ui = () => "Public results", di = () => "Résultats publics", fi = () => "Resultados públicos", pi = () => "Öffentliche Ergebnisse", mi = () => "Risultati pubblici", hi = () => "Resultados públicos", gi = () => "公开结果", _i = () => "公開結果", vi = () => "결과 공개", yi = () => "Публичные результаты", bi = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? di(e) : n === "es" ? fi(e) : n === "de" ? pi(e) : n === "it" ? mi(e) : n === "pt" ? hi(e) : n === "zh" ? gi(e) : n === "ja" ? _i(e) : n === "ko" ? vi(e) : n === "ru" ? yi(e) : ui(e);
}), xi = () => "SSO & SAML", Si = () => "SSO & SAML", Ci = () => "SSO y SAML", wi = () => "SSO & SAML", Ti = () => "SSO e SAML", Ei = () => "SSO & SAML", Di = () => "SSO 和 SAML", Oi = () => "SSO & SAML", ki = () => "SSO 및 SAML", Ai = () => "SSO и SAML", ji = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Si(e) : n === "es" ? Ci(e) : n === "de" ? wi(e) : n === "it" ? Ti(e) : n === "pt" ? Ei(e) : n === "zh" ? Di(e) : n === "ja" ? Oi(e) : n === "ko" ? ki(e) : n === "ru" ? Ai(e) : xi(e);
}), Mi = () => "Starter", Ni = () => "Starter", Pi = () => "Starter", Fi = () => "Starter", Ii = () => "Starter", Li = () => "Starter", Ri = () => "入门版", zi = () => "スターター", Bi = () => "스타터", Vi = () => "Starter", Hi = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Ni(e) : n === "es" ? Pi(e) : n === "de" ? Fi(e) : n === "it" ? Ii(e) : n === "pt" ? Li(e) : n === "zh" ? Ri(e) : n === "ja" ? zi(e) : n === "ko" ? Bi(e) : n === "ru" ? Vi(e) : Mi(e);
}), Ui = () => "Training sessions", Wi = () => "Sessions de formation", Gi = () => "Sesiones de formación", $ = () => "Schulungen", Ki = () => "Sessioni di formazione", qi = () => "Sessões de treinamento", Ji = () => "培训课程", Yi = () => "トレーニングセッション", Xi = () => "교육 세션", Zi = () => "Сессии обучения", Qi = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? Wi(e) : n === "es" ? Gi(e) : n === "de" ? $(e) : n === "it" ? Ki(e) : n === "pt" ? qi(e) : n === "zh" ? Ji(e) : n === "ja" ? Yi(e) : n === "ko" ? Xi(e) : n === "ru" ? Zi(e) : Ui(e);
}), $i = () => "Unlimited runs", ea = () => "Passages illimités", ta = () => "Ejecuciones ilimitadas", na = () => "Unbegrenzte Durchläufe", ra = () => "Esecuzioni illimitate", ia = () => "Execuções ilimitadas", aa = () => "无限次运行", oa = () => "無制限の実行", sa = () => "무제한 실행", ca = () => "Неограниченное количество запусков", la = ((e = {}, t = {}) => {
	let n = t.locale ?? f();
	return n === "fr" ? ea(e) : n === "es" ? ta(e) : n === "de" ? na(e) : n === "it" ? ra(e) : n === "pt" ? ia(e) : n === "zh" ? aa(e) : n === "ja" ? oa(e) : n === "ko" ? sa(e) : n === "ru" ? ca(e) : $i(e);
});
function ua() {
	let e = [
		{
			name: Hi(),
			price: yr(),
			period: sn(),
			features: [
				ge({ runs: "5" }),
				Bn({ libs: "3" }),
				Re(),
				bi()
			]
		},
		{
			name: li(),
			price: Ar(),
			period: Zn(),
			features: [
				la(),
				U(),
				Vr(),
				Qr(),
				De(),
				kn()
			],
			highlighted: !0
		},
		{
			name: Q(),
			price: ot(),
			period: "",
			features: [
				Yt(),
				cr(),
				ji(),
				Ot(),
				_t(),
				ae(),
				Qi()
			]
		}
	];
	return t("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: e.map((e) => n("div", {
			className: `flex flex-col rounded-lg border p-6 ${e.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				t("h3", {
					className: "text-lg font-semibold text-foreground",
					children: e.name
				}),
				n("div", {
					className: "my-4",
					children: [t("span", {
						className: "text-3xl font-bold text-foreground",
						children: e.price
					}), t("span", {
						className: "text-sm text-muted-foreground",
						children: e.period
					})]
				}),
				t("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: e.features.map((e) => n("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							t("span", {
								className: "text-primary",
								children: "✓"
							}),
							" ",
							e
						]
					}, e))
				}),
				t("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${e.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: e.name === Q() ? Ye() : vn()
				})
			]
		}, e.name))
	});
}
m("en", { reload: !1 });
function da({ children: n }) {
	return t(e, { children: n });
}
function fa() {
	return t(da, { children: t(ua, {}) });
}
export { fa as default };
