export default {
  "hero": {
    aTestApplicationDesignedTo: "一个测试应用程序，旨在衡量国际化库对捆绑包大小、加载性能和渲染反应性的真实影响。",
    viewResults: "查看结果",
  },
  "why-it-matters": {
    whyTheseMetricsMatter: "为什么这些指标很重要",
    bundleSize: "捆绑包大小",
    theBundleIsTheData: "捆绑包是发送给全球每个用户的数据。捆绑包越大意味着下载时间越长——特别是在许多地区常见的缓慢 3G 连接上。i18n 库的重量差异巨大：从几 KB 到数十 KB 的运行时代码，再加上翻译文件本身。",
    renderingHydration: "渲染与水合",
    connectingALargeJsonDictionary: "将大型 JSON 字典连接到每个组件会创建隐藏的依赖关系：翻译环境中的任何更改都可能触发整个树的重新渲染。在 SSR 水合期间，解析和附加庞大的翻译对象会增加页面变得可交互之前的延迟——直接影响可交互时间 (TTI)。",
    dynamicLoading: "动态加载",
    loadingAllTranslationsUpfrontOverloads: "预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了其自身的权衡：瀑布式请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。",
  },
  "understanding-impact": {
    understandingTheImpact: "了解影响",
    whyASingleLargeJson: "为什么单个大型 JSON 会损害性能",
    manyI18nLibrariesStoreTranslations: "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会持有对整个字典的引用。这意味着：",
    theJsonMustBeParsed: "必须在每次页面加载时解析 JSON——阻塞主线程。",
    contextBasedArchitecturesCanCause: "基于上下文的架构可能会在语言环境更改时导致级联重新渲染，因为即使特定键未更改，也会通知每个消费者。",
    duringServerSideRenderingThe: "在服务器端渲染期间，整个字典被序列化为 HTML 负载，增加了必须下载和水合的文档大小。",
    theTradeOffsOfDynamic: "动态加载的权衡",
    splittingTranslationsIntoPerRoute: "将翻译拆分为每个路由或每个命名空间的块可以显著减少初始负载。但这引入了新的挑战：",
    waterfallRequests: "瀑布式请求：",
    flashOfUntranslatedContentFouc: "未翻译内容的闪烁 (FOUC)：",
    cacheInvalidation: "缓存失效：",
    whatThisBenchmarkMeasures: "该基准测试测量什么",
    thisTestAppProvidesA: "本测试应用提供了一个受控环境——10 个包含真实内容的页面——以便从三个轴比较 i18n 库：它们为 JavaScript 捆绑包增加的重量、解析和渲染翻译内容所花费的时间，以及它们的代码拆分和延迟加载策略的有效性。每个库都集成到同一个应用中，因此结果具有直接可比性。",
  },
  "results-table": {
    sampleResults: "示例结果",
    bundleSize: "捆绑包大小",
    lookupTime: "查找时间",
    lazyLoading: "延迟加载",
  }
};
