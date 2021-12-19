import { IoIosSchool } from "react-icons/io";

import { Container, Content, Frame, Title, Students } from "./styles";

export function Lousa() {
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
      <Students>12 Alunos</Students>
    </Container>
  );
}
