import styled, { css, keyframes } from 'styled-components';

const overlayIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const overlayOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

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

export const Container = styled.div<{
  $isLeaving: boolean;
  theme: 'dark' | 'light';
}>`
  position: fixed;
  width: 300px;
  height: 100vh;
  background: ${({ theme }) => (theme === 'dark' ? '#111113' : '#FFFFFF')};
  z-index: 999;
  animation: ${fadeIn} 0.3s forwards;

  ${({ $isLeaving }) =>
    $isLeaving &&
    css`
      animation: ${fadeOut} 0.3s forwards;
    `}

  .closeIcon {
    position: fixed;
    top: 20px;
    left: 20px;

    button {
      border: none;
      background: transparent;
    }
  }
`;

export const Overlay = styled.div<{ $isLeaving: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
  z-index: 998;
  animation: ${overlayIn} 0.3s forwards;

  ${({ $isLeaving }) =>
    $isLeaving &&
    css`
      animation: ${overlayOut} 0.3s forwards;
    `}
`;
