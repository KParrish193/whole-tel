// cards with icons and blurbs about available features
import styles from "../../styles/sanity-components/FeatureGrid.module.scss";
import { figtree, metal2 } from "../../styles/fonts";

const FeatureGrid = () => {
  return (
    <section className={`${styles["feature-grid"]} section-container`}>
      <div className={styles["card-grid"]}>
        {/* map through features (GROQ query) */}
        <div className={styles["feature-card"]}>
          <div className={styles["icon-wrapper"]}>
            {/* svg */}
            {/* icon path from GROQ/sanity */}
          </div>
          <div className={styles["copy-wrapper"]}>
            <h4 style={metal2.style}>A heading</h4>
            <p style={figtree.style}>
              {/* copy from GROQ */}Lorem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rem dolorem maxime qui enim voluptatum sunt
              suscipit autem.
            </p>
          </div>
        </div>
        <div className={styles["feature-card"]}>
          <div className={styles["icon-wrapper"]}>{/* icon from GROQ */}</div>
          <div className={styles["copy-wrapper"]}>
            <h4 style={metal2.style}>A heading</h4>
            <p style={figtree.style}>
              {/* copy from GROQ */}Lorem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rem dolorem maxime qui enim voluptatum sunt
              suscipit autem.
            </p>
          </div>
        </div>
        <div className={styles["feature-card"]}>
          <div className={styles["icon-wrapper"]}>{/* icon from GROQ */}</div>
          <div className={styles["copy-wrapper"]}>
            <h4 style={metal2.style}>A heading</h4>
            <p style={figtree.style}>
              {/* copy from GROQ */}Lorem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rem dolorem maxime qui enim voluptatum sunt
              suscipit autem.
            </p>
          </div>
        </div>
        <div className={styles["feature-card"]}>
          <div className={styles["icon-wrapper"]}>{/* icon from GROQ */}</div>
          <div className={styles["copy-wrapper"]}>
            <h4 style={metal2.style}>A heading</h4>
            <p style={figtree.style}>
              {/* copy from GROQ */}Lorem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rem dolorem maxime qui enim voluptatum sunt
              suscipit autem.
            </p>
          </div>
        </div>
        <div className={styles["feature-card"]}>
          <div className={styles["icon-wrapper"]}>{/* icon from GROQ */}</div>
          <div className={styles["copy-wrapper"]}>
            <h4 style={metal2.style}>A heading</h4>
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
