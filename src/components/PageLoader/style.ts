import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #5f3dc4;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    .logo {
      display: flex;
      align-items: center;
      gap: 8px;

      span {
        color: #fff;
        font-size: 20px;
      }
    }
  }
`;
