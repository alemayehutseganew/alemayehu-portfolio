import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 7, text: "Open Source Projects" },
  { number: 21, text: "Client Customers" },
  {
    number: "Skilled Technologies",
    text: "Advanced and skilled several front-end and Back-end Technologies",
  },
  {
    number: " work-experience",
    text: "Skilled and experienced in Networking and IS Operations",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
