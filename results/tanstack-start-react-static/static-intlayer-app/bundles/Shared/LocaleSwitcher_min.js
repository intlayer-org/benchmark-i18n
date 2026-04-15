import {
  createContext as e,
  useCallback as t,
  useContext as n,
  useEffect as r,
  useRef as i,
  useState as a,
} from "react";
import { useNavigate as o } from "@tanstack/react-router";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region .intlayer/config/configuration.mjs
var l = {
    locales: ["en", "fr", "es", "de", "it", "pt", "zh", "ja", "ko", "ru"],
    defaultLocale: "en",
  },
  u = {
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
  d = 50,
  f = /* @__PURE__ */ new Map(),
  p = (e, t, n) => {
    let r = t ?? l?.defaultLocale,
      i = `${r}|${n ? JSON.stringify(n) : ""}`,
      a = f.get(e);
    a || ((a = /* @__PURE__ */ new Map()), f.set(e, a));
    let o = a.get(i);
    return (o || (a.size > d && a.clear(), (o = new e(r, n)), a.set(i, o)), o);
  },
  m = {
    Collator: function (e, t) {
      return p(Intl.Collator, e, t);
    },
    DateTimeFormat: function (e, t) {
      return p(Intl.DateTimeFormat, e, t);
    },
    DisplayNames: function (e, t) {
      return p(Intl.DisplayNames, e, t);
    },
    ListFormat: function (e, t) {
      return p(Intl.ListFormat, e, t);
    },
    NumberFormat: function (e, t) {
      return p(Intl.NumberFormat, e, t);
    },
    PluralRules: function (e, t) {
      return p(Intl.PluralRules, e, t);
    },
    RelativeTimeFormat: function (e, t) {
      return p(Intl.RelativeTimeFormat, e, t);
    },
    Segmenter: function (e, t) {
      return p(Intl.Segmenter, e, t);
    },
  },
  h = (e, t = l?.locales, n = l?.defaultLocale) => {
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
  g = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var _ = (e, t, n) => {
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
  v = (e) => {
    let { locales: t } = l;
    if (e?.isCookieEnabled === !1) return;
    let n = (e) => !!e && t.includes(e);
    if (!g)
      for (let t = 0; t < (u.storage.cookies ?? []).length; t++)
        try {
          let r = e?.getCookie?.(u.storage.cookies[t].name);
          if (n(r)) return r;
        } catch {}
  },
  y = (e, t) => {
    if (t?.isCookieEnabled !== !1 && !g && u.storage.cookies)
      for (let n = 0; n < u.storage.cookies.length; n++) {
        let { name: r, attributes: i } = u.storage.cookies[n];
        try {
          t?.setCookieStore &&
            t.setCookieStore(r, e, {
              ...i,
              expires:
                i.expires instanceof Date ? i.expires.getTime() : i.expires,
            });
        } catch {
          try {
            t?.setCookieString && t.setCookieString(r, _(r, e, i));
          } catch {}
        }
      }
  },
  b = {
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
  x = (e, t = e) =>
    new m.DisplayNames(t, { type: "language" }).of(e) ?? "Unknown locale",
  S = v(b),
  C = (e, t) =>
    y(e, {
      ...b,
      isCookieEnabled: t,
    }),
  w = () => {
    let { locale: e } = n(D) ?? {},
      t = i(null);
    (r(() => {}, []),
      r(() => {
        !e || !t.current || t.current.currentLocale.set(e);
      }, [e]));
  },
  T = ({ children: e }) => (w(), e),
  E = () => {
    typeof window < "u" && (window.intlayer = { enabled: !0 });
  },
  D = e({
    locale: S ?? l?.defaultLocale,
    setLocale: () => null,
    isCookieEnabled: !0,
  }),
  O = ({
    locale: e,
    defaultLocale: t,
    children: n,
    setLocale: i,
    disableEditor: o,
    isCookieEnabled: c,
  }) => {
    let { locales: u, defaultLocale: d } = l ?? {},
      [f, p] = a(e ?? S ?? t ?? d);
    (r(() => {
      e && e !== f && p(e);
    }, [e]),
      r(() => {
        E();
      }, []));
    let m =
        i ??
        ((e) => {
          if (f.toString() !== e.toString()) {
            if (!u?.map(String).includes(e)) {
              console.error(`Locale ${e} is not available`);
              return;
            }
            (p(e), C(e, c));
          }
        }),
      g = h(f);
    return /* @__PURE__ */ s(D.Provider, {
      value: {
        locale: g,
        setLocale: m,
        disableEditor: o,
      },
      children: n,
    });
  },
  k = ({ children: e, ...t }) =>
    /* @__PURE__ */ c(O, {
      ...t,
      children: [/* @__PURE__ */ s(T, {}), e],
    }),
  A = ({ isCookieEnabled: e, onLocaleChange: r } = {}) => {
    let { defaultLocale: i, locales: a } = l ?? {},
      { locale: o, setLocale: s, isCookieEnabled: c } = n(D) ?? {};
    return {
      locale: o,
      defaultLocale: i,
      availableLocales: a,
      setLocale: t(
        (t) => {
          if (!a?.map(String).includes(t)) {
            console.error(`Locale ${t} is not available`);
            return;
          }
          (s(t), C(t, e ?? c ?? !0), r?.(t));
        },
        [a, r, s, e],
      ),
    };
  };
//#endregion
//#region src/components/LocaleSwitcher.tsx
function j() {
  let e = o(),
    {
      locale: t,
      availableLocales: n,
      setLocale: r,
    } = A({
      onLocaleChange: (t) => {
        e({
          to: ".",
          params: (e) => ({
            ...e,
            locale: t,
          }),
        });
      },
    });
  return /* @__PURE__ */ s("div", {
    className: "flex items-center gap-2",
    children: /* @__PURE__ */ s("select", {
      value: t,
      onChange: (e) => r(e.target.value),
      className:
        "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
      children: n.map((e) =>
        /* @__PURE__ */ s(
          "option",
          {
            value: e,
            children: x(e),
          },
          e,
        ),
      ),
    }),
  });
}
//#endregion
//#region scripts/Wrapper.tsx
function M({ children: e }) {
  return /* @__PURE__ */ s(k, {
    locale: "en",
    children: e,
  });
}
//#endregion
//#region src/components/LocaleSwitcher.wrapper.tsx
function N() {
  return /* @__PURE__ */ s(M, { children: /* @__PURE__ */ s(j, {}) });
}
//#endregion
export { N as default };
