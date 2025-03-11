import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect, useMemo, useRef } from "react";
import { Command, Moon, Sun, Search, Code, FileText, User, Bookmark, Calendar, XCircle, Menu, X, } from "lucide-react";
import Overview from "./pages/Overview";
import Repositories from "./pages/Repositories";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";
import RepositoryDetail from "./pages/RepositoryDetail";
import ProjectDetail from "./pages/ProjectDetail";

// Mock data for search functionality
const searchableContent = [
  // Repositories
  {
    type: 'repository',
    title: 'Plant Health AI',
    description: 'An AI-driven solution that detects plant diseases, providing actionable insights to help farmers and gardeners keep their crops healthy.',
    tags: ['AI', 'Python', 'Machine Learning', 'Agriculture'],
    path: '/repositories/plant-health-project'
  },
  {
    type: 'repository',
    title: 'Email Spam/Fraud Detection',
    description: 'A robust system that scans your emails to identify fraudulent messages and phishing attempts, ensuring secure communication.',
    tags: ['Security', 'Python', 'Machine Learning', 'Email'],
    path: '/repositories/email-fraud-detection'
  },
  {
    type: 'repository',
    title: 'Computer Use (Public Beta)',
    description: 'A groundbreaking feature enabling AI to control a computer\'s desktop environment. It mimics human interactions by moving the cursor, clicking buttons, typing text, and operating web browsers.',
    tags: ['AI', 'JavaScript', 'Automation', 'UI'],
    path: '/repositories/computer-use-beta'
  },
  // Projects
  {
    type: 'project',
    title: 'Cybersecurity Dashboard',
    description: 'Real-time monitoring system for network threats and vulnerabilities with intuitive visualization.',
    tags: ['Security', 'React', 'Node.js', 'Data Visualization'],
    path: '/projects/cybersecurity-dashboard'
  },
  {
    type: 'project',
    title: 'ML Model Marketplace',
    description: 'Platform for discovering, sharing, and deploying machine learning models for various applications.',
    tags: ['Machine Learning', 'Python', 'React', 'API'],
    path: '/projects/ml-model-marketplace'
  },
  // Resume sections
  {
    type: 'resume',
    title: 'Education - Carleton University',
    description: 'Bachelor of Computer Science, GPA: 3.95/4.0, Expected graduation: 2026',
    tags: ['Education', 'Computer Science', 'Carleton'],
    path: '/resume#education'
  },
  {
    type: 'resume',
    title: 'Skills - Programming Languages',
    description: 'Python, JavaScript, TypeScript, Java, C++, SQL, HTML/CSS',
    tags: ['Skills', 'Programming', 'Languages'],
    path: '/resume#skills'
  },
  // Overview
  {
    type: 'overview',
    title: 'About Me',
    description: 'I\'m Mursaleen, a 3rd-year Computer Science student at Carleton University with a strong passion for software development, machine learning, and cybersecurity.',
    tags: ['About', 'Profile', 'Introduction'],
    path: '/#about'
  }
];

