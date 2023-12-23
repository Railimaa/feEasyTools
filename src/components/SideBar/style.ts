import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
 from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  } to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

export const Container = styled.div<{ open: boolean; $isLeaving: boolean }>`
  background: #272727;
  box-shadow: ${({ open }) => (open ? '0px 22px 70px 4px #5f3dc4' : '')};
  position: fixed;
  top: 0;
  width: 300px;
  height: 100%;
  left: 0;
  z-index: 200;
  animation: ${fadeIn} 0.3s forwards;

  ${({ $isLeaving }) =>
    $isLeaving &&
    css`
      animation: ${fadeOut} 0.3s forwards;
    `}

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
