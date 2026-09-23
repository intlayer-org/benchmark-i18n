<script lang="ts">
  import ApiAccessSection from "../components/pages/settings/ApiAccessSection.svelte";
  import PreferencesSection from "../components/pages/settings/PreferencesSection.svelte";
  import ProfileSection from "../components/pages/settings/ProfileSection.svelte";
  import SettingsFooter from "../components/pages/settings/SettingsFooter.svelte";
  import SettingsHeader from "../components/pages/settings/SettingsHeader.svelte";
</script>

<div class="container py-16">
  <SettingsHeader />
  <div class="mx-auto max-w-2xl space-y-8">
    <form class="space-y-8">
      <ProfileSection />
      <PreferencesSection />
      <ApiAccessSection />
      <SettingsFooter />
    </form>
  </div>
</div>
