import { IServiceItem } from "@/types";

const services: IServiceItem[] = [

  {
    id: 1,
    title: "Frontend Development",
    icons: [
      "/skills/css.svg",
      "/skills/nextjs.png",
      "/skills/react.svg",
      "/skills/html.svg",
      "/skills/css.svg",
    ],
    shortDescription: "I build visually stunning and user-friendly websites.",
description: 
  "I develop clean, responsive, and user-focused websites using modern technologies. My solutions prioritize performance, accessibility, and SEO to deliver an exceptional browsing experience that drives business success."

  },
  {
    id: 2,
    title: "Backend Development",
    icons: [
      "/skills/socket-io.png",
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/nodejs.svg",
      "/skills/socket-io.png"
    ],
    shortDescription: "I develop responsive and user-friendly websites.",
    description:
      "I develop efficient database structures, APIs, and configure servers for optimal performance, security, and scalability, ensuring your applications handle high traffic and complex data management seamlessly. Rely on strong backend solutions.",
  },
  {
    id: 3,
    title: "Database Management",
    icons: [
      "/skills/mysql.svg",
      "/skills/firebase.svg",
      "/skills/mongodb.svg",
      "/skills/postgresql.svg",
      "/skills/nodejs.svg"
    ],
    shortDescription: "I manage and optimize your database systems.",
    description:
      "I manage and optimize your database systems for performance, reliability, and scalability. With expertise in SQL and NoSQL databases, I design schemas, write complex queries, and implement best practices for data integrity and security. Ensure your data is managed effectively and efficiently.",
  },
  {
  id: 4,
  title: "API Integration",
  icons: [
    "/skills/nodejs.svg",
    "/skills/express.svg",
    "/skills/react.svg",
    "/skills/express.svg",
    "/skills/nodejs.svg"
  ],
  shortDescription: "I integrate APIs for seamless data exchange.",
  description:
    "I specialize in integrating RESTful and GraphQL APIs to enable seamless communication between applications. From third-party services like payments, maps, and social logins to real-time stock market data, I ensure reliable, secure, and efficient API connections tailored to project needs."
}

];

export default services;
