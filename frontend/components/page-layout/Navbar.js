import Link from 'next/link'

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
        <nav>
            <div>
                {/* TODO: Add logo */}
            </div>
            <ul>
                {navlinks.map((link, index )=> {
                    return (
                      <li key={index}>
                        <Link href={link.href}>
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
