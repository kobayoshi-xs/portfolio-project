import React from "react";

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { AppBar } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';

import FooterIcon from "components/utils/FooterIcon";

export const Footer: React.VFC = () => {
  return (
    <Box
      sx={{
        //display: 'flex',
        pt: 5,
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
        color: 'black',
        bgcolor: 'orange',
        //width: 'auto',
        //position: 'static',
        width: 1,
        height: '5%',
        position: "fixed",
        //position: 'absolute',
        bottom: 0,
        mt: 'auto',
        zIndex: 'tooltip',
      }}
    >
      <FooterIcon />
      {/*<BottomNavigation>*/}
        {/*<CopyrightIcon />*/}
      {/*</BottomNavigation>*/}
    </Box>
  )
}
