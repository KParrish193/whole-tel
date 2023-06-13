// TODO: add nodemailer
import styles from "../../styles/form/Form.module.scss";
import { figtree } from "../../styles/fonts";

const Form = () => {
    return (
      <div className={styles["form-drawer-container"]}>
        <h3 className={styles["contact-header"]} style={figtree.style}>
          Contact Us
        </h3>
        <form>
          <div className={styles["form-left"]}>
            {/* include to report the date of submission <input type="hidden" /> */}
            <div>
              <p className={styles["contact-paragraph"]} style={figtree.style}>
                If you have any questions or would like to inquire about booking
                our properties, we're here to assist you. Simply fill out the
                form, and our team will get back to you promptly. We strive to
                make your booking experience seamless and look forward to
                helping you find the perfect property for your needs. Get in
                touch with us today!
              </p>
            </div>
            <div className={styles["location-date-wrapper"]}>
              <div className={styles["custom-select"]}>
                <label style={figtree.style}>Location</label>
                <select>
                  {/* TODO: dynamically render this from GROQ hook */}
                  {/* <option value="0">Select Property:</option> */}
                  <option value="1">Cabo San Lucas</option>
                  {/* <option value="2"></option> */}
                </select>
              </div>
              <div className={styles["dates"]}>
                <div>
                  <label style={figtree.style}>From</label>
                  <input type="date" name="from" />
                </div>
                <div>
                  <label style={figtree.style}>To</label>
                  <input type="date" name="to" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles["form-right"]}>
            <input type="text" placeholder="First Name" style={figtree.style} />
            <input type="text" placeholder="Last Name" style={figtree.style} />
            <input type="email" placeholder="E-mail" style={figtree.style} />
            <input type="tel" placeholder="Phone" style={figtree.style} />
            {/* <select placeholder="Number of Guests"/> */}
            <textarea
              placeholder="Tell us about your event"
              style={figtree.style}
            />
            <input type="submit" value="Send it" style={figtree.style} />
          </div>
        </form>
      </div>
    );
};

export default Form;