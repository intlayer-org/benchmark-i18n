const Contact = () => (
  <div className="container py-16">
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-2 text-3xl font-bold text-foreground">Contact Us</h1>
      <p className="mb-8 text-muted-foreground">
        Have questions, feedback, or partnership inquiries? We'd love to hear from you.
      </p>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">First Name</label>
            <input className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" placeholder="John" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">Last Name</label>
            <input className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" placeholder="Doe" />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-foreground">Email Address</label>
          <input type="email" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" placeholder="john@example.com" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-foreground">Subject</label>
          <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring">
            <option>General Inquiry</option>
            <option>Bug Report</option>
            <option>Feature Request</option>
            <option>Partnership</option>
            <option>Enterprise Sales</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-foreground">Message</label>
          <textarea rows={5} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" placeholder="Tell us what's on your mind..." />
        </div>
        <button className="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export default Contact;
