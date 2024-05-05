"use client"
import React from 'react'
import SectionHeading from "./section-header"
import 'react-vertical-timeline-component/style.min.css';
import CustomTimeline from './timeline/custom_timeline';
import { useActiveSectionHooks } from '@/lib/activeSectionHooks';
import { motion } from 'framer-motion';


export default function Experience() {
  const { ref } = useActiveSectionHooks("Experience", 0.4)

  
  return (
    <motion.section 
      id='experience' 
      ref={ref}
      className='
        mb-28
        max-w-[53rem]
        scroll-mt-28
        text-center
        sm:mb-40
      '
      initial={{
        opacity: 0, 
        y: 100
      }}
      animate={{
          opacity: 1, 
          y: 0
      }}
      transition={{
          delay: 0.22
      }}
    >
        <SectionHeading>
            My Experience
        </SectionHeading>
        <CustomTimeline />
    </motion.section> 
  )
}
