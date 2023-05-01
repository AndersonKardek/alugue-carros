import carLogo from "/car-logo.png";
import { Container, ListStyle, Button } from "./styles";

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
        <Button type="submit">Login</Button>
        <Button type="submit">Register</Button>
      </div>
    </Container>
  );
};

export default Header;
