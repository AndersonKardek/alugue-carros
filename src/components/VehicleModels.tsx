import { useState } from "react";
import { CAR_DATA } from "./Cars";
import styled from "styled-components";

interface Car {
  id: number;
  name: string;
  price: string;
  img: string;
  model: string;
  mark: string;
  year: string;
  doors: string;
  air: string;
  transmission: string;
  fuel: string;
}

interface CarButtonProps {
  isSelected: boolean;
}

const CarSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15rem 0;
  gap: 0.7rem;

  text-align: center;

  h3 {
    font-size: 2.4rem;
  }

  h2 {
    font-size: 4rem;
  }

  span {
    font-size: 1.6rem;
    width: 100%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    span {
      width: 50%;
    }
  }
`;
const StyledCarButton = styled.button<CarButtonProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  padding: 1.3rem;

  background-color: ${({ isSelected }) => (isSelected ? "#ff4d30" : "#e9e9e9")};
  color: ${({ isSelected }) => (isSelected ? "white" : "")};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};
    transition: all 0.3s ease-in-out;
  }
`;

const CarsWrapper = styled.div`
  display: flex;
`;

const CarDetails = styled.div`
  display: flex;
  margin: 0 10rem;
  gap: 10rem;

  img {
    width: 50rem;
  }

  p {
    font-size: 2rem;
    border: solid 1px;
  }
`;

const VehicleModels: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(CAR_DATA[0]);

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
  };

  return (
    <>
      <CarSectionTitle>
        <h3>Modelos de Veículos</h3>
        <h2>Escolha um modelo de nossa frota</h2>
        <span>
          Escolha entre uma variedade de nossos incríveis veículos para sua
          próxima aventura ou viagem de negócios.
        </span>
      </CarSectionTitle>
      <CarsWrapper>
        <div>
          {CAR_DATA.map((car: Car) => (
            <StyledCarButton
              key={car.id}
              onClick={() => handleCarClick(car)}
              isSelected={selectedCar === car}
            >
              {car.name}
            </StyledCarButton>
          ))}
        </div>
        {selectedCar && (
          <CarDetails>
            <img src={selectedCar.img} alt="car" />
            <div>
              <p>R${selectedCar.price} / por dia</p>
              <p>Modelo | {selectedCar.model}</p>
              <p>Mark | {selectedCar.mark}</p>
              <p>Ano | {selectedCar.year}</p>
              <p>Portas | {selectedCar.doors}</p>
              <p>AC | {selectedCar.air}</p>
              <p>Câmbio: {selectedCar.transmission}</p>
              <p>Combustivel | {selectedCar.fuel}</p>
            </div>
          </CarDetails>
        )}
      </CarsWrapper>
    </>
  );
};

export default VehicleModels;
