import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import { Command, Moon, Sun } from "lucide-react";
import Overview from "./pages/Overview";
import Repositories from "./pages/Repositories";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";
import RepositoryDetail from "./pages/RepositoryDetail";
import ProjectDetail from "./pages/ProjectDetail";

const queryClient = new QueryClient();

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(
    localStorage.getItem("theme") as "dark" | "light" || "dark"
  );
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Overview" },
    { path: "/repositories", label: "Repositories" },
    { path: "/projects", label: "Projects" },
    { path: "/resume", label: "Resume" },
  ];

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "/" && !showSearch) {
        e.preventDefault();
        setShowSearch(true);
      }
      if (e.key === "Escape" && showSearch) {
        setShowSearch(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [showSearch]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="bg-github-light dark:bg-github-dark border-b border-github-border-light dark:border-github-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-github-text-light dark:text-github-text font-semibold text-xl"
              >
                Portfolio
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "bg-github-secondary-light dark:bg-github-secondary text-github-text-light dark:text-white"
                        : "text-github-text-light dark:text-github-text hover:bg-github-secondary-light dark:hover:bg-github-secondary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-github-text-light dark:text-github-text hover:bg-github-secondary-light dark:hover:bg-github-secondary rounded-md"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setShowSearch(true)}
              className="p-2 text-github-text-light dark:text-github-text hover:bg-github-secondary-light dark:hover:bg-github-secondary rounded-md flex items-center space-x-2"
            >
              <Command className="h-4 w-4" />
              <span className="text-sm">Press / to search</span>
            </button>
          </div>
        </div>
      </div>
      {showSearch && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-16"
          onClick={() => setShowSearch(false)}
        >
          <div
            className="bg-github-light dark:bg-github-dark border border-github-border-light dark:border-github-border rounded-lg w-full max-w-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              className="w-full p-4 bg-transparent text-github-text-light dark:text-github-text border-b border-github-border-light dark:border-github-border outline-none"
              placeholder="Search..."
            />
          </div>
        </div>
      )}
    </nav>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-github-light dark:bg-github-dark">
          <Navbar />
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/repositories" element={<Repositories />} />
            <Route path="/repositories/:name" element={<RepositoryDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:name" element={<ProjectDetail />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
