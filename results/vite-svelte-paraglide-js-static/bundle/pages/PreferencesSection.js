import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
var root = $.from_html(`<section class="rounded-lg border border-border bg-card p-6"><h2 class="mb-4 text-lg font-semibold text-foreground"> </h2> <div class="space-y-4"><div class="flex items-center justify-between"><div><p class="text-sm font-medium text-foreground"> </p> <p class="text-xs text-muted-foreground"> </p></div> <button type="button" class="h-6 w-11 rounded-full bg-primary transition-colors"><span class="block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform"></span></button></div> <div class="flex items-center justify-between"><div><p class="text-sm font-medium text-foreground"> </p> <p class="text-xs text-muted-foreground"> </p></div> <button type="button" class="h-6 w-11 rounded-full bg-muted transition-colors"><span class="block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform"></span></button></div> <div><label class="mb-1 block text-sm font-medium text-foreground"> </label> <select class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none"><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option></select></div></div></section>`);
function PreferencesSection($$anchor, $$props) {
	$.push($$props, false);
	const languageId = "settings-default-language";
	$.init();
	var section = root();
	var h2 = $.child(section);
	var text = $.child(h2, true);
	$.reset(h2);
	var div = $.sibling(h2, 2);
	var div_1 = $.child(div);
	var div_2 = $.child(div_1);
	var p = $.child(div_2);
	var text_1 = $.child(p, true);
	$.reset(p);
	var p_1 = $.sibling(p, 2);
	var text_2 = $.child(p_1, true);
	$.reset(p_1);
	$.reset(div_2);
	var button = $.sibling(div_2, 2);
	$.reset(div_1);
	var div_3 = $.sibling(div_1, 2);
	var div_4 = $.child(div_3);
	var p_2 = $.child(div_4);
	var text_3 = $.child(p_2, true);
	$.reset(p_2);
	var p_3 = $.sibling(p_2, 2);
	var text_4 = $.child(p_3, true);
	$.reset(p_3);
	$.reset(div_4);
	var button_1 = $.sibling(div_4, 2);
	$.reset(div_3);
	var div_5 = $.sibling(div_3, 2);
	var label = $.child(div_5);
	$.set_attribute(label, "for", languageId);
	var text_5 = $.child(label, true);
	$.reset(label);
	var select = $.sibling(label, 2);
	$.set_attribute(select, "id", languageId);
	var option = $.child(select);
	var text_6 = $.child(option, true);
	$.reset(option);
	var option_value = {};
	var option_1 = $.sibling(option);
	var text_7 = $.child(option_1, true);
	$.reset(option_1);
	var option_1_value = {};
	var option_2 = $.sibling(option_1);
	var text_8 = $.child(option_2, true);
	$.reset(option_2);
	var option_2_value = {};
	var option_3 = $.sibling(option_2);
	var text_9 = $.child(option_3, true);
	$.reset(option_3);
	var option_3_value = {};
	var option_4 = $.sibling(option_3);
	var text_10 = $.child(option_4, true);
	$.reset(option_4);
	var option_4_value = {};
	var option_5 = $.sibling(option_4);
	var text_11 = $.child(option_5, true);
	$.reset(option_5);
	var option_5_value = {};
	var option_6 = $.sibling(option_5);
	var text_12 = $.child(option_6, true);
	$.reset(option_6);
	var option_6_value = {};
	$.reset(select);
	$.reset(div_5);
	$.reset(div);
	$.reset(section);
	$.template_effect(($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21) => {
		$.set_text(text, $0);
		$.set_text(text_1, $1);
		$.set_text(text_2, $2);
		$.set_attribute(button, "aria-label", $3);
		$.set_text(text_3, $4);
		$.set_text(text_4, $5);
		$.set_attribute(button_1, "aria-label", $6);
		$.set_text(text_5, $7);
		$.set_text(text_6, $8);
		if (option_value !== (option_value = $9)) option.__value = $9;
		$.set_text(text_7, $10);
		if (option_1_value !== (option_1_value = $11)) option_1.__value = $11;
		$.set_text(text_8, $12);
		if (option_2_value !== (option_2_value = $13)) option_2.__value = $13;
		$.set_text(text_9, $14);
		if (option_3_value !== (option_3_value = $15)) option_3.__value = $15;
		$.set_text(text_10, $16);
		if (option_4_value !== (option_4_value = $17)) option_4.__value = $17;
		$.set_text(text_11, $18);
		if (option_5_value !== (option_5_value = $19)) option_5.__value = $19;
		$.set_text(text_12, $20);
		if (option_6_value !== (option_6_value = $21)) option_6.__value = $21;
	}, [
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)(),
		() => (void 0)()
	]);
	$.append($$anchor, section);
	$.pop();
}
export { PreferencesSection as default };
