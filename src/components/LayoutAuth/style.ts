import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #272727;
  width: 100vw;
  height: 100vh;
  padding: 16px;
  overflow-y: hidden;

  .content {
    width: 100%;
    max-width: 508px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
    gap: 40px;
    padding: 40px;
    border-radius: 20px;
    background: #000;
    box-shadow:
      rgba(103, 65, 217, 0.09) 0px 2px 1px,
      rgba(103, 65, 217, 0.09) 0px 4px 2px,
      rgba(103, 65, 217, 0.09) 0px 8px 4px,
      rgba(103, 65, 217, 0.09) 0px 16px 8px,
      rgba(103, 65, 217, 0.09) 0px 32px 16px;

    @media (min-width: 418px) {
      padding-top: 40px;
      padding-bottom: 40px;
      padding-left: 80px;
      padding-right: 80px;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 40px;

      h3 {
        color: #fff;
      }

      @media (min-height: 634px) {
        margin-top: 0;
      }
    }

    .form {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
    }
  }
`;
