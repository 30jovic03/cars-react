import { Stack } from "@mui/material";
import useMockData from "../hooks/useMockData";
import { Link } from "react-router-dom";

export default function MakeMenu() {
  const { makes } = useMockData('makes');

  return(
    <>
      <div className="makes">
        <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
                useFlexGap
                flexWrap="wrap"
                py={1}
              >
                {makes.map(make => {
            return (
                <MakeMenuItem key={make.id} make={make} />
            )
          })}
        </Stack>
      </div>
    </>
  )
}

function MakeMenuItem({make}) {
  return(
    <Link to={`/search-car?make=${make.id}`} style={{textDecoration: "none"}}>
      <div className="make-item">
        <div className="make-item-img">
          <img src={`${make.imgURL}`} alt="make logo"/>
        </div>
        <div className="make-item-name">
          {make.name}
        </div>
      </div>
    </Link>
  )
}