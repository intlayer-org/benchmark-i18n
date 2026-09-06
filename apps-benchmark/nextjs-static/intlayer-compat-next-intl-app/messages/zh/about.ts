export default {
  "about-header": {
    aboutThisBenchmark: "关于此基准测试",
    thisIsAnOpenSource: "这是一个开源测试应用程序——不是产品或公司。其唯一目的是提供一个现实的多页面 React 应用程序，可以在相同条件下集成和衡量不同的 i18n 库。",
  },
  "about-grid": {
    whyThisExists: "为什么存在这个项目",
    choosingAnI18nLibraryIs: "选择 i18n 库是一个具有长期影响的架构决策。大多数比较都集中在 API 的易用性上，但很少有人衡量性能成本：库为捆绑包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载真的有帮助还是只是转移了成本？本基准测试用真实数据回答了这些问题。",
    methodology: "方法论",
    theSame10PageApp: "同一个 10 页应用为每个库构建一次。我们衡量生产捆绑包（通过 rollup-plugin-visualizer），运行加载指标的 Lighthouse 审核，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在硬件一致的 CI 中运行，以确保结果可重现。",
  },
  "what-we-measure": {
    bundleSizeImpact: "捆绑包大小影响",
    theAdditionalJavascriptBytesSent: "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络上的下载时间。",
    renderingOverhead: "渲染开销",
    howMuchExtraTimeThe: "库为 React 的渲染循环增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树不必要的重新渲染。",
    hydrationCost: "水合成本",
    duringSsrTranslationDataIs: "在 SSR 期间，翻译数据被序列化为 HTML。大型字典会增加 HTML 负载并减慢水合速度——即页面变得可交互的瞬间。",
    lazyLoadingEffectiveness: "延迟加载有效性",
    whetherSplittingTranslationsByRoute: "按路由或命名空间拆分翻译是否真的减少了初始加载，以及它引入了哪些权衡（瀑布式请求、FOUC、缓存复杂性）。",
    localeSwitchSpeed: "语言环境切换速度",
    howFastTheAppCan: "应用程序在运行时从一种语言切换到另一种语言的速度——包括提取新翻译、重新渲染组件和更新 DOM。",
    whatWeMeasure: "衡量指标",
  }
};
