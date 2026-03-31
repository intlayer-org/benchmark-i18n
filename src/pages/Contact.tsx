const Contact = () => (
  <div className="container py-16">
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-2 text-3xl font-bold text-foreground">Get in Touch</h1>
      <p className="mb-8 text-muted-foreground">
        Have ideas, found a bug, or want to contribute a benchmark? Reach out to us
        at{" "}
        <a href="mailto:contact@intlayer.org" className="text-primary hover:underline">
          contact@intlayer.org
        </a>
        .
      </p>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">Name</label>
            <input className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" placeholder="Your name" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">Email</label>
            <input type="email" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" placeholder="you@example.com" />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-foreground">Topic</label>
          <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
            <option>Bug Report</option>
            <option>New Benchmark Idea</option>
            <option>Methodology Question</option>
            <option>Contribution</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-foreground">Message</label>
          <textarea rows={5} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" placeholder="Describe your question or idea..." />
        </div>
        <button className="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export default Contact;
