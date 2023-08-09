import styles from "../../styles/sanity-components/HeroHeader.module.scss";
import Image from "next/image";
import { figtree, metal2 } from "../../styles/fonts";

import pano from "../../assets/pano.webp"

// get image, text, and position from GROQ, pass into component

const HeroHeader = ({textVertPos, textHorizPos, textColor}) => {
  const alt = "pano picture of cabo san lucas"
  return (
    <section className={`${styles["hero"]}`}>
      <Image className={styles["background-image"]} src={pano} alt={alt} />
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
        <h1 style={metal2.style}>About Us</h1>
        <p style={figtree.style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus maiores, ipsum odit necessitatibus, ipsam alias praesentium ad quae autem quos iure voluptatem blanditiis nulla, similique eius delectus neque aperiam?</p>
      </div>
    </section>
  );
};

export default HeroHeader;
