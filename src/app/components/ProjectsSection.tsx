'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import {
  Launch as LaunchIcon,
  GitHub as GitHubIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with modern design, secure payments, and admin dashboard. Built with React, Node.js, and MongoDB.',
    image: '/project1.jpg', // You'll need to add these images
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and intuitive UI.',
    image: '/project2.jpg',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Interactive weather dashboard with beautiful animations, location-based forecasts, and responsive design.',
    image: '/project3.jpg',
    technologies: ['React', 'Chart.js', 'API Integration', 'CSS3'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Modern portfolio website with smooth animations, parallax effects, and optimized performance.',
    image: '/project4.jpg',
    technologies: ['Next.js', 'Material-UI', 'Framer Motion', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

export default function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box
      id="projects"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        bgcolor: 'background.default',
        overflow: 'hidden',
      }}
    >
      {/* Background effects */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)
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
              My Work
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: 'text.primary',
              }}
            >
              Featured Projects
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
              Here are some of my recent projects that showcase my skills and passion for creating 
              exceptional digital experiences.
            </Typography>
          </Box>
        </motion.div>

        {/* Featured Projects */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: 600,
              color: 'text.primary',
              textAlign: 'center',
            }}
          >
            Featured Projects
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4 
          }}>
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    background: 'rgba(26, 26, 46, 0.8)',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)',
                      transform: 'translateY(-10px)',
                      transition: 'all 0.3s ease',
                    }
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      height: 200,
                      background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {/* Placeholder for project image */}
                    Project Image
                  </CardMedia>
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        lineHeight: 1.6,
                      }}
                    >
                      {project.description}
                    </Typography>
                    
                    {/* Technologies */}
                    <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(99, 102, 241, 0.1)',
                            color: 'primary.main',
                            border: '1px solid rgba(99, 102, 241, 0.3)',
                          }}
                        />
                      ))}
                    </Stack>

                    {/* Action Buttons */}
                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<LaunchIcon />}
                        href={project.liveUrl}
                        sx={{
                          background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #4f46e5 30%, #db2777 90%)',
                          }
                        }}
                      >
                        Live Demo
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<GitHubIcon />}
                        href={project.githubUrl}
                        sx={{
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                          color: 'text.primary',
                          '&:hover': {
                            borderColor: 'primary.main',
                            bgcolor: 'rgba(99, 102, 241, 0.1)',
                          }
                        }}
                      >
                        Code
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Other Projects */}
        <Box>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: 600,
              color: 'text.primary',
              textAlign: 'center',
            }}
          >
            Other Projects
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
            gap: 3 
          }}>
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    background: 'rgba(26, 26, 46, 0.6)',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      boxShadow: '0 10px 30px rgba(99, 102, 241, 0.2)',
                      transform: 'translateY(-5px)',
                      transition: 'all 0.3s ease',
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        lineHeight: 1.6,
                      }}
                    >
                      {project.description}
                    </Typography>
                    
                    {/* Technologies */}
                    <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(236, 72, 153, 0.1)',
                            color: 'secondary.main',
                            border: '1px solid rgba(236, 72, 153, 0.3)',
                          }}
                        />
                      ))}
                    </Stack>

                    {/* Action Buttons */}
                    <Stack direction="row" spacing={1} justifyContent="space-between">
                      <Button
                        size="small"
                        startIcon={<LaunchIcon />}
                        href={project.liveUrl}
                        sx={{ color: 'primary.main' }}
                      >
                        Demo
                      </Button>
                      <Button
                        size="small"
                        startIcon={<GitHubIcon />}
                        href={project.githubUrl}
                        sx={{ color: 'text.secondary' }}
                      >
                        Code
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
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
              Interested in Working Together?
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => window.location.href = '#contact'}
              sx={{
                background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                px: 4,
                py: 1.5,
                '&:hover': {
                  background: 'linear-gradient(45deg, #4f46e5 30%, #db2777 90%)',
                }
              }}
            >
              Let&apos;s Talk
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
