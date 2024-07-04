import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";

import CategoryMenu from "../shared/CategoryMenu";
import useData from "../hooks/useData";

export default function CategoryPage() {
  const { cId } = useParams();
  const { categories } = useData('categories');

  const category = categories.find(cat => cat.id === cId);
  
  return(
    <Container>
      <h2>Popular Categories:</h2>
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