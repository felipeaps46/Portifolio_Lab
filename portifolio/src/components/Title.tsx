import { Box, Typography } from "@mui/material";
import type { TitleType } from "../Types/TitleType";


export const Title: React.FC<TitleType> = ({ title, subtitle }) => {
    return (
        <Box textAlign="center" py={6}>
            <Typography variant="h4" component="h2" sx={{
                color: '#f5f5f5', fontWeight: 'bold', fontSize: {xs: "30px", sm: "39px", md: '48px' }, textShadow: `
      0 0 6px rgba(245, 245, 245, 0.2),
      0 0 12px rgba(245, 245, 245, 0.15)
    `}}>
                {title}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#b0b0b0', fontSize: {xs: "16px",sm: "22px", md: '28px' }, pt: 1 }}>
                {subtitle}
            </Typography>
        </Box>
    );
}