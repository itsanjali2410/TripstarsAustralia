import React, { useState,useEffect } from "react";
import styled from "styled-components";
import DesktopFooter from "./DesktopFooter";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import footerimage from "../../assets/footer/footer-desktop(2).png";
import footermobike from "../../assets/footer/footer-mobile.png";
// Styled Components
const FooterContainer = styled.footer`
  background-color: #101820;
  color: white;
  padding: 20px 40px;
  text-align: center;
  
`;

const DesktopLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LinksLeft = styled.div`
  flex: 1;
  max-width: 30%;
`;

const LinksRight = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 65%;
  justify-content: flex-start;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li<{ active?: boolean }>`
  margin: 10px 0;
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#007BFF" : "transparent")};
  border-radius: 5px;

  a {
    color: ${({ active }) => (active ? "white" : "white")};
    text-decoration: none;
    display: block;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const MobileFooterContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 20px;
  }
`;

const FooterSection = styled.div<{ isOpen: boolean }>`
  flex: 1;
  min-width: 200px;
  margin: 10px;
  text-align: left;

  h3 {
    font-size: 18px;
    margin: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;

    i {
      margin-left: 10px;
      font-size: 14px;
      transition: transform 0.3s ease;
    }

    &.open i {
      transform: rotate(180deg);
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 10px 0;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};

    li {
      margin: 10px 0;

      a {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #ffd700;
        text-decoration: none;
        font-size: 14px; /* Default font size */
        
        .icon {
          font-size: 20px;
        }

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  hr {
    border: none;
    border-top: 1px solid #333;
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 16px; /* Reduce font size for mobile */
      font-weight: bold;
    }

    ul li a {
      font-size: 12px; /* Reduce font size for links in mobile view */
      font-weight: bold;
    }
  }
`;


const FooterContact = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;

  p {
    margin: 5px 0;
  }

  a {
    color: #ffd700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .contact-horizontal {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 10px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      gap: 20px; 
      flex-wrap: nowrap; 
      justify-content: center; 
    }

    p {
      margin: 0;
      white-space: nowrap;
    }
  }
`;

const SocialContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border-radius: 50%;
    padding: 10px;
    color: white;
    width: 35px;
    height: 35px;

    &.facebook {
      background-color: #1877f2;
    }

    &.instagram {
      background: radial-gradient(circle at 30% 30%, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
    }

    &.linkedin {
      background-color: #0a66c2;
    }

    &.youtube {
      background-color: #ff0000;
    }

    &.phone {
      background-color: #34b7f1;
    }

    &.whatsapp {
      background-color: #25d366;
    }

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;



const FooterBottom = styled.div`
  border-top: 1px solid #333;
  margin-top: 20px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;

  img {
    height: 50px;
    display: block;

  }
`;

const FooterImage = styled.img`
  margin-bottom: 10px;
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BranchDetails = styled.div`
  margin-bottom: 15px;
`

const BranchAddress = styled.p`
  font-size: 14px;
  margin: 5px 0;
  line-height: 1.4;
  color: #ffd700;
`;

const BranchContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 8px;
`;

const ContactLink = styled.a`
  color: #ffd700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

// Social media icons
const socialMediaLinks = [
  { href: "https://www.facebook.com/tripstarsholidays?rdid=dSUD1oQcaaH2mjCk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19qbFGvRJw%2F#", icon: <FaFacebook />, alt: "Facebook", className: "facebook" },
  { href: "https://www.instagram.com/tripstars.in?igsh=MWlpNHVhMHp6aXA2bA==", icon: <FaInstagram />, alt: "Instagram", className: "instagram" },
  { href: "https://www.linkedin.com/company/tripstarsholidays/", icon: <FaLinkedin />, alt: "LinkedIn", className: "linkedin" },
  { href: "https://www.youtube.com/@tripstarsholidays108", icon: <FaYoutube />, alt: "YouTube", className: "youtube" },
  { href: "tel:+919875097169", icon: <AiFillPhone />, alt: "Call", className: "phone" },
  { href: "https://wa.me/919875097169", icon: <BsWhatsapp />, alt: "WhatsApp", className: "whatsapp" },
];

// Dropdown content
interface FooterLink {
  label: string;
  href: string;
  icon?: JSX.Element;
  contacts?: { phone: string; whatsapp: string }[];
}

