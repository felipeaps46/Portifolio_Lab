import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from "@mui/material";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import { services } from "../../data/serviceData";

export default function ServicesSection() {
  return (
    <Box sx={{ backgroundColor: "#2a2a2a", minHeight: "100vh", py: 8, px: 2 }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h2"
            component="h1"
            sx={{ color: "white", fontWeight: "bold", fontSize: { xs: "2.5rem", md: "3.5rem" }, letterSpacing: "0.1em", mb: 2 }}
          >
            MEUS SERVIÇOS
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#b0b0b0", fontSize: { xs: "1rem", md: "1.2rem" }, maxWidth: "600px", mx: "auto" }}
          >
            Soluções completas para transformar suas ideias em realidade digital
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service) => {
            const Icon = service.icon as React.ElementType<SvgIconProps>;
            return (
              <Grid item xs={12} md={6} lg={4} key={service.title}>
                <Card
                  sx={{
                    backgroundColor: "#3a3a3a",
                    border: "1px solid #4a4a4a",
                    borderRadius: 3,
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": { transform: "translateY(-5px)", backgroundColor: "#404040", borderColor: "#5a5a5a" }
                  }}
                >
                  <CardContent
                    sx={{ p: 4, textAlign: "center", height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
                  >
                    <Avatar sx={{ bgcolor: "#4a4a4a", width: 64, height: 64, mb: 2 }}>
                      <Icon sx={{ fontSize: 36, color: "#ffffff" }} />
                      {/* Alternativa: <Icon fontSize="large" htmlColor="#ffffff" /> */}
                    </Avatar>

                    <Typography variant="h5" component="h3" sx={{ color: "white", fontWeight: "bold", mb: 2, fontSize: "1.5rem" }}>
                      {service.title}
                    </Typography>

                    <Typography variant="body1" sx={{ color: "#b0b0b0", lineHeight: 1.6, textAlign: "center" }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}