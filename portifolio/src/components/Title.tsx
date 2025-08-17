import { Box, Typography } from "@mui/material";
import type { TitleType } from "../Types/TitleType";


export const Title: React.FC<TitleType> = ({ title, subtitle }) => {
    return (
        <Box textAlign="center" py={6}>
            <Typography variant="h4" component="h2" sx={{
                color: '#f5f5f5', fontWeight: 'bold', fontSize: '2.5rem', textShadow: `
      0 0 6px rgba(245, 245, 245, 0.25),
      0 0 12px rgba(245, 245, 245, 0.2)
    `}}>
                {title}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#9CA3AF', fontSize: '1.4rem' }}>
                {subtitle}
            </Typography>
        </Box>
    );
}