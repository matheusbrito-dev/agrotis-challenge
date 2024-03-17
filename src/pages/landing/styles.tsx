import styled from 'styled-components';

export const LandingBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;
export const FormBox = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: end;
  height: 100%;
  margin-right: 15%;
  @media (max-width: 800px) {
    margin-right: 0px;
    align-items: center;
  }
`;
