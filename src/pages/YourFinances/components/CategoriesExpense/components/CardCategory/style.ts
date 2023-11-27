import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 16px;
  background: #e5dbff;
  margin-top: 18px;

  .iconAndName {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    span {
      color: #343a40;
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
