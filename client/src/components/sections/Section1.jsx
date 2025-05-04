import React from "react";
import styled, { keyframes } from "styled-components";

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Layout
const SectionWrapper = styled.section`
  background-color: #2a2640;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  min-height: 100vh;
  flex-wrap: wrap-reverse;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding-top: 6rem;
  }
`;

const Left = styled.div`
  flex: 1;
  padding-right: 2rem;
  animation: ${fadeInUp} 1s ease both;
  margin-left: 90px;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-left: 0;
    width: 100%;
    text-align: left;
    padding: 0 1rem;
  }
`;

const Right = styled.div`
  flex: 1;
  padding-left: 2rem;
  animation: ${fadeInUp} 1.2s ease both;

  @media (max-width: 768px) {
    order: -1;
    padding-left: 0;
    margin-bottom: 2rem;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 1rem;
  object-fit: cover;
  display: block;
`;

// Heading Block
const HeadingBlock = styled.div`
  position: relative;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const DecorativeImage = styled.img`
  position: absolute;
  top: 17%;
  right:50%;
  transform: translateY(-50%);
  width: 100px;
  opacity: 0.3;
  z-index: -1;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 70px;
    right: 0;
  }
`;

const SmallText = styled.p`
  color:#ff5e4e;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const HeadingText = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: #fff;
   font-family: "Lato", sans-serif;
  line-height: 1.2;
  margin: 0;

  span {
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: left;
  }
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 2rem;
   font-family: "Lato", sans-serif;
  max-width: 480px;

  @media (max-width: 768px) {
    margin: 0 auto 2rem;
    text-align: left;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const Button = styled.button`
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  background: ${({ secondary }) => (secondary ? "transparent" : "#ff5e4f")};
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ secondary }) => (secondary ? "white" : "none")};
    background: ${({ secondary }) => (secondary ? "rgba(255, 255, 255, 0.05)" : "#e04b3f")};
  }
`;


const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 350px;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin: 0 auto;
  }
`;

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileText = styled.div`
  font-size: 0.9rem;
  color: #eee;
  line-height: 1.3;


  p {
    margin: 0;
     font-family: "Lato", sans-serif;
  }

  span {
    display: block;
    font-weight: bold;
    color: #fff;
    margin-top: 0.25rem;
     font-family: "Lato", sans-serif;
  }
`;

// Component
const Section1 = () => {
  return (
    <SectionWrapper>
      {/* Left Side */}
      <Left>
        <SmallText>Modern Studio</SmallText>
        <HeadingBlock>
          <DecorativeImage src="/Star.png" alt="Decoration" />
          <HeadingText>
            <span>We’re help</span>
            <span>to build your</span>
            <span>Dream project</span>
          </HeadingText>
        </HeadingBlock>
        <Paragraph>
          We collaborate with forward-thinking teams to craft modern digital experiences that inspire and perform.
        </Paragraph>
        <Buttons>
          <Button>How we work</Button>
          <Button secondary>Contact us</Button>
        </Buttons>
        <ProfileWrapper>
          <ProfileImage src="/photo.png" alt="Hary" />
          <ProfileText>
            <p>“Put themselves in the merchant's shoes.”</p>
            <span><b>Hary</b>, Meta Inc</span>
          </ProfileText>
        </ProfileWrapper>
      </Left>

      {/* Right Side */}
      <Right>
        <HeroImage src="/pic.png" alt="Hero" />
      </Right>
    </SectionWrapper>
  );
};

export default Section1;
