import React from "react";

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import SearchBar from "components/utils/SearchBar";
import { Pagination } from "@mui/material";
import RecipeSeach from "components/pages/RecipeSeach";
import SideMenu from "components/utils/SideMenu";

export const RecipeArea: React.VFC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <div>
          <SearchBar />
        </div>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 1200,
              height: 4000,
            },
          }}
        >
          <Paper elevation={3}>
            <div style={{margin:'auto',width:'95%'}}>
              <RecipeSeach />
            </div>
          </Paper>
        </Box>
        <Pagination />
      </Container>
    </React.Fragment>
  );
}
