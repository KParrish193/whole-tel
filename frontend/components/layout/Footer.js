import styles from "../../styles/layout/Footer.module.scss";
import { figtree } from "../../styles/fonts";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={figtree.style} className={styles["footer"]}>
      Copyright&copy; {year} Whole-tel Properties. All rights reserved.{" "}
    </footer>
  );
};

export default Footer;
