import * as React from "react"
import Box from "@mui/material/Box"
import LinearProgress from "@mui/material/LinearProgress"

const LinearLoader: React.FC = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress color='success' />
    </Box>
  )
}

export default LinearLoader
