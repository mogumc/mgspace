'use client';
import { Box, Typography, List, ListItem, ListItemButton, ListItemText, Link } from '@mui/material';
import { useState, useEffect, useRef } from 'react';

export default function Sidebar({ config, categories }: { config: any, categories: string[] }) {
  const [activeId, setActiveId] = useState(categories[0]);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY.current ? 'down' : 'up';
      lastScrollY.current = scrollY;

      const triggerLine = window.innerHeight * 0.3;

      if (direction === 'down') {
        // 下滑：从后往前找，最后一个 top <= triggerLine 的分类
        for (let i = categories.length - 1; i >= 0; i--) {
          const el = document.getElementById(categories[i]);
          if (!el) continue;
          if (el.getBoundingClientRect().top <= triggerLine) {
            setActiveId(categories[i]);
            break;
          }
        }
      } else {
        // 上滑：从前往后找，第一个 bottom >= triggerLine 的分类
        for (let i = 0; i < categories.length; i++) {
          const el = document.getElementById(categories[i]);
          if (!el) continue;
          if (el.getBoundingClientRect().bottom >= triggerLine) {
            setActiveId(categories[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [categories]);

  return (
    <Box sx={{
      display: { xs: 'none', md: 'flex' },
      flexDirection: 'column',
      position: 'sticky',
      top: '100px',
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
          {(config.social || []).map((link: any) => (
            <Link key={link.label} href={link.url} color="inherit" underline="hover" fontSize="0.8rem">{link.label}</Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
