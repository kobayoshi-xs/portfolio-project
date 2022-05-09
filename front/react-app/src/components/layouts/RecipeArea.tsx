import React from "react";

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import SearchBar from "components/utils/SearchBar";

export const RecipeArea: React.VFC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        {/*<Box sx={{ bgcolor: '#f0f4c3', height: '200vh' }} />*/}
        <div>
          <SearchBar />
        </div>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 100,
              height: 300,
            },
          }}
        >
          <Paper elevation={3} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
