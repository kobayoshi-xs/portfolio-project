import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from "@emotion/styled";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link }  from "react-router-dom";

export const SignOut: React.VFC = () => {
  const navigate = useNavigate();

  const HeaderButton = styled(Button)({
    m: 100,
  });

  return (
    <Link to="/">
      <HeaderButton>Home</HeaderButton>
    </Link>
  );
}
