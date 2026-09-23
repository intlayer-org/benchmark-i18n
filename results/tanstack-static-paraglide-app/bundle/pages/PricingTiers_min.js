import "react";
import { Fragment as e, jsxDEV as t } from "react/jsx-dev-runtime";
var n = {}, r = [
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
], i = "PARAGLIDE_LOCALE", a = 3456e4, o = [
	"cookie",
	"globalVariable",
	"baseLocale"
], s = [], c = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var l, u = !1, d = () => {
	let e = o;
	!c && typeof window < "u" && window.location?.href && (e = D(window.location.href));
	let t = f(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return u || (l = t, u = !0, m(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function f(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = ne();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && l !== void 0) n = l;
		else if (k(t) && O.has(t)) {
			let e = O.get(t);
			if (e) {
				let t = e.getLocale();
				if (t instanceof Promise) continue;
				if (t !== void 0) return g(t);
			}
		}
		let e = h(n);
		if (e) return e;
	}
}
var p = (e) => {
	e ? window.location.href = e : window.location.reload();
}, m = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = d();
	} catch {}
	let s = [], u = o;
	!c && typeof window < "u" && window.location?.href && (u = D(window.location.href));
	for (let t of u) if (t === "globalVariable") l = e;
	else if (t === "cookie") {
		if (c || typeof document > "u" || typeof window > "u") continue;
		let t = `${i}=${e}; path=/; max-age=${a}`;
		document.cookie = t, C();
	} else if (t === "baseLocale") continue;
	else if (k(t) && O.has(t)) {
		let n = O.get(t);
		if (n) {
			let r = n.setLocale(e);
			r instanceof Promise && (r = r.catch((e) => {
				throw Error(`Custom strategy "${t}" setLocale failed.`, { cause: e });
			}), s.push(r));
		}
	}
	let f = () => {
		!c && n.reload && window.location && e !== r && p(void 0);
	};
	if (s.length) return Promise.all(s).then(() => {
		f();
	});
	f();
}, ee = () => typeof window < "u" ? window.location.origin : "http://fallback.com";
function h(e) {
	if (typeof e != "string") return;
	let t = e.toLowerCase();
	for (let e of r) if (e.toLowerCase() === t) return e;
}
function g(e) {
	let t = h(e);
	if (t) return t;
	throw Error(`Invalid locale: ${e}. Expected one of: ${r.join(", ")}`);
}
function _(e) {
	return e;
}
function v(e, t) {
	return e.exec(t.href);
}
var y = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), b = RegExp(`(?:^|;\\s*)${y}=([^;]*)`), x = Symbol(), S = x;
function C() {
	S = x;
}
function te() {
	typeof queueMicrotask == "function" ? queueMicrotask(C) : Promise.resolve().then(C);
}
function ne() {
	if (typeof document > "u") return;
	if (S !== x) return S;
	let e = document.cookie.match(b)?.[1];
	return S = h(e), te(), S;
}
function re(e) {
	return ie(e);
}
function ie(e) {
	let t = _(typeof e == "string" ? new URL(e, ee()) : new URL(e)), n = t.pathname.split("/").filter(Boolean);
	return n.length > 0 && h(n[0]) && (t.pathname = "/" + n.slice(1).join("/")), _(t);
}
var w, T;
function E(e) {
	if (s.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (w === t) return T;
	let r = _(new URL(t, "http://example.com")), i = re(r), a = i.href === r.href ? [r] : [r, i], o;
	for (let e of a) {
		for (let t of s) if (v(new n(t.match, e.href), e)) {
			o = t;
			break;
		}
		if (o) break;
	}
	return w = t, T = o, o;
}
function D(e) {
	let t = E(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : o;
}
var O = /* @__PURE__ */ new Map();
function k(e) {
	return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e);
}
var A = () => "All libraries", j = () => "Audit logs", M = (e) => `${e?.runs} benchmark runs/day`, N = () => "CI integration", P = () => "Community support", F = () => "Contact Sales", I = () => "Custom", L = () => "Custom SLAs", R = () => "Dedicated account manager", z = () => "Enterprise", B = () => "Everything in Pro", V = () => "forever", H = () => "Get Started", U = () => "Historical data", W = (e) => `${e?.libs} libraries`, G = () => "/month", K = () => "On-premise option", q = () => "$0", J = () => "$29", Y = () => "Priority support", ae = () => "Private results", oe = () => "Pro", se = () => "Public results", ce = () => "SSO & SAML", le = () => "Starter", ue = () => "Training sessions", de = () => "Unlimited runs", fe = () => "Toutes les bibliothèques", pe = () => "Journaux d'audit", me = (e) => `${e?.runs} passages de benchmark / jour`, he = () => "Intégration CI", ge = () => "Support communautaire", _e = () => "Contacter le service commercial", ve = () => "Sur mesure", ye = () => "SLA personnalisés", be = () => "Gestionnaire de compte dédié", xe = () => "Enterprise", Se = () => "Tout ce qui est dans Pro", Ce = () => "pour toujours", we = () => "Démarrer", Te = () => "Données historiques", Ee = (e) => `${e?.libs} bibliothèques`, De = () => "/ mois", Oe = () => "Option sur site (on-premise)", ke = () => "0 €", Ae = () => "29 €", je = () => "Support prioritaire", Me = () => "Résultats privés", Ne = () => "Pro", Pe = () => "Résultats publics", Fe = () => "SSO & SAML", Ie = () => "Starter", Le = () => "Sessions de formation", Re = () => "Passages illimités", ze = () => "Todas las bibliotecas", Be = () => "Registros de auditoría", Ve = (e) => `${e?.runs} ejecuciones de benchmark/día`, He = () => "Integración CI", Ue = () => "Soporte de la comunidad", We = () => "Contactar con ventas", Ge = () => "Personalizado", Ke = () => "SLA personalizados", qe = () => "Gestor de cuentas dedicado", Je = () => "Enterprise", Ye = () => "Todo lo que hay en Pro", Xe = () => "para siempre", Ze = () => "Empezar", Qe = () => "Datos históricos", $e = (e) => `${e?.libs} bibliotecas`, et = () => "/mes", tt = () => "Opción on-premise", nt = () => "0 $", rt = () => "29 $", it = () => "Soporte prioritario", at = () => "Resultados privados", ot = () => "Pro", st = () => "Resultados públicos", ct = () => "SSO y SAML", lt = () => "Starter", ut = () => "Sesiones de formación", dt = () => "Ejecuciones ilimitadas", ft = () => "Alle Bibliotheken", pt = () => "Audit-Logs", mt = (e) => `${e?.runs} Benchmark-Durchläufe/Tag`, ht = () => "CI-Integration", gt = () => "Community-Support", _t = () => "Vertrieb kontaktieren", vt = () => "Individuell", yt = () => "Individuelle SLAs", bt = () => "Dedizierter Account-Manager", xt = () => "Enterprise", St = () => "Alles in Pro", Ct = () => "für immer", wt = () => "Jetzt starten", Tt = () => "Historische Daten", Et = (e) => `${e?.libs} Bibliotheken`, Dt = () => "/Monat", Ot = () => "On-Premise-Option", kt = () => "0 $", At = () => "29 $", jt = () => "Prioritäts-Support", Mt = () => "Private Ergebnisse", Nt = () => "Pro", Pt = () => "Öffentliche Ergebnisse", Ft = () => "SSO & SAML", It = () => "Starter", Lt = () => "Schulungen", Rt = () => "Unbegrenzte Durchläufe", zt = () => "Tutte le librerie", Bt = () => "Registri di controllo", Vt = (e) => `${e?.runs} esecuzioni benchmark/giorno`, Ht = () => "Integrazione CI", Ut = () => "Supporto della comunità", Wt = () => "Contatta l'ufficio vendite", Gt = () => "Personalizzato", Kt = () => "SLA personalizzati", qt = () => "Account manager dedicato", Jt = () => "Enterprise", Yt = () => "Tutto quello che c'è in Pro", Xt = () => "per sempre", Zt = () => "Inizia ora", Qt = () => "Dati storici", $t = (e) => `${e?.libs} librerie`, en = () => "/mese", tn = () => "Opzione in locale", nn = () => "0 $", rn = () => "29 $", an = () => "Supporto prioritario", on = () => "Risultati privati", sn = () => "Pro", cn = () => "Risultati pubblici", ln = () => "SSO e SAML", un = () => "Starter", dn = () => "Sessioni di formazione", fn = () => "Esecuzioni illimitate", pn = () => "Todas as bibliotecas", mn = () => "Logs de auditoria", hn = (e) => `${e?.runs} execuções de benchmark por dia`, gn = () => "Integração CI", _n = () => "Suporte da comunidade", vn = () => "Contatar Vendas", yn = () => "Personalizado", bn = () => "SLAs personalizados", xn = () => "Gerente de conta dedicado", Sn = () => "Enterprise", Cn = () => "Tudo o que está no Pro", wn = () => "para sempre", Tn = () => "Começar", En = () => "Dados históricos", Dn = (e) => `${e?.libs} bibliotecas`, On = () => "/mês", kn = () => "Opção on-premise", An = () => "0 $", X = () => "29 $", jn = () => "Suporte prioritário", Mn = () => "Resultados privados", Nn = () => "Pro", Pn = () => "Resultados públicos", Fn = () => "SSO & SAML", In = () => "Starter", Ln = () => "Sessões de treinamento", Rn = () => "Execuções ilimitadas", zn = () => "所有库", Bn = () => "审计日志", Vn = (e) => `每天 ${e?.runs} 次基准测试运行`, Hn = () => "CI 集成", Un = () => "社区支持", Wn = () => "联系销售", Gn = () => "定制", Kn = () => "定制 SLA", qn = () => "专属客户经理", Jn = () => "企业版", Yn = () => "包含专业版所有功能", Xn = () => "永久", Zn = () => "立即开始", Qn = () => "历史数据", $n = (e) => `${e?.libs} 个库`, er = () => "/月", tr = () => "本地部署选项", nr = () => "¥0", rr = () => "¥199", ir = () => "优先支持", ar = () => "私有结果", or = () => "专业版", sr = () => "公开结果", cr = () => "SSO 和 SAML", lr = () => "入门版", ur = () => "培训课程", dr = () => "无限次运行", fr = () => "すべてのライブラリ", pr = () => "監査ログ", mr = (e) => `1日あたり ${e?.runs} 回のベンチマーク実行`, hr = () => "CI統合", gr = () => "コミュニティサポート", _r = () => "営業に連絡", vr = () => "カスタム", yr = () => "カスタムSLA", br = () => "専任のアカウントマネージャー", xr = () => "エンタープライズ", Sr = () => "Proプランの全機能", Cr = () => "永久に", wr = () => "今すぐ始める", Tr = () => "履歴データ", Er = (e) => `${e?.libs} 個のライブラリ`, Dr = () => "/月", Or = () => "オンプレミスオプション", kr = () => "¥0", Ar = () => "¥3,500", jr = () => "優先サポート", Mr = () => "プライベート結果", Nr = () => "プロ", Pr = () => "公開結果", Fr = () => "SSO & SAML", Ir = () => "スターター", Lr = () => "トレーニングセッション", Rr = () => "無制限の実行", zr = () => "모든 라이브러리", Br = () => "감사 로그", Vr = (e) => `하루 ${e?.runs}회 벤치마크 실행`, Hr = () => "CI 통합", Ur = () => "커뮤니티 지원", Wr = () => "영업팀 문의", Gr = () => "커스텀", Kr = () => "맞춤형 SLA", qr = () => "전담 어카운트 매니저", Jr = () => "엔터프라이즈", Yr = () => "Pro의 모든 기능 포함", Xr = () => "영원히", Zr = () => "시작하기", Qr = () => "기록 데이터", $r = (e) => `${e?.libs}개 라이브러리`, ei = () => "/월", ti = () => "온프레미스 옵션", ni = () => "₩0", ri = () => "₩39,000", ii = () => "우선 지원", ai = () => "결과 비공개", oi = () => "프로", si = () => "결과 공개", ci = () => "SSO 및 SAML", li = () => "스타터", ui = () => "교육 세션", di = () => "무제한 실행", fi = () => "Все библиотеки", pi = () => "Журналы аудита", mi = (e) => `${e?.runs} запусков бенчмарка в день`, hi = () => "Интеграция с CI", gi = () => "Сообщество поддержки", _i = () => "Связаться с отделом продаж", vi = () => "Индивидуальная цена", yi = () => "Индивидуальные SLA", bi = () => "Выделенный менеджер", xi = () => "Корпоративный", Si = () => "Все возможности Pro", Ci = () => "навсегда", wi = () => "Начать", Ti = () => "Исторические данные", Ei = (e) => `${e?.libs} библиотек`, Di = () => "/месяц", Oi = () => "Локальное развертывание", ki = () => "0 $", Ai = () => "29 $", ji = () => "Приоритетная поддержка", Mi = () => "Приватные результаты", Ni = () => "Pro", Pi = () => "Публичные результаты", Fi = () => "SSO и SAML", Ii = () => "Starter", Li = () => "Сессии обучения", Ri = () => "Неограниченное количество запусков", zi = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? fe(e) : n === "es" ? ze(e) : n === "de" ? ft(e) : n === "it" ? zt(e) : n === "pt" ? pn(e) : n === "zh" ? zn(e) : n === "ja" ? fr(e) : n === "ko" ? zr(e) : n === "ru" ? fi(e) : A(e);
}), Bi = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? pe(e) : n === "es" ? Be(e) : n === "de" ? pt(e) : n === "it" ? Bt(e) : n === "pt" ? mn(e) : n === "zh" ? Bn(e) : n === "ja" ? pr(e) : n === "ko" ? Br(e) : n === "ru" ? pi(e) : j(e);
}), Vi = ((e, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? me(e) : n === "es" ? Ve(e) : n === "de" ? mt(e) : n === "it" ? Vt(e) : n === "pt" ? hn(e) : n === "zh" ? Vn(e) : n === "ja" ? mr(e) : n === "ko" ? Vr(e) : n === "ru" ? mi(e) : M(e);
}), Hi = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? he(e) : n === "es" ? He(e) : n === "de" ? ht(e) : n === "it" ? Ht(e) : n === "pt" ? gn(e) : n === "zh" ? Hn(e) : n === "ja" ? hr(e) : n === "ko" ? Hr(e) : n === "ru" ? hi(e) : N(e);
}), Ui = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ge(e) : n === "es" ? Ue(e) : n === "de" ? gt(e) : n === "it" ? Ut(e) : n === "pt" ? _n(e) : n === "zh" ? Un(e) : n === "ja" ? gr(e) : n === "ko" ? Ur(e) : n === "ru" ? gi(e) : P(e);
}), Wi = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? _e(e) : n === "es" ? We(e) : n === "de" ? _t(e) : n === "it" ? Wt(e) : n === "pt" ? vn(e) : n === "zh" ? Wn(e) : n === "ja" ? _r(e) : n === "ko" ? Wr(e) : n === "ru" ? _i(e) : F(e);
}), Gi = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ve(e) : n === "es" ? Ge(e) : n === "de" ? vt(e) : n === "it" ? Gt(e) : n === "pt" ? yn(e) : n === "zh" ? Gn(e) : n === "ja" ? vr(e) : n === "ko" ? Gr(e) : n === "ru" ? vi(e) : I(e);
}), Ki = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ye(e) : n === "es" ? Ke(e) : n === "de" ? yt(e) : n === "it" ? Kt(e) : n === "pt" ? bn(e) : n === "zh" ? Kn(e) : n === "ja" ? yr(e) : n === "ko" ? Kr(e) : n === "ru" ? yi(e) : L(e);
}), qi = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? be(e) : n === "es" ? qe(e) : n === "de" ? bt(e) : n === "it" ? qt(e) : n === "pt" ? xn(e) : n === "zh" ? qn(e) : n === "ja" ? br(e) : n === "ko" ? qr(e) : n === "ru" ? bi(e) : R(e);
}), Z = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? xe(e) : n === "es" ? Je(e) : n === "de" ? xt(e) : n === "it" ? Jt(e) : n === "pt" ? Sn(e) : n === "zh" ? Jn(e) : n === "ja" ? xr(e) : n === "ko" ? Jr(e) : n === "ru" ? xi(e) : z(e);
}), Ji = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Se(e) : n === "es" ? Ye(e) : n === "de" ? St(e) : n === "it" ? Yt(e) : n === "pt" ? Cn(e) : n === "zh" ? Yn(e) : n === "ja" ? Sr(e) : n === "ko" ? Yr(e) : n === "ru" ? Si(e) : B(e);
}), Yi = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Ce(e) : n === "es" ? Xe(e) : n === "de" ? Ct(e) : n === "it" ? Xt(e) : n === "pt" ? wn(e) : n === "zh" ? Xn(e) : n === "ja" ? Cr(e) : n === "ko" ? Xr(e) : n === "ru" ? Ci(e) : V(e);
}), Xi = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? we(e) : n === "es" ? Ze(e) : n === "de" ? wt(e) : n === "it" ? Zt(e) : n === "pt" ? Tn(e) : n === "zh" ? Zn(e) : n === "ja" ? wr(e) : n === "ko" ? Zr(e) : n === "ru" ? wi(e) : H(e);
}), Zi = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Te(e) : n === "es" ? Qe(e) : n === "de" ? Tt(e) : n === "it" ? Qt(e) : n === "pt" ? En(e) : n === "zh" ? Qn(e) : n === "ja" ? Tr(e) : n === "ko" ? Qr(e) : n === "ru" ? Ti(e) : U(e);
}), Qi = ((e, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Ee(e) : n === "es" ? $e(e) : n === "de" ? Et(e) : n === "it" ? $t(e) : n === "pt" ? Dn(e) : n === "zh" ? $n(e) : n === "ja" ? Er(e) : n === "ko" ? $r(e) : n === "ru" ? Ei(e) : W(e);
}), $i = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? De(e) : n === "es" ? et(e) : n === "de" ? Dt(e) : n === "it" ? en(e) : n === "pt" ? On(e) : n === "zh" ? er(e) : n === "ja" ? Dr(e) : n === "ko" ? ei(e) : n === "ru" ? Di(e) : G(e);
}), ea = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Oe(e) : n === "es" ? tt(e) : n === "de" ? Ot(e) : n === "it" ? tn(e) : n === "pt" ? kn(e) : n === "zh" ? tr(e) : n === "ja" ? Or(e) : n === "ko" ? ti(e) : n === "ru" ? Oi(e) : K(e);
}), ta = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? ke(e) : n === "es" ? nt(e) : n === "de" ? kt(e) : n === "it" ? nn(e) : n === "pt" ? An(e) : n === "zh" ? nr(e) : n === "ja" ? kr(e) : n === "ko" ? ni(e) : n === "ru" ? ki(e) : q(e);
}), na = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Ae(e) : n === "es" ? rt(e) : n === "de" ? At(e) : n === "it" ? rn(e) : n === "pt" ? X(e) : n === "zh" ? rr(e) : n === "ja" ? Ar(e) : n === "ko" ? ri(e) : n === "ru" ? Ai(e) : J(e);
}), ra = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? je(e) : n === "es" ? it(e) : n === "de" ? jt(e) : n === "it" ? an(e) : n === "pt" ? jn(e) : n === "zh" ? ir(e) : n === "ja" ? jr(e) : n === "ko" ? ii(e) : n === "ru" ? ji(e) : Y(e);
}), ia = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Me(e) : n === "es" ? at(e) : n === "de" ? Mt(e) : n === "it" ? on(e) : n === "pt" ? Mn(e) : n === "zh" ? ar(e) : n === "ja" ? Mr(e) : n === "ko" ? ai(e) : n === "ru" ? Mi(e) : ae(e);
}), aa = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Ne(e) : n === "es" ? ot(e) : n === "de" ? Nt(e) : n === "it" ? sn(e) : n === "pt" ? Nn(e) : n === "zh" ? or(e) : n === "ja" ? Nr(e) : n === "ko" ? oi(e) : n === "ru" ? Ni(e) : oe(e);
}), oa = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Pe(e) : n === "es" ? st(e) : n === "de" ? Pt(e) : n === "it" ? cn(e) : n === "pt" ? Pn(e) : n === "zh" ? sr(e) : n === "ja" ? Pr(e) : n === "ko" ? si(e) : n === "ru" ? Pi(e) : se(e);
}), sa = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Fe(e) : n === "es" ? ct(e) : n === "de" ? Ft(e) : n === "it" ? ln(e) : n === "pt" ? Fn(e) : n === "zh" ? cr(e) : n === "ja" ? Fr(e) : n === "ko" ? ci(e) : n === "ru" ? Fi(e) : ce(e);
}), ca = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Ie(e) : n === "es" ? lt(e) : n === "de" ? It(e) : n === "it" ? un(e) : n === "pt" ? In(e) : n === "zh" ? lr(e) : n === "ja" ? Ir(e) : n === "ko" ? li(e) : n === "ru" ? Ii(e) : le(e);
}), la = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Le(e) : n === "es" ? ut(e) : n === "de" ? Lt(e) : n === "it" ? dn(e) : n === "pt" ? Ln(e) : n === "zh" ? ur(e) : n === "ja" ? Lr(e) : n === "ko" ? ui(e) : n === "ru" ? Li(e) : ue(e);
}), ua = ((e = {}, t = {}) => {
	let n = t.locale ?? d();
	return n === "fr" ? Re(e) : n === "es" ? dt(e) : n === "de" ? Rt(e) : n === "it" ? fn(e) : n === "pt" ? Rn(e) : n === "zh" ? dr(e) : n === "ja" ? Rr(e) : n === "ko" ? di(e) : n === "ru" ? Ri(e) : de(e);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/pricing/PricingTiers.tsx";
function da() {
	let e = [
		{
			name: ca(),
			price: ta(),
			period: Yi(),
			features: [
				Vi({ runs: "5" }),
				Qi({ libs: "3" }),
				Ui(),
				oa()
			]
		},
		{
			name: aa(),
			price: na(),
			period: $i(),
			features: [
				ua(),
				zi(),
				ra(),
				ia(),
				Hi(),
				Zi()
			],
			highlighted: !0
		},
		{
			name: Z(),
			price: Gi(),
			period: "",
			features: [
				Ji(),
				ea(),
				sa(),
				qi(),
				Ki(),
				Bi(),
				la()
			]
		}
	];
	return t("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: e.map((e) => t("div", {
			className: `flex flex-col rounded-lg border p-6 ${e.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				t("h3", {
					className: "text-lg font-semibold text-foreground",
					children: e.name
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 57,
					columnNumber: 11
				}, this),
				t("div", {
					className: "my-4",
					children: [t("span", {
						className: "text-3xl font-bold text-foreground",
						children: e.price
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 59,
						columnNumber: 13
					}, this), t("span", {
						className: "text-sm text-muted-foreground",
						children: e.period
					}, void 0, !1, {
						fileName: Q,
						lineNumber: 60,
						columnNumber: 13
					}, this)]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 58,
					columnNumber: 11
				}, this),
				t("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: e.features.map((e) => t("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							t("span", {
								className: "text-primary",
								children: "✓"
							}, void 0, !1, {
								fileName: Q,
								lineNumber: 68,
								columnNumber: 17
							}, this),
							" ",
							e
						]
					}, e, !0, {
						fileName: Q,
						lineNumber: 64,
						columnNumber: 15
					}, this))
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 62,
					columnNumber: 11
				}, this),
				t("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${e.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: e.name === Z() ? Wi() : Xi()
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 72,
					columnNumber: 11
				}, this)
			]
		}, e.name, !0, {
			fileName: Q,
			lineNumber: 49,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 47,
		columnNumber: 5
	}, this);
}
var fa = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
m("en", { reload: !1 });
function pa({ children: n }) {
	return t(e, { children: n }, void 0, !1, {
		fileName: fa,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/pricing/PricingTiers.wrapper.tsx";
function ma() {
	return t(pa, { children: t(da, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { ma as default };
