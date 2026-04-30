<script lang="ts">
  import { Locales } from "intlayer";
  import { setupIntlayer, useIntlayer } from "svelte-intlayer";

  setupIntlayer(Locales.ENGLISH);
  const content = useIntlayer("header" as never);
  void content;
</script>
