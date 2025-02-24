"use client"
import React, { useMemo } from "react"
import { useParams, Link } from "react-router-dom"
import { Layout, ListFilter, Calendar, Clock, CheckSquare, Code, Cpu, Upload, Zap, CheckCircle2 } from "lucide-react"

// Tailwind CSS configuration
const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Noto Sans",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
      },
      colors: {
        "github-text": {
          light: "#24292f",
          DEFAULT: "#c9d1d9",
        },
        "github-bg": {
          light: "#ffffff",
          DEFAULT: "#0d1117",
        },
        "github-border": {
          light: "#d0d7de",
          DEFAULT: "#30363d",
        },
        "github-secondary": {
          light: "#f6f8fa",
          DEFAULT: "#161b22",
        },
        "github-accent": {
          light: "#0969da",
          DEFAULT: "#58a6ff",
        },
        "github-success": {
          light: "#1a7f37",
          DEFAULT: "#238636",
        },
        "github-warning": {
          light: "#9a6700",
          DEFAULT: "#9e6a03",
        },
      },
    },
  },
  plugins: [],
}

const ProjectDescription: React.FC = React.memo(() => (
  <div className="prose prose-sm max-w-none text-github-text-light dark:text-github-text">
    <h2 className="text-2xl font-semibold mb-4">Plant Disease Detection: An Accessible AI Solution</h2>

    <p className="mb-4">
      This project started as a small, personal initiative when I noticed a common problem among local farmers and home
      gardeners—they often struggle to identify plant diseases early. Many rely on trial and error or advice from other
      farmers, but by the time they recognize a disease, it's often too late to save the crops.
    </p>

    <div className="bg-github-secondary-light dark:bg-github-secondary p-4 rounded-md my-6 border border-github-border-light dark:border-github-border">
      <h3 className="text-lg font-semibold mb-3">Project Goals</h3>
      <p className="mb-3">
        Existing solutions either require expensive lab tests, commercial software subscriptions, or high-speed
        internet—things that aren't always available in smaller communities. I wanted to build something that was:
      </p>
      <ul className="list-none pl-0 space-y-2">
        <li className="flex items-center">
          <CheckCircle2 className="w-4 h-4 text-github-success-light dark:text-github-success mr-2 flex-shrink-0" />
          <span>Free to use</span>
        </li>
        <li className="flex items-center">
          <CheckCircle2 className="w-4 h-4 text-github-success-light dark:text-github-success mr-2 flex-shrink-0" />
          <span>Lightweight and accessible on any device</span>
        </li>
        <li className="flex items-center">
          <CheckCircle2 className="w-4 h-4 text-github-success-light dark:text-github-success mr-2 flex-shrink-0" />
          <span>Capable of running locally without relying on cloud servers</span>
        </li>
      </ul>
    </div>

    <h3 className="text-xl font-semibold mt-6 mb-3">How It Works</h3>
    <p className="mb-4">
      The system is designed to help small farmers and gardeners quickly diagnose common plant diseases using just a
      photo of the affected plant leaf. The process is simple:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div className="p-4 bg-github-secondary-light dark:bg-github-secondary rounded-md border border-github-border-light dark:border-github-border">
        <div className="flex items-center mb-3">
          <Upload className="w-5 h-5 text-github-accent-light dark:text-github-accent mr-2" />
          <h4 className="text-base font-semibold">Process Flow</h4>
        </div>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Take a photo of the affected plant.</li>
          <li>Upload it to the website using a phone or computer.</li>
          <li>Get an instant diagnosis, including the predicted disease and confidence score.</li>
          <li>Receive basic recommendations on possible treatments or next steps.</li>
        </ol>
      </div>

      <div className="p-4 bg-github-secondary-light dark:bg-github-secondary rounded-md border border-github-border-light dark:border-github-border">
        <div className="flex items-center mb-3">
          <Zap className="w-5 h-5 text-github-accent-light dark:text-github-accent mr-2" />
          <h4 className="text-base font-semibold">Key Features</h4>
        </div>
        <ul className="list-disc pl-5 space-y-2">
          <li>Multi-Plant Support – The system detects diseases in Potato, Apple, Corn, and Grape plants.</li>
          <li>Custom Deep Learning Models – Each crop type has a specialized model, improving accuracy.</li>
          <li>Fast Processing – Predictions are made in 2-5 seconds on a local system.</li>
          <li>User-Friendly Interface – Designed with simple HTML and CSS for older devices.</li>
        </ul>
      </div>
    </div>

    <h3 className="text-xl font-semibold mt-6 mb-3">Technical Details</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div className="p-4 bg-github-secondary-light dark:bg-github-secondary rounded-md border border-github-border-light dark:border-github-border">
        <div className="flex items-center mb-3">
          <Code className="w-5 h-5 text-github-accent-light dark:text-github-accent mr-2" />
          <h4 className="text-base font-semibold">Development Stack</h4>
        </div>
        <ul className="list-disc pl-5 space-y-2">
          <li>Backend: Flask (handles image uploads and model predictions)</li>
          <li>Frontend: HTML, CSS (basic but functional UI)</li>
          <li>Programming Language: Python</li>
          <li>Machine Learning Libraries: TensorFlow, Keras, NumPy</li>
          <li>Model Storage: Local file system (no need for cloud storage)</li>
        </ul>
      </div>

      <div className="p-4 bg-github-secondary-light dark:bg-github-secondary rounded-md border border-github-border-light dark:border-github-border">
        <div className="flex items-center mb-3">
          <Cpu className="w-5 h-5 text-github-accent-light dark:text-github-accent mr-2" />
          <h4 className="text-base font-semibold">Deep Learning Model</h4>
        </div>
        <h5 className="font-medium mb-2">Architecture:</h5>
        <ul className="list-disc pl-5 space-y-2 mb-3">
          <li>7 convolutional layers (CNN)</li>
          <li>64 filters per layer</li>
          <li>Max-pooling layers for feature extraction</li>
          <li>ReLU activation functions</li>
          <li>Softmax output layer for classification</li>
        </ul>
        <h5 className="font-medium mb-2">Accuracy:</h5>
        <ul className="list-disc pl-5 space-y-2">
          <li>Potato: 97.2%</li>
          <li>Apple: 96.3%</li>
          <li>Corn: 95.4%</li>
          <li>Grape: 95.1%</li>
        </ul>
      </div>
    </div>

    <h3 className="text-xl font-semibold mt-6 mb-3">Building & Testing the System</h3>
    <p className="mb-3">
      Since this project was built on a small scale, I didn't have access to large, high-performance servers or
      expensive cloud computing resources. Instead, I trained the models on a local machine using collected datasets
      from open-source agricultural image repositories.
    </p>
    <p className="mb-3">
      For testing, I worked with a few gardeners and small-scale farmers I personally knew. They tested the system by
      uploading photos of their crops, and I collected feedback to improve prediction accuracy.
    </p>
    <p className="mb-3">
      One notable case was a home gardener who used the system to identify early-stage apple scab on his apple trees.
      Based on the diagnosis, he was able to treat the plants before the infection spread, saving most of his yield that
      season.
    </p>

    <h3 className="text-xl font-semibold mt-6 mb-3">Challenges & Solutions</h3>
    <div className="space-y-4 mt-4">
      <div className="p-4 bg-github-secondary-light dark:bg-github-secondary rounded-md border border-github-border-light dark:border-github-border">
        <h4 className="font-semibold mb-2">1. Lack of High-Quality Data</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>The biggest challenge was finding real-world images that reflected the conditions of local plants.</li>
          <li>
            I solved this by training the models on diverse datasets and using data augmentation to simulate different
            lighting and environmental conditions.
          </li>
        </ul>
      </div>

      <div className="p-4 bg-github-secondary-light dark:bg-github-secondary rounded-md border border-github-border-light dark:border-github-border">
        <h4 className="font-semibold mb-2">2. Running on Limited Hardware</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Without access to cloud GPUs, training the models took days instead of hours on a local machine.</li>
          <li>I optimized the code to reduce training time without sacrificing accuracy.</li>
        </ul>
      </div>

      <div className="p-4 bg-github-secondary-light dark:bg-github-secondary rounded-md border border-github-border-light dark:border-github-border">
        <h4 className="font-semibold mb-2">3. User Adoption & Accessibility</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Many small farmers aren't comfortable with complex technology.</li>
          <li>
            I kept the interface minimalistic with simple instructions, so anyone could use it without prior experience.
          </li>
        </ul>
      </div>
    </div>

    <h3 className="text-xl font-semibold mt-6 mb-3">Current Status & Future Plans</h3>
    <p className="mb-3">
      Right now, the system is still in its early stages but fully functional. The next steps include:
    </p>
    <ul className="list-none pl-0 space-y-2 mb-4">
      <li className="flex items-center">
        <CheckCircle2 className="w-4 h-4 text-github-success-light dark:text-github-success mr-2 flex-shrink-0" />
        <span>Expanding to more crops (wheat, tomatoes, etc.)</span>
      </li>
      <li className="flex items-center">
        <CheckCircle2 className="w-4 h-4 text-github-success-light dark:text-github-success mr-2 flex-shrink-0" />
        <span>Adding an offline mode for use in areas with limited internet access</span>
      </li>
      <li className="flex items-center">
        <CheckCircle2 className="w-4 h-4 text-github-success-light dark:text-github-success mr-2 flex-shrink-0" />
        <span>Refining accuracy by collecting more diverse training data</span>
      </li>
    </ul>
    <p>
      The goal isn't to replace expert agronomists but to provide a quick, accessible first step for small farmers and
      gardeners who need instant feedback.
    </p>
  </div>
))

