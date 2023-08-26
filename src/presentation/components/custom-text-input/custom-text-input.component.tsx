import React from "react";
import { useField } from "formik";

import { TextField } from "@mui/material";

import { CustomInputProps } from "../../shared/types/component-props.types";

const CustomTextInputComponent = (props: CustomInputProps) => {
  const [field, meta] = useField(props.name);
  const { fieldKey, formData, ...otherProps } = props;

  const showError = !!meta.touched && !!meta.error;

  return (
    <TextField
      variant="outlined"
      error={showError}
      helperText={showError && meta.error}
      label={formData[fieldKey ?? props.name].label}
      placeholder={formData[fieldKey ?? props.name].placeholder}
      {...field}
      {...otherProps}
    />
  );
};

export default CustomTextInputComponent;
