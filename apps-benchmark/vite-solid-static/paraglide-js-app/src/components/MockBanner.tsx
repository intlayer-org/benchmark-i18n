import * as m from "../paraglide/messages";

export default function MockBanner() {
  return (
    <div class="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">
      {m.mockBanner()}
    </div>
  );
}

