// list with icons and blurbs about available features
import styles from "../../styles/sanity-components/FeatureList.module.scss";
import { figtree, soehne } from "../../styles/fonts";
import Duck from "../../assets/duck.svg"

const FeatureList = ({ headline, copy, features }) => {
    // features prop would effectively be array of objects of features 
  return (
    <section className={`${styles["feature-list"]} section-container`}>
      {copy || headline ? (
        <div className={styles["section-copy"]}>
          <h3 style={soehne.style}>{headline}</h3>
          <p style={figtree.style}>{copy}</p>
        </div>
      ) : null}
      <div className={styles["list-wrapper"]}>
        {/* map through features (GROQ query) */}
        <div className={styles["feature-list-item"]}>
          <div className={styles["icon-wrapper"]}>
            {/* svg */}
            {/* icon path from GROQ/sanity */}
            <Duck />
          </div>
          <div className={styles["copy-wrapper"]}>
            <h4 style={soehne.style}>A heading</h4>
            <p style={figtree.style}>
              {/* copy from GROQ */}Lorem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rem dolorem maxime qui enim voluptatum sunt
              suscipit autem.
            </p>
          </div>
        </div>
        <div className={styles["feature-list-item"]}>
          <div className={styles["icon-wrapper"]}>{/* icon from GROQ */}
            <Duck />
          </div>
          <div className={styles["copy-wrapper"]}>
            <h4 style={soehne.style}>A heading</h4>
            <p style={figtree.style}>
              {/* copy from GROQ */}Lorem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rem dolorem maxime qui enim voluptatum sunt
              suscipit autem.
            </p>
          </div>
        </div>
        <div className={styles["feature-list-item"]}>
          <div className={styles["icon-wrapper"]}>{/* icon from GROQ */}
            <Duck />
          </div>
          <div className={styles["copy-wrapper"]}>
            <h4 style={soehne.style}>A heading</h4>
            <p style={figtree.style}>
              {/* copy from GROQ */}Lorem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rem dolorem maxime qui enim voluptatum sunt
              suscipit autem.
            </p>
          </div>
        </div>
        <div className={styles["feature-list-item"]}>
          <div className={styles["icon-wrapper"]}>{/* icon from GROQ */}
            <Duck />
          </div>
          <div className={styles["copy-wrapper"]}>
            <h4 style={soehne.style}>A heading</h4>
            <p style={figtree.style}>
              {/* copy from GROQ */}Lorem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rem dolorem maxime qui enim voluptatum sunt
              suscipit autem.
            </p>
          </div>
        </div>
        <div className={styles["feature-list-item"]}>
          <div className={styles["icon-wrapper"]}>{/* icon from GROQ */}
            <Duck />
          </div>
          <div className={styles["copy-wrapper"]}>
            <h4 style={soehne.style}>A heading</h4>
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

export default FeatureList;
