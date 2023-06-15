import styles from "../../../styles/form/Datepicker.module.scss";
import { figtree } from "../../../styles/fonts";

export default function NavButton({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles["navigation-button"]}
    >
      {children}
    </button>
  );
}
