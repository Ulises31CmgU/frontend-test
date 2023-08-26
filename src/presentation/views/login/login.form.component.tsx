import React from "react";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import { authLoginRequest } from "../../redux/auth/auth.slice";

import { Button, Grid, Typography } from "@mui/material";
import { CustomTextInputComponent } from "../../components";

import { AuthLoginRequestData } from "../../../modules/auth/domain/entities/auth.entities";

import "./login.styles.scss";

import {
  FORM_DATA,
  FIELD_NAMES,
  FORM_INITIAL_VALUES,
  FORM_VALIDATION_SCHEMA,
} from "./login.form.data";

export function LoginFormComponent() {
  const dispatch = useDispatch();

  const handleSubmit = async (values: AuthLoginRequestData) => {
    dispatch(authLoginRequest(values));
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={FORM_VALIDATION_SCHEMA}
    >
      <Form className="login-form">
        <Grid
          container
          spacing={4}
          display={"flex"}
          direction="column"
          alignItems={"center"}
        >
          <Grid item>
            <Typography variant="h6">
              Please login with your email and password.
            </Typography>
          </Grid>
          <Grid item>
            <CustomTextInputComponent
              formData={FORM_DATA}
              name={FIELD_NAMES.email}
              required
            />
          </Grid>
          <Grid item>
            <CustomTextInputComponent
              formData={FORM_DATA}
              name={FIELD_NAMES.password}
              type="password"
              required
            />
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              For a succesfull login use the following credentials
            </Typography>
            <Typography variant="body2" textAlign={"center"}>
              <strong>email: </strong> eve.holt@reqres.in
            </Typography>
            <Typography variant="body2" textAlign={"center"}>
              <strong>password: </strong> cityslicka
            </Typography>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
}

export default LoginFormComponent;
