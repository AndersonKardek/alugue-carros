import carHero from "/car-hero.png";
import bgHero from "/bg-hero.png";

import { Link } from "react-router-dom";

import { CiCircleCheck } from "react-icons/ci";
import { FiChevronRight } from "react-icons/fi";

import { ImgBgHero, ImgCarHero, ContentWrapper } from "./styles";
import ButtonModel from "../ButtonModel";

const Hero: React.FC = () => {
  const bookBtn = (): void => {
    const bookCarElement: HTMLElement | null =
      document.querySelector("#bookCar");

    if (bookCarElement) {
      bookCarElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <ImgBgHero src={bgHero} alt="bg-hero" />

      <ContentWrapper>
        <div>
          <h5>Planeje sua viagem agora</h5>

          <h4>
            Economize <strong>muito</strong> com nosso aluguel de carros
          </h4>

          <span>
            Alugue o carro dos seus sonhos. Preços incriveis, Km ilimitados,
            horários flexiveis e muito mais.
          </span>

          <div className="buttons">
            <Link onClick={bookBtn} to="/" className="link">
              Alugue carro
              <CiCircleCheck />
            </Link>

            <ButtonModel
              name="Saiba Mais"
              hasIcon
              bgSecundary
              showIcon={<FiChevronRight />}
            />
          </div>
        </div>

        <ImgCarHero src={carHero} alt="car-hero" />
      </ContentWrapper>
    </>
  );
};

export default Hero;
