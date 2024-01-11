import styled from 'styled-components';

export const HeaderC = styled.header<{ theme: 'dark' | 'light' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100%;
  z-index: 9000;
  background: ${({ theme }) => (theme === 'dark' ? '#111113' : '#FFFFFF')};
  border-bottom: 1px solid
    ${({ theme }) =>
      theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#f2f2f2'};

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
        font-size: 28px;
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
