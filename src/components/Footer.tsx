import { Box, Typography, Link } from '@mui/material';

export default function Footer({ config }: { config: any }) {
  const friends = config.friends || [];
  return (
    <Box sx={{ 
      borderTop: '1px solid #e0e0e0', 
      py: 6, 
      px: 8, 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'space-between', 
      alignItems: 'center',
      gap: 4
    }}>
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} {config.name}. All rights reserved.
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>友情链接:</Typography>
        {friends.map((link: any) => (
          <Link key={link.label} href={link.url} color="inherit" underline="hover" fontSize="0.875rem">{link.label}</Link>
        ))}
      </Box>
    </Box>
  );
}
