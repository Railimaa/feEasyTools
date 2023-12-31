import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 16px;
  border-radius: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;

  .titleAndDescription {
    span {
      display: block;
      font-size: 16px;
      color: #fff;
    }

    small {
      color: #fff;
      font-size: 13px;
      letter-spacing: -0.5px;
    }
  }

  .dateAndCategory {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    margin-top: 20px;

    span {
      display: block;
      color: #fff;
      opacity: 0.5;
      font-size: 14px;
      letter-spacing: -0.5px;
      line-height: 20.5px;
    }

    small {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #fff;
    }
  }

  button {
    background: transparent;
    border: none;
    outline: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;
