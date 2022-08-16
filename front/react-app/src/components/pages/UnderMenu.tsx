import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const UnderMenu: React.VFC = () => {
  const [APIDatas, setAPIDatas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/rakuten/lists').then((response) => {
      setAPIDatas(response.data);
    });
  }, []);
  console.log(APIDatas)

  const FormRow = () => {
    return(
      <React.Fragment>
        {APIDatas.map(() => (
          <Grid item xs={4}>
            <Item>Item</Item>
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return(
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}

export default UnderMenu
