import styles from "../../styles/sanity-components/LocationsGrid.module.scss";
import { figtree, metal2 } from "../../styles/fonts";

const LocationsGrid = ({ locations }) => {
  return (
    <div className={styles["locations-grid-wrapper"]}>
      {locations.length > 0
          ? locations.map((location, index) => {
              return (
                <div className={styles["location-card-wrapper"]} key={index}>
                  <div className={styles["location-card-heading"]}>
                    <h4 style={metal2.style}>{location.name}</h4>
                  </div>
                  <div className={styles["location-card-content"]}>
                    <p style={figtree.style}>{location.smallBlurb}</p>
                  </div>
                </div>
              );
            })
          : null
        // include empty state?
      }
    </div>
  );
};

export default LocationsGrid;
