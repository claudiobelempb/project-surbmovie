import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../utils/requests';
import { Movie } from '../../utils/types/Movie';
import AppHeader from '../AppHeader';
import {
  BoxButton,
  BoxForm,
  BoxImage,
  BoxInput,
  BoxLeft,
  BoxLink,
  BoxRight,
  Container,
  Content
} from './styles';

type PropsMovie = {
  movieId: string;
};

const AppFormCard: React.FC<PropsMovie> = ({ movieId }) => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`).then(response => {
      const data = response.data as Movie;
      setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      <Container>
        <AppHeader />
        <Content>
          <BoxLeft>
            <BoxImage>
              <img src={movie?.url} alt='' />
            </BoxImage>
          </BoxLeft>
          <BoxRight>
            <h2>{movie?.title}</h2>
            <p>Avaliação: {movie?.score}</p>
            <BoxForm>
              <form>
                <BoxInput>
                  <input
                    placeholder='Informe seu E-mail'
                    type='email'
                    name='email'
                    id=''
                  />
                  <input
                    placeholder='Informe sua avaliação'
                    type='number'
                    name='avaliacao'
                    id='avaliacao'
                    min='1'
                    max='5'
                  />
                </BoxInput>
                <BoxButton>
                  <input type='submit' value='Salvar' />
                  <BoxLink>
                    <Link to={'/'}>Cancelar</Link>
                  </BoxLink>
                </BoxButton>
              </form>
            </BoxForm>
          </BoxRight>
        </Content>
      </Container>
    </>
  );
};

export default AppFormCard;
