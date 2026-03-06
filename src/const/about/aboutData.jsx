// About
export const aboutMeData = {
  name: "Indra",
  title: "Software Engineer",
  paragraphs: [
    <>
      Hi, I'm <span className="font-semibold text-blue-400">Indra</span> — a Software Engineer passionate about web
      development, databases, and information systems.
    </>,
    <>
      I'm a communicative and adaptable person who loves problem-solving to create impactful digital solutions.
    </>
  ]
};

// Bio
export const skillInternRsup = ["Laravel", "Javascript", "Bootstrap 5", "MySQL"];

export const timelineData = [
  {
    year: "2004",
    description: (
      <>Born in <span className="text-blue-400 font-bold">Palembang, Indonesia</span></>
    )
  },
  {
    year: "2018-2021",
    description: (
      <>Graduate from <span className="text-blue-400 font-bold">YPI Tunas Bangsa Palembang Highschool</span>, with a major in <span className="text-blue-400 font-bold">social sciences</span></>
    )
  },
  {
    year: "2021–2025",
    duration: "(3.5 years)",
    description: (
      <>Graduate with a bachelor degree in <span className="text-blue-400 font-bold">Information Systems</span> from <span className="text-blue-400 font-bold">University Multi Data Palembang</span></>
    )
  },
  {
    year: "2024, Feb - Juni",
    description: (
      <>Internship at <span className="text-blue-400 font-bold">RSUP dr. Mohammad Hoesin Palembang</span> as a <span className="text-blue-400 font-bold">Full Stack developer</span></>
    ),
    skills: skillInternRsup
  }
];

// ProgrammingSkills
export const skillCategories = [
  {
    name: "Frontend",
    skills: ["HTML", "CSS", "Javascript", "React.js", "Vue.js"],
    color: "blue"
  },
  {
    name: "Backend",
    skills: ["PHP", "Laravel", "Python", "Java"],
    color: "teal"
  },
  {
    name: "Mobile",
    skills: ["Flutter", "Dart"],
    color: "cyan"
  },
  {
    name: "Database",
    skills: ["MySQL", "PostgreSQL","MongoDB"],
    color: "sky"
  },
  {
    name: "CSS Frameworks",
    skills: ["Bootstrap", "Tailwind CSS"],
    color: "indigo"
  }
];

export const colorClasses = {
  blue: "bg-blue-400/10 text-blue-400 border-blue-400/30",
  teal: "bg-teal-400/10 text-teal-400 border-teal-400/30",
  cyan: "bg-cyan-400/10 text-cyan-400 border-cyan-400/30",
  sky: "bg-sky-400/10 text-sky-400 border-sky-400/30",
  indigo: "bg-indigo-400/10 text-indigo-400 border-indigo-400/30"
};
