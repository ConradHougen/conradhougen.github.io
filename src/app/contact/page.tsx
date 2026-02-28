'use client';
import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Link,
  Stack,
  Button,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CheckIcon from '@mui/icons-material/Check';

const contactLinks = [
  {
    label: 'Email',
    value: 'chougen@umich.edu',
    href: null,
    copyText: 'chougen@umich.edu',
    icon: <EmailIcon sx={{ fontSize: 40 }} />,
    description: 'Best for direct communication',
  },
  {
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/conrad-hougen/',
    icon: <LinkedInIcon sx={{ fontSize: 40 }} />,
    description: 'Professional networking',
  },
  {
    label: 'GitHub',
    value: 'View GitHub Profile',
    href: 'https://github.com/ConradHougen',
    icon: <GitHubIcon sx={{ fontSize: 40 }} />,
    description: 'Open-source contributions and code',
  },
  {
    label: 'ORCID',
    value: 'View ORCID Profile',
    href: 'https://orcid.org/my-orcid?orcid=0000-0002-2159-726X',
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    description: 'Research publications and citations',
  },
  {
    label: 'Google Scholar',
    value: 'View Google Scholar',
    href: 'https://scholar.google.com/citations?user=DDK5RxMAAAAJ&hl=en',
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    description: 'Academic publications and metrics',
  },
  {
    label: 'Dissertation',
    value: 'View PhD Dissertation',
    href: 'https://deepblue.lib.umich.edu/items/b41ca6cc-acfc-41e8-be3d-53376b291dfa',
    icon: <MenuBookIcon sx={{ fontSize: 40 }} />,
    description: 'University of Michigan DeepBlue repository',
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom sx={{ mb: 2 }}>
        Contact
      </Typography>
      <Typography variant="body1" paragraph sx={{ mb: 6, fontSize: '1.1rem', color: 'text.secondary' }}>
        I&apos;m always interested in discussing research collaborations, consulting opportunities,
        or challenging ML problems. Feel free to reach out through any of the channels below.
      </Typography>

      <Grid container spacing={3}>
        {contactLinks.map((link, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
            >
              <CardContent>
                <Stack spacing={2} alignItems="center" textAlign="center">
                  <Box sx={{ color: 'primary.main' }}>{link.icon}</Box>
                  <Typography variant="h6">{link.label}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {link.description}
                  </Typography>
                  {'copyText' in link ? (
                    <Button
                      variant="outlined"
                      size="small"
                      color={copied ? 'success' : 'primary'}
                      startIcon={copied ? <CheckIcon /> : undefined}
                      onClick={() => handleCopy(link.copyText!)}
                    >
                      {copied ? 'Copied!' : link.value}
                    </Button>
                  ) : (
                    <Button
                      component={Link}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      size="small"
                      disabled={link.href.includes('YOUR_')}
                    >
                      {link.value}
                    </Button>
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8 }}>
        <Card sx={{ bgcolor: 'primary.main', color: 'white', p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Looking to Collaborate?
          </Typography>
          <Typography variant="body1" paragraph>
            I&apos;m particularly interested in projects involving:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <ul style={{ margin: 0 }}>
                <li>Bayesian inference and uncertainty quantification</li>
                <li>Graph learning and signal processing</li>
                <li>Multi-scale topic modeling</li>
              </ul>
            </Grid>
            <Grid item xs={12} md={6}>
              <ul style={{ margin: 0 }}>
                <li>Distributed decision-making systems</li>
                <li>Production ML system design</li>
                <li>Research-to-production pipelines</li>
              </ul>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <Typography variant="body1">
              Email is usually the best way to start a conversation: <strong>chougen@umich.edu</strong>
            </Typography>
          </Box>
        </Card>
      </Box>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Response time: I typically respond within 24-48 hours.
          <br />
          For urgent matters, please indicate &quot;URGENT&quot; in the subject line.
        </Typography>
      </Box>
    </Container>
  );
}
