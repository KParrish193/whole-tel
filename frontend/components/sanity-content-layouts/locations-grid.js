import styles from "../../styles/sanity-components/LocationsGrid.module.scss";
import { figtree, metal2 } from "../../styles/fonts";

const LocationsGrid = ({ locations }) => {
  return (
    <div className={styles["locations-grid-wrapper"]}>
      {console.log(locations.length > 0)}
      {(locations.length > 0) ? locations.map((location, index) => {
          return(
              <div className={styles["location-card-wrapper"]} key={index}>
                <div className={styles['location-card-heading']}>
                  <h4 style={figtree.style}>{location.name}</h4>
                </div>
                <div>
                  <p>{location.blurb}</p>
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
