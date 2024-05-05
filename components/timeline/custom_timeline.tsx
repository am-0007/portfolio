"use client"
import React from 'react'
import { experiencesData } from '@/lib/data';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import WorkIcon from '@mui/icons-material/Work';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import Work from '@mui/icons-material/Work';
import { motion } from 'framer-motion'
const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});

export const CustomTimeline = () => {

    const fadeInAnimationVariants = {
        initial: {
              opacity: 0,
              y: 20
          },
          animate: (index : number) => {
              return {opacity: 1,
              y: 0,
              transition: {
                  delay: 0.3 * index
              }}
          }
      }
    
  return (
    <>
        <Timeline position="alternate-reverse">
            {
                experiencesData.map((exp, index) => (
                    <React.Fragment key={index}>
                            <TimelineItem>
                                <TimelineOppositeContent 
                                    sx={{ m: 'auto 0' }}
                                    variant="body2"
                                    color="text.secondary"
                                    >
                                        {exp.date}
                                </TimelineOppositeContent>
                                <TimelineSeparator >
                                    <TimelineConnector />
                                    <TimelineDot color="primary" sx={{margin:2}}>
                                        <WorkIcon />
                                    </TimelineDot> 
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent 
                                    sx={{ 
                                        py: '20px',
                                        px: 2, 
                                        bgcolor: 'background.paper',
                                        boxShadow: 2,
                                        borderRadius: 2,
                                        minWidth: 300,
                                    }}
                                > 
                                    <motion.div key={index}
                                        variants={fadeInAnimationVariants}
                                        initial={"initial"}
                                        whileInView={"animate"}
                                        viewport={{
                                            once: false
                                        }}
                                        custom={index}
                                    >
                                        <ThemeProvider theme={theme}>
                                            <Box sx={{ color: 'text.secondary', fontSize: 16 }}>{exp.company}</Box>
                                            <Box sx={{ color: 'text.secondary', fontSize: 10 }}>{exp.location}</Box>
                                            <Box sx={{ color: 'text.secondary', fontSize: 12 }}>{exp.title}</Box>
                                            <Box sx={{ color: 'text.primary', fontSize: 14, fontWeight: 'medium' }}>
                                                {exp.description}
                                            </Box>
                                        </ThemeProvider> 
                                    </motion.div>
                                </TimelineContent>
                            </TimelineItem>
                    </React.Fragment>
                ))
            }
        </Timeline>
            
    </> 
  )
}

export default CustomTimeline