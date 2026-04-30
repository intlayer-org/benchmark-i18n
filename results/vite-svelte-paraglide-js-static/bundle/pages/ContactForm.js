import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
var root = $.from_html(`<form class="space-y-6"><div class="grid gap-4 md:grid-cols-2"><div><label class="mb-1 block text-sm font-medium text-foreground"> </label> <input class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none"/></div> <div><label class="mb-1 block text-sm font-medium text-foreground"> </label> <input type="email" class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none"/></div></div> <div><label class="mb-1 block text-sm font-medium text-foreground"> </label> <select class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none"><option> </option><option> </option><option> </option><option> </option><option> </option></select></div> <div><label class="mb-1 block text-sm font-medium text-foreground"> </label> <textarea class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none"></textarea></div> <button type="submit" class="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"> </button></form>`);
function ContactForm($$anchor, $$props) {
	$.push($$props, false);
	const nameId = "contact-name";
	const emailId = "contact-email";
	const topicId = "contact-topic";
	const messageId = "contact-message";
	$.init();
	var form = root();
	var div = $.child(form);
	var div_1 = $.child(div);
	var label = $.child(div_1);
	$.set_attribute(label, "for", nameId);
	var text = $.child(label, true);
	$.reset(label);
	var input = $.sibling(label, 2);
	$.set_attribute(input, "id", nameId);
	$.reset(div_1);
	var div_2 = $.sibling(div_1, 2);
	var label_1 = $.child(div_2);
	$.set_attribute(label_1, "for", emailId);
	var text_1 = $.child(label_1, true);
	$.reset(label_1);
	var input_1 = $.sibling(label_1, 2);
	$.set_attribute(input_1, "id", emailId);
	$.reset(div_2);
	$.reset(div);
	var div_3 = $.sibling(div, 2);
	var label_2 = $.child(div_3);
	$.set_attribute(label_2, "for", topicId);
	var text_2 = $.child(label_2, true);
	$.reset(label_2);
	var select = $.sibling(label_2, 2);
	$.set_attribute(select, "id", topicId);
	var option = $.child(select);
	var text_3 = $.child(option, true);
	$.reset(option);
	var option_value = {};
	var option_1 = $.sibling(option);
	var text_4 = $.child(option_1, true);
	$.reset(option_1);
	var option_1_value = {};
	var option_2 = $.sibling(option_1);
	var text_5 = $.child(option_2, true);
	$.reset(option_2);
	var option_2_value = {};
	var option_3 = $.sibling(option_2);
	var text_6 = $.child(option_3, true);
	$.reset(option_3);
	var option_3_value = {};
	var option_4 = $.sibling(option_3);
	var text_7 = $.child(option_4, true);
	$.reset(option_4);
	var option_4_value = {};
	$.reset(select);
	$.reset(div_3);
	var div_4 = $.sibling(div_3, 2);
	var label_3 = $.child(div_4);
	$.set_attribute(label_3, "for", messageId);
	var text_8 = $.child(label_3, true);
	$.reset(label_3);
	var textarea = $.sibling(label_3, 2);
	$.set_attribute(textarea, "id", messageId);
	$.set_attribute(textarea, "rows", 5);
	$.reset(div_4);
	var button = $.sibling(div_4, 2);
	var text_9 = $.child(button, true);
	$.reset(button);
	$.reset(form);
	$.template_effect(($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) => {
		$.set_text(text, $0);
		$.set_attribute(input, "placeholder", $1);
		$.set_text(text_1, $2);
		$.set_attribute(input_1, "placeholder", $3);
		$.set_text(text_2, $4);
		$.set_text(text_3, $5);
		if (option_value !== (option_value = $6)) option.__value = $6;
		$.set_text(text_4, $7);
		if (option_1_value !== (option_1_value = $8)) option_1.__value = $8;
		$.set_text(text_5, $9);
		if (option_2_value !== (option_2_value = $10)) option_2.__value = $10;
		$.set_text(text_6, $11);
		if (option_3_value !== (option_3_value = $12)) option_3.__value = $12;
		$.set_text(text_7, $13);
		if (option_4_value !== (option_4_value = $14)) option_4.__value = $14;
		$.set_text(text_8, $15);
		$.set_attribute(textarea, "placeholder", $16);
		$.set_text(text_9, $17);
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
		() => (void 0)()
	]);
	$.append($$anchor, form);
	$.pop();
}
export { ContactForm as default };
