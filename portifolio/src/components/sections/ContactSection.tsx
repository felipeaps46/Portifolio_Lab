// src/components/sections/ContactSection.tsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { GitHub } from "@mui/icons-material";
import { userData } from "../../data/userData";
import { Title } from "../Title"
import AnimatedCanvas from "../../assets/animatedBackground";
import { ContactCard } from "../ContactCard";

export const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Implementar envio (EmailJS, Formspree, API própria, etc.)
      // await enviarMensagem(formData)
      await new Promise((r) => setTimeout(r, 1000));
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  const user = userData

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: {
          xs: 4,
          md: 4,
          flex: 1,
          position: "relative",
          //backgroundImage: `url(${fundo})`,
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <AnimatedCanvas></AnimatedCanvas>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          mb: 6,
        }}
      >
        <Title title='Contatos' subtitle="Gostou do que viu? Me chame por um desses canais."></Title>

      </Box>

      <Box sx={{ display: "flex", gap: 1 }}>
        <Box
          sx={{
            maxWidth: 500,
            p: 3,
            border: "1px solid #ccc",
            borderRadius: 2,
            boxShadow: 2,
            backgroundColor: "white",
          }}
        >
          <Typography variant="h5" mb={3} fontWeight="bold" sx={{}}>
            Envie sua mensagem
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <TextField
              label="Nome"
              fullWidth
              sx={{
                "& label.Mui-focused": {
                  color: "#1E1E1E",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#1E1E1E",
                  },
                },
              }}
            />
            <TextField
              label="Email"
              fullWidth
              sx={{
                "& label.Mui-focused": {
                  color: "#1E1E1E",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#1E1E1E",
                  },
                },
              }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              label="Telefone"
              fullWidth
              sx={{
                "& label.Mui-focused": {
                  color: "#1E1E1E",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#1E1E1E",
                  },
                },
              }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              label="Mensagem"
              multiline
              rows={8}
              fullWidth
              sx={{
                "& label.Mui-focused": {
                  color: "#1E1E1E",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#1E1E1E",
                  },
                },
              }}
            />
          </Box>

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#1E1E1E",
              borderRadius: 3,
              fontFamily: "'Segoe UI', Arial, sans-serif",
            }}
          >
            Enviar Mensagem
          </Button>
        </Box>

        <Box
          sx={{
            maxWidth: 400,
            p: 5,
            pt: 0,
            color: "white",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white", fontFamily: "'Inter', sans-serif", fontSize: '36px' }}
          >
            Conecte-se Por
          </Typography>

          <ContactCard 
            icon={<EmailOutlinedIcon sx={{ color: "white" }} />}
            title="Email"
            text={user.emailName}
            link={user.links?.email}
          />

          <ContactCard
            icon={<WhatsAppIcon sx={{ color: "white" }} />}
            title="WhatsApp"
            text={user.telefone}
            link={user.links?.whatsapp}
          />

          <ContactCard
            icon={<LinkedInIcon sx={{ color: "white" }} />}
            title="LinkedIn"
            text={user.linkedinName}
            link={user.links?.linkedin}
          />
          <ContactCard
            icon={<GitHub sx={{ color: "white" }} />}
            title="Github"
            text={user.githubName}
            link={user.links?.github}
          />
        </Box>
      </Box>
    </Box>
  );
};
