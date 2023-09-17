import {
  Box,
  BoxLink,
  BoxStar,
  BoxStarTitle,
  Container,
  Content,
  ContentImg,
  SubTitle,
  Title
} from './styles';

import { Movie } from '../../utils/types/Movie';
import AppStar from '../AppStar/index';

type PropsMovie = {
  movie: Movie;
};

const AppCard: React.FC<PropsMovie> = ({ movie }: PropsMovie) => {
  return (
    <Container>
      <ContentImg>
        <img src={movie.url} alt='' />
        <BoxLink to={`/review/${movie.movieId}`}>Avaliar</BoxLink>
      </ContentImg>
      <Content>
        <Box>
          <Title>{movie.title}</Title>
          <BoxStar>
            <BoxStarTitle>
              {movie.score > 0 ? movie.score.toFixed(1) : 0}
            </BoxStarTitle>
            <>
              <AppStar fill={movie.score} />
            </>
            <SubTitle>{movie.count} avaliações</SubTitle>
          </BoxStar>
        </Box>
      </Content>
    </Container>
  );
};

export default AppCard;
