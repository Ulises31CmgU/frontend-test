export const errorHandler = (e: any): string => {
  if (e.response?.data?.error) {
    return e.response.data.error;
  }
  console.log(e);
  return "Something went wrong";
};
