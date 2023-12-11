import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: #272727;
  border-radius: 24px;
  margin-top: 8px;

  small {
    padding: 4px;
    background: #e0e3ff;
    color: #5061fc;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 16px;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    button {
      background: none;
      outline: none;
      border: none;
    }
  }
`;
