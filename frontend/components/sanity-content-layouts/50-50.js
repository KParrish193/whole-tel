// split image and text

import styles from "../../styles/sanity-components/5050.module.scss";
import Image from "next/image";
import Link from "next/link";
import { figtree, soehne } from "../../styles/fonts";
import cabo from "../../assets/pano.webp";

const FiftyFifty = ({ fiftyFiftyHeadline, fiftyFiftyCopy, fiftyFiftyLinkUrl, fiftyFiftyLinkText, imageLeft }) => {
  const alt = "pano picture of cabo san lucas";
  
  return (
    <section className={`${styles["fifty-fifty"]}`}>
      <div
        className={`${styles["fifty-fifty-grid"]} ${
          styles[`${imageLeft ? "left" : "right"}`]
        }`}
      >
        <div className={styles["content"]}>
          <h4 style={soehne.style}>{fiftyFiftyHeadline}</h4>
          {fiftyFiftyCopy.map((paragraph) => ( 
            <p style={figtree.style}>{paragraph}</p>
          ))}
          <Link
            href={fiftyFiftyLinkUrl}
            style={soehne.style}
            className={styles["cta-link"]}
          >
            {fiftyFiftyLinkText}
          </Link>
        </div>
        <div className={styles["image-wrapper"]}>
          <Image className={styles["image"]} src={cabo} alt={alt} />
        </div>
      </div>
    </section>
  );
};

export default FiftyFifty;
