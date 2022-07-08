import { Grid, Typography } from "@mui/material";
// import React, { useState, useEffect, createRef } from "react";

import PlaceDetails from "./PlaceDetails";

import { styled } from "@mui/material/styles";

const List = ({ places, isLoading, childClicked }) => {
  // const [elRefs, setElRefs] = useState([]);

  // useEffect(() => {
  //   setElRefs((refs) =>
  //     Array(places.length)
  //       .fill()
  //       .map((_, i) => refs[i] || createRef())
  //   );
  // }, [places]);

  return (
    <Root>
    <div className={classes.container}>
      <Typography variant="h4">Malaria Hotspots</Typography>

      {/* {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <> */}
          <Grid container spacing={3} className={classes.list}>
            {/* {places?.map((place, i) => ( */}
              {/* <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} /> */}
              <Grid item xs={12}>
                <PlaceDetails />
              </Grid>
            {/* ))} */}
          </Grid>
        {/* </>
      )} */}
    </div>
    </Root>
  );
};

const PREFIX = "List";

const classes = {
  loading: `${PREFIX}-loading`,
  container: `${PREFIX}-container`,
  list: `${PREFIX}-searchIcon`,
};

const Root = styled("div")(({ theme }) => ({
  [`& .${classes.loading}`]: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  [`& .${classes.container}`]: {
    padding: "25px",
  },
  [`& .${classes.list}`]: {
    height: "75vh",
    overflow: "auto",
  },
}));

export default List;
