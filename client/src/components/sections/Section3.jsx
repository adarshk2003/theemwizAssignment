import React from "react";
import styled, { keyframes } from "styled-components";
import { Container, Button } from "react-bootstrap";

// Animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const SectionWrapper = styled.section`
  padding: 5rem 2rem;
  background-color: #2d2141;
  text-align: center;
  animation: ${fadeIn} 1s ease forwards;
  overflow-x: hidden;
`;


const Heading = styled.h5`
  font-size: 1rem;
  color: #ff5e4f;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

const SubHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 900;
  color: white;
  margin-bottom: 2rem;
`;

const FilterOptions = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 3rem;

  span {
    cursor: pointer;
    font-weight: 600;
    color: white;
    transition: all 0.3s ease;

    &:hover {
      color: #ff5e4f;
    }

    sup {
      font-size: 0.7em;
      vertical-align: super;
      margin-left: 2px;
    }
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;


const GridItem = styled.div`
  grid-column: span ${({ span }) => span};
  position: relative;
  width: 100%; /* Ensure full width */
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 5px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  @media (max-width: 768px) {
    grid-column: span 12 !important;
  }
`;


const Overlay = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20%;
  background-color:rgb(255, 255, 255);
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 600;

  @media (max-width: 768px) {
    bottom:18%
  }
    @media (max-width: 480px) {
    bottom: 30%;  
  }
`;

const Caption = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 2rem;
  font-weight: 900;
`;

const StyledButton = styled(Button)`
  padding: 0.75rem 2rem;
  font-weight: 600;
  background-color: transparent;
  border:1px solid white;
`;

const Section3 = () => {
  return (
    <SectionWrapper>
      <Container>
        <Heading>portfolio</Heading>
        <SubHeading>Latest work</SubHeading>

        <FilterOptions>
          <span>Show All<sup>13</sup></span>
          <span>Design<sup>6</sup></span>
          <span>Branding<sup>4</sup></span>
          <span>Illustration<sup>3</sup></span>
          <span>Motion<sup>1</sup></span>
        </FilterOptions>

        <ImageGrid>
          <GridItem span={5}>
            <img src="/my11.png" alt="Work 1" />
            <Overlay>Design</Overlay>
            <Caption>SOFA</Caption>
          </GridItem>
          <GridItem span={7}>
            <img src="/my12.png" alt="Work 2" />
            <Overlay>Branding</Overlay>
            <Caption>KeyBoard</Caption>
          </GridItem>
          <GridItem span={7}>
            <img src="/my13.png" alt="Work 3" />
            <Overlay>Illustration</Overlay>
            <Caption>Work Media </Caption>
          </GridItem>
          <GridItem span={5}>
            <img src="/my14.png" alt="Work 4" />
            <Overlay>Motion</Overlay>
            <Caption>DDDone</Caption>
          </GridItem>
        </ImageGrid>

        <StyledButton>Explore More</StyledButton>
      </Container>
    </SectionWrapper>
  );
};

export default Section3;
