'use client';
import React from 'react'
import SectionHeader from './section-header';
import { projectsData } from '@/lib/data';
import Project from './project';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <motion.section
        initial={{ opacity: 0, y: 100 }}
        animate= {{ opacity: 1, y: 0 }}
        transition={{delay: 0.20}}
        id = "projects"
        className="scroll-mt-28"
    >
        <SectionHeader>My Project</SectionHeader>
        <div>
            {
                projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project}/>
                    </React.Fragment>
                ))
            }
        </div>
    </motion.section>
  )
}

