import { Container, Typography, Box, Chip, Stack, Divider } from '@mui/material';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="caption" color="text.secondary">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Typography>
        <Typography variant="h2" component="h1" gutterBottom sx={{ mt: 1 }}>
          {post.title}
        </Typography>
        {post.tags && post.tags.length > 0 && (
          <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1, mt: 2 }}>
            {post.tags.map((tag, index) => (
              <Chip key={index} label={tag} size="small" />
            ))}
          </Stack>
        )}
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box
        sx={{
          '& h1': { typography: 'h3', mt: 4, mb: 2 },
          '& h2': { typography: 'h4', mt: 3, mb: 2 },
          '& h3': { typography: 'h5', mt: 3, mb: 1.5 },
          '& p': { typography: 'body1', mb: 2, lineHeight: 1.8 },
          '& ul, & ol': { mb: 2, pl: 3 },
          '& li': { typography: 'body1', mb: 1 },
          '& pre': {
            bgcolor: 'grey.100',
            p: 2,
            borderRadius: 1,
            overflow: 'auto',
            mb: 2,
          },
          '& code': {
            bgcolor: 'grey.100',
            px: 1,
            py: 0.5,
            borderRadius: 0.5,
            fontFamily: 'monospace',
            fontSize: '0.9em',
          },
          '& blockquote': {
            borderLeft: '4px solid',
            borderColor: 'primary.main',
            pl: 2,
            ml: 0,
            fontStyle: 'italic',
            color: 'text.secondary',
          },
          '& a': {
            color: 'primary.main',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
        }}
        dangerouslySetInnerHTML={{ __html: post.content || '' }}
      />
    </Container>
  );
}
