import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 16px;
  background: #272727;
  margin-top: 8px;

  .iconAndName {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    span {
      color: #fff;
      font-weight: 700;
      font-size: 16px;
      letter-spacing: -0.5px;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    button {
      border: none;
      outline: none;
      background: none;
    }
  }
`;
