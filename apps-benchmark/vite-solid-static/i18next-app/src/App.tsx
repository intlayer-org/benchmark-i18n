import { Navigate, Route, Router } from "@solidjs/router";
import Layout from "./components/Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Team from "./pages/Team";

export default function App() {
  return (
    <Router>
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
    </Router>
  );
}
