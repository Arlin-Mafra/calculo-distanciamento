import { InputHTMLAttributes } from "react";
import { Container, InputData, InputLabelWrapper, InputLabel } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width: number;
}

export function Input({ width, ...rest }: InputProps) {
  return (
    <Container style={{ width }}>
      <InputData {...rest} />
      <InputLabelWrapper>
        <InputLabel>m</InputLabel>
      </InputLabelWrapper>
    </Container>
  );
}
