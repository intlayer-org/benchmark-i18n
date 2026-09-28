import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-muted/30">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          Oops! Page not found
        </p>
        <Link
          to="/en"
          className="text-primary underline hover:text-primary/90"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
