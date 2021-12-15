import React from "react";

import { Container, Title, SubTitle } from "./styles";

export function Header() {
  return (
    <Container>
      <Title>Cálculo de estudantes por sala</Title>
      <SubTitle>
        Mostra a quantidade de estudantes que podem estar em uma mesma sala
        <br />
        de aula respeitando as orientações para distanciamento social durante a
        <br />
        pandemia de COVID-19.
      </SubTitle>
    </Container>
  );
}
