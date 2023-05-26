import Container from "../components/Container";
import Hero from "../components/Hero";
import PlanYourTrip from "../components/PlanYourTrip";
import BookCar from "../components/bookCar";

const Home: React.FC = () => {
  return (
    <Container>
      <Hero />
      <BookCar />
      <PlanYourTrip />
    </Container>
  );
};
export default Home;
