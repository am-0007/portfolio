"use client";

import Image from 'next/image'
import React, { useEffect } from 'react'
import amImg from '@/public/am.jpg'
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useActiveSectionHooks } from '@/lib/activeSectionHooks';

export default function Intro() {
  const { ref } = useActiveSectionHooks('Home', 0.65);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
        <div className="flex items-center justify-center">
            <div className="relative">
                <motion.div
                  initial={{opacity: 0, scale: 0}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{
                      type: "tween",
                      duration: 0.2
                  }}
                >
                  <Image 
                      src={amImg} 
                      alt='Ajay Maharjan' 
                      width="192"
                      height="192"
                      quality="95"
                      priority={true}
                      className="
                          h-24 
                          w-24 
                          object-cover 
                          rounded-full 
                          border-[0.35rem] border-white shadow-xl
                        "
                  />
                </motion.div>
                <motion.span
                  className="absolute text-4xl bottom-0 right-0"
                  initial={{opacity: 0, scale: 0}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{
                      type: "spring",
                      stiffness: 125,
                      delay: 0.1,
                      duration: 0.7
                  }}
                >
                  👋
                </motion.span>
            </div>
        </div>
        <motion.h1 
          className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]'
          initial={{opacity : 0, y : 100}}
          animate={{opacity : 1, y : 0}}
        >
            <span className="font-bold">Hello, I'm Ajay.</span> I'm a{" "}
            <span className='font-bold'>full-stack developer</span> with almost{" "}
            <span className='font-bold'>2 years</span> of experience. I enjoy building{" "}
            <span className='italic'>web-apps</span>. My focus is{" "}
            <span className='underline'>Java and (React)Next.js</span>.
        </motion.h1>

        <motion.div 
          className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
          initial = {{ opacity: 0, y:100 }}
          animate = {{ opacity: 1, y:0 }}
          transition = {{delay: 0.1}}
        >
            <Link 
              href="#contact"
              className='
                    group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
                    focus:scale-110
                    hover:scale-110
                    hover:bg-gray-950
                    active:scale-105
                    transition
                '
            >
              Contact me <BsArrowRight 
                className='opacity-70 group-hover:translate-x-1 transition'
              />
            </Link>

            <a 
              className='
                  group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
                    focus:scale-110
                    hover:scale-110
                    active:scale-110
                    transition
                    cursor-pointer
                '
              href={`/Ajay's CV.pdf`}
              download
            >
              Download CV <HiDownload 
                className="opacity-60 group-hover:translate-y-1 transition"
              />
            </a>

            <a 
              className ='
                  bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
                    focus:scale-[1.15]
                    hover:scale-[1.15]
                    hover:text-gray-950
                    active:scale-110
                    transition
                    cursor-pointer
                '
                href='https://www.linkedin.com/in/am-oo07/'
                target='_blank'
            >
              <BsLinkedin />
            </a>

            <a 
              className='
                    bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full
                    focus:scale-[1.15]
                    hover:scale-[1.15]
                    hover:text-gray-950
                    active:scale-105
                    transition
                    cursor-pointer
                '
              href='https://github.com/am-0007'
              target='_blank'
            >
              <FaGithubSquare />
            </a>
        </motion.div>
    </section>
  )
}
