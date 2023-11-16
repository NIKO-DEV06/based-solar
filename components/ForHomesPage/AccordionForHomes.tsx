import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionForHomes() {
  const accordionDetails = [
    {
      title: "Reduced Energy Bills",
      desc: "A residential solar power plant allows homeowners to generate their electricity, leading to a significant reduction in monthly energy bills. By harnessing the power of the sun, households can offset or even eliminate their dependence on traditional utility providers.",
    },
    {
      title: "Long-Term Investment",
      desc: "While the initial investment in a solar power system might seem significant, it's essential to view it as a long-term investment. Over time, the financial savings accrued from lower energy bills can surpass the initial setup costs, potentially resulting in a profitable venture.",
    },
    {
      title: "Increased Property Value",
      desc: "Homes equipped with solar power systems tend to have higher property values. The presence of a sustainable and energy-efficient feature is attractive to potential buyers and reflects positively on the overall value of the property. This can be a key selling point in the real estate market.",
    },
    {
      title: "Energy Independence",
      desc: "Households with solar power systems gain a degree of energy independence. This is especially valuable during power outages or disruptions to the traditional grid. With a reliable solar energy source, homeowners can ensure a continuous power supply for essential appliances.",
    },
    {
      title: "Low Maintenance Costs",
      desc: "Solar power systems generally have low maintenance costs. Regular cleaning and occasional checks are usually sufficient to keep the system running efficiently. This contributes to the overall cost-effectiveness of residential solar power installations.",
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
