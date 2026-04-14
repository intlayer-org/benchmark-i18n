export default {
  "hero": {
    aTestApplicationDesignedTo: "国際化ライブラリがバンドルサイズ、ロード性能、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーションです。",
    viewResults: "結果を表示",
  },
  "why-it-matters": {
    whyTheseMetricsMatter: "なぜこれらの指標が重要なのか",
    bundleSize: "バンドルサイズ",
    theBundleIsTheData: "バンドルとは、世界中のすべてのユーザーに送信されるデータです。バンドルが大きいほど、ダウンロード時間が長くなります。特に、多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリは、ランタイムコードだけで数キロバイトから数十キロバイトまで重量が大きく異なり、さらに翻訳ファイル自体が加わります。",
    renderingHydration: "レンダリングとハイドレーション",
    connectingALargeJsonDictionary: "すべてのコンポーネントに大規模なJSON辞書を接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体のリレンダリングを引き起こす可能性があります。SSRのハイドレーション中に巨大な翻訳オブジェクトを解析してアタッチすると、ページがインタラクティブになるまでの遅延が発生し、Time to Interactive (TTI) に直接影響します。",
    dynamicLoading: "動的ロード",
    loadingAllTranslationsUpfrontOverloads: "すべての翻訳を事前にロードすると、初期ペイロードが過負荷になります。動的（遅延）ロードは、ルートや名前空間ごとに翻訳を分割し、現在のページに必要なものだけを送信します。ただし、遅延ロードには、ウォーターフォールリクエスト、翻訳されていないコンテンツのちらつき（FOUC）、キャッシュの複雑さなどのトレードオフが伴います。両方の戦略を測定することが不可欠です。",
  },
  "understanding-impact": {
    understandingTheImpact: "影響を理解する",
    whyASingleLargeJson: "なぜ単一の大きなJSONがパフォーマンスを低下させるのか",
    manyI18nLibrariesStoreTranslations: "多くのi18nライブラリは、Reactコンテキストを通じて提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：",
    theJsonMustBeParsed: "JSONはページロードごとに解析される必要があり、メインスレッドをブロックします。",
    contextBasedArchitecturesCanCause: "コンテキストベースのアーキテクチャでは、ロケールが変更されたときに連鎖的なリレンダリングが発生する可能性があります。特定のキーが変更されていなくても、すべてのコンシューマーに通知が届くためです。",
    duringServerSideRenderingThe: "サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増大します。",
    theTradeOffsOfDynamic: "動的ロードのトレードオフ",
    splittingTranslationsIntoPerRoute: "翻訳をルート別または名前空間別のチャンクに分割すると、初期ペイロードを大幅に削減できます。しかし、新たな課題が生じます：",
    waterfallRequests: "ウォーターフォールリクエスト：",
    flashOfUntranslatedContentFouc: "翻訳されていないコンテンツのちらつき (FOUC)：",
    cacheInvalidation: "キャッシュの無効化：",
    whatThisBenchmarkMeasures: "このベンチマークが測定するもの",
    thisTestAppProvidesA: "このテストアプリは、現実的なコンテンツを含む10ページ構成の制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツの解析とレンダリングに費やされる時間、そしてコード分割と遅延ロード戦略の有効性です。各ライブラリは同じアプリに統合されるため、結果を直接比較できます。",
  },
  "results-table": {
    sampleResults: "サンプル結果",
    bundleSize: "バンドルサイズ",
    lookupTime: "検索時間",
    lazyLoading: "遅延ロード",
  }
};
