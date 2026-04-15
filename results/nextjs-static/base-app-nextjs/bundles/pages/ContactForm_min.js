"use client";
import { useId as e } from "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region components/pages/contact/ContactForm.tsx
function r() {
	let r = e(), i = e(), a = e(), o = e();
	return /* @__PURE__ */ n("form", {
		className: "space-y-6",
		onSubmit: (e) => e.preventDefault(),
		children: [
			/* @__PURE__ */ n("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ n("div", { children: [/* @__PURE__ */ t("label", {
					htmlFor: r,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Name"
				}), /* @__PURE__ */ t("input", {
					id: r,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "Your name"
				})] }), /* @__PURE__ */ n("div", { children: [/* @__PURE__ */ t("label", {
					htmlFor: i,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Email"
				}), /* @__PURE__ */ t("input", {
					id: i,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				})] })]
			}),
			/* @__PURE__ */ n("div", { children: [/* @__PURE__ */ t("label", {
				htmlFor: a,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Topic"
			}), /* @__PURE__ */ n("select", {
				id: a,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					/* @__PURE__ */ t("option", { children: "Bug Report" }),
					/* @__PURE__ */ t("option", { children: "New Benchmark Idea" }),
					/* @__PURE__ */ t("option", { children: "Methodology Question" }),
					/* @__PURE__ */ t("option", { children: "Contribution" }),
					/* @__PURE__ */ t("option", { children: "Other" })
				]
			})] }),
			/* @__PURE__ */ n("div", { children: [/* @__PURE__ */ t("label", {
				htmlFor: o,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Message"
			}), /* @__PURE__ */ t("textarea", {
				id: o,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: "Describe your question or idea..."
			})] }),
			/* @__PURE__ */ t("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: "Send Message"
			})
		]
	});
}
//#endregion
export { r as default };
