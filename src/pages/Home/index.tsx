import { Header } from "../../components/Header";

import {
  Content,
  InputDatas,
  Info,
  ButtonLoad,
  InputWrraper,
  InputTitle,
  InputDataWrapper,
  InputData,
  InputLabel,
  InputLabelWrapper,
  InputInfo,
  DistanceWrapper,
  DistanceTitle,
  DistanceInputWrapper,
  DistanceInput,
  DistanceLabelWrapper,
  DistanceLabel,
  DistanceInfo,
  Lousa,
  Results,
} from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <Content>
        <InputDatas>
          <Info>
            Atualize os valores deste formulário para que as alterações sejam
            automaticamente refletidas na representação ao lado.
          </Info>
          <ButtonLoad onClick={() => {}}>
            Carregar sala pré-configurada
          </ButtonLoad>
          <InputWrraper>
            <InputTitle>Largura da sala</InputTitle>
            <InputDataWrapper>
              <InputData />
              <InputLabelWrapper>
                <InputLabel>m</InputLabel>
              </InputLabelWrapper>
            </InputDataWrapper>
            <InputInfo>
              A largura da sala em <br />
              metros. Esta é a <br />
              dimensão da parede <br />
              emque a lousa foi <br />
              colocada.
            </InputInfo>
            <InputTitle>Profundidade da sala</InputTitle>
            <InputDataWrapper>
              <InputData />
              <InputLabelWrapper>
                <InputLabel>m</InputLabel>
              </InputLabelWrapper>
            </InputDataWrapper>
            <InputInfo>
              A profundidade da <br />
              sala em metros. Esta <br />
              é a dimensão da <br />
              parede sem a lousa.
            </InputInfo>
          </InputWrraper>
          <DistanceWrapper>
            <DistanceTitle>Distanciamento social</DistanceTitle>
            <DistanceInputWrapper>
              <DistanceInput />
              <DistanceLabelWrapper>
                <DistanceLabel>m</DistanceLabel>
              </DistanceLabelWrapper>
            </DistanceInputWrapper>
            <DistanceInfo>
              A distância mínima que deve haver entre as
              <br />
              pessoas em metros.
            </DistanceInfo>
          </DistanceWrapper>
          <DistanceWrapper>
            <DistanceTitle>Espaço reservado ao estudante</DistanceTitle>
            <DistanceInputWrapper>
              <DistanceInput />
              <DistanceLabelWrapper>
                <DistanceLabel>m</DistanceLabel>
              </DistanceLabelWrapper>
            </DistanceInputWrapper>
            <DistanceInfo>
              O diâmetro em metros da área ocupada por um <br />
              estudante, incluindo o tamanho da carteira.
            </DistanceInfo>
          </DistanceWrapper>
          <DistanceWrapper>
            <DistanceTitle>Espaço reservado ao docente</DistanceTitle>
            <DistanceInputWrapper>
              <DistanceInput />
              <DistanceLabelWrapper>
                <DistanceLabel>m</DistanceLabel>
              </DistanceLabelWrapper>
            </DistanceInputWrapper>
            <DistanceInfo>
              A distância em metros até a qual o docente
              <br />
              poderá movimentar-se, medida a partir da <br />
              parede que contém a lousa.
            </DistanceInfo>
          </DistanceWrapper>
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
