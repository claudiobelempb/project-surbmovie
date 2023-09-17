import { useParams } from 'react-router-dom';
import AppFormCard from '../../components/AppFormCard';

const FilmReview: React.FC = () => {
  const patams = useParams();

  return (
    <>
      <AppFormCard movieId={`${patams.movieId}`} />
    </>
  );
};

export default FilmReview;
