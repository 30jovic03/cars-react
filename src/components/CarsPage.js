import { Container, Grid, ListItem } from "@mui/material";

export default function BuyersGuidePage() {

  return(
    <Container>
      <h2>Cars</h2>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <ListItem>xs=4</ListItem>
        </Grid>
        <Grid item xs={8}>
          <ListItem>xs=8</ListItem>
        </Grid>
      </Grid>
    </Container>
  )
}