"use client"
import { Link } from "react-router-dom";
import { Search, Book, Star, GitFork, ChevronDown, Users, MapPin, LinkIcon, Twitter, Building, Heart, Linkedin, Github } from "lucide-react";

const Repositories = () => {
  const repos = [
    {
      name: "Plant Disease Detection Website",
      description: "A collection of awesome things.",
      language: "Python",
      languageColor: "#2b7489",
      stars: 128,
      forks: 45,
      updated: "Updated 2 days ago",
      url: "https://github.com/Mursaleen7/Plant-Disease-Detection-Website"
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio website built with React and TypeScript.",
      language: "TypeScript",
      languageColor: "#f1e05a",
      stars: 76,
      forks: 23,
      updated: "Updated 5 days ago",
      url: "https://github.com/Mursaleen7/Portfolio-Website"
    },

    {
      name: "Email Fraud Detection",
      description: "Detects whether the email is malicious and gives a fraud score",
      language: "Python",
      languageColor: "#f1e05a",
      stars: 76,
      forks: 23,
      updated: "Updated 5 days ago",
      url: "https://github.com/Mursaleen7/Portfolio-Website"
    }

    
      
  ];

  return (
    <div className="bg-github-bg text-github-text">
      <div className="max-w-[1280px] mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="md:w-1/4">
            <div className="space-y-4">
              <img
                src="public/3b7943db-d54a-45aa-9164-21c2c0ff2bb7.JPG"
                alt="Profile"
                className="w-full max-w-[296px] rounded-full border border-github-border"
              />
              <h1 className="text-[26px] font-semibold leading-[1.25]">Mursaleen Sakoskar</h1>
              <p className="text-[20px] font-light leading-6 text-github-text-secondary">Mursaleen7&nbsp;&nbsp;&nbsp;he/him</p>
              <button className="w-full py-1 px-3 text-sm font-semibold bg-github-button-bg text-github-button-text border border-github-border rounded-md hover:bg-github-button-hover transition-colors">
                Edit profile
              </button>
              <div className="flex items-center space-x-2 text-sm text-github-text-secondary">
                <Users className="w-4 h-4" />
                <span>203 followers</span>
                <span>·</span>
                <span>336 following</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4 text-github-text-secondary" />
                  <span>Carleton University</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-github-text-secondary" />
                  <span>Ottawa, ON</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Linkedin className="w-4 h-4 text-github-text-secondary" />
                  <a href="https://www.linkedin.com/in/mursaleen-sakoskar" className="text-github-accent hover:underline" target="_blank" rel="noopener noreferrer">
                    www.linkedin.com/in/mursaleen-sakoskar
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Github className="w-4 h-4 text-github-text-secondary" />
                  <a href="https://github.com/Mursaleen7" className="text-github-accent hover:underline" target="_blank" rel="noopener noreferrer">
                    https://github.com/Mursaleen7
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="md:w-3/4">
            <h2 className="text-2xl font-semibold mb-6">Repositories</h2>
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <div className="relative flex-grow sm:max-w-[440px]">
                <input
                  type="text"
                  placeholder="Find a repository..."
                  className="w-full px-3 py-1.5 text-sm bg-[#0d1117] border border-[#30363d] rounded-md focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] pl-8"
                />
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#8b949e]" />
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1.5 text-sm font-medium bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] transition-colors flex items-center">
                  Type
                  <ChevronDown className="h-4 w-4 ml-2" />
                </button>
                <button className="px-3 py-1.5 text-sm font-medium bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] transition-colors flex items-center">
                  Language
                  <ChevronDown className="h-4 w-4 ml-2" />
                </button>
                <button className="px-3 py-1.5 text-sm font-medium bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] transition-colors flex items-center">
                  Sort
                  <ChevronDown className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>

            <div className="border-t border-[#30363d]">
              {repos.map((repo, index) => (
                <div
                  key={repo.name}
                  className={`py-6 flex items-start justify-between ${
                    index !== repos.length - 1 ? "border-b border-[#30363d]" : ""
                  }`}
                >
                  <div className="flex-grow pr-4">
                    <div className="flex items-center mb-1">
                      <Book className="h-4 w-4 mr-2 text-[#8b949e]" />
                      <a
                        href={repo.url}
                        className="text-[#58a6ff] text-xl font-semibold hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {repo.name}
                      </a>
                    </div>
                    <p className="text-sm text-[#8b949e] mb-2">{repo.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-[#8b949e]">
                      {repo.language && (
                        <div className="flex items-center">
                          <div
                            className="w-3 h-3 rounded-full mr-1"
                            style={{ backgroundColor: repo.languageColor }}
                          ></div>
                          {repo.language}
                        </div>
                      )}
                      {repo.stars > 0 && (
                        <a href="#" className="flex items-center hover:text-[#58a6ff]">
                          <Star className="w-4 h-4 mr-1" />
                          {repo.stars}
                        </a>
                      )}
                      {repo.forks > 0 && (
                        <a href="#" className="flex items-center hover:text-[#58a6ff]">
                          <GitFork className="w-4 h-4 mr-1" />
                          {repo.forks}
                        </a>
                      )}
                      <span>{repo.updated}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="px-3 py-1 text-xs font-medium bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] transition-colors flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Star
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-github-border bg-github-bg-secondary">
        <div className="max-w-[1280px] mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-github-text-secondary">
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
              <li>© 2023 GitHub, Inc.</li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline">
                  Contact GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline">
                  Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline">
                  About
                </a>
              </li>
            </ul>
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>Made with love by the GitHub team</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Repositories;
