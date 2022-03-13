import React from 'react'

import { Container, Grid } from "@mui/material"
import { styled } from "@mui/material/styles"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const HeaderButton = styled(Button)({
    backgroundColor: 'red'
});

const Header: React.VFC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <HeaderButton>One</HeaderButton>
        <HeaderButton>Two</HeaderButton>
        <HeaderButton>Three</HeaderButton>
      </ButtonGroup>
      <ButtonGroup variant="text" aria-label="text button group">
        <HeaderButton>One</HeaderButton>
        <HeaderButton>Two</HeaderButton>
        <HeaderButton>Three</HeaderButton>
      </ButtonGroup>
    </Box>
  )
}

export default Header
