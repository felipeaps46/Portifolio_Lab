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
  CircularProgress,
  Avatar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { ask } from "./../api/chatApi";
import assistantAvatar from "../assets/profile.jpeg"; // <-- importe a imagem
import { useTranslation } from "react-i18next";

type Message = {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: number;
  pending?: boolean;
};

type ChatWindowProps = {
  open: boolean;
  onClose: () => void;
};

export const ChatWindow: React.FC<ChatWindowProps> = ({ open, onClose }) => {

  const prompt = `You are an AI assistant designed to answer questions about Guilherme based on the provided context. Never mention anything negative about Guilherme, and maintain a professional tone. If the answer is not in the context, say you do not know. Keep your answer concise (maximum three sentences) and only use information relevant to Guilherme.

  Question: {question}
  Context: {context}
  Answer:`

  const { t } = useTranslation()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      text: t("chat.mensagemInicial"),
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isPending, setIsPending] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [open, messages.length, isPending]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isPending) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      text,
      timestamp: Date.now(),
    };

    const botPlaceholderId = crypto.randomUUID();
    const botPlaceholder: Message = {
      id: botPlaceholderId,
      role: "assistant",
      text: "Digitando...",
      timestamp: Date.now(),
      pending: true,
    };

    setMessages((prev) => [...prev, userMsg, botPlaceholder]);
    setInput("");
    setIsPending(true);

    try {
      const answer = await ask(text, prompt);
      setMessages((prev) =>
        prev.map((m) =>
          m.id === botPlaceholderId
            ? {
              ...m,
              text: answer || "Sem conteúdo na resposta.",
              pending: false,
              timestamp: Date.now(),
            }
            : m
        )
      );
    } catch (err: any) {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === botPlaceholderId
            ? {
              ...m,
              text:
                "Desculpe, ocorreu um erro ao buscar a resposta. Tente novamente.",
              pending: false,
              timestamp: Date.now(),
            }
            : m
        )
      );
    } finally {
      setIsPending(false);
    }
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
          {t("chat.titulo")}
        </Typography>
        <IconButton
          aria-label="Fechar chat"
          onClick={onClose}
          size="small"
          disabled={isPending}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      {/* Lista de mensagens com avatar apenas nas bolhas */}
      <Box
        ref={scrollRef}
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
          bgcolor: "background.default",
        }}
      >
        {messages.map((m) => {
          const isUser = m.role === "user";

          return (
            <Box
              key={m.id}
              sx={{
                mb: 1.5,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: isUser ? "flex-end" : "flex-start",
                gap: 1,
              }}
            >
              {/* Avatar do assistente na esquerda */}
              {!isUser && (
                <Avatar
                  src={assistantAvatar} // <-- usar o import
                  alt="Avatar do assistente"
                  sx={{ width: 28, height: 28, bgcolor: "primary.main" }}
                />
              )}

              {/* Bolha */}
              <Box
                sx={{
                  maxWidth: "80%",
                  px: 1.5,
                  py: 1,
                  borderRadius: 2,
                  bgcolor: isUser ? "primary.main" : "grey.200",
                  color: isUser ? "primary.contrastText" : "text.primary",
                }}
              >
                <Typography variant="body2">
                  {m.text}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      <Divider />

      {/* Entrada de texto */}
      <Box sx={{ p: 1 }}>
        <TextField
          fullWidth
          size="small"
          placeholder={t("chat.placeholder")}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isPending}
          onKeyDown={(e) => {
            if (isPending) {
              e.preventDefault();
              return;
            }
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              void sendMessage();
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {isPending ? (
                  <CircularProgress size={18} />
                ) : (
                  <IconButton
                    aria-label="Enviar mensagem"
                    color="primary"
                    onClick={() => void sendMessage()}
                    disabled={isPending || !input.trim()}
                  >
                    <SendIcon />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Paper>
  );
};