import styles from "../../styles/sanity-components/LocationsGrid.module.scss";
import { figtree, soehne } from "../../styles/fonts";

const LocationsGrid = ({ locations }) => {
  return (
    <div className={styles["locations-grid-wrapper"]}>
      {
        locations.length > 0
          ? locations.map((location, index) => {
              return (
                <div className={styles["location-card-wrapper"]} key={index}>
                  <div className={styles["location-card-heading"]}>
                    <h4 style={soehne.style}>{`0${index + 1}`}</h4>
                    <h4 style={soehne.style}>{location.name}</h4>
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
