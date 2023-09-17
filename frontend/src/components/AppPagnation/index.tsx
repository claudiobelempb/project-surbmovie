import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Box, Container, Content, HomeButton, PagFont } from './styles';

const AppPagination: React.FC = () => {
  return (
    <Container>
      <Content>
        <Box>
          <HomeButton disabled>
            <FaChevronLeft />
          </HomeButton>
        </Box>
        <PagFont>1 de 23</PagFont>
        <Box>
          <HomeButton>
            <FaChevronRight />
          </HomeButton>
        </Box>
      </Content>
    </Container>
  );
};

export default AppPagination;
