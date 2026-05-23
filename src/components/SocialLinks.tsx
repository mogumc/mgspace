import { Box, Link } from '@mui/material';

interface SocialLinksProps {
  config: any;
}

export default function SocialLinks({ config }: SocialLinksProps) {
  const links = config.social || [];
  return (
    <Box sx={{ mt: 4, display: 'flex', gap: 3 }}>
      {links.map((link: any) => (
        <Link key={link.label} href={link.url} color="inherit" underline="hover">{link.label}</Link>
      ))}
    </Box>
  );
}
