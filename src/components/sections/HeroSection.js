import React from "react"
import styled, { keyframes } from "styled-components"
import { MockupAnimation } from "../animations/MockupAnimation"
import WaveBackground from "../backgrounds/WaveBackground"
import ViewPortfolioButton from "../buttons/ViewPortfolioButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"

const HeroSection = () => {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Hello <br />
            There 👋
          </Title>
          <Description>Welcome to my new site.</Description>
          <ViewPortfolioButton title="View Projects" subtitle="(React)" />
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const animations = keyframes`
0%{ opacity:0; transformY(-10px); filter:blur(10px);}
100%{opacity:1; transformY(0px); filter:blur(0px);}
`

const Wrapper = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
    opacity: 0;
    animation: ${animations} 1s 0.2s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.25s;
    }
    :nth-child(3) {
      animation-delay: 0.5s;
    }
  }
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
  /* background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent; */
  @media (max-width: 450px) {
    font-size: 48px;
  }
`

const Description = styled(MediumText)``
