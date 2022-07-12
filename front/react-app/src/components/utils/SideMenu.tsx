import React, {useState, useEffect} from "react";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListItemText from '@mui/material/ListItemText';

import axios from "axios";

import { LargeCategoties } from 'interfaces'
import { Category } from "@mui/icons-material";

const SideMenu: React.VFC = () => {
  const [APIDatas, setAPIDatas] = useState([]);
  const [post, setPost] = useState("");

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/rakuten/larges').then((response) => {
      setAPIDatas(response.data);
    });
  }, []);//この"[]"はコンポーネントのマウント時だけでなく、更新時にも実行されてしまうのを防ぐためにある。
  //console.log(APIDatas)

  const createPost = () => {
    axios.post('http://localhost:3000/api/v1/rakuten/lists', {categoryId: "?"})
    .then((response) => {
      //setAPIDatas(response.data)
      setPost(response.data);
      console.log(post)
    }).catch((error) => {
      console.log(Object.keys(error))
    });
  }
  //console.log(post)

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
            <ListItem button onClick={createPost} key={index}>
              <div style={{display: 'none'}}>{APIData.categoryId}</div>
              <ListItemText primary={APIData.categoryName} />
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
