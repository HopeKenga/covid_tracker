import React from "react";
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const Cards = (props) => {
    console.log(props);


    
    return (
        <div className={styles.container}>
          <Grid container spacing={3} justify="center">
              <Grid item component = {Card}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom>Infected</Typography>
                      <Typography variant="h5"> REAL DATA</Typography>
                      <Typography color="textSecondary"> REAL DATE </Typography>
                  </CardContent>

              </Grid>
          
        </div>

    ) 
}

export default Cards;