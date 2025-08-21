'use client';

import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  Stack,
  Chip,
} from '@mui/material';
import {
  Download as DownloadIcon,
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HeroSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Parallax effect for background
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const parallax = document.getElementById('parallax-bg');
    if (parallax) {
      const speed = scrolled * 0.5;
      parallax.style.transform = `translateY(${speed}px)`;
    }
  };

  return (
    <Box
      id="home"
      ref={ref}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      }}
      onScroll={handleScroll}
    >
      {/* Animated floating particles */}
      <Box
        id="parallax-bg"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'floatSlow 8s ease-in-out infinite',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '20%',
            right: '15%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'floatSlow 6s ease-in-out infinite reverse',
          }
        }}
      >
        {/* Additional floating elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '40%',
            right: '20%',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'floatMedium 7s ease-in-out infinite',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '40%',
            left: '25%',
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'floatFast 4s ease-in-out infinite',
          }}
        />
        {/* Geometric shapes */}
        <Box
          sx={{
            position: 'absolute',
            top: '60%',
            left: '5%',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))',
            transform: 'rotate(45deg)',
            animation: 'rotateFloat 10s linear infinite',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            right: '8%',
            width: '80px',
            height: '80px',
            border: '2px solid rgba(236, 72, 153, 0.2)',
            borderRadius: '50%',
            animation: 'pulse 3s ease-in-out infinite',
          }}
        />
      </Box>

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.6;
          }
          33% { 
            transform: translateY(-30px) translateX(20px) scale(1.1);
            opacity: 0.8;
          }
          66% { 
            transform: translateY(-10px) translateX(-15px) scale(0.9);
            opacity: 0.7;
          }
        }
        @keyframes floatMedium {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.5;
          }
          50% { 
            transform: translateY(-25px) translateX(15px) rotate(180deg);
            opacity: 0.8;
          }
        }
        @keyframes floatFast {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 0.4;
          }
          25% { 
            transform: translateY(-15px) scale(1.2);
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-5px) scale(0.8);
            opacity: 0.6;
          }
          75% { 
            transform: translateY(-20px) scale(1.1);
            opacity: 0.8;
          }
        }
        @keyframes rotateFloat {
          0% { 
            transform: rotate(45deg) translateY(0px);
            opacity: 0.3;
          }
          25% { 
            transform: rotate(135deg) translateY(-10px);
            opacity: 0.6;
          }
          50% { 
            transform: rotate(225deg) translateY(-5px);
            opacity: 0.4;
          }
          75% { 
            transform: rotate(315deg) translateY(-15px);
            opacity: 0.7;
          }
          100% { 
            transform: rotate(405deg) translateY(0px);
            opacity: 0.3;
          }
        }
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.3;
          }
          50% { 
            transform: scale(1.3);
            opacity: 0.7;
          }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            py: { xs: 8, md: 0 },
          }}
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                src="/avatar.jpg"
                alt="Zahra Sinamehr"
                sx={{
                  width: { xs: 200, md: 300 },
                  height: { xs: 200, md: 300 },
                  mx: 'auto',
                  mb: 2,
                  border: '4px solid',
                  borderColor: 'primary.main',
                  boxShadow: '0 0 50px rgba(99, 102, 241, 0.5)',
                  background: 'linear-gradient(45deg, #6366f1, #ec4899)',
                  fontSize: '4rem',
                  fontWeight: 'bold',
                }}
              >
                ZS
              </Avatar>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontStyle: 'italic',
                    mb: 2
                  }}
                >
                  Professional Developer & Designer
                </Typography>
              </motion.div>
            </Box>
          </motion.div>

          {/* Content */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  mb: 1,
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                }}
              >
                Hello, I&apos;m
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background: 'linear-gradient(45deg, #ffffff 30%, #6366f1 70%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                Zahra Sinamehr
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: 'secondary.main',
                  fontWeight: 500,
                  mb: 3,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                Front-End Developer
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  lineHeight: 1.7,
                  maxWidth: '500px',
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                Passionate about creating beautiful, functional, and user-friendly applications. 
                Specialized in modern web technologies with a focus on clean code and innovative solutions.
              </Typography>
            </motion.div>

            {/* Skills Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
                {['React', 'TypeScript', 'Next.js', 'Node.js', 'Python'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  >
                    <Chip
                      label={skill}
                      sx={{
                        bgcolor: 'rgba(99, 102, 241, 0.1)',
                        color: 'primary.main',
                        border: '1px solid rgba(99, 102, 241, 0.3)',
                        '&:hover': {
                          bgcolor: 'rgba(99, 102, 241, 0.2)',
                        }
                      }}
                    />
                  </motion.div>
                ))}
              </Stack>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ mb: 4 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<DownloadIcon />}
                  sx={{
                    background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #4f46e5 30%, #db2777 90%)',
                    }
                  }}
                >
                  Download Resume
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<EmailIcon />}
                  onClick={() => window.location.href = '#contact'}
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                      borderColor: 'primary.light',
                      bgcolor: 'rgba(99, 102, 241, 0.1)',
                    }
                  }}
                >
                  Contact Me
                </Button>
              </Stack>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <Stack direction="row" spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button
                  variant="outlined"
                  sx={{
                    minWidth: 'auto',
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: 'primary.main',
                      bgcolor: 'rgba(99, 102, 241, 0.1)',
                    }
                  }}
                >
                  <LinkedInIcon />
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    minWidth: 'auto',
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: 'primary.main',
                      bgcolor: 'rgba(99, 102, 241, 0.1)',
                    }
                  }}
                >
                  <GitHubIcon />
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    minWidth: 'auto',
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: 'primary.main',
                      bgcolor: 'rgba(99, 102, 241, 0.1)',
                    }
                  }}
                >
                  <EmailIcon />
                </Button>
              </Stack>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
