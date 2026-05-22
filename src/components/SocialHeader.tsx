import { Box, Typography, Link } from '@mui/material';

export default function SocialHeader() {
  return (
    <Box sx={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: '#ffffff' // 确保在图片上清晰可见
    }}>
      <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '5rem' }, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        YOUR NAME
      </Typography>
      <Box sx={{ mt: 4, display: 'flex', gap: 3 }}>
        <Link href="#" color="inherit" underline="hover">GitHub</Link>
        <Link href="#" color="inherit" underline="hover">Twitter</Link>
        <Link href="#" color="inherit" underline="hover">Blog</Link>
      </Box>
    </Box>
  );
}
