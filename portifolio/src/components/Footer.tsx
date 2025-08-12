import React from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  Divider,
  Stack,
  IconButton,
  Container,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

type NavLink = { text: string; href: string };
type ConnectLink = { Icon: React.ElementType; text: string; href: string };
type SocialIcon = { Icon: React.ElementType; href: string; label: string };

export interface FooterProps {
  name?: string;
  description?: string;
  navLinks?: NavLink[];
  connectLinks?: ConnectLink[];
  socialIcons?: SocialIcon[];
}

export const Footer: React.FC<FooterProps> = ({
  name = "Felipe Pereira",
  description = "Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut.",
  navLinks = [
    { text: "Sobre", href: "#sobre" },
    { text: "Experiências", href: "#experiencias" },
    { text: "Habilidades", href: "#habilidades" },
    { text: "Projetos", href: "#projects" },
    { text: "Contato", href: "#contato" },
  ],
  connectLinks = [
    { Icon: LinkedInIcon, text: "LinkedIn", href: "https://www.linkedin.com/in/seuperfil" },
    { Icon: GitHubIcon, text: "GitHub", href: "https://github.com/seuperfil" },
    { Icon: WhatsAppIcon, text: "WhatsApp", href: "https://wa.me/seunumerodetelefone" },
    { Icon: MailOutlineIcon, text: "Gmail", href: "mailto:seuemail@gmail.com" },
  ],
  socialIcons = [
    { Icon: InstagramIcon, href: "https://www.instagram.com/seuperfil", label: "Instagram" },
    { Icon: LinkedInIcon, href: "https://www.linkedin.com/in/seuperfil", label: "LinkedIn" },
    { Icon: GitHubIcon, href: "https://github.com/seuperfil", label: "GitHub" },
    { Icon: WhatsAppIcon, href: "https://wa.me/seunumerodetelefone", label: "WhatsApp" },
  ],
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: "background.paper",
        color: "text.primary",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          justifyContent="space-between" // distribui espaçamentos iguais entre as colunas
        >
          {/* Coluna 1 */}
          <Grid xs={12} md={5} sx={{ minWidth: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
                {name}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  // Garante quebra correta sem deformar o layout
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                  wordWrap: "break-word",
                  hyphens: "auto",
                  whiteSpace: "normal",
                }}
              >
                {description}
              </Typography>

              <Stack direction="row" spacing={1.5} sx={{ pt: 1 }}>
                {socialIcons.map(({ Icon, href, label }, idx) => (
                  <IconButton
                    key={idx}
                    aria-label={label}
                    component="a"
                    href={href}
                    
                    rel="noopener noreferrer"
                    sx={{
                      color: "text.primary",
                      width: 40,
                      height: 40,
                      transition: "transform .2s ease-in-out, color .2s ease-in-out",
                      "&:hover": {
                        color: "primary.main",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <Icon fontSize="medium" />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Coluna 2 */}
          <Grid xs={6} md={2} sx={{ minWidth: 0 }}>
            <Stack spacing={1.5}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                Navegação
              </Typography>
              {navLinks.map(({ text, href }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  color="inherit"
                  underline="none"
                  sx={{
                    "&:hover": {
                      color: "primary.main",
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Typography variant="body2">{text}</Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Coluna 3 */}
          <Grid xs={6} md={2} sx={{ minWidth: 0 }}>
            <Stack spacing={1.5}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                Conecte-se
              </Typography>
              {connectLinks.map(({ Icon, text, href }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  color="inherit"
                  underline="none"
                  
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "&:hover": {
                      color: "primary.main",
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Icon sx={{ mr: 1, fontSize: "1.25rem" }} />
                  <Typography variant="body2">{text}</Typography>
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 4, md: 6 } }} />

        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} {name}. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;