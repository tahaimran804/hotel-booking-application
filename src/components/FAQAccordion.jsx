import { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage() {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const AccordionData = [
        {
            id: 1,
            Question: "What’s the difference between a resort vs hotel?",
            Answer: "Hotels offer limited amenities while resorts provide a full vacation experience with facilities like spas, sports, and dining."
        },
        {
            id: 2,
            Question: "Do resorts offer all-inclusive packages?",
            Answer: "Yes, many resorts offer all-inclusive pricing including meals and activities."
        },
        {
            id: 3,
            Question: "Which is better for business travel?",
            Answer: "Hotels are usually better suited for business travelers."
        },
    ];

    return (
        <div>
            {AccordionData.map((item) => (
                <Accordion
                    key={item.id}
                    expanded={expanded === item.id}
                    onChange={handleChange(item.id)}
                    sx={{
                        boxShadow: "none",
                        px: '0',
                        py: '0',
                        borderBottom: "1px solid #f5f5f5",
                        "&:before": {
                            display: "none",
                        }
                    }}
                >

                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography sx={{ fontSize: "14px", padding: '0px', fontWeight: 600 }}>{item.Question}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography sx={{ fontSize: "14px", padding: '0px', fontWeight: 400 }}>{item.Answer}</Typography>
                    </AccordionDetails>

                </Accordion>
            ))}
        </div>
    );
}
