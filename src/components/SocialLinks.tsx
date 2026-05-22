import { Box, Typography, Link } from '@mui/material';

interface SocialLinksProps {
  config: any;
}

export default function SocialLinks({ config }: SocialLinksProps) {
  return (
    <Box sx={{ mt: 4, display: 'flex', gap: 3 }}>
      <Link href={config.social.github} color="inherit" underline="hover">GitHub</Link>
      <Link href={config.social.twitter} color="inherit" underline="hover">Twitter</Link>
      <Link href={config.social.blog} color="inherit" underline="hover">Blog</Link>
    </Box>
  );
}
