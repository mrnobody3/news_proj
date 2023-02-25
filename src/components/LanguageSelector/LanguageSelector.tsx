import React from "react"
import { useTranslation } from "react-i18next"
import { FormControl, Select, MenuItem, SelectChangeEvent } from "@mui/material"

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation()

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value as string)
  }

  return (
    <FormControl
      sx={{
        marginLeft: "auto",
        marginRight: "10px",
      }}
    >
      <Select
        variant='standard'
        sx={{
          color: "white",
          ".MuiSvgIcon-root ": {
            fill: "white",
          },
        }}
        value={i18n.language}
        onChange={(e) => handleLanguageChange(e)}
      >
        <MenuItem value='en'>Eng</MenuItem>
        <MenuItem value='ua'>Укр</MenuItem>
      </Select>
    </FormControl>
  )
}

export default LanguageSelector
