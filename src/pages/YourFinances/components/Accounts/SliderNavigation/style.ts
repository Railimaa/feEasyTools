import styled from 'styled-components';

export const Container = styled.div`
  button {
    border: none;
    outline: none;
    background: transparent;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 10px;
    padding-right: 14px;
    border-radius: 999px;
    transition: transparent ease-in-out 0.3s;

    &:hover {
      background: #212529;
      opacity: 0.3;
    }

    &:disabled {
      opacity: 0.4;
      background: none;
    }
  }
`;
