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
                pr: 12,
                borderRadius: 3,
                boxShadow: 2,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                willChange: "transform",
                mb: 2,
                cursor: "pointer",
                "&:hover": {
                    transform: "translateY(-2px) scale(1.05)",
                    boxShadow: 4,
                },
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
                    sx={{ fontWeight: "bold", color: "#1E1E1E" }}
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
                        color: "#666666", bgcolor: 'none', "&:hover": {
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