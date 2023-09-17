import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 7rem;
    width: 100%;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 80%;
    display: flex;
    justify-content: center;
    height: 7rem;
    align-items: center;
    margin: 0 auto;
    gap: 2rem;
  `}
`;

export const Box = styled.div`
  ${({ theme }) => css`
    width: 4rem;
    height: 4rem;
  `}
`;

export const PagFont = styled.p`
  ${({ theme }) => css`
    color: ${theme.variant.blueDark};
    font-weight: bold;
  `}
`;

export const HomeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  cursor: pointer;

  ${({ theme }) => css`
    &:disabled {
      cursor: not-allowed;
      border: 1px solid ${theme.variant.grayLightHsl};
      & svg {
        color: ${theme.variant.grayLightHsl};
        font-size: 1.8rem;
      }
    }
    border: 1px solid ${theme.variant.blueDark};
    border-radius: 0.5rem;
    & svg {
      color: ${theme.variant.blueDark};
      font-size: 1.8rem;
    }
  `}
`;
