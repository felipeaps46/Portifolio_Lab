// src/components/TechSkills.tsx
import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import type { TechSkillsProps } from "../Types/techItem";

export const TechSkills: React.FC<TechSkillsProps> = ({
  items,
  gap = 2,
  iconSize = 48,
  iconBoxHeight = 72,
  iconBoxWidth = 72,
  rounded = 2,
  elevation = 1,
  showTooltip = false,
}) => {
  return (
    <Grid container spacing={gap} sx={{ justifyContent: 'center' }}>
      {items.map((item) => {
        const IconComp = item.icon;

        const content = (
          <Box
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.25,
              textAlign: "center",
              height: "100%",
            }}
          >
            <Box
              sx={{
                width: iconBoxWidth,
                height: iconBoxHeight,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: item.bg ?? "transparent",
                borderRadius: 2,
                overflow: "hidden",
                color: item.color ?? "inherit",
                fontSize: `${iconSize}px`,
              }}
            >
              <IconComp
                aria-label={item.ariaLabel ?? item.name}
                role="img"
                style={{ fontSize: `${iconSize}px` }}
              />
            </Box>

            <Typography
              variant="subtitle2"
              component="div"
              noWrap
              sx={{ width: "100%", fontWeight: 600, color: '#f5f5f5' }}
              title={showTooltip ? undefined : item.name}
            >
              {item.name}
            </Typography>
          </Box>
        );

        const card = (
          <Card
            elevation={elevation}
            sx={{
              borderRadius: rounded,
              backgroundColor: 'transparent',
              height: "100%",
              display: "flex",
              flexDirection: "column",
              transition: 'all 0.2s ease',
              boxShadow: 'rgba(255, 255, 255, 0.19) 0px 1px 4px',
              "&:hover": {
                transform: "translateY(-2px) scale(1.08)",
                transition: 'all 0.2s ease',
              }
            }}
          >
            {content}
          </Card>
        );

        const wrapped = showTooltip ? (
          <Tooltip title={item.name}>{card}</Tooltip>
        ) : (
          card
        );

        return (
          <Grid
            key={item.name}
            sx={{
              flex: { xs: "1 1 25%",md: "1 1 15%" }, 
              maxWidth: { xs: "33%", md: "20%" }, 
            }}
          >
            {wrapped}
          </Grid>
        );
      })}
    </Grid>
  );
};