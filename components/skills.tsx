"use client"
import React from 'react'
import SectionHeader from './section-header'
import { skillsData } from '@/lib/data'
import { useActiveSectionHooks } from '@/lib/activeSectionHooks'
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: (index : number) => {
        return {opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }}
    }
}

export default function Skills() {
    const { ref } = useActiveSectionHooks("Skills", 0.40);
  return (
    <motion.section 
        id='skills'
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
        <SectionHeader>My Skills</SectionHeader>
        <ul
            className='
                flex
                flex-wrap
                justify-center
                gap-2
                text-lg
                text-gray-800
            '
        >
            {
                skillsData.map((skill, index) => (
                    <motion.li 
                        key={index}
                        className='
                            bg-white
                            border
                            border-black/[0.1]
                            rounded-xl
                            py-3
                            px-5
                        '
                        variants={fadeInAnimationVariants}
                        initial={"initial"}
                        whileInView={"animate"}
                        viewport={{
                            once: false
                        }}
                        custom={index}
                    >{skill}</motion.li>
                ))
            }
        </ul>
    </motion.section>
  )
}
