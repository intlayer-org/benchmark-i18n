import { useEffect as e, useLayoutEffect as t, useState as n } from "react";
import r from "next/link";
import { useParams as i, usePathname as a, useRouter as o } from "next/navigation";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import { ChevronDown as l } from "lucide-react";
var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), d = ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), f = (e) => /^https?:\/\//.test(e ?? "");
function p(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var m = ({ href: e, children: t, ...n }) => {
	let a = i().locale ?? "en";
	return e == null || typeof e != "string" || f(e) ? s(r, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}) : s(r, {
		href: p(e, a),
		prefetch: !1,
		...n,
		children: t
	});
}, h = u((() => {})), g = (0, u(((e, t) => {
	var n = Object.create, r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, o = Object.getOwnPropertySymbols, s = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable, u = (e, t, n) => t in e ? r(e, t, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: n
	}) : e[t] = n, f = (e, t) => {
		for (var n in t ||= {}) c.call(t, n) && u(e, n, t[n]);
		if (o) for (var n of o(t)) l.call(t, n) && u(e, n, t[n]);
		return e;
	}, p = (e, t) => {
		for (var n in t) r(e, n, {
			get: t[n],
			enumerable: !0
		});
	}, m = (e, t, n, o) => {
		if (t && typeof t == "object" || typeof t == "function") for (let s of a(t)) !c.call(e, s) && s !== n && r(e, s, {
			get: () => t[s],
			enumerable: !(o = i(t, s)) || o.enumerable
		});
		return e;
	}, g = (e, t, i) => (i = e == null ? {} : n(s(e)), m(t || !e || !e.__esModule ? r(i, "default", {
		value: e,
		enumerable: !0
	}) : i, e)), _ = (e) => m(r({}, "__esModule", { value: !0 }), e), v = {};
	p(v, { createI18nClient: () => V }), t.exports = _(v), h();
	var y = d("next/navigation"), b = g(d("react")), x = (e, t = "") => Object.entries(e).reduce((e, [n, r]) => f(f({}, e), typeof r == "string" ? { [t + n]: r } : x(r, `${t}${n}.`)), {});
	function S(e, t) {
		return process.env.NODE_ENV !== "production" && console[e](`[next-international] ${t}`), null;
	}
	var C = (e) => S("warn", e), w = (e) => S("error", e), T = /* @__PURE__ */ new Map();
	function E(e, t, n) {
		function r({ locale: t, importLocale: r, children: i }) {
			let a = T.get(t) ?? (0, b.use)(r).default;
			T.has(t) || T.set(t, a);
			let o = (0, b.useMemo)(() => ({
				localeContent: x(a),
				fallbackLocale: n ? x(n) : void 0,
				locale: t
			}), [a, t]);
			return b.default.createElement(e.Provider, { value: o }, i);
		}
		return function({ locale: e, fallback: n, children: i }) {
			let a = t[e];
			return a || (w(`The locale '${e}' is not supported. Defined locales are: [${Object.keys(t).join(", ")}].`), (0, y.notFound)()), b.default.createElement(b.Suspense, { fallback: n }, b.default.createElement(r, {
				locale: e,
				importLocale: a()
			}, i));
		};
	}
	var D = d("react"), O = d("react"), k = d("react");
	function A(e, t) {
		let { localeContent: n, fallbackLocale: r } = e, i = r && typeof n == "string" ? r : Object.assign(r ?? {}, n), a = new Set(Object.keys(i).filter((e) => e.includes("#")).map((e) => e.split("#", 1)[0])), o = new Intl.PluralRules(e.locale);
		function s(e) {
			return e === 0 ? "zero" : o.select(e);
		}
		function c(e, ...n) {
			let r = n[0], o = !1;
			r && "count" in r && (t ? a.has(`${t}.${e}`) : a.has(e)) && (e = `${e}#${s(r.count)}`, o = !0);
			let c = t ? i[`${t}.${e}`] : i[e];
			if (c = !c && o ? (i[`${e.split("#", 1)[0]}#other`] || e)?.toString() : (c || e)?.toString(), !r) return c;
			let l = !0, u = c?.split(/({[^}]*})/).map((e, t) => {
				let n = e.match(/{(.*)}/);
				if (n) {
					let e = n[1], i = r[e];
					return (0, k.isValidElement)(i) ? (l = !1, (0, k.cloneElement)(i, { key: `${String(e)}-${t}` })) : i;
				}
				return e;
			});
			return l ? u?.join("") : u;
		}
		return c;
	}
	function j(e) {
		return function() {
			let t = (0, O.useContext)(e);
			if (!t) throw Error("`useI18n` must be used inside `I18nProvider`");
			return (0, O.useMemo)(() => A(t, void 0), [t]);
		};
	}
	var M = d("react");
	function N(e) {
		return function(t) {
			let n = (0, M.useContext)(e);
			if (!n) throw Error("`useI18n` must be used inside `I18nProvider`");
			return (0, M.useMemo)(() => A(n, t), [n, t]);
		};
	}
	var P = d("next/navigation");
	function F(e, t, n) {
		return function(r) {
			let { push: i, refresh: a } = (0, P.useRouter)(), o = e(), s = (0, P.usePathname)(), c = r?.preserveSearchParams ? (0, P.useSearchParams)().toString() : void 0, l = c ? `?${c}` : "", u = s;
			return n.basePath && (u = u.replace(n.basePath, "")), u.startsWith(`/${o}/`) ? u = u.replace(`/${o}/`, "/") : u === `/${o}` && (u = "/"), function(e) {
				if (e === o) return;
				let n = t[e];
				if (!n) {
					C(`The locale '${e}' is not supported. Defined locales are: [${Object.keys(t).join(", ")}].`);
					return;
				}
				n().then((t) => {
					T.set(e, t.default), i(`/${e}${u}${l}`), a();
				});
			};
		};
	}
	function I() {
		return function(e) {
			return e;
		};
	}
	var L = d("next/navigation"), R = d("react"), z = "locale";
	function B(e, t) {
		return function() {
			let n = (0, L.useParams)()[t.segmentName ?? z];
			return (0, R.useMemo)(() => {
				for (let t of e) if (n === t) return t;
				w(`Locale "${n}" not found in locales (${e.join(", ")}), returning "notFound()"`), (0, L.notFound)();
			}, [n]);
		};
	}
	function V(e, t = {}) {
		let n = Object.keys(e), r = (0, D.createContext)(null), i = B(n, t), a = E(r, e, t.fallbackLocale);
		return {
			useI18n: j(r),
			useScopedI18n: N(r),
			I18nProviderClient: a,
			I18nClientContext: r,
			useChangeLocale: F(i, e, t),
			defineLocale: I(),
			useCurrentLocale: i
		};
	}
}))().createI18nClient)({
	en: () => import("./en-6VvYhpne.js"),
	fr: () => import("./fr-0B0NWiXi.js"),
	es: () => import("./es-C9Oh3qEQ.js"),
	de: () => import("./de-BDTiQ_G0.js"),
	it: () => import("./it-BGGWmAGL.js"),
	pt: () => import("./pt-CNbGHncb.js"),
	zh: () => import("./zh-BXPS2wGR.js"),
	ja: () => import("./ja-B-8MoV68.js"),
	ko: () => import("./ko-80JB3Vd-.js"),
	ru: () => import("./ru-CdEKEpwl.js")
});
function _() {
	return g.useI18n();
}
var { useScopedI18n: v, I18nProviderClient: y, useChangeLocale: b, useCurrentLocale: x } = g;
function S() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function C(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function w() {
	let t = _(), [r, i] = n("auto");
	e(() => {
		let e = S();
		i(e), C(e);
	}, []), e(() => {
		if (r !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => C("auto");
		return e.addEventListener("change", t), () => {
			e.removeEventListener("change", t);
		};
	}, [r]);
	function a() {
		let e = r === "light" ? "dark" : r === "dark" ? "auto" : "light";
		i(e), C(e), window.localStorage.setItem("theme", e);
	}
	let o = t(r === "auto" ? "theme-toggle.themeModeAutoSystemClick" : r === "light" ? "theme-toggle.themeModeLightClick" : "theme-toggle.themeModeDarkClick");
	return s("button", {
		type: "button",
		onClick: a,
		"aria-label": o,
		title: o,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t(r === "auto" ? "theme-toggle.themeAuto" : r === "dark" ? "theme-toggle.themeDark" : "theme-toggle.themeLight")
	});
}
var T = [
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
], E = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
};
function D() {
	let e = i().locale ?? "en", t = a(), n = o(), r = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return s("div", {
		className: "flex items-center gap-2",
		children: s("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: T.map((e) => s("option", {
				value: e,
				children: E(e)
			}, e))
		})
	});
}
function O(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), t(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function k() {
	let e = _();
	O("Header");
	let [t, r] = n(!1), o = i(), u = a(), d = o.locale ?? "en", f = [
		{
			href: "/products",
			label: e("header.products")
		},
		{
			href: "/pricing",
			label: e("header.pricing")
		},
		{
			href: "/team",
			label: e("header.team")
		},
		{
			href: "/blog",
			label: e("header.blog")
		},
		{
			href: "/careers",
			label: e("header.careers")
		},
		{
			href: "/faq",
			label: e("header.faq")
		},
		{
			href: "/contact",
			label: e("footer.contact")
		},
		{
			href: "/settings",
			label: e("header.settings")
		}
	];
	return s("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: c("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [c("div", {
				className: "flex items-center gap-8",
				children: [s(m, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), c("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						s(m, {
							href: "/",
							className: `nav-link${((e) => u === p(e, d))("/") ? " is-active" : ""}`,
							children: e("header.home")
						}),
						s(m, {
							href: "/about",
							className: `nav-link${((e) => {
								let t = p(e, d);
								return u.startsWith(t) && (e !== "/" || u === t);
							})("/about") ? " is-active" : ""}`,
							children: e("footer.methodology")
						}),
						c("div", {
							className: "relative",
							children: [c("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => r(!0),
								onMouseLeave: () => r(!1),
								onClick: () => r(!t),
								children: [e("header.mockPages"), s(l, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								})]
							}), t && s("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => r(!0),
								onMouseLeave: () => r(!1),
								children: s("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: f.map((e) => s(m, {
										href: e.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => r(!1),
										children: e.label
									}, e.href))
								})
							})]
						})
					]
				})]
			}), c("div", {
				className: "flex items-center gap-4",
				children: [
					c("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [s("span", {
							className: "sr-only",
							children: e("header.goToGithub")
						}), s("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: s("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					s(D, {}),
					s(w, {})
				]
			})]
		})
	});
}
function A() {
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
function j(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function M({ children: r, locale: i }) {
	let [a] = n(() => typeof performance < "u" ? performance.now() : 0);
	return t(() => {
		j("AppRoot", a);
	}, [a]), e(() => {
		document.documentElement.lang = i;
	}, [i]), e(() => {
		A();
	}, []), s(y, {
		locale: i,
		children: r
	});
}
var N = "en";
function P({ children: e }) {
	return s(M, {
		locale: N,
		children: e
	});
}
function F() {
	return s(P, { children: s(k, {}) });
}
export { F as default };
import { t as e } from "./flatten-C8ShVzoT.js";
import t from "../messages/de.json";
var n = e(t);
export { n as default };
import { t as e } from "./flatten-C8ShVzoT.js";
var t = e({
	"careers-header": {
		title: "Careers",
		joinOurMissionToImprove: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
	},
	contact: {
		"contact-header": {
			getInTouch: "Get in Touch",
			haveIdeasFoundABug: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
		},
		"contact-form": {
			yourName: "Your name",
			nameLabel: "Name",
			emailLabel: "Email",
			topicLabel: "Topic",
			messageLabel: "Message",
			emailPlaceholder: "you@example.com",
			topicOther: "Other",
			bugReport: "Bug Report",
			newBenchmarkIdea: "New Benchmark Idea",
			methodologyQuestion: "Methodology Question",
			describeYourQuestionOrIdea: "Describe your question or idea...",
			sendMessage: "Send Message"
		}
	},
	"about-header": {
		aboutThisBenchmark: "About This Benchmark",
		thisIsAnOpenSource: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
	},
	hero: {
		title: "i18n Benchmark",
		aTestApplicationDesignedTo: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
		viewResults: "View Results"
	},
	blog: {
		"blog-header": { insightsTutorialsAndAnalysisFrom: "Insights, tutorials, and analysis from the i18n community." },
		"blog-list": {
			comparingI18nLibrariesIn2026: "Comparing i18n Libraries in 2026: A Deep Dive",
			weTested12DifferentInternationalization: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
			howToReduceYourI18n: "How to Reduce Your i18n Bundle by 60%",
			march82026: "March 8, 2026",
			practicalStrategiesForOptimizingTranslation: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
			theStateOfInternationalizationIn: "The State of Internationalization in React",
			february282026: "February 28, 2026",
			anOverviewOfTheCurrent: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
			migratingFromReactI18nextTo: "Migrating from react-i18next to Lingui",
			february152026: "February 15, 2026",
			aStepByStepGuide: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
			serverComponentsAndI18nWhat: "Server Components and i18n: What Changes?",
			february12026: "February 1, 2026",
			reactServerComponentsIntroduceNew: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
			benchmarkMethodologyHowWeTest: "Benchmark Methodology: How We Test",
			january202026: "January 20, 2026",
			aTransparentLookAtOur: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
			readMore: "Read More →",
			categoryBenchmark: "Benchmark",
			categoryTutorial: "Tutorial",
			categoryAnalysis: "Analysis",
			categoryMeta: "Meta"
		}
	},
	faq: { "faq-list": {
		whatIsI18nBenchmark: "What is i18n Benchmark?",
		whatIsI18nBenchmarkAnswer: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.",
		howAreBenchmarksConducted: "How are benchmarks conducted?",
		weRunStandardizedTestsIn: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
		whichLibrariesAreCurrentlySupported: "Which libraries are currently supported?",
		weSupportReactI18nextReact: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
		canISubmitMyOwn: "Can I submit my own benchmarks?",
		yesCommunityBenchmarkSubmissionsAre: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
		howOftenAreBenchmarksUpdated: "How often are benchmarks updated?",
		weReRunAllBenchmarks: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
		isTheDataReliable: "Is the data reliable?",
		weFollowRigorousStatisticalMethodology: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
		doYouOfferConsultingServices: "Do you offer consulting services?",
		yesOurEnterprisePlanIncludes: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
		howCanIContribute: "How can I contribute?",
		thereAreManyWaysTo: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
	} },
	"blog-list": {
		comparingI18nLibrariesIn2026: "Comparing i18n Libraries in 2026: A Deep Dive",
		weTested12DifferentInternationalization: "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
		howToReduceYourI18n: "How to Reduce Your i18n Bundle by 60%",
		march82026: "March 8, 2026",
		practicalStrategiesForOptimizingTranslation: "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
		theStateOfInternationalizationIn: "The State of Internationalization in React",
		february282026: "February 28, 2026",
		anOverviewOfTheCurrent: "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
		migratingFromReactI18nextTo: "Migrating from react-i18next to Lingui",
		february152026: "February 15, 2026",
		aStepByStepGuide: "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
		serverComponentsAndI18nWhat: "Server Components and i18n: What Changes?",
		february12026: "February 1, 2026",
		reactServerComponentsIntroduceNew: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
		benchmarkMethodologyHowWeTest: "Benchmark Methodology: How We Test",
		january202026: "January 20, 2026",
		aTransparentLookAtOur: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
		readMore: "Read More →"
	},
	"understanding-impact": {
		understandingTheImpact: "Understanding the Impact",
		whyASingleLargeJson: "Why a single large JSON can hurt performance",
		manyI18nLibrariesStoreTranslations: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
		theJsonMustBeParsed: "The JSON must be parsed on every page load — blocking the main thread.",
		contextBasedArchitecturesCanCause: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
		duringServerSideRenderingThe: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
		theTradeOffsOfDynamic: "The trade-offs of dynamic loading",
		splittingTranslationsIntoPerRoute: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
		waterfallRequests: "Waterfall requests:",
		flashOfUntranslatedContentFouc: "Flash of untranslated content (FOUC):",
		cacheInvalidation: "Cache invalidation:",
		whatThisBenchmarkMeasures: "What this benchmark measures",
		thisTestAppProvidesA: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
	},
	settings: {
		"settings-header": { manageYourAccountPreferencesAnd: "Manage your account preferences and configuration." },
		"profile-section": {
			displayName: "Display Name",
			profile: "Profile",
			email: "Email"
		},
		"preferences-section": {
			preferences: "Preferences",
			emailNotifications: "Email Notifications",
			receiveWeeklyBenchmarkReports: "Receive weekly benchmark reports",
			toggleNotifications: "Toggle notifications",
			darkMode: "Dark Mode",
			useDarkColorScheme: "Use dark color scheme",
			toggleDarkMode: "Toggle dark mode",
			defaultLanguage: "Default Language",
			englishEn: "English (en)",
			frenchFr: "French (fr)",
			germanDe: "German (de)",
			spanishEs: "Spanish (es)",
			japaneseJa: "Japanese (ja)",
			chineseSimplifiedZhCn: "Chinese Simplified (zh-CN)",
			arabicAr: "Arabic (ar)"
		},
		"api-access-section": {
			apiAccess: "API Access",
			copy: "Copy",
			apiKey: "API Key",
			useThisKeyToAccess: "Use this key to access the benchmarking API programmatically."
		},
		"settings-footer": {
			saveChanges: "Save Changes",
			cancel: "Cancel"
		}
	},
	"faq-list": {
		whatIsI18nBenchmark: "What is i18n Benchmark?",
		whatIsI18nBenchmarkAnswer: "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.",
		howAreBenchmarksConducted: "How are benchmarks conducted?",
		weRunStandardizedTestsIn: "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
		whichLibrariesAreCurrentlySupported: "Which libraries are currently supported?",
		weSupportReactI18nextReact: "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
		canISubmitMyOwn: "Can I submit my own benchmarks?",
		yesCommunityBenchmarkSubmissionsAre: "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
		howOftenAreBenchmarksUpdated: "How often are benchmarks updated?",
		weReRunAllBenchmarks: "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
		isTheDataReliable: "Is the data reliable?",
		weFollowRigorousStatisticalMethodology: "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
		doYouOfferConsultingServices: "Do you offer consulting services?",
		yesOurEnterprisePlanIncludes: "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
		howCanIContribute: "How can I contribute?",
		thereAreManyWaysTo: "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
	},
	pricing: {
		"pricing-header": {
			simpleTransparentPricing: "Simple, Transparent Pricing",
			chooseThePlanThatFits: "Choose the plan that fits your team. No hidden fees."
		},
		"pricing-tiers": {
			starter: "Starter",
			price0: "$0",
			forever: "forever",
			benchmarkRunPerDay: "{runs} benchmark runs/day",
			librariesNumber: "{libs} libraries",
			communitySupport: "Community support",
			publicResults: "Public results",
			pro: "Pro",
			price29: "$29",
			month: "/month",
			unlimitedRuns: "Unlimited runs",
			allLibraries: "All libraries",
			prioritySupport: "Priority support",
			privateResults: "Private results",
			ciIntegration: "CI integration",
			historicalData: "Historical data",
			enterprise: "Enterprise",
			customPrice: "Custom",
			everythingInPro: "Everything in Pro",
			onPremiseOption: "On-premise option",
			ssoSaml: "SSO & SAML",
			dedicatedAccountManager: "Dedicated account manager",
			customSlas: "Custom SLAs",
			auditLogs: "Audit logs",
			trainingSessions: "Training sessions",
			contactSales: "Contact Sales",
			getStarted: "Get Started"
		}
	},
	footer: {
		resources: "Resources",
		contact: "Contact",
		github: "GitHub",
		methodology: "Methodology",
		contributing: "Contributing",
		builtWith: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
		anOpenSourceTestApplication: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
	},
	"theme-toggle": {
		themeModeAutoSystemClick: "Theme mode: auto (system). Click to switch to light mode.",
		themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
		themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
		themeAuto: "Theme: Auto",
		themeDark: "Theme: Dark",
		themeLight: "Theme: Light"
	},
	"contact-header": {
		getInTouch: "Get in Touch",
		haveIdeasFoundABug: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
	},
	"what-we-measure": {
		bundleSizeImpact: "Bundle size impact",
		theAdditionalJavascriptBytesSent: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
		renderingOverhead: "Rendering overhead",
		howMuchExtraTimeThe: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
		hydrationCost: "Hydration cost",
		duringSsrTranslationDataIs: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
		lazyLoadingEffectiveness: "Lazy loading effectiveness",
		whetherSplittingTranslationsByRoute: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
		localeSwitchSpeed: "Locale switch speed",
		howFastTheAppCan: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
		whatWeMeasure: "What We Measure"
	},
	"results-table": {
		sampleResults: "Sample Results",
		libraryColumn: "Library",
		bundleSize: "Bundle Size",
		lookupTime: "Lookup Time",
		lazyLoading: "Lazy Loading"
	},
	careers: {
		"careers-header": {
			title: "Careers",
			joinOurMissionToImprove: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
		},
		"careers-benefits": {
			remoteFirstLabel: "Remote-first",
			workFromAnywhereInThe: "Work from anywhere in the world",
			competitivePay: "Competitive pay",
			topOfMarketCompensation: "Top-of-market compensation",
			openSourceTime: "Open source time",
			ossTimeValue: "20% time for OSS contributions"
		},
		"open-positions": {
			seniorFrontendEngineer: "Senior Frontend Engineer",
			buildAndMaintainOurBenchmarking: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
			backendEngineer: "Backend Engineer",
			designAndScaleOurCloud: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
			technicalWriter: "Technical Writer",
			createComprehensiveGuidesApiReferences: "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
			devrelEngineer: "DevRel Engineer",
			sanFranciscoRemote: "San Francisco / Remote",
			engageWithTheI18nCommunity: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
			qaEngineer: "QA Engineer",
			ensureTheAccuracyAndReliability: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
			openPositions: "Open Positions",
			applyNow: "Apply Now",
			remote: "Remote",
			fullTime: "Full-time",
			partTime: "Part-time",
			engineering: "Engineering",
			documentation: "Documentation",
			community: "Community"
		}
	},
	header: {
		home: "Home",
		methodology: "Methodology",
		mockPages: "Mock Pages",
		products: "Products",
		pricing: "Pricing",
		team: "Team",
		blog: "Blog",
		careers: "Careers",
		faq: "FAQ",
		contact: "Contact",
		settings: "Settings",
		goToGithub: "Go to GitHub"
	},
	mockBanner: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
	team: {
		"team-header": {
			ourTeam: "Our Team",
			meetThePeopleBehindI18n: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
		},
		"team-grid": {
			sarahChen: "Sarah Chen",
			founderLeadEngineer: "Founder & Lead Engineer",
			formerGoogleEngineerWith10: "Former Google engineer with 10 years of experience building internationalization systems at scale.",
			marcusWeber: "Marcus Weber",
			performanceEngineer: "Performance Engineer",
			specializesInJavascriptPerformanceOptimization: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
			aishaPatel: "Aisha Patel",
			developerAdvocate: "Developer Advocate",
			passionateAboutDeveloperExperienceAnd: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
			tomasRodriguez: "Tomás Rodríguez",
			fullStackDeveloper: "Full-Stack Developer",
			maintainsTheBenchmarkingInfrastructureAnd: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
			yukiTanaka: "Yuki Tanaka",
			dataAnalyst: "Data Analyst",
			ensuresStatisticalRigorInAll: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
			elenaKowalski: "Elena Kowalski",
			communityManager: "Community Manager",
			managesCommunityContributionsPartnershipsAnd: "Manages community contributions, partnerships, and events. Background in open source governance."
		}
	},
	about: {
		"about-header": {
			aboutThisBenchmark: "About This Benchmark",
			thisIsAnOpenSource: "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
		},
		"about-grid": {
			whyThisExists: "Why This Exists",
			choosingAnI18nLibraryIs: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
			methodology: "Methodology",
			theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
		},
		"what-we-measure": {
			bundleSizeImpact: "Bundle size impact",
			theAdditionalJavascriptBytesSent: "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
			renderingOverhead: "Rendering overhead",
			howMuchExtraTimeThe: "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
			hydrationCost: "Hydration cost",
			duringSsrTranslationDataIs: "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
			lazyLoadingEffectiveness: "Lazy loading effectiveness",
			whetherSplittingTranslationsByRoute: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
			localeSwitchSpeed: "Locale switch speed",
			howFastTheAppCan: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
			whatWeMeasure: "What We Measure"
		}
	},
	"contact-form": {
		yourName: "Your name",
		bugReport: "Bug Report",
		newBenchmarkIdea: "New Benchmark Idea",
		methodologyQuestion: "Methodology Question",
		describeYourQuestionOrIdea: "Describe your question or idea...",
		sendMessage: "Send Message"
	},
	products: {
		"products-header": { toolsAndServicesToStreamline: "Tools and services to streamline your internationalization workflow." },
		"products-grid": {
			benchmarkCli: "Benchmark CLI",
			runBenchmarksLocallyFromYour: "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
			benchmarkCloud: "Benchmark Cloud",
			automatedCloudBasedBenchmarkingWith: "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
			benchmarkEnterprise: "Benchmark Enterprise",
			onPremiseDeploymentWithSso: "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
			contactUs: "Contact Us",
			migrationAssistant: "Migration Assistant",
			aiPoweredToolThatHelps: "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
			translationQa: "Translation QA",
			automatedQualityChecksForMissing: "Automated quality checks for missing translations, pluralization issues, and context errors.",
			bundleOptimizer: "Bundle Optimizer",
			analyzesAndOptimizesYourI18n: "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
			learnMore: "Learn More",
			free: "Free",
			price29mo: "$29/mo",
			price99oneTime: "$99 one-time",
			price19mo: "$19/mo",
			price49mo: "$49/mo"
		}
	},
	"open-positions": {
		seniorFrontendEngineer: "Senior Frontend Engineer",
		buildAndMaintainOurBenchmarking: "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
		backendEngineer: "Backend Engineer",
		designAndScaleOurCloud: "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
		technicalWriter: "Technical Writer",
		createComprehensiveGuidesApiReferences: "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
		devrelEngineer: "DevRel Engineer",
		sanFranciscoRemote: "San Francisco / Remote",
		engageWithTheI18nCommunity: "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
		qaEngineer: "QA Engineer",
		ensureTheAccuracyAndReliability: "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
		openPositions: "Open Positions",
		applyNow: "Apply Now",
		remote: "Remote",
		fullTime: "Full-time",
		partTime: "Part-time",
		engineering: "Engineering",
		documentation: "Documentation",
		community: "Community"
	},
	route: { route: {
		oopsPageNotFound: "Oops! Page not found",
		returnToHome: "Return to Home",
		couldNotMeasureHydrationDuration: "Could not measure hydration duration:"
	} },
	"blog-header": { insightsTutorialsAndAnalysisFrom: "Insights, tutorials, and analysis from the i18n community." },
	"faq-header1": {
		frequentlyAskedQuestions: "Frequently Asked Questions",
		everythingYouNeedToKnow: "Everything you need to know about i18n Benchmark."
	},
	"about-grid": {
		whyThisExists: "Why This Exists",
		choosingAnI18nLibraryIs: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
		methodology: "Methodology",
		theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
	},
	home: {
		hero: {
			title: "i18n Benchmark",
			aTestApplicationDesignedTo: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
			viewResults: "View Results"
		},
		"why-it-matters": {
			whyTheseMetricsMatter: "Why These Metrics Matter",
			bundleSize: "Bundle Size",
			theBundleIsTheData: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
			renderingHydration: "Rendering & Hydration",
			connectingALargeJsonDictionary: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
			dynamicLoading: "Dynamic Loading",
			loadingAllTranslationsUpfrontOverloads: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
		},
		"understanding-impact": {
			understandingTheImpact: "Understanding the Impact",
			whyASingleLargeJson: "Why a single large JSON can hurt performance",
			manyI18nLibrariesStoreTranslations: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
			theJsonMustBeParsed: "The JSON must be parsed on every page load — blocking the main thread.",
			contextBasedArchitecturesCanCause: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
			duringServerSideRenderingThe: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
			theTradeOffsOfDynamic: "The trade-offs of dynamic loading",
			splittingTranslationsIntoPerRoute: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
			waterfallRequests: "Waterfall requests:",
			waterfallRequestsDetail: " the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
			flashOfUntranslatedContentFouc: "Flash of untranslated content (FOUC):",
			flashOfUntranslatedContentDetail: " users may briefly see translation keys or a fallback language before the chunk arrives.",
			cacheInvalidation: "Cache invalidation:",
			cacheInvalidationDetail: " updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
			whatThisBenchmarkMeasures: "What this benchmark measures",
			thisTestAppProvidesA: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
		},
		"results-table": {
			sampleResults: "Sample Results",
			libraryColumn: "Library",
			bundleSize: "Bundle Size",
			lookupTime: "Lookup Time",
			lazyLoading: "Lazy Loading"
		}
	},
	"careers-benefits": {
		workFromAnywhereInThe: "Work from anywhere in the world",
		competitivePay: "Competitive pay",
		topOfMarketCompensation: "Top-of-market compensation",
		openSourceTime: "Open source time"
	},
	"why-it-matters": {
		whyTheseMetricsMatter: "Why These Metrics Matter",
		bundleSize: "Bundle Size",
		theBundleIsTheData: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
		renderingHydration: "Rendering & Hydration",
		connectingALargeJsonDictionary: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
		dynamicLoading: "Dynamic Loading",
		loadingAllTranslationsUpfrontOverloads: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
	}
});
export { t as default };
import { t as e } from "./flatten-C8ShVzoT.js";
import t from "../messages/es.json";
var n = e(t);
export { n as default };
function e(t, n = "") {
	let r = {};
	for (let i in t) {
		let a = n ? `${n}.${i}` : i;
		typeof t[i] == "object" && t[i] !== null ? Object.assign(r, e(t[i], a)) : r[a] = String(t[i]);
	}
	return r;
}
export { e as t };
import { t as e } from "./flatten-C8ShVzoT.js";
import t from "../messages/fr.json";
var n = e(t);
export { n as default };
import { t as e } from "./flatten-C8ShVzoT.js";
import t from "../messages/it.json";
var n = e(t);
export { n as default };
import { t as e } from "./flatten-C8ShVzoT.js";
import t from "../messages/ja.json";
var n = e(t);
export { n as default };
import { t as e } from "./flatten-C8ShVzoT.js";
import t from "../messages/ko.json";
var n = e(t);
export { n as default };
import { t as e } from "./flatten-C8ShVzoT.js";
import t from "../messages/pt.json";
var n = e(t);
export { n as default };
import { t as e } from "./flatten-C8ShVzoT.js";
import t from "../messages/ru.json";
var n = e(t);
export { n as default };
import { t as e } from "./flatten-C8ShVzoT.js";
import t from "../messages/zh.json";
var n = e(t);
export { n as default };
