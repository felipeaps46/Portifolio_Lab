import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
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
  rounded,
  elevation = 1,
  clickable = false,
  showTooltip = false,
  onItemClick,
}) => {
  return (
    <Grid container spacing={gap}>
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
                Height: iconBoxHeight,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: item.bg ?? "transparent",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <IconComp
                size={iconSize}
                color={item.color ?? "inherit"}
                aria-label={item.ariaLabel ?? item.name}
                role="img"
              />
            </Box>

            <Typography
              variant="subtitle2"
              component="div"
              noWrap
              sx={{ width: "100%", fontWeight: 600 }}
              title={showTooltip ? undefined : item.name}
            >
              {item.name}
            </Typography>
          </Box>
        );

        const cardInner = clickable ? (
          <CardActionArea onClick={() => onItemClick?.(item)}>
            {content}
          </CardActionArea>
        ) : (
          content
        );

        const card = (
          <Card
            elevation={elevation}
            sx={{
              borderRadius: rounded,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "stretch",
            }}
          >
            {cardInner}
          </Card>
        );

        return (
          <Grid
            key={item.name}
            item
            xs={6}  // 2 colunas no xs
            sm={4}  // 3 colunas no sm
            md={3}  // 4 colunas no md
            lg={2}  // 6 colunas no lg
          >
            {showTooltip ? <Tooltip title={item.name}>{card}</Tooltip> : card}
          </Grid>
        );
      })}
    </Grid>
  );
};