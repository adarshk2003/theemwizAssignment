import React, { useRef } from "react";
import styled from "styled-components";
import { Container, Button } from "react-bootstrap";
import { ArrowLeft, ArrowRight } from "lucide-react";

/* ---------------- Wrapper ---------------- */

const SectionWrapper = styled.section`
  padding: 5rem 2rem;
  background-color: #2d2141;
`;

/* ---------------- Subsection 1 ---------------- */

const RelativeContainer = styled.div`
  position: relative;
  margin-bottom: 10rem; /* increased space between subsections */
  min-height: 280px; /* ensures room for the OutsideImage */
  
  @media (max-width: 992px) {
    min-height: 360px; 
  }
`;


const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: white;
  border-radius: 10px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  z-index: 1;
  position: relative;
  align-items: center;
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 2rem;
  }
`;

const TextBlock = styled.div`
  z-index: 2;

  h5 {
    text-transform: uppercase;
    color: #ff5e4f;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.6rem 1.5rem;
    font-weight: 600;
  }
`;

const GridImage = styled.img`
  width: 100%;
  border-radius: 1rem;
  object-fit: cover;
`;
const OutsideImage = styled.img`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  width: 180px;
  max-width: 35vw; /* limits size on smaller screens */
  z-index: 2;

  @media (max-width: 992px) {
    position: absolute;
    right: 10px;
    top: 100%;
    transform: translateY(-20%);
    width: 120px;
    max-width: 30vw;
  }

  @media (max-width: 576px) {
    width: 100px;
    max-width: 40vw;
    right: 5px;
  }
`;

const StarImage = styled.img`
  position: absolute;
  top: -40px;
  left: 30px;
  width: 80px;
  z-index: 3;

  @media (max-width: 768px) {
    top: -15px;
    left: 10px;
    width: 40px;
  }

  @media (max-width: 480px) {
    width: 30px;
    top: -10px;
    left: 5px;
  }
`;


/* ---------------- Subsection 2 ---------------- */

const TeamSection = styled.div`
  margin-top: 6rem;
`;

const TeamHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;

  h5 {
    text-transform: uppercase;
    color: #ff5e4f;
    font-size: 0.9rem;
    font-weight: 600;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 900;
    color: white;
  }

  .arrows {
    display: flex;
    gap: 1rem;

    button {
      background: none;
      border: 1px solid #ccc;
      border-radius: 50%;
      padding: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      svg {
        stroke: #fff;
      }

      &:hover {
        border-color: #ff5e4f;
        svg {
          stroke: #ff5e4f;
        }
      }
    }
  }
`;

const ScrollWrapper = styled.div`
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardGrid = styled.div`
  display: flex;
  gap: 2rem;
  min-width: fit-content;
`;

const TeamCard = styled.div`
  flex: 0 0 220px;
  padding: 1.5rem;
  text-align: left;
  color: white;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 220px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
  }
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.6rem;

  span {
    width: 10px;
    height: 10px;
    background: #ddd;
    border-radius: 50%;

    &.active {
      background: #ff5e4f;
    }
  }
`;

/* ---------------- Component ---------------- */

const Section4 = () => {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    const slider = sliderRef.current;
    const scrollAmount = 240;

    if (slider) {
      slider.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <SectionWrapper>
      <Container>

        {/* Subsection 1 */}
        <RelativeContainer>
          <GridBox>
            <TextBlock>
              <h5>Get Started</h5>
              <h2>We help companies to move faster</h2>
              <Button variant="danger">Contact Us</Button>
            </TextBlock>

            <div>
              <GridImage src="/block.png" alt="Middle" />
            </div>

            <div /> {/* Keeps 3-column grid structure intact */}
          </GridBox>

          <OutsideImage src="/photo2.png" alt="Side" />
          <StarImage src="/icon.png" alt="Star" />
        </RelativeContainer>

        {/* Subsection 2 */}
        <TeamSection>
          <TeamHeader>
            <div>
              <h5>Our Team</h5>
              <h2>Team of Designers<br />and Developers</h2>
            </div>
            <div className="arrows">
              <button onClick={() => scrollSlider("left")}>
                <ArrowLeft size={20} />
              </button>
              <button onClick={() => scrollSlider("right")}>
                <ArrowRight size={20} />
              </button>
            </div>
          </TeamHeader>

          <ScrollWrapper ref={sliderRef}>
            <CardGrid>
              {[1, 2, 3, 4, 1,].map((i) => (
                <TeamCard key={i}>
                  <ImageWrapper>
                    <img src={`/contributers${i}.png`} alt={`Member ${i}`} />
                  </ImageWrapper>
                  <h4>Member {i}</h4>
                  <p>{i % 2 === 0 ? "Developer" : "Designer"}</p>
                </TeamCard>
              ))}
            </CardGrid>
          </ScrollWrapper>

          <SliderDots>
            <span className="active" />
            <span />
            <span />
          </SliderDots>
        </TeamSection>

      </Container>
    </SectionWrapper>
  );
};

export default Section4;
