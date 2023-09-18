import axios, { AxiosRequestConfig } from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/requests';
import { Movie } from '../../utils/types/Movie';
import { validateEmail } from '../../utils/validate';
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

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`).then(response => {
      const data = response.data as Movie;
      setMovie(data);
    });
  }, [movieId]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.target as any).email.value;
    const score = (event.target as any).score.value;

    if (!validateEmail(email)) {
      return;
    }

    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: 'PUT',
      url: '/reviews',
      data: {
        email,
        score,
        movieId
      }
    };

    axios(config).then(response => {
      console.log(response.data);
      navigate('/');
    });
  };

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
              <form onSubmit={handleSubmit}>
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
                    name='score'
                    id='score'
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
