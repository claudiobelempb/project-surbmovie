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

import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

import ImgFilme from '../../assets/images/filme-01.jpg';
const AppCard: React.FC = () => {
  return (
    <Container>
      <ContentImg>
        <img src={ImgFilme} alt='' />
        <BoxLink to={'/review'}>Avaliar</BoxLink>
      </ContentImg>
      <Content>
        <Box>
          <Title>O Espetacular Homem-Aranha 2: A Ameaça de Electro</Title>
          <BoxStar>
            <BoxStarTitle>3.8</BoxStarTitle>
            <>
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaStarHalfAlt />
              <FaRegStar />
            </>
            <SubTitle>13 avaliações</SubTitle>
          </BoxStar>
        </Box>
      </Content>
    </Container>
  );
};

export default AppCard;
