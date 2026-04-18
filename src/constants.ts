import { 
  Code2, 
  Database, 
  Globe, 
  Layout, 
  Cpu, 
  Terminal, 
  GitBranch, 
  Monitor, 
  Users, 
  Wrench,
  Lightbulb, 
  MessageSquare,
  GraduationCap,
  Trophy,
  Briefcase,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  FileText
} from 'lucide-react';

export const STUDENT_INFO = {
  name: "Premi Sree Priya T S",
  tagline: "ECE Student | Java Developer | Problem Solver",
  roles: ["Aspiring Software Developer", "1st Semester Rank Holder"],
  about: "Hi, I'm 𝗣𝗿𝗲𝗺𝗶 𝗦𝗿𝗲𝗲 𝗣𝗿𝗶𝘆𝗮 𝗧 𝗦, an Electronics and Communication Engineering student with a strong interest in 𝗽𝗿𝗼𝗯𝗹𝗲𝗺 𝘀𝗼𝗹𝘃𝗶𝗻𝗴 and 𝘀𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁. I have a solid foundation in 𝗝𝗮𝘃𝗮 and 𝗦𝗤𝗟 and am currently focusing on 𝗗𝗮𝘁𝗮 𝗦𝘁𝗿𝘂𝗰𝘁𝘂𝗿𝗲𝘀 & 𝗔𝗹𝗴𝗼𝗿𝗶𝘁𝗵𝗺𝘀 (𝗗𝗦𝗔) to strengthen my problem-solving skills.\n\nI enjoy breaking down problems and building simple, logical solutions while continuously exploring new technologies and improving my technical skills.\n\nI have maintained strong academic performance, including securing a rank in my first semester, and have actively participated in technical events, gaining valuable insights and winning in a few competitions.\n\nI also enjoy speaking and improving my communication skills. My goal is to grow into a skilled 𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿 and contribute to impactful solutions.",
  location: "Chennai, India",
  email: "ts.premisreepriya59@gmail.com",
  socials: {
    linkedin:"https://www.linkedin.com/in/ts-premisreepriya/",
    github: "https://github.com/premisreepriya",
    resume: "/resume.pdf" // Placeholder
  }
};

export const SKILLS = [
  {
    category: "Programming Languages",
    icon: Code2,
    items: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
    ]
  },
  {
    category: "Core CS",
    icon: Cpu,
    items: [
      { name: "DSA (Basics)", logo: "https://cdn-icons-png.flaticon.com/512/8637/8637101.png" },
      { name: "OOPS", logo: "https://cdn-icons-png.flaticon.com/512/10169/10169724.png" }
    ]
  },
  {
    category: "Web Technologies",
    icon: Globe,
    items: [
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ]
  },
 {
    category: "Databases",
    icon: Database,
    items: [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
    ]
  } ,
   {
    category: "Tools & Platforms",
    icon: Wrench,
    items: [
      { name: "canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg " },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
    ]
  },
  {
    category: "Soft Skills",
    icon: Users,
    items: [
      { name: "Communication", logo: "https://cdn-icons-png.flaticon.com/512/2352/2352165.png" },
      { name: "Teamwork", logo: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png" },
      { name: "Problem Solving", logo: "https://cdn-icons-png.flaticon.com/512/2040/2040504.png" }
    ]
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering – Electronics and Communication Engineering",
    institution: "Panimalar Engineering College, Chennai",
    period: "2023 – 2027",
    score: "CGPA: 9.1"
  },
  {
    degree: "Class XII, CBSE",
    institution: "Sri Chaitanya Techno School, Bangalore, Karnataka",
    score: "Percentage: 84.2%"
  },
  {
    degree: "Class X, CBSE",
    institution: "Maharishi Vidya Mandir, Tiruvannamalai, Tamil Nadu",
    score: "Percentage: 82.4%"
  }
];

