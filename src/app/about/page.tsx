'use client';
import { Container, Typography, Box } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom>
        About
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          I am a machine learning, signal processing, and AI researcher with professional software engineering and
          algorithms research experience. I graduated with a PhD in Signal &amp; Image Processing and Machine Learning
          from the University of Michigan in mid-2025, and joined Anduril Industries as a Research Scientist at the
          Broomfield, CO office in 2026.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          My PhD research focused on probabilistic graphical models and network-based, temporally-evolving data.
          My thesis explored two main branches: (1) novel methods and empirical demonstrations related to uncertainty
          quantification in Bayesian networks, and (2) temporal and relational topic modeling using information-geometric
          embeddings for mathematically-justified and interpretable data mining within large document corpora. These works
          were developed during significant internship and fellowship collaborations with Army Research Lab and Pacific
          Northwest National Lab, respectively, which familiarized me with common objectives in defense and nuclear non-proliferation.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          Before my PhD, I worked as a Senior Engineer at Qualcomm CDMA Technologies, where I contributed to modem software
          running on the Snapdragon Hexagon DSP chip for 4G-LTE and NR-5G technologies. My undergraduate background is in
          Applied Mathematics and Electrical and Computer Engineering, with a focus on DSP and graph signal processing,
          from the University of Colorado Boulder.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          I enjoy studying applied math algorithms, programming, and tinkering with embedded systems and generative AI tools.
          Outside of work, I enjoy outdoor hobbies like competitive ultimate frisbee, hiking, and anything which involves
          getting good sunlight and exercise.
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        Quick Facts
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Background
        </Typography>
        <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
          <li>
            <Typography variant="body1">Research Scientist at Anduril Industries — Broomfield, CO</Typography>
          </li>
          <li>
            <Typography variant="body1">PhD in Signal & Image Processing and ML, University of Michigan</Typography>
          </li>
          <li>
            <Typography variant="body1">Former Senior Engineer at Qualcomm CDMA Technologies</Typography>
          </li>
          <li>
            <Typography variant="body1">BS Applied Math & BS ECE, University of Colorado Boulder</Typography>
          </li>
          <li>
            <Typography variant="body1">Email: chougen@umich.edu</Typography>
          </li>
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Research Areas
        </Typography>
        <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
          <li>
            <Typography variant="body1">Graph signal processing & information geometry</Typography>
          </li>
          <li>
            <Typography variant="body1">Relational topic modeling & semantic embeddings</Typography>
          </li>
          <li>
            <Typography variant="body1">Probabilistic graphical models & Bayesian networks</Typography>
          </li>
          <li>
            <Typography variant="body1">Uncertain decision making & distributed consensus</Typography>
          </li>
          <li>
            <Typography variant="body1">Model compression & edge deployment</Typography>
          </li>
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Technical Skills
        </Typography>
        <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
          <li>
            <Typography variant="body1"><strong>Languages:</strong> C, Python, Rust, C++, MATLAB, Julia, Java</Typography>
          </li>
          <li>
            <Typography variant="body1"><strong>ML/AI Libraries:</strong> PyTorch, PyG, Scikit-Learn, FAISS, Sentence-Transformers, LangChain, PHATE, Pandas, NumPy, Gensim, NLTK, Matplotlib, Seaborn, NetworkX, HyperNetX, spaCy</Typography>
          </li>
          <li>
            <Typography variant="body1"><strong>MLOps & LLMs:</strong> HuggingFace, Ollama, Databricks, OpenSearch, Claude Code, Codex</Typography>
          </li>
          <li>
            <Typography variant="body1"><strong>Cloud & Infra:</strong> Kubernetes, Docker, AWS EKS, Heroku, NextCloud</Typography>
          </li>
          <li>
            <Typography variant="body1"><strong>Software Dev:</strong> GitHub, Perforce, JIRA, CircleCI, Jenkins, GitHub Actions, VSCode, PyCharm, SlickEdit</Typography>
          </li>
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Additional Expertise
        </Typography>
        <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
          <li>
            <Typography variant="body1">Network estimation & graph epidemics</Typography>
          </li>
          <li>
            <Typography variant="body1">Semantic & geometric search</Typography>
          </li>
          <li>
            <Typography variant="body1">Heterogeneous data fusion</Typography>
          </li>
          <li>
            <Typography variant="body1">Distributed real-time consensus algorithms</Typography>
          </li>
        </Box>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Philosophy
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          I believe the best ML systems emerge from tight collaboration between researchers who push theoretical boundaries
          and engineers who understand production constraints. Neither perspective alone is sufficient—we need models that
          are both principled and practical.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          My approach emphasizes reproducibility, interpretability, and honest communication of uncertainty. I&apos;d rather
          build a system that knows when it doesn&apos;t know than one that confidently delivers wrong answers.
        </Typography>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Beyond Research
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          When I&apos;m not working on research or engineering problems, I enjoy competitive ultimate frisbee, hiking,
          and outdoor activities that combine exercise with sunshine. I also enjoy tinkering with embedded systems and
          exploring the latest developments in generative AI tools.
        </Typography>
      </Box>
    </Container>
  );
}
