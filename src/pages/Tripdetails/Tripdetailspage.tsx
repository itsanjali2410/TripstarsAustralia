// src/components/Tripdetailspage.js
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DynamicSlider from "./sections/DynamicSlider";
import TrendingOffers from "./sections/TrendingOffers";
import CherryBlossomsSection from "../Tripdetails/sections/CherryBlossomsSection";
import Ban from "./sections/Ban";
import Ban2 from "./sections/Ban2";
import { destinationsData } from "./data";
import CardSection from "./sections/CardSection";
import FAQ from "./sections/FAQ";
import ReviewSlider from "./sections/ReviewSlider";
import VideoTestimonials from "../Home/sections/VideoTestimonials";
import VideoThumbnail from "../Home/sections/VideoThumbnail";
import WhyTripstars from "../Home/sections/WhyTripstars";
import ChooseTravelStyle from "./sections/ChooseTravelStyle";
import TravelStyleCarousel from "./sections/TravelStyleCarousel";
import ExploreDestinations from "../Home/sections/ExploreDestinations";
import TrendingOffers2 from "../../components/TrendingOffers2";
import { Bali,Kashmir,Kerala,Andaman1,similar, Vietnam, Thailand, Europe, Dubai, Australia, Baku, Hongkong, Japan, North_East, Maldives, Mauritius, Singapore, southAfrica, Turkey, Ladakh, Goa, Himachal} from "../../components/data";
import DestinationSlider from "./sections/DestinationSlider";
import Choose_your from "./sections/Choose_your";
import PopularDestinations from "../Home/sections/PopularDestinations";
import PopularDestinations2 from "./sections/DestinationProps";
import StaticReviews from "./sections/StaticReviews";
import baliImg13 from "../../assets/Tripdetails/bali/ThingsToDoInBali/bali_banner.png";
import baliImg14 from "../../assets/Tripdetails/bali/ThingsToDoInBali/mobile-banner-bali.jpg";
import TrustindexWidget from "../Home/sections/TrustindexWidget";
// import Popup from "../../components/common/Popup";
import FloatingContactButton from "../Home/sections/Floating";
type LocationKey = keyof typeof destinationsData;

export default function Tripdetailspage() {
  // Setup isMobile state for responsive design
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000); // Set delay for 5 seconds
    return () => clearTimeout(timer);
  }, []);
  // Get location from the URL params
  const { location } = useParams<{ location: string }>();

  // Narrow the type of location to a valid key or undefined
  const validLocation = location as LocationKey;
  const locationData = destinationsData[validLocation];

  // If no location data is found, show a message
  if (!locationData) {
    return <p>No data available for this location.</p>;
  }

  const { thingsToDo, banner } = locationData;

  // Set the banner image dynamically based on the location
  const bannerImage =
    location === "bali" ? (isMobile ? baliImg14 : baliImg13) : locationData.banner.image;

  // Define a mapping for trending offers by location
  const trendingOffersMapping: Record<string, any[]> = {
    turkey: Turkey,
    southAfrica: southAfrica,
    singapore: Singapore,
    mauritius: Mauritius,
    maldives: Maldives,
    japan: Japan,
    hongkong: Hongkong,
    baku: Baku,
    bali: Bali,
    vietnam: Vietnam,
    dubai: Dubai,
    europe: Europe,
    thailand: Thailand,
    australia: Australia,
    ladakh: Ladakh,
    north: North_East,
    kashmir: Kashmir,
    kerala : Kerala,
    andaman: Andaman1,
    goa: Goa,
    himachal: Himachal
  };

  // Get the relevant trending offers based on the location
  const trendingOffers = trendingOffersMapping[location as keyof typeof trendingOffersMapping];

  return (
    <>
      {/* Banner Section */}
      <Ban2 image={banner?.image} destination={banner?.title} />

      {/* Popular Destinations */}
      <PopularDestinations2
        title="Things to do in"
        highlightWord={banner?.title}
        thingsToDo={thingsToDo}
      />

      {/* Dynamic Trending Offers */}
      {trendingOffers && <TrendingOffers title={`Trending Offers in ${location}`} cards={trendingOffers} />}

      {/* Video Testimonials */}
      <VideoTestimonials />
      <VideoThumbnail />

      {/* Why Tripstars Section */}
      <WhyTripstars />

      {/* Choose Your Section */}
      <Choose_your />

      {/* Popup */}
      {/* <Popup /> */}

      {/* Trustindex Widget */}
      <TrustindexWidget />

      {/* Similar Packages Section */}
      <TrendingOffers title="Similar packages" cards={similar} />
      <FloatingContactButton/>
    </>
  );
}
