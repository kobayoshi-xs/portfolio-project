import React, { useState, useEffect } from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import axios from "axios";

import { LargeCategoties } from 'interfaces'
import { setDate } from "date-fns";

const RecipeSeach: React.VFC = () => {
  const [APIDatas, setAPIDatas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/rakuten/items').then((response) => {
      setAPIDatas(response.data);
    });
  }, []);
  console.log(APIDatas)

  return (
    <>
      <h3>人気メニュー</h3>
        <ImageList sx={{ width: '100%', height: '100%' }} cols={3} rowHeight={250} style={{textAlign: "center"}}>
          {APIDatas.map((APIData: LargeCategoties, index) => (
            <ImageListItem key={index}>
              <a href={APIData.params.categoryUrl} style={{textDecoration: 'none'}}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/static/images/cards/contemplative-reptile.jpg"
                      alt="レシピ画像"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {APIData.params.categoryName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">

                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </a>
            </ImageListItem>
          ))}
          </ImageList>
    </>
  );
}

  export default RecipeSeach
