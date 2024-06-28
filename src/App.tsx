import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RepoDetails from "./components/RepoDetails";
import PageNotFound from "./components/NotFoundPage";
import ErrorBoundary from "./components/ErrorBoundary";
import { HelmetProvider } from "react-helmet-async";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/RepoDetails/:id" element={<RepoDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;
