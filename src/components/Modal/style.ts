import { css, keyframes, styled } from 'styled-components';

const fadeIn = keyframes`
   from { opacity: 0; }
   to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  from { transform: translate(-50%, -50%) scale(0); }
  to { transform: translate(-50%, -50%) scale(1);  }
`;

const scaleOut = keyframes`
  from { transform: translate(-50%, -50%) scale(1); }
  to { transform: translate(-50%, -50%) scale(0); }
`;

export const Container = styled.div<{ $isLeaving: boolean }>`
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4px);
    z-index: 401;
    animation: ${fadeIn} 0.3s forwards;

    ${({ $isLeaving }) =>
      $isLeaving &&
      css`
        animation: ${fadeOut} 0.3s forwards;
      `}
  }

  .content {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 100%;
    max-width: 400px;
    padding: 24px;
    border-radius: 16px;
    background: #212529;
    box-shadow: 0px 11px 20px 0px rgba(0, 0, 0, 0.1);
    z-index: 402;
    outline: none;
    animation: ${scaleIn} 0.3s forwards;

    ${({ $isLeaving }) =>
      $isLeaving &&
      css`
        animation: ${scaleOut} 0.3s forwards;
      `}

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 48px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: transparent;
        outline: none;
        width: 48px;
        height: 48px;
      }

      strong {
        font-size: 18px;
        letter-spacing: -1px;
        font-weight: 700;
        color: #fff;
      }

      .rightAction {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .main {
      margin-top: 40px;
    }
  }
`;
