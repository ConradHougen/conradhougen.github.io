'use client';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
} from '@mui/material';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BuildIcon from '@mui/icons-material/Build';
import TimelineIcon from '@mui/icons-material/Timeline';
import HandshakeIcon from '@mui/icons-material/Handshake';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Conrad D. Hougen
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            Semantic Embeddings • RAG & LLMs • Bayesian Networks • Information Geometry
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', opacity: 0.95 }}>
            ML/AI researcher and software engineer specializing in geometric embeddings for semantic search,
            relational topic modeling, uncertainty quantification in Bayesian networks, and production ML systems.
            PhD from University of Michigan with 7+ years professional experience.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              component={Link}
              href="/projects"
              variant="contained"
              color="secondary"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              View Projects
            </Button>
            <Button
              component={Link}
              href="/blog"
              variant="outlined"
              size="large"
              sx={{ color: 'white', borderColor: 'white' }}
            >
              Read the Blog
            </Button>
            <Button component={Link} href="/contact" variant="outlined" size="large" sx={{ color: 'white', borderColor: 'white' }}>
              Get in Touch
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* What I Do Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" gutterBottom sx={{ mb: 6 }}>
          What I Do
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <CardContent sx={{ p: 4 }}>
                <BuildIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Semantic Embeddings & RAG
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Information-geometric methods for topic trend analysis, semantic vector search, and retrieval-augmented generation using FAISS, Sentence-Transformers, and manifold learning.
                </Typography>
                <Button component={Link} href="/projects" variant="outlined" size="small" endIcon={<ArrowForwardIcon />}>
                  See Projects
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <CardContent sx={{ p: 4 }}>
                <TimelineIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Bayesian Networks & Uncertainty
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Second-order learning and inference for uncertainty quantification, distributed decision-making, and causal inference. Developed Second-Order Loopy Belief Propagation algorithm.
                </Typography>
                <Button component={Link} href="/blog" variant="outlined" size="small" endIcon={<ArrowForwardIcon />}>
                  Read Insights
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <CardContent sx={{ p: 4 }}>
                <HandshakeIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Research to Production
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Published research in top conferences (MLSP, FUSION, HDSR, CAMSAP). Multi-year national lab collaborations (PNNL, ARL). Production modem software at Qualcomm for 4G/5G.
                </Typography>
                <Button component={Link} href="/contact" variant="outlined" size="small" endIcon={<ArrowForwardIcon />}>
                  Work Together
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* At a Glance Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom sx={{ mb: 4 }}>
            At a Glance
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Recent Focus
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Information geometry and semantic embeddings for RAG/vector search, relational topic modeling for temporal document analysis, and uncertainty-aware distributed decision-making in Bayesian networks.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Tooling
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                <Chip label="FAISS" />
                <Chip label="Sentence-Transformers" />
                <Chip label="LangChain" />
                <Chip label="PyTorch" />
                <Chip label="PHATE" />
                <Chip label="NetworkX" />
                <Chip label="Gensim" />
                <Chip label="NLTK" />
                <Chip label="Scikit-Learn" />
                <Chip label="C/C++" />
                <Chip label="MATLAB" />
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Research to Production
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Published papers in MLSP, FUSION, HDSR, CAMSAP, and CoDA conferences. Multi-year collaborations with PNNL and Army Research Lab. 7+ years professional software engineering experience.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Selected Work Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" gutterBottom sx={{ mb: 4 }}>
          Selected Work
        </Typography>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Geometric Embeddings for Semantic Search & RAG
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Developed information-geometric methods for topic trend analysis and semantic vector search in large document corpora (arXiv, OSTI, Scopus). Built MSTML framework using FAISS, Sentence-Transformers, and manifold learning for relational and longitudinal semantic embeddings with applications to RAG and retrieval systems.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Multiscale Relational Topic Modeling
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Created novel multimodal and multiscale learning methods for relational and longitudinal text corpora during multi-year fellowship at Pacific Northwest National Laboratory. Published geometry-driven longitudinal topic model in Harvard Data Science Review and multiscale geometric method for capturing relational topic alignment at CAMSAP 2025.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Second-Order Bayesian Networks for Uncertainty Quantification
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Extended learning and inference algorithms for second-order Bayesian networks, propagating means and variances for uncertainty-aware decision making. Introduced Second-Order Loopy Belief Propagation (SOLBP) algorithm for distributed inference in uncertain networks. Research collaboration with Army Research Lab published at MLSP 2021 and FUSION 2022.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Production Modem Software for Qualcomm Snapdragon
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Senior software engineer and primary point of contact for smartphone modem DSP clock and voltage control. Developed and debugged C, C++, Python, and Hexagon assembly code for 4G LTE and 5G technologies running on millions of devices. Mentored junior engineers and delivered production-ready features.
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
          <Button component={Link} href="/projects" variant="outlined" size="large">
            View Projects Portfolio
          </Button>
          <Button component={Link} href="/career" variant="outlined" size="large">
            Review Experience
          </Button>
        </Stack>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom>
            Let&apos;s Build Something Reliable
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
            If you&apos;re exploring structure-aware models, uncertainty calibration, or production-grade ML systems, I&apos;d love to help.
          </Typography>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            color="secondary"
            size="large"
          >
            Get in Touch
          </Button>
        </Container>
      </Box>
    </>
  );
}
