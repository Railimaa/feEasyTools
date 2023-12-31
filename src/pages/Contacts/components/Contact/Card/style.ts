import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #272727;
  padding: 16px;
  margin-top: 12px;
  box-shadow: 0px 4px 10px 0px #6741d9;
  border-radius: 8px;

  .info {
    .nameAndCategory {
      display: flex;
      align-items: center;
      gap: 4px;

      strong {
        font-size: 16px;
        color: #fff;
      }

      small {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding: 4px;
        background: #000;
        font-size: 12px;
        text-transform: uppercase;
        color: #fff;
        border-radius: 4px;
      }
    }

    span {
      display: block;
      color: #bcbcbc;
      font-size: 14px;
      font-weight: 900;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      background: none;
      outline: none;
      border: none;
    }
  }
`;
