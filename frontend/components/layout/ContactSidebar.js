import Form from '../form/Form'
import styles from "../../styles/layout/Sidebar.module.scss";
import { figtree } from "../../styles/fonts";

const ContactSidebar = () => {

  if (typeof window !== "undefined") {
      const slider = document.getElementById("form-slider");
      console.log("slider", slider);
  }

  return (
    <>
      <div className={styles["sidebar-button"]}>
        <span style={figtree.style}>• Contact Us •</span>
      </div>
      <div className={styles["form-slider"]} id="form-slider">
        <Form />
      </div>
    </>
  );
};

export default ContactSidebar;
