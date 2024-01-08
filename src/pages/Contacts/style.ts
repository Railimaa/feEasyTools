import styled from 'styled-components';

import backDark from '../../assets/images/backDark.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  min-height: 100vh;
  padding: 16px;
  padding-top: 100px;
  background-image: url(${backDark});
  background-size: cover;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 60px;
    padding-top: 100px;
  }

  .main {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: 768px) {
      flex-direction: row;
      min-height: 600px;
    }

    .left {
      width: 100%;

      @media (min-width: 768px) {
        width: 50%;
      }
    }

    .right {
      width: 100%;

      @media (min-width: 768px) {
        width: 50%;
      }
    }
  }
`;
