import { Box, Container } from "@mui/material";

export default function BuyersGuidePage() {

  return(
    <div className="buyers-guide">
      <Container>
        <img src="/images/shopping-advice.jpg" alt="cars gallery" width="100%"/>
        <div className="buyers-guide-title">
          <h2>Shopping Advice</h2>
          <p>Select the right vehicle, decide between leasing or buying, and prepare to negotiate with the dealer using this handy guide.</p>
        </div>
        <Box py={5}>
          <h2>How to Buy or Lease a New Car?</h2>
          <p>Whether it's your first car or you're replacing your old ride, the process of buying or leasing a new vehicle is often a daunting one. Not only is a large purchase stressful, the car-buying process is ripe with opportunities for consumers to make an error in judgment or be taken advantage of by a pushy salesperson. Not to fear! Car and Driver's Buyer's Guide team is here to arm you with all the information you need to go into this process with confidence—and to come out of it feeling good about the decisions you've made as you're handed the keys to your new car, truck, SUV, or van.</p>
          <h2>How to Choose a Car That's Right for You?</h2>
          <p>The first step in any car-buying process is deciding what type of vehicle is right for you. SUVs are popular but they come with trade-offs such as lower fuel economy, and they can be more difficult to park than a sedan or hatchback. Electric vehicles are trending and many buyers are considering them as a way to reduce their carbon footprint, but consumers with longer commutes or road-trip aspirations may find driving ranges still aren't long enough to cover such use cases.</p>
          <h2>Buying vs. Leasing: How Do I Decide?</h2>
          <p>There's a lot to consider here. Leasing might net you a smaller monthly payment but your lifestyle may be cramped by a lease's mileage limits. Taking out an auto loan may give you an opportunity to own the car outright after you've paid off the financing, but without the right amount of down payment, you might get some sticker shock when it comes to fitting the payment into your budget.</p>
          <h2>Negotiating and Buying from a Dealership</h2>
          <p>Like it or not, a car dealership will most likely play a big role in your next new vehicle purchase. Their sales professionals can be valuable partners in completing your task, but it's important to know that their primary job is to make money. Smart negotiators advise knowing what your leverage is and using it to your advantage.</p>
        </Box>
      </Container>
    </div>
  )
}