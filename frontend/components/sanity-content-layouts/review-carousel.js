import styles from "../../styles/sanity-components/ReviewCarousel.module.scss";
import { figtree, soehne } from "../../styles/fonts";
import Quote from "../../assets/quote.svg";
import Arrow from "../../assets/arrow.svg";

const ReviewCarousel = () => {
  return (
    <section className={`${styles["review-carousel"]} section-container`}>
      <div className={styles["carousel-wrapper"]}>
        {/* <div className={styles["arrows"]}>
          <button>
            <Arrow />
          </button>
          <button>
            <Arrow />
          </button>
        </div> */}

        <div className={styles["slide"]}>
          <div className={styles["slide-copy"]}>
            <Quote />
            <p style={soehne.style}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium, maiores iste beatae aspernatur exercitationem
              voluptate molestias sapiente blanditiis sed. Minus a consequuntur
              voluptas, quisquam sed doloremque cum provident ratione aperiam.
            </p>
          </div>
          <div className={styles["reviewer-wrapper"]}>
            <div className={styles["reviewer-info"]}>
              <h5 style={soehne.style}>John Doe</h5>
              <p style={figtree.style}>Los Angeles, CA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
