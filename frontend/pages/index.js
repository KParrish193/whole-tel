import styles from "../styles/pages/About.module.scss";
import { figtree, soehne } from "../styles/fonts";

import FiftyFifty from "../components/sanity-content-layouts/50-50";
import EventsGrid from "../components/sanity-content-layouts/events-grid";
import FeatureGrid from "../components/sanity-content-layouts/feature-grid";
import FeatureList from "../components/sanity-content-layouts/feature-list";
import GallerySlider from "../components/sanity-content-layouts/gallery-slider";
import HeroHeader from "../components/sanity-content-layouts/hero-header";
import LocationsGrid from "../components/sanity-content-layouts/locations-grid";
import ReviewCarousel from "../components/sanity-content-layouts/review-carousel";


export default function Home() {
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

  const textVertPos = "top";
  const textHorizPos = "left";
  const textColor = "light";

  const featureGridParagraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse temporibus voluptates earum quibusdam, unde est a veniam porro ea mollitia nesciunt. Provident placeat, sit earum similique iste explicabo! Corporis!"
  const featureGridHeadline = "Headline"

  return (
    <div className={`${styles["home-about-page-wrapper"]}`}>
      {/* dynamically render these based on sanity studio */}

      {/* <HeroHeader
        textColor={textColor}
        textHorizPos={textHorizPos}
        textVertPos={textVertPos}
        classNameProp={"homepage"}
      /> */}
      {/* <FiftyFifty imageLeft={true}/>
      <FiftyFifty imageLeft={false}/> */}
      {/* <FeatureGrid copy={featureGridParagraph} headline={featureGridHeadline} /> */}
      {/* <FeatureList copy={featureGridParagraph} headline={featureGridHeadline} /> */}
      
      <EventsGrid />
      {/* <GallerySlider /> */}
      {/* <LocationsGrid locations={locationsList} /> */}
      {/* <ReviewCarousel /> */}
    </div>
  );
}
