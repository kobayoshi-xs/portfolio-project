import React, { useState, useEffect } from "react";

import { List } from "@mui/icons-material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import axios from "axios";

import RecipeArea from "components/layouts/RecipeArea";

import { LargeCategoties } from 'interfaces'

const RecipeLarge: React.VFC = () => {
  const [APIDatas, setAPIDatas] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/rakuten/larges').then((response) => {
      setAPIDatas(response.data);
    });
  }, []);//この"[]"はコンポーネントのマウント時だけでなく、更新時にも実行されてしまうのを防ぐためにある。
  console.log(APIDatas)

  return (
    <List>
          {APIDatas.map((APIData: LargeCategoties, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={APIData.params.categoryName} />
            </ListItem>
          ))}
    </List>
  );
  {/*<ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">カテゴリー大</ListSubheader>
      </ImageListItem>
      {APIDatas.map((APIData: LargeCategoties, index) => (
        <ImageListItem key={index}>
          <img
            //src={`${APIData.img}?w=248&fit=crop&auto=format`}
            //srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt="画像データ予定"
            loading="lazy"
          />
          <ImageListItemBar
            title={APIData.params.categoryName}
            subtitle="Nil"
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${APIData.params.categoryName}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
      </ImageList>*/}
}
export default RecipeLarge
