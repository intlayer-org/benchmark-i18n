import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
var t = e.from_html("<div class=\"rounded-lg border border-border bg-card p-6 text-center\"><div class=\"mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground\"> </div> <h3 class=\"text-base font-semibold text-foreground\"> </h3> <p class=\"mb-2 text-xs font-medium text-primary\"> </p> <p class=\"text-sm text-muted-foreground\"> </p></div>"), n = e.from_html("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\"></div>");
function r(r, i) {
	e.push(i, !1);
	let a = [
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
	e.init();
	var o = n();
	e.each(o, 5, () => a, (e) => e.name, (n, r) => {
		var i = t(), a = e.child(i), o = e.only_child(a, !0), s = e.sibling(a, 2), c = e.only_child(s, !0), l = e.sibling(s, 2), u = e.only_child(l, !0), d = e.sibling(l, 2), f = e.only_child(d, !0);
		e.reset(i), e.template_effect((t) => {
			e.set_text(o, t), e.set_text(c, e.get(r).name), e.set_text(u, e.get(r).role), e.set_text(f, e.get(r).bio);
		}, [() => e.get(r).name.split(" ").map((e) => e[0]).join("")]), e.append(n, i);
	}), e.reset(o), e.append(r, o), e.pop();
}
export { r as default };
