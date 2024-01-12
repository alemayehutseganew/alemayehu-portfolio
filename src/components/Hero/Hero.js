import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { heroProfile } from "../../constants/constants";

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <div>
          <SectionTitle main center>
            Welcome To <br />
            My Personal Portfolio
          </SectionTitle>
          <SectionText>
            As a frontend and backend developer with a strong academic
            background, Alemayehu brings a unique set of skills and expertise to
            any project. With a degree in computer science Engineering and 2+
            years of experience in the industry,
          </SectionText>
        </div>

        <div></div>
        <Button onClick={props.handleClick}>
          <a href="#about">Learn More</a>{" "}
        </Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;
