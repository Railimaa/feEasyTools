import styled from 'styled-components';

export const HeaderC = styled.header<{ theme: 'dark' | 'light' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 80px;
  width: 100%;
  z-index: 400;
  background: ${({ theme }) => (theme === 'dark' ? '#111113' : '#FFFFFF')};

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    @media (min-width: 768px) {
      max-width: 70%;
    }

    .logo {
      display: flex;
      align-items: center;
      padding-left: 10px;
      gap: 8px;

      h2 {
        letter-spacing: -0.5px;
        font-size: 20px;
        color: #5f3dc4;
      }
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 20px;
      padding-right: 10px;

      @media (min-width: 768px) {
        padding-right: none;
      }

      #theme {
        width: 48px;
        height: 48px;
      }

      button {
        border: none;
        background: none;
        outline: none;
      }
    }
  }
`;
