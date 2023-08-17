import styles from "../../styles/sanity-components/HeroHeader.module.scss";
import Image from "next/image";
import { figtree, geograph, soehne } from "../../styles/fonts";

import pano from "../../assets/pano.webp";

// get image, text, and position from GROQ, pass into component

const HeroHeader = ({
  textVertPos,
  textHorizPos,
  textColor,
  classNameProp,
  heroHeading,
  heroSubheading,
  heroCopy
}) => {
  const alt = "pano picture of cabo san lucas";
  return (
    <section className={`${styles["hero"]} ${styles[classNameProp]}`}>
      <div className={styles["image-overlay-wrapper"]}>
        <Image className={styles["background-image"]} src={pano} alt={alt} />
        <div
          className={`${styles["image-overlay"]} ${
            styles[`${textColor === "light" ? "light" : "dark"}`]
          }`}
        ></div>
      </div>
      <div
        className={`${styles["hero-copy-wrapper"]} ${
          styles[`${textColor === "light" ? "light" : "dark"}`]
        } ${
          styles[
            `${
              textHorizPos === "left"
                ? "left"
                : textHorizPos === "right"
                ? "right"
                : "horiz-center"
            }`
          ]
        } ${
          styles[
            `${
              textVertPos === "top"
                ? "top"
                : textVertPos === "bottom"
                ? "bottom"
                : "vert-center"
            }`
          ]
        }`}
      >
        <h1 style={soehne.style}>{heroHeading}</h1>
        <h4 style={soehne.style}>{heroSubheading}</h4>
        <p style={figtree.style}>{heroCopy}</p>
      </div>
    </section>
  );
};

export default HeroHeader;
