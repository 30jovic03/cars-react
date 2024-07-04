import React from "react";
import { Container, Grid, Slider, TextField } from "@mui/material";

import CarCard from "../shared/CarCard";
import useData from "../hooks/useData";

export default function CarsPage() {
  const { cars } = useData('cars');

  const [priceValue, setPriceValue] = React.useState([20, 37]);
  const handlePriceChange = (event, newPriceValue) => {
    setPriceValue(newPriceValue);
  };

  return(
    <Container>
      <h2>Cars</h2>
      <Grid container spacing={1}>
        <Grid item xs={4}>
        <TextField id="outlined-search" label="Search field" type="search" />
        <h4>Price range:</h4>
        <Slider
        getAriaLabel={() => 'Price range'}
        value={priceValue}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
      />
        </Grid>
        <Grid item xs={8}>
          {cars.map(car => {
            return (
              <CarCard car={car}></CarCard>
            )
          })}
        </Grid>
      </Grid>
    </Container>
  )
}