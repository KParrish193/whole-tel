import styles from "../../styles/layout/Navbar.module.scss";

import Link from 'next/link'
import { oreloLight, oreloMedium, oreloRegular } from "../../styles/fonts";

// TODO: GROQ TO GET PAGES?
const navlinks = [
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/locations",
    text: "Locations",
  },
  {
    href: "/availability",
    text: "Availability",
  },
  // {
  //   href: "/events/upcoming-events",
  //   text: "Upcoming Events",
  // },
  // {
  //   href: "/events/past-events",
  //   text: "Past Events",
  // },
  {
    href: "/faq",
    text: "FAQ",
  },
  {
    href: "/reviews",
    text: "Reviews",
  },
];

const Navbar = () => {

  if (typeof window !== "undefined") {

    // JS for Navbar hide/show on scroll
    var prevScrollPos = window.scrollY;
    window.onscroll = function () {
      var currentScrollPos = Math.max(window.scrollY, 0);
      if (currentScrollPos - prevScrollPos <= 0) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-67px";
      }
      prevScrollPos = currentScrollPos;
    };
  }

  return (
    <div className={styles["navbar"]} id="navbar">
      <nav className={styles["navigation-desktop"]}>
        <div>{/* TODO: Add logo */}</div>
        <ul className={styles["nav-list-wrapper"]}>
          {navlinks.map((link, index) => {
            return (
              <li key={index} className={styles["nav-link-wrapper"]}>
                <Link
                  href={link.href}
                  style={oreloMedium.style}
                  className={styles["nav-link"]}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles['right-placeholder']}> </div>
      </nav>

      <div className={styles["navigation-mobile"]}>
        <nav>
          <div>{/* TODO: Add logo */}</div>
          <ul className={styles["nav-list-wrapper"]}>
            {navlinks.map((link, index) => {
              return (
                <li key={index} className={styles["nav-link-wrapper"]}>
                  <Link
                    href={link.href}
                    style={oreloMedium.style}
                    className={styles["nav-link"]}
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          className={`${styles["mobile"]} ${styles["navbar-right-wrapper"]}`}
        >
          <button
            role="button"
            className={styles["navbar-btn"]}
            aria-label="menu"
            aria-expanded="false"
            data-target="site-navigation"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;