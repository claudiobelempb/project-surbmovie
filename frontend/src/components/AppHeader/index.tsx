import { FaGithub } from 'react-icons/fa';
import { Box, Brand, Container, Content, Icon } from './styles';

const AppHeader: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <Box>
            <Brand to={'/'}>
              <h1>Surb Movie</h1>
            </Brand>
          </Box>
          <Box>
            <Icon to={'/'}>
              <FaGithub /> /surb
            </Icon>
          </Box>
        </Content>
      </Container>
    </>
  );
};

export default AppHeader;
