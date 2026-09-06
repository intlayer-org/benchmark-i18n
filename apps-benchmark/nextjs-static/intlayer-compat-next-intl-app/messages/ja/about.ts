export default {
  "about-header": {
    aboutThisBenchmark: "このベンチマークについて",
    thisIsAnOpenSource: "これはオープンソースのテストアプリケーションであり、製品や会社ではありません。その唯一の目的は、Identicalな条件下で異なるi18nライブラリを統合して測定できる、現実的な多ページReactアプリを提供することです。",
  },
  "about-grid": {
    whyThisExists: "なぜこれが存在するのか",
    choosingAnI18nLibraryIs: "i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使い勝手に焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリがバンドルにどれだけの重量を加えるか？ 数千の翻訳キーがロードされたときにレンダリングにどう影響するか？ 遅延ロードは実際に役立つのか、それともコストを後回しにしているだけなのか？ このベンチマークは、実際のデータを使用してこれらの質問に答えます。",
    methodology: "方法論",
    theSame10PageApp: "同じ10ページのアプリがライブラリごとに1回構築されます。 rollup-plugin-visualizerを通じて生産バンドルを測定し、ロード指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダリング時間をキャプチャします。すべてのテストは、再現可能な結果を保証するために、一貫したハードウェアのCIで実行されます。",
  },
  "what-we-measure": {
    bundleSizeImpact: "バンドルサイズへの影響",
    theAdditionalJavascriptBytesSent: "i18nライブラリと翻訳ファイルが含まれる際にユーザーに送信される追加のJavaScriptバイト数です。これは、低速なネットワークでのダウンロード時間に直接影響します。",
    renderingOverhead: "レンダリングオーバーヘッド",
    howMuchExtraTimeThe: "ライブラリがReactのレンダリングサイクルに追加する時間です。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要なリレンダリングを引き起こす可能性があります。",
    hydrationCost: "ハイドレーションコスト",
    duringSsrTranslationDataIs: "SSR中、翻訳データはHTMLにシリアル化されます。大規模な辞書はHTMLペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。",
    lazyLoadingEffectiveness: "遅延ロードの有効性",
    whetherSplittingTranslationsByRoute: "ルートや名前空間ごとに翻訳を分割することが実際に初期ロードを削減するのか、そしてどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）をもたらすのかを測定します。",
    localeSwitchSpeed: "ロケール切り替え速度",
    howFastTheAppCan: "実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるかを測定します。これには、新しい翻訳の取得、コンポーネントのリレンダリング、DOMの更新が含まれます。",
    whatWeMeasure: "測定項目",
  }
};
