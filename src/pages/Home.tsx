import Container from "../components/Container";
import Hero from "../components/Hero";
import PlanYourTrip from "../components/PlanYourTrip";
import BookCar from "../components/bookCar";
import VehicleModels from "../components/vehicleModels";

const Home: React.FC = () => {
  return (
    <Container>
      <Hero />
      <BookCar />
      <PlanYourTrip />
      <VehicleModels />
    </Container>
  );
};
export default Home;
