"use client"
import { useParams } from "react-router-dom";
import {
  Code,
  Book,
  GitFork,
  Star,
  Eye,
  History,
  FileText,
  Folder,
  ChevronDown,
  AlertCircle,
  Play,
  Shield,
  GitGraphIcon as Graph,
  Settings,
} from "lucide-react";

const RepositoryDetail = () => {
  const { name } = useParams();

  // Simulated repository data for demo purposes.
  // In a real app, you might fetch details based on the 'name' parameter.
  const repositories = {
    "awesome-project": {
      name: "awesome-project",
      owner: "johndoe",
      description: "A collection of awesome things built with React and TypeScript.",
      stats: {
        stars: 128,
        forks: 45,
        watchers: 89,
      },
      readme: `# Awesome Project\n\nThis is a great project that showcases various features and best practices.\n\n## Features\n\n- Feature 1\n- Feature 2\n- Feature 3`,
      files: [
        { name: "src", type: "directory", path: "src" },
        { name: "package.json", type: "file", path: "package.json" },
        { name: "README.md", type: "file", path: "README.md" },
        { name: "tsconfig.json", type: "file", path: "tsconfig.json" },
      ],
      branches: ["main", "develop", "feature/new-ui"],
      lastCommit: {
        message: "Update README.md",
        author: "Mursaleen Sakoskar",
        date: "2 days ago",
      },
    },
    "portfolio-website": {
      name: "portfolio-website",
      owner: "johndoe",
      description: "Personal portfolio website built with React and TypeScript.",
      stats: {
        stars: 76,
        forks: 23,
        watchers: 42,
      },
      readme: `# Portfolio Website\n\nThis is my personal portfolio website showcasing my projects and skills.`,
      files: [
        { name: "public", type: "directory", path: "public" },
        { name: "src", type: "directory", path: "src" },
        { name: "package.json", type: "file", path: "package.json" },
        { name: "README.md", type: "file", path: "README.md" },
      ],
      branches: ["main"],
      lastCommit: {
        message: "Initial commit",
        author: "Mursaleen Sakoskar",
        date: "10 days ago",
      },
    },
  };

  // Use the repo name from the URL or fallback to a default repository
  const repository = repositories[name as keyof typeof repositories] || repositories["awesome-project"];

  return (
    <div className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
      <header className="bg-[#161b22] border-b border-[#30363d] py-4">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex items-center space-x-4">
            <Book className="w-5 h-5 text-[#8b949e]" />
            <div className="flex items-center text-[14px] font-semibold">
              <a href="#" className="text-[#58a6ff] hover:underline">
                {repository.owner}
              </a>
              <span className="mx-1">/</span>
              <a href="#" className="text-[#58a6ff] hover:underline">
                {repository.name}
              </a>
            </div>
            <span className="text-xs border border-[#30363d] rounded-full px-2 py-0.5">Public</span>
          </div>
        </div>
      </header>

      <nav className="bg-[#161b22] border-b border-[#30363d]">
        <div className="max-w-[1280px] mx-auto px-4">
          <ul className="flex space-x-4 overflow-x-auto">
            <li className="py-2 px-1 border-b-2 border-[#f78166] font-semibold">
              <a href="#" className="flex items-center">
                <Code className="w-4 h-4 mr-2" />
                Code
              </a>
            </li>
            <li className="py-2 px-1">
              <a href="#" className="flex items-center text-[#8b949e] hover:text-[#c9d1d9]">
                <AlertCircle className="w-4 h-4 mr-2" />
                Issues
              </a>
            </li>
            <li className="py-2 px-1">
              <a href="#" className="flex items-center text-[#8b949e] hover:text-[#c9d1d9]">
                <GitFork className="w-4 h-4 mr-2" />
                Pull requests
              </a>
            </li>
            <li className="py-2 px-1">
              <a href="#" className="flex items-center text-[#8b949e] hover:text-[#c9d1d9]">
                <Play className="w-4 h-4 mr-2" />
                Actions
              </a>
            </li>
            <li className="py-2 px-1">
              <a href="#" className="flex items-center text-[#8b949e] hover:text-[#c9d1d9]">
                <Graph className="w-4 h-4 mr-2" />
                Projects
              </a>
            </li>
            <li className="py-2 px-1">
              <a href="#" className="flex items-center text-[#8b949e] hover:text-[#c9d1d9]">
                <Shield className="w-4 h-4 mr-2" />
                Security
              </a>
            </li>
            <li className="py-2 px-1">
              <a href="#" className="flex items-center text-[#8b949e] hover:text-[#c9d1d9]">
                <Graph className="w-4 h-4 mr-2" />
                Insights
              </a>
            </li>
            <li className="py-2 px-1">
              <a href="#" className="flex items-center text-[#8b949e] hover:text-[#c9d1d9]">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="max-w-[1280px] mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex justify-between items-start mb-4">
            <p className="text-[#8b949e] text-sm max-w-[75%]">{repository.description}</p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-xs font-semibold bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] transition-colors flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                Watch
                <ChevronDown className="h-3 w-3 ml-1" />
              </button>
              <button className="px-3 py-1 text-xs font-semibold bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] transition-colors flex items-center">
                <GitFork className="h-4 w-4 mr-1" />
                Fork
                <span className="ml-1 px-2 py-0.5 bg-[#30363d] rounded-full">{repository.stats.forks}</span>
              </button>
              <button className="px-3 py-1 text-xs font-semibold bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] transition-colors flex items-center">
                <Star className="h-4 w-4 mr-1" />
                Star
                <span className="ml-1 px-2 py-0.5 bg-[#30363d] rounded-full">{repository.stats.stars}</span>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-xs text-[#8b949e]">
            <span className="flex items-center">
              <Star className="h-4 w-4 mr-1" fill="#8b949e" />
              {repository.stats.stars} stars
            </span>
            <span className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              {repository.stats.watchers} watching
            </span>
            <span className="flex items-center">
              <GitFork className="h-4 w-4 mr-1" />
              {repository.stats.forks} forks
            </span>
          </div>
        </div>

        <div className="bg-[#0d1117] border border-[#30363d] rounded-md mb-6">
          <div className="flex justify-between items-center p-4 border-b border-[#30363d]">
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm font-semibold bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] transition-colors flex items-center">
                main
                <ChevronDown className="h-4 w-4 ml-2" />
              </button>
              <a href="#" className="text-xs text-[#8b949e] hover:text-[#58a6ff]">
                <GitFork className="h-4 w-4 inline mr-1" />
                {repository.branches.length} branches
              </a>
              <a href="#" className="text-xs text-[#8b949e] hover:text-[#58a6ff]">
                <History className="h-4 w-4 inline mr-1" />
                {repository.lastCommit.date}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm font-semibold bg-[#238636] text-white rounded-md hover:bg-[#2ea043] transition-colors flex items-center">
                Code
                <ChevronDown className="h-4 w-4 ml-2" />
              </button>
              <button className="p-2 text-sm font-semibold bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] transition-colors">
                <FileText className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <div className="flex items-center">
                <img src="https://github.com/johndoe.png" alt="Mursaleen Sakoskar" className="w-5 h-5 rounded-full mr-2" />
                <a href="#" className="font-semibold hover:text-[#58a6ff]">
                  {repository.lastCommit.author}
                </a>
                <span className="ml-2 text-[#8b949e]">{repository.lastCommit.message}</span>
              </div>
              <div className="flex items-center text-[#8b949e]">
                <a href="#" className="hover:text-[#58a6ff]">
                  {repository.lastCommit.date}
                </a>
                <span className="mx-1">·</span>
                <a href="#" className="font-mono hover:text-[#58a6ff]">
                  abc1234
                </a>
                <History className="h-4 w-4 ml-2" />
              </div>
            </div>
            <div className="border border-[#30363d] rounded-md divide-y divide-[#30363d]">
              {repository.files.map((file) => (
                <div key={file.path} className="flex items-center justify-between p-2 hover:bg-[#161b22]">
                  <div className="flex items-center">
                    {file.type === "directory" ? (
                      <Folder className="w-4 h-4 mr-2 text-[#8b949e]" />
                    ) : (
                      <FileText className="w-4 h-4 mr-2 text-[#8b949e]" />
                    )}
                    <a href="#" className="text-[#58a6ff] hover:underline">
                      {file.name}
                    </a>
                  </div>
                  <span className="text-xs text-[#8b949e]">{repository.lastCommit.message}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#0d1117] border border-[#30363d] rounded-md">
          <div className="flex items-center justify-between p-4 border-b border-[#30363d]">
            <h2 className="text-base font-semibold flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              README.md
            </h2>
          </div>
          <div className="p-4 prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: repository.readme.replace(/\n/g, "<br>") }} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default RepositoryDetail;
