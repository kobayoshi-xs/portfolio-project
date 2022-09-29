import React from "react";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import SideMenu from "components/utils/SideMenu";
import RecipeSeach from "components/pages/RecipeSeach";
import { relative } from "path/posix";

import { useState, useEffect } from "react";
import { createContext } from "react";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import axios from "axios";
import { Categoties } from 'interfaces'

//import RecipeList from "components/pages/RecipeList";

export const PostList = createContext([]);

//export const PostList = createContext({} as {
//  post: any
//  setPost: React.Dispatch<React.SetStateAction<any>>
//});

const RecipeArea: React.VFC = () => {

  const [APIDatas, setAPIDatas] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/rakuten/larges').then((response) => {
      setAPIDatas(response.data);
    });
  }, []);//この"[]"はコンポーネントのマウント時だけでなく、更新時にも実行されてしまうのを防ぐためにある。
  //console.log(APIDatas)

  const createPost = (APIData: Categoties) => {
    //console.log(APIData)
    axios.post('http://localhost:3000/api/v1/rakuten/items', {APIData: APIData})
    .then((response) => {
      setPost(response.data);
      //<RecipeList {...response.data} />
      console.log("成功")
      console.log(response.data);
    }).catch((e) => {
      console.log(e.response.data.messages)
    });
  }

  //const value = {
  //  post,
  //  setPost,
  //};

  const drawerWidth = 240;



  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      {/*<Box sx={{overflow: 'auto'}}>*/}
      <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {APIDatas.map((APIData: Categoties, index) => (
            <ListItem button onClick={() => createPost(APIData)} key={index}>
              <div style={{display: 'none'}}>{APIData.category_id}</div>
              <ListItemText primary={APIData.category_name} />
            </ListItem>
          ))}
        </List>
      </Box>
      </Drawer>
        {/*<SideMenu />*/}
      {/*</Box>*/}
      <Box component="main" sx={{ flexGrow: 1, p: 3, position: "relative" }}>
        <Toolbar />
        <PostList.Provider value={post}>
          <RecipeSeach />
        </PostList.Provider>
      </Box>
    </Box>
  )
}

export default RecipeArea
