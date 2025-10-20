import React from 'react';
import { Cloud, ServerIcon, Zap } from 'lucide-react';

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
      { name: "JavaScript (ES6+)", level: "Experienced" },
      { name: "HTML5 & CSS3", level: "Experienced" },
      { name: "Tailwind CSS", level: "Proficient" },
    ],
    backend: [
      { name: "Node.js", level: "Experienced" },
      { name: "Express.js", level: "Experienced" },
      { name: "RESTful APIs", level: "Proficient" },
    ],
    database: [
      { name: "MongoDB", level: "Experienced" },
      { name: "MySQL", level: "Experienced" },
      { name: "PostgreSQL", level: "Proficient" },
    ],
    toolsAndCloud: [
      { name: "Git & GitHub", level: "Experienced" },
      { name: "AWS (S3, EC2)", level: "Experienced" },
      { name: "Vercel", level: "Experienced" },
      { name: "Postman", level: "Experienced" },
    ],
    softSkills: [
        "Problem Solving", "Team Collaboration", "Agile Development", "Effective Communication"
    ]
  },
  learning: [
    { title: "Cloud & AWS Services", reason: "Deploy and scale apps with S3, EC2, Lambda; cost-aware hosting.", icon: <Cloud/> },
    { title: "Full-Stack Web Development", reason: "Build fullstack apps with React + Node — focus on clean code.", icon: <ServerIcon/> },
    { title: "API Integration & Automation", reason: "Integrate and automate REST APIs; test with Postman and CI.", icon: <Zap/> }
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
      title: "Choco Factory Revamped",
      description: "A premium, chocolate-themed responsive landing page showcasing elegant UI, smooth animations, and mobile-friendly navigation.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Google Fonts (Poppins, Playfair Display)", "AWS S3 (static hosting)"],
      liveUrl: "https://choco-factory-revamped7.s3.us-east-1.amazonaws.com/Choco-Factory-Revamped-main/index.html",
      githubUrl: "https://github.com/gaganreddyas/Choco-Factory-Revamped",
      imageUrl: "https://raw.githubusercontent.com/gaganreddyas/Choco-Factory-Revamped/main/assets/Caro_9.webp",
      features: [
        "Responsive, mobile-first layout",
        "Polished hero with carousel previews",
        "Smooth, performant micro-interactions",
        "Optimized images and fonts for fast loads"
      ],
      caseStudy: {
        challenge: "Craft a visual identity for a premium chocolate brand while maintaining fast load times on mobile and preserving crisp imagery.",
        solution: "Implemented a responsive layout with prioritized content loading, compressed imagery, and subtle CSS-driven animations to enhance perceived performance.",
        learning: "Improved skills in responsive design, image optimization for web, and balancing aesthetics with performance for marketing pages."
      },
      date: "2025-10-17",
      slug: "choco-factory-revamped",
      readingTime: "2 min"
    },
    
  ],
  allProjects: [
  { title: "TaskMaster AI", category: "Fullstack", tech: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "Vercel", "Render"], desc: "A modern task management app with AI-powered priority scoring, built on a MERN stack with a clean monorepo setup for quick startup and deployment.", liveUrl: "https://taskmaster-ai-puce.vercel.app/", githubUrl: "https://github.com/gaganreddyas/taskmaster-ai", imageUrl: "https://raw.githubusercontent.com/gaganreddyas/taskmaster-ai/main/images/thumbnail.png" },
  { title: "MediFundr", category: "Fullstack", tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "Node.js", "Express.js", "Fetch API", "dotenv", "CORS"], desc: "Smart medical equipment loan calculator that computes EMI with live USD→INR conversion, delivered via a minimal frontend and a Node/Express API backend.", liveUrl: "https://medi-fundr.vercel.app/", githubUrl: "https://github.com/gaganreddyas/MediFundr", imageUrl: "https://raw.githubusercontent.com/gaganreddyas/MediFundr/main/assets/banner.jpg" },
  { title: "Language Guesser", category: "Backend/CLI", tech: ["Node.js", "franc", "langs"], desc: "Simple Node.js CLI that predicts a text’s language using franc for detection and langs for human-readable names.", liveUrl: "#", githubUrl: "https://github.com/gaganreddyas/language-guesser", imageUrl: "https://placehold.co/400x300/6366F1/FFFFFF?text=Language+Guesser" },
  { title: "Weather Web App", category: "Frontend", tech: ["HTML5", "CSS3", "JavaScript", "Weather API", "GitHub Pages"], desc: "Clean, responsive weather dashboard showing current conditions, hourly timeline, and air-quality highlights, deployed on GitHub Pages.", liveUrl: "https://gaganreddyas.github.io/Weather-Web-App/", githubUrl: "https://github.com/gaganreddyas/Weather-Web-App", imageUrl: "https://placehold.co/400x300/0EA5E9/FFFFFF?text=Weather+App" },
  { title: "Choco Factory Revamped", category: "Frontend", tech: ["HTML5", "CSS3", "JavaScript", "Google Fonts (Poppins, Playfair Display)", "AWS S3 (static hosting)"], desc: "A premium, chocolate-themed responsive landing page showcasing elegant UI, smooth animations, and mobile-friendly navigation.", liveUrl: "https://choco-factory-revamped7.s3.us-east-1.amazonaws.com/Choco-Factory-Revamped-main/index.html", githubUrl: "https://github.com/gaganreddyas/Choco-Factory-Revamped", imageUrl: "https://raw.githubusercontent.com/gaganreddyas/Choco-Factory-Revamped/main/assets/Caro_9.webp" },
  { title: "scoreKeeper", category: "Frontend", tech: ["HTML5", "CSS3", "JavaScript", "Bulma CSS", "GitHub Pages"], desc: "Lightweight, mobile-friendly score tracking app for quick player/team setup, instant updates, and easy resets during games.", liveUrl: "https://gaganreddyas.github.io/scoreKeeper/", githubUrl: "https://github.com/gaganreddyas/scoreKeeper", imageUrl: "https://raw.githubusercontent.com/gaganreddyas/scoreKeeper/main/assets/ping_pong.avif" },
  { title: "XOX-Game", category: "Frontend", tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"], desc: "Classic two-player Tic‑Tac‑Toe with clean UI, turn alternation, instant win/draw detection, and replay controls.", liveUrl: "https://gaganreddyas.github.io/XOX-Game/", githubUrl: "https://github.com/gaganreddyas/XOX-Game", imageUrl: "https://placehold.co/400x300/EF4444/FFFFFF?text=XOX-Game" },
  { title: "Stop-Watch", category: "Frontend", tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"], desc: "Space‑themed stopwatch with keyboard shortcuts, lap tracking, and a clean, responsive UI, deployed on GitHub Pages.", liveUrl: "https://gaganreddyas.github.io/Stop-Watch/", githubUrl: "https://github.com/gaganreddyas/Stop-Watch", imageUrl: "https://placehold.co/400x300/111827/FFFFFF?text=Stop-Watch", features: ["Start/Pause (Space), Reset (Backspace), Lap (Enter), Clear Lap (F2)", "Lap list with clear option", "Accurate timing with millisecond display", "Responsive, keyboard-first UX", "Lightweight, no external dependencies"], caseStudy: { challenge: "Design a stopwatch that feels instantaneous and keyboard-first, while keeping the codebase dependency-free and accessible.", solution: "Implemented a precise timer loop with debounced controls, mapped ergonomic keyboard shortcuts, and structured UI for quick scanning of laps and controls.", learning: "Refined event handling for keyboard inputs, ensured timing accuracy and drift handling, and polished a responsive, minimalist interface for focus and speed." }, featured: false, date: "2025-10-17", slug: "stop-watch", readingTime: "1 min" },
    
    { title: "Weather App (API Integration)", category: "Frontend", tech: ["React", "API"], desc: "Fetches and displays weather data.", liveUrl: "#", githubUrl: "#", imageUrl: "https://placehold.co/400x300/F59E0B/FFFFFF?text=Weather+App" },
    { title: "This Portfolio Website", category: "Frontend", tech: ["React", "Framer Motion"], desc: "A meta-project showcasing my skills.", liveUrl: "#", githubUrl: "#", imageUrl: "https://placehold.co/400x300/EC4899/FFFFFF?text=Portfolio" },
  ],
  blogCategories: ["All", "Project Deep Dives", "Technical Walkthroughs", "Learning Notes", "Cloud Computing"],

  blogPosts: [
    
    { title: "AI in 2025: Practical Impact, Not Hype", slug: "ai-in-2025-practical-impact", category: "Technical Walkthroughs", readingTime: 9, date: "2025-08-30", excerpt: "Where AI is actually delivering ROI today and how teams can adopt it responsibly.", imageUrl: "https://placehold.co/400x300/0EA5E9/FFFFFF?text=AI+2025", content: [
      "AI in 2025 has moved beyond proof-of-concepts. The most mature wins are in retrieval-augmented generation (RAG), customer support automation, code assist, and forecasting. Organizations that succeed treat AI like a product capability—not a novelty.",
      "RAG systems combine your private data with foundation models. The quality of chunking, embeddings, and evaluation (groundedness, hallucination rate) matters more than raw model size. Tooling has improved, but the fundamentals—data quality and feedback loops—remain the differentiators.",
      "Responsible adoption requires guardrails: data governance, prompt injection defenses, rate limiting, and clear human-in-the-loop workflows for high-risk actions. Measure business metrics (AHT, CSAT, resolution rate) alongside model metrics.",
      "For engineering teams, start with narrow use-cases where failure is cheap and feedback is fast. Build internal playbooks for prompt patterns, evaluation harnesses, and rollout stages. Ship small, learn quickly, and expand where impact is proven."
    ] },
  { title: "👨‍💻 Java and JavaScript? Same name, but worlds apart!", slug: "java-vs-javascript-same-name-different-worlds", category: "Learning Notes", readingTime: 4, date: "2025-10-12", excerpt: "If you've ever thought they were related, you're not alone. It's one of the most common points of confusion in the tech world.", imageUrl: "https://placehold.co/400x300/F59E0B/FFFFFF?text=Java+vs+JS", content: `If you've ever thought they were related, you're not alone. It's one of the most common points of confusion in the tech world. But the truth is, comparing Java to JavaScript is like comparing Neo 🕶️ to John Wick 🔫. Both are legendary, but they operate in completely different universes and with very different skill sets.

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
  
  // New post added 2025-10-20
  { 
    title: "AWS us-east-1 Outage: A Cloud Resilience Lesson",
    slug: "aws-us-east-1-outage-cloud-resilience-lesson",
    category: "Cloud Computing",
    readingTime: 5,
    date: "2025-10-20",
    excerpt: "A major AWS us-east-1 outage today sent ripples across the internet, transforming a simple website visit into a critical lesson on cloud dependencies, system architecture, and the true meaning of resilience. This post unpacks what happened and why it matters.",
    imageUrl: "https://static.withcode.uk/aws-dominoes-diwali.png",
    content: `Today, a routine attempt to access a major website quickly turned into an unexpected lesson in cloud infrastructure. Instead of the usual quick load, I was greeted with the infamous "504 Gateway Timeout." My initial thought, like many, was to check my own connection – "Did I break something?"

A quick diagnostic confirmed it wasn't my setup; the issue lay far upstream. Soon, the news channels and social media feeds lit up with reports: AWS \`us-east-1\` (N. Virginia), one of Amazon's most critical and foundational regions, was experiencing a significant outage.

### The Domino Effect: Why \`us-east-1\` Matters So Much

The term "domino effect" couldn't be more apt for today's events. While the primary problem, according to AWS, stemmed from issues with DNS resolution of the DynamoDB API endpoint *within* \`us-east-1\`, its impact rapidly rippled across the globe.

Why? Because \`us-east-1\` isn't just another region; it's a linchpin for much of AWS's global infrastructure:

* **Global Services Hub:** Many control planes for essential AWS global services, such as IAM (Identity and Access Management) and parts of Route 53 (DNS), have critical components located in \`us-east-1\`. A problem there means services *anywhere* in the world that depend on these global functions can be affected.
* **Core Service Dependency:** DynamoDB, the initial point of failure, is a foundational NoSQL database service utilized by dozens of other AWS services. When it stumbles, a cascade of failures across dependent services is almost inevitable.
* **The "Original" Region:** Being the oldest AWS region, \`us-east-1\` hosts a vast number of mission-critical applications for companies that have built on AWS for years.

The outcome was predictable but no less impactful: dashboards turned red, Slack channels exploded, and major applications ranging from social media to banking platforms experienced significant downtime. For a while, it truly felt like a collective "Ctrl + Alt + Panic" moment for the internet.

### Lessons in Resilience for the Cloud Era

Today's incident serves as a powerful, real-world reminder for anyone involved in cloud architecture, DevOps, or system reliability:

1.  **The Cloud is Powerful, But Not Magical:** While the cloud offers incredible scalability and flexibility, it's not immune to failures. It's a vast, complex network of interconnected systems, and understanding those dependencies is paramount.
2.  **Resilience Isn’t About Never Failing; It’s About Recovering Fast:** Incidents are inevitable. The true measure of a robust system isn't its absolute uptime (though that's important), but its ability to detect, diagnose, mitigate, and recover swiftly from failures.
3.  **Multi-Region Architecture Isn’t a Luxury; It’s a Necessity:** For truly critical applications, relying solely on a single cloud region, even a highly available one, introduces a single point of failure. Designing for active-active or active-passive deployment across multiple, geographically diverse regions is essential for business continuity.

### A Day of Unplanned "Fireworks"

This all unfolded on a significant day for many – Diwali. My thoughts are with the on-call engineers working hard in the "war rooms" – dedicated, high-pressure environments where teams rapidly collaborate to diagnose and resolve critical incidents – turning challenges into solutions. Their dedication is truly commendable.

To those whose applications experienced downtime today, know that it's a shared challenge, and you're not alone. And to those whose robust architectures allowed their services to remain resilient: well done.

Happy Diwali everyone! May your lights stay bright, and your servers stay up.`
  },
  ],
  experience: [
  { role: "Hands-on Full-Stack Development", company: "Personal Projects", period: "2024 - Present", description: "Building real-world projects using React, Node.js, and Express; focus on responsive UIs, API integrations, and cloud deployment.", skills: ["React", "Node.js", "Express", "AWS"], logo: "https://placehold.co/40x40/ffffff/6366F1?text=Code" },
  { role: "AWS Certified Cloud Practitioner", company: "Amazon Web Services", period: "Sep 2025", description: "Validated cloud fundamentals including compute, storage, and cost optimization; deployed personal projects to S3/EC2.", skills: ["AWS", "S3", "EC2"], logo: "https://placehold.co/40x40/ffffff/FF9900?text=AWS" },
  { role: "Core Team Member — Generative AI Study Jam", company: "GDG Sri Venkateswara College of Engineering", period: "Sep 2024 - Mar 2025", description: "Guided 100+ students through cloud and GenAI labs on Google Cloud Platform; resolved technical doubts and supported hands-on sessions.", skills: ["Cloud", "GenAI", "Mentoring"], logo: "https://placehold.co/40x40/ffffff/3B82F6?text=GDG" },
    
  ]
};
