import { useParams, useNavigate } from "react-router-dom";
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
import FloatingContactButton from "../Home/sections/Floating";

import {
  Bali,
  Kashmir,
  Kerala,
  Andaman1,
  similar,
  Vietnam,
  Thailand,
  Europe,
  Dubai,
  Australia,
  Baku,
  Hongkong,
  Japan,
  Malaysia,
  North_East,
  Maldives,
  Mauritius,
  Singapore,
  southAfrica,
  Turkey,
  Ladakh,
  Himachal,
  Goa,
  // Nepal,

} from "../../components/data";
import DestinationSlider from "./sections/DestinationSlider";
import Choose_your from "./sections/Choose_your";
import PopularDestinations from "../Home/sections/PopularDestinations";
import PopularDestinations2 from "./sections/DestinationProps";
import StaticReviews from "./sections/StaticReviews";
import baliImg13 from "../../assets/Tripdetails/bali/ThingsToDoInBali/bali_banner.png";
import baliImg14 from "../../assets/Tripdetails/bali/ThingsToDoInBali/mobile-banner-bali.jpg";
import TrustindexWidget from "../Home/sections/TrustindexWidget";
import Popup from "../../components/common/Popup";


// Type for valid destination keys
type LocationKey = keyof typeof destinationsData;

export default function Tripdetailspage() {
  const { location } = useParams<{ location: string }>(); // Get location from URL params
  const navigate = useNavigate(); // Hook for navigation
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Handle screen resize for responsive design
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Convert location to a valid key
  const validLocation = location as LocationKey;
  const locationData = destinationsData[validLocation];

  // Redirect if location is invalid
  useEffect(() => {
    if (!locationData) {
      navigate("/not-found", { replace: true }); // Redirect to a Not Found page
    }
  }, [locationData, navigate]);

  // Extract relevant data
  const { thingsToDo, banner } = locationData || {};

  // Set banner image dynamically
  const bannerImage =
    location === "bali" ? (isMobile ? baliImg14 : baliImg13) : banner?.image;

  // Define trending offers by location
  const trendingOffersMapping: Record<string, any[]> = {
    turkey: Turkey,
    southAfrica: southAfrica,
    singapore: Singapore,
    mauritius: Mauritius,
    malaysia: Malaysia,
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
    kerala: Kerala,
    andaman: Andaman1,
    himachal: Himachal,
    goa:Goa,
    // nepal:Nepal,
  };

  const trendingOffers = trendingOffersMapping[location as keyof typeof trendingOffersMapping];

  return (
    <>
      {/* Banner Section */}
      {banner && <Ban2 image={banner.image} destination={banner.title} />}

      {/* Popular Destinations */}
      {thingsToDo && (
        <PopularDestinations2 title="Things to do in" highlightWord={banner?.title} thingsToDo={thingsToDo} />
      )}

      {/* Dynamic Trending Offers */}
      {trendingOffers && <TrendingOffers title={`Trending Offers in ${location}`} cards={trendingOffers} />}

      {/* Video Testimonials */}
      <VideoTestimonials />
      <VideoThumbnail />

      {/* Why Tripstars Section */}
      <WhyTripstars />

      {/* Choose Your Section */}
      <Choose_your />

      {/* Trustindex Widget */}
      <TrustindexWidget />

      {/* Popup for enquiry */}
      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}

      {/* Similar Packages Section */}
      <TrendingOffers title="Similar packages" cards={similar} />
      <FloatingContactButton/>
    </>
  );
}
