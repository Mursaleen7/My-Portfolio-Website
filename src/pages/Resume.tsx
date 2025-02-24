
import { Book, Briefcase, GraduationCap, Star, FileText, Heart } from "lucide-react";

const Resume = () => {
  const resumeData = {
    experience: [
      {
        role: "Software Tester and Co-ordinator (Co-op)",
        company: "MVerse Technology Solutions",
        period: "June 2024 - Sept 2024",
        description: "Managed software testing processes, ensured product quality through rigorous test cases, and coordinated between development and QA teams.",
        highlights: ["Designed, developed, and maintained automated test scripts using Selenium and PyTest, reducing manual testing time by 50% while increasing test coverage and efficiency.",
        "Performed end-to-end testing of AI/ML models, analyzing real-world edge cases, validating predictions, and ensuring model robustness in production environments.",
        "Executed automated and manual regression testing across multiple environments, significantly reducing the occurrence of undetected bugs and minimizing system downtime.",
        "Led the implementation of CI/CD pipelines for automated testing, integrating test suites with GitHub Actions and Jenkins to ensure early bug detection and fast deployment cycles.",
        "Developed test strategies for complex machine learning workflows, evaluating model accuracy, precision, recall, and F1 scores to ensure optimal performance.",
        "Identified and resolved critical software defects by conducting root cause analysis, collaborating with developers, and ensuring fixes were verified through automated test suites.",
        "Coordinated testing efforts across cross-functional teams, streamlining communication between software engineers, data scientists, and QA analysts to ensure efficient issue resolution.",
        "Documented detailed test plans, cases, and execution results, maintaining a centralized repository of test artifacts to track software quality over time.",
        "Evaluated AI/ML models for bias, robustness, and fairness, ensuring compliance with ethical AI standards and mitigating potential risks in deployment.",
        "Designed and executed performance and load testing scenarios, benchmarking API response times, and optimizing database queries to reduce latency and improve system scalability.",
        "Conducted security testing to identify vulnerabilities in APIs, authentication mechanisms, and data pipelines, implementing fixes to strengthen overall security posture.",
        "Provided mentorship and training to junior QA engineers, improving team-wide testing best practices and fostering a culture of quality assurance within the development team."],
      },
      {
        role: "AI Developer",
        company: "Band Baaja Baraat",
        period: "June 2024 - Aug 2024",
        description: "Developed and optimized an AI-powered chatbot, ensuring high accuracy, performance, and seamless user interactions.",
        highlights: ["Engineered an AI chatbot using React, Node.js, and Dialogflow, achieving 85% NLP accuracy.",
        "Optimized the backend with Python and Flask, reducing query resolution time to under 200ms.",
        "Implemented real-time communication using Socket.io for seamless interactions.",
        "Managed deployment, ensuring performance, scalability, and security best practices."],
      },
      {
        role: "Frontend Developer",
        company: "Grey-Box",
        period: "June 2024 - Aug 2024",
        description: "Developed and optimized responsive web applications, ensuring high performance, accessibility, and an exceptional user experience.",
        highlights: ["Engineered dynamic user interfaces using React, Next.js, and TypeScript to deliver an intuitive experience.",
        "Implemented responsive design principles and optimized web performance for fast load times and accessibility.",
        "Collaborated with UX/UI designers to craft modern, user-friendly layouts and seamless interactions.",
        "Ensured cross-browser compatibility and conducted comprehensive testing to maintain a robust frontend."],
      },
    ],
    education: [
      {
        degree: "B.S. Computer Science (Minor in Statistics)",
        school: "Carleton University",
        period: "2022 - 2026",
        description: "Cam's Kids Foundation Ambassador",
      },
    ],
    skills: [
      { "category": "Frontend", "items": ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Angular"] },
      { "category": "Backend", "items": ["Node.js", "Express", "Python", "Django", "Flask", "PostgreSQL", "Redis", "GraphQL"] },
      { "category": "DevOps & Tools", "items": ["Git", "Docker", "AWS", "Vercel", "Kubernetes", "Jenkins", "CircleCI", "Terraform"] },
      { "category": "Machine Learning", "items": ["Python", "TensorFlow", "PyTorch", "scikit-learn", "Keras", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook", "OpenCV"] }
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

export default Resume;

