import Form from '../form/Form'
import NavMenu from './NavMenu'
import styles from "../../styles/layout/ControlBar.module.scss";
import { figtree, metal2 } from "../../styles/fonts";

import Socials from './Socials';

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

    // query selectors for nav and form drawers - Desktop
    const formTrigger = document.getElementById("form-button");
    const navTrigger = document.getElementById("nav-button");
    const formCloseButton = document.getElementById("form-close-button");

    formTrigger.addEventListener("click", () => {
      const formSlider = document.getElementById("form-slider");
      var body = document.querySelector("body");
      // Toggle the "is-active" class on both the button and the drawer
      formTrigger.classList.toggle(`${styles["button-is-active"]}`);
      formSlider.classList.toggle(`${styles["is-active"]}`);
      body.classList.toggle("is-clipped-overflow");
    });

    navTrigger.addEventListener("click", () => {
      const navSlider = document.getElementById("nav-slider");
      var body = document.querySelector("body");
      // Toggle the "is-active" class on both the button and the drawer
      navTrigger.classList.toggle(`${styles["button-is-active"]}`);
      navSlider.classList.toggle(`${styles["is-active"]}`);
      body.classList.toggle("is-clipped-overflow");
    });

    formCloseButton.addEventListener("click", () => {
      const formSlider = document.getElementById("form-slider");
      var body = document.querySelector("body");

      if(formSlider.classList.contains(`${styles['is-active']}`)){
        formSlider.classList.remove(`${styles['is-active']}`)
      }
      if(body.classList.contains("is-clipped-overflow")){
        body.classList.remove("is-clipped-overflow")
      };
    })
  }

  return (
    <div>
      <div className={styles["mobile-control-bar"]} id="mobile-control-bar">
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

          <Socials directory={"control-bar"} />
        </div>
      </div>

      <div className={styles["form-slider"]} id="form-slider">
        <button className={styles["form-close-button"]} id="form-close-button">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
        <Form />
      </div>

      <div className={styles["nav-slider"]} id="nav-slider">
        <NavMenu />
      </div>
    </div>
  );
};

export default ControlBar;
