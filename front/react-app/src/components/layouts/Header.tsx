import React from 'react';

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
        <Link to="/">
          <HeaderButton>Home</HeaderButton>
        </Link>
        <HeaderButton>Two</HeaderButton>
        <Link to="signin" >
          <HeaderButton>
            ログイン
          </HeaderButton>
        </Link>
      </ButtonGroup>
    </Box>
  );
}

export default Header
