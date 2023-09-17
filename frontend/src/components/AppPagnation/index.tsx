import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MoviePage } from '../../utils/types/MoviePage';
import { Box, Container, Content, HomeButton, PagFont } from './styles';

type PospsPage = {
  page: MoviePage;
  onChange: Function;
};

const AppPagination: React.FC<PospsPage> = ({ page, onChange }) => {
  return (
    <Container>
      <Content>
        <Box>
          <HomeButton
            disabled={page.first}
            onClick={() => onChange(page.number - 1)}
          >
            <FaChevronLeft />
          </HomeButton>
        </Box>
        <PagFont>
          {page.number + 1} de {page.totalPages}
        </PagFont>
        <Box>
          <HomeButton
            disabled={page.last}
            onClick={() => onChange(page.number + 1)}
          >
            <FaChevronRight />
          </HomeButton>
        </Box>
      </Content>
    </Container>
  );
};

export default AppPagination;
