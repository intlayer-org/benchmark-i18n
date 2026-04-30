<script lang="ts">
  import { m } from "../../../paraglide/messages";

  const languageId = "settings-default-language";
</script>

<section class="rounded-lg border border-border bg-card p-6">
  <h2 class="mb-4 text-lg font-semibold text-foreground">
    {m.settings_preferences_title()}
  </h2>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm font-medium text-foreground">
          {m.settings_preferences_emailNotifications()}
        </p>
        <p class="text-xs text-muted-foreground">
          {m.settings_preferences_weeklyReports()}
        </p>
      </div>
      <button
        type="button"
        class="h-6 w-11 rounded-full bg-primary transition-colors"
        aria-label={m.settings_preferences_toggleNotifications()}
      >
        <span
          class="block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform"
        ></span>
      </button>
    </div>
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm font-medium text-foreground">
          {m.settings_preferences_darkMode()}
        </p>
        <p class="text-xs text-muted-foreground">
          {m.settings_preferences_darkColorScheme()}
        </p>
      </div>
      <button
        type="button"
        class="h-6 w-11 rounded-full bg-muted transition-colors"
        aria-label={m.settings_preferences_toggleDarkMode()}
      >
        <span
          class="block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform"
        ></span>
      </button>
    </div>
    <div>
      <label
        for={languageId}
        class="mb-1 block text-sm font-medium text-foreground"
      >
        {m.settings_preferences_defaultLanguage()}
      </label>
      <select
        id={languageId}
        class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none"
      >
        <option>{m.settings_preferences_english()}</option>
        <option>{m.settings_preferences_french()}</option>
        <option>{m.settings_preferences_german()}</option>
        <option>{m.settings_preferences_spanish()}</option>
        <option>{m.settings_preferences_japanese()}</option>
        <option>{m.settings_preferences_chinese()}</option>
        <option>{m.settings_preferences_arabic()}</option>
      </select>
    </div>
  </div>
</section>
