import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 10%;
  padding: 1rem;

  @media (max-width: 600px) {
    margin-bottom: 20%;
  }
  width: 100%;
  gap: 1rem;
`;

export const BoxHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 600px) {
    margin-top: 25%;
    display: grid;
    grid-template-rows: 100px 1fr;
    justify-items: center;
  }
`;
export const BoxButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    height: 8%;
    width: 8%;
  }
`;
