import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { resumeCon } from "../../constants/constants";
import { Section } from "../../styles/GlobalComponents";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs/cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Resume = () => {
  return (
    <div id="resume" className="resume">
      <Section>
        <a
          href="https://drive.google.com/file/d/1yDSSdoq-isIniSO3RRCp5t6QMSAsF2nW/view?usp=sharing"
          target="_blank"
        >
          <h1>Download Resume Here</h1>
        </a>
      </Section>
    </div>
  );
};

export default Resume;
