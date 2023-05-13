import ButtonModel from "../ButtonModel";
import { useState } from "react";

import { DropDownDiv, WrapperSection } from "./styles";

interface IValues {
  id: number;
  name: string;
}

const BookCar: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedPickUpCity, setSelectedPickUpCity] = useState("");
  const [selectedPickOfCity, setSelectedPickOfCity] = useState("");

  const cars: IValues[] = [
    { id: 1, name: "Audi A1 S-line" },
    { id: 2, name: "VW Golf 6" },
    { id: 3, name: "Toyota Camry" },
    { id: 4, name: "BMW 320 MOdernLine" },
    { id: 5, name: "Mercedez-Bens GLK" },
    { id: 6, name: "VW Possant CC" },
  ];

  const PickUpCity: IValues[] = [
    { id: 1, name: "São Paulo" },
    { id: 2, name: "Rio de Janeiro" },
    { id: 3, name: "Campo Grande" },
    { id: 4, name: "Cuiabá" },
    { id: 5, name: "São Luis" },
    { id: 6, name: "Porto Alegre" },
  ];

  const DropOfCity: IValues[] = [
    { id: 1, name: "São Paulo" },
    { id: 2, name: "Rio de Janeiro" },
    { id: 3, name: "Campo Grande" },
    { id: 4, name: "Cuiabá" },
    { id: 5, name: "São Luis" },
    { id: 6, name: "Porto Alegre" },
  ];

  const handleCarsUpdate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCar(e.target.value);
  };

  const handlePickUpCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPickUpCity(e.target.value);
  };

  const handlePickOfCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setSelectedPickOfCity(e.target.value);
  };

  return (
    <WrapperSection>
      <form action="submit" autoComplete="on">
        <DropDownDiv>
          <label htmlFor="cars">Selecione o carro</label>
          <select
            name="cars"
            id="cars"
            value={selectedCar}
            onChange={handleCarsUpdate}
          >
            <option value=""> Escolha um carro...</option>
            {cars.map((car) => {
              return (
                <option key={car.id} value={car.name}>
                  {car.name}
                </option>
              );
            })}
          </select>
        </DropDownDiv>

        <DropDownDiv>
          <label htmlFor="upCity">Retirada</label>
          <select
            name="upCity"
            id="upCity"
            value={selectedPickUpCity}
            onChange={handlePickUpCity}
          >
            <option value=""> Selecione a localização da retirada</option>
            {PickUpCity.map((city) => {
              return (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              );
            })}
          </select>
        </DropDownDiv>

        <DropDownDiv>
          <label htmlFor="ofCity">Entrega</label>
          <select
            name="ofCity"
            id="ofCity"
            value={selectedPickOfCity}
            onChange={handlePickOfCity}
          >
            <option value=""> Selecione a localização da entrega</option>
            {DropOfCity.map((city) => {
              return (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              );
            })}
          </select>
        </DropDownDiv>
      </form>

      <ButtonModel name="Pesquisar" />
    </WrapperSection>
  );
};

export default BookCar;
