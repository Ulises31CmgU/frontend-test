export type FieldData = {
  label: string;
  initialValue: any;
  placeholder?: string;
  options?: string[] | { label: string; value: any }[];
};

export interface CustomFormData {
  [key: string]: FieldData;
}
