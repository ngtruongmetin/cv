import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Truong Ngoc Dang",
  initials: "DNT",
  location: "Tan Khanh Ward, Ho Chi Minh City, Vietnam",
  locationLink: "https://maps.app.goo.gl/mVuqZQeXVufVhrEH6",
  about: "Full Stack Website Developer. Educational Technology Enthusiast.",
  summary: (
    <>
      Full Stack Website Developer with substantive experience designing and delivering
      web solutions for educational organizations in Vietnam. Since 2022, I have
      supported digital transformation initiatives by architecting and building
      learning resource websites, intelligent learning platforms, and school
      portals that align with Industry 4.0 objectives. My practice combines
      robust front-end engineering, scalable server-side systems, and human-centred
      product design to create high-quality, maintainable software for educators
      and learners.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/183300231?s=400&u=990c8e6eb015240a901ebc05903e06d64323f72b&v=4",
  personalWebsiteUrl: "https://ngtruong.bcic.edu.vn",
  contact: {
    email: "ngtruongmetin@gmail.com",
    tel: "+84 86 591 6475",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ngtruongmetin",
        icon: "github",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/school.i205",
        icon: "facebook",
      },
    ],
  },
  education: [
    {
      school: "Binh Chuan Secondary School",
      degree:
        "Third prize - Thuan An City Science and Engineering Fair (2023); Third prize (2024). Winner - Binh Duong Province Software Innovation Competition (2024).",
      start: "2020",
      end: "2024",
    },
    {
      school: "Nguyen Trai - Binh Duong High School",
      degree:
        "Developing website solutions to support digital transformation in education.",
      start: "2024",
      end: "2027",
    },
  ],
  work: [
    {
      company: "Binh Chuan IT Club",
      link: "https://bcic.edu.vn",
      badges: ["HTML", "CSS", "JavaScript","PHP", "MySQL", "Competitive Programming"],
      title: "Founder & Lead Instructor",
      start: "2023",
      end: null,
      description: (
        <>
          Lead technical responsibility for club digital initiatives: design and
          maintenance of educational websites, development of learning resources,
          and instruction of algorithm and data structure courses. Oversaw
          student teams in competitive programming and coached participants to
          provincial-level awards across multiple years.
        </>
      ),
    },
    {
      company: "Freelancer - Educational Website Solutions",
      link: "https://ngtruong.bcic.edu.vn",
      badges: ["React", "Next.js", "Node.js", "EdTech"],
      title: "Freelance Full Stack Engineer",
      start: "2022",
      end: null,
      description: (
        <>
          Provide end-to-end website development services to schools and educational
          organizations, including digital learning platforms, content management
          systems for learning resources, and integration of intelligent features
          to support personalised learning. Responsibilities include requirements
          analysis, architecture design, implementation, deployment and post-launch
          support.
        </>
      ),
    },
    {
      company: "DesDevT",
      link: "",
      badges: ["Founder", "Full Stack", "Consulting"],
      title: "Founder & Technical Lead",
      start: "2022",
      end: "2024",
      description: (
        <>
          Founded DesDevT to provide bespoke full-stack development and technology
          consulting services to SMEs and educational institutions. Delivered
          project portfolios including school portals and resource libraries.
          Company operations concluded in 2024 after a successful delivery cycle.
        </>
      ),
    },
  ],
  skills: [
    // Frontend
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    // Backend
    "Node.js",
    "PHP",
    "MySQL",
    "MongoDB",
    // Core Competencies
    "System Architecture",
    "Educational Technology",
    "Technical Mentorship",
    "Problem Solving",
    "C++",
    "Python",
  ],

  projects: [
    {
      title: "LEJAI",
      techStack: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
      description:
        "This is a website that helps high school students learn multilingual vocabulary. Used for the Vietnam Science and Engineering Fair (ViSEF) 2025-2026.",
      link: {
        label: "lejai.bcic.edu.vn",
        href: "https://lejai.bcic.edu.vn/",
      },
    },
    {
      title: "HCM - Ebook",
      techStack: ["Node.js", "EJS", "MySQL"],
      description:
        "This is website for learning Local Education subject in Ho Chi Minh city.",
      link: {
        label: "hcm-ebook",
        href: "https://diaphuongso.edu.vn",
      },
    },
  ],
} as const;
