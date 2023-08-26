import {
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextFieldVariants,
} from "@mui/material";
import { CustomFormData } from "./form.types";
import { FieldAttributes } from "formik";

export interface CustomInputProps
  extends Omit<
      OutlinedTextFieldProps | FilledTextFieldProps | StandardTextFieldProps,
      TextFieldVariants
    >,
    FieldAttributes<any> {
  name: string;
  formData: CustomFormData;
  fieldKey?: string;
}