interface Task {
  id: number
  title: string
  status: string
  assignee: string
  description: string
  dueDate: string
  progress: string
}

interface TaskItemProps {
  task: Task
}

const TaskItem: React.FC<TaskItemProps> = React.memo(({ task }) => (
  <div className="p-3 hover:bg-github-secondary-light dark:hover:bg-github-secondary transition-colors">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-github-text-light dark:text-github-text font-semibold">{task.title}</h3>
        <p className="text-sm text-[#57606a] dark:text-[#8b949e] mt-1">Assigned to: {task.assignee}</p>
      </div>
      <span
        className={`px-2 py-[3px] text-xs font-medium rounded-full ${
          task.status === "Completed"
            ? "bg-[#dafbe1] dark:bg-[#238636] text-github-success-light dark:text-github-bg-light"
            : task.status === "In Progress"
              ? "bg-[#ddf4ff] dark:bg-[#388bfd26] text-github-accent-light dark:text-github-accent"
              : task.status === "In Review"
                ? "bg-[#fff8c5] dark:bg-[#9e6a03] text-github-warning-light dark:text-github-bg-light"
                : "bg-github-secondary-light dark:bg-github-secondary text-[#57606a] dark:text-[#8b949e]"
        }`}
      >
        {task.status}
      </span>
    </div>
    <div className="mt-2 text-sm text-[#57606a] dark:text-[#8b949e]">{task.description}</div>
    <div className="mt-3 flex items-center space-x-4 text-xs text-[#57606a] dark:text-[#8b949e]">
      <span className="flex items-center">
        <Calendar className="w-3 h-3 mr-1" />
        {task.status === "Completed" ? "Completed" : "Due"} {task.dueDate}
      </span>
      <span className="flex items-center">
        <CheckSquare className="w-3 h-3 mr-1" />
        {task.status === "Completed" ? "100%" : task.progress}
      </span>
    </div>
  </div>
))

