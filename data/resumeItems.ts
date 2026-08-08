import { ResumeItemProps } from "@/components/ResumeItem";

const resumeItems: {
  experience: ResumeItemProps[];
  education: ResumeItemProps[];
  volunteering: ResumeItemProps[];
} = {
  experience: [
    {
      imageSrc: "/arttitude.jpeg",
      title: "Tech Lead Intern",
      company: "Arttitude",
      date: "June 2026 - Aug. 2026",
    },
    {
      imageSrc: "/arbc.jpeg",
      title: "Web Development Lead",
      company: "American Regional Biology Competition",
      date: "Aug. 2025 - present",
    },
    {
      imageSrc: "/uc_davis.jpeg",
      title: "Researcher",
      company: "COSMOS, UC Davis",
      date: "July 2025 - Aug. 2025",
    },
    {
      imageSrc: "/aristo_ai.jpeg",
      title: "Quality Assurance Intern",
      company: "Aristo AI",
      date: "Apr. 2025 - May 2025",
    },
    {
      imageSrc: "/asdrp.jpeg",
      title: "Researcher, Dennis Liu's Lab",
      company: "Aspiring Scholars Directed Research Program",
      date: "Aug. 2024 - July 2025",
    },
  ],
  education: [
    {
      imageSrc: "/sbcc.jpeg",
      title: "Dual-enrollment Student",
      company: "Santa Barbara City College",
      date: "June 2026 - July 2026",
    },
    {
      imageSrc: "/mpc.jpeg",
      title: "Dual-enrollment Student",
      company: "Monterey Peninsula College",
      date: "Jan. 2025 - July 2026",
    },
    {
      imageSrc: "/avhs.jpeg",
      title: "Student",
      company: "Amador Valley High School",
      date: "Aug. 2024 - May 2027",
    },
    {
      imageSrc: "/fhs.jpeg",
      title: "Student",
      company: "Foothill High School",
      date: "Aug. 2023 - May 2024",
    },
  ],
  volunteering: [
    {
      imageSrc: "/ace_coding.jpeg",
      title: "Coding Instructor",
      company: "ACE Coding",
      date: "Aug. 2024 - July 2025",
    },
    {
      imageSrc: "/engin.jpeg",
      title: "Peer Mentor",
      company: "ENGin",
      date: "Mar. 2024 - July 2025",
    },
  ],
};

export default resumeItems;
