import { useState } from "react";
import styles from "../../styles/layout/ControlBar.module.scss";
import { figtree, soehne, geograph } from "../../styles/fonts";

import Socials from "./Socials";
import Form from "../form/Form";
import NavMenu from "./NavMenu";

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
  }

  function formToggle(e) {
    const formSlider = document.getElementById("form-slider");
    const formTrigger = document.getElementById("form-button");
    var body = document.querySelector("body");
    // Toggle the "is-active" class on both the button and the drawer
    formTrigger.classList.toggle(`${styles["button-is-active"]}`);
    formSlider.classList.toggle(`${styles["is-active"]}`);
    body.classList.toggle("is-clipped-overflow");
  }

  function navToggle(e) {
    const navSlider = document.getElementById("nav-slider");
    const navTrigger = document.getElementById("nav-button");
    var body = document.querySelector("body");
    // Toggle the "is-active" class on both the button and the drawer
    navTrigger.classList.toggle(`${styles["button-is-active"]}`);
    navSlider.classList.toggle(`${styles["is-active"]}`);
    body.classList.toggle("is-clipped-overflow");
  }

  function formClose(e) {
    const formSliderGlobal = document.getElementById("form-slider");
    var bodyGlobal = document.querySelector("body");
    const formCloseButton = document.getElementById("form-close-button");
    if (formSliderGlobal.classList.contains(`${styles["is-active"]}`)) {
      formSliderGlobal.classList.remove(`${styles["is-active"]}`);
    }
    if (bodyGlobal.classList.contains("is-clipped-overflow")) {
      bodyGlobal.classList.remove("is-clipped-overflow");
    }
    if (formCloseButton.style.transform === "") {
      formCloseButton.style.transform = "rotate(360deg)";
    } else {
      formCloseButton.style.transform = "";
    }
  }

  return (
    <div>
      <div className={styles["mobile-control-bar"]} id="mobile-control-bar">
        <div className={styles["mobile-logo-container"]}>
          {/* <Link></Link>  */}
          Logo Goes Here
        </div>
        <div className={styles["control-bar"]}>
          <div className={styles["nav-button-wrapper"]}>
            <button
              role="button"
              className={styles["navbar-btn"]}
              aria-label="menu"
              aria-expanded="false"
              data-target="site-navigation"
              id="nav-button"
              onClick={navToggle}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>

          <div
            className={styles["contact-button"]}
            id="form-button"
            onClick={formToggle}
          >
            <span style={soehne.style}>Contact Us</span>
          </div>
          <Socials directory={"control-bar"} />
        </div>
      </div>

      <div className={styles["form-slider"]} id="form-slider">
        <button
          className={styles["form-close-button"]}
          id="form-close-button"
          onClick={formClose}
        >
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
