import AppCard from '../../components/AppCard';
import AppHeader from '../../components/AppHeader';
import AppPagination from '../../components/AppPagnation';

import { Container, Content } from './styles';

const HomePage: React.FC = () => {
  return (
    <>
      <Container>
        <AppHeader />
        <AppPagination />
        <Content>
          <AppCard />
          <AppCard />
          <AppCard />
          <AppCard />
        </Content>
      </Container>
    </>
  );
};

export default HomePage;
