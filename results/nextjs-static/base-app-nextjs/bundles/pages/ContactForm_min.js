"use client";
import { useId as e } from "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region components/pages/contact/ContactForm.tsx
function r() {
	let r = e(), i = e(), a = e(), o = e();
	return n("form", {
		className: "space-y-6",
		children: [
			n("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [n("div", { children: [t("label", {
					htmlFor: r,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Name"
				}), t("input", {
					id: r,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "Your name"
				})] }), n("div", { children: [t("label", {
					htmlFor: i,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Email"
				}), t("input", {
					id: i,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				})] })]
			}),
			n("div", { children: [t("label", {
				htmlFor: a,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Topic"
			}), n("select", {
				id: a,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					t("option", { children: "Bug Report" }),
					t("option", { children: "New Benchmark Idea" }),
					t("option", { children: "Methodology Question" }),
					t("option", { children: "Contribution" }),
					t("option", { children: "Other" })
				]
			})] }),
			n("div", { children: [t("label", {
				htmlFor: o,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Message"
			}), t("textarea", {
				id: o,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: "Describe your question or idea..."
			})] }),
			t("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: "Send Message"
			})
		]
	});
}
//#endregion
export { r as default };
