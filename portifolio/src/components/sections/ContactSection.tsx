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
import { Title } from "../Title";
import AnimatedCanvas from "../../assets/animatedBackground";
import { ContactCard } from "../ContactCard";
import { useTranslation } from "react-i18next";

export const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();

    if(!nome || !email || !telefone || !mensagem){
      alert(t("contatoSecao.alert"))
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("http://127.0.0.1:8000/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipient: "diogocaribebrunoro@gmail.com",
          subject: `Olá, sou ${nome} de email: ${email} com telefone: ${telefone}`,
          body: `${mensagem}`,
        }),
      });

      if (!response.ok) throw new Error("Erro ao enviar o email");
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  const user = userData;

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
        <Title
          title={t("contatoSecao.titulo")}
          subtitle={t("contatoSecao.subtitulo")}
        ></Title>
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
              label={t("contatoSecao.cardEmail.labelNome")}
              value = {nome}
              onChange={(e) => setNome(e.target.value)}
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
              value = {email}
              onChange={(e) => setEmail(e.target.value)}
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
              label={t("contatoSecao.cardEmail.labelTelefone")}
              value = {telefone}
              onChange={(e) => setTelefone(e.target.value)}
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
              label={t("contatoSecao.cardEmail.labelMensagem")}
              value = {mensagem}
              onChange={(e) => setMensagem(e.target.value)}
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
            onClick={handleSubmit}
          >
            {t("contatoSecao.cardEmail.btnTexto")}
          </Button>
          {status === "sending" && <Alert severity="info">Enviando...</Alert>}
          {status === "success" && <Alert severity="success">Email enviado com sucesso!</Alert>}
          {status === "error" && <Alert severity="error">Erro ao enviar email.</Alert>}
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
            sx={{
              color: "white",
              fontFamily: "'Inter', sans-serif",
              fontSize: "36px",
            }}
          >
            {t("contatoSecao.titulo02")}
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
