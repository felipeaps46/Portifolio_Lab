// src/components/TechSkills.tsx
import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

type TechItem = {
  name: string;
  src: string;       // URL da imagem (public/, import ou URL externa)
  alt?: string;      // Texto alternativo da imagem
  bg?: string;       // Cor de fundo opcional da área da imagem (ex.: "#0B0F14" para logos claras)
};

type TechSkillsProps = {
  items: TechItem[];
  gap?: number;                // espaçamento entre cards (Grid spacing)
  imageHeight?: number;        // altura útil para a área da imagem (px)
  rounded?: number;            // borderRadius do Card (theme.shape.borderRadius por padrão)
  elevation?: number;          // elevação do Card
  clickable?: boolean;         // se true, usa CardActionArea e dispara onItemClick
  showTooltip?: boolean;       // exibe tooltip com o nome inteiro
  onItemClick?: (item: TechItem) => void;
};

function getInitials(label: string) {
  return label
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

const TechImage: React.FC<{ item: TechItem; size: number }> = ({ item, size }) => {
  const [error, setError] = React.useState(false);

  if (error) {
    return (
      <Avatar
        sx={{
          width: Math.round(size * 0.7),
          height: Math.round(size * 0.7),
          bgcolor: (theme) => theme.palette.action.hover,
          fontWeight: 700,
        }}
        aria-label={item.name}
      >
        {getInitials(item.name)}
      </Avatar>
    );
  }

  return (
    <Box
      component="img"
      src={item.src}
      alt={item.alt ?? item.name}
      loading="lazy"
      onError={() => setError(true)}
      sx={{
        maxHeight: size,
        maxWidth: "100%",
        objectFit: "contain",
        display: "block",
      }}
    />
  );
};

export const TechSkills: React.FC<TechSkillsProps> = ({
  items,
  gap = 2,
  imageHeight = 72,
  rounded,
  elevation = 1,
  clickable = false,
  showTooltip = false,
  onItemClick,
}) => {
  return (
    <Grid container spacing={gap}>
      {items.map((item) => {
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
                width: "100%",
                height: imageHeight,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: item.bg ?? "transparent",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <TechImage item={item} size={imageHeight} />
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
          <CardActionArea onClick={() => onItemClick?.(item)}>{content}</CardActionArea>
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