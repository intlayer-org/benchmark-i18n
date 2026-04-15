import {
  Fragment as e,
  createContext as t,
  createElement as n,
  isValidElement as r,
  lazy as i,
  useContext as a,
  useEffect as o,
  useLayoutEffect as s,
  useMemo as c,
  useRef as l,
  useState as ee,
} from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
var p = {
    key: "about-header",
    content: {
      nodeType: "translation",
      translation: {
        en: {
          a: "About This Benchmark",
          b: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.",
        },
        fr: {
          a: "À propos de ce Benchmark",
          b: "Ceci est une application de test open-source — pas un produit ou une entreprise. Son seul but est de fournir une application React multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques.",
        },
        es: {
          a: "Acerca de este Benchmark",
          b: "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React multipágina realista donde se puedan integrar y medir diferentes bibliotecas de i18n en condiciones idénticas.",
        },
        de: {
          a: "Über diesen Benchmark",
          b: "Dies ist eine Open-Source-Testanwendung – kein Produkt oder Unternehmen. Ihr einziger Zweck ist es, eine realistische, mehrseitige React-App bereitzustellen, in der verschiedene i18n-Bibliotheken unter identischen Bedingungen integriert und gemessen werden können.",
        },
        it: {
          a: "Informazioni su questo benchmark",
          b: "Questa è un'applicazione di test open source, non un prodotto o un'azienda. Il suo unico scopo è fornire un'app React realistica e multipagina in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche.",
        },
        pt: {
          a: "Sobre este Benchmark",
          b: "Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo React multipágina realista, onde diferentes bibliotecas de i18n podem ser integradas e medidas em condições idênticas.",
        },
        zh: {
          a: "关于此基准测试",
          b: "这是一个开源测试应用程序——不是产品或公司。其唯一目的是提供一个现实的多页面 React 应用程序，可以在相同条件下集成和衡量不同的 i18n 库。",
        },
        ja: {
          a: "このベンチマークについて",
          b: "これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、さまざまな i18n ライブラリを同一条件下で統合および測定できる、現実的なマルチページ React アプリを提供することです。",
        },
        ko: {
          a: "이 벤치마크에 대하여",
          b: "이것은 오픈 소스 테스트 애플리케이션이며 제품이나 회사가 아닙니다. 유일한 목적은 동일한 조건에서 서로 다른 i18n 라이브러리를 통합하고 측정할 수 있는 현실적인 다중 페이지 React 앱을 제공하는 것입니다.",
        },
        ru: {
          a: "Об этом бенчмарке",
          b: "Это открытое приложение для тестирования, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное приложение на React, в котором можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.",
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
//#region src/hooks/usePerformanceMeasure.ts
function ge(e) {
  (typeof performance < "u" &&
    performance.mark &&
    performance.mark(`${e}-start`),
    s(() => {
      if (typeof performance < "u" && performance.mark && performance.measure) {
        performance.mark(`${e}-end`);
        try {
          performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
        } catch {}
      }
    }, [e]));
}
//#endregion
//#region src/components/pages/about/AboutHeader.tsx
function _e() {
  let e = he(p);
  return (
    ge("AboutHeader"),
    /* @__PURE__ */ f(u, {
      children: [
        /* @__PURE__ */ d("h1", {
          className: "mb-4 text-3xl font-bold text-foreground",
          children: e.a,
        }),
        /* @__PURE__ */ d("p", {
          className: "mb-8 max-w-3xl text-muted-foreground",
          children: e.b,
        }),
      ],
    })
  );
}
//#endregion
//#region scripts/Wrapper.tsx
function ve({ children: e }) {
  return /* @__PURE__ */ d(me, {
    locale: "en",
    children: e,
  });
}
//#endregion
//#region src/components/pages/about/AboutHeader.wrapper.tsx
function ye() {
  return /* @__PURE__ */ d(ve, { children: /* @__PURE__ */ d(_e, {}) });
}
//#endregion
export { ye as default };
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
