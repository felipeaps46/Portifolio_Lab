import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import Avatar from "@mui/material/Avatar";
import Badge from '@mui/material/Badge';
import { ChatWindow } from "./Chat";

type PersonalChatProps = {
  avatarUrl?: string;   
  avatarAlt?: string;   
  initials?: string;    
  bottom?: number;    
  right?: number;     
};

export const PersonalChat: React.FC<PersonalChatProps> = ({
  avatarUrl = "./../assets/profile.jpeg",
  avatarAlt = "Foto de Perfil",
  initials = "GV",
  bottom = 16,
  right = 16,
}) => {
  const [openChat, setOpenChat] = React.useState(false);
  let badgeValue = 1

  const handleToggleChat = () => {
    badgeValue = 0
    setOpenChat((prev) => !prev);
  };

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
          open={false}
          FabProps={{
            onClick: handleToggleChat,
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
            <Badge badgeContent={badgeValue} color="secondary">
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
            </Badge>
          }
          onOpen={undefined}
          onClose={undefined}
        />
      </Box>

      <ChatWindow open={openChat} onClose={() => setOpenChat(false)} />
    </>
  );
};