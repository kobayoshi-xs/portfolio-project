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

const SideMenu: React.VFC = () => {
  const [APIDatas, setAPIDatas] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/rakuten/larges').then((response) => {
      setAPIDatas(response.data);
    });
  }, []);//この"[]"はコンポーネントのマウント時だけでなく、更新時にも実行されてしまうのを防ぐためにある。
  console.log(APIDatas)

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
            <ListItem button key={index}>
              <ListItemText primary={APIData.params.categoryName} />
            </ListItem>
          ))}
        </List>
        {/*<List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          </List>*/}
      </Box>
    </Drawer>
  )
}

export default SideMenu
