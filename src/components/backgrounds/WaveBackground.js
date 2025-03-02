import React from "react"
import styled from "styled-components"
function WaveBackground() {
  return (
    <Wrapper>
      <Background />
      <Wave
        src="/images/waves/Path3.svg"
        style={{ opacity: "50%", filter: "blur(0px)" }}
      />
      <Wave src="/images/waves/Path4.svg" style={{ opacity: "50%" }} />
      <Wave src="/images/waves/Path2.svg" style={{ opacity: "50%" }} />
      {/* <Wave
        src="/images/waves/hero-wave1.svg"
        style={{ top: "100px", filter: "blur(60px)" }}
      />
      <Wave src="/images/waves/hero-wave2.svg" style={{ top: "350px" }} />
      <BottomWave
        src="/images/waves/hero-wave3.svg"
        style={{ top: "550px " }}
      /> */}
    </Wrapper>
  )
}

export default WaveBackground

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
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  position: absolute;
  width: 100%;
  height: 1200px;
  z-index: -1;
`
