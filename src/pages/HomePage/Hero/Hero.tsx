import React from "react"
import { useTranslation } from "react-i18next"
import { SubTitleStyled, TitleStyled } from "./Hero.styled"

const Hero: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <TitleStyled>{t("hero.title")}</TitleStyled>
      <SubTitleStyled>{t("hero.pretitle")}</SubTitleStyled>
    </div>
  )
}

export default Hero
