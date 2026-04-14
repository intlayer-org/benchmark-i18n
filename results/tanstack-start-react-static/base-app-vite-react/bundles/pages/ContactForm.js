import { useId } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/pages/contact/ContactForm.tsx
function ContactForm() {
	const nameId = useId();
	const emailId = useId();
	const topicId = useId();
	const messageId = useId();
	return /* @__PURE__ */ jsxs("form", {
		className: "space-y-6",
		onSubmit: (e) => e.preventDefault(),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
					htmlFor: nameId,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Name"
				}), /* @__PURE__ */ jsx("input", {
					id: nameId,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "Your name"
				})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
					htmlFor: emailId,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Email"
				}), /* @__PURE__ */ jsx("input", {
					id: emailId,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				})] })]
			}),
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
				htmlFor: topicId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Topic"
			}), /* @__PURE__ */ jsxs("select", {
				id: topicId,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					/* @__PURE__ */ jsx("option", { children: "Bug Report" }),
					/* @__PURE__ */ jsx("option", { children: "New Benchmark Idea" }),
					/* @__PURE__ */ jsx("option", { children: "Methodology Question" }),
					/* @__PURE__ */ jsx("option", { children: "Contribution" }),
					/* @__PURE__ */ jsx("option", { children: "Other" })
				]
			})] }),
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
				htmlFor: messageId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Message"
			}), /* @__PURE__ */ jsx("textarea", {
				id: messageId,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: "Describe your question or idea..."
			})] }),
			/* @__PURE__ */ jsx("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: "Send Message"
			})
		]
	});
}
//#endregion
export { ContactForm as default };
