'use client';
import { useState } from 'react';
import { Box, Container, Typography, Link, IconButton, Stack, Tooltip } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CheckIcon from '@mui/icons-material/Check';
import SchoolIcon from '@mui/icons-material/School';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('chougen@umich.edu');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            Machine learning, signal processing, and AI research scientist and software engineer focused on
            relational models, graph signal processing, probabilistic methods, and trustworthy AI systems.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Tooltip title={copied ? 'Copied!' : 'Copy email'} placement="top">
              <IconButton
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                sx={{ color: copied ? 'success.light' : 'white', transition: 'color 0.2s' }}
              >
                {copied ? <CheckIcon /> : <EmailIcon />}
              </IconButton>
            </Tooltip>
            <IconButton
              component={Link}
              href="https://www.linkedin.com/in/conrad-hougen/"
              target="_blank"
              aria-label="LinkedIn"
              sx={{ color: 'white' }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://github.com/ConradHougen"
              target="_blank"
              aria-label="GitHub"
              sx={{ color: 'white' }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://scholar.google.com/citations?user=DDK5RxMAAAAJ&hl=en"
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
