import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
  return (
    <Card sx={{ 
      width: '100%',
      height: 450, 
      display: 'flex', 
      flexDirection: 'column', 
      border: '1px solid #e0e0e0', 
      borderRadius: 0,
      boxShadow: 'none',
      transition: 'all 0.3s ease',
      '&:hover': {
        borderColor: '#000',
        boxShadow: 2, // 悬浮添加微妙阴影
        transform: 'translateY(-4px)',
      }
    }}>
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={title}
        sx={{ borderBottom: '1px solid #e0e0e0' }}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Box sx={{ 
          height: '7.5em',
          overflow: 'hidden', 
          position: 'relative',
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
        }}>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
