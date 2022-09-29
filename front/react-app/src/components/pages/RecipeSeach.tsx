import React, { Children, createContext, useEffect } from "react";

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

import axios from "axios";
import { useState } from "react";

import { Ranking } from "interfaces";
//type RecipeAreaProps = {
  //children?: React.ReactNode//childlen?は子要素の指定がオプショナルであることを明示
//}

export const GetList = createContext({} as {
  APIDatas: any
  setAPIDatas: React.Dispatch<React.SetStateAction<any>>
});

//const RecipeArea: React.VFC<RecipeAreaProps> = ({children}) => {
const RecipeSeach: React.VFC = () => {

  const [APIDatas, setAPIDatas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/rakuten/items').then((response) => {
      setAPIDatas(response.data);
      console.log(response.data)
    });
  }, []);

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
              width: 1000,
              height: 'auto',
            },
          }}
        >
          <Paper elevation={3}>
            <div style={{margin:'auto',width:'97%', height: 'auto',}}>
              <GetList.Provider value={{APIDatas, setAPIDatas}}>
                <RecipeList/>
              </GetList.Provider>
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
