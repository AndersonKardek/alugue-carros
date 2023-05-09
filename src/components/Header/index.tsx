import carLogo from "/car-logo.png";
import ButtonModel from "../ButtonModel";
import { Container, ListStyle } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
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

      <div>
        <ButtonModel name="Login" />
        <ButtonModel name="Register" hasBackgroundColor={true}/>
     
      </div>
    </Container>
  );
};

export default Header;
