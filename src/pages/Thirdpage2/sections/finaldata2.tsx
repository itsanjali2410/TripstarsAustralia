import { Vietnam } from "../../../components/data";

interface PackageData {
  packageId: string;
  packageName: string;
  totalGuests: number;
  nights: number;
  days: number;
  startCity: string;
  destinationCovered: string;
  totalPackagePrice: string;
  packageImage: string;
  pricePerAdult?: string; // ✅ Optional
  itinerary: { [day: string]: string[] }[];
  hotelsPricing: {
    "4Star": { city: string; hotels: string[] }[];
    "5Star": { city: string; hotels: string[] }[];
  };
    // ✅ New "includes" field for icons
    includes?: { name: string; iconUrl: string }[];
  optionalActivities: { name: string; costPerAdult: string }[];
  inclusions: string[];
  exclusions: string[];
  termsConditions: string[];
  cancellationPolicy: Record<string, string>; // ✅ Move this inside
  overviewData: {
    title: string;
    content: string;
  };
  reviews: string;
  duration: string;
  country: string;
  cities: string;
  tableData?: {
    tab1: {
      city?: string;
      star4?: string;
      star5?: string;
      label?: string;
      cost4?: string;
      cost5?: string;
    }[];
    tab2: {
      city?: string;
      star4?: string;
      star5?: string;
      label?: string;
      cost4?: string;
      cost5?: string;
    }[];
    tab3: {
      name: string;
      costPerAdult: string;
    }[];
  };
}


