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
    title: 'Trainee',
    location: 'Sifal, Kathmandu',
    description: 'I worked as a trainee, currently in probation period, in Japanese project which was based on Java struts framework.',
    date: '2023',
    icon: ''
  },
  {
    title: "Freelancer",
    location: "",
    description:
      "I worked as a freelancer to build accounting website and handled both front-end and backend application. ",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2022",
  },
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
  "Kafka",
  "Docker"
] as const;
