import React from "react"
import { SubTitleStyled, TitleStyled } from "./Hero.styled"

const Hero: React.FC = () => {
  return (
    <div>
      <TitleStyled>Breaking News</TitleStyled>
      <SubTitleStyled>
        Stay up-to-date with the latest news and headlines from around the
        world.
      </SubTitleStyled>
    </div>
  )
}

export default Hero
