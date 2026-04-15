import {
  createContext as e,
  useContext as t,
  useEffect as n,
  useRef as r,
  useState as i,
} from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/MockBanner.tsx
var s = () =>
    /* @__PURE__ */ a("div", {
      className:
        "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
      children:
        "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
    }),
  c = {
    locales: ["en", "fr", "es", "de", "it", "pt", "zh", "ja", "ko", "ru"],
    defaultLocale: "en",
  },
  l = {
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
  u = (e, t = c?.locales, n = c?.defaultLocale) => {
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
  d = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var f = (e, t, n) => {
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
  p = (e) => {
    let { locales: t } = c;
    if (e?.isCookieEnabled === !1) return;
    let n = (e) => !!e && t.includes(e);
    if (!d)
      for (let t = 0; t < (l.storage.cookies ?? []).length; t++)
        try {
          let r = e?.getCookie?.(l.storage.cookies[t].name);
          if (n(r)) return r;
        } catch {}
  },
  m = (e, t) => {
    if (t?.isCookieEnabled !== !1 && !d && l.storage.cookies)
      for (let n = 0; n < l.storage.cookies.length; n++) {
        let { name: r, attributes: i } = l.storage.cookies[n];
        try {
          t?.setCookieStore &&
            t.setCookieStore(r, e, {
              ...i,
              expires:
                i.expires instanceof Date ? i.expires.getTime() : i.expires,
            });
        } catch {
          try {
            t?.setCookieString && t.setCookieString(r, f(r, e, i));
          } catch {}
        }
      }
  },
  h = {
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
  g = p(h),
  _ = (e, t) =>
    m(e, {
      ...h,
      isCookieEnabled: t,
    }),
  v = () => {
    let { locale: e } = t(x) ?? {},
      i = r(null);
    (n(() => {}, []),
      n(() => {
        !e || !i.current || i.current.currentLocale.set(e);
      }, [e]));
  },
  y = ({ children: e }) => (v(), e),
  b = () => {
    typeof window < "u" && (window.intlayer = { enabled: !0 });
  },
  x = e({
    locale: g ?? c?.defaultLocale,
    setLocale: () => null,
    isCookieEnabled: !0,
  }),
  S = ({
    locale: e,
    defaultLocale: t,
    children: r,
    setLocale: o,
    disableEditor: s,
    isCookieEnabled: l,
  }) => {
    let { locales: d, defaultLocale: f } = c ?? {},
      [p, m] = i(e ?? g ?? t ?? f);
    (n(() => {
      e && e !== p && m(e);
    }, [e]),
      n(() => {
        b();
      }, []));
    let h =
        o ??
        ((e) => {
          if (p.toString() !== e.toString()) {
            if (!d?.map(String).includes(e)) {
              console.error(`Locale ${e} is not available`);
              return;
            }
            (m(e), _(e, l));
          }
        }),
      v = u(p);
    return /* @__PURE__ */ a(x.Provider, {
      value: {
        locale: v,
        setLocale: h,
        disableEditor: s,
      },
      children: r,
    });
  },
  C = ({ children: e, ...t }) =>
    /* @__PURE__ */ o(S, {
      ...t,
      children: [/* @__PURE__ */ a(y, {}), e],
    });
//#endregion
//#region scripts/Wrapper.tsx
function w({ children: e }) {
  return /* @__PURE__ */ a(C, {
    locale: "en",
    children: e,
  });
}
//#endregion
//#region src/components/MockBanner.wrapper.tsx
function T() {
  return /* @__PURE__ */ a(w, { children: /* @__PURE__ */ a(s, {}) });
}
//#endregion
export { T as default };
