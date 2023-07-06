import styles from "../../styles/pages/Locations.module.scss";
import { figtree, metal2 } from "../../styles/fonts";
import LocationsGrid from "../../components/sanity-content-layouts/locations-grid";

// groq query for location name, blurb & icon

const Locations = () => {
  const locationsList = [
    {
      name: "Cabo San Lucas, Mexico",
      blurb:
        "Discover the hidden gem of Cabo San Lucas' Sunset District. True to its name, this neighborhood offers a serene escape from the city's hustle and bustle, while remaining within easy reach of all the local attractions. Take a leisurely stroll to find an variety of restaurants just steps away, or reach the vibrant marina in a mere 10 to 15 minutes. If you're craving the beach, a pleasant 30-minute walk or a quick ride-share trip will transport you to pristine shores. Perched on a small hill, our property treats you to panoramic views of Cabo San Lucas, and glimpses of the stunning Sea of Cortez. Completing this idyllic experience is the delightful Los Cabos weather that beckons visitors time and time again.",
      icon: "",
      smallBlurb:
        "A captivating blend of natural beauty, vibrant culture, and breathtaking sunsets.",
    },
    {
      name: "Aspen, Colorado, United States",
      blurb: "",
      icon: "",
    },
  ];

  return (
    <section className={styles["locations-page-wrapper"]}>
      <div className={styles["location"]}>
        <h1>Locations</h1>
      </div>
      <LocationsGrid locations={locationsList} />
    </section>
  );
};

export default Locations;
