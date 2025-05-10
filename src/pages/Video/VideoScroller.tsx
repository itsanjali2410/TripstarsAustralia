import React, { useRef, useEffect, useState } from "react";
import styled ,{ keyframes } from "styled-components";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaHeart, FaShare, FaBookmark,FaArrowUp  } from "react-icons/fa";

// Import videos
import Video8 from "../../assets/Videos/Testimonial/8.mp4";
// import Video1 from "../../assets/Videos/Testimonial/1.mp4";
import Video2 from "../../assets/Videos/Testimonial/2.mp4";
import Video3 from "../../assets/Videos/Testimonial/3.mp4";
import Video4 from "../../assets/Videos/Testimonial/4.mp4";
import Video5 from "../../assets/Videos/Testimonial/5.mp4";
import Video6 from "../../assets/Videos/Testimonial/6.mp4";
import Video7 from "../../assets/Videos/Testimonial/7.mp4";

// Video details with tags included
const videoData = [
  {
    title: "Roma's Bali Vacation",
    description:
      "Roma's unforgettable Bali adventure was filled with serene beaches, vibrant culture, and breathtaking landscapes. An experience of a lifetime!",
    video: Video2,
    tags: ["Bali", "Vacation", "Beaches", "Culture"],
  },
  {
    title: "Sandip's Dubai Vacation",
    description:
      "Sandip's luxurious Dubai getaway showcased the city's iconic skyline, thrilling desert safaris, and unforgettable cultural experiences.",
    video: Video3,
    tags: ["Dubai", "Vacation", "Luxury", "Culture"],
  },
  {
    title: "Mayur's Australia Vacation",
    description:
      "Mayur's adventure down under was a blend of stunning coastlines, unique wildlife, and captivating cityscapes.",
    video: Video4,
    tags: ["Australia", "Vacation", "Nature", "Wildlife"],
  },
  {
    title: "Binieka's Dubai Vacation",
    description:
      "Binieka's exploration of Dubai was nothing short of a dream, featuring luxurious hotels, grand malls, and vibrant souks.",
    video: Video5,
    tags: ["Dubai", "Vacation", "Luxury", "Shopping"],
  },
  {
    title: "Nidhi Mundra Bali Trip",
    description:
      "Nidhi's Bali escapade was filled with cultural insights, picturesque beaches, and a blend of adventure and relaxation.",
    video: Video8,
    tags: ["Bali", "Trip", "Adventure", "Relaxation"],
  },
  {
    title: "Prathamesh Dubai Trip",
    description:
      "Prathamesh's journey was filled with memorable experiences, stunning views, and heartwarming moments.",
    video: Video6,
    tags: ["Travel", "Experiences", "Memories"],
  },
  {
    title: "Mrs. Arjal Patel",
    description:
      "Mrs. Arjal Patel had a rejuvenating trip with beautiful views, relaxing accommodations, and impeccable hospitality.",
    video: Video7,
    tags: ["Relaxation", "Hospitality", "Travel"],
  },
  // {
  //   title: "Bonani Chatterjee",
  //   description:
  //     "An organized and well managed trip A special thanks to Alex for so efficiently planning everything. Also to our guides Lien in Hanoi, key in Da Nang and Leon in Saigon a big thank you for a wonderful job done. Also all the drivers were excellent and the cars were in excellent condition.",
  //   video: Video1,
  //   tags: ["Bali", "Vacation", "Beaches", "Culture"],
  // },
];
// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow: hidden;

  @media (min-width: 1024px) {
    padding: 0 15rem;
  }
`;

const FloatingButtons = styled.div`
  position: absolute;
  right: 10px;
  bottom: 20%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 1024px) {
    display: none; /* Hide on desktop */
  }
