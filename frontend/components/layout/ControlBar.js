import Form from '../form/Form'
import NavMenu from './NavMenu'
import styles from "../../styles/layout/ControlBar.module.scss";
import { figtree, metal2 } from "../../styles/fonts";

import Instagram from '../../svgs/instagram.svg';
import Facebook from "../../svgs/facebook.svg";

// Contains JS for Control Bar, Form Drawer and Menu Drawer
const ControlBar = () => {

  // load DOM elements first, then do stuff
  if (typeof window !== "undefined") {
    // JS for mobile control bar hide/show on scroll
    var prevScrollPos = window.scrollY;
    window.onscroll = function () {
      var currentScrollPos = Math.max(window.scrollY, 0);
      if (currentScrollPos - prevScrollPos <= 0) {
        document.getElementById("mobile-control-bar").style.top = "0";
      } else {
        document.getElementById("mobile-control-bar").style.top = "-90px";
      }
      prevScrollPos = currentScrollPos;
    };

    // query selectors for nav and form drawers
    const formTrigger = document.getElementById("form-button");
    const navTrigger = document.getElementById("nav-button");

    // query selector to freeze content under drawers
    var body = document.querySelector("body");

    formTrigger.addEventListener("click", () => {
      const formSlider = document.getElementById("form-slider");
      // Toggle the "is-active" class on both the button and the drawer
      formTrigger.classList.toggle(`${styles["button-is-active"]}`);
      formSlider.classList.toggle(`${styles["is-active"]}`);
      body.classList.toggle("is-clipped-overflow");
    });

    navTrigger.addEventListener("click", () => {
      const navSlider = document.getElementById("nav-slider");
      // Toggle the "is-active" class on both the button and the drawer
      navTrigger.classList.toggle(`${styles["button-is-active"]}`);
      navSlider.classList.toggle(`${styles['is-active']}`);
      body.classList.toggle("is-clipped-overflow");
    });
  }

  return (
    <div>
      <div className={styles["control-bar"]}>
        <div className={styles["nav-button-wrapper"]}>
          <button
            role="button"
            className={styles["navbar-btn"]}
            aria-label="menu"
            aria-expanded="false"
            data-target="site-navigation"
            id="nav-button"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div className={styles["contact-button"]} id="form-button">
          <span style={metal2.style}>Contact Us</span>
        </div>

        <div className={styles["socials"]}>
          <a><Instagram /></a>
          <a><Facebook /></a>
        </div>
      </div>
      
      {/* Start Mobile Control Bar */}
      <div className={styles["mobile-control-bar"]} id="mobile-control-bar">
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
          <span style={metal2.style}>Contact Us</span>
        </div>
      </div>

      <div className={styles["form-slider"]} id="form-slider">
        <Form />
      </div>

      <div className={styles["nav-slider"]} id="nav-slider">
        <NavMenu />
      </div>
    </div>
  );
};

export default ControlBar;
