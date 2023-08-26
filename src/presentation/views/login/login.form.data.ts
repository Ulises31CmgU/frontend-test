import * as Yup from "yup";

import { CustomFormData } from "../../shared/types/form.types";

import { ERROR_TEXTS, emailRegex } from "../../shared/forms/constants";

export const FIELD_NAMES = {
  email: "email",
  password: "password",
};

export const FORM_DATA: CustomFormData = {
  [FIELD_NAMES.email]: {
    label: "Email",
    initialValue: "",
    placeholder: "Enter email",
  },
  [FIELD_NAMES.password]: {
    label: "Password",
    initialValue: "",
    placeholder: "Enter password",
  },
};

export const FORM_INITIAL_VALUES = {
  email: FORM_DATA[FIELD_NAMES.email].initialValue,
  password: FORM_DATA[FIELD_NAMES.password].initialValue,
};

export const FORM_VALIDATION_SCHEMA = Yup.object({
  [FIELD_NAMES.email]: Yup.string()
    .required(ERROR_TEXTS.required)
    .matches(emailRegex, ERROR_TEXTS.email),
  [FIELD_NAMES.password]: Yup.string().required(ERROR_TEXTS.required),
});
