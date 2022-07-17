import React, {useState, useEffect} from "react";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import axios from "axios";

import { LargeCategoties } from 'interfaces'

const SideMenu: React.VFC = () => {
  const [APIDatas, setAPIDatas] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/rakuten/larges').then((response) => {
      setAPIDatas(response.data);
    });
  }, []);//この"[]"はコンポーネントのマウント時だけでなく、更新時にも実行されてしまうのを防ぐためにある。
  //console.log(APIDatas)

  const createPost = (APIData: LargeCategoties) => {
    //console.log(APIData)
    axios.post('http://localhost:3000/api/v1/rakuten/lists', {APIData: APIData})
    .then((response) => {
      setPost(response.data);
      console.log("成功")
    }).catch((e) => {
      console.log(e.response.data.messages)
    });
  }

  const drawerWidth = 240;

  return (
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
          {APIDatas.map((APIData: LargeCategoties, index) => (
            <ListItem button onClick={() => createPost(APIData)} key={index}>
              <div style={{display: 'none'}}>{APIData.category_id}</div>
              <ListItemText primary={APIData.category_name} />
            </ListItem>
          ))}
        </List>
      </Box>
      {/*<Box sx={{ overflow: 'auto' }}>
        <List>
          {APIDatas.map((APIData: LargeCategoties, index) => (
            <ListItem button onClick={createPost} key={index}>
              <div style={{display: 'none'}}>{APIData.params.categoryId}</div>
              <ListItemText primary={APIData.params.categoryName} />
            </ListItem>
          ))}
        </List>
      </Box>*/}
    </Drawer>
  )
}

export default SideMenu
