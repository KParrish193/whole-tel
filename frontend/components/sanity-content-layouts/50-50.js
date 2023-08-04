// split image and text

import styles from "../../styles/sanity-components/5050.module.scss";
import Image from "next/image";
import { figtree, metal2 } from "../../styles/fonts";

const FiftyFifty = (leftRight) => {
  return (
    <section className={`${styles['fifty-fifty']} ${styles[{leftRight}]} section-container`}>
      <div className={styles['fifty-fifty-grid']}>
        <div className={styles['content']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto quaerat quia! Voluptatibus, autem veniam odit earum, natus veritatis odio recusandae, minima beatae hic eum iure nemo delectus dolores dolor.
        </div>
        <div className={styles['image-wrapper']}>
          <Image />
        </div>
      </div>
    </section>
  );
};

export default FiftyFifty;