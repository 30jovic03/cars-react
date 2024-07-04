import { Link, useParams } from "react-router-dom";
import { Box, Container, Grid, ListItem } from "@mui/material";

import useData from "../hooks/useData";
import NewsCard from "../shared/NewsCard";

export default function ReviewsPage() {
  const { rId } = useParams();
  const { news } = useData('news');

  const article = news.find(cat => cat.id === rId);

  return(
    <>
      <Container>
        <Box pb={4}>
          <h2>Reviews</h2>
          <p>We’ve been providing new car reviews for nearly 70 years. Our roster of editors, writers, and contributors is populated by automotive experts who’ve driven nearly every car on the market. Car and Driver’s comprehensive instrumented testing regimen examines a vehicle’s performance, roominess, comfort, features, fuel economy, electric driving range, value, and more. We test hundreds of vehicles every year and measure some 200 data points on each one. We factor in our real-world experiences gleaned from miles behind the wheel to flesh out every aspect of the daily driving experience.</p>
        </Box>
      </Container>
      <Container>
        {article && (
          <Box pb={5}>
            <h1>{article.title}</h1>
            <p>Published: {article.date}</p>
            <div className="article-img">
              <img src={article.imgURL} alt="article img" />
            </div>
            <div className="article-desc">
            <p>{article.text}</p>
            </div>
          </Box>
        )}
      </Container>
      <div style={{backgroundColor: "#555"}}>
        <Container>
          <Grid container spacing={2} py={3}>
          {news.map(dataItem => {
            return (
              <Grid item xs={12} sm={6} md={4} key={dataItem.id}>
                <ListItem>
                  <Link to={`/reviews/${dataItem.id}`} style={{textDecoration: "none"}}>
                    <NewsCard props={dataItem}></NewsCard>
                  </Link>
                </ListItem>
              </Grid>
              )
            })}
          </Grid>
        </Container>
      </div>
    </>
  )
}