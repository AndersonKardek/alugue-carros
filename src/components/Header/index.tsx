import carLogo from "/car-logo.png";
import ButtonModel from "../ButtonModel";
import { Content, ListStyle } from "./styles";
import Container from "../Container";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <img src={carLogo} alt="car logo" />
          <h1>
            Alugue <br /> Carros
          </h1>
        </div>

        <ListStyle>
          <li>
            <a href="/">Sobre Nós</a>
          </li>
          <li>
            <a href="/">Modelos dos Veículos</a>
          </li>
          <li>
            <a href="/">Depoimentos</a>
          </li>
        </ListStyle>

        <div className="buttons">
          <ButtonModel name="Login" bgSecundary />
          <ButtonModel name="Register" />
        </div>
      </Content>
    </Container>
  );
};

export default Header;
