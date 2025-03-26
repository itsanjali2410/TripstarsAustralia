// src/data/itineraries.ts

export const itineraries = {
    bali: [
      {
        day: 1,
        title: "Day 1: Arrival in Bali",
        activities: [
          "Arrival at Ngurah Rai International Airport.",
          "Private transfer to your hotel in Kuta.",
          "Check-in and leisure time to relax or explore nearby areas.",
          "Overnight stay at the hotel in Kuta."
        ],
        images: [
          "https://www.planetware.com/photos-large/AUS/australia-beautiful-places-sydney-harbour.jpg"
        ]
      },
      {
        day: 2,
        title: "Day 2: Ubud Exploration",
        activities: [
          "Visit the Sacred Monkey Forest Sanctuary.",
          "Explore Ubud Art Market & Ubud Palace.",
          "Enjoy traditional Balinese cuisine for lunch.",
          "Visit Tegalalang Rice Terraces.",
          "Return to hotel in the evening."
        ],
        images: []
      }
    ],
  
    vietnam: [
      {
        day: 1,
        title: "Day 1: Arrival in Hanoi",
        activities: [
          "Arrival at Noi Bai International Airport.",
          "Transfer to hotel in Hanoi.",
          "Explore Old Quarter & enjoy local street food.",
          "Overnight stay at the hotel in Hanoi."
        ],
        images: []
      },
      {
        day: 2,
        title: "Day 2: Ha Long Bay Cruise",
        activities: [
          "Transfer to Ha Long Bay.",
          "Board a luxury cruise & explore limestone islands.",
          "Seafood lunch on the cruise.",
          "Kayaking & visiting Sung Sot Cave.",
          "Overnight on the cruise."
        ],
        images: [
          "https://www.example.com/halong-bay.jpg"
        ]
      }
    ]
  };
  
  export type DestinationKey = keyof typeof itineraries;
  