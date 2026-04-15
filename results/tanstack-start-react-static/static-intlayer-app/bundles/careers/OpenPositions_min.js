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
    key: "open-positions",
    content: {
      nodeType: "translation",
      translation: {
        en: {
          r: "Senior Frontend Engineer",
          c: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
          b: "Backend Engineer",
          f: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
          s: "Technical Writer",
          e: "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
          g: "DevRel Engineer",
          q: "San Francisco / Remote",
          i: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
          o: "QA Engineer",
          k: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
          m: "Open Positions",
          a: "Apply Now",
          p: "Remote",
          l: "Full-time",
          n: "Part-time",
          j: "Engineering",
          h: "Documentation",
          d: "Community",
        },
        fr: {
          r: "Ingénieur Frontend Senior",
          c: "Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement utilisant React, TypeScript et Vite.",
          b: "Ingénieur Backend",
          f: "Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de lancements automatisés par jour.",
          s: "Rédacteur Technique",
          e: "Créer des guides complets, des références API et des tutoriels pour notre plateforme de benchmarking.",
          g: "Ingénieur DevRel",
          q: "San Francisco / Télétravail",
          i: "S'engager avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.",
          o: "Ingénieur QA",
          k: "Assurer la précision et la fiabilité des résultats de benchmark via des tests rigoureux et une validation.",
          m: "Postes Ouverts",
          a: "Postuler Maintenant",
          p: "Télétravail",
          l: "Temps plein",
          n: "Temps partiel",
          j: "Ingénierie",
          h: "Documentation",
          d: "Communauté",
        },
        es: {
          r: "Ingeniero Frontend Principal",
          c: "Construir y mantener nuestro panel de benchmarking y herramientas de desarrollo usando React, TypeScript y Vite.",
          b: "Ingeniero Backend",
          f: "Diseñar y escalar nuestra infraestructura de benchmarking en la nube manejando miles de ejecuciones automatizadas diarias.",
          s: "Redactor Técnico",
          e: "Crear guías completas, referencias API y tutoriales para nuestra plataforma de benchmarking.",
          g: "Ingeniero DevRel",
          q: "San Francisco / Remoto",
          i: "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones de blog y contribuciones de código abierto.",
          o: "Ingeniero QA",
          k: "Asegurar la precisión y fiabilidad de los resultados de benchmark a través de pruebas y validaciones rigurosas.",
          m: "Puestos Abiertos",
          a: "Postular Ahora",
          p: "Remoto",
          l: "Tiempo completo",
          n: "Tiempo parcial",
          j: "Ingeniería",
          h: "Documentación",
          d: "Comunidad",
        },
        de: {
          r: "Senior Frontend-Entwickler",
          c: "Entwickeln und pflegen Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.",
          b: "Backend-Entwickler",
          f: "Entwurf und Skalierung unserer Cloud-Benchmarking-Infrastruktur für Tausende von täglichen automatisierten Durchläufen.",
          s: "Technischer Redakteur",
          e: "Erstellen Sie umfassende Anleitungen, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.",
          g: "DevRel-Ingenieur",
          q: "San Francisco / Remote",
          i: "Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.",
          o: "QA-Ingenieur",
          k: "Stellen Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen sicher.",
          m: "Offene Stellen",
          a: "Jetzt bewerben",
          p: "Remote",
          l: "Vollzeit",
          n: "Teilzeit",
          j: "Engineering",
          h: "Dokumentation",
          d: "Community",
        },
        it: {
          r: "Ingegnere frontend senior",
          c: "Crea e gestisci la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.",
          b: "Ingegnere backend",
          f: "Progetta e ridimensiona la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.",
          s: "Redattore tecnico",
          e: "Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.",
          g: "Ingegnere DevRel",
          q: "San Francisco / Remoto",
          i: "Collabora con la comunità i18n attraverso talk, workshop, post sul blog e contributi open source.",
          o: "Ingegnere QA",
          k: "Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.",
          m: "Posizioni aperte",
          a: "Candidati ora",
          p: "Remoto",
          l: "Tempo pieno",
          n: "Part-time",
          j: "Ingegneria",
          h: "Documentazione",
          d: "Comunità",
        },
        pt: {
          r: "Engenheiro Frontend Sênior",
          c: "Crie e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.",
          b: "Engenheiro Backend",
          f: "Projete e dimensione nossa infraestrutura de benchmarking em nuvem que lida com milhares de execuções automatizadas diariamente.",
          s: "Redator Técnico",
          e: "Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.",
          g: "Engenheiro DevRel",
          q: "San Francisco / Remoto",
          i: "Envolva-se com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.",
          o: "Engenheiro QA",
          k: "Garanta a precisão e a confiabilidade dos resultados dos benchmarks por meio de testes e validações rigorosos.",
          m: "Vagas abertas",
          a: "Candidatar-se agora",
          p: "Remoto",
          l: "Tempo integral",
          n: "Meio período",
          j: "Engenharia",
          h: "Documentação",
          d: "Comunidade",
        },
        zh: {
          r: "高级前端工程师",
          c: "使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。",
          b: "后端工程师",
          f: "设计并扩展我们的云基准测试基础架构，每天处理数千次自动化运行。",
          s: "技术文档工程师",
          e: "为我们的基准测试平台创建全面的指南、API 参考和教程。",
          g: "开发者关系工程师",
          q: "旧金山 / 远程",
          i: "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。",
          o: "测试工程师",
          k: "通过严格的测试和验证，确保基准测试结果的准确性和可靠性。",
          m: "开放职位",
          a: "立即申请",
          p: "远程",
          l: "全职",
          n: "兼职",
          j: "工程",
          h: "文档",
          d: "社区",
        },
        ja: {
          r: "シニアフロントエンドエンジニア",
          c: "React、TypeScript、Vite を使用して、ベンチマークダッシュボードと開発者ツールを構築・保守します。",
          b: "バックエンドエンジニア",
          f: "毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計・拡張します。",
          s: "テクニカルライター",
          e: "ベンチマークプラットフォーム向けの包括的なガイド、API リファレンス、およびチュートリアルを作成します。",
          g: "DevRel エンジニア",
          q: "サンフランシスコ / リモート",
          i: "講演、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18n コミュニティと交流します。",
          o: "QA エンジニア",
          k: "厳密なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。",
          m: "募集職種",
          a: "今すぐ応募",
          p: "リモート",
          l: "正社員",
          n: "アルバイト",
          j: "エンジニアリング",
          h: "ドキュメント",
          d: "コミュニティ",
        },
        ko: {
          r: "시니어 프런트 엔드 엔지니어",
          c: "React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.",
          b: "백엔드 엔지니어",
          f: "매일 수천 건의 자동 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.",
          s: "테크니컬 라이터",
          e: "벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 작성합니다.",
          g: "DevRel 엔지니어",
          q: "샌프란시스코 / 원격",
          i: "강연, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통하십시오.",
          o: "QA 엔지니어",
          k: "엄격한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.",
          m: "모집 부문",
          a: "지금 지원하기",
          p: "원격",
          l: "풀타임",
          n: "파트타임",
          j: "엔지니어링",
          h: "문서",
          d: "커뮤니티",
        },
        ru: {
          r: "Старший фронтенд-инженер",
          c: "Создание и поддержка нашей панели тестирования и инструментов разработчика с использованием React, TypeScript и Vite.",
          b: "Бэкенд-инженер",
          f: "Проектирование и масштабирование нашей облачной инфраструктуры для тестирования, обрабатывающей тысячи автоматических запусков ежедневно.",
          s: "Технический писатель",
          e: "Создание подробных руководств, справочников по API и учебных пособий для нашей платформы тестирования.",
          g: "DevRel-инженер",
          q: "Сан-Франциско / Удаленно",
          i: "Взаимодействие с сообществом i18n через выступления, семинары, посты в блоге и вклад в открытый исходный код.",
          o: "QA-инженер",
          k: "Обеспечение точности и надежности результатов тестирования посредством строгого тестирования и валидации.",
          m: "Открытые вакансии",
          a: "Подать заявку",
          p: "Удаленно",
          l: "Полный рабочий день",
          n: "Неполный рабочий день",
          j: "Разработка",
          h: "Документация",
          d: "Сообщество",
        },
      },
    },
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
//#region src/components/pages/careers/OpenPositions.tsx
function he() {
  let e = me(f),
    t = [
      {
        title: e.r.value,
        location: e.p.value,
        type: e.l.value,
        dept: e.j.value,
        desc: e.c.value,
      },
      {
        title: e.b.value,
        location: e.p.value,
        type: e.l.value,
        dept: e.j.value,
        desc: e.f.value,
      },
      {
        title: e.s.value,
        location: e.p.value,
        type: e.n.value,
        dept: e.h.value,
        desc: e.e.value,
      },
      {
        title: e.g.value,
        location: e.q.value,
        type: e.l.value,
        dept: e.d.value,
        desc: e.i.value,
      },
      {
        title: e.o.value,
        location: e.p.value,
        type: e.l.value,
        dept: e.j.value,
        desc: e.k.value,
      },
    ];
  return /* @__PURE__ */ d(l, {
    children: [
      /* @__PURE__ */ u("h2", {
        className: "mb-6 text-2xl font-bold text-foreground",
        children: e.m,
      }),
      /* @__PURE__ */ u("div", {
        className: "space-y-4",
        children: t.map((t) =>
          /* @__PURE__ */ d(
            "div",
            {
              className:
                "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between",
              children: [
                /* @__PURE__ */ d("div", {
                  children: [
                    /* @__PURE__ */ u("h3", {
                      className: "text-base font-semibold text-foreground",
                      children: t.title,
                    }),
                    /* @__PURE__ */ u("p", {
                      className: "text-sm text-muted-foreground",
                      children: t.desc,
                    }),
                    /* @__PURE__ */ d("div", {
                      className: "mt-2 flex gap-2",
                      children: [
                        /* @__PURE__ */ u("span", {
                          className:
                            "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
                          children: t.dept,
                        }),
                        /* @__PURE__ */ u("span", {
                          className:
                            "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
                          children: t.location,
                        }),
                        /* @__PURE__ */ u("span", {
                          className:
                            "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
                          children: t.type,
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ u("button", {
                  type: "button",
                  className:
                    "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
                  children: e.a,
                }),
              ],
            },
            t.title,
          ),
        ),
      }),
    ],
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
//#region src/components/pages/careers/OpenPositions.wrapper.tsx
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
