import React, { useState, useEffect } from "react";
import Box, { BoxProps } from '@mui/material/Box';

import { Categoties } from "interfaces";
import axios from "axios";

const UnderMenu: React.VFC = () => {
  const [APIDatas, setAPIDatas] = useState([]);
  const [Post, setPost] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/rakuten/lists').then((response) => {
      setAPIDatas(response.data);
    });
  }, []);
  console.log(APIDatas)

  const createPost = (APIData: Categoties) => {
    //console.log(APIData)
    axios.post('http://localhost:3000/api/v1/rakuten/lists', {APIData: APIData})
    .then((response) => {
      setPost(response.data);
      console.log("成功")
    }).catch((e) => {
      console.log(e.response.data.messages)
    });
  }

  const Item = (props: BoxProps) => {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
  }

  return(
    <Box
     sx={{
        display: 'flex',
        flexWrap: 'wrap',
        p: 1,
        m: 1,
        bgcolor: 'background.paper',
        maxWidth: 300,
        borderRadius: 1,
      }}
    >
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
      <Item>Item 4</Item>
      <Item>Item 5</Item>
      <Item>Item 6</Item>
    </Box>
  );
}

export default UnderMenu
