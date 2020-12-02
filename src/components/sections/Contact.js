import React from "react"
import styled from "styled-components"
import ViewPortfolioButton from "../buttons/ViewPortfolioButton"
import { H2, MediumText } from "../styles/TextStyles"
function Contact() {
  return (
    <div>
      <Wrapper>
        <Rimg>
          <Img src="/images/avatars/Profile.png" />
          <TextWrapper>
            <Title>Vishal Sunil Kumar</Title>
            <Description>Web Development | UI Design</Description>
          </TextWrapper>
          <Content>
            <ViewPortfolioButton
              title="Mail"
              subtitle="vishals2602@gmail.com"
              link=""
              icon="/images/icons/email.svg"
            >
              <a href="mailto:vishals2602@gmail.com"></a>
            </ViewPortfolioButton>
            <ViewPortfolioButton
              title="Call"
              subtitle="+91 9840468865"
              // link="https://github.com/Vishal2602"
              icon="/images/icons/call.svg"
            >
              <a href="tel:+91 9840468865"></a>
            </ViewPortfolioButton>
            <ViewPortfolioButton
              title="Linked In"
              subtitle=""
              link="https://www.linkedin.com/in/vishals2602/"
              icon="/images/icons/linkedin.svg"
            />
            <ViewPortfolioButton
              title="Github"
              subtitle=""
              link="https://github.com/Vishal2602"
              icon="/images/icons/github.svg"
            />
          </Content>
        </Rimg>
      </Wrapper>
    </div>
  )
}

export default Contact

const Wrapper = styled.div``

const Rimg = styled.div`
  display: grid;
  justify-items: center;
  padding: 25px;
  background: rgba(255, 255, 255, 0.6);
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(34, 79, 169, 0.3);
  backdrop-filter: blur(100px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
  width: auto;
  margin-right: 100px;
  @media (max-width: 450px) {
    margin-left: 70px;
  }
`

const Img = styled.img`
  /* margin-left: 50px; */
  width: 250px;
  border-radius: 500px;
`

const TextWrapper = styled.div`
  /* max-width: 560px; */
  margin-top: 20px;
`

const Content = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 30px;
  }
`

const Title = styled(H2)`
  color: black;
  /* background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent; */
  @media (max-width: 450px) {
    font-size: 28px;
  }
`

const Description = styled(MediumText)`
  margin-top: 10px;
  margin-left: 42px;
  overflow-wrap: break-word;
  font-size: 20px;
  font-weight: semi;
  color: black;
  @media (max-width: 450px) {
    font-size: 20px;
    overflow-wrap: break-word;
    margin-left: 30px;
  }
`
