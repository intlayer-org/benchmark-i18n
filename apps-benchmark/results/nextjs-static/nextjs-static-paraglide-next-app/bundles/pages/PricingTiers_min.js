import { Profiler as e, useEffect as t } from "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { useParams as i } from "next/navigation";
var a = {}, o = [
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
], s = "PARAGLIDE_LOCALE", ee = 3456e4, c = [
	"cookie",
	"globalVariable",
	"baseLocale"
], l = [], u, d;
function te(e) {
	if (l.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (u === t) return d;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of l) if (new a(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return u = t, d = r, r;
}
function f(e) {
	let t = te(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : c;
}
var p = void 0, m = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var h, g = !1, _ = () => {
	if (p) {
		let e = p?.getStore()?.locale;
		if (e) return e;
	}
	let e = c;
	!m && typeof window < "u" && window.location?.href && (e = f(window.location.href));
	let t = v(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return g || (h = t, g = !0, b(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function v(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = S();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && h !== void 0) n = h;
		else if (w(t) && C.has(t)) {
			let e = C.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return ne(t);
			}
		}
		let e = x(n);
		if (e) return e;
	}
}
var y = (e) => {
	e ? window.location.href = e : window.location.reload();
}, b = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = _();
	} catch {}
	let i = [], a = c;
	!m && typeof window < "u" && window.location?.href && (a = f(window.location.href));
	for (let t of a) if (t === "globalVariable") h = e;
	else if (t === "cookie") {
		if (m || typeof document > "u" || typeof window > "u") continue;
		let t = `${s}=${e}; path=/; max-age=${ee}`;
		document.cookie = t;
	} else if (t === "baseLocale") continue;
	else if (w(t) && C.has(t)) {
		let n = C.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), i.push(r));
		}
	}
	let o = () => {
		!m && n.reload && window.location && e !== r && y(void 0);
	};
	if (i.length) return Promise.all(i).then(() => {
		o();
	});
	o();
};
function x(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of o) if (e.toLowerCase() === t) return e;
}
function ne(e) {
	let t = x(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${o.join(", ")}`);
}
function S() {
	if (typeof document > "u" || !document.cookie) return;
	let e = document.cookie.match(RegExp(`(^| )${s}=([^;]+)`))?.[2];
	return x(e);
}
var C = /* @__PURE__ */ new Map();
function w(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var T = () => "Starter", E = () => "Starter", D = () => "Starter", O = () => "Starter", k = () => "Starter", A = () => "Starter", j = () => "入门版", M = () => "スターター", N = () => "스타터", P = () => "Starter", F = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? T(e) : n === "fr" ? E(e) : n === "es" ? D(e) : n === "de" ? O(e) : n === "it" ? k(e) : n === "pt" ? A(e) : n === "zh" ? j(e) : n === "ja" ? M(e) : n === "ko" ? N(e) : P(e);
}), I = () => "$0", L = () => "0 €", R = () => "0 $", z = () => "0 $", B = () => "0 $", V = () => "0 $", H = () => "¥0", U = () => "¥0", W = () => "₩0", G = () => "0 $", K = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? I(e) : n === "fr" ? L(e) : n === "es" ? R(e) : n === "de" ? z(e) : n === "it" ? B(e) : n === "pt" ? V(e) : n === "zh" ? H(e) : n === "ja" ? U(e) : n === "ko" ? W(e) : G(e);
}), q = () => "forever", J = () => "pour toujours", Y = () => "para siempre", X = () => "für immer", Z = () => "per sempre", re = () => "para sempre", ie = () => "永久", ae = () => "永久に", oe = () => "영원히", se = () => "навсегда", ce = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? q(e) : n === "fr" ? J(e) : n === "es" ? Y(e) : n === "de" ? X(e) : n === "it" ? Z(e) : n === "pt" ? re(e) : n === "zh" ? ie(e) : n === "ja" ? ae(e) : n === "ko" ? oe(e) : se(e);
}), le = (e) => `${e?.runs} benchmark runs/day`, ue = (e) => `${e?.runs} passages de benchmark / jour`, de = (e) => `${e?.runs} ejecuciones de benchmark/día`, fe = (e) => `${e?.runs} Benchmark-Durchläufe/Tag`, pe = (e) => `${e?.runs} esecuzioni benchmark/giorno`, me = (e) => `${e?.runs} execuções de benchmark por dia`, he = (e) => `每天 ${e?.runs} 次基准测试运行`, ge = (e) => `1日あたり ${e?.runs} 回のベンチマーク実行`, _e = (e) => `하루 ${e?.runs}회 벤치마크 실행`, ve = (e) => `${e?.runs} запусков бенчмарка в день`, ye = ((e, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? le(e) : n === "fr" ? ue(e) : n === "es" ? de(e) : n === "de" ? fe(e) : n === "it" ? pe(e) : n === "pt" ? me(e) : n === "zh" ? he(e) : n === "ja" ? ge(e) : n === "ko" ? _e(e) : ve(e);
}), be = (e) => `${e?.libs} libraries`, xe = (e) => `${e?.libs} bibliothèques`, Se = (e) => `${e?.libs} bibliotecas`, Ce = (e) => `${e?.libs} Bibliotheken`, we = (e) => `${e?.libs} librerie`, Te = (e) => `${e?.libs} bibliotecas`, Ee = (e) => `${e?.libs} 个库`, De = (e) => `${e?.libs} 個のライブラリ`, Oe = (e) => `${e?.libs}개 라이브러리`, ke = (e) => `${e?.libs} библиотек`, Ae = ((e, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? be(e) : n === "fr" ? xe(e) : n === "es" ? Se(e) : n === "de" ? Ce(e) : n === "it" ? we(e) : n === "pt" ? Te(e) : n === "zh" ? Ee(e) : n === "ja" ? De(e) : n === "ko" ? Oe(e) : ke(e);
}), je = () => "Community support", Me = () => "Support communautaire", Ne = () => "Soporte de la comunidad", Pe = () => "Community-Support", Fe = () => "Supporto della comunità", Ie = () => "Suporte da comunidade", Le = () => "社区支持", Re = () => "コミュニティサポート", ze = () => "커뮤니티 지원", Be = () => "Сообщество поддержки", Ve = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? je(e) : n === "fr" ? Me(e) : n === "es" ? Ne(e) : n === "de" ? Pe(e) : n === "it" ? Fe(e) : n === "pt" ? Ie(e) : n === "zh" ? Le(e) : n === "ja" ? Re(e) : n === "ko" ? ze(e) : Be(e);
}), He = () => "Public results", Ue = () => "Résultats publics", We = () => "Resultados públicos", Ge = () => "Öffentliche Ergebnisse", Ke = () => "Risultati pubblici", qe = () => "Resultados públicos", Je = () => "公开结果", Ye = () => "公開結果", Xe = () => "결과 공개", Ze = () => "Публичные результаты", Qe = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? He(e) : n === "fr" ? Ue(e) : n === "es" ? We(e) : n === "de" ? Ge(e) : n === "it" ? Ke(e) : n === "pt" ? qe(e) : n === "zh" ? Je(e) : n === "ja" ? Ye(e) : n === "ko" ? Xe(e) : Ze(e);
}), $e = () => "Pro", et = () => "Pro", tt = () => "Pro", nt = () => "Pro", rt = () => "Pro", it = () => "Pro", at = () => "专业版", ot = () => "プロ", st = () => "프로", ct = () => "Pro", lt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? $e(e) : n === "fr" ? et(e) : n === "es" ? tt(e) : n === "de" ? nt(e) : n === "it" ? rt(e) : n === "pt" ? it(e) : n === "zh" ? at(e) : n === "ja" ? ot(e) : n === "ko" ? st(e) : ct(e);
}), ut = () => "$29", dt = () => "29 €", ft = () => "29 $", pt = () => "29 $", mt = () => "29 $", ht = () => "29 $", gt = () => "¥199", _t = () => "¥3,500", vt = () => "₩39,000", yt = () => "29 $", bt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ut(e) : n === "fr" ? dt(e) : n === "es" ? ft(e) : n === "de" ? pt(e) : n === "it" ? mt(e) : n === "pt" ? ht(e) : n === "zh" ? gt(e) : n === "ja" ? _t(e) : n === "ko" ? vt(e) : yt(e);
}), xt = () => "/month", St = () => "/ mois", Ct = () => "/mes", wt = () => "/Monat", Tt = () => "/mese", Et = () => "/mês", Dt = () => "/月", Ot = () => "/月", kt = () => "/월", At = () => "/месяц", jt = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? xt(e) : n === "fr" ? St(e) : n === "es" ? Ct(e) : n === "de" ? wt(e) : n === "it" ? Tt(e) : n === "pt" ? Et(e) : n === "zh" ? Dt(e) : n === "ja" ? Ot(e) : n === "ko" ? kt(e) : At(e);
}), Mt = () => "Unlimited runs", Nt = () => "Passages illimités", Pt = () => "Ejecuciones ilimitadas", Ft = () => "Unbegrenzte Durchläufe", It = () => "Esecuzioni illimitate", Lt = () => "Execuções ilimitadas", Rt = () => "无限次运行", zt = () => "無制限の実行", Bt = () => "무제한 실행", Vt = () => "Неограниченное количество запусков", Ht = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Mt(e) : n === "fr" ? Nt(e) : n === "es" ? Pt(e) : n === "de" ? Ft(e) : n === "it" ? It(e) : n === "pt" ? Lt(e) : n === "zh" ? Rt(e) : n === "ja" ? zt(e) : n === "ko" ? Bt(e) : Vt(e);
}), Ut = () => "All libraries", Wt = () => "Toutes les bibliothèques", Gt = () => "Todas las bibliotecas", Kt = () => "Alle Bibliotheken", qt = () => "Tutte le librerie", Jt = () => "Todas as bibliotecas", Yt = () => "所有库", Xt = () => "すべてのライブラリ", Zt = () => "모든 라이브러리", Qt = () => "Все библиотеки", $t = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ut(e) : n === "fr" ? Wt(e) : n === "es" ? Gt(e) : n === "de" ? Kt(e) : n === "it" ? qt(e) : n === "pt" ? Jt(e) : n === "zh" ? Yt(e) : n === "ja" ? Xt(e) : n === "ko" ? Zt(e) : Qt(e);
}), en = () => "Priority support", tn = () => "Support prioritaire", nn = () => "Soporte prioritario", rn = () => "Prioritäts-Support", an = () => "Supporto prioritario", on = () => "Suporte prioritário", sn = () => "优先支持", cn = () => "優先サポート", ln = () => "우선 지원", un = () => "Приоритетная поддержка", dn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? en(e) : n === "fr" ? tn(e) : n === "es" ? nn(e) : n === "de" ? rn(e) : n === "it" ? an(e) : n === "pt" ? on(e) : n === "zh" ? sn(e) : n === "ja" ? cn(e) : n === "ko" ? ln(e) : un(e);
}), fn = () => "Private results", pn = () => "Résultats privés", mn = () => "Resultados privados", hn = () => "Private Ergebnisse", gn = () => "Risultati privati", _n = () => "Resultados privados", vn = () => "私有结果", yn = () => "プライベート結果", bn = () => "결과 비공개", xn = () => "Приватные результаты", Sn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? fn(e) : n === "fr" ? pn(e) : n === "es" ? mn(e) : n === "de" ? hn(e) : n === "it" ? gn(e) : n === "pt" ? _n(e) : n === "zh" ? vn(e) : n === "ja" ? yn(e) : n === "ko" ? bn(e) : xn(e);
}), Cn = () => "CI integration", wn = () => "Intégration CI", Q = () => "Integración CI", Tn = () => "CI-Integration", En = () => "Integrazione CI", Dn = () => "Integração CI", On = () => "CI 集成", kn = () => "CI統合", An = () => "CI 통합", jn = () => "Интеграция с CI", Mn = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Cn(e) : n === "fr" ? wn(e) : n === "es" ? Q(e) : n === "de" ? Tn(e) : n === "it" ? En(e) : n === "pt" ? Dn(e) : n === "zh" ? On(e) : n === "ja" ? kn(e) : n === "ko" ? An(e) : jn(e);
}), Nn = () => "Historical data", Pn = () => "Données historiques", Fn = () => "Datos históricos", In = () => "Historische Daten", Ln = () => "Dati storici", Rn = () => "Dados históricos", zn = () => "历史数据", Bn = () => "履歴データ", Vn = () => "기록 데이터", Hn = () => "Исторические данные", Un = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Nn(e) : n === "fr" ? Pn(e) : n === "es" ? Fn(e) : n === "de" ? In(e) : n === "it" ? Ln(e) : n === "pt" ? Rn(e) : n === "zh" ? zn(e) : n === "ja" ? Bn(e) : n === "ko" ? Vn(e) : Hn(e);
}), Wn = () => "Enterprise", Gn = () => "Enterprise", Kn = () => "Enterprise", qn = () => "Enterprise", Jn = () => "Enterprise", Yn = () => "Enterprise", Xn = () => "企业版", Zn = () => "エンタープライズ", Qn = () => "엔터프라이즈", $n = () => "Корпоративный", $ = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Wn(e) : n === "fr" ? Gn(e) : n === "es" ? Kn(e) : n === "de" ? qn(e) : n === "it" ? Jn(e) : n === "pt" ? Yn(e) : n === "zh" ? Xn(e) : n === "ja" ? Zn(e) : n === "ko" ? Qn(e) : $n(e);
}), er = () => "Custom", tr = () => "Sur mesure", nr = () => "Personalizado", rr = () => "Individuell", ir = () => "Personalizzato", ar = () => "Personalizado", or = () => "定制", sr = () => "カスタム", cr = () => "커스텀", lr = () => "Индивидуальная цена", ur = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? er(e) : n === "fr" ? tr(e) : n === "es" ? nr(e) : n === "de" ? rr(e) : n === "it" ? ir(e) : n === "pt" ? ar(e) : n === "zh" ? or(e) : n === "ja" ? sr(e) : n === "ko" ? cr(e) : lr(e);
}), dr = () => "Everything in Pro", fr = () => "Tout ce qui est dans Pro", pr = () => "Todo lo que hay en Pro", mr = () => "Alles in Pro", hr = () => "Tutto quello che c'è in Pro", gr = () => "Tudo o que está no Pro", _r = () => "包含专业版所有功能", vr = () => "Proプランの全機能", yr = () => "Pro의 모든 기능 포함", br = () => "Все возможности Pro", xr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? dr(e) : n === "fr" ? fr(e) : n === "es" ? pr(e) : n === "de" ? mr(e) : n === "it" ? hr(e) : n === "pt" ? gr(e) : n === "zh" ? _r(e) : n === "ja" ? vr(e) : n === "ko" ? yr(e) : br(e);
}), Sr = () => "On-premise option", Cr = () => "Option sur site (on-premise)", wr = () => "Opción on-premise", Tr = () => "On-Premise-Option", Er = () => "Opzione in locale", Dr = () => "Opção on-premise", Or = () => "本地部署选项", kr = () => "オンプレミスオプション", Ar = () => "온프레미스 옵션", jr = () => "Локальное развертывание", Mr = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Sr(e) : n === "fr" ? Cr(e) : n === "es" ? wr(e) : n === "de" ? Tr(e) : n === "it" ? Er(e) : n === "pt" ? Dr(e) : n === "zh" ? Or(e) : n === "ja" ? kr(e) : n === "ko" ? Ar(e) : jr(e);
}), Nr = () => "SSO & SAML", Pr = () => "SSO & SAML", Fr = () => "SSO y SAML", Ir = () => "SSO & SAML", Lr = () => "SSO e SAML", Rr = () => "SSO & SAML", zr = () => "SSO 和 SAML", Br = () => "SSO & SAML", Vr = () => "SSO 및 SAML", Hr = () => "SSO и SAML", Ur = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Nr(e) : n === "fr" ? Pr(e) : n === "es" ? Fr(e) : n === "de" ? Ir(e) : n === "it" ? Lr(e) : n === "pt" ? Rr(e) : n === "zh" ? zr(e) : n === "ja" ? Br(e) : n === "ko" ? Vr(e) : Hr(e);
}), Wr = () => "Dedicated account manager", Gr = () => "Gestionnaire de compte dédié", Kr = () => "Gestor de cuentas dedicado", qr = () => "Dedizierter Account-Manager", Jr = () => "Account manager dedicato", Yr = () => "Gerente de conta dedicado", Xr = () => "专属客户经理", Zr = () => "専任のアカウントマネージャー", Qr = () => "전담 어카운트 매니저", $r = () => "Выделенный менеджер", ei = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Wr(e) : n === "fr" ? Gr(e) : n === "es" ? Kr(e) : n === "de" ? qr(e) : n === "it" ? Jr(e) : n === "pt" ? Yr(e) : n === "zh" ? Xr(e) : n === "ja" ? Zr(e) : n === "ko" ? Qr(e) : $r(e);
}), ti = () => "Custom SLAs", ni = () => "SLA personnalisés", ri = () => "SLA personalizados", ii = () => "Individuelle SLAs", ai = () => "SLA personalizzati", oi = () => "SLAs personalizados", si = () => "定制 SLA", ci = () => "カスタムSLA", li = () => "맞춤형 SLA", ui = () => "Индивидуальные SLA", di = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? ti(e) : n === "fr" ? ni(e) : n === "es" ? ri(e) : n === "de" ? ii(e) : n === "it" ? ai(e) : n === "pt" ? oi(e) : n === "zh" ? si(e) : n === "ja" ? ci(e) : n === "ko" ? li(e) : ui(e);
}), fi = () => "Audit logs", pi = () => "Journaux d'audit", mi = () => "Registros de auditoría", hi = () => "Audit-Logs", gi = () => "Registri di controllo", _i = () => "Logs de auditoria", vi = () => "审计日志", yi = () => "監査ログ", bi = () => "감사 로그", xi = () => "Журналы аудита", Si = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? fi(e) : n === "fr" ? pi(e) : n === "es" ? mi(e) : n === "de" ? hi(e) : n === "it" ? gi(e) : n === "pt" ? _i(e) : n === "zh" ? vi(e) : n === "ja" ? yi(e) : n === "ko" ? bi(e) : xi(e);
}), Ci = () => "Training sessions", wi = () => "Sessions de formation", Ti = () => "Sesiones de formación", Ei = () => "Schulungen", Di = () => "Sessioni di formazione", Oi = () => "Sessões de treinamento", ki = () => "培训课程", Ai = () => "トレーニングセッション", ji = () => "교육 세션", Mi = () => "Сессии обучения", Ni = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Ci(e) : n === "fr" ? wi(e) : n === "es" ? Ti(e) : n === "de" ? Ei(e) : n === "it" ? Di(e) : n === "pt" ? Oi(e) : n === "zh" ? ki(e) : n === "ja" ? Ai(e) : n === "ko" ? ji(e) : Mi(e);
}), Pi = () => "Contact Sales", Fi = () => "Contacter le service commercial", Ii = () => "Contactar con ventas", Li = () => "Vertrieb kontaktieren", Ri = () => "Contatta l'ufficio vendite", zi = () => "Contatar Vendas", Bi = () => "联系销售", Vi = () => "営業に連絡", Hi = () => "영업팀 문의", Ui = () => "Связаться с отделом продаж", Wi = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Pi(e) : n === "fr" ? Fi(e) : n === "es" ? Ii(e) : n === "de" ? Li(e) : n === "it" ? Ri(e) : n === "pt" ? zi(e) : n === "zh" ? Bi(e) : n === "ja" ? Vi(e) : n === "ko" ? Hi(e) : Ui(e);
}), Gi = () => "Get Started", Ki = () => "Démarrer", qi = () => "Empezar", Ji = () => "Jetzt starten", Yi = () => "Inizia ora", Xi = () => "Começar", Zi = () => "立即开始", Qi = () => "今すぐ始める", $i = () => "시작하기", ea = () => "Начать", ta = ((e = {}, t = {}) => {
	let n = t.locale ?? _();
	return n === "en" ? Gi(e) : n === "fr" ? Ki(e) : n === "es" ? qi(e) : n === "de" ? Ji(e) : n === "it" ? Yi(e) : n === "pt" ? Xi(e) : n === "zh" ? Zi(e) : n === "ja" ? Qi(e) : n === "ko" ? $i(e) : ea(e);
});
function na() {
	return n("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: [
			{
				name: F(),
				price: K(),
				period: ce(),
				features: [
					ye({ runs: "5" }),
					Ae({ libs: "3" }),
					Ve(),
					Qe()
				]
			},
			{
				name: lt(),
				price: bt(),
				period: jt(),
				features: [
					Ht(),
					$t(),
					dn(),
					Sn(),
					Mn(),
					Un()
				],
				highlighted: !0
			},
			{
				name: $(),
				price: ur(),
				period: "",
				features: [
					xr(),
					Mr(),
					Ur(),
					ei(),
					di(),
					Si(),
					Ni()
				]
			}
		].map((e) => r("div", {
			className: `flex flex-col rounded-lg border p-6 ${e.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				n("h3", {
					className: "text-lg font-semibold text-foreground",
					children: e.name
				}),
				r("div", {
					className: "my-4",
					children: [n("span", {
						className: "text-3xl font-bold text-foreground",
						children: e.price
					}), n("span", {
						className: "text-sm text-muted-foreground",
						children: e.period
					})]
				}),
				n("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: e.features.map((e) => r("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							n("span", {
								className: "text-primary",
								children: "✓"
							}),
							" ",
							e
						]
					}, e))
				}),
				n("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${e.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: e.name === $() ? Wi() : ta()
				})
			]
		}, e.name))
	});
}
function ra() {
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
function ia(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
function aa({ children: r }) {
	let a = i().locale ?? "en";
	return t(() => {
		b(a), document.documentElement.lang = a;
	}, [a]), t(() => {
		ra();
	}, []), n(e, {
		id: "AppRoot",
		onRender: ia,
		children: r
	});
}
function oa({ children: e }) {
	return n(aa, { children: e });
}
function sa() {
	return n(oa, { children: n(na, {}) });
}
export { sa as default };
