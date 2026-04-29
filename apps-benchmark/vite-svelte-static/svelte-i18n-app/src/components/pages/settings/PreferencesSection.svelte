<script lang="ts">
  import { _ } from "svelte-i18n";
</script>

<section class="rounded-lg border border-border bg-card p-6">
  <h2 class="mb-4 text-lg font-semibold text-foreground">
    {$_("settings.preferences.title")}
  </h2>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm font-medium text-foreground">
          {$_("settings.preferences.emailNotifications")}
        </p>
        <p class="text-xs text-muted-foreground">
          {$_("settings.preferences.weeklyReports")}
        </p>
      </div>
      <button
        type="button"
        class="h-6 w-11 rounded-full bg-primary transition-colors"
        aria-label={$_("settings.preferences.toggleNotifications")}
      >
        <span
          class="block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform"
        ></span>
      </button>
    </div>
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm font-medium text-foreground">
          {$_("settings.preferences.darkMode")}
        </p>
        <p class="text-xs text-muted-foreground">
          {$_("settings.preferences.darkColorScheme")}
        </p>
      </div>
      <button
        type="button"
        class="h-6 w-11 rounded-full bg-muted transition-colors"
        aria-label={$_("settings.preferences.toggleDarkMode")}
      >
        <span
          class="block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform"
        ></span>
      </button>
    </div>
    <div>
      <label
        for="settings-default-language"
        class="mb-1 block text-sm font-medium text-foreground"
      >
        {$_("settings.preferences.defaultLanguage")}
      </label>
      <select
        id="settings-default-language"
        class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none"
      >
        <option>{$_("settings.preferences.english")}</option>
        <option>{$_("settings.preferences.french")}</option>
        <option>{$_("settings.preferences.german")}</option>
        <option>{$_("settings.preferences.spanish")}</option>
        <option>{$_("settings.preferences.japanese")}</option>
        <option>{$_("settings.preferences.chinese")}</option>
        <option>{$_("settings.preferences.arabic")}</option>
      </select>
    </div>
  </div>
</section>
