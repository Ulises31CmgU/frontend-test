export const removeAllNonNumericCharacters = (value: string): string => {
  return value.replace(/\D/g, "");
};

export const removeSpecialCharacters = (value: string): string => {
  return value.replace(/[^a-zA-Z0-9]/g, "");
};
