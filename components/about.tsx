"use client";
import React, { useEffect } from 'react'
import SectionHeader from './section-header'
import { motion } from 'framer-motion';
import { useActiveSectionHooks } from '@/lib/activeSectionHooks';

export default function About() {
  const { ref } = useActiveSectionHooks('About', 0.75);
  return (
    <motion.section 
      ref={ref}
      className="
          mb-28 
          max-w-[45rem] 
          text-center 
          leading-8 
          sm:mb-40
          scroll-mt-28
          "
      initial = {{opacity : 0, y : 100}}
      animate = {{opacity : 1, y : 0}}
      transition={{delay : 0.17}}
      id="about"
    >
      <SectionHeader>About me</SectionHeader>
      <p className="mb-3">
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I am a{" "}
        <span className="font-medium">full-stack web developer</span> with a strong work ethic and a commitment to excellence.{" "}
        I am eager to learn new things and grow my skills.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Spring(Java), React, Next.js, and MongoDB
        </span>
        . I am also familiar with Python, Pytorch, Docker, Kafka, and TypeScript. I am always looking to
        learn new technologies. I am currently working for a{" "}
        <span className="font-medium">Deerhold Ltd.</span> as a associate-software
        Engineer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies,<br /> and playing with my dog. I also enjoy{" "}
        <span className="font-medium">traveling new places</span>. I am currently
        working on company's product. 
      </p>
    </motion.section>
  )
}
