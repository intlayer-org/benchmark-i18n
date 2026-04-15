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
    key: "contact-header",
    content: {
      nodeType: "translation",
      translation: {
        en: {
          a: "Get in Touch",
          b: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at",
        },
        fr: {
          a: "Contactez-nous",
          b: "Vous avez des idées, trouvé un bug ou vous voulez contribuer à un benchmark ? Contactez-nous à",
        },
        es: {
          a: "Póngase en contacto",
          b: "¿Tienes ideas, encontraste un error o quieres contribuir con un benchmark ? Contáctanos en",
        },
        de: {
          a: "Kontaktieren Sie uns",
          b: "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern ? Kontaktieren Sie uns unter",
        },
        it: {
          a: "Mettiti in contatto",
          b: "Hai delle idee, hai trovato un bug o vuoi contribuire con un benchmark ? Contattaci all'indirizzo",
        },
        pt: {
          a: "Entre em contato",
          b: "Tem ideias, encontrou um bug ou quer contribuir com um benchmark ? Entre em contato conosco em",
        },
        zh: {
          a: "联系我们",
          b: "有想法、发现了错误或想贡献基准测试？请通过以下方式联系我们",
        },
        ja: {
          a: "お問い合わせ",
          b: "アイデアがある、バグを見つけた、またはベンチマークを提供したいですか？こちらまでご連絡ください",
        },
        ko: {
          a: "문의하기",
          b: "아이디어가 있거나 버그를 발견했거나 벤치마크에 기여하고 싶으신가요? 다음 주소로 연락해 주세요",
        },
        ru: {
          a: "Связаться с нами",
          b: "Есть идеи, нашли баг или хотите предложить бенчмарк? Свяжитесь с нами по адресу",
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
  ne = "object",
  re = "array",
  v = (e, t) => {
    for (let n of t.plugins ?? [])
      if (n.canHandle(e)) return n.transform(e, t, (e, t) => v(e, t));
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
        v(e, {
          ...t,
          children: e,
          keyPath: [
            ...t.keyPath,
            {
              type: re,
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
            type: ne,
            key: r,
          },
        ],
      };
      n[r] = v(e[r], i);
    }
    return n;
  },
  ie = (e, t) =>
    e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()),
  y = (e) => {
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
  b = (e, t) => {
    if (e === void 0) return t;
    if (t === void 0 || Array.isArray(e)) return e;
    if (y(e) && y(t)) {
      let n = { ...e };
      for (let r of Object.keys(t))
        r === "__proto__" ||
          r === "constructor" ||
          t[r] === void 0 ||
          (n[r] = e[r] === void 0 ? t[r] : b(e[r], t[r]));
      return n;
    }
    return e;
  },
  x = (e, t, n) => {
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
        : s.reduce((e, t) => b(e, t));
  },
  S = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false",
  C = process.env.INTLAYER_NODE_TYPE_INSERTION === "false",
  w = {
    id: "fallback-plugin",
    canHandle: () => !1,
    transform: (e) => e,
  },
  T = (e, t) =>
    S
      ? w
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
            return x(a, e, t);
          },
        },
  E = w,
  D = w,
  ae = C
    ? w
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
                  let a = ie(i, e);
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
  O = w,
  k = (e) => w,
  A = w,
  j = (e, t = !0) =>
    [
      T(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
      E,
      D,
      ae,
      k(e ?? p.defaultLocale),
      A,
      O,
    ].filter(Boolean),
  M = (e, t, n = []) =>
    v(e, {
      ...t,
      plugins: n,
    }),
  N = (e, t, n = j(t)) => {
    let r = {
      dictionaryKey: e.key,
      dictionaryPath: e.filePath,
      keyPath: [],
      plugins: n,
    };
    return M(e.content, r, n);
  },
  P = (e) =>
    e != null &&
    typeof e != "string" &&
    typeof e != "number" &&
    typeof e != "boolean",
  F = /\{\{\s*(.*?)\s*\}\}/g,
  I = (e, t = {}) => {
    if (!Object.values(t).some(P))
      return {
        isSimple: !0,
        parts: e.replace(F, (e, n) => (t[n.trim()] ?? "").toString()),
      };
    let n = e.split(F),
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
  L = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false",
  R = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false",
  z = process.env.INTLAYER_NODE_TYPE_INSERTION === "false";
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
var B = L
    ? w
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
  V = R
    ? w
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
  H = (t, r) => {
    let i = I(t, r);
    return i.isSimple
      ? i.parts
      : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
  },
  U = z
    ? w
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
                  let a = H(i, e);
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
  W = w,
  oe = w,
  G = (e, t = !0) =>
    [
      T(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
      E,
      D,
      k(e ?? p.defaultLocale),
      A,
      O,
      B,
      V,
      U,
      W,
      oe,
    ].filter(Boolean),
  K = (e, t) => N(e, t, G(t)),
  q = (e, t = p?.locales, n = p?.defaultLocale) => {
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
  J = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
    let { locales: t } = p;
    if (e?.isCookieEnabled === !1) return;
    let n = (e) => !!e && t.includes(e);
    if (!J)
      for (let t = 0; t < (m.storage.cookies ?? []).length; t++)
        try {
          let r = e?.getCookie?.(m.storage.cookies[t].name);
          if (n(r)) return r;
        } catch {}
  },
  le = (e, t) => {
    if (t?.isCookieEnabled !== !1 && !J && m.storage.cookies)
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
            t?.setCookieString && t.setCookieString(r, se(r, e, i));
          } catch {}
        }
      }
  },
  Y = {
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
  X = ce(Y),
  ue = (e, t) =>
    le(e, {
      ...Y,
      isCookieEnabled: t,
    }),
  de = () => {
    let { locale: e } = a(Z) ?? {},
      t = c(null);
    (o(() => {}, []),
      o(() => {
        !e || !t.current || t.current.currentLocale.set(e);
      }, [e]));
  },
  fe = ({ children: e }) => (de(), e),
  pe = () => {
    typeof window < "u" && (window.intlayer = { enabled: !0 });
  },
  Z = t({
    locale: X ?? p?.defaultLocale,
    setLocale: () => null,
    isCookieEnabled: !0,
  }),
  me = ({
    locale: e,
    defaultLocale: t,
    children: n,
    setLocale: r,
    disableEditor: i,
    isCookieEnabled: a,
  }) => {
    let { locales: s, defaultLocale: c } = p ?? {},
      [l, d] = ee(e ?? X ?? t ?? c);
    (o(() => {
      e && e !== l && d(e);
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
            (d(e), ue(e, a));
          }
        }),
      m = q(l);
    return /* @__PURE__ */ u(Z.Provider, {
      value: {
        locale: m,
        setLocale: f,
        disableEditor: i,
      },
      children: n,
    });
  },
  Q = ({ children: e, ...t }) =>
    /* @__PURE__ */ d(me, {
      ...t,
      children: [/* @__PURE__ */ u(fe, {}), e],
    }),
  $ = (e, t) => {
    let { locale: n } = a(Z) ?? {};
    return s(() => K(e, t ?? n), [e.key, n, t]);
  },
  he = {
    key: "mock-banner",
    content: {
      nodeType: "translation",
      translation: {
        en: {
          a: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
        },
        fr: {
          a: "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.",
        },
        es: {
          a: "⚠️ Esta página contiene datos simulados solo para fines de benchmarking. No está relacionada con ningún negocio o servicio real.",
        },
        de: {
          a: "⚠️ Diese Seite enthält fiktive Daten, die nur Benchmark-Zwecken dienen. Sie stehen in keinem Zusammenhang mit realen Unternehmen oder Dienstleistungen.",
        },
        it: {
          a: "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale.",
        },
        pt: {
          a: "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada com qualquer negócio o serviço real.",
        },
        zh: {
          a: "⚠️ 此页面仅包含用于基准测试的模拟数据。它与任何真实的业务或服务无关。",
        },
        ja: {
          a: "⚠️ このページにはベンチマークのみを目的とした模擬データが含まれています。実際のビジネスやサービスとは関係ありません。",
        },
        ko: {
          a: "⚠️ 이 페이지는 벤치마킹 목적으로만 사용되는 모의 데이터를 포함하고 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.",
        },
        ru: {
          a: "⚠️ Эта страница содержит фиктивные данные только для целей тестирования производительности. Она не связана с каким-либо реальным бизнесом или услугой.",
        },
      },
    },
  },
  ge = () =>
    /* @__PURE__ */ u("div", {
      className:
        "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
      children: $(he).a,
    });
//#endregion
//#region src/components/pages/contact/ContactHeader.tsx
function _e() {
  let e = $(f);
  return /* @__PURE__ */ d(l, {
    children: [
      /* @__PURE__ */ u(ge, {}),
      /* @__PURE__ */ u("h1", {
        className: "mb-2 text-3xl font-bold text-foreground",
        children: e.a,
      }),
      /* @__PURE__ */ d("p", {
        className: "mb-8 text-muted-foreground",
        children: [
          e.b,
          " ",
          /* @__PURE__ */ u("a", {
            href: "mailto:contact@intlayer.org",
            className: "text-primary hover:underline",
            children: "contact@intlayer.org",
          }),
          ".",
        ],
      }),
    ],
  });
}
//#endregion
//#region scripts/Wrapper.tsx
function ve({ children: e }) {
  return /* @__PURE__ */ u(Q, {
    locale: "en",
    children: e,
  });
}
//#endregion
//#region src/components/pages/contact/ContactHeader.wrapper.tsx
function ye() {
  return /* @__PURE__ */ u(ve, { children: /* @__PURE__ */ u(_e, {}) });
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
