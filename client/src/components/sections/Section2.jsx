import React from "react";
import styled, { keyframes } from "styled-components";
import { Button, Container, Row, Col } from "react-bootstrap";

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

const SectionWrapper = styled.section`
  background-color:rgb(255, 247, 247);
  padding: 5rem 2rem;
  min-height: 100vh;
  animation: ${fadeInUp} 1s ease both;
`;

const Divider = styled.hr`
  width: 100%;
  border: 1px solid #ff5e4e;
  margin: 2rem 0;
`;

const LogoImage = styled.img`
  max-height: 60px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    filter: grayscale(0.5);
    transition: transform 0.3s ease;
  }

  @media (min-width: 768px) {
    max-height: 80px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  border: 1px solid rgb(255, 196, 191);
  overflow: hidden;
`;

const StatsBox = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-right: 1px solid  rgb(255, 196, 191);

  &:last-child {
    border-right: none;
  }

  @media (max-width: 576px) {
    border-right: none;
    border-bottom: 1px solid #ddd;

    &:last-child {
      border-bottom: none;
    }
  }
`;

const StatsNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: 900;
  color: #333;
`;

const StatsText = styled.p`
  font-size: 0.9rem;
   font-weight: 700;
   font-family: "Lato", sans-serif;
  color: #444;
`;

const ProcessStep = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProcessStepNumber = styled.h3`
  font-size: 3.4rem;
  font-weight: 900;
  color:rgb(0, 0, 0);
  margin-right: 1rem;
`;

const ProcessStepText = styled.p`
  font-size: 1rem;
   font-weight: 900;
   font-family: "Lato", sans-serif;
  color: #444;
`;

const VideoHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  font-family: "Lato", sans-serif;
`;

const VideoParagraph = styled.p`
  font-size: 1rem;
  font-family: "Lato", sans-serif;
  color: #444;
  margin-top: 1rem;
`;

const Section2 = () => {
  return (
    <SectionWrapper>
      <Container>
        {/* Section 1: Logos */}
        <Row className="mb-4 justify-content-center align-items-center">
          {["Bitmap", "Bitmap-1", "Bitmap-2", "Bitmap-3", "Bitmap-4"].map((img, idx) => (
            <Col key={idx} xs={6} sm={4} md={2} className="d-flex justify-content-center mb-3 ">
              <LogoImage src={`/${img}.png`} alt={`Logo ${idx + 1}`} />
            </Col>
          ))}
        </Row>

        <Divider />

        {/* Section 2: About */}
        <Row className="mb-5 align-items-center">
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <img
              src="/e2ef53e54c4e408f5742ec049b33aab230da69bb.png"
              alt="About"
              className="img-fluid rounded"
              style={{ maxWidth: "80%" }}
            />
          </Col>
          <Col xs={12} md={6}>
            <p className="font-weight-bold" style={{ color: "#ff5e4f" }}>ABOUT</p>
            <h1 style={{ fontWeight: "900" }}>An Experience<br /> Design Company</h1>
            <h2 className="mt-3 fs-6" style={{fontWeight:"bold"}}>Provide a full range of services</h2>
            <p className="mt-3 text-body-secondary">
              Ability to put themselves in the merchant's shoes,it is<br /> Ment to partner to the long run and work as an extension<br /> of the merchant's team.
            </p>
            <Button className="mt-3 bg-white text-black border-0 shadow-sm " style={{ width: "9vw", fontSize: "0.9rem" }}>
              ABOUT US
            </Button>
          </Col>
        </Row>



        {/* Section 3: Stats */}
        <Row className="mb-5 justify-content-center">
          <Col xs={12} md={10}>
            <StatsGrid>
              <StatsBox>
                <StatsNumber>46%</StatsNumber>
                <StatsText>Years of Experience</StatsText>
              </StatsBox>
              <StatsBox>
                <StatsNumber>73+</StatsNumber>
                <StatsText>Agency members</StatsText>
              </StatsBox>
              <StatsBox>
                <StatsNumber>5.000</StatsNumber>
                <StatsText>Project Complete</StatsText>
              </StatsBox>
            </StatsGrid>
          </Col>
        </Row>



        {/* Section 4: Process */}
        <Row className="mb-5">
          <Col xs={12} md={6}>
            <p className="font-weight-bold " style={{ color: "#ff5e4f" }}>HOW WE WORK</p>
            <h1 style={{ fontWeight: "900"}}>Making Your Project<br /> Look Awesome</h1>
            <p className="mt-4 text-body-secondary">
              Technical skills, design, and business understanding, ability to<br />
              put themselves in the merchant's shoes.
            </p>
            <a href="/readmore" className=" mt-3 text-decoration-none text-black">Read More</a>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <ProcessStep>
                <ProcessStepNumber>1</ProcessStepNumber>
                <ProcessStepText>Full Service range including</ProcessStepText>
              </ProcessStep>
              <ProcessStep>
                <ProcessStepNumber>2</ProcessStepNumber>
                <ProcessStepText>Technical skills, design, business</ProcessStepText>
              </ProcessStep>
              <ProcessStep>
                <ProcessStepNumber>3</ProcessStepNumber>
                <ProcessStepText>Themselves in the merchant's</ProcessStepText>
              </ProcessStep>
            </div>
          </Col>
        </Row>

        <Divider />

        {/* Section 5: Video Reel */}
        <Row className="mb-5 align-items-center">
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <img
              src="/video1.png"
              alt="Video Reel"
              className="img-fluid rounded"
              style={{ maxWidth: "70%" }}
            />
          </Col>
          <Col xs={12} md={6}>
            <p className="font-weight-bold" style={{ color: " #ff5e4e" }}>VIDEO REEL</p>
            <VideoHeading>Unlock the Greatest<br /> Value Possible</VideoHeading>
            <VideoParagraph className="mt-3 text-body-secondary"> 
              Explore our work through our curated video reel, showcasing our
              best projects and results.
            </VideoParagraph>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default Section2;
