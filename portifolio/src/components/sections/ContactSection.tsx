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
import fundo from "../../assets/fundo.png";
import { TbBackground } from "react-icons/tb";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { userData } from "../../data/userData";

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
          xs: 8,
          md: 12,
          backgroundImage: `url(${fundo})`,
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          mb: 6,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Contatos
        </Typography>
        <Typography
          sx={{ color: "#9CA3AF", fontFamily: "'Inter', sans-serif" }}
        >
          Gostou do que viu? Me chame por um desses canais.
        </Typography>
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
          <Typography variant="h5" mb={3} fontWeight="bold">
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
            maxWidth: 300,
            p: 5,
            color: "white",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white", fontFamily: "'Inter', sans-serif" }}
          >
            Conecte-se Por
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 5,
              backgroundColor: "white",
              p: 2,
              borderRadius: 4,
              color: "1E1E1E",
            }}
          >
            <EmailOutlinedIcon
              sx={{ mr: 1, color: "#1E1E1E", backgroundColor: "#E1E1E" }}
            />
            <Typography variant="body1" sx={{ color: "#2C2C2C" }}>
              {user.links?.email}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 5,
              backgroundColor: "white",
              p: 2,
              borderRadius: 4,
              color: "E1E1E",
            }}
          >
            <WhatsAppIcon sx={{ mr: 1, color: "#1E1E1E" }} />
            <Typography variant="body1" sx={{ color: "#2C2C2C" }}>
              {user.telefone}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 5,
              backgroundColor: "white",
              p: 2,
              borderRadius: 4,
              color: "E1E1E",
            }}
          >
            <Button href={user.links?.linkedin} >
            <LinkedInIcon sx={{ mr: 1, color: "#1E1E1E" }} />
              {user.name}
            </Button>
            <Typography variant="body1" sx={{ color: "#2C2C2C" }}>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
