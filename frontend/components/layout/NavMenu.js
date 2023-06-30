import styles from "../../styles/layout/NavMenu.module.scss";
import Socials from "./Socials";

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
  return (
    <nav className={styles["nav-menu"]}>
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
      <Socials directory={"nav-menu"} />
    </nav>
  );
};

export default NavMenu;
