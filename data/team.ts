export interface TeamMember {
  id: string;
  name: string;
  role: string;
  skills: string[];
  bio: string;
  avatar: string;
  socials?: {
    github?: string;
    linkedin?: string;
  };
}

export const teamData: TeamMember[] = [
  {
    id: "1",
    name: "Arya Pratama",
    role: "Lead Full-Stack Engineer",
    skills: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    bio: "Berpengalaman 6+ tahun memimpin pengembangan aplikasi web berskala enterprise dan arsitektur cloud modern.",
    avatar: "/team/arya.webp",
  },
  {
    id: "2",
    name: "Dinda Larasati",
    role: "UI/UX Designer & Product Lead",
    skills: ["Figma", "Design System", "User Research", "Tailwind CSS"],
    bio: "Fokus pada kenyamanan pengguna, estetika visual bersih, dan aksesibilitas antarmuka modern.",
    avatar: "/team/dinda.webp",
  },
  {
    id: "3",
    name: "Rizky Ramadhan",
    role: "Senior Frontend Engineer",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    bio: "Spesialis interaktivitas web modern, animasi performan, dan optimasi core web vitals.",
    avatar: "/team/rizky.webp",
  },
  {
    id: "4",
    name: "Fajar Nugraha",
    role: "Mobile App Engineer",
    skills: ["React Native", "Flutter", "iOS & Android", "Firebase"],
    bio: "Ahli dalam membangun aplikasi mobile lintas platform yang cepat, ringan, dan intuitif.",
    avatar: "/team/fajar.webp",
  },
  {
    id: "5",
    name: "Bagas Wicaksono",
    role: "Backend & Cloud Engineer",
    skills: ["Go", "Node.js", "Docker", "AWS / Cloudflare"],
    bio: "Merancang API tangguh, skalabilitas database, dan keamanan sistem backend.",
    avatar: "/team/bagas.webp",
  },
  {
    id: "6",
    name: "Putri Anggraini",
    role: "Lead Student Mentoring",
    skills: ["Algorithms", "Python", "Web Fundamentals", "Pedagogy"],
    bio: "Pengajar ramah yang berdedikasi membimbing mahasiswa memahami konsep pemrograman secara mandiri dan percaya diri.",
    avatar: "/team/putri.webp",
  },
  {
    id: "7",
    name: "Dimas Setiawan",
    role: "Frontend Developer & Mentor",
    skills: ["JavaScript", "HTML/CSS", "React", "Git & GitHub"],
    bio: "Membimbing ratusan mahasiswa dalam menyusun portofolio web perdana dan best practice penulisan kode.",
    avatar: "/team/dimas.webp",
  },
  {
    id: "8",
    name: "Anisa Rahma",
    role: "Quality Assurance & Code Reviewer",
    skills: ["Automated Testing", "Clean Architecture", "Code Review"],
    bio: "Memastikan standar kualitas kode terbaik, zero bug fatal, dan kesiapan presentasi teknis.",
    avatar: "/team/anisa.webp",
  },
  {
    id: "9",
    name: "Gilang Permana",
    role: "DevOps & Performance Specialist",
    skills: ["CI/CD", "Vercel", "Monitoring", "SEO & Performance"],
    bio: "Menjaga waktu loading situs selalu secepat kilat dan skor Google Lighthouse di atas 90.",
    avatar: "/team/gilang.webp",
  },
  {
    id: "10",
    name: "Siti Nurhaliza",
    role: "Project Manager & Client Relations",
    skills: ["Agile/Scrum", "Client Communication", "Scheduling"],
    bio: "Menjaga komunikasi proyek tetap transparan, timeline tepat waktu, dan kepuasan klien terjamin.",
    avatar: "/team/siti.webp",
  },
];
