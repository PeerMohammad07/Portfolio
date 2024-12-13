import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dreamBuyImg from "@/public/dreambuyImage.png";
import kefImg from "@/public/keff.png";
import snapGalleryImg from "@/public/snap.png";
import blogManagementImg from "@/public/Blog.png";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiGit, 
  SiTailwindcss, 
  SiBootstrap, 
  SiRedux, 
  SiMongodb, 
  SiPostgresql, 
  SiMui 
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

// Navigation Links
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// Experience Data
export const experiencesData = [
  {
    title: "Graduated Bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in one job and 1 year in another job. I also upskilled to full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

// Project Data
export const projectsData = [
  {
    title: "Dream Buy - Real Estate Application",
    description:
      "Developed a full-featured real estate platform allowing users to buy, sell, and rent properties.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Mapbox API"],
    imageUrl: dreamBuyImg, 
  },
  {
    title: "Klassic Empire Furniture (KEF)",
    description:
    "E-commerce furniture platform with online payments, wishlist, admin dashboard, and property zoom, built with MVC architecture.",
    tags: ["Node.js", "MongoDB", "Razorpay", "AWS", "EJS"],
    imageUrl: kefImg, 
  },
  {
    title: "Snap Gallery",
    description:
    "An image management platform with drag-and-drop functionality for uploading, editing, and organizing images.",
    tags: ["React", "Node.js", "MongoDB", "DND Kit"],
    imageUrl: snapGalleryImg, 
  },
  {
    title: "Blog Management System",
    description:
    "A blog platform with JWT authentication, Redux, and CRUD features for blogs.",
    tags: ["React", "Node.js", "MongoDB", "JWT", "Redux"],
    imageUrl: blogManagementImg, 
  }
] as const;

// Skills Data
export const skillsData = [
  { skill: "HTML", icon: React.createElement(SiHtml5) },
  { skill: "CSS", icon: React.createElement(SiCss3) },
  { skill: "JavaScript", icon: React.createElement(SiJavascript) },
  { skill: "TypeScript", icon: React.createElement(SiTypescript) },
  { skill: "React", icon: React.createElement(SiReact) },
  { skill: "Next.js", icon: React.createElement(SiNextdotjs) },
  { skill: "Node.js", icon: React.createElement(SiNodedotjs) },
  { skill: "Express.js", icon: React.createElement(SiExpress) },
  { skill: "Git", icon: React.createElement(SiGit) },
  { skill: "Tailwind", icon: React.createElement(SiTailwindcss) },
  { skill: "Bootstrap", icon: React.createElement(SiBootstrap) },
  { skill: "Redux", icon: React.createElement(SiRedux) },
  { skill: "Context API", icon: React.createElement(SiReact) }, 
  { skill: "Data Structures", icon: React.createElement(FaDatabase) },
  { skill: "Algorithms", icon: React.createElement(FaDatabase) },
  { skill: "MongoDB", icon: React.createElement(SiMongodb) },
  { skill: "PostgreSQL", icon: React.createElement(SiPostgresql) },
  { skill: "Material UI", icon: React.createElement(SiMui) }
];