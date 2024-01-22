import styled from 'styled-components';

export const Container = styled.div<{ theme: 'dark' | 'light' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff5f5;
    width: 52px;
    height: 52px;
    border-radius: 999px;
    margin-top: 20px;
  }

  .text {
    font-weight: bold;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
    width: 180px;
    text-align: center;
    letter-spacing: -0.5px;
  }

  .description {
    font-weight: 400;
    color: ${({ theme }) => (theme === 'dark' ? '#dee2e6' : '#000')};
    letter-spacing: -0.5px;
    text-align: center;
  }

  .buttons {
    width: 100%;

    button {
      width: 100%;
      margin-top: 20px;
    }
  }
`;
