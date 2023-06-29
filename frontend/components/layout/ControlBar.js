import Form from '../form/Form'
import styles from "../../styles/layout/ControlBar.module.scss";
import { figtree, metal2 } from "../../styles/fonts";

const ControlBar = () => {

  if (typeof window !== "undefined") {
      const slider = document.getElementById("form-slider");
      console.log("slider", slider);
  }

  return (
    <div>
      <div className={styles["nav-button-wrapper"]}>
        <button
          role="button"
          className={styles["navbar-btn"]}
          aria-label="menu"
          aria-expanded="false"
          data-target="site-navigation"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div className={styles["contact-button"]}>
        <span style={metal2.style}>Contact</span>
      </div>

      <div className={styles["socials"]}>

      </div>

      <div className={styles["form-slider"]} id="form-slider">
        <Form />
      </div>
    </div>
  );
};

export default ControlBar;
