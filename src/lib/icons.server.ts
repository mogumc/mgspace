import fs from 'fs';
import path from 'path';

const iconsDir = path.join(process.cwd(), 'icons');

export function readIconSvg(iconName: string): string | undefined {
  if (!iconName) return undefined;
  const filePath = path.join(iconsDir, iconName);
  if (!fs.existsSync(filePath)) return undefined;
  return fs.readFileSync(filePath, 'utf8');
}
