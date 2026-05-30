export type ProjectType = "Beginner" | "Intermediate" | "Advanced";

export type PortfolioProject = {
  id: number;
  title: string;
  type: ProjectType;
  tagline: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  learningOutcomes: string[];
  githubUrl: string;
  vercelUrl: string;
  videoUrl: string;
  demoScenes: string[];
};

export const profile = {
  name: "Ramsha Jawaid",
  role: "Full Stack Developer",
  intro:
    "I build responsive full-stack web applications with modern interfaces, authentication, dashboards, databases, payments, and AI-powered features.",
  resumeUrl: "/ramsha-jawaid-cv.pdf",
  linkedInUrl: "https://www.linkedin.com/in/ramsha-jawaid-902296249",
  githubUrl: "https://github.com/roxyross",
  email: "nexeagent@gmail.com",
  portfolioUrl: "https://your-portfolio.vercel.app",
  phone: "03222100121",
  whatsappUrl: "https://wa.me/923222100121",
};

export const projects: PortfolioProject[] = [
  {
    id: 1,
    title: "Portfolio Website with Contact Backend",
    type: "Beginner",
    tagline: "A responsive developer portfolio with a working database-backed contact form.",
    shortDescription:
      "A personal portfolio website with About, Skills, Projects, and Contact sections plus backend contact-form storage and user feedback states.",
    description:
      "This beginner full-stack portfolio project demonstrates the foundation of a professional web presence combined with practical backend functionality. The frontend is designed to be responsive across mobile and desktop screens, with clear sections for personal introduction, technical skills, project highlights, and contact details. The contact form connects to a backend workflow that validates submissions, saves messages to a database, and returns success or error feedback to the user. The project shows understanding of component-based UI, form handling, API communication, database persistence, deployment readiness, and recruiter-friendly presentation. It is a strong first project because it connects design, frontend structure, backend logic, and real data storage.",
    technologies: ["React", "Next.js", "Tailwind CSS", "API Routes", "Database"],
    features: [
      "Responsive portfolio layout",
      "About, skills, projects, and contact sections",
      "Database-backed contact form",
      "Success and error messages",
      "Deploy-ready frontend",
    ],
    challenges: [
      "Built a contact form that connects frontend input with backend persistence.",
      "Handled validation and user feedback for successful and failed submissions.",
      "Created a responsive layout that remains polished on mobile and desktop.",
    ],
    learningOutcomes: [
      "Learned how to connect frontend forms with backend APIs.",
      "Practiced responsive design and professional portfolio structure.",
      "Understood the importance of validation, database storage, and clear feedback.",
    ],
    githubUrl: "https://github.com/roxyross/task1-beginner-profile",
    vercelUrl: "https://vercel.com/roxyross-projects/task1-beginner-profile-frontend",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
    demoScenes: [
      "Open the responsive homepage and highlight About, Skills, Projects, and Contact sections.",
      "Submit a sample contact message and show the success state.",
      "Explain that messages are validated and saved through the backend/database flow.",
    ],
  },
  {
    id: 2,
    title: "Authentication-Based To-Do App",
    type: "Beginner",
    tagline: "A secure task manager with registration, login, JWT auth, and CRUD workflows.",
    shortDescription:
      "A full-stack to-do application where users can register, log in, manage tasks, mark completion, and persist data in a database.",
    description:
      "The Authentication-Based To-Do App introduces essential full-stack application patterns through a practical productivity tool. Users can create accounts, log in securely, and manage personal task lists through protected routes. The application uses JWT authentication to maintain sessions and ensures that each user only accesses their own data. Core task features include adding, editing, deleting, and marking tasks as complete, with all information stored in a database. The project demonstrates understanding of authentication flows, CRUD operations, API integration, protected UI states, and persistent data management. It is a recruiter-friendly example of building real application logic beyond static pages.",
    technologies: ["React", "JWT", "Node.js", "REST API", "Database"],
    features: [
      "User registration and login",
      "JWT-based authentication",
      "Add, edit, and delete tasks",
      "Mark tasks complete",
      "Database-backed user data",
    ],
    challenges: [
      "Implemented protected user-specific task access.",
      "Managed authentication state across the frontend.",
      "Designed reliable CRUD flows with persistent database storage.",
    ],
    learningOutcomes: [
      "Learned the fundamentals of JWT authentication.",
      "Practiced full CRUD API workflows.",
      "Understood how frontend state connects with secure backend data.",
    ],
    githubUrl: "https://github.com/roxyross/task2-begineer-authenticated-todo-app-frontend",
    vercelUrl: "https://vercel.com/roxyross-projects/task2-begineer-authenticated-todo-app-frontend",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
    demoScenes: [
      "Register a new user and log in through the authentication screen.",
      "Create, edit, complete, and delete a task from the protected dashboard.",
      "Show that tasks remain user-specific and persist through the database.",
    ],
  },
  {
    id: 3,
    title: "Blog Platform with Admin Panel",
    type: "Intermediate",
    tagline: "A content platform with admin CRUD, rich text editing, categories, and pagination.",
    shortDescription:
      "A blog platform where admins manage posts and categories while users browse readable, filtered, paginated content.",
    description:
      "The Blog Platform with Admin Panel demonstrates intermediate full-stack development through a content management workflow. Admin users can create, edit, and delete blog posts, organize content with categories, and write formatted articles using a rich text editor. Public users can read posts, filter by category, and navigate content through pagination. The project also includes a clear database schema for users, blogs, and categories, showing an understanding of relational data modeling and structured backend design. This application is valuable because it combines role-based behavior, content workflows, database relationships, admin operations, and a polished reading experience in one complete product.",
    technologies: ["React", "Rich Text Editor", "Node.js", "Database Schema", "Pagination"],
    features: [
      "Admin blog CRUD",
      "Public blog reading experience",
      "Rich text editor",
      "Category filtering",
      "Pagination and database schema",
    ],
    challenges: [
      "Designed relationships between users, blogs, and categories.",
      "Built admin controls while keeping the public reading flow simple.",
      "Handled content filtering and pagination for scalable browsing.",
    ],
    learningOutcomes: [
      "Learned admin panel and content management patterns.",
      "Practiced database schema planning for related resources.",
      "Improved understanding of pagination, filters, and editor integration.",
    ],
    githubUrl: "https://github.com/roxyross/task3-intermediate-blog-plateform-frontend",
    vercelUrl: "https://vercel.com/roxyross-projects/task3-intermediate-blog-plateform-frontend",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    demoScenes: [
      "Enter the admin panel and create a rich-text blog post.",
      "Filter posts by category and navigate paginated public blog results.",
      "Explain the users, blogs, and categories database structure.",
    ],
  },
  {
    id: 4,
    title: "E-Commerce Website",
    type: "Intermediate",
    tagline: "A shopping platform with products, cart, checkout, payments, and order history.",
    shortDescription:
      "An e-commerce frontend with product browsing, cart management, checkout flow, payment integration, and customer order history.",
    description:
      "The E-Commerce Website shows the ability to build a transaction-focused full-stack user experience. Customers can browse product listings, add items to a cart, review selections, proceed through checkout, and view order history. The project includes payment integration concepts, giving it a realistic business workflow beyond simple product display. It also focuses on clear user interaction, cart state management, checkout validation, and persistent order records. Recruiters can evaluate understanding of commercial web application patterns, data flow, responsive product layouts, and user-centered purchasing journeys. This project bridges frontend design, backend order logic, and payment-ready architecture.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Payment Integration", "Database"],
    features: [
      "Product listing",
      "Add to cart",
      "Checkout page",
      "Payment integration",
      "Order history",
    ],
    challenges: [
      "Managed cart state across product and checkout pages.",
      "Structured the checkout flow for clarity and validation.",
      "Connected order history concepts with persistent user activity.",
    ],
    learningOutcomes: [
      "Learned core e-commerce application flow.",
      "Practiced state management for cart and checkout experiences.",
      "Understood payment and order-management considerations.",
    ],
    githubUrl: "https://github.com/roxyross/task4-intermediate-e-commerce-frontend",
    vercelUrl: "https://vercel.com/roxyross-projects/task4-intermediate-e-commerce-frontend",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_4",
    demoScenes: [
      "Browse product listings and inspect a product card.",
      "Add products to the cart, update cart contents, and proceed to checkout.",
      "Walk through payment integration and order history behavior.",
    ],
  },
  {
    id: 5,
    title: "SaaS Dashboard",
    type: "Advanced",
    tagline: "A role-based SaaS control center with analytics, activity logs, settings, and API limits.",
    shortDescription:
      "An advanced dashboard interface with admin/user roles, chart analytics, activity tracking, settings, and API rate-limiting concepts.",
    description:
      "The SaaS Dashboard is an advanced full-stack project focused on real-world product administration and user management. It includes role-based login for admin and user accounts, analytics charts for visual reporting, activity logs for operational transparency, and a settings panel for account or application configuration. API rate limiting is included as an important backend concept for protecting services and controlling usage. The project demonstrates the ability to build structured dashboards similar to modern SaaS products, where data visualization, permissions, monitoring, and configuration all work together. It is a strong portfolio piece for showing readiness to build professional business applications.",
    technologies: ["Next.js", "React", "Chart UI", "Role-Based Auth", "API Rate Limiting"],
    features: [
      "Role-based admin and user login",
      "Analytics charts",
      "Activity logs",
      "Settings panel",
      "API rate limiting",
    ],
    challenges: [
      "Designed a dashboard layout that supports multiple data-heavy sections.",
      "Modeled role-based access for different user permissions.",
      "Included rate-limiting concepts for safer API usage.",
    ],
    learningOutcomes: [
      "Learned SaaS dashboard structure and admin workflows.",
      "Practiced analytics visualization and activity monitoring.",
      "Understood role-based access and API protection patterns.",
    ],
    githubUrl: "https://github.com/roxyross/task5-advance-saas-dashboard-frontend",
    vercelUrl: "https://vercel.com/roxyross-projects/task5-advance-saas-dashboard-frontend",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_5",
    demoScenes: [
      "Log in as admin and show role-based dashboard access.",
      "Review analytics charts, activity logs, and settings controls.",
      "Explain API rate limiting and how it protects the SaaS backend.",
    ],
  },
  {
    id: 6,
    title: "AI Resume Analyzer",
    type: "Advanced",
    tagline: "An AI-integrated web app that analyzes resumes, scores them, and suggests improvements.",
    shortDescription:
      "An AI-powered resume analyzer where users upload PDFs, extract resume text, receive a score, and get improvement suggestions.",
    description:
      "The AI Resume Analyzer is an advanced AI-integrated web application that combines file upload, PDF text extraction, model-based analysis, scoring, and personalized improvement suggestions. Users can upload a resume, the system extracts readable content, sends the text to an AI API, and returns structured feedback about strengths, weaknesses, and recommended changes. The project demonstrates how modern full-stack applications can integrate AI features into a practical user workflow. It also highlights handling uploaded files, processing unstructured documents, designing scoring logic, and presenting AI feedback clearly. This project is especially valuable for recruiters because it applies AI to a real career-focused problem.",
    technologies: ["Next.js", "React", "PDF Parsing", "AI API", "Tailwind CSS"],
    features: [
      "Resume PDF upload",
      "Text extraction",
      "AI-powered analysis",
      "Resume scoring",
      "Improvement suggestions",
    ],
    challenges: [
      "Handled PDF upload and text extraction for AI analysis.",
      "Converted unstructured resume content into useful structured feedback.",
      "Presented AI scoring and suggestions in a clear user interface.",
    ],
    learningOutcomes: [
      "Learned how to integrate AI APIs into a full-stack app.",
      "Practiced document processing and analysis workflows.",
      "Understood how to design useful AI feedback for end users.",
    ],
    githubUrl: "https://github.com/roxyross/ai-resume-analyzer-frontend",
    vercelUrl: "https://vercel.com/roxyross-projects/task6-advance-ai-integrated-app-ai-resume-analyzer-frontend",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_6",
    demoScenes: [
      "Upload a resume PDF and show the extraction step.",
      "Run AI analysis and display the resume score.",
      "Review improvement suggestions and explain the AI API workflow.",
    ],
  },
];

export const skills = [
  { name: "HTML & CSS", level: 92 },
  { name: "JavaScript", level: 88 },
  { name: "React", level: 86 },
  { name: "Next.js", level: 84 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js", level: 82 },
  { name: "REST APIs", level: 84 },
  { name: "JWT Authentication", level: 80 },
  { name: "Databases", level: 78 },
  { name: "AI API Integration", level: 76 },
];

export const stats = [
  { label: "Total Projects", value: 6, suffix: "" },
  { label: "Projects Completed", value: 6, suffix: "/6" },
  { label: "Technologies Used", value: 12, suffix: "+" },
  { label: "Core Features", value: 24, suffix: "+" },
];
