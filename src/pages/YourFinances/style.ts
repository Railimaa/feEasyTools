import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  width: 100vw;
  height: 100vh;
  background: #212529;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 60px;
    padding-top: 24px;
  }

  .main {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 16px;

    @media (min-width: 768px) {
      flex-direction: row;
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
