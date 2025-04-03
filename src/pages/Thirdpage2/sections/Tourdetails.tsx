import React from "react";
import { CheckCircle, MapPin, Camera, Calendar, Star } from "lucide-react";

interface TourDetails {
  nights: number;
  days: number;
  theme: string;
  destinationCovered: string;
  totalPackagePrice: string;
  highlights: string[]; // ✅ Ensure highlights is an array of strings
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
    <div className="tour-card bg-white">
      <div className="tour-info">
        {/* <div className="flex items-center mb-2">
          <MapPin className="mr-2 text-gray-600" />
          <span className="text-lg font-semibold">{theme}</span>
        </div> */}
        <div className="flex items-center mb-2">
          <CheckCircle className="mr-2 text-green-600" />
          <span className="text-sm">{destinationCovered}</span>
        </div>
        <div className="flex items-center mb-2">
          <Calendar className="mr-2 text-yellow-500" />
          <span className="text-lg">
            {days} Days, {nights} Nights
          </span>
        </div>

        {/* Highlights Section */}
        <div className="mb-4">
          <h5 className="text-lg mb-2 font-semibold">Highlights</h5>
          <div className="flex flex-wrap gap-2">
            {highlights && highlights.length > 0 ? (
              highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="text-sm text-gray-700 bg-gray-100 p-2 rounded-md"
                >
                  {highlight}
                </span>
              ))
            ) : (
              <p className="text-sm text-gray-500">No highlights available</p>
            )}
          </div>
        </div>
        {/* Total Package Price */}
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
