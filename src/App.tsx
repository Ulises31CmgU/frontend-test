import React from "react";

import "./App.css";

import { ErrorBoundary } from "react-error-boundary";
import { Toaster } from "react-hot-toast";
import { LoadingComponent } from "./presentation/components";
import MainRouter from "./presentation/router/main.router";
import ErrorBoundaryViewComponent from "./presentation/views/error-boundary/error-boundary.view.component";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryViewComponent}>
      <LoadingComponent />
      <Toaster position="top-right" />
      <MainRouter />
    </ErrorBoundary>
  );
}

export default App;
