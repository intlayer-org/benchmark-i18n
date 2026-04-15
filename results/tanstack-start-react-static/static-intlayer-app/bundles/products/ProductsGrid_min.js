import {
  Fragment as e,
  createContext as t,
  createElement as n,
  isValidElement as r,
  lazy as i,
  useContext as a,
  useEffect as o,
  useMemo as s,
  useRef as c,
  useState as ee,
} from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
var f = {
    key: "products-grid",
    content: /* @__PURE__ */ JSON.parse(
      '{"nodeType":"translation","translation":{"en":{"e":"Benchmark CLI","r":"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.","f":"Benchmark Cloud","c":"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.","g":"Benchmark Enterprise","m":"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.","i":"Contact Us","l":"Migration Assistant","a":"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.","s":"Translation QA","d":"Automated quality checks for missing translations, pluralization issues, and context errors.","h":"Bundle Optimizer","b":"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.","k":"Learn More","j":"Free","o":"$29/mo","q":"$99 one-time","n":"$19/mo","p":"$49/mo"},"fr":{"e":"CLI de Benchmark","r":"Lancez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l\'intégration CI.","f":"Benchmark Cloud","c":"Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d\'équipe.","g":"Benchmark Entreprise","m":"Déploiement sur site avec SSO, journaux d\'audit, SLA personnalisés et support dédié.","i":"Contactez-nous","l":"Assistant de Migration","a":"Outil propulsé par l\'IA qui aide à migrer votre codebase entre les bibliothèques i18n sans temps d\'arrêt.","s":"QA de Traduction","d":"Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.","h":"Optimiseur de Bundle","b":"Analyse et optimise votre bundle i18n pour la production avec le tree-shaking et le fractionnement du code.","k":"En savoir plus","j":"Gratuit","o":"29 $/mois","q":"99 $ une fois","n":"19 $/mois","p":"49 $/mois"},"es":{"e":"CLI de Benchmark","r":"Realice benchmarks localmente desde su terminal. Admite configuraciones personalizadas e integración de CI.","f":"Benchmark Cloud","c":"Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.","g":"Benchmark para Empresas","m":"Implementación local con SSO, registros de auditoría, SLA personalizados y soporte dedicado.","i":"Contáctenos","l":"Asistente de Migración","a":"Herramienta impulsada por IA que ayuda a migrar su base de código entre bibliotecas de i18n sin tiempo de inactividad.","s":"QA de Traducción","d":"Comprobaciones de calidad automatizadas para traducciones faltantes, problemas de pluralización y errores de contexto.","h":"Optimizador de Bundles","b":"Analiza y optimiza su bundle i18n para producción con tree-shaking y división de código.","k":"Más información","j":"Gratis","o":"29 $/mes","q":"99 $ pago único","n":"19 $/mes","p":"49 $/mes"},"de":{"e":"Benchmark-CLI","r":"Führen Sie Benchmarks lokal von Ihrem Terminal aus durch. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.","f":"Benchmark-Cloud","c":"Automatisierte cloudbasierte Benchmarks mit Verlaufsverfolgung, Benachrichtigungen und Team-Dashboards.","g":"Benchmark-Enterprise","m":"On-Premise-Bereitstellung mit SSO, Audit-Logs, benutzerdefinierten SLAs und dediziertem Support.","i":"Kontaktieren Sie uns","l":"Migrations-Assistent","a":"KI-gestütztes Tool, das bei der Migration Ihrer Codebasis zwischen i18n-Bibliotheken ohne Ausfallzeiten hilft.","s":"Übersetzungs-QA","d":"Automatisierte Qualitätsprüfungen auf fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.","h":"Bundle-Optimierer","b":"Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code Splitting.","k":"Mehr erfahren","j":"Kostenlos","o":"29 €/Monat","q":"99 € einmalig","n":"19 €/Monat","p":"49 €/Monat"},"it":{"e":"CLI di benchmark","r":"Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.","f":"Benchmark cloud","c":"Benchmarking automatizzato basato su cloud con monitoraggio storico, avvisi e dashboard per i team.","g":"Benchmark enterprise","m":"Distribuzione on-premise con SSO, log di audit, SLA personalizzati e supporto dedicato.","i":"Contattaci","l":"Assistente alla migrazione","a":"Strumento basato sull’intelligenza artificiale che aiuta a migrare il codebase tra le librerie i18n senza tempi d’interruzione.","s":"QA di traduzione","d":"Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.","h":"Ottimizzatore bundle","b":"Analizza e ottimizza il bundle i18n per la produzione con tree-shaking e suddivisione del codice.","k":"Scopri di più","j":"Gratis","o":"29 €/mese","q":"99 € una volta","n":"19 €/mese","p":"49 €/mese"},"pt":{"e":"CLI do Benchmark","r":"Execute benchmarks localmente em seu terminal. Suporta configurações personalizadas e integração de CI.","f":"Benchmark Cloud","c":"Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.","g":"Benchmark Enterprise","m":"Implantação local com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.","i":"Contate-nos","l":"Assistente de Migração","a":"Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.","s":"QA de Tradução","d":"Verificações automáticas de qualidade para traduções ausentes, problemas de pluralização e erros de contexto.","h":"Otimizador de Bundle","b":"Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.","k":"Saiba mais","j":"Grátis","o":"29 €/mês","q":"99 € pagamento único","n":"19 €/mês","p":"49 €/mês"},"zh":{"e":"基准测试 CLI","r":"在终端本地运行基准测试。支持自定义配置和 CI 集成。","f":"基准测试云","c":"基于云的自动化基准测试，具有历史跟踪、警报和团队仪表板。","g":"基准测试企业版","m":"采用 SSO、审核日志、自定义 SLA 和专用支持的本地部署。","i":"联系我们","l":"迁移助手","a":"由人工智能驱动的工具，可帮助您在 i18n 库之间迁移代码库，实现零停机时间。","s":"翻译质量保证","d":"针对缺失翻译、复数问题和上下文错误的自动化质量检查。","h":"包优化器","b":"通过摇树优化和代码拆分，分析并在生产环境中优化 i18n 包。","k":"了解更多","j":"免费","o":"29 美元/月","q":"99 美元一次性","n":"19 美元/月","p":"49 美元/月"},"ja":{"e":"ベンチマーク CLI","r":"ターミナルからローカルでベンチマークを実行します。カスタム構成と CI 統合をサポートします。","f":"ベンチマーククラウド","c":"履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。","g":"ベンチマークエンタープライズ","m":"SSO、監査ログ、カスタム SLA、および専用サポートを備えたオンプレミス展開。","i":"お問い合わせ","l":"移行アシスタント","a":"i18n ライブラリ間のコードベースをダウンタイムなしで移行するのに役立つ AI 搭載ツール。","s":"翻訳 QA","d":"翻訳の欠落、複数形の問題、コンテキストエラーに対する自動品質チェック。","h":"バンドルオプティマイザー","b":"生産向けに i18n バンドルをツリーシェイキングとコード分割で分析・最適化します。","k":"詳細はこちら","j":"無料","o":"29 ドル/月","q":"99 ドルの1回払い","n":"19 ドル/月","p":"49 ドル/月"},"ko":{"e":"벤치마크 CLI","r":"터미널에서 로컬로 벤치마크를 실행합니다. 사용자 지정 구성 및 CI 통합을 지원합니다.","f":"벤치마크 클라우드","c":"기록 추적, 알림 및 팀 대시보드를 제공하는 자동화된 클라우드 기반 벤치마킹.","g":"벤치마크 엔터프라이즈","m":"SSO, 감사 로그, 사용자 지정 SLA 및 전담 지원을 제공하는 온프레미스 배포.","i":"문의하기","l":"마이그레이션 어시스턴트","a":"코드베이스를 가동 중지 시간 없이 i18n 라이브러리 간에 마이그레이션할 수 있도록 지원하는 AI 기반 도구입니다.","s":"번역 QA","d":"누락된 번역, 복수화 문제 및 상황별 오류에 대한 자동화된 품질 검사.","h":"번들 최적화기","b":"트리 쉐이킹 및 코드 분할을 사용하여 프로덕션용 i18n 번들을 분석하고 최적화합니다.","k":"자세히 알아보기","j":"무료","o":"29 달러/월","q":"99 달러 일회성","n":"19 달러/월","p":"49 달러/월"},"ru":{"e":"CLI для бенчмаркинга","r":"Запуск тестов локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.","f":"Облачный бенчмаркинг","c":"Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными панелями.","g":"Корпоративный бенчмаркинг","m":"Локальное развертывание с поддержкой SSO, журналами аудита, настраиваемыми SLA и выделенной поддержкой.","i":"Связаться с нами","l":"Помощник по миграции","a":"Инструмент на базе ИИ, помогающий мигрировать вашу кодовую базу между библиотеками i18n без простоев.","s":"Контроль качества перевода","d":"Автоматизированная проверка качества на предмет отсутствующих переводов, проблем с плюрализацией и контекстных ошибок.","h":"Оптимизатор бандлов","b":"Анализирует и оптимизирует ваш бандл i18n для продакшна с использованием tree-shaking и разделения кода.","k":"Узнать больше","j":"Бесплатно","o":"$29/мес","q":"99 $ единоразово","n":"$19/мес","p":"$49/мес"}}}',
    ),
  },
  p = {
    locales: ["en", "fr", "es", "de", "it", "pt", "zh", "ja", "ko", "ru"],
    defaultLocale: "en",
  },
  m = {
    mode: "prefix-all",
    storage: {
      cookies: [
        {
          name: "INTLAYER_LOCALE",
          attributes: {},
        },
      ],
      headers: [{ name: "x-intlayer-locale" }],
    },
    basePath: "",
  },
  h = ({ children: e, value: t, additionalProps: n }) => {
    let i = r(e) ? e : /* @__PURE__ */ u(l, { children: e });
    return new Proxy(i, {
      get(e, r, i) {
        return r === "value"
          ? t
          : n && Object.keys(n).includes(r)
            ? n[r]
            : Reflect.get(e, r, i);
      },
    });
  },
  g = (e) => {
    if (typeof e != "object" || !e) return e;
    let { type: t, props: r } = ((e) => {
      let t = e.props?.children;
      if (Array.isArray(t)) {
        let r = t.map((e, t) => {
          let r = g(e);
          if (typeof r == "object" && r && "type" in r) {
            let e = r;
            return n(
              e.type,
              {
                ...e.props,
                key: t,
              },
              ...(Array.isArray(e.props?.children)
                ? e.props.children
                : e.props?.children === void 0
                  ? []
                  : [e.props.children]),
            );
          }
          return r;
        });
        return {
          ...e,
          props: {
            ...e.props,
            children: r,
          },
        };
      } else if (t != null) {
        let n = g(t);
        return {
          ...e,
          props: {
            ...e.props,
            children: [n],
          },
        };
      }
      return {
        ...e,
        props: {
          ...e.props,
          children: [],
        },
      };
    })(e);
    return n(t ?? "span", r, ...r.children);
  },
  te = "translation",
  _ = "insertion",
  v = "object",
  ne = "array",
  y = (e, t) => {
    for (let n of t.plugins ?? [])
      if (n.canHandle(e)) return n.transform(e, t, (e, t) => y(e, t));
    if (
      typeof e != "object" ||
      !e ||
      e.$$typeof !== void 0 ||
      e.__v_isVNode !== void 0 ||
      e._isVNode !== void 0 ||
      e.isJSX !== void 0 ||
      typeof e == "function"
    )
      return e;
    if (Array.isArray(e))
      return e.map((e, n) =>
        y(e, {
          ...t,
          children: e,
          keyPath: [
            ...t.keyPath,
            {
              type: ne,
              key: n,
            },
          ],
        }),
      );
    let n = {};
    for (let r in e) {
      let i = {
        ...t,
        children: e[r],
        keyPath: [
          ...t.keyPath,
          {
            type: v,
            key: r,
          },
        ],
      };
      n[r] = y(e[r], i);
    }
    return n;
  },
  re = (e, t) =>
    e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()),
  b = (e) => {
    if (
      typeof e != "object" ||
      !e ||
      typeof e.then == "function" ||
      e.$$typeof !== void 0 ||
      e.__v_isVNode !== void 0 ||
      e._isVNode !== void 0 ||
      e.isJSX !== void 0
    )
      return !1;
    let t = Object.getPrototypeOf(e);
    return t === Object.prototype || t === null || Array.isArray(e);
  },
  x = (e, t) => {
    if (e === void 0) return t;
    if (t === void 0 || Array.isArray(e)) return e;
    if (b(e) && b(t)) {
      let n = { ...e };
      for (let r of Object.keys(t))
        r === "__proto__" ||
          r === "constructor" ||
          t[r] === void 0 ||
          (n[r] = e[r] === void 0 ? t[r] : x(e[r], t[r]));
      return n;
    }
    return e;
  },
  S = (e, t, n) => {
    let r = (t) => e[t],
      i = /* @__PURE__ */ new Set(),
      a = [],
      o = (e) => {
        e && !i.has(e) && (i.add(e), a.push(e));
      };
    (o(t),
      t.includes("-") && o(t.split("-")[0]),
      o(n),
      n?.includes("-") && o(n.split("-")[0]));
    let s = [];
    for (let e of a) {
      let t = r(e);
      if (t !== void 0) {
        if (typeof t == "string") {
          if (s.length === 0) return t;
          continue;
        }
        s.push(t);
      }
    }
    if (s.length !== 0)
      return s.length === 1 || Array.isArray(s[0])
        ? s[0]
        : s.reduce((e, t) => x(e, t));
  },
  C = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false",
  w = process.env.INTLAYER_NODE_TYPE_INSERTION === "false",
  T = {
    id: "fallback-plugin",
    canHandle: () => !1,
    transform: (e) => e,
  },
  E = (e, t) =>
    C
      ? T
      : {
          id: "translation-plugin",
          canHandle: (e) =>
            typeof e == "object" && e?.nodeType === "translation",
          transform: (n, r, i) => {
            let a = { ...(n.translation ?? {}) };
            for (let e in a) {
              let t = {
                ...r,
                children: a[e],
                keyPath: [
                  ...r.keyPath,
                  {
                    type: te,
                    key: e,
                  },
                ],
              };
              a[e] = i(a[e], t);
            }
            return S(a, e, t);
          },
        },
  D = T,
  O = T,
  ie = w
    ? T
    : {
        id: "insertion-plugin",
        canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
        transform: (e, t, n) => {
          let r = [...t.keyPath, { type: _ }],
            i = e[_],
            a = {
              id: "insertion-string-plugin",
              canHandle: (e) => typeof e == "string",
              transform: (e, n, r) => {
                let i = r(e, {
                  ...n,
                  children: e,
                  plugins: [
                    ...(t.plugins ?? []).filter(
                      (e) => e.id !== "intlayer-node-plugin",
                    ),
                  ],
                });
                return (e) => {
                  let a = re(i, e);
                  return r(a, {
                    ...n,
                    plugins: t.plugins,
                    children: a,
                  });
                };
              },
            };
          return n(i, {
            ...t,
            children: i,
            keyPath: r,
            plugins: [a, ...(t.plugins ?? [])],
          });
        },
      },
  k = T,
  A = (e) => T,
  j = T,
  M = (e, t = !0) =>
    [
      E(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
      D,
      O,
      ie,
      A(e ?? p.defaultLocale),
      j,
      k,
    ].filter(Boolean),
  N = (e, t, n = []) =>
    y(e, {
      ...t,
      plugins: n,
    }),
  P = (e, t, n = M(t)) => {
    let r = {
      dictionaryKey: e.key,
      dictionaryPath: e.filePath,
      keyPath: [],
      plugins: n,
    };
    return N(e.content, r, n);
  },
  F = (e) =>
    e != null &&
    typeof e != "string" &&
    typeof e != "number" &&
    typeof e != "boolean",
  I = /\{\{\s*(.*?)\s*\}\}/g,
  L = (e, t = {}) => {
    if (!Object.values(t).some(F))
      return {
        isSimple: !0,
        parts: e.replace(I, (e, n) => (t[n.trim()] ?? "").toString()),
      };
    let n = e.split(I),
      r = [];
    for (let e = 0; e < n.length; e++)
      if (e % 2 == 0) n[e] && r.push(n[e]);
      else {
        let i = t[n[e].trim()];
        i != null && r.push(i);
      }
    return {
      isSimple: !1,
      parts: r,
    };
  },
  R = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false",
  z = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false",
  B = process.env.INTLAYER_NODE_TYPE_INSERTION === "false";
(i(() =>
  import("./MarkdownRendererPlugin-55VIgmar.js").then((e) => ({
    default: e.MarkdownRendererPlugin,
  })),
),
  i(() =>
    import("./HTMLRendererPlugin-Cfd3z5Bm.js").then((e) => ({
      default: e.HTMLRendererPlugin,
    })),
  ));
var V = R
    ? T
    : {
        id: "intlayer-node-plugin",
        canHandle: (e) =>
          typeof e == "bigint" || typeof e == "string" || typeof e == "number",
        transform: (e, { plugins: t, ...n }) =>
          h({
            ...n,
            value: n.children,
            children: n.children,
          }),
      },
  H = z
    ? T
    : {
        id: "react-node-plugin",
        canHandle: (e) =>
          typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
        transform: (e, { plugins: t, ...n }) =>
          h({
            ...n,
            value: "[[react-element]]",
            children: g(e),
          }),
      },
  U = (t, r) => {
    let i = L(t, r);
    return i.isSimple
      ? i.parts
      : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
  },
  W = B
    ? T
    : {
        id: "insertion-plugin",
        canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
        transform: (e, t, n) => {
          let r = [...t.keyPath, { type: _ }],
            i = e[_],
            a = {
              id: "insertion-string-plugin",
              canHandle: (e) => typeof e == "string",
              transform: (e, n, r) => {
                let i = r(e, {
                  ...n,
                  children: e,
                  plugins: [
                    ...(t.plugins ?? []).filter(
                      (e) => e.id !== "intlayer-node-plugin",
                    ),
                  ],
                });
                return (e) => {
                  let a = U(i, e);
                  return r(a, {
                    ...n,
                    plugins: t.plugins,
                    children: a,
                  });
                };
              },
            },
            o = n(i, {
              ...t,
              children: i,
              keyPath: r,
              plugins: [a, ...(t.plugins ?? [])],
            });
          return typeof i == "object" &&
            i &&
            "nodeType" in i &&
            ["enumeration", "condition"].includes(i.nodeType)
            ? (e) => (t) => {
                let n = o(t);
                return typeof n == "function" ? n(e) : n;
              }
            : o;
        },
      },
  ae = T,
  G = T,
  K = (e, t = !0) =>
    [
      E(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
      D,
      O,
      A(e ?? p.defaultLocale),
      j,
      k,
      V,
      H,
      W,
      ae,
      G,
    ].filter(Boolean),
  q = (e, t) => P(e, t, K(t)),
  J = (e, t = p?.locales, n = p?.defaultLocale) => {
    let r = [e].flat(),
      i = (e) => e.trim().toLowerCase();
    try {
      for (let e of r) {
        let n = i(e),
          r = t.find((e) => i(e) === n);
        if (r) return r;
        let [a] = n.split("-"),
          o = t.find((e) => i(e).split("-")[0] === a);
        if (o) return o;
      }
    } catch {}
    return n;
  },
  Y = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var oe = (e, t, n) => {
    let r = [`${e}=${encodeURIComponent(t)}`];
    return (
      n.path && r.push(`Path=${n.path}`),
      n.domain && r.push(`Domain=${n.domain}`),
      n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`),
      n.secure && r.push("Secure"),
      n.sameSite && r.push(`SameSite=${n.sameSite}`),
      r.join("; ")
    );
  },
  se = (e) => {
    let { locales: t } = p;
    if (e?.isCookieEnabled === !1) return;
    let n = (e) => !!e && t.includes(e);
    if (!Y)
      for (let t = 0; t < (m.storage.cookies ?? []).length; t++)
        try {
          let r = e?.getCookie?.(m.storage.cookies[t].name);
          if (n(r)) return r;
        } catch {}
  },
  ce = (e, t) => {
    if (t?.isCookieEnabled !== !1 && !Y && m.storage.cookies)
      for (let n = 0; n < m.storage.cookies.length; n++) {
        let { name: r, attributes: i } = m.storage.cookies[n];
        try {
          t?.setCookieStore &&
            t.setCookieStore(r, e, {
              ...i,
              expires:
                i.expires instanceof Date ? i.expires.getTime() : i.expires,
            });
        } catch {
          try {
            t?.setCookieString && t.setCookieString(r, oe(r, e, i));
          } catch {}
        }
      }
  },
  X = {
    getCookie: (e) =>
      document.cookie
        .split(";")
        .find((t) => t.trim().startsWith(`${e}=`))
        ?.split("=")[1],
    getLocaleStorage: (e) => localStorage.getItem(e),
    getSessionStorage: (e) => sessionStorage.getItem(e),
    isCookieEnabled: !0,
    setCookieStore: (e, t, n) =>
      cookieStore.set({
        name: e,
        value: t,
        path: n.path,
        domain: n.domain,
        expires: n.expires,
        sameSite: n.sameSite,
      }),
    setCookieString: (e, t) => {
      document.cookie = t;
    },
    setSessionStorage: (e, t) => sessionStorage.setItem(e, t),
    setLocaleStorage: (e, t) => localStorage.setItem(e, t),
  },
  Z = se(X),
  le = (e, t) =>
    ce(e, {
      ...X,
      isCookieEnabled: t,
    }),
  ue = () => {
    let { locale: e } = a(Q) ?? {},
      t = c(null);
    (o(() => {}, []),
      o(() => {
        !e || !t.current || t.current.currentLocale.set(e);
      }, [e]));
  },
  de = ({ children: e }) => (ue(), e),
  fe = () => {
    typeof window < "u" && (window.intlayer = { enabled: !0 });
  },
  Q = t({
    locale: Z ?? p?.defaultLocale,
    setLocale: () => null,
    isCookieEnabled: !0,
  }),
  pe = ({
    locale: e,
    defaultLocale: t,
    children: n,
    setLocale: r,
    disableEditor: i,
    isCookieEnabled: a,
  }) => {
    let { locales: s, defaultLocale: c } = p ?? {},
      [l, d] = ee(e ?? Z ?? t ?? c);
    (o(() => {
      e && e !== l && d(e);
    }, [e]),
      o(() => {
        fe();
      }, []));
    let f =
        r ??
        ((e) => {
          if (l.toString() !== e.toString()) {
            if (!s?.map(String).includes(e)) {
              console.error(`Locale ${e} is not available`);
              return;
            }
            (d(e), le(e, a));
          }
        }),
      m = J(l);
    return /* @__PURE__ */ u(Q.Provider, {
      value: {
        locale: m,
        setLocale: f,
        disableEditor: i,
      },
      children: n,
    });
  },
  $ = ({ children: e, ...t }) =>
    /* @__PURE__ */ d(pe, {
      ...t,
      children: [/* @__PURE__ */ u(de, {}), e],
    }),
  me = (e, t) => {
    let { locale: n } = a(Q) ?? {};
    return s(() => q(e, t ?? n), [e.key, n, t]);
  };
//#endregion
//#region src/components/pages/products/ProductsGrid.tsx
function he() {
  let e = me(f);
  return /* @__PURE__ */ u("div", {
    className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
    children: [
      {
        name: e.e.value,
        desc: e.r.value,
        price: e.j.value,
      },
      {
        name: e.f.value,
        desc: e.c.value,
        price: e.o.value,
      },
      {
        name: e.g.value,
        desc: e.m.value,
        price: e.i.value,
      },
      {
        name: e.l.value,
        desc: e.a.value,
        price: e.q.value,
      },
      {
        name: e.s.value,
        desc: e.d.value,
        price: e.n.value,
      },
      {
        name: e.h.value,
        desc: e.b.value,
        price: e.p.value,
      },
    ].map((t) =>
      /* @__PURE__ */ d(
        "div",
        {
          className:
            "flex flex-col justify-between rounded-lg border border-border bg-card p-6",
          children: [
            /* @__PURE__ */ d("div", {
              children: [
                /* @__PURE__ */ u("h3", {
                  className: "mb-2 text-lg font-semibold text-foreground",
                  children: t.name,
                }),
                /* @__PURE__ */ u("p", {
                  className: "mb-4 text-sm text-muted-foreground",
                  children: t.desc,
                }),
              ],
            }),
            /* @__PURE__ */ d("div", {
              className: "flex items-center justify-between",
              children: [
                /* @__PURE__ */ u("span", {
                  className: "text-sm font-bold text-primary",
                  children: t.price,
                }),
                /* @__PURE__ */ u("button", {
                  type: "button",
                  className:
                    "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity",
                  children: e.k,
                }),
              ],
            }),
          ],
        },
        t.name,
      ),
    ),
  });
}
//#endregion
//#region scripts/Wrapper.tsx
function ge({ children: e }) {
  return /* @__PURE__ */ u($, {
    locale: "en",
    children: e,
  });
}
//#endregion
//#region src/components/pages/products/ProductsGrid.wrapper.tsx
function _e() {
  return /* @__PURE__ */ u(ge, { children: /* @__PURE__ */ u(he, {}) });
}
//#endregion
export { _e as default };
import {
  Fragment as e,
  createContext as t,
  createElement as n,
  useContext as r,
} from "react";
import { jsx as i } from "react/jsx-runtime";
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/interpreter/getHTML.mjs
var a = (e) => {
    let t = {},
      n = /([a-zA-Z0-9-]+)="([^"]*)"/g,
      r = n.exec(e);
    for (; r !== null; ) ((t[r[1]] = r[2]), (r = n.exec(e)));
    return t;
  },
  o = /* @__PURE__ */ new Map(),
  s = (e) => {
    if (o.has(e)) return o.get(e);
    if (typeof e != "string") return [];
    let t = /<(\/)?([a-zA-Z0-9.-]+)([\s\S]*?)(\/?)>/g,
      n = [],
      r = [],
      i = 0,
      s = t.exec(e),
      c = (e) => {
        (r.length > 0 ? r[r.length - 1].children : n).push(e);
      };
    for (; s !== null; ) {
      let [n, o, l, u, d] = s,
        f = s.index;
      f > i && c(e.slice(i, f));
      let p = o === "/",
        m = d === "/" || u.trim().endsWith("/") || n.endsWith("/>"),
        h = u.trim().replace(/\/$/, "").trim();
      if (p) {
        let e = r[r.length - 1];
        if (e && e.tagName === l) {
          let e = r.pop();
          e &&
            c({
              tagName: e.tagName,
              props: e.props,
              children: e.children,
            });
        }
      } else if (m)
        c({
          tagName: l,
          props: a(h),
          children: [],
        });
      else {
        let e = a(h);
        r.push({
          tagName: l,
          children: [],
          props: e,
        });
      }
      ((i = f + n.length), (s = t.exec(e)));
    }
    for (i < e.length && c(e.slice(i)); r.length > 0; ) {
      let e = r.pop();
      e &&
        c({
          tagName: e.tagName,
          props: e.props,
          children: e.children,
        });
    }
    return (o.set(e, n), n);
  },
  c = (e, t) => {
    let n = s(e),
      r = 0,
      i = (e) => {
        if (typeof e == "string") return e;
        let { tagName: n, props: a, children: o } = e,
          s = o.flatMap(i),
          c = r++,
          l = t[n];
        if (!l) {
          let e = n.toLowerCase(),
            r = Object.keys(t).find((t) => t.toLowerCase() === e);
          r && (l = t[r]);
        }
        let u = `html-tag-${n}-${c}`;
        if (typeof l == "function")
          return l({
            ...a,
            children: s,
            key: u,
          });
        if (typeof l == "string") {
          let e = t[l];
          return typeof e == "function"
            ? e({
                ...a,
                children: s,
                key: u,
              })
            : s;
        }
        if (typeof l == "object" && l && "tag" in l) {
          let { tag: e, props: n } = l,
            r = t[e];
          return typeof r == "function"
            ? r({
                ...a,
                ...n,
                children: s,
                key: u,
              })
            : s;
        }
        return s;
      },
      a = n.flatMap(i);
    return a.length === 1 ? a[0] : a;
  },
  l = t(void 0),
  u = () => r(l),
  d = (t, { components: r = {} } = {}) => {
    let a = Object.fromEntries(
      Object.entries(r)
        .filter(([, e]) => e)
        .map(([e, t]) => [e, (e) => n(t, e)]),
    );
    return /* @__PURE__ */ i(e, {
      children: c(
        t,
        new Proxy(a, {
          get(e, t) {
            if (typeof t == "string" && t in e) return e[t];
            if (typeof t == "string" && /^[a-z][a-z0-9]*$/.test(t))
              return (e) => n(t, e);
          },
        }),
      ),
    });
  },
  f = (e) => {
    let { html: t, userComponents: n } = e;
    return d(t, {
      components: {
        ...u()?.components,
        ...n,
      },
    });
  };
//#endregion
export { f as HTMLRendererPlugin };
import { createContext as e, useContext as t } from "react";
import "react/jsx-runtime";
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/markdown/MarkdownProvider.mjs
var n = e(void 0),
  r = () => t(n),
  i = (e) => {
    let { children: t, options: n, components: i } = e,
      a = r();
    return (a?.renderMarkdown ?? ((e) => e))(t, n, {
      ...(a?.components ?? {}),
      ...(i ?? {}),
    });
  };
//#endregion
export { i as MarkdownRendererPlugin };
