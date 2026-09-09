import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
var root = $.from_html(`<div class="rounded-lg border border-border bg-card p-6 text-center"><div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground"> </div> <h3 class="text-base font-semibold text-foreground"> </h3> <p class="mb-2 text-xs font-medium text-primary"> </p> <p class="text-sm text-muted-foreground"> </p></div>`);
var root_1 = $.from_html(`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"></div>`);
function TeamGrid($$anchor, $$props) {
	$.push($$props, false);
	const members = [
		{
			name: "Sarah Chen",
			role: "Founder & Lead Engineer",
			bio: "Former Google engineer with 10 years of experience building internationalization systems at scale."
		},
		{
			name: "Marcus Weber",
			role: "Performance Engineer",
			bio: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel."
		},
		{
			name: "Aisha Patel",
			role: "Developer Advocate",
			bio: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext."
		},
		{
			name: "Tomás Rodríguez",
			role: "Full-Stack Developer",
			bio: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui."
		},
		{
			name: "Yuki Tanaka",
			role: "Data Analyst",
			bio: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT."
		},
		{
			name: "Elena Kowalski",
			role: "Community Manager",
			bio: "Manages community contributions, partnerships, and events. Background in open source governance."
		}
	];
	$.init();
	var div = root_1();
	$.each(div, 5, () => members, (m) => m.name, ($$anchor, m) => {
		var div_1 = root();
		var div_2 = $.child(div_1);
		var text = $.only_child(div_2, true);
		var h3 = $.sibling(div_2, 2);
		var text_1 = $.only_child(h3, true);
		var p = $.sibling(h3, 2);
		var text_2 = $.only_child(p, true);
		var p_1 = $.sibling(p, 2);
		var text_3 = $.only_child(p_1, true);
		$.reset(div_1);
		$.template_effect(($0) => {
			$.set_text(text, $0);
			$.set_text(text_1, $.get(m).name);
			$.set_text(text_2, $.get(m).role);
			$.set_text(text_3, $.get(m).bio);
		}, [() => $.get(m).name.split(" ").map((n) => n[0]).join("")]);
		$.append($$anchor, div_1);
	});
	$.reset(div);
	$.append($$anchor, div);
	$.pop();
}
export { TeamGrid as default };
