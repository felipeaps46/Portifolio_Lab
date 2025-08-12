// src/components/ChatWindow.tsx
import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Divider,
  TextField,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

type Message = {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: number;
};

type ChatWindowProps = {
  open: boolean;
  onClose: () => void;
};

export const ChatWindow: React.FC<ChatWindowProps> = ({ open, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      text: "Olá! Como posso ajudar no seu portfólio hoje?",
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [open, messages.length]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Mock de resposta do robô — depois você integra com sua API/LLM
    setTimeout(() => {
      const botMsg: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        text: "Recebi sua mensagem! Em breve responderei com detalhes.",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  if (!open) return null;

  return (
    <Paper
      elevation={8}
      sx={{
        position: "fixed",
        right: 16,
        bottom: 90,
        width: { xs: "92vw", sm: 380 },
        height: { xs: "55vh", sm: 520 },
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        overflow: "hidden",
        zIndex: (theme) => theme.zIndex.modal + 1,
      }}
      aria-label="Janela de conversa com o assistente"
      role="dialog"
    >
      <Box
        sx={{
          px: 2,
          py: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="subtitle1" fontWeight={700}>
          Assistente Pessoal
        </Typography>
        <IconButton aria-label="Fechar chat" onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      <Box
        ref={scrollRef}
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
          bgcolor: "background.default",
        }}
      >
        {messages.map((m) => (
          <Box
            key={m.id}
            sx={{
              mb: 1.5,
              display: "flex",
              justifyContent: m.role === "user" ? "flex-end" : "flex-start",
            }}
          >
            <Box
              sx={{
                maxWidth: "80%",
                px: 1.5,
                py: 1,
                borderRadius: 2,
                bgcolor:
                  m.role === "user" ? "primary.main" : "grey.200",
                color:
                  m.role === "user" ? "primary.contrastText" : "text.primary",
              }}
            >
              <Typography variant="body2">{m.text}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Divider />

      <Box sx={{ p: 1 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Enviar mensagem"
                  color="primary"
                  onClick={sendMessage}
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Paper>
  );
};