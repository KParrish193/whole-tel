import styles from "../styles/pages/Error.module.scss";
import { figtree, soehne, geograph } from "../styles/fonts";

import Arrow from "../assets/svgs/arrow.svg"
import Duck from "../assets/svgs/duck.svg";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className={styles["error-page-wrapper"]}>
      <div className={styles["background"]}>
        <h1 style={soehne.style} className={styles["outline"]}>
          404
        </h1>
        {/* <Duck /> */}
      </div>
      <div className={styles["content-wrapper"]}>
        <h1 style={soehne.style}>404</h1>
        <h2 style={soehne.style}>Page Not Found</h2>
        <Link href={"/"} style={soehne.style} className={styles["error-link"]}>
          Back to Home <Arrow />
        </Link>
      </div>

      <div className={styles["banner"]}>
        <div className={styles["scroll"]}>
          <div className={styles["scroll-partial"]}>
            <p style={soehne.style}>
              404
              <span>•</span>
              Page not found
              <span>•</span>
            </p>
          </div>
          <div className={styles["scroll-partial"]}>
            <p style={soehne.style}>
              404
              <span>•</span>
              Page not found
              <span>•</span>
            </p>
          </div>
          <div className={styles["scroll-partial"]}>
            <p style={soehne.style}>
              404
              <span>•</span>
              Page not found
              <span>•</span>
            </p>
          </div>
          <div className={styles["scroll-partial"]}>
            <p style={soehne.style}>
              404
              <span>•</span>
              Page not found
              <span>•</span>
            </p>
          </div>
          <div className={styles["scroll-partial"]}>
            <p style={soehne.style}>
              404
              <span>•</span>
              Page not found
              <span>•</span>
            </p>
          </div>
          <div className={styles["scroll-partial"]}>
            <p style={soehne.style}>
              404
              <span>•</span>
              Page not found
              <span>•</span>
            </p>
          </div>
        </div>
        <div className={styles["scroll"]}>
          <div className={styles["scroll-partial"]}>
            <p style={soehne.style}>
              404
              <span>•</span>
              Page not found
              <span>•</span>
            </p>
          </div>
          <div className={styles["scroll-partial"]}>
            <p style={soehne.style}>
              404
              <span>•</span>
              Page not found
              <span>•</span>
            </p>
          </div>
          <div className={styles["scroll-partial"]}>
            <p style={soehne.style}>
              404
              <span>•</span>
              Page not found
              <span>•</span>
            </p>
          </div>
          <div className={styles["scroll-partial"]}>
            <p style={soehne.style}>
              404
              <span>•</span>
              Page not found
              <span>•</span>
            </p>
          </div>
          <div className={styles["scroll-partial"]}>
            <p style={soehne.style}>
              404
              <span>•</span>
              Page not found
              <span>•</span>
            </p>
          </div>
          <div className={styles["scroll-partial"]}>
            <p style={soehne.style}>
              404
              <span>•</span>
              Page not found
              <span>•</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
