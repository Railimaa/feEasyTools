import styled from 'styled-components';

export const Container = styled.div``;

export const ButtonC = styled.button`
  border: none;
  padding-left: 24px;
  padding-right: 24px;
  height: 48px;
  margin-top: 12px;
  font-weight: bold;
  color: #fff;
  background: #5f3dc4;
  border-radius: 16px;

  &:hover {
    background: #7048e8;
    transition: all ease-in-out 0.3s;
  }

  &:disabled {
    background: #d0bfff;
    font-weight: 400;
    cursor: not-allowed;
  }

  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
