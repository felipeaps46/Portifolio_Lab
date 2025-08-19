// src/components/sections/AboutSection.tsx
import React from "react";
import { Box, Container, Typography, Stack, Avatar } from "@mui/material";
import { userData } from "../../data/userData";
import { useTranslation } from "react-i18next";

export const AboutSection: React.FC = () => {
  const { t } = useTranslation()
  const user = userData
  const descTraduzida = t(user.desc)
  return (
    <Box component="section" id="about" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Avatar
            alt="Sua foto"
            src={user.img}
            sx={{ width: 120, height: 120 }}
          />
          <Typography variant="h3" component="h2" fontWeight={700} sx={{ color: "#fff" }}>
            {t("sobreSecao.titulo")}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ color: "#fff" }}>
            {descTraduzida}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};