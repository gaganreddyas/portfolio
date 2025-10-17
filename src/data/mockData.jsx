import React from 'react';
import { BrainCircuit, GitMerge, Code } from 'lucide-react';

export const mockData = {
  personalInfo: {
    name: "Gagan Reddy A S",
    title: "Full Stack Developer",
    valueProposition: "I engineer scalable, high-performance web applications that deliver exceptional user experiences and solve complex business challenges.",
  bio: "I’m a final-year B.Tech student passionate about full-stack and cloud development, with hands-on experience in building real-world applications. My core skills include Java, JavaScript, React.js, and AWS, and I enjoy creating solutions that are both scalable and efficient. I’ve worked on multiple live projects involving responsive design, backend APIs, and cloud deployment. As an Amazon Web Services Certified Cloud Practitioner, I love leveraging cloud technologies to enhance application performance. I take pride in writing clean, maintainable code and constantly push myself to learn modern tools and architectures. My recent work includes projects like TaskMaster AI and MediFundr, showcasing my ability to build end-to-end products. I’m eager to collaborate with innovative teams, solve challenging problems, and grow as a Software Development Engineer.",
  email: "gaganreddyas@gmail.com",
    location: "Bengaluru, India",
    socials: {
      linkedin: "https://linkedin.com/in/gaganreddyas",
      github: "https://github.com/gaganreddyas",
    },
    resumeUrl: "/Gagan_Reddy_AS_Resume.pdf", // Placeholder
  },
  stats: [
    { label: "Projects Delivered", value: 15 },
    { label: "Lines of Code", value: "50k" },
    { label: "Years of Experience", value: 2 },
  ],
  skills: {
    frontend: [
      { name: "React.js", level: "Proficient" },
      { name: "Next.js", level: "Experienced" },
      { name: "JavaScript (ES6+)", level: "Proficient" },
      { name: "TypeScript", level: "Experienced" },
      { name: "HTML5 & CSS3", level: "Proficient" },
      { name: "Tailwind CSS", level: "Proficient" },
    ],
    backend: [
      { name: "Node.js", level: "Proficient" },
      { name: "Express.js", level: "Proficient" },
      { name: "RESTful APIs", level: "Proficient" },
      { name: "GraphQL", level: "Experienced" },
    ],
    database: [
      { name: "MongoDB", level: "Proficient" },
      { name: "MySQL", level: "Experienced" },
      { name: "PostgreSQL", level: "Experienced" },
    ],
    toolsAndCloud: [
      { name: "Git & GitHub", level: "Proficient" },
      { name: "Docker", level: "Experienced" },
      { name: "AWS (S3, EC2)", level: "Experienced" },
      { name: "Vercel", level: "Proficient" },
      { name: "Postman", level: "Proficient" },
    ],
    softSkills: [
        "Problem Solving", "Team Collaboration", "Agile Development", "Effective Communication"
    ]
  },
  learning: [
      { title: "System Design Principles", reason: "To build scalable and resilient architectures for enterprise-level applications.", icon: <BrainCircuit/> },
      { title: "Advanced CI/CD Pipelines", reason: "To automate testing and deployment, improving development velocity and reliability.", icon: <GitMerge/> },
      { title: "WebAssembly (WASM)", reason: "Exploring its potential for performance-critical computations on the web.", icon: <Code/> }
  ],
  featuredProjects: [
    {
      title: "TaskMaster AI",
      description: "A modern task management app with AI-powered priority scoring, built on a MERN stack with a clean monorepo setup for quick startup and deployment.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "Vercel", "Render"],
      liveUrl: "https://taskmaster-ai-puce.vercel.app/",
      githubUrl: "https://github.com/gaganreddyas/taskmaster-ai",
      imageUrl: "https://raw.githubusercontent.com/gaganreddyas/taskmaster-ai/main/images/thumbnail.png",
      features: [
        "Add, complete, and delete tasks",
        "AI-powered priority assignment",
        "Active and completed task views",
        "Monorepo with one-command start",
        "Backend REST API for tasks"
      ],
      caseStudy: {
        challenge: "Users often struggle to prioritize tasks effectively across changing workloads, and many simple todo apps lack intelligent ranking or a scalable backend.",
        solution: "Implemented a full-stack MERN application where Gemini AI assigns a priority score to each task via the backend API, storing data in MongoDB for persistence and serving a responsive React UI.",
        learning: "Gained experience integrating LLM APIs securely via environment variables, structuring a monorepo for concurrent dev workflows, and deploying frontend/backend to Vercel/Render with environment config."
      },
      date: "2025-10-17",
      slug: "taskmaster-ai",
      readingTime: "4 min"
    },
    {
      title: "MediFundr",
      description: "Smart medical equipment loan calculator that computes EMI with live USD→INR conversion, delivered via a minimal frontend and a Node/Express API backend.",
      techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Node.js", "Express.js", "Fetch API", "dotenv", "CORS"],
      liveUrl: "https://medi-fundr.vercel.app/",
      githubUrl: "https://github.com/gaganreddyas/MediFundr",
      imageUrl: "https://raw.githubusercontent.com/gaganreddyas/MediFundr/main/assets/banner.jpg",
      features: [
        "EMI calculation for INR and USD",
        "Live USD→INR exchange rates",
        "Monthly EMI, total interest, total payable",
        "Responsive, minimalist UI",
        "Robust input validation and error handling",
        "CORS-enabled API for Vercel/local"
      ],
      caseStudy: {
        challenge: "Clinics evaluating cross-border equipment purchases struggle to compare financing options due to currency fluctuations and opaque EMI breakdowns.",
        solution: "Built a clean frontend backed by an Express API that computes EMI and fetches real-time USD→INR rates, returning consistent results for monthly EMI, total interest, and total payable.",
        learning: "Strengthened REST API design, modularized EMI math and FX fetch utilities, and handled deployment nuances between a static frontend and a free-tier backend."
      },
      date: "2025-10-17",
      slug: "medifundr",
      readingTime: "3 min"
    },
    {
      title: "Enterprise E-commerce Platform",
      description: "Developed a full-stack e-commerce solution designed to handle high-traffic and complex product catalogs, resulting in a 30% improvement in page load times over previous benchmarks.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      imageUrl: "https://placehold.co/600x400/3B82F6/FFFFFF?text=E-commerce+Platform",
      features: ["Real-time inventory sync", "Secure payment gateway", "Admin analytics dashboard", "Optimized for Core Web Vitals"],
      caseStudy: {
          challenge: "The primary challenge was to build a highly performant e-commerce site that could handle a large, dynamic inventory without sacrificing user experience. This involved optimizing database queries, implementing efficient state management, and ensuring fast initial page loads.",
          solution: "I designed a MERN stack architecture with Redux for predictable state management. For performance, I implemented server-side pagination for product lists, lazy loading for images, and heavily optimized MongoDB queries. The Stripe API was integrated for a secure and seamless checkout process.",
          learning: "This project was a deep dive into performance optimization. I learned the critical importance of minimizing bundle size and the direct impact of efficient database indexing on application speed. It solidified my understanding of building scalable, production-ready applications."
      }
    },
    {
      title: "High-Concurrency Chat Application",
      description: "Engineered a real-time messaging application using WebSockets, capable of supporting over 1,000 concurrent users with an average message latency of under 80ms.",
      techStack: ["React", "Node.js", "Socket.io", "Redis", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      imageUrl: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=Real-Time+Chat",
      features: ["Group & private chats", "User presence indicators", "End-to-end encryption (conceptual)", "Scalable architecture"],
      caseStudy: {
          challenge: "The main technical hurdle was managing thousands of persistent WebSocket connections efficiently and broadcasting messages in real-time with minimal latency. Ensuring the backend could scale to handle spikes in concurrent users was paramount.",
          solution: "I utilized Node.js with Socket.io for the real-time communication layer. To handle state across multiple server instances (for scalability), I integrated Redis as a message broker and session store. JWT was used for secure, stateless authentication of socket connections.",
          learning: "This project taught me the complexities of stateful applications and the power of a microservices-oriented approach with tools like Redis. I gained significant experience in designing systems for high-concurrency and real-time data flow."
      }
    },
    {
      title: "Collaborative Task Management Dashboard",
      description: "Built an intuitive project management tool with a drag-and-drop interface that increased team productivity by 25% through streamlined task tracking and real-time updates.",
      techStack: ["React", "Context API", "Express", "MongoDB", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      imageUrl: "https://placehold.co/600x400/10B981/FFFFFF?text=Project+Dashboard",
      features: ["Kanban boards", "Real-time collaboration", "Progress visualization", "Role-based access control"],
      caseStudy: {
          challenge: "Creating a seamless drag-and-drop experience that updated the backend in real-time for all connected clients was the most complex part. The state logic needed to be robust to avoid race conditions and ensure a consistent view for all users.",
          solution: "I used React's Context API for state management to avoid prop drilling and a library like `react-beautiful-dnd` for the drag-and-drop functionality. The backend, built with Express.js, would receive the updated task order and persist it to MongoDB, then broadcast the changes to other clients via a lightweight notification system.",
          learning: "This project was an excellent exercise in complex frontend state management and user interface design. I learned how to create intuitive, interactive user experiences and the importance of optimistic UI updates to make the application feel instantaneous."
      }
    },
  ],
  allProjects: [
  { title: "TaskMaster AI", category: "Fullstack", tech: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "Vercel", "Render"], desc: "A modern task management app with AI-powered priority scoring, built on a MERN stack with a clean monorepo setup for quick startup and deployment.", liveUrl: "https://taskmaster-ai-puce.vercel.app/", githubUrl: "https://github.com/gaganreddyas/taskmaster-ai", imageUrl: "https://raw.githubusercontent.com/gaganreddyas/taskmaster-ai/main/images/thumbnail.png" },
  { title: "MediFundr", category: "Fullstack", tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "Node.js", "Express.js", "Fetch API", "dotenv", "CORS"], desc: "Smart medical equipment loan calculator that computes EMI with live USD→INR conversion, delivered via a minimal frontend and a Node/Express API backend.", liveUrl: "https://medi-fundr.vercel.app/", githubUrl: "https://github.com/gaganreddyas/MediFundr", imageUrl: "https://raw.githubusercontent.com/gaganreddyas/MediFundr/main/assets/banner.jpg" },
  { title: "Language Guesser", category: "Backend/CLI", tech: ["Node.js", "franc", "langs"], desc: "Simple Node.js CLI that predicts a text’s language using franc for detection and langs for human-readable names.", liveUrl: "#", githubUrl: "https://github.com/gaganreddyas/language-guesser", imageUrl: "https://placehold.co/400x300/6366F1/FFFFFF?text=Language+Guesser" },
  { title: "Weather Web App", category: "Frontend", tech: ["HTML5", "CSS3", "JavaScript", "Weather API", "GitHub Pages"], desc: "Clean, responsive weather dashboard showing current conditions, hourly timeline, and air-quality highlights, deployed on GitHub Pages.", liveUrl: "https://gaganreddyas.github.io/Weather-Web-App/", githubUrl: "https://github.com/gaganreddyas/Weather-Web-App", imageUrl: "https://placehold.co/400x300/0EA5E9/FFFFFF?text=Weather+App" },
  { title: "Choco Factory Revamped", category: "Frontend", tech: ["HTML5", "CSS3", "JavaScript", "Google Fonts (Poppins, Playfair Display)", "AWS S3 (static hosting)"], desc: "A premium, chocolate-themed responsive landing page showcasing elegant UI, smooth animations, and mobile-friendly navigation.", liveUrl: "https://choco-factory-revamped7.s3.us-east-1.amazonaws.com/Choco-Factory-Revamped-main/index.html", githubUrl: "https://github.com/gaganreddyas/Choco-Factory-Revamped", imageUrl: "https://raw.githubusercontent.com/gaganreddyas/Choco-Factory-Revamped/main/assets/Caro_9.webp" },
  { title: "scoreKeeper", category: "Frontend", tech: ["HTML5", "CSS3", "JavaScript", "Bulma CSS", "GitHub Pages"], desc: "Lightweight, mobile-friendly score tracking app for quick player/team setup, instant updates, and easy resets during games.", liveUrl: "https://gaganreddyas.github.io/scoreKeeper/", githubUrl: "https://github.com/gaganreddyas/scoreKeeper", imageUrl: "https://raw.githubusercontent.com/gaganreddyas/scoreKeeper/main/assets/ping_pong.avif" },
    { title: "E-commerce Platform", category: "Fullstack", tech: ["React", "Node.js", "MongoDB"], desc: "Full-featured online store with Stripe.", liveUrl: "#", githubUrl: "#", imageUrl: "https://placehold.co/400x300/3B82F6/FFFFFF?text=E-commerce" },
    { title: "Weather App (API Integration)", category: "Frontend", tech: ["React", "API"], desc: "Fetches and displays weather data.", liveUrl: "#", githubUrl: "#", imageUrl: "https://placehold.co/400x300/F59E0B/FFFFFF?text=Weather+App" },
    { title: "This Portfolio Website", category: "Frontend", tech: ["React", "Framer Motion"], desc: "A meta-project showcasing my skills.", liveUrl: "#", githubUrl: "#", imageUrl: "https://placehold.co/400x300/EC4899/FFFFFF?text=Portfolio" },
  ],
  blogPosts: [
    { title: "Building Scalable REST APIs with Node.js", slug: "building-scalable-rest-apis-nodejs", category: "Technical Tutorials", readingTime: 8, date: "2025-07-15", excerpt: "A deep dive into the best practices for creating robust and scalable RESTful APIs using Node.js, Express, and MongoDB.", imageUrl: "https://placehold.co/400x300/3B82F6/FFFFFF?text=Node.js+API", content: `Designing scalable REST APIs involves clear resource modeling, pagination, caching, and observability. In this article, I walk through layered architecture, route design, request validation with zod, and pragmatic performance tuning with indexes and connection pooling.` },
    { title: "React Performance Optimization", slug: "react-performance-optimization", category: "Project Learnings", readingTime: 12, date: "2025-06-28", excerpt: "Discover key techniques like memoization, code splitting, and lazy loading to significantly boost your React application's performance.", imageUrl: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=React+Perf", content: `From React.memo to useMemo/useCallback, plus route-based code-splitting and image optimization. I share a practical checklist and metrics to track.` },
    { title: "MongoDB vs PostgreSQL: A Guide", slug: "mongodb-vs-postgresql-guide", category: "Industry Insights", readingTime: 10, date: "2025-06-10", excerpt: "An in-depth comparison to help you choose the right database for your next project based on its specific needs.", imageUrl: "https://placehold.co/400x300/10B981/FFFFFF?text=DB+Comparison", content: `Trade-offs between document and relational models, indexing strategies, and when to choose each based on workload patterns.` },
    { title: "My Journey to Full Stack", slug: "my-journey-to-full-stack", category: "Problem Solving", readingTime: 6, date: "2025-05-20", excerpt: "Reflections on the learning path, challenges faced, and key takeaways from transitioning from frontend to a full-stack developer role.", imageUrl: "https://placehold.co/400x300/F59E0B/FFFFFF?text=My+Journey", content: `A personal retrospective on building breadth and depth—from fundamentals to shipping production apps.` },
    { title: "AI in 2025: Practical Impact, Not Hype", slug: "ai-in-2025-practical-impact", category: "Industry Insights", readingTime: 9, date: "2025-08-30", excerpt: "Where AI is actually delivering ROI today and how teams can adopt it responsibly.", imageUrl: "https://placehold.co/400x300/0EA5E9/FFFFFF?text=AI+2025", content: [
      "AI in 2025 has moved beyond proof-of-concepts. The most mature wins are in retrieval-augmented generation (RAG), customer support automation, code assist, and forecasting. Organizations that succeed treat AI like a product capability—not a novelty.",
      "RAG systems combine your private data with foundation models. The quality of chunking, embeddings, and evaluation (groundedness, hallucination rate) matters more than raw model size. Tooling has improved, but the fundamentals—data quality and feedback loops—remain the differentiators.",
      "Responsible adoption requires guardrails: data governance, prompt injection defenses, rate limiting, and clear human-in-the-loop workflows for high-risk actions. Measure business metrics (AHT, CSAT, resolution rate) alongside model metrics.",
      "For engineering teams, start with narrow use-cases where failure is cheap and feedback is fast. Build internal playbooks for prompt patterns, evaluation harnesses, and rollout stages. Ship small, learn quickly, and expand where impact is proven."
    ] },
    { title: "👨‍💻 Java and JavaScript? Same name, but worlds apart!", slug: "java-vs-javascript-same-name-different-worlds", category: "Industry Insights", readingTime: 4, date: "2025-10-12", excerpt: "If you've ever thought they were related, you're not alone. It's one of the most common points of confusion in the tech world.", imageUrl: "https://placehold.co/400x300/F59E0B/FFFFFF?text=Java+vs+JS", content: `If you've ever thought they were related, you're not alone. It's one of the most common points of confusion in the tech world. But the truth is, comparing Java to JavaScript is like comparing Neo 🕶️ to John Wick 🔫. Both are legendary, but they operate in completely different universes and with very different skill sets.

![Java vs JavaScript Comparison](https://media.licdn.com/dms/image/v2/D5622AQGHXbuR3-7gKQ/feedshare-shrink_800/B56ZPZmJ0dHoAg-/0/1734522482500?e=1762992000&v=beta&t=6vXnmvxOL-mTretji3rR2q0biGUOZl0Sv6FoHfmBEog)

## The Great Naming Heist 🚀

So, why the confusingly similar names? The story takes us back to the mid-90s. Sun Microsystems' Java was the hottest new thing in programming. Netscape, in the process of creating its own lightweight scripting language for its browser, made a brilliant marketing move. To ride the wave of Java's popularity, they renamed their language (originally called Mocha, then LiveScript) to JavaScript. It was a strategic decision to gain traction, and it clearly worked!

## Under the Hood: Key Differences

Beyond the name, they share very little. Let's break down what makes them so different.

### Execution Model

**Java** is a compiled language. You write the code, and a compiler translates it into bytecode, which can then be run on any platform with a Java Virtual Machine (JVM). This "write once, run anywhere" philosophy made Java incredibly popular for cross-platform applications.

**JavaScript** is an interpreted language. The code is executed line-by-line directly by the browser's engine (like V8 in Chrome) or Node.js runtime. This makes it more flexible but potentially slower for complex operations.

### Typing System

**Java** is statically typed. This means you have to declare the type of a variable (like int, String, boolean) before you use it, and it can't be changed. This is great for catching errors early in large applications and makes code more maintainable.

**JavaScript** is dynamically typed. A variable's type is determined at runtime, offering more flexibility, especially for scripting and rapid prototyping. However, this can lead to runtime errors that might have been caught earlier in a statically typed language.

### Architecture and Paradigms

**Java** is a classic class-based, object-oriented language. Everything is built around classes and objects, following strict OOP principles. It's designed for large-scale, enterprise-level applications.

**JavaScript** is a multi-paradigm scripting language that uses prototypes for inheritance, though modern versions have class syntax to make it more familiar to developers coming from other languages. It supports functional programming, object-oriented programming, and procedural programming.

### Primary Use Cases

**Java** has traditionally been the powerhouse for:
- Large-scale enterprise applications
- Backend systems and microservices
- Native Android app development
- Big data processing frameworks
- Enterprise resource planning (ERP) systems

**JavaScript** has been the undisputed king of:
- Frontend web development
- Interactive web applications
- Real-time web applications
- Progressive Web Apps (PWAs)

However, with the rise of Node.js, JavaScript has also become a major force in backend development, making it a true full-stack language.

## The Modern Landscape

Today, both languages continue to evolve and find their niches:

- **Java** remains dominant in enterprise environments, Android development, and large-scale systems where performance and reliability are critical.
- **JavaScript** has expanded beyond the browser to become a universal language for web development, with frameworks like React, Vue, and Angular dominating the frontend, and Node.js powering countless backend services.

## Conclusion

So, next time someone asks, "Aren't Java and JavaScript the same?", you can share this post and put the debate to rest! 😎

The naming similarity was purely a marketing strategy that worked brilliantly—but it's also created decades of confusion for developers and non-developers alike. Understanding their differences is crucial for anyone looking to build a career in software development.

*Have you ever been confused by the Java vs JavaScript naming? Share your experience in the comments below!*` },
  ],
  experience: [
    { role: "Full Stack Developer Intern", company: "Tech Solutions Inc.", period: "Jun 2024 - Dec 2024", description: "Contributed to a client-facing web app using React and Node.js. Implemented features, fixed bugs, and participated in agile cycles, gaining experience with CI/CD and AWS.", skills: ["React", "Node.js", "AWS", "Agile"], logo: "https://placehold.co/40x40/ffffff/3B82F6?text=TSI" },
    { role: "Open Source Contributor", company: "Project XYZ", period: "Jan 2024 - May 2024", description: "Actively contributed to a popular open-source library by fixing issues, improving documentation, and adding functionality, collaborating with a global team.", skills: ["TypeScript", "Git", "Collaboration"], logo: "https://placehold.co/40x40/ffffff/8B5CF6?text=XYZ" },
    { role: "Hackathon Winner - 1st Place", company: "InnovateFest 2023", period: "Oct 2023", description: "Led a team of 3 to build a community help app prototype in 48 hours. Developed the full-stack solution from scratch with a mobile-first UX.", skills: ["React Native", "Firebase", "Leadership"], logo: "https://placehold.co/40x40/ffffff/10B981?text=IF" }
  ]
};
