'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Box } from '@mui/material';

export default function HeroContainer({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  
  // 1. 遮罩调整：从顶部向下消退 (To Bottom)
  // 当 scrollYProgress = 0 时，彩色层显示完整 (mask 为全黑)
  // 当 scrollYProgress = 1 时，彩色层从顶部向下逐渐透明
  const mask = useTransform(scrollYProgress, [0, 1], [
    'linear-gradient(to bottom, black 100%, transparent 100%)',
    'linear-gradient(to bottom, black 0%, transparent 100%)'
  ]);
  
  // 2. 虚化效果：在滚动到 8% (即首屏约 1/2) 时突变为 5px，随后至 100% 缓慢增强至 10px
  const blur = useTransform(scrollYProgress, [0, 0.08, 0.09, 1], ['blur(0px)', 'blur(0px)', 'blur(5px)', 'blur(10px)']);
  
  return (
    <Box sx={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* 底部黑白层 (始终可见) */}
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1,
          backgroundImage: 'url(/bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center',
          filter: useTransform(blur, (b) => `grayscale(100%) brightness(0.8) ${b}`),
        }}
      />
      
      {/* 顶部彩色层 (动态遮罩) */}
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1,
          backgroundImage: 'url(/bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center',
          WebkitMaskImage: mask,
          maskImage: mask,
          filter: blur,
        }}
      />

      {/* 内容区域 */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {children}
      </Box>
    </Box>
  );
}
