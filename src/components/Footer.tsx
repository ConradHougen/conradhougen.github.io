'use client';
import React from 'react';
import { Box, Container, Typography, Link, IconButton, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} alignItems="center">
          <Typography variant="h6" gutterBottom>
            Conrad D. Hougen
          </Typography>
          <Typography variant="body2" align="center" sx={{ maxWidth: 600 }}>
            Applied machine learning researcher focused on Bayesian methods, graph learning,
            and building reliable ML systems.
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton
              component={Link}
              href="mailto:YOUR_EMAIL"
              aria-label="Email"
              sx={{ color: 'white' }}
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="YOUR_LINKEDIN_URL"
              target="_blank"
              aria-label="LinkedIn"
              sx={{ color: 'white' }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="YOUR_GITHUB_URL"
              target="_blank"
              aria-label="GitHub"
              sx={{ color: 'white' }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="YOUR_GOOGLE_SCHOLAR_URL"
              target="_blank"
              aria-label="Google Scholar"
              sx={{ color: 'white' }}
            >
              <SchoolIcon />
            </IconButton>
          </Stack>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Conrad D. Hougen. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
