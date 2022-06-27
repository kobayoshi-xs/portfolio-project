import React from 'react';

import { AppBar } from '@mui/material';
import { Container, Grid } from "@mui/material";
/*import { styled } from "@mui/material/styles";*/
import styled from "@emotion/styled";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link }  from "react-router-dom";

const Header: React.VFC = () => {
  const HeaderButton = styled(Button)({
    m: 100,
  });

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Box
        sx={{
          display: 'flex',
          pt: 1,
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
          <Link to="/">
            <HeaderButton>Home</HeaderButton>
          </Link>
          <Link to="recipeArea">
            <HeaderButton>Recipe</HeaderButton>
          </Link>
          <Link to="signin" >
            <HeaderButton>
              ログイン
            </HeaderButton>
          </Link>
        </ButtonGroup>
      </Box>
    </AppBar>
  );
}

export default Header
