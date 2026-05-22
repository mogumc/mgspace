import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 静态导出通常需要禁用图片优化
  },
};

export default nextConfig;
