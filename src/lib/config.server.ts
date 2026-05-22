import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const configPath = path.join(process.cwd(), 'content', 'config.yml');

export const siteConfig = yaml.load(fs.readFileSync(configPath, 'utf8')) as {
  name: string;
  title: string;
  description: string;
  social: {
    github: string;
    twitter: string;
    blog: string;
  };
};
