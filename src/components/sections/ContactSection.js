import React from "react"
import styled, { keyframes } from "styled-components"
import { MockupAnimation } from "../animations/MockupAnimation"
import ContactBackground from "../backgrounds/ContactBackground"
import ViewPortfolioButton from "../buttons/ViewPortfolioButton"
import Header from "../layout/Header"
import { themes } from "../styles/ColorStyles"
import { H2, MediumText } from "../styles/TextStyles"
import Contact from "./Contact"

const ContactSection = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <ContactBackground />
        <ContentWrapper>
          <Contact />
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

export default ContactSection

const Wrapper = styled.div`
  overflow-x: hidden;
  height: 790px;
  @media (max-width: 450px) {
    height: 1100px;
  }
`

const ContentWrapper = styled.div`
  margin-top: 130px;

  margin-left: 10%;
  position: relative;
  display: grid;
  justify-content: center;
  /* align-items: center; */
  /* @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  } */
`

const Cont = styled.div``
