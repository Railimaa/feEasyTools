import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 16px;
  right: 16px;
  background: #fff;
  width: 48px;
  height: 48px;
  border-radius: 48px;
  z-index: 400;

  button {
    background: transparent;
    border: none;
    outline: none;
  }
`;
