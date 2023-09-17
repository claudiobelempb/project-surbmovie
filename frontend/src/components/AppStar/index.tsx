import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

type PropsStar = {
  fill: number;
};

const AppStar: React.FC<PropsStar> = ({ fill }: PropsStar) => {
  // EX:
  // getFills(3.5) => [1, 1, 1, 0.5, 0]
  // getFills(4.1) => [1, 1, 1, 1, 0.5]
  function getFills(score: number) {
    const fills = [0, 0, 0, 0, 0];

    const integerPart = Math.floor(score);

    for (let i = 0; i < integerPart; i++) {
      fills[i] = 1;
    }

    const diff = score - integerPart;
    if (diff > 0) {
      fills[integerPart] = 0.5;
    }

    return fills;
  }

  const Star = ({ fill }: PropsStar) => {
    if (fill === 0) {
      return <FaRegStar />;
    } else if (fill === 1) {
      return <FaStar />;
    } else {
      return <FaStarHalfAlt />;
    }
  };

  const fills = getFills(fill);

  return (
    <>
      <Star fill={fills[0]} />
      <Star fill={fills[1]} />
      <Star fill={fills[2]} />
      <Star fill={fills[3]} />
      <Star fill={fills[4]} />
    </>
  );
};

export default AppStar;
