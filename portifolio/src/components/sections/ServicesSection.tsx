import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from "@mui/material";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import { services } from "../../data/serviceData";
import { Title } from "../Title";
import { useTranslation } from "react-i18next";

export default function ServicesSection() {

  const { t } = useTranslation()

  return (
    <Box sx={{ backgroundColor: "#2a2a2a", py: { xs: 0, md: 8 }, pb: { xs: 14 }, px: 0, width: "100%" }}>
      <Container sx={{ width: "100%" }}>
        <Box textAlign="center" mb={{ xs: 0, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center" }}>
          <Title title={t("servicosSecao.titulo")} subtitle={t("servicosSecao.subtitulo")}></Title>
        </Box>

        <Grid container spacing={4} justifyContent="center" sx={{ width: "100%", display: 'grid', gridTemplateColumns: { xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" } }}>
          {services.map((service) => {
            const Icon = service.icon as React.ElementType<SvgIconProps>;
            return (
              <Card
                sx={{
                  backgroundColor: "#3a3a3a",
                  border: "1px solid #4a4a4a",
                  borderRadius: 3,
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    backgroundColor: "#404040",
                    borderColor: "#5a5a5a"
                  }
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                  <Avatar sx={{ bgcolor: "#4a4a4a", width: 64, height: 64, mb: 2 }}>
                    <Icon sx={{ fontSize: 36, color: "#ffffff" }} />
                  </Avatar>

                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ color: "white", fontWeight: "bold", mb: 2, fontSize: "1.5rem" }}
                  >
                    {t(service.title)}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ color: "#b0b0b0", lineHeight: 1.6, textAlign: "center" }}
                  >
                    {t(service.description)}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Grid>

      </Container>
    </Box>
  );
}