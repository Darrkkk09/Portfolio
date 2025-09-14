import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
  designation: "Backend Developer",
  company: "Jarnox",
  startDate: "Aug 2025",
  endDate: "Present",
  isCurrentJob: true,
  location: "Remote ",
  description: [
    "Working on backend services and APIs for a stock market website handling real-time financial data.",
    "Building and optimizing RESTful APIs using FastAPI to fetch and process stock market data.",
    "Testing PostgreSQL queries for efficient storage and retrieval of stock-related information.",
    "Developed a basic understanding of DevOps practices and version control workflows.",
  ]
},

  {
  designation: "Backend Developer Intern",
  company: "The Entrepreneurship Network",
  startDate: "Jun 2025",
  endDate: "Aug-2025",
  isCurrentJob: true,
  location: "Remote ",
  description: [
    "Developed backend APIs using modern frameworks Like Node.js , Express.js and Django.",
    "Implemented efficient database queries and optimized server performance.",
    "Collaborated with frontend and design teams to deliver seamless user experiences.",
    "Followed best practices for clean code, testing, and version control.",
    "Gained hands-on experience in scalable software development"
  ],
},
{
  designation: "Frontend Developer Intern",
  company: "Apex Planet (AICTE Intern)",
  startDate: "Apr 2025",
  endDate: "May 2025",
  isCurrentJob: false,
  location: "Remote / India",
  description: [
    "Developed dynamic  web interfaces using HTML, EJS, Tailwind CSS, and JavaScript.",
    "Optimized website performance and loading speed through efficient coding practices.",
    "Integrated responsive design principles to ensure seamless experiences across devices.",
    "Collaborated in a team environment using Git for version control and project tracking.",
    "Enhanced problem-solving skills by building real-world web application components."
  ],
}

];

export default experiences;
