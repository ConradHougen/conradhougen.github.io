'use client';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: 'Directed Fast Approximate Spectral Sparsification',
    description:
      'Algorithm for constructing sparse directed graph approximations that preserve spectral properties of the original dense graph. Extends classical undirected sparsification to the directed setting, where the non-symmetric Laplacian structure requires novel random-walk and effective-resistance techniques.',
    tech: ['Python', 'NumPy', 'SciPy', 'NetworkX'],
    github: 'YOUR_GITHUB_URL/directed-spectral-sparsification',
    demo: null,
    highlights: [
      'Spectral approximation for directed graphs',
      'Sub-quadratic runtime via fast effective-resistance estimates',
      'Applications to graph signal processing and network analysis',
    ],
  },
  {
    title: 'Nystrom Augmented Compressed Transformers',
    description:
      'Transformer architecture augmented with Nyström-based self-attention approximation and model compression techniques to enable efficient inference over long sequences. Reduces the O(n²) attention cost to linear complexity while preserving representational quality through learned landmark selection.',
    tech: ['Python', 'PyTorch', 'NumPy'],
    github: 'YOUR_GITHUB_URL/nystrom-compressed-transformers',
    demo: null,
    highlights: [
      'Linear-complexity Nyström attention approximation',
      'Structured pruning and quantization for compressed inference',
      'Scalable to long-context sequence modeling tasks',
    ],
  },
  {
    title: 'LiveUltimate Analytics',
    description:
      'Real-time analytics platform for ultimate frisbee games. Tracks player movements, throwing patterns, and team strategies using computer vision and probabilistic tracking algorithms. Provides actionable insights for coaches and players.',
    tech: ['Python', 'OpenCV', 'FastAPI', 'React', 'PostgreSQL'],
    github: 'YOUR_GITHUB_URL/live-ultimate',
    demo: 'YOUR_DEMO_URL',
    highlights: [
      'Real-time object tracking',
      'Event detection and classification',
      'Interactive visualization dashboard',
    ],
  },
  {
    title: 'Graph Signal Processing Toolkit',
    description:
      'Comprehensive library for graph signal processing operations including graph Fourier transforms, filtering, and sampling. Designed for efficient processing of signals defined on irregular graph domains.',
    tech: ['Python', 'NumPy', 'SciPy', 'NetworkX', 'Cython'],
    github: 'YOUR_GITHUB_URL/graph-signal-toolkit',
    demo: null,
    highlights: [
      'Fast graph Fourier transforms',
      'Spectral filtering methods',
      'Graph coarsening and sampling',
    ],
  },
  {
    title: 'Distributed Sensor Fusion',
    description:
      'Framework for distributed multi-sensor fusion using consensus-based algorithms. Enables scalable information aggregation in sensor networks with communication constraints and Byzantine agents.',
    tech: ['Python', 'C++', 'MPI', 'Docker'],
    github: 'YOUR_GITHUB_URL/distributed-fusion',
    demo: null,
    highlights: [
      'Consensus algorithms',
      'Byzantine-robust aggregation',
      'Scalable to 1000+ agents',
    ],
  },
  {
    title: 'Calibrated Uncertainty Benchmarks',
    description:
      'Collection of benchmark tasks and evaluation metrics for assessing uncertainty calibration in ML models. Includes proper scoring rules, calibration curves, and reliability diagrams.',
    tech: ['Python', 'PyTorch', 'Matplotlib', 'Jupyter'],
    github: 'YOUR_GITHUB_URL/uncertainty-benchmarks',
    demo: null,
    highlights: [
      'Comprehensive calibration metrics',
      'Multiple dataset domains',
      'Reproducible experiments',
    ],
  },
];

export default function Projects() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom sx={{ mb: 2 }}>
        Projects
      </Typography>
      <Typography variant="body1" paragraph sx={{ mb: 6, fontSize: '1.1rem', color: 'text.secondary' }}>
        A selection of research projects and open-source tools spanning Bayesian methods, graph learning,
        and production ML systems.
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Key Features:
                  </Typography>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>
                        <Typography variant="body2" color="text.secondary">
                          {highlight}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                  {project.tech.map((tech, i) => (
                    <Chip key={i} label={tech} size="small" variant="outlined" />
                  ))}
                </Stack>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  startIcon={<GitHubIcon />}
                  href={project.github}
                  target="_blank"
                  disabled={project.github.includes('YOUR_GITHUB_URL')}
                >
                  GitHub
                </Button>
                {project.demo && (
                  <Button
                    size="small"
                    startIcon={<LaunchIcon />}
                    href={project.demo}
                    target="_blank"
                    disabled={project.demo.includes('YOUR_DEMO_URL')}
                  >
                    Demo
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Interested in Collaboration?
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          I&apos;m always open to discussing research collaborations, open-source contributions,
          or consulting opportunities.
        </Typography>
        <Button variant="contained" size="large" href="/contact">
          Get in Touch
        </Button>
      </Box>
    </Container>
  );
}
