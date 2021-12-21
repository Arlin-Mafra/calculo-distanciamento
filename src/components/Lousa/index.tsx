import { IoIosSchool } from "react-icons/io";

import { Container, Content, Frame, Title, Students } from "./styles";

interface Props {
  amount: number;
}

export function Lousa({ amount }: Props) {
  return (
    <Container>
      <Frame>
        <Title>Lousa</Title>
      </Frame>
      <Content>
        <IoIosSchool size={20} />
        <IoIosSchool size={20} />
        <IoIosSchool size={20} />
        <IoIosSchool size={20} />
        <IoIosSchool size={20} />
        <IoIosSchool size={20} />
        <IoIosSchool size={20} />
        <IoIosSchool size={20} />
        <IoIosSchool size={20} />
        <IoIosSchool size={20} />
        <IoIosSchool size={20} />
        <IoIosSchool size={20} />
      </Content>
      <Students>{amount} Alunos</Students>
    </Container>
  );
}
