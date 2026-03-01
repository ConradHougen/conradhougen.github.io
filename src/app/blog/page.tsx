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
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom sx={{ mb: 2 }}>
        Blog
      </Typography>
      <Typography variant="body1" paragraph sx={{ mb: 6, fontSize: '1.1rem', color: 'text.secondary' }}>
        Opinion pieces and tutorials related to graph theory, software engineering, probabilistic methods, 
        AI/ML, embedded systems, and various additional topics of interest.
      </Typography>

      {posts.length > 0 ? (
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid item xs={12} md={6} key={post.slug}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="caption" color="text.secondary" gutterBottom>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </Typography>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {post.excerpt}
                  </Typography>
                  {post.tags && post.tags.length > 0 && (
                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1, mt: 2 }}>
                      {post.tags.map((tag, index) => (
                        <Chip key={index} label={tag} size="small" variant="outlined" />
                      ))}
                    </Stack>
                  )}
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    href={`/blog/${post.slug}`}
                    size="small"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            bgcolor: 'background.paper',
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Posts are on the way
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Check back soon for deep dives, design notes, and lessons learned from production systems.
          </Typography>
        </Box>
      )}

      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Topics You Can Expect
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ul>
              <li>
                <Typography variant="body1">
                  Structure-aware learning with graphs and manifolds
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Bayesian networks, calibration, and uncertainty-aware decision-making
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <ul>
              <li>
                <Typography variant="body1">
                  Evaluation harnesses and observability for AI systems
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Software engineering for scalable and real-time systems
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
