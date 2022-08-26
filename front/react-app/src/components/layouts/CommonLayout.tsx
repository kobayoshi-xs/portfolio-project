import React from "react";

import Header from "./Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from "./Footer";

import SignUp from "components/pages/SignUp";
import { SignIn } from "components/pages/SignIn";
import { Notfound } from "components/pages/NotFound";

import { Container, Grid } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

{/*const drawerWidth = 240;*/}

const main = styled(Container)({
  paddingTop: "3rem",
});

type CommonLayoutProps = {
  children?: React.ReactNode
}

// 全てのページで共通となるレイアウト
// CommonLayoutPropsは型定義を行なっていないとApp.tsxでエラー出る。
// (children)にするとエラー、( {children} )にするとOK
const CommonLayout: React.VFC<CommonLayoutProps> = ({children}) => {
  return (
    <>
    //<Box sx={{display: "flex", flexDirection: "column", minHeight: "100%",}}>
      <header>
        <Header />
      </header>
      <main>
        <Container maxWidth="xl">
        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item>
              {children}
            </Grid>
          </Grid>
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    //</Box>
    </>
  )
}

export default CommonLayout
