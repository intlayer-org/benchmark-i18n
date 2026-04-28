import { createComponent, insert, template } from "solid-js/web";
import { For } from "solid-js";
var _tmpl$ = template(`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">`), _tmpl$2 = template(`<div class="rounded-lg border border-border bg-card p-6 text-center"><div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground"></div><h3 class="text-base font-semibold text-foreground"></h3><p class="mb-2 text-xs font-medium text-primary"></p><p class="text-sm text-muted-foreground">`);
function TeamGrid() {
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
	return (() => {
		var _el$ = _tmpl$();
		insert(_el$, createComponent(For, {
			each: members,
			children: (m) => (() => {
				var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$4.nextSibling, _el$6 = _el$5.nextSibling;
				insert(_el$3, () => m.name.split(" ").map((n) => n[0]).join(""));
				insert(_el$4, () => m.name);
				insert(_el$5, () => m.role);
				insert(_el$6, () => m.bio);
				return _el$2;
			})()
		}));
		return _el$;
	})();
}
export { TeamGrid as default };
