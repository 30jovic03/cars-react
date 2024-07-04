import React from "react";
import { Box, Container, Grid, Modal, Slider, TextField, Typography } from "@mui/material";

import CarCard from "../shared/CarCard";
import useData from "../hooks/useData";

export default function CarsPage() {
  const { cars } = useData('cars');
  const { makes } = useData('makes');
  const { bodyTypes } = useData('bodyTypes');
  const { fuelTypes } = useData('fuelTypes');
  const { gearTypes } = useData('gearTypes');

  const [selectedCar, setSelectedCar] = React.useState({
    id:  "",
    bodyType: "",
    make: "",
    model: "",
    fuelType: "",
    gearType: "",
    power: "",
    year: "",
    desc: "",
    imgURL: "",
    price: ""
  });

  cars.forEach(car => {
    makes.forEach(make => {
      if (make.id === car.makeId) car.make = make.name
    })
    bodyTypes.forEach(bodyType => {
      if (bodyType.id === car.bodyTypeId) car.bodyType = bodyType.type
    })
    fuelTypes.forEach(fuelType => {
      if (fuelType.id === car.fuelTypeId) car.fuelType = fuelType.type
    })
    gearTypes.forEach(gearType => {
      if (gearType.id === car.gearTypeId) car.gearType = gearType.type
    })
  })

  const [openCarModal, setOpenCarModal] = React.useState(false);

  const [priceValue, setPriceValue] = React.useState([20, 37]);
  const handlePriceChange = (event, newPriceValue) => {
    setPriceValue(newPriceValue);
  };

  const onSelectCar = (selectedCar) => {
    setSelectedCar(selectedCar);
    setOpenCarModal(true);
  }

  return(
    <Container>
      <h2>Cars</h2>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <TextField id="outlined-search" label="Search field" type="search" sx={{width: "100%"}} />
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
              <Box key={car.id} sx={{cursor: 'pointer'}} onClick={()=>onSelectCar(car)}>
                <CarCard car={car}></CarCard>
              </Box>
            )
          })}
        </Grid>
      </Grid>
      <Modal
        id="carModal"
        open={openCarModal}
        onClose={()=>setOpenCarModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 1000,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          borderRadius: "10",
          boxShadow: 24,
          p: 4,
        }}>
          <Box display='flex'>
            <Box pr={2} width="350px">
              <Typography variant="h4" component="h2">
                {(selectedCar.make ?? '') + ', ' + (selectedCar.model)}
              </Typography>
              <Typography variant="h6" color="text.secondary" component="h2">
                <span>Body type:</span> {selectedCar.bodyType}
              </Typography>
              <Typography variant="h6" color="text.secondary" component="h2">
                <span>Power:</span> {selectedCar.power}
              </Typography>
              <Typography variant="h6" color="text.secondary" component="h2">
                <span>Fuel type:</span> {selectedCar.fuelType}
              </Typography>
              <Typography variant="h6" color="text.secondary" component="h2">
                <span>Gear type:</span> {selectedCar.gearType}
              </Typography>
              <Typography variant="h6" color="text.secondary" component="h2">
                <span>Release year:</span> {selectedCar.year}
              </Typography>
              <Typography variant="h6" color="text.secondary" component="h2">
              <span>Description:</span> {selectedCar.desc}
              </Typography>
              <Typography variant="h4" component="h2" color="#1976d2">
              <span>Price:</span> {selectedCar.price}
              </Typography>
            </Box>
            <Box className="modalCarImage">
              <img src={selectedCar.imgURL} alt="selected car"/>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Container>
  )
}