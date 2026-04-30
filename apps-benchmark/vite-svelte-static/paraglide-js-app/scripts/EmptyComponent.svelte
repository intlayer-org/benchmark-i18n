<script lang="ts">
  import { getLocale, experimentalStaticLocale } from "../src/paraglide/runtime";

  const en_example = () =>
    "Choosing an i18n library is an architectural decision with long-term consequences.";

  const example = (
    inputs: Record<string, unknown> = {},
    options: { locale?: string } = {},
  ) => {
    void inputs;
    const locale = experimentalStaticLocale ?? options.locale ?? getLocale();
    if (locale === "en") return en_example();
  };

  const value = example();
  void value;
</script>
