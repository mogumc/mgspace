'use client';
import { Box, Typography, List, ListItem, ListItemButton, ListItemText, Link } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Sidebar({ config, categories }: { config: any, categories: string[] }) {
  const [activeId, setActiveId] = useState(categories[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 核心逻辑：以屏幕 50% 处为判断标准
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { 
        rootMargin: '-50% 0px -50% 0px', // 关键：仅在屏幕中央 50% 区域触发
        threshold: 0 
      }
    );
    categories.forEach((cat) => {
      const element = document.getElementById(cat);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [categories]);

  return (
    <Box sx={{
      display: { xs: 'none', md: 'flex' },
      flexDirection: 'column',
      position: 'sticky',
      top: '100px', // 顶部留白
      width: '200px',
      height: 'fit-content',
      p: 2,
      zIndex: 10,
      bgcolor: 'transparent',
    }}>
      <Typography variant="h6" sx={{ mb: 2 }}>{config.name}</Typography>
      <List>
        {categories.map((category) => (
          <ListItem key={category} disablePadding>
            <ListItemButton component="a" href={`#${category}`} sx={{ 
              borderLeft: activeId === category ? '2px solid #000' : 'none',
              pl: activeId === category ? 1 : 2,
              transition: 'all 0.2s'
            }}>
              <ListItemText primary={category.toUpperCase()} primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: activeId === category ? 700 : 400 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid #e0e0e0' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Link href={config.social.github} color="inherit" underline="hover" fontSize="0.8rem">GitHub</Link>
          <Link href={config.social.twitter} color="inherit" underline="hover" fontSize="0.8rem">Twitter</Link>
          <Link href={config.social.blog} color="inherit" underline="hover" fontSize="0.8rem">Blog</Link>
        </Box>
      </Box>
    </Box>
  );
}
