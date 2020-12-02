import React from "react"
import styled from "styled-components"
function ProjectBackground() {
  return (
    <Wrapper>
      <Background />
      <Wave
        src="/images/waves/testimonial-wave4.svg"
        style={{ top: "100px", filter: "blur(60px)", opacity: "90%" }}
      />
      <Wave src="/images/waves/hero-wave2.svg" style={{ top: "10px" }} />
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
  background: #26266a;
  position: absolute;
  width: 100%;
  height: 1400px;
  z-index: -1;
`
