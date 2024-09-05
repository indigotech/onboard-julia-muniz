export interface LoginTextInputProps {
  label: string;
  conditions: { pattern: RegExp; message: string }[];
}
