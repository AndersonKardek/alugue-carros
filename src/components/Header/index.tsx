import carLogo from "/car-logo.png";
import { Content, ListStyle } from "./styles";

import ButtonModel from "../ButtonModel";
import Container from "../Container";

import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link to="/" className="logoWrapper">
          <img src={carLogo} alt="car logo" />
          <h1>
            Alugue <br /> Carros
          </h1>
        </Link>

        <ListStyle>
          <Link to="/about" className="link">
            Sobre Nós
          </Link>

          <Link to="/car-models" className="link">
            Modelos dos Carros
          </Link>

          <Link to="/testimonials" className="link">
            Depoimentos
          </Link>

          <Link to="/contact" className="link">
            Contato
          </Link>
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
