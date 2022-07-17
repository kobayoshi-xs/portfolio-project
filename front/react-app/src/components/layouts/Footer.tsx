import React from "react";

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { AppBar } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';

export const Footer: React.VFC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        pt: 5,
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
        color: 'black',
        bgcolor: 'orange',
        width: 'auto',
        position: 'static',
      }}
    >
      <BottomNavigation>
        <CopyrightIcon />
      </BottomNavigation>
    </Box>
  )
}
