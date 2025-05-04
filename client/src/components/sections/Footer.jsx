import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

/* ---------- top ---------- */

const FooterWrapper = styled.footer`
  background: #fbded0;
  color: black;
  padding: 4rem 0 2rem;
  font-size: 0.95rem;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
  }
`;

const LogoText = styled.h3`
  font-family: "Lato", sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: black;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  color:  #ff5e4f;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0.4rem 0;
     font-family: "Lato", sans-serif;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #ff5e4f;
    }
  }
`;


const SocialIcons = styled.div`
  display: flex;
  gap: 12px;

  svg {
    background-color: #ff5e4f; 
    color: white;
    border-radius: 50%;
    padding: 10px;
    width: 35px;
    height: 35px;
    box-sizing: content-box;
    transition: all 0.3s ease;

    &:hover {
      background-color:rgb(248, 124, 112); 
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #444;
  margin: 2rem 0;
`;

/* ---------- bottom ---------- */

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 0.85rem;
  color: #888;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    text-align: center;
  }
`;

const Terms = styled.div`
  display: flex;
  gap: 1.5rem;

  span {
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #ff5e4f;
    }
  }
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <TopSection>
                    <Column>
                        <LogoText>Agency</LogoText>
                    </Column>

                    <Column>
                        <Heading>Menu</Heading>
                        <LinkList>
                            <li>About</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </LinkList>
                    </Column>

                    <Column>
                        <Heading>Services</Heading>
                        <LinkList>
                            <li>Design</li>
                            <li>Development</li>
                            <li>Marketing</li>
                            <li>See More</li>
                        </LinkList>
                    </Column>

                    <SocialIcons>
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                    </SocialIcons>
                </TopSection>

                <Divider />

                <BottomSection>
                    <span>© {new Date().getFullYear()} Agency. All rights reserved.</span>
                    <Terms>
                        <span>Terms of Use</span>
                        <span>Privacy Policy</span>
                    </Terms>
                </BottomSection>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;
