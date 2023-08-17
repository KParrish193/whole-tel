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

  // hero content
  const textVertPos = "top";
  const textHorizPos = "right";
  const textColor = "light";
  const heroHeading = "Welcome to Whole-Tel";
  const heroSubheading = "Have the whole place to yourselves";
  const heroCopy = "Traveling with an extra-large group? Organizing a wedding, graduation, or special retreat? Combine the intimacy of your own back yard, with the accommodation of a large property when you rent the whole place and book through Whole-Tel rental services! Our Cabo San Lucas property has room for 30+ guests, with everything you need for an impressive group stay.";

  const fiftyFiftyHeadline1 = "The Whole-Tel Revolution";
  const fiftyFiftyCopy1 = ["Whole-Tel is an innovative new travel concept that allows you to hire an entire property of 5 to 30+ rooms on behalf of you and your guests.", "When traveling in a large group, sourcing the ideal accommodation can be difficult. Vacation rentals generally don’t have the capacity for larger gatherings, while others lack the private social areas better suited to familiar groups.", "Starting with one impressive property in Cabo San Lucas and with more coming soon, we offer a one-of-a-kind experience for you and your travel companions."];
  const fiftyFiftyLinkUrl1 = ""; 
  const fiftyFiftyLinkText1 = "";
  const fiftyFifty1Image = true; 

  const fiftyFiftyHeadline2 = "";
  const fiftyFiftyCopy2 = [];
  const fiftyFiftyLinkUrl2 = "";
  const fiftyFiftyLinkText2 = "";
  const fiftyFifty2Image = false; 


  // feature grid content
  const featureGridParagraph = "Blurb about customizing experience"
  const featureGridHeadline = "Fully Customize Your Experience"

  return (
    <div className={`${styles["home-about-page-wrapper"]}`}>
      {/* dynamically render these based on sanity studio */}

      <HeroHeader
        textColor={textColor}
        textHorizPos={textHorizPos}
        textVertPos={textVertPos}
        classNameProp={"homepage"}
        heroHeading={heroHeading}
        heroSubheading={heroSubheading}
        heroCopy={heroCopy}
      />
      <FiftyFifty
        fiftyFiftyHeadline={fiftyFiftyHeadline1}
        fiftyFiftyCopy={fiftyFiftyCopy1}
        fiftyFiftyLinkUrl={fiftyFiftyLinkUrl1}
        fiftyFiftyLinkText={fiftyFiftyLinkText1}
        imageLeft={fiftyFifty1Image}
      />
      <FiftyFifty
        fiftyFiftyHeadline={fiftyFiftyHeadline2}
        fiftyFiftyCopy={fiftyFiftyCopy2}
        fiftyFiftyLinkUrl={fiftyFiftyLinkUrl2}
        fiftyFiftyLinkText={fiftyFiftyLinkText2}
        imageLeft={fiftyFifty2Image}
      />
      <FeatureGrid copy={featureGridParagraph} headline={featureGridHeadline} />
      {/* <FeatureList copy={featureGridParagraph} headline={featureGridHeadline} /> */}

      {/* <EventsGrid /> */}
      {/* <GallerySlider /> */}
      {/* <LocationsGrid locations={locationsList} /> */}
      <ReviewCarousel />
    </div>
  );
}
