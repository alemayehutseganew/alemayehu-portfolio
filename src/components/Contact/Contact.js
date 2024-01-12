import React from "react";
import { useFormik } from "formik";
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.value;
    const data = {};
  };
  return (
    <div id="contact" className="contact">
      <Section>
        <SectionText>
          <form onSubmit={formik.handleSubmit} className="portfolio__contact">
            <div>
              <label htmlFor="fname">First Name:</label>
              <br />
              <input
                type="fname"
                name="fname"
                id="fname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fname}
                placeholder="first name"
              />
              <br />
              <label htmlFor="lname">Last Name:</label>
              <br />
              <input
                type="lname"
                name="lname"
                id="lname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lname}
                placeholder="last name"
              />
            </div>
            <br />
            <div>
              <label htmlFor="email">Your Email : </label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="your email"
              />
              <br />
              <label htmlFor="message">Message :</label>
              <br />
              <textarea
                type="message"
                name="message"
                id="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                placeholder="Write message here"
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <span>{formik.errors.email}</span>
            ) : null}
            <button type="submit">Submit</button>
          </form>
        </SectionText>
      </Section>
    </div>
  );
}
// or any of your form created previously
