import AppHeader from '../../components/AppHeader';

import {
  BoxButton,
  BoxForm,
  BoxImage,
  BoxInput,
  BoxLeft,
  BoxRight,
  Container,
  Content
} from './styles';

import ImgMovie01 from '../../assets/images/filme-01.jpg';
const FilmReview: React.FC = () => {
  return (
    <>
      <Container>
        <AppHeader />
        <Content>
          <BoxLeft>
            <BoxImage>
              <img src={ImgMovie01} alt='' />
            </BoxImage>
          </BoxLeft>
          <BoxRight>
            <h2>Tulsa King – Season 1</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text.
            </p>
            <BoxForm>
              <form>
                <BoxInput>
                  <input
                    placeholder='Informe seu E-mail'
                    type='email'
                    name=''
                    id=''
                  />
                  <input
                    placeholder='Informe sua avaliação'
                    type='number'
                    name=''
                    id=''
                  />
                </BoxInput>
                <BoxButton>
                  <input type='submit' value='Salvar' />
                  <input type='button' value='Cancelar' />
                </BoxButton>
              </form>
            </BoxForm>
          </BoxRight>
        </Content>
      </Container>
    </>
  );
};

export default FilmReview;