// ✅ FinalData Type Definition
const Finaldata: Record<string, Record<string, PackageData>> = {
  bali: {
    bali1: {
      packageId: "S04390",
      packageName: "Ultimate Bali & Nusa Penida Adventure 6N7D",
      totalGuests: 2,
      nights: 6,
      days: 7,
      startCity: "Mumbai",
      destinationCovered: "Bali",
      totalPackagePrice: "INR 70,000",
 
      includes: [
        { name: "Flight", iconUrl: "https://www.easemytrip.com/holidays/Content/customize/img/flight-1.svg" },
        { name: "Hotel", iconUrl: "https://www.easemytrip.com/holidays/Content/customize/img/hotel-1.svg" },
        { name: "Meal", iconUrl: "https://www.easemytrip.com/holidays/Content/customize/img/meal-1.svg" },
        { name: "Sightseeing", iconUrl: "https://www.easemytrip.com/holidays/Content/customize/img/sightseeing-1.svg" },
        { name: "Transfer", iconUrl: "https://www.easemytrip.com/holidays/Content/customize/img/transfer-1.svg" }
      ],

      packageImage:
        "https://plus.unsplash.com/premium_photo-1661955632358-85564b2810b2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
        itinerary: [
          { " Day 1: Arrival in Bali & Transfer to Hotel": ["Welcome to Bali! Today is the First day of your trip you will arrive at Denpasar Bali airport and will be transferred to your hotel in Bali. Your first day's schedule depends on the flight arrival time. Usually, this day will be free for you at leisure. Overnight stay at Hotel accommodation"] },
          { "Day 2: Benoa Water Sports": ["Experience a water-filled adventure at Benoa Bay with an exciting. An ideal Bali is incomplete without Bali Water Sport at famous Tanjung Benoa Beach. This beach based know for each aquatic adventure is located in the benoa peninsula far away from the Hustle and bustle. watersport with Banana Boat, Parasailing, Jet Ski."] },
          { " Day 3: Uluwatu Sunset Tour with Kecak Dance": ["Visit the beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. The beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. Post sunset witness the Kecak and Fire Dance - Completely dramatic. Originally from Ramayana this show depicts the famous ‘Lanka Dahan’ episode wherein Hanuman sets fire to the kingdom of Ravana. The enthralling ‘kecak, kecak’ chant is the USP."] },
          { " Day 4: Full-Day West Nusa Penida Tour": ["You will be taken to witness Tegalalang Rice Terraces - probably the busiest and most famous waterfall in Bali, and it’s super easy to reach from Ubud. It only takes about 15 minutes to hike down the steps to the waterfall, but the way back up is a good workout with a lot of humidity and uneven stone steps (the steps feel like they were made for giants!)."] },
          { "Day 5: Ubud Exploration & Scenic Attractions": ["The Ubud Art Market is a great place to find beautiful silk scarves, lightweight shirts, statues, kites, handmade woven bags, baskets or hats and many other hand-crafted goods. Locally known as Pasar Seni Ubud, the market is opposite the Puri Saren Royal Ubud Palace and opens daily. Most of the goods found at the Ubud Market are made in the neighbouring villages of Pengosekan, Tegallalang, Payangan and Peliatan. The location of the Ubud Art Market, which is centred among the art producing villages and at the centre of Ubud itself, makes it a strategic shopping place for Balinese handicrafts and souvenirs."] },
          { "Day 6: Relax & Explore Bali at Your Own Pace": ["Day at Leisure Day free at leisure, enjoy by your own."] },
          { "Day 7: Departure – Bali to Denpasar Airport": ["Take a bag full of memories to cherish | Check out from the hotel and meet the representative who will take you to the Denpasar airport to board board your return flight back home."] },
        ],

      hotelsPricing: {
        "4Star": [
          { city: "Kuta - 4N Deluxe Room", hotels: ["Swiss-Belhotel Rainforest Kuta", "The One Legion", "Golden Tulip Jineng Resort", "Kuta Central"] },
          { city: "Ubud - 2N One Bedroom with Private Pool Villa", hotels: ["Alam Puisi Ubud", "Ashoka Tree Resort Ubud", "Bhumi Linggah", "Ubud Heaven Sayan"] },
        ],
        "5Star": [
          { city: "Kuta - 4N Deluxe Room", hotels: ["Bintang Bali Resort", "Royal Tulip Springhill Resort", "Pullman Bali Legian Beach"] },
          { city: "Ubud - 2N One Bedroom with Private Pool Villa", hotels: ["Asvara Villa Ubud", "FuramaXclusive Resort & Villas", "Hideaway Village Bali"] },
        ],
      },
      optionalActivities: [
        { name: "ATV Quad Bike & White Water Rafting Adventure", costPerAdult: "₹ 5000 /-" },
        { name: "Bali Safari with Marine Park & Jungle Hopper Pass", costPerAdult: "₹ 6000 /-" },
        { name: "Candle Light Dinner", costPerAdult: "₹ 3000 /-" },
        { name: "Lempuyang Temple, Tirta Gangga & Waterfall Tour", costPerAdult: "₹ 2960 /-" },
        { name: "Floating Breakfast", costPerAdult: "₹ 2500 /- per couple" },
      ],
      inclusions: [
        "Arrival in Bali Denpasar and transfer to hotel by private car.",
        "Benoa Water Sports - By Private Car.",
        "Uluwatu Sunset Tour with Kecak Dance on Private car.",
        "Ulundanu Temple of Bedugul tour on Private car.",
        "Git Git Waterfall on Private car.",
        "Tanah Lot Temple on Private car.",
      ],
      exclusions: [
        "International Tourism Levy of IDR 150000 per person.",
        "Visa on Arrival: USD 35 per person.",
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
      overviewData: {
        title: "Package Overview",
        content: "Immerse yourself in the beauty of Bali with our 6-day holiday package. Spend 4 nights in vibrant Kuta, known for its golden beaches, lively nightlife, and cultural attractions. Then, retreat to Ubud for 2 nights, the heart of Bali’s serene landscapes, lush rice terraces, and artistic heritage. This package combines relaxation, adventure, and culture, offering an unforgettable experience in one of the world’s most captivating destinations.",
      },
      reviews: "7 Reviews",
      duration: "7 Days",
      country: "Indonesia",
      cities: "Bali, Ubud",
      tableData: {
        tab1: [
          {
            city: "Kuta",
            star4: "Swiss-Belhotel Rainforest, Kuta\nThe One Legion\nGolden Tulip Jineng Resort",
            star5: "Bintang Bali Resort\nRoyal Tulip Springhill Resort\nPullman Bali Legian Beach",
          },
          {
            city: "Ubud",
            star4: "Alam Puisi Ubud\nAshoka Tree Resort Ubud\nBhumi Linggah",
            star5: "Asvara Villa Ubud\nFuramaXclusive Resort & Villas\nHideaway Village Bali",
          },
          {
            label: "Cost per Adult",
            cost4: "₹35,000",
            cost5: "₹44,000",
          },
        ],
        tab2: [
          {
            city: "Kuta",
            star4: "Swiss-Belhotel Rainforest, Kuta\nThe One Legion\nGolden Tulip Jineng Resort",
            star5: "Bintang Bali Resort\nRoyal Tulip Springhill Resort\nPullman Bali Legian Beach",
          },
          {
            city: "Ubud",
            star4: "Alam Puisi Ubud\nAshoka Tree Resort Ubud\nBhumi Linggah",
            star5: "Asvara Villa Ubud\nFuramaXclusive Resort & Villas\nHideaway Village Bali",
          },
          {
            label: "Cost per Adult",
            cost4: "₹65,500",
            cost5: "₹75,000",
          },
        ],
        tab3: [
          { name: "ATV Quad Bike & White Water Rafting Adventure", costPerAdult: "₹5000/-" },
          { name: "Bali Safari with Marine Park & Jungle Hopper Pass", costPerAdult: "₹6000/-" },
          { name: "Candle Light Dinner", costPerAdult: "₹3000/-" },
        ],
      }, // ✅ Closing
    },
    bali2: {
      packageId: "S04390",
      packageName: "Bali with gilli",
      totalGuests: 2,
      nights: 6,
      days: 7,
      startCity: "Mumbai",
      destinationCovered: "Bali",
      totalPackagePrice: "INR 70,000",
     
      packageImage:
        "https://plus.unsplash.com/premium_photo-1661955632358-85564b2810b2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
        itinerary: [
          { " Day 1: Arrival in Bali & Transfer to Hotel": ["Welcome to Bali! Today is the First day of your trip you will arrive at Denpasar Bali airport and will be transferred to your hotel in Bali. Your first day's schedule depends on the flight arrival time. Usually, this day will be free for you at leisure. Overnight stay at Hotel accommodation"] },
          { "Day 2: Benoa Water Sports": ["Experience a water-filled adventure at Benoa Bay with an exciting. An ideal Bali is incomplete without Bali Water Sport at famous Tanjung Benoa Beach. This beach based know for each aquatic adventure is located in the benoa peninsula far away from the Hustle and bustle. watersport with Banana Boat, Parasailing, Jet Ski."] },
          { " Day 3: Uluwatu Sunset Tour with Kecak Dance": ["Visit the beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. The beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. Post sunset witness the Kecak and Fire Dance - Completely dramatic. Originally from Ramayana this show depicts the famous ‘Lanka Dahan’ episode wherein Hanuman sets fire to the kingdom of Ravana. The enthralling ‘kecak, kecak’ chant is the USP."] },
          { " Day 4: Full-Day West Nusa Penida Tour": ["You will be taken to witness Tegalalang Rice Terraces - probably the busiest and most famous waterfall in Bali, and it’s super easy to reach from Ubud. It only takes about 15 minutes to hike down the steps to the waterfall, but the way back up is a good workout with a lot of humidity and uneven stone steps (the steps feel like they were made for giants!)."] },
          { "Day 5: Ubud Exploration & Scenic Attractions": ["The Ubud Art Market is a great place to find beautiful silk scarves, lightweight shirts, statues, kites, handmade woven bags, baskets or hats and many other hand-crafted goods. Locally known as Pasar Seni Ubud, the market is opposite the Puri Saren Royal Ubud Palace and opens daily. Most of the goods found at the Ubud Market are made in the neighbouring villages of Pengosekan, Tegallalang, Payangan and Peliatan. The location of the Ubud Art Market, which is centred among the art producing villages and at the centre of Ubud itself, makes it a strategic shopping place for Balinese handicrafts and souvenirs."] },
          { "Day 6: Relax & Explore Bali at Your Own Pace": ["Day at Leisure Day free at leisure, enjoy by your own."] },
          { "Day 7: Departure – Bali to Denpasar Airport": ["Take a bag full of memories to cherish | Check out from the hotel and meet the representative who will take you to the Denpasar airport to board board your return flight back home."] },
        ],
      hotelsPricing: {
        "4Star": [
          { city: "Kuta - 4N Deluxe Room", hotels: ["Swiss-Belhotel Rainforest Kuta", "The One Legion", "Golden Tulip Jineng Resort", "Kuta Central"] },
          { city: "Ubud - 2N One Bedroom with Private Pool Villa", hotels: ["Alam Puisi Ubud", "Ashoka Tree Resort Ubud", "Bhumi Linggah", "Ubud Heaven Sayan"] },
        ],
        "5Star": [
          { city: "Kuta - 4N Deluxe Room", hotels: ["Bintang Bali Resort", "Royal Tulip Springhill Resort", "Pullman Bali Legian Beach"] },
          { city: "Ubud - 2N One Bedroom with Private Pool Villa", hotels: ["Asvara Villa Ubud", "FuramaXclusive Resort & Villas", "Hideaway Village Bali"] },
        ],
      },
      optionalActivities: [
        { name: "ATV Quad Bike & White Water Rafting Adventure", costPerAdult: "₹ 5000 /-" },
        { name: "Bali Safari with Marine Park & Jungle Hopper Pass", costPerAdult: "₹ 6000 /-" },
        { name: "Candle Light Dinner", costPerAdult: "₹ 3000 /-" },
        { name: "Lempuyang Temple, Tirta Gangga & Waterfall Tour", costPerAdult: "₹ 2960 /-" },
        { name: "Floating Breakfast", costPerAdult: "₹ 2500 /- per couple" },
      ],
      inclusions: [
        "Arrival in Bali Denpasar and transfer to hotel by private car.",
        "Benoa Water Sports - By Private Car.",
        "Uluwatu Sunset Tour with Kecak Dance on Private car.",
        "Ulundanu Temple of Bedugul tour on Private car.",
        "Git Git Waterfall on Private car.",
        "Tanah Lot Temple on Private car.",
      ],
      exclusions: [
        "International Tourism Levy of IDR 150000 per person.",
        "Visa on Arrival: USD 35 per person.",
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
      overviewData: {
        title: "Package Overview",
        content: "Immerse yourself in the beauty of Bali with our 6-day holiday package. Spend 4 nights in vibrant Kuta, known for its golden beaches, lively nightlife, and cultural attractions. Then, retreat to Ubud for 2 nights, the heart of Bali’s serene landscapes, lush rice terraces, and artistic heritage. This package combines relaxation, adventure, and culture, offering an unforgettable experience in one of the world’s most captivating destinations.",
      },
      reviews: "7 Reviews",
      duration: "7 Days",
      country: "Indonesia",
      cities: "Bali, Ubud",
    },
    bali3: {
      packageId: "S04390",
      packageName: "Bali essense",
      totalGuests: 2,
      nights: 6,
      days: 7,
      startCity: "Mumbai",
      destinationCovered: "Bali",
      totalPackagePrice: "INR 70,000",
 
      packageImage:
        "https://plus.unsplash.com/premium_photo-1661955632358-85564b2810b2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
        itinerary: [
          { " Day 1: Arrival in Bali & Transfer to Hotel": ["Welcome to Bali! Today is the First day of your trip you will arrive at Denpasar Bali airport and will be transferred to your hotel in Bali. Your first day's schedule depends on the flight arrival time. Usually, this day will be free for you at leisure. Overnight stay at Hotel accommodation"] },
          { "Day 2: Benoa Water Sports": ["Experience a water-filled adventure at Benoa Bay with an exciting. An ideal Bali is incomplete without Bali Water Sport at famous Tanjung Benoa Beach. This beach based know for each aquatic adventure is located in the benoa peninsula far away from the Hustle and bustle. watersport with Banana Boat, Parasailing, Jet Ski."] },
          { " Day 3: Uluwatu Sunset Tour with Kecak Dance": ["Visit the beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. The beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. Post sunset witness the Kecak and Fire Dance - Completely dramatic. Originally from Ramayana this show depicts the famous ‘Lanka Dahan’ episode wherein Hanuman sets fire to the kingdom of Ravana. The enthralling ‘kecak, kecak’ chant is the USP."] },
          { " Day 4: Full-Day West Nusa Penida Tour": ["You will be taken to witness Tegalalang Rice Terraces - probably the busiest and most famous waterfall in Bali, and it’s super easy to reach from Ubud. It only takes about 15 minutes to hike down the steps to the waterfall, but the way back up is a good workout with a lot of humidity and uneven stone steps (the steps feel like they were made for giants!)."] },
          { "Day 5: Ubud Exploration & Scenic Attractions": ["The Ubud Art Market is a great place to find beautiful silk scarves, lightweight shirts, statues, kites, handmade woven bags, baskets or hats and many other hand-crafted goods. Locally known as Pasar Seni Ubud, the market is opposite the Puri Saren Royal Ubud Palace and opens daily. Most of the goods found at the Ubud Market are made in the neighbouring villages of Pengosekan, Tegallalang, Payangan and Peliatan. The location of the Ubud Art Market, which is centred among the art producing villages and at the centre of Ubud itself, makes it a strategic shopping place for Balinese handicrafts and souvenirs."] },
          { "Day 6: Relax & Explore Bali at Your Own Pace": ["Day at Leisure Day free at leisure, enjoy by your own."] },
          { "Day 7: Departure – Bali to Denpasar Airport": ["Take a bag full of memories to cherish | Check out from the hotel and meet the representative who will take you to the Denpasar airport to board board your return flight back home."] },
        ],
      hotelsPricing: {
        "4Star": [
          { city: "Kuta - 4N Deluxe Room", hotels: ["Swiss-Belhotel Rainforest Kuta", "The One Legion", "Golden Tulip Jineng Resort", "Kuta Central"] },
          { city: "Ubud - 2N One Bedroom with Private Pool Villa", hotels: ["Alam Puisi Ubud", "Ashoka Tree Resort Ubud", "Bhumi Linggah", "Ubud Heaven Sayan"] },
        ],
        "5Star": [
          { city: "Kuta - 4N Deluxe Room", hotels: ["Bintang Bali Resort", "Royal Tulip Springhill Resort", "Pullman Bali Legian Beach"] },
          { city: "Ubud - 2N One Bedroom with Private Pool Villa", hotels: ["Asvara Villa Ubud", "FuramaXclusive Resort & Villas", "Hideaway Village Bali"] },
        ],
      },
      overviewData: {
        title: "Package Overview",
        content: "Enjoy a 6N7D adventure in Bali and Nusa Penida with scenic views and luxury accommodations.",
      },
      reviews: "7 Reviews",
      duration: "7 Days",
      country: "Indonesia",
      cities: "Bali, Ubud",
      optionalActivities: [
        { name: "ATV Quad Bike & White Water Rafting Adventure", costPerAdult: "₹ 5000 /-" },
        { name: "Bali Safari with Marine Park & Jungle Hopper Pass", costPerAdult: "₹ 6000 /-" },
        { name: "Candle Light Dinner", costPerAdult: "₹ 3000 /-" },
        { name: "Lempuyang Temple, Tirta Gangga & Waterfall Tour", costPerAdult: "₹ 2960 /-" },
        { name: "Floating Breakfast", costPerAdult: "₹ 2500 /- per couple" },
      ],
      inclusions: [
        "Arrival in Bali Denpasar and transfer to hotel by private car.",
        "Benoa Water Sports - By Private Car.",
        "Uluwatu Sunset Tour with Kecak Dance on Private car.",
        "Ulundanu Temple of Bedugul tour on Private car.",
        "Git Git Waterfall on Private car.",
        "Tanah Lot Temple on Private car.",
      ],
      exclusions: [
        "International Tourism Levy of IDR 150000 per person.",
        "Visa on Arrival: USD 35 per person.",
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
    },
    bali4: {
      packageId: "S04390",
      packageName: "Enchanting bali",
      totalGuests: 2,
      nights: 6,
      days: 7,
      overviewData: {
        title: "Package Overview",
        content: "Enjoy a 6N7D adventure in Bali and Nusa Penida with scenic views and luxury accommodations.",
      },
      reviews: "7 Reviews",
      duration: "7 Days",
      country: "Indonesia",
      cities: "Bali, Ubud",
      startCity: "Mumbai",
      destinationCovered: "Bali",
      totalPackagePrice: "INR 70,000",
 
      packageImage:
        "https://plus.unsplash.com/premium_photo-1661955632358-85564b2810b2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
        itinerary: [
          { " Day 1: Arrival in Bali & Transfer to Hotel": ["Welcome to Bali! Today is the First day of your trip you will arrive at Denpasar Bali airport and will be transferred to your hotel in Bali. Your first day's schedule depends on the flight arrival time. Usually, this day will be free for you at leisure. Overnight stay at Hotel accommodation"] },
          { "Day 2: Benoa Water Sports": ["Experience a water-filled adventure at Benoa Bay with an exciting. An ideal Bali is incomplete without Bali Water Sport at famous Tanjung Benoa Beach. This beach based know for each aquatic adventure is located in the benoa peninsula far away from the Hustle and bustle. watersport with Banana Boat, Parasailing, Jet Ski."] },
          { " Day 3: Uluwatu Sunset Tour with Kecak Dance": ["Visit the beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. The beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. Post sunset witness the Kecak and Fire Dance - Completely dramatic. Originally from Ramayana this show depicts the famous ‘Lanka Dahan’ episode wherein Hanuman sets fire to the kingdom of Ravana. The enthralling ‘kecak, kecak’ chant is the USP."] },
          { " Day 4: Full-Day West Nusa Penida Tour": ["You will be taken to witness Tegalalang Rice Terraces - probably the busiest and most famous waterfall in Bali, and it’s super easy to reach from Ubud. It only takes about 15 minutes to hike down the steps to the waterfall, but the way back up is a good workout with a lot of humidity and uneven stone steps (the steps feel like they were made for giants!)."] },
          { "Day 5: Ubud Exploration & Scenic Attractions": ["The Ubud Art Market is a great place to find beautiful silk scarves, lightweight shirts, statues, kites, handmade woven bags, baskets or hats and many other hand-crafted goods. Locally known as Pasar Seni Ubud, the market is opposite the Puri Saren Royal Ubud Palace and opens daily. Most of the goods found at the Ubud Market are made in the neighbouring villages of Pengosekan, Tegallalang, Payangan and Peliatan. The location of the Ubud Art Market, which is centred among the art producing villages and at the centre of Ubud itself, makes it a strategic shopping place for Balinese handicrafts and souvenirs."] },
          { "Day 6: Relax & Explore Bali at Your Own Pace": ["Day at Leisure Day free at leisure, enjoy by your own."] },
          { "Day 7: Departure – Bali to Denpasar Airport": ["Take a bag full of memories to cherish | Check out from the hotel and meet the representative who will take you to the Denpasar airport to board board your return flight back home."] },
        ],
      hotelsPricing: {
        "4Star": [
          { city: "Kuta - 4N Deluxe Room", hotels: ["Swiss-Belhotel Rainforest Kuta", "The One Legion", "Golden Tulip Jineng Resort", "Kuta Central"] },
          { city: "Ubud - 2N One Bedroom with Private Pool Villa", hotels: ["Alam Puisi Ubud", "Ashoka Tree Resort Ubud", "Bhumi Linggah", "Ubud Heaven Sayan"] },
        ],
        "5Star": [
          { city: "Kuta - 4N Deluxe Room", hotels: ["Bintang Bali Resort", "Royal Tulip Springhill Resort", "Pullman Bali Legian Beach"] },
          { city: "Ubud - 2N One Bedroom with Private Pool Villa", hotels: ["Asvara Villa Ubud", "FuramaXclusive Resort & Villas", "Hideaway Village Bali"] },
        ],
      },
      optionalActivities: [
        { name: "ATV Quad Bike & White Water Rafting Adventure", costPerAdult: "₹ 5000 /-" },
        { name: "Bali Safari with Marine Park & Jungle Hopper Pass", costPerAdult: "₹ 6000 /-" },
        { name: "Candle Light Dinner", costPerAdult: "₹ 3000 /-" },
        { name: "Lempuyang Temple, Tirta Gangga & Waterfall Tour", costPerAdult: "₹ 2960 /-" },
        { name: "Floating Breakfast", costPerAdult: "₹ 2500 /- per couple" },
      ],
      inclusions: [
        "Arrival in Bali Denpasar and transfer to hotel by private car.",
        "Benoa Water Sports - By Private Car.",
        "Uluwatu Sunset Tour with Kecak Dance on Private car.",
        "Ulundanu Temple of Bedugul tour on Private car.",
        "Git Git Waterfall on Private car.",
        "Tanah Lot Temple on Private car.",
      ],
      exclusions: [
        "International Tourism Levy of IDR 150000 per person.",
        "Visa on Arrival: USD 35 per person.",
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
    },

  },
  vietnam: {
    vietnam1: {
      packageId: "S04390",
      packageName: "vietnam highlights",
      totalGuests: 2,
      nights: 6,
      days: 7,
      startCity: "Mumbai",
      destinationCovered: "Bali",
      totalPackagePrice: "INR 70,000",
 
      packageImage:
        "https://plus.unsplash.com/premium_photo-1661955632358-85564b2810b2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
        itinerary: [
          { " Day 1: Arrival in Bali & Transfer to Hotel": ["Welcome to Bali! Today is the First day of your trip you will arrive at Denpasar Bali airport and will be transferred to your hotel in Bali. Your first day's schedule depends on the flight arrival time. Usually, this day will be free for you at leisure. Overnight stay at Hotel accommodation"] },
          { "Day 2: Benoa Water Sports": ["Experience a water-filled adventure at Benoa Bay with an exciting. An ideal Bali is incomplete without Bali Water Sport at famous Tanjung Benoa Beach. This beach based know for each aquatic adventure is located in the benoa peninsula far away from the Hustle and bustle. watersport with Banana Boat, Parasailing, Jet Ski."] },
          { " Day 3: Uluwatu Sunset Tour with Kecak Dance": ["Visit the beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. The beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. Post sunset witness the Kecak and Fire Dance - Completely dramatic. Originally from Ramayana this show depicts the famous ‘Lanka Dahan’ episode wherein Hanuman sets fire to the kingdom of Ravana. The enthralling ‘kecak, kecak’ chant is the USP."] },
          { " Day 4: Full-Day West Nusa Penida Tour": ["You will be taken to witness Tegalalang Rice Terraces - probably the busiest and most famous waterfall in Bali, and it’s super easy to reach from Ubud. It only takes about 15 minutes to hike down the steps to the waterfall, but the way back up is a good workout with a lot of humidity and uneven stone steps (the steps feel like they were made for giants!)."] },
          { "Day 5: Ubud Exploration & Scenic Attractions": ["The Ubud Art Market is a great place to find beautiful silk scarves, lightweight shirts, statues, kites, handmade woven bags, baskets or hats and many other hand-crafted goods. Locally known as Pasar Seni Ubud, the market is opposite the Puri Saren Royal Ubud Palace and opens daily. Most of the goods found at the Ubud Market are made in the neighbouring villages of Pengosekan, Tegallalang, Payangan and Peliatan. The location of the Ubud Art Market, which is centred among the art producing villages and at the centre of Ubud itself, makes it a strategic shopping place for Balinese handicrafts and souvenirs."] },
          { "Day 6: Relax & Explore Bali at Your Own Pace": ["Day at Leisure Day free at leisure, enjoy by your own."] },
          { "Day 7: Departure – Bali to Denpasar Airport": ["Take a bag full of memories to cherish | Check out from the hotel and meet the representative who will take you to the Denpasar airport to board board your return flight back home."] },
        ],
        overviewData: {
          title: "Package Overview",
          content: "Enjoy a 6N7D adventure in Bali and Nusa Penida with scenic views and luxury accommodations.",
        },
        reviews: "7 Reviews",
        duration: "7 Days",
        country: "Indonesia",
        cities: "Bali, Ubud",
      hotelsPricing: {
        "4Star": [
          { city: "Kuta - 4N Deluxe Room", hotels: ["Swiss-Belhotel Rainforest Kuta", "The One Legion", "Golden Tulip Jineng Resort", "Kuta Central"] },
          { city: "Ubud - 2N One Bedroom with Private Pool Villa", hotels: ["Alam Puisi Ubud", "Ashoka Tree Resort Ubud", "Bhumi Linggah", "Ubud Heaven Sayan"] },
        ],
        "5Star": [
          { city: "Kuta - 4N Deluxe Room", hotels: ["Bintang Bali Resort", "Royal Tulip Springhill Resort", "Pullman Bali Legian Beach"] },
          { city: "Ubud - 2N One Bedroom with Private Pool Villa", hotels: ["Asvara Villa Ubud", "FuramaXclusive Resort & Villas", "Hideaway Village Bali"] },
        ],
      },
      optionalActivities: [
        { name: "ATV Quad Bike & White Water Rafting Adventure", costPerAdult: "₹ 5000 /-" },
        { name: "Bali Safari with Marine Park & Jungle Hopper Pass", costPerAdult: "₹ 6000 /-" },
        { name: "Candle Light Dinner", costPerAdult: "₹ 3000 /-" },
        { name: "Lempuyang Temple, Tirta Gangga & Waterfall Tour", costPerAdult: "₹ 2960 /-" },
        { name: "Floating Breakfast", costPerAdult: "₹ 2500 /- per couple" },
      ],
      inclusions: [
        "Arrival in Bali Denpasar and transfer to hotel by private car.",
        "Benoa Water Sports - By Private Car.",
        "Uluwatu Sunset Tour with Kecak Dance on Private car.",
        "Ulundanu Temple of Bedugul tour on Private car.",
        "Git Git Waterfall on Private car.",
        "Tanah Lot Temple on Private car.",
      ],
      exclusions: [
        "International Tourism Levy of IDR 150000 per person.",
        "Visa on Arrival: USD 35 per person.",
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
    },
    vietnam2: {
      packageId: "S04390",
      packageName: "vietnam package 1",
      totalGuests: 2,
      nights: 6,
      days: 7,
      overviewData: {
        title: "Package Overview",
        content: "Enjoy a 6N7D adventure in Bali and Nusa Penida with scenic views and luxury accommodations.",
      },
      reviews: "7 Reviews",
      duration: "7 Days",
      country: "Indonesia",
      cities: "Bali, Ubud",
      startCity: "Mumbai",
      destinationCovered: "Bali",
      totalPackagePrice: "INR 70,000",
 
      packageImage:
        "https://plus.unsplash.com/premium_photo-1661955632358-85564b2810b2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
        itinerary: [
          { " Day 1: Arrival in Bali & Transfer to Hotel": ["Welcome to Bali! Today is the First day of your trip you will arrive at Denpasar Bali airport and will be transferred to your hotel in Bali. Your first day's schedule depends on the flight arrival time. Usually, this day will be free for you at leisure. Overnight stay at Hotel accommodation"] },
          { "Day 2: Benoa Water Sports": ["Experience a water-filled adventure at Benoa Bay with an exciting. An ideal Bali is incomplete without Bali Water Sport at famous Tanjung Benoa Beach. This beach based know for each aquatic adventure is located in the benoa peninsula far away from the Hustle and bustle. watersport with Banana Boat, Parasailing, Jet Ski."] },
          { " Day 3: Uluwatu Sunset Tour with Kecak Dance": ["Visit the beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. The beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. Post sunset witness the Kecak and Fire Dance - Completely dramatic. Originally from Ramayana this show depicts the famous ‘Lanka Dahan’ episode wherein Hanuman sets fire to the kingdom of Ravana. The enthralling ‘kecak, kecak’ chant is the USP."] },
          { " Day 4: Full-Day West Nusa Penida Tour": ["You will be taken to witness Tegalalang Rice Terraces - probably the busiest and most famous waterfall in Bali, and it’s super easy to reach from Ubud. It only takes about 15 minutes to hike down the steps to the waterfall, but the way back up is a good workout with a lot of humidity and uneven stone steps (the steps feel like they were made for giants!)."] },
          { "Day 5: Ubud Exploration & Scenic Attractions": ["The Ubud Art Market is a great place to find beautiful silk scarves, lightweight shirts, statues, kites, handmade woven bags, baskets or hats and many other hand-crafted goods. Locally known as Pasar Seni Ubud, the market is opposite the Puri Saren Royal Ubud Palace and opens daily. Most of the goods found at the Ubud Market are made in the neighbouring villages of Pengosekan, Tegallalang, Payangan and Peliatan. The location of the Ubud Art Market, which is centred among the art producing villages and at the centre of Ubud itself, makes it a strategic shopping place for Balinese handicrafts and souvenirs."] },
          { "Day 6: Relax & Explore Bali at Your Own Pace": ["Day at Leisure Day free at leisure, enjoy by your own."] },
          { "Day 7: Departure – Bali to Denpasar Airport": ["Take a bag full of memories to cherish | Check out from the hotel and meet the representative who will take you to the Denpasar airport to board board your return flight back home."] },
        ],
      hotelsPricing: {
        "4Star": [
          { city: "Kuta - 4N Deluxe Room", hotels: ["Swiss-Belhotel Rainforest Kuta", "The One Legion", "Golden Tulip Jineng Resort", "Kuta Central"] },
          { city: "Ubud - 2N One Bedroom with Private Pool Villa", hotels: ["Alam Puisi Ubud", "Ashoka Tree Resort Ubud", "Bhumi Linggah", "Ubud Heaven Sayan"] },
        ],
        "5Star": [
          { city: "Kuta - 4N Deluxe Room", hotels: ["Bintang Bali Resort", "Royal Tulip Springhill Resort", "Pullman Bali Legian Beach"] },
          { city: "Ubud - 2N One Bedroom with Private Pool Villa", hotels: ["Asvara Villa Ubud", "FuramaXclusive Resort & Villas", "Hideaway Village Bali"] },
        ],
      },
      optionalActivities: [
        { name: "ATV Quad Bike & White Water Rafting Adventure", costPerAdult: "₹ 5000 /-" },
        { name: "Bali Safari with Marine Park & Jungle Hopper Pass", costPerAdult: "₹ 6000 /-" },
        { name: "Candle Light Dinner", costPerAdult: "₹ 3000 /-" },
        { name: "Lempuyang Temple, Tirta Gangga & Waterfall Tour", costPerAdult: "₹ 2960 /-" },
        { name: "Floating Breakfast", costPerAdult: "₹ 2500 /- per couple" },
      ],
      inclusions: [
        "Arrival in Bali Denpasar and transfer to hotel by private car.",
        "Benoa Water Sports - By Private Car.",
        "Uluwatu Sunset Tour with Kecak Dance on Private car.",
        "Ulundanu Temple of Bedugul tour on Private car.",
        "Git Git Waterfall on Private car.",
        "Tanah Lot Temple on Private car.",
      ],
      exclusions: [
        "International Tourism Levy of IDR 150000 per person.",
        "Visa on Arrival: USD 35 per person.",
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
    },
    vietnam3: {
      packageId: "S04390",
      packageName: "vietnam package 1",
      totalGuests: 2,
      nights: 6,
      days: 7,
      startCity: "Mumbai",
      destinationCovered: "Bali",
      totalPackagePrice: "INR 70,000",
      overviewData: {
        title: "Package Overview",
        content: "Enjoy a 6N7D adventure in Bali and Nusa Penida with scenic views and luxury accommodations.",
      },
      reviews: "7 Reviews",
      duration: "7 Days",
      country: "Indonesia",
      cities: "Bali, Ubud",
      packageImage:
        "https://plus.unsplash.com/premium_photo-1661955632358-85564b2810b2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
        itinerary: [
          { " Day 1: Arrival in Bali & Transfer to Hotel": ["Welcome to Bali! Today is the First day of your trip you will arrive at Denpasar Bali airport and will be transferred to your hotel in Bali. Your first day's schedule depends on the flight arrival time. Usually, this day will be free for you at leisure. Overnight stay at Hotel accommodation"] },
          { "Day 2: Benoa Water Sports": ["Experience a water-filled adventure at Benoa Bay with an exciting. An ideal Bali is incomplete without Bali Water Sport at famous Tanjung Benoa Beach. This beach based know for each aquatic adventure is located in the benoa peninsula far away from the Hustle and bustle. watersport with Banana Boat, Parasailing, Jet Ski."] },
          { " Day 3: Uluwatu Sunset Tour with Kecak Dance": ["Visit the beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. The beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. Post sunset witness the Kecak and Fire Dance - Completely dramatic. Originally from Ramayana this show depicts the famous ‘Lanka Dahan’ episode wherein Hanuman sets fire to the kingdom of Ravana. The enthralling ‘kecak, kecak’ chant is the USP."] },
          { " Day 4: Full-Day West Nusa Penida Tour": ["You will be taken to witness Tegalalang Rice Terraces - probably the busiest and most famous waterfall in Bali, and it’s super easy to reach from Ubud. It only takes about 15 minutes to hike down the steps to the waterfall, but the way back up is a good workout with a lot of humidity and uneven stone steps (the steps feel like they were made for giants!)."] },
          { "Day 5: Ubud Exploration & Scenic Attractions": ["The Ubud Art Market is a great place to find beautiful silk scarves, lightweight shirts, statues, kites, handmade woven bags, baskets or hats and many other hand-crafted goods. Locally known as Pasar Seni Ubud, the market is opposite the Puri Saren Royal Ubud Palace and opens daily. Most of the goods found at the Ubud Market are made in the neighbouring villages of Pengosekan, Tegallalang, Payangan and Peliatan. The location of the Ubud Art Market, which is centred among the art producing villages and at the centre of Ubud itself, makes it a strategic shopping place for Balinese handicrafts and souvenirs."] },
          { "Day 6: Relax & Explore Bali at Your Own Pace": ["Day at Leisure Day free at leisure, enjoy by your own."] },
          { "Day 7: Departure – Bali to Denpasar Airport": ["Take a bag full of memories to cherish | Check out from the hotel and meet the representative who will take you to the Denpasar airport to board board your return flight back home."] },
        ],
      hotelsPricing: {
        "4Star": [
          { city: "Kuta - 4N Deluxe Room", hotels: ["Swiss-Belhotel Rainforest Kuta", "The One Legion", "Golden Tulip Jineng Resort", "Kuta Central"] },
          { city: "Ubud - 2N One Bedroom with Private Pool Villa", hotels: ["Alam Puisi Ubud", "Ashoka Tree Resort Ubud", "Bhumi Linggah", "Ubud Heaven Sayan"] },
        ],
        "5Star": [
          { city: "Kuta - 4N Deluxe Room", hotels: ["Bintang Bali Resort", "Royal Tulip Springhill Resort", "Pullman Bali Legian Beach"] },
          { city: "Ubud - 2N One Bedroom with Private Pool Villa", hotels: ["Asvara Villa Ubud", "FuramaXclusive Resort & Villas", "Hideaway Village Bali"] },
        ],
      },
      optionalActivities: [
        { name: "ATV Quad Bike & White Water Rafting Adventure", costPerAdult: "₹ 5000 /-" },
        { name: "Bali Safari with Marine Park & Jungle Hopper Pass", costPerAdult: "₹ 6000 /-" },
        { name: "Candle Light Dinner", costPerAdult: "₹ 3000 /-" },
        { name: "Lempuyang Temple, Tirta Gangga & Waterfall Tour", costPerAdult: "₹ 2960 /-" },
        { name: "Floating Breakfast", costPerAdult: "₹ 2500 /- per couple" },
      ],
      inclusions: [
        "Arrival in Bali Denpasar and transfer to hotel by private car.",
        "Benoa Water Sports - By Private Car.",
        "Uluwatu Sunset Tour with Kecak Dance on Private car.",
        "Ulundanu Temple of Bedugul tour on Private car.",
        "Git Git Waterfall on Private car.",
        "Tanah Lot Temple on Private car.",
      ],
      exclusions: [
        "International Tourism Levy of IDR 150000 per person.",
        "Visa on Arrival: USD 35 per person.",
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
    },
    vietnam4: {
      packageId: "S04390",
      packageName: "vietnam package 1",
      totalGuests: 2,
      nights: 6,
      days: 7,
      startCity: "Mumbai",
      destinationCovered: "Bali",
      totalPackagePrice: "INR 70,000",
      overviewData: {
        title: "Package Overview",
        content: "Enjoy a 6N7D adventure in Bali and Nusa Penida with scenic views and luxury accommodations.",
      },
      reviews: "7 Reviews",
      duration: "7 Days",
      country: "Indonesia",
      cities: "Bali, Ubud",
      packageImage:
        "https://plus.unsplash.com/premium_photo-1661955632358-85564b2810b2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
        itinerary: [
          { " Day 1: Arrival in Bali & Transfer to Hotel": ["Welcome to Bali! Today is the First day of your trip you will arrive at Denpasar Bali airport and will be transferred to your hotel in Bali. Your first day's schedule depends on the flight arrival time. Usually, this day will be free for you at leisure. Overnight stay at Hotel accommodation"] },
          { "Day 2: Benoa Water Sports": ["Experience a water-filled adventure at Benoa Bay with an exciting. An ideal Bali is incomplete without Bali Water Sport at famous Tanjung Benoa Beach. This beach based know for each aquatic adventure is located in the benoa peninsula far away from the Hustle and bustle. watersport with Banana Boat, Parasailing, Jet Ski."] },
          { " Day 3: Uluwatu Sunset Tour with Kecak Dance": ["Visit the beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. The beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. Post sunset witness the Kecak and Fire Dance - Completely dramatic. Originally from Ramayana this show depicts the famous ‘Lanka Dahan’ episode wherein Hanuman sets fire to the kingdom of Ravana. The enthralling ‘kecak, kecak’ chant is the USP."] },
          { " Day 4: Full-Day West Nusa Penida Tour": ["You will be taken to witness Tegalalang Rice Terraces - probably the busiest and most famous waterfall in Bali, and it’s super easy to reach from Ubud. It only takes about 15 minutes to hike down the steps to the waterfall, but the way back up is a good workout with a lot of humidity and uneven stone steps (the steps feel like they were made for giants!)."] },
          { "Day 5: Ubud Exploration & Scenic Attractions": ["The Ubud Art Market is a great place to find beautiful silk scarves, lightweight shirts, statues, kites, handmade woven bags, baskets or hats and many other hand-crafted goods. Locally known as Pasar Seni Ubud, the market is opposite the Puri Saren Royal Ubud Palace and opens daily. Most of the goods found at the Ubud Market are made in the neighbouring villages of Pengosekan, Tegallalang, Payangan and Peliatan. The location of the Ubud Art Market, which is centred among the art producing villages and at the centre of Ubud itself, makes it a strategic shopping place for Balinese handicrafts and souvenirs."] },
          { "Day 6: Relax & Explore Bali at Your Own Pace": ["Day at Leisure Day free at leisure, enjoy by your own."] },
          { "Day 7: Departure – Bali to Denpasar Airport": ["Take a bag full of memories to cherish | Check out from the hotel and meet the representative who will take you to the Denpasar airport to board board your return flight back home."] },
        ],
      hotelsPricing: {
        "4Star": [
          { city: "Kuta - 4N Deluxe Room", hotels: ["Swiss-Belhotel Rainforest Kuta", "The One Legion", "Golden Tulip Jineng Resort", "Kuta Central"] },
          { city: "Ubud - 2N One Bedroom with Private Pool Villa", hotels: ["Alam Puisi Ubud", "Ashoka Tree Resort Ubud", "Bhumi Linggah", "Ubud Heaven Sayan"] },
        ],
        "5Star": [
          { city: "Kuta - 4N Deluxe Room", hotels: ["Bintang Bali Resort", "Royal Tulip Springhill Resort", "Pullman Bali Legian Beach"] },
          { city: "Ubud - 2N One Bedroom with Private Pool Villa", hotels: ["Asvara Villa Ubud", "FuramaXclusive Resort & Villas", "Hideaway Village Bali"] },
        ],
      },
      optionalActivities: [
        { name: "ATV Quad Bike & White Water Rafting Adventure", costPerAdult: "₹ 5000 /-" },
        { name: "Bali Safari with Marine Park & Jungle Hopper Pass", costPerAdult: "₹ 6000 /-" },
        { name: "Candle Light Dinner", costPerAdult: "₹ 3000 /-" },
        { name: "Lempuyang Temple, Tirta Gangga & Waterfall Tour", costPerAdult: "₹ 2960 /-" },
        { name: "Floating Breakfast", costPerAdult: "₹ 2500 /- per couple" },
      ],
      inclusions: [
        "Arrival in Bali Denpasar and transfer to hotel by private car.",
        "Benoa Water Sports - By Private Car.",
        "Uluwatu Sunset Tour with Kecak Dance on Private car.",
        "Ulundanu Temple of Bedugul tour on Private car.",
        "Git Git Waterfall on Private car.",
        "Tanah Lot Temple on Private car.",
      ],
      exclusions: [
        "International Tourism Levy of IDR 150000 per person.",
        "Visa on Arrival: USD 35 per person.",
      ],
      termsConditions: ["All payment should be cleared at least 30 days before departure."],
      cancellationPolicy: {
        "30DaysOrMore": "25% of total cost",
        "29To20Days": "50% of total cost",
        "19DaysOrLess": "100% of total cost",
      },
    },

  },
};

export default Finaldata;
