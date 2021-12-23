import { useState } from "react";

import { Container, Content, Frame, Title, Students, Img } from "./styles";

interface Props {
  amount: number;
}
interface ArrayProps {
  id: number;
  img: string;
}

export function Lousa({ amount }: Props) {
  const [icon, setIcon] = useState<ArrayProps[]>([
    {
      id: Date.now(),
      img: "https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-student-glyph-black-icon-png-image_691145.jpg",
    },
  ]);

  function handleAdd() {
    const newItem = {
      id: Date.now(),
      img: "https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-student-glyph-black-icon-png-image_691145.jpg",
    };

    setIcon((oldItem) => [...oldItem, newItem]);
  }

  return (
    <Container>
      <Frame>
        <Title>Lousa</Title>
      </Frame>
      <Content>
        {icon.map((item) => (
          <div key={item.id}>
            <Img src={item.img} alt="aluno" />
          </div>
        ))}
      </Content>
      {/* <button onClick={handleAdd}>Add</button> */}
      <Students>{amount} Alunos</Students>
    </Container>
  );
}
