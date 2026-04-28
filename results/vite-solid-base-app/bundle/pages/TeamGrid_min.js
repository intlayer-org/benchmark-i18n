import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { For as r } from "solid-js";
var i = n("<div class=\"grid gap-6 md:grid-cols-2 lg:grid-cols-3\">"), a = n("<div class=\"rounded-lg border border-border bg-card p-6 text-center\"><div class=\"mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground\"></div><h3 class=\"text-base font-semibold text-foreground\"></h3><p class=\"mb-2 text-xs font-medium text-primary\"></p><p class=\"text-sm text-muted-foreground\">");
function o() {
	let n = [
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
		var o = i();
		return t(o, e(r, {
			each: n,
			children: (e) => (() => {
				var n = a(), r = n.firstChild, i = r.nextSibling, o = i.nextSibling, s = o.nextSibling;
				return t(r, () => e.name.split(" ").map((e) => e[0]).join("")), t(i, () => e.name), t(o, () => e.role), t(s, () => e.bio), n;
			})()
		})), o;
	})();
}
export { o as default };
