import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
{
  id: "velocity-ride-booking",
  title: "VeloCity - Ride Booking Platform",
description: "A full-stack ride booking platform featuring real-time driver tracking, vehicle selection, and optimized routing using OpenRouteService (ORS) for shortest distance calculation. Integrated secure payment gateway for seamless fare transactions and dynamic fare calculation based on distance and vehicle type. Built with React, Node.js, Socket.IO, and MapLibre GL JS to deliver a smooth and interactive user experience.",
  icon: "/skills/react.svg",
  repoType: RepoType.Public,
  projectType: ProjectType.Personal,
  githubUrl: "https://github.com/Darrkkk09/VeloCity-",
  tags: ["React", "Node.js", "Socket.IO", "MapLibre GL JS","RazorPay", "OpenRouteService"]
},
{
  id: "multiplayer-chess-game",
  title: "Chessly",
  description: "An interactive multiplayer chess platform with real-time gameplay using Socket.IO for seamless move synchronization between players. Built with Node.js, Express.js, and EJS templates for dynamic rendering. Integrated chess.js for move validation and game logic, ensuring fair play and rule enforcement. Deployed on Render for fast and reliable hosting.",
  icon: "/skills/nodejs.svg",
  repoType: RepoType.Public,
  projectType: ProjectType.Personal,
  githubUrl: "https://github.com/Darrkkk09/chess_backend",
  url: "https://chess-backend-8.onrender.com",
  tags: ["Node.js", "Express.js", "EJS", "Socket.IO", "Render"]
},
{
  id: "aura-bot",
  title: "Aura Bot - College Assistance Chatbot",
  description: "A smart conversational chatbot developed for my college to handle student queries, share event updates, and provide quick access to resources. Built using Next.js and TypeScript for a modern, scalable front-end experience, with backend logic and API integrations for natural language understanding. Features an intuitive UI for ease of use and is optimized for both desktop and mobile platforms.",
  icon: "/skills/nextjs.png",
  repoType: RepoType.Public,
  projectType: ProjectType.Personal,
  githubUrl: "https://github.com/Darrkkk09/Aurabot",
  tags: ["Next.js", "TypeScript", "Chatbot", "NLP", "JavaScript"]
}
,
{
  id: "Chatterly",
  title: "Chatterly - Real-Time Chat Application",
  description: "A real-time chat platform built with the MERN stack, featuring private and group messaging, live typing indicators, and message read receipts. Implemented Socket.IO for instant communication and MongoDB for persistent chat history. Includes secure user authentication with JWT and a responsive UI for both desktop and mobile devices.",
  icon: "/skills/react.svg",
  repoType: RepoType.Public,
  projectType: ProjectType.Personal,
  githubUrl: "https://github.com/Darrkkk09/Chatterly",
  tags: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO", "JWT", "MERN"]
}
,




];
export default projects;
