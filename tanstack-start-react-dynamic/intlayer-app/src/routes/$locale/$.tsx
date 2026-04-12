import { createFileRoute } from "@tanstack/react-router";

// Catch-all route for unknown paths - renders the 404 page
export const Route = createFileRoute("/$locale/$")({});
