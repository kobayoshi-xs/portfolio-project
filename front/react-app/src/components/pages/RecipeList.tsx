import React, { useState, useEffect } from "react";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import axios from "axios";

import { Ranking } from "interfaces";

const RecipeList: React.VFC = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [APIDatas, setAPIDatas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/rakuten/lists').then((response) => {
      setAPIDatas(response.data);
    });
  }, []);
console.log(APIDatas)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <ImageList sx={{ width: "auto", height: "auto" }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">メニュー一覧</ListSubheader>
      </ImageListItem>
      {APIDatas.map((APIData: Ranking, index) => (
        <ImageListItem key={APIData.params.foodImageUrl}>
          <img
            src={`${APIData.params.foodImageUrl}?w=248&fit=crop&auto=format`}
            srcSet={`${APIData.params.foodImageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={APIData.params.recipeTitle}
            loading="lazy"
          />
          <ImageListItemBar
            title={APIData.params.recipeTitle}
            subtitle={APIData.params.nickname}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${APIData.params.recipeTitle}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default RecipeList
