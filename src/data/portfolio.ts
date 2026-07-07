export const personal = {
  name: "Manish Kumar",
  title: "Full-Stack Developer",
  location: "Chennai, India (Remote)",
  email: "manishkr00815@gmail.com",
  linkedin: "",
  github: "",
  bio: `Full-Stack Developer with 5+ years of experience building scalable healthcare software. BTech graduate from NIT Allahabad, currently working remotely at Vitasoft Technologies (parent company: Vibrant America). I specialize in NestJS, Next.js, and MongoDB — from system architecture and backend development to full product delivery in regulated health-tech environments.`,
};

export const skills = {
  languages: ["JavaScript", "TypeScript"],
  frontend: ["React.js", "Next.js"],
  backend: ["Node.js", "NestJS"],
  database: ["MongoDB", "Redis"],
  architecture: ["Monorepo (Nx, Turborepo)", "Microservices"],
  messaging: ["Kafka", "RabbitMQ (RMQ)"],
  integrations: ["DocuSign REST API", "JWT Authentication", "2FA"],
  other: ["Event-driven Systems", "API Design", "System Architecture"],
};

export type ExperienceItem = {
  role: string;
  company: string;
  parent?: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Senior Software Developer",
    company: "Vitasoft Technologies Pvt Ltd",
    parent: "Vibrant America",
    period: "Jun 2021 – Present",
    description:
      "Building healthcare sector software as a full-stack developer using NestJS, Next.js, and MongoDB. Leading architecture, backend development, and cross-team integrations.",
  },
  {
    role: "Junior Software Engineer",
    company: "Codalyze Technologies",
    period: "Aug 2020 – Apr 2021",
    description:
      "Developed web applications using JavaScript, Node.js, React.js, and MongoDB.",
  },
];

export const education = [
  {
    degree: "BTech",
    school: "NIT Allahabad",
    period: "2016 – 2020",
  },
  {
    degree: "School",
    school: "JNV Saran",
    period: "2014",
  },
];

export const projects = [
  {
    title: "Concierge System",
    role: "Lead / Architect",
    description:
      "End-to-end platform for mobile phlebotomists in the healthcare sector. Patients can schedule blood collection; reports are generated automatically.",
    stack: [
      "NestJS",
      "Next.js",
      "MongoDB",
      "Redis",
      "Nx",
      "Turborepo",
      "Kafka",
      "RabbitMQ",
    ],
    highlights: [
      "Monorepo architecture with Nx and Turborepo",
      "Admin portal and company portal",
      "Kafka for external team communication (lab, mobile app)",
      "RabbitMQ for internal microservice communication",
      "Redis + MongoDB for performance and reduced DB load",
      "Cross-team collaboration with lab and mobile app teams",
    ],
  },
  {
    title: "Authentication & Login System",
    role: "Developer",
    description:
      "Secure authentication system for phlebotomists and internal users with JWT, middleware, and two-factor authentication.",
    stack: ["NestJS", "JWT", "Cookies", "Middleware", "2FA"],
    highlights: [
      "JWT-based auth with secure cookie storage",
      "Custom middleware for route protection",
      "Two-factor authentication (2FA)",
      "Role-based access control",
    ],
  },
  {
    title: "Patient Portal",
    role: "Developer",
    description:
      "Patient-facing portal for tracking kits and viewing reports with secure, role-scoped data access.",
    stack: ["NestJS", "Next.js", "MongoDB"],
    highlights: [
      "Patient login and self-service portal",
      "Live kit tracking",
      "Report viewing and history",
      "Secure, role-scoped data access",
    ],
  },
  {
    title: "Event Logs System",
    role: "Developer",
    description:
      "Audit and tracking system for phlebotomist and company workflows with real-time visibility for patients and admins.",
    stack: ["Kafka", "MongoDB", "NestJS"],
    highlights: [
      "Logged every step of phlebotomist and company workflows",
      "Kafka-based event streaming",
      "Patient-facing progress visibility",
      "Admin dashboard for step tracking",
      "Support ticket creation when workflows get stuck",
    ],
  },
  {
    title: "DocuSign E-Sign Automation",
    role: "Developer",
    description:
      "Full automation of agreement signing for the company using DocuSign REST APIs.",
    stack: ["DocuSign REST API", "NestJS"],
    highlights: [
      "Template creation and reuse",
      "Envelope creation (composite and direct)",
      "Sign now and sign later flows",
      "Automated reminder emails via DocuSign",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
