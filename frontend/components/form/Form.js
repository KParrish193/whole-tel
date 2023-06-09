// TODO: add nodemailer to send email and text notifications

import styles from "../../styles/form/Form.module.scss";
import { figtree, metal2 } from "../../styles/fonts";
import Datepicker from "./datepicker/Datepicker";

const Form = () => {
  return (
    <div className={styles["form-drawer-container"]}>
      <h3 className={styles["contact-header"]} style={metal2.style}>
        Contact Us
      </h3>
        <p className={styles["contact-paragraph"]} style={figtree.style}>
          {
            "If you have any questions or would like to inquire about booking our properties, we're here to assist you. Simply fill out the form, and our team will get back to you promptly. We strive to make your booking experience seamless and look forward to helping you find the perfect location for your event. Get in touch with us today!"
          }
        </p>
      <form>
        <div className={styles["form-left"]}>
          {/* include to report the date of submission <input type="hidden" /> */}
          <div className={styles["location-wrapper"]}>
            <label style={metal2.style}>Location</label>
            <select>
              {/* TODO: dynamically render this from GROQ hook */}
              {/* <option value="0">Select Property:</option> */}
              <option value="1">Cabo San Lucas</option>
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
              />
              <input
                type="text"
                placeholder="Last Name"
                style={figtree.style}
              />
            </div>
            <input type="email" placeholder="E-mail" style={figtree.style} />
            <input type="tel" placeholder="Phone" style={figtree.style} />
            <select>
              <option>Best time to be contacted</option>
            </select>
          </div>
        </div>
        <div className={styles["form-right"]}>
          <div className={styles["event-info"]}>
            <label style={metal2.style}>Event Info</label>
            <input placeholder="Event Date(s)"></input>
            <select>
              <option>Number of Guests</option>
            </select>
            <textarea
              placeholder="Tell us about your event"
              style={figtree.style}
            />
          </div>

          <div className={styles["submit-wrapper"]}>
            <input type="submit" value="Send it" style={metal2.style} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