const queryClient = new QueryClient();

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    const saved = localStorage.getItem("recentSearches");
    return saved ? JSON.parse(saved) : [];
  });
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  const navItems = [
    { path: "/", label: "Overview", icon: <User className="h-5 w-5 mr-2" /> },
    { path: "/repositories", label: "Repositories", icon: <Code className="h-5 w-5 mr-2" /> },
    { path: "/projects", label: "Projects", icon: <Bookmark className="h-5 w-5 mr-2" /> },
    { path: "/resume", label: "Resume", icon: <FileText className="h-5 w-5 mr-2" /> },
  ];

  // Filter search results based on query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase().trim();
    return searchableContent.filter(item => {
      // Check title, description, and tags
      return (
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }).slice(0, 8); // Limit to 8 results for better UX
  }, [searchQuery]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Keyboard shortcuts for search
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

  // Theme handling
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Save recent searches
  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleItemClick = (item: any) => {
    // Add to recent searches if not already there
    if (!recentSearches.includes(item.title)) {
      const updatedSearches = [item.title, ...recentSearches.slice(0, 4)];
      setRecentSearches(updatedSearches);
    }
    setShowSearch(false);
    navigate(item.path);
  };

  const handleRecentSearchClick = (searchTerm: string) => {
    setSearchQuery(searchTerm);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Function to get icon based on content type
  const getIconForType = (type: string) => {
    switch (type) {
      case 'repository':
        return <Code className="h-4 w-4 mr-2 text-github-text-secondary-light dark:text-github-text-secondary" />;
      case 'project':
        return <Bookmark className="h-4 w-4 mr-2 text-github-text-secondary-light dark:text-github-text-secondary" />;
      case 'resume':
        return <FileText className="h-4 w-4 mr-2 text-github-text-secondary-light dark:text-github-text-secondary" />;
      case 'overview':
        return <User className="h-4 w-4 mr-2 text-github-text-secondary-light dark:text-github-text-secondary" />;
      default:
        return <Search className="h-4 w-4 mr-2 text-github-text-secondary-light dark:text-github-text-secondary" />;
    }
  };

  return (
    <>
      {/* Desktop and mobile-friendly top navbar */}
      <nav className="sticky top-0 bg-github-light dark:bg-github-dark border-b border-github-border-light dark:border-github-border z-40">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left section: Logo and desktop navigation */}
            <div className="flex items-center">
              {/* Mobile hamburger button */}
              <div className="flex items-center md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-md text-github-text-secondary-light dark:text-github-text-secondary hover:bg-github-secondary-light dark:hover:bg-github-secondary focus:outline-none"
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
              
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link
                  to="/"
                  className="text-github-text-light dark:text-github-text font-semibold text-xl flex items-center"
                >
                 
                  <span className="hidden xs:block">Portfolio</span>
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:ml-6 md:flex md:space-x-2">
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
            
            {/* Right section: Search and theme toggle */}
            <div className="flex items-center space-x-2">
              {/* Responsive Search Button */}
              <div
                onClick={() => setShowSearch(true)}
                className="flex items-center cursor-pointer"
              >
                <div className="relative flex items-center">
                  <div className="flex h-9 w-9 sm:w-32 md:w-64 items-center rounded-md border border-github-border-light dark:border-github-border bg-github-secondary-light dark:bg-github-secondary/30 px-3 text-sm transition-all">
                    <Search className="h-4 w-4 shrink-0 opacity-50" />
                    <span className="ml-2 text-sm text-github-text-secondary-light dark:text-github-text-secondary hidden sm:block">Search...</span>
                    <div className="ml-auto hidden sm:flex items-center gap-1">
                      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-github-border-light dark:border-github-border bg-github-light/60 dark:bg-github-secondary px-1.5 font-mono text-xs font-medium text-github-text-secondary-light dark:text-github-text-secondary">
                        /
                      </kbd>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-github-text-secondary-light dark:text-github-text-secondary hover:bg-github-secondary-light dark:hover:bg-github-secondary focus:outline-none"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed inset-y-0 left-0 z-50 w-64 bg-github-light dark:bg-github-dark shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="px-4 py-4 border-b border-github-border-light dark:border-github-border">
            <span className="text-github-text-light dark:text-github-text font-semibold">Menu</span>
          </div>
          
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-3 py-3 rounded-md text-base font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-github-secondary-light dark:bg-github-secondary text-github-text-light dark:text-white"
                  : "text-github-text-light dark:text-github-text hover:bg-github-secondary-light dark:hover:bg-github-secondary"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Search Modal */}
      {showSearch && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-start justify-center pt-16 px-4"
          onClick={() => setShowSearch(false)}
        >
          <div
            className="bg-github-light dark:bg-github-dark border border-github-border-light dark:border-github-border rounded-lg shadow-lg w-full max-w-xl mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center p-3 border-b border-github-border-light dark:border-github-border">
              <Search className="h-5 w-5 mr-2 text-github-text-secondary-light dark:text-github-text-secondary" />
              <input
                autoFocus
                className="w-full bg-transparent text-github-text-light dark:text-github-text outline-none placeholder-github-text-secondary-light dark:placeholder-github-text-secondary"
                placeholder="Search repositories, projects, and more..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-github-text-secondary-light dark:text-github-text-secondary hover:text-github-text-light dark:hover:text-github-text"
                >
                  <XCircle className="h-5 w-5" />
                </button>
              )}
              <kbd className="ml-2 inline-flex h-5 select-none items-center gap-1 rounded border border-github-border-light dark:border-github-border bg-github-light/60 dark:bg-github-secondary px-1.5 font-mono text-xs font-medium text-github-text-secondary-light dark:text-github-text-secondary">
                ESC
              </kbd>
            </div>
            <div className="p-4 max-h-[70vh] overflow-y-auto">
              {/* Search Results */}
              {searchQuery.trim() !== "" && (
                <div className="mb-6">
                  <div className="text-sm font-medium text-github-text-secondary-light dark:text-github-text-secondary mb-3">
                    {searchResults.length > 0 ? `Results for "${searchQuery}"` : `No results for "${searchQuery}"`}
                  </div>
                  {searchResults.length > 0 ? (
                    <div className="space-y-2">
                      {searchResults.map((result, index) => (
                        <div
                          key={index}
                          className="p-2 hover:bg-github-secondary-light dark:hover:bg-github-secondary/50 rounded-md cursor-pointer"
                          onClick={() => handleItemClick(result)}
                        >
                          <div className="flex items-center">
                            {getIconForType(result.type)}
                            <div>
                              <div className="text-github-text-light dark:text-github-text font-medium truncate">
                                {result.title}
                                <span className="ml-2 text-xs text-github-text-secondary-light dark:text-github-text-secondary px-2 py-0.5 rounded-full border border-github-border-light dark:border-github-border">
                                  {result.type}
                                </span>
                              </div>
                              <div className="text-xs text-github-text-secondary-light dark:text-github-text-secondary line-clamp-1">
                                {result.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-4 text-github-text-secondary-light dark:text-github-text-secondary">
                      No matching results found. Try a different search term.
                    </div>
                  )}
                </div>
              )}
              
              {/* Recent Searches */}
              {recentSearches.length > 0 && !searchResults.length && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-medium text-github-text-secondary-light dark:text-github-text-secondary">
                      Recent Searches
                    </div>
                    <button
                      onClick={clearRecentSearches}
                      className="text-xs text-github-text-secondary-light dark:text-github-text-secondary hover:text-github-text-light dark:hover:text-github-text"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="space-y-2">
                    {recentSearches.map((search, index) => (
                      <div
                        key={index}
                        className="p-2 hover:bg-github-secondary-light dark:hover:bg-github-secondary/50 rounded-md cursor-pointer flex items-center"
                        onClick={() => handleRecentSearchClick(search)}
                      >
                        <Calendar className="h-4 w-4 mr-2 text-github-text-secondary-light dark:text-github-text-secondary" />
                        <span className="text-github-text-light dark:text-github-text">{search}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Search tips */}
              {!searchQuery.trim() && !recentSearches.length && (
                <div className="text-center py-6">
                  <div className="text-sm font-medium text-github-text-secondary-light dark:text-github-text-secondary mb-2">
                    Search Tips
                  </div>
                  <div className="text-xs text-github-text-secondary-light dark:text-github-text-secondary">
                    <p>Try searching for repositories, projects, or skills</p>
                    <p className="mt-1">Example: "Python", "AI", "Machine Learning"</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
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
