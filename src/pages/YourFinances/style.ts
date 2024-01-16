import styled, { keyframes } from 'styled-components';

const animationTitle = keyframes`
  from { transform: translateX(-100%); opacity: 0;}
  to { transform: translateX(0); opacity: 1;}
`;

export const Container = styled.div<{ theme: 'dark' | 'light' }>`
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 120px;
  gap: 16px;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => (theme === 'dark' ? '#111113' : '#FFFFFF')};

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 60px;
    padding-top: 120px;
  }

  .main {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 768px) {
      flex-direction: row;
      min-height: 600px;
    }

    .left {
      width: 100%;

      @media (min-width: 768px) {
        width: 50%;
      }
    }

    .right {
      width: 100%;

      @media (min-width: 768px) {
        width: 50%;
      }
    }
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 60px;

    h2 {
      position: relative;
      color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
      overflow: hidden;
    }

    h2::after {
      content: '';
      display: block;
      height: 2px;
      margin-top: 10px;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.8),
        transparent
      );
      animation: ${animationTitle} 2s infinite;
    }
  }
`;
