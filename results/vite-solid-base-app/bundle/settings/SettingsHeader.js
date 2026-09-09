import { createComponent, template } from "solid-js/web";
var _tmpl$$1 = template(`<div class="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.`);
function MockBanner() {
	return _tmpl$$1();
}
var _tmpl$ = template(`<h1 class="mb-2 text-3xl font-bold text-foreground">Settings`);
var _tmpl$2 = template(`<p class="mb-8 text-muted-foreground">Manage your account preferences and configuration.`);
function SettingsHeader() {
	return [
		createComponent(MockBanner, {}),
		_tmpl$(),
		_tmpl$2()
	];
}
export { SettingsHeader as default };
