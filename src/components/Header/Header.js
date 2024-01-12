import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillSkype,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#resume">
          <NavLink>Resume</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.facebook.com/alemayehu.tseganew.03?mibextid=zLoPMf">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/alemayehutseganew/Django_Portfolio_Alex">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/alemayehu-tseganew-953a131b3">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/alexo.bro?igsh=NGVhN2U2NjQ0Yg==">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://t.me/Begoodtoeverthing">
        <AiFillSkype size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
