import { Header } from "../../components/Header";

import { Content, InputDatas, Lousa, Results } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <Content>
        <InputDatas>
          <h1>Esquerda</h1>
        </InputDatas>

        <Lousa>
          <h1>Centro</h1>
        </Lousa>

        <Results>
          <h1>Direita</h1>
        </Results>
      </Content>
    </>
  );
}
