import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 0 auto;
    padding-bottom: 3rem;
  `}
`;

export const Box = styled.div`
  ${({ theme }) => css``}
`;
