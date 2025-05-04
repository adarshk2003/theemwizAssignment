import React from "react";
import styled, { keyframes } from "styled-components";
import { Container, Form, Button } from "react-bootstrap";

/* ---------- Background & Wrapper ---------- */

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const SectionWrapper = styled.section`
  background: url("/map.png") center/cover no-repeat;
  padding: 8rem 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormBox = styled.div`
  background: rgba(255, 255, 255, 0.96);
  padding: 3rem;
  border-radius: 5px;
  max-width: 600px;
  width: 100%;
  animation: ${fadeIn} 1s ease forwards;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: 576px) {
    padding: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: left;
   font-family: "Lato", sans-serif;
`;

/* ---------- Styled Form Elements ---------- */

const StyledFormGroup = styled(Form.Group)`
  margin-bottom: 1.5rem;
`;

const StyledButton = styled(Button)`
  float: right;
  padding: 0.6rem 1.8rem;
  font-weight: 600;
  transition: all 0.3s ease;
  background-color: #ff5e4f;
  border: none;

  &:hover {
    background-color: #e14b3d;
  }
`;

/* ---------- Component ---------- */

const Section6 = () => {
  return (
    <SectionWrapper>
      <Container>
        <FormBox>
          <Title>Get In Touch</Title>
          <Form>
            <StyledFormGroup controlId="formName">
              <Form.Control type="text" placeholder="Your Name" />
            </StyledFormGroup>

            <StyledFormGroup controlId="formSubject">
              <Form.Select>
                <option>Select Subject</option>
                <option>Design Inquiry</option>
                <option>Development</option>
                <option>General Question</option>
              </Form.Select>
            </StyledFormGroup>

            <StyledFormGroup controlId="formMessage">
              <Form.Control as="textarea" rows={4} placeholder="Your Message" />
            </StyledFormGroup>

            <StyledButton type="submit">Submit</StyledButton>
          </Form>
        </FormBox>
      </Container>
    </SectionWrapper>
  );
};

export default Section6;
