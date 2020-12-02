import React from "react"
import styled, { keyframes } from "styled-components"
import ViewPortfolioButton from "../buttons/ViewPortfolioButton"
import { themes } from "../styles/ColorStyles"
import { H2, MediumText } from "../styles/TextStyles"
function Projects() {
  return (
    <div>
      <Wrapper>
        <TextWrapper>
          <Title2>
            Here are some personal projects I've made while learning!!
            <br /> Hope you find it intersting!! You can find all the projects
            <br /> in my
            <span>
              <a href="https://github.com/Vishal2602"> Github Repo</a>
            </span>
            , feel free to check it out!!!
          </Title2>
        </TextWrapper>
        <ContentWrapper>
          <ProjWrapper>
            <ImgTitle>
              <Title>Covid-19 Tracker</Title>
              <Img src="/images/covidtracker.png" />
            </ImgTitle>
            <TextWrapper>
              <Description>
                A simple Covid Tracker built using ReactJS. This application is
                used to track the information about Covid-19 across the world.
                <br />
                <br />
                Tech: React, Material UI, Netlify
                <br />
                API: Disease.sh
              </Description>
              <ViewPortfolioButton
                title="Go to Project"
                subtitle=""
                link="https://covidgps.netlify.app"
              />
              <ViewPortfolioButton
                title="Github"
                subtitle=""
                link="https://github.com/Vishal2602/The-Covid-Tracker"
                icon="/images/icons/github.svg"
              />
            </TextWrapper>
          </ProjWrapper>
        </ContentWrapper>
        <ContentWrapper>
          <ProjWrapper>
            <ImgTitle>
              <Title>dot MD</Title>
              <Img src="/images/dotmd.png" />
            </ImgTitle>
            <TextWrapper>
              <Description>
                dotMD is a markdown blog which allows you post new blogs, read
                blogs and edit existing.
                <br />
                <br />
                Tech: NodeJS, Bootstrap and MongoDB
              </Description>
              <ViewPortfolioButton
                title="Go to Project"
                subtitle=""
                link="https://dotmd.herokuapp.com/"
              />
              <ViewPortfolioButton
                title="Github"
                subtitle=""
                link="https://github.com/Vishal2602/dotMD"
                icon="/images/icons/github.svg"
              />
            </TextWrapper>
          </ProjWrapper>
        </ContentWrapper>
        <ContentWrapper>
          <ProjWrapper>
            <ImgTitle>
              <Title>Crypt Tracker</Title>
              <Img src="/images/crypttracker.png" />
            </ImgTitle>
            <TextWrapper>
              <Description>
                Crypt Tracker is a real-time cryptocurrency tracker using React
                js.
                <br />
                <br />
                Tech: React, HTML, CSS, Netlify
                <br />
                API: Coingecko.com
              </Description>
              <ViewPortfolioButton
                title="Go to Project"
                subtitle=""
                link="https://crypttracker.netlify.app/"
              />
              <ViewPortfolioButton
                title="Github"
                subtitle=""
                link="https://github.com/Vishal2602/Crypt-Tracker"
                icon="/images/icons/github.svg"
              />
            </TextWrapper>
          </ProjWrapper>
        </ContentWrapper>
        <ContentWrapper>
          <ProjWrapper>
            <ImgTitle>
              <Title>Google Map Clone</Title>
              <Img src="/images/mapbox.png" />
            </ImgTitle>
            <TextWrapper>
              <Description>
                This is Google Maps clone which is developed using mapbox API.
                <br />
                <br />
                Tech: React, HTML, CSS, Netlify
                <br />
                API: Coingecko.com
              </Description>
              <ViewPortfolioButton
                title="Go to Project"
                subtitle=""
                link="https://vishal2602.github.io/googlemaps-clone-mapbox"
              />
              <ViewPortfolioButton
                title="Github"
                subtitle=""
                link="https://github.com/Vishal2602/googlemaps-clone-mapbox"
                icon="/images/icons/github.svg"
              />
            </TextWrapper>
          </ProjWrapper>
        </ContentWrapper>
      </Wrapper>
    </div>
  )
}

export default Projects

const animations = keyframes`
0%{ opacity:0; transformY(-10px); filter:blur(10px);}
100%{opacity:1; transformY(0px); filter:blur(0px);}
`

const Wrapper = styled.div`
  margin-top: 150px;
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  /* padding: 200px 30px; */

  /* position: relative; */

  /* @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  } */
`
const ProjWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 60px;
  padding: 25px;
  margin-right: 10%;
  margin-left: 10%;
  background: rgba(39, 20, 62, 0.3);
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  margin-bottom: 40px;
  border-radius: 20px;

  @media (max-width: 450px) {
    grid-template-columns: auto;
  }
`
const ImgTitle = styled.div``

const Img = styled.img`
  width: 450px;
  margin-top: 30px;
  border-radius: 15px;
  @media (max-width: 450px) {
    width: 250px;
  }
`

const TextWrapper = styled.div`
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

const Title2 = styled.p`
  color: white;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 60px;
  line-height: 35px;
`

const Title = styled(H2)`
  color: ${themes.dark.text1};
  /* background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent; */
  @media (max-width: 450px) {
    font-size: 28px;
  }
`

const Description = styled(MediumText)`
  overflow-wrap: break-word;
  font-size: 20px;
  font-weight: semi;
  color: white;
`
