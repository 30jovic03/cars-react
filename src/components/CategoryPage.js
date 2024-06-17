import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";

import CategoryMenu from "../shared/CategoryMenu";
import useMockData from "../hooks/useMockData";

export default function CategoryPage() {
  const { cId } = useParams();
  const { categories } = useMockData('categories');

  const category = categories.find(cat => cat.id === +cId);
  
  return(
    <Container>
      <h2>All Categories:</h2>
      <CategoryMenu></CategoryMenu>
      <Box py={5}>
        {category && (
          <>
            <div className="category-img">
              <img src={category.imgURL} alt="category img" />
            </div>
            <h1>{category.name}</h1>
            <div className="category-desc">
            <p>{category.desc}</p>
            </div>
          </>
        )}
      </Box>
    </Container>
  )
}