`;

const ActionButton = styled.button<{ active?: boolean }>`
  background: ${({ active }) =>
    active ? "#e63946" : "rgba(0, 0, 0, 0.6)"};
  color: white;
  border: none;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  font-size: 18px;

  &:hover {
    background: ${({ active }) =>
    active ? "#d62828" : "rgba(255, 255, 255, 0.3)"};
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 100vh; /* Full height for each video */
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  position: relative;

  @media (max-width: 1024px) {
    min-height: 100vh;
    max-height: 100vh;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const PlayPauseButton = styled.button<{ show: boolean }>`
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 0.3s, transform 0.3s;

  /* Hide button when playing */
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? "auto" : "none")};

  /* Mobile: Centered */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 1024px) {
    /* Desktop: Move to bottom center */
    top: auto;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

// Overlay appears only on small screens
const Overlay = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2));
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;


  @media (min-width: 1024px) {
    display: none;
  }
`;

const OverlayTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

const OverlayDescription = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  max-width: 90%;
`;

const OverlayTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const OverlayTag = styled.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 0.3rem 0.7rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const DescriptionContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    width: 50%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    background: #1a1a1a;
    color: white;
    border-radius: 10px;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: linear-gradient(90deg, #c99603, #f4e628, #cd9c01, #b38201);
  color: black;
  padding: 0.3rem 0.7rem;
  margin: 0.3rem;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 20px;
`;

const Hr = styled.hr`
  width: 100%;
  border: 0.5px solid #777;
  margin: 1rem 0;
`;

const Text = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
`;

const ViewButton = styled.button`
  background: #ffd700;
  color: black;
  font-weight: bold;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 1rem;

  &:hover {
    background: #ffd700;
  }
`;
const fadeInOut = keyframes`
0%, 100% {
  opacity: 0;
}
50% {
  opacity: 1;
}
`;
const disappear = keyframes`
  to { opacity: 0; visibility: hidden; }
`;

const ScrollHint = styled.div`
  position: absolute;
  bottom: 200px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #fff;
  text-align: center;
  animation: ${fadeInOut} 1.5s infinite, ${disappear} 0.5s forwards 5s;

  &::after {
    content: "↓";
    display: block;
    font-size: 24px;
    margin-top: 5px;
  }
`;


const VideoScroller: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Start muted

  const videoSources = [
    Video2,
    Video3,
    Video4,
    Video5,
    Video8,
    Video6,
    Video7,
    // Video1,
  ];

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.muted = false; // Unmute active video
          video
            .play()
            .then(() => setIsPlaying(true))
            .catch((error) => console.error("Autoplay failed:", error));
        } else {
          video.pause();
        }
      }
    });
  }, [activeIndex]);


  const handleScroll = () => {
    if (!containerRef.current) return;

    const videos = containerRef.current.children;
    let newIndex = activeIndex;

    for (let i = 0; i < videos.length; i++) {
      const rect = videos[i].getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        newIndex = i;
        break;
      }
    }

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const togglePlayPause = (index: number) => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === index) {
          if (video.paused) {
            video.muted = false; // Ensure io starts immediately
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch((error) => console.error("Playback failed:", error));
          } else {
            video.pause();
            setIsPlaying(false);
          }
        } else {
          video.pause(); // Pause all other videos
        }
      }
    });
  };



  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: videoData[activeIndex].title,
          text: videoData[activeIndex].description,
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully!"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  return (
    <Container>
      <VideoContainer ref={containerRef} onScroll={handleScroll}>
        {videoSources.map((video, index) => (
          <VideoWrapper key={index}>
            <Video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video}
              loop
              playsInline
              onClick={() => togglePlayPause(index)}
              muted={isMuted && activeIndex !== index} // Only mute inactive videos
            />
            {/* Overlay appears only on small screens */}
            <Overlay>
              <OverlayTitle>{videoData[index].title}</OverlayTitle>
              <OverlayDescription>
                {videoData[index].description.length > 80
                  ? `${videoData[index].description.substring(0, 80)}...`
                  : videoData[index].description}
              </OverlayDescription>
              {videoData[index].tags && videoData[index].tags.length > 0 && (
                <OverlayTags>
                  {videoData[index].tags.map((tag, idx) => (
                    <OverlayTag key={idx}>{tag}</OverlayTag>
                  ))}
                </OverlayTags>
              )}
              <ViewButton>View Packages</ViewButton>
            </Overlay>

            {/* Floating Like, Share, Save Buttons (Mobile only) */}
            <FloatingButtons>
              <ActionButton active={liked} onClick={() => setLiked(!liked)}>
                <FaHeart />
              </ActionButton>
              <ActionButton onClick={handleShare}>
                <FaShare />
              </ActionButton>
              <ActionButton active={saved} onClick={() => setSaved(!saved)}>
                <FaBookmark />
              </ActionButton>
            </FloatingButtons>
          </VideoWrapper>
        ))}
        {ScrollHint && (
          <ScrollHint>
            Scroll for more </ScrollHint>
        )}
      </VideoContainer>

      {/* Desktop Description Container */}
      <DescriptionContainer>
        <Title>{videoData[activeIndex].title}</Title>
        {videoData[activeIndex].tags && videoData[activeIndex].tags.length > 0 && (
          <Tags>
            {videoData[activeIndex].tags.map((tag, idx) => (
              <Tag key={idx}>{tag}</Tag>
            ))}
          </Tags>
        )}
        <Hr />
        <Text>{videoData[activeIndex].description}</Text>
        <ViewButton>View Packages</ViewButton>
      </DescriptionContainer>
    </Container>
  );
};

export default VideoScroller;
