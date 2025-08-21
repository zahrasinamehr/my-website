'use client';

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Stack,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Telegram as TelegramIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const contactInfo = [
  {
    icon: <EmailIcon sx={{ fontSize: 30 }} />,
    title: 'Email',
    value: 'zahrasinamehr5@gmail.com',
    link: 'mailto:zahrasinamehr5@gmail.com',
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 30 }} />,
    title: 'Phone',
    value: '+49 1635214762',
    link: 'tel:+491635214762',
  },
  {
    icon: <LocationIcon sx={{ fontSize: 30 }} />,
    title: 'Location',
    value: 'Germany',
    link: '#',
  },
];

const socialLinks = [
  {
    icon: <LinkedInIcon />,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/zahrasinamehr',
    color: '#0077b5',
  },
  {
    icon: <GitHubIcon />,
    name: 'GitHub',
    url: 'https://github.com/zahrasinamehr',
    color: '#333',
  },
  {
    icon: <TelegramIcon />,
    name: 'Telegram',
    url: 'https://t.me/zahrasinamehr',
    color: '#0088cc',
  },
  {
    icon: <EmailIcon />,
    name: 'Email',
    url: 'mailto:zahrasinamehr5@gmail.com',
    color: '#ea4335',
  },
];

export default function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowSnackbar(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Box
      id="contact"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        bgcolor: 'background.paper',
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
            radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
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
              Get In Touch
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: 'text.primary',
              }}
            >
              Let&apos;s Work Together
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
              I&apos;m always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', lg: 'row' }, 
          gap: 6 
        }}>
          {/* Contact Information */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  fontWeight: 600,
                  color: 'text.primary',
                }}
              >
                Contact Information
              </Typography>
              
              <Stack spacing={3} sx={{ mb: 6 }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <Card
                      component="a"
                      href={info.link}
                      sx={{
                        p: 3,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        textDecoration: 'none',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        background: 'rgba(26, 26, 46, 0.5)',
                        backdropFilter: 'blur(10px)',
                        '&:hover': {
                          boxShadow: '0 10px 30px rgba(99, 102, 241, 0.2)',
                          transform: 'translateY(-2px)',
                          transition: 'all 0.3s ease',
                        }
                      }}
                    >
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: '50%',
                          bgcolor: 'rgba(99, 102, 241, 0.1)',
                          color: 'primary.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                            mb: 0.5,
                          }}
                        >
                          {info.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                          }}
                        >
                          {info.value}
                        </Typography>
                      </Box>
                    </Card>
                  </motion.div>
                ))}
              </Stack>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                >
                  Follow Me
                </Typography>
                <Stack direction="row" spacing={2}>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <IconButton
                        component="a"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          width: 50,
                          height: 50,
                          border: '2px solid rgba(255, 255, 255, 0.1)',
                          color: 'text.primary',
                          '&:hover': {
                            borderColor: social.color,
                            bgcolor: `${social.color}20`,
                            color: social.color,
                          }
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Stack>
              </motion.div>
            </motion.div>
          </Box>

          {/* Contact Form */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card
                sx={{
                  p: 4,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'rgba(26, 26, 46, 0.8)',
                  backdropFilter: 'blur(10px)',
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
                  Send Message
                </Typography>
                
                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          bgcolor: 'rgba(255, 255, 255, 0.05)',
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          bgcolor: 'rgba(255, 255, 255, 0.05)',
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          bgcolor: 'rgba(255, 255, 255, 0.05)',
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      multiline
                      rows={6}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          bgcolor: 'rgba(255, 255, 255, 0.05)',
                        }
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{
                        py: 1.5,
                        background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #4f46e5 30%, #db2777 90%)',
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </Box>
              </Card>
            </motion.div>
          </Box>
        </Box>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                fontStyle: 'italic',
              }}
            >
              &quot;Looking forward to hearing from you and creating something amazing together!&quot;
            </Typography>
          </Box>
        </motion.div>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setShowSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Message sent successfully! I&apos;ll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
}
