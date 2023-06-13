import styles from "../../styles/layout/Navbar.module.scss";

import Link from 'next/link'
import { oreloLight, oreloMedium, oreloRegular } from "../../styles/fonts";

// TODO: GROQ TO GET PAGES?
const navlinks = [
  {
    href: "",
    text: "About",
  },
  {
    href: "",
    text: "Availability",
  },
  {
    href: "",
    text: "Locations",
  },
  {
    href: "",
    text: "Past Events",
  },
  {
    href: "",
    text: "FAQ",
  },
];

const Navbar = () => {
    return (
        <nav className={styles['navigation']}>
            <div>
                {/* TODO: Add logo */}
            </div>
            <ul className={styles['nav-list-wrapper']}>
                {navlinks.map((link, index )=> {
                    return (
                      <li key={index} className={styles['nav-link-wrapper']}>
                        <Link href={link.href} style={oreloMedium.style} className={styles['nav-link']}>
                          {link.text}
                        </Link>
                      </li>
                    );
                }
                )}
            </ul>
        </nav>
    )
};

export default Navbar;
