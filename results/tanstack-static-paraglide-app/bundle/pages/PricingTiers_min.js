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
], a = "PARAGLIDE_LOCALE", ee = 3456e4, o = [
	"cookie",
	"globalVariable",
	"baseLocale"
], s = [], c, l;
function te(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (c === t) return l;
	let n = new URL(t, "http://dummy.com"), i;
	for (let e of s) if (new r(e.match, n.href).exec(n.href)) {
		i = e;
		break;
	}
	return c = t, l = i, i;
}
function u(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var d = void 0;
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var f, p = !1, m = () => {
	if (d) {
		let e = d?.getStore()?.locale;
		if (e) return e;
	}
	let e = o;
	typeof window < "u" && window.location?.href && (e = u(window.location.href));
	let t = h(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return p || (f = t, p = !0, _(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function h(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = y();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && f !== void 0) n = f;
		else if (x(t) && b.has(t)) {
			let e = b.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ne(t);
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
		r = m();
	} catch {}
	let i = [], s = o;
	typeof window < "u" && window.location?.href && (s = u(window.location.href));
	for (let t of s) if (t === "globalVariable") f = e;
	else if (t === "cookie") {
		if (typeof document > "u" || typeof window > "u") continue;
		let t = `${a}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (x(t) && b.has(t)) {
		let n = b.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let c = () => {
		n.reload && window.location && e !== r && g(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		c();
	});
	c();
};
function v(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of i) if (e.toLowerCase() === t) return e;
}
function ne(e) {
	let t = v(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${i.join(", ")}`);
}
function y() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${a}=([^;]+)`))?.[2];
	return v(e);
}
var b = /* @__PURE__ */ new Map();
function x(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var S = () => "Starter", C = () => "Starter", w = () => "Starter", T = () => "Starter", E = () => "Starter", D = () => "Starter", O = () => "入门版", k = () => "スターター", A = () => "스타터", j = () => "Starter", M = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? S(e) : n === "fr" ? C(e) : n === "es" ? w(e) : n === "de" ? T(e) : n === "it" ? E(e) : n === "pt" ? D(e) : n === "zh" ? O(e) : n === "ja" ? k(e) : n === "ko" ? A(e) : j(e);
}), N = () => "$0", P = () => "0 €", F = () => "0 $", I = () => "0 $", L = () => "0 $", R = () => "0 $", z = () => "¥0", B = () => "¥0", V = () => "₩0", H = () => "0 $", U = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? N(e) : n === "fr" ? P(e) : n === "es" ? F(e) : n === "de" ? I(e) : n === "it" ? L(e) : n === "pt" ? R(e) : n === "zh" ? z(e) : n === "ja" ? B(e) : n === "ko" ? V(e) : H(e);
}), W = () => "forever", G = () => "pour toujours", K = () => "para siempre", q = () => "für immer", J = () => "per sempre", Y = () => "para sempre", X = () => "永久", Z = () => "永久に", re = () => "영원히", ie = () => "навсегда", ae = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? W(e) : n === "fr" ? G(e) : n === "es" ? K(e) : n === "de" ? q(e) : n === "it" ? J(e) : n === "pt" ? Y(e) : n === "zh" ? X(e) : n === "ja" ? Z(e) : n === "ko" ? re(e) : ie(e);
}), oe = (e) => `${e?.runs} benchmark runs/day`, se = (e) => `${e?.runs} passages de benchmark / jour`, ce = (e) => `${e?.runs} ejecuciones de benchmark/día`, le = (e) => `${e?.runs} Benchmark-Durchläufe/Tag`, ue = (e) => `${e?.runs} esecuzioni benchmark/giorno`, de = (e) => `${e?.runs} execuções de benchmark por dia`, fe = (e) => `每天 ${e?.runs} 次基准测试运行`, pe = (e) => `1日あたり ${e?.runs} 回のベンチマーク実行`, me = (e) => `하루 ${e?.runs}회 벤치마크 실행`, he = (e) => `${e?.runs} запусков бенчмарка в день`, ge = ((e, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? oe(e) : n === "fr" ? se(e) : n === "es" ? ce(e) : n === "de" ? le(e) : n === "it" ? ue(e) : n === "pt" ? de(e) : n === "zh" ? fe(e) : n === "ja" ? pe(e) : n === "ko" ? me(e) : he(e);
}), _e = (e) => `${e?.libs} libraries`, ve = (e) => `${e?.libs} bibliothèques`, ye = (e) => `${e?.libs} bibliotecas`, be = (e) => `${e?.libs} Bibliotheken`, xe = (e) => `${e?.libs} librerie`, Se = (e) => `${e?.libs} bibliotecas`, Ce = (e) => `${e?.libs} 个库`, we = (e) => `${e?.libs} 個のライブラリ`, Te = (e) => `${e?.libs}개 라이브러리`, Ee = (e) => `${e?.libs} библиотек`, De = ((e, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? _e(e) : n === "fr" ? ve(e) : n === "es" ? ye(e) : n === "de" ? be(e) : n === "it" ? xe(e) : n === "pt" ? Se(e) : n === "zh" ? Ce(e) : n === "ja" ? we(e) : n === "ko" ? Te(e) : Ee(e);
}), Oe = () => "Community support", ke = () => "Support communautaire", Ae = () => "Soporte de la comunidad", je = () => "Community-Support", Me = () => "Supporto della comunità", Ne = () => "Suporte da comunidade", Pe = () => "社区支持", Fe = () => "コミュニティサポート", Ie = () => "커뮤니티 지원", Le = () => "Сообщество поддержки", Re = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Oe(e) : n === "fr" ? ke(e) : n === "es" ? Ae(e) : n === "de" ? je(e) : n === "it" ? Me(e) : n === "pt" ? Ne(e) : n === "zh" ? Pe(e) : n === "ja" ? Fe(e) : n === "ko" ? Ie(e) : Le(e);
}), ze = () => "Public results", Be = () => "Résultats publics", Ve = () => "Resultados públicos", He = () => "Öffentliche Ergebnisse", Ue = () => "Risultati pubblici", We = () => "Resultados públicos", Ge = () => "公开结果", Ke = () => "公開結果", qe = () => "결과 공개", Je = () => "Публичные результаты", Ye = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ze(e) : n === "fr" ? Be(e) : n === "es" ? Ve(e) : n === "de" ? He(e) : n === "it" ? Ue(e) : n === "pt" ? We(e) : n === "zh" ? Ge(e) : n === "ja" ? Ke(e) : n === "ko" ? qe(e) : Je(e);
}), Xe = () => "Pro", Ze = () => "Pro", Qe = () => "Pro", $e = () => "Pro", et = () => "Pro", tt = () => "Pro", nt = () => "专业版", rt = () => "プロ", it = () => "프로", at = () => "Pro", ot = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Xe(e) : n === "fr" ? Ze(e) : n === "es" ? Qe(e) : n === "de" ? $e(e) : n === "it" ? et(e) : n === "pt" ? tt(e) : n === "zh" ? nt(e) : n === "ja" ? rt(e) : n === "ko" ? it(e) : at(e);
}), st = () => "$29", ct = () => "29 €", lt = () => "29 $", ut = () => "29 $", dt = () => "29 $", ft = () => "29 $", pt = () => "¥199", mt = () => "¥3,500", ht = () => "₩39,000", gt = () => "29 $", _t = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? st(e) : n === "fr" ? ct(e) : n === "es" ? lt(e) : n === "de" ? ut(e) : n === "it" ? dt(e) : n === "pt" ? ft(e) : n === "zh" ? pt(e) : n === "ja" ? mt(e) : n === "ko" ? ht(e) : gt(e);
}), vt = () => "/month", yt = () => "/ mois", bt = () => "/mes", xt = () => "/Monat", St = () => "/mese", Ct = () => "/mês", wt = () => "/月", Tt = () => "/月", Et = () => "/월", Dt = () => "/месяц", Ot = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? vt(e) : n === "fr" ? yt(e) : n === "es" ? bt(e) : n === "de" ? xt(e) : n === "it" ? St(e) : n === "pt" ? Ct(e) : n === "zh" ? wt(e) : n === "ja" ? Tt(e) : n === "ko" ? Et(e) : Dt(e);
}), kt = () => "Unlimited runs", At = () => "Passages illimités", jt = () => "Ejecuciones ilimitadas", Mt = () => "Unbegrenzte Durchläufe", Nt = () => "Esecuzioni illimitate", Pt = () => "Execuções ilimitadas", Ft = () => "无限次运行", It = () => "無制限の実行", Lt = () => "무제한 실행", Rt = () => "Неограниченное количество запусков", zt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? kt(e) : n === "fr" ? At(e) : n === "es" ? jt(e) : n === "de" ? Mt(e) : n === "it" ? Nt(e) : n === "pt" ? Pt(e) : n === "zh" ? Ft(e) : n === "ja" ? It(e) : n === "ko" ? Lt(e) : Rt(e);
}), Bt = () => "All libraries", Vt = () => "Toutes les bibliothèques", Ht = () => "Todas las bibliotecas", Ut = () => "Alle Bibliotheken", Wt = () => "Tutte le librerie", Gt = () => "Todas as bibliotecas", Kt = () => "所有库", qt = () => "すべてのライブラリ", Jt = () => "모든 라이브러리", Yt = () => "Все библиотеки", Xt = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Bt(e) : n === "fr" ? Vt(e) : n === "es" ? Ht(e) : n === "de" ? Ut(e) : n === "it" ? Wt(e) : n === "pt" ? Gt(e) : n === "zh" ? Kt(e) : n === "ja" ? qt(e) : n === "ko" ? Jt(e) : Yt(e);
}), Zt = () => "Priority support", Qt = () => "Support prioritaire", $t = () => "Soporte prioritario", en = () => "Prioritäts-Support", tn = () => "Supporto prioritario", nn = () => "Suporte prioritário", rn = () => "优先支持", an = () => "優先サポート", on = () => "우선 지원", sn = () => "Приоритетная поддержка", cn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Zt(e) : n === "fr" ? Qt(e) : n === "es" ? $t(e) : n === "de" ? en(e) : n === "it" ? tn(e) : n === "pt" ? nn(e) : n === "zh" ? rn(e) : n === "ja" ? an(e) : n === "ko" ? on(e) : sn(e);
}), ln = () => "Private results", un = () => "Résultats privés", dn = () => "Resultados privados", fn = () => "Private Ergebnisse", pn = () => "Risultati privati", mn = () => "Resultados privados", hn = () => "私有结果", gn = () => "プライベート結果", _n = () => "결과 비공개", vn = () => "Приватные результаты", yn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ln(e) : n === "fr" ? un(e) : n === "es" ? dn(e) : n === "de" ? fn(e) : n === "it" ? pn(e) : n === "pt" ? mn(e) : n === "zh" ? hn(e) : n === "ja" ? gn(e) : n === "ko" ? _n(e) : vn(e);
}), bn = () => "CI integration", xn = () => "Intégration CI", Sn = () => "Integración CI", Cn = () => "CI-Integration", wn = () => "Integrazione CI", Tn = () => "Integração CI", En = () => "CI 集成", Dn = () => "CI統合", On = () => "CI 통합", kn = () => "Интеграция с CI", An = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? bn(e) : n === "fr" ? xn(e) : n === "es" ? Sn(e) : n === "de" ? Cn(e) : n === "it" ? wn(e) : n === "pt" ? Tn(e) : n === "zh" ? En(e) : n === "ja" ? Dn(e) : n === "ko" ? On(e) : kn(e);
}), jn = () => "Historical data", Mn = () => "Données historiques", Nn = () => "Datos históricos", Pn = () => "Historische Daten", Fn = () => "Dati storici", In = () => "Dados históricos", Ln = () => "历史数据", Rn = () => "履歴データ", zn = () => "기록 데이터", Bn = () => "Исторические данные", Vn = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? jn(e) : n === "fr" ? Mn(e) : n === "es" ? Nn(e) : n === "de" ? Pn(e) : n === "it" ? Fn(e) : n === "pt" ? In(e) : n === "zh" ? Ln(e) : n === "ja" ? Rn(e) : n === "ko" ? zn(e) : Bn(e);
}), Hn = () => "Enterprise", Un = () => "Enterprise", Wn = () => "Enterprise", Gn = () => "Enterprise", Kn = () => "Enterprise", qn = () => "Enterprise", Jn = () => "企业版", Yn = () => "エンタープライズ", Xn = () => "엔터프라이즈", Zn = () => "Корпоративный", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Hn(e) : n === "fr" ? Un(e) : n === "es" ? Wn(e) : n === "de" ? Gn(e) : n === "it" ? Kn(e) : n === "pt" ? qn(e) : n === "zh" ? Jn(e) : n === "ja" ? Yn(e) : n === "ko" ? Xn(e) : Zn(e);
}), Qn = () => "Custom", $n = () => "Sur mesure", er = () => "Personalizado", tr = () => "Individuell", nr = () => "Personalizzato", rr = () => "Personalizado", ir = () => "定制", ar = () => "カスタム", or = () => "커스텀", sr = () => "Индивидуальная цена", cr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Qn(e) : n === "fr" ? $n(e) : n === "es" ? er(e) : n === "de" ? tr(e) : n === "it" ? nr(e) : n === "pt" ? rr(e) : n === "zh" ? ir(e) : n === "ja" ? ar(e) : n === "ko" ? or(e) : sr(e);
}), lr = () => "Everything in Pro", ur = () => "Tout ce qui est dans Pro", dr = () => "Todo lo que hay en Pro", fr = () => "Alles in Pro", pr = () => "Tutto quello che c'è in Pro", mr = () => "Tudo o que está no Pro", hr = () => "包含专业版所有功能", gr = () => "Proプランの全機能", _r = () => "Pro의 모든 기능 포함", vr = () => "Все возможности Pro", yr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? lr(e) : n === "fr" ? ur(e) : n === "es" ? dr(e) : n === "de" ? fr(e) : n === "it" ? pr(e) : n === "pt" ? mr(e) : n === "zh" ? hr(e) : n === "ja" ? gr(e) : n === "ko" ? _r(e) : vr(e);
}), br = () => "On-premise option", xr = () => "Option sur site (on-premise)", Sr = () => "Opción on-premise", Cr = () => "On-Premise-Option", wr = () => "Opzione in locale", Tr = () => "Opção on-premise", Er = () => "本地部署选项", Dr = () => "オンプレミスオプション", Or = () => "온프레미스 옵션", kr = () => "Локальное развертывание", Ar = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? br(e) : n === "fr" ? xr(e) : n === "es" ? Sr(e) : n === "de" ? Cr(e) : n === "it" ? wr(e) : n === "pt" ? Tr(e) : n === "zh" ? Er(e) : n === "ja" ? Dr(e) : n === "ko" ? Or(e) : kr(e);
}), jr = () => "SSO & SAML", Mr = () => "SSO & SAML", Nr = () => "SSO y SAML", Pr = () => "SSO & SAML", Fr = () => "SSO e SAML", Ir = () => "SSO & SAML", Lr = () => "SSO 和 SAML", Rr = () => "SSO & SAML", zr = () => "SSO 및 SAML", Br = () => "SSO и SAML", Vr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? jr(e) : n === "fr" ? Mr(e) : n === "es" ? Nr(e) : n === "de" ? Pr(e) : n === "it" ? Fr(e) : n === "pt" ? Ir(e) : n === "zh" ? Lr(e) : n === "ja" ? Rr(e) : n === "ko" ? zr(e) : Br(e);
}), Hr = () => "Dedicated account manager", Ur = () => "Gestionnaire de compte dédié", Wr = () => "Gestor de cuentas dedicado", Gr = () => "Dedizierter Account-Manager", Kr = () => "Account manager dedicato", qr = () => "Gerente de conta dedicado", Jr = () => "专属客户经理", Yr = () => "専任のアカウントマネージャー", Xr = () => "전담 어카운트 매니저", Zr = () => "Выделенный менеджер", Qr = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Hr(e) : n === "fr" ? Ur(e) : n === "es" ? Wr(e) : n === "de" ? Gr(e) : n === "it" ? Kr(e) : n === "pt" ? qr(e) : n === "zh" ? Jr(e) : n === "ja" ? Yr(e) : n === "ko" ? Xr(e) : Zr(e);
}), $r = () => "Custom SLAs", ei = () => "SLA personnalisés", ti = () => "SLA personalizados", ni = () => "Individuelle SLAs", ri = () => "SLA personalizzati", ii = () => "SLAs personalizados", ai = () => "定制 SLA", oi = () => "カスタムSLA", si = () => "맞춤형 SLA", ci = () => "Индивидуальные SLA", li = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? $r(e) : n === "fr" ? ei(e) : n === "es" ? ti(e) : n === "de" ? ni(e) : n === "it" ? ri(e) : n === "pt" ? ii(e) : n === "zh" ? ai(e) : n === "ja" ? oi(e) : n === "ko" ? si(e) : ci(e);
}), ui = () => "Audit logs", di = () => "Journaux d'audit", fi = () => "Registros de auditoría", pi = () => "Audit-Logs", mi = () => "Registri di controllo", hi = () => "Logs de auditoria", gi = () => "审计日志", _i = () => "監査ログ", vi = () => "감사 로그", yi = () => "Журналы аудита", bi = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? ui(e) : n === "fr" ? di(e) : n === "es" ? fi(e) : n === "de" ? pi(e) : n === "it" ? mi(e) : n === "pt" ? hi(e) : n === "zh" ? gi(e) : n === "ja" ? _i(e) : n === "ko" ? vi(e) : yi(e);
}), xi = () => "Training sessions", Si = () => "Sessions de formation", Ci = () => "Sesiones de formación", wi = () => "Schulungen", Ti = () => "Sessioni di formazione", Ei = () => "Sessões de treinamento", Di = () => "培训课程", Oi = () => "トレーニングセッション", ki = () => "교육 세션", Ai = () => "Сессии обучения", ji = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? xi(e) : n === "fr" ? Si(e) : n === "es" ? Ci(e) : n === "de" ? wi(e) : n === "it" ? Ti(e) : n === "pt" ? Ei(e) : n === "zh" ? Di(e) : n === "ja" ? Oi(e) : n === "ko" ? ki(e) : Ai(e);
}), $ = () => "Contact Sales", Mi = () => "Contacter le service commercial", Ni = () => "Contactar con ventas", Pi = () => "Vertrieb kontaktieren", Fi = () => "Contatta l'ufficio vendite", Ii = () => "Contatar Vendas", Li = () => "联系销售", Ri = () => "営業に連絡", zi = () => "영업팀 문의", Bi = () => "Связаться с отделом продаж", Vi = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? $(e) : n === "fr" ? Mi(e) : n === "es" ? Ni(e) : n === "de" ? Pi(e) : n === "it" ? Fi(e) : n === "pt" ? Ii(e) : n === "zh" ? Li(e) : n === "ja" ? Ri(e) : n === "ko" ? zi(e) : Bi(e);
}), Hi = () => "Get Started", Ui = () => "Démarrer", Wi = () => "Empezar", Gi = () => "Jetzt starten", Ki = () => "Inizia ora", qi = () => "Começar", Ji = () => "立即开始", Yi = () => "今すぐ始める", Xi = () => "시작하기", Zi = () => "Начать", Qi = ((e = {}, t = {}) => {
	let n = t.locale ?? m();
	return n === "en" ? Hi(e) : n === "fr" ? Ui(e) : n === "es" ? Wi(e) : n === "de" ? Gi(e) : n === "it" ? Ki(e) : n === "pt" ? qi(e) : n === "zh" ? Ji(e) : n === "ja" ? Yi(e) : n === "ko" ? Xi(e) : Zi(e);
});
function $i() {
	return t("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: [
			{
				name: M(),
				price: U(),
				period: ae(),
				features: [
					ge({ runs: "5" }),
					De({ libs: "3" }),
					Re(),
					Ye()
				]
			},
			{
				name: ot(),
				price: _t(),
				period: Ot(),
				features: [
					zt(),
					Xt(),
					cn(),
					yn(),
					An(),
					Vn()
				],
				highlighted: !0
			},
			{
				name: Q(),
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
		].map((e) => n("div", {
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
					children: e.name === Q() ? Vi() : Qi()
				})
			]
		}, e.name))
	});
}
_("en", { reload: !1 });
function ea({ children: n }) {
	return t(e, { children: n });
}
function ta() {
	return t(ea, { children: t($i, {}) });
}
export { ta as default };
