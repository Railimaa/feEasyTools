import styled from 'styled-components';

export const Container = styled.div`
  .emptyContact {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      border-bottom: 1px solid #bcbcbc;
      padding-bottom: 20px;
    }

    p {
      color: #fff;
      text-align: center;
      width: 100%;
      max-width: 400px;

      span {
        color: #6741d9;
      }
    }
  }
`;
