import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Iam Alemayehu Tseganew. I have a strong passion for technology and
        innovation. I believe that the theoretical knowledge should be tested
        and implemented on the real environment, and experimental research ,
        technology transfer programs and practical work
        experience(Nokia-safaricom and{" "}
        <a href="https://www.insa.gov.et/">
          Information metwork security administration(INSA)
        </a>
        -The leading Ethiopian Government Technology and security Institution )
        are the key elements for that. While I was in{" "}
        <a href="https://kiit.ac.in/"> KIIT university</a>, I participated in
        KIIT’s tech grand fest as an organizing committee (Event manager), and I
        also participated in an innovation competition as a team
        representative.Currently I am working for The leading bank of Ethiopia
        <a href="https://combanketh.et/">
          {" "}
          Commercial Bank of Ethiopia
        </a> as <strong>IS operation officer</strong> .I think respect,
        integrity, and trust are the key values to succeed in any profession, so
        I give priority to those values in my study and future career. Studying
        in a Competitive and challenging environment I have contributed to the
        best of my ability for the advancement of B.Sc. Degree In Electronics
        and Computer Science Engineering (Electronics, software Engineering,
        Computer Science,Hardware) and other related activities with CGPA of
        8.82 out 10.I develop both back-end and front-end with adapting various
        technologies. I believe this will give you my area of interest . As a
        frontend developer, Alemayehu has a keen eye for design and user
        experience, ensuring that every website they create is both visually
        appealing and easy to use. They are proficient in HTML, CSS, JavaScript,
        React,and other front-end technologies, and have a deep understanding of
        responsive design principles and UI/UX design like Figma. In addition to
        their frontend skills, Alemayehu is also a talented backend developer.
        They are experienced in building scalable web applications using
        languages such as Python, and Django Rest framework API . I have a
        strong understanding of database design and management, as well as
        experience with server administration and deployment.Alemayehu has
        developed a strong understanding of both the technical and creative
        aspects of web development.
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {`${item.year}`}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button"
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
