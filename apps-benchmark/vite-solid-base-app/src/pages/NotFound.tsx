import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <div class="flex min-h-[60vh] items-center justify-center bg-muted/30">
      <div class="text-center">
        <h1 class="mb-4 text-4xl font-bold">404</h1>
        <p class="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <A
          href="/en"
          class="text-primary underline hover:text-primary/90"
        >
          Return to Home
        </A>
      </div>
    </div>
  );
}
