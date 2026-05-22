import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  category: string;
  content: string;
}

export function getAllProjects(): ProjectData[] {
  if (!fs.existsSync(contentDirectory)) return [];
  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames.filter(fileName => fileName.endsWith('.md')).map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      imageUrl: data.imageUrl || '',
      date: data.date || '',
      category: data.category || 'Uncategorized',
      content,
    };
  });
}
