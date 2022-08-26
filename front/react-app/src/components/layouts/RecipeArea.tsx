import React from "react";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import SideMenu from "components/utils/SideMenu";
import RecipeSeach from "components/pages/RecipeSeach";
import { relative } from "path/posix";

const RecipeArea: React.VFC = () => {
  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      {/*<Box sx={{overflow: 'auto'}}>*/}
        <SideMenu />
      {/*</Box>*/}
      <Box component="main" sx={{ flexGrow: 1, p: 3, position: "relative" }}>
        <Toolbar />
        <RecipeSeach />
      </Box>
    </Box>
  )
}

export default RecipeArea
