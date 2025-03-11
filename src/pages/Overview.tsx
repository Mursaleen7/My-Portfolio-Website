import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Star, GitFork, Users, MapPin, LinkIcon, Building, Heart, ChevronDown, Linkedin, Github, Code, Book, CheckCircle2, Cpu, X } from "lucide-react";

// Define animation keyframes in a style block that will be added to the document head
const animationStyles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes popIn {
    0% { opacity: 0; transform: scale(0.5); }
    50% { opacity: 1; transform: scale(1.2); }
    100% { opacity: 1; transform: scale(1); }
  }
  
  @keyframes progressBar {
    from { width: 0%; }
    to { width: 100%; }
  }
  
  @keyframes modalFadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  .animate-slideUp {
    animation: slideUp 0.5s ease-out forwards;
  }
  
  .animate-popIn {
    animation: popIn 0.3s ease-out forwards;
  }
  
  .animate-progressBar {
    animation: progressBar 1s ease-out forwards;
  }
  
  .animate-modalFadeIn {
    animation: modalFadeIn 0.3s ease-out forwards;
  }
`;

const Overview: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadSequence, setLoadSequence] = useState({
    profile: false,
    readme: false,
    repos: false,
    activity: false
  });
  
  // Profile state
  const [followers, setFollowers] = useState(203);
  const [following, setFollowing] = useState(336);
  const [showEditModal, setShowEditModal] = useState(false);
  
  // Refs for form values
  const followersInputRef = useRef<HTMLInputElement>(null);
  const followingInputRef = useRef<HTMLInputElement>(null);
  
  // Ref for modal
  const modalRef = useRef<HTMLDivElement>(null);

  // Add animation styles to the document head once when component mounts
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = animationStyles;
    document.head.appendChild(styleElement);
    
    // Cleanup function to remove style when component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  
  // Handle clicks outside the modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowEditModal(false);
      }
    };
    
    if (showEditModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showEditModal]);

  // Sequential loading animation effect similar to GitHub
  useEffect(() => {
    // Start loading sequence
    const sequence = async () => {
      // Profile section loads first
      setTimeout(() => {
        setLoadSequence(prev => ({ ...prev, profile: true }));
        
        // README section loads second
        setTimeout(() => {
          setLoadSequence(prev => ({ ...prev, readme: true }));
          
          // Repos section loads third
          setTimeout(() => {
            setLoadSequence(prev => ({ ...prev, repos: true }));
            
            // Activity section loads last
            setTimeout(() => {
              setLoadSequence(prev => ({ ...prev, activity: true }));
              setIsLoaded(true);
            }, 200);
          }, 150);
        }, 150);
      }, 100);
    };
    
    sequence();
  }, []);
  
  // Handle opening the edit modal
  const handleEditProfile = () => {
    setShowEditModal(true);
  };
  
  // Handle saving profile changes
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (followersInputRef.current && followingInputRef.current) {
      const newFollowers = parseInt(followersInputRef.current.value);
      const newFollowing = parseInt(followingInputRef.current.value);
      
      if (!isNaN(newFollowers)) {
        setFollowers(newFollowers);
      }
      
      if (!isNaN(newFollowing)) {
        setFollowing(newFollowing);
      }
    }
    
    setShowEditModal(false);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4 py-6 relative z-10">
        {/* Content wrapper with glass effect for better readability against forest bg */}
        <div className="backdrop-blur-sm bg-github-bg bg-opacity-40 rounded-lg p-4 md:p-6 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Sidebar */}
            <div className={`md:w-1/4 transition-opacity duration-300 ease-in-out ${loadSequence.profile ? 'opacity-100' : 'opacity-0'}`}>
              <div className="space-y-4 sticky top-4">
                <div className="aspect-square w-full max-w-[296px] mx-auto md:mx-0 overflow-hidden rounded-full border-2 border-github-border shadow-lg relative p-1 bg-github-bg">
                  <img
                    src="3b7943db-d54a-45aa-9164-21c2c0ff2bb7.JPG"
                    alt="Profile"
                    className="w-full h-full rounded-full transform transition-transform duration-500 hover:scale-105 object-cover"
                    loading="lazy"
                  />
                </div>
                <h1 className="text-[26px] font-semibold leading-[1.25] text-white">Mursaleen Sakoskar</h1>
                <p className="text-[20px] font-light leading-6 text-gray-300">Mursaleen7&nbsp;<span>·</span>&nbsp;he/him</p>
                
                <button 
                  onClick={handleEditProfile}
                  className="w-full py-1 px-3 text-sm font-semibold bg-github-button-bg text-github-button-text border border-github-border rounded-md hover:bg-github-button-hover transform active:scale-[0.98] transition-all duration-150"
                  aria-label="Edit profile"
                >
                  Edit profile
                </button>
                
                <div className="flex items-center space-x-2 text-sm text-github-text-secondary">
                  <Users className="w-4 h-4" />
                  <span>{followers.toLocaleString()} followers</span>
                  <span>·</span>
                  <span>{following.toLocaleString()} following</span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 group transition-all duration-200">
                    <Building className="w-4 h-4 text-github-text-secondary group-hover:text-github-accent" />
                    <span className="group-hover:text-github-accent transition-colors duration-200">Carleton University</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 group transition-all duration-200">
                    <MapPin className="w-4 h-4 text-github-text-secondary group-hover:text-github-accent" />
                    <span className="group-hover:text-github-accent transition-colors duration-200">Ottawa, ON</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 group transition-all duration-200">
                    <Linkedin className="w-4 h-4 text-github-text-secondary group-hover:text-github-accent" />
                    <a href="https://www.linkedin.com/in/mursaleen-sakoskar/" className="text-github-accent hover:underline group-hover:text-opacity-80 transition-all duration-200">
                    www.linkedin.com/in/mursaleen-sakoskar
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-2 group transition-all duration-200">
                    <Github className="w-4 h-4 text-github-text-secondary group-hover:text-github-accent" />
                    <a href="https://github.com/Mursaleen7" className="text-github-accent hover:underline group-hover:text-opacity-80 transition-all duration-200">
                      https://github.com/Mursaleen7  
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:w-3/4">
              {/* README Section */}
              <div className={`mb-8 transition-all duration-500 ease-in-out transform ${loadSequence.readme ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex items-center mb-2">
                  <h2 className="text-base font-semibold text-white">Mursaleen Sakoskar / README.md</h2>
                </div>
                <div className="border border-github-border rounded-md bg-github-bg-secondary bg-opacity-70 backdrop-blur-sm p-4 transition-all duration-200 hover:border-github-border-hover shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-github-heading">Hi there 👋</h3>
                  <p className="mb-4 text-github-text leading-relaxed">
                    I'm Mursaleen, a 3rd-year Computer Science student at Carleton University with a strong passion for software development, 
                    machine learning, and cybersecurity. I love solving complex problems and building scalable, efficient applications.
                  </p>
                  <ul className="list-disc list-inside space-y-1.5">
                    <li className="transition-transform duration-150 hover:translate-x-1">🔭 I'm currently exploring opportunities in Software Development, ML, and Cybersecurity</li>
                    <li className="transition-transform duration-150 hover:translate-x-1">🌱 I'm learning advanced algorithms, system design, and security best practices</li>
                    <li className="transition-transform duration-150 hover:translate-x-1">👯 I'm looking to collaborate on ML projects and security research</li>
                    <li className="transition-transform duration-150 hover:translate-x-1">💬 Ask me about Python, JavaScript, AI/ML, or ethical hacking</li>
                    <li className="transition-transform duration-150 hover:translate-x-1">📫 How to reach me: mursaleensakoskar@gmail.com</li>
                  </ul>
                </div>
              </div>

              {/* Popular Repositories */}
              <div className={`space-y-4 mb-8 transition-all duration-500 ease-in-out transform ${loadSequence.repos ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h3 className="text-base font-semibold flex items-center text-white">
                  <span>Popular repositories</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Plant Health AI",
                      name: "plant-health-project",
                      description:
                        "An AI-driven solution that detects plant diseases, providing actionable insights to help farmers and gardeners keep their crops healthy.",
                      language: "Python",
                      languageColor: "#3572A5",
                      stars: 56,
                      forks: 12,
                      status: "Public",
                      githubUrl: "https://github.com/Mursaleen7/Plant-Disease-Detection-Website",
                    },
                    {
                      title: "Email Spam/Fraud Detection",
                      name: "email-fraud-detection",
                      description:
                        "A robust system that scans your emails to identify fraudulent messages and phishing attempts, ensuring secure communication.",
                      language: "Go",
                      languageColor: "#4DAAD3",
                      stars: 45,
                      forks: 7,
                      status: "Public",
                      githubUrl: "https://github.com/Mursaleen7/Email-Spam-Detection",
                    },
                    {
                      title: "Computer Use (Public Beta)",
                      name: "computer-use-beta",
                      description:
                        "A groundbreaking feature enabling AI to control a computer's desktop environment. It mimics human interactions by moving the cursor, clicking buttons, typing text, and operating web browsers to automate tasks like form filling, booking trips, and planning events.",
                      language: "TypeScript",
                      languageColor: "#4577C0",
                      stars: 38,
                      forks: 5,
                      status: "Public Beta",
                      githubUrl: "https://github.com/Mursaleen7/computer-use-beta",
                    },
                  ].map((project, index) => (
                    <div
                      key={index}
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                      className="p-4 border border-github-border rounded-md hover:border-github-border-hover transform hover:-translate-y-1 transition-all duration-300 shadow-lg bg-github-bg-secondary bg-opacity-70 backdrop-blur-sm animate-slideUp"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-github-accent font-semibold hover:underline flex items-center group"
                        >
                          {project.title}
                          <LinkIcon className="w-3.5 h-3.5 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                        <span className="text-xs text-github-text-secondary border border-github-border rounded-full px-2 py-0.5 transition-colors duration-200 hover:bg-github-border bg-opacity-50">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-sm text-github-text-secondary mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-github-text-secondary">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: project.languageColor }}></div>
                          {project.language}
                        </div>
                        <div className="flex items-center group transition-colors duration-200 hover:text-github-text">
                          <Star className="w-4 h-4 mr-1 group-hover:fill-current transition-all duration-300" />
                          {project.stars}
                        </div>
                        <div className="flex items-center group transition-colors duration-200 hover:text-github-text">
                          <GitFork className="w-4 h-4 mr-1 group-hover:fill-current transition-all duration-300" />
                          {project.forks}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Updated Portfolio Activity Section (formerly Contributions) */}
              <div className={`mt-8 rounded-md border border-[#30363d] bg-[#0d1117] bg-opacity-80 backdrop-blur-sm p-4 transition-all duration-500 ease-in-out transform shadow-lg ${loadSequence.activity ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <h2 className="text-[16px] font-semibold text-[#c9d1d9]">
                    {new Date().getFullYear()} Portfolio Activity
                    <span className="ml-2 text-[#8b949e] font-normal text-sm block sm:inline mt-1 sm:mt-0">1,282 Total Activities</span>
                  </h2>
                  <div className="relative inline-block text-left">
                    <button className="text-xs text-[#58a6ff] hover:text-[#58a6ff] flex items-center hover:underline group">
                      Activity settings
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                    </button>
                  </div>
                </div>

                {/* Mobile Activity Summary (visible on small screens) */}
                <div className="block sm:hidden mb-4">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { type: "Code Projects", count: 324, color: "#0e4429", width: "65%" },
                      { type: "Courses", count: 218, color: "#006d32", width: "40%" },
                      { type: "Skills", count: 423, color: "#26a641", width: "75%" },
                      { type: "Articles", count: 317, color: "#39d353", width: "60%" }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="bg-[#161b22] bg-opacity-80 backdrop-blur-sm border border-[#30363d] rounded-md p-3 hover:border-[#6e7681] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                        style={{
                          animationDelay: `${index * 100}ms`,
                        }}
                      >
                        <div className="text-[#8b949e] text-xs mb-2">{item.type}</div>
                        <div className="text-[#c9d1d9] text-lg font-semibold">{item.count}</div>
                        <div className="w-full h-2 bg-[#161b22] rounded-full overflow-hidden mt-2">
                          <div className="h-full transition-all duration-1000 origin-left ease-out" style={{width: '0%'}}></div>
                          <div 
                            className="h-full transition-all duration-1000 origin-left ease-out animate-progressBar" 
                            style={{backgroundColor: item.color, width: item.width}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desktop Activity Grid (hidden on mobile) */}
                <div className="hidden sm:block relative">
                  <div className="flex animate-fadeIn">
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

                    {/* Portfolio Activity grid */}
                    <div className="flex-1">
                      <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
                        {Array.from({ length: 357 }).map((_, index) => {
                          // Generate weighted random values to create a more realistic pattern
                          const rand = Math.random();
                          let color;
                          
                          if (rand > 0.7) {
                            // Determine activity type with different colors
                            const activityType = Math.floor(Math.random() * 4);
                            switch(activityType) {
                              case 0: // Code projects
                                color = "bg-[#0e4429]";
                                break;
                              case 1: // Courses completed
                                color = "bg-[#006d32]";
                                break;
                              case 2: // Skills practiced
                                color = "bg-[#26a641]";
                                break;
                              case 3: // Technical blogs/articles
                                color = "bg-[#39d353]";
                                break;
                              default:
                                color = "bg-[#161b22]";
                            }
                          } else {
                            color = "bg-[#161b22]";
                          }
                          
                          return (
                            <div
                              key={index}
                              className={`h-[10px] w-[10px] rounded-sm ${color} transition-all duration-200 transform hover:scale-150 hover:z-10 cursor-pointer opacity-0 animate-popIn`}
                              style={{
                                animationDelay: `${Math.floor(index / 30) * 50}ms`
                              }}
                              title={`Activity on day ${index + 1}`}
                            />
                          );
                        })}
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

                {/* Mobile Activity Calendar (simplified view for small screens) */}
                <div className="block sm:hidden overflow-x-auto pb-2">
                  <div className="min-w-max animate-fadeIn">
                    <div className="grid grid-cols-12 gap-1">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, monthIndex) => (
                        <div key={month} className="flex flex-col items-center">
                          <div className="text-[11px] text-[#8b949e] mb-2">{month}</div>
                          <div className="grid grid-cols-3 gap-1">
                            {Array.from({ length: 9 }).map((_, dayIndex) => {
                              // Generate weighted random values for mobile view
                              const rand = Math.random();
                              let color;
                              
                              if (rand > 0.65) {
                                const intensity = Math.floor(Math.random() * 4);
                                switch(intensity) {
                                  case 0:
                                    color = "bg-[#0e4429]";
                                    break;
                                  case 1:
                                    color = "bg-[#006d32]";
                                    break;
                                  case 2:
                                    color = "bg-[#26a641]";
                                    break;
                                  case 3:
                                    color = "bg-[#39d353]";
                                    break;
                                  default:
                                    color = "bg-[#161b22]";
                                }
                              } else {
                                color = "bg-[#161b22]";
                              }
                              
                              return (
                                <div
                                  key={`${monthIndex}-${dayIndex}`}
                                  className={`h-3 w-3 rounded-sm ${color} transition-all duration-200 transform hover:scale-125 cursor-pointer opacity-0 animate-popIn`}
                                  style={{
                                    animationDelay: `${(monthIndex * 9 + dayIndex) * 15}ms`
                                  }}
                                  title={`Activity on ${month} ${dayIndex + 1}`}
                                />
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity Type Legend */}
              <div className="mt-4 pt-4 border-t border-[#30363d] transition-all duration-300 ease-in-out">
                {/* Mobile Legend */}
                <div className="block sm:hidden animate-fadeIn">
                  <div className="grid grid-cols-2 gap-y-3 text-xs">
                    {[
                      { type: "Code Projects", color: "bg-[#0e4429]" },
                      { type: "Courses", color: "bg-[#006d32]" },
                      { type: "Skills", color: "bg-[#26a641]" },
                      { type: "Articles", color: "bg-[#39d353]" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-1 group transition-all duration-200 hover:transform hover:translate-x-1">
                        <div className={`h-3 w-3 rounded-sm ${item.color} group-hover:scale-125 transition-transform duration-200`}></div>
                        <span className="text-[#8b949e] group-hover:text-[#c9d1d9] transition-colors duration-200">{item.type}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <span className="text-[#8b949e]">Less</span>
                    {['bg-[#161b22]', 'bg-[#0e4429]', 'bg-[#006d32]', 'bg-[#26a641]', 'bg-[#39d353]'].map((color, index) => (
                      <div 
                        key={index} 
                        className={`h-3 w-3 rounded-sm ${color} transition-transform duration-200 hover:scale-125 cursor-pointer`} 
                      />
                    ))}
                    <span className="text-[#8b949e]">More</span>
                  </div>
                </div>

                {/* Desktop Legend */}
                <div className="hidden sm:flex items-center justify-between text-xs animate-fadeIn">
                  <div className="flex items-center text-[#8b949e] gap-6">
                    {[
                      { type: "Code Projects", color: "bg-[#0e4429]" },
                      { type: "Courses", color: "bg-[#006d32]" },
                      { type: "Skills", color: "bg-[#26a641]" },
                      { type: "Articles", color: "bg-[#39d353]" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-1 group transition-all duration-200 hover:transform hover:translate-y-[-2px]">
                        <div className={`h-[10px] w-[10px] rounded-sm ${item.color} group-hover:scale-125 transition-transform duration-200`}></div>
                        <span className="group-hover:text-[#c9d1d9] transition-colors duration-200">{item.type}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#8b949e]">Less</span>
                    {['bg-[#161b22]', 'bg-[#0e4429]', 'bg-[#006d32]', 'bg-[#26a641]', 'bg-[#39d353]'].map((color, index) => (
                      <div 
                        key={index} 
                        className={`h-[10px] w-[10px] rounded-sm ${color} transition-transform duration-200 hover:scale-125 cursor-pointer`} 
                      />
                    ))}
                    <span className="text-[#8b949e]">More</span>
                  </div>
                </div>
              </div>
  
              {/* Activity highlights */}
              <div className="mt-6 space-y-3 opacity-0 animate-slideUp" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
                <h3 className="text-sm font-semibold text-[#c9d1d9]">Recent Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { 
                      icon: <Code className="w-5 h-5 text-[#26a641] mt-1" />,
                      title: "New Security Feature",
                      description: "Added two-factor authentication to Email Fraud Detection"
                    },
                    { 
                      icon: <Book className="w-5 h-5 text-[#006d32] mt-1" />,
                      title: "Course Completed",
                      description: "Advanced Machine Learning Specialization"
                    },
                    { 
                      icon: <CheckCircle2 className="w-5 h-5 text-[#39d353] mt-1" />,
                      title: "Technical Blog Published",
                      description: "Ethical Hacking: Best Practices for 2025"
                    },
                    { 
                      icon: <Cpu className="w-5 h-5 text-[#0e4429] mt-1" />,
                      title: "New Skill Acquired",
                      description: "TensorFlow Advanced Implementation"
                    }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="p-3 border border-[#30363d] rounded-md bg-[#161b22] bg-opacity-80 backdrop-blur-sm flex items-start gap-3 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md hover:border-[#6e7681] cursor-pointer opacity-0 animate-slideUp"
                      style={{ animationDelay: `${600 + index * 100}ms`, animationFillMode: 'forwards' }}
                    >
                      {item.icon}
                      <div>
                        <div className="text-sm font-medium text-[#c9d1d9]">{item.title}</div>
                        <div className="text-xs text-[#8b949e]">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    {/* Edit Profile Modal */}
    {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div 
            ref={modalRef}
            className="bg-[#0d1117] border border-[#30363d] rounded-md shadow-xl w-full max-w-md animate-modalFadeIn overflow-hidden"
          >
            <div className="border-b border-[#30363d] px-4 py-3 flex justify-between items-center bg-[#161b22]">
              <h3 className="text-[16px] font-semibold text-[#c9d1d9]">Edit profile</h3>
              <button 
                onClick={() => setShowEditModal(false)}
                className="text-[#8b949e] hover:text-[#c9d1d9] transition-colors rounded-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSaveProfile} className="px-4 py-4">
              <div className="space-y-5">
                <div>
                  <label htmlFor="followers" className="block text-sm font-medium text-[#c9d1d9] mb-2">
                    Followers
                  </label>
                  <div className="relative rounded-md">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Users className="h-4 w-4 text-[#8b949e]" />
                    </div>
                    <input
                      id="followers"
                      type="number"
                      ref={followersInputRef}
                      defaultValue={followers}
                      min="0"
                      className="block w-full rounded-md border-0 py-1.5 pl-9 bg-[#0d1117] ring-1 ring-inset ring-[#30363d] focus:ring-2 focus:ring-inset focus:ring-[#58a6ff] text-[#c9d1d9] placeholder:text-[#8b949e] shadow-sm"
                    />
                  </div>
                  <p className="mt-1.5 text-xs text-[#8b949e]">
                    Number of people following your profile
                  </p>
                </div>
                
                <div>
                  <label htmlFor="following" className="block text-sm font-medium text-[#c9d1d9] mb-2">
                    Following
                  </label>
                  <div className="relative rounded-md">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Users className="h-4 w-4 text-[#8b949e]" />
                    </div>
                    <input
                      id="following"
                      type="number"
                      ref={followingInputRef}
                      defaultValue={following}
                      min="0"
                      className="block w-full rounded-md border-0 py-1.5 pl-9 bg-[#0d1117] ring-1 ring-inset ring-[#30363d] focus:ring-2 focus:ring-inset focus:ring-[#58a6ff] text-[#c9d1d9] placeholder:text-[#8b949e] shadow-sm"
                    />
                  </div>
                  <p className="mt-1.5 text-xs text-[#8b949e]">
                    Number of people you follow
                  </p>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2 mt-6 pt-4 border-t border-[#30363d]">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-3 py-[5px] text-sm font-medium text-[#c9d1d9] bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] hover:border-[#8b949e] rounded-md transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-[5px] text-sm font-medium text-white bg-[#238636] hover:bg-[#2ea043] border border-[#238636] rounded-md transition-colors"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-16 border-t border-github-border bg-[#0d1117] bg-opacity-80 backdrop-blur-sm">
        <div className="max-w-[1280px] mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-github-text-secondary">
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
              <li>© 2023 GitHub, Inc.</li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline transition-colors duration-200">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline transition-colors duration-200">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline transition-colors duration-200">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline transition-colors duration-200">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline transition-colors duration-200">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline transition-colors duration-200">
                  Contact GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline transition-colors duration-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline transition-colors duration-200">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline transition-colors duration-200">
                  Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-github-accent hover:underline transition-colors duration-200">
                  About
                </a>
              </li>
            </ul>
            <div className="flex items-center space-x-2 group">
              <Heart className="w-4 h-4 transition-transform duration-300 group-hover:scale-125 group-hover:text-red-500" />
              <span className="group-hover:text-github-text transition-colors duration-200">Made with love by the GitHub team</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Overview;



