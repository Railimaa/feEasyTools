import styled from 'styled-components';

export const Container = styled.div<{ open: boolean }>`
  background: #272727;
  position: fixed;
  top: 0;
  width: 300px;
  height: 100%;
  left: ${({ open }) => (open ? '0' : '100%')};
  z-index: 200px;
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
`;
