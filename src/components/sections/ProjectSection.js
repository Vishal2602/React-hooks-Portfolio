import React from "react"
import styled from "styled-components"
import ProjectBackground from "../backgrounds/ProjectBackground"
import Header from "../layout/Header"
import Projects from "./Projects"

const ProjectSection = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <ProjectBackground />
        <Projects />
      </Wrapper>
    </>
  )
}

export default ProjectSection

const Wrapper = styled.div`
  overflow-x: hidden;
  height: 2190px;
  @media (max-width: 450px) {
    height: 3600px;
  }
`
