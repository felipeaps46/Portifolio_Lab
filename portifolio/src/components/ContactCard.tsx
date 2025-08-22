import React from "react";
import { Box, Typography } from "@mui/material";

type ContactCardProps = {
    icon: React.ReactNode;
    title: string;
    text: string;
    link?: string;
};

export const ContactCard: React.FC<ContactCardProps> = (props) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                p: 2,
                pr: { xs: 2, md: 12 },
                borderRadius: 3,
                boxShadow: 2,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                willChange: "transform",
                mb: { xs: 2, sm: 0, md: 2 },
                cursor: "pointer",
                "&:hover": {
                    transform: "translateY(-2px) scale(1.05)",
                    boxShadow: 4,
                },
            }}
            onClick={() => {
                if (props.link) {
                    window.open(props.link, "_blank");
                }
            }}
        >
            <Box
                sx={{
                    backgroundColor: "#1E1E1E",
                    borderRadius: 2,
                    p: 1,
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    mr: 2,
                }}
            >
                {props.icon}
            </Box>

            <Box>
                <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", fontSize: { xs: "15px", sm: "16px" }, color: "#1E1E1E" }}
                >
                    {props.title}
                </Typography>

                {props.link ? (
                    <Typography
                        component="a"
                        href={props.link}
                        sx={{
                            color: "#666666",
                            textDecoration: "none",
                            fontSize: { xs: "14px", sm: "16px" },
                            "&:hover": {
                                textDecoration: "underline",
                                color: "#666666",
                            },
                        }}
                    >
                        {props.text}
                    </Typography>
                ) : (
                    <Typography variant="body2" sx={{
                        color: "#666666", bgcolor: 'none', fontSize: { xs: "14px", sm: "16px" }, "&:hover": {
                            bgcolor: 'none',
                        },
                    }}>
                        {props.text}
                    </Typography>
                )}
            </Box>
        </Box>
    );
}