interface Project {
  name: string
  status: string
  progress: number
  dueDate: string
  tasks: Task[]
  views: string[]
}

const ProjectDetail: React.FC = () => {
  const { name } = useParams<{ name?: string }>()
  const displayName = name ? name.replace(/-/g, " ") : "Plant Disease Detection AI"

  const project: Project = useMemo(
    () => ({
      name: displayName,
      status: "In Development",
      progress: 75,
      dueDate: "2024-12-31",
      tasks: [
        {
          id: 1,
          title: "Implement offline mode",
          status: "In Progress",
          assignee: "Alex Chen",
          description: "Developing local storage and processing capabilities for areas with limited internet access",
          dueDate: "Dec 2024",
          progress: "60%",
        },
        {
          id: 2,
          title: "Enhance UI accessibility",
          status: "In Review",
          assignee: "Sarah Kim",
          description: "Implementing UI improvements for better usability on various devices and screen sizes",
          dueDate: "Oct 2024",
          progress: "90%",
        },
        {
          id: 3,
          title: "Expand training dataset",
          status: "In Progress",
          assignee: "David Brown",
          description: "Collecting and labeling additional plant disease images for model training",
          dueDate: "Dec 2024",
          progress: "40%",
        },
      ],
      views: ["Board", "Table", "Timeline"],
    }),
    [displayName],
  )

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans text-[14px] leading-[1.5] text-github-text-light dark:text-github-text bg-github-bg-light dark:bg-github-bg">
      {/* Project Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <h1 className="text-[26px] font-semibold leading-[1.25]">{project.name}</h1>
            <span className="px-2 py-[3px] text-xs font-medium rounded-full bg-[#ddf4ff] dark:bg-[#388bfd26] text-github-accent-light dark:text-github-accent border border-[#54aeff66] dark:border-[#388bfd66]">
              {project.status}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            {project.views.map((view) => (
              <button
                key={view}
                className="px-3 py-[5px] text-sm font-medium bg-github-secondary-light dark:bg-github-secondary text-github-text-light dark:text-github-text border border-github-border-light dark:border-github-border rounded-md hover:bg-github-border-light dark:hover:bg-github-border transition-colors flex items-center"
              >
                <Layout className="h-4 w-4 mr-2" />
                {view}
              </button>
            ))}
          </div>
        </div>
        <ProjectDescription />
        <div className="flex items-center space-x-4 text-[#57606a] dark:text-[#8b949e] mt-4 text-sm">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            Due: {project.dueDate}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            Progress: {project.progress}%
          </div>
        </div>
      </div>

      {/* Project Navigation */}
      <div className="border-b border-github-border-light dark:border-github-border mb-4">
        <nav className="flex space-x-4">
          <Link
            to="#overview"
            className="px-3 py-2 border-b-2 border-github-accent-light dark:border-github-accent text-github-text-light dark:text-github-text font-semibold flex items-center"
          >
            <Layout className="w-4 h-4 mr-2" />
            Overview
          </Link>
          <Link
            to="#tasks"
            className="px-3 py-2 text-[#57606a] dark:text-[#8b949e] hover:text-github-text-light dark:hover:text-github-text flex items-center"
          >
            <CheckSquare className="w-4 h-4 mr-2" />
            Tasks
          </Link>
        </nav>
      </div>

      {/* Tasks Section */}
      <div className="border border-github-border-light dark:border-github-border rounded-md overflow-hidden mt-6">
        <div className="bg-github-secondary-light dark:bg-github-secondary p-3 border-b border-github-border-light dark:border-github-border flex justify-between items-center">
          <h2 className="text-github-text-light dark:text-github-text font-semibold">Implementation Tasks</h2>
          <button className="px-3 py-[5px] text-sm font-medium bg-github-secondary-light dark:bg-github-secondary text-github-text-light dark:text-github-text border border-github-border-light dark:border-github-border rounded-md hover:bg-github-border-light dark:hover:bg-github-border transition-colors flex items-center">
            <ListFilter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>
        <div className="divide-y divide-github-border-light dark:divide-github-border">
          {project.tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail

