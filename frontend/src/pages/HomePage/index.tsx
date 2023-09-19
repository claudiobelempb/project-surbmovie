import { useEffect, useState } from 'react';
import AppCard from '../../components/AppCard';
import AppHeader from '../../components/AppHeader';
import AppPagination from '../../components/AppPagnation';

import axios from 'axios';

import { BASE_URL } from '../../utils/requests';
import { MoviePage } from '../../utils/types/MoviePage';
import { Container, Content } from './styles';

const HomePage: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`, {
        withCredentials: false
      })
      .then(response => {
        const data = response.data as MoviePage;
        setPage(data);
      });
  }, [pageNumber]);

  const handlePageChange = (newPage: number) => {
    setPageNumber(newPage);
  };

  return (
    <>
      <Container>
        <AppHeader />
        <AppPagination page={page} onChange={handlePageChange} />
        <Content>
          {page.content.map(item => (
            <AppCard key={item.movieId} movie={item} />
          ))}
        </Content>
      </Container>
    </>
  );
};

export default HomePage;
