export type InputFieldProps = {
  className?: string;
  label: string, 
  icon: string, 
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onBlur: () => void,
  errorMessage: string,
  value: number | string, 
  min?: number, 
  step?: number
};
