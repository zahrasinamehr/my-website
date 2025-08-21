'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  LinearProgress,
  Stack,
} from '@mui/material';
import {
  Code as JavaScriptIcon,
  Html as HtmlIcon,
  Code as CodeIcon,
  DataObject as ReactIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const technicalSkills = [
  { name: 'React/Next.js', level: 95, icon: <ReactIcon /> },
  { name: 'TypeScript', level: 90, icon: <JavaScriptIcon /> },
  { name: 'Node.js', level: 85, icon: <CodeIcon /> },
  { name: 'Python', level: 88, icon: <CodeIcon /> },
  { name: 'HTML/CSS', level: 95, icon: <HtmlIcon /> },
  { name: 'Material-UI', level: 92, icon: <ReactIcon /> },
];

const softSkills = [
  { name: 'Problem Solving', level: 95 },
  { name: 'Team Collaboration', level: 90 },
  { name: 'Communication', level: 88 },
  { name: 'Project Management', level: 85 },
  { name: 'Creativity', level: 92 },
  { name: 'Leadership', level: 80 },
];

export default function SkillsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box
      id="skills"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        bgcolor: 'background.paper',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: `
            linear-gradient(45deg, #6366f1 25%, transparent 25%), 
            linear-gradient(-45deg, #6366f1 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, #ec4899 75%), 
            linear-gradient(-45deg, transparent 75%, #ec4899 75%)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h6"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                mb: 2,
                textTransform: 'uppercase',
                letterSpacing: 2,
              }}
            >
              Skills & Expertise
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: 'text.primary',
              }}
            >
              What I Master
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
                fontSize: '1.1rem',
                lineHeight: 1.7,
              }}
            >
              A comprehensive skill set spanning modern technologies and soft skills 
              essential for creating exceptional digital experiences.
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', lg: 'row' }, 
          gap: 6 
        }}>
          {/* Technical Skills */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 4,
                    fontWeight: 600,
                    color: 'text.primary',
                    textAlign: 'center',
                  }}
                >
                  Technical Skills
                </Typography>
                <Stack spacing={3}>
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <Box>
                        <Box sx={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center',
                          mb: 1 
                        }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box sx={{ color: 'primary.main' }}>
                              {skill.icon}
                            </Box>
                            <Typography 
                              variant="body1" 
                              sx={{ fontWeight: 500, color: 'text.primary' }}
                            >
                              {skill.name}
                            </Typography>
                          </Box>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 10,
                            borderRadius: 5,
                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                            '& .MuiLinearProgress-bar': {
                              background: 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                              borderRadius: 5,
                            },
                          }}
                        />
                      </Box>
                    </motion.div>
                  ))}
                </Stack>
              </Card>
            </motion.div>
          </Box>

          {/* Soft Skills */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid rgba(236, 72, 153, 0.2)',
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 4,
                    fontWeight: 600,
                    color: 'text.primary',
                    textAlign: 'center',
                  }}
                >
                  Soft Skills
                </Typography>
                <Stack spacing={3}>
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    >
                      <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography 
                            variant="body1" 
                            sx={{ fontWeight: 500, color: 'text.primary' }}
                          >
                            {skill.name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 10,
                            borderRadius: 5,
                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                            '& .MuiLinearProgress-bar': {
                              background: 'linear-gradient(90deg, #ec4899 0%, #f472b6 50%, #8b5cf6 100%)',
                              borderRadius: 5,
                            },
                          }}
                        />
                      </Box>
                    </motion.div>
                  ))}
                </Stack>
              </Card>
            </motion.div>
          </Box>
        </Box>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              Always Learning, Always Growing
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 700,
                mx: 'auto',
                fontSize: '1.1rem',
                lineHeight: 1.7,
              }}
            >
              Technology evolves rapidly, and so do I. I&apos;m committed to continuous learning 
              and staying at the forefront of web development trends, ensuring that every project 
              benefits from the latest innovations and best practices.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
