import Container from "../components/Container";
import Hero from "../components/Hero";
import BookCar from "../components/bookCar";

const Home: React.FC = () => {
  return (
    <Container>
      <Hero />
      <BookCar />
    </Container>
  );
};
export default Home;
