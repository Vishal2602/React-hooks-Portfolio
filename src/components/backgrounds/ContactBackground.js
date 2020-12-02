import React from "react"
import styled from "styled-components"
function ContactBackground() {
  return (
    <Wrapper>
      <Background />
      <Wave
        src="/images/waves/Paths2.svg"
        style={{ top: "100px", opacity: "90%" }}
      />
      <Wave
        src="/images/waves/Paths1.svg"
        style={{ top: "550px", left: "600px" }}
      />
      <Wave
        src="/images/waves/Paths2.svg"
        style={{ top: "100px", left: "1100px", transform: "rotate(180deg)" }}
      />
      {/* <Wave
        src="/images/waves/hero-wave1.svg"
        style={{ top: "750px", ilter: "blur(60px)" }}
      /> */}
      {/* <BottomWave
        src="/images/waves/hero-wave3.svg"
        style={{ top: "550px " }}
      /> */}
    </Wrapper>
  )
}

export default ContactBackground

const Wrapper = styled.div`
  position: relative;
`

const Wave = styled.img`
  position: absolute;
  z-index: -1;
  @media (min-width: 1440px) {
    width: 100%;
  }
`

const Background = styled.div`
  background-color: #be7dff;
  background-image: linear-gradient(62deg, #be7dff 29%, #7dbbf9 100%);
  position: absolute;
  width: 100%;
  height: 790px;
  z-index: -1;
  @media (max-width: 450px) {
    height: 1100px;
  }
`
