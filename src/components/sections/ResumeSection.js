import React from "react"
import styled, { keyframes } from "styled-components"
import { MockupAnimation } from "../animations/MockupAnimation"
import ResumeBackground from "../backgrounds/ResumeBackground"
import ViewPortfolioButton from "../buttons/ViewPortfolioButton"
import { themes } from "../styles/ColorStyles"
import { H2, MediumText } from "../styles/TextStyles"

const ResumeSection = () => {
  return (
    <Wrapper>
      <ResumeBackground />
      <ContentWrapper>
        <Rimg src="/images/Resume.jpg" alt="" />
      </ContentWrapper>
    </Wrapper>
  )
}

export default ResumeSection

const Wrapper = styled.div`
  overflow-x: hidden;
`

const ContentWrapper = styled.div`
  z-index: -1;
  margin: 0 auto;
  height: 1400px;

  padding-top: 150px;
  margin-left: 10%;

  display: grid;
  justify-content: center;
  align-items: center;
  /* @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  } */
  top: 5px;
  @media (max-width: 450px) {
    padding-top: 0;
    margin: 0;
    margin: 40px;
    margin-top: 120px;
    display: block;
  }
`
const Rimg = styled.img`
  width: 900px;
  margin-right: 100px;
  z-index: 999;
  @media (max-width: 450px) {
    width: 300px;
  }
`
