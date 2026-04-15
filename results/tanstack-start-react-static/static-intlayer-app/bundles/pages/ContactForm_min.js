import {
  Fragment as e,
  createContext as t,
  createElement as n,
  isValidElement as r,
  lazy as i,
  useContext as a,
  useEffect as o,
  useId as s,
  useMemo as c,
  useRef as l,
  useState as ee,
} from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
var p = {
    key: "contact-form",
    content: {
      nodeType: "translation",
      translation: {
        en: {
          l: "Your name",
          a: "Bug Report",
          h: "New Benchmark Idea",
          f: "Methodology Question",
          c: "Describe your question or idea...",
          j: "Send Message",
          g: "Name",
          d: "Email",
          k: "Topic",
          b: "Contribution",
          i: "Other",
          e: "Message",
        },
        fr: {
          l: "Votre nom",
          a: "Rapport de Bug",
          h: "Nouvelle Idée de Benchmark",
          f: "Question sur la Méthodologie",
          c: "Décrivez votre question ou idée...",
          j: "Envoyer le Message",
          g: "Nom",
          d: "Email",
          k: "Sujet",
          b: "Contribution",
          i: "Autre",
          e: "Message",
        },
        es: {
          l: "Tu nombre",
          a: "Informe de Errores",
          h: "Nueva Idea de Benchmark",
          f: "Pregunta sobre Metodología",
          c: "Describe tu pregunta o idea...",
          j: "Enviar Mensaje",
          g: "Nombre",
          d: "Correo electrónico",
          k: "Tema",
          b: "Contribución",
          i: "Otro",
          e: "Mensaje",
        },
        de: {
          l: "Ihr Name",
          a: "Fehlerbericht",
          h: "Neue Benchmark-Idee",
          f: "Frage zur Methodik",
          c: "Beschreiben Sie Ihre Frage oder Idee...",
          j: "Nachricht senden",
          g: "Name",
          d: "E-Mail",
          k: "Thema",
          b: "Beitrag",
          i: "Andere",
          e: "Nachricht",
        },
        it: {
          l: "Il tuo nome",
          a: "Segnalazione bug",
          h: "Nuova idea di benchmark",
          f: "Domanda sulla metodologia",
          c: "Descrivi la tua domanda o idea...",
          j: "Invia messaggio",
          g: "Nome",
          d: "Email",
          k: "Argomento",
          b: "Contributo",
          i: "Altro",
          e: "Messaggio",
        },
        pt: {
          l: "Seu nome",
          a: "Relatório de Bug",
          h: "Nova Ideia de Benchmark",
          f: "Pergunta sobre Metodologia",
          c: "Descreva sua pergunta ou ideia...",
          j: "Enviar Mensagem",
          g: "Nome",
          d: "E-mail",
          k: "Tópico",
          b: "Contribuição",
          i: "Outro",
          e: "Mensagem",
        },
        zh: {
          l: "您的姓名",
          a: "错误报告",
          h: "新基准测试想法",
          f: "方法论问题",
          c: "描述您的问题或想法...",
          j: "发送消息",
          g: "姓名",
          d: "电子邮件",
          k: "主题",
          b: "贡献",
          i: "其他",
          e: "消息",
        },
        ja: {
          l: "お名前",
          a: "バグ報告",
          h: "新しいベンチマークのアイデア",
          f: "方法論に関する質問",
          c: "質問やアイデアを説明してください...",
          j: "メッセージを送信",
          g: "名前",
          d: "メール",
          k: "トピック",
          b: "貢献",
          i: "その他",
          e: "メッセージ",
        },
        ko: {
          l: "이름",
          a: "버그 보고",
          h: "새로운 벤치마크 아이디어",
          f: "방법론 질문",
          c: "질문이나 아이디어를 설명하세요...",
          j: "메시지 보내기",
          g: "이름",
          d: "이메일",
          k: "주제",
          b: "기여",
          i: "기타",
          e: "메시지",
        },
        ru: {
          l: "Ваше имя",
          a: "Отчет об ошибке",
          h: "Новая идея для бенчмарка",
          f: "Вопрос по методологии",
          c: "Опишите ваш вопрос или идею...",
          j: "Отправить сообщение",
          g: "Имя",
          d: "Email",
          k: "Тема",
          b: "Вклад",
          i: "Другое",
          e: "Сообщение",
        },
      },
    },
  },
  m = {
    locales: ["en", "fr", "es", "de", "it", "pt", "zh", "ja", "ko", "ru"],
    defaultLocale: "en",
  },
  h = {
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
  g = ({ children: e, value: t, additionalProps: n }) => {
    let i = r(e) ? e : /* @__PURE__ */ d(u, { children: e });
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
  _ = (e) => {
    if (typeof e != "object" || !e) return e;
    let { type: t, props: r } = ((e) => {
      let t = e.props?.children;
      if (Array.isArray(t)) {
        let r = t.map((e, t) => {
          let r = _(e);
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
        let n = _(t);
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
  v = "insertion",
  y = "object",
  ne = "array",
  b = (e, t) => {
    for (let n of t.plugins ?? [])
      if (n.canHandle(e)) return n.transform(e, t, (e, t) => b(e, t));
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
        b(e, {
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
            type: y,
            key: r,
          },
        ],
      };
      n[r] = b(e[r], i);
    }
    return n;
  },
  re = (e, t) =>
    e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()),
  x = (e) => {
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
  S = (e, t) => {
    if (e === void 0) return t;
    if (t === void 0 || Array.isArray(e)) return e;
    if (x(e) && x(t)) {
      let n = { ...e };
      for (let r of Object.keys(t))
        r === "__proto__" ||
          r === "constructor" ||
          t[r] === void 0 ||
          (n[r] = e[r] === void 0 ? t[r] : S(e[r], t[r]));
      return n;
    }
    return e;
  },
  C = (e, t, n) => {
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
        : s.reduce((e, t) => S(e, t));
  },
  w = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false",
  T = process.env.INTLAYER_NODE_TYPE_INSERTION === "false",
  E = {
    id: "fallback-plugin",
    canHandle: () => !1,
    transform: (e) => e,
  },
  D = (e, t) =>
    w
      ? E
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
            return C(a, e, t);
          },
        },
  O = E,
  k = E,
  ie = T
    ? E
    : {
        id: "insertion-plugin",
        canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
        transform: (e, t, n) => {
          let r = [...t.keyPath, { type: v }],
            i = e[v],
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
  A = E,
  j = (e) => E,
  M = E,
  N = (e, t = !0) =>
    [
      D(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
      O,
      k,
      ie,
      j(e ?? m.defaultLocale),
      M,
      A,
    ].filter(Boolean),
  P = (e, t, n = []) =>
    b(e, {
      ...t,
      plugins: n,
    }),
  F = (e, t, n = N(t)) => {
    let r = {
      dictionaryKey: e.key,
      dictionaryPath: e.filePath,
      keyPath: [],
      plugins: n,
    };
    return P(e.content, r, n);
  },
  I = (e) =>
    e != null &&
    typeof e != "string" &&
    typeof e != "number" &&
    typeof e != "boolean",
  L = /\{\{\s*(.*?)\s*\}\}/g,
  R = (e, t = {}) => {
    if (!Object.values(t).some(I))
      return {
        isSimple: !0,
        parts: e.replace(L, (e, n) => (t[n.trim()] ?? "").toString()),
      };
    let n = e.split(L),
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
  z = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false",
  B = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false",
  V = process.env.INTLAYER_NODE_TYPE_INSERTION === "false";
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
var H = z
    ? E
    : {
        id: "intlayer-node-plugin",
        canHandle: (e) =>
          typeof e == "bigint" || typeof e == "string" || typeof e == "number",
        transform: (e, { plugins: t, ...n }) =>
          g({
            ...n,
            value: n.children,
            children: n.children,
          }),
      },
  U = B
    ? E
    : {
        id: "react-node-plugin",
        canHandle: (e) =>
          typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
        transform: (e, { plugins: t, ...n }) =>
          g({
            ...n,
            value: "[[react-element]]",
            children: _(e),
          }),
      },
  W = (t, r) => {
    let i = R(t, r);
    return i.isSimple
      ? i.parts
      : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
  },
  G = V
    ? E
    : {
        id: "insertion-plugin",
        canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
        transform: (e, t, n) => {
          let r = [...t.keyPath, { type: v }],
            i = e[v],
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
                  let a = W(i, e);
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
  ae = E,
  K = E,
  q = (e, t = !0) =>
    [
      D(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
      O,
      k,
      j(e ?? m.defaultLocale),
      M,
      A,
      H,
      U,
      G,
      ae,
      K,
    ].filter(Boolean),
  J = (e, t) => F(e, t, q(t)),
  oe = (e, t = m?.locales, n = m?.defaultLocale) => {
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
var se = (e, t, n) => {
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
  ce = (e) => {
    let { locales: t } = m;
    if (e?.isCookieEnabled === !1) return;
    let n = (e) => !!e && t.includes(e);
    if (!Y)
      for (let t = 0; t < (h.storage.cookies ?? []).length; t++)
        try {
          let r = e?.getCookie?.(h.storage.cookies[t].name);
          if (n(r)) return r;
        } catch {}
  },
  le = (e, t) => {
    if (t?.isCookieEnabled !== !1 && !Y && h.storage.cookies)
      for (let n = 0; n < h.storage.cookies.length; n++) {
        let { name: r, attributes: i } = h.storage.cookies[n];
        try {
          t?.setCookieStore &&
            t.setCookieStore(r, e, {
              ...i,
              expires:
                i.expires instanceof Date ? i.expires.getTime() : i.expires,
            });
        } catch {
          try {
            t?.setCookieString && t.setCookieString(r, se(r, e, i));
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
  Z = ce(X),
  ue = (e, t) =>
    le(e, {
      ...X,
      isCookieEnabled: t,
    }),
  de = () => {
    let { locale: e } = a(Q) ?? {},
      t = l(null);
    (o(() => {}, []),
      o(() => {
        !e || !t.current || t.current.currentLocale.set(e);
      }, [e]));
  },
  fe = ({ children: e }) => (de(), e),
  pe = () => {
    typeof window < "u" && (window.intlayer = { enabled: !0 });
  },
  Q = t({
    locale: Z ?? m?.defaultLocale,
    setLocale: () => null,
    isCookieEnabled: !0,
  }),
  $ = ({
    locale: e,
    defaultLocale: t,
    children: n,
    setLocale: r,
    disableEditor: i,
    isCookieEnabled: a,
  }) => {
    let { locales: s, defaultLocale: c } = m ?? {},
      [l, u] = ee(e ?? Z ?? t ?? c);
    (o(() => {
      e && e !== l && u(e);
    }, [e]),
      o(() => {
        pe();
      }, []));
    let f =
        r ??
        ((e) => {
          if (l.toString() !== e.toString()) {
            if (!s?.map(String).includes(e)) {
              console.error(`Locale ${e} is not available`);
              return;
            }
            (u(e), ue(e, a));
          }
        }),
      p = oe(l);
    return /* @__PURE__ */ d(Q.Provider, {
      value: {
        locale: p,
        setLocale: f,
        disableEditor: i,
      },
      children: n,
    });
  },
  me = ({ children: e, ...t }) =>
    /* @__PURE__ */ f($, {
      ...t,
      children: [/* @__PURE__ */ d(fe, {}), e],
    }),
  he = (e, t) => {
    let { locale: n } = a(Q) ?? {};
    return c(() => J(e, t ?? n), [e.key, n, t]);
  };
//#endregion
//#region src/components/pages/contact/ContactForm.tsx
function ge() {
  let e = he(p),
    t = s(),
    n = s(),
    r = s(),
    i = s();
  return /* @__PURE__ */ f("form", {
    className: "space-y-6",
    onSubmit: (e) => e.preventDefault(),
    children: [
      /* @__PURE__ */ f("div", {
        className: "grid gap-4 md:grid-cols-2",
        children: [
          /* @__PURE__ */ f("div", {
            children: [
              /* @__PURE__ */ d("label", {
                htmlFor: t,
                className: "mb-1 block text-sm font-medium text-foreground",
                children: e.g,
              }),
              /* @__PURE__ */ d("input", {
                id: t,
                className:
                  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
                placeholder: e.l.value,
              }),
            ],
          }),
          /* @__PURE__ */ f("div", {
            children: [
              /* @__PURE__ */ d("label", {
                htmlFor: n,
                className: "mb-1 block text-sm font-medium text-foreground",
                children: e.d,
              }),
              /* @__PURE__ */ d("input", {
                id: n,
                type: "email",
                className:
                  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
                placeholder: "you@example.com",
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ f("div", {
        children: [
          /* @__PURE__ */ d("label", {
            htmlFor: r,
            className: "mb-1 block text-sm font-medium text-foreground",
            children: e.k,
          }),
          /* @__PURE__ */ f("select", {
            id: r,
            className:
              "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
            children: [
              /* @__PURE__ */ d("option", { children: e.a }),
              /* @__PURE__ */ d("option", { children: e.h }),
              /* @__PURE__ */ d("option", { children: e.f }),
              /* @__PURE__ */ d("option", { children: e.b }),
              /* @__PURE__ */ d("option", { children: e.i }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ f("div", {
        children: [
          /* @__PURE__ */ d("label", {
            htmlFor: i,
            className: "mb-1 block text-sm font-medium text-foreground",
            children: e.e,
          }),
          /* @__PURE__ */ d("textarea", {
            id: i,
            rows: 5,
            className:
              "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
            placeholder: e.c.value,
          }),
        ],
      }),
      /* @__PURE__ */ d("button", {
        type: "submit",
        className:
          "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
        children: e.j,
      }),
    ],
  });
}
//#endregion
//#region scripts/Wrapper.tsx
function _e({ children: e }) {
  return /* @__PURE__ */ d(me, {
    locale: "en",
    children: e,
  });
}
//#endregion
//#region src/components/pages/contact/ContactForm.wrapper.tsx
function ve() {
  return /* @__PURE__ */ d(_e, { children: /* @__PURE__ */ d(ge, {}) });
}
//#endregion
export { ve as default };
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
