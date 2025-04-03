import { FC } from "react";
import styled from "styled-components";

interface PackageIncludesProps {
  includes?: { name: string; icon: React.ElementType }[];
}

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */

  @media (max-width: 768px) {
    gap: 0px; /* Reduce gap on tablets */
    margin-bottom:28px;
  }

  @media (max-width: 480px) {
    gap: 0px; /* Reduce gap further on mobile */
    margin-bottom:28px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100px; /* Fixed width for consistency */

  @media (max-width: 480px) {
    width: 65px; /* Reduce size on small screens */
  }
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  @media (max-width: 480px) {
    width: 50px;
    height: 50px; /* Smaller circle on mobile */
  }
`;

const Icon = styled.div`
  width: 32px;
  height: 32px;
  color: #C99603; /* Golden color for the icon */

  @media (max-width: 480px) {
    width: 24px;
    height: 24px; /* Smaller icons on mobile */
  }
`;

const Text = styled.span`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;

  @media (max-width: 480px) {
    font-size: 12px; /* Smaller text on mobile */
  }
`;

const PackageIncludes: FC<PackageIncludesProps> = ({ includes }) => {
    if (!includes || includes.length === 0) return null;
  
    return (
      <>
        <h5>Tour Include</h5>
        <Container>
          {includes.map((item, index) => (
            <Item key={index}>
              <IconWrapper>
                <Icon as={item.icon} />
              </IconWrapper>
              <Text>{item.name}</Text>
            </Item>
          ))}
        </Container>
      </>
    );
  };
  

export default PackageIncludes;
