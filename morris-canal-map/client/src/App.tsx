import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Documentary from "@/pages/Documentary";
import Engineering from "@/pages/Engineering";
import Legacy from "@/pages/Legacy";
import NotFound from "@/pages/NotFound";
import Overview from "@/pages/Overview";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/overview" component={Overview} />
      <Route path="/engineering" component={Engineering} />
      <Route path="/legacy" component={Legacy} />
      <Route path="/documentary" component={Documentary} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
