'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Box, Typography, Link, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar({ config }: { config: any }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true); // 下滑隐藏
    } else {
      setHidden(false); // 上滑显示
    }
  });

  const navLinks = [
    { label: 'GitHub', href: config.social.github },
    { label: 'Twitter', href: config.social.twitter },
    { label: 'Blog', href: config.social.blog },
  ];

  return (
    <>
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000
        }}
      >
        <Box sx={{
          height: '60px',
          px: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          bgcolor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #e0e0e0'
        }}>
          <Link href="/" color="inherit" underline="none">
            <Typography variant="h6" fontWeight="bold">{config.name}</Typography>
          </Link>

          {/* 桌面端链接 */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {navLinks.map(link => (
              <Link key={link.label} href={link.href} color="inherit" underline="hover">{link.label}</Link>
            ))}
          </Box>

          {/* 移动端菜单按钮 */}
          <IconButton sx={{ display: { md: 'none' } }} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      </motion.div>

      {/* 移动端全屏菜单 */}
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)} PaperProps={{ sx: { width: '100%', bgcolor: '#fff' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <IconButton onClick={() => setMobileOpen(false)}><CloseIcon /></IconButton>
        </Box>
        <List sx={{ mt: 4 }}>
          {navLinks.map(link => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton component="a" href={link.href} onClick={() => setMobileOpen(false)} sx={{ justifyContent: 'center' }}>
                <ListItemText primary={link.label} sx={{ textAlign: 'center' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
