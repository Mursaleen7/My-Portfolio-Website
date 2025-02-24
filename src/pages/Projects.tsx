"use client"
import { Plus, Table, ListFilter, Search, ChevronDown, Users, MapPin, LinkIcon, Twitter, Building, Heart, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      "name": "Plant Health AI",
      "description": "AI-powered plant disease detection for small farmers and gardeners.",
      "progress": "In progress",
      "updated": "Updated 3 days ago"
    }
    ,
    {
      name: "Fraud Email Detection AI",
      description: "Native mobile application for iOS and Android",
      progress: "Planning",
      updated: "Updated 1 week ago",
    },
    {
      name: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization",
      progress: "Completed",
      updated: "Updated 2 weeks ago",
    },
    {
      name: "Plant Health AI",
      description: "Revolutionary AI solution for plant disease detection",
      progress: "In progress",
      updated: "Updated 2 hours ago",
    },
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
                <span>100 followers</span>
                <span>·</span>
                <span>50 following</span>
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
                  <a href="https://www.linkedin.com/in/mursaleen-sakoskar" className="text-github-accent hover:underline">
                    www.linkedin.com/in/mursaleen-sakoskar
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Github className="w-4 h-4 text-github-text-secondary" />
                  <a href="https://github.com/Mursaleen7" className="text-github-accent hover:underline">
                    https://github.com/Mursaleen7
                  </a>
                </div>
              </div>
            </div>
          </div>
          <main className="md:w-3/4">
            <h2 className="text-2xl font-semibold mb-6">Projects</h2>
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <button className="px-3 py-1 text-sm font-semibold bg-[#238636] text-white rounded-md hover:bg-[#2ea043] transition-colors flex items-center">
                  <Plus className="h-4 w-4 mr-2" />
                  New project
                </button>
                <button className="px-3 py-1 text-sm font-medium bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] transition-colors flex items-center">
                  <Table className="h-4 w-4 mr-2" />
                  Views
                  <ChevronDown className="h-4 w-4 ml-2" />
                </button>
              </div>
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <div className="relative flex-grow sm:flex-grow-0">
                  <input
                    type="text"
                    placeholder="Search all projects"
                    className="w-full px-3 py-1 text-sm bg-[#0d1117] border border-[#30363d] rounded-md focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] pl-8"
                  />
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#8b949e]" />
                </div>
                <button className="px-3 py-1 text-sm font-medium bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] transition-colors flex items-center whitespace-nowrap">
                  <ListFilter className="h-4 w-4 mr-2" />
                  Sort
                  <ChevronDown className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
            <div className="border border-[#30363d] rounded-md overflow-hidden">
              <div className="bg-[#161b22] px-4 py-2 flex items-center justify-between border-b border-[#30363d]">
                <span className="text-sm font-medium">All projects</span>
                <span className="text-xs text-[#8b949e]">{projects.length} open</span>
              </div>
              <div>
                {projects.map((project, index) => {
                  const slug = project.name.replace(/\s+/g, '-');
                  return (
                    <div
                      key={project.name}
                      className={`px-4 py-3 flex items-start justify-between hover:bg-[#161b22] ${
                        index !== projects.length - 1 ? "border-b border-[#30363d]" : ""
                      }`}
                    >
                      <div>
                        <Link
                          to={`/projects/${slug}`}
                          className="text-[#58a6ff] font-medium hover:underline"
                        >
                          {project.name}
                        </Link>
                        <p className="text-sm text-[#8b949e] mt-1">{project.description}</p>
                        <div className="text-xs text-[#8b949e] mt-2">{project.updated}</div>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          project.progress === "Completed" ? "bg-[#238636] text-white" : "bg-[#30363d] text-[#8b949e]"
                        }`}
                      >
                        {project.progress}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </main>
        </div>
      </div>
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

export default Projects;