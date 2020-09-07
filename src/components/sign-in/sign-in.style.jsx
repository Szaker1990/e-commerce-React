import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 800px) {
  width: 80%;
  }
`;
export const SignInTitle = styled.h2`
  margin: 10px 0;
`;
export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 550px) {
  flex-direction: column;
  }
`;
export const ErrorMessage = styled.h3`
  color: red;
  font-size: 16px;
`