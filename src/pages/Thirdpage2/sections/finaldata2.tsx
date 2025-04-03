import { ElementType, ReactElement } from "react";
import { Vietnam } from "../../../components/data";
import { Plane, Hotel, Utensils, Landmark, Bus } from "lucide-react";
interface PackageData {
  packageId: string;
  packageName: string;
  totalGuests: number;
  nights: number;
  days: number;
  theme: string;
  highlights: string | string[];
  destinationCovered: string;
  totalPackagePrice: string;
  packageImage: string;
  pricePerAdult?: string; // ✅ Optional
  itinerary: { [day: string]: string[] }[];
  includes?: { name: string; icon: ElementType }[];
  inclusions: string[];
  exclusions: string[];
  termsConditions: string[];
  cancellationPolicy: Record<string, string>; // ✅ Move this inside
  overviewData: {
    title: string;
    content: string;
  };
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

const Finaldata: Record<string, Record<string, PackageData>> = {
  bali: {
    //Ultimate Bali & Nusa Penida Adventure 6N7D
    bali1: {
      packageId: "S04390",
      packageName: "Ultimate Bali & Nusa Penida Adventure",
      totalGuests: 2,
      nights: 6,
      days: 7,
      theme: "Mumbai",
      destinationCovered: "Bali -- Kuta -- Ubud -- Nusa Penida",
      "highlights": [
        "Private Transport",
        "English speaking guide",
        "Nusa Penida Island Tour"
      ],
      totalPackagePrice: "INR 64,499",

    includes : [
        { name: "Flights", icon: Plane }, // ✅ Changed "Icon" to "icon"{ name: "Hotel", icon: Hotel },
        { name: "Meal", icon: Utensils },
        { name: "Sightseeing", icon: Landmark },
        { name: "Transfer", icon: Bus },
      ],
      

      packageImage:
        "https://www.travelwithcg.com/wp-content/uploads/2023/09/Kelingking-Beach-Nusa-Penida.jpg",
      itinerary: [
        { "Day 1: Arrival in Bali & Transfer to Hotel": ["Welcome to Bali! Today is the First day of your trip you will arrive at Denpasar Bali airport and will be transferred to your hotel in Bali. Your first day's schedule depends on the flight arrival time. Usually, this day will be free for you at leisure. Overnight stay at Hotel accommodation"] },
        { "Day 2: Benoa Water Sports": ["Experience a water-filled adventure at Benoa Bay with an exciting. An ideal Bali is incomplete without Bali Water Sport at famous Tanjung Benoa Beach. This beach based know for each aquatic adventure is located in the benoa peninsula far away from the Hustle and bustle. watersport with Banana Boat, Parasailing, Jet Ski."] },
        { " Day 3: Uluwatu Sunset Tour with Kecak Dance": ["Visit the beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. The beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. Post sunset witness the Kecak and Fire Dance - Completely dramatic. Originally from Ramayana this show depicts the famous ‘Lanka Dahan’ episode wherein Hanuman sets fire to the kingdom of Ravana. The enthralling ‘kecak, kecak’ chant is the USP."] },
        { " Day 4: Full-Day West Nusa Penida Tour": ["You will be taken to witness Tegalalang Rice Terraces - probably the busiest and most famous waterfall in Bali, and it’s super easy to reach from Ubud. It only takes about 15 minutes to hike down the steps to the waterfall, but the way back up is a good workout with a lot of humidity and uneven stone steps (the steps feel like they were made for giants!)."] },
        { "Day 5: Ubud Exploration & Scenic Attractions": ["The Ubud Art Market is a great place to find beautiful silk scarves, lightweight shirts, statues, kites, handmade woven bags, baskets or hats and many other hand-crafted goods. Locally known as Pasar Seni Ubud, the market is opposite the Puri Saren Royal Ubud Palace and opens daily. Most of the goods found at the Ubud Market are made in the neighbouring villages of Pengosekan, Tegallalang, Payangan and Peliatan. The location of the Ubud Art Market, which is centred among the art producing villages and at the centre of Ubud itself, makes it a strategic shopping place for Balinese handicrafts and souvenirs."] },
        { "Day 6: Relax & Explore Bali at Your Own Pace": ["Day at Leisure Day free at leisure, enjoy by your own."] },

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
        content: "Enjoy 6 days in Bali with 4 nights in Kuta for beaches & nightlife, and 2 nights in Ubud for nature & culture. A perfect mix of adventure and relaxation! 🌴✨",
      },
      duration: "6 Days",
      country: "Indonesia",
      cities: "Kuta, Ubud",
      tableData: {
        tab1: [
          {
            city: "Kuta",
            star4: "Swiss-Belhotel Rainforest, Kuta\The One Legion\Golden Tulip Jineng Resort",
            star5: "Bintang Bali Resort\Royal Tulip Springhill Resort\Pullman Bali Legian Beach",
          },
          {
            city: "Ubud",
            star4: "Alam Puisi Ubud\nAshoka Tree Resort Ubud\nBhumi Linggah",
            star5: "Asvara Villa Ubud\nFuramaXclusive Resort & Villas\nHideaway Village Bali",
          },
          {
            label: "Cost per Adult",
            cost4: "₹34,999",
            cost5: "₹43,999",
          },
        ],
        tab2: [
          {
            city: "Kuta",
            star4: "Swiss-Belhotel Rainforest, Kuta\The One Legion\Golden Tulip Jineng Resort",
            star5: "Bintang Bali Resort\Royal Tulip Springhill Resort\Pullman Bali Legian Beach",
          },
          {
            city: "Ubud",
            star4: "Alam Puisi Ubud\Ashoka Tree Resort Ubud\Bhumi Linggah",
            star5: "Asvara Villa Ubud\FuramaXclusive Resort & Villas\Hideaway Village Bali",
          },
          {
            label: "Cost per Adult",
            cost4: "₹64,499",
            cost5: "₹74,999",
          },
        ],
        tab3: [
          { name: "ATV Quad Bike & White Water Rafting Adventure", costPerAdult: "₹5000/-" },
          { name: "Bali Safari with Marine Park & Jungle Hopper Pass", costPerAdult: "₹6000/-" },
          { name: "Candle Light Dinner", costPerAdult: "₹3000/-" },
          { name: "Lempuyang Temple, Tirta Gangga & Waterfall Tour", costPerAdult: "₹2999/-" },
          { name: "Floating Breakfast", costPerAdult: "₹2499/-" },

        ],
      }, // ✅ Closing
    },
    bali2: {
      packageId: "S04390",
      packageName: "Bali with gili",
      totalGuests: 2,
      nights: 6,
      days: 7,
      theme: "Mumbai",
      destinationCovered: "Bali",
      highlights: "Private Transport English speaking guide, Nusa penida Iland Tour",
      totalPackagePrice: "INR 64,499",

      packageImage:
        "https://hoponworld.com/wp-content/uploads/2022/05/Gili-Meno-Lombok-indonesia-beach-1200x900.jpg",
      itinerary: [
        { " Day 1: Arrival in Bali & Transfer to Hotel": ["Welcome to Bali! Today is the First day of your trip you will arrive at Denpasar Bali airport and will be transferred to your hotel in Bali. Your first day's schedule depends on the flight arrival time. Usually, this day will be free for you at leisure. Overnight stay at Hotel accommodation"] },
        { "Day 2: Benoa Water Sports": ["Experience a water-filled adventure at Benoa Bay with an exciting. An ideal Bali is incomplete without Bali Water Sport at famous Tanjung Benoa Beach. This beach based know for each aquatic adventure is located in the benoa peninsula far away from the Hustle and bustle. watersport with Banana Boat, Parasailing, Jet Ski."] },
        { " Day 3: Uluwatu Sunset Tour with Kecak Dance": ["Visit the beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. The beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. Post sunset witness the Kecak and Fire Dance - Completely dramatic. Originally from Ramayana this show depicts the famous ‘Lanka Dahan’ episode wherein Hanuman sets fire to the kingdom of Ravana. The enthralling ‘kecak, kecak’ chant is the USP."] },
        { " Day 4: Full-Day West Nusa Penida Tour": ["You will be taken to witness Tegalalang Rice Terraces - probably the busiest and most famous waterfall in Bali, and it’s super easy to reach from Ubud. It only takes about 15 minutes to hike down the steps to the waterfall, but the way back up is a good workout with a lot of humidity and uneven stone steps (the steps feel like they were made for giants!)."] },
        { "Day 5: Ubud Exploration & Scenic Attractions": ["The Ubud Art Market is a great place to find beautiful silk scarves, lightweight shirts, statues, kites, handmade woven bags, baskets or hats and many other hand-crafted goods. Locally known as Pasar Seni Ubud, the market is opposite the Puri Saren Royal Ubud Palace and opens daily. Most of the goods found at the Ubud Market are made in the neighbouring villages of Pengosekan, Tegallalang, Payangan and Peliatan. The location of the Ubud Art Market, which is centred among the art producing villages and at the centre of Ubud itself, makes it a strategic shopping place for Balinese handicrafts and souvenirs."] },
        { "Day 6: Relax & Explore Bali at Your Own Pace": ["Day at Leisure Day free at leisure, enjoy by your own."] },
        { "Day 7: Departure – Bali to Denpasar Airport": ["Take a bag full of memories to cherish | Check out from the hotel and meet the representative who will take you to the Denpasar airport to board board your return flight back home."] },
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
        content: "Discover the best of Bali & Gili Islands with this 6-day package. Explore Ubud’s waterfalls, rice terraces, and temples, then relax on the Gili Islands with snorkeling, island hopping, and stunning sunsets. Return to Kuta/Seminyak for beach fun, water sports, and the Uluwatu Kecak Fire Dance. Perfect for couples and adventure seekers, this package includes luxury stays, private transfers, and curated experiences.🌴",
      },
      duration: "7 Days",
      country: "Indonesia",
      cities: "Kuta, Ubud",
      tableData: {
        tab1: [
          {
            city: "Kuta",
            star4: "Swiss-Belhotel Rainforest, Kuta\The One Legion\Golden Tulip Jineng Resort",
            star5: "Bintang Bali Resort/Royal Tulip Springhill Resort /Pullman Bali Legian Beach",
          },
          {
            city: "Ubud",
            star4: "Alam Puisi Ubud/Ashoka Tree Resort Ubud/ Bhumi Linggah/Ubud Heaven Sayan/",
            star5: "Asvara Villa Ubud/FuramaXclusive Resort & Villas/Hideaway village bali",
          },
          {
            label: "Cost per Adult",
            cost4: "₹25,499",
            cost5: "₹34,999",
          },
        ],
        tab2: [
          {
            city: "Kuta",
            star4: "Swiss-Belhotel Rainforest, Kuta\The One Legion\Golden Tulip Jineng Resort",
            star5: "Bintang Bali Resort\Royal Tulip Springhill Resort\Pullman Bali Legian Beach",
          },
          {
            city: "Ubud",
            star4: "Alam Puisi Ubud\Ashoka Tree Resort Ubud\Bhumi Linggah",
            star5: "Asvara Villa Ubud\FuramaXclusive Resort & Villas\Hideaway Village Bali",
          },
          {
            label: "Cost per Adult",
            cost4: "₹64,499",
            cost5: "₹74,999",
          },
        ],
        tab3: [
          { name: "ATV Quad Bike & White Water Rafting Adventure", costPerAdult: "₹4999/-" },
          { name: "Bali Safari with Marine Park & Jungle Hopper Pass", costPerAdult: "₹5999/-" },
          { name: "Candle Light Dinner", costPerAdult: "₹2999/-" },
          { name: "Lempuyang Temple, Tirta Gangga & Waterfall Tour", costPerAdult: "₹2999/-" },
          { name: "Nusa Penida Tour with Snorkelling", costPerAdult: "₹7799/-" },
          { name: "Floating Breakfast", costPerAdult: "₹2499/-" },

        ],
      },
    },
    bali3: {
      packageId: "S04390",
      packageName: "Island hopping Tour",
      totalGuests: 2,
      nights: 7,
      days: 8,
      theme: "Mumbai",
      destinationCovered: "Bali",
      highlights: "Private Transport English speaking guide, Nusa penida Iland Tour",
      totalPackagePrice: "INR 82,999",

      packageImage:
        "https://balipedia.com/wp-content/uploads/2023/03/Gili-Kedis-island-shutterstock.jpg",
      itinerary: [
        { " Day 1: Arrival in Bali & Transfer to Hotel": ["Welcome to Bali! Today is the First day of your trip you will arrive at Denpasar Bali airport and will be transferred to your hotel in Bali. Your first day's schedule depends on the flight arrival time. Usually, this day will be free for you at leisure. Overnight stay at Hotel accommodation"] },
        { "Day 2: Benoa Water Sports": ["Experience a water-filled adventure at Benoa Bay with an exciting. An ideal Bali is incomplete without Bali Water Sport at famous Tanjung Benoa Beach. This beach based know for each aquatic adventure is located in the benoa peninsula far away from the Hustle and bustle. watersport with Banana Boat, Parasailing, Jet Ski."] },
        { " Day 3: Uluwatu Sunset Tour with Kecak Dance": ["Visit the beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. The beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. Post sunset witness the Kecak and Fire Dance - Completely dramatic. Originally from Ramayana this show depicts the famous ‘Lanka Dahan’ episode wherein Hanuman sets fire to the kingdom of Ravana. The enthralling ‘kecak, kecak’ chant is the USP."] },
        { " Day 4: Full-Day West Nusa Penida Tour": ["You will be taken to witness Tegalalang Rice Terraces - probably the busiest and most famous waterfall in Bali, and it’s super easy to reach from Ubud. It only takes about 15 minutes to hike down the steps to the waterfall, but the way back up is a good workout with a lot of humidity and uneven stone steps (the steps feel like they were made for giants!)."] },
        { "Day 5: Ubud Exploration & Scenic Attractions": ["The Ubud Art Market is a great place to find beautiful silk scarves, lightweight shirts, statues, kites, handmade woven bags, baskets or hats and many other hand-crafted goods. Locally known as Pasar Seni Ubud, the market is opposite the Puri Saren Royal Ubud Palace and opens daily. Most of the goods found at the Ubud Market are made in the neighbouring villages of Pengosekan, Tegallalang, Payangan and Peliatan. The location of the Ubud Art Market, which is centred among the art producing villages and at the centre of Ubud itself, makes it a strategic shopping place for Balinese handicrafts and souvenirs."] },
        { "Day 6: Relax & Explore Bali at Your Own Pace": ["Day at Leisure Day free at leisure, enjoy by your own."] },
        { "Day 7: Departure – Bali to Denpasar Airport": ["Take a bag full of memories to cherish | Check out from the hotel and meet the representative who will take you to the Denpasar airport to board board your return flight back home."] },
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
        content: "Explore the breathtaking islands of Bali, Nusa Penida, and Gili with our Island Hopping Tour. This package takes you to stunning beaches, crystal-clear waters, and vibrant marine life. Visit Nusa Penida for iconic spots like Kelingking Beach and Broken Beach, then head to Gili Islands for snorkeling, underwater statues, and sunset views. Enjoy seamless transfers, guided tours, and relaxing beachfront stays, making it the perfect getaway for beach lovers and adventure seekers.🌴✨",
      },
      duration: "8 Days",
      country: "Indonesia",
      cities: "Kuta, Gili, Ubud",
      tableData: {
        tab1: [
          {
            city: "Kuta - 4N Deluxe Room",
            star4: "Swiss-Belhotel Rainforest Kuta/One Legion/Golden Tulip Jineng Resort/Kuta Central",
            star5: "Bintang Bali Resort/Royal Tulip Springhill Resort /Pullman Bali Legian Beach",
          },
          {
            city: "Ubud - 2N Deluxe Room",
            star4: "Alam Puisi Ubud/Ashoka Tree Resort Ubud /Bhumi Linggah/Ubud Heaven Sayan",
            star5: "Asvara Villa Ubud/FuramaXclusive Resort & Villas/Hideaway village bali",
          },
          {
            city: "Gili - 1N Deluxe Room",
            star4: "Hotel Ombak sunset/Aston Sunset Beach/Similar",
            star5: "Jambuluwuk Oceano Gili Trawangan Resort/Similar",
          },
          {
            label: "Cost per Adult",
            cost4: "₹42,499",
            cost5: "₹58,999",
          },
        ],
        tab2: [
          {
            city: "Kuta",
            star4: "Swiss-Belhotel Rainforest, Kuta\The One Legion\Golden Tulip Jineng Resort",
            star5: "Bintang Bali Resort\Royal Tulip Springhill Resort\Pullman Bali Legian Beach",
          },
          {
            city: "Ubud",
            star4: "Alam Puisi Ubud\Ashoka Tree Resort Ubud\Bhumi Linggah",
            star5: "Asvara Villa Ubud\FuramaXclusive Resort & Villas\Hideaway Village Bali",
          },
          {
            label: "Cost per Adult",
            cost4: "₹89,999",
            cost5: "₹95,999",
          },
        ],
        tab3: [
          { name: "Candle Light Dinner", costPerAdult: "₹2999/-" },
          { name: "Floating Breakfast", costPerAdult: "₹2499/-" },

        ],
      },
    },
    bali4: {
      packageId: "S04390",
      packageName: "Enchanting Bali Getaway without Nusa Penida",
      totalGuests: 2,
      nights: 6,
      days: 7,
      theme: "Mumbai",
      destinationCovered: "Bali",
      highlights: "Private Transport English speaking guide, Nusa penida Iland Tour",
      totalPackagePrice: "INR 64,999",

      packageImage:
        "https://res.klook.com/image/upload/c_fill,w_1265,h_712/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/oq1rrjjxnrgodmzrcy3q.webp",
      itinerary: [
        { " Day 1: Arrival in Bali & Transfer to Hotel": ["Welcome to Bali! Today is the First day of your trip you will arrive at Denpasar Bali airport and will be transferred to your hotel in Bali. Your first day's schedule depends on the flight arrival time. Usually, this day will be free for you at leisure. Overnight stay at Hotel accommodation"] },
        { "Day 2: Benoa Water Sports": ["Experience a water-filled adventure at Benoa Bay with an exciting. An ideal Bali is incomplete without Bali Water Sport at famous Tanjung Benoa Beach. This beach based know for each aquatic adventure is located in the benoa peninsula far away from the Hustle and bustle. watersport with Banana Boat, Parasailing, Jet Ski."] },
        { " Day 3: Uluwatu Sunset Tour with Kecak Dance": ["Visit the beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. The beautiful Uluwatu temple, built on the top of a cliff about 825 feet high facing the vast deep blue Indian Ocean, and catch a wonderful view of sunset. Post sunset witness the Kecak and Fire Dance - Completely dramatic. Originally from Ramayana this show depicts the famous ‘Lanka Dahan’ episode wherein Hanuman sets fire to the kingdom of Ravana. The enthralling ‘kecak, kecak’ chant is the USP."] },
        { " Day 4: Full-Day West Nusa Penida Tour": ["You will be taken to witness Tegalalang Rice Terraces - probably the busiest and most famous waterfall in Bali, and it’s super easy to reach from Ubud. It only takes about 15 minutes to hike down the steps to the waterfall, but the way back up is a good workout with a lot of humidity and uneven stone steps (the steps feel like they were made for giants!)."] },
        { "Day 5: Ubud Exploration & Scenic Attractions": ["The Ubud Art Market is a great place to find beautiful silk scarves, lightweight shirts, statues, kites, handmade woven bags, baskets or hats and many other hand-crafted goods. Locally known as Pasar Seni Ubud, the market is opposite the Puri Saren Royal Ubud Palace and opens daily. Most of the goods found at the Ubud Market are made in the neighbouring villages of Pengosekan, Tegallalang, Payangan and Peliatan. The location of the Ubud Art Market, which is centred among the art producing villages and at the centre of Ubud itself, makes it a strategic shopping place for Balinese handicrafts and souvenirs."] },
        { "Day 6: Relax & Explore Bali at Your Own Pace": ["Day at Leisure Day free at leisure, enjoy by your own."] },
        { "Day 7: Departure – Bali to Denpasar Airport": ["Take a bag full of memories to cherish | Check out from the hotel and meet the representative who will take you to the Denpasar airport to board board your return flight back home."] },
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
        content: "Experience the best of Bali and Ubud with our Enchanting Bali Package. Visit Kelingking Beach, Broken Beach, and snorkel around Gili’s underwater statues. Enjoy stunning beaches, crystal-clear waters, and seamless transfers for the perfect island escape! 🌴✨",
      },
      duration: "7 Days",
      country: "Indonesia",
      cities: "Kuta, Ubud",
      tableData: {
        tab1: [
          {
            city: "Kuta - 4N Deluxe Room",
            star4: "Swiss-Belhotel Rainforest Kuta/The One Legion/Golden Tulip Jineng Resort/Kuta Central",
            star5: "Bintang Bali Resort/Royal Tulip Springhill Resort /Pullman Bali Legian Beach",
          },
          {
            city: "Ubud - 2N Deluxe Room",
            star4: "Alam Puisi Ubud/Ashoka Tree Resort Ubud/ Bhumi Linggah/Ubud Heaven Sayan",
            star5: "Asvara Villa Ubud/FuramaXclusive Resort & Villas/Hideaway village bali",
          },
          {
            label: "Cost per Adult",
            cost4: "₹42,499",
            cost5: "₹58,999",
          },
        ],
        tab2: [
          {
            city: "Kuta - 4N Deluxe Room",
            star4: "Swiss-Belhotel Rainforest Kuta/The One Legion/Golden Tulip Jineng Resort/Kuta Central",
            star5: "Bintang Bali Resort/Royal Tulip Springhill Resort /Pullman Bali Legian Beach",
          },
          {
            city: "Ubud - 2N Deluxe Room",
            star4: "Alam Puisi Ubud/Ashoka Tree Resort Ubud/ Bhumi Linggah/Ubud Heaven Sayan",
            star5: "Asvara Villa Ubud/FuramaXclusive Resort & Villas/Hideaway village bali",
          },
          {
            label: "Cost per Adult",
            cost4: "₹64,999",
            cost5: "₹78,999",
          },
        ],
        tab3: [
          { name: "Candle Light Dinner", costPerAdult: "₹2999/-" },
          { name: "Floating Breakfast", costPerAdult: "₹2499/-" },

        ],
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
      theme: "Mumbai",
      destinationCovered: "vietnam",
      highlights: "Private Transport English speaking guide, Nusa penida Iland Tour",

      totalPackagePrice: "INR ₹ 1,00,999/-",

      packageImage:
        "https://static.toiimg.com/photo/109784668.cms",

      itinerary: [
        { "Day 1: Arrival in Hanoi": ["Welcome to Vietnam! Arrive at Noi Bai International Airport, Hanoi, and transfer to your hotel. Your first day's schedule depends on the flight arrival time. Usually, this day will be free for leisure. Explore the Old Quarter, Hoan Kiem Lake, and Ngoc Son Temple. Enjoy a traditional Vietnamese dinner. Overnight stay at the hotel."] },
        { "Day 2: Hanoi - Halong Bay": ["Breakfast at the hotel. Depart for Halong Bay (approx. 3.5-4 hours drive). Check-in to the cruise and enjoy a welcome drink. Explore the stunning limestone islands, caves, and floating villages. Enjoy onboard activities like kayaking or swimming. Dinner and overnight stay in a Deluxe Room on the cruise in Halong Bay."] },
        {
          "Day 3: Halong Bay - Da Nang": [
            "Early morning Tai Chi session on the deck. Breakfast while cruising back to the shore. Visit a limestone cave before disembarking. Transfer back to Hanoi and fly to Da Nang. Check-in to your Deluxe Room in Da Nang. Explore My Khe Beach and Han River Bridge. Overnight stay in Da Nang."
          ]
        },
        {
          "Day 4: Da Nang - Hoi An Excursion": [
            "Visit Marble Mountains and Linh Ung Pagoda. Explore the ancient town of Hoi An, including the Japanese Covered Bridge and the Old Houses. Enjoy a boat ride on the Thu Bon River. Return to Da Nang and overnight stay in a Deluxe Room."
          ]
        },
        {
          "Day 5: Da Nang - Ho Chi Minh City": [
            "Transfer to the airport for a flight to Ho Chi Minh City. Check-in to your Deluxe Room. Visit Ben Thanh Market, Notre-Dame Cathedral, and the Central Post Office. Enjoy the nightlife at Bui Vien Street. Overnight stay in Ho Chi Minh City."
          ]
        },
        {
          "Day 7: Departure": [
            "Free time for last-minute shopping or relaxation. Transfer to Tan Son Nhat International Airport for departure. Take back wonderful memories of Vietnam!"
          ]
        },
      ],
      overviewData: {
        title: "Package Overview",
        content: "Enjoy a 6-night, 7-day journey through Vietnam, from Hanoi’s charm to Halong Bay’s beauty, Da Nang’s beaches, and Ho Chi Minh City’s vibrant energy. A perfect mix of relaxation, adventure, and culture!",
      },
      duration: "7 Days",
      country: "Indonesia",
      cities: "Hanoi, Halong Bay, Da nang, Ho chi Minh",
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
      packageName: "Vietnam Explorer",
      totalGuests: 2,
      nights: 7,
      days: 8,
      overviewData: {
        title: "Package Overview",
        content: "Enjoy a 6-night, 7-day journey through Vietnam, from Hanoi’s charm to Halong Bay’s beauty, Da Nang’s beaches, and Ho Chi Minh City’s vibrant energy. A perfect mix of relaxation, adventure, and culture!",
      },
      duration: "8 Days",
      country: "Indonesia",
      cities: "Hanoi, Halong Bay, Da nang, Ho chi Minh",
      theme: "Mumbai",
      highlights: "Private Transport English speaking guide, Nusa penida Iland Tour",
      destinationCovered: "Vietnam",
      totalPackagePrice: "INR ₹ 1,04,599/-",

      packageImage:
        "https://plus.unsplash.com/premium_photo-1661955632358-85564b2810b2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",

      itinerary: [
        { "Day 1: Arrival in Hanoi": ["Welcome to Vietnam! Arrive at Noi Bai International Airport, Hanoi. Transfer to the hotel and check-in. Depending on the arrival time, explore Hanoi’s Old Quarter, Hoan Kiem Lake, and Ngoc Son Temple. Enjoy a traditional Vietnamese dinner. Overnight stay in Hanoi."] },
        { "Day 2: Hanoi - Halong Bay": ["Breakfast at the hotel. Depart for Halong Bay (approx. 3.5-4 hours drive). Check-in to the cruise and enjoy a welcome drink. Explore the stunning limestone islands, caves, and floating villages. Participate in onboard activities like kayaking or swimming. Dinner and overnight stay in a Deluxe Room on the cruise in Halong Bay."] },
        { "Day 3: Halong Bay - Hanoi - Da Nang": ["Early morning Tai Chi session on the deck. Breakfast while cruising back to the shore. Visit a limestone cave before disembarking. Transfer back to Hanoi and take a flight to Da Nang. Check-in to the hotel in Da Nang. Explore My Khe Beach and Han River Bridge. Overnight stay in Da Nang."] },
        { "Day 4: Da Nang - Hoi An Excursion": ["Visit the Marble Mountains and Linh Ung Pagoda. Explore the ancient town of Hoi An, including the Japanese Covered Bridge and Old Houses. Enjoy a boat ride on the Thu Bon River. Return to Da Nang and overnight stay in a Deluxe Room."] },
        { "Day 5: Da Nang - Ba Na Hills & Golden Bridge": ["Breakfast at the hotel. Visit Ba Na Hills, a scenic mountain resort. Experience the famous Golden Bridge with breathtaking views. Explore the French Village, Fantasy Park, and Linh Chua Linh Tu Temple. Return to Da Nang and overnight stay in a Deluxe Room."] },
        { "Day 6: Da Nang - Ho Chi Minh City": ["Breakfast at the hotel. Transfer to the airport for a flight to Ho Chi Minh City. Check-in to the hotel in Ho Chi Minh City. Visit Ben Thanh Market, Notre-Dame Cathedral, and the Central Post Office. Enjoy the nightlife at Bui Vien Street. Overnight stay in Ho Chi Minh City."] },
        { "Day 7: Departure from Ho Chi Minh City": ["Free time for last-minute shopping or relaxation. Transfer to Tan Son Nhat International Airport for departure. Take back wonderful memories of Vietnam!"] }
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
      packageName: "vietnam wonders",
      totalGuests: 2,
      nights: 8,
      days: 9,
      theme: "Mumbai",
      destinationCovered: "Vietnam",
      totalPackagePrice: "INR ₹ 1,10,490/-",
      highlights: "Private Transport English speaking guide, Nusa penida Iland Tour",

      overviewData: {
        title: "Package Overview",
        content: "Experience the best of Vietnam on this 8-day tour, exploring the bustling streets of Hanoi, the serene beauty of Halong Bay, the historical charm of Da Nang, and the tropical paradise of Phu Quoc. Stay in deluxe accommodations throughout the journey, ensuring comfort and relaxation as you uncover the rich culture, history, and natural beauty of this stunning country.",
      },
      duration: "9 Days",
      country: "Indonesia",
      cities: "Bali, Ubud",
      packageImage:
        "https://plus.unsplash.com/premium_photo-1661955632358-85564b2810b2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
      itinerary: [
        { "Day 1: Arrival in Hanoi": ["Welcome to Vietnam! Arrive at Noi Bai International Airport, Hanoi. Transfer to the hotel and check-in. Depending on the arrival time, explore Hanoi’s Old Quarter, Hoan Kiem Lake, and Ngoc Son Temple. Enjoy a traditional Vietnamese dinner. Overnight stay in a Deluxe Room in Hanoi."] },
        { "Day 2: Explore Hanoi": ["Breakfast at the hotel. Explore the historic sites of Hanoi, such as the Ho Chi Minh Mausoleum, One Pillar Pagoda, and the Temple of Literature. Enjoy lunch at a local restaurant and visit the Vietnam Fine Arts Museum. Dinner and overnight stay in a Deluxe Room in Hanoi."] },
        { "Day 3: Hanoi - Halong Bay": ["Breakfast at the hotel. Depart for Halong Bay (approx. 3.5-4 hours drive). Check-in to the cruise and enjoy a welcome drink. Explore the stunning limestone islands, caves, and floating villages. Participate in onboard activities like kayaking or swimming. Dinner and overnight stay in a Deluxe Room on the cruise in Halong Bay."] },
        { "Day 4: Halong Bay - Da Nang": ["Early morning Tai Chi session on the deck. Breakfast while cruising back to the shore. Visit a limestone cave before disembarking. Transfer back to Hanoi and take a flight to Da Nang. Check-in to the hotel in Da Nang. Explore My Khe Beach and Han River Bridge. Overnight stay in a Deluxe Room in Da Nang."] },
        { "Day 5: Explore Da Nang ": ["Breakfast at the hotel. Visit the Marble Mountains and Linh Ung Pagoda. Explore the scenic spots around Da Nang. Enjoy a relaxing day at My Khe Beach or explore local markets. Overnight stay in a Deluxe Room in Da Nang."] },
        { "Day 6: Da Nang - Hoi An Excursion ": ["Visit the ancient town of Hoi An, including the Japanese Covered Bridge and Old Houses. Enjoy a boat ride on the Thu Bon River. Return to Da Nang for some leisure time. Overnight stay in a Deluxe Room in Da Nang."] },
        { "Day 7: Da Nang - Ba Na Hills & Golden Bridge ": ["Breakfast at the hotel. Visit Ba Na Hills, a scenic mountain resort. Experience the famous Golden Bridge with breathtaking views. Explore the French Village, Fantasy Park, and Linh Chua Linh Tu Temple. Return to Da Nang and overnight stay in a Deluxe Room."] },
        { "Day 8: Da Nang - Ho Chi Minh City ": ["Breakfast at the hotel. Transfer to the airport for a flight to Ho Chi Minh City. Check-in to the hotel in Ho Chi Minh City. Visit Ben Thanh Market, Notre-Dame Cathedral, and the Central Post Office. Enjoy the nightlife at Bui Vien Street. Overnight stay in a Deluxe Room in Ho Chi Minh City."] }
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
      packageName: "Vietnam Highlights with Phu Quoc Island",
      totalGuests: 2,
      nights: 8,
      days: 9,
      highlights: "Private Transport English speaking guide, Nusa penida Iland Tour",

      theme: "Mumbai",
      destinationCovered: "Vietnam",
      totalPackagePrice: "INR 70,000",
      overviewData: {
        title: "Package Overview",
        content: "Enjoy a 6N7D adventure in Bali and Nusa Penida with scenic views and luxury accommodations.",
      },
      duration: "7 Days",
      country: "Indonesia",
      cities: "Hanoi, Halong Bay, Da nang, Phu Quoc",
      packageImage:
        "https://plus.unsplash.com/premium_photo-1661955632358-85564b2810b2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
      "itinerary": [
        { "Day 1: Arrival in Hanoi ": ["Welcome to Vietnam! Arrive at Noi Bai International Airport, Hanoi. Transfer to the hotel and check-in. Depending on the arrival time, explore Hanoi’s Old Quarter, Hoan Kiem Lake, and Ngoc Son Temple. Enjoy a traditional Vietnamese dinner. Overnight stay in a Deluxe Room in Hanoi."] },
        { "Day 2: Explore Hanoi": ["Breakfast at the hotel. Explore the historic sites of Hanoi, such as the Ho Chi Minh Mausoleum, One Pillar Pagoda, and the Temple of Literature. Enjoy lunch at a local restaurant and visit the Vietnam Fine Arts Museum. Dinner and overnight stay in a Deluxe Room in Hanoi."] },
        { "Day 3: Hanoi - Halong Bay ": ["Breakfast at the hotel. Depart for Halong Bay (approx. 3.5-4 hours drive). Check-in to the cruise and enjoy a welcome drink. Explore the stunning limestone islands, caves, and floating villages. Participate in onboard activities like kayaking or swimming. Dinner and overnight stay in a Deluxe Room on the cruise in Halong Bay."] },
        { "Day 4: Halong Bay - Da Nang": ["Early morning Tai Chi session on the deck. Breakfast while cruising back to the shore. Visit a limestone cave before disembarking. Transfer back to Hanoi and take a flight to Da Nang. Check-in to the hotel in Da Nang. Explore My Khe Beach and Han River Bridge. Overnight stay in a Deluxe Room in Da Nang."] },
        { "Day 5: Explore Da Nang ": ["Breakfast at the hotel. Visit the Marble Mountains and Linh Ung Pagoda. Explore the scenic spots around Da Nang. Enjoy a relaxing day at My Khe Beach or explore local markets. Overnight stay in a Deluxe Room in Da Nang."] },
        { "Day 6: Da Nang - Hoi An Excursion ": ["Visit the ancient town of Hoi An, including the Japanese Covered Bridge and Old Houses. Enjoy a boat ride on the Thu Bon River. Return to Da Nang for some leisure time. Overnight stay in a Deluxe Room in Da Nang."] },
        { "Day 7: Da Nang - Phu Quoc": ["Breakfast at the hotel. Transfer to the airport for a flight to Phu Quoc. Check-in to the hotel in Phu Quoc. Spend the day relaxing on the beautiful beaches of Phu Quoc or explore local markets. Overnight stay in a Deluxe Room in Phu Quoc."] },
        { "Day 8: Explore Phu Quoc  ": ["Breakfast at the hotel. Explore the stunning beaches of Phu Quoc, visit Vinpearl Safari, or enjoy water sports. Relax and enjoy the peaceful island atmosphere. Overnight stay in a Deluxe Room in Phu Quoc."] }
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