const footerSections: { title: string; links: FooterLink[] }[] = [
  {
    title: "Talk to us",
    links: [
      { label: "+91-9875097169", href: "+919875097169" },
      { label: "+91-8655351948", href: "tel:+918655351948" },
      { label: "+91 7969790000", href: "tel:+917969790000" },
      { label: "Info@tripstars.in", href: "mailto:info@travellandindia.com" },
    ],
  },
  {
    title: "Branches",
    links: [
      {
        label:
          "105/315, Sai Arcade, N.S. Road, Mulund West, Mumbai - 400080",
        href: "#",
        contacts: [{ phone: "+91-8655351948", whatsapp: "+91-9875097169" }],
      },
      
      {
        label: "1817/1818, Navratna Corporate Park - B, Iscon - Ambli Road, Ahmedabad - 380058",
        href: "#",
        contacts: [{ phone: "+91-8655351949", whatsapp: "+91-9875097169" }],
      },
    ],
  },
  {
    title: "India Trips",
    links: [
      { label: "Kerala", href: "/kerala" },
      { label: "Himachal Pradesh", href: "/himachal" },
      { label: "Andaman", href: "/andaman" },
      { label: "Kashmir", href: "/kashmir" },
      { label: "Goa", href: "/goa" },
      { label: "Nepal", href: "/nepal" },
      { label: "North East", href: "/northeast" },
    ],
  },
  {
    title: "International Trips",
    links: [
      { label: "Bali", href: "/bali" },
      { label: "Vietnam", href: "/vietnam" },
      { label: "Dubai", href: "/dubai" },
      { label: "Singapore", href: "/singapore" },
      { label: "Malaysia", href: "/malaysia" },
      { label: "Thailand", href: "/thailand" },
      { label: "Baku", href: "/baku" },
      { label: "Turkey", href: "/turkey" },
      { label: "Australia", href: "/australia" },
      { label: "Europe", href: "/europe" },
      { label: "New Zealand", href: "/newzealand" },
      { label: "Japan", href: "/japan" },
      { label: "Korea", href: "/korea" },
    ],
  },
  {
    title: "Tripstars Special",
    links: [
      { label: "Exclusive Deals", href: "#special1" },
      { label: "Seasonal Offers", href: "#special2" },
      { label: "Custom Tour Packages", href: "#special2" },
      { label: "Luxury Travel", href: "#special2" },
      { label: "Group Bookings", href: "#special2" },
      { label: "Honeymoon Specials", href: "#special2" },
      { label: "Adventure Trips", href: "#special2" },
      { label: "Cruise Bookings", href: "#special2" },
      { label: "Visa Assistance", href: "#special2" },
      { label: "Travel Guides & Tips", href: "#special2" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Payments", href: "/payments" },
      { label: "Travel Guides & Tips", href: "/travel-guides-tips" },
      { label: "FAQs", href: "/faqs" },
      { label: "Support / Help Center", href: "/support-help-center" },
      { label: "About Us", href: "/aboutus" },
      { label: "Destinations", href: "/destinations" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cancellation Policy", href: "/cancellation-policy" },
    ],
  },
];
const Footer: React.FC = () => {
  const [dropdowns, setDropdowns] = useState<{ [key: string]: boolean }>({});
  const [isMobile, setIsMobile] = useState(true);

  const toggleDropdown = (key: string) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      setIsMobile(newIsMobile);
    };
  
    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to set the correct value
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <FooterContainer>
      <MobileFooterContainer>
        {footerSections.map((section) => (
          <FooterSection
            key={section.title}
            isOpen={dropdowns[section.title] || false}
          >
            <h3
              onClick={() => toggleDropdown(section.title)}
              className={dropdowns[section.title] ? "open" : ""}
            >
              {section.title} <i>▼</i>
            </h3>
            <ul>
              {section.links.map((link) => (
                <li key={link.label}>
                  {section.title === "Branches" ? (
                    <div>
                      <BranchAddress>{link.label}</BranchAddress>
                      {link.contacts && (
                        <BranchContacts>
                          <ContactLink href={`tel:${link.contacts[0].phone}`}>
                            <AiFillPhone /> {link.contacts[0].phone}
                          </ContactLink>
                          {/* <ContactLink href={`https://wa.me/${link.contacts[0].whatsapp.replace(/[^0-9]/g, "")}`}> */}
                          <ContactLink href="#">
                            <BsWhatsapp /> {link.contacts[0].whatsapp}
                          </ContactLink>
                        </BranchContacts>
                      )}
                    </div>
                  ) : (
                    <a href={link.href}>
                      {link.icon && <span className="icon">{link.icon}</span>}
                      {link.label}
                    </a>
                  )}
              </li>
              ))}
            </ul>
            <hr />
          </FooterSection>
        ))}
      </MobileFooterContainer>

      <FooterContact>
        <p><strong>Tripstars Holidays Pvt LTD</strong></p>
        <p> 1817/1818, Navratna Corporate Park - B, Iscon - Ambli Road, Ahmedabad - 380058
</p>
        <div className="contact-horizontal">
          <p>                                                                                                                                                                                  
            <a href="mailto:Info@tripstars.in">Info@tripstars.in</a>
          </p>
          <p>
            <a href="tel:+919875097159">+91 9875097159</a>
          </p>
          <p>
            <a href="http://tripstars.in/">https://tripstars.in</a>
          </p>
        </div>
      </FooterContact>

      <SocialContainer>
      <SocialLinks>
  {socialMediaLinks.map((link, index) => (
    <a
      key={index}
      href={link.href}
      className={link.className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.alt}
    >
      {link.icon}
    </a>
  ))}
</SocialLinks>

      </SocialContainer>
      <FooterBottom>
        {isMobile ? <FooterImage
          src={footermobike}
          alt="Mobile Footer"
        /> : <FooterImage
          src={footerimage}
          alt="Desktop Footer"
        />}
        <p>© 2025 TripStars – Holidays PVT LTD, All rights reserved</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
