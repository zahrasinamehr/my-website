'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Stack,
  Chip,
} from '@mui/material';
import {
  Code as CodeIcon,
  Palette as DesignIcon,
  Psychology as PsychologyIcon,
  Groups as GroupsIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'Frontend Development', level: 95 },
  { name: 'Backend Development', level: 88 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'Database Management', level: 80 },
  { name: 'Project Management', level: 90 },
];

const qualities = [
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: 'Clean Code',
    description: 'Writing maintainable, readable, and efficient code following best practices.'
  },
  {
    icon: <DesignIcon sx={{ fontSize: 40 }} />,
    title: 'Creative Design',
    description: 'Creating beautiful and intuitive user interfaces with attention to detail.'
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
    title: 'Problem Solving',
    description: 'Analytical thinking and innovative solutions to complex challenges.'
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40 }} />,
    title: 'Team Player',
    description: 'Excellent communication and collaboration skills in team environments.'
  },
];

export default function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        bgcolor: 'background.default',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
          `,
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
              About Me
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: 'text.primary',
              }}
            >
              Who I Am
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
              A passionate front-end developer with expertise in modern web technologies.
              I love creating digital experiences that make a difference.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6} sx={{ mb: 8 }}>
          {/* Personal Story */}
          <Grid size={{xs: 12, md: 6}}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: 'text.primary' }}>
                My Journey
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  lineHeight: 1.7,
                }}
              >
                I started my programming journey with a curiosity about how websites work. 
                Over the years, I&apos;ve developed expertise in various technologies and frameworks, 
                always staying up-to-date with the latest industry trends.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  lineHeight: 1.7,
                }}
              >
                My passion lies in building scalable applications that solve real-world problems 
                while providing exceptional user experiences. I believe in continuous learning 
                and sharing knowledge with the developer community.
              </Typography>

              {/* Personal Interests */}
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                {['Web Development', 'UI/UX Design', 'Open Source', 'Teaching', 'Innovation'].map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <Chip
                      label={interest}
                      variant="outlined"
                      sx={{
                        borderColor: 'secondary.main',
                        color: 'secondary.main',
                        '&:hover': {
                          bgcolor: 'rgba(236, 72, 153, 0.1)',
                        }
                      }}
                    />
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Skills Progress */}
          <Grid size={{xs: 12, md: 6}}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: 'text.primary' }}>
                My Skills
              </Typography>
              <Stack spacing={3}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body1" sx={{ fontWeight: 500, color: 'text.primary' }}>
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
                          height: 8,
                          borderRadius: 4,
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                            borderRadius: 4,
                          },
                        }}
                      />
                    </Box>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid>
        </Grid>

        {/* Qualities Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 600,
              color: 'text.primary',
            }}
          >
            What I Bring
          </Typography>
          <Grid container spacing={3}>
            {qualities.map((quality, index) => (
              <Grid size={{xs: 12, sm: 6, md: 3}}  key={quality.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
                        transform: 'translateY(-5px)',
                        transition: 'all 0.3s ease',
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          color: 'primary.main',
                          mb: 2,
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        {quality.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 2,
                          fontWeight: 600,
                          color: 'text.primary',
                        }}
                      >
                        {quality.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                        }}
                      >
                        {quality.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
