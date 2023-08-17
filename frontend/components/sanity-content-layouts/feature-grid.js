// cards with icons and blurbs about available features
import styles from "../../styles/sanity-components/FeatureGrid.module.scss";
import { figtree, soehne } from "../../styles/fonts";
import Duck from "../../assets/svgs/duck.svg";

const FeatureGrid = ({headline, copy}) => {
  return (
    <section className={`${styles["feature-grid"]} section-container`}>
      {copy || headline ? (
        <div className={styles["section-copy"]}>
          <h3 style={soehne.style}>{headline}</h3>
          <p style={figtree.style}>{copy}</p>
        </div>
      ) : null}
      <div className={styles["card-grid"]}>
        {/* map through features (GROQ query) */}
        <div className={styles["feature-card"]}>
          <div className={styles["icon-wrapper"]}>
            {/* svg */}
            <Duck />
            {/* icon path from GROQ/sanity */}
          </div>
          <div className={styles["copy-wrapper"]}>
            <h4 style={soehne.style}>Concierge at Your Service</h4>
            <p style={figtree.style}>
              {/* copy from GROQ */}Lorem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rem dolorem maxime qui enim voluptatum sunt
              suscipit autem.
            </p>
          </div>
        </div>
        <div className={styles["feature-card"]}>
          <div className={styles["icon-wrapper"]}>
            {/* icon from GROQ */}
            <Duck />
          </div>
          <div className={styles["copy-wrapper"]}>
            <h4 style={soehne.style}>Transportation</h4>
            <p style={figtree.style}>
              {/* copy from GROQ */}Lorem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rem dolorem maxime qui enim voluptatum sunt
              suscipit autem.
            </p>
          </div>
        </div>
        <div className={styles["feature-card"]}>
          <div className={styles["icon-wrapper"]}>
            {/* icon from GROQ */}
            <Duck />
          </div>
          <div className={styles["copy-wrapper"]}>
            <h4 style={soehne.style}>Excursions</h4>
            <p style={figtree.style}>
              {/* copy from GROQ */}Lorem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rem dolorem maxime qui enim voluptatum sunt
              suscipit autem.
            </p>
          </div>
        </div>
        <div className={styles["feature-card"]}>
          <div className={styles["icon-wrapper"]}>
            {/* icon from GROQ */}
            <Duck />
          </div>
          <div className={styles["copy-wrapper"]}>
            <h4 style={soehne.style}>Local Cuisine</h4>
            <p style={figtree.style}>
              {/* copy from GROQ */}Lorem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rem dolorem maxime qui enim voluptatum sunt
              suscipit autem.
            </p>
          </div>
        </div>
        <div className={styles["feature-card"]}>
          <div className={styles["icon-wrapper"]}>
            {/* icon from GROQ */}
            <Duck />
          </div>
          <div className={styles["copy-wrapper"]}>
            <h4 style={soehne.style}>Entertainment</h4>
            <p style={figtree.style}>
              {/* copy from GROQ */}Lorem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rem dolorem maxime qui enim voluptatum sunt
              suscipit autem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
