import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: center;
    background-color: ${theme.variant.blueDark};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 80%;
    display: flex;
    justify-content: space-between;
    background-color: ${theme.variant.blueDark};
  `}
`;

export const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
  `}
`;

export const Brand = styled(Link)`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.ST15};
    font-weight: 700;
    color: ${theme.variant.white};
  `}
`;

export const Icon = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    svg {
      font-size: ${theme.fonts.size.FDVW02};
      font-weight: 700;
      color: ${theme.variant.white};
      text-transform: uppercase;
    }
    font-size: ${theme.fonts.size.ST15};
    font-weight: 700;
    color: ${theme.variant.white};
    text-transform: uppercase;
  `}
`;
