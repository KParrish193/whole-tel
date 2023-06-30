import styles from "../../styles/layout/Socials.module.scss";
import Instagram from "../../svgs/instagram.svg";
import Facebook from "../../svgs/facebook.svg";

const Socials = ({ directory }) => {
    return(
        <div className={`${styles["socials"]} ${styles[`${directory}`]}`}>
            <a>
                <Instagram />
            </a>
            <a>
                <Facebook />
            </a>
        </div>
    )
};

export default Socials;