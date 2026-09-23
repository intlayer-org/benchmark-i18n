"use client";
import { useId as e } from "react";
import { jsxDEV as t } from "react/jsx-dev-runtime";
var n = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/pages/contact/ContactForm.tsx";
function r() {
	let r = e(), i = e(), a = e(), o = e();
	return t("form", {
		className: "space-y-6",
		children: [
			t("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [t("div", { children: [t("label", {
					htmlFor: r,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Name"
				}, void 0, !1, {
					fileName: n,
					lineNumber: 15,
					columnNumber: 11
				}, this), t("input", {
					id: r,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "Your name"
				}, void 0, !1, {
					fileName: n,
					lineNumber: 21,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: n,
					lineNumber: 14,
					columnNumber: 9
				}, this), t("div", { children: [t("label", {
					htmlFor: i,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Email"
				}, void 0, !1, {
					fileName: n,
					lineNumber: 28,
					columnNumber: 11
				}, this), t("input", {
					id: i,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				}, void 0, !1, {
					fileName: n,
					lineNumber: 34,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: n,
					lineNumber: 27,
					columnNumber: 9
				}, this)]
			}, void 0, !0, {
				fileName: n,
				lineNumber: 13,
				columnNumber: 7
			}, this),
			t("div", { children: [t("label", {
				htmlFor: a,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Topic"
			}, void 0, !1, {
				fileName: n,
				lineNumber: 43,
				columnNumber: 9
			}, this), t("select", {
				id: a,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					t("option", { children: "Bug Report" }, void 0, !1, {
						fileName: n,
						lineNumber: 53,
						columnNumber: 11
					}, this),
					t("option", { children: "New Benchmark Idea" }, void 0, !1, {
						fileName: n,
						lineNumber: 54,
						columnNumber: 11
					}, this),
					t("option", { children: "Methodology Question" }, void 0, !1, {
						fileName: n,
						lineNumber: 55,
						columnNumber: 11
					}, this),
					t("option", { children: "Contribution" }, void 0, !1, {
						fileName: n,
						lineNumber: 56,
						columnNumber: 11
					}, this),
					t("option", { children: "Other" }, void 0, !1, {
						fileName: n,
						lineNumber: 57,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: n,
				lineNumber: 49,
				columnNumber: 9
			}, this)] }, void 0, !0, {
				fileName: n,
				lineNumber: 42,
				columnNumber: 7
			}, this),
			t("div", { children: [t("label", {
				htmlFor: o,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Message"
			}, void 0, !1, {
				fileName: n,
				lineNumber: 61,
				columnNumber: 9
			}, this), t("textarea", {
				id: o,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: "Describe your question or idea..."
			}, void 0, !1, {
				fileName: n,
				lineNumber: 67,
				columnNumber: 9
			}, this)] }, void 0, !0, {
				fileName: n,
				lineNumber: 60,
				columnNumber: 7
			}, this),
			t("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: "Send Message"
			}, void 0, !1, {
				fileName: n,
				lineNumber: 74,
				columnNumber: 7
			}, this)
		]
	}, void 0, !0, {
		fileName: n,
		lineNumber: 12,
		columnNumber: 5
	}, this);
}
export { r as default };
