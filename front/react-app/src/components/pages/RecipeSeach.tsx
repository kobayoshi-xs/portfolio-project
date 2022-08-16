import React, { Children } from "react";

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import SearchBar from "components/utils/SearchBar";
import { Pagination } from "@mui/material";
import RecipeLarge from "components/pages/RecipeLarge";
import SideMenu from "components/utils/SideMenu";
import RecipeList from "./RecipeList";
import UnderMenu from "./UnderMenu";

//type RecipeAreaProps = {
  //children?: React.ReactNode//childlen?は子要素の指定がオプショナルであることを明示
//}

//const RecipeArea: React.VFC<RecipeAreaProps> = ({children}) => {
const RecipeSeach: React.VFC = () => {
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
              width: 1050,
              height: 4000,
            },
          }}
        >
          <Paper elevation={3}>
            <div style={{margin:'auto',width:'95%'}}>
              <RecipeList />
              <UnderMenu/>
              {/*{children}*/}
            </div>
          </Paper>
        </Box>
        <Pagination />
      </Container>
    </React.Fragment>
  );
}

  export default RecipeSeach
