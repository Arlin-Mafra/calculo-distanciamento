import {
  Container,
  ResultWrapper,
  ResultTitle,
  Amount,
  TitleWrapper,
} from "./styles";

export function Result() {
  const results = [
    {
      title: "Quantidade \n máxima de\n estudantes\n na sala",
    },
    {
      title: "Quantidade de estudantes na largura",
    },
    {
      title: "Quantidade de estudantes na profundidade",
    },
    {
      title: "Espaço não aproveitado na largura",
    },
    {
      title: "Espaço \n não aproveitado na profundidade",
    },
  ];

  return (
    <Container>
      {results.map((item) => (
        <ResultWrapper key={item.title}>
          <TitleWrapper>
            <ResultTitle>{item.title}</ResultTitle>
          </TitleWrapper>
          <Amount>0</Amount>
        </ResultWrapper>
      ))}
    </Container>
  );
}
