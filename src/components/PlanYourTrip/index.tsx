import { TitleHeader, TitleStyled } from "./styles";
import SelectCar from "/select-car.png";
import LetsDrive from "/lets-drive.png";
import ContactOperator from "/contact-operator.png";
import styled from "styled-components";

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    height: 17rem;
  }

  h2 {
    font-weight: 700;
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    margin-top: 1rem;
    width: 80%;
    text-align: center;
  }
`;

const PlanYourTrip = () => {
  return (
    <section>
      <TitleHeader>
        <h3>Planeje sua viagem agora</h3>
        <TitleStyled>Rápido e Fácil aluguel de carro</TitleStyled>
      </TitleHeader>

      <InfoWrapper>
        <InfoItem>
          <span>
            <img src={SelectCar} alt="select-car image" />
          </span>
          <h2>Selecione o carro</h2>
          <p>
            Oferecemos uma grande variedade de veículos para todas as suas
            necessidades de direção. Temos o carro perfeito para atender às suas
            necessidades
          </p>
        </InfoItem>
        <InfoItem>
          <span>
            <img src={LetsDrive} alt="lets-drive image" />
          </span>
          <h2>Fale com um Operador</h2>
          <p>
            Nossos operadores experientes e amigáveis estão sempre prontos para
            ajudar com qualquer dúvida ou preocupação
          </p>
        </InfoItem>
        <InfoItem>
          <span>
            <img src={ContactOperator} alt="contact-operator image" />
          </span>
          <h2>Vamos Viajar</h2>
          <p>
            Se você está pegando a estrada aberta, nós o cobrimos com nossa
            ampla gama de carros
          </p>
        </InfoItem>
      </InfoWrapper>
    </section>
  );
};

export default PlanYourTrip;
