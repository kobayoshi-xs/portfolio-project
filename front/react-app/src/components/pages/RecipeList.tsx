import React, { useState, useEffect } from "react";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import axios from "axios";

import SideMenu from "components/utils/SideMenu";
import { Ranking } from "interfaces";
import { Categoties } from "interfaces";

import { PostList } from "components/layouts/RecipeArea";
import { GetList } from "./RecipeSeach";
import { useContext } from "react";
import { SettingsInputCompositeTwoTone } from "@mui/icons-material";


const RecipeList: React.VFC = () => {
  //const [APIDatas, setAPIDatas] = useState([]);
  //const [post, setPost] = useState([]);

  const RecipeContext = useContext(PostList);
  //const FirstContext = useContext(GetList);

  const {APIDatas, setAPIDatas} = useContext(GetList);
  //useEffect(() => {
    //axios.get('http://localhost:3000/api/v1/rakuten/items').then((response) => {
      //setAPIDatas(response.data);
      //console.log(response.data)
    //});
  //}, []);

  console.log(APIDatas)


  useEffect(() => {
    //const createPost = (APIDatas: Categoties) => {
    //console.log(APIData)
      //axios.post('http://localhost:3000/api/v1/rakuten/items',)
      //.then((response) => {
        //setPost(response.data);
        //setAPIDatas(response.data)
        //console.log("成功")
       //console.log(response.data);
      //}).catch((e) => {
        //console.log(e.response.data.messages)
    //});
    //console.log(APIDatas)

    setAPIDatas(RecipeContext)
    console.log(APIDatas)
  }, [RecipeContext]);
//console.log(APIDatas)

const drawerWidth = 240;

  return (
    <ImageList sx={{ width: "auto", height: "auto", }}>
      <ImageListItem key="Subheader" cols={4}>
        <ListSubheader component="div">メニュー一覧</ListSubheader>
      </ImageListItem>
      {/*{APIDatas.flat().map((APIData: Ranking, index) => (*/}
      {APIDatas.flat().map((APIData: Ranking) => (
        <ImageListItem key={APIData.params.foodImageUrl} sx={{ width: 240, height: 50 }}>
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
    )
  }

export default RecipeList
