var about_default = {
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
export { about_default as default };
var allBenchmarksRunOn = "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.";
var applicationDesign = "Application Design";
var choosingAnI18nLibrary = "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.";
var eachI18nLibraryIsIntegrated = "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment.";
var fairComparison = "Fair Comparison";
var measurementMethodology = "Measurement Methodology";
var methodology = "Methodology";
var testEnvironment = "Test Environment";
var theBenchmarkAppHas10 = "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.";
var theSame10PageApp = "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.";
var weUseBrowserNativeApis = "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.";
var whyThisExists = "Why This Exists";
var aboutGrid_default = {
	allBenchmarksRunOn,
	applicationDesign,
	choosingAnI18nLibrary,
	eachI18nLibraryIsIntegrated,
	fairComparison,
	measurementMethodology,
	methodology,
	testEnvironment,
	theBenchmarkAppHas10,
	theSame10PageApp,
	weUseBrowserNativeApis,
	whyThisExists
};
export { allBenchmarksRunOn, applicationDesign, choosingAnI18nLibrary, aboutGrid_default as default, eachI18nLibraryIsIntegrated, fairComparison, measurementMethodology, methodology, testEnvironment, theBenchmarkAppHas10, theSame10PageApp, weUseBrowserNativeApis, whyThisExists };
var aboutThisBenchmark = "About This Benchmark";
var methodology = "Methodology";
var thisIsAnOpenSource = "This is an open-source test application for measuring the real-world impact of internationalization libraries.";
var weDesignedThisBenchmarkTo = "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach.";
var aboutHeader_default = {
	aboutThisBenchmark,
	methodology,
	thisIsAnOpenSource,
	weDesignedThisBenchmarkTo
};
export { aboutThisBenchmark, aboutHeader_default as default, methodology, thisIsAnOpenSource, weDesignedThisBenchmarkTo };
var apiAccess = "API Access";
var apiKey = "API Key";
var useThisKeyTo = "Use this key to access the benchmarking API programmatically.";
var copy = "Copy";
var apiAccessSection_default = {
	apiAccess,
	apiKey,
	useThisKeyTo,
	copy
};
export { apiAccess, apiKey, copy, apiAccessSection_default as default, useThisKeyTo };
var blog_default = {
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
export { blog_default as default };
var blog = "Blog";
var insightsDeepDivesAnd = "Insights, deep dives, and updates from the i18n benchmarking community.";
var insightsTutorialsAndAnalysis = "Insights, Tutorials, and Analysis";
var blogHeader_default = {
	blog,
	insightsDeepDivesAnd,
	insightsTutorialsAndAnalysis
};
export { blog, blogHeader_default as default, insightsDeepDivesAnd, insightsTutorialsAndAnalysis };
var aStepByStepGuide = "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.";
var aStepByStepGuideOnMigrating = "A step-by-step guide on migrating from legacy i18n solutions to modern, high-performance libraries.";
var aTransparentLookAtOur = "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.";
var aTransparentLookAtOurBenchmarking = "A transparent look at our benchmarking process, from hardware specs to measurement techniques.";
var anOverviewOfTheCurrent = "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.";
var anOverviewOfTheCurrentI18n = "An overview of the current i18n landscape and how different libraries stack up in 2026.";
var analysis = "Analysis";
var benchmark = "Benchmark";
var benchmarkMethodologyHowWe = "Benchmark Methodology: How We Test";
var benchmarkMethodologyHowWeTest = "Benchmark Methodology: How We Test";
var comparingI18nLibrariesIn = "Comparing i18n Libraries in 2026: A Deep Dive";
var february12026 = "February 1, 2026";
var february152026 = "February 15, 2026";
var february282026 = "February 28, 2026";
var howToReduceYourI18n = "How to Reduce Your i18n Bundle by 60%";
var i18nBenchmark2026Results = "i18n Benchmark 2026 Results";
var january202026 = "January 20, 2026";
var march152026 = "March 15, 2026";
var march82026 = "March 8, 2026";
var meta = "Meta";
var migratingFromReactI18nextTo = "Migrating from react-i18next to Lingui";
var practicalStrategiesForOptimizingTranslation = "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.";
var reactServerComponentsIntroduceNew = "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.";
var readMore = "Read More →";
var serverComponentsAndI18nWhat = "Server Components and i18n: What Changes?";
var theStateOfInternationalizationIn = "The State of Internationalization in 2026";
var tutorial = "Tutorial";
var weTested12DifferentInternationalization = "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts.";
var blogList_default = {
	aStepByStepGuide,
	aStepByStepGuideOnMigrating,
	aTransparentLookAtOur,
	aTransparentLookAtOurBenchmarking,
	anOverviewOfTheCurrent,
	anOverviewOfTheCurrentI18n,
	analysis,
	benchmark,
	benchmarkMethodologyHowWe,
	benchmarkMethodologyHowWeTest,
	comparingI18nLibrariesIn,
	february12026,
	february152026,
	february282026,
	howToReduceYourI18n,
	i18nBenchmark2026Results,
	january202026,
	march152026,
	march82026,
	meta,
	migratingFromReactI18nextTo,
	practicalStrategiesForOptimizingTranslation,
	reactServerComponentsIntroduceNew,
	readMore,
	serverComponentsAndI18nWhat,
	theStateOfInternationalizationIn,
	tutorial,
	weTested12DifferentInternationalization
};
export { aStepByStepGuide, aStepByStepGuideOnMigrating, aTransparentLookAtOur, aTransparentLookAtOurBenchmarking, anOverviewOfTheCurrent, anOverviewOfTheCurrentI18n, analysis, benchmark, benchmarkMethodologyHowWe, benchmarkMethodologyHowWeTest, comparingI18nLibrariesIn, blogList_default as default, february12026, february152026, february282026, howToReduceYourI18n, i18nBenchmark2026Results, january202026, march152026, march82026, meta, migratingFromReactI18nextTo, practicalStrategiesForOptimizingTranslation, reactServerComponentsIntroduceNew, readMore, serverComponentsAndI18nWhat, theStateOfInternationalizationIn, tutorial, weTested12DifferentInternationalization };
var careers_default = {
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
export { careers_default as default };
var allOurWorkIs = "All our work is open source. Build your public portfolio while making an impact.";
var competitivePay = "Competitive pay";
var impactful = "Impactful";
var openSource = "Open Source";
var openSourceTime = "Open source time";
var percentTimeForOss = "20% time for OSS contributions";
var remoteFirst = "Remote-First";
var topOfMarketCompensation = "Top-of-market compensation";
var whyJoinUs = "Why Join Us?";
var workFromAnywhere = "Work from anywhere in the world";
var workFromAnywhereFully = "Work from anywhere. Fully distributed team across 6 time zones.";
var yourWorkDirectlyHelps = "Your work directly helps developers build better, faster internationalized applications.";
var careersBenefits_default = {
	allOurWorkIs,
	competitivePay,
	impactful,
	openSource,
	openSourceTime,
	percentTimeForOss,
	remoteFirst,
	topOfMarketCompensation,
	whyJoinUs,
	workFromAnywhere,
	workFromAnywhereFully,
	yourWorkDirectlyHelps
};
export { allOurWorkIs, competitivePay, careersBenefits_default as default, impactful, openSource, openSourceTime, percentTimeForOss, remoteFirst, topOfMarketCompensation, whyJoinUs, workFromAnywhere, workFromAnywhereFully, yourWorkDirectlyHelps };
var careers = "Careers";
var joinOurMission = "Join our mission to make internationalization fast, easy, and performant for everyone.";
var joinOurMissionToMake = "Join our mission to make the web faster and more accessible for everyone, everywhere.";
var careersHeader_default = {
	careers,
	joinOurMission,
	joinOurMissionToMake
};
export { careers, careersHeader_default as default, joinOurMission, joinOurMissionToMake };
var cancel = "Cancel";
var copy = "Copy";
var mockBanner = "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.";
var readMore = "Read More";
var saveChanges = "Save Changes";
var common_default = {
	cancel,
	copy,
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
	mockBanner,
	readMore,
	saveChanges,
	"themeToggle.themeAuto": "Theme: Auto",
	"themeToggle.themeDark": "Theme: Dark",
	"themeToggle.themeLight": "Theme: Light",
	"themeToggle.themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
	"themeToggle.themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
	"themeToggle.themeModeLightClick": "Theme mode: light. Click to switch to dark mode."
};
export { cancel, copy, common_default as default, mockBanner, readMore, saveChanges };
var contact_default = {
	"contactHeader.contactUs": "Contact Us",
	"contactHeader.haveQuestionsOrWantTo": "Have questions or want to contribute? We'd love to hear from you.",
	"contactForm.name": "Name",
	"contactForm.email": "Email",
	"contactForm.subject": "Subject",
	"contactForm.message": "Message",
	"contactForm.sendMessage": "Send Message",
	"contactForm.wellGetBackTo": "We'll get back to you within 48 hours."
};
export { contact_default as default };
var bugReport = "Bug Report";
var contribution = "Contribution";
var email = "Email";
var emailPlaceholder = "you@example.com";
var message = "Message";
var messagePlaceholder = "Your message...";
var methodologyQuestion = "Methodology Question";
var name = "Name";
var newBenchmarkIdea = "New Benchmark Idea";
var other = "Other";
var sendMessage = "Send Message";
var subject = "Subject";
var topic = "Topic";
var wellGetBackTo = "We'll get back to you within 48 hours.";
var yourName = "Your name";
var contactForm_default = {
	bugReport,
	contribution,
	email,
	emailPlaceholder,
	message,
	messagePlaceholder,
	methodologyQuestion,
	name,
	newBenchmarkIdea,
	other,
	sendMessage,
	subject,
	topic,
	wellGetBackTo,
	yourName
};
export { bugReport, contribution, contactForm_default as default, email, emailPlaceholder, message, messagePlaceholder, methodologyQuestion, name, newBenchmarkIdea, other, sendMessage, subject, topic, wellGetBackTo, yourName };
var contactUs = "Contact Us";
var getInTouch = "Get in Touch";
var haveIdeasFoundABug = "Have ideas? Found a bug? We'd love to hear from you.";
var haveQuestionsOrWantTo = "Have questions or want to contribute? We'd love to hear from you.";
var contactHeader_default = {
	contactUs,
	getInTouch,
	haveIdeasFoundABug,
	haveQuestionsOrWantTo
};
export { contactUs, contactHeader_default as default, getInTouch, haveIdeasFoundABug, haveQuestionsOrWantTo };
var faq_default = {
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
export { faq_default as default };
var everythingYouNeedToKnow = "Everything you need to know about i18n Benchmark.";
var frequentlyAskedQuestions = "Frequently Asked Questions";
var faqHeader_default = {
	everythingYouNeedToKnow,
	frequentlyAskedQuestions
};
export { faqHeader_default as default, everythingYouNeedToKnow, frequentlyAskedQuestions };
var absolutelyWeWelcomeCommunity = "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.";
var allBenchmarksAreRun = "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.";
var areTheResultsStatistically = "Are the results statistically significant?";
var benchmarksRunAutomaticallyVia = "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.";
var canIContributeA = "Can I contribute a new library integration?";
var canISubmitMyOwnBenchmarks = "Can I submit my own benchmarks?";
var doYouOfferConsultingServices = "Do you offer consulting services?";
var howAreBenchmarksConducted = "How are benchmarks conducted?";
var howAreTheBenchmarks = "How are the benchmarks run?";
var howCanIContribute = "How can I contribute?";
var howOftenAreBenchmarksUpdated = "How often are benchmarks updated?";
var howOftenAreResults = "How often are results updated?";
var i18nBenchmarkIsAnOpenSource = "i18n Benchmark is an open-source project dedicated to measuring the real-world performance impact of internationalization libraries.";
var isTheDataReliable = "Is the data reliable?";
var thereAreManyWaysToContribute = "There are many ways to contribute, from submitting new benchmarks to improving our methodology documentation.";
var weCurrentlyBenchmarkReactI18next = "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.";
var weFollowRigorousStatisticalMethodologyIncluding = "We follow rigorous statistical methodology, including outlier detection and multiple test runs to ensure accuracy.";
var weReRunAllBenchmarksWeekly = "We re-run all benchmarks weekly against the latest versions of each library.";
var weRunStandardizedTestsInIsolated = "We run standardized tests in isolated environments, measuring bundle size, render time, and memory usage across dozens of libraries.";
var weSupportReactI18nextReactIntl = "We support react-i18next, react-intl, Lingui, Tolgee, and several other popular React i18n solutions.";
var whatIsI18nBenchmark = "What is i18n Benchmark?";
var whatLibrariesAreCurrently = "What libraries are currently tested?";
var whichLibrariesAreCurrentlySupported = "Which libraries are currently supported?";
var yesCommunityBenchmarkSubmissionsAre = "Yes! Community benchmark submissions are encouraged and reviewed by our core team.";
var yesOurEnterprisePlanIncludesConsulting = "Yes, our Enterprise plan includes consulting services for optimizing your app's i18n performance.";
var yesWeUseThe = "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes.";
var faqList_default = {
	absolutelyWeWelcomeCommunity,
	allBenchmarksAreRun,
	areTheResultsStatistically,
	benchmarksRunAutomaticallyVia,
	canIContributeA,
	canISubmitMyOwnBenchmarks,
	doYouOfferConsultingServices,
	howAreBenchmarksConducted,
	howAreTheBenchmarks,
	howCanIContribute,
	howOftenAreBenchmarksUpdated,
	howOftenAreResults,
	i18nBenchmarkIsAnOpenSource,
	isTheDataReliable,
	thereAreManyWaysToContribute,
	weCurrentlyBenchmarkReactI18next,
	weFollowRigorousStatisticalMethodologyIncluding,
	weReRunAllBenchmarksWeekly,
	weRunStandardizedTestsInIsolated,
	weSupportReactI18nextReactIntl,
	whatIsI18nBenchmark,
	whatLibrariesAreCurrently,
	whichLibrariesAreCurrentlySupported,
	yesCommunityBenchmarkSubmissionsAre,
	yesOurEnterprisePlanIncludesConsulting,
	yesWeUseThe
};
export { absolutelyWeWelcomeCommunity, allBenchmarksAreRun, areTheResultsStatistically, benchmarksRunAutomaticallyVia, canIContributeA, canISubmitMyOwnBenchmarks, faqList_default as default, doYouOfferConsultingServices, howAreBenchmarksConducted, howAreTheBenchmarks, howCanIContribute, howOftenAreBenchmarksUpdated, howOftenAreResults, i18nBenchmarkIsAnOpenSource, isTheDataReliable, thereAreManyWaysToContribute, weCurrentlyBenchmarkReactI18next, weFollowRigorousStatisticalMethodologyIncluding, weReRunAllBenchmarksWeekly, weRunStandardizedTestsInIsolated, weSupportReactI18nextReactIntl, whatIsI18nBenchmark, whatLibrariesAreCurrently, whichLibrariesAreCurrentlySupported, yesCommunityBenchmarkSubmissionsAre, yesOurEnterprisePlanIncludesConsulting, yesWeUseThe };
var resources = "Resources";
var contact = "Contact";
var github = "GitHub";
var methodology = "Methodology";
var contributing = "Contributing";
var builtWith = "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.";
var anOpenSourceTestApplication = "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.";
var footer_default = {
	resources,
	contact,
	github,
	methodology,
	contributing,
	builtWith,
	anOpenSourceTestApplication
};
export { anOpenSourceTestApplication, builtWith, contact, contributing, footer_default as default, github, methodology, resources };
var home = "Home";
var methodology = "Methodology";
var mockPages = "Mock Pages";
var products = "Products";
var pricing = "Pricing";
var team = "Team";
var blog = "Blog";
var careers = "Careers";
var faq = "FAQ";
var contact = "Contact";
var settings = "Settings";
var goToGithub = "Go to GitHub";
var header_default = {
	home,
	methodology,
	mockPages,
	products,
	pricing,
	team,
	blog,
	careers,
	faq: "FAQ",
	contact,
	settings,
	goToGithub
};
export { blog, careers, contact, header_default as default, faq, goToGithub, home, methodology, mockPages, pricing, products, settings, team };
var aTestApplicationDesignedTo = "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.";
var viewResults = "View Results";
var hero_default = {
	aTestApplicationDesignedTo,
	viewResults
};
export { aTestApplicationDesignedTo, hero_default as default, viewResults };
var home_default = {
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
export { home_default as default };
var mockBanner = "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.";
var mockBanner_default = { mockBanner };
export { mockBanner_default as default, mockBanner };
var applyNow = "Apply Now";
var backendEngineer = "Backend Engineer";
var buildAndMaintainOur = "Build and maintain our benchmarking suite and core application infrastructure.";
var buildAndMaintainThe = "Build and maintain the benchmark dashboard, comparison tools, and interactive visualizations.";
var community = "Community";
var createAndMaintainDocumentation = "Create and maintain documentation, blog posts, and educational content about i18n performance best practices.";
var createComprehensiveGuidesApi = "Create comprehensive guides, API references, and tutorials for the community.";
var designAndMaintainThe = "Design and maintain the CI/CD pipeline that runs benchmarks automatically on every library update.";
var designAndScaleOur = "Design and scale our data ingestion pipelines and statistical analysis engines.";
var devOpsEngineer = "DevOps Engineer";
var devrelEngineer = "DevRel Engineer";
var documentation = "Documentation";
var engageWithTheI18n = "Engage with the i18n community, write blog posts, and speak at conferences.";
var engineering = "Engineering";
var ensureTheAccuracyAnd = "Ensure the accuracy and reliability of our benchmarks through rigorous testing.";
var frontendDeveloper = "Frontend Developer";
var fullTime = "Full-time";
var leadBenchmarkDesignAnd = "Lead benchmark design and implementation. Deep knowledge of V8 internals, browser performance APIs, and statistical analysis required.";
var openPositions = "Open Positions";
var partTime = "Part-time";
var qaEngineer = "QA Engineer";
var remote = "Remote";
var seniorFrontendEngineer = "Senior Frontend Engineer";
var seniorPerformanceEngineer = "Senior Performance Engineer";
var sfRemote = "San Francisco / Remote";
var technicalWriter = "Technical Writer";
var openPositions_default = {
	applyNow,
	backendEngineer,
	buildAndMaintainOur,
	buildAndMaintainThe,
	community,
	createAndMaintainDocumentation,
	createComprehensiveGuidesApi,
	designAndMaintainThe,
	designAndScaleOur,
	devOpsEngineer,
	devrelEngineer,
	documentation,
	engageWithTheI18n,
	engineering,
	ensureTheAccuracyAnd,
	frontendDeveloper,
	fullTime,
	leadBenchmarkDesignAnd,
	openPositions,
	partTime,
	qaEngineer,
	remote,
	seniorFrontendEngineer,
	seniorPerformanceEngineer,
	sfRemote,
	technicalWriter
};
export { applyNow, backendEngineer, buildAndMaintainOur, buildAndMaintainThe, community, createAndMaintainDocumentation, createComprehensiveGuidesApi, openPositions_default as default, designAndMaintainThe, designAndScaleOur, devOpsEngineer, devrelEngineer, documentation, engageWithTheI18n, engineering, ensureTheAccuracyAnd, frontendDeveloper, fullTime, leadBenchmarkDesignAnd, openPositions, partTime, qaEngineer, remote, seniorFrontendEngineer, seniorPerformanceEngineer, sfRemote, technicalWriter };
var arabicAr = "Arabic (ar)";
var chineseSimplifiedZhCn = "Chinese (Simplified, zh-CN)";
var darkMode = "Dark Mode";
var defaultLanguage = "Default Language";
var emailNotifications = "Email Notifications";
var englishEn = "English (en)";
var frenchFr = "French (fr)";
var germanDe = "German (de)";
var japaneseJa = "Japanese (ja)";
var preferences = "Preferences";
var receiveWeeklyBenchmark = "Receive weekly benchmark reports";
var receiveWeeklyBenchmarkReports = "Receive weekly benchmark reports";
var spanishEs = "Spanish (es)";
var toggleDarkMode = "Toggle dark mode";
var toggleNotifications = "Toggle Notifications";
var useDarkColorScheme = "Use dark color scheme";
var preferencesSection_default = {
	arabicAr,
	chineseSimplifiedZhCn,
	darkMode,
	defaultLanguage,
	emailNotifications,
	englishEn,
	frenchFr,
	germanDe,
	japaneseJa,
	preferences,
	receiveWeeklyBenchmark,
	receiveWeeklyBenchmarkReports,
	spanishEs,
	toggleDarkMode,
	toggleNotifications,
	useDarkColorScheme
};
export { arabicAr, chineseSimplifiedZhCn, darkMode, preferencesSection_default as default, defaultLanguage, emailNotifications, englishEn, frenchFr, germanDe, japaneseJa, preferences, receiveWeeklyBenchmark, receiveWeeklyBenchmarkReports, spanishEs, toggleDarkMode, toggleNotifications, useDarkColorScheme };
var pricing_default = {
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
export { pricing_default as default };
var pricing = "Pricing";
var transparentPricingForEvery = "Transparent pricing for every stage of your i18n journey.";
var pricingHeader_default = {
	pricing,
	transparentPricingForEvery
};
export { pricingHeader_default as default, pricing, transparentPricingForEvery };
var freeTier = "Free Tier";
var free = "Free";
var publicBenchmarkDashboard = "Public benchmark dashboard";
var basicLibraryComparisons = "Basic library comparisons";
var communityForumAccess = "Community forum access";
var monthlyResultDigest = "Monthly result digest";
var getStarted = "Get Started";
var proTier = "Pro Tier";
var perMonth = "/month";
var allFreeFeatures = "All Free features";
var customBenchmarkConfigurations = "Custom benchmark configurations";
var privateResultsDashboard = "Private results dashboard";
var apiAccess1000Requests = "API access (1,000 requests/day)";
var slackIntegration = "Slack integration";
var subscribeToPro = "Subscribe to Pro";
var enterpriseTier = "Enterprise Tier";
var custom = "Custom";
var allProFeatures = "All Pro features";
var dedicatedBenchmarkInfrastructure = "Dedicated benchmark infrastructure";
var customLibraryIntegrations = "Custom library integrations";
var slaGuarantees = "SLA guarantees";
var prioritySupport = "Priority support";
var contactSales = "Contact Sales";
var pricingTiers_default = {
	freeTier,
	free,
	publicBenchmarkDashboard,
	basicLibraryComparisons,
	communityForumAccess,
	monthlyResultDigest,
	getStarted,
	proTier,
	perMonth,
	allFreeFeatures,
	customBenchmarkConfigurations,
	privateResultsDashboard,
	apiAccess1000Requests,
	slackIntegration,
	subscribeToPro,
	enterpriseTier,
	custom,
	allProFeatures,
	dedicatedBenchmarkInfrastructure,
	customLibraryIntegrations,
	slaGuarantees,
	prioritySupport,
	contactSales
};
export { allFreeFeatures, allProFeatures, apiAccess1000Requests, basicLibraryComparisons, communityForumAccess, contactSales, custom, customBenchmarkConfigurations, customLibraryIntegrations, dedicatedBenchmarkInfrastructure, pricingTiers_default as default, enterpriseTier, free, freeTier, getStarted, monthlyResultDigest, perMonth, prioritySupport, privateResultsDashboard, proTier, publicBenchmarkDashboard, slaGuarantees, slackIntegration, subscribeToPro };
var products_default = {
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
export { products_default as default };
var benchmarkDashboard = "Benchmark Dashboard";
var interactiveChartsAndTables = "Interactive charts and tables comparing i18n libraries across bundle size, render time, and hydration cost.";
var bundleAnalyzer = "Bundle Analyzer";
var uploadYourBuildOutput = "Upload your build output and get a detailed breakdown of how much of your bundle is i18n overhead.";
var migrationAssistant = "Migration Assistant";
var automatedCodemodsAndGuides = "Automated codemods and guides for migrating between i18n libraries with minimal disruption.";
var performanceMonitor = "Performance Monitor";
var continuousPerformanceTrackingFor = "Continuous performance tracking for your i18n implementation. Get alerts when translation loading degrades.";
var learnMore = "Learn More";
var productsGrid_default = {
	benchmarkDashboard,
	interactiveChartsAndTables,
	bundleAnalyzer,
	uploadYourBuildOutput,
	migrationAssistant,
	automatedCodemodsAndGuides,
	performanceMonitor,
	continuousPerformanceTrackingFor,
	learnMore
};
export { automatedCodemodsAndGuides, benchmarkDashboard, bundleAnalyzer, continuousPerformanceTrackingFor, productsGrid_default as default, interactiveChartsAndTables, learnMore, migrationAssistant, performanceMonitor, uploadYourBuildOutput };
var products = "Products";
var toolsAndServicesTo = "Tools and services to help you optimize your internationalization strategy.";
var productsHeader_default = {
	products,
	toolsAndServicesTo
};
export { productsHeader_default as default, products, toolsAndServicesTo };
var profile = "Profile";
var displayName = "Display Name";
var email = "Email";
var profileSection_default = {
	profile,
	displayName,
	email
};
export { profileSection_default as default, displayName, email, profile };
var bundleSize = "Bundle Size";
var lazyLoading = "Lazy Loading";
var library = "Library";
var lookupTime = "Lookup Time";
var sampleResults = "Sample Results";
var resultsTable_default = {
	bundleSize,
	lazyLoading,
	library,
	lookupTime,
	sampleResults
};
export { bundleSize, resultsTable_default as default, lazyLoading, library, lookupTime, sampleResults };
var oopsPageNotFound = "Oops! Page not found.";
var returnToHome = "Return to Home";
var route_default = {
	oopsPageNotFound,
	returnToHome,
	"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:",
	"route.oopsPageNotFound": "Oops! Page not found",
	"route.returnToHome": "Return to Home"
};
export { route_default as default, oopsPageNotFound, returnToHome };
var settings_default = {
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
export { settings_default as default };
var cancel = "Cancel";
var saveChanges = "Save Changes";
var settingsFooter_default = {
	cancel,
	saveChanges
};
export { cancel, settingsFooter_default as default, saveChanges };
var manageYourAccount = "Manage your account settings and preferences.";
var manageYourAccountPreferences = "Manage your account preferences and configuration.";
var settings = "Settings";
var settingsHeader_default = {
	manageYourAccount,
	manageYourAccountPreferences,
	settings
};
export { settingsHeader_default as default, manageYourAccount, manageYourAccountPreferences, settings };
var team_default = {
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
export { team_default as default };
var aishaPatel = "Aisha Patel";
var communityManager = "Community Manager";
var dataAnalyst = "Data Analyst";
var developerAdvocate = "Developer Advocate";
var elenaKowalski = "Elena Kowalski";
var ensuresStatisticalRigorIn = "Ensures statistical rigor in our data collection and analysis.";
var ensuresStatisticalRigorInAll = "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.";
var formerGoogleEngineerWith = "Former Google engineer with a passion for web performance and open source.";
var formerGoogleEngineerWith10 = "Former Google engineer with 10 years of experience building internationalization systems at scale.";
var founderLeadEngineer = "Founder & Lead Engineer";
var fullStackDeveloper = "Full-Stack Developer";
var maintainsTheBenchmarkingInfrastructure = "Maintains the benchmarking infrastructure and CI/CD pipelines.";
var maintainsTheBenchmarkingInfrastructureAnd = "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.";
var managesCommunityContributions = "Manages community contributions and open source outreach.";
var managesCommunityContributionsPartnershipsAnd = "Manages community contributions, partnerships, and events. Background in open source governance.";
var marcusWeber = "Marcus Weber";
var passionateAboutDeveloperExperience = "Passionate about developer experience and building intuitive APIs.";
var passionateAboutDeveloperExperienceAnd = "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.";
var performanceEngineer = "Performance Engineer";
var sarahChen = "Sarah Chen";
var specializesInJavascriptPerformance = "Specializes in JavaScript performance optimization and React internals.";
var specializesInJavascriptPerformanceOptimization = "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.";
var tomasRodriguez = "Tomás Rodríguez";
var yukiTanaka = "Yuki Tanaka";
var teamGrid_default = {
	aishaPatel,
	communityManager,
	dataAnalyst,
	developerAdvocate,
	elenaKowalski,
	ensuresStatisticalRigorIn,
	ensuresStatisticalRigorInAll,
	formerGoogleEngineerWith,
	formerGoogleEngineerWith10,
	founderLeadEngineer,
	fullStackDeveloper,
	maintainsTheBenchmarkingInfrastructure,
	maintainsTheBenchmarkingInfrastructureAnd,
	managesCommunityContributions,
	managesCommunityContributionsPartnershipsAnd,
	marcusWeber,
	passionateAboutDeveloperExperience,
	passionateAboutDeveloperExperienceAnd,
	performanceEngineer,
	sarahChen,
	specializesInJavascriptPerformance,
	specializesInJavascriptPerformanceOptimization,
	tomasRodriguez,
	yukiTanaka
};
export { aishaPatel, communityManager, dataAnalyst, teamGrid_default as default, developerAdvocate, elenaKowalski, ensuresStatisticalRigorIn, ensuresStatisticalRigorInAll, formerGoogleEngineerWith, formerGoogleEngineerWith10, founderLeadEngineer, fullStackDeveloper, maintainsTheBenchmarkingInfrastructure, maintainsTheBenchmarkingInfrastructureAnd, managesCommunityContributions, managesCommunityContributionsPartnershipsAnd, marcusWeber, passionateAboutDeveloperExperience, passionateAboutDeveloperExperienceAnd, performanceEngineer, sarahChen, specializesInJavascriptPerformance, specializesInJavascriptPerformanceOptimization, tomasRodriguez, yukiTanaka };
var ourTeam = "Our Team";
var meetThePeopleBehindI18n = "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.";
var teamHeader_default = {
	ourTeam,
	meetThePeopleBehindI18n
};
export { teamHeader_default as default, meetThePeopleBehindI18n, ourTeam };
var themeModeAutoSystemClick = "Theme mode: auto (system). Click to switch to light mode.";
var themeModeLightClick = "Theme mode: light. Click to switch to dark mode.";
var themeModeDarkClick = "Theme mode: dark. Click to switch to auto (system) mode.";
var themeAuto = "Theme: Auto";
var themeDark = "Theme: Dark";
var themeLight = "Theme: Light";
var themeToggle_default = {
	themeModeAutoSystemClick,
	themeModeLightClick,
	themeModeDarkClick,
	themeAuto,
	themeDark,
	themeLight
};
export { themeToggle_default as default, themeAuto, themeDark, themeLight, themeModeAutoSystemClick, themeModeDarkClick, themeModeLightClick };
var cacheInvalidation = "Cache invalidation:";
var contextBasedArchitecturesCan = "Context-based architectures can cause the entire app to re-render when the language changes. For large apps with thousands of components, this can lead to noticeable lag during locale switches.";
var contextBasedArchitecturesCanCause = "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.";
var duringServerSideRenderingThe = "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.";
var flashOfUntranslatedContent = "Flash of Untranslated Content (FOUC)";
var flashOfUntranslatedContentFouc = "Flash of untranslated content (FOUC):";
var manyI18nLibrariesStore = "Many i18n libraries store translations in large JSON files that are loaded upfront. This can significantly increase the \"Time to Interactive\" as the browser must download and parse these files before the app can be used.";
var manyI18nLibrariesStoreTranslations = "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:";
var splittingTranslationsIntoPerRoute = "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:";
var theAppMustFirstLoad = "The app must first load the core library (e.g., i18next) which adds to the initial bundle size. Even \"lightweight\" libraries can add 10-20KB of minified JS.";
var theJsonMustBeParsed = "The JSON must be parsed on every page load — blocking the main thread.";
var theTradeOffsOfDynamic = "The trade-offs of dynamic loading";
var thisTestAppProvidesA = "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.";
var understandingTheImpact = "Understanding the Impact";
var updatingTranslationsRequiresCache = "Updating translations often requires a full rebuild or clearing the CDN cache, which can delay the roll-out of critical copy changes.";
var usersMayBrieflySeeTranslation = "Users may briefly see translation keys or English text while the library and translation files are being loaded.";
var waterfallRequests = "Waterfall requests:";
var whatThisBenchmarkMeasures = "What this benchmark measures";
var whyASingleLargeJson = "Why a single large JSON can hurt performance";
var understandingImpact_default = {
	cacheInvalidation,
	contextBasedArchitecturesCan,
	contextBasedArchitecturesCanCause,
	duringServerSideRenderingThe,
	flashOfUntranslatedContent,
	flashOfUntranslatedContentFouc,
	manyI18nLibrariesStore,
	manyI18nLibrariesStoreTranslations,
	splittingTranslationsIntoPerRoute,
	theAppMustFirstLoad,
	theJsonMustBeParsed,
	theTradeOffsOfDynamic,
	thisTestAppProvidesA,
	understandingTheImpact,
	updatingTranslationsRequiresCache,
	usersMayBrieflySeeTranslation,
	waterfallRequests,
	whatThisBenchmarkMeasures,
	whyASingleLargeJson
};
export { cacheInvalidation, contextBasedArchitecturesCan, contextBasedArchitecturesCanCause, understandingImpact_default as default, duringServerSideRenderingThe, flashOfUntranslatedContent, flashOfUntranslatedContentFouc, manyI18nLibrariesStore, manyI18nLibrariesStoreTranslations, splittingTranslationsIntoPerRoute, theAppMustFirstLoad, theJsonMustBeParsed, theTradeOffsOfDynamic, thisTestAppProvidesA, understandingTheImpact, updatingTranslationsRequiresCache, usersMayBrieflySeeTranslation, waterfallRequests, whatThisBenchmarkMeasures, whyASingleLargeJson };
var bundleSizeImpact = "Bundle size impact";
var duringSsrTranslationDataIs = "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.";
var duringSsrTranslationDataIsSerialized = "During SSR, translation data is serialized into the HTML. We measure the size of this payload and its effect on Time to Interactive (TTI).";
var howFastTheAppCan = "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.";
var howFastTheAppCanSwitchFromOne = "How fast the app can switch from one language to another. We measure the re-render time and any network delays for lazy-loaded locales.";
var howMuchExtraTimeThe = "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.";
var howMuchExtraTimeTheLibraryAdds = "How much extra time the library adds to the initial page load. This includes script execution and the time to fetch/parse translation data.";
var hydrationCost = "Hydration cost";
var lazyLoadingEffectiveness = "Lazy loading effectiveness";
var localeSwitchSpeed = "Locale switch speed";
var renderingOverhead = "Rendering overhead";
var theAdditionalJavascriptBytes = "The additional Javascript bytes that the library adds to your production build. We measure both the library itself and its mandatory dependencies.";
var theAdditionalJavascriptBytesSent = "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.";
var whatWeMeasure = "What We Measure";
var whetherSplittingTranslationsByRoute = "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).";
var whatWeMeasure_default = {
	bundleSizeImpact,
	duringSsrTranslationDataIs,
	duringSsrTranslationDataIsSerialized,
	howFastTheAppCan,
	howFastTheAppCanSwitchFromOne,
	howMuchExtraTimeThe,
	howMuchExtraTimeTheLibraryAdds,
	hydrationCost,
	lazyLoadingEffectiveness,
	localeSwitchSpeed,
	renderingOverhead,
	theAdditionalJavascriptBytes,
	theAdditionalJavascriptBytesSent,
	whatWeMeasure,
	whetherSplittingTranslationsByRoute
};
export { bundleSizeImpact, whatWeMeasure_default as default, duringSsrTranslationDataIs, duringSsrTranslationDataIsSerialized, howFastTheAppCan, howFastTheAppCanSwitchFromOne, howMuchExtraTimeThe, howMuchExtraTimeTheLibraryAdds, hydrationCost, lazyLoadingEffectiveness, localeSwitchSpeed, renderingOverhead, theAdditionalJavascriptBytes, theAdditionalJavascriptBytesSent, whatWeMeasure, whetherSplittingTranslationsByRoute };
var whyTheseMetricsMatter = "Why These Metrics Matter";
var bundleSize = "Bundle Size";
var theBundleIsTheData = "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.";
var renderingHydration = "Rendering & Hydration";
var connectingALargeJson = "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).";
var dynamicLoading = "Dynamic Loading";
var loadingAllTranslationsUpfront = "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.";
var whyItMatters_default = {
	whyTheseMetricsMatter,
	bundleSize,
	theBundleIsTheData,
	renderingHydration,
	connectingALargeJson,
	dynamicLoading,
	loadingAllTranslationsUpfront
};
export { bundleSize, connectingALargeJson, whyItMatters_default as default, dynamicLoading, loadingAllTranslationsUpfront, renderingHydration, theBundleIsTheData, whyTheseMetricsMatter };
