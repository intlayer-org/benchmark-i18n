import { lazy } from "solid-js";
import { Navigate, Route } from "@solidjs/router";
import Layout from "./components/Layout";

// Eager load Home (initial landing page)
import Home from "./pages/Home";

// Lazy load other routes to create separate bundles per page
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Products = lazy(() => import("./pages/Products"));
const Settings = lazy(() => import("./pages/Settings"));
const Team = lazy(() => import("./pages/Team"));

export default function App() {
  return (
    <>
      <Route path="/" component={() => <Navigate href="/en" />} />
      <Route path="/:locale" component={Layout}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={FAQ} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/products" component={Products} />
        <Route path="/settings" component={Settings} />
        <Route path="/team" component={Team} />
      </Route>
      <Route path="*" component={NotFound} />
    </>
  );
}
