var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, n = t({
	content: () => i,
	default: () => a,
	key: () => r
}), r = "header", i = {
	g: "Home",
	i: "Methodology",
	j: "Mock Pages",
	l: "Products",
	k: "Pricing",
	n: "Team",
	a: "Blog",
	b: "Careers",
	d: "FAQ",
	c: "Contact",
	m: "Settings",
	e: "Go to GitHub",
	f: "Header",
	h: "i18n Bench"
}, a = {
	key: r,
	content: i
}, o = t({
	content: () => c,
	default: () => l,
	key: () => s
}), s = "theme-toggle", c = {
	d: "Theme mode: auto (system). Click to switch to light mode.",
	a: "Theme: Auto",
	b: "Theme: Dark",
	c: "Theme: Light",
	g: {
		fields: ["mode"],
		nodeType: "insertion",
		insertion: "Theme mode: {{mode}}. Click to switch mode."
	}
}, l = {
	key: s,
	content: c
};
export { n, o as t };
