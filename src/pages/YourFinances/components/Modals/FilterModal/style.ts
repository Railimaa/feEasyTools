import styled from 'styled-components';

export const ContainerAccounts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    line-height: 23.4px;
    letter-spacing: -1px;
  }

  .actions {
    margin-bottom: 24px;

    button {
      width: 100%;
      text-align: left;
      padding: 12px;
      border-radius: 8px;
      border: none;
      background: none;
      outline: none;
      color: #fff;

      &:hover {
        background: #383838;
        transition: all 0.1s ease-in-out;
      }
    }

    .btn-active {
      background: #525252 !important;
      transition: all 0.1s ease-in-out;
    }
  }
`;

export const ContainerYears = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  span {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    line-height: 23.4px;
    letter-spacing: -1px;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 200px;
    margin-bottom: 20px;

    button {
      width: 48px;
      height: 48px;
      border: none;
      outline: none;
      background: none;
    }

    small {
      color: #fff;
      font-weight: 500;
      font-size: 14px;
      letter-spacing: -0.5px;
    }
  }

  button {
    width: 100%;
  }
`;
