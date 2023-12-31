import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  padding: 16px;
  border-radius: 32px;
  border-bottom: 1px solid #6741d9;
  background: #1d1d1d;

  span {
    color: #fff;
    font-weight: 500;
    letter-spacing: -0.5px;
    font-size: 16px;
  }

  button {
    border: none;
    outline: none;
    background: none;
  }

  .iconAndName {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;
