'use client';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Chip,
  Stack,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

export default function Career() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom sx={{ mb: 6 }}>
        Career
      </Typography>

      {/* Work Experience Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
          Work Experience
        </Typography>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Jan 2026 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" component="h3">
                  Research Scientist
                </Typography>
                <Typography color="primary" gutterBottom>
                  Anduril Industries • Broomfield, CO
                </Typography>
                <Typography variant="body2" paragraph>
                  Applied research in autonomous systems and defense technologies. Contributing to critical national
                  security missions through advanced ML research, probabilistic decision-making, and real-time inference
                  systems that operate reliably in adversarial and resource-constrained environments.
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                  <Chip label="Autonomous Systems" size="small" />
                  <Chip label="ML Research" size="small" />
                  <Chip label="Real-time Inference" size="small" />
                  <Chip label="C++" size="small" />
                  <Chip label="Python" size="small" />
                </Stack>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Sep 2019 - Jun 2025
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" component="h3">
                  Graduate Research Assistant
                </Typography>
                <Typography color="primary" gutterBottom>
                  University of Michigan • Ann Arbor, MI
                </Typography>
                <Typography variant="body2" paragraph>
                  Doctoral research in probabilistic graphical models and network-based, temporally-evolving data.
                  Developed novel methods for uncertainty quantification in Bayesian networks and temporal/relational
                  topic modeling using information-geometric embeddings. Research conducted in collaboration with
                  Army Research Lab and Pacific Northwest National Lab.
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                  <Chip label="Bayesian Networks" size="small" />
                  <Chip label="Topic Modeling" size="small" />
                  <Chip label="Information Geometry" size="small" />
                  <Chip label="Graph Signal Processing" size="small" />
                  <Chip label="PyTorch" size="small" />
                </Stack>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Jul 2015 - Mar 2019
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <WorkIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" component="h3">
                  Senior Software Engineer
                </Typography>
                <Typography color="primary" gutterBottom>
                  Qualcomm CDMA Technologies • San Diego, CA
                </Typography>
                <Typography variant="body2" paragraph>
                  Contributed to modem software running on the Snapdragon Hexagon DSP chip for 4G-LTE and NR-5G technologies.
                  Developed signal processing algorithms, led cross-functional teams, and focused on performance optimization,
                  real-time constraints, and hardware-software co-design for wireless communications systems.
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                  <Chip label="DSP Programming" size="small" />
                  <Chip label="4G-LTE / 5G-NR" size="small" />
                  <Chip label="C++" size="small" />
                  <Chip label="Embedded Systems" size="small" />
                  <Chip label="Signal Processing" size="small" />
                  <Chip label="MATLAB" size="small" />
                </Stack>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>

      {/* Education Section */}
      <Box>
        <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
          Education
        </Typography>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              2019 - 2025
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" component="h3">
                  PhD in Electrical Engineering and Computer Science
                </Typography>
                <Typography color="primary" gutterBottom>
                  University of Michigan, Ann Arbor
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Track:</strong> Signal &amp; Image Processing and Machine Learning
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Dissertation:</strong> Multi-Scale Topic Manifold Learning and Uncertain Decision Making
                  in Bayesian Networks
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Research Focus:</strong> Probabilistic graphical models, network-based temporally-evolving data,
                  uncertainty quantification in Bayesian networks, temporal and relational topic modeling, and
                  information-geometric embeddings for interpretable data mining.
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Collaborations:</strong> Army Research Lab (internship), Pacific Northwest National Lab (fellowship)
                </Typography>
                <Typography variant="body2" component="div">
                  <strong>Dissertation Link:</strong>{' '}
                  <a href="YOUR_DEEPBLUE_DISSERTATION_URL" target="_blank" rel="noopener noreferrer">
                    DeepBlue Repository
                  </a>
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              2011 - 2015
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <SchoolIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" component="h3">
                  BS Applied Mathematics, BS Electrical and Computer Engineering
                </Typography>
                <Typography color="primary" gutterBottom>
                  University of Colorado Boulder
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Honors:</strong> Summa Cum Laude
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Minor:</strong> Computer Science
                </Typography>
                <Typography variant="body2">
                  <strong>Focus:</strong> Digital signal processing, graph signal processing, communications systems,
                  and embedded systems engineering
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>

      {/* Key Accomplishments */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
          Key Research Contributions
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom color="primary">
                Uncertainty Quantification
              </Typography>
              <Typography variant="body2">
                Developed novel methods for second-order learning and belief propagation in Bayesian networks,
                enabling uncertainty-aware decision making in distributed systems with heterogeneous data fusion.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom color="primary">
                Topic Modeling
              </Typography>
              <Typography variant="body2">
                Created information-geometric embeddings for temporal and relational topic modeling, providing
                mathematically-justified and interpretable semantic search within large document corpora.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom color="primary">
                Defense Applications
              </Typography>
              <Typography variant="body2">
                Applied graph signal processing and probabilistic methods to defense and nuclear non-proliferation
                challenges through collaborations with Army Research Lab and Pacific Northwest National Lab.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom color="primary">
                Production Systems
              </Typography>
              <Typography variant="body2">
                Contributed to production modem software for millions of devices, implementing real-time signal
                processing algorithms on resource-constrained embedded DSP platforms.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
