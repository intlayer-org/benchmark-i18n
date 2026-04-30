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
], f = [], p, m;
function ee(e) {
	if (f.length === 0) return;
	let t = typeof e == "string" ? e : e.href;
	if (p === t) return m;
	let n = new URL(t, "http://dummy.com"), r;
	for (let e of f) if (new s(e.match, n.href).exec(n.href)) {
		r = e;
		break;
	}
	return p = t, m = r, r;
}
function h(e) {
	let t = ee(e);
	return t && t.exclude !== !0 && Array.isArray(t.strategy) ? t.strategy : d;
}
var g = void 0, _ = typeof window > "u";
globalThis.__paraglide = globalThis.__paraglide ?? {}, globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var v, y = !1, b = () => {
	if (g) {
		let e = g?.getStore()?.locale;
		if (e) return e;
	}
	let e = d;
	!_ && typeof window < "u" && window.location?.href && (e = h(window.location.href));
	let t = x(e, typeof window < "u" ? window.location?.href : void 0);
	if (t) return y || (v = t, y = !0, te(t, { reload: !1 })), t;
	throw Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
};
function x(e, t) {
	let n;
	for (let t of e) {
		if (t === "cookie") n = w();
		else if (t === "baseLocale") n = "en";
		else if (t === "globalVariable" && v !== void 0) n = v;
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
var S = (e) => {
	e ? window.location.href = e : window.location.reload();
}, te = (e, t) => {
	let n = {
		reload: !0,
		...t
	}, r;
	try {
		r = b();
	} catch {}
	let i = [], a = d;
	!_ && typeof window < "u" && window.location?.href && (a = h(window.location.href));
	for (let t of a) if (t === "globalVariable") v = e;
	else if (t === "cookie") {
		if (_ || typeof document > "u" || typeof window > "u") continue;
		let t = `${l}=${e}; path=/; max-age=${u}`;
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
		!_ && n.reload && window.location && e !== r && S(void 0);
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
var D = () => "Starter", O = () => "Starter", k = () => "Starter", A = () => "Starter", j = () => "Starter", M = () => "Starter", N = () => "入门版", P = () => "スターター", F = () => "Starter", I = () => "Starter", L = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? D(e) : n === "fr" ? O(e) : n === "es" ? k(e) : n === "de" ? A(e) : n === "it" ? j(e) : n === "pt" ? M(e) : n === "zh" ? N(e) : n === "ja" ? P(e) : n === "ko" ? F(e) : I(e);
}), R = () => "$0", z = () => "0 €", B = () => "0 $", V = () => "0 $", H = () => "0 $", U = () => "0 $", W = () => "0 $", G = () => "0円", K = () => "$0", q = () => "0 $", J = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? R(e) : n === "fr" ? z(e) : n === "es" ? B(e) : n === "de" ? V(e) : n === "it" ? H(e) : n === "pt" ? U(e) : n === "zh" ? W(e) : n === "ja" ? G(e) : n === "ko" ? K(e) : q(e);
}), Y = () => "forever", X = () => "pour toujours", Z = () => "para siempre", re = () => "für immer", ie = () => "per sempre", ae = () => "para sempre", oe = () => "永久", se = () => "ずっと無料", ce = () => "forever", le = () => "навсегда", ue = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? Y(e) : n === "fr" ? X(e) : n === "es" ? Z(e) : n === "de" ? re(e) : n === "it" ? ie(e) : n === "pt" ? ae(e) : n === "zh" ? oe(e) : n === "ja" ? se(e) : n === "ko" ? ce(e) : le(e);
}), de = () => "5 benchmark runs/day", fe = () => "5 exécutions de benchmark / jour", pe = () => "5 ejecuciones de benchmark al día", me = () => "5 Benchmark-Durchläufe/Tag", he = () => "5 esecuzioni benchmark al giorno", ge = () => "5 execuções de benchmark/dia", _e = () => "每天 5 次基准测试运行", ve = () => "1日あたり5回のベンチマーク実行", ye = () => "5 benchmark runs/day", be = () => "5 запусков бенчмарка в день", xe = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? de(e) : n === "fr" ? fe(e) : n === "es" ? pe(e) : n === "de" ? me(e) : n === "it" ? he(e) : n === "pt" ? ge(e) : n === "zh" ? _e(e) : n === "ja" ? ve(e) : n === "ko" ? ye(e) : be(e);
}), Se = () => "3 libraries", Ce = () => "3 bibliothèques", we = () => "3 bibliotecas", Te = () => "3 Bibliotheken", Ee = () => "3 librerie", De = () => "3 bibliotecas", Oe = () => "3 个库", ke = () => "3ライブラリ", Ae = () => "3 libraries", je = () => "3 библиотеки", Me = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? Se(e) : n === "fr" ? Ce(e) : n === "es" ? we(e) : n === "de" ? Te(e) : n === "it" ? Ee(e) : n === "pt" ? De(e) : n === "zh" ? Oe(e) : n === "ja" ? ke(e) : n === "ko" ? Ae(e) : je(e);
}), Ne = () => "Community support", Pe = () => "Support communautaire", Fe = () => "Soporte de la comunidad", Ie = () => "Community-Support", Le = () => "Supporto della comunità", Re = () => "Suporte da comunidade", ze = () => "社区支持", Be = () => "コミュニティサポート", Ve = () => "Community support", He = () => "Поддержка сообщества", Ue = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? Ne(e) : n === "fr" ? Pe(e) : n === "es" ? Fe(e) : n === "de" ? Ie(e) : n === "it" ? Le(e) : n === "pt" ? Re(e) : n === "zh" ? ze(e) : n === "ja" ? Be(e) : n === "ko" ? Ve(e) : He(e);
}), We = () => "Public results", Ge = () => "Résultats publics", Ke = () => "Resultados públicos", qe = () => "Öffentliche Ergebnisse", Je = () => "Risultati pubblici", Ye = () => "Resultados públicos", Xe = () => "公开结果", Ze = () => "公開結果", Qe = () => "Public results", $e = () => "Публичные результаты", et = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? We(e) : n === "fr" ? Ge(e) : n === "es" ? Ke(e) : n === "de" ? qe(e) : n === "it" ? Je(e) : n === "pt" ? Ye(e) : n === "zh" ? Xe(e) : n === "ja" ? Ze(e) : n === "ko" ? Qe(e) : $e(e);
}), tt = () => "Pro", nt = () => "Pro", rt = () => "Pro", it = () => "Pro", at = () => "Pro", ot = () => "Pro", st = () => "专业版", ct = () => "プロ", lt = () => "Pro", ut = () => "Pro", dt = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? tt(e) : n === "fr" ? nt(e) : n === "es" ? rt(e) : n === "de" ? it(e) : n === "it" ? at(e) : n === "pt" ? ot(e) : n === "zh" ? st(e) : n === "ja" ? ct(e) : n === "ko" ? lt(e) : ut(e);
}), ft = () => "$29", pt = () => "29 €", mt = () => "29 $", ht = () => "29 $", gt = () => "29 $", _t = () => "29 $", vt = () => "29 $", yt = () => "29ドル", bt = () => "$29", xt = () => "29 $", St = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? ft(e) : n === "fr" ? pt(e) : n === "es" ? mt(e) : n === "de" ? ht(e) : n === "it" ? gt(e) : n === "pt" ? _t(e) : n === "zh" ? vt(e) : n === "ja" ? yt(e) : n === "ko" ? bt(e) : xt(e);
}), Ct = () => "/month", wt = () => "/ mois", Tt = () => "/mes", Et = () => "/Monat", Dt = () => "/mese", Ot = () => "/mês", kt = () => "/月", At = () => "/月", jt = () => "/month", Mt = () => "/мес", Nt = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? Ct(e) : n === "fr" ? wt(e) : n === "es" ? Tt(e) : n === "de" ? Et(e) : n === "it" ? Dt(e) : n === "pt" ? Ot(e) : n === "zh" ? kt(e) : n === "ja" ? At(e) : n === "ko" ? jt(e) : Mt(e);
}), Pt = () => "Unlimited runs", Ft = () => "Exécutions illimitées", It = () => "Ejecuciones ilimitadas", Lt = () => "Unbegrenzte Durchläufe", Rt = () => "Esecuzioni illimitate", zt = () => "Execuções ilimitadas", Bt = () => "无限次运行", Vt = () => "無制限の実行", Ht = () => "Unlimited runs", Ut = () => "Неограниченное число запусков", Wt = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? Pt(e) : n === "fr" ? Ft(e) : n === "es" ? It(e) : n === "de" ? Lt(e) : n === "it" ? Rt(e) : n === "pt" ? zt(e) : n === "zh" ? Bt(e) : n === "ja" ? Vt(e) : n === "ko" ? Ht(e) : Ut(e);
}), Gt = () => "All libraries", Kt = () => "Toutes les bibliothèques", qt = () => "Todas las bibliotecas", Jt = () => "Alle Bibliotheken", Yt = () => "Tutte le librerie", Xt = () => "Todas as bibliotecas", Zt = () => "所有库", Qt = () => "すべてのライブラリ", $t = () => "All libraries", en = () => "Все библиотеки", tn = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? Gt(e) : n === "fr" ? Kt(e) : n === "es" ? qt(e) : n === "de" ? Jt(e) : n === "it" ? Yt(e) : n === "pt" ? Xt(e) : n === "zh" ? Zt(e) : n === "ja" ? Qt(e) : n === "ko" ? $t(e) : en(e);
}), nn = () => "Priority support", rn = () => "Support prioritaire", an = () => "Soporte prioritario", on = () => "Priorisierter Support", sn = () => "Supporto prioritario", cn = () => "Suporte prioritário", ln = () => "优先支持", un = () => "優先サポート", dn = () => "Priority support", fn = () => "Приоритетная поддержка", pn = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? nn(e) : n === "fr" ? rn(e) : n === "es" ? an(e) : n === "de" ? on(e) : n === "it" ? sn(e) : n === "pt" ? cn(e) : n === "zh" ? ln(e) : n === "ja" ? un(e) : n === "ko" ? dn(e) : fn(e);
}), mn = () => "Private results", hn = () => "Résultats privés", gn = () => "Resultados privados", _n = () => "Private Ergebnisse", vn = () => "Risultati privati", yn = () => "Resultados privados", bn = () => "私有结果", xn = () => "非公開の結果", Sn = () => "Private results", Cn = () => "Приватные результаты", wn = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? mn(e) : n === "fr" ? hn(e) : n === "es" ? gn(e) : n === "de" ? _n(e) : n === "it" ? vn(e) : n === "pt" ? yn(e) : n === "zh" ? bn(e) : n === "ja" ? xn(e) : n === "ko" ? Sn(e) : Cn(e);
}), Tn = () => "CI integration", En = () => "Intégration CI", Dn = () => "Integración CI", On = () => "CI-Integration", kn = () => "Integrazione CI", An = () => "Integração CI", jn = () => "CI 集成", Mn = () => "CI統合", Nn = () => "CI integration", Pn = () => "Интеграция с CI", Fn = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? Tn(e) : n === "fr" ? En(e) : n === "es" ? Dn(e) : n === "de" ? On(e) : n === "it" ? kn(e) : n === "pt" ? An(e) : n === "zh" ? jn(e) : n === "ja" ? Mn(e) : n === "ko" ? Nn(e) : Pn(e);
}), In = () => "Historical data", Ln = () => "Historique", Rn = () => "Datos históricos", zn = () => "Historische Daten", Bn = () => "Dati storici", Vn = () => "Dados históricos", Hn = () => "历史数据", Un = () => "履歴データ", Wn = () => "Historical data", Gn = () => "Исторические данные", Kn = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? In(e) : n === "fr" ? Ln(e) : n === "es" ? Rn(e) : n === "de" ? zn(e) : n === "it" ? Bn(e) : n === "pt" ? Vn(e) : n === "zh" ? Hn(e) : n === "ja" ? Un(e) : n === "ko" ? Wn(e) : Gn(e);
}), qn = () => "Enterprise", Jn = () => "Enterprise", Yn = () => "Enterprise", Xn = () => "Enterprise", Zn = () => "Enterprise", Qn = () => "Enterprise", $n = () => "企业版", er = () => "エンタープライズ", tr = () => "Enterprise", nr = () => "Enterprise", Q = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? qn(e) : n === "fr" ? Jn(e) : n === "es" ? Yn(e) : n === "de" ? Xn(e) : n === "it" ? Zn(e) : n === "pt" ? Qn(e) : n === "zh" ? $n(e) : n === "ja" ? er(e) : n === "ko" ? tr(e) : nr(e);
}), rr = () => "Custom", ir = () => "Sur mesure", ar = () => "Personalizado", or = () => "Individuell", sr = () => "Personalizzato", cr = () => "Personalizado", lr = () => "定制", ur = () => "カスタム", dr = () => "Custom", fr = () => "Индивидуально", pr = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? rr(e) : n === "fr" ? ir(e) : n === "es" ? ar(e) : n === "de" ? or(e) : n === "it" ? sr(e) : n === "pt" ? cr(e) : n === "zh" ? lr(e) : n === "ja" ? ur(e) : n === "ko" ? dr(e) : fr(e);
}), mr = () => "Everything in Pro", hr = () => "Tout le Pro", gr = () => "Todo lo que hay en Pro", _r = () => "Alles in Pro enthalten", vr = () => "Tutto quello che c'è in Pro", yr = () => "Tudo o que está no Pro", br = () => "包含专业版中的所有功能", xr = () => "Proプランのすべてを含む", Sr = () => "Everything in Pro", Cr = () => "Все, что есть в Pro", wr = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? mr(e) : n === "fr" ? hr(e) : n === "es" ? gr(e) : n === "de" ? _r(e) : n === "it" ? vr(e) : n === "pt" ? yr(e) : n === "zh" ? br(e) : n === "ja" ? xr(e) : n === "ko" ? Sr(e) : Cr(e);
}), Tr = () => "On-premise option", Er = () => "Option on-premise", Dr = () => "Opción on-premise", Or = () => "On-Premise-Option", kr = () => "Opzione on-premise", Ar = () => "Opção on-premise", jr = () => "本地部署选项", Mr = () => "オンプレミスオプション", Nr = () => "On-premise option", Pr = () => "Локальная установка", Fr = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? Tr(e) : n === "fr" ? Er(e) : n === "es" ? Dr(e) : n === "de" ? Or(e) : n === "it" ? kr(e) : n === "pt" ? Ar(e) : n === "zh" ? jr(e) : n === "ja" ? Mr(e) : n === "ko" ? Nr(e) : Pr(e);
}), Ir = () => "SSO & SAML", Lr = () => "SSO et SAML", Rr = () => "SSO y SAML", zr = () => "SSO & SAML", Br = () => "SSO e SAML", Vr = () => "SSO e SAML", Hr = () => "SSO 和 SAML", Ur = () => "SSO & SAML", Wr = () => "SSO & SAML", Gr = () => "SSO и SAML", Kr = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? Ir(e) : n === "fr" ? Lr(e) : n === "es" ? Rr(e) : n === "de" ? zr(e) : n === "it" ? Br(e) : n === "pt" ? Vr(e) : n === "zh" ? Hr(e) : n === "ja" ? Ur(e) : n === "ko" ? Wr(e) : Gr(e);
}), qr = () => "Dedicated account manager", Jr = () => "Account manager dédié", Yr = () => "Gestor de cuentas dedicado", Xr = () => "Dedizierter Account Manager", Zr = () => "Account manager dedicato", Qr = () => "Gerente de conta dedicado", $r = () => "专属客户经理", ei = () => "専任のアカウントマネージャー", ti = () => "Dedicated account manager", ni = () => "Персональный менеджер", ri = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? qr(e) : n === "fr" ? Jr(e) : n === "es" ? Yr(e) : n === "de" ? Xr(e) : n === "it" ? Zr(e) : n === "pt" ? Qr(e) : n === "zh" ? $r(e) : n === "ja" ? ei(e) : n === "ko" ? ti(e) : ni(e);
}), ii = () => "Custom SLAs", ai = () => "SLA sur mesure", oi = () => "SLAs personalizados", si = () => "Individuelle SLAs", ci = () => "SLA personalizzati", li = () => "SLAs personalizados", ui = () => "定制 SLA", di = () => "カスタムSLA", fi = () => "Custom SLAs", pi = () => "Индивидуальные SLA", mi = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? ii(e) : n === "fr" ? ai(e) : n === "es" ? oi(e) : n === "de" ? si(e) : n === "it" ? ci(e) : n === "pt" ? li(e) : n === "zh" ? ui(e) : n === "ja" ? di(e) : n === "ko" ? fi(e) : pi(e);
}), hi = () => "Audit logs", gi = () => "Journaux d'audit", _i = () => "Registros de auditoría", vi = () => "Audit-Protokolle", yi = () => "Log di controllo", bi = () => "Logs de auditoria", xi = () => "审计日志", Si = () => "監査ログ", Ci = () => "Audit logs", wi = () => "Журналы аудита", Ti = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? hi(e) : n === "fr" ? gi(e) : n === "es" ? _i(e) : n === "de" ? vi(e) : n === "it" ? yi(e) : n === "pt" ? bi(e) : n === "zh" ? xi(e) : n === "ja" ? Si(e) : n === "ko" ? Ci(e) : wi(e);
}), Ei = () => "Training sessions", Di = () => "Sessions de formation", Oi = () => "Sesiones de formación", ki = () => "Schulungssitzungen", Ai = () => "Sessioni di formazione", ji = () => "Sessões de treinamento", Mi = () => "培训课程", Ni = () => "トレーニングセッション", Pi = () => "Training sessions", Fi = () => "Обучающие сессии", Ii = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? Ei(e) : n === "fr" ? Di(e) : n === "es" ? Oi(e) : n === "de" ? ki(e) : n === "it" ? Ai(e) : n === "pt" ? ji(e) : n === "zh" ? Mi(e) : n === "ja" ? Ni(e) : n === "ko" ? Pi(e) : Fi(e);
}), Li = () => "Contact Sales", Ri = () => "Contacter les ventes", $ = () => "Contactar con ventas", zi = () => "Vertrieb kontaktieren", Bi = () => "Contatta l'ufficio vendite", Vi = () => "Contatar vendas", Hi = () => "联系销售", Ui = () => "営業に問い合わせる", Wi = () => "Contact Sales", Gi = () => "Связаться с отделом продаж", Ki = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? Li(e) : n === "fr" ? Ri(e) : n === "es" ? $(e) : n === "de" ? zi(e) : n === "it" ? Bi(e) : n === "pt" ? Vi(e) : n === "zh" ? Hi(e) : n === "ja" ? Ui(e) : n === "ko" ? Wi(e) : Gi(e);
}), qi = () => "Get Started", Ji = () => "Commencer", Yi = () => "Empezar", Xi = () => "Erste Schritte", Zi = () => "Inizia ora", Qi = () => "Começar", $i = () => "开始使用", ea = () => "始める", ta = () => "Get Started", na = () => "Начать работу", ra = ((e = {}, t = {}) => {
	let n = t.locale ?? b();
	return n === "en" ? qi(e) : n === "fr" ? Ji(e) : n === "es" ? Yi(e) : n === "de" ? Xi(e) : n === "it" ? Zi(e) : n === "pt" ? Qi(e) : n === "zh" ? $i(e) : n === "ja" ? ea(e) : n === "ko" ? ta(e) : na(e);
}), ia = a("<div class=\"grid gap-6 md:grid-cols-3\">"), aa = a("<div><h3 class=\"text-lg font-semibold text-foreground\"></h3><div class=my-4><span class=\"text-3xl font-bold text-foreground\"></span><span class=\"text-sm text-muted-foreground\"></span></div><ul class=\"mb-6 flex-1 space-y-2\"></ul><button type=button>"), oa = a("<li class=\"flex items-center gap-2 text-sm text-muted-foreground\"><span class=text-primary>✓</span> ");
function sa() {
	let a = () => [
		{
			name: L(),
			price: J(),
			period: ue(),
			features: [
				xe(),
				Me(),
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
	];
	return (() => {
		var s = ia();
		return r(s, t(o, {
			get each() {
				return a();
			},
			children: (a) => (() => {
				var s = aa(), c = s.firstChild, l = c.nextSibling, u = l.firstChild, d = u.nextSibling, f = l.nextSibling, p = f.nextSibling;
				return r(c, () => a.name), r(u, () => a.price), r(d, () => a.period), r(f, t(o, {
					get each() {
						return a.features;
					},
					children: (e) => (() => {
						var t = oa();
						return t.firstChild.nextSibling, r(t, e, null), t;
					})()
				})), r(p, (() => {
					var e = i(() => a.name === Q());
					return () => e() ? Ki() : ra();
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
export { sa as default };
