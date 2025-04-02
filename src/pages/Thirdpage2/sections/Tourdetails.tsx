import React from "react";
import { CheckCircle, MapPin, Camera, Calendar, Star } from "lucide-react";

interface TourDetails {
  nights: number;
  days: number;
  theme: string;
  destinationCovered: string;
  totalPackagePrice: string;
  highlights: string;
}

interface TourdetailsProps {
  details: { [day: string]: string[] }[]; // Itinerary data structure
}

const TourCard: React.FC<TourDetails> = ({
  nights,
  days,
  theme,
  destinationCovered,
  totalPackagePrice,
  highlights,
}) => {
  return (
    <div className="tour-card">
      <div className="tour-info">
        <div className="flex items-center mb-2">
          {/* <MapPin className="mr-2 text-gray-600" /> */}
          {/* <span className="text-lg font-semibold">{theme}</span> */}
          {/* <span className="text-lg font-semibold">{highlights}</span> */}
        </div>
        <div className="flex items-center mb-2">
          {/* <CheckCircle className="mr-2 text-green-600" /> */}
          <span className="text-sm">{destinationCovered}</span>
        </div>
        <div className="flex items-center mb-2">
          <Calendar className="mr-2 text-yellow-500" />
          <span className="text-lg">
            {days} Days, {nights} Nights
          </span>
        </div>
        <div className="mb-4">
          <h5 className="text-lg font-bold mb-2">Highlights</h5>
          <div className="flex flex-wrap gap-2"> {/* Add flex and gap for spacing */}
            {Array.isArray(highlights) &&
              highlights.map((highlight: string, index: number) => (
                <span
                  key={index}
                  className="flex items-center text-sm text-gray-700 bg-gray-100 p-2 rounded-md" 
                  // You can customize this class for better styling
                >
                  <Star className="mr-1 text-yellow-500" />
                  {highlight}
                </span>
              ))}
          </div>
        </div>
        {/* <div className="flex items-center mb-2">
            <Camera className="mr-2 text-blue-600" />
            <span className="text-lg">Capture memories on this trip!</span>
        </div> */}
        {/* <div className="flex items-center mt-4">
            <span className="text-xl font-bold text-gray-700">
                Total Price: {totalPackagePrice}
            </span>
        </div> */}
      </div>
    </div>
  );
};

export default TourCard;
