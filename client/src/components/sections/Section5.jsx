import React, { useState } from "react";
import styled from "styled-components";
import { Container, Button, Collapse } from "react-bootstrap";
import { ChevronDown, ChevronUp } from "lucide-react";

/* ---------- Wrapper ---------- */

const SectionWrapper = styled.section`
  padding: 6rem 2rem;
  background-color:rgba(253, 236, 236, 0.97);
`;

/* ---------- Subsection 1: Pricing ---------- */

const PricingWrapper = styled.div`
  margin-bottom: 6rem;
`;

const PricingHeader = styled.div`
  text-align: left;
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
  }
`;

const PricingGrid = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    flex: 1;
    border: 1px solid #ddd;
    border-radius: 0;
    padding: 2rem;
    background: white;
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    min-width: 280px;

    &:hover {
      transform: translateY(-8px) scale(1.03);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    }

    &:not(:last-child) {
      border-right: none;
    }
  }

  @media (max-width: 992px) {
    flex-direction: column;

    > div {
      border-right: 1px solid #ddd;
      &:not(:last-child) {
        border-bottom: none;
      }
    }
  }
`;

const Capsule = styled.span`
  display: inline-block;
  background: #ff5e4f;
  color: white;
  font-size: 0.7rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.6rem;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 0.6rem;
      background-color: #ffa07a;
    }

    &.highlight::before {
      background-color: #ff5e4f;
    }

    &.faded {
      opacity: 0.5;
    }
  }
`;

/* ---------- Subsection 2: FAQ ---------- */

const FAQWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`;

const FAQLeft = styled.div`
  flex: 1;

  h5 {
    text-transform: uppercase;
    color: #ff5e4f;
    font-size: 0.9rem;
    font-weight: 600;
  }

  h2 {
    font-size: 2.2rem;
    font-weight: 900;
    margin-bottom: 1rem;
     font-family: "Lato", sans-serif;
  }

  p {
    color: #555;
     font-family: "Lato", sans-serif;
     
  }

  a {
    display: inline-block;
    margin-top: 1rem;
    color: #ff5e4f;
    font-weight: 600;
    text-decoration: underline;
  }
`;

const FAQRight = styled.div`
  flex: 1;
`;

const AccordionBox = styled.div`
  border: 1px solid #ccc;
  border-radius: 0;
  margin-bottom: 0;
`;

const ToggleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
  font-weight: bold;
   font-family: "Lato", sans-serif;
`;

const Section5 = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (key) => {
    setOpenItem(openItem === key ? null : key);
  };

  return (
    <SectionWrapper>
      <Container>
        <PricingWrapper>
          <PricingHeader>
            <h5>Pricing</h5>
            <h2 >Check Our<br/> Pricing plans</h2>
          </PricingHeader>

          <PricingGrid>
            <div>
              <h6 style={{color:"#ff5e4e" ,textTransform:"uppercase", fontSize:"small"}}>Consultation</h6>
              <h3 className="strong fw-bold">Free</h3>
              <p>Your digital marketing efforts, instead of handling in-house.</p>
              <FeatureList>
                <li className="highlight">Brand Design</li>
                <li className="faded">Market Analysis</li>
                <li className="faded">Production</li>
              </FeatureList>
              <Button variant="outline-danger">Contact Us</Button>
            </div>
            <div>
              <Capsule>Popular</Capsule>
              <h6 style={{color:"#ff5e4e" ,textTransform:"uppercase", fontSize:"small"}}>Design</h6>
              <h3 className="strong fw-bold">$1500</h3>
              <p>Provide your business with a variety
              of digital solutions to promote.</p>
              <FeatureList>
                <li className="highlight">Brand Design</li>
                <li className="highlight">Market Analysis</li>
                <li className="faded">Production</li>
              </FeatureList>
              <Button variant="danger">Contact Us</Button>
            </div>
            <div>
              <h6 style={{color:"#ff5e4e" ,textTransform:"uppercase", fontSize:"small"}}>Design + Code</h6>
              <h3 className="strong fw-bold">$2500</h3>
              <p>Help you hit your marketing goals and grow your business.</p>
              <FeatureList>
                <li className="highlight">Brand Design</li>
                <li className="highlight">Market Analysis</li>
                <li className="highlight">Production</li>
              </FeatureList>
              <Button variant="danger">Contact Us</Button>
            </div>
          </PricingGrid>
        </PricingWrapper>

        <FAQWrapper>
          <FAQLeft>
            <h5>FAQ</h5>
            <h2>Frequently Asked<br/> Questions</h2>
            <p className="text-secondry">A digital agency is a business you hire to outsource your<br/> digital marketing efforts, instead of handling in-house.</p>
            <a href="#contact" className="text-decoration-none text-black">Contact Us</a>
          </FAQLeft>
          <FAQRight>
            <AccordionBox>
              <ToggleHeader onClick={() => toggleItem("1")}>
                <span>A Digital Agency is a business</span>
                {openItem === "1" ? <ChevronUp size={20} /> : <ChevronDown size={20} style={{background:"#ff5e4e",borderRadius:"50px" , color:"white"}}/>}
              </ToggleHeader>
              <Collapse in={openItem === "1"}>
                <div className="p-3">Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions
                to promote your product or service online and help you hit your marketing goals and grow your business.</div>
              </Collapse>

              <ToggleHeader onClick={() => toggleItem("2")}>
                <span>Hire to outsource your digital</span>
                {openItem === "2" ? <ChevronUp size={20} /> : <ChevronDown size={20} style={{background:"#ff5e4e",borderRadius:"50px" , color:"white"}}/>}
              </ToggleHeader>
              <Collapse in={openItem === "2"}>
                <div className="p-3">We start with discovery, design, and build.</div>
              </Collapse>

              <ToggleHeader onClick={() => toggleItem("3")}>
                <span>Marketing efforts</span>
                {openItem === "3" ? <ChevronUp size={20} /> : <ChevronDown size={20} style={{background:"#ff5e4e",borderRadius:"50px" , color:"white"}}/>}
              </ToggleHeader>
              <Collapse in={openItem === "3"}>
                <div className="p-3">Our average project takes 3–6 weeks.</div>
              </Collapse>

              <ToggleHeader onClick={() => toggleItem("4")}>
                <span>Can provide your business</span>
                {openItem === "4" ? <ChevronUp size={20} /> : <ChevronDown size={20} style={{background:"#ff5e4e",borderRadius:"50px" , color:"white"}}/>}
              </ToggleHeader>
              <Collapse in={openItem === "4"}>
                <div className="p-3">We offer long-term support plans.</div>
              </Collapse>
            </AccordionBox>
          </FAQRight>
        </FAQWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Section5;
