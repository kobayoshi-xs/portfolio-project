import React from "react";
import Header from "./Header";

import { Container, Grid } from "@mui/material";
import styled from "@emotion/styled";

const main = styled(Container)({
  paddingTop: "3rem",
});

/*type CommonLayoutProps = {
  children: React.ReactElement
}*/

// 全てのページで共通となるレイアウト
/*const CommonLayout: React.VFC<CommonLayoutProps> = ({ children }) => {*/
const CommonLayout: React.VFC= () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Container maxWidth="lg">
        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item>

            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default CommonLayout
