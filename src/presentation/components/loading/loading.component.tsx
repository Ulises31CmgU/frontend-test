import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/loading/loading.selectors";

import { Backdrop, CircularProgress } from "@mui/material";

const LoadingComponent = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <Backdrop open={isLoading}>
      <CircularProgress />
    </Backdrop>
  );
};

export default LoadingComponent;
