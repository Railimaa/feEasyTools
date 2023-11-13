import { keyframes, styled } from 'styled-components';

const overlayShow = keyframes`
   from {
    opacity: 0;
  }
   to {
    opacity: 1;
    }
`;

export const Container = styled.div`
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4px);
    z-index: 401;
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .content {
    width: 100%;
    max-width: 400px;
    padding: 24px;
    border-radius: 16px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #212529;
    box-shadow: 0px 11px 20px 0px rgba(0, 0, 0, 0.1);
    z-index: 402;
    outline: none;

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
