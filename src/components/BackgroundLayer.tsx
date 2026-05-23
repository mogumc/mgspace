'use client';
import { usePathname } from 'next/navigation';
import Background from '@/components/Background';

interface BackgroundLayerProps {
  src?: string;
}

export default function BackgroundLayer({ src }: BackgroundLayerProps) {
  const pathname = usePathname();
  if (pathname !== '/') return null;
  return <Background src={src || undefined} />;
}
