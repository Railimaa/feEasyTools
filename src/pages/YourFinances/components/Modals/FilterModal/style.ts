import styled from 'styled-components';

export const Container = styled.div`
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

  .accounts {
    margin-bottom: 24px;

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      text-align: left;
      padding: 12px;
      border-radius: 8px;
      border: none;
      background: none;
      outline: none;
      color: #fff;
      transition: 0.1s ease;

      &:hover {
        background: #383838;
      }
    }
  }

  .year {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .action {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 200px;

      button {
        border: none;
        background: none;
        outline: none;
      }
    }
  }

  .btn-active {
    background: #525252 !important;
  }

  button {
    width: 100%;
  }
`;
