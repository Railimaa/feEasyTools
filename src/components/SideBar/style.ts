import styled from 'styled-components';

export const Container = styled.div<{ open: boolean }>`
  background: #272727;
  box-shadow: ${({ open }) => (open ? '0px 22px 70px 4px #5f3dc4' : '')};
  position: fixed;
  top: 0;
  width: 300px;
  height: 100%;
  left: ${({ open }) => (open ? '0' : '100%')};
  z-index: 200;
  transition: all 0.4s ease-in-out;

  .closeIcon {
    display: flex;
    position: fixed;
    top: 0;
    margin-left: 260px;
    margin-top: 20px;

    @media (min-width: 339px) {
      display: none;
    }

    button {
      border: none;
      background: transparent;
    }
  }

  button {
    background: transparent;
  }
`;
