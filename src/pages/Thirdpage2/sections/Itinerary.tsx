import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

// Styled Components
const Container = styled.div``;

// Props Interface
interface ItineraryProps {
  itinerary: { [day: string]: string[] }[];
}

// Itinerary Component
const Itinerary: React.FC<ItineraryProps> = ({ itinerary }) => {
  return (
    <Container>
      {itinerary.map((dayData, index) => {
        const dayKey = Object.keys(dayData)[0]; // Extract Day number
        const activities = dayData[dayKey]; // Extract activities

        return (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Day {dayKey}</Typography> {/* ✅ FIXED HERE */}
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {activities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Container>
  );
};

export default Itinerary;
