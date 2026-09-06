export default {
  "hero": {
    aTestApplicationDesignedTo: "국제화 라이브러리가 번들 크기, 로딩 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.",
    viewResults: "결과 보기",
  },
  "why-it-matters": {
    whyTheseMetricsMatter: "이 지표가 중요한 이유",
    bundleSize: "번들 크기",
    theBundleIsTheData: "번들은 전 세계 모든 사용자에게 전송되는 데이터를 나타냅니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 발생하는 느린 3G 연결에서 더욱 그렇습니다. i18n 라이브러리는 런타임 코드만으로도 수 킬로바이트에서 수십 킬로바이트까지 무게가 크게 다르며, 여기에 번역 파일 자체가 추가됩니다.",
    renderingHydration: "렌더링 및 수화(Hydration)",
    connectingALargeJsonDictionary: "모든 컴포넌트에 대규모 JSON 사전(dictionary)을 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트의 모든 변경 사항은 전체 트리에서 리렌더링을 유발할 수 있습니다. SSR 수화 단계에서 방대한 번역 객체를 파싱하고 연결하면 페이지가 상호작용 가능해지는 시간까지 지연이 발생하며, 이는 Time to Interactive (TTI) 에 직접적인 영향을 미칩니다.",
    dynamicLoading: "동적 로딩",
    loadingAllTranslationsUpfrontOverloads: "모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 내용만 전송합니다. 그러나 지연 로딩은 워터폴 요청, 번역되지 않은 콘텐츠의 깜빡임(FOUC), 캐시 복잡성 등 자체적인 트레이드오프를 수반합니다. 두 전략을 모두 측정하는 것이 필수적입니다.",
  },
  "understanding-impact": {
    understandingTheImpact: "영향 이해하기",
    whyASingleLargeJson: "왜 단일 대형 JSON이 성능을 저하시키는 이유",
    manyI18nLibrariesStoreTranslations: "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 컴포넌트는 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:",
    theJsonMustBeParsed: "JSON은 모든 페이지 로드 시 파싱되어야 하며, 이는 메인 스레드를 차단합니다.",
    contextBasedArchitecturesCanCause: "컨텍스트 기반 아키텍처는 로케일이 변경될 때 연쇄적인 리렌더링을 일으킬 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자에게 알림이 가기 때문입니다.",
    duringServerSideRenderingThe: "서버 사이드 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어, 다운로드 및 수화가 필요한 문서 크기가 증가합니다.",
    theTradeOffsOfDynamic: "동적 로딩의 트레이드오프",
    splittingTranslationsIntoPerRoute: "번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:",
    waterfallRequests: "워터폴(Waterfall) 요청:",
    flashOfUntranslatedContentFouc: "번역되지 않은 콘텐츠의 깜빡임 (FOUC):",
    cacheInvalidation: "캐시 무효화:",
    whatThisBenchmarkMeasures: "이 벤치마크가 측정하는 것",
    thisTestAppProvidesA: "이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 그리고 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.",
  },
  "results-table": {
    sampleResults: "샘플 결과",
    bundleSize: "번들 크기",
    lookupTime: "조회 시간",
    lazyLoading: "지연 로딩",
  }
};
