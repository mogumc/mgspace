import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { readIconSvg } from './icons.server';

const configPath = path.join(process.cwd(), 'content', 'config.yml');

export const siteConfig = yaml.load(fs.readFileSync(configPath, 'utf8')) as {
  name: string;
  title: string;
  description: string;
  favicon: string;
  background: string;
  showNavbarLogo: boolean;
  skills: { name: string; icon?: string; iconSvg?: string; url?: string }[];
  navbar: { label: string; url: string }[];
  social: { label: string; url: string }[];
  friends: { label: string; url: string }[];
  seo: {
    url: string;
    defaultDescription: string;
    ogImage: string;
    siteName: string;
    locale: string;
    type: string;
  };
};

if (siteConfig.skills) {
  for (const skill of siteConfig.skills) {
    if (skill.icon) {
      skill.iconSvg = readIconSvg(skill.icon);
    }
  }
}
