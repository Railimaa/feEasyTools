import styled from 'styled-components';

import backDark from '../../assets/images/backDark.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  width: 100%;
  min-height: 100vh;
  background-image: url(${backDark});
  background-size: cover;
`;

export const Form = styled.form`
  padding: 16px;

  @media (min-width: 768px) {
    padding: 40px;
  }

  button {
    width: 100%;
    margin-top: 30px;
  }
`;
