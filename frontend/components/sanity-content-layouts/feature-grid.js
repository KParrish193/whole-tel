// cards with icons and blurbs about available features
import styles from "../../styles/sanity-components/FeatureGrid.module.scss";
import { figtree, metal2 } from "../../styles/fonts";

const FeatureGrid = () => {
  return (
    <section>
        <div>
            {/* map through features (GROQ query) */}
            <div className={styles['feature-card']}>
                <div className={styles['icon-wrapper']}>
                    {/* icon from GROQ */}
                </div>
                <div className={styles['copy-wrapper']}>
                    <p>
                        {/* copy from GROQ */}
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default FeatureGrid;