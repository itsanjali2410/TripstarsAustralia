import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

// Styled Container
const Container = styled.div`
   padding: 0 15rem;
   @media (max-width: 1340px) {
    padding: 0 5rem;
  }
  @media (max-width: 1080px) {
    padding: 0 3rem;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const TrustindexWidget: React.FC = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Tripstars - Best Travel Experience</title>
        <meta name="description" content="Discover amazing travel destinations with Tripstars. Book your next adventure now!" />
        <meta name="keywords" content="travel, tours, Tripstars, vacation, holidays, flights, hotels" />
        <meta name="author" content="Tripstars Team" />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="https://www.tripstars.in/public/upload/tripstars/images/favicon.ico" />
        
        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Tripstars - Best Travel Experience" />
        <meta property="og:description" content="Explore amazing travel destinations and book your next trip with Tripstars!" />
        <meta property="og:image" content="https://www.tripstars.in/public/upload/tripstars/images/og-image.jpg" />
        <meta property="og:url" content="https://www.tripstars.in/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card for Social Media */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tripstars - Best Travel Experience" />
        <meta name="twitter:description" content="Discover amazing travel destinations with Tripstars!" />
        <meta name="twitter:image" content="https://www.tripstars.in/public/upload/tripstars/images/twitter-image.jpg" />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_SITE_VERIFICATION_CODE" />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Tripstars",
              "url": "https://www.tripstars.in/",
              "logo": "https://www.tripstars.in/public/upload/tripstars/images/logo.png",
              "description": "Discover amazing travel destinations with Tripstars.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-1234567890",
                "contactType": "customer service"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Your Page Content */}
      <Container>
        <h3 style={{ marginTop: "6%", marginBottom: "1%", textAlign: "center" }}>Google Reviews</h3>
        <h6 style={{ marginTop: "1%", marginBottom: "4%", textAlign: "center" }}><center>Their love keep us growing</center></h6>
        <div>
          <div className="trustindex-widget">
            {/* Trustindex widget will render reviews here */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default TrustindexWidget;
