import { Box, Typography } from '@mui/material';

export default function SkillSection() {
  const skills = ['React', 'Next.js', 'Go', 'TypeScript', 'Python', 'Material UI'];
  
  return (
    <Box sx={{ p: 4, border: '1px solid #000', mb: 0, bgcolor: 'transparent' }}>
      <Typography variant="h4" sx={{ mb: 3, letterSpacing: '-0.02em', color: '#000' }}>SKILLS</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {skills.map((skill) => (
          <Box 
            key={skill} 
            sx={{ 
              px: 2, 
              py: 1, 
              border: '1px solid #000', 
              color: '#000',
              transition: 'all 0.2s',
              cursor: 'default',
              '&:hover': {
                bgcolor: '#000',
                color: '#fff',
              }
            }}
          >
            <Typography variant="body1">{skill}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
