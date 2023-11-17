"use client";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { dictionary } from "@/content";
import { useAppContext } from "@/context/AppContext";

export default function AccordionForHomes() {
  const { state } = useAppContext();

  const accordionDetails = [
    {
      title: dictionary[state]?.reducedEnergyTitle,
      desc: dictionary[state]?.reducedEnergyDesc,
    },
    {
      title: dictionary[state]?.longTermInvestmentTitle,
      desc: dictionary[state]?.longTermInvestmentDesc,
    },
    {
      title: dictionary[state]?.increasedPropertyValueTitle,
      desc: dictionary[state]?.increasedPropertyValueDesc,
    },
    {
      title: dictionary[state]?.energyIndependenceTitle,
      desc: dictionary[state]?.energyIndependenceDesc,
    },
    {
      title: dictionary[state]?.lowMaintenanceCostsTitle,
      desc: dictionary[state]?.lowMaintenanceCostsDesc,
    },
  ];
  return (
    <div>
      {accordionDetails.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#5783C3" }}
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.desc}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
