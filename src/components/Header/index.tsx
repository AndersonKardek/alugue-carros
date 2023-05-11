import carLogo from "/car-logo.png";
import { Content, ListStyle } from "./styles";

import { useState } from "react";

import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";

import ButtonModel from "../ButtonModel";
import Container from "../Container";

import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [mobile, setMobile] = useState<boolean>(false);

  const showMobileMenu = () => {
    setMobile(!mobile);
  };

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

        {/* Mobile  */}
        <button onClick={showMobileMenu} className="hambMenu">
          {mobile ? <AiOutlineClose /> : <SlMenu />}
        </button>

        <section
          onClick={showMobileMenu}
          className={` ${mobile ? "mobileNav" : "showMobile"}`}
        >
          <Link to="/" className="linkMobile">
            Home
          </Link>

          <Link to="/about" className="linkMobile">
            Sobre Nós
          </Link>

          <Link to="/car-models" className="linkMobile">
            Modelos de Carros
          </Link>

          <Link to="/testimonials" className="linkMobile">
            Depoimentos
          </Link>

          <Link to="/contact" className="linkMobile">
            Contato
          </Link>

          <Link to="/" className="linkMobile">
            <ButtonModel name="Login" bgSecundary />
          </Link>

          <Link to="/" className="linkMobile">
            <ButtonModel name="Register" />
          </Link>
        </section>
      </Content>
    </Container>
  );
};

export default Header;
