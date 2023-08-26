import { Box } from "@mui/material";
import React from "react";

import { LoginFormComponent } from "./login.form.component";

function LoginViewComponent() {
  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      height={"100vh"}
    >
      <LoginFormComponent />
    </Box>
  );
}

export default LoginViewComponent;
