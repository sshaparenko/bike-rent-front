import { Card, CardContent, CardMedia, CardActions, Button, Container, Grid, Typography } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from "react";
import { useState } from "react";
import axios from "axios";

const BikeList = (props) => {
  const [theArray, setArray] = useState([]);
  
  const sendOrder = async () => {
    try {
      if(!theArray || theArray.length === 0) return;
      const data = {
        creation_date: new Date(Date.now()).toISOString(),
        delivery_date: null,
        client: 1,
        bike: theArray,
      }
      const response = await axios.post(
        'http://localhost:8000/api/order/bike/',
        data
      )
    } catch (error) {
      console.log(error);;
    }
  }
  const { posts } = props;
  if(!posts || posts.posts === 0) return <p>Can not find any products, sorry</p>
  return (
    <React.Fragment>
      <Container maxWidth="lg" component="main">
            <Grid container spacing={{ xs: 0.5, md: 1 }} columns={{ xs: 1, sm: 8, md: 12, lg: 24}}>
              {posts.map((bike) => {
                const [buttonClicked, setButtonClicked] = useState(false);
                const handleButtonClick = () => {
                  setButtonClicked(true);
                };
  
                return (
                  <Grid key={bike.id} item xs={2} sm={4} md={4} lg={6}>
                    <Card sx={{margin: '1em'}}>
                      <CardMedia 
                        component={'img'}
                        sx={{height: 200}}
                        image = {bike.image}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {bike.name.substr(0, 30)}...
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {bike.description.substr(0, 80)}...
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing={true}>
                        <Button 
                          size="small"
                          onClick={() => {
                            setArray([...theArray, bike.id]);
                            handleButtonClick();
                          }}
                          style={{ backgroundColor: buttonClicked ? 'green' : 'inherit', color: buttonClicked ? 'white' : 'ingerit' }}
                        ><AddCircleOutlineIcon/></Button>
                        <Button size="medium">More</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
            <Button onClick={sendOrder}><AddCircleOutlineIcon/></Button>
      </Container>
    </React.Fragment>
  );
}

export default BikeList;