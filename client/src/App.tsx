import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App({ ssrPath }: { ssrPath?: string } = {}) {
  return (
    <ErrorBoundary>
      <Router ssrPath={ssrPath}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}
