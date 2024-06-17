import { Stack } from "@mui/material";
import useMockData from "../hooks/useMockData";
import { Link } from "react-router-dom";

export default function CategoryMenu() {
  const { categories } = useMockData('categories');

  return(
    <>
      <div className="categories">
        <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
                useFlexGap
                flexWrap="wrap"
              >
                {categories.map(cat => {
            return (
                <CategoryMenuItem key={cat.id} cat={cat} />
            )
          })}
        </Stack>
      </div>
    </>
  )
}

function CategoryMenuItem({cat}) {
  return(
    <Link to={`/category/${cat.id}`}>
      <button className="category-btn">
        {cat.name}
      </button>
    </Link>
  )
}