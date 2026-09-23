var e = {
	"aboutHeader.methodology": "Methodology",
	"aboutHeader.weDesignedThisBenchmarkTo": "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach.",
	"aboutGrid.testEnvironment": "Test Environment",
	"aboutGrid.allBenchmarksRunOn": "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.",
	"aboutGrid.applicationDesign": "Application Design",
	"aboutGrid.theBenchmarkAppHas10": "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.",
	"aboutGrid.measurementMethodology": "Measurement Methodology",
	"aboutGrid.weUseBrowserNativeApis": "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.",
	"aboutGrid.fairComparison": "Fair Comparison",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment.",
	"whatWeMeasure.bundleSizeImpact": "Bundle size impact",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.",
	"whatWeMeasure.renderingOverhead": "Rendering overhead",
	"whatWeMeasure.howMuchExtraTimeThe": "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.",
	"whatWeMeasure.hydrationCost": "Hydration cost",
	"whatWeMeasure.duringSsrTranslationDataIs": "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Lazy loading effectiveness",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	"whatWeMeasure.localeSwitchSpeed": "Locale switch speed",
	"whatWeMeasure.howFastTheAppCan": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	"whatWeMeasure.whatWeMeasure": "What We Measure"
};
export { e as default };
var e = "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.", t = "Application Design", n = "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.", r = "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment.", i = "Fair Comparison", a = "Measurement Methodology", o = "Methodology", s = "Test Environment", c = "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.", l = "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.", u = "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.", d = "Why This Exists", f = {
	allBenchmarksRunOn: e,
	applicationDesign: t,
	choosingAnI18nLibrary: n,
	eachI18nLibraryIsIntegrated: r,
	fairComparison: i,
	measurementMethodology: a,
	methodology: o,
	testEnvironment: s,
	theBenchmarkAppHas10: c,
	theSame10PageApp: l,
	weUseBrowserNativeApis: u,
	whyThisExists: d
};
export { e as allBenchmarksRunOn, t as applicationDesign, n as choosingAnI18nLibrary, f as default, r as eachI18nLibraryIsIntegrated, i as fairComparison, a as measurementMethodology, o as methodology, s as testEnvironment, c as theBenchmarkAppHas10, l as theSame10PageApp, u as weUseBrowserNativeApis, d as whyThisExists };
var e = "About This Benchmark", t = "Methodology", n = "This is an open-source test application for measuring the real-world impact of internationalization libraries.", r = "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach.", i = {
	aboutThisBenchmark: e,
	methodology: t,
	thisIsAnOpenSource: n,
	weDesignedThisBenchmarkTo: r
};
export { e as aboutThisBenchmark, i as default, t as methodology, n as thisIsAnOpenSource, r as weDesignedThisBenchmarkTo };
var e = "API Access", t = "API Key", n = "Use this key to access the benchmarking API programmatically.", r = "Copy", i = {
	apiAccess: e,
	apiKey: t,
	useThisKeyTo: n,
	copy: r
};
export { e as apiAccess, t as apiKey, r as copy, i as default, n as useThisKeyTo };
var e = {
	"blogHeader.blog": "Blog",
	"blogHeader.insightsDeepDivesAnd": "Insights, deep dives, and updates from the i18n benchmarking community.",
	"blogList.i18nBenchmark2026Results": "i18n Benchmark 2026 Results",
	"blogList.march152026": "March 15, 2026",
	"blogList.weTested12DifferentInternationalization": "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts.",
	"blogList.howToReduceYourI18n": "How to Reduce Your i18n Bundle by 60%",
	"blogList.march82026": "March 8, 2026",
	"blogList.practicalStrategiesForOptimizingTranslation": "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.",
	"blogList.theStateOfInternationalizationIn": "The State of Internationalization in 2026",
	"blogList.february282026": "February 28, 2026",
	"blogList.anOverviewOfTheCurrent": "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.",
	"blogList.migratingFromReactI18nextTo": "Migrating from react-i18next to Lingui",
	"blogList.february152026": "February 15, 2026",
	"blogList.aStepByStepGuide": "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components and i18n: What Changes?",
	"blogList.february12026": "February 1, 2026",
	"blogList.reactServerComponentsIntroduceNew": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	"blogList.benchmarkMethodologyHowWeTest": "Benchmark Methodology: How We Test",
	"blogList.january202026": "January 20, 2026",
	"blogList.aTransparentLookAtOur": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	"blogList.readMore": "Read More →"
};
export { e as default };
var e = "Blog", t = "Insights, deep dives, and updates from the i18n benchmarking community.", n = "Insights, Tutorials, and Analysis", r = {
	blog: e,
	insightsDeepDivesAnd: t,
	insightsTutorialsAndAnalysis: n
};
export { e as blog, r as default, t as insightsDeepDivesAnd, n as insightsTutorialsAndAnalysis };
var e = "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.", t = "A step-by-step guide on migrating from legacy i18n solutions to modern, high-performance libraries.", n = "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.", r = "A transparent look at our benchmarking process, from hardware specs to measurement techniques.", i = "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.", a = "An overview of the current i18n landscape and how different libraries stack up in 2026.", o = "Analysis", s = "Benchmark", c = "Benchmark Methodology: How We Test", l = "Benchmark Methodology: How We Test", u = "Comparing i18n Libraries in 2026: A Deep Dive", d = "February 1, 2026", f = "February 15, 2026", p = "February 28, 2026", m = "How to Reduce Your i18n Bundle by 60%", h = "i18n Benchmark 2026 Results", g = "January 20, 2026", _ = "March 15, 2026", v = "March 8, 2026", y = "Meta", b = "Migrating from react-i18next to Lingui", x = "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.", S = "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.", C = "Read More →", w = "Server Components and i18n: What Changes?", T = "The State of Internationalization in 2026", E = "Tutorial", D = "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts.", O = {
	aStepByStepGuide: e,
	aStepByStepGuideOnMigrating: t,
	aTransparentLookAtOur: n,
	aTransparentLookAtOurBenchmarking: r,
	anOverviewOfTheCurrent: i,
	anOverviewOfTheCurrentI18n: a,
	analysis: o,
	benchmark: s,
	benchmarkMethodologyHowWe: c,
	benchmarkMethodologyHowWeTest: l,
	comparingI18nLibrariesIn: u,
	february12026: d,
	february152026: f,
	february282026: p,
	howToReduceYourI18n: m,
	i18nBenchmark2026Results: h,
	january202026: g,
	march152026: _,
	march82026: v,
	meta: y,
	migratingFromReactI18nextTo: b,
	practicalStrategiesForOptimizingTranslation: x,
	reactServerComponentsIntroduceNew: S,
	readMore: C,
	serverComponentsAndI18nWhat: w,
	theStateOfInternationalizationIn: T,
	tutorial: E,
	weTested12DifferentInternationalization: D
};
export { e as aStepByStepGuide, t as aStepByStepGuideOnMigrating, n as aTransparentLookAtOur, r as aTransparentLookAtOurBenchmarking, i as anOverviewOfTheCurrent, a as anOverviewOfTheCurrentI18n, o as analysis, s as benchmark, c as benchmarkMethodologyHowWe, l as benchmarkMethodologyHowWeTest, u as comparingI18nLibrariesIn, O as default, d as february12026, f as february152026, p as february282026, m as howToReduceYourI18n, h as i18nBenchmark2026Results, g as january202026, _ as march152026, v as march82026, y as meta, b as migratingFromReactI18nextTo, x as practicalStrategiesForOptimizingTranslation, S as reactServerComponentsIntroduceNew, C as readMore, w as serverComponentsAndI18nWhat, T as theStateOfInternationalizationIn, E as tutorial, D as weTested12DifferentInternationalization };
var e = {
	"careersHeader.careers": "Careers",
	"careersHero.fromAnywhere": "from anywhere in the world",
	"careersBenefits.competitivePay": "Competitive pay",
	"careersBenefits.topOfMarket": "Top-of-market compensation",
	"careersBenefits.openSourceTime": "Open source time",
	"careersBenefits.twentyPercentTime": "20% time for OSS",
	"careersPositions.seniorFrontendEngineer": "Senior Frontend Engineer",
	"careersPositions.seniorFrontendEngineerDesc": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
	"openPositions.openPositions": "Open Positions",
	"openPositions.remote": "Remote",
	"openPositions.fullTime": "Full-time",
	"openPositions.engineering": "Engineering",
	"openPositions.applyNow": "Apply Now"
};
export { e as default };
var e = "All our work is open source. Build your public portfolio while making an impact.", t = "Competitive pay", n = "Impactful", r = "Open Source", i = "Open source time", a = "20% time for OSS contributions", o = "Remote-First", s = "Top-of-market compensation", c = "Why Join Us?", l = "Work from anywhere in the world", u = "Work from anywhere. Fully distributed team across 6 time zones.", d = "Your work directly helps developers build better, faster internationalized applications.", f = {
	allOurWorkIs: e,
	competitivePay: t,
	impactful: n,
	openSource: r,
	openSourceTime: i,
	percentTimeForOss: a,
	remoteFirst: o,
	topOfMarketCompensation: s,
	whyJoinUs: c,
	workFromAnywhere: l,
	workFromAnywhereFully: u,
	yourWorkDirectlyHelps: d
};
export { e as allOurWorkIs, t as competitivePay, f as default, n as impactful, r as openSource, i as openSourceTime, a as percentTimeForOss, o as remoteFirst, s as topOfMarketCompensation, c as whyJoinUs, l as workFromAnywhere, u as workFromAnywhereFully, d as yourWorkDirectlyHelps };
var e = "Careers", t = "Join our mission to make internationalization fast, easy, and performant for everyone.", n = "Join our mission to make the web faster and more accessible for everyone, everywhere.", r = {
	careers: e,
	joinOurMission: t,
	joinOurMissionToMake: n
};
export { e as careers, r as default, t as joinOurMission, n as joinOurMissionToMake };
var e = "Cancel", t = "Copy", n = "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", r = "Read More", i = "Save Changes", a = {
	cancel: e,
	copy: t,
	"footer.anOpenSourceTestApplication": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	"footer.builtWith": "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	"footer.contact": "Contact",
	"footer.contributing": "Contributing",
	"footer.github": "GitHub",
	"footer.methodology": "Methodology",
	"footer.resources": "Resources",
	"header.blog": "Blog",
	"header.careers": "Careers",
	"header.contact": "Contact",
	"header.faq": "FAQ",
	"header.goToGithub": "Go to GitHub",
	"header.home": "Home",
	"header.methodology": "Methodology",
	"header.mockPages": "Mock Pages",
	"header.pricing": "Pricing",
	"header.products": "Products",
	"header.settings": "Settings",
	"header.team": "Team",
	mockBanner: n,
	readMore: r,
	saveChanges: i,
	"themeToggle.themeAuto": "Theme: Auto",
	"themeToggle.themeDark": "Theme: Dark",
	"themeToggle.themeLight": "Theme: Light",
	"themeToggle.themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
	"themeToggle.themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
	"themeToggle.themeModeLightClick": "Theme mode: light. Click to switch to dark mode."
};
export { e as cancel, t as copy, a as default, n as mockBanner, r as readMore, i as saveChanges };
var e = {
	"contactHeader.contactUs": "Contact Us",
	"contactHeader.haveQuestionsOrWantTo": "Have questions or want to contribute? We'd love to hear from you.",
	"contactForm.name": "Name",
	"contactForm.email": "Email",
	"contactForm.subject": "Subject",
	"contactForm.message": "Message",
	"contactForm.sendMessage": "Send Message",
	"contactForm.wellGetBackTo": "We'll get back to you within 48 hours."
};
export { e as default };
var e = "Bug Report", t = "Contribution", n = "Email", r = "you@example.com", i = "Message", a = "Your message...", o = "Methodology Question", s = "Name", c = "New Benchmark Idea", l = "Other", u = "Send Message", d = "Subject", f = "Topic", p = "We'll get back to you within 48 hours.", m = "Your name", h = {
	bugReport: e,
	contribution: t,
	email: n,
	emailPlaceholder: r,
	message: i,
	messagePlaceholder: a,
	methodologyQuestion: o,
	name: s,
	newBenchmarkIdea: c,
	other: l,
	sendMessage: u,
	subject: d,
	topic: f,
	wellGetBackTo: p,
	yourName: m
};
export { e as bugReport, t as contribution, h as default, n as email, r as emailPlaceholder, i as message, a as messagePlaceholder, o as methodologyQuestion, s as name, c as newBenchmarkIdea, l as other, u as sendMessage, d as subject, f as topic, p as wellGetBackTo, m as yourName };
var e = "Contact Us", t = "Get in Touch", n = "Have ideas? Found a bug? We'd love to hear from you.", r = "Have questions or want to contribute? We'd love to hear from you.", i = {
	contactUs: e,
	getInTouch: t,
	haveIdeasFoundABug: n,
	haveQuestionsOrWantTo: r
};
export { e as contactUs, i as default, t as getInTouch, n as haveIdeasFoundABug, r as haveQuestionsOrWantTo };
var e = {
	"faqHeader.frequentlyAskedQuestions": "Frequently Asked Questions",
	"faqHeader.everythingYouNeedTo": "Everything you need to know about the i18n Benchmark project.",
	"faqList.howAreTheBenchmarks": "How are the benchmarks run?",
	"faqList.allBenchmarksAreRun": "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.",
	"faqList.whatLibrariesAreCurrently": "What libraries are currently tested?",
	"faqList.weCurrentlyBenchmarkReactI18next": "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.",
	"faqList.canIContributeA": "Can I contribute a new library integration?",
	"faqList.absolutelyWeWelcomeCommunity": "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.",
	"faqList.howOftenAreResults": "How often are results updated?",
	"faqList.benchmarksRunAutomaticallyVia": "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.",
	"faqList.areTheResultsStatistically": "Are the results statistically significant?",
	"faqList.yesWeUseThe": "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes."
};
export { e as default };
var e = "Everything you need to know about i18n Benchmark.", t = "Frequently Asked Questions", n = {
	everythingYouNeedToKnow: e,
	frequentlyAskedQuestions: t
};
export { n as default, e as everythingYouNeedToKnow, t as frequentlyAskedQuestions };
var e = "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.", t = "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.", n = "Are the results statistically significant?", r = "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.", i = "Can I contribute a new library integration?", a = "Can I submit my own benchmarks?", o = "Do you offer consulting services?", s = "How are benchmarks conducted?", c = "How are the benchmarks run?", l = "How can I contribute?", u = "How often are benchmarks updated?", d = "How often are results updated?", f = "i18n Benchmark is an open-source project dedicated to measuring the real-world performance impact of internationalization libraries.", p = "Is the data reliable?", m = "There are many ways to contribute, from submitting new benchmarks to improving our methodology documentation.", h = "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.", g = "We follow rigorous statistical methodology, including outlier detection and multiple test runs to ensure accuracy.", _ = "We re-run all benchmarks weekly against the latest versions of each library.", v = "We run standardized tests in isolated environments, measuring bundle size, render time, and memory usage across dozens of libraries.", y = "We support react-i18next, react-intl, Lingui, Tolgee, and several other popular React i18n solutions.", b = "What is i18n Benchmark?", x = "What libraries are currently tested?", S = "Which libraries are currently supported?", C = "Yes! Community benchmark submissions are encouraged and reviewed by our core team.", w = "Yes, our Enterprise plan includes consulting services for optimizing your app's i18n performance.", T = "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes.", E = {
	absolutelyWeWelcomeCommunity: e,
	allBenchmarksAreRun: t,
	areTheResultsStatistically: n,
	benchmarksRunAutomaticallyVia: r,
	canIContributeA: i,
	canISubmitMyOwnBenchmarks: a,
	doYouOfferConsultingServices: o,
	howAreBenchmarksConducted: s,
	howAreTheBenchmarks: c,
	howCanIContribute: l,
	howOftenAreBenchmarksUpdated: u,
	howOftenAreResults: d,
	i18nBenchmarkIsAnOpenSource: f,
	isTheDataReliable: p,
	thereAreManyWaysToContribute: m,
	weCurrentlyBenchmarkReactI18next: h,
	weFollowRigorousStatisticalMethodologyIncluding: g,
	weReRunAllBenchmarksWeekly: _,
	weRunStandardizedTestsInIsolated: v,
	weSupportReactI18nextReactIntl: y,
	whatIsI18nBenchmark: b,
	whatLibrariesAreCurrently: x,
	whichLibrariesAreCurrentlySupported: S,
	yesCommunityBenchmarkSubmissionsAre: C,
	yesOurEnterprisePlanIncludesConsulting: w,
	yesWeUseThe: T
};
export { e as absolutelyWeWelcomeCommunity, t as allBenchmarksAreRun, n as areTheResultsStatistically, r as benchmarksRunAutomaticallyVia, i as canIContributeA, a as canISubmitMyOwnBenchmarks, E as default, o as doYouOfferConsultingServices, s as howAreBenchmarksConducted, c as howAreTheBenchmarks, l as howCanIContribute, u as howOftenAreBenchmarksUpdated, d as howOftenAreResults, f as i18nBenchmarkIsAnOpenSource, p as isTheDataReliable, m as thereAreManyWaysToContribute, h as weCurrentlyBenchmarkReactI18next, g as weFollowRigorousStatisticalMethodologyIncluding, _ as weReRunAllBenchmarksWeekly, v as weRunStandardizedTestsInIsolated, y as weSupportReactI18nextReactIntl, b as whatIsI18nBenchmark, x as whatLibrariesAreCurrently, S as whichLibrariesAreCurrentlySupported, C as yesCommunityBenchmarkSubmissionsAre, w as yesOurEnterprisePlanIncludesConsulting, T as yesWeUseThe };
var e = "Resources", t = "Contact", n = "GitHub", r = "Methodology", i = "Contributing", a = "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.", o = "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.", s = {
	resources: e,
	contact: t,
	github: n,
	methodology: r,
	contributing: i,
	builtWith: a,
	anOpenSourceTestApplication: o
};
export { o as anOpenSourceTestApplication, a as builtWith, t as contact, i as contributing, s as default, n as github, r as methodology, e as resources };
var e = "Home", t = "Methodology", n = "Mock Pages", r = "Products", i = "Pricing", a = "Team", o = "Blog", s = "Careers", c = "FAQ", l = "Contact", u = "Settings", d = "Go to GitHub", f = {
	home: e,
	methodology: t,
	mockPages: n,
	products: r,
	pricing: i,
	team: a,
	blog: o,
	careers: s,
	faq: "FAQ",
	contact: l,
	settings: u,
	goToGithub: d
};
export { o as blog, s as careers, l as contact, f as default, c as faq, d as goToGithub, e as home, t as methodology, n as mockPages, i as pricing, r as products, u as settings, a as team };
var e = "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.", t = "View Results", n = {
	aTestApplicationDesignedTo: e,
	viewResults: t
};
export { e as aTestApplicationDesignedTo, n as default, t as viewResults };
var e = {
	"hero.aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	"hero.viewResults": "View Results",
	"whyItMatters.whyTheseMetricsMatter": "Why These Metrics Matter",
	"whyItMatters.bundleSize": "Bundle Size",
	"whyItMatters.theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	"whyItMatters.renderingHydration": "Rendering & Hydration",
	"whyItMatters.connectingALargeJson": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	"whyItMatters.dynamicLoading": "Dynamic Loading",
	"whyItMatters.loadingAllTranslationsUpfront": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
	"understandingImpact.understandingTheImpact": "Understanding the Impact",
	"understandingImpact.whyASingleLargeJson": "Why a single large JSON can hurt performance",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	"understandingImpact.theJsonMustBeParsed": "The JSON must be parsed on every page load — blocking the main thread.",
	"understandingImpact.contextBasedArchitecturesCanCause": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	"understandingImpact.duringServerSideRenderingThe": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
	"understandingImpact.theTradeOffsOfDynamic": "The trade-offs of dynamic loading",
	"understandingImpact.splittingTranslationsIntoPerRoute": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
	"understandingImpact.waterfallRequests": "Waterfall requests:",
	"understandingImpact.flashOfUntranslatedContentFouc": "Flash of untranslated content (FOUC):",
	"understandingImpact.cacheInvalidation": "Cache invalidation:",
	"understandingImpact.whatThisBenchmarkMeasures": "What this benchmark measures",
	"understandingImpact.thisTestAppProvidesA": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
	"resultsTable.sampleResults": "Sample Results",
	"resultsTable.bundleSize": "Bundle Size",
	"resultsTable.lookupTime": "Lookup Time",
	"resultsTable.lazyLoading": "Lazy Loading"
};
export { e as default };
var e = "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.", t = { mockBanner: e };
export { t as default, e as mockBanner };
var e = "Apply Now", t = "Backend Engineer", n = "Build and maintain our benchmarking suite and core application infrastructure.", r = "Build and maintain the benchmark dashboard, comparison tools, and interactive visualizations.", i = "Community", a = "Create and maintain documentation, blog posts, and educational content about i18n performance best practices.", o = "Create comprehensive guides, API references, and tutorials for the community.", s = "Design and maintain the CI/CD pipeline that runs benchmarks automatically on every library update.", c = "Design and scale our data ingestion pipelines and statistical analysis engines.", l = "DevOps Engineer", u = "DevRel Engineer", d = "Documentation", f = "Engage with the i18n community, write blog posts, and speak at conferences.", p = "Engineering", m = "Ensure the accuracy and reliability of our benchmarks through rigorous testing.", h = "Frontend Developer", g = "Full-time", _ = "Lead benchmark design and implementation. Deep knowledge of V8 internals, browser performance APIs, and statistical analysis required.", v = "Open Positions", y = "Part-time", b = "QA Engineer", x = "Remote", S = "Senior Frontend Engineer", C = "Senior Performance Engineer", w = "San Francisco / Remote", T = "Technical Writer", E = {
	applyNow: e,
	backendEngineer: t,
	buildAndMaintainOur: n,
	buildAndMaintainThe: r,
	community: i,
	createAndMaintainDocumentation: a,
	createComprehensiveGuidesApi: o,
	designAndMaintainThe: s,
	designAndScaleOur: c,
	devOpsEngineer: l,
	devrelEngineer: u,
	documentation: d,
	engageWithTheI18n: f,
	engineering: p,
	ensureTheAccuracyAnd: m,
	frontendDeveloper: h,
	fullTime: g,
	leadBenchmarkDesignAnd: _,
	openPositions: v,
	partTime: y,
	qaEngineer: b,
	remote: x,
	seniorFrontendEngineer: S,
	seniorPerformanceEngineer: C,
	sfRemote: w,
	technicalWriter: T
};
export { e as applyNow, t as backendEngineer, n as buildAndMaintainOur, r as buildAndMaintainThe, i as community, a as createAndMaintainDocumentation, o as createComprehensiveGuidesApi, E as default, s as designAndMaintainThe, c as designAndScaleOur, l as devOpsEngineer, u as devrelEngineer, d as documentation, f as engageWithTheI18n, p as engineering, m as ensureTheAccuracyAnd, h as frontendDeveloper, g as fullTime, _ as leadBenchmarkDesignAnd, v as openPositions, y as partTime, b as qaEngineer, x as remote, S as seniorFrontendEngineer, C as seniorPerformanceEngineer, w as sfRemote, T as technicalWriter };
var e = "Arabic (ar)", t = "Chinese (Simplified, zh-CN)", n = "Dark Mode", r = "Default Language", i = "Email Notifications", a = "English (en)", o = "French (fr)", s = "German (de)", c = "Japanese (ja)", l = "Preferences", u = "Receive weekly benchmark reports", d = "Receive weekly benchmark reports", f = "Spanish (es)", p = "Toggle dark mode", m = "Toggle Notifications", h = "Use dark color scheme", g = {
	arabicAr: e,
	chineseSimplifiedZhCn: t,
	darkMode: n,
	defaultLanguage: r,
	emailNotifications: i,
	englishEn: a,
	frenchFr: o,
	germanDe: s,
	japaneseJa: c,
	preferences: l,
	receiveWeeklyBenchmark: u,
	receiveWeeklyBenchmarkReports: d,
	spanishEs: f,
	toggleDarkMode: p,
	toggleNotifications: m,
	useDarkColorScheme: h
};
export { e as arabicAr, t as chineseSimplifiedZhCn, n as darkMode, g as default, r as defaultLanguage, i as emailNotifications, a as englishEn, o as frenchFr, s as germanDe, c as japaneseJa, l as preferences, u as receiveWeeklyBenchmark, d as receiveWeeklyBenchmarkReports, f as spanishEs, p as toggleDarkMode, m as toggleNotifications, h as useDarkColorScheme };
var e = {
	"pricingTiers.starterTier": "Starter",
	"pricingTiers.starterPrice": "$0",
	"pricingTiers.forever": "forever",
	"pricingTiers.runsPerDay": "5 benchmark runs/day",
	"pricingTiers.libraries3": "3 libraries",
	"pricingTiers.communitySupport": "Community support",
	"pricingTiers.publicResults": "Public results",
	"pricingTiers.getStarted": "Get Started",
	"pricingTiers.proTier": "Pro",
	"pricingTiers.proPrice": "$29",
	"pricingTiers.perMonth": "/month",
	"pricingTiers.unlimitedRuns": "Unlimited runs",
	"pricingTiers.allLibraries": "All libraries",
	"pricingTiers.prioritySupport": "Priority support",
	"pricingTiers.privateResults": "Private results",
	"pricingTiers.ciIntegration": "CI integration",
	"pricingTiers.historicalData": "Historical data",
	"pricingTiers.enterpriseTier": "Enterprise",
	"pricingTiers.custom": "Custom",
	"pricingTiers.everythingInPro": "Everything in Pro",
	"pricingTiers.onPremiseOption": "On-premise option",
	"pricingTiers.ssoSaml": "SSO & SAML",
	"pricingTiers.dedicatedAccountManager": "Dedicated account manager",
	"pricingTiers.customSLAs": "Custom SLAs",
	"pricingTiers.auditLogs": "Audit logs",
	"pricingTiers.trainingSessions": "Training sessions",
	"pricingTiers.contactSales": "Contact Sales",
	"pricingHeader.pricing": "Pricing",
	"pricingHeader.transparentPricingForEvery": "Transparent pricing for every stage of your i18n journey."
};
export { e as default };
var e = "Pricing", t = "Transparent pricing for every stage of your i18n journey.", n = {
	pricing: e,
	transparentPricingForEvery: t
};
export { n as default, e as pricing, t as transparentPricingForEvery };
var e = "Free Tier", t = "Free", n = "Public benchmark dashboard", r = "Basic library comparisons", i = "Community forum access", a = "Monthly result digest", o = "Get Started", s = "Pro Tier", c = "/month", l = "All Free features", u = "Custom benchmark configurations", d = "Private results dashboard", f = "API access (1,000 requests/day)", p = "Slack integration", m = "Subscribe to Pro", h = "Enterprise Tier", g = "Custom", _ = "All Pro features", v = "Dedicated benchmark infrastructure", y = "Custom library integrations", b = "SLA guarantees", x = "Priority support", S = "Contact Sales", C = {
	freeTier: e,
	free: t,
	publicBenchmarkDashboard: n,
	basicLibraryComparisons: r,
	communityForumAccess: i,
	monthlyResultDigest: a,
	getStarted: o,
	proTier: s,
	perMonth: c,
	allFreeFeatures: l,
	customBenchmarkConfigurations: u,
	privateResultsDashboard: d,
	apiAccess1000Requests: f,
	slackIntegration: p,
	subscribeToPro: m,
	enterpriseTier: h,
	custom: g,
	allProFeatures: _,
	dedicatedBenchmarkInfrastructure: v,
	customLibraryIntegrations: y,
	slaGuarantees: b,
	prioritySupport: x,
	contactSales: S
};
export { l as allFreeFeatures, _ as allProFeatures, f as apiAccess1000Requests, r as basicLibraryComparisons, i as communityForumAccess, S as contactSales, g as custom, u as customBenchmarkConfigurations, y as customLibraryIntegrations, v as dedicatedBenchmarkInfrastructure, C as default, h as enterpriseTier, t as free, e as freeTier, o as getStarted, a as monthlyResultDigest, c as perMonth, x as prioritySupport, d as privateResultsDashboard, s as proTier, n as publicBenchmarkDashboard, b as slaGuarantees, p as slackIntegration, m as subscribeToPro };
var e = {
	"productsHeader.products": "Products",
	"productsHeader.toolsAndServicesTo": "Tools and services to help you optimize your internationalization strategy.",
	"productsGrid.benchmarkDashboard": "Benchmark Dashboard",
	"productsGrid.interactiveChartsAndTables": "Interactive charts and tables comparing i18n libraries across bundle size, render time, and hydration cost.",
	"productsGrid.bundleAnalyzer": "Bundle Analyzer",
	"productsGrid.uploadYourBuildOutput": "Upload your build output and get a detailed breakdown of how much of your bundle is i18n overhead.",
	"productsGrid.migrationAssistant": "Migration Assistant",
	"productsGrid.automatedCodemodsAndGuides": "Automated codemods and guides for migrating between i18n libraries with minimal disruption.",
	"productsGrid.performanceMonitor": "Performance Monitor",
	"productsGrid.continuousPerformanceTrackingFor": "Continuous performance tracking for your i18n implementation. Get alerts when translation loading degrades.",
	"productsGrid.learnMore": "Learn More"
};
export { e as default };
var e = "Benchmark Dashboard", t = "Interactive charts and tables comparing i18n libraries across bundle size, render time, and hydration cost.", n = "Bundle Analyzer", r = "Upload your build output and get a detailed breakdown of how much of your bundle is i18n overhead.", i = "Migration Assistant", a = "Automated codemods and guides for migrating between i18n libraries with minimal disruption.", o = "Performance Monitor", s = "Continuous performance tracking for your i18n implementation. Get alerts when translation loading degrades.", c = "Learn More", l = {
	benchmarkDashboard: e,
	interactiveChartsAndTables: t,
	bundleAnalyzer: n,
	uploadYourBuildOutput: r,
	migrationAssistant: i,
	automatedCodemodsAndGuides: a,
	performanceMonitor: o,
	continuousPerformanceTrackingFor: s,
	learnMore: c
};
export { a as automatedCodemodsAndGuides, e as benchmarkDashboard, n as bundleAnalyzer, s as continuousPerformanceTrackingFor, l as default, t as interactiveChartsAndTables, c as learnMore, i as migrationAssistant, o as performanceMonitor, r as uploadYourBuildOutput };
var e = "Products", t = "Tools and services to help you optimize your internationalization strategy.", n = {
	products: e,
	toolsAndServicesTo: t
};
export { n as default, e as products, t as toolsAndServicesTo };
var e = "Profile", t = "Display Name", n = "Email", r = {
	profile: e,
	displayName: t,
	email: n
};
export { r as default, t as displayName, n as email, e as profile };
var e = "Bundle Size", t = "Lazy Loading", n = "Library", r = "Lookup Time", i = "Sample Results", a = {
	bundleSize: e,
	lazyLoading: t,
	library: n,
	lookupTime: r,
	sampleResults: i
};
export { e as bundleSize, a as default, t as lazyLoading, n as library, r as lookupTime, i as sampleResults };
var e = "Oops! Page not found.", t = "Return to Home", n = {
	oopsPageNotFound: e,
	returnToHome: t,
	"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:",
	"route.oopsPageNotFound": "Oops! Page not found",
	"route.returnToHome": "Return to Home"
};
export { n as default, e as oopsPageNotFound, t as returnToHome };
var e = {
	"settingsHeader.settings": "Settings",
	"settingsHeader.manageYourAccountPreferences": "Manage your account preferences and configuration.",
	"profileSection.profile": "Profile",
	"profileSection.displayName": "Display Name",
	"profileSection.email": "Email",
	"preferencesSection.preferences": "Preferences",
	"preferencesSection.emailNotifications": "Email Notifications",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Receive weekly benchmark reports",
	"preferencesSection.darkMode": "Dark Mode",
	"preferencesSection.useDarkColorScheme": "Use dark color scheme",
	"preferencesSection.defaultLanguage": "Default Language",
	"apiAccessSection.apiAccess": "API Access",
	"apiAccessSection.apiKey": "API Key",
	"apiAccessSection.useThisKeyTo": "Use this key to access the benchmarking API programmatically.",
	"apiAccessSection.copy": "Copy",
	"settingsFooter.cancel": "Cancel",
	"settingsFooter.saveChanges": "Save Changes"
};
export { e as default };
var e = "Cancel", t = "Save Changes", n = {
	cancel: e,
	saveChanges: t
};
export { e as cancel, n as default, t as saveChanges };
var e = "Manage your account settings and preferences.", t = "Manage your account preferences and configuration.", n = "Settings", r = {
	manageYourAccount: e,
	manageYourAccountPreferences: t,
	settings: n
};
export { r as default, e as manageYourAccount, t as manageYourAccountPreferences, n as settings };
var e = {
	"teamHeader.ourTeam": "Our Team",
	"teamHeader.meetThePeopleBehindI18n": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.",
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "Founder & Lead Engineer",
	"teamGrid.formerGoogleEngineerWith10": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "Performance Engineer",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "Developer Advocate",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "Full-Stack Developer",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "Data Analyst",
	"teamGrid.ensuresStatisticalRigorInAll": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "Community Manager",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Manages community contributions, partnerships, and events. Background in open source governance."
};
export { e as default };
var e = "Aisha Patel", t = "Community Manager", n = "Data Analyst", r = "Developer Advocate", i = "Elena Kowalski", a = "Ensures statistical rigor in our data collection and analysis.", o = "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.", s = "Former Google engineer with a passion for web performance and open source.", c = "Former Google engineer with 10 years of experience building internationalization systems at scale.", l = "Founder & Lead Engineer", u = "Full-Stack Developer", d = "Maintains the benchmarking infrastructure and CI/CD pipelines.", f = "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.", p = "Manages community contributions and open source outreach.", m = "Manages community contributions, partnerships, and events. Background in open source governance.", h = "Marcus Weber", g = "Passionate about developer experience and building intuitive APIs.", _ = "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.", v = "Performance Engineer", y = "Sarah Chen", b = "Specializes in JavaScript performance optimization and React internals.", x = "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.", S = "Tomás Rodríguez", C = "Yuki Tanaka", w = {
	aishaPatel: e,
	communityManager: t,
	dataAnalyst: n,
	developerAdvocate: r,
	elenaKowalski: i,
	ensuresStatisticalRigorIn: a,
	ensuresStatisticalRigorInAll: o,
	formerGoogleEngineerWith: s,
	formerGoogleEngineerWith10: c,
	founderLeadEngineer: l,
	fullStackDeveloper: u,
	maintainsTheBenchmarkingInfrastructure: d,
	maintainsTheBenchmarkingInfrastructureAnd: f,
	managesCommunityContributions: p,
	managesCommunityContributionsPartnershipsAnd: m,
	marcusWeber: h,
	passionateAboutDeveloperExperience: g,
	passionateAboutDeveloperExperienceAnd: _,
	performanceEngineer: v,
	sarahChen: y,
	specializesInJavascriptPerformance: b,
	specializesInJavascriptPerformanceOptimization: x,
	tomasRodriguez: S,
	yukiTanaka: C
};
export { e as aishaPatel, t as communityManager, n as dataAnalyst, w as default, r as developerAdvocate, i as elenaKowalski, a as ensuresStatisticalRigorIn, o as ensuresStatisticalRigorInAll, s as formerGoogleEngineerWith, c as formerGoogleEngineerWith10, l as founderLeadEngineer, u as fullStackDeveloper, d as maintainsTheBenchmarkingInfrastructure, f as maintainsTheBenchmarkingInfrastructureAnd, p as managesCommunityContributions, m as managesCommunityContributionsPartnershipsAnd, h as marcusWeber, g as passionateAboutDeveloperExperience, _ as passionateAboutDeveloperExperienceAnd, v as performanceEngineer, y as sarahChen, b as specializesInJavascriptPerformance, x as specializesInJavascriptPerformanceOptimization, S as tomasRodriguez, C as yukiTanaka };
var e = "Our Team", t = "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.", n = {
	ourTeam: e,
	meetThePeopleBehindI18n: t
};
export { n as default, t as meetThePeopleBehindI18n, e as ourTeam };
var e = "Theme mode: auto (system). Click to switch to light mode.", t = "Theme mode: light. Click to switch to dark mode.", n = "Theme mode: dark. Click to switch to auto (system) mode.", r = "Theme: Auto", i = "Theme: Dark", a = "Theme: Light", o = {
	themeModeAutoSystemClick: e,
	themeModeLightClick: t,
	themeModeDarkClick: n,
	themeAuto: r,
	themeDark: i,
	themeLight: a
};
export { o as default, r as themeAuto, i as themeDark, a as themeLight, e as themeModeAutoSystemClick, n as themeModeDarkClick, t as themeModeLightClick };
var e = "Cache invalidation:", t = "Context-based architectures can cause the entire app to re-render when the language changes. For large apps with thousands of components, this can lead to noticeable lag during locale switches.", n = "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.", r = "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.", i = "Flash of Untranslated Content (FOUC)", a = "Flash of untranslated content (FOUC):", o = "Many i18n libraries store translations in large JSON files that are loaded upfront. This can significantly increase the \"Time to Interactive\" as the browser must download and parse these files before the app can be used.", s = "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:", c = "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:", l = "The app must first load the core library (e.g., i18next) which adds to the initial bundle size. Even \"lightweight\" libraries can add 10-20KB of minified JS.", u = "The JSON must be parsed on every page load — blocking the main thread.", d = "The trade-offs of dynamic loading", f = "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.", p = "Understanding the Impact", m = "Updating translations often requires a full rebuild or clearing the CDN cache, which can delay the roll-out of critical copy changes.", h = "Users may briefly see translation keys or English text while the library and translation files are being loaded.", g = "Waterfall requests:", _ = "What this benchmark measures", v = "Why a single large JSON can hurt performance", y = {
	cacheInvalidation: e,
	contextBasedArchitecturesCan: t,
	contextBasedArchitecturesCanCause: n,
	duringServerSideRenderingThe: r,
	flashOfUntranslatedContent: i,
	flashOfUntranslatedContentFouc: a,
	manyI18nLibrariesStore: o,
	manyI18nLibrariesStoreTranslations: s,
	splittingTranslationsIntoPerRoute: c,
	theAppMustFirstLoad: l,
	theJsonMustBeParsed: u,
	theTradeOffsOfDynamic: d,
	thisTestAppProvidesA: f,
	understandingTheImpact: p,
	updatingTranslationsRequiresCache: m,
	usersMayBrieflySeeTranslation: h,
	waterfallRequests: g,
	whatThisBenchmarkMeasures: _,
	whyASingleLargeJson: v
};
export { e as cacheInvalidation, t as contextBasedArchitecturesCan, n as contextBasedArchitecturesCanCause, y as default, r as duringServerSideRenderingThe, i as flashOfUntranslatedContent, a as flashOfUntranslatedContentFouc, o as manyI18nLibrariesStore, s as manyI18nLibrariesStoreTranslations, c as splittingTranslationsIntoPerRoute, l as theAppMustFirstLoad, u as theJsonMustBeParsed, d as theTradeOffsOfDynamic, f as thisTestAppProvidesA, p as understandingTheImpact, m as updatingTranslationsRequiresCache, h as usersMayBrieflySeeTranslation, g as waterfallRequests, _ as whatThisBenchmarkMeasures, v as whyASingleLargeJson };
var e = "Bundle size impact", t = "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.", n = "During SSR, translation data is serialized into the HTML. We measure the size of this payload and its effect on Time to Interactive (TTI).", r = "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.", i = "How fast the app can switch from one language to another. We measure the re-render time and any network delays for lazy-loaded locales.", a = "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.", o = "How much extra time the library adds to the initial page load. This includes script execution and the time to fetch/parse translation data.", s = "Hydration cost", c = "Lazy loading effectiveness", l = "Locale switch speed", u = "Rendering overhead", d = "The additional Javascript bytes that the library adds to your production build. We measure both the library itself and its mandatory dependencies.", f = "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.", p = "What We Measure", m = "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).", h = {
	bundleSizeImpact: e,
	duringSsrTranslationDataIs: t,
	duringSsrTranslationDataIsSerialized: n,
	howFastTheAppCan: r,
	howFastTheAppCanSwitchFromOne: i,
	howMuchExtraTimeThe: a,
	howMuchExtraTimeTheLibraryAdds: o,
	hydrationCost: s,
	lazyLoadingEffectiveness: c,
	localeSwitchSpeed: l,
	renderingOverhead: u,
	theAdditionalJavascriptBytes: d,
	theAdditionalJavascriptBytesSent: f,
	whatWeMeasure: p,
	whetherSplittingTranslationsByRoute: m
};
export { e as bundleSizeImpact, h as default, t as duringSsrTranslationDataIs, n as duringSsrTranslationDataIsSerialized, r as howFastTheAppCan, i as howFastTheAppCanSwitchFromOne, a as howMuchExtraTimeThe, o as howMuchExtraTimeTheLibraryAdds, s as hydrationCost, c as lazyLoadingEffectiveness, l as localeSwitchSpeed, u as renderingOverhead, d as theAdditionalJavascriptBytes, f as theAdditionalJavascriptBytesSent, p as whatWeMeasure, m as whetherSplittingTranslationsByRoute };
var e = "Why These Metrics Matter", t = "Bundle Size", n = "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.", r = "Rendering & Hydration", i = "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).", a = "Dynamic Loading", o = "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.", s = {
	whyTheseMetricsMatter: e,
	bundleSize: t,
	theBundleIsTheData: n,
	renderingHydration: r,
	connectingALargeJson: i,
	dynamicLoading: a,
	loadingAllTranslationsUpfront: o
};
export { t as bundleSize, i as connectingALargeJson, s as default, a as dynamicLoading, o as loadingAllTranslationsUpfront, r as renderingHydration, n as theBundleIsTheData, e as whyTheseMetricsMatter };
