import Container from "@components/layout/common/container";
import ComingSoon from "@components/layout/homepage/coming-soon";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <Container>
      <ComingSoon></ComingSoon>
    </Container>
  );
};
export default HomePage;
