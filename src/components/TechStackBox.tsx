'use client';
import { Box, Typography, useTheme } from '@mui/material';

interface TechItem {
  name: string;
  icon?: string;
  iconSvg?: string;
  url?: string;
}

interface TechStackBoxProps {
  techStack: TechItem[];
}

export default function TechStackBox({ techStack }: TechStackBoxProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const borderColor = isDark ? '#555' : '#000';
  const textColor = isDark ? '#e0e0e0' : '#000';

  return (
    <Box sx={{
      p: 3,
      border: `1px solid ${borderColor}`,
      borderRadius: 1,
      mb: 4,
      bgcolor: 'transparent',
    }}>
      <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 'bold', color: 'text.secondary' }}>
        技术栈
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
        {techStack.map((tech) => {
          const isLink = tech.url && tech.url !== '#';
          const Component = isLink ? 'a' : 'span';
          return (
            <Box
              key={tech.name}
              component={Component}
              {...(isLink ? { href: tech.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
              sx={{
                px: 1.5,
                py: 0.5,
                border: `1px solid ${borderColor}`,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                textDecoration: 'none',
                color: textColor,
                fontSize: '0.875rem',
                transition: 'all 0.2s',
                cursor: isLink ? 'pointer' : 'default',
                '&:hover': {
                  bgcolor: textColor,
                  color: isDark ? '#000' : '#fff',
                }
              }}
            >
              {tech.iconSvg ? (
                <Box
                  component="span"
                  sx={{ display: 'flex', '& svg': { width: 16, height: 16 } }}
                  dangerouslySetInnerHTML={{ __html: tech.iconSvg }}
                />
              ) : null}
              <Typography variant="body2">{tech.name}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
