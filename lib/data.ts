import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpCommentImg from "@/public/corpcomment.png";
import rmtDevImg from "@/public/rmtdev.png";
import wordAnalyticsImg from "@/public/wordanalytics.png";

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

export const experiencesData = [
  {
    company: 'Deerhold Ltd',
    title: 'Associate Software Engineer',
    location: 'Sifal, Kathmandu',
    description: `I'm currently a Associate Software Engineer at Deerhold Ltd, where I thrive in both client-facing and product development roles. Proficient in frameworks like Struts 1.0 and Spring.`,
    date: '2023',
    icon: ''
  },
  {
    company: '',
    title: "Freelancer",
    location: "",
    description:
    "As a freelancer, I created an accounting web app using Spring Boot, ensuring security with Spring Security and enhancing user experience with React.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2023",
  },
  {
    company: 'PASA Dalmoth',
    title: "Book keeper" ,
    location: 'Taudaha, Kathamandu',
    description: "I previously worked as a bookkeeper, handling daily transactions, checking accounting records, and matching them with bank statements for accuracy.",
    date: '2016-2018',
    icon: ''
  }
] as const;

export const projectsData = [
  {
    title: "GAN MODEL",
    description:
      "I build a GAN model with my project member for College Major project. The model restores distorted image and fills it with suitable color.",
    tags: ["React", "MongoDB", "Python", "Tensorflow"],
    imageUrl: corpCommentImg,
    site: "https://github.com/am-0007/major-project-GAN-model",
  },
  {
    title: "E-commerce websites",
    description:
      "I build e-commerce websites for minor project and successfully implemented recommendation system.",
    tags: ["React", "Spring"],
    imageUrl: rmtDevImg,
    site: "https://github.com/am-0007/HomeDecor_P"
  },
  {
    title: "Oauth2 Authentication",
    description:
      "Worked on building custom spring oauth2 security system. Added custom filter chain, Authentication Provider and Manger to handel user authentication, and integrated sms for user registration.",
    tags: ["HTML", "CSS", "Postgres", "Java", "Spring Security"],
    imageUrl: corpCommentImg,
    site: "#"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Pytorch",
  "TensorFlow",
  "Java",
  "Spring",
  "Flask",
  "Docker"
] as const;
