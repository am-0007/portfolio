'use client';
import React, { useEffect } from 'react'
import SectionHeader from './section-header';
import { projectsData } from '@/lib/data';
import Project from './project';
import { motion } from 'framer-motion';
import { useActiveSectionHooks } from '@/lib/activeSectionHooks';

export default function Projects() {
    const { ref } = useActiveSectionHooks('Projects', 0.4);
  return (
    <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate= {{ opacity: 1, y: 0 }}
        transition={{delay: 0.20}}
        id = "projects"
        className="scroll-mt-28 mb-28"
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

