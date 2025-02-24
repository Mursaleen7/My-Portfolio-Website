
import { Book, Briefcase, GraduationCap, Star, FileText } from "lucide-react";

const Resume = () => {
  const resumeData = {
    experience: [
      {
        role: "Senior Frontend Developer",
        company: "Tech Solutions Inc.",
        period: "2021 - Present",
        description: "Led development of enterprise React applications and mentored junior developers.",
        highlights: ["Improved app performance by 40%", "Implemented CI/CD pipelines", "Led team of 5 developers"],
      },
      {
        role: "Frontend Developer",
        company: "Digital Innovators",
        period: "2019 - 2021",
        description: "Developed and maintained multiple React-based web applications.",
        highlights: ["Reduced bundle size by 60%", "Implemented PWA features", "Integrated payment systems"],
      },
    ],
    education: [
      {
        degree: "M.S. Computer Science",
        school: "Tech University",
        period: "2017 - 2019",
        description: "Focus on Web Technologies and Distributed Systems",
      },
      {
        degree: "B.S. Computer Science",
        school: "State University",
        period: "2013 - 2017",
        description: "Dean's List, Web Development Club President",
      },
    ],
    skills: [
      { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Redis"] },
      { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <div className="space-y-6">
        {/* Experience Section */}
        <div className="border border-github-border-light dark:border-github-border rounded-lg overflow-hidden">
          <div className="bg-github-secondary-light dark:bg-github-secondary p-4 border-b border-github-border-light dark:border-github-border">
            <h2 className="text-github-text-light dark:text-github-text font-semibold flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Experience
            </h2>
          </div>
          <div className="divide-y divide-github-border-light dark:divide-github-border">
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="p-6 hover:bg-github-secondary-light dark:hover:bg-github-secondary/50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-github-text-light dark:text-github-text font-medium">{exp.role}</h3>
                    <p className="text-github-text-light dark:text-github-text mt-1">{exp.company}</p>
                    <p className="text-sm text-github-text-light/70 dark:text-github-text/70 mt-1">{exp.period}</p>
                    <p className="mt-3 text-github-text-light dark:text-github-text">{exp.description}</p>
                    <ul className="mt-3 list-disc list-inside space-y-1">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-github-text-light dark:text-github-text">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="border border-github-border-light dark:border-github-border rounded-lg overflow-hidden">
          <div className="bg-github-secondary-light dark:bg-github-secondary p-4 border-b border-github-border-light dark:border-github-border">
            <h2 className="text-github-text-light dark:text-github-text font-semibold flex items-center">
              <GraduationCap className="w-5 h-5 mr-2" />
              Education
            </h2>
          </div>
          <div className="divide-y divide-github-border-light dark:divide-github-border">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="p-6 hover:bg-github-secondary-light dark:hover:bg-github-secondary/50">
                <h3 className="text-github-text-light dark:text-github-text font-medium">{edu.degree}</h3>
                <p className="text-github-text-light dark:text-github-text mt-1">{edu.school}</p>
                <p className="text-sm text-github-text-light/70 dark:text-github-text/70 mt-1">{edu.period}</p>
                <p className="mt-2 text-github-text-light dark:text-github-text">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="border border-github-border-light dark:border-github-border rounded-lg overflow-hidden">
          <div className="bg-github-secondary-light dark:bg-github-secondary p-4 border-b border-github-border-light dark:border-github-border">
            <h2 className="text-github-text-light dark:text-github-text font-semibold flex items-center">
              <Star className="w-5 h-5 mr-2" />
              Skills
            </h2>
          </div>
          <div className="p-6 space-y-6">
            {resumeData.skills.map((skillGroup, index) => (
              <div key={index}>
                <h3 className="text-github-text-light dark:text-github-text font-medium mb-2">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-github-secondary-light dark:bg-github-secondary text-github-text-light dark:text-github-text border border-github-border-light dark:border-github-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
