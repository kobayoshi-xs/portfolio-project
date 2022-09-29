import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import styled from "@emotion/styled";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link }  from "react-router-dom";
import { AlarmTwoTone } from '@mui/icons-material';

import { signOut } from 'lib/api/auth';

export const SignOut: React.VFC = () => {
  const navigate = useNavigate();

  const handleSignOut = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    try {
      const res = await signOut()

      if (res.data.success === true) {
        Cookies.remove("_access_token")
        Cookies.remove("_client")
        Cookies.remove("_uid")

        navigate("/signin")
      } else {
        console.log("error")
      }
    } catch(e) {
      console.log("error")
    }
  }

  const HeaderButton = styled(Button)({
    m: 100,
  });

  return (
    <Link to="/">
      <HeaderButton onClick={handleSignOut}>サインアウト</HeaderButton>
    </Link>
  );
}
