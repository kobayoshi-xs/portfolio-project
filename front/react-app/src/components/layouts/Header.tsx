import React from 'react';

import { Container, Grid } from "@mui/material";
/*import { styled } from "@mui/material/styles";*/
import styled from "@emotion/styled";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const HeaderButton = styled(Button)({
  m: 100,
});

const Header: React.VFC = () => {
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
        color: 'red',
        bgcolor: 'blue',
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <HeaderButton>One</HeaderButton>
        <HeaderButton>Two</HeaderButton>
        <HeaderButton>新規登録</HeaderButton>
      </ButtonGroup>
    </Box>
  )
}

export default Header
