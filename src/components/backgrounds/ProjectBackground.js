import React from "react"
import styled from "styled-components"
function ProjectBackground() {
  return (
    <Wrapper>
      <Background />
      <Wave
        src="/images/waves/hero-wave3-dark.svg"
        style={{
          top: "0px",
          ilter: "blur(60px)",
          transform: "rotate(180deg)",
        }}
      />
      <Wave
        src="/images/waves/hero-wave1.svg"
        style={{ top: "750px", ilter: "blur(60px)" }}
      />
      <Wave
        src="/images/waves/hero-wave1.svg"
        style={{ top: "1650px", ilter: "blur(60px)" }}
      />
      {/* <BottomWave
        src="/images/waves/hero-wave3.svg"
        style={{ top: "550px " }}
      /> */}
    </Wrapper>
  )
}

export default ProjectBackground

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

const BottomWave = styled(Wave)`
  @media (prefers-colors-schemes: dark) {
    content: url("/images/waves/hero-wave3-dark.svg");
  }
`

const Background = styled.div`
  background-color: #d9afd9;
  background-image: linear-gradient(0deg, #d9afd9 35%, #97d9e1 100%);

  position: absolute;
  width: 100%;
  height: 2190px;
  z-index: -1;
  @media (max-width: 450px) {
    height: 3600px;
  }
`
