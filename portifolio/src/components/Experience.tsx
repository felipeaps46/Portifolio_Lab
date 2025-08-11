import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import { experienceData } from '../data/experienceData.ts';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { type ExperienceType } from "../Types/ExperienceType.js";
import HandshakeIcon from '@mui/icons-material/Handshake';

export const ExperienceTimeline = () => {

    function parseMonthYearString(str: string) {
        if (!str) return null;
        const [month, year] = str.split('/');
        return new Date(parseInt(year), parseInt(month) - 1);
    }

    function formatDate(date: string) {
        if (!date) return '';

        const parsedDate = parseMonthYearString(date);
        if (!parsedDate) return '';

        const formatted = parsedDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
        return formatted.charAt(0).toUpperCase() + formatted.slice(1);
    }

    let dados: ExperienceType[] = experienceData
    console.log(dados)

    return (
        <Timeline position="alternate">
            {dados.map((item, idx) => (
                <TimelineItem key={idx}>
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant={idx === 0 ? "filled" : "outlined"}>
                            {item.type === "Trabalho" && <BusinessCenterIcon />}
                            {item.type === "Estudo" && <SchoolIcon />}
                            {item.type === "Voluntariado" && <HandshakeIcon />}
                        </TimelineDot>
                        {idx !== experienceData.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent
                        sx={{
                            py: 2, px: 3,
                            background: "linear-gradient(135deg, #1976d2 60%, #42a5f5 100%)",
                            borderRadius: 2,
                            boxShadow: "0 2px 8px #0003",
                            minWidth: "280px",
                            color: "#fff"
                        }}
                    >
                        <Typography variant="h6" component="span" fontWeight={700} sx={{ color: "#fff" }}>
                            {item.role}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: "#e3f2fd" }}>{item.company}</Typography>
                        <Typography variant="body2" color="#bbdefb" fontStyle="italic">
                            {formatDate(item.startDate)} - {item.finalDate ? formatDate(item.finalDate) : "Atual"}
                        </Typography>
                        <Typography variant="body2" marginTop={1}>
                            {item.description}
                        </Typography>
                        <Typography variant="body2" marginTop={1} fontSize={12} color="#bbdefb">
                            {item.type}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
};