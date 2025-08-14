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

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: {
          xs: 8,
          md: 12,
          backgroundImage: `url(${fundo})`,
        },
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          component="h2"
          fontWeight={700}
          textAlign="center"
          mb={4}
          color="#F5F5F5"
        >
          Contato
        </Typography>

        {status === "success" && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Obrigado! Sua mensagem foi enviada.
          </Alert>
        )}
        {status === "error" && (
          <Alert severity="error" sx={{ mb: 2 }}>
            Ocorreu um erro ao enviar. Tente novamente.
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Stack spacing={2}>
            <TextField
              label="Nome"
              name="name"
              fullWidth
              required
              sx={{ backgroundColor: "#F5F5F5" }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              required
              sx={{ backgroundColor: "#F5F5F5" }}
            />
            <TextField
              label="Mensagem"
              name="message"
              fullWidth
              required
              multiline
              minRows={4}
              sx={{ backgroundColor: "#F5F5F5" }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
