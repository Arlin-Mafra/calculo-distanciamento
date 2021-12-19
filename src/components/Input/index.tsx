import { Container, InputData, InputLabelWrapper, InputLabel } from "./styles";

interface InputProps {
  width: number;
  type: string;
  placeholder: string;
}

export function Input({ width, type, placeholder }: InputProps) {
  return (
    <Container style={{ width: width }}>
      <InputData placeholder={placeholder} type={type} />
      <InputLabelWrapper>
        <InputLabel>m</InputLabel>
      </InputLabelWrapper>
    </Container>
  );
}
