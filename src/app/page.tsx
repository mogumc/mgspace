import { Grid, Typography, Box } from '@mui/material';
import ProjectCard from '@/components/ProjectCard';
import SkillSection from '@/components/SkillSection';
import Sidebar from '@/components/Sidebar';
import SocialLinks from '@/components/SocialLinks';
import { getAllProjects } from '@/lib/projects';
import { siteConfig } from '@/lib/config.server';

export default function Home() {
  const projects = getAllProjects();
  const categories = Array.from(new Set(projects.map(p => p.category)));

  return (
    <Box>
      {/* INTRO 区域 */}
      <Box id="intro" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 8, color: 'white' }}>
        <Typography variant="h1">HELLO, I AM {siteConfig.name}</Typography>
        <SocialLinks config={siteConfig} />
      </Box>

      {/* SKILLS 区域 */}
      <Box id="skills" sx={{ pt: 8, pb: 0, px: 8 }}>
        <SkillSection />
      </Box>

      {/* PROJECTS 区域 */}
      <Box id="projects" sx={{ display: 'flex', pt: 8, px: { xs: 2, md: 8 }, pb: 8, gap: 4 }}>
        {/* 侧边栏：小屏隐藏，大屏显示 */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, flexShrink: 0, width: 200 }}>
          <Sidebar config={siteConfig} categories={categories} />
        </Box>
        {/* 项目内容区：填满剩余空间 */}
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          {categories.map((category) => (
            <Box key={category} id={category} sx={{ mb: 8 }}>
              <Typography variant="h4" sx={{ mb: 4 }}>{category.toUpperCase()}</Typography>
              <Grid container spacing={2}>
                {projects.filter(p => p.category === category).map((project) => (
                  <Grid item key={project.slug} xs={12} sm={6} lg={4} xl={3}>
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      imageUrl={project.imageUrl}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
