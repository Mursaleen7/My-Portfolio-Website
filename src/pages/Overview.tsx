"use client";
import { Link } from "react-router-dom";
import { Star, GitFork, Users, MapPin, LinkIcon, Twitter, Building, Heart, ChevronDown, Linkedin, Github } from "lucide-react";

const Overview = () => {
  return (
    <div className="bg-github-bg text-github-text">
      <div className="max-w-[1280px] mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="md:w-1/4">
            <div className="space-y-4">
              
              <img
                src="3b7943db-d54a-45aa-9164-21c2c0ff2bb7.JPG"
                alt="Profile"
                className="w-full max-w-[296px] rounded-full border border-github-border "
              />
              <h1 className="text-[26px] font-semibold leading-[1.25] animate-fade-in">Mursaleen Sakoskar</h1>
              <p className="text-[20px] font-light leading-6 text-github-text-secondary animate-fade-in">Mursaleen7&nbsp;<span>·</span>&nbsp;he/him</p>
              <button className="w-full py-1 px-3 text-sm font-semibold bg-github-button-bg text-github-button-text border border-github-border rounded-md hover:bg-github-button-hover transition-colors animate-fade-in">
                Edit profile
              </button>
              <div className="flex items-center space-x-2 text-sm text-github-text-secondary animate-fade-in">
                <Users className="w-4 h-4" />
                <span>203 followers</span>
                <span>·</span>
                <span>336 following</span>
              </div>
              <div className="space-y-2 text-sm animate-fade-in">
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
                  <a href="#" className="text-github-accent hover:underline">
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
          {/* Main Content */}
          <div className="md:w-3/4">
            {/* README Section */}
            <div className="mb-4">
              <h2 className="text-base font-semibold mb-2 animate-fade-in">Mursaleen Sakoskar / README.md</h2>
              <div className="border border-github-border rounded-md bg-github-bg-secondary p-4 animate-fade-in">
                <h3 className="text-xl font-semibold mb-2">Hi there 👋</h3>
                <p className="mb-4">
                  I'm Mursaleen, a 3rd-year Computer Science student at Carleton University with a strong passion for software development, 
                  machine learning, and cybersecurity. I love solving complex problems and building scalable, efficient applications.
                </p>
                <ul className="list-disc list-inside">
                  <li>🔭 I'm currently exploring opportunities in Software Development, ML, and Cybersecurity</li>
                  <li>🌱 I'm learning advanced algorithms, system design, and security best practices</li>
                  <li>👯 I'm looking to collaborate on ML projects and security research</li>
                  <li>💬 Ask me about Python, JavaScript, AI/ML, or ethical hacking</li>
                  <li>📫 How to reach me: mursaleensakoskar@gmail.com</li>
                </ul>
              </div>
            </div>

            {/* Popular Repositories */}
<div className="space-y-4">
  <h3 className="text-base font-semibold animate-fade-in">Popular repositories</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      {
        title: "Plant Health AI",
        name: "plant-health-project",
        description:
          "An AI-driven solution that detects plant diseases, providing actionable insights to help farmers and gardeners keep their crops healthy.",
        language: "Python",
        stars: 56,
        forks: 12,
        status: "Public",
        githubUrl: "https://github.com/Mursaleen7/Plant-Disease-Detection-Website", // Add the GitHub URL
      },
      {
        title: "Email Spam/Fraud Detection",
        name: "email-fraud-detection",
        description:
          "A robust system that scans your emails to identify fraudulent messages and phishing attempts, ensuring secure communication.",
        language: "Python",
        stars: 45,
        forks: 7,
        status: "Public",
        githubUrl: "https://github.com/Mursaleen7/Email-Spam-Detection", // Add the GitHub URL
      },
      {
        title: "Computer Use (Public Beta)",
        name: "computer-use-beta",
        description:
          "A groundbreaking feature enabling AI to control a computer's desktop environment. It mimics human interactions by moving the cursor, clicking buttons, typing text, and operating web browsers to automate tasks like form filling, booking trips, and planning events.",
        language: "JavaScript",
        stars: 38,
        forks: 5,
        status: "Public Beta",
        githubUrl: "https://github.com/Mursaleen7/computer-use-beta", // Add the GitHub URL
      },
    ].map((project, index) => (
      <div
        key={index}
        className="p-4 border border-github-border rounded-md hover:border-github-hover transition-colors animate-fade-in"
      >
        <div className="flex items-center justify-between mb-2">
          <a
            href={project.githubUrl} // Use the `a` tag and `href` attribute
            target="_blank" // Open in a new tab
            className="text-github-accent font-semibold hover:underline"
          >
            {project.title}
          </a>
          <span className="text-xs text-github-text-secondary border border-github-border rounded-full px-2 py-0.5">
            {project.status}
          </span>
        </div>
        <p className="text-sm text-github-text-secondary mb-4">
          {project.description}
        </p>
        <div className="flex items-center space-x-4 text-xs text-github-text-secondary">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
            {project.language}
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1" />
            {project.stars}
          </div>
          <div className="flex items-center">
            <GitFork className="w-4 h-4 mr-1" />
            {project.forks}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

            {/* Contributions Section */}
            <div className="mt-8 rounded-md border border-[#30363d] bg-[#0d1117] p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[16px] font-semibold text-[#c9d1d9]">
                  {new Date().getFullYear()} contributions
                  <span className="ml-2 text-[#8b949e] font-normal">1,282 Total</span>
                </h2>
                <div className="relative inline-block text-left">
                  <button className="text-xs text-[#58a6ff] hover:text-[#58a6ff] flex items-center hover:underline">
                    Contribution settings
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="flex">
                  {/* Days of week labels */}
                  <div className="flex flex-col justify-start pr-2">
                    <div className="h-[10px]"></div> {/* Empty space for alignment */}
        <div className="grid grid-cols-1 gap-[3px] text-[11px] text-[#8b949e] leading-[10px]">
          <div className="h-[15px] leading-[15px]">Mon</div>
          <div className="h-[15px] leading-[15px]"></div>
          <div className="h-[15px] leading-[15px]">Wed</div>
          <div className="h-[15px] leading-[15px]"></div>
          <div className="h-[15px] leading-[15px]">Fri</div>
        </div>
      </div>

      {/* Contribution grid */}
      <div className="flex-1">
        <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
          {Array.from({ length: 357 }).map((_, index) => (
            <div
              key={index}
              className={`h-[10px] w-[10px] rounded-sm ${
                Math.random() > 0.7
                  ? ["bg-[#0e4429]", "bg-[#006d32]", "bg-[#26a641]", "bg-[#39d353]"][
                      Math.floor(Math.random() * 4)
                    ]
                  : "bg-[#161b22]"
              }`}
            />
          ))}
        </div>

        {/* Months labels */}
        <div className="flex text-[11px] text-[#8b949e] mt-2">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
            <span key={month} className="flex-1">
              {month}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>

  <div className="mt-4 pt-4 border-t border-[#30363d] flex items-center justify-between text-xs">
    <a href="#" className="text-[#58a6ff] hover:underline">
      Learn how we count contributions
    </a>
    <div className="flex items-center gap-2">
      <span className="text-[#8b949e]">Less</span>
      {['bg-[#161b22]', 'bg-[#0e4429]', 'bg-[#006d32]', 'bg-[#26a641]', 'bg-[#39d353]'].map((color, index) => (
        <div key={index} className={`h-[10px] w-[10px] rounded-sm ${color}`} />
      ))}
      <span className="text-[#8b949e]">More</span>
    </div>
  </div>
</div>
          </div>
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
  )
}

export default Overview



