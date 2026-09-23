import { useId } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function ContactForm() {
	const nameId = useId();
	const emailId = useId();
	const topicId = useId();
	const messageId = useId();
	return jsxs("form", {
		className: "space-y-6",
		children: [
			jsxs("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [jsxs("div", { children: [jsx("label", {
					htmlFor: nameId,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Name"
				}), jsx("input", {
					id: nameId,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "Your name"
				})] }), jsxs("div", { children: [jsx("label", {
					htmlFor: emailId,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Email"
				}), jsx("input", {
					id: emailId,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				})] })]
			}),
			jsxs("div", { children: [jsx("label", {
				htmlFor: topicId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Topic"
			}), jsxs("select", {
				id: topicId,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					jsx("option", { children: "Bug Report" }),
					jsx("option", { children: "New Benchmark Idea" }),
					jsx("option", { children: "Methodology Question" }),
					jsx("option", { children: "Contribution" }),
					jsx("option", { children: "Other" })
				]
			})] }),
			jsxs("div", { children: [jsx("label", {
				htmlFor: messageId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Message"
			}), jsx("textarea", {
				id: messageId,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: "Describe your question or idea..."
			})] }),
			jsx("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: "Send Message"
			})
		]
	});
}
export { ContactForm as default };
