import { ChangeEvent, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Lousa } from "../../components/Lousa";

import {
  Content,
  InputDatas,
  Info,
  ButtonLoad,
  InputWrraper,
  InputTitle,
  InputInfo,
  DistanceWrapper,
  DistanceTitle,
  DistanceInfo,
  LousaWrapper,
  LousaArrowBotton,
  ArrowRigthWrapper,
  Results,
} from "./styles";

export function Home() {
  const [largura, setLargura] = useState("");
  const [profundidade, setProfundidade] = useState("");
  const [estudante, setEstudante] = useState("");
  const [distanciamento, setDistanciamento] = useState("");
  const [professor, setProfessor] = useState("");
  const [total, setTotal] = useState(0);

  function handleCalcDistance() {
    let area = Number(largura) * (Number(profundidade) - Number(professor));
    let result = Math.round(
      area / (Number(estudante) * Number(distanciamento))
    ).toFixed(0);
    setTotal(Number(result));
    setLargura("");
    setProfundidade("");
  }

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
            <Input
              width={100}
              type="number"
              placeholder="10 metros"
              value={largura}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLargura(e.target.value)
              }
            />
            <InputInfo>
              A largura da sala em <br />
              metros. Esta é a <br />
              dimensão da parede <br />
              emque a lousa foi <br />
              colocada.
            </InputInfo>
            <InputTitle>Profundidade da sala</InputTitle>
            <Input
              width={100}
              maxLength={20}
              type="number"
              placeholder="10 metros"
              value={profundidade}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setProfundidade(e.target.value)
              }
            />
            <InputInfo>
              A profundidade da <br />
              sala em metros. Esta <br />
              é a dimensão da <br />
              parede sem a lousa.
            </InputInfo>
          </InputWrraper>

          <DistanceWrapper>
            <DistanceTitle>Distanciamento social</DistanceTitle>
            <Input
              width={238}
              type="number"
              placeholder="1,5 metros"
              value={distanciamento}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDistanciamento(e.target.value)
              }
            />
            <DistanceInfo>
              A distância mínima que deve haver entre as
              <br />
              pessoas em metros.
            </DistanceInfo>
          </DistanceWrapper>
          <DistanceWrapper>
            <DistanceTitle>Espaço reservado ao estudante</DistanceTitle>
            <Input
              width={238}
              type="number"
              placeholder="1,5 metros"
              value={estudante}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEstudante(e.target.value)
              }
            />
            <DistanceInfo>
              O diâmetro em metros da área ocupada por um <br />
              estudante, incluindo o tamanho da carteira.
            </DistanceInfo>
          </DistanceWrapper>
          <DistanceWrapper>
            <DistanceTitle>Espaço reservado ao docente</DistanceTitle>
            <Input
              width={238}
              type="number"
              placeholder="1,5 metros"
              value={professor}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setProfessor(e.target.value)
              }
            />
            <DistanceInfo>
              A distância em metros até a qual o docente
              <br />
              poderá movimentar-se, medida a partir da <br />
              parede que contém a lousa.
            </DistanceInfo>
          </DistanceWrapper>
          <button onClick={handleCalcDistance}>Calc</button>
        </InputDatas>

        <LousaWrapper>
          <LousaArrowBotton>
            <Lousa amount={total} />
            <img src="/images/arrow-botton.svg" alt="Largura" />
          </LousaArrowBotton>
          <ArrowRigthWrapper>
            <img src="/images/arrow-rigth.svg" alt="Largura" />
          </ArrowRigthWrapper>
        </LousaWrapper>

        <Results>
          <h1>Direita</h1>
        </Results>
      </Content>
    </>
  );
}
