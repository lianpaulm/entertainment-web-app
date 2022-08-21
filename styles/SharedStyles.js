import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 1rem;

  @media (min-width: 600px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 0 0;
  }
`;

export const AppWrapper = styled.div`
  max-width: 1366px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  @media (min-width: 1024px) {
    gap: 2rem;
  }
`;

export const Heading = styled.h1`
  font-size: clamp(1.1rem, 2.5vw, 1.85rem);
  font-weight: 300;
  margin-bottom: 1.5rem;
`;
