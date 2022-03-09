import React from "react"

import { Container, Grid } from "@mui/material"
import { styled } from "@mui/material/styles"

const main = styled('div')({
  container: {
    paddingTop: "3rem",
  },
});

type CommonLayoutProps = {
  children: React.ReactElement
}

// 全てのページで共通となるレイアウト
const CommonLayout: React.VFC<CommonLayoutProps> = ({ children }) => {
  return (
    <>
      <header>

      </header>
      <main>
        <Container maxWidth="lg">
        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item>
              {children}
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default CommonLayout
