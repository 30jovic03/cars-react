import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CarCard({car}) {

  return (
    <Card sx={{ display: 'flex' }} style={{marginBottom: '10px', border: '2px solid #eee'}}>
      <CardMedia
        component="img"
        sx={{ width: 250, height: 250 }}
        image={car.imgURL}
        alt="car image"
      />
      <CardContent sx={{ flex: '1 0 auto' }} style={{width: '100%'}}>
        <Typography component="div" variant="h5">
          {car.makeId + ', '+ car.model}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {car.price}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {car.power}
        </Typography>
      </CardContent>
    </Card>
  );
}