export const ACHIEVEMENTS = [
  {
    
  title: "Advanced to Round 2 ",
  organization: "Chennai Institute of Technology", // ✅ ADD THIS LINE
  description: "Debugged and resolved runtime errors within a strict time limit in a technical event.",
  category: "achievement",
  image: "/images/achievements/round2.jpg"
},
  {
  title: "2nd Place - Hackatronics 2K25",
  organization: "Panimalar Engineering College",
 description: "Secured 2nd place as part of a team and won ₹1000 by building a prototype centralized platform for ECE students.",
  category: "achievement",
  image: "/images/achievements/hackatronics.jpg"
},
  {
  title: "2nd Place - Paper Presentation",
  organization: "RMK Engineering College",
  description: "Secured 2nd place as part of a team and ₹1000 for presenting an idea on 'A Next-Gen Emergency System for Women's Safety', a LoRa-based real-time alert solution.",
  category: "achievement",
  image: "/images/achievements/paper.jpg"
},
 {
  title: "3rd Rank - 1st Semester",
  organization: "Panimalar Engineering College",
  description: "Achieved 3rd rank with a GPA of 9.10 and received a merit cash prize of ₹10,000 for academic excellence.",
  category: "achievement",
  image: "/images/achievements/rank.jpg",
  imageFit: "contain" 
},
 
  {
  title: "24-Hour Hackathon Participation",
  organization: "SSN College of Engineering",
  description: "Participated as part of a team in a 24-hour hackathon, building a Smart Budget Tracker prototype and gaining hands-on experience in teamwork, problem-solving, and rapid development.",
  category: "activity",
  image: "/images/activities/hackathon.jpg",
  imageFit: "contain"
},
 
];

export const PROJECTS = [
{title: "EV Adoption Forecasting in Washington Counties",
description: "A machine learning system that predicts EV adoption across 39 counties in Washington using historical data and Random Forest regression. It includes a Streamlit web app for visualizing future adoption trends.",
 tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Streamlit", "Joblib"],
category: "software",
github: "https://github.com/PremiSreePriya/EV_Adoption_Forecasting",  // replace with your GitHub link
demo: "#",    // replace with live Streamlit app link if available
image: "/images/projects/ev-forecast.jpg"  // replace with your screenshot
},
   {
    title: "ECE News & Jobs Aggregator Web",
    description: "Developed a web platform to aggregate ECE news, job openings, and internships in one place. Features a scalable design, simple navigation, and a user-friendly interface for students and professionals.",
    tech: ["React", "Tailwind CSS", "Firebase", "NewsAPI", "Web Scraping"],
    category: "software",
    github: "https://github.com/PremiSreePriya",
    demo: "#",
    image: "/images/projects/ece.jpg"
  },
  {
    title: "Sign Language Translator",
    description: "Built a real-time sign language recognition system using MediaPipe for hand landmarks and a Random Forest model to classify gestures from 21 landmark points, enabling accurate real-time predictions from webcam input.",
   tech: ["Python", "OpenCV", "MediaPipe", "Scikit-learn", "NumPy", "Pandas"],
    category: "software",
    github: "https://github.com/PremiSreePriya/Sign-Language-Translator",
    demo: "#",
    image: "/images/projects/sign-language.jpg"
  },
  {
    title: "Project in Progress – Exploring New Ideas",
    description: "",
    tech: ["C++", "ESP32", "MQTT", "Sensors"],
    category: "hardware",
    github: "",
    demo: "#",
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=600&h=400&q=80"
  }
];

export const INTERNSHIPS = [
  {
    role: "AI & Data Analytics Intern",
    company: "Edunet Foundation (AICTE & Shell)",
    period: "July–Aug 2025",
    description: "Worked on EV data analysis and forecasting using Python, including preprocessing and model building. Developed a Streamlit-based application to visualize and present analytical results.",
    image: "/images/internships/aicte.jpg"
  },
  {
    role: "Project Trainee",
    company: "Titan Company Limited, Hosur",
    period: "June 2025",
    description: "Integrated APIs for a Gold Live Price Calculator to enable real-time data updates. Gained exposure to enterprise workflows and improved application efficiency through optimized API usage",
    image: "/images/internships/titan.jpg"
  }
];

export const CODING_PROFILES = [
  {
    platform: "GeeksforGeeks",
    description: "Practicing DSA regularly and improving problem solving skills.",
    link: "https://www.geeksforgeeks.org/user/premisreepriya/",
    icon: Code2
  },
  {
    platform: "LeetCode",
    description: "Solving algorithmic challenges to enhance logical thinking.",
    link: "https://leetcode.com/u/premisreepriya/",
    icon: Terminal
  }
<<<<<<< HEAD
];
=======
];
>>>>>>> 071ff47b9993ddda542c09440ba808495bb9822c
