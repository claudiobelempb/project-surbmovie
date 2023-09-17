import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 28rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border-radius: 0.5rem;
    background-color: #fff;
    position: relative;
    /* opacity: 0.8; */
    cursor: pointer;

    &:hover {
      opacity: 1;
      /* transform: scale(0.9); */
    }
  `}
`;

export const ContentImg = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40rem;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }

    position: relative;
    & img {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 10rem;
    align-items: flex-end;
    flex-direction: column;
    padding: 1rem;
    /* position: absolute;
    bottom: 2.5rem; */
  `}
`;

export const Box = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 7rem;
  `}
`;

export const BoxStar = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    color: ${theme.variant.yellow};

    & svg {
      font-size: 2rem;
    }
  `}
`;

export const BoxStarTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.variant.white};
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${theme.variant.yellow};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 1.4rem;
    text-align: center;
    font-weight: 700;
    color: ${theme.variant.blackHsl};
  `}
`;

export const SubTitle = styled.p`
  ${({ theme }) => css`
    font-size: 1.2rem;
    text-align: center;
    color: ${theme.variant.blackHsl};
    font-weight: 700;
  `}
`;

export const BoxLink = styled(Link)`
  ${({ theme }) => css`
    width: 10rem;
    height: 3.5rem;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem 1.5rem;
    background-color: ${theme.variant.blue};
    color: ${theme.variant.white};
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    margin-bottom: 3rem;
    font-weight: 700;
    font-size: 1.5rem;

    &:hover {
      transform: scale(1.3);
    }
  `}
`;
