import styles from "../../styles/layout/Socials.module.scss";
import Instagram from "../../svgs/instagram.svg";
import Facebook from "../../svgs/facebook.svg";

const Socials = ({ directory }) => {
  // bring in hrefs from GROQ
  const facebook = "https://www.facebook.com/Wholetel";
  const insta = "https://www.instagram.com/wholetel/";

  return (
    <div className={`${styles["socials"]} ${styles[`${directory}`]}`}>
      <a href={insta} target="_blank">
        <Instagram />
      </a>
      <a href={facebook} target="_blank">
        <Facebook />
      </a>
    </div>
  );
};

export default Socials;