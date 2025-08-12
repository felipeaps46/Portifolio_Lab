// src/components/PersonalChat.tsx
import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Avatar from "@mui/material/Avatar";
import ChatIcon from "@mui/icons-material/Chat";
// Ajuste o import abaixo para o caminho real do seu componente de chat
import { ChatWindow } from "./Chat";

type PersonalChatProps = {
  avatarUrl?: string;   // URL da sua foto de perfil
  avatarAlt?: string;   // Texto alternativo (acessibilidade)
  initials?: string;    // Iniciais de fallback (ex.: "SN")
  bottom?: number;      // Offset opcional do bottom
  right?: number;       // Offset opcional do right
};

export const PersonalChat: React.FC<PersonalChatProps> = ({
  avatarUrl = "./../assets/profile.jpeg",
  avatarAlt = "Foto de Perfil",
  initials = "GV",
  bottom = 16,
  right = 16,
}) => {
  const [openDial, setOpenDial] = React.useState(false);
  const [openChat, setOpenChat] = React.useState(false);

  const handleOpenDial = () => setOpenDial(true);
  const handleCloseDial = () => setOpenDial(false);

  const actions = [
    {
      icon: <ChatIcon />,
      name: "Chat",
      onClick: () => {
        setOpenChat(true);
        handleCloseDial();
      },
    },
  ];

  return (
    <>
      <Box sx={{ height: 0 }}>
        <SpeedDial
          ariaLabel="Abrir chat pessoal"
          sx={{
            position: "fixed",
            bottom,
            right,
            zIndex: (t) => t.zIndex.tooltip + 1,
          }}
          FabProps={{
            sx: {
              width: 56,
              height: 56,
              p: 0,
              bgcolor: "transparent",
              boxShadow: 3,
              "&:hover": { boxShadow: 6, bgcolor: "transparent" },
            },
          }}
          icon={
            <Avatar
              src={avatarUrl}
              alt={avatarAlt}
              sx={{
                width: 56,
                height: 56,
                border: "2px solid",
                borderColor: "background.paper",
              }}
            >
              {initials}
            </Avatar>
          }
          onClose={handleCloseDial}
          onOpen={handleOpenDial}
          open={openDial}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.onClick}
            />
          ))}
        </SpeedDial>
      </Box>

      <ChatWindow open={openChat} onClose={() => setOpenChat(false)} />
    </>
  );
};