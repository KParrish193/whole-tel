// TODO: add nodemailer
import { useState } from 'react';
import styles from "../../styles/form/Form.module.scss";
import { figtree, metal2 } from "../../styles/fonts";
import Datepicker from "./datepicker/Datepicker"

const Form = () => {
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)
    const [isSending, setIsSending] = useState()

    if (typeof window !== "undefined") {
      const contactForm = document.getElementById("contact-form");
      const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_URL;

      contactForm.addEventListener("submit", (e) => {
          setIsSending(true);  
          e.preventDefault();
          fetch(scriptURL, { method: "POST", body: new FormData(contactForm) })
          .then((response) => {
            console.log("Success!", response);
            setIsSending(false);
            setSubmitted(true);
          })
          .catch((error) => {
            console.error("Error!", error.message)
          });
      });
    }

    return (
      <div className={styles["form-drawer-container"]}>
        <h3 className={styles["contact-header"]} style={metal2.style}>
          Contact Us
        </h3>
        <form id="contact-form" className={styles}>
          <div className={styles["form-left"]}>
            {/* include to report the date of submission <input type="hidden" /> */}
            <p className={styles["contact-paragraph"]} style={figtree.style}>
              If you have any questions or would like to inquire about booking
              our properties, we're here to assist you. Simply fill out the
              form, and our team will get back to you promptly. We strive to
              make your booking experience seamless and look forward to helping
              you find the perfect location for your event. Get in touch with us
              today!
            </p>
            <div className={styles["location-wrapper"]}>
              <label style={metal2.style}>Location</label>
              <select name="Location" required>
                {/* TODO: dynamically render this from GROQ hook */}
                {/* <option value="0">Select Property:</option> */}
                <option value="" disabled hidden selected>
                  Select a Property
                </option>
                <option value="Cabo">Cabo San Lucas</option>
                {/* <option value="2"></option> */}
              </select>
            </div>
            {/* <div className={styles["date-wrapper"]}>
              <label style={figtree.style}>Dates</label>
              <Datepicker />
            </div> */}
            <div className={styles["contact-info"]}>
              <label style={metal2.style}>Contact Info</label>
              <div className={styles["name-inputs"]}>
                <input
                  type="text"
                  placeholder="First Name"
                  style={figtree.style}
                  name="First_Name"
                  aria-label="first name"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  style={figtree.style}
                  name="Last_Name"
                  aria-label="last name"
                />
              </div>
              <input
                type="email"
                placeholder="E-mail"
                style={figtree.style}
                name="E_mail"
                aria-label="e-mail"
              />
              <input
                type="tel"
                placeholder="Phone"
                style={figtree.style}
                aria-label="phone number"
                name="Phone"
              />
            </div>
          </div>
          <div className={styles["form-right"]}>
            <div className={styles["event-info"]}>
              <label style={metal2.style}>Event Info</label>
              <input
                placeholder="Event Date(s)"
                name="Event_Date"
                aria-label="event date"
              ></input>
              <select name="Guests" aria-label="guests">
                <option value="" disabled hidden selected>
                  Number of Guests
                </option>
                <option value="1-10">1-10</option>
                <option value="11-25">11-25</option>
                <option value="26-50">26-50</option>
                <option value="50+">50+</option>
                <option value="Unsure">Not Sure</option>
              </select>
              <textarea
                placeholder="Tell us about your event"
                style={figtree.style}
                name="Message"
                aria-label="event details"
              />
            </div>
            <div className={styles["submit-wrapper"]}>
              <button
                type="submit"
                disabled={isSending}
                style={metal2.style}
              >
                Send it
              </button>
            </div>
          </div>
        </form>
      </div>
    );
};

export default Form;