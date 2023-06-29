import styles from "../../styles/layout/Navbar.module.scss";

import Link from "next/link";
import { metal2, figtree } from "../../styles/fonts";

// TODO: GROQ TO GET PAGES?
const navlinks = [
  {
    href: "/",
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

const NavMenu = () => {
  if (typeof window !== "undefined") {
    // JS for Navbar hide/show on scroll
    var prevScrollPos = window.scrollY;
    window.onscroll = function () {
      var currentScrollPos = Math.max(window.scrollY, 0);
      if (currentScrollPos - prevScrollPos <= 0) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-90px";
      }
      prevScrollPos = currentScrollPos;
    };
  }

  return (
    <div className={styles["navbar"]} id="navbar">
      <nav className={styles["navigation-desktop"]}>
        <ul className={styles["nav-list-wrapper"]}>
          {navlinks.map((link, index) => {
            return (
              <li key={index} className={styles["nav-link-wrapper"]}>
                <Link
                  href={link.href}
                  style={metal2.style}
                  className={styles["nav-link"]}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>


      </nav>
    </div>
  );
};

export default NavMenu;
