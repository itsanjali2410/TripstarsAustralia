import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface Benefit {
  title: string;
  description: string;
  iconUrl: string;
}

const benefits: Benefit[] = [
  {
    title: "Customised Bespoke",
    description:
      "Enjoy our customizable tour packages for a seamless and exceptional experience with top-tier services.",
    iconUrl: "https://images.emtcontent.com/holiday-img/home-img/sun_bed.png",
  },
  {
    title: "Wallet-Friendly Prices",
    description:
      "Travelers worldwide can enjoy unforgettable journeys with our unbeatable holiday packages.",
    iconUrl: "https://images.emtcontent.com/holiday-img/home-img/low.png",
  },
  {
    title: "Exciting Deals",
    description:
      "Our platform offers the best deals and discounts on exclusive holiday packages for great value.",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Font_Awesome_5_regular_star.svg", // New icon link
},

  {
    title: "24/7 Support",
    description:
      "Our customer support team is always available to assist you and resolve travel-related queries instantly.",
    iconUrl: "https://images.emtcontent.com/holiday-img/home-img/support.png",
  },
];

const Section = styled.section`
  padding: 5rem 15rem;
  background: #fff;
  text-align: center;

  @media (max-width: 1340px) {
    padding: 3rem 5rem;
  }
  @media (max-width: 1080px) {
    padding: 2rem 3rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
  margin: 10px auto;
`;

const Card = styled.div`
  background: #fff;
  padding: 20px;
  border: 1px solid #cce7ff;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Icon = styled.div<{ imageUrl: string }>`
  width: 70px;
  height: 70px;
  background: url(${({ imageUrl }) => imageUrl}) center/cover no-repeat;
  margin-bottom: 15px;
`;

const CardText = styled.div`
  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #333;
  }
  p {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
  }
`;

const BenefitsSection: React.FC = () => (
  <Section>
    <Title>Benefits of Booking With Us</Title>
    <Description>
      Discover the unrivaled benefits that promise memorable journeys all along.
    </Description>

    <Swiper
      loop
      speed={1200}
      autoplay={{ delay: 1800, disableOnInteraction: false }}
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      breakpoints={{
        768: { slidesPerView: 2 },
        1080: { slidesPerView: 3 },
      }}
    >
      {benefits.map(({ title, description, iconUrl }, index) => (
        <SwiperSlide key={index}>
          <Card>
            <Icon imageUrl={iconUrl} />
            <CardText>
              <h3>{title}</h3>
              <p>{description}</p>
            </CardText>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  </Section>
);

export default BenefitsSection;
