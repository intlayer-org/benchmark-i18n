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
], d = [], f, p;
function te(e) {
	if (d.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (f === t) return p;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of d) if (new s(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return f = t, p = r, r;
}
function m(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : u;
}
var h = void 0, g = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var _, v = !1, y = () => {
	if (h) {
		let e = h?.getStore()?.locale;
		if (e) return e;
	}
	let e = u;
	!g && typeof window < "u" && window.location?.href && (e = m(window.location.href));
	let t = b(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return v || (_ = t, v = !0, S(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function b(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = w();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && _ !== void 0) n = _;
		else if (E(t) && T.has(t)) {
			let e = T.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ne(t);
			}
		}
		let e = C(n);
		if (e) return e;
	}
}
var x = (e) => {
	e ? window.location.href = e : window.location.reload();
}, S = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = y();
	} catch {}
	let i = [], a = u;
	!g && typeof window < "u" && window.location?.href && (a = m(window.location.href));
	for (let t of a) if (t === "globalVariable") _ = e;
	else if (t === "cookie") {
		if (g || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (E(t) && T.has(t)) {
		let n = T.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!g && n.reload && window.location && e !== r && x(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function C(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of c) if (e.toLowerCase() === t) return e;
}
function ne(e) {
	let t = C(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${c.join(", ")}`);
}
function w() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${l}=([^;]+)`))?.[2];
	return C(e);
}
var T = /* @__PURE__ */ new Map();
function E(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var D = () => "Starter", O = () => "Starter", k = () => "Starter", A = () => "Starter", j = () => "Starter", M = () => "Starter", N = () => "入门版", P = () => "スターター", F = () => "스타터", I = () => "Starter", L = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? D(e) : n === "fr" ? O(e) : n === "es" ? k(e) : n === "de" ? A(e) : n === "it" ? j(e) : n === "pt" ? M(e) : n === "zh" ? N(e) : n === "ja" ? P(e) : n === "ko" ? F(e) : I(e);
}), R = () => "$0", z = () => "0 €", B = () => "0 $", V = () => "0 $", H = () => "0 $", U = () => "0 $", W = () => "¥0", G = () => "¥0", K = () => "₩0", q = () => "0 $", J = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? R(e) : n === "fr" ? z(e) : n === "es" ? B(e) : n === "de" ? V(e) : n === "it" ? H(e) : n === "pt" ? U(e) : n === "zh" ? W(e) : n === "ja" ? G(e) : n === "ko" ? K(e) : q(e);
}), Y = () => "forever", X = () => "pour toujours", Z = () => "para siempre", re = () => "für immer", ie = () => "per sempre", ae = () => "para sempre", oe = () => "永久", se = () => "永久に", ce = () => "영원히", le = () => "навсегда", ue = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Y(e) : n === "fr" ? X(e) : n === "es" ? Z(e) : n === "de" ? re(e) : n === "it" ? ie(e) : n === "pt" ? ae(e) : n === "zh" ? oe(e) : n === "ja" ? se(e) : n === "ko" ? ce(e) : le(e);
}), de = (e) => `${e?.runs} benchmark runs/day`, fe = (e) => `${e?.runs} passages de benchmark / jour`, pe = (e) => `${e?.runs} ejecuciones de benchmark/día`, me = (e) => `${e?.runs} Benchmark-Durchläufe/Tag`, he = (e) => `${e?.runs} esecuzioni benchmark/giorno`, ge = (e) => `${e?.runs} execuções de benchmark por dia`, _e = (e) => `每天 ${e?.runs} 次基准测试运行`, ve = (e) => `1日あたり ${e?.runs} 回のベンチマーク実行`, ye = (e) => `하루 ${e?.runs}회 벤치마크 실행`, be = (e) => `${e?.runs} запусков бенчмарка в день`, xe = ((e, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? de(e) : n === "fr" ? fe(e) : n === "es" ? pe(e) : n === "de" ? me(e) : n === "it" ? he(e) : n === "pt" ? ge(e) : n === "zh" ? _e(e) : n === "ja" ? ve(e) : n === "ko" ? ye(e) : be(e);
}), Se = (e) => `${e?.libs} libraries`, Ce = (e) => `${e?.libs} bibliothèques`, we = (e) => `${e?.libs} bibliotecas`, Te = (e) => `${e?.libs} Bibliotheken`, Ee = (e) => `${e?.libs} librerie`, De = (e) => `${e?.libs} bibliotecas`, Oe = (e) => `${e?.libs} 个库`, ke = (e) => `${e?.libs} 個のライブラリ`, Ae = (e) => `${e?.libs}개 라이브러리`, je = (e) => `${e?.libs} библиотек`, Me = ((e, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Se(e) : n === "fr" ? Ce(e) : n === "es" ? we(e) : n === "de" ? Te(e) : n === "it" ? Ee(e) : n === "pt" ? De(e) : n === "zh" ? Oe(e) : n === "ja" ? ke(e) : n === "ko" ? Ae(e) : je(e);
}), Ne = () => "Community support", Pe = () => "Support communautaire", Fe = () => "Soporte de la comunidad", Ie = () => "Community-Support", Le = () => "Supporto della comunità", Re = () => "Suporte da comunidade", ze = () => "社区支持", Be = () => "コミュニティサポート", Ve = () => "커뮤니티 지원", He = () => "Сообщество поддержки", Ue = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Ne(e) : n === "fr" ? Pe(e) : n === "es" ? Fe(e) : n === "de" ? Ie(e) : n === "it" ? Le(e) : n === "pt" ? Re(e) : n === "zh" ? ze(e) : n === "ja" ? Be(e) : n === "ko" ? Ve(e) : He(e);
}), We = () => "Public results", Ge = () => "Résultats publics", Ke = () => "Resultados públicos", qe = () => "Öffentliche Ergebnisse", Je = () => "Risultati pubblici", Ye = () => "Resultados públicos", Xe = () => "公开结果", Ze = () => "公開結果", Qe = () => "결과 공개", $e = () => "Публичные результаты", et = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? We(e) : n === "fr" ? Ge(e) : n === "es" ? Ke(e) : n === "de" ? qe(e) : n === "it" ? Je(e) : n === "pt" ? Ye(e) : n === "zh" ? Xe(e) : n === "ja" ? Ze(e) : n === "ko" ? Qe(e) : $e(e);
}), tt = () => "Pro", nt = () => "Pro", rt = () => "Pro", it = () => "Pro", at = () => "Pro", ot = () => "Pro", st = () => "专业版", ct = () => "プロ", lt = () => "프로", ut = () => "Pro", dt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? tt(e) : n === "fr" ? nt(e) : n === "es" ? rt(e) : n === "de" ? it(e) : n === "it" ? at(e) : n === "pt" ? ot(e) : n === "zh" ? st(e) : n === "ja" ? ct(e) : n === "ko" ? lt(e) : ut(e);
}), ft = () => "$29", pt = () => "29 €", mt = () => "29 $", ht = () => "29 $", gt = () => "29 $", _t = () => "29 $", vt = () => "¥199", yt = () => "¥3,500", bt = () => "₩39,000", xt = () => "29 $", St = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? ft(e) : n === "fr" ? pt(e) : n === "es" ? mt(e) : n === "de" ? ht(e) : n === "it" ? gt(e) : n === "pt" ? _t(e) : n === "zh" ? vt(e) : n === "ja" ? yt(e) : n === "ko" ? bt(e) : xt(e);
}), Ct = () => "/month", wt = () => "/ mois", Tt = () => "/mes", Et = () => "/Monat", Dt = () => "/mese", Ot = () => "/mês", kt = () => "/月", At = () => "/月", jt = () => "/월", Mt = () => "/месяц", Nt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Ct(e) : n === "fr" ? wt(e) : n === "es" ? Tt(e) : n === "de" ? Et(e) : n === "it" ? Dt(e) : n === "pt" ? Ot(e) : n === "zh" ? kt(e) : n === "ja" ? At(e) : n === "ko" ? jt(e) : Mt(e);
}), Pt = () => "Unlimited runs", Ft = () => "Passages illimités", It = () => "Ejecuciones ilimitadas", Lt = () => "Unbegrenzte Durchläufe", Rt = () => "Esecuzioni illimitate", zt = () => "Execuções ilimitadas", Bt = () => "无限次运行", Vt = () => "無制限の実行", Ht = () => "무제한 실행", Ut = () => "Неограниченное количество запусков", Wt = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Pt(e) : n === "fr" ? Ft(e) : n === "es" ? It(e) : n === "de" ? Lt(e) : n === "it" ? Rt(e) : n === "pt" ? zt(e) : n === "zh" ? Bt(e) : n === "ja" ? Vt(e) : n === "ko" ? Ht(e) : Ut(e);
}), Gt = () => "All libraries", Kt = () => "Toutes les bibliothèques", qt = () => "Todas las bibliotecas", Jt = () => "Alle Bibliotheken", Yt = () => "Tutte le librerie", Xt = () => "Todas as bibliotecas", Zt = () => "所有库", Qt = () => "すべてのライブラリ", $t = () => "모든 라이브러리", en = () => "Все библиотеки", tn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Gt(e) : n === "fr" ? Kt(e) : n === "es" ? qt(e) : n === "de" ? Jt(e) : n === "it" ? Yt(e) : n === "pt" ? Xt(e) : n === "zh" ? Zt(e) : n === "ja" ? Qt(e) : n === "ko" ? $t(e) : en(e);
}), nn = () => "Priority support", rn = () => "Support prioritaire", an = () => "Soporte prioritario", on = () => "Prioritäts-Support", sn = () => "Supporto prioritario", cn = () => "Suporte prioritário", ln = () => "优先支持", un = () => "優先サポート", dn = () => "우선 지원", fn = () => "Приоритетная поддержка", pn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? nn(e) : n === "fr" ? rn(e) : n === "es" ? an(e) : n === "de" ? on(e) : n === "it" ? sn(e) : n === "pt" ? cn(e) : n === "zh" ? ln(e) : n === "ja" ? un(e) : n === "ko" ? dn(e) : fn(e);
}), mn = () => "Private results", hn = () => "Résultats privés", gn = () => "Resultados privados", _n = () => "Private Ergebnisse", vn = () => "Risultati privati", yn = () => "Resultados privados", bn = () => "私有结果", xn = () => "プライベート結果", Sn = () => "결과 비공개", Cn = () => "Приватные результаты", wn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? mn(e) : n === "fr" ? hn(e) : n === "es" ? gn(e) : n === "de" ? _n(e) : n === "it" ? vn(e) : n === "pt" ? yn(e) : n === "zh" ? bn(e) : n === "ja" ? xn(e) : n === "ko" ? Sn(e) : Cn(e);
}), Tn = () => "CI integration", En = () => "Intégration CI", Dn = () => "Integración CI", On = () => "CI-Integration", kn = () => "Integrazione CI", An = () => "Integração CI", jn = () => "CI 集成", Mn = () => "CI統合", Nn = () => "CI 통합", Pn = () => "Интеграция с CI", Fn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Tn(e) : n === "fr" ? En(e) : n === "es" ? Dn(e) : n === "de" ? On(e) : n === "it" ? kn(e) : n === "pt" ? An(e) : n === "zh" ? jn(e) : n === "ja" ? Mn(e) : n === "ko" ? Nn(e) : Pn(e);
}), In = () => "Historical data", Ln = () => "Données historiques", Rn = () => "Datos históricos", zn = () => "Historische Daten", Bn = () => "Dati storici", Vn = () => "Dados históricos", Hn = () => "历史数据", Un = () => "履歴データ", Wn = () => "기록 데이터", Gn = () => "Исторические данные", Kn = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? In(e) : n === "fr" ? Ln(e) : n === "es" ? Rn(e) : n === "de" ? zn(e) : n === "it" ? Bn(e) : n === "pt" ? Vn(e) : n === "zh" ? Hn(e) : n === "ja" ? Un(e) : n === "ko" ? Wn(e) : Gn(e);
}), qn = () => "Enterprise", Jn = () => "Enterprise", Yn = () => "Enterprise", Xn = () => "Enterprise", Zn = () => "Enterprise", Qn = () => "Enterprise", $n = () => "企业版", er = () => "エンタープライズ", tr = () => "엔터프라이즈", nr = () => "Корпоративный", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? qn(e) : n === "fr" ? Jn(e) : n === "es" ? Yn(e) : n === "de" ? Xn(e) : n === "it" ? Zn(e) : n === "pt" ? Qn(e) : n === "zh" ? $n(e) : n === "ja" ? er(e) : n === "ko" ? tr(e) : nr(e);
}), rr = () => "Custom", ir = () => "Sur mesure", ar = () => "Personalizado", or = () => "Individuell", sr = () => "Personalizzato", cr = () => "Personalizado", lr = () => "定制", ur = () => "カスタム", dr = () => "커스텀", fr = () => "Индивидуальная цена", pr = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? rr(e) : n === "fr" ? ir(e) : n === "es" ? ar(e) : n === "de" ? or(e) : n === "it" ? sr(e) : n === "pt" ? cr(e) : n === "zh" ? lr(e) : n === "ja" ? ur(e) : n === "ko" ? dr(e) : fr(e);
}), mr = () => "Everything in Pro", hr = () => "Tout ce qui est dans Pro", gr = () => "Todo lo que hay en Pro", _r = () => "Alles in Pro", vr = () => "Tutto quello che c'è in Pro", yr = () => "Tudo o que está no Pro", br = () => "包含专业版所有功能", xr = () => "Proプランの全機能", Sr = () => "Pro의 모든 기능 포함", Cr = () => "Все возможности Pro", wr = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? mr(e) : n === "fr" ? hr(e) : n === "es" ? gr(e) : n === "de" ? _r(e) : n === "it" ? vr(e) : n === "pt" ? yr(e) : n === "zh" ? br(e) : n === "ja" ? xr(e) : n === "ko" ? Sr(e) : Cr(e);
}), Tr = () => "On-premise option", Er = () => "Option sur site (on-premise)", Dr = () => "Opción on-premise", Or = () => "On-Premise-Option", kr = () => "Opzione in locale", Ar = () => "Opção on-premise", jr = () => "本地部署选项", Mr = () => "オンプレミスオプション", Nr = () => "온프레미스 옵션", Pr = () => "Локальное развертывание", Fr = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Tr(e) : n === "fr" ? Er(e) : n === "es" ? Dr(e) : n === "de" ? Or(e) : n === "it" ? kr(e) : n === "pt" ? Ar(e) : n === "zh" ? jr(e) : n === "ja" ? Mr(e) : n === "ko" ? Nr(e) : Pr(e);
}), Ir = () => "SSO & SAML", Lr = () => "SSO & SAML", Rr = () => "SSO y SAML", zr = () => "SSO & SAML", Br = () => "SSO e SAML", Vr = () => "SSO & SAML", Hr = () => "SSO 和 SAML", Ur = () => "SSO & SAML", Wr = () => "SSO 및 SAML", Gr = () => "SSO и SAML", Kr = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Ir(e) : n === "fr" ? Lr(e) : n === "es" ? Rr(e) : n === "de" ? zr(e) : n === "it" ? Br(e) : n === "pt" ? Vr(e) : n === "zh" ? Hr(e) : n === "ja" ? Ur(e) : n === "ko" ? Wr(e) : Gr(e);
}), qr = () => "Dedicated account manager", Jr = () => "Gestionnaire de compte dédié", Yr = () => "Gestor de cuentas dedicado", Xr = () => "Dedizierter Account-Manager", Zr = () => "Account manager dedicato", Qr = () => "Gerente de conta dedicado", $r = () => "专属客户经理", ei = () => "専任のアカウントマネージャー", ti = () => "전담 어카운트 매니저", ni = () => "Выделенный менеджер", ri = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? qr(e) : n === "fr" ? Jr(e) : n === "es" ? Yr(e) : n === "de" ? Xr(e) : n === "it" ? Zr(e) : n === "pt" ? Qr(e) : n === "zh" ? $r(e) : n === "ja" ? ei(e) : n === "ko" ? ti(e) : ni(e);
}), ii = () => "Custom SLAs", ai = () => "SLA personnalisés", oi = () => "SLA personalizados", si = () => "Individuelle SLAs", ci = () => "SLA personalizzati", li = () => "SLAs personalizados", ui = () => "定制 SLA", di = () => "カスタムSLA", fi = () => "맞춤형 SLA", pi = () => "Индивидуальные SLA", mi = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? ii(e) : n === "fr" ? ai(e) : n === "es" ? oi(e) : n === "de" ? si(e) : n === "it" ? ci(e) : n === "pt" ? li(e) : n === "zh" ? ui(e) : n === "ja" ? di(e) : n === "ko" ? fi(e) : pi(e);
}), hi = () => "Audit logs", gi = () => "Journaux d'audit", _i = () => "Registros de auditoría", vi = () => "Audit-Logs", yi = () => "Registri di controllo", bi = () => "Logs de auditoria", xi = () => "审计日志", Si = () => "監査ログ", Ci = () => "감사 로그", wi = () => "Журналы аудита", Ti = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? hi(e) : n === "fr" ? gi(e) : n === "es" ? _i(e) : n === "de" ? vi(e) : n === "it" ? yi(e) : n === "pt" ? bi(e) : n === "zh" ? xi(e) : n === "ja" ? Si(e) : n === "ko" ? Ci(e) : wi(e);
}), Ei = () => "Training sessions", Di = () => "Sessions de formation", Oi = () => "Sesiones de formación", ki = () => "Schulungen", Ai = () => "Sessioni di formazione", ji = () => "Sessões de treinamento", Mi = () => "培训课程", Ni = () => "トレーニングセッション", Pi = () => "교육 세션", Fi = () => "Сессии обучения", Ii = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Ei(e) : n === "fr" ? Di(e) : n === "es" ? Oi(e) : n === "de" ? ki(e) : n === "it" ? Ai(e) : n === "pt" ? ji(e) : n === "zh" ? Mi(e) : n === "ja" ? Ni(e) : n === "ko" ? Pi(e) : Fi(e);
}), Li = () => "Contact Sales", Ri = () => "Contacter le service commercial", $ = () => "Contactar con ventas", zi = () => "Vertrieb kontaktieren", Bi = () => "Contatta l'ufficio vendite", Vi = () => "Contatar Vendas", Hi = () => "联系销售", Ui = () => "営業に連絡", Wi = () => "영업팀 문의", Gi = () => "Связаться с отделом продаж", Ki = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? Li(e) : n === "fr" ? Ri(e) : n === "es" ? $(e) : n === "de" ? zi(e) : n === "it" ? Bi(e) : n === "pt" ? Vi(e) : n === "zh" ? Hi(e) : n === "ja" ? Ui(e) : n === "ko" ? Wi(e) : Gi(e);
}), qi = () => "Get Started", Ji = () => "Démarrer", Yi = () => "Empezar", Xi = () => "Jetzt starten", Zi = () => "Inizia ora", Qi = () => "Começar", $i = () => "立即开始", ea = () => "今すぐ始める", ta = () => "시작하기", na = () => "Начать", ra = ((e = {}, t = {}) => {
	let n = t.locale ?? y();
	return n === "en" ? qi(e) : n === "fr" ? Ji(e) : n === "es" ? Yi(e) : n === "de" ? Xi(e) : n === "it" ? Zi(e) : n === "pt" ? Qi(e) : n === "zh" ? $i(e) : n === "ja" ? ea(e) : n === "ko" ? ta(e) : na(e);
});
function ia() {
	return i("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: [
			{
				name: L(),
				price: J(),
				period: ue(),
				features: [
					xe({ runs: "5" }),
					Me({ libs: "3" }),
					Ue(),
					et()
				]
			},
			{
				name: dt(),
				price: St(),
				period: Nt(),
				features: [
					Wt(),
					tn(),
					pn(),
					wn(),
					Fn(),
					Kn()
				],
				highlighted: !0
			},
			{
				name: Q(),
				price: pr(),
				period: "",
				features: [
					wr(),
					Fr(),
					Kr(),
					ri(),
					mi(),
					Ti(),
					Ii()
				]
			}
		].map((e) => a("div", {
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
					children: e.name === Q() ? Ki() : ra()
				})
			]
		}, e.name))
	});
}
function aa() {
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
function oa(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function sa({ children: a }) {
	let s = o().locale ?? "en", [c] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		oa("AppRoot", c);
	}, [c]), e(() => {
		S(s, { reload: !1 }), document.documentElement.lang = s;
	}, [s]), e(() => {
		aa();
	}, []), i(r, { children: a });
}
function ca({ children: e }) {
	return i(sa, { children: e });
}
function la() {
	return i(ca, { children: i(ia, {}) });
}
export { la as default };
