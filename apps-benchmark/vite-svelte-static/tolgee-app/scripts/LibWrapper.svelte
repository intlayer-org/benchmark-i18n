<script lang="ts">
  import { FormatSimple, GlobalContextPlugin, Tolgee } from "@tolgee/svelte";

  const tolgee = Tolgee()
    .use(FormatSimple())
    .use(GlobalContextPlugin())
    .init({
      language: "en",
      staticData: { en: { header: { home: "Home" } } },
    });

  tolgee.run();
</script>

<slot />
