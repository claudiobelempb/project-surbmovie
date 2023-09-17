import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    width: 100%;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 90%;
    min-height: 100%;
    display: flex;
    margin: 0 auto;
    gap: 2rem;
    margin-top: 3rem;
  `}
`;

export const BoxImage = styled.div`
  ${({ theme }) => css`
    width: 28rem;
    height: 40rem;
    border: 3px solid ${theme.variant.blueDark};
    border-radius: 0.5rem;
  `}
`;

export const BoxLeft = styled.div`
  ${({ theme }) => css`
    height: 45rem;
  `}
`;

export const BoxRight = styled.div`
  ${({ theme }) => css`
    width: 70%;
    display: flex;
    flex-direction: column;
  `}
`;

export const BoxForm = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
  `}
`;

export const BoxInput = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3rem;
    & input[type='email'],
    input[type='number'] {
      border-radius: 0.5rem;
      width: 100%;
      height: 4rem;
      border: none;
      background-color: ${theme.variant.white};
      color: ${theme.variant.grayLight};
      font-size: 1.5rem;
      font-weight: 400;
      padding: 1rem;

      &:focus {
        border: 2px solid ${theme.variant.blueDark};
      }
    }
  `}
`;

export const BoxButton = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 4rem;
    display: flex;
    gap: 2rem;
    margin-top: 3rem;
    & input[type='button'],
    input[type='submit'] {
      border-radius: 0.5rem;
      width: 100%;
      border: none;
      background-color: ${theme.variant.blueDark};
      color: ${theme.variant.white};
      font-size: 1.5rem;
      font-weight: 700;
      cursor: pointer;
    }
  `}
`;
