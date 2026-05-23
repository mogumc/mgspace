'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const { scrollY } = useScroll();

  // 路由变化时立即重置滚动位置并强制更新 framer-motion
  useEffect(() => {
    if (pathname !== prevPathname.current) {
      // 同步重置原生滚动
      window.scrollTo(0, 0);
      // 强制更新 framer-motion 的滚动值
      scrollY.set(0);
      prevPathname.current = pathname;
    }
  }, [pathname, scrollY]);

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
